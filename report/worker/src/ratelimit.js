/* ratelimit.js — fixed-window counters in D1.

   Buckets are pseudonymous (HMAC of IP + day, see ids.js). No raw IP is
   ever written. Windows are aligned to wall-clock multiples so a row is
   shared by everyone in the same window and expires naturally. */

export const LIMITS = {
  reportHour:       { max: 5,   win: 60 * 60 * 1000 },
  reportDay:        { max: 20,  win: 24 * 60 * 60 * 1000 },
  // Submissions that arrived without a verified Turnstile token.
  unverifiedHour:   { max: 2,   win: 60 * 60 * 1000 },
  globalDay:        { max: 300, win: 24 * 60 * 60 * 1000 },
  login:            { max: 5,   win: 15 * 60 * 1000 }
};

function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

/** Increment one bucket and report whether it is still within budget. */
async function bump(env, key, limit, now = Date.now()) {
  const end = windowEnd(now, limit.win);
  const row = await env.DB.prepare(
    'INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?, ?, 1) ' +
    'ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1 RETURNING hits'
  ).bind(key, end).first();
  const hits = row ? row.hits : 1;
  return hits <= limit.max
    ? { ok: true, hits }
    : { ok: false, hits, retryAfter: Math.max(1, Math.ceil((end - now) / 1000)) };
}

/** Read a bucket without incrementing (used before a password check). */
async function peek(env, key, limit, now = Date.now()) {
  const row = await env.DB.prepare(
    'SELECT hits FROM rate_counters WHERE bucket = ? AND window_end = ?'
  ).bind(key, windowEnd(now, limit.win)).first();
  const hits = row ? row.hits : 0;
  return hits < limit.max
    ? { ok: true, hits }
    : { ok: false, hits, retryAfter: Math.max(1, Math.ceil((windowEnd(now, limit.win) - now) / 1000)) };
}

/** Per-reporter + global budget for POST /api/reports.
 *  `verified` false = no Turnstile token was validated → tighter budget. */
export async function checkReportLimits(env, reporter, verified, now = Date.now()) {
  const global = await bump(env, 'global', LIMITS.globalDay, now);
  if (!global.ok) return { ok: false, code: 'service_busy', retryAfter: global.retryAfter };

  const hour = await bump(env, 'rh:' + reporter, LIMITS.reportHour, now);
  if (!hour.ok) return { ok: false, code: 'rate_limited', retryAfter: hour.retryAfter };

  const day = await bump(env, 'rd:' + reporter, LIMITS.reportDay, now);
  if (!day.ok) return { ok: false, code: 'rate_limited', retryAfter: day.retryAfter };

  if (!verified) {
    const unv = await bump(env, 'ru:' + reporter, LIMITS.unverifiedHour, now);
    if (!unv.ok) return { ok: false, code: 'rate_limited', retryAfter: unv.retryAfter };
  }
  return { ok: true };
}

export async function checkLoginLimit(env, ip, now = Date.now()) {
  return peek(env, 'li:' + ip, LIMITS.login, now);
}

export async function recordLoginFailure(env, ip, now = Date.now()) {
  return bump(env, 'li:' + ip, LIMITS.login, now);
}

/** Housekeeping — cheap, runs in waitUntil, never blocks a response. */
export async function sweep(env, now = Date.now()) {
  try {
    await env.DB.prepare('DELETE FROM rate_counters WHERE window_end < ?').bind(now).run();
    await env.DB.prepare('DELETE FROM admin_sessions WHERE expires_at < ?').bind(now).run();
  } catch (e) { /* housekeeping only */ }
}
