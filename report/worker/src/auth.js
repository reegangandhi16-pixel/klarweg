/* auth.js — admin passphrase, sessions and CSRF.

   No public signup, no user table, no client-side password check. The
   passphrase is only ever known as a PBKDF2 hash in a Worker secret, and
   only the SHA-256 of a session token is stored in D1, so a database dump
   cannot be replayed as a login. */
import { randomToken, sha256Hex, safeEqual, ipHash } from './ids.js';
import { checkLoginLimit, recordLoginFailure } from './ratelimit.js';

export const COOKIE = 'kw_admin';
export const CSRF_COOKIE = 'kw_admin_csrf';
export const SESSION_MS = 8 * 60 * 60 * 1000;          // 8 hours
const PBKDF2_ITERS = 210000;

/* ---------- passphrase ---------- */

/** PBKDF2-SHA256(passphrase, salt) → base64. Same routine used by
 *  tools/hash-passphrase.mjs so the stored hash always matches. */
export async function derive(passphrase, saltB64, iters = PBKDF2_ITERS) {
  const salt = Uint8Array.from(atob(saltB64), c => c.charCodeAt(0));
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: iters, hash: 'SHA-256' }, key, 256
  );
  return btoa(String.fromCharCode(...new Uint8Array(bits)));
}

/* ---------- cookies ---------- */

export function parseCookies(req) {
  const out = {};
  const raw = req.headers.get('Cookie') || '';
  raw.split(';').forEach(part => {
    const i = part.indexOf('=');
    if (i < 0) return;
    out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  });
  return out;
}

function cookie(name, value, maxAge, httpOnly) {
  return name + '=' + value +
    '; Path=/; Max-Age=' + maxAge + '; SameSite=Strict; Secure' +
    (httpOnly ? '; HttpOnly' : '');
}

/* ---------- sessions ---------- */

async function tokenHash(env, token) {
  return sha256Hex(token + '|' + (env.SESSION_PEPPER || 'dev-pepper'));
}

/** Verified session or null. Deny-by-default: every admin route calls this. */
export async function getSession(env, req) {
  const token = parseCookies(req)[COOKIE];
  if (!token || token.length < 16 || token.length > 128) return null;
  const row = await env.DB.prepare(
    'SELECT admin_id, expires_at FROM admin_sessions WHERE token_hash = ?'
  ).bind(await tokenHash(env, token)).first();
  if (!row) return null;
  if (row.expires_at <= Date.now()) return null;
  return { adminId: row.admin_id };
}

/** Deny-by-default guard. Returns null when authorised, or a 401 Response. */
export async function requireAdmin(env, req) {
  const s = await getSession(env, req);
  if (s) return { session: s, response: null };
  return {
    session: null,
    response: new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  };
}

/** Double-submit CSRF: the header must match the non-HttpOnly cookie.
 *  A cross-site page can neither read the cookie nor set the header. */
export function checkCsrf(req) {
  const cookieVal = parseCookies(req)[CSRF_COOKIE];
  const headerVal = req.headers.get('X-KW-CSRF');
  return !!cookieVal && !!headerVal && safeEqual(cookieVal, headerVal);
}

export async function login(env, req, passphrase) {
  const ip = await ipHash(env, req);

  const gate = await checkLoginLimit(env, ip);
  if (!gate.ok) return { ok: false, code: 'rate_limited', retryAfter: gate.retryAfter };

  if (!env.ADMIN_PASSPHRASE_HASH || !env.ADMIN_PASSPHRASE_SALT) {
    return { ok: false, code: 'not_configured' };
  }
  if (typeof passphrase !== 'string' || !passphrase || passphrase.length > 256) {
    await recordLoginFailure(env, ip);
    return { ok: false, code: 'invalid' };
  }

  const candidate = await derive(passphrase, env.ADMIN_PASSPHRASE_SALT);
  if (!safeEqual(candidate, env.ADMIN_PASSPHRASE_HASH)) {
    await recordLoginFailure(env, ip);
    return { ok: false, code: 'invalid' };
  }

  const token = randomToken(32);
  const csrf = randomToken(24);
  const now = Date.now();
  await env.DB.prepare(
    'INSERT INTO admin_sessions (token_hash, admin_id, created_at, expires_at) VALUES (?, ?, ?, ?)'
  ).bind(await tokenHash(env, token), 'admin', now, now + SESSION_MS).run();

  return {
    ok: true, csrf,
    cookies: [
      cookie(COOKIE, token, SESSION_MS / 1000, true),
      cookie(CSRF_COOKIE, csrf, SESSION_MS / 1000, false)
    ]
  };
}

export async function logout(env, req) {
  const token = parseCookies(req)[COOKIE];
  if (token) {
    try {
      await env.DB.prepare('DELETE FROM admin_sessions WHERE token_hash = ?')
        .bind(await tokenHash(env, token)).run();
    } catch (e) { /* revoking a missing session is not an error */ }
  }
  return [cookie(COOKIE, '', 0, true), cookie(CSRF_COOKIE, '', 0, false)];
}
