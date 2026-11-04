/* media.js — protected delivery of lesson and word audio.

     GET|HEAD klarweg.in/api/media/<key>     (this Worker sees /media/<key>)

   The MP3s live in the PRIVATE R2 bucket `klarweg-audio` (binding env.MEDIA)
   under the same keys the old public audio Worker used. Access uses the SAME
   session and purchase checks as the paid chapter route (chapters.js):

     free        only the files listed in media-free.js (homepage + Chapter 1)
     lesson clip <kind>/<LEVEL>_<NNN>_<LINE>.mp3 → signed in + that level
                 (readEntitlements: expiry honoured, Lifetime = every level)
     word audio  word / form / conjugation files → signed in + any active level
     word lists  the six word-manifest JSON files the player loads (MANIFESTS):
                 public, as on the old audio Worker (file names only, no audio)
     anything else → 404

   USED FILES ONLY (owner decision 2026-11-02: unused recordings are refused to
   everyone, buyers included). A paid file is served only if the site really
   plays it: a lesson clip must be a line of its chapter's gated payload
   (chapters.js chapterAudioKeys), a word file must appear in the word manifest
   the player loads for it (read from this same bucket, once per isolate).
   Otherwise 404. If that list cannot be read: 503 (fail closed).

   Paid answers are `private, no-store` (owner decision) and are never cached
   at Cloudflare (Worker responses are not edge-cached). Free answers keep the
   old audio Worker's public cache times. Only klarweg.in is served (that is
   where the session cookie is first-party); workers.dev answers 404. A Referer
   from a foreign site is refused. This module only READS the bucket. */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";
import { chapterAudioKeys } from "./chapters.js";
import { isAllowedOrigin } from "./cors.js";
import { isSameOriginApi } from "./same-origin.js";
import { FREE_MEDIA } from "./media-free.js";

export const MEDIA_ROUTE = /^\/media\/(.{1,600})$/;
const KEY = /^[A-Za-z0-9][A-Za-z0-9_.\-/é]{0,200}\.mp3$/;
const LESSON = /^(story|listening|reading|speaking)\/([ABC][12])_(\d{3})_[A-Z]+\d+(?:_v\d+)?\.mp3$/;
/* The word manifests the player loads (kw-audio-engine.js) — served publicly,
   like the old audio Worker did; media.js also reads them to decide "used". */
export const MANIFESTS = new Set([
  "a1-words-manifest.json", "a2-words-manifest.json", "b1-words-manifest.json",
  "vocab/manifest.json", "vocab/manifest-word-form.json", "vocab/manifest-conjugation.json"
]);
const MANIFEST_CACHE = "public, max-age=300";

/* Word prefix → the manifests (in this bucket) the player resolves it from,
   and how that manifest writes the path. */
const WORDS_MANIFESTS = ["a1-words-manifest.json", "a2-words-manifest.json", "b1-words-manifest.json", "vocab/manifest.json"];
const WORD_RULES = [
  ["words/female/", WORDS_MANIFESTS, (k) => `"/audio/${k}"`],
  ["words/male/", WORDS_MANIFESTS, (k) => `"/audio/${k}"`],
  ["vocab/audio/female/", ["vocab/manifest.json"], (k) => `"${k.slice(6)}"`],
  ["vocab/audio/male/", ["vocab/manifest.json"], (k) => `"${k.slice(6)}"`],
  ["vocab/public/audio/forms/", ["vocab/manifest-word-form.json"], (k) => `"${k.slice(6)}"`],
  ["vocab/audio/conjugation/", ["vocab/manifest-conjugation.json"], (k) => `"${k.slice(6)}"`]
];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const PAID_CACHE = "private, no-store";

export function keyFromPath(raw) {
  let key;
  try { key = decodeURIComponent(raw); } catch { return null; }
  if (!KEY.test(key) || key.includes("..") || key.includes("//")) return null;
  return key;
}

/* → { free: true } | { level, number } (lesson) | { level: "any", manifests, needle } (word) | null (404) */
export function classify(key) {
  if (FREE_MEDIA.has(key)) return { free: true };
  const m = LESSON.exec(key);
  if (m) return { level: m[2], number: Number(m[3]) };
  const w = WORD_RULES.find(([p]) => key.startsWith(p));
  if (w) return { level: "any", manifests: w[1], needle: w[2](key) };
  return null;
}

/* Manifest text, once per isolate; a failed read is never cached. */
const manifestCache = new Map();
async function manifestText(env, file) {
  if (manifestCache.has(file)) return manifestCache.get(file);
  const obj = await env.MEDIA.get(file);
  if (!obj) return null;
  const text = await obj.text();
  manifestCache.set(file, text);
  return text;
}
export function _resetMediaCache() { manifestCache.clear(); }

/* Is this paid file really used by the site? true | false | null (cannot tell → 503). */
async function isUsed(env, key, rule) {
  if (rule.manifests) {
    for (const file of rule.manifests) {
      const text = await manifestText(env, file);
      if (text == null) return null;
      if (text.includes(rule.needle)) return true;
    }
    return false;
  }
  const keys = await chapterAudioKeys(env, rule.level, rule.number);
  return keys == null ? null : keys.has(key);
}

export function freeCacheControl(key) {
  if (/^(reading|listening|story|speaking)\//.test(key)) return "public, max-age=86400";
  return "public, max-age=31536000, immutable";
}

/* ---------- delivery (ported from audio/worker/src/index.js) ---------- */
export function parseRange(header, size) {
  if (!header) return null;
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m) return null;
  const [, a, b] = m;
  if (a === "" && b === "") return { invalid: true };
  let start, end;
  if (a === "") {
    const suffix = Number(b);
    if (suffix === 0) return { invalid: true };
    start = Math.max(0, size - suffix); end = size - 1;
  } else {
    start = Number(a); end = b === "" ? size - 1 : Math.min(Number(b), size - 1);
  }
  if (start >= size || start > end) return { invalid: true };
  return { offset: start, length: end - start + 1 };
}
function etagMatches(ifNoneMatch, etag) {
  if (!ifNoneMatch || !etag) return false;
  if (ifNoneMatch.trim() === "*") return true;
  const bare = (t) => t.trim().replace(/^W\//, "");
  return ifNoneMatch.split(",").some((t) => bare(t) === bare(etag));
}
function baseHeaders(cacheControl) {
  const h = new Headers();
  h.set("Cache-Control", cacheControl);
  h.set("X-Content-Type-Options", "nosniff");
  h.set("Cross-Origin-Resource-Policy", "same-origin");
  h.set("Referrer-Policy", "no-referrer");
  return h;
}
function refusal(status) {
  const h = baseHeaders(PAID_CACHE);
  h.set("Content-Type", "text/plain; charset=utf-8");
  const text = { 401: "sign_in_required\n", 403: "purchase_required\n", 404: "not_found\n", 503: "media_unavailable\n" }[status];
  return new Response(text, { status, headers: h });
}
async function deliver(request, env, key, cacheControl, contentType = "audio/mpeg") {
  const head = await env.MEDIA.head(key);
  if (!head) return refusal(404);
  const h = baseHeaders(cacheControl);
  h.set("Content-Type", contentType);
  h.set("Accept-Ranges", "bytes");
  if (head.httpEtag) h.set("ETag", head.httpEtag);
  if (etagMatches(request.headers.get("If-None-Match"), head.httpEtag)) return new Response(null, { status: 304, headers: h });
  const range = parseRange(request.headers.get("Range"), head.size);
  if (range && range.invalid) {
    h.set("Content-Range", `bytes */${head.size}`);
    return new Response(null, { status: 416, headers: h });
  }
  if (request.method === "HEAD") {
    h.set("Content-Length", String(range ? range.length : head.size));
    if (range) h.set("Content-Range", `bytes ${range.offset}-${range.offset + range.length - 1}/${head.size}`);
    return new Response(null, { status: range ? 206 : 200, headers: h });
  }
  const obj = await env.MEDIA.get(key, range ? { range: { offset: range.offset, length: range.length } } : undefined);
  if (!obj) return refusal(404);
  if (range) {
    h.set("Content-Range", `bytes ${range.offset}-${range.offset + range.length - 1}/${head.size}`);
    h.set("Content-Length", String(range.length));
    return new Response(obj.body, { status: 206, headers: h });
  }
  h.set("Content-Length", String(head.size));
  return new Response(obj.body, { status: 200, headers: h });
}

function foreignReferer(request) {
  const ref = request.headers.get("Referer");
  if (!ref) return false;
  let origin = null;
  try { origin = new URL(ref).origin; } catch {}
  return !isAllowedOrigin(origin);
}

/* GET|HEAD /media/<key>  (request already stripped of /api by index.js; the host is kept) */
export async function mediaFile(request, env, rawKey) {
  if (!isSameOriginApi(request)) return refusal(404);
  if (MANIFESTS.has(rawKey)) {
    if (!env.MEDIA || typeof env.MEDIA.get !== "function") return refusal(503);
    if (foreignReferer(request)) return refusal(403);
    return deliver(request, env, rawKey, MANIFEST_CACHE, "application/json; charset=utf-8");
  }
  const key = keyFromPath(rawKey);
  const rule = key && classify(key);
  if (!rule) return refusal(404);
  if (!env.MEDIA || typeof env.MEDIA.get !== "function") return refusal(503);
  if (foreignReferer(request)) return refusal(403);
  if (rule.free) return deliver(request, env, key, freeCacheControl(key));

  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return refusal(401);
  const ent = await readEntitlements(env.DB, user.id);
  const allowed = rule.level === "any" ? LEVELS.some((l) => ent[l] === true) : ent[rule.level] === true;
  if (!allowed) return refusal(403);
  const used = await isUsed(env, key, rule);
  if (used == null) return refusal(503);
  if (!used) return refusal(404);
  return deliver(request, env, key, PAID_CACHE);
}
