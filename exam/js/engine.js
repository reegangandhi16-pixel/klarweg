/* Generic exam engine. Level-agnostic: everything level-specific (modules,
   parts, interactions, timing kind) comes from the keyless module package the
   server hands out, so B1 is configuration. The engine only sequences the
   modules the server reports and asks the server for every transition. */
import { countWords } from './wordcount.js';

export const TIMING_KINDS = ['fixed', 'phase_plan', 'speaking_phases'];

export function nextAction(attempt) {
  if (!attempt) return { kind: 'none' };
  if (attempt.status === 'completed') return { kind: 'result' };
  const running = attempt.modules.find((m) => m.status === 'running');
  if (running) return { kind: 'resume', module: running.module };
  const avail = attempt.modules.find((m) => m.status === 'available');
  if (avail) return { kind: 'start', module: avail.module };
  if (attempt.modules.every((m) => m.status === 'submitted')) return { kind: 'complete' };
  return { kind: 'wait' };
}

export function assertSupported(pkg, registry) {
  if (!TIMING_KINDS.includes(pkg.timing && pkg.timing.kind)) throw new Error(`unsupported timing ${pkg.timing && pkg.timing.kind}`);
  const missing = new Set();
  for (const p of pkg.parts) for (const t of p.tasks) for (const it of t.items) if (!registry[it.interaction]) missing.add(it.interaction);
  if (missing.size) throw new Error(`no renderer for ${[...missing].join(', ')}`);
  return true;
}

/* Items the learner can answer in this module (examples excluded). */
export function answerableItems(pkg) {
  const out = [];
  for (const p of pkg.parts) for (const t of p.tasks) for (const it of t.items) if (!it.is_example && it.interaction !== 'spoken_response') out.push(it);
  return out;
}

export function isAnswered(v) {
  return !!v && (v.option_id != null || (typeof v.text === 'string' && v.text.trim() !== ''));
}

export function unansweredCount(pkg, answers) {
  return answerableItems(pkg).filter((it) => !isAnswered(answers[it.item_id])).length;
}

/* The number the learner sees: the exam-wide number at the start of the stem ("29. …"), else the position in the part. */
export function itemNumber(it, index) {
  const m = /^\s*(\d{1,3})[.)]\s/.exec(String(it.stem || ''));
  return m ? Number(m[1]) : index + 1;
}

/* Progress per part of the package (only the parts present — for Hören, only those already open). Each answerable item
   gets the number the learner sees (itemNumber), used by the review. */
export function partProgress(pkg, answers) {
  return pkg.parts.map((p) => {
    const items = [];
    for (const t of p.tasks) for (const it of t.items) if (!it.is_example && it.interaction !== 'spoken_response') items.push(it);
    const rows = items.map((it, i) => ({ item_id: it.item_id, no: itemNumber(it, i), interaction: it.interaction, answered: isAnswered(answers[it.item_id]),
      words: it.interaction === 'text_response' ? countWords((answers[it.item_id] && answers[it.item_id].text) || '') : null,
      target_words: (it.response_spec && it.response_spec.target_words) || null }));
    return { part: p.part, total: rows.length, answered: rows.filter((r) => r.answered).length, items: rows };
  });
}
