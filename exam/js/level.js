/* Sprechen recording monitor (SPEAKING §4 "Live level meter; silence detection (> 15 s silence in Teil 2 → a gentle
   visual hint, no audio interruption)"). Pure logic here; main.js feeds analyser levels and paints the result. */
export const SILENCE_LEVEL = 0.02;     // peak amplitude (0–1) below which a frame counts as silent
export const SILENCE_MS = 15_000;
export const SILENCE_HINT = 'Wir hören gerade nichts. Sprechen Sie weiter oder prüfen Sie Ihr Mikrofon – die Aufnahme läuft.';

/* peak amplitude of one time-domain frame (Uint8Array, 128 = zero) */
export function framePeak(buf) {
  let peak = 0;
  for (const v of buf) peak = Math.max(peak, Math.abs(v - 128) / 128);
  return peak;
}

/* meter width in percent: a square-root curve so normal speech fills a visible part of the bar */
export const levelPercent = (peak) => Math.round(Math.min(1, Math.sqrt(Math.max(0, peak) / 0.5)) * 100);

/* silent = continuously below SILENCE_LEVEL for SILENCE_MS; any sound resets it */
export function createSilenceWatch({ level = SILENCE_LEVEL, ms = SILENCE_MS } = {}) {
  let quietSince = null;
  return {
    update(peak, now) {
      if (peak >= level) { quietSince = null; return false; }
      if (quietSince == null) quietSince = now;
      return now - quietSince >= ms;
    },
    reset() { quietSince = null; }
  };
}
