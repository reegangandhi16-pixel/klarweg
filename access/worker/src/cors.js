const ALLOWED_ORIGIN = "https://reegangandhi16-pixel.github.io";

export function corsHeaders(request) {
  const origin = request.headers.get("Origin");

  if (origin !== ALLOWED_ORIGIN) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
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
  return origin !== null && origin !== ALLOWED_ORIGIN;
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