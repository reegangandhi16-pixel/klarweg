/* ratelimit.js — fixed-window login throttle in D1.
   Ported from report/worker/src/ratelimit.js's proven checkLoginLimit /
   recordLoginFailure pattern — same table shape (rate_counters), same
   peek-before-bump-after-failure design. Scoped to /auth/login and
   /auth/signup. */

const LOGIN_LIMIT = { max: 10, win: 15 * 60 * 1000 };

/* Signup has no "failed password" concept — every attempt (valid or not)
   counts, since the thing being throttled is account-creation volume
   itself, not credential guessing. Generous enough for a real person
   retrying a typo'd email a few times, tight enough to blunt a script. */
const SIGNUP_LIMIT = { max: 6, win: 15 * 60 * 1000 };

function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

async function hmacHex(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(String(secret)),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(String(message)));
  return [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, "0")).join("");
}

/* Pseudonymous per-IP bucket key: HMAC(ip + UTC day, RATE_SALT). The raw
   IP is never stored — only this daily-rotating hash. */
async function ipBucket(env, request, prefix = "li") {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  return prefix + ":" + await hmacHex(env.RATE_SALT || "dev-salt", ip + "|" + day);
}

/* Read-only: is this IP currently within budget? Call BEFORE verifying
   the password, so a blocked caller never even reaches password compare. */
export async function checkLoginLimit(env, request, now = Date.now()) {
  const key = await ipBucket(env, request);
  const end = windowEnd(now, LOGIN_LIMIT.win);
  const row = await env.DB.prepare(
    "SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2"
  ).bind(key, end).first();
  const hits = row ? row.hits : 0;
  return hits < LOGIN_LIMIT.max
    ? { ok: true }
    : { ok: false, retryAfter: Math.max(1, Math.ceil((end - now) / 1000)) };
}

/* Only called after a FAILED login attempt — successful logins never
   count against the budget. */
export async function recordLoginFailure(env, request, now = Date.now()) {
  const key = await ipBucket(env, request);
  const end = windowEnd(now, LOGIN_LIMIT.win);
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind(key, end).run();
}

/* Read-only: is this IP currently within its signup budget? Call BEFORE
   any validation or DB write, so a blocked caller never touches the
   users table at all. */
export async function checkSignupLimit(env, request, now = Date.now()) {
  const key = await ipBucket(env, request, "si");
  const end = windowEnd(now, SIGNUP_LIMIT.win);
  const row = await env.DB.prepare(
    "SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2"
  ).bind(key, end).first();
  const hits = row ? row.hits : 0;
  return hits < SIGNUP_LIMIT.max
    ? { ok: true }
    : { ok: false, retryAfter: Math.max(1, Math.ceil((end - now) / 1000)) };
}

/* Called on every signup attempt regardless of outcome — see SIGNUP_LIMIT
   comment for why this differs from the login (failures-only) pattern. */
export async function recordSignupAttempt(env, request, now = Date.now()) {
  const key = await ipBucket(env, request, "si");
  const end = windowEnd(now, SIGNUP_LIMIT.win);
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind(key, end).run();
}

/* Authenticated-endpoint variant: bucketed by the already-authenticated
   user id (an opaque app-generated identifier, not raw PII like an IP),
   so mutation volume is bounded per account rather than per network.
   Used by Saved Words POST/DELETE/PATCH. Every attempt counts, same
   "record regardless of outcome" reasoning as signup — the thing being
   bounded is write volume itself, not credential guessing. Does not
   touch LOGIN_LIMIT or SIGNUP_LIMIT above. */
const SAVED_WORDS_LIMIT = { max: 200, win: 15 * 60 * 1000 };

export async function checkSavedWordsLimit(env, userId, now = Date.now()) {
  const key = "sw:" + userId;
  const end = windowEnd(now, SAVED_WORDS_LIMIT.win);
  const row = await env.DB.prepare(
    "SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2"
  ).bind(key, end).first();
  const hits = row ? row.hits : 0;
  return hits < SAVED_WORDS_LIMIT.max
    ? { ok: true }
    : { ok: false, retryAfter: Math.max(1, Math.ceil((end - now) / 1000)) };
}

export async function recordSavedWordsAttempt(env, userId, now = Date.now()) {
  const key = "sw:" + userId;
  const end = windowEnd(now, SAVED_WORDS_LIMIT.win);
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind(key, end).run();
}

/* Cheap housekeeping — call opportunistically, never blocks a response. */
export async function sweepRateCounters(env, now = Date.now()) {
  try {
    await env.DB.prepare("DELETE FROM rate_counters WHERE window_end < ?1").bind(now).run();
  } catch { /* housekeeping only */ }
}
