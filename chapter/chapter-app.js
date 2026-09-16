/* ============================================================
   KLARWEG CHAPTER APP — dashboard renderer + interactions
   Reads window.CHAPTER, builds the story-slide dynamic content
   and the full learning dashboard, then wires every interaction.
   Runs BEFORE chapter-story.js so GSAP sees a populated DOM.
============================================================ */
(function () {
  const C = window.CHAPTER;
  if (!C) { console.error('CHAPTER data missing'); return; }

  // Sentence X-Ray is paused as of the "pause" decision: the full
  // implementation (shared component, parser tokens, Grammar Breakdown,
  // Sentence Insight rendering) stays in the codebase intact and unchanged,
  // but is not wired into the real learner experience — Word Popup is the
  // sole learner-facing interaction while this is false. Flip to re-enable
  // everywhere at once; do not remove the call sites this gates.
  const SENTENCE_XRAY_ENABLED = false;
  // Phase 1 of SENTENCE-COMPONENT-ROLLOUT-PLAN.md: Story ships the shared
  // sentence component first (lowest data cost — storyTokenFor already yields
  // the {w, role} shape; highest reach — every chapter). The master flag above
  // still gates Grammar Examples, Reading and the Listening transcript, which
  // stay paused pending Phases 2-3. Set this to false to roll Story back.
  const SENTENCE_XRAY_STORY_ENABLED = true;

  /* ---------- Global Lexicon (single shared-runtime load point) ----------
     chapter-app.js IS the shared runtime every chapter already loads, so it
     is the one place the cross-chapter dictionary gets loaded — no chapter
     HTML file references global-lexicon.js directly. Fires immediately on
     script execution (in parallel with the rest of page render); by the
     time a learner actually clicks a word the fetch has long resolved. */
  (function loadGlobalLexicon() {
    if (window.KW_GLOBAL_LEXICON || document.getElementById('kw-global-lexicon')) return;
    const s = document.createElement('script');
    s.id = 'kw-global-lexicon';
    s.src = 'global-lexicon.js';
    s.onload = function () {
      // DO NOT add `WORDIDX = null` here. Tried TWICE and reverted both times.
      //
      // The race it targets is real: buildWordIndex() is lazy, classConflict()
      // reads KW_GLOBAL_LEXICON, so an index built before this async dictionary
      // arrives caches verdicts taken against an empty lexicon and is never
      // rebuilt — the re-sweeps below then recompute span COLOURS from the full
      // dictionary while resolveFullEntry serves BADGES from the stale index
      // (A2-9 `wie`: correct r-conjunction colour under a "Question word" badge,
      // load-dependent). Invalidating here DOES fix that, and made A2-9 agree
      // between isolated and full-sweep runs.
      //
      // But it costs clickability, and the non-destructive classConflict change
      // (withhold the `type` field, not the whole entry — see buildWordIndex) did
      // NOT recover it. Measured on A1-1, all three states:
      //   reverted → 254 clickable / 135 orphan text nodes
      //   non-destructive alone → 254 / 135   (safe, kept)
      //   non-destructive + invalidation → 243 / 137   (11 words lost)
      // So entry-withholding was NOT the cause of the loss. The remaining cause
      // is untraced: something else in the rebuild path drops 11 surfaces that
      // the pre-lexicon index had. Trace THAT before trying this line again.
      //
      // The dictionary just became available — anything the gated sweep ran
      // BEFORE this fired (a real race: this script loads async, the rest of
      // the page renders synchronously) needs one deterministic re-pass over
      // the whole document, not a timing guess. gatedWrapWordsIn only ever
      // touches actual plain-text nodes (it explicitly skips anything already
      // inside a .de-link span), so it's safe — and necessary — to re-run on
      // EVERY gated container, not just ones with zero existing links: a
      // container can have some words resolved from local chapter data
      // before this fired, while other words in the SAME container only
      // resolve via the Global Lexicon and were wrongly left unlinked if the
      // sweep considered the container "done" the moment it saw one link.
      document.querySelectorAll(LINK_TARGETS_GATED).forEach(elDe => {
        if (/[A-Za-zÄÖÜäöüß]/.test(elDe.textContent || '')) gatedWrapWordsIn(elDe);
      });
      // Same race, same fix, for the main (non-gated) pipeline: any .de/
      // .de-em/.vword-ex/.vword-de content whose words got no meaningful
      // dictionary hit before the lexicon loaded is re-swept now that real
      // data is available. wrapWordsIn only touches text nodes outside
      // existing .de-link spans, so this is safe to re-run.
      document.querySelectorAll(LINK_TARGETS).forEach(elDe => {
        if (elDe.closest(LINK_EXCLUDE)) return;
        wrapWordsIn(elDe);
      });
    };
    document.head.appendChild(s);
  })();

  /* ---------- tiny DOM helpers ---------- */
  // SINGLE SOURCE OF TRUTH for German word tokenization lives in tokenizer.js
  // (loaded before this file) as window.KW_germanWordRegex — never duplicate
  // the character class here or in any renderer.
  const germanWordRegex = window.KW_germanWordRegex;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  function el(tag, props = {}, ...kids) {
    const n = document.createElement(tag);
    for (const k in props) {
      if (k === 'class') n.className = props[k];
      else if (k === 'html') n.innerHTML = props[k];
      else if (k.startsWith('on') && typeof props[k] === 'function') n.addEventListener(k.slice(2), props[k]);
      else if (k === 'dataset') Object.assign(n.dataset, props[k]);
      else if (props[k] != null) n.setAttribute(k, props[k]);
    }
    kids.flat().forEach(c => { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }

  /* ---------- progress state (localStorage) ---------- */
  const SKEY = 'kw-ch-' + (C.id || ('a1-' + C.number));
  let state = { done: {}, learned: {}, saved: {}, quizScore: null };
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(SKEY) || '{}')); } catch (e) {}
  function save() { try { localStorage.setItem(SKEY, JSON.stringify(state)); } catch (e) {} }

  const completable = C.sections.filter(s => !s.auto).map(s => s.id); // 8 sections incl. quiz
  const PER_SECTION_XP = 15;     // 7 non-quiz sections × 15 = 105
  const QUIZ_MAX_XP = C.xp - PER_SECTION_XP * (completable.length - 1); // remainder → quiz

  function earnedXP() {
    let xp = 0;
    completable.forEach(id => {
      if (id === 'quiz') {
        if (state.quizScore != null) xp += Math.round((state.quizScore / C.quiz.length) * QUIZ_MAX_XP);
      } else if (state.done[id]) xp += PER_SECTION_XP;
    });
    return Math.min(xp, C.xp);
  }
  function completedCount() { return completable.filter(id => state.done[id]).length; }
  function progressPct() { return Math.round((completedCount() / completable.length) * 100); }

  /* ---------- vocab term builder (defensive: never duplicate the article) --
   * Handles Pattern A (art:'der', de:'Tisch') and Pattern B (art:'der',
   * de:'der Tisch') identically, producing "der Tisch" either way. Safe
   * against null/undefined art or de and extra/irregular whitespace. Used
   * everywhere a vocab lookup/display term is assembled from {art, de} so
   * audio lookup, saved-words, and the headword index never diverge. */
  function vocabTerm(art, de) {
    const a = String(art == null ? '' : art).trim();
    const d = String(de == null ? '' : de).trim().replace(/\s+/g, ' ');
    if (!a) return d;
    const esc = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const dupRe = new RegExp('^' + esc + '\\s+', 'i');
    return dupRe.test(d) ? d : (a + ' ' + d);
  }

  /* ---------- audio (speechSynthesis, clear German voice) ---------- */
  const Audio = (function () {
    let voice = null;
    function pick() {
      if (!('speechSynthesis' in window)) return;
      const all = speechSynthesis.getVoices().filter(v => (v.lang || '').toLowerCase().startsWith('de'));
      const pref = ['conrad', 'markus', 'killian', 'florian', 'petra', 'katja', 'anna', 'helena', 'google'];
      for (const name of pref) { const m = all.find(v => (v.name || '').toLowerCase().includes(name)); if (m) { voice = m; return; } }
      voice = all[0] || null;
    }
    if ('speechSynthesis' in window) { pick(); speechSynthesis.onvoiceschanged = pick; }
    function speakTTS(text, rate, onend) {
      if (!('speechSynthesis' in window)) { onend && onend(); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE'; u.rate = rate; u.pitch = 1.0;
      if (voice) u.voice = voice;
      if (onend) u.onend = onend;
      speechSynthesis.speak(u);
    }
    function speak(text, rate = 1, onend) {
      // Unified engine for ALL rates: KW_speak plays the static/CDN MP3 and
      // applies playbackRate for Slow/Very-slow. Only when no audio exists at
      // any layer does it fall back to browser TTS — so a click is never silent
      // AND legacy callers (grammar/reading/conjugation/comparison/speed-menu)
      // all play the real recording instead of dead TTS.
      var fn = window.KW_speak;
      if (fn) {
        var ended = false;
        var fin = function () { if (ended) return; ended = true; onend && onend(); };
        fn(text, { rate: rate, onEnded: fin }).then(function (src) {
          if (src === 'error') speakTTS(text, rate, onend);
        });
        return;
      }
      speakTTS(text, rate, onend);
    }
    function stop() { stopped = true; endSequence(false); if (window.KW_stopAudio) window.KW_stopAudio(); if ('speechSynthesis' in window) speechSynthesis.cancel(); }
    let stopped = false;

    /* Active-sequence bookkeeping ----------------------------------------
       A passage plays sentence by sentence, so the player's UI state hangs on
       a chain of onEnded callbacks that can be cut from OUTSIDE: the engine is
       a single-owner channel, and a word popup (or any other audio button)
       pauses our clip — `ended` then never fires and the chain dies silently,
       leaving the Listening player stuck on the pause icon. Track the running
       sequence so both an explicit stop and a foreign request end it cleanly. */
    let seq = null, ownRequest = false;
    function endSequence(completed) { const s = seq; seq = null; if (s) { stopped = true; s.done(completed === true); } }
    if (window.KW_onAudioEvent) {
      window.KW_onAudioEvent(function (ev) {
        if (!ev || (ev.type !== 'request' && ev.type !== 'stop')) return;
        if (ev.type === 'stop') { if (seq) endSequence(false); return; }
        if (ownRequest) return;              // our own next sentence
        if (seq) endSequence(false);         // someone else took the channel
      });
    }

    // Speak a long passage reliably: split into sentences and play them in
    // sequence. Each sentence prefers its static MP3, else a SHORT TTS call —
    // which sidesteps Chrome's silent-failure bug on long utterances.
    function speakSequence(text, rate, onProgress, onDone) {
      endSequence(false);
      stopped = false;
      const clean = Array.isArray(text)
        ? text.map(s => String(s || '').trim()).filter(Boolean)
        : (String(text).match(/[^.!?]+[.!?]*/g) || [text]).map(s => s.trim()).filter(Boolean);
      let i = 0, finished = false;
      const mine = { done: function (completed) { if (finished) return; finished = true; onDone && onDone(completed !== false); } };
      seq = mine;
      function next() {
        if (stopped || seq !== mine || i >= clean.length) { if (seq === mine) { seq = null; mine.done(true); } return; }
        const sentence = clean[i++];
        if (onProgress) onProgress(i / clean.length);
        let advanced = false;
        // The engine emits its `request` event synchronously inside speak(), so
        // this flag marks our own sentence and cannot leak.
        ownRequest = true;
        speak(sentence, rate, function () { if (advanced || seq !== mine) return; advanced = true; next(); });
        ownRequest = false;
      }
      next();
    }

    return { speak, stop, speakSequence };
  })();

  /* ---------- Audio coverage gate ---------------------------------------
     has(text): does a static MP3 exist for this string?
     gate(btn, text): if NOT, disable the button + tooltip "Audio not
     generated yet." so a non-playable button is never shown as playable. */
  Audio.has = function (text) {
    // With the unified engine, audio is "available" if ANY layer can produce it
    // (manifest / cache / hosted TTS / browser TTS) — not just the manifest.
    if (window.KW_audioState) return window.KW_audioState(String(text || '')) !== 'none';
    return !!(window.audioUrl && text && window.audioUrl(String(text)));
  };
  Audio.gate = function (btn, text) {
    btn.setAttribute('data-audio-text', String(text || ''));
    applyGate(btn, text);
    return btn;
  };
  function applyGate(btn, text) {
    if (Audio.has(text)) {
      btn.classList.remove('audio-missing');
      btn.removeAttribute('disabled');
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('title');
      return;
    }
    // Only truly unproducible audio (no manifest, no cache, no endpoint, no
    // browser voice) is disabled — requirement #12 (never silent) + #13.
    btn.classList.add('audio-missing');
    btn.setAttribute('disabled', '');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('title', 'Audio unavailable on this device.');
    btn.onclick = function (e) { e && e.preventDefault && e.preventDefault(); e && e.stopPropagation && e.stopPropagation(); };
  }
  // Re-gate every audio button once the (async) manifest has loaded — otherwise
  // buttons rendered before load would all show as missing.
  (function reGateWhenReady() {
    var tries = 0;
    var iv = setInterval(function () {
      var ready = window.KW_audioReady && window.KW_audioReady();
      if (ready || ++tries > 40) {
        clearInterval(iv);
        document.querySelectorAll('[data-audio-text]').forEach(function (b) {
          applyGate(b, b.getAttribute('data-audio-text'));
        });
      }
    }, 150);
  })();

  /* ---------- toast ---------- */
  let toastEl, toastTimer;
  function toast(msg, xp) {
    if (!toastEl) { toastEl = el('div', { class: 'toast' }); document.body.appendChild(toastEl); }
    toastEl.innerHTML = '';
    toastEl.appendChild(document.createTextNode(msg));
    if (xp) toastEl.appendChild(el('span', { class: 'toast-xp' }, '+' + xp + ' XP'));
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2400);
  }

  const ICON = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 5V4L8 9H4z"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/></svg>'
  };

  /* ============================================================
     STORY SLIDES — render dynamic content from data
  ============================================================ */
  function renderStory() {
    // Slide 1 meta
    const meta = $('#slide-meta');
    if (meta) {
      const items = [
        { label: 'Reward', val: C.xp + ' XP', color: 'var(--coral)' },
        { label: 'Time', val: C.time + ' min', color: 'var(--g-time)' },
        { label: 'Level', val: C.difficulty, color: 'var(--g-object)' }
      ];
      items.forEach(it => meta.appendChild(
        el('div', { class: 'meta-pill' },
          el('span', { class: 'meta-dot', style: 'background:' + it.color }),
          el('span', { class: 'meta-label' }, it.label),
          document.createTextNode(' ' + it.val))
      ));
    }
    // Slide 3 outcomes
    const ol = $('#slide-outcomes');
    if (ol) C.outcomes.forEach(o => ol.appendChild(
      el('div', { class: 'outcome-item', dataset: { fade: '' } },
        el('div', { class: 'outcome-check', html: ICON.check }),
        el('div', { class: 'outcome-text', html: '<span class="de r-subject">' + o.de + '</span> — ' + o.text }))
    ));
    // Slide 4 vocab preview (first 6)
    const vp = $('#slide-vocab');
    if (vp) C.vocab.slice(0, 6).forEach(w => vp.appendChild(
      el('div', { class: 'vp-card', dataset: { fade: '' } },
        (() => { const full = vocabTerm(w.art, w.de); const rest = w.art ? full.slice(w.art.trim().length + 1) : full; return el('div', { class: 'vp-de' }, w.art ? el('span', { class: 'vp-article r-article' }, w.art + ' ') : '', rest); })(),
        el('div', { class: 'vp-en' }, w.en),
        el('div', { class: 'vp-hi' }, w.hi))
    ));
  }

  /* ============================================================
     DASHBOARD
  ============================================================ */
  function renderHeader() {
    const phaseEl = $('#dash-phase');
    if (phaseEl) phaseEl.textContent = C.phase + ' · Chapter ' + C.number;
    const titleEl = $('#dash-title');
    if (titleEl) titleEl.innerHTML = '<span class="de">' + C.title + '</span>';
    const subEl = $('#dash-subtitle');
    if (subEl) subEl.textContent = C.description;
    updateRing();
    updateStats();
  }

  function updateRing() {
    const pct = progressPct();
    const ring = $('#progress-ring-fg');
    if (ring) {
      const r = 33, circ = 2 * Math.PI * r;
      ring.setAttribute('stroke-dasharray', circ);
      ring.setAttribute('stroke-dashoffset', circ * (1 - pct / 100));
    }
    const num = $('#progress-ring-num'); if (num) num.textContent = pct + '%';
  }
  function updateStats() {
    $('#stat-xp').textContent = earnedXP() + ' / ' + C.xp;
    $('#stat-done').textContent = completedCount() + ' / ' + completable.length;
    const tb = $('#topbar-xp-val'); if (tb) tb.textContent = earnedXP() + ' XP';
    const status = $('#stat-status');
    if (status) status.textContent = completedCount() === completable.length ? 'Complete' : 'In progress';
  }

  /* ---------- sticky nav (generated from sections) ---------- */
  function renderNav() {
    const nav = $('#dash-nav-inner');
    C.sections.forEach((s, i) => {
      const item = el('a', { class: 'dash-nav-item', href: '#sec-' + s.id, dataset: { sec: s.id } },
        el('span', { class: 'nav-tick', html: state.done[s.id] ? ICON.check : '' }),
        s.label);
      if (state.done[s.id]) item.classList.add('is-done');
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const t = $('#sec-' + s.id);
        if (!t) return;
        const y = t.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
      nav.appendChild(item);
    });
  }

  function refreshNavTicks() {
    $$('.dash-nav-item').forEach(item => {
      const id = item.dataset.sec;
      const done = !!state.done[id];
      item.classList.toggle('is-done', done);
      item.querySelector('.nav-tick').innerHTML = done ? ICON.check : '';
    });
  }

  /* ---------- section shell ---------- */
  const TAG_LABEL = { core: 'Core', practice: 'Practice', assess: 'Assessment' };
  function sectionShell(s, idx, bodyNode) {
    const head = el('div', { class: 'section-head' },
      el('div', { class: 'section-head-left' },
        el('div', { class: 'section-kicker' },
          el('span', { class: 'sk-num' }, String(idx).padStart(2, '0')),
          el('span', { class: 'sk-tag tag-' + s.tag }, TAG_LABEL[s.tag])),
        el('h2', { class: 'section-title' }, s.label),
        el('p', { class: 'section-objective' }, s.objective)),
      s.auto ? null : completeToggle(s)
    );
    return el('section', { class: 'dash-section', id: 'sec-' + s.id, dataset: { sec: s.id } }, head, bodyNode);
  }

  function completeToggle(s) {
    const btn = el('button', { class: 'section-complete' + (state.done[s.id] ? ' is-done' : ''), type: 'button' },
      el('span', { class: 'cc-box', html: state.done[s.id] ? ICON.check : '' }),
      el('span', { class: 'cc-label' }, state.done[s.id] ? 'Completed' : 'Mark complete'));
    btn.addEventListener('click', () => setDone(s.id, !state.done[s.id], btn));
    return btn;
  }

  function setDone(id, val, btn) {
    const was = !!state.done[id];
    if (val) state.done[id] = true; else delete state.done[id];
    save();
    if (btn) {
      btn.classList.toggle('is-done', val);
      btn.querySelector('.cc-box').innerHTML = val ? ICON.check : '';
      btn.querySelector('.cc-label').textContent = val ? 'Completed' : 'Mark complete';
    }
    refreshNavTicks(); updateRing(); updateStats(); renderSummary();
    if (val && !was) toast(labelFor(id) + ' complete', PER_SECTION_XP);
  }
  function labelFor(id) { const s = C.sections.find(x => x.id === id); return s ? s.label : id; }

  /* ============================================================
     SECTION BODIES
  ============================================================ */

  // ---- Overview ----
  function bodyOverview() {
    const wrap = el('div', { class: 'card-grid' });
    const intro = C.overviewIntro || {};
    const goal = el('div', { class: 'card', style: 'background:var(--bg-warm);border-color:#f0deb8' },
      el('div', { class: 'eyebrow', style: 'margin-bottom:10px' }, intro.eyebrow || 'The one idea'),
      el('p', { class: 'lede', style: 'color:var(--ink-primary);font-size:19px', html: intro.html || '' }));
    wrap.append(goal);
    return wrap;
  }

  /* ============================================================
     STORY AUTO-TOKENIZER — turns a plain `de:` line into role-coloured,
     clickable word spans so every chapter (not just hand-tokenised ones)
     gets grammar colours + word popups. Roles come from an A1 function-
     word lexicon first, then the chapter vocab index, then neutral.
     ============================================================ */
  // [role, en, hi, pron, type] — lowercase keys.
  const STORY_LEX = (() => {
    const L = {};
    const put = (words, role, en, hi, pron, type) => String(words).split(' ').forEach(w => { L[w] = { role, en, hi, pron, type }; });
    // Pronouns — nominative (subject)
    put('ich', 'r-subject', 'I', 'मैं', 'ikh', 'Pronoun · subject');
    put('du', 'r-subject', 'you (informal)', 'तुम', 'doo', 'Pronoun · subject');
    put('er', 'r-subject', 'he', 'वह', 'air', 'Pronoun · subject');
    put('sie', 'r-subject', 'she / they', 'वह / वे', 'zee', 'Pronoun · subject');
    put('es', 'r-subject', 'it', 'यह', 'es', 'Pronoun · subject');
    put('wir', 'r-subject', 'we', 'हम', 'veer', 'Pronoun · subject');
    put('ihr', 'r-subject', 'you (plural)', 'तुम सब', 'eer', 'Pronoun · subject');
    put('man', 'r-subject', 'one / you', 'कोई', 'mahn', 'Pronoun · impersonal');
    put('wer', 'r-question', 'who', 'कौन', 'vair', 'Question word');
    // Pronouns — accusative
    put('mich', 'r-akkusativ', 'me', 'मुझे', 'mikh', 'Pronoun · accusative');
    put('dich', 'r-akkusativ', 'you', 'तुम्हें', 'dikh', 'Pronoun · accusative');
    put('ihn', 'r-akkusativ', 'him', 'उसे', 'een', 'Pronoun · accusative');
    put('uns', 'r-akkusativ', 'us', 'हमें', 'uns', 'Pronoun · accusative');
    put('euch', 'r-akkusativ', 'you (pl.)', 'तुम सबको', 'oykh', 'Pronoun · accusative');
    // Pronouns — dative
    put('mir', 'r-dativ', '(to) me', 'मुझे', 'meer', 'Pronoun · dative');
    put('dir', 'r-dativ', '(to) you', 'तुम्हें', 'deer', 'Pronoun · dative');
    // Possessives → article colour
    put('mein meine meinen meiner meinem', 'r-article', 'my', 'मेरा', 'mine', 'Possessive');
    put('dein deine deinen deiner deinem', 'r-article', 'your', 'तुम्हारा', 'dine', 'Possessive');
    put('sein seine ihr ihre unser unsere', 'r-article', 'his / her / our', 'उसका / हमारा', '—', 'Possessive');
    // Articles (definite + indefinite)
    put('der die das den dem des', 'r-article', 'the', 'वह', 'dair', 'Definite article');
    put('ein eine einen einem einer eines', 'r-article', 'a / an', 'एक', 'ine', 'Indefinite article');
    // Negation
    put('nicht', 'r-negation', 'not', 'नहीं', 'nikht', 'Negation');
    put('kein keine keinen keinem keiner', 'r-negation', 'no / none', 'कोई नहीं', 'kine', 'Negation');
    put('nein', 'r-negation', 'no', 'नहीं', 'nine', 'Answer · no');
    // Question words
    put('was', 'r-question', 'what', 'क्या', 'vas', 'Question word');
    put('wie', 'r-question', 'how / what', 'कैसे', 'vee', 'Question word');
    put('wo', 'r-question', 'where', 'कहाँ', 'voh', 'Question word');
    put('woher', 'r-question', 'where from', 'कहाँ से', 'vo-HAIR', 'Question word');
    put('wohin', 'r-question', 'where to', 'कहाँ को', 'vo-HIN', 'Question word');
    put('wann', 'r-question', 'when', 'कब', 'van', 'Question word');
    put('warum', 'r-question', 'why', 'क्यों', 'va-RUM', 'Question word');
    put('welche welcher welches', 'r-question', 'which', 'कौन सा', 'VEL-khe', 'Question word');
    // Prepositions
    put('in', 'r-preposition', 'in', 'में', 'in', 'Preposition');
    put('aus', 'r-preposition', 'from / out of', 'से', 'ows', 'Preposition');
    put('mit', 'r-preposition', 'with', 'के साथ', 'mit', 'Preposition');
    put('für', 'r-preposition', 'for', 'के लिए', 'für', 'Preposition');
    put('ohne', 'r-preposition', 'without', 'के बिना', 'OH-nuh', 'Preposition');
    put('zu zum zur', 'r-preposition', 'to / for', 'को', 'tsoo', 'Preposition');
    put('bei', 'r-preposition', 'at / with', 'के पास', 'by', 'Preposition');
    put('auf', 'r-preposition', 'on', 'पर', 'owf', 'Preposition');
    put('an am', 'r-preposition', 'at / on', 'पर', 'an', 'Preposition');
    put('von vom', 'r-preposition', 'of / from', 'का / से', 'fon', 'Preposition');
    put('nach', 'r-preposition', 'after / to', 'के बाद', 'nahkh', 'Preposition');
    put('über', 'r-preposition', 'about / over', 'के बारे में', 'Ü-ber', 'Preposition');
    // Verbs — sein / haben
    put('bin bist ist sind seid', 'r-verb', 'to be (form)', 'होना', 'ist', 'Verb · sein');
    put('habe hast hat habt haben', 'r-verb', 'to have (form)', 'होना (पास)', 'hat', 'Verb · haben');
    // Verbs — common A1 (forms)
    put('heiße heißt heißen', 'r-verb', 'to be called', 'नाम होना', 'HY-suh', 'Verb · heißen');
    put('komme kommst kommt kommen', 'r-verb', 'to come', 'आना', 'KOM-uh', 'Verb · kommen');
    put('wohne wohnst wohnt wohnen', 'r-verb', 'to live', 'रहना', 'VOH-nuh', 'Verb · wohnen');
    put('lerne lernst lernt lernen', 'r-verb', 'to learn', 'सीखना', 'LAIR-nuh', 'Verb · lernen');
    put('spreche sprichst spricht sprecht sprechen sprich', 'r-verb', 'to speak', 'बोलना', 'SHPRE-khuh', 'Verb · sprechen');
    put('übe übst übt üben', 'r-verb', 'to practise', 'अभ्यास करना', 'Ü-buh', 'Verb · üben');
    put('sage sagt sagen sag', 'r-verb', 'to say', 'कहना', 'ZAH-guh', 'Verb · sagen');
    put('mache machst macht machen', 'r-verb', 'to do / make', 'करना', 'MA-khuh', 'Verb · machen');
    put('gehe gehst geht gehen', 'r-verb', 'to go', 'जाना', 'GAY-uh', 'Verb · gehen');
    put('zähle zählst zählt zählen', 'r-verb', 'to count', 'गिनना', 'TSAY-luh', 'Verb · zählen');
    put('schreibe schreibst schreibt schreiben', 'r-verb', 'to write', 'लिखना', 'SHRY-buh', 'Verb · schreiben');
    put('buchstabiere buchstabiert buchstabieren', 'r-verb', 'to spell', 'वर्तनी बोलना', 'bookh-shta-BEE-ruh', 'Verb · buchstabieren');
    put('esse isst esst essen', 'r-verb', 'to eat', 'खाना', 'E-suh', 'Verb · essen');
    put('trinke trinkst trinkt trinken', 'r-verb', 'to drink', 'पीना', 'TRIN-kuh', 'Verb · trinken');
    put('möchte möchtest möchtet möchten', 'r-modalverb', 'would like', 'चाहना', 'MÖKH-tuh', 'Verb · möchten');
    put('mag magst mögt mögen', 'r-verb', 'to like', 'पसंद करना', 'mahk', 'Verb · mögen');
    put('finde findest findet finden', 'r-verb', 'to find', 'लगना', 'FIN-duh', 'Verb · finden');
    put('suche suchst sucht suchen', 'r-verb', 'to look for', 'खोजना', 'ZOO-khuh', 'Verb · suchen');
    put('kaufe kaufst kauft kaufen', 'r-verb', 'to buy', 'खरीदना', 'KOW-fuh', 'Verb · kaufen');
    put('brauche brauchst braucht brauchen', 'r-verb', 'to need', 'ज़रूरत होना', 'BROW-khuh', 'Verb · brauchen');
    put('kostet kosten', 'r-verb', 'to cost', 'दाम होना', 'KOS-tet', 'Verb · kosten');
    put('beginnt beginnen beginne', 'r-verb', 'to begin', 'शुरू होना', 'be-GINT', 'Verb · beginnen');
    put('arbeite arbeitest arbeitet arbeiten', 'r-verb', 'to work', 'काम करना', 'AR-by-tuh', 'Verb · arbeiten');
    put('verstehe verstehst versteht verstehen', 'r-verb', 'to understand', 'समझना', 'fair-SHTAY-uh', 'Verb · verstehen');
    put('schmeckt schmecken', 'r-verb', 'to taste', 'स्वाद होना', 'SHMEKT', 'Verb · schmecken');
    put('probiere probierst probiert probieren', 'r-verb', 'to try', 'चखना', 'pro-BEE-ruh', 'Verb · probieren');
    put('lese liest lest lesen', 'r-verb', 'to read', 'पढ़ना', 'LAY-zuh', 'Verb · lesen');
    // Modal verbs
    put('muss musst müsst müssen', 'r-modalverb', 'must / have to', 'चाहिए', 'mus', 'Modal · müssen');
    put('kann kannst könnt können', 'r-modalverb', 'can / be able', 'सकना', 'kan', 'Modal · können');
    // Adverbs / connectors
    put('auch', 'r-adverb', 'also / too', 'भी', 'owkh', 'Adverb');
    put('sehr', 'r-adverb', 'very', 'बहुत', 'zair', 'Adverb');
    put('hier', 'r-place', 'here', 'यहाँ', 'heer', 'Adverb · place');
    put('da dort', 'r-place', 'there', 'वहाँ', 'dah', 'Adverb · place');
    put('jetzt', 'r-time', 'now', 'अभी', 'yetst', 'Adverb · time');
    put('heute', 'r-time', 'today', 'आज', 'HOY-tuh', 'Adverb · time');
    put('später', 'r-time', 'later', 'बाद में', 'SHPAY-ter', 'Adverb · time');
    put('früh', 'r-time', 'early', 'जल्दी', 'frü', 'Adverb · time');
    put('immer', 'r-adverb', 'always', 'हमेशा', 'IM-er', 'Adverb');
    put('genau', 'r-adverb', 'exactly', 'बिल्कुल', 'ge-NOW', 'Adverb');
    put('gern gerne', 'r-adverb', 'gladly', 'खुशी से', 'GAIRN', 'Adverb');
    put('ja', 'r-subject', 'yes', 'हाँ', 'yah', 'Answer · yes');
    put('bitte', 'r-adverb', 'please', 'कृपया', 'BI-tuh', 'Politeness');
    put('danke', 'r-adverb', 'thanks', 'धन्यवाद', 'DAN-kuh', 'Politeness');
    // Coordinating / two-part / subordinating connectors (A2–B1) — shared
    // across every chapter so table cells, grammar examples, exercises and
    // popups colour correctly even outside hand-tokenized dialogue lines.
    put('und', 'r-connector', 'and', 'और', 'unt', 'Conjunction');
    put('oder', 'r-connector', 'or', 'या', 'OH-der', 'Conjunction');
    put('aber', 'r-connector', 'but', 'लेकिन', 'AH-ber', 'Conjunction');
    put('sondern', 'r-connector', 'but rather', 'बल्कि', 'ZON-dern', 'Conjunction');
    put('denn', 'r-connector', 'because', 'क्योंकि', 'den', 'Conjunction');
    put('weil', 'r-connector', 'because', 'क्योंकि', 'vile', 'Conjunction · subordinating');
    put('da', 'r-connector', 'since / as', 'चूँकि', 'dah', 'Conjunction · subordinating');
    put('obwohl', 'r-connector', 'although', 'हालांकि', 'op-VOHL', 'Conjunction · subordinating');
    put('deshalb', 'r-connector', 'therefore', 'इसलिए', 'des-HALP', 'Conjunction · result');
    put('damit', 'r-connector', 'so that', 'ताकि', 'da-MIT', 'Conjunction · purpose');
    put('dass', 'r-connector', 'that', 'कि', 'das', 'Conjunction · subordinating');
    put('wenn', 'r-connector', 'if / when', 'अगर / जब', 'ven', 'Conjunction · subordinating');
    put('als', 'r-connector', 'when (past)', 'जब', 'als', 'Conjunction · subordinating');
    put('bevor', 'r-connector', 'before', 'पहले', 'be-FOR', 'Conjunction · subordinating');
    put('nachdem', 'r-connector', 'after', 'बाद में', 'nahkh-DEM', 'Conjunction · subordinating');
    put('während', 'r-connector', 'while / during', 'के दौरान', 'VAY-rent', 'Conjunction · subordinating');
    put('entweder', 'r-connector', 'either', 'या तो', 'ent-VAY-der', 'Conjunction · two-part');
    put('sowohl', 'r-connector', 'both', 'दोनों', 'zo-VOL', 'Conjunction · two-part');
    put('weder', 'r-connector', 'neither', 'न तो', 'VAY-der', 'Conjunction · two-part');
    put('noch', 'r-connector', 'nor', 'न ही', 'nokh', 'Conjunction · two-part');
    put('zwar', 'r-connector', 'admittedly', 'हालांकि', 'tsvar', 'Conjunction · two-part');
    put('trotzdem', 'r-connector', 'nevertheless', 'फिर भी', 'TROTS-dem', 'Conjunction');
    put('nur', 'r-adverb', 'only', 'सिर्फ़', 'noor', 'Adverb');
    put('doch', 'r-adverb', 'still / after all', 'फिर भी', 'dokh', 'Particle');
    return L;
  })();
  // Word class → baseline colour role. `conjunction`, `interjection` and
  // `particle` were missing, so every dictionary Conjunction (`also`, `ob`,
  // `falls`, `jedoch`, `sowie`) fell past this map into guessRole, whose
  // catch-all is r-adverb — 216 findings in the first sweep from that gap alone.
  const POS_ROLE = { noun: 'r-object', verb: 'r-verb', adjective: 'r-adjective', adverb: 'r-adverb', preposition: 'r-preposition', pronoun: 'r-subject', article: 'r-article', number: 'r-object', conjunction: 'r-conjunction', interjection: 'r-adverb', particle: 'r-adverb', name: 'r-name', letter: 'r-letter' };
  // storyNorm matches the lexicon build: lowercase, strip ALL apostrophes/hyphens,
  // strip surrounding punctuation, keep umlauts/ß. (e.g. geht's→gehts, W-Frage→wfrage)
  function storyNorm(w) { return normWord(w).replace(/['’\-]/g, ''); }
  // Roles that classify the TOKEN ITSELF rather than its job in one sentence,
  // and are therefore safe to carry from an authored occurrence to another
  // occurrence of the same surface. 'letter' covers letters, digraphs and
  // sound-spellings (type Letter / Sound): they are metalinguistic citations
  // with no syntactic function at all, so the reading cannot change with
  // position. EVERY other role in the frozen vocabulary — subject, object,
  // time, place, akkusativ, dativ … — describes what the word DOES in one
  // particular sentence. Those are occurrence-bound: inheriting them by
  // surface is exactly the sentence-position guessing the architecture
  // forbids (it made citation-form 'Eis' inherit subject-blue from the
  // example sentence "Das Eis ist kalt."). Add a role here only when it is a
  // property of the word type, never of the sentence.
  const SURFACE_STABLE_ROLES = new Set(['letter']);
  // Chapter-authored occurrence tokens carry explicit role metadata
  // (e.g. { w:'ts', role:'r-letter', type:'Sound' }). Renderers that hold the
  // token pass that role through directly, but every SURFACE-ONLY lookup
  // (auto-linkify sweeps, popups reached by surface) skipped authored data
  // entirely and fell through to the morphological guess — so an authored
  // Letter/Sound was painted r-adverb (lowercase 'z', 'ts', the ending '-e')
  // or r-object (capitalised 'Z', 'W', 'V'), fabricating a grammatical role
  // for something that has none.
  //
  // Built by walking the chapter data generically (any authored { w, role }
  // token — story, listening, reading, vocab examples), so no section is
  // hardcoded and new authored surfaces are picked up for free.
  //
  // Unanimity gate: a surface is indexed ONLY if every authored occurrence in
  // the chapter agrees. If the chapter itself uses one surface two ways there
  // is no unambiguous answer from the surface alone, so the engine abstains
  // and falls through rather than guessing — Unknown > Guess.
  let _authoredRoleIdx = null;
  function AUTHORED_STABLE_ROLE(surface) {
    if (!_authoredRoleIdx) {
      const idx = Object.create(null), conflict = Object.create(null), seen = new Set();
      (function walk(node, depth) {
        if (!node || depth > 10 || typeof node !== 'object' || seen.has(node)) return;
        seen.add(node);
        if (Array.isArray(node)) { node.forEach(n => walk(n, depth + 1)); return; }
        if (typeof node.w === 'string' && !node.plain && node.role) {
          const role = normalizeRole(node.role) || '';
          const k = storyNorm(node.w);
          if (k && SURFACE_STABLE_ROLES.has(role.replace('r-', '')) && !conflict[k]) {
            if (!(k in idx)) idx[k] = role;
            else if (idx[k] !== role) { conflict[k] = true; delete idx[k]; }
          }
        }
        Object.keys(node).forEach(key => walk(node[key], depth + 1));
      })(C, 0);
      _authoredRoleIdx = idx;
    }
    return _authoredRoleIdx[storyNorm(surface)] || '';
  }
  // R2 — GLOBAL-LEXICON POS TIER.
  //
  // The dictionary records an authoritative word class in `type` ("Verb",
  // "Conjunction", "Adverb", …). It was never consulted for colour: the coarse
  // built-in STORY_LEX role won whenever it existed, and STORY_LEX carries stale
  // or wrong class roles — `wird` as adverb, `noch` as conjunction, `also`/`ob`
  // as adverb. Everything else fell through to guessRole, whose catch-all is
  // r-adverb. That single gap produced ~5,000 findings across ~250 chapters in
  // the first full sweep, all of the form "Badge Verb + adverb-cyan".
  //
  // The distinction that makes this safe: STORY_LEX also supplies genuinely
  // valuable SEMANTIC roles for function words — hier→place, nichts→negation,
  // mich→akkusativ, wann→question. Those are occurrence-level refinements and
  // must keep winning. Only a CLASS role may be corrected by the dictionary,
  // because class is exactly what the dictionary is authoritative about.
  //
  // Priority: authored occurrence role → authored chapter data → semantic
  // refinement → Global-Lexicon POS baseline → legacy class role → guessRole.
  const SEMANTIC_ROLES = new Set(['subject', 'object', 'akkusativ', 'dativ', 'genitiv',
    'time', 'place', 'rhema', 'negation', 'question', 'connector', 'temporal', 'contrast',
    'addition', 'purpose', 'possessive', 'reflexiv-akk', 'reflexiv-dat', 'comparative',
    'superlative', 'modalverb', 'auxiliary', 'futur', 'plusq', 'name', 'letter', 'nnoun']);
  function isSemanticRole(role) {
    return !!role && SEMANTIC_ROLES.has(String(role).replace('r-', ''));
  }
  // POS baseline from a dictionary type string. Uses wordClassOf so compound
  // labels ("Noun · masc.", "Verb (separable)") resolve to their head class.
  function posRoleFromType(type) {
    const c = wordClassOf(type);
    return (c && POS_ROLE[c]) || '';
  }
  // Resolves the colour role for a dictionary hit, honouring the tier order.
  // `surface` is required because lookupWord() only returns entries this chapter
  // knows about — most function words (noch, also, ob, sei) are absent from
  // chapter vocab, so without a direct Global-Lexicon consultation the tier
  // never sees a type and the stale STORY_LEX class role survives.
  function roleFromLexicons(voc, lex, surface) {
    // CHAPTER-LOCAL LEXICAL CLASS > GLOBAL SEMANTIC ROLE (when they conflict).
    //
    // Chapter vocab entries declare their class as `pos` ("conjunction") while
    // dictionary entries use `type`. posRoleFromType() only ever read `type`, so
    // a chapter's own declaration was invisible here and the global story
    // lexicon's semantic role won by default. In a2-9 "Vergleiche mit als/wie"
    // the chapter teaches `wie` as the equality conjunction and says so
    // (`pos: 'conjunction'`), but KW_STORY_LEX's `r-question` — the interrogative
    // sense — painted all 87 occurrences question-pink under a Conjunction badge.
    //
    // Override only on a genuine CLASS conflict: both sides must declare a class
    // and the classes must differ. Where they agree, or where the chapter has no
    // vocab entry for the surface, the global semantic role keeps its authority
    // (hier→place, nichts→negation, mich→akkusativ are untouched). Nothing is
    // flattened globally — a chapter that teaches the interrogative sense states
    // that class and gets r-question.
    const vocClass = voc ? wordClassOf(voc.type || voc.pos) : '';
    const vocRole = vocClass ? (POS_ROLE[vocClass] || POS_ROLE_DE[vocClass] || '') : '';
    const lexClass = lex ? wordClassOf(lex.type) : '';
    const lexOverlap = !!(vocClass && lexClass) && (lexClass.indexOf(vocClass) !== -1 || vocClass.indexOf(lexClass) !== -1);
    if (vocRole && lex && isSemanticRole(lex.role) && lexClass && !lexOverlap) return vocRole;
    if (lex && isSemanticRole(lex.role)) return lex.role;      // semantic refinement wins
    let pos = vocRole;
    if (!pos && surface) {
      const g = (window.KW_GLOBAL_LEXICON || {})[normWord(surface)];
      if (g) pos = posRoleFromType(g.type);
    }
    if (pos) return pos;                                        // authoritative POS baseline
    return (lex && lex.role) || '';                             // legacy class role
  }
  function storyTokenFor(surface) {
    const key = normWord(surface);
    if (!key) return null;
    const ext = (window.KW_STORY_LEX || {})[storyNorm(surface)]; // authoritative explicit lexicon
    const voc = lookupWord(surface);                              // chapter vocab → audio/example/why
    // Authored lexical class outranks every INFERRED role below (dictionary
    // POS mapping, built-in lexicon, morphological guess) but never the
    // explicit global lexicon above.
    const stable = AUTHORED_STABLE_ROLE(surface);
    if (ext) {
      // Explicit role + metadata normally win — but a CHAPTER-LOCAL vocab entry is
      // more specific than this cross-curriculum default. When the chapter
      // declares a word class for the surface and the global entry describes a
      // different class, the chapter's class decides the colour (a2-9 teaches
      // `wie` as the equality conjunction; the global entry is the interrogative).
      // Everything else about the global entry is kept.
      const vc = voc ? wordClassOf(voc.type || voc.pos) : '';
      const vr = vc ? (POS_ROLE[vc] || POS_ROLE_DE[vc] || '') : '';
      const ec = wordClassOf(ext.type);
      // Only a GENUINELY DISJOINT class pair is a conflict. Compound labels are
      // common and legitimately cover several classes — `Morgen` is authored
      // `Noun/Adverb · time` globally and `adverb` in the chapter, which agree.
      // Treating overlap as conflict repainted 7 `Morgen` occurrences and broke
      // the A1-9 golden baseline; substring containment either way = no clash.
      const overlap = !!(vc && ec) && (ec.indexOf(vc) !== -1 || vc.indexOf(ec) !== -1);
      const clash = vr && ec && !overlap && isSemanticRole(ext.role);
      return Object.assign({}, voc || {}, ext, { w: surface, role: clash ? vr : ext.role });
    }
    // Fallback path (should not trigger for authored dialogues — lexicon is 100%).
    const lex = STORY_LEX[key];
    if (voc) {
      return Object.assign({}, voc, { w: surface, role: stable || roleFromLexicons(voc, lex, surface) });
    }
    if (lex) return Object.assign({}, lex, { w: surface, role: stable || roleFromLexicons(null, lex, surface) || lex.role });
    const posOnly = roleFromLexicons(null, null, surface);
    return { w: surface, role: stable || posOnly || guessRole(surface), type: 'Word', en: '' };
  }
  // Last-tier morphological heuristic — guarantees every German token gets a
  // grammar role even when absent from all lexicons. Explicit data roles and
  // lexicon hits always take precedence (see roleFor / storyTokenFor).
  // Chapter adjective stems (from C.vocab pos:'adjective') plus a core set
  // of frequent recycled B1/A2 adjectives not necessarily in THIS chapter's
  // vocab — memoized. Used by guessRole to recognize inflected/capitalized
  // adjective forms ("Frische", "Schöne", "Kaltes") before the generic
  // capitalization→noun rule.
  const CORE_ADJ_STEMS = ['frisch','kalt','warm','groß','klein','gut','schön','neu','alt','jung','schnell','langsam','billig','teuer','hoch','tief','lang','kurz','stark','schwach','leicht','schwer','hell','dunkel','laut','ruhig','klar','sauber','glücklich','traurig','müde','krank','gesund','reich','arm','frei','voll','leer','richtig','falsch','wichtig','einfach','schwierig','interessant','langweilig','freundlich','nett','bekannt','berühmt','modern','klassisch','typisch','normal','ganz','gleich','ähnlich','verschieden','lecker','nervös','ehrlich','ander'];
  let _adjStemsCache = null;
  function ADJ_STEMS() {
    if (_adjStemsCache) return _adjStemsCache;
    const chapterStems = (C.vocab || []).filter(v => v.pos === 'adjective').map(v => String(v.de || '').toLowerCase());
    _adjStemsCache = CORE_ADJ_STEMS.concat(chapterStems);
    return _adjStemsCache;
  }
  function guessRole(surface) {
    const w = String(surface || '');
    if (!w) return '';
    const lower = w.toLowerCase();
    // Strong/mixed adjective endings on a word whose STEM matches a known
    // chapter adjective (from C.vocab) win even when capitalized — sentence-
    // initial position capitalizes "Frische", "Talentierte", "Schöne" etc.,
    // which would otherwise be misread as nouns by the capitalization rule
    // below. Checked first so it takes priority.
    if (ADJ_STEMS().some(stem => lower.startsWith(stem) && /^(e|er|es|em|en)$/.test(lower.slice(stem.length)))) return 'r-adjective';
    // Capitalized (incl. genitive names "Annas", "Felix'") → noun.
    if (/^[A-ZÄÖÜ]/.test(w)) return 'r-object';
    // Adjective/adverb derivational endings.
    if (/(lich|ig|isch|bar|sam|los|haft|voll|ell|iv)$/.test(lower)) return 'r-adjective';
    // Ordinals / adjective inflections.
    if (/(er|es|em|ste|ster|stes|sten)$/.test(lower) && lower.length > 4) return 'r-adjective';
    // Verb-like conjugation endings.
    if (/(en|st|te|tet|ten|test|iert|iere|ierst)$/.test(lower) || /[aeiouäöü]t$/.test(lower)) return 'r-verb';
    // Remaining lowercase function words / particles.
    return 'r-adverb';
  }
  // ---- KW shared grammar-colorizer (single source of truth) ----
  // Explicit role in data wins; empty or 'plain' falls back to automatic
  // inference via the shared story lexicon + POS mapping. Every renderer
  // (story, reading, listening, speaking, writing, grammar, vocab, exercises,
  // solutions, popups, dynamic text) must route through this.
  // A handful of A2 chapters authored bespoke German-grammar-term role names
  // (weil/wenn/dass/frage/wechsel/reflexiv/vergleich/superlativ/werden/
  // ortsangabe) that were never wired to a --g-* color or a .r-* CSS rule —
  // both the inline highlight and the popup accent silently broke for every
  // occurrence. Map them onto their closest canonical role so color is
  // consistent everywhere, without touching the authored chapter data.
  const ROLE_ALIAS = {
    weil: 'conjunction', wenn: 'conjunction', dass: 'conjunction',
    frage: 'question', wechsel: 'preposition', reflexiv: 'reflexiv-akk',
    vergleich: 'comparative', superlativ: 'superlative', werden: 'futur',
    ortsangabe: 'place', indem: 'temporal'
  };
  // Full set of roles that actually resolve to a real color (the --g-* vars
  // defined in chapter.css, plus the ink-toned specials). Any role outside
  // this set — whether a one-off discourse label like r-checkpoint/r-topic
  // or a future typo — falls back to plain neutral ink instead of the popup
  // constructing a color-mix() off a custom property that doesn't exist.
  const CANONICAL_ROLES = new Set(['subject','verb','object','time','place','preposition',
    'article','adjective','adverb','negation','akkusativ','dativ','genitiv','question',
    'modalverb','auxiliary','futur','comparative','superlative','nnoun','purpose','prep-rel',
    'plusq','temporal','brauchen','reflexiv-akk','reflexiv-dat','connector','possessive',
    'pronoun','rhema','conjunction','name','letter']);
  function normalizeRole(role) {
    if (!role || role === 'plain') return role;
    const bare = role.replace('r-', '');
    const mapped = ROLE_ALIAS[bare];
    return mapped ? 'r-' + mapped : role;
  }
  // ---- Proper names: word class ≠ semantic role ----
  // `r-name` is an ENTITY/word-class marker (person, surname, title, city,
  // country), not a grammatical role. Frozen rule: a word's COLOUR carries its
  // occurrence's semantic role, its BADGE carries its word class. A name is a
  // proper noun and takes whatever role its occurrence gives it — subject in
  // "Rohan ist hier", akkusativ in "Ich sehe Rohan" — so `r-name` must never be
  // the FINAL colour-bearing role when the occurrence's real role is knowable.
  //
  // Resolution order (authored data only — never inferred from the fact that a
  // word is a name):
  //   1. an explicit authored role on the token           (handled by roleFor)
  //   2. an authored `case:` on the token                 → NAME_CASE_ROLE
  //   3. a role named in the authored `type:` string      (e.g. 'Name · subject')
  //   4. none → stays r-name, which renders in the NEUTRAL ink already used by
  //      the other word-class-ish canonical roles (r-conjunction, r-letter).
  //      That is the honest answer, and it is usually the CORRECT one: most
  //      authored name occurrences are vocatives ("Timo, hast du …", "Hallo
  //      Vera!") or predicate complements ("Hier ist Svenja."), which have no
  //      Spine-5 role at all. What it must never be is --ink-primary black,
  //      which is indistinguishable from ordinary body text.
  const NAME_CASE_ROLE = { nominativ: 'r-subject', akkusativ: 'r-akkusativ', dativ: 'r-dativ', genitiv: 'r-genitiv' };
  const NAME_TYPE_ROLE = [
    [/\bsubjekt|\bsubject|\bnominativ/i, 'r-subject'],
    [/\bakkusativ|\baccusative/i, 'r-akkusativ'],
    [/\bdativ|\bdative/i, 'r-dativ'],
    [/\bgenitiv|\bgenitive/i, 'r-genitiv']
  ];
  function nameOccurrenceRole(src) {
    if (!src) return '';
    const c = String(src.case || '').trim().toLowerCase();
    if (NAME_CASE_ROLE[c]) return NAME_CASE_ROLE[c];
    const ty = String(src.type || '');
    for (let i = 0; i < NAME_TYPE_ROLE.length; i++) {
      if (NAME_TYPE_ROLE[i][0].test(ty)) return NAME_TYPE_ROLE[i][1];
    }
    return '';
  }
  // True when a role classifies the word rather than its sentence function, so
  // a better-informed occurrence role may legitimately replace it.
  function isWordClassRole(role) {
    return role === 'r-name';
  }
  // Authored occurrence tokens are rendered from arrays, not from text nodes, so
  // there is no `text`/`index` to measure position from. But their POSITION IN
  // THE TOKEN ARRAY is exactly equivalent: token 0 opens the sentence, and a
  // token following one that ends in sentence punctuation opens a new one.
  //
  // Without this, `roleFor(t.w, t.role)` was called with `sentenceInitial ===
  // undefined`, which disables isCapitalisedNounHomograph entirely — so on every
  // authored-token path the case-aware protection simply did not run, and
  // capitalised nouns collapsed onto their lowercase verb homographs
  // (`Regeln`→regeln "to regulate", `Unternehmen`→unternehmen "to undertake").
  function tokenSentenceInitial(tokens, i) {
    if (!Array.isArray(tokens) || i <= 0) return true;
    for (let j = i - 1; j >= 0; j--) {
      const w = tokens[j] && tokens[j].w;
      if (!w || !String(w).trim()) continue;
      return SENTENCE_END.test(String(w).trim());
    }
    return true;
  }
  // Word class an authored token explicitly declares, if any.
  //
  // `role: 'plain'` means "no additional SEMANTIC role was authored". It does
  // NOT mean "ignore the authored word class": a token carrying
  // `type: 'Noun · plural'` has declared its class, and the frozen rule is that
  // authored occurrence data outranks lexicon inference. Previously `plain` fell
  // straight through to the resolution chain, so the declaration was discarded
  // and a Global-Lexicon verb homograph painted the occurrence red.
  function authoredClassRole(tk) {
    if (!tk || typeof tk.type !== 'string') return '';
    const c = wordClassOf(tk.type);
    // Chapter data labels word classes in BOTH languages — English ("Noun · fem.")
    // and German ("Präposition · Dat.", "Possessivartikel", "Konjunktion").
    // POS_ROLE is keyed in English only, so German-labelled tokens silently
    // produced no class and fell back to the phrase-level label for colour.
    return (c && (POS_ROLE[c] || POS_ROLE_DE[c])) || '';
  }
  // Colour for an authored occurrence token: explicit semantic role → authored
  // word class → position-aware inference. Used by every authored-token renderer
  // so they cannot drift apart.
  // R10 — PHRASE-LEVEL TEACHING ANNOTATION ≠ GRAMMATICAL ROLE.
  //
  // Some chapters author a role that labels what is being TAUGHT across a fixed
  // expression rather than what one word DOES grammatically: b2-66 marks the
  // whole "Aus meiner Sicht …" / "vertreten die Ansicht" phrases `r-opinion`
  // (and `r-agree` / `r-disagree`), c2-01 marks verbs `r-historisches-praesens`.
  // These are annotations, not Spine-5 roles.
  //
  // Two learner-visible defects followed. `.r-opinion` IS defined in chapter.css
  // as `--accent` teal, so the span took a conversion/action colour as a grammar
  // colour; and because the label is absent from CANONICAL_ROLES the popup
  // headword fell back to ink-black. Same word, two wrong colours.
  //
  // Rule: a non-canonical role is an ANNOTATION. It never supplies colour. The
  // word takes the grammatical role its own authored `type` declares — which
  // these tokens already carry (`Verb (Präsens)`, `Article · Akk.`,
  // `Noun · fem.`, `Präposition · Dat.`, `Possessivartikel`). No new colour, no
  // new canonical role, and the annotation stays in the data untouched.
  const POS_ROLE_DE = { 'nomen': 'r-object', 'substantiv': 'r-object', 'verb': 'r-verb',
    'adjektiv': 'r-adjective', 'adverb': 'r-adverb', 'pr\u00e4position': 'r-preposition',
    'praeposition': 'r-preposition', 'pronomen': 'r-subject', 'artikel': 'r-article',
    'possessivartikel': 'r-article', 'possessivpronomen': 'r-article',
    'konjunktion': 'r-conjunction', 'modalverb': 'r-verb', 'hilfsverb': 'r-verb',
    'partikel': 'r-adverb', 'zahlwort': 'r-object', 'negation': 'r-negation' };
  function isPhraseLevelRole(role) {
    const bare = String(role || '').replace('r-', '');
    return !!bare && bare !== 'plain' && !CANONICAL_ROLES.has(bare);
  }
  function tokenRole(tk, tokens, i) {
    const explicit = normalizeRole(tk && tk.role);
    if (explicit && explicit !== 'plain' && !isPhraseLevelRole(explicit)) return explicit;
    return authoredClassRole(tk) || roleFor(tk.w, tk.role, tokenSentenceInitial(tokens, i));
  }
  function roleFor(surface, explicit, sentenceInitial) {
    explicit = normalizeRole(explicit);
    // A phrase-level teaching label never supplies colour (see isPhraseLevelRole).
    if (explicit && isPhraseLevelRole(explicit)) explicit = '';
    if (explicit && explicit !== 'plain') return explicit;
    // Colour must follow the same case-aware reading as eligibility: a
    // capitalised mid-sentence noun homograph is a NOUN occurrence, so it takes
    // the noun default instead of the lowercase adjective/adverb's colour — the
    // same rule guessRole already applies to any unknown capitalised word.
    if (isCapitalisedNounHomograph(surface, sentenceInitial)) return POS_ROLE.noun;
    // Lowercase surface whose only match is a capitalised noun entry: use the
    // morphological reading instead of the nominalised noun's role.
    if (isLowercaseNounMismatch(surface)) return guessRole(surface);
    const t = storyTokenFor(surface);
    const role = (t && t.role) || guessRole(surface);
    if (isWordClassRole(role)) return nameOccurrenceRole(t) || role;
    return role;
  }
  // Mistake rows are normally real German sentences, so each side is wrapped in
  // `.de` and auto-linkified. Some rows are METALINGUISTIC NOTATION instead —
  // A1-1's sound rules read `ei → "ee"`, where `ei` is a grapheme, not a word.
  // Declaring the row lexical German made `ei` resolve to the noun `Ei`, so a
  // learner studying the *ei* spelling rule was told it means "egg".
  //
  // Optional `wrongTokens` / `rightTokens` let a row author its parts explicitly,
  // mirroring the `exTokens` pattern already used beside example strings in the
  // same data files. Rows without them render exactly as before, so every
  // existing chapter is unaffected.
  //
  // The per-occurrence route is required here rather than a shared lexicon entry:
  // lexicon surfaces normalise to lowercase, and `Ei` (egg) is genuine A1-14
  // vocabulary — a curriculum-wide `ei` key would silently break it.
  function mistakeSide(cls, str, tokens) {
    const host = el('span', { class: cls });
    if (!tokens || !tokens.length) { host.innerHTML = str; return host; }
    tokens.forEach((tk, i) => {
      if (i) host.appendChild(document.createTextNode(' '));
      if (tk.plain) { host.appendChild(document.createTextNode(tk.w)); return; }
      const role = tokenRole(tk, tokens, i);
      const sp = el('span', { class: ('de-link ' + (role || '')).trim() }, tk.w);
      sp.addEventListener('click', ev => { ev.stopPropagation(); navigateToWord(Object.assign({}, tk)); });
      host.appendChild(sp);
    });
    return host;
  }
  // Grammar Breakdown must never fabricate a role (frozen invariant: Unknown
  // > Guess). Returns an explicit/authored/dictionary-derived role only, or
  // '' if none exists — never falls through to guessRole's morphological
  // heuristic. Used exclusively for building X-Ray tokens; word-click
  // coloring (roleFor, above) is a separate legacy concern and keeps its own
  // heuristic fallback untouched.
  function authoredRoleFor(surface, explicit) {
    explicit = normalizeRole(explicit);
    if (explicit && explicit !== 'plain') return explicit;
    const key = normWord(surface);
    if (!key) return '';
    const ext = (window.KW_STORY_LEX || {})[storyNorm(surface)];
    if (ext) return ext.role || '';
    const voc = lookupWord(surface);
    if (voc) return roleFromLexicons(voc, STORY_LEX[key], surface) || '';
    if (STORY_LEX[key]) return roleFromLexicons(null, STORY_LEX[key], surface) || STORY_LEX[key].role || '';
    return roleFromLexicons(null, null, surface) || '';
  }
  window.KW_roleFor = roleFor;
  window.KW_colorizeGerman = function (host, de) { renderStoryLine(host, de); };
  function renderStoryLine(host, de) {
    const re = germanWordRegex();
    let last = 0, m;
    while ((m = re.exec(de))) {
      if (m.index > last) host.append(document.createTextNode(de.slice(last, m.index)));
      const word = m[0];
      const t = storyTokenFor(word);
      const sp = el('span', { class: 'rw de ' + (t.role || '') }, word);
      sp.addEventListener('click', (e) => openWordPop(e, t));
      host.append(sp);
      last = m.index + word.length;
    }
    if (last < de.length) host.append(document.createTextNode(de.slice(last)));
  }

  // ---- Story Dialogue (signature section — before vocab/grammar) ----
  function bodyStory() {
    const S = C.story;
    if (!S) return el('div', { class: 'card' }, 'Story coming soon.');
    const femaleSpeakers = (S.femaleSpeakers || ['Anna', 'Frau Weber', 'Lena', 'Frau Klein']);
    const genderFor = (line) => line.voice || (femaleSpeakers.indexOf(line.speaker) >= 0 ? 'female' : 'male');
    const lineText = (line) => line.tokens ? line.tokens.filter(t => !t.plain).map(t => t.w).join(' ') : (line.de || '');

    const wrap = el('div', { class: 'story-split' });

    // Left — learning explanation
    const left = el('div', { class: 'story-left' });
    left.append(el('div', { class: 'eyebrow' }, S.eyebrow || 'Story-based learning'));
    left.append(el('h2', { class: 'story-headline', html: S.headline || 'Stories that <em>stick.</em>' }));
    if (S.intro) left.append(el('p', { class: 'story-intro' }, S.intro));
    if (S.outcomes && S.outcomes.length) {
      const dots = ['var(--coral)', 'var(--g-subject)', 'var(--g-object)', 'var(--g-verb)'];
      const ul = el('ul', { class: 'story-outcomes' });
      S.outcomes.forEach((o, i) => ul.append(el('li', { class: 'story-outcome' },
        el('span', { class: 'so-dot', style: 'background:' + dots[i % dots.length] }), el('span', {}, o))));
      left.append(ul);
    }

    // Right — interactive conversation
    const right = el('div', { class: 'story-right' });
    if (S.scene) right.append(el('div', { class: 'story-scene de' }, S.scene));
    const thread = el('div', { class: 'story-thread' });
    const cards = [];
    // Auto-balance sides: if every line is on the same side (peer scenes with
    // no teacher), assign each speaker a consistent side so the chat alternates.
    const dlg = S.dialogue || [];
    const distinctSides = new Set(dlg.map(l => (l.side === 'right' ? 'right' : 'left')));
    let sideForLine;
    if (distinctSides.size < 2 && dlg.length) {
      const order = [];
      dlg.forEach(l => { if (order.indexOf(l.speaker) < 0) order.push(l.speaker); });
      sideForLine = (l) => (order.indexOf(l.speaker) % 2 === 0 ? 'left' : 'right');
    } else {
      sideForLine = (l) => (l.side === 'right' ? 'right' : 'left');
    }
    dlg.forEach((line, i) => {
      const card = el('div', { class: 'story-card' + (sideForLine(line) === 'right' ? ' right' : '') , style: '--rise-delay:' + (i * 60) + 'ms' });
      card.style.animationDelay = (i * 60) + 'ms';
      const playBtn = el('button', { class: 'story-play-line', type: 'button', 'aria-label': 'Play line', html: ICON.play });
      const top = el('div', { class: 'story-card-top' },
        el('span', { class: 'story-speaker' }, line.speaker || ''), playBtn);
      const lineEl = el('div', { class: 'story-line' });
      if (line.tokens) {
        let prevNoSpaceAfter = true; // start of line: no leading space
        line.tokens.forEach((t, ti) => {
          const noSpaceBefore = prevNoSpaceAfter || /^[.,!?;:)\]…”"'”]/.test(t.w);
          if (!noSpaceBefore) lineEl.append(document.createTextNode(' '));
          if (t.plain) { lineEl.append(document.createTextNode(t.w)); prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2; return; }
          const sp = el('span', { class: 'rw de ' + tokenRole(t, line.tokens, ti), dataset: { i: 0 } }, t.w);
          sp.addEventListener('click', (e) => openWordPop(e, t, line.tokens));
          lineEl.append(sp);
          prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2;
        });
      } else {
        renderStoryLine(lineEl, line.de || '');   // auto-tokenise: role colours + clickable popups
      }
      // Sentence X-Ray layered on top of Story's existing word-click pipeline
      // (Option 2, per architecture decision): word-click fidelity — explicit
      // per-occurrence token overrides — is fully preserved; only the
      // sentence-background click + Grammar Breakdown/Insight panel is added.
      // LIVE for Story only (Phase 1, see SENTENCE_XRAY_STORY_ENABLED). The
      // other call sites of this feature remain gated by SENTENCE_XRAY_ENABLED.
      if (SENTENCE_XRAY_ENABLED || SENTENCE_XRAY_STORY_ENABLED) {
        const xrayTokens = (line.tokens || []).filter(t => !t.plain).map(t => ({ w: t.w, role: authoredRoleFor(t.w, t.role) }));
        attachSentenceXRay(card, lineEl, xrayTokens, line.sentenceInsight);
      }
      const trans = el('div', { class: 'story-trans' });
      if (line.en) trans.append(el('span', { class: 'st-en' }, line.en));
      if (line.hi) trans.append(el('span', { class: 'st-hi' }, line.hi));
      card.append(top, lineEl, trans);
      playBtn.addEventListener('click', () => playLine(i));
      thread.append(card);
      cards.push({ card, playBtn, text: lineText(line), gender: genderFor(line) });
    });
    right.append(thread);

    // Controls
    let rate = 1, seqPlaying = false, seqStop = false;
    const playAllBtn = el('button', { class: 'story-play-all', type: 'button' }, el('span', { html: ICON.play }), el('span', {}, 'Play conversation'));
    const speed = el('div', { class: 'story-speed' });
    [['1×', 1], ['0.75×', 0.75], ['0.5×', 0.5]].forEach(([lbl, v], i) => {
      const b = el('button', { type: 'button', class: i === 0 ? 'is-active' : '' }, lbl);
      b.addEventListener('click', () => { rate = v; $$('.story-speed button', speed).forEach(x => x.classList.toggle('is-active', x === b)); });
      speed.append(b);
    });
    const transToggle = el('button', { class: 'story-trans-toggle', type: 'button' }, 'Show translation');
    transToggle.addEventListener('click', () => {
      const on = thread.classList.toggle('show-trans');
      transToggle.textContent = on ? 'Hide translation' : 'Show translation';
    });
    const controls = el('div', { class: 'story-controls' }, playAllBtn, speed, transToggle);
    right.append(controls);

    function clearActive() { cards.forEach(c => { c.card.classList.remove('is-active'); c.playBtn.classList.remove('is-playing'); c.playBtn.innerHTML = ICON.play; }); }
    function playLine(i, onDone) {
      const c = cards[i]; if (!c) { onDone && onDone(); return; }
      try { Audio.stop(); } catch (_) {}
      clearActive();
      c.card.classList.add('is-active'); c.playBtn.classList.add('is-playing');
      var fn = window.KW_speak || window.KW_playAudio;
      const done = () => { c.playBtn.classList.remove('is-playing'); c.playBtn.innerHTML = ICON.play; if (!seqPlaying) c.card.classList.remove('is-active'); onDone && onDone(); };
      if (fn) { fn(c.text, { gender: c.gender, rate: rate }).then(function (s) { if (s === 'error') Audio.speak(c.text, rate, done); else done(); }); }
      else { Audio.speak(c.text, rate, done); }
    }
    function playAll() {
      if (seqPlaying) { seqStop = true; seqPlaying = false; try { Audio.stop(); } catch (_) {} clearActive(); playAllBtn.querySelector('span:last-child').textContent = 'Play conversation'; return; }
      seqPlaying = true; seqStop = false; playAllBtn.querySelector('span:last-child').textContent = 'Stop';
      let i = 0;
      const next = () => {
        if (seqStop || i >= cards.length) { seqPlaying = false; seqStop = false; clearActive(); playAllBtn.querySelector('span:last-child').textContent = 'Play conversation'; return; }
        playLine(i++, next);
      };
      next();
    }
    playAllBtn.addEventListener('click', playAll);

    wrap.append(left, right);
    return wrap;
  }

  // ---- Vocabulary ----
  let vocabFilter = 'all', vocabQuery = '';
  // Checkpoint chapters author their vocabulary section as a review quiz
  // (`vocabularyReview`: {q, options, answer, ref}) instead of word cards, so
  // the word-card path below would render an empty grid with a misleading
  // "No words match" message. Route those to the shared MCQ renderer.
  function bodyVocabulary() {
    if (!(C.vocab || []).length && Array.isArray(C.vocabularyReview) && C.vocabularyReview.length) return bodyVocabularyReview();
    const wrap = el('div', {});
    const toolbar = el('div', { class: 'vocab-toolbar' });
    const search = el('div', { class: 'search-box' },
      el('span', { html: ICON.search }),
      el('input', { type: 'text', placeholder: 'Search 12 words…', 'aria-label': 'Search vocabulary' }));
    search.querySelector('input').addEventListener('input', (e) => { vocabQuery = e.target.value.toLowerCase().trim(); drawVocab(); });
    const filters = el('div', { class: 'filter-group' });
    [['all', 'All'], ['m', 'der (m)'], ['f', 'die (f)'], ['n', 'das (n)'], ['learned', 'Learned']].forEach(([k, lbl]) => {
      const chip = el('button', { class: 'filter-chip' + (k === 'all' ? ' is-active' : ''), type: 'button', dataset: { f: k } }, lbl);
      chip.addEventListener('click', () => { vocabFilter = k; $$('.filter-chip', filters).forEach(c => c.classList.toggle('is-active', c === chip)); drawVocab(); });
      filters.appendChild(chip);
    });
    toolbar.append(search, filters);
    const grid = el('div', { class: 'vocab-grid', id: 'vocab-grid' });
    wrap.append(toolbar, grid);
    setTimeout(drawVocab, 0);
    return wrap;
  }

  function drawVocab() {
    const grid = $('#vocab-grid'); if (!grid) return;
    grid.innerHTML = '';
    const list = C.vocab.filter(w => {
      if (vocabFilter === 'learned' && !state.learned[w.de]) return false;
      if (['m', 'f', 'n'].includes(vocabFilter) && w.gender !== vocabFilter) return false;
      if (vocabQuery && !(w.de.toLowerCase().includes(vocabQuery) || w.en.toLowerCase().includes(vocabQuery) || w.hi.includes(vocabQuery))) return false;
      return true;
    });
    if (!list.length) { grid.appendChild(el('div', { class: 'vocab-empty' }, 'No words match. Try another filter.')); return; }
    list.forEach(w => grid.appendChild(vocabCard(w)));
    linkifyDe(grid); // keep example sentences clickable after every re-draw
    linkifyGated(grid);
  }

  // Shared renderer for the checkpoint review arrays (`vocabularyReview`,
  // `grammarReview`): flat {q, options, answer, ref} question lists that have
  // no word-card / grammar-block shape of their own. Routed through the same
  // mcqBlock used by the exercises section.
  function reviewQuizCard(label, items) {
    const card = el('div', { class: 'card' });
    card.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, label + ' · ' + items.length + ' questions'));
    items.forEach((q, i) => {
      const block = mcqBlock(q, 'review-' + label.toLowerCase().replace(/\W+/g, '-') + '-' + i);
      if (q.ref) block.appendChild(el('div', { class: 'muted', style: 'font-size:12px;margin-top:8px' }, q.ref));
      card.appendChild(block);
    });
    return card;
  }

  function bodyVocabularyReview() {
    const wrap = el('div', {});
    wrap.appendChild(reviewQuizCard('Vocabulary review', C.vocabularyReview));
    return wrap;
  }

  function vocabCard(w) {
    const card = el('div', { class: 'vword' + (state.learned[w.de] ? ' is-learned' : '') });
    const gMap = { m: 'masculine', f: 'feminine', n: 'neuter' };
    const term = vocabTerm(w.art, w.de);
    // Female/male voice toggle for vocab audio. Per-card preference persists
    // in state.vocabVoice (default female). Each button plays its own gender.
    const voicePref = () => (state.vocabVoice || 'female');
    const playVoice = (g) => {
      var fn = window.KW_speak || (window.KW_playAudio);
      if (fn) return fn(term, { gender: g });
      return Audio.speak(term);
    };
    const fBtn = Audio.gate(el('button', { class: 'vword-voice' + (voicePref() === 'female' ? ' is-active' : ''), title: 'Female voice', 'data-g': 'female',
      onclick: () => { state.vocabVoice = 'female'; save(); refreshVoice(); playVoice('female'); } }, 'F'), term);
    const mBtn = Audio.gate(el('button', { class: 'vword-voice' + (voicePref() === 'male' ? ' is-active' : ''), title: 'Male voice', 'data-g': 'male',
      onclick: () => { state.vocabVoice = 'male'; save(); refreshVoice(); playVoice('male'); } }, 'M'), term);
    function refreshVoice() {
      [fBtn, mBtn].forEach(b => b.classList.toggle('is-active', b.getAttribute('data-g') === voicePref()));
    }
    const listenBtn = Audio.gate(el('button', { class: 'vword-btn', style: 'flex:0 0 auto;width:38px;padding:8px', title: 'Listen', html: ICON.speaker,
      onclick: () => playVoice(voicePref()) }), term);
    card.append(
      el('div', { class: 'vword-top' },
        el('div', { class: 'vword-de' }, (w.art ? (() => { const s = el('span', { class: 'art r-article' }); const GEN = { m: 'masc.', f: 'fem.', n: 'neut.' }; s.appendChild(germanWordSpans(w.art.trim(), Object.assign({ scaffold: true }, GEN[w.gender] ? { type: 'Article · ' + GEN[w.gender] + ' nom.' } : null))); s.appendChild(document.createTextNode(' ')); return s; })() : ''), germanWordSpans(term.slice(w.art ? w.art.trim().length + 1 : 0), headwordCtx(term.slice(w.art ? w.art.trim().length + 1 : 0), w.art ? { type: 'Noun · singular' } : null))),
        el('div', { class: 'vword-voicewrap' }, fBtn, mBtn, listenBtn)),
      el('div', { class: 'vword-pos' }, w.pos + (w.gender ? ' · ' + gMap[w.gender] : '')),
      el('div', { class: 'vword-en' }, w.en),
      el('div', { class: 'vword-hi' }, w.hi),
      el('div', { class: 'vword-meta' },
        (w.art ? (() => { const s = el('span', { class: 'vword-tag gender-' + w.gender }); const GEN = { m: 'masc.', f: 'fem.', n: 'neut.' }; s.appendChild(germanWordSpans(w.art, GEN[w.gender] ? { type: 'Article · ' + GEN[w.gender] + ' nom.' } : null)); return s; })() : ''),
        (w.plural ? (() => { const s = el('span', { class: 'vword-tag' }, 'Pl. '); s.appendChild(germanWordSpans(w.plural, headwordCtx(w.plural, { type: 'Noun · plural' }))); return s; })() : '')),
      (() => {
        // Vocabulary example: rendered through the SAME canonical German-word
        // infrastructure as the headword/chips. When the entry authors
        // `exTokens` (the existing Story/Reading/Listening token shape), each
        // word carries its real occurrence grammar; otherwise the plain
        // string is auto-linkified as before (backward compatible).
        const box = el('div', { class: 'vword-ex' });
        if (Array.isArray(w.exTokens) && w.exTokens.length) {
          let prevNoSpaceAfter = true;
          w.exTokens.forEach((t, ti) => {
            const noSpaceBefore = prevNoSpaceAfter || /^[.,!?;:)\]…”"'”]/.test(t.w);
            if (!noSpaceBefore) box.appendChild(document.createTextNode(' '));
            if (t.plain) { box.appendChild(document.createTextNode(t.w)); prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2; return; }
            const sp = el('span', { class: 'rw de ' + tokenRole(t, w.exTokens, ti) }, t.w);
            sp.addEventListener('click', (e) => openWordPop(e, t, w.exTokens));
            box.appendChild(sp);
            prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2;
          });
        } else {
          box.textContent = w.ex || '';
        }
        return box;
      })(),
      el('div', { class: 'vword-actions' },
        learnBtn(w), saveBtn(w))
    );
    return card;
  }
  function learnBtn(w) {
    const on = !!state.learned[w.de];
    const b = el('button', { class: 'vword-btn' + (on ? ' is-on' : '') },
      el('span', { html: ICON.check }), el('span', {}, on ? 'Learned' : 'Mark learned'));
    b.addEventListener('click', () => {
      if (state.learned[w.de]) delete state.learned[w.de]; else state.learned[w.de] = true;
      save(); drawVocab();
    });
    return b;
  }
  function saveBtn(w) {
    const on = !!state.saved[w.de];
    const b = el('button', { class: 'vword-btn' + (on ? ' save-on' : '') },
      el('span', { html: ICON.bookmark }), el('span', {}, on ? 'Saved' : 'Save'));
    b.addEventListener('click', () => {
      const nowOn = !state.saved[w.de];
      if (nowOn) state.saved[w.de] = true; else delete state.saved[w.de];
      save();
      // Sync to the account-level Saved Words store (cross-page).
      if (window.KW_Account) {
        const typeMap = { Noun: 'noun', Verb: 'verb', Adjective: 'adjective', Adverb: 'adverb' };
        const word = {
          de: vocabTerm(w.art, w.de),
          en: w.en,
          type: typeMap[(w.pos || '').split(' ')[0]] || 'noun',
          level: (CHAPTER.phase || 'A1').slice(0, 2),
          gender: w.gender || null,
          ipa: w.ipa || null
        };
        const id = word.level + ':' + word.de;
        if (nowOn) KW_Account.Saved.add(word); else KW_Account.Saved.remove(id);
        refreshSavedCount();
      }
      drawVocab();
    });
    return b;
  }

  function refreshSavedCount() {
    if (!window.KW_Account) return;
    const badge = $('#acct-saved-count');
    if (badge) badge.textContent = KW_Account.Saved.counts().total;
  }

  // ---- Grammar ----
  function bodyGrammar() {
    const wrap = el('div', {});

    // 🎬 Watch First — embedded chapter animation (rendered only when the
    // chapter data supplies a heroAnimationPath; renderer holds no filename).
    if (C.heroAnimationPath) {
      const watch = el('div', { class: 'watch-first' });
      watch.appendChild(el('h3', { class: 'watch-first-title' }, '🎬 Watch First'));
      const frameWrap = el('div', { class: 'watch-first-frame' });
      const iframe = document.createElement('iframe');
      iframe.title = (C.title || 'Chapter') + ' — animation';
      iframe.setAttribute('allowfullscreen', '');
      // Nested framing of the bundled standalone via src yields about:blank in
      // some serve environments. Fetch the self-contained HTML and inject it via
      // srcdoc — same-document content, so it renders in preview AND on deploy.
      // In a bundled standalone, window.__resources.heroAnim is a blob URL of the
      // inlined animation; on the live page we fall back to the data path.
      var animSrc = (window.__resources && window.__resources.heroAnim) || C.heroAnimationPath;
      fetch(animSrc)
        .then(function (r) { return r.ok ? r.text() : null; })
        .then(function (html) {
          if (html) iframe.srcdoc = html;
          else iframe.src = animSrc;   // fallback
        })
        .catch(function () { iframe.src = animSrc; });
      frameWrap.appendChild(iframe);
      watch.appendChild(frameWrap);
      wrap.appendChild(watch);
    }

    if (SENTENCE_XRAY_ENABLED && C.parserSentence && C.parserSentence.length) {
      wrap.appendChild(renderInteractiveSentence(C.parserSentence, C.sentenceInsight));
    }

    C.grammar.forEach((g, i) => {
      const item = el('div', { class: 'accordion-item' + (i === 0 ? ' is-open' : '') });
      const body = el('div', { class: 'accordion-body' });
      const inner = el('div', { class: 'accordion-body-inner' });
      const grLabel = t => el('div', { class: 'gr-label' }, t);
      if (g.whatIsIt) inner.appendChild(el('p', { class: 'gr-what', html: g.whatIsIt }));
      (g.body || []).forEach(p => inner.appendChild(el('p', { class: 'grammar-text', html: p })));
      if (g.goldenRule) inner.appendChild(el('div', { class: 'gr-rule' },
        grLabel('Golden rule'), el('div', { class: 'gr-rule-text', html: g.goldenRule })));
      if (g.why) inner.appendChild(el('div', { class: 'gr-why' },
        grLabel('Why German does this'), el('p', { class: 'gr-why-text', html: g.why })));
      if (g.formula) { const f = el('div', { class: 'gr-formula' }, grLabel('Formula'));
        (Array.isArray(g.formula) ? g.formula : [g.formula]).forEach(line => f.appendChild(el('div', { class: 'gr-formula-line', html: line })));
        inner.appendChild(f); }
      if (g.table) {
        const t = el('table', { class: 'case-table' });
        const thead = el('tr', {}); g.table.head.forEach(h => thead.appendChild(el('th', { class: 'grammar-table-cell' }, h)));
        t.appendChild(el('thead', {}, thead));
        const tb = el('tbody', {});
        g.table.rows.forEach(r => { const tr = el('tr', {}); r.forEach((c, ci) => tr.appendChild(el('td', { class: (ci === 0 ? 'row-head ' : '') + 'grammar-table-cell', html: c }))); tb.appendChild(tr); });
        t.appendChild(tb); inner.appendChild(t);
      }
      if (g.note) inner.appendChild(el('p', { class: 'grammar-text', html: g.note }));
      if (g.hinglish) inner.appendChild(
        el('div', { class: 'hinglish-card' },
          el('p', { class: 'hinglish-text', html: g.hinglish })));
      if (g.example) { inner.appendChild(el('div', { class: 'dash-section-divider', style: 'margin:18px 0' }));
        g.example.forEach(ex => { const line = el('div', { class: 'example-line', html: ex.html }); line.style.cursor = 'pointer'; line.title = 'Listen'; line.addEventListener('click', () => Audio.speak(line.textContent.split('→')[0])); inner.appendChild(line); }); }
      if (g.mistakes) inner.appendChild(el('div', { class: 'gr-label gr-mistakes-label' }, g.mistakes.length > 1 ? 'Common mistakes' : 'Common mistake'));
      if (g.mistakes) g.mistakes.forEach(m => inner.appendChild(
        el('div', { class: 'mistake-row' },
          el('div', { style: 'display:flex;flex-direction:column;gap:6px;flex:1' },
            el('div', { style: 'display:flex;gap:10px;align-items:center' }, el('span', { class: 'mistake-mark wrong' }, '✕'), el('span', { class: 'mistake-text' }, mistakeSide('de strike', m.wrong, m.wrongTokens))),
            el('div', { style: 'display:flex;gap:10px;align-items:center' }, el('span', { class: 'mistake-mark right' }, '✓'), el('span', { class: 'mistake-text' }, mistakeSide('de', m.right, m.rightTokens))),
            el('div', { class: 'muted mistake-why', style: 'font-size:13.5px;padding-left:32px' }, m.why)))));
      if (g.compare) { const c = el('div', { class: 'gr-compare' }, grLabel('Compare'));
        if (g.compare.intro) c.appendChild(el('p', { class: 'gr-why-text', html: g.compare.intro }));
        if (g.compare.head) { const t2 = el('table', { class: 'case-table' });
          const th2 = el('tr', {}); g.compare.head.forEach(h => th2.appendChild(el('th', { class: 'grammar-table-cell' }, h)));
          t2.appendChild(el('thead', {}, th2));
          const tb2 = el('tbody', {});
          (g.compare.rows || []).forEach(r => { const tr = el('tr', {}); r.forEach((cell, ci) => tr.appendChild(el('td', { class: (ci === 0 ? 'row-head ' : '') + 'grammar-table-cell', html: cell }))); tb2.appendChild(tr); });
          t2.appendChild(tb2); c.appendChild(t2); }
        inner.appendChild(c); }
      if (g.connect) inner.appendChild(el('div', { class: 'gr-connect' },
        grLabel(g.connect.from ? 'Remember from ' + g.connect.from : 'Connects back'),
        el('p', { class: 'gr-connect-text', html: g.connect.text || g.connect })));
      if (g.memoryTrick) inner.appendChild(el('div', { class: 'gr-trick' },
        grLabel('Memory trick'), el('div', { class: 'gr-trick-text', html: g.memoryTrick })));
      if (g.recap) { const r = el('div', { class: 'gr-recap' }, grLabel('10-second recap'));
        const ul = el('ul', {}); g.recap.forEach(li => ul.appendChild(el('li', { html: li }))); r.appendChild(ul);
        inner.appendChild(r); }
      body.appendChild(inner);
      const headBtn = el('button', { class: 'accordion-head', type: 'button' },
        el('span', { class: 'accordion-title' }, g.title),
        el('span', { class: 'accordion-icon', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>' }));
      headBtn.addEventListener('click', () => {
        item.classList.toggle('is-open');
      });
      item.append(headBtn, body);
      wrap.appendChild(item);
    });
    // Checkpoint chapters carry their mixed grammar revision as a flat question
    // list (`grammarReview`) alongside the scope/tutor blocks above.
    if (Array.isArray(C.grammarReview) && C.grammarReview.length) wrap.appendChild(reviewQuizCard('Grammar review', C.grammarReview));
    return wrap;
  }

  // ---- Reading ----
  function bodyReading() {
    const r = C.reading;
    const card = el('div', { class: 'card' });
    card.appendChild(el('div', { class: 'flex-between', style: 'margin-bottom:18px' },
      el('div', {}, el('div', { class: 'eyebrow' }, 'Reading'), el('h3', { style: 'font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:6px' }, el('span', { class: 'de' }, r.title), ' — ', el('span', { class: 'muted', style: 'font-weight:400;font-size:16px' }, r.titleEn)))));
    const passage = el('div', { class: 'reading-passage' });

    // Group the flat token stream into sentences (split after a plain
    // sentence-ending punctuation token) so each sentence can be its own
    // click target, while the paragraph itself stays one continuous flow —
    // no permanent stacked sentence blocks. Sentence X-Ray expands inline
    // directly after the tapped sentence, only while open.
    const sentGroups = [];
    let cur = [];
    r.tokens.forEach(t => {
      cur.push(t);
      if (t.plain && /^[.!?]$/.test(t.w)) { sentGroups.push(cur); cur = []; }
    });
    if (cur.length) sentGroups.push(cur);

    const xrayState = { unit: null, panel: null };

    sentGroups.forEach(group => {
      const unit = el('span', { class: 'sentence-inline-unit' });
      let prevNoSpaceAfter = true;
      group.forEach((t, i) => {
        const noSpaceBefore = prevNoSpaceAfter || /^[.,!?;:)\]…”"'”]/.test(t.w);
        if (!noSpaceBefore) unit.appendChild(document.createTextNode(' '));
        if (t.plain) { unit.appendChild(document.createTextNode(t.w)); prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2; return; }
        const span = el('span', { class: 'rw de ' + tokenRole(t, group, i), dataset: { i: i } }, t.w);
        span.addEventListener('click', (e) => openWordPop(e, t, group));
        unit.appendChild(span);
        prevNoSpaceAfter = /[„«(]$/.test(t.w) && t.w.length <= 2;
      });
      const xrayTokens = group.filter(t => !t.plain).map((t, gi) => ({ w: t.w, role: tokenRole(t, group, gi) }));
      if (SENTENCE_XRAY_ENABLED && xrayTokens.length) {
        unit.classList.add('is-xray-enabled');
        unit.addEventListener('click', (e) => {
          if (e.target.closest('.rw')) return; // word click already handled its own event
          toggleInlineSentenceXRay(xrayState, unit, xrayTokens, (r.sentenceInsights && r.sentenceInsights[sentGroups.indexOf(group)]) || null);
        });
      }
      passage.appendChild(unit);
      passage.appendChild(document.createTextNode(' '));
    });

    const controls = el('div', { class: 'reading-controls' });
    const playBtn = el('button', { class: 'btn btn-soft btn-small' }, el('span', { html: ICON.play, style: 'width:14px;display:inline-flex' }), ' Listen to passage');
    let playing = false;
    playBtn.addEventListener('click', () => {
      if (playing) { Audio.stop(); playing = false; playBtn.querySelector('span:last-child') && (playBtn.lastChild.textContent = ' Listen to passage'); return; }
      const txt = r.tokens.filter(t => !t.plain).map(t => t.w).join(' ');
      playing = true; Audio.speak(txt, 0.92, () => { playing = false; });
    });
    const transBtn = el('button', { class: 'btn btn-soft btn-small' }, 'Show translation');
    const trans = el('div', { class: 'reading-translation' }, r.translation);
    transBtn.addEventListener('click', () => { const v = trans.classList.toggle('is-visible'); transBtn.textContent = v ? 'Hide translation' : 'Show translation'; });
    controls.append(playBtn, transBtn);
    card.append(passage, controls, trans);
    const hint = el('p', { class: 'muted', style: 'font-size:13.5px;margin-top:14px' }, 'Tip: tap any coloured word to see its role, case, meaning, and audio. Click a sentence for its Sentence X-Ray.');
    return el('div', {}, card, hint);
  }

  let wordPop, wordPopBackdrop, wpHistory = [], wpIndex = -1;
  function closeWordPop() {
    if (wordPop) wordPop.classList.remove('is-open');
    if (wordPopBackdrop) wordPopBackdrop.classList.remove('is-open');
    wpHistory = []; wpIndex = -1;
  }
  // openWordPop = a fresh entry point (click from the page): starts a new
  // history/breadcrumb trail. navigateToWord = a click INSIDE an already-open
  // popup: continues the same trail so the whole thing behaves like one
  // recursive knowledge-graph explorer, never a stack of modals.
  // Attaches the role the CLICKED SPAN is actually wearing, so renderWordPop can
  // colour the headword from the occurrence when the resolved entry has no role
  // of its own. Reads the rendered class rather than re-deriving it, so the
  // popup can never disagree with what the learner is looking at.
  function withOccurrenceRole(t, evOrEl) {
    if (!t) return t;
    var el = evOrEl && (evOrEl.currentTarget || evOrEl.target || evOrEl.nodeType === 1 && evOrEl);
    if (!el || !el.className) return t;
    var m = String(el.className).match(/\br-([a-z-]+)/);
    if (!m) return t;
    if (!t.occurrenceRole) t.occurrenceRole = 'r-' + m[1];
    return t;
  }
  function openWordPop(e, t, siblingTokens) {
    wpHistory = [resolveFullEntry(withOccurrenceRole(t, e), siblingTokens)]; wpIndex = 0;
    renderWordPop(wpHistory[0]);
  }
  function navigateToWord(t) {
    if (!t) return;
    // Route through the SAME resolution pipeline as openWordPop: recursive /
    // auto-linkified clicks must get identical paradigm-completeness
    // inheritance (compare, conj, plural) instead of rendering whatever thin
    // entry the link resolver happened to produce.
    const full = resolveFullEntry(t);
    wpHistory = wpHistory.slice(0, wpIndex + 1).concat([full]);
    wpIndex = wpHistory.length - 1;
    renderWordPop(full);
  }
  function wpJumpTo(i) {
    if (i < 0 || i >= wpHistory.length) return;
    wpIndex = i;
    renderWordPop(wpHistory[i]);
  }
  function resolveWordLink(surface) { return lookupWord(surface) || { w: surface, type: 'Word', en: '' }; }
  // Single entry point for EVERY click, whether it originates on the page
  // (Story/Reading/Dialogue passes its own raw token, richest for this exact
  // occurrence — case/pron/why) or inside an already-open popup (passes just
  // a surface string). Both are merged against the full lookupWord pipeline
  // (local chapter data → Global Lexicon → lemma resolution) so a word can
  // never resolve more richly one way than the other.
  function resolveFullEntry(t, siblingTokens) {
    if (typeof t === 'string') t = { w: t };
    if (!t || !t.w) return t;
    // Tier A (only sanctioned tier — no heuristic detection, author-marked
    // only): if this token is explicitly authored as part of a larger
    // lexical unit — separable verb, fixed verb construction, multi-word
    // expression, future idiom — resolve to that unit's dictionary entry
    // instead of the isolated surface token. The dictionary is the single
    // source of truth for the unit's meaning/translation/examples/grammar;
    // `t.unit` is an EXCEPTIONAL, temporary fallback for a unit that has no
    // dictionary entry yet — never the normal path, never how most tokens
    // should be authored. Never silent: `resolvedFromSurface` lets
    // renderWordPop explain the substitution to the learner.
    if (t.lexicalUnit && t.lexicalUnit !== t.w) {
      // No expectedClass here: the clicked surface token's own class (e.g.
      // "separable prefix") describes the SURFACE token, not the target
      // unit's word class (e.g. "verb") — passing it would wrongly trigger
      // the homograph guard and reject the correct entry. Tier A is
      // author-specified and unambiguous; no homograph risk to guard here.
      const unitLooked = lookupWord(t.lexicalUnit);
      // Never force a substitution into a dead/hollow popup: if the target
      // has no dictionary entry and no inline override, a broken/stale
      // pointer must not degrade the learner's experience below the plain
      // surface-token fallback. Log so authoring/QA catches it early.
      if (!unitLooked && !t.unit) {
        console.warn('[lexicalUnit] "' + t.lexicalUnit + '" (from surface "' + t.w + '") has no dictionary entry and no inline override — falling back to surface token.');
      } else {
        let unitMerged = mergeWordData({ w: t.lexicalUnit }, unitLooked);
        if (t.unit) unitMerged = Object.assign({}, unitMerged, t.unit);
        unitMerged.w = t.lexicalUnit;
        // Role is OCCURRENCE metadata (the clicked token's grammatical role in
        // this sentence), not dictionary data — the Global Lexicon entry has
        // none. Without carrying it over, the popup headword loses its
        // semantic colour and falls back to plain ink.
        if (t.role && !unitMerged.role) unitMerged.role = t.role;
        unitMerged.resolvedFromSurface = t.w;
        // A separable/fixed-unit token like "zurück" or "an" carries no
        // tense itself — that lives on the finite-verb sibling elsewhere in
        // the same sentence (e.g. "kam" for Präteritum). Find it so the
        // Conjugation grid can highlight the ONE correct cell instead of
        // silently refusing due to fragment ambiguity.
        if (siblingTokens && siblingTokens.length) {
          const sib = siblingTokens.find(s => s !== t && /präteritum|praeteritum|präsens|praesens|perfekt|partizip/i.test(s.type || ''));
          if (sib) unitMerged.resolvedTense = sib.type;
        }
        return unitMerged;
      }
    }
    const looked = lookupWord(t.w, wordClassOf(t.type));
    const merged = mergeWordData(t, looked);
    merged.w = t.w;
    return merged;
  }
  // Prose fields (why-notes, grammar notes) mix German terms with English
  // commentary in one plain string, with no markup telling them apart. Unlike
  // germanWordSpans (used on fields that are PURE German — headword, forms,
  // example sentences — safe to link every word blind), prose must only link
  // a word when it actually resolves to a real dictionary entry; otherwise an
  // English word like "the"/"polite"/"daytime" would wrongly become a fake
  // "German" link. This is the one place recall is sacrificed for correctness.
  // ARCHITECTURE FROZEN: this is the ONLY entry point for deciding whether a
  // German word is clickable, now and for any future renderer. Never
  // duplicate lookup, lemma resolution, language guarding, dictionary
  // merging, or meaningful-entry validation outside this function — extend
  // it instead. SINGLE SOURCE OF TRUTH for popup eligibility. Every renderer in this file
  // (gated prose, inline recursion spans, the main-page sweep, popup-internal
  // prose) MUST call this — never lookupWord()/hasMeaningfulEntry() directly.
  // Pipeline: lookupWord() -> language-context guard -> hasMeaningfulEntry().
  // Any future renderer gets correct, consistent eligibility automatically by
  // routing through here; changing eligibility rules in this one place changes
  // them everywhere.
  //   gated=true  (unverified free-language prose: grammar notes, mistake
  //                explanations, table cells, takeaways) applies the extra
  //                single-letter and language-context safeguards.
  //   gated=false (fields known to be pure German: headword, example
  //                sentences, conjugation/comparison forms) skips them —
  //                every word there is safe to resolve blind.
  // Surfaces this chapter authors AS GERMAN, harvested from the German-typed
  // fields of its own data (see the language gate in resolveClickableWord).
  // Memoized; built once per page.
  const GERMAN_FIELDS = new Set(['w', 'de', 'ex', 'ex2', 'sentence', 'front', 'answer', 'solution']);
  const NON_GERMAN_FIELDS = new Set(['en', 'hi', 'exEn', 'exHi', 'ex2En', 'ex2Hi', 'why', 'body',
    'titleEn', 'titleHi', 'html', 'label', 'explain', 'prompt', 'tip', 'hint', 'en2', 'description',
    'hinglish', 'note', 'takeaways', 'revisionTips']);
  let _authoredDe = null;
  function AUTHORED_GERMAN() {
    if (_authoredDe) return _authoredDe;
    const set = new Set(), seen = new Set();
    (function walk(node, key, depth) {
      if (!node || depth > 12) return;
      if (typeof node === 'string') {
        if (!GERMAN_FIELDS.has(key)) return;
        const re = germanWordRegex(), txt = node.replace(/<[^>]*>/g, ' ');
        let m;
        while ((m = re.exec(txt))) set.add(storyNorm(m[0]));
        return;
      }
      if (typeof node !== 'object' || seen.has(node)) return;
      seen.add(node);
      if (Array.isArray(node)) { node.forEach(n => walk(n, key, depth + 1)); return; }
      Object.keys(node).forEach(k => { if (!NON_GERMAN_FIELDS.has(k)) walk(node[k], k, depth + 1); });
    })(C, null, 0);
    _authoredDe = set;
    return set;
  }
  // ---- Case-aware lexical identity (German capitalisation is meaningful) ----
  // Every index in this file is keyed through normWord/storyNorm, which lowercase
  // the surface. German, however, distinguishes a large systematic class of
  // lexemes ONLY by capitalisation — der Laut vs laut, das Recht vs recht, der
  // Morgen vs morgen, das Essen vs essen, der Arm vs arm. Collapsing case makes
  // those collide on one key, so "Am Wortanfang hörst du den ersten Laut"
  // resolved to the ADJECTIVE laut and taught "aloud, loudly".
  //
  // Two mechanisms, in the priority order the architecture requires:
  //   A. CASE_INDEX — exact case-aware surface match against an entry's OWN
  //      authored headword (`w`). Wins over the normalized lookup.
  //   D. the existing normalized lookup, unchanged, as the fallback.
  // (B authored occurrence data and C inflection/lemma resolution keep their
  // existing precedence inside lookupWord — nothing here reorders them.)
  let _caseIdx = null;
  function CASE_INDEX() {
    if (_caseIdx) return _caseIdx;
    const idx = Object.create(null);
    const add = src => {
      if (!src) return;
      Object.keys(src).forEach(k => {
        const e = src[k];
        if (!e || typeof e !== 'object') return;
        // Chapter vocab entries carry their headword as `de`; dictionary and
        // story-lexicon entries carry it as `w`.
        const hw = typeof e.w === 'string' ? e.w : (typeof e.de === 'string' ? e.de : '');
        if (hw && !(hw in idx)) idx[hw] = e;
      });
    };
    add(window.KW_GLOBAL_LEXICON);
    // The case-sensitive noun overlay must be seen by the exact-case path too:
    // its whole purpose is surfaces whose capitalised reading is unreachable
    // through the lowercased key ("Kosten" vs. the verb "kosten").
    add(window.KW_GLOBAL_CAPS);
    // String-valued overlay entries are inflection references ("Grüßen" is the
    // dative plural of "Gruß"). Register the surface against its canonical
    // entry so the exact-case path resolves it without duplicating content.
    const caps = window.KW_GLOBAL_CAPS || {};
    Object.keys(caps).forEach(k => {
      if (typeof caps[k] !== 'string' || (k in idx)) return;
      const canon = (window.KW_GLOBAL_LEXICON || {})[normWord(caps[k])];
      if (canon) idx[k] = canon;
    });
    add(WORDIDX);
    add(window.KW_STORY_LEX);
    _caseIdx = idx;
    return idx;
  }
  // German capitalises (a) every noun and (b) the first word of a sentence. Only
  // (a) carries lexical information, so the capitalisation signal is trustworthy
  // ONLY away from sentence-initial position. Callers that know the surrounding
  // text compute this; renderers that don't pass nothing and the guard stays off.
  // Characters that end a sentence-like unit, so the next word's capital is
  // positional rather than lexical. `/` and `·` are included because authored
  // prompts routinely list alternatives ("Ja, gern! / Leider nicht.",
  // "Komm! / Kommt! / Kommen Sie!", "Lesen · Hören") where the word after the
  // separator opens a new unit.
  const SENTENCE_END = /[.!?:;\u2014\u2013\u2022\u00b7\/\n\u201c\u201d"'(\[]$/;
  // Text preceding `node` in the rendered flow, gathered across previous
  // siblings and up through inline ancestors until a block boundary.
  //
  // Needed because the sweeps run MORE THAN ONCE over the same container (the
  // lexicon loads asynchronously, so everything is re-swept once real data is
  // available). After the first pass a word that was skipped is left as its own
  // orphan text node — so on the second pass its node text is just "Laut" and an
  // index-0 check would call it sentence-initial, silently disabling the
  // capitalisation guard. Position must be judged against the sentence, not
  // against whatever text node happens to survive.
  function precedingText(node) {
    let out = '', cur = node, guard = 0;
    while (cur && guard++ < 60) {
      let prev = cur.previousSibling;
      while (prev) {
        out = (prev.textContent || '') + out;
        if (/\S/.test(out)) return out;
        prev = prev.previousSibling;
      }
      cur = cur.parentNode;
      if (!cur || cur.nodeType !== 1) break;
      // An authored German container (.de, .vword-ex, …) delimits a unit of
      // learner content. Text before it belongs to a different unit — a label,
      // an instruction, an adjacent prompt — so it must not decide whether the
      // first word of THIS unit is sentence-initial. Without this stop, the
      // imperative "Achte auf die Betonung" (first word of its own
      // .speak-prompt) inherited preceding prompt text, was judged
      // mid-sentence, and the capitalisation rule repainted the verb as a noun.
      if (cur.matches && cur.matches(LINK_TARGETS)) break;
      if (/^(P|DIV|LI|TD|TH|H1|H2|H3|H4|H5|SECTION|ARTICLE|BLOCKQUOTE|BODY)$/.test(cur.tagName)) break;
    }
    return out;
  }
  // A word touching a slash or pipe with no space is a FRAGMENT of a composite
  // lexical form, not a standalone word. Vocabulary headwords are written
  // `der/die Autor/in`, and the linkifier was splitting that into four
  // independent clickable words — so the feminine suffix `-in` was resolved as
  // the PREPOSITION `in` and painted gold, teaching a morpheme as a word.
  // Structural, not a word list: the adjacency of `/` is the signal, so it works
  // for every gender-inclusive form, slash variant and pipe notation in the
  // curriculum. Standalone `in`, `der`, `für`, `aus` are untouched because they
  // are surrounded by whitespace.
  // Re-sweep half of the headword-scaffolding rule.
  //
  // germanWordSpans already leaves a multiword headword's article as plain text
  // (see headwordCtx / contextOverride.scaffold). But .vword-de and .vword-tag are
  // members of LINK_TARGETS, so the lexicon-onload re-sweep walks them and
  // re-links that plain text node — which is why construction-time suppression
  // alone left all 76 fragments in place. Proven by the class signature: the
  // remaining spans carried bare `de-link` with no `wp-inline-link`, i.e.
  // wrapWordsIn output, not germanWordSpans output.
  //
  // Four conditions, all required: a real DOM node (so only wrapWordsIn reaches
  // this), a .vword-de/.vword-tag host, that host holding a MULTIWORD headword,
  // and the word being a member of the existing FUNC_WORDS set. Standalone
  // der/die/das in prose fail condition 2; single-word headwords fail 3;
  // component nouns like Entwicklung fail 4.
  function isHeadwordScaffold(word, node) {
    if (!node || !FUNC_WORDS.has(normWord(word))) return false;
    const host = node.parentElement && node.parentElement.closest
      ? node.parentElement.closest('.vword-de, .vword-tag') : null;
    if (!host) return false;
    return String(host.textContent || '').trim().split(/\s+/).length > 1;
  }
  function isCompositeFragment(text, index, word, node) {
    const s = String(text || '');
    const w = String(word || '');
    let before = s.charAt(index - 1);
    let after = s.charAt(index + w.length);
    // At a text-node boundary the neighbouring character lives in a SIBLING
    // node: the sweeps run more than once, and after the first pass
    // `der/die Autor/in` is already split into spans, so each surviving text
    // node is just "/" or a bare word. Judging composites from the node alone
    // therefore missed every fragment on the second pass — the same failure mode
    // that hid the `Laut` capitalisation guard. Look outward when at an edge.
    if (node) {
      if (!before) {
        let p = node.previousSibling, guard = 0;
        while (p && guard++ < 4) {
          const t = (p.textContent || '');
          if (t) { before = t.charAt(t.length - 1); break; }
          p = p.previousSibling;
        }
      }
      if (!after) {
        let n2 = node.nextSibling, guard2 = 0;
        while (n2 && guard2++ < 4) {
          const t = (n2.textContent || '');
          if (t) { after = t.charAt(0); break; }
          n2 = n2.nextSibling;
        }
      }
    }
    return before === '/' || after === '/' || before === '|' || after === '|';
  }
  function isSentenceInitial(text, index, node) {    const before = String(text || '').slice(0, index).replace(/\s+$/, '');
    if (before) return SENTENCE_END.test(before);
    if (node) {
      const pre = precedingText(node).replace(/\s+$/, '');
      if (pre) return SENTENCE_END.test(pre);
    }
    return true;
  }
  // Open-class entries whose lowercase headword has a plausible capitalised NOUN
  // homograph. Pronouns/articles are excluded on purpose: formal `Sie` is
  // capitalised mid-sentence and must keep resolving.
  const NOUN_HOMOGRAPH_CLASSES = /^(adjective|adverb|verb)\b/i;
  // Shared by roleFor() and resolveClickableWord() so COLOUR and ELIGIBILITY can
  // never disagree about the same occurrence. True when a capitalised
  // mid-sentence surface's only dictionary match is a lowercase-headword
  // open-class entry — i.e. German would have written the noun here, so the
  // lowercase lexeme is the wrong one (Laut/laut, Recht/recht, Morgen/morgen,
  // Essen/essen, Arm/arm). The index must be built before it is consulted: the
  // first sweep can run before buildWordIndex(), and an unbuilt index silently
  // made every capitalised surface look unknown.
  // Converse of isCapitalisedNounHomograph, and the stronger of the two: German
  // capitalises EVERY noun without exception, so an all-lowercase surface can
  // never be one. When a lowercase surface's only direct match is a
  // capitalised-headword NOUN entry, the noun reading belongs to a different
  // lexeme — the nominalised form. "Die erste Stunde" resolved through the key
  // `erste` to the noun entry {w:'Erste', type:'Noun', en:'the first (one)'} and
  // rendered the ordinal ADJECTIVE as a noun with a Number paradigm.
  //
  // Needs no sentence-position input: unlike capitalisation, lower case is never
  // positional. This is the same orthographic signal the gated guard already
  // trusts, applied on every path rather than only in free prose.
  // Any role this chapter authors for an EXACT surface, from any token array.
  // Used to veto orthographic inference — never to assign a role by itself.
  //
  // Keyed by the authored surface verbatim, NOT normalised: an authored
  // lowercase `laut` (adverb) says nothing about a capitalised `Laut`, and
  // normalising would let it veto the very case distinction this layer exists
  // to preserve.
  let _authoredRoleAny = null;
  function AUTHORED_ROLE(surface) {
    if (!_authoredRoleAny) {
      const idx = Object.create(null), seen = new Set();
      (function walk(node, depth) {
        if (!node || depth > 10 || typeof node !== 'object' || seen.has(node)) return;
        seen.add(node);
        if (Array.isArray(node)) { node.forEach(n => walk(n, depth + 1)); return; }
        if (typeof node.w === 'string' && node.role && !node.plain) {
          const k = node.w.trim();
          if (k && !(k in idx)) idx[k] = normalizeRole(node.role);
        }
        Object.keys(node).forEach(k => walk(node[k], depth + 1));
      })(C, 0);
      _authoredRoleAny = idx;
    }
    return _authoredRoleAny[String(surface || '').trim()] || '';
  }
  function isLowercaseNounMismatch(word) {
    if (!/^[a-z\u00e4\u00f6\u00fc\u00df]/.test(String(word || ''))) return false;
    if (!WORDIDX) buildWordIndex();
    const nk = normWord(word);
    const raw = WORDIDX[nk] || (window.KW_GLOBAL_LEXICON || {})[nk] || (window.KW_STORY_LEX || {})[storyNorm(word)];
    const hw = raw ? (raw.w || raw.de || '') : '';
    const ty = raw ? (raw.type || raw.pos || '') : '';
    return !!hw && /^[A-Z\u00c4\u00d6\u00dc]/.test(hw) && /^noun/i.test(ty);
  }
  function isCapitalisedNounHomograph(word, sentenceInitial) {
    if (sentenceInitial !== false || !/^[A-Z\u00c4\u00d6\u00dc]/.test(String(word || ''))) return false;
    // Authored data outranks orthographic inference (frozen rule). If THIS
    // chapter authors the surface with a non-noun role — e.g. the imperative
    // `Achte` as `{ role: 'r-verb', type: 'Verb · imperative' }` — that reading is
    // known, so the capitalisation heuristic must not override it. Position
    // detection can misjudge a word that opens its own authored container, and
    // without this veto the rule repainted a known verb as a noun.
    const authored = AUTHORED_ROLE(word);
    if (authored && !/^r-(object|nnoun|subject)$/.test(authored)) return false;
    if (!WORDIDX) buildWordIndex();
    const nk = normWord(word);
    const raw = WORDIDX[nk] || (window.KW_GLOBAL_LEXICON || {})[nk] || (window.KW_STORY_LEX || {})[storyNorm(word)];
    const hw = raw ? (raw.w || raw.de || '') : '';
    const ty = raw ? (raw.type || raw.pos || '') : '';
    return !!hw && /^[a-z\u00e4\u00f6\u00fc\u00df]/.test(hw) && NOUN_HOMOGRAPH_CLASSES.test(ty);
  }
  function resolveClickableWord(word, gated, sentenceInitial) {
    // Lazy-build guard, matching lookupWord / isCapitalisedNounHomograph /
    // isLowercaseNounMismatch \u2014 which all already have it. This function reads
    // WORDIDX directly (the combining-prefix guard below), so without it a null
    // index throws `Cannot read properties of null` on the first gated word and
    // \u2014 because the lexicon-onload re-sweep has no error isolation \u2014 aborts the
    // whole re-pass, silently de-linking every container later in the document
    // (measured: A1-1 254 \u2192 243 clickable, the 11 vocabulary plural chips).
    // REVERTED: `if (!WORDIDX) buildWordIndex();` was added here and removed.
    // It prevents a real crash, but it also shifts WHEN buildWordIndex() runs
    // (first resolveClickableWord instead of first lookupWord), which changes
    // classConflict verdicts: A2-9 `wie` flips from r-conjunction to r-question
    // across 92 occurrences, badge "Question word", losing the chapter's own
    // `Conjunction · wie` vocab class. The QA finding count stays at 1 the whole
    // time, because badge and colour then agree on the WRONG answer — finding
    // counts are blind to this. Fix precedence (chapter vocab class must outrank
    // the Global Lexicon) or error-isolate the re-sweep instead.
    // A trailing hyphen usually marks prose prefix/suffix notation ("er-",
    // "an-", "-ieren" used to explain a pattern) — never look those up, even
    // if the substring happens to match a real word once the hyphen is
    // stripped (e.g. "er-" the inseparable-prefix marker vs "er" the
    // pronoun). But a genuinely AUTHORED prefix vocabulary headword (e.g.
    // "Süd-", "Traum-" — real dictionary entries that happen to end in a
    // combining hyphen) must still resolve: trust the hyphen only when the
    // dictionary's own headword for it was itself authored with that
    // trailing hyphen, not incidentally matched after hyphen-stripping.
    if (/-$/.test(word)) {
      const nk0 = normWord(word);
      const raw0 = WORDIDX[nk0] || (window.KW_GLOBAL_LEXICON || {})[nk0];
      if (!raw0 || !raw0.w || !raw0.w.endsWith('-')) return null;
    } else if (gated) {
      // Converse guard: a bare prose word must not become a German learner
      // word when its ONLY dictionary match is a combining-prefix headword
      // (e.g. English "extra" matching the German prefix entry "extra-").
      // A prefix is not a standalone word occurrence.
      const nkP = normWord(word);
      const rawP = WORDIDX[nkP] || (window.KW_GLOBAL_LEXICON || {})[nkP];
      if (rawP && rawP.w && rawP.w.endsWith('-')) return null;
    }
    if (gated && word.length <= 1) return null; // KW_STORY_LEX alphabet-letter entries vs. English "a"/"I" — see TODO below
    // LANGUAGE GATE — free prose is not assumed to be German.
    //
    // Gated containers (grammar notes, mistake explanations, table cells,
    // takeaways, ledes) hold English/Hinglish EXPLANATION, not learner German.
    // Resolving their words against the global dictionary made every English
    // word that is also a German word clickable: "fast" (= almost), "will"
    // (= wants), "an", "in", "so", "top", "real", "Not". The old safeguard was
    // orthographic — reject a NOUN entry matched against an all-lowercase
    // surface — which by construction cannot catch adverbs or adjectives.
    //
    // The schema already carries the language signal in its FIELD NAMES:
    // `w`/`de`/`ex`/`ex2` hold German, `en`/`hi`/`why`/`body`/`html` hold
    // explanation. AUTHORED_GERMAN() harvests the German-typed fields of THIS
    // chapter, so the gate implements the frozen rule literally: explicitly
    // authored German is clickable, dictionary coincidence alone is not.
    //
    // Escape hatch (unchanged, and the migration path): `<span class="de">` in
    // prose is a LINK_TARGET and never gated, so an author can mark German the
    // chapter does not otherwise author. Genuine prose German is restored this
    // way chapter by chapter as the production audit reaches it.
    if (gated && !AUTHORED_GERMAN().has(storyNorm(word))) return null;
    // German capitalises every noun, so away from sentence-initial position a
    // capitalised surface IS a noun occurrence. Feed that as `expectedClass` to
    // lookupWord's existing homograph guard — the same mechanism that stops the
    // verb "stelle" inheriting "die Stelle" — so a capitalised surface can never
    // resolve to its lowercase open-class homograph ("Laut" the noun vs "laut"
    // the adjective, Recht/recht, Morgen/morgen, Essen/essen, Arm/arm).
    // Orthography only supplies the class hint; the established guard does the
    // rejecting. Nothing new is inferred about grammar.
    //
    // Applied ONLY when there is a real conflict to resolve — the direct match is
    // a lowercase-headword OPEN-CLASS entry. Without that condition every
    // capitalised non-noun would be rejected, breaking formal `Sie`/`Ihnen`
    // (pronouns, legitimately capitalised mid-sentence) and any capitalised
    // article or question word.
    const expectNoun = isCapitalisedNounHomograph(word, sentenceInitial);
    // A lowercase surface is never a noun in German. If the noun entry is the
    // only thing this surface matches, there is no valid lexeme to show — report
    // nothing rather than the nominalised reading (Unknown > Guess). The missing
    // non-noun entry is a CONTENT GAP.
    if (isLowercaseNounMismatch(word)) return null;
    const hit = lookupWord(word, expectNoun ? 'noun' : undefined);
    if (!hit) return null;
    // PRIORITY A — exact case-aware surface match. When the dictionary holds an
    // entry whose own authored headword IS this surface, that entry is the
    // lexeme, whatever the normalized key resolved to.
    const exact = CASE_INDEX()[word];
    if (exact && exact !== hit && hasMeaningfulEntry(exact)) return exact;
    // Final safety net: if the class hint could not be honoured (no noun entry
    // exists anywhere) the resolver must report nothing rather than the wrong
    // lexeme. The missing noun is a CONTENT GAP — inventing it here would be
    // fabrication (Unknown > Guess).
    if (expectNoun && !/^noun/i.test(String(hit.type || hit.pos || ''))) return null;
    if (gated) {
      const nk = normWord(word);
      let raw = WORDIDX[nk] || (window.KW_GLOBAL_LEXICON || {})[nk] || (window.KW_STORY_LEX || {})[storyNorm(word)];
      // The guard must also see through the inflection index: a plural/
      // conjugated surface form (e.g. "Infinitive", the plural of "Infinitiv")
      // resolves via KW_INFLECTIONS to a capitalized-noun lemma, but that
      // lemma's own dictionary entry — not the inflected surface form — is
      // what carries the capitalization signal this guard checks.
      if (!raw) {
        const lemma = (window.KW_INFLECTIONS || {})[nk];
        if (lemma) raw = (window.KW_GLOBAL_LEXICON || {})[normWord(lemma)] || WORDIDX[normWord(lemma)];
      }
      // TODO (architectural, permanent): this orthography-based guard is a
      // TEMPORARY safeguard, not the intended long-term design. The correct
      // architecture is language-aware rendering — every gated field should
      // carry explicit language metadata (or render-context/component-context
      // signals) so the engine KNOWS it's rendering English/Hindi vs German,
      // instead of inferring language from capitalization. Replace this rule
      // once that metadata exists; capitalization should only ever be a
      // fallback, never primary. German capitalizes every noun with no
      // exception, so a NOUN entry matched against an all-lowercase surface
      // token is the English/loanword homograph ('person'/'Person'), never
      // genuine German prose.
      if (raw && /^Noun\b/.test(raw.type || '') && word === word.toLowerCase()) return null;
    }
    return hasMeaningfulEntry(hit) ? hit : null;
  }
  function germanWordSpansGated(text) {
    const frag = document.createDocumentFragment();
    const re = germanWordRegex();
    let last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const word = m[0];
      if (isCompositeFragment(text, m.index, word)) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
      const hit = resolveClickableWord(word, true, isSentenceInitial(text, m.index));
      if (hit) {
        const span = document.createElement('span');
        const spanRole = roleFor(word, null, isSentenceInitial(text, m.index));
        span.className = ('de-link wp-inline-link ' + spanRole).trim();
        span.textContent = word;
        span.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const base = Object.assign({}, hit, { w: word });
          if (spanRole && spanRole !== 'plain' && !base.role) base.role = spanRole;
          navigateToWord(base);
        });
        frag.appendChild(span);
      } else {
        frag.appendChild(document.createTextNode(word));
      }
      last = m.index + word.length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }
  // Splits a short German string into individually clickable word spans
  // (used for the headword's compound parts, conjugated forms, comparison
  // forms, and advanced-section items) — each click continues the trail.
  // True when a headword string carries grammatical scaffolding around a lexeme
  // ("die Entwicklung"). Single-word strings get no flag, so nothing is
  // suppressed for them. Used only by the vocabulary headword/plural renderers.
  function headwordCtx(str, base) {
    const multi = String(str || '').trim().split(/\s+/).length > 1;
    return multi ? Object.assign({ scaffold: true }, base || null) : (base || null);
  }
  function germanWordSpans(text, contextOverride, coreferent) {
    const frag = document.createDocumentFragment();
    const re = germanWordRegex();
    let last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const word = m[0];
      // HEADWORD SCAFFOLDING — caller-declared, never inferred from the DOM.
      //
      // A vocabulary headword's ARTICLE is rendered by its own germanWordSpans
      // call, separate from the lexical headword ("die" and "Entwicklung" are two
      // calls). The caller therefore already knows it is emitting grammatical
      // scaffolding rather than a lexeme, and says so with `scaffold: true`.
      // Without this, the article became an independent link that resolved to the
      // CARD's noun entry: badge Noun, empty EN, span r-article — 76 fragments
      // across 87 multiword hosts in c2-22 alone.
      //
      // Doubly narrow: only when the caller sets the flag, and only for members
      // of the existing FUNC_WORDS set. The lexical component ("Entwicklung") is
      // a separate unflagged call and stays clickable; prose articles never reach
      // these call sites, so standalone der/die/das are untouched. Plural chips
      // carry real lexemes ("Äpfel"), which are not FUNC_WORDS, so flagging them
      // suppresses nothing — the flag is about the call, not the container.
      if (contextOverride && contextOverride.scaffold && FUNC_WORDS.has(normWord(word))) {
        frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue;
      }
      if (isCompositeFragment(text, m.index, word)) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
      const hit = resolveClickableWord(word, false, isSentenceInitial(text, m.index));
      if (!hit) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
      const span = document.createElement('span');
      // Match the main page's wrapWordsIn exactly: every dynamically generated
      // link must carry the same grammar-role color class a manually authored
      // word gets, so recursion never degrades a word to plain black text.
      let spanRole = roleFor(word, null, isSentenceInitial(text, m.index));
      // Coreference inside an entry's OWN example. The example is authored on
      // the entry to illustrate THAT occurrence, so where the example repeats
      // the headword surface it denotes the same occurrence and must not be
      // re-resolved to a weaker role than the one already displayed.
      //
      // Applied ONLY when the surface's own resolution yields a word-class
      // role (a name) — i.e. when there is no sentence function to lose. For
      // every other word the surface resolution stands, so "Der Apfel ist rot."
      // under the entry `Apfel` (r-object) still colours its own Apfel from the
      // lexicon rather than inheriting the entry's object role into a subject
      // position. Each example word keeps its own role; this is not inheritance
      // of the clicked word's colour.
      if (coreferent && coreferent.role && isWordClassRole(spanRole) &&
          storyNorm(word) === storyNorm(coreferent.surface)) {
        spanRole = coreferent.role;
      }
      span.className = ('de-link wp-inline-link ' + spanRole).trim();
      span.textContent = word;
      // The popup must show the SAME semantic colour the learner just clicked.
      // The dictionary entry carries no occurrence role, so without passing
      // the role this renderer already computed and displayed, the popup
      // headword falls back to plain ink. Not a guess — it is the identical
      // value used to paint the word on screen.
      span.addEventListener('click', (ev) => {
        ev.stopPropagation();
        let entry = spanRole && spanRole !== 'plain' && !hit.role ? Object.assign({}, hit, { role: spanRole }) : hit;
        // Occurrence context supplied by the calling renderer (e.g. a
        // vocabulary article chip knows its headword's gender and that a
        // citation article is nominative). Without it the resolver falls back
        // to the dictionary's canonical entry, whose metadata comes from some
        // other sentence and can name the wrong gender/case.
        if (contextOverride) entry = Object.assign({}, entry, contextOverride);
        navigateToWord(entry);
      });
      frag.appendChild(span);
      last = m.index + word.length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }
  // Same idea but for prose blocks that may already contain markup (Why-this-
  // form notes) — walks text nodes so existing role-coloured spans are kept.
  function linkifyPopupProse(host) {
    const EXCLUDE = 'button,.wp-close,.wp-nav,[data-no-link]';
    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !/[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest(EXCLUDE)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => node.parentNode.replaceChild(germanWordSpansGated(node.nodeValue), node));
  }
  function renderWordPop(t) {
    if (!wordPop) {
      wordPopBackdrop = el('div', { class: 'word-pop-backdrop' });
      wordPop = el('div', { class: 'word-pop', role: 'dialog', 'aria-modal': 'true' });
      document.body.append(wordPopBackdrop, wordPop);
      wordPopBackdrop.addEventListener('click', closeWordPop);
      document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeWordPop(); });
    }
    // Not every inline .r-* role maps to a --g-* grammar-color var — a few
    // (conjunction/name/letter) are deliberately styled with plain ink tones
    // in chapter.css. Mirror that mapping here so the popup never asks the
    // browser for a --g-conjunction/--g-name/--g-letter that doesn't exist.
    const ROLE_COLOR_VAR = { conjunction: '--ink-secondary', name: '--ink-secondary', letter: '--ink-secondary' };
    // role:'plain' (a handful of B1 reading-passage tokens) means "clickable,
    // has real data, but no special grammar-color highlight" — distinct from
    // t.plain:true (inert punctuation, never reaches this renderer at all).
    // Treat it as no role rather than trying (and failing) to resolve --g-plain.
    let normalizedRole = t.role === 'plain' ? '' : normalizeRole(t.role);
    // A phrase-level teaching label (r-opinion, r-historisches-praesens…) is an
    // annotation, not a grammatical role — so it must not decide the headword
    // colour either. Fall back to the class the occurrence's own `type`
    // declares, which is what the span now shows. Without this the popup
    // neutralised the unmapped label to --ink-primary and rendered black.
    if (isPhraseLevelRole(normalizedRole)) normalizedRole = authoredClassRole(t) || '';
    // Proper names carry a word class, not a role (see nameOccurrenceRole).
    // Resolve the occurrence's real role from authored metadata so the popup
    // headword shows the same colour the page occurrence already displays.
    if (isWordClassRole(normalizedRole)) normalizedRole = nameOccurrenceRole(t) || normalizedRole;
    // OCCURRENCE ROLE IS THE COLOUR AUTHORITY.
    // The entry resolved by surface often carries no role of its own (most
    // dictionary entries store a word CLASS, not a sentence role), while the
    // clicked span was already painted by roleFor(). Colouring the popup from
    // the entry alone therefore fell through to --ink-primary and rendered the
    // headword in body-text black under a correct badge — 6,715 occurrences
    // across 165 chapters in the full sweep, e.g. "Interview" green r-object on
    // the page, black in its own popup.
    //
    // The occurrence's role is known at click time and is the more specific
    // fact, so it wins whenever the entry supplies nothing usable. Authored
    // entry roles still take precedence — this only fills a genuine void, and
    // so cannot override occurrence-bound metadata.
    if (!normalizedRole && t.occurrenceRole) normalizedRole = normalizeRole(t.occurrenceRole);
    let roleVar = normalizedRole ? normalizedRole.replace('r-', '') : '';
    if (roleVar && !CANONICAL_ROLES.has(roleVar)) roleVar = ''; // unmapped one-off label (e.g. checkpoint) → neutral, not broken
    const colorVar = roleVar ? (ROLE_COLOR_VAR[roleVar] || ('--g-' + roleVar)) : '--ink-primary';
    const color = 'var(' + colorVar + ')';
    const tint = roleVar ? 'color-mix(in srgb, var(' + colorVar + ') 10%, var(--bg-surface))' : 'var(--bg-elevated)';
    const deep = roleVar ? 'color-mix(in srgb, var(' + colorVar + ') 80%, #000)' : 'var(--ink-primary)';
    wordPop.style.setProperty('--pop-color', color);
    wordPop.style.setProperty('--pop-tint', tint);
    wordPop.style.setProperty('--pop-deep', deep);
    wordPop.innerHTML = '';

    // Close button
    const closeBtn = el('button', { class: 'wp-close', type: 'button', 'aria-label': 'Close', html: '&#10005;' });
    closeBtn.addEventListener('click', closeWordPop);
    wordPop.append(closeBtn);

    // Back/forward + breadcrumb trail — only appears once the user has
    // actually navigated (a single fresh popup stays uncluttered).
    if (wpHistory.length > 1) {
      const nav = el('div', { class: 'wp-nav', 'data-no-link': '1' });
      const backBtn = el('button', { class: 'wp-nav-btn', type: 'button', 'aria-label': 'Back', html: '&#8249;' });
      const fwdBtn = el('button', { class: 'wp-nav-btn', type: 'button', 'aria-label': 'Forward', html: '&#8250;' });
      if (wpIndex <= 0) backBtn.disabled = true;
      if (wpIndex >= wpHistory.length - 1) fwdBtn.disabled = true;
      backBtn.addEventListener('click', () => wpJumpTo(wpIndex - 1));
      fwdBtn.addEventListener('click', () => wpJumpTo(wpIndex + 1));
      const crumbs = el('div', { class: 'wp-breadcrumbs' });
      const trail = wpHistory.slice(0, wpIndex + 1);
      const shown = trail.length > 5 ? trail.slice(trail.length - 5) : trail;
      const skipped = trail.length - shown.length;
      if (skipped > 0) crumbs.appendChild(el('span', { class: 'wp-crumb-ellipsis' }, '\u2026'));
      shown.forEach((h, idx) => {
        const realIdx = skipped + idx;
        const isLast = realIdx === wpIndex;
        const crumb = el('span', { class: 'wp-crumb de' + (isLast ? ' is-current' : '') }, h.w);
        if (!isLast) crumb.addEventListener('click', () => wpJumpTo(realIdx));
        if (idx > 0) crumbs.appendChild(el('span', { class: 'wp-crumb-sep' }, '\u203a'));
        crumbs.appendChild(crumb);
      });
      nav.append(backBtn, fwdBtn, crumbs);
      wordPop.append(nav);
    }

    // Header: word (underlined) + pron on left, circular audio on right
    const audioBtn = el('button', { class: 'wp-audio', type: 'button', 'aria-label': 'Hear it', html: ICON.speaker });
    attachAudioSpeed(audioBtn, t.w, { spokenAs: t.spokenDe });
    Audio.gate(audioBtn, t.w);      // gating + identity stay keyed on the DISPLAYED token
    const headwordEl = el('div', { class: 'word-pop-de', style: 'color:' + color });
    headwordEl.appendChild(germanWordSpans(t.w));
    const wordBlock = el('div', { class: 'wp-word-block' }, headwordEl);
    if (t.pron) wordBlock.appendChild(el('div', { class: 'wp-pron', html: 'sounds like <em>' + t.pron + '</em>' + (t.ipa ? ' &middot; <span class="wp-ipa">[' + t.ipa + ']</span>' : '') }));
    else if (t.ipa) wordBlock.appendChild(el('div', { class: 'wp-pron' }, el('span', { class: 'wp-ipa' }, '[' + t.ipa + ']')));
    const header = el('div', { class: 'wp-header' }, wordBlock, audioBtn);

    // Big meaning + Hindi.
    // GRACEFUL DEGRADATION (systemic): a word can be clickable while the
    // curriculum holds no dictionary data for that exact surface. Authored
    // story/reading/listening/exercise tokens are rendered clickable by their
    // own renderer and never pass through resolveClickableWord's
    // hasMeaningfulEntry gate (only the auto-linkify sweep does), so a thin
    // token — proper name, one-off surface with no entry — reached this
    // renderer and printed the bare "—" placeholder: a popup with literally
    // nothing in it. Say so plainly instead. Never invent a meaning, never
    // suppress the word, and keep audio + pronunciation available.
    const hasEn = !!(t.en && t.en !== '—');
    const hasHi = !!(t.hi && t.hi !== '—');
    const hasOther = !!(t.ex || t.examples || t.why || t.conj || t.plural || t.compare || t.case || t.pron || t.ipa);
    const meaning = el('div', {});
    if (hasEn) meaning.appendChild(el('div', { class: 'wp-meaning' }, t.en));
    if (hasHi) meaning.appendChild(el('div', { class: 'wp-hi' }, t.hi));
    if (!hasEn && !hasHi) {
      meaning.appendChild(el('div', { class: 'wp-nodata' },
        hasOther ? 'No translation in the dictionary yet — the forms below are what we have.'
                 : 'This form is not in the dictionary yet. You can still hear it.'));
      meaning.appendChild(el('div', { class: 'wp-nodata-hi' },
        hasOther ? 'अनुवाद अभी दर्ज नहीं है — नीचे उपलब्ध जानकारी देखें।'
                 : 'यह रूप शब्दकोश में अभी दर्ज नहीं है। उच्चारण सुन सकते हैं।'));
    }

    // Badges: role (colored) + case
    const badges = el('div', { class: 'wp-badges' });
    badges.appendChild(el('span', { class: 'wp-badge role' },
      el('span', { class: 'dot', style: 'background:' + color }), (t.type || 'Word').split(' · ')[0]));
    if (t.case) {
      const caseBadge = el('span', { class: 'wp-badge' });
      caseBadge.appendChild(germanWordSpans(t.case));
      caseBadge.appendChild(document.createTextNode(' case'));
      badges.appendChild(caseBadge);
    }
    if (t.level) badges.appendChild(el('span', { class: 'wp-badge' }, t.level));

    wordPop.append(header, meaning, el('div', { class: 'wp-divider' }), badges);

    // Why this form?
    if (t.why) {
      const whyEl = el('div', { class: 'wp-why', html: t.why });
      linkifyPopupProse(whyEl);
      wordPop.append(
        el('div', { class: 'wp-section' },
          el('div', { class: 'wp-section-title' }, 'Why this form?'),
          whyEl));
    }

    // Shared paradigm-grid renderer: every morphology section teaches the
    // COMPLETE paradigm, never only the clicked surface form — the clicked
    // form is the entry point, the paradigm is the learning object. One
    //
    // ARCHITECTURAL INVARIANT (frozen): there must only ever be ONE shared
    // paradigm renderer in Klarweg — this function. Every paradigm type
    // (Comparison, Conjugation, Number, Declension, and any future one)
    // MUST call renderParadigmGrid() rather than hand-building its own grid
    // markup. Do not redesign this engine, add a second renderer, or add
    // paradigm-specific CSS (.wp-compare/.wp-compare-cell in chapter.css is
    // the only paradigm CSS — shared, never overridden per type). Only fix
    // genuine systemic bugs here, or populate missing dictionary data.
    // rendering pattern for Comparison (Positiv/Komparativ/Superlativ),
    // Conjugation (Infinitiv/Präsens/Präteritum/Perfekt), Number
    // (Singular/Plural), and any future paradigm — never duplicated.
    // Universal "current form" indicator (permanent paradigm standard, all
    // grids: Comparison, Conjugation, Number, Declension, future paradigms).
    // Two-tier signal: (1) active-cell ring + tint is the primary, coarse
    // anchor found in under two seconds; (2) fragment emphasis inside the
    // cell (weight/underline only, no color) is a secondary, closer-look
    // signal — never louder than the cell highlight. This IS the learner's
    // explanation of why the clicked form resolved here; no separate prose.
    function renderParadigmGrid(sectionTitle, cells) {
      const clickedSurface = (t.resolvedFromSurface || t.w || '').trim();
      const clickedKey = normWord(clickedSurface);
      // Which paradigm cell corresponds to the ACTUAL form clicked (not just
      // any cell containing the clicked fragment as a substring — a fragment
      // like "zurück" or "an" can legitimately appear in several tenses'
      // forms). The token's own authored type/tense metadata (e.g. "Verb ·
      // kommen (Präteritum)") disambiguates which one was really clicked.
      const typeStr = ((t.resolvedTense || t.type) || '').toLowerCase();
      const tenseHints = {
        'präsens': 'präsens', 'praesens': 'präsens', 'praesens)': 'präsens',
        'präteritum': 'präteritum', 'praeteritum': 'präteritum',
        'perfekt': 'perfekt', 'partizip': 'perfekt',
        'komparativ': 'comparative', 'superlativ': 'superlative', 'positiv': 'positive',
        'nominativ': 'nominativ', 'nom.': 'nominativ',
        'akkusativ': 'akkusativ', 'akk.': 'akkusativ',
        'dativ': 'dativ', 'dat.': 'dativ',
        'genitiv': 'genitiv', 'gen.': 'genitiv',
        'singular': 'singular', 'plural': 'plural'
      };
      let matchedTense = null;
      for (const key in tenseHints) { if (typeStr.indexOf(key) !== -1) { matchedTense = tenseHints[key]; break; } }
      // Person disambiguation (Präsens only) — parsed from the same authored
      // type metadata, independent channel from matchedTense since a person
      // cell's label ("Präsens · du") never equality-matches a bare tense
      // name. Only used to break ties when the same surface form appears in
      // more than one person cell (e.g. "schreibt" for both er and ihr).
      const personHints = { '(ich)': 'ich', '(du)': 'du', '(sie/sie)': 'sie', '(er)': 'er', '(sie)': 'er', '(es)': 'er', '(wir)': 'wir', '(ihr)': 'ihr',
        '1st person': 'ich', '2nd person': 'du', '3rd person': 'er', '1st plural': 'wir', '2nd plural': 'ihr', '3rd plural': 'sie' };
      let matchedPerson = null;
      for (const key in personHints) { if (typeStr.indexOf(key) !== -1) { matchedPerson = personHints[key]; break; } }
      const grid = el('div', { class: 'wp-compare', role: 'list' });
      let exactCellFound = false;
      cells.filter(c => c[1]).forEach(([label, form, hint]) => {
        const cleanForm = form.replace(/^(am|ist|hat)\s+/, '');
        const formWords = cleanForm.split(/\s+/);
        const isExactForm = normWord(cleanForm) === clickedKey;
        // An exact match only counts as THE current cell when it is
        // unambiguous — i.e. no other cell in this grid shares the identical
        // form (e.g. "der" is both Dativ and Genitiv for feminine) — or the
        // disambiguation hint from the token's authored type confirms this
        // specific cell. Otherwise defer to fragment/hint logic below so we
        // never mark two cells current for one clicked form.
        cells._exactCandidates = cells._exactCandidates || cells.filter(c => c[1] && normWord(c[1].replace(/^(am|ist|hat)\s+/, '')) === clickedKey).length;
        const labelMatchesHint = (matchedTense && normWord(label) === matchedTense) || (matchedPerson && new RegExp('\\u00b7\\s*' + matchedPerson + '$', 'i').test(label));
        const isExact = isExactForm && (cells._exactCandidates <= 1 || labelMatchesHint);
        if (isExactForm && (cells._exactCandidates <= 1 || labelMatchesHint)) exactCellFound = true;
        // Fragment match only counts when this cell's own label matches the
        // clicked token's disambiguated tense/form (or there's no ambiguity —
        // only one cell in the whole grid contains the fragment at all).
        const fragmentIdx = !isExact ? formWords.findIndex(w => normWord(w) === clickedKey) : -1;
        cells._fragmentCandidates = cells._fragmentCandidates || cells.filter(c => c[1] && c[1].split(/\s+/).some(w => normWord(w) === clickedKey)).length;
        const fragmentEligible = fragmentIdx !== -1 && (labelMatchesHint || cells._fragmentCandidates <= 1);
        const isCurrent = isExact || fragmentEligible;
        const formEl = el('div', { class: 'wp-compare-form de' });
        if (fragmentEligible) {
          formWords.forEach((w, i) => {
            if (i > 0) formEl.appendChild(document.createTextNode(' '));
            if (i === fragmentIdx) formEl.appendChild(el('span', { class: 'wp-compare-fragment' }, germanWordSpans(w)));
            else formEl.appendChild(germanWordSpans(w));
          });
        } else {
          formEl.appendChild(germanWordSpans(form));
        }
        const mini = el('button', { class: 'wp-mini-audio', type: 'button', 'aria-label': 'Hear ' + form, html: ICON.speaker });
        mini.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const audioText = form.trim();
          if (window.KW_speak) {
            window.KW_speak(audioText, { gender: 'female', rate: 1 });
          } else {
            Audio.speak(audioText);
          }
        });
        const cell = el('div', { class: 'wp-compare-cell' + (isCurrent ? ' is-current' : ''), role: 'listitem', 'aria-current': isCurrent ? 'true' : null },
          el('div', { class: 'wp-compare-label' }, label, hint ? ' ' : '', hint ? el('span', { class: 'wp-conj-hint' }, hint) : ''),
          el('div', { class: 'wp-compare-word-row' }, formEl, mini));
        grid.appendChild(cell);
      });
      if (!grid.children.length) return;
      // A paradigm must be ABOUT the word that was clicked. When no cell ends up
      // current AND the clicked surface appears nowhere in the grid, the table
      // was inherited from a different lexeme and tells the learner nothing
      // about the form in front of them — clicking the possessive determiner
      // "deinen" rendered the PERSONAL pronoun paradigm du / dich / dir, none of
      // which is a form of "dein". Frozen rule: Unknown > Guess, so show no
      // paradigm rather than another word's.
      //
      // Deliberately narrow — BOTH conditions must hold:
      //   · an active cell means the grid demonstrably covers this surface, so
      //     invariant entries keep their table ("Eis": Singular Eis / Plural Eis,
      //     0 active by correct abstention, surface present → kept);
      //   · surface-present-but-not-current keeps legitimate tables whose cited
      //     form differs from the clicked inflection ("am größten" vs "größte").
      var surfaceInGrid = cells.some(function (c) {
        if (!c || !c[1]) return false;
        var f = String(c[1]).replace(/^(am|ist|hat)\s+/, '');
        return normWord(f) === clickedKey || f.split(/\s+/).some(function (w) { return normWord(w) === clickedKey; });
      });
      // Backstop for inflected forms a paradigm legitimately does NOT cite:
      // "Kindern" is absent from Kind / Kinder, "kleineren" from klein /
      // kleiner / am kleinsten, yet both tables are genuinely about that word.
      // A shared stem proves the relationship without needing the exact form.
      // "deinen" against du / dich / dir shares only "d", which is why the
      // possessive fell through to the personal pronoun's table.
      var stemRelated = clickedKey.length < 3 || cells.some(function (c) {
        if (!c || !c[1]) return false;
        var f = normWord(String(c[1]).replace(/^(am|ist|hat)\s+/, '').split(/\s+/).pop());
        var n = Math.min(f.length, clickedKey.length), i = 0;
        while (i < n && f[i] === clickedKey[i]) i++;
        return i >= 3;
      });
      if (!exactCellFound && !grid.querySelector('.is-current') && !surfaceInGrid && !stemRelated) return;
      wordPop.append(
        el('div', { class: 'wp-section' },
          el('div', { class: 'wp-section-title' }, sectionTitle),
          grid));
    }

    // Adjective comparison — always Positiv/Komparativ/Superlativ.
    if (t.compare) {
      // Positive cell: prefer the AUTHORED compare.positive. t.lemma carries the
      // internal disambiguation key for same-spelling senses ("klar (adjektiv)",
      // which exists so the adjective can coexist with the bare adverb), and that
      // is metalanguage the learner must never see. compare.positive is present
      // on all 846 compare records and never differs from w, so this is a no-op
      // for every pre-existing entry and only fixes the qualified ones.
      const positivWord = (t.compare && t.compare.positive) || t.lemma || t.w;
      renderParadigmGrid('Comparison', [['Positive', positivWord], ['Comparative', t.compare.comparative], ['Superlative', t.compare.superlative]]);
    }

    // Verb conjugation — always Infinitiv/Präsens/Präteritum/Perfekt.
    // Präsens schema (backward compatible): conj.praesens is either a legacy
    // single string (3rd sg. canonical — old chapters/dictionary entries,
    // unmigrated) or a person-aware object { ich, du, er, wir, ihr, sie }
    // (new schema). When person-aware, expand into six cells so the exact
    // clicked sentence form (e.g. "schreibst") is always representable and
    // identifiable — never just the 3rd-person canonical form. Person is
    // disambiguated from the token's own authored type metadata (e.g.
    // "Verb · schreiben (du)"), reusing the SAME matchedTense mechanism
    // already used for tense/case disambiguation elsewhere in this
    // function — no second resolution system.
    if (t.conj) {
      const infinitive = t.lemma || t.w;
      const PERSON_LABEL = { ich: '1. Sg.', du: '2. Sg.', er: '3. Sg.', wir: '1. Pl.', ihr: '2. Pl.', sie: '3. Pl.' };
      if (t.conj.praesens && typeof t.conj.praesens === 'object') {
        const cells = [['Infinitive', infinitive]];
        ['ich', 'du', 'er', 'wir', 'ihr', 'sie'].forEach(p => {
          if (t.conj.praesens[p]) cells.push(['Präsens · ' + p, t.conj.praesens[p], PERSON_LABEL[p]]);
        });
        cells.push(['Präteritum', t.conj.praeteritum, 'simple past']);
        cells.push(['Perfekt', t.conj.perfekt, 'pres. perfect']);
        renderParadigmGrid('Conjugation', cells);
      } else {
        renderParadigmGrid('Conjugation', [
          ['Infinitive', infinitive],
          ['Präsens', t.conj.praesens, '3rd sg.'],
          ['Präteritum', t.conj.praeteritum, 'simple past'],
          ['Perfekt', t.conj.perfekt, 'pres. perfect']
        ]);
      }
    }

    // Noun number — always Singular/Plural (never just a plural badge).
    if (t.plural && t.plural !== '—' && (t.type || '').toLowerCase().indexOf('noun') !== -1) {
      const singular = t.lemma || t.w;
      renderParadigmGrid('Number', [['Singular', singular], ['Plural', t.plural]]);
    }

    // Article declension — always Nominativ/Akkusativ/Dativ/Genitiv for the
    // clicked article's own gender/number family. Pure closed-set German
    // grammar (identical in kind to the existing ARTICLE_LEMMA table used
    // for lemma resolution) — never fabricated, never per-word authored.
    const DEFINITE_ARTICLE_TABLE = {
      m: { Nominativ: 'der', Akkusativ: 'den', Dativ: 'dem', Genitiv: 'des' },
      f: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'der', Genitiv: 'der' },
      n: { Nominativ: 'das', Akkusativ: 'das', Dativ: 'dem', Genitiv: 'des' },
      pl: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'den', Genitiv: 'der' }
    };
    const INDEF_ARTICLE_TABLE = {
      m: { Nominativ: 'ein', Akkusativ: 'einen', Dativ: 'einem', Genitiv: 'eines' },
      f: { Nominativ: 'eine', Akkusativ: 'eine', Dativ: 'einer', Genitiv: 'einer' },
      n: { Nominativ: 'ein', Akkusativ: 'ein', Dativ: 'einem', Genitiv: 'eines' }
    };
    if (/^article/i.test(t.type || '')) {
      const wKey = normWord(t.w);
      // Disambiguate gender/number FAMILY from the token's own authored type
      // metadata (e.g. "Article · fem. dat.") before falling back to
      // first-match — same pattern already used for verb tense/comparison
      // disambiguation above. Without this, a form shared across genders
      // (e.g. "der": masc. nom., fem. dat., fem. gen., plural gen.) always
      // resolved to whichever family Object.keys() checks first (masculine),
      // ignoring the sentence's actual case/gender.
      const genderHint = /fem/i.test(t.type) ? 'f' : /masc/i.test(t.type) ? 'm' : /neut/i.test(t.type) ? 'n' : /plural|\bpl\b/i.test(t.type) ? 'pl' : null;
      const findFamily = (table) => {
        if (genderHint && table[genderHint] && Object.values(table[genderHint]).map(normWord).indexOf(wKey) !== -1) return genderHint;
        return Object.keys(table).find(g => Object.values(table[g]).map(normWord).indexOf(wKey) !== -1);
      };
      const defFamily = findFamily(DEFINITE_ARTICLE_TABLE);
      const indefFamily = !defFamily && findFamily(INDEF_ARTICLE_TABLE);
      const table = defFamily ? DEFINITE_ARTICLE_TABLE[defFamily] : (indefFamily ? INDEF_ARTICLE_TABLE[indefFamily] : null);
      if (table) renderParadigmGrid('Declension', Object.keys(table).map(k => [k, table[k]]));
    }

    // Personal pronoun declension — Nominativ/Akkusativ/Dativ. Only for
    // pronouns whose form is grammatically unambiguous (skips "sie"/"ihr",
    // which are genuinely ambiguous across person/number/formality — safer
    // to omit than to assert a single incorrect reading).
    const PRONOUN_DECLENSION = {
      ich: { Nominativ: 'ich', Akkusativ: 'mich', Dativ: 'mir' },
      du: { Nominativ: 'du', Akkusativ: 'dich', Dativ: 'dir' },
      er: { Nominativ: 'er', Akkusativ: 'ihn', Dativ: 'ihm' },
      es: { Nominativ: 'es', Akkusativ: 'es', Dativ: 'ihm' },
      wir: { Nominativ: 'wir', Akkusativ: 'uns', Dativ: 'uns' }
    };
    if (/^pronoun/i.test(t.type || '')) {
      const lemmaKey = normWord(t.lemma || t.w);
      const table = PRONOUN_DECLENSION[lemmaKey];
      if (table) renderParadigmGrid('Declension', Object.keys(table).map(k => [k, table[k]]));
    }

    // Advanced section (collapsed by default) — synonyms / opposites / collocations
    const adv = t.advanced;
    if (adv && (adv.synonyms || adv.opposites || adv.collocations)) {
      const details = el('details', { class: 'wp-advanced' });
      const summary = el('summary', { class: 'wp-advanced-summary' },
        el('span', {}, 'Advanced'),
        el('span', { class: 'wp-advanced-chevron', html: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6l4 4 4-4"/></svg>' }));
      details.appendChild(summary);
      const inner = el('div', { class: 'wp-advanced-inner' });
      const block = (label, items) => {
        if (!items || !items.length) return;
        const row = el('div', { class: 'wp-adv-block' },
          el('div', { class: 'wp-adv-label' }, label));
        const chips = el('div', { class: 'wp-adv-chips' });
        items.forEach(it => {
          const isDe = /[a-zäöüß]/i.test(it); // Synonyms/Opposites/Collocations are all German content
          const chip = el('span', { class: 'wp-adv-chip' + (isDe ? ' de' : '') });
          if (isDe) chip.appendChild(germanWordSpans(it)); else chip.textContent = it;
          chips.appendChild(chip);
        });
        row.appendChild(chips);
        inner.appendChild(row);
      };
      block('Synonyms', adv.synonyms);
      block('Opposites', adv.opposites);
      block('Collocations', adv.collocations);
      details.appendChild(inner);
      wordPop.append(el('div', { class: 'wp-section' }, details));
    }

    // Examples — supports either t.examples: [{de,en,hi}, ...] (preferred,
    // multiple) or legacy single t.ex/t.exEn/t.exHi fields (older chapters).
    const examples = (t.examples && t.examples.length) ? t.examples
      : (t.ex ? [{ de: t.ex, en: t.exEn, hi: t.exHi }] : []);
    if (t.ex2 && !t.examples) examples.push({ de: t.ex2, en: t.ex2En, hi: t.ex2Hi });
    if (examples.length) {
      const exWrap = el('div', { class: 'wp-section' },
        el('div', { class: 'wp-section-title' }, examples.length > 1 ? 'Examples' : 'Example'));
      examples.forEach(ex => {
        if (!ex || !ex.de) return;
        const exDe = el('div', { class: 'word-pop-ex de' });
        exDe.appendChild(germanWordSpans(ex.de, null, { surface: t.w, role: normalizedRole }));
        const one = el('div', { class: 'wp-example-item' }, exDe);
        if (ex.en) one.appendChild(el('div', { class: 'wp-ex-en' }, ex.en));
        if (ex.hi) one.appendChild(el('div', { class: 'wp-ex-hi' }, ex.hi));
        exWrap.appendChild(one);
      });
      wordPop.append(exWrap);
    }

    requestAnimationFrame(() => {
      wordPopBackdrop.classList.add('is-open');
      wordPop.classList.add('is-open');
    });
  }

  /* ============================================================
     AUTO-LINKIFY — make EVERY German word clickable (popup), not
     just the reading passage. A chapter-wide word index is built
     from the vocabulary + reading tokens; any German word found
     inside .de text (and vocab examples/headwords) becomes a
     clickable span that opens the same word popup. Words without
     index data still open a minimal popup with audio.
     ============================================================ */
  let WORDIDX = null;
  function capWord(s) { s = String(s || ''); return s.charAt(0).toUpperCase() + s.slice(1); }
  function normWord(w) {
    return String(w || '').toLowerCase()
      .replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '')
      .replace(/^['’-]+|['’-]+$/g, '')
      .trim();
  }
  // Extracts the base grammatical category from a "type" string like
  // "Verb · stellen (ich)" or "Noun · neut." → "verb"/"noun". Shared by the
  // homograph guard and every paradigm inheritance fallback below — one
  // implementation, used everywhere a class comparison is needed.
  function wordClassOf(type) {
    return String(type || '').split(' · ')[0].split(' (')[0].trim().toLowerCase();
  }
  function classesCompatible(a, b) {
    if (!a || !b) return true; // unknown class on either side — don't block
    return a === b;
  }
  // Target-side paradigm guard. The three inheritance fallbacks below already
  // check that the SOURCE lemma has the right class; they did not check the
  // entry being filled. When the clicked occurrence declares no class of its
  // own (every auto-linkified word — the sweep has no authored `type`), an
  // empty expectedClass let the check pass and a noun could inherit a verb's
  // conjugation: the noun "Liebe" (love) resolved through KW_INFLECTIONS to
  // the verb lemma "lieben" and rendered a Conjugation paradigm under a Noun
  // badge. The already-resolved entry knows its own class, so use it as the
  // fallback authority. Deliberately permissive: an unknown or generic
  // ('Word') class still does not block, matching classesCompatible.
  function entryAllowsParadigm(type, want) {
    const c = wordClassOf(type);
    if (!c || c === 'word') return true;
    return c === want;
  }
  function buildWordIndex() {
    WORDIDX = {};
    // TIER-AWARE MERGE (replaces first-writer-wins).
    //
    // Sources are inserted occurrence-first (tokens are richest: pron/why/case),
    // but AUTHORITY does not follow insertion order: the chapter's own vocab
    // entry is its lexical statement and must own the word CLASS. Encoding
    // precedence as loop order meant an occurrence token silently outranked the
    // chapter dictionary for that surface — and a typeless token could occupy
    // the slot and block the vocab entry entirely (measured: A2-9 `wie` lost its
    // authored `Conjunction · wie` class to the Global Lexicon's `Question word`
    // across 92 occurrences, with the QA finding total never moving because badge
    // and colour were wrong together).
    //
    // Field ownership, validated by KWASSERT.selfTest() before implementation:
    //   · occurrence tier owns OCC_FIELDS (pron/why/case/number/person/ex*)
    //   · vocab tier owns `type` (word class) over the global fallback
    //   · an occurrence that declares its own `type` still wins
    //   · absent vocab `type` invents nothing — it falls through to global
    // Additive otherwise: a later tier only fills fields still missing, so
    // richness survives while class authority is respected. Result is
    // insertion-order independent (proven for token/vocab/global orderings).
    const OCC_FIELDS = ['pron', 'why', 'case', 'number', 'person', 'ex', 'exEn', 'exHi'];
    const add = (key, data, tier) => {
      const k = normWord(key);
      if (!k || !data) return;
      const cur = WORDIDX[k];
      if (!cur) { WORDIDX[k] = Object.assign({}, data, { _tier: tier || 'occurrence' }); return; }
      // Additive fill — never overwrite a value a more specific tier supplied.
      Object.keys(data).forEach(f => { if (cur[f] === undefined) cur[f] = data[f]; });
      // Class ownership: vocab may claim `type` from the global fallback, but
      // never from an occurrence token that declared one.
      if (tier === 'vocab' && data.type !== undefined && cur._tier !== 'occurrence-typed') {
        cur.type = data.type;
      }
      if (tier === 'vocab' && cur._tier === 'occurrence') cur._tier = 'occurrence+vocab';
    };
    // OCCURRENCE IDENTITY GATE — surface match ≠ occurrence identity.
    //
    // The token arrays below are PER-OCCURRENCE authored data, but this index is
    // consulted cross-chapter by every auto-linked occurrence of the same
    // surface. So a token authored for occurrence A silently became occurrence
    // B's lexical identity: B2-10 authors `viel` once as `type:'Adverb'` and once
    // as `type:'Adjective'`, and five auto-linked `viel` occurrences (which have
    // no token of their own) inherited "Adjective" for the badge while the
    // colour came from the canonical lexicon's Adverb — badge and colour
    // describing two different occurrences.
    //
    // Where this chapter's own authored tokens DISAGREE about a surface's word
    // class, no single occurrence may speak for the others: the index withholds
    // the class and the canonical lexicon supplies identity instead. Tokens are
    // still authoritative when clicked directly in their own sentence —
    // resolveFullEntry always prefers `t` over any index lookup. Unanimous
    // surfaces are unaffected, so this costs nothing where the data is coherent.
    const _classes = Object.create(null);
    (function scanClasses(node, depth) {
      if (!node || depth > 10 || typeof node !== 'object') return;
      if (Array.isArray(node)) { node.forEach(n => scanClasses(n, depth + 1)); return; }
      if (typeof node.w === 'string' && !node.plain && node.type) {
        const k = normWord(node.w), c = wordClassOf(node.type);
        if (k && c) (_classes[k] = _classes[k] || new Set()).add(c);
      }
      Object.keys(node).forEach(key => scanClasses(node[key], depth + 1));
    })(C, 0);
    const classConflict = k => {
      const nk = normWord(k);
      const s = _classes[nk];
      if (!s || !s.size) return false;
      // (a) the chapter's own tokens disagree with each other — no occurrence may
      //     speak for the others (the original `viel` case).
      if (s.size > 1) return true;
      // (b) the single authored token disagrees with the CANONICAL lexicon for
      //     the same surface. This is the dominant leak (C-A, 12/16 traced):
      //     a chapter authors `an` once as `Separable prefix · Satzende` (class
      //     "separable prefix") for its own occurrence, and every unrelated
      //     prepositional `an` — "Erinnerungen an früher" — then took Verb for
      //     its badge while the colour stayed preposition-gold. Same for `mit`,
      //     `früh` (Adjective token vs Adverb·time canonical), `mehr`, `viele`.
      //     Occurrence-scoped data may inform ITS occurrence; it must never
      //     become the cross-chapter lexical identity of a different one.
      const canonSrc = (window.KW_GLOBAL_LEXICON || {})[nk] || (window.KW_STORY_LEX || {})[storyNorm(k)];
      const canon = canonSrc ? wordClassOf(canonSrc.type) : '';
      return !!canon && canon !== [...s][0];
    };
    // A token whose own surface starts with an opening quotation mark
    // („Was, "Wofür) marks the FIRST word of a quoted utterance inside a
    // longer sentence — its authored en/hi is deliberately just the
    // quote-opening fragment (e.g. en:'"What', continued word-by-word by
    // the tokens that follow), never a standalone definition. Structural,
    // not a text-content guess: the leading quote character on `w` is a
    // direct signal, not inference. resolveFullEntry still lets the token's
    // own fields win when clicked directly IN that sentence (t always
    // takes priority over any WORDIDX lookup there) — only the general
    // cross-chapter index (used by vocab headword resolution, recursive
    // links, and other occurrences of the same bare word) must not inherit
    // this fragment as if it were the word's real meaning.
    const isQuoteOpener = w => /^[„“"«]/.test(String(w || ''));
    // NON-DESTRUCTIVE CLASS WITHHOLDING.
    //
    // A conflicted surface used to be skipped entirely (`return`), which removed
    // it from the index — and a surface absent from WORDIDX with no
    // Global-Lexicon entry of its own resolves to NOTHING, so the word stopped
    // being clickable. That is why invalidating WORDIDX at lexicon load cost A1-1
    // 11 clickable words and orphaned "Herzlich willkommen" / "Ich bin Frau
    // Weber" (~22% curriculum-wide).
    //
    // The conflict is only ever about ONE field: which word CLASS this surface
    // may donate to unrelated occurrences. Everything else the entry carries —
    // en, hi, pron, why, ex/exEn/exHi, audio, lemma — is lexical identity that no
    // class disagreement invalidates. So index the entry and strip just `type`:
    // clickability, popup data and paradigm resolution survive, while the badge
    // falls through to the canonical lexicon instead of inheriting a contested
    // occurrence class. `role` is already stripped for all indexed tokens
    // (neutral colour outside their own passage).
    const indexable = t => {
      // A conflicted token is WITHHELD entirely rather than indexed without its
      // `type`. Indexing it typeless looked safer, but `add()` is
      // first-writer-wins and token sources are added BEFORE C.vocab — so the
      // typeless entry occupied the slot and BLOCKED the chapter's own vocab
      // entry from ever being indexed. Measured cost: A2-9 `wie` lost its
      // authored `Conjunction · wie` class and fell through to the Global
      // Lexicon's `Question word` across 92 occurrences. Returning null lets
      // the vocab entry claim the slot, which is the correct owner of lexical
      // identity.
      if (classConflict(t.w)) return null;
      const d = Object.assign({}, t);
      delete d.role;
      // A token that declares its own class keeps it against the vocab tier.
      d._tier = d.type !== undefined ? 'occurrence-typed' : 'occurrence';
      return d;
    };
    // Reading tokens are richest (pron, why, case) — add first so they win.
    ((C.reading && C.reading.tokens) || []).forEach(t => {
      if (t.plain || isQuoteOpener(t.w)) return;
      add(t.w, indexable(t), 'occurrence');
    });
    // Story dialogue tokens: equally rich per-occurrence data (pron, why,
    // form-specific ex/exEn/exHi), but previously never indexed here — a
    // clicked inflected form (e.g. "ging") only got its own sentence when
    // clicked directly inside the story; anywhere else (recursively, from
    // lede/grammar prose) it silently fell back to the lemma's generic vocab
    // example. Indexed second: reading tokens still win on overlap (kept
    // consistent with existing behavior), but story data now wins over the
    // generic vocab-card fallback for any form the vocab card doesn't cover.
    ((C.story && C.story.dialogue) || []).forEach(line => {
      (line.tokens || []).forEach(t => {
        if (t.plain || !t.w || isQuoteOpener(t.w)) return;
        add(t.w, indexable(t), 'occurrence');
      });
    });
    // Vocabulary entries (and each CONTENT word of a multiword headword —
    // never function words: those almost always carry their own distinct
    // meaning elsewhere and must not inherit a whole idiom's translation).
    (C.vocab || []).forEach(v => {
      // Some C1 entries authored examples as ex1/ex2:{de,en,hi} objects
      // instead of the flat ex/exEn/exHi (or examples[]) shape the popup
      // renders — normalize here so no vocab schema variant reaches
      // openWordPop as a raw object (would print "[object Object]").
      let examples = v.examples;
      if (!examples) {
        const fromNumbered = [v.ex1, v.ex2, v.ex3].filter(e => e && typeof e === 'object' && e.de);
        if (fromNumbered.length) examples = fromNumbered;
      }
      const data = { w: v.de, en: v.en, hi: v.hi, type: capWord(v.pos || 'Word'),
        ex: examples ? undefined : v.ex, exEn: examples ? undefined : v.exEn, exHi: examples ? undefined : v.exHi,
        ex2: (examples || v.examples) ? undefined : v.ex2, ex2En: v.ex2En, ex2Hi: v.ex2Hi,
        examples: examples, ipa: v.ipa, plural: v.plural, level: v.level,
        conj: v.conj, compare: v.compare, advanced: v.advanced };
      add(v.de, data, 'vocab');
      String(v.de).split(/\s+/).forEach(part => {
        if (FUNC_WORDS.has(normWord(part))) return; // don't let "auf"/"sich"/"der" inherit the phrase's meaning
        add(part, Object.assign({}, data, { w: part }), 'vocab');
      });
    });
  }
  // Short grammatical words that recur inside multiword vocab headwords
  // (phrasal verbs, fixed expressions) but always have their own real,
  // independent meaning — must never be indexed against the phrase's data.
  const FUNC_WORDS = new Set(('der die das den dem des ein eine einen einem einer eines ' +
    'ich du er sie es wir ihr man sich mich dich uns euch mir dir ihm ihnen ' +
    'und oder aber doch denn dass ob weil wenn als wie ' +
    'zu an auf in im mit für von bei um aus nach über unter vor hinter zwischen ohne gegen durch am zum zur vom beim ' +
    'nicht kein keine keinen keinem keiner').split(' '));
  // Fills gaps rather than replacing: later sources only supply fields the
  // earlier ones left undefined/empty, so a word never loses richer data
  // (e.g. conj/examples from the Global Lexicon) just because the current
  // chapter's own occurrence only defined a subset of fields.
  function mergeWordData() {
    const result = {};
    for (let i = 0; i < arguments.length; i++) {
      const src = arguments[i];
      if (!src) continue;
      for (const k in src) {
        if (result[k] === undefined || result[k] === null || result[k] === '') result[k] = src[k];
      }
    }
    return result;
  }

  /* ---------- Lemma resolution ----------
     Closed, finite grammatical paradigms (pronoun/article declension) are
     hand-tabled below — these are never "guessed", German has a fixed set
     of forms. Verb/noun/adjective inflection is NOT hand-tabled or rule-
     guessed: KW_INFLECTIONS (built at compile time from every chapter's own
     authored conj/plural/compare fields) is the single source, so every
     mapping traces back to real curriculum data, never an invented rule. */
  // PERSONAL pronouns only. Possessive DETERMINERS were removed from this table:
  // they are a different part of speech with their own authored dictionary
  // entries (`mein/meine`, `dein/deine`, `sein/seine`, `unser/unsere`,
  // `euer/eure`, `ihr/ihre` — each with its own Hindi), and because this table is
  // consulted at step 2 of resolveLemma it outranked the inflection index at
  // step 3, so clicking "mein" in "mein Buch" showed the PERSONAL pronoun
  // "I / ich" instead of "my". Every removed form now resolves through the index
  // to its possessive entry; coverage was added first so nothing became
  // unresolved. Role COLOURING is unaffected — possessives get their r-article
  // colour from a separate table (see the put(...'r-article'...) calls above),
  // not from here.
  //
  // Deliberately NOT changed: bare `sein` and bare `ihr` are dictionary
  // headwords (the verb "to be" and the pronoun "you plural"), so step 1 already
  // wins for them and their possessive readings remain genuinely ambiguous.
  // `seiner` keeps its existing mapping for the same reason.
  const PRONOUN_LEMMA = {
    mich:'ich', mir:'ich', dich:'du', dir:'du',
    ihn:'er', ihm:'er', sie:'sie', ihr:'sie', // 'ihr' also = informal-you-plural; surface stays ambiguous, lemma left as most common
    uns:'wir', euch:'ihr', ihnen:'sie'
  };
  const ARTICLE_LEMMA = {
    den:'der', dem:'der', des:'der',
    die:'die', der:'der', das:'das', // die/der ambiguous by design (fem./pl. vs masc.) — left as surface's most common reading
    einen:'ein', einem:'ein', eines:'ein', eine:'ein', einer:'ein'
  };
  function resolveLemma(surface) {
    const k = normWord(surface);
    if (!k) return { lemma: surface, confidence: 'none' };
    // "Already a lemma" must be judged against genuine authored dictionary
    // headwords (the Global Lexicon, compiled purely from vocab.de across
    // the curriculum) — NOT the chapter's WORDIDX, which also contains raw
    // story/dialogue surface occurrences ("ist", "ging", etc.) that are
    // real inflected forms, not lemmas, even though they're indexed there.
    if ((window.KW_GLOBAL_LEXICON || {})[k]) return { lemma: surface, confidence: 'exact' };
    // 2. Closed-set declension tables (pronouns/articles) — always correct by grammar, not a guess.
    if (ARTICLE_LEMMA[k]) return { lemma: ARTICLE_LEMMA[k], confidence: 'exact', method: 'article declension' };
    if (PRONOUN_LEMMA[k]) return { lemma: PRONOUN_LEMMA[k], confidence: 'exact', method: 'pronoun declension' };
    // 3. Data-derived inflection index (real conj/plural/compare forms authored in the curriculum itself).
    const infl = (window.KW_INFLECTIONS || {})[k];
    if (infl) return { lemma: infl, confidence: 'high', method: 'inflection index' };
    // 4. Compound-noun split: does the surface decompose into two known dictionary lemmas
    // (with a linking -s-/-n- interfix stripped)? Only trust an unambiguous split.
    if (k.length > 5) {
      for (let cut = 3; cut <= k.length - 3; cut++) {
        let head = k.slice(0, cut), tail = k.slice(cut);
        [head, head.replace(/[sn]$/, '')].forEach(h => {
          if ((WORDIDX[h] || (window.KW_GLOBAL_LEXICON||{})[h]) && (WORDIDX[tail] || (window.KW_GLOBAL_LEXICON||{})[tail])) {
            if (!resolveLemma._compoundHit) resolveLemma._compoundHit = { lemma: surface, confidence: 'medium', method: 'compound split', parts: [h, tail] };
          }
        });
      }
      if (resolveLemma._compoundHit) { const r = resolveLemma._compoundHit; resolveLemma._compoundHit = null; return r; }
    }
    // 5. Cannot resolve with confidence — report explicitly, never fake surface = lemma.
    return { lemma: null, confidence: 'unresolved' };
  }

  function lookupWord(surface, expectedClass) {
    if (!WORDIDX) buildWordIndex();
    // Resolution order: exact surface → lemma resolution (declension tables,
    // then the data-derived inflection index, then compound split) → local
    // chapter data for the resolved lemma → Global Lexicon for the resolved
    // lemma → function-word lexicon → fallback. All matching sources merge
    // (richest field wins), so a word never shows a thinner popup than the
    // curriculum's total knowledge of it supports.
    const surfaceKey = normWord(surface);
    let local = WORDIDX[surfaceKey];
    let glexDirect = (window.KW_GLOBAL_LEXICON || {})[surfaceKey];
    // Homograph guard: a direct surface match is only eligible for merging
    // if it's grammatically compatible with the clicked occurrence — e.g.
    // "stelle" (1st-person of the VERB "stellen", "to put") must never
    // inherit "plural: Stellen" from the unrelated NOUN "die Stelle"
    // ("position, job") just because they're spelled identically. Ignore an
    // incompatible entry COMPLETELY — never merge even one field from it.
    if (expectedClass) {
      if (local && !classesCompatible(wordClassOf(local.type), expectedClass)) local = null;
      if (glexDirect && !classesCompatible(wordClassOf(glexDirect.type), expectedClass)) glexDirect = null;
    }
    const res = resolveLemma(surface);
    const lemmaKey = res.lemma ? normWord(res.lemma) : null;
    const lemmaDiffers = lemmaKey && lemmaKey !== surfaceKey;
    let localLemma = lemmaDiffers ? WORDIDX[lemmaKey] : null;
    let glexLemma = lemmaDiffers ? (window.KW_GLOBAL_LEXICON || {})[lemmaKey] : null;
    // Homograph guard on the LEMMA paths too: a surface can be both an
    // independent word and an inflected form of an unrelated lemma (adverb
    // "bitte" vs. verb "bitten"; noun "Name" vs. a verb form). Without this,
    // an Adverb/Noun-typed occurrence inherits the verb lemma's conjugation
    // paradigm. Same guard already applied to local/glexDirect above — just
    // extended to the paths that lacked it; no new mechanism.
    if (expectedClass) {
      if (localLemma && !classesCompatible(wordClassOf(localLemma.type), expectedClass)) localLemma = null;
      if (glexLemma && !classesCompatible(wordClassOf(glexLemma.type), expectedClass)) glexLemma = null;
    }
    const lexRaw = (window.KW_STORY_LEX || {})[storyNorm(surface)];
    const lex = lexRaw ? { role: lexRaw.role, en: lexRaw.en, hi: lexRaw.hi, pron: lexRaw.pron, type: lexRaw.type } : null;
    // CASE-SENSITIVE NOUN OVERLAY. The dictionary is keyed by normWord(), i.e.
    // lowercased, so one key cannot hold both "kosten" (Verb, to cost) and
    // "Kosten" (Noun, costs) — whichever is written last wins and the other
    // becomes structurally unreachable. That is why capitalised nominalisations
    // and noun homographs (Essen, Wissen, Treffen, Unternehmen, Vorhaben …)
    // resolved only to their verb, and the orthography guard then correctly
    // refused to link them rather than show "to cost" for "die Kosten".
    // KW_GLOBAL_CAPS is keyed by the exact capitalised headword and consulted
    // ONLY for a capitalised surface. Its meanings are the curriculum's own
    // approved chapter-vocab glosses, not new content.
    const capRaw = /^[A-ZÄÖÜ]/.test(String(surface).trim())
      ? (window.KW_GLOBAL_CAPS || {})[String(surface).trim().replace(/[.,!?;:„“”‘’»«()]/g, '')]
      : null;
    // A caps entry may be a STRING instead of an object: "this capitalised
    // surface is an inflected form of that canonical headword". Grüßen is the
    // dative plural of der Gruß, Fällen of der Fall, Ausdrücken of der Ausdruck
    // — the lowercased key is occupied by the verb, so the index cannot reach
    // them, but they must NOT become duplicate entries either. Follow the
    // reference to the canonical entry and mark the surface as its inflection.
    let capHit = capRaw;
    if (typeof capRaw === 'string') {
      const canon = (window.KW_GLOBAL_LEXICON || {})[normWord(capRaw)] || WORDIDX[normWord(capRaw)];
      capHit = canon ? Object.assign({}, canon, { w: canon.w || capRaw, lemma: canon.w || capRaw }) : null;
    }
    const cap = capHit && (!expectedClass || classesCompatible('noun', expectedClass)) ? capHit : null;
    if (!local && !glexDirect && !localLemma && !glexLemma && !lex && !cap) return null;
    // Precedence: normally chapter-local vocab outranks the dictionary. But a
    // capitalised surface away from sentence start IS a noun in German, so when
    // every other source offers only a non-noun reading, the overlay's noun must
    // win — otherwise "Treffen" (das Treffen, the meeting) keeps reporting the
    // verb "to meet" purely because this chapter happens to teach the verb.
    const nonNoun = e => !!e && !/^noun/i.test(String(e.type || e.pos || ''));
    const capOutranks = cap && nonNoun(local) && nonNoun(glexDirect);
    const merged = capOutranks
      ? mergeWordData(cap, local, glexDirect, localLemma, glexLemma, lex)
      : mergeWordData(local, cap, glexDirect, localLemma, glexLemma, lex);
    merged.w = surface;
    if (lemmaDiffers && (localLemma || glexLemma)) { merged.lemma = res.lemma; merged.lemmaConfidence = res.confidence; }
    // Comparison-block completeness: a surface form can simultaneously be
    // its OWN standalone dictionary headword (e.g. "länger" is separately
    // authored as an adverb, "for longer") AND the comparative of another
    // adjective ("lang"). resolveLemma's exact-match check above correctly
    // treats the standalone headword as authoritative for meaning, but that
    // must never suppress the adjective's compare block — an adjective
    // popup always shows its full Positiv/Komparativ/Superlativ set. So
    // this always tries the inflection index too, independent of whether
    // resolveLemma already stopped short, and only FILLS the compare gap
    // (never overwrites an existing compare or the primary meaning fields).
    if (!merged.compare) {
      const inflLemma = (window.KW_INFLECTIONS || {})[surfaceKey];
      const inflLemmaKey = inflLemma ? normWord(inflLemma) : null;
      if (inflLemmaKey && inflLemmaKey !== surfaceKey) {
        const compareSrc = WORDIDX[inflLemmaKey] || (window.KW_GLOBAL_LEXICON || {})[inflLemmaKey];
        if (compareSrc && compareSrc.compare && classesCompatible(wordClassOf(compareSrc.type), 'adjective') && entryAllowsParadigm(merged.type, 'adjective')) {
          merged.compare = compareSrc.compare;
          if (!merged.lemma) { merged.lemma = inflLemma; merged.lemmaConfidence = 'high'; }
        }
      }
    }
    // Noun paradigm completeness — same architecture as the compare and conj
    // fallbacks: a thin direct entry for an inflected surface (e.g. a plural
    // indexed on its own) has no `plural` field, so the Number paradigm can
    // never render. Inherit it from the lemma entry only when missing; never
    // overwrite, never guess a plural form.
    if (!merged.plural) {
      const nounLemma = (window.KW_INFLECTIONS || {})[surfaceKey];
      const nounLemmaKey = nounLemma ? normWord(nounLemma) : null;
      if (nounLemmaKey && nounLemmaKey !== surfaceKey) {
        const pluralSrc = WORDIDX[nounLemmaKey] || (window.KW_GLOBAL_LEXICON || {})[nounLemmaKey];
        if (pluralSrc && pluralSrc.plural && classesCompatible(wordClassOf(pluralSrc.type), 'noun') && entryAllowsParadigm(merged.type, 'noun')) {
          merged.plural = pluralSrc.plural;
          if (!merged.lemma) { merged.lemma = nounLemma; merged.lemmaConfidence = 'high'; }
        }
      }
    }
    // Verb paradigm completeness — same architecture as the compare fallback
    // above, for conjugation. The inflection index (KW_INFLECTIONS) is the
    // SINGLE SOURCE OF TRUTH: every person form (ich/du/er/wir/ihr/sie) is
    // generated once at BUILD time (see the Global Lexicon build step) from
    // each verb's own authored infinitive + 3rd-person praesens — the
    // runtime never guesses morphology, stems, or endings. This is a pure
    // dictionary lookup, nothing else.
    if (!merged.conj && classesCompatible(expectedClass, 'verb') && entryAllowsParadigm(merged.type, 'verb')) {
      const verbLemma = (window.KW_INFLECTIONS || {})[surfaceKey];
      if (verbLemma && normWord(verbLemma) !== surfaceKey) {
        const vk = normWord(verbLemma);
        const conjSrc = WORDIDX[vk] || (window.KW_GLOBAL_LEXICON || {})[vk];
        if (conjSrc && conjSrc.conj && classesCompatible(wordClassOf(conjSrc.type), 'verb')) {
          merged.conj = conjSrc.conj;
          if (!merged.lemma) { merged.lemma = verbLemma; merged.lemmaConfidence = 'high'; }
        }
      }
    }
    return merged;
  }
  // Containers whose German text should become clickable.
  const LINK_TARGETS = '.de, .de-em, .vword-ex, .vword-de, .vword-tag';
  // Never linkify inside these (already interactive or would double-wrap).
  const LINK_EXCLUDE = 'button,a,summary,input,textarea,.word-pop,.builder-token,.builder-slot,.mcq-options,.quiz-stage,.reading-passage,.rw,.de-link,[data-no-link]';
  function linkifyDe(root) {
    if (!root || !root.querySelectorAll) return;
    const list = [];
    if (root.matches && root.matches(LINK_TARGETS)) list.push(root);
    root.querySelectorAll(LINK_TARGETS).forEach(e => list.push(e));
    list.forEach(elDe => {
      if (elDe.dataset.linked) return;
      if (elDe.closest(LINK_EXCLUDE)) return;
      if (elDe.parentElement && elDe.parentElement.closest(LINK_TARGETS)) return; // only outermost
      elDe.dataset.linked = '1';
      wrapWordsIn(elDe);
    });
  }
  // Permanent rule: a word is only made clickable if it resolves to a REAL,
  // meaningful dictionary entry (translation, examples, or forms) — never a
  // dead "—" placeholder. Brand/UI/exam labels (Goethe, Mini, A1, B1...)
  // never have dictionary data, so this keeps them correctly non-clickable
  // everywhere, automatically, without a per-word denylist.
  function hasMeaningfulEntry(hit) {
    return !!(hit && (hit.en || hit.hi || hit.ex || hit.examples || hit.conj || hit.plural || hit.compare));
  }
  // QA SEAM (read-only). The resolver lives in this closure, so no external
  // audit can ask "what would the app do with this surface?" without
  // re-implementing the resolution order — and a re-implementation drifts,
  // which is exactly how the earlier corpus audit came to overstate its gap
  // (it consulted only the two global tables and missed chapter-local vocab,
  // the article/pronoun tables and compound splitting). These are the REAL
  // functions, exported by reference. Nothing here mutates state, and no
  // product code path reads it.
  window.KW_resolve = {
    normWord,
    resolveLemma,
    lookupWord,
    resolveClickableWord,
    hasMeaningfulEntry,
    // Full verdict for one surface, following the exact order the renderer uses.
    // NOTE ON `gated`: the general prose sweep (wrapWordsIn) and the story-line
    // renderer both call resolveClickableWord with gated=FALSE; only one
    // specialised renderer passes true, which additionally applies the
    // capitalisation/homograph orthography guard. An audit must therefore
    // default to false or it invents "gaps" for ordinary lowercase verb forms
    // (mitmachst, zögert) that the real sweep links without complaint. Both
    // verdicts are returned so the difference is visible rather than assumed.
    probe(surface, gated, sentenceInitial) {
      const key = normWord(surface);
      const lemma = resolveLemma(surface);
      const hit = lookupWord(surface);
      const si = !!sentenceInitial;
      return {
        surface, key,
        lemma: lemma && lemma.lemma, lemmaConfidence: lemma && lemma.confidence, lemmaMethod: lemma && lemma.method,
        found: !!hit,
        meaningful: hasMeaningfulEntry(hit),
        clickable: !!resolveClickableWord(surface, gated === true, si),
        clickableUngated: !!resolveClickableWord(surface, false, si),
        clickableGated: !!resolveClickableWord(surface, true, si),
        en: hit && hit.en || null, hi: hit && hit.hi || null, type: hit && hit.type || null,
        fields: hit ? Object.keys(hit) : []
      };
    }
  };
  function wrapWordsIn(host) {
    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !/[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest(LINK_EXCLUDE)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const txt = node.nodeValue;
      const re = germanWordRegex();
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = re.exec(txt))) {
        if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
        const word = m[0];
        if (isHeadwordScaffold(word, node) || isCompositeFragment(txt, m.index, word, node)) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
        const hit = resolveClickableWord(word, false, isSentenceInitial(txt, m.index, node));
        if (!hit) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
        const span = document.createElement('span');
        const spanRole = roleFor(word, null, isSentenceInitial(txt, m.index, node));
        span.className = ('de-link ' + spanRole).trim();
        span.textContent = word;
        span.addEventListener('click', (ev) => {
          ev.stopPropagation();
          // Same rule as germanWordSpans: the popup headword must carry the
          // semantic colour this sweep already used to paint the word, or it
          // falls back to plain ink. Occurrence role, not a guess.
          let base = (spanRole && spanRole !== 'plain' && !hit.role) ? Object.assign({}, hit, { role: spanRole }) : hit;
          // Authored occurrence context: a container may declare the
          // grammatical reading of the words it holds (e.g. a grammar table's
          // citation-form noun example: data-type="Noun · masc. singular").
          // Needed wherever the surface alone is ambiguous — invariant-plural
          // nouns, shared article forms — and never inferred from position.
          const ctxEl = span.closest('[data-type]');
          if (ctxEl) base = Object.assign({}, base, { type: ctxEl.getAttribute('data-type') });
          openWordPop(ev, base);
        });
        frag.appendChild(span);
        last = m.index + word.length;
      }      if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }
  // Mixed-language prose (Hinglish coaching text, Hindi/English commentary
  // mixed with real German example words) must NOT be blindly wrapped like
  // .de/.de-em — most of its words are English/Hindi-transliteration, not
  // German. Gate every word through the real dictionary (lookupWord) and
  // only wrap actual hits, so Käse/schön/über etc. become clickable wherever
  // they're authored, wrapped or not, without ever mis-linking English text.
  // Language-aware gating (global rule): automatic German linking runs ONLY in
  // containers that hold German learner content or English explanation citing
  // German. Hindi/Hinglish explanatory prose is NOT German learner content —
  // a surface that merely matches the German dictionary (Hindi "mein" = मेरा,
  // "hi") must not become a German learner word there. Authored German inside
  // such prose still links via its own explicit markup, which never depends on
  // this sweep.
  const LINK_TARGETS_GATED = '.mistake-why, .grammar-text, .grammar-table-cell, .takeaway, .resource-desc, .lede';
  function linkifyGated(root) {
    if (!root || !root.querySelectorAll) return;
    const list = [];
    if (root.matches && root.matches(LINK_TARGETS_GATED)) list.push(root);
    root.querySelectorAll(LINK_TARGETS_GATED).forEach(e => list.push(e));
    list.forEach(elDe => {
      if (elDe.dataset.linkedGated) return;
      if (elDe.closest(LINK_EXCLUDE)) return;
      elDe.dataset.linkedGated = '1';
      gatedWrapWordsIn(elDe);
    });
  }
  function gatedWrapWordsIn(host) {
    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !/[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest(LINK_EXCLUDE + ',.de,.de-em,.de-link')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => node.parentNode.replaceChild(germanWordSpansGated(node.nodeValue), node));
  }
  // Colour-only tokenizer (no click handlers) for spots where the outer
  // element already owns click behaviour (e.g. MCQ answer buttons) and must
  // not have word-level click interception layered on top. Still guarantees
  // every German token gets a grammar-role class.
  function colorWordsIn(host) {
    if (!host) return;
    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode(n) { return (n.nodeValue && /[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const txt = node.nodeValue;
      const re = germanWordRegex();
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = re.exec(txt))) {
        if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
        const word = m[0];
        if (isHeadwordScaffold(word, node) || isCompositeFragment(txt, m.index, word, node)) { frag.appendChild(document.createTextNode(word)); last = m.index + word.length; continue; }
        const span = document.createElement('span');
        span.className = ('de-link ' + roleFor(word, null, isSentenceInitial(txt, m.index, node))).trim();
        span.textContent = word;
        frag.appendChild(span);
        last = m.index + word.length;
      }
      if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  // ---- Listening ----
  function bodyListening() {
    const L = C.listening;
    const wrap = el('div', {});
    // player
    let rate = 1, playing = false, fillTimer;
    const fill = el('div', { class: 'audio-track-fill' });
    const playBtn = el('button', { class: 'audio-play-btn', html: ICON.play, 'aria-label': 'Play' });
    const speed = el('div', { class: 'audio-speed' });
    [['1', 1], ['0.75', 0.75], ['0.5', 0.5]].forEach(([lbl, v], i) => {
      const b = el('button', { class: i === 0 ? 'is-active' : '' }, lbl + '×');
      b.addEventListener('click', () => { rate = v; $$('.audio-speed button', speed).forEach(x => x.classList.toggle('is-active', x === b)); });
      speed.appendChild(b);
    });
    function startFill(dur) { let p = 0; clearInterval(fillTimer); fillTimer = setInterval(() => { p += 100 / (dur * 10); fill.style.width = Math.min(p, 100) + '%'; if (p >= 100) clearInterval(fillTimer); }, 100); }
    playBtn.addEventListener('click', () => {
      if (playing) { Audio.stop(); return; }
      playing = true; playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>'; playBtn.setAttribute('aria-label', 'Pause');
      const lines = Array.isArray(L.dialogue) && L.dialogue.length
        ? L.dialogue.map(x => x && x.de).filter(Boolean)
        : [L.transcript];
      const est = (lines.join(' ').split(' ').length / 2) / rate;
      startFill(est);
      // Play the authored Listening dialogue lines in their stored order.
      // This maps directly to the existing L001/L002/... MP3 units instead of
      // re-splitting the transcript by punctuation.
      Audio.speakSequence(lines, rate,
        (p) => { fill.style.width = Math.round(p * 100) + '%'; },
        (completed) => { playing = false; playBtn.innerHTML = ICON.play; playBtn.setAttribute('aria-label', 'Play'); if (completed) fill.style.width = '100%'; clearInterval(fillTimer); });
    });
    const player = el('div', { class: 'audio-player' }, playBtn,
      el('div', { class: 'audio-track' }, el('div', { class: 'audio-track-bar' }, fill),
        el('div', { class: 'audio-track-meta' }, el('span', {}, 'Dialog · Familie'), el('span', {}, 'de-DE'))), speed);

    const transBtn = el('button', { class: 'btn btn-soft btn-small' }, 'Show transcript & translation');
    const transcriptText = el('div', { class: L.tokens ? 'reading-passage' : '', style: 'font-size:18px;line-height:1.7;margin-bottom:12px' });
    const transXrayState = { unit: null, panel: null };
    if (L.tokens) {
      // Authored token layer (same shape as reading.tokens / story dialogue
      // tokens) — Story-quality popups (why, ex, exEn) instead of the
      // dictionary-only auto-lookup below. Falls back to live tokenization
      // when a chapter has not yet authored L.tokens (non-blocking rollout).
      let prevNoSpaceAfter = true;
      L.tokens.forEach((t, i) => {
        // t.spaceBefore / t.noSpaceAfter are OPTIONAL per-token spacing
        // overrides for punctuation the character class cannot judge alone —
        // an OPENING straight quote (space before it, none after) and a spaced
        // ellipsis. With neither flag present this is the original rule
        // byte-for-byte, so every previously-authored token stream is
        // unaffected. Listening only; Story / Reading / vocab examples keep
        // their own copies of the original rule.
        const noSpaceBefore = prevNoSpaceAfter || (!t.spaceBefore && /^[.,!?;:)\]…”"'”]/.test(t.w));
        if (!noSpaceBefore) transcriptText.appendChild(document.createTextNode(' '));
        if (t.plain) { transcriptText.appendChild(document.createTextNode(t.w)); prevNoSpaceAfter = t.noSpaceAfter === true || (/[„«(]$/.test(t.w) && t.w.length <= 2); return; }
        const span = el('span', { class: 'rw de ' + tokenRole(t, L.tokens, i), dataset: { i: i } }, t.w);
        span.addEventListener('click', (e) => openWordPop(e, t, L.tokens));
        transcriptText.appendChild(span);
        prevNoSpaceAfter = t.noSpaceAfter === true || (/[„«(]$/.test(t.w) && t.w.length <= 2);
      });
    } else {
      const re = germanWordRegex();
      (L.transcript.match(/[^.!?]+[.!?]*/g) || [L.transcript]).forEach((sentText, gi) => {
        const unit = el('span', { class: 'sentence-inline-unit' });
        unit.appendChild(document.createTextNode(sentText));
        wrapWordsIn(unit);
        const xrayTokens = [];
        let m;
        re.lastIndex = 0;
        while ((m = re.exec(sentText))) xrayTokens.push({ w: m[0], role: authoredRoleFor(m[0]) || 'plain' });
        if (SENTENCE_XRAY_ENABLED && xrayTokens.length) {
          unit.classList.add('is-xray-enabled');
          unit.addEventListener('click', (e) => {
            if (e.target.closest('.de-link, .de, .rw')) return;
            toggleInlineSentenceXRay(transXrayState, unit, xrayTokens, null);
          });
        }
        transcriptText.appendChild(unit);
      });
    }
    const transcript = el('div', { class: 'reading-translation', style: 'margin-top:14px' },
      transcriptText,
      el('div', { class: 'muted', style: 'font-size:14.5px' }, L.translation));
    // English question glosses live behind the SAME reveal as the transcript:
    // the learner-facing Comprehension question and options stay German.
    const qGlosses = [];
    transBtn.addEventListener('click', () => { const v = transcript.classList.toggle('is-visible'); qGlosses.forEach(g => g.classList.toggle('is-visible', v)); transBtn.textContent = v ? 'Hide transcript' : 'Show transcript & translation'; });

    const playerCard = el('div', { class: 'card' }, el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, 'Listen first — answer after'), player, transcript);
    wrap.appendChild(playerCard);

    // questions — the single reveal control lives in this card's header, right
    // above the questions it glosses. Parked in the player card it sat several
    // screens above the English it revealed, so the reveal looked broken.
    const qCard = el('div', { class: 'card' });
    qCard.appendChild(el('div', { class: 'comprehension-head' },
      el('div', { class: 'eyebrow' }, 'Comprehension'), transBtn));
    L.questions.forEach((q, qi) => qCard.appendChild(mcqBlock(q, 'listen-' + qi, qGlosses)));
    wrap.appendChild(qCard);
    return wrap;
  }

  // reusable MCQ block
  function mcqBlock(q, key, glossSink) {
    const block = el('div', { class: 'exercise-block' });
    block.appendChild(el('div', { class: 'exercise-q', html: q.q }));
    // Optional English gloss (q.qEn), directly under the German question and
    // hidden until the section's "Show transcript & translation" reveal
    // collects it via glossSink. Per-option glosses (q.optionsEn) sit under
    // their own option below.
    if (glossSink && q.qEn) {
      const gloss = el('div', { class: 'exercise-q-en' }, q.qEn);
      glossSink.push(gloss);
      block.appendChild(gloss);
    }
    const opts = el('div', { class: 'mcq-options' });
    const feedback = el('div', { class: 'exercise-feedback' });
    let answered = false;
    q.options.forEach((opt, oi) => {
      const b = el('button', { class: 'mcq-option', type: 'button' },
        el('span', { class: 'mcq-key' }, String.fromCharCode(65 + oi)),
        el('span', { html: optionIsGerman(opt) ? '<span class="de">' + opt + '</span>' : opt }));
      colorWordsIn(b.querySelector('.de'));
      if (glossSink && q.optionsEn && q.optionsEn[oi]) {
        const og = el('span', { class: 'mcq-en' }, q.optionsEn[oi]);
        glossSink.push(og);
        b.lastChild.appendChild(og);
      }
      b.addEventListener('click', () => {
        if (answered) return; answered = true;
        $$('.mcq-option', opts).forEach(x => x.disabled = true);
        if (oi === q.answer) { b.classList.add('is-correct'); feedback.className = 'exercise-feedback ok'; feedback.textContent = '✓ ' + (q.explain || 'Correct!'); }
        else { b.classList.add('is-wrong'); opts.children[q.answer].classList.add('is-correct'); feedback.className = 'exercise-feedback no'; feedback.textContent = '✗ ' + (q.explain || 'Not quite.'); }
      });
      opts.appendChild(b);
    });
    block.append(opts, feedback);
    return block;
  }

  // ---- Speaking ----
  function bodySpeaking() {
    const wrap = el('div', {});
    // Recording needs a capture path: MediaRecorder (produces real audio) OR
    // speech recognition (produces a transcript). Either one makes the button
    // useful — Firefox has no recognition but records fine.
    const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && typeof MediaRecorder !== 'undefined');
    const supported = canRecord || ('webkitSpeechRecognition' in window) || ('SpeechRecognition' in window);
    C.speaking.forEach((p, i) => {
      const card = el('div', { class: 'card' });
      // Task/model split: when a card carries `task`, the learner sees the
      // situation and the model answer (`de`) stays hidden behind a reveal.
      // `de` remains the TTS text and the wordAccuracy target either way.
      const hasTask = !!p.task;
      const hearBtn = el('button', { class: 'btn btn-soft btn-small', onclick: () => { var fn = window.KW_speak || window.KW_playAudio; if (fn) fn(p.de); else Audio.speak(p.de, 0.9); } }, el('span', { html: ICON.speaker, style: 'width:14px;display:inline-flex' }), ' Hear model');
      const row = el('div', { style: 'display:flex;gap:10px;flex-wrap:wrap' }, hearBtn);
      card.append(
        el('div', { class: 'speak-prompt de' }, hasTask ? p.task : p.de),
        el('div', { class: 'speak-hint' }, hasTask ? (p.taskEn || '') : p.en),
        row);
      if (hasTask) {
        const model = el('div', { class: 'speak-model', style: 'display:none;margin-top:14px;padding:14px 16px;background:var(--elevated);border-radius:10px' },
          el('div', { class: 'de', style: 'font-family:var(--font-german);font-style:italic;font-weight:500' }, p.de),
          el('div', { class: 'speak-hint', style: 'margin-top:6px' }, p.en));
        const revealBtn = el('button', { class: 'btn btn-soft btn-small', onclick: () => {
          const open = model.style.display !== 'none';
          model.style.display = open ? 'none' : 'block';
          revealBtn.lastChild.textContent = open ? 'Show model answer' : 'Hide model answer';
        } }, 'Show model answer');
        row.appendChild(revealBtn);
        card.appendChild(model);
      }
      const micBtn = el('button', { class: 'mic-btn', style: 'margin-top:16px' }, el('span', { html: ICON.mic, style: 'width:18px;display:inline-flex' }), supported ? ' Record & check' : ' Mic not supported');
      const result = el('div', { class: 'speak-result' });
      if (!supported) {
        micBtn.disabled = true;
        card.append(micBtn, el('p', { class: 'muted', style: 'font-size:13px;margin-top:10px' }, 'This browser cannot open a microphone. Chrome, Edge or Safari on desktop can record here. You can still hear the model above.'));
        wrap.appendChild(card); return;
      }
      micBtn.addEventListener('click', () => {
        Promise.resolve(runRecognition(p, micBtn, result)).catch((err) => {
          micBtn.classList.remove('is-recording'); micBtn.lastChild.textContent = ' Record & check';
          result.innerHTML = '<p class="muted" style="font-size:14px">Something went wrong starting the recording (' + ((err && err.message) || 'unknown error') + '). Please try again.</p>';
          result.classList.add('is-visible');
        });
      });
      card.append(micBtn, result);
      wrap.appendChild(card);
    });
    return wrap;
  }

  /* Speaking check — microphone context + error classification -------------
     Chrome throws the SAME NotAllowedError when the learner denied the mic and
     when the page sits in an iframe that was not granted `allow="microphone"`,
     so a single "access was blocked" branch accused the learner of a denial
     they never made. These two helpers read the frame's permissions policy and
     the Permissions API state, which is what actually separates the cases. */
  function micEnv() {
    let policy = null;
    const fp = document.featurePolicy || document.permissionsPolicy;
    if (fp && typeof fp.allowsFeature === 'function') { try { policy = fp.allowsFeature('microphone'); } catch (e) { policy = null; } }
    let framed = false;
    try { framed = window.self !== window.top; } catch (e) { framed = true; }
    return { policy: policy, framed: framed, file: location.protocol === 'file:' };
  }
  function micPermissionState() {
    if (!navigator.permissions || !navigator.permissions.query) return Promise.resolve(null);
    try { return navigator.permissions.query({ name: 'microphone' }).then(s => { window.__kwPermState = s.state; return s.state; }).catch(() => null); }
    catch (e) { return Promise.resolve(null); }
  }

  /* Recording session ------------------------------------------------------
     The speaking check used to be recognition-only: the MediaStream from the
     permission pre-flight was released on the next line and no MediaRecorder
     existed anywhere, so nothing was ever recorded. A session now KEEPS the
     stream, records it, and only releases the tracks when it ends. */
  const MIC_MIMES = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/wav'];
  function micMime() {
    if (typeof MediaRecorder === 'undefined') return null;
    for (let i = 0; i < MIC_MIMES.length; i++) {
      try { if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(MIC_MIMES[i])) return MIC_MIMES[i]; } catch (e) {}
    }
    return '';   // browser default container
  }
  /* Diagnostics ------------------------------------------------------------
     Additive only — no speaking logic depends on anything below. With
     ?micdebug=1 in the URL the trace is also rendered on the page, so a real
     top-level-tab test can be read and copied without a console. */
  const MIC_DEBUG = /[?&]micdebug=1/.test(location.search);
  const micTrace = window.KW_micTrace = [];
  let micPanel = null;
  function micDebugPanel() {
    if (micPanel) return micPanel;
    const box = el('div', { style: 'position:fixed;left:12px;bottom:12px;width:min(430px,calc(100vw - 24px));max-height:52vh;z-index:99999;background:#0E0E10;color:#F4F3EE;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,0.32);font-family:var(--font-mono,monospace);font-size:11px;display:flex;flex-direction:column' });
    const copyBtn = el('button', { style: 'font:inherit;background:#1F4E4A;color:#fff;border:0;border-radius:6px;padding:5px 10px;cursor:pointer', onclick: () => {
        const txt = JSON.stringify({ env: micEnvReport(), trace: micTrace }, null, 2);
        const ta = el('textarea', { style: 'position:fixed;left:-9999px' }); ta.value = txt;
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        if (navigator.clipboard) { try { navigator.clipboard.writeText(txt); } catch (e) {} }
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1400);
      } }, 'Copy');
    const head = el('div', { style: 'display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(244,243,238,0.16)' },
      el('strong', { style: 'font-size:11px;letter-spacing:0.08em;text-transform:uppercase;flex:1' }, 'Mic trace'),
      copyBtn,
      el('button', { style: 'font:inherit;background:transparent;color:inherit;border:1px solid rgba(244,243,238,0.28);border-radius:6px;padding:5px 10px;cursor:pointer', onclick: () => box.remove() }, 'Close'));
    const body = el('div', { style: 'overflow:auto;padding:8px 12px 12px;line-height:1.55' });
    box.append(head, body);
    document.body.appendChild(box);
    micPanel = { box: box, body: body };
    const e = micEnvReport();
    body.appendChild(el('div', { style: 'color:#9A9AA0;white-space:pre-wrap;margin-bottom:8px' },
      'framed=' + e.framed + '  policy=' + e.framePolicyAllowsMicrophone + '  perm=' + e.permissionState +
      '\nSR=' + e.hasSpeechRecognition + '  gUM=' + e.hasGetUserMedia + '  MR=' + e.hasMediaRecorder + '  secure=' + e.secureContext));
    return micPanel;
  }
  function micEnvReport() {
    const env = micEnv();
    return { url: location.href, framed: env.framed, framePolicyAllowsMicrophone: env.policy, permissionState: window.__kwPermState || 'unread',
      secureContext: window.isSecureContext, hasGetUserMedia: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
      hasSpeechRecognition: !!(window.SpeechRecognition || window.webkitSpeechRecognition), hasMediaRecorder: typeof MediaRecorder !== 'undefined',
      mime: micMime(), ua: navigator.userAgent };
  }
  const micT0 = Date.now();
  function trace(step, ok, info) {
    const row = { t: Date.now() - micT0, step: step, ok: ok, info: info === undefined ? null : info };
    micTrace.push(row);
    if (micTrace.length > 200) micTrace.shift();
    if (MIC_DEBUG) {
      const p = micDebugPanel();
      p.body.appendChild(el('div', { style: 'white-space:pre-wrap;color:' + (ok ? '#8CE0C4' : '#FF9B84') },
        String(row.t).padStart(5, ' ') + 'ms  ' + (ok ? '✓' : '✗') + ' ' + step + (row.info != null ? '  ' + JSON.stringify(row.info) : '')));
      p.body.scrollTop = p.body.scrollHeight;
    }
  }

  // Read the permission state once at load so the panel header and the
  // classifier both have it available.
  micPermissionState();

  /* Visible acknowledgement --------------------------------------------------
     A click must always be felt, even when the browser refuses in 1ms. Two
     guarantees: the button holds its non-idle state for a perceptible floor,
     and the result panel animates + scrolls into view, so even an unchanged
     message still reads as a response. */
  const MIC_MIN_VISIBLE = 700;
  function micEnter(btn, label) {
    clearTimeout(btn._kwIdleTimer);
    btn._kwSince = Date.now();
    btn.classList.add('is-recording');
    btn.lastChild.textContent = label;
    btn.setAttribute('aria-pressed', 'true');
  }
  function micIdle(btn) {
    const go = () => { btn.classList.remove('is-recording'); btn.lastChild.textContent = ' Record & check'; btn.setAttribute('aria-pressed', 'false'); };
    const held = Date.now() - (btn._kwSince || 0);
    clearTimeout(btn._kwIdleTimer);
    if (held >= MIC_MIN_VISIBLE) go();
    else btn._kwIdleTimer = setTimeout(go, MIC_MIN_VISIBLE - held);
  }
  function micReveal(node, allowScroll) {
    if (!node) return;
    const still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!still && node.animate) {
      try { node.animate([{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }], { duration: 240, easing: 'cubic-bezier(0.16,1,0.3,1)' }); } catch (e) {}
    }
    // Scroll at most once per click, and only when the panel is genuinely out
    // of view — repeated calls would fight the learner's own scrolling.
    if (!allowScroll || node._kwScrolled) return;
    const r = node.getBoundingClientRect();
    if (r.height && r.top >= 0 && r.bottom <= innerHeight) return;
    node._kwScrolled = true;
    const y = Math.max(0, scrollY + r.top - Math.max(24, innerHeight * 0.3));
    try { window.scrollTo({ top: y, behavior: still ? 'auto' : 'smooth' }); } catch (e) { window.scrollTo(0, y); }
    trace('ui.scrolledIntoView', true, { panelTop: Math.round(r.top), viewport: innerHeight });
  }

  function releaseStream(s) {
    if (!s || !s.stream) return;
    try { s.stream.getTracks().forEach(t => t.stop()); } catch (e) {}
    s.stream = null;
    trace('stream.release', true);
  }

  // Render whatever the session actually produced: the recording (Blob) and,
  // when recognition returned a transcript, the existing word-match check.
  function renderSession(s) {
    if (s.reported) return;      // a classified permission/context message is already on screen
    const r = s.result;
    r.innerHTML = '';
    r.setAttribute('data-mic-state', s.heard ? 'result' : (s.blob ? 'recorded' : 'no-speech'));
    if (s.heard) {
      const acc = wordAccuracy(s.p.de, s.heard);
      trace('wordAccuracy', true, { target: s.p.de, heard: s.heard, percent: acc });
      r.append(
        el('div', { class: 'muted', style: 'font-size:12px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px' }, 'You said'),
        el('div', { class: 'speak-heard de' }, s.heard),
        el('div', { class: 'speak-scores' }, scoreCard(acc + '%', 'Word match', true)),
        el('p', { class: 'muted', style: 'font-size:13px;margin-top:12px' }, acc >= 70 ? 'Strong — your words matched the model closely.' : 'Keep going — try again and match each word.'));
    } else if (s.pending) {
      r.appendChild(el('p', { class: 'muted', style: 'font-size:14px;margin:0' }, 'Checking what you said…'));
    } else {
      let msg;
      if (s.recError === 'no-speech') msg = 'No speech was detected. Press Record & check and start speaking straight away.';
      else if (s.blob) msg = s.recError
        ? 'Your recording is below. The word check could not run (' + s.recError + ') — play it back and compare it with the model.'
        : 'Your recording is below. The speech check returned no words this time — play it back and compare with the model, or record again.';
      else if (s.recError === 'network') msg = 'The speech check could not reach the recognition service. Check your connection and press Record & check again.';
      else if (s.recError) msg = 'The speech check could not run (' + s.recError + '). Press Record & check to try again.';
      else msg = 'Nothing was recorded. Press Record & check and speak straight after the button reads “Listening”.';
      r.appendChild(el('p', { class: 'muted', style: 'font-size:14px;margin:0' }, msg));
    }
    if (s.blob) {
      if (r._kwUrl) { try { URL.revokeObjectURL(r._kwUrl); } catch (e) {} }
      r._kwUrl = URL.createObjectURL(s.blob);
      r.append(
        el('div', { class: 'muted', style: 'font-size:12px;letter-spacing:0.08em;text-transform:uppercase;margin:16px 0 8px' }, 'Your recording · ' + Math.round(s.blob.size / 1024) + ' KB'),
        el('audio', { controls: '', src: r._kwUrl, style: 'width:100%;max-width:420px;display:block' }));
    }
    r.classList.add('is-visible');
    trace('ui.render', true, { state: r.getAttribute('data-mic-state'), percent: (r.querySelector('.speak-score-val') || {}).textContent || null });
    micReveal(r, true);
  }

  function stopSession(btn) {
    const s = btn._kwSession;
    if (!s) return;
    btn._kwSession = null;
    clearTimeout(s.capTimer);
    micIdle(btn);
    s.pending = !!(s.rec && !s.recEnded);
    // stop(), never abort() — abort() throws away the utterance the learner
    // just spoke, which is why stopping used to produce no result at all.
    if (s.rec && !s.recEnded) { try { s.rec.stop(); trace('recognition.stop', true); } catch (e) { try { s.rec.abort(); } catch (e2) {} trace('recognition.stop', false, String(e && e.name || e)); } }
    // A transcript is enough to score. Render it NOW rather than waiting for the
    // recorder's onstop — that wait is what left the panel on "Listening…" when
    // MediaRecorder never fired onstop. The recorder re-renders later to add the
    // playback, and the word check never depends on it.
    if (s.heard) { s.pending = false; renderSession(s); }
    if (s.recorder && s.recorder.state !== 'inactive') {
      try { s.recorder.stop(); trace('recorder.stop', true, s.recorder.state); }
      catch (e) { trace('recorder.stop', false, String(e)); releaseStream(s); renderSession(s); }
    } else {
      releaseStream(s);
      renderSession(s);
    }
  }

  const EMBEDDED_MSG = 'This page is running inside an embedded preview, which is not granted microphone access — your browser permission is fine. Speaking checks are unavailable here.';

  // Turn a getUserMedia rejection into one honest class. Diagnostic only — it
  // never decides whether recognition runs.
  async function classifyMicError(err, env) {
    const name = (err && err.name) || 'Error';
    if (name === 'NotAllowedError' || name === 'SecurityError' || name === 'PermissionDeniedError') {
      const state = await micPermissionState();
      if (env.file) return { kind: 'context-blocked', msg: 'Pages opened straight from the file system are not allowed to use the microphone. Serve the chapter over http(s) and try again.' };
      if (state === 'granted') return { kind: 'context-blocked', msg: 'The microphone is allowed for this site, but this page view was not given access to it. ' + EMBEDDED_MSG, tab: true };
      if (env.framed && state !== 'denied') return { kind: 'context-blocked', msg: EMBEDDED_MSG, tab: true };
      return { kind: 'permission-denied', msg: 'Microphone permission was denied. Allow the microphone for this site — the icon in the address bar, or Site settings → Microphone — then press Record & check again.' };
    }
    if (name === 'NotFoundError' || name === 'DevicesNotFoundError' || name === 'OverconstrainedError') return { kind: 'no-device', msg: 'No microphone was found on this device. Connect one and try again.' };
    if (name === 'NotReadableError' || name === 'AbortError') return { kind: 'no-device', msg: 'The microphone is being used by another app, so this page could not open it. Close the other app and try again.' };
    return { kind: 'error', msg: 'The microphone could not be opened (' + name + '). Try again, or reload the chapter.' };
  }

  // Every click produces one of these visible states: recording / recorded /
  // result / permission denied / no microphone / this context cannot use the
  // microphone / unexpected error. `data-mic-state` carries the class.
  async function runRecognition(p, btn, result) {
    const say = (kind, msg, offerTab) => {
      result.innerHTML = '';
      result.setAttribute('data-mic-state', kind);
      result.appendChild(el('p', { class: 'muted', style: 'font-size:14px;margin:0' }, msg));
      // No new-tab affordance: the learner is never sent out of the page.
      result.classList.add('is-visible');
      trace('ui.' + kind, true);
      micReveal(result, true);
    };
    const setLabel = (t) => { btn.lastChild.textContent = t; };
    const reset = () => micIdle(btn);
    const env = micEnv();
    const EMBEDDED = EMBEDDED_MSG;

    // Click while recording = stop and check, never a dead button.
    if (btn._kwSession) { trace('click.stop', true, 'second click — manual stop'); stopSession(btn); return; }
    if (btn._kwBusy) { trace('click.ignored', false, 'busy'); return; }
    trace('click', true, { prompt: p.de });
    // Acknowledge the click before touching any API, so no failure path — not
    // even a synchronous throw — can leave the button looking untouched.
    result._kwScrolled = false;
    micEnter(btn, ' Listening…');

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

    /* ─────────────────────────────────────────────────────────────────────
       RECOGNITION FIRST — synchronously, in the click's own tick.

       This is byte-for-byte the old A1 mechanism: construct, set lang, start.
       No getUserMedia, no Permissions API, no await before it. Anything that
       could delay or gate the call now happens strictly AFTER recognition is
       already running, so the scoring path can never depend on it.
       ───────────────────────────────────────────────────────────────────── */
    result._kwGen = (result._kwGen || 0) + 1;
    const session = { p: p, btn: btn, result: result, gen: result._kwGen, stream: null, recorder: null, rec: null,
      heard: null, blob: null, recError: null, diag: null, reported: false, recEnded: false, pending: false, capTimer: null };
    const renderIfCurrent = () => { if (session.gen === result._kwGen && !btn._kwSession) renderSession(session); };
    const contextHint = () => (env.policy === false || env.framed)
      ? { kind: 'context-blocked', msg: EMBEDDED, tab: true }
      : { kind: 'permission-denied', msg: 'Microphone permission was denied. Allow the microphone for this site and press Record & check again.' };

    if (!SR) trace('recognition', false, 'SpeechRecognition not supported');
    else {
      try {
        const rec = new SR();
        trace('recognition.new', true);
        rec.lang = 'de-DE'; rec.interimResults = false; rec.maxAlternatives = 1;
        rec.onstart = () => trace('recognition.onstart', true);
        rec.onaudiostart = () => trace('recognition.audiostart', true);
        rec.onspeechstart = () => trace('recognition.speechstart', true);
        rec.onspeechend = () => trace('recognition.speechend', true);
        rec.onaudioend = () => trace('recognition.audioend', true);
        rec.onnomatch = () => trace('recognition.nomatch', false);
        rec.onresult = (e) => {
          session.heard = String(e.results[0][0].transcript || '').trim() || null;
          session.pending = false; session.recError = null;
          trace('recognition.result', true, session.heard);
          // Auto-finish: the score appears without a second click.
          if (btn._kwSession === session) stopSession(btn);
          else renderIfCurrent();
        };
        rec.onerror = (e) => {
          const code = (e && e.error) || 'unknown';
          trace('recognition.error', false, code);
          if (code === 'aborted') return;
          session.recError = code;
          if (code === 'not-allowed' || code === 'service-not-allowed') {
            const d = session.diag || contextHint();
            session.reported = true;
            say(d.kind, d.msg, d.tab);
          }
        };
        rec.onend = () => {
          session.recEnded = true; session.pending = false;
          trace('recognition.end', true);
          if (btn._kwSession === session) stopSession(btn);
          else if (!session.heard) renderIfCurrent();
        };
        rec.start();
        session.rec = rec;
        trace('recognition.start', true);
      } catch (e) { session.rec = null; trace('recognition.start', false, String(e && e.name || e)); }
    }

    if (session.rec) {
      // Recognition is live: open the session and show it immediately.
      btn._kwSession = session;
      micEnter(btn, ' Listening…');
      say('recording', 'Listening — say the sentence above. The check runs on its own once you stop speaking.');
      session.capTimer = setTimeout(() => { if (btn._kwSession === session) { trace('autostop', true, '20s cap'); stopSession(btn); } }, 20000);
      if (MIC_DEBUG) [1000, 3000, 10000].forEach(ms => setTimeout(() => trace('state@' + (ms / 1000) + 's', true,
        { button: btn.textContent.trim(), panel: result.getAttribute('data-mic-state'), sessionOpen: btn._kwSession === session }), ms));
      // Optional extra, strictly after the fact: a parallel recording the
      // learner can play back. Failure here is recorded and otherwise ignored.
      attachRecording(session, env);
      return;
    }

    /* Recognition unavailable (e.g. Firefox) — fall back to record-only so the
       button still does something useful. */
    trace('fallback', true, 'no recognition — record-only attempt');
    let diag = null, stream = null;
    if (window.isSecureContext === false) { trace('secureContext', false); diag = { kind: 'context-blocked', msg: 'The microphone needs a secure (https) page. Open this chapter over https and try again.' }; }
    else if (env.policy === false) { trace('framePolicy', false, 'microphone not allowed for this frame'); diag = { kind: 'context-blocked', msg: EMBEDDED, tab: true }; }
    else if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { trace('getUserMedia', false, 'API missing'); diag = { kind: 'unsupported', msg: 'This browser cannot open a microphone. Chrome, Edge or Safari on desktop can.' }; }
    else {
      btn._kwBusy = true; micEnter(btn, ' Opening mic…');
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const tr = stream.getAudioTracks()[0] || {};
        trace('getUserMedia', true, { tracks: stream.getAudioTracks().length, readyState: tr.readyState, muted: tr.muted, label: tr.label });
      } catch (err) {
        trace('getUserMedia', false, (err && err.name) || 'Error');
        diag = await classifyMicError(err, env);
      }
      btn._kwBusy = false;
    }
    if (!stream) { reset(); say(diag.kind, diag.msg, diag.tab); return; }
    session.stream = stream;
    if (!startRecorder(session)) { releaseStream(session); reset(); say('error', 'The microphone opened, but this browser could not record from it.'); return; }
    btn._kwSession = session;
    micEnter(btn, ' Stop & check');
    say('recording', 'Recording — say the sentence above, then press Stop & check.');
    session.capTimer = setTimeout(() => { if (btn._kwSession === session) { trace('autostop', true, '20s cap'); stopSession(btn); } }, 20000);
  }

  /* Optional playback recording. Runs alongside a live recognition session and
     never influences it: if the stream or recorder fails, the trace notes it
     and the speaking check proceeds exactly as before. */
  async function attachRecording(session, env) {
    if (env.policy === false || window.isSecureContext === false) { trace('recording.skip', false, 'context does not allow getUserMedia'); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') { trace('recording.skip', false, 'API unavailable'); return; }
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const tr = stream.getAudioTracks()[0] || {};
      trace('getUserMedia', true, { tracks: stream.getAudioTracks().length, readyState: tr.readyState, muted: tr.muted, label: tr.label });
    } catch (err) {
      trace('getUserMedia', false, (err && err.name) || 'Error');
      session.diag = await classifyMicError(err, env);
      return;
    }
    // The learner may have finished before the stream arrived.
    if (session.btn._kwSession !== session) { try { stream.getTracks().forEach(t => t.stop()); } catch (e) {} trace('recording.late', false, 'session already closed'); return; }
    session.stream = stream;
    if (!startRecorder(session)) releaseStream(session);
  }

  // Build + start a MediaRecorder on session.stream. Returns true if recording.
  function startRecorder(session) {
    const mime = micMime();
    if (mime === null) { trace('MediaRecorder', false, 'not supported in this browser'); return false; }
    const chunks = [];
    let rc;
    try {
      rc = mime ? new MediaRecorder(session.stream, { mimeType: mime }) : new MediaRecorder(session.stream);
      trace('recorder.new', true, mime || 'browser default');
    } catch (e) { trace('recorder.new', false, String(e && e.name || e)); return false; }
    rc.ondataavailable = (e) => { if (e.data && e.data.size) { chunks.push(e.data); trace('dataavailable', true, e.data.size); } };
    rc.onerror = (e) => trace('recorder.error', false, (e && e.error && e.error.name) || 'error');
    rc.onstop = () => {
      session.blob = chunks.length ? new Blob(chunks, { type: rc.mimeType || mime || 'audio/webm' }) : null;
      trace('blob', !!session.blob, session.blob ? session.blob.size : 0);
      releaseStream(session);
      if (session.gen === session.result._kwGen && session.btn._kwSession !== session) renderSession(session);
    };
    try { rc.start(1000); trace('recorder.start', true, rc.state); }
    catch (e) { trace('recorder.start', false, String(e && e.name || e)); return false; }
    session.recorder = rc;
    return true;
  }

  /* Standalone-page probe: runs the whole pipeline for `ms` milliseconds and
     returns a step-by-step report. Call KW_micDiagnose() from the console of a
     real browser tab — an embedded preview reports the policy block at step 1. */
  window.KW_micDiagnose = function (ms) {
    const R = { secureContext: window.isSecureContext, framed: micEnv().framed, framePolicyAllowsMic: micEnv().policy, protocol: location.protocol,
      hasMediaDevices: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia), hasMediaRecorder: typeof MediaRecorder !== 'undefined',
      mimeSelected: micMime(), hasSpeechRecognition: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
      getUserMediaCalled: false, getUserMediaResolved: false, trackCount: 0, trackState: null, recorderConstructed: false,
      recorderStarted: false, recorderStateAfterStart: null, dataavailableFired: false, recorderStopped: false, blobCreated: false, blobBytes: 0, error: null };
    if (!R.hasMediaDevices) { R.error = 'getUserMedia unavailable'; return Promise.resolve(R); }
    if (R.framePolicyAllowsMic === false) { R.error = 'frame permissions policy denies microphone'; return Promise.resolve(R); }
    R.getUserMediaCalled = true;
    return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      R.getUserMediaResolved = true;
      const tr = stream.getAudioTracks()[0] || {};
      R.trackCount = stream.getAudioTracks().length; R.trackState = tr.readyState + (tr.muted ? ' (muted)' : '');
      if (!R.hasMediaRecorder) { stream.getTracks().forEach(t => t.stop()); R.error = 'MediaRecorder unavailable'; return R; }
      return new Promise(function (done) {
        let rc;
        try { rc = R.mimeSelected ? new MediaRecorder(stream, { mimeType: R.mimeSelected }) : new MediaRecorder(stream); R.recorderConstructed = true; }
        catch (e) { R.error = 'MediaRecorder: ' + (e && e.name); stream.getTracks().forEach(t => t.stop()); return done(R); }
        const chunks = [];
        rc.ondataavailable = (e) => { if (e.data && e.data.size) { R.dataavailableFired = true; chunks.push(e.data); } };
        rc.onstop = () => {
          R.recorderStopped = true;
          const blob = chunks.length ? new Blob(chunks, { type: rc.mimeType || 'audio/webm' }) : null;
          R.blobCreated = !!blob; R.blobBytes = blob ? blob.size : 0;
          stream.getTracks().forEach(t => t.stop());
          done(R);
        };
        try { rc.start(500); R.recorderStarted = true; R.recorderStateAfterStart = rc.state; }
        catch (e) { R.error = 'start: ' + (e && e.name); stream.getTracks().forEach(t => t.stop()); return done(R); }
        setTimeout(() => { try { rc.stop(); } catch (e) { R.error = 'stop: ' + (e && e.name); done(R); } }, ms || 1500);
      });
    }).catch(function (err) { R.error = (err && err.name) || String(err); return R; });
  };
  function scoreCard(val, label, real) {
    return el('div', { class: 'speak-score' },
      el('div', { class: 'speak-score-val', style: real ? '' : 'color:var(--ink-quaternary)' }, val),
      el('div', { class: 'speak-score-label' }, label, real ? null : el('span', { class: 'preview-tag' }, 'soon')));
  }
  function wordAccuracy(target, heard) {
    const norm = s => s.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
    const t = norm(target), h = new Set(norm(heard));
    if (!t.length) return 0;
    const hit = t.filter(w => h.has(w)).length;
    return Math.round((hit / t.length) * 100);
  }

  // ---- Writing ----
  function bodyWriting() {
    const W = C.writing;
    const card = el('div', { class: 'card' });
    card.append(
      el('p', { class: 'lede', style: 'font-size:16px;margin-bottom:8px' }, W.prompt),
      el('div', { class: 'muted', style: 'font-size:13.5px;margin-bottom:16px' }, 'Starters: ', ...W.starters.map(s => el('span', { class: 'de', style: 'margin-right:14px' }, s))));
    const ta = el('textarea', { class: 'writing-area', placeholder: W.placeholder || '' });
    const wc = el('span', {}, '0 words'); const cc = el('span', {}, '0 characters');
    const meta = el('div', { class: 'writing-meta' }, wc, cc);
    const fbBtn = el('button', { class: 'btn btn-soft btn-small', style: 'margin-top:14px' }, 'Check my grammar');
    const fb = el('div', { class: 'writing-feedback', style: 'display:none' });
    ta.addEventListener('input', () => {
      const words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      wc.textContent = words + ' words'; cc.textContent = ta.value.length + ' characters';
    });
    fbBtn.addEventListener('click', async () => {
      const text = ta.value.trim();
      if (!text) { fb.innerHTML = '<span class="muted">Write a few sentences first, then I\'ll check them.</span>'; fb.style.display = 'block'; return; }
      const words = text.split(/\s+/).length;

      fb.style.display = 'block';
      fb.innerHTML = '<span class="writing-loading">Checking your German…</span>';
      fbBtn.disabled = true;

      // Quick local structural read (instant, always shown)
      const lines = text.split(/\n|\./).map(s => s.trim()).filter(Boolean);
      const startsOk = lines.filter(l => /^(der|die|das)\b/i.test(l)).length;
      const structural = '• ' + words + ' words (target ≥ ' + W.minWords + '). ' + (words >= W.minWords ? '✓' : 'Add a little more.') +
        '<br>• ' + startsOk + ' of ' + lines.length + ' sentence(s) start with der/die/das.';

      try {
        if (!window.claude || typeof window.claude.complete !== 'function' || !C.writingTutorPrompt) throw new Error('no-api');
        const prompt = C.writingTutorPrompt.replace('{{TEXT}}', function () { return text; });
        const out = await window.claude.complete({ messages: [{ role: 'user', content: prompt }] });
        const clean = (out || '').replace(/```html?/gi, '').replace(/```/g, '').trim();
        fb.innerHTML =
          '<div class="wf-head"><b>Grammar feedback</b> <span class="wf-ai-tag">AI tutor</span></div>' +
          '<div class="wf-ai">' + (clean || 'No feedback returned — try again.') + '</div>' +
          '<div class="wf-struct">' + structural + '</div>';
      } catch (err) {
        // Graceful fallback: structural check only
        fb.innerHTML =
          '<div class="wf-head"><b>Structural check</b> <span class="preview-tag">AI tutor unavailable</span></div>' +
          '<div class="wf-struct">' + structural + '</div>' +
          '<span class="muted" style="display:block;margin-top:8px">Live grammar feedback couldn\'t load right now. The checks above are still accurate — try again in a moment.</span>';
      } finally {
        fbBtn.disabled = false;
      }
    });
    card.append(ta, meta, fbBtn, fb);
    return card;
  }

  // ---- Exercises ----
  // An MCQ option is only German learner content when the chapter authors it as
  // German. The renderers used to GUESS — "starts with a capital and is at most
  // three words" — which wrapped English answer options in `.de` and auto-linked
  // them: A1-2's Listening options "The consonant ch", "The letter B", "The
  // umlaut ü" became clickable German, and `The` opened a der/die/das declension.
  // Reuses AUTHORED_GERMAN(), the same language gate as prose, so the rule is
  // "explicitly authored German is interactive; dictionary coincidence is not".
  function optionIsGerman(opt) {
    const words = String(opt || '').match(/[A-Za-z\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df][A-Za-z\u00e4\u00f6\u00fc\u00df-]*/g);
    if (!words || !words.length) return false;
    return words.every(w => AUTHORED_GERMAN().has(storyNorm(w)));
  }
  // Authored exercise fields beyond the four standard widgets. Keys are listed
  // EXPLICITLY (never inferred from the data) so an unrecognised field is left
  // alone rather than guessed at.
  //  · PROMPT_EXERCISE_KEYS  -> {title, prompt, answer, explain}; answer may be
  //    a string or an ordered array. Self-check: prompt, then reveal.
  //  · ITEMS_EXERCISE_KEYS   -> {title, items:[{phrase, <verdict>}]}; the verdict
  //    field differs per exercise, so it is named per key.
  const PROMPT_EXERCISE_KEYS = ['errorCorrection', 'transform', 'transform1', 'transform2',
    'transformActiveToPassive', 'transformPassiveToActive', 'nominativToDativ', 'akkusativToDativ',
    'positiveToComparative', 'comparativeToSuperlative', 'praesensToFutur', 'umZuToDamit',
    'combineSentences', 'perfektToPlusquamperfekt', 'chooseConjunction', 'muessenToBrauchen',
    'genitivFill', 'dativToGenitiv', 'timelineOrdering'];
  const ITEMS_EXERCISE_KEYS = { classification: 'answer', classifyAkkDat: 'answer', identifyNNoun: 'isNNoun' };

  // {title, wrong, right, explain} — reuses the grammar "Common mistakes" row so
  // the ✕/✓ marks and the scoped `.mistake-text .strike` rule apply.
  function errorCorrectionBlock(it) {
    const block = el('div', { class: 'exercise-block' });
    block.appendChild(el('div', { class: 'mistake-row' },
      el('div', { style: 'display:flex;gap:10px;align-items:center' },
        el('span', { class: 'mistake-mark wrong' }, '✕'),
        el('span', { class: 'mistake-text' }, mistakeSide('de strike', it.wrong)))));
    const fb = el('div', { class: 'exercise-feedback' });
    const btn = el('button', { class: 'btn btn-primary btn-small', type: 'button' }, 'Show correction');
    btn.addEventListener('click', () => {
      fb.className = 'exercise-feedback ok';
      fb.innerHTML = '';
      fb.appendChild(el('div', { style: 'display:flex;gap:10px;align-items:center' },
        el('span', { class: 'mistake-mark right' }, '✓'),
        el('span', { class: 'mistake-text' }, mistakeSide('de', it.right))));
      if (it.explain) fb.appendChild(el('div', { class: 'muted', style: 'font-size:12px;margin-top:6px;padding-left:32px' }, it.explain));
      btn.disabled = true;
    });
    block.append(btn, fb);
    return block;
  }

  // {title, prompt, answer, explain} — prompt shown, answer revealed on demand.
  function promptExerciseBlock(it) {
    const block = el('div', { class: 'exercise-block' });
    block.appendChild(el('div', { class: 'exercise-q' }, it.prompt));
    const fb = el('div', { class: 'exercise-feedback' });
    const btn = el('button', { class: 'btn btn-primary btn-small', type: 'button' }, 'Show answer');
    btn.addEventListener('click', () => {
      fb.className = 'exercise-feedback ok';
      fb.innerHTML = '';
      const ans = Array.isArray(it.answer) ? it.answer.join(' → ') : it.answer;
      fb.appendChild(el('div', { style: 'display:flex;gap:10px;align-items:center' },
        el('span', { class: 'mistake-mark right' }, '✓'),
        el('span', { class: 'mistake-text' }, mistakeSide('de', ans))));
      if (it.explain) fb.appendChild(el('div', { class: 'muted', style: 'font-size:12px;margin-top:6px;padding-left:32px' }, it.explain));
      btn.disabled = true;
    });
    block.append(btn, fb);
    return block;
  }

  // {title, items:[{phrase, <verdictField>}]} — classify each phrase, reveal all.
  function itemsExerciseBlock(ex, verdictField) {
    const block = el('div', { class: 'exercise-block' });
    const rows = [];
    (ex.items || []).forEach((item) => {
      const val = item[verdictField];
      const label = typeof val === 'boolean' ? (val ? 'Ja' : 'Nein') : String(val);
      const verdict = el('span', { class: 'muted', style: 'font-size:13px' }, '—');
      rows.push({ verdict, label });
      block.appendChild(el('div', { class: 'mistake-row' },
        el('div', { style: 'display:flex;gap:12px;align-items:center;justify-content:space-between' },
          el('span', { class: 'mistake-text' }, mistakeSide('de', item.phrase)), verdict)));
    });
    const btn = el('button', { class: 'btn btn-primary btn-small', type: 'button' }, 'Show answers');
    btn.addEventListener('click', () => {
      rows.forEach((r) => { r.verdict.className = 'ex-verdict'; r.verdict.textContent = r.label; });
      btn.disabled = true;
    });
    block.appendChild(btn);
    return block;
  }

  function bodyExercises() {
    const E = C.exercises;
    const wrap = el('div', {});

    // 1. MCQ
    const c1 = el('div', { class: 'card' }, el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, '01 · Multiple choice'), mcqBlock(E.mcq, 'ex-mcq'));
    wrap.appendChild(c1);

    // 2. Gap fill
    const c2 = el('div', { class: 'card' }); c2.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, '02 · Fill the gap'));
    const gapSent = el('div', { class: 'gap-sentence' });
    const inputs = [];
    E.gap.sentence.forEach((part, i) => {
      gapSent.appendChild(germanWordSpansGated(part));
      if (i < E.gap.gaps.length) { const inp = el('input', { class: 'gap-input', type: 'text', size: '5' }); inputs.push(inp); gapSent.appendChild(inp); }
    });
    const gapFb = el('div', { class: 'exercise-feedback' });
    const gapCheck = el('button', { class: 'btn btn-primary btn-small', style: 'margin-top:16px' }, 'Check');
    gapCheck.addEventListener('click', () => {
      let allOk = true;
      inputs.forEach((inp, i) => {
        const ok = E.gap.gaps[i].accepts.concat(E.gap.gaps[i].answer).map(s => s.toLowerCase()).includes(inp.value.trim().toLowerCase());
        inp.classList.toggle('is-correct', ok); inp.classList.toggle('is-wrong', !ok); if (!ok) allOk = false;
      });
      gapFb.className = 'exercise-feedback ' + (allOk ? 'ok' : 'no');
      gapFb.textContent = allOk ? '✓ ' + E.gap.explain : '✗ ' + E.gap.explain;
    });
    c2.append(gapSent, gapCheck, gapFb); wrap.appendChild(c2);

    // 3. Matching
    const c3 = el('div', { class: 'card' }); c3.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:6px' }, '03 · Match'));
    c3.appendChild(el('p', { class: 'exercise-q' }, E.match.q));
    c3.appendChild(matchWidget(E.match)); wrap.appendChild(c3);

    // 4. Sentence builder
    const c4 = el('div', { class: 'card' }); c4.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:6px' }, '04 · Build the sentence'));
    c4.appendChild(el('p', { class: 'builder-target' }, E.builder.target));
    c4.appendChild(builderWidget(E.builder)); wrap.appendChild(c4);

    // 5. Checkpoint error-correction set — {wrong, right, ref} pairs authored
    // only by checkpoint chapters, revealed one at a time.
    if (Array.isArray(C.errorCorrectionSet) && C.errorCorrectionSet.length) {
      const c5 = el('div', { class: 'card' });
      c5.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, '05 · Error correction · ' + C.errorCorrectionSet.length + ' sentences'));
      C.errorCorrectionSet.forEach((it) => {
        // Same wrapper structure as the grammar "Common mistakes" rows, so the
        // ✕/✓ marks and the scoped `.mistake-text .strike` rule both apply.
        const block = el('div', { class: 'exercise-block' });
        block.appendChild(el('div', { class: 'mistake-row' },
          el('div', { style: 'display:flex;gap:10px;align-items:center' },
            el('span', { class: 'mistake-mark wrong' }, '✕'),
            el('span', { class: 'mistake-text' }, mistakeSide('de strike', it.wrong)))));
        const fb = el('div', { class: 'exercise-feedback' });
        const btn = el('button', { class: 'btn btn-primary btn-small', type: 'button' }, 'Show correction');
        btn.addEventListener('click', () => {
          fb.className = 'exercise-feedback ok';
          fb.innerHTML = '';
          fb.appendChild(el('div', { style: 'display:flex;gap:10px;align-items:center' },
            el('span', { class: 'mistake-mark right' }, '✓'),
            el('span', { class: 'mistake-text' }, mistakeSide('de', it.right))));
          if (it.ref) fb.appendChild(el('div', { class: 'muted', style: 'font-size:12px;margin-top:6px;padding-left:32px' }, it.ref));
          btn.disabled = true;
        });
        block.append(btn, fb);
        c5.appendChild(block);
      });
      wrap.appendChild(c5);
    }

    // 6. Authored per-chapter exercises (single objects, not arrays). Numbered
    // after the four standard widgets, in the order the chapter authored them.
    let n = Array.isArray(C.errorCorrectionSet) && C.errorCorrectionSet.length ? 5 : 4;
    Object.keys(E || {}).forEach((key) => {
      const ex = E[key];
      if (!ex || typeof ex !== 'object' || Array.isArray(ex)) return;
      let blockEl = null;
      if (key === 'errorCorrection' && ex.wrong && ex.right) blockEl = errorCorrectionBlock(ex);
      else if (PROMPT_EXERCISE_KEYS.indexOf(key) !== -1 && ex.prompt && ex.answer) blockEl = promptExerciseBlock(ex);
      else if (ITEMS_EXERCISE_KEYS[key] && Array.isArray(ex.items) && ex.items.length) blockEl = itemsExerciseBlock(ex, ITEMS_EXERCISE_KEYS[key]);
      if (!blockEl) return;
      n += 1;
      const card = el('div', { class: 'card' });
      card.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:14px' },
        String(n).padStart(2, '0') + ' · ' + (ex.title || 'Practice')));
      card.appendChild(blockEl);
      wrap.appendChild(card);
    });

    return wrap;
  }

  function matchWidget(M) {
    const wrap = el('div', {});
    // Build the answer pool from THIS chapter's pairs (not hardcoded articles).
    // Use M.options if provided, else the distinct correct answers across pairs.
    const pool = (Array.isArray(M.options) && M.options.length)
      ? M.options.slice()
      : [...new Set(M.pairs.map(p => p.art))];
    // Shuffle so the correct answer isn't always in the same column.
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const rows = el('div', { class: 'card-grid', style: 'gap:10px' });
    M.pairs.forEach(p => {
      const row = el('div', { class: 'flex-between', style: 'padding:8px 0' },
        el('span', { class: 'de', style: 'font-size:20px' }, p.noun));
      const choices = el('div', { style: 'display:flex;gap:6px;flex-wrap:wrap' });
      pool.forEach(a => {
        const b = el('button', { class: 'filter-chip', type: 'button' }, a);
        b.addEventListener('click', () => {
          const ok = a === p.art;
          $$('button', choices).forEach(x => { x.classList.remove('is-active'); x.style.borderColor = ''; });
          b.classList.add('is-active');
          b.style.background = ok ? 'var(--g-object)' : 'var(--coral)';
          b.style.color = '#fff'; b.style.borderColor = ok ? 'var(--g-object)' : 'var(--coral)';
        });
        choices.appendChild(b);
      });
      row.appendChild(choices); rows.appendChild(row);
    });
    wrap.appendChild(rows);
    wrap.appendChild(el('p', { class: 'muted', style: 'font-size:13px;margin-top:10px' }, 'Pick the right match for each item — green is right, coral is wrong.'));
    return wrap;
  }

  function builderWidget(B) {
    const wrap = el('div', {});
    const slot = el('div', { class: 'builder-slot' });
    const bank = el('div', { class: 'builder-bank' });
    const placed = [];
    function mkToken(word, container, fromBank) {
      const role = B.roles[word] || '';
      const t = el('button', { class: 'builder-token ' + (role || roleFor(word)) + ' de', type: 'button' }, word);
      t.addEventListener('click', () => {
        if (container === bank) { slot.appendChild(t); placed.push(word); container = slot; }
        else { bank.appendChild(t); const idx = placed.indexOf(word); if (idx > -1) placed.splice(idx, 1); container = bank; }
        slot.classList.remove('is-correct', 'is-wrong');
      });
      return t;
    }
    // shuffle bank
    [...B.bank].sort(() => Math.random() - 0.5).forEach(w => bank.appendChild(mkToken(w, bank)));
    const check = el('button', { class: 'btn btn-primary btn-small' }, 'Check sentence');
    const fb = el('div', { class: 'exercise-feedback' });
    check.addEventListener('click', () => {
      const current = $$('.builder-token', slot).map(t => t.textContent);
      const ok = current.length === B.answer.length && current.every((w, i) => w === B.answer[i]);
      slot.classList.toggle('is-correct', ok); slot.classList.toggle('is-wrong', !ok);
      fb.className = 'exercise-feedback ' + (ok ? 'ok' : 'no');
      fb.textContent = ok ? '✓ Perfect: Der Lehrer erklärt die Regel.' : '✗ Order: Subject → Verb → Object. Tap tokens to move them.';
    });
    wrap.append(slot, el('div', { class: 'muted', style: 'font-size:12.5px;margin:-8px 0 10px' }, 'Tap a word to move it up; tap again to send it back.'), bank, el('div', { style: 'margin-top:14px' }, check), fb);
    return wrap;
  }

  // ---- Quiz ----
  function bodyQuiz() {
    const Q = C.quiz;
    const card = el('div', { class: 'card' });
    const progress = el('div', { class: 'quiz-progress' });
    Q.forEach(() => progress.appendChild(el('div', { class: 'quiz-progress-dot' })));
    const stage = el('div', {});
    card.append(progress, stage);
    let idx = 0, score = 0;
    function paintProgress() { $$('.quiz-progress-dot', progress).forEach((d, i) => { d.className = 'quiz-progress-dot' + (i < idx ? ' done' : i === idx ? ' current' : ''); }); }
    function showQ() {
      paintProgress();
      stage.innerHTML = '';
      const q = Q[idx];
      const block = el('div', {});
      block.append(el('div', { class: 'muted', style: 'font-size:13px;margin-bottom:8px' }, 'Question ' + (idx + 1) + ' of ' + Q.length),
        el('div', { class: 'exercise-q', html: q.q, style: 'font-size:18px' }));
      const opts = el('div', { class: 'mcq-options' });
      const fb = el('div', { class: 'exercise-feedback' });
      let answered = false;
      q.options.forEach((opt, oi) => {
        const b = el('button', { class: 'mcq-option', type: 'button' },
          el('span', { class: 'mcq-key' }, String.fromCharCode(65 + oi)),
          el('span', { html: optionIsGerman(opt) ? '<span class="de">' + opt + '</span>' : opt }));
        colorWordsIn(b.querySelector('.de'));
        b.addEventListener('click', () => {
          if (answered) return; answered = true;
          $$('.mcq-option', opts).forEach(x => x.disabled = true);
          if (oi === q.answer) { b.classList.add('is-correct'); score++; fb.className = 'exercise-feedback ok'; fb.textContent = '✓ ' + q.explain; }
          else { b.classList.add('is-wrong'); opts.children[q.answer].classList.add('is-correct'); fb.className = 'exercise-feedback no'; fb.textContent = '✗ ' + q.explain; }
          setTimeout(() => { nextBtn.style.display = 'inline-flex'; }, 300);
        });
        opts.appendChild(b);
      });
      const nextBtn = el('button', { class: 'btn btn-primary btn-small', style: 'margin-top:16px;display:none' }, idx === Q.length - 1 ? 'See result' : 'Next question →');
      nextBtn.addEventListener('click', () => { idx++; if (idx < Q.length) showQ(); else showResult(); });
      block.append(opts, fb, nextBtn);
      stage.appendChild(block);
    }
    function showResult() {
      paintProgress(); $$('.quiz-progress-dot', progress).forEach(d => d.classList.add('done'));
      state.quizScore = score; state.done['quiz'] = true; save();
      refreshNavTicks(); updateRing(); updateStats(); renderSummary();
      const xp = Math.round((score / Q.length) * QUIZ_MAX_XP);
      const pct = Math.round((score / Q.length) * 100);
      stage.innerHTML = '';
      const R = C.quizRecommendation || {};
      const reco = score >= Q.length - 1
        ? R.high
        : score >= Q.length - 2
          ? R.mid
          : R.low;
      stage.append(
        el('div', { class: 'quiz-result' },
          el('div', { class: 'quiz-score-big', style: pct >= 60 ? 'color:var(--g-object)' : 'color:var(--coral)' }, score + '/' + Q.length),
          el('div', { class: 'muted', style: 'margin-top:6px' }, pct + '% correct'),
          el('div', { class: 'quiz-xp-earned' }, el('span', { class: 'meta-dot', style: 'width:8px;height:8px;border-radius:50%;background:var(--coral)' }), '+' + xp + ' XP banked'),
          el('div', { class: 'quiz-reco' },
            el('div', { class: 'eyebrow', style: 'margin-bottom:8px' }, 'Recommendation'),
            el('p', { class: 'lede', style: 'font-size:16px', html: reco })),
          el('button', { class: 'btn btn-soft btn-small', style: 'margin-top:20px', onclick: () => { score = 0; idx = 0; showQ(); } }, 'Retake quiz'))
      );
      toast('Quiz complete', xp);
    }
    showQ();
    return card;
  }

  // ---- Summary (auto) ----
  function renderSummary() {
    const host = $('#summary-body'); if (!host) return;
    host.innerHTML = '';
    const checklist = el('div', { class: 'card' });
    checklist.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:6px' }, 'Your progress'));
    const list = el('div', { class: 'summary-checklist' });
    C.sections.filter(s => !s.auto).forEach(s => {
      const done = !!state.done[s.id];
      list.appendChild(el('div', { class: 'summary-item ' + (done ? 'done' : 'todo') },
        el('span', { class: 'si-tick', html: done ? ICON.check : '' }),
        el('span', {}, s.label + (done ? ' completed' : ' — not yet')),
        done ? el('span', { class: 'muted', style: 'margin-left:auto;font-size:13px' }, s.id === 'quiz' && state.quizScore != null ? state.quizScore + '/' + C.quiz.length : '✓') : null));
    });
    checklist.appendChild(list);
    checklist.appendChild(el('div', { class: 'flex-between', style: 'margin-top:8px;padding-top:16px;border-top:1px solid var(--hairline-light)' },
      el('strong', { style: 'font-family:var(--font-display);font-size:18px' }, earnedXP() + ' / ' + C.xp + ' XP'),
      el('span', { class: 'muted' }, progressPct() + '% complete')));

    const take = el('div', { class: 'card' });
    take.appendChild(el('div', { class: 'eyebrow', style: 'margin-bottom:14px' }, 'Key takeaways'));
    const tl = el('div', { class: 'takeaway-list' });
    C.takeaways.forEach(t => tl.appendChild(el('div', { class: 'takeaway' }, el('span', { class: 'tk-dot', style: 'background:var(--g-' + (t.c.replace('r-', '')) + ', var(--ink-tertiary))' }), el('span', { html: t.html }))));
    take.appendChild(tl);
    take.appendChild(el('div', { class: 'eyebrow', style: 'margin:22px 0 12px' }, 'Revision tips'));
    const rt = el('div', { class: 'takeaway-list' });
    C.revisionTips.forEach(t => rt.appendChild(el('div', { class: 'takeaway' }, el('span', { class: 'tk-dot', style: 'background:var(--coral)' }), el('span', { class: 'muted', style: 'color:var(--ink-secondary)' }, t))));
    take.appendChild(rt);

    host.append(checklist, take);
    linkifyDe(host);
    linkifyGated(host);
  }

  /* ---------- Up Next card (placed after the final section) ---------- */
  function buildNextChapter() {
    if (!C.nextChapter) {
      return el('div', { class: 'next-chapter' },
        el('div', {}, el('div', { class: 'next-chapter-label' }, 'Course complete'),
          el('div', { class: 'next-chapter-title' }, 'You\u2019ve finished the entire Klarweg curriculum', ' — ', el('span', { class: 'muted', style: 'font-weight:400;font-size:18px' }, 'A1 through C2'))),
        el('a', { class: 'btn btn-primary', href: '../c2.html' }, 'Back to C2 overview ', el('span', { class: 'arrow' }, '\u2192')));
    }
    return el('div', { class: 'next-chapter' },
      el('div', {}, el('div', { class: 'next-chapter-label' }, 'Up next · Chapter ' + C.nextChapter.number),
        el('div', { class: 'next-chapter-title' }, el('span', { class: 'de' }, C.nextChapter.title), ' — ', el('span', { class: 'muted', style: 'font-weight:400;font-size:18px' }, C.nextChapter.titleEn))),
      el('a', { class: 'btn btn-primary', href: C.nextChapter.href || '#' }, 'Continue ', el('span', { class: 'arrow' }, '→')));
  }

  /* ---------- Study Resources (UI only) ---------- */
  const KIND_TAG = { Vocabulary: 'tag-core', Practice: 'tag-practice', Grammar: 'tag-assess' };
  function bodyResources() {
    const wrap = el('div', {});
    wrap.appendChild(el('div', { class: 'resource-grid' },
      ...C.resources.map(r => el('div', { class: 'resource-card' },
        el('div', { class: 'resource-icon', html: '<span aria-hidden="true">' + r.icon + '</span>' }),
        el('div', { class: 'resource-body' },
          el('div', { class: 'resource-head' },
            el('h3', { class: 'resource-title' }, r.title)),
          el('p', { class: 'resource-desc' }, r.desc),
          el('div', { class: 'resource-meta' }, el('span', { html: ICON.file, style: 'width:13px;display:inline-flex;vertical-align:-2px' }), ' PDF'),
          el('div', { class: 'resource-actions' },
            el('a', { class: 'btn btn-primary btn-small', href: r.pdfUrl, download: '', onclick: (e) => onDownload(e, r) }, el('span', { html: ICON.download, style: 'width:15px;display:inline-flex' }), ' Download')))))));
    wrap.appendChild(el('p', { class: 'muted', style: 'font-size:13px;margin-top:16px' }, 'Resources open in a preview panel. Files are added to each chapter by the Klarweg team.'));
    return wrap;
  }

  function onDownload(e, r) {
    // Placeholder PDFs aren't present yet — guide the user instead of a dead link.
    e.preventDefault();
    toast(r.title + ' will be available soon');
  }

  /* ---------- Preview dialog ---------- */
  let dialogEl;
  function openPreview(r) {
    if (!dialogEl) {
      dialogEl = el('div', { class: 'dialog-overlay' });
      dialogEl.addEventListener('click', (e) => { if (e.target === dialogEl) closePreview(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePreview(); });
      document.body.appendChild(dialogEl);
    }
    dialogEl.innerHTML = '';
    const panel = el('div', { class: 'dialog-panel' },
      el('div', { class: 'dialog-head' },
        el('div', { style: 'display:flex;align-items:center;gap:12px' },
          el('span', { class: 'resource-icon sm', html: '<span aria-hidden="true">' + r.icon + '</span>' }),
          el('div', {}, el('div', { class: 'dialog-title' }, r.title), el('div', { class: 'muted', style: 'font-size:13px' }, 'PDF · ' + r.size))),
        el('button', { class: 'dialog-close', type: 'button', 'aria-label': 'Close', html: ICON.close, onclick: closePreview })),
      el('div', { class: 'dialog-sep' }),
      el('div', { class: 'dialog-body' },
        el('div', { class: 'pdf-stub' },
          el('span', { class: 'pdf-stub-icon', html: ICON.file }),
          el('div', { class: 'pdf-stub-title' }, r.title),
          el('p', { class: 'pdf-stub-desc' }, r.desc),
          el('div', { class: 'pdf-stub-path' }, r.pdfUrl),
          el('p', { class: 'muted', style: 'font-size:13px;margin-top:14px;max-width:380px' }, 'Preview will render here once the PDF is uploaded. The viewer is wired and ready.'))),
      el('div', { class: 'dialog-foot' },
        el('button', { class: 'btn btn-ghost btn-small', type: 'button', onclick: closePreview }, 'Close'),
        el('a', { class: 'btn btn-primary btn-small', href: r.pdfUrl, download: '', onclick: (e) => onDownload(e, r) }, el('span', { html: ICON.download, style: 'width:15px;display:inline-flex' }), ' Download')));
    dialogEl.appendChild(panel);
    requestAnimationFrame(() => dialogEl.classList.add('is-open'));
  }
  function closePreview() { if (dialogEl) dialogEl.classList.remove('is-open'); }

  /* ---------- Chapter Complete (final celebratory area) ---------- */
  function renderChapterComplete() {
    const host = $('#chapter-complete'); if (!host) return;
    const pct = progressPct();
    const isComplete = pct === 100;
    host.innerHTML = '';
    host.appendChild(el('div', { class: 'chapter-complete-card' + (isComplete ? ' is-complete' : '') },
      el('div', { class: 'cc-emoji', html: isComplete ? '🎉' : '🚀' }),
      el('h2', { class: 'cc-heading' }, isComplete ? 'Chapter Completed' : 'Almost there'),
      el('p', { class: 'cc-sub' }, isComplete
        ? 'You\'ve finished every section of ' + C.title + '. Your progress is saved.'
        : 'Finish the remaining sections to complete the chapter — you\'re at ' + pct + '%.'),
      el('div', { class: 'cc-stats' },
        ccStat(earnedXP() + ' / ' + C.xp, 'XP earned', 'var(--coral)'),
        ccStat(pct + '%', 'Completion', 'var(--g-object)'),
        ccStat(C.time + ' min', 'Study time', 'var(--g-time)')),
      C.nextChapter ? el('a', { class: 'btn btn-primary btn-large', href: C.nextChapter.href || '#', style: 'margin-top:28px' },
        'Next chapter · ', el('span', { class: 'de', style: 'font-style:italic;margin:0 6px' }, C.nextChapter.title), el('span', { class: 'arrow' }, '→')) : el('a', { class: 'btn btn-primary btn-large', href: '../c2.html', style: 'margin-top:28px' }, 'Course complete ', el('span', { class: 'arrow' }, '→'))));
  }
  function ccStat(val, label, color) {
    return el('div', { class: 'cc-stat' },
      el('div', { class: 'cc-stat-val', style: 'color:' + color }, val),
      el('div', { class: 'cc-stat-label' }, label));
  }

  /* ============================================================
     MOUNT
  ============================================================ */
  function mountSections() {
    const host = $('#dash-sections');
    const bodies = {
      overview: bodyOverview, story: bodyStory, vocabulary: bodyVocabulary, grammar: bodyGrammar,
      reading: bodyReading, listening: bodyListening, speaking: bodySpeaking,
      writing: bodyWriting, exercises: bodyExercises, quiz: bodyQuiz,
      resources: bodyResources
    };
    C.sections.forEach((s, i) => {
      let body;
      if (s.id === 'summary') body = el('div', { id: 'summary-body' });
      else body = (bodies[s.id] || (() => el('div', { class: 'card' }, 'Section')))();
      host.appendChild(sectionShell(s, i, body));
    });
    renderSummary();
    // Up Next card sits after the final section (Study Resources).
    host.appendChild(buildNextChapter());
    // Make every German word clickable across all sections (not just Reading).
    linkifyDe(host);
    linkifyGated(host);
    // Static hero subtitle lives outside #dash-sections (pre-rendered in the
    // page shell) — sweep it too so the zero-tolerance colour rule holds.
    linkifyDe(document.querySelector('.flow-section[data-slide="1"]'));
    linkifyGated(document.querySelector('.flow-section[data-slide="1"]'));
  }
  // expose so other refreshers can rebuild summary without duplicating the Up Next card

  /* ---------- scrollspy ---------- */
  function setupScrollspy() {
    const items = $$('.dash-nav-item');
    const map = {};
    items.forEach(it => map[it.dataset.sec] = it);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          items.forEach(x => x.classList.remove('is-active'));
          const id = e.target.dataset.sec;
          if (map[id]) {
            const item = map[id];
            item.classList.add('is-active');
            // Horizontal-only centering of the nav strip — never scroll the page vertically.
            const strip = item.parentElement;
            const target = item.offsetLeft - (strip.clientWidth / 2) + (item.offsetWidth / 2);
            strip.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    $$('.dash-section').forEach(s => io.observe(s));
  }

  /* ---------- topbar solid on scroll ---------- */
  function setupTopbar() {
    const tb = $('#topbar');
    const onScroll = () => { tb.classList.toggle('is-solid', window.pageYOffset > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- header action buttons ---------- */
  function setupHeaderActions() {
    $('#act-continue').addEventListener('click', () => {
      // jump to first incomplete section
      const next = completable.find(id => !state.done[id]) || 'summary';
      const t = $('#sec-' + next); if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
    });
    $('#act-restart').addEventListener('click', () => {
      if (!confirm('Reset all progress for this chapter?')) return;
      state = { done: {}, learned: {}, saved: {}, quizScore: null }; save();
      location.reload();
    });
    $('#act-complete').addEventListener('click', () => {
      completable.forEach(id => { state.done[id] = true; });
      // Quiz counts as done; if it was never attempted, award full quiz credit.
      if (state.quizScore == null) state.quizScore = C.quiz.length;
      save(); refreshNavTicks(); updateRing(); updateStats(); renderSummary();
      $$('.section-complete').forEach(b => { b.classList.add('is-done'); b.querySelector('.cc-box').innerHTML = ICON.check; b.querySelector('.cc-label').textContent = 'Completed'; });
      toast('Chapter marked complete');
    });
  }

  /* ============================================================
     ★ VISUAL-SYSTEM COMPONENTS
  ============================================================ */

  /* ---- Long-press audio speed menu (spec 5.3) ---- */
  let speedMenu;
  // Resolve a clicked surface word to its full vocab headword ("Stift" →
  // "der Stift") so the popup hits the dual-voice MP3s, which are keyed by
  // article + noun. Falls back to the surface word when not a vocab word.
  let HEADIDX = null;
  function buildHeadwordIndex() {
    HEADIDX = {};
    (C.vocab || []).forEach(v => {
      const term = vocabTerm(v.art, v.de);
      const add = (key) => { const k = normWord(key); if (k && !HEADIDX[k]) HEADIDX[k] = term; };
      add(v.de);                                  // bare noun → "der Stift"
      add(term);                                  // full headword maps to itself
      String(v.de).split(/\s+/).forEach(add);     // each word of a multiword headword
    });
  }
  function resolveHeadword(surface) {
    if (!HEADIDX) buildHeadwordIndex();
    const key = normWord(surface);

    // First prefer the chapter's authored headword index.
    if (HEADIDX[key]) {
      const indexed = String(HEADIDX[key]).trim();
      if (/^(der|die|das)\\s/i.test(indexed)) return indexed;
      const lex = (window.KW_GLOBAL_LEXICON || {})[normWord(indexed)];
      const gender = lex && lex.gender;
      const article = gender === 'm' ? 'der' : gender === 'f' ? 'die' : gender === 'n' ? 'das' : null;
      return article ? article + ' ' + indexed : indexed;
    }

    // Inflected forms may resolve to a bare lemma (e.g. Arbeitsplätze → Arbeitsplatz).
    // The vocab audio manifest is keyed by article + noun, so when the shared
    // lexicon provides trusted gender metadata, construct the nominative
    // definite article using the same closed-set grammar table used elsewhere.
    const lemma = (window.KW_INFLECTIONS || {})[key];
    if (lemma) {
      const lex = (window.KW_GLOBAL_LEXICON || {})[normWord(lemma)];
      const gender = lex && lex.gender;
      const article = gender === 'm' ? 'der' : gender === 'f' ? 'die' : gender === 'n' ? 'das' : null;
      if (article) return article + ' ' + lemma;
      return lemma;
    }

    return surface;
  }
  // Play a single word through the SAME path the vocab F/M buttons use — the
  // female dual-voice MP3 (keyed by article + noun), then the fallback chain,
  // then browser TTS. Honors playback rate.
  /* popupOpts.spokenAs — POPUP-ONLY render override.
     A few authored tokens are written in a form that is not what a learner
     should hear from the popup control: the token "Z" is displayed as "Z" but
     its letter NAME is "Zett"; the vowel token "a" is demonstrated by the
     exemplar "Apfel". The token's authored `spokenDe` carries that form.

     It is passed per-call, from the popup's own construction site only, and is
     never attached to the token surface, the display text, or any shared state.
     Sentence playback (story / reading / listening / speaking) builds its text
     from the authored line and calls Audio.speak / speakSequence, which never
     receive popupOpts — so "Das a ist kurz" can never become "Das Apfel ist
     kurz". Identity is unaffected: lookup still keys on the displayed text;
     spokenAs only reaches the TTS layer. `pron` is never used as TTS input. */
  function speakWordFemale(text, rate, popupOpts) {
    try { Audio.stop(); } catch (_) {}
    const surface = String(text || '').trim();
    const headword = resolveHeadword(surface);
    const spokenAs = (popupOpts && typeof popupOpts.spokenAs === 'string' && popupOpts.spokenAs.trim())
      ? popupOpts.spokenAs.trim() : null;

    // Popup audio must try the exact displayed surface first.
    // This is important for inflected forms such as "schwerfällt":
    // the learner clicked "schwerfällt", so the audio request must first
    // use "schwerfällt", not silently replace it with "schwerfallen".
    var fn = window.KW_speak || window.KW_playAudio;
    if (fn) {
      var o = { gender: 'female', rate: rate };
      if (spokenAs) o.spokenAs = spokenAs;
      return fn(surface, o).then(function (s) {
        if ((s === 'error' || s === 'browser-tts') && headword !== surface) {
          return fn(headword, o).then(function (s2) {
            if (s2 === 'error' || s2 === 'browser-tts') Audio.speak(spokenAs || surface, rate);
            return s2;
          });
        }
        if (s === 'error') Audio.speak(spokenAs || surface, rate);
        return s;
      });
    }
    return Audio.speak(spokenAs || surface, rate);
  }
  function attachAudioSpeed(btn, text, popupOpts) {
    let timer = null, longFired = false;
    const openMenu = () => {
      longFired = true;
      if (!speedMenu) {
        speedMenu = el('div', { class: 'audio-speed-menu' });
        document.body.appendChild(speedMenu);
        document.addEventListener('click', (ev) => { if (speedMenu && !speedMenu.contains(ev.target)) speedMenu.classList.remove('is-open'); });
      }
      speedMenu.innerHTML = '';
      [['Normal', 1], ['Slow', 0.75], ['Very slow', 0.4]].forEach(([label, rate]) => {
        speedMenu.appendChild(el('button', { type: 'button', onclick: (ev) => { ev.stopPropagation(); speakWordFemale(text, rate, popupOpts); speedMenu.classList.remove('is-open'); } },
          el('span', {}, label), el('span', { class: 'asm-rate' }, rate + '×')));
      });
      const r = btn.getBoundingClientRect();
      speedMenu.style.left = Math.min(r.left, window.innerWidth - 180) + 'px';
      speedMenu.style.top = (r.top - 8) + 'px';
      speedMenu.style.transform = 'translateY(-100%)';
      requestAnimationFrame(() => speedMenu.classList.add('is-open'));
    };
    // Long-press (pointer) opens the slow/very-slow menu; a normal click plays.
    const startPress = () => { longFired = false; clearTimeout(timer); timer = setTimeout(openMenu, 550); };
    const cancelPress = () => clearTimeout(timer);
    btn.addEventListener('pointerdown', startPress);
    btn.addEventListener('pointerup', cancelPress);
    btn.addEventListener('pointerleave', cancelPress);
    btn.addEventListener('pointercancel', cancelPress);
    // Primary trigger: a plain click is the most reliable user-gesture across
    // desktop + touch, and guarantees the play attempt (MP3 → … → browser TTS).
    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      clearTimeout(timer);
      if (longFired) { longFired = false; return; } // long-press already handled it
      speakWordFemale(text, 1, popupOpts);
    });
    btn.title = 'Tap to hear · hold for slow';
  }

  /* ---- Live Sentence Parser (spec 4.3) ---- */
  const ROLE_NAMES = {
    'r-subject': 'NOM', 'r-pronoun': 'PRON', 'r-relativpronomen': 'REL', 'r-verb': 'V2', 'r-object': 'AKK',
    'r-time': 'TIME', 'r-place': 'PLACE', 'r-article': 'ART', 'r-preposition': 'PREP',
    'r-akkusativ': 'AKK', 'r-dativ': 'DAT', 'r-genitiv': 'GEN', 'r-question': 'Q', 'r-adjective': 'ADJ', 'r-adverb': 'ADV',
    'r-conjunction': 'KONJ', 'r-connector': 'KONNEKTOR', 'r-modalverb': 'MODAL', 'r-negation': 'NEG',
    'r-comparative': 'KOMP', 'r-superlative': 'SUPER', 'r-nnoun': 'N-DEKL', 'r-futur': 'FUTUR',
    'r-plusquamperfekt': 'PLUSQ', 'r-temporal': 'TEMPORAL', 'r-purpose': 'ZWECK', 'r-brauchen': 'BRAUCHEN',
    'r-reflexiv-akk': 'REFL·AKK', 'r-reflexiv-dat': 'REFL·DAT', 'r-prep-rel': 'PRÄP+REL',
    'r-passiv': 'PASSIV', 'r-konjunktiv': 'KONJ.II', 'r-konjunktiv1': 'KONJ.I'
  };

  // Shared renderer for role-tagged sentence tokens — the ONE place tokens
  // become colored/labeled DOM. Sentence Insight's Proof and Grammar
  // Breakdown both call this; neither re-implements token rendering.
  function renderRoleSentence(tokens) {
    const sentence = el('div', { class: 'parser-sentence' });
    tokens.forEach((t, i) => {
      const tok = el('span', { class: 'parser-tok ' + t.role, style: '--lbl-delay:' + (i * 80) + 'ms' }, t.w);
      tok.appendChild(el('span', { class: 'parser-label ' + t.role, style: 'background:var(--g-' + t.role.replace('r-', '') + ')' }, ROLE_NAMES[t.role] || ''));
      sentence.appendChild(tok);
      if (i < tokens.length - 1) sentence.appendChild(document.createTextNode(' '));
    });
    sentence.appendChild(document.createTextNode('.'));
    return sentence;
  }

  // Inline-expansion X-Ray for continuous-flow passages (Reading, Listening
  // Transcript): keeps cause and effect together by inserting the panel
  // directly after the tapped sentence's own inline unit — never a fixed
  // panel elsewhere on the surface, never an automatic scroll. Only one
  // panel open at a time per passage (tracked via `state`, an object the
  // caller owns: { unit, panel }). Tapping the open sentence again closes
  // it; tapping another sentence closes the previous one first. Closing
  // removes the panel and its highlight entirely — the passage returns to
  // its normal continuous flow.
  function toggleInlineSentenceXRay(state, unit, tokens, sentenceInsight) {
    if (state.unit === unit) {
      state.panel.remove();
      unit.classList.remove('is-active-sentence');
      state.unit = null; state.panel = null;
      return;
    }
    if (state.unit) {
      state.panel.remove();
      state.unit.classList.remove('is-active-sentence');
    }
    unit.classList.add('is-active-sentence');
    const panel = el('div', { class: 'sentence-xray inline-xray' });
    const insightBody = buildSentenceInsightBody(sentenceInsight);
    if (insightBody) panel.appendChild(insightBody);
    panel.appendChild(el('div', { class: 'si-label si-breakdown-head' }, '🔍 Grammar Breakdown'));
    panel.appendChild(buildGrammarBreakdownBody(tokens));
    unit.insertAdjacentElement('afterend', panel);
    requestAnimationFrame(() => panel.classList.add('is-xray-open'));
    state.unit = unit; state.panel = panel;
  }

  // Grammar Breakdown body: pure inspection of `tokens` (role-coloured
  // sentence + legend of the roles actually present). No narration, no
  // selection — every tagged token shown, nothing more. Shared by every
  // surface that opens Sentence X-Ray.
  function buildGrammarBreakdownBody(tokens) {
    const body = el('div', { class: 'si-breakdown-body' });
    body.appendChild(renderRoleSentence(tokens));
    const legend = el('div', { class: 'si-legend' });
    const seen = new Set();
    tokens.forEach(t => {
      if (t.role && t.role !== 'plain' && !seen.has(t.role) && ROLE_NAMES[t.role]) {
        seen.add(t.role);
        legend.appendChild(el('span', { class: 'si-legend-item' },
          el('span', { class: 'si-legend-dot', style: 'background:var(--g-' + t.role.replace('r-', '') + ')' }),
          ROLE_NAMES[t.role]));
      }
    });
    body.appendChild(legend);
    return body;
  }

  // Sentence Insight body: authored pedagogy on top of `tokens`, optional at
  // the whole-block level (Architecture v1.0, Layer 2). Returns null when
  // `sentenceInsight` is absent — never a manufactured insight on data that
  // isn't there.
  function buildSentenceInsightBody(sentenceInsight) {
    if (!sentenceInsight) return null;
    const block = el('div', { class: 'si-insight-wrap' });
    block.appendChild(el('p', { class: 'si-meaning' }, sentenceInsight.meaning));
    const badgeLabel = sentenceInsight.kind === 'keyObservation' ? 'Key Observation' : 'Notice';
    block.appendChild(el('div', { class: 'si-insight-block' },
      el('span', { class: 'si-badge' }, badgeLabel),
      el('p', { class: 'si-insight-text' }, sentenceInsight.insight)));
    if (sentenceInsight.proof) {
      const proof = el('div', { class: 'si-proof parser roles-visible' });
      proof.appendChild(renderRoleSentence(sentenceInsight.proof));
      block.appendChild(proof);
    }
    if (sentenceInsight.why) block.appendChild(el('p', { class: 'si-why' }, el('span', { class: 'si-label' }, 'Why · '), sentenceInsight.why));
    if (sentenceInsight.pattern) block.appendChild(el('p', { class: 'si-pattern' }, el('span', { class: 'si-label' }, 'Pattern · '), sentenceInsight.pattern));
    return block;
  }

  /* ---- Sentence X-Ray + the shared Sentence component (Interaction Model, frozen contract) ----
     renderInteractiveSentence(tokens, sentenceInsight)
     tokens: Array<{w, role?}> — required, single source of grammatical fact.
     sentenceInsight: optional authored pedagogy — { kind?, meaning, insight, proof?, why?, pattern? }.
     Word click → Word Popup (via wrapWordsIn, already universal). Sentence
     background click → Sentence X-Ray (Sentence Insight, if authored, +
     Grammar Breakdown). If `tokens` is empty, no click handler is attached
     at all — the sentence stays inert, per the frozen interaction invariant:
     no popup, no placeholder, no "Coming Soon." Any surface that renders a
     human-readable German sentence should call this instead of hand-rolling
     its own click wiring. */
  // Attaches the Sentence X-Ray panel + background-click toggle onto an
  // ALREADY-RENDERED sentence container, without touching how its words
  // were rendered or wired for click. Used internally by
  // renderInteractiveSentence, and directly by surfaces (e.g. Story) that
  // must preserve their own existing word-click pipeline while still
  // layering Sentence X-Ray on top. No-ops (returns false) when `tokens`
  // is empty — the sentence stays fully inert, per the frozen invariant.
  function attachSentenceXRay(unit, clickTarget, tokens, sentenceInsight) {
    if (!tokens || !tokens.length) return false;
    unit.classList.add('is-xray-enabled');
    const panel = el('div', { class: 'sentence-xray' });
    const insightBody = buildSentenceInsightBody(sentenceInsight);
    if (insightBody) panel.appendChild(insightBody);
    const breakdownHead = el('div', { class: 'si-label si-breakdown-head' }, '🔍 Grammar Breakdown');
    panel.appendChild(breakdownHead);
    panel.appendChild(buildGrammarBreakdownBody(tokens));
    unit.appendChild(panel);
    clickTarget.addEventListener('click', (e) => {
      if (e.target.closest('.de-link, .de, .rw')) return; // word click already handled its own event
      unit.classList.toggle('is-xray-open');
    });
    return true;
  }

  function renderInteractiveSentence(tokens, sentenceInsight) {
    const unit = el('div', { class: 'sentence-unit' });
    const line = el('div', { class: 'sentence-unit-text' }, tokens.map(t => t.w).join(' ') + '.');
    unit.appendChild(line);
    wrapWordsIn(line);
    attachSentenceXRay(unit, line, tokens, sentenceInsight);
    return unit;
  }

  /* ---- Sticky Grammar Helper (spec 4.7) ---- */
  function setupGrammarHelper() {
    const ROLE_LABEL = {
      'r-subject': ['Subject', 'Mann'], 'r-pronoun': ['Pronoun', 'ich'], 'r-verb': ['Verb', 'liest'],
      'r-object': ['Object', 'Buch'], 'r-time': ['Time', 'heute'], 'r-place': ['Place', 'Berlin'],
      'r-article': ['Article', 'der'], 'r-preposition': ['Preposition', 'in'],
      'r-akkusativ': ['Akkusativ', 'den'], 'r-dativ': ['Dativ', 'dem'], 'r-question': ['Question', 'wer'],
      'r-adjective': ['Adjective', 'gut'], 'r-adverb': ['Adverb', 'schnell'],
      'r-futur': ['Futur I', 'werde'], 'r-comparative': ['Komparativ', 'größer'],
      'r-superlative': ['Superlativ', 'größte'], 'r-nnoun': ['N-Deklination', 'den Studenten'],
      'r-purpose': ['Zweck', 'um … zu / damit'], 'r-prep-rel': ['Präp. + Relativ', 'mit dem'],
      'r-plusq': ['Plusquamperfekt', 'hatte gegessen'], 'r-temporal': ['Temporal', 'als/wenn/bevor/nachdem/während'],
      'r-brauchen': ['brauchen nicht … zu', 'nicht zu arbeiten'],
      'r-reflexiv-akk': ['Reflexiv · Akkusativ', 'mich/dich'], 'r-reflexiv-dat': ['Reflexiv · Dativ', 'mir/dir'],
      'r-connector': ['Zweiteiliger Konnektor', 'sowohl … als auch']
    };
    // Collect roles actually present in the rendered chapter.
    const present = new Set();
    document.querySelectorAll('[class*="r-"]').forEach(n => {
      n.classList.forEach(c => { if (ROLE_LABEL[c]) present.add(c); });
    });
    const order = Object.keys(ROLE_LABEL);
    const roles = order.filter(r => present.has(r));
    if (!roles.length) return;

    const btn = el('button', { class: 'grammar-helper-btn', type: 'button', 'aria-label': 'Grammar legend' }, 'Aa');
    const panel = el('div', { class: 'grammar-helper-panel', role: 'dialog', 'aria-label': 'Grammar legend' });
    panel.appendChild(el('div', { class: 'grammar-helper-title' }, 'Colours in this chapter'));
    roles.forEach(r => {
      const [name, sample] = ROLE_LABEL[r];
      panel.appendChild(el('div', { class: 'gh-row' },
        el('span', { class: 'gh-dot', style: 'background:var(--g-' + r.replace('r-', '') + ')' }),
        el('span', { class: 'gh-name' }, name),
        el('span', { class: 'gh-de' }, sample)));
    });
    btn.addEventListener('click', () => panel.classList.toggle('is-open'));
    document.addEventListener('click', (ev) => { if (!panel.contains(ev.target) && !btn.contains(ev.target)) panel.classList.remove('is-open'); });
    window.addEventListener('scroll', () => { btn.classList.add('dimmed'); }, { passive: true });
    document.body.append(btn, panel);
  }

  function setupAccountMenu() {
    const btn = $('#acct-btn'), menu = $('#acct-menu'), acct = $('#acct');
    if (!btn || !menu) return;
    if (window.KW_Account) {
      const u = KW_Account.User.get();
      const initial = (u.name || 'L').trim().charAt(0).toUpperCase();
      const av = $('#acct-avatar'); if (av) av.textContent = initial;
      const nm = $('#acct-menu-name'); if (nm) nm.textContent = u.name || 'Learner';
      const em = $('#acct-menu-email'); if (em) em.textContent = u.email || 'on this device';
      refreshSavedCount();
    }
    btn.addEventListener('click', (e) => { e.stopPropagation(); const open = menu.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
    document.addEventListener('click', (e) => { if (acct && !acct.contains(e.target)) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
  }

  /* ---------- init ---------- */
  function init() {
    renderStory();
    renderHeader();
    renderNav();
    mountSections();
    setupScrollspy();
    setupTopbar();
    setupHeaderActions();
    setupGrammarHelper();
    setupAccountMenu();
    preloadChapterAudio();
  }

  /* Preload this chapter's vocab + first reading/listening lines so the first
     tap is instant. Idle-scheduled, capped, telemetry-aware. */
  function preloadChapterAudio() {
    if (!window.KW_audioPreload) return;
    var list = [];
    (C.vocab || []).forEach(function (v) { if (v.de) list.push(v.de); });
    (C.speaking || []).slice(0, 3).forEach(function (s) { if (s.de) list.push(s.de); });
    if (C.listening && C.listening.transcript) {
      C.listening.transcript.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(Boolean).forEach(function (s) { list.push(s); });
    }
    var warm = function () { window.KW_audioPreload(list.slice(0, 40)); };
    if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 3000 });
    else setTimeout(warm, 1500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
