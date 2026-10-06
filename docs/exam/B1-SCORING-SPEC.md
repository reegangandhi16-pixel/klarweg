# B1 Scoring Specification (server-side scoring engine + result model)

> **Status:** design only. The scoring engine runs **only** in the `klarweg-exam` Worker. The browser never receives answer keys, hidden scoring parameters or pass-calculation logic beyond the public display tables.
> **Sources:** Standard §7–§8 (official rules with citations S1, S3, S4). **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[UNKNOWN]** · **[OD-xx]**.
> **Golden rule:** all results are **Klarweg simulation results**, never "Goethe scores" (OS §23.5; Standard §7B).

---

## 1. Layers

```
L1 Objective scoring      (Lesen, Hören items)            → item points
L2 Rubric rating          (Schreiben, Sprechen)          → per-rater criterion bands
L3 Rating aggregation     (double/third rating rules)    → task/part points
L4 Module scoring         (raw → module points 0–100)    → module score
L5 Status ("certification-style")  (≥ 60 per module)     → bestanden / nicht bestanden + Prädikat
L6 Educational feedback   (explanations, criterion feedback, AI commentary) → Klarweg feedback
L7 Calibration analytics  (admin only)                   → item/rater stats
```

L1–L5 are deterministic and versioned (`scoring_version`). L6 is advisory content and **never changes L1–L5**.

---

## 2. Objective scoring (L1)

1. Input: `responses_current` at module submission (frozen copy `responses_final`), `item_keys`.
2. Per non-example item: `points = (response == key.correct) ? 1 : 0` [OFFICIAL S1 §4.1: 1 or 0 per Messpunkt].
   - Unanswered = 0.
   - L3: key may be `"0"`; a response `"0"` is an answer.
   - Matching unique use is a **presentation rule**: if the learner assigns the same ad twice, both are scored independently against the keys (the official sheet doesn't prevent it [INFERENCE from S3 p.30]; the UI warns).
3. `raw_lesen = Σ points` (0–30); `raw_hoeren` likewise.
4. Conversion uses the **lookup table**, not floating-point multiplication [OFFICIAL S1 §4.1–4.2]:

| Raw | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Points | 100 | 97 | 93 | 90 | 87 | 83 | 80 | 77 | 73 | 70 | 67 | 63 | **60** | 57 | 53 | 50 |

| Raw | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Points | 47 | 43 | 40 | 37 | 33 | 30 | 27 | 23 | 20 | 17 | 13 | 10 | 7 | 3 | 0 |

The table lives in `lc:b1@1.objective_table`. Unit test: all 31 rows.

---

## 3. Rubric rating (L2): Schreiben and Sprechen

### 3.1 Criteria and point values [OFFICIAL S3 p.42–43, 46–47; S4]
| Module · part | Criterion (A/B/C/D/E points) | Max |
|---|---|---|
| Schreiben T1 | Erfüllung 10/7.5/5/2.5/0 · Kohärenz 10/7.5/5/2.5/0 · Wortschatz 10/7.5/5/2.5/0 · Strukturen 10/7.5/5/2.5/0 | 40 |
| Schreiben T2 | same as T1 | 40 |
| Schreiben T3 | Erfüllung 4/3/2/1/0 · Kohärenz 4/3/2/1/0 · Wortschatz 6/4.5/3/1.5/0 · Strukturen 6/4.5/3/1.5/0 | 20 |
| Sprechen T1 | Erfüllung 8/6/4/2/0 · Interaktion 4/3/2/1/0 · Wortschatz 8/6/4/2/0 · Strukturen 8/6/4/2/0 | 28 |
| Sprechen T2 | Erfüllung 12/9/6/3/0 · Kohärenz 4/3/2/1/0 · Wortschatz 12/9/6/3/0 · Strukturen 12/9/6/3/0 | 40 |
| Sprechen T3 | Erfüllung 16/12/8/4/0 | 16 |
| Sprechen T1–3 | Aussprache 16/12/8/4/0 | 16 |

Rules [OFFICIAL]:
- Only listed values are allowed (no intermediate values) [S1 §4.3, §5].
- **Erfüllung = E ⇒ the task scores 0** [S3 p.42, 46].
- Schreiben Erfüllung E when the text is under 50 % of the required words or off-topic [S3 p.42].
- Only text in the text field counts (digital) [S2 Anhang].
- The Sprechen introduction is not rated [S1 §5].

### 3.2 Rating record
```ts
type Rating = {
  id; attempt_id; module:"schreiben"|"sprechen"; task:1|2|3|"pron";
  rater_id; rater_kind:"ai"|"teacher"|"lead"; round:1|2|3;
  bands: Record<Criterion,"A"|"B"|"C"|"D"|"E">;   // validated against rubric
  points: Record<Criterion, number>;              // derived from bands (never typed)
  task_total: number;                             // after the zero rule
  evidence?: { criterion; quote?: string; t_ms?: number; note: string }[];
  blind: true;                                    // raters never see other ratings in rounds 1–2
  status:"draft"|"submitted"|"superseded"; submitted_at;
};
```

### 3.3 Who rates [DESIGN; OD-13]
| Rater | Role | Counts toward the score? |
|---|---|---|
| AI pre-rater (Tutor action `rate_writing_b1` / `rate_speaking_b1`) | Proposes bands + evidence, flags (length < 50 %, off-topic, missing function) | **No.** Advisory to raters and used for learner feedback drafts. Never an official-style rater |
| Teacher rater 1 + Teacher rater 2 | Independent, blind | **Yes** (Bewertung 1 and 2, mirrors the official two raters [OFFICIAL S1 §4.3, §5]) |
| Lead rater | Third rating (Schreiben trigger) and adjudication | Yes, per §4.3 |

[DESIGN] Fallback for non-pilot practice: if no teacher capacity is available (OD-13), a result can be shown as "**vorläufige KI-Einschätzung**" (provisional AI estimate). This is **excluded** from L4/L5 status (no bestanden/nicht bestanden) and labelled clearly.

**Aussprache [DESIGN]:** AI pre-rating of Aussprache from transcripts is **not valid** (a transcript loses pronunciation). Aussprache is rated by teachers from audio only. An audio-model pre-rating may be explored later as advisory.

---

## 4. Aggregation (L3)

### 4.1 Sprechen [OFFICIAL S1 §5]
`module_raw = mean(total_r1, total_r2)`, rounded to whole points: **≤ .49 down, ≥ .5 up**. Totals are sums over the T1, T2, T3 and Aussprache criteria. The official text averages the two ratings of the module [S1 §5]. [DESIGN] Klarweg averages at module level, as stated.

### 4.2 Schreiben [OFFICIAL S1 §4.3]
`module_raw = mean(total_r1, total_r2)`, rounded "auf volle Punkte auf- bzw. abgerundet".
- **The rounding threshold is not specified for Schreiben** [UNKNOWN]. The Sprechen rule must not be assumed to apply.
- **[OD-07]** Options: (a) half-up (as in Sprechen); (b) half-down; (c) banker's rounding.
- Proposal (a), labelled as a Klarweg decision. Until the owner decides, the engine stores the unrounded mean and flags `rounding_rule: "pending_OD-07"`.

Note: Schreiben criteria include half points (7.5, 2.5, 4.5, 1.5), so means can end in .25/.5/.75, which makes the rule material.

### 4.3 Third rating (Schreiben) [OFFICIAL S1 §4.3]
**Trigger:** one rater below 60 **and** the other at or above 60 **and** the mean below 60.

- **How the third rating combines** is not specified publicly [UNKNOWN].
- **[OD-30]** Options: (a) the third rating replaces the mean; (b) the mean of the third and the closer rating; (c) the mean of all three.
- Proposal (a) "Bewertung 3 entscheidet". Flagged until decided.
- No third-rating rule is published for Sprechen [UNKNOWN]. Klarweg uses lead adjudication only for incidents (unratable audio).

### 4.4 Disagreement monitoring (not score-changing)
- Per criterion, |band difference| ≥ 2 → `review_flag` to the lead rater (quality monitoring; calibration plan §5).
- The score follows the official aggregation regardless.

---

## 5. Module scoring and status (L4–L5)

| Module | Module points | Pass | Prädikat [OFFICIAL S1 §6.2] |
|---|---|---|---|
| Lesen | table(raw_lesen) | ≥ 60 | 100–90 sehr gut · 89–80 gut · 79–70 befriedigend · 69–60 ausreichend · 59–0 nicht bestanden |
| Hören | table(raw_hoeren) | ≥ 60 | same |
| Schreiben | aggregated 0–100 | ≥ 60 | same |
| Sprechen | aggregated 0–100 | ≥ 60 | same |

- **No combined total score and no overall pass** [OFFICIAL S2 §14.7; B1 is modular].
- [DESIGN] Klarweg may show "4/4 Module bestanden (Klarweg-Simulation)" as a summary, never a summed score.
- Module status values: `not_taken | pending_rating | provisional_ai_only | bestanden | nicht_bestanden | void`.

---

## 6. Result model (learner-facing) [DESIGN]

```ts
type ExamResult = {
  attempt_id; form_label: "Mock M0"|"Set 03"; level:"B1"; variant:"adult";
  disclaimer: "Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts.";
  completed_at; scoring_version; level_config:"lc:b1@1";
  modules: {
    module; status; raw?: number; raw_max?: 30; points?: number; points_max: 100; percent?: number; predikat?: string;
    parts: { part; raw; raw_max; time_used_s?: number; note_key?: string }[];        // per-part feedback
    items?: { display_no; correct: boolean; your_answer; correct_answer; explanation; evidence_ref }[]; // released after submission (OS §23.1)
    writing?: { task; words; target; criteria: {criterion; band; points}[]; feedback_md; text_ref }[];
    speaking?: { part; criteria: {criterion; band; points}[]; feedback_md; recording_ref?: string }[];
    rating_state?: "pending"|"final"|"provisional_ai";
  }[];
  summary: { modules_passed: number; modules_taken: number };      // never a sum of points
  feedback: EducationalFeedback;                                   // L6, separately labelled
};
type EducationalFeedback = {
  label: "Klarweg-Lernfeedback";
  strengths: string[]; next_steps: string[];
  trap_patterns?: { mechanism; count }[];       // e.g. "Zeitangaben verwechselt: 3×"
  chapter_links?: { chapter_id; reason }[];     // links into the Klarweg course
};
```

**Admin-only analytics object** (never sent to learners): item-level stats, rater ids, AI vs teacher deltas, incident flags, timing distributions, assignment reason.

**Wording rules:**
- Never "Goethe-Ergebnis", "Sie werden bestehen", or predicted scores with confidence intervals (OS §23.5).
- Visual-system §7.7's sample wording ("would likely score X/Y on Goethe B1") is **not used** (OD-10 of the DIGITAL-SPEC, resolved by OS precedence).

---

## 7. Data flow

```
submit(module) ─► freeze responses_final / writing_final / recordings manifest
   ├─ objective? ─► L1 score (sync, < 1 s) ─► L4/L5 ─► results (module final)
   └─ productive? ─► queue: AI pre-rating job (Tutor) ─► rating tasks (teacher R1, R2, blind)
                        ─► both submitted ─► L3 aggregation ─► third-rating trigger? ─► lead R3
                        ─► L4/L5 ─► results (module final) ─► notify learner
L6 feedback assembled after the module is final (AI drafts → reviewed for teacher-rated modules)
L7 analytics nightly (Cron) ─► item_stats, rater_stats
```

- Every score row stores `scoring_version` and `inputs_sha` (hash of frozen inputs).
- **Re-scoring** (key correction) creates a new version, keeps history and notifies affected learners (OD-31).
- Keys are loaded from `item_keys` (D1). They are never logged and never serialised to responses.

---

## 8. Verification [DESIGN]
- **Golden tests:** synthetic attempts with known answers, covering:
  - all 31 table rows
  - the L3 "0" key
  - unanswered items
  - double use of an ad
- **Rubric tests:**
  - every band combination maps to points
  - the zero rule
  - the < 50 % length rule
  - rounding variants behind the OD-07 flag
  - the third-rating trigger boundaries (59.5/60/60.5)
- **Property test:** the module score is monotonic in raw.
- **Security test:** no endpoint returns `item_keys` content before submission. The package scanner (Q17) checks this.
