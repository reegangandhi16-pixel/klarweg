repo: reegangandhi16-pixel/klarweg
branch: main
path: chapter/

## Last sync
date: 2026-09-11T10:47:00Z

### Updated in this project
- Nothing pulled: upstream `main` is BEHIND this project on every tracked file. No incoming changes existed to rebuild.
- Verified by size + content probe, not by assumption: `chapter-app.js` upstream 273,360 B vs local 280,061 B; `BUILD_INFLECTION_INDEX.md` upstream 3,475 B (the original frozen text, no step 2b/2c) vs local 20,864 B; `global-lexicon.js` and `qa-word-popup-audit.js` absent upstream entirely.
- A code search of upstream `chapter/` for `spokenAs|spokenDe|letterPolicyFor` returned 0 hits in `chapter-app.js` (the file WAS scanned — it matched `KW_INFLECTIONS` on 9 lines), confirming the popup render-override plumbing exists only locally.
- Conclusion: the work recorded in the 2026-09-05 sync, and all audio-infrastructure work since, has never been pushed. The repo is a stale mirror; this project is the source of truth.

Note: no `commit:` is recorded. `github_get_tree` resolves a TREE hash (`cd324f0a8a80`), not a commit sha, so recording it as one would be a guess. The next push should capture the real commit sha for future incremental compares.

## Screen map
| Project screen | Built from / changed in repo |
| --- | --- |
| All 259 chapter pages (`chapter/chapter-*.html`) | `chapter/chapter-app.js` (word popup resolver + renderer, popup `spokenAs` override), `chapter/chapter.css`, `chapter/global-lexicon.js` (`KW_GLOBAL_LEXICON` + `KW_INFLECTIONS`) |
| Word popup audio | `chapter/chapter-app.js` (`speakWordFemale` / `attachAudioSpeed` popup-only `spokenAs`), `public/audio/kw-audio-engine.js` (`renderTextOf` at the synthesis layer only) |
| Token audio production | `scripts/generate-token-audio.ts` (new; manifest-based reuse predicate + CDN verify), `audio-manifests/approved-renders.json` (13 approved token renders) |
| Audio inventory / audit | `scripts/audio-inventory-extract.js` (non-lexical filter, letter/vowel policy, vocab `spokenDe`), `scripts/audio-slash-expansion.js` (SHAPE_1–4, authored mappings, cross-term acoustic guard), `scripts/promote-renders.js` |
| Chapter data (authored spoken forms) | `chapter/chapter-a1-1-data.js`, `chapter/chapter-a1-2-data.js` (13 token `spokenDe`), `chapter/chapter-a1-39-ortsangaben-data.js` (vocab `spokenDe`), `chapter/chapter-b2-27/28`, `chapter/chapter-c1-02`, `chapter/chapter-c1-41` (authored numeral `ex`) |
| Story-data validator | `chapter/_validate-story.js` (mangled `{plain:true}` + literal `'undefined'` guards) |
| Clickability audit (`chapter/CLICKABILITY-AUDIT.md`), ambiguity list (`chapter/AMBIGUOUS-FORMS-FOR-REVIEW.md`) | `chapter/global-lexicon.js`, `chapter/chapter-app.js` |
| Word Popup audit report (`chapter/WORD-POPUP-AUDIT.html`) | audit of `chapter/chapter-app.js`, `chapter/global-lexicon.js`, chapter `*-data.js` token layers |
| Word Popup QA harness (`chapter/qa-word-popup-audit.js`) | drives `.rw` / `.de-link` spans on any chapter page |
| Inflection build invariant (`chapter/BUILD_INFLECTION_INDEX.md`) | extended with step 2b (adjective declension) and step 2c (normalize `sich` / separable particles) |

## Sync history

### 2026-09-05T00:00:00Z
- Word-popup resolver: KW_INFLECTIONS rebuilt 10,849 → 22,059 keys across 11 build-time waves (all derived from authored data).
- Added `gender` to 2,467 noun entries (144 from existing markers, 2,323 derived from authored example sentences).
- Authored Konjunktiv II for the 9 modal/auxiliary verbs and 26 closed-class function-word entries.
- Full A1–C2 runtime clickability scan: 259 chapters, 190,140 clickable spans; residue reported in chapter/CLICKABILITY-AUDIT.md.
