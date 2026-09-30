/* ============================================================
   KLARWEG — Chapter resource PDFs: shared helpers
   Pure functions only (no fs), so templates stay unit-testable.
============================================================ */

export const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

/* ---------- escaping ---------- */
// U+FE0F (emoji presentation selector) is invisible, but it forces Chrome to
// print the preceding symbol from a colour-bitmap emoji font (a Type3 font).
// Dropping it at render time keeps the authored symbol (e.g. ⚠) in the
// embedded monochrome face; chapter data is never modified.
const textPresentation = (s) => String(s == null ? '' : s).replace(/\uFE0F/g, '');

export const esc = (s) => textPresentation(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Authored grammar fields carry trusted inline markup (<b>, <span class="de r-verb">);
// keep it, but never let a script tag through.
export const html = (s) => textPresentation(s).replace(/<\/?script\b[^>]*>/gi, '');

// Value for a CSS string literal inside <style>: escape quotes, backslashes, angle brackets.
export const cssString = (s) => '"' + String(s).replace(/[\\"<>\n]/g, (c) => '\\' + c.charCodeAt(0).toString(16) + ' ') + '"';

export const nonEmpty = (a) => Array.isArray(a) && a.length > 0;

/* ---------- ids ---------- */
export function parseId(id) {
  const m = /^(a1|a2|b1|b2|c1|c2)-(\d+)-([a-z0-9-]+)$/.exec(String(id));
  if (!m) throw new Error('Unexpected chapter id: ' + id);
  return { level: m[1], number: Number(m[2]), slug: m[3] };
}
export const chapterTag = (id) => { const { level, number } = parseId(id); return `${level.toUpperCase()}·${String(number).padStart(2, '0')}`; };
export const compareIds = (a, b) => {
  const x = parseId(a), y = parseId(b);
  return LEVELS.indexOf(x.level) - LEVELS.indexOf(y.level) || x.number - y.number;
};

/* ---------- content rules ---------- */
// Checkpoint chapters carry an internal block describing tutor routing logic.
export const isInternalBlock = (g) => /^AI Tutor\b/i.test(String((g && g.title) || ''));

// A gap exercise is printable only when parts and gaps interleave cleanly
// (parts = gaps + 1). Malformed authoring is skipped, never "repaired".
export const isWellFormedGap = (g) => !!g && nonEmpty(g.sentence) && nonEmpty(g.gaps) &&
  g.sentence.length === g.gaps.length + 1 && !g.sentence.some((p) => /_{2,}/.test(p));

/* Join a token stream into plain text with the same spacing rules as the
   listening transcript renderer in chapter/chapter-app.js. */
export function joinTokens(tokens) {
  let out = '';
  let prevNoSpaceAfter = true;
  for (const t of tokens || []) {
    const w = String(t.w == null ? '' : t.w);
    const noSpaceBefore = prevNoSpaceAfter || (!t.spaceBefore && /^[.,!?;:)\]…”"'”]/.test(w));
    if (!noSpaceBefore) out += ' ';
    out += w;
    prevNoSpaceAfter = t.noSpaceAfter === true || (/[„«(]$/.test(w) && w.length <= 2);
  }
  return out;
}

/* Deterministic shuffle (mulberry32 seeded from a string). The app shuffles
   word banks at random; print needs a stable order that never happens to
   equal the answer order (`avoid`, defaulting to the input order). */
function seedFrom(str) { let h = 1779033703 ^ str.length; for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); } return h >>> 0; }
export function stableShuffle(items, seed, avoid = items) {
  const arr = [...items];
  const same = (x) => x.length === avoid.length && x.every((v, i) => v === avoid[i]);
  if (arr.length < 2) return arr;
  let s = seedFrom(String(seed));
  const rnd = () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let attempt = 0; attempt < 8; attempt++) {
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    if (!same(arr)) return arr;
  }
  const rotated = [...arr.slice(1), arr[0]];
  return same(rotated) ? arr : rotated;   // only equal when every item is identical
}

/* ---------- resource types ----------
   A resource's type is the basename of its authored pdfUrl
   (/pdfs/vocabulary.pdf → "vocabulary"). Titles, descriptions and kinds
   stay exactly as authored in C.resources. */
export const RESOURCE_TYPES = {
  vocabulary: { template: 'vocabulary' },
  grammar: { template: 'grammar' },
  homework: { template: 'practice' },
  'mock-test': { template: 'practice' },
  scoring: { template: 'scoring' },
  'answer-key': { template: 'answer-key' },
  'revision-guide': { template: 'revision-guide' },
  'test-paper': { template: 'test-paper' },
  certificate: { template: null, reason: 'personalised certificate — issued per learner, not a static chapter file' },
  'progress-dashboard': { template: null, reason: 'personalised progress report — depends on the learner’s own results' },
};

export function resourceTypeOf(r) {
  const m = /\/([a-z0-9-]+)\.pdf$/i.exec(String((r && r.pdfUrl) || ''));
  return m ? m[1].toLowerCase() : null;
}

/* Resources Klarweg adds centrally, on top of a chapter's authored cards —
   so no chapter data file is edited. Each rule derives from the data:
   a checkpoint whose authored set is Scoring + Complete Answer Key gets a
   printable Test Paper, placed first (take the test → score → check → revise). */
export const DERIVED_RESOURCES = [
  {
    type: 'test-paper',
    applies: (C, types) => C.isCheckpoint === true && types.includes('scoring') && types.includes('answer-key') && !types.includes('test-paper'),
    card: {
      icon: '\u{1F4DD}',
      title: 'Test Paper PDF',
      desc: 'The full checkpoint test to take offline. Score it with the Scoring Table, then check it with the Complete Answer Key.',
      kind: 'Assessment',
    },
    position: 'first',
  },
];

export function listResources(C) {
  const authored = (C.resources || []).map((r, index) => {
    const type = resourceTypeOf(r);
    const def = RESOURCE_TYPES[type];
    return {
      index, type, title: r.title, desc: r.desc, kind: r.kind, derived: false,
      template: def ? def.template : null,
      reason: !def ? 'unknown resource type' : def.reason || null,
    };
  });
  const types = authored.map((r) => r.type);
  const derived = DERIVED_RESOURCES.filter((d) => d.applies(C, types)).map((d) => ({
    index: null, type: d.type, title: d.card.title, desc: d.card.desc, kind: d.card.kind, icon: d.card.icon,
    derived: true, position: d.position, template: RESOURCE_TYPES[d.type].template, reason: null,
  }));
  return [...derived.filter((d) => d.position === 'first'), ...authored, ...derived.filter((d) => d.position !== 'first')];
}

// Assessment-style practice resources include listening questions
// (answered from the chapter audio); plain homework does not.
export const isAssessmentKind = (kind) => /assessment|mock/i.test(String(kind || ''));

export const resourceFile = (id, type) => { const { level } = parseId(id); return `pdfs/${level}/${id}/${type}.pdf`; };
