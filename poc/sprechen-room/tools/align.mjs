/* Approximate word timings for a known German script and a measured audio clip.
   No paid service: the speech segments come from ffmpeg silencedetect, the words are spread over
   the voiced time by syllable weight, and no word straddles a pause. Good enough for viseme
   lip-sync of pre-recorded prompts; production would use TTS word marks or forced alignment. */

const VOWELS = /[aeiouyäöü]+/gi;

export function tokenize(script) {
  return script.replace(/[„“”"«»]/g, '').split(/\s+/).map((w) => w.trim()).filter((w) => /[\p{L}\p{N}]/u.test(w));
}

export function syllables(word) {
  const core = word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  if (/^\d+$/.test(core)) return Math.max(2, core.length * 2);
  const groups = core.match(VOWELS);
  return Math.max(1, groups ? groups.length : 1);
}

/** speech: [[startMs, endMs], ...] voiced segments in order. Returns { words, wtimes, wdurations }. */
export function align(script, speech) {
  const words = tokenize(script);
  if (!words.length || !speech.length) return { words: [], wtimes: [], wdurations: [] };
  const weights = words.map((w) => syllables(w) + (/[.,!?;:]$/.test(w) ? 0.4 : 0));
  const total = weights.reduce((a, b) => a + b, 0);
  const voiced = speech.reduce((a, [s, e]) => a + (e - s), 0);
  // map a voiced-time offset onto the real timeline
  const at = (v) => {
    let left = v;
    for (const [s, e] of speech) { if (left <= e - s) return s + left; left -= e - s; }
    return speech[speech.length - 1][1];
  };
  const segOf = (t) => speech.findIndex(([s, e]) => t >= s - 1 && t <= e + 1);
  const out = { words: [], wtimes: [], wdurations: [] };
  let acc = 0;
  for (let i = 0; i < words.length; i++) {
    let start = at((acc / total) * voiced);
    acc += weights[i];
    let end = at((acc / total) * voiced);
    // a word must not cross a pause: keep it inside the segment holding most of it
    const a = segOf(start), b = segOf(end);
    if (a !== -1 && b !== -1 && a !== b) {
      const [, ea] = speech[a]; const [sb] = speech[b];
      if (ea - start >= end - sb) end = ea; else start = sb;
    }
    out.words.push(words[i]);
    const s0 = Math.round(start), last = speech[speech.length - 1][1];
    out.wtimes.push(s0);
    out.wdurations.push(Math.max(1, Math.min(Math.max(60, Math.round(end - start)), Math.floor(last - s0))));
  }
  return out;
}

/** Parse ffmpeg silencedetect stderr into voiced segments within [0, durationMs]. */
export function speechFromSilences(stderr, durationMs, minMs = 80) {
  const sil = [];
  let open = null;
  for (const line of stderr.split('\n')) {
    const s = line.match(/silence_start: ([\d.]+)/); if (s) open = parseFloat(s[1]) * 1000;
    const e = line.match(/silence_end: ([\d.]+)/); if (e && open !== null) { sil.push([open, parseFloat(e[1]) * 1000]); open = null; }
  }
  if (open !== null) sil.push([open, durationMs]);
  const speech = []; let cur = 0;
  for (const [s, e] of sil) { if (s - cur >= minMs) speech.push([cur, s]); cur = e; }
  if (durationMs - cur >= minMs) speech.push([cur, durationMs]);
  return speech;
}
