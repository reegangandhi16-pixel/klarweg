#!/usr/bin/env node
/* Exam form validator — every release must pass with zero errors.
   Library: validateForm(formDir, { levelsDir }) → { ok, errors[], warnings[], stats }
   CLI:     node exam-content/tools/validate.mjs [formDir ...] [--json]
            (no dirs → every form under exam-content/forms/**) */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  MODULES, FORM_KINDS, FORM_STATUS, ITEM_STATUS, ITEM_INTERACTIONS, STIMULUS_ROLES, ASSET_KINDS, LICENCE_KINDS, FRAMES,
  TRAP_MECHANISMS, REFERENCE_USE, ID, FORBIDDEN_ITEM_FIELDS, TASK_INDICATORS, ITEM_INDICATORS_OBJECTIVE, REQUIRED, countWords
} from '../schemas/content-model.mjs';
import { loadForm, loadLevelConfig, hoerenPlan, speakingPlan, toneWav, sha256 } from './lib.mjs';
import { readAssetAudio, AudioDurationError, DURATION_TOLERANCE_MS } from './audio-duration.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OBJECTIVE = new Set(['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment']);
const PRODUCTIVE = new Set(['text_response', 'spoken_response']);

export function validateForm(formDir, { levelsDir = path.join(ROOT, 'levels') } = {}) {
  const errors = [];
  const warnings = [];
  const E = (code, msg) => errors.push({ code, msg });
  const W = (code, msg) => warnings.push({ code, msg });
  const loaded = loadForm(formDir);
  if (loaded.missing) {
    for (const f of loaded.missing) E('missing_file', `${f} is missing`);
    return { ok: false, errors, warnings, stats: {} };
  }
  const { form, tasks, items, keys, assets } = loaded;
  const keyMap = keys?.keys || {};

  /* ---- required fields, ids, enums ---- */
  const req = (kind, obj, label) => { for (const f of REQUIRED[kind]) if (obj?.[f] === undefined || obj?.[f] === null) E('required_field', `${label}: missing ${f}`); };
  req('form', form, 'form');
  if (!ID.form.test(form.id || '')) E('bad_id', `form id ${form.id}`);
  if (!FORM_KINDS.includes(form.kind)) E('bad_enum', `form.kind ${form.kind}`);
  if (!FORM_STATUS.includes(form.status)) E('bad_enum', `form.status ${form.status}`);
  const idRev = Number((form.id || '').split('@')[1]);
  if (!Number.isInteger(form.rev) || form.rev < 1) E('bad_revision', `form.rev must be an integer ≥ 1 (got ${form.rev})`);
  else if (idRev !== form.rev) E('bad_revision', `form id revision @${idRev} ≠ form.rev ${form.rev}`);
  if (form.timing_overrides && form.kind !== 'synthetic') E('override_not_allowed', 'timing_overrides are allowed only for kind=synthetic');
  if (keys?.form_id !== form.id) E('key_form_mismatch', `keys.json form_id ${keys?.form_id} ≠ ${form.id}`);

  const levelConfig = loadLevelConfig(levelsDir, form.level_config);
  if (!levelConfig) { E('level_config', `unknown level config ${form.level_config}`); return { ok: false, errors, warnings, stats: {} }; }
  const level = levelConfig.level;
  const lvl = level.toLowerCase();

  const seen = new Map();
  const unique = (id, what) => { if (seen.has(id)) E('duplicate_id', `${what} ${id} duplicates ${seen.get(id)}`); else seen.set(id, what); };
  const assetsById = {};
  const measuredMs = {};    // duration read from each real audio file (never the declared value)
  const measuredAudio = {}; // per real audio asset: what validation measured (the release builder must ship exactly this)
  let audioMeasureFailed = false;
  for (const a of assets) {
    unique(a.id, 'asset'); req('asset', a, `asset ${a.id}`);
    if (!ID.asset.test(a.id || '')) E('bad_id', `asset id ${a.id}`);
    if (!ASSET_KINDS.includes(a.kind)) E('bad_enum', `asset ${a.id} kind ${a.kind}`);
    if (!LICENCE_KINDS.includes(a.licence?.kind)) E('bad_enum', `asset ${a.id} licence ${a.licence?.kind}`);
    if (a.licence?.kind === 'synthetic_test' && form.kind !== 'synthetic') E('synthetic_asset_in_real_form', `asset ${a.id}`);
    if (a.kind === 'text' && !(a.text?.body_md || '').trim()) E('empty_asset', `text asset ${a.id} has no body`);
    if (a.kind === 'image' && !(a.image?.alt_de && a.image?.alt_en)) E('missing_alt', `image ${a.id} needs alt_de and alt_en`);
    if (a.kind === 'audio' && !a.audio?.generator && !a.audio?.file) E('audio_source', `audio ${a.id} has neither generator nor file`);
    if (a.kind === 'audio' && form.kind !== 'synthetic' && a.audio?.generator) E('synthetic_audio_in_real_form', `audio ${a.id} uses a generator`);
    if (a.kind === 'audio' && a.audio?.generator && a.audio?.file) E('audio_source', `audio ${a.id} declares both a generator and a file`);
    if (a.kind === 'audio' && !a.audio?.generator && a.audio?.file) {   // real audio: the file's own duration is the evidence
      try {
        const m = readAssetAudio(formDir, a);
        measuredMs[a.id] = m.duration_ms;
        measuredAudio[a.id] = { file: m.file, container: m.container, mime: m.mime, duration_ms: m.duration_ms, bytes: m.bytes.length, sha256: sha256(m.bytes) };
        if (form.kind !== 'synthetic' && m.container === 'wav') E('audio_format', `audio ${a.id}: WAV is a master format, not a delivery format (AUDIO-SPEC B5: Opus/WebM or AAC/MP4)`);
        const declared = a.audio.duration_ms;
        if (!Number.isFinite(declared)) E('audio_duration_missing', `audio ${a.id}: declare audio.duration_ms (measured ${m.duration_ms} ms)`);
        else if (Math.abs(declared - m.duration_ms) > DURATION_TOLERANCE_MS) E('audio_duration_mismatch', `audio ${a.id}: declared ${declared} ms, file ${m.duration_ms} ms (tolerance ${DURATION_TOLERANCE_MS} ms)`);
      } catch (e) { if (e instanceof AudioDurationError) { audioMeasureFailed = true; E(e.code, e.message); } else throw e; }
    }
    assetsById[a.id] = a;
  }
  const tasksById = {};
  for (const t of tasks) {
    unique(t.id, 'task'); req('task', t, `task ${t.id}`);
    if (!ID.task.test(t.id || '') || !t.id.startsWith(`tsk:${lvl}:`)) E('bad_id', `task id ${t.id}`);
    if (!MODULES.includes(t.module)) E('bad_enum', `task ${t.id} module ${t.module}`);
    if (t.frame && !FRAMES.includes(t.frame)) E('bad_enum', `task ${t.id} frame ${t.frame}`);
    if (t.provenance && !REFERENCE_USE.includes(t.provenance.reference_material_used)) E('bad_enum', `task ${t.id} provenance.reference_material_used`);
    if (t.provenance?.originality_check?.passed !== true) E('originality', `task ${t.id} has no passed originality check`);
    for (const s of t.stimuli || []) {
      if (!STIMULUS_ROLES.includes(s.role)) E('bad_enum', `task ${t.id} stimulus role ${s.role}`);
      if (!assetsById[s.asset_id]) E('missing_asset', `task ${t.id} references unknown asset ${s.asset_id}`);
    }
    const reqInd = TASK_INDICATORS[t.module] || [];
    for (const k of reqInd) {
      if (!(k in (t.indicators || {}))) E('difficulty_metadata', `task ${t.id} indicators.${k} missing`);
      else if (t.indicators[k] === null && form.kind !== 'synthetic') E('difficulty_metadata', `task ${t.id} indicators.${k} is null`);
    }
    if (t.module === 'lesen' && t.indicators && Number.isFinite(t.indicators.words)) {
      const words = (t.stimuli || []).reduce((n, s) => n + (assetsById[s.asset_id]?.kind === 'text' ? countWords(assetsById[s.asset_id].text.body_md) : 0), 0);
      if (words !== t.indicators.words) E('metric_drift', `task ${t.id} indicators.words ${t.indicators.words} ≠ computed ${words}`);
    }
    tasksById[t.id] = t;
  }
  const itemsById = {};
  const stems = new Map();
  for (const it of items) {
    unique(it.id, 'item'); req('item', it, `item ${it.id}`);
    if (!ID.item.test(it.id || '') || !it.id.startsWith(`itm:${lvl}:`)) E('bad_id', `item id ${it.id}`);
    if (it.level !== level) E('level_mismatch', `item ${it.id} level ${it.level} ≠ ${level}`);
    if (!ITEM_INTERACTIONS.includes(it.interaction)) E('bad_enum', `item ${it.id} interaction ${it.interaction}`);
    if (!ITEM_STATUS.includes(it.status)) E('bad_enum', `item ${it.id} status ${it.status}`);
    if (!Number.isInteger(it.rev) || it.rev < 1 || !Number.isInteger(it.meta_version) || it.meta_version < 1) E('bad_revision', `item ${it.id} rev/meta_version`);
    if (it.supersedes && !ID.item.test(it.supersedes)) E('bad_revision', `item ${it.id} supersedes ${it.supersedes}`);
    for (const f of FORBIDDEN_ITEM_FIELDS) if (f in it) E('key_in_item', `item ${it.id} contains forbidden field "${f}" (keys belong in keys.json)`);
    if (!tasksById[it.task_id]) E('orphan_item', `item ${it.id} task ${it.task_id} unknown`);
    else if (!tasksById[it.task_id].items.includes(it.id)) E('orphan_item', `task ${it.task_id} does not list item ${it.id}`);
    if (OBJECTIVE.has(it.interaction)) {
      for (const k of ITEM_INDICATORS_OBJECTIVE) if (!(k in (it.indicators || {}))) E('difficulty_metadata', `item ${it.id} indicators.${k} missing`);
      if (!Array.isArray(it.options) || it.options.length < 2) E('options', `item ${it.id} needs options`);
      const oids = (it.options || []).map((o) => o.option_id);
      if (new Set(oids).size !== oids.length) E('options', `item ${it.id} has duplicate option ids`);
    }
    for (const d of it.distractors || []) if (!TRAP_MECHANISMS.includes(d.mechanism)) E('bad_enum', `item ${it.id} distractor mechanism ${d.mechanism}`);
    const stemKey = `${it.module}|${it.part}|${(it.stem || '').trim().toLowerCase()}`;
    if (it.stem && OBJECTIVE.has(it.interaction)) { if (stems.has(stemKey)) E('duplicate_item', `item ${it.id} duplicates the stem of ${stems.get(stemKey)}`); else stems.set(stemKey, it.id); }
    itemsById[it.id] = it;
  }
  for (const t of tasks) for (const id of t.items || []) if (!itemsById[id]) E('missing_item', `task ${t.id} lists unknown item ${id}`);

  /* ---- keys ---- */
  for (const it of items) {
    const k = keyMap[it.id];
    if (!k) { E('missing_key', `item ${it.id} has no key`); continue; }
    if (OBJECTIVE.has(it.interaction)) {
      if (k.kind !== 'single') E('key_kind', `item ${it.id} needs a single key`);
      else if (!(it.options || []).some((o) => o.option_id === k.correct)) E('key_not_option', `item ${it.id} key ${k.correct} is not an option`);
      if (it.is_example && it.example_answer !== k.correct) E('example_answer', `example ${it.id} example_answer ≠ key`);
    } else if (PRODUCTIVE.has(it.interaction)) {
      if (k.kind !== 'rubric' || !levelConfig.rubrics?.[k.rubric_id]) E('key_kind', `item ${it.id} needs a known rubric key`);
    } else if (it.interaction === 'topic_choice' && k.kind !== 'none') E('key_kind', `topic choice ${it.id} must have kind none`);
    if (!it.is_example && 'example_answer' in it) E('example_answer', `non-example ${it.id} carries example_answer`);
  }
  for (const id of Object.keys(keyMap)) if (!itemsById[id]) E('orphan_key', `key for unknown item ${id}`);

  /* ---- structure against the level config ---- */
  const formMods = (form.modules || []).map((m) => m.module);
  for (const m of levelConfig.modules) if (!formMods.includes(m.module)) E('missing_module', `module ${m.module} missing`);
  for (const m of formMods) if (!levelConfig.modules.some((x) => x.module === m)) E('unknown_module', `module ${m} not in level config`);
  if (new Set(formMods).size !== formMods.length) E('duplicate_module', 'a module appears twice');
  const placed = new Set();
  let objectivePoints = {};
  for (const mc of levelConfig.modules) {
    const fm = (form.modules || []).find((m) => m.module === mc.module);
    if (!fm) continue;
    if ((fm.parts || []).length !== mc.parts.length) E('part_count', `${mc.module}: ${fm.parts?.length} parts, expected ${mc.parts.length}`);
    const displayNos = [];
    let rubricMax = 0;
    for (const pc of mc.parts) {
      const fp = (fm.parts || []).find((p) => p.part === pc.part);
      if (!fp) { E('part_count', `${mc.module} part ${pc.part} missing`); continue; }
      if (fp.instruction_asset_id !== undefined) {   // spoken instructions (AUDIO-SPEC A1/A2): Hören only, measured audio
        const ia = fp.instruction_asset_id;
        if (mc.module !== 'hoeren') E('instruction_asset', `${mc.module} p${pc.part}: instruction_asset_id is allowed only on Hören parts`);
        else if (typeof ia !== 'string' || !ID.asset.test(ia)) E('instruction_asset', `hoeren p${pc.part}: invalid instruction_asset_id ${ia}`);
        else if (!assetsById[ia]) E('missing_asset', `hoeren p${pc.part}: instruction asset ${ia} unknown`);
        else if (assetsById[ia].kind !== 'audio') E('instruction_asset', `hoeren p${pc.part}: instruction asset ${ia} is not audio`);
      }
      for (const tid of fp.task_ids || []) {
        const t = tasksById[tid];
        if (!t) { E('missing_task', `${mc.module} p${pc.part} lists unknown task ${tid}`); continue; }
        if (t.module !== mc.module || t.part !== pc.part) E('task_misplaced', `task ${tid} declares ${t.module} p${t.part}`);
      }
      const order = fp.item_order || [];
      const partItems = order.map((o) => itemsById[o.item_id]).filter(Boolean);
      for (const o of order) {
        if (placed.has(o.item_id)) E('duplicate_item', `item ${o.item_id} placed twice`);
        placed.add(o.item_id);
        if (!itemsById[o.item_id]) E('missing_item', `placement references unknown item ${o.item_id}`);
        else if (!(fp.task_ids || []).includes(itemsById[o.item_id].task_id)) E('item_misplaced', `item ${o.item_id} not in this part's tasks`);
      }
      const taskItemIds = (fp.task_ids || []).flatMap((tid) => tasksById[tid]?.items || []);
      for (const id of taskItemIds) if (!order.some((o) => o.item_id === id)) E('unplaced_item', `item ${id} belongs to a task in ${mc.module} p${pc.part} but is not placed`);
      const scored = partItems.filter((i) => !i.is_example && i.interaction !== 'topic_choice');
      const examples = partItems.filter((i) => i.is_example);
      if (scored.length !== pc.item_count) E('item_count', `${mc.module} p${pc.part}: ${scored.length} items, expected ${pc.item_count}`);
      if (examples.length !== pc.example_count) E('example_count', `${mc.module} p${pc.part}: ${examples.length} examples, expected ${pc.example_count}`);
      if (pc.tasks && (fp.task_ids || []).length !== pc.tasks) E('task_count', `${mc.module} p${pc.part}: ${fp.task_ids.length} tasks, expected ${pc.tasks}`);
      for (const it of scored) {
        if (pc.interaction === 'audio_item_pairs') {
          const allowed = (pc.item_pattern || []).map((x) => x.interaction);
          if (!allowed.includes(it.interaction)) E('interaction_mismatch', `item ${it.id} ${it.interaction} not allowed in ${mc.module} p${pc.part}`);
        } else if (it.interaction !== pc.interaction) E('interaction_mismatch', `item ${it.id} is ${it.interaction}, part expects ${pc.interaction}`);
        if (OBJECTIVE.has(it.interaction)) objectivePoints[mc.module] = (objectivePoints[mc.module] || 0) + (pc.points_per_item || 1);
        if (pc.option_set) {
          const want = (levelConfig.option_sets[pc.option_set] || []).map((o) => o.option_id).join(',');
          if ((it.options || []).map((o) => o.option_id).join(',') !== want) E('option_set', `item ${it.id} options ≠ ${pc.option_set}`);
        }
        if (it.interaction === 'text_response' && it.response_spec?.target_words !== pc.target_words) E('writing_target', `item ${it.id} target_words ${it.response_spec?.target_words} ≠ ${pc.target_words}`);
        if (PRODUCTIVE.has(it.interaction) && keyMap[it.id]?.rubric_id !== pc.rubric) E('rubric_mismatch', `item ${it.id} rubric ${keyMap[it.id]?.rubric_id} ≠ ${pc.rubric}`);
      }
      for (const o of order) {
        const it = itemsById[o.item_id];
        if (!it) continue;
        if (OBJECTIVE.has(it.interaction)) {
          if (it.is_example ? !/^0[12]?$/.test(o.display_no || '') : !/^[1-9][0-9]*$/.test(o.display_no || '')) E('display_no', `item ${it.id} display_no ${o.display_no}`);
          if (!it.is_example) displayNos.push(Number(o.display_no));
        }
      }
      if (pc.rubric) rubricMax += rubricMaxOf(levelConfig.rubrics[pc.rubric]);
      if (pc.interaction === 'matching_pool') checkMatching(pc, fp, tasksById, itemsById, keyMap, E);
      if (pc.interaction === 'speaker_assignment') {
        for (const it of scored) if ((it.options || []).length !== pc.constraints?.speakers) E('speakers', `item ${it.id} needs ${pc.constraints?.speakers} speaker options`);
        const counts = {};
        for (const it of scored) counts[keyMap[it.id]?.correct] = (counts[keyMap[it.id]?.correct] || 0) + 1;
        for (const o of scored[0]?.options || []) if ((counts[o.option_id] || 0) < 2) E('speaker_balance', `${mc.module} p${pc.part}: speaker ${o.option_id} has < 2 statements`);
      }
      if (pc.topic_choice) {
        const tc = partItems.filter((i) => i.interaction === 'topic_choice');
        if (tc.length !== 1 || (tc[0].options || []).length !== pc.topic_choice) E('topic_choice', `${mc.module} p${pc.part} needs one topic_choice item with ${pc.topic_choice} options`);
        const slides = (fp.task_ids || []).flatMap((tid) => tasksById[tid]?.stimuli || []).filter((s) => s.role === 'slide');
        if (slides.length !== 5 * pc.topic_choice) E('slides', `${mc.module} p${pc.part} needs ${5 * pc.topic_choice} slides (5 per topic), has ${slides.length}`);
      }
      if (pc.interaction === 'spoken_response') for (const it of scored) if (!(it.response_spec?.turns || []).length) E('turns', `item ${it.id} needs at least one turn`);
    }
    if (mc.scoring.strategy === 'objective_table') {
      const table = levelConfig.objective_tables[mc.scoring.table];
      if ((objectivePoints[mc.module] || 0) !== table.max_raw) E('scoring_total', `${mc.module}: ${objectivePoints[mc.module] || 0} scored items, table expects ${table.max_raw}`);
      const sorted = [...displayNos].sort((a, b) => a - b);
      if (new Set(sorted).size !== sorted.length) E('display_no', `${mc.module}: duplicate item numbers`);
      if (sorted.length && (sorted[0] !== 1 || sorted[sorted.length - 1] !== sorted.length)) E('display_no', `${mc.module}: item numbers must run 1…${sorted.length}`);
    } else if (mc.scoring.strategy === 'rubric_double_rating') {
      const extra = mc.module === 'sprechen' ? rubricMaxOf(levelConfig.rubrics['rub:b1:sprechen:pron@1']) : 0;
      if (rubricMax + extra !== mc.scoring.max_points) E('scoring_total', `${mc.module}: rubric maxima ${rubricMax + extra} ≠ ${mc.scoring.max_points}`);
    }
  }
  for (const it of items) if (!placed.has(it.id)) E('unplaced_item', `item ${it.id} is not placed in the form`);
  const referenced = new Set(tasks.flatMap((t) => (t.stimuli || []).map((s) => s.asset_id)));
  for (const fm of form.modules || []) for (const fp of fm.parts || []) if (typeof fp.instruction_asset_id === 'string') referenced.add(fp.instruction_asset_id);
  for (const it of items) for (const turn of it.response_spec?.turns || []) if (turn.prompt_asset) { referenced.add(turn.prompt_asset); if (!assetsById[turn.prompt_asset]) E('missing_asset', `item ${it.id} turn asset ${turn.prompt_asset}`); }
  for (const a of assets) if (!referenced.has(a.id)) W('unused_asset', `asset ${a.id} is not referenced`);

  /* ---- timing ---- */
  for (const mc of levelConfig.modules) if (mc.timing.kind === 'fixed' && !(mc.timing.seconds > 0)) E('timing', `${mc.module} has no duration`);
  let plan = null;
  if (!audioMeasureFailed) {   // a failed measurement is already reported; do not add a derived plan error
    try {
      const durations = {};
      for (const a of assets) if (a.kind === 'audio') durations[a.id] = a.audio.generator ? toneWav(a.audio.generator).duration_ms : measuredMs[a.id];
      plan = hoerenPlan(levelConfig, form, tasksById, itemsById, durations);
      const gate = plan.gate;
      if (gate && (plan.total_ms < gate.min * 1000 || plan.total_ms > gate.max * 1000)) E('timing_total', `Hören plan ${Math.round(plan.total_ms / 1000)} s outside ${gate.min}–${gate.max} s`);
      for (const p of plan.phases) if (!(p.ms >= 0)) E('timing', `Hören phase ${p.seq} has invalid duration`);
    } catch (e) { E('timing', `Hören phase plan failed: ${e.message}`); }
  }
  try {
    const sp = speakingPlan(levelConfig, form);
    if (!(sp.prep_ms > 0) || !sp.phases.length) E('timing', 'Sprechen plan incomplete');
  } catch (e) { E('timing', `Sprechen phase plan failed: ${e.message}`); }

  return { ok: errors.length === 0, errors, warnings,
    stats: { form: form.id, kind: form.kind, tasks: tasks.length, items: items.length, assets: assets.length, hoeren_plan_seconds: plan ? Math.round(plan.total_ms / 1000) : null },
    measured_audio: measuredAudio };
}

function rubricMaxOf(r) { return r ? Object.values(r.criteria).reduce((n, pts) => n + Math.max(...pts), 0) : 0; }

function checkMatching(pc, fp, tasksById, itemsById, keyMap, E) {
  const c = pc.constraints || {};
  const pool = (fp.task_ids || []).flatMap((tid) => tasksById[tid]?.stimuli || []).filter((s) => s.role === 'ad');
  if (pool.length !== c.pool_size) E('matching_pool', `part ${pc.part}: ${pool.length} ads, expected ${c.pool_size}`);
  const its = (fp.item_order || []).map((o) => itemsById[o.item_id]).filter(Boolean);
  const scoredKeys = its.filter((i) => !i.is_example).map((i) => keyMap[i.id]?.correct);
  const exampleKeys = its.filter((i) => i.is_example).map((i) => keyMap[i.id]?.correct);
  const nulls = scoredKeys.filter((k) => k === c.null_option).length;
  if (nulls !== c.null_keys) E('matching_pool', `part ${pc.part}: ${nulls} "${c.null_option}" keys, expected ${c.null_keys}`);
  const used = [...exampleKeys, ...scoredKeys.filter((k) => k !== c.null_option)];
  if (c.unique_use && new Set(used).size !== used.length) E('matching_pool', `part ${pc.part}: an ad is used more than once (incl. example)`);
  if (pool.length - new Set(used).size !== c.unused_pool) E('matching_pool', `part ${pc.part}: ${pool.length - new Set(used).size} unused ads, expected ${c.unused_pool}`);
}

/* ---------------- CLI ---------------- */
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const json = process.argv.includes('--json');
  const dirs = args.length ? args : findForms(path.join(ROOT, 'forms'));
  let failed = 0;
  for (const d of dirs) {
    const r = validateForm(path.resolve(d));
    if (!r.ok) failed++;
    if (json) console.log(JSON.stringify({ dir: d, ...r }));
    else {
      console.log(`${r.ok ? 'PASS' : 'FAIL'} ${path.relative(process.cwd(), d)} ${JSON.stringify(r.stats)}`);
      for (const e of r.errors) console.log(`  ERROR ${e.code}: ${e.msg}`);
      for (const w of r.warnings) console.log(`  warn  ${w.code}: ${w.msg}`);
    }
  }
  process.exit(failed ? 1 : 0);
}

export function findForms(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (fs.existsSync(path.join(p, 'form.json'))) out.push(p); else out.push(...findForms(p)); }
  }
  return out;
}
