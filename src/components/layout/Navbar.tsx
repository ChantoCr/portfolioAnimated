import Link from "next/link";

import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(9,9,11,0.7)] backdrop-blur-xl">
      <div className="container">
        <div className="flex min-h-16 items-center justify-between gap-6 py-3">
          <Link href="/" className="group min-w-0">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
              {SITE_NAME}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.08]"
          >
            Contact
          </Link>
        </div>

        <nav aria-label="Mobile" className="pb-3 md:hidden">
          <ul className="flex flex-wrap gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
