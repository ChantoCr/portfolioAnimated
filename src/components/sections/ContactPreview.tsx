import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { contactInfo } from "@/content/profile";
import { personalInterests } from "@/content/qualifications";

const contactChannels = [
  {
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    title: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    icon: Phone,
  },
  {
    title: "Location",
    value: contactInfo.locationLabel,
    href: "#hero",
    icon: MapPin,
  },
] as const;

export function ContactPreview() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Conversion layer"
      title="Direct contact details and real professional context are now part of the portfolio foundation"
      description="This section uses approved contact and background information so future recruiter flows, project explainers, and interactive product layers can answer from real portfolio knowledge."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <TiltCard maxTilt={7}>
            <SurfaceCard className="space-y-6 bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-[rgba(249,115,22,0.05)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Sparkles className="size-4 text-accent" />
                  Contact foundation
                </div>
                <h3 className="font-display text-3xl font-semibold text-foreground">
                  Reach Gabriel directly
                </h3>
                <p className="text-base leading-7 text-muted">
                  The portfolio now includes approved email, phone, location context, education, experience, and qualifications so future sections can stay grounded in real information.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Email Gabriel
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Call Gabriel
                </a>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                  Privacy-aware note
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Full address data is preserved in the structured content layer, while the homepage currently surfaces a safer location label for public presentation.
                </p>
              </div>
            </SurfaceCard>
          </TiltCard>
        </Reveal>

        <StaggerGroup className="grid gap-4" delayChildren={0.12}>
          {contactChannels.map((channel) => {
            const Icon = channel.icon;

            return (
              <StaggerItem key={channel.title}>
                <a href={channel.href} className="block">
                  <TiltCard maxTilt={6} glare={false}>
                    <SurfaceCard className="flex h-full gap-4 transition-colors hover:border-white/[0.16]">
                      <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-accentSecondary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                          {channel.title}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                          {channel.value}
                        </h3>
                      </div>
                    </SurfaceCard>
                  </TiltCard>
                </a>
              </StaggerItem>
            );
          })}

          <StaggerItem>
            <SurfaceCard className="space-y-4 transition-colors hover:border-white/[0.16]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentSecondary">
                Personal interests
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInterests.slice(0, 8).map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </SurfaceCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
