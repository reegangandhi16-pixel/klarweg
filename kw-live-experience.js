/* ============================================================
   KLARWEG · LIVE CLASSES — interactive layer (kw-live-experience.js)
   Progressive enhancement for live-classes.html. Without JavaScript
   every panel below is plain, readable HTML; this file only adds:
   - the four-step lesson board in the hero (tabs, English / Hindi
     explanation, a practice choice with feedback);
   - the 90-minute class bar (desktop and tablet);
   - the 12-week syllabus picker;
   - the "find where you start" finder, which can prefill the waitlist.
   No network requests, no storage, no timers that run on their own.
   Facts about the course stay in live-classes-data.js (kw-live.js).
   ============================================================ */
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Accessible tabs: roving tabindex, arrow keys, Home / End.
     onSelect(index) runs after the selection changes. */
  function tabs(list, onSelect) {
    var btns = all('[role="tab"]', list);
    function select(i, focus) {
      btns.forEach(function (b, j) {
        var on = i === j;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
        var panel = $(b.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) btns[i].focus();
      if (onSelect) onSelect(i);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(i, false); });
      b.addEventListener('keydown', function (e) {
        var k = e.key, n = btns.length, cur = btns.indexOf(document.activeElement);
        var to = k === 'ArrowRight' || k === 'ArrowDown' ? (cur + 1) % n
          : k === 'ArrowLeft' || k === 'ArrowUp' ? (cur - 1 + n) % n
          : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
        if (to < 0) return;
        e.preventDefault();
        select(to, true);
      });
    });
    var start = btns.findIndex ? btns.findIndex(function (b) { return b.getAttribute('aria-selected') === 'true'; }) : 0;
    select(start < 0 ? 0 : start, false);
    return { select: select, count: btns.length };
  }

  /* ---------- 1. lesson board ---------- */
  function initBoard() {
    var board = $('lesson-board');
    if (!board) return;
    board.classList.add('is-enhanced');
    var list = board.querySelector('[role="tablist"]');
    var stepNow = $('board-step-now');
    var next = $('board-next');
    var current = 0;
    var total = list.querySelectorAll('[role="tab"]').length;
    var t = tabs(list, function (i) {
      current = i;
      if (stepNow) stepNow.textContent = String(i + 1);
      if (next) {
        var last = i === total - 1;
        next.querySelector('span').textContent = last ? 'Start again' : 'Next step';
        next.setAttribute('data-last', last ? 'true' : 'false');
      }
    });
    if (next) next.addEventListener('click', function () {
      t.select((current + 1) % t.count, false);
    });

    /* English / Hindi: one choice for the whole board. */
    var langBtns = all('[data-board-lang]', board);
    function setLang(lang) {
      board.setAttribute('data-lang', lang);
      langBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-board-lang') === lang ? 'true' : 'false'); });
    }
    langBtns.forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-board-lang')); }); });
    setLang('en');

    /* Practice: choose the helper verb. */
    var slot = $('practice-slot');
    var fb = $('practice-feedback');
    var choices = all('[data-aux]', board);
    choices.forEach(function (c) {
      c.addEventListener('click', function () {
        var aux = c.getAttribute('data-aux');
        var right = aux === 'bin';
        choices.forEach(function (x) {
          x.setAttribute('aria-pressed', x === c ? 'true' : 'false');
          x.classList.toggle('is-right', x === c && right);
          x.classList.toggle('is-wrong', x === c && !right);
        });
        slot.textContent = aux;
        slot.classList.toggle('is-right', right);
        slot.classList.toggle('is-wrong', !right);
        fb.hidden = false;
        fb.querySelectorAll('[data-when]').forEach(function (p) { p.hidden = p.getAttribute('data-when') !== (right ? 'right' : 'wrong'); });
      });
    });
    all('[data-board-goto]', board).forEach(function (b) {
      b.addEventListener('click', function () { t.select(+b.getAttribute('data-board-goto'), true); });
    });
  }

  /* ---------- 2. the 90-minute class bar ---------- */
  function initClassBar() {
    var bar = $('class-bar');
    if (!bar) return;
    var detail = $('class-detail');
    var items = all('#class-steps > li');
    var segs = all('[data-seg]', bar);
    function show(i) {
      segs.forEach(function (s, j) { s.setAttribute('aria-pressed', i === j ? 'true' : 'false'); });
      var li = items[i];
      detail.innerHTML = '';
      var clone = li.cloneNode(true);
      clone.removeAttribute('id');
      all('[id]', clone).forEach(function (e) { e.removeAttribute('id'); });
      detail.appendChild(clone);
    }
    segs.forEach(function (s, i) { s.addEventListener('click', function () { show(i); }); });
    document.documentElement.classList.add('has-class-bar');
    show(0);
  }

  /* ---------- 3. syllabus week picker ---------- */
  function initSyllabus() {
    var list = $('syl-tabs');
    if (!list) return;
    $('syllabus').classList.add('is-enhanced');
    tabs(list);
  }

  /* ---------- 4. finder ---------- */
  var LEVEL_FORM = { beginner: 'Complete beginner', some: 'A1', a2: 'A2', b1: 'B1', unsure: 'Not sure' };
  var GOAL_FORM = { goethe: 'Goethe exam', ausbildung: 'Ausbildung', nursing: 'Nursing', study: 'Study in Germany', work: 'Work / career', family: 'Family / visa', speaking: 'Speaking confidence' };
  var GOAL_NOTE = {
    goethe: 'The A1 course prepares for Goethe-Zertifikat A1: Start Deutsch 1, with practice in the exam format along the way and mock exams in the last week. The exam is booked separately with an exam centre.',
    ausbildung: 'A1 is the first step. Many Ausbildung routes ask for B1 or B2, so check the level your programme requires.',
    nursing: 'A1 is the first step. Nursing routes in Germany usually ask for a higher level, often B1 or B2, so check what your employer or authority requires.',
    study: 'A1 is the first step. Study programmes taught in German usually ask for a much higher level; check your university’s requirement.',
    work: 'A1 gives you the everyday basics: introductions, numbers, times, appointments and simple messages.',
    family: 'Many family-reunion visas ask for A1. Check the current requirement with the German mission that handles your application.',
    speaking: 'Every class includes speaking practice in a small group, with corrections as you speak.'
  };

  function initFinder() {
    var f = $('finder');
    if (!f) return;
    var out = $('finder-result');
    var roadmap = all('[data-road]');
    function val(name) { var x = f.querySelector('input[name="' + name + '"]:checked'); return x ? x.value : ''; }
    function update() {
      var level = val('f-level'), goal = val('f-goal'), time = val('f-time');
      if (!level || !goal || !time) return;
      var fits = level === 'beginner' || level === 'some' || level === 'unsure';
      var h, p = [], actions = '';
      var waitlistBtn = '<a href="#book" class="btn btn-live" data-book-course="live-a1" data-finder-apply>Join the A1 waitlist with these answers</a>';
      if (fits && time === 'yes') {
        h = 'The A1 batch looks like a good fit.';
        p.push('It starts from zero and runs on the evenings you said suit you.');
      } else if (fits) {
        h = 'The A1 batch fits your level, but check the timetable.';
        p.push('It runs on Monday, Wednesday and Friday evenings only; no other timetable is scheduled. If you join the waitlist, tell us the times that would suit you.');
      } else {
        h = 'There is no live course at your level yet.';
        p.push('A2, B1 and B2 are planned but not scheduled: no teacher, timetable or fee is set. You can register interest for free; it isn’t a booking.');
        actions = '<a href="#book" class="btn btn-live" data-request="interest" data-finder-apply>Register interest</a>'
          + '<a href="courses.html" class="btn btn-secondary">See self-paced levels</a>';
      }
      if (level === 'unsure') p.push('Not sure of your level? The 90-second level check gives you a starting point.');
      if (fits && GOAL_NOTE[goal]) p.push(GOAL_NOTE[goal]);
      if (!actions) actions = waitlistBtn + (level === 'unsure' ? '<button type="button" class="btn btn-secondary" data-kw-placement>Take the level check</button>' : '');
      out.innerHTML = '<p class="finder-kicker">Your starting point</p><h3 class="finder-h">' + h + '</h3>'
        + p.map(function (x) { return '<p>' + x + '</p>'; }).join('')
        + '<div class="finder-actions">' + actions + '</div>';
      out.hidden = false;
      var lv = fits ? 'A1' : level === 'a2' ? 'A2' : 'B1';
      roadmap.forEach(function (r) { r.classList.toggle('is-match', r.getAttribute('data-road') === lv); });
    }
    f.addEventListener('change', update);
    /* "with these answers": copy level and goal into the waitlist form
       (kw-live.js handles the scroll and the course preselect). */
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-finder-apply]');
      if (!a) return;
      var lvl = $('bf-level'), gl = $('bf-goal');
      var lv = LEVEL_FORM[val('f-level')], g = GOAL_FORM[val('f-goal')];
      if (lvl && lv) lvl.value = lv;
      if (gl && g) gl.value = g;
      if (val('f-time') === 'yes') {
        var eve = document.querySelector('#consult-form input[name="times"][value="Weekday evenings"]');
        if (eve) eve.checked = true;
      }
    }, true);
  }

  /* ---------- 5. calm section reveal ---------- */
  function initReveal() {
    if (reduce || !('IntersectionObserver' in window)) return;
    var els = all('[data-reveal]');
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() { initBoard(); initClassBar(); initSyllabus(); initFinder(); initReveal(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
