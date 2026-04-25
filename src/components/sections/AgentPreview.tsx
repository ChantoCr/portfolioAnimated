import { Bot, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { AGENT_MODES, KNOWLEDGE_SOURCES } from "@/lib/constants";

export function AgentPreview() {
  return (
    <SectionShell
      id="agent"
      eyebrow="AI interaction layer"
      title="A future AI console grounded in approved portfolio knowledge"
      description="The AI layer is intentionally not implemented yet. This foundation only prepares the structure, boundaries, and UI direction required for a trustworthy portfolio agent."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <SurfaceCard className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[rgba(249,115,22,0.20)] bg-[rgba(249,115,22,0.10)] p-3 text-accent">
              <Bot className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                Planned modes
              </p>
              <p className="text-sm text-muted">Audience-aware answers without changing the truth.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {AGENT_MODES.map((mode) => (
              <Badge key={mode}>{mode}</Badge>
            ))}
          </div>

          <p className="text-sm leading-7 text-muted">
            The console will eventually help recruiters, developers, and clients explore projects, technical decisions, and professional context through structured knowledge retrieval.
          </p>
        </SurfaceCard>

        <SurfaceCard className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[rgba(129,140,248,0.25)] bg-[rgba(129,140,248,0.10)] p-3 text-accentSecondary">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                Safety boundary
              </p>
              <p className="text-sm text-muted">No hallucinated claims, only approved sources.</p>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {KNOWLEDGE_SOURCES.map((source) => (
              <li
                key={source}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground"
              >
                {source}
              </li>
            ))}
          </ul>

          <p className="text-sm leading-7 text-muted">
            If data is missing, the future agent must say that the information has not been provided yet.
          </p>
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
