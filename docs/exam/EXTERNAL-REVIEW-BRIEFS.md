# External review briefs — ready to send (exam portal)

**Purpose:** one page per external review, so the owner can commission each one without further preparation. Nothing
here is a result. Each review stays **open** until the reviewer's own signed deliverable exists (register §C).

**Ready-to-send outreach (role requirements, independence rules, e-mail drafts; nothing sent):** `EXTERNAL-REVIEW-OUTREACH.md`.

**Lesen-only first release (proposal, not chosen by the owner):** if the owner adopts it, use
`LESEN-ONLY-REVIEW-EVIDENCE.md` with these briefs. It narrows EX-03, EX-04, EX-01 and EX-05 to what that release uses
and lists the existing evidence.

Common facts for every reviewer:
- **What it is:** a Goethe-style B1 *practice* simulation by Klarweg. It is not an official exam, and every result says so
  (OD-45).
- **Content:** 15 synthetic practice forms P1–P15; listening audio is currently **test tones**, real voices are pending
  (OD-14).
- **Code:** this repository; the exam Worker (`exam-worker/`), the sign-in and proxy Worker (`access/worker/`), the learner
  and rater pages (`exam/`).
- **Environment:**
  - local demo: `npm run exam:demo` (add `--proxy` for the real request path, `--mfa` for rater 2FA);
  - the isolated non-production environment (`NONPROD-SETUP.md`), provisioned 2026-10-19 with the owner's authorization.
  - Nothing is deployed.

---

## EX-03 — Native-speaker content review (B1 teachers A and B, native linguist C)
- **Scope:** every scored item, explanation, key and productive task of P1–P15. Slot C also covers originality and item
  accessibility.
- **Material:** the private packet `EX-03-…` (HTML sheets with keys, JSON records, `README-REVIEWERS.md`,
  `AUTOMATED-FLAGS.md`). It contains answer keys, so share it only directly with named reviewers.
- **Rules:** register §C.1 (O1–O10). Three different people; no tie-break; no carry-forward; no use of the commercial
  reference book.
- **Deliverable:** one filled JSON record per reviewer and form.
- **Self-service tools for reviewers and the organiser** (Lesen-only packet `EX-03-LESEN-RC-2026-10-20`):
  - `Pn-review-form-lesen.html`: an offline fillable form; it keeps progress in the browser, shows what is missing and
    downloads the finished record;
  - `node exam-content/tools/review-status.mjs --check <record.json> --module lesen`: plain-language check before
    returning ("must fix" / "still empty");
  - `node exam-content/tools/review-status.mjs <returned dir> --module lesen --out <dir>`: status per form and module,
    plus a plain summary of what is approved and what is outstanding (`ex03-summary.txt`).
- **Effort:** about 2–3 h per form per reviewer. Suggested first batch: P3, P8, P13.
- **Already done internally (not a substitute):**
  - validator, originality and key-balance checks;
  - heuristic and adversarial key audits;
  - two ambiguous items fixed (PR #111).

## EX-04 — Accessibility audit (WCAG 2.2 AA)
- **Scope:** learner pages (all four modules, review step, results, own recordings, error and cookie screens) and rater
  pages (rating forms, 2FA screens), desktop and phone, NVDA + Firefox, VoiceOver macOS + iOS, keyboard only, 200 % zoom /
  320 px.
- **Material:** the private checklist `EX-04-manual-accessibility-checklist.md` (18 rows, setup steps); the local demo is
  enough.
- **Already done internally:** an automated audit (accessible names, ids, lang, one h1, visible focus) on the learner
  screens and the 2FA screens: 0 findings. It covers only these checks.
- **Deliverable:** signed report with findings and severities; re-test of fixed rows.

## EX-05 — Security review / penetration test
- **Target:** the non-production environment (`NONPROD-SETUP.md`). Do not test production; nothing exam-related runs
  there.
- **Accounts:** the owner creates three test accounts (learner with exam access, rater, no role) and gives the tester the
  rater's TOTP enrolment.
- **Checklist (MOCK M-23)** — pass = 0 high/critical findings:
  - IDOR on attempts;
  - replayed or stolen leases;
  - forged answer sequence numbers;
  - media-token tampering and expiry;
  - CSRF on the sign-in Worker;
  - answer keys, explanations or scripts leaking through packages, API or logs.
- **Also in scope:**
  - TOTP: replay, rate limits, lockout, recovery codes, `X-KW-MFA-At` header injection through the proxy;
  - the cookie probe;
  - the Content-Security-Policy of `exam/index.html` and `exam/rater.html`;
  - recording upload limits (512 KiB proxy cap, chunk sizes, per-attempt rate limits).
- **Already covered by automated tests (not a substitute):**
  - `security.test` and `access-matrix.test` (all 20 attempt routes, other learner and rater → 404);
  - `mfa.test`, `cookie-probe.test`, CSP test;
  - 16 browser jobs in CI: all 8 scenarios run once directly and once through the real klarweg-access proxy path
    (in-process, not real Cloudflare).
- **Out of scope:** Cloudflare's own platform; payment flows; chapter (non-exam) pages.
- **Deliverable:** report with severity per finding; re-test after fixes.

## EX-01 — Privacy review
- **Material:** `CONSENT-PRIVACY-DRAFT.md`. It covers:
  - facts verified in code;
  - draft consent text (DE/EN) and privacy notice;
  - withdrawal workflow and its technical design;
  - the questions for the reviewer.
- **Decisions the review must enable:** P-19 (withdrawal), P-20 (retention; recommendation: governed by OD-21, 30 days
  after the final rating), the consent text version, legal bases and the controller's details.
- **Deliverable:** written clearance or required changes. Engineering then ships the approved text (new consent version),
  merges retention (PR #76) and builds withdrawal.

## EX-07 — Trademark review of "Goethe" references
- **Exam portal:** "Goethe" appears only in the mandatory result disclaimer "Klarweg-Simulation – kein offizielles Ergebnis
  des Goethe-Instituts" (`exam/js/render.js`, OD-45).
- **Main Klarweg site (outside the exam portal, please include):**
  - 57 HTML pages (58 at main `5f06359`) mention "Goethe", most often "Goethe Mini" (≈ 108), "Goethe-Zertifikat" (≈ 78), "Goethe-style" (≈ 63),
    "Goethe Exam" (≈ 42), "Goethe-aligned" (≈ 32);
  - count: `git grep -c "Goethe" -- '*.html'`.
- **Questions:**
  1. Is nominative use with the disclaimer sufficient?
  2. Are product names such as "Goethe Mini" acceptable?
  3. What wording do you recommend for marketing ("prepares for", "in the style of")?
  4. Should a disclaimer appear on every page?
- **Deliverable:** written opinion and a list of required wording changes.
- **Engineering:** the exam-portal changes. Site content changes need the owner's go-ahead, because the chapter/site work
  is a separate scope.

## EX-02 — Rater recruitment and certification
- **Need:** ≥ 2 qualified B1 raters plus a lead (register EX-02; calibration plan §5).
- **Practice environment:** the local demo with `--mfa` shows the full rater workflow (2FA, rating forms, recordings,
  rounds).
- **Deliverable:** certification record per rater (calibration against anchored samples). Only then grant the role
  (`RUNBOOK-EXAM-INFRA.md` §3a).

## EX-06 / OD-14 — Audio licence and quality (paused)
- **Needed:** the vendor's written licence reply (see `OD-14-AUDIO-VENDOR-RESEARCH.md` §8, 7 points), the 24-bit
  decision, the voice cast, and a 10-native-rater MOS review (≥ 4.0) before the library is produced.

## EX-08 — Accommodation evidence (OD-41)
- **Question:** how medical evidence for extra time is requested, stored and deleted.
- **Engineering:** accommodations are admin-granted only (`accommodations` table). No evidence is stored by the portal
  today.
