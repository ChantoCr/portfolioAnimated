import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { featuredProjects } from "@/content/projects";

export function ProjectsPreview() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Proof of work"
      title="Public repository-backed projects turned into structured case studies"
      description="The portfolio now combines reusable project routes with real GitHub and GitLab work, making it easier to review technical reasoning, product scope, and implementation quality instead of only seeing repository names."
    >
      <div className="space-y-8">
        <StaggerGroup className="grid gap-6 lg:grid-cols-2" delayChildren={0.12}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} featuredLayout />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.12}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Explore all case studies
            </Link>
            <Link href="/projects/loldraftengine" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Review LoLDraftEngine
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
