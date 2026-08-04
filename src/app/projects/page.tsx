import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects covering AI workflows, REST APIs, authentication, database design, and product engineering.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col gap-20 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="projects-hero" className="space-y-6 pt-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            All Projects
          </div>
        </BlurFade>
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 2}
          as="h1"
          className="text-4xl font-bold tracking-normal sm:text-6xl"
          yOffset={8}
          text="Built to ship, documented to last"
        />
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Each project covers the full stack — from database schemas and API
            routes to polished user interfaces. Click any project to see its
            details and source code.
          </p>
        </BlurFade>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Featured
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured projects
            </h2>
            <p className="text-muted-foreground">
              Full-stack projects with AI, auth, APIs, and data modeling.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-6">
          {PORTFOLIO.featuredProjects.map((project, index) => (
            <BlurFade
              key={project.slug}
              delay={BLUR_FADE_DELAY * 5 + index * 0.08}
              inView
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="glass interactive glow-on-hover overflow-hidden rounded-[2rem] border border-border/50 transition-all duration-500 hover:border-primary/30">
                  <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden lg:h-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 opacity-0 transition-opacity lg:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-4 p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                            {project.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {project.tagline}
                          </p>
                        </div>
                        <time className="shrink-0 rounded-full border border-border/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                          {project.year}
                        </time>
                      </div>

                      <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full px-2.5 py-0.5 text-[10px]"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-medium text-primary">
                        View project details
                        <Icons.arrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {PORTFOLIO.otherProjects && PORTFOLIO.otherProjects.length > 0 && (
        <section id="other-projects" className="space-y-10">
          <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
            <div className="space-y-2">
              <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                More Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Additional builds
              </h2>
              <p className="text-muted-foreground">
                Projects that show breadth across collaboration, commerce, auth,
                and testing workflows.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PORTFOLIO.otherProjects.map((project, index) => (
              <BlurFade
                key={project.slug}
                delay={BLUR_FADE_DELAY * 9 + index * 0.06}
                inView
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="glass interactive glow-on-hover flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/40 transition-all duration-500 hover:border-primary/30">
                    {/* Image thumbnail */}
                    {project.image && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="text-primary opacity-80 transition-transform group-hover:scale-110">
                          <Icons.folder className="size-7" />
                        </div>
                        <Icons.arrowRight className="mt-1 size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-70" />
                      </div>

                      <h3 className="mb-1 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {project.name}
                      </h3>
                      {project.tagline && (
                        <p className="mb-3 text-sm text-muted-foreground">
                          {project.tagline}
                        </p>
                      )}
                      {project.description && (
                        <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-foreground/70">
                          {project.description}
                        </p>
                      )}

                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.technologies.map((tag) => (
                          <Badge
                            key={tag}
                            className="rounded-full bg-secondary/50 px-2 py-0.5 text-[10px]"
                            variant="secondary"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Back to home CTA */}
      <section id="projects-cta">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <div className="flex items-center justify-center gap-4 rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-lg shadow-primary/5">
            <div className="text-center space-y-3">
              <p className="text-lg font-semibold">
                Interested in working together?
              </p>
              <p className="text-sm text-muted-foreground">
                View my full profile or get in touch directly.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-primary/20 hover:shadow-md"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2 text-sm font-medium transition-all hover:bg-primary/5 hover:border-primary/20"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
