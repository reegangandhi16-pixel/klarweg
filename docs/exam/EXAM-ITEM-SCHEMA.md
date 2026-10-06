# Klarweg Exam Content Model and Item Schema

> **Status:** design only. Machine-readable contract for all exam content (A1–B2 capable; B1 first). No content exists.
> **Authority:** `docs/exam/b1/GOETHE-B1-ADULT-MASTER-STANDARD.md` (the Standard) and `docs/exam/ARCHITECTURE.md`.
> **Notation:** TypeScript-style types (normative). JSON Schema files are generated from these in the build phase. `?` = optional. All enums are closed unless marked *open*.
> **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[UNKNOWN]** · **[OD-xx]**.

---

## 1. Hierarchy

```
LevelConfig (versioned, e.g. b1@1)                — rules: modules, parts, timings, scoring, rubrics
  └── Form (MOCK-M0, SET-01 … SET-10)             — one coherent exam
        └── Module (lesen | hoeren | schreiben | sprechen)
              └── Part (e.g. lesen.p3)
                    └── Task (stimulus bundle + instructions; e.g. 7 situations + 10 ads)
                          └── Item (one scorable response unit; e.g. situation 13)
Shared: Asset (text, image, audio, transcript) · Key · ScoringRule · Rubric · ProvenanceRecord
```

**Coherence rule [DESIGN]:** a Form is authored and released as a whole. Parts, tasks and items belong to exactly one form and **are never recombined across forms at runtime** (no random part mixing). Calibration anchors are explicit, versioned copies with their own IDs (§9).

---

## 2. Identity

| Entity | ID pattern | Example |
|---|---|---|
| LevelConfig | `lc:<level>@<major>` | `lc:b1@1` |
| Form | `frm:<level>:<kind>-<nn>@<rev>` | `frm:b1:set-03@2`, `frm:b1:mock-m0@1` |
| Module | `<form>/<module>` | `frm:b1:set-03@2/hoeren` |
| Part | `<module>/p<n>` | `…/hoeren/p4` |
| Task | `tsk:<level>:<ulid>` | `tsk:b1:01J9…` |
| Item | `itm:<level>:<ulid>` | `itm:b1:01J9…` |
| Asset | `ast:<sha256-prefix-16>` | `ast:9f2c…` |
| Rubric | `rub:<level>:<module>:<part>@<v>` | `rub:b1:schreiben:p1@1` |
| Release | `r<NNN>` | `r004` |

- IDs are **immutable**. Editing an item's *content* creates a new revision (`rev`, plus a `supersedes` link). Metadata-only fixes keep the ID and increment `meta_version`.
- **Display numbers** (1–30, 0 for examples) are presentation attributes on the Part/Item placement, never identity.

---

## 3. LevelConfig

```ts
type LevelConfig = {
  id: string;                         // "lc:b1@1"
  level: "A1"|"A2"|"B1"|"B2";
  variant: "adult"|"youth";           // B1: "adult" [OFFICIAL decision, Standard §3]
  address: "Sie"|"du";                // adult = Sie
  standard_ref: string;               // path + section of the Standard
  aggregation_policy: "modular_independent" | "whole_exam" | string; // B1: modular_independent [OFFICIAL]
  pass_threshold_pct: number;         // B1: 60 [OFFICIAL]
  grade_bands?: {min:number;max:number;label:string}[]; // B1: 90–100 sehr gut … 0–59 nicht bestanden [OFFICIAL]
  modules: ModuleConfig[];
};
type ModuleConfig = {
  module: "lesen"|"hoeren"|"schreiben"|"sprechen";
  order: number;                      // B1: 1..4 (recommended order [OFFICIAL])
  timing: { kind:"fixed"; minutes:number }                 // lesen 65, schreiben 60
        | { kind:"phase_plan"; plan_ref:string }           // hoeren
        | { kind:"speaking_phases"; prep_minutes:number }; // sprechen 15
  break_after_minutes?: number;       // B1 written modules: ≥15 [OFFICIAL paper] — OD-04
  navigation: "free"|"linear";
  parts: PartConfig[];
  scoring: { strategy: "objective_table"|"rubric_double_rating"; table_ref?:string; rubric_refs?:string[]; max_points:100 };
};
type PartConfig = {
  part: number;                       // 1-based
  construct: string;                  // official Prüfungsziel, e.g. "Korrespondenz lesen" [OFFICIAL S3 p.6]
  interaction: InteractionType;
  item_count: number;                 // B1 Lesen 6/6/7/7/4; Hören 10/5/7/8
  example_count: number;              // B1: 1 (Hören T1: 2 = 01/02)
  advisory_minutes?: number;          // Lesen 10/20/10/15/10; Schreiben 20/25/15
  plays?: 1|2;                        // Hören
  preread_seconds?: number;           // Hören 10/60/60/60
  points_per_item?: number;           // 1
  constraints?: Record<string, unknown>; // e.g. L3 {ads:10, null_option:true, unique_use:true, null_count:1}
};
```

---

## 4. Form, Module, Part placement

```ts
type Form = {
  id: string; level_config: string; kind: "mock"|"set"|"anchor_form";
  label: string;                      // "Mock M0", "Set 03"
  status: "draft"|"review"|"pilot"|"live"|"retired";
  release?: string;                   // r004
  modules: { module: ModuleName; parts: PartPlacement[] }[];
  topic_map: Record<string, TopicTag[]>;   // part → topics (balancing)
  sdp?: SetDifficultyProfile;               // computed (B1-SET-BALANCING-SPEC)
  authored_by: string[]; reviewed_by: string[]; created_at: string; notes?: string;
};
type PartPlacement = {
  part: number; task_ids: string[];        // usually 1 task per part; H1 = 5 tasks (texts); L2 = 2 tasks
  item_order: { item_id: string; display_no: string }[]; // includes examples ("0","01","02")
  sprechen_topic_choice?: { role:"A"|"B"; topic_task_ids:[string,string] }[]; // official: choose 1 of 2 [OFFICIAL S1 §1.2]
};
```

Assembly validation (Q1–Q3) enforces:
- B1 part counts and item counts.
- Examples present and pre-answered.
- Item order equals text/audio order where required.
- L3 has exactly one null key and three unused ads.
- H4 speaker columns cover moderator + 2 guests.

---

## 5. Task

```ts
type Task = {
  id: string; level: Level; module: ModuleName; part: number;
  interaction: InteractionType;
  instructions: { text_de: string; source: "klarweg_paraphrase"|"standard_rubric_phrase" }; // OD-08
  context_line?: string;               // e.g. L5 "why you read this document", H2 situation line
  stimuli: StimulusRef[];              // texts, ads, audio segments, images, gästebuch post, slides, planning card
  items: string[];                     // item ids (in order)
  frame?: "blog"|"email"|"forum"|"social_post"|"press"|"brochure"|"ad"|"rules"|"announcement"|"voicemail"|"radio"|"tour"|"conversation"|"discussion"|"guestbook"|"planning_card"|"slides";
  source_attribution?: { label: string; region: "DE"|"AT"|"CH" };   // fictional, e.g. "aus einer Schweizer Zeitung"
  indicators: TaskIndicators;          // §8
  topic: TopicTag[]; lexical_domains: string[]; grammar_domains: string[];
  provenance: ProvenanceRecord;        // §10
};
type StimulusRef = { role: "text"|"ad"|"image"|"audio"|"transcript"|"guestbook_post"|"slide"|"planning_card"|"partner_audio";
                     asset_id: string; label?: string; order: number;
                     speaker_ids?: string[];                // audio
                     play_count?: 1|2 };                     // audio (from PartConfig; duplicated for validation)
```

---

## 6. Item

```ts
type InteractionType =
  | "binary_choice"        // R/F, Ja/Nein
  | "mcq_single"           // a/b/c
  | "matching_pool"        // L3: options a–j + "0"; unique use
  | "speaker_assignment"   // H4: columns = speakers
  | "text_response"        // Schreiben
  | "spoken_response";     // Sprechen

type Item = {
  id: string; rev: number; meta_version: number; supersedes?: string;
  level: Level; module: ModuleName; part: number; task_id: string;
  is_example: boolean;                // examples are shown pre-answered, never scored
  interaction: InteractionType;
  stem?: string;                      // statement / question / situation / prompt (German)
  options?: { option_id: string; label: string; text?: string }[]; // binary: ["richtig","falsch"] / ["ja","nein"]; mcq: a,b,c; matching: a..j,"0"; speaker: speaker ids
  response_spec: ResponseSpec;
  key: KeySpec;                       // SERVER ONLY — stripped from packages (Q17)
  scoring: ScoringRuleRef;            // SERVER ONLY params
  anchors: Anchor[];                  // where the evidence lives: text span / audio timestamps (SERVER ONLY until review)
  distractors?: DistractorAnnotation[]; // SERVER ONLY
  indicators: ItemIndicators;         // §8
  topic: TopicTag[]; lexical_domains: string[]; grammar_domains: string[];
  asset_refs?: string[]; audio_refs?: string[]; image_refs?: string[];
  feedback: { explanation_de?: string; explanation_en?: string; explanation_hi?: string; anchor_ref?: string }; // released in review only
  calibration?: ItemStats;            // filled from pilot (B1-CALIBRATION-PLAN) — SERVER ONLY
  provenance: ProvenanceRecord;
  status: "draft"|"reviewed"|"piloted"|"live"|"retired";
};

type ResponseSpec =
  | { type:"choice"; options_ref:"inline"; allow_change:true }
  | { type:"text"; min_words_target:number; target_words:number; max_chars?:number; editor:"plain" }   // B1: 80/80/40 [OFFICIAL]
  | { type:"audio"; max_seconds:number; soft_seconds?:number; turns?: TurnSpec[] };

type KeySpec =
  | { kind:"single"; correct: string }                  // option_id, "0" allowed for matching_pool
  | { kind:"rubric"; rubric_id: string };               // writing/speaking

type ScoringRuleRef = { rule: "one_point_exact"|"rubric"; points: number };   // B1 objective: 1 [OFFICIAL]

type Anchor = { kind:"text_span"; asset_id:string; start:number; end:number }
            | { kind:"audio_span"; asset_id:string; t_start_ms:number; t_end_ms:number; play?:1|2 };

type DistractorAnnotation = {
  option_id: string;
  mechanism: TrapMechanism;           // taxonomy from GOETHE-B1-DIFFICULTY-BENCHMARK §2.3
  evidence_anchor?: Anchor;           // where the distractor's content appears
  strength: 1|2|3|4|5;                // rated (§8.3)
};
type TrapMechanism = "referent_swap"|"temporal"|"frequency"|"arithmetic"|"hedge_modal"|"causal"|"unstated_restriction"
  |"absolute_quantifier"|"polarity"|"counterfactual"|"premise"|"lexical_association"|"figurative_literal"
  |"attributed_belief"|"option_not_taken"|"negation_construction"|"perspective_inversion"|"exclusion_clause"
  |"granularity"|"near_number"|"speaker_swap"|"partial_match"|"none";
```

**Rubrics (writing/speaking):**

```ts
type Rubric = {
  id: string; module:"schreiben"|"sprechen"; part:number|"all";
  criteria: { criterion: "erfuellung"|"kohaerenz"|"wortschatz"|"strukturen"|"interaktion"|"aussprache";
              bands: { band:"A"|"B"|"C"|"D"|"E"; points:number }[];      // B1 values [OFFICIAL S3 p.43,47]
              descriptor_source: "official_structure"|"klarweg_paraphrase" }[];  // OD-08
  zero_rule: "erfuellung_E_zeroes_task";                                   // [OFFICIAL S3 p.42,46]
  length_rule?: { below_pct: 50; effect: "erfuellung_E" };                 // Schreiben [OFFICIAL S3 p.42]
};
```

---

## 7. Asset

```ts
type Asset = {
  id: string;                         // ast:<sha256 prefix>
  sha256: string; kind: "text"|"image"|"audio"|"transcript"|"rubric_doc";
  mime: "text/markdown"|"image/webp"|"image/avif"|"image/png"|"audio/webm;codecs=opus"|"audio/mp4"|"application/json";
  bytes: number; created_at: string;
  text?: { lang:"de"; body_md: string; footnotes?: {mark:string; gloss:string; variety:"AT"|"CH"}[] };
  image?: { width:number; height:number; alt_de:string; alt_en:string; information_bearing: boolean; licence: Licence };
  audio?: AudioAssetMeta;             // B1-AUDIO-SPEC §B6
  transcript?: { audio_asset:string; segments:{speaker_id:string; t_start_ms:number; t_end_ms:number; text:string}[]; alignment:"forced"|"manual" };
  licence: Licence; creator: string;
};
type Licence = { kind:"klarweg_original"|"commissioned"|"stock_licensed"|"cc0"; ref?: string; restrictions?: string };
```

Rule: no asset may have provenance from Goethe or Hueber (`provenance.reference_material_used` must be `"benchmark_only"`, §10).

---

## 8. Indicators (difficulty metadata, never only easy/medium/hard)

All numeric indicators are **computed** by `exam-build` where possible ("C"), **rated** by trained reviewers on anchored scales ("R"), or **measured** from pilot data ("M").

### 8.1 Linguistic and text indicators (Task and Item; "C")
| Field | Definition | Unit |
|---|---|---|
| `words` | Token count of the stimulus (letters + digits) | count |
| `msl` | Mean sentence length | words |
| `long_sent_share` | Share of sentences > 20 words | 0–1 |
| `sub_per_100` | Subordinating conjunctions per 100 words | rate |
| `rel_per_100` | Relative clauses per 100 words | rate |
| `k2_per_100` | Konjunktiv II forms per 100 words | rate |
| `passive_per_100` | Passive constructions per 100 words | rate |
| `mean_word_len` | Letters per token | chars |
| `long_word_share` | Share of tokens ≥ 13 letters (compound proxy) | 0–1 |
| `mattr50` | Moving-average type-token ratio, window 50 | 0–1 |
| `offlist_share` | Share of tokens outside the Klarweg A1–B1 vocabulary (compound-adjusted) | 0–1 |
| `lexical_density` | Content words / all tokens | 0–1 |
| `numbers_count` | Numerals, dates, times, prices in the stimulus | count |
| `regional_items` | AT/CH variety items (glossed) | count |

### 8.2 Information and processing indicators
| Field | Definition | Kind |
|---|---|---|
| `info_units` | Propositions relevant to any item in the task | R |
| `info_density` | `info_units` / 100 words | C from R |
| `target_distance` | Words between an item's evidence and the previous item's evidence | C |
| `evidence_span_words` | Length of the text span needed to answer | C |
| `reasoning_steps` | 1 = literal match … 4 = multi-step synthesis | R (1–4) |
| `inference_demand` | 1 = literal … 5 = cross-text inference | R (1–5) |
| `working_memory` | Simultaneous elements to hold (L3: needs × candidate ads; Hören: details per play) | R (1–5) |
| `processing_load_wpm` | Words to read or hear ÷ available minutes | C |
| `time_pressure` | `processing_load_wpm` ÷ the Layer C target for the part | C (ratio) |
| `task_complexity` | Number of interacting constraints (L3 situation constraints, L5 condition + exception) | C/R |
| `distractor_strength` | Max/mean of `DistractorAnnotation.strength` | R |
| `distractor_plausibility_gap` | Rated closeness of the best distractor to the key (1 = obviously wrong … 5 = equally plausible) | R |
| `ambiguity_risk` | Reviewer flag 0/1/2 (none / minor / must fix) | R |

### 8.3 Rating scales (anchored; reviewers are calibrated on examples)
`inference_demand` and `distractor_strength` use 1–5 anchors as defined in `GOETHE-B1-DIFFICULTY-BENCHMARK.md` §2.2. Two reviewers rate independently. If they differ by 2 or more, a third reviewer decides. The recorded value is the mean of the agreeing pair.

### 8.4 Listening indicators (Task; "C" from audio + transcript)
| Field | Definition |
|---|---|
| `speech_rate_wpm` | Transcript words ÷ speech duration (excluding leading/trailing silence) |
| `articulation_rate` | Syllables per second of phonation (pauses > 250 ms removed) |
| `pause_ratio` | Silence time ÷ total |
| `mean_pause_ms`, `long_pauses` | Pause characteristics (> 1 s) |
| `speaker_count` | Distinct voices |
| `speaker_switches_per_min` | Turn changes per minute |
| `overlap_ms` | Overlapping speech (target 0 at B1) |
| `relevant_details` | Item-targeted details in the segment |
| `distractor_details` | Mentioned-but-wrong option values |
| `distractor_density` | `distractor_details` ÷ minute |
| `detail_spacing_s` | Median seconds between targeted details |
| `plays` | 1 or 2 |
| `voice_contrast` | 1–3 (same gender/age, partial contrast, clear contrast) |
| `accent` | "DE-standard" \| "AT" \| "CH" |
| `noise_floor_db`, `loudness_lufs` | Audio quality (audio spec) |

### 8.5 Writing/speaking indicators (Task; "R" + "C")
| Field | Definition |
|---|---|
| `functions` | List from {describe, narrate, justify, propose, invite, accept, decline, apologise, request, thank, inform, compare, opine, react, ask, answer, plan, negotiate, present, conclude} |
| `function_count` | Count |
| `planning_demand` | 1–5 (bulleted guidance = lower; unscaffolded opinion = higher) |
| `interaction_demand` | 0–5 (0 monologue … 5 negotiation with unpredictable partner) |
| `linguistic_flexibility` | Required tense/mood/register range (count of required forms: past narration, future plan, Konjunktiv requests, opinion syntax) |
| `register` | "du" \| "Sie" \| "forum_neutral" |
| `topic_abstraction` | 1 = personal/concrete … 3 = societal/abstract |
| `stimulus_words` | Words in the prompt/stimulus |
| `target_words` | 80/80/40 (Schreiben) [OFFICIAL] |
| `prep_minutes`, `speak_seconds_target` | Sprechen |

### 8.6 Empirical indicators (Item; "M"; calibration plan)
`p_value` (facility), `r_pb` (corrected point-biserial), `D_ul27` (upper–lower discrimination), `option_props`, `option_r_pb`, `omit_rate`, `median_time_s` (where measurable), `changed_answer_rate`, `rasch_b` (when sample allows), `n`, `sample_id`, `computed_at`.

### 8.7 Aggregations
`TaskIndicators` = §8.1–8.5 at task level. `ItemIndicators` = §8.2 + item-specific `evidence_span_words`, `target_distance`, `reasoning_steps`, `inference_demand`, `distractor_strength`, plus §8.6 when measured. The **Set Difficulty Profile** is defined in `B1-SET-BALANCING-SPEC.md`.

---

## 9. Anchors (calibration)

```ts
type AnchorLink = { anchor_item_id: string; source_item_id: string; anchor_set: string; exposure_cap: number };
```

Anchor items are **exact copies** (same content and key) of reference-form items, carried in other forms for equating (calibration plan §6). They are flagged `is_anchor` and excluded from per-form originality duplicate checks. Exposure is tracked.

---

## 10. Provenance

```ts
type ProvenanceRecord = {
  author_ids: string[]; created_at: string; revised_at?: string;
  reference_material_used: "none"|"benchmark_only";   // benchmark_only = structure/metrics, never content
  originality_check: { method:"ngram8"; max_overlap:number; corpus_versions:string[]; passed:boolean; checked_at:string };
  reviews: { reviewer_id:string; role:"content"|"language"|"teacher"|"originality"|"accessibility"; verdict:"approve"|"revise"|"reject"; at:string; notes?:string }[];
  standard_refs: string[];          // e.g. ["Standard §6.1", "Layer C L1"]
};
```

---

## 11. Package views (what the browser may see)

| Field group | Authoring source | Keyless package (browser) | Review package (after submission) |
|---|---|---|---|
| Stem, options, stimuli (asset IDs) | ✓ | ✓ (just-in-time per module/part) | ✓ |
| Example items + their answers | ✓ | ✓ | ✓ |
| `key`, `scoring` params | ✓ | ✗ | Correct answer only |
| `anchors` (evidence spans/timestamps) | ✓ | ✗ | ✓ |
| `distractors`, indicators, calibration, provenance | ✓ | ✗ | ✗ (admin only) |
| Transcripts | ✓ | ✗ | ✓ |
| Rubric structure (criteria/bands/points) | ✓ | ✓ | ✓ |
| AI prompts, rater notes | ✓ | ✗ | ✗ |
