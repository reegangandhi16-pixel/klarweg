/**
 * public/audio/kw-audio-engine.js
 * ----------------------------------------------------------------------------
 * KLARWEG UNIFIED AUDIO ENGINE (Approach C — long-term architecture)
 *
 * Resolution chain for any German string:
 *
 *    1. Manifest      (pre-generated MP3, fast path — optional)
 *    2. IndexedDB     (cached TTS blob, keyed by the text itself)
 *    3. Hosted Neural TTS endpoint (on-demand; result is cached → step 2)
 *    4. Browser speechSynthesis (de-DE) — graceful fallback
 *    5. Visible error / disabled button — last resort
 *
 * No pre-generated manifest is REQUIRED — it's purely an optional fast path.
 * Audio for any new word/sentence is produced on demand and cached forever.
 *
 * Public API (back-compat with the old runtime + new methods):
 *    window.audioUrl(text)              → manifest URL if present, else undefined
 *    window.KW_speak(text, opts)        → resolve + play (returns Promise<'manifest'|'cache'|'tts-endpoint'|'browser-tts'|'error'>)
 *    window.KW_playAudio(text, opts)    → alias of KW_speak (Promise<boolean-ish>)
 *    window.KW_audioState(text)         → 'manifest'|'cache'|'remote'|'browser'|'none' (no playback; for button gating)
 *    window.KW_prepare(text)            → ensure audio is available (cache/generate) without playing; Promise
 *    window.KW_cacheStats()             → { items, bytes, hits, misses, hitRate }
 *    window.KW_onAudioEvent(fn)         → subscribe to lifecycle events
 *    window.KW_TTS                      → provider abstraction (configure endpoint/provider)
 * ------------------------------------------------------------------------- */
(function (global) {
  'use strict';

  var LOG = '[kw-audio]';
  var DEBUG = /[?&]kwaudio=debug/.test(global.location ? global.location.search : '');

  // Keep Chrome/Edge's speechSynthesis from silently wedging into a "paused"
  // state after ~15s idle or a backgrounded tab — a well-known browser bug
  // where speak() then queues an utterance that never starts (no sound, no
  // error). Nudging resume() periodically prevents it instead of only
  // reacting after a word has already failed to play.
  if (global.speechSynthesis) {
    setInterval(function () {
      if (global.speechSynthesis.paused) global.speechSynthesis.resume();
    }, 4000);
  }

  /* ── Real Audio constructor (shadow-proof) ───────────────────────────── */
  var AudioCtor = global.Audio || (typeof Audio !== 'undefined' ? Audio : null);

  /* ── Event bus ───────────────────────────────────────────────────────── */
  var listeners = [];
  function emit(type, data) {
    var ev = Object.assign({ type: type, t: Date.now() }, data || {});
    if (DEBUG) console.log(LOG, type, data || '');
    for (var i = 0; i < listeners.length; i++) { try { listeners[i](ev); } catch (e) {} }
  }

  /* ── Text normalization (cache key) ──────────────────────────────────── */
  function normalize(text) {
    return String(text == null ? '' : text)
      .replace(/\s+/g, ' ')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim();
  }

  /* ── Canonical key (FORMATTING-ONLY equivalence) ──────────────────────
   * The UI does not always ask for the text a manifest stores. A story line
   * is requested as its token join — `tokens.filter(!plain).map(w).join(' ')`
   * — so punctuation tokens are dropped: the page asks for
   *   "Herzlich willkommen Ich bin Frau Weber"
   * while the manifest holds
   *   "Herzlich willkommen! Ich bin Frau Weber."
   * Same render, two spellings. canonKey() collapses ONLY differences that
   * cannot change what a speaker says:
   *   · whitespace / line joining
   *   · typographic quotes, dashes and ellipses → ASCII
   *   · sentence and clause punctuation
   *   · letter case
   * It deliberately does NOT touch letters, digits, umlauts or ß, so two
   * genuinely different German sentences can never share a canonical key.
   * Words stay separated: punctuation becomes a space, never nothing, so
   * "Ja, wir" and "Jawir" do not collide.
   * Every canonical index built from it is COLLISION-GUARDED — if two
   * different stored texts reduce to the same key, the key is poisoned and
   * resolves to nothing rather than to a coin flip. */
  function canonKey(text) {
    return normalize(text)
      .replace(/[\u2013\u2014]/g, '-')
      .replace(/\u2026/g, '.')
      .replace(/[\u201E\u201C\u201D\u00AB\u00BB\u2039\u203A]/g, '"')
      .replace(/[.,!?;:\u00BF\u00A1"'()\[\]{}\u2026\u2013\u2014-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }
  /* Split a German text into sentences the same way the chapter player's
   * speakSequence() does, so a stored multi-sentence line can be compared
   * against the single-sentence requests the player actually makes. */
  function splitSentences(text) {
    var m = normalize(text).match(/[^.!?]+[.!?]*/g) || [];
    return m.map(function (s) { return s.trim(); }).filter(Boolean);
  }
  /* Add to a collision-guarded canonical index. */
  function canonAdd(index, text, value) {
    var k = canonKey(text);
    if (!k) return;
    var slot = index[k];
    if (slot === undefined) { index[k] = { text: normalize(text), value: value }; return; }
    if (slot === null) return;                                  // already poisoned
    if (slot.text === normalize(text)) return;                   // same source text
    index[k] = null;                                             // ambiguous → refuse
    emit('canon-collision', { key: k, a: slot.text, b: normalize(text) });
  }
  function canonGet(index, text) {
    var slot = index[canonKey(text)];
    return slot ? slot.value : undefined;
  }

  /* ════════════════════════════════════════════════════════════════════
     1. MANIFEST (optional fast path)
     ════════════════════════════════════════════════════════════════════ */
  var MAP = {}, MAP_LC = {}, MAP_CANON = {}, MAP_SENT = {}, manifestReady = false, manifestBase = '/audio/';
  var A1MAP = {}, A1MAP_LC = {}, A1MAP_CANON = {}, a1Ready = false;   // dual-voice vocab map (all levels merged)
  var vocabSourceStats = [];
  // Dual-voice vocabulary is spread over MORE THAN ONE published manifest and
  // the engine has to read all of them, in priority order:
  //
  //   1. klarweg-audio-cdn/manifest.json      9,403 terms, readable filenames
  //   2. klarweg-audio/…/a1-words-manifest    1,902 terms, sha256 filenames
  //   3. klarweg-audio/…/a2-words-manifest    1,444 terms, sha256 filenames
  //   4. klarweg-audio/…/b1-words-manifest    (published when it exists)
  //
  // Loading only (1) is what made A1/A2 vocabulary audio look missing: `der
  // Apfel`, `das Buch` and ~2,500 other core terms are absent from (1) but
  // ARE published, and serving 200, from (2)/(3). Those files must never be
  // regenerated. Each source keeps its OWN base, because their paths differ:
  // (1) stores CDN-relative "audio/female/die_Chancengleichheit.mp3", while
  // (2)/(3) store root-relative "/audio/words/female/<sha16>.mp3".
  var VOCAB_CDN_BASE = 'https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/';
  var VOCAB_MANIFEST_URL = VOCAB_CDN_BASE + 'manifest.json';
  // The per-level word manifests and their MP3s are published here. This base
  // is DECLARED rather than read from window.KW_AUDIO_BASE on purpose: the
  // config script that sets KW_AUDIO_BASE loads after this engine, and while
  // the browser is fetching it our setTimeout(0) loader can already run — a
  // race that silently pointed these manifests (and every "/audio/words/…"
  // path inside them) at the local folder, where the files do not exist.
  var WORDS_CDN_BASE = 'https://cdn.jsdelivr.net/gh/reegangandhi16-pixel/klarweg-audio@main/public/audio/';
  var VOCAB_SOURCES = [
    { id: 'vocab-cdn', urls: [VOCAB_MANIFEST_URL], base: VOCAB_CDN_BASE },
    { id: 'a1-words', file: 'a1-words-manifest.json' },
    { id: 'a2-words', file: 'a2-words-manifest.json' },
    { id: 'b1-words', file: 'b1-words-manifest.json' }
  ];
  /* Candidate URLs for one source, in order: its published CDN home, then the
   * configured base, then the script-relative folder. Whichever answers first
   * also becomes the base its relative MP3 paths resolve against, so a
   * manifest and its files can never come from different origins. */
  function sourceCandidates(src) {
    if (src.urls) return src.urls.map(function (u) { return { url: u, base: src.base }; });
    var seen = {}, list = [];
    [WORDS_CDN_BASE, audioBase(), manifestBase].forEach(function (b) {
      if (!b || seen[b]) return; seen[b] = 1;
      list.push({ url: b + src.file, base: b });
    });
    return list;
  }

  // CDN base: when window.KW_AUDIO_BASE is set, ALL audio (manifests + MP3s)
  // resolve against it — so no MP3 files need to live in this project.
  function audioBase() {
    var b = global.KW_AUDIO_BASE;
    if (b) return b.charAt(b.length - 1) === '/' ? b : b + '/';
    return manifestBase;   // fall back to the script-relative folder
  }

  (function loadManifests() {
    // Capture the script-relative base SYNCHRONOUSLY (document.currentScript is
    // null inside the deferred callback below).
    var base = '/audio/';
    try {
      var s = document.currentScript && document.currentScript.src;
      if (s) base = s.replace(/[^/]*$/, '');
    } catch (e) {}
    manifestBase = base;

    // Defer the actual fetching to the next tick so that a config script loaded
    // AFTER the engine (kw-tts-config.js) has set window.KW_AUDIO_BASE first.
    // Without this, audioBase() reads KW_AUDIO_BASE before it exists → the A1
    // manifest is fetched from the wrong (local) path and never loads.
    setTimeout(startLoading, 0);

    function startLoading() {
      var ab = audioBase();
      // Prefer the CDN copy of each manifest first, then local fallbacks.
      var candidates = [base + 'manifest.json', '/audio/manifest.json', ab + 'manifest.json', 'public/audio/manifest.json'];
      var i = 0;
      (function next() {
        if (i >= candidates.length) { manifestReady = true; emit('manifest-loaded', { entries: 0, source: 'none' }); return; }
        fetch(candidates[i], { cache: 'no-cache' })
          .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
          .then(function (json) {
            MAP = (json && json.entries) ? json.entries : (json || {});
            MAP_LC = {}; MAP_CANON = {}; MAP_SENT = {};
            for (var k in MAP) if (Object.prototype.hasOwnProperty.call(MAP, k)) {
              MAP_LC[normalize(k).toLowerCase()] = MAP[k];
              canonAdd(MAP_CANON, k, MAP[k]);
              // A stored line that is ONE sentence can safely answer that
              // sentence's request. A stored line made of SEVERAL sentences
              // cannot: the player asks for one sentence at a time and would
              // replay the whole line per sentence, so it is left unmapped
              // and reported as genuinely missing instead.
              var parts = splitSentences(k);
              if (parts.length === 1) canonAdd(MAP_SENT, parts[0], MAP[k]);
            }
            manifestReady = true;
            emit('manifest-loaded', { entries: Object.keys(MAP).length, source: candidates[i] });
          })
          .catch(function () { i++; next(); });
      })();

      // Dual-voice vocabulary manifest (female/male) — single CDN source.
      ensureVocabManifest();

      // Warm the conjugation + word-form manifests now, in parallel, instead
      // of serially on the first click (speak() awaits both before it can
      // resolve any URL). Both loaders are memoized, so speak() just joins
      // these in-flight fetches. If this early attempt fails (e.g. a timeout
      // while the page is still loading), forget it so the first click still
      // gets its own attempt — exactly as before this warm-up existed.
      warmManifest(ensureConjugationManifest, function () { return conjugationManifestPromise; },
        function () { return CONJUGATION_MAP; }, function () { conjugationManifestPromise = null; });
      warmManifest(ensureWordFormManifest, function () { return wordFormManifestPromise; },
        function () { return WORD_FORM_MAP; }, function () { wordFormManifestPromise = null; });
    }
    function warmManifest(ensure, current, map, reset) {
      try {
        var p = ensure();
        p.then(function () {
          if (current() === p && !Object.keys(map()).length) reset();
        });
      } catch (e) {}
    }
  })();

  function manifestEntry(text) {
    var n = normalize(text);
    return MAP[n]
        || MAP_LC[n.toLowerCase()]
        || MAP_LC[n.toLowerCase().replace(/[.,!?;:]+$/, '')]
        || canonGet(MAP_CANON, n)      // formatting-only equivalence
        || canonGet(MAP_SENT, n);      // one sentence of a single-sentence line
  }
  /** Which layer answered, and with what — for auditing, button gating and
   *  the repair report. Never plays anything. */
  function resolveInfo(text, gender) {
    var n = normalize(text);

    // Match speak() priority: exact authored conjugation audio first.
    var conj = conjugationUrl(text);
    if (conj) return {
      text: n, source: 'conjugation', match: 'exact', url: conj
    };
    if (gender) {
      var ve = a1Entry(text);
      if (ve) {
        var vrel = ve[gender === 'male' ? 'male' : 'female'];
        if (vrel) return {
          text: n, source: 'vocab-manifest', manifest: ve._src || 'vocab',
          url: resolveVocabUrl(vrel, ve._base), match: A1MAP[n] ? 'exact' : (A1MAP_LC[n.toLowerCase()] ? 'case' : 'canonical')
        };
      }
    }
    if (MAP[n]) return { text: n, source: 'manifest', match: 'exact', url: resolveUrl(relOf(MAP[n])) };
    var lc = MAP_LC[n.toLowerCase()] || MAP_LC[n.toLowerCase().replace(/[.,!?;:]+$/, '')];
    if (lc) return { text: n, source: 'manifest', match: 'case', url: resolveUrl(relOf(lc)) };
    var cn = canonGet(MAP_CANON, n);
    if (cn) return { text: n, source: 'manifest', match: 'canonical', url: resolveUrl(relOf(cn)) };
    var sn = canonGet(MAP_SENT, n);
    if (sn) return { text: n, source: 'manifest', match: 'sentence-of-line', url: resolveUrl(relOf(sn)) };
    return { text: n, source: 'none', match: null, url: undefined };
  }
  function relOf(entry) { return !entry ? undefined : (typeof entry === 'string' ? entry : (entry.audio || entry.file)); }
  function resolveUrl(rel) {
    if (!rel) return undefined;
    if (rel.indexOf('http') === 0) return rel;            // already absolute
    // Root-relative manifest paths ("/audio/words/x.mp3") resolve against the
    // CDN base when KW_AUDIO_BASE is set, else the script-relative folder.
    if (rel.indexOf('/audio/') === 0) return rel.replace(/^\/audio\//, audioBase());
    if (rel.indexOf('audio/') === 0) return audioBase() + rel.slice('audio/'.length);
    return rel;
  }
  function audioUrl(text) {
    var rel = relOf(manifestEntry(text));
    return rel ? resolveUrl(rel) : undefined;
  }

  /* ── Exact word-form audio (comparison / declension / number forms) ─────── */
  var wordFormManifestPromise = null;
  var WORD_FORM_CDN_BASE =
    'https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/';
  var WORD_FORM_MANIFEST_URL =
    WORD_FORM_CDN_BASE + 'manifest-word-form.json';
  var WORD_FORM_MAP = Object.create(null);

  function ensureWordFormManifest() {
    if (wordFormManifestPromise) return wordFormManifestPromise;

    wordFormManifestPromise = fetchWithTimeout(
      WORD_FORM_MANIFEST_URL,
      MANIFEST_FETCH_TIMEOUT_MS
    ).then(function (r) {
      if (!r.ok) throw new Error('http-' + r.status);
      return r.json();
    }).then(function (json) {
      WORD_FORM_MAP = (json && typeof json === 'object')
        ? json
        : Object.create(null);

      emit('word-form-manifest-ready', {
        entries: Object.keys(WORD_FORM_MAP).length
      });

      return WORD_FORM_MAP;
    }).catch(function (err) {
      emit('word-form-manifest-missing', {
        manifest: WORD_FORM_MANIFEST_URL,
        error: err && err.message
      });

      WORD_FORM_MAP = Object.create(null);
      return WORD_FORM_MAP;
    });

    return wordFormManifestPromise;
  }

  window.KW_testEnsureWordFormManifest = function () {
  return ensureWordFormManifest();
};

function wordFormUrl(text) {
    var key = normalize(text);
    var rel = WORD_FORM_MAP[key];

    if (!rel && Object.prototype.hasOwnProperty.call(WORD_FORM_MAP, text)) {
      rel = WORD_FORM_MAP[text];
    }

    // Some Superlativ surfaces are displayed as "am + form",
    // while the generated word-form asset is keyed by the bare form.
    if (!rel && /^am\s+/i.test(String(text).trim())) {
      var bareKey = normalize(String(text).trim().replace(/^am\s+/i, ''));
      rel = WORD_FORM_MAP[bareKey];
    }

    return rel
      ? (rel.indexOf('http') === 0
        ? rel
        : WORD_FORM_CDN_BASE + String(rel).replace(/^\/+/, ''))
      : undefined;
  }

  function wordFormUrlAsync(text) {
    var sync = wordFormUrl(text);
    if (sync) return Promise.resolve(sync);

    return ensureWordFormManifest().then(function () {
      return wordFormUrl(text);
    });
  }

  // TEMP DEBUG: expose word-form resolver state for browser verification.
  window.KW_wordFormDebug = function (text) {
    return {
      text: text,
      normalized: normalize(text),
      manifestUrl: WORD_FORM_MANIFEST_URL,
      mapEntries: Object.keys(WORD_FORM_MAP).length,
      mapped: wordFormUrl(text) || null
    };
  };

  /* ── Exact conjugation-form audio ─────────────────────────────────────── */
  var conjugationManifestPromise = null;
  var CONJUGATION_CDN_BASE =
    'https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/';
  var CONJUGATION_MANIFEST_URL =
    CONJUGATION_CDN_BASE + 'manifest-conjugation.json';
  var CONJUGATION_MAP = Object.create(null);

  function ensureConjugationManifest() {
    if (conjugationManifestPromise) return conjugationManifestPromise;

    conjugationManifestPromise = fetchWithTimeout(
      CONJUGATION_MANIFEST_URL,
      MANIFEST_FETCH_TIMEOUT_MS
    ).then(function (r) {
      if (!r.ok) throw new Error('http-' + r.status);
      return r.json();
    }).then(function (json) {
      CONJUGATION_MAP = (json && typeof json === 'object')
        ? json
        : Object.create(null);

      emit('conjugation-manifest-ready', {
        entries: Object.keys(CONJUGATION_MAP).length
      });

      return CONJUGATION_MAP;
    }).catch(function (err) {
      emit('conjugation-manifest-missing', {
        manifest: CONJUGATION_MANIFEST_URL,
        error: err && err.message
      });

      CONJUGATION_MAP = Object.create(null);
      return CONJUGATION_MAP;
    });

    return conjugationManifestPromise;
  }

  function conjugationUrl(text) {
    var key = normalize(text);
    var rel = CONJUGATION_MAP[key];

    if (!rel && Object.prototype.hasOwnProperty.call(CONJUGATION_MAP, text)) {
      rel = CONJUGATION_MAP[text];
    }

    return rel
      ? (rel.indexOf('http') === 0
        ? rel
        : CONJUGATION_CDN_BASE + rel.replace(/^\/+/, ''))
      : undefined;
  }

  function conjugationUrlAsync(text) {
    var sync = conjugationUrl(text);
    if (sync) return Promise.resolve(sync);

    return ensureConjugationManifest().then(function () {
      return conjugationUrl(text);
    });
  }

  /* ── A1 dual-voice vocab lookup (female / male) ───────────────────────── */
  // Lazy/robust loader: guarantees A1MAP is populated on demand, regardless of
  // script load order or a cached engine — fixes "F/M buttons silent" when the
  // manifest fetch raced ahead of window.KW_AUDIO_BASE being set.
  // Memoized per-manifest loader: walks the candidate URLs, merges entries
  // into the shared map, and emits the same event as before for each level.
  var vocabLoadPromise = null;
  var MANIFEST_FETCH_TIMEOUT_MS = 4000;
  function fetchWithTimeout(url, ms) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, ms);
      fetch(url, { cache: 'no-cache' }).then(function (r) {
        if (done) return; done = true; clearTimeout(timer); resolve(r);
      }, function (err) {
        if (done) return; done = true; clearTimeout(timer); reject(err);
      });
    });
  }
  // Single-source loader: fetches the one production CDN manifest.json
  // (9,403 entries, all levels) into the shared A1MAP. Memoized so repeat
  // calls (from ensureA1Loaded, vocabUrlAsync, etc.) share one in-flight
  // fetch instead of re-requesting.
  function ensureVocabManifest() {
    if (vocabLoadPromise) return vocabLoadPromise;
    var jobs = VOCAB_SOURCES.map(function (src) {
      var cands = sourceCandidates(src), i = 0;
      function attempt() {
        if (i >= cands.length) return Promise.resolve({ src: src, url: cands.length ? cands[0].url : null, base: null, json: null, error: 'all-candidates-failed' });
        var c = cands[i++];
        return fetchWithTimeout(c.url, MANIFEST_FETCH_TIMEOUT_MS)
          .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('http-' + r.status)); })
          .then(function (json) { return { src: src, url: c.url, base: c.base, json: (json && typeof json === 'object') ? json : {} }; })
          .catch(function (err) {
            emit('vocab-manifest-missing', { id: src.id, manifest: c.url, error: err && err.message });
            return attempt();
          });
      }
      return attempt();
    });
    vocabLoadPromise = Promise.all(jobs).then(function (results) {
      // Merge in declared priority order: an earlier source always wins, so
      // adding the legacy per-level manifests can only ADD coverage, never
      // change which file an already-resolving term plays.
      vocabSourceStats = [];
      results.forEach(function (res) {
        var added = 0, skipped = 0;
        if (res.json) for (var key in res.json) if (Object.prototype.hasOwnProperty.call(res.json, key)) {
          var n = normalize(key);
          if (A1MAP[n]) { skipped++; continue; }
          var raw = res.json[key];
          var entry = { female: raw && raw.female, male: raw && raw.male, _src: res.src.id, _base: res.base };
          if (typeof raw === 'string') entry.female = raw;
          if (!entry.female && !entry.male) { skipped++; continue; }
          A1MAP[n] = entry;
          A1MAP_LC[n.toLowerCase()] = entry;
          canonAdd(A1MAP_CANON, n, entry);
          added++;
        }
        vocabSourceStats.push({ id: res.src.id, url: res.url, ok: !!res.json, entries: res.json ? Object.keys(res.json).length : 0, added: added, alreadyCovered: skipped, error: res.error || null });
      });
      a1Ready = true;
      emit('a1-manifest-loaded', { total: Object.keys(A1MAP).length, sources: vocabSourceStats });
      if (!Object.keys(A1MAP).length) vocabLoadPromise = null;   // allow a retry
      return A1MAP;
    });
    return vocabLoadPromise;
  }
  function ensureA1Loaded() {
    return ensureVocabManifest().then(function () { a1Ready = true; return A1MAP; });
  }
  global.KW_audioManifestStats = function () {
    var stats = {
      totalMergedWords: Object.keys(A1MAP).length,
      sentenceManifestEntries: Object.keys(MAP).length,
      canonicalKeys: Object.keys(MAP_CANON).length,
      canonicalCollisionsRefused: Object.keys(MAP_CANON).filter(function (k) { return MAP_CANON[k] === null; }).length,
      sentenceOfLineKeys: Object.keys(MAP_SENT).length,
      vocabSources: vocabSourceStats
    };
    console.log(LOG, 'manifest stats', stats);
    return stats;
  };
  function a1Entry(text) {
    var n = normalize(text);
    return A1MAP[n]
        || A1MAP_LC[n.toLowerCase()]
        || A1MAP_LC[n.toLowerCase().replace(/[.,!?;:]+$/, '')]
        || canonGet(A1MAP_CANON, n);
  }
  // Vocab manifest paths are CDN-relative ("audio/male/x.mp3") and always
  // resolve against the fixed production CDN base \u2014 unlike the sentence/
  // dialogue manifest, this is not affected by window.KW_AUDIO_BASE.
  function resolveVocabUrl(rel, entryBase) {
    if (!rel) return undefined;
    if (/^https?:/.test(rel)) return rel;
    // Root-relative "/audio/words/…" paths belong to the a1/a2/b1 manifests and
    // resolve against KW_AUDIO_BASE; CDN-relative "audio/female/…" paths belong
    // to the vocab CDN and resolve against its own base.
    if (rel.charAt(0) === '/') return rel.replace(/^\/audio\//, (entryBase || audioBase()));
    return (entryBase || VOCAB_CDN_BASE) + rel;
  }
  /** Voiced vocab URL for a term + gender ('female'|'male'), or undefined (sync). */
  function vocabUrl(text, gender) {
    var e = a1Entry(text);
    if (!e) return undefined;
    var rel = e[gender === 'male' ? 'male' : 'female'];
    return rel ? resolveVocabUrl(rel, e._base) : undefined;
  }
  /** Async resolve — lazy-loads the A1 manifest first. Always correct. */
  function vocabUrlAsync(text, gender) {
    return ensureA1Loaded().then(function () { return vocabUrl(text, gender); });
  }
  function dialogueInfo(text) { var e = manifestEntry(text); return (e && typeof e === 'object') ? e : undefined; }
  function wordMarks(text) { var e = manifestEntry(text); return (e && typeof e === 'object' && Array.isArray(e.marks) && e.marks.length) ? e.marks : undefined; }

  /* ════════════════════════════════════════════════════════════════════
     2. INDEXEDDB CACHE (text → audio blob)
     ════════════════════════════════════════════════════════════════════ */
  var DB_NAME = 'klarweg-audio', STORE = 'clips', DB_VER = 1;
  var dbPromise = null;
  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve) {
      if (!global.indexedDB) { resolve(null); return; }
      var req = indexedDB.open(DB_NAME, DB_VER);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { resolve(null); };
    });
    return dbPromise;
  }
  function cacheGet(key) {
    return openDB().then(function (db) {
      if (!db) return null;
      return new Promise(function (resolve) {
        var tx = db.transaction(STORE, 'readonly').objectStore(STORE).get(key);
        tx.onsuccess = function () { resolve(tx.result || null); };
        tx.onerror = function () { resolve(null); };
      });
    });
  }
  function cachePut(key, blob, meta) {
    return openDB().then(function (db) {
      if (!db) return false;
      return new Promise(function (resolve) {
        var rec = { blob: blob, bytes: blob.size, voice: (meta && meta.voice) || '', createdAt: Date.now() };
        var tx = db.transaction(STORE, 'readwrite').objectStore(STORE).put(rec, key);
        tx.onsuccess = function () { resolve(true); };
        tx.onerror = function () { resolve(false); };
      });
    });
  }
  function cacheStats() {
    return openDB().then(function (db) {
      if (!db) return { items: 0, bytes: 0, hits: STATS.hits, misses: STATS.misses, hitRate: hitRate() };
      return new Promise(function (resolve) {
        var store = db.transaction(STORE, 'readonly').objectStore(STORE);
        var items = 0, bytes = 0;
        var cur = store.openCursor();
        cur.onsuccess = function () {
          var c = cur.result;
          if (c) { items++; bytes += (c.value && c.value.bytes) || 0; c.continue(); }
          else resolve({ items: items, bytes: bytes, hits: STATS.hits, misses: STATS.misses, hitRate: hitRate() });
        };
        cur.onerror = function () { resolve({ items: items, bytes: bytes, hits: STATS.hits, misses: STATS.misses, hitRate: hitRate() }); };
      });
    });
  }
  function cacheClear() {
    return openDB().then(function (db) {
      if (!db) return false;
      return new Promise(function (resolve) {
        var tx = db.transaction(STORE, 'readwrite').objectStore(STORE).clear();
        tx.onsuccess = function () { resolve(true); };
        tx.onerror = function () { resolve(false); };
      });
    });
  }
  var STATS = { hits: 0, misses: 0 };
  function hitRate() { var t = STATS.hits + STATS.misses; return t ? Math.round(STATS.hits / t * 100) : 0; }

  /* ════════════════════════════════════════════════════════════════════
     3. HOSTED NEURAL TTS — provider abstraction
        Configure with: window.KW_TTS.configure({ endpoint, provider, voice })
        The endpoint must accept { text, voice, provider } and return audio
        (audio/mpeg) OR JSON { audioContent: "<base64>" }. A serverless proxy
        keeps the key server-side. Until configured, this layer is skipped.
     ════════════════════════════════════════════════════════════════════ */
  var TTS = {
    endpoint: null,                    // e.g. 'https://tts.yoursite.com/api/tts'
    provider: 'google',                // google | azure | polly | elevenlabs
    voice: 'de-DE-Neural2-F',
    maleVoice: 'de-DE-Neural2-B',
    enabled: false,
    configure: function (cfg) {
      cfg = cfg || {};
      if (cfg.endpoint !== undefined) TTS.endpoint = cfg.endpoint;
      if (cfg.provider) TTS.provider = cfg.provider;
      if (cfg.voice) TTS.voice = cfg.voice;
      if (cfg.maleVoice) TTS.maleVoice = cfg.maleVoice;
      TTS.enabled = !!TTS.endpoint;
      emit('tts-configured', { provider: TTS.provider, enabled: TTS.enabled });
      return TTS;
    },
    /** Provider-agnostic call. Returns a Blob or throws. */
    synthesize: function (text, opts) {
      opts = opts || {};
      if (!TTS.endpoint) return Promise.reject(new Error('no-endpoint'));
      var voice = opts.voice || (opts.gender === 'male' ? TTS.maleVoice : TTS.voice);
      var body = { text: normalize(text), voice: voice, provider: TTS.provider, lang: 'de-DE' };
      emit('remote-request', { text: normalize(text), provider: TTS.provider, voice: voice });
      return fetch(TTS.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(function (res) {
        if (!res.ok) throw new Error('tts-' + res.status);
        var ct = res.headers.get('content-type') || '';
        if (ct.indexOf('application/json') >= 0) {
          return res.json().then(function (j) {
            if (!j.audioContent) throw new Error('no-audioContent');
            // base64 → Blob
            var bin = atob(j.audioContent), len = bin.length, arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) arr[i] = bin.charCodeAt(i);
            return new Blob([arr], { type: 'audio/mpeg' });
          });
        }
        return res.blob();
      });
    }
  };

  /* ════════════════════════════════════════════════════════════════════
     4. BROWSER speechSynthesis (de-DE) fallback
     ════════════════════════════════════════════════════════════════════ */
  // Resolve a usable list of voices, waiting for async load if needed (Chrome
  // returns [] on first getVoices() call until 'voiceschanged' fires).
  function getVoicesReady() {
    return new Promise(function (resolve) {
      if (!global.speechSynthesis) { resolve([]); return; }
      var v = global.speechSynthesis.getVoices();
      if (v && v.length) { resolve(v); return; }
      var done = false, fin = function () { if (done) return; done = true; resolve(global.speechSynthesis.getVoices() || []); };
      try { global.speechSynthesis.addEventListener('voiceschanged', fin, { once: true }); } catch (e) {}
      // hard cap so we never hang if the event never fires
      setTimeout(fin, 1200);
    });
  }

  // Pick the best German voice, biased by requested gender where names allow it.
  var FEMALE_HINTS = /(anna|sandy|shelley|petra|katja|vicki|marlene|female|frau|google deutsch)/i;
  var MALE_HINTS   = /(eddy|flo|reed|rocko|grandpa|stefan|yannick|conrad|male|mann|herr)/i;
  function pickGermanVoice(voices, gender) {
    var de = (voices || []).filter(function (v) { return /^de(-|_|$)/i.test(v.lang) || /german|deutsch/i.test(v.name); });
    if (!de.length) return null;
    if (gender === 'female') { var f = de.find(function (v) { return FEMALE_HINTS.test(v.name); }); if (f) return f; }
    if (gender === 'male')   { var m = de.find(function (v) { return MALE_HINTS.test(v.name); }); if (m) return m; }
    // prefer a local/default de-DE voice, else first German voice
    return de.find(function (v) { return /de-?de/i.test(v.lang) && v.localService; }) || de.find(function (v) { return /de-?de/i.test(v.lang); }) || de[0];
  }

  function browserTTS(text, opts) {
    opts = opts || {};
    return getVoicesReady().then(function (voices) {
      return new Promise(function (resolve) {
        if (!global.speechSynthesis || !global.SpeechSynthesisUtterance) { resolve(false); return; }
        var voice = pickGermanVoice(voices, opts.gender);
        // Honest failure: if the device has NO German voice at all, don't fake
        // success — let the caller surface a real "audio unavailable" state.
        if (!voice && voices && voices.length) { resolve(false); return; }
        try {
          // Chrome/Edge bug: after ~15s idle (or a backgrounded tab) the
          // speech engine can get stuck "paused" — speak() then silently
          // queues and never starts. cancel()+resume() clears that stuck
          // state before every utterance so playback isn't intermittently
          // silent for words the user hasn't clicked in a while.
          global.speechSynthesis.cancel();
          if (global.speechSynthesis.paused) global.speechSynthesis.resume();
          var u = new SpeechSynthesisUtterance(normalize(text));
          u.lang = 'de-DE';
          u.rate = opts.rate || 1;
          if (voice) u.voice = voice;
          // onEnded is part of the documented contract (see header) and the
          // sentence-by-sentence passage player depends on it to advance. The
          // file/cache/endpoint paths fire it from playUrl; this path used to
          // resolve the promise only, which stalled long-passage playback on
          // the first browser-TTS line.
          var done = false, fin = function (ok) {
            if (done) return; done = true;
            if (ok && typeof opts.onEnded === 'function') { try { opts.onEnded(); } catch (e) {} }
            resolve(ok);
          };
          u.onstart = function () { emit('play-start', { source: 'browser-tts' }); };
          u.onend = function () { fin(true); };
          u.onerror = function (e) { fin(!(e && e.error && e.error !== 'interrupted' && e.error !== 'canceled')); };
          global.speechSynthesis.speak(u);
          // Length-based completion safety net (onend can be flaky across browsers).
          setTimeout(function () { fin(true); }, 800 + normalize(text).length * 90);
        } catch (e) { resolve(false); }
      });
    });
  }

  /* ════════════════════════════════════════════════════════════════════
     PLAYBACK — single owner (no overlap), element cache for instant replay
     ════════════════════════════════════════════════════════════════════ */
  var current = null, urlCache = {};
  function stopCurrent() {
    if (current) { try { current.pause(); current.currentTime = 0; } catch (e) {} current = null; }
    if (global.speechSynthesis) { try { global.speechSynthesis.cancel(); } catch (e) {} }
  }
  function playUrl(url, opts) {
    opts = opts || {};
    stopCurrent();
    if (!AudioCtor) return Promise.resolve(false);
    return new Promise(function (resolve) {
      var a = urlCache[url] || (urlCache[url] = new AudioCtor(url));
      try { a.currentTime = 0; } catch (e) {}
      if (opts.rate) { try { a.playbackRate = opts.rate; } catch (e) {} }
      current = a;
      if (typeof opts.onAudio === 'function') { try { opts.onAudio(a); } catch (e) {} }
      var settled = false;
      var onEnd = function () {
        if (!settled) {
          settled = true;
          if (typeof opts.onEnded === 'function') opts.onEnded();
          emit('play-complete', { url: url });
          resolve(true);
        }
      };

      a.addEventListener('ended', onEnd, { once: true });

      a.addEventListener('error', function () {
        if (!settled) {
          settled = true;
          emit('play-error', { url: url, code: a.error && a.error.code });
          resolve(false);
        }
      }, { once: true });

      var p = a.play();

      if (p && p.then) {
        p.then(function () {
          emit('play-start', { url: url, source: opts._src || 'file' });
        }).catch(function (err) {
          if (!settled) {
            settled = true;
            emit('play-error', { url: url, name: err && err.name });
            resolve(false);
          }
        });
      } else {
        emit('play-start', { url: url, source: opts._src || 'file' });
      }

    });
  }
  function playBlob(blob, opts) {
    var url = URL.createObjectURL(blob);
    return playUrl(url, opts);
  }

  /* ════════════════════════════════════════════════════════════════════
     PRELOAD — warm urlCache so a first tap starts like a replay
     window.KW_audioPreload(list) — list of German strings. Resolves each
     exactly as speak() does without a gender (conjugation → word-form →
     manifest) and primes the SAME element playUrl() later reuses. Never
     touches the current clip, never emits 'request', never throws. Only
     manifest-backed MP3s are warmed; unresolved text is skipped.
     ════════════════════════════════════════════════════════════════════ */
  var PRELOAD_MAX = 40, PRELOAD_CONCURRENCY = 3, PRELOAD_ITEM_TIMEOUT_MS = 8000;
  var preloadQueued = {};
  function whenMainManifest() {
    return new Promise(function (resolve) {
      if (manifestReady) { resolve(); return; }
      var off = function (ev) {
        if (ev.type !== 'manifest-loaded') return;
        // Unsubscribe after emit() finishes its loop, so no other listener
        // is skipped by the array shifting mid-iteration.
        setTimeout(function () { listeners = listeners.filter(function (x) { return x !== off; }); }, 0);
        resolve();
      };
      listeners.push(off);
    });
  }
  function preloadUrlOf(text) {
    return conjugationUrl(text) || wordFormUrl(text) || audioUrl(text);
  }
  function preloadOne(url) {
    return new Promise(function (resolve) {
      var a;
      try {
        a = new AudioCtor();
        a.preload = 'auto';
        a.src = url;
      } catch (e) { resolve(); return; }
      urlCache[url] = a;
      var done = false, timer;
      var fin = function () {
        if (done) return; done = true; clearTimeout(timer);
        a.removeEventListener('canplaythrough', fin);
        a.removeEventListener('error', onErr);
        resolve();
      };
      // A failed preload must not leave a broken element behind: drop it so
      // a later click builds a fresh one, exactly as without preloading.
      var onErr = function () {
        if (urlCache[url] === a && current !== a) delete urlCache[url];
        emit('preload-error', { url: url, code: a.error && a.error.code });
        fin();
      };
      a.addEventListener('canplaythrough', fin);
      a.addEventListener('error', onErr);
      timer = setTimeout(fin, PRELOAD_ITEM_TIMEOUT_MS);   // move on; the load continues
      try { a.load(); } catch (e) {}
    });
  }
  function preload(list) {
    try {
      if (!AudioCtor) return Promise.resolve({ queued: 0 });
      var conn = global.navigator && global.navigator.connection;
      if (conn && conn.saveData) return Promise.resolve({ queued: 0, skipped: 'save-data' });
      if (!Array.isArray(list)) list = [list];
      list = list.filter(function (t) { return typeof t === 'string' && t.trim(); });
      return Promise.all([
        ensureConjugationManifest(), ensureWordFormManifest(), whenMainManifest()
      ]).then(function () {
        var urls = [];
        for (var i = 0; i < list.length && urls.length < PRELOAD_MAX; i++) {
          var url = preloadUrlOf(list[i]);
          if (!url || urlCache[url] || preloadQueued[url]) continue;
          preloadQueued[url] = 1;
          urls.push(url);
        }
        emit('preload', { requested: list.length, queued: urls.length });
        var idx = 0;
        function worker() {
          if (idx >= urls.length) return Promise.resolve();
          var url = urls[idx++];
          var job = urlCache[url] ? Promise.resolve() : preloadOne(url);   // a click may have beaten us
          return job.then(function () { delete preloadQueued[url]; return worker(); });
        }
        var workers = [];
        for (var w = 0; w < PRELOAD_CONCURRENCY; w++) workers.push(worker());
        return Promise.all(workers).then(function () { return { queued: urls.length }; });
      }).catch(function () { return { queued: 0 }; });
    } catch (e) {
      return Promise.resolve({ queued: 0 });
    }
  }

  /* ════════════════════════════════════════════════════════════════════
     RESOLVE STATE (for button gating — NEVER show silent buttons)
     Returns the BEST source available WITHOUT playing:
        'manifest' | 'cache' | 'remote' | 'browser' | 'none'
     ════════════════════════════════════════════════════════════════════ */
  function audioState(text) {
    return Promise.resolve().then(function () {
      if (audioUrl(text)) return 'manifest';
      return cacheGet(normalize(text)).then(function (rec) {
        if (rec && rec.blob) return 'cache';
        if (TTS.enabled) return 'remote';
        if (global.speechSynthesis && global.SpeechSynthesisUtterance) return 'browser';
        return 'none';
      });
    });
  }
  // Synchronous best-guess (manifest + endpoint + browser) for instant gating;
  // cache is async so callers should prefer KW_audioStateAsync where possible.
  function audioStateSync(text) {
    if (audioUrl(text)) return 'manifest';
    if (TTS.enabled) return 'remote';
    if (global.speechSynthesis && global.SpeechSynthesisUtterance) return 'browser';
    return 'none';
  }

  /* ════════════════════════════════════════════════════════════════════
     PREPARE — ensure audio exists (cache or generate) WITHOUT playing
     ════════════════════════════════════════════════════════════════════ */
  function prepare(text, opts) {
    opts = opts || {};
    var key = normalize(text);
    if (audioUrl(text)) return Promise.resolve('manifest');
    return cacheGet(key).then(function (rec) {
      if (rec && rec.blob) { STATS.hits++; return 'cache'; }
      STATS.misses++;
      if (!TTS.enabled) return TTS.enabled ? 'remote' : (global.speechSynthesis ? 'browser' : 'none');
      return TTS.synthesize(text, opts).then(function (blob) {
        return cachePut(key, blob, { voice: opts.voice }).then(function () { emit('cache-store', { text: key, bytes: blob.size }); return 'cache'; });
      }).catch(function () { return global.speechSynthesis ? 'browser' : 'none'; });
    });
  }

  /* ════════════════════════════════════════════════════════════════════
     SPEAK — the full chain. Returns the source actually used.
     opts: { rate, voice, gender, onAudio, onEnded, onState(state) }
     ════════════════════════════════════════════════════════════════════ */
  /* opts.spokenAs — render-only override, supplied per call by the word popup.
     `text` remains the authoritative identity: every manifest lookup, the
     IndexedDB cache key and the emitted events all key on it, so an asset
     published for "Z" is still found by "Z". spokenAs is consulted ONLY at the
     synthesis layer (hosted TTS / browser TTS), where the string spoken aloud
     is chosen — which is where a displayed form and its spoken form legitimately
     differ. A caller that passes no spokenAs takes exactly the previous path. */
  function speak(text, opts) {
    opts = opts || {};
    var key = normalize(text);
    emit('request', { text: key });
    var notify = function (s) { if (typeof opts.onState === 'function') opts.onState(s); };

    // 0. Exact authored conjugation-form audio.
    //    This must win over vocabulary lemma audio and generic TTS.
    var conjSync = conjugationUrl(text);
    if (conjSync) {
      notify('playing');
      return playUrl(
        conjSync,
        Object.assign({ _src: 'conjugation' }, opts)
      ).then(function (ok) {
        return ok
          ? 'conjugation'
          : fallbackChain(text, key, opts, notify);
      });
    }

    // Lazy-load conjugation manifest before falling through to vocabulary.
    return conjugationUrlAsync(text).then(function (conjUrl) {
      if (conjUrl) {
        notify('playing');
        return playUrl(
          conjUrl,
          Object.assign({ _src: 'conjugation' }, opts)
        ).then(function (ok) {
          return ok
            ? 'conjugation'
            : speakAfterConjugation(text, key, opts, notify);
        });
      }

      return speakAfterConjugation(text, key, opts, notify);
    });
  }

  function speakAfterConjugation(text, key, opts, notify) {
    // 1. Exact word-form audio — comparison / declension / number forms.
    //    This sits after authored conjugation audio and before vocabulary lemma
    //    audio, so an exact form such as "größer" uses its authored form asset.
    var wfSync = wordFormUrl(text);
    if (wfSync) {
      notify('playing');
      return playUrl(
        wfSync,
        Object.assign({ _src: 'word-form' }, opts)
      ).then(function (ok) {
        return ok
          ? 'word-form'
          : speakAfterWordForm(text, key, opts, notify);
      });
    }

    // Lazy-load the word-form manifest before falling through to vocabulary.
    return wordFormUrlAsync(text).then(function (wfUrl) {
      if (wfUrl) {
        notify('playing');
        return playUrl(
          wfUrl,
          Object.assign({ _src: 'word-form' }, opts)
        ).then(function (ok) {
          return ok
            ? 'word-form'
            : speakAfterWordForm(text, key, opts, notify);
        });
      }

      return speakAfterWordForm(text, key, opts, notify);
    });
  }

  function speakAfterWordForm(text, key, opts, notify) {
    // 2. Dual-voice vocab fast path — if a gender is requested, ensure the A1
    //    manifest is loaded (lazy/robust), then play that voice from the CDN.
    if (opts.gender) {
      var vSync = vocabUrl(text, opts.gender);
      if (vSync) { notify('playing'); return playUrl(vSync, Object.assign({ _src: 'vocab-' + opts.gender }, opts)).then(function (ok) { return ok ? 'manifest' : fallbackChain(text, key, opts, notify); }); }
      // Not in A1MAP yet → lazy-load, then retry; only after that fall through.
      return vocabUrlAsync(text, opts.gender).then(function (vUrl) {
        if (vUrl) { notify('playing'); return playUrl(vUrl, Object.assign({ _src: 'vocab-' + opts.gender }, opts)).then(function (ok) { return ok ? 'manifest' : fallbackChain(text, key, opts, notify); }); }
        var mU = audioUrl(text);
        if (mU) { notify('playing'); return playUrl(mU, Object.assign({ _src: 'manifest' }, opts)).then(function (ok) { return ok ? 'manifest' : fallbackChain(text, key, opts, notify); }); }
        return fallbackChain(text, key, opts, notify);
      });
    }

    // 1. Manifest fast path
    var mUrl = audioUrl(text);
    if (mUrl) { notify('playing'); return playUrl(mUrl, Object.assign({ _src: 'manifest' }, opts)).then(function (ok) { return ok ? 'manifest' : fallbackChain(text, key, opts, notify); }); }

    // 2/3/4
    return fallbackChain(text, key, opts, notify);
  }

  function fallbackChain(text, key, opts, notify) {
    // 2. IndexedDB cache
    return cacheGet(key).then(function (rec) {
      if (rec && rec.blob) { STATS.hits++; emit('cache-hit', { text: key }); notify('playing'); return playBlob(rec.blob, Object.assign({ _src: 'cache' }, opts)).then(function (ok) { return ok ? 'cache' : afterCache(text, key, opts, notify); }); }
      STATS.misses++; emit('cache-miss', { text: key });
      return afterCache(text, key, opts, notify);
    });
  }

  /* The text handed to a SYNTHESIS provider. Only here may spokenAs win: the
     cache key and every manifest lookup above still use the displayed text. */
  function renderTextOf(text, opts) {
    var s = opts && opts.spokenAs;
    return (typeof s === 'string' && s.trim()) ? s.trim() : text;
  }

  function afterCache(text, key, opts, notify) {
    // 3. Hosted TTS (generate → cache → play)
    if (TTS.enabled) {
      notify('generating');                       // "Generating audio..."
      return TTS.synthesize(renderTextOf(text, opts), opts).then(function (blob) {
        return cachePut(key, blob, { voice: opts.voice }).then(function () {
          emit('cache-store', { text: key, bytes: blob.size });
          notify('playing');                      // auto-play on completion
          return playBlob(blob, Object.assign({ _src: 'tts-endpoint' }, opts)).then(function (ok) { return ok ? 'tts-endpoint' : afterRemote(text, opts, notify); });
        });
      }).catch(function (err) { emit('remote-error', { text: key, msg: err && err.message }); return afterRemote(text, opts, notify); });
    }
    return afterRemote(text, opts, notify);
  }

  function afterRemote(text, opts, notify) {
    // 4. Browser speechSynthesis
    notify('playing');
    return browserTTS(renderTextOf(text, opts), opts).then(function (ok) {
      if (ok) return 'browser-tts';
      // 5. Nothing worked
      notify('error');
      emit('all-failed', { text: normalize(text) });
      return 'error';
    });
  }

  /* ── Public API ──────────────────────────────────────────────────────── */
  global.audioUrl = audioUrl;
  global.KW_vocabUrl = vocabUrl;                 // (text, 'female'|'male') → CDN url (sync)
  global.KW_vocabUrlAsync = vocabUrlAsync;       // lazy-loads A1 manifest first
  global.KW_ensureVocab = ensureA1Loaded;
  global.KW_hasVocabVoices = function (text) { return !!a1Entry(text); };
  global.KW_resolveInfo = resolveInfo;           // (text, gender?) → which layer answers, no playback
  global.KW_ensureConjugation = ensureConjugationManifest;
  global.KW_ensureWordFormManifest = ensureWordFormManifest;
  global.KW_canonKey = canonKey;
  global.KW_splitSentences = splitSentences;
  global.KW_dialogueInfo = dialogueInfo;
  global.KW_wordMarks = wordMarks;
  global.KW_speak = speak;
  global.KW_playAudio = function (text, opts) { return speak(text, opts).then(function (src) { return src && src !== 'error'; }); };
  // Public stop announces itself so UI that owns a multi-clip sequence can
  // release its "playing" state; internal callers (playUrl) use stopCurrent
  // directly and stay silent, since starting the next clip is not a stop.
  global.KW_stopAudio = function () { stopCurrent(); emit('stop', {}); };
  global.KW_prepare = prepare;
  global.KW_audioPreload = preload;
  global.KW_audioState = audioStateSync;
  global.KW_audioStateAsync = audioState;
  global.KW_cacheStats = cacheStats;
  global.KW_cacheClear = cacheClear;
  global.KW_onAudioEvent = function (fn) { if (typeof fn === 'function') listeners.push(fn); return function () { listeners = listeners.filter(function (x) { return x !== fn; }); }; };
  global.KW_audioReady = function () { return manifestReady; };
  global.KW_TTS = TTS;
  global.KW_audioDebug = function () {
    return cacheStats().then(function (cs) {
      var info = { manifestEntries: Object.keys(MAP).length, manifestReady: manifestReady, ttsEnabled: TTS.enabled, ttsProvider: TTS.provider, cache: cs };
      console.log(LOG, 'DEBUG', info); return info;
    });
  };

  emit('engine-ready', { manifestBase: manifestBase });
})(window);
