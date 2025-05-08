/**
 * Service Data Generator Script
 * 
 * This script helps generate service data for missing location/service combinations
 * It reads the locationData and existing service data files to identify missing combinations
 * Then generates template data files that can be customized further
 */

import fs from 'fs';
import path from 'path';
import { LOCATION_MAPPING } from '../src/data/locationData';
import { ServiceType } from '../src/data/serviceTypes';

// Set up paths for data files
const DATA_DIR = path.join(process.cwd(), 'src/data/services');
const OUTPUT_DIR = path.join(process.cwd(), 'src/data/services');

// Service types to check
const serviceTypes = [
  { type: ServiceType.DRAINAGE, file: 'drainageServiceData.ts' },
  { type: ServiceType.IRRIGATION_REPAIR, file: 'irrigationRepairServiceData.ts' },
  { type: ServiceType.OUTDOOR_LIGHTING, file: 'lightingServiceData.ts' },
  { type: ServiceType.MAINTENANCE, file: 'maintenanceServiceData.ts' },
  { type: ServiceType.SPRINKLER_INSTALLATION, file: 'sprinklerInstallationServiceData.ts' }
];

// Get all location slugs
const locationSlugs = Object.keys(LOCATION_MAPPING);

// Template for service data
const generateServiceTemplate = (locSlug: string, serviceTypeName: string, serviceType: ServiceType) => {
  // Format the location name from slug (e.g., 'fort-worth' -> 'Fort Worth')
  const locationName = locSlug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  // Create readable service type name for display
  const readableServiceType = serviceTypeName
    .replace(/_/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `
  '${locSlug}': {
    title: 'Professional ${readableServiceType} in ${locationName}, Texas',
    metaDescription: 'Expert ${readableServiceType.toLowerCase()} services in ${locationName}. Reliable, professional service for your home or business from Texas Best Sprinklers.',
    heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
    serviceType: ServiceType.${serviceTypeName},
    intro: 'Texas Best Sprinklers provides ${locationName} homeowners with comprehensive ${readableServiceType.toLowerCase()} services. We serve residential and commercial properties throughout ${locationName} with quality workmanship and exceptional customer service.',
    benefits: [
      {
        title: 'Professional Service',
        description: 'Fully licensed and insured technicians with years of experience in ${readableServiceType.toLowerCase()}.',
        icon: 'shield'
      },
      {
        title: 'Quality Workmanship',
        description: 'We use only top-quality materials and equipment for lasting results.',
        icon: 'tool'
      },
      {
        title: 'Reliable Service',
        description: 'Prompt, dependable service with clear communication throughout the process.',
        icon: 'clock'
      },
      {
        title: 'Local Expertise',
        description: 'We understand ${locationName}'s unique requirements and provide tailored solutions.',
        icon: 'map-pin'
      }
    ],
    faqs: [
      {
        question: 'How soon can you provide ${readableServiceType.toLowerCase()} services in ${locationName}?',
        answer: 'We typically schedule ${locationName} appointments within 2-3 business days. For emergency services, we offer expedited scheduling options when available.'
      },
      {
        question: 'Do you offer free estimates for ${readableServiceType.toLowerCase()} in ${locationName}?',
        answer: 'Yes, we provide free on-site estimates for all ${readableServiceType.toLowerCase()} services in ${locationName}. Contact us to schedule a convenient time for one of our technicians to assess your needs.'
      },
      {
        question: 'What areas of ${locationName} do you serve?',
        answer: 'We serve all neighborhoods and surrounding areas of ${locationName}, including residential, commercial, and municipal properties.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers provided excellent ${readableServiceType.toLowerCase()} service for our ${locationName} property. The technicians were professional, knowledgeable, and completed the job promptly. Highly recommended!",
      author: "Local ${locationName} Customer",
      location: "${locationName}",
      rating: 5
    },
    updatedAt: '${new Date().toISOString().split('T')[0]}'
  },`;
};

/**
 * Main script execution
 */
async function generateMissingServiceData() {
  console.log('🔍 Analyzing existing service data...');
  
  // For each service type
  for (const service of serviceTypes) {
    let filePath = path.join(DATA_DIR, service.file);
    let missingLocations: string[] = [];
    
    try {
      // Read existing file to check which locations are already defined
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Check which locations are missing
      locationSlugs.forEach(location => {
        if (!fileContent.includes(`'${location}': {`)) {
          missingLocations.push(location);
        }
      });
      
      if (missingLocations.length === 0) {
        console.log(`✅ ${service.file} has data for all locations`);
        continue;
      }
      
      console.log(`⚠️ Found ${missingLocations.length} missing locations in ${service.file}`);
      
      // Generate data for missing locations
      let newServiceData = '';
      missingLocations.forEach(location => {
        newServiceData += generateServiceTemplate(location, service.type.toString(), service.type);
      });
      
      // Create output file with the new data
      const outputFilePath = path.join(OUTPUT_DIR, `${service.type.toString().toLowerCase()}_generated_data.ts`);
      fs.writeFileSync(outputFilePath, 
        `// Generated service data for ${service.type}
import { ServiceContent } from '../serviceTypes';
import { ServiceType } from '../serviceTypes';

// Missing location data for ${service.type}
export const ${service.type.toString().toLowerCase()}GeneratedData: Record<string, ServiceContent> = {
${newServiceData}
};

export default ${service.type.toString().toLowerCase()}GeneratedData;
`);
      
      console.log(`✅ Generated data file: ${outputFilePath}`);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        console.log(`❌ File not found: ${filePath}`);
      } else {
        console.error(`❌ Error processing ${service.file}:`, error);
      }
    }
  }
  
  console.log('✨ Service data generation complete!');
  console.log('Next steps:');
  console.log('1. Review the generated files in src/data/services/');
  console.log('2. Copy the data you want to use into the main service data files');
  console.log('3. Customize the content further for each location');
}

// Run the script
generateMissingServiceData().catch(console.error);
