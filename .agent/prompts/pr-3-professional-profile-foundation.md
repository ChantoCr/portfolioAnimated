# PR #3 — Professional Profile Foundation

## Title

Integrate approved professional profile content with recruiter-facing timeline and contact foundation

## Summary

This pull request transforms the portfolio from a generic frontend shell into a profile-aware product foundation.

It adds Gabriel Soto Rosabal's approved professional information as structured content, including contact details, work experience, education, languages, qualification clusters, and personal interests. It also introduces a recruiter-friendly professional timeline section and updates the hero and contact sections to use real portfolio knowledge.

This is the most important next step after the frontend foundation because it replaces placeholder profile content with approved, reusable knowledge that future AI, recruiter, and case-study features can rely on.

## Objective

Create a trustworthy professional knowledge layer that will support:

- Recruiter-facing communication
- Professional timeline storytelling
- AI grounding from approved profile data
- Future case studies and project explainers
- Contact conversion using real information

## Scope

### Included

- Approved profile content integration
- Structured contact information
- Structured work experience entries
- Structured education entries
- Structured qualification groups
- Structured language information
- Professional timeline homepage section
- Hero copy updated with real recruiter-facing positioning
- Contact section updated with real contact pathways
- Navigation updated to include timeline access

### Not Included

- AI runtime functionality
- Database setup
- Authentication
- Admin dashboard implementation
- Blog implementation
- Real project case studies
- Advanced motion system

## Technical Plan

1. Create typed profile-related models for contact, experience, education, languages, and qualifications.
2. Replace generic placeholder profile content with approved information from Gabriel's CV-style source data.
3. Keep repeated data inside content modules so it can later be reused by the homepage, project pages, recruiter mode, and AI retrieval.
4. Add a `ProfessionalTimelinePreview` section to surface real work history and education in a recruiter-friendly way.
5. Update the hero section to reflect real positioning, language support, and proof highlights.
6. Update the contact section to use approved email, phone, and location context while keeping address presentation privacy-aware.

## Files Expected to Change

- `src/app/page.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ContactPreview.tsx`
- `src/components/sections/ProfessionalTimelinePreview.tsx`
- `src/content/profile.ts`
- `src/content/experience.ts`
- `src/content/education.ts`
- `src/content/qualifications.ts`
- `src/lib/constants.ts`
- `src/types/profile.ts`
- `.agent/prompts/pr-3-professional-profile-foundation.md`

## Acceptance Criteria

- [ ] Approved professional data is stored in structured content files.
- [ ] Hero section uses real profile positioning instead of generic placeholder copy.
- [ ] Contact section shows real contact information.
- [ ] Professional timeline section renders successfully.
- [ ] Education and language data are visible in the homepage flow.
- [ ] Qualification clusters are available for future skill-map and AI use.
- [ ] No unapproved claims are added.
- [ ] The app still passes lint, typecheck, build, and local dev startup.

## Testing Notes

- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Run the local dev server and confirm the homepage renders.
- Verify navigation includes the timeline anchor.
- Verify the hero, timeline, and contact sections use the new structured data.

## Risks

- Public display choices for personal information should keep balancing professionalism and privacy.
- Qualification breadth is large, so future UI views should avoid overwhelming the homepage.
- Project-specific credibility still depends on adding real project case studies next.

## Future Improvements

- Add real featured projects and case studies.
- Add recruiter-mode summaries and filtered views.
- Connect CV download and external profile links.
- Add AI knowledge retrieval over profile, experience, and project content.
- Expand the Skill Intelligence Map using the qualification groups added here.
