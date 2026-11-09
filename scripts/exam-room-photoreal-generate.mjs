#!/usr/bin/env node
/* Photoreal pilot generation (owner-approved Phase 1, hard cap $10 USD) — Vertex AI, gcloud OAuth (no API key).
     node scripts/exam-room-photoreal-generate.mjs image  --id <name> --prompt-key <key> [--ref <img>...] [--size 2K|4K]
     node scripts/exam-room-photoreal-generate.mjs video  --id <name> --image <img> --prompt-key <key> [--seconds 8]
     node scripts/exam-room-photoreal-generate.mjs ledger
   Outputs + manifest.json live in PILOT_DIR (default ~/klarweg-work/klarweg-photoreal-pilot, outside the public repo).
   Every request is refused BEFORE sending if spent + its maximum possible cost would exceed the cap.
   Prices (Vertex AI pricing page, read 2026-11-10):
     gemini-3-pro-image: image out 1120 tok (1K/2K) = $0.134, 2000 tok (4K) = $0.24 ($120/M); text+thinking out $12/M;
                                 input $2/M (560 tok per input image)
     veo-3.1-fast-generate-001:  video only (generateAudio=false) 1080p $0.10/s, 720p $0.08/s */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PROJECT = 'klarweg-512108', ACCOUNT = 'klarwegofficial@gmail.com';
const CAP = 10.0;
const DIR = process.env.PILOT_DIR || path.join(os.homedir(), 'klarweg-work/klarweg-photoreal-pilot');
const MAN = path.join(DIR, 'manifest.json');
fs.mkdirSync(DIR, { recursive: true });
const man = fs.existsSync(MAN) ? JSON.parse(fs.readFileSync(MAN, 'utf8')) : { cap_usd: CAP, project: PROJECT, entries: [] };
const save = () => fs.writeFileSync(MAN, JSON.stringify(man, null, 1));
const spent = () => +man.entries.reduce((a, e) => a + (e.actual_usd ?? e.max_usd), 0).toFixed(4);   // unknown actual → assume max
const prompts = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/photoreal/pilot-prompts.json'), 'utf8'));
const argv = process.argv.slice(2); const cmd = argv[0];
const opt = (k, d = null) => { const i = argv.indexOf(k); return i > 0 ? argv[i + 1] : d; };
const many = (k) => argv.flatMap((a, i) => (a === k ? [argv[i + 1]] : []));
const token = () => execFileSync('gcloud', ['auth', 'print-access-token', '--account', ACCOUNT]).toString().trim();
const sha = (f) => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex').slice(0, 16);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function guard(maxUsd) {
  const s = spent();
  if (s + maxUsd > CAP) { console.error(JSON.stringify({ refused: true, spent: s, next_max: maxUsd, cap: CAP })); process.exit(2); }
  return s;
}
async function post(url, body) {
  const r = await fetch(url, { method: 'POST', headers: { Authorization: 'Bearer ' + token(), 'x-goog-user-project': PROJECT, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json(); if (!r.ok) throw Object.assign(new Error(JSON.stringify(j.error || j).slice(0, 600)), { status: r.status }); return j;
}

if (cmd === 'ledger') { console.log(JSON.stringify({ spent_usd: spent(), cap_usd: CAP, remaining_usd: +(CAP - spent()).toFixed(4), entries: man.entries.map((e) => ({ id: e.id, kind: e.kind, usd: e.actual_usd ?? e.max_usd, ok: e.ok })) }, null, 1)); process.exit(0); }

const id = opt('--id'); const key = opt('--prompt-key');
if (!id || !key || !prompts[key]) throw new Error('need --id and a --prompt-key from pilot-prompts.json');
if (man.entries.some((e) => e.id === id)) throw new Error('id already used: ' + id);
const prompt = prompts[key].join ? prompts[key].join(' ') : prompts[key];

if (cmd === 'image') {
  const size = opt('--size', '2K'); const refs = many('--ref');
  const outTok = size === '4K' ? 2000 : 1120;
  const max = +(outTok * 120e-6 + 8000 * 12e-6 + (2000 + 560 * refs.length) * 2e-6).toFixed(4);   // ≤ 8k thinking/text tokens
  const before = guard(max);
  const parts = [...refs.map((f) => ({ inlineData: { mimeType: f.endsWith('.png') ? 'image/png' : 'image/jpeg', data: fs.readFileSync(f).toString('base64') } })), { text: prompt }];
  const entry = { id, kind: 'image', model: 'gemini-3-pro-image', prompt_key: key, refs: refs.map((f) => path.basename(f)), size, max_usd: max, spent_before: before, t: new Date().toISOString(), ok: false };
  man.entries.push(entry); save();
  try {
    const j = await post(`https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/gemini-3-pro-image:generateContent`, {
      contents: [{ role: 'user', parts }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'], imageConfig: { aspectRatio: '16:9', imageSize: size } } });
    const u = j.usageMetadata || {};
    const outDetails = Object.fromEntries((u.candidatesTokensDetails || []).map((d) => [d.modality, d.tokenCount]));
    const img = outDetails.IMAGE || 0, txt = (u.candidatesTokenCount || 0) - img + (u.thoughtsTokenCount || 0);
    entry.usage = u; entry.actual_usd = +(img * 120e-6 + Math.max(0, txt) * 12e-6 + (u.promptTokenCount || 0) * 2e-6).toFixed(4);
    const p = (j.candidates || [])[0]?.content?.parts || [];
    const data = p.find((x) => x.inlineData)?.inlineData;
    entry.text = p.filter((x) => x.text).map((x) => x.text).join(' ').slice(0, 400);
    entry.finish = (j.candidates || [])[0]?.finishReason;
    if (data) { const f = path.join(DIR, `${id}.${data.mimeType.includes('png') ? 'png' : 'jpg'}`); fs.writeFileSync(f, Buffer.from(data.data, 'base64')); entry.file = path.basename(f); entry.sha = sha(f); entry.ok = true; }
  } catch (e) { entry.error = e.message; if (e.status >= 400 && e.status < 500) entry.actual_usd = 0; }
  save(); console.log(JSON.stringify({ ...entry, usage: undefined, spent_after: spent() }));
}

if (cmd === 'video') {
  const seconds = +opt('--seconds', '8'); const image = opt('--image');
  const max = +(seconds * 0.10).toFixed(4);
  const before = guard(max);
  const entry = { id, kind: 'video', model: 'veo-3.1-fast-generate-001', prompt_key: key, image: path.basename(image), image_sha: sha(image), seconds, resolution: '1080p', audio: false, max_usd: max, spent_before: before, t: new Date().toISOString(), ok: false };
  man.entries.push(entry); save();
  const base = `https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/us-central1/publishers/google/models/veo-3.1-fast-generate-001`;
  try {
    const op = await post(base + ':predictLongRunning', {
      instances: [{ prompt, image: { bytesBase64Encoded: fs.readFileSync(image).toString('base64'), mimeType: image.endsWith('.png') ? 'image/png' : 'image/jpeg' } }],
      parameters: { aspectRatio: '16:9', durationSeconds: seconds, generateAudio: false, resolution: '1080p', sampleCount: 1, personGeneration: 'allow_adult' } });
    entry.operation = op.name; save();
    let done = null;
    for (let i = 0; i < 120 && !done; i++) { await sleep(10000); const r = await post(base + ':fetchPredictOperation', { operationName: op.name }); if (r.done) done = r; }
    if (!done) throw new Error('timeout (operation kept in manifest)');
    if (done.error) throw new Error(JSON.stringify(done.error));
    const v = (done.response?.videos || [])[0];
    entry.filtered = done.response?.raiMediaFilteredCount || 0;
    if (v?.bytesBase64Encoded) { const f = path.join(DIR, `${id}.mp4`); fs.writeFileSync(f, Buffer.from(v.bytesBase64Encoded, 'base64')); entry.file = path.basename(f); entry.sha = sha(f); entry.ok = true; entry.actual_usd = max; }
    else { entry.actual_usd = max; entry.note = 'no video returned' + (entry.filtered ? ' (safety filtered)' : '') + ' — counted as billed (conservative)'; }
  } catch (e) { entry.error = e.message; if (e.status >= 400 && e.status < 500) entry.actual_usd = 0; }
  save(); console.log(JSON.stringify({ ...entry, spent_after: spent() }));
}
