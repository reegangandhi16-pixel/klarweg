/* ============================================================
   KLARWEG · LIVE COURSE ENROLMENT WITH ONLINE PAYMENT (kw-enrol.js)
   ------------------------------------------------------------
   Loaded by kw-live.js ONLY when live-classes-data.js sets
   liveEnrolment.enabled = true (an owner decision; see
   docs/live-classes-online-payments.md). Until then the Live Classes
   page never loads this file.

   What it does:
     · reads the courses open for online enrolment from the access
       Worker (GET /enrol/catalog): fee, payment plans, seats left;
     · shows the signed-in learner the amount due now and later, as
       quoted by the Worker (GET /enrol/quote), before any payment;
     · opens Cashfree's checkout for the order the Worker created
       (POST /enrol/checkout, POST /enrol/enrolments/:ref/pay);
     · on return, asks the Worker for the enrolment's status and shows
       the confirmation and enrolment reference on the page.

   What it never does:
     · decide that a payment succeeded. Only the Worker's status, which
       it verified with Cashfree's API, confirms an enrolment; Cashfree's
       return redirect proves nothing.
     · set the amount. The Worker computes it. This file sends only the
       amount it was shown (expected_amount_paise), so the Worker can
       refuse if the amount due changed in the meantime.
     · touch the self-paced checkout (kw-checkout.js / /orders), or send
       any email or message.
   ============================================================ */
(function (global) {
  'use strict';
  var doc = global.document;
  var D = global.KWLive || {};
  var LE = D.liveEnrolment || {};
  if (LE.enabled !== true || global.KWEnrol) return;

  var SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';
  var REF_RE = /^KWE-[2-9A-HJ-NP-Z]{8}$/;
  var POLL_MS = 3000, POLL_TRIES = 10;
  var CONTACT = (D.contact && D.contact.email) || 'klarwegofficial@gmail.com';

  function auth() { return global.KWAuth || null; }
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function rupees(paise) { return '₹' + (paise / 100).toLocaleString('en-IN'); }
  function niceDate(iso) {
    var p = String(iso).split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  }

  /* The Worker's error codes and bodies matter here (amount-changed carries
     the new quote), so this keeps them instead of using KWAuth.request. */
  function call(path, options) {
    options = options || {};
    var base = String(global.KW_ACCESS_API || '').replace(/\/+$/, '');
    var init = { method: options.method || 'GET', credentials: 'include', mode: 'cors', headers: { Accept: 'application/json' } };
    if (options.body != null) { init.headers['Content-Type'] = 'application/json'; init.body = JSON.stringify(options.body); }
    return fetch(base + path, init).then(function (r) {
      return r.text().then(function (t) {
        var data = null;
        try { data = t ? JSON.parse(t) : null; } catch (e) {}
        if (r.ok && data && data.ok !== false) return data;
        var e = new Error((data && data.error) || 'Something went wrong. Please try again.');
        e.status = r.status; e.code = (data && data.code) || (r.status === 401 ? 'unauthorized' : 'server'); e.data = data || {};
        throw e;
      });
    }, function () {
      var e = new Error('We could not reach Klarweg. Check your connection and try again.');
      e.code = 'network'; e.data = {};
      throw e;
    });
  }

  /* ---------- panel ---------- */
  var CSS = '.kwen{margin:32px 0 0;padding:28px;border:1px solid var(--hairline,rgba(14,14,16,.1));border-radius:var(--r-lg,16px);background:var(--bg-surface,#fff);scroll-margin-top:80px}'
    + '.kwen h3{margin:0 0 6px}.kwen .kwen-note{font-size:14px;color:var(--ink-secondary,#5A5A60);margin:0 0 14px}'
    + '.kwen-test{display:inline-block;margin:0 0 12px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.04em;background:#FFF4D6;color:#7A4E00;border:1px solid rgba(138,90,0,.3)}'
    + '.kwen fieldset{border:0;margin:0 0 16px;padding:0}.kwen legend{font-weight:600;font-size:14px;margin-bottom:8px}'
    + '.kwen-opts{display:grid;gap:8px}.kwen-opts label{display:flex;gap:10px;align-items:flex-start;min-height:44px;padding:12px 14px;border:1px solid rgba(14,14,16,.18);border-radius:10px;cursor:pointer}'
    + '.kwen-opts label:has(input:checked){border-color:var(--live-navy,#0F172A);box-shadow:inset 0 0 0 1px var(--live-navy,#0F172A)}'
    + '.kwen-opts small{display:block;color:var(--ink-secondary,#5A5A60);font-size:13px;margin-top:2px}'
    + '.kwen input[type=tel]{width:100%;min-height:44px;padding:0 12px;border-radius:8px;border:1px solid rgba(14,14,16,.18);font:inherit;box-sizing:border-box}'
    + '.kwen-sum{margin:0 0 16px;border-top:1px solid rgba(14,14,16,.1)}.kwen-sum div{display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px solid rgba(14,14,16,.1);font-size:15px}'
    + '.kwen-sum .kwen-due{font-weight:700;font-size:18px}.kwen-sum dd{margin:0;text-align:right;white-space:nowrap}.kwen-sum dt{min-width:0}'
    + '.kwen-err{color:#B3311B;font-size:14px;margin:10px 0 0}.kwen-ref{font-family:var(--font-mono,ui-monospace,monospace);font-size:20px;font-weight:700;letter-spacing:.06em;overflow-wrap:anywhere}'
    + '.kwen-done{padding:16px;border-radius:12px;background:rgba(46,125,50,.06);border:1px solid rgba(46,125,50,.25)}'
    + '.kwen-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}.kwen-check{display:flex;gap:10px;align-items:flex-start;font-size:14px;margin:0 0 14px}'
    + '.kwen-list{margin:10px 0 0;padding:0;list-style:none}.kwen-list li{padding:10px 0;border-top:1px solid rgba(14,14,16,.1);font-size:14px}'
    + '.kwen button:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}'
    + '@media (max-width:480px){.kwen{padding:20px}.kwen-actions .btn{flex:1 1 100%;justify-content:center}}';

  var panel = null;
  function mount() {
    if (panel) return panel;
    var style = doc.createElement('style'); style.textContent = CSS; doc.head.appendChild(style);
    panel = doc.createElement('div');
    panel.className = 'kwen'; panel.id = 'enrol';
    panel.setAttribute('aria-live', 'polite');
    var grid = doc.getElementById('course-grid');
    if (grid && grid.parentNode) grid.parentNode.insertBefore(panel, grid.nextSibling);
    return panel;
  }
  function show(html, focus) {
    mount().innerHTML = html;
    if (focus) { var h = panel.querySelector('h3'); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } }
  }
  function testBadge(on) { return on ? '<span class="kwen-test">TEST MODE · no real payment</span>' : ''; }
  function scrollToPanel() {
    var reduce = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    mount().scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  /* ---------- 1 · choose course and plan ---------- */
  var catalog = null, mine = [], choice = { course: null, plan: 'full' };
  function loadCatalog() { return call('/enrol/catalog').then(function (c) { catalog = c; return c; }); }
  function loadMine() {
    return auth().refresh().then(function (s) {
      if (!s.authenticated) { mine = []; return; }
      return call('/enrol/enrolments').then(function (r) { mine = r.enrolments || []; }, function () {});
    }, function () {});
  }
  function course(id) { return ((catalog && catalog.courses) || []).filter(function (c) { return c.id === id; })[0] || null; }
  function scheduleText(plan) {
    return plan.schedule.map(function (s) {
      return rupees(s.amountPaise) + (s.part === 1 ? ' now' : ' before ' + niceDate(s.dueBefore));
    }).join(' + ');
  }

  function renderPicker(error) {
    var c = catalog;
    var head = '<h3>Enrol and pay online</h3>' + testBadge(c && c.testMode);
    if (!c || !c.enabled) return show(head + '<p class="kwen-note">Online enrolment is not available right now.</p>' + mineHtml());
    if (!c.courses.length) return show(head + '<p class="kwen-note">No course is open for online enrolment right now. Courses on the waitlist open here once their start date is confirmed.</p>' + mineHtml());
    if (!course(choice.course)) choice.course = c.courses[0].id;
    var sel = course(choice.course);
    if (!sel.plans.some(function (p) { return p.id === choice.plan; })) choice.plan = sel.plans[0].id;
    var courseOpts = c.courses.map(function (x) {
      return '<label><input type="radio" name="kwen-course" value="' + esc(x.id) + '"' + (x.id === sel.id ? ' checked' : '') + (x.seatsLeft ? '' : ' disabled') + '>'
        + '<span><strong>' + esc(x.title) + '</strong><small>Starts ' + esc(niceDate(x.batch)) + ' · '
        + (x.seatsLeft ? esc(x.seatsLeft) + ' of ' + esc(x.capacity) + ' places left' : 'Full') + '</small></span></label>';
    }).join('');
    var planOpts = sel.plans.map(function (p) {
      return '<label><input type="radio" name="kwen-plan" value="' + esc(p.id) + '"' + (p.id === choice.plan ? ' checked' : '') + '>'
        + '<span><strong>' + esc(p.label) + ' · ' + rupees(p.totalPaise) + '</strong><small>' + esc(scheduleText(p)) + '</small></span></label>';
    }).join('');
    show(head
      + '<p class="kwen-note">Choose your course and how you want to pay. You see the exact amount before paying, and you pay securely through Cashfree (UPI, cards, net banking). Your place is confirmed on this page as soon as Cashfree confirms the payment.</p>'
      + '<fieldset><legend>Course</legend><div class="kwen-opts">' + courseOpts + '</div></fieldset>'
      + '<fieldset><legend>Payment plan</legend><div class="kwen-opts">' + planOpts + '</div></fieldset>'
      + '<button type="button" class="btn btn-live" id="kwen-next"' + (sel.seatsLeft ? '' : ' disabled') + '>Review amount</button>'
      + (error ? '<p class="kwen-err" role="alert">' + esc(error) + '</p>' : '')
      + mineHtml());
    panel.querySelectorAll('input[name=kwen-course]').forEach(function (r) {
      r.addEventListener('change', function () { choice.course = r.value; renderPicker(); });
    });
    panel.querySelectorAll('input[name=kwen-plan]').forEach(function (r) {
      r.addEventListener('change', function () { choice.plan = r.value; });
    });
    doc.getElementById('kwen-next').addEventListener('click', function () { begin(); });
  }

  function statusWord(e) {
    if (e.status === 'enrolled') return e.parts.some(function (p) { return p.status !== 'paid'; }) ? 'enrolled · instalment due' : 'enrolled · fully paid';
    return { pending: 'awaiting payment', review: 'being checked by Klarweg', expired: 'not completed', released: 'replaced by a newer attempt', failed: 'not completed', cancelled: 'cancelled' }[e.status] || e.status;
  }
  function mineHtml() {
    var list = mine.filter(function (e) { return ['pending', 'enrolled', 'review'].indexOf(e.status) >= 0; });
    if (!list.length) return '';
    return '<p class="kwen-note" style="margin:20px 0 0"><strong>Your enrolments</strong></p><ul class="kwen-list">' + list.map(function (e) {
      return '<li><span class="kwen-ref" style="font-size:14px">' + esc(e.ref) + '</span> · ' + esc(e.courseTitle) + ', starts ' + esc(niceDate(e.batch)) + ' · ' + esc(statusWord(e))
        + ' · <button type="button" class="btn btn-secondary" data-kwen-view="' + esc(e.ref) + '" style="min-height:36px;padding:0 12px">View</button></li>';
    }).join('') + '</ul>';
  }

  /* ---------- 2 · sign in, phone ---------- */
  function begin() {
    var A = auth();
    A.refresh({ force: true }).then(function (s) {
      if (!s.authenticated) {
        return show('<h3>Sign in to enrol</h3><p class="kwen-note">Your enrolment is attached to your Klarweg account, so you can see it again on any device.</p>'
          + '<a class="btn btn-live" href="' + esc(A.accountUrl({ mode: 'login', next: global.location.pathname + '#enrol' })) + '">Sign in or create account</a>', true);
      }
      if (!A.hasPhone()) return askPhone();
      quote();
    });
  }
  function askPhone(error) {
    show('<h3>Add a phone number</h3><p class="kwen-note">Cashfree, our payment partner, requires a phone number to process the payment. It is saved to your Klarweg account.</p>'
      + '<label for="kwen-phone"><strong>Phone number</strong></label><input id="kwen-phone" type="tel" autocomplete="tel" placeholder="9876543210">'
      + '<div class="kwen-actions"><button type="button" class="btn btn-live" id="kwen-phone-go">Continue</button></div>'
      + (error ? '<p class="kwen-err" role="alert">' + esc(error) + '</p>' : ''), true);
    doc.getElementById('kwen-phone-go').addEventListener('click', function () {
      auth().updatePhone(doc.getElementById('kwen-phone').value).then(function () { quote(); }, function (e) { askPhone(e.message); });
    });
  }

  /* ---------- 3 · amount due, from the Worker ---------- */
  function quote(notice) {
    show('<p class="kwen-note">Calculating the amount due…</p>');
    call('/enrol/quote?course_id=' + encodeURIComponent(choice.course) + '&plan=' + encodeURIComponent(choice.plan)).then(function (r) {
      renderQuote(r.quote, r.testMode, notice);
    }, function (e) { refresh(e.message); });
  }
  function renderQuote(q, testMode, notice) {
    var rows = '<div><dt>Course fee</dt><dd>' + rupees(q.totalPaise) + '</dd></div>';
    if (q.creditPaise) rows += '<div><dt>Consultation ' + esc(q.creditConsultRef) + ' adjusted</dt><dd>− ' + rupees(q.creditPaise) + '</dd></div>';
    q.schedule.forEach(function (s) {
      rows += s.part === 1
        ? '<div class="kwen-due"><dt>Due now</dt><dd>' + rupees(s.amountPaise) + '</dd></div>'
        : '<div><dt>Second instalment, due before ' + esc(niceDate(s.dueBefore)) + '</dt><dd>' + rupees(s.amountPaise) + '</dd></div>';
    });
    var policy = (D.policies && D.policies.cancellationRefund) || '';
    show('<h3>Review and pay</h3>' + testBadge(testMode)
      + '<p class="kwen-note"><strong>' + esc(q.courseTitle) + '</strong> · starts ' + esc(niceDate(q.batch)) + '</p>'
      + (notice ? '<p class="kwen-err" role="alert">' + esc(notice) + '</p>' : '')
      + '<dl class="kwen-sum">' + rows + '</dl>'
      + (policy ? '<p class="kwen-note">' + esc(policy) + '</p>' : '')
      + '<label class="kwen-check"><input type="checkbox" id="kwen-agree"> <span>I have read the course details, the cancellation and refund terms above, and the <a class="inline" href="terms.html" target="_blank" rel="noopener">Terms</a>.</span></label>'
      + '<div class="kwen-actions"><button type="button" class="btn btn-live" id="kwen-pay" disabled>Pay ' + rupees(q.dueNowPaise) + ' securely</button>'
      + '<button type="button" class="btn btn-secondary" id="kwen-back">Change</button></div>'
      + '<p class="kwen-err" role="alert" id="kwen-pay-err" hidden></p>', true);
    var agree = doc.getElementById('kwen-agree'), pay = doc.getElementById('kwen-pay');
    agree.addEventListener('change', function () { pay.disabled = !agree.checked; });
    pay.addEventListener('click', function () { pay.disabled = true; checkout(q); });
    doc.getElementById('kwen-back').addEventListener('click', function () { renderPicker(); });
  }

  /* ---------- 4 · Worker order → Cashfree checkout ---------- */
  function checkout(q) {
    show('<p class="kwen-note">Holding your place and opening the secure payment…</p>');
    call('/enrol/checkout', { method: 'POST', body: { course_id: q.courseId, plan: q.plan, expected_amount_paise: q.dueNowPaise } })
      .then(pay, function (e) {
        if (e.code === 'amount-changed' && e.data.quote) return renderQuote(e.data.quote, catalog && catalog.testMode, e.message);
        if (e.code === 'already-enrolled' && e.data.enrolment) return renderResult(e.data.enrolment);
        if (e.code === 'phone-required') return askPhone(e.message);
        refresh(e.message);
      });
  }
  function pay(r) {
    try { global.history.replaceState(null, '', global.location.pathname + '?enrol_ref=' + r.enrolment.ref + '#enrol'); } catch (e) {}
    return loadSdk().then(function (Cashfree) {
      var cf = Cashfree({ mode: r.checkout && r.checkout.mode === 'production' ? 'production' : 'sandbox' });
      return cf.checkout({ paymentSessionId: r.paymentSessionId, redirectTarget: '_self' });
    }).catch(function (e) {
      renderPending(r.enrolment, e && e.message ? e.message : 'The payment page could not be opened.');
    });
  }
  function resume(e) {
    /* Same course and plan → the Worker returns the SAME open order
       (no second order, no second seat). An instalment uses its own route. */
    var part2 = e.status === 'enrolled';
    show('<p class="kwen-note">Opening the secure payment…</p>');
    (part2 ? call('/enrol/enrolments/' + encodeURIComponent(e.ref) + '/pay', { method: 'POST', body: {} })
      : call('/enrol/checkout', { method: 'POST', body: { course_id: e.courseId, plan: e.plan } }))
      .then(pay, function (err) {
        if (err.code === 'already-enrolled' && err.data.enrolment) return renderResult(err.data.enrolment);
        track(e.ref, err.message);
      });
  }

  var sdkPromise = null;
  function loadSdk() {
    if (global.Cashfree) return Promise.resolve(global.Cashfree);
    if (sdkPromise) return sdkPromise;
    sdkPromise = new Promise(function (resolve, reject) {
      var s = doc.createElement('script');
      s.src = SDK_URL; s.async = true;
      s.onload = function () { global.Cashfree ? resolve(global.Cashfree) : reject(new Error('The payment page could not be loaded.')); };
      s.onerror = function () { sdkPromise = null; reject(new Error('The payment page could not be loaded.')); };
      doc.head.appendChild(s);
    });
    return sdkPromise;
  }

  /* ---------- 5 · return from Cashfree: the Worker's verified status only ---------- */
  var current = null;
  function waiting(e) { return e.status === 'pending' || (e.status === 'enrolled' && e.parts.some(function (p) { return p.status === 'pending'; })); }
  /* The first answer is shown at once (a failed or cancelled payment
     offers Continue payment straight away); while a payment is still
     open, it keeps checking quietly and re-renders only on a change. */
  var trackId = 0;
  function track(ref, notice) {
    var my = ++trackId, tries = 0, shown = null;
    show('<p class="kwen-note">Confirming your payment with Cashfree… Enrolment reference <span class="kwen-ref">' + esc(ref) + '</span></p>');
    (function tick() {
      tries++;
      call('/enrol/enrolments/' + encodeURIComponent(ref)).then(function (r) {
        if (my !== trackId) return;
        var e = r.enrolment, key = e.status + ':' + e.parts.map(function (p) { return p.status; }).join(',');
        if (key !== shown) { shown = key; renderResult(e, notice); }
        if (waiting(e) && tries < POLL_TRIES) setTimeout(tick, POLL_MS);
      }, function (e) {
        if (my !== trackId) return;
        if (e.code === 'unauthorized') {
          return show('<h3>Sign in to see your enrolment</h3><p class="kwen-note">Enrolment <span class="kwen-ref">' + esc(ref) + '</span> belongs to a Klarweg account.</p>'
            + '<a class="btn btn-live" href="' + esc(auth().accountUrl({ mode: 'login', next: global.location.pathname + global.location.search + '#enrol' })) + '">Sign in</a>', true);
        }
        if (e.status === 404 || e.status === 400) return show('<h3>Enrolment not found</h3><p class="kwen-note">No enrolment <span class="kwen-ref">' + esc(ref) + '</span> belongs to the account you are signed in with.</p><div class="kwen-actions"><button type="button" class="btn btn-secondary" data-kwen-restart>See courses</button></div>', true);
        if (tries < POLL_TRIES) return setTimeout(tick, POLL_MS);
        show('<h3>We could not check your payment just now</h3><p class="kwen-note">Enrolment <span class="kwen-ref">' + esc(ref) + '</span>. Nothing is lost: reload this page in a minute to see its status.</p>'
          + '<div class="kwen-actions"><button type="button" class="btn btn-secondary" data-kwen-check="' + esc(ref) + '">Check again</button></div>', true);
      });
    })();
  }

  function partsHtml(e) {
    return '<dl class="kwen-sum">' + e.parts.map(function (p) {
      var label = e.parts.length === 1 ? 'Course fee' : (p.part === 1 ? 'First instalment' : 'Second instalment, due before ' + niceDate(p.dueBefore));
      var st = { paid: 'paid', pending: 'payment in progress', due: 'due' }[p.status];
      return '<div><dt>' + esc(label) + '</dt><dd>' + rupees(p.amountPaise) + ' · ' + esc(st) + '</dd></div>';
    }).join('') + (e.creditPaise ? '<div><dt>Consultation ' + esc(e.creditConsultRef) + ' adjusted</dt><dd>− ' + rupees(e.creditPaise) + '</dd></div>' : '') + '</dl>';
  }
  function renderResult(e, notice) {
    current = e;
    var err = notice ? '<p class="kwen-err" role="alert">' + esc(notice) + '</p>' : '';
    if (e.status === 'enrolled') {
      var next = e.parts.filter(function (p) { return p.status !== 'paid'; })[0];
      return show('<div class="kwen-done"><h3>You are enrolled</h3>' + testBadge(e.testMode)
        + '<p>Enrolment reference</p><p class="kwen-ref">' + esc(e.ref) + '</p>'
        + '<p><strong>' + esc(e.courseTitle) + '</strong> · starts ' + esc(niceDate(e.batch)) + '</p>'
        + partsHtml(e) + err
        + '<p class="kwen-note">Paid so far: <strong>' + rupees(e.paidPaise) + '</strong>. Keep this reference: take a screenshot or print this page. You can see it again here whenever you are signed in.</p>'
        + '<div class="kwen-actions">'
        + (next ? '<button type="button" class="btn btn-live" data-kwen-resume>' + (next.status === 'pending' ? 'Continue payment of ' : 'Pay second instalment · ') + rupees(next.amountPaise) + '</button>' : '')
        + (next && next.status === 'pending' ? '<button type="button" class="btn btn-secondary" data-kwen-check="' + esc(e.ref) + '">Check again</button>' : '')
        + '<button type="button" class="btn btn-secondary" data-kwen-print>Print</button></div></div>', true);
    }
    if (e.status === 'pending') return renderPending(e, notice);
    if (e.status === 'review') {
      return show('<h3>Your payment is being checked</h3>' + testBadge(e.testMode) + '<p class="kwen-note">We received a payment for enrolment <span class="kwen-ref">' + esc(e.ref) + '</span> but could not confirm your place automatically (for example, the batch filled while the payment was still processing). A person at Klarweg checks it and, if no place can be given, refunds the payment in full. Please email ' + esc(CONTACT) + ' with your reference.</p>' + err, true);
    }
    if (e.status === 'cancelled') {
      return show('<h3>This enrolment was cancelled</h3><p class="kwen-note">Enrolment <span class="kwen-ref">' + esc(e.ref) + '</span> was cancelled by Klarweg. For questions about a refund, email ' + esc(CONTACT) + ' with the reference.</p>', true);
    }
    show('<h3>This enrolment was not completed</h3><p class="kwen-note">Enrolment <span class="kwen-ref">' + esc(e.ref) + '</span> was not paid in time, so the place was released and nothing was charged. If money did leave your account for it, it is matched to this reference automatically; email ' + esc(CONTACT) + ' if you see no update within a day.</p>'
      + err + '<div class="kwen-actions"><button type="button" class="btn btn-live" data-kwen-restart>Start again</button></div>', true);
  }
  function renderPending(e, notice) {
    current = e;
    var until = e.holdExpiresAt ? new Date(e.holdExpiresAt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }) + ' IST' : 'shortly';
    show('<h3>Payment not completed yet</h3>' + testBadge(e.testMode)
      + '<p class="kwen-note">Your place in <strong>' + esc(e.courseTitle) + '</strong> is held until ' + esc(until) + ' under reference <span class="kwen-ref" style="font-size:16px">' + esc(e.ref) + '</span>. If the payment failed or you cancelled it, nothing was charged and you can try again. If you did pay, it can take a minute to be confirmed.</p>'
      + (notice ? '<p class="kwen-err" role="alert">' + esc(notice) + '</p>' : '')
      + partsHtml(e)
      + '<div class="kwen-actions"><button type="button" class="btn btn-live" data-kwen-resume>Continue payment</button>'
      + '<button type="button" class="btn btn-secondary" data-kwen-check="' + esc(e.ref) + '">Check again</button></div>', true);
  }

  function refresh(error) {
    return Promise.all([loadCatalog(), loadMine()]).then(function () { renderPicker(error); }, function () {
      show('<p class="kwen-note">Online enrolment could not be reached just now. Please reload the page in a minute.</p>');
    });
  }

  doc.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('[data-enrol-course],[data-kwen-view],[data-kwen-check],[data-kwen-resume],[data-kwen-restart],[data-kwen-print]') : null;
    if (!t) return;
    trackId++;   // any action stops a quiet status check
    if (t.hasAttribute('data-enrol-course')) {
      ev.preventDefault();
      choice.course = t.getAttribute('data-enrol-course');
      renderPicker(); scrollToPanel();
      return;
    }
    if (t.hasAttribute('data-kwen-print')) return global.print();
    if (t.hasAttribute('data-kwen-restart')) { try { global.history.replaceState(null, '', global.location.pathname + '#enrol'); } catch (e) {} return refresh(); }
    if (t.hasAttribute('data-kwen-resume') && current) return resume(current);
    var ref = t.getAttribute('data-kwen-view') || t.getAttribute('data-kwen-check');
    if (ref && REF_RE.test(ref)) track(ref);
  });

  function start() {
    if (!auth()) return;
    mount();
    var ref = new URLSearchParams(global.location.search).get('enrol_ref');
    if (ref && REF_RE.test(ref)) { loadCatalog().catch(function () {}); scrollToPanel(); return track(ref); }
    refresh();
  }

  global.KWEnrol = { start: start };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start); else start();
})(window);
