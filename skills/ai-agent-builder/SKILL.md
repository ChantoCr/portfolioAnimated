# AI Agent Builder

## Purpose

Use this skill when designing or implementing the AI Agent Console inside the portfolio.

## Responsibilities

- Define AI agent behavior.
- Define safe knowledge boundaries.
- Design RAG structure.
- Connect project data, CV, case studies, and architecture notes.
- Prevent hallucination.
- Create useful agent responses for recruiters, developers, and clients.

## Rules

- The agent must only answer from approved portfolio knowledge.
- If information is missing, it must say: "I do not have that information in the portfolio knowledge base yet."
- Separate knowledge sources from prompting logic.
- Prefer explicit safety rules over implicit assumptions.
- Support multiple audience modes without changing the truth of the answer.

## Agent Modes

The AI agent should support:

- Recruiter Mode
- Developer Mode
- Client Mode
- Project Explainer Mode
- Architecture Reviewer Mode

## Output Format

1. Agent purpose
2. Knowledge sources
3. Prompt rules
4. Tools needed
5. Response examples
6. Safety rules
