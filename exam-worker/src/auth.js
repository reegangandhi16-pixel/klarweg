/* klarweg-exam is never public (workers_dev = false, no routes). It is reached
   only through the klarweg-access service binding, which resolves the session
   cookie and forwards the user id in X-KW-User together with the shared
   EXAM_PROXY_SECRET in X-KW-Proxy-Auth. The proxy strips any X-KW-* header
   the browser sent, so a client cannot assert an identity. */
import { fail, timingSafeEqualStr, now } from './http.js';

const USER_RE = /^usr_[0-9a-f-]{36}$/;

export function verifyProxy(request, env) {
  const secret = env.EXAM_PROXY_SECRET;
  if (typeof secret !== 'string' || secret.length < 32) fail(503, 'exam_misconfigured', 'Proxy secret missing.');
  if (!timingSafeEqualStr(request.headers.get('x-kw-proxy-auth') || '', secret)) fail(401, 'proxy_auth_required');
}

export function requireUser(request) {
  const id = request.headers.get('x-kw-user') || '';
  if (!USER_RE.test(id)) fail(401, 'auth_required', 'Sign in to use the exam.');
  return id;
}

export async function hasRole(env, userId, roles) {
  const r = await env.DB.prepare(`SELECT role FROM exam_roles WHERE user_id = ?1 AND role IN (${roles.map((_, i) => `?${i + 2}`).join(',')}) LIMIT 1`)
    .bind(userId, ...roles).first();
  return !!r;
}

/* Exam entitlement is separate from chapter/level entitlement (register OD-18). */
export async function hasExamAccess(env, userId, level, scope) {
  const t = Math.floor(now(env) / 1000);
  const r = await env.DB.prepare(
    `SELECT id FROM exam_access WHERE user_id = ?1 AND level = ?2 AND scope = ?3 AND revoked_at IS NULL
       AND (valid_until IS NULL OR valid_until > ?4) LIMIT 1`).bind(userId, level, scope, t).first();
  return !!r;
}
