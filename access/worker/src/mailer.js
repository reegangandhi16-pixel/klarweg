/* mailer.js — transactional email through Cloudflare Email Service.

   Uses the Worker's `send_email` binding (wrangler.toml `[[send_email]]
   name = "EMAIL"`), so no new provider, API key or secret is involved: the
   sending domain is onboarded in the Cloudflare dashboard (Compute → Email
   Service → Email Sending) and Cloudflare adds its own SPF/DKIM records.
   Setup and limits: docs/PASSWORD-RESET.md.

   Contract: never throws. Returns { ok: true } or { ok: false, code }.
   Nothing about the message — recipient, subject, body, link — is ever
   logged; only Cloudflare's error code (e.g. "E_SENDER_NOT_VERIFIED"). */

const DEFAULT_FROM = "no-reply@klarweg.in";
const FROM_NAME = "Klarweg";
const SAFE_CODE = /^[A-Z0-9_]{1,64}$/;

export function mailConfigured(env) {
  return !!(env && env.EMAIL && typeof env.EMAIL.send === "function");
}

function fromAddress(env) {
  const v = env && typeof env.MAIL_FROM === "string" ? env.MAIL_FROM.trim() : "";
  /* A bare address only — a display name is added below. */
  return /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(v) ? v : DEFAULT_FROM;
}

export async function sendMail(env, { to, subject, text, html }) {
  if (!mailConfigured(env)) return { ok: false, code: "NOT_CONFIGURED" };

  try {
    await env.EMAIL.send({
      to,
      from: { email: fromAddress(env), name: FROM_NAME },
      subject,
      text,
      html,
      headers: { "Auto-Submitted": "auto-generated" }
    });
    return { ok: true };
  } catch (error) {
    const code = error && typeof error.code === "string" && SAFE_CODE.test(error.code)
      ? error.code
      : (error && error.name === "TypeError" ? "TYPE_ERROR" : "SEND_FAILED");
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "mail_failed", code }));
    return { ok: false, code };
  }
}
