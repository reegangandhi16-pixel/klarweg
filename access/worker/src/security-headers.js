/* security-headers.js — baseline response headers for every Worker answer.

   Applied once, in the fetch() wrapper (index.js), after routing, so no
   handler can forget them. A header a handler already set is never
   overwritten: chapters.js / resources.js choose their own cache and
   referrer policy, and the Cashfree webhook its own cache-control.

     X-Content-Type-Options: nosniff  — JSON is never sniffed as HTML/script
     Cache-Control: no-store          — account data (/auth/me, /progress,
                                        /orders/…) and one-time values
                                        (/auth/google/nonce) are never kept
                                        by a browser, proxy or shared cache
     Referrer-Policy: no-referrer     — nothing about an API URL leaks onward
     X-Frame-Options: DENY            — no Worker response is meant to be framed

   HSTS is deliberately NOT set here: on klarweg.in it would apply to the
   whole site, which is a zone-level decision (Cloudflare SSL/TLS → Edge
   Certificates → HSTS), not one this API should make. */
export const SECURITY_HEADERS = Object.freeze({
  "X-Content-Type-Options": "nosniff",
  "Cache-Control": "no-store",
  "Referrer-Policy": "no-referrer",
  "X-Frame-Options": "DENY"
});

export function withSecurityHeaders(response) {
  if (!response || response.status === 101) return response;
  const out = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!out.headers.has(name)) out.headers.set(name, value);
  }
  return out;
}
