import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import { readFileSync, statSync } from 'fs';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple static file server
function createStaticServer(distPath, port = 3001) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
  };

  const server = createServer((req, res) => {
    let filePath = join(distPath, req.url === '/' ? 'index.html' : req.url);

    try {
      const stat = statSync(filePath);
      if (stat.isFile()) {
        const ext = extname(filePath);
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function generatePdf() {
  const distPath = join(__dirname, '../dist');
  const pdfPath = join(distPath, 'franklin.henderson.pdf');
  const port = 3001;

  // Start local server
  const server = await createStaticServer(distPath, port);

  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({ width: 1200, height: 1600 });

    const url = `http://localhost:${port}`;
    console.log(`Loading page from: ${url}`);

    // Load the page and wait for content to render
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for a specific element that indicates the page is loaded
    try {
      await page.waitForSelector('#root > *', { timeout: 10000 });
      console.log('Page content detected, waiting for render to complete...');
      // Give React time to fully render
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn('Warning: Could not detect page content');
    }

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });

    await browser.close();
    console.log('✅ Generated PDF format');
  } finally {
    // Close server
    server.close();
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePdf().catch(console.error);
}

export { generatePdf };
