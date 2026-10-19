/* PRACTICE LIBRARY (tools/practice-forms.mjs): every registered practice form is complete, valid and clearly labelled
   original Klarweg practice; forms do not share texts, scripts, stems or topics with each other; answer keys are
   balanced; text lengths stay in one difficulty band across the library; every explanation is one sentence and its
   evidence span is verbatim in its own source. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateForm } from '../tools/validate.mjs';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { countWords } from '../schemas/content-model.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = PRACTICE_FORMS.map((f) => {
  const j = (n) => JSON.parse(f.files[n]);
  return { name: f.name, rel: f.rel, form: j('form.json'), tasks: j('tasks.json'), items: j('items.json'), keys: j('keys.json').keys, assets: j('assets.json') };
});
const OBJECTIVE = new Set(['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment']);
const scored = (f, module, part) => f.items.filter((it) => it.module === module && (part === undefined || it.part === part) && !it.is_example && OBJECTIVE.has(it.interaction));
const keyOf = (f, it) => f.keys[it.id].correct;
const sourceOf = (a) => (a.kind === 'text' ? a.text.body_md : a.script_de);
/* shared engine wording that every form carries by design (spoken part instructions, the slide outline, the standard
   Schreiben task formulas such as "Schreiben Sie Ihre Meinung (circa 80 Wörter)"); prompts are compared whole instead */
const BOILERPLATE = /-h2-instr$|-sp2-t\d-slide[2-5]$|-s\d-prompt$/;

/* An explanation must EXPLAIN: besides the quoted evidence (which the review shows next to it) it has to add at least
   two content words — the paraphrase link, the contrast with a false statement or the reason. Speaker names and framing
   verbs ("sagt", "meint", "Regel") do not count. Five-letter stems make inflected forms count as the same word. */
const FRAME = new Set('der die das den dem des ein eine einen einem einer eines und oder aber zu im in am an auf mit von für ist sind war waren hat haben hatte wird werden wurde nicht kein keine keinen man sie er es ich wir ihr ihm ihn sich auch nur noch schon sehr so wie was wer wenn weil dass bei aus nach vor um bis über als zum zur vom dann mehr dort da hier jetzt also sagt sagen meint findet schreibt erzählt steht text regel heißt nennt erklärt erwähnt'.split(' '));
const stems = (s) => (s || '').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter((w) => w.length > 2 && !FRAME.has(w)).map((w) => w.slice(0, 5));
function addedWords(f, it) {
  const an = it.anchors[0];
  const src = sourceOf(f.assets.find((a) => a.id === an.asset_id));
  const quote = new Set(stems(src.slice(an.start, an.end)));
  const names = new Set(stems((src.match(/\b(Herr|Frau)\s+\p{Lu}\p{L}+|\b\p{Lu}\p{L}+(?=[,:])/gu) || []).join(' ') + ' ' + (it.options || []).map((o) => o.label).join(' ')));
  return [...new Set(stems(it.feedback.explanation_de))].filter((t) => !quote.has(t) && !names.has(t));
}

test('LIBRARY: the registry lists P1 … Pn in order, each with its own id and directory', () => {
  assert.deepEqual(LIB.map((f) => f.name), LIB.map((_, i) => `P${i + 1}`));
  assert.deepEqual(LIB.map((f) => f.form.id), LIB.map((_, i) => `frm:b1:synthetic-p${i + 1}@1`));
  assert.deepEqual(LIB.map((f) => f.rel), LIB.map((_, i) => `forms/synthetic/b1-synthetic-p${i + 1}`));
});

for (const f of LIB) {
  test(`LIBRARY ${f.name}: validates without errors or warnings and is labelled original Klarweg practice`, () => {
    const v = validateForm(path.join(ROOT, f.rel));
    assert.deepEqual(v.errors, []); assert.deepEqual(v.warnings, []);
    assert.equal(f.form.kind, 'synthetic'); assert.equal(f.form.purpose, 'practice');
    assert.equal(f.form.label, `Synthetische Übungsform ${f.name} (Klarweg-Übung, kein Original)`);
    assert.match(f.form.release_note, /^SYNTHETIC PRACTICE CONTENT — original Klarweg texts; Hören as TEST AUDIO tones$/);
    for (const a of f.assets.filter((x) => x.kind === 'audio')) assert.match(a.label, /^TEST AUDIO – /, `${a.id} labelled TEST AUDIO`);
    assert.equal(/Goethe|Hueber|telc|ÖSD/i.test(JSON.stringify([f.items, f.tasks, f.assets])), false, 'no exam-provider or publisher names in the content');
  });

  test(`LIBRARY ${f.name}: every scored item has a one-sentence explanation and a verbatim evidence span in its own task`, () => {
    const objective = f.items.filter((it) => !it.is_example && OBJECTIVE.has(it.interaction));
    assert.equal(objective.length, 60);
    const visible = JSON.stringify([f.assets.filter((a) => a.kind === 'text').map((a) => a.text.body_md), f.items.map((i) => [i.stem, i.options])]);
    for (const it of objective) {
      const e = it.feedback?.explanation_de || '';
      assert.match(e, /^\S.{8,}[.!?]$/, `${it.id}: explanation is a sentence`);
      assert.equal(/[^\d][.!?]\s+[A-ZÄÖÜ]/.test(e.slice(0, -1)), false, `${it.id}: explanation is ONE sentence: ${e}`);
      assert.equal(visible.includes(e), false, `${it.id}: explanation is not a verbatim copy of a text, stem or option: ${e}`);
      assert.equal(sourceOf(f.assets.find((a) => a.id === it.anchors[0].asset_id)).includes(e.slice(0, -1)), false, `${it.id}: explanation is not copied from its own text or script: ${e}`);
      const added = addedWords(f, it);
      assert.ok(added.length >= 2, `${it.id}: explanation only restates the evidence (adds ${JSON.stringify(added)}): ${e}`);
      assert.equal(it.anchors.length, 1);
      const [an] = it.anchors;
      const task = f.tasks.find((t) => t.id === it.task_id);
      assert.ok(task.stimuli.some((s) => s.asset_id === an.asset_id), `${it.id}: evidence from its own task`);
      const quote = sourceOf(f.assets.find((a) => a.id === an.asset_id)).slice(an.start, an.end);
      assert.ok(quote.trim().length >= 6 && quote === quote.trim(), `${it.id}: meaningful evidence "${quote}"`);
    }
  });

  test(`LIBRARY ${f.name}: answer keys are balanced (no answer pattern to exploit)`, () => {
    const count = (its, k) => its.filter((it) => keyOf(f, it) === k).length;
    const within = (n, lo, hi, what) => assert.ok(n >= lo && n <= hi, `${what}: ${n} not in ${lo}–${hi}`);
    within(count(scored(f, 'lesen', 1), 'richtig'), 2, 4, 'Lesen 1 richtig of 6');
    within(count(scored(f, 'lesen', 4), 'ja'), 3, 4, 'Lesen 4 ja of 7');
    within(count(scored(f, 'hoeren', 1).filter((it) => it.interaction === 'binary_choice'), 'richtig'), 2, 3, 'Hören 1 richtig of 5');
    within(count(scored(f, 'hoeren', 3), 'richtig'), 3, 4, 'Hören 3 richtig of 7');
    const mcq = [...scored(f, 'lesen', 2), ...scored(f, 'lesen', 5), ...scored(f, 'hoeren', 1).filter((it) => it.interaction === 'mcq_single'), ...scored(f, 'hoeren', 2)];
    assert.equal(mcq.length, 20);
    for (const k of ['a', 'b', 'c']) within(count(mcq, k), 4, 10, `a/b/c items with key ${k} of 20`);
    for (const it of mcq) assert.equal(new Set(it.options.map((o) => o.text)).size, 3, `${it.id}: three different options`);
  });
}

for (const f of LIB) {
  test(`LIBRARY ${f.name}: explanations agree with the key (ad letter, speaker, verdict, opinion)`, () => {
    const bad = [];
    for (const it of f.items.filter((x) => x.feedback)) {
      const e = it.feedback.explanation_de, k = f.keys[it.id].correct;
      if (it.interaction === 'matching_pool') {
        const evidenceAd = it.anchors[0].asset_id.slice(-1);
        for (const m of e.matchAll(/\(([a-j])\)|Anzeige ([a-j])\b/g)) if ((m[1] || m[2]) !== (k === '0' ? evidenceAd : k)) bad.push(`${it.id}: key ${k}, explanation names ad ${m[1] || m[2]}`);
        if (k === '0' && !/\b0\b|keine/.test(e)) bad.push(`${it.id}: the "no ad" key is not explained`);
      }
      if (it.interaction === 'speaker_assignment') {
        const name = (o) => o.label.replace(/^(Herr|Frau) /, '');
        const keyed = it.options.find((o) => o.option_id === k);
        if (!/^Moderat/.test(keyed.label) && !e.includes(name(keyed))) bad.push(`${it.id}: explanation does not name the speaker ${keyed.label}`);
        for (const o of it.options) if (o !== keyed && !/^Moderat/.test(o.label) && e.includes(name(o))) bad.push(`${it.id}: explanation names ${o.label}, key is ${keyed.label}`);
      }
      if (k === 'falsch' && /\b(stimmt also|Aussage stimmt|ist richtig)\b/.test(e)) bad.push(`${it.id}: key falsch, explanation says it is right`);
      if (k === 'richtig' && /\b(stimmt nicht|ist falsch|nicht richtig)\b/.test(e)) bad.push(`${it.id}: key richtig, explanation says it is wrong`);
      if (k === 'ja' && /\b(dagegen|lehnt)\b/.test(e)) bad.push(`${it.id}: key ja, explanation reads as against`);
      if (k === 'nein' && /\b(dafür|ist für)\b/.test(e)) bad.push(`${it.id}: key nein, explanation reads as in favour`);
    }
    assert.deepEqual(bad, []);
  });

  test(`LIBRARY ${f.name}: task instructions name the item numbers they contain; Schreiben prompts state the scored word target`, () => {
    const bad = [];
    const num = (id) => Number((f.items.find((i) => i.id === id).stem.match(/^(\d+)\./) || [])[1]);
    for (const t of f.tasks) {
      const m = t.instructions.text_de.match(/(?:Aufgaben|Situationen|Kommentare) (\d+) bis (\d+)|\((\d+) bis (\d+)\)/);
      if (!m) continue;
      const scope = m[3] ? f.tasks.filter((x) => x.module === t.module && x.part === t.part) : [t];
      const nums = scope.flatMap((x) => x.items).filter((id) => { const i = f.items.find((y) => y.id === id); return !i.is_example && i.interaction !== 'topic_choice'; }).map(num);
      if (Math.min(...nums) !== Number(m[1] || m[3]) || Math.max(...nums) !== Number(m[2] || m[4])) bad.push(`${t.id}: says ${m[0]}, items ${Math.min(...nums)}–${Math.max(...nums)}`);
    }
    for (const it of f.items.filter((x) => x.interaction === 'text_response')) {
      const prompt = f.tasks.find((t) => t.id === it.task_id).instructions.text_de;
      if (!new RegExp(`circa ${it.response_spec.target_words} Wörter`).test(prompt)) bad.push(`${it.id}: prompt does not state circa ${it.response_spec.target_words} Wörter`);
    }
    assert.deepEqual(bad, []);
  });
}

test('LIBRARY: OD-32 — the partner talk for each Teil 2 topic presents the OTHER topic (all forms, both choices)', () => {
  const words = (s) => new Set((s || '').toLowerCase().replace(/[^\p{L}\s]/gu, ' ').split(/\s+/).filter((w) => w.length > 4).map((w) => w.slice(0, 6)));
  const bad = [];
  for (const f of LIB) {
    const topic = f.items.find((it) => it.interaction === 'topic_choice');
    const title = Object.fromEntries(topic.options.map((o) => [o.option_id, words(o.label.replace(/^Thema \d: /, ''))]));
    const task = f.tasks.find((t) => t.module === 'sprechen' && t.part === 3);
    const talks = task.stimuli.filter((st) => st.role === 'partner_audio');
    if (JSON.stringify(talks.map((t) => t.for_topic).sort()) !== '["t1","t2"]') { bad.push(`${f.name}: partner talks ${JSON.stringify(talks.map((t) => t.for_topic))}`); continue; }
    for (const t of talks) {
      const script = words(f.assets.find((a) => a.id === t.asset_id).script_de);
      const other = t.for_topic === 't1' ? 't2' : 't1';
      const hits = (o) => [...title[o]].filter((w) => script.has(w)).length;
      if (!(hits(other) >= 1 && hits(other) >= hits(t.for_topic))) bad.push(`${f.name}: talk for ${t.for_topic} does not present topic ${other} (${hits(other)} vs ${hits(t.for_topic)})`);
    }
    const turns = f.items.find((it) => it.id.endsWith('-sp3')).response_spec.turns;
    for (const turn of turns) if (JSON.stringify(Object.keys(turn.prompt_asset_by_topic || {}).sort()) !== '["t1","t2"]') bad.push(`${f.name}: turn ${turn.turn} is not topic-aware`);
  }
  assert.deepEqual(bad, []);
});

test('LIBRARY: AUDIO-SPEC B3 — every Hören Teil 3 dialogue is a man and a woman (voices must be told apart)', () => {
  // Explicit table of the dialogue speakers; a new or renamed speaker fails until it is added here.
  const GENDER = { Paul: 'm', Nora: 'f', Ben: 'm', Lisa: 'f', Sebastian: 'm', Elif: 'f', Moritz: 'm', Aylin: 'f', Jana: 'f', Max: 'm',
    'Herr Schulz': 'm', 'Frau Pohl': 'f', Tobias: 'm', Miriam: 'f', Paula: 'f', 'Ömer': 'm', Nico: 'm', Clara: 'f', Felix: 'm', Hanna: 'f',
    Vincent: 'm', Ines: 'f', 'Herr Novak': 'm', 'Frau Lindemann': 'f', Stefanie: 'f', Ali: 'm', Lena: 'f', Jakob: 'm', Kathrin: 'f', Marco: 'm' };
  const bad = [];
  for (const f of LIB) {
    const script = f.assets.find((a) => /-h3$/.test(a.id)).script_de;
    const speakers = [...new Set(script.split('\n').map((l) => l.split(':')[0]))];
    const genders = speakers.map((sp) => GENDER[sp] || `unknown(${sp})`);
    if (speakers.length !== 2 || genders.sort().join() !== 'f,m') bad.push(`${f.name}: ${speakers.join(' / ')} → ${genders.join(', ')}`);
  }
  assert.deepEqual(bad, []);
});

test('LIBRARY: forms are mutually original — no shared 8-word passage, stem, prompt or topic between any two forms', () => {
  const shingles = (s) => { const w = s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean); const out = new Set(); for (let i = 0; i + 8 <= w.length; i++) out.add(w.slice(i, i + 8).join(' ')); return out; };
  const owner = new Map();
  const clash = [];
  for (const f of LIB) {
    for (const a of f.assets) {
      if (BOILERPLATE.test(a.id)) continue;
      for (const sh of shingles(sourceOf(a))) {
        const o = owner.get(sh);
        if (o && o.form !== f.name) clash.push(`${f.name} ${a.id} ↔ ${o.form} ${o.id}: "${sh}"`);
        else if (!o) owner.set(sh, { form: f.name, id: a.id });
      }
    }
  }
  assert.deepEqual(clash, [], 'shared passages between forms');
  const unique = (what, pick) => {
    const seen = new Map(), dup = [];
    for (const f of LIB) for (const v of pick(f)) { const k = v.trim().toLowerCase(); if (seen.has(k) && seen.get(k) !== f.name) dup.push(`${what}: ${seen.get(k)} and ${f.name}: ${v}`); else seen.set(k, f.name); }
    assert.deepEqual(dup, []);
  };
  unique('scored stem', (f) => f.items.filter((it) => !it.is_example && OBJECTIVE.has(it.interaction) && !(it.module === 'lesen' && it.part === 4)).map((it) => it.stem.replace(/^\d+\. /, '')).filter((x) => x.split(/\s+/).length >= 6));   // short stem openers ("Die Führung dauert …") may recur
  unique('Sprechen topic', (f) => f.items.filter((it) => it.interaction === 'topic_choice').flatMap((it) => it.options.map((o) => o.label.replace(/^Thema \d: /, ''))));
  unique('Schreiben prompt', (f) => f.tasks.filter((t) => t.module === 'schreiben').map((t) => t.instructions.text_de));
  unique('Lesen 4 question', (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 4).map((t) => t.instructions.text_de));
  unique('Hören 2 situation', (f) => f.tasks.filter((t) => t.module === 'hoeren' && t.part === 2).map((t) => t.context_line));
  unique('Hören 3 situation', (f) => f.tasks.filter((t) => t.module === 'hoeren' && t.part === 3).map((t) => t.context_line));
  unique('Lesen 5 situation', (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 5).map((t) => t.context_line));
});

test('LIBRARY: consistent difficulty — text and script lengths stay within one band across all forms', () => {
  const median = (xs) => { const s = [...xs].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };
  const measures = {
    'Lesen 1 text': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 1).indicators.words,
    'Lesen 2 texts': (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 2).reduce((n, t) => n + t.indicators.words, 0),
    'Lesen 3 ads': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 3).indicators.words,
    'Lesen 4 comments': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 4).indicators.words,
    'Lesen 5 text': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 5).indicators.words,
    'Hören 1 scripts': (f) => f.assets.filter((a) => /-h1-t\d$/.test(a.id)).reduce((n, a) => n + countWords(a.script_de), 0),
    'Hören 2 script': (f) => countWords(f.assets.find((a) => /-h2$/.test(a.id)).script_de),
    'Hören 3 script': (f) => countWords(f.assets.find((a) => /-h3$/.test(a.id)).script_de),
    'Hören 4 script': (f) => countWords(f.assets.find((a) => /-h4$/.test(a.id)).script_de)
  };
  /* P1 was the first hand-built form: its Hören 1 and 2 scripts are shorter than the rest of the library. They are
     TEST AUDIO tones today; lengthen them when P1 is revised for real audio. Every later form must fit the band. */
  const KNOWN = new Set(['P1 Hören 1 scripts', 'P1 Hören 2 script']);
  const out = [];
  for (const [what, m] of Object.entries(measures)) {
    const vals = LIB.map((f) => [f.name, m(f)]);
    const mid = median(vals.map(([, v]) => v));
    for (const [name, v] of vals) if (!KNOWN.has(`${name} ${what}`) && (v < mid * 0.75 || v > mid * 1.3)) out.push(`${name} ${what}: ${v} words (library median ${mid})`);
  }
  assert.deepEqual(out, []);
});

test('LIBRARY: no group-size phrase that can be read two ways ("zu dritt … mit einem Trainer": 3 incl. or plus the trainer?)', () => {
  // internal audit 2026-10-19 found P14 Hören 2 item 12 answerable two ways; the wording "zu zweit/dritt/viert … mit
  // einem/einer …" leaves open whether the extra person is counted in the group
  const AMBIGUOUS = /\bzu (zweit|dritt|viert|fünft|sechst)\b[^.!?]{0,60}\bmit (einem|einer)\b/i;
  for (const f of PRACTICE_FORMS) {
    for (const a of JSON.parse(f.files['assets.json'])) {
      const text = a.script_de || (a.text && a.text.body_md) || '';
      assert.equal(AMBIGUOUS.test(text), false, `${f.name} ${a.id}: ${(AMBIGUOUS.exec(text) || [''])[0]}`);
    }
  }
});

test('LIBRARY: no impersonal passive with a reflexive pronoun ("getroffen wird sich") in explanations or options', () => {
  // internal audit 2026-10-19 found P4 Hören 3 item 19 explaining with "getroffen wird sich", which is not standard German;
  // reflexive verbs have no impersonal passive, so "<Partizip> wird/werden sich" is always a wording defect
  const REFLEXIVE_PASSIVE = /\bge\p{L}+(t|en) (wird|werden|wurde|wurden) sich\b/iu;
  for (const f of PRACTICE_FORMS) {
    for (const it of JSON.parse(f.files['items.json'])) {
      const text = JSON.stringify(it);
      assert.equal(REFLEXIVE_PASSIVE.test(text), false, `${f.name} ${it.id}: ${(REFLEXIVE_PASSIVE.exec(text) || [''])[0]}`);
    }
  }
});
