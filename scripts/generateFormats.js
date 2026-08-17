import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import resumeData from '../src/resume-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility functions
const stripHtml = (text) => text.replace(/<[^>]*>/g, '').trim();
const formatDate = (start, end) => end === 'Present' ? `${start} - Present` : `${start} - ${end}`;

// JSON Resume requires ISO 8601 dates; the display data uses human formats like
// "Jan 2014" and "Present". Anything unparseable is omitted rather than emitted
// as an empty string, which would fail schema validation.
const MONTHS = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
};
const toISODate = value => {
  const v = String(value || '').trim();
  if (!v || v === 'Present') return undefined;
  const monthYear = v.match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if (monthYear) return `${monthYear[2]}-${MONTHS[monthYear[1].toLowerCase()]}`;
  const year = v.match(/^(\d{4})$/);
  return year ? year[1] : undefined;
};

const omitEmpty = obj =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && !v.length))
  );

const asHighlight = desc =>
  desc.role ? `${desc.role}: ${stripHtml(desc.text)}` : stripHtml(desc.text);

// A compact entry collapses several employers into one block for display. The
// structured output expands it again so each employer parses on its own, with
// the dates the rendered formats deliberately leave off.
const toWorkEntries = job => {
  if (!job.compact) {
    return [omitEmpty({
      name: job.companyName,
      location: job.location,
      position: job.title,
      startDate: toISODate(job.tenure.start),
      endDate: toISODate(job.tenure.end),
      summary: job.summary,
      highlights: job.description.map(asHighlight),
    })];
  }
  return job.description.map(desc => {
    const [head, ...rest] = stripHtml(desc.text).split(' - ');
    const comma = head.indexOf(',');
    return omitEmpty({
      name: comma === -1 ? head.trim() : head.slice(0, comma).trim(),
      location: comma === -1 ? '' : head.slice(comma + 1).trim(),
      position: desc.role,
      startDate: toISODate(desc.start),
      endDate: toISODate(desc.end),
      summary: rest.join(' - ').trim(),
    });
  });
};

// Generate JSON format (JSON Resume standard)
function generateJSON() {
  const jsonResume = {
    "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    "basics": {
      "name": "Franklin Henderson",
      "email": "work@fhwrdh.net",
      "url": "https://resume.fhwrdh.net",
      "summary": "I've spent 20+ years building software across fintech, gaming, and ad tech. These days I'm building Tilia's Admin Tools UI, the GraphQL API it runs on, and the delegated tokens that let AI agents use it. I also contribute to the underlying REST APIs. I've managed at department scale before and chose to come back to building and learning.",
      "location": {
        "city": "San Francisco",
        "region": "CA",
        "countryCode": "US"
      },
      "profiles": [
        {
          "network": "GitHub",
          "username": "fhwrdh",
          "url": "https://github.com/fhwrdh"
        },
        {
          "network": "Instagram",
          "username": "fhwrdh",
          "url": "https://instagram.com/fhwrdh"
        }
      ]
    },
    "work": resumeData.experience
      .filter(job => !job.live || job.live !== 'off')
      .flatMap(toWorkEntries),
    "skills": [
      {
        "name": "Frontend",
        "keywords": ["JavaScript", "TypeScript", "React"]
      },
      {
        "name": "APIs",
        "keywords": ["GraphQL", "REST API design"]
      },
      {
        "name": "AI Tools",
        "keywords": ["Claude", "Gemini", "Copilot", "MCP"]
      },
      {
        "name": "Backend",
        "keywords": ["Node.js", "Go", "Python"]
      },
      {
        "name": "Web",
        "keywords": ["HTML", "CSS", "Vite"]
      },
      {
        "name": "Data",
        "keywords": ["PostgreSQL", "MySQL", "NoSQL"]
      },
      {
        "name": "Source & CI",
        "keywords": ["GitHub", "GitLab", "CI/CD"]
      },
      {
        "name": "Infrastructure",
        "keywords": ["AWS", "Docker", "Linux"]
      },
      {
        "name": "Methodology",
        "keywords": ["TDD", "Agile"]
      }
    ],
    "projects": [
      {
        "name": "Air Traffic Control",
        "description": "A dashboard I built for myself. One command polls the issue tracker and GitHub across about 20 repos and caches what it finds. A second pass sorts that snapshot into a single board, closest-to-done first, and a Claude Code slash command renders it. The fetching and sorting are ordinary deterministic code that runs before the agent sees anything, so the board never guesses at status.",
        "keywords": ["Agent tooling", "CLI design", "Reconciliation", "Node.js"]
      },
      {
        "name": "Tomu",
        "description": "An MCP server I run from Claude sessions. It tracks film from purchase through development, works out chemistry and dilutions, and keeps my field notes. Every recommendation says where it came from, so I can tell whether a suggestion rests on my own logged results or on a manufacturer's datasheet.",
        "keywords": ["MCP", "Agent tooling", "Tool design"]
      }
    ],
    "interests": [
      {"name": "Film Photography"},
      {"name": "Travel"}, 
      {"name": "Music"},
      {"name": "Special Olympics"}
    ],
    "education": [
      {"institution": "CSUN", "area": "Math"},
      {"institution": "Santa Monica College", "area": "CS"},
      {"institution": "College of Marin", "area": "CS"}
    ]
  };
  
  return JSON.stringify(jsonResume, null, 2);
}

// Generate Markdown format
function generateMarkdown() {
  let md = `# Franklin Henderson

📧 work@fhwrdh.net | 🌐 [resume.fhwrdh.net](https://resume.fhwrdh.net)  
💻 [GitHub](https://github.com/fhwrdh) | 📸 [Instagram](https://instagram.com/fhwrdh)

---

## Summary

I've spent 20+ years building software across fintech, gaming, and ad tech. These days I'm building Tilia's Admin Tools UI, the GraphQL API it runs on, and the delegated tokens that let AI agents use it. I also contribute to the underlying REST APIs. I've managed at department scale before and chose to come back to building and learning.

---

## Experience

`;

  resumeData.experience.filter(job => !job.live || job.live !== 'off').forEach(job => {
    if (job.compact) {
      md += `### ${job.companyName}\n\n`;
      job.description.forEach(desc => {
        const parts = desc.text.split(' - ');
        md += `**${desc.role}**  \n`;
        md += `${parts[0]}  \n`;
        md += `${parts[1] || ''}\n\n`;
      });
    } else {
      md += `### ${job.title}\n`;
      md += `**${job.companyName}** | ${formatDate(job.tenure.start, job.tenure.end)}\n\n`;
      if (job.summary) md += `${job.summary}\n\n`;
      job.description.forEach((desc, i) => {
        // Roles mark a promotion within the same company; without them the
        // progression is invisible in the generated formats.
        if (desc.role) md += `${i ? '\n' : ''}**${desc.role}**\n\n`;
        md += `- ${stripHtml(desc.text)}\n`;
      });
      md += '\n';
    }
  });

  md += `---

## Skills

**Frontend:** JavaScript, TypeScript, React  
**APIs:** GraphQL, REST API design  
**AI Tools:** Claude, Gemini, Copilot, MCP  
**Backend:** Node.js, Go, Python  
**Web:** HTML, CSS, Vite  
**Data:** PostgreSQL, MySQL, NoSQL  
**Source & CI:** GitHub, GitLab, CI/CD  
**Infrastructure:** AWS, Docker, Linux  
**Methodology:** TDD, Agile

---

## Recent Projects

**Air Traffic Control, a work-in-flight dashboard**  
A dashboard I built for myself. One command polls the issue tracker and GitHub across about 20 repos and caches what it finds. A second pass sorts that snapshot into a single board, closest-to-done first, and a Claude Code slash command renders it. The fetching and sorting are ordinary deterministic code that runs before the agent sees anything, so the board never guesses at status.

**Tomu, an MCP tool server for film photography**  
An MCP server I run from Claude sessions. It tracks film from purchase through development, works out chemistry and dilutions, and keeps my field notes. Every recommendation says where it came from, so I can tell whether a suggestion rests on my own logged results or on a manufacturer's datasheet.

---

## Leadership

- Team Building, Hiring
- Mentoring  
- Technical Strategy
- Roadmap Planning
- Cross-functional Collaboration

---

## Interests

Film Photography • Travel • Music • Special Olympics

---

## Education

CSUN (Math) • Santa Monica College (CS) • College of Marin (CS)
`;

  return md;
}

// Generate plain text format
function generateTXT() {
  let txt = `FRANKLIN HENDERSON

Contact:
Email: work@fhwrdh.net
Website: https://resume.fhwrdh.net
GitHub: https://github.com/fhwrdh
Instagram: https://instagram.com/fhwrdh

SUMMARY
=======

I've spent 20+ years building software across fintech, gaming, and ad tech. These days I'm building Tilia's Admin Tools UI, the GraphQL API it runs on, and the delegated tokens that let AI agents use it. I also contribute to the underlying REST APIs. I've managed at department scale before and chose to come back to building and learning.

EXPERIENCE
==========

`;

  resumeData.experience.filter(job => !job.live || job.live !== 'off').forEach(job => {
    if (job.compact) {
      txt += `${job.companyName}\n`;
      txt += `${'='.repeat(job.companyName.length)}\n\n`;
      job.description.forEach(desc => {
        const parts = desc.text.split(' - ');
        txt += `${desc.role}\n`;
        txt += `${parts[0]}\n`;
        txt += `${parts[1] || ''}\n\n`;
      });
    } else {
      txt += `${job.title}\n`;
      txt += `${job.companyName} | ${formatDate(job.tenure.start, job.tenure.end)}\n`;
      txt += `${'-'.repeat(60)}\n\n`;
      if (job.summary) txt += `${job.summary}\n\n`;
      job.description.forEach((desc, i) => {
        if (desc.role) txt += `${i ? '\n' : ''}${desc.role}\n`;
        txt += `• ${stripHtml(desc.text)}\n`;
      });
      txt += '\n';
    }
  });

  txt += `SKILLS
======

Frontend: JavaScript, TypeScript, React
APIs: GraphQL, REST API design
AI Tools: Claude, Gemini, Copilot, MCP
Backend: Node.js, Go, Python
Web: HTML, CSS, Vite
Data: PostgreSQL, MySQL, NoSQL
Source & CI: GitHub, GitLab, CI/CD
Infrastructure: AWS, Docker, Linux
Methodology: TDD, Agile

RECENT PROJECTS
===============

Air Traffic Control, a work-in-flight dashboard
A dashboard I built for myself. One command polls the issue tracker and GitHub across
about 20 repos and caches what it finds. A second pass sorts that snapshot into a single
board, closest-to-done first, and a Claude Code slash command renders it. The fetching
and sorting are ordinary deterministic code that runs before the agent sees anything,
so the board never guesses at status.

Tomu, an MCP tool server for film photography
An MCP server I run from Claude sessions. It tracks film from purchase through
development, works out chemistry and dilutions, and keeps my field notes. Every
recommendation says where it came from, so I can tell whether a suggestion rests on my
own logged results or on a manufacturer's datasheet.

LEADERSHIP
==========

• Team Building, Hiring
• Mentoring
• Technical Strategy  
• Roadmap Planning
• Cross-functional Collaboration

INTERESTS
=========

Film Photography, Travel, Music, Special Olympics

EDUCATION
=========

CSUN (Math), Santa Monica College (CS), College of Marin (CS)
`;

  return txt;
}

// Generate all formats
async function generateAllFormats() {
  const outputDir = './dist';
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate JSON
  fs.writeFileSync(path.join(outputDir, 'franklin.henderson.json'), generateJSON());
  console.log('✅ Generated JSON format');

  // Generate Markdown
  fs.writeFileSync(path.join(outputDir, 'franklin.henderson.md'), generateMarkdown());
  console.log('✅ Generated Markdown format');

  // Generate Plain Text
  fs.writeFileSync(path.join(outputDir, 'franklin.henderson.txt'), generateTXT());
  console.log('✅ Generated TXT format');

  console.log('🎉 All formats generated successfully!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateAllFormats().catch(console.error);
}

export { generateAllFormats };