/* media-images.js — protected delivery of PAID vocabulary illustrations.
     GET|HEAD klarweg.in/api/media/vocab-img/<id>-<400|800>.<avif|webp>
   (index.js → mediaFile → here; this Worker sees /media/vocab-img/...)

   Free Chapter 1 illustrations are public files on the site (Pages); only
   paid-chapter illustrations come through here. They live in the PRIVATE R2
   bucket bound as MEDIA (klarweg-audio) under vocab-img/ — never public.

   <id> is opaque (hash of headword + meaning), so URLs do not list paid words.

   Authorization, in order (fail closed at every step):
     1. same origin klarweg.in, well-formed key           else 404 (no read)
     2. no foreign Referer                                 else 403
     3. a live session                                     else 401
     4. entitlements (expiry honoured; Lifetime = all)    read error → 503
     5. levels map vocab-img/levels.json { id: ["A1",…] } unreadable → 503
        = the levels of the PAID chapters that use the image. The image is
        served only if the user holds at least one of THOSE levels. An image
        shared by A1 and B1 chapters is visible to an A1 or a B1 buyer, never
        to a C2-only buyer.
     6. not listed, or no matching level                   → 403 (same answer:
        a signed-in user cannot tell an existing image from a missing one)
   Responses: private, no-store; nosniff; CORP same-origin; never edge-cached. */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { readEntitlements } from "./entitlements.js";

export const IMG_KEY = /^vocab-img\/([0-9a-f]{20})-(400|800)\.(avif|webp)$/;
export const LEVELS_OBJECT = "vocab-img/levels.json";
const LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);
const CACHE = "private, no-store";
const TYPES = { avif: "image/avif", webp: "image/webp" };

let levelsCache = null;   // parsed map, once per isolate; a failed read is never cached
export function _resetImageCache() { levelsCache = null; }

async function levelsMap(env) {
  if (levelsCache) return levelsCache;
  let obj;
  try { obj = await env.MEDIA.get(LEVELS_OBJECT); } catch { return null; }
  if (!obj) return null;
  let map;
  try { map = JSON.parse(await obj.text()); } catch { return null; }
  if (!map || typeof map !== "object" || Array.isArray(map)) return null;
  levelsCache = map;
  return map;
}

function headers(contentType) {
  const h = new Headers();
  h.set("Cache-Control", CACHE);
  h.set("X-Content-Type-Options", "nosniff");
  h.set("Cross-Origin-Resource-Policy", "same-origin");
  h.set("Referrer-Policy", "no-referrer");
  h.set("Content-Type", contentType);
  return h;
}
function refuse(status) {
  const text = { 401: "sign_in_required\n", 403: "purchase_required\n", 404: "not_found\n", 503: "media_unavailable\n" }[status];
  return new Response(text, { status, headers: headers("text/plain; charset=utf-8") });
}

/* key = the decoded path after /media/ ; caller already checked same origin. */
export async function mediaImage(request, env, key, { foreignReferer }) {
  const m = IMG_KEY.exec(key);
  if (!m) return refuse(404);
  if (!env.MEDIA || typeof env.MEDIA.get !== "function" || !env.DB) return refuse(503);
  if (foreignReferer(request)) return refuse(403);

  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return refuse(401);
  let ent;
  try { ent = await readEntitlements(env.DB, user.id); } catch { return refuse(503); }
  const map = await levelsMap(env);
  if (map == null) return refuse(503);
  const levels = Array.isArray(map[m[1]]) ? map[m[1]].filter((l) => LEVELS.has(l)) : [];
  if (!levels.some((l) => ent[l] === true)) return refuse(403);

  const obj = request.method === "HEAD" ? await env.MEDIA.head(key) : await env.MEDIA.get(key);
  if (!obj) return refuse(403);                       // listed but missing: same answer, no oracle
  const h = headers(TYPES[m[3]]);
  if (obj.httpEtag) h.set("ETag", obj.httpEtag);
  if (obj.size != null) h.set("Content-Length", String(obj.size));
  return new Response(request.method === "HEAD" ? null : obj.body, { status: 200, headers: h });
}
