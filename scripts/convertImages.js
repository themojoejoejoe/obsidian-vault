const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const mdDirectory = './MOPs'; 

// Base URL for GitHub image links
const githubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/';

// Function to update image paths in markdown and encode spaces
const updateImagePaths = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Regex to find image references like ![[Pasted image XYZ.png]] or already broken URLs
  const updatedContent = fileContent.replace(/!\[\[(Pasted image[^\]]+)\]\]/g, (match, imageName) => {
    const cleanImageName = imageName.replace(/https.*githubusercontent.*\//g, '').trim(); // Remove any existing URL parts
    const encodedImageName = encodeURIComponent(cleanImageName); // Encode spaces and special characters
    const newUrl = `${githubBaseUrl}${encodedImageName}`;
    return `![Image Description](${newUrl})`; // Return in proper format
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

console.log('Image paths updated successfully!');