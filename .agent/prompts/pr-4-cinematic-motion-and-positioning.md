# PR #4 — Cinematic Motion and Public-Facing Positioning Cleanup

## Title

Add cinematic motion system and remove explicit AI-first messaging from the public portfolio experience

## Summary

This pull request upgrades the public-facing portfolio from a strong static foundation into a more cinematic, premium, and senior-level experience.

It introduces reusable motion primitives, animated background effects, staggered section reveals, hover tilt interactions, and more expressive layouts across the homepage. It also removes explicit AI-first messaging from the public UI so the product reads as Gabriel's own polished portfolio system rather than an AI-branded demo.

## Objective

Improve first impression, perceived quality, and storytelling through motion while refining the public brand presentation.

## Scope

### Included

- Reusable motion components
- Animated background effects
- Staggered section reveal patterns
- Hover tilt card interaction
- Motion upgrades across hero, console, projects, skills, timeline, architecture, and contact sections
- Public-facing copy cleanup to remove explicit AI branding
- Updated metadata and site naming for public presentation

### Not Included

- Real case study detail pages
- Database setup
- Authentication
- Admin dashboard
- Full console functionality
- Backend or runtime integrations

## Technical Plan

1. Add client-side motion primitives for reveal, staggered entrances, floating background layers, and tilt interaction.
2. Integrate those primitives into key homepage sections while preserving accessibility through reduced-motion fallbacks.
3. Replace explicit AI-first copy in public content with stronger product, portfolio, and recruiter-facing language.
4. Keep the internal architecture modular so future case studies and deeper interactive flows can build on the same foundation.

## Files Expected to Change

- `src/components/motion/Reveal.tsx`
- `src/components/motion/StaggerGroup.tsx`
- `src/components/motion/TiltCard.tsx`
- `src/components/motion/FloatingOrbs.tsx`
- `src/components/layout/PageShell.tsx`
- `src/components/ui/section-shell.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AgentPreview.tsx`
- `src/components/sections/ProjectsPreview.tsx`
- `src/components/sections/SkillsPreview.tsx`
- `src/components/sections/ProfessionalTimelinePreview.tsx`
- `src/components/sections/ArchitecturePreview.tsx`
- `src/components/sections/ContactPreview.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/skills.ts`
- `src/content/timeline.ts`
- `src/lib/constants.ts`
- `src/app/layout.tsx`

## Acceptance Criteria

- [ ] Homepage includes meaningful cinematic motion.
- [ ] Motion feels premium and intentional, not noisy.
- [ ] Reduced-motion users still get a clean experience.
- [ ] Public-facing copy no longer brands the site as explicitly AI-first.
- [ ] Build, lint, and typecheck still pass.
- [ ] Layout remains responsive.

## Testing Notes

- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Run the local dev server and validate section animations manually.
- Verify that hover interactions feel smooth and not excessive.
- Verify the public copy reads as Gabriel's own portfolio product.

## Risks

- Motion can become distracting if future additions are not kept consistent with the current restraint.
- Public copy cleanup should continue as new sections and case studies are added.
- Hover tilt interactions should be monitored on lower-powered devices.

## Future Improvements

- Add project detail pages and real case studies.
- Add GSAP-enhanced scroll storytelling where it adds clear value.
- Add richer console interactions once the project knowledge layer expands.
- Add a featured-work route structure with project-specific motion transitions.
