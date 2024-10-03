const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const mdDirectory = './MOPs'; 
const imageDirectory = './z.Images'; // Directory where images are stored

// Base URL for raw GitHub content
const githubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/';

// Function to clean, decode, rename, and update image paths
const updateImagePaths = (filePath) => {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  let imageCounter = 1; // Counter for renaming images

  // Step 1: Clean and decode any double-encoded URLs
  fileContent = fileContent.replace(/%2520/g, '%20'); // Fix double-encoded spaces
  fileContent = fileContent.replace(/%252F/g, '/');   // Fix double-encoded slashes
  fileContent = fileContent.replace(/%25/g, '%');     // Fix any other double-encoded percent signs

  // Step 2: Process each image reference
  const updatedContent = fileContent.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    // Clean the image path from any unnecessary encoding or raw links
    let cleanImagePath = imagePath.trim();

    // Rename "Pasted image" files to simpler names
    const imageNameMatch = cleanImagePath.match(/Pasted image.*\.png/);
    if (imageNameMatch) {
      // Generate new image name
      const newImageName = `image-${String(imageCounter).padStart(3, '0')}.png`;
      const newImagePath = path.join(imageDirectory, newImageName);

      // Rename the actual file if it exists
      const originalImagePath = path.join(imageDirectory, imageNameMatch[0]);
      if (fs.existsSync(originalImagePath)) {
        fs.renameSync(originalImagePath, newImagePath);
      }

      // Update image reference in markdown
      cleanImagePath = `${githubBaseUrl}${newImageName}`;
      imageCounter++; // Increment counter for next image
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

console.log('Image paths cleaned, renamed, and updated successfully!');