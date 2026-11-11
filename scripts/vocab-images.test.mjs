// Visual Vocabulary (all levels): the optional `img` field on chapter vocab
// entries, and the tooling that produces it (scripts/vocab-images/).
//
// Access rules (paid-content policy):
//  - PUBLIC images (../public/vocab-img/…) are published on Pages. Every public
//    file must be used by at least one FREE chapter (Chapter 1 of a level), so a
//    paid-only illustration is never published.
//  - GATED images (/api/media/vocab-img/<20-hex id>) are paid-only. They are
//    allowed only on paid chapters, and docs/visual-vocab/gated-images.json
//    (= R2 vocab-img/levels.json, the map the access Worker authorizes with)
//    must list each id with EXACTLY the levels of the paid chapters using it:
//    a missing level would lock out a buyer, an extra one would leak.
//  - One concept (headword + meaning) → one image everywhere.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadChapters, classify, conceptKey, headTerm, promptFor, STYLE } from './vocab-images/lib.mjs';
import { vocabEntrySpans, applyImages, evalChapter } from './vocab-images/apply-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const allow = new Set(fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8').split('\n').map((l) => l.trim()));
const gatedMap = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/visual-vocab/gated-images.json'), 'utf8'));
const MAX_BYTES = 60 * 1024;
const PUBLIC = /^\.\.\/public\/vocab-img\/([a-z0-9-]+(?:\/[a-z0-9-]+)?)$/;
const GATED = /^\/api\/media\/vocab-img\/([0-9a-f]{20})$/;
const CHAPTERS = loadChapters();

test('every vocab image follows the access rules, exists, is small, and has alt text', () => {
  const publicUsedByFree = new Set();
  const srcByConcept = new Map();
  const gatedLevels = new Map();
  assert.ok(gatedMap && typeof gatedMap === 'object' && !Array.isArray(gatedMap), 'gated-images.json is an { id: [levels] } map');
  for (const ch of CHAPTERS) {
    for (const v of ch.C.vocab || []) {
      if (!v.img) continue;
      const im = v.img, where = `${ch.id} ${v.de}`;
      assert.ok(typeof im.alt === 'string' && im.alt.length >= 8 && !/^image|picture of/i.test(im.alt), `${where}: meaningful alt text`);
      const k = conceptKey(v);
      if (srcByConcept.has(k)) assert.equal(im.src, srcByConcept.get(k), `${where}: one concept, one image`);
      else srcByConcept.set(k, im.src);
      const pub = PUBLIC.exec(im.src), gat = GATED.exec(im.src);
      assert.ok(pub || gat, `${where}: src must be a public vocab-img path or the gated media route (${im.src})`);
      if (gat) {
        assert.ok(!ch.free, `${where}: a free chapter cannot use a gated image`);
        assert.ok(Array.isArray(gatedMap[gat[1]]), `${where}: ${gat[1]} is not in docs/visual-vocab/gated-images.json`);
        (gatedLevels.get(gat[1]) || gatedLevels.set(gat[1], new Set()).get(gat[1])).add(ch.level.toUpperCase());
        continue;
      }
      if (ch.free) publicUsedByFree.add(im.src);
      for (const f of im.formats || ['webp']) for (const px of im.widths || [800]) {
        const rel = 'public/vocab-img/' + pub[1] + '-' + px + '.' + f;
        const abs = path.join(ROOT, rel);
        assert.ok(fs.existsSync(abs), `${where}: missing ${rel}`);
        const size = fs.statSync(abs).size;
        assert.ok(size > 1024 && size <= MAX_BYTES, `${rel}: ${size} bytes`);
        assert.ok(allow.has(rel), `${rel} is not in .github/pages-allowlist.txt`);
      }
    }
  }
  // the levels map is exactly what the paid chapters use (no stale ids, no extra levels)
  assert.deepEqual(Object.keys(gatedMap).sort(), [...gatedLevels.keys()].sort(), 'gated-images.json ids = gated srcs in chapters');
  for (const [id, lv] of gatedLevels) assert.deepEqual(gatedMap[id], [...lv].sort(), `${id}: levels`);
  // no paid-only image is published: every public file belongs to a free-chapter image
  const files = [];
  const walk = (d) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) e.isDirectory() ? walk(path.join(d, e.name)) : files.push(path.join(d, e.name)); };
  walk(path.join(ROOT, 'public/vocab-img'));
  for (const f of files) {
    const rel = path.relative(path.join(ROOT, 'public/vocab-img'), f).replace(/-(400|800)\.(avif|webp)$/, '');
    assert.ok(publicUsedByFree.has('../public/vocab-img/' + rel), `public/vocab-img/${rel}: not used by any free chapter — paid-only images must be gated`);
  }
});

test('text-only concepts (grammar/function words) carry no image', () => {
  for (const ch of CHAPTERS) for (const v of ch.C.vocab || []) {
    if (v.img && classify(v).tier === 'text-only') {
      const ov = path.join(ROOT, 'docs/visual-vocab/inventory/overrides.json');
      const overrides = JSON.parse(fs.readFileSync(ov, 'utf8'));
      assert.ok(overrides[conceptKey(v)], `${ch.id} ${v.de}: text-only word has an image (add an override if intended)`);
    }
  }
});

test('the img writer finds every entry of every chapter and changes nothing else', () => {
  let entries = 0;
  for (const ch of CHAPTERS) {
    const n = (ch.C.vocab || []).length;
    if (!n) continue;
    const src = fs.readFileSync(path.join(ROOT, 'chapter', ch.file), 'utf8');
    assert.equal(vocabEntrySpans(src).spans.length, n, ch.file);
    const upd = new Map();
    ch.C.vocab.forEach((v, i) => { if (!v.img) upd.set(i, { src: '/api/media/vocab-img/t-' + i, formats: ['avif', 'webp'], widths: [400, 800], w: 4, h: 3, alt: "Test alt with 'quotes'" }); });
    const out = applyImages(src, upd, { filename: ch.file }); // throws on any other change
    const after = evalChapter(out.src, ch.file);
    assert.equal(after.vocab.filter((v) => v.img).length, n, ch.file);
    entries += n;
  }
  assert.ok(entries > 9000, 'scanned ' + entries);
});

test('classifier: grammar, function words, flags and big numbers stay text-only', () => {
  const t = (v) => classify(v).tier;
  assert.equal(t({ de: 'der Konjunktiv I', pos: 'noun' }), 'text-only');
  assert.equal(t({ de: 'entweder ... oder', pos: 'other' }), 'text-only');
  assert.equal(t({ de: 'auf', pos: 'preposition' }), 'text-only');
  assert.equal(t({ de: 'Deutschland', pos: 'country' }), 'text-only');
  assert.equal(t({ de: 'achtundzwanzig', pos: 'number' }), 'text-only');
  assert.equal(t({ de: 'drei', pos: 'number' }), 'image');
  assert.equal(t({ de: 'Apfel', art: 'der', pos: 'noun' }), 'image');
  assert.equal(t({ de: 'zelten', pos: 'verb' }), 'image');
  assert.equal(t({ de: 'meines Erachtens', pos: 'expression' }), 'concept');
  assert.equal(headTerm({ art: 'die', de: 'die Vermutung' }), 'die Vermutung');
  assert.equal(conceptKey({ art: 'die', de: 'die Vermutung', en: 'assumption' }), conceptKey({ art: 'die', de: 'Vermutung', en: 'assumption' }));
});

test('prompts keep the pilot style, forbid text/orange, and say "intended meaning" for expressions', () => {
  assert.match(STYLE, /no text, no letters, no numbers/);
  assert.match(STYLE, /no orange tones/);
  assert.match(STYLE, /#F7F3EA/);
  const p = promptFor({ de: 'die Daumen drücken', art: '', en: 'to keep one’s fingers crossed', pos: 'idiom', kind: 'expression', tier: 'concept', exEn: 'I keep my fingers crossed.' });
  assert.match(p, /intended meaning/);
  assert.match(p, /never a literal picture/);
  assert.ok(p.endsWith(STYLE));
});

test('paid generation refuses to run without owner approval and a budget', () => {
  const run = (...a) => { try { execFileSync(process.execPath, [path.join(ROOT, 'scripts/vocab-images/pipeline.mjs'), ...a], { stdio: 'pipe', env: { ...process.env, VOCAB_IMG_STORE: '/nonexistent-store' } }); return ''; } catch (e) { return String(e.stderr); } };
  assert.match(run('submit'), /--max-usd required/);
  assert.match(run('submit', '--max-usd', '5'), /without --approved-by-owner/);
});

test('the committed inventory matches the chapter data', () => {
  execFileSync(process.execPath, [path.join(ROOT, 'scripts/vocab-images/audit.mjs'), '--check'], { stdio: 'pipe' });
});

test('renderer keeps img optional and degrades gracefully', () => {
  const app = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
  assert.match(app, /function vocabFigure\(w, card\)/);
  assert.match(app, /if \(!im \|\| typeof im\.src !== 'string' \|\| !im\.src\) return null;/);
  assert.match(app, /loading: 'lazy'/);
  assert.match(app, /addEventListener\('error'/);
  assert.match(app, /\.\.\.\(fig \? \[fig\] : \[\]\)/);
  const css = fs.readFileSync(path.join(ROOT, 'chapter/chapter.css'), 'utf8');
  assert.match(css, /\.vword-fig \{[^}]*aspect-ratio: 4 \/ 3/);
  assert.match(css, /@media \(min-width: 721px\) \{ \.vword--img \.vword-top \{ min-height: 53px; \} \}/);
});
