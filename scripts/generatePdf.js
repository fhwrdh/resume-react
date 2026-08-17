import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePdf() {
  const root = join(__dirname, '..');
  const pdfPath = join(root, 'dist', 'franklin.henderson.pdf');

  // Vite's own preview server, rather than a hand-rolled one: it resolves MIME
  // types and the configured `base` the same way the deployed site does, and
  // there is no bespoke path handling to get wrong.
  const server = await preview({
    root,
    preview: { port: 3001, strictPort: false, open: false },
  });

  const url = server.resolvedUrls?.local?.[0];
  if (!url) {
    throw new Error('Preview server started but reported no local URL');
  }

  try {
    // CI uses the Chrome that puppeteer installs. Set PUPPETEER_EXECUTABLE_PATH
    // to borrow a locally installed browser instead, e.g. when puppeteer's own
    // download is unusable.
    const browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1600 });

      console.log(`Loading page from: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // If the app never mounted we would otherwise print a blank page and
      // still exit 0, so let this throw.
      await page.waitForSelector('#root > *', { timeout: 10000 });

      // Webfonts change text metrics and therefore where pages break, so wait
      // on the font loading API instead of guessing with a fixed delay.
      await page.evaluate(() => document.fonts.ready);

      const fontLoaded = await page.evaluate(() =>
        document.fonts.check('1em "Open Sans"')
      );
      if (!fontLoaded) {
        console.warn('⚠️  "Open Sans" did not load — PDF will use fallback metrics');
      }

      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '0.35in',
          right: '0.35in',
          bottom: '0.35in',
          left: '0.35in',
        },
      });

      console.log('✅ Generated PDF format');
    } finally {
      await browser.close();
    }
  } finally {
    await new Promise((resolve, reject) => {
      server.httpServer.close(err => (err ? reject(err) : resolve()));
    });
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePdf().catch(err => {
    console.error(`❌ PDF generation failed: ${err.message}`);
    process.exit(1);
  });
}

export { generatePdf };
