/* Attempt state machine, device lease, idempotency and server-authoritative
   deadlines. Module states: locked → available → running → submitted.
   Attempt states: created → in_progress → completed (or voided by admin).
   The browser never decides its deadline, form, score or pass/fail. */
import { fail, now, sha256Hex, LEASE_ID_RE, REQUEST_ID_RE } from './http.js';
import { log } from './log.js';
import { formRow, levelConfig, moduleConfig, loadPackage } from './content.js';
import { scoreObjectiveModule, scoreRubricModule, rubricUnits, SCORING_VERSION } from './scoring.js';
import { countWords } from './wordcount.js';

export const LEASE_TTL_MS = 60_000;
export const SAVE_GRACE_MS = 10_000;          // register: server deadline + 10 s grace for in-flight saves

/* ---------- attempt loading ---------- */
export async function loadAttempt(env, attemptId, userId, { allowAdmin = false } = {}) {
  const a = await env.DB.prepare('SELECT * FROM attempts WHERE id = ?1').bind(attemptId).first();
  // a foreign attempt id is indistinguishable from a missing one (no existence oracle)
  if (!a || (a.user_id !== userId && !allowAdmin)) fail(404, 'attempt_not_found');
  return a;
}

export async function attemptModules(env, attemptId) {
  return (await env.DB.prepare('SELECT * FROM attempt_modules WHERE attempt_id = ?1 ORDER BY module_order').bind(attemptId).all()).results;
}

export async function audit(env, actor, attemptId, action, detail = {}) {
  await env.DB.prepare('INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, ?3, ?4, ?5)')
    .bind(now(env), actor, attemptId, action, JSON.stringify(detail)).run();
}

/* ---------- idempotency ---------- */
export function requireRequestId(id) {
  if (!REQUEST_ID_RE.test(id || '')) fail(400, 'request_id_required');
  return id;
}

/* Runs fn once per (attempt, request id). A retried request gets the stored
   response; a request id reused for a different route is refused. */
export async function idempotent(env, attemptId, requestId, route, fn) {
  const prior = await env.DB.prepare('SELECT route, status, response_json FROM request_log WHERE attempt_id = ?1 AND request_id = ?2')
    .bind(attemptId, requestId).first();
  if (prior) {
    if (prior.route !== route) fail(409, 'request_id_reused');
    return { status: prior.status, body: { ...JSON.parse(prior.response_json), replayed: true } };
  }
  const body = await fn();
  try {
    await env.DB.prepare('INSERT INTO request_log (attempt_id, request_id, route, status, response_json, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6)')
      .bind(attemptId, requestId, route, 200, JSON.stringify(body), now(env)).run();
  } catch {
    /* concurrent duplicate already recorded — the operation itself is idempotent */
  }
  return { status: 200, body };
}

/* ---------- device lease ---------- */
export async function acquireLease(env, attempt, deviceId, takeover) {
  const t = now(env);
  const cur = await env.DB.prepare('SELECT * FROM attempt_leases WHERE attempt_id = ?1').bind(attempt.id).first();
  if (cur && cur.expires_at > t && !takeover) {
    fail(409, 'lease_held', 'This exam is open in another tab or on another device.', { same_device: cur.device_id === deviceId });
  }
  const leaseId = `ls_${crypto.randomUUID()}`;
  const gen = cur ? cur.generation + 1 : 1;
  await env.DB.prepare(`INSERT INTO attempt_leases (attempt_id, lease_id, device_id, generation, issued_at, renewed_at, expires_at)
      VALUES (?1, ?2, ?3, ?4, ?5, ?5, ?6)
    ON CONFLICT(attempt_id) DO UPDATE SET lease_id = excluded.lease_id, device_id = excluded.device_id, generation = excluded.generation,
      issued_at = excluded.issued_at, renewed_at = excluded.renewed_at, expires_at = excluded.expires_at`)
    .bind(attempt.id, leaseId, deviceId, gen, t, t + LEASE_TTL_MS).run();
  if (cur) {
    const kind = cur.expires_at > t ? 'lease_takeover' : 'lease_reacquired';
    await audit(env, attempt.user_id, attempt.id, kind, { from_device_same: cur.device_id === deviceId, generation: gen });
    if (kind === 'lease_takeover') await incident(env, attempt.id, 'lease_takeover', { generation: gen, same_device: cur.device_id === deviceId });
  }
  log(env, 'lease_issued', { attempt: attempt.id, generation: gen, takeover: !!takeover });
  return { lease_id: leaseId, generation: gen, expires_at: t + LEASE_TTL_MS, ttl_ms: LEASE_TTL_MS };
}

export async function requireLease(env, attempt, leaseId, { renew = true } = {}) {
  if (!LEASE_ID_RE.test(leaseId || '')) fail(400, 'lease_required');
  const t = now(env);
  const cur = await env.DB.prepare('SELECT * FROM attempt_leases WHERE attempt_id = ?1').bind(attempt.id).first();
  if (!cur || cur.lease_id !== leaseId) fail(409, 'lease_superseded', 'This exam continued in another tab or on another device.');
  if (cur.expires_at <= t) fail(409, 'lease_expired', 'Connection lost for too long — reconnect to continue.');
  if (renew) {
    await env.DB.prepare('UPDATE attempt_leases SET renewed_at = ?2, expires_at = ?3 WHERE attempt_id = ?1 AND lease_id = ?4')
      .bind(attempt.id, t, t + LEASE_TTL_MS, leaseId).run();
  }
  return { ...cur, expires_at: renew ? t + LEASE_TTL_MS : cur.expires_at };
}

export async function incident(env, attemptId, kind, detail) {
  await env.DB.prepare('INSERT INTO incidents (id, attempt_id, kind, detail_json, created_at) VALUES (?1, ?2, ?3, ?4, ?5)')
    .bind(`inc_${crypto.randomUUID()}`, attemptId, kind, JSON.stringify(detail || {}), now(env)).run();
}

/* ---------- deadlines ---------- */
export function computeDeadline(cfg, modCfg, pkg, startedAt, { planStartedAt = null, shiftMs = 0, multiplier = 1 } = {}) {
  const tm = pkg.data.timing;
  if (tm.kind === 'fixed') return startedAt + Math.round(tm.seconds * 1000 * multiplier);
  if (tm.kind === 'phase_plan') {
    const readiness = (modCfg.timing.readiness_allowance_seconds ?? 120) * 1000;
    const jitter = (modCfg.timing.jitter_allowance_seconds ?? 60) * 1000;
    const base = planStartedAt ?? startedAt + readiness;
    return base + tm.plan.total_ms + shiftMs + jitter;
  }
  if (tm.kind === 'speaking_phases') {
    const p = tm.plan;
    return speakingPrepEnd(p, startedAt, multiplier) + (p.total_ms - p.prep_ms);
  }
  throw new Error(`unknown timing kind ${tm.kind}`);
}

/* End of the Sprechen preparation (SPEAKING-SPEC §2): the time multiplier applies to the preparation only.
   The Teil 2 topic choice locks here (changeable during the preparation). */
export function speakingPrepEnd(plan, startedAt, multiplier = 1) {
  return startedAt + Math.round(plan.prep_ms * multiplier);
}

/* ---------- settle: auto-submit past deadline; resume interrupted finalizations ---------- */
export async function settle(env, attempt) {
  const t = now(env);
  const mods = await attemptModules(env, attempt.id);
  let changed = false;
  for (const m of mods) {
    if (m.status === 'running' && m.deadline_at !== null && t > m.deadline_at + SAVE_GRACE_MS) {
      await closeModule(env, attempt, m, 'auto_deadline');
      changed = true;
    }
  }
  for (const m of await attemptModules(env, attempt.id)) {
    if (m.status !== 'submitting') continue;
    try { await finalizeModule(env, attempt, m.module); changed = true; }
    catch (e) { log(env, 'finalize_deferred', { attempt: attempt.id, module: m.module, error: (e && (e.code || e.name)) || 'Error' }); }
  }
  return changed;
}

/* Module submission is two-phase so it can never strand an attempt:
     1. closeModule     running → submitting  (stops saves; records time + kind)
     2. finalizeModule  computes frozen writing + score, then ONE D1 batch
                        (a transaction) writes them, unlocks the next module,
                        audits, and flips submitting → submitted.
   Every batch statement is guarded on the module still being 'submitting',
   so a repeated finalization is a no-op. A failure before or inside the
   batch leaves 'submitting'; any retry of the submit request, any later
   attempt request (settle) or the cron sweep finalizes it. */
export async function submitModule(env, attempt, m, kind) {
  await closeModule(env, attempt, m, kind);
  return finalizeModule(env, attempt, m.module);
}

async function closeModule(env, attempt, m, kind) {
  const t = now(env);
  const r = await env.DB.prepare(`UPDATE attempt_modules SET status = 'submitting', submitted_at = ?3, submit_kind = ?4
      WHERE attempt_id = ?1 AND module = ?2 AND status = 'running'`).bind(attempt.id, m.module, Math.min(t, m.deadline_at + SAVE_GRACE_MS), kind).run();
  return r.meta.changes > 0;
}

export async function finalizeModule(env, attempt, module) {
  const mods = await attemptModules(env, attempt.id);
  const cur = mods.find((x) => x.module === module);
  if (!cur || cur.status !== 'submitting') return false;
  // compute everything first: a failure here writes nothing and leaves 'submitting'
  const writing = module === 'schreiben' ? await computeWritingFinal(env, attempt) : [];
  const score = await computeScore(env, attempt, module);
  const next = mods.filter((x) => x.module_order > cur.module_order).sort((a, b) => a.module_order - b.module_order)[0];
  const t = now(env);
  const G = "EXISTS (SELECT 1 FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2 AND status = 'submitting')";
  const stmts = [];
  for (const w of writing) {
    stmts.push(env.DB.prepare(`INSERT OR IGNORE INTO writing_final (attempt_id, item_id, text, words, target_words, below_half_target, sha256, frozen_at)
        SELECT ?1, ?3, ?4, ?5, ?6, ?7, ?8, ?9 WHERE ${G}`)
      .bind(attempt.id, module, w.item_id, w.text, w.words, w.target, w.below_half ? 1 : 0, w.sha256, t));
  }
  stmts.push(scoreUpsert(env, attempt.id, module, score, t, G));
  if (next) {
    stmts.push(env.DB.prepare(`UPDATE attempt_modules SET status = 'available' WHERE attempt_id = ?1 AND module = ?3 AND status = 'locked' AND ${G}`)
      .bind(attempt.id, module, next.module));
  }
  stmts.push(env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) SELECT ?3, ?4, ?1, 'module_submitted', ?5 WHERE ${G}`)
    .bind(attempt.id, module, t, attempt.user_id, JSON.stringify({ module, kind: cur.submit_kind })));
  stmts.push(env.DB.prepare(`UPDATE attempt_modules SET status = 'submitted' WHERE attempt_id = ?1 AND module = ?2 AND status = 'submitting'`)
    .bind(attempt.id, module));
  await env.DB.batch(stmts);
  const after = await env.DB.prepare('SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2').bind(attempt.id, module).first();
  if (after.status === 'submitted') log(env, 'module_submitted', { attempt: attempt.id, module, kind: cur.submit_kind });
  return after.status === 'submitted';
}

async function computeWritingFinal(env, attempt) {
  const items = (await env.DB.prepare("SELECT item_id FROM items_index WHERE form_id = ?1 AND module = 'schreiben' AND interaction = 'text_response'")
    .bind(attempt.form_id).all()).results;
  const pkg = await loadPackage(env, attempt.form_id, 'schreiben');
  const out = [];
  for (const it of items) {
    const cur = await env.DB.prepare('SELECT value_json FROM responses_current WHERE attempt_id = ?1 AND item_id = ?2').bind(attempt.id, it.item_id).first();
    const text = cur ? (JSON.parse(cur.value_json).text || '') : '';
    const words = countWords(text);
    const target = pkg.items.get(it.item_id)?.response_spec?.target_words ?? null;
    out.push({ item_id: it.item_id, text, words, target, below_half: !!(target && words < target / 2), sha256: await sha256Hex(text) });
  }
  return out;
}

/* ---------- scoring ---------- */
async function computeScore(env, attempt, module) {
  const form = await formRow(env, attempt.form_id);
  const cfg = await levelConfig(env, form.level_config_id);
  const mc = moduleConfig(cfg, module);
  if (!mc) throw new Error(`no module config for ${module}`);
  const items = (await env.DB.prepare('SELECT item_id, points, rubric_id, is_example FROM items_index WHERE form_id = ?1 AND module = ?2')
    .bind(attempt.form_id, module).all()).results;
  if (mc.scoring.strategy === 'objective_table') {
    const keys = Object.fromEntries((await env.DB.prepare('SELECT k.item_id, k.key_json FROM item_keys k JOIN items_index i ON i.item_id = k.item_id WHERE k.form_id = ?1 AND i.module = ?2')
      .bind(attempt.form_id, module).all()).results.map((r) => [r.item_id, JSON.parse(r.key_json)]));
    const resp = Object.fromEntries((await env.DB.prepare('SELECT item_id, value_json FROM responses_current WHERE attempt_id = ?1 AND module = ?2')
      .bind(attempt.id, module).all()).results.map((r) => [r.item_id, JSON.parse(r.value_json)]));
    return scoreObjectiveModule(cfg, mc, items, keys, resp);
  }
  const ratings = (await env.DB.prepare('SELECT item_id, rubric_id, round, rater_kind, total FROM ratings WHERE attempt_id = ?1 AND module = ?2')
    .bind(attempt.id, module).all()).results;
  return scoreRubricModule(cfg, mc, rubricUnits(cfg, module, items), ratings);
}

function scoreUpsert(env, attemptId, module, s, t, guard = '1') {
  return env.DB.prepare(`INSERT INTO module_scores (attempt_id, module, status, raw, raw_unrounded, raw_max, points, max_points, pass, predikat, rule_flags_json, scoring_version, computed_at)
      SELECT ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13 WHERE ${guard}
    ON CONFLICT(attempt_id, module) DO UPDATE SET status = excluded.status, raw = excluded.raw, raw_unrounded = excluded.raw_unrounded, raw_max = excluded.raw_max,
      points = excluded.points, max_points = excluded.max_points, pass = excluded.pass, predikat = excluded.predikat, rule_flags_json = excluded.rule_flags_json,
      scoring_version = excluded.scoring_version, computed_at = excluded.computed_at`)
    .bind(attemptId, module, s.status, s.raw, s.raw_unrounded, s.raw_max, s.points, s.max_points, s.pass === null ? null : s.pass ? 1 : 0, s.predikat,
      JSON.stringify(s.rule_flags || {}), SCORING_VERSION, t);
}

/* Re-score after a rating (module already submitted). */
export async function scoreModule(env, attempt, module) {
  const s = await computeScore(env, attempt, module);
  await scoreUpsert(env, attempt.id, module, s, now(env)).run();
  return s;
}

/* ---------- result ---------- */
export const RESULT_LABEL = 'KLARWEG B1 SIMULATION — TEST RESULT';

export async function buildResult(env, attempt) {
  const form = await formRow(env, attempt.form_id);
  const rows = (await env.DB.prepare('SELECT * FROM module_scores WHERE attempt_id = ?1').bind(attempt.id).all()).results;
  const mods = await attemptModules(env, attempt.id);
  const result = {
    label: RESULT_LABEL,
    level: attempt.level,
    form_kind: form.kind,
    test_content: form.kind === 'synthetic',
    disclaimer: 'Klarweg B1 Simulation. Not an official Goethe-Institut result and not a certificate. Modules are reported separately; there is no combined score.',
    modules: mods.map((m) => {
      const s = rows.find((r) => r.module === m.module);
      const flags = s ? JSON.parse(s.rule_flags_json || '{}') : {};
      return {
        module: m.module,
        submitted: m.status === 'submitted',
        submit_kind: m.submit_kind,
        status: s ? s.status : 'not_taken',
        points: s && s.status === 'final' ? s.points : null,
        max_points: s ? s.max_points : 100,
        pass: s && s.status === 'final' ? !!s.pass : null,
        predikat: s && s.status === 'final' ? s.predikat : null,
        counts: s && 'correct' in flags ? { correct: flags.correct, incorrect: flags.incorrect, unanswered: flags.unanswered } : null,
        note: !s ? null : s.status === 'pending_rating' ? 'Awaiting two independent human ratings.'
          : s.status === 'pending_rule' ? 'Ratings complete; final points await a scoring rule that is not yet configured.' : null
      };
    })
  };
  await env.DB.prepare('INSERT INTO results (attempt_id, json, computed_at) VALUES (?1, ?2, ?3) ON CONFLICT(attempt_id) DO UPDATE SET json = excluded.json, computed_at = excluded.computed_at')
    .bind(attempt.id, JSON.stringify(result), now(env)).run();
  return result;
}
