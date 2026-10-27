# EX-07 handoff pack: trademark review of "Goethe" references (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) as organiser
> (`LESEN-ONLY-OWNER-DECISIONS.md` D3 revised; `REVIEW-APPOINTMENT-PLAN.md` §10). **No reviewer has been appointed,
> no quote accepted, no opinion exists.** See the handoff-packs [`README.md`](./README.md) for how this pack relates
> to the other four and to the release gates.

## 1. Scope and exclusions

**In scope:** every use of "Goethe" in (a) the exam portal, and (b) the main Klarweg site, and the four questions
in §3.

- **Exam portal:** "Goethe" appears **only** in the mandatory result disclaimer — "Klarweg-Simulation – kein
  offizielles Ergebnis des Goethe-Instituts" — in `exam/js/render.js` and `exam-worker/src/core.js` (register OD-45).
- **Main site:** dozens of HTML pages mention "Goethe" in product names and marketing copy. **The counts below are
  stale on arrival; see the explicit warning.**

**Explicit staleness warning:** `EXTERNAL-REVIEW-BRIEFS.md` cites "57 HTML pages (58 at main `5f06359`)," while
`EXTERNAL-REVIEW-OUTREACH.md` cites "58 HTML pages... main `5f06359`" with a slightly different set of phrase
counts (e.g. it lists "Goethe-aligned (≈ 32)," which the Briefs document omits). **Both counts are already out of
date relative to this pack.** Re-running `git grep -c "Goethe" -- '*.html'` at this pack's own HEAD (`5ca66e6`,
2026-10-27) gives **59 pages**, with `Goethe-Zertifikat` ≈ 79, `Goethe-style` ≈ 63, and `Goethe-aligned` ≈ 32 — close
to, but not identical to, the cited figures, and dozens of PRs have merged since. **The reviewer must re-run the
count themselves against the commit they are actually reviewing** (see §6).

**Explicitly excluded:**
- Trademark questions unrelated to "Goethe" (none have been raised).
- Implementing any recommended change: engineering applies exam-portal wording changes directly once the opinion is
  delivered; **main-site wording changes need the owner's separate go-ahead**, because the chapter/marketing site is
  a different scope of work (`EXTERNAL-REVIEW-BRIEFS.md` EX-07 section).

## 2. Existing specifications, evidence and file references

- `EXTERNAL-REVIEW-BRIEFS.md` (EX-07 section) and `EXTERNAL-REVIEW-OUTREACH.md` §5: reviewer profile, the exact
  scope split (exam portal vs. main site), effort estimate, and the e-mail draft (context only; not sent by this
  pack).
- `B1-FINAL-DECISION-REGISTER.md`: the EX-07 row ("Trademark review of 'Goethe' references and disclaimers,"
  EXTERNAL legal, "nominative use only + disclaimer (OD-45)"), and every other reference to OD-45 in the register
  and briefs (the disclaimer requirement). This pack does not reproduce OD-45's full register text; read it
  directly in `B1-FINAL-DECISION-REGISTER.md`.
- `exam/js/render.js` and `exam-worker/src/core.js`: the actual disclaimer string and where it is rendered — read
  these directly rather than rely on the paraphrase above.
- `git grep -c "Goethe" -- '*.html'` and `git grep -o "Goethe[A-Za-zÀ-ÿ -]*" -- '*.html' | sort | uniq -c | sort -rn`:
  the commands to re-derive a current count and phrase breakdown (see §6).

## 3. Questions for the reviewer (verbatim from the source documents)

1. Is nominative use with the disclaimer sufficient?
2. Are product names such as "Goethe Mini" acceptable?
3. What marketing wording do you recommend ("prepares for," "in the style of," or other phrasing)?
4. Should a disclaimer appear on every page that uses "Goethe," or only where a result or outcome is implied?

## 4. Reviewer checklist (step-by-step)

1. Confirm the exact commit you are reviewing, and re-run `git grep -c "Goethe" -- '*.html'` (and the phrase-count
   variant in §2) against **that** commit — do not use the counts in §1, which are already known to be stale.
2. Read the exam-portal disclaimer directly in `exam/js/render.js` and `exam-worker/src/core.js`; confirm it is the
   only exam-portal use of "Goethe."
3. Catalogue every main-site product name or marketing phrase that uses "Goethe" (starting from, but not limited
   to, "Goethe Mini," "Goethe-Zertifikat," "Goethe-style," "Goethe Exam," "Goethe-aligned").
4. Answer the four questions in §3.
5. Produce a written opinion and an itemised list of required wording changes, each tagged as **exam portal**
   (engineering applies directly) or **main site** (needs the owner's go-ahead) per §1.

## 5. Findings template

| Field | Description |
|---|---|
| `id` | a stable finding id, e.g. `EX07-001` |
| `location` | file or page |
| `current_wording` | the exact text in question |
| `issue_or_risk` | the trademark concern |
| `recommended_wording` | the suggested replacement, if any |
| `applies_to` | exam portal (engineering fixes directly) / main site (owner go-ahead needed) |
| `disposition` | acceptable as-is / change recommended / change required |

## 6. Acceptance criteria (from the source documents)

- A **written opinion** and a **list of required wording changes**
  (`LESEN-ONLY-RELEASE-READINESS.md` §2, row R5).
- This review is listed as a release gate for the Lesen-only release in the readiness checklist even though its
  subject matter (main-site marketing copy) is broader than Lesen-only itself — treat it as a release blocker like
  the other four, not as optional.

## 7. Known gaps and unresolved owner decisions

- **No reviewer is appointed.** C2 (written approval before any paid work) applies.
- The cited "Goethe" counts in the source briefs are already stale relative to this pack's own commit (§1), and
  will be stale again by the time a reviewer is engaged — each count needs re-deriving at the time of review, not
  copied from any document, including this one.
- Whether a disclaimer should appear on every "Goethe"-mentioning page (question 4) is explicitly open; engineering
  has not pre-judged it.
- The controller's legal-entity details (relevant to who signs or receives the opinion) are still unset elsewhere
  in the review materials (see the EX-01 pack, §6) and may be needed for the engagement contract.

## 8. What the reviewer must independently verify (not accept as an engineering claim)

- **The "Goethe" occurrence counts and phrase breakdown**, by re-running the `git grep` commands in §2 against the
  commit actually under review — every count in this pack and its sources is already known to have drifted (§1)
  and must not be treated as current.
- **The exact disclaimer wording and placement**, by reading `exam/js/render.js` and `exam-worker/src/core.js`
  directly, not the paraphrase in §1 or in `EXTERNAL-REVIEW-BRIEFS.md`.
- **Their own legal judgement on nominative-use sufficiency and acceptable product naming** (questions 1–3) — this
  is precisely the independent judgement the engagement exists to provide; engineering has deliberately not
  pre-answered it, and no internal review stands in for it.
