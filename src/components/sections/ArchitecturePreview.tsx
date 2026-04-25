import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { buildTimeline } from "@/content/timeline";
import { ARCHITECTURE_PILLARS } from "@/lib/constants";

export function ArchitecturePreview() {
  return (
    <SectionShell
      id="architecture"
      eyebrow="Technical depth"
      title="Architecture choices designed for long-term product growth"
      description="The current build keeps complexity low while establishing the boundaries needed for case studies, AI retrieval, section reuse, and future product modes."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              Core pillars
            </p>
            <p className="text-sm leading-7 text-muted">
              The frontend foundation favors separation of concerns, typed content, and reusable section composition over one-off homepage code.
            </p>
          </div>

          <div className="grid gap-4">
            {ARCHITECTURE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              Build roadmap
            </p>
            <p className="text-sm leading-7 text-muted">
              The initial application shell is intentionally aligned with the phases defined in `AGENTS.md`.
            </p>
          </div>

          <ol className="space-y-4">
            {buildTimeline.map((item, index) => (
              <li key={item.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex size-9 items-center justify-center rounded-full border border-[rgba(249,115,22,0.20)] bg-[rgba(249,115,22,0.10)] text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  {index < buildTimeline.length - 1 ? (
                    <span className="mt-2 h-full w-px bg-white/10" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="space-y-1 pb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
                    {item.phase}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
