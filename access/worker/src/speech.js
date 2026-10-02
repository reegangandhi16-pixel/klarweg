/* ============================================================
   Klarweg Access Worker · SPEECH FRONT DOOR (Record & Check)
   ------------------------------------------------------------
   Routes:
     GET  /speech/status?chapter=<chapterId>
     POST /speech/transcribe?chapter=<chapterId>&ms=<recording ms>
          body: the learner's recording, raw bytes; content-type = the
          recorder's own type (audio/webm;codecs=opus, audio/mp4, …)

   The browser only learns { text } — the transcript the deterministic
   Word Match in chapter-app.js then scores. The audio goes, unchanged
   and without any user identity, through the private klarweg-tutor
   service binding to OpenAI gpt-transcribe (tutor/worker/src/transcribe.js),
   which holds the only copy of OPENAI_API_KEY. Nothing here stores audio
   or transcripts: D1 rows are counters only, logs are numbers and status
   classes only.

   Order of checks on every POST (fail closed):
     1. switch          SPEECH_MODE "off" (default) or no TUTOR binding  → 503
     2. session         HttpOnly kw_session cookie                       → 401
     3. chapter         listed in SPEECH_CHAPTERS (A1·01 only)           → 403
     4. access          SPEECH_MODE "entitled":  owns the chapter's level
                        SPEECH_MODE "allowlist": account id listed in the
                        SPEECH_ALLOWLIST secret (internal staging)       → 403
     5. request shape   audio type, size ≤ SPEECH_MAX_BYTES, declared
                        length ≤ SPEECH_MAX_SECONDS                     → 400/413/415
     6. global day      requests + estimated spend                      → 503
     7. per account     per minute, per day, per month — reserved
                        atomically before the provider call             → 429
     8. forward         klarweg-tutor /v1/transcribe (raw bytes only)
     9. account         success keeps the reservation and adds the cost;
                        provider failures refund the day/month units but
                        keep the per-minute and global counts (so retries
                        during an outage stay bounded); failures before the
                        provider was contacted refund everything.
   ============================================================ */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";

export const SPEECH_ENGINE = "openai:gpt-transcribe";   // internal label (logs, metrics); not sent to the browser

const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-([0-9]{1,2})(?:-[a-z0-9-]*)?$/;
const AUDIO_TYPES = new Set(["audio/webm", "audio/ogg", "audio/mp4", "audio/x-m4a", "audio/aac", "audio/mpeg", "audio/wav", "audio/x-wav"]);
const TUTOR_TIMEOUT_MS = 20000;
const GLOBAL_ID = "speech:global";   // not a user id (those are hex), so never collides
const STATS_ID = "speech:stats";

const DEFAULTS = {
  SPEECH_PER_MINUTE: 6,
  SPEECH_DAILY_CHECKS: 60,
  SPEECH_MONTHLY_CHECKS: 600,
  SPEECH_GLOBAL_DAILY_REQUESTS: 500,
  SPEECH_GLOBAL_DAILY_BUDGET_MICROS: 500000,   // US$0.50 per UTC day until raised deliberately
  SPEECH_PRICE_MICROS_PER_MIN: 4500,           // gpt-transcribe list price $0.0045/min
  SPEECH_MAX_BYTES: 1048576,
  SPEECH_MAX_SECONDS: 30,
};

function num(env, key) {
  const v = Number(env[key]);
  return Number.isFinite(v) && v >= 0 ? v : DEFAULTS[key];
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

/* Learner-facing wording: short, non-technical, never provider details. */
const MESSAGES = {
  speech_disabled: "The speech check is not available right now.",
  auth_required: "Sign in to use the speech check.",
  not_enabled: "The speech check is not available for this chapter.",
  not_entitled: "The speech check is part of this level's course.",
  unsupported_type: "This recording format cannot be checked. Please record again.",
  empty_audio: "No audio was recorded. Please record again.",
  too_large: "The recording is too long. Record a shorter answer.",
  too_long: "The recording is too long. Record a shorter answer.",
  rate_minute: "Too many checks in a short time. Wait a moment, then try again.",
  quota_day: "You have used today's speech checks. They reset at midnight UTC.",
  quota_month: "You have used this month's speech checks.",
  speech_busy: "The speech check has reached today's limit. Please try again tomorrow.",
  unreadable_audio: "The recording could not be read. Please record again.",
  speech_timeout: "The check took too long. Please try again.",
  speech_unavailable: "The speech check is not available right now. Please try again later."
};
const fail = (error, status, extra = {}) => json({ ok: false, error, message: MESSAGES[error] || MESSAGES.speech_unavailable, ...extra }, status);

export function speechMode(env) {
  const m = String(env.SPEECH_MODE || "off").toLowerCase();
  const on = (m === "entitled" || m === "allowlist") && !!env.TUTOR && typeof env.TUTOR.fetch === "function";
  return on ? m : "off";
}

function speechChapters(env) {
  return String(env.SPEECH_CHAPTERS || "a1-1-alphabet").split(",").map((s) => s.trim()).filter(Boolean);
}

/* Chapter must be explicitly listed (exact id), and parse to a level. */
function speechChapter(env, chapterId) {
  if (typeof chapterId !== "string" || chapterId.length > 80 || !speechChapters(env).includes(chapterId)) return null;
  const m = chapterId.match(CHAPTER_ID);
  return m ? { id: chapterId, level: m[1].toUpperCase(), number: Number(m[2]) } : null;
}

function allowlisted(env, userId) {
  return String(env.SPEECH_ALLOWLIST || "").split(",").map((s) => s.trim()).filter(Boolean).includes(String(userId));
}

async function mayUse(env, mode, user, chapter) {
  if (mode === "allowlist") return allowlisted(env, user.id);
  const ent = await readEntitlements(env.DB, user.id);
  return !!ent[chapter.level];
}

function periods(now = new Date()) {
  const iso = now.toISOString();
  const day = iso.slice(0, 10);
  return { day, minuteKey: "sx:" + iso.slice(0, 16), dayKey: "sd:" + day, monthKey: "sm:" + day.slice(0, 7), globalKey: "sg:" + day, costKey: "sc:" + day };
}

/* Counters live in the existing ai_usage table (user_id, period, units) under
   speech-only period prefixes (sx/sd/sm per account, sg/sc global, sq/so/… stats),
   so no migration is needed and AI chat quotas are never touched. */
async function used(env, id, key) {
  const row = await env.DB.prepare("SELECT units FROM ai_usage WHERE user_id = ?1 AND period = ?2").bind(id, key).first();
  return row ? Number(row.units) : 0;
}

async function reserve(env, id, key, units, limit) {
  if (units > limit) return false;
  const row = await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, ?3)
     ON CONFLICT(user_id, period) DO UPDATE SET units = ai_usage.units + excluded.units
       WHERE ai_usage.units + excluded.units <= ?4
     RETURNING units`
  ).bind(id, key, units, limit).first();
  return !!row;
}

async function release(env, id, key, units) {
  await env.DB.prepare("UPDATE ai_usage SET units = MAX(units - ?3, 0) WHERE user_id = ?1 AND period = ?2").bind(id, key, units).run();
}

async function add(env, id, key, units) {
  if (!units) return;
  await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, ?3)
     ON CONFLICT(user_id, period) DO UPDATE SET units = ai_usage.units + excluded.units`
  ).bind(id, key, units).run();
}

/* Minimal observability: per-UTC-day counters (no text, no ids). */
async function recordStats(env, day, { ok, ms, upstream }) {
  const tasks = [add(env, STATS_ID, "sq:" + day, 1), add(env, STATS_ID, (ok ? "so:" : "se:") + day, 1), add(env, STATS_ID, "sl:" + day, Math.max(0, Math.round(ms)))];
  if (upstream) tasks.push(add(env, STATS_ID, "s" + upstream + ":" + day, 1));   // s4xx / s5xx / stimeout
  await Promise.all(tasks);
}

async function sweep(env) {
  try {
    const cutoff = new Date(Date.now() - 40 * 86400000).toISOString().slice(0, 10);
    await env.DB.prepare(
      "DELETE FROM ai_usage WHERE (period LIKE 'sx:%' OR period LIKE 'sd:%' OR period LIKE 'sm:%' OR period LIKE 'sg:%' OR period LIKE 'sc:%' OR period LIKE 'sq:%' OR period LIKE 'so:%' OR period LIKE 'se:%' OR period LIKE 'sl:%' OR period LIKE 's4xx:%' OR period LIKE 's5xx:%' OR period LIKE 'stimeout:%') AND substr(period, instr(period, ':') + 1, 10) < ?1"
    ).bind(cutoff).run();
  } catch { /* housekeeping only */ }
}

function log(fields) {
  console.log(JSON.stringify({ svc: "klarweg-access", evt: "speech", engine: SPEECH_ENGINE, ...fields }));
}

/* ---------- GET /speech/status ---------- */
export async function speechStatus(request, env) {
  const mode = speechMode(env);
  if (mode === "off") return json({ ok: true, enabled: false });
  const chapter = speechChapter(env, new URL(request.url).searchParams.get("chapter") || "");
  if (!chapter) return json({ ok: true, enabled: true, eligible: false });
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: true, enabled: true, signedIn: false, eligible: false });
  if (!(await mayUse(env, mode, user, chapter))) return json({ ok: true, enabled: true, signedIn: true, eligible: false });
  const p = periods();
  const [d, m] = await Promise.all([used(env, user.id, p.dayKey), used(env, user.id, p.monthKey)]);
  return json({
    ok: true, enabled: true, signedIn: true, eligible: true,
    remaining: { day: Math.max(0, num(env, "SPEECH_DAILY_CHECKS") - d), month: Math.max(0, num(env, "SPEECH_MONTHLY_CHECKS") - m) },
    limits: { maxSeconds: num(env, "SPEECH_MAX_SECONDS"), maxBytes: num(env, "SPEECH_MAX_BYTES") }
  });
}

/* ---------- POST /speech/transcribe ---------- */
export async function speechTranscribe(request, env, ctx) {
  const started = Date.now();
  const mode = speechMode(env);
  if (mode === "off") return fail("speech_disabled", 503);

  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return fail("auth_required", 401);

  const url = new URL(request.url);
  const chapter = speechChapter(env, url.searchParams.get("chapter") || "");
  if (!chapter) return fail("not_enabled", 403);
  if (!(await mayUse(env, mode, user, chapter))) return fail("not_entitled", 403);

  const type = String(request.headers.get("content-type") || "").trim().toLowerCase();
  if (!AUDIO_TYPES.has(type.split(";")[0].trim())) return fail("unsupported_type", 415);
  const maxBytes = num(env, "SPEECH_MAX_BYTES");
  const declaredBytes = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredBytes) && declaredBytes > maxBytes) return fail("too_large", 413);
  const declaredMs = Number(url.searchParams.get("ms"));
  if (!Number.isFinite(declaredMs) || declaredMs <= 0) return fail("empty_audio", 400);
  if (declaredMs > num(env, "SPEECH_MAX_SECONDS") * 1000) return fail("too_long", 413);
  const audio = await request.arrayBuffer();          // memory only; never stored
  if (!audio.byteLength) return fail("empty_audio", 400);
  if (audio.byteLength > maxBytes) return fail("too_large", 413);

  const p = periods();
  const [gReq, gCost] = await Promise.all([used(env, GLOBAL_ID, p.globalKey), used(env, GLOBAL_ID, p.costKey)]);
  if (gReq >= num(env, "SPEECH_GLOBAL_DAILY_REQUESTS") || gCost >= num(env, "SPEECH_GLOBAL_DAILY_BUDGET_MICROS")) {
    log({ status: 503, error: "speech_busy", ms: Date.now() - started });
    return fail("speech_busy", 503);
  }

  /* Reserve, cheapest-to-refund first. Each failed step releases the ones before it. */
  if (!(await reserve(env, user.id, p.minuteKey, 1, num(env, "SPEECH_PER_MINUTE")))) return fail("rate_minute", 429, { retryAfter: 60 - new Date().getUTCSeconds() });
  if (!(await reserve(env, user.id, p.dayKey, 1, num(env, "SPEECH_DAILY_CHECKS")))) {
    await release(env, user.id, p.minuteKey, 1);
    return fail("quota_day", 429);
  }
  if (!(await reserve(env, user.id, p.monthKey, 1, num(env, "SPEECH_MONTHLY_CHECKS")))) {
    await Promise.all([release(env, user.id, p.minuteKey, 1), release(env, user.id, p.dayKey, 1)]);
    return fail("quota_month", 429);
  }
  if (!(await reserve(env, GLOBAL_ID, p.globalKey, 1, num(env, "SPEECH_GLOBAL_DAILY_REQUESTS")))) {
    await Promise.all([release(env, user.id, p.minuteKey, 1), release(env, user.id, p.dayKey, 1), release(env, user.id, p.monthKey, 1)]);
    return fail("speech_busy", 503);
  }

  // Forward ONLY the audio and its type — no cookie, no user id, no chapter text.
  let out = null, status = 0;
  try {
    const res = await env.TUTOR.fetch("https://klarweg-tutor.internal/v1/transcribe", {
      method: "POST",
      headers: { "content-type": type },
      body: audio,
      signal: AbortSignal.timeout(TUTOR_TIMEOUT_MS)
    });
    status = res.status;
    out = await res.json();
  } catch (err) {
    const timeout = !!err && err.name === "TimeoutError";
    out = { ok: false, error: timeout ? "provider_timeout" : "tutor_unreachable", meta: { provider: timeout } };
    status = timeout ? 504 : 503;
  }
  const meta = (out && out.meta) || {};
  const ok = !!(out && out.ok === true && typeof out.text === "string");
  const contacted = meta.provider === true;

  const tasks = [];
  if (ok) {
    const seconds = Number.isFinite(Number(out.seconds)) && Number(out.seconds) > 0 ? Number(out.seconds) : declaredMs / 1000;
    tasks.push(add(env, GLOBAL_ID, p.costKey, Math.ceil(Math.ceil(seconds) * num(env, "SPEECH_PRICE_MICROS_PER_MIN") / 60)));
  } else {
    // The learner never loses day/month units to our failure. The per-minute
    // bucket and the global request count stay when the provider was
    // contacted, so refunded retries during an outage remain bounded.
    tasks.push(release(env, user.id, p.dayKey, 1), release(env, user.id, p.monthKey, 1));
    if (!contacted) tasks.push(release(env, user.id, p.minuteKey, 1), release(env, GLOBAL_ID, p.globalKey, 1));
  }
  const ms = Date.now() - started;
  const upstream = out && out.error === "provider_timeout" ? "timeout" : (!ok && contacted && status >= 500) ? "5xx" : (!ok && contacted && status >= 400) ? "4xx" : null;
  tasks.push(recordStats(env, p.day, { ok, ms, upstream }));
  await Promise.all(tasks).catch(() => {});
  if (ctx && ctx.waitUntil && Math.random() < 0.02) ctx.waitUntil(sweep(env));

  log({ ok, status: ok ? 200 : status, error: ok ? null : (out && out.error) || "unknown", ms, bytes: audio.byteLength, declaredMs: Math.round(declaredMs), seconds: ok ? out.seconds : null, provider: contacted });

  if (ok) return json({ ok: true, text: out.text.trim() });
  const e = out && out.error;
  if (e === "unreadable_audio") return fail("unreadable_audio", 422);
  if (e === "too_large") return fail("too_large", 413);
  if (e === "unsupported_type") return fail("unsupported_type", 415);
  if (e === "empty_audio") return fail("empty_audio", 400);
  if (e === "provider_timeout") return fail("speech_timeout", 504);
  return fail("speech_unavailable", 503);
}
