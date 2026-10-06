/* Generic exam engine. Level-agnostic: everything level-specific (modules,
   parts, interactions, timing kind) comes from the keyless module package the
   server hands out, so B1 is configuration. The engine only sequences the
   modules the server reports and asks the server for every transition. */
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

export function unansweredCount(pkg, answers) {
  return answerableItems(pkg).filter((it) => {
    const v = answers[it.item_id];
    return !v || (v.option_id == null && !(typeof v.text === 'string' && v.text.trim()));
  }).length;
}
