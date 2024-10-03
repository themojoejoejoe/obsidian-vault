const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const mdDirectory = './MOPs'; 

// Base URL for raw GitHub content
const githubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/';

// Function to update image paths in markdown and encode spaces
const updateImagePaths = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Regex to find image references in markdown and ensure correct paths
  const updatedContent = fileContent.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    // Remove any existing raw.githubusercontent URLs from imagePath to avoid duplication
    const cleanImagePath = imagePath.replace(/https%3A%2F%2Fraw\.githubusercontent\.com/g, '').trim();
    
    // Extract the filename from the imagePath
    const cleanedImageName = cleanImagePath.split('/').pop();
    
    // Check if the path already contains the base GitHub URL
    if (cleanedImageName.includes('Pasted')) {
      const encodedImageName = encodeURIComponent(cleanedImageName); // Encode spaces
      const newUrl = `${githubBaseUrl}${encodedImageName}`;
      return `![${altText}](${newUrl})`;
    } else {
      // If it's already a valid GitHub URL, don't change it
      return match;
    }
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