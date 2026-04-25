import { PageShell } from "@/components/layout/PageShell";
import { AgentPreview } from "@/components/sections/AgentPreview";
import { ArchitecturePreview } from "@/components/sections/ArchitecturePreview";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfessionalTimelinePreview } from "@/components/sections/ProfessionalTimelinePreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <AgentPreview />
      <ProjectsPreview />
      <SkillsPreview />
      <ProfessionalTimelinePreview />
      <ArchitecturePreview />
      <ContactPreview />
    </PageShell>
  );
}
