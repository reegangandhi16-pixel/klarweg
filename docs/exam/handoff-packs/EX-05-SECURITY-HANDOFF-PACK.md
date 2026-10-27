# EX-05 handoff pack: security review / penetration test (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) as organiser
> (`LESEN-ONLY-OWNER-DECISIONS.md` D3 revised; `REVIEW-APPOINTMENT-PLAN.md` §10). **No tester has been appointed, no
> quote accepted, no authorisation signed, and no test has started.** This pack must **not** be used to begin any
> testing. Testing may begin only after the owner signs the authorisation in §6 and names the tester. See the
> handoff-packs [`README.md`](./README.md) for how this pack relates to the other four and to the release gates.

## 1. Scope and exclusions

**In scope, once authorised:** the learner API through the **klarweg-access proxy**, tested **only** against the
isolated **non-production environment** (`NONPROD-SETUP.md`) — never production, which does not exist today (every
exam flag is off, no `EXAM` binding, no Pages allowlist entry).

- Attempt ownership (IDOR on `/exam/v1/attempts/*`), lease replay, forged answer sequence numbers, media-token
  tampering and expiry, CSRF on the sign-in Worker, and leakage of answer keys, explanations or scoring scripts
  through packages, API responses or logs before submission.
- The **Lesen-only switches**, specific to this release scope (`LESEN-ONLY-REVIEW-EVIDENCE.md` EX-05 section):
  - creating a full or other-module attempt while `EXAM_MODULE_ONLY=lesen`;
  - mixing `mode`/`module` values in the create request;
  - starting another module inside an attempt opened **before** the switch was applied;
  - malformed `EXAM_MODULE_ONLY` values (every mode should become unavailable — fail closed);
  - `EXAM_RELEASE_FORMS` missing, empty, malformed, or listing the system-test fixture S0 / an unknown / a retired
    form (expected: `503 release_unconfigured` or `release_misconfigured`, no attempt created, no substitute form);
  - an open attempt whose form has since left the release list (expected: `403 form_not_in_release` on start and on
    package fetch).
- Staff TOTP second factor: replay, rate limits, lockout, recovery codes, and `X-KW-MFA-At` header injection through
  the proxy.
- The `/auth/cookie-probe` path, the Content-Security-Policy of `exam/index.html` and `exam/rater.html`.
- Recording upload limits (512 KiB proxy cap, chunk sizes, per-attempt rate limits) — **listed for completeness
  from the full-portal brief** (`EXTERNAL-REVIEW-BRIEFS.md` EX-05); in the Lesen-only reviewed configuration these
  routes return `404 module_not_found` because no attempt ever contains a Sprechen module. Confirm this is still
  true rather than skip it — see §7.

**Explicitly excluded:**
- Production (does not exist to test).
- Cloudflare's own platform, payment flows, and the non-exam chapter/site pages.
- Denial-of-service or load testing, and social engineering — forbidden by the authorisation in §6.
- Any data beyond the provided synthetic test accounts; no real learner data exists.

## 2. Existing specifications, evidence and file references

- `EXTERNAL-REVIEW-BRIEFS.md` (EX-05 section): the general checklist (register MOCK M-23), what is already covered
  by automated tests, and the explicit out-of-scope list.
- `LESEN-ONLY-REVIEW-EVIDENCE.md` (EX-05 section): the Lesen-only-specific probes quoted in §1 above, and the
  command engineering uses to put non-production into the reviewed configuration
  (`wrangler deploy --config wrangler.nonprod.toml --var EXAM_MODULE_ONLY:lesen --var EXAM_RELEASE_FORMS:<ids>`),
  restored to the default afterwards.
- `NONPROD-SETUP.md`: the environment's isolation guarantees (§ intro), the acceptance checklist A1–A11 (§4), and
  the existing acceptance record — read this before testing, since several of engineering's own non-prod checks
  (A2 Safari, A3 real microphone, A6 real sleep) are marked "manual, not run" and A10 is "not run".
- `REVIEW-APPOINTMENT-PLAN.md` §3.4 (effort estimate, contract points) and §9 (the unsigned authorisation draft,
  reproduced in §6 below).
- `RUNBOOK-EXAM-INFRA.md` §2: the kill switch (`EXAM_ROUTES` or `EXAM_ENABLED` off), useful context for what
  "stop testing" looks like operationally.
- Already covered by automated tests, **not a substitute** for this review: `security.test`, `access-matrix.test`
  (all 20 attempt routes; other-learner and other-rater access → 404), `mfa.test`, `cookie-probe.test`, the CSP
  test, `module-only.test` (6 tests), `release-forms.test` (10 tests), and 16 browser CI jobs (8 scenarios, each
  run directly and once through the in-process Access proxy — not real Cloudflare).

## 3. Reviewer checklist (step-by-step)

1. Confirm the signed authorisation (§6) names you, the correct non-production hosts, and a current time window.
   Do not begin before this exists and is signed.
2. Confirm with the organiser that non-production has been (re)deployed in the **reviewed configuration**
   (`EXAM_MODULE_ONLY=lesen`, `EXAM_RELEASE_FORMS=<candidate ids>`) and, separately, that the build being tested is
   the current `main` — see §7 on why this must not be assumed.
3. Receive the synthetic test accounts the organiser creates on your behalf: a learner with exam access granted, a
   rater with TOTP enrolled, and a no-role account. Never a real learner's account.
4. Work through the general checklist (MOCK M-23, `EXTERNAL-REVIEW-BRIEFS.md` EX-05): IDOR, lease replay, forged
   sequence numbers, media-token tampering, CSRF, key/explanation/script leakage.
5. Work through the Lesen-only-specific probes in §1: mode/module mixing, malformed flag values, the
   already-open-attempt edge case, and the module-routes-should-404 claim.
6. Test the TOTP/2FA surface: replay, rate limits, lockout, recovery codes, header injection.
7. Test the cookie probe and the CSP of both learner-facing pages.
8. Record every finding with the template in §4, each with a severity.
9. Deliver a report. **Pass = 0 high/critical findings.**
10. After engineering's fixes, perform a re-test of exactly the fixed findings; record the re-test result per
    finding.
11. At the end of the authorised window, delete the synthetic test accounts' credentials and any copied data (§6).

## 4. Findings template

| Field | Description |
|---|---|
| `id` | a stable finding id, e.g. `EX05-001` |
| `target` | route, flow, or component (e.g. `POST /exam/v1/attempts/:id/answers`) |
| `category` | IDOR / lease-replay / sequence-forgery / media-token / CSRF / key-leakage / 2FA / cookie-probe / CSP / other |
| `severity` | critical / high / medium / low / informational |
| `evidence` | request/response captures, reproduction steps, screenshots |
| `affected_code` | file/function if known |
| `recommended_disposition` | fix before release / fix before re-test / accept risk (owner decision) / informational only |
| `re_test_result` | pass / fail / not yet re-tested |

This review, unlike EX-03 (which deliberately has no severity scale, register EX-03/O8), is expected to use a
standard severity scale — the acceptance bar in §5 is phrased directly in those terms ("0 high/critical").

## 5. Acceptance criteria (from the source documents)

- A report with **0 high or critical findings**, plus a re-test confirming the fixed findings
  (`LESEN-ONLY-RELEASE-READINESS.md` §2, row R2; register MOCK M-23).
- The re-test is of the **fixed rows only** — not a full re-run — per the effort note in
  `REVIEW-APPOINTMENT-PLAN.md` §3.4.
- Findings are reported **privately** to the organiser's named contact only (§6) — never disclosed to third
  parties.

## 6. EX-05 test authorisation (owner to complete and sign — reproduced from `REVIEW-APPOINTMENT-PLAN.md` §9)

> **Authorisation for security testing (non-production only).**
> Klarweg ([legal entity, address]) authorises [tester name / company] to perform security testing between [start
> date and time] and [end date and time] ([time zone]) on the following systems **only**: the Klarweg
> non-production exam environment (non-production sign-in Worker and exam Worker, host names given separately and
> privately). Production systems, the main website, payment systems and third-party platforms are out of scope.
> - **Not permitted:** denial-of-service or load testing, social engineering, physical access, testing outside the
>   window, and accessing or keeping data beyond the provided synthetic test accounts.
> - **Findings:** reported privately to [contact] only, and not disclosed to third parties.
> - **Afterwards:** the tester deletes the test credentials and any copied data.
> - **Stopping:** this authorisation can be withdrawn at any time in writing.
>
> [Place, date, name, signature of an authorised Klarweg representative]

Engineering gives the tester host names and synthetic accounts only after this is signed, and only for the stated
window.

## 7. Known gaps and unresolved owner decisions

- **No tester is appointed.** C2 (quotes first, written approval before any paid work) applies; nobody may begin.
- **§6 is unsigned.** No testing — not even a scoping call with system access — may start without it.
- **Non-production's last full acceptance run was `bebfacb`, 2026-10-20**, before pull requests #197–#222
  (`SPEC-AUDIT-2026-10-22.md` §3: "non-production re-verification of the current build ... not done"). Deploying
  the current build to non-production for this test needs the owner's authorisation (decision O8 in
  `LESEN-ONLY-RELEASE-READINESS.md` §1), which is separate from, and a precondition of, the EX-05 authorisation
  above.
- Several of non-production's own acceptance checks are **manual and not yet run on real devices**: A2 (Safari with
  real privacy settings), A3 (a real microphone — not relevant to Lesen-only, but A3's other parts are), A6 (a real
  laptop sleep), and A10 (the non-prod D1 validation runbook, gated on draft PRs #71/#73's own approval).
- D8 (OD-20, the same-site production domain) is unrelated to non-production testing but is a separate,
  still-open release gate the tester should not assume is resolved if they infer production topology from the
  non-prod setup.

## 8. What the reviewer must independently verify (not accept as an engineering claim)

- **That the automated test coverage listed in §2 is not a substitute.** The briefs say so explicitly; the tester
  should run the IDOR/lease/CSRF/leakage checks themselves against the live non-production deployment, not accept
  that `security.test` and `access-matrix.test` already cover it.
- **The actual runtime values of `EXAM_MODULE_ONLY` and `EXAM_RELEASE_FORMS`** on the deployed non-production
  Worker, by observing behaviour (e.g. attempting a full attempt, attempting an unlisted form), rather than trusting
  engineering's statement of what was deployed.
- **That the build under test is current** — ask for (and ideally independently confirm) the exact commit non-prod
  was deployed from, given the staleness noted in §7; a test against a build from before #197–#222 would be testing
  code the release will not actually ship.
- **The scope and dates on the signed authorisation (§6) themselves**, before starting — not a verbal or
  paraphrased description of it.
- **Whether the Hören/Schreiben/Sprechen routes genuinely 404 for a Lesen-only attempt**, as `module-only.test`
  claims — this is exactly the kind of access-control claim a penetration test exists to verify independently, not
  to accept because a unit test says so.
