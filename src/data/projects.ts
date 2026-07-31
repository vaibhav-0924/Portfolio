import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "notiq",
    name: "Notiq",
    tagline: "AI-Powered Notes Workspace",
    year: "2026",
    description:
      "An AI-powered notes workspace featuring authenticated product workflows, user-owned data, public sharing, analytics, and AI-assisted editing.",
    longDescription:
      "Notiq is a full-stack AI-powered notes workspace built to demonstrate production-grade product engineering. It features a Markdown editor with live preview and autosave, user authentication with credential-based login, and a dashboard with analytics on note usage patterns. The AI layer integrates Google's Gemini API to provide summaries, extract action items, and suggest titles — all with traceable per-user usage logging. Notes support public sharing via unique URLs, tagging with many-to-many relationships, full-text search, and tag-based filtering. The data layer uses Prisma ORM with PostgreSQL, featuring normalized schemas for notes, tags, sharing tokens, and AI usage records.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Gemini API", "NextAuth"],
    outcomes: [
      "Delivered a Markdown notes workspace with live preview, autosave, public sharing, tag filters, search, and dashboard analytics.",
      "Engineered 3 Gemini-powered endpoints for summaries, action items, and title suggestions with traceable per-user usage logging.",
      "Implemented credential authentication, protected routes, and user-scoped data isolation across 10+ API routes.",
      "Designed normalized note, tag, sharing, and AI usage schemas with Prisma migrations and many-to-many relationships.",
    ],
    image: `${BASE_PATH}/projects/notiq.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Notiq" },
      { label: "Demo", kind: "demo", href: "https://notiq.vaibhavdev.online/dashboard" },
    ],
  },
  {
    slug: "stackaudit",
    name: "StackAudit",
    tagline: "AI Spend Audit Platform",
    year: "2026",
    description:
      "An audit tool that turns AI tool inventories into traceable optimization recommendations, combining deterministic rules with resilient LLM-generated summaries.",
    longDescription:
      "StackAudit is a full-stack audit platform that analyzes AI tool spending and generates optimization recommendations. Users submit their AI tool inventory through a structured form, and the system runs a deterministic rules engine that produces 12–15 actionable recommendations covering consolidation, cost reduction, and workflow improvements. The platform features a resilient LLM summary pipeline that cascades through Claude, OpenAI, and template-based generation to ensure output reliability. Reports are persisted in Supabase with public URL access, OpenGraph previews for social sharing, and lead capture endpoints. Security measures include honeypot spam prevention, request throttling, and SEO-optimized metadata.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Claude API", "OpenAI API"],
    outcomes: [
      "Built a rules-based audit engine that generates 12-15 optimization recommendations from AI tool inventories.",
      "Designed a fallback LLM summary pipeline using Claude, OpenAI, and template-based generation for resilient output.",
      "Implemented Supabase-backed persistence, public report URLs, OpenGraph previews, and lead capture via REST endpoints.",
      "Added honeypot spam prevention, request throttling, responsive UI, and SEO metadata to support credible public-facing workflows.",
    ],
    image: `${BASE_PATH}/projects/stackaudit.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAudit" },
      { label: "Demo", kind: "demo" },
    ],
  },
  {
    slug: "nexaapi",
    name: "NexaAPI",
    tagline: "REST API Platform with Auth and RBAC",
    year: "2026",
    description:
      "A backend-focused platform covering API contract design, route protection, input validation, endpoint documentation, and frontend consumption.",
    longDescription:
      "NexaAPI is a backend-focused project demonstrating production API patterns. The server layer implements versioned REST APIs with controller-service-model separation, global error handling, pagination, and task filtering. Authentication uses JWT with bcrypt password hashing, protected routes, and role-based access control for user and admin workflows. Security hardening includes Helmet, CORS allowlisting, request validation with express-validator, rate limiting, and auto-generated Swagger/OpenAPI documentation. The companion React frontend demonstrates auth context management, protected route guards, toast-based feedback, and Axios interceptors for automatic authorization header injection.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Swagger"],
    outcomes: [
      "Developed versioned REST APIs with controller-service-model separation, global error handling, pagination, and task filtering.",
      "Implemented JWT authentication, password hashing, protected routes, and role-based access for user/admin workflows.",
      "Hardened APIs with Helmet, CORS allowlisting, request validation, rate limiting, and Swagger/OpenAPI documentation.",
      "Built a React frontend with auth context, protected routes, toast feedback, and Axios authorization interceptors.",
    ],
    image: `${BASE_PATH}/projects/nexaapi.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NexaAPI" },
      { label: "Demo", kind: "demo" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    slug: "orbit",
    name: "Orbit",
    tagline: "Real-time collaboration and RBAC patterns",
    description:
      "A collaborative workspace app demonstrating real-time data synchronization, role-based access control, and team-based project management using Supabase and tRPC.",
    longDescription:
      "Orbit is a real-time collaboration platform built to explore patterns in team-based software. It features Supabase's real-time subscriptions for live data sync, tRPC for end-to-end type-safe API calls, and a granular RBAC system that controls access at the project and workspace level. The app supports team invitations, permission management, and activity tracking across collaborative workspaces.",
    technologies: ["Next.js", "Supabase", "tRPC", "RBAC"],
    image: `${BASE_PATH}/projects/orbit.png`,
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Orbit" }],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    tagline: "Product browsing and commerce UI flows",
    description:
      "A full-stack e-commerce prototype for a perfume brand, featuring product catalog browsing, cart management, and a polished storefront UI with Express.js backend.",
    longDescription:
      "VibePerfume is a product-focused e-commerce application built to demonstrate commerce UI patterns and full-stack data flow. The frontend uses React with Vite for a fast development experience, featuring product catalog pages, filtering, cart state management, and responsive storefront layouts. The backend runs on Express.js with MongoDB for product and order data, implementing RESTful endpoints for product CRUD, cart operations, and order processing.",
    technologies: ["React", "Express.js", "MongoDB", "Vite"],
    image: `${BASE_PATH}/projects/vibeperfume.png`,
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/VibePerfume" }],
  },
  {
    slug: "stackauth",
    name: "StackAuth",
    tagline: "Auth-first API design with PostgreSQL",
    description:
      "A backend authentication service demonstrating JWT-based auth flows, password hashing, session management, and PostgreSQL data modeling with Docker.",
    longDescription:
      "StackAuth is a focused backend project demonstrating authentication-first API design. It implements JWT-based authentication with refresh token rotation, bcrypt password hashing, and session management. The data layer uses PostgreSQL with structured migrations, and the entire stack runs in Docker containers for consistent development and deployment. The project serves as a reference implementation for secure auth patterns in Node.js applications.",
    technologies: ["Express.js", "PostgreSQL", "JWT", "Docker"],
    image: `${BASE_PATH}/projects/stackauth.png`,
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAuth" }],
  },
  {
    slug: "crm-qa-automation",
    name: "CRM QA Automation",
    tagline: "Automated testing and API contract coverage",
    description:
      "An automated testing suite for a CRM application covering E2E UI testing with Cypress, API contract validation with Postman, and CI/CD pipeline integration.",
    longDescription:
      "CRM QA Automation is a comprehensive testing project that demonstrates quality assurance patterns for a CRM application. It includes Cypress end-to-end tests covering user flows like lead creation, contact management, and pipeline stages. The API layer is validated with Postman collections that verify contract compliance, response schemas, and edge cases. The test suite integrates with CI/CD pipelines for automated regression testing on every push.",
    technologies: ["Cypress", "Postman", "Node.js", "CI/CD"],
    image: `${BASE_PATH}/projects/crm-qa.png`,
    links: [{ label: "GitHub", kind: "source", href: "https://github.com/vbhvx/CRM_QA_Automation" }],
  },
] as const;

/** Helper to get all projects as a flat array */
export const allProjects = [...featuredProjects, ...otherProjects];

/** Helper to find a project by slug */
export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug) ?? null;
}

/** Get all project slugs for static generation */
export function getAllProjectSlugs() {
  return allProjects.map((p) => p.slug);
}
