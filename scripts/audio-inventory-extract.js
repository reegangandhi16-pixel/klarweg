/* Klarweg — master audio inventory extractor (static pass).
   Mirrors, line for line, the audio-control call sites in chapter/chapter-app.js:
     story   : one .story-play-line per dialogue line  -> lineText(line), genderFor(line)
     vocab   : F + M + listen per card                 -> vocabTerm(art,de) x {female,male}
     grammar : each .example-line is click-to-listen   -> textContent.split('→')[0]
     reading : "Listen to passage"                     -> tokens.filter(!plain).map(w).join(' ')
     listening: player -> Audio.speakSequence(transcript) -> one request per transcript sentence
     speaking: "Hear model"                            -> p.de   (p.task has NO control)
     exercises/quiz/writing/overview/summary/resources : no audio controls
   Popup layer (.wp-audio / .wp-mini-audio) is handled by the runtime scan;
   this file also collects the AUTHORED token paradigms it can see statically.
   Returns plain data only — no IO, no randomness. */
(function (root) {
  'use strict';

  // ---- verbatim helpers copied from chapter-app.js -----------------------
  function vocabTerm(art, de) {
    const a = String(art == null ? '' : art).trim();
    const d = String(de == null ? '' : de).trim().replace(/\s+/g, ' ');
    if (!a) return d;
    const esc = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('^' + esc + '\\s+', 'i').test(d) ? d : (a + ' ' + d);
  }
  function normWord(w) {
    return String(w || '').toLowerCase()
      .replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '')
      .replace(/^['’-]+|['’-]+$/g, '')
      .trim();
  }
  // kw-audio-engine.js normalize() — the cache/manifest key
  function normalizeText(t) {
    return String(t == null ? '' : t)
      .replace(/\s+/g, ' ')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim();
  }
  function stripHtml(html) {
    return String(html == null ? '' : html)
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/&middot;/g, '·').replace(/&hellip;/g, '…').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–');
  }
  function wordClassOf(type) {
    return String(type || '').split(' · ')[0].split(' (')[0].trim().toLowerCase();
  }

  /* ---- non-lexical surface filter -------------------------------------
     Two kinds of value reach the token stream that are NOT learner-facing
     German and must never become audio targets:

     1. PLURAL-FIELD ANNOTATIONS. The plural field doubles as a grammar note
        when a noun has no ordinary plural: "— (Sg.)", "(Pluraletantum)",
        "— (Kollektivum)", "— (Sg., nur in "von Kindesbeinen an")". These are
        notation, partly Latin, and one embeds a quoted idiom. Recognised by
        the leading em-dash placeholder, a wholly parenthetical value, or a
        grammatical-category keyword — never by matching a word list.

     2. PRONUNCIATION RESPELLINGS. Example sentences teach sounds by respelling
        a word in capitals ("Zeit klingt wie TSAIT."). ALL-CAPS is not German
        orthography — nouns capitalise only the initial — so an all-caps run of
        two or more letters is a respelling, not a word. The real lexical
        target (Zeit) is untouched and keeps its own audio.

     Excluding a surface here removes it from the audio inventory without
     touching chapter content or the pronunciation metadata itself. */
  var PLURAL_ANNOTATION = /^\s*[—–-]|^\s*\(|Pluraletantum|Singularetantum|Kollektivum|nur Plural|nur Sg|\bSg\.|\bPl\./i;

  function isPluralAnnotation(v) {
    var s = String(v == null ? '' : v).trim();
    if (!s) return true;
    return PLURAL_ANNOTATION.test(s);
  }

  function isRespelling(w) {
    var s = String(w == null ? '' : w).trim();
    if (s.length < 2) return false;
    return /^[A-ZÄÖÜ]{2,}$/.test(s);      // all-caps run: pronunciation hint
  }

  function isLexicalSurface(w) {
    var s = String(w == null ? '' : w).trim();
    if (!s) return false;
    if (isRespelling(s)) return false;
    if (isPluralAnnotation(s)) return false;
    return true;
  }

  /* ---- LETTER / VOWEL POLICY -------------------------------------------
     A single character is ambiguous on its own: "Z" could be spoken as the
     letter NAME (zett) or as its SOUND (/ts/). The corpus does not leave this
     to inference — the a1-1 and a1-2 pronunciation chapters author a `type` on
     every such token, plus a `pron` respelling:

       { w: 'Z', type: 'Letter', en: 'the letter Z', pron: 'tset' }
       { w: 'ä', type: 'Vowel',  en: 'the vowel Ä', pron: 'eh'   }

     So `type` IS the policy signal, read from the data rather than guessed:
       Letter -> the token names a letter
       Vowel  -> the token demonstrates a vowel sound
       Sound  -> the token demonstrates a phoneme

     This function only CLASSIFIES and surfaces the authored `pron`. It does not
     write pron, invent pronunciation, or name any individual letter — add a new
     authored Letter token and it is covered automatically.

     CAUTION, deliberately encoded in renderSafe: `pron` is a respelling written
     for Hindi/English-speaking learners to READ ("tset", "vay", "err"), not
     validated TTS input. A German voice given "vay" will not reliably produce
     the letter name /faʊ/. So these targets are classified but NOT marked
     synthesis-ready; renderSafe is false pending an authored spoken form. */
  var LETTER_TYPES = { 'letter': 'letter-name', 'vowel': 'vowel-sound', 'sound': 'phoneme' };

  function letterPolicyFor(token) {
    if (!token) return null;
    var kind = LETTER_TYPES[wordClassOf(token.type)];
    if (!kind) return null;
    var pron = (typeof token.pron === 'string' && token.pron.trim()) ? token.pron.trim() : null;
    return {
      displayText: String(token.w == null ? '' : token.w).trim(),
      intent: kind,
      authoredPron: pron,                 // read only; never modified
      authoredGloss: token.en || null,
      renderSource: pron ? 'token.pron (authored respelling)' : null,
      // A learner-facing respelling is not a verified German TTS string.
      renderSafe: false,
      needs: pron
        ? 'authored spoken form, or confirmation that the respelling is safe as German TTS input'
        : 'authored pron is absent'
    };
  }

  function levelOf(C) {
    const p = String(C.phase || '').trim();
    const m = p.match(/([ABC][12])/i);
    return m ? m[1].toUpperCase() : 'A1';
  }

  function extract(C, file) {
    const chapter = C.id || file.replace(/^chapter-|-data\.js$/g, '');
    const level = levelOf(C);
    const rows = [];          // audio targets
    const controls = [];      // control occurrences {section, kind, n}
    const surfaces = [];      // clickable token surfaces (popup entry points)
    const push = (r) => { r.chapter = chapter; r.level = level; rows.push(r); };

    /* ---- STORY -------------------------------------------------------- */
    const S = C.story;
    if (S && Array.isArray(S.dialogue)) {
      const femaleSpeakers = (S.femaleSpeakers || ['Anna', 'Frau Weber', 'Lena', 'Frau Klein']);
      S.dialogue.forEach((line, i) => {
        const uiText = line.tokens
          ? line.tokens.filter(t => !t.plain).map(t => t.w).join(' ')
          : (line.de || '');
        const gender = line.voice || (femaleSpeakers.indexOf(line.speaker) >= 0 ? 'female' : 'male');
        push({
          section: 'story', type: 'story-line', idx: i + 1,
          text: normalizeText(uiText),
          authoredText: line.de && line.de !== uiText ? line.de : null,
          speaker: line.speaker || null, voiceRole: gender, control: 'button.story-play-line'
        });
        controls.push({ section: 'story', kind: 'story-play-line' });
      });
      controls.push({ section: 'story', kind: 'story-play-all', composite: true });
    }

    /* ---- VOCABULARY --------------------------------------------------- */
    /* ---- VOCABULARY ---------------------------------------------------
       Audio text is the displayed term, vocabTerm(art, de) — EXCEPT when the
       card authors `spokenDe`. A few headwords are written in a form that is
       not what a learner should hear: "qm (Quadratmeter)" displays the
       abbreviation plus its expansion, but is spoken "Quadratmeter".

       spokenDe overrides ONLY the rendered/synthesized text. Identity is
       untouched: manifestKey and assetId still derive from the displayed term,
       so the runtime lookup key stays exactly what the UI requests. This is the
       same displayText/renderText split already used for story and reading.

       `ex` stays the example sentence (9,213 of 9,243 cards) and `pron` stays
       the visible respelling — neither is repurposed as TTS text. */
    (C.vocab || []).forEach((w, i) => {
      const term = vocabTerm(w.art, w.de);
      if (!term) return;
      const spoken = (typeof w.spokenDe === 'string' && w.spokenDe.trim()) ? w.spokenDe.trim() : null;
      ['female', 'male'].forEach(g => push({
        section: 'vocabulary', type: 'vocab-headword', idx: i + 1,
        text: normalizeText(term), voiceRole: g,
        renderText: spoken ? normalizeText(spoken) : null,
        renderTextSource: spoken ? 'vocab.spokenDe (authored)' : null,
        pos: w.pos || null, gender: w.gender || null,
        control: g === 'female' ? 'button.vword-voice[data-g=female]' : 'button.vword-voice[data-g=male]'
      }));
      // three controls, two assets: F, M, and the speaker button (plays the
      // current preference — no third asset).
      controls.push({ section: 'vocabulary', kind: 'vword-voice-F' });
      controls.push({ section: 'vocabulary', kind: 'vword-voice-M' });
      controls.push({ section: 'vocabulary', kind: 'vword-listen', composite: true });
      if (w.plural && isLexicalSurface(w.plural)) surfaces.push({ w: w.plural, from: 'vocab-plural', type: 'Noun · plural' });
      if (w.art) surfaces.push({ w: String(w.art).trim(), from: 'vocab-article', type: 'Article' });
      (w.exTokens || []).forEach(t => { if (!t.plain && isLexicalSurface(t.w)) surfaces.push(tokenSurface(t, 'vocab-example')); });
    });

    /* ---- GRAMMAR ------------------------------------------------------ */
    (C.grammar || []).forEach((g, gi) => {
      (g.example || []).forEach((ex, ei) => {
        const full = stripHtml(ex.html == null ? ex : ex.html);
        const de = full.split('→')[0];
        const text = normalizeText(de);
        if (!text) return;
        push({
          section: 'grammar', type: 'grammar-example', idx: gi + 1, sub: ei + 1,
          text, displayed: normalizeText(full) !== text ? normalizeText(full) : null,
          voiceRole: 'narrator-female', block: g.title || null, control: '.example-line[click]'
        });
        controls.push({ section: 'grammar', kind: 'example-line' });
      });
    });

    /* ---- READING ------------------------------------------------------ */
    const R = C.reading;
    if (R && Array.isArray(R.tokens)) {
      const uiText = R.tokens.filter(t => !t.plain).map(t => t.w).join(' ');
      const authored = R.tokens.map(t => t.w).join(' ').replace(/\s+([.,!?;:])/g, '$1');
      push({
        section: 'reading', type: 'reading-passage', idx: 1,
        text: normalizeText(uiText),
        authoredText: normalizeText(authored) !== normalizeText(uiText) ? normalizeText(authored) : null,
        voiceRole: 'narrator-female', title: R.title || null, control: 'button "Listen to passage"'
      });
      controls.push({ section: 'reading', kind: 'listen-to-passage' });
      R.tokens.forEach(t => { if (!t.plain && isLexicalSurface(t.w)) surfaces.push(tokenSurface(t, 'reading')); });
    }

    /* ---- LISTENING ---------------------------------------------------- */
    const L = C.listening;
    if (L && L.transcript) {
      const parts = (String(L.transcript).match(/[^.!?]+[.!?]*/g) || [L.transcript])
        .map(s => s.trim()).filter(Boolean);
      const dlg = Array.isArray(L.dialogue) ? L.dialogue : [];
      parts.forEach((s, i) => {
        // voice: the authored dialogue line that contains this sentence
        const owner = dlg.find(d => String(d.de || '').indexOf(s) !== -1);
        push({
          section: 'listening', type: 'listening-sentence', idx: i + 1,
          text: normalizeText(s),
          speaker: owner ? (owner.speaker || null) : null,
          voiceRole: owner ? (owner.gender || null) : null,
          authoredLineId: owner ? (owner.id || null) : null,
          control: 'button.audio-play-btn (sequence)'
        });
      });
      controls.push({ section: 'listening', kind: 'audio-play-btn', composite: true });
      // authored dialogue lines, for the voice map + manifest comparison
      dlg.forEach((d, i) => rows.push({
        chapter, level, section: 'listening', type: 'listening-authored-line', idx: i + 1,
        text: normalizeText(d.de || ''), speaker: d.speaker || null,
        voiceRole: d.gender || null, authoredLineId: d.id || null,
        control: null, reachable: false
      }));
      (L.tokens || []).forEach(t => { if (!t.plain && isLexicalSurface(t.w)) surfaces.push(tokenSurface(t, 'listening')); });
    }

    /* ---- SPEAKING ----------------------------------------------------- */
    (C.speaking || []).forEach((p, i) => {
      if (!p || !p.de) return;
      push({
        section: 'speaking', type: 'speaking-model', idx: i + 1,
        text: normalizeText(p.de), voiceRole: 'narrator-female',
        control: 'button "Hear model"'
      });
      controls.push({ section: 'speaking', kind: 'hear-model' });
      if (p.task) rows.push({
        chapter, level, section: 'speaking', type: 'speaking-task-prompt', idx: i + 1,
        text: normalizeText(p.task), voiceRole: 'narrator-female', control: null, reachable: false
      });
    });

    /* ---- STORY TOKENS (popup entry points) ---------------------------- */
    if (S && Array.isArray(S.dialogue)) {
      S.dialogue.forEach(line => (line.tokens || []).forEach(t => {
        if (!t.plain && isLexicalSurface(t.w)) surfaces.push(tokenSurface(t, 'story'));
      }));
    }

    /* ---- sections with no audio control ------------------------------- */
    const silent = {
      exercises: countExercises(C.exercises),
      quiz: (C.quiz || []).length,
      writing: C.writing ? 1 : 0,
      vocabularyReview: (C.vocabularyReview || []).length,
      grammarReview: (C.grammarReview || []).length,
      listeningQuestions: ((C.listening || {}).questions || []).length
    };

    return { chapter, level, number: C.number || null, title: C.title || null, rows, controls, surfaces, silent };
  }

  function tokenSurface(t, from) {
    const s = { w: t.w, from, type: t.type || null, role: t.role || null };
    if (t.lemma) s.lemma = t.lemma;
    if (t.compare) s.compare = t.compare;
    if (t.conj) s.conj = t.conj;
    if (t.plural && wordClassOf(t.type).indexOf('noun') !== -1 && isLexicalSurface(t.plural)) s.plural = t.plural;
    return s;
  }
  function countExercises(E) {
    if (!E) return 0;
    let n = 0;
    Object.keys(E).forEach(k => { const v = E[k]; if (Array.isArray(v)) n += v.length; else if (v) n += 1; });
    return n;
  }

  root.KW_AUDIO_EXTRACT = { extract, vocabTerm, normWord, normalizeText, stripHtml, wordClassOf,
    isLexicalSurface, isPluralAnnotation, isRespelling, letterPolicyFor, LETTER_TYPES };
})(typeof globalThis !== 'undefined' ? globalThis : this);
