# B1 Final Decision Register (Pre-Implementation Freeze)

> **Status:** decision register **v1.2**, 2026-10-07 — EX-03 reviewer-panel decisions (§C.1) and §I sign-off; changes listed in §J. v1.1, 2026-10-07: owner decision alignment (OD-32, OD-14, OD-08) and §I sign-off. Originally issued as decision freeze v1.0, 2026-10-04 (design only; not signed).
> **Baseline:** v1.0 `origin/main` @ `bf2838c`; v1.1 prepared against `origin/main` @ `54ea48a`; v1.2 prepared against `origin/main` @ `050339b`.
> **Inputs read in full:**
> - `b1/GOETHE-B1-ADULT-MASTER-STANDARD.md` ("Standard")
> - `ARCHITECTURE.md` ("ARCH")
> - `EXAM-ITEM-SCHEMA.md` ("SCHEMA")
> - `B1-EXAM-ENGINE-SPEC.md` ("ENGINE")
> - `B1-SCORING-SPEC.md` ("SCORING")
> - `B1-AUDIO-SPEC.md` ("AUDIO")
> - `B1-SPEAKING-SPEC.md` ("SPEAKING")
> - `B1-CALIBRATION-PLAN.md` ("CALIB")
> - `B1-MOCK-SPEC.md` ("MOCK")
> - `B1-SET-BALANCING-SPEC.md` ("BAL")
> - Also the older `b1/GOETHE-B1-DIGITAL-EXAM-SPEC.md` §14 (items DS-D1…DS-D15, still referenced by OD-16)
>
> **Precedence:** this register **governs where the earlier documents conflict** (§F). The earlier documents are **not modified**.
> **Naming:** owner defaults from the Phase 4 brief = **OWN-D1…OWN-D20**. The old DIGITAL-SPEC items = **DS-D1…DS-D15**. Decisions = **OD-xx** (OD-01…OD-34 existing; **OD-35…OD-45 new**, surfaced by this review; **OD-46…OD-52** = owner defaults made explicit). Explicit unknowns = **U-xx**. External items = **EX-xx**. EX-03 panel decisions = **EX-03/O1…O10** (§C.1). Contradictions = **R-xx**.
> **Labels:** [OFFICIAL] (Standard source IDs S1–S10) · [Klarweg Standardized Exam Behaviour] (where Goethe's digital behaviour is undocumented) · [KLARWEG DESIGN] · [UNKNOWN] · [PROVISIONAL] (numeric thresholds to be revised with pilot data, OWN-D16).

---

## 0. Inventory summary

| Measure | Count |
|---|---|
| Decision references found across all documents | **49** (OD-01…OD-34 + DS-D1…DS-D15) |
| Distinct decisions after de-duplication | **52** = OD-01…OD-34 (34) + OD-35…OD-45 surfaced from contradictions and DS items (11) + OD-46…OD-52 owner defaults given explicit IDs (7) |
| Closed by official evidence (no decision left) | 1 (DS-D13: Teil 2 is ≈ 3–4 min [OFFICIAL S1 §3], not "2:00") |
| Category A, CRITICAL (must be decided before implementation) | 29 + OD-16 closed, **all resolved** (21 via owner defaults, 8 via evidence/design consistency) |
| Category B, IMPORTANT (before Mock) | 13 |
| Category C, NON-BLOCKING (deferred) | 7 |
| Category D, EXTERNAL (legal/expert/third party) | 2 ODs + 8 external review items (EX-01…EX-08) |
| Explicit official unknowns | 12 (U-01…U-12) |
| Contradictions found / resolved / converted to owner decisions | 12 / 8 / 4 (R-01→OD-07, R-02→OD-30, R-04→OD-32, R-10→OD-35) |
| **Decisions still blocking infrastructure implementation** | **0** (see §G) |

Mapping of the old DIGITAL-SPEC items:

| DS item | Now |
|---|---|
| DS-D1 | OD-04 |
| DS-D2 | OD-41 |
| DS-D3 | OD-26 |
| DS-D4 | OD-05 |
| DS-D5 | OD-38 |
| DS-D6 | OD-06 |
| DS-D7 | OD-09 + OD-21 |
| DS-D8 | OD-09 |
| DS-D9 | OD-44 |
| DS-D10 | OD-45 |
| DS-D11 | OD-37 |
| DS-D12 | OD-39 |
| DS-D13 | Closed by official evidence |
| DS-D14 | OD-43 / U-05 |
| DS-D15 | OD-20 |

**Change cost scale** (cost of changing the decision later): **Low** = configuration/content only · **Medium** = code change in one component · **High** = schema/API/multi-component or re-pilot · **Very high** = architecture rework or invalidates collected data.

---

## A. Locked Decisions (frozen)

| ID | Decision | Status | Selected option | Reason | Source | Dependencies | Change cost |
|---|---|---|---|---|---|---|---|
| OD-11 | Benchmark version | LOCKED | **Goethe-Zertifikat B1 Erwachsene (adult)** is the primary benchmark. The youth version is used only to confirm structure | OWN-D1; adult age floor 16 [OFFICIAL S2 §3.1]; Klarweg audience is adults | Standard §3.3 | All content | Very high |
| OD-17 | Engine and runtime topology | LOCKED | One **generic Exam Engine** (level configs; B1 first, A1/A2/B2 later), served by a **new private `klarweg-exam` Worker** reached only via `/exam/*` proxy routes on the Access Worker (service binding) | OWN-D2; isolation; single login | ARCH §2, §6 | OD-18, OD-20 | Very high |
| OD-46* | Exam database | LOCKED | **Separate D1 `klarweg-exam`.** No exam tables in `klarweg-access` | OWN-D4 | ARCH §1.2, §4 | OD-17 | Very high |
| OD-20 | Routing / domain | LOCKED | Learner UI at **`/exam/`** on the main site (static, allowlisted). The API is **same-site in production** (site + API under one registrable domain). Development and staging may use the current Access host. **No separate unrelated public exam domain** | OWN-D3; third-party-cookie risk of the current cross-site cookie (`SameSite=None`, github.io → workers.dev) | ARCH §2 | Domain migration (launch condition, §G.2) | Medium (host config only; routes unchanged) |
| OD-18 | Exam entitlement model | LOCKED | **A separate exam-access concept** (`exam_access` grants in the exam DB: level, product/source, valid_from/until). Chapter/level entitlement does **not** imply exam access. Commercial mapping is deferred (OD-42) | OWN-D20 | ARCH §1.2 (superseded) | OD-42 | Medium |
| OD-47* | Content and media storage | LOCKED | Private R2 buckets (`klarweg-exam-content`, `klarweg-exam-recordings`). **Attempt-scoped, HMAC-signed, short-TTL delivery.** Never the public chapter-audio CDN (jsDelivr/`klarweg-audio`), never Pages | OWN-D5 | ARCH §4, §8; AUDIO B6 | OD-17 | High |
| OD-48* | Answer-key security | LOCKED | Keys only in `item_keys` (D1) and release key files (R2). **Never in browser packages** before submission. Scoring and pass/fail are server-side only. Automated package scanner (gate Q17) | OWN-D6 | ARCH §5; SCORING §1 | OD-47 | High |
| OD-49* | Timer authority | LOCKED | **Server-authoritative deadlines**; the browser timer is display only. Refresh, crash, reconnect, close and device change never add time. 10-s grace for in-flight saves stamped before the deadline. Only an audit-logged admin extension can move a deadline | OWN-D7 | ENGINE §3–§4, §8 | – | High |
| OD-50* | Form assignment | LOCKED | **Server-side CSPRNG** assignment with repeat-avoidance. The form is **immutable per attempt**. Idempotent create/resume. **No mixing of modules across forms.** Mock M0 is never assignable in set modes | OWN-D8 | ENGINE §7; SCHEMA §1 | OD-35 (calibration quotas) | High |
| OD-01 | Hören playback controls | LOCKED | **[Klarweg Standardized Exam Behaviour]** WebAudio playback, no learner pause, no seek, no speed control, volume only. Deterministic play counts 2/1/1/2 [OFFICIAL counts]. Server-controlled phase timing. **Not claimed to equal Goethe's digital implementation** (U-04) | OWN-D9 | AUDIO A4 | U-04 | Medium |
| OD-02 | Hören navigation | LOCKED | Linear, audio-paced parts. Items of finished parts **remain editable until module submission or time expiry** (consistent with [OFFICIAL S1 Anhang 1] "changes until submission"). Future-part items hidden. [Klarweg Standardized Exam Behaviour] for the UI | Official answer-change rule + OWN-D9 | AUDIO A5 | – | Low |
| OD-05 | Hören interruption recovery | LOCKED (count configurable) | [Klarweg Standardized Exam Behaviour] **max. 1 recovery replay per module**, only for a segment whose **last allowed play** was interrupted (device sleep, crash, context suspension). Logged; the attempt is flagged and excluded from calibration statistics. Config `hoeren.recovery_replays_per_module = 1` | Resolves R-05; deterministic play count (OWN-D9) | AUDIO A7 (authoritative over Standard OD-05 summary) | U-08 | Low |
| OD-26 | Offline / at-deadline policy | LOCKED (values configurable) | Continue offline (Lesen/Schreiben; Hören from preloaded audio). **Submission requires server acknowledgement.** Saves stamped before the deadline are accepted within the 10-s grace; otherwise the module closes with the last server state | OWN-D7 | ENGINE §8 | OD-49 | Low |
| OD-29 | Module order | LOCKED | Fixed **Lesen → Hören → Schreiben → Sprechen** in full simulation (the official recommended order [OFFICIAL S1 §2]) | Evidence | ENGINE §5 | – | Low |
| OD-10 | Solo speaking format | LOCKED | The **official single-candidate exam** is the primary reference (the examiner takes the partner role) [OFFICIAL S1 §1.4, §3.3] | OWN-D11 | Standard §6.4; SPEAKING §1 | OD-32 | High |
| OD-24 | Partner/examiner simulation | LOCKED | **Scripted, pre-recorded** partner and examiner turns for the Mock and Sets. A live AI partner is out of scope (possible later practice feature only) | OWN-D11; calibration comparability | SPEAKING §3 | OD-14 | High |
| OD-09 | Exam speech architecture | LOCKED | **Separate exam speech path:** multi-minute capture (≥ 4:00 Teil 2, 4:30 technical headroom), 5-s chunked upload, consent-gated storage, exam-only transcription route. The chapter Record & Check (`/speech/*`, 30 s/1 MiB, 3/day) is **not reused or modified** | OWN-D11 | SPEAKING §4, §8 | OD-21 | High |
| OD-13 | Productive-skill rating authority | LOCKED | During pilot/calibration, **two independent, blind human raters are authoritative** for Schreiben and Sprechen; a lead rater handles third ratings and adjudication. AI = transcription, pre-rating (shown to raters only after they submit), educational feedback. **AI never rates Aussprache** | OWN-D12, OWN-D13 | SCORING §3.3; CALIB §5 | EX-02 | High |
| OD-25 | Score reporting | LOCKED | Displayed Lesen/Hören points use the **official conversion table unchanged** [OFFICIAL S1 §4.1–4.2]. No score transformation from equating. Forms that differ are **revised** | OWN-D18 | CALIB §6; BAL §5 | – | Medium |
| OD-45 | Result language | LOCKED | Student-facing title **"Klarweg B1 Simulation – Ergebnis" / "Klarweg Exam Result"** with the mandatory disclaimer "Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts" (EN/HI helper text allowed). **Never** "Goethe score/Goethe-Ergebnis", predicted Goethe scores or confidence intervals | OWN-D17; OS §23.5 precedence over visual-system §7.7 sample wording (DS-D10) | SCORING §6 | – | Low |
| OD-51* | Claim policy | LOCKED | Four separate claims: (1) structural alignment, (2) content/difficulty alignment, (3) empirical calibration (with N and date), (4) statistical equivalence (**only** with formal equating + official-score data). **No statistical equivalence to Goethe is claimed** | OWN-D15 | CALIB §1 | – | Low |
| OD-12 | Calibration framework | LOCKED (numbers PROVISIONAL) | CALIB staging E0–E4 (design → random groups → pilot-only anchors → Rasch → external validation). All numeric thresholds are **[PROVISIONAL]** | OWN-D15, OWN-D16 | CALIB §3–§7 | OD-35, OD-36 | Medium |
| OD-52* | Balancing thresholds | LOCKED (policy) | All SDP centres, half-widths, composites and tolerances are **[PROVISIONAL v0]**. Gate Q7 **rejects** only hard-limit violations and structural quota failures. Composite/range constraints are **warnings** until post-M0 recalibration | OWN-D16 | BAL §1–§2, §5 (amended here) | M0 pilot data | Low |
| OD-21 | Data retention | LOCKED (mechanism) | Retention is **admin-configurable policy**, not hardcoded. Conservative default: speaking recordings deleted **30 days after the final rating** or on learner request; pilot recordings longer only with separate research consent; deletion jobs audit-logged | OWN-D19; resolves R-08 (30 vs 90 days) by choosing the conservative documented value | Standard OD-09; ARCH OD-21; SPEAKING §6 | EX-01 (privacy review) | Low |
| OD-23 | Authoring surface | LOCKED | Private git content repo + `exam-build` validate/compile/release CLI. A future admin UI writes pull requests | Versioning, review, no keys on Pages | ARCH §3, §7 | – | High |
| OD-15 | Visual/illustration policy | LOCKED | Klarweg-original visuals only. Ads as structured HTML text cards. No information carried only by images. Never imitate Goethe artwork | Originality (OWN-D19 safeguards in ARCH §10) | ENGINE §9.3 | EX-03 | Low |
| OD-31 | Re-scoring after key correction | LOCKED | Versioned re-score with history (`scoring_version`, `inputs_sha`); affected learners are notified | Auditability | SCORING §7 | – | Low |
| OD-38 | Writing word-count feedback | LOCKED | Live count only during writing; at submit, an informational notice if a task is below 50 % of the target (the official criterion fact [OFFICIAL S3 p.42]). No hard limits | Evidence + DS-D5 | ENGINE §9.4 | – | Low |
| OD-44 | Finality vs "reversibility" | LOCKED | Inside exam mode, **module submission is final** and Hören plays are not repeatable. This is an explicit Goethe Mode exception to visual-system §12.4; supported by the official rule "changes until submission or time expiry" [OFFICIAL S1 Anhang 1] | Resolves R-12 / DS-D9 | ENGINE §5 | – | Low |
| OD-16 | Old DIGITAL-SPEC D1–D15 | CLOSED | Mapped in §0; DS-D13 closed by evidence | – | Standard §14 | – | – |

\* OD-46…OD-52 are owner defaults (OWN-D4…OWN-D8, D15, D16) that were implicit in the designs and get explicit IDs here for traceability.

---

## B. Pre-Mock Decisions (configurable until Mock development; must be set before the Mock pilot)

| ID | Decision | Status | Selected option (default) | Reason | Source | Dependencies | Change cost |
|---|---|---|---|---|---|---|---|
| OD-07 | Schreiben rounding of the two-rater mean | **UNRESOLVED (configurable)** | **No official rule assumed.** Store the unrounded mean; `scoring.schreiben.rounding = "unresolved"` blocks *final release* of Schreiben results until set. Options: half-up / half-down / banker's | OWN-D18; official text only says "auf volle Punkte auf- bzw. abgerundet" [OFFICIAL S1 §4.3] (U-01); resolves R-01 (Standard said half-up, SCORING said pending) | SCORING §4.2 | Mock gate M-21 | Low (config) |
| OD-30 | Combination of a Schreiben third rating | **UNRESOLVED (configurable)** | Trigger implemented as official [OFFICIAL S1 §4.3]. **The combination rule is not assumed.** Store all three ratings; `scoring.schreiben.third_rating_combination = "unresolved"`. Options: R3 replaces / mean(R3, closer) / mean of three | OWN-D18; U-02 | SCORING §4.3 | M-21 | Low |
| OD-32 | Sprechen Teil 3 construct for solo learners | **OWNER DECISION — LOCKED** (2026-10-07, v1.1) | **(b) Simulated pair — decided.** The learner hears a pre-recorded partner presentation (≈ 3 min, B1 level, a different topic), gives feedback, asks a question, then answers the recorded examiner's/partner's questions about their own talk (SPEAKING §1.1 option (b), phase plan §2). The decision is resolved; its implementation and content remain subject to the M0 gates (§G.2); partner audio depends on OD-14; U-07 remains unknown. Alternative (a), the pure single-exam model, was not selected | Conflict R-04: the official single exam has no partner presentation [S1 §3.3], but the official Teil 3 Erfüllung covers feedback/question/answer [S3 p.46]. Evidence does not resolve it (U-07) | SPEAKING §1.1 vs Standard §6.4 | OD-14 (extra partner audio) | Medium (content + phase plan) |
| OD-03 | End-of-Hören review window | CONFIGURABLE | **5 min**, no audio [Klarweg Standardized Exam Behaviour; mirrors the paper transfer time] | U-06 | AUDIO A2 | Phase plan | Low |
| OD-04 | Breaks between written modules | CONFIGURABLE | Offer a **15-min break**, learner may skip; break time is not exam time. Labelled as a simulation deviation (official centres require **≥ 15 min** [OFFICIAL S1 §2]) | Resolves R-07 wording | ENGINE §4 | – | Low |
| OD-06 | Paste/clipboard policy in Schreiben | CONFIGURABLE (Klarweg operational decision) | `writing.paste_policy ∈ {allow, internal_only, block}`; default **`internal_only`** (external paste blocked, attempts logged, never penalised). **No official policy is assumed** | OWN-D10 | ENGINE §9.4 | – | Low |
| OD-14 | Audio production route | **OWNER DECISION — LOCKED / CONDITIONAL** (2026-10-07, v1.1) | **(b) Premium neural voices — route decided, CONDITIONAL.** All existing gates stay mandatory (AUDIO B3, B5): ≥ 16 distinct native-sounding standard-German voices, ≥ 8 female + ≥ 8 male, ages ≈ 20–70, ≥ 2 authentic Austrian + ≥ 2 authentic Swiss standard pronunciation; 9–12 voices per form; human naturalness review **MOS ≥ 4.0/5 with 10 native raters** (**[PROVISIONAL]** threshold) and OS §23.5; written licence for exam use with AI-training exclusion and a perpetual licence for the forms (EX-06); masters WAV 48 kHz / 24-bit mono; delivery Opus 64 kbps + AAC-LC 96 kbps, −18 LUFS ± 1; never browser TTS. This decision does **not** approve any vendor, voice, licence or production audio; procurement is neither approved nor complete. Real production audio remains required before M0; test tones are engineering-only. (Option (a), studio voice actors, had been noted as preferred for T3/T4/partner; not selected) | OS §23.5 | AUDIO B3 | EX-06 | High (re-recording) |
| OD-19 | Rater/admin authentication | CONFIGURABLE | Same Klarweg session + `exam_roles`; 2FA required for rater/admin roles before the pilot (needs a small Access auth addition later) | Pseudonymised voice/text data | ARCH §5 | Access change (later phase) | Medium |
| OD-27 | Sprechen device support | CONFIGURABLE | Full simulation Sprechen on desktop/tablet; mobile Sprechen practice only | Recording reliability | ENGINE §10 | – | Low |
| OD-35 | Pilot sample-size targets | **OWNER DECISION** (resourcing) | Default targets: Mock engineering pilot 40–60; Mock calibration pilot 100–150; each set ≥ 100 (random groups). **[PROVISIONAL]** | Resolves R-09/R-10: Standard §15.2 (N ≥ 40 with item thresholds) and §16.6 (N ≥ 25 per set) conflict with CALIB §7. Smaller N may be used for engineering checks but **cannot** support item-statistic gates | CALIB §7; MOCK M-29/M-30 | OD-34, EX-02 | Medium |
| OD-36 | Anchor composition | CONFIGURABLE | Default: **pilot-only anchor testlets** = Lesen T5 (4 items) + Hören T2 (5 items) from M0 (whole tasks, because items depend on their stimulus) | Resolves R-11: Standard §15.3 "6 Lesen + 6 Hören items, rotated" vs CALIB §6 testlets; local item dependence favours whole tasks | CALIB §6 | OD-35 | Medium |
| OD-41 | Accommodations policy | CONFIGURABLE | Admin-granted only; extra time 25–100 % (speech impairment 25–50 %) mirroring [OFFICIAL S8]; evidence process per EX-08 | DS-D2 | ENGINE §2 | EX-08 | Low |
| OD-43 | Hören internal pauses and answer windows | CONFIGURABLE (values unknown officially) | Provisional values: T1 item-preread 10 s · gap 5 s · answer 10 s; T2/T3 answer 15 s; T4 gap 10 s · answer 15 s; total gate 36–42 min **[PROVISIONAL]**. Replace after measuring the official full recordings (U-05/U-09) | DS-D14 | AUDIO A2 | U-05, U-09 | Low (phase-plan config) |

---

## C. External Review Decisions

| ID | Decision / review | Status | Selected option (pending review) | Reason | Source | Dependencies | Change cost |
|---|---|---|---|---|---|---|---|
| OD-08 | Reuse of official criteria descriptor wording and standard instruction phrases | **OWNER DECISION — LOCKED / CONDITIONAL** (2026-10-07, v1.1); legal clearance **EXTERNAL — not resolved** | **(b) Seek formal legal clearance** for closer Goethe-aligned wording — route decided. Scope: descriptor wording and instruction phrases only, and only where legally permitted; never Goethe questions, passages, audio, keys, images or other protected content. **Until cleared (fallback, unchanged):** implement the **official scoring structure** (criteria names, bands, points) as facts; Klarweg-original **paraphrase** of descriptors and instructions. Legal clearance itself is **not resolved** and remains an M0 gate (§G.2) | Copyright/trademark | Standard §8.4, §12 | Content authoring | Low (text) |
| OD-34 | Pilot research consent, ethics, incentives | EXTERNAL (legal/ethics) + owner | Separate research consent; modest incentive | Data use in calibration | CALIB §8 | OD-35 | Low |
| EX-01 | Privacy review: voice recordings, OpenAI sub-processor for transcription/pre-rating, retention, DPDP Act (India) / GDPR if applicable | EXTERNAL | Consent-gated; configurable retention (OD-21) | Personal and biometric-like data | SPEAKING §6 | OD-21 | Medium |
| EX-02 | Rater recruitment, training and certification (≥ 2 qualified B1 raters + lead) | EXTERNAL (expert) | CALIB §5 procedure | Human rating authoritative (OD-13) | CALIB §5 | OD-13 | – |
| EX-03 | Native-speaker linguist + B1 teacher review panel | EXTERNAL (expert) — **panel NOT FORMED**; governance decided in v1.2 (§C.1) | ≥ 2 teachers + 1 native linguist per item; how the panel works: EX-03/O1…O10 (§C.1) | Content validity | MOCK M-27 | – | – |
| EX-04 | Accessibility audit (WCAG 2.2 AA, screen readers) | EXTERNAL (expert) | MOCK M-24 | – | ENGINE §10 | – | – |
| EX-05 | Security review / penetration test | EXTERNAL (expert) | MOCK M-23 checklist | Key protection, IDOR, signed URLs | ARCH §5 | – | – |
| EX-06 | Voice talent contracts / neural voice licences (exam use, no AI-training reuse) | EXTERNAL (third party) | AUDIO B3 terms | – | AUDIO B3 | OD-14 | – |
| EX-07 | Trademark review of "Goethe" references and disclaimers | EXTERNAL (legal) | Nominative use only + disclaimer (OD-45) | – | ARCH §10.9 | OD-45 | Low |
| EX-08 | Accommodation evidence process (medical documentation handling) | EXTERNAL (legal/privacy) | Mirrors S8 principles | – | – | OD-41 | Low |

### C.1 EX-03 reviewer-panel decisions (v1.2)

Owner decisions of 2026-10-07 on how the EX-03 panel works. They fill gaps the source documents leave open and do not
change MOCK M-27/M-28, SCHEMA §8.2, §8.3 or §10, or the Standard. **No reviewer has been appointed; EX-03 remains
EXTERNAL and open** (§G.2, §I). Reviewer identities, qualification evidence and conflict-of-interest disclosures are
held privately by the owner and are never recorded in a repository; review records carry anonymised reviewer codes only.

Role slots (labels, not identities): **A** and **B** = B1-qualified German teachers; **C** = qualified native German
linguist — the "≥ 2 teachers + 1 native linguist" of EX-03 / MOCK M-27 / Standard §15.2.

| ID | Decision | Status | Gap in the sources | Change cost |
|---|---|---|---|---|
| EX-03/O1 | Three distinct people fill slots A, B and C; no one person fills more than one slot | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | EX-03 / M-27 give only the count "≥ 2 + 1" | Low (recruitment) |
| EX-03/O2 | A and B record the SCHEMA §10 `content` role. C still signs off every item for validity, key and distractors under M-27 | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | SCHEMA §10 role not assigned to a reviewer | Low (process) |
| EX-03/O3 | C holds the SCHEMA §10 `originality` role: per-form human originality sign-off (ARCH §10.7; M-28) and Q14 human decisions | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | Role holder not named | Low (process) |
| EX-03/O4 | C holds item-level `accessibility` review. The external accessibility audit EX-04 (MOCK M-24) is unaffected | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | Item-level accessibility not assigned to the panel | Low (process) |
| EX-03/O5 | A and B give the SCHEMA §8.3 ratings (incl. BAL indicators 9–11 and 18–24, and the Sprechen Teil 2 topic pair, Standard §11.2(10)); C is the third reviewer | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | SCHEMA §8.3 does not assign the raters or the third reviewer | Low (process) |
| EX-03/O6 | No carry-forward of approvals: every new item/form revision gets fresh verdicts from A, B and C | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | Not specified | Low (review effort) |
| EX-03/O7 | No adjudicator, tie-break or vote for verdict disagreements. An unresolved item is either revised, or withdrawn by the owner and replaced by a new item reviewed from scratch. Reviewers may discuss only after recording independent verdicts. Neither AI nor the owner can turn a reviewer's rejection into an approval (M-27 sign-off) | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | Only SCHEMA §8.3 defines a reconciliation rule, and only for ratings | Low (process) |
| EX-03/O8 | No general finding-severity scale: findings are recorded through the reviewer's verdict (SCHEMA §10) and the finding's disposition; ambiguity findings also carry `ambiguity_risk` (SCHEMA §8.2) | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | No general scale defined | Low (process) |
| EX-03/O9 | No reviewer access to the commercial reference book in any form; reference materials stay outside the product repositories (ARCH §10.8) | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | Reviewer access not specified | Low (process) |
| EX-03/O10 | SCHEMA §8.3 with no single agreeing pair (the third rating agrees with neither original rating, e.g. 1/5/3, or with both, e.g. 2/4/3; two ratings agree when they differ by less than 2): no value is recorded; A and B review the anchored examples and re-rate independently; §8.3 is applied again, with a fresh third rating from C if required; if there is still no single agreeing pair, the task is revised (BAL §4 step 4) | **OWNER DECISION — LOCKED** (2026-10-07, v1.2) | SCHEMA §8.3 records "the mean of the agreeing pair" without covering these cases | Low (process) |

Remaining before the first human review (owner actions, outside any repository): appoint the three reviewers, verify
qualifications, collect conflict-of-interest disclosures, assign anonymised codes, grant access, and calibrate A, B and C
on the SCHEMA §8.3 anchored examples.

---

## D. Deferred Decisions (non-blocking; no architectural risk)

| ID | Decision | Status | Default until decided | Source | Change cost |
|---|---|---|---|---|---|
| OD-22 | Attempt limits | DEFERRED | Mock: 1 graded attempt; Sets: 1 attempt each, repeat after all are used (config) | ARCH §12 | Low |
| OD-28 | Abandoned remaining modules after a break | DEFERRED | 24 h → `auto_abandon` (not taken, not 0) (config) | ENGINE §4 | Low |
| OD-33 | Retake of a technically failed speaking part | DEFERRED | Allowed once in a new attempt slot, logged | SPEAKING §5 | Low |
| OD-37 | Instruction language in Simulation | DEFERRED | German exam instructions; optional EN/HI tutorial text before the clock starts | DS-D11 | Low |
| OD-39 | Exam text typeface | DEFERRED (brand) | Inter ≥ 17 px for exam texts (CSS token; Fraunces rule exception pending brand sign-off) | ENGINE §9.2; DS-D12 | Low |
| OD-40 | AI-only provisional results outside pilot | DEFERRED | **Disabled.** If ever enabled: labelled "vorläufige KI-Einschätzung", never a pass status, never during calibration (OWN-D12) | SCORING §3.3 | Low |
| OD-42 | Commercial mapping of exam access (pricing, bundles, Mock free/paid) | DEFERRED | Admin-granted `exam_access` only during the pilot | OWN-D20 | Low |

---

## E. Explicit Unknowns (official sources do not specify)

| ID | Unknown | Where it matters | Handling |
|---|---|---|---|
| U-01 | Rounding threshold for the Schreiben two-rater mean (only "auf volle Punkte auf- bzw. abgerundet") | SCORING §4.2 | OD-07 configurable; raw stored |
| U-02 | How a Schreiben third rating combines with ratings 1 and 2 | SCORING §4.3 | OD-30 configurable; all ratings stored |
| U-03 | Any third-rating rule for Sprechen (none published) | SCORING §4.3 | None applied; lead adjudication only for unratable/incident cases |
| U-04 | Official digital Hören controls (pause/seek availability, UI) | AUDIO A1 | OD-01 [Klarweg Standardized Exam Behaviour] |
| U-05 | Per-text reading pauses (Teil 1), gaps between plays, answer pauses | AUDIO A2 | OD-43 provisional config |
| U-06 | Whether the digital platform keeps a review/transfer window after Hören | AUDIO A1 | OD-03 config |
| U-07 | How the official single exam scores Teil 3 feedback/question functions | SPEAKING §1.1 | OD-32 |
| U-08 | Official recovery rules after technical interruptions at centre-based digital exams (online exams exclude on device failure [OFFICIAL S2]) | AUDIO A7; ENGINE §8 | OD-05; Klarweg is a practice simulation |
| U-09 | Exact full-length official Hören timelines (37:21 / 39:13 reported via index only) | AUDIO A2 | Manual download and timing analysis (next phase task) |
| U-10 | Digital platform timer display and navigation UI | ENGINE §9 | Klarweg Goethe Mode design |
| U-11 | Contents of the commercial "Prüfungsziele, Testbeschreibung" handbook | Standard §2 | Optional purchase; not required |
| U-12 | Live-form item statistics and pass rates | CALIB §1 | Not obtainable; claims limited by OD-51 |

---

## F. Contradictions found and their resolution

| ID | Statement A | Statement B | Authoritative / resolution | Evidence basis |
|---|---|---|---|---|
| R-01 | Standard §7A note + §14 OD-07: "Klarweg applies half-up to both" | SCORING §4.2: rounding pending; must not assume Sprechen rule | **Not resolved by evidence**, so it becomes **OD-07 (unresolved, configurable)**. The Standard's half-up statement is superseded by OWN-D18 | Official text silent on threshold (U-01) |
| R-02 | ARCH OD-30 / SCORING §4.3: proposal "Bewertung 3 replaces the mean" | OWN-D18: do not invent official rules | **OD-30 unresolved, configurable** | U-02 |
| R-03 | Standard OD-10: "AI/scripted examiner-partner" | SPEAKING §3: scripted; live AI practice only | **Resolved: scripted/pre-recorded** (OD-24 locked) | OWN-D11 |
| R-04 | Standard §6.4: single-exam model is the reference (no partner talk) | SPEAKING §1.1: simulated pair with a partner presentation | **Converted to owner decision OD-32** (both configurable; default (b)). v1.1: decided as (b), OD-32 LOCKED | Two official facts in tension (U-07) |
| R-05 | Standard OD-05: "one replay of an interrupted Hören play" | AUDIO A7: one recovery **per module**, only if the **last allowed** play was interrupted | **Resolved: AUDIO A7** (more specific, more conservative; configurable) | OWN-D9 deterministic play count |
| R-06 | Standard §9.3 / ENGINE: server timers | visual-system "no countdowns" | **Resolved:** timers permitted in explicit Goethe Mode (visual-system l. 53, 1179, 1196); OS §15.5 is scoped to pricing | Repo specs |
| R-07 | Standard §5.2: official break **≥ 15 min** | ENGINE §4: break "up to 15 min, skippable" | **Resolved as OD-04:** a 15-min break is offered and skippable, labelled as a simulation deviation from centre practice | Official rule applies to centre administration; Klarweg is self-paced practice |
| R-08 | Standard OD-09: retention "≤ 30 days" | ARCH OD-21 / SPEAKING §6: "90 days" | **Resolved by OWN-D19:** configurable; default **30 days** (the conservative documented value) | Owner default |
| R-09 | Standard §15.2: Mock pilot N ≥ 40 with item thresholds (p 0.30–0.90, r_pb ≥ 0.20) as exit criteria | CALIB §1/§7, MOCK M-29/M-30: N = 40–60 is engineering only; item statistics need 100–150 | **Resolved: CALIB/MOCK authoritative** (statistical reasoning: SE(p) ≈ 0.08 at N = 40). Final targets → OD-35 | CALIB §1 |
| R-10 | Standard §16.6: set pilot N ≥ 25 | CALIB §7: ≥ 100 per form | **Converted to OD-35** (resourcing) with default ≥ 100; N < 100 can only support engineering-level conclusions | CALIB §7 |
| R-11 | Standard §15.3: anchors "6 Lesen + 6 Hören items, rotated" | CALIB §6: whole-task testlets L5 + H2 (9 items), pilot-only | **Resolved to OD-36 default = testlets** (items share stimuli; item-level anchors would break task coherence) | SCHEMA §1 coherence rule |
| R-12 | Visual-system §12.4: "every interaction is reversible" | ENGINE/Standard: final submission, single-play audio | **Resolved: OD-44** (Goethe Mode exception) | [OFFICIAL S1 Anhang 1] changes allowed only until submission/expiry |

Additional consistency notes (no conflict, harmonised here):
- **Thresholds:** Standard §11.2 and BAL §2 numbers are now **[PROVISIONAL v0]** (OD-52). Q7 rejects only hard limits.
- **Disclaimers:** the English (Standard §12.3, ARCH §10.9) and German (SCORING §6) disclaimer variants are harmonised under OD-45.
- **Exam access:** ARCH §1.2 "readEntitlements() reuse for exam access" is superseded by OD-18: session reuse stays; entitlement derivation does not.
- **Recording headroom:** Teil 2 phase hard stop **4:00** [Klarweg design within official ≈ 3–4 min]; the recorder's **4:30** cap (SPEAKING §4, MOCK M-16) is technical headroom only.

---

## G. Implementation readiness

### G.1 True blockers for infrastructure implementation
After applying OWN-D1…OWN-D20 and the evidence-based resolutions: **none**. Every remaining open item is either:
- a configuration value the engine must merely *support* (OD-03, OD-04, OD-06, OD-07, OD-30, OD-32, OD-36, OD-41, OD-43), or
- needed only for content, pilot or launch.

| Item | Why it is *not* an infrastructure blocker | What depends on it | What breaks if guessed | Safe temporary solution |
|---|---|---|---|---|
| OD-07 / OD-30 (Schreiben rounding/third rating) | The scoring engine stores raw ratings; the rule is a config switch | Schreiben result *release* | Wrong official-style points | `"unresolved"` flag blocks final Schreiben results; raw values stored |
| OD-32 (Teil 3 construct) | The speaking phase plan is data-driven | Mock speaking content + partner audio | Wrong Teil 3 content | Engine supports both phase variants |
| OD-20 production same-site domain | Routes/proxy identical on any host | **Pilot/launch** on browsers blocking third-party cookies | Login-dependent API calls fail in Safari | Dev/staging on the current Access host; pre-flight cookie check; migrate before pilot |
| OD-14 audio route, EX-06 | No audio needed for infrastructure | Mock Hören/Sprechen content | Unusable recordings | Synthetic silent/test-tone fixtures |
| OD-08, EX-01…EX-08 | External; affect content, data processing and launch | Content authoring, real-learner recording | Legal exposure | Synthetic data only until cleared |

### G.2 Stage gates beyond infrastructure
| Stage | Blocked until |
|---|---|
| Mock **content authoring** | OD-08 legal clearance (route decided in v1.1; clearance outstanding — paraphrase fallback until then), OD-14 conditions for any Hören/Sprechen audio (route decided in v1.1; EX-06 licences, voice pool and MOS review outstanding), EX-03 reviewer panel (governance decided in v1.2, §C.1; panel not yet formed). OD-32 decided in v1.1 (no longer open) |
| Mock **pilot with real learners** | OD-20 same-site domain, EX-01 privacy review, consent texts, OD-19 rater 2FA, EX-02 raters, OD-35, OD-34 |
| Mock **results release** | OD-07, OD-30 set |
| Sets 01–10 authoring | All MOCK gates M-01…M-33 passed (OWN-D14) |

### **IMPLEMENTATION-READY? → YES (infrastructure phase only), under these assumptions:**
1. **The owner accepts this register** (G0 freeze sign-off below). Locked items change only via a register revision.
2. **Synthetic content only:** the infrastructure phase uses dummy level configs and dummy forms, silent/test-tone audio and fake recordings. No real items, keys, audio or learner data until §G.2 gates clear.
3. **Development host:** the current Access Worker host (cross-site cookie) is acceptable for development and internal staging. The production same-site domain (OD-20) is a **pre-pilot** requirement.
4. **Unresolved scoring rules ship as configuration** (`"unresolved"` blocks Schreiben result release); numeric difficulty thresholds are **[PROVISIONAL v0]**.
5. **Existing production systems stay untouched** except the planned, feature-flagged, additive changes (Access `/exam/*` proxy routes, Pages allowlist entries for `/exam/`). Each goes through the usual stop-before-commit/merge/deploy workflow.
6. **Cloudflare capacity is verified** before staging: a new D1 database, 2 R2 buckets, a private Worker, Cron Triggers, and plan limits (D1 writes/day, Worker CPU) [VERIFY; account plan unknown to this analysis].

---

## H. Pre-implementation checklist

| Area | Status | Basis / remaining condition |
|---|---|---|
| SECURITY | **LOCKED** | OD-47, OD-48, signed media, leases/seq/idempotency, roles, audit (ARCH §5); pen test EX-05 before pilot |
| SESSION | **LOCKED** | Reuse Klarweg session via the Access proxy; attempt/lease model (ENGINE §3); OD-20 before pilot |
| TIMER | **LOCKED** | OD-49, OD-26 (grace 10 s; config) |
| CONTENT | **LOCKED** (model, storage) | SCHEMA, OD-47, OD-23; authoring itself gated by §G.2 |
| AUDIO | **CONFIGURABLE** | Runtime LOCKED (OD-01, OD-02, OD-05); phase values OD-43/OD-03 configurable; production route OD-14 **decided (premium neural, CONDITIONAL, v1.1)**; licences EX-06 and the MOS review **EXTERNAL / outstanding** |
| WRITING | **LOCKED** (paste CONFIGURABLE) | ENGINE §9.4; OD-38 locked; OD-06 config |
| SPEAKING | **CONFIGURABLE** | Architecture LOCKED (OD-09, OD-10, OD-24); Teil 3 construct OD-32 **LOCKED = (b) simulated pair (v1.1)**; privacy EX-01 **EXTERNAL** |
| SCORING | **CONFIGURABLE** | Objective + rubric structures LOCKED [OFFICIAL]; OD-07, OD-30 unresolved config |
| RATING | **EXTERNAL** | Workflow LOCKED (OD-13); raters EX-02; rater 2FA OD-19 |
| RESULTS | **LOCKED** | OD-45, OD-25, SCORING §6 result model |
| CALIBRATION | **CONFIGURABLE** | Framework LOCKED (OD-12, OD-51); numbers PROVISIONAL; OD-35, OD-36 |
| AUTHORING | **LOCKED** (tooling) | OD-23, gates Q1–Q17; actual authoring BLOCKED until §G.2 |
| SET BALANCING | **CONFIGURABLE** | OD-52 provisional v0; recalibrated after the M0 pilot |
| ACCESSIBILITY | **LOCKED** (targets) | WCAG 2.2 AA, keyboard-only, S8 accommodations (OD-41 config); audit EX-04 **EXTERNAL** |
| LEGAL / ORIGINALITY | **EXTERNAL** | OD-08 route decided (legal clearance, CONDITIONAL, v1.1) with clearance **outstanding**; EX-01, EX-07; originality rules LOCKED (ARCH §10) |
| MONITORING | **CONFIGURABLE** | Minimum locked: incidents table, audit log, phase/play/recording events, nightly stats. Alerting thresholds/dashboards to be specified in the implementation phase |
| BACKUP / RECOVERY | **CONFIGURABLE** | Immutable R2 releases (rollback by release id); D1 point-in-time recovery [VERIFY plan/retention]; recordings per OD-21. A backup/restore runbook is to be written in the implementation phase (gap noted) |
| DEPLOYMENT | **LOCKED** (pattern) | Private exam Worker (`workers_dev=false`); Access proxy behind a feature flag; `/exam/` static files added to the Pages allowlist only; content never on Pages; stop before commit/merge/deploy per the owner workflow |

---

## I. Freeze sign-off

| Role | Name | Decision | Date |
|---|---|---|---|
| Owner | – | Register v1.0 (sections A–H): **not signed**; superseded by v1.1 | – |
| Owner | Klarweg owner | ☑ **Approve with changes — register v1.1** (sections A–H as amended; changes in §J) | 2026-10-07 |
| Owner | Klarweg owner | ☑ **Approve — register v1.2** (§C.1 EX-03 panel decisions EX-03/O1…O10 as recorded; changes in §J) | 2026-10-07 |

**Scope of this sign-off.** It approves the decisions and statuses **as recorded** in this register. It does **not** certify that any open gate is complete. Still open at v1.1 include:
- OD-08 legal clearance (EXTERNAL, not resolved)
- OD-14 conditions: EX-06 licences, voice pool, MOS review, production audio
- OD-07 and OD-30 (UNRESOLVED)
- the configurable defaults (OD-03, OD-04, OD-06, OD-19, OD-27, OD-36, OD-41, OD-43) and OD-35
- EX-01…EX-08, including the EX-03 reviewer panel (governance decided in v1.2, §C.1; panel not yet formed)
- the deferred items (§D)
- all implementation, calibration and release gates (Q1–Q17, M-01…M-33)

**Scope of the v1.2 sign-off.** Same scope as above: it approves EX-03/O1…O10 **as recorded** in §C.1. It does **not**
mean that the EX-03 panel is formed or that any reviewer has been appointed, and it does not close any of the items
listed above. G0 below is unaffected.

**G0 (Standard §17, "This standard approved; OD-01…OD-16 decided").** Under this register's precedence (header), G0's spec-freeze condition is met by this sign-off together with a **recorded status** for every OD-01…OD-16. It does **not** mean all of them are settled:
- **LOCKED:** OD-01, OD-02, OD-05, OD-09, OD-10, OD-11, OD-12, OD-13, OD-15
- **CLOSED:** OD-16
- **CONFIGURABLE (defaults):** OD-03, OD-04, OD-06
- **UNRESOLVED:** OD-07 — gates Schreiben result release only (§G.2)
- **Route decided, CONDITIONAL:** OD-08 (clearance outstanding) and OD-14 (conditions outstanding)

The §G.2 stage gates continue to apply in full.

Changes after sign-off require a new register version that lists the changed IDs, their change cost and the affected components.

---

## J. Version history

| Version | Date | Changed IDs | Change cost | Affected components |
|---|---|---|---|---|
| v1.0 | 2026-10-04 | Initial decision freeze (not signed) | – | – |
| v1.1 | 2026-10-07 | **OD-32** → (b) simulated pair, LOCKED · **OD-14** → (b) premium neural voices, LOCKED / CONDITIONAL · **OD-08** → (b) formal legal clearance route, LOCKED / CONDITIONAL (clearance not resolved) · R-04 note · §G.2 content-authoring gate · §H AUDIO, SPEAKING, LEGAL rows · §I sign-off · this §J | OD-32: Medium (content + phase plan) · OD-14: High (re-recording) · OD-08: Low (text) — as listed in §B/§C | Sprechen Teil 3 content and partner audio (OD-32); Hören and Sprechen audio production, voice licensing and MOS review (OD-14); exam instructions and descriptor wording (OD-08). No change to engine, schema, scoring rules or level configuration (the pinned config already carries the option-(b) phase plan) |
| v1.2 | 2026-10-07 | **EX-03/O1…O10** recorded as owner decisions (new §C.1) · EX-03 row (status: governance decided, panel not formed) · §G.2 content-authoring gate · §I sign-off and scope note · header · this §J | Low (process; recruitment and review effort) — as listed in §C.1 | Item review process and reviewer recruitment only. No change to engine, schema, scoring rules, level configuration, MOCK gates or the Standard |

The §0 inventory counts reflect the v1.0 categorisation and are unchanged; the decisions above remain in their original §B/§C sections with updated statuses.
