/* Server-side scoring engine — pure functions, no I/O, golden-tested.
   Official rules are applied only where documented (register OD-19):
     objective modules  raw correct count → official 30→100 lookup table
     Sprechen           mean of two ratings, rounded half-up (official §5)
     Schreiben          rounding and third-rating combination UNRESOLVED —
                        raw values are stored, status "pending_rule", unless a
                        level config explicitly resolves them.
   Keys and rules never leave the server: these results carry counts and
   points only, never per-item keys. */

export const SCORING_VERSION = 'scoring@1';
export const BANDS = ['A', 'B', 'C', 'D', 'E'];   // band index 0..4 → rubric value list position

export function roundHalfUp(x) {
  // integer-safe half-up for non-negative point values (avoids 0.49999… float error)
  return Math.floor(Math.round(x * 1000) / 1000 + 0.5);
}

function sameAnswer(key, value) {
  if (!key || key.kind !== 'single') return false;
  return value && typeof value === 'object' && typeof value.option_id === 'string' && value.option_id === key.correct;
}

/* items: [{item_id, points}] (points 1 = scored, 0 = example/unscored);
   keys: {item_id: key}; responses: {item_id: value} */
export function objectiveRaw(items, keys, responses) {
  let correct = 0, incorrect = 0, unanswered = 0;
  for (const it of items) {
    if (!it.points) continue;
    const v = responses[it.item_id];
    if (!v || v.option_id === null || v.option_id === undefined) { unanswered++; continue; }
    if (sameAnswer(keys[it.item_id], v)) correct += it.points; else incorrect++;
  }
  return { raw: correct, correct, incorrect, unanswered, scored_items: items.filter((i) => i.points).length };
}

export function convert(table, raw) {
  if (!table || !table.map) throw new Error('conversion table missing');
  if (!Number.isInteger(raw) || raw < 0 || raw > table.max_raw) throw new Error(`raw ${raw} outside 0..${table.max_raw}`);
  const p = table.map[String(raw)];
  if (!Number.isInteger(p)) throw new Error(`no table entry for raw ${raw}`);
  return p;
}

export function grade(cfg, points) {
  if (points === null || points === undefined) return { pass: null, predikat: null };
  const band = cfg.grade_bands.find((b) => points >= b.min && points <= b.max);
  return { pass: points >= cfg.pass_threshold_points, predikat: band ? band.label : null };
}

export function scoreObjectiveModule(cfg, moduleCfg, items, keys, responses) {
  const r = objectiveRaw(items, keys, responses);
  const table = cfg.objective_tables[moduleCfg.scoring.table];
  if (r.scored_items !== table.max_raw) throw new Error(`module has ${r.scored_items} scored items, table expects ${table.max_raw}`);
  const points = convert(table, r.raw);
  return { status: 'final', raw: r.raw, raw_unrounded: r.raw, raw_max: table.max_raw, points, max_points: moduleCfg.scoring.max_points,
    ...grade(cfg, points), rule_flags: { correct: r.correct, incorrect: r.incorrect, unanswered: r.unanswered } };
}

/* One rating of one rubric: bands {criterion: 'A'..'E'} → points per criterion. */
export function rubricTotal(rubric, bands) {
  const points = {};
  for (const [crit, values] of Object.entries(rubric.criteria)) {
    const b = bands?.[crit];
    const idx = BANDS.indexOf(b);
    if (idx < 0 || idx >= values.length) throw new Error(`criterion ${crit}: band ${b} invalid`);
    points[crit] = values[idx];
  }
  for (const c of Object.keys(bands || {})) if (!(c in rubric.criteria)) throw new Error(`unknown criterion ${c}`);
  let total = Object.values(points).reduce((a, b) => a + b, 0);
  let zero_rule_applied = false;
  if (rubric.zero_rule === 'erfuellung_E' && bands.erfuellung === 'E') { total = 0; zero_rule_applied = true; }
  return { points, total, zero_rule_applied };
}

export const rubricMax = (rubric) => Object.values(rubric.criteria).reduce((a, v) => a + Math.max(...v), 0);

/* ratings: [{item_id, rubric_id, round, rater_kind, total}] — AI ratings never count.
   units: [{item_id, rubric_id}] — every unit must be rated in rounds 1 and 2. */
export function scoreRubricModule(cfg, moduleCfg, units, ratings) {
  const human = ratings.filter((r) => r.rater_kind === 'teacher' || r.rater_kind === 'lead');
  const max = units.reduce((n, u) => n + rubricMax(cfg.rubrics[u.rubric_id]), 0);
  const byRound = (round) => units.map((u) => human.find((r) => r.item_id === u.item_id && r.round === round));
  const r1 = byRound(1), r2 = byRound(2), r3 = byRound(3);
  const missing = units.filter((_, i) => !r1[i] || !r2[i]).map((u) => u.item_id);
  if (missing.length) return { status: 'pending_rating', raw: null, raw_unrounded: null, raw_max: max, points: null, max_points: moduleCfg.scoring.max_points,
    pass: null, predikat: null, rule_flags: { awaiting_ratings: missing } };
  const A = r1.reduce((n, r) => n + r.total, 0);
  const B = r2.reduce((n, r) => n + r.total, 0);
  const mean = (A + B) / 2;
  const pass = cfg.pass_threshold_points;
  const flags = { rater_totals: [A, B], mean };
  const tr = moduleCfg.scoring.third_rating;
  if (tr && tr.trigger === 'one_below_one_at_or_above_pass_and_mean_below_pass' && ((A < pass) !== (B < pass)) && mean < pass) {
    flags.third_rating_required = true;
    if (r3.some((r) => !r)) return { status: 'pending_rating', raw: null, raw_unrounded: mean, raw_max: max, points: null, max_points: moduleCfg.scoring.max_points, pass: null, predikat: null,
      rule_flags: { ...flags, awaiting_ratings: units.filter((_, i) => !r3[i]).map((u) => u.item_id) } };
    const C = r3.reduce((n, r) => n + r.total, 0);
    flags.third_rater_total = C;
    if (tr.combination === 'unresolved') return { status: 'pending_rule', raw: null, raw_unrounded: mean, raw_max: max, points: null, max_points: moduleCfg.scoring.max_points, pass: null, predikat: null,
      rule_flags: { ...flags, unresolved: 'third_rating_combination' } };
    if (tr.combination === 'third_replaces_lower') {   // configurable option, not an official rule
      const m2 = (Math.max(A, B) + C) / 2;
      return finishRounded(cfg, moduleCfg, m2, max, { ...flags, combined_with_third: m2 });
    }
    throw new Error(`unknown third-rating combination ${tr.combination}`);
  }
  return finishRounded(cfg, moduleCfg, mean, max, flags);
}

function finishRounded(cfg, moduleCfg, value, max, flags) {
  const rounding = moduleCfg.scoring.rounding;
  let points;
  if (Number.isInteger(value)) points = value;                       // no rounding needed under any rule
  else if (rounding === 'half_up') points = roundHalfUp(value);
  else if (rounding === 'floor') points = Math.floor(value);
  else if (rounding === 'unresolved') {
    return { status: 'pending_rule', raw: null, raw_unrounded: value, raw_max: max, points: null, max_points: moduleCfg.scoring.max_points, pass: null, predikat: null,
      rule_flags: { ...flags, unresolved: 'rounding' } };
  } else throw new Error(`unknown rounding ${rounding}`);
  return { status: 'final', raw: points, raw_unrounded: value, raw_max: max, points, max_points: moduleCfg.scoring.max_points, ...grade(cfg, points), rule_flags: flags };
}

/* Rubric units of a productive module: every rated item, plus Aussprache once for Sprechen. */
export function rubricUnits(cfg, module, items) {
  const units = items.filter((i) => i.rubric_id).map((i) => ({ item_id: i.item_id, rubric_id: i.rubric_id }));
  if (module === 'sprechen') {
    const pron = Object.entries(cfg.rubrics).find(([, r]) => r.module === 'sprechen' && r.part === 'all');
    if (pron) units.push({ item_id: 'sprechen:pron', rubric_id: pron[0] });
  }
  return units;
}
