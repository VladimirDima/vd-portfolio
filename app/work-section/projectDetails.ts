export type CaseStudyContent = {
  client: string;
  services: string[];
  capability: string;
  intro: string;
  challenge: string;
  solution: string[];
  results: string[];
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
  available: boolean;
  caseStudy: CaseStudyContent;
};

export const devProjects = [
  {
    id: 1,
    slug: "lendme",
    name: "Lendme",
    description:
      "Digital solution for comparing loan offers easily and quickly. Fill in a single application to receive loan offers from several banks.",
    technologies: ["Angular 8", "SCSS", "PHP", "UI/UX"],
    github: "",
    demo: "https://lendme.dk/",
    image: require(".//../../public/projects/Mockup-LendMe.webp"),
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
    id: 2,
    slug: "ibg",
    name: "IBG",
    description:
      "IBG is a digital solution for life management for people with disabilities. The solution consists of a large number of modules and functions for communication and planning in everyday life.",
    technologies: ["Vue", "GraphQL", "PHP"],
    github: "",
    demo: "https://www.evryone.io/",
    image: require(".//../../public/projects/IBG-mockup.webp"),
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
  {
    id: 3,
    slug: "ecotree",
    name: "EcoTree",
    description:
      "E-commerce webshop and a dashboard where you can track how the trees that you've bought impact the climate.",
    technologies: ["React", "UI/UX", "Twig", "Storybook"],
    github: "",
    demo: "https://ecotree.green/en/",
    image: require(".//../../public/projects/ecotree-mock.webp"),
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
    id: 4,
    slug: "gallerianti",
    name: "GalleriAnti (WIP)",
    description:
      "Portfolio website for arts and culture organisation. ",
    technologies: ["React", "Framer Motion", "UI/UX"],
    github: "https://github.com/VladimirDima/galleri-anti-framer-react-website",
    demo: "https://galleri-anti-framer-react-website.vercel.app/",
    image: require(".//../../public/projects/galleri-anti-mock.webp"),
    available: true,
    caseStudy: {
      client: "GalleriAnti",
      services: ["Brand Website", "Frontend Development", "Motion"],
      capability: "Culture & Portfolio Experiences",
      intro:
        "We are building a contemporary portfolio website for GalleriAnti that highlights artistic work through an expressive, motion-led browsing experience.",
      challenge:
        "The site needed to communicate artistic identity while remaining performant and easy for visitors to navigate across projects and exhibitions.",
      solution: [
        "We designed a visual direction that emphasizes artwork first, then layered in subtle motion to guide attention and support storytelling.",
        "The implementation uses React and Framer Motion with reusable UI patterns so new content can be added without redesigning core templates.",
      ],
      results: [
        "Established a distinct digital identity aligned with the brand",
        "Built a maintainable frontend for iterative project updates",
        "Improved storytelling through focused interaction and layout",
      ],
    },
  },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
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
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
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
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
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
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
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
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
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

export const allProjects: ProjectProps[] = [...devProjects, ...designProjects];

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);
