export type ProjectStatus = "In Progress" | "Built" | "Planned";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  recruiterSummary: string;
  category: string;
  status: ProjectStatus;
  role: string;
  period: string;
  featured: boolean;
  technologies: string[];
  tags: string[];
  outcomes: string[];
  problem: string[];
  solution: string[];
  technicalDecisions: string[];
  uiuxDecisions: string[];
  results: string[];
  futureImprovements: string[];
  links: ProjectLink[];
};
