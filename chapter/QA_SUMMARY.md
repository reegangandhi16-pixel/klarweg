# Klarweg Popup System — QA Closure Summary

**Status: CURRICULUM QA COMPLETE (v1.0)**
**QA completion date:** 2026-08-06
**Architecture version:** Popup Engine v1.0 (frozen) · Adjective Comparison Build v1.0 (frozen)

## Curriculum coverage

| Level | Chapters | QA passed | QA failed | QA skipped |
|---|---|---|---|---|
| A1 | 48 | 48 | 0 | 0 |
| A2 | 35 | 35 | 0 | 0 |
| B1 | 35 | 35 | 0 | 0 |
| B2 | 69 | 69 | 0 | 0 |
| C1 | 43 | 43 | 0 | 0 |
| C2 | 29 | 29 | 0 | 0 |
| **Total** | **259** | **259** | **0** | **0** |

Every chapter was opened, DOM-swept for unwrapped German text, and popup-tested live. Zero console errors across the full curriculum.

## Frozen modules (all verified present and unmodified since freeze)

- Tokenizer (`GERMAN_WORD_CHARS` / `germanWordRegex()`) — single source of truth
- Popup renderer (`renderWordPop()`) — single implementation
- Recursive popup navigation — breadcrumb + back/forward, unlimited depth
- Audio pipeline (idle/loading/playing state machine)
- Dictionary merge pipeline (chapter → Global Lexicon → function-word lexicon → fallback)
- Global Lexicon (single shared load point, no per-chapter script injection)
- Lemma resolution (`resolveLemma()` via `KW_INFLECTIONS`, no runtime guessing)
- Inflection index (`KW_INFLECTIONS`) — build-time only, homograph-collision-free
- Adjective comparison (Layer 1 morphology engine + Layer 2 gradability policy, build-time only)
- Homograph protection (grammatical-class compatibility check before merge)
- Generated `compare` objects (source/generatorVersion metadata, idempotent regeneration)
- Build pipeline (authored compare > generated compare > nothing, precedence enforced at build time)
- Conflict detection (cross-chapter authored-compare contradictions)
- Fail-fast build (aborts with non-zero exit + conflict report on contradiction, writes nothing)

All 14 items: **present, unmodified, verified in this audit.**

## Known issue inventory (Future Coverage — not bugs)

Total logged items: **133** (`chapter/FUTURE_COVERAGE.md`)

- Declension gaps (declined adjective/participle/noun-case forms; base entry exists) — 50
- Conjugated-form gaps (Präteritum/Konjunktiv II/3rd-person forms; base entry exists) — 20
- Missing dictionary entries (noun/verb/adjective never authored) — 35
- Homograph-driven exclusions (documented, correctly non-clickable) — 1
- Other (compound nouns, grammar-terminology words, proper nouns, contractions) — 27

Gradability policy (`chapter/gradability-policy.json`), 1,048 classified adjectives:
- Gradable (generated or authored compare) — 871
- Non-gradable (absolute/invariable) — 102
- Manual review (semantic gradability, never auto-generated) — 75

Adjective build (generator v1), 1,016 Global Lexicon adjectives:
- Generated compare — 880 · Authored — 0 · Manual review — 50 · Non-gradable — 86 · Generation failures — 0 · Skipped/unclassified — 0

## Bugs found and fixed during this QA pass

1. **Comparative/superlative inflection-index gap** — generated `compare` forms (880 adjectives) were never added to `KW_INFLECTIONS`, so inflected surface forms (e.g. "kostengünstiger") clicked in running text failed to resolve even though the base entry had correct data. Fixed by extending `KW_INFLECTIONS` with 1,638 comparative/superlative forms, zero collisions. Regression-verified across A2/C1, no impact on authored entries.

## Known limitations (accepted, not fixed by design)

- Declension and conjugation are NOT algorithmically generated at build time (only comparison is) — per the frozen "build step owns morphology, never guess" rule, these require authored data expansion. Logged as Future Coverage, not bugs.
- Language-detection for excluding English/Hindi from recursive linkification currently uses a capitalization heuristic as a documented temporary safeguard; permanent architecture should become explicitly language-aware (documented TODO, not yet implemented).

## Declaration

**CURRICULUM QA COMPLETE (v1.0).** No further chapter-level QA required.

Future work is limited to:
- Bug fixes (verified regressions only)
- Content expansion (authoring missing dictionary entries / declension / conjugation data)
- New features (must extend the frozen architecture, never replace it)
