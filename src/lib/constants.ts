export const SITE_NAME = "Gabriel Soto Portfolio";

export const NAV_ITEMS = [
  { label: "Home", href: "/#hero" },
  { label: "Console", href: "/#console" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Contact", href: "/#contact" },
] as const;

export const CONSOLE_MODES = [
  "Recruiter View",
  "Developer View",
  "Client View",
  "Project Explorer",
  "Architecture Review",
] as const;

export const KNOWLEDGE_SOURCES = [
  "Project content",
  "Case studies",
  "Professional profile",
  "Architecture notes",
  "Approved experience details",
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
      "Projects, skills, timeline data, and profile content live in dedicated content modules so the UI stays reusable and future experiences stay consistent.",
  },
  {
    title: "Typed building blocks",
    description:
      "Shared utilities, reusable UI primitives, and TypeScript types provide a clean path toward richer features without sacrificing maintainability.",
  },
] as const;
