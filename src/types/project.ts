export type ProjectStatus = "In Progress" | "Built" | "Planned";

export type ProjectPublicationMode = "Public" | "Anonymized";

export type ProjectEngagementType = "Portfolio" | "Freelance" | "Client" | "Internal";

export type ProjectMediaKind = "Image" | "Video" | "Mockup";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean;
};

export type ProjectMedia = {
  kind: ProjectMediaKind;
  title: string;
  description: string;
  src?: string;
  alt?: string;
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
  engagementType: ProjectEngagementType;
  publicationMode: ProjectPublicationMode;
  domain: string;
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
  media: ProjectMedia[];
  links: ProjectLink[];
};
