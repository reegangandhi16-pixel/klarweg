/* Offline viseme analysis of a prompt clip (browser).

   The clip bytes are the ones the Sprechen audio module already fetched (a copy; playback is untouched).
   Decoding uses an OfflineAudioContext (no output, no user gesture needed). The HeadAudio prototype classifier
   (MIT, vendored) runs on the samples in small slices with yields, so the page stays responsive.
   Result: { runs, method } — method 'classifier' | 'energy' (jaw-only fallback) | 'none' (clip not decodable). */
import { buildTimeline, energyTimeline } from './visemes.js';

const VENDOR = '/exam-room/vendor/headaudio/';
let modelPromise = null;

async function loadClassifier() {
  if (!modelPromise) {
    modelPromise = (async () => {
      const [{ Processor }, { Training }] = await Promise.all([
        import(VENDOR + 'modules/processor.mjs'), import(VENDOR + 'modules/training.mjs')]);
      const { model } = await new Training().loadModel(VENDOR + 'dist/model-en-mixed.bin');
      return { Processor, model };
    })();
    modelPromise.catch(() => { modelPromise = null; });
  }
  return modelPromise;
}

async function decode(bytes) {
  const Ctx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  const ctx = new Ctx(1, 1, 48000);
  const buf = await new Promise((resolve, reject) => {
    const p = ctx.decodeAudioData(bytes.slice(0), resolve, reject);   // callback form for older Safari
    if (p && p.then) p.then(resolve, reject);
  });
  // mono mix
  const ch = buf.numberOfChannels, n = buf.length, out = new Float32Array(n);
  for (let c = 0; c < ch; c++) { const d = buf.getChannelData(c); for (let i = 0; i < n; i++) out[i] += d[i] / ch; }
  return { samples: out, sampleRate: buf.sampleRate };
}

const yieldNow = () => new Promise((r) => setTimeout(r, 0));

export async function analyseClip(bytes, { sliceMs = 12 } = {}) {
  let pcm;
  try { pcm = await decode(bytes); } catch { return { runs: [], method: 'none' }; }
  try {
    const { Processor, model } = await loadClassifier();
    const events = [];
    const p = new Processor({ sampleRate: pcm.sampleRate }, { port: { postMessage: (m) => { if (m.event === 'viseme') events.push(m); } } });
    p._onmessage({ data: { event: 'model', model } });
    const { samples } = pcm;
    let t = performance.now();
    for (let i = 0; i < samples.length; i += 128) {
      p.process(samples.subarray(i, Math.min(i + 128, samples.length)));
      if (performance.now() - t > sliceMs) { await yieldNow(); t = performance.now(); }
    }
    const runs = buildTimeline(events);
    if (runs.length) return { runs, method: 'classifier' };
  } catch { /* fall through to the energy fallback */ }
  return { runs: energyTimeline(pcm.samples, pcm.sampleRate), method: 'energy' };
}
