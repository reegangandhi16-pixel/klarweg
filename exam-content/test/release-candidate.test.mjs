/* tools/release-candidate.mjs: a single-module learner release from exactly the named practice forms, with the matching
   EXAM_RELEASE_FORMS, refusing S0, unknown/duplicate/empty lists and any form without recorded EX-03 approval unless
   explicitly built as an internal, NOT APPROVED candidate. The approval cases use synthetic review records (not real
   reviews) only to exercise the gate. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { releaseCandidate, selectForms } from '../tools/release-candidate.mjs';
import { reviewRecord } from '../tools/review-sheet.mjs';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { releaseForms } from '../../exam-worker/src/flags.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLI = path.join(ROOT, 'tools/release-candidate.mjs');
const IDS = ['frm:b1:synthetic-p3@1', 'frm:b1:synthetic-p8@1', 'frm:b1:synthetic-p13@1'];
const builtAt = '2026-10-20T00:00:00.000Z';

/* synthetic records for one form: every Lesen item approved by three distinct slots (gate exercise only) */
function lesenApprovedRecords(dir, name) {
  const f = PRACTICE_FORMS.find((x) => x.name === name);
  const moduleOf = Object.fromEntries(JSON.parse(f.files['items.json']).map((it) => [it.id, it.module]));
  for (const slot of ['A', 'B', 'C']) {
    const r = reviewRecord(f);
    r.reviewer = { slot, reviewer_id: `test-${slot}`, role: slot === 'C' ? 'originality' : 'content', native_german: true, date: '2026-10-20' };
    for (const it of r.items) if (moduleOf[it.item_id] === 'lesen') { it.verdict = 'approve'; if (slot === 'C') it.accessibility = 'approve'; else { it.ambiguity_risk = 0; it.inference_demand = 3; it.distractor_strength = 3; } }
    if (slot === 'C') r.originality_signoff.verdict = 'approve';
    fs.writeFileSync(path.join(dir, `${name}-${slot}.json`), JSON.stringify(r));
  }
}

test('RELEASE CANDIDATE: exactly the named forms, in order; settings match and parse as a valid Worker release set', () => {
  const r = releaseCandidate({ forms: 'p3,p8,p13', module: 'lesen', release: 'r101', internalCandidate: true, builtAt });
  assert.deepEqual(r.build.manifest.forms.map((f) => f.id), IDS);
  assert.equal(r.build.manifest.purpose, 'learner');
  assert.ok(![...r.build.files.keys()].some((k) => /synthetic_s0|synthetic-s0/.test(k)), 'no S0 file in the release');
  assert.ok(![...r.build.files.keys()].some((k) => /synthetic_p(1|2|4|5|6|7|9|10|11|12|14|15)_/.test(k)), 'no unlisted form');
  assert.deepEqual(r.settings, { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: IDS.join(',') });
  assert.deepEqual(releaseForms(r.settings), { ok: true, ids: IDS });
  assert.equal(r.approved, false);
  assert.match(r.record.status, /NOT APPROVED/);
  assert.deepEqual(r.record.approval.map((a) => a.status), ['no review records', 'no review records', 'no review records']);
  assert.ok(r.record.forms.every((f) => /^[0-9a-f]{64}$/.test(f.content_sha256)));
});

test('RELEASE CANDIDATE: refuses S0, unknown, duplicate, empty lists and unknown modules', () => {
  for (const [forms, re] of [['s0', /unknown practice form "s0"/], ['p3,s0', /unknown practice form "s0"/], ['p99', /unknown practice form/],
    ['p3,p3', /duplicate/], ['', /no forms named/], [' , ', /no forms named/], [undefined, /no forms named/]]) {
    assert.throws(() => selectForms(forms), re, String(forms));
  }
  assert.throws(() => releaseCandidate({ forms: 'p3', module: 'lessen', release: 'r101', internalCandidate: true, builtAt }), /unknown module/);
});

test('RELEASE CANDIDATE: without approval records a learner build is refused; with them it needs every form approved', () => {
  assert.throws(() => releaseCandidate({ forms: 'p3,p8,p13', module: 'lesen', release: 'r101', builtAt }), /not approved for P3 \(no review records\), P8/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-rc-'));
  try {
    lesenApprovedRecords(dir, 'P3');
    // P3 Lesen approved, P8 not reviewed → refused, naming P8 only
    assert.throws(() => releaseCandidate({ forms: 'p3,p8', module: 'lesen', release: 'r101', approvedDir: dir, builtAt }), (e) => /P8 \(not started\)/.test(e.message) && !/P3 \(/.test(e.message));
    const ok = releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', approvedDir: dir, builtAt });
    assert.equal(ok.approved, true); assert.deepEqual(ok.record.approval.map((a) => a.status), ['approved']);
    assert.doesNotMatch(ok.record.status, /NOT APPROVED/);
    // the Lesen approval does not cover Hören
    assert.throws(() => releaseCandidate({ forms: 'p3', module: 'hoeren', release: 'r101', approvedDir: dir, builtAt }), /hoeren not approved for P3/);
    assert.throws(() => releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', approvedDir: dir, internalCandidate: true, builtAt }), /exclude each other/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test('RELEASE CANDIDATE CLI: writes release + candidate.json + worker-settings.env outside the repo only; exit 1 on refusal', () => {
  const inRepo = spawnSync(process.execPath, [CLI, '--forms', 'p3', '--internal-candidate', '--out', path.join(ROOT, 'tmp-rc')], { encoding: 'utf8' });
  assert.equal(inRepo.status, 1); assert.match(inRepo.stderr, /inside the repository/);
  assert.equal(fs.existsSync(path.join(ROOT, 'tmp-rc')), false);
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-rc-cli-'));
  try {
    const refused = spawnSync(process.execPath, [CLI, '--forms', 'p3,p8,p13', '--module', 'lesen', '--out', out], { encoding: 'utf8' });
    assert.equal(refused.status, 1); assert.match(refused.stderr, /refusing a learner release/);
    const r = spawnSync(process.execPath, [CLI, '--forms', 'p3,p8,p13', '--module', 'lesen', '--release', 'r101', '--internal-candidate', '--out', out], { encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    const env = fs.readFileSync(path.join(out, 'worker-settings.env'), 'utf8');
    assert.match(env, /^# INTERNAL CANDIDATE — NOT APPROVED/);
    assert.match(env, new RegExp(`EXAM_RELEASE_FORMS=${IDS.join(',').replace(/[.@]/g, '\\$&')}`));
    assert.equal(JSON.parse(fs.readFileSync(path.join(out, 'candidate.json'), 'utf8')).forms.length, 3);
    assert.ok(fs.existsSync(path.join(out, 'registry.sql')));
    assert.doesNotMatch(fs.readFileSync(path.join(out, 'registry.sql'), 'utf8'), /synthetic-s0/);
  } finally { fs.rmSync(out, { recursive: true, force: true }); }
});

test('RELEASE CANDIDATE: fails closed on stale, malformed, unassigned or inconsistent records, even next to valid approvals', () => {
  const cases = {
    'stale record (older revision)': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-A.json'))); r.content_sha256 = '0'.repeat(64); fs.writeFileSync(path.join(dir, 'P3-old.json'), JSON.stringify(r)); },
    'unreadable JSON': (dir) => fs.writeFileSync(path.join(dir, 'broken.json'), '{ not json'),
    'record for an unknown form': (dir) => fs.writeFileSync(path.join(dir, 'x.json'), JSON.stringify({ form_id: 'frm:b1:synthetic-p99@1' })),
    'record with an invalid verdict': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-B.json'))); r.items[0].verdict = 'ok'; fs.writeFileSync(path.join(dir, 'P3-B.json'), JSON.stringify(r)); },
    'tampered item fingerprint': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-C.json'))); r.items[0].item_sha256 = 'f'.repeat(64); fs.writeFileSync(path.join(dir, 'P3-C.json'), JSON.stringify(r)); },
    'same person in two slots (O1)': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-B.json'))); r.reviewer.reviewer_id = 'test-A'; fs.writeFileSync(path.join(dir, 'P3-B.json'), JSON.stringify(r)); },
    'two records for one slot (O1)': (dir) => fs.copyFileSync(path.join(dir, 'P3-A.json'), path.join(dir, 'P3-A2.json')),
    'originality not signed by C': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-C.json'))); r.originality_signoff.verdict = ''; fs.writeFileSync(path.join(dir, 'P3-C.json'), JSON.stringify(r)); },
    'one Lesen item revised': (dir) => { const r = JSON.parse(fs.readFileSync(path.join(dir, 'P3-A.json'))); r.items[0].verdict = 'revise'; r.items[0].notes = 'x'; fs.writeFileSync(path.join(dir, 'P3-A.json'), JSON.stringify(r)); },
    'slot C missing': (dir) => fs.rmSync(path.join(dir, 'P3-C.json'))
  };
  for (const [name, spoil] of Object.entries(cases)) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-rc-bad-'));
    try {
      lesenApprovedRecords(dir, 'P3');
      assert.equal(releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', approvedDir: dir, builtAt }).approved, true, `control before: ${name}`);
      spoil(dir);
      assert.throws(() => releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', approvedDir: dir, builtAt }), /refusing a learner release/, name);
    } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  }
});
