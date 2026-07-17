import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer building AI-powered web products across interfaces, APIs, authentication, databases, and product engineering workflows.",
};

const BLUR_FADE_DELAY = 0.04;

const timeline = [
  {
    period: "2026",
    title: "Full-Stack Product Engineering",
    description:
      "Shipping end-to-end builds — AI-powered workspaces, audit platforms, and API-first backends — with authentication, RBAC, and database design.",
  },
  {
    period: "2025–2026",
    title: "Backend & API Depth",
    description:
      "Building production API patterns with Express.js, JWT auth, Swagger docs, role-based access control, and PostgreSQL/MongoDB data modeling.",
  },
  {
    period: "2024–2025",
    title: "Frontend & React Ecosystem",
    description:
      "Learning React, Next.js, TypeScript, and Tailwind through project-based builds. Developing component architecture and state management patterns.",
  },
] as const;

const values = [
  {
    title: "Ship with evidence",
    description:
      "Every project includes source code, documented architecture decisions, and traceable outcomes — not just screenshots.",
  },
  {
    title: "Own the full stack",
    description:
      "From database schema to polished UI, I build across every layer so features don't stall at handoff boundaries.",
  },
  {
    title: "Build for review",
    description:
      "Code is written to be read. Clean structure, clear naming, and documented tradeoffs make collaboration faster.",
  },
  {
    title: "Grow through feedback",
    description:
      "Continuous improvement through public code, code review, and measurable benchmarks. Every build teaches something.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col gap-20 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section id="about-hero" className="space-y-8 pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                About Me
              </div>
            </BlurFade>

            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              as="h1"
              className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl"
              yOffset={8}
              text="Building products that work end-to-end"
            />

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {PORTFOLIO.hero.summary}
              </p>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {PORTFOLIO.hero.stack}
              </p>
            </BlurFade>
          </div>

          {/* Profile card */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="glass gradient-border space-y-5 rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-500/25 via-emerald-400/15 to-green-500/10 blur-md animate-glow-pulse" />
                  <Avatar className="relative size-20 border-2 border-emerald-500/20 ring-2 ring-emerald-500/10 ring-offset-2 ring-offset-background">
                    <AvatarImage
                      alt={PORTFOLIO.site.name}
                      src={PORTFOLIO.site.avatarUrl}
                    />
                    <AvatarFallback>{PORTFOLIO.site.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {PORTFOLIO.site.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {PORTFOLIO.site.location}
                  </p>
                  <p className="text-xs text-primary/80">
                    {PORTFOLIO.site.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={PORTFOLIO.socialLinks.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5 text-xs font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <Icons.github className="size-3.5" />
                  GitHub
                </a>
                <a
                  href={PORTFOLIO.socialLinks.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5 text-xs font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <Icons.linkedin className="size-3.5" />
                  LinkedIn
                </a>
                <a
                  href={PORTFOLIO.socialLinks.email.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5 text-xs font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <Icons.email className="size-3.5" />
                  Email
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Focus
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {PORTFOLIO.about.focusTitle}
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
              <p className="text-base leading-8 text-foreground/90">
                {PORTFOLIO.about.focusDescription}
              </p>
            </div>
          </BlurFade>
          <div className="space-y-4">
            {PORTFOLIO.about.paragraphs.map((paragraph, index) => (
              <BlurFade
                key={paragraph}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                inView
              >
                <div className="glass rounded-[2rem] border border-border/50 p-6">
                  <p className="text-base leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How I got here
            </h2>
          </div>
        </BlurFade>

        <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-2rem)] before:w-[1px] before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent">
          {timeline.map((entry, index) => (
            <BlurFade
              key={entry.period}
              delay={BLUR_FADE_DELAY * 10 + index * 0.08}
              inView
            >
              <div className="group relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1.5 flex size-6 items-center justify-center">
                  <div className="size-2.5 rounded-full bg-primary/60 ring-4 ring-background transition-all group-hover:bg-primary group-hover:ring-primary/10" />
                </div>

                <div className="glass rounded-[2rem] border border-border/50 p-6 transition-all hover:border-primary/20">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{entry.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Values */}
      <section id="values" className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Principles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How I work
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => (
            <BlurFade
              key={value.title}
              delay={BLUR_FADE_DELAY * 13 + index * 0.06}
              inView
            >
              <div className="glass interactive glow-on-hover h-full rounded-[2rem] border border-border/50 p-6">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Collaboration Fit */}
      <section id="collaboration">
        <BlurFade delay={BLUR_FADE_DELAY * 15} inView>
          <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {PORTFOLIO.opportunity.eyebrow}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {PORTFOLIO.opportunity.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO.opportunity.details.map((detail) => (
                  <Badge
                    key={detail}
                    variant="secondary"
                    className="rounded-full px-4 py-1.5 text-sm"
                  >
                    {detail}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* CTA */}
      <section id="about-cta">
        <BlurFade delay={BLUR_FADE_DELAY * 16} inView>
          <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-lg shadow-primary/5 sm:flex-row sm:justify-between">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-lg font-semibold">See the work in action</p>
              <p className="text-sm text-muted-foreground">
                Browse projects, check out my skills, or get in touch.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:shadow-primary/20"
              >
                View Projects
                <Icons.arrowRight className="size-3" />
              </Link>
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
              >
                View Skills
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
              >
                Contact
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
