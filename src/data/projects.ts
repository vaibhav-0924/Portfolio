import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "Notiq",
    tagline: "AI-Powered Notes Workspace",
    year: "2026",
    description:
      "An AI-powered notes workspace featuring authenticated product workflows, user-owned data, public sharing, analytics, and AI-assisted editing.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Gemini API", "NextAuth"],
    outcomes: [
      "Delivered a Markdown notes workspace with live preview, autosave, public sharing, tag filters, search, and dashboard analytics.",
      "Engineered 3 Gemini-powered endpoints for summaries, action items, and title suggestions with traceable per-user usage logging.",
      "Implemented credential authentication, protected routes, and user-scoped data isolation across 10+ API routes.",
      "Designed normalized note, tag, sharing, and AI usage schemas with Prisma migrations and many-to-many relationships.",
    ],
    image: `${BASE_PATH}/projects/notiq.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/Notiq" },
      { label: "Demo", kind: "demo" },
    ],
  },
  {
    name: "StackAudit",
    tagline: "AI Spend Audit Platform",
    year: "2026",
    description:
      "An audit tool that turns AI tool inventories into traceable optimization recommendations, combining deterministic rules with resilient LLM-generated summaries.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Claude API", "OpenAI API"],
    outcomes: [
      "Built a rules-based audit engine that generates 12-15 optimization recommendations from AI tool inventories.",
      "Designed a fallback LLM summary pipeline using Claude, OpenAI, and template-based generation for resilient output.",
      "Implemented Supabase-backed persistence, public report URLs, OpenGraph previews, and lead capture via REST endpoints.",
      "Added honeypot spam prevention, request throttling, responsive UI, and SEO metadata to support credible public-facing workflows.",
    ],
    image: `${BASE_PATH}/projects/stackaudit.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/StackAudit" },
      { label: "Demo", kind: "demo" },
    ],
  },
  {
    name: "NexaAPI",
    tagline: "REST API Platform with Auth and RBAC",
    year: "2026",
    description:
      "A backend-focused platform covering API contract design, route protection, input validation, endpoint documentation, and frontend consumption.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Swagger"],
    outcomes: [
      "Developed versioned REST APIs with controller-service-model separation, global error handling, pagination, and task filtering.",
      "Implemented JWT authentication, password hashing, protected routes, and role-based access for user/admin workflows.",
      "Hardened APIs with Helmet, CORS allowlisting, request validation, rate limiting, and Swagger/OpenAPI documentation.",
      "Built a React frontend with auth context, protected routes, toast feedback, and Axios authorization interceptors.",
    ],
    image: `${BASE_PATH}/projects/nexaapi.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/NexaAPI" },
      { label: "Demo", kind: "demo" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    name: "Orbit",
    tagline: "Real-time collaboration and RBAC patterns",
    technologies: ["Next.js", "Supabase", "tRPC", "RBAC"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/Orbit" }],
  },
  {
    name: "VibePerfume",
    tagline: "Product browsing and commerce UI flows",
    technologies: ["React", "Express.js", "MongoDB", "Vite"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/VibePerfume" }],
  },
  {
    name: "StackAuth",
    tagline: "Auth-first API design with PostgreSQL",
    technologies: ["Express.js", "PostgreSQL", "JWT", "Docker"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/StackAuth" }],
  },
  {
    name: "CRM QA Automation",
    tagline: "Automated testing and API contract coverage",
    technologies: ["Cypress", "Postman", "Node.js", "CI/CD"],
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vaibhav-0924/CRM_QA_Automation" }],
  },
] as const;
