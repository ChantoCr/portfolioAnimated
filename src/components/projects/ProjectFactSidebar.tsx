import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/types/project";

type ProjectFactSidebarProps = {
  project: Project;
};

export function ProjectFactSidebar({ project }: ProjectFactSidebarProps) {
  const enabledLinks = project.links.filter((link) => link.enabled !== false);

  return (
    <Reveal className="space-y-6 xl:sticky xl:top-28">
      <SurfaceCard className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
            Project facts
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Status</p>
              <p className="mt-1 text-sm font-medium text-foreground">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Role</p>
              <p className="mt-1 text-sm leading-7 text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Period</p>
              <p className="mt-1 text-sm text-foreground">{project.period}</p>
            </div>
          </div>
        </div>
      </SurfaceCard>

      <SurfaceCard className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} className="border-white/[0.08] bg-black/20 text-foreground">
              {technology}
            </Badge>
          ))}
        </div>
      </SurfaceCard>

      {enabledLinks.length > 0 ? (
        <SurfaceCard className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
            Links
          </p>
          <div className="space-y-3">
            {enabledLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-colors hover:border-white/[0.16]"
              >
                <span>{link.label}</span>
                <ExternalLink className="size-4 text-accent" />
              </Link>
            ))}
          </div>
        </SurfaceCard>
      ) : null}
    </Reveal>
  );
}
