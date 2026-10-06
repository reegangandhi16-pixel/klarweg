# B1 Set-Balancing Specification (Sets 01–10)

> **Status:** design only. No sets are authored.
> **Goal:** SET 01 ≈ SET 02 ≈ … ≈ SET 10 in overall and per-module difficulty, by **design** (Stage E0) and then by **pilot evidence** (`B1-CALIBRATION-PLAN.md`). This is semi-quantitative, never an Easy/Medium/Hard label.
> **Basis:** Standard §10 (Layer C) and §11; indicator definitions in `EXAM-ITEM-SCHEMA.md` §8. **Labels:** **[DESIGN]** · **[OD-xx]**.

---

## 1. Set Difficulty Profile (SDP)

Each form gets a 24-indicator profile. Each indicator is standardised to the Layer C target:

`z = (value − centre) / half_width`. |z| ≤ 1 means "inside the target band".

| # | Indicator | Centre | Half-width | Hard limits |
|---|---|---|---|---|
| 1 | L1 words | 335 | 15 | 300–370 |
| 2 | L1 MSL | 15.0 | 1.5 | ≤ 18 |
| 3 | L1 off-list share | 0.045 | 0.02 | ≤ 0.09 |
| 4 | L2 mean words (A, B) | 202 | 20 | 160–240 each |
| 5 | L2 mean off-list | 0.08 | 0.02 | ≤ 0.13 |
| 6 | L3 ads words (total) | 325 | 25 | ≤ 400 |
| 7 | L4 comments words (total) | 435 | 15 | 400–470 |
| 8 | L5 off-list | 0.08 | 0.02 | ≤ 0.15 |
| 9 | Lesen mean inference rating (1–5) | 3.0 | 0.3 | 2.4–3.6 |
| 10 | Lesen mean distractor strength (1–5) | 3.2 | 0.3 | 2.6–3.8 |
| 11 | L3 mean constraints per situation | 2.0 | 0.4 | 1.2–3.0 |
| 12 | Lesen total words (texts + items) | 2,150 | 100 | 1,950–2,350 |
| 13 | H2 net speech rate (w/min) | 158 | 6 | 145–170 |
| 14 | H3 net speech rate | 155 | 8 | 140–170 |
| 15 | H4 net speech rate | 165 | 8 | 150–180 |
| 16 | H4 pre-read words | 100 | 15 | ≤ 120 |
| 17 | H2 numeric items (0–3) | 1.5 | 1 | 0–3 |
| 18 | H4 voice contrast (1–3) | 2.7 | 0.3 | ≥ 2 |
| 19 | Schreiben functions (A1 + A3) | 5 | 1 | 4–6 |
| 20 | S2 stimulus words | 42 | 8 | 30–55 |
| 21 | Schreiben topic abstraction (1–3) | 2.0 | 0.4 | – |
| 22 | SP1 points (4 + open) | 4 | 0 | must be 4 + "…" |
| 23 | SP2 topic abstraction (mean of the 2 choices) | 2.0 | 0.4 | – |
| 24 | SP2 topic-pair difficulty gap (0–4) | 0 | 1 | ≤ 1 |

Centres derive from the official adult measurements (Standard §10 Layer B) and the Layer C targets. Indicators 9–11 and 18–24 are reviewer-rated with anchored scales (schema §8.3).

**Composites:**
- `C_set` = mean z over all 24.
- `C_module` = mean z of that module's indicators: Lesen 1–12, Hören 13–18, Schreiben 19–21, Sprechen 22–24.

---

## 2. Design-time constraints (gate Q7; all mandatory)
1. Every indicator within its **hard limits**.
2. |z| ≤ 1 for **≥ 20 of 24** indicators.
3. **C_set ∈ [−0.25, +0.25]**, and the range of C_set across the 10 sets is **≤ 0.30**.
4. **C_module ∈ [−0.40, +0.40]** for each module. No set has two modules > +0.30, or two < −0.30.
5. **Hotspot rule:**
   - Each set has exactly **1–2 "demand peaks"** (indicators with z > +0.7).
   - They are in different modules.
   - Across the 10 sets, each module receives a peak in 3–6 sets (prevents one set concentrating all the hard parts).
6. **Mirror rule:** a set with a peak in a module must not also have a trough (z < −0.7) elsewhere in the same module (to avoid hidden averaging).

## 3. Quotas across Sets 01–10

### 3.1 Task types and frames
| Part | Quota across 10 sets |
|---|---|
| L1 frame | blog ≥ 3, e-mail ≥ 3, forum/social ≥ 2 |
| L2 sources | each set: 1 DE + 1 AT/CH source; brochure source in 1–3 sets |
| L5 document type | house rules ≥ 3, terms of use/conditions ≥ 3, registration/info sheet ≥ 2, package leaflet/warranty ≤ 2 |
| H1 genres per set | ≥ 2 voicemails, ≥ 1 public announcement, ≥ 1 radio item |
| H2 venue type | museum/tour ≤ 4; workplace/course/briefing ≥ 3; leisure/sport ≥ 2 |

### 3.2 Distractor mechanisms (taxonomy in schema §6)
- Per set, L1 + L2 use **≥ 5 distinct mechanisms**, with no mechanism > 2× per part.
- Across 10 sets, every mechanism in {referent_swap, temporal, hedge_modal, causal, unstated_restriction, absolute_quantifier, polarity, counterfactual, perspective_inversion, exclusion_clause, granularity, near_number} appears ≥ 3 times.

### 3.3 Answer keys
- L1 3 richtig / 3 falsch (±1).
- L4 3–4 Ja.
- H3 3–4 richtig.
- H1 R/F 2–3 richtig of 5.
- MC letters per module 30–40 % each.
- No run of identical keys > 3.
- L3: "0" position varies (each position 13–19 used ≤ 2× across sets); ad letters of keys spread (no letter used as a key in > 70 % of sets).
- H4: each speaker 2–4 statements (example excluded).

### 3.4 Topics (adult domains; Standard §11.2-7)
- Domains: work · study/training · housing · health · consumer/services · mobility/travel · media/digital · environment · social life/family · culture/leisure.
- Each domain appears in **≥ 3 and ≤ 6 sets** over all tasks.
- No domain is repeated within one set's Lesen, or within one set's Hören.
- SP2 topic pairs never share a domain.
- Sets avoid the topics of the official Modellsatz/Übungssatz and the Hueber book (likely external practice; originality).

### 3.5 Listening characteristics
- T3: man + woman in ≥ 8 sets; otherwise the same gender with strong age contrast.
- T4: mixed-gender guests in ≥ 7 sets; the moderator gender alternates (5/5 ± 1).
- AT/CH accent: ≤ 1 part per set; present in 4–6 sets.
- Per-set voice count 9–12 (audio spec B3).

### 3.6 Writing and speaking
- A1 operator triplets: ≥ 4 distinct triplets over 10 sets (the official triplet describe/justify/propose in ≤ 4 sets).
- A3 function pairs: ≥ 5 distinct pairs (apologise + explain, request + justify, thank + invite, decline + reason, inform + ask …).
- A3 addressee roles: course leader, employer, landlord/neighbour, service provider, institution: each ≥ 1×.
- SP1 scenarios: ≥ 6 distinct planning types.
- SP2: both topics rated for equal difficulty (indicator 24).

## 4. Assembly workflow
1. **Blueprint allocation (before writing):** fill a 10 × 24 allocation grid that pre-assigns domains, frames, voice configurations, trap mechanisms, key patterns and planned demand peaks per set, satisfying §2–§3 (constraint solver or spreadsheet check).
2. **Authoring** per allocation.
3. **Profile computation:** `exam-build profile` computes indicators 1–24 + quotas.
4. **Repair loop:** an indicator out of band → revise the specific task (never change official structure or times).
5. **Review:** content, language, teacher, originality, accessibility sign-offs.
6. **Pilot** (calibration plan) → **empirical tolerance check** (§5) → release.

## 5. Empirical tolerances (after pilot; random groups, with anchors)
| Metric | Tolerance vs the M0 reference form |
|---|---|
| Lesen raw mean | ± 1.5 raw points (≈ ± 5 %) |
| Hören raw mean | ± 1.5 raw points |
| Lesen/Hören pass-rate difference | ≤ 10 percentage points |
| Schreiben/Sprechen mean points | ± 5 points (of 100) |
| Item hard-fail count | 0 |
| Flagged items per module | ≤ 3 |

Forms outside tolerance are **revised and re-piloted**. Displayed scores are not transformed (OD-25).

## 6. Outputs per set (release package)
- SDP vector and composites
- quota report
- key-balance report
- topic matrix row
- voice sheet
- trap-mechanism map
- originality report
- reviewer sign-offs
- pilot statistics summary
- release decision log
