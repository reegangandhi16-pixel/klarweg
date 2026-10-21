# Lesen-only release: every remaining blocker, in order

> **Status:** 2026-10-20, verified on main `45d3423` (PR #157), updated by PR #159; re-verified 2026-10-21 on main
> `cf73039` (exam suite 523 pass / 0 fail / 3 opt-in skips; release tool still refuses P3/P8/P13). Nothing
> here is satisfied unless it says so with evidence. The public learner portal stays unavailable until every row in
> A–D is closed. Production today: exam Worker flags all `off`; no `EXAM` binding or `EXAM_ROUTES` in klarweg-access;
> no `exam/` in the Pages allowlist.

Order = what unblocks the most, soonest. "Who" is the only party that can close the row.

## A. Owner decisions (one reply: `LESEN-ONLY-OWNER-DECISIONS.md`, reply template)
| Prio | Item | Who | Blocks |
|---|---|---|---|
| 1 | ~~D1 adopt Lesen-only scope · D2 candidate forms~~ **answered 2026-10-20** (yes, subject to all gates; P3+P8+P13) | Owner | — |
| 2 | D3/D6: **coordinator withdrawn 2026-10-21**; Claude organises within `REVIEW-APPOINTMENT-PLAN.md` §10. C2 unchanged: quotes first, written approval per engagement (§8). **Open: the owner approves each quote in writing** | Owner | Every external review (§B) |
| 3 | D7 attempt-data retention | Owner (with EX-01) | EX-01 sign-off; the deletion job (§C) |
| 4 | D4 OD-08 wording · D5 OD-41 accommodations | Owner | Release decision |
| 5 | D8 OD-20 same-site domain | Owner | Pilot and launch (register §G.1/§G.2) |

## B. Independent external reviews (drafts: `EXTERNAL-REVIEW-OUTREACH.md`)
Status 2026-10-21: non-binding quote requests sent for EX-03 (one A/B candidate and two slot C candidates), EX-04, EX-05
(quote only; no testing authorised), EX-07 (India only) and EX-01 (scope advice only). Candidates and replies are tracked
privately, never here. **Nobody is appointed, no quote is accepted and no review has started.** EX-03 slot A/B needs at
least one more candidate from a different organisation.

| Prio | Review | Deliverable that closes it | Blocks |
|---|---|---|---|
| 1 | EX-03 content: three people (A, B teachers; C native linguist), 90 Lesen items of P3/P8/P13 | Three valid records per form with `lesen: approved` (`review-status.mjs`) | Every learner form. The release tool refuses without these records |
| 2 | EX-05 security (non-production) | Report with 0 high/critical, plus a re-test | Release |
| 2 | EX-04 accessibility (Lesen screens) | Signed WCAG 2.2 AA report, plus a re-test | Release |
| 3 | EX-01 privacy (no recordings) | Written clearance or a list of changes | Release |
| 4 | EX-07 trademark | Written opinion and wording list | Release (and site wording) |

## C. Engineering (all independent work is done; these start only when their input exists)
| Item | Starts when | Note |
|---|---|---|
| Fix findings from EX-03/04/05/01/07 | A finding is delivered | Each fix goes through tests and CI; a revised EX-03 item is reviewed again from scratch (O6) |
| Attempt-data retention job | D7 is answered | Off until configured, like PR #76 for recordings |
| Production learner release build | EX-03 records say `approved` | `release-candidate.mjs --approved <records>`, never `--internal-candidate`; then add its `released_forms_entries` to `exam-content/released-forms.json` (PR) |
| Non-production content refresh | **Not done, by design** (`NONPROD-SETUP.md` §4 N1) | Verified read-only: exactly the five PR #152 texts differ, and all keys are identical. A refresh would rewrite the history of 7 attempts and 6 results (global item ids), so it is not performed. EX-04 uses the local demo; EX-05 tests behaviour |
| Content revision contract | **Done (PR #159)**, `CONTENT-REVISIONS.md` | `released-forms.json` lock + `revise-form.mjs` (new form id and new item ids) + validator `revision_ids` + insert-only registry and preflight (#157). Proven end to end: a revision-1 attempt stays byte-identical next to revision 2, and bad imports are atomic. Conditional leftover: adding a revision of a *generated* practice form to the library registry, needed only when a released form must change |

Done and evidenced (not blockers):
- the learner registry is insert-only, and the read-only `registry-preflight.mjs` (PR #157) checks an import against the target database: run against non-production it reports P3/P8/P13 as conflicts, P14 as identical;
- single-module Lesen mode, the release set and system-test exclusion (#145, #150; non-prod M1/M2);
- the release-candidate tool and the internal review of the 90 items (#152);
- the self-service review form, record check and summary (#154);
- the review packet with current fingerprints.

## D. Production authorisation (owner only, after A–C)
| Step | Reference |
|---|---|
| Create the production D1 + R2; set `EXAM_PROXY_SECRET`, `EXAM_MEDIA_SECRET`, `TOTP_ENC_KEY` (offline copy first); Access migration 011 | `RUNBOOK-EXAM-INFRA.md` §3, `RUNBOOK-RATER-2FA.md` |
| Apply exam migrations 0001–0003 **before** deploying the Worker | RUNBOOK §3 step 3 |
| Upload the learner release built from the approved records; deploy with every flag off | `SELF-PRACTICE-SCOPE.md` §4 |
| Switch on: `EXAM_ENABLED`, `EXAM_SYNTHETIC_FORMS`, `EXAM_MODULE_ONLY` + `EXAM_RELEASE_FORMS` (from `worker-settings.env`), `EXAM_ROUTES` + binding, `exam/` allowlist | `SELF-PRACTICE-SCOPE.md` §4; kill switch RUNBOOK §2 |

## Smallest set of owner actions to get moving
1. ~~Send the D1–D9 reply~~: D1, D2, D3 and D6 answered on 2026-10-20.
2. ~~Answer C1 and C2~~ (done). ~~Publish the coordinator post~~ (withdrawn 2026-10-21; quote requests sent by Claude).
3. Approve each quote in writing (§8). EX-01 waits for D7; EX-05 also needs the signed authorisation (§9).
4. Later, after the deliverables: D9.
