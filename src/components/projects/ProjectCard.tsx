import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  featuredLayout?: boolean;
};

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <TiltCard maxTilt={8}>
      <SurfaceCard className="flex h-full flex-col gap-6 overflow-hidden transition-colors hover:border-white/[0.16]">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              {project.category}
            </p>
            <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
              {project.title}
            </h3>
            <p className="text-sm text-muted">{project.period}</p>
          </div>
          <Badge className="text-accent">{project.status}</Badge>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-muted">{project.summary}</p>

        <div className={featuredLayout ? "grid gap-5 md:grid-cols-[1.05fr_0.95fr]" : "space-y-5"}>
          <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              Stack and tooling
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology} className="border-white/[0.08] bg-black/20 text-foreground">
                  {technology}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              Outcome direction
            </p>
            <div className="space-y-3">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 text-sm text-muted">
                  <ArrowUpRight className="mt-0.5 size-4 text-accent" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View case study
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </SurfaceCard>
    </TiltCard>
  );
}
