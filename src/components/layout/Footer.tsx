import Link from "next/link";

import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/20">
      <div className="container py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSecondary">
              {SITE_NAME}
            </p>
            <p className="font-display text-2xl font-semibold text-foreground">
              Built as a portfolio operating system, not a template site.
            </p>
            <p className="text-sm leading-6 text-muted">
              This foundation prioritizes clean architecture, structured content, premium UI direction, and a future-ready path for AI interaction.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Explore</p>
            <div className="flex flex-wrap gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              Foundation phase · Next.js · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
