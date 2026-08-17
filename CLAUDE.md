# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based resume and cover letter application built with Vite. It generates a responsive resume that can be viewed on screen, printed to PDF, and exported in multiple formats (TXT, MD, JSON, PDF). The application is optimized for both human readers and AI/ATS (Applicant Tracking System) parsing.

## Common Development Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start Vite development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages
```

## Code Architecture and Structure

### Component Organization

The application is structured as a single-page React app with two main views:
- **Resume Component** (`src/Resume.js`): Primary resume display with responsive layout
- **Cover Letter Component** (`src/CoverLetter.js`): Cover letter template

### Key Files

**Core Application:**
- **`src/index.js`**: Entry point, renders either Resume or CoverLetter component
- **`src/resume-data.js`**: Contains all resume experience data (the single source of truth for work history)
- **`src/ui.js`**: Shared styled-components and UI elements
- **`src/globalCss.js`**: Global CSS styles
- **`src/Job.js`**: Component for rendering individual job entries

### Technology Stack

- **React 18.2**: Core framework
- **Vite 5.0**: Modern build tooling (migrated from Create React App)
- **styled-components 5.3**: CSS-in-JS styling
- **react-responsive 9.0**: Media queries and responsive design
- **mdi-react 3.3**: Material Design icons

### Machine-Readable Output

`scripts/generateFormats.js` emits TXT, MD, and JSON (JSON Resume schema) from `src/resume-data.js` at build time, so ATS and AI readers get a structured surface rather than parsing the rendered page. Summary, skills, leadership, community, and interests are currently hardcoded in that script and duplicated in `src/Resume.js` — edit both when changing them.

### Publish Mode Toggle

`site.config.js` controls what actually gets published to resume.fhwrdh.net. Set `mode` to `'live'`, `'redirect'`, or `'hidden'`, commit, and push — `scripts/applySiteMode.js` runs after the build and reshapes `dist/` accordingly. In `redirect`/`hidden` it removes the generated resume files and the app bundle (so nothing is reachable at its direct URL), keeps `CNAME`, and writes a placeholder plus a `robots.txt` disallow.

This deliberately avoids touching the GitHub Pages configuration — same branch, same custom domain, same TLS certificate — so flipping back to `live` is just another push. Disabling Pages itself would force the certificate to be re-provisioned, which can take hours.

Note: GitHub Pages cannot return an HTTP 302. `redirect` mode uses a meta refresh plus `location.replace()`, which is client-side.

### Responsive Design

The application uses `react-responsive` to provide different layouts:
- **Screen**: Web display mode
- **Print**: Print-optimized layout
- **Desktop**: Minimum width 900px
- **Mobile**: Maximum width 899px

### Deployment

The application deploys to GitHub Pages:
- **`npm run deploy`**: Builds with Vite and deploys to GitHub Pages via gh-pages
- **Homepage**: https://fhwrdh.github.io/resume-react
- **Custom domain**: https://resume.fhwrdh.net

### Recent Improvements

1. Migrated from Create React App to Vite for faster builds and modern tooling
2. Added multi-format resume generation (TXT, MD, JSON, PDF)
3. PDF generation integrated into build workflow
4. Reframed content around platform/API work; added a Projects section
5. Removed the unused ai-optimization.js / ai-resume-data.js modules