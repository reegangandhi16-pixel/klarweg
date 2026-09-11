/**
 * public/audio/kw-audio.js
 * ----------------------------------------------------------------------------
 * Vanilla runtime for the static-audio system (no bundler). Exposes:
 *
 *   window.audioUrl(text)      → resolved MP3 URL | undefined
 *   window.KW_playAudio(text)  → Promise<boolean> — true once a file actually
 *                                started playing; false if no file / play failed
 *   window.KW_speak(text,opts) → static MP3 first; on miss OR play-failure falls
 *                                back to browser SpeechSynthesis (de-DE).
 *   window.KW_audioReady()     → manifest loaded yet?
 *   window.KW_audioDebug()     → prints a full diagnostic to the console
 *
 * Robustness built in (these were the real-world failure modes):
 *   • Manifest is loaded from MULTIPLE candidate URLs (script-relative,
 *     site-root /audio/, ./public/audio/) — first one that returns JSON wins.
 *   • play() rejection (404 / format / autoplay) is caught and DOWNGRADES to
 *     speech instead of silently "succeeding" — so a click is never silent.
 *   • Every step logs to console; call KW_audioDebug() to see state.
 *
 * Load once per page, BEFORE your app script.
 */
(function (global) {
  'use strict';

  var LOG = '[kw-audio]';

  // Capture the REAL Audio constructor immediately, before any page script can
  // shadow `window.Audio` (e.g. a `const Audio = {…}` alias). Without this,
  // new Audio(url) throws "Audio is not a constructor" and nothing plays.
  var AudioCtor = global.Audio || (typeof Audio !== 'undefined' ? Audio : null);

  // Folder this script was loaded from (…/public/audio/), used as the primary
  // base for resolving manifest + mp3 URLs regardless of page subfolder.
  var BASE = (function () {
    try {
      var s = document.currentScript && document.currentScript.src;
      if (s) return s.replace(/[^/]*$/, '');
    } catch (e) {}
    return '/audio/';
  })();

  // Candidate manifest URLs, tried in order until one parses as JSON.
  var MANIFEST_CANDIDATES = [
    BASE + 'manifest.json',
    '/audio/manifest.json',
    '/public/audio/manifest.json',
    'public/audio/manifest.json',
    './public/audio/manifest.json'
  ];

  var MAP = {};
  var MAP_LC = {};
  var MANIFEST_BASE = BASE;   // base used to resolve relative mp3 paths
  var ready = false;
  var loadedFrom = null;
  var loadError = null;

  function normalize(text) {
    return String(text || '')
      .replace(/\s+/g, ' ')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim();
  }

  // Resolve an mp3 path from the manifest against the place the manifest loaded
  // from, so words/x.mp3 and /audio/words/x.mp3 both work in any deploy layout.
  function resolveUrl(rel) {
    if (!rel) return undefined;
    if (/^https?:\/\//.test(rel)) return rel;          // already absolute
    var path = String(rel).replace(/^\/?audio\//, '').replace(/^\//, ''); // → words/x.mp3
    return MANIFEST_BASE.replace(/[^/]*$/, '') + path.replace(/^audio\//, '');
  }

  function tryLoad(i) {
    if (i >= MANIFEST_CANDIDATES.length) {
      ready = true;
      loadError = 'no manifest candidate returned valid JSON';
      console.warn(LOG, 'manifest NOT loaded —', loadError, '· tried:', MANIFEST_CANDIDATES,
        '· audio will fall back to browser speech.');
      return;
    }
    var url = MANIFEST_CANDIDATES[i];
    fetch(url, { cache: 'force-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (json) {
        if (!json || typeof json !== 'object' || !Object.keys(json).length) {
          throw new Error('empty/invalid manifest');
        }
        MAP = json;
        // Lowercased index for case-insensitive fallback ("Der" → "der").
        MAP_LC = {};
        for (var key in json) { if (Object.prototype.hasOwnProperty.call(json, key)) MAP_LC[normalize(key).toLowerCase()] = json[key]; }
        loadedFrom = url;
        MANIFEST_BASE = url.replace(/[^/]*$/, '');   // folder containing manifest.json
        ready = true;
        console.info(LOG, 'manifest loaded:', Object.keys(MAP).length, 'entries from', url);
      })
      .catch(function (e) {
        // try the next candidate
        tryLoad(i + 1);
      });
  }
  tryLoad(0);

  /** Resolve a German string to its static MP3 URL, or undefined.
   *  Manifest values are either a string URL (words/sentences) or a rich
   *  dialogue object { text, speaker, voice, audio } — handle both. */
  function manifestEntry(text) {
    var n = normalize(text);
    return MAP[n]
        || MAP_LC[n.toLowerCase()]
        || MAP_LC[n.toLowerCase().replace(/[.,!?;:]+$/, '')];
  }
  function relOf(entry) {
    if (!entry) return undefined;
    return (typeof entry === 'string') ? entry : entry.audio; // dialogue object
  }
  function audioUrl(text) {
    var rel = relOf(manifestEntry(text));
    return rel ? resolveUrl(rel) : undefined;
  }
  /** Dialogue metadata for a line, or undefined: { text, speaker, voice, audio }. */
  function dialogueInfo(text) {
    var e = manifestEntry(text);
    return (e && typeof e === 'object') ? e : undefined;
  }

  var current = null;
  function stopCurrent() {
    if (current) { try { current.pause(); current.currentTime = 0; } catch (e) {} current = null; }
    if (global.speechSynthesis) { try { global.speechSynthesis.cancel(); } catch (e) {} }
  }

  function ttsFallback(text, opts) {
    opts = opts || {};
    if (global.speechSynthesis && global.SpeechSynthesisUtterance) {
      try {
        stopCurrent();
        var u = new SpeechSynthesisUtterance(normalize(text));
        u.lang = opts.lang || 'de-DE';
        u.rate = opts.rate || 1;
        global.speechSynthesis.speak(u);
        return 'tts';
      } catch (e) {
        console.warn(LOG, 'TTS fallback failed:', e && e.message);
      }
    }
    return 'none';
  }

  /**
   * Play the static MP3 for `text`. Returns a Promise<boolean> that resolves
   * true only once playback has actually started. On any failure it resolves
   * false (caller can then fall back). NEVER reports success for a failed play.
   */
  function playAudio(text, opts) {
    opts = opts || {};
    var url = audioUrl(text);
    if (!url) return Promise.resolve(false);
    stopCurrent();
    try {
      if (!AudioCtor) { console.warn(LOG, 'no Audio constructor available'); return Promise.resolve(false); }
      current = new AudioCtor(url);
      // Fire onEnded when the clip actually FINISHES (not when it starts) — so
      // sequential playback waits for each file instead of cutting it off.
      if (typeof opts.onEnded === 'function') {
        current.addEventListener('ended', opts.onEnded, { once: true });
      }
      var p = current.play();
      if (p && typeof p.then === 'function') {
        return p.then(function () { return true; })
                .catch(function (err) {
                  console.warn(LOG, 'play() rejected for', url, '→', err && err.name, err && err.message);
                  return false;
                });
      }
      // Older browsers: no promise. Assume started.
      return Promise.resolve(true);
    } catch (e) {
      console.warn(LOG, 'Audio() threw for', url, '→', e && e.message);
      return Promise.resolve(false);
    }
  }

  /**
   * Speak `text`: static MP3 first, SpeechSynthesis fallback on miss OR failure.
   * Returns a Promise<'file'|'tts'|'none'>. Most callers ignore the return.
   */
  function speak(text, opts) {
    return playAudio(text, opts).then(function (played) {
      if (played) return 'file';
      return ttsFallback(text, opts);
    });
  }

  function debug() {
    var sample = Object.keys(MAP).slice(0, 3);
    console.log(LOG, 'DIAGNOSTIC', {
      ready: ready,
      entries: Object.keys(MAP).length,
      loadedFrom: loadedFrom,
      loadError: loadError,
      scriptBase: BASE,
      manifestBase: MANIFEST_BASE,
      candidatesTried: MANIFEST_CANDIDATES,
      sampleKeys: sample,
      sampleResolved: sample.map(function (k) { return k + ' → ' + audioUrl(k); })
    });
    return loadedFrom ? 'OK: ' + Object.keys(MAP).length + ' entries from ' + loadedFrom
                      : 'FAIL: manifest not loaded (' + loadError + ')';
  }

  global.audioUrl = audioUrl;
  global.KW_dialogueInfo = dialogueInfo;
  global.KW_playAudio = playAudio;     // now returns Promise<boolean>
  global.KW_stopAudio = stopCurrent;
  global.KW_speak = speak;             // now returns Promise<string>
  global.KW_audioReady = function () { return ready; };
  global.KW_audioDebug = debug;
})(window);
