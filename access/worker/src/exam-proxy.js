/* /exam/* → private klarweg-exam Worker (service binding env.EXAM).
   OFF unless EXAM_ROUTES = "on" AND the EXAM binding exists; when off this
   returns null and the request falls through to the normal 404, exactly as
   before the exam existed. The session cookie is resolved here; the exam
   Worker receives only the user id (X-KW-User) plus the shared proxy secret.
   Any X-KW-* header or cookie the browser sent is dropped. The media route is
   capability-based (signed token), so it is forwarded without a session. */
import { withCors } from "./cors.js";
import { getSessionToken, findSessionUser } from "./sessions.js";

const MEDIA_RE = /^\/exam\/v1\/media\/[A-Za-z0-9_.-]{20,500}$/;
const FORWARD_HEADERS = ["content-type", "content-length"];
const MAX_BODY_BYTES = 512 * 1024;

function jsonError(status, error) {
  return new Response(JSON.stringify({ ok: false, error }), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
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
  }

  const init = { method: request.method, headers };
  if (request.method !== "GET" && request.method !== "HEAD") {
    /* Buffered (bounded): exam bodies are small JSON or one ≤ 256 KiB audio chunk. */
    const declared = Number(request.headers.get("content-length") || 0);
    if (declared > MAX_BODY_BYTES) return withCors(jsonError(413, "body_too_large"), request);
    const body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY_BYTES) return withCors(jsonError(413, "body_too_large"), request);
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
