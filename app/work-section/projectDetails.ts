export type CaseStudyContent = {
  client: string;
  intro: string;
  providedServices?: string[];
  roleSummary?: string;
  outcome?: string;
  services?: string[];
  capability?: string;
  challenge?: string;
  solution?: string[];
  results?: string[];
};

export type ProjectProps = {
  id: number;
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: any;
  cardImage?: any;
  pageIntroImage?: any;
  pageSecondaryImage?: any;
  pageImages?: any[];
  available: boolean;
  caseStudy: CaseStudyContent;
};

export const devProjects = [
  {
    id: 1,
    slug: "mindenergy-marketing",
    name: "MindEnergy Marketing Website",
    description:
      "A fast and modern marketing website built to communicate clearly while keeping performance a priority.",
    technologies: ["React", "TypeScript", "Next.js", "Sanity CMS"],
    github: "",
    demo: "https://mindenergy.com",
    image: require(".//../../public/projects/mindenergy-marketing/mindenergyhero.webp"),
    cardImage: require(".//../../public/projects/mindenergy-marketing/mindenergyhero.webp"),
    pageImages: [
      require(".//../../public/projects/mindenergy-marketing/mindenergyhero.png"),
      require(".//../../public/projects/mindenergy-marketing/mindenergysecond.png"),
    ],
    available: true,
    caseStudy: {
      client: "MindEnergy",
      intro:
        "A fast and modern marketing website built to communicate clearly while keeping performance a priority.",
      providedServices: [
        "Frontend development",
        "UI implementation",
        "CMS integration",
        "Performance optimization",
        "SEO improvements",
      ],
      roleSummary:
        "I translated design into a clean, responsive frontend and focused on performance from the start. The setup allows content to be managed easily while keeping the experience fast and consistent across devices.",
      outcome:
        "A lightweight and maintainable marketing site that loads quickly, ranks well, and is easy for the client to update without developer involvement.",
    },
  },
  // {
  //   id: 6,
  //   slug: "gallerianti",
  //   name: "GalleriAnti (WIP)",
  //   description:
  //     "Portfolio website for arts and culture organisation. ",
  //   technologies: ["React", "Framer Motion", "UI/UX"],
  //   github: "https://github.com/VladimirDima/galleri-anti-framer-react-website",
  //   demo: "https://galleri-anti-framer-react-website.vercel.app/",
  //   image: require(".//../../public/projects/gallerianti/galleri-anti-mock.webp"),
  //   available: true,
  //   caseStudy: {
  //     client: "GalleriAnti",
  //     services: ["Brand Website", "Frontend Development", "Motion"],
  //     capability: "Culture & Portfolio Experiences",
  //     intro:
  //       "We are building a contemporary portfolio website for GalleriAnti that highlights artistic work through an expressive, motion-led browsing experience.",
  //     challenge:
  //       "The site needed to communicate artistic identity while remaining performant and easy for visitors to navigate across projects and exhibitions.",
  //     solution: [
  //       "We designed a visual direction that emphasizes artwork first, then layered in subtle motion to guide attention and support storytelling.",
  //       "The implementation uses React and Framer Motion with reusable UI patterns so new content can be added without redesigning core templates.",
  //     ],
  //     results: [
  //       "Established a distinct digital identity aligned with the brand",
  //       "Built a maintainable frontend for iterative project updates",
  //       "Improved storytelling through focused interaction and layout",
  //     ],
  //   },
  // },
  {
    id: 2,
    slug: "harris",
    name: "Harris Website & Digital Operations",
    description:
      "Ongoing development and modernization of a website for a brick design company, alongside improvements to internal workflows and digital operations.",
    technologies: ["Framer", "Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "N8N"],
    github: "",
    demo: "https://www.harris.dk/",
    image: "/projects/harris/harriscard.webp",
    cardImage: "/projects/harris/harriscard.webp",
    pageImages: [
      "/projects/harris/harrishero.png",
      "/projects/harris/harrissecond.png",
    ],
    available: true,
    caseStudy: {
      client: "Harris",
      intro:
        "An ongoing collaboration focused on maintaining and evolving the company’s website while gradually modernizing internal processes and workflows.",
      providedServices: [
        "Frontend development",
        "Website maintenance",
        "CMS integration",
        "Performance improvements",
        "Workflow automation",
      ],
      roleSummary:
        "I’m responsible for maintaining and further developing the website using a modern stack, while also helping the company move toward more efficient digital workflows. This includes improving the frontend experience as well as introducing tools and processes that reduce manual work.",
      outcome:
        "A more modern and maintainable website, combined with improved internal workflows. For example, I introduced simple AI-assisted processes using n8n for handling content updates and repetitive tasks, reducing time spent on manual operations.",
    },
  },
  {
    id: 3,
    slug: "ecotree-marketing",
    name: "EcoTree Website",
    description:
      "A modern marketing website focused on clearly communicating a sustainability-driven product while keeping performance and usability high.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "",
    demo: "https://ecotree.green/en/",
    image: "/projects/ecotree-marketing/ecotreehero.avif",
    cardImage: "/projects/ecotree-marketing/ecotreehero.avif",
    pageImages: [
      "/projects/ecotree-marketing/ecotreefirst.png",
      "/projects/ecotree-marketing/ecotreesecond.png",
    ],
    available: true,
    caseStudy: {
      client: "EcoTree",
      intro:
        "A modern marketing website focused on clearly communicating a sustainability-driven product while keeping performance and usability high.",
      providedServices: [
        "Frontend development",
        "UI implementation",
        "Design collaboration",
        "Performance optimization",
        "Responsive development",
      ],
      roleSummary:
        "I worked on developing the marketing website using Next.js and Tailwind, translating design concepts into a responsive and consistent frontend. A key part of the work was ensuring the site could handle a growing amount of content while staying fast and easy to navigate.",
      outcome:
        "A clean and fast marketing site that makes the product easier to understand, while remaining flexible and easy to maintain as content evolves.",
    },
  },
  {
    id: 4,
    slug: "fortescue",
    name: "Fortescue Digital Experience Platform",
    description:
      "A global website platform built to unify multiple regional sites into one scalable and consistent digital experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sitecore XM Cloud"],
    github: "",
    demo: "https://www.fortescue.com/en",
    image: "/projects/fortescue/fortescuecard.webp",
    cardImage: "/projects/fortescue/fortescuecard.webp",
    pageImages: [
      "/projects/fortescue/fortescuehero.png",
      "/projects/fortescue/fortescuesecond.avif",
    ],
    available: true,
    caseStudy: {
      client: "Fortescue",
      intro:
        "A large-scale platform built to unify multiple regional websites into a single, scalable digital experience aligned with a global brand.",
      providedServices: [
        "Frontend development",
        "UI implementation",
        "Design system implementation",
        "CMS integration",
        "Performance optimization",
      ],
      roleSummary:
        "I worked on the frontend implementation of a new global platform, focusing on translating the design system into reusable components and building a consistent user experience across markets. The work involved integrating with a headless CMS setup and ensuring the frontend could scale across multiple sites and languages.",
      outcome:
        "The result is a unified platform that enables faster rollout of new sites while maintaining a consistent brand experience. The architecture supports scalability across markets and significantly reduces the time needed to launch and update content.",
    },
  },
  {
    id: 5,
    slug: "evryone-marketing",
    name: "Evryone Marketing Website",
    description:
      "A marketing website bringing together multiple products under a single, unified experience.",
    technologies: ["Webflow", "Figma", "JavaScript", "CMS"],
    github: "",
    demo: "https://www.evryone.io/",
    image: "/projects/evryone-marketing/evryonecard.jpg",
    cardImage: "/projects/evryone-marketing/evryonecard.jpg",
    pageImages: [
      "/projects/evryone-marketing/evryonefirst.png",
      "/projects/evryone-marketing/evryonesecond.png",
      "/projects/evryone-marketing/evryonethird.png",
    ],
    available: true,
    caseStudy: {
      client: "Evryone",
      intro:
        "A marketing website bringing together multiple products under a single, unified experience.",
      providedServices: [
        "Webflow development",
        "Design collaboration",
        "Frontend customization",
        "Content structuring",
        "Performance and responsiveness",
      ],
      roleSummary:
        "I worked on rebuilding the marketing site in Webflow, taking part in the design process and helping shape how the different products should be presented. The main challenge was consolidating what was essentially four separate websites into a single, cohesive structure, while still keeping each product distinct and easy to navigate.",
      outcome:
        "A unified marketing platform that brings all products together in a consistent way, making it easier for users to understand the offering while simplifying maintenance on the client side.",
    },
  },
  {
    id: 6,
    slug: "rough-agency",
    name: "RoughAgency Website",
    description:
      "A portfolio-style website for a mural artist agency, designed to showcase artists and their work in a clear and structured way.",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "Figma"],
    github: "",
    demo: "",
    image: "/projects/rough-agency/roughagencycard.jpeg",
    cardImage: "/projects/rough-agency/roughagencycard.jpeg",
    pageImages: [
      "/projects/rough-agency/roughagencyhero.png",
      "/projects/rough-agency/roughagencysecond.png",
    ],
    available: false,
    caseStudy: {
      client: "RoughAgency",
      intro:
        "A platform for presenting mural artists and their work, with a focus on visual clarity and easy navigation.",
      providedServices: [
        "Web design",
        "Frontend development",
        "CMS structure",
        "Custom WordPress development",
        "Deployment",
      ],
      roleSummary:
        "I designed and developed the site with a focus on showcasing visual work. A big part of the process was structuring content so new artists and projects could be added without breaking the layout.",
      outcome:
        "A flexible portfolio platform that makes it easy to present and manage artist work over time.",
    },
  },
  {
    id: 7,
    slug: "nsc",
    name: "NSC Website",
    description:
      "A content-heavy website for a Romanian think tank, focused on structuring articles and publications in a clear and readable way.",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "Figma", "MySQL"],
    github: "",
    demo: "https://newstrategycenter.ro/en/",
    image: "/projects/nsc/nsc.jpg",
    available: true,
    caseStudy: {
      client: "NSC",
      intro:
        "A structured content platform designed to present research, articles, and publications in a clear and accessible way.",
      providedServices: [
        "Web design",
        "Frontend development",
        "Content structuring",
        "WordPress development",
        "Hosting and deployment",
      ],
      roleSummary:
        "I worked on designing and building a content-heavy website, focusing on readability and structure. The goal was to make large amounts of information easy to navigate for different types of users.",
      outcome:
        "A clear and maintainable platform that supports ongoing publishing and makes complex content easier to consume.",
    },
  },
];

export const designProjects = [
  {
    id: 1,
    slug: "hebron-startup-lab",
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/hebron-startup-lab/hsl.webp",
    available: false,
    caseStudy: {
      client: "Hebron Startup Lab",
      services: ["UX Research", "UI Design", "Prototyping"],
      capability: "Web Design & Product Discovery",
      intro:
        "We designed a website concept for Hebron Startup Lab focused on clarifying their mission, programs, and startup ecosystem impact.",
      challenge:
        "The previous direction lacked clear storytelling and made it difficult for founders and partners to understand available initiatives.",
      solution: [
        "Our process combined stakeholder input with user-centered navigation design to organize programs, outcomes, and calls to action.",
        "We produced high-fidelity UI and interactive prototypes to validate hierarchy, readability, and conversion points before development.",
      ],
      results: [
        "Sharper communication of value proposition and services",
        "More intuitive structure for key audience journeys",
        "A validated prototype ready for production handoff",
      ],
    },
  },
  {
    id: 2,
    slug: "rags-scrubs",
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/rags-scrubs/rags.webp",
    available: false,
    caseStudy: {
      client: "RAGS Scrubs",
      services: ["UX Research", "UI Design", "Prototyping"],
      capability: "E-commerce Experience Design",
      intro:
        "For RAGS Scrubs, we designed a web experience that combines strong brand presentation with a straightforward product discovery flow.",
      challenge:
        "The target audience needed to quickly browse product options while still feeling the quality and personality of the brand.",
      solution: [
        "We structured category and product pages to reduce browsing friction and keep purchase actions visible throughout the journey.",
        "A modular design system was created to support campaigns, new product drops, and future content expansion with consistency.",
      ],
      results: [
        "Improved product discoverability across key categories",
        "Created a clear and scalable visual system",
        "Prepared the experience for rapid campaign iterations",
      ],
    },
  },
  {
    id: 3,
    slug: "crown-branding-agency",
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/crown-branding-agency/crown.webp",
    available: false,
    caseStudy: {
      client: "Crown Branding Agency",
      services: ["UX Research", "UI Design", "Prototyping"],
      capability: "Agency Website & Lead Generation",
      intro:
        "We designed Crown's website concept to showcase portfolio credibility while guiding visitors toward service inquiries.",
      challenge:
        "The agency needed a digital presence that could present creative quality and strategic expertise without overwhelming potential clients.",
      solution: [
        "We defined a clean content hierarchy across service, case-study, and about pages to improve scannability and decision-making.",
        "Interactive prototypes tested hero messaging, social proof placement, and contact pathways to optimize conversion intent.",
      ],
      results: [
        "Stronger positioning of services and case-study outcomes",
        "Clearer lead-generation pathways throughout the site",
        "A polished visual direction aligned with agency brand goals",
      ],
    },
  },
  {
    id: 4,
    slug: "titi-mobile-app",
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/titi-mobile-app/titi.webp",
    available: false,
    caseStudy: {
      client: "Titi",
      services: ["UX Research", "UI Design", "Prototyping"],
      capability: "Mobile Product Experience",
      intro:
        "For Titi, we designed a ride-sharing mobile app concept that helps users find cost-sharing travel companions heading in the same direction.",
      challenge:
        "Trust, route clarity, and matching confidence were central challenges in making shared rides feel safe and practical.",
      solution: [
        "We mapped core booking and matching flows to reduce cognitive load while maintaining transparency around route and rider details.",
        "High-fidelity interface prototypes validated onboarding, match review, and payment-adjacent interaction patterns.",
      ],
      results: [
        "Simplified the end-to-end ride matching experience",
        "Improved trust through clearer information architecture",
        "Delivered a prototype set ready for product development",
      ],
    },
  },
];

export const appsProjects = [
  {
    id: 1,
    slug: "fp-dashboard",
    name: "Forsikring & Pension Dashboard",
    description:
      "A structured financial dashboard built to present complex data in a clear and reliable way for enterprise users.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "REST APIs"],
    github: "",
    demo: "",
    image: "/projects/fp-dashboard/fp-dashboard.jpg",
    available: false,
    caseStudy: {
      client: "Forsikring & Pension",
      intro:
        "A structured financial dashboard built to present complex data in a clear and reliable way for enterprise users.",
      providedServices: [
        "Frontend architecture",
        "UI development",
        "Design system alignment",
        "State management",
        "API integration",
      ],
      roleSummary:
        "Working in a small team, I took the lead on frontend decisions and overall structure. The focus was on building a modular and maintainable system, with reusable components and a clear data flow that could support the product long term.",
      outcome:
        "A stable and scalable frontend setup that makes financial data easier to navigate, while allowing the platform to evolve without introducing unnecessary complexity.",
    },
  },
  {
    id: 2,
    slug: "ecotree",
    name: "EcoTree",
    description:
      "E-commerce webshop and a dashboard where you can track how the trees that you've bought impact the climate.",
    technologies: ["React", "UI/UX", "Twig", "Storybook"],
    github: "",
    demo: "https://ecotree.green/en/",
    image: require(".//../../public/projects/ecotree/ecotree-mock.webp"),
    available: true,
    caseStudy: {
      client: "EcoTree",
      services: ["E-commerce", "Dashboard UX", "Frontend Engineering"],
      capability: "Sustainable Commerce & Data Experiences",
      intro:
        "For EcoTree, we delivered an e-commerce and impact-tracking experience that helps users buy trees and instantly understand their environmental contribution.",
      challenge:
        "The business needed to combine transactional shopping with educational climate data in one seamless user journey.",
      solution: [
        "We designed a content and commerce model that balances conversion goals with transparency around environmental impact.",
        "A reusable frontend system was implemented for product pages, account areas, and a dashboard that visualizes purchased-tree outcomes.",
      ],
      results: [
        "Connected e-commerce actions directly to impact visibility",
        "Strengthened trust through clearer climate reporting",
        "Enabled faster rollout of new content and campaign pages",
      ],
    },
  },
  {
    id: 3,
    slug: "lendme",
    name: "Lendme",
    description:
      "Digital solution for comparing loan offers easily and quickly. Fill in a single application to receive loan offers from several banks.",
    technologies: ["Angular 8", "SCSS", "PHP", "UI/UX"],
    github: "",
    demo: "https://lendme.dk/",
    image: require(".//../../public/projects/lendme/Mockup-LendMe.webp"),
    available: true,
    caseStudy: {
      client: "Lendme",
      services: ["Strategy", "Web Platform", "UX/UI"],
      capability: "Digital Product Design & Growth",
      intro:
        "We brought Lendme's loan comparison experience into one conversion-focused platform that guides users from application to matched offers in a few steps.",
      challenge:
        "Loan comparison often overwhelms users with complex forms and unclear outcomes. The challenge was to reduce friction while still collecting enough data to provide accurate bank matches.",
      solution: [
        "We designed a guided application flow that progressively reveals fields and keeps the user focused on one clear action at a time.",
        "On the implementation side, we shipped a responsive frontend and reusable components for campaign pages, comparison views, and trust-building content blocks.",
      ],
      results: [
        "Simplified the application journey into a clear step-by-step flow",
        "Improved clarity around offer matching and next actions",
        "Created a scalable website foundation for future growth initiatives",
      ],
    },
  },
  {
    id: 4,
    slug: "ibg",
    name: "IBG",
    description:
      "IBG is a digital solution for life management for people with disabilities. The solution consists of a large number of modules and functions for communication and planning in everyday life.",
    technologies: ["Vue", "GraphQL", "PHP"],
    github: "",
    demo: "https://www.evryone.io/",
    image: require(".//../../public/projects/ibg/IBG-mockup.webp"),
    available: true,
    caseStudy: {
      client: "IBG",
      services: ["Product Design", "Frontend Development", "Accessibility"],
      capability: "Digital Platforms & Inclusive Experiences",
      intro:
        "We developed a modular digital platform for IBG that supports planning, communication, and daily coordination for people with disabilities and care teams.",
      challenge:
        "The product had to serve multiple user groups with different needs, while remaining intuitive and accessible in day-to-day use across many modules.",
      solution: [
        "We built a component-driven interface and information architecture that keeps complex workflows understandable for end users and administrators.",
        "Using Vue, GraphQL, and PHP, we connected data-heavy features into a coherent product experience with predictable patterns and scalable structure.",
      ],
      results: [
        "Unified multiple modules into one coherent digital experience",
        "Improved usability for both support teams and end users",
        "Delivered a scalable foundation for ongoing feature expansion",
      ],
    },
  },
];

export const allProjects: ProjectProps[] = [
  ...devProjects,
  ...designProjects,
  ...appsProjects,
];

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);
