/* Live Classes (live-classes.html) — fast checks without a browser.
   Guards the two things that must not regress silently:
   1. the page stays an unlisted preview until real content and policies
      exist (noindex; not in the Pages allowlist, sitemap or any other
      page's links), and
   2. draft data is off by default and placeholder text only ever lives
      in entries marked draft.
   The interactive behaviour is covered by scripts/live-classes-browser.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const PAGE = 'live-classes.html';
const FILES = [PAGE, 'kw-live.js', 'live-classes-data.js'];
const html = read(PAGE);

function loadData() {
  const ctx = { window: {} };
  vm.runInNewContext(read('live-classes-data.js'), ctx, { filename: 'live-classes-data.js' });
  return ctx.window.KWLive;
}

test('LIVE: both scripts parse', () => {
  for (const f of ['kw-live.js', 'live-classes-data.js']) assert.doesNotThrow(() => new vm.Script(read(f), { filename: f }), f);
});

test('LIVE: draft data is off by default', () => {
  assert.equal(loadData().showDrafts, false, 'showDrafts must stay false in the committed data file');
});

test('LIVE: kw-live.js renders drafts only on a local host', () => {
  const js = read('kw-live.js');
  assert.match(js, /var SHOW_DRAFTS = D\.showDrafts === true && \/\^\(localhost\|127\\\.0\\\.0\\\.1\|\\\[::1\\\]\|\)\$\/\.test\(location\.hostname\);/);
  assert.equal(/D\.showDrafts\s*(\|\||\?)/.test(js), false, 'every draft decision goes through SHOW_DRAFTS');
});

test('LIVE: placeholder text ([…]) appears only in entries marked draft', () => {
  const D = loadData();
  const groups = { teachers: D.teachers, courses: D.courses, testimonials: D.testimonials };
  for (const [name, list] of Object.entries(groups)) {
    for (const x of list) {
      if (x.draft) continue;
      assert.equal(/\[[^\]]+\]/.test(JSON.stringify(x)), false, `${name} ${x.id || x.name}: published entry still has [placeholder] text`);
    }
  }
});

test('LIVE: the page stays unpublished (noindex; not allowlisted, in the sitemap or linked from other pages)', () => {
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.equal(/<link rel="canonical"/.test(html), false, 'no canonical link until the page is published');
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of FILES) assert.equal(allow.includes(f), false, `${f} must not be in .github/pages-allowlist.txt yet`);
  assert.equal(read('sitemap.xml').includes('live-classes'), false, 'sitemap.xml must not list the page yet');
  const linking = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html') && f !== PAGE && read(f).includes('live-classes.html'));
  assert.deepEqual(linking, [], 'no other page may link to live-classes.html yet');
});

test('LIVE: every local link, script and stylesheet on the page exists', () => {
  const refs = [...html.matchAll(/(?:href|src)="([^"#:?]+)"/g)].map((m) => m[1]).filter((r) => !r.startsWith('//'));
  assert.ok(refs.length > 20, 'found the page references');
  const missing = [...new Set(refs)].filter((r) => !fs.existsSync(path.join(ROOT, r)));
  assert.deepEqual(missing, []);
});

test('LIVE: the consultation form only hands off to email (no form action, no fetch, no checkout)', () => {
  const js = read('kw-live.js');
  assert.equal(/<form[^>]*\baction=/.test(html), false);
  assert.equal(/\bfetch\(|XMLHttpRequest|sendBeacon|cashfree|checkout/i.test(js), false);
  assert.match(js, /window\.location\.href = 'mailto:' \+ D\.contact\.email/);
});
