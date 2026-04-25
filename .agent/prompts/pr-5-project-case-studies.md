# PR #5 — Project Case Studies and Dynamic Project Pages

## Title

Add structured project case studies with `/projects` library and dynamic project detail pages

## Summary

This pull request turns the portfolio from a homepage-first experience into a real project library.

It introduces a richer project content model, a dedicated `/projects` route, dynamic `/projects/[slug]` case study pages, reusable project UI components, and homepage integration for featured case studies.

This is the highest-value next step after the cinematic motion and public positioning updates because it adds the proof layer that recruiters, developers, and clients need to evaluate Gabriel's work in depth.

## Objective

Create a scalable case study system that can support:

- Featured work on the homepage
- Dedicated project pages
- Recruiter-facing project summaries
- Technical decision storytelling
- Future architecture notes and media expansion

## Scope

### Included

- Richer `Project` type
- Structured project case study content
- Project lookup helpers
- Reusable project card component
- Reusable case study hero and section components
- `/projects` route
- `/projects/[slug]` dynamic route
- Homepage featured project integration
- Site-wide navigation support for project pages

### Not Included

- External demos or repository links for unpublished work
- Client project publication without approved details
- CMS or admin editing tools
- Database setup
- Authentication
- Blog system

## Technical Plan

1. Expand the project model from simple preview data into a full case study structure.
2. Store project case studies in structured content modules rather than hardcoding them inside pages.
3. Create reusable UI components for project cards, case study hero sections, content sections, and sidebars.
4. Add a dedicated `/projects` page that lists featured and full library entries.
5. Add dynamic `/projects/[slug]` pages that render problem, solution, technical decisions, UI/UX decisions, results, and future improvements from typed content.
6. Update homepage project previews to point into the new project library.

## Files Expected to Change

- `src/types/project.ts`
- `src/content/projects.ts`
- `src/components/projects/ProjectCard.tsx`
- `src/components/projects/CaseStudyHero.tsx`
- `src/components/projects/CaseStudySection.tsx`
- `src/components/projects/ProjectFactSidebar.tsx`
- `src/components/sections/ProjectsPreview.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/layout/Navbar.tsx`
- `src/lib/constants.ts`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `.agent/prompts/pr-5-project-case-studies.md`

## Acceptance Criteria

- [ ] `/projects` renders successfully.
- [ ] `/projects/[slug]` renders successfully for all documented projects.
- [ ] Homepage project preview links to real case study pages.
- [ ] Project content is typed and structured.
- [ ] Case studies include problem, solution, technical decisions, UI/UX decisions, results, and future improvements.
- [ ] Build, lint, and typecheck pass.
- [ ] The portfolio remains responsive and visually consistent.

## Testing Notes

- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Open `/projects` and verify the project library renders.
- Open each generated project detail page and verify content sections render correctly.
- Verify the homepage featured projects route into the new pages.

## Risks

- Only approved portfolio projects should be published until more freelance projects are cleared for public release.
- The first project library is intentionally content-driven, so future work should keep using the same structure instead of mixing hardcoded page logic.
- As more projects are added, filtering and categorization will become important.

## Future Improvements

- Add real freelance project case studies when approved.
- Add project media galleries, architecture diagrams, and richer supporting assets.
- Add filter and search controls to the project library.
- Add recruiter, developer, and client view modes for project pages.
- Add richer transitions between project detail pages.
