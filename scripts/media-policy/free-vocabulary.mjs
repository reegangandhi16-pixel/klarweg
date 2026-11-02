/* German text that a page shows (and can speak), extracted from chapter data
 * and from the homepage. Only German-bearing fields are read, so English
 * explanations never count as evidence that a German word is "on a free page". */

/* Keys whose string values are German. */
const GERMAN_KEYS = new Set([
  'w', 'de', 'ex', 'plural', 'task', 'sentence', 'bank', 'answer', 'accepts',
  'starters', 'scene', 'speaker', 'femaleSpeakers', 'maleSpeakers', 'noun',
]);
/* Keys that are German only when an English twin (<key>En) sits beside them. */
const PAIRED_KEYS = new Set(['title', 'q', 'options', 'text', 'prompt', 'model']);

function pushStrings(v, out) {
  if (typeof v === 'string') { if (v.trim()) out.push(v); return; }
  if (Array.isArray(v)) for (const x of v) if (typeof x === 'string') pushStrings(x, out);
}
export function stripHtml(s) {
  return String(s).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

export function chapterGermanStrings(chapter) {
  const out = [];
  (function walk(o) {
    if (Array.isArray(o)) { o.forEach(walk); return; }
    if (!o || typeof o !== 'object') return;
    // A line rendered from tokens is spoken as the join of its tokens.
    if (Array.isArray(o.tokens) && o.tokens.length && o.tokens.every((t) => t && typeof t.w === 'string')) {
      out.push(o.tokens.map((t) => t.w).join(' '));
    }
    if (typeof o.de === 'string' && typeof o.art === 'string' && o.art.trim()) out.push(o.art.trim() + ' ' + o.de.trim());
    for (const [k, v] of Object.entries(o)) {
      if (GERMAN_KEYS.has(k)) pushStrings(v, out);
      else if (PAIRED_KEYS.has(k) && (k + 'En') in o) pushStrings(v, out);
      if (v && typeof v === 'object') walk(v);
    }
  })(chapter);
  return out.map(stripHtml).map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

/* Homepage: explicit German sources only.
 *  - data-word="…" attributes
 *  - w:'…' / de:'…' literals in inline scripts (demo story tokens)
 *  - text of elements whose class names a word cell (pron table, word cards)
 *  - homepage audio lines (no-chapter manifest texts) that appear in the page */
export function homepageGermanStrings(html, noChapterTexts = []) {
  const out = [];
  for (const m of html.matchAll(/data-word="([^"]+)"/g)) out.push(m[1]);
  for (const m of html.matchAll(/\b(?:w|de)\s*:\s*'((?:[^'\\]|\\.)*)'/g)) out.push(m[1].replace(/\\'/g, "'"));
  for (const m of html.matchAll(/\b(?:w|de)\s*:\s*"((?:[^"\\]|\\.)*)"/g)) out.push(m[1]);
  for (const m of html.matchAll(/<([a-z0-9]+)[^>]*class="[^"]*\b(?:pron-cell-word|wc-word|hover-preview-word)\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)) out.push(stripHtml(m[2]));
  const found = [];
  for (const t of noChapterTexts) if (html.includes(t)) { out.push(t); found.push(t); }
  return {
    strings: out.map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean),
    noChapterFound: found,
  };
}

/* Visible homepage copy (scripts/styles removed). NOT evidence on its own:
 * used only to flag words that appear in English copy. */
export function visibleText(html) {
  return stripHtml(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' '));
}

export function words(s) {
  return String(s).match(/[A-Za-zÄÖÜäöüß]+(?:-[A-Za-zÄÖÜäöüß]+)*/g) || [];
}

/* Everything a page can ask the player to speak: each full string and each word. */
export function speakables(strings) {
  const set = new Set();
  for (const s of strings) { set.add(s); for (const w of words(s)) set.add(w); }
  return [...set];
}

/* chapter-app.js normWord(), for lexicon keys. */
export function normWord(w) {
  return String(w || '').toLowerCase()
    .replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '')
    .replace(/^['’-]+|['’-]+$/g, '')
    .trim();
}
export function storyNorm(w) { return normWord(w).replace(/['’\-]/g, ''); }

/* Lexicon entries a set of strings needs (dry run of the Stage 4 split). */
export function lexiconNeeds(strings, { G, I, CAPS, S }) {
  const g = new Set(), inf = new Set(), caps = new Set(), story = new Set();
  for (const s of strings) for (const w of words(s)) {
    const nk = normWord(w);
    if (G[nk]) g.add(nk);
    if (I[nk]) { inf.add(nk); const l = String(I[nk]).toLowerCase(); if (G[l]) g.add(l); }
    if (CAPS[w]) caps.add(w);
    if (S[storyNorm(w)]) story.add(storyNorm(w));
    if (!G[nk] && !I[nk] && nk.length > 5) {                 // compound split, as resolveLemma()
      for (let cut = 3; cut <= nk.length - 3; cut++) {
        const head = nk.slice(0, cut), tail = nk.slice(cut);
        for (const h of [head, head.replace(/[sn]$/, '')]) if (G[h] && G[tail]) { g.add(h); g.add(tail); }
      }
    }
  }
  return { g, inf, caps, story };
}

/* OWNER DECISION 2026-11-02 (Stage 0 review): German words that appear only in
   the homepage's visible copy and whose audio is free. Exactly these 11; Im,
   Start, Fit, Diplom and all English words / single letters stay restricted. */
export const OWNER_HOMEPAGE_WORDS = Object.freeze([
  'Hören', 'Lesen', 'Schreiben', 'Sprechen', 'Akkusativ', 'Dativ', 'Nominativ',
  'geben', 'gerne', 'trinke', 'Stück',
]);
/* OWNER DECISION 2026-11-02: homepage/no-chapter audio lines are free when the
   homepage shows them, plus these common greetings (also used in paid chapters).
   Every other no-chapter line is restricted. */
export const OWNER_FREE_GREETINGS = Object.freeze([
  'Bitte', 'Danke', 'Guten Abend', 'Guten Morgen', 'Guten Tag', 'Hallo', 'Ja', 'Nein',
  'Tschüss', 'Wie geht es Ihnen?', 'Woher kommen Sie?',
]);
