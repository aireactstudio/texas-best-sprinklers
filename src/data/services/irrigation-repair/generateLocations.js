const fs = require('fs');
const path = require('path');

// Get the list of existing locations in the irrigation-repair directory
const irrigationRepairLocationsDir = path.join(__dirname, 'locations');
const existingIrrigationRepairLocations = fs.readdirSync(irrigationRepairLocationsDir)
  .filter(file => file.endsWith('.ts'))
  .map(file => file.replace('.ts', ''));

// Get the list of all locations from the drainage directory
const drainageLocationsDir = path.join(__dirname, '..', 'drainage', 'locations');
const allLocations = fs.readdirSync(drainageLocationsDir)
  .filter(file => file.endsWith('.ts'))
  .map(file => file.replace('.ts', ''));

// Find locations that need to be created
const locationsToCreate = allLocations.filter(
  location => !existingIrrigationRepairLocations.includes(location)
);

// Template for location files
const getLocationTemplate = (locationSlug, locationName) => `import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const ${locationSlug.replace(/-/g, '')}Data: ServiceContent = {
  title: 'Professional Irrigation Repair in ${locationName}, Texas',
  metaDescription: 'Expert sprinkler system repair services in ${locationName}. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides ${locationName} homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('${locationName}'),
  faqs: getLocationFAQs('${locationName}'),
  testimonial: {
    quote: "Texas Best Sprinklers did an excellent job repairing our irrigation system. They were prompt, professional, and fixed issues that other companies couldn't solve. Our lawn has never looked better!",
    author: "Satisfied Customer",
    location: "${locationName}, TX",
    rating: 5
  }
};

export default ${locationSlug.replace(/-/g, '')}Data;`;

// Function to convert slug to proper name
const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Create the location files
console.log(`Creating ${locationsToCreate.length} new location files...`);
locationsToCreate.forEach(locationSlug => {
  const locationName = slugToName(locationSlug);
  const fileContent = getLocationTemplate(locationSlug, locationName);
  const filePath = path.join(irrigationRepairLocationsDir, `${locationSlug}.ts`);
  
  fs.writeFileSync(filePath, fileContent);
  console.log(`Created: ${locationSlug}.ts`);
});

console.log('All location files created successfully!');

// Update the index.ts file to include all locations
const allLocationImports = allLocations
  .map(location => {
    const variableName = `${location.replace(/-/g, '')}Data`;
    return `import ${variableName} from './locations/${location}';`;
  })
  .join('\n');

const allLocationExports = allLocations
  .map(location => `  '${location}': ${location.replace(/-/g, '')}Data,`)
  .join('\n');

const indexContent = `import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';

// Import all location-specific data
${allLocationImports}

/**
 * Aggregated irrigation repair service data for all locations
 */
export const irrigationRepairData: Record<string, ServiceContent> = {
${allLocationExports}
};

/**
 * Get irrigation repair service data for a specific location
 * @param location The location slug to get data for
 * @returns The service content for the specified location, or null if not found
 */
export const getIrrigationRepairData = (location: string): ServiceContent | null => {
  return irrigationRepairData[location] || null;
};

/**
 * Check if irrigation repair service is available in a specific location
 * @param location The location slug to check
 * @returns True if the service is available in the location, false otherwise
 */
export const isIrrigationRepairAvailable = (location: string): boolean => {
  return location in irrigationRepairData;
};

/**
 * Get all locations where irrigation repair service is available
 * @returns An array of location slugs
 */
export const getIrrigationRepairLocations = (): string[] => {
  return Object.keys(irrigationRepairData);
};

export default irrigationRepairData;`;

const indexPath = path.join(__dirname, 'index.ts');
fs.writeFileSync(indexPath, indexContent);
console.log('Updated index.ts with all locations');
