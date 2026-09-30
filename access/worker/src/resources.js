/* resources.js — protected delivery of chapter resource PDFs.

   The PDFs live in a PRIVATE R2 bucket (binding env.RESOURCES), under an
   immutable release prefix chosen by one Worker var:

     <RESOURCE_RELEASE>/manifest.json
     <RESOURCE_RELEASE>/pdfs/<level>/<chapter-id>/index.json
     <RESOURCE_RELEASE>/pdfs/<level>/<chapter-id>/<type>.pdf

   Three operations, all fail-closed:

     GET  /resources/<chapter-id>               list   (session + access)
     POST /resources/<chapter-id>/<type>/link   sign   (session + access + rate limit)
     GET  /resources/file/<chapter-id>/<type>?u=&e=&s=
                                                stream (signature only — the new
                                                tab may not carry third-party cookies)

   Access = the chapter is free (Chapter 1 of every level, the same rule as
   kw-access.js FREE_CHAPTER_NUMBER) or the user holds the level entitlement
   per readEntitlements() — which already honours expiry and Lifetime.
   Every resource route requires a signed-in session.

   Signed links: HMAC-SHA256 under the RESOURCE_URL_SECRET Worker secret over
   the canonical payload "kw-res-v1|<user>|<chapter>|<type>|<expiry>".
   Reusable until expiry (5 minutes); never one-time. Nothing about the bucket,
   the release or object keys ever reaches the browser. */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";
import { parseChapterId } from "./ai.js";
import { networkOf } from "./ratelimit.js";

export const FREE_CHAPTER_NUMBER = 1;
export const LINK_TTL_SECONDS = 5 * 60;
export const LINK_LIMIT = { max: 60, win: 60 * 60 * 1000 };        // per user per hour
export const DOWNLOAD_LIMIT = { max: 300, win: 60 * 60 * 1000 };   // per network per hour

const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}-[a-z0-9-]{1,72}$/;
const RESOURCE_TYPE = /^[a-z][a-z0-9-]{1,31}$/;
const USER_ID = /^[A-Za-z0-9_-]{1,64}$/;
const SIGNATURE = /^[0-9a-f]{64}$/;
const RELEASE = /^r[0-9]{1,4}$/;

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra }
  });
}
// One generic refusal for every link/file failure, so nothing about the cause leaks.
const refused = () => json({ ok: false, error: "link_invalid", message: "This download link is not valid. Open the chapter and try again." }, 403);
const unavailable = () => json({ ok: false, error: "resources_unavailable", message: "Study resources are not available right now." }, 503);

function configured(env) {
  return !!(env.RESOURCES && typeof env.RESOURCES.get === "function" && env.RESOURCE_URL_SECRET && RELEASE.test(String(env.RESOURCE_RELEASE || "")));
}

/* ---------- access ---------- */
export function isFreeChapter(chapter) {
  return !!chapter && chapter.number === FREE_CHAPTER_NUMBER;
}

/* The single question every route asks: may this user open this chapter's
   resources? chapterId is validated here too. */
export async function canAccessChapterResources(env, userId, chapterId) {
  if (!userId || typeof chapterId !== "string" || !CHAPTER_ID.test(chapterId)) return false;
  const chapter = parseChapterId(chapterId);
  if (!chapter) return false;
  if (isFreeChapter(chapter)) return true;
  const ent = await readEntitlements(env.DB, userId);
  return ent[chapter.level] === true;
}

/* ---------- signing ---------- */
const enc = new TextEncoder();
const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

export function canonicalPayload(userId, chapterId, type, expires) {
  return ["kw-res-v1", userId, chapterId, type, String(expires)].join("|");
}

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey("raw", enc.encode(String(secret)), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode(message)));
}

// Constant-time comparison of two equal-format hex strings.
function timingSafeEqualHex(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function signLink(env, userId, chapterId, type, expires) {
  return hmac(env.RESOURCE_URL_SECRET, canonicalPayload(userId, chapterId, type, expires));
}

export async function verifyLink(env, { userId, chapterId, type, expires, signature }, nowSeconds = Math.floor(Date.now() / 1000)) {
  if (!USER_ID.test(String(userId || "")) || !CHAPTER_ID.test(String(chapterId || "")) || !RESOURCE_TYPE.test(String(type || ""))) return false;
  if (!/^[0-9]{9,11}$/.test(String(expires || "")) || !SIGNATURE.test(String(signature || ""))) return false;
  const exp = Number(expires);
  if (exp <= nowSeconds || exp > nowSeconds + LINK_TTL_SECONDS + 60) return false;
  const expected = await signLink(env, userId, chapterId, type, exp);
  return timingSafeEqualHex(expected, signature);
}

/* ---------- rate limits (same fixed-window rate_counters table as ratelimit.js) ---------- */
function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

async function takeFromBucket(env, bucket, limit, now = Date.now()) {
  const end = windowEnd(now, limit.win);
  const row = await env.DB.prepare("SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2").bind(bucket, end).first();
  if (row && row.hits >= limit.max) return { ok: false, retryAfter: Math.max(1, Math.ceil((end - now) / 1000)) };
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind(bucket, end).run();
  return { ok: true };
}

async function networkBucket(env, request) {
  const net = networkOf(request.headers.get("CF-Connecting-IP")) || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  return "rd:" + await hmac(env.RATE_SALT || "dev-salt", "res|" + net + "|" + day);
}

/* ---------- R2 ---------- */
const levelOf = (chapterId) => chapterId.slice(0, 2);
const chapterPrefix = (env, chapterId) => `${env.RESOURCE_RELEASE}/pdfs/${levelOf(chapterId)}/${chapterId}/`;

async function readChapterIndex(env, chapterId) {
  const obj = await env.RESOURCES.get(chapterPrefix(env, chapterId) + "index.json");
  if (!obj) return null;
  try {
    const idx = await obj.json();
    return idx && idx.chapter === chapterId && idx.resources && typeof idx.resources === "object" ? idx : null;
  } catch { return null; }
}

async function sessionUser(env, request) {
  return findSessionUser(env.DB, getSessionToken(request));
}

/* ---------- routes ---------- */

// GET /resources/<chapter-id>
export async function listResources(request, env, chapterId) {
  if (!configured(env)) return unavailable();
  const user = await sessionUser(env, request);
  if (!user) return json({ ok: false, error: "auth_required", message: "Sign in to download study resources." }, 401);
  if (!(await canAccessChapterResources(env, user.id, chapterId))) {
    return json({ ok: false, error: "not_entitled", message: "Unlock this level to download its study resources." }, 403);
  }
  const idx = await readChapterIndex(env, chapterId);
  const resources = {};
  for (const [type, r] of Object.entries((idx && idx.resources) || {})) {
    if (!RESOURCE_TYPE.test(type) || !r) continue;
    // Safe metadata only: no file names, keys, hashes, release or bucket.
    resources[type] = {
      type,
      pages: Number.isInteger(r.pages) ? r.pages : null,
      bytes: Number.isInteger(r.bytes) ? r.bytes : null,
      available: true
    };
  }
  return json({ ok: true, chapter: chapterId, resources });
}

// POST /resources/<chapter-id>/<type>/link
export async function createResourceLink(request, env, chapterId, type) {
  if (!configured(env)) return unavailable();
  const user = await sessionUser(env, request);
  if (!user) return json({ ok: false, error: "auth_required", message: "Sign in to download study resources." }, 401);
  if (!RESOURCE_TYPE.test(type) || !(await canAccessChapterResources(env, user.id, chapterId))) {
    return json({ ok: false, error: "not_entitled", message: "Unlock this level to download its study resources." }, 403);
  }
  const idx = await readChapterIndex(env, chapterId);
  if (!idx || !idx.resources[type]) return json({ ok: false, error: "not_found", message: "This resource is not available yet." }, 404);

  const limit = await takeFromBucket(env, "rl:" + user.id, LINK_LIMIT);
  if (!limit.ok) {
    return json({ ok: false, error: "rate_limited", message: "Too many downloads in a short time. Please try again later." }, 429, { "Retry-After": String(limit.retryAfter) });
  }

  const expires = Math.floor(Date.now() / 1000) + LINK_TTL_SECONDS;
  const signature = await signLink(env, user.id, chapterId, type, expires);
  const url = new URL(`/resources/file/${chapterId}/${type}`, request.url);
  url.searchParams.set("u", user.id);
  url.searchParams.set("e", String(expires));
  url.searchParams.set("s", signature);
  return json({ ok: true, url: url.toString(), expiresAt: expires });
}

// GET /resources/file/<chapter-id>/<type>?u=&e=&s=
export async function streamResource(request, env, chapterId, type) {
  if (!configured(env)) return unavailable();
  const q = new URL(request.url).searchParams;
  const ok = await verifyLink(env, { userId: q.get("u"), chapterId, type, expires: q.get("e"), signature: q.get("s") });
  if (!ok) return refused();

  const limit = await takeFromBucket(env, await networkBucket(env, request), DOWNLOAD_LIMIT);
  if (!limit.ok) {
    return json({ ok: false, error: "rate_limited", message: "Too many downloads in a short time. Please try again later." }, 429, { "Retry-After": String(limit.retryAfter) });
  }

  const obj = await env.RESOURCES.get(chapterPrefix(env, chapterId) + type + ".pdf");
  if (!obj) return refused();
  return new Response(obj.body, {
    status: 200,
    headers: {
      "content-type": "application/pdf",
      "content-length": String(obj.size),
      "content-disposition": `inline; filename="klarweg-${chapterId}-${type}.pdf"`,
      "cache-control": "private, no-store",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer"
    }
  });
}

export const RESOURCE_ROUTES = {
  list: /^\/resources\/([a-z0-9-]{4,80})$/,
  link: /^\/resources\/([a-z0-9-]{4,80})\/([a-z0-9-]{2,32})\/link$/,
  file: /^\/resources\/file\/([a-z0-9-]{4,80})\/([a-z0-9-]{2,32})$/
};
