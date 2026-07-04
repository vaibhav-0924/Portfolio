export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export interface ActionLink extends NavigationItem {
  variant?: ButtonVariant;
}

export interface ProjectLink {
  label: string;
  kind: "source" | "demo";
  href?: string;
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  year: string;
  description: string;
  technologies: readonly string[];
  outcomes: readonly string[];
  image: string;
  links: readonly ProjectLink[];
}

export interface OtherProject {
  name: string;
  tagline?: string;
  technologies: readonly string[];
  links?: readonly ProjectLink[];
}

export interface SkillItem {
  name: string;
  usedIn?: readonly string[];
}

export interface ProofDetail {
  text: string;
  href?: string;
}

export interface SkillGroup {
  title: string;
  items: readonly SkillItem[];
}
