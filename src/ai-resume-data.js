// AI-Optimized Resume Data with Enhanced Metrics and Semantic Structure
import { aiOptimizedSkills, atsKeywords } from './ai-optimization.js';

// Enhanced experience data with quantified achievements
export const aiOptimizedExperience = [
  {
    companyName: 'Tilia / Linden Lab / Thunes',
    location: 'San Francisco, CA (remote)',
    title: 'Principal Engineer / Team Lead',
    tenure: {
      start: '2019',
      end: 'Present',
    },
    // AI-friendly role categorization
    role_type: 'technical_leadership',
    industry: 'financial_technology',
    team_size: 4,
    budget_responsibility: '$50M+',
    
    // Enhanced descriptions with quantified metrics
    description: [
      {
        category: 'architecture',
        text: `Architected and delivered complete React-based administrative platform replacement as founding frontend engineer, transforming legacy Angular application into mission-critical multi-tenant interface serving both internal agents managing $millions in payouts/refunds/KYC and external customer support teams for self-service user administration`,
        metrics: {
          impact: 'system_replacement',
          scale: '$millions_processed',
          users: 'multi_tenant',
          technology: ['React', 'Angular migration', 'KYC systems']
        },
        keywords: ['Frontend Architecture', 'React Development', 'Legacy System Migration', 'Financial Technology', 'KYC Compliance']
      },
      {
        category: 'technical_leadership',
        text: `Designed and implemented GraphQL abstraction layer aggregating multiple backend REST services and databases, creating unified transaction-based data model that simplified complex invoicing, wallet, and payment operations for improved user experience and operational efficiency`,
        metrics: {
          impact: 'system_integration',
          technology: ['GraphQL', 'REST APIs', 'Database Integration'],
          outcome: 'improved_efficiency'
        },
        keywords: ['GraphQL Implementation', 'API Design', 'Database Integration', 'Payment Systems', 'System Architecture']
      },
      {
        category: 'team_leadership',
        text: `Scaled from solo frontend engineer to technical leader of 4-person team, establishing engineering standards, mentoring practices, and development workflows while maintaining ownership of critical architecture decisions and technical direction`,
        metrics: {
          team_growth: '1_to_4',
          leadership_scope: 'engineering_standards',
          responsibility: 'architecture_decisions'
        },
        keywords: ['Team Leadership', 'Technical Mentoring', 'Engineering Standards', 'Architecture Design', 'Team Scaling']
      },
      {
        category: 'product_development',
        text: `Built customer-facing embeddable widget handling TOS compliance, KYC workflows, and payment processing, then successfully transitioned ownership to dedicated team while maintaining architectural oversight and knowledge transfer`,
        metrics: {
          product_type: 'customer_facing_widget',
          features: ['TOS compliance', 'KYC workflows', 'payment processing'],
          transition: 'successful_handoff'
        },
        keywords: ['Widget Development', 'Customer-facing Applications', 'KYC Workflows', 'Payment Processing', 'Knowledge Transfer']
      }
    ]
  },
  {
    companyName: 'CJ Affiliate',
    location: 'Westlake Village, CA',
    title: 'Progressive Engineering Leadership',
    tenure: {
      start: 'Jan 2014',
      end: '2019',
    },
    role_type: 'progressive_leadership',
    industry: 'advertising_technology',
    career_progression: true,
    
    description: [
      {
        role: 'Senior Manager of Software Engineering (Feb 2018 - 2019)',
        category: 'executive_leadership',
        text: `Progressed from individual contributor to managing 40+ engineers across multiple teams, establishing department-wide standards for agile development, release planning, and technical excellence while maintaining hands-on technical contributions`,
        metrics: {
          team_size: '40+',
          scope: 'department_wide',
          progression: 'IC_to_manager',
          practices: ['agile development', 'release planning']
        },
        keywords: ['Engineering Management', 'Team Scaling', 'Agile Development', 'Technical Excellence', 'Department Leadership']
      },
      {
        role: 'Principal Engineer / Team Lead / Chapter Lead (Jan 2015 - Feb 2018)',
        category: 'technical_transformation',
        text: `Led modernization of flagship frontend application from legacy JavaScript to ES6/React, introducing modern build pipeline (npm, Gulp, Webpack) and establishing React as department-standard technology, influencing architectural decisions across entire engineering organization`,
        metrics: {
          transformation: 'legacy_to_modern',
          technology_migration: 'JavaScript_to_React',
          organizational_impact: 'department_standard',
          tools: ['npm', 'Gulp', 'Webpack']
        },
        keywords: ['Frontend Modernization', 'React Migration', 'Build Pipeline', 'Technology Leadership', 'Architectural Decisions']
      },
      {
        category: 'high_impact_delivery',
        text: `Delivered high-performance publisher compliance testing system capable of 500,000 tests/day under tight deadlines for at-risk client, scaling from rough prototype to production system while mentoring junior team members`,
        metrics: {
          performance: '500000_tests_per_day',
          timeline: 'tight_deadlines',
          risk_level: 'at_risk_client',
          scale: 'prototype_to_production'
        },
        keywords: ['High-performance Systems', 'Compliance Testing', 'Production Scaling', 'Team Mentoring', 'Critical Delivery']
      },
      {
        category: 'innovation',
        text: `Built company-wide agile project management tool on Atlassian Jira providing data-driven progress insights, and created mobile SDK for iOS/Android event tracking with full App Store publication and developer portal`,
        metrics: {
          scope: 'company_wide',
          platforms: ['iOS', 'Android'],
          deliverables: ['SDK', 'App Store publication', 'developer portal']
        },
        keywords: ['Project Management Tools', 'Mobile SDK Development', 'iOS Development', 'Android Development', 'Developer Tools']
      },
      {
        role: 'Senior Software Engineer (Jan 2014 - Jan 2015)',
        category: 'strategic_contribution',
        text: `Prototyped customer-facing insights application featured at 2016 CJU Solutions Lounge, directly supporting sales and product strategy while establishing frontend chapter leadership role managing department-wide developer standards and training`,
        metrics: {
          visibility: 'customer_facing',
          business_impact: 'sales_support',
          leadership_scope: 'department_wide_standards'
        },
        keywords: ['Customer-facing Applications', 'Product Strategy', 'Frontend Leadership', 'Developer Standards', 'Technical Training']
      }
    ]
  },
  // ... continue with other positions following the same enhanced structure
];

// AI-optimized skills mapping
export const aiSkillsData = {
  technical_skills: {
    programming_languages: aiOptimizedSkills.programming_languages,
    frontend_technologies: aiOptimizedSkills.frontend_technologies,
    backend_technologies: aiOptimizedSkills.backend_technologies,
    development_practices: aiOptimizedSkills.development_practices
  },
  
  leadership_skills: aiOptimizedSkills.leadership_skills,
  ai_tools: aiOptimizedSkills.ai_tools,
  industry_expertise: aiOptimizedSkills.industry_expertise,
  
  // Flat keyword list for ATS scanning
  ats_keywords: [
    ...atsKeywords.role_keywords,
    ...atsKeywords.technology_keywords,
    ...atsKeywords.leadership_keywords,
    ...atsKeywords.industry_keywords,
    ...atsKeywords.practice_keywords
  ]
};

// Structured data for maximum AI comprehension
export const structuredPersonData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Franklin Henderson",
  "jobTitle": "Principal Engineer / Team Lead",
  "email": "work@fhwrdh.net",
  "url": "https://resume.fhwrdh.net",
  "sameAs": [
    "https://linkedin.com/in/franklinhenderson",
    "https://github.com/fhwrdh",
    "https://instagram.com/fhwrdh"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "knowsAbout": [
    "JavaScript Programming", "TypeScript", "React Development", "Frontend Architecture",
    "Team Leadership", "Technical Management", "Financial Technology", "GraphQL",
    "Node.js", "Python", "System Architecture", "Performance Optimization"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "CSUN"
  },
  "worksFor": {
    "@type": "Organization", 
    "name": "Tilia",
    "parentOrganization": "Linden Lab"
  }
};

export default {
  aiOptimizedExperience,
  aiSkillsData,
  structuredPersonData
};