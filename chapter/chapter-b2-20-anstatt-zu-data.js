/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 20
   "(an)statt ... zu" — an alternative action replaces the
   expected one, same subject required. Contrasted with ohne...zu
   (WITHOUT doing) — this chapter is INSTEAD OF doing. Does NOT
   introduce statt dass, anstatt dass, or um...zu (later chapters).
   IMPORTANT: dialogue uses ONLY Katja and Timo.
   Vocabulary source: uploaded chapter-20 list (55 items, user-edited
   general B2 vocabulary bank — education/career/social-science themes).
============================================================ */
const CHAPTER = {
  id: 'b2-20-anstatt-zu',
  phase: 'B2 · Phase 1',
  number: 20,
  title: '(an)statt ... zu',
  titleEn: 'instead of ... -ing',
  description: 'What someone did INSTEAD — statt/anstatt...zu names the alternative that replaced the expected action, same subject required.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 21, title: 'sowohl ... als auch', titleEn: 'both ... and ...' , href: 'chapter-b2-21-sowohl-als-auch.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'What they did <em>instead.</em>',
    intro: 'Katja tells Timo her brother took an IT job instead of studying, gathering experience instead of only learning theory — every choice framed against the alternative that got replaced, with (an)statt … zu.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear statt/anstatt...zu name the alternative action, same subject throughout'
    ],
    scene: 'Der Forschungsbericht',
    femaleSpeakers: ['Katja'],
    dialogue: [
      { speaker: 'Katja', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Bruder', role: 'r-subject', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben' },
        { w: 'sich', role: 'r-akkusativ', en: 'himself', hi: 'ख़ुद को', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'Informatiker', role: 'r-akkusativ', en: 'IT specialist', hi: 'आईटी विशेषज्ञ', pron: 'in-for-MAH-ti-ker', type: 'Noun · masc.', why: 'der Informatiker (this chapter).', ex: 'als Informatiker angestellt' },
        { w: 'anstellen', role: 'r-verb', en: 'get hired', hi: 'नौकरी पाई', pron: 'AN-shte-len', type: 'Verb · infinitive' },
        { w: 'lassen', role: 'r-modalverb', en: 'let', hi: 'दी', pron: 'LA-sen', type: 'Modal · lassen (Satzende)' },
        { w: ',', plain: true },
        { w: 'anstatt', role: 'r-conjunction', en: 'instead of', hi: 'के बजाय', pron: 'an-SHTAT', type: 'Conjunction · anstatt … zu', why: 'anstatt + zu-Infinitiv = instead of (doing something), this chapter.', ex: 'Er hat sich anstellen lassen, anstatt zu studieren.', exEn: 'He got hired instead of studying.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'studieren', role: 'r-verb', en: 'study', hi: 'पढ़ना', pron: 'shtoo-DEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'My brother got hired as an IT specialist instead of studying.', hi: 'Mere bhai ne padhne ke bajaye IT specialist ke roop mein naukri paayi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Umschulung', role: 'r-akkusativ', en: 'retraining', hi: 'पुनः प्रशिक्षण', pron: 'UM-shoo-lung', type: 'Noun · fem.' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'anstatt', role: 'r-conjunction', en: 'instead of', hi: 'के बजाय', pron: 'an-SHTAT', type: 'Conjunction · anstatt … zu' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Bildungsabschluss', role: 'r-akkusativ', en: 'education degree', hi: 'शिक्षा प्रमाणपत्र', pron: 'BIL-dungs-ap-shlus', type: 'Noun · masc.', why: 'der Bildungsabschluss (this chapter).', ex: 'anstatt einen Bildungsabschluss zu machen' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'machen', role: 'r-verb', en: 'make', hi: 'हासिल करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Really? He did a retraining instead of getting an education degree?', hi: 'Sach mein? Usne shiksha pramaanpatra haasil karne ke bajaye punah prashikshan kiya?' },
      { speaker: 'Katja', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Erfahrung', role: 'r-akkusativ', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'gesammelt', role: 'r-verb', en: 'gathered', hi: 'जमा की', pron: 'ge-ZA-melt', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'anstatt', role: 'r-conjunction', en: 'instead of', hi: 'के बजाय', pron: 'an-SHTAT', type: 'Conjunction · anstatt … zu' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Theorie', role: 'r-akkusativ', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'lernen', role: 'r-verb', en: 'learn', hi: 'सीखना', pron: 'LAIR-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'He gathered a lot of experience instead of only learning theory.', hi: 'Usne sirf siddhaant seekhne ke bajaye bahut anubhav jama kiya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'bewertest', role: 'r-verb', en: 'do you rate', hi: 'आंकती हो', pron: 'be-VER-test', type: 'Verb · bewerten (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'diese', role: 'r-akkusativ', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Wahl', role: 'r-akkusativ', en: 'choice', hi: 'चुनाव', pron: 'vahl', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'How do you rate this choice?', hi: 'Tum is chunaav ko kaise aankti ho?' },
      { speaker: 'Katja', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'यह', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'vernünftig', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'fer-NÜNF-tikh', type: 'Adjective', why: 'vernünftig = sensible (this chapter).', ex: 'Das ist vernünftig.', exEn: 'That is sensible.' },
        { w: ',', plain: true },
        { w: 'anstatt', role: 'r-conjunction', en: 'instead of', hi: 'के बजाय', pron: 'an-SHTAT', type: 'Conjunction · anstatt … zu' },
        { w: 'lange', role: 'r-akkusativ', en: 'long', hi: 'लंबा', pron: 'LANG-uh', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'zweifeln', role: 'r-verb', en: 'doubt', hi: 'संदेह करना', pron: 'TSVY-feln', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I find it very sensible, instead of doubting for a long time.', hi: 'Main lambe samay tak sandeh karne ke bajaye ise bahut uchit maanti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stimme', role: 'r-verb', en: 'agree', hi: 'सहमत हूँ', pron: 'SHTI-muh', type: 'Verb · stimmen', lexicalUnit: 'zustimmen' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix · Satzende', lexicalUnit: 'zustimmen' },
        { w: '.', plain: true },
        { w: 'Manchmal', role: 'r-adverb', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Handeln', role: 'r-subject', en: 'action', hi: 'कार्रवाई', pron: 'HAN-deln', type: 'Noun · neut.', why: 'das Handeln (this chapter).', ex: 'Handeln ist besser als Zweifeln.', exEn: 'Action is better than doubting.' },
        { w: 'besser', role: 'r-subject', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: 'als', role: 'r-conjunction', en: 'than', hi: 'से', pron: 'als', type: 'Conjunction · als' },
        { w: 'Zweifeln', role: 'r-subject', en: 'doubting', hi: 'संदेह', pron: 'TSVY-feln', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I agree. Sometimes action is better than doubting.', hi: 'Main sahmat hoon. Kabhi-kabhi kaarwaayi sandeh se behtar hoti hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-anstatt">(an)statt ... zu</span> names an ALTERNATIVE action that replaces the expected one — the SAME subject does both. <span class="de">Anna ging spazieren, anstatt zu lernen.</span> Contrasted with <span class="de">ohne ... zu</span> (WITHOUT doing something) from Chapter 19 — this chapter is INSTEAD OF doing something.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is (AN)STATT ... ZU (B2 level): expresses doing one action INSTEAD of an expected one, using an infinitive-with-zu construction (Anna ging spazieren, anstatt zu lernen. / Rohan kaufte ein Fahrrad, statt ein Auto zu kaufen.). Both "statt ... zu" (more common, everyday) and "anstatt ... zu" (slightly more formal) are correct and interchangeable. CRITICAL RULE: the subject of both actions must be the SAME (Anna lernt Deutsch, anstatt fernzusehen — NOT anstatt Rohan fernzusehen). Contrasted with "ohne ... zu" (Chapter 19, WITHOUT doing something) — (an)statt...zu means INSTEAD OF doing something. ' +
    'Do NOT expect statt dass, anstatt dass, or um...zu — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "(an)statt ... zu" requires the same subject in both clauses — if the learner names a different subject inside the clause, flag it.\n' +
    '- "zu" must be placed correctly before the infinitive (or between prefix and stem for separable verbs: anstatt abzuwarten).\n' +
    '- Do not confuse "(an)statt ... zu" (instead of) with "ohne ... zu" (without) — if the learner uses one where the other fits the intended meaning, gently note it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Same-subject check:</b> one sentence on whether the learner correctly kept the same subject in each (an)statt...zu construction.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use (an)statt...zu for alternatives with proper same-subject constructions. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the (an)statt...zu vs ohne...zu comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: (an)statt...zu = INSTEAD OF, same subject required.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'ging', role: 'plain' },
    { w: 'spazieren', role: 'plain' }, { w: ',', plain: true }, { w: 'anstatt', role: 'r-anstatt' }, { w: 'zu', role: 'plain' }, { w: 'lernen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: (an)statt...zu names the alternative action, same subject required.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katja and Timo discuss an educational research report, comparing expected vs actual choices.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master (an)statt...zu word order, the same-subject rule, and comparison to ohne...zu.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of (an)statt...zu constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the expected action, the alternative action, and same-subject constructions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give advice and compare alternatives using (an)statt...zu naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and opinion texts using (an)statt...zu appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill statt vs anstatt, ohne...zu vs (an)statt...zu, and sentence building.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 420 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'statt/anstatt drills, ohne...zu vs (an)statt...zu classification, sentence building, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete (an)statt...zu reference — word order, same-subject rule, ohne...zu comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna ging spazieren, anstatt zu lernen.', text: 'Use (an)statt...zu to name an alternative action' },
    { de: 'Rohan kaufte ein Fahrrad, statt ein Auto zu kaufen.', text: 'Place zu correctly before the infinitive' },
    { de: 'Same subject required', text: 'Know when (an)statt...zu is grammatically possible' },
    { de: 'ohne...zu (without) vs. (an)statt...zu (instead of)', text: 'Distinguish the two infinitive constructions' },
    { de: 'statt (common) vs. anstatt (formal)', text: 'Choose the right register' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-20 list) ----------
  vocab: [
    { de: 'Anfang', art: 'der', gender: 'm', plural: 'Anfänge', pos: 'noun', level: 'B2', en: 'beginning', hi: 'शुरुआत', ex: 'Der Anfang war schwierig.', exEn: 'The beginning was difficult.', exHi: 'Shuruaat mushkil thi.', ex2: 'Am Anfang des Jahres planen wir viel.', ex2En: 'At the beginning of the year we plan a lot.', ex2Hi: 'Saal ki shuruaat mein hum bahut kuch yojna banaate hain.' },
    { de: 'anstellen', pos: 'verb', level: 'B2', en: 'to employ, set up', hi: 'नियुक्त करना', ex: 'Die Firma stellt neue Mitarbeiter an.', exEn: 'The company employs new staff.', exHi: 'Company naye karmchaari niyukt karti hai.', ex2: 'Er stellt den Wasserhahn an.', ex2En: 'He turns on the tap.', ex2Hi: 'Woh naal khol deta hai.', conj: { praesens: 'stellt an', praeteritum: 'stellte an', perfekt: 'hat angestellt' } },
    { de: 'ausgeliefert sein', pos: 'verb', level: 'B2', en: 'to be at someone\'s mercy', hi: 'किसी की दया पर निर्भर होना', ex: 'Man ist manchmal dem Zufall ausgeliefert.', exEn: 'One is sometimes at the mercy of chance.', exHi: 'Kabhi-kabhi insaan bhaagya ke rehmodkaram par hota hai.', ex2: 'Sie fühlte sich der Situation ausgeliefert.', ex2En: 'She felt at the mercy of the situation.', ex2Hi: 'Use sthiti ke rehmodkaram par hone ka ehsaas hua.' },
    { de: 'Auswirkung', art: 'die', gender: 'f', plural: 'Auswirkungen', pos: 'noun', level: 'B2', en: 'effect, impact', hi: 'प्रभाव', ex: 'Der Bericht leitet klare Auswirkungen ab, statt vage zu bleiben.', exEn: 'The report derives clear effects, instead of remaining vague.', exHi: 'Report spasht prabhaav nikaalti hai, aspasht rehne ki bajaay.', ex2: 'Die Auswirkungen des Klimawandels sind spürbar.', ex2En: 'The effects of climate change are noticeable.', ex2Hi: 'Jalvaayu parivartan ke prabhaav mehsoos hote hain.' },
    { de: 'Beachtung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'attention, observance', hi: 'ध्यान', ex: 'Das Thema verdient mehr Beachtung.', exEn: 'The topic deserves more attention.', exHi: 'Vishay ko zyada dhyaan dene ki zaroorat hai.', ex2: 'Die Regeln erfordern strikte Beachtung.', ex2En: 'The rules require strict observance.', ex2Hi: 'Niyamon ka sakhti se paalan zaroori hai.' },
    { de: 'Bein', art: 'das', gender: 'n', plural: 'Beine', pos: 'noun', level: 'B2', en: 'leg', hi: 'टांग', ex: 'Er hat sich das Bein verletzt.', exEn: 'He injured his leg.', exHi: 'Usne apni taang mein chot lagayi.', ex2: 'Das Bein des Tisches ist wackelig.', ex2En: 'The leg of the table is wobbly.', ex2Hi: 'Mez ka paaya hilta hai.' },
    { de: 'Bildungsabschluss', art: 'der', gender: 'm', plural: 'Bildungsabschlüsse', pos: 'noun', level: 'B2', en: 'educational qualification', hi: 'शैक्षिक योग्यता', ex: 'Anstatt den Bildungsabschluss sofort zu erwerben, wählt sie einen Umweg.', exEn: 'Instead of acquiring the educational qualification immediately, she chooses a detour.', exHi: 'Shaikshik yogyata turant haasil karne ki bajaay, woh ek lambaa raasta chunti hai.', ex2: 'Ein höherer Bildungsabschluss verbessert die Chancen.', ex2En: 'A higher educational qualification improves the chances.', ex2Hi: 'Uchi shaikshik yogyata avsaron ko behtar banaati hai.' },
    { de: 'Bildungschance', art: 'die', gender: 'f', plural: 'Bildungschancen', pos: 'noun', level: 'B2', en: 'educational opportunity', hi: 'शैक्षिक अवसर', ex: 'Das Wissenschaftszentrum untersucht die Bildungschancen, statt nur Statistiken zu sammeln.', exEn: 'The science centre investigates educational opportunities, instead of only collecting statistics.', exHi: 'Vigyaan kendra shaikshik avsaron ki jaanch karta hai, sirf aankade ekatr karne ki bajaay.', ex2: 'Bildungschancen sind nicht immer gleich verteilt.', ex2En: 'Educational opportunities are not always distributed equally.', ex2Hi: 'Shaikshik avsar hamesha saman roop se vitarit nahi hote.' },
    { de: 'Bildungserfolg', art: 'der', gender: 'm', plural: 'Bildungserfolge', pos: 'noun', level: 'B2', en: 'educational success', hi: 'शैक्षिक सफलता', ex: 'Viele wählen einen praktischen Weg, anstatt sich nur auf den Bildungserfolg zu konzentrieren.', exEn: 'Many choose a practical path, instead of concentrating only on educational success.', exHi: 'Kai log ek vyaavahaarik raasta chunte hain, sirf shaikshik safalta par dhyaan kendrit karne ki bajaay.', ex2: 'Bildungserfolg hängt von vielen Faktoren ab.', ex2En: 'Educational success depends on many factors.', ex2Hi: 'Shaikshik safalta kai kaarakon par nirbhar karti hai.' },
    { de: 'Bildungserwartung', art: 'die', gender: 'f', plural: 'Bildungserwartungen', pos: 'noun', level: 'B2', en: 'educational expectation', hi: 'शैक्षिक अपेक्षा', ex: 'Obgleich die Bildungserwartung hoch ist, wählen viele einen praktischen Weg.', exEn: 'Although the educational expectation is high, many choose a practical path.', exHi: 'Halaanki shaikshik apeksha uchi hai, kai log ek vyaavahaarik raasta chunte hain.', ex2: 'Die Bildungserwartung der Eltern beeinflusst die Kinder.', ex2En: 'The parents\' educational expectation influences the children.', ex2Hi: 'Maata-pita ki shaikshik apeksha bacchon ko prabhaavit karti hai.' },
    { de: 'bringen', pos: 'verb', level: 'B2', en: 'to bring, take, get somewhere', hi: 'लाना, ले जाना', ex: 'Kannst du mir das Buch bringen?', exEn: 'Can you bring me the book?', exHi: 'Kya tum mujhe kitaab la sakte ho?', ex2: 'Er bringt die Kinder zur Schule.', ex2En: 'He takes the children to school.', ex2Hi: 'Woh bacchon ko school le jaata hai.', conj: { praesens: 'bringt', praeteritum: 'brachte', perfekt: 'hat gebracht' } },
    { de: 'Dach', art: 'das', gender: 'n', plural: 'Dächer', pos: 'noun', level: 'B2', en: 'roof', hi: 'छत', ex: 'Das Dach muss repariert werden.', exEn: 'The roof needs to be repaired.', exHi: 'Chhat ki marammat honi chahiye.', ex2: 'Vögel nisten auf dem Dach.', ex2En: 'Birds nest on the roof.', ex2Hi: 'Chidiyaan chhat par ghosla banaati hain.' },
    { de: 'folglich', pos: 'adverb', level: 'B2', en: 'consequently, therefore', hi: 'फलस्वरूप', ex: 'Folglich plant die Sozialwissenschaft neue Programme, anstatt abzuwarten.', exEn: 'Consequently, social science plans new programmes, instead of waiting.', exHi: 'Falasvaroop, saamaajik vigyaan naye kaaryakram banaata hai, intezaar karne ki bajaay.', ex2: 'Folglich müssen wir den Plan ändern.', ex2En: 'Consequently, we must change the plan.', ex2Hi: 'Falasvaroop, humein yojana badalni hogi.' },
    { de: 'Fördermaßnahme', art: 'die', gender: 'f', plural: 'Fördermaßnahmen', pos: 'noun', level: 'B2', en: 'support measure, funding measure', hi: 'सहायता उपाय', ex: 'Man sollte Fördermaßnahmen ausbauen, anstatt sie zu kürzen.', exEn: 'One should expand support measures, instead of cutting them.', exHi: 'Sahaayata upaayon ko badhaana chaahiye, unhein kam karne ki bajaay.', ex2: 'Die Fördermaßnahme half vielen Schülern.', ex2En: 'The support measure helped many students.', ex2Hi: 'Sahaayata upaay ne kai vidyaarthiyon ki madad ki.' },
    { de: 'grundsätzlich', pos: 'adjective', level: 'B2', en: 'fundamentally, in principle', hi: 'मूल रूप से', ex: 'Grundsätzlich stimme ich zu.', exEn: 'Fundamentally, I agree.', exHi: 'Main moolroop se sehmat hoon.', ex2: 'Grundsätzlich ist das eine gute Idee.', ex2En: 'In principle, that\'s a good idea.', ex2Hi: 'Moolroop se, yeh ek achha vichaar hai.' },
    { de: 'insbesondere', pos: 'adverb', level: 'B2', en: 'in particular, especially', hi: 'विशेष रूप से', ex: 'Insbesondere sollte man Fördermaßnahmen ausbauen.', exEn: 'In particular, one should expand support measures.', exHi: 'Vishesh roop se, sahaayata upaayon ko badhaana chaahiye.', ex2: 'Insbesondere junge Menschen sind betroffen.', ex2En: 'In particular, young people are affected.', ex2Hi: 'Vishesh roop se, yuva log prabhaavit hain.' },
    { de: 'kommen', pos: 'verb', level: 'B2', en: 'to come', hi: 'आना', ex: 'Sie kommt morgen zu Besuch.', exEn: 'She is coming to visit tomorrow.', exHi: 'Woh kal milne aa rahi hai.', ex2: 'Der Zug kommt pünktlich.', ex2En: 'The train arrives on time.', ex2Hi: 'Train samay par aati hai.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'Leben', art: 'das', gender: 'n', plural: 'Leben', pos: 'noun', level: 'B2', en: 'life', hi: 'जीवन', ex: 'Das Leben ist voller Überraschungen.', exEn: 'Life is full of surprises.', exHi: 'Jeevan aashcharyon se bhara hai.', ex2: 'Sie genießt ihr Leben.', ex2En: 'She enjoys her life.', ex2Hi: 'Woh apna jeevan aanand se jeeti hai.' },
    { de: 'obgleich', pos: 'grammar', level: 'B2', en: 'although, even though', hi: 'हालांकि', ex: 'Obgleich die Bildungserwartung hoch ist, wählen viele einen praktischen Weg.', exEn: 'Although the educational expectation is high, many choose a practical path.', exHi: 'Halaanki shaikshik apeksha uchi hai, kai log ek vyaavahaarik raasta chunte hain.', ex2: 'Obgleich es regnet, gehen wir spazieren.', ex2En: 'Although it\'s raining, we go for a walk.', ex2Hi: 'Halaanki baarish ho rahi hai, hum tehalne jaate hain.' },
    { de: 'Sozialforschung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'social research', hi: 'सामाजिक शोध', ex: 'Die Sozialforschung weicht von alten Modellen ab, anstatt ihnen zu folgen.', exEn: 'Social research deviates from old models, instead of following them.', exHi: 'Saamaajik shodh purane modelon se bhatakti hai, unka anusaran karne ki bajaay.', ex2: 'Sozialforschung untersucht menschliches Verhalten.', ex2En: 'Social research investigates human behaviour.', ex2Hi: 'Saamaajik shodh maanav vyavahaar ki jaanch karta hai.' },
    { de: 'Sozialwissenschaft', art: 'die', gender: 'f', plural: 'Sozialwissenschaften', pos: 'noun', level: 'B2', en: 'social science', hi: 'सामाजिक विज्ञान', ex: 'Folglich plant die Sozialwissenschaft neue Programme, anstatt abzuwarten.', exEn: 'Consequently, social science plans new programmes, instead of waiting.', exHi: 'Falasvaroop, saamaajik vigyaan naye kaaryakram banaata hai, intezaar karne ki bajaay.', ex2: 'Sie studiert Sozialwissenschaft an der Universität.', ex2En: 'She studies social science at university.', ex2Hi: 'Woh university mein saamaajik vigyaan padhti hai.' },
    { de: 'Wahl', art: 'die', gender: 'f', plural: 'Wahlen', pos: 'noun', level: 'B2', en: 'choice, election', hi: 'चुनाव', ex: 'Die Wahl des Studienfachs war schwierig.', exEn: 'The choice of the study subject was difficult.', exHi: 'Padhaai ke vishay ka chunaav mushkil tha.', ex2: 'Die Wahlen finden im Herbst statt.', ex2En: 'The elections take place in autumn.', ex2Hi: 'Chunaav sharad ritu mein hote hain.' },
    { de: 'Wirkung', art: 'die', gender: 'f', plural: 'Wirkungen', pos: 'noun', level: 'B2', en: 'effect, impact', hi: 'प्रभाव', ex: 'Zudem zeigt die Studie die Wirkung genau, statt sie zu übertreiben.', exEn: 'Moreover, the study shows the effect precisely, instead of exaggerating it.', exHi: 'Iske alaawa, adhyayan prabhaav ko satik roop se dikhaata hai, use badha-chadhaakar bataane ki bajaay.', ex2: 'Die Wirkung des Medikaments war schnell spürbar.', ex2En: 'The effect of the medication was quickly noticeable.', ex2Hi: 'Dawa ka prabhaav jaldi mehsoos hua.' },
    { de: 'Wissenschaftszentrum', art: 'das', gender: 'n', plural: 'Wissenschaftszentren', pos: 'noun', level: 'B2', en: 'science centre', hi: 'विज्ञान केंद्र', ex: 'Das Wissenschaftszentrum untersucht die Bildungschancen, statt nur Statistiken zu sammeln.', exEn: 'The science centre investigates educational opportunities, instead of only collecting statistics.', exHi: 'Vigyaan kendra shaikshik avsaron ki jaanch karta hai, sirf aankade ekatr karne ki bajaay.', ex2: 'Das Wissenschaftszentrum veröffentlicht regelmäßig Berichte.', ex2En: 'The science centre regularly publishes reports.', ex2Hi: 'Vigyaan kendra niyamit roop se reports prakaashit karta hai.' },
    { de: 'zudem', pos: 'adverb', level: 'B2', en: 'moreover, in addition', hi: 'इसके अलावा', ex: 'Zudem zeigt die Studie die Wirkung genau, statt sie zu übertreiben.', exEn: 'Moreover, the study shows the effect precisely, instead of exaggerating it.', exHi: 'Iske alaawa, adhyayan prabhaav ko satik roop se dikhaata hai, use badha-chadhaakar bataane ki bajaay.', ex2: 'Zudem ist der Preis sehr günstig.', ex2En: 'Moreover, the price is very affordable.', ex2Hi: 'Iske alaawa, daam bhi bahut uchit hai.' },
    { de: 'abgeben', pos: 'verb', level: 'B2', en: 'to hand in, submit', hi: 'जमा करना', ex: 'Er gab die Hausarbeit rechtzeitig ab.', exEn: 'He submitted the term paper on time.', exHi: 'Usne samay par assignment jama ki.', ex2: 'Bitte geben Sie das Formular ab.', ex2En: 'Please hand in the form.', ex2Hi: 'Kripya form jama karein.', conj: { praesens: 'gibt ab', praeteritum: 'gab ab', perfekt: 'hat abgegeben' } },
    { de: 'ablegen', pos: 'verb', level: 'B2', en: 'to take off, sit an exam, file, put down', hi: 'उतारना, परीक्षा देना', ex: 'Sie legte die Prüfung erfolgreich ab.', exEn: 'She passed the exam successfully.', exHi: 'Usne pariksha safaltapoorvak di.', ex2: 'Er legt den Mantel ab.', ex2En: 'He takes off the coat.', ex2Hi: 'Woh coat utaarta hai.', conj: { praesens: 'legt ab', praeteritum: 'legte ab', perfekt: 'hat abgelegt' } },
    { de: 'ableiten', pos: 'verb', level: 'B2', en: 'to derive', hi: 'निकालना', ex: 'Der Bericht leitet klare Auswirkungen ab, statt vage zu bleiben.', exEn: 'The report derives clear effects, instead of remaining vague.', exHi: 'Report spasht prabhaav nikaalti hai, aspasht rehne ki bajaay.', ex2: 'Man kann daraus eine Regel ableiten.', ex2En: 'One can derive a rule from that.', ex2Hi: 'Isse ek niyam nikaala ja sakta hai.', conj: { praesens: 'leitet ab', praeteritum: 'leitete ab', perfekt: 'hat abgeleitet' } },
    { de: 'abweichen', pos: 'verb', level: 'B2', en: 'to deviate, differ', hi: 'भटकना', ex: 'Die Sozialforschung weicht von alten Modellen ab, anstatt ihnen zu folgen.', exEn: 'Social research deviates from old models, instead of following them.', exHi: 'Saamaajik shodh purane modelon se bhatakti hai, unka anusaran karne ki bajaay.', ex2: 'Die Ergebnisse weichen stark voneinander ab.', ex2En: 'The results deviate strongly from each other.', ex2Hi: 'Parinaam ek doosre se bahut alag hain.', conj: { praesens: 'weicht ab', praeteritum: 'wich ab', perfekt: 'ist abgewichen' } },
    { de: 'allerdings', pos: 'adverb', level: 'B2', en: 'however, admittedly', hi: 'हालांकि', ex: 'Allerdings gibt es Ausnahmen.', exEn: 'However, there are exceptions.', exHi: 'Halaanki, kuch apavaad hain.', ex2: 'Das stimmt, allerdings nicht immer.', ex2En: 'That\'s true, admittedly not always.', ex2Hi: 'Yeh sahi hai, lekin hamesha nahi.' },
    { de: 'anbringen', pos: 'verb', level: 'B2', en: 'to attach, fit', hi: 'लगाना', ex: 'Er bringt das Schild an der Wand an.', exEn: 'He attaches the sign to the wall.', exHi: 'Woh deewaar par board lagaata hai.', ex2: 'Sie brachten neue Lampen an.', ex2En: 'They fitted new lamps.', ex2Hi: 'Unhone nayi lightein lagaayin.', conj: { praesens: 'bringt an', praeteritum: 'brachte an', perfekt: 'hat angebracht' } },
    { de: 'anerkannt', pos: 'adjective', level: 'B2', en: 'recognised', hi: 'मान्यता प्राप्त', ex: 'Das ist ein anerkannter Bildungsabschluss.', exEn: 'That is a recognised educational qualification.', exHi: 'Yeh ek maanyta praapt shaikshik yogyata hai.', ex2: 'Er ist ein anerkannter Experte.', ex2En: 'He is a recognised expert.', ex2Hi: 'Woh ek maanyta praapt visheshagya hai.' },
    { de: 'Angewohnheit', art: 'die', gender: 'f', plural: 'Angewohnheiten', pos: 'noun', level: 'B2', en: 'habit', hi: 'आदत', ex: 'Das ist eine schlechte Angewohnheit.', exEn: 'That is a bad habit.', exHi: 'Yeh ek buri aadat hai.', ex2: 'Ihre Angewohnheiten haben sich geändert.', ex2En: 'Her habits have changed.', ex2Hi: 'Uski aadatein badal gayi hain.' },
    { de: 'auffällig', pos: 'adjective', level: 'B2', en: 'striking, conspicuous', hi: 'उल्लेखनीय', ex: 'Das Muster ist sehr auffällig.', exEn: 'The pattern is very striking.', exHi: 'Namoona bahut ullekhaniya hai.', ex2: 'Sie trug ein auffälliges Kleid.', ex2En: 'She wore a conspicuous dress.', ex2Hi: 'Usne ek dhyaan kheenchne waali dress pehni.' },
    { de: 'aufregen', pos: 'verb', level: 'B2', en: 'to upset, get excited', hi: 'परेशान करना', ex: 'Das regt mich sehr auf.', exEn: 'That upsets me a lot.', exHi: 'Yeh mujhe bahut pareshaan karta hai.', ex2: 'Reg dich nicht auf!', ex2En: 'Don\'t get upset!', ex2Hi: 'Pareshaan mat ho!', conj: { praesens: 'regt auf', praeteritum: 'regte auf', perfekt: 'hat aufgeregt' } },
    { de: 'Informatiker/in', art: 'der/die', gender: 'm/f', plural: 'Informatiker/innen', pos: 'noun', level: 'B2', en: 'computer scientist', hi: 'कंप्यूटर वैज्ञानिक', ex: 'Der Informatiker entwickelt neue Software.', exEn: 'The computer scientist develops new software.', exHi: 'Computer vaigyaanik nayi software vikasit karta hai.', ex2: 'Sie ist eine bekannte Informatikerin.', ex2En: 'She is a well-known computer scientist.', ex2Hi: 'Woh ek prasiddh computer vaigyaanik hai.' },
    { de: 'Klavierbauer/in', art: 'der/die', gender: 'm/f', plural: 'Klavierbauer/innen', pos: 'noun', level: 'B2', en: 'piano maker', hi: 'पियानो निर्माता', ex: 'Der Klavierbauer repariert alte Instrumente.', exEn: 'The piano maker repairs old instruments.', exHi: 'Piano nirmaata purane instruments theek karta hai.', ex2: 'Sie lernt den Beruf der Klavierbauerin.', ex2En: 'She is learning the profession of piano maker.', ex2Hi: 'Woh piano nirmaata ka pesha seekh rahi hai.' },
    { de: 'Langzeitarbeitslose/r', art: 'der/die', gender: 'm/f', plural: 'Langzeitarbeitslose', pos: 'noun', level: 'B2', en: 'long-term unemployed person', hi: 'दीर्घकालिक बेरोज़गार व्यक्ति', ex: 'Langzeitarbeitslose brauchen besondere Unterstützung.', exEn: 'Long-term unemployed people need special support.', exHi: 'Deerghkaalik berozgaar logon ko vishesh sahaayata chaahiye.', ex2: 'Er war zwei Jahre lang Langzeitarbeitsloser.', ex2En: 'He was long-term unemployed for two years.', ex2Hi: 'Woh do saal tak deerghkaalik berozgaar tha.' },
    { de: 'Markenunternehmen', art: 'das', gender: 'n', plural: 'Markenunternehmen', pos: 'noun', level: 'B2', en: 'brand company', hi: 'ब्रांड कंपनी', ex: 'Das Markenunternehmen investiert viel in Werbung.', exEn: 'The brand company invests a lot in advertising.', exHi: 'Brand company vigyaapan mein bahut nivesh karti hai.', ex2: 'Sie arbeitet für ein großes Markenunternehmen.', ex2En: 'She works for a large brand company.', ex2Hi: 'Woh ek badi brand company ke liye kaam karti hai.' },
    { de: 'Maskenbildner/in', art: 'der/die', gender: 'm/f', plural: 'Maskenbildner/innen', pos: 'noun', level: 'B2', en: 'make-up artist', hi: 'मेकअप कलाकार', ex: 'Der Maskenbildner bereitet die Schauspieler vor.', exEn: 'The make-up artist prepares the actors.', exHi: 'Makeup artist actors ko taiyaar karta hai.', ex2: 'Die Maskenbildnerin arbeitet für das Theater.', ex2En: 'The make-up artist works for the theatre.', ex2Hi: 'Makeup artist theatre ke liye kaam karti hai.' },
    { de: 'Persönlichkeitstraining', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'personality training', hi: 'व्यक्तित्व प्रशिक्षण', ex: 'Sie nimmt an einem Persönlichkeitstraining teil.', exEn: 'She takes part in personality training.', exHi: 'Woh vyaktitva prashikshan mein bhaag leti hai.', ex2: 'Das Persönlichkeitstraining half ihm sehr.', ex2En: 'The personality training helped him a lot.', ex2Hi: 'Vyaktitva prashikshan ne use bahut madad ki.' },
    { de: 'Praktikumsbörse', art: 'die', gender: 'f', plural: 'Praktikumsbörsen', pos: 'noun', level: 'B2', en: 'internship exchange, board', hi: 'इंटर्नशिप बोर्ड', ex: 'Sie fand das Praktikum über die Praktikumsbörse.', exEn: 'She found the internship through the internship board.', exHi: 'Usne internship board ke zariye internship dhoondhi.', ex2: 'Die Praktikumsbörse listet viele Angebote.', ex2En: 'The internship board lists many offers.', ex2Hi: 'Internship board mein kai avsar soochibaddh hain.' },
    { de: 'Präsentationssoftware', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'presentation software', hi: 'प्रस्तुति सॉफ़्टवेयर', ex: 'Er benutzt eine neue Präsentationssoftware.', exEn: 'He uses new presentation software.', exHi: 'Woh naya presentation software istemaal karta hai.', ex2: 'Die Präsentationssoftware ist leicht zu bedienen.', ex2En: 'The presentation software is easy to use.', ex2Hi: 'Presentation software istemaal karna aasaan hai.' },
    { de: 'Projektmanagement', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'project management', hi: 'परियोजना प्रबंधन', ex: 'Sie studiert Projektmanagement.', exEn: 'She studies project management.', exHi: 'Woh project management padhti hai.', ex2: 'Gutes Projektmanagement spart Zeit und Geld.', ex2En: 'Good project management saves time and money.', ex2Hi: 'Achha project management samay aur paisa bachaata hai.' },
    { de: 'Rechtschreibfehler', art: 'der', gender: 'm', plural: 'Rechtschreibfehler', pos: 'noun', level: 'B2', en: 'spelling mistake', hi: 'वर्तनी की गलती', ex: 'Der Text enthält mehrere Rechtschreibfehler.', exEn: 'The text contains several spelling mistakes.', exHi: 'Text mein kai vartani ki galtiyaan hain.', ex2: 'Bitte korrigieren Sie die Rechtschreibfehler.', ex2En: 'Please correct the spelling mistakes.', ex2Hi: 'Kripya vartani ki galtiyaan theek karein.' },
    { de: 'Schauspielschule', art: 'die', gender: 'f', plural: 'Schauspielschulen', pos: 'noun', level: 'B2', en: 'acting school', hi: 'अभिनय स्कूल', ex: 'Sie besucht eine renommierte Schauspielschule.', exEn: 'She attends a renowned acting school.', exHi: 'Woh ek prasiddh abhinay school jaati hai.', ex2: 'Die Schauspielschule bietet verschiedene Kurse an.', ex2En: 'The acting school offers various courses.', ex2Hi: 'Abhinay school vibhinn courses deta hai.' },
    { de: 'Sprachkenntnisse', art: 'die', gender: 'f', plural: '(nur Plural)', pos: 'noun', level: 'B2', en: 'language skills', hi: 'भाषा कौशल', ex: 'Gute Sprachkenntnisse sind für den Job wichtig.', exEn: 'Good language skills are important for the job.', exHi: 'Naukri ke liye achhe bhaasha kaushal mahatvapurn hain.', ex2: 'Sie hat hervorragende Sprachkenntnisse.', ex2En: 'She has excellent language skills.', ex2Hi: 'Uske paas utkrisht bhaasha kaushal hain.' },
    { de: 'Stuntman/Stuntfrau', art: 'der/die', gender: 'm/f', plural: 'Stuntmen/Stuntfrauen', pos: 'noun', level: 'B2', en: 'stunt performer', hi: 'स्टंट कलाकार', ex: 'Der Stuntman führte einen gefährlichen Sprung aus.', exEn: 'The stunt performer executed a dangerous jump.', exHi: 'Stunt kalaakaar ne ek khatarnaak chhalaang lagaayi.', ex2: 'Die Stuntfrau trainiert täglich.', ex2En: 'The stunt performer trains daily.', ex2Hi: 'Stunt kalaakaar roz training karti hai.' },
    { de: 'Textilhersteller', art: 'der', gender: 'm', plural: 'Textilhersteller', pos: 'noun', level: 'B2', en: 'textile manufacturer', hi: 'वस्त्र निर्माता', ex: 'Der Textilhersteller exportiert seine Ware weltweit.', exEn: 'The textile manufacturer exports its goods worldwide.', exHi: 'Vastra nirmaata apna maal poori duniya mein niryaat karta hai.', ex2: 'Sie arbeitet bei einem großen Textilhersteller.', ex2En: 'She works at a large textile manufacturer.', ex2Hi: 'Woh ek badi vastra nirmaata company mein kaam karti hai.' },
    { de: 'Textilunternehmer/in', art: 'der/die', gender: 'm/f', plural: 'Textilunternehmer/innen', pos: 'noun', level: 'B2', en: 'textile entrepreneur', hi: 'वस्त्र उद्यमी', ex: 'Der Textilunternehmer gründete eine neue Marke.', exEn: 'The textile entrepreneur founded a new brand.', exHi: 'Vastra udyami ne ek naya brand sthaapit kiya.', ex2: 'Die Textilunternehmerin ist sehr erfolgreich.', ex2En: 'The textile entrepreneur is very successful.', ex2Hi: 'Vastra udyami bahut safal hai.' },
    { de: 'Veranstaltungskonzept', art: 'das', gender: 'n', plural: 'Veranstaltungskonzepte', pos: 'noun', level: 'B2', en: 'event concept', hi: 'आयोजन अवधारणा', ex: 'Das Veranstaltungskonzept wurde von allen genehmigt.', exEn: 'The event concept was approved by everyone.', exHi: 'Aayojan avdhaarna sabne manzoor ki.', ex2: 'Sie entwickelten ein neues Veranstaltungskonzept.', ex2En: 'They developed a new event concept.', ex2Hi: 'Unhone ek nayi aayojan avdhaarna vikasit ki.' },
    { de: 'Verkaufsassistent/in', art: 'der/die', gender: 'm/f', plural: 'Verkaufsassistenten/Verkaufsassistentinnen', pos: 'noun', level: 'B2', en: 'sales assistant', hi: 'बिक्री सहायक', ex: 'Der Verkaufsassistent half mir bei der Auswahl.', exEn: 'The sales assistant helped me with the selection.', exHi: 'Bikri sahaayak ne mujhe chunaav mein madad ki.', ex2: 'Sie arbeitet als Verkaufsassistentin.', ex2En: 'She works as a sales assistant.', ex2Hi: 'Woh bikri sahaayak ke roop mein kaam karti hai.' },
    { de: 'Vorstellungsgespräch', art: 'das', gender: 'n', plural: 'Vorstellungsgespräche', pos: 'noun', level: 'B2', en: 'job interview', hi: 'नौकरी साक्षात्कार', ex: 'Das Vorstellungsgespräch verlief sehr gut.', exEn: 'The job interview went very well.', exHi: 'Naukri saakshaatkaar bahut achha raha.', ex2: 'Sie bereitete sich intensiv auf das Vorstellungsgespräch vor.', ex2En: 'She prepared intensively for the job interview.', ex2Hi: 'Usne naukri saakshaatkaar ke liye gehan taiyaari ki.' },
    { de: 'Werbepartner/in', art: 'der/die', gender: 'm/f', plural: 'Werbepartner/innen', pos: 'noun', level: 'B2', en: 'advertising partner', hi: 'विज्ञापन साझेदार', ex: 'Der Werbepartner unterstützt die Kampagne finanziell.', exEn: 'The advertising partner financially supports the campaign.', exHi: 'Vigyaapan saajhedaar abhiyaan ko aarthik roop se sahaayata deta hai.', ex2: 'Sie suchen einen neuen Werbepartner.', ex2En: 'They are looking for a new advertising partner.', ex2Hi: 'Woh ek naya vigyaapan saajhedaar dhoondh rahe hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "(an)statt ... zu"?',
      body: [ '"(an)statt ... zu" means "instead of doing something." It answers: what did someone do instead?' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna ging spazieren, anstatt zu lernen.</span>'],
          ['<span class="de">Rohan kaufte ein Fahrrad, statt ein Auto zu kaufen.</span>']
        ]
      },
      hinglish: '"(an)statt ... zu" ka matlab hai "kuch karne ki bajaay". Yeh batata hai ki jo kaam hona chahiye tha woh nahi hua, uski jagah kuch aur kiya gaya.'
    },
    {
      title: 'statt vs anstatt',
      body: [ 'Both forms are correct. "statt ... zu" is more common in everyday German; "anstatt ... zu" is slightly more formal.' ]
    },
    {
      title: 'Satzstruktur',
      body: [ 'Main clause, comma, "(an)statt" + the alternative action as an infinitive with "zu" at the end.' ],
      table: {
        head: ['Main Clause', '(an)statt ... zu'],
        rows: [
          ['Ich sehe fern,', 'anstatt meine Hausaufgaben zu machen.'],
          ['Anna arbeitet,', 'statt sich auszuruhen.'],
          ['Wir gingen essen,', 'anstatt zu Hause zu bleiben.']
        ]
      },
      hinglish: 'Pehle main clause aata hai, phir comma, phir "(an)statt", aur jo kaam uski jagah chhoda gaya woh infinitive ban kar "zu" ke saath sentence ke end mein aata hai.'
    },
    {
      title: 'Same-Subject-Regel',
      body: [ 'The <b>(an)statt \u2026 zu</b> infinitive has no subject of its own, so it takes the subject of the main clause \u2014 the same person does both. If the second action genuinely has a different subject, you need a full clause with <b>anstatt dass</b>: <span class="de">Anna lernt Deutsch, anstatt dass Rohan fernsieht.</span> (An object inside the clause is fine, as with ohne \u2026 zu.)' ],
      table: {
        head: ['Correct', 'Incorrect'],
        rows: [
          ['<span class="de">Anna lernt Deutsch, anstatt fernzusehen.</span> (Anna does both actions)', '<span class="strike de">Anna lernt Deutsch, anstatt Rohan fernsieht.</span> (a second subject needs anstatt dass)']
        ]
      },
      hinglish: '<b>(an)statt \u2026 zu</b> wale infinitive ka apna subject nahi hota, isliye woh main clause ka subject le leta hai \u2014 matlab dono kaam ek hi banda karta hai. Agar doosre action ka subject sach mein alag hai, to poora clause banana padta hai <b>anstatt dass</b> ke saath: <span class="de">Anna lernt Deutsch, anstatt dass Rohan fernsieht.</span>'
    },
    {
      title: '"(an)statt ... zu" vs "ohne ... zu"',
      body: [ 'Never confuse "instead of" with "without" — they express different relationships.' ],
      table: {
        head: ['ohne ... zu (WITHOUT)', '(an)statt ... zu (INSTEAD OF)'],
        rows: [
          ['<span class="de">Ich ging, ohne etwas zu sagen.</span> — I left without saying anything.', '<span class="de">Ich ging, anstatt etwas zu sagen.</span> — Instead of saying something, I left.']
        ]
      },
      hinglish: 'In dono ko mila mat do. <b>ohne ... zu</b> matlab kaam bina hua, aur <b>(an)statt ... zu</b> matlab uski jagah kuch aur hua \u2014 yani ek replacement hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show (an)statt...zu in education and workplace contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Viele Studenten arbeiten, anstatt zu studieren.</span>'],
          ['<span class="de">Die Firma investiert in Forschung, anstatt Geld zu sparen.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki yeh structure asli mein kahan aata hai \u2014 padhai aur office wale formal texts mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"anstatt ... zu" is common in reports, newspaper articles, formal essays, and presentations. "statt ... zu" works in both spoken and written German.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from adding a subject inside the clause, using a full verb form instead of the infinitive, or dropping "zu".' ],
      mistakes: [
        { wrong: 'Ich lerne Deutsch, statt ich fernsehe.', right: 'Ich lerne Deutsch, statt fernzusehen.', why: 'No conjugated verb or separate subject goes inside "(an)statt ... zu" — only "zu + Infinitiv".' },
        { wrong: 'Anna arbeitet anstatt sie schläft.', right: 'Anna arbeitet, anstatt zu schlafen.', why: 'A comma is required, and the clause must use the infinitive with "zu", not a conjugated verb.' },
        { wrong: 'Wir gingen nach Hause, statt dass zu essen.', right: 'Wir gingen nach Hause, statt zu essen.', why: 'Do not combine "statt dass" and "statt ... zu" — choose one pattern; this chapter uses only "(an)statt ... zu".' },
        { wrong: 'Ich fahre Zug, statt Auto fahren.', right: 'Ich fahre Zug, statt Auto zu fahren.', why: '"zu" is required directly before the infinitive.' },
        { wrong: 'Statt ich lerne, spiele ich.', right: 'Anstatt zu lernen, spiele ich.', why: 'No conjugated verb form goes inside the "(an)statt ... zu" construction — use the infinitive with "zu".' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 clause ke andar subject daal dena, conjugated verb use kar dena, ya "zu" chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"(an)statt ... zu" appears frequently in Goethe B2 writing tasks about comparing choices and alternatives.' ],
      note: 'Memory trick: ohne...zu = WITHOUT. (an)statt...zu = INSTEAD OF. Need "instead of doing something" with the same subject? Use (an)statt...zu.',
      hinglish: '"(an)statt ... zu" Goethe B2 ki writing mein aksar kaam aata hai, khaas kar jab do options compare karne hon.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Forschungsbericht: Was Bildungserfolg wirklich bestimmt',
    titleEn: 'Research report: what really determines educational success',
    tokens: [
      { w: 'Anstatt', role: 'r-connector', en: 'instead of', hi: 'के बजाय', type: 'Konjunktion · anstatt … zu', why: 'anstatt … zu + Infinitiv = instead of doing something (this chapter).' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'Zeugnisse', role: 'plain', en: 'report cards', hi: 'रिपोर्ट कार्ड', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'vergleichen', role: 'plain', en: 'compare (Satzende)', hi: 'तुलना करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'untersucht', role: 'plain', en: 'investigates (linke Klammer)', hi: 'जाँच करता है (बायाँ कोष्ठक)', type: 'Verb · untersuchen (Linke Klammer)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Sozialforschung', role: 'plain', en: 'social research', hi: 'सामाजिक शोध', type: 'Noun · fem.', why: 'die Sozialforschung (this chapter).' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'vor', role: 'plain', en: 'above', hi: 'सबसे', type: 'Preposition' },
      { w: 'allem', role: 'plain', en: 'all', hi: 'ऊपर', type: 'Pronoun' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'familiäre', role: 'plain', en: 'family-related', hi: 'पारिवारिक', type: 'Adjective' },
      { w: 'Bildungserwartung', role: 'plain', en: 'educational expectation (Satzende)', hi: 'शैक्षिक अपेक्षा (Satzende)', type: 'Noun · fem.', why: 'die Bildungserwartung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Kinder', role: 'plain', en: 'children', hi: 'बच्चे', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Familien', role: 'plain', en: 'families', hi: 'परिवारों', type: 'Noun · plural' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'hohen', role: 'plain', en: 'high', hi: 'उच्च', type: 'Adjective' },
      { w: 'Bildungschancen', role: 'plain', en: 'educational opportunities (Satzende)', hi: 'शैक्षिक अवसर (Satzende)', type: 'Noun · plural', why: 'die Bildungschance (this chapter).' },
      { w: 'erhalten', role: 'plain', en: 'receive', hi: 'प्राप्त करते हैं', type: 'Verb · erhalten' },
      { w: 'anstatt', role: 'r-connector', en: 'instead of', hi: 'के बजाय', type: 'Konjunktion · anstatt … zu' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'Noten', role: 'plain', en: 'grades', hi: 'ग्रेड', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'bekommen', role: 'plain', en: 'get (Satzende)', hi: 'पाना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'zusätzliche', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective' },
      { w: 'Unterstützung', role: 'plain', en: 'support (Satzende)', hi: 'सहायता (Satzende)', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Alltag', role: 'plain', en: 'everyday life (Satzende)', hi: 'रोज़मर्रा की ज़िंदगी (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Wissenschaftszentrum', role: 'plain', en: 'science centre', hi: 'विज्ञान केंद्र', type: 'Noun · neut.', why: 'das Wissenschaftszentrum (this chapter).' },
      { w: 'empfiehlt', role: 'plain', en: 'recommends', hi: 'सुझाव देता है', type: 'Verb · empfehlen' },
      { w: 'Schulen', role: 'plain', en: 'schools', hi: 'स्कूलों को', type: 'Noun · plural' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'anstatt', role: 'r-connector', en: 'instead of', hi: 'के बजाय', type: 'Konjunktion · anstatt … zu' },
      { w: 'ausschließlich', role: 'plain', en: 'exclusively', hi: 'विशेष रूप से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Prüfungen', role: 'plain', en: 'exams', hi: 'परीक्षाओं', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'setzen', role: 'plain', en: 'focus (Satzende)', hi: 'केंद्रित करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'grundsätzlich', role: 'plain', en: 'fundamentally', hi: 'मौलिक रूप से', type: 'Adverb', why: 'grundsätzlich (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'engen', role: 'plain', en: 'close', hi: 'नज़दीकी', type: 'Adjective' },
      { w: 'Kontakt', role: 'plain', en: 'contact (Satzende)', hi: 'संपर्क (Satzende)', type: 'Noun · masc.' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Eltern', role: 'plain', en: 'parents (Satzende)', hi: 'माता-पिता (Satzende)', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'treten', role: 'plain', en: 'enter (Satzende)', hi: 'में आना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Insbesondere', role: 'plain', en: 'in particular', hi: 'विशेष रूप से', type: 'Adverb', why: 'insbesondere (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'sozial', role: 'plain', en: 'socially', hi: 'सामाजिक रूप से', type: 'Adjective' },
      { w: 'schwächeren', role: 'plain', en: 'weaker', hi: 'कमज़ोर', type: 'Adjective · Komparativ' },
      { w: 'Vierteln', role: 'plain', en: 'neighbourhoods (Satzende)', hi: 'मोहल्लों (Satzende)', type: 'Noun · plural' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाता है', type: 'Verb · zeigen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'so', role: 'plain', en: 'this way', hi: 'इस तरह', type: 'Adverb' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article · Nom.' },
      { w: 'nachhaltiger', role: 'plain', en: 'lasting', hi: 'स्थायी', type: 'Adjective' },
      { w: 'Bildungserfolg', role: 'plain', en: 'educational success (Satzende)', hi: 'शैक्षिक सफलता (Satzende)', type: 'Noun · masc.', why: 'der Bildungserfolg (this chapter).' },
      { w: '.', plain: true },
      { w: 'Anstatt', role: 'r-connector', en: 'instead of', hi: 'की जगह', type: 'Konjunktion · anstatt … zu', why: 'anstatt … zu + Infinitiv: an alternative action (this chapter).' },
      { w: 'Eltern', role: 'plain', en: 'parents', hi: 'माता-पिता', type: 'Noun · plural' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'सिर्फ़', type: 'Adverb' },
      { w: 'einmal', role: 'plain', en: 'once', hi: 'एक बार', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'einzuladen', role: 'plain', en: 'to invite (Satzende)', hi: 'आमंत्रित करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'Schulen', role: 'plain', en: 'schools', hi: 'स्कूल', type: 'Noun · plural' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Kontakt', role: 'plain', en: 'contact', hi: 'संपर्क', type: 'Noun · masc.' },
      { w: 'kontinuierlich', role: 'plain', en: 'continuously (Satzende)', hi: 'निरंतर (Satzende)', type: 'Adverb' },
      { w: 'pflegen', role: 'plain', en: 'maintain (Satzende)', hi: 'बनाए रखना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Instead of only comparing report cards, social research now investigates above all the family\'s educational expectations. Children from families with high educational opportunities receive additional everyday support, instead of only getting grades. A science centre therefore recommends that schools, instead of focusing exclusively on exams, fundamentally enter into close contact with parents. Especially in socially weaker neighbourhoods, this shows a lasting educational success. Instead of only inviting parents once a year, schools should maintain that contact continuously.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_020_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Katja, macht dein Bruder nicht mehr Informatik?', en: 'Katja, isn\'t your brother still studying computer science?' },
      { id: 'B2_020_L002', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, er hat einen IT-Job angenommen, anstatt weiterzustudieren.', en: 'No, he took an IT job instead of continuing to study.' },
      { id: 'B2_020_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und bereut er das nicht manchmal?', en: 'And doesn\'t he sometimes regret it?' },
      { id: 'B2_020_L004', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Überhaupt nicht — anstatt nur Theorie zu lernen, sammelt er jetzt echte Praxiserfahrung.', en: 'Not at all — instead of just learning theory, he\'s now gaining real practical experience.' }
    ],
    transcript: 'Katja, macht dein Bruder nicht mehr Informatik? Nein, er hat einen IT-Job angenommen, anstatt weiterzustudieren. Und bereut er das nicht manchmal? Überhaupt nicht — anstatt nur Theorie zu lernen, sammelt er jetzt echte Praxiserfahrung.',
    translation: 'Katja, isn\'t your brother still studying computer science? No, he took an IT job instead of continuing to study. And doesn\'t he sometimes regret it? Not at all — instead of just learning theory, he\'s now gaining real practical experience.',
    tokens: [
      { w: 'Katja' },
      { w: ',', plain: true },
      { w: 'macht' },
      { w: 'dein' },
      { w: 'Bruder' },
      { w: 'nicht' },
      { w: 'mehr' },
      { w: 'Informatik' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'hat' },
      { w: 'einen' },
      { w: 'IT', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Job' },
      { w: 'angenommen' },
      { w: ',', plain: true },
      { w: 'anstatt' },
      { w: 'weiterzustudieren' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'bereut' },
      { w: 'er' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'manchmal' },
      { w: '?', plain: true },
      { w: 'Überhaupt' },
      { w: 'nicht' },
      { w: '—', plain: true },
      { w: 'anstatt' },
      { w: 'nur' },
      { w: 'Theorie' },
      { w: 'zu' },
      { w: 'lernen' },
      { w: ',', plain: true },
      { w: 'sammelt' },
      { w: 'er' },
      { w: 'jetzt' },
      { w: 'echte' },
      { w: 'Praxiserfahrung' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Katjas Bruder gemacht, anstatt weiter zu studieren?', qEn: 'What did Katja\'s brother do instead of continuing to study?', options: ['er reiste', 'er nahm einen IT-Job an', 'er machte Pause', 'er wechselte das Fach'], optionsEn: ['he travelled', 'he took an IT job', 'he took a break', 'he changed subject'], answer: 1,
        explain: '"Er hat einen IT-Job angenommen, anstatt weiterzustudieren."' },
      { q: 'Was gewinnt er statt reiner Theorie?', qEn: 'What is he gaining instead of just theory?', options: ['ein Gehalt', 'echte Praxiserfahrung', 'Freizeit', 'neue Freunde'], optionsEn: ['a salary', 'real practical experience', 'free time', 'new friends'], answer: 1,
        explain: '"… anstatt nur Theorie zu lernen, sammelt er jetzt echte Praxiserfahrung."' }
    ]
  },

  speaking: [
    { task: "Eine Freundin fragt, was ihr Bruder jetzt macht.", taskEn: "A friend asks what her brother is doing now.", de: "Er hat einen IT-Job angenommen, anstatt weiterzustudieren.", en: "He took an IT job instead of continuing his studies." },
    { task: "Sie fragt, ob er es bereut. Antworte für ihn.", taskEn: "She asks whether he regrets it. Answer for him.", de: "Er verdient jetzt Geld, anstatt Schulden zu machen.", en: "He's earning money now instead of taking on debt." },
    { task: "Eine Kollegin fragt, was sie beim Bildungsabschluss tun soll.", taskEn: "A colleague asks what she should do about her qualification.", de: "Mach die Fördermaßnahme, anstatt gleich zu arbeiten.", en: "Do the support programme instead of working straight away." },
    { task: "Ein Bekannter fragt, wie man Bildungschancen verbessert.", taskEn: "An acquaintance asks how to improve educational opportunities.", de: "Man sollte früh fördern, anstatt später zu reparieren.", en: "You should support early instead of repairing later." },
    { task: "Deine Chefin fragt, wie du den Konflikt lösen willst.", taskEn: "Your boss asks how you want to resolve the conflict.", de: "Ich rede mit ihm, anstatt eine Mail zu schreiben.", en: "I'll talk to him instead of writing an email." },
    { task: "Rollenspiel: Ihr beratet einen Schüler.", taskEn: "Role-play: you advise a school leaver.", de: "Mach eine Ausbildung, anstatt zu warten. — Oder studiere, anstatt gleich Geld zu verdienen.", en: "Do an apprenticeship instead of waiting. — Or study instead of earning money right away." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion text or report (six to eight sentences) about education, work, or lifestyle choices — using "(an)statt ... zu" at least three times, always making sure the subject of the alternative action matches the subject of the main clause.',
    starters: ['Viele …, anstatt …', 'Statt …, entscheidet sich …'],
    placeholder: 'Viele Jugendliche beginnen eine Lehre, anstatt zu studieren …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which rule applies to "(an)statt ... zu"?',
      options: ['The subject of both actions must be the same', 'The subjects can be different', 'No subject is needed at all'],
      answer: 0,
      explain: '"(an)statt ... zu" requires the SAME subject in both clauses.'
    },
    gap: {
      sentence: ['Anna arbeitet, statt sich aus', 'zuruhen.'],
      gaps: [ { answer: '', accepts: [''] } ],
      explain: 'Placeholder replaced by builder-style gap in UI; the key point is "zu" attaches directly to the separable infinitive.'
    },
    match: {
      q: 'Match each construction to its meaning.',
      pairs: [
        { noun: 'ohne ... zu', art: 'WITHOUT doing' },
        { noun: '(an)statt ... zu', art: 'INSTEAD OF doing' }
      ]
    },
    builder: {
      target: 'Build: "Rohan bought a bike, instead of buying a car."',
      bank: ['Rohan', 'kaufte', 'ein', 'Fahrrad', ',', 'statt', 'ein', 'Auto', 'zu', 'kaufen', '.'],
      answer: ['Rohan', 'kaufte', 'ein', 'Fahrrad', ',', 'statt', 'ein', 'Auto', 'zu', 'kaufen', '.'],
      roles: { 'statt': 'r-anstatt' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich lerne Deutsch, statt ich fernsehe.',
      right: 'Ich lerne Deutsch, statt fernzusehen.',
      explain: 'No conjugated verb or separate subject goes inside "(an)statt ... zu" — only "zu + Infinitiv".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What rule must "(an)statt ... zu" follow?', options: ['Same subject in both clauses', 'Different subjects', 'No subject required'], answer: 0,
      explain: '"(an)statt ... zu" only works when the SAME subject performs both actions.' },
    { q: 'Which is more formal?', options: ['anstatt ... zu', 'statt ... zu', 'Both equally informal'], answer: 0,
      explain: '"anstatt ... zu" is slightly more formal; "statt ... zu" is more common in everyday speech.' },
    { q: 'What does "(an)statt ... zu" express?', options: ['Instead of doing something', 'Without doing something', 'Because of doing something'], answer: 0,
      explain: '"(an)statt ... zu" names an alternative action that replaces the expected one.' },
    { q: 'Which sentence is correct?', options: ['Anna lernt Deutsch, anstatt fernzusehen.', 'Anna lernt Deutsch, anstatt Rohan fernzusehen.', 'Anna lernt Deutsch anstatt sie fernsieht.'], answer: 0,
      explain: 'The subject of "fernsehen" here is Anna — the same subject as the main clause, which is correct.' },
    { q: 'Which sentence contains an error?', options: ['Wir gingen essen, anstatt zu Hause zu bleiben.', 'Ich fahre Zug, statt Auto fahren.', 'Ich sehe fern, anstatt meine Hausaufgaben zu machen.'], answer: 1,
      explain: '"zu" cannot be omitted before the infinitive — it should be "statt Auto zu fahren".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-anstatt', html: '"(an)statt ... zu" names an alternative action that replaces the expected one — the SAME subject does both.' },
    { c: 'r-anstatt', html: '"statt ... zu" is more common everyday; "anstatt ... zu" is slightly more formal — both are correct.' },
    { c: 'r-anstatt', html: 'Never confuse "(an)statt ... zu" (INSTEAD OF) with "ohne ... zu" (WITHOUT) — they express different relationships.' }
  ],
  revisionTips: [
    'Before using "(an)statt ... zu", check: does the SAME subject perform both actions?',
    'Practise the difference between "ohne ... zu" and "(an)statt ... zu" using the same base sentence.',
    'When writing formally, prefer "anstatt ... zu" for a slightly more polished tone.'
  ]
};

window.CHAPTER = CHAPTER;
