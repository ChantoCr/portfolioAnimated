import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { projects } from "@/content/projects";

export function ProjectsPreview() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Proof of work"
      title="Structured project storytelling starts here"
      description="This first pass uses typed content previews so featured work can evolve into detailed case studies, project explainers, and recruiter-friendly summaries without rebuilding the UI."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <SurfaceCard key={project.id} className="flex h-full flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
              <Badge className="text-accent">{project.status}</Badge>
            </div>

            <p className="text-sm leading-7 text-muted">{project.summary}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology} className="border-white/[0.08] bg-white/[0.03] text-foreground">
                  {technology}
                </Badge>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 text-sm text-muted">
                  <ArrowUpRight className="mt-0.5 size-4 text-accent" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
