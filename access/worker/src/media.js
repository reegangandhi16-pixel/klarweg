/* media.js — protected delivery of lesson and word audio.

     GET|HEAD klarweg.in/api/media/<key>     (this Worker sees /media/<key>)

   The MP3s live in the PRIVATE R2 bucket `klarweg-audio` (binding env.MEDIA),
   under the same keys the public audio Worker uses. Who may receive a key is
   decided by an access policy built offline (scripts/media-policy) and stored
   in the PRIVATE bucket `klarweg-resources` (binding env.RESOURCES) under an
   immutable release prefix chosen by one Worker var:

     media-policy/<MEDIA_POLICY_RELEASE>/head.json       chapters, free chapters, shard count
     media-policy/<MEDIA_POLICY_RELEASE>/shard-NN.json   { free, manifest, deny } key lists

   Evaluation order (same as scripts/media-policy/policy.mjs):
     free → manifest → deny → paid chapter clip → paid word audio → deny.
     free      anyone; public cache
     chapter   signed in + the chapter's level (Lifetime = every level)
     word      signed in + any active purchase
     otherwise 404 (lookup lists are not served here)

   Media pass. A paid answer needs the session and the purchases, two D1 reads.
   After one check the Worker sets a signed, short-lived cookie
     kw_media = v1.<user>.<levels>.<checkedAt>.<exp>.<sig>
     HttpOnly; Secure; SameSite=Lax; Path=/api/media; Max-Age=600
   sig = HMAC-SHA256(MEDIA_PASS_SECRET, "kw-media-v1|<sessionTag>|<user>|<levels>|<checkedAt>|<exp>")
   where sessionTag is derived from the kw_session cookie, so a pass is only
   valid together with the session it was issued for. Later requests verify
   the signature only (no D1). A pass that does not cover the requested level
   is re-checked against D1 at most once per RECHECK_SECONDS, so a new
   purchase is honoured within a minute. Maximum delays (documented):
     purchase → access          ≤ 60 s  (RECHECK_SECONDS)
     logout in the same browser   immediate: logout clears kw_session + kw_media
     session revoked elsewhere,
       refund, or expiry        ≤ 600 s (PASS_TTL_SECONDS) for new requests,
                                 plus the browser cache of files already
                                 received (MEDIA_PAID_MAX_AGE; 0 = none)

   Only klarweg.in is served (the cookie is first-party there); workers.dev
   answers 404. A Referer from a foreign site is refused; a missing one is
   allowed. This module only ever READS the bucket (get/head). */
import { getSessionToken, findSessionUser, hashSessionToken } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";
import { isAllowedOrigin } from "./cors.js";
import { isSameOriginApi, API_PREFIX } from "./same-origin.js";

export const MEDIA_ROUTE = /^\/media\/(.{1,600})$/;
export const PASS_COOKIE = "kw_media";
export const PASS_TTL_SECONDS = 600;
export const RECHECK_SECONDS = 60;
export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const KEY = /^[A-Za-z0-9][A-Za-z0-9_.\-/é]{0,200}\.mp3$/;
const RELEASE = /^m[0-9]{1,4}$/;
const USER = /^[A-Za-z0-9_-]{1,64}$/;
const CHAPTER_KEY = /^(story|listening|reading|speaking)\/([ABC][12])_(\d{3})_[A-Z]+\d+(?:_v\d+)?\.mp3$/;
const WORD_PREFIXES = [
  "words/female/", "words/male/",
  "vocab/audio/female/", "vocab/audio/male/",
  "vocab/public/audio/forms/", "vocab/audio/conjugation/"
];

/* ---------- configuration ---------- */
export function configured(env) {
  return !!(env.MEDIA && typeof env.MEDIA.get === "function" &&
    env.RESOURCES && typeof env.RESOURCES.get === "function" &&
    RELEASE.test(String(env.MEDIA_POLICY_RELEASE || "")) &&
    typeof env.MEDIA_PASS_SECRET === "string" && env.MEDIA_PASS_SECRET.length >= 32);
}
/* "3600" → private, max-age=3600; "0" or unset → private, no-store. */
export function paidCacheControl(env) {
  const n = Number(env.MEDIA_PAID_MAX_AGE);
  return Number.isInteger(n) && n > 0 && n <= 86400 ? `private, max-age=${n}` : "private, no-store";
}
export function freeCacheControl(key) {
  if (/^(reading|listening|story|speaking)\//.test(key)) return "public, max-age=86400";
  return "public, max-age=31536000, immutable";
}

/* ---------- key ---------- */
export function keyFromPath(raw) {
  let key;
  try { key = decodeURIComponent(raw); } catch { return null; }
  if (!KEY.test(key) || key.includes("..") || key.includes("//")) return null;
  return key;
}

/* ---------- policy ---------- */
/* FNV-1a 32-bit over the UTF-8 bytes; must equal scripts/media-policy shardOf(). */
export function shardOf(key, shards) {
  let h = 0x811c9dc5;
  for (const b of new TextEncoder().encode(key)) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
  return h % shards;
}
let policyCache = { release: null, head: null, shards: new Map() };
export function _resetPolicyCache() { policyCache = { release: null, head: null, shards: new Map() }; }
const policyPrefix = (env) => `media-policy/${env.MEDIA_POLICY_RELEASE}/`;

async function readHead(env) {
  if (policyCache.release === env.MEDIA_POLICY_RELEASE && policyCache.head) return policyCache.head;
  const obj = await env.RESOURCES.get(policyPrefix(env) + "head.json");
  if (!obj) return null;
  const head = await obj.json();
  if (!head || head.schema !== 1 || !Number.isInteger(head.shards) || head.shards < 1 || typeof head.chapters !== "object") return null;
  policyCache = { release: env.MEDIA_POLICY_RELEASE, head: { ...head, freeChapters: new Set(head.freeChapters || []) }, shards: new Map() };
  return policyCache.head;
}
async function readShard(env, head, n) {
  if (policyCache.shards.has(n)) return policyCache.shards.get(n);
  const obj = await env.RESOURCES.get(policyPrefix(env) + "shard-" + String(n).padStart(2, "0") + ".json");
  if (!obj) return null;
  const s = await obj.json();
  const shard = { free: new Set(s.free || []), manifest: new Set(s.manifest || []), deny: new Set(s.deny || []) };
  policyCache.shards.set(n, shard);
  return shard;
}
/* → { cls: 'free'|'manifest'|'deny'|'chapter'|'word', level? } or null (policy unavailable) */
export async function classify(env, key) {
  const head = await readHead(env);
  if (!head) return null;
  const shard = await readShard(env, head, shardOf(key, head.shards));
  if (!shard) return null;
  if (shard.free.has(key)) return { cls: "free" };
  if (shard.manifest.has(key)) return { cls: "manifest" };
  if (shard.deny.has(key)) return { cls: "deny" };
  const m = CHAPTER_KEY.exec(key);
  if (m) {
    const chapterId = head.chapters[m[2] + "_" + m[3]];
    if (!chapterId || head.freeChapters.has(chapterId)) return { cls: "deny" };
    return { cls: "chapter", level: m[2], chapterId };
  }
  if (WORD_PREFIXES.some((p) => key.startsWith(p))) return { cls: "word" };
  return { cls: "deny" };
}

/* ---------- media pass ---------- */
const enc = new TextEncoder();
const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
async function hmac(secret, message) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", k, enc.encode(message)));
}
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
export function levelsMask(entitlements) {
  let m = 0;
  LEVELS.forEach((l, i) => { if (entitlements && entitlements[l] === true) m |= 1 << i; });
  return m;
}
export function grants(mask, need) {
  if (need === "any") return mask !== 0;
  const i = LEVELS.indexOf(need);
  return i >= 0 && (mask & (1 << i)) !== 0;
}
const sessionTag = async (token) => (await hashSessionToken("kw-media-tag|" + token)).slice(0, 32);
const passMessage = (tag, user, levels, checkedAt, exp) => `kw-media-v1|${tag}|${user}|${levels}|${checkedAt}|${exp}`;

export async function issuePass(env, token, userId, levels, now) {
  const exp = now + PASS_TTL_SECONDS;
  const sig = await hmac(env.MEDIA_PASS_SECRET, passMessage(await sessionTag(token), userId, levels, now, exp));
  return `${PASS_COOKIE}=v1.${userId}.${levels}.${now}.${exp}.${sig}; Path=${API_PREFIX}/media; HttpOnly; Secure; SameSite=Lax; Max-Age=${PASS_TTL_SECONDS}`;
}
export function clearPassCookie() {
  return `${PASS_COOKIE}=; Path=${API_PREFIX}/media; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}
function readCookie(request, name) {
  const header = request.headers.get("Cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const [n, ...v] = part.trim().split("=");
    if (n === name) return v.join("=") || null;
  }
  return null;
}
/* → { userId, levels, checkedAt } or null */
export async function verifyPass(env, request, token, now) {
  const raw = readCookie(request, PASS_COOKIE);
  if (!raw || !token) return null;
  const p = raw.split(".");
  if (p.length !== 6 || p[0] !== "v1" || !USER.test(p[1])) return null;
  const [levels, checkedAt, exp] = [p[2], p[3], p[4]].map(Number);
  if (![levels, checkedAt, exp].every(Number.isInteger) || levels < 0 || levels > 63) return null;
  if (exp <= now || exp - checkedAt !== PASS_TTL_SECONDS || checkedAt > now + 5) return null;
  if (!/^[0-9a-f]{64}$/.test(p[5])) return null;
  const want = await hmac(env.MEDIA_PASS_SECRET, passMessage(await sessionTag(token), p[1], levels, checkedAt, exp));
  return safeEqual(want, p[5]) ? { userId: p[1], levels, checkedAt } : null;
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
function refusal(status, setCookie) {
  const h = baseHeaders("private, no-store");
  h.set("Content-Type", "text/plain; charset=utf-8");
  if (setCookie) h.append("Set-Cookie", setCookie);
  const text = { 401: "sign_in_required\n", 403: "purchase_required\n", 404: "not_found\n", 503: "media_unavailable\n" }[status];
  return new Response(text, { status, headers: h });
}
async function deliver(request, env, key, cacheControl, setCookie) {
  const head = await env.MEDIA.head(key);
  if (!head) return refusal(404, setCookie);
  const h = baseHeaders(cacheControl);
  if (cacheControl.startsWith("private")) h.set("Vary", "Cookie");
  if (setCookie) h.append("Set-Cookie", setCookie);
  h.set("Content-Type", "audio/mpeg");
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
  if (range) {
    const obj = await env.MEDIA.get(key, { range: { offset: range.offset, length: range.length } });
    if (!obj) return refusal(404, setCookie);
    h.set("Content-Range", `bytes ${range.offset}-${range.offset + range.length - 1}/${head.size}`);
    h.set("Content-Length", String(range.length));
    return new Response(obj.body, { status: 206, headers: h });
  }
  const obj = await env.MEDIA.get(key);
  if (!obj) return refusal(404, setCookie);
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

/* GET|HEAD /media/<key>  (request already stripped of /api by index.js) */
export async function mediaFile(request, env, rawKey) {
  if (!isSameOriginApi(request)) return refusal(404);   // host survives the /api strip
  const key = keyFromPath(rawKey);
  if (!key) return refusal(404);
  if (!configured(env)) return refusal(503);
  if (foreignReferer(request)) return refusal(403);

  let rule;
  try { rule = await classify(env, key); } catch { rule = null; }
  if (!rule) {
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "media_policy_unavailable", release: env.MEDIA_POLICY_RELEASE }));
    return refusal(503);
  }
  if (rule.cls === "free") return deliver(request, env, key, freeCacheControl(key));
  if (rule.cls !== "chapter" && rule.cls !== "word") return refusal(404);

  const need = rule.cls === "chapter" ? rule.level : "any";
  const token = getSessionToken(request);
  if (!token) return refusal(401);
  const now = Math.floor(Date.now() / 1000);
  const pass = await verifyPass(env, request, token, now);
  if (pass && grants(pass.levels, need)) return deliver(request, env, key, paidCacheControl(env));
  if (pass && now - pass.checkedAt < RECHECK_SECONDS) return refusal(403);

  const user = await findSessionUser(env.DB, token);
  if (!user || !USER.test(String(user.id))) return refusal(401, clearPassCookie());
  const levels = levelsMask(await readEntitlements(env.DB, user.id));
  const cookie = await issuePass(env, token, user.id, levels, now);
  if (!grants(levels, need)) return refusal(403, cookie);
  return deliver(request, env, key, paidCacheControl(env), cookie);
}
