const fs = require('fs');
const path = require('path');

// Directory containing all the article files
const articlesDir = path.join(__dirname, 'src/data/articles/outdoor-lighting');

// Read all files in the directory
const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.ts'));

// Process each file
files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the export line and replace it with the correct version
  const exportRegex = /const (\w+)ArticleHtml = generateLightingArticle\(\1ArticleData\);\s*\n\s*export default \1ArticleHtml;/g;
  const fixedContent = content.replace(
    exportRegex, 
    (match, locationName) => 
      `const ${locationName}ArticleHtml = generateLightingArticle(${locationName}ArticleData);\n\n// Export only the HTML content string, not the whole object\nexport default ${locationName}ArticleHtml.content;`
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, fixedContent);
  console.log(`Updated ${file}`);
});

console.log('All outdoor-lighting article files have been updated!');
