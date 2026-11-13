/* Google Search Console reported 40 false 404 paths like /ˈapfəl/ after
   discovering slash-delimited IPA strings in the homepage inline word data.
   Keep the slashes visually unchanged at runtime, but spell them as \u002F
   in source so the HTML does not advertise URL-shaped IPA literals. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

test('homepage IPA values use source-safe escaped slashes', () => {
  assert.doesNotMatch(
    html,
    /\bipa\s*:\s*['"]\/[^'"\r\n]+\/['"]/u,
    'raw /IPA/ in inline JS can be misinterpreted as a URL by crawlers',
  );
  const values = [...html.matchAll(/\bipa\s*:\s*(['"])(\\u002F[^'"\r\n]+\\u002F)\1/g)];
  assert.ok(values.length >= 50, 'all homepage IPA entries remain present');
  const apfel = values.find((m) => m[2].includes('ˈapfəl'));
  assert.ok(apfel, 'known pronunciation survives encoding');
  assert.equal(JSON.parse('"' + apfel[2] + '"'), '/ˈapfəl/', 'runtime IPA remains unchanged');
});
