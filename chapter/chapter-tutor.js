/* ============================================================
   KLARWEG AI — inline feedback modules  (chapter-tutor.js)
   ------------------------------------------------------------
   Loaded by every chapter page (the filename is kept so the 258
   pages need no edits). It is a thin client:

     · it NEVER talks to an AI provider and holds no prompt,
       answer key or rule — it sends ids + the learner's input to
       the klarweg-access Worker (POST /ai/<action>), which checks
       session, entitlement and quota and forwards to the private
       klarweg-tutor Worker;
     · it renders NOTHING until GET /ai/status says Klarweg AI is
       enabled for this learner and chapter — with AI off, the
       lesson looks and works exactly as before;
     · every reply is rendered as text (textContent); German
       fragments are handed to the chapter's own deterministic
       word renderer, and grammar-role colours come from Klarweg's
       .r-<role> classes, never from the model.

   Contract with chapter-app.js — it registers inline slots:
     (window.KW_AI_QUEUE = window.KW_AI_QUEUE || []).push(spec)
   spec = { host, kind, itemId, ...kind-specific }
     kind 'writing'  : getText(), lock(), isExam
     kind 'speaking' : transcript, isExam
     kind 'exercise' : getInput(), attempt(), isExam, canPractise, onPractice(item, panel)
     kind 'grammar'  : (grammar card)
     kind 'quiz'     : answers [{i, chosen}]
   ============================================================ */
(function (global) {
  'use strict';

  var C = global.CHAPTER;
  if (!C || !C.id) return;

  var LANG_KEY = 'kw-ai-lang';
  var RECENT_KEY = 'kw-ai-recent-' + C.id;
  var COLOUR_ROLES = { subject: 1, verb: 1, object: 1, time: 1, place: 1, akkusativ: 1, dativ: 1, genitiv: 1, modalverb: 1, article: 1, preposition: 1, negation: 1, adjective: 1, adverb: 1, question: 1, pronoun: 1 };
  var ROLE_LABEL = { akkusativ: 'Akkusativ', dativ: 'Dativ', genitiv: 'Genitiv', modalverb: 'modal verb', word_order: 'word order' };

  function api() { return global.KW_ACCESS_API || ''; }

  /* ---------- tiny DOM helpers (text only, never innerHTML with data) ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function btn(label, onClick, cls) {
    var b = el('button', 'btn btn-soft btn-small kw-ai-btn' + (cls ? ' ' + cls : ''), label);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
  }
  /* German text goes through the chapter's own renderer (tap-to-look-up,
     deterministic role colouring) when available; plain text otherwise. */
  function german(text) {
    var ui = global.KW_ChapterUI;
    if (ui && typeof ui.germanSpans === 'function') {
      try { var n = ui.germanSpans(String(text)); if (n) return n; } catch (e) { /* fall through */ }
    }
    return el('span', 'de', text);
  }

  function lang() { try { return localStorage.getItem(LANG_KEY) === 'hi' ? 'hi' : 'en'; } catch (e) { return 'en'; } }
  function setLang(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }

  /* Session-only mistake memory (item ids, never text): lets the server
     say "you also struggled with …" without any stored learner history. */
  function recent() { try { return JSON.parse(sessionStorage.getItem(RECENT_KEY) || '[]'); } catch (e) { return []; } }
  function noteMistake(itemId) {
    try {
      var list = recent().filter(function (x) { return x !== itemId; });
      list.unshift(itemId);
      sessionStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)));
    } catch (e) {}
  }

  /* ---------- status: one request per page, only when a slot exists ---------- */
  var statusPromise = null;
  function status() {
    if (statusPromise) return statusPromise;
    if (!api() || typeof fetch !== 'function') return (statusPromise = Promise.resolve({ enabled: false }));
    statusPromise = fetch(api() + '/ai/status?chapter=' + encodeURIComponent(C.id), { credentials: 'include' })
      .then(function (r) { return r.ok ? r.json() : { enabled: false }; })
      .catch(function () { return { enabled: false }; });
    return statusPromise;
  }

  /* ---------- request ---------- */
  function call(action, payload) {
    var body = Object.assign({ chapterId: C.id, lang: lang(), recent: recent() }, payload);
    return fetch(api() + '/ai/' + action, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { j = j || {}; j.httpStatus = r.status; return j; });
    }, function () {
      return { ok: false, httpStatus: 0, error: 'network', message: 'Klarweg AI could not be reached. Check your connection — the lesson works as normal.' };
    });
  }

  /* ---------- output panel ---------- */
  function panel(host) {
    var p = null;
    for (var i = 0; i < host.children.length; i++) if (host.children[i].classList.contains('kw-ai-out')) p = host.children[i];
    if (!p) { p = el('div', 'kw-ai-out'); p.setAttribute('aria-live', 'polite'); host.appendChild(p); }
    p.innerHTML = '';
    return p;
  }
  function head(p, label) {
    var h = el('div', 'kw-ai-head');
    h.appendChild(el('span', 'kw-ai-mark', 'Klarweg AI'));
    if (label) h.appendChild(el('span', 'kw-ai-sub', label));
    p.appendChild(h);
  }
  function busy(host, label) {
    var p = panel(host);
    head(p, label);
    p.appendChild(el('p', 'kw-ai-busy', 'Checking…'));
    return p;
  }
  function failure(p, res) {
    p.innerHTML = '';
    head(p, null);
    var msg = res.message || 'Klarweg AI is unavailable right now. The lesson works as normal.';
    if (res.httpStatus === 401) msg = 'Your session has ended. Sign in again to use Klarweg AI.';
    p.appendChild(el('p', 'kw-ai-note', msg));
  }
  function notice(p, res) {
    if (res.source === 'fallback' && res.notice) p.appendChild(el('p', 'kw-ai-note', res.notice));
  }
  function roleChip(role) {
    return el('span', 'kw-ai-role' + (COLOUR_ROLES[role] ? ' r-' + role : ''), ROLE_LABEL[role] || String(role || '').replace(/_/g, ' '));
  }
  function hindi(p, text) {
    if (!text) return;
    var d = el('div', 'kw-ai-hindi', text);
    d.lang = 'hi';
    p.appendChild(d);
  }
  function labelled(label, content, cls) {
    var d = el('div', cls || 'kw-ai-next');
    d.appendChild(el('span', 'kw-ai-label', label));
    d.appendChild(typeof content === 'string' ? el('span', null, content) : content);
    return d;
  }
  function langToggle() {
    var wrap = el('div', 'kw-ai-lang');
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Explanation language');
    [['en', 'English'], ['hi', 'English + हिंदी']].forEach(function (o) {
      var b = el('button', 'kw-ai-lang-opt' + (lang() === o[0] ? ' is-active' : ''), o[1]);
      b.type = 'button';
      b.setAttribute('aria-pressed', lang() === o[0] ? 'true' : 'false');
      b.addEventListener('click', function () {
        setLang(o[0]);
        Array.prototype.forEach.call(wrap.children, function (c) { var on = c === b; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      });
      wrap.appendChild(b);
    });
    return wrap;
  }
  function actionsRow(host) {
    var row = el('div', 'kw-ai-actions');
    host.appendChild(row);
    return row;
  }
  function setDisabled(row, v) { Array.prototype.forEach.call(row.querySelectorAll('.kw-ai-btn'), function (b) { b.disabled = v; }); }

  /* ---------- feedback rendering (writing / speaking) ---------- */
  function renderFeedback(p, r) {
    if (r.summary) p.appendChild(el('p', 'kw-ai-summary', r.summary));
    if (r.corrections && r.corrections.length) {
      var ul = el('ul', 'kw-ai-corrections');
      r.corrections.forEach(function (c) {
        var li = el('li', 'kw-ai-corr' + (c.severity === 'style' ? ' is-style' : ''));
        var line = el('div', 'kw-ai-corr-line');
        line.appendChild(el('span', 'kw-ai-wrong de', c.wrong));
        line.appendChild(el('span', 'kw-ai-arrow', '→'));
        var right = el('span', 'kw-ai-right');
        right.appendChild(german(c.right));
        line.appendChild(right);
        line.appendChild(roleChip(c.role));
        li.appendChild(line);
        if (c.reason) li.appendChild(el('div', 'kw-ai-reason', c.reason));
        ul.appendChild(li);
      });
      p.appendChild(ul);
    }
    if (r.focus && r.focus.note && r.focus.status !== 'not_applicable') p.appendChild(labelled('This chapter’s grammar', r.focus.note, 'kw-ai-focus'));
    if (r.rubric && r.rubric.length) {
      var rb = el('div', 'kw-ai-rubric');
      r.rubric.forEach(function (x) {
        var row = el('div', 'kw-ai-rubric-row');
        row.appendChild(el('span', 'kw-ai-label', x.criterion));
        row.appendChild(el('span', 'kw-ai-band is-' + x.band, x.band));
        row.appendChild(el('span', 'kw-ai-reason', x.note));
        rb.appendChild(row);
      });
      p.appendChild(rb);
    }
    if (r.improved) {
      var body = el('p', 'kw-ai-improved-text');
      body.appendChild(german(r.improved));
      p.appendChild(labelled('Your text, corrected at your level', body, 'kw-ai-improved'));
    }
    hindi(p, r.hindi_bridge);
    if (r.next_action) p.appendChild(labelled('Next', r.next_action));
  }

  /* ---------- kinds ---------- */
  function mountWriting(spec) {
    var row = actionsRow(spec.host);
    function run(mode, label) {
      var text = String(spec.getText() || '').trim();
      if (!text) { var e = panel(spec.host); head(e, null); e.appendChild(el('p', 'kw-ai-note', 'Write your text first.')); return; }
      var payload = { sectionId: 'writing', itemId: 'writing', input: text };
      if (spec.isExam) { spec.lock(); payload.submitted = true; } else payload.mode = mode;
      var p = busy(spec.host, label);
      setDisabled(row, true);
      call('check_writing', payload).then(function (res) {
        // An exam submission stays locked; a failed call unlocks so the learner can retry.
        setDisabled(row, !!spec.isExam && res.ok);
        if (spec.isExam && !res.ok && spec.unlock) spec.unlock();
        if (!res.ok) return failure(p, res);
        p.innerHTML = '';
        head(p, label);
        renderFeedback(p, res.result || {});
      });
    }
    if (spec.isExam) {
      row.appendChild(btn('Submit for examiner feedback', function () { run('exam', 'Examiner-style feedback'); }, 'kw-ai-primary'));
      row.appendChild(el('span', 'kw-ai-hint', 'Your text is locked once submitted, as in the exam.'));
    } else {
      row.appendChild(btn('Check my German', function () { run('check', 'Feedback on your German'); }, 'kw-ai-primary'));
      row.appendChild(btn('Improve without raising my level', function () { run('improve', 'Corrected at your level'); }));
      row.appendChild(langToggle());
    }
  }

  function mountSpeaking(spec) {
    var row = actionsRow(spec.host);
    var label = 'Grammar and word choice in what was recognised';
    row.appendChild(btn('Check my German', function () {
      var p = busy(spec.host, label);
      setDisabled(row, true);
      call('check_speaking', { sectionId: 'speaking', itemId: spec.itemId, input: spec.transcript }).then(function (res) {
        setDisabled(row, false);
        if (!res.ok) return failure(p, res);
        p.innerHTML = '';
        head(p, label);
        renderFeedback(p, res.result || {});
        p.appendChild(el('p', 'kw-ai-note', 'Based on the speech-recognition transcript. Pronunciation is not assessed.'));
      });
    }, 'kw-ai-primary'));
  }

  function mountExercise(spec) {
    var row = actionsRow(spec.host);
    function run(mode) {
      var input = spec.getInput();
      if (!String(input || '').replace(/[|\s]/g, '')) { var e = panel(spec.host); head(e, null); e.appendChild(el('p', 'kw-ai-note', 'Type your answer first.')); return; }
      var attempt = spec.isExam ? 3 : spec.attempt();
      var label = mode === 'why' ? 'Why your answer is wrong' : 'Hint ' + Math.min(attempt, 3) + ' of 3';
      var p = busy(spec.host, label);
      setDisabled(row, true);
      call('check_exercise', { sectionId: 'exercises', itemId: spec.itemId, input: input, attempt: attempt, mode: mode }).then(function (res) {
        setDisabled(row, false);
        if (!res.ok) return failure(p, res);
        var r = res.result || {};
        p.innerHTML = '';
        head(p, label);
        notice(p, res);
        if (r.correct) {
          p.appendChild(el('p', 'kw-ai-summary', r.variant ? 'Accepted — your answer is also correct.' : 'Correct.'));
          if (r.explanation) p.appendChild(el('p', 'kw-ai-reason', r.explanation));
          if (r.variant && r.answer) p.appendChild(labelled('The lesson’s version', german(r.answer)));
          return;
        }
        noteMistake(spec.itemId);
        if (r.rule_hint) p.appendChild(el('p', 'kw-ai-summary', r.rule_hint));
        if (r.focus_fragment) p.appendChild(labelled('Look again at', el('span', 'kw-ai-wrong de', r.focus_fragment), 'kw-ai-focus'));
        else if (r.missing) p.appendChild(el('p', 'kw-ai-reason', 'Something is missing at the end of your answer.'));
        if (r.explanation) p.appendChild(el('p', 'kw-ai-reason', r.explanation));
        if (r.answer) {
          p.appendChild(labelled('Answer', german(r.answer)));
          if (r.authored_explain) p.appendChild(el('p', 'kw-ai-reason', r.authored_explain));
        }
        hindi(p, r.hindi_bridge);
      });
    }
    if (!spec.isExam) row.appendChild(btn('Give me a hint', function () { run('hint'); }, 'kw-ai-primary'));
    row.appendChild(btn('Why is my answer wrong?', function () { run('why'); }));
    if (spec.canPractise && !spec.isExam) {
      row.appendChild(btn('Give me another like this', function () {
        var p = busy(spec.host, 'Practice sentence');
        setDisabled(row, true);
        call('more_like_this', { sectionId: 'exercises', itemId: spec.itemId }).then(function (res) {
          setDisabled(row, false);
          if (!res.ok) return failure(p, res);
          p.innerHTML = '';
          head(p, 'Practice sentence · generated, not part of the lesson');
          if (spec.onPractice) spec.onPractice(res.result, p);
        });
      }));
    }
    if (!spec.isExam) row.appendChild(langToggle());
  }

  function mountGrammar(spec) {
    var row = actionsRow(spec.host);
    row.appendChild(el('span', 'kw-ai-hint', 'Explain differently'));
    [['simpler', 'Simpler'], ['example', 'More examples'], ['compare', 'Compare with an earlier rule'], ['hindi', 'हिंदी में']].forEach(function (m) {
      row.appendChild(btn(m[1], function () {
        var p = busy(spec.host, m[1]);
        setDisabled(row, true);
        call('explain_grammar', { sectionId: 'grammar', itemId: spec.itemId, mode: m[0] }).then(function (res) {
          setDisabled(row, false);
          if (!res.ok) return failure(p, res);
          var r = res.result || {};
          p.innerHTML = '';
          head(p, m[1]);
          if (r.explanation) p.appendChild(el('p', 'kw-ai-summary', r.explanation));
          (r.examples || []).forEach(function (x) {
            var d = el('div', 'kw-ai-example');
            d.appendChild(german(x.de));
            d.appendChild(el('span', 'kw-ai-reason', x.en));
            p.appendChild(d);
          });
          hindi(p, r.hindi_bridge);
          p.appendChild(el('p', 'kw-ai-note', 'The rule card above is the authoritative version.'));
        });
      }));
    });
  }

  function mountQuiz(spec) {
    var row = actionsRow(spec.host);
    row.appendChild(btn('Review my mistakes', function () {
      var p = busy(spec.host, 'Quiz review');
      setDisabled(row, true);
      call('quiz_review', { sectionId: 'quiz', itemId: 'quiz', answers: spec.answers }).then(function (res) {
        setDisabled(row, false);
        if (!res.ok) return failure(p, res);
        var r = res.result || {};
        p.innerHTML = '';
        head(p, 'Quiz review');
        notice(p, res);
        if (r.allCorrect) { p.appendChild(el('p', 'kw-ai-summary', 'No mistakes to review.')); return; }
        if (r.pattern) p.appendChild(el('p', 'kw-ai-summary', r.pattern));
        var ul = el('ul', 'kw-ai-corrections');
        (r.items || []).forEach(function (x) {
          var li = el('li', 'kw-ai-corr');
          li.appendChild(el('span', 'kw-ai-label', 'Question ' + (x.i + 1)));
          li.appendChild(el('div', 'kw-ai-reason', x.why));
          ul.appendChild(li);
        });
        p.appendChild(ul);
        var labels = {};
        (C.sections || []).forEach(function (s) { labels[s.id] = s.label; });
        (r.review || []).forEach(function (x) {
          var a = el('a', 'kw-ai-link', 'Revisit ' + (labels[x.section] || x.section));
          a.href = '#sec-' + x.section;
          var d = el('div', 'kw-ai-next');
          d.appendChild(a);
          d.appendChild(el('span', 'kw-ai-reason', x.reason));
          p.appendChild(d);
        });
        if (r.next_action) p.appendChild(labelled('Next', r.next_action));
      });
    }, 'kw-ai-primary'));
  }

  var MOUNT = { writing: mountWriting, speaking: mountSpeaking, exercise: mountExercise, grammar: mountGrammar, quiz: mountQuiz };

  /* ---------- queue ---------- */
  function mount(spec) {
    if (!spec || !spec.host || !MOUNT[spec.kind]) return;
    status().then(function (s) {
      // AI off, signed out, or not entitled to this chapter → render nothing.
      if (!s || !s.enabled || !s.eligible) return;
      if (!spec.host.isConnected || spec.host.getAttribute('data-kw-ai') === 'on') return;
      spec.host.setAttribute('data-kw-ai', 'on');
      spec.host.classList.add('kw-ai');
      MOUNT[spec.kind](spec);
    });
  }

  var pending = Array.isArray(global.KW_AI_QUEUE) ? global.KW_AI_QUEUE : [];
  global.KW_AI_QUEUE = { push: mount };
  pending.forEach(mount);
  global.KW_AI = { status: status };
})(window);
