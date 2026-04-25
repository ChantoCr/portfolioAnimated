export type SkillEmphasis = "Core" | "Growing" | "Applied";

export type Skill = {
  id: string;
  title: string;
  summary: string;
  emphasis: SkillEmphasis;
  areas: string[];
};
