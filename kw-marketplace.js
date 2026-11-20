/* ============================================================
   KLARWEG · LIVE TEACHER MARKETPLACE (kw-marketplace.js)
   ------------------------------------------------------------
   Renders live-classes.html from live-classes-data.js (KWLive) and
   live-marketplace-pricing.js (KWLiveMarketplace), and runs:
     · filters (level, format, teacher);
     · the ₹100 demo booking (GET /demo/availability, POST /demo/bookings,
       status/join via /consult/bookings/:ref, reschedule);
     · the course checkout (GET /enrol/catalog, GET /enrol/quote,
       POST /enrol/checkout, status via /enrol/enrolments/:ref).

   What it never does:
     · decide an amount. Prices shown before a server quote are labelled
       as such; the Worker computes every amount and refuses a payment if
       the amount the learner saw is not the amount due.
     · decide that a payment succeeded. Only the Worker's status, verified
       with Cashfree's API, confirms a booking or an enrolment; Cashfree's
       return redirect proves nothing.
     · offer a time the Worker did not return as available.
     · call any payment route while marketplace.demoBookingEnabled /
       courseCheckoutEnabled are false in live-classes-data.js.
   ============================================================ */
(function (global) {
  'use strict';
  var doc = global.document;
  var D = global.KWLive, P = global.KWLiveMarketplace;
  if (!D || !P || !doc.getElementById('teacher-grid')) return;
  var M = D.marketplace || { verified: {} };
  var SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';
  var CONTACT = (D.contact && D.contact.email) || 'klarwegofficial@gmail.com';
  var TBA = M.scheduleTBA || 'To be announced';
  var FORMAT_LABEL = { group: 'Group classes', individual: 'One-to-One classes' };
  var FORMAT_SHORT = { group: 'Group', individual: 'One-to-One' };

  /* ---------------- helpers ---------------- */
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function inr(rupees) { return '₹' + Number(rupees).toLocaleString('en-IN'); }
  function inrP(paise) { return inr(paise / 100); }
  function niceDate(iso, opts) {
    if (!iso) return TBA;
    var p = String(iso).split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString('en-IN', Object.assign({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }, opts || {}));
  }
  function dayLabel(iso) { return niceDate(iso, { weekday: 'long', day: 'numeric', month: 'short', year: undefined }); }
  function to12h(hhmm) {
    var h = +hhmm.slice(0, 2), m = hhmm.slice(3);
    return (h % 12 || 12) + ':' + m + (h < 12 ? ' AM' : ' PM');
  }
  function initials(name) { return String(name).split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(); }
  function qs(name) { try { return new URL(global.location.href).searchParams.get(name); } catch (e) { return null; } }
  function auth() { return global.KWAuth || null; }
  function authState() { var a = auth(); return a ? a.getState() : { authenticated: false, user: null }; }
  function store(k, v) { try { if (v == null) global.sessionStorage.removeItem(k); else global.sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function recall(k) { try { return JSON.parse(global.sessionStorage.getItem(k) || 'null'); } catch (e) { return null; } }

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

  var sdkPromise = null;
  function cashfree(mode) {
    if (!sdkPromise) {
      sdkPromise = global.Cashfree ? Promise.resolve() : new Promise(function (res, rej) {
        var s = doc.createElement('script');
        s.src = SDK_URL; s.onload = res; s.onerror = function () { sdkPromise = null; rej(new Error('The secure payment page could not be loaded. Nothing has been charged. Please try again.')); };
        doc.head.appendChild(s);
      });
    }
    return sdkPromise.then(function () { return global.Cashfree({ mode: mode === 'production' ? 'production' : 'sandbox' }); });
  }
  function openPayment(r) {
    return cashfree(r.checkout && r.checkout.mode).then(function (cf) {
      return cf.checkout({ paymentSessionId: r.paymentSessionId, redirectTarget: '_self' });
    });
  }

  /* ---------------- data ---------------- */
  var byId = {};
  (D.teachers || []).forEach(function (t) { if (!t.draft) byId[t.id] = t; });
  /* A verified teacher needs a full, consented profile (not a name-only
     listing) AND an entry in marketplace.verified. */
  function isVerified(id) {
    var t = byId[id], v = M.verified && M.verified[id];
    return !!(t && v && t.tier !== 'listed' && t.consent && (!t.unconfirmed || !t.unconfirmed.length));
  }
  var verifiedIds = Object.keys(M.verified || {}).filter(isVerified);
  var unverified = (D.teachers || []).filter(function (t) { return !t.draft && !isVerified(t.id); });
  function vOf(id) { return M.verified[id]; }
  function teacherLevels(id) { return (vOf(id).levels || []).filter(function (l) { return P.LEVELS.indexOf(l) >= 0; }); }
  function teacherFormats(id) { return (vOf(id).formats || []).filter(function (f) { return P.FORMATS.indexOf(f) >= 0; }); }
  function demoTeachers() { return verifiedIds.filter(function (id) { return vOf(id).demo === true; }); }
  function courseIdOf(t, l, f) { return 'live-' + t + '-' + l.toLowerCase() + '-' + f; }
  function allCourses() {
    var out = [];
    verifiedIds.forEach(function (t) {
      teacherLevels(t).forEach(function (l) {
        teacherFormats(t).forEach(function (f) { out.push({ id: courseIdOf(t, l, f), teacherId: t, level: l, format: f, price: P.prices(t, l, f) }); });
      });
    });
    return out;
  }
  var COURSES = allCourses();
  function courseById(id) { for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) return COURSES[i]; return null; }

  var state = { level: 'all', format: 'all', teacher: 'all', catalog: null, catalogError: false };

  /* ---------------- hero price card ---------------- */
  function heroPrices() {
    ['group', 'individual'].forEach(function (f) {
      var list = COURSES.filter(function (c) { return c.format === f; });
      if (!list.length) return;
      var min = list.reduce(function (a, c) { return c.price.discounted < a.price.discounted ? c : a; });
      var el = doc.querySelector('[data-pc="' + f + '"]'), o = doc.querySelector('[data-pc-orig="' + f + '"]');
      if (el) el.textContent = inr(min.price.discounted);
      if (o) o.textContent = inr(min.price.original);
    });
  }

  /* ---------------- filters ---------------- */
  function initFilters() {
    var sel = doc.getElementById('f-teacher');
    verifiedIds.forEach(function (id) {
      var o = doc.createElement('option'); o.value = id; o.textContent = byId[id].name; sel.appendChild(o);
    });
    doc.querySelectorAll('input[name="f-level"]').forEach(function (i) { i.addEventListener('change', function () { state.level = i.value; renderAll(); }); });
    doc.querySelectorAll('input[name="f-format"]').forEach(function (i) { i.addEventListener('change', function () { state.format = i.value; renderAll(); }); });
    sel.addEventListener('change', function () { state.teacher = sel.value; renderAll(); });
    doc.querySelectorAll('[data-reset-filters]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.level = state.format = state.teacher = 'all';
        doc.querySelector('input[name="f-level"][value="all"]').checked = true;
        doc.querySelector('input[name="f-format"][value="all"]').checked = true;
        sel.value = 'all';
        renderAll();
      });
    });
  }
  function teacherMatches(id) {
    if (state.teacher !== 'all' && state.teacher !== id) return false;
    if (state.level !== 'all' && teacherLevels(id).indexOf(state.level) < 0) return false;
    if (state.format !== 'all' && teacherFormats(id).indexOf(state.format) < 0) return false;
    return true;
  }
  function courseMatches(c) {
    return (state.teacher === 'all' || state.teacher === c.teacherId) && (state.level === 'all' || state.level === c.level) && (state.format === 'all' || state.format === c.format);
  }

  /* ---------------- teacher cards ---------------- */
  function media(t) {
    if (t.photo && t.photoConsent) return '<img src="' + esc(t.photo) + '" alt="' + esc(t.photoAlt || ('Portrait of ' + t.name)) + '" loading="lazy" width="400" height="300">';
    return '<span class="mk-monogram" aria-hidden="true">' + esc(initials(t.name)) + '</span>';
  }
  function priceBlock(id, f) {
    var lv = teacherLevels(id);
    if (!lv.length || teacherFormats(id).indexOf(f) < 0) return '';
    var p = P.prices(id, lv[0], f);
    return '<div><p class="mk-tp-label">' + FORMAT_LABEL[f] + '</p><p class="mk-tp-price">' + inr(p.discounted) + '<s>' + inr(p.original) + '</s></p><p class="mk-tp-code">with <code>' + p.coupon + '</code></p></div>';
  }
  function teacherCard(id) {
    var t = byId[id], v = vOf(id);
    var langs = (t.teachesIn || []).join(' · ');
    var levels = teacherLevels(id).map(function (l) { return '<span class="mk-lvl">' + l + '</span>'; }).join('');
    var formats = teacherFormats(id).map(function (f) { return FORMAT_SHORT[f]; }).join(' · ');
    var creds = '';
    if (M.showCredentials) {
      var c = [].concat(t.experience ? [t.experience] : [], t.qualifications || []);
      if (c.length) creds = '<dt>Credentials</dt><dd>' + c.map(esc).join(' · ') + '</dd>';
    }
    return '<article class="mk-tcard" data-teacher="' + esc(id) + '" aria-labelledby="t-' + esc(id) + '">'
      + '<div class="mk-tcard-media">' + media(t) + '</div>'
      + '<div class="mk-tcard-body">'
      + '<div class="mk-tcard-top"><h3 id="t-' + esc(id) + '">' + esc(t.name) + '</h3><span class="mk-verified"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 6.2 5 8.6l4.5-5.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Verified profile</span></div>'
      + (t.headline ? '<p class="mk-tcard-headline">' + esc(t.headline) + '</p>' : '')
      + '<dl class="mk-facts">'
      + (langs ? '<dt>Teaches in</dt><dd>' + esc(langs) + '</dd>' : '')
      + '<dt>Levels</dt><dd><span class="mk-lvls">' + levels + '</span></dd>'
      + '<dt>Formats</dt><dd>' + esc(formats) + '</dd>'
      + creds
      + '</dl>'
      + (t.specialisms && t.specialisms.length ? '<ul class="mk-specialisms" aria-label="Specialisms">' + t.specialisms.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '')
      + '<div class="mk-tcard-prices">' + priceBlock(id, 'group') + priceBlock(id, 'individual') + '</div>'
      + '<div class="mk-tcard-actions">'
      + (v.demo ? '<button type="button" class="mk-btn mk-btn-primary" data-book-demo="' + esc(id) + '">Book Demo — ₹100</button>' : '')
      + '<button type="button" class="mk-btn mk-btn-ghost" data-show-courses="' + esc(id) + '">View courses</button>'
      + '</div></div></article>';
  }
  function renderTeachers() {
    var grid = doc.getElementById('teacher-grid');
    var shown = verifiedIds.filter(teacherMatches);
    grid.innerHTML = shown.length ? shown.map(teacherCard).join('')
      : '<p class="mk-empty">No verified teacher matches these filters yet. <button type="button" class="mk-link" data-reset-filters>Show all teachers</button></p>';
    grid.querySelectorAll('[data-reset-filters]').forEach(function (b) { b.addEventListener('click', function () { doc.querySelector('[data-reset-filters]').click(); }); });
    grid.querySelectorAll('[data-book-demo]').forEach(function (b) {
      b.addEventListener('click', function () { demo.teacher = b.getAttribute('data-book-demo'); demo.date = demo.slot = null; renderDemo(); scrollTo('demo'); });
    });
    grid.querySelectorAll('[data-show-courses]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.teacher = b.getAttribute('data-show-courses');
        doc.getElementById('f-teacher').value = state.teacher;
        renderAll(); scrollTo('courses');
      });
    });
    var j = doc.getElementById('joining');
    if (M.showUnverifiedTeachers && unverified.length && state.teacher === 'all') {
      doc.getElementById('joining-list').innerHTML = unverified.map(function (t) {
        return '<li><span class="mk-mini-mono" aria-hidden="true">' + esc(initials(t.name)) + '</span><span><strong>' + esc(t.name) + '</strong><span class="mk-j-meta">' + esc(t.title || 'German Language Teacher') + ' · profile in verification</span></span></li>';
      }).join('');
      j.hidden = false;
    } else j.hidden = true;
  }
  function scrollTo(id) {
    var el = doc.getElementById(id);
    if (el) el.scrollIntoView({ behavior: global.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  /* ---------------- course cards ---------------- */
  /* The batch a course card summarises: an open one first, then a full or
     announced one, else none (dates "To be announced"). */
  function catalogCourse(id) {
    var list = state.catalog && state.catalog.marketplace ? state.catalog.marketplace.courses : [];
    for (var i = 0; i < list.length; i++) if (list[i].courseId === id) return list[i];
    return null;
  }
  function batchesOf(id) { var c = catalogCourse(id); return c ? c.batches : []; }
  function leadBatch(id) {
    var b = batchesOf(id);
    var rank = { open: 0, 'payments-off': 1, full: 2, 'awaiting-schedule': 3, closed: 4 };
    return b.slice().sort(function (x, y) { return (rank[x.state] - rank[y.state]) || String(x.startDate || '9').localeCompare(String(y.startDate || '9')); })[0] || null;
  }
  var STATE_TEXT = {
    open: function (b) { return 'Enrolment open · ' + b.seatsLeft + (b.seatsLeft === 1 ? ' place' : ' places') + ' left'; },
    'payments-off': function () { return 'Schedule announced · enrolment opens soon'; },
    full: function () { return 'Fully booked'; },
    closed: function () { return 'Enrolment closed'; },
    'awaiting-schedule': function () { return 'Schedule to be announced'; }
  };
  function courseCard(c) {
    var t = byId[c.teacherId], b = leadBatch(c.id);
    var st = b ? b.state : 'awaiting-schedule';
    var cc = catalogCourse(c.id);
    var couponActive = !cc || cc.couponActive !== false;
    return '<article class="mk-ccard" data-course="' + esc(c.id) + '">'
      + '<div class="mk-ccard-tags"><span class="mk-tag-level">' + c.level + '</span><span class="mk-tag-format">' + FORMAT_LABEL[c.format] + '</span></div>'
      + '<h3>German ' + c.level + ' · ' + FORMAT_SHORT[c.format] + '</h3>'
      + '<p class="mk-by">with ' + esc(t.name) + '</p>'
      + '<div class="mk-price">' + (couponActive ? '<strong>' + inr(c.price.discounted) + '</strong><s>' + inr(c.price.original) + '</s><span class="mk-after">after coupon</span>' : '<strong>' + inr(c.price.original) + '</strong>') + '</div>'
      + (couponActive ? '<div class="mk-coupon-line">Code <code>' + c.price.coupon + '</code> saves ' + inr(c.price.discount) + '<button type="button" class="mk-copy" data-copy="' + c.price.coupon + '" aria-label="Copy coupon code ' + c.price.coupon + '">Copy</button></div>' : '')
      + '<dl class="mk-dates"><div><dt>Starts</dt><dd>' + esc(b && b.startDate ? niceDate(b.startDate) : TBA) + '</dd></div><div><dt>Ends</dt><dd>' + esc(b && b.endDate ? niceDate(b.endDate) : TBA) + '</dd></div></dl>'
      + '<span class="mk-state" data-state="' + st + '">' + esc(STATE_TEXT[st](b || {})) + '</span>'
      + '<button type="button" class="mk-btn ' + (st === 'open' ? 'mk-btn-primary' : 'mk-btn-ghost') + ' mk-btn-block" data-choose="' + esc(c.id) + '">' + (st === 'open' ? 'Choose and enrol' : 'View course details') + '</button>'
      + '</article>';
  }
  function renderCourses() {
    var list = COURSES.filter(courseMatches);
    var grid = doc.getElementById('course-grid');
    grid.innerHTML = list.map(courseCard).join('');
    doc.getElementById('course-empty').hidden = list.length > 0;
    grid.querySelectorAll('[data-choose]').forEach(function (b) { b.addEventListener('click', function () { openCheckout(b.getAttribute('data-choose')); }); });
    grid.querySelectorAll('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var code = b.getAttribute('data-copy');
        var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1600); };
        if (global.navigator.clipboard) global.navigator.clipboard.writeText(code).then(done, done); else done();
      });
    });
    var n = doc.getElementById('filter-count');
    var tn = verifiedIds.filter(teacherMatches).length;
    n.textContent = tn + (tn === 1 ? ' teacher' : ' teachers') + ' · ' + list.length + (list.length === 1 ? ' course' : ' courses');
  }
  function renderAll() { renderTeachers(); renderCourses(); }

  /* =====================================================================
     DEMO BOOKING
     ===================================================================== */
  var demo = { teacher: null, date: null, slot: null, avail: null, loading: false, error: null, busy: false, terms: false, name: '', phone: '' };
  function demoOn() { return M.demoBookingEnabled === true; }
  function loadAvailability() {
    if (!demoOn()) return Promise.resolve();
    demo.loading = true; renderDemo();
    return call('/demo/availability').then(function (r) { demo.avail = r; demo.error = null; }, function (e) { demo.error = e.message; })
      .then(function () { demo.loading = false; renderDemo(); });
  }
  function availFor(id) {
    if (!demo.avail || !demo.avail.teachers) return null;
    for (var i = 0; i < demo.avail.teachers.length; i++) if (demo.avail.teachers[i].teacherId === id) return demo.avail.teachers[i];
    return null;
  }
  function slotsFor(id, date) {
    var a = availFor(id); if (!a) return [];
    for (var i = 0; i < a.dates.length; i++) if (a.dates[i].date === date) return a.dates[i].slots;
    return [];
  }
  function step(n, title, body, disabled) {
    return '<div class="mk-step"' + (disabled ? ' aria-disabled="true"' : '') + '><p class="mk-step-h"><span class="mk-step-n">' + n + '</span>' + title + '</p>' + body + '</div>';
  }
  function demoClosedPanel(msg) {
    var names = demoTeachers().map(function (id) { return esc(byId[id].name); }).join(', ');
    return '<p class="mk-eyebrow">₹100 · 20 minutes · Google Meet</p>'
      + '<h3 class="mk-h3">Online demo booking opens soon.</h3>'
      + '<p class="mk-sub">' + esc(msg || 'Demo classes run on Fridays and Sundays after 4:00 PM IST. Times appear here as soon as each teacher publishes them; no payment is taken until then.') + '</p>'
      + (names ? '<p class="mk-fine">Teachers offering demos: ' + names + '.</p>' : '')
      + '<p style="margin-top:24px"><a class="mk-btn mk-btn-ghost" href="contact.html">Ask a question</a></p>';
  }
  function renderDemo() {
    var panel = doc.getElementById('demo-panel');
    if (!panel || panel.getAttribute('data-mode') === 'status') return;
    var teachers = demoTeachers();
    if (!demoOn()) { panel.innerHTML = demoClosedPanel(); return; }
    if (demo.loading && !demo.avail) { panel.innerHTML = '<p><span class="mk-spinner"></span>Loading available times…</p>'; return; }
    if (demo.error) { panel.innerHTML = '<div class="mk-note mk-note-err"><strong>Available times could not be loaded.</strong>' + esc(demo.error) + '</div><button type="button" class="mk-btn mk-btn-ghost" data-retry>Try again</button>'; panel.querySelector('[data-retry]').onclick = loadAvailability; return; }
    if (!demo.avail || !demo.avail.enabled) { panel.innerHTML = demoClosedPanel(demo.avail && demo.avail.message); return; }
    if (!demo.teacher && teachers.length === 1) demo.teacher = teachers[0];
    var a = demo.teacher ? availFor(demo.teacher) : null;
    var s = authState();
    var html = demo.avail.testMode ? '<div class="mk-note mk-note-test"><strong>Test mode</strong>Payments use Cashfree\'s sandbox. No real money is taken.</div>' : '';
    if (demo.notice) html += '<div class="mk-note ' + (demo.notice.ok ? 'mk-note-ok' : 'mk-note-err') + '" role="alert">' + esc(demo.notice.text) + '</div>';

    html += step(1, 'Choose your teacher', '<div class="mk-options">' + teachers.map(function (id) {
      var av = availFor(id), n = av && !av.paused ? av.dates.reduce(function (k, d) { return k + d.slots.length; }, 0) : 0;
      return '<button type="button" class="mk-opt" data-d-teacher="' + id + '" aria-pressed="' + (demo.teacher === id) + '">' + esc(byId[id].name) + '<small>' + (n ? n + ' times open' : 'No times open yet') + '</small></button>';
    }).join('') + '</div>');

    var dates = a && !a.paused ? a.dates : [];
    html += step(2, 'Choose Friday or Sunday', dates.length ? '<div class="mk-options">' + dates.map(function (d) {
      return '<button type="button" class="mk-opt" data-d-date="' + d.date + '" aria-pressed="' + (demo.date === d.date) + '"' + (d.slots.length ? '' : ' disabled') + '>' + esc(dayLabel(d.date)) + '<small>' + (d.slots.length ? d.slots.length + (d.slots.length === 1 ? ' time' : ' times') : 'No times') + '</small></button>';
    }).join('') + '</div>' : '<p class="mk-fine">' + (demo.teacher ? 'This teacher has not opened demo times yet. Please check again soon.' : 'Choose a teacher first.') + '</p>', !demo.teacher);

    var slots = demo.teacher && demo.date ? slotsFor(demo.teacher, demo.date) : [];
    html += step(3, 'Choose a time (IST)', slots.length ? '<div class="mk-options">' + slots.map(function (x) {
      return '<button type="button" class="mk-opt" data-d-slot="' + x.start + '" aria-pressed="' + (demo.slot === x.start) + '">' + to12h(x.start) + '<small>until ' + to12h(x.end) + '</small></button>';
    }).join('') + '</div>' : '<p class="mk-fine">Choose a day to see its times.</p>', !demo.date);

    var ready = demo.teacher && demo.date && demo.slot;
    var details;
    if (!s.authenticated) {
      var a2 = auth();
      details = '<p class="mk-sub-sm">Sign in or create a free Klarweg account. Your choice is kept while you do.</p>'
        + '<a class="mk-btn mk-btn-primary" data-signin href="' + esc(a2 ? a2.accountUrl({ mode: 'login', next: global.location.pathname + '#demo' }) : 'account/index.html') + '">Sign in or create account</a>';
    } else {
      if (!demo.name) demo.name = (s.user && s.user.name) || '';
      if (!demo.phone) demo.phone = (s.user && s.user.phone) || '';
      details = '<p class="mk-fine" style="margin:0 0 16px">Signed in as ' + esc(s.user.email) + '</p>'
        + '<div class="mk-field"><label for="d-name">Full name</label><input id="d-name" autocomplete="name" value="' + esc(demo.name) + '" required></div>'
        + '<div class="mk-field"><label for="d-phone">Mobile number</label><input id="d-phone" type="tel" inputmode="numeric" autocomplete="tel-national" value="' + esc(demo.phone) + '" required aria-describedby="d-phone-h"><span class="mk-hint" id="d-phone-h">10-digit Indian mobile number. Your teacher may use it if the call has trouble connecting.</span></div>'
        + '<label class="mk-check"><input type="checkbox" id="d-terms"' + (demo.terms ? ' checked' : '') + '> <span>I understand the ₹100 demo fee and that ' + esc(M.demo && M.demo.rescheduleRule ? M.demo.rescheduleRule.charAt(0).toLowerCase() + M.demo.rescheduleRule.slice(1) : 'a demo can be moved once.') + ' See the <a href="terms.html">Terms</a>.</span></label>';
    }
    html += step(4, 'Your details', details, !ready);

    if (ready) {
      var slot = slots.filter(function (x) { return x.start === demo.slot; })[0];
      html += step(5, 'Review and pay', '<dl class="mk-summary"><dt>Teacher</dt><dd>' + esc(byId[demo.teacher].name) + '</dd><dt>Date</dt><dd>' + esc(niceDate(demo.date, { weekday: 'long' })) + '</dd><dt>Time</dt><dd>' + (slot ? to12h(slot.start) + ' – ' + to12h(slot.end) : '') + ' IST</dd><dt>Where</dt><dd>Google Meet · 20 minutes</dd>'
        + '<div class="mk-total"><dt>Total</dt><dd>₹100</dd></div></dl>'
        + '<button type="button" class="mk-btn mk-btn-primary mk-btn-block" id="d-pay"' + (s.authenticated && !demo.busy ? '' : ' disabled') + '>' + (demo.busy ? '<span class="mk-spinner"></span>Starting secure payment…' : 'Pay ₹100 and book') + '</button>'
        + '<p class="mk-secure">Secure payment by Cashfree · confirmed only after the payment is verified</p>');
    }
    panel.innerHTML = html;

    panel.querySelectorAll('[data-d-teacher]').forEach(function (b) { b.onclick = function () { demo.teacher = b.getAttribute('data-d-teacher'); demo.date = demo.slot = null; demo.notice = null; renderDemo(); }; });
    panel.querySelectorAll('[data-d-date]').forEach(function (b) { b.onclick = function () { demo.date = b.getAttribute('data-d-date'); demo.slot = null; demo.notice = null; renderDemo(); }; });
    panel.querySelectorAll('[data-d-slot]').forEach(function (b) { b.onclick = function () { demo.slot = b.getAttribute('data-d-slot'); demo.notice = null; renderDemo(); }; });
    var si = panel.querySelector('[data-signin]');
    if (si) si.addEventListener('click', function () { store('kw-demo-choice', { teacher: demo.teacher, date: demo.date, slot: demo.slot }); });
    var n = panel.querySelector('#d-name'), ph = panel.querySelector('#d-phone'), tm = panel.querySelector('#d-terms');
    if (n) n.oninput = function () { demo.name = n.value; };
    if (ph) ph.oninput = function () { demo.phone = ph.value; };
    if (tm) tm.onchange = function () { demo.terms = tm.checked; };
    var pay = panel.querySelector('#d-pay');
    if (pay) pay.onclick = payDemo;
  }
  function payDemo() {
    var phone = String(demo.phone || '').replace(/[\s-]/g, '');
    if (demo.name.trim().length < 2) { demo.notice = { ok: false, text: 'Please enter your full name.' }; return renderDemo(); }
    if (!/^[6-9]\d{9}$/.test(phone)) { demo.notice = { ok: false, text: 'Please enter a valid 10-digit mobile number.' }; return renderDemo(); }
    if (!demo.terms) { demo.notice = { ok: false, text: 'Please confirm the demo terms.' }; return renderDemo(); }
    demo.busy = true; demo.notice = null; renderDemo();
    call('/demo/bookings', { method: 'POST', body: { teacher_id: demo.teacher, date: demo.date, slot: demo.slot, contact_name: demo.name.trim(), contact_phone: phone, accept_terms: true } })
      .then(function (r) {
        store('kw-demo-choice', null);
        return openPayment(r);
      })
      .catch(function (e) {
        demo.busy = false;
        demo.notice = { ok: false, text: e.message };
        if (e.code === 'slot-taken' || e.code === 'slot-unavailable') { demo.slot = null; loadAvailability(); }
        else renderDemo();
      });
  }

  /* ---------- demo status (after Cashfree returns, or from My Account) ---------- */
  function demoStatus(ref) {
    var panel = doc.getElementById('demo-panel');
    panel.setAttribute('data-mode', 'status');
    var tries = 0;
    function show(html) { panel.innerHTML = html; }
    function back() { panel.removeAttribute('data-mode'); history.replaceState(null, '', global.location.pathname + '#demo'); renderDemo(); }
    function poll() {
      call('/consult/bookings/' + encodeURIComponent(ref)).then(function (r) {
        var b = r.booking;
        if (b.status === 'confirmed') return confirmed(b);
        if (b.status === 'pending' && tries++ < 6) {
          show('<p><span class="mk-spinner"></span><strong>Confirming your payment with Cashfree…</strong></p><p class="mk-fine">Reference ' + esc(b.ref) + '. This usually takes a few seconds. Please keep this page open.</p>');
          return setTimeout(poll, 3000);
        }
        if (b.status === 'pending') {
          show('<div class="mk-note"><strong>Payment not completed yet.</strong>Your time is held for a few more minutes. If you already paid, this page and My Account update automatically once Cashfree confirms it; you will not be charged twice. Reference <span class="mk-ref">' + esc(b.ref) + '</span></div>'
            + '<div class="mk-hero-ctas"><button type="button" class="mk-btn mk-btn-primary" data-resume>Complete payment</button><button type="button" class="mk-btn mk-btn-ghost" data-again>Check again</button></div><div data-resume-msg></div>');
          panel.querySelector('[data-again]').onclick = function () { tries = 0; poll(); };
          panel.querySelector('[data-resume]').onclick = function () {
            call('/demo/bookings', { method: 'POST', body: { teacher_id: b.teacherId, date: b.date, slot: b.slotStart, contact_name: b.contactName, contact_phone: b.contactPhone, accept_terms: true } })
              .then(openPayment, function (e) { panel.querySelector('[data-resume-msg]').innerHTML = '<div class="mk-note mk-note-err" role="alert">' + esc(e.message) + '</div>'; });
          };
          return;
        }
        if (b.status === 'review') {
          return show('<div class="mk-note"><strong>We need to check this payment.</strong>Your payment reached us but could not be matched to this booking automatically (for example, the time was taken while you paid). Nothing more is needed from you: Klarweg will contact you and offer a new time or a full refund. Reference <span class="mk-ref">' + esc(b.ref) + '</span></div><p class="mk-fine">Questions: <a href="mailto:' + esc(CONTACT) + '">' + esc(CONTACT) + '</a></p>');
        }
        show('<div class="mk-note mk-note-err" role="alert"><strong>Payment not completed.</strong>The booking was not confirmed and nothing was charged. The time has been released.</div><button type="button" class="mk-btn mk-btn-primary" data-rebook>Choose a time again</button>');
        panel.querySelector('[data-rebook]').onclick = function () { loadAvailability().then(back); };
      }, function (e) {
        if (e.code === 'unauthorized') {
          var a = auth();
          return show('<div class="mk-note"><strong>Please sign in to see your booking.</strong>Reference ' + esc(ref) + '</div><a class="mk-btn mk-btn-primary" href="' + esc(a ? a.accountUrl({ mode: 'login' }) : 'account/index.html') + '">Sign in</a>');
        }
        show('<div class="mk-note mk-note-err"><strong>Status unavailable.</strong>' + esc(e.message) + '</div><button type="button" class="mk-btn mk-btn-ghost" data-again>Try again</button>');
        panel.querySelector('[data-again]').onclick = poll;
      });
    }
    function confirmed(b) {
      var t = byId[b.teacherId];
      show('<div class="mk-success"><p class="mk-eyebrow">Demo confirmed</p><h3>Your demo is booked.</h3>'
        + '<p class="mk-sub-sm">Payment verified with Cashfree. Keep your reference; it is also in My Account.</p>'
        + '<p class="mk-ref" data-ref>' + esc(b.ref) + '</p>'
        + '<dl class="mk-summary"><dt>Teacher</dt><dd>' + esc(t ? t.name : b.teacherId) + '</dd><dt>Date</dt><dd>' + esc(niceDate(b.date, { weekday: 'long' })) + '</dd><dt>Time</dt><dd>' + to12h(b.slotStart) + ' – ' + to12h(b.slotEnd) + ' IST</dd><dt>Paid</dt><dd>' + inrP(b.amountPaise) + (b.testMode ? ' (test)' : '') + '</dd></dl>'
        + '<div class="mk-hero-ctas"><button type="button" class="mk-btn mk-btn-primary" data-join>Show joining link</button>'
        + (b.rescheduleCount < 1 ? '<button type="button" class="mk-btn mk-btn-ghost" data-move>Move this demo</button>' : '') + '</div>'
        + '<div data-join-out style="margin-top:16px"></div></div>');
      panel.querySelector('[data-join]').onclick = function () {
        var out = panel.querySelector('[data-join-out]');
        out.innerHTML = '<span class="mk-spinner"></span>';
        call('/consult/bookings/' + encodeURIComponent(b.ref) + '/join').then(function (j) {
          out.innerHTML = j.joinUrl ? '<a class="mk-btn mk-btn-soft" href="' + esc(j.joinUrl) + '" target="_blank" rel="noopener">Join on Google Meet</a>'
            : '<div class="mk-note">' + esc(j.message || 'Your joining link will appear here before the demo.') + '</div>';
        }, function (e) { out.innerHTML = '<div class="mk-note mk-note-err">' + esc(e.message) + '</div>'; });
      };
      var mv = panel.querySelector('[data-move]');
      if (mv) mv.onclick = function () { moveDemo(b); };
    }
    function moveDemo(b) {
      show('<p><span class="mk-spinner"></span>Loading times…</p>');
      call('/demo/availability?teacher_id=' + encodeURIComponent(b.teacherId)).then(function (r) {
        var t = (r.teachers || [])[0];
        var opts = [];
        (t ? t.dates : []).forEach(function (d) { d.slots.forEach(function (s) { opts.push({ date: d.date, start: s.start, end: s.end }); }); });
        show('<h3 class="mk-h3">Move your demo</h3><p class="mk-sub-sm">You can move a confirmed demo once, up to 12 hours before it starts. Currently: ' + esc(niceDate(b.date, { weekday: 'long' })) + ', ' + to12h(b.slotStart) + ' IST.</p>'
          + (opts.length ? '<div class="mk-options">' + opts.slice(0, 24).map(function (o) { return '<button type="button" class="mk-opt" data-to="' + o.date + '|' + o.start + '">' + esc(dayLabel(o.date)) + '<small>' + to12h(o.start) + ' IST</small></button>'; }).join('') + '</div>' : '<p class="mk-fine">No other times are open right now.</p>')
          + '<div data-move-msg style="margin-top:16px"></div><button type="button" class="mk-link" data-cancel-move>Keep my current time</button>');
        panel.querySelector('[data-cancel-move]').onclick = function () { confirmed(b); };
        panel.querySelectorAll('[data-to]').forEach(function (x) {
          x.onclick = function () {
            var p = x.getAttribute('data-to').split('|');
            call('/demo/bookings/' + encodeURIComponent(b.ref) + '/reschedule', { method: 'POST', body: { date: p[0], slot: p[1] } })
              .then(function (rr) { confirmed(rr.booking); }, function (e) { panel.querySelector('[data-move-msg]').innerHTML = '<div class="mk-note mk-note-err" role="alert">' + esc(e.message) + '</div>'; });
          };
        });
      }, function (e) { show('<div class="mk-note mk-note-err">' + esc(e.message) + '</div>'); });
    }
    poll();
  }

  /* =====================================================================
     COURSE CHECKOUT
     ===================================================================== */
  var co = null;
  function checkoutOn() { return M.courseCheckoutEnabled === true && !!(state.catalog && state.catalog.enabled); }
  function openCheckout(courseId) {
    var c = courseById(courseId);
    if (!c) return;
    var list = batchesOf(courseId);
    var firstOpen = list.filter(function (b) { return b.purchasable; })[0];
    co = { course: c, batchId: firstOpen ? firstOpen.id : null, coupon: (recall('kw-coupon-' + courseId) || ''), applied: null, quote: null, msg: null, terms: false, busy: false, phone: '' };
    if (co.coupon) applyCoupon(true);
    renderCheckout();
    var dlg = doc.getElementById('checkout');
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
    try { history.replaceState(null, '', global.location.pathname + '?course=' + encodeURIComponent(courseId) + '#courses'); } catch (e) {}
  }
  function selectedBatch() {
    if (!co || !co.batchId) return null;
    return batchesOf(co.course.id).filter(function (b) { return b.id === co.batchId; })[0] || null;
  }
  function serverQuotable() { var b = selectedBatch(); return checkoutOn() && b && b.purchasable && authState().authenticated; }
  function applyCoupon(silent) {
    var code = String(co.coupon || '').trim().toUpperCase().replace(/\s+/g, '');
    co.coupon = code;
    co.quote = null;
    if (!code) { co.applied = null; co.msg = silent ? null : { ok: false, text: 'Enter a coupon code.' }; return finishCoupon(); }
    var cc = catalogCourse(co.course.id);
    if (code !== 'GROUP3000' && code !== 'PERSONAL7000') { co.applied = null; co.msg = { ok: false, text: 'This coupon code is not valid.' }; return finishCoupon(); }
    if (code !== co.course.price.coupon) { co.applied = null; co.msg = { ok: false, text: code + ' applies only to ' + (code === 'GROUP3000' ? 'Group classes' : 'One-to-One classes') + '. Use ' + co.course.price.coupon + ' for this course.' }; return finishCoupon(); }
    if (cc && cc.couponActive === false) { co.applied = null; co.msg = { ok: false, text: 'This coupon is not available at the moment.' }; return finishCoupon(); }
    co.applied = code;
    co.msg = { ok: true, text: code + ' applied: ' + inr(co.course.price.discount) + ' off.' };
    store('kw-coupon-' + co.course.id, code);
    return finishCoupon();
  }
  function finishCoupon() {
    if (serverQuotable()) return fetchQuote();
    renderCheckout();
    return Promise.resolve();
  }
  function fetchQuote() {
    var q = new URLSearchParams({ course_id: co.course.id, batch_id: co.batchId });
    if (co.applied) q.set('coupon', co.applied);
    co.quoting = true; renderCheckout();
    return call('/enrol/quote?' + q.toString()).then(function (r) { co.quote = r.quote; co.quoting = false; renderCheckout(); }, function (e) {
      co.quoting = false; co.quote = null;
      if (/^coupon/.test(e.code)) { co.applied = null; co.msg = { ok: false, text: e.message }; }
      else co.msg = { ok: false, text: e.message };
      renderCheckout();
    });
  }
  function renderCheckout() {
    if (!co) return;
    var c = co.course, t = byId[c.teacherId], p = c.price, s = authState();
    var list = batchesOf(c.id), sb = selectedBatch();
    var original = co.quote ? co.quote.originalPaise / 100 : p.original;
    var discount = co.quote ? co.quote.discountPaise / 100 : (co.applied ? p.discount : 0);
    var credit = co.quote ? co.quote.creditPaise / 100 : 0;
    var due = co.quote ? co.quote.dueNowPaise / 100 : original - discount;
    var h = '<header class="mk-co-head"><p class="mk-eyebrow">Course checkout</p><h2 id="co-title">German ' + c.level + ' · ' + FORMAT_LABEL[c.format] + '</h2><p>with ' + esc(t.name) + '</p></header>';
    if (state.catalog && state.catalog.testMode) h += '<div class="mk-note mk-note-test"><strong>Test mode</strong>Payments use Cashfree\'s sandbox. No real money is taken.</div>';

    /* batch */
    h += '<section class="mk-co-section"><h3>Batch and dates</h3>';
    if (!list.length) {
      h += '<dl class="mk-summary"><dt>Start date</dt><dd>' + TBA + '</dd><dt>End date</dt><dd>' + TBA + '</dd><dt>Schedule</dt><dd>' + (c.format === 'group' ? TBA : 'Agreed with your teacher') + '</dd></dl>';
    } else {
      h += '<div class="mk-batches" role="radiogroup" aria-label="Choose a batch">' + list.map(function (b) {
        var dis = !b.purchasable;
        return '<label class="mk-batch" data-disabled="' + dis + '"><input type="radio" name="co-batch" value="' + esc(b.id) + '"' + (co.batchId === b.id ? ' checked' : '') + (dis ? ' disabled' : '') + '>'
          + '<span><strong>' + (b.startDate ? esc(niceDate(b.startDate)) + ' – ' + esc(niceDate(b.endDate)) : 'Dates ' + TBA.toLowerCase()) + '</strong>'
          + '<span>' + esc(b.schedule || 'Schedule ' + TBA.toLowerCase()) + ' · ' + esc(STATE_TEXT[b.state](b)) + '</span>'
          + (b.fulfilmentNote ? '<br><span>' + esc(b.fulfilmentNote) + '</span>' : '') + '</span></label>';
      }).join('') + '</div>';
    }
    h += '</section>';

    /* price */
    h += '<section class="mk-co-section"><h3>Price</h3>'
      + '<form class="mk-coupon-form" data-coupon-form><label class="visually-hidden" for="co-coupon">Coupon code</label><input id="co-coupon" placeholder="Coupon code" autocomplete="off" spellcheck="false" value="' + esc(co.coupon) + '" aria-describedby="co-coupon-msg"><button class="mk-btn mk-btn-soft mk-btn-sm" type="submit">Apply</button></form>'
      + '<p class="mk-coupon-msg" id="co-coupon-msg" aria-live="polite"' + (co.msg ? ' data-ok="' + co.msg.ok + '"' : '') + '>' + (co.msg ? esc(co.msg.text) : 'Use <code>' + p.coupon + '</code> for ' + inr(p.discount) + ' off this course.') + '</p>'
      + '<dl class="mk-summary" style="margin-top:12px"><dt>Original price</dt><dd>' + inr(original) + '</dd>'
      + '<dt>Coupon discount' + (co.applied ? ' (' + co.applied + ')' : '') + '</dt><dd>' + (discount ? '− ' + inr(discount) : '—') + '</dd>'
      + (credit ? '<dt>₹100 demo adjustment</dt><dd>− ' + inr(credit) + '</dd>' : '')
      + '<div class="mk-total"><dt>Final payable</dt><dd data-final>' + inr(due) + '</dd></div></dl>'
      + '<p class="mk-fine">' + (co.quoting ? '<span class="mk-spinner"></span>Confirming the amount with Klarweg…' : co.quote ? 'Amount confirmed by Klarweg\'s server for this batch.' : 'Klarweg\'s server confirms the exact amount before payment. One coupon per course; a coupon is not combined with the ₹100 demo adjustment.') + '</p></section>';

    /* account + pay */
    var reason = null;
    if (!checkoutOn()) reason = 'Online enrolment for this course is not open yet. No payment is taken until its schedule, fulfilment details and enrolment conditions are announced. Book a ₹100 demo in the meantime.';
    else if (!list.length || !list.some(function (b) { return b.purchasable; })) reason = list.some(function (b) { return b.state === 'full'; }) ? 'This course is fully booked. Book a ₹100 demo to hear about the next batch.' : 'Start and end dates are still to be announced. No payment is taken until then.';
    else if (!sb) reason = 'Choose a batch.';
    h += '<section class="mk-co-section"><h3>Your account</h3>';
    if (!s.authenticated) {
      var a = auth();
      h += '<p class="mk-sub-sm">Sign in or create a free account to enrol. You come straight back to this course.</p><a class="mk-btn mk-btn-ghost" href="' + esc(a ? a.accountUrl({ mode: 'login', next: global.location.pathname + '?course=' + c.id + '#courses' }) : 'account/index.html') + '">Sign in or create account</a>';
      if (!reason) reason = 'Sign in to continue.';
    } else {
      h += '<p class="mk-fine" style="margin:0 0 12px">Signed in as ' + esc(s.user.email) + '</p>';
      if (!(auth() && auth().hasPhone())) {
        h += '<div class="mk-field"><label for="co-phone">Mobile number (for your enrolment)</label><input id="co-phone" type="tel" inputmode="numeric" autocomplete="tel-national" value="' + esc(co.phone) + '"><span class="mk-hint">Saved to your account. Required by our payment provider.</span></div><button type="button" class="mk-btn mk-btn-soft mk-btn-sm" data-save-phone>Save number</button>';
        if (!reason) reason = 'Add your mobile number to continue.';
      }
    }
    h += '</section>';
    h += '<label class="mk-check"><input type="checkbox" id="co-terms"' + (co.terms ? ' checked' : '') + '> <span>I have read the course terms, including <a href="#faq" data-close-to-faq>cancellations and refunds</a>, and the <a href="terms.html">Terms</a>.</span></label>';
    if (co.notice) h += '<div class="mk-note ' + (co.notice.ok ? 'mk-note-ok' : 'mk-note-err') + '" role="alert">' + esc(co.notice.text) + '</div>';
    if (reason) h += '<div class="mk-note"><strong>' + (checkoutOn() ? 'Not available yet' : 'Enrolment opens soon') + '</strong>' + esc(reason) + '</div>';
    var canPay = !reason && co.terms && !co.busy && !co.quoting;
    h += '<button type="button" class="mk-btn mk-btn-primary mk-btn-block" id="co-pay"' + (canPay ? '' : ' disabled') + '>' + (co.busy ? '<span class="mk-spinner"></span>Starting secure payment…' : 'Pay ' + inr(due) + ' securely') + '</button>'
      + '<p class="mk-secure">Payments by Cashfree · your enrolment is confirmed only after the payment is verified</p>';
    if (reason && demoTeachers().indexOf(c.teacherId) >= 0) h += '<p style="text-align:center;margin:16px 0 0"><a href="#demo" class="mk-link" data-demo-from-co>Book Demo — ₹100 with ' + esc(t.name) + '</a></p>';

    var body = doc.getElementById('checkout-body');
    body.innerHTML = h;
    var form = body.querySelector('[data-coupon-form]');
    form.onsubmit = function (e) { e.preventDefault(); co.coupon = body.querySelector('#co-coupon').value; applyCoupon(false); };
    body.querySelectorAll('input[name="co-batch"]').forEach(function (r) { r.onchange = function () { co.batchId = r.value; co.quote = null; if (serverQuotable()) fetchQuote(); else renderCheckout(); }; });
    var tm = body.querySelector('#co-terms'); tm.onchange = function () { co.terms = tm.checked; renderCheckout(); };
    var sp = body.querySelector('[data-save-phone]');
    if (sp) sp.onclick = function () {
      co.phone = body.querySelector('#co-phone').value;
      auth().updatePhone(co.phone).then(function () { co.notice = { ok: true, text: 'Mobile number saved.' }; renderCheckout(); if (serverQuotable()) fetchQuote(); }, function (e) { co.notice = { ok: false, text: e.message }; renderCheckout(); });
    };
    var df = body.querySelector('[data-demo-from-co]');
    if (df) df.onclick = function () { doc.getElementById('checkout').close(); demo.teacher = c.teacherId; renderDemo(); };
    var tf = body.querySelector('[data-close-to-faq]');
    if (tf) tf.onclick = function () { doc.getElementById('checkout').close(); };
    var pay = body.querySelector('#co-pay');
    pay.onclick = payCourse;
  }
  function payCourse() {
    co.busy = true; co.notice = null; renderCheckout();
    var ready = co.quote ? Promise.resolve() : fetchQuote();
    ready.then(function () {
      if (!co.quote) throw Object.assign(new Error('The amount could not be confirmed. Nothing has been charged.'), { code: 'quote' });
      var body = { course_id: co.course.id, batch_id: co.batchId, expected_amount_paise: co.quote.dueNowPaise };
      if (co.applied) body.coupon = co.applied;
      return call('/enrol/checkout', { method: 'POST', body: body });
    }).then(function (r) { return openPayment(r); }).catch(function (e) {
      co.busy = false;
      if (e.code === 'amount-changed' && e.data.quote) { co.quote = e.data.quote; co.notice = { ok: false, text: 'The amount due has changed to ' + inrP(e.data.quote.dueNowPaise) + '. Please review it before paying.' }; }
      else if (e.code === 'already-enrolled') co.notice = { ok: true, text: 'You are already enrolled in this batch. See My Account for details.' };
      else co.notice = { ok: false, text: e.message };
      if (e.code === 'sold-out' || e.code === 'course-closed') loadCatalog();
      renderCheckout();
    });
  }

  /* ---------- enrolment status (after Cashfree returns) ---------- */
  function enrolStatus(ref) {
    var dlg = doc.getElementById('checkout'), body = doc.getElementById('checkout-body');
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
    var tries = 0;
    function show(h) { body.innerHTML = h; }
    function poll() {
      call('/enrol/enrolments/' + encodeURIComponent(ref)).then(function (r) {
        var e = r.enrolment;
        if (e.status === 'enrolled') return success(e);
        if (e.status === 'pending' && e.paymentStatus === 'pending' && tries++ < 6) {
          show('<p class="mk-eyebrow">Payment status</p><p><span class="mk-spinner"></span><strong>Confirming your payment with Cashfree…</strong></p><p class="mk-fine">Reference ' + esc(e.ref) + '. Please keep this page open.</p>');
          return setTimeout(poll, 3000);
        }
        if (e.status === 'pending') {
          show('<p class="mk-eyebrow">Payment status</p><div class="mk-note"><strong>Payment not completed yet.</strong>Your place is held for a few more minutes. If you already paid, your enrolment is confirmed automatically once Cashfree reports it, and it appears in My Account; you will not be charged twice. Reference <span class="mk-ref">' + esc(e.ref) + '</span></div>'
            + '<div class="mk-hero-ctas"><button type="button" class="mk-btn mk-btn-primary" data-resume>Complete payment of ' + inrP(e.amountDuePaise) + '</button><button type="button" class="mk-btn mk-btn-ghost" data-again>Check again</button></div><div data-resume-msg></div>');
          body.querySelector('[data-again]').onclick = function () { tries = 0; poll(); };
          body.querySelector('[data-resume]').onclick = function () {
            var req = { course_id: e.courseId, batch_id: e.batch, expected_amount_paise: e.amountDuePaise };
            if (e.couponCode) req.coupon = e.couponCode;
            call('/enrol/checkout', { method: 'POST', body: req }).then(openPayment, function (x) { body.querySelector('[data-resume-msg]').innerHTML = '<div class="mk-note mk-note-err" role="alert">' + esc(x.message) + '</div>'; });
          };
          return;
        }
        if (e.status === 'review') {
          return show('<p class="mk-eyebrow">Payment status</p><div class="mk-note"><strong>We need to check this payment.</strong>Your payment reached us but could not be confirmed automatically. Klarweg will contact you with a place or a full refund. Reference <span class="mk-ref">' + esc(e.ref) + '</span></div><p class="mk-fine">Questions: <a href="mailto:' + esc(CONTACT) + '">' + esc(CONTACT) + '</a></p>');
        }
        show('<p class="mk-eyebrow">Payment status</p><div class="mk-note mk-note-err" role="alert"><strong>Payment not completed.</strong>Your enrolment was not confirmed and nothing was charged. Your place is no longer held.</div>'
          + (e.courseId && courseById(e.courseId) ? '<button type="button" class="mk-btn mk-btn-primary" data-retry-course="' + esc(e.courseId) + '">Try again</button>' : ''));
        var rb = body.querySelector('[data-retry-course]');
        if (rb) rb.onclick = function () { openCheckout(rb.getAttribute('data-retry-course')); };
      }, function (err) {
        if (err.code === 'unauthorized') { var a = auth(); return show('<div class="mk-note"><strong>Please sign in to see your enrolment.</strong>Reference ' + esc(ref) + '</div><a class="mk-btn mk-btn-primary" href="' + esc(a ? a.accountUrl({ mode: 'login' }) : 'account/index.html') + '">Sign in</a>'); }
        show('<div class="mk-note mk-note-err"><strong>Status unavailable.</strong>' + esc(err.message) + '</div><button type="button" class="mk-btn mk-btn-ghost" data-again>Try again</button>');
        body.querySelector('[data-again]').onclick = poll;
      });
    }
    function success(e) {
      show('<div class="mk-success"><p class="mk-eyebrow">Enrolment confirmed</p><h3>You are enrolled.</h3><p class="mk-sub-sm">Payment verified with Cashfree. This confirmation is also in My Account.</p>'
        + '<p class="mk-ref" data-ref>' + esc(e.ref) + '</p>'
        + '<dl class="mk-summary"><dt>Course</dt><dd>' + esc(e.courseTitle) + '</dd>'
        + '<dt>Dates</dt><dd>' + (e.startDate ? esc(niceDate(e.startDate)) + ' – ' + esc(niceDate(e.endDate)) : TBA) + '</dd>'
        + (e.schedule ? '<dt>Schedule</dt><dd>' + esc(e.schedule) + '</dd>' : '')
        + '<dt>Original price</dt><dd>' + inrP(e.originalPaise) + '</dd>'
        + (e.discountPaise ? '<dt>Coupon ' + esc(e.couponCode || '') + '</dt><dd>− ' + inrP(e.discountPaise) + '</dd>' : '')
        + (e.creditPaise ? '<dt>₹100 demo adjustment</dt><dd>− ' + inrP(e.creditPaise) + '</dd>' : '')
        + '<div class="mk-total"><dt>Paid</dt><dd>' + inrP(e.paidPaise) + (e.testMode ? ' (test)' : '') + '</dd></div></dl>'
        + '<div class="mk-hero-ctas"><a class="mk-btn mk-btn-primary" href="account/index.html#live">Open My Account</a><button type="button" class="mk-btn mk-btn-ghost" data-print>Print confirmation</button></div></div>');
      body.querySelector('[data-print]').onclick = function () { global.print(); };
    }
    poll();
  }

  /* ---------------- catalogue (Worker) ---------------- */
  function loadCatalog() {
    return call('/enrol/catalog').then(function (r) { state.catalog = r; state.catalogError = false; }, function () { state.catalogError = true; })
      .then(function () { renderCourses(); if (co && doc.getElementById('checkout').open && !qs('enrol_ref')) renderCheckout(); });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    heroPrices();
    initFilters();
    var d = M.demo || {};
    var w = doc.querySelector('[data-demo-what]'); if (w && d.what) w.textContent = d.what;
    var rr = doc.querySelector('[data-demo-rules]'); if (rr && d.rescheduleRule) rr.textContent = d.rescheduleRule + ' ' + (d.refundRule || '');
    renderAll();
    var saved = recall('kw-demo-choice');
    if (saved) { demo.teacher = saved.teacher; demo.date = saved.date; demo.slot = saved.slot; }
    var demoRef = qs('demo_ref'), enrolRef = qs('enrol_ref'), course = qs('course');
    if (demoRef && /^KWC-[2-9A-HJ-NP-Z]{8}$/.test(demoRef)) demoStatus(demoRef); else renderDemo();
    var a = auth();
    var ready = a ? a.refresh().catch(function () {}) : Promise.resolve();
    ready.then(function () {
      if (a) a.onChange(function () { renderDemo(); if (co && doc.getElementById('checkout').open && !enrolRef) renderCheckout(); });
      loadAvailability();
      return loadCatalog();
    }).then(function () {
      if (enrolRef && /^KWE-[2-9A-HJ-NP-Z]{8}$/.test(enrolRef)) enrolStatus(enrolRef);
      else if (course && courseById(course)) openCheckout(course);
      if (saved && demoRef == null) scrollTo('demo');
    });
    doc.getElementById('checkout').addEventListener('close', function () {
      co = null;
      try { history.replaceState(null, '', global.location.pathname + global.location.hash); } catch (e) {}
    });
  }
  boot();
  global.KWMarketplacePage = { openCheckout: openCheckout, state: state };
})(window);
