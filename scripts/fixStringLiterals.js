// Script to fix unterminated string literals in all service data files
const fs = require('fs');
const path = require('path');

// Get all service data files
const serviceDataDir = path.join(__dirname, '../src/data/services');
const serviceFiles = fs.readdirSync(serviceDataDir).filter(file => file.endsWith('ServiceData.ts'));

console.log(`Found ${serviceFiles.length} service data files to check.`);

// Process each file
let totalFixedStrings = 0;
serviceFiles.forEach(file => {
  const filePath = path.join(serviceDataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common patterns of unterminated strings
  // This regex matches strings that start with a single quote and end with a comma without a closing quote
  const unterminated = content.match(/'[^']*,(?!['"])/g);
  
  if (unterminated && unterminated.length > 0) {
    console.log(`Found ${unterminated.length} unterminated strings in ${file}`);
    totalFixedStrings += unterminated.length;
    
    // Replace each unterminated string by adding the missing closing quote
    unterminated.forEach(str => {
      const fixed = str.replace(/,\s*$/, "',");
      content = content.replace(str, fixed);
    });
    
    // Replace other common patterns
    content = content.replace(/title: '([^']*),/g, "title: '$1',");
    content = content.replace(/metaDescription: '([^']*),/g, "metaDescription: '$1',");
    content = content.replace(/heroImage: '([^']*),/g, "heroImage: '$1',");
    content = content.replace(/intro: '([^']*),/g, "intro: '$1',");
    
    // Save the fixed file
    fs.writeFileSync(filePath, content);
    console.log(`Fixed and saved ${file}`);
  } else {
    console.log(`No issues found in ${file}`);
  }
});

console.log(`\nFixed a total of ${totalFixedStrings} unterminated strings across all files.`);
