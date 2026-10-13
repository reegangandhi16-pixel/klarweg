/* Speaking-recording retention (register OD-21, LOCKED mechanism: admin-configurable policy; conservative default
   30 days after the final rating; deletion jobs audit-logged; SPEAKING §6; RUNBOOK "Recordings R2").

   Policy value: Worker variable EXAM_RECORDING_RETENTION_DAYS (integer 1–3650). While it is unset nothing is ever
   deleted (RUNBOOK: "Until it is set, do not delete"); an invalid value also deletes nothing and is logged without
   the value. It runs only from the cron sweep, which stops when EXAM_ENABLED is off (the RUNBOOK kill switch).

   Eligible: a non-voided attempt whose Sprechen module is submitted and scored `final`, whose final rating (the later
   of the last Sprechen rating and the final score computation) is at least the policy age, and which still has
   recording rows. Unrated, pending and voided attempts are never touched (no policy covers them yet).

   Order and failure behaviour:
   1. R2 objects are deleted first, in multi-key calls (≤ R2_DELETE_MAX keys each). A key whose call failed keeps its
      row; R2 deletes are idempotent, so a retry is safe.
   2. ONE D1 batch (a transaction) then writes the audit row and deletes exactly the rows of the deleted objects (and
      the turn rows once no chunk is left). Audit and deletion commit together or not at all. The audit insert is
      conditional on recording rows still existing, so an overlapping or repeated run that finds them already gone
      records nothing.
   3. If that batch fails, the objects are already gone but their rows remain: for that window a row points at a
      missing object (a reader gets an unavailable error, never other data). The rows keep the attempt eligible, so the next run
      repeats steps 1–2 and completes it; a best-effort `recordings_delete_failed` audit row records the window.
   Rows are never deleted before their objects: the reverse order could leave untracked audio behind. */
import { log } from './log.js';

export const RETENTION_ATTEMPTS_PER_RUN = 20;
export const R2_DELETE_MAX = 1000;   // R2 binding: up to 1000 keys per delete call
const DAY_MS = 86_400_000;
const ACTOR = 'system:retention';

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
      JOIN attempts a ON a.id = s.attempt_id AND a.status != 'voided'
      JOIN attempt_modules m ON m.attempt_id = s.attempt_id AND m.module = 'sprechen' AND m.status = 'submitted'
      WHERE s.module = 'sprechen' AND s.status = 'final'
        AND (EXISTS (SELECT 1 FROM recording_chunks c WHERE c.attempt_id = s.attempt_id)
          OR EXISTS (SELECT 1 FROM recording_turns u WHERE u.attempt_id = s.attempt_id))
        AND final_at <= ?1
      ORDER BY final_at LIMIT ?2`).bind(t - days * DAY_MS, limit).all()).results;
}

const auditIfRows = (env, t, attemptId, action, detail) => env.DB.prepare(`INSERT INTO audit_log (at, actor, attempt_id, action, detail_json)
    SELECT ?1, ?2, ?3, ?4, ?5 WHERE EXISTS (SELECT 1 FROM recording_chunks WHERE attempt_id = ?3) OR EXISTS (SELECT 1 FROM recording_turns WHERE attempt_id = ?3)`)
  .bind(t, ACTOR, attemptId, action, JSON.stringify(detail));

async function deleteAttemptRecordings(env, t, attemptId, policyDays, finalAt) {
  const chunks = (await env.DB.prepare('SELECT part, turn, seq, r2_key, bytes FROM recording_chunks WHERE attempt_id = ?1').bind(attemptId).all()).results;
  const removed = [];
  for (let i = 0; i < chunks.length; i += R2_DELETE_MAX) {
    const group = chunks.slice(i, i + R2_DELETE_MAX);
    try { await env.RECORDINGS.delete(group.map((c) => c.r2_key)); removed.push(...group); }
    catch (e) { log(env, 'retention_object_error', { attempt: attemptId, error: (e && e.name) || 'Error' }); }
  }
  const complete = removed.length === chunks.length;
  const detail = { policy_days: policyDays, final_at: finalAt, chunks_deleted: removed.length, bytes_deleted: removed.reduce((n, c) => n + c.bytes, 0),
    chunks_remaining: chunks.length - removed.length };
  const stmts = [auditIfRows(env, t, attemptId, complete ? 'recordings_deleted' : 'recordings_delete_incomplete', detail),
    ...removed.map((c) => env.DB.prepare('DELETE FROM recording_chunks WHERE attempt_id = ?1 AND part = ?2 AND turn = ?3 AND seq = ?4 AND r2_key = ?5')
      .bind(attemptId, c.part, c.turn, c.seq, c.r2_key))];
  if (complete) stmts.push(env.DB.prepare('DELETE FROM recording_turns WHERE attempt_id = ?1').bind(attemptId));
  try { await env.DB.batch(stmts); }
  catch (e) {
    log(env, 'retention_db_error', { attempt: attemptId, error: (e && e.name) || 'Error' });
    if (removed.length) {
      try { await auditIfRows(env, t, attemptId, 'recordings_delete_failed', { ...detail, chunks_remaining: chunks.length, stage: 'db' }).run(); }
      catch (e2) { log(env, 'retention_audit_error', { attempt: attemptId, error: (e2 && e2.name) || 'Error' }); }
    }
    return { attempt_id: attemptId, complete: false, ...detail, chunks_deleted: 0, chunks_remaining: chunks.length };
  }
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
    try { deleted.push(await deleteAttemptRecordings(env, t, row.attempt_id, policy.days, row.final_at)); }
    catch (e) { log(env, 'retention_error', { attempt: row.attempt_id, error: (e && e.name) || 'Error' }); }
  }
  log(env, 'retention', { days: policy.days, attempts: deleted.length });
  return { enabled: true, days: policy.days, deleted };
}
