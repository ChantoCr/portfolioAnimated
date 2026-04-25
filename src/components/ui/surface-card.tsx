import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function SurfaceCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
