/* ============================================================
   KLARWEG · CHECKOUT ADAPTER + PAYMENT UI (kw-checkout.js)
   ------------------------------------------------------------
   One isolated payment adapter. Every "buy" button on the site
   ends up here, and this is the only file that knows Cashfree
   exists at all.

   Endpoints (Access Worker · klarweg-access):
     POST /orders            { product_id }  → order + payment_session_id
     GET  /orders/:id                        → server-verified order status

   RESPONSE SHAPES
     The deployed Worker's exact JSON keys were not available when this
     adapter was written, so readSession()/readStatus() below accept
     every plausible nesting rather than assuming one. If the Worker's
     shape is confirmed later, these two readers are the only place
     that needs narrowing — nothing else in the site reads the API.

   WHAT THIS FILE MAY NOT DO
     · send an amount — it sends a product id; the Worker prices it
     · decide that a payment succeeded — Cashfree returning to the
       browser is not proof. Success is shown only after the Worker
       reports status 'paid' for that order and /auth/me reflects
       the new entitlement.
     · hold any Cashfree credential. The app id lives in Worker
       vars, the secret in a Cloudflare Worker secret.

   Markup contract — anywhere on the site:
     <button data-kw-buy="B2">Unlock B2</button>
     <button data-kw-buy="LIFETIME">Get Lifetime Access</button>
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWCheckout) return;

  var SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';
  var POLL_MS = 2500;
  var POLL_TRIES = 24;              // ≈ 60s of server-side reconciliation
  var doc = document;

  function auth() { return global.KWAuth || null; }
  function products() { return global.KWProducts || null; }

  function prefixToRoot() {
    // Chapter pages and /account/ live one directory down.
    var p = global.location.pathname;
    return /\/(chapter|account|report|admin)\//.test(p) ? '../' : '';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* ============================================================
     STYLES — Klarweg surface tokens, with literal fallbacks so the
     dialog looks right on pages that do not define the variables.
     ============================================================ */
  var CSS = [
    '.kwco-scrim{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(14,14,16,.42);opacity:0;transition:opacity 240ms cubic-bezier(.16,1,.3,1)}',
    '.kwco-scrim.in{opacity:1}',
    '.kwco-card{width:100%;max-width:440px;max-height:calc(100vh - 48px);overflow:auto;box-sizing:border-box;background:var(--bg-surface,#FFFFFF);border:1px solid rgba(14,14,16,.08);border-radius:16px;box-shadow:0 24px 64px rgba(14,14,16,.18);padding:32px;transform:translateY(8px);transition:transform 240ms cubic-bezier(.16,1,.3,1);font-family:var(--font-ui,Inter,system-ui,sans-serif)}',
    '.kwco-scrim.in .kwco-card{transform:none}',
    '.kwco-eyebrow{font-family:var(--font-mono,"JetBrains Mono",ui-monospace,monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-tertiary,#9A9AA0);margin:0 0 14px}',
    '.kwco-title{font-family:var(--font-display,Fraunces,Georgia,serif);font-weight:500;font-size:26px;line-height:1.18;letter-spacing:-.02em;color:var(--ink-primary,#0E0E10);margin:0}',
    '.kwco-body{font-size:15px;line-height:1.6;color:var(--ink-secondary,#5A5A60);margin:12px 0 0;text-wrap:pretty}',
    '.kwco-line{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-top:24px;padding-top:16px;border-top:1px solid rgba(14,14,16,.08);font-size:14px;color:var(--ink-secondary,#5A5A60)}',
    '.kwco-amount{font-family:var(--font-display,Fraunces,Georgia,serif);font-size:24px;font-weight:500;color:var(--ink-primary,#0E0E10)}',
    '.kwco-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}',
    '.kwco-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 22px;border-radius:10px;border:1px solid transparent;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;text-decoration:none;transition:transform 240ms cubic-bezier(.16,1,.3,1),box-shadow 240ms cubic-bezier(.16,1,.3,1),background-color 150ms linear}',
    '.kwco-btn:hover{transform:translateY(-1px)}',
    '.kwco-btn:focus-visible{outline:2px solid var(--ink-primary,#0E0E10);outline-offset:3px}',
    '.kwco-btn[disabled]{opacity:.55;cursor:default;transform:none}',
    '.kwco-btn-primary{background:var(--coral,#E55A3F);color:#fff}',
    '.kwco-btn-primary:hover{box-shadow:0 8px 24px rgba(229,90,63,.22)}',
    '.kwco-btn-quiet{background:transparent;color:var(--ink-secondary,#5A5A60);border-color:rgba(14,14,16,.14)}',
    '.kwco-btn-quiet:hover{color:var(--ink-primary,#0E0E10);border-color:rgba(14,14,16,.28)}',
    '.kwco-spinner{width:18px;height:18px;border-radius:50%;border:2px solid rgba(14,14,16,.14);border-top-color:var(--accent,#1F4E4A);animation:kwco-spin 800ms linear infinite;flex:none}',
    '@keyframes kwco-spin{to{transform:rotate(360deg)}}',
    '.kwco-status{display:flex;align-items:center;gap:12px;margin-top:24px;font-size:14px;color:var(--ink-secondary,#5A5A60)}',
    '.kwco-mark{width:44px;height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;background:var(--bg-elevated,#F4F3EE);color:var(--ink-secondary,#5A5A60)}',
    '.kwco-mark svg{width:20px;height:20px}',
    '.kwco-mark.ok{background:rgba(31,78,74,.10);color:var(--accent,#1F4E4A)}',
    '.kwco-mark.warn{background:rgba(229,90,63,.10);color:var(--coral,#E55A3F)}',
    '.kwco-note{font-size:13px;line-height:1.55;color:var(--ink-tertiary,#9A9AA0);margin:20px 0 0}',
    '.kwco-err{font-size:14px;line-height:1.55;color:#B3311B;background:rgba(229,90,63,.07);border:1px solid rgba(229,90,63,.22);border-radius:10px;padding:12px 14px;margin:20px 0 0}',
    '@media (max-width:480px){.kwco-scrim{padding:12px;align-items:flex-end}.kwco-card{padding:24px 20px;border-radius:14px}.kwco-title{font-size:22px}.kwco-actions .kwco-btn{width:100%}}',
    '@media (prefers-reduced-motion:reduce){.kwco-scrim,.kwco-card,.kwco-btn{transition:none}.kwco-btn:hover{transform:none}.kwco-spinner{animation-duration:2s}}'
  ].join('');

  function injectCss() {
    if (doc.getElementById('kw-checkout-css')) return;
    var s = doc.createElement('style');
    s.id = 'kw-checkout-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  var ICON = {
    ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v5"/><circle cx="12" cy="16.5" r="1"/><circle cx="12" cy="12" r="8.5"/></svg>'
  };

  /* ============================================================
     DIALOG
     ============================================================ */
  var dlg = null;

  function open() {
    if (dlg) return dlg;
    injectCss();
    var scrim = doc.createElement('div');
    scrim.className = 'kwco-scrim';
    scrim.setAttribute('role', 'dialog');
    scrim.setAttribute('aria-modal', 'true');
    scrim.setAttribute('aria-labelledby', 'kwco-title');
    scrim.innerHTML = '<div class="kwco-card" tabindex="-1"></div>';
    doc.body.appendChild(scrim);
    var prevFocus = doc.activeElement;
    var card = scrim.querySelector('.kwco-card');

    function onKey(e) {
      if (e.key === 'Escape' && dlg && dlg.dismissible) close();
      if (e.key !== 'Tab') return;
      var f = card.querySelectorAll('button:not([disabled]),a[href],input,select,textarea');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    scrim.addEventListener('mousedown', function (e) {
      if (e.target === scrim && dlg && dlg.dismissible) close();
    });
    doc.addEventListener('keydown', onKey);

    dlg = {
      scrim: scrim, card: card, dismissible: true,
      destroy: function () {
        doc.removeEventListener('keydown', onKey);
        scrim.remove();
        dlg = null;
        if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
      }
    };
    requestAnimationFrame(function () { scrim.classList.add('in'); });
    return dlg;
  }

  function close() {
    if (!dlg) return;
    var d = dlg;
    d.scrim.classList.remove('in');
    setTimeout(function () { if (d === dlg) d.destroy(); else d.scrim.remove(); }, 200);
  }

  /* view: { eyebrow, title, body, mark, amount, amountLabel, error, note,
            actions:[{label, kind, onClick, href}], busy, dismissible } */
  function render(view) {
    var d = open();
    d.dismissible = view.dismissible !== false;
    var html = '';
    if (view.mark) html += '<div class="kwco-mark ' + (view.markTone || '') + '">' + ICON[view.mark] + '</div>';
    if (view.eyebrow) html += '<p class="kwco-eyebrow">' + esc(view.eyebrow) + '</p>';
    html += '<h2 class="kwco-title" id="kwco-title">' + esc(view.title) + '</h2>';
    if (view.body) html += '<p class="kwco-body">' + esc(view.body) + '</p>';
    if (view.amountLabel) {
      html += '<div class="kwco-line"><span>' + esc(view.amountFor || 'One-time payment') + '</span>' +
              '<span class="kwco-amount">' + esc(view.amountLabel) + '</span></div>';
    }
    if (view.error) html += '<p class="kwco-err" role="alert">' + esc(view.error) + '</p>';
    if (view.busy) {
      html += '<div class="kwco-status" role="status" aria-live="polite">' +
              '<span class="kwco-spinner" aria-hidden="true"></span><span>' + esc(view.busy) + '</span></div>';
    }
    if (view.actions && view.actions.length) {
      html += '<div class="kwco-actions">' + view.actions.map(function (a, i) {
        var cls = 'kwco-btn ' + (a.kind === 'primary' ? 'kwco-btn-primary' : 'kwco-btn-quiet');
        return a.href
          ? '<a class="' + cls + '" href="' + esc(a.href) + '">' + esc(a.label) + '</a>'
          : '<button type="button" class="' + cls + '" data-act="' + i + '">' + esc(a.label) + '</button>';
      }).join('') + '</div>';
    }
    if (view.note) html += '<p class="kwco-note">' + esc(view.note) + '</p>';
    d.card.innerHTML = html;
    (view.actions || []).forEach(function (a, i) {
      var btn = d.card.querySelector('[data-act="' + i + '"]');
      if (btn && a.onClick) btn.addEventListener('click', a.onClick);
    });
    var focusable = d.card.querySelector('.kwco-btn') || d.card;
    try { focusable.focus({ preventScroll: true }); } catch (e) {}
    return d;
  }

  /* ============================================================
     SDK
     ============================================================ */
  var sdkPromise = null;
  function loadSdk() {
    if (global.Cashfree) return Promise.resolve(global.Cashfree);
    if (sdkPromise) return sdkPromise;
    sdkPromise = new Promise(function (resolve, reject) {
      var s = doc.createElement('script');
      s.src = SDK_URL;
      s.async = true;
      s.onload = function () {
        global.Cashfree ? resolve(global.Cashfree) : reject(new Error('sdk'));
      };
      s.onerror = function () { sdkPromise = null; reject(new Error('sdk')); };
      (doc.head || doc.documentElement).appendChild(s);
    });
    return sdkPromise;
  }

  /* ============================================================
     FLOW
     ============================================================ */
  function createOrder(productId) {
    return auth().request('/orders', { method: 'POST', body: { product_id: productId } });
  }
  function readOrder(orderId) {
    return auth().request('/orders/' + encodeURIComponent(orderId));
  }

  /* Cashfree's payment_session_id, wherever the Worker puts it. */
  function readSession(data) {
    if (!data) return null;
    return data.paymentSessionId
        || data.payment_session_id
        || (data.checkout && data.checkout.payment_session_id)
        || (data.order && data.order.payment_session_id)
        || (data.data && data.data.payment_session_id)
        || null;
  }

  /* Our own order id, wherever the Worker puts it. Never Cashfree's. */
  function readOrderId(data) {
    if (!data) return null;
    return (data.order && (data.order.id || data.order.order_id))
        || data.order_id
        || data.id
        || null;
  }

  /* Normalises the Worker's order status to this adapter's vocabulary.
     Accepts our lowercase names and Cashfree's uppercase ones alike;
     anything unrecognised is treated as still pending, never as paid. */
  function readStatus(data) {
    var order = (data && data.order) || {};
    var raw = String(
      order.status || order.order_status ||
      (data && (data.status || data.order_status)) || ''
    ).toLowerCase();
    if (raw === 'paid' || raw === 'success') return 'paid';
    if (raw === 'failed' || raw === 'expired' || raw === 'terminated') return 'failed';
    if (raw === 'cancelled' || raw === 'canceled' || raw === 'user_dropped') return 'cancelled';
    /* The Worker's own order row is not 'paid' yet. It also reports the
       gateway's status, which IT read from Cashfree server-side — that is
       evidence the webhook is in flight, NOT permission to unlock. */
    var gateway = String(order.cashfreeStatus || order.cashfree_status || '').toLowerCase();
    if (gateway === 'paid') return 'confirming';
    if (gateway === 'expired' || gateway === 'terminated') return 'failed';
    if (gateway === 'cancelled' || gateway === 'user_dropped') return 'cancelled';
    return 'pending';
  }

  /* Poll the SERVER until it has reconciled the payment with Cashfree.
     Resolves with the server's own status string only. */
  function pollOrder(orderId, onTick) {
    var tries = 0;
    var sawGatewayPaid = false;
    return new Promise(function (resolve) {
      (function tick() {
        tries++;
        if (onTick) onTick(tries);
        readOrder(orderId).then(function (data) {
          var status = readStatus(data);
          if (status === 'paid' || status === 'failed' || status === 'cancelled') return resolve(status);
          if (status === 'confirming') sawGatewayPaid = true;
          if (tries >= POLL_TRIES) return resolve(sawGatewayPaid ? 'confirming' : 'pending');
          setTimeout(tick, POLL_MS);
        }, function (e) {
          if (e.code === 'unauthorized') return resolve('session-expired');
          if (tries >= POLL_TRIES) return resolve('unknown');
          setTimeout(tick, POLL_MS);
        });
      })();
    });
  }

  function productOrThrow(id) {
    var p = products() && products().get(id);
    if (!p) throw new Error('kw-checkout: unknown product ' + id);
    return p;
  }

  function start(productId, ctx) {
    ctx = ctx || {};
    var product = productOrThrow(productId);
    var A = auth();
    if (!A) { global.location.href = prefixToRoot() + 'account/index.html'; return Promise.resolve(); }

    render({
      eyebrow: product.tier,
      title: product.name,
      body: 'Checking your Klarweg account…',
      busy: 'One moment',
      dismissible: false
    });

    return A.refresh({ force: true }).then(function (s) {
      if (!s.authenticated) return promptSignIn(product, s);
      if (alreadyOwns(product, s)) return showOwned(product);
      return confirmPurchase(product);
    });
  }

  function alreadyOwns(product, s) {
    if (s.hasFullAccess) return true;
    return product.kind === 'level' && s.entitlements[product.id] === true;
  }

  function promptSignIn(product, s) {
    var href = auth().accountUrl({ prefix: prefixToRoot(), buy: product.id, mode: 'login' });
    render({
      eyebrow: product.tier,
      title: 'Sign in to continue',
      body: 'Your purchase is attached to your Klarweg account, so your access follows you to any device. It takes a minute to create one.',
      amountFor: product.name,
      amountLabel: product.label,
      error: s.error === 'network' ? 'We could not reach Klarweg just now. Your connection may be offline.' : null,
      actions: [
        { label: 'Sign in or create account', kind: 'primary', href: href },
        { label: 'Not now', onClick: close }
      ]
    });
  }

  function showOwned(product) {
    render({
      mark: 'ok', markTone: 'ok',
      title: 'You already have this',
      body: product.kind === 'bundle'
        ? 'Lifetime access is active on your account. Every chapter from A1 to C2 is open.'
        : product.name + ' is active on your account.',
      actions: [
        { label: 'Your account', kind: 'primary', href: auth().accountUrl({ prefix: prefixToRoot(), next: null }) },
        { label: 'Close', onClick: close }
      ]
    });
    if (global.KWAccess) global.KWAccess.refresh();
  }

  function confirmPurchase(product) {
    render({
      eyebrow: product.tier,
      title: product.name,
      body: product.kind === 'bundle'
        ? 'One payment opens every chapter of A1, A2, B1, B2, C1 and C2, including chapters added later.'
        : 'One payment opens every chapter of ' + product.id + '. No subscription, no renewal.',
      amountFor: product.blurb,
      amountLabel: product.label,
      note: 'Payment is handled by Cashfree. Klarweg never sees your card details.',
      actions: [
        { label: 'Continue to payment', kind: 'primary', onClick: function () { begin(product); } },
        { label: 'Cancel', onClick: close }
      ]
    });
  }

  function begin(product) {
    render({
      eyebrow: product.tier,
      title: product.name,
      body: 'Creating your order.',
      busy: 'Preparing a secure payment',
      dismissible: false
    });

    var order = null;
    createOrder(product.id).then(function (data) {
      order = { id: readOrderId(data) };
      var session = readSession(data);
      if (!session || !order.id) throw new Error('no-session');
      render({
        eyebrow: product.tier,
        title: product.name,
        body: 'Opening the secure Cashfree checkout.',
        busy: 'Redirecting to payment',
        dismissible: false
      });
      var declared = (data.checkout && data.checkout.mode) || data.mode || data.env || 'sandbox';
      return loadSdk().then(function (Cashfree) {
        var cf = Cashfree({ mode: (declared === 'production' ? 'production' : 'sandbox') });
        return cf.checkout({ paymentSessionId: session, redirectTarget: '_modal' });
      });
    }).then(function () {
      // Cashfree has closed. This tells us NOTHING about the payment.
      return verify(product, order.id);
    }).catch(function (e) {
      if (e && e.code === 'unauthorized') return sessionExpired(product);
      if (order && order.id) return verify(product, order.id);
      failedToStart(product, e);
    });
  }

  function verify(product, orderId) {
    render({
      eyebrow: product.tier,
      title: 'Confirming your payment',
      body: 'We are checking the payment with the bank. This usually takes a few seconds — please keep this window open.',
      busy: 'Verifying with Klarweg',
      dismissible: false
    });
    return pollOrder(orderId).then(function (status) {
      if (status === 'paid' || status === 'confirming') return succeeded(product, orderId);
      if (status === 'failed') return failed(product, orderId);
      if (status === 'cancelled') return cancelled(product);
      if (status === 'session-expired') return sessionExpired(product);
      return pending(product, orderId);
    });
  }

  /* The ONLY place that declares success, and it does so only when
     /auth/me actually reports the entitlement. A paid order row or a
     paid gateway status is not enough on its own. */
  function succeeded(product, orderId) {
    return auth().refresh({ force: true }).then(function (s) {
      if (!alreadyOwns(product, s)) return pending(product, orderId);
      if (global.KWAccess) global.KWAccess.refresh();
      render({
        mark: 'ok', markTone: 'ok',
        eyebrow: 'Payment confirmed',
        title: product.kind === 'bundle' ? 'Lifetime access is open' : product.id + ' is open',
        body: product.kind === 'bundle'
          ? 'Every chapter from A1 to C2 is now unlocked on your account.'
          : 'Every ' + product.id + ' chapter is now unlocked on your account.',
        actions: [
          { label: 'Start learning', kind: 'primary', onClick: function () { close(); global.location.reload(); } },
          { label: 'Your account', href: auth().accountUrl({ prefix: prefixToRoot(), next: null }) }
        ],
        note: 'A receipt has been sent to your registered email address.'
      });
    });
  }

  function pending(product, orderId) {
    render({
      mark: 'clock',
      eyebrow: 'Payment pending',
      title: 'Your payment is still processing',
      body: 'The bank has not confirmed this payment yet. Nothing is lost — as soon as it clears, your access opens automatically. You can safely close this window.',
      actions: [
        { label: 'Check again', kind: 'primary', onClick: function () { verify(product, orderId); } },
        { label: 'Close', onClick: close }
      ],
      note: 'If the amount was debited and access has not opened within an hour, write to us with the order reference ' + orderId + '.'
    });
  }

  function failed(product, orderId) {
    render({
      mark: 'alert', markTone: 'warn',
      eyebrow: 'Payment not completed',
      title: 'That payment did not go through',
      body: 'No access was granted and, if any amount was debited, your bank returns it automatically. You can try again with a different method.',
      actions: [
        { label: 'Try again', kind: 'primary', onClick: function () { confirmPurchase(product); } },
        { label: 'Close', onClick: close }
      ],
      note: 'Order reference ' + orderId + '.'
    });
  }

  function cancelled(product) {
    render({
      eyebrow: 'Payment cancelled',
      title: 'You cancelled this payment',
      body: 'Nothing was charged. ' + product.name + ' is still available whenever you are ready.',
      actions: [
        { label: 'Try again', kind: 'primary', onClick: function () { confirmPurchase(product); } },
        { label: 'Close', onClick: close }
      ]
    });
  }

  function sessionExpired(product) {
    render({
      mark: 'alert', markTone: 'warn',
      eyebrow: 'Session expired',
      title: 'Please sign in again',
      body: 'Your Klarweg session has expired. Sign in and the purchase will pick up where it left off.',
      actions: [
        { label: 'Sign in', kind: 'primary', href: auth().accountUrl({ prefix: prefixToRoot(), buy: product.id, mode: 'login' }) },
        { label: 'Close', onClick: close }
      ]
    });
  }

  function failedToStart(product, e) {
    var network = e && e.code === 'network';
    render({
      mark: 'alert', markTone: 'warn',
      eyebrow: 'Could not start payment',
      title: network ? 'No connection to Klarweg' : 'We could not open checkout',
      body: network
        ? 'Check your internet connection and try again. Nothing was charged.'
        : 'Something went wrong before the payment began. Nothing was charged.',
      error: (e && e.message && !network) ? e.message : null,
      actions: [
        { label: 'Try again', kind: 'primary', onClick: function () { confirmPurchase(product); } },
        { label: 'Close', onClick: close }
      ]
    });
  }

  /* ============================================================
     WIRING — one delegated listener for the whole site
     ============================================================ */
  function bind() {
    if (doc.__kwCheckoutBound) return;
    doc.__kwCheckoutBound = true;
    doc.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-kw-buy]') : null;
      if (!el) return;
      var id = el.getAttribute('data-kw-buy');
      if (!products() || !products().get(id)) return;
      e.preventDefault();
      start(id, { trigger: el });
    });

    /* Resume an interrupted purchase after sign-in: account page sends
       the learner back with ?resume=<PRODUCT>. */
    try {
      var resume = new URLSearchParams(global.location.search).get('resume');
      if (resume && products() && products().get(resume)) {
        var url = new URL(global.location.href);
        url.searchParams.delete('resume');
        history.replaceState({}, '', url.toString());
        setTimeout(function () { start(resume, { resumed: true }); }, 250);
      }
    } catch (err) {}
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', bind);
  else bind();

  global.KWCheckout = {
    start: start,
    close: close,
    render: render,
    pollOrder: pollOrder
  };
})(window);
