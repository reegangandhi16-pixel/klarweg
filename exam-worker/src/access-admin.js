/* Exam-access management for authorised administrators (OD-18: exam access is its own grant, separate from chapter
   entitlement). exam_admin only; every /exam/v1/admin/* route also needs a fresh second factor (OD-19, index.js).
   Grants are individual and explicit: nothing here grants access to every signed-in user or follows a payment — that
   commercial rule (OD-42) is not decided. Every grant and revocation writes an audit_log row in the same transaction. */
import { fail, now, readJsonBody } from './http.js';
import { hasRole, USER_RE } from './auth.js';

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
