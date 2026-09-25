/* saved-words.js — account-backed vocabulary saves + Leitner/SRS review.
   Backend for the on-device Saved object in account/kw-account.js
   (Phase 3 will swap that object's localStorage calls for fetch() calls
   against these endpoints — see account/SAVED-WORDS-BACKEND.md).

   Every route derives the user exclusively from the session cookie via
   getSessionToken()/findSessionUser() — the same pair /auth/me and
   /auth/phone already use. No request body or query string field is ever
   trusted as a user id, and every query below is scoped by that
   session-derived id. */

import { getSessionToken, findSessionUser } from "./sessions.js";
import { checkSavedWordsLimit, recordSavedWordsAttempt } from "./ratelimit.js";
import { LEVELS } from "./entitlements.js";

const GENDERS = ["m", "f", "n"];
const GRADES = ["again", "hard", "good", "easy"];

/* Leitner schedule — exact port of gradeSrs()/SRS_DAYS in
   account/kw-account.js, ms converted to seconds since this table's
   timestamps follow the rest of the schema (INTEGER unix-seconds). */
const DAY_SECONDS = 86400;
const SRS_DAYS = [1, 3, 7, 14, 30];
const MAX_BOX = SRS_DAYS.length - 1;

function json(data, status = 200) {
  return Response.json(data, { status });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function createSavedWordId() {
  return `sw_${crypto.randomUUID()}`;
}

async function requireUser(request, env) {
  const token = getSessionToken(request);
  return findSessionUser(env.DB, token);
}

function unauthorized() {
  return json({ ok: false, error: "Authentication required." }, 401);
}

/* Trims a required string field. Returns null if missing/invalid/too long
   so callers can 400 with a single check. */
function requiredString(value, maxLen) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLen) return null;
  return trimmed;
}

/* Same as requiredString but empty is allowed (matches the client's own
   validateImport(), which only requires `en` to be a string). */
function allowedString(value, maxLen) {
  if (value == null) return "";
  if (typeof value !== "string" || value.length > maxLen) return null;
  return value;
}

function optionalString(value, maxLen) {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.length > maxLen) return null;
  return trimmed;
}

function rowToApi(row) {
  return {
    id: row.id,
    de: row.de,
    en: row.en,
    wordType: row.word_type || null,
    level: row.level,
    gender: row.gender || null,
    ipa: row.ipa || null,
    sourceRef: row.source_ref || null,
    createdAt: row.created_at,
    srs: {
      box: row.srs_box,
      due: row.srs_due_at,
      reviews: row.srs_reviews
    }
  };
}

/* ---------- GET /saved-words ---------- */
export async function listSavedWords(request, env) {
  const user = await requireUser(request, env);
  if (!user) return unauthorized();

  const result = await env.DB
    .prepare(
      `SELECT id, de, en, word_type, level, gender, ipa, source_ref,
              created_at, srs_box, srs_due_at, srs_reviews
       FROM saved_words
       WHERE user_id = ?1
       ORDER BY created_at DESC`
    )
    .bind(user.id)
    .all();

  return json({
    ok: true,
    words: (result.results || []).map(rowToApi)
  });
}

/* ---------- GET /saved-words/counts ---------- */
export async function getSavedWordCounts(request, env) {
  const user = await requireUser(request, env);
  if (!user) return unauthorized();

  const result = await env.DB
    .prepare(
      `SELECT level, COUNT(*) AS cnt
       FROM saved_words
       WHERE user_id = ?1
       GROUP BY level`
    )
    .bind(user.id)
    .all();

  const counts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0, total: 0 };
  for (const row of result.results || []) {
    if (row.level in counts) counts[row.level] = row.cnt;
    counts.total += row.cnt;
  }

  return json({ ok: true, counts });
}

/* ---------- POST /saved-words ----------
   Idempotent on (user_id, level, de): a repeat save of the same word
   returns the existing row (200) instead of creating a duplicate (201). */
export async function createSavedWord(request, env) {
  const user = await requireUser(request, env);
  if (!user) return unauthorized();

  const limit = await checkSavedWordsLimit(env, user.id);
  if (!limit.ok) {
    return json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      429
    );
  }
  await recordSavedWordsAttempt(env, user.id);

  const body = await readJson(request);
  if (!body || typeof body !== "object") {
    return json({ ok: false, error: "A word is required." }, 400);
  }

  const de = requiredString(body.de, 200);
  if (!de) {
    return json({ ok: false, error: "A valid German word is required." }, 400);
  }

  const en = allowedString(body.en, 200);
  if (en === null) {
    return json({ ok: false, error: "A valid translation is required." }, 400);
  }

  const level = typeof body.level === "string" ? body.level.trim().toUpperCase() : "";
  if (!LEVELS.includes(level)) {
    return json({ ok: false, error: "A valid level is required." }, 400);
  }

  const wordType = optionalString(body.wordType, 40);
  if (body.wordType != null && wordType === null) {
    return json({ ok: false, error: "Invalid word type." }, 400);
  }

  let gender = null;
  if (body.gender != null) {
    if (typeof body.gender !== "string" || !GENDERS.includes(body.gender)) {
      return json({ ok: false, error: "Invalid gender." }, 400);
    }
    gender = body.gender;
  }

  const ipa = optionalString(body.ipa, 200);
  if (body.ipa != null && ipa === null) {
    return json({ ok: false, error: "Invalid pronunciation." }, 400);
  }

  const sourceRef = optionalString(body.sourceRef, 200);
  if (body.sourceRef != null && sourceRef === null) {
    return json({ ok: false, error: "Invalid source reference." }, 400);
  }

  const now = Math.floor(Date.now() / 1000);
  const id = createSavedWordId();

  const insert = await env.DB
    .prepare(
      `INSERT INTO saved_words
        (id, user_id, de, en, word_type, level, gender, ipa, source_ref,
         created_at, srs_box, srs_due_at, srs_reviews)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, 0, ?11, 0)
       ON CONFLICT(user_id, level, de) DO NOTHING`
    )
    .bind(id, user.id, de, en, wordType, level, gender, ipa, sourceRef, now, now)
    .run();

  const created = insert.meta && insert.meta.changes === 1;

  const row = await env.DB
    .prepare(
      `SELECT id, de, en, word_type, level, gender, ipa, source_ref,
              created_at, srs_box, srs_due_at, srs_reviews
       FROM saved_words
       WHERE user_id = ?1 AND level = ?2 AND de = ?3
       LIMIT 1`
    )
    .bind(user.id, level, de)
    .first();

  return json({ ok: true, word: rowToApi(row) }, created ? 201 : 200);
}

/* ---------- DELETE /saved-words/:id ----------
   Always responds 200 { ok: true } — whether the row belonged to this
   user and was deleted, or never existed, or belonged to someone else.
   DELETE is naturally idempotent ("already gone" and "never existed"
   are the same end state), and this keeps a cross-user id-guessing
   attempt indistinguishable from retrying a delete on an unknown id. */
export async function deleteSavedWord(request, env, id) {
  const user = await requireUser(request, env);
  if (!user) return unauthorized();

  const limit = await checkSavedWordsLimit(env, user.id);
  if (!limit.ok) {
    return json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      429
    );
  }
  await recordSavedWordsAttempt(env, user.id);

  await env.DB
    .prepare(`DELETE FROM saved_words WHERE id = ?1 AND user_id = ?2`)
    .bind(id, user.id)
    .run();

  return json({ ok: true });
}

/* ---------- PATCH /saved-words/:id/review ----------
   Body: { grade: 'again' | 'hard' | 'good' | 'easy' }. Returns 404 for
   both "no such id" and "id belongs to another user" — the same
   non-leaking reasoning as DELETE, except PATCH cannot simply no-op
   since it must report the new SRS state on success. */
export async function reviewSavedWord(request, env, id) {
  const user = await requireUser(request, env);
  if (!user) return unauthorized();

  const limit = await checkSavedWordsLimit(env, user.id);
  if (!limit.ok) {
    return json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      429
    );
  }
  await recordSavedWordsAttempt(env, user.id);

  const body = await readJson(request);
  const grade = body && typeof body.grade === "string" ? body.grade : "";
  if (!GRADES.includes(grade)) {
    return json({ ok: false, error: "A valid review grade is required." }, 400);
  }

  const row = await env.DB
    .prepare(
      `SELECT srs_box, srs_reviews FROM saved_words
       WHERE id = ?1 AND user_id = ?2
       LIMIT 1`
    )
    .bind(id, user.id)
    .first();

  if (!row) {
    return json({ ok: false, error: "Not found." }, 404);
  }

  const curBox = row.srs_box;
  const curReviews = row.srs_reviews;
  const now = Math.floor(Date.now() / 1000);

  let nextBox, nextDue;
  if (grade === "again") {
    nextBox = 0;
    nextDue = now;
  } else {
    if (grade === "hard") nextBox = curBox;
    else if (grade === "good") nextBox = Math.min(curBox + 1, MAX_BOX);
    else nextBox = Math.min(curBox + 2, MAX_BOX); // 'easy'
    nextDue = now + SRS_DAYS[nextBox] * DAY_SECONDS;
  }
  const nextReviews = curReviews + 1;

  await env.DB
    .prepare(
      `UPDATE saved_words
       SET srs_box = ?1, srs_due_at = ?2, srs_reviews = ?3
       WHERE id = ?4 AND user_id = ?5`
    )
    .bind(nextBox, nextDue, nextReviews, id, user.id)
    .run();

  return json({
    ok: true,
    srs: { box: nextBox, due: nextDue, reviews: nextReviews }
  });
}
