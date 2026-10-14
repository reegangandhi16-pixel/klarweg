/* SPRECHEN Teil 3 (OD-32 simulated pair): the partner presents the topic the learner did NOT choose, and the examiner
   asks about the learner's own topic. Selection is by the learner's locked Teil 2 topic option, for every practice form
   and both choices; without a choice the first talk in package order is used. The driver plays exactly the selected
   talk in the partner phase and never replays it (or the other talk) as a turn prompt. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { partnerAssetFor, turnPromptAsset, listenPhaseAssets, chosenTopic, topicItems } from '../js/sprechen.js';
import { createSpeakingDriver } from '../js/sprechen-driver.js';
import { syntheticBuild, pkgFor, PRACTICE_LIBRARY } from '../../exam-worker/test/harness.mjs';

const pkgs = PRACTICE_LIBRARY.map((f) => ({ name: f.name, pkg: pkgFor(syntheticBuild([f.dir]), 'sprechen') }));
const sp3Turns = (pkg) => pkg.parts.find((p) => p.part === 3).tasks.flatMap((t) => t.items).find((it) => it.interaction === 'spoken_response').response_spec.turns;
const partnerPhase = (plan) => plan.phases.find((p) => p.listen_only);

for (const { name, pkg } of pkgs) {
  test(`SPRECHEN TOPIC ${name}: talk and examiner question follow the learner's Teil 2 topic (both choices, no choice)`, () => {
    const plan = pkg.timing.plan;
    const talks = pkg.parts.find((p) => p.part === 3).tasks.flatMap((t) => t.stimuli).filter((s) => s.role === 'partner_audio');
    assert.deepEqual(talks.map((s) => s.for_topic), ['t1', 't2']);
    const topicItem = topicItems(pkg)[0];
    for (const choice of ['t1', 't2']) {
      const answers = { [topicItem.item_id]: { option_id: choice } };
      assert.equal(chosenTopic(pkg, answers), choice);
      const talk = partnerAssetFor(pkg, plan, partnerPhase(plan), choice);
      assert.equal(talk.asset_id, talks.find((s) => s.for_topic === choice).asset_id);
      assert.ok(Number.isFinite(talk.duration_ms));
      const [t1, t2] = sp3Turns(pkg);
      assert.equal(turnPromptAsset(t1, choice), t1.prompt_asset_by_topic[choice].asset_id);
      assert.equal(turnPromptAsset(t2, choice), t2.prompt_asset_by_topic[choice].asset_id);
    }
    assert.notEqual(turnPromptAsset(sp3Turns(pkg)[1], 't1'), turnPromptAsset(sp3Turns(pkg)[1], 't2'), 'one examiner question per topic');
    assert.equal(chosenTopic(pkg, {}), null);
    assert.equal(partnerAssetFor(pkg, plan, partnerPhase(plan), null).asset_id, talks[0].asset_id, 'no choice: the first talk (deterministic)');
    assert.deepEqual([...listenPhaseAssets(pkg, plan)].sort(), talks.map((s) => s.asset_id).sort(), 'neither talk is replayed as a turn prompt');
  });
}

async function playedFor(pkg, topic) {
  const plan = pkg.timing.plan;
  let now = 1_000_000;
  const startedAt = now, played = [];
  const driver = createSpeakingDriver({
    pkg, plan, startedAt, multiplier: 1, now: () => now, sleep: async (ms) => { now += Math.max(1, ms); }, active: () => true,
    status: { turns: [], chunks: [] }, queue: { pending: async () => [], drain: async () => {}, finish: async () => {} },
    audio: { preload: async () => {}, play: async (id) => { played.push(id); return { status: 'ended' }; } },
    getMic: async () => null, recorder: () => { throw new Error('no recording expected'); },
    ui: { phase() {}, turn() {}, alert() {}, clear() {}, lockTopics() {} }, topic: () => topic
  });
  await driver.run();
  return played;
}

test('SPRECHEN TOPIC (driver): the partner phase plays the talk for the chosen topic; the examiner asks the matching question', async () => {
  const { pkg } = pkgs[2];   // P3
  const id = (suffix) => `ast:p3-sp3-${suffix}`;
  const t1 = await playedFor(pkg, 't1');
  assert.ok(t1.includes(id('partner-talk')) && t1.includes(id('examiner-q')));
  assert.equal(t1.includes(id('partner-talk-t2')) || t1.includes(id('examiner-q-t2')), false);
  const t2 = await playedFor(pkg, 't2');
  assert.ok(t2.includes(id('partner-talk-t2')) && t2.includes(id('examiner-q-t2')));
  assert.equal(t2.includes(id('partner-talk')) || t2.includes(id('examiner-q')), false);
  for (const list of [t1, t2]) assert.equal(list.filter((a) => /partner-talk/.test(a)).length, 1, 'the presentation is played exactly once');
});
