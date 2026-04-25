import { PanelsTopLeft, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { CONSOLE_MODES, KNOWLEDGE_SOURCES } from "@/lib/constants";

const consoleLines = [
  "Open featured projects and technical decisions",
  "Review professional experience and strengths",
  "Surface architecture notes and case-study context",
  "Keep answers anchored to documented portfolio content",
] as const;

export function AgentPreview() {
  return (
    <SectionShell
      id="console"
      eyebrow="Interactive console"
      title="A guided console experience prepared for recruiters, developers, and clients"
      description="The public experience is being shaped as an interactive console that helps visitors navigate projects, architecture, and professional context without losing clarity or trust."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <TiltCard>
            <SurfaceCard className="space-y-6 overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-[rgba(249,115,22,0.20)] bg-[rgba(249,115,22,0.10)] p-3 text-accent">
                    <PanelsTopLeft className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                      Console modes
                    </p>
                    <p className="text-sm text-muted">
                      Different perspectives, same documented source of truth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="size-2.5 rounded-full bg-[rgba(249,115,22,0.80)] shadow-[0_0_14px_rgba(249,115,22,0.45)]" />
                  <span className="size-2.5 rounded-full bg-[rgba(129,140,248,0.80)] shadow-[0_0_14px_rgba(129,140,248,0.45)]" />
                  <span className="size-2.5 rounded-full bg-white/40" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {CONSOLE_MODES.map((mode) => (
                  <Badge key={mode}>{mode}</Badge>
                ))}
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-4">
                <StaggerGroup className="space-y-3" delayChildren={0.15}>
                  {consoleLines.map((line, index) => (
                    <StaggerItem key={line}>
                      <div className="flex items-center gap-3 text-sm text-muted">
                        <span className="font-mono text-xs text-accentSecondary">0{index + 1}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                        <span className="rounded-full bg-white/[0.06] px-3 py-1 text-foreground">
                          {line}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </SurfaceCard>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.12}>
          <SurfaceCard className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-[rgba(129,140,248,0.25)] bg-[rgba(129,140,248,0.10)] p-3 text-accentSecondary">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                  Knowledge boundary
                </p>
                <p className="text-sm text-muted">
                  Clear answers should come from documented portfolio content only.
                </p>
              </div>
            </div>

            <StaggerGroup className="grid gap-3 sm:grid-cols-2" delayChildren={0.1} staggerChildren={0.08}>
              {KNOWLEDGE_SOURCES.map((source) => (
                <StaggerItem key={source}>
                  <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-colors hover:border-white/[0.16]">
                    {source}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="text-sm leading-7 text-muted">
              If a detail has not been documented yet, the experience should say that clearly instead of inventing one.
            </p>
          </SurfaceCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
