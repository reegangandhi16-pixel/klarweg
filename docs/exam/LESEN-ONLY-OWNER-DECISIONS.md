# Lesen-only self-practice release: the owner's decisions, on one page

> **Status:** 2026-10-20, prepared by engineering. **None of these decisions has been made.** Engineering cannot make
> them, and nothing below is recorded as approved until the owner answers in writing. This sheet does not change the
> signed register (v1.5); a decision that the register governs is recorded there by the owner's own register revision.

Everything engineering can do alone is done (`SELF-PRACTICE-SCOPE.md`, `PRACTICE-LAUNCH-CHECKLIST.md` §0 A2). What is
left is listed here in the order it unblocks work. Each item is a yes/no or a short choice that can be answered in one
line, for example by replying "D1 yes, D2 P3+P8+P13, …".

| # | Decision | Options | What happens next |
|---|---|---|---|
| **D1** | Adopt the Lesen-only self-practice scope as the first learner release | yes / no | **Yes:** engineering treats Lesen-only as the release target and the review packet can go out. **No:** the full four-module gates stay on the critical path |
| **D2** | Which forms enter the review (candidates) | P3+P8+P13 (prepared) / another set | Engineering regenerates the packet for another set within minutes. A form reaches learners only after its EX-03 Lesen approval |
| **D3** | Who organises EX-03 and recruits reviewers A, B and C (two B1 teachers, one native linguist; three different people) | a named person (the owner or a delegate) | That person sends the packet `EX-03-LESEN-RC-2026-10-20`, collects the records and runs the status tool. Effort per reviewer: about 2–4 h for three forms. Any fee is the owner's business decision |
| **D4** | OD-08: is the Klarweg paraphrase of instructions enough for this release, or is legal clearance needed first? | paraphrase is enough / clearance first | No engineering change either way. "Clearance first" adds an external dependency |
| **D5** | OD-41 accommodations for the first release (F4/P-18: needed before learner access) | e.g. none at first / extra time on documented request (admin-granted, 25–100 %) / other | The engine already supports admin-granted extra time. The evidence process (EX-08) applies only if accommodations are offered |
| **D6** | Commission the remaining external reviews (scoped to Lesen-only in `LESEN-ONLY-REVIEW-EVIDENCE.md`) | EX-01 privacy, EX-04 accessibility, EX-05 security, EX-07 trademark: who and when | Each brief is ready to send (`EXTERNAL-REVIEW-BRIEFS.md`). Engineering fixes the findings |
| **D7** | Retention period for attempt data (Lesen-only stores answers, timings and results; nothing is deleted automatically today) | a period (e.g. delete attempts N months after completion) / keep until account deletion / decide with EX-01 | Engineering implements the chosen period with tests |
| **D8** | OD-20 production same-site domain for site + API | which domain / subdomain | Until then, browsers that block third-party cookies show "Cookies blockiert". The register requires it before the pilot and launch (§G.1, §G.2) |
| **D9** | Production authorisation (owner only; `RUNBOOK-EXAM-INFRA.md` §3) | yes, after D1–D8 and every external gate | Creates the production D1 and R2, sets the secrets, applies migrations 0001–0003, deploys with all flags off, then switches on per `SELF-PRACTICE-SCOPE.md` §4 |

**Not decisions, and nobody can grant them by choice:**
- EX-03 approval comes only from the three reviewers' records. The release tool refuses every form without it.
- External review findings come only from the reviewers.
- A form approved for Lesen is not approved for any other module.

**Not needed for Lesen-only (still open for the full portal, unchanged):**
- OD-07/OD-30 (Schreiben scoring) and the register v1.6 signature that records them;
- EX-02 raters and OD-14/EX-06 audio;
- recording consent and retention (F4/P-19, P-20, P-25, PR #76);
- the Sprechen partner-talk length.

They matter only when Schreiben, Sprechen or Hören are added. Staff routes stay protected by the second factor, whose
production key is part of D9.
