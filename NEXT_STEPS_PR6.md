# NEXT_STEPS_PR6

## Best Next Recommended Step

### PR #6 — Add your first real published freelance/client project case studies

This is the highest-value next move.

### Why this is the right next PR
- the structure is ready
- routes are ready
- case study format is ready
- now the portfolio needs real work proof

The product now has a strong shell, cinematic presentation, professional profile content, and a working case study system. What it still needs most is evidence of real external work that recruiters, clients, and developers can evaluate.

---

## PR #6 Objective

Replace or extend the current portfolio-internal project entries with real freelance/client projects that can be shown publicly or anonymized professionally.

The goal is to make the `/projects` library feel like actual proof of work rather than a framework demonstration.

---

## What PR #6 Should Deliver

### 1. Real project content intake
Collect approved project information from Gabriel for each project.

### 2. Real case study entries
Add new structured entries to `src/content/projects.ts` or split them into dedicated project content modules if the list grows.

### 3. Homepage featured projects update
Replace some current internal-only featured projects with real published or anonymized case studies.

### 4. Project detail page refinement
Improve the quality of project detail pages with stronger recruiter summaries, technical explanations, and design rationale.

### 5. Optional supporting media preparation
If screenshots or mock descriptions are available, prepare the content model for media support in a future PR.

---

## Recommended Input Format for Each Real Project

Send the following for each project:

1. **Project name**
2. **What problem it solved**
3. **What you built**
4. **Stack**
5. **Screenshots or description of UI**
6. **Technical challenges**
7. **Results**
8. **What you learned**
9. **If it can be public or anonymized**

This is the best way to proceed because the case study system is already prepared to convert raw project notes into senior-level portfolio content.

---

## Suggested PR #6 Scope

### Included
- 2 to 4 real project case studies to start
- recruiter-facing summaries for each project
- full project detail page content
- homepage featured project updates
- anonymization strategy where required

### Not Included
- full media gallery system
- CMS/admin editing
- project filters and search
- client testimonials unless explicitly approved
- external private repository links

---

## Suggested Technical Plan

1. Review the current `Project` type and confirm whether real projects need more fields.
2. Collect approved project information from Gabriel.
3. Convert raw project information into structured case-study entries.
4. Decide which projects should be:
   - public with real names
   - anonymized
   - held back for later
5. Update `featuredProjects` selection.
6. Validate case study pages for clarity, accuracy, and credibility.
7. Run:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`

---

## Recommended Content Strategy for PR #6

### Prefer these kinds of projects first
Choose projects that best show:

- clear business or user problem
- visible UI/UX work
- technical complexity or thoughtful tradeoffs
- real delivery and execution
- stack breadth that supports your market positioning

### Good early candidates
Prioritize projects that demonstrate one or more of these strengths:

- web app or website with real product structure
- mobile app built with Flutter or React Native
- interactive or immersive project using Unity or PlayCanvas
- full-stack or architecture-heavy implementation
- consulting project where your role and decisions were meaningful

### Avoid for the first batch
- tiny tutorial-like projects
- unfinished experiments unless strategically reframed
- projects where you cannot explain your exact role clearly
- anything with confidentiality risk that cannot be safely anonymized

---

## Case Study Writing Standard

For each project page, preserve this structure:

- title
- headline
- recruiter summary
- problem
- solution
- technical decisions
- UI/UX decisions
- results
- future improvements

Tone requirements:

- professional
- honest
- technical
- specific
- no exaggerated claims
- strong on reasoning and tradeoffs

---

## Anonymization Guidance

If a freelance/client project cannot be fully public:

### Allowed approach
- use a professional anonymized name
- describe industry/domain at a safe level
- explain the problem and your role clearly
- avoid confidential business details
- avoid exposing private client data, metrics, or code

### Example direction
Instead of naming a private client, use wording like:
- “Private healthcare operations dashboard”
- “Internal inventory management platform”
- “Client booking and service website for a local business”

This keeps the project useful as proof without creating privacy or confidentiality issues.

---

## Recommended Deliverable Order for the Next Session

1. Select the first 2 to 4 real projects
2. Gather the 9 required input points for each one
3. Decide public vs anonymized naming
4. Draft case studies
5. Update `src/content/projects.ts`
6. Review homepage featured selection
7. Validate all pages

---

## Best Handoff Instruction for the Next Pi Session

When starting the next session, tell the new Pi agent:

- read `CONTEXT_HISTORY.md`
- read `PROJECT_STATE.md`
- read `NEXT_STEPS_PR6.md`
- do not rewrite the current project structure
- continue from the current case study system
- focus only on PR #6 scoped work unless otherwise requested

---

## Final Note

If you want, next I can do PR #6 and help turn your real projects into polished portfolio case studies.

Once you send the project details, the next session should focus on converting them into high-quality documented proof and wiring them directly into `/projects`.
