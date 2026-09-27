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
  /* Current-format Cashfree secret keys name their environment
     ("cfsk_ma_test_…" / "cfsk_ma_prod_…"). When the key carries that
     marker it must agree with the mode; older-format keys carry none and
     are left to the app-id check above. */
  const secretEnv = (String(env.CASHFREE_SECRET_KEY).match(/^cfsk_ma_(test|prod)_/) || [])[1];
  if (secretEnv === "test" && declared === "production") return "production mode with a sandbox (test) secret key";
  if (secretEnv === "prod" && declared === "sandbox") return "sandbox mode with a production secret key";
  if (env.CASHFREE_NOTIFY_URL && !/^https:\/\/[^/]+\/webhooks\/cashfree$/.test(env.CASHFREE_NOTIFY_URL)) return "CASHFREE_NOTIFY_URL must be https://<host>/webhooks/cashfree";
  if (env.SITE_BASE_URL && !/^https:\/\/[^/]+(\/[a-z0-9-]+)?$/i.test(env.SITE_BASE_URL)) return "SITE_BASE_URL must be an https origin (optionally with one path segment), no trailing slash";
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
