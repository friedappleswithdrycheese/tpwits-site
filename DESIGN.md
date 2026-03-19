# Design System — TPWITS

## Product Context
- **What this is:** Enterprise technology partner website — marketing site with 17 routes, 13 homepage sections
- **Who it's for:** CTOs, VP Engineering, CDOs at mid-to-large enterprises
- **Space/industry:** Enterprise tech services. Peers: Accenture, Deloitte Digital, Thoughtworks, tkxel
- **Project type:** Marketing site (Next.js 16 + Tailwind CSS 4 + Framer Motion 12)
- **Live at:** tpwits-site.vercel.app (tpwits.com pending DNS migration)

## Aesthetic Direction
- **Direction:** Luxury/Refined + Industrial Precision
- **Decoration level:** Intentional — subtle texture (dot grids, ruled lines, glassmorphism on dark). Decoration supports hierarchy, never competes with content.
- **Mood:** Authority through restraint. Near-black surfaces signal technical depth. White space signals confidence. One warm accent (orange) signals human ambition in a sea of cold blue-purple competitors.
- **Reference sites:** vercel.com (minimal discipline), linear.app (dark atmospheric), stripe.com (premium polish)
- **Logo:** Existing asset — do NOT modify. Use `/logo.png` (dark bg) and `/logo-white.png` (light bg) as-is.

## Typography
- **Display/Hero:** Plus Jakarta Sans, weight 800, leading 1.08, clamp(2.5rem, 5vw, 4.75rem)
- **Body:** Plus Jakarta Sans, weight 400, 17px base, 1.75 line-height
- **UI/Labels:** Plus Jakarta Sans, weight 700, uppercase, letter-spacing 0.15-0.2em, text-sm (14px)
- **Data/Tables:** Plus Jakarta Sans, weight 500 (supports tabular-nums via font-variant-numeric)
- **Code:** System monospace (no dedicated code font needed for this site)
- **Loading:** next/font/google in layout.tsx, variable `--font-plus-jakarta`, weights 300-800
- **Scale:**
  | Step | Size | Weight | Use |
  |------|------|--------|-----|
  | xs | 12px | 700 | Section labels, badges, overlines (uppercase + tracked) |
  | sm | 14px | 500 | UI text, nav links, form labels, captions |
  | base | 17px | 400 | Body paragraphs, descriptions |
  | lg | 20px | 700 | Sub headings, card titles (small) |
  | xl | 24px | 700 | Card titles, sidebar headings |
  | 2xl | 30px | 800 | Section headings (mobile) |
  | 3xl | 36px | 800 | Section headings (tablet) |
  | 4xl | 48px | 800 | Section headings (desktop), hero sub |
  | 5xl | 60px | 800 | Hero headline (tablet) |
  | 6xl | 72px | 800 | Hero headline (desktop), display |

## Color
- **Approach:** Restrained — monochrome base + single warm accent
- **Primary:** #E8713A — brand orange. Used sparingly: CTAs, accent lines, section labels, hover states, icons. NEVER for small body text on white (fails WCAG AA at <18px).
- **Primary Hover:** #D4612A
- **Primary Light:** #FFF4ED — subtle backgrounds for badges, highlighted areas
- **Primary Glow:** rgba(232, 113, 58, 0.12) — glassmorphism backgrounds, focus rings

### Dark Surfaces (near-black, NOT navy-blue)
| Token | Hex | Use |
|-------|-----|-----|
| navy (base) | #0A0A0A | Primary dark section background |
| navy-light | #171717 | Elevated surfaces (cards on dark bg) |
| navy-muted | #262626 | Borders, dividers, input fields on dark |

### Light Surfaces
| Token | Hex | Use |
|-------|-----|-----|
| background | #FFFFFF | Primary light section background |
| background-alt | #FAFAFA | Alternating light sections, form containers |
| background-subtle | #F5F5F5 | Subtle contrast, code blocks |

### Neutral Scale (NEUTRAL grays, not blue-tinted slate)
#0A0A0A → #171717 → #262626 → #404040 → #525252 → #737373 → #A3A3A3 → #D4D4D4 → #E5E5E5 → #F5F5F5 → #FAFAFA

### Text
| Token | Hex | Use |
|-------|-----|-----|
| foreground | #0A0A0A | Headings, primary text on light |
| foreground-muted | #525252 | Body text, descriptions |
| foreground-subtle | #A3A3A3 | Captions, placeholders, disabled |

### Semantic
| Token | Hex | Use |
|-------|-----|-----|
| success | #22C55E | Form success, positive indicators |
| warning | #F59E0B | Caution states, pending indicators |
| error | #EF4444 | Validation errors, destructive actions |
| info | #3B82F6 | Informational messages, links on light |

### Border
- Light mode: #E5E5E5
- Dark mode: rgba(255, 255, 255, 0.06) to rgba(255, 255, 255, 0.1)

## Spacing
- **Base unit:** 4px (Tailwind default)
- **Density:** Comfortable
- **Scale:**
  | Token | Value | Use |
  |-------|-------|-----|
  | 2xs | 2px | Hairline gaps, icon offsets |
  | xs | 4px | Tight gaps, inline spacing |
  | sm | 8px | Form field gaps, compact lists |
  | md | 16px | Default content gap, card padding inner |
  | lg | 24px | Section content spacing, card grid gap |
  | xl | 32px | Major content blocks |
  | 2xl | 48px | Section heading to content |
  | 3xl | 64px | Between major content zones |
  | 4xl | 96px | Section padding (small screens) |
- **Section padding:** `py-20 md:py-28 lg:py-36` (80px / 112px / 144px)

## Layout
- **Approach:** Grid-disciplined — strict alignment signals engineering precision
- **Grid:** 12-column, responsive
- **Max content width:** 1280px (max-w-7xl, `container-custom` class)
- **Breakpoints:** sm(640px) md(768px) lg(1024px) xl(1280px)
- **Border radius:**
  | Token | Value | Use |
  |-------|-------|-----|
  | sm | 6px | Inputs, badges, alert borders |
  | md | 10px | Cards, dropdowns, tooltips |
  | lg | 16px | Modals, section overlays, form containers |
  | xl | 24px | Hero glass cards, feature highlights |
  | full | 9999px | Pills, avatar frames, circular buttons |

## Motion
- **Approach:** Intentional-to-expressive — scroll-driven storytelling, micro-interactions, page transitions
- **Easing:**
  - Enter: `ease-out` (elements arriving)
  - Exit: `ease-in` (elements leaving)
  - Move: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth overshoot for interactions)
  - Default: `cubic-bezier(0.4, 0, 0.2, 1)` (standard transitions)
- **Duration:**
  - Micro: 100ms (button press, toggle)
  - Short: 200ms (hover states, focus rings)
  - Medium: 350ms (card transitions, scroll reveals)
  - Long: 600ms (page transitions, hero entrance)
- **Rules:**
  - MUST respect `prefers-reduced-motion` — disable all animations when set
  - Magnetic hover and cursor glow MUST be disabled on touch devices
  - Prefer CSS transforms (GPU-accelerated) over JS layout calculations
  - Each homepage section gets a unique scroll animation — no uniform fade-in-up
  - Page transitions use View Transitions API (CSS, not framer-motion)
  - Hero entrance uses CSS @keyframes only (no framer-motion, for LCP optimization)

## Hero Section Specification

The hero is the single most important visual moment on the site. It must feel monumental.

### Background Treatment
- Base: #0A0A0A
- Atmospheric gradient mesh: slow-moving warm glow (radial gradient, rgba(232,113,58,0.04-0.06)), positioned upper-right quadrant
- Optional: very subtle dot grid overlay at 2-3% opacity for texture

### Layout
- Full viewport height: `min-h-[90vh] lg:min-h-screen`
- Content: 12-column grid, headline spanning 7 columns on desktop (full width on mobile)
- Stats: glass cards with backdrop-blur, border rgba(255,255,255,0.06), positioned in right 5 columns

### Visual Element
- Right side: morphing particle/node visual (existing `HeroVisual` component)
- Must be PROMINENT — minimum 60% opacity, large scale
- If visual is too subtle, increase opacity and add a warm glow behind it

### Hero CTA
- Size: XL (padding 18px 36px, font-size 18px)
- Orange glow on dark: `box-shadow: 0 0 24px rgba(232,113,58,0.3)`
- Magnetic hover behavior (useMagneticHover hook)

### Entrance Animation
- CSS @keyframes only (no framer-motion dependency for LCP)
- Accent line scales in from left (0.7s)
- Headline fades up (0.7s, 0.15s delay)
- Subtitle fades up (0.6s, 0.3s delay)
- CTAs fade up (0.5s, 0.45s delay)
- Stats count up with eased counter (staggered 0.1s per stat)
- Recognition badges fade in last (0.8s, 0.9s delay)

## Dark Section Backgrounds

Each of the 6 dark sections must be visually distinct. No two should look the same.

| Section | Background Treatment |
|---------|---------------------|
| Hero | Gradient mesh glow — warmest, most dramatic. Radial gradient upper-right. |
| AISection | Subtle dot grid pattern — `dot-pattern-dark` class at 3-4% opacity |
| CaseStudies | Thin horizontal ruled lines — 1px lines at rgba(255,255,255,0.03), 80px apart |
| TechStack | Diagonal grid pattern — engineering blueprint feel, 45deg lines at 2% opacity |
| Industries | Subtle radial gradient — centered, softer/cooler than hero, minimal |
| Testimonials | Clean, unadorned — contrast through simplicity. Pure #0A0A0A. |

### Section Transitions
- Dark → Light: CSS gradient fade over 80-120px (not a hard cut)
- Light → Dark: Same gradient fade
- Implementation: pseudo-element `::after` on each section with gradient overlay

## Button Specification

### Variants
| Variant | Light Background | Dark Background |
|---------|-----------------|-----------------|
| Primary | bg-primary, white text, subtle shadow | bg-primary, white text, **orange glow shadow** `0 0 20px rgba(232,113,58,0.3)` |
| Secondary | bg-navy, white text | bg-navy-light, white text |
| Outline | border-primary, orange text → fill on hover | border-primary, orange text → fill on hover |
| Ghost | transparent, fg text → primary on hover | transparent, white/50 text → white on hover |
| White | bg-white, fg text | bg-white, fg text |

### Sizes
| Size | Padding | Font Size |
|------|---------|-----------|
| sm | 8px 20px | 14px |
| md | 14px 28px | 16px |
| lg | 16px 32px | 17px |
| xl | 18px 36px | 18px (hero CTA only) |

### Hover Behavior
- All buttons: `transform: translateY(-1px)` + shadow deepen
- Transition: `300ms ease-out` (not linear)
- Primary on dark: glow intensifies on hover (`0 0 32px rgba(232,113,58,0.4)`)
- Magnetic hover: enabled on primary and outline variants (desktop only, disabled on touch)

## Component Patterns

### Cards
- Border: 1px solid var(--border)
- Border radius: lg (16px)
- Padding: 32px
- Hover: translateY(-2px) + shadow-lg transition
- Card headers (dark): each gets a subtle variation (gradient angle, opacity pattern) — NOT all identical

### Form Inputs
- Border: 1px solid var(--border)
- Border radius: sm (6px)
- Padding: 12px 16px
- Focus: border-color primary + focus ring `0 0 0 3px rgba(232,113,58,0.1)`
- Shared class: `.form-input` in globals.css (DRY — used by all 3 forms)

### Alerts
- Border-left: 3px solid semantic color
- Background: semantic color at 5% opacity (light mode) / 10% opacity (dark mode)
- Border radius: sm (6px)
- Used for: form success/error messages, system notifications

### Glass Cards (dark sections only)
- Background: rgba(255, 255, 255, 0.03-0.05)
- Backdrop-filter: blur(12px)
- Border: 1px solid rgba(255, 255, 255, 0.06)
- Border radius: lg (16px) or xl (24px)

## Accessibility Rules
- Orange (#E8713A) only for text ≥18px on white backgrounds (contrast ratio ~3.4:1, passes WCAG AA for large text only)
- For small text emphasis on light backgrounds, use foreground (#0A0A0A) with font-weight:700 instead of orange
- Orange buttons (white text on orange bg) pass WCAG AA at all sizes
- All interactive elements: minimum 44x44px touch target on mobile
- Keyboard focus: visible focus ring on all interactive elements
- `prefers-reduced-motion`: all animations disabled, static content shown
- Skip-to-content link already in layout.tsx

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-19 | Initial design system created | Formalized from existing brand direction + competitive research (Vercel, Linear, Stripe, Thoughtworks, Accenture) |
| 2026-03-19 | Semantic colors added | Needed for form success/error/warning/info states (forms being wired up with Resend) |
| 2026-03-19 | Hero spec: atmospheric gradient + glass stat cards | Live site hero feels like a dark void — needs visual presence and warmth |
| 2026-03-19 | Dark section differentiation | All 6 dark sections look identical — each gets a unique subtle background texture |
| 2026-03-19 | Button glow on dark backgrounds | Primary CTA doesn't stand out enough against dark — add orange glow shadow |
| 2026-03-19 | CSS-only hero entrance | LCP optimization — server renders visible text, CSS animates on paint (not hydration) |
| 2026-03-19 | Plus Jakarta Sans retained | Already configured, fits the category. Changing fonts adds risk without proportional return. |
| 2026-03-19 | Orange restricted to ≥18px on white | WCAG AA compliance — contrast ratio 3.4:1 fails for small text |
