/* ============================================================
   KLARWEG · MY ACCOUNT → LIVE CLASSES (kw-account-live.js)
   Lists the signed-in learner's ₹100 demos (GET /consult/bookings) and
   live-course enrolments (GET /enrol/enrolments). Statuses come from the
   access Worker, which verifies every payment with Cashfree; this file
   only displays them. Hidden when the learner has none.
   ============================================================ */
(function (global) {
  'use strict';
  var doc = global.document;
  var section = doc.getElementById('live'), list = doc.getElementById('live-list');
  if (!section || !list || !global.KWAuth) return;
  var NAMES = { 'reegan-gandhi': 'Reegan Gandhi', 'candidate-01': 'Your teacher' };

  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function inr(p) { return '₹' + (p / 100).toLocaleString('en-IN'); }
  function date(iso, wd) {
    if (!iso) return 'To be announced';
    var p = String(iso).split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString('en-IN', { weekday: wd ? 'short' : undefined, day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  }
  function t12(h) { var x = +h.slice(0, 2); return (x % 12 || 12) + ':' + h.slice(3) + (x < 12 ? ' AM' : ' PM'); }
  function get(path) { return global.KWAuth.request(path).catch(function () { return null; }); }

  var BADGE = {
    confirmed: ['Confirmed', 'ok'], enrolled: ['Enrolled · paid', 'ok'],
    pending: ['Payment pending', 'wait'], review: ['Being checked by Klarweg', 'wait'],
    cancelled: ['Cancelled', 'off']
  };
  function badge(status, refund) {
    var b = BADGE[status] || [status, 'off'];
    var extra = refund === 'refunded' ? ' · refunded' : refund === 'requested' ? ' · refund in progress' : '';
    return '<span class="live-badge live-' + b[1] + '">' + esc(b[0] + extra) + '</span>';
  }

  function render(demos, enrols) {
    var items = [];
    demos.filter(function (d) { return d.kind === 'demo' || d.kind === 'same-day'; }).forEach(function (d) {
      items.push('<li class="live-item"><div><p class="live-kind">' + (d.kind === 'demo' ? '₹100 demo class' : '₹100 consultation') + '</p>'
        + '<p class="live-title">' + esc(NAMES[d.teacherId] || 'Your teacher') + ' · ' + esc(date(d.date, true)) + ', ' + t12(d.slotStart) + ' IST</p>'
        + '<p class="live-meta">Reference <code>' + esc(d.ref) + '</code> · ' + inr(d.amountPaise) + (d.testMode ? ' (test)' : '') + '</p></div>'
        + '<div class="live-side">' + badge(d.status, d.refundStatus)
        + '<a class="live-link" href="../live-classes.html?demo_ref=' + encodeURIComponent(d.ref) + '#demo">' + (d.status === 'confirmed' ? 'Joining link and details' : 'View status') + '</a></div></li>');
    });
    enrols.forEach(function (e) {
      var dates = e.startDate ? date(e.startDate) + ' – ' + date(e.endDate) : 'Dates to be announced';
      items.push('<li class="live-item"><div><p class="live-kind">Live course</p>'
        + '<p class="live-title">' + esc(e.courseTitle) + '</p>'
        + '<p class="live-meta">' + esc(dates) + (e.schedule ? ' · ' + esc(e.schedule) : '') + '</p>'
        + '<p class="live-meta">Reference <code>' + esc(e.ref) + '</code> · ' + (e.paidPaise ? 'paid ' + inr(e.paidPaise) : 'due ' + inr(e.amountDuePaise)) + (e.couponCode ? ' · ' + esc(e.couponCode) : '') + (e.testMode ? ' (test)' : '') + '</p></div>'
        + '<div class="live-side">' + badge(e.status, e.refundStatus)
        + '<a class="live-link" href="../live-classes.html?enrol_ref=' + encodeURIComponent(e.ref) + '#courses">Details</a></div></li>');
    });
    if (!items.length) { section.hidden = true; return; }
    list.innerHTML = '<ul class="live-list">' + items.join('') + '</ul>';
    section.hidden = false;
  }

  var css = doc.createElement('style');
  css.textContent = '.live-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}'
    + '.live-item{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:16px;border:1px solid var(--hairline,rgba(14,14,16,.09));border-radius:12px;background:var(--canvas,#FAFAF7)}'
    + '.live-kind{margin:0 0 4px;font:500 11px var(--font-mono,monospace);letter-spacing:.1em;text-transform:uppercase;color:#1D5A45}'
    + '.live-title{margin:0 0 4px;font-weight:600}.live-meta{margin:0;font-size:13px;color:var(--ink-secondary,#5A5A60)}'
    + '.live-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px}.live-link{font-size:14px;font-weight:600;color:#1F4E4A}'
    + '.live-badge{font-size:12px;font-weight:600;padding:4px 12px;border-radius:999px}.live-ok{background:#E8F1EC;color:#1D5A45}.live-wait{background:#F1F4F8;color:#24324A}.live-off{background:#F4F3EE;color:#5A5A60}'
    + '@media (max-width:560px){.live-side{align-items:flex-start}}';
  doc.head.appendChild(css);

  function load(s) {
    if (!s || !s.authenticated) { section.hidden = true; return; }
    Promise.all([get('/consult/bookings'), get('/enrol/enrolments')]).then(function (r) {
      render((r[0] && r[0].bookings) || [], (r[1] && r[1].enrolments) || []);
    });
  }
  var last = null;
  global.KWAuth.onChange(function (s) { var k = s && s.authenticated ? s.user.id : null; if (k !== last) { last = k; load(s); } });
  var s0 = global.KWAuth.getState();
  if (s0 && s0.authenticated) { last = s0.user.id; load(s0); }
})(window);
