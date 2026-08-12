import type {
  ActionLink,
  NavigationItem,
  ProofDetail,
} from "@/data/types";

export const BASE_PATH = "";

export const siteConfig = {
  name: "Vaibhav Saini",
  initials: "VS",
  url: "https://vaibhavdev.online/",
  location: "Delhi, India",
  email: "vaibhavsaini2409@gmail.com",
  avatarUrl: `${BASE_PATH}/profile/profile.jpeg`,
  resumeUrl: `${BASE_PATH}/documents/resume.pdf`,
  role: "Full-Stack Developer · AI, SaaS & Web Engineering",
  metaDescription:
    "Vaibhav Saini — Full-Stack Developer creating scalable digital products with TypeScript, Python, and Flutter. Featuring AI applications, multi-tenant platforms, and SaaS solutions.",
} as const;

export const socialLinks = {
  email: {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vaibhavsaini2/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/vbhvx",
  },
  x: {
    label: "X",
    href: "https://x.com/vbhvdev",
  },
  resume: {
    label: "Resume",
    href: siteConfig.resumeUrl,
  },
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Proof", href: "/#proof" },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    download: true,
  },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroContent = {
  availabilityLabel: "Ready to Build",
  title: "Vaibhav Saini",
  subtitle: "Full-Stack Developer · AI, SaaS & Web Engineering",
  stack: "TypeScript · Python · Next.js · FastAPI · PostgreSQL",
  summary:
    "Creating scalable digital products — from AI-powered platforms and multi-tenant systems to SaaS tools and developer utilities.",
} as const;

export const heroActions: readonly ActionLink[] = [
  { label: "View Projects", href: "/projects", variant: "default" },
  {
    label: "View Resume",
    href: siteConfig.resumeUrl,
    variant: "outline",
    external: true,
    download: true,
  },
  {
    label: "GitHub",
    href: socialLinks.github.href,
    variant: "outline",
    external: true,
  },
] as const;

export const aboutContent = {
  title: "About",
  focusTitle: "Focus areas",
  focusDescription:
    "Scalable web applications, AI integrations, and developer tooling.",
  paragraphs: [
    "I design and build full-stack applications across TypeScript, Python, and Flutter — focusing on clean architecture, reliable APIs, and thoughtful data modeling.",
    "Recent work includes an AI code generation platform, a multi-tenant collaborative workspace, and a SaaS cost optimization tool. Each project is built with authenticated workflows, structured data, and documented engineering decisions.",
  ],
} as const;

export const projectsContent = {
  title: "Projects",
  description:
    "A collection of full-stack applications spanning AI, SaaS, and web engineering.",
} as const;

export const proofContent: {
  title: string;
  details: readonly ProofDetail[];
} = {
  title: "How I work",
  details: [
    {
      text: "Architecture blueprints documenting design decisions and trade-offs",
      href: "https://github.com/vbhvx/Buildra",
    },
    {
      text: "Public source code with detailed READMEs and API documentation",
      href: "https://github.com/vbhvx/Orbit",
    },
    {
      text: "Automated testing with Cypress, Postman, and CI/CD pipelines",
      href: "https://github.com/vbhvx/CRM_QA_Automation",
    },
  ],
} as const;

export const opportunityContent = {
  title: "What I work with",
  details: [
    "Full-stack development with React, Next.js, and Node.js",
    "AI integrations — agent loops, LLM pipelines, background processing",
    "Database design with PostgreSQL, Prisma, Drizzle, and raw SQL",
    "System architecture — multi-tenancy, RBAC, event-driven workflows",
  ],
} as const;

export const contactContent = {
  title: "Get in Touch",
  description:
    "Open to internship and full-time opportunities. Let's build something meaningful together.",
  actions: [
    {
      label: "Email",
      href: socialLinks.email.href,
      variant: "default",
      external: true,
    },
    {
      label: "LinkedIn",
      href: socialLinks.linkedin.href,
      variant: "outline",
      external: true,
    },
    {
      label: "GitHub",
      href: socialLinks.github.href,
      variant: "outline",
      external: true,
    },
  ],
} as const;