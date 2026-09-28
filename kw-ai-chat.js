/* ============================================================
   KLARWEG · HOMEPAGE AI CHAT (kw-ai-chat.js)
   ------------------------------------------------------------
   General German-learning questions, answered by Klarweg AI.

   Browser → klarweg-access (/ai/status?scope=chat, POST /ai/chat)
           → klarweg-tutor → model provider.
   This file holds no key and no instructions; the server decides
   who may chat (signed in + owns a level, or a signed-out visitor
   within today's free questions) and how much. The remaining count
   shown here is display only — the server enforces it.

   Privacy: the conversation lives only in this page's memory. The
   last few turns are sent with each question for context and are
   never stored in the browser.

   Performance: nothing is requested until the chat section comes
   near the viewport (IntersectionObserver).
   ============================================================ */
(function (global) {
  'use strict';

  var root = document.querySelector('[data-kw-chat]');
  if (!root) return;

  var LANG_KEY = 'kw-ai-lang';            // shared with the chapter Klarweg AI
  var MAX_MESSAGE = 600;                  // mirrors the server limit
  var MAX_TURNS = 6;                      // turns of context sent per question

  var log = root.querySelector('[data-kw-chat-log]');
  var form = root.querySelector('[data-kw-chat-form]');
  var input = root.querySelector('[data-kw-chat-input]');
  var send = root.querySelector('[data-kw-chat-send]');
  var statusLine = root.querySelector('[data-kw-chat-status]');
  var gate = root.querySelector('[data-kw-chat-gate]');
  var starters = root.querySelector('[data-kw-chat-starters]');
  var langButtons = root.querySelectorAll('[data-kw-chat-lang]');

  var history = [];      // { role: 'user' | 'assistant', text }
  var state = { eligible: false, busy: false, remaining: null, checked: false, anon: false, monthLimited: false };

  function api() { return String(global.KW_ACCESS_API || '').replace(/\/+$/, ''); }

  /* ---------- tiny DOM helpers (text only, never innerHTML with data) ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- language preference ---------- */
  function lang() { try { return localStorage.getItem(LANG_KEY) === 'hi' ? 'hi' : 'en'; } catch (e) { return 'en'; } }
  function setLang(v) {
    try { localStorage.setItem(LANG_KEY, v); } catch (e) {}
    paintLang();
  }
  function paintLang() {
    var current = lang();
    for (var i = 0; i < langButtons.length; i++) {
      var on = langButtons[i].getAttribute('data-kw-chat-lang') === current;
      langButtons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      langButtons[i].classList.toggle('is-active', on);
    }
  }
  for (var li = 0; li < langButtons.length; li++) {
    langButtons[li].addEventListener('click', function () { setLang(this.getAttribute('data-kw-chat-lang')); });
  }
  paintLang();

  /* ---------- availability ---------- */
  function setStatusText(text) { if (statusLine) statusLine.textContent = text; }

  function setEnabled(on) {
    state.eligible = on;
    input.disabled = !on || state.busy;
    send.disabled = !on || state.busy || !input.value.trim();
  }

  function showGate(message, link) {
    gate.textContent = '';
    gate.appendChild(el('span', null, message + ' '));
    if (link) {
      var a = el('a', 'kw-chat-gate-link', link.label);
      a.href = link.href;
      gate.appendChild(a);
    }
    gate.hidden = false;
  }
  function hideGate() { gate.hidden = true; gate.textContent = ''; }

  function signInLink() {
    var auth = global.KWAuth;
    var href = auth && typeof auth.accountUrl === 'function'
      ? auth.accountUrl({ mode: 'login', next: global.location.pathname + '#klarweg-ai' })
      : 'account/index.html?mode=login';
    return { label: 'Sign in', href: href };
  }

  function remainingText(n) {
    if (n == null) return 'German-learning questions';
    var q = state.anon ? (n === 1 ? ' free question' : ' free questions') : (n === 1 ? ' question' : ' questions');
    return n + q + ' left today';
  }

  /* Out of questions for today: lock the chat. A signed-out visitor is
     sent to sign in; a learner waits for the reset. */
  function showUsedUp() {
    setEnabled(false);
    if (state.anon) {
      setStatusText('Sign in to ask');
      showGate('You have used today’s free Klarweg AI questions. Sign in to keep asking.', signInLink());
    } else if (state.monthLimited) {
      setStatusText(remainingText(0));
      showGate('You have used this month’s Klarweg AI chat questions.');
    } else {
      setStatusText(remainingText(0));
      showGate('You have used today’s Klarweg AI chat questions. They reset at midnight UTC.');
    }
  }

  function applyStatus(s) {
    state.checked = true;
    state.anon = !!(s && s.enabled && !s.signedIn && s.eligible);
    if (!s || !s.enabled) {
      setEnabled(false);
      setStatusText('Not available right now');
      showGate('Klarweg AI chat is not available right now. The course works as normal.');
      return;
    }
    if (!s.signedIn && !s.eligible) {
      setEnabled(false);
      setStatusText('Sign in to ask');
      showGate('Sign in to ask Klarweg AI.', signInLink());
      return;
    }
    if (!s.eligible) {
      setEnabled(false);
      setStatusText('Included with every course level');
      showGate('Klarweg AI chat is included with every Klarweg course level.', { label: 'See the courses', href: 'courses.html' });
      return;
    }
    // Whichever runs out first — today's or this month's questions — is
    // what is actually left.
    var r = s.remaining || {};
    var day = typeof r.day === 'number' ? r.day : null;
    var month = typeof r.month === 'number' ? r.month : null;
    state.monthLimited = month != null && (day == null || month <= day);
    state.remaining = state.monthLimited ? month : day;
    hideGate();
    if (state.remaining === 0) { showUsedUp(); return; }
    setStatusText(remainingText(state.remaining));
    setEnabled(true);
  }

  var statusInflight = null;
  function checkStatus() {
    if (statusInflight) return statusInflight;
    if (!api() || typeof fetch !== 'function') { applyStatus({ enabled: false }); return Promise.resolve(); }
    statusInflight = fetch(api() + '/ai/status?scope=chat', { credentials: 'include' })
      .then(function (r) { return r.ok ? r.json() : { enabled: false }; })
      .catch(function () { return { enabled: false }; })
      .then(function (s) { statusInflight = null; applyStatus(s); });
    return statusInflight;
  }

  /* ---------- rendering ---------- */
  function scrollToEnd() { log.scrollTop = log.scrollHeight; }

  function addUser(text) {
    var m = el('div', 'msg msg-user');
    m.appendChild(el('div', 'msg-bubble', text));
    log.appendChild(m);
    scrollToEnd();
  }

  function addPending() {
    var m = el('div', 'msg msg-ai kw-chat-pending');
    m.appendChild(el('div', 'msg-bubble', 'Writing an answer…'));
    log.appendChild(m);
    scrollToEnd();
    return m;
  }

  function addNote(text) {
    var m = el('div', 'msg msg-ai kw-chat-note');
    m.appendChild(el('div', 'msg-bubble', text));
    log.appendChild(m);
    scrollToEnd();
  }

  function addAnswer(result) {
    var m = el('div', 'msg msg-ai');
    var bubble = el('div', 'msg-bubble kw-chat-answer');
    String(result.answer || '').split(/\n{2,}/).forEach(function (para) {
      if (para.trim()) bubble.appendChild(el('p', null, para.trim()));
    });
    var examples = Array.isArray(result.examples) ? result.examples : [];
    if (examples.length) {
      var list = el('ul', 'kw-chat-examples');
      examples.forEach(function (x) {
        var row = el('li', 'kw-chat-example');
        var de = el('span', 'kw-chat-de', x.de);
        de.setAttribute('lang', 'de');
        row.appendChild(de);
        row.appendChild(el('span', 'kw-chat-tr', x.en));
        list.appendChild(row);
      });
      bubble.appendChild(list);
    }
    m.appendChild(bubble);
    var follow = Array.isArray(result.follow_ups) ? result.follow_ups : [];
    if (follow.length) {
      var row2 = el('div', 'kw-chat-followups');
      follow.forEach(function (q) {
        var b = el('button', 'kw-chat-chip', q);
        b.type = 'button';
        b.addEventListener('click', function () { ask(q); });
        row2.appendChild(b);
      });
      m.appendChild(row2);
    }
    log.appendChild(m);
    scrollToEnd();
  }

  /* ---------- asking ---------- */
  function ask(text) {
    var message = String(text || '').trim().slice(0, MAX_MESSAGE);
    if (!message || state.busy) return;
    if (!state.eligible) { if (!state.checked) checkStatus(); return; }
    if (starters) starters.hidden = true;

    state.busy = true;
    setEnabled(true);
    addUser(message);
    input.value = '';
    var pending = addPending();

    fetch(api() + '/ai/chat', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message, history: history.slice(-MAX_TURNS), lang: lang() })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { j = j || {}; j.httpStatus = r.status; return j; });
    }, function () {
      return { ok: false, httpStatus: 0, message: 'Klarweg AI could not be reached. Check your connection and try again.' };
    }).then(function (res) {
      pending.remove();
      state.busy = false;
      if (res.ok && res.result) {
        addAnswer(res.result);
        history.push({ role: 'user', text: message });
        history.push({ role: 'assistant', text: String(res.result.answer || '') });
        history = history.slice(-MAX_TURNS);
        if (typeof state.remaining === 'number') {
          state.remaining = Math.max(0, state.remaining - 1);
          setStatusText(remainingText(state.remaining));
          if (state.remaining === 0) { showUsedUp(); return; }
        }
        setEnabled(true);
        input.focus();
        return;
      }
      // Server messages are fixed, learner-safe strings; never raw provider text.
      addNote(res.message || 'Klarweg AI chat is unavailable right now. Please try again in a moment.');
      if (res.httpStatus === 401 || res.httpStatus === 403 || res.httpStatus === 429) {
        checkStatus();
      } else {
        setEnabled(true);
      }
    });
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });
  input.addEventListener('input', function () { send.disabled = !state.eligible || state.busy || !input.value.trim(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(input.value); }
  });
  if (starters) {
    var chips = starters.querySelectorAll('button');
    for (var ci = 0; ci < chips.length; ci++) {
      chips[ci].addEventListener('click', function () {
        if (state.eligible) ask(this.textContent);
        else { input.value = this.textContent; checkStatus(); }
      });
    }
  }

  /* ---------- lazy start + auth changes ---------- */
  function start() { if (!state.checked) checkStatus(); }
  if ('IntersectionObserver' in global) {
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); start(); }
    }, { rootMargin: '300px 0px' });
    io.observe(root);
  } else {
    start();
  }
  input.addEventListener('focus', start);
  if (global.KWAuth && typeof global.KWAuth.onChange === 'function') {
    global.KWAuth.onChange(function () { if (state.checked) { statusInflight = null; checkStatus(); } });
  }
})(window);
