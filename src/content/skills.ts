import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    id: "product-thinking",
    title: "Product Thinking",
    summary:
      "Approaches the portfolio as a system with audience flows, proof layers, and long-term extensibility instead of a single landing page.",
    emphasis: "Core",
    areas: ["Information architecture", "Feature scoping", "User value", "Prioritization"],
  },
  {
    id: "frontend-foundations",
    title: "Frontend Foundations",
    summary:
      "Uses React, Next.js, TypeScript, and Tailwind CSS to build clean, reusable, and scalable interfaces.",
    emphasis: "Core",
    areas: ["App Router", "Reusable components", "Responsive UI", "Type safety"],
  },
  {
    id: "uiux-sensitivity",
    title: "UI/UX Sensitivity",
    summary:
      "Focuses on premium hierarchy, readability, spacing, accessibility, and interaction quality.",
    emphasis: "Applied",
    areas: ["Visual hierarchy", "Typography", "Accessibility", "Interaction design"],
  },
  {
    id: "structured-workflow-systems",
    title: "Structured Workflow Systems",
    summary:
      "Uses clear planning, knowledge boundaries, and reusable process patterns to support trustworthy development and communication.",
    emphasis: "Growing",
    areas: ["Prompt architecture", "Knowledge boundaries", "Process design", "Workflow acceleration"],
  },
];
