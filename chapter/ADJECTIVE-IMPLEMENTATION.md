# Adjective-sense implementation — verified

## Files changed
| File | Change |
| --- | --- |
| `chapter/chapter-app.js` | Comparison grid: `(t.compare && t.compare.positive) || t.lemma || t.w` — stops the internal qualifier reaching learner UI. One expression. |
| `chapter/global-lexicon.js` | 19 adjective-sense entries; 87 declined index keys; `erkältete` and `vermisst` repointed. Lexicon 7,832 → **7,851**, index 31,606 → **31,694**. |
| `chapter/BUILD_INFLECTION_INDEX.md` | Pinned-exception table + rule 2m (adjective senses, key-based validation). |

No chapter content, dialogue, grammar explanation, exercise or vocab card was touched.

## The 19 entries

Internal key `<base> adjektiv`, `w: '<base>'`, declined keys → `"<base> (adjektiv)"`.
The key contains a space, so `normWord()` of a real surface can never produce it —
the entry is reachable only via a deliberate index target, which is what leaves
the bare adverb untouched.

**Tier a — gloss copied from an authored curriculum source (15):**
`klar` clear/स्पष्ट · `echt` real, genuine/वास्तविक · `kurz` short/छोटा ·
`letzt` last/पिछला · `ehrlich` honest/ईमानदार · `gründlich` thorough/अच्छी तरह से ·
`ursprünglich` original/मूल · `gemeinsam` joint, shared/साझा ·
`eigentlich` real, actual/असली · `regelmäßig` regular/नियमित ·
`jahrelang` years-long/सालों की · `halb` half/आधे · `erst` first/पहला ·
`deutsch` German/जर्मन · `früh` early/जल्दी

**Tier b — English derived transparently from the authored adverb gloss (4):**
`direkt` direct · `natürlich` natural · `selten` rare · `völlig` complete, total

For tier b the **Hindi is deliberately omitted, not invented** — Hindi
adjective morphology is not a mechanical transform I can assert from an
adverbial gloss. The popup degrades gracefully and shows the English cleanly.
These four are flagged for a Hindi gloss when someone can supply it.

Two entries carry an authored `compare` triad (`klar`, `kurz`); the rest have
none, and none was invented.

## Declined keys: 87 added, 8 correctly refused

The build never overwrote an existing key. Refusals:
`letzte`, `erste`, `deutsche`, `früher` (existing headwords) and
`letzten→Letzte`, `ersten→Erste`, `erstes→Erste`, `deutsches→Deutsche`
(already mapped to nominalisations). The collision protections held.

## Runtime verification

**Bare forms unchanged — all 13 tested:**
`klar` "of course, sure" [Adverb] · `echt` "really? (Echt?)" · `kurz` "just
(after/before)" · `ehrlich` "honest(ly); really?" · `direkt` "directly, right" ·
`natürlich` "of course, naturally" · `selten` "rarely, seldom" · `früh` "early" ·
`halb` "half" · `völlig` "completely" · `erst` "only, not until" ·
`letzte` "the last one" [Noun] · `deutsche` "German (the language)" [Noun].

**Declined forms resolve as adjectives — all 5 of `klar` plus 20 representatives
across the other 18:** `klare/klaren/klarer/klares/klarem` → "clear"
[Adjective]; `echte` "real, genuine"; `kurzen` "short"; `direkte` "direct";
`natürlichen` "natural"; `seltene` "rare"; `frühen` "early"; `halben` "half";
`völliger` "complete, total"; `jahrelanger` "years-long"; `gründliche`
"thorough"; `ursprünglichen` "original"; `gemeinsame` "joint, shared";
`eigentliche` "real, actual"; `regelmäßige` "regular"; `letztes` "last";
`erster` "first"; `deutschen` "German".

**Popup, real span on B2·01** — `klare`:
headword **klare** · pronunciation "KLAH-ruh" · **clear** · स्पष्ट · badge
**Adjective** · Comparison grid **Positive: klar** / Comparative: klarer /
Superlative: am klarsten. **No metalanguage leak** — the grid prints the clean
`compare.positive`, never `klar (adjektiv)`.

**Repoints:** `erkältete` → "to have a cold" [Verb] (was the adjective
"having a cold" — a live wrong popup, now fixed) · `vermisst` → "to miss
(someone)" [Verb] (was unresolved).

## Integrity — all clean
dangling index targets (key-based) **0** · dangling overlay aliases **0** ·
duplicate canonical entries **0** · entries with no usable content **0** ·
popup defects **0**.

The backing test now compares **keys**, not `w`. This mattered: both `klar`
senses share `w: 'klar'`, so a `w`-based test cannot distinguish them and would
have mis-validated silently.

## Full A1–C2 scan

259/259 unique chapters, **0 timeouts**, **195,240 clickable spans**,
**10,549 popups read, 0 defects**.

| Category | Distinct | Occurrences |
| --- | --- | --- |
| 1 Resolves at runtime | 804 | 1,501 |
| 2 Correctly excluded | 5,549 | 81,840 |
| **3 Resolver gap** | **4** | **7** |
| **4 Missing lexical data** | **2,850** | **5,604** |
| **5 Ambiguous** | **0** | **0** |

Category 3 is only `Ja-`×2, `e-`×3, `Satz-`×1, `Vor-`×1 — trailing hyphens from
compound-splitting demonstrations. No lexical or resolver defect at any level.

Against the last figure I established for Category 4 (**3,041 distinct /
6,079 occurrences**, the classification baseline): **−191 distinct / −475
occurrences**. Note the systemic-fix phase landed between those two runs, so
this delta covers both that phase and the adjectives; I cannot cleanly separate
the two without the intermediate capture.

**All 36 adjective surfaces verified gone from the backlog — 36/36, none
remaining.**

## Regressions and new collisions
**None.** No bare form changed meaning or class; no existing key was
overwritten; span count rose 193,643 → 195,240 with the two retried chapters and
the adjectives.

## Remaining genuine German gaps
Category 4 stands at 2,850 distinct, of which the genuine German subset is still
roughly **1,300–1,500** — the rest is English metalanguage (`translations`×37),
proper names (`Timo`×83, `Betreuerin`×21) and hyphen artefacts.

Highest-frequency remaining: `Rollenspiel`×95 (task label), `Timo`×83 (name),
`Welche`×38, `deiner`×36, `beiden`×30, `Reform`×27, `hin`×22, `Zuerst`×20.

## Still open
- `Studie` — blocked on nothing now; `Studien` is pinned, so it can be authored.
- `Rollenspiel` — real noun but every occurrence is a task-type label; your call.
- `halbe Stunde` — approved noun-phrase card; `halben` now resolves to the
  adjective. Worth confirming which the popup should show.
- The other 5 reflexive verbs with the `erkältete` defect (`entspannte`,
  `erholte`, `konzentrierte`, `orientierte`, `verspätete`).
- `scheinbar`/`absolut` — I authored neither as an adjective; no corpus
  occurrence was found for `scheinbare`/`absoluter` in 200 data files.
- Hindi glosses for the 4 tier-b adjectives.
- `Kurzem` can now map to `kurz`; `deren`/`denen`/`dessen` still need their own
  relative-pronoun paradigm.
