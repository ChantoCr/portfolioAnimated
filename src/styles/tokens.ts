export const designTokens = {
  colors: {
    background: "#09090b",
    foreground: "#f4f4f5",
    muted: "#a1a1aa",
    surface: "rgba(24, 24, 27, 0.72)",
    surfaceAlt: "rgba(39, 39, 42, 0.72)",
    border: "rgba(255, 255, 255, 0.1)",
    accent: "#f97316",
    accentSecondary: "#818cf8",
    success: "#22c55e",
  },
  radius: {
    md: "0.875rem",
    lg: "1.25rem",
    xl: "1.75rem",
  },
  shadow: {
    panel: "0 18px 60px rgba(0,0,0,0.35)",
    glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.45)",
  },
  maxWidth: {
    content: "80rem",
  },
} as const;

export type DesignTokens = typeof designTokens;
