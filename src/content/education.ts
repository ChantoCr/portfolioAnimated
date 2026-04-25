import type { EducationEntry } from "@/types/profile";

export const educationEntries: EducationEntry[] = [
  {
    id: "systems-engineering",
    title: "Systems Engineering",
    institution: "Universidad de las Ciencias y el Arte",
    period: "2019 - 2024",
    summary: "Bachelor's degree.",
  },
  {
    id: "upper-intermediate-english",
    title: "Upper Intermediate English",
    institution: "Sykes Academy",
    period: "Sep 2021 - Dec 2021",
    summary: "English training focused on stronger written and verbal communication.",
  },
  {
    id: "continuous-learning",
    title: "Continuous technical learning",
    institution: "Udemy",
    period: "2018 - Present",
    summary:
      "Ongoing course-based learning across software development, immersive technologies, cybersecurity, networks, and design.",
    focusAreas: [
      "Flutter",
      "React",
      "Node.js",
      "Dart",
      "PHP",
      "Python",
      "Blender",
      "Unity",
      "Network basics",
      "Cybersecurity",
      "Ethical hacking",
      "UX/UI",
    ],
  },
];
