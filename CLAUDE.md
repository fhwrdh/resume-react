# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based resume and cover letter application built with Vite. It generates a responsive resume that can be viewed on screen, printed to PDF, and exported in multiple formats (TXT, MD, JSON, DOCX, PDF). The application is optimized for both human readers and AI/ATS (Applicant Tracking System) parsing.

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
- **`src/resume-data.js`**: Contains all resume content data (experience, skills, education)
- **`src/ui.js`**: Shared styled-components and UI elements
- **`src/globalCss.js`**: Global CSS styles
- **`src/Job.js`**: Component for rendering individual job entries

**AI/ATS Optimization (New):**
- **`src/ai-optimization.js`**: Comprehensive skills taxonomy with proficiency levels, years of experience, and context mapping for optimal ATS keyword matching. Includes O*NET-aligned categorization and quantified achievement templates
- **`src/ai-resume-data.js`**: Enhanced resume data with structured metrics, semantic categorization, and Schema.org structured data for AI comprehension. Features quantified achievements and impact metrics for each role

### Technology Stack

- **React 18.2**: Core framework
- **Vite 5.0**: Modern build tooling (migrated from Create React App)
- **styled-components 5.3**: CSS-in-JS styling
- **react-responsive 9.0**: Media queries and responsive design
- **mdi-react 3.3**: Material Design icons

### AI/ATS Optimization Strategy

The resume data structure is optimized for both AI parsing and ATS scanning:

1. **Structured Skills Taxonomy**: Each skill includes proficiency level, years of experience, contexts, and related terms
2. **Quantified Achievements**: Every role description includes metrics (team size, budget responsibility, scale, performance improvements)
3. **Semantic Categorization**: Experiences are categorized (architecture, technical_leadership, team_leadership, etc.)
4. **Keyword Optimization**: Comprehensive keyword mapping for role titles, technologies, leadership skills, and industry domains
5. **Schema.org Structured Data**: Machine-readable person schema for enhanced AI comprehension

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
2. Added multi-format resume generation (TXT, MD, JSON, DOCX, PDF)
3. Integrated AI/ATS optimization layer with comprehensive skills taxonomy
4. Enhanced resume data with quantified metrics and structured semantic data
5. PDF generation integrated into build workflow