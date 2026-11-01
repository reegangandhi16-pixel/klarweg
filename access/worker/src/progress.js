/* progress.js — account-backed chapter progress.

   The chapter page keeps its progress record in localStorage
   ("kw-ch-<chapter id>", chapter/chapter-app.js). Signed-in learners also
   keep it here, so it follows the account across devices and browsers;
   kw-progress-sync.js merges the two copies on the client.

     GET /progress                 → { ok, user, chapters: { <id>: { record, updatedAt } } }
     POST /progress/<chapter id>   body { record, baseUpdatedAt }
                                   → { ok, updatedAt }
                                   → 409 { ok:false, error:'conflict', record, updatedAt }
                                     when the stored row changed since baseUpdatedAt
                                     (the client merges and retries).

   The user comes only from the session cookie (getSessionToken /
   findSessionUser), as in saved-words.js; every query is scoped by it.
   The record is rebuilt field by field from an allow-list, so nothing the
   chapter could not have written itself is ever stored. */

import { getSessionToken, findSessionUser } from "./sessions.js";

export const PROGRESS_LIMITS = {
  chapters: 400,         // the curriculum has 258 chapters
  learned: 400,          // the longest vocabulary list has 173 words
  wordKey: 120,
  sectionKey: 40,
  sections: 30,
  bytes: 24 * 1024,
  writesPerWindow: 300,  // per user per 15 minutes (the client debounces)
  windowMs: 15 * 60 * 1000
};

const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}(?:-[a-z0-9]+){0,12}$/;
const VOICES = ["female", "male"];

function json(data, status = 200) {
  return Response.json(data, { status, headers: { "cache-control": "no-store" } });
}

export function validChapterId(id) {
  return typeof id === "string" && id.length <= 100 && CHAPTER_ID.test(id);
}

const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
const isInt = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;

/* Allow-listed copy of a progress record, or null when it is not an object. */
export function sanitizeRecord(raw) {
  if (!isObj(raw)) return null;
  const out = { done: {}, learned: {} };
  if (isObj(raw.done)) {
    for (const k of Object.keys(raw.done).slice(0, PROGRESS_LIMITS.sections)) {
      if (raw.done[k] === true && /^[a-z][a-z0-9-]*$/.test(k) && k.length <= PROGRESS_LIMITS.sectionKey) out.done[k] = true;
    }
  }
  if (isObj(raw.learned)) {
    for (const k of Object.keys(raw.learned).slice(0, PROGRESS_LIMITS.learned)) {
      if (raw.learned[k] === true && k.length > 0 && k.length <= PROGRESS_LIMITS.wordKey) out.learned[k] = true;
    }
  }
  out.quizScore = isInt(raw.quizScore, 0, 100) ? raw.quizScore : null;
  if (VOICES.includes(raw.vocabVoice)) out.vocabVoice = raw.vocabVoice;
  if (isInt(raw.resetAt, 0, 8.64e15)) out.resetAt = raw.resetAt;
  if (isInt(raw.learnedAt, 0, 8.64e15)) out.learnedAt = raw.learnedAt;
  if (isInt(raw.xpMax, 1, 100000) && isInt(raw.xpEarned, 0, raw.xpMax)) { out.xpEarned = raw.xpEarned; out.xpMax = raw.xpMax; }
  return out;
}

async function requireUser(request, env) {
  return findSessionUser(env.DB, getSessionToken(request));
}

function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

/* Write budget per user (rate_counters, same table as the other limits).
   Peek and bump in one statement: returns false once over the budget. */
async function takeWriteBudget(env, userId, now) {
  const key = "pg:" + userId;
  const end = windowEnd(now, PROGRESS_LIMITS.windowMs);
  const row = await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1 RETURNING hits"
  ).bind(key, end).first();
  return !row || row.hits <= PROGRESS_LIMITS.writesPerWindow;
}

export async function listProgress(request, env) {
  const user = await requireUser(request, env);
  if (!user) return json({ ok: false, error: "auth_required" }, 401);
  const { results } = await env.DB.prepare(
    "SELECT chapter_id, record, updated_at FROM chapter_progress WHERE user_id = ?1"
  ).bind(user.id).all();
  const chapters = {};
  for (const r of results || []) {
    let rec = null;
    try { rec = sanitizeRecord(JSON.parse(r.record)); } catch { rec = null; }
    if (rec) chapters[r.chapter_id] = { record: rec, updatedAt: Number(r.updated_at) };
  }
  return json({ ok: true, user: user.id, chapters });
}

export async function saveProgress(request, env, chapterId) {
  const user = await requireUser(request, env);
  if (!user) return json({ ok: false, error: "auth_required" }, 401);
  if (!validChapterId(chapterId)) return json({ ok: false, error: "invalid_chapter" }, 400);

  let body = null;
  try {
    const text = await request.text();
    if (text.length > PROGRESS_LIMITS.bytes) return json({ ok: false, error: "too_large" }, 413);
    body = JSON.parse(text);
  } catch { body = null; }
  const record = sanitizeRecord(body && body.record);
  if (!record) return json({ ok: false, error: "invalid_record" }, 400);
  const base = body.baseUpdatedAt == null ? null : Number(body.baseUpdatedAt);
  if (base !== null && !Number.isInteger(base)) return json({ ok: false, error: "invalid_base" }, 400);

  const now = Date.now();
  if (!(await takeWriteBudget(env, user.id, now))) return json({ ok: false, error: "rate_limited" }, 429);

  const current = await env.DB.prepare(
    "SELECT record, updated_at FROM chapter_progress WHERE user_id = ?1 AND chapter_id = ?2"
  ).bind(user.id, chapterId).first();

  const conflict = () => {
    let rec = null;
    try { rec = sanitizeRecord(JSON.parse(current.record)); } catch { rec = null; }
    return json({ ok: false, error: "conflict", record: rec, updatedAt: Number(current.updated_at) }, 409);
  };

  const text = JSON.stringify(record);
  if (!current) {
    // No row yet (a stale baseUpdatedAt here can only follow an account
    // reset, so it is treated as a first write).
    const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM chapter_progress WHERE user_id = ?1").bind(user.id).first();
    if (count && count.n >= PROGRESS_LIMITS.chapters) return json({ ok: false, error: "too_many_chapters" }, 400);
    const res = await env.DB.prepare(
      "INSERT INTO chapter_progress (user_id, chapter_id, record, updated_at) VALUES (?1, ?2, ?3, ?4) " +
      "ON CONFLICT(user_id, chapter_id) DO NOTHING"
    ).bind(user.id, chapterId, text, now).run();
    if (res.meta && res.meta.changes === 1) return json({ ok: true, updatedAt: now });
    // Lost a race with a parallel first write: report it as a conflict.
    const again = await env.DB.prepare(
      "SELECT record, updated_at FROM chapter_progress WHERE user_id = ?1 AND chapter_id = ?2"
    ).bind(user.id, chapterId).first();
    let rec = null;
    try { rec = sanitizeRecord(JSON.parse(again.record)); } catch { rec = null; }
    return json({ ok: false, error: "conflict", record: rec, updatedAt: Number(again.updated_at) }, 409);
  }

  if (base === null || base !== Number(current.updated_at)) return conflict();
  const next = Math.max(now, Number(current.updated_at) + 1);
  const res = await env.DB.prepare(
    "UPDATE chapter_progress SET record = ?1, updated_at = ?2 WHERE user_id = ?3 AND chapter_id = ?4 AND updated_at = ?5"
  ).bind(text, next, user.id, chapterId, base).run();
  if (!res.meta || res.meta.changes !== 1) {
    const latest = await env.DB.prepare(
      "SELECT record, updated_at FROM chapter_progress WHERE user_id = ?1 AND chapter_id = ?2"
    ).bind(user.id, chapterId).first();
    let rec = null;
    try { rec = sanitizeRecord(JSON.parse(latest.record)); } catch { rec = null; }
    return json({ ok: false, error: "conflict", record: rec, updatedAt: Number(latest.updated_at) }, 409);
  }
  return json({ ok: true, updatedAt: next });
}
