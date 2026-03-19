# CLAUDE.md — TPWITS Website

## Build & Dev
- Dev server: `npm run dev` (port 3000)
- Build: `npx next build` (do NOT use --no-lint flag)
- Lint: `npx eslint`

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Key Conventions
- All dark sections use `bg-navy` (#0A0A0A), not Tailwind's `bg-black` or `bg-slate-*`
- All grays are NEUTRAL (not blue-tinted). Use design token classes, not raw Tailwind colors.
- Font: Plus Jakarta Sans via `--font-plus-jakarta` variable
- AnimatePresence mode="wait" causes hydration issues — use CSS transitions instead
- Orange (#E8713A) only for large text (≥18px), buttons, icons, accents — never small text on white
