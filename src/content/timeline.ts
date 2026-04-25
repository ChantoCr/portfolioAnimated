export type BuildPhase = {
  id: string;
  phase: string;
  title: string;
  summary: string;
};

export const buildTimeline: BuildPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Foundation and design system",
    summary:
      "Project setup, layout system, homepage structure, navigation, and AI-ready content organization.",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Case studies and technical depth",
    summary:
      "Project storytelling, Skill Intelligence Map, UI/UX showcase, and Architecture Lab experiences.",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "AI console and knowledge retrieval",
    summary:
      "OpenAI integration, portfolio knowledge grounding, and audience-specific AI interaction modes.",
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Publishing, admin, and final polish",
    summary:
      "Admin workflows, blog capabilities, audience modes, and final presentation refinement.",
  },
];
