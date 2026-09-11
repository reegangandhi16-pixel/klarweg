# Dialogue QA — A1→C2 (pre-audio gate)

Scope: every learner-facing chapter dialogue (Story Dialogue + Listening Dialogue).
Clickability system untouched. No 259-chapter clickability scan. No audio generated.

## Totals
- Chapter data files inspected: **258**
- Dialogue-bearing chapters: **254** (4 B2 Goethe checkpoints carry `story: null` by design and a listening *monologue*, not a dialogue — out of scope: b2-14-goethe-mini-test-1, b2-26-goethe-mini-test-2, b2-36-goethe-halbzeit-test, b2-43-goethe-mini-3)
- Dialogues checked: **508** (254 story + 254 listening)
- Already good: **231 chapters**
- Revised: **23 chapters**

## Revised — chapter IDs and reasons

### Speaker not named in the Story-Based Learning intro (criterion 2 / 12)
Intro copy referred to "the group / the gang / the class / everyone / the waiter" instead of the
actual second speaker, so intro, metadata and dialogue disagreed. Intro copy edited only —
no vocabulary, grammar or dialogue line touched.

| Chapter | Speakers | Fix |
|---|---|---|
| a1-15-cafe | Kellner · Ida | "The waiter" → "Der Kellner" |
| a1-26-goethe3 | Britta · Ralf | Ralf named |
| a1-32-akkusativpronomen | Ronja · Fabian | "the group" → Ronja and Fabian |
| a1-35-goethe4 | Runa · Nick | "the group reacts" → "Nick reacts" |
| a1-36-dativ | Alina · Timo | "a classmate" → Timo |
| a1-37-praep-dativ | Kerstin · Nico | "The group" → Kerstin and Nico |
| a1-38-wechselpraep | Franzi · Basti | "the gang" → Basti |
| a1-41-dativpronomen | Kellner · Frau Sommer | "the waiter" → "der Kellner" |
| a1-43-smalltalk-man | Yvonne · Georg | "the gang" → Yvonne and Georg |
| a1-46-zeitangaben | Wiebke · Timo | "the group" → Timo |
| a2-1-genitiv | Petra · Malte | "the group" → Petra and Malte |
| a2-2-perfekt-review | Insa · Fynn | "Everyone" → Fynn |
| a2-12-reflexive-verben | Enya · Timo | "the whole class" → Enya and Timo |
| a2-14-wechselpraepositionen | Timo · Frieda | "everyone" → Timo |
| a2-15-positions-richtungsverben | Meret · Timo | "The class" → Meret and Timo |
| a2-17-werden | Neele · Timo | "everyone" → Timo |
| a2-19-indirekte-fragen | Franka · Timo | "everyone in the group" → Timo |

### Intro described a different scene than the dialogue (criterion 3 / 12)
- **a2-18-ortsangaben** — intro had a tourist asking the class for the *Dom*; the dialogue is Timo asking Frauke the way to the *Museum*. Intro rewritten to the actual scene (dialogue unchanged).
- **a2-20-was-fuer-ein** — intro described a Bücherei / driving-school / interpreter day; the dialogue is about instruments, music and a course leader. Intro rewritten to the actual scene (dialogue unchanged).

### Broken pronoun reference — dialogue did not say what it meant (criteria 8, 9)
- **a1-40-verben-dativ** — German read *Wie gefällt **mir** die Jacke?*, *Der Pullover steht **ihm***, *Der gehört **ihm***, while the EN/HI translations all said "you". Corrected to **dir** in three tokens (with pron/ex fields); dative-verb inventory (gefallen, passen, stehen, gehören, helfen) unchanged. Intro also corrected: Kevin is the one being dressed, and Nele does help him.

### Dialogue stopped on an unanswered question — no ending (criterion 10)
- **b2-23-nicht-nur-sondern-auch** (listening) — ended on "Kann ich morgen beim Sortieren helfen?". Added closing line B2_023_L005 (Miriam): *Sehr gern — komm einfach um zehn, dann zeige ich dir alles.*
- **b2-27-perfekt-vs-praeteritum** (listening) — ended on "Hat sie dir auch erzählt, wie es danach weiterging?". Added closing line B2_027_L005 (Ines): *Ja, sie hat noch lange erzählt. Ich zeige dir nächstes Mal ihre Fotos.*
Transcript, translation and token arrays extended to match.

### Stale metadata + register inconsistency (criteria 9, 12)
- **b2-38-verschachtelte-relativsaetze** — `scene` read "Die Professorin und ihre Tochter" (left over from another chapter) while intro and dialogue are a castle tour → scene now "Eine Führung im Schloss". Timo also addressed Frauke with *Kennen Sie*, though the HI gloss and the chapter's listening dialogue are both informal → *Kennst du*.

## Checked and deliberately not changed
- **Two speakers, one male + one female:** all 254 dialogues pass (`femaleSpeakers` / `gender` fields consistent).
- **Length flags:** 30 story dialogues run 4–5 turns (mostly B2/C1) and 9 listening dialogues run 3 turns. Each was read: situation set, one goal, clean close. Short is not a failure — no padding added.
- **Register scan (Sie + du in one dialogue):** 10 candidates, all false positives (`Sie`/`Ihr` as *she/her/it*), except b2-38 above. a1-4-hallo mixes Sie and du on purpose — that is the chapter's topic.
- **A1 sequencing (criterion 6):** marker scan over all 47 A1 story dialogues for Perfekt, Präteritum, modal verbs, dative pronouns and accusative ahead of their chapters — clean. One borderline: **a1-34-schreiben** uses *zusammen mit uns* (dative, taught in a1-36) as a fixed chunk. Left as is — approved grammar is not changed to make a dialogue easier. Flagging for your call.
- **b2-42-adjektive-mit-praepositionen:** every line carries a different adjective+preposition (begeistert von, stolz auf, zufrieden mit, reich an, gespannt auf, bekannt für) — borderline vocabulary parade, and "Ich bin stolz auf den Künstler" is a slightly odd thing to say about a stranger. It reads as plausible gallery small talk, so no change made. Flagging for your call.
- **No English/Hindi/editorial text** found inside any German dialogue line.

## Audio prep — one open item
`audio-manifests/listening-dialogue-manifest.json` (1079 lines) does not yet contain the two
new IDs **B2_023_L005** and **B2_027_L005**. The manifest must be regenerated before any
audio production so those two lines get files and content hashes. No other dialogue text
changed in a way that alters existing audio IDs.

Raw data: `audit/dqa-mech-full.json` (per-chapter results), `audit/dqa-reg-*.json` (register pass).
