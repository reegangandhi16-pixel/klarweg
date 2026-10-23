/* Exam-access management for authorised administrators (OD-18: exam access is its own grant, separate from chapter
   entitlement). exam_admin only; every /exam/v1/admin/* route also needs a fresh second factor (OD-19, index.js).
   Grants are individual and explicit: nothing here grants access to every signed-in user or follows a payment — that
   commercial rule (OD-42) is not decided. Every grant and revocation writes an audit_log row in the same transaction. */
import { fail, now, readJsonBody } from './http.js';
import { hasRole, USER_RE } from './auth.js';
import { releaseSet, practicePool } from './release.js';

const LEVELS = { b1: 'B1' };
const SCOPES = ['synthetic', 'mock', 'sets'];
const REASON_MIN = 3, REASON_MAX = 500;

async function requireExamAdmin(env, userId) {
  if (!(await hasRole(env, userId, ['exam_admin']))) fail(403, 'exam_admin_required', 'Only exam administrators can manage exam access.');
}
function reasonText(v) {
  const r = typeof v === 'string' ? v.normalize('NFC').trim() : '';
  if (r.length < REASON_MIN || r.length > REASON_MAX) fail(422, 'reason_required', `A reason of ${REASON_MIN}–${REASON_MAX} characters is required.`);
  return r;
}
export function grantStatus(g, tSec) {
  if (g.revoked_at !== null && g.revoked_at !== undefined) return 'revoked';
  if (g.valid_until !== null && g.valid_until !== undefined && g.valid_until <= tSec) return 'expired';
  return 'active';
}
const view = (g, tSec) => ({ grant_id: g.id, user_id: g.user_id, level: g.level, scope: g.scope, source: g.source, reason: g.reason ?? null,
  granted_by: g.granted_by ?? null, granted_at: g.granted_at, valid_until: g.valid_until ?? null,
  revoked_at: g.revoked_at ?? null, revoked_by: g.revoked_by ?? null, revoke_reason: g.revoke_reason ?? null, status: grantStatus(g, tSec) });

/* GET /admin/access?user_id=… → every grant of that user (newest first) with its status, the effective access per level
   and scope, and the access audit trail. */
export async function inspectAccess(env, adminId, url) {
  await requireExamAdmin(env, adminId);
  const userId = url.searchParams.get('user_id') || '';
  if (!USER_RE.test(userId)) fail(400, 'invalid_user_id');
  const t = Math.floor(now(env) / 1000);
  const grants = (await env.DB.prepare('SELECT * FROM exam_access WHERE user_id = ?1 ORDER BY granted_at DESC, id').bind(userId).all()).results.map((g) => view(g, t));
  const effective = {};
  for (const lvl of Object.values(LEVELS)) effective[lvl] = Object.fromEntries(SCOPES.map((s) => [s, grants.some((g) => g.level === lvl && g.scope === s && g.status === 'active')]));
  const audit = (await env.DB.prepare(`SELECT at, actor, action, detail_json FROM audit_log WHERE action IN ('access_granted', 'access_revoked')
      AND json_extract(detail_json, '$.user_id') = ?1 ORDER BY at DESC, id DESC LIMIT 100`).bind(userId).all()).results
    .map((a) => ({ at: a.at, actor: a.actor, action: a.action, detail: JSON.parse(a.detail_json) }));
  return { ok: true, server_now: now(env), user_id: userId, grants, effective, audit,
    is_exam_admin: await hasRole(env, userId, ['exam_admin']) };
}

/* POST /admin/access/grants { user_id, level, scope, reason, valid_until? (unix seconds, in the future) } */
export async function grantAccess(env, adminId, request) {
  await requireExamAdmin(env, adminId);
  const body = await readJsonBody(request);
  if (!USER_RE.test(body.user_id || '')) fail(400, 'invalid_user_id');
  const level = LEVELS[body.level];
  if (!level) fail(400, 'invalid_level');
  if (!SCOPES.includes(body.scope)) fail(400, 'invalid_scope');
  const reason = reasonText(body.reason);
  const t = Math.floor(now(env) / 1000);
  let validUntil = null;
  if (body.valid_until !== undefined && body.valid_until !== null) {
    if (!Number.isInteger(body.valid_until) || body.valid_until <= t) fail(422, 'invalid_valid_until', 'valid_until must be a future time in unix seconds.');
    validUntil = body.valid_until;
  }
  const active = await env.DB.prepare(`SELECT id FROM exam_access WHERE user_id = ?1 AND level = ?2 AND scope = ?3 AND revoked_at IS NULL
      AND (valid_until IS NULL OR valid_until > ?4) LIMIT 1`).bind(body.user_id, level, body.scope, t).first();
  if (active) fail(409, 'grant_exists', 'This user already has active access for that level and scope.', { grant_id: active.id });
  const id = `xa_${crypto.randomUUID()}`;
  const detail = { grant_id: id, user_id: body.user_id, level, scope: body.scope, valid_until: validUntil, reason };
  // inserted only while no active grant exists (a concurrent grant cannot create a second active one); audited only if inserted
  await env.DB.batch([
    env.DB.prepare(`INSERT INTO exam_access (id, user_id, level, scope, source, granted_by, granted_at, valid_until, reason)
        SELECT ?1, ?2, ?3, ?4, 'admin_grant', ?5, ?6, ?7, ?8 WHERE NOT EXISTS (SELECT 1 FROM exam_access WHERE user_id = ?2 AND level = ?3 AND scope = ?4
          AND revoked_at IS NULL AND (valid_until IS NULL OR valid_until > ?6))`).bind(id, body.user_id, level, body.scope, adminId, t, validUntil, reason),
    env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) SELECT ?1, ?2, NULL, 'access_granted', ?3
        WHERE EXISTS (SELECT 1 FROM exam_access WHERE id = ?4)`).bind(now(env), adminId, JSON.stringify(detail), id)
  ]);
  const g = await env.DB.prepare('SELECT * FROM exam_access WHERE id = ?1').bind(id).first();
  if (!g) fail(409, 'grant_exists', 'This user already has active access for that level and scope.');
  return { ok: true, grant: view(g, t) };
}

/* POST /admin/access/grants/:id/revoke { reason } — idempotent only in effect: a second revoke is refused (409). */
export async function revokeAccess(env, adminId, grantId, request) {
  await requireExamAdmin(env, adminId);
  if (!/^[A-Za-z0-9_:-]{1,80}$/.test(grantId)) fail(400, 'invalid_grant_id');   // also hand-made ids such as xa_owner
  const body = await readJsonBody(request);
  const reason = reasonText(body.reason);
  const g = await env.DB.prepare('SELECT * FROM exam_access WHERE id = ?1').bind(grantId).first();
  if (!g) fail(404, 'grant_not_found');
  if (g.revoked_at !== null) fail(409, 'already_revoked');
  const t = Math.floor(now(env) / 1000);
  const detail = { grant_id: g.id, user_id: g.user_id, level: g.level, scope: g.scope, reason };
  await env.DB.batch([
    env.DB.prepare('UPDATE exam_access SET revoked_at = ?2, revoked_by = ?3, revoke_reason = ?4 WHERE id = ?1 AND revoked_at IS NULL').bind(g.id, t, adminId, reason),
    env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json)
        SELECT ?1, ?2, NULL, 'access_revoked', ?3 WHERE EXISTS (SELECT 1 FROM exam_access WHERE id = ?4 AND revoked_by = ?2 AND revoked_at = ?5)
          AND NOT EXISTS (SELECT 1 FROM audit_log WHERE action = 'access_revoked' AND json_extract(detail_json, '$.grant_id') = ?4)`)
      .bind(now(env), adminId, JSON.stringify(detail), g.id, t)
  ]);
  const after = await env.DB.prepare('SELECT * FROM exam_access WHERE id = ?1').bind(g.id).first();
  if (after.revoked_by !== adminId || after.revoked_at !== t) fail(409, 'already_revoked');   // a concurrent revoke won
  return { ok: true, grant: view(after, t) };
}

/* ---------- accommodations (OD-41: CONFIGURABLE, admin-granted only; ENGINE §2) ----------
   Extra time as a time multiplier, per user. It is copied into each attempt WHEN THE ATTEMPT IS CREATED, so a change
   never alters a running or finished attempt. The reason field states the basis (e.g. "evidence checked per EX-08,
   ref …"); evidence documents themselves are never stored here. Whether and how accommodations are offered is the
   owner's policy decision (D5); this mechanism enables nothing on its own. */
export const MULTIPLIERS = [1.25, 1.5, 1.75, 2.0];
const accView = (a, tSec) => (a ? { time_multiplier: a.time_multiplier, granted_by: a.granted_by ?? null, granted_at: a.granted_at, valid_until: a.valid_until ?? null,
  reason: a.reason ?? null, status: a.valid_until !== null && a.valid_until !== undefined && a.valid_until <= tSec ? 'expired' : 'active' } : null);

export async function inspectAccommodation(env, adminId, url) {
  await requireExamAdmin(env, adminId);
  const userId = url.searchParams.get('user_id') || '';
  if (!USER_RE.test(userId)) fail(400, 'invalid_user_id');
  const t = Math.floor(now(env) / 1000);
  const a = await env.DB.prepare('SELECT * FROM accommodations WHERE user_id = ?1').bind(userId).first();
  const audit = (await env.DB.prepare(`SELECT at, actor, action, detail_json FROM audit_log WHERE action IN ('accommodation_set', 'accommodation_removed')
      AND json_extract(detail_json, '$.user_id') = ?1 ORDER BY at DESC, id DESC LIMIT 100`).bind(userId).all()).results
    .map((r) => ({ at: r.at, actor: r.actor, action: r.action, detail: JSON.parse(r.detail_json) }));
  return { ok: true, user_id: userId, accommodation: accView(a, t), audit, allowed_multipliers: MULTIPLIERS };
}

/* POST /admin/accommodations { user_id, time_multiplier, reason, valid_until? } — sets (or replaces) the accommodation. */
export async function setAccommodation(env, adminId, request) {
  await requireExamAdmin(env, adminId);
  const body = await readJsonBody(request);
  if (!USER_RE.test(body.user_id || '')) fail(400, 'invalid_user_id');
  if (!MULTIPLIERS.includes(body.time_multiplier)) fail(422, 'invalid_time_multiplier', `time_multiplier must be one of ${MULTIPLIERS.join(', ')}.`);
  const reason = reasonText(body.reason);
  const t = Math.floor(now(env) / 1000);
  let validUntil = null;
  if (body.valid_until !== undefined && body.valid_until !== null) {
    if (!Number.isInteger(body.valid_until) || body.valid_until <= t) fail(422, 'invalid_valid_until', 'valid_until must be a future time in unix seconds.');
    validUntil = body.valid_until;
  }
  const before = await env.DB.prepare('SELECT time_multiplier FROM accommodations WHERE user_id = ?1').bind(body.user_id).first();
  const detail = { user_id: body.user_id, time_multiplier: body.time_multiplier, valid_until: validUntil, reason, replaced: before ? before.time_multiplier : null };
  await env.DB.batch([
    env.DB.prepare(`INSERT INTO accommodations (user_id, time_multiplier, granted_by, granted_at, valid_until, reason) VALUES (?1, ?2, ?3, ?4, ?5, ?6)
        ON CONFLICT(user_id) DO UPDATE SET time_multiplier = excluded.time_multiplier, granted_by = excluded.granted_by, granted_at = excluded.granted_at,
          valid_until = excluded.valid_until, reason = excluded.reason`).bind(body.user_id, body.time_multiplier, adminId, t, validUntil, reason),
    env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, NULL, 'accommodation_set', ?3)`)
      .bind(now(env), adminId, JSON.stringify(detail))
  ]);
  return { ok: true, accommodation: accView(await env.DB.prepare('SELECT * FROM accommodations WHERE user_id = ?1').bind(body.user_id).first(), t) };
}

/* POST /admin/accommodations/remove { user_id, reason } */
export async function removeAccommodation(env, adminId, request) {
  await requireExamAdmin(env, adminId);
  const body = await readJsonBody(request);
  if (!USER_RE.test(body.user_id || '')) fail(400, 'invalid_user_id');
  const reason = reasonText(body.reason);
  const cur = await env.DB.prepare('SELECT time_multiplier FROM accommodations WHERE user_id = ?1').bind(body.user_id).first();
  if (!cur) fail(404, 'accommodation_not_found');
  const detail = { user_id: body.user_id, time_multiplier: cur.time_multiplier, reason };
  await env.DB.batch([
    env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) SELECT ?1, ?2, NULL, 'accommodation_removed', ?3
        WHERE EXISTS (SELECT 1 FROM accommodations WHERE user_id = ?4)`).bind(now(env), adminId, JSON.stringify(detail), body.user_id),
    env.DB.prepare('DELETE FROM accommodations WHERE user_id = ?1').bind(body.user_id)
  ]);
  return { ok: true, accommodation: null };
}

/* ---------- lookup by learner email (POST /admin/access/lookup) ----------
   klarweg-access resolves the email (it alone stores emails) and forwards only the result in trusted headers
   (x-kw-lookup-user = usr_… | none, x-kw-lookup-created = unix seconds); the browser cannot set x-kw-* headers. The role
   is checked FIRST, so a non-admin gets the same refusal whether or not the address exists. Rate-limited per
   administrator; audited without the email (found + user id only). Returns just what is needed to confirm the person and
   continue with the audited grant/revoke flow. */
export const LOOKUP_LIMIT = 20, LOOKUP_WINDOW_MS = 10 * 60 * 1000;
export async function lookupUser(env, adminId, request) {
  await requireExamAdmin(env, adminId);
  const t = now(env);
  const windowEnd = Math.ceil(t / LOOKUP_WINDOW_MS) * LOOKUP_WINDOW_MS;
  await env.DB.prepare('INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1')
    .bind(`lookup:${adminId}`, windowEnd).run();
  const hits = (await env.DB.prepare('SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2').bind(`lookup:${adminId}`, windowEnd).first()).hits;
  if (hits > LOOKUP_LIMIT) fail(429, 'rate_limited');
  const found = request.headers.get('x-kw-lookup-user');
  if (found === null) fail(400, 'lookup_unavailable', 'Lookups are resolved by the sign-in service.');
  const userId = found === 'none' ? null : found;
  if (userId !== null && !USER_RE.test(userId)) fail(502, 'lookup_unavailable');
  await env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, NULL, 'access_lookup', ?3)`)
    .bind(t, adminId, JSON.stringify(userId ? { found: true, user_id: userId } : { found: false })).run();
  if (!userId) fail(404, 'user_not_found', 'No Klarweg account uses this email address.');
  const created = Number(request.headers.get('x-kw-lookup-created'));
  return { ok: true, user_id: userId, account_created: Number.isFinite(created) && created > 0 ? created : null };
}

/* GET /admin/attempts?user_id= — support view (exam_admin, fresh second factor via the router): the user's latest
   attempts with per-module status and their incidents (interruptions, takeovers, failed downloads …). Read-only and
   minimal: no answers, recordings, scores or texts. Every view is audited (attempts_viewed). */
export const ATTEMPTS_VIEW_LIMIT = 20, INCIDENTS_PER_ATTEMPT = 50;
export async function listAttempts(env, adminId, url) {
  await requireExamAdmin(env, adminId);
  const userId = url.searchParams.get('user_id') || '';
  if (!USER_RE.test(userId)) fail(400, 'invalid_user_id');
  const rows = (await env.DB.prepare(`SELECT id, mode, level, module_scope, part_scope, status, time_multiplier, created_at, started_at, completed_at
      FROM attempts WHERE user_id = ?1 ORDER BY created_at DESC, id LIMIT ?2`).bind(userId, ATTEMPTS_VIEW_LIMIT).all()).results;
  const attempts = [];
  for (const a of rows) {
    const modules = (await env.DB.prepare(`SELECT module, status, started_at, submitted_at, submit_kind, recovery_used FROM attempt_modules
        WHERE attempt_id = ?1 ORDER BY module_order`).bind(a.id).all()).results
      .map((m) => ({ module: m.module, status: m.status, started_at: m.started_at, submitted_at: m.submitted_at, submit_kind: m.submit_kind, recovery_used: !!m.recovery_used }));
    const incidents = (await env.DB.prepare(`SELECT kind, detail_json, created_at FROM incidents WHERE attempt_id = ?1 ORDER BY created_at, id LIMIT ?2`)
      .bind(a.id, INCIDENTS_PER_ATTEMPT).all()).results.map((i) => ({ kind: i.kind, at: i.created_at, detail: safeJson(i.detail_json) }));
    attempts.push({ attempt_id: a.id, mode: a.mode, level: a.level, module_scope: a.module_scope, part_scope: a.part_scope, status: a.status,
      time_multiplier: a.time_multiplier, created_at: a.created_at, started_at: a.started_at, completed_at: a.completed_at, modules, incidents });
  }
  await env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, NULL, 'attempts_viewed', ?3)`)
    .bind(now(env), adminId, JSON.stringify({ user_id: userId, attempts: attempts.length })).run();
  return { ok: true, server_now: now(env), user_id: userId, attempts, limit: ATTEMPTS_VIEW_LIMIT };
}
function safeJson(s) { try { const v = JSON.parse(s); return v && typeof v === 'object' ? v : {}; } catch { return {}; } }

/* GET /admin/forms/usage — ENGINE §7.6 "Admin visibility: assignment log and per-form counts in the admin dashboard".
   exam_admin only (fresh second factor via the router). Aggregates per form — no learner identities, answers or
   scores: attempts by status and kind (full / one module / one part), how they were assigned (unseen vs least-seen),
   the number of distinct learners, the last assignment, and whether the form is in the active learner release set or
   the single-part practice pool. Every view is audited (form_usage_viewed). */
export async function formUsage(env, adminId) {
  await requireExamAdmin(env, adminId);
  const forms = (await env.DB.prepare('SELECT id, label, kind, purpose, status, rev, release FROM forms ORDER BY kind, id').all()).results;
  const rows = (await env.DB.prepare(`SELECT form_id, status, module_scope IS NOT NULL AS one_module, part_scope IS NOT NULL AS one_part,
      CASE WHEN assignment_reason LIKE 'csprng_uniform_unseen%' THEN 'unseen' WHEN assignment_reason LIKE 'csprng_uniform_least_seen%' THEN 'least_seen' ELSE 'other' END AS how,
      COUNT(*) AS n, MAX(created_at) AS last_at
      FROM attempts GROUP BY form_id, status, one_module, one_part, how`).all()).results;
  const learners = Object.fromEntries((await env.DB.prepare('SELECT form_id, COUNT(DISTINCT user_id) AS n FROM attempts GROUP BY form_id').all()).results.map((r) => [r.form_id, r.n]));
  const rel = await releaseSet(env), pool = await practicePool(env);
  const blank = () => ({ attempts: 0, by_status: {}, by_kind: { full: 0, module: 0, part: 0 }, by_assignment: { unseen: 0, least_seen: 0, other: 0 }, learners: 0, last_assigned_at: null });
  const usage = Object.fromEntries(forms.map((f) => [f.id, blank()]));
  for (const r of rows) {
    const u = usage[r.form_id] || (usage[r.form_id] = blank());
    u.attempts += r.n;
    u.by_status[r.status] = (u.by_status[r.status] || 0) + r.n;
    u.by_kind[r.one_part ? 'part' : r.one_module ? 'module' : 'full'] += r.n;
    u.by_assignment[r.how] += r.n;
    u.last_assigned_at = Math.max(u.last_assigned_at || 0, r.last_at);
  }
  for (const [id, n] of Object.entries(learners)) if (usage[id]) usage[id].learners = n;
  const out = forms.map((f) => ({ form_id: f.id, label: f.label, kind: f.kind, purpose: f.purpose, status: f.status, rev: f.rev, release: f.release,
    in_release_set: !!(rel.ids && rel.ids.includes(f.id)), in_practice_pool: !!(pool.ids && pool.ids.includes(f.id)), ...usage[f.id] }));
  await env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, NULL, 'form_usage_viewed', ?3)`)
    .bind(now(env), adminId, JSON.stringify({ forms: out.length })).run();
  return { ok: true, server_now: now(env), release_set: rel.ids ? { ids: rel.ids } : { block: rel.block }, practice_pool: pool.ids ? { ids: pool.ids } : { block: pool.block }, forms: out };
}
