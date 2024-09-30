const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const mdDirectory = './MOPs'; 

// Base URL for raw GitHub content
const githubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/refs/heads/main/MOPs/images/';

// Function to update image paths in markdown
const updateImagePaths = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Regex to find image references in markdown
  const updatedContent = fileContent.replace(/!\[(.*?)\]\((Pasted image.*?)\)/g, (match, altText, imageName) => {
    const newUrl = `${githubBaseUrl}${encodeURIComponent(imageName)}`;
    return `![${altText}](${newUrl})`;
  });

  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
};

// Loop through the markdown directory
fs.readdirSync(mdDirectory).forEach(file => {
  if (path.extname(file) === '.md') {
    const filePath = path.join(mdDirectory, file);
    updateImagePaths(filePath);
  }
});

console.log('Image paths updated!');