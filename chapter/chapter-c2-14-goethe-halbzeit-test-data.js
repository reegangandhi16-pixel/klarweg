/* KLARWEG CHAPTER DATA — C2 · Chapter 14
   "Goethe Halbzeit Test" — official mid-course assessment covering
   Chapters 1-13 (Zeitformen, Präfixverben, Ergänzungen, Nomen-Verb-
   Verbindungen, Konjunktiv II, Konjunktiv I, Modalverben,
   Diskursmarker, Relativsätze, Passiv, Passiversatzformen). NO new
   grammar, NO new vocabulary — integration, fluency, and Goethe C2
   readiness assessment only. Dialogue: Dorothea and Timo ONLY. */
const CHAPTER = {
  id: 'c2-14-goethe-halbzeit-test',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 14,
  title: 'Goethe Halbzeit Test',
  titleEn: 'Halfway checkpoint — Chapters 1–13 integrated',
  description: 'You have reached the base camp of Mount Everest. Everything you learned in Chapters 1–13 got you here. This is the last equipment check before the final ascent.',
  xp: 1550, time: 165, difficulty: 'Checkpoint',
  nextChapter: { number: 15, title: 'Partizipien als Adjektive', titleEn: 'Participles as adjectives' , href: 'chapter-c2-15-partizipien-als-adjektive.html' },
  prevChapter: { number: 13, title: 'Passiversatzformen', titleEn: 'Alternatives to the passive', href: 'chapter-c2-13-passiversatzformen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Base camp before the <em>summit</em>.',
    intro: 'Taking a complete Goethe C2 mock exam together, Dorothea reports a government\'s claim that a study is reproducible, and Timo insists on running his own analysis — the last equipment check before the final ascent.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how tense, reporting, modality, discourse markers, relative clauses, passive, and passive alternatives combine in one integrated performance'],
    scene: 'Gemeinsame Simulation der vollständigen Goethe-C2-Prüfung',
    femaleSpeakers: ['Dorothea'],
    dialogue: [
      { speaker: 'Dorothea', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Regierung', role: 'r-subject', en: 'government', hi: 'सरकार', pron: 'ray-GEE-rung', type: 'Noun · fem.' },
        { w: 'erklärte', role: 'r-verb', en: 'declared', hi: 'कहा', pron: 'er-KLAIR-tuh', type: 'Verb · erklären (Präteritum, recycled C2)' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'sei', role: 'r-verb', en: 'is', hi: 'है', pron: 'zy', type: 'Verb · sein (Konjunktiv I, recycled C1/C2)' },
        { w: 'reproduzierbar', role: 'r-akkusativ', en: 'reproducible', hi: 'दोहराने योग्य', pron: 'ray-pro-du-TSEER-bahr', type: 'Adjective (recycled C2)' },
        { w: '.', plain: true }
      ], en: 'The government declared the study is reproducible.', hi: 'Sarkaar ne kaha ki adhyayan dohraane yogya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nachweisen', role: 'r-verb', en: 'verify', hi: 'साबित करना', pron: 'NAHKH-vy-zen', type: 'Verb · infinitive (Satzende, recycled C1/C2)' },
        { w: ',', plain: true },
        { w: 'darüber', role: 'r-conjunction', en: 'beyond that', hi: 'इसके अलावा', pron: 'da-RÜ-ber', type: 'Adverb · darüber hinaus (recycled C1/C2)' },
        { w: 'hinaus', role: 'r-conjunction', en: 'beyond', hi: 'से आगे', pron: 'hi-NOWS', type: 'Adverb · part 2' },
        { w: 'führe', role: 'r-verb', en: 'carry out', hi: 'करता हूँ', pron: 'FÜ-ruh', type: 'Verb · durchführen (ich, recycled C1/C2)', lexicalUnit: 'durchführen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'eigene', role: 'r-akkusativ', en: 'own', hi: 'अपनी', pron: 'EYE-ge-nuh', type: 'Adjective' },
        { w: 'Analyse', role: 'r-akkusativ', en: 'analysis', hi: 'विश्लेषण', pron: 'a-na-LÜ-zuh', type: 'Noun · fem. (recycled C2)' },
        { w: 'durch', role: 'r-verb', en: '(prefix of durchführen)', hi: '', pron: 'doorkh', type: 'Separable prefix · Satzende', lexicalUnit: 'durchführen' },
        { w: '.', plain: true }
      ], en: 'I must verify that, beyond that I carry out my own analysis.', hi: 'Mujhe yeh saabit karna hoga, iske alaava main apna khud ka vishleshan bhi karta hoon.' },
      { speaker: 'Dorothea', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'deren', role: 'r-subject', en: 'whose', hi: 'जिसके', pron: 'DAY-ren', type: 'Relativpronomen · genitive (recycled B2/C1/C2)' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'prüfen', role: 'r-verb', en: 'check', hi: 'जांचते हैं', pron: 'PRÜ-fen', type: 'Verb · prüfen (Satzende)' },
        { w: ',', plain: true },
        { w: 'stammt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'SHTAMT', type: 'Verb · stammen' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'kleinen', role: 'r-dativ', en: 'small', hi: 'छोटे', pron: 'KLY-nen', type: 'Adjective · dative' },
        { w: 'Institut', role: 'r-dativ', en: 'institute (dat.)', hi: 'संस्थान से', pron: 'ins-ti-TOOT', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'The study, whose results we check, comes from a small institute.', hi: 'Woh adhyayan, jiske parinaam hum jaanchte hain, ek chhote sansthaan se aata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ihm', role: 'r-dativ', en: 'it (masc. dat.)', hi: 'उसे', pron: 'eem', type: 'Pronoun · dative' },
        { w: 'zufolge', role: 'r-preposition', en: 'according to', hi: 'के अनुसार', pron: 'tsoo-FOL-guh', type: 'Preposition + dative (recycled C1/C2)' },
        { w: 'wurden', role: 'r-verb', en: 'were', hi: 'थे', pron: 'VUR-den', type: 'Verb · werden (Passiv Präteritum, recycled C2)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'डेटा', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'sorgfältig', role: 'r-akkusativ', en: 'carefully', hi: 'सावधानी से', pron: 'ZORK-fel-tikh', type: 'Adverb' },
        { w: 'erhoben', role: 'r-verb', en: 'collected', hi: 'एकत्रित', pron: 'air-HOH-ben', type: 'Partizip II · Satzende', why: 'die Daten wurden erhoben = the data were collected, standard passive lab formula (recycled C2).', ex: 'die Daten wurden erhoben' },
        { w: '.', plain: true }
      ], en: 'According to it, the data were carefully collected.', hi: 'Uske anusaar, data saavdhaani se ekatrit kiya gaya tha.' },
      { speaker: 'Dorothea', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'bleibt', role: 'r-verb', en: 'remains', hi: 'रहता है', pron: 'BLYPT', type: 'Verb · bleiben' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'Zweifel', role: 'r-subject', en: 'doubt', hi: 'संदेह', pron: 'TSVY-fel', type: 'Noun · masc. (recycled C2)' },
        { w: 'bestehen', role: 'r-verb', en: 'standing', hi: 'बना', pron: 'be-SHTAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Nevertheless a doubt remains standing.', hi: 'Phir bhi ek sandeh bana rehta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'zweiten', role: 'r-dativ', en: 'second', hi: 'दूसरे', pron: 'TSVY-ten', type: 'Adjective · dative' },
        { w: 'Hälfte', role: 'r-dativ', en: 'half (dat.)', hi: 'आधे में', pron: 'HEL-ftuh', type: 'Noun · fem. dat.' },
        { w: 'genauer', role: 'r-akkusativ', en: 'more precisely', hi: 'ज़्यादा सटीक', pron: 'ge-NOW-er', type: 'Adverb · Komparativ' },
        { w: 'nachforschen', role: 'r-verb', en: 'investigate', hi: 'जांच पड़ताल करना', pron: 'NAHKH-for-shen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We should investigate more precisely in the second half.', hi: 'Humein doosre aadhe mein zyaada sateek jaanch padtaal karni chahiye.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'You have reached the <span class="de r-basislager-metapher">base camp</span> — this checkpoint inspects every skill before the final ascent.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is the GOETHE HALBZEIT TEST — the official mid-course assessment integrating Chapters 1-13: (1) Zeitformen der Verben, (2) Verben mit Präfixen, (3) Verben und ihre Ergänzungen, (4) Nomen-Verb-Verbindungen, (6) Konjunktiv II ("dimmer switch" for certainty/diplomacy), (7) Konjunktiv I ("invisible quotation marks" for neutral reporting), (8) Modalverben ("pair of glasses" for epistemic/deontic modality), (10) Adverbialsätze & Diskursmarker ("train couplings" for cohesion), (11) Relativsätze ("gift box" for information packaging), (12) Passiv ("camera" for perspective control), (13) Passiversatzformen ("road network" for stylistic alternatives). NO new grammar is introduced — assess ONLY whether the learner integrates ALL of these skills naturally and simultaneously, like a base-camp equipment check before the second half of the course. The most important things to catch: reverting to Indikativ where Konjunktiv I is needed; missing epistemic hedging; confusing müssen/sollen; repeating the same discourse marker throughout a text; overloaded/under-compressed relative clauses; unmotivated or missing passive/passive-alternative choices; inconsistent register across one text. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag issues traceable to any of Chapters 1-4, 6-8, or 10-13; prioritize noting where the learner could combine tense choice + reporting mood + modality + discourse cohesion + relative clause packaging + passive/alternative choice consistently, rather than listing chapter-by-chapter grammar rules. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (note which chapter\'s skill it draws on). If none: <li>No errors — well done.</li> 3) <p><b>Base-camp check:</b> one sentence on whether all the learner\'s "equipment" (tense, reporting, modality, cohesion, relative clauses, passive) works together, ready for the second half of the course.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — your equipment is ready for the summit. You may proceed to the second half of the course.', mid: 'Good. Revisit your weakest of the eleven skills before continuing to Chapter 15.', low: 'Worth revisiting Chapters 1-13 individually before the ascent — remember: base camp is where you check every skill works together.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Regierung', role: 'plain' }, { w: 'erklärte', role: 'r-konjunktiv1' }, { w: ',', plain: true }, { w: 'die', role: 'plain' }, { w: 'Maßnahme', role: 'plain' }, { w: 'sei', role: 'r-konjunktiv1' }, { w: 'wirksam', role: 'r-konjunktiv1' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: this checkpoint is the base-camp equipment check before the ascent to the second half of the course.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Dorothea and Timo complete a full Goethe C2 mock examination together across every register.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key vocabulary from Chapters 1-13 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Integrated revision of tense, reporting, modality, discourse markers, relative clauses, and passive/alternatives.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, scientific publication, political editorial, and literary essay for integrated C2 features.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify reporting, speaker attitude, discourse markers, passive choices, and register across four contexts.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice formal presentation, spontaneous discussion, policy recommendations, and diplomatic disagreement.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite with Konjunktiv I/modals/passive, edit for cohesion, simplify legal German, and write a 700-word integrated essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete a full grammar, vocabulary, and register review across all eleven skill areas with error correction and stylistic editing.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions integrating Chapters 1-13. Pass to bank the full 1550 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your C2 Progress Dashboard across Chapters 1-14.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 1-13 with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '24 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Integrated grammar review, sentence transformation, and stylistic editing drills, plus the full 700-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '28 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Integration Pyramid, Goethe Readiness Scale, Mid-Course Decision Flow, and a consolidated reference of Chapters 1-13.', pdfUrl: '/pdfs/grammar.pdf', size: '26 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Regierung erklärte, die Maßnahme sei wirksam.', text: 'Use Konjunktiv I for neutral reporting instead of Indikativ (Chapter 7)' },
    { de: 'Das dürfte zutreffen, doch ist es nicht sicher.', text: 'Combine Konjunktiv II and Modalverben for calibrated certainty (Chapters 6, 8)' },
    { de: 'Darüber hinaus zeigt die Studie, deren Ergebnisse signifikant sind, weitere Effekte.', text: 'Combine discourse markers and relative clauses for elegant cohesion (Chapters 10-11)' },
    { de: 'Die Daten wurden erhoben; die Ergebnisse sind reproduzierbar.', text: 'Balance passive and passive alternatives for scientific precision (Chapters 12-13)' },
    { de: 'Basislager vor dem Gipfel.', text: 'Integrate all eleven C2 skills together, naturally, in one performance' }
  ],
  vocab: [
    { de: 'nachweisen', pos: 'verb', level: 'C2', register: 'academic/scientific', en: 'to prove, demonstrate', hi: 'सिद्ध करना', synonyms: 'beweisen, belegen', antonyms: 'widerlegen', ex: 'Die Studie weist einen kausalen Zusammenhang nach.', exEn: 'The study proves a causal connection.', exHi: 'Study ek kaaranaatmak sambandh sidhh karti hai.', ex2: 'Es konnte nachgewiesen werden, dass die Hypothese zutrifft.', ex2En: 'It could be demonstrated that the hypothesis holds.', ex2Hi: 'Yeh sabit kiya jaa saka ki hypothesis sahi hai.' },
    { de: 'eine Analyse durchführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to carry out an analysis', hi: 'विश्लेषण करना', synonyms: 'analysieren', antonyms: null, ex: 'Wir führen eine umfassende Analyse der Daten durch.', exEn: 'We carry out a comprehensive analysis of the data.', exHi: 'Hum data ka vyapak vishleshan karte hain.', ex2: 'Die Analyse der Daten ergab neue Erkenntnisse.', ex2En: 'The analysis of the data yielded new insights.', ex2Hi: 'Data ke vishleshan se naye insights mile.' },
    { de: 'Die Regierung erklärte, ... sei ...', pos: 'expression (Konjunktiv I, neutral reporting)', level: 'C2', register: 'journalism/formal', en: 'the government declared that ... is ...', hi: 'सरकार ने घोषित किया कि ... है ...', synonyms: null, antonyms: null, ex: 'Die Regierung erklärte, die Maßnahme sei wirksam.', exEn: 'The government declared that the measure is effective.', exHi: 'Sarkaar ne ghoshit kiya ki upaay prabhaavi hai.', ex2: 'Die Ministerin erklärte, der Plan sei erfolgreich.', ex2En: 'The minister declared that the plan was successful.', ex2Hi: 'Mantri ne ghoshit kiya ki plan safal hai.' },
    { de: 'Er dürfte zu Hause sein.', pos: 'expression (Modalverb, epistemic)', level: 'C2', register: 'both', en: 'He is likely to be at home.', hi: 'वह घर पर होना चाहिए (उच्च संभावना)', synonyms: 'Er könnte zu Hause sein. (weaker)', antonyms: 'Er ist definitiv nicht zu Hause.', ex: 'Er dürfte zu Hause sein — das ist die epistemische Bedeutung.', exEn: 'He is likely to be at home — that\'s the epistemic meaning.', exHi: '"Er dürfte zu Hause sein" — yeh epistemic matlab hai.', ex2: 'Das dürfte zutreffen, auch wenn es nicht sicher ist.', ex2En: 'That is likely to be true, even if it is not certain.', ex2Hi: 'Yeh sahi ho sakta hai, bhale hi yeh nishchit nahi hai.' },
    { de: 'darüber hinaus', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal', en: 'moreover, furthermore', hi: 'इसके अतिरिक्त', synonyms: 'außerdem, ferner', antonyms: null, ex: 'Darüber hinaus zeigt die Studie signifikante regionale Unterschiede.', exEn: 'Moreover, the study shows significant regional differences.', exHi: 'Iske atirikt, study mahatvapoorna kshetriya antar dikhaati hai.', ex2: 'Darüber hinaus sollten ethische Implikationen berücksichtigt werden.', ex2En: 'Furthermore, ethical implications should be considered.', ex2Hi: 'Iske atirikt, naitik prabhaavon par vichaar karna chahiye.' },
    { de: 'die Studie, deren Ergebnisse ...', pos: 'academic relative construction (Genitiv)', level: 'C2', register: 'scientific/academic', en: 'the study, whose results ...', hi: 'अध्ययन, जिसके परिणाम ...', synonyms: null, antonyms: null, ex: 'Die Studie, deren Ergebnisse signifikant sind, überzeugt die Fachwelt.', exEn: 'The study, whose results are significant, convinces the scientific community.', exHi: 'Adhyayan, jiske parinaam mahatvapoorna hain, vaigyaanik samuday ko convince karta hai.', ex2: 'Die Studie, deren Ergebnisse widersprüchlich ausfielen, wird derzeit wiederholt.', ex2En: 'The study, whose results turned out contradictory, is currently being repeated.', ex2Hi: 'Adhyayan, jiske parinaam vipreet nikle, abhi dohraaya jaa raha hai.' },
    { de: 'die Daten wurden erhoben', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'the data were collected', hi: 'डेटा एकत्र किया गया', synonyms: null, antonyms: null, ex: 'Die Daten wurden über einen Zeitraum von zwei Jahren erhoben.', exEn: 'The data were collected over a period of two years.', exHi: 'Data do saal ki avadhi mein ikattha kiya gaya.', ex2: 'Die Daten wurden anonymisiert erhoben.', ex2En: 'The data were collected anonymously.', ex2Hi: 'Data anonymous roop se ikattha kiya gaya.' },
    { de: 'reproduzierbar', pos: 'adjective (-bar, passive alternative)', level: 'C2', register: 'scientific', en: 'reproducible', hi: 'पुनरुत्पादन योग्य', synonyms: 'wiederholbar', antonyms: 'nicht reproduzierbar', ex: 'Die Ergebnisse sind unter denselben Bedingungen reproduzierbar.', exEn: 'The results are reproducible under the same conditions.', exHi: 'Parinaam usi shartein mein reproducible hain.', ex2: 'Ein zentrales Kriterium in der Wissenschaft ist, ob ein Experiment reproduzierbar ist.', ex2En: 'A central criterion in science is whether an experiment is reproducible.', ex2Hi: 'Vigyaan mein ek kendriya criterion yeh hai ki experiment reproducible hai ya nahi.' }
  ],
  grammar: [
    { title: 'Zeitformen, Präfixe & Ergänzungen — Revision (Chapters 1-3)', body: [ 'Tense choice is perspective, not just grammar. Precise prefix verbs (nachweisen, darlegen) replace generic verbs. Obligatory complements (beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete.' ], hinglish: 'Teen cheezein saath. Tense nazariya batata hai \u2014 Historical Present se purani baat saamne hoti hui lagti hai. Academic writing mein precise prefix verbs chahiye (<b>nachweisen</b>, <b>darlegen</b>), aur unka Partizip II separability se tay hota hai: <b>nachgewiesen</b>. Aur har verb apna complement maangta hai, uske case ke saath \u2014 <b>beruhen auf</b> + Dativ (reflexive nahi), <b>zweifeln an</b> + Dativ. Shak ho to us hisse ko hata kar dekho.' },
    { title: 'Nomen-Verb-Verbindungen — Revision (Chapter 4)', body: [ 'Every simple verb has a formal twin. The noun-verb construction (eine Analyse durchführen) is chosen when precision, objectivity and formality matter.' ], hinglish: 'Har simple verb ka ek formal roop hota hai \u2014 <i>analysieren</i> se <span class="de">eine Analyse durchf\u00fchren</span>. Par support verb fix hota hai: <b>Entscheidung treffen</b>, <b>Analyse durchf\u00fchren</b>, <b>Antrag stellen</b> \u2014 <i>machen</i> yahan lagbhag kabhi nahi aata. Aur purana object Genitiv mein chala jaata hai: <span class="de">die Analyse der Daten</span>.' },
    { title: 'Konjunktiv II & I, Modalverben — Revision (Chapters 6-8)', body: [ 'Konjunktiv II is a dimmer switch for certainty and diplomacy. Konjunktiv I is invisible quotation marks for neutral reporting. Modalverben are a pair of glasses for epistemic/deontic modality (er dürfte/muss/sollte).' ], hinglish: 'Teen tools, teen kaam. <b>Konjunktiv II</b> se certainty aur politeness adjust hoti hai \u2014 aur <b>haben/sein</b> aur modals ke saath synthetic form zaroori hai (<b>h\u00e4tte, w\u00e4re, k\u00f6nnte</b>), weak verbs ke saath <b>w\u00fcrde</b>. <b>Konjunktiv I</b> batata hai ki shabd tumhare nahi hain \u2014 par <b>ich/wir/sie</b> mein form Indikativ jaisi ho jaati hai, isliye wahan Konjunktiv II lagta hai. Aur <b>modals</b> do kaam karte hain: majboori, ya andaaza \u2014 aur past ke andaaze ke liye end mein <b>Partizip II + haben/sein</b> aata hai.' },
    { title: 'Diskursmarker & Relativsätze — Revision (Chapters 10-11)', body: [ 'Discourse markers are train couplings connecting paragraph-carriages (darüber hinaus, demgegenüber, folglich). Relative clauses are gift boxes — the main clause is the box, the relative clause is the note carefully wrapped inside.' ], hinglish: 'Dono mein asli galti word order ki hoti hai. <b>Discourse markers</b> zyada-tar adverbs hain, isliye position 1 par aayein to verb turant baad aata hai aur comma nahi lagta \u2014 par <b>wohingegen</b> conjunction hai, isliye uska verb end mein. Aur <b>relative clauses</b> mein teen baatein: pronoun ka gender comma se pehle wale noun se, uska case clause ke apne verb se, aur preposition pronoun se pehle.' },
    { title: 'Passiv & Passiversatzformen — Revision (Chapters 12-13)', body: [ 'Passive is a camera pointed at the process, not the actor. Passive is only one road among many — sein+zu, sich lassen, man, -bar adjectives, and nominalization are the rest of the network.' ], hinglish: 'Passive se spotlight karne wale se hatkar kaam par chala jaata hai. Par yeh sirf ek option hai \u2014 <b>sich lassen</b> sambhavna batata hai (uske baad plain infinitive), <b>sein + zu</b> zimmedaari (aur <b>zu</b> separable verb ke andar), <b>-bar</b> adjective ek property, aur <b>man</b> jab koi bhi kar sakta ho. Do forms pakki kar lo: Perfekt mein <b>worden</b> (kabhi <i>geworden</i> nahi), aur process ke liye <b>wird</b> par haalat ke liye <b>ist</b>.' },
    { title: 'Integrationspyramide (Integration Pyramid)', body: [ 'Grammar → Sentence → Paragraph → Text → Register → Style → Native-Level Communication. This checkpoint tests whether all eleven skills from Chapters 1-13 combine naturally in one performance.' ], hinglish: 'Yeh checkpoint alag-alag rules nahi poochhta \u2014 yeh dekhta hai ki gyaarah cheezein ek hi text mein saath chal rahi hain ya nahi: sahi tense, precise verb, sahi complement, reported mood, marker ka word order, aur register. Isliye neeche wali galtiyan dekho, aur jahan sochna pade wahan us chapter par wapas jao.' },
    { title: 'Meister-Tabelle', body: [ 'Consolidated reference across Chapters 1-13.' ], table: { head: ['Chapter', 'Skill', 'Core Insight'], rows: [ ['1-3', 'Zeitformen, Präfixe, Ergänzungen', 'Precise verbs need their obligatory complements'], ['4', 'Nomen-Verb-Verbindungen', 'Every simple verb has a formal nominal twin'], ['6-8', 'Konjunktiv II/I, Modalverben', 'Dimmer switch, invisible quotes, pair of glasses'], ['10', 'Diskursmarker', 'Train couplings connecting paragraph-carriages'], ['11', 'Relativsätze', 'Gift boxes for information packaging'], ['12-13', 'Passiv & Alternativen', 'A camera, and a whole road network'] ] }, hinglish: 'Chapters 1 se 13 tak ka summary \u2014 par har row ke saath yeh bhi yaad rakho ki uski sabse aam galti kya hai, kyunki exam mein wahi pakdi jaati hai.' },
    { title: 'Typische Fehler (common learner mistakes across Chapters 1–13)', body: [ 'One error from each major chapter, each combining two rules at once \u2014 which is how they actually appear in exam writing. If any still needs thinking about, the chapter reference tells you where to go.' ], mistakes: [
      { wrong: 'Laut dem Bericht sei die Lage stabil, und die Kosten sind gesunken.', right: 'Laut dem Bericht sei die Lage stabil, und die Kosten seien gesunken.', why: 'Ch.7: once a passage is in reported mode every verb stays in Konjunktiv I \u2014 slipping back into the Indikativ silently makes the second claim your own.' },
      { wrong: 'Folglich die Kosten sind gesunken, wohingegen steigt die Qualit\u00e4t.', right: 'Folglich sind die Kosten gesunken, wohingegen die Qualit\u00e4t steigt.', why: 'Ch.10: <b>folglich</b> is an adverb \u2014 verb second. <b>wohingegen</b> is a subordinating conjunction \u2014 verb last. Same meaning, opposite syntax.' },
      { wrong: 'Die Universit\u00e4t, dessen Bibliothek neu ist, und die im Labor erhobene Daten \u2026', right: 'Die Universit\u00e4t, deren Bibliothek neu ist, und die im Labor erhobenen Daten \u2026', why: 'Ch.11: <b>deren</b> for a feminine antecedent, and a participial attribute takes a normal adjective ending \u2014 <b>erhobenen</b>.' },
      { wrong: 'Das Problem l\u00e4sst sich gel\u00f6st werden, und die Frist ist einhalten.', right: 'Das Problem l\u00e4sst sich l\u00f6sen, und die Frist ist einzuhalten.', why: 'Ch.12\u201313: <b>sich lassen</b> takes a plain infinitive, and <b>sein + zu</b> needs the <b>zu</b> inside the separable verb.' },
      { wrong: 'Die Studie hat gemacht, dass der Effekt existiert, und eine Analyse gemacht.', right: 'Die Studie hat nachgewiesen, dass der Effekt existiert, und eine Analyse durchgef\u00fchrt.', why: 'Ch.2 and Ch.4: the precise prefix verb is <b>nachweisen</b>, and <b>Analyse</b> takes the support verb <b>durchf\u00fchren</b> \u2014 never <i>machen</i>.' }
    ], hinglish: 'Har bade chapter se ek galti \u2014 aur har ek mein do rules ek saath toot rahe hain, kyunki asli writing mein galtiyan aise hi aati hain.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Grammar. Vocabulary. Register. Writing. Speaking. Reading. Listening. Half-course evaluation. Continue to Chapter 15 — this is the flow of the mid-course decision.' ], note: 'Memory trick: imagine you have reached the base camp of Mount Everest. Everything you learned in Chapters 1-13 got you here. This is the last place to check your equipment before climbing the summit. If your grammar, vocabulary, style, and register all work together, you\'re ready for the second half of the journey.', hinglish: 'Yeh aadhe course ka checkpoint hai. Har skill par imaandaari se nazar daalo \u2014 sirf yeh mat dekho ki sab padh liya, balki yeh ki kaunsa hissa <b>bina soche</b> aa raha hai. Jo cheez abhi bhi rok kar sochni padti hai, wahi Chapter 15 se pehle dohraane layak hai.' }
  ],
  reading: {
    title: 'Zeitungsbericht: Kritik an neuer Rentenreform',
    titleEn: 'Reading A — Newspaper report: criticism of new pension reform',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Regierung', role: 'plain', en: 'government', hi: 'सरकार', type: 'Noun · fem.' },
      { w: 'erklärte', role: 'r-konjunktiv1', en: 'declared (introduces Konjunktiv-I-marked reported speech)', hi: '', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform', hi: 'सुधार', type: 'Noun · fem.' },
      { w: 'sei', role: 'r-konjunktiv1', en: 'is (Konjunktiv I, neutral reporting)', hi: '(Konjunktiv I, neutral reporting)', type: 'Verb · sein (Konjunktiv I)' },
      { w: 'notwendig', role: 'r-konjunktiv1', en: 'necessary (Satzende)', hi: 'ज़रूरी (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true },
      { w: 'Darüber', role: 'r-diskursmarker', en: 'moreover (part of the academic addition marker)', hi: '', type: 'Adverb' },
      { w: 'hinaus', role: 'r-diskursmarker', en: 'moreover (Satzende, completing "darüber hinaus")', hi: '(Satzende, discourse marker)', type: 'Adverb (Satzende)' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाता है', type: 'Verb (Präsens)' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'unabhängige', role: 'plain', en: 'independent', hi: 'स्वतंत्र', type: 'Adjective' },
      { w: 'Studie', role: 'plain', en: 'study (Satzende)', hi: 'अध्ययन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-relativsatz-akademisch', en: 'whose (Genitiv relative pronoun)', hi: 'जिसके', type: 'Relativpronomen · Gen.' },
      { w: 'Ergebnisse', role: 'r-relativsatz-akademisch', en: 'results (Satzende, completing the genitive relative)', hi: 'नतीजे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'signifikant', role: 'plain', en: 'significant', hi: 'महत्वपूर्ण', type: 'Adjective' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'gravierende', role: 'plain', en: 'serious', hi: 'गंभीर', type: 'Adjective' },
      { w: 'Nachteile', role: 'plain', en: 'disadvantages (Satzende)', hi: 'नुक़सान (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Geringverdiener', role: 'plain', en: 'low-income earners (Satzende)', hi: 'कम आय वालों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'The government declared that the reform is necessary. Moreover, an independent study, whose results are significant, shows serious disadvantages for low-income earners.',
    comprehension: [
      { q: 'Welches Konzept zeigt "erklärte, ... sei"?', options: ['Konjunktiv I für neutrale Berichterstattung', 'Konjunktiv II für Höflichkeit', 'Indikativ für Tatsachen'], answer: 0 },
      { q: 'Welches Konzept zeigt "darüber hinaus"?', options: ['Ein akademischer Additionsmarker', 'Ein Kontrastmarker', 'Ein Konzessionsmarker'], answer: 0 },
      { q: 'Welches Konzept zeigt "deren Ergebnisse signifikant sind"?', options: ['Ein Genitiv-Relativsatz zur Informationsverpackung', 'Ein restriktiver Relativsatz ohne Genitiv', 'Kein Relativsatz'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wissenschaftliche Publikation', titleEn: 'Reading B — Scientific publication',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Daten', role: 'plain', en: 'data', hi: 'data', type: 'Noun · plural' },
      { w: 'wurden', role: 'r-passiv-akademisch', en: 'were (passive construction, revising Chapter 12)', hi: '(Chapter 12 revision)', type: 'Verb (Präteritum, Passiv)' },
      { w: 'erhoben', role: 'r-passiv-akademisch', en: 'collected (Satzende, completing the passive)', hi: '(Satzende, passive)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'parinaam', type: 'Noun · plural' },
      { w: 'sind', role: 'r-bar-adjektiv', en: 'are (part of a -bar adjective construction, revising Chapter 13)', hi: '(Chapter 13 revision)', type: 'Verb (Präsens)' },
      { w: 'reproduzierbar', role: 'r-bar-adjektiv', en: 'reproducible (Satzende, a passive-alternative property)', hi: '(Satzende, passive alternative)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The data were collected. The results are reproducible.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_014_L001', speaker: 'Dorothea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Regierung behauptet, die Studie sei reproduzierbar — sollen wir das einfach übernehmen?', en: 'Timo, the government claims the study is reproducible — should we just adopt that?' },
      { id: 'C2_014_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, lass mich erst meine eigene Analyse laufen lassen, bevor wir das zitieren.', en: 'No, let me run my own analysis first before we cite that.' },
      { id: 'C2_014_L003', speaker: 'Dorothea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, wie lange brauchst du dafür ungefähr?', en: 'Good, how long will you need for that, roughly?' },
      { id: 'C2_014_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zwei Tage, dann wissen wir, ob die Behauptung wirklich standhält.', en: 'Two days, then we\'ll know whether the claim really holds up.' }
    ],
    transcript: 'Timo, die Regierung behauptet, die Studie sei reproduzierbar — sollen wir das einfach übernehmen? Nein, lass mich erst meine eigene Analyse laufen lassen, bevor wir das zitieren. Gut, wie lange brauchst du dafür ungefähr? Zwei Tage, dann wissen wir, ob die Behauptung wirklich standhält.',
    translation: 'Timo, the government claims the study is reproducible — should we just adopt that? No, let me run my own analysis first before we cite that. Good, how long will you need for that, roughly? Two days, then we\'ll know whether the claim really holds up.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Regierung' },
      { w: 'behauptet' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Studie' },
      { w: 'sei' },
      { w: 'reproduzierbar' },
      { w: '—', plain: true },
      { w: 'sollen' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'einfach' },
      { w: 'übernehmen' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'lass' },
      { w: 'mich' },
      { w: 'erst' },
      { w: 'meine' },
      { w: 'eigene' },
      { w: 'Analyse' },
      { w: 'laufen' },
      { w: 'lassen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'zitieren' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'lange' },
      { w: 'brauchst' },
      { w: 'du' },
      { w: 'dafür' },
      { w: 'ungefähr' },
      { w: '?', plain: true },
      { w: 'Zwei' },
      { w: 'Tage' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'wissen' },
      { w: 'wir' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'die' },
      { w: 'Behauptung' },
      { w: 'wirklich' },
      { w: 'standhält' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was behauptet die Regierung über die Studie?', qEn: 'What does the government claim about the study?', options: ['sie sei fehlerhaft', 'sie sei reproduzierbar', 'sie sei geheim', 'sie existiere nicht'], optionsEn: ['that it is flawed', 'that it is reproducible', 'that it is secret', 'that it doesn\'t exist'], answer: 1,
        explain: '"Die Regierung behauptet, die Studie sei reproduzierbar."' },
      { q: 'Was will Timo machen, bevor er die Behauptung zitiert?', qEn: 'What does Timo want to do before citing the claim?', options: ['sie sofort zitieren', 'seine eigene Analyse laufen lassen', 'die Regierung anrufen', 'das Thema fallenlassen'], optionsEn: ['quote them straight away', 'run his own analysis', 'call the government', 'drop the topic'], answer: 1,
        explain: '"Lass mich erst meine eigene Analyse laufen lassen."' }
    ]
  },
  speaking: [
    { task: "Die Regierung nennt die Studie reproduzierbar. Was schlägst du Timo vor?", taskEn: "The government calls the study reproducible. What do you propose to Timo?", de: "Nein, lass mich erst meine eigene Analyse durchführen.", en: "No, let me carry out my own analysis first." },
    { task: "Prüfung, Teil 1: Berichte die Meldung mit Quelle.", taskEn: "Exam, Part 1: report the news with its source.", de: "Nach Angaben der Regierung sei die Studie reproduzierbar.", en: "According to the government the study is reproducible." },
    { task: "Prüfung, Teil 2: Sag, was du nachweisen kannst.", taskEn: "Exam, Part 2: say what you can demonstrate.", de: "Die Daten wurden 2024 erhoben; darüber hinaus können wir den Effekt nachweisen.", en: "The data was collected in 2024; moreover we can demonstrate the effect." },
    { task: "Prüfung, Teil 3: Formuliere eine vorsichtige Vermutung.", taskEn: "Exam, Part 3: formulate a cautious assumption.", de: "Er dürfte zu Hause sein, erreichbar war er heute nicht.", en: "He's probably at home, he wasn't reachable today." },
    { task: "Prüfung: Widersprich diplomatisch und mach einen Vorschlag.", taskEn: "Exam: disagree diplomatically and make a proposal.", de: "Das wäre zu prüfen; ich würde zunächst eine eigene Analyse durchführen.", en: "That would have to be examined; I'd carry out my own analysis first." }
  ],
  writing: {
    prompt: 'TASK 1 — Integrated reporting (150 words): Rewrite a newspaper article using the most appropriate combination of Konjunktiv I, modal verbs, passive, and passive alternatives.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving discourse markers, relative clauses, nominal style, and passive alternatives.\n\nTASK 3 — Legal simplification (150 words): Rewrite a legal document into reader-friendly professional German while preserving precision.\n\nTASK 4 — Integrated essay (700 words): Write a Goethe C2 essay integrating every major grammar topic from Chapters 1-13 naturally.',
    starters: ['Die Regierung erklärte, ...', 'Darüber hinaus zeigt die Studie, deren...', 'Die Daten wurden erhoben, und es lässt sich zeigen, dass...'],
    placeholder: 'Wähle eine Aufgabe und integriere alle elf Fähigkeiten aus Kapitel 1-13...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which combination best demonstrates integrated C2 mastery of Chapters 1-13?', options: ['Konjunktiv I for reporting + a varied discourse marker + a compressed relative clause + a deliberate passive/alternative choice, all register-consistent', 'Using only Indikativ and plain passive throughout a formal report', 'Randomly switching structures without regard to register'], answer: 0, explain: 'C2 mastery means all eleven skills work together consistently, like a base-camp equipment check.' },
    gap: { sentence: ['Die Regierung erklärte, die Maßnahme ', ' wirksam.'], gaps: [ { answer: 'sei', accepts: ['sei'] } ], explain: '"sei" (Konjunktiv I) reports the claim neutrally, from Chapter 7.' },
    match: { q: 'Match each concept to its source chapter.', pairs: [ { noun: 'Die Regierung erklärte, ... sei', art: 'Chapter 7 — Konjunktiv I' }, { noun: 'Darüber hinaus', art: 'Chapter 10 — Diskursmarker' }, { noun: 'die Studie, deren Ergebnisse ...', art: 'Chapter 11 — Relativsätze' }, { noun: 'Die Ergebnisse sind reproduzierbar', art: 'Chapter 13 — Passiversatzformen' } ] },
    builder: { target: 'Build: "The government declared that the measure is effective." (integrating Ch7)', bank: ['Die', 'Regierung', 'erklärte', ',', 'die', 'Maßnahme', 'sei', 'wirksam', '.'], answer: ['Die', 'Regierung', 'erklärte', ',', 'die', 'Maßnahme', 'sei', 'wirksam', '.'], roles: { 'erklärte': 'r-konjunktiv1', 'sei': 'r-konjunktiv1' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Regierung sagt, die Maßnahme ist wirksam. Außerdem die Studie zeigt gute Ergebnisse. Außerdem die Daten wurden von Forschern gemacht.', right: 'Die Regierung erklärte, die Maßnahme sei wirksam. Darüber hinaus zeigt die Studie, deren Ergebnisse signifikant sind, positive Effekte. Die Daten wurden sorgfältig erhoben.', explain: 'This combines three fixes across chapters: Konjunktiv I for neutral reporting (Ch7), varied discourse markers instead of repeating "außerdem" (Ch10), and natural passive phrasing (Ch12).' }
  },
  quiz: [
    { q: 'What does this checkpoint\'s "base camp" memory trick represent?', options: ['Chapters 1-13 as the equipment check before the final ascent to Chapters 15+', 'A literal chapter about mountaineering', 'A reminder that grammar has no connection to real communication'], answer: 0, explain: 'Each chapter built one piece of equipment; this checkpoint verifies it all works together before continuing.' },
    { q: 'Which is a Chapter 7 (Konjunktiv I) mistake to watch for?', options: ['Using Indikativ where neutral reporting is needed, sounding personally convinced', 'Never using Konjunktiv I at all', 'Avoiding reporting verbs entirely'], answer: 0, explain: 'Indikativ collapses the epistemic distance a neutral reporter should maintain.' },
    { q: 'Which is a Chapter 10 (Diskursmarker) mistake to watch for?', options: ['Repeating the same discourse marker throughout a text', 'Using too many different discourse markers', 'Never using any discourse markers'], answer: 0, explain: 'Native writers vary discourse markers deliberately across a text.' },
    { q: 'Which is a Chapter 12-13 (Passiv/Passiversatzformen) mistake to watch for?', options: ['Defaulting to plain passive without considering alternatives like sein+zu or -bar adjectives', 'Never using passive at all', 'Using too many -bar adjectives'], answer: 0, explain: 'C2 mastery means deliberately choosing among the whole "road network" of passive alternatives.' },
    { q: 'What is the key integration goal of the Goethe Halbzeit Test?', options: ['Combining tense, reporting, modality, discourse cohesion, relative clauses, and passive choices consistently in one performance', 'Memorizing each chapter\'s rules in isolation', 'Avoiding all eleven skills in favor of simple grammar'], answer: 0, explain: 'C2 mastery is demonstrated by seamless integration across all eleven skills, not isolated recall.' }
  ],
  takeaways: [
    { c: 'r-basislager-metapher', html: 'Chapters 1-13 built eleven pieces of "equipment" — tense, prefixes, complements, nominal style, Konjunktiv II/I, modal verbs, discourse markers, relative clauses, passive, and passive alternatives. This checkpoint is the base-camp inspection before the final ascent.' },
    { c: 'r-konjunktiv1', html: 'Revision: Konjunktiv I is invisible quotation marks, reporting claims (die Regierung erklärte, ... sei) without personally confirming them.' },
    { c: 'r-diskursmarker', html: 'Revision: vary discourse markers deliberately (darüber hinaus, demgegenüber, folglich) instead of repeating one connector.' },
    { c: 'r-relativsatz-akademisch', html: 'Revision: relative clauses pack supporting detail elegantly (die Studie, deren Ergebnisse...) without overloading the sentence.' },
    { c: 'r-passiv-akademisch', html: 'Revision: choose deliberately among passive, sein+zu, sich lassen, man, and -bar adjectives rather than defaulting to one.' }
  ],
  revisionTips: [
    'Write one paragraph that deliberately combines Konjunktiv I reporting, a varied discourse marker, a compressed relative clause, and a deliberate passive/alternative choice.',
    'Revisit your weakest of the eleven skills (Chapters 1-13) and rewrite three of its example sentences from memory.',
    'Read one newspaper article and identify at least one example each of neutral reporting, a discourse marker, a relative clause, and a passive/alternative construction.'
  ]
};
window.CHAPTER = CHAPTER;
