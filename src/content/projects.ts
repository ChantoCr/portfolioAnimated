import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio-os",
    title: "AI-Powered Developer Portfolio OS",
    summary:
      "The portfolio itself is being built as a product system that combines cinematic presentation, technical storytelling, and future AI interaction.",
    category: "Flagship Product",
    status: "In Progress",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui-ready"],
    outcomes: [
      "Production-minded architecture",
      "Structured content system",
      "Future-ready AI integration path",
    ],
  },
  {
    id: "case-study-system",
    title: "Project Case Study System",
    summary:
      "A reusable format for explaining projects through problem framing, technical decisions, UI/UX choices, and lessons learned.",
    category: "Portfolio Infrastructure",
    status: "Case Study Next",
    technologies: ["Markdown strategy", "Structured content", "Typed models"],
    outcomes: [
      "Recruiter clarity",
      "Developer-facing technical depth",
      "Reusable storytelling model",
    ],
  },
  {
    id: "architecture-lab",
    title: "Architecture Lab Experience",
    summary:
      "A dedicated space to explain system boundaries, design choices, scalability decisions, and engineering tradeoffs behind featured work.",
    category: "Technical Showcase",
    status: "Planned",
    technologies: ["System design", "Content modules", "Interactive UI"],
    outcomes: [
      "Clear architecture communication",
      "Senior-level reasoning visibility",
      "Expandable learning artifact",
    ],
  },
];
