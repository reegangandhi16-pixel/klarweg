/* The Klarweg site's origins, matched exactly. During the klarweg.in
   migration both the current GitHub Pages origin and the new custom
   domain are accepted; github.io is removed once the move is complete. */
const ALLOWED_ORIGINS = [
  "https://reegangandhi16-pixel.github.io",
  "https://klarweg.in"
];

function isAllowedOrigin(origin) {
  return origin !== null && ALLOWED_ORIGINS.includes(origin);
}

export function corsHeaders(request) {
  const origin = request.headers.get("Origin");

  if (!isAllowedOrigin(origin)) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
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