# Klarweg — project memory

Klarweg is a premium, Hindi-first German-learning platform (A1→C2). This file is
auto-injected into every conversation. Treat the uploaded spec files as the
source of truth, in this precedence order:

1. `uploads/klarweg-os.md` — philosophical & brand foundation (highest tier)
2. `uploads/klarweg-visual-system.md` — binding visual + interaction contract
3. `uploads/klarweg-homepage-architecture.md` — homepage section architecture

When a request conflicts with these files, surface the conflict before changing
anything. Do not silently override.

## Non-negotiables (from the OS + visual-system files)
- **Single-HTML delivery, no framework, no build step.** Vanilla JS, hand-written.
  (A parallel React+Tailwind component library may exist for handoff, but the
  shipped pages are self-contained HTML.)
- **Premium light aesthetic.** Warm off-white canvas `#FAFAF7`, never pure white,
  never cool grey, never dark-mode-by-default. Register = Linear / Stripe Docs /
  Apple Education / Notion — NOT Duolingo, not coaching-site, not generic SaaS.
- **Color carries grammatical meaning only.** The 51-color grammar system never
  appears in decoration (backgrounds, icons, dividers).
- **Calmness is a feature.** No urgency, no countdowns (except Goethe exam timer),
  no confetti/celebration motion, no streaks/gamification, no mascots/avatars.
- **Respect the adult learner.** Specific earned praise, real metadata, no
  "You've got this!" copy, no cheerful emoji in UI.

## Canonical tokens (binding — keep identical across every surface)
Surfaces: `--canvas #FAFAF7` · `--surface #FFFFFF` · `--elevated #F4F3EE` · `--warm #FFF8EC`
Ink: `--ink-primary #0E0E10` · `--ink-secondary #5A5A60` · `--ink-tertiary #9A9AA0`
Accents (spec 3.7): `--accent #1F4E4A` (deep teal — primary/in-app actions + Can-Do
markers) · `--coral #E55A3F` (conversion CTAs ONLY). **One accent per surface** —
homepage = coral CTA surface; in-app chapter = teal action surface. Never both at once.
Spine 5: subject `#185FA5` · verb `#DC2626` · object `#2E7D32` · time `#7C3AED` · place `#EA580C`
Cases: akkusativ `#10B981` · dativ `#5C7A1D` · genitiv `#A06B2C`
Modifiers: modalverb `#9F1239` · article `#B45309` · preposition `#CA8A04` ·
negation `#C026D3` · adjective `#F59E0B` · adverb `#06B6D4` · question `#EC4899`

## Type (spec Part 2)
`--font-display`/`--font-german` = **Fraunces** (German content = Fraunces italic 500) ·
`--font-ui` = **Inter** · `--font-mono` = **JetBrains Mono** (IPA, eyebrows, metadata) ·
`--font-hindi` = **Noto Sans Devanagari**. Max 3 weights per face per page.
Editorial prose column max 680px; tables/panels up to 1080–1200px.

## Motion (spec Part 6)
Tokens: fast 150ms · base 240ms · slow 400ms · xl 600ms. Ease `cubic-bezier(0.16,1,0.3,1)`.
Hover = translateY(-1/-2px) + soft shadow, **never scale()**. Section reveal 600ms via
IntersectionObserver @8%. Respect `prefers-reduced-motion`. Forbidden: bounce, spring,
overshoot, parallax on content, autoplay carousels, celebration animation.

## Spacing scale (binding)
`4 / 8 / 12 / 16 / 24 / 36 / 48 / 64 / 80 / 96 / 120`. Off-scale values (18, 50) are forbidden.
Section padding 88px desktop / 64px mobile. Touch targets ≥44×44px.

## Core interactions
- Tap a `.de[data-word]` → 10-field WORDS popup (word, pron, IPA, audio, EN, HI,
  role badge, case badge, why, example). Hover (desktop) = role tooltip.
- Audio button state machine: `idle | loading | playing`; long-press → Slow (0.75×) /
  Very-slow (0.4×). Always `stop()` before `speak()`; never autoplay.
- Live Sentence Parser: "Roles visible / hidden" toggle on concept sentences.
- Sticky Grammar Helper: fixed `Aa` button bottom-right → legend of active tokens.

## Current files
- `klarweg.html` — original homepage (single HTML)
- `klarweg-v4.html` — premium homepage (Kastle-craftsmanship pass; current lead)
- `chapter/` — A1·Ch3 "Der Nominativ": chapter.css + chapter-data.js +
  chapter-story.js (GSAP story scroll) + chapter-app.js (dashboard) +
  chapter-a1-3-nominativ.html. Vanilla, GSAP via CDN.
