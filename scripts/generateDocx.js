const fs = require('fs');
const path = require('path');

// Generate DOCX using pandoc (simpler than docx library)
async function generateDocx() {
  const outputDir = './dist';
  const mdPath = path.join(outputDir, 'franklin.henderson.md');
  const docxPath = path.join(outputDir, 'franklin.henderson.docx');
  
  // Check if markdown file exists
  if (!fs.existsSync(mdPath)) {
    throw new Error('Markdown file not found. Run generateFormats.js first.');
  }

  // Use pandoc to convert MD to DOCX
  const { exec } = require('child_process');
  
  return new Promise((resolve, reject) => {
    const command = `pandoc "${mdPath}" -o "${docxPath}" --reference-doc=/dev/null || echo "Pandoc not available, skipping DOCX generation"`;
    
    exec(command, (error, stdout, stderr) => {
      if (error && !error.message.includes('pandoc: command not found')) {
        reject(error);
        return;
      }
      
      if (fs.existsSync(docxPath)) {
        console.log('✅ Generated DOCX format');
      } else {
        console.log('⚠️  DOCX generation skipped (pandoc not available)');
      }
      resolve();
    });
  });
}

module.exports = { generateDocx };

// Run if called directly
if (require.main === module) {
  generateDocx().catch(console.error);
}