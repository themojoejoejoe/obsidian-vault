const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const mdDirectory = './MOPs'; 

// Base URL for raw GitHub content
const githubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/';

// Function to clean, decode, and update image paths
const updateImagePaths = (filePath) => {
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // Step 1: Clean and decode any double-encoded URLs
  fileContent = fileContent.replace(/%2520/g, '%20'); // Fix double-encoded spaces
  fileContent = fileContent.replace(/%252F/g, '/');   // Fix double-encoded slashes
  fileContent = fileContent.replace(/%25/g, '%');     // Fix any other double-encoded percent signs

  // Step 2: Process each image reference
  const updatedContent = fileContent.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    // Clean the image path from any unnecessary encoding or raw links
    let cleanImagePath = imagePath.trim();

    // Check if the imagePath already contains the GitHub base URL or not
    if (!cleanImagePath.startsWith(githubBaseUrl)) {
      const cleanedImageName = cleanImagePath.split('/').pop(); // Get only the image name (e.g., Pasted image...)
      const encodedImageName = encodeURIComponent(cleanedImageName); // Properly encode the image name
      cleanImagePath = `${githubBaseUrl}${encodedImageName}`; // Combine with the base URL
    }

    return `![${altText}](${cleanImagePath})`; // Return the updated image path
  });

  // Step 3: Write the fixed content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
};

// Loop through the markdown directory and apply the image path updates
fs.readdirSync(mdDirectory).forEach(file => {
  if (path.extname(file) === '.md') {
    const filePath = path.join(mdDirectory, file);
    updateImagePaths(filePath);
  }
});

console.log('Image paths cleaned, decoded, and updated successfully!');