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
      "summary": "Principal Engineer with 20+ years building and scaling software systems across fintech, gaming, and advertising technology. Currently leading frontend architecture and team development at Tilia, where I build React/GraphQL interfaces to a system that processes millions in virtual economy transactions.",
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
          "network": "LinkedIn",
          "username": "franklinhenderson",
          "url": "https://linkedin.com/in/franklinhenderson"
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
        "keywords": ["JavaScript", "TypeScript", "React", "HTML", "CSS"]
      },
      {
        "name": "Backend", 
        "keywords": ["Node.js", "Python", "Go", "GraphQL", "REST APIs"]
      },
      {
        "name": "Data",
        "keywords": ["PostgreSQL", "MySQL", "NoSQL"]
      },
      {
        "name": "Infrastructure",
        "keywords": ["AWS", "Docker", "CI/CD", "GitHub"]
      },
      {
        "name": "Methodology",
        "keywords": ["TDD", "Agile"]
      },
      {
        "name": "AI Tools",
        "keywords": ["Claude", "Gemini", "Copilot", "MCP"]
      }
    ],
    "interests": [
      {"name": "Film Photography"},
      {"name": "Travel"}, 
      {"name": "Music"},
      {"name": "Brewing"}
    ]
  };
  
  return JSON.stringify(jsonResume, null, 2);
}

// Generate Markdown format
function generateMarkdown() {
  let md = `# Franklin Henderson
*Principal Engineer / Team Lead*

📧 work@fhwrdh.net | 🌐 [resume.fhwrdh.net](https://resume.fhwrdh.net)  
💼 [LinkedIn](https://linkedin.com/in/franklinhenderson) | 💻 [GitHub](https://github.com/fhwrdh) | 📸 [Instagram](https://instagram.com/fhwrdh)

---

## Summary

Principal Engineer with 20+ years building and scaling software systems across fintech, gaming, and advertising technology. Currently leading frontend architecture and team development at Tilia, where I build React/GraphQL interfaces to a system that processes millions in virtual economy transactions.

Combine deep technical expertise in modern frontend technologies with proven leadership experience, having grown engineering teams from solo contributors to high-performing units. Passionate about maintainable architecture, test-driven development, and mentoring engineers while maintaining hands-on contribution to complex technical challenges.

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

**Frontend:** JavaScript, TypeScript, React, HTML, CSS  
**Backend:** Node.js, Python, Go, GraphQL, REST APIs  
**Data:** PostgreSQL, MySQL, NoSQL  
**Infrastructure:** AWS, Docker, CI/CD, GitHub  
**Methodology:** TDD, Agile  
**AI Tools:** Claude, Gemini, Copilot, MCP

---

## Leadership

- Team Building, Hiring
- Mentoring  
- Technical Strategy
- Roadmap Planning
- Cross-functional Collaboration
- Performance Management

---

## Community

- **WLVJS** Co-Organizer
- **Lunch.js** Champion  
- **JS.LA** Member

---

## Interests

Film Photography • Travel • Music • Brewing
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
LinkedIn: https://linkedin.com/in/franklinhenderson
GitHub: https://github.com/fhwrdh
Instagram: https://instagram.com/fhwrdh

SUMMARY
=======

Principal Engineer with 20+ years building and scaling software systems across fintech, gaming, and advertising technology. Currently leading frontend architecture and team development at Tilia, where I build React/GraphQL interfaces to a system that processes millions in virtual economy transactions.

Combine deep technical expertise in modern frontend technologies with proven leadership experience, having grown engineering teams from solo contributors to high-performing units. Passionate about maintainable architecture, test-driven development, and mentoring engineers while maintaining hands-on contribution to complex technical challenges.

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

Frontend: JavaScript, TypeScript, React, HTML, CSS
Backend: Node.js, Python, Go, GraphQL, REST APIs  
Data: PostgreSQL, MySQL, NoSQL
Infrastructure: AWS, Docker, CI/CD, GitHub
Methodology: TDD, Agile
AI Tools: Claude, Gemini, Copilot, MCP

LEADERSHIP
==========

• Team Building, Hiring
• Mentoring
• Technical Strategy  
• Roadmap Planning
• Cross-functional Collaboration
• Performance Management

COMMUNITY
=========

• WLVJS Co-Organizer
• Lunch.js Champion
• JS.LA Member

INTERESTS
=========

Film Photography, Travel, Music, Brewing
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