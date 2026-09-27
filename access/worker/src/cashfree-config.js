/* ============================================================
   Klarweg Access Worker · CASHFREE CONFIGURATION (single source)
   ------------------------------------------------------------
   orders.js and webhooks-cashfree.js must agree on sandbox vs
   production, or an order is created in one Cashfree environment
   and verified against the other. Both read it from here.

   Safety interlock: Cashfree sandbox app ids start with "TEST";
   live app ids do not. A mismatch between CASHFREE_ENV and the app
   id (e.g. a sandbox [vars] block deployed over a live setup, or a
   live id left in sandbox mode) makes checkout refuse to start
   instead of silently charging against the wrong environment.
   ============================================================ */

export function cashfreeMode(env) {
  return env.CASHFREE_ENV === "production" ? "production" : "sandbox";
}

export function cashfreeBaseUrl(env) {
  return cashfreeMode(env) === "production" ? "https://api.cashfree.com/pg" : "https://sandbox.cashfree.com/pg";
}

/* Returns null when the configuration is coherent, else a reason. */
export function cashfreeConfigProblem(env) {
  const declared = env.CASHFREE_ENV;
  if (declared !== "production" && declared !== "sandbox") return "CASHFREE_ENV must be 'production' or 'sandbox'";
  const appId = String(env.CASHFREE_APP_ID || "");
  if (!appId) return "CASHFREE_APP_ID is not set";
  if (!env.CASHFREE_SECRET_KEY) return "CASHFREE_SECRET_KEY is not set";
  const isTestId = /^TEST/i.test(appId);
  if (declared === "production" && isTestId) return "production mode with a sandbox (TEST) app id";
  if (declared === "sandbox" && !isTestId) return "sandbox mode with a live app id";
  return null;
}

/* Where Cashfree sends the learner back after payment.
   During the klarweg.in migration both origins are live; the
   learner returns to the site they started on. */
const DEFAULT_SITE_BASE_URL = "https://reegangandhi16-pixel.github.io/klarweg";
const SITE_BASE_BY_ORIGIN = {
  "https://klarweg.in": "https://klarweg.in",
  "https://reegangandhi16-pixel.github.io": DEFAULT_SITE_BASE_URL
};

export function siteBaseUrl(env, request) {
  const origin = request && request.headers ? request.headers.get("Origin") : null;
  if (origin && SITE_BASE_BY_ORIGIN[origin]) return SITE_BASE_BY_ORIGIN[origin];
  return env.SITE_BASE_URL || DEFAULT_SITE_BASE_URL;
}

/* Server-to-server webhook target (this Worker). Configurable so a
   custom API domain can be adopted without a code change. */
export function notifyUrl(env) {
  return env.CASHFREE_NOTIFY_URL || "https://klarweg-access.klarweg-issue-reports-2026.workers.dev/webhooks/cashfree";
}

/* Cashfree error bodies are usually JSON but not guaranteed. */
export async function readJson(res) {
  try { return await res.json(); } catch { return null; }
}
