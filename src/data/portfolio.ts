import {
  aboutContent,
  contactContent,
  heroActions,
  heroContent,
  navigation,
  opportunityContent,
  proofContent,
  projectsContent,
  siteConfig,
  socialLinks,
} from "@/data/site";
import { featuredProjects, otherProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const PORTFOLIO = {
  site: siteConfig,
  navigation,
  hero: heroContent,
  heroActions,
  about: aboutContent,
  projectsContent,
  featuredProjects,
  otherProjects,
  skillGroups,
  proof: proofContent,
  opportunity: opportunityContent,
  contact: contactContent,
  socialLinks,
} as const;
