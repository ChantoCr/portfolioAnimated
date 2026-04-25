export type ContactInfo = {
  email: string;
  phone: string;
  fullAddress: string;
  locationLabel: string;
};

export type LanguageSkill = {
  name: string;
  proficiency: string;
};

export type SiteProfile = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  recruiterSummary: string;
  positioning: string;
  currentFocus: string[];
  proofHighlights: string[];
};

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type EducationEntry = {
  id: string;
  title: string;
  institution: string;
  period: string;
  summary: string;
  focusAreas?: string[];
};

export type QualificationGroup = {
  id: string;
  title: string;
  items: string[];
};
