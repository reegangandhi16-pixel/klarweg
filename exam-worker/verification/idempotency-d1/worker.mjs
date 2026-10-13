/* Idempotency-claim probe Worker — NON-PRODUCTION ONLY. Disabled unless IDEM_PROBE === "on", the request carries the
   secret IDEM_PROBE_TOKEN (≥ 32 chars) in x-idem-token, and IDEM_PROBE_LABEL ("nonprod-…") matches the database's marker.
   Refuses any database that holds exam attempts. Never bind it to the exam database. */
import { setupProbe, guard, runScenarios, raceOne, raceState, prepareRace } from './probe.mjs';

const json = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const tokenOk = (g, e) => typeof e === 'string' && e.length >= 32 && typeof g === 'string' && g.length === e.length && [...e].reduce((d, c, i) => d | (c.charCodeAt(0) ^ g.charCodeAt(i)), 0) === 0;
const RUN = /^[a-z0-9-]{8,64}$/;

export default {
  async fetch(request, env) {
    if (env.IDEM_PROBE !== 'on') return json({ ok: false, error: 'probe_disabled' }, 403);
    if (!tokenOk(request.headers.get('x-idem-token') || '', env.IDEM_PROBE_TOKEN)) return json({ ok: false, error: 'unauthorised' }, 401);
    const url = new URL(request.url); const run = url.searchParams.get('run') || '';
    try {
      if (request.method === 'POST' && url.pathname === '/idem/setup') { await setupProbe(env.DB, env.IDEM_PROBE_LABEL); return json({ ok: true }); }
      await guard(env.DB, env.IDEM_PROBE_LABEL);
      if (!RUN.test(run)) return json({ ok: false, error: 'invalid_run' }, 400);
      const rid = `rq_${run}_race`;
      if (request.method === 'POST' && url.pathname === '/idem/scenarios') return json({ ok: true, results: await runScenarios({ DB: env.DB }, run) });
      if (request.method === 'POST' && url.pathname === '/idem/race/prepare') { await prepareRace(env.DB, run); return json({ ok: true }); }
      if (request.method === 'POST' && url.pathname === '/idem/race/one') return json({ ok: true, ...(await raceOne({ DB: env.DB }, run, rid)) });
      if (request.method === 'GET' && url.pathname === '/idem/race/state') return json({ ok: true, ...(await raceState(env.DB, run, rid)) });
      return json({ ok: false, error: 'not_found' }, 404);
    } catch (e) { return json({ ok: false, error: (e && e.code) || 'probe_error' }, 409); }
  }
};
