// A simpler JavaScript implementation for generating missing service data
const fs = require('fs');
const path = require('path');

// Service types and their corresponding slugs and file names
const SERVICES = [
  { slug: 'drainage', fileName: 'drainageServiceData.ts' },
  { slug: 'irrigation-repair', fileName: 'irrigationRepairServiceData.ts' },
  { slug: 'outdoor-lighting', fileName: 'lightingServiceData.ts' },
  { slug: 'maintenance', fileName: 'maintenanceServiceData.ts' },
  { slug: 'sprinkler-installation', fileName: 'sprinklerInstallationServiceData.ts' }
];

// Read locations from locationData.ts
function extractLocations() {
  const locationDataPath = path.join(__dirname, '../src/data/locationData.ts');
  const content = fs.readFileSync(locationDataPath, 'utf8');
  
  // Extract all location keys using regex
  const locationKeys = [];
  const regex = /'([a-z-]+)':/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    if (!locationKeys.includes(match[1])) {
      locationKeys.push(match[1]);
    }
  }
  
  return locationKeys;
}

// Process each service type
async function generateMissingLocationData() {
  console.log('Starting missing location data generation...');
  
  const allLocations = extractLocations();
  console.log(`Found ${allLocations.length} total locations`);
  
  // Process each service
  for (const service of SERVICES) {
    await processServiceType(service.slug, service.fileName, allLocations);
  }
  
  console.log('Data generation complete!');
}

// Process a single service type
async function processServiceType(serviceSlug, fileName, allLocations) {
  console.log(`\nProcessing ${serviceSlug}...`);
  
  // Import the existing service data file
  const dataFilePath = path.join(__dirname, `../src/data/services/${fileName}`);
  
  // Skip if the file doesn't exist
  if (!fs.existsSync(dataFilePath)) {
    console.log(`Service data file for ${serviceSlug} doesn't exist. Skipping.`);
    return;
  }
  
  // Read the file content
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  
  // Find existing locations in the service data
  const existingLocations = [];
  for (const location of allLocations) {
    if (fileContent.includes(`'${location}': {`)) {
      existingLocations.push(location);
    }
  }
  
  console.log(`- Found ${existingLocations.length} existing locations`);
  
  // Identify missing locations
  const missingLocations = allLocations.filter(loc => !existingLocations.includes(loc));
  
  if (missingLocations.length === 0) {
    console.log(`- No missing locations for ${serviceSlug}. Skipping.`);
    return;
  }
  
  console.log(`- Found ${missingLocations.length} missing locations to generate`);
  
  // Get template location data (use fort-worth if available, otherwise use the first location found)
  const templateLocationKey = fileContent.includes(`'fort-worth': {`) ? 'fort-worth' : existingLocations[0];
  
  // Get the template location data block
  const startIndex = fileContent.indexOf(`'${templateLocationKey}': {`);
  if (startIndex === -1) {
    console.log(`- Template location ${templateLocationKey} not found. Skipping.`);
    return;
  }
  
  // Find the end of the template block (looking for the next location or the end of the object)
  let endIndex = fileContent.indexOf("',", startIndex + 5);
  if (endIndex === -1) {
    endIndex = fileContent.indexOf('};', startIndex);
  }
  
  const templateBlock = fileContent.substring(startIndex, endIndex);
  
  // Generate data for each missing location
  let newLocationDataBlocks = '';
  let count = 0;
  
  for (const location of missingLocations) {
    // Format the location name properly
    const cityName = location
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Generate new location data from the template
    let newBlock = templateBlock
      .replace(new RegExp(`'${templateLocationKey}'`, 'g'), `'${location}'`);
    
    // Replace the location name in the title and description
    if (templateLocationKey === 'fort-worth') {
      newBlock = newBlock
        .replace(/Fort Worth/g, cityName)
        .replace(/fort-worth/g, location);
    } else {
      // If using a different template, try to replace the city name
      const templateCityName = templateLocationKey
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      newBlock = newBlock
        .replace(new RegExp(templateCityName, 'g'), cityName)
        .replace(new RegExp(templateLocationKey, 'g'), location);
    }
    
    // Add the new block
    newLocationDataBlocks += newBlock + ",\n  ";
    count++;
  }
  
  // Add the new blocks to the file content
  const updatedFileContent = fileContent.replace(
    /export const [a-zA-Z]+ServiceData: Record<string, ServiceContent> = {/,
    match => `${match}\n  ${newLocationDataBlocks}`
  );
  
  // Write back to the file
  fs.writeFileSync(dataFilePath, updatedFileContent);
  
  console.log(`- Successfully updated ${serviceSlug}ServiceData.ts with ${count} new locations`);
}

// Run the function
generateMissingLocationData().catch(console.error);
