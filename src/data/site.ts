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
  role: "B.Tech CS — Personal web projects",
  metaDescription:
    "Vaibhav Saini builds personal projects covering frontends, APIs, authentication, databases, and AI integrations.",
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
  availabilityLabel: "FULL-STACK ENGINEER",
  title: "Vaibhav Saini",
  subtitle: "Full-Stack Dev · Build What Matters",
  stack: "Next.js | FastAPI | NestJS | PostgreSQL",
  summary:
    "I build full-stack web applications. I focus on database design, API development, and connecting frontends to reliable backends.",
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
    "Building web applications with a focus on data modeling and APIs.",
  paragraphs: [
    "I am a software engineer who works across the stack. Most of my recent work involves Next.js, Node.js, Python, and PostgreSQL.",
    "I focus on understanding how data is structured and how APIs are designed. In my projects, I try to solve practical problems like managing access control, handling background tasks, and integrating AI models into existing workflows.",
  ],
} as const;

export const projectsContent = {
  eyebrow: "Selected Work",
  title: "Projects, shown in code",
  description:
    "A set of personal projects that cover frontends, APIs, authentication, RBAC, data modeling, and AI integrations.",
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
      text: "Live demos that let you try the actual apps, not just screenshots",
      href: "https://github.com/vbhvx/Notiq",
    },
    {
      text: "Public source code with READMEs covering auth, APIs, schemas, and AI integrations",
      href: "https://github.com/vbhvx/NexaAPI",
    },
    {
      text: "Continuous improvement through public code and iterative development",
      href: "https://github.com/vbhvx",
    },
  ],
} as const;

export const opportunityContent = {
  eyebrow: "Interests",
  title: "Areas I'm excited to work on",
  details: [
    "Frontend and API work with React, Next.js, and Node.js",
    "Authentication, RBAC, and access control",
    "Database design and API structure",
    "AI API integrations and simple agent workflows",
  ],
} as const;

export const contactContent = {
  title: "Get in Touch",
  description:
    "I'm looking for junior software engineering roles where I can contribute to real products and keep learning. Let's connect.",
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