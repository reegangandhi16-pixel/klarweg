// The SCOPE guards may wave through a favicon-only edit to refund-policy.html,
// and nothing else: any wording change to the legal page must still count.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { faviconOnlyChange, faviconOnlyFileChange } from './favicon-only-diff.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OLD_ICON = '<link rel="icon" type="image/svg+xml" href="favicon.svg">';
const NEW_ICON = '<link rel="icon" href="favicon.ico" sizes="48x48"><link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">';

/* the refund policy as it stands, rewound to the old single SVG icon */
const current = fs.readFileSync(path.join(ROOT, 'refund-policy.html'), 'utf8');
const legal = current.includes(NEW_ICON) ? current.replace(NEW_ICON, OLD_ICON) : current;
const swapped = legal.replace(OLD_ICON, NEW_ICON);

test('favicon-only: swapping the icon <link> tags on refund-policy.html is allowed', () => {
  assert.ok(legal.includes(OLD_ICON) && swapped !== legal);
  assert.equal(faviconOnlyChange(legal, swapped), true);
});

test('favicon-only: any substantive refund-policy.html change still counts', () => {
  const reworded = (s) => s.replace(/<\/main>|<\/body>/, '<p>Refunds within 30 days.</p>$&');
  assert.notEqual(reworded(legal), legal, 'fixture edit applied');
  assert.equal(faviconOnlyChange(legal, reworded(legal)), false, 'wording only');
  assert.equal(faviconOnlyChange(legal, reworded(swapped)), false, 'wording hidden behind a favicon swap');
  assert.equal(faviconOnlyChange(legal, swapped.replace(/Last updated: [^<]+/, 'Last updated: 1 January 2030')), false, 'date');
  assert.equal(faviconOnlyChange(legal, legal), false, 'no change is not a favicon change');
});

test('favicon-only: icon-looking tags that are not favicon links still count', () => {
  for (const tag of [
    '<link rel="icon" href="evil.html">',
    '<link rel="icon" href="favicon.ico" onload="alert(1)">',
    '<link rel="icon" href="https://example.com/favicon.ico">',
    '<link rel="stylesheet" href="favicon.css">',
  ]) assert.equal(faviconOnlyChange(legal, swapped.replace(NEW_ICON, NEW_ICON + tag)), false, tag);
});

test('favicon-only: the git-backed check compares the base commit with the working tree', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-favicon-'));
  const git = (...a) => execFileSync('git', a, { cwd: dir, encoding: 'utf8' }).trim();
  try {
    git('init', '-q');
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), legal);
    git('add', '.');
    git('-c', 'user.email=t@t', '-c', 'user.name=t', 'commit', '-qm', 'base');
    const base = git('rev-parse', 'HEAD');
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), swapped);
    assert.equal(faviconOnlyFileChange('refund-policy.html', base, dir), true);
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), swapped.replace(/<\/body>/, '<p>new clause</p></body>'));
    assert.equal(faviconOnlyFileChange('refund-policy.html', base, dir), false);
    fs.rmSync(path.join(dir, 'refund-policy.html'));
    assert.equal(faviconOnlyFileChange('refund-policy.html', base, dir), false, 'deleted');
    assert.equal(faviconOnlyFileChange('new-page.html', base, dir), false, 'not in base');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('favicon-only: retiring the coral-dot share image for the brand logo is allowed, nothing else', () => {
  const old = legal.replace(/site-icon-512\.png/g, 'icon-512.png');
  assert.ok(old.includes('content="https://klarweg.in/icon-512.png"'), 'fixture has the old share image');
  assert.equal(faviconOnlyChange(old, legal), true, 'og/twitter image swap');
  assert.equal(faviconOnlyChange(old, legal.replace('site-icon-512.png', 'evil.png')), false, 'other image');
  assert.equal(faviconOnlyChange(old, legal.replace(/Last updated: [^<]+/, 'Last updated: 1 January 2030')), false, 'date hidden behind the swap');
});
