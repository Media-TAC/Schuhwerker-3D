# Project memory

## Product intent & audience

- Web app built with **Vite + React**.
- App is a **shoe geometry / fitting tool** using **hybrid scanning** — involves scanning, geometry calculation, and shoe selection.
- Target audience and broader scope still not fully established.

## Brand personality & voice

- User communicates in **German**; assistant responses should match.
- Informal "du" tone observed in interaction.

## Visual design & UX direction

- App has a multi-step flow with named pages/states:
  - **"Hybrid Ergebnis Geometrie wird berechnet"** — calculation-in-progress view with a progress indicator.
  - **"Hybrid Ergebnis Schuhgeometrie berechnet"** — completed view with 3D shoe geometry visualization.
  - Followed by a **"Schuhauswahl"** (shoe selection) step.
- **Scanauswertung** (scan analysis) component = **Präzisionsdaten** (precision data) + **Qualitätskarte** (quality map).
- **"Weiter" buttons** navigate to the next step in the flow.
- 3D view present on the "Schuhgeometrie berechnet" page.
- No broader design system, colors, or typography preferences inferred yet.

## Decisions, constraints & rationale

- **Vite dev/preview server runs automatically** in this environment; no manual start command required.
- Scanauswertung moved to the **"Geometrie wird berechnet"** page (below progress indicator, above Weiter button).
- Scanauswertung **removed** from the **"Schuhgeometrie berechnet"** page; that page now shows 3D view + Weiter button only.
- Changes verified via code inspection only, not browser-tested.
- Earlier: app showed a black screen on DB connection failure; fallback error UI was proposed but may or may not still be relevant.

## Open questions & assumptions

- Exact meaning of "Scanauswertung" was inferred as precision data + quality map; user has not yet confirmed whether additional elements are included.
- Database type and required environment variables still not confirmed.
- Broader app content, full step list, and visual design system remain to be determined.