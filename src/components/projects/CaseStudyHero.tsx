import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
        <div className="space-y-8">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to projects
            </Link>
          </Reveal>

          <Reveal delay={0.04} className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-white/[0.08] bg-white/[0.04] text-foreground">
                {project.category}
              </Badge>
              <Badge className="text-accent">{project.status}</Badge>
              <Badge className="border-white/[0.08] bg-black/20 text-foreground">{project.period}</Badge>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-4xl text-lg leading-8 text-muted sm:text-xl">{project.headline}</p>
            </div>

            <p className="max-w-4xl text-base leading-8 text-muted">{project.recruiterSummary}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Contact Gabriel
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="/projects" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                View all case studies
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <SurfaceCard className="space-y-6 overflow-hidden">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                Project snapshot
              </p>
              <p className="text-base leading-7 text-foreground">{project.summary}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                Role
              </p>
              <p className="text-sm leading-7 text-muted">{project.role}</p>
            </div>

            <StaggerGroup className="flex flex-wrap gap-2" delayChildren={0.12} staggerChildren={0.05}>
              {project.tags.map((tag) => (
                <StaggerItem key={tag}>
                  <span
                    className={cn(
                      "inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground",
                    )}
                  >
                    {tag}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </SurfaceCard>
        </Reveal>
      </div>
    </section>
  );
}
