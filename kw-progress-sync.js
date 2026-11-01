/* ============================================================
   KLARWEG · PROGRESS SYNC  (kw-progress-sync.js)
   ------------------------------------------------------------
   Keeps a signed-in learner's chapter progress on the account, so it
   follows them across devices and browsers. The chapter page still
   reads and writes only its localStorage record "kw-ch-<chapter id>"
   (chapter/chapter-app.js); this file copies that record to and from
   the access Worker:

     GET  <API>/progress              every chapter row of this account
     POST <API>/progress/<chapter id> { record, baseUpdatedAt }
                                      409 → merge with the stored row, retry

   Synced fields: done, learned, quizScore, vocabVoice, resetAt,
   learnedAt, xpEarned/xpMax. Never synced: "saved" (account saved
   words already live on the server, saved-words.js) and UI state
   (panel, unit).

   Merge rules (merge(), pure):
     - a Restart (resetAt) newer on one side wins that side wholesale;
     - otherwise sections done = union, quiz = best score,
       learned words = the side changed last (learnedAt),
       voice = this device's choice, else the account's.

   This browser remembers which account it last synced
   ("kw-progress-meta"). Progress made here as a guest is merged into
   the first account that signs in; when a DIFFERENT account signs in
   later, the account copy replaces this browser's copy instead, so one
   person's progress never leaks into another's account.

   Signed out, offline, or a Worker without /progress (401/404/network
   error): nothing happens and the chapter keeps working from
   localStorage alone.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWProgressSync) return;

  var API = (global.KW_ACCESS_API || 'https://klarweg.in/api').replace(/\/+$/, '');
  var META_KEY = 'kw-progress-meta';
  var PREFIX = 'kw-ch-';
  var DEBOUNCE_MS = 1500;
  var CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}(?:-[a-z0-9]+){0,12}$/;

  function isObj(v) { return !!v && typeof v === 'object' && !Array.isArray(v); }
  function int(v) { return Number.isInteger(v) && v >= 0 ? v : 0; }
  function trueMap(m) {
    var out = {};
    if (isObj(m)) Object.keys(m).forEach(function (k) { if (m[k] === true) out[k] = true; });
    return out;
  }

  /* The synced part of a record, in the shape the Worker stores. */
  function pick(rec) {
    var r = isObj(rec) ? rec : {};
    var out = { done: trueMap(r.done), learned: trueMap(r.learned) };
    out.quizScore = Number.isInteger(r.quizScore) && r.quizScore >= 0 && r.quizScore <= 100 ? r.quizScore : null;
    if (r.vocabVoice === 'female' || r.vocabVoice === 'male') out.vocabVoice = r.vocabVoice;
    if (int(r.resetAt)) out.resetAt = r.resetAt;
    if (int(r.learnedAt)) out.learnedAt = r.learnedAt;
    if (Number.isInteger(r.xpMax) && r.xpMax > 0 && Number.isInteger(r.xpEarned) && r.xpEarned >= 0 && r.xpEarned <= r.xpMax) {
      out.xpEarned = r.xpEarned; out.xpMax = r.xpMax;
    }
    return out;
  }
  var SYNCED = ['done', 'learned', 'quizScore', 'vocabVoice', 'resetAt', 'learnedAt', 'xpEarned', 'xpMax'];

  /* Stable text of the synced part — "did anything change?" */
  function key(rec) {
    var p = pick(rec);
    var sort = function (m) { var o = {}; Object.keys(m).sort().forEach(function (k) { o[k] = m[k]; }); return o; };
    p.done = sort(p.done); p.learned = sort(p.learned);
    return JSON.stringify(SYNCED.map(function (f) { return p[f] === undefined ? null : p[f]; }));
  }

  /* Local record (any fields) + account record → merged local record.
     Fields that are not synced are kept from the local record. */
  function merge(local, remote) {
    var L = isObj(local) ? local : {};
    var out = {};
    Object.keys(L).forEach(function (k) { out[k] = L[k]; });
    if (!isObj(remote)) return out;
    var l = pick(L), r = pick(remote);
    var lr = int(l.resetAt), rr = int(r.resetAt);
    var apply = function (src) {
      SYNCED.forEach(function (f) { if (src[f] === undefined) delete out[f]; else out[f] = src[f]; });
    };
    if (lr !== rr) {
      // The newer Restart wins wholesale: progress from before it is gone.
      if (rr > lr) apply(r);
      return out;
    }
    var m = { done: {}, learned: {} };
    Object.keys(l.done).concat(Object.keys(r.done)).forEach(function (k) { m.done[k] = true; });
    m.quizScore = l.quizScore == null ? r.quizScore : (r.quizScore == null ? l.quizScore : Math.max(l.quizScore, r.quizScore));
    var la = int(l.learnedAt), ra = int(r.learnedAt);
    if (!la && !ra) {
      Object.keys(l.learned).concat(Object.keys(r.learned)).forEach(function (k) { m.learned[k] = true; });
    } else {
      m.learned = ra > la ? r.learned : l.learned;
      m.learnedAt = Math.max(la, ra);
    }
    if (l.vocabVoice || r.vocabVoice) m.vocabVoice = l.vocabVoice || r.vocabVoice;
    if (lr) m.resetAt = lr;
    // Stored XP: the larger pair. The chapter recomputes it exactly on its
    // next save(); the roadmap only needs Begin / Continue / Completed.
    var xp = (l.xpEarned || 0) >= (r.xpEarned || 0) ? l : r;
    if (xp.xpMax) { m.xpEarned = xp.xpEarned; m.xpMax = xp.xpMax; }
    apply(m);
    return out;
  }

  /* ---------- storage ---------- */
  function readMeta() {
    try {
      var m = JSON.parse(global.localStorage.getItem(META_KEY) || 'null');
      if (isObj(m)) return { user: typeof m.user === 'string' ? m.user : null, bases: isObj(m.bases) ? m.bases : {} };
    } catch (e) {}
    return { user: null, bases: {} };
  }
  function writeMeta(m) { try { global.localStorage.setItem(META_KEY, JSON.stringify(m)); } catch (e) {} }
  function readLocal(id) {
    try { var r = JSON.parse(global.localStorage.getItem(PREFIX + id) || 'null'); return isObj(r) ? r : null; } catch (e) { return null; }
  }
  function writeLocal(id, rec) { try { global.localStorage.setItem(PREFIX + id, JSON.stringify(rec)); } catch (e) {} }
  function localIds() {
    var ids = [];
    try {
      for (var i = 0; i < global.localStorage.length; i++) {
        var k = global.localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0 && CHAPTER_ID.test(k.slice(PREFIX.length))) ids.push(k.slice(PREFIX.length));
      }
    } catch (e) {}
    return ids;
  }

  /* ---------- network ---------- */
  var disabled = false;            // 404 / 401: this session has no account sync
  var remoteKey = {};              // chapter id → key() of the last known account copy

  function fetchAll() {
    if (disabled) return Promise.resolve(null);
    return fetch(API + '/progress', { credentials: 'include', cache: 'no-store' }).then(function (res) {
      if (res.status === 401 || res.status === 404) { disabled = true; return null; }
      if (!res.ok) return null;
      return res.json();
    }).then(function (j) {
      return j && j.ok && typeof j.user === 'string' && isObj(j.chapters) ? j : null;
    }).catch(function () { return null; });
  }

  /* Bring this browser's records in line with the account (owner switch +
     merge), write them to localStorage. → { user, chapters, merged:{id:rec} } */
  function reconcile(data) {
    var meta = readMeta();
    var switched = meta.user !== null && meta.user !== data.user;
    var ids = {};
    localIds().forEach(function (id) { ids[id] = true; });
    Object.keys(data.chapters).forEach(function (id) { if (CHAPTER_ID.test(id)) ids[id] = true; });
    var merged = {};
    meta.bases = switched ? {} : meta.bases;
    Object.keys(ids).forEach(function (id) {
      var row = data.chapters[id];
      var local = readLocal(id);
      var next;
      if (switched) {
        // Another account used this browser: its progress stays its own.
        if (!local && !row) return;
        next = {};
        if (local) Object.keys(local).forEach(function (k) { if (SYNCED.indexOf(k) < 0 && k !== 'saved') next[k] = local[k]; });
        var src = pick(row ? row.record : null);
        SYNCED.forEach(function (f) { if (src[f] !== undefined) next[f] = src[f]; });
      } else {
        next = merge(local || {}, row ? row.record : null);
      }
      if (row) { meta.bases[id] = row.updatedAt; remoteKey[id] = key(row.record); }
      else { delete meta.bases[id]; delete remoteKey[id]; }
      if (!local || key(local) !== key(next) || switched) writeLocal(id, next);
      merged[id] = next;
    });
    meta.user = data.user;
    writeMeta(meta);
    return merged;
  }

  /* POST one chapter. On 409 merge with the stored row (onMerged gets the
     result) and try again. → Promise<boolean saved> */
  function send(id, rec, opts) {
    opts = opts || {};
    if (disabled || !CHAPTER_ID.test(id)) return Promise.resolve(false);
    if (remoteKey[id] === key(rec)) return Promise.resolve(true);
    var meta = readMeta();
    var base = Object.prototype.hasOwnProperty.call(meta.bases, id) ? meta.bases[id] : null;
    var body = JSON.stringify({ record: pick(rec), baseUpdatedAt: base });
    return fetch(API + '/progress/' + id, {
      method: 'POST', credentials: 'include', keepalive: !!opts.keepalive,
      headers: { 'content-type': 'application/json' }, body: body
    }).then(function (res) {
      if (res.status === 401 || res.status === 404) { disabled = true; return false; }
      return res.json().catch(function () { return null; }).then(function (j) {
        if (res.ok && j && Number.isInteger(j.updatedAt)) {
          var m = readMeta(); m.bases[id] = j.updatedAt; writeMeta(m);
          remoteKey[id] = key(rec);
          return true;
        }
        if (res.status === 409 && j && Number.isInteger(j.updatedAt)) {
          var m2 = readMeta(); m2.bases[id] = j.updatedAt; writeMeta(m2);
          remoteKey[id] = key(j.record);
          var next = merge(rec, j.record);
          if (typeof opts.onMerged === 'function') { try { opts.onMerged(next); } catch (e) {} }
          if ((opts.tries || 0) >= 2) return false;
          return send(id, next, { onMerged: opts.onMerged, tries: (opts.tries || 0) + 1, keepalive: opts.keepalive });
        }
        return false;
      });
    }).catch(function () { return false; });
  }

  /* ---------- chapter page ----------
     attach({ id, read: () => state, apply: (record) => void })
     → { schedule(), flush() } — schedule() after every local save. */
  function attach(o) {
    var timer = null, ready = false, pending = false;
    var applyMerged = function (rec) { try { o.apply(rec); } catch (e) {} };
    function flush(keepalive) {
      if (timer) { clearTimeout(timer); timer = null; }
      if (!ready) { pending = true; return Promise.resolve(false); }
      pending = false;
      return send(o.id, o.read(), { onMerged: applyMerged, keepalive: keepalive });
    }
    function schedule() {
      if (disabled) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () { timer = null; flush(false); }, DEBOUNCE_MS);
    }
    var leave = function () { if (timer || pending) flush(true); };
    global.addEventListener('pagehide', leave);
    global.document.addEventListener('visibilitychange', function () {
      if (global.document.visibilityState === 'hidden') leave();
    });
    fetchAll().then(function (data) {
      if (!data) return;
      // The chapter's in-memory state may be newer than its stored copy.
      var mem = o.read();
      if (isObj(mem)) writeLocal(o.id, mem);
      var merged = reconcile(data);
      ready = true;
      if (merged[o.id]) applyMerged(merged[o.id]);
      var now = readLocal(o.id);
      if (now && remoteKey[o.id] !== key(now) && (data.chapters[o.id] || hasProgress(now))) flush(false);
    });
    return { schedule: schedule, flush: flush };
  }

  function hasProgress(rec) {
    var p = pick(rec);
    return Object.keys(p.done).length > 0 || Object.keys(p.learned).length > 0 || p.quizScore != null || !!p.resetAt;
  }

  /* ---------- level roadmaps ----------
     Pull every chapter, merge into localStorage, upload what this browser
     has that the account lacks, then fire "kw:progress-synced". */
  function syncAll() {
    return fetchAll().then(function (data) {
      if (!data) return false;
      var merged = reconcile(data);
      try { global.dispatchEvent(new CustomEvent('kw:progress-synced')); } catch (e) {}
      var ids = Object.keys(merged).filter(function (id) {
        return remoteKey[id] !== key(merged[id]) && (data.chapters[id] || hasProgress(merged[id]));
      });
      return ids.reduce(function (p, id) {
        return p.then(function () {
          return send(id, merged[id], { onMerged: function (rec) { writeLocal(id, rec); } });
        });
      }, Promise.resolve()).then(function () { return true; });
    });
  }

  global.KWProgressSync = { merge: merge, pick: pick, attach: attach, syncAll: syncAll };
})(window);
