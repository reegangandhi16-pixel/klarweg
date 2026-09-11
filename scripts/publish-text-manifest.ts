/**
 * scripts/publish-text-manifest.ts
 * ----------------------------------------------------------------------------
 * Emits the text-keyed manifest that public/audio/kw-audio-engine.js consumes.
 * The engine resolves audio BY GERMAN TEXT, not by ID, so without this file the
 * chapter pages keep falling through to browser speech even with every MP3 present.
 *
 * RUN THIS ONLY AFTER the pilot is manually approved. Guardrails below refuse to
 * publish a partial manifest.
 *
 *   npx tsx scripts/publish-text-manifest.ts --pilot-only --dry-run   # inspect
 *   npx tsx scripts/publish-text-manifest.ts --pilot-only             # 174-file preview manifest
 *   npx tsx scripts/publish-text-manifest.ts --production             # full corpus, requires 100% rendered
 *
 * --pilot-only  writes public/audio/manifest.pilot.json  (safe: a preview file
 *               the engine does not load by default, for frontend resolution testing)
 * --production  writes public/audio/manifest.json        (what the live site loads)
 *
 * Vocabulary is NOT touched: its own manifest and its de-DE-Neural2-B male corpus
 * are a frozen legacy exception (audio-manifests/voice-policy.json).
 */
import { existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const argv = process.argv.slice(2);
const DRY = argv.includes('--dry-run');
const PILOT_ONLY = argv.includes('--pilot-only');
const PRODUCTION = argv.includes('--production');
const read = (p: string) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

if (!PILOT_ONLY && !PRODUCTION) {
  console.error('Pass --pilot-only (preview) or --production (live). Refusing to guess.');
  process.exit(1);
}

const MANIFEST = {
  story: 'audio-manifests/story-dialogue-manifest.json',
  listening: 'audio-manifests/listening-dialogue-manifest.json',
  reading: 'audio-manifests/reading-manifest.json',
  speaking: 'audio-manifests/speaking-manifest.json',
} as const;

const scope = PILOT_ONLY
  ? new Set<string>(read('audio-manifests/audio-pilot-manifest.json').units.flatMap((u: any) => u.lines.map((l: any) => l.id)))
  : null;

interface Row { id: string; kind: string; de: string; voice: string; speakingRate: number; audioFilename: string; contentHash: string; level: string; chapter: string; }
const rows: Row[] = [];
for (const [kind, path] of Object.entries(MANIFEST)) {
  for (const e of read(path)) {
    if (scope && !scope.has(e.id)) continue;
    rows.push({ ...e, kind });
  }
}

// ---- Guardrail 1: every in-scope row must actually be rendered ------------
const missing = rows.filter((r) => !existsSync(resolve(ROOT, 'public', r.audioFilename)));
const empty = rows.filter((r) => !missing.includes(r) && statSync(resolve(ROOT, 'public', r.audioFilename)).size < 1024);
if (missing.length || empty.length) {
  console.error(`Refusing to publish a partial manifest: ${missing.length} missing, ${empty.length} under 1 KB.`);
  console.error(`   e.g. ${[...missing, ...empty].slice(0, 8).map((r) => r.id).join(', ')}`);
  process.exit(1);
}

// ---- Guardrail 2: production requires the pilot approval receipt ----------
if (PRODUCTION) {
  const stamp = resolve(ROOT, 'audio-manifests/pilot-approval.json');
  if (!existsSync(stamp)) {
    console.error('Missing audio-manifests/pilot-approval.json — the pilot has not been signed off.');
    console.error('Write it after manual listening approval:');
    console.error('  { "approvedBy": "<name>", "approvedOn": "<ISO date>", "pilotVersion": "pilot-v2", "verdict": "approved" }');
    process.exit(1);
  }
  if (read('audio-manifests/pilot-approval.json').verdict !== 'approved') {
    console.error('pilot-approval.json does not carry verdict "approved".');
    process.exit(1);
  }
}

/**
 * The engine keys by exact German string. Identical German in two chapters
 * therefore shares one entry — first render wins, and the collision is recorded
 * so the duplication is visible rather than silent.
 */
const byText: Record<string, any> = {};
const collisions: { de: string; kept: string; dropped: string }[] = [];
for (const r of rows) {
  const key = r.de;
  if (byText[key]) {
    if (byText[key].contentHash !== r.contentHash) collisions.push({ de: key.slice(0, 70), kept: byText[key].id, dropped: r.id });
    continue;
  }
  byText[key] = { id: r.id, kind: r.kind, level: r.level, chapter: r.chapter, voice: r.voice, speakingRate: r.speakingRate, file: r.audioFilename, contentHash: r.contentHash };
}

const out = {
  version: PILOT_ONLY ? 'text-keyed-pilot-preview' : 'text-keyed-production',
  generatedAt: new Date().toISOString(),
  policy: 'audio-manifests/voice-policy.json',
  scope: PILOT_ONLY ? 'pilot subset — NOT for live use' : 'full chapter corpus (story · listening · reading · speaking)',
  note: 'Vocabulary audio is served by its own manifest and is not merged here. Its male corpus stays on de-DE-Neural2-B by approved legacy exception.',
  counts: { entries: Object.keys(byText).length, sourceRows: rows.length, textCollisions: collisions.length },
  entries: byText,
};

const target = PILOT_ONLY ? 'public/audio/manifest.pilot.json' : 'public/audio/manifest.json';
console.log(`\n ${rows.length} rendered rows → ${Object.keys(byText).length} text keys (${collisions.length} duplicate German strings)`);
if (DRY) {
  console.log(` dry run — would write ${target}\n`);
} else {
  writeFileSync(resolve(ROOT, target), JSON.stringify(out, null, 2));
  writeFileSync(resolve(ROOT, 'audio-manifests/text-manifest-collisions.json'), JSON.stringify(collisions, null, 2));
  console.log(` wrote ${target}\n`);
}
