/* /exam/* → private klarweg-exam Worker (service binding env.EXAM).
   OFF unless EXAM_ROUTES = "on" AND the EXAM binding exists; when off this
   returns null and the request falls through to the normal 404, exactly as
   before the exam existed. The session cookie is resolved here; the exam
   Worker receives only the user id (X-KW-User) plus the shared proxy secret.
   Any X-KW-* header or cookie the browser sent is dropped. The media route is
   capability-based (signed token), so it is forwarded without a session. */
import { withCors } from "./cors.js";
import { getSessionToken, findSessionUser } from "./sessions.js";
import { hasEncKey } from "./totp.js";
import { normalizeEmail } from "./auth.js";

const MEDIA_RE = /^\/exam\/v1\/media\/[A-Za-z0-9_.-]{20,500}$/;
/* Admin lookup by learner email (exam access management). Emails live only here, so this Worker resolves the address
   and forwards the RESULT (user id + account creation time) in trusted headers with an empty body: the email itself never
   reaches the exam Worker. Whether the caller may look anyone up (exam_admin, fresh second factor, rate limit, audit)
   is decided by the exam Worker, which refuses non-admins before it reads the result, so a non-admin learns nothing. */
const LOOKUP_PATH = "/exam/v1/admin/access/lookup";
const EMAIL_SHAPE = /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{1,63}$/;
const FORWARD_HEADERS = ["content-type", "content-length"];
const MAX_BODY_BYTES = 512 * 1024;

function jsonError(status, error) {
  return new Response(JSON.stringify({ ok: false, error }), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

/* Reads at most `max` bytes. A body without content-length (chunked) is never buffered whole: reading stops and the
   stream is cancelled as soon as the cap is passed. Returns null when the body is too large. */
async function readCapped(request, max) {
  if (!request.body) return new ArrayBuffer(0);
  const reader = request.body.getReader();
  const parts = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) { try { await reader.cancel(); } catch {} return null; }
    parts.push(value);
  }
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { out.set(p, at); at += p.byteLength; }
  return out.buffer;
}

export function examRoutesEnabled(env) {
  return env.EXAM_ROUTES === "on" && !!env.EXAM && typeof env.EXAM.fetch === "function";
}

export async function examProxy(request, env, url) {
  if (url.pathname !== "/exam" && !url.pathname.startsWith("/exam/")) return null;
  if (!examRoutesEnabled(env)) return null;

  const secret = env.EXAM_PROXY_SECRET;
  if (typeof secret !== "string" || secret.length < 32) return withCors(jsonError(503, "exam_unavailable"), request);

  const isMedia = request.method === "GET" && MEDIA_RE.test(url.pathname);
  const headers = new Headers();
  for (const h of FORWARD_HEADERS) {
    const v = request.headers.get(h);
    if (v) headers.set(h, v);
  }
  headers.set("x-kw-proxy-auth", secret);

  if (!isMedia) {
    const user = await findSessionUser(env.DB, getSessionToken(request));
    if (!user) return withCors(jsonError(401, "auth_required"), request);
    headers.set("x-kw-user", user.id);
    /* OD-19: when this session last passed the second factor (unix seconds). The exam Worker requires it to be fresh
       on rater/admin routes. Browser-sent x-kw-* headers never reach here, so it cannot be asserted by a client.
       Fail closed (A4 row 10): without a usable TOTP_ENC_KEY nothing is attested, not even a verification still inside
       the 12 h window, and the exam Worker is told the second factor is unavailable so staff get 503 mfa_unavailable. */
    if (!hasEncKey(env)) headers.set("x-kw-mfa-unavailable", "1");
    else if (Number.isFinite(user.mfaVerifiedAt)) headers.set("x-kw-mfa-at", String(user.mfaVerifiedAt));
  }

  if (request.method === "POST" && url.pathname === LOOKUP_PATH) {
    const raw = await readCapped(request, 4096);
    let email = "";
    try { email = normalizeEmail(JSON.parse(new TextDecoder().decode(raw || new ArrayBuffer(0))).email).normalize("NFC"); } catch { email = ""; }
    if (!email || email.length > 254 || !EMAIL_SHAPE.test(email)) return withCors(jsonError(400, "invalid_email"), request);
    const row = await env.DB.prepare("SELECT id, created_at FROM users WHERE email = ?1 LIMIT 1").bind(email).first();
    headers.set("x-kw-lookup-user", row ? row.id : "none");
    if (row && Number.isFinite(row.created_at)) headers.set("x-kw-lookup-created", String(row.created_at));
    headers.set("content-type", "application/json");
    let res;
    try {
      res = await env.EXAM.fetch(new Request("https://klarweg-exam.internal" + url.pathname, { method: "POST", headers, body: "{}" }));
    } catch (err) {
      console.log(JSON.stringify({ svc: "klarweg-access", evt: "exam_proxy_error", error: (err && err.name) || "Error" }));
      return withCors(jsonError(502, "exam_unavailable"), request);
    }
    const out = new Headers(res.headers);
    out.set("cache-control", "no-store");
    out.delete("set-cookie");
    return withCors(new Response(res.body, { status: res.status, headers: out }), request);
  }

  const init = { method: request.method, headers };
  if (request.method !== "GET" && request.method !== "HEAD") {
    /* Buffered (bounded): exam bodies are small JSON or one ≤ 256 KiB audio chunk. */
    const declared = Number(request.headers.get("content-length") || 0);
    if (declared > MAX_BODY_BYTES) return withCors(jsonError(413, "body_too_large"), request);
    const body = await readCapped(request, MAX_BODY_BYTES);
    if (body === null) return withCors(jsonError(413, "body_too_large"), request);
    init.body = body;
    headers.delete("content-length");
  }

  let res;
  try {
    res = await env.EXAM.fetch(new Request("https://klarweg-exam.internal" + url.pathname + url.search, init));
  } catch (err) {
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "exam_proxy_error", error: (err && err.name) || "Error" }));
    return withCors(jsonError(502, "exam_unavailable"), request);
  }
  const out = new Headers(res.headers);
  out.set("cache-control", isMedia ? "private, no-store" : "no-store");
  out.delete("set-cookie");
  return withCors(new Response(res.body, { status: res.status, headers: out }), request);
}
