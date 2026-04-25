import { BriefcaseBusiness, GraduationCap, Languages, Layers3 } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { educationEntries } from "@/content/education";
import { experienceEntries } from "@/content/experience";
import { languageSkills } from "@/content/profile";
import { qualificationGroups } from "@/content/qualifications";

export function ProfessionalTimelinePreview() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Professional timeline"
      title="Real experience across IT leadership, freelance development, and continuous learning"
      description="This section turns Gabriel's approved professional background into structured portfolio knowledge that recruiters, developers, and future portfolio experiences can use without relying on vague self-description."
    >
      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <StaggerGroup className="space-y-4" delayChildren={0.1}>
          {experienceEntries.map((entry) => (
            <StaggerItem key={entry.id}>
              <TiltCard maxTilt={6}>
                <SurfaceCard className="space-y-5 transition-colors hover:border-white/[0.16]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-accent">
                        <BriefcaseBusiness className="size-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                          {entry.period}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {entry.role}
                        </h3>
                        <p className="text-sm font-medium text-muted">{entry.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-muted">{entry.summary}</p>

                  <StaggerGroup className="space-y-3" delayChildren={0.08} staggerChildren={0.06}>
                    {entry.bullets.slice(0, 4).map((bullet) => (
                      <StaggerItem key={bullet}>
                        <div className="flex items-start gap-3 text-sm leading-7 text-muted">
                          <span className="mt-2 size-1.5 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </SurfaceCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="space-y-6">
          <Reveal delay={0.08}>
            <SurfaceCard className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-[rgba(129,140,248,0.25)] bg-[rgba(129,140,248,0.10)] p-3 text-accentSecondary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                    Education
                  </p>
                  <p className="text-sm text-muted">Formal study and continuous technical upskilling.</p>
                </div>
              </div>

              <StaggerGroup className="space-y-4" delayChildren={0.12} staggerChildren={0.08}>
                {educationEntries.map((entry) => (
                  <StaggerItem key={entry.id}>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.16]">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                        {entry.period}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                        {entry.title}
                      </h3>
                      <p className="text-sm font-medium text-muted">{entry.institution}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{entry.summary}</p>
                      {entry.focusAreas ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {entry.focusAreas.slice(0, 6).map((area) => (
                            <span
                              key={area}
                              className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-foreground"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.14}>
            <SurfaceCard className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-[rgba(249,115,22,0.20)] bg-[rgba(249,115,22,0.10)] p-3 text-accent">
                  <Languages className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                    Languages
                  </p>
                  <p className="text-sm text-muted">
                    Communication range for local and international opportunities.
                  </p>
                </div>
              </div>

              <StaggerGroup className="grid gap-4 sm:grid-cols-2" delayChildren={0.1} staggerChildren={0.08}>
                {languageSkills.map((language) => (
                  <StaggerItem key={language.name}>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.16]">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {language.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{language.proficiency}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.2}>
            <SurfaceCard className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-accentSecondary">
                  <Layers3 className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                    Qualification clusters
                  </p>
                  <p className="text-sm text-muted">
                    Breadth that can later power the Skill Intelligence Map and richer console experiences.
                  </p>
                </div>
              </div>

              <StaggerGroup className="space-y-4" delayChildren={0.12} staggerChildren={0.08}>
                {qualificationGroups.map((group) => (
                  <StaggerItem key={group.id}>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.16]">
                      <h3 className="font-display text-lg font-semibold text-foreground">{group.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.slice(0, 8).map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </SurfaceCard>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
