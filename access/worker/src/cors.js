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
   production wrangler.toml that does. Exact origins only, comma-separated,
   written exactly as a browser sends them in the Origin header:
     https://<lower-case DNS name>[:port]   (labels 1-63 chars, no edge "-")
     http://localhost[:port] | http://127.0.0.1[:port]
   with port 1-65535, no leading zero and never the scheme's default port
   (a browser omits it, so it could never match). No credentials, path,
   query, fragment, wildcard, IP literal for https, or empty entry. Fails
   closed: one invalid entry and the whole value is ignored. The value comes
   from the deployment's env, which is the same for every request an isolate
   serves, so configureCors() at the top of fetch() is safe to keep
   module-level. */
const EXTRA_ORIGIN_RE = /^(?:(https):\/\/([a-z0-9.-]+)|(http):\/\/(localhost|127\.0\.0\.1))(?::([0-9]+))?$/;
const DNS_LABEL_RE = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
let extraOrigins = [];
let publicSiteOrigins = true;

/* CORS_PUBLIC_SITE_ORIGINS: whether this deployment trusts the public Klarweg
   site origins above. Unset means "allow", which is production's behaviour
   and must stay its default (scripts/predeploy-access-check.mjs refuses a
   production wrangler.toml that sets it). "deny" removes them, for an
   isolated test Worker that must answer only its CORS_EXTRA_ORIGINS (the
   payment sandbox, wrangler.payments-sandbox.toml). Any other value fails
   closed, as "deny". It governs response CORS, preflight, the CSRF write
   guard and the Cashfree return URL alike. */
export function publicSiteOriginsAllowed(env) {
  const v = env ? env.CORS_PUBLIC_SITE_ORIGINS : undefined;
  return v === undefined || v === null || v === "allow";
}

export function isExactOrigin(origin) {
  const m = typeof origin === "string" ? origin.match(EXTRA_ORIGIN_RE) : null;
  if (!m) return false;
  const scheme = m[1] || m[3];
  const port = m[5];
  if (port !== undefined) {
    if (!/^[1-9][0-9]{0,4}$/.test(port) || Number(port) > 65535) return false;
    if (port === (scheme === "https" ? "443" : "80")) return false;
  }
  if (scheme === "https") {
    const labels = m[2].split(".");
    if (m[2].length > 253 || !labels.every((l) => DNS_LABEL_RE.test(l))) return false;
    if (/^[0-9]+$/.test(labels[labels.length - 1])) return false;
  }
  return true;
}

export function parseExtraOrigins(value) {
  if (typeof value !== "string" || value.trim() === "") return [];
  const list = value.split(",").map((s) => s.trim());
  if (!list.every(isExactOrigin)) return [];
  return list;
}

export function configureCors(env) {
  extraOrigins = parseExtraOrigins(env && env.CORS_EXTRA_ORIGINS);
  publicSiteOrigins = publicSiteOriginsAllowed(env);
}

function isAllowedOrigin(origin) {
  return origin !== null && ((publicSiteOrigins && ALLOWED_ORIGINS.includes(origin)) || extraOrigins.includes(origin));
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