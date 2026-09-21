import { corsHeaders, withCors } from "./cors.js";
import { signup, login, logout, me } from "./auth-routes.js";
import { createOrder, getOrder } from "./orders.js";
import { cashfreeWebhook } from "./webhooks-cashfree.js";
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
  async fetch(request, env) {
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
      return withCors(await signup(request, env), request);
    }

    if (request.method === "POST" && url.pathname === "/auth/login") {
      return withCors(await login(request, env), request);
    }

    if (request.method === "POST" && url.pathname === "/auth/logout") {
      return withCors(await logout(request, env), request);
    }
if (request.method === "GET" && url.pathname === "/auth/me") {
  return withCors(await me(request, env), request);
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