import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteProfile } from "@/content/profile";
import { HERO_HIGHLIGHTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="space-y-8">
          <Badge className="border-[rgba(249,115,22,0.25)] bg-[rgba(249,115,22,0.10)] text-accent">
            AI-powered portfolio foundation
          </Badge>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accentSecondary">
                Gabriel Soto · {siteProfile.role}
              </p>
              <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {siteProfile.headline}
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {siteProfile.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Explore the foundation
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="#architecture"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Review the architecture
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {HERO_HIGHLIGHTS.map((highlight) => (
              <SurfaceCard key={highlight} className="border-white/[0.08] bg-white/[0.03] p-4">
                <p className="text-sm font-medium leading-6 text-foreground">{highlight}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <SurfaceCard className="overflow-hidden border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-0">
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3 text-sm text-muted">
              <Sparkles className="size-4 text-accent" />
              Build posture
            </div>
          </div>
          <div className="space-y-6 p-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.16em] text-accentSecondary">
                Positioning
              </p>
              <p className="text-base leading-7 text-foreground">
                {siteProfile.positioning}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.16em] text-accentSecondary">
                Current focus
              </p>
              <ul className="space-y-3">
                {siteProfile.currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 size-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn("rounded-lg border border-white/10 bg-black/20 p-4")}>
              <p className="text-xs uppercase tracking-[0.16em] text-accentSecondary">
                Product principle
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Every section is being built to increase trust, prove real work, and support future AI retrieval without rewriting the core system.
              </p>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}
