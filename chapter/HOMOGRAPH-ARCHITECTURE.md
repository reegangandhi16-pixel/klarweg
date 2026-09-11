# Lowercase adjective/adverb homograph — architecture analysis

Nothing was implemented. Every result below comes from live simulation against
the running resolver; all mutations were reverted in the same call.

## 1. The collision is far narrower than I claimed

I previously said authoring these 19 adjectives would collide with the existing
adverbs. **That was overstated.** Measured across all six test bases:

| Base | Bare key | Declined keys `-e -en -em -er -es` |
| --- | --- | --- |
| `klar` | Adverb "of course, sure" | **all 5 free** |
| `echt` | Adverb "really? (Echt?)" | **all 5 free** |
| `kurz` | Adverb "just (after/before)" | **all 5 free** |
| `ehrlich` | Adverb "honest(ly); really?" | **all 5 free** |
| `direkt` | Adverb "directly, right" | **all 5 free** |
| `natürlich` | Adverb "of course, naturally" | **all 5 free** |

**Only the bare form collides. 30 of 30 declined keys are unoccupied.** And the
bare key is never consulted when resolving `klare`: the cascade is exact
headword (`klare` — miss) → article/pronoun tables → index. So the adjective
sense only ever needs to be reachable *from the declined forms*, which is exactly
where there is no contention.

## 2. The mechanism already exists in the data

The lexicon already carries same-spelling disambiguation, and I had it backwards
— the qualifier lives in the **display form**, and the **key** is its
`normWord()`:

```
key: "bewerben sich"          ← normWord("bewerben (sich)")
w:   "bewerben (sich)"        ← what the popup shows
index: bewirbt → "bewerben (sich)"
```

`lookupWord` does `normWord(lemma)` = `"bewerben sich"`, which hits the key. 20
index entries already resolve this way (`bewirbt`, `bewarb`, `beworben`,
`sorgt`, `konzentriere` …) and all were verified working at runtime:
`bewirbt → "to apply", lemma bewerben (sich), Verb`.

**So no resolver change and no 1:many rewrite is needed.** The pattern is already
in production.

## 3. Simulated result — works with zero code changes

Adding `L['klar adjektiv'] = {w:'klar', en:'clear', type:'Adjective', compare:{…}}`
and pointing the five declined keys at `"klar (adjektiv)"`:

| Surface | Before | After |
| --- | --- | --- |
| `klar` | Adverb "of course, sure" | **Adverb "of course, sure" — unchanged** |
| `klare` | not clickable | Adjective **"clear"** ✓ |
| `klaren` | not clickable | Adjective "clear" ✓ |
| `klarer` | not clickable | Adjective "clear" ✓ |
| `klares` | not clickable | Adjective "clear" ✓ |
| `klarem` | not clickable | Adjective "clear" ✓ |

Reverted cleanly. The key `klar adjektiv` contains a space, so it can never be
produced by `normWord()` of any real surface — it is unreachable except through
a deliberate index target. That is what keeps the adverb safe.

## 4. One real snag, and a one-expression fix

The Comparison grid prints its Positive cell as `t.lemma || t.w`, and the
resolution overwrites `lemma` with the qualified string — so the popup would show
**Positive: "klar (adjektiv)"**, leaking metalanguage into learner UI. (Setting an
explicit `lemma` on the entry does not help; verified — the resolution wins.)

For `bewerben (sich)` the qualifier is *correct* citation form, so it must not be
stripped generally.

**Minimal fix — use the authored value that is already there:**

```js
const positivWord = (t.compare && t.compare.positive) || t.lemma || t.w;
```

Verified safe: **all 846 compare records carry `positive`, and it never differs
from `w` in any of them.** So this is a **no-op for every existing entry** and
fixes the leak for the new ones. One expression, no resolver change.

The other `t.lemma` uses are verb conjugation, noun plural and pronoun
declension — none applies to an adjective entry, so there is no second leak.

## 5. The local-token mechanism — answer to your question

Yes, and it needs no per-word code. Authored occurrence tokens already outrank
the dictionary (this is how `Studien` on C1·23 keeps its own gloss while the
dictionary lemma changed underneath it). The homograph guard was verified live:

- `lookupWord('klar', 'adverb')` → Adverb "of course, sure" ✓
- `lookupWord('klar', 'adjective')` → **null** — the guard correctly discards the
  adverb rather than mislabel it ✓

So a chapter that needs `klar` read adjectivally in a specific sentence can
declare it on the token, and the guard keeps the two senses from bleeding.

**Honest limitation:** this architecture resolves **declined forms only**. Bare
`klar` stays the adverb. Predicative uses (*"Das ist klar"*) will still show
"of course, sure". The corpus evidence supports that — every bare-`klar`
occurrence checked is the discourse adverb — but it is a deliberate boundary, not
full coverage.

## 6. Smallest safe implementation

1. **One expression** in `renderWordPop`'s Comparison grid (§4). No-op today.
2. **Per adjective:** one entry keyed `<base> adjektiv` with `w: '<base>'`, plus
   5 index keys pointing at `"<base> (adjektiv)"`. No existing entry touched, no
   key overwritten.
3. **Build rule** so a rebuild does not treat the qualified key as a duplicate of
   the bare adverb, and validates index targets against the **key** rather than
   `w` (`w` is `'klar'` for both senses, so a `w`-only backing test cannot tell
   them apart).

Cost: 19 entries × 6 lines of data, one expression of code.

## 7. Your five findings — all verified by simulation

| # | Finding | Verified |
| --- | --- | --- |
| 1 | `erkältete` → `sich erkälten` | **Confirmed.** Currently "having a cold" [Adjective]. Repointed → **"to have a cold", lemma `sich erkälten`, Verb** ✓ Existing data, no authoring. Fixes a live wrong popup. |
| 2 | `vermisst` pinned to `vermissen` | **Confirmed.** Currently unresolved. Pinned → **"to miss (someone)", Verb** ✓ `vermessen` ("to measure, survey") has the identical authored `praesens: "vermisst"` — needs the `Studien`-style note so a rebuild does not re-drop it. |
| 3 | `Kurzem` pending | **Agreed.** Unresolved today; `seit Kurzem` is its only context. Maps cleanly once `kurz` exists. |
| 4 | `meiste` unchanged | **Agreed.** Resolves to "a lot, many", lemma `viel/viele`, *Adjective / quantifier* — already the right paradigm. Leave it. |
| 5 | `deren`/`denen`/`dessen` separate | **Confirmed.** All three have **no entry at all**, so no mapping is possible — they need a closed relative-pronoun paradigm, not inflection logic. |

## 8. Risks

- **Risk 3 stands:** `halbe Stunde` is an approved noun-phrase card. Authoring
  `halb` as an adjective makes `halben` resolve to the adjective while the card
  teaches the phrase. Needs your call.
- **Risk 1 stands, unchanged:** the 6 reflexive verbs whose Präteritum is taken by
  their participial adjective (`erkältete`, `entspannte`, `erholte`,
  `konzentrierte`, `orientierte`, `verspätete`). Finding 1 fixes one of the six;
  the other five have the same defect.
- **New:** the build's backing test compares against `w`. With two senses sharing
  `w: 'klar'`, it cannot distinguish them — it must compare keys. Fixing this
  before authoring avoids a silent mis-validation.
