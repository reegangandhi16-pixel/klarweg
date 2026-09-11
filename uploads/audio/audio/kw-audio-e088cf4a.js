/**
 * public/audio/kw-audio.js
 * ----------------------------------------------------------------------------
 * Vanilla runtime for the static-audio system, for the shipped single-HTML
 * Klarweg pages (no bundler). Loads the build-time manifest and exposes:
 *
 *   window.audioUrl(text)         → '/audio/words/<hash>.mp3' | undefined
 *   window.KW_playAudio(text)     → plays the static MP3 if it exists; returns
 *                                   true if a file was played, false otherwise
 *   window.KW_speak(text, opts)   → static MP3 if available, else falls back to
 *                                   the browser SpeechSynthesis voice (de-DE).
 *                                   This is the function UI should call.
 *
 * The fallback means audio works immediately; once you run
 * `npm run generate-audio` and deploy the MP3s + manifest.json, the very same
 * call-sites silently upgrade to zero-latency static playback. No code changes.
 *
 * Load once per page, BEFORE your app script:
 *   <script src="/audio/kw-audio.js"></script>
 * (Adjust the path if your pages live in subfolders — see MANIFEST_URL below.)
 */
(function (global) {
  'use strict';

  // Resolve the manifest + audio base relative to this script's own location,
  // so it works whether the page is at site root or in /chapter, /account, etc.
  var BASE = (function () {
    try {
      var s = document.currentScript && document.currentScript.src;
      if (s) return s.replace(/[^/]*$/, ''); // strip filename → folder URL
    } catch (e) {}
    return '/audio/';
  })();
  var MANIFEST_URL = BASE + 'manifest.json';

  var MAP = {};
  var ready = false;

  function normalize(text) {
    return String(text || '')
      .replace(/\s+/g, ' ')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim();
  }

  // Load the manifest (best-effort; failure just means we always fall back).
  fetch(MANIFEST_URL)
    .then(function (r) { return r.ok ? r.json() : {}; })
    .then(function (json) { MAP = json || {}; ready = true; })
    .catch(function () { ready = true; });

  /** Resolve a German string to its static MP3 URL, or undefined. */
  function audioUrl(text) {
    var key = normalize(text);
    var rel = MAP[key];
    if (!rel) return undefined;
    // manifest stores site-absolute paths like "/audio/words/x.mp3".
    // Re-root them onto BASE so subfolder pages resolve correctly too.
    return rel.replace(/^\/audio\//, BASE);
  }

  var current = null;
  function stopCurrent() {
    if (current) { try { current.pause(); current.currentTime = 0; } catch (e) {} current = null; }
    if (global.speechSynthesis) { try { global.speechSynthesis.cancel(); } catch (e) {} }
  }

  /** Play the static MP3 for `text`. Returns true if a file was played. */
  function playAudio(text) {
    var url = audioUrl(text);
    if (!url) return false;
    stopCurrent();
    try {
      current = new Audio(url);
      current.play();
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Speak `text`: static MP3 first, SpeechSynthesis fallback.
   * opts.rate (default 1) and opts.lang (default de-DE) apply to the fallback.
   */
  function speak(text, opts) {
    opts = opts || {};
    if (playAudio(text)) return 'file';
    // Fallback — browser TTS, German voice.
    if (global.speechSynthesis && global.SpeechSynthesisUtterance) {
      try {
        stopCurrent();
        var u = new SpeechSynthesisUtterance(normalize(text));
        u.lang = opts.lang || 'de-DE';
        u.rate = opts.rate || 1;
        global.speechSynthesis.speak(u);
        return 'tts';
      } catch (e) {}
    }
    return 'none';
  }

  global.audioUrl = audioUrl;
  global.KW_playAudio = playAudio;
  global.KW_stopAudio = stopCurrent;
  global.KW_speak = speak;
  global.KW_audioReady = function () { return ready; };
})(window);
