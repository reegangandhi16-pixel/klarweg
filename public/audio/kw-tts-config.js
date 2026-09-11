/**
 * public/audio/kw-tts-config.js
 * ----------------------------------------------------------------------------
 * Klarweg audio configuration — CDN base + optional hosted Neural TTS.
 *
 * Load AFTER kw-audio-engine.js on every page.
 *
 * KW_AUDIO_BASE: when set, ALL audio (manifests + MP3 clips) loads from this
 * CDN origin — so NO MP3 files need to live in the project. The manifests
 * store root-relative paths ("/audio/words/x.mp3") which resolve against it.
 */

// ── CDN base for all audio assets (manifests + MP3s) ──────────────────────
// Must be defined BEFORE the engine reads it. Set to null to use local files.
window.KW_AUDIO_BASE =
  'https://cdn.jsdelivr.net/gh/reegangandhi16-pixel/klarweg-audio@main/public/audio/';

(function () {
  if (!window.KW_TTS) return;
  window.KW_TTS.configure({
    // ⬇️  Optional serverless TTS proxy for on-demand generation of NEW words.
    endpoint: null,            // e.g. 'https://klarweg-tts.<you>.workers.dev/tts'
    provider: 'google',        // google | azure | polly | elevenlabs
    voice: 'de-DE-Neural2-F',  // default / female
    maleVoice: 'de-DE-Neural2-D'
  });
})();
