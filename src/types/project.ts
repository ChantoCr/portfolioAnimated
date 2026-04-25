export type ProjectStatus = "In Progress" | "Planned" | "Case Study Next";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: string;
  status: ProjectStatus;
  technologies: string[];
  outcomes: string[];
};
