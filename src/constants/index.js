import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  styled_components,
  sass,
  webstudio,
  icecreamStore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "components",
    title: "Components",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "Sass",
    icon: sass,
  },
  {
    name: "Styled-components",
    icon: styled_components,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Web Studio",
    description:
      "WebStudio is a promo-site for a company. You can find sections of menu, advantages, team, contacts, clients, CTA, portfolio, etc. The site is adaptive for usage on any device and based on a semantic markup.",
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
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: webstudio,
    source_code_link: "https://github.com/yermachkov/web-studio",
    site_link: "https://yermachkov.github.io/web-studio/",
  },
  {
    name: "Icecream Store",
    description:
      "This is a landing-page for the Icecream Store. The site was made as team pet-project. It's adaptive, have animations and based on a semantic markup.",
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
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: icecreamStore,
    source_code_link: "https://github.com/yermachkov/icecream-store-landing",
    site_link: "https://yermachkov.github.io/icecream-store-landing/",
  },
  {
    name: "Filmoteka",
    description:
      "Filmoteka is a web-app for those who wants to find trending movies and create personal library with 'watched' and 'queu'. The site is a team pet-project after compliting JS course.",
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
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/yermachkov/filmoteka",
    site_link: "https://yermachkov.github.io/filmoteka/",
  },
];

export { technologies, projects };
