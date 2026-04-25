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
      title="Structured project storytelling with room to grow into full case studies"
      description="The portfolio now has a dedicated case-study system and project routes, making it easier to turn selected work into deeper technical, visual, and recruiter-facing stories."
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
            <Link href="/projects/developer-portfolio-os" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Review flagship project
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
