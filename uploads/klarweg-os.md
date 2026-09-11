# Klarweg OS — Master System File

> The source-of-truth document for every Klarweg product, page, chapter, and feature.
> Read this before writing a single line of code, copy, or design.

---

## Part 0 — How to use this file

This document is the operating system for Klarweg. It captures every design, audio, interaction, copy, and engineering decision that defines the product. It exists so that no future contributor — human or AI — has to guess.

**The rules of engagement:**

1. **Treat this file as source of truth.** When a request conflicts with what is written here, surface the conflict before changing anything. Do not silently override.
2. **Read top-down on first contact.** Parts 1–3 establish identity. Skipping them and jumping to implementation produces work that looks Klarweg-adjacent but is not actually Klarweg.
3. **Grep before inventing.** Variable names, class names, color tokens, audio rates, breakpoints — they all already exist. Reuse, don't reinvent.
4. **Extend the file when extending the system.** A new grammar role, a new chapter pattern, a new level module — they all get added here in the same session as the implementation. No drift.
5. **Defer to the forbidden zones (Part 23).** If a request would violate a "never" rule, ask before complying. Klarweg's identity is defined as much by what it refuses as by what it does.

---

## Part 1 — Brand Philosophy

Klarweg means *clear path*. Every design decision serves that name.

**The thesis:** German is not random — most learners have just never been shown the system. Klarweg makes the system visible, then audible, then habitual. The product earns its premium price by being the first place a Hindi-speaking learner sees German structure click into place rather than memorizing rules in isolation.

**The brand voice:**

- Calm, confident, never loud.
- Specific over generic. We say "Akkusativ object in emerald" not "case in green."
- Respects the learner. Never patronizes, never cheerleads, never speaks down.
- Sounds like a thoughtful tutor at a top university, not a marketer and not a mascot.
- Code-switches gracefully into Hindi where it helps comprehension (Part 21) — but Hindi is a bridge to German, never a destination.

**The brand emotion:** the quiet pride of holding something well-made. The same feeling as opening a Linear app, reading a Stripe doc, or unboxing a MacBook. Klarweg should feel like that — for German learning.

---

## Part 2 — Product Vision

**Who Klarweg is for:** Hindi-speaking Indians, 16–40, learning German for the Goethe exam, university admission to Germany, employment in DACH countries, or migration. Many are switching from free YouTube tutorials and basic apps because they have hit a wall — usually around A2 grammar, B1 listening, or exam-format practice. They want a serious tool that respects their seriousness.

**What the product does:**

1. Teaches A1 → C2 with color-coded grammar, premium audio, AI-corrected practice, and Goethe-aligned exam preparation.
2. Lets learners see, hear, and produce German — in that order — for every concept.
3. Issues Klarweg certificates per level and prepares learners for the official Goethe-Zertifikat exams.

**The core loop, one sentence:** *see the color → hear the sound → understand the role → produce the structure → get corrected → move on.*

**The product surface:**

- A homepage that demonstrates the method in 35 seconds of scrolling.
- Chapter pages that are interactive 30–60 minute learning experiences, not slide decks.
- An AI tutor available inside lessons for speaking and writing correction.
- A revision system that resurfaces structure rather than vocabulary lists.
- An exam-prep module from B1 onward that mirrors Goethe format exactly.

---

## Part 3 — What Klarweg is and is not

| Klarweg **is** | Klarweg **is not** |
|---|---|
| A premium product priced like serious software | A budget app that competes on cents |
| Quiet, structural, confident | Loud, gamified, mascot-driven |
| Built for Hindi-speaking adults | Built for children or general international learners |
| Visual and color-led | Translation-led or rule-memorization-led |
| Goethe-aligned by design | Generic CEFR-aligned |
| One-page, single-HTML, no-framework | A SaaS dashboard or a JavaScript-heavy SPA |
| Apple/Stripe/Linear visual register | Duolingo, Memrise, Babbel, Lingoda visual register |

---

## Part 4 — Visual Identity

### 4.1 Color palette (UI, non-grammar)

| Token | Value | Use |
|---|---|---|
| `--bg-canvas` | `#FAFAF7` | Page background (warm off-white) |
| `--bg-surface` | `#FFFFFF` | Cards, chips, popups |
| `--bg-warm` | `#FFF8EC` | Highlights, soft sections, "feature" backgrounds |
| `--ink-primary` | near-black, ~`#0E0E10` | Body copy, headlines |
| `--ink-secondary` | dark grey | Subheads, secondary text |
| `--ink-tertiary` | mid grey | Labels, captions, metadata |
| `--hairline-light` | very low-alpha grey | Section dividers |
| `--hairline` | low-alpha grey | Borders on chips, cards |
| `--hairline-strong` | slightly stronger grey | Hover-state borders |

**Rules**

- Never use saturated brand colors outside the grammar color system. The 51 grammar colors are the only saturated palette on Klarweg.
- Backgrounds are always warm off-white, never cool grey, never pure white at page level.
- Use `bg-surface` (pure white) only inside cards/chips/popups that sit on top of `bg-canvas`.

### 4.2 Shadows & elevation

| Token | Use |
|---|---|
| `--shadow-soft` | Hover state on chips, cards, buttons |
| `--shadow-card` | Resting elevation for primary cards |
| `--shadow-modal` | Popup / modal layer |

**Rules**

- Default elevation is flat (hairline border only). Raise to `--shadow-soft` on hover, `--shadow-card` for sections that need to feel "lifted" (pricing cards, AI tutor preview).
- Never use dark/saturated shadows. All shadows are warm-tinted, low-alpha.

### 4.3 Radii

| Token | Use |
|---|---|
| `--r-xs` (~6px) | Small inline elements |
| `--r-sm` (~10px) | Buttons, secondary cards |
| `--r-md` (~14px) | Primary cards |
| `--r-lg` (~20px) | Hero cards, large containers |
| `--r-full` | Pills, chips, toggles |

**Rules**

- Pills (`--r-full`) are reserved for toggles, color chips, eyebrows, and small inline labels.
- Cards default to `--r-md`. Hero cards and Bento tiles use `--r-lg`.

### 4.4 Spacing scale

- 4 / 8 / 12 / 16 / 24 / 36 / 48 / 64 / 80 / 96 / 120
- Section vertical padding default: 88px desktop, 64px mobile.

---

## Part 5 — Grammar Color System

The 51-color grammar system is Klarweg's most important design asset. It is the difference between Klarweg and every other German app.

### 5.1 The Spine (5 core colors)

These five colors appear in every sentence on Klarweg. They are the load-bearing structure of the entire visual identity.

| Role | CSS variable | Hex | Visible name |
|---|---|---|---|
| Subject | `--g-subject` | `#185FA5` | Blue |
| Main Verb | `--g-verb` | `#DC2626` | Red |
| Object | `--g-object` | `#2E7D32` | Green |
| Time | `--g-time` | `#7C3AED` | Purple |
| Place | `--g-place` | `#EA580C` | Orange |

### 5.2 Cases

| Role | CSS variable | Visible name |
|---|---|---|
| Akkusativ Object | `--g-akkusativ` | Emerald (`#10B981`) |
| Dativ Object | `--g-dativ` | Olive (`#5C7A1D`) |
| Genitive | `--g-genitiv` | Bronze |

### 5.3 Words & Modifiers

`--g-adjective` Amber · `--g-adverb` Cyan · `--g-article` Copper · `--g-preposition` Yellow · `--g-conjunction` Brown · `--g-negation` Magenta · `--g-question` Pink · `--g-interjection` Coral · `--g-particle` Violet · `--g-number` Crimson · `--g-ordinal` Wine · `--g-frequency` Mint

### 5.4 Pronouns

`--g-possessive` Lime · `--g-reflexive` Turquoise · `--g-relative` Maroon · `--g-demonstrative` Mustard · `--g-indefinite` Navy · `--g-dummy-es` Sky Blue

### 5.5 Verbs

`--g-modalverb` Ruby · `--g-auxiliary` Silver · `--g-infinitive` Burgundy · `--g-separable-verb` Rust · `--g-non-separable` Salmon · `--g-reflexive-verb` Aqua · `--g-separable` Scarlet · `--g-imperative` Vermilion · `--g-future` Indigo · `--g-passive` Lavender · `--g-modal` Teal

### 5.6 Clause Structure

`--g-main-clause` Sapphire · `--g-subordinate` Tan · `--g-relative-clause` Chocolate · `--g-sentence-connector` Walnut · `--g-condition` Mint Green · `--g-result` Flame Orange · `--g-contrast` Plum · `--g-reason` Gold

### 5.7 Advanced

`--g-comparison` Peach · `--g-superlative` Sunflower · `--g-direction` Cherry · `--g-temporal-adverb` Deep Purple · `--g-local-adverb` Apricot · `--g-manner-adverb` Ice Blue

### 5.8 The `accentToColor` lookup

Each WORDS dictionary entry has an `accent` short key (e.g. `'purple'`, `'red'`, `'orange'`) that maps to the corresponding `--g-*` variable via a lookup table in JS. This table is the single point of resolution from data to color.

**Rules**

- Every WORDS entry must have a correct `accent` key. Time words → `'purple'`. Place words → `'orange'`. Etc.
- When in doubt, re-derive the accent from the `role` field — never guess.
- Never introduce a new color outside this 51-variable system without adding it to the table here AND to the CSS variables in the same change.
- The Spine 5 are sacred. Their hex codes do not change. Cases come after the Spine and never override Spine colors.
- Color is the primary indicator of role. Position is secondary. The system must read at a glance even before the learner knows the names of the roles.

### 5.9 Display rules for colored words

- `.de` class on every German word span.
- `.r-<role>` class for the grammar role (`r-subject`, `r-verb`, `r-time`, etc.).
- Optional `.c-<case>` class for case (`c-nom`, `c-acc`, `c-dat`, `c-gen`).
- `data-word="<key>"` to bind the span to a WORDS dictionary entry.
- Word color comes from the `.r-*` class via `color: var(--g-*); font-weight: 500;`.
- Font weight 500 (Inter/Fraunces medium) is the standard weight for colored words. Never bold them — color is the emphasis.

### 5.10 Forbidden in the color system

- Never display two adjacent words in the same color unless they are part of the same role group (e.g., a multi-word time phrase).
- Never use grammar colors in pure decoration (icons, dividers, backgrounds). They are reserved for grammar.
- Never lower the saturation or shift the hue of a Spine color "to match a brand mood." The hex codes are fixed.
- Never invent a 52nd role without explicit approval and a documentation update.

---

## Part 6 — Typography

### 6.1 The three faces

| Variable | Font | Role |
|---|---|---|
| `--font-display` | **Fraunces** | Display headlines, emphatic German italics, the "intellectual premium" face |
| `--font-ui` | **Inter** | All UI text, body copy, labels, buttons, navigation |
| `--font-german` | **Fraunces** italic, weight 500 | Highlighted German phrases inside English sentences (e.g. *"see"* in headlines) |
| `--font-mono` | **JetBrains Mono** | Technical text, IPA, code snippets, pronunciation guides where mono-spacing aids parsing |

### 6.2 Type scale

| Token | Desktop | Mobile |
|---|---|---|
| `display-xl` | 88px | 56px |
| `display-lg` | 64px | 44px |
| `display-md` | 48px | 36px |
| `display-sm` | 32px | 26px |
| `lede` | 22px | 18px |
| `body` | 17px | 16px |
| `caption` | 13px | 12px |
| `eyebrow` | 12px tracked +0.12em uppercase | same |

### 6.3 Rules

- Display sizes use Fraunces, letter-spacing slightly negative (-0.02 to -0.04em depending on size), line-height 1.05.
- Body text uses Inter, weight 400, line-height 1.55, letter-spacing -0.005em.
- German words inline in English sentences use `var(--font-german)` italic — never the Inter italic, which is unremarkable.
- Eyebrows are always 12px, uppercase, +0.12em tracking, in `--ink-tertiary`.
- Never use more than three weights of any face on a single page (typically 400, 500, 700 for Inter; 400, 500, 700 for Fraunces).
- Hindi text uses the same Inter stack — Inter ships Devanagari coverage. Never introduce a second Hindi-only font.

### 6.4 Forbidden typography

- No system serif (Times, Georgia).
- No display sans like Bebas Neue, Anton, Druk.
- No script or hand-drawn fonts under any circumstance.
- No all-caps body text. Eyebrows only.
- No letter-spacing on body text. Tracking belongs only to eyebrows and small caps.

---

## Part 7 — Motion & Animation

### 7.1 Tokens

| Variable | Value | Use |
|---|---|---|
| `--dur-fast` | ~150ms | Hover state changes, focus ring |
| `--dur-base` | ~250ms | Buttons, chips, color transitions |
| `--dur-slow` | ~400ms | Modal appear, popup |
| `--dur-xl` | ~600ms | Collapsible reveals, cinematic transitions |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default ease |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material-style ease (collapsibles) |

### 7.2 Patterns

- **Hover lift:** `transform: translateY(-1px)` plus border darkens to `--hairline-strong` plus `--shadow-soft`. Used on chips, cards, buttons.
- **Active press:** `transform: translateY(0)` resets the lift. Never use scale.
- **Focus ring:** 2px solid `--g-subject` (blue), 3px offset. Visible only on `:focus-visible`.
- **Collapsible open:** JS measures `scrollHeight`, sets `max-height` to that value, transitions 600ms with `--ease-soft`. After transitionend, sets `max-height: none` so future reflow does not clip.
- **Popup open:** Backdrop fades in (200ms opacity), card slides up 8px + fades in (400ms `--ease`). Close is reverse.
- **Audio button states:** idle → loading (pulsing) → playing (animated waveform or filled state) → idle. Transitions are stateful, not animated easings.

### 7.3 Forbidden motion

- No bounce easing.
- No spring physics.
- No rubber-band overshoot.
- No spinning loaders for content (only for audio loading, briefly).
- No parallax on text or critical content.
- No autoplay carousels.
- No "shake on error" animations.
- Respect `prefers-reduced-motion: reduce` — collapse transitions become instant.

---

## Part 8 — Audio System (KW_Audio)

### 8.1 Architecture

`KW_Audio` is a global object exposing:

- `playSentence(container, button, opts)` — plays a sentence as one utterance OR word-by-word depending on rate.
- `playSentenceWordByWord(container, button, opts)` — explicit word-by-word with pauses.
- `playDialogue(bubbles, button, opts)` — orchestrates a multi-bubble chain.
- `stop(opts)` — cancels current speech; `opts.preserveDialogue: true` keeps the dialogue queue alive.
- `advanceDialogue()` — internal, moves to the next bubble with a 150ms delay (0ms for the first).

### 8.2 Rate routing

| Rate | Behavior |
|---|---|
| `1.0` | Single utterance, natural speed |
| `>=0.9` (current threshold) | Single utterance |
| `0.75` (Slow preset) | Word-by-word, 150ms inter-word pause, word rate 0.85 |
| `0.4` (Very slow preset) | Word-by-word, 400ms inter-word pause, word rate 0.7 |

**Rule:** the three speeds (1×, Slow, Very slow) must always be perceptibly distinct on every device. If they are not, the threshold needs to be retuned, never disabled.

### 8.3 Voice selection

- The engine picks the best available German voice via a heuristic at load time.
- It attempts to pick a *female* voice and a *male* voice. If only one German voice exists on the device, both `voiceFemale` and `voiceMale` resolve to the same underlying voice — and pitch/rate offsets carry the gender distinction.
- Resolution order for which voice to use on a call:
  1. `opts.voice` if explicitly passed.
  2. `container.dataset.voice` if the element has `data-voice="male"` or `"female"`.
  3. Default `'female'` if neither.

### 8.4 Pitch and rate rules

| Context | Pitch | Rate offset |
|---|---|---|
| Default (no `data-voice`, no `opts.voice`) | `1.0` (neutral) | `1.0` |
| Explicit `data-voice="male"` (dialogue) | `0.5` | rate × `0.95` |
| Explicit `data-voice="female"` (dialogue) | `1.5` | rate × `1.05` |

**Why this matters:** non-dialogue playback (role cards, hero examples, story sentences) must sound natural and clear. Only dialogue uses the extreme pitch gap to make two speakers unmistakably distinct on devices with a single German voice.

### 8.5 Dialogue chain rules

- `playDialogue` accepts an array of bubble elements.
- The master button (the "Play conversation" pill) holds the `playing` state for the entire chain.
- Each bubble is played via a hidden ghost button so individual playback state doesn't leak onto the master.
- Inter-bubble delay: **0ms before the first bubble, 150ms before each subsequent bubble** — prevents iOS Safari from dropping the next utterance when one ends.
- `stop({preserveDialogue: true})` cancels the current speech but keeps the dialogue queue intact (used internally between bubbles). Plain `stop()` wipes the queue and aborts the chain.
- The chain self-terminates and resets the master button to idle when the last bubble finishes.

### 8.6 Word-by-word highlighting

- During word-by-word playback, each word in the sentence is briefly highlighted as it speaks.
- Highlight = subtle background tint of the word's role color, fade in 150ms / fade out 250ms.
- Never use a strong/saturated highlight — it should feel like a karaoke ribbon, not a stage light.

### 8.7 Forbidden in audio

- Never autoplay any audio without user gesture.
- Never play overlapping speech — always `cancel()` before `speak()`.
- Never use the system default voice when a German voice exists. If no German voice is available, show a soft warning, do not fall back silently to English-accented German.
- Never play audio louder than the user's system volume scaled at 1.0.
- Never use sound effects (clicks, dings, swooshes) for navigation. Klarweg is not a game.

---

## Part 9 — Word Card (Popup) Rules

### 9.1 Structure

The popup appears on click of any `.de[data-word]` element. It contains, top to bottom:

1. **Word** — the German word in large display type, colored in its role color.
2. **Pronunciation** — Hindi-friendly phonetic gloss (`KOR-fee`, `BOO-kh`) in `--font-mono`, in `--ink-secondary`.
3. **IPA** — international phonetic in mono, in `--ink-tertiary`. Smaller than the pronunciation.
4. **Audio button** — play the word at 1× and slow on tap.
5. **English** translation — clean, single best translation in `--ink-primary`.
6. **Hindi** translation — clean, in Devanagari, in `--ink-primary`.
7. **Role badge** — pill with colored dot + role name (e.g. "● Verb"). Color matches the word color.
8. **Case badge** — only if applicable. (e.g. "Akkusativ").
9. **Why** — one sentence explaining what makes this word play its grammatical role. Plain English.
10. **Example** — a short German sentence using the word, colored per the spine. English translation below.

### 9.2 Visual rules

- Card width: 360px desktop, full-width minus 24px on mobile.
- Backdrop: blur + dim (low-alpha ink) — the page behind dims but stays readable.
- Card background: `bg-surface`, `--r-lg`, `--shadow-modal`, hairline border.
- The popup is dismissed by: click outside, Esc key, or X button top-right.

### 9.3 Content rules

- Pronunciation gloss must use Hindi-readable spelling conventions. `BUH-kh` is better than `BOOKH`. The reader is a Hindi speaker who can sound out the gloss.
- IPA is always present but secondary. Never the primary pronunciation aid.
- The "Why" line is one sentence, never two. If it needs two sentences, the explanation belongs in a chapter lesson, not a popup.
- Hindi translation should be the most idiomatic translation, not a literal one. "Brieftasche" is "बटुआ", not "ब्रीफ़-tasche".
- Examples are short (4–8 words) and use only words already introduced or recognizable.

### 9.4 Forbidden in the popup

- Never show grammatical case for words where it doesn't apply (verbs, adverbs).
- Never show etymology or word origin. Wrong surface.
- Never show difficulty ratings, frequency rankings, or CEFR level labels.
- Never let the popup scroll internally if avoidable. If content is too long, the content is wrong.
- Never use English-only emphasis (bold/italic) on Hindi or German — colors and font already encode emphasis.

---

## Part 10 — Sentence and Word Interaction

### 10.1 The clickable surface

| Element | Click behavior |
|---|---|
| `.de[data-word]` | Opens popup for that word |
| `.sentence[data-playable]` with auto-injected `.sb` button | Plays the sentence (1× by default for role-card examples) |
| `.dialog-bubble.sentence` | Plays the single bubble (slow/normal) |
| `.dialogue-play-btn` | Plays the entire dialogue chain |
| `.cs-chip` | No click action — pure reference |
| `.cs-toggle` | Expand/collapse extended grammar tiers |

### 10.2 Auto-injection

Sentences with `data-playable` get a small play button (`.sb`) auto-injected at their trailing edge. This avoids hand-writing audio buttons everywhere. The injector lives in the homepage JS and runs once on DOMContentLoaded.

**Rules**

- Auto-injection happens once. Never call it twice on the same element.
- Auto-injected buttons play at **rate 1.0** by default. Slower playback requires explicit user choice via a speed control.
- The `.sb` button uses a small audio icon, sits inline at end of sentence, and is touch-friendly on mobile (24px+).

### 10.3 Sentence-level data attributes

| Attribute | Purpose |
|---|---|
| `data-playable` | Marks a sentence as playable; triggers auto-inject |
| `data-sentence="..."` | The text the engine should speak (allows the visible text to differ from spoken text if needed) |
| `data-voice="male\|female"` | Forces a specific voice (dialogue context) |
| `data-rate="..."` | Optional explicit playback rate override |

### 10.4 Forbidden

- Never tie playback to scroll position or hover.
- Never autoplay on page load.
- Never hide the audio button — affordance must be obvious.

---

## Part 11 — Mobile Rules

### 11.1 Breakpoints

| Width | Trigger |
|---|---|
| `<= 600px` | Color system grid switches to 2 columns; section padding tightens; chip font drops to 12px |
| `<= 540px` | Pricing card strike text drops to 16px; price-big row gets `flex-wrap: wrap` |
| `<= 480px` | Hero typography drops a tier; secondary buttons stack |

### 11.2 Touch targets

- Minimum tap target: **44 × 44px**.
- Buttons that look smaller (audio `.sb`, chevrons) get invisible padding to meet 44px hit area.
- Toggles, pills, and inline links are explicitly sized for finger taps, never mouse precision.

### 11.3 Text and layout

- `white-space: nowrap` on critical numbers (₹30,994, ₹4,999) to prevent ugly mid-comma wraps.
- `flex-wrap: wrap` on price rows so a long strike text falls below the main amount rather than overflowing the card.
- Gradient text-clip headings need a solid color fallback on mobile when descenders (g, y, p, q) are at risk of clipping — apply a coral or primary ink solid color in the mobile media query.
- Section vertical padding compresses by ~25% on mobile (88px → 64px).
- Hero scales typography down explicitly via mobile breakpoints — never rely on viewport units alone.

### 11.4 Audio resilience on mobile

- iOS Safari can drop a queued speech utterance if there's no delay between cancel and speak. The 150ms inter-bubble delay is the workaround.
- On devices with only one German voice, distinctness comes from pitch (0.5 / 1.5) plus rate offset (0.95 / 1.05). Pitch alone is not enough.
- Always test dialogue playback on a real iPhone and a real Android phone before shipping changes to KW_Audio.

### 11.5 Forbidden on mobile

- Never show three-or-more columns of dense content.
- Never use hover-only affordances (hover must always have a tap equivalent).
- Never fix navigation as a sticky element that consumes more than 56px of vertical space.
- Never use pinch-zoom-disable in meta viewport. Learners must be able to zoom German text.

---

## Part 12 — Accessibility

### 12.1 ARIA patterns

- Toggles: `aria-expanded`, `aria-controls`, `aria-hidden` on the collapsible target.
- Buttons that are icon-only get `aria-label`.
- The popup uses `role="dialog"`, `aria-modal="true"`, focus trap on open, focus return on close.
- Audio buttons get `aria-label="Play <sentence>"`.

### 12.2 Keyboard

- Every interactive element is keyboard-reachable.
- Focus rings are visible only on `:focus-visible` — using the spine blue (`--g-subject`), 2px solid, 3px offset.
- Esc closes the popup. Enter/Space activates buttons.
- Tab order follows visual order, always.

### 12.3 Color contrast

- Body text on `--bg-canvas` clears WCAG AA at minimum.
- Grammar colors on white backgrounds are tested for legibility. The Spine 5 are pre-qualified. Cases (especially Olive for Dativ) get a slight weight bump on small text to maintain readability.
- Never use a grammar color as background with grammar-color text on top.

### 12.4 Reduced motion

- `@media (prefers-reduced-motion: reduce)` collapses all transitions to 0.01s (effectively instant).
- The collapsible toggle still works, just without the smooth ease.
- The audio engine is unaffected — audio is content, not motion.

---

## Part 13 — Chapter Architecture

Every Klarweg chapter page follows the same structural skeleton. The content varies by level and topic, but the section sequence and component vocabulary are fixed.

### 13.1 Standard section sequence (chapter page)

1. **Hero** — chapter title, level badge (A1 etc.), short promise sentence, "Begin chapter" button. Includes a progress tracker that updates as the learner scrolls.
2. **Concept introduction** — the new grammatical/lexical concept of the chapter, color-coded immediately.
3. **Alphabet / Special chars / Anchor reference** — only in foundational chapters (A1 ch 1, A1 ch 2). Reference card for the chapter's atomic content.
4. **Listen & Repeat** — premium audio module with voice toggle (female/male) and slow mode.
5. **Pattern recognition** — show the rule in a Bento table or visual diagram. Color is the explanation.
6. **Practice game** — interactive widget (drag-drop, multiple choice, audio recognition). 3–7 rounds. Score tracked.
7. **Real-life scenes** — 2–4 short dialogues set in plausible contexts (café, train station, phone call, market). Each line is playable.
8. **Visual pronunciation guide** — only when the chapter introduces tricky sounds (ch, r, v/w, s/z, umlauts).
9. **AI tutor preview** — a single mock interaction showing how the AI would correct a learner's attempt at the chapter's concept.
10. **Revision** — a compact recap. Five cards. Each one a single concept with one example.
11. **Mini quiz** — 5 questions, mixed format (audio recognition, fill-in, role identification). Result screen with explanation per item.
12. **Homework PDF** — downloadable practice. Standard Klarweg PDF format.
13. **Unlock CTA** — only for free chapters. Two cards: "Continue this level" (₹1,999) and "Lifetime A1–C2" (₹4,999 from ₹30,994). Coming-up chapter preview chips.

### 13.2 Section ID conventions

| ID | Section |
|---|---|
| `sec-hero` | Hero |
| `sec-alphabet` | Alphabet (when applicable) |
| `sec-special` | Special characters |
| `sec-listen-repeat` | Listen & repeat |
| `sec-numbers` | Numbers (when applicable) |
| `sec-pattern` | Pattern recognition |
| `sec-practice` | Practice game |
| `sec-scenes` | Real-life scenes |
| `sec-pron-guide` | Pronunciation guide |
| `sec-ai` | AI tutor preview |
| `sec-revision` | Revision |
| `sec-quiz` | Mini quiz |
| `unlock` | Unlock CTA (free chapters only) |

The scroll-based progress tracker reads these IDs in order and updates as the learner crosses each one.

### 13.3 Chapter visual rules

- Chapter pages reuse the homepage design system 1:1. Same colors, same typography, same motion.
- The "level badge" (A1, B2, etc.) sits in the hero — small pill, neutral surface, no saturated color.
- Each section gets a small eyebrow ("01 · Alphabet", "02 · Special chars") for orientation.
- Sections are separated by ample vertical space (96px desktop, 64px mobile). Never by lines or decorative dividers.

### 13.4 Forbidden in chapters

- Never use a different color palette per chapter or per level. The system is the system across A1–C2.
- Never add gamification mechanics (XP, streaks, lives, gems). Klarweg is not Duolingo.
- Never auto-advance to the next section. The learner controls the pace.

---

## Part 14 — AI Tutor Philosophy

The AI tutor exists to correct speaking and writing in real time and to roleplay conversation partners for free practice. It is not a chatbot, not an assistant, not a friend.

### 14.1 What the AI tutor does

- Corrects German speaking attempts (pronunciation, grammar, word choice).
- Corrects German writing attempts (grammar, structure, register, idiom).
- Roleplays conversation partners in scripted scenes (waiter, ticket clerk, doctor, interviewer).
- Explains *why* a correction was made, in one or two sentences, with the relevant grammar role colored.
- Suggests one specific next action ("try the same sentence in Akkusativ", "say this once more, slower").

### 14.2 What the AI tutor does not do

- Does not teach new concepts. Concepts are taught in chapter content. The tutor reinforces.
- Does not chitchat. It always returns to German practice.
- Does not flatter. Praise is sparing and specific ("Your verb position was perfect").
- Does not pretend to be human. It is identified as Klarweg AI in the UI.
- Does not produce long monologues. Tutor responses are short, structural, and always include either a correction, a question, or a directive.

### 14.3 Tone

- Patient, precise, neutral. Closer to a Goethe Institute examiner than to a friend.
- Uses Hindi only when the learner clearly needs a clarification bridge — never as default.
- Uses grammar role names ("This is your Dativ object — that's why it gets *dem*") rather than abstract rules.

### 14.4 Surface

The AI tutor appears as:

- An inline chat module inside chapter pages (preview only — full version is gated).
- A standalone /tutor page for free practice (post-purchase).
- A speaking-practice modal triggered from scene dialogues ("Try this line yourself").

### 14.5 Forbidden

- Never give the tutor a name beyond "Klarweg" or "your Klarweg tutor."
- Never give the tutor a face, avatar, or anthropomorphic animation. It is voice and text.
- Never let the tutor be the entry point for new learners. Concept comes first; tutor reinforces.

---

## Part 15 — Pricing & Conversion

### 15.1 The locked pricing table

| Level | Price |
|---|---|
| A1 | ₹1,999 |
| A2 | ₹2,999 |
| B1 | ₹3,999 |
| B2 | ₹4,999 |
| C1 | ₹7,999 |
| C2 | ₹8,999 |
| **Lifetime A1–C2** | **₹4,999** (strike: ₹30,994) |

**Rules**

- These prices are stable. Do not run discount events on individual levels. Lifetime is the only "deal."
- Lifetime is the conversion target. Every CTA points at it as the obvious smart choice.
- Strike-through ₹30,994 is calculated as the sum of all individual levels. Never round or "marketing-ize" this number.

### 15.2 The free chapter rule

- Every level's **Chapter 1 is free**. Always. Forever.
- Free chapters are full-quality, not abbreviated demos. The free chapter is the entire learning experience for that topic.
- The free chapter ends with the Unlock CTA (Part 13.1 step 13) — never mid-page.

### 15.3 CTA copy patterns

- Primary: "Begin Chapter 1" / "Continue with A1" / "Get Lifetime — ₹4,999"
- Secondary: "Browse all chapters" / "See what's inside B2"
- Never: "Sign up now!" / "Limited time!" / "Don't miss out!" / "Only 3 spots left!"
- Klarweg never uses urgency, scarcity, or FOMO marketing. The product earns the conversion.

### 15.4 Trust signals

- Goethe-aligned curriculum, stated factually with no inflated claims.
- Klarweg certificate per level — issued, displayable, not "official Goethe."
- Real testimonials when available. No fake quotes.
- Trust dots on the homepage ("Trusted by 12,400+ German learners across India") only when accurate.

### 15.5 Forbidden in pricing/conversion

- Never use fake discounts (showing a struck-through price that was never charged).
- Never use countdown timers.
- Never use "Buy now" with red urgent buttons. Klarweg buttons are quiet.
- Never gate Chapter 1.
- Never offer subscription pricing. Klarweg is one-time purchase per level + Lifetime.

---

## Part 16 — Routing & Page Structure

### 16.1 URL conventions

| Pattern | Use |
|---|---|
| `/` | Homepage |
| `/a1` `/a2` `/b1` `/b2` `/c1` `/c2` | Level overview pages |
| `/a1/chapter-1`, `/a1/chapter-2`, etc. | Individual chapter pages |
| `/tutor` | AI tutor standalone (post-purchase) |
| `/exam/b1` `/exam/b2` etc. | Goethe exam prep modules |
| `/about` `/method` `/pricing` | Static informational pages |
| `/login` `/account` | Authentication & account |

### 16.2 Page structure (homepage)

1. Hero
2. Color System (with See more toggle)
3. Reframe band ("German is not random")
4. Method · 01 — role cards (Subject / Verb / Object / Time / Place)
5. Method · 02 — four cases
6. Im Café — dialogue showcase
7. Story sections (cinematic, optional)
8. Pricing
9. Trust band
10. Final CTA
11. Footer

### 16.3 Page structure (level overview, e.g. /a1)

1. Hero — "A1 · Foundations" + promise sentence
2. The roadmap — Bento grid of chapters (1–12 typically), Chapter 1 marked "Free"
3. Sample lesson — embedded preview of a future chapter's interactive
4. Pricing — single level price + Lifetime upsell
5. CTA

### 16.4 Forbidden in routing

- Never put chapter content behind URL guessing (e.g. `/chapter/3`). Chapters are level-scoped.
- Never use query strings for routing concepts. Path-based only.

---

## Part 17 — Technical Stack

### 17.1 The decisions

- **Single-page, single-HTML-file delivery** per page. Each page (homepage, chapter, level) is one self-contained HTML file with inline CSS and JS.
- **No framework.** No React, Vue, Svelte. Vanilla JS, hand-written.
- **No build step.** The file in the editor is the file in production. (Optional: a final minification pass before deploy, but never required for correctness.)
- **CSS custom properties** for the entire token system. No CSS-in-JS, no Tailwind, no preprocessor needed.
- **Web Speech API** for all audio. No third-party TTS services.
- **No analytics, no telemetry on chapter pages.** Privacy is a feature.
- **System fonts as fallback** in case Fraunces/Inter/JetBrains Mono fail to load. Document never reads wrong.

### 17.2 File organization

- Each page file is named after its route: `klarweg.html`, `chapter-1.html`, etc.
- Shared logic (KW_Audio, WORDS dictionary, accentToColor table) is duplicated per page rather than imported. This keeps each page self-contained and zero-network-cost after first load.
- Future: a build script can extract shared modules to a single bundle if file size becomes a concern. Until then, duplication is fine.

### 17.3 Performance principles

- First contentful paint < 1.5s on 4G.
- Total page weight < 250KB for homepage, < 500KB for chapter pages.
- No render-blocking external resources except the three webfonts (loaded with `font-display: swap`).
- Audio is on-demand, never preloaded.
- Images use modern formats (AVIF/WebP) with `loading="lazy"`.

### 17.4 Forbidden technical decisions

- Never adopt a framework "just to make this easier." The constraint is the design.
- Never add a CSS framework or utility library.
- Never use a CDN for fonts or scripts unless explicitly approved.
- Never inline base64 images larger than 4KB.
- Never load polyfills for browsers older than the last 2 Safari, Chrome, Firefox versions.

---

## Part 18 — Reusable Components

These are the building blocks. New pages should be composed of these, not invented around them.

### 18.1 Role card (`.role-card`)

A bordered card with a colored top stripe matching the role color, used in Method · 01.
- Contains: role name (eyebrow), one-line explanation, color-coded example sentence (auto-playable), optional secondary example.
- Variants: `.subject`, `.verb`, `.object`, `.time`, `.place`.

### 18.2 Color chip (`.cs-chip`)

A pill with a colored dot + label, used in the color system section.
- Sizes: default (small), `.core` (larger, used for the Spine 5).
- Hover lift on chip = standard hover pattern.

### 18.3 Dialog bubble (`.dialog-bubble`)

A speech bubble in a conversation scene.
- Variants: `.left` (Anna, female by default) / `.right` (Rohan, male by default).
- Has `data-voice`, `data-playable`, `data-sentence`.
- Speaker name above bubble in eyebrow style.

### 18.4 Pricing card (`.price-card`)

A bordered card for a price tier.
- Variants: default, `.center` (the highlighted Lifetime card with subtle gradient and stronger shadow).
- Contains: tier name, price-big (with strike for Lifetime), bullet list, CTA button.

### 18.5 Section (`<section>`)

Standard vertical section with `container` (1280px max) or `container-narrow` (820px max).
- Padding: 88px top/bottom desktop, 64px mobile.
- Optional eyebrow at top, display headline, lede, then content.

### 18.6 Toggle (`.cs-toggle` pattern)

The "See more" reveal pattern.
- Pill button with chevron, anchored by a faint horizontal hairline.
- ARIA-wired (`aria-expanded`, `aria-controls`, `aria-hidden`).
- Smooth open/close via measured `scrollHeight`.

### 18.7 Audio button (`.sb`, the auto-injected one)

Small inline play button at the end of a sentence.
- Icon-only, 24px visual size, 44px touch target.
- States: idle, loading, playing, error.

### 18.8 Popup (`.word-card`)

The grammar word card modal.
- Standard structure per Part 9.
- Reused across homepage, chapter pages, tutor.

### 18.9 Forbidden new components

- Never create a "tooltip with icon" without checking if the popup pattern works first.
- Never create a custom modal — extend the popup pattern.
- Never invent a new card style for a special case. Use a variant of an existing card.

---

## Part 19 — Naming Conventions

### 19.1 CSS classes

- Components: noun, hyphenated. `.role-card`, `.dialog-bubble`, `.price-card`.
- Modifiers: short adjective appended. `.price-card.center`, `.dialog-bubble.right`.
- States: `.is-open`, `.is-active`, `.is-loading`, `.is-error` (suffix-style, never prefix).
- Grammar role classes: `.r-<role>` short form. `.r-subject`, `.r-verb`, `.r-time`.
- Case classes: `.c-<case>` short form. `.c-nom`, `.c-acc`, `.c-dat`, `.c-gen`.
- Color system: `.cs-<element>`. `.cs-chip`, `.cs-tier`, `.cs-toggle`, `.cs-extra`.

### 19.2 CSS custom properties

- Tokens: `--<category>-<purpose>`. `--bg-canvas`, `--ink-primary`, `--shadow-soft`, `--dur-fast`, `--ease`.
- Grammar colors: `--g-<role>`. Always lowercased, never abbreviated.
- Radii: `--r-<size>`. `--r-sm`, `--r-md`, `--r-lg`, `--r-full`.

### 19.3 JS variables and functions

- Engine: `KW_Audio` (the only PascalCase-prefixed global).
- Dictionaries: ALL_CAPS for top-level constants (`WORDS`, `ALPHABET`, `NUMBERS`).
- Functions: camelCase. `playSentence`, `advanceDialogue`, `accentToColor`.
- DOM references: `<element>El` or `<element>Btn`. `playBtn`, `popupEl`, `dialogueButton`.

### 19.4 File names

- Lowercase, hyphenated. `klarweg.html`, `chapter-1.html`, `klarweg-os.md`.
- Level pages: `<level>.html`. `a1.html`, `b1.html`.
- Chapter pages: `<level>-chapter-<n>.html` when in a multi-level repo, or `chapter-<n>.html` inside a level folder.

### 19.5 IDs

- Sections: `sec-<topic>`. `sec-alphabet`, `sec-quiz`.
- Major interactive zones: `<feature>-<purpose>`. `cs-extra`, `dialog-anna-1`.

---

## Part 20 — SEO-Ready Structure

### 20.1 Heading hierarchy

- One `<h1>` per page (the hero headline).
- `<h2>` for major sections.
- `<h3>` for subsections.
- `<h4>` for tier titles in the color system, scene names, etc.
- Never skip levels.

### 20.2 Meta patterns

- `<title>` follows: `<Page-specific phrase> — Klarweg`.
- `<meta name="description">` is one sentence, 140–160 chars, learner-facing.
- `<meta property="og:image">` uses a Klarweg-branded card (warm canvas + display headline + the spine 5 dots).
- `<link rel="canonical">` always set, even on the homepage.

### 20.3 Semantic HTML

- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` used correctly.
- `<nav>` for the top navigation.
- `<button>` for buttons, `<a>` for links. Never reverse them.

### 20.4 Keyword discipline (India-aware)

Klarweg ranks on:

- "Goethe B1 preparation India"
- "Learn German online in Hindi"
- "German A1 course online India"
- "How to pass Goethe Zertifikat B2"
- Long-tail: "best way to learn German for Indians", "Goethe exam preparation Hindi"

Never keyword-stuff. Write for learners, then verify keywords land naturally.

### 20.5 Forbidden SEO patterns

- Never insert hidden text for SEO.
- Never duplicate meta descriptions across pages.
- Never use clickbait titles ("This one trick…").

---

## Part 21 — Content Generation Rules (for future pages)

### 21.1 Tone

- Confident, specific, calm.
- Sentences are short to medium length. Long sentences are reserved for grammatical demonstrations.
- Always lead with the concrete (an example, a sentence, a scene) and follow with the abstract (the rule).
- Never start a heading with "How to" or "Why" — instead, use a noun phrase or a complete statement.

### 21.2 Hindi integration

- Hindi appears in: word translations (popup), example explanations where Hindi clarifies (rare), AI tutor scaffolding for early learners.
- Hindi NEVER appears in: section headings, navigation, button copy, hero headlines.
- Code-switching German into Hindi sentences is acceptable when it mirrors how Indian German learners actually think ("Akkusativ का object").
- Never use transliterated Hindi (`accha`, `bahut`) in copy. Devanagari or English.

### 21.3 Example sentence rules

- Short. 4–8 words preferred. Never longer than 12 for A1–A2.
- Use only vocabulary already introduced or recognizable. No "surprise" words.
- Sentences must color cleanly under the grammar system. If a sentence doesn't color cleanly, it's the wrong example.
- Every example sentence is playable. Mute or text-only examples are not Klarweg.

### 21.4 Story patterns

- 2–4 characters per chapter. Recurring across chapters within a level so learners build context.
- Set in plausible India-meets-Germany scenarios: arriving in Berlin, signing a lease, ordering chai vs. coffee, calling family back home in Hindi-German mix.
- Anna (female) and Rohan (male) are the default homepage characters. Chapter pages can introduce more characters with consistent voice/gender pairings.

### 21.5 Forbidden content patterns

- Never write "Did you know?" boxes. Klarweg explains in-flow.
- Never include cultural stereotypes about Germans or Indians.
- Never use generic stock-image people. Use minimalist illustrations or no images at all.
- Never compare Klarweg to competitors by name in product copy.

---

## Part 22 — A1–C2 Level Structure

### 22.1 A1 — Foundations (12 chapters target)

1. Alphabet & Numbers
2. Greetings & Introductions
3. Articles & Gender (der/die/das)
4. Present Tense — Regular Verbs
5. Pronouns & Possessives
6. Negation & Questions
7. Numbers Beyond 100, Dates & Time
8. Akkusativ Case
9. Modal Verbs (können, müssen, wollen)
10. Separable Verbs
11. Past Participle & Perfekt
12. A1 Capstone & Goethe-Start prep

### 22.2 A2 — Conversational

Building on A1, focuses on: Dativ case, two-way prepositions, comparatives, subordinate clauses (weil, dass), reflexive verbs, simple past for written language, basic letter writing, expanded life topics (work, travel, health).

### 22.3 B1 — Independent (Goethe-Zertifikat B1 aligned)

Strict alignment to the official B1 Modellsatz:

- **Lesen** module — 5 tasks, 65 min, matching official format.
- **Hören** module — 4 tasks, 40 min.
- **Schreiben** module — 3 tasks, 60 min (informal email, opinion post, formal email).
- **Sprechen** module — 3 tasks, 15 min for two candidates (planning, presentation, peer feedback).

Plus: relative clauses, Konjunktiv II for politeness, Passive voice introduction, expanded vocabulary on work, society, media.

### 22.4 B2 — Confident

Konjunktiv I (reported speech), advanced Passive, nominalization, formal register, argumentative writing, opinion presentation, full Goethe-Zertifikat B2 alignment.

### 22.5 C1 — Effective

Complex sentence structures, advanced idioms, register switching, written exam preparation, academic German, professional German.

### 22.6 C2 — Mastery

Native-equivalent reading and writing, abstract topics, literary German exposure, full Goethe-Zertifikat C2 alignment.

### 22.7 Level progression rules

- Every level reuses the Part 13 chapter architecture.
- Vocabulary scope per level is gated. A1 chapters do not use B1 vocabulary in examples — even if it would be technically correct.
- Each level ends with a capstone chapter that previews the next level and offers the exam-prep module if applicable.
- The grammar color system is constant across all levels. Learners who learn the colors in A1 use them through C2.

---

## Part 23 — Hören / Speaking / Revision / Exam Modules

### 23.1 Hören (listening) module

Available from A2 upward, expands at B1.

- Format mirrors the Goethe Hören exam: short announcements, conversations, radio segments, longer discussions.
- Each item is playable at 1× and Slow. Very slow is allowed for the Hören practice surface but not the mock exam surface.
- Questions follow Goethe format: Richtig/Falsch, multiple choice (a/b/c), matching (Wer sagt was?).
- The mock exam mode disables the slow controls and the answer-reveal until submission.
- After submission: each item shows the correct answer with a one-sentence explanation referencing the audio timestamp.

### 23.2 Speaking module

The AI tutor speaking practice (Part 14) is the entry point.

- Speaking topics align with Goethe Sprechen: planning together, presenting on a topic with 5 slides, peer Q&A.
- The tutor plays the role of the partner candidate in pair-speaking exercises.
- Pronunciation feedback uses the colored grammar role system: "Your verb stress was off" with the verb word colored red.

### 23.3 Revision module

- Appears at the end of every chapter and as standalone surfaces for spaced repetition.
- Revises grammar roles and patterns, not isolated vocabulary lists.
- Format: 5–7 cards. Each card is one concept + one example.
- Klarweg does not use SRS flashcards in the Anki style. Revision is structural, not memorization-by-rote.

### 23.4 Mini quiz and mock exam

- **Mini quiz** lives at the end of every chapter (5 items, mixed formats, immediate explanation).
- **Mock exam** is a separate timed surface available from B1+, mirroring full Goethe duration and format.
- Mock exam results show: total score, per-module breakdown, item-level review with correct answer and explanation.

### 23.5 Forbidden in exam modules

- Never claim a mock exam result predicts the official Goethe score with a confidence interval. Inform but don't overpromise.
- Never gate the mini quiz behind purchase if it's part of the free Chapter 1.
- Never use AI-generated voices that don't match human speech patterns for the Hören module. Premium audio only.

---

## Part 24 — Voice & Pronunciation Standards

### 24.1 Voice picking heuristic

At KW_Audio init, the engine scans `speechSynthesis.getVoices()` and picks:

- `voiceFemale`: the first voice whose `lang` starts with `de` AND whose name matches female heuristics (`Anna`, `Vicki`, `Helena`, `Petra`, common German female voice names, plus contains "female" in voiceURI on some systems).
- `voiceMale`: same logic but with male names (`Stefan`, `Markus`, `Yannick`, `Klaus`).
- `germanVoice`: first `de-*` voice as fallback.

If only one German voice exists, both resolve to it and pitch/rate offsets carry the distinction (Part 8.4).

### 24.2 Pronunciation guide format

When a chapter introduces tricky sounds, the pronunciation guide uses this card pattern:

- Letter or letter combo, large display
- Hindi-friendly phonetic gloss
- IPA
- 2–3 example words, each playable
- A "Compare" pair where applicable ("v vs w", "ch1 vs ch2")
- A common-mistake note: what Hindi speakers typically get wrong, and what to focus on.

### 24.3 IPA usage rules

- IPA is always present but never primary.
- IPA is displayed in `var(--font-mono)` to differentiate it from regular text.
- IPA is wrapped in `/slashes/` for phonemic transcription. Use `[brackets]` only for narrow phonetic detail in advanced pronunciation guides.

### 24.4 Hindi phonetic glosses — house style

| Sound | Gloss style |
|---|---|
| German `u` (short) | `oo` (short oo) — `Brunnen` → `BROO-nen` |
| German `ü` | `ue` or `yoo` — `Tür` → `TUER` |
| German `ä` | `eh` — `Mädchen` → `MEHD-shen` |
| German `ö` | `oe` — `schön` → `SHOEN` |
| German `ch` (after a/o/u) | `kh` — `Buch` → `BOOKH` |
| German `ch` (after e/i/front vowels) | `sh-ish` blend — `ich` → `IHKH` or `IHSH` |
| German `r` (mid-word) | soft `r` — represent as small `r` |
| German `r` (end-word) | near-silent — `er` → `air` |
| German `v` | `f` — `Vater` → `FAH-ter` |
| German `w` | `v` — `Wasser` → `VAH-ser` |

These conventions are house-standard. Document any new entry that follows different rules.

### 24.5 Forbidden in voice/pronunciation

- Never use a fully phonetic Hindi transliteration like Roman-Devanagari hybrid. Stick to Latin gloss + Hindi translation separately.
- Never use English-only equivalents that mislead ("vee" for German `w` because English w isn't ours).
- Never let the audio engine fall back to an English voice silently. Show a soft warning.

---

## Part 25 — Learning Experience Principles

The principles that make Klarweg's pedagogy distinct.

### 25.1 See, then hear, then produce

Every concept enters the learner through visual structure first (color), audio second (playback), production third (typing/speaking). Never skip a stage. Never reverse the order.

### 25.2 Color is the explanation

Klarweg's most efficient teaching move is to color-code a sentence and let the learner see the structure before reading any rule. Use this whenever possible. Words explain less than colors do.

### 25.3 Free first, premium follow-through

Chapter 1 of every level is fully free and fully premium-quality. There is no "demo content." The learner experiences the actual product before paying.

### 25.4 Hindi as bridge, not destination

Hindi appears to help comprehension at the entry point. Subsequent reinforcement in the same chapter is German-only. By the end of any chapter, the learner has been thinking in German for at least the final third.

### 25.5 No translation crutch

Klarweg never translates German sentences word-for-word. Translations are idiomatic. The popup gives the cleanest English/Hindi equivalent, never a word-by-word gloss.

### 25.6 No gamification

No streaks, no XP, no lives, no leaderboards, no gems. Learning German for the Goethe exam is intrinsically motivating; Klarweg doesn't manufacture motivation.

### 25.7 Premium audio everywhere

Every German word, sentence, and dialogue is playable. Audio is not a feature — it is the substrate. If a sentence is on a Klarweg page and is not playable, that's a bug.

### 25.8 The learner controls the pace

No auto-advance. No timer pressure outside the mock exam surface. No "you must complete this before you can move on" gates outside exam validity rules.

---

## Part 26 — Forbidden Zones (consolidated)

A consolidated list of every "never" rule from earlier sections. When in doubt, consult this list first.

**Brand & design**

- Never cyberpunk.
- Never Duolingo / Memrise / Babbel / Lingoda visual register.
- Never bouncy, springy, rubber-band motion.
- Never neon, saturated brand palettes outside the 51 grammar colors.
- Never mascots, characters, avatars for the product itself.
- Never script or hand-drawn fonts.
- Never sound effects for navigation.

**Color system**

- Never introduce a new grammar color without updating both CSS variables and `accentToColor`.
- Never alter the Spine 5 hex codes.
- Never use grammar colors for decoration.
- Never put two adjacent words in the same color outside the same role group.

**Audio**

- Never autoplay.
- Never overlap speech.
- Never use a non-German voice silently.
- Never use extreme pitch (0.5/1.5) outside dialogue context.
- Never skip the 150ms inter-bubble delay.

**Popup**

- Never show etymology or word origin.
- Never display word-by-word literal translations.
- Never internal-scroll the popup if avoidable.

**Audio rates**

- Never let 1×, Slow, and Very slow sound identical.

**Mobile**

- Never disable pinch-zoom.
- Never use hover-only affordances.
- Never let critical numbers wrap mid-comma.

**Pricing**

- Never run discounts on individual levels.
- Never use urgency, scarcity, countdown timers.
- Never gate Chapter 1.
- Never offer subscription billing.

**Content**

- Never use "Did you know?" boxes.
- Never use cultural stereotypes.
- Never compare to competitors by name.
- Never use clickbait titles.
- Never use transliterated Hindi (`accha`, `bahut`) in copy.

**AI tutor**

- Never give it a name beyond "Klarweg tutor."
- Never give it a face or avatar.
- Never let it teach new concepts.
- Never let it chitchat outside German practice.

**Technical**

- Never adopt a framework.
- Never add a CSS utility library.
- Never load polyfills for ancient browsers.
- Never inline large base64 assets.

**Exam modules**

- Never promise a Goethe score prediction with false precision.
- Never gate a Chapter 1 mini quiz.

---

## Part 27 — Future Scalability

### 27.1 How to add a new chapter

1. Determine the level and the slot (e.g. A2 chapter 5).
2. Choose 1–2 new concepts. No more.
3. Identify which grammar colors are needed. If a new color is required, see Part 27.3.
4. Build the chapter file from the chapter template (Part 13), section by section.
5. Add new WORDS entries with correct accents.
6. Verify mobile responsiveness end to end before shipping.
7. Update the level overview page's roadmap Bento.
8. Add the chapter to the navigation if relevant.

### 27.2 How to add a new level (rare)

Klarweg ships with A1–C2. A new level would be a major expansion (e.g. an A0 "absolute beginner" level for those with zero exposure). Process:

1. Document the level's CEFR or pre-CEFR alignment.
2. Define the price tier in Part 15.1 (and recompute the Lifetime strike total).
3. Design the chapter sequence for the level.
4. Update all level navigation surfaces.
5. Update SEO meta on relevant pages.

### 27.3 How to add a new grammar color

1. Confirm the role is genuinely new (cross-check Part 5).
2. Choose the hex code. Verify contrast on `--bg-canvas` and `--bg-surface`.
3. Add the CSS variable `--g-<role>` in the root selector.
4. Add the accent key in the `accentToColor` JS table.
5. Add a chip to the color system section in the appropriate tier.
6. Update Part 5 of this document.
7. Re-test all chapter pages to ensure no existing example accidentally falls under the new role color.

### 27.4 How to add a new game type

1. Define the interaction. Multiple choice? Drag-drop? Audio recognition? Sentence reorder?
2. Build it as a self-contained module inside the chapter file.
3. Ensure: ARIA-wired, keyboard-accessible, mobile-friendly, no third-party libraries.
4. Document the new game type in Part 13 (chapter architecture) and Part 18 (components).
5. Avoid score-based competition. Game outcomes lead to feedback, not points.

### 27.5 How to add a new page type

1. Confirm it cannot be done within existing page types (homepage, level, chapter, tutor, exam, static info).
2. If genuinely new, document its purpose, URL, and section sequence here in Part 16.
3. Build it from the standard component vocabulary (Part 18).
4. Verify it does not break the navigation or routing conventions.

---

## Part 28 — Final Principles

The principles that govern every decision when this document is ambiguous.

1. **Premium over clever.** When two options exist, the one that feels more like a Stripe doc and less like a startup landing page wins.
2. **Specific over generic.** Klarweg never says what every German app says.
3. **Quiet over loud.** Restraint is the brand.
4. **Color is the explanation.** Whenever color can do the work of words, let it.
5. **Audio is the substrate.** German is a spoken language. Anything visible should be hearable.
6. **The learner is intelligent.** Never explain twice. Never patronize. Never gamify intrinsic motivation.
7. **The system over the moment.** Resist one-off "this section only" exceptions. The system compounds; exceptions decay.
8. **One file per page.** If a feature wants a framework, the feature is wrong.
9. **The free chapter is the real product.** Treat it like the paid version.
10. **The exam is the target.** Goethe alignment from B1 onward is non-negotiable.

---

## Appendix A — Full grammar color reference

```css
:root {
  /* Spine — the load-bearing 5 */
  --g-subject:           #185FA5;  /* Blue */
  --g-verb:              #DC2626;  /* Red */
  --g-object:            #2E7D32;  /* Green */
  --g-time:              #7C3AED;  /* Purple */
  --g-place:             #EA580C;  /* Orange */

  /* Cases */
  --g-akkusativ:         #10B981;  /* Emerald */
  --g-dativ:             #5C7A1D;  /* Olive */
  --g-genitiv:           [Bronze];

  /* Words & modifiers */
  --g-adjective:         [Amber];
  --g-adverb:            [Cyan];
  --g-article:           [Copper];
  --g-preposition:       [Yellow];
  --g-conjunction:       [Brown];
  --g-negation:          [Magenta];
  --g-question:          [Pink];
  --g-interjection:      [Coral];
  --g-particle:          [Violet];
  --g-number:            [Crimson];
  --g-ordinal:           [Wine];
  --g-frequency:         [Mint];

  /* Pronouns */
  --g-possessive:        [Lime];
  --g-reflexive:         [Turquoise];
  --g-relative:          [Maroon];
  --g-demonstrative:     [Mustard];
  --g-indefinite:        [Navy];
  --g-dummy-es:          [Sky Blue];

  /* Verbs */
  --g-modalverb:         [Ruby];
  --g-auxiliary:         [Silver];
  --g-infinitive:        [Burgundy];
  --g-separable-verb:    [Rust];
  --g-non-separable:     [Salmon];
  --g-reflexive-verb:    [Aqua];
  --g-separable:         [Scarlet];
  --g-imperative:        [Vermilion];
  --g-future:            [Indigo];
  --g-passive:           [Lavender];
  --g-modal:             [Teal];

  /* Clause structure */
  --g-main-clause:       [Sapphire];
  --g-subordinate:       [Tan];
  --g-relative-clause:   [Chocolate];
  --g-sentence-connector: [Walnut];
  --g-condition:         [Mint Green];
  --g-result:            [Flame Orange];
  --g-contrast:          [Plum];
  --g-reason:            [Gold];

  /* Advanced */
  --g-comparison:        [Peach];
  --g-superlative:       [Sunflower];
  --g-direction:         [Cherry];
  --g-temporal-adverb:   [Deep Purple];
  --g-local-adverb:      [Apricot];
  --g-manner-adverb:     [Ice Blue];
}
```

## Appendix B — WORDS dictionary entry template

```js
'<word-key>': {
  word: '<German word>',
  pron: '<HINDI-FRIENDLY-GLOSS>',
  ipa: '/IPA/',
  en: '<English>',
  hi: '<हिंदी>',
  role: '<Role · Subrole>',
  case: '<Akkusativ | Dativ | Nominativ | Genitiv | —>',
  why: '<One sentence explaining the grammatical role.>',
  example: '<Short German sentence using the word.>',
  example_en: '<Idiomatic English translation.>',
  accent: '<accent-key matching accentToColor>'
}
```

## Appendix C — Pricing summary table

| Tier | Price | Strike | Lifetime offset |
|---|---|---|---|
| A1 | ₹1,999 | — | — |
| A2 | ₹2,999 | — | — |
| B1 | ₹3,999 | — | — |
| B2 | ₹4,999 | — | — |
| C1 | ₹7,999 | — | — |
| C2 | ₹8,999 | — | — |
| **Lifetime A1–C2** | **₹4,999** | ₹30,994 | Always the recommended tier |

## Appendix D — Audio matrix

| Context | Voice resolution | Pitch | Rate base | Behavior |
|---|---|---|---|---|
| Hero sentence | default `female` | 1.0 neutral | 1.0 | Single utterance |
| Role-card example | default `female` | 1.0 neutral | 1.0 | Single utterance |
| Story sentence | per `data-voice` if set, else default | 1.0 neutral if no `data-voice` | 1.0 | Single utterance |
| Anna dialog bubble | `data-voice="female"` | 1.5 | 1.0 × 1.05 | Part of dialogue chain |
| Rohan dialog bubble | `data-voice="male"` | 0.5 | 1.0 × 0.95 | Part of dialogue chain |
| Slow preset | as resolved | as resolved | 0.75 | Word-by-word, 150ms pause |
| Very slow preset | as resolved | as resolved | 0.4 | Word-by-word, 400ms pause |
| Word click in popup | default `female` | 1.0 neutral | 1.0 then optionally slow | Single utterance |

---

*End of file.*

*This document is Klarweg's operating system. Every Klarweg page, chapter, and feature is built against it. When something doesn't fit this document, the answer is to question the request — not the document.*
