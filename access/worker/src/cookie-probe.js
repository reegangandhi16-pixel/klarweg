/* cookie-probe.js — third-party-cookie pre-flight (register §G.1, the interim safeguard until the same-site domain of
   OD-20). The site and this Worker are different sites, so the session cookie (SameSite=None) is a third-party cookie;
   browsers that block those show every signed-in learner as signed out. The page asks:
     POST /auth/cookie-probe   sets kw_probe with exactly the session cookie's attributes (5 minutes, no data)
     GET  /auth/cookie-probe   { received: true|false } — whether the browser sent it back
   so the page can say "your browser blocks the cookies" instead of "please sign in". No user data is read or written. */
const PROBE = "kw_probe";
const reply = (data, headers = {}) => Response.json(data, { headers: { "Cache-Control": "no-store", ...headers } });

export function cookieProbeSet() {
  return reply({ ok: true }, { "Set-Cookie": `${PROBE}=1; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=300` });
}

export function cookieProbeCheck(request) {
  const cookies = (request.headers.get("Cookie") || "").split(";").map((c) => c.trim());
  return reply({ ok: true, received: cookies.includes(`${PROBE}=1`) });
}
