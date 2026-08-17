import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import resumeData from '../src/resume-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility functions
const stripHtml = (text) => text.replace(/<[^>]*>/g, '').trim();
const formatDate = (start, end) => end === 'Present' ? `${start} - Present` : `${start} - ${end}`;

// Generate JSON format (JSON Resume standard)
function generateJSON() {
  const jsonResume = {
    "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    "basics": {
      "name": "Franklin Henderson",
      "label": "Principal Engineer / Team Lead",
      "email": "work@fhwrdh.net",
      "url": "https://resume.fhwrdh.net",
      "summary": "Principal Engineer, 20+ years building software across fintech, gaming, and ad tech. Currently building Tilia's Admin Tools UI, the GraphQL API it runs on, and contributing to the underlying REST APIs. I've run larger orgs before and chose to come back to building.",
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
    "work": resumeData.experience.filter(job => !job.live || job.live !== 'off').map(job => ({
      "name": job.companyName,
      "position": job.title,
      "url": "",
      "startDate": job.tenure.start,
      "endDate": job.tenure.end,
      "summary": "",
      "highlights": job.description.map(desc => stripHtml(desc.text))
    })),
    "skills": [
      {
        "name": "Frontend",
        "keywords": ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Vite"]
      },
      {
        "name": "APIs & Platform",
        "keywords": ["GraphQL", "REST APIs", "API design", "SDKs", "Multi-tenancy", "AuthN/AuthZ"]
      },
      {
        "name": "AI Tools",
        "keywords": ["Claude", "Gemini", "Copilot", "MCP"]
      },
      {
        "name": "Backend",
        "keywords": ["Node.js", "Go", "Python", "Microservices"]
      },
      {
        "name": "Data",
        "keywords": ["PostgreSQL", "MySQL", "NoSQL"]
      },
      {
        "name": "Infrastructure",
        "keywords": ["AWS", "Docker", "Linux", "CI/CD", "GitHub"]
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
      {"name": "Special Olympics Volunteer"}
    ]
  };
  
  return JSON.stringify(jsonResume, null, 2);
}

// Generate Markdown format
function generateMarkdown() {
  let md = `# Franklin Henderson
*Principal Engineer / Team Lead*

📧 work@fhwrdh.net | 🌐 [resume.fhwrdh.net](https://resume.fhwrdh.net)  
💻 [GitHub](https://github.com/fhwrdh) | 📸 [Instagram](https://instagram.com/fhwrdh)

---

## Summary

Principal Engineer, 20+ years building software across fintech, gaming, and ad tech. Currently building Tilia's Admin Tools UI, the GraphQL API it runs on, and contributing to the underlying REST APIs. I've run larger orgs before and chose to come back to building.

We're here to solve problems. Sometimes with code. Either way the work depends on taking people seriously, the ones I build with and the ones who end up using what we make.

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
      job.description.forEach(desc => {
        md += `- ${stripHtml(desc.text)}\n`;
      });
      md += '\n';
    }
  });

  md += `---

## Skills

**Frontend:** JavaScript, TypeScript, React, HTML, CSS, Vite  
**APIs & Platform:** GraphQL, REST APIs, API design, SDKs, multi-tenancy, authN/authZ  
**AI Tools:** Claude, Gemini, Copilot, MCP  
**Backend:** Node.js, Go, Python, microservices  
**Data:** PostgreSQL, MySQL, NoSQL  
**Infrastructure:** AWS, Docker, Linux, CI/CD, GitHub  
**Methodology:** TDD, Agile

---

## Projects

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

Film Photography • Travel • Music • Special Olympics Volunteer
`;

  return md;
}

// Generate plain text format
function generateTXT() {
  let txt = `FRANKLIN HENDERSON
Principal Engineer / Team Lead

Contact:
Email: work@fhwrdh.net
Website: https://resume.fhwrdh.net
GitHub: https://github.com/fhwrdh
Instagram: https://instagram.com/fhwrdh

SUMMARY
=======

Principal Engineer, 20+ years building software across fintech, gaming, and ad tech. Currently building Tilia's Admin Tools UI, the GraphQL API it runs on, and contributing to the underlying REST APIs. I've run larger orgs before and chose to come back to building.

We're here to solve problems. Sometimes with code. Either way the work depends on taking people seriously, the ones I build with and the ones who end up using what we make.

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
      job.description.forEach(desc => {
        txt += `• ${stripHtml(desc.text)}\n`;
      });
      txt += '\n';
    }
  });

  txt += `SKILLS
======

Frontend: JavaScript, TypeScript, React, HTML, CSS, Vite
APIs & Platform: GraphQL, REST APIs, API design, SDKs, multi-tenancy, authN/authZ
AI Tools: Claude, Gemini, Copilot, MCP
Backend: Node.js, Go, Python, microservices
Data: PostgreSQL, MySQL, NoSQL
Infrastructure: AWS, Docker, Linux, CI/CD, GitHub
Methodology: TDD, Agile

PROJECTS
========

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

Film Photography, Travel, Music, Special Olympics Volunteer
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