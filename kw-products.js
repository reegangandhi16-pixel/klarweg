/* ============================================================
   KLARWEG · PRODUCT CATALOG (kw-products.js)
   ------------------------------------------------------------
   The ONE frontend source of truth for product ids, display
   names and DISPLAY prices.

   DISPLAY ONLY. Nothing here is ever sent as an amount. Checkout
   sends a product id; the Worker looks the amount up in its own
   catalog (access/worker/src/products.js) and creates the Cashfree
   order from that. If the two catalogs ever disagree, the server
   wins and the learner is charged the server price.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWProducts) return;

  var CATALOG = {
    A1: { id: 'A1', kind: 'level', level: 'a1', name: 'A1 Complete Access', paise: 199900, label: '₹1,999', tier: 'A1 · Foundations', blurb: 'All A1 chapters', firstChapterHref: 'chapter/chapter-a1-1-alphabet.html' },
    A2: { id: 'A2', kind: 'level', level: 'a2', name: 'A2 Complete Access', paise: 299900, label: '₹2,999', tier: 'A2 · Aufbau', blurb: 'All A2 chapters', firstChapterHref: 'chapter/chapter-a2-1-genitiv.html' },
    B1: { id: 'B1', kind: 'level', level: 'b1', name: 'B1 Complete Access', paise: 399900, label: '₹3,999', tier: 'B1 · Mittelstufe', blurb: 'All B1 chapters', firstChapterHref: 'chapter/chapter-b1-1-infinitiv-mit-zu.html' },
    B2: { id: 'B2', kind: 'level', level: 'b2', name: 'B2 Complete Access', paise: 499900, label: '₹4,999', tier: 'B2 · Oberstufe', blurb: 'All B2 chapters', firstChapterHref: 'chapter/chapter-b2-01-erweiterte-satzklammer.html' },
    C1: { id: 'C1', kind: 'level', level: 'c1', name: 'C1 Complete Access', paise: 799900, label: '₹7,999', tier: 'C1 · Oberstufe', blurb: 'All C1 chapters', firstChapterHref: 'chapter/chapter-c1-01-tempusgebrauch-stilistische-tempuswahl.html' },
    C2: { id: 'C2', kind: 'level', level: 'c2', name: 'C2 Complete Access', paise: 899900, label: '₹8,999', tier: 'C2 · Großes Sprachdiplom', blurb: 'All C2 chapters', firstChapterHref: 'chapter/chapter-c2-01-zeitformen-der-verben.html' },
    LIFETIME: { id: 'LIFETIME', kind: 'bundle', level: null, name: 'Klarweg Lifetime', paise: 499900, label: '₹4,999', tier: 'Lifetime · A1 → C2', blurb: 'All six levels' }
  };

  /* The individual-level total is a stated fact about the catalog,
     not a computed discount claim used for pricing. Lifetime is its
     own product at its own price — never the sum of the levels. */
  var LEVEL_TOTAL_LABEL = '₹30,994';

  function get(id) {
    return CATALOG[String(id || '').trim().toUpperCase()] || null;
  }
  function forLevel(level) {
    return get(String(level || '').trim().toUpperCase());
  }
  function list() {
    return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'LIFETIME'].map(function (k) { return CATALOG[k]; });
  }
  function levels() {
    return list().filter(function (p) { return p.kind === 'level'; });
  }
  function priceLabel(id) {
    var p = get(id);
    return p ? p.label : '';
  }

  global.KWProducts = {
    LEVEL_TOTAL_LABEL: LEVEL_TOTAL_LABEL,
    get: get,
    forLevel: forLevel,
    list: list,
    levels: levels,
    priceLabel: priceLabel
  };
})(window);
