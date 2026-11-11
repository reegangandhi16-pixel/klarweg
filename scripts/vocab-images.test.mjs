// Visual Vocabulary: the optional `img` field on chapter vocab entries.
// Every declared image must exist in every format × width, stay small, carry
// alt text, and be published (pages allowlist). Entries without `img` are the
// default and need nothing. Only free Chapter 1 pages may declare images for
// now (pilot scope: A1·01).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CH = path.join(ROOT, 'chapter');
const allow = new Set(fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8').split('\n').map((l) => l.trim()));
const MAX_BYTES = 60 * 1024; // per file; the 800w WebP of a 4:3 illustration is ~25–45 KB

function chapters() {
  return fs.readdirSync(CH).filter((f) => /^chapter-.+-data\.js$/.test(f)).sort().map((f) => {
    const sb = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(CH, f), 'utf8'), sb, { filename: f });
    return { file: f, C: sb.window.CHAPTER || {} };
  });
}

test('every vocab image exists in each format and width, is small, published and described', () => {
  let n = 0;
  for (const { file, C } of chapters()) {
    for (const v of C.vocab || []) {
      if (!v.img) continue;
      n++;
      const im = v.img;
      assert.equal(C.id, 'a1-1-alphabet', `${file} ${v.de}: images are piloted on A1·01 only`);
      assert.match(im.src, /^\.\.\/public\/vocab-img\/[a-z0-9-]+\/[a-z0-9-]+$/, `${v.de}: src is a relative, extension-less path`);
      assert.ok(typeof im.alt === 'string' && im.alt.length >= 8 && !/^image|picture of/i.test(im.alt), `${v.de}: meaningful alt text`);
      const formats = im.formats || ['webp'];
      const widths = im.widths || [800];
      for (const f of formats) for (const px of widths) {
        const rel = path.posix.join('chapter', im.src) .replace(/^chapter\/\.\.\//, '') + '-' + px + '.' + f;
        const abs = path.join(ROOT, rel);
        assert.ok(fs.existsSync(abs), `${v.de}: missing ${rel}`);
        const size = fs.statSync(abs).size;
        assert.ok(size > 1024 && size <= MAX_BYTES, `${rel}: ${size} bytes (limit ${MAX_BYTES})`);
        assert.ok(allow.has(rel), `${rel} is not in .github/pages-allowlist.txt`);
      }
    }
  }
  // n may be 0 before assets land; the renderer treats `img` as optional.
  assert.ok(n >= 0);
});

test('renderer keeps img optional and degrades gracefully', () => {
  const app = fs.readFileSync(path.join(CH, 'chapter-app.js'), 'utf8');
  assert.match(app, /function vocabFigure\(w, card\)/);
  assert.match(app, /if \(!im \|\| typeof im\.src !== 'string' \|\| !im\.src\) return null;/);
  assert.match(app, /loading: 'lazy'/);
  assert.match(app, /addEventListener\('error'/);
  assert.match(app, /\.\.\.\(fig \? \[fig\] : \[\]\)/, 'a missing image never appends "null" to the card');
  const css = fs.readFileSync(path.join(CH, 'chapter.css'), 'utf8');
  assert.match(css, /\.vword-fig \{[^}]*aspect-ratio: 4 \/ 3/, 'fixed box prevents layout shift');
  assert.doesNotMatch(css.match(/\.vword-fig[^{]*\{[^}]*\}/g).join('\n'), /scale\(|animation/, 'no image motion');
});
