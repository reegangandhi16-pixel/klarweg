/* ============================================================
   KLARWEG — AI TUTOR  (chapter-tutor.js)
   ------------------------------------------------------------
   A floating tutor that answers ONLY from the current chapter.

   Retrieval-Augmented Generation, fully client-side:
     1. build()      → chunk CHAPTER content into searchable passages
     2. retrieve(q)  → score chunks by term overlap, return top-k
     3. ask(q)       → send ONLY the top chunks (not the whole chapter)
                       to window.claude.complete, with a strict system prompt

   No backend, no vector DB — a lightweight TF-overlap ranker is plenty for a
   single chapter (~40 chunks) and keeps the prompt small + cheap every turn.

   Requires: global `CHAPTER` (chapter-data.js) and window.claude.complete.
============================================================ */
(function (global) {
  'use strict';

  /* ---------- tiny DOM helper ---------- */
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    for (const kid of kids) if (kid != null) n.append(kid.nodeType ? kid : document.createTextNode(kid));
    return n;
  }
  const strip = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  /* ========================================================
     1. INDEX — chunk the chapter into retrievable passages
     ======================================================== */
  const STOP = new Set(('a an the of to in on is are was were be and or but if then this that these those ' +
    'der die das ein eine den dem des ich du er sie es wir ihr und oder ist sind for with from your you it ' +
    'as at by we i my we he she they').split(' '));

  function tokenize(s) {
    return strip(s).toLowerCase()
      .replace(/[^a-zäöüß0-9\s·]/gi, ' ')
      .split(/\s+/)
      .filter(t => t && t.length > 1 && !STOP.has(t));
  }

  const index = []; // { id, type, title, text, tokens:Set, raw }

  function add(type, title, text, raw) {
    const clean = strip(text);
    if (!clean) return;
    index.push({
      id: index.length,
      type, title,
      text: clean,
      raw: raw || clean,
      tokens: new Set(tokenize(title + ' ' + clean)),
    });
  }

  function build() {
    if (index.length || !global.CHAPTER) return;
    const C = global.CHAPTER;

    // Chapter meta / overview
    add('overview', C.title + ' (' + (C.titleEn || '') + ')',
      C.description + ' Level: ' + C.phase + '. Difficulty: ' + C.difficulty + '.');

    // Learning outcomes
    (C.outcomes || []).forEach(o => add('outcome', 'Learning goal', (o.de ? o.de + ' — ' : '') + o.text));

    // Vocabulary — one chunk per word (rich: article, gender, plural, EN, HI, example)
    (C.vocab || []).forEach(v => {
      const det = [
        (v.art ? v.art + ' ' : '') + v.de,
        v.en ? 'English: ' + v.en : '',
        v.hi ? 'Hindi: ' + v.hi : '',
        v.gender ? 'gender: ' + ({ m: 'masculine (der)', f: 'feminine (die)', n: 'neuter (das)' }[v.gender] || v.gender) : '',
        v.plural ? 'plural: ' + v.plural : '',
        v.pos ? 'part of speech: ' + v.pos : '',
        v.ex ? 'example: ' + v.ex + (v.exEn ? ' (' + v.exEn + ')' : '') : '',
      ].filter(Boolean).join('. ');
      add('vocab', 'Vocabulary: ' + (v.art ? v.art + ' ' : '') + v.de, det);
    });

    // Grammar — one chunk per rule card (body + table + examples + mistakes + hinglish)
    (C.grammar || []).forEach(g => {
      let parts = [g.whatIsIt, (g.body || []).map(strip).join(' ')];
      if (g.goldenRule) parts.push('Golden rule: ' + strip(g.goldenRule));
      if (g.why) parts.push('Why: ' + strip(g.why));
      if (g.formula) parts.push('Formula: ' + (Array.isArray(g.formula) ? g.formula : [g.formula]).map(strip).join(' / '));
      if (g.table) {
        parts.push((g.table.head || []).join(' | '));
        (g.table.rows || []).forEach(r => parts.push(r.map(strip).join(' | ')));
      }
      (g.example || []).forEach(e => parts.push(strip(e.html || e)));
      (g.mistakes || []).forEach(m => parts.push('Wrong: ' + strip(m.wrong) + ' → Right: ' + strip(m.right) + (m.why ? ' (' + strip(m.why) + ')' : '')));
      if (g.compare) { if (g.compare.intro) parts.push('Compare: ' + strip(g.compare.intro));
        if (g.compare.head) { parts.push((g.compare.head || []).join(' | '));
          (g.compare.rows || []).forEach(r => parts.push(r.map(strip).join(' | '))); } }
      if (g.connect) parts.push('Connects back: ' + strip(g.connect.text || g.connect));
      if (g.memoryTrick) parts.push('Memory trick: ' + strip(g.memoryTrick));
      if (g.recap) parts.push('Recap: ' + g.recap.map(strip).join('; '));
      if (g.note) parts.push(strip(g.note));
      if (g.hinglish) parts.push('Hinglish: ' + strip(g.hinglish));
      add('grammar', 'Grammar: ' + g.title, parts.filter(Boolean).join('. '));
    });

    // Reading passage (full text + per-token glosses)
    if (C.reading) {
      const passage = (C.reading.tokens || []).map(t => (typeof t === 'string' ? t : t.w)).join(' ');
      add('reading', 'Reading: ' + (C.reading.title || ''), passage + (C.reading.translation ? '. Translation: ' + C.reading.translation : ''));
      (C.reading.tokens || []).forEach(t => {
        if (typeof t === 'object' && t.w && (t.en || t.hi || t.ex)) {
          add('reading-word', 'Word in reading: ' + t.w,
            [t.w, t.type ? '(' + t.type + ')' : '', t.en ? 'English: ' + t.en : '', t.hi ? 'Hindi: ' + t.hi : '', t.ex ? 'example: ' + t.ex : ''].filter(Boolean).join('. '));
        }
      });
    }

    // Listening transcript
    if (C.listening) add('listening', 'Listening transcript',
      (C.listening.transcript || '') + (C.listening.translation ? '. Translation: ' + C.listening.translation : ''));

    // Speaking prompts
    (C.speaking || []).forEach(s => add('speaking', 'Speaking practice', s.de + (s.en ? ' — ' + s.en : '')));

    // Writing prompt
    if (C.writing) add('writing', 'Writing task', C.writing.prompt + ' Starters: ' + (C.writing.starters || []).join(', '));

    // Exercises
    if (C.exercises) {
      const ex = C.exercises;
      if (ex.mcq) add('exercise', 'Exercise (multiple choice)', ex.mcq.q + ' Options: ' + (ex.mcq.options || []).join(', ') + (ex.mcq.explain ? '. ' + ex.mcq.explain : ''));
      const gaps = [].concat(ex.gap || ex.gaps || []);
      gaps.forEach(g => add('exercise', 'Exercise (gap fill)', strip(g.sentence || g.q || g.text || '') + (g.answer ? ' answer: ' + g.answer : '')));
      if (ex.builder) add('exercise', 'Exercise (sentence builder)', strip(ex.builder.target || ex.builder.hint || '') + ' words: ' + [].concat(ex.builder.tokens || ex.builder.words || []).join(' '));
    }

    // Quiz
    [].concat(C.quiz || []).forEach((q, i) => add('quiz', 'Quiz question ' + (i + 1),
      q.q + ' Options: ' + (q.options || []).join(', ') + (q.explain ? '. Explanation: ' + q.explain : '')));

    // Takeaways + revision tips
    (C.takeaways || []).forEach(t => add('summary', 'Key takeaway', strip(t.html || t)));
    (C.revisionTips || []).forEach(t => add('summary', 'Revision tip', strip(t)));
  }

  /* ========================================================
     2. RETRIEVE — score chunks by query-term overlap
     ======================================================== */
  function retrieve(query, k) {
    k = k || 5;
    const qTokens = tokenize(query);
    if (!qTokens.length) return index.slice(0, 3);
    const qSet = new Set(qTokens);

    // Type boosts: a "vocabulary" question should favour vocab chunks, etc.
    const ql = query.toLowerCase();
    const boost = {
      vocab: /\b(mean|meaning|translate|translation|word|vocab|gender|plural|article|matlab|kya hai)\b/.test(ql) ? 1.6 : 1,
      grammar: /\b(why|grammar|rule|case|nominativ|akkusativ|conjugat|ending|der|die|das|explain)\b/.test(ql) ? 1.5 : 1,
      reading: /\b(read|passage|text|story)\b/.test(ql) ? 1.5 : 1,
      quiz: /\b(quiz|answer|question|test)\b/.test(ql) ? 1.4 : 1,
      exercise: /\b(exercise|practice|gap|fill|build)\b/.test(ql) ? 1.4 : 1,
    };

    const scored = index.map(ch => {
      let overlap = 0;
      ch.tokens.forEach(t => { if (qSet.has(t)) overlap++; });
      // also reward exact substring of a query word inside the chunk title (e.g. "Mann")
      let titleHit = 0;
      qTokens.forEach(t => { if (ch.title.toLowerCase().includes(t)) titleHit += 1.5; });
      let score = (overlap + titleHit) * (boost[ch.type] || 1);
      return { ch, score };
    }).filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score);

    if (!scored.length) return index.filter(c => c.type === 'overview' || c.type === 'grammar').slice(0, 3);
    return scored.slice(0, k).map(s => s.ch);
  }

  /* ========================================================
     3. ASK — RAG retrieval + provider-agnostic callLLM adapter
     ======================================================== */

  // Endpoint for the secure server route. Override per deployment with:
  //   window.KW_TUTOR_ENDPOINT = 'https://api.yoursite.com/api/chat'
  function endpoint() {
    return global.KW_TUTOR_ENDPOINT || '/api/chat';
  }

  /**
   * Provider-agnostic client adapter. Sends ONLY the retrieved chunks + the
   * question to the secure /api/chat endpoint (Anthropic Claude server-side).
   * Resolution order:
   *   1. POST /api/chat            — production path (key stays server-side)
   *   2. window.claude.complete    — in-host preview fallback (this workspace)
   *   3. offline chunk summary     — never leave the student with nothing
   */
  async function callLLM(query, hits, history) {
    const C = global.CHAPTER || {};
    function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

    // ── 1. Secure backend endpoint ──────────────────────────
    try {
      const res = await fetch(endpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',          // send the session cookie
        body: JSON.stringify({
          // Server-side RAG: send ONLY an id + the question. The server owns
          // the chapter content and does its own retrieval — we never ship
          // lesson text (which the server would not trust anyway).
          chapterId: (C.id || ((C.phase ? C.phase.slice(0, 2).toLowerCase() : 'a1') + '-' + (C.number || '') + '-' + slugify(C.title || ''))),
          question: query,
          history: (history || []).slice(-6).map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', text: m.text })),
        }),
      });
      if (res.ok || res.status === 503) {
        const data = await res.json();
        if (data && typeof data.text === 'string' && data.text.trim()) {
          return { text: data.text.trim(), sources: hits, offline: !!data.fallback };
        }
      }
      // 401/403/429/4xx or empty → fall through to the next strategy
    } catch (e) {
      // network/endpoint missing (e.g. static preview) → fall through
    }

    // ── 2. In-host preview fallback (window.claude) ─────────
    if (global.claude && typeof global.claude.complete === 'function') {
      const recent = (history || []).slice(-4)
        .map(m => (m.role === 'user' ? 'Student' : 'Tutor') + ': ' + m.text).join('\n');
      const context = hits.map((c, i) => '[' + (i + 1) + '] ' + c.title + ': ' + c.text).join('\n\n');
      const system =
        'You are Klara, a warm, patient German tutor inside the Klarweg lesson "' +
        (C.title || '') + ' (' + (C.titleEn || '') + ')", level ' + (C.phase || 'A1') + '.\n' +
        'The student is a beginner who speaks Hindi and English. Be encouraging and concrete.\n\n' +
        'STRICT RULES:\n' +
        '1. Answer ONLY using the CHAPTER CONTEXT below. This tutor is scoped to THIS chapter.\n' +
        '2. If the answer is not in the context, say so kindly and point to what the chapter DOES cover. Never invent content beyond the chapter.\n' +
        '3. Beginner-friendly and short (under ~120 words). Prefer a clear example.\n' +
        '4. Support German, English, and Hindi. For a German word/sentence add the English meaning and a simple Roman-Hindi gloss (e.g. "aadmi"), no diacritics.\n' +
        '5. No HTML or markdown tables.\n' +
        '6. Never give writing/quiz answers outright — nudge with a hint first.\n\n' +
        'CHAPTER CONTEXT (the only source you may use):\n' + context +
        (recent ? '\n\nRECENT CONVERSATION:\n' + recent : '');
      try {
        const out = await global.claude.complete({ messages: [{ role: 'user', content: system + '\n\nStudent question: ' + query + '\n\nTutor answer:' }] });
        if (out && out.trim()) return { text: out.trim(), sources: hits, offline: false };
      } catch (e) { /* fall through */ }
    }

    // ── 3. Offline fallback — surface the retrieved chunks ──
    return {
      text: "I can't reach the AI tutor right now, but here's the most relevant part of this chapter:\n\n" +
        hits.slice(0, 2).map(c => '• ' + c.title + ': ' + c.text).join('\n\n') +
        '\n\nPlease try again in a moment.',
      sources: hits,
      offline: true,
    };
  }

  async function ask(query, history) {
    build();
    const hits = retrieve(query, 5);   // RAG: only the top chunks leave the page
    return callLLM(query, hits, history);
  }

  /* ========================================================
     4. UI — floating button + right-side chat panel
     ======================================================== */
  const SUGGESTIONS = [
    'Explain the nominative simply',
    'What does "der/die/das" mean?',
    'Give me an example sentence',
    'Why is it "der Mann"?',
  ];

  function buildUI() {
    if (document.getElementById('kw-tutor-fab')) return;

    // Floating action button
    const fab = el('button', { id: 'kw-tutor-fab', class: 'kw-tutor-fab', type: 'button', 'aria-label': 'Ask the AI tutor' });
    fab.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3C7 3 3 6.4 3 10.6c0 2.2 1.1 4.1 2.9 5.5L5 21l4.3-2.1c.85.2 1.76.3 2.7.3 5 0 9-3.4 9-7.6S17 3 12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 10.5h7M8.5 13h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
      '<span class="kw-tutor-fab-label">Ask Klara</span>';
    document.body.appendChild(fab);

    // Scrim + panel
    const scrim = el('div', { id: 'kw-tutor-scrim', class: 'kw-tutor-scrim' });
    const panel = el('div', { id: 'kw-tutor-panel', class: 'kw-tutor-panel', role: 'dialog', 'aria-label': 'AI tutor', 'aria-modal': 'false' });

    const C = global.CHAPTER || {};
    panel.innerHTML =
      '<header class="kw-tutor-head">' +
        '<div class="kw-tutor-head-l">' +
          '<span class="kw-tutor-avatar">K</span>' +
          '<div><div class="kw-tutor-name">Klara · AI Tutor</div>' +
          '<div class="kw-tutor-scope">Chapter ' + (C.number || '') + ' · ' + (C.title || '') + '</div></div>' +
        '</div>' +
        '<button class="kw-tutor-close" type="button" aria-label="Close tutor">&#10005;</button>' +
      '</header>' +
      '<div class="kw-tutor-log" id="kw-tutor-log"></div>' +
      '<div class="kw-tutor-suggest" id="kw-tutor-suggest"></div>' +
      '<form class="kw-tutor-input" id="kw-tutor-form">' +
        '<textarea id="kw-tutor-text" rows="1" placeholder="Ask about this chapter…" aria-label="Your question"></textarea>' +
        '<button class="kw-tutor-send" type="submit" aria-label="Send">' +
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12l16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>' +
        '</button>' +
      '</form>' +
      '<div class="kw-tutor-foot">Answers come only from this chapter. Klara can make mistakes — check the lesson.</div>';

    document.body.append(scrim, panel);

    const log = panel.querySelector('#kw-tutor-log');
    const form = panel.querySelector('#kw-tutor-form');
    const textarea = panel.querySelector('#kw-tutor-text');
    const suggestWrap = panel.querySelector('#kw-tutor-suggest');
    const history = [];

    function open() {
      build();
      document.body.classList.add('kw-tutor-open');
      panel.classList.add('open'); scrim.classList.add('open'); fab.classList.add('hidden');
      if (!log.childElementCount) greet();
      setTimeout(() => textarea.focus(), 280);
    }
    function close() {
      document.body.classList.remove('kw-tutor-open');
      panel.classList.remove('open'); scrim.classList.remove('open'); fab.classList.remove('hidden');
    }
    fab.addEventListener('click', open);
    scrim.addEventListener('click', close);
    panel.querySelector('.kw-tutor-close').addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });

    function bubble(role, text, opts) {
      opts = opts || {};
      const b = el('div', { class: 'kw-tutor-msg ' + role });
      const body = el('div', { class: 'kw-tutor-bubble' });
      body.innerHTML = opts.html || formatText(text);
      b.appendChild(body);
      if (opts.sources && opts.sources.length) {
        const src = el('div', { class: 'kw-tutor-sources' });
        src.appendChild(el('span', { class: 'kw-tutor-sources-label' }, 'From this chapter:'));
        opts.sources.slice(0, 3).forEach(s => src.appendChild(el('span', { class: 'kw-tutor-chip' }, s.title.replace(/^(Vocabulary|Grammar|Reading|Quiz|Exercise|Word in reading): ?/, ''))));
        body.appendChild(src);
      }
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
      return body;
    }

    function formatText(t) {
      // minimal, safe formatting: escape, then bold **x**, line breaks, simple bullets
      const esc = String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return esc
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
        .replace(/^[•\-]\s?(.+)$/gm, '<span class="kw-li">• $1</span>')
        .replace(/\n/g, '<br>');
    }

    function greet() {
      bubble('bot', 'Hallo! 👋 I\'m Klara. Ask me anything about **' + (C.title || 'this chapter') +
        '** — a word\'s meaning, why an article is der/die/das, an example sentence, or help with an exercise. ' +
        'You can write in English, German, or Hindi.');
      renderSuggestions();
    }

    function renderSuggestions() {
      suggestWrap.innerHTML = '';
      SUGGESTIONS.forEach(s => {
        const chip = el('button', { class: 'kw-tutor-suggest-chip', type: 'button' }, s);
        chip.addEventListener('click', () => { textarea.value = s; submit(); });
        suggestWrap.appendChild(chip);
      });
    }

    let busy = false;
    async function submit() {
      const q = textarea.value.trim();
      if (!q || busy) return;
      busy = true;
      suggestWrap.innerHTML = '';
      textarea.value = ''; autosize();
      bubble('user', q);
      history.push({ role: 'user', text: q });

      const typing = bubble('bot', '', { html: '<span class="kw-tutor-typing"><i></i><i></i><i></i></span>' });
      try {
        const res = await ask(q, history);
        typing.closest('.kw-tutor-msg').remove();
        const body = bubble('bot', res.text, { sources: res.sources });
        history.push({ role: 'bot', text: res.text });
      } catch (err) {
        typing.closest('.kw-tutor-msg').remove();
        bubble('bot', 'Sorry — I had trouble answering just now. Please try again.');
      } finally {
        busy = false;
        renderSuggestions();
        textarea.focus();
      }
    }

    form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
    });
    function autosize() { textarea.style.height = 'auto'; textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'; }
    textarea.addEventListener('input', autosize);
  }

  /* ---------- public API + boot ---------- */
  global.KW_Tutor = { build, retrieve, ask };

  function boot() {
    if (!global.CHAPTER) return;       // only on chapter pages
    build();
    buildUI();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
