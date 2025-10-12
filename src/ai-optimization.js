// AI-Optimized Skills Taxonomy and Keyword Mapping
// Based on O*NET, LinkedIn Skills, and 2024 industry standards

export const aiOptimizedSkills = {
  // Programming Languages with proficiency and context
  programming_languages: [
    {
      name: "JavaScript",
      proficiency: "Expert",
      years: 8,
      contexts: ["Frontend Development", "Backend Development", "Full Stack"],
      related_terms: ["ES6+", "ECMAScript", "Vanilla JavaScript", "Modern JavaScript"]
    },
    {
      name: "TypeScript", 
      proficiency: "Advanced",
      years: 5,
      contexts: ["Type-safe Development", "Large Scale Applications", "Frontend Architecture"],
      related_terms: ["Static Typing", "Type Safety", "TSX", "TypeScript Compiler"]
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      years: 3,
      contexts: ["Backend Development", "Scripting", "Data Processing"],
      related_terms: ["Python 3", "Backend Programming", "Scripting Language"]
    },
    {
      name: "Go",
      proficiency: "Intermediate", 
      years: 2,
      contexts: ["Backend Development", "Microservices", "Performance"],
      related_terms: ["Golang", "Concurrent Programming", "Systems Programming"]
    }
  ],

  // Frontend Technologies with depth
  frontend_technologies: [
    {
      name: "React",
      proficiency: "Expert",
      years: 8,
      contexts: ["Component Architecture", "State Management", "Performance Optimization"],
      related_terms: ["React.js", "JSX", "React Hooks", "React Components", "Virtual DOM", "React Ecosystem"]
    },
    {
      name: "HTML5",
      proficiency: "Expert",
      years: 15,
      contexts: ["Semantic Markup", "Web Standards", "Accessibility"],
      related_terms: ["Semantic HTML", "HTML5 APIs", "Web Standards", "Markup Language"]
    },
    {
      name: "CSS3",
      proficiency: "Advanced",
      years: 15,
      contexts: ["Responsive Design", "Modern CSS", "Performance"],
      related_terms: ["CSS Grid", "Flexbox", "CSS Variables", "Responsive Web Design", "CSS Preprocessors"]
    },
    {
      name: "GraphQL",
      proficiency: "Advanced",
      years: 4,
      contexts: ["API Design", "Data Fetching", "Type-safe APIs"],
      related_terms: ["GraphQL Schema", "Query Language", "Apollo", "Type-safe APIs"]
    }
  ],

  // Backend & Infrastructure
  backend_technologies: [
    {
      name: "Node.js",
      proficiency: "Advanced", 
      years: 6,
      contexts: ["Server-side JavaScript", "API Development", "Microservices"],
      related_terms: ["Node", "Server-side JavaScript", "npm", "Package Management"]
    },
    {
      name: "PostgreSQL",
      proficiency: "Intermediate",
      years: 5,
      contexts: ["Relational Databases", "SQL", "Data Modeling"],
      related_terms: ["Postgres", "SQL Database", "RDBMS", "Database Design"]
    },
    {
      name: "AWS",
      proficiency: "Intermediate",
      years: 3,
      contexts: ["Cloud Infrastructure", "Deployment", "Scaling"],
      related_terms: ["Amazon Web Services", "Cloud Computing", "EC2", "S3", "Lambda"]
    },
    {
      name: "Docker",
      proficiency: "Intermediate", 
      years: 3,
      contexts: ["Containerization", "DevOps", "Deployment"],
      related_terms: ["Container Technology", "DevOps", "Microservices Deployment"]
    }
  ],

  // Modern Development Practices
  development_practices: [
    {
      name: "Test-Driven Development",
      proficiency: "Advanced",
      years: 10,
      contexts: ["Software Quality", "Unit Testing", "Code Reliability"],
      related_terms: ["TDD", "Unit Testing", "Integration Testing", "Test Automation", "Jest", "Testing Framework"]
    },
    {
      name: "Agile Development",
      proficiency: "Expert",
      years: 15,
      contexts: ["Project Management", "Team Collaboration", "Iterative Development"],
      related_terms: ["Scrum", "Agile Methodology", "Sprint Planning", "Continuous Improvement"]
    },
    {
      name: "CI/CD",
      proficiency: "Advanced",
      years: 6,
      contexts: ["DevOps", "Automation", "Deployment Pipeline"],
      related_terms: ["Continuous Integration", "Continuous Deployment", "GitHub Actions", "Build Automation"]
    },
    {
      name: "Version Control",
      proficiency: "Expert",
      years: 20,
      contexts: ["Source Code Management", "Team Collaboration", "Code History"],
      related_terms: ["Git", "GitHub", "GitLab", "Source Control", "Branch Management"]
    }
  ],

  // Leadership & Management (Critical for Principal Engineer roles)
  leadership_skills: [
    {
      name: "Technical Leadership",
      proficiency: "Expert",
      years: 10,
      contexts: ["Architecture Decisions", "Technology Strategy", "Team Guidance"],
      related_terms: ["Technical Strategy", "Architecture Design", "Technology Roadmap", "Technical Mentoring"]
    },
    {
      name: "Team Management",
      proficiency: "Advanced",
      years: 8,
      contexts: ["People Management", "Performance Management", "Team Building"],
      related_terms: ["Team Building", "Hiring", "Performance Management", "Mentoring", "Staff Development"]
    },
    {
      name: "Cross-functional Collaboration",
      proficiency: "Expert",
      years: 15,
      contexts: ["Product Management", "Design Collaboration", "Stakeholder Management"],
      related_terms: ["Product Collaboration", "Stakeholder Management", "Requirements Gathering", "Communication"]
    }
  ],

  // AI & Modern Tools (2024 relevance)
  ai_tools: [
    {
      name: "Claude AI",
      proficiency: "Advanced",
      years: 1,
      contexts: ["AI-Assisted Development", "Code Generation", "Technical Writing"],
      related_terms: ["AI Assistant", "Code Assistant", "AI-Powered Development"]
    },
    {
      name: "GitHub Copilot",
      proficiency: "Advanced", 
      years: 2,
      contexts: ["AI Pair Programming", "Code Completion", "Productivity"],
      related_terms: ["AI Code Assistant", "Code Completion", "AI Programming"]
    },
    {
      name: "Generative AI",
      proficiency: "Intermediate",
      years: 2,
      contexts: ["AI Integration", "Modern Development", "Productivity Tools"],
      related_terms: ["Large Language Models", "LLM", "AI Tools", "Machine Learning"]
    }
  ],

  // Industry Domains (for context relevance)
  industry_expertise: [
    {
      name: "Financial Technology",
      proficiency: "Expert",
      years: 6,
      contexts: ["Payment Processing", "Transaction Systems", "Financial Compliance"],
      related_terms: ["Fintech", "Payment Systems", "Financial Software", "Transaction Processing", "KYC", "Compliance"]
    },
    {
      name: "E-commerce",
      proficiency: "Advanced",
      years: 8,
      contexts: ["Online Retail", "Transaction Processing", "User Experience"],
      related_terms: ["Online Commerce", "Digital Commerce", "Retail Technology", "Shopping Cart", "Payment Gateway"]
    },
    {
      name: "Advertising Technology",
      proficiency: "Advanced",
      years: 5,
      contexts: ["Ad Serving", "Real-time Bidding", "Analytics"],
      related_terms: ["AdTech", "Programmatic Advertising", "Digital Advertising", "Real-time Systems"]
    }
  ]
};

// ATS Keyword Optimization
export const atsKeywords = {
  // High-value keywords for Principal Engineer roles
  role_keywords: [
    "Principal Engineer", "Senior Software Engineer", "Technical Lead", "Team Lead",
    "Software Architect", "Frontend Architect", "Full Stack Engineer", "Engineering Manager"
  ],
  
  // Technology buzzwords that ATS looks for
  technology_keywords: [
    "React Development", "JavaScript Engineering", "TypeScript Development", "Node.js Development",
    "Frontend Architecture", "API Design", "GraphQL Implementation", "Cloud Technologies",
    "Microservices Architecture", "Scalable Systems", "Performance Optimization",
    "Modern Web Development", "Single Page Applications", "Progressive Web Apps"
  ],
  
  // Leadership and soft skills
  leadership_keywords: [
    "Technical Leadership", "Team Management", "Mentoring", "Cross-functional Collaboration",
    "Agile Development", "Project Management", "Strategic Planning", "Performance Management",
    "Hiring", "Team Building", "Technical Strategy", "Architecture Design"
  ],
  
  // Industry-specific terms
  industry_keywords: [
    "Financial Technology", "Fintech", "Payment Processing", "Transaction Systems",
    "E-commerce", "Digital Commerce", "Advertising Technology", "AdTech",
    "Software Development Life Cycle", "SDLC", "DevOps", "CI/CD Pipeline"
  ],
  
  // Modern development practices
  practice_keywords: [
    "Test Driven Development", "TDD", "Continuous Integration", "Continuous Deployment",
    "Code Review", "Pair Programming", "Agile Methodology", "Scrum", "Kanban",
    "Version Control", "Git", "GitHub", "Documentation", "Technical Documentation"
  ]
};

// Quantified Achievement Templates for AI parsing
export const achievementTemplates = {
  performance_improvements: [
    "{action} resulting in {percentage}% {metric} improvement",
    "Optimized {system} achieving {number}x {improvement_type}",
    "Reduced {metric} by {percentage}% through {technique}"
  ],
  
  scale_achievements: [
    "Built system handling {number} {unit} per {timeframe}",
    "Scaled {system} to support {number} {metric}",
    "Processed ${amount} in {metric} through {system}"
  ],
  
  team_achievements: [
    "Led team of {number} engineers",
    "Grew team from {start_number} to {end_number} members",
    "Managed {number}+ person engineering organization"
  ]
};

export default {
  aiOptimizedSkills,
  atsKeywords, 
  achievementTemplates
};