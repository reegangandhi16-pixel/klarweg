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

/* Anonymous homepage-chat identity: HMAC(network + UTC day, RATE_SALT),
   the same daily-rotating pseudonym as ipBucket — the raw IP is never
   stored. IPv6 is grouped by its /64 prefix (one subscriber's network),
   so rotating addresses inside it does not buy extra questions; IPv4 and
   IPv4-mapped IPv6 use the full address. Returns null when there is no
   usable client IP, so anonymous use fails closed. */
export function networkOf(ip) {
  ip = String(ip || "").trim().toLowerCase();
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) return ip;
  if (!ip.includes(":") || !/^[0-9a-f:.]+$/.test(ip)) return null;
  const v4 = ip.match(/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/);
  if (v4) return v4[1];
  const halves = ip.split("::");
  if (halves.length > 2) return null;
  const head = halves[0] ? halves[0].split(":") : [];
  const tail = halves.length === 2 && halves[1] ? halves[1].split(":") : [];
  const fill = halves.length === 2 ? 8 - head.length - tail.length : 0;
  if (fill < 0) return null;
  const groups = [...head, ...Array(fill).fill("0"), ...tail];
  if (groups.length !== 8 || groups.some((g) => !/^[0-9a-f]{1,4}$/.test(g))) return null;
  return groups.slice(0, 4).map((g) => g.padStart(4, "0")).join(":") + "::/64";
}

export async function anonymousChatId(env, request) {
  const net = networkOf(request.headers.get("CF-Connecting-IP"));
  if (!net) return null;
  const day = new Date().toISOString().slice(0, 10);
  return "anon:" + await hmacHex(env.RATE_SALT || "dev-salt", "chat|" + net + "|" + day);
}

/* Cheap housekeeping — call opportunistically, never blocks a response. */
export async function sweepRateCounters(env, now = Date.now()) {
  try {
    await env.DB.prepare("DELETE FROM rate_counters WHERE window_end < ?1").bind(now).run();
  } catch { /* housekeeping only */ }
}
