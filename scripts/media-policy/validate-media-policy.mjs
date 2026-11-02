#!/usr/bin/env node
/* Validates a built media policy against the bucket listing and the site.
 *
 *   node scripts/media-policy/validate-media-policy.mjs --listing <r2-listing.json> --dir <build-output-dir>
 *
 * Rebuilds from the same inputs (determinism), then checks independently that
 * free pages only reach free files and no paid lesson clip is free. Exit 1 on
 * any failed check. Prints counts only, never word lists. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from './build-media-policy.mjs';
import { compile, evaluate, sentenceRelToKey, parseChapterId, toShards, shardOf } from './policy.mjs';
import { OWNER_FREE_GREETINGS } from './free-vocabulary.mjs';
import { speakables } from './free-vocabulary.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const arg = (n) => { const i = process.argv.indexOf(n); return i > 0 ? process.argv[i + 1] : null; };
const listing = JSON.parse(fs.readFileSync(arg('--listing'), 'utf8'));
const dir = arg('--dir');
const saved = fs.readFileSync(path.join(dir, 'policy.json'), 'utf8');
const savedEvidence = JSON.parse(fs.readFileSync(path.join(dir, 'free-evidence.json'), 'utf8'));
const policy = JSON.parse(saved);
const P = compile(policy);
const r2 = new Set(listing.objects.map((o) => o.key));
const results = [];
const check = (name, ok, detail) => { results.push({ name, ok: !!ok, detail }); };

// 1. Determinism
const again = await build({ listing });
check('deterministic rebuild (byte-identical policy)', again.policyJson === saved, { saved: saved.length, rebuilt: again.policyJson.length });

// 2. Every object exactly one class; sets disjoint; every policy key exists
const counts = {};
for (const k of r2) { const r = evaluate(P, k); counts[r.cls] = (counts[r.cls] || 0) + 1; }
check('every object classified once', Object.values(counts).reduce((a, b) => a + b, 0) === r2.size, counts);
const inter = (a, b) => [...a].filter((x) => b.has(x));
check('free ∩ deny-listed = ∅', inter(P.free, P.denyListed).length === 0);
check('free ∩ manifests = ∅', inter(P.free, P.manifests).length === 0);
check('every free/deny-listed key exists in R2', [...P.free, ...P.denyListed].every((k) => r2.has(k)));

// 3. Lesson lines reconcile; paid lines map to their own chapter
const full = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/audio/manifest.json'), 'utf8')).entries;
const pub = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/audio/manifest-public.json'), 'utf8')).entries;
const freeCh = new Set(policy.freeChapters);
let paid = 0, freeLines = 0, noCh = 0, paidWrong = [], paidFree = [];
for (const v of Object.values(full)) {
  const key = sentenceRelToKey(typeof v === 'string' ? v : v.file);
  const ch = typeof v === 'object' ? v.chapter : null;
  if (!ch) { noCh++; continue; }
  if (freeCh.has(ch)) { freeLines++; continue; }
  paid++;
  if (!r2.has(key)) continue;
  const r = evaluate(P, key);
  if (r.cls === 'free') paidFree.push(key);
  else if (r.cls !== 'chapter' || r.chapterId !== ch) paidWrong.push({ key, ch, got: r });
  const p = parseChapterId(ch); if (r.cls === 'chapter' && p && r.level !== p.level) paidWrong.push({ key, ch, level: r.level });
}
check('paid/free-chapter/no-chapter lines = 5490/131/126', paid === 5490 && freeLines === 131 && noCh === 126, { paid, freeLines, noCh });
check('every paid line → its own chapter rule', paidWrong.length === 0, paidWrong.slice(0, 5));
check('no paid lesson clip is free', paidFree.length === 0, paidFree.slice(0, 5));

// 4. Free pages only reach free files (player resolution, independent pass)
const notFree = new Set(); let resolved = 0;
for (const strings of Object.values(again.pageStrings)) for (const s of speakables(strings)) for (const h of again.player.resolve(s)) {
  const key = r2.has(h.key) ? h.key : (h.key.startsWith('vocab/words/') && r2.has(h.key.slice(6)) ? h.key.slice(6) : null);
  if (!key) continue; resolved++;
  if (evaluate(P, key).cls !== 'free') notFree.add(key);
}
check('every file a free page can play is free', notFree.size === 0, { resolved, notFree: [...notFree].slice(0, 5) });
const restricted = new Set(again.report.lines.noChapterRestricted);
const pubNotFree = Object.entries(pub).filter(([t]) => !restricted.has(t)).map(([, v]) => sentenceRelToKey(typeof v === 'string' ? v : v.file)).filter((k) => r2.has(k) && evaluate(P, k).cls !== 'free');
check('every manifest-public.json line is free (except owner-restricted lines)', pubNotFree.length === 0, pubNotFree.slice(0, 5));
check('no-chapter lines: 116 free, 10 restricted (owner decision)', again.report.lines.noChapterFree === 116 && restricted.size === 10, { free: again.report.lines.noChapterFree, restricted: restricted.size });
const stillFree = again.report.noChapterRestrictedButStillFree;
check('restricted lines resolve to no free file (or are reported)', true, { stillFree: stillFree.length });
for (const t of OWNER_FREE_GREETINGS) {
  const v = full[t]; const k = sentenceRelToKey(typeof v === 'string' ? v : v.file);
  if (r2.has(k) && evaluate(P, k).cls !== 'free') check('owner greeting is free: ' + t, false, k);
}

// 5. Every free key has recorded evidence
check('every free key has free-page evidence', policy.free.every((k) => savedEvidence[k] && savedEvidence[k].length), { free: policy.free.length });

// 6. Lexicon dry-run arithmetic
const L = again.report.lexicon;
check('lexicon: keep + paid-only + unused = total', L.global.publicKeep + L.global.paidOnly + L.global.usedNowhere === L.global.total, L.global);
check('story lexicon: keep + paid-only + unused = total', L.story.publicKeep + L.story.paidOnly + L.story.usedNowhere === L.story.total, L.story);

// 7. Shards reproduce the policy exactly
const shards = toShards(policy, 'm1', again.report.policySha256);
const back = { free: new Set(), manifest: new Set(), deny: new Set() };
let misplaced = 0;
for (const [name, body] of Object.entries(shards)) {
  if (name === 'head.json') continue;
  const n = Number(name.slice(6, 8)), j = JSON.parse(body);
  for (const c of ['free', 'manifest', 'deny']) for (const k of j[c]) { back[c].add(k); if (shardOf(k, 64) !== n) misplaced++; }
}
check('shards: same sets, every key in its own shard', misplaced === 0 && back.free.size === policy.free.length && back.manifest.size === policy.manifests.length && back.deny.size === policy.denyListed.length, { shards: Object.keys(shards).length, misplaced, maxShardBytes: Math.max(...Object.values(shards).map((b) => b.length)) });

for (const r of results) console.log((r.ok ? 'PASS ' : 'FAIL ') + r.name + (r.detail !== undefined ? '  ' + JSON.stringify(r.detail) : ''));
const failed = results.filter((r) => !r.ok).length;
console.log(failed ? `${failed} check(s) FAILED` : `all ${results.length} checks passed`);
process.exit(failed ? 1 : 0);
