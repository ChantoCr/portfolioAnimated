# PR #2 — Next.js Foundation

## Title

Initialize Next.js 16 project with design system and base layout

## Summary

This pull request initializes the frontend foundation for the AI-Powered Developer Portfolio OS.

It sets up the Next.js application, TypeScript, Tailwind CSS, shadcn/ui-ready structure, global layout, design tokens, shared UI primitives, base navigation, structured content modules, and the first cinematic homepage shell.

The goal is to establish a scalable frontend system that can later support the AI Agent Console, case studies, Architecture Lab, recruiter modes, and richer product experiences without rewriting the foundation.

## Objective

Create the base application structure that will support:

- Cinematic homepage
- AI Agent Console
- Project case studies
- Architecture Lab
- Skill Intelligence Map
- UI/UX Showcase
- Blog
- Admin dashboard
- Recruiter / Developer / Client modes

## Scope

### Included

- Next.js 16 project setup
- TypeScript configuration
- Tailwind CSS setup
- Global styles and CSS variables
- Base layout
- Design tokens
- Shared component structure
- Navigation shell
- Homepage section structure
- Content/data folder structure
- Homepage placeholder sections
- shadcn/ui-ready configuration

### Not Included

- Full animations
- AI integration
- Database setup
- Authentication
- Real project data
- Admin dashboard logic
- Blog implementation
- Project detail pages

## Technical Plan

1. Initialize the app with Next.js App Router, TypeScript, Tailwind CSS, and alias support.
2. Configure `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, and `components.json`.
3. Create a scalable `src/` architecture with dedicated folders for app entrypoints, layout components, sections, content, utilities, styles, and types.
4. Build the initial homepage using reusable section and card patterns.
5. Store repeated portfolio copy in typed content modules instead of hardcoding it inside page components.
6. Keep the visual language dark, premium, cinematic, and ready for future animation layers.

## Files Expected to Change

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.ts`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `eslint.config.mjs`
- `components.json`
- `.gitignore`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/PageShell.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AgentPreview.tsx`
- `src/components/sections/ProjectsPreview.tsx`
- `src/components/sections/SkillsPreview.tsx`
- `src/components/sections/ArchitecturePreview.tsx`
- `src/components/sections/ContactPreview.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/section-shell.tsx`
- `src/components/ui/surface-card.tsx`
- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/skills.ts`
- `src/content/timeline.ts`
- `src/lib/utils.ts`
- `src/lib/constants.ts`
- `src/styles/tokens.ts`
- `src/types/project.ts`
- `src/types/skill.ts`

## Acceptance Criteria

- [ ] Next.js app runs successfully.
- [ ] TypeScript is enabled.
- [ ] Tailwind CSS works.
- [ ] shadcn/ui-ready configuration exists.
- [ ] Folder structure is created and clean.
- [ ] Global layout exists.
- [ ] Navbar exists.
- [ ] Footer exists.
- [ ] Homepage renders successfully.
- [ ] Placeholder sections exist.
- [ ] Content files exist.
- [ ] No AI or database logic is added yet.
- [ ] Code is clean, typed, and scalable.

## Testing Notes

- Run `npm install`.
- Run `npm run dev`.
- Open the local app in the browser.
- Confirm the homepage loads correctly.
- Confirm Tailwind classes are applied.
- Confirm responsive behavior works across viewport sizes.
- Run `npm run typecheck`.
- Run `npm run lint`.
- Run `npm run build`.

## Risks

- Visual polish will continue evolving, so this PR should be reviewed as a frontend foundation rather than final design.
- Some content is intentionally structured as placeholder portfolio data until approved professional and project details are added.
- Future animation and AI layers must keep respecting the current separation between content, UI, and system concerns.

## Future Improvements

- Add motion patterns with Framer Motion and GSAP.
- Add Lenis smooth scroll integration.
- Add project detail pages and case study routes.
- Add a richer design token system and theme utilities.
- Add recruiter, developer, and client viewing modes.
- Add AI console UI and grounded knowledge retrieval.
