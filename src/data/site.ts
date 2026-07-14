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
  role: "Full-Stack Developer | Product Engineering Intern Candidate",
  metaDescription:
    "Vaibhav Saini builds full-stack AI and web products across interfaces, APIs, authentication, databases, and product-focused engineering workflows.",
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
    href: "https://github.com/vaibhav-0924",
  },
  resume: {
    label: "Resume",
    href: siteConfig.resumeUrl,
  },
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Proof", href: "#proof" },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    download: true,
  },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  availabilityLabel: "PRODUCT ENGINEERING: AUTH, APIS, DATABASES, AI",
  title: siteConfig.name,
  subtitle: "Full-stack AI and web products — from UI to database",
  stack: "Next.js | TypeScript | React | Node.js | REST APIs | Databases",
  summary:
    "Product ideas turned into working software across interface, API, data, and AI layers. Each project here documents its architecture decisions, tradeoffs, and source code so the work speaks for itself.",
} as const;

export const heroActions: readonly ActionLink[] = [
  { label: "View Projects", href: "#projects", variant: "default" },
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
    "Connecting product intent with implementation details: clear user flows, secure access, maintainable APIs, practical data models, and AI-assisted behavior.",
  paragraphs: [
    "Each project here is built with Next.js, TypeScript, Node.js, databases, authentication, and AI API integrations — with documented decisions behind every technical choice.",
    "The work demonstrates how data is modeled, routes are protected, APIs are shaped, fallbacks are handled, and features are made understandable to both users and engineers.",
  ],
} as const;

export const projectsContent = {
  eyebrow: "Selected Work",
  title: "Product-minded engineering, shown in code",
  description:
    "A focused set of builds covering AI workflows, backend/API depth, authentication, data modeling, and user-facing product behavior.",
} as const;

export const proofContent: {
  eyebrow: string;
  title: string;
  details: readonly ProofDetail[];
} = {
  eyebrow: "Evaluation",
  title: "How the work is structured for review",
  details: [
    {
      text: "Usable demos that let teams inspect behavior, not just screenshots",
      href: "https://github.com/vaibhav-0924/Notiq",
    },
    {
      text: "Documented architecture decisions across auth, APIs, schemas, and AI workflows",
      href: "https://github.com/vaibhav-0924/NexaAPI",
    },
    {
      text: "Continuous improvement through public code, measurable benchmarks, and code review",
      href: "https://github.com/vaibhav-0924",
    },
  ],
} as const;

export const opportunityContent = {
  eyebrow: "Collaboration Fit",
  title: "Areas of immediate contribution",
  details: [
    "Feature implementation across UI, API, and data layers",
    "Backend-heavy product workflows",
    "Authentication, authorization, and documentation",
    "AI-assisted product features",
  ],
} as const;

export const contactContent = {
  title: "Get in Touch",
  description:
    "Looking for a developer who can take on scoped full-stack work, communicate tradeoffs clearly, and grow through code review? Let's talk.",
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
    {
      label: "Resume",
      href: socialLinks.resume.href,
      variant: "outline",
      external: true,
    },
  ],
} as const;
