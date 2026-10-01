/* Klarweg — word-synchronised highlighting.
   ------------------------------------------------------------------------
   Drives a `.speaking` class across the word spans of a Story line, a
   Reading passage or a Listening line while its EXISTING MP3 plays. The
   audio engine, manifests and MP3s are untouched: this only listens to the
   <audio> element the engine hands out through its documented `onAudio` hook.

   Timing sources, in strict order (never a visibly wrong mapping):
     1. exact   — offline forced-alignment sidecar audio-timing/<contentHash>.json,
                  accepted only if it names this exact file and its words match
                  the rendered spans one-for-one, in order;
     2. estimate — the homepage's syllable-weighted estimate, for short clips;
     3. sentence — long passage without a sidecar: tint the current sentence;
     4. none     — no <audio> (browser TTS): existing behaviour, nothing added.

   API
     KW_wordSync.syncFor(audio, wordEls, { text, sentenceEls? }) → detach()
     KW_wordSync.attach(audio, wordEls, { timing?, sentenceEls? }) → detach()
     KW_wordSync.loadTiming(contentHash) → Promise<sidecar|null>   (memoised on success)
     KW_wordSync.partitionLines(lineTexts, spanEls) → per-line span slices | null
     KW_wordSync.prefetch(lineTexts)    warm the sidecars of the given lines
     KW_wordSync.alias(displayed, recorded)  exception: prefetch under the recorded key
   Sidecars are fetched with cache: 'no-cache' (see loadTiming). The page's own
   Story + Reading sidecars are prefetched once those sections render.
*/
(function (global) {
  'use strict';

  var LEAD = 0.05;            // aligner onset bias (measured median +43 ms) + one frame
  var EST_MAX_WORDS = 40;     // above this, an estimate drifts: use sentence mode
  // Show nothing rather than a guess while the sidecar loads. Story/Reading
  // sidecars are normally prefetched (prefetchPage) and resolve at once; this
  // bound only matters for a sidecar still in flight. A cold GitHub Pages edge
  // answers in ~260–370 ms, so 300 ms used to lose that race on a first play.
  var TIMING_WAIT_MS = 1000;
  var CLS = 'speaking', SENT_CLS = 'is-speaking-sentence';

  var base = (function () {
    try {
      var s = document.currentScript && document.currentScript.src;
      if (s) return new URL('../../audio-timing/', s).href;
    } catch (e) {}
    return '/audio-timing/';
  })();

  var cache = {};
  function loadTiming(hash) {
    if (!hash || !/^[0-9a-f]{8,64}$/.test(hash)) return Promise.resolve(null);
    if (!cache[hash]) {
      // 'no-cache' revalidates with the server (cheap 304 when unchanged), so a
      // 404 cached before a timing file was published can never hide it later.
      // Only this sidecar fetch; audio requests are untouched.
      // A failed or missing sidecar is not memoised: the next request retries.
      cache[hash] = fetch(base + hash + '.json', { cache: 'no-cache' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; })
        .then(function (side) { if (!side) delete cache[hash]; return side; });
    }
    return cache[hash];
  }

  function norm(s) {
    return String(s || '').normalize('NFC').replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
  }

  /* Accept a sidecar only when it provably belongs to THIS audio and THESE spans. */
  function validTiming(side, audio, wordEls) {
    if (!side || side.v !== 1 || !Array.isArray(side.words) || !side.file) return null;
    var src = (audio && (audio.currentSrc || audio.src)) || '';
    var tail = '/' + String(side.file).replace(/^\/?audio\//, '');
    if (src.slice(-tail.length) !== tail) return null;                 // different file
    var marks = [], el = 0, prev = -1;
    for (var k = 0; k < side.words.length; k++) {
      var w = side.words[k], s = +w[1], e = +w[2];
      if (!(s >= prev) || !(e > s) || s < 0 || e > side.duration + 0.05) return null;
      prev = s;
      if (w[4] === 0) { marks.push({ t: s, i: -1 }); continue; }        // spoken, no span
      if (el >= wordEls.length || norm(w[0]) !== norm(wordEls[el].textContent)) return null;
      marks.push({ t: s, i: el++ });
    }
    return el === wordEls.length ? marks : null;                      // every span covered
  }

  /* Homepage estimator (index.html KW_estimateMarks), unchanged in behaviour. */
  function estimate(words) {
    var PAUSE = { ',': 0.6, ';': 0.7, ':': 0.7, '.': 1.0, '!': 1.0, '?': 1.0, '…': 1.1, '—': 0.8 };
    var costs = words.map(function (w) {
      var bare = w.replace(/[.,!?;:—…]/g, '');
      var m = bare.toLowerCase().replace(/[^a-zäöüß]/g, '').match(/[aeiouyäöü]+/g);
      var c = 0.45 + 0.55 * Math.max(1, m ? m.length : 1) + 0.025 * bare.length;
      if (PAUSE[w.slice(-1)]) c += PAUSE[w.slice(-1)];
      return c;
    });
    var total = costs.reduce(function (a, b) { return a + b; }, 0) || 1;
    var LEAD_F = 0.04, TAIL_F = 0.03, span = 1 - LEAD_F - TAIL_F, acc = 0, cum = [];
    costs.forEach(function (c) { acc += c; cum.push(LEAD_F + span * (acc / total)); });
    if (cum.length) cum[cum.length - 1] = 1;
    return cum;
  }
  // Word text + the punctuation that follows its span (the estimate weights pauses).
  function wordsWithPunct(wordEls) {
    return wordEls.map(function (el) {
      var n = el.nextSibling, p = '';
      if (n && n.nodeType === 3) { var m = /^\s*([.,!?;:—…])/.exec(n.textContent); if (m) p = m[1]; }
      return el.textContent + p;
    });
  }

  function attach(audio, wordEls, opts) {
    opts = opts || {};
    var marks = opts.timing ? validTiming(opts.timing, audio, wordEls) : null;
    var sentenceEls = opts.sentenceEls || [];
    var mode = marks ? 'exact'
      : (wordEls.length && wordEls.length <= EST_MAX_WORDS) ? 'estimate'
      : sentenceEls.length ? 'sentence' : 'none';
    var active = null, rafId = 0, dead = false;
    var cum = mode === 'estimate' ? estimate(wordsWithPunct(wordEls)) : null;
    var sentCum = null, sentOf = null;
    if (mode === 'sentence') {
      // estimate at SENTENCE granularity only: coarse, and says no more than it knows
      var perSent = sentenceEls.map(function (s) { return wordEls.filter(function (w) { return s.contains(w); }); });
      var flat = [].concat.apply([], perSent), c = estimate(wordsWithPunct(flat)), n = 0;
      sentCum = perSent.map(function (ws) { n += ws.length; return c[Math.max(0, n - 1)]; });
    }

    function setActive(el) {                       // touch only the previous + new element
      if (el === active) return;
      if (active) active.classList.remove(mode === 'sentence' ? SENT_CLS : CLS);
      active = el || null;
      if (active) active.classList.add(mode === 'sentence' ? SENT_CLS : CLS);
    }
    function tick() {
      if (dead) return;
      var t = audio.currentTime, d = audio.duration;
      if (mode === 'exact') {
        var lo = 0, hi = marks.length - 1, found = -1;
        while (lo <= hi) { var mid = (lo + hi) >> 1; if (marks[mid].t <= t + LEAD) { found = mid; lo = mid + 1; } else hi = mid - 1; }
        setActive(found >= 0 && marks[found].i >= 0 ? wordEls[marks[found].i] : null);
      } else if (d && isFinite(d) && d > 0) {
        var f = Math.min(1, t / d), idx = 0, arr = mode === 'estimate' ? cum : sentCum;
        while (idx < arr.length - 1 && f >= arr[idx]) idx++;
        setActive(mode === 'estimate' ? wordEls[idx] : sentenceEls[idx]);
      }
    }
    function loop() { tick(); if (!dead && !audio.paused && !audio.ended) rafId = requestAnimationFrame(loop); }
    function onPlay() { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(loop); }
    function onPause() { cancelAnimationFrame(rafId); }             // highlight stays on the current word
    function onSeeked() { tick(); }

    var offEngine = null;
    function detach() {
      if (dead) return;
      dead = true;
      cancelAnimationFrame(rafId);
      setActive(null);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('seeked', onSeeked);
      audio.removeEventListener('timeupdate', tick);
      audio.removeEventListener('ended', detach);
      audio.removeEventListener('error', detach);
      audio.removeEventListener('emptied', detach);
      if (offEngine) offEngine();
    }
    if (mode === 'none') { dead = true; return function () {}; }
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('seeked', onSeeked);
    audio.addEventListener('timeupdate', tick);        // backup tick when rAF is throttled (background tab)
    audio.addEventListener('ended', detach);
    audio.addEventListener('error', detach);
    audio.addEventListener('emptied', detach);
    // Channel change: any explicit stop, or another clip starting, ends this sync.
    if (global.KW_onAudioEvent) {
      var mySrc = audio.currentSrc || audio.src;
      offEngine = global.KW_onAudioEvent(function (ev) {
        if (!ev) return;
        if (ev.type === 'stop') detach();
        else if (ev.type === 'play-start' && ev.url && ev.url !== mySrc) detach();
      });
    }
    if (!audio.paused) onPlay(); else tick();
    detach.mode = mode;
    return detach;
  }

  /* The text the engine actually played. Normally the same as the caller's text;
     it differs when a page-scoped exception (e.g. C2·01 Reading) re-requests a
     passage under its recorded manifest key. The engine emits 'request'
     synchronously inside speak(), before it hands out the <audio> element. */
  var lastRequested = '';
  if (global.KW_onAudioEvent) {
    global.KW_onAudioEvent(function (ev) { if (ev && ev.type === 'request') lastRequested = ev.text || ''; });
  }

  /* Resolve this clip's sidecar via the manifest entry the engine already loaded,
     then attach. Until the sidecar answers (or TIMING_WAIT_MS passes) nothing is
     highlighted — a late upgrade from a guess to the truth would look like a jump. */
  function syncFor(audio, wordEls, opts) {
    opts = opts || {};
    var info = global.KW_dialogueInfo ? global.KW_dialogueInfo(opts.text || '') : null;
    // Fallback: the caller's text has no manifest entry, but the engine played
    // one — use that entry. validTiming() still proves file + words match.
    if (!(info && info.contentHash) && lastRequested && global.KW_dialogueInfo) info = global.KW_dialogueInfo(lastRequested);
    var hash = info && info.contentHash;
    var inner = null, cancelled = false;
    function start(timing) {
      if (cancelled || inner) return;
      inner = attach(audio, wordEls, { timing: timing, sentenceEls: opts.sentenceEls });
      if (opts.onMode) opts.onMode(inner.mode || 'none', hash);
    }
    if (hash) {
      loadTiming(hash).then(function (side) { start(side); });
      setTimeout(function () { start(null); }, TIMING_WAIT_MS);
    } else {
      start(null);
    }
    return function () { cancelled = true; if (inner) inner(); };
  }

  /* Listening: one transcript paragraph, one MP3 per authored dialogue line.
     Split the transcript's word spans into each line's slice, in order, with the
     SAME rule the offline aligner uses (align2.py map_parts): spoken words are
     split at hyphens into parts; a part takes the next span when they match;
     several parts may make one span ("Steuer-App" shown as one span) and one
     part may cover several spans; a spoken digit/level code with no span takes
     none. Any other unmatched spoken part, or any span left over, returns null —
     never a guessed mapping. */
  var WORD_RE = /[A-Za-z0-9ÄÖÜäöüßéèêëàâîïôûùçÉÈ][A-Za-z0-9ÄÖÜäöüßéèêëàâîïôûùçÉÈ’'\-­]*/g;
  function partsOf(text) {
    var out = [];
    (String(text || '').match(WORD_RE) || []).forEach(function (w) {
      w.replace(/­/g, '').split(/[-–]+/).forEach(function (p) { if (p) out.push(p); });
    });
    return out;
  }
  function mapLine(parts, keys, j) {          // returns the new span index, or -1 on mismatch
    var pk = parts.map(norm), i = 0, k, c;
    while (i < pk.length) {
      if (j < keys.length && pk[i] && pk[i] === keys[j]) { i++; j++; continue; }
      var hit = false;
      for (k = 2; k <= 5 && !hit; k++) {                       // many parts -> one span
        if (j < keys.length && i + k <= pk.length && pk.slice(i, i + k).join('') === keys[j]) { i += k; j++; hit = true; }
      }
      for (k = 2; k <= 5 && !hit; k++) {                       // one part -> many spans
        if (j + k <= keys.length && keys.slice(j, j + k).join('') === pk[i]) { i++; j += k; hit = true; }
      }
      if (hit) continue;
      c = parts[i];
      if (!pk[i] || /^(\d+|[A-Za-z]\d|I|II|III|IV|V|VI|VII|VIII|IX|X)$/.test(c)) { i++; continue; }   // spoken digit / level code / roman numeral, no span
      return -1;
    }
    return j;
  }
  function partitionLines(lineTexts, spanEls) {
    var keys = spanEls.map(function (e) { return norm(e.textContent); }), j = 0, out = [];
    for (var i = 0; i < lineTexts.length; i++) {
      var nj = mapLine(partsOf(lineTexts[i]), keys, j);
      if (nj < 0) return null;
      out.push(spanEls.slice(j, nj)); j = nj;
    }
    return j === spanEls.length ? out : null;
  }
  // Page-scoped audio exceptions (kw-reading-exceptions.js, C2·01) play a displayed
  // text under a different RECORDED manifest key; they register it here so the
  // recording's sidecar can be prefetched too. Prefetch only — playback unchanged.
  var aliases = {};
  function alias(displayed, recorded) { if (displayed && recorded) aliases[displayed] = recorded; }

  // Warm the sidecars of the given texts so each timing is ready before it plays.
  function prefetch(texts) {
    (texts || []).forEach(function (t) {
      var info = global.KW_dialogueInfo ? global.KW_dialogueInfo(aliases[t] || t) : null;
      if (info && info.contentHash) loadTiming(info.contentHash);
    });
  }

  /* Warm THIS chapter's Story + Reading sidecars before the first Play, so a
     first play finds its timing ready instead of racing the network. Runs once
     the manifest is loaded (hashes come from it) and only for sections that are
     actually rendered (a locked chapter fetches nothing). Never blocks the page.
     Texts are built exactly as chapter-app.js requests them. Listening keeps its
     own play-time prefetch. Exception pages resolve their recording through
     alias(); anything still unresolved relies on syncFor's bounded wait. */
  function storyLineText(line) {             // = chapter-app.js renderStory lineText()
    if (!Array.isArray(line.tokens)) return line.de || '';
    var out = '', prevNoSpaceAfter = true;
    line.tokens.forEach(function (t) {
      var w = String(t.w || '');
      var noSpaceBefore = prevNoSpaceAfter || /^[.,!?;:)\\]…”"'”]/.test(w);
      if (!noSpaceBefore && out) out += ' ';
      out += w;
      prevNoSpaceAfter = /[„«(]$/.test(w) && w.length <= 2;
    });
    return out;
  }
  (function prefetchPage() {
    var doc = global.document;
    if (!doc || !global.KW_onAudioEvent || !global.KW_audioReady || !global.MutationObserver) return;
    var manifest = false, story = false, reading = false, mo = null;
    function run() {
      var C = global.CHAPTER;                // chapter data loads after this script
      if (!manifest || !C) return;
      if (!(C.story && Array.isArray(C.story.dialogue))) story = true;
      if (!(C.reading && Array.isArray(C.reading.tokens))) reading = true;
      if (!story && doc.querySelector('.story-card')) {
        story = true;
        prefetch(C.story.dialogue.filter(Boolean).map(storyLineText));
      }
      if (!reading && doc.querySelector('.reading-passage')) {
        reading = true;
        prefetch([C.reading.tokens.filter(function (t) { return !t.plain; }).map(function (t) { return t.w; }).join(' ')]);
      }
      if (story && reading && mo) { mo.disconnect(); mo = null; }
    }
    // The chapter renders after its access check: wait for the sections to appear.
    mo = new MutationObserver(run);
    mo.observe(doc.documentElement, { childList: true, subtree: true });
    setTimeout(function () { if (mo) { mo.disconnect(); mo = null; } }, 60000);
    function ready() { if (manifest) return; manifest = true; setTimeout(run, 0); }
    if (global.KW_audioReady()) ready();
    else global.KW_onAudioEvent(function (ev) { if (ev && ev.type === 'manifest-loaded') ready(); });
  })();

  global.KW_wordSync = { attach: attach, syncFor: syncFor, loadTiming: loadTiming, partitionLines: partitionLines, prefetch: prefetch, alias: alias };
})(window);
