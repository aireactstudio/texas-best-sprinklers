import fs from 'fs';
import path from 'path';

// Manual import of necessary data as ts-node can't resolve the path aliases
const locationDataPath = path.join(__dirname, '../src/data/locationData.ts');
const locationDataContent = fs.readFileSync(locationDataPath, 'utf8');

// Extract LOCATION_MAPPING using regex
const LOCATION_MAPPING_match = locationDataContent.match(/export const LOCATION_MAPPING = (\{[\s\S]*?\});/);
const LOCATION_MAPPING = LOCATION_MAPPING_match ? eval(`(${LOCATION_MAPPING_match[1]})`) : {};

// Extract locationData using regex
const locationData_match = locationDataContent.match(/export const locationData = (\{[\s\S]*?\});/);
const locationData = locationData_match ? eval(`(${locationData_match[1]})`) : {};

// Import ServiceType
const serviceTypesPath = path.join(__dirname, '../src/data/serviceTypes.ts');
const serviceTypesContent = fs.readFileSync(serviceTypesPath, 'utf8');

// Define the ServiceType enum type
enum ServiceType {
  FENCING = 'fencing',
  IRRIGATION = 'irrigation',
  DRAINAGE = 'drainage-solutions',
  OUTDOOR_LIGHTING = 'outdoor-lighting',
  SPRINKLER_INSTALLATION = 'sprinkler-installation',
  IRRIGATION_REPAIR = 'irrigation-repair',
  MAINTENANCE = 'maintenance',
  BACKFLOW_TESTING = 'backflow-testing'
}

const SERVICES: { type: ServiceType; slug: string }[] = [
  { type: ServiceType.DRAINAGE, slug: 'drainage' },
  { type: ServiceType.IRRIGATION_REPAIR, slug: 'irrigation-repair' },
  { type: ServiceType.OUTDOOR_LIGHTING, slug: 'outdoor-lighting' },
  { type: ServiceType.MAINTENANCE, slug: 'maintenance' },
  { type: ServiceType.SPRINKLER_INSTALLATION, slug: 'sprinkler-installation' },
];

async function generateMissingLocationData() {
  console.log('Starting missing location data generation...');
  
  // Process each service type
  for (const service of SERVICES) {
    await processServiceType(service.type, service.slug);
  }
  
  console.log('Data generation complete.');
}

async function processServiceType(serviceType: ServiceType, serviceSlug: string) {
  console.log(`Processing ${serviceSlug}...`);
  
  // Import the existing service data file
  const dataFilePath = path.join(__dirname, `../src/data/services/${serviceSlug}ServiceData.ts`);
  
  // Skip if the file doesn't exist
  if (!fs.existsSync(dataFilePath)) {
    console.log(`Service data file for ${serviceSlug} doesn't exist. Skipping.`);
    return;
  }
  
  // Read the file content
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  
  // Find the start of the export declaration
  const exportStart = fileContent.indexOf('export const');
  if (exportStart === -1) {
    console.log(`Could not find export statement in ${serviceSlug}. Skipping.`);
    return;
  }
  
  // Simple check that we have the object definition
  if (!fileContent.includes('ServiceData: Record<string, ServiceContent> = {')) {
    console.log(`Could not find service data object in ${serviceSlug}. Skipping.`);
    return;
  }
  
  // Get all locations
  const allLocations = Object.keys(LOCATION_MAPPING);
  
  // Get template location data
  const templateLocationKey = 'fort-worth';
  const templateMatch = fileContent.match(new RegExp(`'${templateLocationKey}': \\{([^}]*\\})+\\},`, 's'));
  
  if (!templateMatch) {
    console.log(`Template location ${templateLocationKey} not found in ${serviceSlug}. Skipping.`);
    return;
  }
  
  const templateLocationData = templateMatch[0];
  
  // Find existing locations in the service data
  const existingLocations = [];
  for (const location of allLocations) {
    if (fileContent.includes(`'${location}': {`)) {
      existingLocations.push(location);
    }
  }
  
  // Identify missing locations
  const missingLocations = allLocations.filter(loc => !existingLocations.includes(loc));
  
  if (missingLocations.length === 0) {
    console.log(`No missing locations for ${serviceSlug}. Skipping.`);
    return;
  }
  
  console.log(`Found ${missingLocations.length} missing locations for ${serviceSlug}`);
  
  // Generate data for each missing location
  let newLocationDataChunks = '';
  for (const location of missingLocations) {
    // Get proper location name
    const locationInfo = locationData[location];
    const locationName = locationInfo?.name || location
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Generate new location data from the template
    let newLocationData = templateLocationData
      .replace(new RegExp(`'${templateLocationKey}'`, 'g'), `'${location}'`)
      .replace(new RegExp('Fort Worth', 'g'), locationName)
      .replace(new RegExp('fort-worth', 'g'), location);
    
    // Append to the combined new data
    newLocationDataChunks += newLocationData;
  }
  
  // Add the new chunks to the file content
  const updatedFileContent = fileContent.replace(
    /export const [a-zA-Z]+ServiceData: Record<string, ServiceContent> = \{/,
    match => `${match}\n  ${newLocationDataChunks}`
  );
  
  // Write back to the file
  fs.writeFileSync(dataFilePath, updatedFileContent);
  
  console.log(`Updated ${serviceSlug} service data with ${missingLocations.length} new locations.`);
}

// Run the function
generateMissingLocationData().catch(console.error);
