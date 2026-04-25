import Link from "next/link";
import { ArrowUpRight, FileText, Layers3, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteProfile } from "@/content/profile";

const nextSteps = [
  {
    title: "Professional profile wiring",
    description:
      "Direct email, CV, and platform links will be connected once approved profile data is added to the content layer.",
    icon: Mail,
  },
  {
    title: "Recruiter-ready narratives",
    description:
      "The structure already supports clearer employability messaging, proof summaries, and targeted portfolio modes.",
    icon: FileText,
  },
  {
    title: "Feature expansion",
    description:
      "Case studies, architecture deep dives, and the AI console can now build on top of the same design and content system.",
    icon: Layers3,
  },
] as const;

export function ContactPreview() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Conversion layer"
      title="Ready for professional context, contact wiring, and next-phase expansion"
      description="This release focuses on the frontend foundation. The next iterations will connect approved professional information, richer content, and deeper feature layers without changing the core structure."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <SurfaceCard className="space-y-6 bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-[rgba(249,115,22,0.05)]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
              Current note
            </p>
            <h3 className="font-display text-3xl font-semibold text-foreground">
              {siteProfile.name}
            </h3>
            <p className="text-base leading-7 text-muted">{siteProfile.contactNote}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#hero" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Back to hero
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
            <Link href="#projects" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Review the roadmap
            </Link>
          </div>
        </SurfaceCard>

        <div className="grid gap-4">
          {nextSteps.map((step) => {
            const Icon = step.icon;

            return (
              <SurfaceCard key={step.title} className="flex gap-4">
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-accentSecondary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </SurfaceCard>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
