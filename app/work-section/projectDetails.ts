export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Lendme",
    description:
      "Digital solution for comparing loan offers easily and quickly. Fill in a single application to receive loan offers from several banks.",
    technologies: ["Angular 8", "SCSS", "PHP", "UI/UX"],
    github: "",
    demo: "https://lendme.dk/",
    image: require(".//../../public/projects/Mockup-LendMe.webp"),
    available: true,
  },
  {
    id: 2,
    name: "IBG",
    description:
      "IBG is a digital solution for life management for people with disabilities. The solution consists of a large number of modules and functions for communication and planning in everyday life.",
    technologies: ["Vue", "GraphQL", "PHP"],
    github: "",
    demo: "https://www.evryone.io/",
    image: require(".//../../public/projects/IBG-mockup.webp"),
    available: true,
  },
  {
    id: 3,
    name: "EcoTree",
    description:
      "E-commerce webshop and a dashboard where you can track how the trees that you've bought impact the climate.",
    technologies: ["React", "UI/UX", "Twig", "Storybook"],
    github: "",
    demo: "https://ecotree.green/en/",
    image: require(".//../../public/projects/ecotree-mock.webp"),
    available: true,
  },
  {
    id: 4,
    name: "GalleriAnti (WIP)",
    description:
      "Portfolio website for arts and culture organisation. ",
    technologies: ["React", "Framer Motion", "UI/UX"],
    github: "https://github.com/VladimirDima/galleri-anti-framer-react-website",
    demo: "https://galleri-anti-framer-react-website.vercel.app/",
    image: require(".//../../public/projects/galleri-anti-mock.webp"),
    available: true,
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
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
