import { corsHeaders, withCors } from "./cors.js";
import { signup, login, googleLogin, googleNonce, googleLoginRedirect, logout, me, updatePhone } from "./auth-routes.js";
import { createOrder, getOrder } from "./orders.js";
import { cashfreeWebhook } from "./webhooks-cashfree.js";
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
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return handleOptions(request);
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

    return withCors(
      json(
        { ok: false, error: "Not found" },
        404
      ),
      request
    );
  }
};