import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "SQL" },
      { name: "Dart" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "FastAPI" },
      { name: "tRPC" },
      { name: "Celery" },
    ],
  },
  {
    title: "Databases & ORMs",
    items: [
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
      { name: "Supabase" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Auth & Security",
    items: [
      { name: "JWT" },
      { name: "Role-Based Access Control (RBAC)" },
      { name: "bcrypt" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Cypress" },
      { name: "Swagger" },
      { name: "LangGraph" },
    ],
  },
] as const;
