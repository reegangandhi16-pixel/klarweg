# Klarweg Homepage — Architecture & UX System Documentation

> **Permanent reference** for all future Klarweg homepage development, Claude chats, and product decisions. Extracted from the current live homepage implementation (`klarweg.html`). Preserves the visual identity, interaction systems, and conversion logic exactly as built.

---

## Table of contents

1. [Homepage purpose](#1-homepage-purpose)
2. [Brand positioning](#2-brand-positioning)
3. [Design tokens & visual identity](#3-design-tokens--visual-identity)
4. [Typography system](#4-typography-system)
5. [Motion & animation philosophy](#5-motion--animation-philosophy)
6. [Grammar color system — 51 tokens](#6-grammar-color-system--51-tokens)
7. [Audio interaction system (KW_Audio)](#7-audio-interaction-system-kw_audio)
8. [Word interaction & popup behavior](#8-word-interaction--popup-behavior)
9. [Interactive sentence system](#9-interactive-sentence-system)
10. [Section-by-section architecture](#10-section-by-section-architecture)
11. [Shared CTA structure](#11-shared-cta-structure)
12. [Pricing architecture](#12-pricing-architecture)
13. [Free chapter conversion flow](#13-free-chapter-conversion-flow)
14. [Goethe positioning strategy](#14-goethe-positioning-strategy)
15. [AI tutor preview](#15-ai-tutor-preview)
16. [Hören / Speaking preview systems](#16-hören--speaking-preview-systems)
17. [Story-learning showcase](#17-story-learning-showcase)
18. [Mobile responsiveness rules](#18-mobile-responsiveness-rules)
19. [Visual hierarchy & section spacing rhythm](#19-visual-hierarchy--section-spacing-rhythm)
20. [Shared UI patterns](#20-shared-ui-patterns)
21. [Accessibility & touch-target rules](#21-accessibility--touch-target-rules)
22. [Conversion strategy](#22-conversion-strategy)
23. [Scalability & maintenance principles](#23-scalability--maintenance-principles)
24. [Future expansion notes](#24-future-expansion-notes)

---

## 1. Homepage purpose

The homepage is the **first 60-second proof** that Klarweg is the premium German learning platform for Hindi-speaking Indians. Its job is not to explain German. Its job is to make visitors **see structure** they did not know existed — through one interaction the eye remembers and the brain rewires around.

**Three jobs, in priority order:**

1. **Show the method works** — by letting the visitor tap a German word and instantly see role + case + meaning, complete with audio. This is the irreducible product demo.
2. **Establish premium credibility** — visual quality, typography, motion, and audio fidelity that signal "this is not Duolingo, this is not a YouTube course."
3. **Convert to paid** — A1 single (₹1,999) or Lifetime A1–C2 (₹4,999 vs ₹30,994 strike) via Chapter 1 free at every level.

Everything secondary (Goethe positioning, AI tutor preview, Hören system, story-based learning, ecosystem) reinforces these three jobs. Nothing on the homepage exists for decoration.

---

## 2. Brand positioning

**One sentence:** Klarweg is the German learning system that makes you *see* the language's structure — designed for Hindi-speaking Indians preparing for Goethe exams.

**What we are explicitly not:**

- Not Duolingo. No mascots, no streaks-as-product, no gamification-as-shame.
- Not cyberpunk. No neon-on-black, no glitch effects, no holographic chrome.
- Not a YouTube course. No talking head, no whiteboard, no "let me explain this rule."
- Not generic SaaS. No bland Inter-everywhere, no purple-gradient hero, no rounded-rectangle blandness.

**What we are:**

- Apple/Stripe/Linear-tier visual quality. Light canvas, premium typography mix, intentional motion.
- A *visual language system* — color is the carrier of meaning, not decoration.
- Built around one product principle: **once you see the structure, you can't unsee it.** That's when fluency starts.
- Hindi-speaking-India-first. Pricing in rupees, examples that feel local, payment flow optimized for the market.

---

## 3. Design tokens & visual identity

### 3.1 Surface & ink

| Token | Value | Use |
|---|---|---|
| `--bg-canvas` | `#FAFAF7` | Default page background — warm off-white |
| `--bg-surface` | `#FFFFFF` | Cards, chips, popups |
| `--bg-elevated` | `#F4F3EE` | Subtle elevation, alternating section backgrounds |
| `--bg-warm` | `#FFF8EC` | Highlight surfaces, "free chapter" callouts |
| `--bg-glass` | `rgba(255,255,255,0.7)` | Nav backdrop |
| `--bg-glass-strong` | `rgba(255,255,255,0.85)` | Sticky CTAs |
| `--ink-primary` | `#0E0E10` | Headings, body emphasis |
| `--ink-secondary` | `#5A5A60` | Body text |
| `--ink-tertiary` | `#9A9AA0` | Meta, eyebrows, captions |
| `--ink-quaternary` | `#C7C7C2` | Disabled, decoration |
| `--hairline` | `rgba(14,14,16,0.08)` | Default borders, dividers |
| `--hairline-strong` | `rgba(14,14,16,0.14)` | Hover borders |
| `--hairline-light` | `rgba(14,14,16,0.04)` | Section dividers |

### 3.2 Shadow system

| Token | Use |
|---|---|
| `--shadow-soft` | Default card lift, chip hover |
| `--shadow-lift` | Modal, important card hover |
| `--shadow-card` | Pricing cards, role cards |
| `--shadow-glow-coral` | Primary CTA emphasis |
| `--shadow-glow-blue` | Secondary CTA / spine accent |

### 3.3 Radius scale

`--r-full` for pills. Cards, chips, and modals use a layered radius scale — pills are full-rounded, cards use ~16px, chips use full-pill, modals use ~24px.

### 3.4 Principle

**Light canvas first, color second, ink last.** The page background is always near-white. Color is reserved for grammar tokens (the product's vocabulary) and a small set of brand accents (coral CTAs, spine blue). Ink hierarchy carries the reading order. This is why the homepage doesn't feel busy despite carrying 51 color tokens — they are *contained* within grammar artifacts.

---

## 4. Typography system

### 4.1 Three faces, three jobs

| Token | Family | Job |
|---|---|---|
| `--font-display` | `'General Sans', 'Inter', system-ui` | Display headlines, hero, section titles |
| `--font-ui` | `'Inter', system-ui` | All UI, labels, body text, captions, buttons |
| `--font-german` | `'Fraunces', 'Times New Roman', serif` | All German words rendered as content (sentences, popup word, story bubbles) |

### 4.2 The Fraunces decision

Every visible German word on the homepage is rendered in **Fraunces** (a contemporary serif with optical sizing). This is intentional and load-bearing:

- It creates an instant visual signal: "this is German, this is content, this is the thing you tap."
- It separates German tokens from English UI in the eye without needing any other treatment.
- Serifs read as premium and considered — opposite of the sans-everything Duolingo aesthetic.

**Rule:** Anywhere a German word appears as learning content (sentence, word card, story bubble, role example), use `var(--font-german)`. UI labels naming German concepts (like a section eyebrow) stay in `--font-ui`.

### 4.3 Display scale

- `display-lg` — Hero headline, big reframe statements
- `display-md` — Major section headlines
- `display-sm` — Sub-section headlines, in-card titles

Display sizes always carry tight letter-spacing (`-0.02em` to `-0.03em`) and font-weight 600–700.

### 4.4 Body & UI scale

- Body lede: 18–20px, weight 400, color `--ink-secondary`
- Body default: 16px, weight 400
- UI default: 14–15px, weight 500
- Caption / eyebrow: 11–12px, weight 600, uppercase, letter-spacing `0.12em`, color `--ink-tertiary`

### 4.5 Italic emphasis

The `<em>` inside display headlines is a deliberate stylistic device: switches to Fraunces italic at the same weight, slightly larger letter-spacing, used for *one* emphatic phrase per headline (e.g., "Every role has a color.", "see its structure"). Never use italic for emphasis in body — use weight instead.

---

## 5. Motion & animation philosophy

### 5.1 Motion tokens

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default — confident entry, soft settle |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Modal entry, hero reveals — premium decel |
| `--dur-fast` | `120ms` | Hover states, chip lifts |
| `--dur-base` | `240ms` | Card transitions, button states |
| `--dur-slow` | `480ms` | Section reveals, modal openings |
| `--dur-cinematic` | `800ms` | Hero scroll-in, signature moments only |

### 5.2 Principles

- **Motion communicates state, never decorates.** A hover lift signals interactivity. A modal entry signals new context. A chevron rotates because the underlying state changed.
- **Soft settle, not bounce.** No spring physics, no overshoot. The eye should feel like things came to rest naturally.
- **Asymmetric easing.** Things enter fast and settle slow (`ease-out` family). Things leave slow and accelerate away (`ease-in` family, used rarely).
- **No idle animation.** Nothing pulses, breathes, or shimmers on idle. The page rewards interaction — it doesn't beg for attention.
- **Audio is also motion.** Word-by-word highlighting during slow playback is the most important "motion" on the page. It teaches the eye to track pacing.

### 5.3 Where motion is allowed

- Hover lifts on cards and chips (1–2px translate, soft shadow)
- Chevron rotations on toggles
- Modal entry/exit (scale + fade + slight Y)
- Audio waveform during playback
- Word highlight stepping during slow playback
- The "See more" max-height transition in the color system

### 5.4 Where motion is forbidden

- Hero loops or autoplay videos
- Decorative gradients drifting
- Confetti, sparkles, or celebration animation
- Scroll-jacking, parallax, or any motion driven by scroll position alone
- Anything that runs when the user is not interacting

---

## 6. Grammar color system — 51 tokens

The grammar color system is the **operating system of German understanding** on Klarweg. It is not a stylistic choice. It is the product.

### 6.1 The principle

Every German word has a grammatical role. Every role has a permanent, consistent color. Once a learner sees the color on a word, they know its role without parsing or translating. This is how Klarweg accelerates from translation-thinking to structure-thinking.

### 6.2 The 51 tokens (CSS custom properties)

All tokens live in `:root` as `--g-{role}: {hex};`. They render in three ways: (1) inline on `<span class="de r-{role}">` elements, (2) as background dots on `.cs-chip` legend items, (3) as accent colors in the word-card popup via the `accentToColor()` mapping.

| Tier | Tokens |
|---|---|
| **Spine (core 5)** | `--g-subject`, `--g-verb`, `--g-object`, `--g-time`, `--g-place` |
| **Words & modifiers** | `--g-adjective`, `--g-adverb`, `--g-article`, `--g-preposition`, `--g-conjunction`, `--g-negation`, `--g-question`, `--g-interjection`, `--g-particle`, `--g-number`, `--g-ordinal`, `--g-frequency` |
| **Pronouns** | `--g-possessive`, `--g-reflexive`, `--g-relative`, `--g-demonstrative`, `--g-indefinite`, `--g-dummy-es` |
| **Cases** | `--g-akkusativ`, `--g-dativ`, `--g-genitiv` |
| **Verbs** | `--g-modalverb`, `--g-auxiliary`, `--g-infinitive`, `--g-separable-verb`, `--g-non-separable`, `--g-reflexive-verb`, `--g-separable`, `--g-imperative`, `--g-future`, `--g-passive`, `--g-modal` |
| **Clause structure** | `--g-main-clause`, `--g-subordinate`, `--g-relative-clause`, `--g-sentence-connector`, `--g-condition`, `--g-result`, `--g-contrast`, `--g-reason` |
| **Advanced** | `--g-comparison`, `--g-superlative`, `--g-direction`, `--g-temporal-adverb`, `--g-local-adverb`, `--g-manner-adverb` |

### 6.3 Core 5 reference values

| Role | Token | Hex |
|---|---|---|
| Subject | `--g-subject` | `#185FA5` (deep blue) |
| Main Verb | `--g-verb` | `#DC2626` (red) |
| Object | `--g-object` | `#2E7D32` (green) |
| Time | `--g-time` | `#7C3AED` (purple) |
| Place | `--g-place` | `#EA580C` (orange) |

These 5 colors appear in the hero, the Method · 01 role cards, and every example sentence on the homepage. Learners commit them to memory within the first scroll.

### 6.4 Usage rules

- **Saturated background → white text** for major spans inside cases (Akkusativ green pill, Dativ olive pill, etc.).
- **Colored text on light background** for inline grammar coloring in flowing sentences.
- **Colored dot, ink label** for legend chips — the dot is the meaning, the label is the name.
- **One role, one color, forever.** Never tint or shift a grammar color contextually. If a Subject is rendered, it's `--g-subject` whether in the hero or in a B2 chapter.

### 6.5 The `accentToColor()` mapping

The word-card popup speaks in accent names (`'blue'`, `'red'`, `'green'`, `'purple'`, `'orange'`, etc.) which map through a single lookup table to `var(--g-*)` tokens. Each entry returns `{color, tint, deep, label}` for the popup's role badge dot, soft background, deep accent, and label color. This indirection means adding a new role only requires (a) a new `--g-*` token, (b) a new accent entry in the table, (c) tagging the relevant WORDS entries — no other changes needed.

---

## 7. Audio interaction system (KW_Audio)

The audio engine is a single global module `KW_Audio` defined on `window`. It runs on Web Speech API and is the **most premium part of the product** on the homepage — it's what makes the difference between "color-coded course" and "Klarweg."

### 7.1 Public API

```js
KW_Audio.playSentence(container, button, opts)
KW_Audio.playDialogue(bubbles, button, opts)
KW_Audio.stop(opts)
KW_Audio.pickGermanVoices()  // internal, run on voiceschanged
```

### 7.2 The three speed modes

| Mode | Rate | Behavior |
|---|---|---|
| **1× (normal)** | `1.0` | Single utterance. Native pace. Default for the hero, role cards, story bubbles. |
| **Slow** | `0.75` | Word-by-word path. Each word is its own utterance at `rate: 0.75`, with **150ms** pauses between words. Highlights step word-by-word. |
| **Very slow** | `0.4` | Word-by-word path. Each word at `rate: 0.4`, with **400ms** pauses. Used for first-time exposure and pronunciation drilling. |

**Routing rule:** Any `rate < 0.9` routes to the word-by-word path (`playSentenceWordByWord`). Rate ≥ 0.9 uses a single utterance for fluid playback. This means `1.0` and `0.95` both feel natural; `0.75` and below break out into pedagogical word-by-word mode.

### 7.3 Voice profiles

Klarweg ships two voice "characters":

- **Female** (Anna, learners, most defaults)
- **Male** (Rohan, dialogue partner, some narration)

On startup, `pickGermanVoices()` runs through `speechSynthesis.getVoices()` and picks the best available German voices using name heuristics ("female", "Anna", "Marlene", etc. for female; "male", "Stefan", "Hans" for male). If only one German voice is available (common on mobile), both characters share that voice — and the **pitch + rate offsets do the differentiation**.

### 7.4 Pitch & rate by context

```
                            pitch       rate offset
Default (no data-voice)     1.0         1.0     ← neutral, clear, premium
Dialogue female (Anna)      1.5         × 1.05  ← brighter, slightly faster
Dialogue male (Rohan)       0.5         × 0.95  ← deeper, slightly slower
```

**Rule:** Extreme pitch and rate offsets apply **only** when the voice is explicitly specified via `opts.voice` or `container.dataset.voice`. Every other playback context (hero, role cards, Method · 01 examples) uses neutral pitch 1.0 for clarity. This is what guarantees Object/Verb/Subject role cards sound clean and premium, while Anna and Rohan are unmistakably distinct in the Im Café story.

### 7.5 Dialogue chain (Im Café)

`playDialogue(bubbles, masterButton, opts)`:

1. `stop()` clears any current playback. The master button's state transitions to `'playing'`.
2. `dialogueQueue` is set to the bubble array, `dialogueIndex` to 0.
3. `advanceDialogue()` is called.
4. For each bubble: a hidden "ghost" button is created so the bubble's own `playSentence` doesn't toggle the master button's state. The bubble's `data-voice` is read (`'female'` for Anna, `'male'` for Rohan). `playSentence(bubble, ghost, { rate, voice, _internal: true })` runs.
5. The first bubble plays with **0ms delay**. Every subsequent bubble has a **150ms delay** before it speaks — this prevents iOS Safari from dropping the audio context between utterances.
6. When the bubble's utterance ends, `finish('idle')` checks for an active `dialogueQueue` and calls `advanceDialogue()` for the next bubble.
7. When the queue is exhausted, the master button returns to `'idle'`.
8. Calling `stop()` with no args (or with `{preserveDialogue: false}`) clears the queue and cancels speech. Calling `stop({preserveDialogue: true})` (used internally between bubbles) keeps the chain alive.

### 7.6 Word-by-word highlighting

In `playSentenceWordByWord`, each word's utterance has `onstart` and `onend` handlers that toggle a `.is-active` class on the corresponding `.de[data-word]` span. The visible effect: words light up one at a time as they're spoken, with `350ms` (default) of natural pause between words plus the slow utterance time. This is the most important visual-audio coupling on the homepage.

### 7.7 Button state machine

Every playable button cycles through `data-state="idle" | "loading" | "playing"`. CSS keys off `data-state` for icon, label, and animation. `setState(button, newState)` is the only path that mutates state. Buttons store their last `data-state` for diagnostic clarity.

### 7.8 The `stop()` contract

`stop({preserveDialogue: false})` does:

- `speechSynthesis.cancel()` if available
- Cleans current sentence's `.is-active` highlights
- Sets current button to idle
- Clears `dialogueQueue` unless `preserveDialogue: true`

Every new playback call invokes `stop({preserveDialogue: opts._internal === true})` before starting. This is what makes the homepage feel responsive — tapping a new word cancels the old one cleanly, no overlap, no race.

---

## 8. Word interaction & popup behavior

### 8.1 The interaction (the irreducible demo)

The homepage's signature interaction:

1. User sees a German word colored by role inside a sentence.
2. User taps the word.
3. Popup opens — instantly, with audio button, role badge, case label, English, Hindi, and a one-line "why" explanation.
4. User taps the audio button — word plays at native pace, then offers Slow / Very slow.
5. User closes popup. Continues reading.

This is the product. Everything else exists to drive a visitor to perform this interaction once.

### 8.2 The WORDS dictionary

A single JS object literal at the bottom of the script block:

```js
const WORDS = {
  'anna':   { word: 'Anna', pron: 'AH-nah', ipa: '/ˈanaː/', en: 'Anna', hi: 'अन्ना',
              role: 'Subject', case: 'Nominativ',
              why: 'The doer of the action — always Nominativ.',
              example: 'Anna lernt Deutsch.', example_en: 'Anna learns German.',
              accent: 'blue' },
  // ... 53 entries
};
```

Each entry carries:

- `word` — the canonical form
- `pron` — phonetic spelling, accessible
- `ipa` — IPA notation, optional
- `en` / `hi` — English and Hindi translations
- `role` — human-readable role label ("Subject", "Verb", "Adverb · Time")
- `case` — grammatical case if applicable, or `'—'`
- `why` — one sentence explaining the role in context
- `example` / `example_en` — sample sentence
- `accent` — the color key fed to `accentToColor()` (e.g., `'blue'`, `'red'`, `'green'`, `'purple'`, `'orange'`)

### 8.3 The popup architecture

The popup is a single fixed-position element (`#wordCard`) hidden by default. On open:

- `wcWordText` gets the word in display font, colored via `palette.color`
- `wcPron` gets the phonetic
- `wcRoleBadge` gets a colored dot and the role label
- `wcCaseChip` gets the case if present
- `wcEn` / `wcHi` get translations
- `wcWhy` gets the explanation, colored deep accent
- `wcExample` gets the example sentence, also tappable
- `wcAudioBtn` is wired to play the word at 1×; secondary buttons offer Slow / Very slow

### 8.4 Open / close motion

Open: scale 0.96 → 1.0, opacity 0 → 1, translateY +6px → 0, duration 240ms with `--ease-out`. Backdrop fades in 200ms. Close: reverse, faster (180ms).

### 8.5 Mobile popup behavior

On mobile (`< 540px`):
- Popup slides up from the bottom edge instead of centering
- Width is 100% with side margins; max-height is 70vh with scroll inside
- Backdrop covers full viewport, tap-to-dismiss
- Audio buttons stay finger-friendly (44px target)

### 8.6 Popup color consistency rule

Any word's popup color must match exactly the inline color the word has in its sentence. This means the `accent` value on the WORDS entry must map (via `accentToColor`) to the same `--g-*` token used by the inline span's CSS class. Mismatches here are user-visible bugs — see the historical "heute / morgen / zuhause were accent: 'red'" issue. Always verify accent alignment when adding new words.

---

## 9. Interactive sentence system

### 9.1 The sentence anatomy

Every playable sentence on the homepage follows the same anatomy:

```html
<div class="sentence" data-playable data-sentence="Anna lernt heute zuhause.">
  <span class="de r-subject c-nom" data-word="anna">Anna</span>
  <span class="de r-verb" data-word="lernt">lernt</span>
  <span class="de r-time" data-word="heute">heute</span>
  <span class="de r-place" data-word="zuhause">zuhause</span>.
</div>
```

Required attributes:

- `data-playable` on the container — tells the auto-injector to attach an audio button.
- `data-sentence` — the canonical string the audio engine speaks. Word order here must match the visible word order exactly.
- `class="de r-{role}"` on each German word span — `de` enables Fraunces + Klarweg word styling; `r-{role}` colors it via the matching `--g-*` token.
- `c-{case}` optional case class for visual emphasis (e.g., `c-nom`, `c-akk`).
- `data-word="{lookup}"` — lowercase key into the WORDS dictionary for the popup.

### 9.2 The auto-injector

On `DOMContentLoaded`, the script walks every `[data-playable]` container and:

1. Reads `data-sentence` (or falls back to inner text).
2. Builds a word-element map from `.de[data-word]` children.
3. Appends a `.sb` (sentence-button) audio control aligned to the container.
4. Wires click to `KW_Audio.playSentence(container, btn, { rate: 1.0 })`.

This means every new sentence on Klarweg works automatically once marked up correctly — no per-sentence wiring.

### 9.3 Word tap binding

Same loop also binds clicks on every `.de[data-word]` child to open the popup with that word's WORDS entry. Tap delegation handles new spans inserted dynamically.

### 9.4 TeKaMoLo word order

German adverb order: **Te**mporal (time) → **Ka**usal (cause) → **Mo**dal (manner) → **Lo**kal (place). The homepage's reference verb example is `Anna lernt heute zuhause.` — Time (heute) before Place (zuhause). This is the canonical pattern; chapter pages should follow it for all neutral declaratives.

---

## 10. Section-by-section architecture

### 10.1 Hero

**Purpose:** First-screen proof that Klarweg makes German legible.

**Anatomy:**
- Eyebrow: "German learning, redesigned for India"
- Display headline: "See German, don't translate it." (Fraunces italic emphasis on one phrase)
- Lede: short paragraph, max-width 620px
- **The interactive demo:** one example sentence with all 5 spine roles colored, plus the "Live tap any word" subtitle that invites the tap
- Two CTAs: primary "Start free chapter" (coral), secondary "How it works" (anchor link)
- Trust line: "Trusted by 12,400+ German learners across India" with dot indicators

**UX role:** Establish premium feel + invite the tap interaction within 3 seconds of landing.

**Interaction behavior:** Tapping any word in the demo sentence opens the popup — the same one that runs everywhere on the page. The first tap is the moment of conversion: visitor learns the product is real.

**Mobile behavior:** Headline scales down to display-md. CTAs stack vertically. Demo sentence wraps gracefully because each `.de` span is inline. Trust line collapses to one row.

**Conversion role:** Primary entry point to free chapter. Establishes credibility before any pricing or comparison is asked of the visitor.

**Future extensibility:** Hero can swap demo sentence by level (A1 / B1 / C1) via a hero variant. Add hero video later only if it shows the tap interaction in motion — never a brand reel.

---

### 10.2 Color system (Live tap any word reinforcement)

**Purpose:** Explicitly show the visitor that German has a small, learnable color vocabulary — and they've already started learning it.

**Anatomy:**
- Eyebrow: "The color system"
- Display: "Every German word has a role. *Every role has a color.*"
- Lede: explains the 5 core colors plus the 46 extended
- **Tier 1 (Spine):** 5 large core chips — Subject, Main Verb, Object, Time, Place
- **"See more" toggle** — pill button with chevron, hairline behind it
- **Hidden by default:** 6 collapsed tiers — Words & modifiers, Pronouns, Cases, Verbs, Clause structure, Advanced — totaling 46 more chips

**UX role:** Anchor the visitor's understanding of the color system before they encounter Method · 01 and the rest. Collapsed state respects mobile real estate. Curious learners expand for the full system.

**Interaction behavior:** Toggle expands `.cs-extra` via `max-height: scrollHeight` transition with chevron rotation. Label flips to "See less". Smooth in both directions. After open transition completes, JS releases `max-height` to `none` so reflow/resize never clips content.

**Mobile behavior:** Toggle is finger-friendly (44px). Collapsed state shows just the 5 core chips in 2 columns — minimal scroll. Expanded state stacks each tier's chips in 2 columns.

**Conversion role:** Demonstrates depth without overwhelming. The "+46 more" implication is "this product knows what it's doing." Reinforces the premium positioning.

**Future extensibility:** New grammar roles can be added by appending a chip to the appropriate tier. The tier system is named so reorganization is cheap (move chip between tiers without changing data structure).

---

### 10.3 Reframe band

**Purpose:** State the product thesis in display type. Bridge from hero's invitation to method's explanation.

**Anatomy:** One display headline ("German is *not random.* You haven't been shown the system."), one lede beneath. Light canvas, no decoration.

**UX role:** Slow the scroll. Make the visitor read one big sentence and accept the framing.

**Conversion role:** Reframes the visitor's prior failures — "you weren't bad at German, no one showed you the system." Removes self-blame, opens up trust.

---

### 10.4 Color grammar showcase (Method · 01 — role cards)

**Purpose:** Demonstrate the 5 spine colors at work, in cards, with audio.

**Anatomy:** 5 role cards in a grid — Subject, Verb, Object, Time, Place. Each card:
- Role label + brief description
- Sample sentence (`.role-example sentence` with `[data-playable]`)
- Color band matching the role token
- Auto-injected audio button (plays at 1.0×, single utterance, neutral pitch)

**Example sentences (current):**
- Subject: "Anna lernt Deutsch."
- Verb: "Anna lernt heute zuhause." (TeKaMoLo demo)
- Object: "Ich schenke dir ein Buch."
- Time: (time-emphasized example)
- Place: (place-emphasized example)

**Interaction behavior:** Tap a word — popup opens. Tap the card's audio button — sentence plays cleanly at 1.0× with neutral pitch.

**Mobile behavior:** Grid drops to 1 column. Cards stay full-width. Audio buttons remain right-aligned and tap-friendly.

**Conversion role:** Visitor sees their first complete "structure → audio → meaning" loop. This is where the product feel locks in.

**Future extensibility:** Add a card for every new core role. Cap at 5 for the homepage; deeper roles belong in chapter pages.

---

### 10.5 Method · 02 — Four cases

**Purpose:** Show that case (Nominativ, Akkusativ, Dativ, Genitiv) is also color-encoded — building on the spine.

**Anatomy:** Display heading "Four cases. Read by their color.", case explanation cards or a sentence with the cases highlighted by background pill color (Akkusativ green pill, Dativ olive pill, etc.).

**UX role:** Promotes the cases from "the hard part of German" to "the colored pills."

**Conversion role:** Reduces the cognitive barrier — "if I can see them, I can learn them."

---

### 10.6 Word card preview

**Purpose:** Show the popup as a static product mockup so visitors who haven't tapped yet can see what they're invited to do.

**Anatomy:** A non-interactive replica of the live popup, anchored in a section frame with surrounding context.

**UX role:** "Here's what happens when you tap a word." A scroll-readable demo.

---

### 10.7 AI tutor preview

**Purpose:** Preview the AI conversation tutor as a chat UI mockup — real product feel.

**Anatomy:** Chat bubbles (Klarweg AI + user), demonstrating correction, explanation in Hindi/English, and grammar-color highlighting in the AI's responses. Includes a "type here" affordance (non-functional on the homepage).

**Interaction behavior:** Static on the homepage. Future: this becomes a live limited-trial widget that visitors can talk to before paying.

**Conversion role:** Shows the post-purchase product surface. Validates the "premium" claim with a tangible artifact.

**Future extensibility:** Wire a real model call behind it with a small free-tier limit. Trial → conversion is a high-leverage upgrade path here.

---

### 10.8 Story-based learning (Im Café — the dialogue showcase)

**Purpose:** Show that Klarweg teaches through real stories, not isolated drills.

**Anatomy:**
- Eyebrow + section title
- Dialogue bubbles in left/right alternation:
  - Anna (left, `data-voice="female"`) — "Was möchten Sie trinken?" / "Klein oder groß?"
  - Rohan (right, `data-voice="male"`) — "Ich nehme einen Kaffee, bitte." / "Groß, mit Milch."
- Master "Play conversation" button + speed control cycling 1× / Slow / Very slow

**Interaction behavior:** Master button kicks off `playDialogue(bubbles, btn, {rate})`. Bubbles play in sequence with 150ms inter-bubble delay. Anna sounds brighter (pitch 1.5, rate × 1.05), Rohan sounds deeper (pitch 0.5, rate × 0.95). Individual bubbles can also be tapped to play just that line. Every German word in the bubbles is tappable for the popup.

**Mobile behavior:** Bubbles stack normally (left = subtly indented from left edge, right = subtly indented from right). Master button remains accessible. Speed control collapses if needed but stays usable.

**Conversion role:** "This is what your daily learning will feel like." Premium audio, premium voices, story context — the antithesis of flashcard apps.

**Future extensibility:** More stories can be added with the same bubble structure. Voice assignments via `data-voice` make any character easy to wire up.

---

### 10.9 Method · 05 — Inside a Klarweg chapter

**Purpose:** Bento-style visual breakdown of what a chapter contains.

**Anatomy:** Bento grid of cards — each card represents a chapter component (vocabulary, grammar deep-dive, story, AI tutor session, homework PDF, certificate). Visual variety, premium card treatment.

**UX role:** Shows that "one chapter = many product surfaces." Justifies the price.

**Conversion role:** Counters the "is it worth it?" objection with concrete artifacts.

---

### 10.10 Goethe band

**Purpose:** Position Klarweg as Goethe-exam-aligned.

**Anatomy:** Eyebrow, headline that names Goethe explicitly, mapping of Klarweg levels to Goethe certificate names (A1 → Start Deutsch 1, B1 → Zertifikat B1, etc.). Visual reference to Goethe's official structure without using their logo.

**UX role:** Anchor for visitors who came searching "Goethe A1 prep" or "B1 exam India."

**Conversion role:** Direct match for highest-intent search traffic.

**Future extensibility:** Add a Goethe past-paper integration link when that product ships.

---

### 10.11 CEFR Roadmap

**Purpose:** Show the full A1 → C2 path as a single, walkable roadmap.

**Anatomy:** Six level cards (A1, A2, B1, B2, C1, C2) in a row (or stacked on mobile). Each shows:
- Level letter + name
- Number of chapters
- Price tag
- "Start free chapter →" CTA
- Brief outcome statement ("Hold basic conversations" / "Pass Zertifikat B1" / etc.)

**Interaction behavior:** Each level card links to its level page (`/a1`, `/a2`, etc.). The "Start free chapter" link goes to that level's Chapter 1 (free).

**Mobile behavior:** Cards stack vertically. Heights match. Price stays prominent.

**Conversion role:** Multi-entry-point conversion — visitors can self-segment by level and enter Chapter 1 directly.

**Future extensibility:** Add level-specific micro-pages between the homepage and chapter pages. Roadmap pages then deepen the path.

---

### 10.12 Bento ecosystem

**Purpose:** Show that Klarweg is a full product, not a course.

**Anatomy:** Bento grid showing the ecosystem — Web app, Mobile app, AI tutor, Certificates, Homework PDFs, Story library, Hören drills, Speaking drills, etc.

**UX role:** Visual scale. The bento grid signals "category-leading product."

**Conversion role:** Justifies premium pricing. Counters "isn't this just a website?"

---

### 10.13 Social proof

**Purpose:** Show testimonials, learner counts, and result claims.

**Anatomy:** Cards with learner quotes (Hindi-speaking Indian learners), photos optional, exam-pass claims with level context.

**UX role:** Trust anchor before the pricing reveal.

---

### 10.14 Pricing — the centerpiece

See [§12 Pricing architecture](#12-pricing-architecture) for full detail.

---

### 10.15 FAQ

**Purpose:** Pre-empt the last few objections — refund policy, device support, Hindi vs English support, certificate validity, payment methods.

**Anatomy:** Accordion-style question/answer pairs with smooth open/close.

**UX role:** Last-mile conversion friction remover.

---

### 10.16 Final CTA

**Purpose:** One last conversion attempt for visitors who reached the bottom.

**Anatomy:** Big display headline, single primary CTA (free chapter), tertiary "still have questions?" link to support/FAQ.

**Conversion role:** Catch the long-scroll readers.

---

### 10.17 Footer

**Purpose:** Functional — links, legal, social, language switch (future).

**Anatomy:** Multi-column footer with Klarweg logo, product links, company links, legal links, social row.

---

### 10.18 Sticky CTA

**Purpose:** Persistent conversion option as the visitor scrolls.

**Anatomy:** Small pill-shaped sticky bar — usually bottom-right on desktop, bottom-center on mobile — with "Start free →" button. Appears after the visitor scrolls past the hero.

**Mobile behavior:** Full-width or near-full-width sticky bar above the system browser chrome.

**Conversion role:** Never make the visitor scroll back up to convert.

---

### 10.19 Word card modal

The popup (§8) — present in the DOM at all times, hidden by default, opened by word taps from any section.

---

## 11. Shared CTA structure

### 11.1 Two CTA tiers

| Tier | Treatment | Use |
|---|---|---|
| **Primary** | Coral fill (`#D85A30`), white text, soft coral glow shadow | "Start free chapter", final CTA |
| **Secondary** | Outline pill, ink-primary text, hairline border | "How it works", "See pricing", anchor jumps |

### 11.2 Tertiary

Inline ink-tertiary links with hover underline — used for FAQ, support, and quiet cross-navigation.

### 11.3 CTA microcopy rules

- Primary CTA is always action-oriented and concrete: "Start free chapter", not "Learn more".
- Never use "Sign up" alone — always pair with the value ("Start free chapter").
- Secondary CTAs name a destination: "See A1 roadmap" beats "Continue".
- Tertiary copy stays calm and short.

---

## 12. Pricing architecture

### 12.1 Current pricing

| Product | Price | Stack |
|---|---|---|
| A1 | ₹1,999 | Single level, full A1 chapters |
| A2 | ₹2,999 | Single level, full A2 chapters |
| B1 | ₹3,999 | Single level, full B1 chapters |
| B2 | ₹4,999 | Single level, full B2 chapters |
| C1 | ₹7,999 | Single level, full C1 chapters |
| C2 | ₹8,999 | Single level, full C2 chapters |
| **Lifetime A1–C2** | **₹4,999** | All levels, lifetime access. **Strike ₹30,994** (sum of all individuals) |

### 12.2 The pricing card

Each card:
- Level letter (display font, color-coded by level family)
- Price (large display, gradient ink)
- Strike-through original (Lifetime only)
- Inclusions list (3–5 bullets)
- "Start free chapter" CTA (links to that level's free Chapter 1, except Lifetime which links to A1)
- Footer microcopy if applicable

### 12.3 The Lifetime card

The Lifetime card is visually elevated:
- `.price-card.center` modifier — slight scale and elevation
- Strike-through `₹30,994` next to the `₹4,999` price, both inside a `.price-big` flex container with `flex-wrap: wrap` so the strike falls below the amount on narrow viewports
- Strike font-size: 22px desktop, **16px mobile** with `white-space: nowrap` so the `30,994` comma never breaks
- No "Best value" badge currently — the strike-through carries the value claim

### 12.4 Conversion logic

- Single-level cards are the **default entry** for visitors who self-identify as a specific level.
- Lifetime is the **commitment upgrade** — shown after the visitor has accepted that they want all six levels eventually. The strike-through makes the math obvious: ₹4,999 is one B2 single-level price, but you get everything.
- Free Chapter 1 at every level is the **acquisition mechanism** — no purchase needed to try.

### 12.5 Mobile behavior

Pricing cards stack vertically. The Lifetime card stays prominent (no de-emphasis on mobile). The strike-through layout uses the flex-wrap fallback so `₹30,994` always fits, regardless of viewport width.

---

## 13. Free chapter conversion flow

### 13.1 The promise

**Chapter 1 of every level is free, forever, no signup required to read.** Audio works. Word taps work. AI tutor preview is rate-limited but available.

### 13.2 The funnel

```
Homepage → Level CTA → Chapter 1 (free) → Chapter 2 paywall → Pricing card → Purchase → Full level
                                                                        ↓
                                                                Lifetime upsell
```

### 13.3 The conversion levers

1. **Chapter 1 quality is uncapped.** Same audio, same popups, same color system, same story bubbles as paid chapters. No "lite" version.
2. **Chapter 2 is the conversion event.** Visitor has invested ~30 minutes, learned the alphabet (A1) or imperfekt (B2), and wants the next chunk. Paywall appears clean and contextual.
3. **The Lifetime nudge** appears on the paywall — "or get all 6 levels for the price of B2."

### 13.4 Homepage role in the funnel

Homepage is the top of the funnel. Its job is to get visitors into Chapter 1. The free chapter is what does the actual converting.

---

## 14. Goethe positioning strategy

### 14.1 Why Goethe matters

For Hindi-speaking Indians, "German for the Goethe exam" is the dominant intent — for university admission, work visa, or family reunification. SEO and brand discovery flow through this intent.

### 14.2 How Klarweg positions

- Klarweg levels map 1:1 to Goethe certificates (A1 → Start Deutsch 1, B1 → Zertifikat B1, etc.)
- Chapter content is Goethe-aligned in vocabulary, grammar order, and exam-question style
- The Goethe band on the homepage names this explicitly
- Goethe-specific resources (past papers, exam strategy) live in deeper chapter pages

### 14.3 What we don't claim

- We are not affiliated with Goethe-Institut. No logos, no implied endorsement.
- We don't promise pass rates we can't substantiate.

---

## 15. AI tutor preview

### 15.1 What the homepage shows

A chat-UI mockup — Klarweg AI + user bubbles — that looks and feels exactly like the real product. The AI's responses use grammar-color highlighting inline, so visitors see the color system in action even in the tutor.

### 15.2 Why it's there

- Demonstrates the product is more than static lessons.
- Validates the "premium" claim with a concrete artifact.
- Lets visitors imagine asking their own questions.

### 15.3 Future evolution

Phase 1 (current): static mockup.
Phase 2: live AI conversation widget with a 3-message free trial.
Phase 3: full tutor surface from inside Chapter 1 onward, with paid expansion.

---

## 16. Hören / Speaking preview systems

### 16.1 Hören (listening)

The Story-based learning section (Im Café) is the homepage's Hören preview. Premium audio, native German voices, dialogue chain, speed control — all the features that will appear in chapter Hören drills, demonstrated in story context.

### 16.2 Speaking

Currently the homepage references speaking practice but does not include a live speaking drill. Future expansion (see §24) covers a microphone-input speaking widget.

### 16.3 The shared audio engine

Both Hören and speaking systems will reuse `KW_Audio` and the same voice profiles. A learner who tunes into Anna's voice on the homepage will encounter the same Anna in chapter Hören content — consistent character, consistent timbre.

---

## 17. Story-learning showcase

See [§10.8 Story-based learning](#108-story-based-learning-im-café--the-dialogue-showcase).

The Im Café story is the canonical example. Future stories should follow the same bubble structure (`dialog-bubble.left` / `.right` with `data-voice`) and the same per-bubble + master playback pattern.

---

## 18. Mobile responsiveness rules

### 18.1 Breakpoints

| Range | Treatment |
|---|---|
| ≥ 1024px | Desktop default |
| 768–1023px | Tablet — slightly tighter padding, larger CTAs |
| 540–767px | Large mobile — single-column most sections |
| < 540px | Small mobile — tight typography, full-width CTAs, popup slides up |

### 18.2 Principles

- **Single-column on mobile is the default.** Anything multi-column on mobile must justify itself (color chips, level cards).
- **Touch targets ≥ 44px.** All buttons, toggles, audio controls.
- **Typography down-scales** but never below 14px for body, 16px for inputs.
- **Sticky CTA on mobile** uses bottom-bar pattern, not bottom-right pill.
- **Hero stays full-impact on mobile** — display headline reduces to display-md but the demo sentence remains tappable.
- **Padding rhythm:** 88px section padding desktop → 64px mobile. Container side padding 24px desktop → 16px mobile.

### 18.3 Mobile-specific overrides currently in CSS

- `.color-system` padding reduces to `64px 0`
- `.cs-grid` collapses to 2 columns, gap shrinks
- `.cs-chip` padding tightens to `8px 12px`
- `.cs-dot` shrinks 14px → 12px (core) and 18px → 14px (core)
- `.cs-toggle` font-size 12px, padding `10px 18px`
- `.price-big-strike` font-size 16px (from 22px)
- Dialog bubbles tighten left/right indents

### 18.4 Audio on mobile

iOS Safari has a known audio context behavior: speech may drop if utterances are too tightly chained or if the page background-tabs. The 150ms inter-bubble delay in `advanceDialogue` is the workaround. Do not reduce this delay.

---

## 19. Visual hierarchy & section spacing rhythm

### 19.1 Section rhythm

Sections alternate between:
- **Light surfaces** (`--bg-canvas`) — default
- **Elevated surfaces** (`--bg-elevated` or `--bg-warm`) — break the rhythm to draw attention

Padding rhythm: **88px top/bottom on desktop, 64px on mobile** for most sections. Hero gets ~120px top. Final CTA gets emphasized padding.

### 19.2 Headline rhythm

- **One display headline per section.** Two is acceptable when the section has clear sub-parts (e.g., Color system has tier-level h4s under the section h2).
- Eyebrow → Display headline → Lede is the standard three-line section opening.
- Eyebrow stays small, uppercase, ink-tertiary. Display headline is the focal point. Lede is calm.

### 19.3 Card grid rhythm

- 3–4 cards per row on desktop max (5 only for the spine row in color system)
- 2 cards per row on tablet
- 1 card per row on small mobile (color chips remain 2-per-row as an exception)

---

## 20. Shared UI patterns

### 20.1 Eyebrow

```html
<span class="eyebrow">The color system</span>
```

Uppercase, 11–12px, weight 600, letter-spacing `0.12em`, color `--ink-tertiary`. Always paired with a display heading underneath. Margin-bottom 16px to the heading.

### 20.2 Pill button (toggle / secondary CTA)

Full-radius pill, `--bg-surface` background, `--hairline` border, ink-primary text. Hover lifts 1–2px with `--shadow-soft`. Optional chevron/icon to the right of the label.

### 20.3 Chip (color legend, role tag)

`.cs-chip` — small pill with a colored dot and an ink label. 10–14px padding, gap 8–10px. Hover lifts 1px.

### 20.4 Card

Background `--bg-surface`, border `--hairline`, radius 16–20px, padding 24–32px. Hover lift: 2px translate, `--shadow-card` → `--shadow-lift`.

### 20.5 Sentence container

`.sentence[data-playable]` — flow text, German words rendered via `.de.r-{role}[data-word]` spans. Auto-injector wires audio button and word taps.

### 20.6 Audio button states

| State | Visual |
|---|---|
| `data-state="idle"` | Play triangle, calm |
| `data-state="loading"` | Subtle spinner |
| `data-state="playing"` | Stop square + faint pulse |

State key: `data-state`. CSS keys everything off this attribute. Always use `setState(btn, state)` to mutate.

### 20.7 Section header pattern

```html
<div class="section-header">
  <span class="eyebrow">…</span>
  <h2 class="display display-md">…</h2>
  <p class="lede">…</p>
</div>
```

---

## 21. Accessibility & touch-target rules

### 21.1 Touch targets

- All interactive elements: **minimum 44 × 44px** tap area.
- Audio buttons: 40px visible, 44px tap zone via padding.
- Pill toggles: 11–12px vertical padding plus 13–14px font = 38–40px height — boosted to 44px on mobile via min-height where needed.

### 21.2 Focus visibility

- Default browser focus rings respected.
- Custom `:focus-visible` ring on toggles: 2px solid `--g-subject` (spine blue) with 3px offset.
- Never `outline: none` without a replacement.

### 21.3 ARIA

- Toggles: `aria-expanded`, `aria-controls`, content gets `aria-hidden`.
- Audio buttons: descriptive `aria-label` per button context.
- Popup: `role="dialog"`, `aria-modal="true"`, focus traps inside while open.
- Chevron icons: `aria-hidden="true"` — semantic label carries meaning.

### 21.4 Color contrast

- Body ink (`#0E0E10`) on `--bg-canvas` (`#FAFAF7`): AAA.
- Tertiary ink on canvas: AA on body sizes, fine for meta.
- Grammar colors on light surface: AA on inline text. Where contrast risks fail (light role colors), color is paired with a label or icon, not standalone.

### 21.5 Reduced motion

- Where motion is non-essential, respect `prefers-reduced-motion: reduce` and shorten or cut transitions.
- Audio playback, word highlighting, and modal entry continue to function regardless — they are semantic, not decorative.

### 21.6 Keyboard

- Tab order follows DOM order.
- Enter / Space activate buttons.
- Escape closes the popup.
- Arrow keys do not navigate sections (avoid hijacking).

---

## 22. Conversion strategy

### 22.1 The three-touch path

1. **Touch 1 — Hero tap.** Visitor taps a German word in the hero demo. Popup opens. They get it. Conversion to "this might actually work for me."
2. **Touch 2 — Method or story.** Visitor scrolls and watches the role cards or plays the Im Café conversation. Conversion to "this is premium, not amateur."
3. **Touch 3 — Free chapter CTA.** Visitor clicks "Start free chapter" from anywhere (hero, sticky, level card, final CTA). Enters Chapter 1. Real conversion happens inside the chapter.

### 22.2 What kills conversion

- Long unbroken scrolls of text → blocks of color and interaction split the page
- Hero video → static interaction is more honest
- Pricing-first → trust must be earned before price is asked
- "Sign up to try" → free chapter requires no signup
- Comparison tables vs Duolingo → never punch down; we sit above the comparison

### 22.3 What lifts conversion

- The first word tap. Everything is designed to invite it.
- Premium audio in Im Café. The voices establish credibility.
- The Lifetime strike-through. Math becomes a value claim.
- Sticky CTA. Removes the "scroll up to convert" friction.

---

## 23. Scalability & maintenance principles

### 23.1 Where to add things

- **New grammar role:** add to `:root` CSS as `--g-{name}`, add accent entry to `accentToColor()`, add `r-{name}` class rule, add chip to the appropriate color-system tier, tag relevant WORDS entries.
- **New playable sentence anywhere:** wrap in `.sentence[data-playable][data-sentence="…"]` with `.de.r-{role}[data-word]` spans. Auto-injector handles audio. Word-tap handler handles popup.
- **New dialogue:** wrap in `.dialog-bubble.left|.right[data-voice="female|male"][data-playable]`. Add a master "Play conversation" button calling `KW_Audio.playDialogue(bubbles, btn, opts)`.
- **New WORDS entry:** add to the dictionary with `accent` matching the inline `r-{role}` class color.
- **New section:** follow the three-line section opening (eyebrow + display + lede), respect spacing rhythm.

### 23.2 Where not to add things

- **Don't add idle animations.** The page is calm by design.
- **Don't add per-section color schemes.** The grammar color system is the only color system that carries meaning.
- **Don't add tooltips or onboarding overlays.** The product teaches via interaction, not annotation.
- **Don't duplicate copy across sections.** Each section has one job; don't re-state.

### 23.3 The 51-token contract

The 51 grammar tokens are a stable contract. Removing one breaks chapter content. Renaming one (e.g., changing `--g-subject` to `--g-actor`) requires a full audit. Adding is cheap; removing/renaming is not.

### 23.4 The audio engine contract

`KW_Audio.playSentence`, `playDialogue`, and `stop` are the only public methods chapter pages should call. Internal helpers (`buildWordMap`, `pickGermanVoices`, etc.) are subject to change. Treat the public API as stable.

---

## 24. Future expansion notes

### 24.1 Homepage → Roadmap pages

Each level (A1, A2, B1, B2, C1, C2) gets a dedicated roadmap page that the homepage's CEFR Roadmap section links to:

- `/a1` — Goethe Start Deutsch 1 roadmap, chapters listed, free Chapter 1 link
- `/a2` — Goethe Start Deutsch 2 roadmap
- `/b1` — Goethe Zertifikat B1 roadmap
- `/b2` — Goethe Zertifikat B2 roadmap
- `/c1` — Goethe Zertifikat C1 roadmap
- `/c2` — Goethe Zertifikat C2 roadmap

**Roadmap page architecture** (mirror the homepage system):
- Hero: level-specific framing ("A1 in 8 weeks, Goethe-aligned, with the Klarweg color system")
- Chapter grid: every chapter with title, number, free/paid status, estimated time
- Goethe alignment band: how this level maps to exam content
- Pricing CTA: this level single + Lifetime upsell
- Sticky CTA: "Start free Chapter 1"

The roadmap pages **inherit** the design tokens, typography, motion, grammar color system, audio engine, word-card popup — all of it. No new design language. Same Klarweg DNA.

### 24.2 Roadmap pages → Chapter pages

Each chapter page is a long-form interactive learning surface that uses the same systems:

- The audio engine plays every sentence and every word.
- The popup opens for every taggable word.
- Story bubbles, role cards, color chips all reappear in chapter context.
- Chapter-specific additions: vocabulary tables, grammar deep-dives, Hören drills, speaking drills, AI tutor session, homework PDF, end-of-chapter quiz, certificate trigger.

**Chapter page architecture** (per chapter):
- Chapter hero with goal statement
- Vocabulary unveil (color-coded)
- Grammar concept (with example sentences via the auto-injector)
- Story segment (dialogue bubbles, premium audio)
- Drill block (Hören + speaking + writing)
- AI tutor session
- Mini-quiz
- Homework PDF download
- "Next chapter" CTA (paywall on Chapter 2+)

### 24.3 Future AI tutor integration

**Phase 1 (current):** static mockup on the homepage.

**Phase 2:** live limited-trial widget that calls a model with the visitor's text, returns a German correction or explanation, renders the response inline with grammar coloring. Rate-limited (3 messages per session). The widget on the homepage and the inline chapter tutor share the same backend.

**Phase 3:** full tutor surface inside Chapter 1 onward. Paid users get unlimited messages, voice input, voice output (using Anna/Rohan voices for consistency), and contextual help anchored to the chapter content.

**Integration principle:** the tutor must teach via the color system. Every German word the tutor returns is auto-tagged with role and renders in the matching grammar color. This is what makes it feel like Klarweg and not a generic chatbot wrapper.

### 24.4 Future Hören integration

**The Hören system at scale:**
- Long-form dialogues with multiple voices (Anna, Rohan, and additional characters added via `data-voice` attributes mapped to additional voice profiles).
- Comprehension question bank attached to each dialogue.
- Adaptive speed (1× / Slow / Very slow) applies everywhere.
- Word highlighting during slow playback uses the same `playSentenceWordByWord` system from the homepage audio engine.

**Goethe-style Hören drills:**
- Multi-part audio (Teil 1, Teil 2, Teil 3, Teil 4) matching official exam structure.
- Auto-graded multiple choice / true-false.
- Audio scrubber and replay.

All built on `KW_Audio`. No second audio system.

### 24.5 Future Speaking integration

**Speaking drills via microphone input:**
- Web Speech Recognition API for pronunciation feedback.
- Compare learner's audio to native reference (Anna or Rohan reading the prompt).
- Visual feedback per syllable using the same word-highlight system inverted (learner's audio vs. native).
- Goethe-aligned speaking task formats.

**Conversation practice:**
- Live AI tutor conversation in voice mode.
- Anna or Rohan voices for the AI replies.
- Real-time correction with grammar color highlighting on transcribed user speech.

### 24.6 How the homepage should evolve

**Allowed evolution:**
- Add new sections that reinforce the three jobs (proof, premium, convert).
- Swap demo sentences and stories for seasonal or level-targeted variants.
- Add level-targeted hero variants (A1-intent vs B2-intent).
- Integrate live AI tutor widget (Phase 2 above).
- Add live Hören drill preview as a mini-section.
- Add learner success cards with real exam scores when permission and data are available.

**Forbidden evolution:**
- Removing the hero tap interaction — it's irreducible.
- Removing the color system section — it's the product's vocabulary, exposed.
- Removing the Lifetime card or its strike-through — it's the conversion math.
- Adding a "premium" tier above Lifetime — Lifetime is the ceiling.
- Replacing Fraunces for German words — it's the visual signal.
- Adding non-Goethe certifications — focus is a feature.
- Hero video — static interaction is the brand promise.
- Mascots, cartoons, or character illustrations — premium positioning forbids them.
- Cyberpunk / neon / dark-mode-first design — Klarweg is light-canvas.

**Optional evolution path:**
- A genuine dark mode (preserving warmth, not cyberpunk) as a user preference, never the default.
- Hindi-language UI toggle (currently English UI + Hindi in WORDS translations).
- Regional language additions (Tamil, Bengali, Telugu in WORDS translations).
- Localized payment flows (UPI primary, EMI, international fallback).
- Mobile native apps that hand off to the same shared backend, reusing `KW_Audio` patterns rebuilt natively but with identical voices and identical color system.

### 24.7 The Klarweg identity preservation rule

**The homepage can evolve infinitely as long as these five anchors remain visible within the first scroll:**

1. **One tappable German sentence** with grammar coloring active.
2. **The "see structure" thesis** stated in display type.
3. **The premium audio promise** kept (no robotic voices, no cheap synthesis).
4. **A free entry path** (Chapter 1 free, no signup wall).
5. **Goethe positioning** named or implied in the first scroll.

Lose any of these and the homepage becomes a different product's homepage. Keep them, and Klarweg grows without drift.

---

*Document version: 1.0 — extracted from the live homepage implementation. Update this file whenever the homepage architecture changes materially. Treat it as the source of truth for Claude chats, contractors, and the team.*
