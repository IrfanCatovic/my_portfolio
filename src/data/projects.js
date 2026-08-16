import planinerImg from "../assests/work12.png";
import amKeramikaImg from "../assests/am-keramik.jpeg";
import muftyImg from "../assests/work-8.JPG";
import pomirenjeImg from "../assests/pomirenje.PNG";
import shopImg from "../assests/work11.png";
import ramazanImg from "../assests/Artboard 1.jpg";
import worldwiseImg from "../assests/Work7.JPG";

export const primaryProjects = [
  {
    id: "planiner",
    tier: "primary",
    title: "Planiner",
    category: "Full-Stack Product · Founder Project",
    status: "Live Product",
    description:
      "A full-stack platform built from scratch for mountaineering clubs and hikers — covering club organization, member and event workflows, backend architecture, REST APIs, responsive frontend and deployment.",
    role: "Founder & Full Stack Developer",
    highlights: [
      "Product structure and user-flow planning",
      "Database design, REST APIs and authentication",
      "Club, member and event workflows",
      "Frontend implementation, deployment and ongoing improvements",
    ],
    technologies: [
      "Golang",
      "Gin",
      "GORM",
      "PostgreSQL",
      "React",
      "TypeScript",
      "JWT",
      "REST APIs",
      "Tailwind CSS",
      "VPS deployment",
    ],
    image: planinerImg,
    imageAlt: "Planiner platform interface showing mountaineering club management",
    liveUrl: "https://www.planiner.com",
    githubUrl: null,
    privateProject: false,
    coverStyle: null,
  },
  {
    id: "am-keramika",
    tier: "primary",
    title: "AM Keramika — Internal Business Operations Platform",
    category: "Internal Business System · Founder Project",
    status: "Private Client Project · In Development",
    description:
      "A private full-stack operations platform I founded and built for a ceramics and heating products company — centralizing inventory, invoicing, payments, customer debt tracking and daily financial reporting with role-based access.",
    role: "Founder & Full Stack Developer",
    highlights: [
      "Product, stock and inventory management",
      "Invoice creation, PDF generation and payment allocation",
      "Customer balances, refunds and financial reports",
      "Role-based access for owners, managers and workers",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Golang",
      "Gin",
      "PostgreSQL",
      "GORM",
      "REST APIs",
      "JWT",
      "Material UI",
      "PDF generation",
    ],
    image: amKeramikaImg,
    imageAlt: "AM Keramika internal operations platform dashboard",
    liveUrl: null,
    githubUrl: null,
    privateProject: true,
    coverStyle: null,
  },
];

export const supportingProjects = [
  {
    id: "mufty",
    tier: "supporting",
    title: "Mufty Foundation",
    category: "Team Project · Humanitarian Platform",
    status: "Live Product",
    description:
      "Production humanitarian platform built with a team at ILM Education Center — contributing React/TypeScript frontend, Golang API work, Redux Toolkit state and REST integration.",
    role: "Full Stack Developer",
    highlights: [
      "React and TypeScript components",
      "Golang API endpoints and Redux Toolkit",
      "Figma-to-code and REST API integration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Golang",
      "Redux Toolkit",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
    ],
    image: muftyImg,
    imageAlt: "Mufty Foundation humanitarian platform website",
    liveUrl: "https://www.muftyfoundation.com",
    githubUrl: null,
    privateProject: false,
    coverStyle: null,
  },
  {
    id: "pomirenje",
    tier: "supporting",
    title: "Pomirenje",
    category: "Team Project · Frontend Development",
    status: "Live Product",
    description:
      "Production public platform with a frontend-focused role — building responsive React/TypeScript interfaces, Redux Toolkit state and REST API integration.",
    role: "Frontend Developer",
    highlights: [
      "React and TypeScript UI development",
      "Redux Toolkit and REST API integration",
      "Responsive pages and predictable data flow",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Golang",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
    ],
    image: pomirenjeImg,
    imageAlt: "Pomirenje public platform website",
    liveUrl: "https://www.pomirenje.gov.rs/",
    githubUrl: null,
    privateProject: false,
    coverStyle: null,
  },
];

export const additionalProjects = [
  {
    id: "online-shop",
    title: "Online Shop",
    summary:
      "E-commerce application with product browsing, cart flows and API-driven product data.",
    technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Redux"],
    image: shopImg,
    imageAlt: "Online shop e-commerce application screenshot",
    liveUrl: "https://onlineshopts.netlify.app/",
  },
  {
    id: "ramazan-tracker",
    title: "Ramazan Tracker",
    summary:
      "Prayer-time and Ramadan tracking app for 110+ cities with React and Golang.",
    technologies: ["React", "Golang", "Tailwind CSS"],
    image: ramazanImg,
    imageAlt: "Ramazan Tracker application screenshot",
    liveUrl: "https://ramazan-tracker.vercel.app/",
  },
  {
    id: "worldwise",
    title: "WorldWise",
    summary:
      "Travel mapping app for logging visited places with React Router and Redux.",
    technologies: ["React", "Tailwind CSS", "React Router", "Redux"],
    image: worldwiseImg,
    imageAlt: "WorldWise travel map application screenshot",
    liveUrl: "https://worldwiseic.netlify.app/",
  },
];
