export default {
  experience: [
    {
      companyName: 'Samsara',
      location: 'San Francisco Bay Area, CA (Remote)',
      //title: 'Senior Software Engineer',
      tenure: {
        start: 'Mar 2021',
        end: 'Sept 2025',
      },
      description: [
        {
          role: 'Senior Software Engineer - Competitions Product',
          text: `Primary tech lead on a new gamification product that allows Samsara’s customers to run competitions among their drivers, based on any of the metrics that are tracked by Samsara’s products. Responsible for system design, requirements gathering, scoping and planning, and leading engineers (as well as writing code).`,
        },
        {
          text: `Used AI tools such as Cursor and Glean to enhance every phase of the software development lifecycle.`,
        },
        {
          role: 'Senior Software Engineer - Custom Reports Platform',
          text: `Tech lead on a multi-quarter project to develop a custom reporting framework. This product enables customers to pick and choose different pieces of data from across Samsara’s domains, and consolidate that data into a single, understandable, performant report. Lead engineer on key features such as visualizations (charts), the query compiler, time-based grouping, and the service responsible for serving processed data to the frontend.`,
        },
        {
          text: `This project was a career highlight due to the product’s incredible scope, complexity, teammates, and customer impact.`,
        },
        {
          role: 'Senior Software Engineer - Media Services',
          text: `Tech lead and engineer on services that ingest, process, and serve videos and images. Maintained legacy architecture while designing and developing the next-generation services.`,
        },
        {
          role: 'Senior Software Engineer - Telematics Platform',
          project: 'Trips Service',
          text: `Maintained and enhanced a service that transformed raw vehicle metrics into periods of activity called “trips”. This is a critical building block of Samsara’s domain that all other product teams build logic on top of. This service operates at scale: the read path serves 50,000+ requests per second at the daily peak.`,
        },
        {
          project: 'Driver Assignment Service',
          text: `Primary tech lead and engineer on this new service that consolidated Samsara’s 11 different methods of assigning a driver to a vehicle into an easily-queryable service and data store. When we released this service, it immediately served 30,000+ requests per second, and supported some of Samsara’s most critical real-time logic.`,
        },
      ],
      breakAfter: true,
    },
    {
      companyName: 'Stitch Fix',
      location: 'San Francisco Bay Area, CA (Remote)',
      //title: 'Senior Software Engineer',
      tenure: {
        start: 'Mar 2020',
        end: 'Mar 2021',
      },
      description: [
        {
          role: 'Lead Software Engineer - Messaging Platform',
          text: `I work on a team that's responsible for Stitch Fix's messaging infrastructure. Over 70 million messages flow through our RabbitMQ and Kafka systems every day. I'm responsible for developing the Golang clients that other Stitch Fix software engineers use. I've also designed and developed parts of the messaging infrastructure. Our team's current project is migrating all of Stitch Fix's microservices from RabbitMQ to Kafka.`,
        },
        {
          text: `I enjoy contributing to our internal Golang community. I've introduced new processes and tools, such as a versioning strategy and Go modules. I also participated in a series of Go "code clinics", where I designed and gave presentations to familiarize Stitch Fix engineers with Go and its strengths and patterns.`,
        },
      ],
    },
    {
      companyName: 'Linden Lab',
      location: 'San Francisco Bay Area, CA',
      //title: 'Senior Software Engineer',
      tenure: {
        start: 'Oct 2008',
        end: 'Mar 2020',
      },
      description: [
        {
          role: 'Senior Software Engineer - Core Services',
          text: `I worked on the team that provided the core data and services (via REST APIs and microservices) for all of Linden Lab's products.  Our services included auth, account management, payments and invoicing, PII management, a virtual currency exchange, and much more.  We built all of these services from the ground up.`,
        },
        {
          text: `Developed the infrastructure for Linden Lab's new virtual world, Sansar (https://www.sansar.com).  The services we created were spun off into a new SaaS company owned by Linden Lab, called Tilia (https://tilia-inc.com).`,
        },
        {
          role: 'Senior Software Engineer - Internal Tools',
          text: `Worked on a small team that developed tools for Linden Lab's internal customer support departments. `,
        },
        {
          role: 'Software Engineer - Second Life Web Team',
          text: `Worked on the team that developed web properties for Second Life.  Was the technical owner of Second Life's registration website, https://join.secondlife.com.  Helped re-design https://secondlife.com, and worked on Second Life's billing engine.`,
        },
      ],
    },
    {
      companyName: 'LifeMasters Supported SelfCare',
      location: 'San Francisco Bay Area, CA',
      //title: 'Senior Software Engineer',
      tenure: {
        start: 'Sept 2005',
        end: 'Oct 2008',
      },
      description: [
        {
          role: "Senior Software Engineer",
          text: `Enhanced and maintained LifeMasters’ enterprise applications, including a C++ call center application used by over 1000 health professionals (doctors & nurses), a web application used by LifeMasters’ clients (insurance companies), and a web portal used by LifeMasters’ 1 million participants (patients).`,
        },
      ],
    },
    {
      companyName: 'TechniEdge Financial Integration (TFI), Inc.',
      location: 'Scotts Valley, CA',
      //title: 'Software Engineer',
      tenure: {
        start: 'Oct 2004',
        end: 'Jul 2005',
      },
      description: [
        {
          role: "Software Engineer",
          text: `Worked in a small development team with a start-up feel to provide custom applications and solutions.  Our niche was financial reporting and customer engagement tools for casinos.`,
        },
      ],
      breakAfter: true,
    },
    {
      companyName: 'Medical College of Ohio',
      location: 'Toledo, OH',
      //title: 'Software Developer',
      tenure: {
        start: 'Oct 2000',
        end: 'Oct 2004',
      },
      description: [
        {
          role: "Software Developer & System Analyst",
          text: `Designed, built, and maintained multi-tier database applications to support the college’s academic community.`,
        },
        {
          role: "Help Desk Intern",
          text: `The best thing about this job was: it's where I met my wife!`,
        },
      ],
    },
    {
      companyName: 'Libbey, Inc',
      location: 'Toledo, OH',
      //title: 'Software Developer',
      tenure: {
        start: 'Mar 2000',
        end: 'Sept 2000',
      },
      description: [
        {
          role: "Web Developer Intern",
          text: `My first job as a code monkey! I worked on the libbey.com website.`,
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
