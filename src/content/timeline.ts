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
      "Project setup, layout system, homepage structure, navigation, and structured content organization.",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Case studies and technical depth",
    summary:
      "Project storytelling, skill mapping, UI/UX showcase, and Architecture Lab experiences.",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Interactive console and knowledge retrieval",
    summary:
      "Knowledge-grounded console flows, documented content retrieval, and audience-specific interaction modes.",
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Publishing, admin, and final polish",
    summary:
      "Admin workflows, blog capabilities, audience modes, and final presentation refinement.",
  },
];
