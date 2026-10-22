import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { framePeak, levelPercent, createSilenceWatch, SILENCE_LEVEL, SILENCE_MS, SILENCE_HINT } from '../js/level.js';

test('LEVEL (SPEAKING §4): frame peak, meter percent, silence after 15 s of continuous quiet, reset by any sound', () => {
  assert.equal(framePeak(new Uint8Array([128, 128, 128])), 0);
  assert.equal(framePeak(new Uint8Array([128, 192, 64])), 0.5);
  assert.equal(levelPercent(0), 0); assert.equal(levelPercent(0.5), 100); assert.equal(levelPercent(2), 100); assert.equal(levelPercent(-1), 0);
  assert.ok(levelPercent(0.05) > 25 && levelPercent(0.05) < 40, 'quiet speech is still visible');
  assert.equal(SILENCE_MS, 15000); assert.equal(SILENCE_LEVEL, 0.02);
  const w = createSilenceWatch();
  assert.equal(w.update(0.001, 0), false);
  assert.equal(w.update(0.001, 14_999), false);
  assert.equal(w.update(0.001, 15_000), true, 'silent after 15 s');
  assert.equal(w.update(0.3, 15_100), false, 'a sound clears it');
  assert.equal(w.update(0.001, 15_200), false); assert.equal(w.update(0.001, 30_199), false); assert.equal(w.update(0.001, 30_200), true);
  w.reset(); assert.equal(w.update(0.001, 40_000), false);
  assert.match(SILENCE_HINT, /Aufnahme läuft/);
});

test('LEVEL wiring: meter in the sticky bar is visual only (aria-hidden), the hint is a polite status; Teil 2 only for silence; stopped with the module; reduced motion respected', () => {
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /<div class="kx-level" id="kx-level" hidden aria-hidden="true">/);
  assert.match(main, /<p class="kx-silence" id="kx-silence" role="status" aria-live="polite"><\/p>/);
  assert.match(main, /recording: \(on, \{ part, stream \} = \{\}\) => \(on \? startLevelMeter\(stream, part === 2\) : stopLevelMeter\(\)\)/);
  assert.match(main, /finally \{ stopLevelMeter\(\); releaseMic\(\); \}/);
  const meter = main.slice(main.indexOf('function startLevelMeter'), main.indexOf('function stopLevelMeter'));
  assert.equal(/MediaRecorder|\.stop\(\)|getUserMedia/.test(meter), false, 'the meter never touches the recording or asks for the mic');
  const css = fs.readFileSync(new URL('../exam.css', import.meta.url), 'utf8');
  assert.match(css, /@media \(prefers-reduced-motion: reduce\) { \.kx-level-fill { transition: none; } }/);
});
