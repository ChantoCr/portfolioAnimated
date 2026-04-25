export const SITE_NAME = "AI-Powered Developer Portfolio OS";

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Agent", href: "#agent" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_HIGHLIGHTS = [
  "Production-minded portfolio system",
  "AI-ready content architecture",
  "Cinematic UI foundation",
  "Scalable case-study structure",
] as const;

export const AGENT_MODES = [
  "Recruiter Mode",
  "Developer Mode",
  "Client Mode",
  "Project Explainer Mode",
  "Architecture Reviewer Mode",
] as const;

export const KNOWLEDGE_SOURCES = [
  "Project data",
  "Case studies",
  "CV content",
  "Architecture notes",
  "Approved professional summary",
] as const;

export const ARCHITECTURE_PILLARS = [
  {
    title: "Scalable by default",
    description:
      "The app structure separates layout, sections, content, utilities, styles, and types so new features can be introduced without rewriting the foundation.",
  },
  {
    title: "Content outside components",
    description:
      "Projects, skills, timeline data, and profile content live in dedicated content modules so the UI stays reusable and AI-ready.",
  },
  {
    title: "Typed building blocks",
    description:
      "Shared utilities, reusable UI primitives, and TypeScript types provide a clean path toward richer features without sacrificing maintainability.",
  },
] as const;
