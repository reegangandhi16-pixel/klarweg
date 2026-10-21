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

## Reply template: answer everything in one message
Copy the block, replace each `[…]` with your choice, and send it back. Anything left as `[…]` stays undecided. Engineering
records only what is written, quotes it in the relevant document, and does nothing that a blank item would require.

```
Lesen-only decisions — [date]
D1 Lesen-only as first learner release: [yes / no]
D2 Candidate forms for review: [P3+P8+P13 / other: …]
D3 EX-03 organiser (sends packet, receives records): [name or role] ; engineering runs the record checks: [yes / no]
D4 OD-08 instruction wording: [paraphrase is enough for this release / legal clearance first]
D5 OD-41 accommodations at first release: [none at first / extra time on documented request (admin-granted, 25–100 %) / other: …]
D6 External reviews to commission: EX-01 [who/when] · EX-04 [who/when] · EX-05 [who/when] · EX-07 [who/when]
D7 Attempt-data retention: [delete N months after completion: N = … / keep until account deletion / decide with EX-01]
D8 Production same-site domain for site + API: [domain / later]
D9 Production authorisation: [not yet / yes, after all gates]
```

| # | Safe answers (none is a recommendation to skip a gate) | Consequence of each answer |
|---|---|---|
| D1 | yes / no | **yes:** EX-03 can start on Lesen only. **no:** nothing changes; the full four-module gates stay on the critical path |
| D2 | prepared set / other | Prepared set: the packet is ready now. Another set: engineering regenerates the packet; no review effort is lost, because none has started |
| D3 | a named person | Until named, the packet cannot be sent. "Engineering runs the record checks" means the organiser only forwards the returned files |
| D4 | paraphrase / clearance | Paraphrase: no new dependency. Clearance: the release waits for counsel. Neither changes code |
| D5 | none at first / extra time on request / other | **None at first:** no evidence process is needed (EX-08), but learners who need extra time cannot use the timed module fairly; the accessibility reviewer may flag this. **Extra time on request:** an admin grants it per learner and the EX-08 evidence process applies. The engine supports both |
| D6 | names + timing per review | Each brief and e-mail draft is ready (`EXTERNAL-REVIEW-OUTREACH.md`). Fees and contracts are the owner's decisions |
| D7 | a period / until account deletion / with EX-01 | **A period:** engineering builds the deletion job (off until configured, tested). **Until account deletion:** note that klarweg-access has **no account-deletion route today**, so this option also needs an account-deletion process (defined with EX-01), which engineering would then build to include exam data. **With EX-01:** nothing is built until the reviewer's opinion |
| D8 | a domain / later | **Later:** no learner launch, because the register requires the same-site domain before the pilot and launch (§G.1, §G.2) |
| D9 | not yet / yes after gates | **Not yet:** nothing in production changes. **Yes:** engineering follows `RUNBOOK-EXAM-INFRA.md` §3 step by step, only after D1–D8 and all external deliverables exist |

## Answers received 2026-10-20 (quoted as given; nothing beyond them is recorded)
| # | Owner's answer | What it means in practice | Still open |
|---|---|---|---|
| D1 | "Yes, subject to all required approvals and release gates." | Lesen-only is the first-release target. No gate is relaxed | — |
| D2 | "P3 + P8 + P13." | The prepared packet `EX-03-LESEN-RC-2026-10-20` is the review material. The forms remain candidates until EX-03 approves them | — |
| D3 | "I want an independent coordinator to manage reviewer communications and collect the completed records. The coordinator has not yet been appointed. Engineering should run the record checks: Yes." | An independent coordinator, not engineering and not the owner, handles reviewer contact and records. Engineering runs `review-status.mjs --check` and the status on the forwarded files. **Superseded on 2026-10-21 (below)** | ~~**C1:** who will find or approach the coordinator~~ (C1 superseded 2026-10-21) |
| D6 | "EX-01 Privacy, EX-04 Accessibility, EX-05 Security and EX-07 Trademark reviewers are not yet appointed. Prepare a practical appointment plan …" | The plan is in `REVIEW-APPOINTMENT-PLAN.md`. Nobody is contacted, no funds are committed, no review counts as done | **C2:** fee approach (quotes first, or caps) |

Not yet answered: D4, D5, D7, D8, D9.

## Change received 2026-10-21: D3 revised (supersedes the independent coordinator)
The 2026-10-20 answer to D3 and the owner's answer to C1 (`REVIEW-APPOINTMENT-PLAN.md` §4) are kept above for the
record. They no longer apply.

| # | Owner's answer | What it means in practice |
|---|---|---|
| D3 (revised) | "I do not want to recruit or pay a separate independent coordinator. I want Claude to handle as much of the remaining work itself as its actual tools and permissions allow, with minimal involvement from me." Also: "Remove the independent coordinator as a required appointment." | Engineering (Claude, an AI assistant working for the owner) is the EX-03 organiser and handles the administration of every external review. The coordinator recruitment post and invitation (plan §5, §6) are withdrawn and are not to be published. What Claude does and may not do is in `REVIEW-APPOINTMENT-PLAN.md` §10 |

**Unchanged by this change:**
- C2: quotes first. No engagement, fee, contract or paid work exists without the owner's written approval of that
  specific engagement.
- Every independent human review stays required: EX-03 (three different people), EX-01, EX-04, EX-05 and EX-07. Claude's
  own analysis is never a review and never counts towards any of them.
- EX-05 testing needs the owner's signed written authorisation naming the tester, the non-production targets and a
  fixed time window (plan §9).
- D4, D5, D7, D8 and D9 stay open. Production stays disabled.
