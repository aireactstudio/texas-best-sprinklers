/**
 * Script to generate location-specific files for lighting service
 * Run with: node generateLocations.js
 */

const fs = require('fs');
const path = require('path');

// Texas locations from the memory
const locations = [
  { slug: 'aledo', name: 'Aledo' },
  { slug: 'annetta', name: 'Annetta' },
  { slug: 'arlington', name: 'Arlington' },
  { slug: 'azle', name: 'Azle' },
  { slug: 'bedford', name: 'Bedford' },
  { slug: 'benbrook', name: 'Benbrook' },
  { slug: 'brock', name: 'Brock' },
  { slug: 'colleyville', name: 'Colleyville' },
  { slug: 'cool', name: 'Cool' },
  { slug: 'coppell', name: 'Coppell' },
  { slug: 'euless', name: 'Euless' },
  { slug: 'flower-mound', name: 'Flower Mound' },
  { slug: 'fort-worth', name: 'Fort Worth' },
  { slug: 'grand-prairie', name: 'Grand Prairie' },
  { slug: 'grapevine', name: 'Grapevine' },
  { slug: 'haltom-city', name: 'Haltom City' },
  { slug: 'hudson-oaks', name: 'Hudson Oaks' },
  { slug: 'hurst', name: 'Hurst' },
  { slug: 'irving', name: 'Irving' },
  { slug: 'keller', name: 'Keller' },
  { slug: 'lewisville', name: 'Lewisville' },
  { slug: 'mansfield', name: 'Mansfield' },
  { slug: 'millsap', name: 'Millsap' },
  { slug: 'mineral-wells', name: 'Mineral Wells' },
  { slug: 'north-richland-hills', name: 'North Richland Hills' },
  { slug: 'peaster', name: 'Peaster' },
  { slug: 'roanoke', name: 'Roanoke' },
  { slug: 'southlake', name: 'Southlake' },
  { slug: 'springtown', name: 'Springtown' },
  { slug: 'trophy-club', name: 'Trophy Club' },
  { slug: 'watauga', name: 'Watauga' },
  { slug: 'weatherford', name: 'Weatherford' },
  { slug: 'westlake', name: 'Westlake' },
  { slug: 'willow-park', name: 'Willow Park' }
];

// Template for location files
const getLocationTemplate = (location) => {
  const varName = location.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Data';
  
  return `import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const ${varName}: ServiceContent = {
  title: 'Professional Outdoor Lighting in ${location.name}, Texas',
  metaDescription: 'Expert outdoor lighting design and installation in ${location.name}. Enhance your home\'s security, safety, and curb appeal with custom landscape and architectural lighting.',
  heroImage: '/assets/images/optimized/Outdoor-Lighting.png',
  serviceType: ServiceType.LIGHTING,
  intro: "Texas Best Sprinklers provides ${location.name} homeowners with professional outdoor lighting services that enhance your property's beauty, security, and functionality. Our custom lighting designs highlight your home's best features while providing safety and security after dark.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('${location.name}'),
  faqs: getLocationFAQs('${location.name}'),
  testimonial: {
    quote: "The lighting system Texas Best Sprinklers installed transformed our home's exterior. Not only does our house look stunning at night, but we feel much safer with the improved visibility around our property.",
    author: "Robert K.",
    location: "${location.name}, TX",
    rating: 5
  }
};

export default ${varName};
export { ${varName} };
`;
};

// Create location files
const locationsDir = path.join(__dirname, 'locations');

// Create the locations directory if it doesn't exist
if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

// Generate files for each location
locations.forEach(location => {
  const filePath = path.join(locationsDir, `${location.slug}.ts`);
  fs.writeFileSync(filePath, getLocationTemplate(location));
  console.log(`Created ${location.slug}.ts`);
});

console.log('All location files generated successfully!');
