import test from 'node:test';
import assert from 'node:assert/strict';
import { align, tokenize, syllables, speechFromSilences } from '../tools/align.mjs';

test('tokenize drops quotes and punctuation-only tokens', () => {
  assert.deepEqual(tokenize('Mein Thema: „Sport im Verein?“ – ja!'), ['Mein', 'Thema:', 'Sport', 'im', 'Verein?', 'ja!']);
});

test('syllables counts German vowel groups', () => {
  assert.equal(syllables('Urlaub'), 2); assert.equal(syllables('am'), 1); assert.equal(syllables('Heimatland'), 3);
});

test('align: monotonic, inside the clip, never across a pause', () => {
  const speech = [[500, 1500], [2000, 4000]];
  const r = align('Vielen Dank. Mit wem verbringst du deinen Urlaub?', speech);
  assert.equal(r.words.length, 8);
  for (let i = 0; i < r.words.length; i++) {
    const s = r.wtimes[i], e = s + r.wdurations[i];
    assert.ok(s >= 500 && e <= 4000, r.words[i]);
    assert.ok(!(s < 1500 && e > 2000), 'crosses pause: ' + r.words[i]);
    if (i) assert.ok(s >= r.wtimes[i - 1]);
  }
});

test('speechFromSilences inverts silencedetect output', () => {
  const err = 'silence_start: 0\nsilence_end: 0.5 | silence_duration: 0.5\nsilence_start: 1.5\nsilence_end: 2 | x\n';
  assert.deepEqual(speechFromSilences(err, 3000), [[500, 1500], [2000, 3000]]);
});
