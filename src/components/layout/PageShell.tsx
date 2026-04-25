import type { ReactNode } from "react";

import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("relative isolate overflow-hidden", className)}>
      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_58%)]" />
      <div className="container">{children}</div>
    </main>
  );
}
