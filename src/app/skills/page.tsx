import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical depth across the full stack — languages, frontend, backend, databases, security, AI integration, and testing tools.",
};

const BLUR_FADE_DELAY = 0.04;

/** Compute total unique skills and projects for the stats section */
function getStats() {
  const allSkills = PORTFOLIO.skillGroups.flatMap((g) => g.items);
  const uniqueProjects = new Set(allSkills.flatMap((s) => s.usedIn ?? []));
  const withEvidence = allSkills.filter((s) => s.usedIn && s.usedIn.length > 0);

  return {
    totalSkills: allSkills.length,
    totalCategories: PORTFOLIO.skillGroups.length,
    projectsReferenced: uniqueProjects.size,
    withEvidence: withEvidence.length,
  };
}

export default function SkillsPage() {
  const stats = getStats();

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col gap-20 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section id="skills-hero" className="space-y-6 pt-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Technical Skills
          </div>
        </BlurFade>

        <BlurFadeText
          delay={BLUR_FADE_DELAY * 2}
          as="h1"
          className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl"
          yOffset={8}
          text="Technical depth across the stack"
        />

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Every skill listed here is backed by real project work. Hover over
            highlighted skills to see which projects they were used in. No
            padding — only tools I&apos;ve shipped with.
          </p>
        </BlurFade>
      </section>

      {/* Stats */}
      <section id="skills-stats">
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Skills", value: stats.totalSkills },
              { label: "Categories", value: stats.totalCategories },
              { label: "Projects Referenced", value: stats.projectsReferenced },
              { label: "With Project Evidence", value: stats.withEvidence },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-[1.5rem] border border-border/50 p-5 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Skill Groups */}
      <section id="skill-groups" className="space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              By Category
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Organized by domain
            </h2>
            <p className="text-muted-foreground">
              Skills highlighted with a subtle border are backed by specific
              project evidence. Hover to see where they were used.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PORTFOLIO.skillGroups.map((group, index) => (
            <BlurFade
              key={group.title}
              delay={BLUR_FADE_DELAY * 6 + index * 0.06}
              inView
            >
              <div className="glass interactive glow-on-hover h-full rounded-[2rem] border border-border/50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
                    {group.items.length}
                  </div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const hasEvidence =
                      skill.usedIn && skill.usedIn.length > 0;

                    const badge = (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className={`rounded-full px-3 py-1.5 text-xs transition-all ${
                          hasEvidence
                            ? "border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 cursor-help"
                            : "opacity-70"
                        }`}
                      >
                        {skill.name}
                      </Badge>
                    );

                    if (!hasEvidence) return badge;

                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>{badge}</TooltipTrigger>
                        <TooltipContent className="border-primary/20 bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-xl">
                          Used in:{" "}
                          <span className="font-medium text-foreground">
                            {skill.usedIn!.join(", ")}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Evidence section */}
      <section id="evidence">
        <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
          <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {PORTFOLIO.proof.eyebrow}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {PORTFOLIO.proof.title}
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                {PORTFOLIO.proof.details.map((detail, index) => {
                  const content = (
                    <div className="flex h-full items-start justify-between gap-4">
                      <span className="text-sm leading-6 text-muted-foreground">
                        {detail.text}
                      </span>
                      {detail.href && (
                        <Icons.arrowRight className="mt-1 size-4 shrink-0 text-primary opacity-70 transition-transform group-hover:translate-x-1" />
                      )}
                    </div>
                  );

                  const baseClass =
                    "group rounded-2xl border border-border/50 bg-background/30 p-4 transition-all hover:bg-primary/5 hover:border-primary/20";

                  if (detail.href) {
                    return (
                      <a
                        key={index}
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={baseClass}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={index} className={baseClass}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* CTA */}
      <section id="skills-cta">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-lg shadow-primary/5 sm:flex-row sm:justify-between">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-lg font-semibold">
                See these skills in action
              </p>
              <p className="text-sm text-muted-foreground">
                Browse real projects or get in touch to discuss how I can
                contribute.
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
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
