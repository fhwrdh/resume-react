import fs from 'fs';
import path from 'path';
import config from '../site.config.js';

const outputDir = './dist';

// The published resume itself. Removed when the site is not live so the content
// is not reachable at its direct URLs while the front door is closed.
const resumeArtifacts = [
  'franklin.henderson.txt',
  'franklin.henderson.md',
  'franklin.henderson.json',
  'franklin.henderson.pdf',
  'assets',
];

// CNAME must survive — it is what keeps the custom domain bound to this site.
const preserve = new Set(['CNAME', '.nojekyll']);

const escapeAttr = str =>
  str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const page = ({ title, bodyHtml, head = '' }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${title}</title>
${head}<style>
  html { color-scheme: light dark; }
  body {
    margin: 0; min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    font: 16px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    background: #fff; color: #222;
  }
  @media (prefers-color-scheme: dark) {
    body { background: #16181d; color: #e6e6e6; }
  }
  main { max-width: 32rem; padding: 2rem; text-align: center; }
  h1 { font-size: 1.25rem; font-weight: 600; margin: 0 0 .5rem; }
  p { margin: 0; opacity: .75; }
  a { color: inherit; }
</style>
</head>
<body>
<main>
${bodyHtml}
</main>
</body>
</html>
`;

function redirectPage(target) {
  const safe = escapeAttr(target);
  return page({
    title: 'Redirecting',
    head: `<meta http-equiv="refresh" content="0; url=${safe}">\n<link rel="canonical" href="${safe}">\n`,
    bodyHtml: `  <h1>Redirecting</h1>
  <p>This page has moved to <a href="${safe}">${safe}</a>.</p>
  <script>location.replace(${JSON.stringify(target)});</script>`,
  });
}

function placeholderPage() {
  return page({
    title: 'Franklin Henderson',
    bodyHtml: `  <h1>Franklin Henderson</h1>
  <p>This page is being updated. Check back shortly.</p>`,
  });
}

function clearResumeArtifacts() {
  for (const name of resumeArtifacts) {
    if (preserve.has(name)) continue;
    fs.rmSync(path.join(outputDir, name), { recursive: true, force: true });
  }
}

function applySiteMode() {
  const { mode, redirectTo } = config;

  if (!fs.existsSync(outputDir)) {
    throw new Error(`${outputDir} not found. Run the build first.`);
  }

  if (mode === 'live') {
    console.log('🌐 Site mode: live — publishing the resume');
    return;
  }

  if (mode !== 'redirect' && mode !== 'hidden') {
    throw new Error(`Unknown site mode "${mode}" in site.config.js. Expected 'live', 'redirect', or 'hidden'.`);
  }

  if (mode === 'redirect' && !redirectTo) {
    throw new Error("Site mode is 'redirect' but redirectTo is not set in site.config.js.");
  }

  clearResumeArtifacts();

  const html = mode === 'redirect' ? redirectPage(redirectTo) : placeholderPage();
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
  fs.writeFileSync(path.join(outputDir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');

  if (!fs.existsSync(path.join(outputDir, 'CNAME'))) {
    console.warn('⚠️  dist/CNAME is missing — the custom domain may not bind. Check public/CNAME.');
  }

  console.log(
    mode === 'redirect'
      ? `🚧 Site mode: redirect — sending visitors to ${redirectTo}`
      : '🚧 Site mode: hidden — publishing placeholder only'
  );
  console.log('   Resume files removed from ./dist. Set mode back to "live" to restore.');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    applySiteMode();
  } catch (err) {
    console.error(`❌ ${err.message}`);
    process.exit(1);
  }
}

export { applySiteMode };
