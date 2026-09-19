/* ============================================================
   _dev-admin-mock.js — DEV ONLY.

   Lives OUTSIDE worker/public, so it is never deployed with the
   Worker and can never reach production. It installs a fetch
   stand-in for /api/admin/* so the dashboard UI can be built and
   tested without D1, R2 or Turnstile.

   Every record below is invented sample data. The harness page
   shows a permanent banner saying so.
   ============================================================ */
(function (global) {
  'use strict';

  var PASS = 'dev';
  var SESSION = false;
  var CSRF = 'dev-csrf-token';
  var COOKIES_WORK = true;

  var CHAPTERS = [
    { level: 'a1', chapter_id: 'a1-1-alphabet', chapter_no: 1, chapter_title: 'Das Alphabet & Aussprache' },
    { level: 'a2', chapter_id: 'a2-1-genitiv', chapter_no: 1, chapter_title: 'Genitiv: Name + s' },
    { level: 'b1', chapter_id: 'b1-1-infinitiv-mit-zu', chapter_no: 1, chapter_title: 'Infinitiv mit zu' },
    { level: 'b2', chapter_id: 'b2-06-es-in-festen-ausdruecken', chapter_no: 6, chapter_title: 'Es in festen Ausdrücken' },
    { level: 'c1', chapter_id: 'c1-23-goethe-mini-3', chapter_no: 23, chapter_title: 'Goethe Mini 3' }
  ];
  var SECTIONS = [
    ['story', 'Story'], ['vocabulary', 'Vocabulary'], ['grammar', 'Grammar'],
    ['listening', 'Listening'], ['exercises', 'Exercises'], ['quiz', 'Quiz']
  ];
  var CATS = ['content', 'grammar', 'vocabulary', 'exercise', 'audio', 'reading_listening', 'display', 'technical', 'other'];
  var STATUSES = ['new', 'new', 'new', 'reviewing', 'fixed', 'dismissed'];
  var TEXTS = [
    'Audio does not play on my phone. It works on the laptop with the same chapter.',
    'The Hindi translation for the third word looks wrong to me.',
    'Exercise 4 marks the correct answer as wrong.',
    'The table overflows sideways on a small screen and I cannot read the last column.',
    'One line of the story is missing its English translation entirely.',
    'The quiz will not let me continue after question two.',
    'Two vocabulary cards show the same word twice.',
    'The listening transcript does not match what the speaker says at 0:24.'
  ];

  var REPORTS = [];
  (function seed() {
    var now = Date.now();
    for (var i = 0; i < 34; i++) {
      var c = CHAPTERS[i % CHAPTERS.length];
      var s = SECTIONS[i % SECTIONS.length];
      var id = 'KW-' + ('DEV' + String(100 + i)).slice(0, 6).toUpperCase();
      REPORTS.push({
        id: id,
        created_at: now - i * 3600000 * 5 - (i % 3) * 900000,
        status: STATUSES[i % STATUSES.length],
        category: CATS[i % CATS.length],
        level: c.level, chapter_id: c.chapter_id, chapter_no: c.chapter_no, chapter_title: c.chapter_title,
        section_id: s[0], section_label: s[1],
        section_ref: 'klarweg:' + c.level + '/' + c.chapter_id + '/' + s[0],
        page_path: 'chapter/chapter-' + c.chapter_id + '.html',
        description: TEXTS[i % TEXTS.length],
        claimed_title: 'Klarweg · ' + c.chapter_title,
        viewport: i % 2 ? '390x844' : '1440x900',
        dpr: i % 2 ? 3 : 2,
        ua_family: i % 2 ? 'Safari / iOS' : 'Chrome / macOS',
        prefers_rm: i % 7 === 0 ? 1 : 0,
        has_screenshot: i % 4 === 0,
        dup_count: i % 6 === 0 ? 3 : 1,
        admin_notes: i % 5 === 0 ? 'Reproduced on iOS 18.' : null,
        updated_at: i % 5 === 0 ? now - 3600000 : null,
        updated_by: i % 5 === 0 ? 'admin' : null
      });
    }
  })();

  /* a tiny real PNG so the screenshot path can be exercised */
  function samplePng() {
    var c = document.createElement('canvas');
    c.width = 480; c.height = 300;
    var x = c.getContext('2d');
    x.fillStyle = '#F4F3EE'; x.fillRect(0, 0, 480, 300);
    x.fillStyle = '#1F4E4A'; x.fillRect(0, 0, 480, 44);
    x.fillStyle = '#9A9AA0'; x.font = '13px monospace';
    x.fillText('sample screenshot (mock)', 20, 160);
    return new Promise(function (r) { c.toBlob(r, 'image/png'); });
  }

  var FAILURES = {};          // { path: statusCode } — forced error injection
  var json = function (body, status) {
    return new Response(JSON.stringify(body), {
      status: status || 200, headers: { 'Content-Type': 'application/json' }
    });
  };

  var realFetch = global.fetch.bind(global);

  global.fetch = async function (input, init) {
    var url = typeof input === 'string' ? input : input.url;
    if (url.indexOf('/api/admin/') === -1) return realFetch(input, init);

    init = init || {};
    var u = new URL(url, location.origin);
    var path = u.pathname;
    var method = (init.method || 'GET').toUpperCase();

    if (FAILURES[path] === 0) return Promise.reject(new TypeError('network'));
    if (FAILURES[path]) return json({ error: FAILURES[path] === 403 ? 'forbidden' : 'server_error' }, FAILURES[path]);

    if (path === '/api/admin/login' && method === 'POST') {
      var body = JSON.parse(init.body || '{}');
      if (body.passphrase !== PASS) return json({ error: 'invalid_credentials' }, 401);
      SESSION = true;
      document.cookie = 'kw_admin_csrf=' + CSRF + '; path=/';
      // Preview iframes may block cookies entirely. The real Worker always
      // enforces CSRF; the mock only enforces it when a cookie can be stored.
      COOKIES_WORK = /kw_admin_csrf=/.test(document.cookie || '');
      return json({ ok: true, csrf: CSRF });
    }
    if (path === '/api/admin/logout') { SESSION = false; return json({ ok: true }); }

    if (!SESSION) return json({ error: 'unauthorized' }, 401);

    if (path === '/api/admin/me') return json({ ok: true, admin: 'admin', csrf: CSRF });

    if (path === '/api/admin/facets') {
      var by = function (k) {
        var m = {};
        REPORTS.forEach(function (r) { m[r[k]] = (m[r[k]] || 0) + 1; });
        return Object.keys(m).map(function (v) { var o = { n: m[v] }; o[k] = v; return o; });
      };
      return json({
        levels: by('level'),
        statuses: by('status'),
        categories: by('category'),
        chapters: CHAPTERS.map(function (c) {
          return Object.assign({}, c, { n: REPORTS.filter(function (r) { return r.chapter_id === c.chapter_id; }).length });
        })
      });
    }

    if (path === '/api/admin/reports' && method === 'GET') {
      var p = u.searchParams;
      var rows = REPORTS.slice().sort(function (a, b) { return b.created_at - a.created_at; });
      ['status', 'category', 'level'].forEach(function (k) {
        if (p.get(k)) rows = rows.filter(function (r) { return r[k] === p.get(k); });
      });
      if (p.get('chapter')) rows = rows.filter(function (r) { return r.chapter_id === p.get('chapter'); });
      if (p.get('q')) {
        var q = p.get('q').toLowerCase();
        rows = rows.filter(function (r) {
          return (r.description + ' ' + r.id + ' ' + r.chapter_id + ' ' + r.section_id).toLowerCase().indexOf(q) > -1;
        });
      }
      if (p.get('cursor')) rows = rows.filter(function (r) { return r.created_at < Number(p.get('cursor')); });
      var page = rows.slice(0, 25);
      return json({ reports: page, nextCursor: rows.length > 25 ? page[page.length - 1].created_at : null });
    }

    var m = path.match(/^\/api\/admin\/reports\/([^/]+)$/);
    if (m) {
      var rep = REPORTS.filter(function (r) { return r.id === m[1]; })[0];
      if (!rep) return json({ error: 'not_found' }, 404);
      if (method === 'GET') {
        return json({ report: Object.assign({}, rep, { open_url: 'https://klarweg.com/' + rep.page_path + '#sec-' + rep.section_id }) });
      }
      if (method === 'PATCH') {
        var hdr = (init.headers || {})['X-KW-CSRF'];
        if (COOKIES_WORK && hdr !== CSRF) return json({ error: 'csrf' }, 403);
        var ch = JSON.parse(init.body || '{}');
        if (ch.status && ['new', 'reviewing', 'fixed', 'dismissed'].indexOf(ch.status) === -1) {
          return json({ error: 'invalid_status' }, 400);
        }
        Object.assign(rep, ch, { updated_at: Date.now(), updated_by: 'admin' });
        return json({ ok: true });
      }
    }

    var sm = path.match(/^\/api\/admin\/reports\/([^/]+)\/screenshot$/);
    if (sm) {
      var rp = REPORTS.filter(function (r) { return r.id === sm[1]; })[0];
      if (!rp || !rp.has_screenshot) return new Response(null, { status: 404 });
      var blob = await samplePng();
      return new Response(blob, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store, private' } });
    }

    return json({ error: 'not_found' }, 404);
  };

  global.KW_DevMock = {
    reports: REPORTS,
    passphrase: PASS,
    signOut: function () { SESSION = false; },
    setSession: function (v) { SESSION = v; },
    cookiesWork: function () { return COOKIES_WORK; },
    setCookiesWork: function (v) { COOKIES_WORK = v; },
    expireSession: function () { SESSION = false; },
    fail: function (path, status) { FAILURES[path] = status; },
    clearFailures: function () { FAILURES = {}; },
    empty: function () { REPORTS.length = 0; },
    restore: function (rows) { REPORTS.length = 0; rows.forEach(function (r) { REPORTS.push(r); }); }
  };
})(window);
