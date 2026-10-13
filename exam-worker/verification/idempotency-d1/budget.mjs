/* Per-invocation D1 query budget for the Workers Free probe (worker-free.mjs).
   Official limit (developers.cloudflare.com/d1/platform/limits, checked 2026-10-13): 50 queries per Worker invocation
   on Workers Free. The docs do not say whether db.batch() counts as one query or one per statement, so this guard
   counts EVERY statement inside a batch (the conservative reading) and caps the invocation at FREE_QUERY_BUDGET,
   leaving a margin below 50. A call that would exceed the cap is refused before it reaches D1 and the invocation is
   flagged `tripped`; its scenario is then reported INCONCLUSIVE, never pass. */
export const FREE_PLATFORM_LIMIT = 50;
export const FREE_QUERY_BUDGET = 40;

export function budgetedDB(db, cap = FREE_QUERY_BUDGET) {
  let used = 0, tripped = null;
  const spend = (k, what) => {
    if (used + k > cap) { tripped = tripped || { at: what, used, wanted: k, cap }; throw Object.assign(new Error('query_budget_exceeded'), { code: 'query_budget_exceeded' }); }
    used += k;
  };
  const wrap = (st) => ({
    __inner: st,
    bind: (...b) => wrap(st.bind(...b)),
    first: async (c) => { spend(1, 'first'); return st.first(c); },
    all: async () => { spend(1, 'all'); return st.all(); },
    run: async () => { spend(1, 'run'); return st.run(); }
  });
  return {
    prepare: (sql) => wrap(db.prepare(sql)),
    batch: async (stmts) => { spend(stmts.length, 'batch'); return db.batch(stmts.map((s) => (s && s.__inner) || s)); },
    get used() { return used; }, get tripped() { return tripped; }, cap,
    remaining: () => cap - used
  };
}

/* Worst-case statements per Free invocation, derived from idempotentAtomic() (src/core.js) path by path — kept in
   sync by the budget test, which also MEASURES every endpoint. `polls` = claim-wait polls (S2, S6, S7a only).
   op paths: fresh winner 1 + batch 5 = 6 · loser (pending/completed) 2 · takeover winner 3 + 5 = 8 · takeover loser 4
   · assertion rollback, claim lost 1 + 5 + 1 = 7 · assertion rollback, claim kept 1 + 5 + 1 + 1 = 8 (+1 extra stmt S4b). */
export const VERIFY_MAX = 7;   // sqlite_master + marker + COUNT(*) of the 5 exam-content tables
export const WORST = {
  S1: (n) => 1 + 6 + 2 * (n - 1) + 1,
  S2: (polls) => 1 + 1 + polls + 1 + 5 + 1 + 3,
  S3: () => 1 + 8 + 2,
  S4: () => (1 + 6 + 2) + (1 + 9 + 2),
  S5: (n) => 1 + 1 + 8 + 4 * (n - 1) + 1,
  S6: (polls) => 1 + 1 + polls + 8 + 5 + 1 + 1,
  S7a: (polls) => 1 + 1 + polls + 2 + 8 + 1,
  S7b: () => 1 + 6 + 2 + 1,
  'race/prepare:fresh': () => 1, 'race/prepare:stale': () => 2, 'race/one': () => 8, 'race/state': () => 2
};
/* Statements a scenario still needs AFTER its claim wait; the wait polls only while more than this remains. */
export const AFTER_WAIT = { S2: 1 + 5 + 1 + 3, S6: 8 + 5 + 1 + 1, S7a: 2 + 8 + 1 };
/* In-isolate concurrency per Free invocation. Real D1 allows only six connections in flight per invocation
   (D1 limits FAQ), so in-isolate n = 20 (Paid) never had more than 6 D1 calls truly concurrent; n = 12 / 6 still
   saturates that. True high concurrency is exercised ACROSS invocations by the R (fresh) and RS (stale) races. */
export const FREE_N = { S1: 12, S5: 6 };
