/* Viseme timeline for pre-recorded prompts (pure; tested in Node).

   Built once per audio asset from audio-driven viseme detection (HeadAudio prototype classifier, run offline
   on the decoded clip — no transcript is needed or published). Sampled every frame at the <audio> element's
   own currentTime, so the mouth follows the real playback position (late starts, seeks, pauses). */

export const VISEMES = Object.freeze(['aa', 'E', 'I', 'O', 'U', 'PP', 'SS', 'TH', 'DD', 'FF', 'kk', 'nn', 'RR', 'CH', 'sil']);
export const SIL = 14;
// relative mouth openness per viseme (the classifier's own max values are tuned for English; slightly damped)
const PEAK = [0.9, 0.7, 0.6, 0.75, 0.65, 0.9, 0.55, 0.5, 0.55, 0.6, 0.55, 0.55, 0.5, 0.6, 0];

/** Merge per-frame viseme events [{viseme, t (s), d (s)}] into runs: [{v, a (ms), b (ms)}], dropping silence.
    Runs shorter than minMs are absorbed by their neighbour (flicker suppression). */
export function buildTimeline(events, { minMs = 40 } = {}) {
  const runs = [];
  for (const e of events) {
    if (!Number.isInteger(e.viseme) || e.viseme === SIL) continue;
    const a = Math.round(e.t * 1000), b = Math.round((e.t + e.d) * 1000);
    const last = runs[runs.length - 1];
    if (last && last.v === e.viseme && a - last.b <= 20) last.b = Math.max(last.b, b);
    else runs.push({ v: e.viseme, a, b });
  }
  const out = [];
  for (const r of runs) {
    const prev = out[out.length - 1];
    if (r.b - r.a < minMs && prev && r.a - prev.b <= 20) { prev.b = r.b; continue; }
    out.push({ ...r });
  }
  return out;
}

/** Blend-shape values at time ms: attack/decay ramps (rampMs) around each run; at most two visemes overlap. */
export function sampleTimeline(runs, ms, { rampMs = 60, lo = 0, hi = runs.length } = {}) {
  const values = {};
  // binary search the first run that may still affect ms
  while (lo < hi) { const mid = (lo + hi) >> 1; if (runs[mid].b + rampMs < ms) lo = mid + 1; else hi = mid; }
  for (let i = lo; i < runs.length && runs[i].a - rampMs <= ms; i++) {
    const r = runs[i];
    let w;
    if (ms < r.a) w = 1 - (r.a - ms) / rampMs;
    else if (ms > r.b) w = 1 - (ms - r.b) / rampMs;
    else w = 1;
    if (w <= 0) continue;
    const key = 'viseme_' + VISEMES[r.v];
    const val = PEAK[r.v] * ease(w);
    if (!(key in values) || values[key] < val) values[key] = val;
  }
  return values;
}
const ease = (x) => x * x * (3 - 2 * x);

/** Fallback when the classifier is unavailable: jaw-only timeline from RMS energy (frames of frameMs). */
export function energyTimeline(samples, sampleRate, { frameMs = 20, floorDb = -45 } = {}) {
  const n = Math.max(1, Math.round((sampleRate * frameMs) / 1000));
  const runs = [];
  for (let i = 0; i + n <= samples.length; i += n) {
    let s = 0; for (let j = i; j < i + n; j++) s += samples[j] * samples[j];
    const db = 10 * Math.log10(s / n + 1e-12);
    if (db < floorDb) continue;
    const a = Math.round((i / sampleRate) * 1000), b = a + frameMs;
    const v = db > floorDb + 18 ? 0 : 1;   // loud → open (aa), quieter → mid (E)
    const last = runs[runs.length - 1];
    if (last && last.v === v && a - last.b <= 1) last.b = b; else runs.push({ v, a, b });
  }
  return runs;
}

export const ALL_KEYS = VISEMES.slice(0, SIL).map((v) => 'viseme_' + v);
