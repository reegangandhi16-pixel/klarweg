/* The active learner release set (EXAM_RELEASE_FORMS) and whether it may be used at all. Server-side only: the client
   never names a form, and nothing here substitutes one form for another. */
import { releaseForms, moduleOnly } from './flags.js';
import { log } from './log.js';

/* → { block: null | 'release_unconfigured' | 'release_misconfigured', ids: null | string[] }
   ids null = no release set (test/dev configuration: every live form of the mode's kinds). */
export async function releaseSet(env) {
  const rf = releaseForms(env);
  if (!rf) return { block: moduleOnly(env) ? 'release_unconfigured' : null, ids: null };   // a self-practice release must name its forms
  if (!rf.ok) { log(env, 'release_misconfigured', { reason: 'malformed_or_duplicate_ids' }); return { block: 'release_misconfigured', ids: null }; }
  const rows = (await env.DB.prepare(`SELECT id, kind, purpose, status FROM forms WHERE id IN (${rf.ids.map((_, i) => `?${i + 1}`).join(',')})`)
    .bind(...rf.ids).all()).results;
  const byId = Object.fromEntries(rows.map((r) => [r.id, r]));
  const bad = rf.ids.filter((id) => {
    const f = byId[id];
    return !f || f.status !== 'live' || (f.kind === 'synthetic' && f.purpose !== 'practice');
  });
  if (bad.length) { log(env, 'release_misconfigured', { reason: 'ineligible_forms', forms: bad }); return { block: 'release_misconfigured', ids: null }; }
  return { block: null, ids: rf.ids };
}

export const RELEASE_MESSAGES = {
  release_unconfigured: 'No learner release set is configured (EXAM_RELEASE_FORMS).',
  release_misconfigured: 'The configured learner release set is invalid; nothing is assigned until it is corrected.'
};
