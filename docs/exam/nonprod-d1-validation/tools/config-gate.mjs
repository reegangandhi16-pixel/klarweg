#!/usr/bin/env node
/* LOCAL-ONLY, fail-closed gate run before EVERY state-changing step (runbook "identity gate").
     node config-gate.mjs --track idem|v10 --config <probe dir>/wrangler.toml [--stage bootstrap|bound]
       [--d1-info <saved `d1 info --json` output>] [--expect-probe off|on] [--expect-fault off|on]
   --stage bootstrap (before `d1 create`): database_id must still be the example placeholder; everything else enforced.
   --stage bound (default, every later step): database_id must be a UUID. The runbook keeps the config's probe switch
   and fault injection "off" at all times; they are switched on only per deploy with --var.
   Checks the operator's local probe config (a deliberately small TOML subset; anything outside it is REFUSED):
     - top-level keys only: name, main, compatibility_date, workers_dev, account_id; sections only [vars],
       [[d1_databases]] (exactly one), [observability]; no routes, R2, KV, services, Durable Objects, env blocks
     - name / main / database_name / binding equal the track's pinned values; workers_dev = true
     - account_id present (pins the Cloudflare account; Wrangler config docs) and database_id is a UUID
     - no forbidden production / other-Worker name anywhere in the file
     - vars: the probe switch, label and (V10) fault injection have the expected values (default: off)
   With --d1-info (the JSON printed by `wrangler d1 info <name> --json`, saved to a file): the database name and id in
   that output must equal the config's. The JSON field names of `d1 info --json` are NOT documented, so the gate accepts
   only an unambiguous match (exactly one UUID-valued field equal to the config's database_id, and a `name` field, if
   present, equal to database_name); anything else is REFUSED — compare by hand with the second reviewer instead.
   Exit 0 = pass, 1 = refused (reasons printed). Prints no secret (the config holds none). */
import fs from 'node:fs';
import { trackOf, FORBIDDEN_TARGETS } from './tracks.mjs';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function parseProbeToml(text) {
  const out = { top: {}, sections: [] }; let cur = null; const problems = [];
  text.split('\n').forEach((raw, i) => {
    const line = raw.replace(/\s+#.*$/, '').replace(/^#.*$/, '').trim();
    if (!line) return;
    let m;
    if ((m = line.match(/^\[\[([a-z0-9_.]+)\]\]$/))) { cur = { name: m[1], array: true, kv: {} }; out.sections.push(cur); return; }
    if ((m = line.match(/^\[([a-z0-9_.]+)\]$/))) { cur = { name: m[1], array: false, kv: {} }; out.sections.push(cur); return; }
    if ((m = line.match(/^([A-Za-z0-9_]+)\s*=\s*(?:"([^"\\]*)"|(true|false|[0-9]+(?:\.[0-9]+)?))$/))) {
      const v = m[2] !== undefined ? m[2] : m[3] === 'true' ? true : m[3] === 'false' ? false : Number(m[3]);
      (cur ? cur.kv : out.top)[m[1]] = v; return;
    }
    problems.push(`line ${i + 1}: unsupported syntax (only key = "string" | true | false | number)`);
  });
  return { ...out, problems };
}
export function gate({ track, configText, d1Info = null, expectProbe = 'off', expectFault = 'off', stage = 'bound' }) {
  if (!['bootstrap', 'bound'].includes(stage)) throw new Error('--stage must be bootstrap | bound');
  const t = trackOf(track); const p = parseProbeToml(configText); const why = [...p.problems];
  const allowedTop = ['name', 'main', 'compatibility_date', 'workers_dev', 'account_id'];
  for (const k of Object.keys(p.top)) if (!allowedTop.includes(k)) why.push(`top-level key "${k}" is not allowed in a probe config`);
  for (const s of p.sections) if (!['vars', 'd1_databases', 'observability'].includes(s.name)) why.push(`section [${s.name}] is not allowed (only [vars], [[d1_databases]], [observability])`);
  const d1 = p.sections.filter((s) => s.name === 'd1_databases');
  if (d1.length !== 1) why.push(`exactly one [[d1_databases]] required, found ${d1.length}`);
  if (p.top.name !== t.worker) why.push(`name must be "${t.worker}"`);
  if (p.top.main !== (track === 'idem' ? 'worker-free.mjs' : 'worker.mjs')) why.push('main is not the track\'s probe Worker');
  if (p.top.workers_dev !== true) why.push('workers_dev must be true (no routes / custom domains)');
  if (typeof p.top.account_id !== 'string' || !/^[0-9a-f]{32}$/i.test(p.top.account_id)) why.push('account_id (32 hex) must be set to pin the Cloudflare account');
  const db = d1[0] ? d1[0].kv : {};
  if (db.binding !== 'DB') why.push('the D1 binding must be "DB"');
  if (db.database_name !== t.database) why.push(`database_name must be "${t.database}"`);
  if (stage === 'bound' && !UUID.test(String(db.database_id || ''))) why.push('database_id must be a UUID (replace the example placeholder)');
  if (stage === 'bootstrap' && db.database_id !== 'REPLACE_WITH_NON_PRODUCTION_PROBE_DATABASE_ID') why.push('bootstrap: database_id must still be the example placeholder (the database does not exist yet)');
  if (stage === 'bootstrap' && d1Info !== null) why.push('bootstrap: no d1 info yet');
  for (const k of Object.keys(db)) if (!['binding', 'database_name', 'database_id'].includes(k)) why.push(`d1 key "${k}" is not allowed (e.g. preview_database_id, migrations_dir)`);
  const vars = (p.sections.find((s) => s.name === 'vars') || { kv: {} }).kv;
  if (vars[t.switchVar] !== expectProbe) why.push(`${t.switchVar} must be "${expectProbe}" for this step`);
  if (vars[track === 'idem' ? 'IDEM_PROBE_LABEL' : 'V10_PROBE_LABEL'] !== t.label) why.push(`label var must be "${t.label}"`);
  if (track === 'v10' && vars.V10_FAULT_INJECTION !== expectFault) why.push(`V10_FAULT_INJECTION must be "${expectFault}" for this step`);
  if (track === 'idem' && 'V10_FAULT_INJECTION' in vars) why.push('V10_FAULT_INJECTION does not belong in the Track 1 config');
  const values = [...Object.values(p.top), ...p.sections.flatMap((s) => Object.values(s.kv))].map(String);
  for (const f of FORBIDDEN_TARGETS) if (values.includes(f)) why.push(`forbidden name "${f}" in the probe config`);
  if (d1Info !== null) {
    let info; try { info = typeof d1Info === 'string' ? JSON.parse(d1Info) : d1Info; } catch { info = undefined; }
    const flat = []; const walk = (o) => { if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) { if (v && typeof v === 'object') walk(v); else flat.push([k, v]); } };
    walk(info);
    const uuids = flat.filter(([, v]) => typeof v === 'string' && UUID.test(v));
    const names = flat.filter(([k]) => k === 'name');
    if (!info) why.push('d1 info output is not JSON');
    else if (uuids.length !== 1) why.push(`d1 info output has ${uuids.length} UUID fields: ambiguous — compare name and id by hand with the second reviewer`);
    else if (uuids[0][1].toLowerCase() !== String(db.database_id).toLowerCase()) why.push('d1 info id ≠ config database_id: STOP (wrong database or stale config)');
    if (names.length > 1 || (names.length === 1 && names[0][1] !== t.database)) why.push('d1 info name ≠ the track\'s database name: STOP');
  }
  return { track, stage, pass: why.length === 0, reasons: why };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
  try {
    const r = gate({ track: arg('track'), configText: fs.readFileSync(arg('config'), 'utf8'), d1Info: arg('d1-info') ? fs.readFileSync(arg('d1-info'), 'utf8') : null,
      expectProbe: arg('expect-probe', 'off'), expectFault: arg('expect-fault', 'off'), stage: arg('stage', 'bound') });
    console.log(JSON.stringify(r, null, 2)); process.exit(r.pass ? 0 : 1);
  } catch (e) { console.error(`REFUSED: ${e.message}`); process.exit(1); }
}
