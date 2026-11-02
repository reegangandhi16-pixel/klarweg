/* Klarweg — Reading audio exceptions (shared, page-scoped table).
   ------------------------------------------------------------------------
   Some Reading passages were edited AFTER their MP3 was recorded: the
   recording is the displayed passage followed by a stale trailing sentence
   the page no longer shows. The engine looks audio up by text, finds no key
   for the edited passage and falls back to browser speech synthesis.

   Same mechanism as the verified C2·01 page exception (PR #25), generalised
   to a table. Loaded ONLY by the chapter pages listed below, right after
   their chapter data. When such a page asks for its displayed passage, this
   asks the engine for the passage's RECORDED text instead (an existing
   manifest key, so the existing CDN MP3 plays through the normal path) and
   ends playback inside the silence before the stale tail. No MP3, manifest
   or engine change.

   Each entry is verified at play time: the recorded text must resolve to the
   expected file, and the cutoff only applies to that exact file. Anything
   unexpected falls through to the original behaviour, untouched. A page that
   already carries its own exception (C2·01) is never wrapped twice.

   Cutoffs come from offline forced alignment of the unmodified CDN MP3s:
   middle of the silence between the last displayed word and the stale tail.
*/
(function (global) {
  'use strict';

  var EXCEPTIONS = {
      "b2-14-goethe-mini-test-1": {
          "file": "reading/B2_014_R001.mp3",
          "endAt": 9.35
      },
      "b2-26-goethe-mini-test-2": {
          "file": "reading/B2_026_R001.mp3",
          "endAt": 13.73
      },
      "b2-36-goethe-halbzeit-test": {
          "file": "reading/B2_036_R001.mp3",
          "endAt": 15.35
      },
      "b2-43-goethe-mini-3": {
          "file": "reading/B2_043_R001.mp3",
          "endAt": 6.92
      },
      "b2-53-goethe-mini-4": {
          "file": "reading/B2_053_R001.mp3",
          "endAt": 6.57
      },
      "b2-61-indirekte-rede-zeitverschiebung": {
          "file": "reading/B2_061_R001.mp3",
          "endAt": 14.33
      },
      "b2-62-konjunktiv-i-berichtende-sprache": {
          "file": "reading/B2_062_R001.mp3",
          "endAt": 20.0
      },
      "b2-63-goethe-mini-5": {
          "file": "reading/B2_063_R001.mp3",
          "endAt": 5.31
      },
      "b2-64-praepositionen-mit-genitiv": {
          "file": "reading/B2_064_R001.mp3",
          "endAt": 21.47
      },
      "b2-65-wissenschaftssprache": {
          "file": "reading/B2_065_R001.mp3",
          "endAt": 22.0
      },
      "b2-66-argumentieren-standpunkte": {
          "file": "reading/B2_066_R001.mp3",
          "endAt": 20.41
      },
      "b2-67-argumentieren-gegenargumente": {
          "file": "reading/B2_067_R001.mp3",
          "endAt": 24.43
      },
      "b2-68-redemittel-fuer-diskussionen": {
          "file": "reading/B2_068_R001.mp3",
          "endAt": 22.4
      },
      "b2-69-goethe-zertifikat-b2-final": {
          "file": "reading/B2_069_R001.mp3",
          "endAt": 7.47
      },
      "c1-01-tempusgebrauch-stilistische-tempuswahl": {
          "file": "reading/C1_001_R001.mp3",
          "staleTail": "Sie ging langsam durch die leere Straße. Plötzlich hört sie Schritte.",
          "endAt": 34.62
      },
      "c1-02-raum-und-zeit-praezise-ausdruecken": {
          "file": "reading/C1_002_R001.mp3",
          "endAt": 43.12
      },
      "c1-03-nebensaetze-sicher-beherrschen": {
          "file": "reading/C1_003_R001.mp3",
          "endAt": 16.13
      },
      "c1-04-hauptsaetze-elegant-verbinden": {
          "file": "reading/C1_004_R001.mp3",
          "endAt": 17.13
      },
      "c1-05-zweiteilige-satzverbindungen": {
          "file": "reading/C1_005_R001.mp3",
          "endAt": 12.25
      },
      "c1-06-goethe-mini-1": {
          "file": "reading/C1_006_R001.mp3",
          "endAt": 22.19
      },
      "c1-07-praepositionen-mit-genitiv": {
          "file": "reading/C1_007_R001.mp3",
          "endAt": 20.05
      },
      "c1-08-anspruchsvolle-praepositionen": {
          "file": "reading/C1_008_R001.mp3",
          "endAt": 18.52
      },
      "c1-09-adjektive-mit-praepositionalergaenzungen": {
          "file": "reading/C1_009_R001.mp3",
          "endAt": 17.43
      },
      "c1-10-nomen-mit-praepositionalobjekt": {
          "file": "reading/C1_010_R001.mp3",
          "endAt": 15.16
      },
      "c1-11-goethe-mini-2": {
          "file": "reading/C1_011_R001.mp3",
          "endAt": 13.26
      },
      "c1-12-modalverben-praezise-verwenden": {
          "file": "reading/C1_012_R001.mp3",
          "endAt": 13.53
      },
      "c1-13-vermutungen-mit-modalverben-ausdruecken": {
          "file": "reading/C1_013_R001.mp3",
          "endAt": 16.11
      },
      "c1-14-konjunktiv-ii-fuer-irreales-und-hypothesen": {
          "file": "reading/C1_014_R001.mp3",
          "endAt": 13.72
      },
      "c1-15-konjunktiv-i-und-indirekte-rede": {
          "file": "reading/C1_015_R001.mp3",
          "endAt": 15.4
      },
      "c1-16-aufforderung-empfehlung-und-handlungssteuerung": {
          "file": "reading/C1_016_R001.mp3",
          "endAt": 15.14
      },
      "c1-17-goethe-halbzeit-test": {
          "file": "reading/C1_017_R001.mp3",
          "endAt": 14.86
      },
      "c1-18-adjektivdeklination-sicher-anwenden": {
          "file": "reading/C1_018_R001.mp3",
          "endAt": 19.93
      },
      "c1-19-steigerung-und-sprachliche-abstufung": {
          "file": "reading/C1_019_R001.mp3",
          "endAt": 16.68
      },
      "c1-20-relativsaetze-erweitern-und-variieren": {
          "file": "reading/C1_020_R001.mp3",
          "endAt": 16.84
      },
      "c1-21-partizipialattribute-verstehen-und-nutzen": {
          "file": "reading/C1_021_R001.mp3",
          "endAt": 12.41
      },
      "c1-22-komplexe-attribute-und-nominalgruppen": {
          "file": "reading/C1_022_R001.mp3",
          "endAt": 12.74
      },
      "c1-23-goethe-mini-3": {
          "file": "reading/C1_023_R001.mp3",
          "endAt": 12.69
      },
      "c1-24-nominalisierung-im-formellen-stil": {
          "file": "reading/C1_024_R001.mp3",
          "endAt": 14.42
      },
      "c1-25-partizipien-und-adjektive-als-nomen": {
          "file": "reading/C1_025_R001.mp3",
          "endAt": 11.31
      },
      "c1-26-passiv-und-passiversatzformen": {
          "file": "reading/C1_026_R001.mp3",
          "endAt": 13.67
      },
      "c1-27-funktionsverbgefuege-im-akademischen-deutsch": {
          "file": "reading/C1_027_R001.mp3",
          "endAt": 9.95
      },
      "c1-28-goethe-mini-4": {
          "file": "reading/C1_028_R001.mp3",
          "endAt": 11.86
      },
      "c1-29-verben-mit-praefixen-sicher-unterscheiden": {
          "file": "reading/C1_029_R001.mp3",
          "endAt": 12.68
      },
      "c1-30-nomen-mit-numerusbesonderheiten": {
          "file": "reading/C1_030_R001.mp3",
          "endAt": 11.4
      },
      "c1-31-adversativangaben-und-gegensaetze-ausdruecken": {
          "file": "reading/C1_031_R001.mp3",
          "endAt": 9.87
      },
      "c1-32-kohaerenz-und-textverknuepfung": {
          "file": "reading/C1_032_R001.mp3",
          "endAt": 11.73
      },
      "c1-33-goethe-mini-5": {
          "file": "reading/C1_033_R001.mp3",
          "endAt": 11.46
      },
      "c1-34-argumentieren-auf-c1-niveau": {
          "file": "reading/C1_034_R001.mp3",
          "endAt": 12.97
      },
      "c1-35-konzession-und-abwaegen": {
          "file": "reading/C1_035_R001.mp3",
          "endAt": 9.21
      },
      "c1-36-register-und-stilebenen-beherrschen": {
          "file": "reading/C1_036_R001.mp3",
          "endAt": 12.32
      },
      "c1-37-kollokationen-und-bedeutungsnuancen": {
          "file": "reading/C1_037_R001.mp3",
          "endAt": 12.44
      },
      "c1-38-zusammenfassung-schreiben": {
          "file": "reading/C1_038_R001.mp3",
          "endAt": 11.67
      },
      "c1-39-stellungnahme-schreiben": {
          "file": "reading/C1_039_R001.mp3",
          "endAt": 11.91
      },
      "c1-40-forumsbeitrag-schreiben": {
          "file": "reading/C1_040_R001.mp3",
          "endAt": 11.65
      },
      "c1-41-grafikbeschreibung-und-grafikauswertung": {
          "file": "reading/C1_041_R001.mp3",
          "endAt": 13.25
      },
      "c1-42-goethe-zertifikat-c1-probepruefung": {
          "file": "reading/C1_042_R001.mp3",
          "endAt": 14.22
      },
      "c1-43-goethe-zertifikat-c1-final": {
          "file": "reading/C1_043_R001.mp3",
          "endAt": 15.42
      },
      "c2-02-verben-mit-praefixen": {
          "file": "reading/C2_002_R001.mp3",
          "endAt": 13.63
      },
      "c2-03-verben-und-ihre-ergaenzungen": {
          "file": "reading/C2_003_R001.mp3",
          "endAt": 13.03
      },
      "c2-04-nomen-verb-verbindungen": {
          "file": "reading/C2_004_R001.mp3",
          "endAt": 11.59
      },
      "c2-05-goethe-mini-1": {
          "file": "reading/C2_005_R001.mp3",
          "endAt": 12.7
      },
      "c2-06-konjunktiv-ii": {
          "file": "reading/C2_006_R001.mp3",
          "endAt": 12.36
      },
      "c2-07-konjunktiv-i": {
          "file": "reading/C2_007_R001.mp3",
          "endAt": 9.11
      },
      "c2-08-modalverben": {
          "file": "reading/C2_008_R001.mp3",
          "endAt": 9.74
      },
      "c2-09-goethe-mini-2": {
          "file": "reading/C2_009_R001.mp3",
          "endAt": 10.31
      },
      "c2-10-adverbialsaetze-und-diskursmarker": {
          "file": "reading/C2_010_R001.mp3",
          "endAt": 14.94
      },
      "c2-11-relativsaetze": {
          "file": "reading/C2_011_R001.mp3",
          "endAt": 7.52
      },
      "c2-12-passiv": {
          "file": "reading/C2_012_R001.mp3",
          "endAt": 6.95
      },
      "c2-13-passiversatzformen": {
          "file": "reading/C2_013_R001.mp3",
          "endAt": 6.88
      },
      "c2-14-goethe-halbzeit-test": {
          "file": "reading/C2_014_R001.mp3",
          "endAt": 11.52
      },
      "c2-15-partizipien-als-adjektive": {
          "file": "reading/C2_015_R001.mp3",
          "endAt": 5.25
      },
      "c2-16-nominalisierte-adjektive-und-partizipien": {
          "file": "reading/C2_016_R001.mp3",
          "endAt": 7.01
      },
      "c2-17-adjektivdeklination-auf-c2-niveau": {
          "file": "reading/C2_017_R001.mp3",
          "endAt": 4.61
      },
      "c2-18-stilistische-nuancen-und-register-von-adjektiven": {
          "file": "reading/C2_018_R001.mp3",
          "endAt": 7.8
      },
      "c2-19-adjektive-mit-ergaenzungen": {
          "file": "reading/C2_019_R001.mp3",
          "endAt": 8.03
      },
      "c2-20-goethe-mini-3": {
          "file": "reading/C2_020_R001.mp3",
          "endAt": 4.87
      },
      "c2-21-wortbildung-der-adjektive": {
          "file": "reading/C2_021_R001.mp3",
          "endAt": 6.27
      },
      "c2-22-wortbildung-der-nomen": {
          "file": "reading/C2_022_R001.mp3",
          "endAt": 5.7
      },
      "c2-23-wortbildung-der-verben": {
          "file": "reading/C2_023_R001.mp3",
          "endAt": 5.6
      },
      "c2-24-goethe-mini-4": {
          "file": "reading/C2_024_R001.mp3",
          "endAt": 6.48
      }
  };

  var speak = global.KW_speak;
  var canon = global.KW_canonKey;
  var C = global.CHAPTER;
  var ex = C && EXCEPTIONS[C.id];
  if (!ex || typeof speak !== 'function' || typeof canon !== 'function' || !C.reading || !Array.isArray(C.reading.tokens)) return;
  if (String(speak).indexOf('displayedKey') >= 0) return;          // page already has its own exception

  // Exactly what the Reading player requests: its word tokens joined by spaces.
  var displayed = C.reading.tokens.filter(function (t) { return !t.plain; }).map(function (t) { return t.w; }).join(' ');
  var displayedKey = canon(displayed);
  // The recording's own text. For a paid chapter it is read from the chapter's
  // gated audio lines (window.KW_CHAPTER_AUDIO, delivered only with the
  // purchased chapter), so no paid passage text is published in this file.
  var recorded = null;
  if (ex.staleTail) recorded = displayed + ' ' + ex.staleTail;
  else {
    var A = global.KW_CHAPTER_AUDIO, E = A && A.entries;
    if (E) for (var key in E) {
      if (!Object.prototype.hasOwnProperty.call(E, key) || !E[key]) continue;
      if ((E[key].file || E[key].audio) === 'audio/' + ex.file) { recorded = key; break; }
    }
  }
  if (!recorded) return;
  // Word sync (when on the page) prefetches the recording's timing under its recorded key.
  if (global.KW_wordSync && global.KW_wordSync.alias) global.KW_wordSync.alias(displayed, recorded);

  function endsWithFile(src) { src = String(src || ''); return src.slice(-(ex.file.length + 1)) === '/' + ex.file; }

  function cutAt(audio, endAt) {
    var raf = 0, done = false;
    function check() {
      if (done) return;
      if (audio.currentTime >= endAt && !audio.paused) {
        cleanup();
        // Jump to the end while playing: the element fires 'ended', so the
        // engine and the Reading button finish through their normal path.
        try { audio.currentTime = audio.duration; } catch (e) { audio.pause(); }
        return;
      }
      raf = global.requestAnimationFrame(check);
    }
    function cleanup() {
      if (done) return;
      done = true;
      global.cancelAnimationFrame(raf);
      audio.removeEventListener('timeupdate', check);   // backup when rAF is throttled
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('ended', cleanup);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('emptied', cleanup);
    }
    function onPlay() { done = false; global.cancelAnimationFrame(raf); raf = global.requestAnimationFrame(check); }
    function onPause() { global.cancelAnimationFrame(raf); if (audio.currentTime === 0 || audio.ended) cleanup(); }
    audio.addEventListener('timeupdate', check);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('ended', cleanup);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('emptied', cleanup);
    raf = global.requestAnimationFrame(check);
  }

  global.KW_speak = function (text, opts) {
    if (canon(String(text || '')) !== displayedKey) return speak.apply(this, arguments);
    var info = global.KW_resolveInfo ? global.KW_resolveInfo(recorded) : null;
    if (!info || !endsWithFile(info.url)) return speak.apply(this, arguments);   // unexpected: original path
    opts = opts || {};
    var userOnAudio = opts.onAudio;
    return speak(recorded, Object.assign({}, opts, {
      onAudio: function (audio) {
        // Effective end for the Reading seek bar (0 → endAt, not the whole file).
        if (endsWithFile(audio.currentSrc || audio.src)) { audio.kwEndAt = ex.endAt; cutAt(audio, ex.endAt); }
        if (typeof userOnAudio === 'function') userOnAudio(audio);
      }
    }));
  };
})(window);
