/* saved-lexicon.js — GET /saved-words/lexicon (account/review.html).

   The full word-popup dictionary is no longer published (scripts/
   lexicon-split.mjs); only the free pages' entries are public. The review
   page still shows meanings for the words a learner saved from paid
   chapters: this route returns the dictionary entries for THAT user's own
   saved words only, and only while the user holds an active purchase.

   - user from the session cookie only (never from the request)
   - no active level (signed in, nothing bought or all expired) → empty
   - entries come from the gated release in klarweg-resources:
     chapters/<CHAPTER_RELEASE>/lexicon/NN.json  ({ G, I }, 64 FNV-1a shards,
     built by scripts/lexicon-split.mjs lexiconShards())
   - key normalisation = review.html lex(): lower case, leading der/die/das
     dropped, [.,!?;:] dropped, trimmed; an inflection resolves to its lemma
     but is returned under the saved word's own key.
   - private, no-store; a shard that cannot be read → 503 (never cached). */

import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements, LEVELS } from "./entitlements.js";

export const SHARDS = 64;
const MAX_WORDS = 2000;
const RELEASE = /^r[0-9]{1,4}$/;
const HEADERS = { "cache-control": "private, no-store", "x-content-type-options": "nosniff" };

function json(data, status = 200) {
  return Response.json(data, { status, headers: HEADERS });
}

/* FNV-1a over UTF-8, same as scripts/lexicon-split.mjs shardOf(). */
export function shardOf(key, n = SHARDS) {
  let h = 0x811c9dc5;
  for (const ch of new TextEncoder().encode(key)) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; }
  return h % n;
}

export function normKey(de) {
  return String(de || "").toLowerCase().replace(/^(der|die|das)\s+/, "").replace(/[.,!?;:]/g, "").trim();
}

/* Shards are immutable per release: one copy per isolate. Failed reads are not cached. */
const shardCache = new Map();
export function _resetLexiconCache() { shardCache.clear(); }
async function readShard(env, n) {
  const key = `chapters/${env.CHAPTER_RELEASE}/lexicon/${String(n).padStart(2, "0")}.json`;
  if (shardCache.has(key)) return shardCache.get(key);
  const obj = await env.RESOURCES.get(key);
  if (!obj) return null;
  const data = await obj.json();
  if (!data || typeof data.G !== "object" || typeof data.I !== "object") return null;
  shardCache.set(key, data);
  return data;
}

const own = (o, k) => !!o && Object.prototype.hasOwnProperty.call(o, k);

export async function savedWordsLexicon(request, env) {
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const ent = await readEntitlements(env.DB, user.id);
  if (!LEVELS.some((l) => ent[l] === true)) return json({ ok: true, entries: {} });
  if (!env.RESOURCES || typeof env.RESOURCES.get !== "function" || !RELEASE.test(String(env.CHAPTER_RELEASE || ""))) {
    return json({ ok: false, error: "Unavailable." }, 503);
  }

  const rows = await env.DB
    .prepare(`SELECT de FROM saved_words WHERE user_id = ?1 ORDER BY created_at DESC LIMIT ${MAX_WORDS}`)
    .bind(user.id)
    .all();
  const keys = [...new Set((rows.results || []).map((r) => normKey(r.de)).filter((k) => k && k.length <= 120))];

  const entries = {};
  try {
    for (const k of keys) {
      const s = await readShard(env, shardOf(k));
      if (!s) return json({ ok: false, error: "Unavailable." }, 503);
      if (own(s.G, k)) { entries[k] = s.G[k]; continue; }
      if (!own(s.I, k) || typeof s.I[k] !== "string") continue;
      const lemma = s.I[k].toLowerCase();
      const ls = await readShard(env, shardOf(lemma));
      if (!ls) return json({ ok: false, error: "Unavailable." }, 503);
      if (own(ls.G, lemma)) entries[k] = ls.G[lemma];
    }
  } catch {
    return json({ ok: false, error: "Unavailable." }, 503);
  }
  return json({ ok: true, entries });
}
