import { corsHeaders, withCors, isForeignOriginWrite } from "./cors.js";
import { signup, login, googleLogin, googleNonce, googleLoginRedirect, logout, me, updatePhone } from "./auth-routes.js";
import { createOrder, getOrder } from "./orders.js";
import { cashfreeWebhook } from "./webhooks-cashfree.js";
import { aiStatus, aiRequest } from "./ai.js";
import { speechStatus, speechTranscribe, speechTaskCheck } from "./speech.js";
import { listResources, createResourceLink, streamResource, RESOURCE_ROUTES } from "./resources.js";
import { examProxy } from "./exam-proxy.js";
import {
  listSavedWords,
  createSavedWord,
  getSavedWordCounts,
  deleteSavedWord,
  reviewSavedWord
} from "./saved-words.js";
function json(data, status = 200) {
  return Response.json(data, { status });
}

function handleOptions(request) {
  const headers = corsHeaders(request);

  if (!headers["Access-Control-Allow-Origin"]) {
    return new Response(null, { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers
  });
}

export default {
  /* Defence in depth: an unexpected exception (a D1 error, a bug) becomes a
     JSON 500 with the normal CORS headers instead of Cloudflare's raw error
     page, which the browser could only report as a CORS/network failure.
     It never replaces fixing the cause. Logs carry the error class only. */
  async fetch(request, env, ctx) {
    try {
      return await route(request, env, ctx);
    } catch (err) {
      let path = "";
      try { path = new URL(request.url).pathname; } catch {}
      console.log(JSON.stringify({ svc: "klarweg-access", evt: "unhandled", path, error: (err && err.name) || "Error" }));
      return withCors(json({ ok: false, error: "server_error" }, 500), request);
    }
  }
};

async function route(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return handleOptions(request);
    }

    /* Refuse cross-site writes (see isForeignOriginWrite). Exempt: the
       Cashfree webhook (server-to-server, HMAC-verified) and Google's
       redirect sign-in (a top-level POST from accounts.google.com that
       carries its own g_csrf_token check). */
    if (
      isForeignOriginWrite(request) &&
      url.pathname !== "/webhooks/cashfree" &&
      url.pathname !== "/auth/google/redirect"
    ) {
      return json({ ok: false, error: "Cross-site request refused." }, 403);
    }

    if (request.method === "POST" && url.pathname === "/orders") {
      return withCors(await createOrder(request, env), request);
    }

    const orderMatch = url.pathname.match(/^\/orders\/(ord_[0-9a-f-]{36})$/);
    if (request.method === "GET" && orderMatch) {
      return withCors(await getOrder(request, env, orderMatch[1]), request);
    }

    if (request.method === "POST" && url.pathname === "/auth/signup") {
      return withCors(await signup(request, env, ctx), request);
    }

    if (request.method === "POST" && url.pathname === "/auth/login") {
      return withCors(await login(request, env, ctx), request);
    }

    if (request.method === "POST" && url.pathname === "/auth/google") {
      return withCors(await googleLogin(request, env), request);
    }

    if (request.method === "GET" && url.pathname === "/auth/google/nonce") {
      return withCors(await googleNonce(request, env), request);
    }

    /* Google POSTs here directly as a top-level, cross-origin,
       form-encoded navigation (ux_mode: 'redirect') — not a fetch()
       target, so CORS handling does not apply and must not be added. */
    if (request.method === "POST" && url.pathname === "/auth/google/redirect") {
      return googleLoginRedirect(request, env);
    }

    if (request.method === "POST" && url.pathname === "/auth/logout") {
      return withCors(await logout(request, env), request);
    }
if (request.method === "GET" && url.pathname === "/auth/me") {
  return withCors(await me(request, env), request);
}

    if (request.method === "POST" && url.pathname === "/auth/phone") {
      return withCors(await updatePhone(request, env), request);
    }

    if (request.method === "GET" && url.pathname === "/saved-words") {
      return withCors(await listSavedWords(request, env), request);
    }

    if (request.method === "POST" && url.pathname === "/saved-words") {
      return withCors(await createSavedWord(request, env), request);
    }

    if (request.method === "GET" && url.pathname === "/saved-words/counts") {
      return withCors(await getSavedWordCounts(request, env), request);
    }

    const savedWordMatch = url.pathname.match(/^\/saved-words\/(sw_[0-9a-f-]{36})$/);
    if (request.method === "DELETE" && savedWordMatch) {
      return withCors(await deleteSavedWord(request, env, savedWordMatch[1]), request);
    }

    const savedWordReviewMatch = url.pathname.match(/^\/saved-words\/(sw_[0-9a-f-]{36})\/review$/);
    if (request.method === "PATCH" && savedWordReviewMatch) {
      return withCors(await reviewSavedWord(request, env, savedWordReviewMatch[1]), request);
    }

    /* Klarweg AI — auth, entitlement, quotas and the kill switch are
       enforced in ai.js before anything reaches the private
       klarweg-tutor Worker (service binding env.TUTOR). */
    if (request.method === "GET" && url.pathname === "/ai/status") {
      return withCors(await aiStatus(request, env), request);
    }

    const aiMatch = url.pathname.match(/^\/ai\/([a-z_]{3,32})$/);
    if (request.method === "POST" && aiMatch) {
      return withCors(await aiRequest(request, env, aiMatch[1], ctx), request);
    }

    /* Record & Check speech transcription (speech.js): session, chapter
       scope, entitlement, the per-task daily cap, size/duration limits and
       quotas are all enforced there before the audio reaches klarweg-tutor.
       Off unless SPEECH_MODE is "allowlist" or "entitled". /speech/task-check
       counts browser-recognition checks against the same per-task cap. */
    if (request.method === "GET" && url.pathname === "/speech/status") {
      return withCors(await speechStatus(request, env), request);
    }

    if (request.method === "POST" && url.pathname === "/speech/transcribe") {
      return withCors(await speechTranscribe(request, env, ctx), request);
    }

    if (request.method === "POST" && url.pathname === "/speech/task-check") {
      return withCors(await speechTaskCheck(request, env), request);
    }

    /* Chapter resource PDFs — private R2, signed short-lived links
       (resources.js). The file route is reached by a top-level tab
       navigation, so it carries no CORS headers and needs no cookie. */
    const resFile = url.pathname.match(RESOURCE_ROUTES.file);
    if (request.method === "GET" && resFile) {
      return streamResource(request, env, resFile[1], resFile[2]);
    }
    const resLink = url.pathname.match(RESOURCE_ROUTES.link);
    if (request.method === "POST" && resLink) {
      return withCors(await createResourceLink(request, env, resLink[1], resLink[2]), request);
    }
    const resList = url.pathname.match(RESOURCE_ROUTES.list);
    if (request.method === "GET" && resList) {
      return withCors(await listResources(request, env, resList[1]), request);
    }

    if (request.method === "GET" && url.pathname === "/") {
      return withCors(
        json({
          ok: true,
          service: "klarweg-access",
          environment: env.CASHFREE_ENV || "sandbox"
        }),
        request
      );
    }

    if (request.method === "POST" && url.pathname === "/webhooks/cashfree") {
      return cashfreeWebhook(request, env);
    }

    /* Klarweg exam (exam-proxy.js) — OFF unless EXAM_ROUTES = "on" and the
       EXAM service binding exists; otherwise /exam/* falls through to 404. */
    const examResponse = await examProxy(request, env, url);
    if (examResponse) return examResponse;

    return withCors(
      json(
        { ok: false, error: "Not found" },
        404
      ),
      request
    );
}