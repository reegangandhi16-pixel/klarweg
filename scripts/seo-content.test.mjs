/* Content guards for every indexable page (sitemap.xml), added after the
   Goethe batch shipped "undefined" stat cards, a doubled </body></html>,
   and 12 guides that no page linked to.

   - no literal "undefined" in visible text
   - exactly one </body> and one </html>
   - every relative link OUTSIDE <footer> resolves to a published file
     (footers are being rebuilt site-wide separately; they are excluded on
     purpose, not because they are fine)
   - every free guide (goethe/, grammar/, german-certificate-*, cost page)
     is linked from at least one other indexable page, and the Goethe hub
     links every published goethe/ guide */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const published = new Set(allow.filter((l) => !l.startsWith('GLOB:')));
for (const f of fs.readdirSync(path.join(ROOT, 'chapter'))) if (/^chapter-.*\.html$/.test(f)) published.add(`chapter/${f}`);

const locs = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const fileOf = (loc) => { const rel = loc.slice(SITE_BASE.length + 1); return rel === '' ? 'index.html' : rel; };
const pages = locs.map((loc) => ({ f: fileOf(loc), html: read(fileOf(loc)) }));

const withoutFooter = (html) => html.replace(/<footer[\s\S]*?<\/footer>/g, '');
const visibleText = (html) => html
  .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, ' ')
  .replace(/<[^>]+>/g, ' ');

/* Resolve a relative href from page f to a repo path, or null if external/anchor. */
function target(f, href) {
  // Skip external/anchor URLs and JS-built hrefs inside inline scripts (template strings, concatenation).
  if (/^(https?:|mailto:|tel:|data:|javascript:|#)/.test(href) || /\$\{|' \+|\+ '/.test(href)) return null;
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return null;
  let t = path.posix.normalize(path.posix.join(path.posix.dirname(f), clean));
  if (t === '.' || t.endsWith('/')) t = `${t === '.' ? '' : t}index.html`;
  return t;
}
const hrefs = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => m[1]);

test('no indexable page renders the word "undefined"', () => {
  for (const { f, html } of pages) {
    assert.doesNotMatch(visibleText(html), /\bundefined\b/, `${f}: visible "undefined"`);
  }
});

test('every indexable page closes </body> and </html> exactly once', () => {
  for (const { f, html } of pages) {
    assert.equal((html.match(/<\/body>/g) || []).length, 1, `${f}: </body> count`);
    assert.equal((html.match(/<\/html>/g) || []).length, 1, `${f}: </html> count`);
  }
});

test('relative links outside the footer resolve to published files', () => {
  const broken = [];
  for (const { f, html } of pages) {
    for (const h of hrefs(withoutFooter(html))) {
      const t = target(f, h);
      if (t && !published.has(t)) broken.push(`${f} → ${h}`);
    }
  }
  assert.deepEqual(broken, [], `broken links:\n${broken.join('\n')}`);
});

const isGuide = (f) => /^(goethe|grammar)\//.test(f) || /^german-certificate-/.test(f) || f === 'german-course-cost-india.html';

test('every free guide is linked from another indexable page', () => {
  const inbound = new Map();
  for (const { f, html } of pages) {
    for (const h of hrefs(withoutFooter(html))) {
      const t = target(f, h);
      if (t && t !== f) inbound.set(t, (inbound.get(t) || 0) + 1);
    }
  }
  const orphans = pages.map((p) => p.f).filter(isGuide).filter((g) => !inbound.get(g));
  assert.deepEqual(orphans, [], `orphaned guides: ${orphans.join(', ')}`);
});

test('the Goethe hub links every published Goethe guide', () => {
  const hub = new Set(hrefs(read('goethe-exam.html')).map((h) => target('goethe-exam.html', h)));
  const missing = pages.map((p) => p.f).filter((f) => f.startsWith('goethe/') && !hub.has(f));
  assert.deepEqual(missing, [], `goethe-exam.html does not link: ${missing.join(', ')}`);
});
