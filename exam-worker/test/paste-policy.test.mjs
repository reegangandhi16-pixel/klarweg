/* Schreiben paste policy (OD-06): the package response carries the policy (default internal_only); refused pastes and
   drops are logged as integrity events — type, item and length only, never text — lease-checked, only while Schreiben
   runs, rate-limited. Nothing is penalised. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, PRACTICE_FORM_DIR, pkgFor, syntheticBuild, rid } from './harness.mjs';
import { start, submit, post, get } from './flow.mjs';
import { pasteAllowed, DEFAULT_PASTE_POLICY } from '../../exam/js/paste.js';

test('PASTE POLICY (decision): internal_only allows only text copied inside the editor; allow/block as named; unknown → default', () => {
  assert.equal(DEFAULT_PASTE_POLICY, 'internal_only');
  assert.equal(pasteAllowed('internal_only', 'Hallo Welt', 'Hallo Welt'), true);
  assert.equal(pasteAllowed('internal_only', 'Hallo\r\nWelt', 'Hallo\nWelt'), true, 'line endings do not matter');
  assert.equal(pasteAllowed('internal_only', 'Fremder Text', 'Hallo Welt'), false);
  assert.equal(pasteAllowed('internal_only', 'x', null), false, 'nothing copied inside the editor yet');
  assert.equal(pasteAllowed('internal_only', '', ''), false);
  assert.equal(pasteAllowed('allow', 'anything', null), true);
  assert.equal(pasteAllowed('block', 'Hallo', 'Hallo'), false);
  assert.equal(pasteAllowed('nonsense', 'Fremd', null), false, 'unknown policy falls back to internal_only');
});

test('PASTE POLICY (server): policy on the Schreiben package; integrity events logged without text; refused outside Schreiben, with a bad type or item, or a stale lease', async () => {
  const s = await setup({ formDirs: [PRACTICE_FORM_DIR] });
  const ev = (body) => post(s, '/schreiben/integrity', body);
  for (const m of ['lesen', 'hoeren']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  const item = pkgFor(syntheticBuild([PRACTICE_FORM_DIR]), 'schreiben').parts[0].tasks[0].items.find((it) => it.interaction === 'text_response').item_id;
  assert.equal((await ev({ type: 'paste_blocked', item_id: item, length: 120 })).json.error, 'module_not_running', 'only while Schreiben runs');
  await start(s, 'schreiben');
  const pkg = await get(s, '/modules/schreiben/package');
  assert.equal(pkg.json.paste_policy, 'internal_only');
  assert.equal((await get(s, '/modules/lesen/package')).json.paste_policy, undefined);
  assert.equal((await ev({ type: 'paste_blocked', item_id: item, length: 120 })).status, 200);
  assert.equal((await ev({ type: 'drop_blocked', item_id: item, length: 5 })).status, 200);
  assert.equal((await ev({ type: 'keylogger', item_id: item })).json.error, 'invalid_event');
  assert.equal((await ev({ type: 'paste_blocked', item_id: 'itm:nope' })).json.error, 'unknown_item');
  const stale = await call(s.env, 'POST', `/exam/v1/attempts/${s.attempt}/schreiben/integrity`, { user: s.user, body: { lease_id: 'lea_00000000000000000000000000000000', request_id: rid(), type: 'paste_blocked', item_id: item } });
  assert.ok([409, 400].includes(stale.status), 'a stale or foreign lease is refused');
  const rows = (await s.env.DB.prepare("SELECT detail_json FROM audit_log WHERE action = 'writing_integrity' ORDER BY id").all()).results.map((r) => JSON.parse(r.detail_json));
  assert.deepEqual(rows, [{ type: 'paste_blocked', item_id: item, length: 120 }, { type: 'drop_blocked', item_id: item, length: 5 }]);
  // never penalised: the score path does not read integrity events
  const r = await submit(s, 'schreiben');
  assert.ok(r.ok);
});
