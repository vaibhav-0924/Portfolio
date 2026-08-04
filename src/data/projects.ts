import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "orbit",
    name: "Orbit",
    tagline: "Collaborative task manager",
    year: "2026",
    description:
      "A task manager with workspaces and Kanban boards. Built with Next.js, tRPC, and PostgreSQL. Used fractional indexing to handle drag-and-drop ordering and set up role-based access control.",
    longDescription:
      "This is a full-stack project management tool. I built it to learn how to handle state synchronization and access control. It features an organization-level workspace, Kanban boards, and user roles.",
    technologies: ["Next.js", "tRPC", "Drizzle ORM", "PostgreSQL", "Tailwind"],
    outcomes: [
      "Built a PostgreSQL database schema to support role-based access control (RBAC) across organizations.",
      "Added a Kanban board that uses fractional indexing to update task order without needing to rewrite multiple rows.",
      "Used tRPC to connect the Next.js frontend to the database with end-to-end type safety.",
    ],
    image: `${BASE_PATH}/projects/orbit.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Orbit" },
    ],
  },
  {
    slug: "nexus-cms",
    name: "Nexus CMS",
    tagline: "Complaint management system",
    year: "2026",
    description:
      "A tool that processes customer complaints using AI. It uses a FastAPI backend with background workers and a LangGraph pipeline to extract information and find duplicate reports.",
    longDescription:
      "This project automates the process of reading and categorizing customer complaints. It uses a FastAPI server and passes long-running AI tasks to Celery background workers. The AI pipeline extracts details and categorizes risk.",
    technologies: ["FastAPI", "Celery", "LangGraph", "PostgreSQL", "React"],
    outcomes: [
      "Set up a FastAPI backend with Celery and Redis to handle unstructured data processing in the background.",
      "Used LangGraph to coordinate multiple AI prompts that extract details and assess the risk of complaints.",
      "Stored historical complaints in PostgreSQL and used pgvector to find similar past issues.",
    ],
    image: `${BASE_PATH}/projects/nexus-cms.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Nexus-CMS" },
    ],
  },
  {
    slug: "growthtrack",
    name: "GrowthTrack",
    tagline: "Employee growth tracker",
    year: "2026",
    description:
      "A cross-platform mobile and web app. It uses a NestJS backend and a Flutter frontend to help managers track employee goals and promotion readiness.",
    longDescription:
      "GrowthTrack is a tool for tracking employee progress. It provides different views for employees and managers. The frontend is built with Flutter, and the API is built with NestJS and Prisma.",
    technologies: ["Flutter", "NestJS", "Prisma", "PostgreSQL", "JWT"],
    outcomes: [
      "Built a cross-platform frontend using Flutter that works on both web and mobile.",
      "Set up a REST API using NestJS, organizing the code into modules, controllers, and services.",
      "Created a relational database schema using Prisma to link employees, managers, and goals.",
    ],
    image: `${BASE_PATH}/projects/learningdashboard.png`,
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/GrowthTrack" }],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    slug: "notiq",
    name: "Notiq",
    tagline: "Notes app with AI features",
    description:
      "A personal notes app with Markdown editing and public sharing. Added Gemini to summarize notes and extract action items.",
    longDescription:
      "This is a note-taking app built with Next.js. It features a Markdown editor, autosave, and shareable links. I integrated the Gemini API for text summaries and used Prisma with PostgreSQL for data storage.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini API"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Notiq" },
      { label: "Demo", kind: "demo", href: "https://notiq.vaibhavdev.online/dashboard" },
    ],
  },
  {
    slug: "buildra",
    name: "Buildra",
    tagline: "App scaffolding experiment",
    description:
      "An experiment with generating app templates using AI, running background tasks via Inngest, and executing code in sandboxes.",
    longDescription:
      "This project tests how to generate Next.js components using AI. I used Inngest to manage the background steps and E2B sandboxes to run the generated code safely.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Inngest", "E2B"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Buildra" },
    ],
  },
  {
    slug: "stackaudit",
    name: "StackAudit",
    tagline: "Software spend audit tool",
    description:
      "A small app that takes a list of AI tools and generates recommendations using a simple rules engine.",
    longDescription:
      "This is a straightforward Next.js app. The user selects the tools they use, and the backend applies a set of rules to suggest pricing optimizations.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Claude API"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAudit" },
    ],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    tagline: "E-commerce storefront",
    description:
      "A storefront featuring product filtering, a photo gallery, and user reviews.",
    longDescription:
      "VibePerfume is built with the MERN stack (MongoDB, Express, React, Node.js). It includes category filtering and an interactive review system.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
    ],
  },
  {
    slug: "nexaapi",
    name: "NexaAPI",
    tagline: "REST API with JWT auth",
    description:
      "A backend API project used to practice creating versioned REST endpoints, authentication, and Swagger documentation.",
    longDescription:
      "NexaAPI is an Express.js backend project. It implements JWT authentication, password hashing, and role-based access control, with API endpoints documented via Swagger.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Swagger"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NexaAPI" },
    ],
  },
  {
    slug: "stackauth",
    name: "StackAuth",
    tagline: "Auth API with PostgreSQL",
    description:
      "A backend authentication service that implements JWT login and basic role-based access control.",
    longDescription:
      "StackAuth is an Express.js and PostgreSQL backend. It focuses on authentication patterns, including password hashing, JWTs, and database roles.",
    technologies: ["Express.js", "PostgreSQL", "JWT", "Swagger"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAuth" }],
  },
  {
    slug: "crm-qa-automation",
    name: "CRM QA Automation",
    tagline: "Automated testing suite",
    description:
      "A set of tests for a CRM app using Cypress for UI flows and Postman for API checks.",
    longDescription:
      "This project contains Cypress end-to-end tests and Postman API collections, connected to a GitHub Actions workflow to run the tests automatically.",
    technologies: ["Cypress", "Postman", "GitHub Actions"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/CRM_QA_Automation" }],
  },
  {
    slug: "next-gen-learning-dashboard",
    name: "Learning Dashboard",
    tagline: "Progress dashboard",
    description:
      "A Next.js dashboard that displays user progress and statistics using data from Supabase.",
    longDescription:
      "This project is a React dashboard that shows course progress. It fetches data from Supabase and uses Next.js Server Components.",
    technologies: ["Next.js", "Supabase"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NextGen-Learning-Dashboard" }],
  },
] as const;

export const allProjects = [...featuredProjects, ...otherProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return allProjects.map((p) => p.slug);
}
