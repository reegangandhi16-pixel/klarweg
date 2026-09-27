import { getProduct } from "./products.js";
import { isValidPhone } from "./auth.js";
import { grantProduct } from "./entitlements.js";
import {
  cashfreeMode,
  cashfreeBaseUrl,
  cashfreeConfigProblem,
  siteBaseUrl,
  notifyUrl,
  readJson
} from "./cashfree-config.js";
import {
  getSessionToken,
  findSessionUser
} from "./sessions.js";

/* Sandbox/production selection, the base URLs, the return and notify
   URLs and the TEST-vs-live app-id interlock all live in
   cashfree-config.js — shared with webhooks-cashfree.js so the two can
   never disagree about which Cashfree environment an order belongs to. */
const CASHFREE_API_VERSION = "2023-08-01";

function json(data, status = 200) {
  return Response.json(data, { status });
}

function createOrderId() {
  return `ord_${crypto.randomUUID()}`;
}

function rupeesFromPaise(amountPaise) {
  return amountPaise / 100;
}

export async function createOrder(request, env) {
  const token = getSessionToken(request);
  const user = await findSessionUser(env.DB, token);

  if (!user) {
    return json(
      { ok: false, error: "Authentication required." },
      401
    );
  }

  const configProblem = cashfreeConfigProblem(env);

  if (configProblem) {
    console.error("orders: Cashfree configuration refused:", configProblem);
    return json(
      { ok: false, error: "Payments are temporarily unavailable. Please try again later." },
      503
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json(
      { ok: false, error: "Invalid JSON body." },
      400
    );
  }

  const productId =
    typeof body?.product_id === "string"
      ? body.product_id.trim().toUpperCase()
      : "";

  const product = getProduct(productId);

  if (!product) {
    return json(
      { ok: false, error: "Invalid product." },
      400
    );
  }

  const orderId = createOrderId();
  const now = Math.floor(Date.now() / 1000);
  const amount = rupeesFromPaise(product.amountPaise);

  /* An expired single-level entitlement (expires_at in the past) must
     not block re-purchasing that same level - only a still-active
     entitlement (NULL expires_at = grandfathered/Lifetime-granted, or
     a future expires_at) counts as "already owned" here. */
  const existingEntitlement = await env.DB
    .prepare(
      `SELECT product_id
       FROM user_entitlements
       WHERE user_id = ?1
         AND product_id = ?2
         AND (expires_at IS NULL OR expires_at > ?3)
       LIMIT 1`
    )
    .bind(user.id, product.id, now)
    .first();

  if (existingEntitlement) {
    return json(
      {
        ok: false,
        error: "This product is already owned."
      },
      409
    );
  }

  /* Cashfree's customer_phone is a required field on Create Order
     (verified against the official API schema). Klarweg has no fake
     fallback for it — if the authenticated user has not saved a valid
     phone yet (see POST /auth/phone), the order cannot be created. */
  if (!isValidPhone(user.phone)) {
    return json(
      {
        ok: false,
        error: "A valid phone number is required before checkout. Please add one to your account."
      },
      400
    );
  }

  const cashfreeResponse = await fetch(
    `${cashfreeBaseUrl(env)}/orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": env.CASHFREE_APP_ID,
        "x-client-secret": env.CASHFREE_SECRET_KEY,
        "x-idempotency-key": crypto.randomUUID()
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: user.id,
          customer_email: user.email,
          customer_phone: user.phone,
          customer_name: user.name || "Klarweg Customer"
        },
        order_note: product.name,
        cart_details: {
          cart_items: [
            {
              item_id: product.id,
              item_name: product.name,
              item_quantity: 1,
              item_original_unit_price: amount,
              item_currency: "INR"
            }
          ]
        },
        order_meta: {
          // Cashfree redirects here after payment and appends the order
          // id itself as the query parameter "order_id" (per Cashfree's
          // Web Checkout docs). The literal "{order_id}" placeholder
          // must stay a plain string, not a template interpolation of
          // the orderId variable above.
          return_url: siteBaseUrl(env, request) + "/account/index.html?order_id={order_id}",
          // Server-to-server webhook target. Confirmed required by this
          // Cashfree sandbox account's own dashboard (order_meta-driven,
          // not a static dashboard URL) — without this field Cashfree
          // never calls webhooks-cashfree.js and grantProduct() is
          // never reached.
          notify_url: notifyUrl(env)
        }
      })
    }
  );

  const cashfreeData = await readJson(cashfreeResponse);

  if (!cashfreeResponse.ok || !cashfreeData) {
    console.error("orders: Cashfree create failed", cashfreeResponse.status);
    return json(
      {
        ok: false,
        error: "Unable to create payment order."
      },
      502
    );
  }

  const returnedAmountPaise = Math.round(
    Number(cashfreeData.order_amount) * 100
  );

  if (
    cashfreeData.order_id !== orderId ||
    returnedAmountPaise !== product.amountPaise ||
    cashfreeData.order_currency !== "INR"
  ) {
    return json(
      {
        ok: false,
        error: "Cashfree order validation failed."
      },
      502
    );
  }

  if (
    typeof cashfreeData.payment_session_id !== "string" ||
    cashfreeData.payment_session_id.length === 0
  ) {
    return json(
      {
        ok: false,
        error: "Cashfree did not return a payment session."
      },
      502
    );
  }

  await env.DB
    .prepare(
      `INSERT INTO orders (
        id,
        user_id,
        cashfree_order_id,
        amount_paise,
        currency,
        status,
        payment_id,
        created_at,
        updated_at,
        product_id
      ) VALUES (?1, ?2, ?3, ?4, 'INR', 'created', NULL, ?5, ?5, ?6)`
    )
    .bind(
      orderId,
      user.id,
      orderId,
      product.amountPaise,
      now,
      product.id
    )
    .run();

  return json({
    ok: true,
    order: {
      id: orderId,
      productId: product.id,
      amountPaise: product.amountPaise,
      currency: "INR",
      status: "created"
    },
    paymentSessionId: cashfreeData.payment_session_id,
    /* The browser SDK must run in the same Cashfree environment the
       order was created in. The Worker's configuration is the only
       authority — kw-checkout.js never guesses. */
    checkout: { mode: cashfreeMode(env) }
  });
}

export async function getOrder(request, env, orderId) {
  const token = getSessionToken(request);
  const user = await findSessionUser(env.DB, token);

  if (!user) {
    return json(
      { ok: false, error: "Authentication required." },
      401
    );
  }

  if (cashfreeConfigProblem(env)) {
    return json(
      { ok: false, error: "Payment verification is temporarily unavailable." },
      503
    );
  }

  if (!/^ord_[0-9a-f-]{36}$/.test(orderId)) {
    return json(
      { ok: false, error: "Invalid order ID." },
      400
    );
  }

  const localOrder = await env.DB
    .prepare(
      `SELECT id, user_id, cashfree_order_id, amount_paise, currency,
              status, payment_id, product_id
       FROM orders
       WHERE id = ?1 AND user_id = ?2
       LIMIT 1`
    )
    .bind(orderId, user.id)
    .first();

  if (!localOrder) {
    return json(
      { ok: false, error: "Order not found." },
      404
    );
  }

  const cashfreeResponse = await fetch(
    `${cashfreeBaseUrl(env)}/orders/${encodeURIComponent(localOrder.cashfree_order_id)}`,
    {
      method: "GET",
      headers: {
        "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": env.CASHFREE_APP_ID,
        "x-client-secret": env.CASHFREE_SECRET_KEY,
        "x-idempotency-key": crypto.randomUUID()
      }
    }
  );

  const cashfreeData = await readJson(cashfreeResponse);

  if (!cashfreeResponse.ok || !cashfreeData) {
    return json(
      { ok: false, error: "Unable to verify payment order." },
      502
    );
  }

  const returnedAmountPaise = Math.round(
    Number(cashfreeData.order_amount) * 100
  );

  if (
    cashfreeData.order_id !== localOrder.cashfree_order_id ||
    returnedAmountPaise !== localOrder.amount_paise ||
    cashfreeData.order_currency !== localOrder.currency
  ) {
    return json(
      { ok: false, error: "Cashfree order validation failed." },
      502
    );
  }

  const cashfreeStatus =
    typeof cashfreeData.order_status === "string"
      ? cashfreeData.order_status.toLowerCase()
      : "unknown";

  /* Reconciliation fallback. The webhook is the normal path to a grant,
     but it can be lost (a network blip, a delivery failure, or any other
     transient reason — this exact class of failure has already happened
     once in production). Cashfree's own server response — already
     re-verified above against order id, amount and currency — is the
     same authority the webhook itself trusts, so a learner's own poll of
     their order can safely self-heal a lost webhook without ever
     trusting client input. Same "grant before flip" ordering and the
     same idempotent grantProduct() as the webhook path, so this is safe
     to run from concurrent polls or after the webhook eventually does
     arrive too. */
  if (cashfreeStatus === "paid" && localOrder.status !== "paid") {
    let paymentId = null;

    try {
      const paymentsResponse = await fetch(
        `${cashfreeBaseUrl(env)}/orders/${encodeURIComponent(localOrder.cashfree_order_id)}/payments`,
        {
          method: "GET",
          headers: {
            "x-api-version": CASHFREE_API_VERSION,
            "x-client-id": env.CASHFREE_APP_ID,
            "x-client-secret": env.CASHFREE_SECRET_KEY,
            "x-idempotency-key": crypto.randomUUID()
          }
        }
      );

      if (paymentsResponse.ok) {
        const payments = await paymentsResponse.json();
        const successfulPayment = Array.isArray(payments)
          ? payments.find(
              (p) => String(p?.payment_status || "").toUpperCase() === "SUCCESS"
            )
          : null;

        if (successfulPayment && successfulPayment.cf_payment_id) {
          paymentId = String(successfulPayment.cf_payment_id);
        }
      }
    } catch {
      // The payment id is an audit convenience, not required for the
      // grant itself — reconciliation proceeds without it.
    }

    await grantProduct(env.DB, localOrder.user_id, localOrder.product_id, localOrder.id);

    await env.DB
      .prepare(
        `UPDATE orders SET status = 'paid', payment_id = ?1, updated_at = ?2 WHERE id = ?3`
      )
      .bind(paymentId, Math.floor(Date.now() / 1000), localOrder.id)
      .run();

    localOrder.status = "paid";
    localOrder.payment_id = paymentId;
  }

  /* A checkout the learner abandoned eventually expires at Cashfree.
     Mirror that terminal state locally (only from 'created', never over
     'paid' or a 'review' flag) so the account shows the truth. */
  if (
    (cashfreeStatus === "expired" || cashfreeStatus === "terminated") &&
    localOrder.status === "created"
  ) {
    await env.DB
      .prepare(
        `UPDATE orders SET status = 'expired', updated_at = ?1 WHERE id = ?2 AND status = 'created'`
      )
      .bind(Math.floor(Date.now() / 1000), localOrder.id)
      .run();

    localOrder.status = "expired";
  }

  return json({
    ok: true,
    order: {
      id: localOrder.id,
      productId: localOrder.product_id,
      amountPaise: localOrder.amount_paise,
      currency: localOrder.currency,
      status: localOrder.status,
      cashfreeStatus,
      paymentId: localOrder.payment_id
    }
  });
}
