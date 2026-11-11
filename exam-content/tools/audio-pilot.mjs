#!/usr/bin/env node
/* OD-14 AUDIO PILOT generator (Azure AI Speech, REST). Turns the recording plan (tools/audio-plan.mjs) of ONE form into
   SSML — one <voice> element per spoken line, voices from an owner-approved cast file — and, only when every gate below
   is met, synthesizes each audio asset. Stage directions ("Wetterbericht:") are not spoken.

   Gates (all required for synthesis; otherwise --dry-run writes SSML + a manifest and makes no network call):
     --licence-ref <id>      reference of the owner-filed written licence confirmation (EX-06); recorded per clip
     AZURE_SPEECH_KEY, AZURE_SPEECH_REGION   from the environment only; never printed or written anywhere
     out dir OUTSIDE this repository (audio is private content; boundary rule 5 forbids media here)
   Output: <out>/<asset>.wav (riff-48khz-16bit-mono-pcm, Azure's highest PCM depth — AUDIO-SPEC B5 asks for 24-bit
   masters, recorded as a deviation for the owner), <out>/<asset>.ssml, <out>/manifest.json with voice ids, settings,
   script and SSML sha256, file sha256, byte size and measured duration.

   Usage: node exam-content/tools/audio-pilot.mjs --form p3 --cast cast.json --out <dir> [--only ast:…,…] [--dry-run]
          [--licence-ref <id>] [--rate 0%]
   cast.json: { "voices": { "<role>": "de-DE-KatjaNeural", … } } with one entry per role in the form's plan. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from './practice-forms.mjs';
import { planForm } from './audio-plan.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const OUTPUT_FORMAT = 'riff-48khz-16bit-mono-pcm';
const VOICE_RE = /^(de-DE|de-AT|de-CH)-[A-Za-z]+(Multilingual)?Neural(:[A-Za-z0-9-]+)?$|^(de-DE)-[A-Za-z]+:DragonHDLatestNeural$/;
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const escXml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

/* Role key per segment: the speaker as named in the script (dialogues, roles) or the single-voice slot. */
export const roleOf = (seg) => seg.speaker;

export function rolesOf(plan) { return [...new Set(plan.segments.map(roleOf))]; }

export function checkCast(plan, cast) {
  const voices = (cast && cast.voices) || {};
  const problems = [];
  for (const r of rolesOf(plan)) {
    if (!voices[r]) problems.push(`no voice for role "${r}"`);
    else if (!VOICE_RE.test(voices[r])) problems.push(`role "${r}": "${voices[r]}" is not a German (DE/AT/CH) neural voice id`);
  }
  // within a dialogue the speakers must be told apart: no two roles of one Hören 3/4 asset share a voice
  for (const slot of ['h3', 'h4']) {
    const rs = [...new Set(plan.segments.filter((s) => s.slot === slot).map(roleOf))];
    const vs = rs.map((r) => voices[r]).filter(Boolean);
    if (new Set(vs).size !== vs.length) problems.push(`Hören ${slot.slice(1)}: two speakers share a voice`);
  }
  return problems;
}

export function ssmlFor(plan, assetId, cast, { rate = '0%' } = {}) {
  const segs = plan.segments.filter((s) => s.asset_id === assetId);
  if (!segs.length) throw new Error(`no segments for ${assetId}`);
  const body = segs.map((s) => `<voice name="${escXml(cast.voices[roleOf(s)])}"><prosody rate="${escXml(rate)}">${escXml(s.text)}</prosody></voice>`).join('<break time="400ms"/>');
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="de-DE">${body}</speak>`;
}

export function wavDurationMs(buf) {
  if (buf.length < 44 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WAVE') throw new Error('not a RIFF/WAVE file');
  let off = 12, fmt = null, dataBytes = null;
  while (off + 8 <= buf.length) {
    const id = buf.toString('ascii', off, off + 4), size = buf.readUInt32LE(off + 4);
    if (id === 'fmt ') fmt = { channels: buf.readUInt16LE(off + 10), rate: buf.readUInt32LE(off + 12), bits: buf.readUInt16LE(off + 22) };
    if (id === 'data') { dataBytes = Math.min(size, buf.length - off - 8); break; }
    off += 8 + size + (size % 2);
  }
  if (!fmt || dataBytes == null) throw new Error('WAV without fmt/data chunk');
  return { duration_ms: Math.round((dataBytes / (fmt.rate * fmt.channels * (fmt.bits / 8))) * 1000), ...fmt };
}

export function assertOutsideRepo(dir) {
  const d = path.resolve(dir);
  if (d === REPO || d.startsWith(REPO + path.sep)) throw new Error('refusing to write pilot audio inside the repository');
  return d;
}

export async function runPilot({ form: name, cast, out, only = null, dryRun = true, licenceRef = null, rate = '0%', env = process.env, fetchImpl = globalThis.fetch, now = () => new Date().toISOString() }) {
  const form = PRACTICE_FORMS.find((f) => f.name.toLowerCase() === String(name).toLowerCase());
  if (!form) throw new Error(`unknown form ${name}`);
  const dir = assertOutsideRepo(out);
  const plan = planForm(form);
  if (plan.issues.length) throw new Error(`recording plan has issues: ${plan.issues.join('; ')}`);
  const problems = checkCast(plan, cast);
  if (problems.length) throw new Error(`cast: ${problems.join('; ')}`);
  if (!dryRun) {
    if (!licenceRef) throw new Error('synthesis needs --licence-ref (the owner-filed written licence confirmation, EX-06)');
    if (!env.AZURE_SPEECH_KEY || !env.AZURE_SPEECH_REGION) throw new Error('synthesis needs AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in the environment');
  }
  fs.mkdirSync(dir, { recursive: true });
  const assets = [...new Set(plan.segments.map((s) => s.asset_id))].filter((a) => !only || only.includes(a));
  const manifest = { form: form.form_id, generated_at: now(), dry_run: dryRun, licence_ref: licenceRef, vendor: 'azure-ai-speech', output_format: OUTPUT_FORMAT,
    deviation: 'AUDIO-SPEC B5 asks for 24-bit masters; Azure PCM output is 16-bit', rate, cast: cast.voices, clips: [] };
  for (const assetId of assets) {
    const ssml = ssmlFor(plan, assetId, cast, { rate });
    const script = plan.segments.filter((s) => s.asset_id === assetId).map((s) => `${s.speaker}: ${s.text}`).join('\n');
    const base = assetId.replace(/^ast:/, '').replace(/[^a-z0-9-]/gi, '_');
    fs.writeFileSync(path.join(dir, `${base}.ssml`), ssml);
    const clip = { asset_id: assetId, voices: [...new Set(plan.segments.filter((s) => s.asset_id === assetId).map((s) => cast.voices[roleOf(s)]))], script_sha256: sha(script), ssml_sha256: sha(ssml), chars: script.length };
    if (!dryRun) {
      const r = await fetchImpl(`https://${env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`, {
        method: 'POST', body: ssml,
        headers: { 'Ocp-Apim-Subscription-Key': env.AZURE_SPEECH_KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': OUTPUT_FORMAT, 'User-Agent': 'klarweg-audio-pilot' }
      });
      if (!r.ok) { clip.error = `HTTP ${r.status}`; manifest.clips.push(clip); continue; }
      const buf = Buffer.from(await r.arrayBuffer());
      const wav = wavDurationMs(buf);
      fs.writeFileSync(path.join(dir, `${base}.wav`), buf);
      Object.assign(clip, { file: `${base}.wav`, sha256: crypto.createHash('sha256').update(buf).digest('hex'), bytes: buf.length, ...wav });
    }
    manifest.clips.push(clip);
  }
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), arg = (k) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  try {
    const m = await runPilot({ form: arg('--form') || 'p3', cast: JSON.parse(fs.readFileSync(arg('--cast'), 'utf8')), out: arg('--out'),
      only: arg('--only') ? arg('--only').split(',') : null, dryRun: a.includes('--dry-run'), licenceRef: arg('--licence-ref'), rate: arg('--rate') || '0%' });
    console.log(JSON.stringify({ clips: m.clips.length, errors: m.clips.filter((c) => c.error).length, dry_run: m.dry_run }));
  } catch (e) { console.error(e.message); process.exit(1); }
}
