/* The Klarweg site's origins, matched exactly. During the klarweg.in
   migration both the current GitHub Pages origin and the new custom
   domain are accepted; github.io is removed once the move is complete. */
const ALLOWED_ORIGINS = [
  "https://reegangandhi16-pixel.github.io",
  "https://klarweg.in"
];

/* Extra origins for an isolated NON-PRODUCTION deployment only
   (wrangler.nonprod.toml → CORS_EXTRA_ORIGINS; docs/exam/NONPROD-SETUP.md).
   Production never sets it: scripts/predeploy-access-check.mjs refuses a
   production wrangler.toml that does. Exact origins only, comma-separated;
   http is accepted for localhost / 127.0.0.1 alone. Fails closed: one
   invalid entry and the whole value is ignored. The value comes from the
   deployment's env, which is the same for every request an isolate serves,
   so configureCors() at the top of fetch() is safe to keep module-level. */
const EXTRA_ORIGIN_RE = /^(https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*|http:\/\/(localhost|127\.0\.0\.1))(:[0-9]{1,5})?$/;
let extraOrigins = [];

export function parseExtraOrigins(value) {
  if (typeof value !== "string" || value.trim() === "") return [];
  const list = value.split(",").map((s) => s.trim()).filter((s) => s !== "");
  if (!list.length || !list.every((o) => EXTRA_ORIGIN_RE.test(o))) return [];
  return list;
}

export function configureCors(env) {
  extraOrigins = parseExtraOrigins(env && env.CORS_EXTRA_ORIGINS);
}

function isAllowedOrigin(origin) {
  return origin !== null && (ALLOWED_ORIGINS.includes(origin) || extraOrigins.includes(origin));
}

export function corsHeaders(request) {
  const origin = request.headers.get("Origin");

  if (!isAllowedOrigin(origin)) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, X-Klarweg-Anon",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PATCH, OPTIONS",
    "Vary": "Origin"
  };
}

/* CSRF guard. The session cookie has to be SameSite=None (the site and this
   Worker are different sites), so a browser attaches it to a POST sent from
   ANY website — CORS only stops that site reading the reply, not the write
   itself. A browser always sends Origin on such a request, so a
   state-changing request whose Origin is present and is not the Klarweg
   site is refused. Requests with no Origin (server-to-server, curl) are
   not browser CSRF and pass through unchanged. */
export function isForeignOriginWrite(request) {
  const method = request.method.toUpperCase();
  if (method === "GET" || method === "HEAD" || method === "OPTIONS") return false;
  const origin = request.headers.get("Origin");
  return origin !== null && !isAllowedOrigin(origin);
}

export function withCors(response, request) {
  const headers = new Headers(response.headers);

  for (const [key, value] of Object.entries(corsHeaders(request))) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}