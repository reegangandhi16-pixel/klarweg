/**
 * scripts/generate-token-audio.ts
 * ----------------------------------------------------------------------------
 * Token / word audio generator for APPROVED render overrides.
 *
 * A few learner-facing tokens are written in a form that is not what should be
 * heard from the word popup: the token "Z" displays as "Z" but its letter NAME
 * is "Zett"; the vowel token "a" is demonstrated by the exemplar "Apfel". The
 * token's authored `spokenDe` carries that form, and a row in
 * audio-manifests/approved-renders.json authorises it.
 *
 * IDENTITY vs SYNTHESIS — the whole point of this script:
 *   manifest key = displayText   ("Z")      ← what the runtime looks up
 *   TTS input    = renderDe      ("Zett")   ← what is spoken
 *   filename     = sha256(normalize(renderDe)).slice(0,16)
 *
 * Hashing the SPOKEN text is deliberate and gives reuse for free: "a" → "Apfel"
 * resolves to the same content-addressed file as the existing vocabulary word
 * "Apfel", so no second MP3 is made. It also makes duplicate spoken content
 * structurally impossible to double-generate.
 *
 * FAIL CLOSED. Only rows in approved-renders.json rows[] with a non-null
 * approvedOn, a displayText and a renderDe are eligible. Nothing else can be
 * synthesized — a token's `spokenDe` existing in chapter data authorises
 * nothing on its own.
 *
 * Reuses the EXISTING word-audio infrastructure and adds no second convention:
 *   • same hash rule as scripts/generate-a1-audio.ts (verified byte-identical)
 *   • same voices        F de-DE-Neural2-F / M de-DE-Neural2-D
 *   • same directories   public/audio/words/{female,male}/
 *   • same manifest shape { "<display>": { female, male } }
 *   • same generation speakingRate 1.0 — playback rate stays a RUNTIME
 *     playbackRate concern (long-press Slow / Very-slow), so no rate variants.
 *
 * Sentence audio is untouched: this script never reads or writes
 * audio-manifests/*-manifest.json, so no contentHash is ever recomputed.
 *
 *   npx tsx scripts/generate-token-audio.ts            dry run (default)
 *   npx tsx scripts/generate-token-audio.ts --write    synthesize + merge
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const WORDS_DIR = resolve(ROOT, 'public/audio/words');
const DIR_F = resolve(WORDS_DIR, 'female');
const DIR_M = resolve(WORDS_DIR, 'male');
const MANIFEST = resolve(ROOT, 'public/audio/a1-words-manifest.json');
const PEER_MANIFESTS = [
  'public/audio/a1-words-manifest.json',
  'public/audio/a2-words-manifest.json',
  'public/audio/b1-words-manifest.json',
].map((p) => resolve(ROOT, p));
const APPROVALS = resolve(ROOT, 'audio-manifests/approved-renders.json');

/* CDN base the runtime actually resolves published word audio against
   (public/audio/kw-audio-engine.js). The MP3s do NOT live in this repo —
   public/audio/words/ is empty here — so local filesystem existence is NOT
   evidence about the published state. */
const CDN_BASE = process.env.KW_AUDIO_CDN
  ?? 'https://cdn.jsdelivr.net/gh/reegangandhi16-pixel/klarweg-audio@main/public/audio/';

const API_KEY = process.env.GOOGLE_TTS_API_KEY ?? '';
const LANG = 'de-DE';
const VOICE_FEMALE = process.env.TTS_VOICE_FEMALE ?? 'de-DE-Neural2-F';
const VOICE_MALE = process.env.TTS_VOICE_MALE ?? 'de-DE-Neural2-D';
const ENDPOINT = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

const WRITE = process.argv.includes('--write');
const VERIFY_CDN = process.argv.includes('--verify-cdn');

/* Identical to scripts/generate-a1-audio.ts — NOT a second convention.
   Kept inline rather than refactored: extracting these two one-liners would
   mean editing the working generator, and the risk of touching a script that
   owns 3,502 published assets outweighs removing four duplicated lines. */
function normalize(t: string) { return t.replace(/\s+/g, ' ').trim(); }
function hashOf(t: string) { return createHash('sha256').update(normalize(t), 'utf8').digest('hex').slice(0, 16); }

interface ApprovedRow {
  assetId?: string; displayText?: string; renderDe?: string;
  provenance?: string; approvedBy?: string | null; approvedOn?: string | null;
}
interface Entry { female: string; male: string; spoken?: string }
type Manifest = Record<string, Entry | { female: string; male: string }>;

interface Job {
  displayText: string; renderDe: string; hash: string;
  femaleRel: string; maleRel: string;
  femaleOnDisk: boolean; maleOnDisk: boolean;
  femaleVia: string; maleVia: string;
  action: 'REUSE' | 'SYNTH_F' | 'SYNTH_M' | 'SYNTH_BOTH';
  reason: string; approval: string;
}

function loadJson<T>(p: string, fallback: T): T {
  if (!existsSync(p)) return fallback;
  try { return JSON.parse(readFileSync(p, 'utf8')) as T; } catch { return fallback; }
}
function sortKeys<T extends object>(o: T): T {
  return Object.keys(o).sort().reduce((a: any, k) => { a[k] = (o as any)[k]; return a; }, {}) as T;
}

/** Eligibility. Every rejection is reported, never silently skipped. */
function screen(rows: ApprovedRow[]) {
  const eligible: ApprovedRow[] = [], refused: { row: ApprovedRow; why: string }[] = [];
  for (const r of rows) {
    if (!r.approvedOn) { refused.push({ row: r, why: 'not approved (approvedOn is null)' }); continue; }
    if (!r.displayText || !String(r.displayText).trim()) { refused.push({ row: r, why: 'missing displayText — no manifest identity' }); continue; }
    if (!r.renderDe || !String(r.renderDe).trim()) { refused.push({ row: r, why: 'missing renderDe — nothing to synthesize' }); continue; }
    if (r.provenance && ['C', 'D', 'E'].includes(r.provenance)) { refused.push({ row: r, why: `blocked provenance ${r.provenance}` }); continue; }
    eligible.push(r);
  }
  return { eligible, refused };
}

/* ---- REUSE PREDICATE ---------------------------------------------------
   Reuse is a question about the PUBLISHED corpus, not about this checkout.
   The word MP3s are served from the CDN; public/audio/words/ is empty locally,
   so `existsSync` answers "missing" for all 3,502 published assets and would
   send every target to synthesis — re-cutting audio that already exists.

   Authority order:
     1. the word manifests — if a published entry's filename carries this hash
        for this voice, the asset exists. Content-addressed, so a hash match IS
        an identity match: same bytes of spoken text, same file.
     2. local disk — a useful positive (partially synced checkout), never a
        negative.
     3. optional HTTP verification against the configured CDN (--verify-cdn),
        confirming the manifest's claim is actually reachable.

   Generic by construction: the index is built from whatever the manifests
   contain and keyed by hash. No display text or spoken form is named. */
function buildPublishedIndex(): Map<string, string> {
  const index = new Map<string, string>();          // "F:<hash>" | "M:<hash>" -> owning key
  for (const p of PEER_MANIFESTS) {
    const m = loadJson<Record<string, { female?: string; male?: string }>>(p, {});
    for (const [key, v] of Object.entries(m)) {
      const f = String(v?.female ?? '').match(/([0-9a-f]{16})\.mp3/);
      const d = String(v?.male ?? '').match(/([0-9a-f]{16})\.mp3/);
      if (f && !index.has(`F:${f[1]}`)) index.set(`F:${f[1]}`, key);
      if (d && !index.has(`M:${d[1]}`)) index.set(`M:${d[1]}`, key);
    }
  }
  return index;
}

async function reachable(rel: string): Promise<boolean> {
  try {
    const res = await fetch(new URL(rel.replace(/^\/audio\//, ''), CDN_BASE).href, { method: 'HEAD' });
    return res.ok;
  } catch { return false; }
}

/** Does a published asset already carry this spoken content for this voice? */
function publishedFor(index: Map<string, string>, voice: 'F' | 'M', hash: string) {
  const owner = index.get(`${voice}:${hash}`);
  if (owner) return { published: true, via: `manifest entry "${owner}"` };
  const dir = voice === 'F' ? DIR_F : DIR_M;
  if (existsSync(resolve(dir, `${hash}.mp3`))) return { published: true, via: 'local file' };
  return { published: false, via: '' };
}

function planFor(r: ApprovedRow, index: Map<string, string>): Job {
  const displayText = String(r.displayText).trim();
  const renderDe = String(r.renderDe).trim();
  const hash = hashOf(renderDe);                       // hash over SPOKEN text
  const femaleRel = `/audio/words/female/${hash}.mp3`;
  const maleRel = `/audio/words/male/${hash}.mp3`;
  const pf = publishedFor(index, 'F', hash);
  const pm = publishedFor(index, 'M', hash);
  const femaleOnDisk = pf.published, maleOnDisk = pm.published;
  const action: Job['action'] = femaleOnDisk && maleOnDisk ? 'REUSE'
    : !femaleOnDisk && !maleOnDisk ? 'SYNTH_BOTH'
    : !femaleOnDisk ? 'SYNTH_F' : 'SYNTH_M';
  return {
    displayText, renderDe, hash, femaleRel, maleRel, femaleOnDisk, maleOnDisk, action,
    femaleVia: pf.via, maleVia: pm.via,
    reason: action === 'REUSE'
      ? `spoken text "${renderDe}" already published at ${hash} (F: ${pf.via}, M: ${pm.via}) — no synthesis`
      : `no published asset for spoken text "${renderDe}"`,
    approval: `${r.provenance ?? '?'} · ${r.approvedBy ?? '?'} · ${r.approvedOn}`,
  };
}

async function synth(text: string, voice: string): Promise<Buffer> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },                                  // renderDe, never `pron`
      voice: { languageCode: LANG, name: voice },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 1.0, sampleRateHertz: 24000 },
    }),
  });
  if (!res.ok) throw new Error(`TTS ${res.status} ${(await res.text().catch(() => '')).slice(0, 160)}`);
  const j = (await res.json()) as { audioContent?: string };
  if (!j.audioContent) throw new Error('no audioContent');
  return Buffer.from(j.audioContent, 'base64');
}

async function main() {
  const policy = loadJson<{ rows?: ApprovedRow[] }>(APPROVALS, {});
  const rows = policy.rows ?? [];
  const { eligible, refused } = screen(rows);
  const index = buildPublishedIndex();
  const jobs = eligible.map((r) => planFor(r, index));

  console.log(`\nKlarweg token-audio generator — ${WRITE ? 'WRITE' : 'DRY RUN'}`);
  console.log(`approved-renders rows: ${rows.length}   eligible: ${eligible.length}   refused: ${refused.length}`);
  console.log(`published-asset index: ${index.size} voice/hash pairs from ${PEER_MANIFESTS.length} word manifests`);

  if (refused.length) {
    console.log('\nREFUSED');
    for (const { row, why } of refused) console.log(`  ${(row.displayText ?? row.assetId ?? '(no id)')} — ${why}`);
  }

  if (!jobs.length) {
    console.log('\nZERO synthesis jobs and ZERO manifest additions.');
    console.log('Nothing in rows[] is an approved token render, so nothing may be generated.');
    return;
  }

  console.log('\ndisplayText        renderDe            F hash / M hash                      action      approval');
  for (const j of jobs) {
    console.log(`  ${j.displayText.padEnd(17)} ${j.renderDe.padEnd(19)} ${j.hash} (F:${j.femaleOnDisk ? 'on-disk' : 'missing'} M:${j.maleOnDisk ? 'on-disk' : 'missing'})  ${j.action.padEnd(11)} ${j.approval}`);
    console.log(`      ${j.reason}`);
  }
  const toSynth = jobs.filter((j) => j.action !== 'REUSE');
  const reuseVoiceJobs = jobs.reduce((n, j) => n + (j.femaleOnDisk ? 1 : 0) + (j.maleOnDisk ? 1 : 0), 0);
  console.log(`\ntargets: ${jobs.length}   reuse targets: ${jobs.length - toSynth.length}   synthesis targets: ${toSynth.length}`);
  console.log(`voice jobs: ${jobs.length * 2}   REUSE: ${reuseVoiceJobs}   SYNTHESIS: ${jobs.length * 2 - reuseVoiceJobs}`);

  if (VERIFY_CDN) {
    console.log('\nCDN verification of reused assets:');
    for (const j of jobs) {
      if (j.femaleOnDisk) console.log(`  ${j.displayText} F ${j.femaleRel} → ${(await reachable(j.femaleRel)) ? 'HTTP ok' : 'UNREACHABLE'}`);
      if (j.maleOnDisk) console.log(`  ${j.displayText} M ${j.maleRel} → ${(await reachable(j.maleRel)) ? 'HTTP ok' : 'UNREACHABLE'}`);
    }
  }

  if (!WRITE) { console.log('\nDry run — no TTS call, no MP3 written, no manifest touched.'); return; }

  if (!API_KEY) throw new Error('GOOGLE_TTS_API_KEY missing');
  mkdirSync(DIR_F, { recursive: true }); mkdirSync(DIR_M, { recursive: true });
  const manifest = loadJson<Manifest>(MANIFEST, {});
  const before = JSON.stringify(manifest);
  let made = 0;

  for (const j of jobs) {
    // Never overwrite: an existing file at this hash already holds this exact
    // spoken content, so rewriting it could only churn bytes.
    if (!j.femaleOnDisk) { writeFileSync(resolve(DIR_F, `${j.hash}.mp3`), await synth(j.renderDe, VOICE_FEMALE)); made++; }
    if (!j.maleOnDisk) { writeFileSync(resolve(DIR_M, `${j.hash}.mp3`), await synth(j.renderDe, VOICE_MALE)); made++; }
    const existing = manifest[j.displayText] as Entry | undefined;
    if (existing && existing.female === j.femaleRel && existing.male === j.maleRel) continue;  // already correct
    manifest[j.displayText] = { female: j.femaleRel, male: j.maleRel, spoken: j.renderDe };
  }

  if (JSON.stringify(manifest) !== before) writeFileSync(MANIFEST, JSON.stringify(sortKeys(manifest), null, 2) + '\n');
  console.log(`\nmp3 written: ${made}   manifest keys: ${Object.keys(manifest).length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
