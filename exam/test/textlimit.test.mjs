/* Schreiben length limit helpers (exam/js/textlimit.js) and the editor markup. Browser behaviour (typing, paste, drop,
   counter, autosave) is covered by KX_E2E_ONLY=text-limit in exam-worker/test/browser-e2e.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { MAX_TEXT_CHARS, WARN_TEXT_CHARS, formatChars, limitState, projectedLength, counterText, counterNote, PASTE_TOO_LONG, LIMIT_REACHED, compositionTruncated, emptyInsertAtLimit } from '../js/textlimit.js';
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

test('F2 compositionTruncated: only a commit the limit actually cut (cases measured in Chrome)', () => {
  // IME at 19 998: "漢字です。" (5) committed, Chrome kept 2 → cut
  assert.equal(compositionTruncated(19_998, '漢字です。', 20_000), true);
  // at the limit: one character committed, nothing landed
  assert.equal(compositionTruncated(20_000, '愛', 20_000), true);
  // macOS dead key Option+u → ü at 20 000: refused; at 19 999: fits exactly
  assert.equal(compositionTruncated(20_000, 'ü', 20_000), true);
  assert.equal(compositionTruncated(19_999, 'ü', 20_000), false);
  // over-long text (held/restored): the composed character was dropped
  assert.equal(compositionTruncated(20_001, '蚊', 20_001), true);
  // ordinary compositions far from the limit, and a cancelled one (Escape: empty data)
  assert.equal(compositionTruncated(6, '仮名', 8), false);
  assert.equal(compositionTruncated(5, 'ü', 6), false);
  assert.equal(compositionTruncated(20_000, '', 20_000), false);
  assert.equal(compositionTruncated(19_999, null, 19_999), false);
  // replacing a selection: base excludes the replaced text
  assert.equal(compositionTruncated(19_990, 'abcdefghij', 20_000), false);
});

test('F3 emptyInsertAtLimit: Safari\'s trimmed key at the limit, and no false warnings for ordinary input', () => {
  // measured in Safari 26.5: at/over the limit a refused key arrives as insertText with data ''
  assert.equal(emptyInsertAtLimit('insertText', '', 20_000), true);
  assert.equal(emptyInsertAtLimit('insertText', '', 20_001), true);
  assert.equal(emptyInsertAtLimit('insertText', '', 19_999), true, 'an emoji (2 code units) one short of the limit');
  assert.equal(emptyInsertAtLimit('insertReplacementText', '', 20_000), true);
  // ordinary input never warns
  assert.equal(emptyInsertAtLimit('insertText', 'a', 20_000), false, 'data present: the regular guard decides');
  assert.equal(emptyInsertAtLimit('insertText', '', 19_998), false, 'room left: not the limit');
  assert.equal(emptyInsertAtLimit('insertText', '', 100), false);
  assert.equal(emptyInsertAtLimit('insertText', null, 20_000), false, 'null is not a trimmed key');
  assert.equal(emptyInsertAtLimit('insertLineBreak', null, 20_000), false, 'Enter is handled by the regular guard');
  assert.equal(emptyInsertAtLimit('insertCompositionText', '', 20_000), false, 'compositions: F2');
  assert.equal(emptyInsertAtLimit('deleteContentBackward', '', 20_000), false);
  assert.equal(emptyInsertAtLimit('insertText', '', 20_000, 5), false, 'a selection being replaced makes room');
});

test('F1 wiring: half-composed text is never queued for autosave; autosave.js is not involved', () => {
  const main = read('exam/js/main.js');
  assert.match(main, /updateCharCounter\(el\);\n[^\n]*\n[^\n]*\n\s*if \(e\.isComposing\) return;\n\s*saveText\(el\);/, 'counter first, then no save while composing');
  assert.match(main, /addEventListener\('compositionend'[\s\S]{0,600}saveText\(t\)/, 'the committed value is saved on compositionend');
  assert.doesNotMatch(read('exam/js/autosave.js'), /compos|textlimit/i, 'autosave.js (PR #240) untouched by the limit work');
});
