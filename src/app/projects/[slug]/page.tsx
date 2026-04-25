import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyHero } from "@/components/projects/CaseStudyHero";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { ProjectFactSidebar } from "@/components/projects/ProjectFactSidebar";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { getProjectBySlug, projects } from "@/content/projects";
import { SITE_NAME } from "@/lib/constants";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: `Project not found | ${SITE_NAME}`,
    };
  }

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.recruiterSummary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <CaseStudyHero project={project} />

      <section className="pb-20 sm:pb-24">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div className="space-y-8">
            <CaseStudySection title="Problem" eyebrow="Context">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.problem.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>

            <CaseStudySection title="Solution" eyebrow="Approach">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.solution.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>

            <CaseStudySection title="Technical decisions" eyebrow="Engineering">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.technicalDecisions.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>

            <CaseStudySection title="UI/UX decisions" eyebrow="Experience design">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.uiuxDecisions.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>

            <CaseStudySection title="Results" eyebrow="Impact">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.results.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>

            <CaseStudySection title="Future improvements" eyebrow="Next steps">
              <StaggerGroup className="space-y-4" delayChildren={0.08} staggerChildren={0.06}>
                {project.futureImprovements.map((item) => (
                  <StaggerItem key={item}>
                    <p className="text-sm leading-8 text-muted">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </CaseStudySection>
          </div>

          <ProjectFactSidebar project={project} />
        </div>
      </section>
    </PageShell>
  );
}
