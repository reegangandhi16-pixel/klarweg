/* Versioned exam API (/exam/v1). Every mutating attempt route validates, in
   order: user → attempt ownership → request id → device lease → module state
   → server deadline. Invalid state transitions are rejected with 409. */
import { fail, now, readJsonBody, sha256Hex, DEVICE_ID_RE } from './http.js';
import { log } from './log.js';
import { flags, MODES } from './flags.js';
import { hasExamAccess, hasRole } from './auth.js';
import { formRow, levelConfig, moduleConfig, loadPackage } from './content.js';
import { countWords } from './wordcount.js';
import { BANDS, rubricTotal, rubricUnits } from './scoring.js';
import { signMediaToken, MEDIA_TTL_MS } from './media.js';
import {
  loadAttempt, attemptModules, audit, requireRequestId, idempotent, idempotentAtomic, acquireLease, requireLease,
  computeDeadline, speakingPrepEnd, settle, submitModule, finalizeModule, scoreModule, buildResult, computeResult, resultUpsert, incident, SAVE_GRACE_MS, RESULT_LABEL
} from './core.js';

const MAX_TEXT_CHARS = 20_000;
const MAX_ANSWERS_PER_SAVE = 40;
const PLAY_TOLERANCE_MS = 5_000;
const LEVELS = { b1: 'B1' };

/* ---------- small helpers ---------- */
async function rateLimit(env, bucket, limit, windowMs) {
  const t = now(env);
  const windowEnd = Math.ceil(t / windowMs) * windowMs;
  await env.DB.prepare('INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1')
    .bind(bucket, windowEnd).run();
  const r = await env.DB.prepare('SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2').bind(bucket, windowEnd).first();
  if (r.hits > limit) fail(429, 'rate_limited');
}

async function moduleRow(env, attemptId, module) {
  const m = await env.DB.prepare('SELECT * FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2').bind(attemptId, module).first();
  if (!m) fail(404, 'module_not_found');
  return m;
}

function moduleView(m, t) {
  return {
    module: m.module, order: m.module_order, status: m.status,
    started_at: m.started_at, deadline_at: m.deadline_at, submitted_at: m.submitted_at, submit_kind: m.submit_kind,
    remaining_ms: m.status === 'running' && m.deadline_at !== null ? Math.max(0, m.deadline_at - t) : null,
    plan_started_at: m.plan_started_at, plan_shift_ms: m.plan_shift_ms, recovery_used: m.recovery_used
  };
}

async function attemptView(env, attempt) {
  const t = now(env);
  const form = await formRow(env, attempt.form_id);
  const mods = await attemptModules(env, attempt.id);
  return {
    attempt_id: attempt.id, mode: attempt.mode, level: attempt.level, status: attempt.status,
    form: { label: form.label, kind: form.kind, test_content: form.kind === 'synthetic' },   // form id never needed client-side
    time_multiplier: attempt.time_multiplier,
    server_now: t, save_grace_ms: SAVE_GRACE_MS,
    modules: mods.map((m) => moduleView(m, t))
  };
}

/* Load the attempt, refresh deadlines, and validate the lease. */
async function attemptCtx(env, userId, attemptId, leaseId, { renew = true } = {}) {
  let attempt = await loadAttempt(env, attemptId, userId);
  if (attempt.status === 'voided') fail(409, 'attempt_voided');
  await settle(env, attempt);
  const lease = await requireLease(env, attempt, leaseId, { renew });
  attempt = await loadAttempt(env, attemptId, userId);
  return { attempt, lease };
}

function requireRunning(m, t, { grace = true } = {}) {
  if (m.status === 'submitted' || m.status === 'submitting') fail(409, 'module_submitted');
  if (m.status !== 'running') fail(409, 'module_not_running');
  if (t > m.deadline_at + (grace ? SAVE_GRACE_MS : 0)) fail(409, 'deadline_passed');
}

/* ---------- the learner's own completed attempts (history) ----------
   Newest first, at most 20, with the stored per-module result (rebuilt whenever a rating changes it). Filtered by the
   session user, so nobody else's attempts can appear. No keys, answers, texts or recordings — those stay behind the
   per-attempt result, review, feedback and recording endpoints with their own gating. */
export async function myAttempts(env, userId) {
  const rows = (await env.DB.prepare(`SELECT a.id, a.completed_at, f.label, f.kind, r.json FROM attempts a JOIN forms f ON f.id = a.form_id
      LEFT JOIN results r ON r.attempt_id = a.id WHERE a.user_id = ?1 AND a.status = 'completed' ORDER BY a.completed_at DESC LIMIT 20`).bind(userId).all()).results;
  return { ok: true, attempts: rows.map((r) => {
    const res = r.json ? JSON.parse(r.json) : null;
    return { attempt_id: r.id, completed_at: r.completed_at, form_label: r.label, test_content: r.kind === 'synthetic',
      modules: res ? res.modules.map((m) => ({ module: m.module, status: m.status, points: m.points, max_points: m.max_points, pass: m.pass })) : null };
  }) };
}

/* ---------- availability ---------- */
export async function availability(env, userId) {
  const f = flags(env);
  const out = [];
  for (const [mode, def] of Object.entries(MODES)) {
    for (const [lvlKey, lvl] of Object.entries(LEVELS)) {
      let reason = null;
      if (!f[def.flag]) reason = 'disabled';
      else if (!(await hasExamAccess(env, userId, lvl, def.access_scope)) && !(await hasRole(env, userId, ['exam_admin']))) reason = 'no_access';
      else {
        const forms = await env.DB.prepare(`SELECT COUNT(*) AS n FROM forms f JOIN level_configs l ON l.id = f.level_config_id
            WHERE f.status = 'live' AND l.level = ?1 AND f.kind IN (${def.kinds.map((_, i) => `?${i + 2}`).join(',')})`).bind(lvl, ...def.kinds).first();
        if (!forms.n) reason = 'no_forms';
      }
      out.push({ mode, level: lvlKey, available: !reason, reason });
    }
  }
  const open = (await env.DB.prepare("SELECT id, mode FROM attempts WHERE user_id = ?1 AND status IN ('created','in_progress')").bind(userId).all()).results;
  // the learner's most recent completed attempt, so its result (and later ratings) can be opened again
  const last = await env.DB.prepare("SELECT id FROM attempts WHERE user_id = ?1 AND status = 'completed' ORDER BY completed_at DESC LIMIT 1").bind(userId).first();
  return { ok: true, server_now: now(env), modes: out, open_attempts: open.map((a) => ({ attempt_id: a.id, mode: a.mode })), last_completed: last ? last.id : null };
}

/* ---------- create attempt (server-side, immutable form assignment) ---------- */
function csprngIndex(n) {
  if (n <= 0) throw new Error('empty');
  const lim = Math.floor(0x1_0000_0000 / n) * n;     // rejection sampling: no modulo bias
  const buf = new Uint32Array(1);
  for (;;) { crypto.getRandomValues(buf); if (buf[0] < lim) return buf[0] % n; }
}

export async function createAttempt(env, userId, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  if (!DEVICE_ID_RE.test(body.device_id || '')) fail(400, 'device_id_required');
  const def = MODES[body.mode];
  const lvl = LEVELS[body.level];
  if (!def || !lvl) fail(400, 'invalid_mode_or_level');
  // anything the client says about the form is ignored — assignment is server-side only
  if ('form_id' in body || 'form' in body) await audit(env, userId, null, 'form_selection_ignored', { mode: body.mode });
  if (!flags(env)[def.flag]) fail(403, 'mode_disabled');
  if (!(await hasExamAccess(env, userId, lvl, def.access_scope)) && !(await hasRole(env, userId, ['exam_admin']))) fail(403, 'exam_access_required');

  // a retried create (same request id) replays the attempt it created
  const findSame = () => env.DB.prepare('SELECT * FROM attempts WHERE user_id = ?1 AND client_request_id = ?2').bind(userId, requestId).first();
  const replay = async (a) => ({ ...(await attemptView(env, a)), lease: await acquireLease(env, a, body.device_id, true), replayed: true });
  const same = await findSame();
  if (same) return replay(same);
  const open = await env.DB.prepare("SELECT id FROM attempts WHERE user_id = ?1 AND mode = ?2 AND status IN ('created','in_progress')").bind(userId, body.mode).first();
  if (open) {
    const sameNow = await findSame();   // the original of this retry may have committed since the lookup above
    if (sameNow) return replay(sameNow);
    fail(409, 'attempt_open', 'An attempt of this kind is already open.', { attempt_id: open.id });
  }

  const forms = (await env.DB.prepare(`SELECT f.id, f.release, f.level_config_id FROM forms f JOIN level_configs l ON l.id = f.level_config_id
      WHERE f.status = 'live' AND l.level = ?1 AND f.kind IN (${def.kinds.map((_, i) => `?${i + 2}`).join(',')}) ORDER BY f.id`).bind(lvl, ...def.kinds).all()).results;
  if (!forms.length) fail(409, 'no_forms_available');
  /* ENGINE §7.3 repeat-avoidance: among the forms THIS user has attempted least often (never attempted = 0, so unseen
     forms always win), choose uniformly with the server CSPRNG. Other learners' attempts play no part. */
  const times = Object.fromEntries((await env.DB.prepare('SELECT form_id, COUNT(*) AS n FROM attempts WHERE user_id = ?1 GROUP BY form_id').bind(userId).all())
    .results.map((r) => [r.form_id, r.n]));
  const least = Math.min(...forms.map((f) => times[f.id] || 0));
  const pool = forms.filter((f) => (times[f.id] || 0) === least);
  const form = pool[csprngIndex(pool.length)];
  const seed = [...crypto.getRandomValues(new Uint8Array(8))].map((b) => b.toString(16).padStart(2, '0')).join('');
  const reason = least === 0 ? `csprng_uniform_unseen:${pool.length}` : `csprng_uniform_least_seen:${least}:${pool.length}`;

  const acc = await env.DB.prepare('SELECT time_multiplier FROM accommodations WHERE user_id = ?1 AND (valid_until IS NULL OR valid_until > ?2)')
    .bind(userId, Math.floor(now(env) / 1000)).first();
  const attemptId = `att_${crypto.randomUUID()}`;
  const t = now(env);
  const mods = (await env.DB.prepare('SELECT module, module_order FROM form_modules WHERE form_id = ?1 ORDER BY module_order').bind(form.id).all()).results;
  const cfg = await levelConfig(env, form.level_config_id);
  if (mods.length !== cfg.modules.length) fail(503, 'form_incomplete');
  try {
    await env.DB.batch([
      env.DB.prepare(`INSERT INTO attempts (id, user_id, mode, level, form_id, release, status, time_multiplier, client_request_id, assignment_reason, assignment_seed, created_at)
          VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'created', ?7, ?8, ?9, ?10, ?11)`)
        .bind(attemptId, userId, body.mode, lvl, form.id, form.release, acc ? acc.time_multiplier : 1.0, requestId, reason, seed, t),
      ...mods.map((m, i) => env.DB.prepare(`INSERT INTO attempt_modules (attempt_id, module, module_order, status) VALUES (?1, ?2, ?3, ?4)`)
        .bind(attemptId, m.module, m.module_order, i === 0 ? 'available' : 'locked'))
    ]);
  } catch (e) {
    // a concurrent create for the same mode lost the unique-open-attempt race; if the winner is this very request
    // (a retry racing the original), replay it like a sequential retry
    const sameWinner = await findSame();
    if (sameWinner) return replay(sameWinner);
    const winner = await env.DB.prepare("SELECT id FROM attempts WHERE user_id = ?1 AND mode = ?2 AND status IN ('created','in_progress')").bind(userId, body.mode).first();
    if (winner) fail(409, 'attempt_open', 'An attempt of this kind is already open.', { attempt_id: winner.id });
    throw e;
  }
  const attempt = await loadAttempt(env, attemptId, userId);
  await audit(env, userId, attemptId, 'attempt_created', { mode: body.mode, reason });
  log(env, 'attempt_created', { attempt: attemptId, mode: body.mode, reason });
  // takeover: the attempt is new, so the only possible holder is a concurrent replay of this same request
  return { ok: true, ...(await attemptView(env, attempt)), lease: await acquireLease(env, attempt, body.device_id, true) };
}

export async function getAttempt(env, userId, attemptId) {
  const attempt = await loadAttempt(env, attemptId, userId);
  await settle(env, attempt);
  return { ok: true, ...(await attemptView(env, await loadAttempt(env, attemptId, userId))) };
}

export async function lease(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  if (!DEVICE_ID_RE.test(body.device_id || '')) fail(400, 'device_id_required');
  const attempt = await loadAttempt(env, attemptId, userId);
  if (attempt.status === 'completed' || attempt.status === 'voided') fail(409, 'attempt_closed');
  await settle(env, attempt);
  const l = await acquireLease(env, attempt, body.device_id, body.takeover === true);
  return { ok: true, lease: l, ...(await attemptView(env, await loadAttempt(env, attemptId, userId))) };
}

export async function heartbeat(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const { attempt, lease: l } = await attemptCtx(env, userId, attemptId, body.lease_id);
  return { ok: true, lease: { lease_id: l.lease_id, expires_at: l.expires_at }, ...(await attemptView(env, attempt)) };
}

/* ---------- modules ---------- */
export async function startModule(env, userId, attemptId, module, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  // in-flight claim + one atomic batch (core.js idempotentAtomic)
  const out = await idempotentAtomic(env, attemptId, requestId, `start:${module}`, async () => {
    const m = await moduleRow(env, attemptId, module);
    if (m.status === 'locked') fail(409, 'module_locked');
    if (m.status !== 'available') fail(409, 'invalid_transition', `Module is ${m.status}.`);
    const running = (await attemptModules(env, attemptId)).find((x) => x.status === 'running');
    if (running) fail(409, 'another_module_running');
    const form = await formRow(env, attempt.form_id);
    const cfg = await levelConfig(env, form.level_config_id);
    const pkg = await loadPackage(env, attempt.form_id, module);
    const t = now(env);
    const deadline = computeDeadline(cfg, moduleConfig(cfg, module), pkg, t, { multiplier: attempt.time_multiplier });
    return {
      precondition: { sql: `EXISTS (SELECT 1 FROM attempt_modules WHERE attempt_id = ?4 AND module = ?5 AND status = 'available')
          AND NOT EXISTS (SELECT 1 FROM attempt_modules WHERE attempt_id = ?4 AND status = 'running')`, binds: [attemptId, module] },
      statements: [
        env.DB.prepare(`UPDATE attempt_modules SET status = 'running', started_at = ?3, deadline_at = ?4 WHERE attempt_id = ?1 AND module = ?2 AND status = 'available'`)
          .bind(attemptId, module, t, deadline),
        env.DB.prepare("UPDATE attempts SET status = 'in_progress', started_at = ?2 WHERE id = ?1 AND status = 'created'").bind(attemptId, t),
        env.DB.prepare('INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, ?3, ?4, ?5)')
          .bind(t, userId, attemptId, 'module_started', JSON.stringify({ module }))
      ],
      body: { ok: true, module: moduleView({ ...m, status: 'running', started_at: t, deadline_at: deadline }, t), server_now: t }
    };
  });
  if (!out.body.replayed) log(env, 'module_started', { attempt: attemptId, module });
  return out;
}

export async function getPackage(env, userId, attemptId, module, url) {
  const { attempt } = await attemptCtx(env, userId, attemptId, url.searchParams.get('lease_id'));
  const m = await moduleRow(env, attemptId, module);
  const t = now(env);
  requireRunning(m, t, { grace: false });
  const pkg = await loadPackage(env, attempt.form_id, module);
  if (module !== 'hoeren') return { ok: true, server_now: t, module: moduleView(m, t), package: pkg.data };
  const readinessMs = await hoerenReadinessMs(env, attempt);
  const pos = hoerenPosition(pkg.data.timing.plan, m, t, readinessMs, PART_LEAD_MS);
  return { ok: true, server_now: t, module: moduleView(m, t), package: hoerenView(pkg.data, pos.openPart),
    hoeren: { open_part: Number.isFinite(pos.openPart) ? pos.openPart : 'all', next_part_at: pos.nextPartAt,
      pending_recovery_seq: await pendingRecovery(env, attemptId, pkg.data.timing.plan, m) } };
}

async function hoerenReadinessMs(env, attempt) {
  const form = await formRow(env, attempt.form_id);
  return (moduleConfig(await levelConfig(env, form.level_config_id), 'hoeren').timing.readiness_allowance_seconds ?? 120) * 1000;
}

export async function getAnswers(env, userId, attemptId, module, url) {
  await attemptCtx(env, userId, attemptId, url.searchParams.get('lease_id'));
  const m = await moduleRow(env, attemptId, module);
  if (m.status !== 'running') fail(409, 'module_not_running');
  const rows = (await env.DB.prepare('SELECT item_id, value_json, seq FROM responses_current WHERE attempt_id = ?1 AND module = ?2').bind(attemptId, module).all()).results;
  return { ok: true, server_now: now(env), answers: rows.map((r) => ({ item_id: r.item_id, value: JSON.parse(r.value_json), seq: r.seq })) };
}

function validateValue(item, value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(422, 'invalid_value', item.item_id);
  switch (item.interaction) {
    case 'binary_choice': case 'mcq_single': case 'matching_pool': case 'speaker_assignment': case 'topic_choice': {
      const keys = Object.keys(value);
      if (keys.length !== 1 || keys[0] !== 'option_id') fail(422, 'invalid_value', item.item_id);
      if (value.option_id === null) return { option_id: null };
      if (!item.options.some((o) => o.option_id === value.option_id)) fail(422, 'invalid_option', item.item_id);
      return { option_id: value.option_id };
    }
    case 'text_response': {
      if (typeof value.text !== 'string' || Object.keys(value).length !== 1) fail(422, 'invalid_value', item.item_id);
      if (value.text.length > MAX_TEXT_CHARS) fail(413, 'text_too_long', item.item_id);
      return { text: value.text.normalize('NFC') };
    }
    default:
      fail(422, 'not_answerable', item.item_id);
  }
}

export async function saveAnswers(env, userId, attemptId, module, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  await rateLimit(env, `save:${attemptId}`, 240, 60_000);
  return idempotent(env, attemptId, requestId, `answers:${module}`, async () => {
    const m = await moduleRow(env, attemptId, module);
    const t = now(env);
    requireRunning(m, t);
    if (module === 'hoeren' && m.plan_started_at === null) fail(409, 'listening_not_started');
    if (!Array.isArray(body.answers) || !body.answers.length || body.answers.length > MAX_ANSWERS_PER_SAVE) fail(400, 'invalid_answers');
    const pkg = await loadPackage(env, attempt.form_id, module);
    const openPart = module === 'hoeren'
      ? hoerenPosition(pkg.data.timing.plan, m, t, await hoerenReadinessMs(env, attempt), PART_LEAD_MS).openPart : Infinity;
    // Sprechen: the Teil 2 topic choice locks when the preparation ends (SPEAKING-SPEC §2). The same in-flight grace
    // as module deadlines applies, so a choice made just before the end is not lost in transit.
    const topicLockAt = module === 'sprechen' && pkg.data.timing.kind === 'speaking_phases'
      ? speakingPrepEnd(pkg.data.timing.plan, m.started_at, attempt.time_multiplier) + SAVE_GRACE_MS : Infinity;
    // validate the whole batch first: a rejected save request changes nothing
    const checked = body.answers.map((a) => {
      const item = pkg.items.get(a?.item_id);
      if (!item) fail(422, 'unknown_item');
      if (item.is_example) fail(422, 'item_is_example', item.item_id);
      if (item.part > openPart) fail(409, 'part_not_open', item.item_id);   // OD-02: future Hören parts stay closed
      if (item.interaction === 'topic_choice' && t > topicLockAt) fail(409, 'topic_locked', item.item_id);
      if (!Number.isInteger(a.seq) || a.seq < 1 || a.seq > 1e9) fail(422, 'invalid_seq', item.item_id);
      return { a, item, value: validateValue(item, a.value) };
    });
    const results = [];
    for (const { a, item, value } of checked) {
      const clientTs = Number.isFinite(a.client_ts) ? Math.trunc(a.client_ts) : null;
      const valueJson = JSON.stringify(value);
      // only a strictly higher seq replaces the stored answer (stale / reordered writes lose)
      const r = await env.DB.prepare(`INSERT INTO responses_current (attempt_id, item_id, module, value_json, seq, client_ts, server_ts) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
          ON CONFLICT(attempt_id, item_id) DO UPDATE SET value_json = excluded.value_json, seq = excluded.seq, client_ts = excluded.client_ts, server_ts = excluded.server_ts
          WHERE excluded.seq > responses_current.seq`).bind(attemptId, item.item_id, module, valueJson, a.seq, clientTs, t).run();
      const accepted = r.meta.changes > 0;
      await env.DB.prepare('INSERT INTO response_events (attempt_id, item_id, value_json, seq, client_ts, server_ts, outcome) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)')
        .bind(attemptId, item.item_id, valueJson, a.seq, clientTs, t, accepted ? 'accepted' : 'stale').run();
      if (accepted && item.interaction === 'text_response') {
        await env.DB.prepare('INSERT OR IGNORE INTO writing_versions (attempt_id, item_id, version, text, words, server_ts) VALUES (?1, ?2, ?3, ?4, ?5, ?6)')
          .bind(attemptId, item.item_id, a.seq, value.text, countWords(value.text), t).run();
      }
      const cur = await env.DB.prepare('SELECT seq FROM responses_current WHERE attempt_id = ?1 AND item_id = ?2').bind(attemptId, item.item_id).first();
      results.push({ item_id: item.item_id, seq: a.seq, status: accepted ? 'accepted' : 'stale', current_seq: cur.seq,
        ...(item.interaction === 'text_response' ? { words: countWords(value.text) } : {}) });
    }
    const high = Math.max(...body.answers.map((a) => a.seq));
    await env.DB.prepare('UPDATE attempt_modules SET seq_high = MAX(seq_high, ?3) WHERE attempt_id = ?1 AND module = ?2').bind(attemptId, module, high).run();
    return { ok: true, server_now: t, deadline_at: m.deadline_at, results };
  });
}

export async function submit(env, userId, attemptId, module, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  return idempotent(env, attemptId, requestId, `submit:${module}`, async () => {
    const m = await moduleRow(env, attemptId, module);
    if (m.status === 'submitted') return { ok: true, already: true, module: moduleView(m, now(env)) };   // e.g. auto-submitted at the deadline
    if (m.status === 'submitting') await finalizeModule(env, attempt, module);   // resume an interrupted finalization (errors propagate → retry)
    else if (m.status !== 'running') fail(409, 'invalid_transition', `Module is ${m.status}.`);
    else await submitModule(env, attempt, m, 'manual');
    const done = await moduleRow(env, attemptId, module);
    if (done.status !== 'submitted') fail(503, 'finalization_pending', 'Submission recorded; finalization will be retried.');
    return { ok: true, module: moduleView(await moduleRow(env, attemptId, module), now(env)), ...(await attemptView(env, attempt)) };
  });
}

/* ---------- Hören: readiness + controlled playback ---------- */
const PART_LEAD_MS = 2_000;   // a part opens this much before its first phase (absorbs client clock offset)

/* Server-authoritative position in the Hören schedule (same model as the
   client's phaseAt: a recovery replay delays the whole remaining schedule). */
export function hoerenPosition(plan, m, t, readinessMs, leadMs = 0) {
  let planStart = m.plan_started_at;
  if (planStart === null && t >= m.started_at + readinessMs) planStart = m.started_at + readinessMs;   // readiness timeout
  if (planStart === null) return { started: false, openPart: 0, nextPartAt: null };
  const elapsed = t - planStart - (m.plan_shift_ms || 0) + leadMs;
  let acc = 0, openPart = 0, nextPartAt = null;
  for (const p of plan.phases) {
    if (acc <= elapsed) openPart = p.part === null ? Infinity : Math.max(openPart, p.part);   // review phase (part null) opens everything
    else if (nextPartAt === null && (p.part === null || p.part > openPart)) nextPartAt = planStart + (m.plan_shift_ms || 0) + acc - leadMs;
    acc += p.ms;
  }
  if (elapsed >= acc) openPart = Infinity;
  return { started: true, planStart, openPart, nextPartAt };
}

/* OD-05: a recovery replay is owed only for an interrupted LAST allowed play. */
async function pendingRecovery(env, attemptId, plan, m) {
  if (m.recovery_used >= (plan.recovery_replays_per_module ?? 1)) return null;
  const rows = (await env.DB.prepare(`SELECT phase_seq FROM audio_plays a WHERE attempt_id = ?1 AND kind = 'normal' AND outcome = 'interrupted'
      AND NOT EXISTS (SELECT 1 FROM audio_plays r WHERE r.attempt_id = a.attempt_id AND r.phase_seq = a.phase_seq AND r.kind = 'recovery') ORDER BY phase_seq`)
    .bind(attemptId).all()).results;
  for (const r of rows) {
    const ph = plan.phases.find((p) => p.seq === r.phase_seq);
    if (ph && ph.recoverable !== false && ph.play_no === ph.plays_allowed) return r.phase_seq;
  }
  return null;
}

/* Keyless package view for the learner: only the Hören parts that have opened (OD-02). */
function hoerenView(data, openPart) {
  return {
    ...data,
    parts: data.parts.filter((p) => p.part <= openPart),
    timing: { ...data.timing, plan: { ...data.timing.plan, phases: data.timing.plan.phases.map(({ items, task_id, ...rest }) => rest) } }
  };
}

function phaseOffset(plan, seq) {
  let o = 0;
  for (const p of plan.phases) { if (p.seq === seq) return o; o += p.ms; }
  return null;
}

export async function hoerenEvent(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  const route = `hoeren:${body.type}:${body.phase_seq ?? ''}`;
  // 'interrupted' commits through an in-flight claim + one atomic batch (handler returns a plan); the other event types
  // keep the plain idempotent() path unchanged.
  const atomic = body.type === 'interrupted';
  const handler = async () => {
    const m = await moduleRow(env, attemptId, 'hoeren');
    const t = now(env);
    requireRunning(m, t, { grace: false });
    const form = await formRow(env, attempt.form_id);
    const cfg = await levelConfig(env, form.level_config_id);
    const modCfg = moduleConfig(cfg, 'hoeren');
    const pkg = await loadPackage(env, attempt.form_id, 'hoeren');
    const plan = pkg.data.timing.plan;

    if (body.type === 'ready') {
      if (m.plan_started_at !== null) return { ok: true, plan_started_at: m.plan_started_at, deadline_at: m.deadline_at, plan_shift_ms: m.plan_shift_ms,
        pending_recovery_seq: await pendingRecovery(env, attemptId, plan, m), server_now: t };
      const latest = m.started_at + (modCfg.timing.readiness_allowance_seconds ?? 120) * 1000;
      const ps = Math.min(t, latest);
      const deadline = computeDeadline(cfg, modCfg, pkg, m.started_at, { planStartedAt: ps, shiftMs: m.plan_shift_ms });
      await env.DB.prepare('UPDATE attempt_modules SET plan_started_at = ?3, deadline_at = ?4 WHERE attempt_id = ?1 AND module = ?2 AND plan_started_at IS NULL')
        .bind(attemptId, 'hoeren', ps, deadline).run();
      const cur = await moduleRow(env, attemptId, 'hoeren');
      return { ok: true, plan_started_at: cur.plan_started_at, deadline_at: cur.deadline_at, plan_shift_ms: cur.plan_shift_ms, pending_recovery_seq: null, server_now: t };
    }

    // a readiness timeout starts the schedule without the client
    let planStart = m.plan_started_at;
    if (planStart === null) {
      const latest = m.started_at + (modCfg.timing.readiness_allowance_seconds ?? 120) * 1000;
      if (t < latest) fail(409, 'listening_not_started');
      planStart = latest;
    }
    const seq = body.phase_seq;
    const phase = Number.isInteger(seq) ? plan.phases.find((p) => p.seq === seq) : null;
    if (!phase || phase.kind !== 'play') fail(422, 'invalid_phase');
    const kind = body.kind === 'recovery' ? 'recovery' : 'normal';
    const offset = phaseOffset(plan, seq);
    const elapsed = t - planStart;

    if (body.type === 'play_start') {
      if (kind === 'normal') {
        // a recovery replay delays the whole remaining schedule (hoerenPosition, client phaseAt): both bounds shift
        if (elapsed < offset + m.plan_shift_ms - PLAY_TOLERANCE_MS) fail(409, 'play_too_early');
        if (elapsed > offset + m.plan_shift_ms + phase.ms + PLAY_TOLERANCE_MS) fail(409, 'play_window_closed');
        try {
          await env.DB.prepare(`INSERT INTO audio_plays (attempt_id, phase_seq, asset_id, play_no, kind, started_at, outcome) VALUES (?1, ?2, ?3, ?4, 'normal', ?5, 'started')`)
            .bind(attemptId, seq, phase.asset_id, phase.play_no, t).run();
        } catch { fail(409, 'play_limit_reached', 'This recording has already been played.'); }
        return { ok: true, phase_seq: seq, kind, server_now: t, plan_shift_ms: m.plan_shift_ms };
      }
      // OD-05 recovery replay: max. once per module, only for the LAST allowed play of a
      // segment whose normal play was reported interrupted while it was still playing.
      // Spoken instructions (recoverable: false) are never replayed and never use up the module's recovery.
      if (phase.recoverable === false) fail(409, 'recovery_not_applicable', 'Instructions are not replayed.');
      if (m.recovery_used >= (plan.recovery_replays_per_module ?? 1)) fail(409, 'recovery_exhausted');
      const normal = await env.DB.prepare("SELECT outcome FROM audio_plays WHERE attempt_id = ?1 AND phase_seq = ?2 AND kind = 'normal'").bind(attemptId, seq).first();
      if (!normal || normal.outcome !== 'interrupted') fail(409, 'recovery_not_applicable', 'Only an interrupted play can be recovered.');
      if (phase.play_no !== phase.plays_allowed) fail(409, 'recovery_not_applicable', 'The next normal play of this recording follows.');
      try {
        await env.DB.prepare(`INSERT INTO audio_plays (attempt_id, phase_seq, asset_id, play_no, kind, started_at, outcome) VALUES (?1, ?2, ?3, ?4, 'recovery', ?5, 'started')`)
          .bind(attemptId, seq, phase.asset_id, phase.play_no, t).run();
      } catch { fail(409, 'recovery_exhausted'); }
      await env.DB.prepare('UPDATE attempt_modules SET recovery_used = recovery_used + 1, plan_shift_ms = plan_shift_ms + ?3, deadline_at = deadline_at + ?3 WHERE attempt_id = ?1 AND module = ?2')
        .bind(attemptId, 'hoeren', phase.ms).run();
      await incident(env, attemptId, 'listening_recovery_replay', { phase_seq: seq });
      const cur = await moduleRow(env, attemptId, 'hoeren');
      return { ok: true, phase_seq: seq, kind, server_now: t, plan_shift_ms: cur.plan_shift_ms, deadline_at: cur.deadline_at };
    }

    if (body.type === 'play_end' || body.type === 'interrupted') {
      const outcome = body.type === 'play_end' ? 'complete' : 'interrupted';
      if (outcome === 'interrupted') {
        const row = await env.DB.prepare("SELECT started_at, outcome FROM audio_plays WHERE attempt_id = ?1 AND phase_seq = ?2 AND kind = ?3").bind(attemptId, seq, kind).first();
        if (!row || row.outcome !== 'started') fail(409, 'play_not_started');
        if (t >= row.started_at + phase.ms) fail(409, 'play_already_finished', 'The recording had already finished playing.');
        if (atomic) return {
          precondition: { sql: `EXISTS (SELECT 1 FROM attempt_modules WHERE attempt_id = ?4 AND module = 'hoeren' AND status = 'running')
              AND EXISTS (SELECT 1 FROM audio_plays WHERE attempt_id = ?4 AND phase_seq = ?5 AND kind = ?6 AND outcome = 'started')`, binds: [attemptId, seq, kind] },
          statements: [
            env.DB.prepare(`UPDATE audio_plays SET outcome = 'interrupted', ended_at = ?4 WHERE attempt_id = ?1 AND phase_seq = ?2 AND kind = ?3 AND outcome = 'started'`)
              .bind(attemptId, seq, kind, t),
            env.DB.prepare('INSERT INTO incidents (id, attempt_id, kind, detail_json, created_at) VALUES (?1, ?2, ?3, ?4, ?5)')
              .bind(`inc_${crypto.randomUUID()}`, attemptId, 'listening_play_interrupted', JSON.stringify({ phase_seq: seq, kind }), t)
          ],
          body: { ok: true, phase_seq: seq, kind, outcome, server_now: t }
        };
      }
      const r = await env.DB.prepare(`UPDATE audio_plays SET outcome = ?4, ended_at = ?5 WHERE attempt_id = ?1 AND phase_seq = ?2 AND kind = ?3 AND outcome = 'started'`)
        .bind(attemptId, seq, kind, outcome, t).run();
      if (!r.meta.changes) fail(409, 'play_not_started');
      if (outcome === 'interrupted') await incident(env, attemptId, 'listening_play_interrupted', { phase_seq: seq, kind });
      return { ok: true, phase_seq: seq, kind, outcome, server_now: t };
    }
    fail(422, 'invalid_event');
  };
  return atomic ? idempotentAtomic(env, attemptId, requestId, route, handler) : idempotent(env, attemptId, requestId, route, handler);
}

/* ---------- media tokens ---------- */
export async function requestMedia(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  await rateLimit(env, `media:${attemptId}`, 200, 60_000);
  const asset = await env.DB.prepare('SELECT asset_id, module, mime, bytes, duration_ms FROM form_assets WHERE form_id = ?1 AND asset_id = ?2')
    .bind(attempt.form_id, body.asset_id || '').first();
  if (!asset) fail(404, 'media_not_found');
  const m = await moduleRow(env, attemptId, asset.module);
  requireRunning(m, now(env), { grace: false });
  const purpose = asset.module === 'sprechen' ? 'prompt' : 'listen';
  const exp = now(env) + MEDIA_TTL_MS;
  const token = await signMediaToken(env, { attemptId, formId: attempt.form_id, assetId: asset.asset_id, purpose, exp });
  return { ok: true, url: `/exam/v1/media/${token}`, expires_at: exp, mime: asset.mime, bytes: asset.bytes, duration_ms: asset.duration_ms };
}

/* ---------- Sprechen: consent, chunked upload, turns ---------- */
const TURN_RE = /^t[0-9]{1,2}$/;

async function speakingItem(env, attempt, itemId, turn) {
  const pkg = await loadPackage(env, attempt.form_id, 'sprechen');
  const item = pkg.items.get(itemId || '');
  if (!item || item.interaction !== 'spoken_response') fail(422, 'unknown_item');
  if (!TURN_RE.test(turn || '') || !item.response_spec.turns.some((x) => x.turn === turn)) fail(422, 'unknown_turn');
  return item;
}

async function recordingWindow(env, attemptId, cfg) {
  const m = await moduleRow(env, attemptId, 'sprechen');
  const t = now(env);
  if (m.status === 'running') { if (t > m.deadline_at + SAVE_GRACE_MS + cfg.timing.upload_grace_seconds * 1000) fail(409, 'upload_window_closed'); return m; }
  const closed = m.status === 'submitted' || m.status === 'submitting';
  if (closed && t <= m.deadline_at + cfg.timing.upload_grace_seconds * 1000) return m;   // buffered chunks may still arrive
  if (closed) fail(409, 'upload_window_closed');
  fail(409, 'module_not_running');
}

async function requireConsent(env, attemptId) {
  const c = await env.DB.prepare("SELECT id FROM consents WHERE attempt_id = ?1 AND kind = 'speaking_recording' AND withdrawn_at IS NULL").bind(attemptId).first();
  if (!c) fail(403, 'consent_required');
}

export async function consent(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  return idempotent(env, attemptId, requestId, 'consent', async () => {
    if (body.granted !== true || typeof body.version !== 'string' || !/^[a-z0-9.@-]{1,32}$/.test(body.version)) fail(422, 'consent_invalid');
    const m = await moduleRow(env, attemptId, 'sprechen');
    if (m.status === 'submitted') fail(409, 'module_submitted');
    // granting an already active consent of the same version is a no-op (no second row, no second audit entry)
    const r = await env.DB.prepare(`INSERT INTO consents (id, user_id, attempt_id, kind, version, granted_at) SELECT ?1, ?2, ?3, 'speaking_recording', ?4, ?5
        WHERE NOT EXISTS (SELECT 1 FROM consents WHERE attempt_id = ?3 AND kind = 'speaking_recording' AND version = ?4 AND withdrawn_at IS NULL)`)
      .bind(`cns_${crypto.randomUUID()}`, attempt.user_id, attemptId, body.version, now(env)).run();
    if (r.meta.changes) await audit(env, userId, attemptId, 'speaking_consent', { version: body.version });
    return { ok: true, consent: true };
  });
}

export async function uploadChunk(env, userId, attemptId, request, url) {
  const q = (k) => url.searchParams.get(k);
  const { attempt } = await attemptCtx(env, userId, attemptId, q('lease_id'));
  const form = await formRow(env, attempt.form_id);
  const cfg = await levelConfig(env, form.level_config_id);
  const sc = moduleConfig(cfg, 'sprechen');
  await requireConsent(env, attemptId);
  await recordingWindow(env, attemptId, sc);
  await rateLimit(env, `chunk:${attemptId}`, 600, 60_000);
  const itemId = q('item_id'); const turn = q('turn');
  const item = await speakingItem(env, attempt, itemId, turn);
  const seq = Number(q('seq'));
  if (!Number.isInteger(seq) || seq < 0 || seq > 9999) fail(422, 'invalid_seq');
  const mime = (request.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  if (!sc.recording.mime_allow.includes(mime)) fail(415, 'unsupported_media_type');
  const declared = (q('sha256') || '').toLowerCase();
  if (!/^[0-9a-f]{64}$/.test(declared)) fail(422, 'checksum_required');
  const lenHeader = Number(request.headers.get('content-length') || 0);
  if (lenHeader > sc.recording.chunk_max_bytes) fail(413, 'chunk_too_large');
  const bytes = new Uint8Array(await request.arrayBuffer());
  if (!bytes.length) fail(422, 'empty_chunk');
  if (bytes.length > sc.recording.chunk_max_bytes) fail(413, 'chunk_too_large');
  const actual = await sha256Hex(bytes);
  if (actual !== declared) fail(422, 'checksum_mismatch');

  const turnRow = await env.DB.prepare('SELECT status FROM recording_turns WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3').bind(attemptId, item.part, turn).first();
  if (turnRow && turnRow.status === 'complete') fail(409, 'turn_closed');
  const existing = await env.DB.prepare('SELECT sha256 FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 AND seq = ?4').bind(attemptId, item.part, turn, seq).first();
  if (existing) {
    if (existing.sha256 === actual) return { ok: true, duplicate: true, seq };
    fail(409, 'chunk_conflict');
  }
  const total = await env.DB.prepare('SELECT COALESCE(SUM(bytes), 0) AS n FROM recording_chunks WHERE attempt_id = ?1').bind(attemptId).first();
  if (total.n + bytes.length > sc.recording.attempt_max_bytes) fail(413, 'recording_quota_exceeded');
  const r2Key = `rec/${attemptId}/p${item.part}/${turn}/${String(seq).padStart(4, '0')}`;
  await env.RECORDINGS.put(r2Key, bytes, { httpMetadata: { contentType: mime }, customMetadata: { sha256: actual } });
  const t = now(env);
  try {
    await env.DB.batch([
      env.DB.prepare('INSERT INTO recording_chunks (attempt_id, item_id, part, turn, seq, r2_key, bytes, sha256, mime, received_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)')
        .bind(attemptId, item.item_id, item.part, turn, seq, r2Key, bytes.length, actual, mime, t),
      env.DB.prepare(`INSERT INTO recording_turns (attempt_id, item_id, part, turn, status, chunks, bytes, opened_at) VALUES (?1, ?2, ?3, ?4, 'open', 1, ?5, ?6)
          ON CONFLICT(attempt_id, part, turn) DO UPDATE SET chunks = chunks + 1, bytes = bytes + excluded.bytes`)
        .bind(attemptId, item.item_id, item.part, turn, bytes.length, t)
    ]);
  } catch {
    const again = await env.DB.prepare('SELECT sha256 FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 AND seq = ?4').bind(attemptId, item.part, turn, seq).first();
    if (again && again.sha256 === actual) return { ok: true, duplicate: true, seq };
    fail(409, 'chunk_conflict');
  }
  log(env, 'chunk_stored', { attempt: attemptId, part: item.part, turn, seq, size: bytes.length });
  return { ok: true, seq, stored: true };
}

export async function completeTurn(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  return idempotent(env, attemptId, requestId, `turn:${body.item_id}:${body.turn}`, async () => {
    const form = await formRow(env, attempt.form_id);
    const sc = moduleConfig(await levelConfig(env, form.level_config_id), 'sprechen');
    await requireConsent(env, attemptId);
    await recordingWindow(env, attemptId, sc);
    const item = await speakingItem(env, attempt, body.item_id, body.turn);
    const n = body.chunks;
    if (!Number.isInteger(n) || n < 1 || n > 10000) fail(422, 'invalid_chunk_count');
    const dur = body.duration_ms;
    if (!Number.isInteger(dur) || dur < 0 || dur > sc.recording.turn_max_seconds * 1000 + 5000) fail(422, 'invalid_duration');
    const have = new Set((await env.DB.prepare('SELECT seq FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3').bind(attemptId, item.part, body.turn).all()).results.map((r) => r.seq));
    const missing = [];
    for (let i = 0; i < n; i++) if (!have.has(i)) missing.push(i);
    if (missing.length) fail(409, 'chunks_missing', 'Some recording chunks have not arrived yet.', { missing: missing.slice(0, 100) });
    if (have.size !== n) fail(409, 'chunk_count_mismatch');
    // A completed turn is never rewritten (SPEAKING §4.2.5): an identical repeat replays, different values conflict.
    // The status guard makes concurrent completions race-safe: only one of them can flip 'open' → 'complete'.
    const r = await env.DB.prepare("UPDATE recording_turns SET status = 'complete', duration_ms = ?4, completed_at = ?5 WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 AND status = 'open'")
      .bind(attemptId, item.part, body.turn, dur, now(env)).run();
    if (!r.meta.changes) {
      const cur = await env.DB.prepare('SELECT status, chunks, duration_ms FROM recording_turns WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3').bind(attemptId, item.part, body.turn).first();
      if (!cur || cur.status !== 'complete') fail(409, 'invalid_transition');
      if (cur.chunks !== n || cur.duration_ms !== dur) fail(409, 'turn_complete_conflict', 'This turn is already complete with different values.');
      return { ok: true, item_id: item.item_id, turn: body.turn, chunks: n, complete: true, already: true };
    }
    return { ok: true, item_id: item.item_id, turn: body.turn, chunks: n, complete: true };
  });
}

export async function speakingStatus(env, userId, attemptId, url) {
  await attemptCtx(env, userId, attemptId, url.searchParams.get('lease_id'));
  const turns = (await env.DB.prepare('SELECT item_id, part, turn, status, chunks, bytes, duration_ms FROM recording_turns WHERE attempt_id = ?1').bind(attemptId).all()).results;
  const chunks = (await env.DB.prepare('SELECT part, turn, seq, sha256 FROM recording_chunks WHERE attempt_id = ?1 ORDER BY part, turn, seq').bind(attemptId).all()).results;
  const c = await env.DB.prepare("SELECT 1 AS y FROM consents WHERE attempt_id = ?1 AND kind = 'speaking_recording' AND withdrawn_at IS NULL").bind(attemptId).first();
  return { ok: true, consent: !!c, turns, chunks };
}

/* ---------- completion + result ---------- */
export async function completeAttempt(env, userId, attemptId, request) {
  const body = await readJsonBody(request);
  const requestId = requireRequestId(body.request_id);
  // Completion ends the lease, so the owner's retry of a completion whose response was lost can never pass the
  // lease check: replay its stored, COMPLETED response first (ownership is still verified; the result is the owner's
  // anyway). A pending claim is not replayed: it falls through to the lease check and the claim (503 in progress).
  await loadAttempt(env, attemptId, userId);
  const done = await env.DB.prepare("SELECT status, response_json FROM request_log WHERE attempt_id = ?1 AND request_id = ?2 AND route = 'complete' AND state = 'completed'")
    .bind(attemptId, requestId).first();
  if (done) return { status: done.status, body: { ...JSON.parse(done.response_json), replayed: true } };
  const { attempt } = await attemptCtx(env, userId, attemptId, body.lease_id);
  // in-flight claim + one atomic batch: status, lease removal, result and audit commit with the completed response
  const out = await idempotentAtomic(env, attemptId, requestId, 'complete', async () => {
    if (attempt.status === 'completed') fail(409, 'invalid_transition');
    const mods = await attemptModules(env, attemptId);
    const pending = mods.filter((m) => m.status !== 'submitted').map((m) => m.module);
    if (pending.length) fail(409, 'modules_pending', 'Every module must be submitted first.', { modules: pending });
    const t = now(env);
    const result = await computeResult(env, await loadAttempt(env, attemptId, userId));
    return {
      precondition: { sql: `EXISTS (SELECT 1 FROM attempts WHERE id = ?4 AND status = 'in_progress')
          AND NOT EXISTS (SELECT 1 FROM attempt_modules WHERE attempt_id = ?4 AND status <> 'submitted')`, binds: [attemptId] },
      statements: [
        env.DB.prepare("UPDATE attempts SET status = 'completed', completed_at = ?2 WHERE id = ?1 AND status = 'in_progress'").bind(attemptId, t),
        env.DB.prepare('DELETE FROM attempt_leases WHERE attempt_id = ?1').bind(attemptId),
        resultUpsert(env, attemptId, result, t),
        env.DB.prepare('INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, ?3, ?4, ?5)')
          .bind(t, userId, attemptId, 'attempt_completed', '{}')
      ],
      body: { ok: true, attempt_id: attemptId, status: 'completed', result }
    };
  });
  if (!out.body.replayed) log(env, 'attempt_completed', { attempt: attemptId });
  return out;
}

export async function getResult(env, userId, attemptId) {
  const isStaff = await hasRole(env, userId, ['lead_rater', 'exam_admin']);
  const attempt = await loadAttempt(env, attemptId, userId, { allowAdmin: isStaff });
  if (attempt.status !== 'completed') fail(409, 'result_not_ready');
  const row = await env.DB.prepare('SELECT json FROM results WHERE attempt_id = ?1').bind(attemptId).first();
  const result = row ? JSON.parse(row.json) : await buildResult(env, attempt);
  return { ok: true, attempt_id: attemptId, result };
}

/* ---------- item review after submission (OD-48: keys never reach the browser before the module is submitted) ----------
   Owner only. Objectively scored modules only. Available once THAT module is submitted (SCORING §6 items[], OS §23.1).
   Numbering, stems and options come from the release package; keys, responses and per-item points from D1. */
export async function moduleReview(env, userId, attemptId, module) {
  const attempt = await loadAttempt(env, attemptId, userId);
  const form = await formRow(env, attempt.form_id);
  const mc = moduleConfig(await levelConfig(env, form.level_config_id), module);
  if (!mc || mc.scoring.strategy !== 'objective_table') fail(422, 'review_not_available', 'Only objectively scored modules have an item review.');
  const m = await moduleRow(env, attemptId, module);
  if (m.status !== 'submitted') fail(409, 'review_not_available', 'The review opens after this module has been submitted.');
  const pkg = (await loadPackage(env, attempt.form_id, module)).data;
  const index = Object.fromEntries((await env.DB.prepare('SELECT item_id, points, is_example FROM items_index WHERE form_id = ?1 AND module = ?2')
    .bind(attempt.form_id, module).all()).results.map((r) => [r.item_id, r]));
  const keys = Object.fromEntries((await env.DB.prepare('SELECT k.item_id, k.key_json FROM item_keys k JOIN items_index i ON i.item_id = k.item_id WHERE k.form_id = ?1 AND i.module = ?2')
    .bind(attempt.form_id, module).all()).results.map((r) => [r.item_id, JSON.parse(r.key_json)]));
  const resp = Object.fromEntries((await env.DB.prepare('SELECT item_id, value_json FROM responses_current WHERE attempt_id = ?1 AND module = ?2')
    .bind(attempt.id, module).all()).results.map((r) => [r.item_id, JSON.parse(r.value_json)]));
  const option = (it, id) => { const o = (it.options || []).find((x) => x.option_id === id); return o ? { option_id: o.option_id, label: o.label, text: o.text || null } : (id ? { option_id: id, label: id, text: null } : null); };
  const items = [], transcripts = [];   // listening scripts: released with the key, never before
  for (const p of pkg.parts) for (const t of p.tasks) for (const it of t.items) {
    const ix = index[it.item_id];
    if (!ix || ix.is_example || !ix.points) continue;   // examples and unscored items are not reviewed
    const key = keys[it.item_id], v = resp[it.item_id];
    const given = v && typeof v.option_id === 'string' ? v.option_id : null;
    const correct = key && key.kind === 'single' ? key.correct : null;
    const status = given === null ? 'unanswered' : given === correct ? 'correct' : 'incorrect';
    const rv = (key && key.review) || {};
    items.push({ item_id: it.item_id, part: p.part, display_no: it.display_no, stem: it.stem, your_answer: option(it, given), correct_answer: option(it, correct),
      status, points: status === 'correct' ? ix.points : 0, max_points: ix.points,
      explanation: rv.explanation_de || null, evidence: (rv.evidence || []).map((e) => ({ asset_id: e.asset_id, start: e.start, end: e.end, text: e.text })) });
    for (const tr of rv.transcripts || []) if (!transcripts.some((x) => x.asset_id === tr.asset_id)) transcripts.push({ asset_id: tr.asset_id, part: p.part, text: tr.text });
  }
  const count = (k) => items.filter((i) => i.status === k).length;
  return { ok: true, attempt_id: attempt.id, module, items, transcripts,
    summary: { correct: count('correct'), incorrect: count('incorrect'), unanswered: count('unanswered'), total: items.length } };
}

/* ---------- rated feedback after a FINAL Schreiben/Sprechen score (SCORING §6 writing[]/speaking[] criteria) ----------
   Owner only. Per rubric unit: the mean of the two counted ratings (rounds 1 and 2) per criterion and in total — the
   same mean the final score is built from. Never a rater id, an individual band or an individual rater's total. A
   rater's zero rule (Erfüllung E) counts as 0 for every criterion, so the criteria add up to the unit total. Not
   available while ratings are pending, or when a third rating was involved (its combination is a separate rule). */
export async function moduleFeedback(env, userId, attemptId, module) {
  const attempt = await loadAttempt(env, attemptId, userId);
  if (module !== 'schreiben' && module !== 'sprechen') fail(422, 'feedback_not_available', 'Only rated modules have criterion feedback.');
  const score = await env.DB.prepare('SELECT status, points, max_points, rule_flags_json FROM module_scores WHERE attempt_id = ?1 AND module = ?2').bind(attempt.id, module).first();
  if (!score || score.status !== 'final') fail(409, 'feedback_not_available', 'Criterion feedback opens when the module is finally rated.');
  if (JSON.parse(score.rule_flags_json || '{}').third_rating_required) fail(409, 'feedback_not_available', 'Not available for a module with a third rating.');
  const form = await formRow(env, attempt.form_id);
  const cfg = await levelConfig(env, form.level_config_id);
  const items = (await env.DB.prepare('SELECT item_id, part, rubric_id FROM items_index WHERE form_id = ?1 AND module = ?2').bind(attempt.form_id, module).all()).results;
  const ratings = (await env.DB.prepare("SELECT item_id, round, points_json, total FROM ratings WHERE attempt_id = ?1 AND module = ?2 AND round IN (1, 2) AND rater_kind IN ('teacher', 'lead')")
    .bind(attempt.id, module).all()).results;
  const texts = module === 'schreiben' ? Object.fromEntries((await env.DB.prepare('SELECT item_id, text, words, target_words FROM writing_final WHERE attempt_id = ?1').bind(attempt.id).all()).results.map((w) => [w.item_id, w])) : {};
  const half = (x) => Math.round(x * 100) / 100;
  const units = rubricUnits(cfg, module, items).map((u) => {
    const rubric = cfg.rubrics[u.rubric_id];
    const rs = [1, 2].map((round) => ratings.find((r) => r.item_id === u.item_id && r.round === round));
    if (rs.some((r) => !r)) fail(409, 'feedback_not_available');
    const per = rs.map((r) => { const pts = JSON.parse(r.points_json); return r.total === 0 ? Object.fromEntries(Object.keys(pts).map((c) => [c, 0])) : pts; });
    const w = texts[u.item_id];
    return {
      item_id: u.item_id, part: u.item_id === 'sprechen:pron' ? null : (items.find((i) => i.item_id === u.item_id) || {}).part ?? null,
      total: half((rs[0].total + rs[1].total) / 2), max: Object.values(rubric.criteria).reduce((n, v) => n + v[0], 0),
      zero_rule: rs.some((r, i) => r.total === 0 && Object.values(JSON.parse(r.points_json)).some((p) => p > 0)),
      criteria: Object.entries(rubric.criteria).map(([c, values]) => ({ criterion: c, points: half((per[0][c] + per[1][c]) / 2), max: values[0] })),
      ...(w ? { text: w.text, words: w.words, target_words: w.target_words } : {})
    };
  });
  return { ok: true, attempt_id: attempt.id, module, points: score.points, max_points: score.max_points, units };
}

/* ---------- staff: ratings (two independent human raters are authoritative) ---------- */
export async function submitRating(env, userId, request) {
  const body = await readJsonBody(request);
  const isLead = await hasRole(env, userId, ['lead_rater']);
  if (!isLead && !(await hasRole(env, userId, ['rater']))) fail(403, 'rater_role_required');
  if (![1, 2, 3].includes(body.round)) fail(422, 'invalid_round');
  if (body.round === 3 && !isLead) fail(403, 'lead_rater_required');
  const attempt = await loadAttempt(env, body.attempt_id || '', userId, { allowAdmin: true });
  if (attempt.user_id === userId) fail(403, 'cannot_rate_own_attempt');
  const form = await formRow(env, attempt.form_id);
  const cfg = await levelConfig(env, form.level_config_id);
  const module = body.item_id === 'sprechen:pron' ? 'sprechen'
    : (await env.DB.prepare('SELECT module FROM items_index WHERE item_id = ?1 AND form_id = ?2').bind(body.item_id || '', attempt.form_id).first())?.module;
  if (module !== 'schreiben' && module !== 'sprechen') fail(422, 'not_rateable');
  const m = await moduleRow(env, attempt.id, module);
  if (m.status !== 'submitted') fail(409, 'module_not_submitted');
  const items = (await env.DB.prepare('SELECT item_id, rubric_id FROM items_index WHERE form_id = ?1 AND module = ?2').bind(attempt.form_id, module).all()).results;
  const unit = rubricUnits(cfg, module, items).find((u) => u.item_id === body.item_id);
  if (!unit) fail(422, 'not_rateable');
  if (!body.bands || typeof body.bands !== 'object' || Object.values(body.bands).some((b) => !BANDS.includes(b))) fail(422, 'invalid_bands');
  let total;
  try { total = rubricTotal(cfg.rubrics[unit.rubric_id], body.bands); } catch (e) { fail(422, 'invalid_bands', e.message); }
  const other = await env.DB.prepare('SELECT round FROM ratings WHERE attempt_id = ?1 AND module = ?2 AND rater_id = ?3 AND round != ?4 LIMIT 1')
    .bind(attempt.id, module, userId, body.round).first();
  if (other) fail(409, 'rater_not_independent', 'Each round must come from a different rater.');
  try {
    await env.DB.prepare(`INSERT INTO ratings (id, attempt_id, module, item_id, rubric_id, rater_id, rater_kind, round, bands_json, points_json, total, submitted_at)
        VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)`)
      .bind(`rtg_${crypto.randomUUID()}`, attempt.id, module, unit.item_id, unit.rubric_id, userId, isLead ? 'lead' : 'teacher', body.round,
        JSON.stringify(body.bands), JSON.stringify(total.points), total.total, now(env)).run();
  } catch { fail(409, 'already_rated'); }
  const s = await scoreModule(env, attempt, module);
  if (attempt.status === 'completed') await buildResult(env, attempt);
  await audit(env, userId, attempt.id, 'rating_submitted', { module, item: unit.item_id, round: body.round });
  return { ok: true, module, item_id: unit.item_id, round: body.round, total: total.total, module_status: s.status };
}

/* Rater playback of one recorded Sprechen turn (SPEAKING §6: private storage, no public URL, rater-bound access).
   Bound to the rater's own session (no bearer URL at all): rater or lead_rater role, never the rater's own attempt,
   only after the Sprechen module was submitted. Chunks are re-checked against their stored SHA-256 and joined in
   seq order; gaps stay gaps (the metadata view shows them). Every playback is audit-logged; nothing is cached. */
export async function recordingForRating(env, userId, attemptId, part, turn) {
  if (!(await hasRole(env, userId, ['rater', 'lead_rater']))) fail(403, 'rater_role_required');
  const attempt = await loadAttempt(env, attemptId, userId, { allowAdmin: true });
  if (attempt.user_id === userId) fail(403, 'cannot_rate_own_attempt');
  const { response, chunks } = await submittedRecording(env, attempt, part, turn);
  await audit(env, userId, attempt.id, 'recording_played_by_rater', { part: Number(part), turn, chunks });
  return response;
}

/* One recorded turn of a SUBMITTED Sprechen module, chunks re-checked against their stored SHA-256 and joined in seq
   order (gaps stay gaps). Shared by rater playback and the learner's own replay; callers do the authorization. */
async function submittedRecording(env, attempt, part, turn) {
  const m = await moduleRow(env, attempt.id, 'sprechen');
  if (m.status !== 'submitted') fail(409, 'module_not_submitted');
  const chunks = (await env.DB.prepare('SELECT seq, r2_key, sha256, mime FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 ORDER BY seq')
    .bind(attempt.id, Number(part), turn).all()).results;
  if (!chunks.length) fail(404, 'recording_not_found');
  const parts = [];
  for (const c of chunks) {
    const obj = await env.RECORDINGS.get(c.r2_key);
    if (!obj) fail(503, 'recording_unavailable');
    const bytes = new Uint8Array(await obj.arrayBuffer());
    if ((await sha256Hex(bytes)) !== c.sha256) fail(503, 'recording_integrity');
    parts.push(bytes);
  }
  const body = new Uint8Array(parts.reduce((n, b) => n + b.length, 0));
  let o = 0; for (const b of parts) { body.set(b, o); o += b.length; }
  return { chunks: chunks.length, response: new Response(body, { status: 200, headers: { 'content-type': chunks[0].mime, 'content-length': String(body.length),
    'cache-control': 'private, no-store', 'x-content-type-options': 'nosniff', 'content-disposition': 'inline' } }) };
}

/* The learner's own recordings after submitting Sprechen (SPEAKING §6: "Learners may replay their own recordings in
   review until deletion"). Owner only — another user's attempt is indistinguishable from a missing one. */
export async function myRecordings(env, userId, attemptId) {
  const attempt = await loadAttempt(env, attemptId, userId);
  const m = await moduleRow(env, attempt.id, 'sprechen');
  if (m.status !== 'submitted') fail(409, 'module_not_submitted');
  const turns = (await env.DB.prepare(`SELECT t.part, t.turn, t.status, t.duration_ms,
      (SELECT COUNT(*) FROM recording_chunks c WHERE c.attempt_id = t.attempt_id AND c.part = t.part AND c.turn = t.turn) AS chunks
      FROM recording_turns t WHERE t.attempt_id = ?1 ORDER BY t.part, t.turn`).bind(attempt.id).all()).results;
  return { ok: true, attempt_id: attempt.id, recordings: turns.map((t) => ({ part: t.part, turn: t.turn, complete: t.status === 'complete', duration_ms: t.duration_ms, available: t.chunks > 0 })) };
}
export async function myRecording(env, userId, attemptId, part, turn) {
  const attempt = await loadAttempt(env, attemptId, userId);
  return (await submittedRecording(env, attempt, part, turn)).response;
}

export async function productiveForRating(env, userId, attemptId) {
  if (!(await hasRole(env, userId, ['rater', 'lead_rater']))) fail(403, 'rater_role_required');
  const attempt = await loadAttempt(env, attemptId, userId, { allowAdmin: true });
  if (attempt.user_id === userId) fail(403, 'cannot_rate_own_attempt');
  const writing = (await env.DB.prepare('SELECT item_id, text, words, target_words, below_half_target, sha256 FROM writing_final WHERE attempt_id = ?1').bind(attempt.id).all()).results;
  const turns = (await env.DB.prepare('SELECT item_id, part, turn, status, chunks, bytes, duration_ms FROM recording_turns WHERE attempt_id = ?1').bind(attempt.id).all()).results;
  /* What the rating API validates against, so a rating UI never guesses: every rubric unit with its prompt, criteria
     (band → points, bands A..E) and which rounds are already taken. Other raters' bands are never returned. */
  const form = await formRow(env, attempt.form_id);
  const cfg = await levelConfig(env, form.level_config_id);
  const mods = Object.fromEntries((await env.DB.prepare("SELECT module, status FROM attempt_modules WHERE attempt_id = ?1 AND module IN ('schreiben','sprechen')").bind(attempt.id).all()).results.map((m) => [m.module, m]));
  const scores = Object.fromEntries((await env.DB.prepare("SELECT module, status, points, max_points FROM module_scores WHERE attempt_id = ?1 AND module IN ('schreiben','sprechen')").bind(attempt.id).all()).results.map((r) => [r.module, r]));
  const rated = (await env.DB.prepare('SELECT item_id, round, rater_id FROM ratings WHERE attempt_id = ?1').bind(attempt.id).all()).results;
  const units = [];
  let topic = null;
  for (const module of ['schreiben', 'sprechen']) {
    const items = (await env.DB.prepare('SELECT item_id, rubric_id FROM items_index WHERE form_id = ?1 AND module = ?2').bind(attempt.form_id, module).all()).results;
    const pkg = (await loadPackage(env, attempt.form_id, module)).data;
    if (module === 'sprechen') topic = await speakingTopic(env, attempt.id, pkg);
    const prompt = {};
    for (const p of pkg.parts) for (const t of p.tasks) for (const it of t.items) prompt[it.item_id] = { part: p.part, stem: it.stem || null, instructions: t.instructions || null };
    for (const u of rubricUnits(cfg, module, items)) {
      const rub = cfg.rubrics[u.rubric_id];
      units.push({ module, item_id: u.item_id, rubric_id: u.rubric_id, part: (prompt[u.item_id] || {}).part ?? null, stem: (prompt[u.item_id] || {}).stem ?? null,
        instructions: (prompt[u.item_id] || {}).instructions ?? null, criteria: rub.criteria, zero_rule: rub.zero_rule || null,
        rounds_taken: rated.filter((r) => r.item_id === u.item_id).map((r) => ({ round: r.round, mine: r.rater_id === userId })) });
    }
  }
  const modules = ['schreiben', 'sprechen'].map((m) => ({ module: m, status: mods[m] ? mods[m].status : null, score_status: scores[m] ? scores[m].status : null,
    points: scores[m] && scores[m].status === 'final' ? scores[m].points : null, max_points: scores[m] ? scores[m].max_points : null }));
  return { ok: true, attempt_id: attempt.id, label: RESULT_LABEL, writing, recordings: turns, bands: BANDS, modules, units, topic,
    lead: await hasRole(env, userId, ['lead_rater']) };
}

/* The learner's Sprechen Teil 2 topic (raters judge Teil 2 against it) and the partner talk that topic implies for
   Teil 3 (OD-32: the partner presents the other topic). null when the form has no topic choice. */
async function speakingTopic(env, attemptId, pkg) {
  const tasks = pkg.parts.flatMap((p) => p.tasks);
  const item = tasks.flatMap((t) => t.items).find((it) => it.interaction === 'topic_choice');
  if (!item) return null;
  const row = await env.DB.prepare('SELECT value_json FROM responses_current WHERE attempt_id = ?1 AND item_id = ?2').bind(attemptId, item.item_id).first();
  const optionId = row ? (JSON.parse(row.value_json) || {}).option_id || null : null;
  const option = item.options.find((o) => o.option_id === optionId) || null;
  const partners = tasks.flatMap((t) => t.stimuli || []).filter((st) => st.role === 'partner_audio');
  const partner = partners.find((st) => st.for_topic !== undefined && st.for_topic === optionId) || partners.find((st) => st.for_topic === undefined) || partners[0] || null;
  return { item_id: item.item_id, option_id: optionId, label: option ? option.label : null, partner_asset_id: partner ? partner.asset_id : null };
}

/* Rating queue for raters: attempts whose Schreiben or Sprechen is submitted and not yet final. No learner identity is
   returned, and a rater never sees their own attempts. */
export async function ratingQueue(env, userId) {
  if (!(await hasRole(env, userId, ['rater', 'lead_rater']))) fail(403, 'rater_role_required');
  const rows = (await env.DB.prepare(`SELECT m.attempt_id, m.module, m.submitted_at, s.status AS score_status FROM attempt_modules m
      JOIN attempts a ON a.id = m.attempt_id LEFT JOIN module_scores s ON s.attempt_id = m.attempt_id AND s.module = m.module
      WHERE m.module IN ('schreiben','sprechen') AND m.status = 'submitted' AND a.user_id != ?1 AND (s.status IS NULL OR s.status != 'final')
      ORDER BY m.submitted_at, m.attempt_id LIMIT 100`).bind(userId).all()).results;
  const mine = (await env.DB.prepare('SELECT attempt_id, module, round FROM ratings WHERE rater_id = ?1').bind(userId).all()).results;
  const out = new Map();
  for (const r of rows) {
    if (!out.has(r.attempt_id)) out.set(r.attempt_id, { attempt_id: r.attempt_id, modules: [] });
    out.get(r.attempt_id).modules.push({ module: r.module, submitted_at: r.submitted_at, score_status: r.score_status || 'pending_rating',
      my_rounds: [...new Set(mine.filter((x) => x.attempt_id === r.attempt_id && x.module === r.module).map((x) => x.round))] });
  }
  return { ok: true, attempts: [...out.values()] };
}
