import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { skills } from "@/content/skills";

export function SkillsPreview() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capability map"
      title="A skill system focused on proof, growth, and practical delivery"
      description="Instead of listing technologies without context, this foundation organizes Gabriel's strengths around how he approaches product work, engineering systems, and design quality."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <SurfaceCard key={skill.id} className="flex h-full flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-foreground">{skill.title}</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                {skill.emphasis}
              </span>
            </div>
            <p className="text-sm leading-7 text-muted">{skill.summary}</p>
            <div className="flex flex-wrap gap-2">
              {skill.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
