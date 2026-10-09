/* Shared helpers for the exam content tools: loading, phase-plan computation
   (computed ONCE at build time and shipped inside the keyless Hören package,
   so the Worker never re-derives timing), and synthetic TEST AUDIO tones. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
export const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

export function loadForm(formDir) {
  const need = ['form.json', 'tasks.json', 'items.json', 'keys.json', 'assets.json'];
  const missing = need.filter((f) => !fs.existsSync(path.join(formDir, f)));
  if (missing.length) return { missing };
  return {
    form: readJson(path.join(formDir, 'form.json')),
    tasks: readJson(path.join(formDir, 'tasks.json')),
    items: readJson(path.join(formDir, 'items.json')),
    keys: readJson(path.join(formDir, 'keys.json')),
    assets: readJson(path.join(formDir, 'assets.json'))
  };
}

export function loadLevelConfig(levelsDir, levelConfigId) {
  const m = /^lc:([a-z0-9]+)@(\d+)$/.exec(levelConfigId || '');
  if (!m) return null;
  const p = path.join(levelsDir, m[1], 'level-config.json');
  if (!fs.existsSync(p)) return null;
  const cfg = readJson(p);
  return cfg.id === levelConfigId ? cfg : null;
}

/* ---------- synthetic TEST AUDIO (16-bit PCM WAV, mono) ---------- */
export function toneWav({ seconds, freq_hz: freq, beep_ms: beepMs = 250 }, sampleRate = 16000) {
  const n = Math.round(seconds * sampleRate);
  const data = Buffer.alloc(n * 2);
  const beep = Math.max(1, Math.round((beepMs / 1000) * sampleRate));
  for (let i = 0; i < n; i++) {
    const on = Math.floor(i / beep) % 2 === 0;                       // audible beep pattern = obviously a test signal
    const fade = Math.min(1, i / 160, (n - i) / 160);
    const v = on ? Math.sin((2 * Math.PI * freq * i) / sampleRate) * 0.3 * fade : 0;
    data.writeInt16LE(Math.round(v * 32767), i * 2);
  }
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(sampleRate, 24); h.writeUInt32LE(sampleRate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(data.length, 40);
  return { bytes: Buffer.concat([h, data]), duration_ms: Math.round((n / sampleRate) * 1000), mime: 'audio/wav' };
}

/* ---------- timing ---------- */
export function effectiveTiming(levelConfig, form) {
  const ov = form.kind === 'synthetic' ? (form.timing_overrides || {}) : {};
  const mod = (name) => levelConfig.modules.find((m) => m.module === name);
  const hoeren = { ...(mod('hoeren')?.phase_template || {}), ...(ov.hoeren || {}) };
  const sp = mod('sprechen')?.timing || {};
  const sprechen = { ...sp, ...(ov.sprechen || {}) };
  return { hoeren, sprechen };
}

/* Hören phase plan: an ordered list of fixed-duration phases. Values are
   PROVISIONAL Klarweg Standardized Exam Behaviour (register OD-43).
   Spoken instructions (AUDIO-SPEC A1/A2): a Hören part placement may name an
   `instruction_asset_id`. Its measured audio is played once, as the part's
   first phase, as a non-recoverable `play` phase. It replaces that part's
   fixed `instruction_seconds` timer. Parts without the field are unchanged. */
export function hoerenPlan(levelConfig, form, tasksById, itemsById, audioDurations) {
  const t = effectiveTiming(levelConfig, form).hoeren;
  const cfg = levelConfig.modules.find((m) => m.module === 'hoeren');
  const placement = form.modules.find((m) => m.module === 'hoeren');
  const phases = [];
  const sec = (s) => Math.round((Number(s) || 0) * 1000);
  const push = (p) => { p.seq = phases.length; phases.push(p); };
  for (const pc of cfg.parts) {
    const pl = placement.parts.find((p) => p.part === pc.part);
    const partItems = (ids) => ids.filter((id) => !itemsById[id]?.is_example);
    if (pl.instruction_asset_id) {
      const dur = audioDurations[pl.instruction_asset_id];
      if (!Number.isFinite(dur)) throw new Error(`no duration for instruction asset ${pl.instruction_asset_id}`);
      push({ kind: 'play', purpose: 'instruction', part: pc.part, asset_id: pl.instruction_asset_id, play_no: 1, plays_allowed: 1, recoverable: false, ms: dur });
    } else if (t.instruction_seconds) push({ kind: 'instruction', part: pc.part, ms: sec(t.instruction_seconds) });
    for (const taskId of pl.task_ids) {
      const task = tasksById[taskId];
      const audio = task.stimuli.find((s) => s.role === 'audio');
      const isExampleTask = task.items.every((id) => itemsById[id]?.is_example);
      const plays = isExampleTask ? 1 : pc.plays;
      if (pc.part === 1) {
        push({ kind: 'preread', part: 1, task_id: taskId, ms: sec(isExampleTask ? t.example_preread_seconds : t.item_preread_seconds_per_text), items: task.items });
      } else {
        push({ kind: 'preread', part: pc.part, task_id: taskId, ms: sec(t.part_preread_seconds?.[pc.part]), items: task.items });
      }
      for (let k = 1; k <= plays; k++) {
        const dur = audioDurations[audio.asset_id];
        if (!Number.isFinite(dur)) throw new Error(`no duration for audio asset ${audio.asset_id}`);
        push({ kind: 'play', part: pc.part, task_id: taskId, asset_id: audio.asset_id, play_no: k, plays_allowed: plays, ms: dur });
        if (k < plays) push({ kind: 'gap', part: pc.part, ms: sec(pc.part === 1 ? t.gap_between_plays_seconds : (t.part_gap_seconds?.[pc.part] ?? t.gap_between_plays_seconds)) });
      }
      if (!isExampleTask) push({ kind: 'answer', part: pc.part, task_id: taskId, ms: sec(pc.part === 1 ? t.answer_seconds_after_text : t.part_answer_seconds?.[pc.part]), items: partItems(task.items) });
    }
  }
  if (t.review_seconds) push({ kind: 'review', part: null, ms: sec(t.review_seconds) });
  const total_ms = phases.reduce((n, p) => n + p.ms, 0);
  return { phases, total_ms, recovery_replays_per_module: t.recovery_replays_per_module ?? 1, gate: t.total_seconds_gate || null,
    behaviour_label: 'PROVISIONAL — Klarweg Standardized Exam Behaviour (not claimed to match Goethe digital playback)' };
}

export function speakingPlan(levelConfig, form) {
  const s = effectiveTiming(levelConfig, form).sprechen;
  const phases = (s.phases || []).map((p, i) => ({ seq: i, ...p, ms: Math.round(p.seconds * 1000) }));
  const total_ms = Math.round((s.prep_seconds || 0) * 1000) + phases.reduce((n, p) => n + p.ms, 0) + Math.round((s.transition_allowance_seconds ?? 120) * 1000);
  return { prep_ms: Math.round((s.prep_seconds || 0) * 1000), phases, total_ms, upload_grace_ms: Math.round((s.upload_grace_seconds ?? 600) * 1000) };
}
