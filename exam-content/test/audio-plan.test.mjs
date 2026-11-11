/* RECORDING PLAN (tools/audio-plan.mjs): every practice script is recordable as written before any audio is produced —
   each spoken line has a voice slot, Hören Teil 3 is a dialogue of two, the Teil 4 speakers are exactly the answer
   options, and the Sprechen Teil 3 partner presentation is a real first-person talk, not a summary of one. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { planForm } from '../tools/audio-plan.mjs';

for (const f of PRACTICE_FORMS) {
  test(`AUDIO PLAN ${f.name}: every script is recordable, speakers match the items`, () => {
    const p = planForm(f);
    assert.deepEqual(p.issues, []);
    const scripted = JSON.parse(f.files['assets.json']).filter((a) => a.kind === 'audio' && a.script_de).map((a) => a.id);
    assert.deepEqual([...new Set(p.segments.map((s) => s.asset_id))].sort(), [...scripted].sort(), 'every scripted audio asset is planned');
    assert.ok(p.segments.every((s) => s.recordable !== false && s.chars > 0 && s.speaker));
    const talks = p.segments.filter((s) => /^sp3-partner-talk/.test(s.slot));
    assert.equal(talks.length, 2, 'one partner talk per Teil 2 topic (OD-32: the partner presents the other topic)');
    assert.equal(talks[0].speaker, talks[1].speaker, 'the same partner gives both talks');
    for (const talk of talks) {
      assert.match(talk.speaker, /^Partner(in)?$/);
      assert.ok(talk.text.split(/\s+/).length >= 120, `partner presentation is a talk (${talk.text.split(/\s+/).length} words)`);
    }
  });
}

test('AUDIO PLAN: a described (not scripted) presentation and a Teil 4 speaker mismatch are reported', () => {
  const f = PRACTICE_FORMS[2];
  const assets = JSON.parse(f.files['assets.json']);
  assets.find((a) => a.id.endsWith('sp3-partner-talk')).script_de = 'Partnerin präsentiert das Thema „X“: Sie findet es gut.';
  const h4 = assets.find((a) => a.id.endsWith('-h4'));
  h4.script_de = h4.script_de.replace(/^Herr Lang:/m, 'Herr Kurz:');
  const p = planForm({ ...f, files: { ...f.files, 'assets.json': JSON.stringify(assets) } });
  assert.ok(p.issues.some((i) => /not recordable as written/.test(i)));
  assert.ok(p.issues.some((i) => /Hören Teil 4: speakers/.test(i)));
});
