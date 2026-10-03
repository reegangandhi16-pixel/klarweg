/* Chapter pages (A1–C2): the shared responsive rules that keep all 258
   chapters inside the viewport from 320px to 1920px. These pin the fixes
   found by the 2,580-render headless audit so they cannot silently regress;
   the audit itself (headless Chrome, every page × 10 viewports) is run
   separately because it needs a browser. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CSS = fs.readFileSync(path.join(ROOT, 'chapter/chapter.css'), 'utf8');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** Declarations of the first top-level rule for `sel`. */
const rule = (sel) => { const m = CSS.match(new RegExp('(?:^|\\n)' + esc(sel) + '\\s*\\{([^}]*)\\}')); return m ? m[1] : ''; };
/** Concatenated bodies of every @media block whose query contains `q`. */
const media = (q) => {
  const out = []; let i = 0;
  while ((i = CSS.indexOf('@media', i)) !== -1) {
    const open = CSS.indexOf('{', i); const head = CSS.slice(i, open);
    let depth = 1, j = open + 1;
    while (depth && j < CSS.length) { if (CSS[j] === '{') depth++; else if (CSS[j] === '}') depth--; j++; }
    if (head.includes(q)) out.push(CSS.slice(open + 1, j - 1));
    i = j;
  }
  return out.join('\n');
};
const RESPONSIVE = CSS.slice(CSS.indexOf('RESPONSIVE PASS'));

test('header: section tabs stick directly BELOW the fixed top bar (never under it)', () => {
  assert.match(CSS, /:root \{\s*\/\*[^*]*\*\/\s*--topbar-h: 76px;\s*--dash-nav-h: 61px;/);
  assert.match(rule('.chapter-topbar'), /position: fixed; top: 0;[\s\S]*height: var\(--topbar-h\); box-sizing: border-box;/);
  assert.match(rule('.dash-nav'), /position: sticky;\s*top: var\(--topbar-h\);/);
  assert.match(media('max-width: 720px'), /:root \{ --topbar-h: 60px; \} \.chapter-topbar \{ padding: 0 16px; \}/, 'compact top bar on phones');
  assert.match(rule('.dash-section'), /scroll-margin-top: calc\(var\(--topbar-h\) \+ var\(--dash-nav-h\) \+ 8px\)/);
  assert.match(rule('.story-left'), /top: calc\(var\(--topbar-h\) \+ var\(--dash-nav-h\) \+ 24px\)/);
  // scrolling to a section clears BOTH bars (no hard-coded 72/64 offsets left)
  assert.match(APP, /function stickyOffset\(\) \{[\s\S]*#topbar[\s\S]*\.dash-nav[\s\S]*\+ 8;/);
  assert.equal((APP.match(/pageYOffset - stickyOffset\(\)/g) || []).length, 2);
  assert.doesNotMatch(APP, /pageYOffset - (72|64)\b/);
});

test('long words: break only when they cannot fit; tables keep their own sizing; nothing is hidden', () => {
  assert.match(RESPONSIVE, /\.single, main, \.grammar-helper-panel, \.kw-ai-chat \{ overflow-wrap: anywhere; \}/);
  assert.match(RESPONSIVE, /\.case-table, \.case-table \*, \.dash-nav, \.meta-pill, \.btn, \.filter-chip \{ overflow-wrap: normal; \}/);
  assert.match(RESPONSIVE, /\[lang="de"\] \{ hyphens: auto; -webkit-hyphens: auto; hyphenate-limit-chars: 12 6 6; \}/);
  assert.match(RESPONSIVE, /\.case-table \[lang="de"\] \{ hyphens: manual;/);
  // Only the pre-existing body rule; the responsive fixes never hide overflow.
  assert.equal((CSS.match(/overflow-x:\s*hidden/g) || []).length, 1);
  assert.match(rule('body'), /overflow-x: hidden;/);
  assert.doesNotMatch(RESPONSIVE, /overflow(-x)?:\s*hidden/, 'overflow is fixed, never hidden');
  assert.match(rule('.grammar-table-scroll'), /overflow-x: auto/, 'grammar tables still scroll in their wrapper');
});

test('chapter title: clamp(34px, 10vw, 92px) on phones; desktop rule unchanged', () => {
  assert.match(rule('.display-xl'), /font-size: clamp\(48px, 7vw, 92px\);/);
  assert.match(media('max-width: 600px'), /\.display-xl \{ font-size: clamp\(34px, 10vw, 92px\); \}/);
});

test('grid/flex containers may shrink below their longest word', () => {
  for (const sel of ['.story-split > *', '.card-grid > *', '.dash-section > *', '.flex-between > *', '.takeaway > *', '.accordion-head > *', '.gh-row > *', '.next-chapter > *']) {
    assert.ok(RESPONSIVE.includes(sel), sel);
  }
  assert.match(RESPONSIVE, /\.next-chapter > \* \{ min-width: 0; \}/);
  assert.match(media('max-width: 860px'), /\.story-split \{ grid-template-columns: minmax\(0, 1fr\); \}/);
  assert.match(media('max-width: 720px'), /\.flow-section \{ padding: 80px 20px; \}/);
});

test('buttons: labels wrap on narrow screens only', () => {
  assert.match(rule('.btn'), /white-space: nowrap;/, 'desktop unchanged');
  assert.match(media('max-width: 480px'), /\.btn \{ white-space: normal; text-align: center; \}/);
});

test('touch targets: 44px on phones and touch screens for every shared control the audit flagged', () => {
  const t = media('(pointer: coarse)');
  for (const sel of ['.btn', '.dash-nav-item', '.filter-chip', '.section-complete', '.acct-btn', '.story-speed button', '.story-play-line', '.audio-speed button', '.vword-btn', '.vword-voice']) {
    assert.ok(t.includes(sel), sel);
  }
  assert.match(t, /\.vword-voice \{ min-height: 44px; \}/);
  assert.match(t, /\.vword-voicewrap \.vword-btn \{ min-width: 44px; \}/);
  assert.match(t, /\.story-play-line \{ width: 44px; height: 44px; \}/);
  assert.match(t, /\.gap-input \{ min-height: 44px; vertical-align: middle; \}/);
  assert.match(t, /\.search-box input \{ min-height: 44px; \}/);
  assert.match(t, /\.topbar-brand \{ min-height: 44px; \}/);
  assert.match(t, /\.prev-chapter-link \{ display: inline-flex; align-items: center; min-height: 44px; \}/);
  assert.match(CSS, /@media \(max-width: 720px\), \(pointer: coarse\) \{/);
});

test('vocabulary card actions: each sizes to its label, never breaks mid-label, row wraps if needed', () => {
  assert.match(rule('.vword-actions'), /display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;/);
  assert.match(rule('.vword-actions .vword-btn'), /flex: 1 1 auto; white-space: nowrap;/);
  assert.match(rule('.vword-btn'), /flex: 1;/, 'other .vword-btn uses unchanged');
  assert.ok(media('(pointer: coarse)').includes('.vword-btn'), 'still 44px on phones');
});

test('vocabulary headword keeps whole words: buttons wrap below instead of mid-word breaks', () => {
  assert.match(rule('.vword-top'), /display: flex; flex-wrap: wrap;/);
  assert.match(rule('.vword-de'), /flex: 1 1 auto; width: min-content; min-width: 0; overflow-wrap: break-word;/);
  assert.doesNotMatch(rule('.vword-de'), /overflow-wrap: anywhere/);
  assert.match(rule('.vword'), /min-width: 0;/);
  // never hyphenated, except a 16+ character word on its own full-width row
  assert.match(rule('.vword-de, .vword-de [lang="de"]'), /hyphens: manual;/);
  assert.match(rule('.vword-top--long .vword-de'), /flex-basis: 100%;/);
  assert.match(rule('.vword-top--long .vword-lex'), /hyphens: auto;/);
  assert.match(rule('.vword-lex'), /display: inline-block; max-width: 100%;/);
  assert.match(rule('.vword-top--long .vword-w'), /display: inline-block; max-width: 100%;/);
  assert.match(APP, /if \(longHeadword\) wordBoxes\(card\.querySelector\('\.vword-lex'\)\);/);
  assert.match(APP, /const longHeadword = term\.split\(.*\)\.some\(\(t\) => t\.length >= 16\);/);
  // slash-joined forms ("Bewunderer/Bewunderin") break after the slash
  assert.match(APP, /slashBreaks\(card\.querySelector\('\.vword-lex'\)\);\n    if \(longHeadword\) wordBoxes\(card\.querySelector\('\.vword-lex'\)\);\n    return card;/);
  // plural tags ("Pl. Ministerpräsidenten/Ministerpräsidentinnen") break after the slash too
  assert.match(APP, /'Noun · plural' \}\)\)\); slashBreaks\(s\); return s;/);
});

test('explanation callouts: one shared teal standard for the Hinglish card and the Overview one-idea card', () => {
  const tint = /background: color-mix\(in srgb, var\(--accent\) 7%, var\(--bg-surface\)\);/;
  const line = /color-mix\(in srgb, var\(--accent\) 24%, var\(--bg-surface\)\)/;
  const depth = /box-shadow: inset 3px 0 0 var\(--accent\), 0 4px 18px rgba\(31, 78, 74, 0\.08\);/;
  for (const sel of ['.hinglish-card', '.card.one-idea-card']) {
    assert.match(rule(sel), tint, sel); assert.match(rule(sel), line, sel); assert.match(rule(sel), depth, sel);
    assert.doesNotMatch(rule(sel), /animation|transition/, sel);
  }
  assert.match(rule('.one-idea-card > .eyebrow'), /color: var\(--accent\);/);
  // the Overview card takes the class instead of its old inline warm style
  assert.match(APP, /el\('div', \{ class: 'card one-idea-card' \},/);
  assert.doesNotMatch(APP, /background:var\(--bg-warm\);border-color:#f0deb8/);
  // no page keeps its own copy of the callout rules
  for (const f of fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-.*\.html$/.test(f))) {
    const h = fs.readFileSync(path.join(ROOT, 'chapter', f), 'utf8');
    assert.ok(!/Visual experiment|\.hinglish-card\s*\{|one-idea-card|#sec-overview \.card-grid > \.card/.test(h), f);
  }
});

test('chapter action theme: shared teal controls, amber grammar semantics, coral conversion CTA', () => {
  // teal in-app action controls, defined once in chapter.css
  assert.match(rule('.btn-primary'), /background: var\(--accent\);/);
  assert.match(rule('.btn-primary'), /rgba\(31,78,74,0\.42\)/);
  assert.doesNotMatch(rule('.btn-primary') + rule('.btn-primary:hover'), /229,90,63/, 'no coral glow under teal buttons');
  assert.match(rule('.btn-primary:hover'), /background: #163A37;/);
  assert.match(rule('.mic-btn'), /background: var\(--accent\);/);
  assert.match(rule('.mic-btn.is-recording'), /background: var\(--g-verb\);/);
  assert.match(rule('.audio-play-btn'), /background: var\(--accent\);/);
  assert.match(rule('.audio-track-fill'), /background: var\(--accent\);/);
  assert.doesNotMatch(CSS, /#c44e26/i);
  // amber grammar semantics stay authoritative
  assert.match(CSS, /--g-article: #B45309;/);
  assert.match(rule('.vword-de .art'), /color: var\(--g-article\);/);
  assert.match(rule('.vp-de .vp-article'), /color: var\(--g-article\);/);
  // coral conversion exception: only the "Unlock to continue" link
  assert.match(rule('.btn-primary.btn-unlock'), /background: var\(--coral\);/);
  assert.equal((APP.match(/btn-unlock/g) || []).length, 1);
  assert.match(APP, /class: 'btn btn-primary btn-unlock'[^\n]*'Unlock to continue'/);
  assert.match(APP, /class: 'btn btn-primary', href: C\.nextChapter\.href \|\| '#' \}, 'Continue '/);
  // pages no longer restate the theme; page-specific .r-* concept rules may stay
  const THEME = /(\.btn-primary|\.mic-btn|\.audio-play-btn|\.audio-track-fill|\.vword-tag\.gender-|\.vword-de \.art|\.vp-article)[^{}]*\{/;
  for (const f of fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-.*\.html$/.test(f))) {
    const styles = (fs.readFileSync(path.join(ROOT, 'chapter', f), 'utf8').match(/<style>[\s\S]*?<\/style>/g) || []).join('');
    assert.doesNotMatch(styles, THEME, f);
  }
  const c202 = fs.readFileSync(path.join(ROOT, 'chapter', 'chapter-c2-02-verben-mit-praefixen.html'), 'utf8');
  assert.match(c202, /\.r-praefix-praezise, \.r-baum-metapher[^{]*\{ color: #1F4E4A; font-weight: 600; \}/);
});

test('Grammar Helper rows wrap; sentence-parser labels get room at the edges', () => {
  assert.match(RESPONSIVE, /\.gh-row \{ flex-wrap: wrap; \}/);
  assert.match(RESPONSIVE, /\.parser-sentence \{ overflow-wrap: anywhere; \}\s*\.parser-tok \{ max-width: 100%; \}/);
  assert.match(media('max-width: 720px'), /\.parser-sentence \{ padding-inline: 12px; \}/);
});

test('floating controls and the chapter AI UI keep their placement', () => {
  assert.match(rule('.grammar-helper-btn'), /position: fixed; bottom: 88px; right: 24px;/);
  assert.match(rule('.kw-ai-fab'), /position: fixed; right: 24px; bottom: 24px; z-index: 60;/);
  assert.match(media('max-width: 560px'), /\.kw-ai-fab \{ right: 16px; bottom: 16px; width: 48px; height: 48px;/);
  assert.doesNotMatch(RESPONSIVE, /kw-ai-fab|kw-ai-chat \{[^}]*(width|right|bottom)/, 'responsive pass does not move the AI launcher/panel');
  assert.doesNotMatch(RESPONSIVE, /var\(--g-/, 'no grammar colours added');
});

/* ---------- German marking (renderer) ---------- */
function germanMarker() {
  const src = APP.slice(APP.indexOf('  const GERMAN_SEL = '), APP.indexOf('  function watchGerman()'));
  // tiny DOM: class/tag compound selectors, "a > b" child combinator, comma lists
  class El {
    constructor(tag, cls = '', parent = null) { this.tagName = tag.toUpperCase(); this.cls = cls.split(/\s+/).filter(Boolean); this.attrs = {}; this.children = []; this.parentElement = parent; this.nodeType = 1; if (parent) parent.children.push(this); }
    setAttribute(k, v) { this.attrs[k] = v; } hasAttribute(k) { return k in this.attrs; } getAttribute(k) { return this.attrs[k] ?? null; }
    one(sel) { const [, tag, cls] = sel.match(/^([a-z0-9]*)((?:\.[a-z0-9-]+)*)$/i); return (!tag || this.tagName === tag.toUpperCase()) && cls.split('.').filter(Boolean).every((c) => this.cls.includes(c)); }
    matches(list) { return list.split(',').map((s) => s.trim()).some((s) => { const p = s.split('>').map((x) => x.trim()); return p.length === 2 ? this.one(p[1]) && !!this.parentElement && this.parentElement.one(p[0]) : this.one(p[0]); }); }
    querySelectorAll(list) { const out = []; const walk = (n) => n.children.forEach((c) => { if (c.matches(list)) out.push(c); walk(c); }); walk(this); return out; }
  }
  const ctx = {}; vm.createContext(ctx); vm.runInContext(src + '\nthis.markGerman = markGerman;', ctx);
  return { El, markGerman: ctx.markGerman };
}

test('German marking: German text gets lang="de"; English/Hindi/UI text does not', () => {
  const { El, markGerman } = germanMarker();
  const body = new El('body');
  const hero = new El('div', 'flow-inner', body);
  const title = new El('h1', 'display display-xl', hero);
  const lede = new El('p', 'lede', hero);                        // English lead text
  const word = new El('span', 'de', lede);                        // German word inside English
  const story = new El('div', 'story-card', body);
  const line = new El('div', 'story-line', story);
  const trans = new El('div', 'story-trans', story);              // translation is a sibling
  const en = new El('span', 'st-en', trans), hi = new El('span', 'st-hi', trans);
  const parser = new El('div', 'parser-sentence', body);
  const tok = new El('span', 'parser-tok r-subject', parser);
  const label = new El('span', 'parser-label r-subject', tok);    // "NOM" — English UI
  const section = new El('h2', 'display display-md', body);       // English section heading
  const btn = new El('button', 'btn btn-soft', body);
  for (const g of ['.speak-prompt de', 'vword-ex', 'example-line', 'gap-sentence', 'sentence-unit-text', 'vp-de', 'vword-de', 'de-em']) new El('div', g, body);
  markGerman(body);
  for (const n of [title, word, line, parser]) assert.equal(n.getAttribute('lang'), 'de', n.cls.join('.'));
  assert.equal(label.getAttribute('lang'), 'en', 'parser role labels are English UI');
  for (const n of [lede, trans, en, hi, section, btn, story, hero]) assert.equal(n.getAttribute('lang'), null, n.cls.join('.') + ' stays unmarked');
  assert.ok(body.querySelectorAll('.vword-ex, .example-line, .gap-sentence, .sentence-unit-text, .vp-de, .vword-de, .de-em').every((n) => n.getAttribute('lang') === 'de'));
  // an existing lang is never overwritten
  const keep = new El('span', 'de', body); keep.setAttribute('lang', 'en'); markGerman(body);
  assert.equal(keep.getAttribute('lang'), 'en');
});

test('German marking also covers content added later (pop-ups, AI answers) and runs before rendering', () => {
  assert.match(APP, /new MutationObserver\(\(list\) => list\.forEach\(\(m\) => m\.addedNodes\.forEach\(markGerman\)\)\)\s*\.observe\(document\.body, \{ childList: true, subtree: true \}\);/);
  assert.match(APP, /function init\(\) \{\s*watchGerman\(\);/);
});

test('258 chapter pages load the new asset versions and nothing else changed in their markup', () => {
  const pages = fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-.*\.html$/.test(f));
  assert.equal(pages.length, 258);
  for (const f of pages) {
    const h = fs.readFileSync(path.join(ROOT, 'chapter', f), 'utf8');
    assert.ok(h.includes('href="chapter.css?v=19"') && h.includes('src="chapter-app.js?v=26"'), f);
    assert.ok(!h.includes('href="chapter.css?v=14"') && !h.includes('href="chapter.css?v=17"') && !h.includes('src="chapter-app.js?v=16"') && !h.includes('src="chapter-app.js?v=21"') && !h.includes('src="chapter-app.js?v=22"') && !h.includes('src="chapter-app.js?v=23"') && !h.includes('src="chapter-app.js?v=24"') && !h.includes('src="chapter-app.js?v=25"') && !h.includes('href="chapter.css?v=18"'), f);
  }
});
