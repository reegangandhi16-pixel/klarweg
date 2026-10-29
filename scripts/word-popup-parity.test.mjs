/* Word popup parity: the homepage opens the SAME word popup as every chapter.
   One engine (chapter/chapter-app.js renderWordPop, popup-only host mode on
   the homepage), one stylesheet (public/kw-word-pop.css), one lookup pipeline.
   These checks keep the homepage from drifting back to a popup of its own.
   The visual/interactive comparison (computed styles of every popup element,
   clicks, touch, Escape/backdrop/close, audio, long-press) needs a browser and
   is run separately. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const CHAPTER_CSS = read('chapter/chapter.css');
const POP_CSS = read('public/kw-word-pop.css');
const APP = read('chapter/chapter-app.js');
const HOME = read('index.html');
const HOME_STYLE = HOME.slice(HOME.indexOf('<style>'), HOME.indexOf('</style>'));
const CHAPTER_PAGES = fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-.*\.html$/.test(f));

/** Selectors of every rule in a stylesheet (descends into @media). */
function selectors(css) {
  const out = [];
  const body = css.replace(/\/\*[\s\S]*?\*\//g, '');
  (function walk(txt) {
    let i = 0;
    while (i < txt.length) {
      const open = txt.indexOf('{', i); if (open === -1) return;
      const head = txt.slice(i, open).trim();
      let depth = 1, j = open + 1;
      while (depth && j < txt.length) { if (txt[j] === '{') depth++; else if (txt[j] === '}') depth--; j++; }
      if (head.startsWith('@media') || head.startsWith('@supports')) walk(txt.slice(open + 1, j - 1));
      else if (!head.startsWith('@')) head.split(',').forEach((s) => out.push(s.trim()));
      i = j;
    }
  })(body);
  return out;
}
/** Custom properties declared in the first `:root { … }` block. */
function rootVars(css) {
  const s = css.indexOf(':root'); const block = css.slice(css.indexOf('{', s) + 1, css.indexOf('}', s));
  return Object.fromEntries([...block.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
}
// A rule is a popup rule when it is anchored on a popup element. (.kw-wa .wp-glyph
// is the chapter vocabulary audio control reusing the glyph markup — not the popup.)
const POPUP_SEL = /^(\.word-pop|\.wp-|\.audio-speed-menu)/;

test('one stylesheet: popup rules live only in public/kw-word-pop.css', () => {
  assert.deepEqual(selectors(CHAPTER_CSS).filter((s) => POPUP_SEL.test(s)), [], 'chapter.css must not fork popup rules');
  assert.deepEqual(selectors(HOME_STYLE).filter((s) => POPUP_SEL.test(s)), [], 'index.html must not style the popup itself');
  for (const sel of ['.word-pop', '.word-pop.is-open', '.word-pop-backdrop', '.wp-header', '.wp-meaning', '.wp-badge', '.wp-compare-cell', '.wp-why', '.word-pop-ex', '.audio-speed-menu']) {
    assert.ok(selectors(POP_CSS).includes(sel), sel + ' is in the shared stylesheet');
  }
});

test('every chapter page loads the shared stylesheet right after chapter.css', () => {
  assert.equal(CHAPTER_PAGES.length, 258);
  for (const f of CHAPTER_PAGES) {
    const h = read('chapter/' + f);
    assert.match(h, /<link rel="stylesheet" href="chapter\.css\?v=\d+">\n<link rel="stylesheet" href="\.\.\/public\/kw-word-pop\.css\?v=1">/, f);
  }
});

test('the homepage has no popup of its own any more', () => {
  for (const gone of ['id="wc-modal"', 'id="wc-overlay"', 'function openWordCard', 'function closeWordCard', 'function buildFallbackWord', 'function accentToColor', 'full card coming soon', 'wcAudioBtn']) {
    assert.ok(!HOME.includes(gone), 'old homepage popup remnant: ' + gone);
  }
  assert.deepEqual(selectors(HOME_STYLE).filter((s) => /\.wc-(overlay|modal|close|conj|compare|advanced|adv-)/.test(s)), [], 'old modal-only CSS');
});

test('the homepage loads the course popup engine, stylesheet and lexicon — same versions as the chapters', () => {
  const appV = APP && read('chapter/' + CHAPTER_PAGES[0]).match(/src="chapter-app\.js\?v=(\d+)"/)[1];
  const tag = (src) => HOME.indexOf('<script src="' + src + '" defer></script>');
  assert.ok(HOME.indexOf('<link rel="stylesheet" href="public/kw-word-pop.css?v=1">') > HOME.indexOf('</style>'),
    'shared stylesheet loads after the homepage <style>, as it loads after chapter.css on chapters');
  const host = HOME.indexOf("<script>window.KW_WORD_POP_HOST = { lexiconSrc: 'chapter/global-lexicon.js', triggers: '.de[data-word]' };</script>");
  assert.ok(host !== -1, 'host config');
  for (const src of ['chapter/story-lexicon.js', 'chapter/tokenizer.js', 'chapter/chapter-app.js?v=' + appV]) {
    assert.ok(tag(src) > host, src + ' is loaded (deferred) after the host config');
  }
  assert.ok(tag('chapter/tokenizer.js') < tag('chapter/chapter-app.js?v=' + appV) && tag('chapter/story-lexicon.js') < tag('chapter/chapter-app.js?v=' + appV), 'chapter load order');
  assert.ok(HOME.indexOf('<script src="public/audio/kw-audio-engine.js" defer></script>') < tag('chapter/chapter-app.js?v=' + appV), 'audio engine first, as on chapters');
  assert.ok(fs.existsSync(path.join(ROOT, 'chapter/global-lexicon.js')));
  const allow = read('.github/pages-allowlist.txt').split('\n');
  for (const f of ['public/kw-word-pop.css', 'chapter/chapter-app.js', 'chapter/tokenizer.js', 'chapter/story-lexicon.js', 'chapter/global-lexicon.js', 'index.html']) {
    assert.ok(allow.includes(f), f + ' is published');
  }
});

test('layering: chapters keep 80 / 81 / 85; the homepage popup sits above its own nav and mobile menu', () => {
  const zOf = (sel) => { const m = POP_CSS.match(new RegExp('\\n' + sel.replace(/[.]/g, '\\.') + ' \\{[^}]*?z-index: ([^;]+);')); return m && m[1].trim(); };
  assert.equal(zOf('.word-pop-backdrop'), 'var(--kw-word-pop-z, 80)');
  assert.equal(zOf('.word-pop'), 'calc(var(--kw-word-pop-z, 80) + 1)');
  assert.equal(zOf('.audio-speed-menu'), 'calc(var(--kw-word-pop-z, 80) + 5)');
  assert.ok(!/--kw-word-pop-z/.test(CHAPTER_CSS), 'chapters use the default layer');
  const homeZ = Number(rootVars(HOME_STYLE)['--kw-word-pop-z']);
  const zIn = (sel) => Number((HOME_STYLE.match(new RegExp('\\n' + sel.replace(/[.]/g, '\\.') + ' \\{[^}]*?z-index: (\\d+)')) || [])[1]);
  assert.ok(homeZ > zIn('.nav') && homeZ > zIn('.mobile-nav-overlay'), 'above the fixed nav and the mobile menu');
});

test('popup-only host mode is isolated: chapters never take it, the host never gets the dashboard', () => {
  assert.match(APP, /const POP_HOST = window\.KW_WORD_POP_HOST \|\| null;\n  const C = window\.CHAPTER \|\| \(POP_HOST \? /);
  const init = APP.slice(APP.indexOf('  function init() {'), APP.indexOf('  function renderChapter() {'));
  const host = init.slice(0, init.indexOf('\n      return;\n    }\n'));
  assert.match(host, /if \(POP_HOST\) \{/);
  assert.match(host, /window\.KW_WordPop = \{\s*open: function \(el, token\) \{ loadHostLexicon\(\); openWordPop\(el, token\); \},\s*close: closeWordPop/);
  assert.doesNotMatch(host, /watchGerman\(\)|renderChapter\(\)|KWAccess/, 'host branch: no page-wide marking, no dashboard, no access gate');
  assert.match(host, /n\.closest\('\.word-pop'\)\) markGerman\(n\)/, 'host pop-ups get the same lang="de" marking');
  assert.equal((APP.match(/window\.KW_WordPop\s*=/g) || []).length, 1, 'KW_WordPop is only exposed by the host branch');
  // The lexicon's re-sweep of the page is chapter-only; the host page's own markup is never linkified.
  assert.match(APP, /s\.onload = function \(\) \{\n      \/\/ A popup-only host has no chapter markup to re-sweep\.\n      if \(POP_HOST\) return;/);
  assert.match(APP, /s\.src = POP_HOST \? POP_HOST\.lexiconSrc : 'global-lexicon\.js';/);
  assert.match(APP, /if \(POP_HOST\) speechSynthesis\.addEventListener\('voiceschanged', pick\); else speechSynthesis\.onvoiceschanged = pick;/);
});

test('the popup shows course colours on any host: role map and tokens identical to chapter.css', () => {
  const roleRules = (css, scoped) => Object.fromEntries([...css.matchAll(new RegExp('^' + (scoped ? ':where\\(\\.word-pop\\) ' : '') + '(\\.r-[a-z-]+(?:, ' + (scoped ? ':where\\(\\.word-pop\\) ' : '') + '\\.r-[a-z-]+)*) \\{([^}]*)\\}', 'gm'))]
    .map((m) => [m[1].replace(/:where\(\.word-pop\) /g, ''), m[2].trim()]));
  const course = roleRules(CHAPTER_CSS, false), popup = roleRules(POP_CSS, true);
  assert.ok(Object.keys(course).length >= 30);
  assert.deepEqual(popup, course, 'popup-scoped role map = chapter.css "Grammar word coloring"');
  assert.match(POP_CSS, /^:where\(\.word-pop\) \.de \{ font-family: var\(--font-german\); font-weight: 500; \}$/m);
  assert.match(CHAPTER_CSS, /^\.de \{ font-family: var\(--font-german\); font-weight: 500; \}$/m);

  const chapterRoot = rootVars(CHAPTER_CSS), homeRoot = rootVars(HOME_STYLE);
  const scoped = Object.fromEntries([...POP_CSS.slice(POP_CSS.indexOf(':where(.word-pop) {'), POP_CSS.indexOf('}', POP_CSS.indexOf(':where(.word-pop) {'))).matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
  for (const [k, v] of Object.entries(scoped)) assert.equal(v, chapterRoot[k], k + ' pinned to the chapter value');
  // Every colour token renderWordPop can ask for resolves to the chapter value inside a homepage popup.
  const canon = APP.match(/const CANONICAL_ROLES = new Set\(\[([\s\S]*?)\]\)/)[1].match(/'([a-z-]+)'/g).map((x) => x.slice(1, -1));
  const used = new Set(canon.filter((r) => !['conjunction', 'name', 'letter'].includes(r)).map((r) => '--g-' + r));
  for (const m of POP_CSS.matchAll(/var\((--[a-z0-9-]+)/g)) used.add(m[1]);
  for (const v of used) {
    if (!chapterRoot[v]) continue;   // token the chapters don't define either
    const homeValue = scoped[v] || homeRoot[v];
    const norm = (x) => String(x || '').toLowerCase().replace(/['"]/g, '');   // font stacks: quoting only
    assert.equal(norm(homeValue), norm(chapterRoot[v]), v + ' resolves to the chapter value in a homepage popup');
  }
});

test('homepage occurrence data reaches the course popup field for field (no placeholders, no invented data)', () => {
  const words = HOME.slice(HOME.indexOf('const WORDS = {'), HOME.indexOf('\n};', HOME.indexOf('const WORDS = {')) + 3);
  const sie = HOME.slice(HOME.indexOf('function analyzeSie('), HOME.indexOf('/* ============================================================\n   WORD POPUP — the course popup'));
  const tokFn = HOME.slice(HOME.indexOf('function homeWordToken('), HOME.indexOf('\n}\n', HOME.indexOf('function homeWordToken(')) + 2);
  const ctx = {};
  vm.runInNewContext(words.replace('const WORDS', 'var WORDS') + '\n' + sie + '\n' + tokFn + '\nthis.WORDS = WORDS; this.homeWordToken = homeWordToken;', ctx);
  const span = (key, text, cls, sentence, verb) => ({
    dataset: { word: key }, textContent: text, classList: Object.assign(cls.split(' '), { contains(c) { return this.includes(c); } }),
    closest: () => (sentence ? { dataset: { sentence }, textContent: sentence, querySelector: () => (verb ? { textContent: verb } : null) } : null),
  });
  const FIELDS = new Set(['w', 'role', 'pron', 'ipa', 'en', 'hi', 'type', 'case', 'why', 'ex', 'exEn', 'plural', 'conj', 'compare', 'advanced']);
  for (const key of Object.keys(ctx.WORDS)) {
    const t = ctx.homeWordToken(span(key, ctx.WORDS[key].word, 'de r-subject'));
    for (const [k, v] of Object.entries(t)) {
      assert.ok(FIELDS.has(k), key + ': unexpected field ' + k);
      assert.ok(v !== '—' && v !== '', key + '.' + k + ' carries no placeholder');
    }
    assert.ok(!t.ipa || !/^\/|\/$/.test(t.ipa), key + ': IPA without slashes (the course wraps it in [ ])');
  }
  const buch = ctx.homeWordToken(span('buch', 'Buch', 'de r-object c-akk'));
  assert.deepEqual(JSON.parse(JSON.stringify(buch)), { w: 'Buch', role: 'r-akkusativ', pron: 'bookh', ipa: 'buːx', en: 'book', hi: 'किताब', type: 'Noun · Direct object', case: 'Akkusativ', why: 'Akkusativ — the thing being given.', ex: 'Ich lese ein Buch.', exEn: 'I\'m reading a book.', plural: 'Bücher' });
  assert.equal(ctx.homeWordToken(span('dem-mann', 'dem Mann', 'de r-object c-dat')).role, 'r-dativ');
  assert.equal(ctx.homeWordToken(span('der', 'Der', 'de r-article c-nom')).role, 'r-article', 'Nominativ keeps the role colour, as on the page');
  const liest = ctx.homeWordToken(span('liest', 'liest', 'de r-verb'));
  assert.equal(liest.role, 'r-verb'); assert.equal(liest.case, undefined, '"—" case is omitted, not shown');
  assert.deepEqual(JSON.parse(JSON.stringify(liest.conj)), { praesens: 'liest', praeteritum: 'las', perfekt: 'hat gelesen' });
  // No homepage entry: only the surface (and its displayed role) go to the course lookup — nothing invented.
  assert.deepEqual(JSON.parse(JSON.stringify(ctx.homeWordToken(span('montag', 'Montag', 'de r-object c-nom')))), { w: 'Montag', role: 'r-object' });
  // Sie/sie: this occurrence's reading, as plain markup (the popup section supplies the type).
  const she = ctx.homeWordToken(span('sie', 'Sie', 'de r-subject c-nom', 'Sie gibt mir das Buch.', 'gibt'));
  assert.equal(she.en, 'she'); assert.equal(she.type, 'Pronoun · 3rd person sing.');
  assert.doesNotMatch(she.why, /style=/);
});

test('das / mir / ist / Deutsch / Montag: course data, in their homepage sentences — nothing invented', () => {
  const words = HOME.slice(HOME.indexOf('const WORDS = {'), HOME.indexOf('\n};', HOME.indexOf('const WORDS = {')) + 3);
  const ctx = {}; vm.runInNewContext(words.replace('const WORDS', 'var WORDS') + '\nthis.WORDS = WORDS;', ctx);
  const sentence = (key) => { const i = HOME.indexOf('data-word="' + key + '"', HOME.indexOf('<body')); return HOME.slice(HOME.lastIndexOf('data-sentence="', i) + 15, HOME.indexOf('"', HOME.lastIndexOf('data-sentence="', i) + 15)); };
  const spanCls = (key) => { const i = HOME.indexOf('data-word="' + key + '"', HOME.indexOf('<body')); return HOME.slice(HOME.lastIndexOf('class="', i) + 7, HOME.indexOf('"', HOME.lastIndexOf('class="', i) + 7)); };
  assert.equal(sentence('mir'), 'Sie gibt mir das Buch.'); assert.equal(sentence('das'), 'Sie gibt mir das Buch.');
  assert.equal(spanCls('mir'), 'de r-object c-dat'); assert.equal(spanCls('das'), 'de r-article c-akk');
  // The course's own authored token for each use, verbatim (most frequent form across the chapters).
  const authored = (file, tok) => { assert.ok(read('chapter/' + file).includes(tok), file + ' authors ' + tok); };
  authored('chapter-a1-40-verben-dativ-data.js', "{ w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' }");
  authored('chapter-a1-36-dativ-data.js', "{ w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' }");
  const pick = (e) => ({ en: e.en, hi: e.hi, pron: e.pron, type: e.role });
  assert.deepEqual(pick(ctx.WORDS.mir), { en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' });
  assert.deepEqual(pick(ctx.WORDS.das), { en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' });
  // Case = the span's own c-dat / c-akk; example = this page's sentence and its existing translation (the 'gibt' entry).
  assert.equal(ctx.WORDS.mir.case, 'Dativ'); assert.equal(ctx.WORDS.das.case, 'Akkusativ');
  for (const k of ['mir', 'das']) assert.deepEqual([ctx.WORDS[k].example, ctx.WORDS[k].example_en], [ctx.WORDS.gibt.example, ctx.WORDS.gibt.example_en]);
  for (const k of ['mir', 'das']) for (const f of ['ipa', 'gender', 'plural', 'why', 'conj', 'compare', 'advanced']) assert.equal(ctx.WORDS[k][f], undefined, k + '.' + f + ' is not invented');
  // Why the entries are needed: on the surface alone the course dictionary gives the other sense
  // (the lexicon's only "das" is the pronoun; "mir" has no entry and falls back to its lemma "ich").
  const lexCtx = { window: {} }; vm.runInNewContext(read('chapter/global-lexicon.js'), lexCtx);
  const LEX = lexCtx.window.KW_GLOBAL_LEXICON;
  assert.equal(LEX.das.type, 'Pronoun'); assert.equal(LEX.mir, undefined); assert.equal(LEX.ich.en, 'I');
  // The other three need no page entry: the course dictionary already gives the right reading.
  for (const k of ['ist', 'deutsch', 'montag']) assert.equal(ctx.WORDS[k], undefined, k + ' stays on the course lookup');
  assert.deepEqual([sentence('ist'), sentence('deutsch'), sentence('montag')], ['Heute ist Montag.', 'Anna lernt Deutsch.', 'Heute ist Montag.']);
  assert.equal(LEX.deutsch.en, 'German (language)');
  assert.equal(LEX.montag.en, 'Monday'); assert.equal(LEX.montag.type, 'Noun');
  assert.equal(lexCtx.window.KW_INFLECTIONS.ist, 'sein');
  assert.equal(LEX.sein.conj.praesens.er, 'ist');
});

test('keyboard: word triggers are focusable buttons that open the popup with Enter / Space (one shared layer)', () => {
  assert.match(APP, /const WORD_TRIGGERS = POP_HOST\n    \? \[POP_HOST\.triggers, '\.word-pop \.de-link'\]\.filter\(Boolean\)\.join\(', '\)\n    : '\.de-link, \.rw';/);
  const layer = APP.slice(APP.indexOf('  function markWordTriggers('), APP.indexOf('  function init() {'));
  assert.match(layer, /n\.parentElement\.closest\(IN_CONTROL\)\)\) return;/, 'never inside another control');
  assert.match(layer, /n\.tabIndex = 0;\s*n\.setAttribute\('role', 'button'\);\s*n\.setAttribute\('aria-haspopup', 'dialog'\);/);
  assert.match(layer, /if \(ev\.key !== 'Enter' && ev\.key !== ' '\) return;[\s\S]*?ev\.preventDefault\(\);\s*t\.click\(\);/, 'Enter / Space fire the same click');
  assert.match(APP, /function init\(\) \{\s*watchWordTriggers\(\);\s*if \(POP_HOST\)/, 'chapters and hosts alike');
  // Every .rw / .de-link the renderers create is a popup trigger (each gets the popup click handler).
  const sites = [...APP.matchAll(/const (sp|span) = el\('span', \{ class: '(rw de |de-link )[^\n]*\n\s*(.*)/g)];
  assert.ok(sites.length >= 5, 'el() renderer sites found: ' + sites.length);
  for (const m of sites) assert.match(m[3], /addEventListener\('click'/, m[0].slice(0, 60));
  const elSites = [...APP.matchAll(/const sp = el\('span', \{ class: \('de-link '[^\n]*\n\s*(.*)/g)];
  const domSites = [...APP.matchAll(/span\.className = \('de-link [^\n]*\n(?:[^\n]*\n){0,12}?\s*span\.addEventListener\('click'/g)];
  assert.ok(elSites.length >= 1 && elSites.every((m) => /addEventListener\('click'/.test(m[1])), 'story-line .de-link sites');
  // The one exception: colorWordsIn's colour-only words (inside MCQ answer buttons) — marked, never triggers.
  assert.equal(domSites.length + 1, (APP.match(/span\.className = \('de-link /g) || []).length, 'every createElement .de-link gets the popup click, except colour-only');
  assert.match(APP, /function colorWordsIn\(host\) \{[\s\S]*?span\.dataset\.noPopup = '1';/);
  assert.match(layer, /n\.dataset\.noPopup \|\|/, 'colour-only words are skipped');
  assert.ok(domSites.length >= 3, 'createElement .de-link sites found: ' + domSites.length);
  // Popup: focus moves in, Tab stays in, focus returns to the word on close.
  assert.match(APP, /wordPop = el\('div', \{ class: 'word-pop', role: 'dialog', 'aria-modal': 'true', tabindex: '-1' \}\);/);
  assert.match(APP, /if \(!wordPop\.contains\(document\.activeElement\)\) wordPop\.focus\(\{ preventScroll: true \}\);/);
  assert.match(APP, /if \(wasOpen && opener && opener\.isConnected && typeof opener\.focus === 'function'\) opener\.focus\(\{ preventScroll: true \}\);/);
  assert.match(APP, /wordPop\.setAttribute\('aria-label', t\.w\);/);
  // Visible focus for keyboard only; mouse/touch focus unmarked.
  assert.match(POP_CSS, /\.de-link:focus-visible,\n\.rw:focus-visible \{\n  outline: 2px solid var\(--accent\);/);
  assert.doesNotMatch(POP_CSS, /\.de-link:focus-visible \{[^}]*outline: none/);
  assert.match(HOME_STYLE, /\.de:where\(:not\(\.word-pop \.de\)\):focus-visible \{\n  outline: none;\n  background: rgba\(14, 14, 16, 0\.06\);\n  box-shadow: 0 0 0 2px/);
  assert.match(HOME, /triggers: '\.de\[data-word\]'/);
});
