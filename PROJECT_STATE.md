# PROJECT_STATE

## Current Project Status

The repository is currently in a functional, buildable state with a validated Next.js 16 application and dynamic case study routes.

This file documents the current filesystem shape, route map, configuration state, and any known issues or implementation notes relevant for a new session.

---

## Root-Level Structure

### Internal documentation and workflow
- `AGENTS.md`
- `.agent/prompts/`
- `skills/`

### App and configuration
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `next-env.d.ts`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `eslint.config.mjs`
- `components.json`
- `.gitignore`

### Session handoff docs
- `CONTEXT_HISTORY.md`
- `PROJECT_STATE.md`
- `NEXT_STEPS_PR6.md`

---

## `src/` Folder Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx

  components/
    layout/
      Footer.tsx
      Navbar.tsx
      PageShell.tsx

    motion/
      FloatingOrbs.tsx
      Reveal.tsx
      StaggerGroup.tsx
      TiltCard.tsx

    projects/
      CaseStudyHero.tsx
      CaseStudySection.tsx
      ProjectCard.tsx
      ProjectFactSidebar.tsx

    sections/
      AgentPreview.tsx
      ArchitecturePreview.tsx
      ContactPreview.tsx
      HeroSection.tsx
      ProfessionalTimelinePreview.tsx
      ProjectsPreview.tsx
      SkillsPreview.tsx

    ui/
      badge.tsx
      button.tsx
      section-shell.tsx
      surface-card.tsx

  content/
    education.ts
    experience.ts
    profile.ts
    projects.ts
    qualifications.ts
    skills.ts
    timeline.ts

  lib/
    constants.ts
    utils.ts

  styles/
    tokens.ts

  types/
    profile.ts
    project.ts
    skill.ts
```

---

## Active Routes

### Public routes
- `/`
  - homepage
  - cinematic landing experience
  - profile, console preview, projects preview, skills, timeline, architecture, contact

- `/projects`
  - project library page
  - featured project cards
  - full documented project list

- `/projects/[slug]`
  - dynamic project case study pages
  - currently generated slugs:
    - `/projects/developer-portfolio-os`
    - `/projects/case-study-framework`
    - `/projects/architecture-lab-module`

### Framework route
- `/_not-found`

---

## Current Configuration

### Runtime and scripts
From `package.json`:

- `dev`: `next dev --turbopack`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint .`
- `typecheck`: `tsc --noEmit`

### Main dependencies
- `next`
- `react`
- `react-dom`
- `framer-motion`
- `gsap`
- `lenis`
- `lucide-react`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

### Styling and design
- Tailwind CSS configured in `tailwind.config.ts`
- CSS variables defined in `src/app/globals.css`
- shadcn/ui-ready config in `components.json`
- Google fonts loaded in `src/app/layout.tsx`
  - `Inter`
  - `Space Grotesk`

### TypeScript
- strict typing enabled
- alias configured as `@/*`
- React JSX runtime configured by Next.js

### ESLint
- uses Next.js flat config via `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`

---

## Current Content State

### Professional profile content
Structured and already integrated:

- name
- role
- recruiter summary
- positioning
- location label
- contact info
- languages
- work experience
- education
- qualifications
- interests

Files:
- `src/content/profile.ts`
- `src/content/experience.ts`
- `src/content/education.ts`
- `src/content/qualifications.ts`

### Project content
Structured case study content exists for:

- portfolio product itself
- case study framework
- architecture lab module

File:
- `src/content/projects.ts`

### Important limitation
No real public freelance/client case studies have been added yet.

This is intentional. The current project system is ready for them, but actual project entries still need approved real content.

---

## Current UI State

### Homepage
The homepage is polished and functional with:

- cinematic hero
- floating background effects
- staggered motion
- hover tilt interaction
- recruiter-facing profile positioning
- featured projects preview
- professional timeline
- architecture section
- contact section

### Projects area
The portfolio now supports a real project library and detail pages.

### Navigation
Navigation is configured to work across routes using absolute links where needed.

Examples:
- `/projects`
- `/#contact`
- `/#timeline`

---

## Known Issues / Notes / Pending Bugs

### 1. `.next` and `tsconfig.tsbuildinfo` artifacts may reappear after builds
This is normal. They are already covered by `.gitignore`, but local cleanup may still be useful before committing if needed.

### 2. Turbopack dev process on Windows may leave persistent background processes
During the session, local dev verification sometimes left running processes or noisy log output. This is not currently an application code bug, but it can cause:

- port conflicts
- lingering dev server processes
- noisy console output during scripted checks

If needed, kill prior Next dev processes before starting a new one.

### 3. GSAP and Lenis are installed but not actively integrated yet
They are available for future work, but the current motion system is powered by Framer Motion.

### 4. Project library content is portfolio-internal only for now
The structure is production-ready, but actual credibility growth now depends on adding real freelance/client work.

### 5. Public-facing AI branding was intentionally removed
Internal workflow docs still exist, but visible UI should continue to remain product-first and authored.

---

## Validation Status

The following checks passed during this session:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- local route check for `/projects`

Build output confirmed static generation for:

- `/`
- `/projects`
- `/projects/[slug]`

---

## Immediate Working Assumptions for the Next Session

1. The app is stable enough to continue feature work.
2. The most important missing layer is real published or anonymized project proof.
3. PR #6 should focus on replacing placeholder/internal portfolio-side project entries with real freelance/client case studies.
4. The existing route, component, and content structure should be reused rather than rewritten.
