import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLUR_FADE_DELAY = 0.04;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const isFeatured = "outcomes" in project && Array.isArray((project as any).outcomes);
  const outcomes = isFeatured ? (project as any).outcomes as readonly string[] : [];
  const year = isFeatured ? (project as any).year as string : undefined;

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col gap-16 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <nav className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="font-medium text-foreground">{project.name}</span>
        </nav>
      </BlurFade>

      {/* Hero */}
      <section id="project-hero" className="space-y-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="flex flex-wrap items-center gap-3">
                {isFeatured && (
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Featured
                  </span>
                )}
                {year && (
                  <span className="inline-flex rounded-full border border-border/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                    {year}
                  </span>
                )}
              </div>
            </BlurFade>

            <BlurFadeText
              delay={BLUR_FADE_DELAY * 3}
              as="h1"
              className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl"
              yOffset={8}
              text={project.name}
            />

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-lg text-muted-foreground sm:text-xl">
                {project.tagline}
              </p>
            </BlurFade>
          </div>

          {/* Action links */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              {project.links?.map((link) => {
                if (!link.href) {
                  return (
                    <span
                      key={`${project.name}-${link.label}`}
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border/50 px-4 py-2 text-sm font-medium opacity-50"
                    >
                      {link.kind === "source" ? (
                        <Icons.github className="size-4" />
                      ) : (
                        <Icons.globe className="size-4" />
                      )}
                      {link.label}
                      <span className="text-[10px] text-muted-foreground">
                        (Coming soon)
                      </span>
                    </span>
                  );
                }

                return (
                  <a
                    key={`${project.name}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:shadow-primary/20 interactive"
                  >
                    {link.kind === "source" ? (
                      <Icons.github className="size-4" />
                    ) : (
                      <Icons.globe className="size-4" />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Project image */}
      {project.image && (
        <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
          <div className="glass gradient-border overflow-hidden rounded-[2rem]">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </BlurFade>
      )}

      {/* Description + Tech Stack */}
      <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
          <div className="glass rounded-[2rem] border border-border/50 p-6 sm:p-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Overview
            </h2>
            <p className="text-base leading-8 text-foreground/90">
              {project.longDescription || project.description}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <div className="glass rounded-[2rem] border border-border/50 p-6 sm:p-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full border-primary/20 bg-primary/5 px-3 py-1.5 text-xs hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Outcomes (featured projects only) */}
      {isFeatured && outcomes.length > 0 && (
        <section id="outcomes">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <div className="glass gradient-border rounded-[2rem] p-6 sm:p-8">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Key Outcomes
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.map((outcome, index) => (
                  <BlurFade
                    key={outcome}
                    delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                    inView
                  >
                    <div className="group flex items-start gap-3 rounded-2xl border border-border/30 bg-background/30 p-4 transition-all hover:border-primary/20 hover:bg-primary/5">
                      <div className="mt-1.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {outcome}
                      </p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </section>
      )}

      {/* Navigation */}
      <section id="project-nav">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-lg shadow-primary/5 sm:flex-row sm:justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
            >
              <Icons.arrowRight className="size-3 rotate-180" />
              All Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:shadow-primary/20"
            >
              Get in Touch
              <Icons.arrowRight className="size-3" />
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
