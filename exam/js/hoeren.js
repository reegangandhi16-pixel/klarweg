/* Hören schedule. The phase plan is computed at build time and shipped in
   the keyless package; the server fixes plan_started_at (readiness) and any
   recovery shift. The client derives "where are we" from server time only,
   so a refresh or reconnect lands in the same phase with the same remaining
   time. Playback has no pause, seek or speed control. */
export function phaseAt(plan, planStartedAt, serverNow, shiftMs = 0) {
  if (planStartedAt == null) return { index: -1, phase: null, remaining_ms: null, state: 'readiness' };
  let t = serverNow - planStartedAt;
  if (t < 0) return { index: -1, phase: null, remaining_ms: -t, state: 'readiness' };
  // a recovery replay pauses the schedule for its length right where it happened: modelled as extra time on the clock
  t = Math.max(0, t - shiftMs);
  let start = 0;
  for (let i = 0; i < plan.phases.length; i++) {
    const p = plan.phases[i];
    if (t < start + p.ms) return { index: i, phase: p, elapsed_ms: t - start, remaining_ms: start + p.ms - t, state: 'running' };
    start += p.ms;
  }
  return { index: plan.phases.length, phase: null, remaining_ms: 0, state: 'finished' };
}

/* Visible phase label (German UI copy, calm and factual). */
export function phaseLabel(p) {
  if (!p) return '';
  switch (p.kind) {
    case 'preread': return 'Lesen Sie die Aufgaben.';
    case 'play': return p.purpose === 'instruction' ? 'Sie hören die Anweisungen.' : p.plays_allowed > 1 ? `Sie hören den Text (${p.play_no}. von ${p.plays_allowed} Mal).` : 'Sie hören den Text einmal.';
    case 'gap': return 'Gleich hören Sie den Text noch einmal.';
    case 'answer': return 'Markieren Sie Ihre Lösungen.';
    case 'review': return 'Überprüfen Sie Ihre Antworten.';
    default: return '';
  }
}

export const clampVolume = (v) => (Number.isFinite(Number(v)) ? Math.min(1, Math.max(0, Number(v))) : 1);
export const VOLUME_KEY = 'kx-volume';   // a per-device convenience, like a system volume; not exam data
export function volumeControl(percent) {
  const p = Math.round(clampVolume(percent / 100) * 100);
  return `<div class="kx-volume"><label for="kx-volume">Lautstärke</label><input type="range" id="kx-volume" data-volume min="0" max="100" step="5" value="${p}" aria-valuetext="${p} %"><span class="kx-volume-val" aria-hidden="true">${p} %</span></div>`;
}

/* Browser-only controlled player: decodes bytes once, plays a phase exactly
   once from the start, no UI controls. Returns a promise for completion. */
export class ControlledPlayer {
  constructor(ctx, volume = 1) {
    this.ctx = ctx; this.buffers = new Map(); this.current = null;
    /* AUDIO-SPEC A4: a master gain is the learner's only control (no pause, seek or speed) */
    this.gain = ctx.createGain(); this.gain.gain.value = clampVolume(volume); this.gain.connect(ctx.destination);
  }
  setVolume(v) { this.gain.gain.value = clampVolume(v); }
  async preload(assetId, bytes) { this.buffers.set(assetId, await this.ctx.decodeAudioData(bytes.slice(0))); }
  isReady(ids) { return ids.every((id) => this.buffers.has(id)); }
  play(assetId, offsetMs = 0) {
    const buf = this.buffers.get(assetId);
    if (!buf) return Promise.reject(new Error('not_loaded'));
    this.stop();
    const src = this.ctx.createBufferSource();
    src.buffer = buf; src.playbackRate.value = 1;
    src.connect(this.gain);
    this.current = src;
    return new Promise((resolve) => { src.onended = () => { if (this.current === src) this.current = null; resolve(); }; src.start(0, Math.max(0, offsetMs) / 1000); });
  }
  stop() { if (this.current) { try { this.current.onended = null; this.current.stop(); } catch {} this.current = null; } }
}
