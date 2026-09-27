/* ============================================================
   Klarweg Access Worker · KLARWEG AI FRONT DOOR
   ------------------------------------------------------------
   Routes:
     GET  /ai/status?chapter=<chapterId>
     GET  /ai/status?scope=chat
     POST /ai/<action>      action ∈ ACTION_UNITS below
                            (chat: the homepage chat — no chapter; any
                            owned level; its own quota bucket)

   This Worker owns the HttpOnly session and the D1 database, so it
   is the only place that can answer "who is this, what did they
   buy, how much have they used". Order of checks on every POST:

     1. kill switch        AI_ENABLED must be "true" and the TUTOR
                           service binding present        → 503
     2. session            HttpOnly kw_session cookie       → 401
     3. request shape      action, chapterId, size          → 400
     4. entitlement        the chapter's level must be owned,
                           or it is Chapter 1 of its level
                           (free preview, smaller quota)    → 403
     5. global ceiling     requests + spend for the UTC day → 503
     6. per-user quota     daily AND monthly units, reserved
                           atomically before the call       → 429
     7. forward            service binding → klarweg-tutor,
                           with NO user identity in the body
     8. account            deterministic answers (no model call)
                           refund their reservation; model calls
                           add tokens + cost to the global day

   The server is the only authority: nothing the browser says
   about payment or quota is trusted.
   ============================================================ */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";

/* Quota currency per action. A Goethe exam review reads a long text
   and writes a rubric, so it costs more. Future conversation/roleplay
   actions must be added here with an explicit (higher) price —
   unknown actions are rejected, so nothing is ever unmetered. */
const ACTION_UNITS = {
  check_writing: 1,
  check_speaking: 1,
  check_exercise: 1,
  more_like_this: 1,
  explain_grammar: 1,
  quiz_review: 1,
  chat: 1, // homepage chat — metered in its own bucket (see chatTierFor)
};
const EXAM_WRITING_UNITS = 3;

/* Homepage chat request limits. Mirrored (and re-enforced) by the tutor's
   CHAT_LIMITS; history text is trimmed there, the message is rejected here. */
const CHAT_LIMITS = { message: 600, turns: 6, turnChars: 800 };

const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-([0-9]{1,2})(?:-[a-z0-9-]*)?$/;
const MAX_BODY = 12 * 1024;
const TUTOR_TIMEOUT_MS = 25000;

const DEFAULTS = {
  AI_DAILY_UNITS: 40,
  AI_MONTHLY_UNITS: 400,
  AI_PREVIEW_DAILY_UNITS: 5,
  AI_PREVIEW_MONTHLY_UNITS: 20,
  AI_GLOBAL_DAILY_REQUESTS: 3000,
  AI_GLOBAL_DAILY_BUDGET_MICROS: 5000000, // US$5.00 / day until raised deliberately
  AI_CHAT_DAILY_UNITS: 10,
  AI_CHAT_MONTHLY_UNITS: 100,
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

export function aiEnabled(env) {
  return String(env.AI_ENABLED || "").toLowerCase() === "true" && !!env.TUTOR && typeof env.TUTOR.fetch === "function";
}

export function parseChapterId(chapterId) {
  if (typeof chapterId !== "string" || chapterId.length > 80) return null;
  const m = chapterId.match(CHAPTER_ID);
  if (!m) return null;
  return { level: m[1].toUpperCase(), number: Number(m[2]) };
}

function periods(now = new Date()) {
  const day = now.toISOString().slice(0, 10);
  return { day, dayKey: "d:" + day, monthKey: "m:" + day.slice(0, 7) };
}

/* Which quota tier applies to this user for this chapter, or null. */
async function tierFor(env, user, chapter) {
  const ent = await readEntitlements(env.DB, user.id);
  if (ent[chapter.level]) {
    return { tier: "full", daily: num(env, "AI_DAILY_UNITS"), monthly: num(env, "AI_MONTHLY_UNITS") };
  }
  if (chapter.number === 1) {
    return { tier: "preview", daily: num(env, "AI_PREVIEW_DAILY_UNITS"), monthly: num(env, "AI_PREVIEW_MONTHLY_UNITS") };
  }
  return null;
}

/* Homepage chat has no chapter: it is open to signed-in learners who own
   at least one level (the same entitlement the chapter AI requires; there
   is no chat preview), with its own small daily/monthly allowance. */
async function chatTierFor(env, user) {
  const ent = await readEntitlements(env.DB, user.id);
  if (!Object.values(ent).some(Boolean)) return null;
  return { tier: "chat", daily: num(env, "AI_CHAT_DAILY_UNITS"), monthly: num(env, "AI_CHAT_MONTHLY_UNITS") };
}

/* Validate the chat request before any quota is touched. The message is
   rejected when too long; history is context only, so it is capped to the
   last few turns and trimmed rather than rejected. */
function readChatInput(body) {
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return { error: { error: "invalid_input", message: "Type a question first." } };
  if (message.length > CHAT_LIMITS.message) {
    return { error: { error: "input_too_long", message: `Questions are limited to ${CHAT_LIMITS.message} characters.` } };
  }
  if (body.history != null && !Array.isArray(body.history)) return { error: { error: "invalid_history", message: "Conversation history is malformed." } };
  const history = [];
  for (const turn of (body.history || []).slice(-CHAT_LIMITS.turns)) {
    if (!turn || typeof turn !== "object" || (turn.role !== "user" && turn.role !== "assistant") || typeof turn.text !== "string") {
      return { error: { error: "invalid_history", message: "Conversation history is malformed." } };
    }
    history.push({ role: turn.role, text: turn.text.slice(0, CHAT_LIMITS.turnChars) });
  }
  return { message, history };
}

/* Preview and chat usage are counted in their own buckets, so trying
   Chapter 1 of a level or chatting on the homepage never eats into (or
   borrows from) the chapter allowance. */
const bucketKey = (key, tier) => (tier === "preview" ? "p" + key : tier === "chat" ? "c" + key : key);

async function usedUnits(env, userId, key) {
  const row = await env.DB.prepare("SELECT units FROM ai_usage WHERE user_id = ?1 AND period = ?2").bind(userId, key).first();
  return row ? Number(row.units) : 0;
}

/* Atomic reserve: the increment only happens if it stays within the
   limit, so parallel requests cannot overshoot a quota. */
async function reserve(env, userId, key, units, limit) {
  if (units > limit) return false;
  const row = await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, ?3)
     ON CONFLICT(user_id, period) DO UPDATE SET units = ai_usage.units + excluded.units
       WHERE ai_usage.units + excluded.units <= ?4
     RETURNING units`
  ).bind(userId, key, units, limit).first();
  return !!row;
}

async function release(env, userId, key, units) {
  await env.DB.prepare(
    "UPDATE ai_usage SET units = MAX(units - ?3, 0) WHERE user_id = ?1 AND period = ?2"
  ).bind(userId, key, units).run();
}

async function globalOk(env, day) {
  const row = await env.DB.prepare("SELECT requests, cost_micros FROM ai_global WHERE day = ?1").bind(day).first();
  if (!row) return true;
  return Number(row.requests) < num(env, "AI_GLOBAL_DAILY_REQUESTS") &&
         Number(row.cost_micros) < num(env, "AI_GLOBAL_DAILY_BUDGET_MICROS");
}

/* Every provider contact counts against the global day, including failed
   ones (usage.failedCalls: timeouts, HTTP errors) — otherwise an outage
   would let requests bypass the ceiling, because failures are refunded to
   the learner. meta.costMicros already includes the tutor's conservative
   estimate for timed-out calls. */
async function recordGlobal(env, day, meta, failed) {
  const usage = (meta && meta.usage) || {};
  const calls = (Number(usage.calls) + Number(usage.failedCalls || 0)) || (meta && meta.llm ? 1 : 0);
  await env.DB.prepare(
    `INSERT INTO ai_global (day, requests, input_tokens, output_tokens, cost_micros, failures)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6)
     ON CONFLICT(day) DO UPDATE SET
       requests      = requests + excluded.requests,
       input_tokens  = input_tokens + excluded.input_tokens,
       output_tokens = output_tokens + excluded.output_tokens,
       cost_micros   = cost_micros + excluded.cost_micros,
       failures      = failures + excluded.failures`
  ).bind(day, calls, Number(usage.input) || 0, Number(usage.output) || 0, Number(meta && meta.costMicros) || 0, failed ? 1 : 0).run();
}

async function sweepUsage(env) {
  try {
    const cutoff = new Date(Date.now() - 40 * 86400000).toISOString().slice(0, 10);
    await env.DB.prepare("DELETE FROM ai_usage WHERE (period LIKE 'd:%' OR period LIKE 'pd:%' OR period LIKE 'cd:%') AND substr(period, instr(period, ':') + 1) < ?1").bind(cutoff).run();
  } catch { /* housekeeping only */ }
}

/* ---------- GET /ai/status ---------- */
export async function aiStatus(request, env) {
  if (!aiEnabled(env)) return json({ ok: true, enabled: false });
  const url = new URL(request.url);
  const isChat = url.searchParams.get("scope") === "chat";
  const chapter = parseChapterId(url.searchParams.get("chapter") || "");
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: true, enabled: true, signedIn: false, eligible: false });
  if (!isChat && !chapter) return json({ ok: true, enabled: true, signedIn: true, eligible: false });
  const t = isChat ? await chatTierFor(env, user) : await tierFor(env, user, chapter);
  if (!t) return json({ ok: true, enabled: true, signedIn: true, eligible: false });
  const { dayKey, monthKey } = periods();
  const [d, m] = await Promise.all([
    usedUnits(env, user.id, bucketKey(dayKey, t.tier)),
    usedUnits(env, user.id, bucketKey(monthKey, t.tier))
  ]);
  return json({
    ok: true, enabled: true, signedIn: true, eligible: true, tier: t.tier,
    remaining: { day: Math.max(0, t.daily - d), month: Math.max(0, t.monthly - m) }
  });
}

/* ---------- POST /ai/<action> ---------- */
export async function aiRequest(request, env, action, ctx) {
  if (!aiEnabled(env)) {
    return json({ ok: false, error: "ai_disabled", message: "Klarweg AI is not available right now. The lesson works as normal." }, 503);
  }

  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: false, error: "auth_required", message: "Sign in to use Klarweg AI." }, 401);

  if (!Object.prototype.hasOwnProperty.call(ACTION_UNITS, action)) {
    return json({ ok: false, error: "unknown_action" }, 404);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ ok: false, error: "too_large", message: "Request too large." }, 413);
  let body;
  try { body = JSON.parse(raw); } catch { return json({ ok: false, error: "invalid_json" }, 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json({ ok: false, error: "invalid_json" }, 400);

  const isChat = action === "chat";
  let t, chat;
  if (isChat) {
    chat = readChatInput(body);
    if (chat.error) return json({ ok: false, ...chat.error }, 400);
    t = await chatTierFor(env, user);
    if (!t) {
      return json({ ok: false, error: "not_entitled", message: "Klarweg AI chat is included with every Klarweg course level." }, 403);
    }
  } else {
    const chapter = parseChapterId(body.chapterId);
    if (!chapter) return json({ ok: false, error: "invalid_chapter", message: "Unknown chapter." }, 400);
    t = await tierFor(env, user, chapter);
    if (!t) {
      return json({ ok: false, error: "not_entitled", message: `Klarweg AI for ${chapter.level} is part of the ${chapter.level} course.` }, 403);
    }
  }

  const { day, dayKey, monthKey } = periods();
  if (!(await globalOk(env, day))) {
    return json({ ok: false, error: "ai_busy", message: "Klarweg AI has reached today’s service limit. The lesson works as normal — try again tomorrow." }, 503);
  }

  const units = action === "check_writing" && body.submitted === true ? EXAM_WRITING_UNITS : ACTION_UNITS[action];
  const dKey = bucketKey(dayKey, t.tier);
  const mKey = bucketKey(monthKey, t.tier);
  if (!(await reserve(env, user.id, dKey, units, t.daily))) {
    const dayMessage = t.tier === "preview" ? "You have used today’s Klarweg AI preview. It resets at midnight UTC."
      : t.tier === "chat" ? "You have used today’s Klarweg AI chat messages. They reset at midnight UTC."
      : "You have used today’s Klarweg AI allowance. It resets at midnight UTC.";
    return json({ ok: false, error: "quota_day", message: dayMessage }, 429);
  }
  if (!(await reserve(env, user.id, mKey, units, t.monthly))) {
    await release(env, user.id, dKey, units);
    return json({ ok: false, error: "quota_month", message: t.tier === "chat" ? "You have used this month’s Klarweg AI chat messages." : "You have used this month’s Klarweg AI allowance." }, 429);
  }

  // Forward ONLY learning context — no user id, email, name or phone.
  const forward = isChat ? { message: chat.message, history: chat.history, lang: body.lang === "hi" ? "hi" : "en" } : {
    chapterId: body.chapterId,
    sectionId: typeof body.sectionId === "string" ? body.sectionId.slice(0, 20) : "",
    itemId: typeof body.itemId === "string" ? body.itemId.slice(0, 60) : "",
    input: typeof body.input === "string" ? body.input : undefined,
    attempt: Number.isInteger(body.attempt) ? body.attempt : undefined,
    lang: body.lang === "hi" ? "hi" : "en",
    mode: typeof body.mode === "string" ? body.mode.slice(0, 20) : undefined,
    submitted: body.submitted === true ? true : undefined,
    recent: Array.isArray(body.recent) ? body.recent.filter((x) => typeof x === "string").slice(0, 5).map((x) => x.slice(0, 60)) : undefined,
    answers: Array.isArray(body.answers) ? body.answers.slice(0, 40) : undefined
  };

  let out, status;
  try {
    const res = await env.TUTOR.fetch("https://klarweg-tutor.internal/v1/" + action, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(forward),
      signal: AbortSignal.timeout(TUTOR_TIMEOUT_MS)
    });
    status = res.status;
    out = await res.json();
  } catch (err) {
    // Our own 25 s abort means the tutor was still working — almost always
    // on a provider call — so it is recorded as one failed request. Any
    // other binding error happens before the tutor runs and is not.
    const abandoned = !!err && err.name === "TimeoutError";
    out = { ok: false, error: "ai_unavailable", message: "Klarweg AI is unavailable right now. The lesson works as normal — try again later.", meta: { llm: abandoned, usage: { calls: 0, failedCalls: abandoned ? 1 : 0 } } };
    status = 503;
  }

  const meta = (out && out.meta) || { llm: false };
  // Only real model work is charged to the learner. Validation errors,
  // deterministic answers ("that's correct") and outright failures are
  // refunded, so a learner never loses quota to our outage. Failed
  // provider calls still count against the GLOBAL day (recordGlobal), so
  // refunded retries during an outage stay bounded by the daily ceiling.
  const charge = meta.llm === true && out && out.ok === true && out.source === "ai";
  const tasks = [];
  if (!charge) tasks.push(release(env, user.id, dKey, units), release(env, user.id, mKey, units));
  if (meta.llm) tasks.push(recordGlobal(env, day, meta, !(out && out.ok && out.source === "ai")));
  await Promise.all(tasks).catch(() => {});
  if (ctx && ctx.waitUntil && Math.random() < 0.02) ctx.waitUntil(sweepUsage(env));

  const clientBody = {
    ok: !!(out && out.ok),
    source: out && out.source,
    result: out && out.result,
    notice: out && out.notice,
    error: out && out.error,
    message: out && out.message
  };
  return json(clientBody, out && out.ok ? 200 : (status >= 400 ? status : 503));
}
