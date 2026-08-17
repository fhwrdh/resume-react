export default {
  experience: [
    {
      companyName: 'Tilia / Linden Lab / Thunes',
      location: 'San Francisco, CA (remote)',
      title: 'Principal Engineer / Team Lead',
      tenure: {
        start: 'May 2019',
        end: 'Present',
      },
      summary: `Joined as the first frontend engineer on Admin Tools, Tilia's internal operations platform. It processes millions in payouts and refunds, along with KYC, Watchlist, Settlements, and Tax.`,
      description: [
        {
          text: `Build and maintain the Admin Tools client, a React SPA of roughly 40 screens. Every screen is permission-aware, so compliance, fraud, and finance teams and the support staff at customer companies each see only what their role and tenant allow`,
        },
        {
          text: `Currently building delegated personal access tokens so AI agents can act against the GraphQL layer on a person's behalf, bounded by that person's own role and tenant rather than granted authority of their own`,
        },
        {
          text: `Designed and built the GraphQL layer Admin Tools runs on. This layer sits atop a broad set of Go REST APIs and other data sources and introduces a transaction model shaped around the work operators actually do`,
        },
        {
          text: `Shipped a customer-facing embeddable widget for TOS compliance, KYC, and payments, then handed it off to a dedicated team. Drew the API and component boundaries with that handoff in mind`,
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
        end: 'May 2019',
      },
      description: [
        {
          role: 'Senior Manager of Software Engineering (Feb 2018 - May 2019)',
          text: `Went from Team Lead to managing 40+ engineers across several teams. Set department-wide standards for agile process and release planning, and kept writing code the whole time`,
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
          text: `Built a company-wide project management tool on top of Jira that reported delivery progress across teams`,
        },
        {
          role: 'Senior Software Engineer (Jan 2014 - Jan 2015)',
          text: `Prototyped a customer-facing insights app that was featured at the CJU Solutions Lounge and fed into sales and product strategy. Took on the frontend chapter lead role, covering developer standards and training across the department`,
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
          role: 'Principal Developer',
          start: 'Apr 2012',
          end: 'Jan 2014',
          text: `Demand Magic, Thousand Oaks, CA - Display advertising platform with complex targeting rules, ETL tooling and real-time reporting, Node.js/MongoDB/PostgreSQL/AWS`,
        },
        {
          role: 'Principal Developer',
          start: 'Sep 2011',
          end: 'Apr 2012',
          text: `TrueCar, Santa Monica, CA - Founded the Internal Applications team, modernized legacy financial systems, ASP.NET MVC/MSSQL`,
        },
        {
          role: 'Development Manager / Technical Lead',
          start: '2005',
          end: '2011',
          text: `Pocket Kings, Dublin, IE / Los Angeles, CA - Led engineering teams and agile transformation, .NET/C#/MSSQL systems`,
        },
        {
          role: 'Senior Software Engineer',
          start: '2002',
          end: '2005',
          text: `Movielink, Santa Monica, CA - Enterprise Java applications, ATG Dynamo, Oracle data warehouse systems`,
        },
        {
          role: 'Software Engineer',
          start: '2001',
          end: '2002',
          text: `Day Software, Orange County, CA - Java enterprise integrations, content management systems`,
        },
        {
          role: 'Software Engineer',
          start: '1999',
          end: '2001',
          text: `Post Communications / Netcentives, San Francisco, CA - Distributed high-throughput email delivery, Java/JavaScript, unit testing advocacy`,
        },
        {
          role: 'Software Engineer / Technical Lead',
          start: '1997',
          end: '1999',
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
