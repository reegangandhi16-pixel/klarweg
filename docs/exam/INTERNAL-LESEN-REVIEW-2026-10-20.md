# Internal Lesen review of the candidate forms P3, P8, P13 — 2026-10-20

> **Internal engineering review, not EX-03.** Engineering (Claude) wrote this from its own reading. It is not a
> native-speaker or teacher review, it approves nothing, and it does not replace the EX-03 panel (register §C.1). No
> reviewer has been appointed. This file is in the public repository, so it names items but never their keys.

## Scope and method
- **Items:** Lesen Teil 1–5 of P3, P8 and P13, 30 scored items each (90). The review covered every text, stem, option,
  key, explanation and evidence quote, read together.
- **Checks per item:**
  - the key is supported by the evidence quote and by the whole text, and no other option is defensible;
  - negation, dates, times, numbers, frequency and totality words;
  - Teil 3: every ad is used once, the 0 case has no fitting ad, and no ad restricted to one group answers a "Sie"
    situation;
  - Teil 4: each opinion is clearly for or against;
  - Teil 5: each rule is paraphrased correctly;
  - the explanation states only what the text says;
  - grammar and natural B1 wording.
- **Generalised checks over all 15 forms:**
  - frequency or totality words in *richtig* statements that are missing from the text, which led to a new
    library test;
  - restrictive words ("allein", "nur", "selbst") in explanations that are missing from the text. This check was
    reviewed by hand: "nur"/"selbst" are almost always legitimate contrasts. Its only "allein" hits were the P3 defect
    below and P10 Lesen 1 item 1, a sound inference that was kept.

## Results
**No wrong key was found in the 90 items. All keys are unchanged.** Four wording defects were fixed in the generator
sources, and the forms were regenerated (`make-synthetic-form.mjs --check` is clean):

| Item | Defect | Fix |
|---|---|---|
| P3 Lesen 1, item 1 | Ambiguous: "fährt jeden Tag mit dem Bus" while the text says "jeden Morgen … mit zwei Bussen" and later that he sometimes borrows his sister's car, so the opposite answer was defensible | Stem now asks about the length of the bus journey ("über eine Stunde"), which the text states without qualification |
| P3 Lesen 1, item 2 | Explanation claimed he practised "allein"; the text does not say so | Explanation now says only what the text says, and that a course is not mentioned |
| P8 Lesen 2, item 10 | Explanation claimed the sign is "held up"; the text does not say so | Explanation restricted to the text (the sign shows the destination, e.g. the next village or the station) |
| P13 Lesen 3, item 16 | Explanation claimed "a few hours are enough"; the ad states no time | Explanation restricted to the ad (volunteers accompany older people to the doctor) |

Regression tests in `exam-content/test/practice-library.test.mjs`:
- **Library-wide:** a *richtig*/*ja* statement never claims a frequency or totality ("jeden Tag", "immer", "alle", …)
  that its text does not state.
- **Item pins:** the four fixed items, with their keys unchanged.
- **Negative control:** restoring the old P3 stem in the generator fails both tests.

## For the EX-03 reviewers (flags, not defects; nothing changed)
Engineering judged these acceptable but wants the panel's explicit verdict:
- **P3 Lesen 1, item 2:** the statement concerns a course the text does not mention. Judge whether the keyed answer is
  the only defensible one under the richtig/falsch convention.
- **P8 Lesen 1, item 5:** the visiting rule is restricted from a stated hour. Judge whether "abends" in the statement
  is unambiguous.
- **P8 Lesen 4, item 25 (Vanessa):** the opinion is partly indifferent ("ist mir das egal"). Judge whether the yes/no
  key is the only defensible reading.
- **P13 Lesen 5, item 30:** the text's "versteigert oder gespendet" is paraphrased by the keyed option. Judge whether
  "auctioned" fits the option's verb.

## Fingerprints
The four fixes change the content fingerprints of P3, P8 and P13. Review sheets made before this change, including the
Lesen packet `EX-03-LESEN-479bd0e` and the P3/P8/P13 sheets of `EX-03-821cfb0`, are **stale** (EX-03/O6, no
carry-forward). A new Lesen packet is generated from the main commit that contains this change.
