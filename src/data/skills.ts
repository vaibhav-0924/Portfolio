import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", usedIn: ["Notiq", "StackAudit"] },
      { name: "JavaScript", usedIn: ["NexaAPI", "VibePerfume"] },
      { name: "Python" },
      { name: "SQL", usedIn: ["Notiq", "StackAuth"] },
      { name: "Java" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", usedIn: ["NexaAPI", "VibePerfume"] },
      { name: "Next.js", usedIn: ["Notiq", "StackAudit", "Orbit"] },
      { name: "Vite", usedIn: ["VibePerfume"] },
      { name: "Tailwind CSS", usedIn: ["Notiq", "StackAudit"] },
      { name: "shadcn/ui", usedIn: ["Notiq"] },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", usedIn: ["NexaAPI", "VibePerfume"] },
      { name: "Express.js", usedIn: ["NexaAPI", "StackAuth", "VibePerfume"] },
      { name: "REST API Design", usedIn: ["NexaAPI", "StackAudit"] },
      { name: "Authentication", usedIn: ["Notiq", "NexaAPI", "StackAuth"] },
      { name: "RBAC", usedIn: ["NexaAPI", "Orbit"] },
    ],
  },
  {
    title: "Databases & ORMs",
    items: [
      { name: "MongoDB", usedIn: ["NexaAPI", "VibePerfume"] },
      { name: "PostgreSQL", usedIn: ["StackAuth"] },
      { name: "SQLite" },
      { name: "Supabase", usedIn: ["StackAudit", "Orbit"] },
      { name: "Prisma", usedIn: ["Notiq"] },
      { name: "Mongoose", usedIn: ["NexaAPI"] },
    ],
  },
  {
    title: "Security",
    items: [
      { name: "JWT", usedIn: ["NexaAPI", "StackAuth"] },
      { name: "NextAuth.js", usedIn: ["Notiq"] },
      { name: "bcrypt", usedIn: ["NexaAPI", "StackAuth"] },
      { name: "Zod", usedIn: ["Notiq", "StackAudit"] },
      { name: "helmet.js", usedIn: ["NexaAPI"] },
      { name: "express-validator", usedIn: ["NexaAPI"] },
    ],
  },
  {
    title: "AI Integration",
    items: [
      { name: "Google Gemini API", usedIn: ["Notiq"] },
      { name: "Anthropic Claude API", usedIn: ["StackAudit"] },
      { name: "OpenAI API", usedIn: ["StackAudit"] },
      { name: "Structured Output", usedIn: ["Notiq", "StackAudit"] },
    ],
  },
] as const;
