# Project memory

## Product intent & audience

- Web app built with **Vite + React**.
- App connects to a **database at startup**; purpose, scope, and target audience not yet established.

## Brand personality & voice

- User communicates in **German**; assistant responses should match.
- Informal "du" tone observed in interaction.

## Visual design & UX direction

- No design direction, styling, layout, or component preferences inferred yet.
- Current behavior: app shows a **black screen** when DB connection fails (no fallback UI).

## Decisions, constraints & rationale

- **Vite dev/preview server runs automatically** in this environment; no manual start command required.
- **No environment files present** in the project; DB credentials are not configured for the preview.
- App crashes at startup if DB connection data is missing — no code changes were made yet.
- Proposed but not yet implemented: show a user-friendly error message instead of a black screen when DB is unavailable.

## Open questions & assumptions

- App content, features, and visual design are unknown — to be determined.
- Database type and required environment variable names not yet confirmed.
- Assumes the default Vite + React template is the current starting point unless the user indicates otherwise.
- Assumes user can provide or configure DB credentials, or approve a fallback error UI.