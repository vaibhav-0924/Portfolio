import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/features/project-card";
import { Carousel } from "@/components/features/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PORTFOLIO } from "@/data/portfolio";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

function renderActionLink({
  href,
  label,
  variant = "default",
  external,
  download,
  className,
}: {
  href: string;
  label: string;
  variant?: "default" | "outline";
  external?: boolean;
  download?: boolean;
  className?: string;
}) {
  if (external || href.startsWith("mailto:")) {
    return (
      <Button
        key={label}
        asChild
        variant={variant}
        className={className}
      >
        <a
          href={href}
          download={download ? "resume.pdf" : undefined}
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button key={label} asChild variant={variant} className={className}>
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col gap-16 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <section
        id="hero"
        className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start"
      >
        <div className="space-y-8">
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {PORTFOLIO.hero.availabilityLabel}
              </div>
            </BlurFade>
            <div className="space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                as="h1"
                className="text-4xl font-bold tracking-normal sm:text-6xl"
                yOffset={8}
                text={PORTFOLIO.hero.title}
              />
              <BlurFadeText
                className="max-w-3xl text-xl text-foreground/90 sm:text-2xl"
                delay={BLUR_FADE_DELAY}
                text={PORTFOLIO.hero.subtitle}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {PORTFOLIO.hero.stack}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {PORTFOLIO.hero.summary}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO.heroActions.map((action) =>
                  renderActionLink({
                    ...action,
                    variant: action.variant === "default" ? "default" : "outline",
                    className:
                      "rounded-full px-5 shadow-sm shadow-primary/10 hover:shadow-primary/20",
                  })
                )}
              </div>
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="glass gradient-border space-y-6 rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-md animate-glow-pulse" />
                <Avatar className="relative size-24 border-2 border-primary/30 ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
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
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Value snapshot
              </p>
              <div className="grid gap-3 text-sm text-foreground/90">
                <div className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Projects cover AI integrations, REST APIs, authentication, and database-backed features.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Source code shows authentication, input validation, rate limiting, and API documentation.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>All projects have public source code and live demos where possible.</span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>


      <section id="about" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About
            </h2>
          </div>
        </BlurFade>
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
            <div className="glass rounded-[2rem] border border-border/50 p-6">
              <h3 className="text-lg font-semibold">{PORTFOLIO.about.focusTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {PORTFOLIO.about.focusDescription}
              </p>
            </div>
          </BlurFade>
          <div className="space-y-4">
            {PORTFOLIO.about.paragraphs.map((paragraph, index) => (
              <BlurFade
                key={paragraph}
                delay={BLUR_FADE_DELAY * 9 + index * 0.05}
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

      <section id="projects" className="space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {PORTFOLIO.projectsContent.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              {PORTFOLIO.projectsContent.description}
            </p>
          </div>
        </BlurFade>
        <div className="mx-auto w-full max-w-2xl lg:max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
            <Carousel autoPlayInterval={3000}>
              {PORTFOLIO.featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  tagline={project.tagline}
                  year={project.year}
                  description={project.description}
                  technologies={project.technologies}
                  outcomes={project.outcomes}
                  image={project.image}
                  links={project.links}
                />
              ))}
            </Carousel>
          </BlurFade>
        </div>

        {PORTFOLIO.otherProjects && PORTFOLIO.otherProjects.length > 0 && (
          <div className="mt-16 border-t border-border/30 pt-10">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold">Other Projects</h3>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
              <Carousel autoPlayInterval={4000}>
                {PORTFOLIO.otherProjects.map((project, slideIndex) => (
                  <div key={slideIndex} className="h-full px-2 py-1">
                    <div className="glass flex h-full mx-auto max-w-md flex-col rounded-[1.5rem] border border-border/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                      <div className="mb-4 text-primary opacity-80 transition-transform duration-300 hover:scale-110">
                        <Icons.folder className="size-8" />
                      </div>
                      <h4 className="mb-1 font-semibold">{project.name}</h4>
                      {project.tagline && <p className="mb-2 text-sm text-muted-foreground">{project.tagline}</p>}
                      {project.description && <p className="mb-4 text-xs leading-relaxed text-foreground/70">{project.description}</p>}
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.technologies.map(tag => (
                          <Badge key={tag} className="rounded-full bg-secondary/50 px-2 py-0.5 text-[10px]" variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </BlurFade>
          </div>
        )}
      </section>

      <section id="skills" className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Technical depth across the stack
            </h2>
          </div>
        </BlurFade>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PORTFOLIO.skillGroups.map((group, index) => (
            <BlurFade
              key={group.title}
              delay={BLUR_FADE_DELAY * 13 + index * 0.05}
              inView
            >
              <div className="glass h-full rounded-[2rem] border border-border/50 p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const isInteractive = !!skill.usedIn;
                    const badge = (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className={`rounded-full px-3 py-1 text-xs transition-all duration-300 ${
                          isInteractive
                            ? "cursor-pointer border-primary/30 bg-primary/10 hover:scale-105 hover:bg-primary/20 hover:shadow-sm hover:shadow-primary/20"
                            : "opacity-80"
                        }`}
                      >
                        {skill.name}
                      </Badge>
                    );

                    if (!skill.usedIn) return badge;

                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>{badge}</TooltipTrigger>
                        <TooltipContent className="border-primary/20 bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-xl">
                          Used in: <span className="font-medium text-foreground">{skill.usedIn.join(", ")}</span>
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

      <section id="proof">
        <BlurFade delay={BLUR_FADE_DELAY * 14} inView>
          <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {PORTFOLIO.proof.title}
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                {PORTFOLIO.proof.details.map((detail, index) => {
                  const content = (
                    <div className="flex h-full items-start justify-between gap-4">
                      <span className="text-sm leading-6 text-muted-foreground">{detail.text}</span>
                      {detail.href && (
                        <Icons.arrowRight className="mt-1 size-4 shrink-0 text-primary opacity-70 transition-transform group-hover:translate-x-1" />
                      )}
                    </div>
                  );

                  const baseClass = "group rounded-2xl border border-border/50 bg-background/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5";

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

      <section id="opportunities">
        <BlurFade delay={BLUR_FADE_DELAY * 14} inView>
          <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
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

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15} inView>
          <div className="grid gap-6 rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-lg shadow-primary/5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {PORTFOLIO.contact.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {PORTFOLIO.contact.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              {PORTFOLIO.contact.actions.map((action) =>
                renderActionLink({
                  ...action,
                  variant: action.variant === "default" ? "default" : "outline",
                  className: "rounded-full px-5",
                })
              )}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
