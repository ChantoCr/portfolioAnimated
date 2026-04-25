import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { contactInfo, languageSkills, siteProfile } from "@/content/profile";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <Reveal>
            <Badge className="border-[rgba(249,115,22,0.25)] bg-[rgba(249,115,22,0.10)] text-accent">
              Developer portfolio · cinematic motion system
            </Badge>
          </Reveal>

          <Reveal delay={0.06} className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accentSecondary">
                {siteProfile.name} · {siteProfile.role}
              </p>
              <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {siteProfile.headline}
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {siteProfile.recruiterSummary}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className={buttonVariants({ variant: "primary", size: "lg" })}>
                View case studies
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="/#timeline" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Review professional timeline
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" delayChildren={0.2}>
            {siteProfile.proofHighlights.map((highlight) => (
              <StaggerItem key={highlight}>
                <TiltCard maxTilt={7} glare={false}>
                  <SurfaceCard className="border-white/[0.08] bg-white/[0.03] p-4 transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-sm font-medium leading-6 text-foreground">{highlight}</p>
                  </SurfaceCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.16}>
          <TiltCard maxTilt={9}>
            <SurfaceCard className="overflow-hidden border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-0">
              <div className="border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Sparkles className="size-4 text-accent" />
                  Professional snapshot
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-accentSecondary">
                    <MapPin className="size-4" />
                    Based in
                  </div>
                  <p className="text-base leading-7 text-foreground">{contactInfo.locationLabel}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.16em] text-accentSecondary">
                    Positioning
                  </p>
                  <p className="text-base leading-7 text-foreground">{siteProfile.positioning}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.16em] text-accentSecondary">
                    Languages
                  </p>
                  <StaggerGroup className="space-y-3" delayChildren={0.2} staggerChildren={0.08}>
                    {languageSkills.map((language) => (
                      <StaggerItem key={language.name}>
                        <div className="flex items-start gap-3 text-sm leading-6 text-muted">
                          <span className="mt-2 size-1.5 rounded-full bg-accent" />
                          <span>
                            <span className="font-medium text-foreground">{language.name}:</span>{" "}
                            {language.proficiency}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-accentSecondary">
                    Current focus
                  </p>
                  <StaggerGroup className="mt-3 space-y-2" delayChildren={0.24} staggerChildren={0.08}>
                    {siteProfile.currentFocus.slice(0, 3).map((item) => (
                      <StaggerItem key={item}>
                        <div className="flex items-start gap-3 text-sm leading-6 text-muted">
                          <span className="mt-2 size-1.5 rounded-full bg-accentSecondary" />
                          <span>{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </div>
            </SurfaceCard>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
