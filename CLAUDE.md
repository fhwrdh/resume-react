# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based resume and cover letter application built with Create React App (react-scripts v1.1.0). It generates a responsive resume that can be viewed on screen or printed to PDF.

## Common Development Commands

### Development
```bash
npm install          # Install dependencies
npm start            # Start development server (default port 3000)
npm run build        # Build for production
npm test             # Run tests with Jest
```

### Deployment
```bash
npm run deploy       # Build and copy to ~/webapps/fhwrdh_resume_react
npm run publish      # Run publish.sh script (requires destination path argument)
```

## Code Architecture and Structure

### Component Organization

The application is structured as a single-page React app with two main views:
- **Resume Component** (`src/Resume.js`): Primary resume display with responsive layout
- **Cover Letter Component** (`src/CoverLetter.js`): Cover letter template

### Key Files

- **`src/index.js`**: Entry point, renders either Resume or CoverLetter component
- **`src/resume-data.js`**: Contains all resume content data (experience, skills, education)
- **`src/ui.js`**: Shared styled-components and UI elements
- **`src/globalCss.js`**: Global CSS styles
- **`src/Job.js`**: Component for rendering individual job entries

### Technology Stack

- **React 16.2**: Core framework
- **styled-components 3.0**: CSS-in-JS styling
- **react-responsive 4.1**: Media queries and responsive design
- **mdi-react 3.3**: Material Design icons
- **react-scripts 1.1.0**: Build tooling (Create React App)

### Responsive Design

The application uses `react-responsive` to provide different layouts:
- **Screen**: Web display mode
- **Print**: Print-optimized layout
- **Desktop**: Minimum width 900px
- **Mobile**: Maximum width 899px

### Deployment

Two deployment methods are configured:
1. **`npm run deploy`**: Copies build to local webapps directory
2. **`publish.sh`**: Deploys to specified target directory (requires path argument)

The PDF version (`public/franklin.henderson.pdf`) is included for direct download.