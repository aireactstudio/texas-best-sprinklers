const fs = require('fs');
const path = require('path');

// Path to the data file
const dataFilePath = path.join(__dirname, 'sprinklerInstallationServiceData.ts');

// Read the current file content
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Define the new service to add to all locations
const newService = `      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }`;

// Find all service arrays that need the new service
// Look for the pattern where the Smart Controller Integration service is the last one
// This pattern appears in locations that have only 2 services
const pattern = /title: 'Smart Controller Integration',[^}]*features: \[[^\]]*\][^}]*\n      }\n    ],/g;

// Replace each occurrence with the existing content plus the new service
fileContent = fileContent.replace(pattern, (match) => {
  return match.replace(/}\n    ],/, `},\n${newService}\n    ],`);
});

// Save the updated content back to the file
fs.writeFileSync(dataFilePath, fileContent);

console.log('Added Seasonal Maintenance Programs service to all locations with only 2 services.');

// Now update locations that already have more services (like Fort Worth)
// Look for the pattern where System Upgrades & Retrofits service is the last one
const patternForLocationsWithMoreServices = /title: 'System Upgrades & Retrofits',[^}]*features: \[[^\]]*\][^}]*\n      }\n    ],/g;

// Read the file again (it's been modified)
fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Replace each occurrence with the existing content plus the new service
fileContent = fileContent.replace(patternForLocationsWithMoreServices, (match) => {
  return match.replace(/}\n    ],/, `},\n${newService}\n    ],`);
});

// Save the updated content back to the file
fs.writeFileSync(dataFilePath, fileContent);

console.log('Added Seasonal Maintenance Programs service to all locations with more services.');

// Final check to make sure all locations have the new service
const finalCheck = fs.readFileSync(dataFilePath, 'utf8');
const serviceCount = (finalCheck.match(/Seasonal Maintenance Programs/g) || []).length;
console.log(`Seasonal Maintenance Programs service added to ${serviceCount} locations.`);
