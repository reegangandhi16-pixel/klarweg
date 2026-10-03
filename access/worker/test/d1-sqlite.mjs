/* Minimal Cloudflare D1 stand-in over Node's built-in node:sqlite,
   for tests only. Implements the subset the Worker uses:
     db.prepare(sql).bind(...).first() / .all() / .run()
     db.batch([stmts])   (atomic)
   and applies the real schema.sql + every migration-*.sql in order,
   so tests run against the same schema production has.
   Production limit enforced here too: D1 refuses LIKE/GLOB patterns longer
   than 50 bytes ("LIKE or GLOB pattern too complex"); plain SQLite allows
   50 000, which is how a too-long pattern once passed every local test. */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

class Stmt {
  constructor(db, sql, params = []) { this.db = db; this.sql = sql; this.params = params; }
  bind(...params) { return new Stmt(this.db, this.sql, params); }
  _prep() { return this.db.prepare(this.sql); }
  async first(col) {
    const row = this._prep().get(...this.params);
    if (row === undefined) return null;
    const plain = { ...row };
    return col ? plain[col] : plain;
  }
  async all() { return { success: true, results: this._prep().all(...this.params).map((r) => ({ ...r })) }; }
  async run() {
    const info = this._prep().run(...this.params);
    return { success: true, meta: { changes: Number(info.changes), last_row_id: Number(info.lastInsertRowid) } };
  }
  _runSync() { return this._prep().run(...this.params); }
}

export const D1_LIKE_PATTERN_MAX_BYTES = 50;

export function createD1(workerDir) {
  const db = new DatabaseSync(':memory:', { limits: { likePatternLength: D1_LIKE_PATTERN_MAX_BYTES } });
  const files = ['schema.sql', ...fs.readdirSync(workerDir).filter((f) => /^migration-\d+.*\.sql$/.test(f)).sort()];
  for (const f of files) db.exec(fs.readFileSync(path.join(workerDir, f), 'utf8'));
  return {
    raw: db,
    prepare: (sql) => new Stmt(db, sql),
    async batch(stmts) {
      db.exec('BEGIN');
      try {
        const out = stmts.map((s) => s._runSync());
        db.exec('COMMIT');
        return out.map(() => ({ success: true }));
      } catch (e) {
        db.exec('ROLLBACK');
        throw e;
      }
    },
    async exec(sql) { db.exec(sql); },
  };
}
