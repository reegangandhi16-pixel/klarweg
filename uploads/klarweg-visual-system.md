# klarweg-visual-system.md

**Status:** Canonical architecture — v1.0
**Locked:** 26 May 2026
**Purpose:** The visual and interaction operating system of Klarweg. This file defines how the platform looks, behaves, moves, and feels — at the implementation layer that sits between architecture and code. It is the document designers, frontend engineers, and product reviewers consult to build and evaluate every surface of Klarweg.

**Companions:**
- `klarweg-os.md` — philosophical and brand foundation
- `klarweg-curriculum-architecture.md` — per-level scope and curriculum systems
- `klarweg-chapter-engine.md` — chapter structure, AI Tutor architecture, color system slots
- `klarweg-decisions.md` — decisions log

**How to use this document:**
This file is the binding implementation contract for visual and interaction design. When a screen, component, or interaction is being built, it is checked against this document. When this document conflicts with `klarweg-os.md` or `klarweg-chapter-engine.md`, the higher-tier file wins. Within its scope — typography values, color hex codes, motion tokens, component specifications, interaction primitives — this document is canonical.

**The single test:**
> *Does this surface feel like Linear, Stripe Docs, Apple Education, and Notion got into language learning — or does it feel like a Tailwind course template?*

If the answer is the first, the surface is on-brand. If the answer is the second, the surface is wrong regardless of what content it carries.

---

## Part 1 — Visual Philosophy

### 1.1 The Klarweg Visual Thesis

Klarweg's product thesis is that German is not random — most learners have just never been shown the system. The visual system exists to make the system *visible* before it becomes *audible* and then *habitual*. Color carries grammatical meaning. Typography carries register and depth. Motion carries cognitive pacing. Space carries respect for the learner's attention.

Everything in this document serves one outcome: a Hindi-speaking learner opens a Klarweg chapter and feels — within five seconds — that this is unlike any German platform they have used, and within five minutes that they understand more German structure than they did the day before. Visual quality is not decoration. It is the product.

### 1.2 The Premium Light Aesthetic

Klarweg's aesthetic register is **premium light**. The canvas is warm off-white, never pure white and never cool grey. Color is reserved — it appears only where it carries meaning (grammar, the Klarweg accent, status states). Ink hierarchy carries the reading order. Type does the work that decoration would do in lesser platforms.

The reference register is the combination of:
- **Stripe Docs** for editorial precision and content density
- **Linear** for restraint, keyboard ergonomics, and quiet authority
- **Apple Education** for warmth and learner respect
- **Notion** for expandable knowledge architecture
- **Figma** for interaction richness

The register is explicitly not:
- **Duolingo / Babbel / Memrise** — childish, mascot-driven, gamified
- **Coaching institute websites** — loud, photo-heavy, urgency-driven
- **Generic SaaS dashboards** — purple gradient hero, Inter everywhere, rounded-rectangle blandness
- **Cyberpunk / dark mode default** — neon on black, glitch effects, holographic chrome

### 1.3 Calmness as a Feature

Calmness is one of Klarweg's defining product features. It is engineered, not accidental.

Calmness rules:
- **No urgency triggers.** No countdown timers (except the explicit Goethe Mode exam timer). No "only 3 left." No exit-intent popups.
- **No mid-interaction interruption.** The AI Tutor never interrupts speaking turns except for Tier 1 communication-breakers. UI follows the same principle — modals do not steal focus mid-reading.
- **No celebratory motion.** No confetti, no fireworks, no "Level up!" zooms.
- **Limited motion.** Movement is purposeful. Anything moving without purpose is removed.
- **Generous breathing room.** Section padding is 88px desktop, 64px mobile. Density is moderate; nothing is crammed.
- **Quiet status changes.** State changes (loading, success, error) are conveyed through hairline color shifts and small icon changes — never animated badges or alarming red.

### 1.4 Intellectual Respect as Design Constraint

The learner is treated as an intelligent adult building a serious future. Every visual decision either signals respect or undermines it.

Respect-signalling decisions:
- Display typography in Fraunces (a real editorial serif), not a generic display sans
- Specific, earned praise in feedback ("Correct Akkusativ for masculine"), never generic ("Great job!")
- No mascot, no avatar, no character — content is the surface
- Information density appropriate to adult readers (not over-spaced like a children's app)
- Keyboard shortcuts that work (Linear-style command palette, `/` for dictionary, `⌘K` for actions)
- Real metadata (chapter timing, section counts, mock numbers) — not decorative numbers

Respect-undermining decisions (forbidden):
- Cartoonish illustrations of grinning learners
- Cheerful emoji throughout the UI
- "Don't worry!" / "You've got this!" reassurance copy
- Streak counters or daily-engagement pressure
- Mascots, avatars, or anthropomorphic helpers
- Marketing-style superlatives in learner-facing copy
- Animated celebration sequences

### 1.5 Restraint Over Expression

Klarweg's visual language is restrained. The decisions that look most premium are usually subtraction: removing a divider, dropping a redundant label, replacing an icon with typography, choosing one color where two were competing.

The restraint discipline:
- **One accent color per surface.** Klarweg accent (deep teal) for primary actions and Can-Do markers. Coral accent for CTAs only. Never both at once.
- **No grammar colors in decoration.** The 51-color system is grammar-only. Backgrounds, icons, dividers, and decorative elements never use grammar tokens.
- **Hairlines, not shadows, by default.** Cards rest flat with a 1px hairline border. Shadows appear only on hover and on raised modal layers.
- **Typography over icons where possible.** A small mono eyebrow ("Beat 3 · Understand") communicates more than a generic icon.

### 1.6 Cognitive Load Philosophy

The visual system actively manages cognitive load. A chapter is not a flat sequence of equally intense sections — it is a deliberately paced curve with effort peaks and consolidation valleys. The visual system encodes this curve.

How the visual system manages cognitive load:
- **Section eyebrows** orient the learner ("Beat 3 · Understand") so they know where they are in the curve.
- **Reading-state vs production-state** sections are visually distinguishable. Reading sections have wider editorial width and serif emphasis; production sections (drills, AI Tutor, writing) have card-based containment and clearer interaction affordances.
- **Generous vertical space between sections** creates a visual rhythm of effort → breath → effort.
- **Grammar coloring intensity** scales with the section's pedagogical purpose. Concept sections are color-rich; Drill sections are color-restrained.
- **Motion stillness in low-load sections** — Examples in the World does not have animation; AI Tutor does.

---

## Part 2 — Typography System

### 2.1 The Three Faces, Four Jobs

| Token | Family | Job |
|---|---|---|
| `--font-display` | **Fraunces** (variable serif) | Display headlines, chapter titles, certificate text, emphatic German italics inline |
| `--font-german` | **Fraunces italic 500** | German content rendered as content (sentences, story bubbles, popup word, dialogue text) |
| `--font-ui` | **Inter** | All UI text — body copy, labels, buttons, navigation, captions |
| `--font-mono` | **JetBrains Mono** | Technical text — IPA, eyebrows, code snippets, grammar role labels, metadata |
| `--font-hindi` | **Noto Sans Devanagari** | Hindi text in all contexts |

**The Fraunces decision** is structural to the brand. Display typography in Inter is generic; in Fraunces it is editorial. German as content rendered in Fraunces italic 500 makes German feel like literature, not exercises. Every German content sentence on Klarweg uses Fraunces — the dialogue, the example sentence in a popup, the writing task sample answer. UI labels and buttons use Inter; German *as content* uses Fraunces.

### 2.2 The Type Scale

| Token | Desktop | Mobile | Use |
|---|---|---|---|
| `display-xl` | 88px | 56px | Homepage hero, landing pages |
| `display-lg` | 64px | 44px | Chapter titles, level overview heroes |
| `display-md` | 48px | 36px | Section heads inside chapters |
| `display-sm` | 32px | 26px | Subsection heads, panel titles |
| `lede` | 22px | 18px | Opening paragraph after a heading, can-do prose |
| `body` | 17px | 16px | Body reading text |
| `body-sm` | 15px | 14px | Secondary body, captions in dense areas |
| `meta` | 13px | 12px | Captions, metadata, labels |
| `eyebrow` | 11px tracked +0.12em uppercase | same | Section eyebrows, status labels |
| `mono-sm` | 11–12px | 11–12px | Mono eyebrows, IPA, technical labels |

### 2.3 Hierarchy Rules

- Display sizes use Fraunces, letter-spacing −0.02 to −0.04em depending on size, line-height 1.05–1.15.
- Body text uses Inter, weight 400, line-height 1.55, letter-spacing −0.005em.
- German content inline in English sentences uses Fraunces italic 500 — never Inter italic, which is unremarkable.
- Eyebrows are always 11–12px, uppercase, +0.12em tracking, in `--ink-tertiary` or a calm role color.
- Never use more than three weights of any face on a single page (typically 400, 500, 700 for Inter; 300, 400, 500 for Fraunces).
- Hindi text uses Noto Sans Devanagari at body weight, line-height matched to surrounding Inter text.

### 2.4 Reading Rhythm

| Property | Body prose | Display | Dense UI |
|---|---|---|---|
| Line-height | 1.65–1.7 | 1.05–1.15 | 1.4 |
| Letter-spacing | −0.005em | −0.02 to −0.04em | 0 |
| Paragraph spacing | 20px | 24px | 12px |
| Measure (max width) | 680px | 720–820px | full |

Editorial reading width (680px max for prose) is non-negotiable. Wider columns degrade comprehension; learner attention spans are not infinite. Long chapter prose stays in the editorial column. Tables, paradigm panels, and multi-column components can extend to 1080–1200px.

### 2.5 Mobile Reading Ergonomics

- Body text on mobile is 16px minimum (never below 15px).
- Line-length on mobile is constrained by viewport with 24–32px side padding.
- Display sizes drop a full tier on mobile (not just scaled proportionally).
- Hindi text uses the same Noto Sans Devanagari at matched body size to preserve readability for Devanagari descenders.
- All text remains zoomable. Never disable pinch-zoom in viewport meta.

### 2.6 Hierarchy Behavior

A page contains at most:
- One `display-xl` or `display-lg` heading
- 2–4 `display-md` section heads
- 4–8 `display-sm` subsection heads
- Body text in `body` (or `lede` for opening paragraphs)
- Eyebrow labels above sections for orientation

Skipping hierarchy levels (e.g., `display-lg` → `body` with no intermediate) creates flat pages that fail to guide the eye. Hierarchy is structural, not stylistic.

### 2.7 Forbidden Typography

- No system serif (Times, Georgia)
- No display sans like Bebas Neue, Anton, Druk, Druk Wide
- No script or hand-drawn fonts under any circumstance
- No all-caps body text — eyebrows only
- No letter-spacing on body text — tracking belongs only to eyebrows and small caps
- No font-style: italic on Inter for German content — use Fraunces italic instead
- No more than three weights per face on a single page

---

## Part 3 — Color and Surface System

### 3.1 Surface Tokens

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#FAFAF7` | Page background — warm off-white, never pure white |
| `--surface` | `#FFFFFF` | Cards, popups, raised elements on top of canvas |
| `--elevated` | `#F4F3EE` | Alternating section backgrounds, subtle elevation |
| `--warm` | `#FFF8EC` | Highlight surfaces, "free chapter" callouts, special framing |
| `--glass` | `rgba(255,255,255,0.7)` | Nav backdrop on scroll |
| `--glass-strong` | `rgba(255,255,255,0.85)` | Sticky CTAs, persistent overlays |

### 3.2 Ink Hierarchy

| Token | Value | Use |
|---|---|---|
| `--ink-primary` | `#0E0E10` | Headings, body emphasis, primary text |
| `--ink-secondary` | `#5A5A60` | Body text, secondary copy |
| `--ink-tertiary` | `#9A9AA0` | Meta, eyebrows, captions, labels |
| `--ink-quaternary` | `#C7C7C2` | Disabled state, decorative ink |

### 3.3 Hairlines

| Token | Value | Use |
|---|---|---|
| `--hairline` | `rgba(14,14,16,0.08)` | Default borders, dividers, card outlines |
| `--hairline-strong` | `rgba(14,14,16,0.14)` | Hover borders, emphasized dividers |
| `--hairline-light` | `rgba(14,14,16,0.04)` | Subtle section dividers when needed |

### 3.4 Shadow Elevation

| Token | Use |
|---|---|
| `--shadow-soft` | Default card lift on hover, chip hover, button hover |
| `--shadow-card` | Resting elevation for pricing cards, AI tutor scenarios |
| `--shadow-lift` | Modal layers, important card hover states |
| `--shadow-modal` | Popup elevation against backdrop |

Shadows are warm-tinted and low-alpha. Never use dark, saturated, or sharp shadows. The reference is iOS / Apple Education shadow softness — depth without weight.

### 3.5 Radius Scale

| Token | Value | Use |
|---|---|---|
| `--r-xs` | 6px | Small inline elements, tag chips |
| `--r-sm` | 10px | Buttons, secondary cards, drill choices |
| `--r-md` | 14px | Primary cards, paradigm panels |
| `--r-lg` | 20px | Hero cards, large containers, Bento tiles |
| `--r-xl` | 24px | Modal layers |
| `--r-full` | 999px | Pills, chips, toggles, color-dot wrappers |

Pills (`--r-full`) are reserved for: toggles, color chips, eyebrows, small inline labels, status dots. Cards default to `--r-md`. Hero and Bento cards use `--r-lg`. Modals use `--r-xl`.

### 3.6 Spacing Scale

`4 / 8 / 12 / 16 / 24 / 36 / 48 / 64 / 80 / 96 / 120`

This scale is binding for all margins, padding, and gap values across the platform. Off-scale values (e.g., 18px, 50px) are forbidden — they signal undisciplined design.

| Spacing context | Value |
|---|---|
| Inline gap (small) | 4 / 8 |
| Component internal padding | 12 / 16 / 24 |
| Card internal padding | 20 / 24 / 32 |
| Component vertical gap | 24 / 36 |
| Section vertical padding | 64 / 80 / 88 / 96 (desktop) · 48 / 64 (mobile) |
| Major section gap | 80 / 120 |

### 3.7 The Color Hierarchy Principle

**Light canvas first, color second, ink last.**

The page background is always near-white. Color is reserved for grammar tokens (the product's vocabulary) and a small set of brand accents:
- Klarweg accent (`--accent`): deep teal `#1F4E4A` for Can-Do markers, primary buttons, scenario header dots
- Coral accent (`--coral`): `#E55A3F` for primary CTAs only
- Spine blue (`--g-subject`): `#185FA5` for focus rings (uses the grammar Subject color intentionally)

Ink hierarchy carries reading order. Color carries grammatical meaning. The page does not feel busy despite carrying 51 color tokens because they are *contained* within grammar artifacts and never spill into decoration.

---

## Part 4 — Grammar Interaction System

### 4.1 The 51-Color Grammar Contract

The 51-color system is Klarweg's most important visual asset. It is the contract that makes the language's structure visible at a glance.

The technical token registry follows the four-tier structure in `klarweg-chapter-engine.md` Part C: 16 case+gender colors + 8 verb roles + 10 structural roles + 17 functional/accent roles = 51. The pedagogically emergent organization clusters the most-used tokens into the **Spine 5**:

| Spine role | Maps to token | Hex | Visible name |
|---|---|---|---|
| Subject | `--g-subject` (Nom·family base) | `#185FA5` | Blue |
| Main Verb | `--g-verb` (V2-position) | `#DC2626` | Red |
| Object | `--g-object` (Akk·family base) | `#2E7D32` | Green |
| Time | `--g-time` | `#7C3AED` | Purple |
| Place | `--g-place` | `#EA580C` | Orange |

The Spine 5 appears in every sentence at every level. Learners commit them to memory within the first chapter. Cases (Akkusativ emerald, Dativ olive, Genitiv bronze) layer on top of the Spine when the chapter focus is case-specific. Gender shading within case families (4 shades per case) extends the system at A2+ when adjective endings and article precision require finer distinction.

The full hex registry for all 51 tokens lives in `klarweg-design-tokens.json` (versioned). Selected canonical values (the Spine 5 plus the most-used case and modifier tokens) are defined here as binding reference:

| Token | Hex | Role |
|---|---|---|
| `--g-subject` | `#185FA5` | Subject (Nominativ base) |
| `--g-verb` | `#DC2626` | Main verb (V2 position) |
| `--g-object` | `#2E7D32` | Object (Akkusativ base) |
| `--g-time` | `#7C3AED` | Time expression |
| `--g-place` | `#EA580C` | Place expression |
| `--g-akkusativ` | `#10B981` | Akkusativ case marker (emerald) |
| `--g-dativ` | `#5C7A1D` | Dativ case marker (olive) |
| `--g-genitiv` | `#A06B2C` | Genitiv case marker (bronze) |
| `--g-modalverb` | `#9F1239` | Modal verb (ruby) |
| `--g-article` | `#B45309` | Article (copper) |
| `--g-preposition` | `#CA8A04` | Preposition (yellow-gold) |
| `--g-negation` | `#C026D3` | Negation (magenta) |
| `--g-adjective` | `#F59E0B` | Adjective (amber) |
| `--g-adverb` | `#06B6D4` | Adverb (cyan) |
| `--g-question` | `#EC4899` | Question word (pink) |

### 4.2 Inline Grammar Coloring Rules

When a German word appears in a sentence with grammatical role coloring:

- The word is wrapped in `<span class="de r-{role}" data-word="{key}">`
- `color: var(--g-{role})` applies the token color
- `font-weight: 500` is the standard weight for colored words — never bold; color is the emphasis
- The word retains Fraunces italic if it appears inline in English prose; Fraunces upright if it appears in a German content block
- The optional `.c-{case}` class adds case context for advanced rendering (e.g., underline color)

### 4.3 The Live Sentence Parser

The live parser is the chapter engine's most teachable interaction surface. It must appear in every chapter that introduces or reinforces a grammatical concept.

**The parser behavior:**

1. A sentence is shown with all colored words rendered in their role colors.
2. Above the sentence, mono-font role labels appear (e.g., `NOM·M`, `V2`, `AKK·M`) tied to each colored word.
3. A toggle ("Roles visible · Roles hidden") lets the learner show or hide the role labels and color emphasis.
4. With roles hidden, the sentence reads in plain ink — the same German text, no color emphasis.
5. With roles visible, the colors animate in (400ms ease-out fade + 1px translateY) and the labels appear above each word.
6. The toggle is sticky to the parser component; learners can flip mid-reading.

**Why it matters:** the parser teaches learners that German has *structure*, not chaos. Seeing color animate onto words and then disappear is the visual proof that German is parseable — and that they are learning the parsing.

### 4.4 Hover and Tap Word Interactions

Every German word inside a chapter is interactive at two levels:

**Level 1 — Hover (desktop) / press-and-hold (mobile): the role tooltip**
- A tooltip appears above the word showing the role label in mono font (e.g., `NOMINATIV · MASCULINE`) plus the role color as a small dot
- Tooltip duration: 180ms fade-in, persists while hovered
- Tooltip background: `--ink-primary` with `--canvas` text — high contrast for readability
- Mobile alternative: a single tap surfaces the tooltip; a second tap opens the full popup

**Level 2 — Tap / click: the WORDS popup**
- Full popup with the 10-field WORDS contract (see Part 5)
- Backdrop dims the page; popup centers on desktop, bottom-sheets on mobile
- Open motion: scale 0.96 → 1.0, opacity 0 → 1, translateY +6px → 0, duration 240ms with `--ease`
- Close: reverse, 180ms

### 4.5 Sentence Decomposition Choreography

When a chapter teaches a new grammatical concept (e.g., Akkusativ), the Concept section includes a sentence decomposition sequence:

1. Sentence appears in plain ink (no colors). Learner reads it.
2. After a short pause (or on tap), roles animate in: colors fade onto words at 80ms staggered intervals, labels appear above with 60ms stagger.
3. Each role's color follows the order: Subject → Verb → Object → Time → Place (the Spine order).
4. The completed colored sentence remains. Learner can hover any word for role info.
5. A toggle below the sentence lets the learner replay the decomposition.

The choreography is intentional pacing — it teaches the learner to *see* the parse, not just be presented with it.

### 4.6 Cross-Chapter Color Persistence

A grammar token's color is identical wherever it appears across the entire platform. The Akkusativ color a learner sees in A1 Chapter 17 is the exact same hex in B1 Chapter 22. This persistence is what allows the color system to become an internal mental model.

Implementation discipline:
- All grammar colors are CSS custom properties referenced through `var(--g-{role})`
- Hex values are defined exactly once (in the design tokens file)
- No surface "tints" or "shifts" a grammar color for local context
- A new role requires (a) a new token, (b) a new accent entry in the lookup, (c) documentation update — in the same change

### 4.7 The Sticky Grammar Helper

A floating element pinned to the lower-right corner of the chapter viewport, available throughout the chapter, provides a grammar legend on demand.

**Behavior:**
- A 44px circular button labeled `Aa` (Fraunces italic) sits at `position: fixed; bottom: 24px; right: 24px; z-index: 50`
- On tap/click, the legend panel expands above the button (280px wide, `--shadow-modal`, `--r-lg`)
- The legend shows: the active grammar tokens used in the current chapter, with color dot, role name, and subtokens
- Tapping a row in the legend optionally highlights all instances of that role in the current viewport (advanced feature; v2)
- On scroll, the helper button slightly reduces opacity (0.85) to stay unobtrusive

**Why it matters:** the legend eliminates the "what does this color mean again?" friction. Learners get a quiet reference always within thumb reach.

### 4.8 Grammar Motion Philosophy

Motion involving grammar coloring follows three principles:

1. **Color appears, never flashes.** Colors fade in over 300–400ms. They never pulse for attention.
2. **Role labels are secondary to color.** Labels appear after the color settles (with a 60–120ms delay) so the color is the primary recognition cue.
3. **Decomposition reveals structure once, not repeatedly.** When a sentence is parsed in front of the learner, the animation happens once on first appearance. Subsequent visits replay the same sentence in its final colored form, not the animation.

---

## Part 5 — WORDS Interaction System

### 5.1 The Popup Contract

When a learner taps a `.de[data-word]` element, a popup opens containing 10 fields in this order:

1. **Word** — German word in display font (Fraunces, 32px), colored in its role color
2. **Pronunciation** — Hindi-friendly phonetic gloss (e.g., `KOR-fee`) in mono font, `--ink-secondary`
3. **IPA** — international phonetic in mono, smaller, `--ink-tertiary`
4. **Audio button** — circular button, plays the word at 1× by default; long-press surfaces Slow / Very slow
5. **English translation** — single best translation, no synonyms, `--ink-primary`
6. **Hindi translation** — clean Devanagari, idiomatic not literal, `--ink-primary`
7. **Role badge** — pill with colored dot + role name ("● Verb"), color matches word
8. **Case badge** — only if applicable ("Akkusativ"), shown as secondary pill
9. **Why** — one sentence explaining the grammatical role in context, `--ink-secondary`
10. **Example** — short German sentence using the word (4–8 words), colored per Spine, with English translation below

### 5.2 Visual Rules for the Popup

- Card width: 360px desktop, full-width minus 24px on mobile
- Backdrop: blur (`backdrop-filter: blur(20px)`) + low-alpha ink dim (rgba(0,0,0,0.35))
- Card background: `--surface`, `--r-lg`, `--shadow-modal`, 1px hairline border
- Dismissal: click outside, Esc key, or X button top-right
- Focus trap on open; focus return to triggering word on close
- Scroll lock on body while open

### 5.3 Pronunciation Interactions

The audio button on the popup is one of Klarweg's most premium interactions. It must feel polished.

**The button states (state machine):**

| State | Visual | Sound |
|---|---|---|
| `idle` | White surface, hairline border, play icon `▶` | None |
| `loading` | Subtle pulse, slight opacity reduction | None |
| `playing` | Filled with role color, pause icon `❚❚`, faint animated waveform underline | German pronunciation |
| `complete` → `idle` | Brief settle animation, returns to idle | None |

**Long-press behavior:** holding the button for 600ms surfaces a secondary menu with Slow (0.75×) and Very slow (0.4×) options. The menu is a small popover above the button; selecting an option plays the word at that speed.

**Audio engine (KW_Audio):** the global audio module per the previous OS Part 8. Web Speech API at Year 1 (near-zero cost), with the following architectural commitments:

- Female and male German voices selected at load time via name heuristics
- Pitch + rate offsets differentiate the voices when only one German voice exists on the device (dialogue female: pitch 1.5, rate ×1.05; dialogue male: pitch 0.5, rate ×0.95; default non-dialogue: pitch 1.0)
- Rate routing: ≥0.9 = single utterance, <0.9 = word-by-word with inter-word pauses (150ms at 0.75×, 400ms at 0.4×)
- iOS Safari workaround: 150ms inter-bubble delay in dialogue chains
- Stop contract: `stop()` cancels current speech and clears the dialogue queue; `stop({preserveDialogue: true})` keeps the chain alive (used internally between bubbles)

### 5.4 Contextual Memory Design

The popup does not exist in isolation — it is informed by the learner's accumulating context.

- Words the learner has encountered before show a small mono indicator (`seen 4×`) below the role badge.
- Words the learner has had Tier 1 or Tier 2 errors on show a discreet review marker (e.g., a small dot in the corner of the role badge).
- Words from the Sentence Garden (Section 13 of chapter) show a `🌱 In your garden` indicator.

These indicators are subtle, never alarming, and always factual.

### 5.5 Progressive Disclosure

The popup shows the full 10-field structure by default. Two optional progressive disclosures:

- **Word family** (optional expand): tapping the word at the top opens a small family view showing the word in different forms (verb conjugation, noun cases, related compounds). Closes on second tap or outside click.
- **More examples** (optional expand): below the canonical example, a small button "+ 2 more examples" reveals additional usage examples from across the curriculum.

Both are gated behind explicit interaction. The default popup view stays compact.

### 5.6 Word Family Visualization

For advanced WORDS entries (B1+), the word family expand surfaces a small visual graph showing related words with role-color edges. The visualization uses:

- The base word in the center
- Related forms (conjugations, cases) arrayed around it, connected by colored hairlines
- Each related word is clickable, opening its own popup in place

This is a v2 feature, documented here as the canonical pattern.

### 5.7 Audio Button States Across the Platform

Every audio button on Klarweg — whether on the WORDS popup, on a dialogue bubble, on a sentence with `data-playable`, or on the AI Tutor scenario — uses the same `data-state` machine: `idle | loading | playing`. CSS keys off `data-state` for icon, label, and animation. State transitions go through one function (`setState(button, newState)`) — no scattered state mutations.

### 5.8 Forbidden in WORDS Interactions

- Never show etymology or word origin (wrong surface)
- Never show difficulty ratings, frequency rankings, or CEFR level labels in the popup
- Never let the popup scroll internally if avoidable — if content is too long, the content is wrong
- Never use English-only emphasis (bold/italic) on Hindi or German — colors and font already encode emphasis
- Never play overlapping audio — always `stop()` before `speak()`
- Never autoplay any audio without user gesture
- Never gate any popup interaction behind a paywall — popups are core platform infrastructure

---

## Part 6 — Motion System

### 6.1 Motion Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | Hover state changes, focus ring, color transitions |
| `--dur-base` | 240ms | Buttons, chips, toggles, popup open |
| `--dur-slow` | 400ms | Modal appear, section reveals, decomposition stagger |
| `--dur-xl` | 600ms | Collapsible reveals, cinematic transitions |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default ease-out (cinematic, no bounce) |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material-style ease (collapsibles) |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.6, 1)` | Symmetric transitions (rare) |

### 6.2 Interaction Timing

- **Hover state changes:** 150–180ms ease-out
- **Color transitions:** 200ms ease
- **Button press feedback:** instant down, 150ms ease-out return
- **Toggle state changes:** 240ms ease
- **Card hover lift:** 240ms ease (transform + shadow)
- **Popup open:** 240ms ease (backdrop fades 200ms, card slides 240ms)
- **Section reveal on scroll:** 600ms ease, IntersectionObserver-triggered
- **Collapsible open:** 360–500ms ease-soft (height animates from 0 to scrollHeight, then to `none` after transitionend)

### 6.3 Hover Behavior

The canonical hover pattern across the platform:

- **Hover lift:** `transform: translateY(-1px)` for chips and buttons; `translateY(-2px)` for cards
- **Border darkens:** from `--hairline` to `--hairline-strong`
- **Shadow appears:** from `none` to `--shadow-soft`
- **Cursor:** `pointer` for clickables, `help` for tooltip-bearing words, `text` for selectable

Never use `transform: scale()` on hover — it creates a "blowing up" feel that's anti-premium. Translate Y with a soft shadow is the Klarweg signature.

### 6.4 Focus State Animation

Focus rings are visible only on `:focus-visible` (keyboard navigation), never on mouse click.

- Color: `--g-subject` (the Spine blue) — reusing the grammar Subject color intentionally
- Width: 2px solid
- Offset: 3px
- Transition: 150ms ease-out fade-in

This means every keyboard user sees Klarweg's grammar Subject blue every time they focus an element — a small consistent reinforcement of the color system.

### 6.5 Reveal Patterns

When a section scrolls into the viewport, it reveals with:

- Opacity: 0 → 1
- Transform: `translateY(8px)` → `translateY(0)`
- Duration: 600ms
- Easing: `--ease`
- Trigger: IntersectionObserver at 8% threshold, with `rootMargin: 0px 0px -40px 0px`
- Once-only: observer disconnects after first trigger

This creates the Stripe-Docs-style scroll choreography without performance cost or visual noise.

### 6.6 Collapsible Reveals

When a collapsible block opens (e.g., a Hindi bridge block, an Insight panel):

- JS measures `scrollHeight` of the content
- Sets `max-height` to that value, transitions 360–500ms with `--ease-soft`
- After transitionend, sets `max-height: none` so future reflow does not clip

The chevron indicator rotates 180deg over 240ms during the transition.

### 6.7 Audio-Coupled Word Highlighting

During word-by-word audio playback, each word in the sentence is highlighted as it's spoken:

- Highlight = subtle background tint of the word's role color (alpha ~12%)
- Fade in 150ms / fade out 250ms
- Never a strong/saturated highlight — it feels like a karaoke ribbon, not a stage light
- Active class: `.is-active` toggled by audio engine `onstart` / `onend` handlers

### 6.8 Popup Motion

- **Backdrop appear:** opacity 0 → 1 over 200ms
- **Card appear:** scale 0.96 → 1.0, opacity 0 → 1, translateY +6px → 0, over 240ms with `--ease`
- **Card dismiss:** reverse direction, 180ms (faster than open — dismissal should feel responsive)
- **Backdrop dismiss:** opacity 1 → 0 over 180ms

### 6.9 Emotional Pacing Through Motion

Motion is a pacing tool. The visual system uses motion to encode emotional rhythm:

- **Entry to a new section** is calm — fade and gentle translate, never a dramatic reveal
- **Interaction feedback** is instant in the response (no waiting), but the visual confirmation takes 240ms — long enough to feel acknowledged, short enough to feel responsive
- **State transitions** in the AI Tutor (turn complete → feedback card) take 480ms with stagger — the slight wait creates a "the system is thinking carefully" moment without being slow
- **Section transitions on scroll** are 600ms — long enough to feel cinematic, short enough not to lag perception

The discipline: **slow enough to be felt, fast enough to be invisible.**

### 6.10 Forbidden Motion

- No bounce easing
- No spring physics
- No rubber-band overshoot
- No spinning loaders for content (only briefly for audio loading)
- No parallax on text or critical content
- No autoplay carousels
- No "shake on error" animations
- No celebration animations (confetti, fireworks, "Level up!")
- No `transform: scale()` on hover
- No animated gradients on backgrounds
- Respect `prefers-reduced-motion: reduce` — all transitions become instant (0.01s)

---

## Part 7 — AI Tutor Visual Language

### 7.1 The Conversation UI

The AI Tutor is rendered as a contained scenario card, not a floating chatbot window. This visual decision is structural to the brand — Klarweg's AI Tutor is a pedagogical surface, not a chat assistant.

**The scenario card:**
- Container: `--surface`, `--r-xl`, 1px hairline border, generous internal padding (32px)
- Header strip: 16px vertical padding, hairline bottom border, soft accent tint background
- Status dot: 8px circle, `--accent` color, 3px ring at 18% alpha (status: active)
- Scenario ID in mono eyebrow: `Scenario 1 · A1·CH17·S01`
- Estimated duration in mono: `~ 8 min · 4 turns`
- Body: scene setup + turn sequence + response area / feedback area

### 7.2 Turn Structure

Each conversation turn renders as:

- **Speaker label** (11px, weight 600, role color, `0.06em` letterspacing, uppercase): `ANNA` or `YOU`
- **Audio play indicator** (small `▶ play` button, `--ink-subtle`)
- **Text** (Fraunces 22px, line-height 1.4, `--ink-primary`, `-0.01em` letterspacing)
- **Translation** (Inter 13px italic, `--ink-tertiary`)

Speaker colors:
- Anna (or any female native voice): `--g-akkusativ` emerald, or the chapter's primary case color
- Rohan (or any Indian-German voice): a distinct warm color (e.g., `--g-modalverb` ruby)
- Other voices: assigned consistent colors per character within the chapter
- "YOU" (learner): `--accent` deep teal

### 7.3 The Input Field

The input is one of the most important visual surfaces in the AI Tutor. It signals respect for the learner's production.

- Container: textarea, 2 rows minimum, autoresize
- Font: **Fraunces 17px** — German content rendered as the editorial face it deserves, not generic Inter
- Background: `--canvas` (slightly elevated against `--surface`)
- Border: 1px `--hairline-strong`, transitioning to `--accent` on focus with 3px `--accentSoft` ring
- Submit button: filled `--ink-primary` rectangle with `--canvas` text, disabled state when empty
- Submit hint: mono `⏎ to send` below the input
- Speaking alternative: a small `🎙 Speak instead` button with underline link styling
- Microcopy: "Klarweg listens until you finish — no mid-sentence interruptions." (calm, declarative)

### 7.4 The 3-2-1 Feedback Card Design

The feedback card is the canonical post-interaction surface. Its structure is fixed; its content varies.

**Card structure (top to bottom):**

1. **Header strip** — mono eyebrow: `◆ TURN FEEDBACK · 3-2-1`, color `--accent`
2. **3 strengths section** — uppercase tracked label "3 things you did well" + bulleted list, 15px body, 1.7 line-height
3. **2 refinements section** — uppercase label "2 to refine" + bulleted list with Tier 1/Tier 2 distinction
4. **1 priority section** — uppercase label "1 priority for next attempt" + single emphasized sentence
5. **Footer** — bottom-bordered hairline, italic forward-pointing message ("Ready for turn 2: Anna asks if you'd like milk.")

**Card visual:**
- Background: `--accentSoft` for correct responses; `--akkTint` for Tier 1 errors; warm yellow tint for Tier 2 errors
- Border: 1px matching the tint family at 18% alpha
- `--r-md` radius, 20px padding
- Reveal animation: 480ms `klarwegReveal` (opacity + translateY) on first appearance

### 7.5 Three-Tier Error Styling

Error feedback varies visually by tier — the visual language encodes the severity.

**Tier 1 (structural):**
- Container background: `--akkTint` (light terracotta wash, the Akkusativ-family tint reused as a "structural attention" signal)
- Border: 1px `rgba(122, 45, 45, 0.18)`
- Tier badge: small dark Akkusativ-color pill with white text `TIER 1 · STRUCTURAL`
- Includes: rule reference (e.g., `A1·CH17·Akkusativ-M`)

**Tier 2 (Hindi-interference):**
- Container background: warm yellow tint `rgba(122, 93, 58, 0.06)`
- Border: 1px `rgba(122, 93, 58, 0.18)`
- Tier badge: small warm-brown pill `TIER 2 · HINDI PATTERN`
- Includes: Hindi Error Library reference (e.g., `HE-002`)

**Tier 3 (acceptable):**
- Never surfaced mid-interaction
- Tracked silently in Competence Map
- Surfaced (if pattern emerges) in the periodic style review at chapter close — visual treatment is calm and aggregated, never alarming

### 7.6 The Speaking Exception in UI

The speaking exception (per Decision 5) is a UI commitment, not just a policy. The interface enforces it.

**Visual signals of the speaking exception:**

- Below the input field: the explicit microcopy "Klarweg listens until you finish — no mid-sentence interruptions."
- During an in-progress speaking turn, no UI elements move, flash, or interrupt — even if the system has detected errors. Errors are queued for end-of-turn surfacing.
- The submit button stays calm and ready — no rush, no time pressure (except in explicit Goethe Mode).
- Recovery interaction: if a learner has 3+ errors in a scenario, the AI Tutor offers a simplified version with one-word prompts and pre-filled scaffolding. The offer is calm and respectful — "Would a simpler version of this scenario help right now?" — never humiliating.

### 7.7 Examiner Mode (Goethe)

At B1 and B2, scenarios have an optional **Goethe Mode** toggle that simulates the Goethe Sprechen exam.

**Visual signature of Goethe Mode:**
- Header strip shifts to a Goethe-authentic visual style (double-line border, official-looking framing)
- Timer appears prominently — large mono numerals, calm but undeniable (`2:00` countdown)
- Eyebrow changes: `GOETHE B1 SPRECHEN · TEIL 2`
- Scenario format follows Goethe structure (preparation time, monologue time, follow-up questions)
- Feedback maps to Goethe rubric: Inhalt (content), Wortschatz (vocabulary), Strukturen (structures), Aussprache (pronunciation), Interaktion (interaction)
- Score estimate appears in feedback: `Based on this performance, you would likely score X/Y on Goethe B1 Sprechen Teil 2`

The visual shift signals exam-realism without anxiety induction — calm framing, factual scoring, no alarm.

### 7.8 Forbidden in AI Tutor UI

- Never style the AI Tutor as a floating chat window with a friendly bubble icon
- Never give the AI Tutor a name beyond "Klarweg" or "your Klarweg tutor"
- Never give the AI Tutor an avatar, face, or anthropomorphic animation
- Never use generic chat-bubble UI (left/right alignment, rounded corners only on one side, etc.) — the conversation UI uses the canonical turn structure above
- Never auto-advance to the next turn — the learner controls pace
- Never use emoji in feedback content (the eyebrow `◆` and arrows `→` are structural, not decorative)
- Never include marketing CTAs inside the tutor surface

---

## Part 8 — Cognitive Flow System

### 8.1 The Cognitive Load Curve as Visual Rhythm

Per `klarweg-chapter-engine.md` Part A.5, every chapter follows a cognitive load curve: low → high → moderate → low → high → low. The visual system encodes this curve through section-level visual choices.

| Section type | Visual mode | Color density | Motion |
|---|---|---|---|
| Frame (Section 1) | Reading-state, editorial | Low (only Can-Do accent) | Calm fade-in |
| Hook (Section 2) | Reading-state, narrative | Medium (1 color comparison) | Calm fade-in |
| Concept (Section 3) | Reading-state, high-density | High (full color system on display) | Decomposition motion |
| Examples in World (Section 4) | Reading-state, gallery | Medium | Static |
| Dialogue (Section 5) | Reading + listening | Low | Audio-coupled highlights only |
| WORDS (Section 6) | Reference, scannable | Medium | Hover-driven motion |
| GRAMMAR Panel (Section 7) | Reference, dense | High | Static |
| Drills (Section 8) | Production, focused | Medium | Interaction-driven motion |
| Watch-Out (Section 9) | Reading, calm | Low | Static |
| AI Tutor (Section 10) | Production, conversational | Medium | Real-time interaction motion |
| Goethe Hook (Section 11) | Production, exam-style | Medium | Static, calm |
| Writing (Section 12) | Production, focused | Low | Input-driven motion |
| Close (Section 13) | Landing, reflective | Low (one Klarweg accent) | Calm fade-in |

### 8.2 Section Transitions

Section transitions are signaled by:

- **Generous vertical space** — 64–80px between sections on desktop, 48–64px on mobile
- **Eyebrow label** — mono 11px, tracked +0.12em, uppercase, opening every section: `BEAT 3  ─  UNDERSTAND · THE AKKUSATIV`
- **No decorative dividers** — no horizontal rules, no decorative lines, no visual barriers. Space is the divider.
- **Optional in-between hairline** — a single 1px line only at major phase-level transitions, never between adjacent sections

### 8.3 Reading-State vs Production-State

The visual system distinguishes reading sections (where the learner is taking in information) from production sections (where the learner is producing language).

**Reading-state sections** (Frame, Hook, Concept, Examples, Dialogue, Watch-Out, Close):
- Editorial column width (max 720px for prose)
- Body type at 17–18px, generous line-height
- Hairline borders only; minimal card containment
- Lower color density; one accent at a time
- Calm motion; static elements predominate

**Production-state sections** (Drills, AI Tutor, Writing Task):
- Wider column width when needed (up to 1080px)
- Card-based containment to focus the learner on the production surface
- Clearer interaction affordances (buttons, inputs, toggles)
- Higher motion responsiveness — every interaction has immediate visual feedback
- Color used to scaffold the production (e.g., color-coded paradigm tables in drill 3)

### 8.4 Breathing Room as Primary Design Element

Vertical space between sections is treated as a positive design element, not as empty space to be filled. Klarweg's section padding (88px desktop default) is deliberately generous.

Rules:
- Section padding is non-negotiable. Compressing it to fit "more on screen" is a brand violation.
- Within a section, white space between major components is at least 24px.
- Around the editorial reading column, side margins on desktop are 32px minimum; on mobile, 24px minimum.
- Empty space around a Can-Do bar or a key callout is the visual signal of "this matters."

### 8.5 The Focus-State Reading Mode

For longer reading passages (Concept teaching block, Watch-Out explanation, Dialogue transcripts), the visual system supports a **focus-state** reading mode:

- The header subtly fades to 0.6 opacity on scroll into a reading section
- The Grammar Helper rail dims to 0.85 opacity
- The Command hint disappears
- Background motion (if any) pauses
- Side margins narrow slightly, pulling the reading column to the visual center

The mode is non-toggleable — it activates automatically based on scroll position and section type. Returning to a production section reverses these effects.

### 8.6 Immersion Mechanics

Klarweg creates immersion not through gamification or audio-visual spectacle, but through quiet design discipline:

- **Persistent typography** — the same Fraunces serif appears in every chapter, creating a recognizable reading rhythm
- **Persistent color system** — the same Spine 5 in every chapter, building an internal mental model
- **Persistent interaction primitives** — tap a word for popup, hover for tooltip, anywhere on the platform
- **Persistent voice** — the calm Klarweg voice in every microcopy, error message, button label
- **Persistent layout architecture** — the same 13-section chapter structure, the same eyebrow labels, the same vertical rhythm

After 2–3 chapters, the learner stops noticing the platform and starts noticing the language. That is immersion.

### 8.7 Reading Fatigue Prevention

Long chapters (2.5–5 hours of learner time per chapter) require fatigue management:

- **Section eyebrows** orient the learner without overwhelming them
- **Beat markers** signal where they are in the chapter (Beat 3 of 9)
- **Save state implicit** — the learner can leave at any section and return to the exact same point
- **No required sequential consumption** — sections can be revisited, skipped temporarily, or returned to
- **Calm progress indicators** — segment dots, never percentage bars that create completion anxiety
- **No timed pressure** outside explicit Goethe Mode

---

## Part 9 — Mobile Interaction Philosophy

### 9.1 Mobile-First Reading Comfort

A significant fraction of Klarweg learning happens on mobile — on commutes, during breaks, in the evening. Mobile is not a degraded experience; it is a first-class surface.

Mobile design principles:
- Reading width is full viewport minus 24–32px side padding
- Type sizes drop one tier from desktop (display sizes especially)
- Section padding compresses ~25% (88px → 64px desktop → mobile)
- Cards, popups, and modals adapt to bottom-sheet pattern below 540px viewport width
- All hover-only affordances have tap equivalents

### 9.2 Thumb Ergonomics

The bottom one-third of the mobile viewport is the thumb-reach zone. Primary actions live there:

- Primary CTAs are positioned in the bottom-third when possible
- Sticky CTAs (e.g., "Continue chapter") fit within 56px vertical maximum
- The Grammar Helper rail's button is positioned at `bottom: 24px; right: 24px` — comfortably within thumb reach
- The Command hint on mobile is suppressed (replaced with a tap-on-`Aa` discovery surface)

### 9.3 Touch Target Sizes

Minimum tap target: **44 × 44px**. This is non-negotiable.

- Buttons that look smaller (audio `.sb`, chevrons, close X) get invisible padding to meet 44px hit area
- Toggles, pills, and inline links are explicitly sized for finger taps
- Multiple adjacent tap targets have ≥8px gap between them to prevent mis-taps

### 9.4 Mobile Popup Adaptation

On mobile (< 540px viewport):
- Popups slide up from the bottom edge instead of centering
- Width is 100% with side margins
- Max-height is 70vh with internal scroll if content exceeds
- Backdrop covers full viewport, tap-to-dismiss
- Audio buttons stay finger-friendly (44px target)
- The 10-field WORDS popup adapts to a scrollable bottom-sheet preserving the field order

### 9.5 Mobile-First Grammar Interactions

On mobile, the hover tooltip is replaced by a single-tap reveal:
- First tap: shows the role tooltip (200ms fade-in, persists until next tap)
- Second tap on same word: opens the full WORDS popup
- Tap on a different word: dismisses the first tooltip, surfaces the second

The Live Sentence Parser toggle is positioned within thumb reach.

### 9.6 Mobile Scroll Pacing

- Section reveals on scroll work identically on mobile (IntersectionObserver-based)
- The Grammar Helper rail is positioned to avoid the bottom system gesture zone on iOS (24px clearance minimum)
- The command hint is suppressed on mobile (replaced by a discoverable `⌘K` button only on desktop)

### 9.7 Audio Resilience on Mobile

- iOS Safari can drop a queued speech utterance if there's no delay between cancel and speak — the 150ms inter-bubble delay is the workaround
- On devices with only one German voice, distinctness comes from pitch (0.5/1.5) + rate offset (×0.95/×1.05) — pitch alone is not enough
- Always test dialogue playback on a real iPhone and a real Android phone before shipping changes to KW_Audio
- The audio button states must remain visible and clear even on a small viewport

### 9.8 Mobile-Specific Forbidden

- Never show three-or-more columns of dense content
- Never use hover-only affordances without tap equivalents
- Never fix navigation as a sticky element that consumes more than 56px of vertical space
- Never use `user-scalable=no` in meta viewport — learners must be able to zoom German text
- Never override the system gesture areas on iOS/Android

---

## Part 10 — Premium Interaction Principles

### 10.1 The Reference Register

The interactive register is the synthesis of:

- **Linear** — keyboard-first, command palette, quiet authority, monospace metadata
- **Apple Education** — warm canvas, generous spacing, learner respect
- **Stripe Docs** — editorial typography, sophisticated color usage, inline code-like callouts
- **Notion** — expandable knowledge blocks, layered explanations
- **Figma** — interaction richness without showing off

The register is NOT:
- A Duolingo-style "tap-tap-tap" cadence with mascot reactions
- A coaching-website "BUY NOW" loudness
- A generic LMS "you have completed module 3 of 8" progress bar pressure
- A Tailwind-template card-grid-card-grid blandness

### 10.2 Keyboard-First Ergonomics

Every interactive element is keyboard-reachable. Key shortcuts that signal "this is a real tool":

| Shortcut | Action |
|---|---|
| `/` | Focus dictionary search |
| `⌘ K` / `Ctrl K` | Open command palette |
| `Esc` | Close popup, modal, or expanded panel |
| `Enter` (in input) | Submit response |
| `Shift + Enter` | New line in textarea |
| `Tab` | Navigate forward |
| `Shift + Tab` | Navigate backward |
| `Space` | Toggle audio playback on focused audio button |

### 10.3 The Command Hint

A small persistent affordance in the lower-left of the chapter viewport signals the keyboard ergonomics:

```
┌──────────────────────────────────┐
│ ⏎ / dictionary  ·  ⌘ K command   │
└──────────────────────────────────┘
```

- Position: `fixed; bottom: 24px; left: 24px; z-index: 50`
- Background: `rgba(27, 27, 31, 0.85)` with `backdrop-filter: blur(20px)`
- Color: `--canvas` text, mono 11px
- Opacity: 0.7 default, 1.0 on hover
- Suppressed on mobile (different ergonomics)

### 10.4 Glass Surfaces (Sparing)

Glass / blur backdrops appear in exactly three places on Klarweg:

1. **Sticky header on scroll** — `--glass-strong` background, `backdrop-filter: saturate(180%) blur(20px)`, appearing when scroll Y > 40px
2. **Command hint** — `rgba(27, 27, 31, 0.85)` with blur
3. **Popup backdrop** — semi-transparent dim with `backdrop-filter: blur(8px)`

Nowhere else. Glass surfaces are a finite design budget; spending them on decoration cheapens them.

### 10.5 Subtle Status Indicators

Status changes use minimal indicators:

- A small filled dot before a section label signals "active"
- An empty circle signals "available but not active"
- A hairline beneath a tab signals "selected"
- A small `seen 4×` mono caption signals encounter history

No animated badges. No exclamation-mark notifications. No badge counters with red backgrounds.

### 10.6 Forbidden in Premium Interaction

- Never use `position: fixed` for elements that compete with reading attention (notifications, popups for non-critical info, "feature tour" overlays)
- Never auto-trigger any modal, popup, or expanded panel without explicit user action
- Never use cursor: pointer on non-interactive text
- Never include marketing CTAs inside the chapter learning surface (only at the Close section)

---

## Part 11 — Component Interaction Standards

This section defines the canonical visual + interaction patterns for every reusable component in Klarweg. Component implementations follow these patterns; new components must be added to this section before being built.

### 11.1 Card

Resting state:
- Background: `--surface` (white)
- Border: 1px `--hairline`
- Radius: `--r-md` (14px)
- Padding: 20–24px
- Shadow: none

Hover state (if interactive):
- Border: 1px `--hairline-strong`
- Shadow: `--shadow-soft`
- Transform: `translateY(-2px)`
- Transition: 240ms `--ease`

Active state (mid-press):
- Transform: `translateY(0)`
- Shadow: `--shadow-soft` (retained briefly)

### 11.2 Pill / Chip

- Padding: 4px 10px (small) / 6px 14px (default) / 8px 16px (large)
- Radius: `--r-full`
- Font: Inter 11–13px
- Background: `--surface` with 1px `--hairline` border (default) or saturated background with white text (status pills)
- Hover (if interactive): border darkens to `--hairline-strong`

### 11.3 Toggle (The "Roles Visible" Pattern)

- Container: button with 1px hairline border, padding 6px 10px, `--r-sm`
- Toggle track: 24px wide, 12px tall, `--r-full`, `--accent` when on / `--hairline-strong` when off
- Toggle knob: 10px circle, `--surface`, slides from left (off, 1px inset) to right (on, 13px inset) over 240ms `--ease`
- Label: Inter 12px to the right of the track
- Whole component is clickable; transition is smooth

### 11.4 Button

**Primary:**
- Background: `--ink-primary` (`#0E0E10`)
- Color: `--canvas`
- Padding: 14px 20px
- Radius: `--r-sm` (10px)
- Font: Inter 14px weight 500
- Hover: subtle lift (translateY(-1px)), no color change

**Secondary:**
- Background: transparent
- Color: `--ink-primary`
- Border: 1px `--hairline-strong`
- Hover: border darkens to `--ink-primary`

**Ghost:**
- Background: transparent
- Color: `--ink-secondary`
- No border
- Hover: background becomes `rgba(0,0,0,0.04)`

### 11.5 Popup / Modal

- Container: `--surface`, `--r-xl` (24px), `--shadow-modal`, 1px hairline border
- Backdrop: `rgba(0,0,0,0.35)` with `backdrop-filter: blur(8px)`
- Width: 360–480px desktop, full minus 24px mobile
- Open: 240ms ease — scale 0.96→1.0, opacity 0→1, translateY +6px→0
- Close: 180ms reverse
- Focus trap; focus return on close
- Esc to dismiss, click outside to dismiss

### 11.6 Bottom Sheet (Mobile)

- Below 540px viewport, popups become bottom sheets
- Slides up from bottom edge
- Width: 100% minus 0 (full edge-to-edge with internal padding)
- Max-height: 70vh, with internal scroll if needed
- Drag indicator (small horizontal bar at top): 32px wide, 4px tall, `--hairline-strong`
- Swipe-down-to-dismiss in addition to backdrop tap

### 11.7 Side Rail (Sticky Helper)

- Position: `fixed; bottom: 24px; right: 24px; z-index: 50`
- Trigger button: 44px circle, `--ink-primary` background, `--canvas` text
- Expanded panel: 280px wide, `--surface`, `--r-lg`, `--shadow-modal`, opens above the button with 12px gap
- Open animation: 240ms `klarwegReveal`
- Persistent across the chapter; never dismissed by content interaction

### 11.8 Eyebrow Label (SectionLabel)

```
BEAT 3  ─  UNDERSTAND · THE AKKUSATIV
```

- Two parts: beat marker (mono) + section name (mono)
- Separator: 24px horizontal hairline between parts
- Font: JetBrains Mono 10–11px
- Color: `--ink-tertiary` for beat marker, `--ink-primary` for section name
- Letterspacing: +0.10–0.14em
- Text-transform: uppercase
- Weight: 600
- Margin below: 20px before content

### 11.9 Insight Block (Expandable "Why?" Panel)

- Closed state: button with question icon + "Why does this work?" label + chevron down indicator
- Background: transparent (closed) or `--accentSoft` (open)
- Border: 1px `--hairline-strong` (closed) or transparent (open)
- Open animation: chevron rotates 180deg, content reveals via max-height transition over 500ms `--ease-soft`
- Content padding: 20px top, 0 sides

### 11.10 Bridge Block (Hindi Collapsible)

- Container: 1px `--hairline` border, `--r-md` radius, semi-transparent surface
- Header button: full-width tap target with `हिंदी` pill (warm tone) + "Hindi bridge" label + chevron
- Pill: `--hindiAccent` color text on `rgba(122, 93, 58, 0.08)` background, `--r-xs` radius
- Open: chevron rotates 180deg, Hindi content reveals via max-height transition over 360ms
- Hindi content: Noto Sans Devanagari 15–17px, line-height 1.7, `--ink-muted`

### 11.11 Conversation Turn

- Speaker label: small mono uppercase (11px), color matches speaker (Anna emerald, Rohan ruby, YOU `--accent`)
- Audio button: small `▶ play` inline, `--ink-subtle` color
- Text: Fraunces 22px, line-height 1.4, `--ink-primary`, `-0.01em` letterspacing
- Translation: Inter 13px italic, `--ink-subtle`
- Vertical gap between turns: 24px

### 11.12 Feedback Card (3-2-1)

Already specified in Part 7.4. The structural visual contract is:
- Header: mono eyebrow `◆ TURN FEEDBACK · 3-2-1` in `--accent`
- 3 strengths block
- 2 refinements block (with Tier 1 / Tier 2 styling per Part 7.5)
- 1 priority block (emphasized sentence)
- Footer: hairline border + forward-pointing italic

### 11.13 Vocab Card (WORDS Card)

- Container: `--surface` (or semi-transparent), 1px hairline, `--r-md`, 20px padding
- Resting: subtle, ready for hover
- Hover: lift translateY(-1px), background shifts to `--surface`
- Active (expanded): translateY(-2px), shadow `--shadow-card`, border tinted with gender color
- Header: word in Fraunces 24px + audio play button (32px circle) on the right
- Pronunciation row: IPA mono + Hindi-script approximation in warm tone
- Translation row: Hindi (Devanagari) + English (Inter)
- Expand: example sentence + gender + case mapping appears in a 360ms max-height transition

### 11.14 Audio Button (State Machine)

| State | Visual |
|---|---|
| `idle` | 32px circle, `--surface`, 1px hairline, play icon `▶` in `--ink-secondary` |
| `loading` | Circle with subtle pulse animation, slight opacity reduction |
| `playing` | Circle filled with role/accent color, pause icon `❚❚` in white |
| Hover (idle) | Border darkens to `--ink-primary` |

State changes go through a single `setState(button, newState)` function. CSS keys off `data-state` attribute.

### 11.15 Progress Indicator (Section Dots)

- A row of small horizontal dashes representing chapter sections (13 dashes for a chapter, 8 for a phase overview)
- Each dash: 14px wide, 2px tall, `--r-xs`, `--hairline-strong` (default) or `--accent` (completed)
- Transition: 240ms `--ease` when state changes
- Adjacent mono text shows fractional progress: `3 / 13`

### 11.16 Goethe Exercise Card

- Container: distinct visual style mimicking Goethe exam paper
- Double-line top border (signature Goethe-format styling)
- Heading row: mono eyebrow `GOETHE-FORMAT · LESEN TEIL 2 (FAMILIARITY)` with `═══` rule above and below
- Body: exam content in Goethe-authentic typography (slightly narrower line-height, monospace-influenced spacing in form areas)
- Timer (when active): large mono numerals, `--ink-primary` text on `--canvas` background

### 11.17 Watch-Out Callout

- Container: `--warm` background or hairline-bordered light surface, `--r-md`, 20px padding
- Header: `⚠️` icon or Devanagari `ह` accent glyph + "Hindi-Speaker Watch-Out · HE-XXX" eyebrow
- Four-part structure body: Hindi pattern → Wrong German → Correct German → Memory aid
- Each part separated by 14px vertical space and small mono label

### 11.18 Drill Container

- Container: 1px hairline border, `--r-md`, 20–24px padding
- Heading: small mono eyebrow `DRILL 3 · COLOR THE SENTENCE` + brief instruction
- Body: the drill content (drag-drop targets, multiple choice, text input, etc.)
- Submit button: secondary style, positioned right-aligned at bottom
- Feedback: appears below the drill after submission, using the three-tier error styling

---

## Part 12 — Emotional Experience Model

### 12.1 The Per-Moment Emotional Contract

At every moment in a Klarweg chapter, the visual + interaction system targets a specific emotional state.

| Moment | Target emotion | Visual support |
|---|---|---|
| Chapter open | Calm orientation | Large display title, calm Frame prose, no urgency |
| First Hook reveal | Quiet curiosity | Side-by-side comparison, single accent color emerging |
| Concept teaching | Engaged focus | Color system surfaces, paradigm table appears, learner is rewarded with structure |
| Live parser toggle | "Aha" recognition | Animated decomposition shows hidden structure |
| WORDS hover | Helpful availability | Tooltip appears without forcing |
| WORDS popup open | Premium reference | 10-field card feels considered, not crammed |
| Drill in progress | Confident production | Calm interaction surfaces, no time pressure |
| AI Tutor turn | Safe practice | Calm input, "Klarweg listens" microcopy |
| Feedback received | Direct without humiliation | 3-2-1 structure respects effort, calls out errors specifically |
| Section completion | Quiet pride | Calm landing, no celebration, next section ready |
| Chapter close | Accomplishment | Sentence Garden harvest, Can-Do check, soft horizontal line |

### 12.2 Calmness Mechanics

Specific design mechanics that produce calmness:

- **Generous spacing** — 88px section padding (desktop) signals "this content matters; we will not rush you"
- **Editorial reading widths** — 720px maximum signals "we respect your reading comfort"
- **Quiet transitions** — 240–600ms easings signal "we are not trying to dazzle you"
- **No pressure elements** — no streaks, no XP, no countdowns (except explicit Goethe Mode), no "complete by Friday" reminders
- **Save-state implicit** — the learner can leave at any moment; the chapter waits

### 12.3 Confidence-Building UX

Confidence is built through small consistent signals that the platform trusts the learner:

- **The speaking exception** — explicitly told "Klarweg listens until you finish — no mid-sentence interruptions"
- **Calm error correction** — Tier 1 errors with rule reference (not exclamation marks); Tier 2 errors with Hindi-aware explanation (not finger-wagging); Tier 3 errors silent
- **Earned praise only** — "Correct Akkusativ for masculine" instead of "Great job!"
- **Self-assessment** — Can-Do check at chapter close lets the learner judge their own competence, not the platform alone
- **Recovery Mode** — returning after a pause is calm, never punished

### 12.4 Anti-Anxiety Interaction Design

Specific decisions to prevent anxiety:

- **No mandatory time pressure outside Goethe Mode** — timers only appear in exam-simulation contexts
- **No public progress** — no shared streaks, no leaderboards, no comparison to other learners
- **No surveillance signals** — no "Klarweg noticed you stopped" prompts, no "you haven't practiced in 3 days" emails (the platform sends only opt-in content updates)
- **Predictable structure** — the same 13-section chapter pattern means learners always know where they are
- **Reversibility** — every interaction is reversible; nothing is permanent or punitive

### 12.5 Intellectual Respect Philosophy

The visual + interaction system continuously signals respect:

- **Display typography** in Fraunces (not Inter) — the platform looks like a journal article, not a course app
- **Specific microcopy** — "Klarweg listens until you finish" instead of "Speak now"
- **Real metadata** — chapter timing, section counts, scenario IDs (`A1·CH17·S01`) treat the learner as someone who appreciates structure
- **Keyboard shortcuts** — the existence of `/` and `⌘K` says "this is a real tool"
- **Hindi as a bridge, not a crutch** — the Hindi presence curve respects the learner's intent to actually learn German, not perpetually translate
- **Adult voice** — no exclamation points, no emoji, no over-praise

### 12.6 The Forward-Momentum Feeling

Klarweg should feel like the learner is *moving forward*, not running on a treadmill:

- **Section progression is visible** — beat eyebrows tell the learner where they are
- **Can-Do unlocks are real** — each chapter unlocks a specific named capability ("You can now order food in a Berlin café")
- **Phase Certificates issued at phase boundaries** — meaningful milestones, not random rewards
- **Cross-chapter color persistence** — the colors learned in Chapter 17 are the same colors in Chapter 30, reinforcing accumulated mastery
- **Sentence Garden harvest** — sentences saved across chapters accumulate into a visible personal corpus

### 12.7 Across-Chapters Emotional Accumulation

Over the course of a level (30+ chapters), the learner accumulates an emotional and visual familiarity:

- The Spine 5 colors become second nature within 5 chapters
- The chapter rhythm becomes familiar within 3 chapters
- The AI Tutor's voice becomes anticipated within 2 chapters
- The Hindi Error Library entries accumulate as a personal reference of patterns they once fell into

The platform becomes a known place. That known-place feeling is the emotional foundation of long-term retention.

---

## Part 13 — Implementation Principles

### 13.1 Framework-Agnostic Interaction Primitives

The visual system specified in this document is framework-agnostic. Klarweg may be implemented in React, in vanilla JavaScript, in Vue, or in any future framework. What is binding is:

- The token registry (typography, color, spacing, motion)
- The interaction patterns (hover, focus, tap, decomposition, popup)
- The component contracts (the 10-field WORDS popup, the 3-2-1 feedback card, the conversation turn)

The implementation strategy may vary. The interaction language does not.

### 13.2 Token-Driven Everything

No hardcoded visual values are permitted in component code. Every color, spacing, radius, and motion duration is referenced through a CSS custom property (or framework equivalent).

This discipline:
- Makes design changes propagate consistently
- Enables theming (e.g., dark mode in a future version) without rewriting components
- Prevents drift over years of development

### 13.3 The Component Library Structure

The component library is organized hierarchically:

**Primitives** (atomic, used everywhere):
- Button, Pill, Toggle, Card, Hairline, Eyebrow, Tooltip, AudioButton

**Composites** (built from primitives, specific to Klarweg):
- WordCard, ParadigmTable, ConversationTurn, FeedbackCard, BridgeBlock, InsightBlock, WatchOutCallout, GoetheExerciseCard

**Templates** (full chapter sections, built from composites):
- FrameSection, HookSection, ConceptSection, WordsSection, DrillsSection, AITutorSection, WritingTaskSection, CloseSection

**Layouts** (full page compositions):
- ChapterPage, LevelOverviewPage, HomePage, TutorPage

Each layer is independently testable. New chapters compose Templates; new Templates compose Composites; new Composites compose Primitives.

### 13.4 Single Source of Truth from Data to Render

Chapter content is authored in structured data (markdown with frontmatter, or JSON, or a custom DSL). The rendering pipeline:

1. Author writes structured content
2. Content is validated against the chapter engine schema
3. Same content drives both digital chapter rendering AND PDF generation
4. WORDS entries cross-reference the global dictionary
5. Color tokens are resolved through the design tokens file
6. Audio files are referenced by convention (`{level}-ch{chapter}-{section}-{take}.mp3`)

No content is duplicated between digital and PDF outputs. Single source, multiple renders.

### 13.5 Accessibility Built-In, Not Bolted On

Every component must ship with:

- Keyboard navigation (Tab order, Enter/Space activation, Esc dismissal)
- ARIA labels for icon-only buttons
- Focus visible state (the Spine blue 2px ring)
- Color contrast meeting WCAG AA on all text
- Color redundancy — never color alone as the signal (always color + label for grammar roles)
- `prefers-reduced-motion` compliance — all transitions collapse to 0.01s
- Screen reader compatibility — semantic HTML, proper landmarks

### 13.6 The Chapter Shell vs Chapter Content Separation

The **chapter shell** (the layout container, the header, the Grammar Helper rail, the Command hint, the section eyebrows, the progress indicator) is reusable across all 212 chapters.

The **chapter content** (the specific Frame prose, the Hook, the Concept teaching, the WORDS, the dialogue, the AI Tutor scenarios) varies per chapter.

This separation is what makes 212 chapters feasible. The shell is built once and rigorously maintained. Content is authored per chapter against the locked engine spec.

### 13.7 What Scales, What Doesn't

**Scales:**
- The 13-section structure (every chapter follows it)
- The component library (composites are reused across all surfaces)
- The token system (no per-chapter custom colors)
- The interaction primitives (hover, popup, decomposition, 3-2-1 feedback)
- PDF generation pipeline (templated)

**Doesn't scale (must be authored per chapter):**
- Specific concept teaching prose
- Specific dialogue content + audio recordings
- Specific AI Tutor scenarios with their common-error catalogs
- Specific Goethe Exam Hook exercises
- Specific Watch-Out content

### 13.8 Operational Realism

The visual system is constrained by real engineering and content production realities:

- Audio is recorded in production batches, not per-chapter ad-hoc
- LLM-augmented features are gated behind paid add-ons (per cost protection clause)
- Custom components beyond the canonical library require architect approval
- New color tokens require documentation update + audit of existing usage
- Hindi Error Library entries are versioned content, not platform code

### 13.9 Maintainability Rules

To preserve consistency across years of development:

- **Architect role owns the design tokens file** — changes require explicit approval
- **Component library has its own versioning** — semantic versioning with breaking-change discipline
- **Per-chapter review checks against this file** — not only against `klarweg-chapter-engine.md`
- **Visual regressions are caught via automated screenshot diffs** when possible
- **The "single test"** (does this feel like Linear / Stripe Docs / Apple Education?) is applied at every major design review

---

## Part 14 — What Evolves, What Stays Fixed

### Stays fixed (architectural)

- The four-tier 51-color grammar system (16 case+gender + 8 verb + 10 structural + 17 functional)
- The Spine 5 hex values (Subject blue, Verb red, Object green, Time purple, Place orange)
- The three faces, four jobs typography stack (Fraunces display + Fraunces German + Inter UI + JetBrains Mono technical + Noto Sans Devanagari)
- The spacing scale (4/8/12/16/24/36/48/64/80/96/120)
- The motion tokens and `--ease` curve
- The 10-field WORDS popup contract
- The 3-2-1 feedback card structure
- The cognitive load curve principle
- The speaking exception in UI
- The "light canvas first, color second, ink last" principle
- The component library hierarchy
- The forbidden lists across every part of this document

### Evolves (operational)

- Specific hex values within registered token slots (refinement permitted; semantic role is fixed)
- The component library (new composites and templates added as the platform scales)
- Audio button states beyond idle/loading/playing (more nuanced states permitted)
- Word family visualization (v2 feature, rendering may evolve)
- Goethe Mode visual sophistication (Year 2+ LLM-powered version will refine the visual)
- The Sentence Garden UI (v1 minimal harvest display; v2+ richer organization)
- Mobile-specific refinements
- Dark mode tokens (future)
- Accessibility refinements as standards evolve

When evolution requires touching the architectural layer, an amendment is documented in `klarweg-decisions.md` with explicit rationale.

---

## Part 15 — Connection to Other Architecture Files

This file is the visual + interaction operating system. It is the fifth canonical document, joining:

1. `klarweg-os.md` — what Klarweg is, what it believes, how it speaks (philosophy + brand)
2. `klarweg-curriculum-architecture.md` — what each level contains, how levels relate (curriculum)
3. `klarweg-chapter-engine.md` — how individual chapters are built (engine)
4. `klarweg-decisions.md` — why each decision was made (rationale)
5. `klarweg-visual-system.md` (this file) — how the platform looks, behaves, moves, and feels (visual + interaction)

The consultation order for chapter and component work:

1. `klarweg-os.md` — voice, brand, philosophy
2. `klarweg-curriculum-architecture.md` — level scope, phase context, Can-Do statements
3. `klarweg-chapter-engine.md` — chapter structure, component specifications
4. `klarweg-visual-system.md` (this file) — visual tokens, interaction patterns, motion, typography
5. `klarweg-decisions.md` — when historical rationale is needed

When this file conflicts with `klarweg-os.md` or `klarweg-chapter-engine.md`, the higher-tier file wins. When this file conflicts with implementation expediency, this file wins — Klarweg's quality bar is set by this document, not by what's easy to ship.

The next deliverable is the **revised canonical Akkusativ A1 Chapter 17 implementation** — rebuilt against this visual system. After that, the chapter shell becomes the production template for all 212 chapters.

---

**End of klarweg-visual-system.md**

*This document is the visual and interaction operating system. It is binding for all design, frontend engineering, and product evaluation decisions. When future ideas conflict with this document, the document wins unless explicitly amended in `klarweg-decisions.md`.*
