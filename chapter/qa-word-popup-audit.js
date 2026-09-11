/* QA harness — Word Popup data coverage audit. Not shipped in any chapter page.
   Load in the console (or via a <script> tag) and call KW_auditPopups().
   Clicks every clickable German word on the page, opens its popup, and reports
   any popup that renders NO usable information (meaning "—" and no Hindi).
   Skips spans inside disabled controls (MCQ answers already revealed) because
   a disabled button swallows the click and would leave a stale popup on screen,
   which reads as a false positive. */
(function () {
  const N = s => String(s || '').toLowerCase().replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '').trim();
  const ADJ = /adjektiv|adjective/i;
  const ENDINGS = ['e', 'en', 'em', 'er', 'es'];
  function adjBase(w) {
    const L = window.KW_GLOBAL_LEXICON || {}, k = N(w);
    for (const e of ENDINGS) {
      if (k.length > e.length + 1 && k.endsWith(e)) {
        const b = k.slice(0, -e.length);
        if (L[b] && ADJ.test(L[b].type || '')) return b;
      }
    }
    return null;
  }
  window.KW_auditPopups = function () {
    const els = [...document.querySelectorAll('.rw, .de-link')]
      .filter(s => !s.closest('button:disabled, [disabled]'));
    const empty = [], thin = [];
    let opened = 0, skipped = 0;
    for (const s of els) {
      const w = s.textContent.trim();
      try { s.click(); } catch (e) { skipped++; continue; }
      const p = document.querySelector('.word-pop');
      const head = p && p.querySelector('.word-pop-de');
      if (!head || N(head.textContent) !== N(w)) { skipped++; continue; } // click never opened a popup
      opened++;
      const en = ((p.querySelector('.wp-meaning') || {}).textContent || '').trim();
      const hi = ((p.querySelector('.wp-hi') || {}).textContent || '').trim();
      const fields = p.querySelectorAll('.wp-section, .wp-badge, .wp-pron').length;
      if ((!en || en === '—') && !hi) empty.push({ w, cls: s.className, adjBase: adjBase(w) });
      else if ((!en || en === '—') && hi) thin.push(w);
      const c = p.querySelector('.wp-close'); if (c) c.click();
      void fields;
    }
    const counts = {};
    empty.forEach(o => { counts[o.w] = (counts[o.w] || 0) + 1; });
    return {
      page: location.pathname.split('/').pop(),
      clickable: els.length, opened, skipped,
      emptyOccurrences: empty.length,
      emptyDistinct: Object.keys(counts),
      adjectiveDeclension: [...new Set(empty.filter(o => o.adjBase).map(o => o.w + ' → ' + o.adjBase))],
      noDataAtAll: [...new Set(empty.filter(o => !o.adjBase).map(o => o.w))],
      meaningMissingButHindiPresent: [...new Set(thin)]
    };
  };
})();
