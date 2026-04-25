import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({ title, eyebrow, children, className }: CaseStudySectionProps) {
  return (
    <Reveal className={cn("space-y-5 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8", className)}>
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentSecondary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}
