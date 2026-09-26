/* ============================================================
   KLARWEG · ROADMAP PROGRESS  (kw-roadmap-progress.js)
   ------------------------------------------------------------
   Read-only view of chapter progress for the level roadmaps
   (a1..c2.html). It never writes anything.

   Source: the SAME localStorage record the chapter page keeps,
   key "kw-ch-<chapter id>" (chapter/chapter-app.js). A chapter's
   id is its file name without "chapter-" and ".html", e.g.
   chapter/chapter-b1-1-infinitiv-mit-zu.html → kw-ch-b1-1-infinitiv-mit-zu.

   The chapter page stores its own XP result in that record —
   xpEarned (its earnedXP()) and xpMax (its C.xp) — so this file
   never re-derives XP:
     xpEarned === 0           → not started   → "Begin chapter"
     0 < xpEarned < xpMax     → in progress   → "Continue chapter"
     xpEarned >= xpMax        → completed     → "Completed"
   A record saved before those fields existed (older progress) is
   shown as in progress when it already holds earned XP; it becomes
   exact the next time that chapter is opened. It is never shown as
   completed, because 100% cannot be proven from it.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWRoadmapProgress) return;

  var CHECK = '<svg width="11" height="11" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5 8 14.5 16 6"/></svg>';

  function chapterId(href) {
    var m = /(?:^|\/)chapter-([^\/?#]+)\.html(?:[?#].*)?$/.exec(String(href || ''));
    return m ? m[1] : null;
  }

  function readRecord(id) {
    try {
      var raw = global.localStorage.getItem('kw-ch-' + id);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  /* → { status: 'not-started' | 'in-progress' | 'completed', pct: number|null } */
  function read(href) {
    var id = chapterId(href);
    var rec = id ? readRecord(id) : null;
    if (!rec || typeof rec !== 'object') return { status: 'not-started', pct: 0 };

    var earned = rec.xpEarned, max = rec.xpMax;
    if (typeof earned === 'number' && typeof max === 'number' && max > 0) {
      if (earned >= max) return { status: 'completed', pct: 100 };
      if (earned > 0) return { status: 'in-progress', pct: Math.min(99, Math.floor(earned / max * 100)) };
      return { status: 'not-started', pct: 0 };
    }

    // Older record without stored XP: earned XP is visible from a ticked
    // (non-quiz) section or a quiz score above zero — the only inputs of
    // the chapter's earnedXP().
    var done = rec.done && typeof rec.done === 'object' ? rec.done : {};
    var hasXp = Object.keys(done).some(function (k) { return k !== 'quiz' && done[k]; }) ||
      (typeof rec.quizScore === 'number' && rec.quizScore > 0);
    return hasXp ? { status: 'in-progress', pct: null } : { status: 'not-started', pct: 0 };
  }

  /* Card presentation for one chapter.
     opts: { href, locked, free, levelCode, n, title }
     → { modifier, topRight, ctaText, ariaLabel }            */
  function card(opts) {
    var label = 'Chapter ' + opts.n + ': ' + opts.title + '.';
    if (opts.locked) {
      return {
        modifier: 'locked',
        topRight: null,                       // caller keeps its lock icon
        ctaText: 'Unlock to begin',
        ariaLabel: label + ' Locked. Unlock with ' + opts.levelCode + ' bundle or Lifetime.'
      };
    }
    var p = read(opts.href);
    if (p.status === 'completed') {
      return {
        modifier: 'free',
        topRight: '<span class="pill pill-free">' + CHECK + ' Completed</span>',
        ctaText: 'Completed',
        ariaLabel: label + ' Completed. Open to review.'
      };
    }
    if (p.status === 'in-progress') {
      var pct = p.pct != null ? ' · ' + p.pct + '%' : '';
      return {
        modifier: 'free',
        topRight: '<span class="pill"><span class="pill-dot"></span> In progress' + pct + '</span>',
        ctaText: 'Continue chapter',
        ariaLabel: label + ' In progress' + (p.pct != null ? ', ' + p.pct + ' percent of XP earned' : '') + '.'
      };
    }
    return {
      modifier: 'free',
      topRight: opts.free
        ? '<span class="pill pill-free"><span class="pill-dot"></span> Free chapter</span>'
        : '<span class="pill"><span class="pill-dot"></span> Unlocked</span>',
      ctaText: 'Begin chapter',
      ariaLabel: label + (opts.free ? ' Free.' : ' Unlocked.')
    };
  }

  /* Where an owner should go next: the first chapter, in roadmap order,
     that is not yet 100% XP complete.
     → { status: 'not-started' | 'in-progress' | 'completed', chapter, href }
       status 'completed' means every chapter of the level is complete. */
  function resume(chapters, hrefOf) {
    var list = (chapters || []).slice().sort(function (a, b) { return a.n - b.n; });
    var anyProgress = false;
    for (var i = 0; i < list.length; i++) {
      var href = hrefOf(list[i]);
      if (!href) continue;
      var p = read(href);
      if (p.status !== 'not-started') anyProgress = true;
      if (p.status !== 'completed') {
        return { status: anyProgress ? 'in-progress' : 'not-started', chapter: list[i], href: href };
      }
    }
    return { status: 'completed', chapter: null, href: null };
  }

  global.KWRoadmapProgress = { read: read, card: card, resume: resume, chapterId: chapterId };
})(window);
