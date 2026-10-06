#!/usr/bin/env node
/* Generates the SYNTHETIC B1 test form used only to exercise the exam engine.
   Every text is an obvious placeholder ("SYNTHETISCHER TESTTEXT"); nothing is
   derived from Goethe-Institut or any published exam material. Audio stimuli
   are generated test tones (tools/test-tones.mjs), clearly labelled TEST AUDIO.

   Usage: node exam-content/tools/make-synthetic-form.mjs [--check]
   --check exits non-zero if the committed files differ from a fresh generation. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countWords } from '../schemas/content-model.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'forms', 'synthetic', 'b1-synthetic-s0');
const FORM_ID = 'frm:b1:synthetic-s0@1';
const DATE = '2026-10-04';
const BANNER = 'SYNTHETISCHER TESTTEXT – keine echte Prüfungsaufgabe.';

const provenance = () => ({
  author_ids: ['klarweg-engineering'], created_at: DATE, reference_material_used: 'none',
  originality_check: { method: 'synthetic_fixture', max_overlap: 0, corpus_versions: [], passed: true, checked_at: DATE },
  reviews: [], standard_refs: ['synthetic engine test fixture — not exam content']
});
const syntheticItemIndicators = () => ({ synthetic: true, reasoning_steps: 1, inference_demand: 1, distractor_strength: 1 });

const assets = [];
const tasks = [];
const items = [];
const keys = {};

function textAsset(id, body, role = 'text', label) {
  assets.push({ id, kind: 'text', label: label || null, text: { lang: 'de', body_md: body }, licence: { kind: 'synthetic_test' }, creator: 'klarweg-engineering' });
  return id;
}
function toneAsset(id, seconds, freqHz, label) {
  assets.push({ id, kind: 'audio', label: `TEST AUDIO – ${label}`, audio: { generator: { type: 'tone', seconds, freq_hz: freqHz, beep_ms: 250 }, plays: null },
    licence: { kind: 'synthetic_test' }, creator: 'klarweg-engineering' });
  return id;
}
function item(o) {
  const it = {
    id: o.id, rev: 1, meta_version: 1, level: 'B1', module: o.module, part: o.part, task_id: o.task, is_example: !!o.example,
    interaction: o.interaction, stem: o.stem, options: o.options || undefined, response_spec: o.response_spec || { type: 'choice' },
    indicators: o.indicators || syntheticItemIndicators(), topic: ['synthetic'], provenance: provenance(), status: 'live'
  };
  if (o.example) it.example_answer = o.key;
  items.push(it);
  keys[o.id] = o.keyspec || { kind: 'single', correct: o.key };
  return o.id;
}
function task(o) {
  const words = (o.stimuli || []).filter((s) => s.text).reduce((n, s) => n + countWords(s.text), 0);
  tasks.push({
    id: o.id, level: 'B1', module: o.module, part: o.part, interaction: o.interaction,
    instructions: { text_de: o.instructions, source: 'klarweg_paraphrase' },
    context_line: o.context || undefined, frame: 'synthetic',
    stimuli: (o.stimuli || []).map((s, i) => ({ role: s.role, asset_id: s.asset, label: s.label || null, order: i + 1, speaker_ids: s.speakers || undefined })),
    items: o.items, indicators: { synthetic: true, words, ...(o.indicators || {}) }, topic: ['synthetic'], provenance: provenance(),
    turns: o.turns || undefined
  });
  return o.id;
}

/* ---------------- LESEN ---------------- */
const RF = [{ option_id: 'richtig', label: 'Richtig' }, { option_id: 'falsch', label: 'Falsch' }];
const JN = [{ option_id: 'ja', label: 'Ja' }, { option_id: 'nein', label: 'Nein' }];
const abc = (a, b, c) => [{ option_id: 'a', label: 'a', text: a }, { option_id: 'b', label: 'b', text: b }, { option_id: 'c', label: 'c', text: c }];
const lesenInd = { inference_demand: 1, distractor_strength: 1, info_units: 7 };

const l1Text = `${BANNER}\n\nHallo Test-Team,\n\nPerson Alpha wohnt seit zwei Jahren in Teststadt A. Sie arbeitet in einem Büro und fährt jeden Tag mit dem Fahrrad. Am Wochenende kocht sie gern für Freunde. Im Sommer möchte sie einen Kurs in Teststadt B besuchen. Ihr Bruder Beta hilft ihr bei der Planung. Die Reise dauert drei Stunden mit dem Zug.\n\nViele Grüße\nAlpha`;
const l1Items = [
  item({ id: 'itm:b1:syn-l1-00', module: 'lesen', part: 1, task: 'tsk:b1:syn-l1', interaction: 'binary_choice', options: RF, stem: 'Beispiel: Alpha wohnt in Teststadt A.', key: 'richtig', example: true }),
  ...[
    ['Alpha fährt mit dem Bus zur Arbeit.', 'falsch'], ['Am Wochenende kocht Alpha gern.', 'richtig'], ['Der Kurs ist in Teststadt A.', 'falsch'],
    ['Beta hilft bei der Planung.', 'richtig'], ['Die Reise dauert fünf Stunden.', 'falsch'], ['Alpha arbeitet in einem Büro.', 'richtig']
  ].map(([stem, key], i) => item({ id: `itm:b1:syn-l1-0${i + 1}`, module: 'lesen', part: 1, task: 'tsk:b1:syn-l1', interaction: 'binary_choice', options: RF, stem: `${i + 1}. ${stem}`, key }))
];
task({ id: 'tsk:b1:syn-l1', module: 'lesen', part: 1, interaction: 'binary_choice', instructions: 'Lesen Sie den Testtext und die Aussagen 1 bis 6. Sind die Aussagen richtig oder falsch?',
  stimuli: [{ role: 'text', asset: textAsset('ast:syn-l1-text', l1Text), text: l1Text }], items: l1Items, indicators: lesenInd });

const l2aText = `${BANNER}\n\nTestartikel A: In Teststadt C gibt es seit einem Jahr eine neue Bibliothek. Sie ist von Montag bis Samstag geöffnet. Besonders beliebt sind die Abendkurse für Erwachsene. Die Stadt plant, im nächsten Jahr einen zweiten Standort zu eröffnen.`;
const l2bText = `${BANNER}\n\nTestartikel B: Ein Testverein organisiert jeden Monat einen Lauftreff im Park. Mitmachen kann jede Person ab 16 Jahren. Die Teilnahme ist kostenlos, aber man muss sich vorher online anmelden.`;
const l2Items = [
  item({ id: 'itm:b1:syn-l2-00', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2a', interaction: 'mcq_single', options: abc('ist neu.', 'ist geschlossen.', 'ist ein Museum.'), stem: 'Beispiel: Die Bibliothek …', key: 'a', example: true }),
  item({ id: 'itm:b1:syn-l2-07', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2a', interaction: 'mcq_single', options: abc('eine neue Bibliothek.', 'einen Lauftreff.', 'eine Schule.'), stem: '7. In Testartikel A geht es um …', key: 'a' }),
  item({ id: 'itm:b1:syn-l2-08', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2a', interaction: 'mcq_single', options: abc('ist sonntags offen.', 'hat Abendkurse.', 'ist sehr klein.'), stem: '8. Die Bibliothek …', key: 'b' }),
  item({ id: 'itm:b1:syn-l2-09', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2a', interaction: 'mcq_single', options: abc('schließt bald.', 'zieht um.', 'eröffnet einen zweiten Standort.'), stem: '9. Die Stadt plant …', key: 'c' }),
  item({ id: 'itm:b1:syn-l2-10', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2b', interaction: 'mcq_single', options: abc('einen Lauftreff.', 'eine Bibliothek.', 'ein Konzert.'), stem: '10. In Testartikel B geht es um …', key: 'a' }),
  item({ id: 'itm:b1:syn-l2-11', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2b', interaction: 'mcq_single', options: abc('nur Kinder.', 'Personen ab 16 Jahren.', 'nur Mitglieder.'), stem: '11. Mitmachen können …', key: 'b' }),
  item({ id: 'itm:b1:syn-l2-12', module: 'lesen', part: 2, task: 'tsk:b1:syn-l2b', interaction: 'mcq_single', options: abc('kostet Geld.', 'braucht keine Anmeldung.', 'braucht eine Online-Anmeldung.'), stem: '12. Die Teilnahme …', key: 'c' })
];
task({ id: 'tsk:b1:syn-l2a', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie Testartikel A und die Aufgaben 7 bis 9. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:syn-l2a-text', l2aText), text: l2aText, label: 'aus einer Testzeitung (synthetisch)' }], items: l2Items.slice(0, 4), indicators: lesenInd });
task({ id: 'tsk:b1:syn-l2b', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie Testartikel B und die Aufgaben 10 bis 12. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:syn-l2b-text', l2bText), text: l2bText, label: 'aus einer Testbroschüre (synthetisch)' }], items: l2Items.slice(4), indicators: lesenInd });

const POOL = 'abcdefghij'.split('');
const adTexts = POOL.map((l, i) => `Testanzeige ${l.toUpperCase()}: Synthetisches Angebot Nummer ${i + 1} für Testzwecke. Kontakt: test-${l}@example.invalid`);
const l3Stimuli = adTexts.map((t, i) => ({ role: 'ad', asset: textAsset(`ast:syn-l3-ad-${POOL[i]}`, t), text: t, label: POOL[i] }));
const POOL_OPTIONS = [...POOL.map((l) => ({ option_id: l, label: l })), { option_id: '0', label: '0 – keine passende Anzeige' }];
const l3Keys = ['c', 'd', '0', 'e', 'f', 'g', 'h']; // example uses 'b'; unused: a, i, j
const l3Items = [
  item({ id: 'itm:b1:syn-l3-00', module: 'lesen', part: 3, task: 'tsk:b1:syn-l3', interaction: 'matching_pool', options: POOL_OPTIONS, stem: 'Beispiel: Testperson 0 sucht Angebot Nummer 2.', key: 'b', example: true }),
  ...l3Keys.map((k, i) => item({ id: `itm:b1:syn-l3-${13 + i}`, module: 'lesen', part: 3, task: 'tsk:b1:syn-l3', interaction: 'matching_pool', options: POOL_OPTIONS,
    stem: `${13 + i}. Testperson ${13 + i} sucht ${k === '0' ? 'ein Angebot, das es nicht gibt' : `Angebot Nummer ${POOL.indexOf(k) + 1}`}.`, key: k }))
];
task({ id: 'tsk:b1:syn-l3', module: 'lesen', part: 3, interaction: 'matching_pool', instructions: 'Lesen Sie die Situationen 13 bis 19 und die Testanzeigen a bis j. Jede Anzeige nur einmal. Gibt es keine passende Anzeige, wählen Sie 0.',
  stimuli: l3Stimuli, items: l3Items, indicators: { ...lesenInd, info_units: 10 } });

const people = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben'];
const l4Keys = ['ja', 'nein', 'ja', 'nein', 'ja', 'nein', 'ja', 'nein'];
const l4Stimuli = people.map((p, i) => {
  const t = `Testperson ${p}: Ich ${l4Keys[i] === 'ja' ? 'bin für' : 'bin gegen'} den synthetischen Testvorschlag. (Synthetischer Kommentar ${i})`;
  return { role: 'text', asset: textAsset(`ast:syn-l4-c${i}`, t), text: t, label: `Testperson ${p}` };
});
const l4Items = people.map((p, i) => item({ id: `itm:b1:syn-l4-${i === 0 ? '00' : 19 + i}`, module: 'lesen', part: 4, task: 'tsk:b1:syn-l4', interaction: 'binary_choice', options: JN,
  stem: i === 0 ? `Beispiel: Testperson ${p}` : `${19 + i}. Testperson ${p}`, key: l4Keys[i], example: i === 0 }));
task({ id: 'tsk:b1:syn-l4', module: 'lesen', part: 4, interaction: 'binary_choice', instructions: 'Lesen Sie die Testkommentare 20 bis 26. Ist die Person für den Testvorschlag?',
  stimuli: l4Stimuli, items: l4Items, indicators: lesenInd });

const l5Text = `${BANNER}\n\nTest-Hausordnung: 1. Der Testraum ist von 8 bis 18 Uhr geöffnet. 2. Essen ist nur in der Küche erlaubt. 3. Schlüssel gibt es im Sekretariat. 4. Fahrräder bitte in den Keller stellen.`;
const l5Items = [
  ['Der Testraum ist …', abc('von 8 bis 18 Uhr offen.', 'immer offen.', 'nur samstags offen.'), 'a'],
  ['Essen ist …', abc('überall erlaubt.', 'nur in der Küche erlaubt.', 'verboten.'), 'b'],
  ['Schlüssel bekommt man …', abc('beim Hausmeister.', 'online.', 'im Sekretariat.'), 'c'],
  ['Fahrräder …', abc('kommen in den Keller.', 'bleiben draußen.', 'sind verboten.'), 'a']
].map(([stem, opts, key], i) => item({ id: `itm:b1:syn-l5-${27 + i}`, module: 'lesen', part: 5, task: 'tsk:b1:syn-l5', interaction: 'mcq_single', options: opts, stem: `${27 + i}. ${stem}`, key }));
task({ id: 'tsk:b1:syn-l5', module: 'lesen', part: 5, interaction: 'mcq_single', instructions: 'Lesen Sie die Aufgaben 27 bis 30 und die Test-Hausordnung. Wählen Sie a, b oder c.',
  context: 'Sie informieren sich über die synthetische Test-Hausordnung.', stimuli: [{ role: 'text', asset: textAsset('ast:syn-l5-text', l5Text), text: l5Text }], items: l5Items, indicators: lesenInd });

/* ---------------- HÖREN (TEST AUDIO tones) ---------------- */
const hInd = (plays, details, speakers = 1) => ({ speech_rate_wpm: null, speaker_count: speakers, plays, relevant_details: details, distractor_details: 0 });
const h1Ex = toneAsset('ast:syn-h1-ex', 1.5, 440, 'Hören Teil 1 Beispiel');
task({ id: 'tsk:b1:syn-h1-ex', module: 'hoeren', part: 1, interaction: 'audio_item_pairs', instructions: 'TEST AUDIO: Sie hören fünf kurze Testsignale. Jedes Signal hören Sie zweimal. Lesen Sie zuerst das Beispiel.',
  stimuli: [{ role: 'audio', asset: h1Ex }], items: [
    item({ id: 'itm:b1:syn-h1-01', module: 'hoeren', part: 1, task: 'tsk:b1:syn-h1-ex', interaction: 'binary_choice', options: RF, stem: '01 Beispiel: Sie hören einen Testton.', key: 'richtig', example: true }),
    item({ id: 'itm:b1:syn-h1-02', module: 'hoeren', part: 1, task: 'tsk:b1:syn-h1-ex', interaction: 'mcq_single', options: abc('ein Ton', 'zwei Töne', 'kein Ton'), stem: '02 Beispiel: Was hören Sie?', key: 'a', example: true })
  ], indicators: hInd(1, 2) });
const h1Keys = [['richtig', 'a'], ['falsch', 'b'], ['richtig', 'c'], ['falsch', 'a'], ['richtig', 'b']];
for (let t = 1; t <= 5; t++) {
  const a = toneAsset(`ast:syn-h1-t${t}`, 2, 440 + t * 60, `Hören Teil 1 Text ${t}`);
  task({ id: `tsk:b1:syn-h1-t${t}`, module: 'hoeren', part: 1, interaction: 'audio_item_pairs', instructions: `TEST AUDIO: Testsignal ${t}.`,
    stimuli: [{ role: 'audio', asset: a }], items: [
      item({ id: `itm:b1:syn-h1-${String(2 * t - 1).padStart(2, '0')}x`, module: 'hoeren', part: 1, task: `tsk:b1:syn-h1-t${t}`, interaction: 'binary_choice', options: RF, stem: `${2 * t - 1}. Testaussage zu Signal ${t}.`, key: h1Keys[t - 1][0] }),
      item({ id: `itm:b1:syn-h1-${String(2 * t).padStart(2, '0')}x`, module: 'hoeren', part: 1, task: `tsk:b1:syn-h1-t${t}`, interaction: 'mcq_single', options: abc('Option a', 'Option b', 'Option c'), stem: `${2 * t}. Testfrage zu Signal ${t}.`, key: h1Keys[t - 1][1] })
    ], indicators: hInd(2, 2) });
}
const h2 = toneAsset('ast:syn-h2', 3, 520, 'Hören Teil 2');
task({ id: 'tsk:b1:syn-h2', module: 'hoeren', part: 2, interaction: 'mcq_single', instructions: 'TEST AUDIO: Sie hören ein Testsignal einmal. Lösen Sie die Aufgaben 11 bis 15.',
  context: 'Synthetische Situation: Testführung.', stimuli: [{ role: 'audio', asset: h2 }],
  items: ['a', 'b', 'c', 'a', 'b'].map((k, i) => item({ id: `itm:b1:syn-h2-${11 + i}`, module: 'hoeren', part: 2, task: 'tsk:b1:syn-h2', interaction: 'mcq_single', options: abc('Option a', 'Option b', 'Option c'), stem: `${11 + i}. Testfrage ${11 + i}.`, key: k })),
  indicators: hInd(1, 5) });
const h3 = toneAsset('ast:syn-h3', 3, 600, 'Hören Teil 3');
task({ id: 'tsk:b1:syn-h3', module: 'hoeren', part: 3, interaction: 'binary_choice', instructions: 'TEST AUDIO: Sie hören ein Testgespräch einmal. Sind die Aussagen 16 bis 22 richtig oder falsch?',
  context: 'Synthetische Situation: zwei Testpersonen.', stimuli: [{ role: 'audio', asset: h3, speakers: ['spk:a', 'spk:b'] }],
  items: ['richtig', 'falsch', 'richtig', 'falsch', 'richtig', 'falsch', 'richtig'].map((k, i) => item({ id: `itm:b1:syn-h3-${16 + i}`, module: 'hoeren', part: 3, task: 'tsk:b1:syn-h3', interaction: 'binary_choice', options: RF, stem: `${16 + i}. Testaussage ${16 + i}.`, key: k })),
  indicators: hInd(1, 7, 2) });
const SPEAKERS = [{ option_id: 'a', label: 'Moderation (Test)' }, { option_id: 'b', label: 'Gast 1 (Test)' }, { option_id: 'c', label: 'Gast 2 (Test)' }];
const h4 = toneAsset('ast:syn-h4', 3, 660, 'Hören Teil 4');
task({ id: 'tsk:b1:syn-h4', module: 'hoeren', part: 4, interaction: 'speaker_assignment', instructions: 'TEST AUDIO: Sie hören eine Testdiskussion zweimal. Wer sagt was? Aussagen 23 bis 30.',
  stimuli: [{ role: 'audio', asset: h4, speakers: ['spk:m', 'spk:g1', 'spk:g2'] }],
  items: [
    item({ id: 'itm:b1:syn-h4-00', module: 'hoeren', part: 4, task: 'tsk:b1:syn-h4', interaction: 'speaker_assignment', options: SPEAKERS, stem: 'Beispiel: Testaussage 0.', key: 'a', example: true }),
    ...['b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'].map((k, i) => item({ id: `itm:b1:syn-h4-${23 + i}`, module: 'hoeren', part: 4, task: 'tsk:b1:syn-h4', interaction: 'speaker_assignment', options: SPEAKERS, stem: `${23 + i}. Testaussage ${23 + i}.`, key: k }))
  ], indicators: hInd(2, 8, 3) });

/* ---------------- SCHREIBEN ---------------- */
const sTasks = [
  [1, 80, 'TESTAUFGABE 1 (synthetisch): Schreiben Sie einer Testperson eine E-Mail (circa 80 Wörter). Beschreiben Sie etwas, begründen Sie etwas und machen Sie einen Vorschlag.', ['describe', 'justify', 'propose'], 'du'],
  [2, 80, 'TESTAUFGABE 2 (synthetisch): Schreiben Sie Ihre Meinung zum Testbeitrag (circa 80 Wörter).', ['opine', 'justify'], 'forum_neutral'],
  [3, 40, 'TESTAUFGABE 3 (synthetisch): Schreiben Sie einer Test-Kursleitung eine E-Mail (circa 40 Wörter). Entschuldigen Sie sich und erklären Sie den Grund.', ['apologise', 'inform'], 'Sie']
];
for (const [p, target, prompt, fns, register] of sTasks) {
  const stimuli = [{ role: 'prompt', asset: textAsset(`ast:syn-s${p}-prompt`, prompt), text: prompt }];
  if (p === 2) {
    const post = 'Testbeitrag (synthetisch): Ich finde, dass Testsysteme immer zuerst gründlich geprüft werden sollten. Was meinen Sie?';
    stimuli.push({ role: 'guestbook_post', asset: textAsset('ast:syn-s2-post', post), text: post, label: 'Gästebuch (Test)' });
  }
  const id = item({ id: `itm:b1:syn-s${p}`, module: 'schreiben', part: p, task: `tsk:b1:syn-s${p}`, interaction: 'text_response', stem: `Schreiben Teil ${p}`,
    response_spec: { type: 'text', target_words: target, min_words_target: Math.ceil(target / 2), editor: 'plain' }, indicators: { synthetic: true },
    keyspec: { kind: 'rubric', rubric_id: `rub:b1:schreiben:p${p}@1` } });
  task({ id: `tsk:b1:syn-s${p}`, module: 'schreiben', part: p, interaction: 'text_response', instructions: prompt, stimuli, items: [id],
    indicators: { functions: fns, function_count: fns.length, planning_demand: p === 2 ? 3 : 2, register, target_words: target, stimulus_words: stimuli.reduce((n, s) => n + countWords(s.text), 0) } });
}

/* ---------------- SPRECHEN ---------------- */
const spPartner = [1, 2, 3].map((n) => toneAsset(`ast:syn-sp1-partner-${n}`, 1, 700 + n * 40, `Sprechen Teil 1 Partner-Turn ${n}`));
const sp1Card = 'TEST-PLANUNGSKARTE (synthetisch): Planen Sie gemeinsam ein Test-Treffen. – Wann? – Wo? – Was mitbringen? – Wer macht was? – …';
const sp1 = item({ id: 'itm:b1:syn-sp1', module: 'sprechen', part: 1, task: 'tsk:b1:syn-sp1', interaction: 'spoken_response', stem: 'Sprechen Teil 1',
  response_spec: { type: 'audio', max_seconds: 210, turns: spPartner.map((a, i) => ({ turn: `t${i + 1}`, prompt_asset: a, seconds: 30 })) },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p1@1' } });
task({ id: 'tsk:b1:syn-sp1', module: 'sprechen', part: 1, interaction: 'spoken_response', instructions: 'Teil 1 (Test): Planen Sie mit der simulierten Partnerperson. Machen Sie Vorschläge und reagieren Sie.',
  stimuli: [{ role: 'planning_card', asset: textAsset('ast:syn-sp1-card', sp1Card), text: sp1Card }, ...spPartner.map((a) => ({ role: 'partner_audio', asset: a }))], items: [sp1],
  indicators: { functions: ['propose', 'react', 'negotiate', 'plan'], function_count: 4, planning_demand: 2, interaction_demand: 4, prep_seconds: 900 } });

const topicSlides = (n) => ['Thema vorstellen', 'Persönliche Erfahrung', 'Situation im Heimatland', 'Vor- und Nachteile & Meinung', 'Abschluss & Dank']
  .map((s, i) => textAsset(`ast:syn-sp2-t${n}-slide${i + 1}`, `Testthema ${n} – Folie ${i + 1}: ${s} (synthetisch)`));
const t1Slides = topicSlides(1);
const t2Slides = topicSlides(2);
const topic = item({ id: 'itm:b1:syn-sp2-topic', module: 'sprechen', part: 2, task: 'tsk:b1:syn-sp2', interaction: 'topic_choice', stem: 'Wählen Sie ein Thema (Thema 1 oder Thema 2).',
  options: [{ option_id: 't1', label: 'Testthema 1' }, { option_id: 't2', label: 'Testthema 2' }], response_spec: { type: 'choice' }, indicators: { synthetic: true }, keyspec: { kind: 'none' } });
const sp2 = item({ id: 'itm:b1:syn-sp2', module: 'sprechen', part: 2, task: 'tsk:b1:syn-sp2', interaction: 'spoken_response', stem: 'Sprechen Teil 2',
  response_spec: { type: 'audio', max_seconds: 240, turns: [{ turn: 't1', seconds: 240 }] }, indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p2@1' } });
task({ id: 'tsk:b1:syn-sp2', module: 'sprechen', part: 2, interaction: 'spoken_response', instructions: 'Teil 2 (Test): Präsentieren Sie Ihr gewähltes Testthema anhand der fünf Folien.',
  stimuli: [...t1Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 1' })), ...t2Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 2' }))], items: [topic, sp2],
  indicators: { functions: ['present', 'narrate', 'compare', 'opine', 'conclude'], function_count: 5, planning_demand: 3, interaction_demand: 0, prep_seconds: 900 } });

const partnerTalk = toneAsset('ast:syn-sp3-partner-talk', 2, 760, 'Sprechen Teil 3 Partner-Präsentation');
const examinerQ = toneAsset('ast:syn-sp3-examiner-q', 1, 820, 'Sprechen Teil 3 Prüferfrage');
const sp3 = item({ id: 'itm:b1:syn-sp3', module: 'sprechen', part: 3, task: 'tsk:b1:syn-sp3', interaction: 'spoken_response', stem: 'Sprechen Teil 3',
  response_spec: { type: 'audio', max_seconds: 150, turns: [{ turn: 't1', seconds: 60, prompt_asset: partnerTalk }, { turn: 't2', seconds: 45, prompt_asset: examinerQ }] },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p3@1' } });
task({ id: 'tsk:b1:syn-sp3', module: 'sprechen', part: 3, interaction: 'spoken_response', instructions: 'Teil 3 (Test): Geben Sie eine Rückmeldung, stellen Sie eine Frage und antworten Sie.',
  stimuli: [{ role: 'partner_audio', asset: partnerTalk }, { role: 'examiner_audio', asset: examinerQ }], items: [sp3],
  indicators: { functions: ['react', 'ask', 'answer'], function_count: 3, planning_demand: 1, interaction_demand: 3, prep_seconds: 900 } });

/* ---------------- FORM ---------------- */
const byPart = (module, part) => tasks.filter((t) => t.module === module && t.part === part);
const placement = (module, part) => {
  const ts = byPart(module, part);
  const order = ts.flatMap((t) => t.items).map((id) => {
    const it = items.find((x) => x.id === id);
    const productive = ['topic_choice', 'text_response', 'spoken_response'].includes(it.interaction);
    const display = productive ? null
      : it.is_example ? (id.endsWith('-01') ? '01' : id.endsWith('-02') ? '02' : '0')
        : it.stem.match(/^(\d+)\./)[1];
    return { item_id: id, display_no: display };
  });
  return { part, task_ids: ts.map((t) => t.id), item_order: order };
};
const form = {
  id: FORM_ID, level_config: 'lc:b1@1', kind: 'synthetic', label: 'Synthetische Testform S0 (nur Systemtest)', status: 'live', rev: 1, release_note: 'TEST CONTENT ONLY',
  modules: [
    { module: 'lesen', parts: [1, 2, 3, 4, 5].map((p) => placement('lesen', p)) },
    { module: 'hoeren', parts: [1, 2, 3, 4].map((p) => placement('hoeren', p)) },
    { module: 'schreiben', parts: [1, 2, 3].map((p) => placement('schreiben', p)) },
    { module: 'sprechen', parts: [1, 2, 3].map((p) => placement('sprechen', p)) }
  ],
  topic_map: { lesen: ['synthetic'], hoeren: ['synthetic'], schreiben: ['synthetic'], sprechen: ['synthetic'] },
  timing_overrides: {
    note: 'Allowed for kind=synthetic only: short phases so end-to-end tests finish quickly.',
    hoeren: { example_preread_seconds: 2, item_preread_seconds_per_text: 2, gap_between_plays_seconds: 1, answer_seconds_after_text: 1,
      part_preread_seconds: { 2: 2, 3: 2, 4: 2 }, part_answer_seconds: { 2: 1, 3: 1, 4: 1 }, part_gap_seconds: { 4: 1 }, review_seconds: 15, total_seconds_gate: { min: 0, max: 900 } },
    sprechen: { prep_seconds: 20, phases: [{ id: 'intro', seconds: 5, rated: false }, { id: 'teil1', seconds: 120 }, { id: 'teil2', seconds: 120 }, { id: 'partner', seconds: 5, listen_only: true }, { id: 'teil3', seconds: 120 }] }
  },
  authored_by: ['klarweg-engineering'], reviewed_by: [], created_at: DATE
};

const files = {
  'form.json': form,
  'tasks.json': tasks,
  'items.json': items,
  'keys.json': { form_id: FORM_ID, note: 'SERVER ONLY — synthetic keys; never served to browsers', keys },
  'assets.json': assets
};
/* The exact bytes of every registered synthetic form. The public-repo
   boundary check (check-public-boundary.mjs) requires every form in this
   repository to be byte-identical to this output. */
export const SYNTHETIC_FORMS = [{
  rel: 'forms/synthetic/b1-synthetic-s0',
  files: Object.fromEntries(Object.entries(files).map(([name, data]) => [name, JSON.stringify(data, null, 2) + '\n']))
}];

if (import.meta.url === `file://${process.argv[1]}`) {
  const check = process.argv.includes('--check');
  let drift = false;
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, next] of Object.entries(SYNTHETIC_FORMS[0].files)) {
    const p = path.join(OUT, name);
    if (check) { if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== next) { drift = true; console.error('out of date:', p); } }
    else fs.writeFileSync(p, next);
  }
  if (check && drift) process.exit(1);
  console.log(JSON.stringify({ form: FORM_ID, tasks: tasks.length, items: items.length, assets: assets.length, check }));
}
