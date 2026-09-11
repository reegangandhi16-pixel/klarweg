# Verification batch 1 — cleaned

Strict pre-authoring cleanup of the 34 Tier-A candidates. Evidence is every
authored occurrence gloss for each surface across all 259 chapters — 42 surfaces,
all distinct variants collected, not just the first hit.

**`global-lexicon.js` was NOT modified. Nothing was authored. No curriculum
content was rewritten.**

## Rules applied

1. **Annotations stripped.** `(Satzende)`, `(source)`, `(participial attribute)`,
   `(Funktionsverbgefüge)`, `(journalistic intensifier)` are per-occurrence parser
   notes, never dictionary content.
2. **Hindi script.** Devanagari is used only where the curriculum itself supplies
   it, for that same lemma, unambiguously. **No transliteration was performed** —
   where only romanised Hindi exists, the item is left unresolved.
3. **Multiple Devanagari glosses:** the most frequent wins; **an exact tie is
   left unresolved** rather than picked by preference.
4. **No inflected gloss becomes a lemma gloss.** A 3rd-person, comparative,
   participle or plural gloss cannot be normalised to the citation form without
   editing Hindi morphology, which is invention.
5. **Class** is taken only where every variant agrees, or where one reading is
   clearly dominant in the evidence.

**Result: 19 of 34 safe to author. 15 held.**

## Safe to author — 19

| Lemma | Class | × | Chapters | Curriculum gloss (cleaned) | Hindi | Evidence | Conf. | Issue | safe |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| die Reform | Noun · fem. | 29 | c1-04, c1-15, c2-07, c2-09, c2-26 | reform | सुधार | 8 variants, class agrees; Devanagari in 3 chapters, romanised *sudhar/sudhaar* rejected | high | — | **YES** |
| stabil | Adjective | 19 | c2-12 | stable | स्थिर | single unambiguous variant | high | — | **YES** |
| die Kommission | Noun · fem. | 18 | b2-49 | commission | आयोग | single unambiguous variant | high | — | **YES** |
| beeindruckend | Adjective | 16 | c1-03, c1-18 | impressive | प्रभावशाली | 2 variants, identical | high | — | **YES** |
| die Stichprobe | Noun · fem. | 15 | c1-14, c2-07 | sample | नमूना | c2-07's `hi` is the English word "sample" (data slip, noted); c1-14 gives Devanagari | high | — | **YES** |
| die Methodik | Noun · fem. | 14 | c1-08, c2-29 | methodology | पद्धति | 2 variants, identical | high | — | **YES** |
| der Kritiker | Noun · masc. | 12 | b2-37, b2-04, c2-27 | critic | आलोचक | 8 variants; **b2-37 supplies the singular** "critic / Noun · masc."; Devanagari in 3 chapters | high | one chapter has `hi:"critics"` (English in the Hindi field) — separate data defect | **YES** |
| präzise | Adjective | 11 | c2-22, c2-11, b2-17 | precise | सटीक | adjective attested in 2 of 3; c2-22 gives Devanagari. Adverb sense ("precisely / सटीक रूप से") also attested → a second sense, not a conflict | high | adverb sense exists separately | **YES** |
| die Debatte | Noun · fem. | 11 | b2-54 | debate | वाद-विवाद | 3 variants, class agrees; only b2-54 is Devanagari | high | — | **YES** |
| überraschend | Adjective | 11 | b1-32, c1-32 | surprising | आश्चर्यजनक | adjective reading in 2 chapters, both Devanagari and identical | high | adverb sense attested separately | **YES** |
| wissenschaftlich | Adjective | 21 | c2-17 | scientific | वैज्ञानिक | single unambiguous variant | high | — | **YES** |
| das Fachjournal | Noun · neut. | 8 | c2-11 | specialist journal | विशेषज्ञ पत्रिका | single variant, annotation stripped | high | — | **YES** |
| der Saal | Noun · masc. | 7 | b1-26 | hall | हॉल | single variant, annotation stripped | high | — | **YES** |
| die Zukunft | Noun · fem. | 7 | a2-4, b1-33, b2-60 | future | भविष्य | 3 variants, all identical | high | — | **YES** |
| die Unterstützung | Noun · fem. | 7 | b2-20, b2-40, b2-54 | support | सहायता | सहायता in 3 chapters vs समर्थन in 1 — clear majority | high | — | **YES** |
| das Ministerium | Noun · neut. | 8 | b2-61, b2-63 | ministry | मंत्रालय | bare form is romanised (*mantraalay*), but the genitive `Ministeriums` in b2-61 gives Devanagari for the same lemma | high | — | **YES** |
| der Wissenschaftler | Noun · masc. | 6 | b2-52, b2-08 | scientist | वैज्ञानिक | **b2-52 supplies the singular** "scientist / Noun · masc."; both Devanagari and identical | high | — | **YES** |
| das Protokoll | Noun · neut. | 6 | c1-26 | protocol | प्रोटोकॉल | single unambiguous variant | high | — | **YES** |
| einreichen | Verb (sep.) | 17 | c2-24, c1-16 | to submit | जमा करना | c2-24 gives the infinitive with an infinitive-form Hindi; c1-16 confirms it | high | — | **YES** |

**Article/gender source:** taken from the `type` field the curriculum itself
authored (`Noun · fem.`, `Noun · neut.`, `Noun · masc.`), never inferred from
the noun's ending. **No plural, conjugation or comparison form is proposed** —
none is attested, and none may be invented. Those fields will simply be absent,
which the popup already handles.

## Held — 15, with the exact blocker

| Lemma | × | Why held | safe |
| --- | --- | --- | --- |
| zuerst | 20 | Three Devanagari glosses, **tied**: सबसे पहले (a1-17, a2-12) vs पहले (a1-25, a1-19) vs पहले तो (b2-02). 2–2 tie; picking one is preference, not evidence | NO |
| der Gutachter | 18 | Only gloss is the **plural** "reviewers / समीक्षकों" (oblique plural). Singular Hindi would be समीक्षक — a morphological edit I will not make | NO |
| das System | 14 | Two Devanagari, **1–1 tie**: प्रणाली (b1-16) vs सिस्टम (c2-23) — native word vs loanword. A curriculum register decision | NO |
| sorgfältig | 13 | Two Devanagari, **1–1 tie**: ध्यान से (b1-17) vs सावधानी से (b1-29) | NO |
| wirksam | 13 | **Romanised only** in both variants (*prabhaavshaali*, *prabhaavi*). The comparative `wirksamer` has अधिक प्रभावी ढंग से, which is adverbial and comparative — not usable as the positive gloss | NO |
| förmlich | 13 | Only the **comparative** `förmlicher` is glossed: "more formal / ज़्यादा औपचारिक". Stripping ज़्यादा to reach the positive is editing Hindi | NO |
| das Vorjahr | 8 | Hindi is **fragmentary**: "साल के" = "of the year", not "previous year". Left unresolved as you instructed | NO |
| erfordern | 6 | Infinitive gloss is romanised (*zaroorat hai*); `erfordert` gives माँगती है — a **3rd-person feminine-agreeing** form. No infinitive Devanagari attested | NO |
| erheben | 8 | All four glosses are **participles**: एकत्र किया गया, एकत्रित, एकत्रित किए गए. Infinitive Hindi is not attested. The lemma itself is also inferred — the infinitive never occurs as a surface | NO |
| leiten | 7 | Only `leitet` glossed: "leads / चलाता है" — **3rd-person masculine**. Infinitive not attested | NO |
| treten | 6 | Both glosses are the bound sense *in Kraft treten* ("come into force"); `trat` (a2-28) is **unverified** as the same sense. Corpus does not resolve it | NO |
| bisschen | 9 | 8 variants disagree on **both** class (Quantity phrase / Adverb / Determiner / Noun · neut.) and Hindi (थोड़ा, थोड़ी, सा, ज़रा, ज़रा भी) | NO |
| hinaus | 6 | **Two distinct senses**: "beyond / से आगे" (4×) and "moreover / इसके अलावा" (2×, from *darüber hinaus*). Different English, different Hindi | NO |
| voraus | 7 | Typed **"Separable prefix"** in both variants, one with empty Hindi. A prefix is not a free lemma | NO |
| vorbei | 6 | **Four distinct senses**: ख़त्म "over", से होकर "past", यहाँ "by", plus a separable prefix | NO |

## Adjective vs adverb — resolved only where evidence was clear

- **`präzise`** — resolved to **Adjective**. Attested as Adjective in c2-11 and
  c2-22, Adverb in b2-17. The adjective is what the declined surfaces need. Two
  genuine senses; the adverb can be added separately later.
- **`überraschend`** — resolved to **Adjective** (b1-32, c1-32), with the adverb
  sense (b2-04, c1-19) noted as separate.
- **`sorgfältig`** — attested **only** as Adverb, so no adjective entry is
  justified by evidence, and its Hindi is tied anyway. Left unresolved.
- **`voraus`** — attested only as a separable prefix. Not a lemma.

## English-identical German nouns

`System`, `Protokoll`, `Software`, `Drill` are genuine German nouns that happen
to share their spelling with English. They are recorded here as a **permanent
allowlist** for the English-leak filter. No curriculum content was altered to
suit the filter, and `Protokoll` is on the safe list on its own evidence.

## Separate data defects found (not fixed here)

- `Kritiker` in c2-23 has `hi: 'critics'` — an English string in the Hindi field.
- `Stichprobe` in c2-07 has `hi: 'sample'` — same defect.
- `einzureichen` in c2-13 and `erhoben` in c2-14 have Hindi consisting **only**
  of an annotation: `"(Satzende, institutional obligation)"`, `"(Satzende, passive)"`.
- Romanised Hindi appears in roughly a quarter of the harvested glosses, mixed
  with Devanagari for the same lemma.

These are curriculum-content issues, so they are reported rather than touched.

## Mandatory per-batch completion audit

No lexicon change was made this turn, so no full corpus scan was required. The
audit mechanism itself was implemented and exercised:

| Field | Value |
| --- | --- |
| batchRange | 0..2 |
| expectedChapters | 3 |
| completedChapters | 3 |
| missingChapterIds | [] |
| timedOutChapters | [] |
| duplicateChapterMerges | 0 |
| accumulatorChapterCount | 259 |
| **reconciles** | **true → PASS** |

The runner now prints **"INCOMPLETE — audit failed"** instead of "done" whenever
these do not reconcile, and `ACC.lastAudit` holds the record.

## Recommendation

Author the **19**. Every field comes from an authored curriculum gloss with
Devanagari Hindi, cleaned of annotations, with class taken from the curriculum's
own `type`. No gender, plural, conjugation or comparison is proposed for any of
them beyond what is attested.

The **15 held** split into three decisions for you: 4 need a Hindi variant picked
from authored alternatives (`zuerst`, `System`, `sorgfältig`, plus `Unterstützung`
if you disagree with the majority rule); 6 need Devanagari sourced for a citation
form (`wirksam`, `förmlich`, `Gutachter`, `erfordern`, `erheben`, `leiten`);
5 need a sense decision (`hinaus`, `vorbei`, `bisschen`, `treten`, `voraus`).
`Vorjahr` needs its Hindi corrected in the source chapter.
