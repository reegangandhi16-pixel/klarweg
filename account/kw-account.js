/* ============================================================
   KLARWEG · Account + Saved-Words store  (kw-account.js)
   ------------------------------------------------------------
   On-device persistence layer, shaped to mirror a real backend
   so it is drop-in replaceable with API calls later.

   Storage keys (per browser profile = "the user" until real auth):
     kw-user           → { id, name, email, joined }
     kw-saved-words    → [ SavedWord, ... ]

   SavedWord row (mirrors the DB schema in SAVED-WORDS-BACKEND.md):
     {
       id:        string   // stable: `${level}:${de}`
       userId:    string   // owner — enforced server-side later
       de:        string   // German word (with article for nouns)
       en:        string   // English translation
       type:      'noun'|'verb'|'adjective'|'adverb'|'phrase'|…
       level:     'A1'|'A2'|'B1'|'B2'|'C1'|'C2'
       gender:    'm'|'f'|'n'|null
       ipa:       string|null
       savedAt:   number   // epoch ms
       // future-ready (flashcards / spaced repetition / review):
       srs:       { box: number, due: number|null, reviews: number }
     }
============================================================ */
(function (global) {
  'use strict';

  var USER_KEY = 'kw-user';
  var SAVED_KEY = 'kw-saved-words';

  /* ---------- Spaced repetition (Leitner) ----------
     Box numbering is the one already on disk: box 0 is the FIRST stage (a
     newly saved, never-reviewed word), box 4 the last. SRS_DAYS[box] is the
     interval scheduled when a word lands in that box. Nothing here rewrites
     existing rows: a row with no `srs`, no `box`, or a null `due` is READ as
     box 0 / due now, and only ever written when that word is actually
     reviewed. */
  var DAY = 86400000;
  var SRS_DAYS = [1, 3, 7, 14, 30];
  var MAX_BOX = SRS_DAYS.length - 1;

  function normSrs(w, now) {
    var t = typeof now === 'number' ? now : Date.now();
    var s = (w && w.srs) || {};
    var box = typeof s.box === 'number' && s.box >= 0 ? Math.min(s.box, MAX_BOX) : 0;
    return {
      box: box,
      // A row with no schedule yet (legacy row, or srs.due === null) is due
      // NOW. `t` is passed in by callers that also compare against it, so a
      // legacy row reads as exactly due rather than a tick into the future.
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

  /* ---------- User (local profile until real auth is wired) ---------- */
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

  /* ---------- Saved words ---------- */
  var Saved = {
    all: function () {
      var uid = User.get().id;
      // Ownership filter — locally everything belongs to the one profile,
      // but we still scope by userId so the model matches the server.
      return read(SAVED_KEY, []).filter(function (w) { return !w.userId || w.userId === uid; });
    },
    has: function (id) { return Saved.all().some(function (w) { return w.id === id; }); },
    add: function (word) {
      var list = read(SAVED_KEY, []);
      var id = word.id || (word.level + ':' + word.de);
      if (list.some(function (w) { return w.id === id; })) return false;
      list.push(Object.assign({
        id: id,
        userId: User.get().id,
        gender: null,
        ipa: null,
        savedAt: Date.now(),
        srs: { box: 0, due: Date.now(), reviews: 0 }
      }, word, { id: id }));
      write(SAVED_KEY, list);
      emit();
      return true;
    },
    remove: function (id) {
      var list = read(SAVED_KEY, []);
      var next = list.filter(function (w) { return w.id !== id; });
      write(SAVED_KEY, next);
      emit();
      return next.length !== list.length;
    },
    toggle: function (word) {
      var id = word.id || (word.level + ':' + word.de);
      if (Saved.has(id)) { Saved.remove(id); return false; }
      Saved.add(word); return true;
    },
    counts: function () {
      var c = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0, total: 0 };
      Saved.all().forEach(function (w) { if (c[w.level] != null) c[w.level]++; c.total++; });
      return c;
    },

    /* ---------- Review scheduling ---------- */
    SRS_DAYS: SRS_DAYS.slice(),
    MAX_BOX: MAX_BOX,
    /* Normalized SRS for a row — safe on legacy rows, never writes. */
    srs: function (w) { return normSrs(w); },
    /* What the next interval would be for a grade, in days (for UI labels). */
    previewDays: function (w, grade) {
      var next = gradeSrs(normSrs(w), grade);
      return grade === 'again' ? 0 : SRS_DAYS[next.box];
    },
    /* Saved words due now or overdue, soonest-due first. */
    dueNow: function (at) {
      var t = typeof at === 'number' ? at : Date.now();
      return Saved.all()
        .filter(function (w) { return normSrs(w, t).due <= t; })
        .sort(function (a, b) { return normSrs(a, t).due - normSrs(b, t).due || a.savedAt - b.savedAt; });
    },
    dueCount: function (at) { return Saved.dueNow(at).length; },
    /* Record one review. grade: 'again' | 'hard' | 'good' | 'easy'.
       Writes only this row; returns the new srs, or null if id is unknown. */
    review: function (id, grade) {
      var list = read(SAVED_KEY, []), out = null;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id !== id) continue;
        out = gradeSrs(normSrs(list[i]), grade);
        list[i] = Object.assign({}, list[i], { srs: out });
        break;
      }
      if (!out) return null;
      write(SAVED_KEY, list);
      emit();
      return out;
    },
    /* ---------- Backup: export / import ----------
       Offline portability only — no server, no tombstones. Export carries the
       learner's own saved rows and their SRS state, nothing else (no chapter
       vocabulary, no lexicon, no progress keys, no session/account data).
       Merge identity is `level + de`, the same key the store already uses. */
    EXPORT_FORMAT: 'klarweg-saved-words',
    EXPORT_VERSION: 1,

    exportData: function () {
      return {
        format: 'klarweg-saved-words',
        version: 1,
        exportedAt: new Date().toISOString(),
        words: Saved.all().map(function (w) {
          var s = normSrs(w);
          return {
            de: w.de, en: w.en, type: w.type || null, level: w.level,
            gender: w.gender || null, ipa: w.ipa || null,
            savedAt: typeof w.savedAt === 'number' ? w.savedAt : null,
            // `due` is exported as authored: null stays null (never reviewed)
            // rather than being frozen to this moment's timestamp.
            srs: { box: s.box, due: (w.srs && typeof w.srs.due === 'number') ? w.srs.due : null, reviews: s.reviews }
          };
        })
      };
    },

    /* Validate a parsed payload WITHOUT touching the store.
       Returns { ok, error, words } — words are normalized, ready to merge. */
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

    /* Merge a validated payload into the store.
       New word → imported as-is. Existing word → metadata kept, SRS merged:
       higher `reviews` wins; on a tie the later `due` wins; an existing
       review count is never reduced and a reviewed word is never reset.
       All-or-nothing: any unexpected error restores the pre-import snapshot. */
    importData: function (data) {
      var check = Saved.validateImport(data);
      if (!check.ok) return { ok: false, error: check.error, imported: 0, merged: 0, unchanged: 0 };
      var snapshot = localStorage.getItem(SAVED_KEY); // in-memory rollback point
      try {
        var uid = User.get().id;
        var list = read(SAVED_KEY, []);
        var index = {};
        list.forEach(function (w, i) { index[w.level + ':' + w.de] = i; });
        var imported = 0, merged = 0, unchanged = 0;
        check.words.forEach(function (inc) {
          var at = index[inc.id];
          if (at == null) {
            list.push(Object.assign({ userId: uid }, inc));
            index[inc.id] = list.length - 1;
            imported++;
            return;
          }
          var cur = list[at], curS = normSrs(cur), incS = inc.srs;
          var take = incS.reviews > curS.reviews ||
            (incS.reviews === curS.reviews && incS.due != null && incS.due > curS.due);
          if (!take) { unchanged++; return; }
          list[at] = Object.assign({}, cur, {
            srs: {
              box: Math.max(incS.box, curS.box),
              due: incS.due == null ? curS.due : incS.due,
              reviews: Math.max(incS.reviews, curS.reviews)
            }
          });
          merged++;
        });
        write(SAVED_KEY, list);
        // Confirm the write landed and is readable before declaring success.
        var back = read(SAVED_KEY, null);
        if (!Array.isArray(back) || back.length !== list.length) throw new Error('store write did not persist');
        emit();
        return { ok: true, error: null, imported: imported, merged: merged, unchanged: unchanged };
      } catch (e) {
        try {
          if (snapshot == null) localStorage.removeItem(SAVED_KEY);
          else localStorage.setItem(SAVED_KEY, snapshot);
        } catch (e2) {}
        return { ok: false, error: 'Import failed, so nothing was changed.', imported: 0, merged: 0, unchanged: 0 };
      }
    },

    /* Seed realistic data the first time, so the page demonstrates fully.
       Real saves from chapters are added on top and never overwritten. */
    seedOnce: function (seed) {
      if (localStorage.getItem(SAVED_KEY) != null) return;
      var uid = User.get().id;
      var now = Date.now(), day = 86400000;
      var rows = seed.map(function (w, i) {
        return Object.assign({
          id: w.level + ':' + w.de,
          userId: uid,
          gender: w.gender || null,
          ipa: w.ipa || null,
          savedAt: now - (seed.length - i) * (day * 0.7) - Math.floor(Math.random() * day),
          srs: { box: 0, due: null, reviews: 0 }
        }, w);
      });
      write(SAVED_KEY, rows);
    }
  };

  global.KW_Account = { User: User, Saved: Saved };
})(window);
