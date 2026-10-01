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
     KW_wordSync.loadTiming(contentHash) → Promise<sidecar|null>   (memoised)
     KW_wordSync.partitionLines(lineTexts, spanEls) → per-line span slices | null
     KW_wordSync.prefetch(lineTexts)    warm the sidecars of the given lines
   Sidecars are fetched with cache: 'no-cache' (see loadTiming).
*/
(function (global) {
  'use strict';

  var LEAD = 0.05;            // aligner onset bias (measured median +43 ms) + one frame
  var EST_MAX_WORDS = 40;     // above this, an estimate drifts: use sentence mode
  var TIMING_WAIT_MS = 300;   // show nothing rather than a guess while the sidecar loads
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
      cache[hash] = fetch(base + hash + '.json', { cache: 'no-cache' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
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
  // Warm the per-line sidecars at play time so each line's timing is ready before it starts.
  function prefetch(texts) {
    (texts || []).forEach(function (t) {
      var info = global.KW_dialogueInfo ? global.KW_dialogueInfo(t) : null;
      if (info && info.contentHash) loadTiming(info.contentHash);
    });
  }

  global.KW_wordSync = { attach: attach, syncFor: syncFor, loadTiming: loadTiming, partitionLines: partitionLines, prefetch: prefetch };
})(window);
