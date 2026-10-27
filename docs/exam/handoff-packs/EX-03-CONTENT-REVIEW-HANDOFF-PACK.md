# EX-03 handoff pack: independent content review of P3, P8, P13 (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) as organiser
> (`LESEN-ONLY-OWNER-DECISIONS.md` D3, revised 2026-10-21; `REVIEW-APPOINTMENT-PLAN.md` §10). **No reviewer has been
> appointed, no quote accepted, no review has started, and no finding exists.** This pack prepares material for the
> three reviewers once the owner approves their engagements in writing (C2, `REVIEW-APPOINTMENT-PLAN.md` §8). It
> authorises no outreach and makes no approval. See the handoff-packs [`README.md`](./README.md) for how this pack
> relates to the other four and to the release gates.

## 1. Scope and exclusions

**In scope:** the Lesen (reading) items of the three **candidate** forms — **P3, P8, P13** — as decided by the
owner for decision D2 (`LESEN-ONLY-OWNER-DECISIONS.md`: "P3 + P8 + P13"). That is Lesen Teil 1–5 of each form, 30
scored items per form, **90 items in total** (`EXTERNAL-REVIEW-OUTREACH.md` §1; `SELF-PRACTICE-SCOPE.md` §3).

Three reviewer slots, three different people (register `B1-FINAL-DECISION-REGISTER.md` §C.1, EX-03/O1):
| Slot | Profile | What they record |
|---|---|---|
| A | Experienced B1 German teacher | Verdict per item; `ambiguity_risk`, `inference_demand`, `distractor_strength` (EX-03/O2, O5) |
| B | A **different** experienced B1 German teacher | Same as A |
| C | Native German linguist | Verdict per item; item-level accessibility (EX-03/O4); per-form originality sign-off (EX-03/O3) |

**Explicitly excluded from this pack's scope:**
- Hören, Schreiben and Sprechen content — out of scope for the Lesen-only release (`SELF-PRACTICE-SCOPE.md` §1).
- Any form other than P3, P8, P13 — the other twelve practice forms (P1, P2, P4–P7, P9–P12, P14, P15) and the
  system-test fixture S0 are not part of this engagement.
- **The commercial reference book, in any form** — EX-03/O9 forbids reviewer access to it.
- Adjudication of disagreements between reviewers — there is no tie-break role (EX-03/O7); see §6.
- Anything touching production or real learner data — all material is synthetic (`check-public-boundary.mjs`
  enforces this at the repository level).

## 2. Existing specifications, evidence and file references

- `B1-FINAL-DECISION-REGISTER.md` §C.1 (EX-03/O1–O10): the locked rules this review runs under. Read this first —
  it governs independence, roles, carry-forward, severity, reference-material access and tie-breaks.
- `EXTERNAL-REVIEW-OUTREACH.md` §1 and §7: role requirements, reviewer steps, the quote-request template, and the
  independence/delivery confirmation texts the reviewers sign.
- `EXTERNAL-REVIEW-BRIEFS.md` (EX-03 section): the tooling summary and what is "already done internally (not a
  substitute)".
- `LESEN-ONLY-REVIEW-EVIDENCE.md` (EX-03 section): the packet location and status-tool behaviour for this specific
  release scope.
- `INTERNAL-LESEN-REVIEW-2026-10-20.md`: engineering's own pre-review of all 90 candidate items. **This is not EX-03
  and does not replace it.** It records: no wrong key found; four wording defects fixed (keys unchanged); four items
  flagged for the panel's explicit verdict (quoted in §6 below). Read this before reviewing — it tells you what
  engineering already looked at, not what the panel should conclude.
- The confidential packet **`EX-03-LESEN-RC-2026-10-20`** (outside this repository, at
  `~/Downloads/klarweg-review-packets/EX-03-LESEN-RC-2026-10-20/` on the organiser's machine — never committed,
  because it contains answer keys). It contains the fillable `Pn-review-form-lesen.html` sheets, JSON response
  templates, `README-REVIEWERS.md`, `AUTOMATED-FLAGS.md`, and an assignment sheet. **This pack does not reproduce
  its contents.** The organiser hands it directly to each appointed reviewer only, per EX-03/O9's confidentiality
  framing and the "no copying, uploading or sharing" rule in `EXTERNAL-REVIEW-OUTREACH.md` §0.
- Self-service tooling the organiser and reviewers both use:
  - `node exam-content/tools/review-sheet.mjs --module lesen` (generates/regenerates the sheets);
  - `node exam-content/tools/review-status.mjs --check <record.json> --module lesen` (pre-return check, plain
    "READY TO RETURN" or a list of what is missing/wrong);
  - `node exam-content/tools/review-status.mjs <returned dir> --module lesen --out <dir>` (status per form/module,
    `ex03-summary.txt`).

## 3. Reviewer checklist (step-by-step)

Condensed from `EXTERNAL-REVIEW-OUTREACH.md` §1 and the packet's own `README-REVIEWERS.md` (that README is the
fuller reference; this is the quick path):

1. Sign the independence/confidentiality confirmation (§7 template, quoted below) **before** receiving the packet.
2. Open `Pn-review-form-lesen.html` for each of P3, P8, P13 in a browser (offline, no install). Enter your slot
   (A, B or C), a pseudonym as reviewer id, the date, and whether you are a native speaker.
3. For each of the 30 items per form, read the text, the item, the marked key, the explanation and the evidence
   quote in full, then record:
   - **verdict:** `approve`, `revise` or `reject`;
   - slots A/B: `ambiguity_risk`, `inference_demand`, `distractor_strength`;
   - slot C: the item-accessibility verdict;
   - a note — **required** for every `revise`, `reject`, or any ambiguity rating of 1 or more, quoting the exact
     words you mean.
4. Slot C only: record the per-form originality sign-off.
5. Do **not** discuss any item with the other two reviewers until all three have finished (EX-03/O7).
6. When the in-form counter reads "Complete: 30 of 30", click **Download record** (`Pn-<slot>.json`). Progress is
   kept in the browser between sessions; "Resume from a record" continues from a downloaded file.
7. Before returning, run `node exam-content/tools/review-status.mjs --check <file> --module lesen` yourself if you
   have the tool, or ask the organiser to run it. Fix anything it flags, using "Resume from a record" — never hand-edit
   the downloaded JSON (any edit breaks its fingerprint and voids the record, EX-03/O6's "no carry-forward" applies
   to tampered records too).
8. Return the three files (one per form) to the organiser's named channel. The organiser never has e-mail of its
   own; it uses only a channel the owner has named (`REVIEW-APPOINTMENT-PLAN.md` §10).

**Independence and confidentiality confirmation (sign before starting):**
> I, [name], confirm that I am not part of the Klarweg team, did not write or edit the material I am asked to
> review, and have no interest in the outcome beyond this engagement, except: [none / describe]. I will keep the
> material and my findings confidential, use them only for this review, and return or delete the material after
> delivery. [Place, date, signature]

## 4. Findings template

EX-03 deliberately has **no general severity scale** (EX-03/O8 — "findings are recorded through the reviewer's
verdict and the finding's disposition"). Use this structure per item, matching the packet's own JSON record shape:

| Field | Values | Required when |
|---|---|---|
| `form` | P3 / P8 / P13 | always |
| `item_id` | the item's id in the sheet | always |
| `reviewer_slot` | A / B / C | always |
| `verdict` | `approve` / `revise` / `reject` | always |
| `ambiguity_risk`, `inference_demand`, `distractor_strength` | the sheet's rating scale | slots A, B |
| `accessibility_verdict` | the sheet's scale | slot C |
| `note` (evidence quote) | free text, quoting the exact words meant | required for `revise`, `reject`, or ambiguity ≥ 1 |
| `originality_signoff` (per form, not per item) | signed / not signed | slot C only |

**Disposition** is not a reviewer field — it follows from the verdicts under EX-03/O7: an item with any `revise` or
`reject`, or with no single agreeing pair across the three verdicts, is either revised by engineering (and reviewed
again from scratch, EX-03/O6 — no carry-forward) or withdrawn by the owner and replaced by a new item reviewed from
scratch. Neither engineering nor the owner may turn a rejection into an approval.

## 5. Acceptance criteria (from the source documents)

- **Per form:** three valid records, one per slot, each reporting `lesen: approved`, as computed by
  `review-status.mjs` (`LESEN-ONLY-RELEASE-READINESS.md` §2, row R1).
- A record is "valid" only if `review-status.mjs --check` reports "READY TO RETURN" with no unresolved flags, and
  the file's fingerprint is unmodified since download (no hand-edits).
- **Only then** does `release-candidate.mjs --approved <records>` accept that form; it refuses P3, P8 and P13 today
  because no records exist (`SPEC-AUDIT-2026-10-22.md` §1 confirms this is tool-enforced, not a convention).
- No carry-forward: a form or item revision needs fresh verdicts from all three reviewers (EX-03/O6).

## 6. Known gaps and unresolved owner decisions

- **No reviewer is appointed.** Per the revised D3, Claude researches candidates for slots A, B and C from public
  professional sources and drafts invitations (`REVIEW-APPOINTMENT-PLAN.md` §10) — this is a desk check of what
  candidates publish about themselves, not a verification of credentials, and it is not done as part of this pack.
- **O1 (fee approval)** is open: nobody starts paid work without the owner's written approval of the specific
  engagement and fee (C2).
- D2 fixed the candidate set (P3+P8+P13), but **the forms remain "candidate" until EX-03 approves them** — D2 is not
  itself an approval.
- **Four items are flagged for the panel's explicit verdict**, not fixed by engineering (`INTERNAL-LESEN-REVIEW-2026-10-20.md`,
  quoted here so the reviewer sees them stated plainly, not buried):
  1. P3 Lesen 1, item 2 — the statement concerns a course the text does not mention; judge whether the keyed answer
     is the only defensible one under the richtig/falsch convention.
  2. P8 Lesen 1, item 5 — the visiting rule is restricted from a stated hour; judge whether "abends" in the statement
     is unambiguous.
  3. P8 Lesen 4, item 25 (Vanessa) — the opinion is partly indifferent ("ist mir das egal"); judge whether the
     yes/no key is the only defensible reading.
  4. P13 Lesen 5, item 30 — the text's "versteigert oder gespendet" is paraphrased by the keyed option; judge
     whether "auctioned" fits the option's verb.
- **Packet staleness risk:** the current packet, `EX-03-LESEN-RC-2026-10-20`, reflects the content fingerprints as
  of the internal fixes recorded above. It already superseded one earlier, stale packet
  (`EX-03-LESEN-479bd0e`) for the same reason. Any further content change before reviewers finish invalidates
  in-progress records (EX-03/O6) and requires a fresh packet.
- D4 (OD-08 instruction-wording legal clearance) and D5 (OD-41 accommodation policy) remain open; they do not block
  EX-03 itself but do block the release this review feeds.

## 7. What the reviewer must independently verify (not accept as an engineering claim)

- **The key and every distractor, from the text itself.** Engineering's internal pre-review
  (`INTERNAL-LESEN-REVIEW-2026-10-20.md`) found no wrong key across all 90 items — this is a claim from one
  non-independent reading, explicitly stated not to be a substitute for EX-03, and the reviewer should re-derive
  each verdict from the item text and evidence quote, not from that claim.
- **The four flagged items in §6**, each on its own merits — engineering has deliberately not pre-judged them.
- **Their own independence and conflict-of-interest status**, including that they did not tutor, author, or advise
  on Klarweg exam content before (`EXTERNAL-REVIEW-OUTREACH.md` §1 additional COI rule).
- **That they have not used the commercial reference book** in preparing their verdicts (EX-03/O9) — this is a
  self-attestation; nothing in the tooling can check it automatically.
- **That the packet they received matches the current main branch's content fingerprints** — ask the organiser to
  confirm the commit the packet was generated from, since a stale packet (see §6) produces records the tooling will
  flag as unusable.
- **That they have not discussed any item with the other two reviewers before finishing** (EX-03/O7) — this, too,
  is a self-attestation the tooling cannot verify.
