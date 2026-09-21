/* ============================================================
   Klarweg Access Worker · CASHFREE WEBHOOK
   ------------------------------------------------------------
   ADDITIVE MODULE. Drop into the existing access/worker/src/ and
   wire one route. It does not replace auth, sessions, products,
   entitlements or orders — it imports what already exists.

   Route:  POST /webhooks/cashfree

   Written against the DEPLOYED schema:
     orders(id, user_id, cashfree_order_id, amount_paise, currency,
            status, payment_id, created_at, updated_at, product_id)
     user_entitlements(user_id, product_id, source_order_id, granted_at)
     entitlements(user_id, has_full_access, granted_at, source, updated_at)

   Trust model — nothing here is negotiable:
     · The raw body is read and HMAC-verified BEFORE any JSON parse.
     · A verified webhook only names an order. It is never the source
       of truth for payment: the order is re-fetched from Cashfree's
       own API and the amount, currency, order id and PAID status are
       all re-checked server-side.
     · Entitlement is granted BEFORE the order is marked paid, so a
       failure can only ever leave an order un-flipped (which retries
       fix) and never a paid order without access.
     · grantProduct() is idempotent, so retries and duplicate
       deliveries grant nothing twice.
   ============================================================ */

/* Single coupling to the existing codebase. Signature verified against
   access/worker/src/entitlements.js:
     grantProduct(db, userId, productId, orderId) → idempotent, and it
   validates the product id itself, so no catalog lookup is needed here. */
import { grantProduct } from './entitlements.js';

const REPLAY_WINDOW_SECONDS = 300;          // 5 minutes
const API_VERSION = '2023-08-01';
/* Every timestamp in this database is in seconds. */
const nowSeconds = () => Math.floor(Date.now() / 1000);

const apiBase = env =>
  env.CASHFREE_ENV === 'production' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });

/* Cashfree signs `timestamp + rawBody` with the client secret unless a
   dedicated webhook secret has been issued. */
const webhookSecret = env => env.CASHFREE_WEBHOOK_SECRET || env.CASHFREE_SECRET_KEY;

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function computeSignature(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return btoa(String.fromCharCode(...new Uint8Array(mac)));
}

function freshTimestamp(timestamp) {
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || ts <= 0) return false;
  // Cashfree sends seconds; tolerate milliseconds defensively.
  const seconds = ts > 1e12 ? Math.floor(ts / 1000) : ts;
  const now = Math.floor(Date.now() / 1000);
  return Math.abs(now - seconds) <= REPLAY_WINDOW_SECONDS;
}

export async function cashfreeWebhook(request, env) {
  /* 1–2. Raw body and headers, before any parsing. */
  const rawBody = await request.text();
  const timestamp = request.headers.get('x-webhook-timestamp') || '';
  const signature = request.headers.get('x-webhook-signature') || '';
  const secret = webhookSecret(env);

  if (!secret) {
    console.error('cashfree-webhook: no signing secret configured');
    return jsonResponse({ ok: false, error: 'not-configured' }, 503);
  }

  /* 3. Replay window. */
  if (!freshTimestamp(timestamp)) {
    return jsonResponse({ ok: false, error: 'stale-timestamp' }, 401);
  }

  /* 4–7. HMAC-SHA256 over timestamp + rawBody, base64, constant-time. */
  const expected = await computeSignature(secret, timestamp + rawBody);
  if (!timingSafeEqual(expected, signature)) {
    return jsonResponse({ ok: false, error: 'bad-signature' }, 401);
  }

  /* 8. Only now is the body trusted enough to parse. */
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, error: 'bad-json' }, 400);
  }

  /* 9. Event routing. Anything else is acknowledged and ignored, so
        Cashfree does not retry events we do not act on. */
  const type = String(payload.type || payload.event || '');
  if (type !== 'PAYMENT_SUCCESS_WEBHOOK') {
    return jsonResponse({ ok: true, ignored: true, type });
  }

  /* 10. Claimed facts. Used only to identify the order. */
  const claimedOrderId = payload?.data?.order?.order_id;
  const claimedPaymentId = payload?.data?.payment?.cf_payment_id;
  const claimedStatus = String(payload?.data?.payment?.payment_status || '').toUpperCase();
  if (!claimedOrderId) return jsonResponse({ ok: true, ignored: true, reason: 'no-order-id' });
  if (claimedStatus !== 'SUCCESS') {
    return jsonResponse({ ok: true, ignored: true, reason: 'payment-not-success' });
  }

  /* 11. Local order, matched on the Cashfree order id we stored. */
  const order = await env.DB.prepare(
    `SELECT id, user_id, product_id, cashfree_order_id, amount_paise, currency, status
       FROM orders
      WHERE cashfree_order_id = ?1`
  ).bind(String(claimedOrderId)).first();

  if (!order) return jsonResponse({ ok: true, ignored: true, reason: 'unknown-order' });

  /* 15. Already settled — idempotent acknowledgement, no second grant. */
  if (String(order.status).toLowerCase() === 'paid') {
    return jsonResponse({ ok: true, status: 'paid', duplicate: true });
  }

  /* 12. Re-fetch from Cashfree. This, not the webhook body, is the
         authority on whether money moved. */
  let remote;
  try {
    const res = await fetch(`${apiBase(env)}/orders/${encodeURIComponent(order.cashfree_order_id)}`, {
      headers: {
        'x-api-version': API_VERSION,
        'x-client-id': env.CASHFREE_APP_ID,
        'x-client-secret': env.CASHFREE_SECRET_KEY,
        'accept': 'application/json'
      }
    });
    if (!res.ok) {
      // Transient upstream problem: 500 so Cashfree retries.
      console.error('cashfree-webhook: order fetch failed', res.status);
      return jsonResponse({ ok: false, error: 'verification-unavailable' }, 500);
    }
    remote = await res.json();
  } catch (e) {
    console.error('cashfree-webhook: order fetch threw', e && e.message);
    return jsonResponse({ ok: false, error: 'verification-unavailable' }, 500);
  }

  /* 13. Every field re-checked against our own record. */
  const remoteOrderId = String(remote.order_id || '');
  const remoteStatus = String(remote.order_status || '').toUpperCase();
  const remotePaise = Math.round(Number(remote.order_amount || 0) * 100);
  const remoteCurrency = String(remote.order_currency || '').toUpperCase();
  const localCurrency = String(order.currency || 'INR').toUpperCase();

  const mismatch =
    remoteOrderId !== String(order.cashfree_order_id) ? 'order-id'
    : remoteStatus !== 'PAID' ? 'order-not-paid'
    : remotePaise !== Number(order.amount_paise) ? 'amount'
    : remoteCurrency !== localCurrency ? 'currency'
    : null;

  if (mismatch) {
    console.error('cashfree-webhook: verification mismatch', order.id, mismatch);
    await env.DB.prepare(
      'UPDATE orders SET status = ?1, updated_at = ?2 WHERE id = ?3'
    ).bind(remoteStatus === 'PAID' ? 'review' : 'failed', nowSeconds(), order.id).run();
    return jsonResponse({ ok: false, error: 'verification-failed', reason: mismatch }, 400);
  }

  /* 14. Grant FIRST, then flip the order. If the grant throws, the
         order stays unpaid and the retry re-runs the whole path; the
         learner is never left paid-without-access. grantProduct()
         whitelists the product id and throws on anything unexpected. */
  await grantProduct(env.DB, order.user_id, order.product_id, order.id);

  await env.DB.prepare(
    `UPDATE orders
        SET status = 'paid', payment_id = ?1, updated_at = ?2
      WHERE id = ?3`
  ).bind(claimedPaymentId ? String(claimedPaymentId) : null, nowSeconds(), order.id).run();

  return jsonResponse({ ok: true, status: 'paid', order_id: order.id });
}

export default cashfreeWebhook;
