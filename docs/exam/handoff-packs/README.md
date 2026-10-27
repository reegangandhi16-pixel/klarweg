# External-review handoff packs (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) so each of the five
> outstanding external reviews of the proposed Lesen-only release (`SELF-PRACTICE-SCOPE.md`) can be handed to an
> appointed reviewer with no further preparation. **No independent review has taken place. No reviewer has been
> appointed, no quote accepted, no fee committed, no finding recorded.** These packs authorise no outreach, no
> engagement and no payment — that stays with the owner (`REVIEW-APPOINTMENT-PLAN.md` §8, "C2"). Nothing here closes
> or relaxes any gate in `LESEN-ONLY-RELEASE-READINESS.md` or `LESEN-ONLY-BLOCKERS.md`.

This directory is **not** published: nothing under `docs/` is in `.github/pages-allowlist.txt`, and these packs add
no new entry to it. They stay in the repository, for internal and reviewer use only.

## What each pack is, and is not

Each pack is a **self-contained handoff document** for one external review: scope, pointers to the existing
specifications and evidence, a step-by-step checklist, a findings template, the acceptance criteria that already
exist in the source documents, the known gaps, and what the reviewer must verify independently rather than take on
engineering's word. A pack **links to** the authoritative source documents instead of restating them; where it
quotes a fact (a file, a commit, a count), that fact was true when the pack was written and the reviewer should
re-confirm it against the current repository, not treat it as fixed.

No pack invents a reviewer identity, a quotation, an approval, or a finding. Every "not yet" below is accurate as of
this pack's preparation date and will need re-checking before use.

## The five packs and their release gate

`LESEN-ONLY-RELEASE-READINESS.md` §2 lists five external reviews (R1–R5); `LESEN-ONLY-BLOCKERS.md` §B lists the same
reviews in its own priority order. Every review is also a row in the signed decision register
(`B1-FINAL-DECISION-REGISTER.md` §C, rows EX-01/EX-03/EX-04/EX-05/EX-07).

| Pack | Review | Release-readiness row | Blocks |
|---|---|---|---|
| [`EX-03-CONTENT-REVIEW-HANDOFF-PACK.md`](./EX-03-CONTENT-REVIEW-HANDOFF-PACK.md) | Independent content review of the Lesen items of forms **P3, P8, P13** | R1 | Every learner form; the release tool refuses without three approved records per form |
| [`EX-05-SECURITY-HANDOFF-PACK.md`](./EX-05-SECURITY-HANDOFF-PACK.md) | Security review / penetration test (non-production only) | R2 | Release (0 high/critical findings, plus a re-test) |
| [`EX-04-ACCESSIBILITY-HANDOFF-PACK.md`](./EX-04-ACCESSIBILITY-HANDOFF-PACK.md) | WCAG 2.2 AA accessibility review of the Lesen-only screens | R3 | Release (signed report, plus a re-test) |
| [`EX-01-PRIVACY-HANDOFF-PACK.md`](./EX-01-PRIVACY-HANDOFF-PACK.md) | Privacy review of account, answer, timing and audit-log data (no recordings) | R4 | Release (written clearance or a list of required changes) |
| [`EX-07-TRADEMARK-HANDOFF-PACK.md`](./EX-07-TRADEMARK-HANDOFF-PACK.md) | Trademark review of "Goethe" references | R5 | Release (written opinion and a wording list) |

None of R1–R5 has started. `REVIEW-APPOINTMENT-PLAN.md` §1 sets a suggested appointment order (EX-03 first, since it
is the longest path; EX-05 and EX-04 in parallel; EX-01 after decision D7; EX-07 at any time) and §10 records what
Claude may and may not do as organiser. These packs do not change that order or those limits.

## Owner decisions these packs do not make

Preparing a pack does not answer `LESEN-ONLY-OWNER-DECISIONS.md` D1–D9. In particular:
- **D3 (revised 2026-10-21):** Claude organises the reviews; it researches candidates, drafts invitations, and runs
  `review-status.mjs --check` on returned records. It does not appoint anyone, accept a quote, or sign anything.
- **C2:** no engagement starts without the owner's written approval of that specific engagement
  (`REVIEW-APPOINTMENT-PLAN.md` §8).
- **EX-05 additionally needs** the owner's signed test authorisation (`REVIEW-APPOINTMENT-PLAN.md` §9, drafted,
  unsigned).
- **EX-01 is ordered after D7** (attempt-data retention) in the suggested appointment order, but D7's own options
  include "decide with EX-01" — see the EX-01 pack's "known gaps" section for this sequencing tension.

## Validation

A lightweight structural check (`exam-content/tools/check-review-packs.mjs`, tested by
`exam-content/test/review-packs.test.mjs`) runs over every file in this directory and fails if a pack is missing a
required section or drops the DRAFT status banner. It checks structure and presence, not content — it cannot verify
that a pack's facts are current.
