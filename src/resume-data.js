export default {
  experience: [
    {
      companyName: 'Tilia / Linden Lab / Thunes',
      location: 'San Francisco, CA (remote)',
      title: 'Principal Engineer / Team Lead',
      tenure: {
        start: '2019',
        end: 'Present',
      },
      description: [
        {
          text: `First frontend engineer on Admin Tools, Tilia's internal operations platform. Multi-tenant and role-governed, used by our compliance, fraud, and finance teams and by support staff at customer companies, who see it as their main window into Tilia. It processes millions in payouts and refunds, along with KYC, Watchlist, Settlements, and Tax`,
        },
        {
          text: `Designed and built the GraphQL layer Admin Tools runs on. That layer presents a set of Go REST services and their databases as one transaction-based model, so clients ask for what the business actually does instead of stitching service calls together`,
        },
        {
          text: `Currently building token-based credentials for programmatic access to that layer, scoped so a token can never do more than the person who issued it`,
        },
        {
          text: `Shipped a customer-facing embeddable widget for TOS compliance, KYC, and payments, then handed it off to a dedicated team. I drew the API and component boundaries with that handoff in mind`,
        },
        {
          text: `Grew from solo frontend engineer to technical lead of a 4-person team, setting engineering standards and mentoring practices while owning architectural direction`,
        },
      ],
    },
    {
      companyName: 'CJ Affiliate',
      location: 'Westlake Village, CA',
      title: 'Progressive Engineering Leadership',
      tenure: {
        start: 'Jan 2014',
        end: '2019',
      },
      description: [
        {
          role: 'Senior Manager of Software Engineering (Feb 2018 - 2019)',
          text: `Went from individual contributor to managing 40+ engineers across several teams. Set department-wide standards for agile process and release planning, and kept writing code the whole time`,
        },
        {
          role: 'Principal Engineer / Team Lead / Chapter Lead (Jan 2015 - Feb 2018)',
          text: `Led the move of the flagship frontend off legacy JavaScript onto ES6 and React, and brought in a real build pipeline (npm, Gulp, Webpack). React became the department standard on the back of that work`,
        },
        {
          text: `Built an iOS/Android event-tracking SDK for outside developers, published to the App Store, with a developer portal to go with it`,
        },
        {
          text: `Took a publisher compliance testing system from rough prototype to production under a hard deadline, for a client we were close to losing. It runs 500,000 tests a day. Mentored the junior engineers on the team along the way`,
        },
        {
          text: `Built a company-wide project management tool on top of Jira that reported on how delivery was actually going`,
        },
        {
          role: 'Senior Software Engineer (Jan 2014 - Jan 2015)',
          text: `Prototyped a customer-facing insights app that was featured at the 2016 CJU Solutions Lounge and fed into sales and product strategy. Took on the frontend chapter lead role, covering developer standards and training across the department`,
        },
      ],
    },

    {
      companyName: 'Demand Magic',
      location: 'Thousand Oaks, CA',
      title: 'Principal Developer',
      tenure: {
        start: 'Apr 2012',
        end: 'Jan 2014',
      },
      description: [
        {
          text: `Built next-generation display advertising platform implementing complex rulesets across multiple ad networks, user attributes, and geographic targeting`,
        },
        {
          text: `Developed ETL data migration tools and real-time reporting dashboard for KPIs, impression statistics, and revenue tracking using Node.js, MongoDB, PostgreSQL, and AWS`,
        },
      ],
    },
    {
      companyName: 'TrueCar',
      location: 'Santa Monica, CA',
      title: 'Principal Developer',
      tenure: {
        start: 'Sep 2011',
        end: 'Apr 2012',
      },
      description: [
        {
          text: `Founded Internal Applications team to modernize legacy financial systems, leading hiring and technical direction for enterprise application consolidation`,
        },
        {
          text: `Led Microsoft Dynamics GP upgrade and migration across 15+ client installations while building web-based portal for financial applications using ASP.NET MVC and MSSQL`,
        },
      ],
    },

    {
      companyName: 'Earlier Experience',
      location: '',
      title: '',
      tenure: {
        start: '',
        end: '',
      },
      compact: true,
      description: [
        {
          role: 'Development Manager / Technical Lead',
          text: `Pocket Kings, Dublin, IE / Los Angeles, CA - Led engineering teams and agile transformation, .NET/C#/MSSQL systems`,
        },
        {
          role: 'Senior Software Engineer',
          text: `Movielink, Santa Monica, CA - Enterprise Java applications, ATG Dynamo, Oracle data warehouse systems`,
        },
        {
          role: 'Software Engineer',
          text: `Day Software, Orange County, CA - Java enterprise integrations, content management systems`,
        },
        {
          role: 'Software Engineer',
          text: `Post Communications / Netcentives, San Francisco, CA - Distributed high-throughput email delivery, Java/JavaScript, unit testing advocacy`,
        },
        {
          role: 'Software Engineer / Technical Lead',
          text: `ModaCAD / Styleclick.com, Los Angeles, CA - Early web development, JavaScript/CSS, team leadership, e-commerce prototyping`,
        },
      ],
    },

    {
      live: 'off',
      companyName: 'COMPANYNAME',
      location: 'LOCATION',
      title: 'TITLE',
      tenure: {
        start: 'TENURE START',
        end: 'TENURE END',
      },
      description: [
        {text: `Decription1`},
        {text: `Decription2`},
        {text: `Decription3`},
      ],
    },
  ],
};
