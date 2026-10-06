# B1 Difficulty Calibration and Equating Plan

> **Status:** design only. No pilot has run and no data exists.
> **Goal:** Set 01 ≈ Set 02 ≈ … ≈ Set 10 ≈ the Goethe B1 adult design target. Each claim must be backed at the evidence level it states.
> **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[INFERENCE]** (incl. standard psychometric practice) · **[OD-xx]**.

---

## 1. Four levels of evidence (never conflated)

| Level | Question answered | Evidence | Claim Klarweg may make |
|---|---|---|---|
| **1. Content alignment** | Do the tasks measure what Goethe B1 measures? | Expert review against the official Prüfungsziele (Standard §4), task specs, rubrics; reviewer sign-off | "Aligned to the published Goethe-Zertifikat B1 (adult) specifications" |
| **2. Structural equivalence** | Same structure, timing, formats, scoring rules? | Automated gates Q1–Q17 (ARCHITECTURE §9) | "Same format, timing and scoring structure as the published exam" |
| **3. Empirical calibration** | Do the Klarweg forms behave sensibly and similarly to each other? | Pilot item and rater statistics; form comparisons; external anchors | "Klarweg forms are calibrated against each other on N learners" (with N and date) |
| **4. Statistical equivalence** | Are scores interchangeable with each other (and, ultimately, predictive of Goethe results)? | Formal equating on adequate samples; concurrent validity against **official** results | Only after the evidence exists. **Never** "equivalent to the live Goethe exam" without official-score data |

**Explicit limits [INFERENCE]:**
- A pilot of **40 learners is an engineering and calibration stage**. It can reveal broken items, implausible difficulty and workflow defects.
- It **cannot** establish statistical equivalence among forms, and certainly not with live Goethe exams.
- With N = 40, the standard error of an item p-value near 0.6 is ≈ 0.08, and of a 30-item raw-score mean ≈ 0.7–0.9 points. Differences between forms smaller than about 2 raw points cannot be resolved.

---

## 2. Data captured (prerequisites in the engine)

| Data | Source table | Use |
|---|---|---|
| Final responses per item | `responses_current` (frozen) | p, r_pb, distractors |
| All answer changes | `response_events` | Change rates, wrong→right/right→wrong |
| Part/module timestamps; Hören phases; plays | `attempt_modules`, `hoeren_phases`, `audio_plays` | Timing behaviour, incident exclusion |
| Lesen part dwell time (part tab focus intervals) | Client events → `attempt_history` | Time per part (Lesen) |
| Writing versions + final | `writing_*` | Length, process |
| Ratings (AI, R1, R2, R3) | `ratings` | Agreement, AI bias |
| Background (opt-in) | Pilot survey: CEFR self-placement, Klarweg course progress, prior Goethe results (with certificate optional) | External criteria |
| Incidents | `incidents` | Exclusion rules |

**Exclusion rules for statistics:**
- `voided` attempts
- modules with audio/recording incidents
- modules with < 50 % of items answered (non-serious attempts)
- duplicate attempts by the same user on the same form after the first

---

## 3. Objective items: statistics and flags

| Statistic | Definition | Flag (review) | Hard fail (revise/drop) |
|---|---|---|---|
| Facility p | Proportion correct (omits = wrong) | p < 0.30 or p > 0.90 | p < 0.15 or p > 0.97 |
| Discrimination r_pb | Corrected item–rest correlation (module raw minus the item) | < 0.20 | < 0.10 or negative |
| Upper–lower D | p(top 27 %) − p(bottom 27 %) | < 0.20 | < 0.05 |
| Distractor analysis | Option proportions; option–rest correlation | A distractor chosen by < 5 % (non-functioning); a distractor with r > 0 (attracts the strong) | A distractor with r > key r, or chosen more than the key by the top group = **misleading / possible second key** |
| Binary items (R/F, Ja/Nein) | p and the share choosing each side | p within 0.45–0.55 with r_pb < 0.15 (guessing pattern) | – |
| L3 matching | Confusion matrix of ads × situations | Any ad attracting > 30 % of a wrong situation | Two ads indistinguishable for a situation |
| H4 speaker assignment | Confusion by speaker | A systematic swap between two speakers (voice-contrast problem) | – |
| Omit rate | Unanswered share | > 5 % | > 15 % (layout/time issue) |
| Answer changes | wrong→right vs right→wrong | right→wrong > wrong→right (misleading wording) | – |
| Time (Lesen, per part) | Median dwell vs advisory time | > 1.5× advisory or < 0.4× | > 2× (part too long) |
| Position effects | p by item position in part | A drop at the end of a part > 0.15 | – |

**Form-level checks:**
- Module raw mean and SD.
- Cronbach's α (Lesen/Hören; target ≥ 0.80 [INFERENCE]).
- SEM.
- Score distribution (floor/ceiling).
- Proportion ≥ 18/30 (pass rate).

---

## 4. Detection rules (what pilot data tells us)

| Problem | Signal | Action |
|---|---|---|
| **Too-easy set/module** | Mean raw > reference form + 2 SE, and/or pass rate > reference + 15 pp, with comparable groups (random assignment) | Replace the 2–4 easiest items/tasks (highest p, low r) with harder variants within Layer C; re-pilot |
| **Too-hard set/module** | Mirror of the above | Mirror |
| **Broken item** | Negative r_pb, a second-key pattern, p ≈ 0 | Key check → fix or drop; rescore if live (scoring spec §7) |
| **Misleading distractor** | A distractor attracting the top group | Rewrite the distractor; re-check the anchor evidence |
| **Underperforming item** | 0.10 ≤ r_pb < 0.20, or a non-functioning distractor | Revise in the next revision |
| **Abnormal timing** | Lesen part dwell > 1.5× advisory; > 10 % time-outs in Schreiben; Hören incidents > 2 % | Check text length vs Layer C; check device/UX; adjust content, never the official times |
| **Rater problem** | Agreement below targets (§5); drift | Retrain/recalibrate; double-check the affected ratings |
| **AI pre-rating bias** | Mean AI − teacher difference > 0.5 band on any criterion | Recalibrate the prompt/model; AI stays advisory |

---

## 5. Writing and speaking: rating quality

### 5.1 Procedure
1. **Rater qualification:** B1 teaching experience; Klarweg training with **Klarweg-authored benchmark performances**. Use of official public Leistungsbeispiele for internal training only, pending OD-08 legal review.
2. **Certification:** a rater rates 10 benchmark scripts and 6 recordings with exact agreement ≥ 70 % and adjacent ≥ 95 % to the lead consensus.
3. **Operational double rating:** every pilot script/recording is rated by **two independent, blind teachers** (mirrors the official two raters [OFFICIAL S1 §4.3, §5]). Assignment is random, balanced across raters.
4. **Third rating:** Schreiben trigger as official [OFFICIAL]. Combination per OD-30 (scoring spec §4.3).
5. **Disagreement handling:**
   - criterion-level |difference| ≥ 2 bands → lead review for quality monitoring; the score follows official aggregation
   - repeated → rater feedback
6. **Drift:** 10 % of each rater's workload is pre-rated "seeded" benchmarks (blind). Rolling agreement is monitored weekly.

### 5.2 Agreement metrics and targets [INFERENCE: standard practice]
| Metric | Level | Target |
|---|---|---|
| Exact band agreement | per criterion | ≥ 70 % |
| Adjacent (± 1 band) agreement | per criterion | ≥ 95 % |
| Quadratic weighted κ | per criterion | ≥ 0.70 |
| ICC(2,1) | module totals | ≥ 0.80 |
| Pass/fail consistency | module | ≥ 90 % same decision |
| Third-rating rate | Schreiben | Monitored (expect < 10 %) |

### 5.3 AI vs teacher
- The AI pre-rating is compared with the final teacher score: bias (mean difference), MAE in points, κ per criterion, and Bland–Altman limits.
- The AI is **never** a scoring rater (scoring spec §3.3).
- Its outputs are used for (a) rater assistance (shown **after** the rater submits, to avoid anchoring [DESIGN]) and (b) learner feedback drafts.

---

## 6. Equating strategy (staged)

| Stage | Design | When | What it supports |
|---|---|---|---|
| **E0 Pre-equating by design** | All forms built to the Layer C targets and the SDP constraints (balancing spec) | Authoring | Structural equivalence (level 2) |
| **E1 Random-groups comparison** | **Server-side random assignment** of forms within the pilot cohort (engine spec §7, calibration quotas) → groups equivalent in expectation | Mock pilot, then set pilots | Mean/SD comparison; with ≥ 100 per form, linear (mean–sigma) equating [INFERENCE] |
| **E2 Anchor design (NEAT)** | Pilot-only versions of each set carry an **anchor block** of whole tasks (testlets) from the reference form M0: Lesen T5 (4 items) + Hören T2 (5 items) = 9 items ≈ 15 % | Set pilots | Tucker/Levine linear equating; robust if groups differ |
| **E3 Rasch concurrent calibration** | Rasch (1-PL) on pooled pilot + live data with anchors | ≥ ~150–200 responses per item [INFERENCE] | Item difficulty bank; form difficulty on one scale; drift detection |
| **E4 External validation** | Learners who sit the official Goethe B1 report module results (opt-in, certificate verification optional); correlation and decision consistency with Klarweg module status | Ongoing, years | The only route to any predictive claim (level 4) |

**Anchor rules:**
- Anchor tasks are exact versioned copies (schema §9).
- They are used **only in pilot versions**. Live forms ship without anchors to avoid repeated exposure for learners taking several sets.
- Exposure is capped and tracked.

**Writing/speaking:** anchor tasks aren't practical (topic memory). Equivalence relies on task specs, topic-difficulty review, rater calibration with common benchmarks and E1 comparisons.

**Score reporting [OD-25]:**
- Displayed scores use the **official conversion table unchanged**. Klarweg does not adjust displayed points by equating.
- Forms found to differ are **revised** until differences fall below the tolerance (balancing spec §5). Equating results are internal.

---

## 7. Sample-size staging (engineering guidance, not proofs) [INFERENCE]

| Stage | N (complete attempts) | Achievable |
|---|---|---|
| Mock engineering pilot | 40–60 | Workflow validation; gross item faults; first rater agreement; timing behaviour |
| Mock calibration pilot | 100–150 | Classical item stats with SE(p) ≈ 0.04–0.05; reference-form statistics; α estimates |
| Each set pilot (random groups, with anchors) | ≥ 100 per form | Form-level mean comparison (SE of the mean difference ≈ 0.6–0.8 raw points); item flags |
| Rasch bank | ≥ 200 per item across forms | Stable difficulty estimates |
| External validity | ≥ 100 learners with official results | Correlations and decision consistency (indicative) |

---

## 8. Pilot workflow
1. **Cohort:** adult learners at about B1 (Klarweg B1 completers + external), consented (research consent separate from product terms), with incentives (OD-34).
2. **Assignment:** random within cohort quotas (engine spec §7). Mock first. Sets later in randomised order.
3. **Administration:** full simulation or module; incidents captured.
4. **Scoring:** objective automatic; productive double-rated by teachers.
5. **Analysis:** nightly stats (`item_stats`, `rater_stats`); weekly calibration review; a decision log per item (keep / revise / drop).
6. **Revision:** a new item revision (schema §2) → a re-pilot of changed parts only (≥ 60 responses).
7. **Release:** a form goes `pilot → live` only when the balancing-spec tolerances and the §3 hard-fail criteria are cleared.
