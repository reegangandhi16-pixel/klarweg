/* ============================================================
   KLARWEG · SAME-DAY CONSULTATION BOOKING (kw-consult.js)
   ------------------------------------------------------------
   Loaded by kw-live.js ONLY when live-classes-data.js sets
   consultation.onlineBooking.enabled = true (an owner decision; see
   docs/live-classes-consultation-booking.md). Until then the Live
   Classes page never loads this file.

   What it does:
     · reads today's availability from the access Worker
       (GET /consult/availability) and labels the teacher cards
       "Available today" / "Currently unavailable" (kw-live.js);
     · lets a signed-in learner pick a bookable teacher and slot, then
       pays the ₹100 fee in Cashfree's checkout;
     · on return, asks the Worker for the booking's status and shows the
       confirmation and booking reference on the page;
     · for a CONFIRMED booking only, asks the Worker for the joining link
       (GET /consult/bookings/:ref/join). The link lives in a Worker secret;
       it is never in this file, the page or its data.

   What it never does:
     · decide that a payment succeeded. Only the Worker's status, which
       it verified with Cashfree's API, confirms a booking; Cashfree's
       return redirect proves nothing.
     · send the amount. The Worker fixes it; this file only displays it.
     · touch the self-paced checkout (kw-checkout.js / /orders), or send
       any email or message.
   ============================================================ */
(function (global) {
  'use strict';
  var doc = global.document;
  var D = global.KWLive || {};
  var OB = (D.consultation && D.consultation.onlineBooking) || {};
  if (OB.enabled !== true || global.KWConsult) return;

  var SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';
  var STORE_KEY = 'kw-consult-refs';
  var POLL_MS = 3000, POLL_TRIES = 10;

  function auth() { return global.KWAuth || null; }
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function rupees(paise) { return '₹' + (paise / 100).toLocaleString('en-IN'); }
  function teacherName(id) {
    var t = (global.KWLiveUI ? global.KWLiveUI.teachers() : []).filter(function (x) { return x.id === id; })[0];
    return t ? t.name : 'your teacher';
  }
  function niceDate(iso) {
    var p = String(iso).split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  }
  function rememberRef(ref) {
    try {
      var list = JSON.parse(global.localStorage.getItem(STORE_KEY) || '[]');
      if (list.indexOf(ref) < 0) list.unshift(ref);
      global.localStorage.setItem(STORE_KEY, JSON.stringify(list.slice(0, 10)));
    } catch (e) {}
  }

  /* ---------- panel ---------- */
  var CSS = '.kwcb{margin:0 0 28px;padding:0 0 24px;border-bottom:1px solid rgba(14,14,16,.1)}'
    + '.kwcb h3{margin:0 0 6px}.kwcb .kwcb-note{font-size:14px;color:var(--ink-secondary,#5A5A60);margin:0 0 14px}'
    + '.kwcb-test{display:inline-block;margin:0 0 12px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.04em;background:#FFF4D6;color:#7A4E00;border:1px solid rgba(138,90,0,.3)}'
    + '.kwcb fieldset{border:0;margin:0 0 14px;padding:0}.kwcb legend{font-weight:600;font-size:14px;margin-bottom:8px}'
    + '.kwcb-slots{display:flex;flex-wrap:wrap;gap:8px}.kwcb-slots label{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 14px;border:1px solid rgba(14,14,16,.18);border-radius:10px;cursor:pointer}'
    + '.kwcb select,.kwcb input[type=tel]{width:100%;min-height:44px;padding:0 12px;border-radius:8px;border:1px solid rgba(14,14,16,.18);font:inherit;box-sizing:border-box}'
    + '.kwcb-err{color:#B3311B;font-size:14px;margin:10px 0 0}.kwcb-ref{font-family:var(--font-mono,ui-monospace,monospace);font-size:20px;font-weight:700;letter-spacing:.06em}'
    + '.kwcb-done{padding:16px;border-radius:12px;background:rgba(46,125,50,.06);border:1px solid rgba(46,125,50,.25)}'
    + '.kwcb-list{margin:10px 0 0;padding-left:18px;font-size:14px}';

  var panel = null;
  function mount() {
    if (panel) return panel;
    var style = doc.createElement('style'); style.textContent = CSS; doc.head.appendChild(style);
    panel = doc.createElement('div');
    panel.className = 'kwcb'; panel.id = 'consult-online';
    panel.setAttribute('aria-live', 'polite');
    var host = doc.getElementById('book-form');
    if (host) host.insertBefore(panel, host.firstChild);
    return panel;
  }
  function show(html) { mount().innerHTML = html; }

  /* ---------- availability ---------- */
  var avail = null;
  function load() {
    return auth().request('/consult/availability').then(function (a) {
      avail = a;
      var map = {};
      (a.teachers || []).forEach(function (t) { map[t.teacherId] = t; });
      if (global.KWLiveUI) global.KWLiveUI.applyAvailability(map);
      return a;
    });
  }

  function renderPicker(error) {
    var a = avail;
    var head = '<h3>Book a same-day consultation online</h3>' + (a.testMode ? '<span class="kwcb-test">TEST MODE · no real payment</span>' : '');
    if (!a.enabled) return show(head + '<p class="kwcb-note">Online booking is not available right now. You can still send a request below.</p>');
    if (!a.bookingOpen) return show(head + '<p class="kwcb-note">' + esc(a.message) + '</p>' + myBookingsHtml());
    var bookable = (a.teachers || []).filter(function (t) { return t.availableToday; });
    if (!bookable.length) return show(head + '<p class="kwcb-note">No teacher is available for a consultation today. You can send a request below instead.</p>' + myBookingsHtml());
    var opts = bookable.map(function (t) { return '<option value="' + esc(t.teacherId) + '">' + esc(teacherName(t.teacherId)) + '</option>'; }).join('');
    show(head
      + '<p class="kwcb-note">' + esc(a.durationMinutes) + ' minutes today on Google Meet, between ' + esc(a.appointmentWindow.start) + ' and ' + esc(a.appointmentWindow.end) + ' IST. Fee: <strong>' + rupees(a.fee.amountPaise) + '</strong>, paid securely through Cashfree.</p>'
      + '<label for="kwcb-teacher"><strong>Teacher</strong></label><select id="kwcb-teacher">' + opts + '</select>'
      + '<fieldset><legend>Time (IST)</legend><div class="kwcb-slots" id="kwcb-slots"></div></fieldset>'
      + '<button type="button" class="btn btn-live" id="kwcb-pay">Pay ' + rupees(a.fee.amountPaise) + ' and book</button>'
      + (error ? '<p class="kwcb-err" role="alert">' + esc(error) + '</p>' : '')
      + myBookingsHtml());
    var sel = doc.getElementById('kwcb-teacher');
    function slots() {
      var t = bookable.filter(function (x) { return x.teacherId === sel.value; })[0];
      doc.getElementById('kwcb-slots').innerHTML = t.slots.map(function (s, i) {
        return '<label><input type="radio" name="kwcb-slot" value="' + esc(s.start) + '"' + (i ? '' : ' checked') + '> ' + esc(s.start) + '–' + esc(s.end) + '</label>';
      }).join('');
    }
    sel.addEventListener('change', slots); slots();
    doc.getElementById('kwcb-pay').addEventListener('click', function () {
      var slot = doc.querySelector('input[name=kwcb-slot]:checked');
      if (slot) begin(sel.value, slot.value);
    });
  }

  var myRefs = [];
  function myBookingsHtml() {
    if (!myRefs.length) return '';
    return '<p class="kwcb-note" style="margin-top:16px">Your consultation bookings:</p><ul class="kwcb-list">' + myRefs.map(function (b) {
      return '<li><span class="kwcb-ref" style="font-size:14px">' + esc(b.ref) + '</span> · ' + esc(niceDate(b.date)) + ', ' + esc(b.slotStart) + ' IST · ' + esc(statusWord(b.status)) + '</li>';
    }).join('') + '</ul>';
  }
  function statusWord(s) {
    return { confirmed: 'confirmed', pending: 'awaiting payment', review: 'being checked by Klarweg', cancelled: 'cancelled by Klarweg' }[s] || s;
  }

  /* ---------- booking ---------- */
  function begin(teacherId, slot) {
    var A = auth();
    A.refresh({ force: true }).then(function (s) {
      if (!s.authenticated) {
        return show('<h3>Sign in to book</h3><p class="kwcb-note">Your booking is attached to your Klarweg account, so you can see its reference again on any device.</p>'
          + '<a class="btn btn-live" href="' + esc(A.accountUrl({ mode: 'login', next: global.location.pathname + '#book' })) + '">Sign in or create account</a>');
      }
      if (!A.hasPhone()) return askPhone(teacherId, slot);
      create(teacherId, slot);
    });
  }
  function askPhone(teacherId, slot, error) {
    show('<h3>Add a phone number</h3><p class="kwcb-note">Cashfree, our payment partner, requires a phone number to process the payment. It is saved to your Klarweg account.</p>'
      + '<label for="kwcb-phone"><strong>Phone number</strong></label><input id="kwcb-phone" type="tel" autocomplete="tel" placeholder="9876543210">'
      + '<p style="margin-top:12px"><button type="button" class="btn btn-live" id="kwcb-phone-go">Continue to payment</button></p>'
      + (error ? '<p class="kwcb-err" role="alert">' + esc(error) + '</p>' : ''));
    doc.getElementById('kwcb-phone-go').addEventListener('click', function () {
      auth().updatePhone(doc.getElementById('kwcb-phone').value).then(function () { create(teacherId, slot); }, function (e) { askPhone(teacherId, slot, e.message); });
    });
  }
  function create(teacherId, slot) {
    show('<p class="kwcb-note">Holding your time and opening the secure payment…</p>');
    auth().request('/consult/bookings', { method: 'POST', body: { teacher_id: teacherId, slot: slot } }).then(function (r) {
      rememberRef(r.booking.ref);
      return loadSdk().then(function (Cashfree) {
        var cf = Cashfree({ mode: r.checkout && r.checkout.mode === 'production' ? 'production' : 'sandbox' });
        return cf.checkout({ paymentSessionId: r.paymentSessionId, redirectTarget: '_self' });
      });
    }).catch(function (e) {
      load().then(function () { renderPicker(e && e.message ? e.message : 'The booking could not be started. Please try again.'); }, function () { renderPicker('The booking could not be started. Please try again.'); });
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

  /* ---------- return from Cashfree: the Worker's verified status only ---------- */
  /* The first answer is shown at once (a failed or cancelled payment
     offers Continue payment straight away); while still pending, it keeps
     checking quietly and re-renders only when the status changes. */
  var trackId = 0;
  function track(ref) {
    rememberRef(ref);
    var my = ++trackId, tries = 0, shown = null;
    show('<p class="kwcb-note">Confirming your payment with Cashfree… Booking reference <span class="kwcb-ref">' + esc(ref) + '</span></p>');
    (function tick() {
      tries++;
      auth().request('/consult/bookings/' + encodeURIComponent(ref)).then(function (r) {
        if (my !== trackId) return;
        var b = r.booking;
        if (b.status !== shown) { shown = b.status; renderResult(b); }
        if (b.status === 'pending' && tries < POLL_TRIES) setTimeout(tick, POLL_MS);
      }, function (e) {
        if (my !== trackId) return;
        if (e && e.code === 'unauthorized') return show('<p class="kwcb-note">Sign in to see booking <span class="kwcb-ref">' + esc(ref) + '</span>.</p>');
        if (tries < POLL_TRIES) return setTimeout(tick, POLL_MS);
        show('<p class="kwcb-note">We could not check booking <span class="kwcb-ref">' + esc(ref) + '</span> just now. Reload this page in a minute.</p>');
      });
    })();
  }
  function renderResult(b) {
    var when = esc(niceDate(b.date)) + ', ' + esc(b.slotStart) + '–' + esc(b.slotEnd) + ' IST';
    var contact = esc((D.contact && D.contact.email) || 'klarwegofficial@gmail.com');
    if (b.status === 'confirmed') {
      show('<div class="kwcb-done" tabindex="-1" id="kwcb-done"><h3>Your consultation is booked</h3>'
        + (b.testMode ? '<span class="kwcb-test">TEST MODE · no real payment</span>' : '')
        + '<p>Booking reference</p><p class="kwcb-ref">' + esc(b.ref) + '</p>'
        + '<p>' + esc(teacherName(b.teacherId)) + ' · ' + when + ' · ' + esc(b.durationMinutes) + ' minutes on Google Meet</p>'
        + '<div id="kwcb-join"><p class="kwcb-note">Checking your joining link…</p></div>'
        + '<p class="kwcb-note">Keep this reference: take a screenshot or print this page. You can see it again here whenever you are signed in.</p>'
        + '<button type="button" class="btn btn-secondary" id="kwcb-print">Print</button></div>');
      loadJoin(b.ref);
      return;
    }
    if (b.status === 'pending') {
      /* Continue payment posts the same teacher and slot: the Worker returns
         the SAME open Cashfree order, so a retry never creates a second charge. */
      pendingBooking = b;
      return show('<h3>Payment not completed yet</h3><p class="kwcb-note">Booking <span class="kwcb-ref">' + esc(b.ref) + '</span> (' + when + ') is held for you. If the payment failed or you cancelled it, nothing was charged and you can try again. If you did pay, it can take a minute to be confirmed. An unpaid hold is released automatically after 20 minutes.</p>'
        + '<p style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="btn btn-live" id="kwcb-resume">Continue payment</button>'
        + '<button type="button" class="btn btn-secondary" id="kwcb-again">Check again</button></p>');
    }
    if (b.status === 'review') {
      return show('<h3>Your payment is being checked</h3><p class="kwcb-note">We received a payment for booking <span class="kwcb-ref">' + esc(b.ref) + '</span> but could not confirm the time automatically. A person at Klarweg checks it. Please email ' + contact + ' with your reference.</p>');
    }
    if (b.status === 'cancelled') {
      return show('<h3>This booking was cancelled</h3><p class="kwcb-note">Booking <span class="kwcb-ref">' + esc(b.ref) + '</span> was cancelled by Klarweg. For questions about the refund, email ' + contact + ' with the reference.</p>');
    }
    show('<h3>This booking was not completed</h3><p class="kwcb-note">Booking <span class="kwcb-ref">' + esc(b.ref) + '</span> was not paid in time, so the slot was released. If money left your account for it, email ' + contact + ' with the reference.</p>'
      + '<button type="button" class="btn btn-secondary" id="kwcb-again">Choose a time</button>');
  }

  /* Joining link: only from the Worker, only for the signed-in owner of a
     confirmed booking. Never claims a link that isn't configured. */
  var MEET_RE = /^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
  function loadJoin(ref) {
    var box = function (html) { var el = doc.getElementById('kwcb-join'); if (el) el.innerHTML = html; };
    var contact = esc((D.contact && D.contact.email) || 'klarwegofficial@gmail.com');
    auth().request('/consult/bookings/' + encodeURIComponent(ref) + '/join').then(function (r) {
      if (r.joinUrl && MEET_RE.test(r.joinUrl)) {
        return box('<p><a class="btn btn-live" href="' + esc(r.joinUrl) + '" target="_blank" rel="noopener noreferrer">Join on Google Meet</a></p>'
          + '<p class="kwcb-note">This link is for your booking only. Please don’t share it.</p>');
      }
      box('<p class="kwcb-note">The joining link for this consultation has not been set up yet. Please email ' + contact + ' with your booking reference.</p>');
    }, function () {
      box('<p class="kwcb-note">We could not load your joining link just now. Reload this page in a minute, or email ' + contact + ' with your booking reference.</p>');
    });
  }

  var pendingBooking = null;
  doc.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'kwcb-print') return global.print();
    if (e.target && /^kwcb-(resume|again)$/.test(e.target.id)) trackId++;   // any action stops a quiet status check
    if (e.target && e.target.id === 'kwcb-resume' && pendingBooking) return create(pendingBooking.teacherId, pendingBooking.slotStart);
    if (e.target && e.target.id === 'kwcb-again') {
      var ref = new URLSearchParams(global.location.search).get('consult_ref');
      if (ref && /^KWC-[2-9A-HJ-NP-Z]{8}$/.test(ref) && e.target.textContent === 'Check again') return track(ref);
      load().then(function () { renderPicker(); });
    }
  });

  function start() {
    if (!auth()) return;
    var ref = new URLSearchParams(global.location.search).get('consult_ref');
    var mine = auth().refresh().then(function (s) {
      if (!s.authenticated) return;
      return auth().request('/consult/bookings').then(function (r) { myRefs = r.bookings || []; }, function () {});
    }, function () {});
    load().then(function () {
      if (ref && /^KWC-[2-9A-HJ-NP-Z]{8}$/.test(ref)) return track(ref);
      mine.then(function () { renderPicker(); });
    }, function () {
      show('<p class="kwcb-note">Online booking could not be reached just now. You can send a request below instead.</p>');
    });
  }

  global.KWConsult = { start: start };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start); else start();
})(window);
