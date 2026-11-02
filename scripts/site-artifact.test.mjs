/* Public site artifact (scripts/site-artifact.sh + site-leak-check.mjs): the
   real artifact passes, and every kind of private content planted into it —
   under any name — fails the content check. Also pins the deploy workflow to
   the shared script and the private-source → public-site publish step. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkArtifact } from './site-leak-check.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-site-'));
const ART = path.join(tmp, 'art');
execFileSync('bash', [path.join(ROOT, 'scripts/site-artifact.sh'), ART], { cwd: ROOT, stdio: 'ignore' });
test.after(() => fs.rmSync(tmp, { recursive: true, force: true }));

function planted(rel, content) {
  const d = path.join(tmp, 'p' + Math.random().toString(36).slice(2));
  fs.cpSync(ART, d, { recursive: true });
  fs.mkdirSync(path.dirname(path.join(d, rel)), { recursive: true });
  fs.writeFileSync(path.join(d, rel), content);
  return checkArtifact(d).problems;
}
const read = (f) => fs.readFileSync(path.join(ROOT, f));
const paidData = fs.readdirSync(path.join(ROOT, 'chapter')).find((f) => /^chapter-b1-10-.*-data\.js$/.test(f));

test('the real artifact passes and holds the public site', () => {
  const r = checkArtifact(ART);
  assert.deepEqual(r.problems, []);
  for (const f of ['index.html', 'chapter/chapter-app.js', 'chapter/global-lexicon-public.js', 'public/audio/manifest-public.json']) assert.ok(fs.existsSync(path.join(ART, f)), f);
  for (const f of ['chapter/global-lexicon.js', 'public/audio/manifest.json', 'chapter/' + paidData]) assert.ok(!fs.existsSync(path.join(ART, f)), f);
});

test('private content is caught under any name', () => {
  const cases = [
    ['assets/x.js', read('chapter/' + paidData)],                         // paid chapter data, renamed
    ['a/dict.js', read('chapter/global-lexicon.js')],                     // full dictionary, renamed
    ['a/story.js', read('chapter/story-lexicon.js')],
    ['public/audio/m.json', read('public/audio/manifest.json')],          // full manifest (paid text)
    ['a/sound.mp3', Buffer.from('ID3')],                                  // any audio
    ['a/pack.zip', Buffer.from('PK')],
    ['a/p.js', 'window.KW_CHAPTER_AUDIO = {};'],                          // gated payload markers
    ['a/q.js', 'window.KW_CHAPTER_LEXICON = {};'],
    ['public/audio/kw-reading-exceptions.js', '{"staleTail": "a", "staleTail": "b"}'],
  ];
  for (const [rel, content] of cases) assert.ok(planted(rel, content).length > 0, rel);
});

test('a paid timing sidecar is caught', () => {
  const pub = new Set(fs.readdirSync(path.join(ART, 'audio-timing')));
  const paid = fs.readdirSync(path.join(ROOT, 'audio-timing')).find((f) => !pub.has(f));
  assert.ok(paid);
  assert.ok(planted('audio-timing/' + paid, read('audio-timing/' + paid)).length > 0);
});

test('the deploy workflow builds with the shared script and publishes only the artifact to the public site repo', () => {
  const wf = fs.readFileSync(path.join(ROOT, '.github/workflows/deploy-pages.yml'), 'utf8');
  assert.match(wf, /scripts\/site-artifact\.sh _site/);
  assert.match(wf, /scripts\/site-publish\.sh _site git@github\.com:reegangandhi16-pixel\/klarweg-site\.git/);
  assert.match(wf, /secrets\.SITE_DEPLOY_KEY/);
  assert.ok(!/upload-pages-artifact|deploy-pages@/.test(wf), 'no Pages deployment from the private source repo');
  assert.ok(!/pull_request/.test(wf), 'never runs for pull requests');
  const pub = fs.readFileSync(path.join(ROOT, 'scripts/site-publish.sh'), 'utf8');
  assert.match(pub, /node scripts\/site-leak-check\.mjs "\$TREE"/);
});

test('the artifact script refuses dangerous output directories', () => {
  for (const d of ['/', ROOT, path.dirname(ROOT), path.join(ROOT, 'scripts')]) {
    let code = 0;
    try { execFileSync('bash', [path.join(ROOT, 'scripts/site-artifact.sh'), d], { cwd: ROOT, stdio: 'ignore' }); } catch (e) { code = e.status; }
    assert.equal(code, 2, d);
  }
  assert.ok(fs.existsSync(path.join(ROOT, 'scripts/site-artifact.sh')), 'repo intact');
});
