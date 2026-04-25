import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentSecondary: "var(--color-accent-secondary)",
        success: "var(--color-success)",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.45)",
        panel: "0 18px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(249,115,22,0.18), transparent 36%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.16), transparent 28%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
