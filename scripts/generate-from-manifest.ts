/**
 * scripts/generate-from-manifest.ts
 * ----------------------------------------------------------------------------
 * Manifest-driven German audio generator (ADDITIVE — does not touch
 * scripts/generate-audio.ts, its collector, or the vocabulary pipeline).
 *
 * Why this exists
 *   scripts/lib/collect-content.ts scans ONE legacy file (chapter/chapter-data.js)
 *   and guesses speaker gender from a 20-name list. It cannot produce the real
 *   A1–C2 corpus, and it never assembles a Reading passage as continuous text.
 *   The ID manifests already carry the approved German text, the speaker, the
 *   gender and the voice — so generation reads the manifest and nothing else.
 *
 * Source of truth
 *   audio-manifests/{story-dialogue,listening-dialogue,reading,speaking}-manifest.json
 *   Text is synthesized VERBATIM. This script never rewrites, simplifies,
 *   normalizes or re-punctuates learner-facing German.
 *
 * Usage
 *   npx tsx scripts/generate-from-manifest.ts --pilot            # 174 files / 48 whole units
 *   npx tsx scripts/generate-from-manifest.ts --type=reading     # one type
 *   npx tsx scripts/generate-from-manifest.ts --all              # full corpus
 *   ... add --dry-run to list without calling the API
 *   ... add --force to re-render files that already exist
 *
 * Requires GOOGLE_TTS_API_KEY in .env.local.
 * Writes public/audio/{story,listening,reading,speaking}/<ID>.mp3
 * Writes a per-run receipt to audio-manifests/generation-runs/<stamp>.json
 */
import { createHash } from 'node:crypto';
import { mkdirSync, existsSync, writeFileSync, readFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: '.env.local' });

const API_KEY = process.env.GOOGLE_TTS_API_KEY ?? '';
const ENDPOINT = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;
const ROOT = resolve(process.cwd());
const MANIFESTS = {
  story: 'audio-manifests/story-dialogue-manifest.json',
  listening: 'audio-manifests/listening-dialogue-manifest.json',
  reading: 'audio-manifests/reading-manifest.json',
  speaking: 'audio-manifests/speaking-manifest.json',
} as const;
type Kind = keyof typeof MANIFESTS;

const POLICY = JSON.parse(readFileSync(resolve(ROOT, 'audio-manifests/voice-policy.json'), 'utf8'));
const RATE: Record<string, number> = POLICY.speakingRateByLevel;

const argv = process.argv.slice(2);
const has = (f: string) => argv.includes(f);
const DRY = has('--dry-run');
const FORCE = has('--force');
const typeArg = argv.find((a) => a.startsWith('--type='))?.split('=')[1] as Kind | undefined;

interface Entry {
  id: string; chapter: string; level: string; de: string; voice: string;
  audioFilename: string; contentHash: string; speakingRate?: number;
  speaker?: string; gender?: string;
  /** Optional APPROVED spoken override, written only by scripts/promote-renders.js
   *  from audio-manifests/approved-renders.json. Identity is unaffected:
   *  `de` stays the learner-facing text, contentHash stays sha256(de::voice::rate),
   *  and publish-text-manifest.ts still keys on `de`. Only TTS input changes. */
  renderDe?: string;
}

/** Text actually sent to the synthesis provider. An approved renderDe wins;
 *  otherwise behaviour is exactly as before. */
function ttsTextOf(e: Entry): string {
  return (typeof e.renderDe === 'string' && e.renderDe.trim()) ? e.renderDe.trim() : e.de;
}

function load(kind: Kind): Entry[] {
  return JSON.parse(readFileSync(resolve(ROOT, MANIFESTS[kind]), 'utf8'));
}

/** Rate actually used for a render: manifest value wins, else the level policy. */
function rateOf(e: Entry): number {
  return typeof e.speakingRate === 'number' ? e.speakingRate : (RATE[e.level] ?? 1.0);
}

/**
 * ONE hash rule for all four manifests (voice-policy v2):
 *   sha256(de + "::" + voice + "::" + speakingRate) -> first 16 hex
 * Voice and rate are part of the artifact's identity, so the same German text
 * rendered at a different rate or in a different voice is a different artifact.
 */
function expectedHash(_kind: Kind, e: Entry): string {
  return createHash('sha256')
    .update(`${e.de}::${e.voice}::${rateOf(e)}`, 'utf8')
    .digest('hex')
    .slice(0, 16);
}

/** Guard: the only approved male voice is de-DE-Neural2-D. */
function assertVoice(e: Entry) {
  const ok = [POLICY.voices.female, POLICY.voices.male];
  if (!ok.includes(e.voice)) throw new Error(`unapproved voice ${e.voice} (retired B voice?)`);
  if (e.gender === 'male' && e.voice !== POLICY.voices.male) throw new Error('male speaker not on the male voice');
  if (e.gender === 'female' && e.voice !== POLICY.voices.female) throw new Error('female speaker not on the female voice');
  const want = RATE[e.level];
  if (rateOf(e) !== want) throw new Error(`rate ${rateOf(e)} deviates from the ${e.level} policy rate ${want}`);
}

async function synthesize(e: Entry): Promise<Buffer> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text: ttsTextOf(e) },             // approved renderDe, else de — verbatim, no SSML rewriting
      voice: { languageCode: 'de-DE', name: e.voice },
      audioConfig: {
        audioEncoding: 'MP3',
        sampleRateHertz: POLICY.audioConfig.sampleRateHertz,
        speakingRate: rateOf(e),
        pitch: POLICY.audioConfig.pitch,
      },
    }),
  });
  if (!res.ok) throw new Error(`TTS ${res.status} — ${(await res.text().catch(() => '')).slice(0, 180)}`);
  const json = (await res.json()) as { audioContent?: string };
  if (!json.audioContent) throw new Error('no audioContent in response');
  return Buffer.from(json.audioContent, 'base64');
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const pilotIds: Set<string> | null = has('--pilot')
    ? new Set(
        JSON.parse(readFileSync(resolve(ROOT, 'audio-manifests/audio-pilot-manifest.json'), 'utf8'))
          .units.flatMap((u: { lines: { id: string }[] }) => u.lines.map((l) => l.id)),
      )
    : null;

  if (!pilotIds && !typeArg && !has('--all')) {
    console.error('Refusing to run without a scope. Pass --pilot, --type=<kind> or --all.');
    process.exit(1);
  }
  if (!DRY && !API_KEY) {
    console.error('GOOGLE_TTS_API_KEY missing from .env.local.');
    process.exit(1);
  }

  const kinds: Kind[] = typeArg ? [typeArg] : (Object.keys(MANIFESTS) as Kind[]);
  const receipt: any[] = [];
  let generated = 0, skipped = 0, failed = 0, hashDrift = 0;

  for (const kind of kinds) {
    for (const e of load(kind)) {
      if (pilotIds && !pilotIds.has(e.id)) continue;

      // Integrity gate: a manifest hash that disagrees with the text means the
      // manifest is stale. Never synthesize from a stale row.
      try { assertVoice(e); } catch (err) {
        failed++;
        console.error(`   ! ${e.id} ${(err as Error).message} — skipped`);
        receipt.push({ id: e.id, kind, status: 'policy-violation', error: (err as Error).message });
        continue;
      }

      const want = expectedHash(kind, e);
      if (e.contentHash !== want) {
        hashDrift++;
        console.error(`   ! ${e.id} contentHash drift (manifest ${e.contentHash} vs text ${want}) — skipped`);
        receipt.push({ id: e.id, kind, status: 'hash-drift' });
        continue;
      }

      const file = resolve(ROOT, 'public', e.audioFilename);
      mkdirSync(dirname(file), { recursive: true });

      if (existsSync(file) && !FORCE) { skipped++; continue; }
      if (DRY) {
        console.log(`   + ${kind.padEnd(10)} ${e.id}  rate=${rateOf(e)}  ${e.voice}  ${e.de.slice(0, 60)}`);
        generated++; continue;
      }

      try {
        const mp3 = await synthesize(e);
        if (mp3.length < 1024) throw new Error(`suspiciously small (${mp3.length} bytes)`);
        writeFileSync(file, mp3);
        generated++;
        receipt.push({ id: e.id, kind, bytes: mp3.length, rate: rateOf(e), voice: e.voice, status: 'ok' });
        console.log(`   ✓ ${kind.padEnd(10)} ${e.id}  ${(mp3.length / 1024).toFixed(1)} KB`);
        await sleep(120);
      } catch (err) {
        failed++;
        receipt.push({ id: e.id, kind, status: 'failed', error: (err as Error).message });
        console.error(`   ✗ ${e.id} — ${(err as Error).message}`);
      }
    }
  }

  console.log(`\n generated ${generated} · skipped ${skipped} · failed ${failed} · hash drift ${hashDrift}`);

  if (!DRY) {
    // Playability sanity pass: no zero-byte or truncated files in this run.
    const bad = receipt.filter((r) => r.status === 'ok' && r.bytes < 2048).map((r) => r.id);
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const out = resolve(ROOT, 'audio-manifests/generation-runs', `${stamp}.json`);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, JSON.stringify({ scope: pilotIds ? 'pilot' : (typeArg ?? 'all'), generated, skipped, failed, hashDrift, suspiciouslyShort: bad, entries: receipt }, null, 2));
    console.log(` receipt: ${out}`);
    if (bad.length) console.error(` ⚠ short files: ${bad.join(', ')}`);
  }

  if (failed || hashDrift) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exit(1); });
