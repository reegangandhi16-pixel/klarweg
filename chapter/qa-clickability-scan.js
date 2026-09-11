/* QA harness — corpus scan for NON-CLICKABLE German words.
   Injected into a chapter page by qa-clickability-runner.html.
   Reads the rendered DOM only: any word inside a German-text container that
   the app did NOT wrap as .rw / .de-link is reported, with the container's
   section so it can be triaged as learner-facing German vs. metalanguage. */
(function () {
  var TARGETS = '.de, .de-em, .vword-ex, .vword-de, .reading-passage, .story-line, .speak-prompt, .transcript-text, .sentence-inline-unit';
  var SKIP = 'button,a,summary,input,textarea,.word-pop,.builder-token,.builder-slot,.mcq-options,.quiz-stage,.rw,.de-link,[data-no-link]';
  var WORD = /[A-Za-zÄÖÜäöüß]{2,}/g;
  function norm(s) {
    return String(s || '').toLowerCase().replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '').trim();
  }
  function sectionOf(el) {
    var s = el.closest('[data-section],section,.card');
    if (!s) return 'unknown';
    return s.getAttribute('data-section') || s.id || (s.className || '').split(' ')[0] || 'unknown';
  }
  window.KWCLICK = function () {
    var hosts = [], seen = new Set(), out = {}, clickable = 0;
    document.querySelectorAll('.rw, .de-link').forEach(function () { clickable++; });
    document.querySelectorAll(TARGETS).forEach(function (h) { hosts.push(h); });
    hosts.forEach(function (host) {
      if (host.closest('.word-pop')) return;
      var walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          if (!n.nodeValue || !/[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
          if (n.parentElement && n.parentElement.closest(SKIP)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var n;
      while ((n = walker.nextNode())) {
        if (seen.has(n)) continue;
        seen.add(n);
        var txt = n.nodeValue, m;
        WORD.lastIndex = 0;
        while ((m = WORD.exec(txt))) {
          var k = norm(m[0]);
          if (!k) continue;
          if (!out[k]) out[k] = { surface: m[0], n: 0, sections: [], sample: txt.trim().slice(0, 90) };
          out[k].n++;
          var sec = sectionOf(n.parentElement);
          if (out[k].sections.indexOf(sec) < 0) out[k].sections.push(sec);
        }
      }
    });
    return { file: location.pathname.split('/').pop(), clickable: clickable, nonClickable: out };
  };
})();
