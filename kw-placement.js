/* ============================================================
   KLARWEG · LEVEL PLACEMENT CHECK (kw-placement.js)
   ------------------------------------------------------------
   A short, client-side self-assessment for a visitor who doesn't
   know which level to start at. No account, no signup, no server
   round-trip — the same "Chapter 1 free, no signup, no card" spirit
   as the rest of the site.

   German content: the six QUESTIONS below were re-verified from first
   principles on 2026-09-24 (per-question case/conjugation/mood check,
   plus a check that every wrong option is unambiguously wrong, not a
   second valid reading) rather than left as an unchecked first draft.
   This is a thorough linguistic self-review, not a native-speaker
   sign-off — flag anything that reads wrong to a fluent speaker.

   Markup contract — anywhere on the site:
     <button data-kw-placement>Take the 90-second check</button>

   Dialog engine intentionally mirrors kw-checkout.js's render()
   pattern (own CSS namespace, same focus-trap/Escape/backdrop-dismiss
   mechanics) rather than a second, different modal implementation.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWPlacement) return;

  var doc = document;

  function prefixToRoot() {
    var p = global.location.pathname;
    return /\/(chapter|account|report|admin)\//.test(p) ? '../' : '';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* ============================================================
     QUESTION DATA — reviewed 2026-09-24, see file header
     ============================================================ */
  var SCREEN = {
    prompt: 'Have you studied German before?',
    options: [
      'No, never',
      'A little (a few words or phrases)',
      'Yes, some formal study',
      "Yes, I'm quite comfortable already"
    ]
  };

  var QUESTIONS = [
    {
      // sein, 1st person singular (ich bin); ist/sind/bist are real
      // conjugations of sein but wrong person/number — unambiguous.
      id: 'q1',
      de: 'Ich ___ Anna.',
      en: '(I am Anna.)',
      options: ['bin', 'ist', 'sind', 'bist'],
      correct: 0,
      ifWrong: 'A1'
    },
    {
      // accusative masculine (der Hund -> den Hund); die/das are wrong
      // gender, der is nominative — unambiguous.
      id: 'q2',
      de: 'Ich sehe ___ Hund.',
      en: '(I see the dog.)',
      options: ['der', 'die', 'den', 'das'],
      correct: 2,
      ifWrong: 'A1'
    },
    {
      // können, 1st person singular (ich kann); kannst/könnt/können are
      // real conjugations, wrong person/number — unambiguous.
      id: 'q3',
      de: 'Ich ___ heute leider nicht kommen.',
      en: "(I unfortunately can't come today.)",
      options: ['kann', 'kannst', 'könnt', 'können'],
      correct: 0,
      ifWrong: 'A2'
    },
    {
      // causal conjunction matching the given English gloss ("because");
      // und/aber/oder are grammatical but change the meaning, so they're
      // correctly wrong for THIS translation.
      id: 'q4',
      de: 'Ich bleibe zu Hause, ___ es regnet.',
      en: "(I'm staying home because it's raining.)",
      options: ['und', 'aber', 'weil', 'oder'],
      correct: 2,
      ifWrong: 'B1'
    },
    {
      // process passive (Vorgangspassiv, "is being repaired") takes
      // werden, 3rd person singular = wird. "ist" would form the
      // stative passive (a real but different construction, "is in a
      // repaired state") and doesn't naturally take a von-agent phrase
      // the way this sentence is written, so it doesn't create real
      // ambiguity against the intended reading.
      id: 'q5',
      de: 'Das Auto ___ von meinem Vater repariert.',
      en: '(The car is being repaired by my father.)',
      options: ['repariert', 'wird', 'ist', 'hat'],
      correct: 1,
      ifWrong: 'B2'
    },
    {
      // Konjunktiv II of haben, 1st person singular (ich hätte), paired
      // with würde for the irreal conditional. "habe" is a realistic
      // learner mistake (mixing indicative with würde) rather than an
      // ambiguous alternative.
      id: 'q6',
      de: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.',
      en: "(If I had more time, I'd travel more often.)",
      options: ['habe', 'hätte', 'hatte', 'haben'],
      correct: 1,
      ifWrong: 'C1'
    }
  ];
  var ALL_CORRECT_RESULT = 'C2';

  var LEVEL_REASON = {
    A1: "That's exactly where every Klarweg learner begins — the alphabet, sounds, and first sentences.",
    A2: "You've got the basics down — A2 builds on them with everyday conversation and more grammar.",
    B1: "You're already comfortable with the fundamentals — B1 moves into connected sentences and more complex ideas.",
    B2: 'Strong foundation — B2 is where German gets genuinely expressive: passive voice, nuance, longer texts.',
    C1: 'You clearly have real German under your belt — C1 is advanced, idiomatic, close to fluent.',
    C2: 'That’s about as advanced as it gets — C2 is mastery-level. If this still feels easy, you may not need Klarweg’s earlier levels at all.'
  };

  var LEVEL_ROADMAP_HREF = {
    A1: 'a1.html', A2: 'a2.html', B1: 'b1.html', B2: 'b2.html', C1: 'c1.html', C2: 'c2.html'
  };

  function scoreResult(answers) {
    // answers: array aligned to QUESTIONS, each index either the chosen
    // option index (number) or null/undefined if skipped-to-result before
    // reaching it. An unanswered question counts the same as a wrong one.
    for (var i = 0; i < QUESTIONS.length; i++) {
      var q = QUESTIONS[i];
      if (answers[i] !== q.correct) return q.ifWrong;
    }
    return ALL_CORRECT_RESULT;
  }

  /* ============================================================
     STYLES — same token fallbacks as kw-checkout.js so this looks
     right even on a page missing the CSS custom properties.
     ============================================================ */
  var CSS = [
    '.kwpl-scrim{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(14,14,16,.42);opacity:0;transition:opacity 240ms cubic-bezier(.16,1,.3,1)}',
    '.kwpl-scrim.in{opacity:1}',
    '.kwpl-card{width:100%;max-width:480px;max-height:calc(100vh - 48px);overflow:auto;box-sizing:border-box;background:var(--bg-surface,#FFFFFF);border:1px solid rgba(14,14,16,.08);border-radius:16px;box-shadow:0 24px 64px rgba(14,14,16,.18);padding:32px;transform:translateY(8px);transition:transform 240ms cubic-bezier(.16,1,.3,1);font-family:var(--font-ui,Inter,system-ui,sans-serif)}',
    '.kwpl-scrim.in .kwpl-card{transform:none}',
    '.kwpl-eyebrow{display:flex;align-items:center;justify-content:space-between;font-family:var(--font-mono,"JetBrains Mono",ui-monospace,monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-tertiary,#9A9AA0);margin:0 0 14px}',
    '.kwpl-skip{font-family:var(--font-ui,Inter,system-ui,sans-serif);text-transform:none;letter-spacing:0;font-size:13px;background:none;border:none;color:var(--ink-tertiary,#9A9AA0);cursor:pointer;text-decoration:underline;padding:0}',
    '.kwpl-skip:hover{color:var(--ink-secondary,#5A5A60)}',
    '.kwpl-title{font-family:var(--font-display,Fraunces,Georgia,serif);font-weight:500;font-size:24px;line-height:1.22;letter-spacing:-.02em;color:var(--ink-primary,#0E0E10);margin:0}',
    '.kwpl-de{font-family:var(--font-display,Fraunces,Georgia,serif);font-style:italic;font-size:20px;color:var(--ink-primary,#0E0E10);margin:16px 0 4px}',
    '.kwpl-en{font-size:14px;color:var(--ink-tertiary,#9A9AA0);margin:0 0 20px}',
    '.kwpl-body{font-size:15px;line-height:1.6;color:var(--ink-secondary,#5A5A60);margin:12px 0 0;text-wrap:pretty}',
    '.kwpl-opts{display:flex;flex-direction:column;gap:10px;margin-top:8px}',
    '.kwpl-opt{display:flex;align-items:center;min-height:48px;padding:0 18px;border-radius:10px;border:1px solid rgba(14,14,16,.14);background:var(--bg-surface,#FFFFFF);color:var(--ink-primary,#0E0E10);font-size:15px;font-family:inherit;text-align:left;cursor:pointer;transition:border-color 150ms linear,background-color 150ms linear}',
    '.kwpl-opt:hover{border-color:var(--accent,#1F4E4A);background:var(--bg-elevated,#F4F3EE)}',
    '.kwpl-opt:focus-visible{outline:2px solid var(--accent,#1F4E4A);outline-offset:2px}',
    '.kwpl-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}',
    '.kwpl-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 22px;border-radius:10px;border:1px solid transparent;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;text-decoration:none;transition:transform 240ms cubic-bezier(.16,1,.3,1),box-shadow 240ms cubic-bezier(.16,1,.3,1)}',
    '.kwpl-btn:hover{transform:translateY(-1px)}',
    '.kwpl-btn:focus-visible{outline:2px solid var(--ink-primary,#0E0E10);outline-offset:3px}',
    '.kwpl-btn-primary{background:var(--coral,#E55A3F);color:#fff}',
    '.kwpl-btn-primary:hover{box-shadow:0 8px 24px rgba(229,90,63,.22)}',
    '.kwpl-btn-quiet{background:transparent;color:var(--ink-secondary,#5A5A60);border-color:rgba(14,14,16,.14)}',
    '.kwpl-btn-quiet:hover{color:var(--ink-primary,#0E0E10);border-color:rgba(14,14,16,.28)}',
    '.kwpl-mark{width:44px;height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;background:rgba(31,78,74,.10);color:var(--accent,#1F4E4A)}',
    '.kwpl-mark svg{width:20px;height:20px}',
    '.kwpl-progress{height:4px;border-radius:2px;background:rgba(14,14,16,.08);margin:0 0 20px;overflow:hidden}',
    '.kwpl-progress-fill{height:100%;background:var(--accent,#1F4E4A);transition:width 240ms cubic-bezier(.16,1,.3,1)}',
    '@media (max-width:480px){.kwpl-scrim{padding:12px;align-items:flex-end}.kwpl-card{padding:24px 20px;border-radius:14px}.kwpl-title{font-size:21px}.kwpl-actions .kwpl-btn{width:100%}}',
    '@media (prefers-reduced-motion:reduce){.kwpl-scrim,.kwpl-card,.kwpl-btn,.kwpl-progress-fill{transition:none}.kwpl-btn:hover{transform:none}}'
  ].join('');

  function injectCss() {
    if (doc.getElementById('kw-placement-css')) return;
    var s = doc.createElement('style');
    s.id = 'kw-placement-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  var ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7"/></svg>';

  /* ============================================================
     DIALOG — same focus-trap / Escape / backdrop-dismiss mechanics
     as kw-checkout.js's open()/close(), independent instance.
     ============================================================ */
  var dlg = null;

  function open() {
    if (dlg) return dlg;
    injectCss();
    var scrim = doc.createElement('div');
    scrim.className = 'kwpl-scrim';
    scrim.setAttribute('role', 'dialog');
    scrim.setAttribute('aria-modal', 'true');
    scrim.setAttribute('aria-labelledby', 'kwpl-title');
    scrim.innerHTML = '<div class="kwpl-card" tabindex="-1"></div>';
    doc.body.appendChild(scrim);
    var prevFocus = doc.activeElement;
    var card = scrim.querySelector('.kwpl-card');

    function onKey(e) {
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      var f = card.querySelectorAll('button:not([disabled]),a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    scrim.addEventListener('mousedown', function (e) { if (e.target === scrim) close(); });
    doc.addEventListener('keydown', onKey);

    dlg = {
      scrim: scrim, card: card,
      destroy: function () {
        doc.removeEventListener('keydown', onKey);
        scrim.remove();
        dlg = null;
        if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
      }
    };
    requestAnimationFrame(function () { scrim.classList.add('in'); });
    return dlg;
  }

  function close() {
    if (!dlg) return;
    var d = dlg;
    d.scrim.classList.remove('in');
    setTimeout(function () { if (d === dlg) d.destroy(); else d.scrim.remove(); }, 200);
  }

  function render(html, focusSelector) {
    var d = open();
    d.card.innerHTML = html;
    var el = focusSelector && d.card.querySelector(focusSelector);
    try { (el || d.card).focus({ preventScroll: true }); } catch (e) {}
    return d;
  }

  /* ============================================================
     FLOW STATE
     ============================================================ */
  var answers = [];   // parallel to QUESTIONS, by index
  var qIndex = 0;      // -1 = screening question, 0..QUESTIONS.length-1 = q1..q6

  function start() {
    answers = [];
    qIndex = -1;
    showScreen();
  }

  function showScreen() {
    var html =
      '<p class="kwpl-eyebrow"><span>Level check</span></p>' +
      '<h2 class="kwpl-title" id="kwpl-title">' + esc(SCREEN.prompt) + '</h2>' +
      '<div class="kwpl-opts">' +
      SCREEN.options.map(function (label, i) {
        return '<button type="button" class="kwpl-opt" data-screen="' + i + '">' + esc(label) + '</button>';
      }).join('') +
      '</div>';
    var d = render(html, '.kwpl-opt');
    d.card.querySelectorAll('[data-screen]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = Number(btn.getAttribute('data-screen'));
        if (i === 0) return showResult('A1'); // "No, never"
        qIndex = 0;
        showQuestion();
      });
    });
  }

  function showQuestion() {
    var q = QUESTIONS[qIndex];
    var total = QUESTIONS.length;
    var pct = Math.round((qIndex / total) * 100);
    var html =
      '<div class="kwpl-progress"><div class="kwpl-progress-fill" style="width:' + pct + '%"></div></div>' +
      '<p class="kwpl-eyebrow"><span>Question ' + (qIndex + 1) + ' of ' + total + '</span>' +
      '<button type="button" class="kwpl-skip" data-skip>Skip to result</button></p>' +
      '<h2 class="kwpl-title" id="kwpl-title">Complete the sentence</h2>' +
      '<p class="kwpl-de">' + esc(q.de) + '</p>' +
      '<p class="kwpl-en">' + esc(q.en) + '</p>' +
      '<div class="kwpl-opts">' +
      q.options.map(function (label, i) {
        return '<button type="button" class="kwpl-opt" data-opt="' + i + '">' + esc(label) + '</button>';
      }).join('') +
      '</div>';
    var d = render(html, '.kwpl-opt');
    d.card.querySelector('[data-skip]').addEventListener('click', function () {
      showResult(scoreResult(answers));
    });
    d.card.querySelectorAll('[data-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        answers[qIndex] = Number(btn.getAttribute('data-opt'));
        qIndex++;
        if (qIndex < QUESTIONS.length) showQuestion();
        else showResult(scoreResult(answers));
      });
    });
  }

  function showResult(level) {
    var href = prefixToRoot() + LEVEL_ROADMAP_HREF[level];
    var html =
      '<div class="kwpl-mark">' + ICON_OK + '</div>' +
      '<p class="kwpl-eyebrow"><span>Your result</span></p>' +
      '<h2 class="kwpl-title" id="kwpl-title">We’d recommend starting at ' + esc(level) + '.</h2>' +
      '<p class="kwpl-body">' + esc(LEVEL_REASON[level]) + '</p>' +
      '<p class="kwpl-body">Chapter 1 is free either way, so you can always confirm before you commit.</p>' +
      '<div class="kwpl-actions">' +
      '<a class="kwpl-btn kwpl-btn-primary" href="' + esc(href) + '">Start ' + esc(level) + '</a>' +
      '<button type="button" class="kwpl-btn kwpl-btn-quiet" data-close>See all levels</button>' +
      '</div>';
    var d = render(html, '.kwpl-btn-primary');
    d.card.querySelector('[data-close]').addEventListener('click', close);
  }

  global.KWPlacement = { open: start, close: close };

  /* ============================================================
     WIRING — one delegated listener for the whole site, matching
     kw-checkout.js's data-attribute pattern.
     ============================================================ */
  function bind() {
    if (doc.__kwPlacementBound) return;
    doc.__kwPlacementBound = true;
    doc.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-kw-placement]') : null;
      if (!el) return;
      e.preventDefault();
      start();
    });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', bind);
  else bind();
})(window);
