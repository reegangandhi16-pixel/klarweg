/* Same-origin API host. On the Klarweg site's own domain this Worker is
   reached through the Cloudflare route klarweg.in/api/*, so the session
   cookie is first-party there — iOS browsers (WebKit ITP) never send the
   cross-site workers.dev cookie back. Every other host (workers.dev) keeps
   the original bare paths and cross-site cookie unchanged. */
export const SAME_ORIGIN_HOST = "klarweg.in";
export const API_PREFIX = "/api";

export function isSameOriginApi(request) {
  try {
    return new URL(request.url).hostname === SAME_ORIGIN_HOST;
  } catch {
    return false;
  }
}

/* The path prefix this request was reached under: "/api" on klarweg.in,
   "" on workers.dev. Used for URLs the Worker hands back to the browser. */
export function apiPrefix(request) {
  return isSameOriginApi(request) ? API_PREFIX : "";
}
