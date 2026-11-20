/* Transactional mail transport for Klarweg password resets.
   MAIL_PROVIDER="resend" uses the Resend Free HTTPS API on Workers Free,
   with RESEND_API_KEY stored only as a Worker secret. The original Cloudflare
   send_email binding remains supported as an explicit alternative.
   Never log recipients, bodies, links, API keys, or provider response bodies.
   Setup: docs/PASSWORD-RESET.md. */

const DEFAULT_FROM = "no-reply@klarweg.in";
const FROM_NAME = "Klarweg";
const SAFE_CODE = /^[A-Z0-9_]{1,64}$/;

export function mailConfigured(env) {
  if (!env) return false;
  if (env.MAIL_PROVIDER === "resend") {
    return typeof env.RESEND_API_KEY === "string" && env.RESEND_API_KEY.length > 0;
  }
  return !!(env.EMAIL && typeof env.EMAIL.send === "function");
}

function fromAddress(env) {
  const v = env && typeof env.MAIL_FROM === "string" ? env.MAIL_FROM.trim() : "";
  return /^[^\\s@<>"]+@[^\\s@<>"]+\\.[a-z]{2,}$/i.test(v) ? v : DEFAULT_FROM;
}

function logFailure(code) {
  console.log(JSON.stringify({ svc: "klarweg-access", evt: "mail_failed", code }));
}

export async function sendMail(env, { to, subject, text, html }) {
  if (!mailConfigured(env)) return { ok: false, code: "NOT_CONFIGURED" };

  try {
    if (env.MAIL_PROVIDER === "resend") {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + env.RESEND_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: FROM_NAME + " <" + fromAddress(env) + ">",
          to: [to],
          subject,
          text,
          html,
          headers: { "Auto-Submitted": "auto-generated" }
        })
      });
      if (!response.ok) {
        const code = "RESEND_HTTP_" + response.status;
        logFailure(code);
        return { ok: false, code };
      }
      return { ok: true };
    }

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
    logFailure(code);
    return { ok: false, code };
  }
}
