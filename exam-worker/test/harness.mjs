/* Test harness for klarweg-exam: in-memory D1 (node:sqlite, real migrations),
   in-memory private R2, the synthetic release built in-process and imported
   exactly as production would, a controllable clock, and a request helper
   that calls the Worker the way the Access proxy does. */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { buildRelease } from '../../exam-content/tools/build-release.mjs';

export const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ROOT = path.resolve(WORKER_DIR, '..');
export const FORM_DIR = path.join(ROOT, 'exam-content/forms/synthetic/b1-synthetic-s0');
export const PROXY_SECRET = 'test-exam-proxy-secret-0123456789abcdef';
export const MEDIA_SECRET = 'test-exam-media-secret-0123456789abcdef';

class Stmt {
  constructor(db, sql, params = []) { this.db = db; this.sql = sql; this.params = params; }
  bind(...p) { return new Stmt(this.db, this.sql, p.map((v) => (v === undefined ? null : v))); }
  async first(col) { const r = this.db.prepare(this.sql).get(...this.params); if (r === undefined) return null; const o = { ...r }; return col ? o[col] : o; }
  async all() { return { success: true, results: this.db.prepare(this.sql).all(...this.params).map((r) => ({ ...r })) }; }
  async run() { const i = this.db.prepare(this.sql).run(...this.params); return { success: true, meta: { changes: Number(i.changes), last_row_id: Number(i.lastInsertRowid) } }; }
  _runSync() { return this.db.prepare(this.sql).run(...this.params); }
}

export function createExamD1() {
  const db = new DatabaseSync(':memory:', { limits: { likePatternLength: 50 } });
  const dir = path.join(WORKER_DIR, 'migrations');
  for (const f of fs.readdirSync(dir).filter((f) => /^\d{4}_.*\.sql$/.test(f)).sort()) db.exec(fs.readFileSync(path.join(dir, f), 'utf8'));
  return {
    raw: db,
    prepare: (sql) => new Stmt(db, sql),
    async batch(stmts) {
      db.exec('BEGIN');
      try { const out = stmts.map((s) => s._runSync()); db.exec('COMMIT'); return out.map(() => ({ success: true })); } catch (e) { db.exec('ROLLBACK'); throw e; }
    },
    async exec(sql) { db.exec(sql); }
  };
}

export function makeBucket() {
  const objects = new Map();
  return {
    objects,
    async put(key, bytes, opts) { objects.set(key, { bytes: Buffer.from(bytes instanceof ArrayBuffer ? new Uint8Array(bytes) : bytes), opts }); },
    async get(key) {
      const o = objects.get(key);
      if (!o) return null;
      return { size: o.bytes.length, body: new Blob([o.bytes]).stream(), async arrayBuffer() { return o.bytes.buffer.slice(o.bytes.byteOffset, o.bytes.byteOffset + o.bytes.length); },
        async json() { return JSON.parse(o.bytes.toString('utf8')); } };
    }
  };
}

let cachedBuild = null;
export function syntheticBuild() {
  if (!cachedBuild) cachedBuild = buildRelease({ release: 'r000', formDirs: [FORM_DIR], builtAt: '2026-10-04T00:00:00.000Z' });
  return cachedBuild;
}

export function makeEnv({ flags = {}, start = Date.UTC(2026, 9, 4, 9, 0, 0) } = {}) {
  const build = syntheticBuild();
  const DB = createExamD1();
  DB.raw.exec(build.sql);
  const CONTENT = makeBucket();
  for (const [k, buf] of build.files) CONTENT.objects.set(k, { bytes: buf });
  const clock = { t: start };
  const env = {
    DB, CONTENT, RECORDINGS: makeBucket(),
    EXAM_PROXY_SECRET: PROXY_SECRET, EXAM_MEDIA_SECRET: MEDIA_SECRET,
    EXAM_ENABLED: 'on', EXAM_SYNTHETIC_FORMS: 'on', EXAM_MOCK_FORMS: 'off', EXAM_PRODUCTION_FORMS: 'off',
    ...flags,
    __clock: () => clock.t,
    __logs: []
  };
  return { env, clock, build, advance: (ms) => { clock.t += ms; } };
}

export const newUser = () => `usr_${crypto.randomUUID()}`;
export const rid = () => `rq_${crypto.randomUUID().replace(/-/g, '')}`.slice(0, 40);
export const dev = () => `dev_${crypto.randomUUID().replace(/-/g, '')}`.slice(0, 40);

export async function grant(env, userId, scope = 'synthetic', level = 'B1') {
  await env.DB.prepare('INSERT INTO exam_access (id, user_id, level, scope, source, granted_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6)')
    .bind(`xa_${crypto.randomUUID()}`, userId, level, scope, 'test', Math.floor(env.__clock() / 1000)).run();
}
export async function role(env, userId, r) {
  await env.DB.prepare('INSERT INTO exam_roles (user_id, role, granted_at) VALUES (?1, ?2, ?3)').bind(userId, r, env.__clock()).run();
}

export async function call(env, method, p, { user, body, raw, contentType, proxyAuth = PROXY_SECRET, headers = {} } = {}) {
  const h = { ...headers };
  if (proxyAuth) h['x-kw-proxy-auth'] = proxyAuth;
  if (user) h['x-kw-user'] = user;
  let payload;
  if (raw) { payload = raw; h['content-type'] = contentType || 'audio/webm'; }
  else if (body !== undefined) { payload = JSON.stringify(body); h['content-type'] = 'application/json'; }
  const res = await worker.fetch(new Request('https://klarweg-exam.internal' + p, { method, headers: h, body: payload }), env);
  const buf = Buffer.from(await res.arrayBuffer());
  let json = null;
  try { json = JSON.parse(buf.toString('utf8')); } catch {}
  return { status: res.status, json, buf, headers: res.headers };
}

export const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');

/* Convenience: create an attempt for a fresh, entitled user. */
export async function setup(opts = {}) {
  const h = makeEnv(opts);
  const user = newUser();
  await grant(h.env, user);
  const device = dev();
  const r = await call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: device } });
  if (r.status !== 200) throw new Error('create failed ' + JSON.stringify(r.json));
  return { ...h, user, device, attempt: r.json.attempt_id, lease: r.json.lease.lease_id, created: r.json };
}

export function keysFor(build) {
  const k = build.files.get('releases/r000/keys/frm_b1_synthetic_s0_1.json');
  return JSON.parse(k.toString('utf8')).keys;
}
export function pkgFor(build, module) {
  return JSON.parse(build.files.get(`releases/r000/forms/frm_b1_synthetic_s0_1/module-${module}.json`).toString('utf8'));
}
export function scoredItems(pkg) {
  const out = [];
  for (const p of pkg.parts) for (const t of p.tasks) for (const it of t.items) if (!it.is_example) out.push(it);
  return out;
}
