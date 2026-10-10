/* Signal measurements for exam audio (AUDIO-SPEC B5/B7, gate Q11): integrated loudness and true peak after
   ITU-R BS.1770-4 / EBU R128, measured on decoded PCM samples. No external tools and no dependencies.

   - readPcmWav(buf): decodes an integer-PCM WAV (8/16/24/32-bit, any channel count) to Float32 samples in [-1, 1)
     (exact for up to 24-bit; for 32-bit only bits below -144 dBFS are lost). All arithmetic is in double precision.
   - measureSignal({ sampleRate, channels }): K-weighted, gated integrated loudness (LUFS), true peak (dBTP, 4x
     oversampling) and sample peak (dBFS), plus the sample count.
   - checkSignal(m, { role }): compares a measurement with the AUDIO-SPEC B5 values that are explicitly specified
     (see B5_LIMITS) and returns one status per check. Values the specification does not define are reported, never
     gated.

   This module measures the signal it is given. It is evidence about one file, not an approval of recording quality,
   voices, licensing, originality or exam compliance (docs/exam/EXAM-AUDIO-Q11-PLAN.md). */

export class AudioSignalError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}
const fail = (code, msg) => { throw new AudioSignalError(code, msg); };

/* AUDIO-SPEC B5 values that are specified explicitly (OD-14 restates the master format, the delivery codecs and the
   loudness target). Thresholds that B5 does not state (delivery sample rate, bitrate tolerance, the noise-floor and
   silence measurement methods) are deliberately absent. */
export const B5_LIMITS = Object.freeze({
  loudness_lufs: { target: -18, tolerance: 1 },        // integrated, EBU R128 measurement, per segment
  true_peak_max_dbtp: -1.0,
  channels: 1,                                          // mono (master and both delivery codecs)
  master: Object.freeze({ sample_rate: 48000, bits: 24 })
});

/* ---------- WAV (integer PCM) ---------- */
export function readPcmWav(buf) {
  if (!Buffer.isBuffer(buf) || buf.length < 12 || buf.toString('latin1', 0, 4) !== 'RIFF' || buf.toString('latin1', 8, 12) !== 'WAVE') fail('signal_unsupported', 'not a RIFF/WAVE file');
  let off = 12, fmt = null, data = null;
  while (off + 8 <= buf.length) {
    const id = buf.toString('latin1', off, off + 4), size = buf.readUInt32LE(off + 4), body = off + 8;
    if (body + size > buf.length) fail('signal_corrupt', `wav: chunk ${JSON.stringify(id)} exceeds file length`);
    if (id === 'fmt ') {
      if (size < 16) fail('signal_corrupt', 'wav: fmt chunk too short');
      const format = buf.readUInt16LE(body);
      const pcm = format === 1 || (format === 0xfffe && size >= 40 && buf.readUInt16LE(body + 24) === 1);
      if (!pcm) fail('signal_unsupported', `wav: only integer PCM is supported (format ${format})`);
      fmt = { channels: buf.readUInt16LE(body + 2), sampleRate: buf.readUInt32LE(body + 4), blockAlign: buf.readUInt16LE(body + 12), bits: buf.readUInt16LE(body + 14) };
      const { channels, sampleRate, blockAlign, bits } = fmt;
      if (!channels || !sampleRate || ![8, 16, 24, 32].includes(bits) || blockAlign !== channels * bits / 8) fail('signal_corrupt', 'wav: invalid channels, sample rate, bit depth or block align');
    } else if (id === 'data') data = { start: body, size };
    off = body + size + (size % 2);
  }
  if (!fmt) fail('signal_corrupt', 'wav: missing fmt chunk');
  if (!data) fail('signal_corrupt', 'wav: missing data chunk');
  const { channels, sampleRate, blockAlign, bits } = fmt;
  if (data.size % blockAlign) fail('signal_corrupt', 'wav: data size is not a whole number of sample frames');
  const frames = data.size / blockAlign, bytes = bits / 8;
  const out = Array.from({ length: channels }, () => new Float32Array(frames));
  const scale = 2 ** (bits - 1);
  for (let i = 0, p = data.start; i < frames; i++) {
    for (let c = 0; c < channels; c++, p += bytes) {
      const v = bits === 8 ? buf[p] - 128 : bits === 16 ? buf.readInt16LE(p) : bits === 24 ? buf.readIntLE(p, 3) : buf.readInt32LE(p);
      out[c][i] = v / scale;
    }
  }
  return { sampleRate, bits, channels: out };
}

/* ---------- BS.1770-4 K-weighting ---------- */
/* Biquad coefficients for any sample rate, from the analogue prototypes of the BS.1770 pre-filter (high shelf) and
   RLB high-pass (as used by libebur128). At 48 kHz they reproduce the coefficient table in BS.1770-4 Annex 1. */
export function kWeightingCoefficients(fs) {
  if (!(fs > 0)) fail('signal_corrupt', 'invalid sample rate');
  let K = Math.tan(Math.PI * 1681.974450955533 / fs);
  const Vh = 10 ** (3.999843853973347 / 20), Vb = Vh ** 0.4996667741545416, Q1 = 0.7071752369554196;
  let a0 = 1 + K / Q1 + K * K;
  const shelf = { b: [(Vh + Vb * K / Q1 + K * K) / a0, 2 * (K * K - Vh) / a0, (Vh - Vb * K / Q1 + K * K) / a0], a: [1, 2 * (K * K - 1) / a0, (1 - K / Q1 + K * K) / a0] };
  K = Math.tan(Math.PI * 38.13547087602444 / fs);
  const Q2 = 0.5003270373238773;
  a0 = 1 + K / Q2 + K * K;
  const highpass = { b: [1, -2, 1], a: [1, 2 * (K * K - 1) / a0, (1 - K / Q2 + K * K) / a0] };
  return { shelf, highpass };
}

function biquadInPlace(x, { b, a }) {   // direct form I, state in double precision
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (let i = 0; i < x.length; i++) {
    const xi = x[i];
    const v = b[0] * xi + b[1] * x1 + b[2] * x2 - a[1] * y1 - a[2] * y2;
    x2 = x1; x1 = xi; y2 = y1; y1 = v; x[i] = v;
  }
  return x;
}

/* ---------- true peak: 4x oversampling (BS.1770-4 Annex 2) ---------- */
const OVERSAMPLE = 4, HALF_TAPS = 64;   // filter length 2·64 + 1 = 129 taps, centred on an input sample
/* Polyphase interpolation filter: Kaiser-windowed sinc (beta 8), cutoff at the original Nyquist frequency. Phase p
   evaluates the signal p/4 of a sample after an input sample, so phase 0 reproduces the input. */
const PHASES = (() => {
  const n = 2 * HALF_TAPS + 1, beta = 8;
  const i0 = (x) => { let s = 1, t = 1; for (let k = 1; k < 40; k++) { t *= (x / (2 * k)) ** 2; s += t; } return s; };
  const h = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const t = (i - HALF_TAPS) / OVERSAMPLE;
    const sinc = t === 0 ? 1 : Math.sin(Math.PI * t) / (Math.PI * t);
    h[i] = sinc * i0(beta * Math.sqrt(Math.max(0, 1 - ((i - HALF_TAPS) / HALF_TAPS) ** 2))) / i0(beta);
  }
  const phases = [];
  for (let p = 0; p < OVERSAMPLE; p++) {
    const taps = []; for (let i = p; i < n; i += OVERSAMPLE) taps.push(h[i]);
    const sum = taps.reduce((a, b) => a + b, 0);
    phases.push(Float64Array.from(taps, (v) => v / sum));   // unity DC gain per phase
  }
  return phases;
})();
const MAX_PHASE_TAPS = Math.max(...PHASES.map((p) => p.length));

/* Largest |value| of the 4x-interpolated signal. The signal is treated as silent before its first and after its last
   sample (no copy is made: edge outputs use a bounds-checked loop, the interior a plain one). */
function truePeakAbs(x) {
  const n = x.length, T = MAX_PHASE_TAPS;
  let peak = 0;
  for (let i = 0; i < n + T; i++) {
    const interior = i >= T - 1 && i < n;
    for (let p = 0; p < OVERSAMPLE; p++) {
      const h = PHASES[p];
      let acc = 0;
      if (interior) for (let k = 0; k < h.length; k++) acc += h[k] * x[i - k];
      else for (let k = 0; k < h.length; k++) { const j = i - k; if (j >= 0 && j < n) acc += h[k] * x[j]; }
      const v = acc < 0 ? -acc : acc;
      if (v > peak) peak = v;
    }
  }
  return peak;
}

const db = (v) => (v > 0 ? 20 * Math.log10(v) : -Infinity);

/* ---------- measurement ---------- */
/* channels: array of Float64Array/Float32Array (one per channel, equal lengths). Only mono and stereo are measured
   (BS.1770 weights 1.0 for L/R/C); other layouts are rejected rather than guessed. */
export function measureSignal({ sampleRate, channels }) {
  if (!Array.isArray(channels) || !channels.length) fail('signal_corrupt', 'no channels');
  if (channels.length > 2) fail('signal_unsupported', `only mono and stereo are measured (found ${channels.length} channels)`);
  const n = channels[0].length;
  if (channels.some((c) => c.length !== n)) fail('signal_corrupt', 'channels differ in length');
  if (!(sampleRate >= 8000)) fail('signal_corrupt', `invalid sample rate ${sampleRate}`);
  for (const c of channels) for (let i = 0; i < n; i++) if (!Number.isFinite(c[i])) fail('signal_corrupt', 'non-finite sample');

  const { shelf, highpass } = kWeightingCoefficients(sampleRate);
  // 400 ms gating blocks, 75 % overlap (100 ms step); only complete blocks (as libebur128)
  const block = Math.round(0.4 * sampleRate), step = Math.round(0.1 * sampleRate);
  const nBlocks = n >= block ? Math.floor((n - block) / step) + 1 : 0;
  const blocks = new Float64Array(nBlocks);
  for (const c of channels) {
    const w = biquadInPlace(biquadInPlace(Float64Array.from(c), shelf), highpass);   // one K-weighted copy at a time
    for (let j = 0; j < nBlocks; j++) {
      let e = 0;
      for (let i = j * step, end = i + block; i < end; i++) e += w[i] * w[i];
      blocks[j] += e / block;   // channel weight 1.0 (mono, L, R)
    }
  }
  const lufs = (z) => -0.691 + 10 * Math.log10(z);
  let integrated = null, gated = 0;
  if (nBlocks) {
    const abs = Array.from(blocks).filter((z) => z > 0 && lufs(z) > -70);
    if (abs.length) {
      const rel = lufs(abs.reduce((a, b) => a + b, 0) / abs.length) - 10;
      const kept = abs.filter((z) => lufs(z) > rel);
      if (kept.length) { integrated = lufs(kept.reduce((a, b) => a + b, 0) / kept.length); gated = kept.length; }
    }
  }
  let samplePeak = 0;
  for (const c of channels) for (let i = 0; i < n; i++) { const v = Math.abs(c[i]); if (v > samplePeak) samplePeak = v; }
  let tp = samplePeak;
  for (const c of channels) tp = Math.max(tp, truePeakAbs(c));
  const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);
  const tpDb = db(tp);
  return {
    sample_rate: sampleRate, channels: channels.length, samples: n, duration_ms: Math.round((n / sampleRate) * 1000),
    integrated_lufs: integrated === null ? null : r2(integrated),
    gating_blocks: nBlocks, gated_blocks: gated,
    true_peak_dbtp: r2(tpDb), sample_peak_dbfs: r2(db(samplePeak)),
    // unrounded values: the checks compare these, so rounding for display can never turn a fail into a pass
    exact: { integrated_lufs: integrated, true_peak_dbtp: Number.isFinite(tpDb) ? tpDb : null },
    method: { standard: 'ITU-R BS.1770-4 / EBU R128', block_ms: 400, overlap: 0.75, absolute_gate_lufs: -70, relative_gate_lu: -10, true_peak: `${OVERSAMPLE}x oversampling, ${2 * HALF_TAPS + 1}-tap Kaiser-windowed sinc (beta 8)` }
  };
}

/* ---------- checks against AUDIO-SPEC B5 ---------- */
/* B5 values without a defined measurement method: always reported as not measured, and never counted as passing. */
const UNSPECIFIED = Object.freeze(['noise_floor', 'leading_trailing_silence']);

/* role: 'master' (WAV) or 'delivery' (Opus/WebM, AAC-LC/MP4). Returns { checks: {name: {status, ...}}, ok }.
   status: 'pass' | 'fail' | 'not_measured' | 'reported' (a value without a specified threshold). */
export function checkSignal(m, { role, bits = null } = {}) {
  if (role !== 'master' && role !== 'delivery') fail('signal_corrupt', `unknown role ${role}`);
  const L = B5_LIMITS, checks = {};
  const lufsExact = m.exact ? m.exact.integrated_lufs : m.integrated_lufs;
  const tpExact = m.exact ? m.exact.true_peak_dbtp : m.true_peak_dbtp;
  checks.loudness = lufsExact === null
    ? { status: 'not_measured', reason: m.gating_blocks ? 'every block is below the gates (silence)' : 'shorter than one 400 ms gating block', limit: `${L.loudness_lufs.target} ± ${L.loudness_lufs.tolerance} LUFS` }
    : { status: Math.abs(lufsExact - L.loudness_lufs.target) <= L.loudness_lufs.tolerance ? 'pass' : 'fail', value: m.integrated_lufs, limit: `${L.loudness_lufs.target} ± ${L.loudness_lufs.tolerance} LUFS` };
  checks.true_peak = tpExact === null
    ? { status: 'not_measured', reason: 'digital silence', limit: `≤ ${L.true_peak_max_dbtp} dBTP` }
    : { status: tpExact <= L.true_peak_max_dbtp ? 'pass' : 'fail', value: m.true_peak_dbtp, limit: `≤ ${L.true_peak_max_dbtp} dBTP` };
  checks.channels = { status: m.channels === L.channels ? 'pass' : 'fail', value: m.channels, limit: 'mono (1 channel)' };
  if (role === 'master') {
    checks.sample_rate = { status: m.sample_rate === L.master.sample_rate ? 'pass' : 'fail', value: m.sample_rate, limit: `${L.master.sample_rate} Hz (master)` };
    checks.bit_depth = { status: bits === L.master.bits ? 'pass' : 'fail', value: bits, limit: `${L.master.bits}-bit (master)` };
  } else {
    checks.sample_rate = { status: 'reported', value: m.sample_rate, reason: 'AUDIO-SPEC B5 states no delivery sample rate' };
  }
  const specified = Object.keys(checks);
  for (const name of UNSPECIFIED) checks[name] = { status: 'not_measured', reason: 'measurement method not specified (AUDIO-SPEC B5; owner/governance decision)' };
  // ok only if every specified check passed or is report-only: a specified value that could not be measured is not ok
  return { checks, ok: specified.every((k) => checks[k].status === 'pass' || checks[k].status === 'reported') };
}
