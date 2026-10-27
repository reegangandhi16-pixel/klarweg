# EX-01 handoff pack: privacy review (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) as organiser
> (`LESEN-ONLY-OWNER-DECISIONS.md` D3 revised; `REVIEW-APPOINTMENT-PLAN.md` §10). **No reviewer has been appointed,
> no quote accepted, no review has started, and no clearance or finding exists.** Nothing here is legal advice or an
> approved privacy notice. See the handoff-packs [`README.md`](./README.md) for how this pack relates to the other
> four and to the release gates, and §6 below for a sequencing issue specific to this review.

## 1. Scope and exclusions

**In scope:** the data processing of the proposed **Lesen-only** release only — account data, exam attempts,
answers with timestamps, results, audit log, and Worker logs (`LESEN-ONLY-REVIEW-EVIDENCE.md` EX-01 section);
storage location (Cloudflare); retention (open decision D7); and whether the existing site privacy notice covers
the exam area at all.

**The actual data collected**, verified against `exam-worker/migrations/0001_exam_init.sql`,
`0002_attempt_module_scope.sql`, and `exam-worker/src/` (as of main `0c9563b` — **re-verify against the current
commit**, see §7):

| Table | What it holds | Personal reference |
|---|---|---|
| `exam_access` | which account may use the exam area (granted by entitlement or admin) | Klarweg user id |
| `attempts`, `attempt_modules` | attempt, assigned form, timings, `module_scope = lesen`, status | user id |
| `attempt_leases` | current device lease (a random device id from the browser's `localStorage`); deleted on completion | device id |
| `responses_current`, `response_events` | each chosen option, with client and server timestamps, **including every superseded save** | via attempt |
| `request_log` | idempotency record of each write request and its response | via attempt |
| `module_scores`, `results` | Lesen points, pass flag, counts | via attempt |
| `audit_log` | events such as `attempt_created`, `module_started`, `module_submitted`, lease events | user id |
| `rate_counters` | per-attempt request counters (abuse limits) | via attempt |

**Additional technical data** (per the draft notice, `CONSENT-PRIVACY-DRAFT.md` §3, Lesen-relevant rows only): a
device id in `localStorage`; and in the sign-in service, a daily-rotating pseudonymous hash of the learner's
network, used for sign-in and second-factor rate limits.

**Not stored in a Lesen-only attempt** (so out of scope for this review): recordings, consents, writing texts,
ratings, audio plays — those tables stay empty for a Lesen-only attempt.

**Explicitly excluded:**
- Recording consent, the recording retention/withdrawal design, and the Sprechen consent text
  (`CONSENT-PRIVACY-DRAFT.md` §1 facts about recording, §2 consent text, §4 withdrawal workflow) — all of that is
  for the full four-module portal and does not apply while Sprechen is unreachable.
- Any AI processing of exam data — there is none in the current code (no transcription, no AI pre-rating); the
  OpenAI sub-processor foreseen in `B1-SPEAKING-SPEC.md` §6 is not implemented.

## 2. Existing specifications, evidence and file references

- `LESEN-ONLY-REVIEW-EVIDENCE.md` (EX-01 section): the data-inventory table reproduced above, with its source
  commit and migration files.
- `EXTERNAL-REVIEW-OUTREACH.md` §2: reviewer profile (India DPDP Act 2023 experience, GDPR where applicable),
  scope, effort estimate, and the e-mail draft (context only; not sent by this pack).
- `CONSENT-PRIVACY-DRAFT.md`: a draft consent text and privacy notice, **written for the full portal**. Only its
  §3 account/technical-data/rights structure and general retention framing are relevant here; its recording-specific
  parts (§1, §2, §4, §4a) are out of scope (see §1).
- `B1-FINAL-DECISION-REGISTER.md` OD-21: recording retention is **LOCKED (mechanism)** — admin-configurable,
  conservative default 30 days after final rating. **This governs recordings only and does not cover attempt data**
  (Lesen answers, timings, results) — that is exactly what decision D7 (below) is for.
- `SPEC-AUDIT-2026-10-22.md` §1: "exam privacy notice link ... not linked: the site `privacy.html` does not cover
  the exam yet, so a link would mislead" — confirms the existing site notice is known not to cover this feature.
- `LESEN-ONLY-OWNER-DECISIONS.md` D7 (attempt-data retention) and D7b-style framing in
  `LESEN-ONLY-RELEASE-READINESS.md` §1, row O2 ("D7 attempt-data retention (and D7b account deletion), with EX-01").

## 3. Reviewer checklist (step-by-step)

1. Read the data-inventory table in §1 against the actual migration files and `exam-worker/src/` yourself — do not
   take the table as settled; confirm it against the current commit (§7).
2. Determine the applicable legal basis, primarily under **India's DPDP Act 2023** (most learners are in India) and
   under **GDPR** where it applies, for each category of data in §1.
3. Evaluate retention: today there is **no automatic deletion** of attempt data. Recommend a retention approach that
   feeds decision D7 (options the owner is choosing between: a fixed period after completion, "until account
   deletion," or leaving it to this review — see §6 for why that last option is circular).
4. Review the account/technical-data/rights sections of the draft notice (`CONSENT-PRIVACY-DRAFT.md` §3, Lesen-
   relevant rows only) and either confirm it or specify required changes.
5. Determine whether the existing site `privacy.html` needs amendment, or whether the exam area needs its own
   notice, and what should trigger linking it from the exam pages.
6. Confirm Cloudflare's role as a processor (D1 database, R2 storage, Workers) — DPA terms, data location, any
   transfer mechanism needed.
7. Assess whether the device id (`localStorage`) and the sign-in service's daily-rotating network hash need their
   own disclosure, separate from the main notice.
8. Note D7b: **klarweg-access has no account-deletion route today.** If "until account deletion" is the retention
   answer, say so explicitly as a dependency, since that route would need to be built.
9. Deliver a written clearance, or an itemised list of required changes.

## 4. Findings template

| Field | Description |
|---|---|
| `id` | a stable finding id, e.g. `EX01-001` |
| `data_element_or_flow` | e.g. "attempt_leases.device_id retention" |
| `issue` | e.g. "no retention period configured", "notice does not disclose X" |
| `applicable_law` | DPDP Act 2023 / GDPR / both |
| `urgency` | blocking release / must-fix before learner access / advisory |
| `recommended_remediation` | the specific change needed |
| `evidence` | code/schema/migration reference |
| `disposition` | cleared / change required / open pending owner decision |

## 5. Acceptance criteria (from the source documents)

- A **written clearance**, or a **list of required changes** (`LESEN-ONLY-RELEASE-READINESS.md` §2, row R4).
- The review's output feeds register row O2 (D7 retention, with EX-01) and O6 (the exam privacy notice text,
  owner + EX-01) in `LESEN-ONLY-RELEASE-READINESS.md` §1, and engineering's subsequent E3 (retention/deletion job)
  and E4 (linking the approved notice) work in §4 of that same document.

## 6. Known gaps and unresolved owner decisions

- **D7 (attempt-data retention) is open**, and the owner's listed options for D7 explicitly include "decide with
  EX-01." At the same time, the suggested appointment order
  (`REVIEW-APPOINTMENT-PLAN.md` §1, step 4) appoints EX-01 **after** D7 is answered, "so the reviewer sees the final
  data handling." **These two instructions are in tension**: if the owner answers D7 with "decide with EX-01," EX-01
  cannot be sequenced strictly after D7. This pack does not resolve that tension — it is surfaced here for the
  owner to notice and resolve, not silently picked one way or the other.
- **D7b (account deletion)**: no account-deletion route exists in klarweg-access today. If retention is tied to
  account deletion, that route is an additional, currently unbuilt dependency.
- **O6 (exam privacy notice text)** is unapproved; the controller's legal-entity details are still bracketed in
  `CONSENT-PRIVACY-DRAFT.md` §3.
- Whether the exam is open to under-18 learners, and if so what guardian-consent rule applies, is an open question
  in the full-portal draft notice (§5, question 7) that likely still applies here and has not been answered.
- No reviewer is appointed; C2 (written approval before paid work) applies.

## 7. What the reviewer must independently verify (not accept as an engineering claim)

- **The data-inventory table in §1**, against the actual migration files and worker source at the **current**
  commit — it was verified against `0c9563b`, and the repository has moved on since (the release-readiness document
  alone cites `4a354acb` as of 2026-10-23, and more has merged since). Re-derive the table yourself rather than
  trust that it is still exhaustive or accurate.
- **The legal-basis and retention questions** — these are explicitly left to this review by engineering
  ("[Legal basis per applicable law ... — EX-01 to decide]" in `CONSENT-PRIVACY-DRAFT.md` §3); nothing here is a
  settled claim to confirm, it is a gap to fill.
- **That there is genuinely no AI processing** of exam data in the current code — a code-level claim worth
  spot-checking rather than assuming, given the full-portal spec once foresaw an OpenAI sub-processor that was
  never implemented.
- **Whether the existing site privacy notice covers the exam's use of the account** (sign-in, session) at all — the
  source documents flag this as an open question for the reviewer, not as decided either way.
