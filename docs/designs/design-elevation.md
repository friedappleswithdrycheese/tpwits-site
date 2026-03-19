# Design Elevation — Premium Enterprise Visual Overhaul

**Status**: ACTIVE
**Date**: 2026-03-19
**Branch**: design-elevation (to be created from main)
**Review**: CEO Review passed (SCOPE EXPANSION, 0 critical gaps)

## Vision

Transform tpwits.com from "well-built template" to "proof of engineering capability." The site itself becomes the first case study — when a CTO visits, the quality of interactions, scroll fluidity, and micro-animation thoughtfulness ARE the sales pitch.

## Scope

### Original Plan (v0-prompt.md)
1. Hero section — dramatic visual presence, better transitions
2. Card designs — premium treatments replacing geometric patterns
3. Section transitions — smoother dark/light changes
4. Animations — sophisticated entrance animations, scroll-linked effects
5. Mobile experience — mobile-first audit, touch interactions
6. Inner pages — premium feel for all detail pages
7. Missing visual elements — abstract art, gradient mesh, SVG improvements
8. Component polish — ServicesOverview, TechStack, Testimonials, Awards, Stats, Footer

### Accepted Expansions (CEO Review)
9. **Scroll-driven storytelling** — distinct choreographed animations per homepage section, creating a narrative journey
10. **Micro-interaction system** — magnetic buttons, 3D card tilts, cursor glow on dark sections, fluid focus states
11. **Page transitions** — View Transitions API for crossfade between pages, shared element animations
12. **Working forms** — Resend API route for contact + newsletter, with Honeypot + Cloudflare Turnstile bot protection
13. **SEO foundation** — per-page metadata (title, description, OG image) using Next.js generateMetadata
14. **Performance budget** — Lighthouse 90+ target, lazy loading, CSS animations over JS, bundle audit
15. **Vercel Analytics** — page views, Web Vitals, visitor insights
16. **Error boundary** — graceful error page instead of white screen on crashes
17. **API route tests** — Vitest + ~11 tests for contact/newsletter endpoints

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Implementation approach | Systematic In-Place Upgrade (CC) | Preserves architecture, guarantees design token consistency |
| Form backend | Resend (Next.js API route) | Own the code, free tier 100 emails/day, deploys with Vercel |
| Bot protection | Honeypot + Cloudflare Turnstile | Defense in depth, already on Cloudflare |
| Page transitions | View Transitions API | Browser-native, avoids AnimatePresence hydration bug |
| Deployment | Feature branch (design-elevation) | Safe, reviewable, atomic commits |
| Test framework | Vitest | Standard for Next.js, API routes only |
| Analytics | @vercel/analytics | Free, one-line setup, Core Web Vitals |
| Orange a11y | Restrict usage (18px+ only on white) | Brand integrity, avoids contrast issues |

## Architecture — New Files

```
src/hooks/
  useScrollAnimation.ts     — scroll-linked animation orchestration
  useMagneticHover.ts       — magnetic button effect
  useCursorGlow.ts          — dark section cursor glow
  useFormSubmit.ts           — form submission with loading/error/success

src/lib/
  resend.ts                  — Resend client singleton
  metadata.ts                — shared metadata helper for SEO

src/app/api/
  contact/route.ts           — contact form endpoint
  newsletter/route.ts        — newsletter signup endpoint

src/components/ui/
  MagneticButton.tsx         — wraps Button with magnetic behavior
  CursorGlow.tsx             — dark section cursor follower
  ErrorBoundary.tsx          — graceful error page
```

## Environment Variables (new)

```
RESEND_API_KEY=re_xxxxx                    # Server-only
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x...       # Client
TURNSTILE_SECRET_KEY=0x...                 # Server-only
NEXT_PUBLIC_BASE_URL=https://tpwits.com    # For OG images
```

## Implementation Order

1. Infrastructure: hooks, lib, API routes, Vitest setup, error boundary
2. SEO metadata across all 17 routes
3. Form backends (contact + newsletter) with bot protection
4. Vercel Analytics
5. Homepage sections upgrade (section by section, with scroll animations)
6. Micro-interactions (magnetic buttons, cursor glow)
7. Page transitions (View Transitions API)
8. Inner pages polish
9. Mobile optimization pass
10. Performance audit + optimization

## Design Rules

- Orange (#E8713A) only for large text (18px+), buttons, icons, accents — never small text on white
- All animations must respect `prefers-reduced-motion`
- Magnetic buttons and cursor glow disabled on touch devices
- Use CSS transforms (GPU-accelerated) over JS layout calculations
- White space > decorative patterns — let typography and spacing do the work
- Each homepage section gets a unique scroll animation (no uniform fade-in-up)

## Not in Scope

- Dark mode toggle
- WCAG 2.1 AA full audit
- Interactive tech stack visualization
- Custom 404 page
- Social media links (depends on accounts existing)
- CMS integration (Phase 2)
- Real images (requires photo shoots)
- Video testimonials (requires production)

## Deferred Work (TODOS.md)

- P1: DNS migration to tpwits.com (Cloudflare dashboard)
- P2: CMS integration for blog + case studies
- P3: Social media links
