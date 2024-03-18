import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  sunutrans,
  triples,
  star17,
  rogstore,
  // carrent,
  ziva,
  kalkulator,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Operational Staff",
    company_name: "PT. Sukma Nusantara Transport",
    icon: sunutrans,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Performing daily operational tasks in accordance with company procedures and standards.",
      "Ensuring that all operational activities are carried out safely, efficiently, and in compliance with applicable regulations.",
      "Generating regular operational reports (daily, weekly, monthly).",
      "Managing operational documents and data, including inventory.",
      "Ensuring that operational equipment, machinery, or work devices function properly and are in a safe condition.",
    ],
  },
  {
    title: "Administrative Internship",
    company_name: "PT. Sentra Support Service",
    icon: triples,
    iconBg: "#E6DEDD",
    date: "2019 - 2019",
    points: [
      "Performs office clerical duties in support of an assigned department or division; receives and directs telephone calls and visitors; provides information on department or division services and operations.",
      "Maintains a variety of files and records in assigned department; files in accordance with established filing system.",
      "Operates a variety of office equipment including copiers, postage meters, facsimile machines, and computers; input and retrieve data and text; organizes and maintains disk storage and filing.",
      "Performs related duties and responsibilities as required.",
    ],
  },
  {
    title: "Admin Sales Onlineshop",
    company_name: "STAR17 Computer",
    icon: star17,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
      "Managing and overseeing sales on marketplaces and social media platforms (Shopee, Tokopedia).",
      "Achieving sales targets as set.",
      "Updating stock, prices, product information, promotional events, sales summaries, and online sales administration.",
      "Playing an active role in company improvement, such as contributing to content creation when needed and suggesting ideas.",
    ],
  },
  {
    title: "Computer Assembly Technician",
    company_name: "STAR17 Computer",
    icon: star17,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Select and order computer components according to customer requirements and budget.",
      "Receive and inspect ordered computer components.",
      "Install and connect all computer components,including motherboards, CPUs, RAM, HDD / SSD, Power Supply, and other hardware correctly.",
      "Install and configure the operating system and other software.",
      "Perform testing and troubleshooting to ensure the computer is functioning properly.",
      "Provide technical support to customers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "ROG Store",
    description:
      "Using MongoDB, Express.js, ReactJS, Node.js I finished to build an Online Shop Application - from start to finish.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: rogstore,
    source_code_link: "https://rog-shop.vercel.app/",
  },
  {
    name: "Ziva Shop",
    description:
      "Using Bootstrap 4 I learn how to build a Design Online Store Application - from start to finish.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: ziva,
    source_code_link: "https://alternative-coding.github.io/ziva-store-Demo",
  },
  {
    name: "Scientific Calculator",
    description:
      "Using Html, CSS & JavaScript I learn how to build a Calculator Application - from start to finish.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: kalkulator,
    source_code_link:
      "https://alternative-coding.github.io/kalkulator-ilmiah-sederhana/",
  },
];

export { services, technologies, experiences, projects };
// export { services, technologies, experiences, testimonials, projects };
