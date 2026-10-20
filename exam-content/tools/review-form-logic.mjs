/* Pure logic of the fillable EX-03 review form (tools/review-form.mjs). No imports and no DOM: the same functions run in
   the reviewer's browser (inlined into the page) and in the Node tests. The record they produce is the unchanged
   review-sheet template with the reviewer's answers filled in; tools/review-status.mjs remains the only judge. */

/* state: { reviewer: { slot, reviewer_id, role, native_german, date }, items: { id: {...} }, tasks: { id: {...} },
   originality: { verdict, notes } } → a record (a deep copy of the template; only known fields are copied) */
export function fillRecord(template, state) {
  const rec = JSON.parse(JSON.stringify(template));
  const s = state || {};
  const r = s.reviewer || {};
  rec.reviewer = { slot: r.slot || '', reviewer_id: (r.reviewer_id || '').trim(), role: r.role || '', native_german: typeof r.native_german === 'boolean' ? r.native_german : null, date: r.date || '' };
  const C = rec.reviewer.slot === 'C';
  const int = (v) => (v === '' || v === null || v === undefined ? null : Number(v));
  for (const it of rec.items) {
    const v = (s.items || {})[it.item_id] || {};
    it.verdict = v.verdict || '';
    it.notes = v.notes || '';
    // ratings belong to A and B, item accessibility to C (EX-03/O4, O5); the other slot's fields stay empty
    it.ambiguity_risk = C ? null : int(v.ambiguity_risk);
    it.inference_demand = C ? null : int(v.inference_demand);
    it.distractor_strength = C ? null : int(v.distractor_strength);
    it.accessibility = C ? (v.accessibility || '') : '';
  }
  for (const t of rec.tasks) {
    const v = (s.tasks || {})[t.item_id] || {};
    t.verdict = v.verdict || ''; t.notes = v.notes || ''; t.accessibility = C ? (v.accessibility || '') : '';
  }
  rec.originality_signoff = { slot_c_only: true, verdict: C ? ((s.originality || {}).verdict || '') : '', notes: C ? ((s.originality || {}).notes || '') : '' };
  return rec;
}

/* What is still missing for the entries in scope (scopeIds), for this slot, plus notes the rules require.
   → { total, done, missing: [{ id, fields }], needNotes: [id], reviewerMissing: [field], originalityMissing } */
export function progress(record, scopeIds) {
  const scope = new Set(scopeIds);
  const slot = record.reviewer.slot;
  const C = slot === 'C';
  const reviewerMissing = [];
  if (!['A', 'B', 'C'].includes(slot)) reviewerMissing.push('slot');
  if (!record.reviewer.reviewer_id) reviewerMissing.push('reviewer_id');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.reviewer.date)) reviewerMissing.push('date');
  if (typeof record.reviewer.native_german !== 'boolean') reviewerMissing.push('native_german');
  const missing = [], needNotes = [];
  let total = 0, done = 0;
  for (const it of [...record.items, ...record.tasks]) {
    if (!scope.has(it.item_id)) continue;
    total++;
    const isItem = 'ambiguity_risk' in it;
    const fields = [];
    if (!it.verdict) fields.push('verdict');
    if (isItem && slot && !C) for (const f of ['ambiguity_risk', 'inference_demand', 'distractor_strength']) if (it[f] === null) fields.push(f);
    if (C && !it.accessibility) fields.push('accessibility');
    if (fields.length) missing.push({ id: it.item_id, fields }); else done++;
    if ((it.verdict === 'revise' || it.verdict === 'reject' || (it.ambiguity_risk || 0) >= 1 || (C && it.accessibility && it.accessibility !== 'approve')) && !String(it.notes || '').trim()) needNotes.push(it.item_id);
  }
  const originalityMissing = C && !record.originality_signoff.verdict;
  return { total, done, missing, needNotes, reviewerMissing, originalityMissing,
    complete: !reviewerMissing.length && !missing.length && !needNotes.length && !originalityMissing };
}
