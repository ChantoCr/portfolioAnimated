import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { featuredProjects, projects } from "@/content/projects";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Projects | ${SITE_NAME}`,
  description:
    "Selected projects and case studies from Gabriel Soto's portfolio, focused on product thinking, architecture, UI/UX decisions, and engineering growth.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="space-y-12">
          <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
            <Reveal className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accentSecondary">
                Project library
              </p>
              <div className="space-y-4">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Case studies built to explain decisions, not just show screenshots
                </h1>
                <p className="max-w-4xl text-lg leading-8 text-muted sm:text-xl">
                  This library turns portfolio work into structured project stories with problem framing,
                  solution thinking, technical decisions, UI/UX rationale, and future improvements.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="space-y-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                Current focus
              </p>
              <p className="text-sm leading-7 text-muted">
                Only approved portfolio projects are shown here. Additional freelance work can be added
                later once publication details are confirmed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  Back to homepage
                </Link>
                <Link href="/#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  Contact Gabriel
                </Link>
              </div>
            </Reveal>
          </div>

          <section className="space-y-6">
            <Reveal>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                  Featured work
                </p>
                <h2 className="font-display text-3xl font-semibold text-foreground">Priority case studies</h2>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-6 lg:grid-cols-2" delayChildren={0.12}>
              {featuredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>

          <section className="space-y-6">
            <Reveal>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                  Full library
                </p>
                <h2 className="font-display text-3xl font-semibold text-foreground">All documented projects</h2>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-6 xl:grid-cols-3" delayChildren={0.12}>
              {projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
