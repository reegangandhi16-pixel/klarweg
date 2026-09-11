/**
 * scripts/verify-pilot.ts
 * ----------------------------------------------------------------------------
 * Offline verification of rendered pilot audio. Reads only what is on disk plus
 * the manifests — no TTS calls, no network, no writes to any manifest.
 *
 *   npx tsx scripts/verify-pilot.ts
 *   npx tsx scripts/verify-pilot.ts --json    # machine-readable
 *
 * Checks, per pilot file:
 *   1. file exists at the manifest's audioFilename
 *   2. non-empty and above the 1 KB failed-render floor
 *   3. valid MPEG audio (first frame sync word + layer III + 24 kHz sample rate)
 *   4. filename matches <ID>.mp3 in the type's own directory
 *   5. contentHash matches sha256(de::voice::speakingRate) recomputed from text
 *   6. voice matches speaker gender; rate matches the level policy
 *   7. duration plausible for the text length (flags clipped or padded audio)
 *   8. no unapproved voice anywhere in the run
 *
 * Vocabulary is deliberately out of scope: its corpus is frozen on
 * de-DE-Neural2-B as a documented legacy exception (voice-policy.json).
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const JSONOUT = process.argv.includes('--json');
const read = (p: string) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

const POLICY = read('audio-manifests/voice-policy.json');
const RATE: Record<string, number> = POLICY.speakingRateByLevel;
const APPROVED = [POLICY.voices.female, POLICY.voices.male];
const DIR: Record<string, string> = { story: 'story', listening: 'listening', reading: 'reading', speaking: 'speaking' };

const MANIFEST: Record<string, string> = {
  story: 'audio-manifests/story-dialogue-manifest.json',
  listening: 'audio-manifests/listening-dialogue-manifest.json',
  reading: 'audio-manifests/reading-manifest.json',
  speaking: 'audio-manifests/speaking-manifest.json',
};

const idx: Record<string, any> = {};
for (const [kind, path] of Object.entries(MANIFEST)) {
  for (const e of read(path)) idx[e.id] = { ...e, kind };
}

/** Minimal MPEG-1/2 Layer III frame-header probe + duration estimate. */
function probeMp3(buf: Buffer) {
  let off = 0;
  if (buf.slice(0, 3).toString('latin1') === 'ID3') {
    off = 10 + ((buf[6] << 21) | (buf[7] << 14) | (buf[8] << 7) | buf[9]);
  }
  while (off < buf.length - 4 && !(buf[off] === 0xff && (buf[off + 1] & 0xe0) === 0xe0)) off++;
  if (off >= buf.length - 4) return { valid: false, sampleRate: 0, bitrate: 0, seconds: 0 };

  const h1 = buf[off + 1], h2 = buf[off + 2];
  const versionBits = (h1 >> 3) & 0x03;           // 3 = MPEG1, 2 = MPEG2
  const layer = (h1 >> 1) & 0x03;                 // 1 = Layer III
  const brIdx = (h2 >> 4) & 0x0f;
  const srIdx = (h2 >> 2) & 0x03;

  const SR: Record<number, number[]> = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };
  const BR_V1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
  const BR_V2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];

  const sampleRate = SR[versionBits]?.[srIdx] ?? 0;
  const bitrate = (versionBits === 3 ? BR_V1 : BR_V2)[brIdx] ?? 0;
  const seconds = bitrate ? ((buf.length - off) * 8) / (bitrate * 1000) : 0;
  return { valid: layer === 1 && sampleRate > 0 && bitrate > 0, sampleRate, bitrate, seconds };
}

const hash = (de: string, voice: string, rate: number) =>
  createHash('sha256').update(`${de}::${voice}::${rate}`, 'utf8').digest('hex').slice(0, 16);

const pilot = read('audio-manifests/audio-pilot-manifest.json');
const rows: any[] = [];

for (const unit of pilot.units) {
  for (const line of unit.lines) {
    const e = idx[line.id];
    const r: any = { id: line.id, type: unit.type, chapter: unit.chapter, level: unit.level, problems: [] as string[] };

    if (!e) { r.problems.push('id not present in its source manifest'); rows.push(r); continue; }

    const rate = e.speakingRate ?? RATE[e.level];
    const wantFile = `audio/${DIR[e.kind]}/${e.id}.mp3`;
    if (e.audioFilename !== wantFile) r.problems.push(`filename ${e.audioFilename} != ${wantFile}`);
    if (e.contentHash !== hash(e.de, e.voice, rate)) r.problems.push('contentHash disagrees with text/voice/rate');
    if (!APPROVED.includes(e.voice)) r.problems.push(`unapproved voice ${e.voice}`);
    if (e.gender === 'male' && e.voice !== POLICY.voices.male) r.problems.push('male speaker not on the male voice');
    if (e.gender === 'female' && e.voice !== POLICY.voices.female) r.problems.push('female speaker not on the female voice');
    if (rate !== RATE[e.level]) r.problems.push(`rate ${rate} deviates from the ${e.level} policy rate ${RATE[e.level]}`);

    const file = resolve(ROOT, 'public', e.audioFilename);
    if (!existsSync(file)) {
      r.problems.push('MISSING — not rendered');
      r.status = 'missing';
      rows.push(r);
      continue;
    }

    const bytes = statSync(file).size;
    r.bytes = bytes;
    if (bytes === 0) r.problems.push('EMPTY file');
    else if (bytes < 1024) r.problems.push(`under the 1 KB failed-render floor (${bytes} B)`);

    const p = probeMp3(readFileSync(file));
    r.sampleRate = p.sampleRate;
    r.seconds = Math.round(p.seconds * 100) / 100;
    if (!p.valid) r.problems.push('not decodable as MPEG Layer III — unplayable');
    if (p.sampleRate && p.sampleRate !== POLICY.audioConfig.sampleRateHertz)
      r.problems.push(`sample rate ${p.sampleRate} != policy ${POLICY.audioConfig.sampleRateHertz}`);

    // Pacing plausibility. German TTS lands near 11–17 chars/sec at rate 1.0.
    if (p.seconds > 0.2) {
      const cps = e.de.length / p.seconds / rate;
      r.charsPerSecond = Math.round(cps * 10) / 10;
      if (cps > 26) r.problems.push(`too fast for the text — likely clipped (${r.charsPerSecond} chars/s)`);
      if (cps < 5) r.problems.push(`too slow / trailing silence (${r.charsPerSecond} chars/s)`);
    }

    r.status = r.problems.length ? 'problem' : 'ok';
    rows.push(r);
  }
}

const ok = rows.filter((r) => r.status === 'ok');
const missing = rows.filter((r) => r.status === 'missing');
const problems = rows.filter((r) => r.status === 'problem');
const byType = (s: string) => Object.fromEntries(['story', 'listening', 'reading', 'speaking'].map((t) => [t, rows.filter((r) => r.type === t && r.status === s).length]));

const summary = {
  expected: rows.length, ok: ok.length, missing: missing.length, problems: problems.length,
  okByType: byType('ok'),
  voices: POLICY.voices,
  vocabularyExceptionRespected: true,   // this script never reads or touches vocabulary
  totalSeconds: Math.round(rows.reduce((a, r) => a + (r.seconds ?? 0), 0)),
  verdict: missing.length === 0 && problems.length === 0
    ? 'PASS — automated checks clean; manual listening approval still required'
    : 'FAIL — see problems',
};

if (JSONOUT) {
  console.log(JSON.stringify({ summary, rows }, null, 2));
} else {
  console.log('\n Pilot verification\n');
  console.log(`   expected ${summary.expected} · ok ${summary.ok} · missing ${summary.missing} · problems ${summary.problems}`);
  console.log(`   ok by type: ${JSON.stringify(summary.okByType)}`);
  console.log(`   total audio: ${summary.totalSeconds}s\n`);
  for (const r of [...missing, ...problems]) console.log(`   ✗ ${r.type.padEnd(10)} ${r.id}  ${r.problems.join(' · ')}`);
  console.log(`\n ${summary.verdict}\n`);
}

process.exitCode = missing.length || problems.length ? 1 : 0;
