import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "developer-portfolio-os",
    slug: "developer-portfolio-os",
    title: "Gabriel Soto Portfolio",
    headline:
      "A cinematic portfolio system designed to present technical depth, product thinking, professional context, and future-ready interactive exploration.",
    summary:
      "This portfolio is being built as a product system rather than a template site, combining structured content, premium motion, project storytelling, and long-term extensibility.",
    recruiterSummary:
      "A portfolio product that demonstrates frontend execution, content architecture, interaction design, and disciplined engineering choices instead of relying on generic personal branding.",
    category: "Flagship Product",
    status: "In Progress",
    role: "Product architect, frontend developer, and case study author",
    period: "2026 - Present",
    featured: true,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui-ready",
    ],
    tags: [
      "Portfolio product",
      "Frontend architecture",
      "Motion design",
      "Structured content",
    ],
    outcomes: [
      "Production-minded frontend architecture",
      "Structured professional profile layer",
      "Reusable motion system",
      "Case-study-ready project foundation",
    ],
    problem: [
      "Generic portfolio sites often show surface-level design without proving technical reasoning, structure, or product thinking.",
      "Recruiters, developers, and clients evaluate work differently, so the portfolio needed a system that could support multiple perspectives without duplicating content.",
      "The experience needed to feel premium and memorable while remaining maintainable and extensible for future project pages.",
    ],
    solution: [
      "Design the portfolio as a modular product with typed content, reusable sections, and dynamic project routes.",
      "Use a cinematic dark visual system with purposeful motion, staggered reveals, and interactive cards to elevate first impression without hurting readability.",
      "Store profile, timeline, qualifications, and project data in structured modules so the UI stays reusable and future features can build on the same knowledge base.",
    ],
    technicalDecisions: [
      "Used Next.js App Router with TypeScript to support scalable routing, reusable layouts, and future content expansion.",
      "Separated content, UI, motion, utilities, and types into dedicated folders to keep the codebase maintainable as the product grows.",
      "Created reusable motion primitives instead of hardcoding animation logic inside every section component.",
      "Built project case study routes from structured data so each project can evolve without rewriting the rendering layer.",
    ],
    uiuxDecisions: [
      "Used a dark premium visual system with warm orange and soft violet accents to balance cinematic feel and technical clarity.",
      "Applied strong typography hierarchy and generous spacing so complex information still feels readable.",
      "Introduced motion through reveals, staggered entrances, floating background layers, and tilt interactions while respecting reduced-motion preferences.",
      "Kept the homepage focused on progression: identity, proof of work, capabilities, timeline, architecture, and conversion.",
    ],
    results: [
      "The portfolio now has a validated Next.js foundation with cinematic motion, structured professional data, and dynamic project case study routes.",
      "Public-facing messaging is cleaner and more product-oriented, making the work feel authored and intentional.",
      "The codebase supports future project pages, richer storytelling, and deeper interactive experiences without restructuring the entire app.",
    ],
    futureImprovements: [
      "Add real freelance project case studies once approved for public publication.",
      "Expand the project gallery with richer media, diagrams, and architecture callouts.",
      "Add filtered recruiter, developer, and client views across project content.",
      "Introduce deeper scroll storytelling and page transitions where they add real value.",
    ],
    links: [
      {
        label: "View homepage",
        href: "/",
        external: false,
        enabled: true,
      },
    ],
  },
  {
    id: "case-study-framework",
    slug: "case-study-framework",
    title: "Portfolio Case Study Framework",
    headline:
      "A reusable project storytelling model that turns work into structured case studies for recruiters, developers, and future portfolio growth.",
    summary:
      "This system defines how projects are documented through problem framing, solutions, technical decisions, UI/UX rationale, results, and next steps.",
    recruiterSummary:
      "A structure that makes projects easier to evaluate by translating implementation work into clear business, technical, and growth signals.",
    category: "Portfolio Infrastructure",
    status: "Built",
    role: "Content systems designer and implementation lead",
    period: "2026",
    featured: true,
    technologies: ["TypeScript models", "Dynamic routing", "Structured content", "Reusable UI"],
    tags: ["Case studies", "Content architecture", "Scalable documentation"],
    outcomes: [
      "Consistent project storytelling",
      "Better recruiter readability",
      "Clearer technical explanation structure",
    ],
    problem: [
      "Freelance and technical work can look fragmented when each project is presented differently or with inconsistent depth.",
      "Without a repeatable structure, it becomes hard to explain tradeoffs, decisions, and lessons learned in a way that feels professional.",
    ],
    solution: [
      "Create a shared project data model that holds recruiter summary, problem, solution, technical decisions, design decisions, and results.",
      "Render case studies through reusable page components so every future project page inherits the same quality baseline.",
      "Use the same structured format for homepage previews and detailed project routes to avoid duplicated content maintenance.",
    ],
    technicalDecisions: [
      "Expanded the `Project` type so project content can scale from preview cards to full detail pages.",
      "Added helper functions for listing featured projects and retrieving a project by slug.",
      "Used route-driven project pages so the portfolio can grow from a homepage into a proper work library.",
    ],
    uiuxDecisions: [
      "Built detail pages with clear hierarchy: project overview, impact summary, technical reasoning, and future improvements.",
      "Kept the visual language consistent with the homepage so project pages feel like part of the same product.",
      "Used chips, content cards, and section rhythm to make dense information easier to scan.",
    ],
    results: [
      "The portfolio now supports dedicated project pages rather than only homepage previews.",
      "New projects can be added through structured content without redesigning the rendering layer.",
      "Case studies now feel more deliberate, extensible, and review-friendly.",
    ],
    futureImprovements: [
      "Add project media galleries and architecture diagrams.",
      "Add external demo and repository links where publication is approved.",
      "Add project filtering by stack, audience, and business domain.",
    ],
    links: [
      {
        label: "Browse projects",
        href: "/projects",
        external: false,
        enabled: true,
      },
    ],
  },
  {
    id: "architecture-lab-module",
    slug: "architecture-lab-module",
    title: "Architecture Lab Module",
    headline:
      "A planned product area focused on system boundaries, tradeoffs, design rationale, and engineering thinking behind featured work.",
    summary:
      "This planned module will help technical audiences inspect architecture reasoning in a format that is visual, structured, and easier to understand than a generic project summary.",
    recruiterSummary:
      "A future module intended to make senior-level technical thinking visible through architecture breakdowns, not just project screenshots.",
    category: "Technical Showcase",
    status: "Planned",
    role: "Product planning and architecture definition",
    period: "Planned next phase",
    featured: false,
    technologies: ["System design", "Interactive UI", "Typed content modules"],
    tags: ["Architecture", "Technical storytelling", "Planning"],
    outcomes: [
      "Clearer technical credibility",
      "Deeper engineering storytelling",
      "Expandable architecture documentation layer",
    ],
    problem: [
      "Project cards alone are not enough for technical reviewers who want to understand architecture boundaries, design choices, and scalability tradeoffs.",
      "Important engineering reasoning is often hidden behind final UI unless a dedicated explanation layer exists.",
    ],
    solution: [
      "Plan a dedicated module where architectures can be broken down into systems, boundaries, patterns, and tradeoffs.",
      "Connect this module to the same structured project content model so explanations stay consistent with the rest of the portfolio.",
    ],
    technicalDecisions: [
      "Keep the concept separate from the homepage so it can evolve into a richer experience without cluttering the landing flow.",
      "Design the content shape early so future project pages can reference architecture notes without duplication.",
    ],
    uiuxDecisions: [
      "The module should favor diagrams, layered cards, and progressive disclosure rather than long uninterrupted text.",
      "Animation should support comprehension by showing relationships between systems, not by adding decorative motion.",
    ],
    results: [
      "The concept has been shaped and named inside the portfolio roadmap.",
      "Its role inside the overall product architecture is now clearer and easier to implement in a later phase.",
    ],
    futureImprovements: [
      "Turn this concept into a dedicated route with diagrams and system maps.",
      "Connect architecture notes to each published case study.",
      "Add audience-specific summaries for recruiters and developers.",
    ],
    links: [
      {
        label: "Back to projects",
        href: "/projects",
        external: false,
        enabled: true,
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
