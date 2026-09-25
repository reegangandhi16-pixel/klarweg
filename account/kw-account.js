/* ============================================================
   KLARWEG · Account + Saved-Words store  (kw-account.js)
   ------------------------------------------------------------
   Phase 3: Saved is now a thin client over the Worker's Saved
   Words API (access/worker/src/saved-words.js, deployed in
   aa86e01) instead of localStorage. User is UNCHANGED — still the
   local, pre-real-auth profile object it always was; nothing in
   this phase touches it.

   MIGRATION NOTE — the old localStorage key `kw-saved-words` is no
   longer read or written by this module. It is deliberately left
   on disk, untouched: no automatic migration, no automatic import,
   no automatic deletion. A learner's pre-existing local saves are
   still sitting in that key if they ever want them back; nothing
   here silently destroys them.

   ASYNC CONTRACT — every Saved method that used to be synchronous
   is now asynchronous, because every read/write is now a network
   call to the authenticated Worker API. This is an intentional,
   necessary break from the old synchronous interface (documented
   per-method below). Every returned Promise RESOLVES (never
   rejects) to a plain result object shaped like the Worker's own
   JSON responses:
     success  → { ok: true, ...payload }
     failure  → { ok: false, reason, error, status }
   `reason` is one of:
     'unauthenticated' — no valid session; caller should prompt login
     'validation'       — the request itself was invalid (400)
     'rate-limited'     — too many requests (429)
     'server'           — any other non-2xx or malformed response
     'network'          — fetch itself failed (offline, DNS, CORS…)
     'config'           — window.KW_ACCESS_API is not set
   This module never distinguishes "empty collection" as an error —
   an authenticated call that legitimately has zero saved words
   resolves to { ok: true, words: [] } / { ok: true, counts: {...,
   total: 0} }, exactly like any other successful empty result. A
   caller only needs to branch on `ok` first, then look at `reason`
   in the false case, then treat an ok:true empty array as "empty",
   not as a failure — that is how the four states this phase was
   asked to keep distinguishable (unauthenticated / empty / server
   or network failure / validation failure) surface here.

   OPEN QUESTION FOR PHASE 4 — chapter-app.js currently derives a
   saved-word's id itself as `level + ':' + de` (see the add/remove
   call site around chapter-app.js:1347) before calling Saved.add /
   Saved.remove. The server now generates its own opaque id
   (`sw_<uuid>`) on save and does not accept a client-supplied id,
   so that id can no longer be computed locally ahead of time.
   Phase 4 will need to either look the real id up (e.g. from a
   fresh Saved.all()) or the id scheme will need to change — this
   phase intentionally leaves that unresolved rather than guessing
   at chapter-app.js's design.

   SavedWord row, as returned by Saved.all() / Saved.add() (mirrors
   the OLD on-disk shape as closely as possible for compatibility,
   with server-authoritative fields converted back to the units the
   original local shape used):
     {
       id:        string   // opaque, server-generated (sw_<uuid>)
       de:        string   // German word (with article for nouns)
       en:        string   // English translation
       type:      'noun'|'verb'|'adjective'|'adverb'|'phrase'|…|null
       level:     'A1'|'A2'|'B1'|'B2'|'C1'|'C2'
       gender:    'm'|'f'|'n'|null
       ipa:       string|null
       sourceRef: string|null   // new: e.g. 'a1/ch3/vocab', optional
       savedAt:   number        // epoch ms (converted from the API's
                                 // unix-seconds createdAt)
       srs:       { box: number, due: number|null, reviews: number }
                                 // due is epoch ms, converted from the
                                 // API's unix-seconds srs.due
     }
============================================================ */
(function (global) {
  'use strict';

  var USER_KEY = 'kw-user';

  /* ---------- Spaced repetition (Leitner) ----------
     Client-side copy of the SAME schedule the Worker now applies
     server-side (access/worker/src/saved-words.js) — used ONLY for
     previewDays(), a pure "what would happen" preview that must
     stay local (no network round-trip) and never commits anything.
     The actual review commit (Saved.review()) is computed by the
     server; this file no longer writes srs state itself. */
  var DAY = 86400000;
  var SRS_DAYS = [1, 3, 7, 14, 30];
  var MAX_BOX = SRS_DAYS.length - 1;

  function normSrs(w, now) {
    var t = typeof now === 'number' ? now : Date.now();
    var s = (w && w.srs) || {};
    var box = typeof s.box === 'number' && s.box >= 0 ? Math.min(s.box, MAX_BOX) : 0;
    return {
      box: box,
      due: typeof s.due === 'number' ? s.due : t,
      reviews: typeof s.reviews === 'number' ? s.reviews : 0
    };
  }
  function gradeSrs(cur, grade) {
    var now = Date.now(), box;
    if (grade === 'again') return { box: 0, due: now, reviews: cur.reviews + 1 };
    if (grade === 'hard') box = cur.box;
    else if (grade === 'good') box = Math.min(cur.box + 1, MAX_BOX);
    else if (grade === 'easy') box = Math.min(cur.box + 2, MAX_BOX);
    else return { box: cur.box, due: cur.due, reviews: cur.reviews };
    return { box: box, due: now + SRS_DAYS[box] * DAY, reviews: cur.reviews + 1 };
  }

  function read(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function emit() {
    try { global.dispatchEvent(new CustomEvent('kw:saved-changed')); } catch (e) {}
  }

  /* ---------- User (local profile until real auth is wired) ----------
     Unchanged in this phase — Saved's ownership is now enforced by the
     Worker via the session cookie, so User.get().id is no longer used
     by Saved at all, but chapter-app.js still calls User.get() for its
     own unrelated purposes, so this stays exactly as it was. */
  var User = {
    get: function () {
      var u = read(USER_KEY, null);
      if (!u) {
        u = { id: 'local-' + Math.random().toString(36).slice(2, 9), name: 'Learner', email: '', joined: Date.now() };
        write(USER_KEY, u);
      }
      return u;
    },
    set: function (patch) {
      var u = Object.assign(User.get(), patch || {});
      write(USER_KEY, u);
      return u;
    }
  };

  /* ---------- Worker transport ----------
     Deliberately self-contained rather than reusing global.KWAuth.request:
     account/saved-words.html and account/review.html — Saved's two real
     page consumers today — do not currently load kw-config.js or
     kw-auth.js (only kw-account.js), and this phase must not add script
     tags to those pages. Wiring those pages up to load kw-config.js (so
     window.KW_ACCESS_API is defined) is Phase 4/5 work. The conventions
     mirrored here (credentials:'include', mode:'cors', JSON body/response
     handling) are identical to kw-auth.js's own request() function. */
  function api() {
    return String(global.KW_ACCESS_API || '').replace(/\/+$/, '');
  }

  function apiErr(reason, message, status) {
    return { ok: false, reason: reason, error: message, status: status || 0 };
  }

  function defaultMessage(status) {
    if (status === 401) return 'Please sign in to save words to your account.';
    if (status === 404) return 'Not found.';
    if (status === 429) return 'Too many requests. Please wait a moment and try again.';
    return 'Something went wrong at our end. Please try again.';
  }

  function request(path, options) {
    options = options || {};
    var base = api();
    if (!base) {
      return Promise.resolve(apiErr('config', 'The Klarweg account service is not configured.'));
    }
    var init = {
      method: options.method || 'GET',
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
      mode: 'cors'
    };
    if (options.body != null) {
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(options.body);
    }
    return fetch(base + path, init).then(function (r) {
      return r.text().then(function (text) {
        var data = null;
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = null; }
        if (!r.ok || !data || data.ok === false) {
          var reason = r.status === 401 ? 'unauthenticated'
            : r.status === 429 ? 'rate-limited'
            : r.status === 400 ? 'validation'
            : 'server';
          return apiErr(reason, (data && data.error) || defaultMessage(r.status), r.status);
        }
        return Object.assign({ ok: true, status: r.status }, data);
      });
    }, function () {
      return apiErr('network', 'We could not reach Klarweg. Check your connection and try again.');
    });
  }

  /* API row -> client SavedWord shape (see file header). */
  function fromApiWord(row) {
    var srs = row && row.srs ? row.srs : {};
    return {
      id: row.id,
      de: row.de,
      en: row.en,
      type: row.wordType || null,
      level: row.level,
      gender: row.gender || null,
      ipa: row.ipa || null,
      sourceRef: row.sourceRef || null,
      savedAt: typeof row.createdAt === 'number' ? row.createdAt * 1000 : Date.now(),
      srs: {
        box: typeof srs.box === 'number' ? srs.box : 0,
        due: typeof srs.due === 'number' ? srs.due * 1000 : null,
        reviews: typeof srs.reviews === 'number' ? srs.reviews : 0
      }
    };
  }

  /* ---------- Saved words (account-backed) ---------- */
  var Saved = {
    /* Was sync, returned an array. Now async: Promise<{ok:true, words}>
       or the {ok:false,...} failure shape described in the file header. */
    all: function () {
      return request('/saved-words', { method: 'GET' }).then(function (res) {
        if (!res.ok) return res;
        return { ok: true, words: (res.words || []).map(fromApiWord) };
      });
    },

    /* Was sync, returned {A1..C2,total} directly. Now async, and the
       counts object is nested under `counts` so the result shape stays
       consistent with every other method here ({ok, ...}). */
    counts: function () {
      return request('/saved-words/counts', { method: 'GET' }).then(function (res) {
        if (!res.ok) return res;
        return { ok: true, counts: res.counts };
      });
    },

    /* Was sync, returned a boolean (true = newly added, false = already
       saved). Now async: Promise<{ok:true, created, word}> where
       `created` carries that same true/false meaning (created:false on
       an idempotent repeat save), or the failure shape. Never creates
       anything locally — an unauthenticated caller gets back
       {ok:false, reason:'unauthenticated', ...} rather than a silent
       local save. */
    add: function (word) {
      if (!word || typeof word !== 'object' || !word.de || !word.level) {
        return Promise.resolve(apiErr('validation', 'A word (de, level) is required.'));
      }
      var body = {
        de: word.de,
        en: word.en,
        level: word.level
      };
      if (word.type != null) body.wordType = word.type;
      if (word.gender != null) body.gender = word.gender;
      if (word.ipa != null) body.ipa = word.ipa;
      if (word.sourceRef != null) body.sourceRef = word.sourceRef;

      return request('/saved-words', { method: 'POST', body: body }).then(function (res) {
        if (!res.ok) return res;
        emit();
        return { ok: true, created: res.status === 201, word: fromApiWord(res.word) };
      });
    },

    /* Was sync, returned a boolean (true = a row was actually removed).
       Now async: Promise<{ok:true}> on success. The Worker's DELETE is
       intentionally idempotent and non-leaking (see aa86e01) — it
       always resolves {ok:true} whether a row existed and was removed,
       already didn't exist, or belonged to someone else, so this can no
       longer report "was anything actually removed". */
    remove: function (id) {
      if (typeof id !== 'string' || !id) {
        return Promise.resolve(apiErr('validation', 'A word id is required.'));
      }
      return request('/saved-words/' + encodeURIComponent(id), { method: 'DELETE' }).then(function (res) {
        if (res.ok) emit();
        return res;
      });
    },

    /* ---------- Review scheduling ---------- */
    SRS_DAYS: SRS_DAYS.slice(),
    MAX_BOX: MAX_BOX,

    /* Pure, local, synchronous — UNCHANGED. Previews the interval a
       grade would produce without committing anything, so it must stay
       network-free. */
    previewDays: function (w, grade) {
      var next = gradeSrs(normSrs(w), grade);
      return grade === 'again' ? 0 : SRS_DAYS[next.box];
    },

    /* Was sync, returned an array. Now async — depends on all(), so it
       carries the same {ok:true, words} / {ok:false,...} shape. */
    dueNow: function (at) {
      var t = typeof at === 'number' ? at : Date.now();
      return Saved.all().then(function (res) {
        if (!res.ok) return res;
        var words = res.words
          .filter(function (w) { return normSrs(w, t).due <= t; })
          .sort(function (a, b) { return normSrs(a, t).due - normSrs(b, t).due || a.savedAt - b.savedAt; });
        return { ok: true, words: words };
      });
    },

    /* Was sync, returned a number. Now async: Promise<{ok:true, count}>. */
    dueCount: function (at) {
      return Saved.dueNow(at).then(function (res) {
        return res.ok ? { ok: true, count: res.words.length } : res;
      });
    },

    /* Was sync, returned the new srs object or null for an unknown id.
       Now async: Promise<{ok:true, srs}>. The Worker returns 404 for
       BOTH "no such id" and "id belongs to another user" (no existence
       leak — see aa86e01), which surfaces here as reason:'server'
       (a 404 is not 401/429/400, so it falls into the generic bucket;
       the human-readable message "Not found." is preserved either way). */
    review: function (id, grade) {
      if (typeof id !== 'string' || !id) {
        return Promise.resolve(apiErr('validation', 'A word id is required.'));
      }
      return request('/saved-words/' + encodeURIComponent(id) + '/review', {
        method: 'PATCH',
        body: { grade: grade }
      }).then(function (res) {
        if (!res.ok) return res;
        emit();
        return {
          ok: true,
          srs: {
            box: res.srs.box,
            due: typeof res.srs.due === 'number' ? res.srs.due * 1000 : null,
            reviews: res.srs.reviews
          }
        };
      });
    },

    /* ---------- Backup: export / import ----------
       Export is now a read of server state, so it is safe to keep —
       converted to async since it goes through Saved.all(). Import is
       NOT safe to blindly carry over: see importData() below. */
    EXPORT_FORMAT: 'klarweg-saved-words',
    EXPORT_VERSION: 1,

    /* Was sync, returned the export object directly. Now async:
       Promise<{ok:true, format, version, exportedAt, words}>. Read-only
       against the server, so this carries no corruption risk. */
    exportData: function () {
      return Saved.all().then(function (res) {
        if (!res.ok) return res;
        return {
          ok: true,
          format: 'klarweg-saved-words',
          version: 1,
          exportedAt: new Date().toISOString(),
          words: res.words.map(function (w) {
            var s = normSrs(w);
            return {
              de: w.de, en: w.en, type: w.type || null, level: w.level,
              gender: w.gender || null, ipa: w.ipa || null,
              savedAt: w.savedAt,
              srs: { box: s.box, due: (w.srs && typeof w.srs.due === 'number') ? w.srs.due : null, reviews: s.reviews }
            };
          })
        };
      });
    },

    /* Pure validator — UNCHANGED, still local-only and safe. Validates a
       parsed payload WITHOUT touching anything. Kept as-is (not called
       by importData() below anymore, but preserved so a future phase's
       real import implementation does not have to rewrite this logic). */
    validateImport: function (data) {
      var MAXSTR = 200;
      function bad(msg) { return { ok: false, error: msg, words: [] }; }
      if (!data || typeof data !== 'object' || Array.isArray(data)) return bad('This file is not a Klarweg backup.');
      if (data.format !== 'klarweg-saved-words') return bad('This file is not a Klarweg saved-words backup.');
      if (data.version !== 1) return bad('This backup was made by a different version of Klarweg (version ' + String(data.version) + ').');
      if (!Array.isArray(data.words)) return bad('This backup has no word list.');
      var LEVELS = { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1, C2: 1 };
      var out = [], seen = {};
      for (var i = 0; i < data.words.length; i++) {
        var w = data.words[i], at = 'Word ' + (i + 1);
        if (!w || typeof w !== 'object' || Array.isArray(w)) return bad(at + ' is not a word record.');
        if (typeof w.de !== 'string' || !w.de.trim() || w.de.length > MAXSTR) return bad(at + ' has no valid German word.');
        if (typeof w.en !== 'string' || w.en.length > MAXSTR) return bad(at + ' (' + w.de + ') has no valid translation.');
        if (typeof w.level !== 'string' || !LEVELS[w.level]) return bad(at + ' (' + w.de + ') has an unknown level.');
        if (w.type != null && (typeof w.type !== 'string' || w.type.length > 40)) return bad(at + ' (' + w.de + ') has an invalid type.');
        if (w.gender != null && ['m', 'f', 'n'].indexOf(w.gender) < 0) return bad(at + ' (' + w.de + ') has an invalid gender.');
        if (w.ipa != null && (typeof w.ipa !== 'string' || w.ipa.length > MAXSTR)) return bad(at + ' (' + w.de + ') has invalid pronunciation.');
        var s = w.srs;
        if (s == null) s = { box: 0, due: null, reviews: 0 };
        if (typeof s !== 'object' || Array.isArray(s)) return bad(at + ' (' + w.de + ') has invalid review data.');
        if (typeof s.box !== 'number' || !isFinite(s.box) || s.box % 1 !== 0 || s.box < 0 || s.box > MAX_BOX)
          return bad(at + ' (' + w.de + ') has a review box outside 0–' + MAX_BOX + '.');
        if (typeof s.reviews !== 'number' || !isFinite(s.reviews) || s.reviews % 1 !== 0 || s.reviews < 0)
          return bad(at + ' (' + w.de + ') has an invalid review count.');
        if (s.due != null && (typeof s.due !== 'number' || !isFinite(s.due) || s.due <= 0))
          return bad(at + ' (' + w.de + ') has an invalid review date.');
        var savedAt = (typeof w.savedAt === 'number' && isFinite(w.savedAt) && w.savedAt > 0) ? w.savedAt : Date.now();
        var id = w.level + ':' + w.de;
        if (seen[id]) continue; // duplicate inside one file — first wins
        seen[id] = 1;
        out.push({
          id: id, de: w.de, en: w.en, type: w.type || null, level: w.level,
          gender: w.gender || null, ipa: w.ipa || null, savedAt: savedAt,
          srs: { box: s.box, due: s.due == null ? null : s.due, reviews: s.reviews }
        });
      }
      return { ok: true, error: null, words: out };
    },

    /* NOT YET IMPLEMENTED for account-backed data — deliberately a
       stub, not a rewrite. The old implementation merged a validated
       payload into localStorage with an all-or-nothing snapshot/
       rollback, which is meaningless once the data of record lives on
       the server: replaying the same merge as N sequential POST/PATCH
       calls would not be atomic (a failure partway leaves the server in
       a mixed state) and the old "higher reviews wins" merge rule could
       silently overwrite real review progress using rules designed for
       a trusted, single-writer local store. A safe version needs a
       dedicated batch-import Worker endpoint (env.DB.batch() gives real
       atomicity, as entitlements.js's grantProduct already
       demonstrates) with an explicit conflict policy — that is backend
       design work, out of scope for this frontend-only phase, and
       should not happen as a side effect of this rename. Kept present
       (rather than deleted) so account/saved-words.html's existing
       `Saved.importData(data)` call site does not throw; it now always
       reports this honestly instead of silently doing nothing. */
    importData: function (data) {
      return Promise.resolve(
        apiErr('not-implemented', 'Restoring a backup is not available yet for account-based saved words. This is coming in a later update.')
      );
    },

    /* DISABLED — a real account must never be seeded with fake demo
       data. Kept as a callable no-op (rather than removed) only because
       account/saved-words.html:293 currently calls Saved.seedOnce(SEED)
       unguarded at top level; deleting the method would throw and halt
       that page's script before Phase 5 removes the call site. Does
       nothing: no local write, no network call, no demo words ever
       appear. */
    seedOnce: function () { /* intentionally disabled — see comment above */ }
  };

  global.KW_Account = { User: User, Saved: Saved };
})(window);
