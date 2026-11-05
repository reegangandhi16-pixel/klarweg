/* Schreiben length limit helpers (exam/js/textlimit.js) and the editor markup. Browser behaviour (typing, paste, drop,
   counter, autosave) is covered by KX_E2E_ONLY=text-limit in exam-worker/test/browser-e2e.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { MAX_TEXT_CHARS, WARN_TEXT_CHARS, formatChars, limitState, projectedLength, counterText, counterNote, PASTE_TOO_LONG, LIMIT_REACHED } from '../js/textlimit.js';
import { charCounter } from '../js/render.js';

const read = (p) => fs.readFileSync(new URL(`../../${p}`, import.meta.url), 'utf8');

test('the client limit is the server limit (exam Worker stays the final authority)', () => {
  const m = read('exam-worker/src/api.js').match(/const MAX_TEXT_CHARS = ([\d_]+);/);
  assert.ok(m, 'MAX_TEXT_CHARS in exam-worker/src/api.js');
  assert.equal(Number(m[1].replace(/_/g, '')), MAX_TEXT_CHARS);
  assert.match(read('exam-worker/src/api.js'), /value\.text\.length > MAX_TEXT_CHARS\) fail\(413, 'text_too_long'/, 'server still refuses over-long texts');
  assert.equal(MAX_TEXT_CHARS, 20_000);
  assert.ok(WARN_TEXT_CHARS < MAX_TEXT_CHARS && WARN_TEXT_CHARS >= MAX_TEXT_CHARS * 0.8);
});

test('formatChars groups thousands with a no-break space', () => {
  assert.equal(formatChars(0), '0');
  assert.equal(formatChars(999), '999');
  assert.equal(formatChars(20_000), '20 000');
  assert.equal(formatChars(1_234_567), '1 234 567');
  assert.equal(formatChars(-5), '0');
});

test('limitState: ok → warn (90 %) → limit → over', () => {
  assert.equal(limitState(0), 'ok');
  assert.equal(limitState(WARN_TEXT_CHARS - 1), 'ok');
  assert.equal(limitState(WARN_TEXT_CHARS), 'warn');
  assert.equal(limitState(MAX_TEXT_CHARS - 1), 'warn');
  assert.equal(limitState(MAX_TEXT_CHARS), 'limit');
  assert.equal(limitState(MAX_TEXT_CHARS + 1), 'over');
});

test('projectedLength replaces the selection; a line break counts 1 (as String.length on the server)', () => {
  assert.equal(projectedLength('abc', 3, 3, 'de'), 5);
  assert.equal(projectedLength('abcdef', 1, 4, 'X'), 4);
  assert.equal(projectedLength('abc', 0, 3, ''), 0);
  assert.equal(projectedLength('ab\ncd', 5, 5, '\n'), 6);
  assert.equal(projectedLength('abc', undefined, undefined, 'x'), 4);
  assert.equal(projectedLength('abc', 10, 20, 'x'), 4, 'out-of-range selection is clamped');
});

test('counter text and notes', () => {
  assert.equal(counterText(0), '0 / 20 000 Zeichen');
  assert.equal(counterText(18_500), '18 500 / 20 000 Zeichen');
  assert.equal(counterNote(100), '');
  assert.equal(counterNote(18_500), 'Noch 1 500 Zeichen.');
  assert.equal(counterNote(20_000), 'Höchstlänge erreicht.');
  assert.equal(counterNote(20_001), '1 Zeichen zu viel – bitte kürzen.');
  assert.match(PASTE_TOO_LONG(25_000), /Nicht eingefügt.*25 000.*20 000/);
  assert.match(LIMIT_REACHED, /20 000 Zeichen/);
});

test('editor markup: maxlength, counter described with the textarea, never a shortened text', () => {
  const html = read('exam/js/render.js');
  assert.match(html, /maxlength="\$\{MAX_TEXT_CHARS\}" aria-describedby="\$\{id\}_wc"/);
  const c = charCounter('i_x', 20_001);
  assert.match(c, /data-cc-for="i_x" data-state="over"/);
  assert.match(c, /20 001 \/ 20 000 Zeichen/);
  assert.match(charCounter('i_x', 5), /data-state="ok"/);
});
