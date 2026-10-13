/* Speaking-recording retention (register OD-21, LOCKED mechanism: admin-configurable policy; conservative default
   30 days after the final rating; deletion jobs audit-logged; SPEAKING §6; RUNBOOK "Recordings R2").

   Policy value: Worker variable EXAM_RECORDING_RETENTION_DAYS (integer 1–3650). While it is unset nothing is ever
   deleted (RUNBOOK: "Until it is set, do not delete"); an invalid value also deletes nothing and is logged.

   Eligible: an attempt whose Sprechen module is submitted and scored `final`, whose final rating (the later of the
   last Sprechen rating and the final score computation) is at least the policy age, and which still has recordings.
   Unrated, pending or voided attempts are never touched (no policy covers them yet).

   Deletion: every R2 object first, then exactly those chunk rows, then the turn rows once no chunk is left, then one
   audit row. A failed R2 delete leaves its row in place, so the next run retries it and no row ever points at
   nothing. Ratings, scores, written texts and results are not touched. */
import { log } from './log.js';
import { audit } from './core.js';

export const RETENTION_ATTEMPTS_PER_RUN = 20;
const DAY_MS = 86_400_000;

export function retentionPolicy(env) {
  const v = env.EXAM_RECORDING_RETENTION_DAYS;
  if (v === undefined || v === null || v === '') return { enabled: false, reason: 'not_configured' };
  const days = Number(v);
  if (!/^\d+$/.test(String(v).trim()) || !Number.isInteger(days) || days < 1 || days > 3650) return { enabled: false, reason: 'invalid_value' };
  return { enabled: true, days };
}

export async function eligibleForDeletion(env, days, t, limit = RETENTION_ATTEMPTS_PER_RUN) {
  return (await env.DB.prepare(`SELECT s.attempt_id,
        MAX(s.computed_at, COALESCE((SELECT MAX(r.submitted_at) FROM ratings r WHERE r.attempt_id = s.attempt_id AND r.module = 'sprechen'), 0)) AS final_at
      FROM module_scores s
      JOIN attempt_modules m ON m.attempt_id = s.attempt_id AND m.module = 'sprechen' AND m.status = 'submitted'
      WHERE s.module = 'sprechen' AND s.status = 'final'
        AND (EXISTS (SELECT 1 FROM recording_chunks c WHERE c.attempt_id = s.attempt_id)
          OR EXISTS (SELECT 1 FROM recording_turns u WHERE u.attempt_id = s.attempt_id))
        AND final_at <= ?1
      ORDER BY final_at LIMIT ?2`).bind(t - days * DAY_MS, limit).all()).results;
}

async function deleteAttemptRecordings(env, attemptId, policyDays, finalAt) {
  const chunks = (await env.DB.prepare('SELECT part, turn, seq, r2_key, bytes FROM recording_chunks WHERE attempt_id = ?1').bind(attemptId).all()).results;
  const removed = [];
  for (const c of chunks) {
    try { await env.RECORDINGS.delete(c.r2_key); removed.push(c); }
    catch (e) { log(env, 'retention_object_error', { attempt: attemptId, error: (e && e.name) || 'Error' }); }
  }
  const stmts = removed.map((c) => env.DB.prepare('DELETE FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 AND seq = ?4 AND r2_key = ?5')
    .bind(attemptId, c.part, c.turn, c.seq, c.r2_key));
  const complete = removed.length === chunks.length;
  if (complete) stmts.push(env.DB.prepare('DELETE FROM recording_turns WHERE attempt_id = ?1').bind(attemptId));
  if (stmts.length) await env.DB.batch(stmts);
  const detail = { policy_days: policyDays, final_at: finalAt, chunks_deleted: removed.length, bytes_deleted: removed.reduce((n, c) => n + c.bytes, 0),
    chunks_remaining: chunks.length - removed.length };
  await audit(env, 'system:retention', attemptId, complete ? 'recordings_deleted' : 'recordings_delete_incomplete', detail);
  return { attempt_id: attemptId, complete, ...detail };
}

/* One retention pass (called from the scheduled handler). Returns a summary; never throws for a single attempt. */
export async function runRetention(env, t) {
  const policy = retentionPolicy(env);
  if (!policy.enabled) {
    if (policy.reason === 'invalid_value') log(env, 'retention_misconfigured', {});
    return { enabled: false, reason: policy.reason, deleted: [] };
  }
  const deleted = [];
  for (const row of await eligibleForDeletion(env, policy.days, t)) {
    try { deleted.push(await deleteAttemptRecordings(env, row.attempt_id, policy.days, row.final_at)); }
    catch (e) { log(env, 'retention_error', { attempt: row.attempt_id, error: (e && e.name) || 'Error' }); }
  }
  log(env, 'retention', { days: policy.days, attempts: deleted.length });
  return { enabled: true, days: policy.days, deleted };
}
