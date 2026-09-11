/* Klarweg — master audio inventory builder.
   Consumes audit/audio-scan/ch/*.json (static extract, one file per chapter)
   and turns it into canonical AUDIO ASSETS + CONTROL OCCURRENCES.

   Voice + rate assignment follows audio-manifests/voice-policy.json:
     female  de-DE-Neural2-F      male (chapter audio)  de-DE-Neural2-D
     male (vocabulary, frozen legacy exception)          de-DE-Neural2-B
     rate    A1/A2 0.85 · B1/B2 0.95 · C1/C2 1.0
             (popup / clickable-word audio is level-independent → 1.0)

   Identity (deterministic, no randomness, matching the existing pipeline):
     vocabulary   assetId = sha256(text)[0:16] + '_F' | '_M'
                  contentHash = sha256(text + '::' + voice)[0:16]
     everything   assetId = sha256(text + '::' + voice + '::' + rate)[0:16]
     else         contentHash = same
     occurrenceId = <LEVEL>_<chapter#3>_<KIND><seq3>   e.g. A1_001_S001
*/
(function (root) {
  'use strict';

  const VOICE = { female: 'de-DE-Neural2-F', male: 'de-DE-Neural2-D', vocabMale: 'de-DE-Neural2-B' };
  const RATE = { A1: 0.85, A2: 0.85, B1: 0.95, B2: 0.95, C1: 1, C2: 1 };
  const KIND = {
    'story-line': 'S', 'listening-sentence': 'L', 'reading-passage': 'R',
    'speaking-model': 'P', 'grammar-example': 'G', 'vocab-headword': 'V',
    'clickable-word': 'W', 'word-form': 'F'
  };

  async function sha256hex(s) {
    const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(h)).map(x => x.toString(16).padStart(2, '0')).join('');
  }

  /* Two chapter data sets can share a level and a chapter number: the legacy
   * A1 Chapter 3 set (chapter/chapter-data.js -> "Der Nominativ", rendered by
   * chapter-a1-3-nominativ.html) collides with chapter-a1-3-zahlen-data.js.
   * Both are real, distinct, learner-facing chapters. The already-inventoried
   * set keeps the bare number so no existing ID churns; the later-discovered
   * one takes a pinned suffix. Pinned explicitly rather than derived, so the
   * mapping can never drift with file order. */
  const CHAPTER_KEY_OVERRIDES = { 'a1-3-nominativ': '003B' };

  function chapterNumber(chapterId) {
    const ov = CHAPTER_KEY_OVERRIDES[String(chapterId)];
    if (ov) return ov;
    const m = String(chapterId).match(/^[abc][12]-(\d+)/i);
    return m ? String(parseInt(m[1], 10)).padStart(3, '0') : '000';
  }

  /* An asset registry that shares one file across identical
     text + voice + rate, and records every control occurrence that needs it. */
  function registry() {
    const assets = new Map();   // assetId -> asset
    const occ = [];
    return {
      assets, occ,
      async add(o) {
        // o: {text, voice, rate, family, section, type, level, chapter, speaker,
        //     voiceRole, control, occurrenceId, displayed, note, reachable}
        const text = o.text;
        if (!text) return null;
        const rate = o.rate;
        const idBase = o.family === 'vocabulary'
          ? (await sha256hex(text)).slice(0, 16) + (o.voice === VOICE.female ? '_F' : '_M')
          : (await sha256hex(text + '::' + o.voice + '::' + rate)).slice(0, 16);
        const contentHash = o.family === 'vocabulary'
          ? (await sha256hex(text + '::' + o.voice)).slice(0, 16)
          : idBase;
        let a = assets.get(idBase);
        if (!a) {
          a = {
            assetId: idBase, contentHash, text, language: 'de-DE',
            voice: o.voice, voiceRole: o.voiceRole, speakingRate: rate,
            family: o.family, sections: [], types: [], levels: [], chapters: [],
            speakers: [], occurrences: 0, controlOccurrences: 0,
            audioFilename: null, shared: false
          };
          assets.set(idBase, a);
        }
        a.occurrences++;
        if (o.control) a.controlOccurrences++;
        const pushUniq = (arr, v) => { if (v && arr.indexOf(v) === -1) arr.push(v); };
        pushUniq(a.sections, o.section); pushUniq(a.types, o.type);
        pushUniq(a.levels, o.level); pushUniq(a.speakers, o.speaker);
        if (o.chapter && a.chapters.length < 400) pushUniq(a.chapters, o.chapter);
        occ.push({
          id: o.occurrenceId, assetId: idBase, level: o.level, chapter: o.chapter,
          section: o.section, type: o.type, text,
          displayed: o.displayed || null, speaker: o.speaker || null,
          voiceRole: o.voiceRole, voice: o.voice, speakingRate: rate,
          control: o.control || null,
          hasAudioControl: !!o.control,
          reachable: o.reachable === false ? false : true,
          source: o.source || null
        });
        return a;
      }
    };
  }

  /* Authored-section pass over one chapter extract. */
  async function addChapter(reg, ch) {
    const level = ch.level, rate = RATE[level] || 1, num = chapterNumber(ch.chapter);
    const seq = {};
    const nextId = (kind) => {
      seq[kind] = (seq[kind] || 0) + 1;
      return level + '_' + num + '_' + kind + String(seq[kind]).padStart(3, '0');
    };
    for (const r of ch.rows) {
      const common = {
        level, chapter: ch.chapter, section: r.section, type: r.type,
        displayed: r.displayed || r.authoredText || null,
        source: 'chapter/' + ch.file + ' → ' + r.section + (r.idx ? '[' + r.idx + ']' : '')
      };
      if (r.type === 'story-line') {
        const g = r.voiceRole === 'female' ? 'female' : 'male';
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: VOICE[g], rate, family: 'story',
          voiceRole: g, speaker: r.speaker, control: 'button.story-play-line',
          occurrenceId: nextId('S')
        }));
      } else if (r.type === 'vocab-headword') {
        const g = r.voiceRole;
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: g === 'female' ? VOICE.female : VOICE.vocabMale,
          rate: null, family: 'vocabulary', voiceRole: g,
          control: g === 'female' ? 'button.vword-voice[data-g=female]' : 'button.vword-voice[data-g=male]',
          occurrenceId: nextId(g === 'female' ? 'VF' : 'VM')
        }));
      } else if (r.type === 'grammar-example') {
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: VOICE.female, rate, family: 'grammar',
          voiceRole: 'narrator-female', control: '.example-line (click-to-listen)',
          occurrenceId: nextId('G')
        }));
      } else if (r.type === 'reading-passage') {
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: VOICE.female, rate, family: 'reading',
          voiceRole: 'narrator-female', control: 'button "Listen to passage"',
          occurrenceId: nextId('R')
        }));
      } else if (r.type === 'listening-sentence') {
        const g = r.voiceRole === 'female' ? 'female' : r.voiceRole === 'male' ? 'male' : null;
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: g ? VOICE[g] : VOICE.female, rate, family: 'listening',
          voiceRole: g || 'UNRESOLVED-defaulted-female', speaker: r.speaker,
          control: 'button.audio-play-btn (sequence step)',
          occurrenceId: nextId('L')
        }));
      } else if (r.type === 'speaking-model') {
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: VOICE.female, rate, family: 'speaking',
          voiceRole: 'narrator-female', control: 'button "Hear model"',
          occurrenceId: nextId('P')
        }));
      } else if (r.type === 'speaking-task-prompt' || r.type === 'listening-authored-line') {
        // Present in the data (and in the frozen manifests) but NOT reachable
        // from any control in the current UI. Recorded for the audit only.
        await reg.add(Object.assign({}, common, {
          text: r.text, voice: VOICE.female, rate, family: 'unreachable',
          voiceRole: r.voiceRole || 'narrator-female', speaker: r.speaker,
          control: null, reachable: false,
          occurrenceId: nextId(r.type === 'speaking-task-prompt' ? 'Q' : 'LA')
        }));
      }
    }
  }

  root.KW_AUDIO_BUILD = { VOICE, RATE, KIND, sha256hex, registry, addChapter, chapterNumber, CHAPTER_KEY_OVERRIDES };
})(typeof globalThis !== 'undefined' ? globalThis : this);
