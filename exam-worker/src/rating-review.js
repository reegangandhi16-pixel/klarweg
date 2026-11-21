/* Rating quality (SCORING §4.4, CALIBRATION §5.1.5): a criterion where the two independent ratings differ by two or
   more bands goes to lead review. Monitoring only — the score always follows the official aggregation. Listed only
   once the module score is final, so no one still rating can see the other ratings. A lead marks a flag as reviewed;
   that is an audit entry (no new table), and reviewed flags leave the list. */
import { fail, now, readJsonBody } from './http.js';
import { hasRole } from './auth.js';
import { BANDS } from './scoring.js';

const LEAD_ROLES = ['lead_rater', 'exam_admin'];
export const DISAGREEMENT_BANDS = 2;
const KEY_RE = /^att_[0-9a-f-]{36}:[A-Za-z0-9:_-]{1,80}:[a-z_]{1,40}$/;

async function requireLead(env, userId) { if (!(await hasRole(env, userId, LEAD_ROLES))) fail(403, 'lead_role_required'); }
const bandIndex = (b) => BANDS.indexOf(b);

/* pure: two ratings of one unit → [{ criterion, r1, r2, diff }] where |diff| >= DISAGREEMENT_BANDS */
export function disagreements(bands1, bands2) {
  const out = [];
  for (const c of Object.keys(bands1 || {})) {
    const a = bandIndex(bands1[c]), b = bandIndex((bands2 || {})[c]);
    if (a < 0 || b < 0) continue;
    if (Math.abs(a - b) >= DISAGREEMENT_BANDS) out.push({ criterion: c, r1: bands1[c], r2: bands2[c], diff: Math.abs(a - b) });
  }
  return out;
}

/* GET /admin/rating-disagreements */
export async function listDisagreements(env, userId) {
  await requireLead(env, userId);
  const rows = (await env.DB.prepare(`SELECT r1.attempt_id, r1.module, r1.item_id, r1.bands_json AS b1, r2.bands_json AS b2, r1.rater_id AS rater1, r2.rater_id AS rater2,
      s.computed_at AS final_at
      FROM ratings r1 JOIN ratings r2 ON r2.attempt_id = r1.attempt_id AND r2.item_id = r1.item_id AND r2.round = 2
      JOIN module_scores s ON s.attempt_id = r1.attempt_id AND s.module = r1.module AND s.status = 'final'
      WHERE r1.round = 1 ORDER BY r1.attempt_id, r1.item_id LIMIT 1000`).all()).results;
  const reviewed = new Set((await env.DB.prepare(`SELECT json_extract(detail_json, '$.key') AS k FROM audit_log WHERE action = 'disagreement_reviewed'`).all()).results.map((r) => r.k));
  const flags = [];
  for (const r of rows) {
    let b1, b2; try { b1 = JSON.parse(r.b1); b2 = JSON.parse(r.b2); } catch { continue; }
    for (const d of disagreements(b1, b2)) {
      const key = `${r.attempt_id}:${r.item_id}:${d.criterion}`;
      if (reviewed.has(key)) continue;
      flags.push({ key, attempt_id: r.attempt_id, module: r.module, item_id: r.item_id, ...d, rater1: r.rater1, rater2: r.rater2, final_at: r.final_at });
    }
  }
  return { ok: true, threshold: DISAGREEMENT_BANDS, flags: flags.slice(0, 200), more: flags.length > 200 };
}

/* POST /admin/rating-disagreements/review { key, note } */
export async function reviewDisagreement(env, userId, request) {
  await requireLead(env, userId);
  const body = await readJsonBody(request);
  if (typeof body.key !== 'string' || !KEY_RE.test(body.key)) fail(400, 'invalid_key');
  const note = typeof body.note === 'string' ? body.note.trim() : '';
  if (note.length < 3 || note.length > 500) fail(400, 'note_required', 'A note of 3 to 500 characters is required.');
  const list = await listDisagreements(env, userId);
  if (!list.flags.some((f) => f.key === body.key)) fail(404, 'flag_not_found');
  const [attemptId] = body.key.split(':');
  await env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json) VALUES (?1, ?2, ?3, 'disagreement_reviewed', ?4)`)
    .bind(now(env), userId, attemptId, JSON.stringify({ key: body.key, note })).run();
  return { ok: true };
}
