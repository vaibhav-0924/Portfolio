import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectLink } from "@/data/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  tagline: string;
  year: string;
  description: string;
  technologies: readonly string[];
  outcomes: readonly string[];
  image?: string;
  links?: readonly ProjectLink[];
  className?: string;
}

export function ProjectCard({
  name,
  tagline,
  year,
  description,
  technologies,
  outcomes,
  image,
  links,
  className,
}: Props) {
  const primaryHref = links?.find((item) => item.href)?.href;

  const imageContent = image && (
    <>
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="h-48 w-full overflow-hidden object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
        <p className="text-xs text-white/90 line-clamp-3">{description}</p>
      </div>
    </>
  );

  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-border/50 transition-all duration-500 ease-out glass interactive glow-on-hover hover:border-primary/30">
      {primaryHref ? (
        <Link
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("relative block cursor-pointer overflow-hidden", className)}
        >
          {imageContent}
        </Link>
      ) : (
        <div className={cn("relative overflow-hidden", className)}>
          {imageContent}
        </div>
      )}
      <CardHeader className="px-3 pt-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-xl font-semibold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{tagline}</p>
          </div>
          <time className="rounded-full border border-border/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            {year}
          </time>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3">
        {outcomes.length > 0 && (
          <ul className="mt-2 space-y-2.5 pl-1">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-xs leading-relaxed text-foreground/80">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        )}
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px] font-normal"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 pb-3 pt-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links.map((link) => {
              const icon = link.kind === "source" 
                ? <Icons.github className="size-3" /> 
                : <Icons.globe className="size-3" />;

              if (!link.href) {
                return (
                  <Badge
                    key={`${name}-${link.label}`}
                    variant="secondary"
                    className="flex cursor-not-allowed gap-2 px-2.5 py-1 text-[10px] opacity-70"
                  >
                    {icon}
                    {link.label}
                  </Badge>
                );
              }

              return (
                <Link
                  href={link.href}
                  key={`${name}-${link.label}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Badge className="flex gap-2 px-2.5 py-1 text-[10px] interactive hover:shadow-md hover:shadow-primary/10">
                    {icon}
                    {link.label}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
