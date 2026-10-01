/* Klarweg — Story audio exceptions (explicit, page-scoped table).
   ------------------------------------------------------------------------
   A few very short Story lines ("Gern.", "Natürlich.") also exist as
   vocabulary entries. The Story player passes the speaker's gender, so the
   engine's vocabulary lookup answers first and the line plays a vocabulary
   clip instead of its own authored Story recording — which exists in the
   main manifest under the same text.

   This file is loaded ONLY by the affected chapter pages. It never changes
   the engine's lookup order: it acts only when ALL of these match —
     chapter id + Story line index (opts.storyLine, sent by the Story player)
     + the line text (compared via KW_canonKey: the Story player builds its text
       with a space before punctuation tokens — "Gute Besserung !" — so a raw
       string compare would never match; chapter + line index pin the occurrence)
   — and then asks for the same text without the gender hint, so the engine's
   normal manifest path plays the authored Story MP3. Before doing so it checks
   that this resolves to exactly the expected file; otherwise it does nothing.
   Vocabulary cards, word pop-ups and every other caller are untouched.
*/
(function (global) {
  'use strict';

  var EXCEPTIONS = {
    'a1-44-imperativ-modal2':          [{ line: 8, text: 'Gute Besserung!', file: 'story/A1_044_S009.mp3' }],
    'b1-21-temporale-nebensaetze':     [{ line: 5, text: 'Wofür?',          file: 'story/B1_021_S006.mp3' }],
    'b2-68-redemittel-fuer-diskussionen': [{ line: 1, text: 'Natürlich.',   file: 'story/B2_068_S002.mp3' }],
    'c2-01-zeitformen-der-verben':     [{ line: 1, text: 'Gern.',           file: 'story/C2_001_S002.mp3' }],
    'c2-15-partizipien-als-adjektive': [{ line: 5, text: 'Auf jeden Fall.', file: 'story/C2_015_S006.mp3' }]
  };

  var speak = global.KW_speak;
  var canon = global.KW_canonKey;
  var C = global.CHAPTER;
  var list = C && EXCEPTIONS[C.id];
  if (!list || typeof speak !== 'function' || typeof canon !== 'function' || typeof global.KW_resolveInfo !== 'function') return;

  function endsWithFile(src, file) { src = String(src || ''); return src.slice(-(file.length + 1)) === '/' + file; }

  global.KW_speak = function (text, opts) {
    var ex = null;
    if (opts && typeof opts.storyLine === 'number') {
      for (var k = 0; k < list.length; k++) if (list[k].line === opts.storyLine && canon(list[k].text) === canon(String(text || ''))) { ex = list[k]; break; }
    }
    if (!ex) return speak.apply(this, arguments);
    var info = global.KW_resolveInfo(text);                       // manifest path, no gender
    if (!info || info.source !== 'manifest' || !endsWithFile(info.url, ex.file)) return speak.apply(this, arguments);
    var o = Object.assign({}, opts); delete o.gender;
    return speak(text, o);
  };
})(window);
