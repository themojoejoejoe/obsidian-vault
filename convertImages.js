const fs = require('fs');
const path = require('path');

// Directory where markdown files are located
const dirPath = path.join(__dirname, 'MOPs');

// GitHub repo base URL for raw files
const gitHubBaseUrl = 'https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/';

// Function to update image links in markdown files
function updateImageLinks(filePath) {
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Regex to match Obsidian-style images
    const obsidianImagePattern = /!\[\[(.*?)\]\]/g;
    
    // Replace the Obsidian image links with GitHub raw URLs
    const updatedContent = fileContent.replace(obsidianImagePattern, (match, p1) => {
        // Encode the image name for URL safety (e.g., spaces become %20)
        const encodedImageName = encodeURIComponent(p1.trim());
        return `![Image Description](${gitHubBaseUrl}${encodedImageName})`;
    });

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated images in ${filePath}`);
}

// Read all markdown files in the directory
fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(dirPath, file);
            updateImageLinks(filePath);
        }
    });
});