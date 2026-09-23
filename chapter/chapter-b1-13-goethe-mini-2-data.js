/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 13
   "Goethe Mini 2" — THIRD B1 checkpoint (per canonical numbering
   from the uploaded spec, titled "Goethe Mini 2"). NO new
   grammar. Primary focus: Passiv (Präsens) (Ch.10), Relativsätze
   im Dativ (Ch.11), Adjektivdeklination (Ch.12). Continuously
   recycles: Infinitiv mit zu, weil/da/obwohl, Konjunktiv II
   (höfliche Bitten), deshalb & so … dass, Genitiv (+
   wegen/trotz/während), Präteritum, Zeitangaben (Dativ &
   Genitiv) (Ch.1–9).
   IMPORTANT: dialogue, listening scripts, speaking role-play use
   ONLY Grit and Timo (two-voice audio system) — no Max, no
   Frau Weber.
   Vocabulary source: uploaded chapter-13 note — "(Review chapter
   — no new words)". Review vocab drawn entirely from Ch.1–12.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-b1-9-goethe-mini-2-data.js (checkpoint
   shape: flat vocab[] review set, grammar[] mixed review cards,
   tokenized reading, Goethe-style mock test, readiness
   takeaways) so it runs on the shared chapter-app.js /
   chapter-tutor.js engine. The Listening section bundles FIVE
   realistic Goethe B1 scenarios into one continuous transcript
   with per-scenario questions, since the shared engine renders
   one listening block per chapter.
============================================================ */
const CHAPTER = {
  id: 'b1-13-goethe-mini-2',
  phase: 'B1 · Phase 1',
  number: 13,
  title: 'Goethe Mini 3',
  titleEn: 'Goethe Checkpoint 3 — Passiv, Relativsätze & Adjektivdeklination',
  description: 'Your third B1 checkpoint — no new grammar. A complete Goethe-B1-style mock focused on the Passiv (Präsens), Dativ relative clauses, and adjective declension, while continuously recycling zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb & so … dass, Genitiv, Präteritum, and Zeitangaben.',
  xp: 270,
  time: 60,
  difficulty: 'Checkpoint',
  nextChapter: { number: 14, title: 'Komparativ & Superlativ vor Nomen', titleEn: 'Comparative & superlative before nouns' , href: 'chapter-b1-14-komparativ-superlativ-vor-nomen.html' },

  prevChapter: { number: 12, title: 'Adjektivdeklination (Wiederholung & Vertiefung)', titleEn: 'Adjective declension — review & depth', href: 'chapter-b1-12-adjektivdeklination-wiederholung.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>everything at once.</em>',
    intro: 'Timo and Grit spend a Saturday running errands — an apartment viewing with high extra costs, an excited decision to call the landlord today — recycling obwohl, wegen, and a polite Konjunktiv II offer all at once.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Passiv, Dativ relative clauses, and adjective declension work alongside everything from Chapters 1–9'
    ],
    scene: 'Ein Samstag voller Termine',
    femaleSpeakers: ['Grit'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Besichtigung', role: 'r-subject', en: 'viewing', hi: 'निरीक्षण', pron: 'be-ZIKH-ti-gung', type: 'Noun · fem.', why: 'die Besichtigung (this chapter).', ex: 'Die Besichtigung war gut.', exEn: 'The viewing was good.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-VOHL', type: 'Conjunction · obwohl' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Nebenkosten', role: 'r-subject', en: 'extra costs', hi: 'अतिरिक्त लागत', pron: 'NAY-ben-kos-ten', type: 'Noun · plural', why: 'die Nebenkosten (this chapter).', ex: 'Die Nebenkosten sind hoch.', exEn: 'The extra costs are high.' },
        { w: 'hoch', role: 'r-subject', en: 'high', hi: 'ज़्यादा', pron: 'hokh', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The viewing was good, although the extra costs are high.', hi: 'Nirikshan achha tha, halaanki atirikt lagat zyada hai.' },
      { speaker: 'Grit', side: 'right', tokens: [
        { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'hohen', role: 'r-dativ', en: 'high', hi: 'ज़्यादा', pron: 'HO-en', type: 'Adjective · genitive' },
        { w: 'Nebenkosten', role: 'r-dativ', en: 'extra costs (gen.)', hi: 'अतिरिक्त लागत के', pron: 'NAY-ben-kos-ten', type: 'Noun · plural genitive' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'erkundigen', role: 'r-verb', en: 'inquire', hi: 'पूछताछ करना', pron: 'er-KUN-di-gen', type: 'Verb · infinitive (Satzende)', why: 'sich erkundigen = to inquire (this chapter).', ex: 'Wir sollten uns erkundigen.', exEn: 'We should inquire.' },
        { w: '.', plain: true }
      ], en: 'Because of the high extra costs, we should inquire.', hi: 'Zyada atirikt lagat ke kaaran, humein poochtaach karni chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'begeistert', role: 'r-subject', en: 'excited', hi: 'उत्साहित', pron: 'be-GYS-tert', type: 'Adjective', why: 'begeistert = excited (this chapter).', ex: 'Wir sind begeistert.', exEn: 'We are excited.' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schnell', role: 'r-adverb', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adverb' },
        { w: 'klären', role: 'r-verb', en: 'clarify', hi: 'स्पष्ट करना', pron: 'KLAI-ren', type: 'Verb · infinitive (Satzende)', why: 'klären = to clarify (this chapter).', ex: 'Wir sollten das klären.', exEn: 'We should clarify that.' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Since we are excited, we should clarify that quickly.', hi: 'Chunki hum utsaahit hain, humein yeh jaldi spasht karna chahiye.' },
      { speaker: 'Grit', side: 'right', tokens: [
        { w: 'Wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'möglich', role: 'r-akkusativ', en: 'possible', hi: 'संभव', pron: 'MÖK-likh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vermieter', role: 'r-akkusativ', en: 'landlord', hi: 'मकान मालिक', pron: 'fer-MEE-ter', type: 'Noun · masc.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'anzurufen', role: 'r-verb', en: 'to call', hi: 'फ़ोन करना', pron: 'AN-tsu-roo-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Would it be possible to still call the landlord today?', hi: 'Kya aaj abhi bhi makaan malik ko call karna sambhav hoga?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'super', role: 'r-subject', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'einverstanden', role: 'r-subject', en: 'in agreement', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Adjective', why: 'einverstanden sein = to agree (this chapter).', ex: 'Ich bin einverstanden.', exEn: 'I agree.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'deinem', role: 'r-dativ', en: 'your (masc. dat.)', hi: 'तुम्हारे', pron: 'DY-naym', type: 'Possessive · dative' },
        { w: 'Plan', role: 'r-dativ', en: 'plan (dat.)', hi: 'योजना से', pron: 'plahn', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, that would be great. I agree with your plan.', hi: 'Haan, yeh badhiya hoga. Main tumhari yojana se sahmat hoon.' },
      { speaker: 'Grit', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करती हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'gleich', role: 'r-time', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb · time' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Perfect! I will call him right away.', hi: 'Badhiya! Main use abhi call karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>third B1 checkpoint</strong> — no new grammar. It puts <span class="de r-verb">Passiv (Präsens)</span>, <span class="de r-dativ">Relativsätze im Dativ</span>, and <span class="de r-adjective">Adjektivdeklination</span> to work, while continuously recycling everything from Chapters 1–9 — <span class="de r-preposition">zu + Infinitiv</span>, <span class="de r-conjunction">weil/da/obwohl</span>, polite <span class="de r-verb">Konjunktiv II</span>, <span class="de r-conjunction">deshalb &amp; so … dass</span>, <span class="de r-genitiv">Genitiv</span>, <span class="de r-verb">Präteritum</span>, and <span class="de r-time">Zeitangaben</span> — all under Goethe B1 exam conditions.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the THIRD B1 CHECKPOINT covering Chapters 1-12, with special focus on Passiv (Präsens), Relativsätze im Dativ, and Adjektivdeklination — no new grammar. The learner wrote a short exam-style text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Passiv Präsens: werden (conjugated) + Partizip II at the end; never "wird + Infinitiv"; the subject is what receives the action, not who does it.\n' +
    '- Relativsätze im Dativ: dem (masc.), der (fem.), dem (neut.), denen (plural) mark the indirect object inside a relative clause, matching common Dativ verbs (helfen, danken, gehören, gefallen, vertrauen…).\n' +
    '- Adjektivdeklination: weak after der/die/das/die, mixed after ein/kein/mein…, strong with no article — check the ending matches which of the three applies.\n' +
    '- zu + Infinitiv, weil/da/obwohl, Konjunktiv II (könnte/würde/hätte/wäre), deshalb/so…dass, Genitiv+wegen/trotz/während, Präteritum, and Dativ/Genitiv Zeitangaben should all be checked per their own established rules from earlier chapters.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe B1 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are on track for the real Goethe B1 exam. Passiv, Dativ relative clauses, and adjective declension are all solid, and everything else recycles cleanly.',
    mid: 'Solid B1. Re-run the weakest section once (usually adjective endings or the Passiv formation), then you\'ll be ready.',
    low: 'Worth a full re-run of Chapters 10–12 before continuing — focus especially on werden + Partizip II and the weak/mixed/strong adjective flowchart.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Wohnung', role: 'plain' },
    { w: 'wird', role: 'r-verb' }, { w: 'uns', role: 'r-dativ' },
    { w: 'am', role: 'r-time' }, { w: 'Morgen', role: 'r-time' },
    { w: 'gezeigt', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Passiv, Dativ relative clauses, and adjective declension work alongside everything from Chapters 1–9.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Grit and Timo spend a Saturday running errands, recycling all twelve chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words from Chapters 1–12.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: Passiv, Relativsätze im Dativ, Adjektivdeklination, and Chapters 1–9\'s grammar.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style apartment listing and email mixing all twelve chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point across five realistic exam-style scenarios.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this checkpoint\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all twelve chapters\' grammar in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full Goethe-B1-style mini mock test. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your third B1 readiness check — strengths, weaknesses, and an overall score.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A complete Goethe-B1-style mini mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a final readiness checklist.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '18 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words from Chapters 1–12 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Passiv (Präsens), Relativsätze im Dativ, Adjektivdeklination, and Chapters 1–9\'s grammar — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle full Goethe-B1 listening & reading tasks' },
    { de: 'Schreiben', text: 'Write a clean B1 email, complaint, or apartment description' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Mix Passiv, Relativsätze im Dativ, adjective declension, and Chapters 1–9\'s grammar correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your third B1 readiness score and what to revise' }
  ],

  // ---------- Vocabulary review (~30 items — no new words, from Ch.1–12) ----------
  vocab: [
    { de: 'werden', pos: 'verb', en: 'to become / Passiv-Hilfsverb', hi: 'बनना / Passiv सहायक क्रिया', ex: 'Die Wohnung wird uns am Morgen gezeigt.', exEn: 'The apartment is shown to us in the morning.', exHi: 'Flat humein subah dikhaya jaata hai.' },
    { de: 'zeigen', pos: 'verb', en: 'to show', hi: 'दिखाना', ex: 'Die Wohnung wird uns gezeigt.', exEn: 'The apartment is shown to us.', exHi: 'Flat humein dikhaya jaata hai.' },
    { de: 'helfen', pos: 'verb', en: 'to help (+ Dativ)', hi: 'मदद करना', ex: 'Das ist der Mann, dem ich helfe.', exEn: 'That is the man whom I help.', exHi: 'Yeh wahi aadmi hai jiski main madad karta hoon.' },
    { de: 'gehören', pos: 'verb', en: 'to belong to (+ Dativ)', hi: 'का होना', ex: 'Der Balkon gehört der Wohnung, der wir vertrauen.', exEn: 'The balcony belongs to the apartment we trust.', exHi: 'Balcony us flat ka hai jispar hum bharosa karte hain.' },
    { de: 'vertrauen', pos: 'verb', en: 'to trust (+ Dativ)', hi: 'भरोसा करना', ex: 'Das ist der Arzt, dem ich vertraue.', exEn: 'That is the doctor whom I trust.', exHi: 'Yeh wahi doctor hai jispar main bharosa karta hoon.' },
    { de: 'großer/große/großes', pos: 'adjective', en: 'big (all three declensions)', hi: 'बड़ा', ex: 'ein großer Garten, der große Garten, großer Garten.', exEn: 'a big garden, the big garden, big garden (all three declension types).', exHi: 'ek bada bagicha, woh bada bagicha, bada bagicha.' },
    { de: 'frisch', pos: 'adjective', en: 'fresh', hi: 'ताज़ा', ex: 'Wir sollten frisches Brot kaufen.', exEn: 'We should buy fresh bread.', exHi: 'Humein taaza roti khareedni chahiye.' },
    { de: 'öffentlich', pos: 'adjective', en: 'public', hi: 'सार्वजनिक', ex: 'Der öffentliche Verkehr ist meistens gut.', exEn: 'Public transport is mostly good.', exHi: 'Saarvajanik parivahan aksar achha hota hai.' },
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', ex: 'Ich hoffe, die Wohnung zu bekommen.', exEn: 'I hope to get the apartment.', exHi: 'Mujhe ummeed hai ki main flat pa loongi.' },
    { de: 'weil', pos: 'grammar', en: 'because (neutral reason)', hi: 'क्योंकि', ex: 'Ich freue mich, weil die Wohnung schön ist.', exEn: 'I\'m happy because the apartment is beautiful.', exHi: 'Main khush hoon kyunki flat sundar hai.' },
    { de: 'da', pos: 'grammar', en: 'as, since (formal reason)', hi: 'चूंकि', ex: 'Da wir Zeit haben, gehen wir zum Arzt.', exEn: 'Since we have time, we\'re going to the doctor.', exHi: 'Chunki humaare paas samay hai, hum doctor ke paas jaa rahe hain.' },
    { de: 'obwohl', pos: 'grammar', en: 'although (contrast)', hi: 'हालांकि', ex: 'Obwohl der Zug verspätet war, kamen wir an.', exEn: 'Although the train was delayed, we arrived.', exHi: 'Halanki train der se aayi, hum pahunch gaye.' },
    { de: 'könnte', pos: 'verb', en: 'could (polite request)', hi: 'क्या आप कर सकते हैं', ex: 'Könnten wir danach zum Arzt gehen?', exEn: 'Could we go to the doctor after that?', exHi: 'Kya hum uske baad doctor ke paas ja sakte hain?' },
    { de: 'wäre', pos: 'verb', en: 'would be', hi: 'होगा', ex: 'Wären Sie so freundlich, mir zu helfen?', exEn: 'Would you be so kind as to help me?', exHi: 'Kya aap itni dayaalu hongi ki meri madad karein?' },
    { de: 'deshalb', pos: 'grammar', en: 'that\'s why, therefore (result)', hi: 'इसलिए', ex: 'Der Zug war verspätet. Deshalb wird jetzt ein neuer Zug eingesetzt.', exEn: 'The train was delayed. That\'s why a new train is now being deployed.', exHi: 'Train der se aayi. Isiliye ab ek naya train tainaat ki jaa rahi hai.' },
    { de: 'so … dass', pos: 'grammar', en: 'so … that (strong consequence)', hi: 'इतना … कि', ex: 'Ich war so begeistert, dass ich sofort unterschreiben wollte.', exEn: 'I was so excited that I wanted to sign immediately.', exHi: 'Main itni utsahit thi ki main turant hastakshar karna chahti thi.' },
    { de: 'wegen', pos: 'grammar', en: 'because of (+ Genitiv)', hi: 'की वजह से', ex: 'Wegen des guten Preises hoffe ich, die Wohnung zu bekommen.', exEn: 'Because of the good price, I hope to get the apartment.', exHi: 'Achhi keemat ki wajah se, mujhe ummeed hai ki main flat pa loongi.' },
    { de: 'während', pos: 'grammar', en: 'during (+ Genitiv)', hi: 'के दौरान', ex: 'Während der ganzen Besichtigung war ich begeistert.', exEn: 'During the whole viewing, I was excited.', exHi: 'Poore nirikshan ke dauran, main utsahit thi.' },
    { de: 'Besichtigung', art: 'die', gender: 'f', plural: 'Besichtigungen', pos: 'noun', en: 'viewing (of a property)', hi: 'निरीक्षण', ex: 'Während der Besichtigung stellte ich viele Fragen.', exEn: 'During the viewing, I asked many questions.', exHi: 'Nirikshan ke dauran, maine kai sawaal poochhe.' },
    { de: 'Nebenkosten', pos: 'noun', en: 'additional costs (utilities)', hi: 'अतिरिक्त लागत', ex: 'Ich erkundige mich nach den genauen Nebenkosten.', exEn: 'I\'m inquiring about the exact additional costs.', exHi: 'Main sateek atirikt lagat ke baare mein poochtaachh kar rahi hoon.' },
    { de: 'eines Tages', pos: 'idiom', en: 'one day (Genitiv time expression)', hi: 'एक दिन', ex: 'Eines Tages möchte ich einen eigenen Garten haben.', exEn: 'One day, I\'d like to have my own garden.', exHi: 'Ek din, main apna khud ka bagicha rakhna chahti hoon.' },
    { de: 'am Morgen', pos: 'idiom', en: 'in the morning (Dativ time expression)', hi: 'सुबह में', ex: 'Am Morgen wird uns die Wohnung gezeigt.', exEn: 'In the morning, the apartment is shown to us.', exHi: 'Subah, humein flat dikhaya jaata hai.' },
    { de: 'ankommen', pos: 'verb', en: 'to arrive / to depend on (auf + A.)', hi: 'पहुँचना / निर्भर करना', ex: 'Obwohl der Zug verspätet war, kamen wir an.', exEn: 'Although the train was delayed, we arrived.', exHi: 'Halanki train der se aayi, hum pahunch gaye.' },
    { de: 'klären', pos: 'verb', en: 'to settle, clarify', hi: 'स्पष्ट करना', ex: 'Lass uns erst alle wichtigen Fragen klären.', exEn: 'Let\'s first settle all the important questions.', exHi: 'Chalo pehle saare zaroori sawaal spasht kar lete hain.' },
    { de: 'sich erkundigen', pos: 'verb', en: 'to inquire (nach + D.)', hi: 'पूछताछ करना', ex: 'Ich erkundige mich nach den Nebenkosten.', exEn: 'I\'m inquiring about the additional costs.', exHi: 'Main atirikt lagat ke baare mein poochtaachh kar rahi hoon.' },
    { de: 'begeistert', pos: 'adjective', en: 'excited', hi: 'उत्साहित', ex: 'Ich war so begeistert, dass ich sofort unterschreiben wollte.', exEn: 'I was so excited that I wanted to sign immediately.', exHi: 'Main itni utsahit thi ki main turant hastakshar karna chahti thi.' },
    { de: 'verspätet', pos: 'adjective', en: 'delayed', hi: 'देरी से', ex: 'Der Zug war so verspätet, dass ich eine Stunde wartete.', exEn: 'The train was so delayed that I waited an hour.', exHi: 'Train itni der se aayi ki maine ek ghanta intezaar kiya.' },
    { de: 'zusätzlich', pos: 'adjective', en: 'additional', hi: 'अतिरिक्त', ex: 'Deshalb wird ein zusätzlicher Zug eingesetzt.', exEn: 'That\'s why an additional train is being deployed.', exHi: 'Isiliye ek atirikt train tainaat ki jaa rahi hai.' },
    { de: 'praktisch', pos: 'adjective', en: 'practical', hi: 'व्यावहारिक', ex: 'Online-Termine sind sehr praktisch.', exEn: 'Online appointments are very practical.', exHi: 'Online nayukti bahut vyavaharik hain.' },
    { de: 'einverstanden', pos: 'idiom', en: 'agreed', hi: 'सहमत', ex: 'Einverstanden, lass uns die Fragen klären.', exEn: 'Agreed, let\'s settle the questions.', exHi: 'Sahmat, chalo sawaalon ko spasht kar lete hain.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 1–12 focus) ----------
  grammar: [
    {
      title: 'Passiv (Präsens) — der Schwerpunkt',
      body: [ 'werden (conjugated) + Partizip II at the end. The subject is what receives the action, never who performs it.' ],
      table: {
        head: ['Active', 'Passive'],
        rows: [
          ['<span class="de">Der Mechaniker repariert das Auto.</span>', '<span class="de">Das Auto wird repariert.</span>'],
          ['<span class="de">Man zeigt uns die Wohnung.</span>', '<span class="de">Die Wohnung wird uns gezeigt.</span>']
        ]
      },
      hinglish: 'werden (conjugated) + Partizip II end mein. Subject action ka result hai, karne wala nahi.'
    },
    {
      title: 'Relativsätze im Dativ — der Schwerpunkt',
      body: [ 'dem (masc.), der (fem.), dem (neut.), denen (plural) — the indirect object inside a relative clause, matching Dativ verbs like helfen, danken, gehören, vertrauen, gefallen.' ],
      table: {
        head: ['Gender/Number', 'Pronoun', 'Example'],
        rows: [
          ['Masc.', 'dem', '<span class="de">der Arzt, dem ich vertraue</span>'],
          ['Fem.', 'der', '<span class="de">die Wohnung, der ein Balkon gehört</span>'],
          ['Plural', 'denen', '<span class="de">die Studenten, denen ich helfe</span>']
        ]
      },
      hinglish: 'dem/der/dem/denen relative clause ke andar indirect object hote hain, Dativ verbs (helfen, danken, gehören, vertrauen, gefallen) ke saath.'
    },
    {
      title: 'Adjektivdeklination — der Schwerpunkt',
      body: [ 'Weak after der/die/das, mixed after ein/kein/mein…, strong with no article — one logic, three answers.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Schwach', '<span class="de">der große Garten</span>'],
          ['Gemischt', '<span class="de">ein großer Garten</span>'],
          ['Stark', '<span class="de">frisches Brot</span>']
        ]
      },
      hinglish: 'der/die/das ke baad weak, ein/kein/mein… ke baad mixed, bina article ke strong — ek logic, teen jawaab.'
    },
    {
      title: 'zu + Infinitiv, weil/da/obwohl, Konjunktiv II — Wiederholung',
      body: [ 'Recycled from Chapters 1–3: zu + Infinitiv after triggers; weil/da/obwohl for reason and contrast; könnte/würde/hätte/wäre for polite requests.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['zu + Infinitiv', '<span class="de">Ich hoffe, die Wohnung zu bekommen.</span>'],
          ['weil/da/obwohl', '<span class="de">Obwohl der Zug verspätet war, kamen wir an.</span>'],
          ['Konjunktiv II', '<span class="de">Wären Sie so freundlich, mir zu helfen?</span>']
        ]
      },
      hinglish: 'Chapters 1-3 se recycled: zu + Infinitiv, weil/da/obwohl, könnte/würde/hätte/wäre.'
    },
    {
      title: 'deshalb & so … dass, Genitiv, Präteritum, Zeitangaben — Wiederholung',
      body: [ 'Recycled from Chapters 4–9: deshalb states a plain result; so + Adjektiv + dass shows a strong consequence; wegen/trotz/während take the Genitiv; Präteritum for narration; am/eines for time expressions.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['deshalb / so … dass', '<span class="de">Der Zug war so verspätet, dass ich wartete. Deshalb kommt ein neuer Zug.</span>'],
          ['Genitiv', '<span class="de">Wegen des guten Preises hoffe ich …</span>'],
          ['Präteritum', '<span class="de">Der Zug war gestern verspätet.</span>'],
          ['Zeitangaben', '<span class="de">Am Morgen …, eines Tages …</span>']
        ]
      },
      hinglish: 'Chapters 4-9 se recycled: deshalb, so … dass, Genitiv + wegen/trotz/während, Präteritum, Zeitangaben.'
    },
    {
      title: 'Quick decision guide — all twelve chapters together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['focus on the action, not who does it?', '→ Passiv (werden + Partizip II)'],
          ['describe someone as an indirect object?', '→ Relativsätze im Dativ (dem/der/dem/denen)'],
          ['put an adjective before a noun?', '→ Adjektivdeklination (weak/mixed/strong)'],
          ['link two verbs, give a reason, or soften a request?', '→ zu + Infinitiv / weil-da-obwohl / Konjunktiv II'],
          ['state a result, place events in time, or narrate the past?', '→ deshalb-so…dass / Zeitangaben / Präteritum']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool: Passiv, Relativsätze im Dativ, Adjektivdeklination, aur Chapters 1-9 ka grammar.'
    }
  ],

  // ---------- Reading (Goethe-style: Wohnungsanzeige + E-Mail, clickable) ----------
  reading: {
    title: 'Wohnungsanzeige und E-Mail',
    titleEn: 'Apartment listing and email',
    tokens: [
      { w: 'Diese', role: 'plain', en: 'this (fem.)', hi: 'यह', type: 'Determiner' },
      { w: 'helle', role: 'r-adjective', en: 'bright', hi: 'रोशन', type: 'Adjective · schwach · Nom.', why: 'Weak declension: diese (der-word) + Nominativ feminine → -e.' },
      { w: 'Wohnung', role: 'plain', en: 'apartment', hi: 'फ़्लैट', type: 'Noun · fem.' },
      { w: 'wird', role: 'r-verb', en: 'is (Passiv-Hilfsverb)', hi: 'दिखाई जाती है', type: 'Verb · werden (Passiv Präsens)', why: 'Passiv Präsens (recycled — Ch.10).' },
      { w: 'ab', role: 'r-preposition', en: 'from', hi: 'से', type: 'Preposition' },
      { w: 'nächstem', role: 'plain', en: 'next (masc./neut. dat.)', hi: 'अगला', type: 'Determiner · Dativ' },
      { w: 'Monat', role: 'plain', en: 'month', hi: 'महीना', type: 'Noun · masc.' },
      { w: 'vermietet', role: 'r-verb', en: 'rented out (Satzende)', hi: 'किराए पर दिया (Satzende)', type: 'Verb · vermieten (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'ruhigen', role: 'r-adjective', en: 'quiet', hi: 'शांत', type: 'Adjective · schwach · Gen.', why: 'Weak declension: des + Genitiv → -en.' },
      { w: 'Standorts', role: 'plain', en: 'location (gen.)', hi: 'स्थान का', type: 'Noun · masc.' },
      { w: 'eignet', role: 'r-verb', en: 'is suitable', hi: 'उपयुक्त है', type: 'Verb · sich eignen' },
      { w: 'sie', role: 'r-subject', en: 'it (fem.)', hi: 'यह', type: 'Pronoun' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Familien', role: 'plain', en: 'families', hi: 'परिवार', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'kleiner', role: 'r-adjective', en: 'small', hi: 'छोटा', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er.' },
      { w: 'Garten', role: 'plain', en: 'garden', hi: 'बगीचा', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dem', role: 'r-dativ', en: 'to which', hi: 'जिसे', pron: 'daim', type: 'Relativpronomen · Dativ', why: 'Dativ relative pronoun (masc.): dem (recycled — Ch.11).' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'neuer', role: 'r-adjective', en: 'new', hi: 'नया', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er.' },
      { w: 'Zaun', role: 'plain', en: 'fence', hi: 'बाड़', type: 'Noun · masc.' },
      { w: 'gehört', role: 'r-verb', en: 'belongs (Satzende)', hi: 'का है (Satzende)', type: 'Verb · gehören (Satzende)', why: 'gehören (+ Dativ) — common Dativ verb.' },
      { w: ',', plain: true },
      { w: 'lädt', role: 'r-verb', en: 'invites', hi: 'आमंत्रित करता है', type: 'Verb · einladen' },
      { w: 'zum', role: 'r-place', en: 'to', hi: 'के लिए', type: 'Contraction · zu dem' },
      { w: 'Verweilen', role: 'plain', en: 'lingering', hi: 'रुकना', type: 'Noun · neut. (substantiviert)' },
      { w: 'ein', role: 'r-verb', en: '(einladen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Sämtliche', role: 'r-adjective', en: 'all', hi: 'सभी', type: 'Adjective · stark · Nom. Pl.', why: 'sämtlich (this chapter, recycled — Ch.12). Strong declension: no article, Nominativ plural → -e.' },
      { w: 'Nebenkosten', role: 'plain', en: 'additional costs', hi: 'अतिरिक्त लागत', type: 'Noun · plural' },
      { w: 'werden', role: 'r-verb', en: 'are (Passiv-Hilfsverb)', hi: 'दी जाती हैं', type: 'Verb · werden (Passiv Präsens)' },
      { w: 'transparent', role: 'r-adverb', en: 'transparently', hi: 'स्पष्ट रूप से', type: 'Adverb' },
      { w: 'aufgelistet', role: 'r-verb', en: 'listed (Satzende)', hi: 'सूचीबद्ध (Satzende)', type: 'Verb · auflisten (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Preis', role: 'plain', en: 'price', hi: 'क़ीमत', type: 'Noun · masc.' },
      { w: 'fair', role: 'r-adjective', en: 'fair', hi: 'उचित', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'sollten', role: 'r-verb', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'Interessenten', role: 'r-subject', en: 'interested parties', hi: 'इच्छुक व्यक्ति', type: 'Noun · plural' },
      { w: 'sich', role: 'r-akkusativ', en: 'themselves', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'schnell', role: 'r-adjective', en: 'quickly', hi: 'जल्दी', type: 'Adjective' },
      { w: 'melden', role: 'r-verb', en: 'to get in touch (Satzende)', hi: 'संपर्क करना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'This bright apartment is being rented out from next month. Because of the quiet location, it is suitable for families. A small garden, to which a new fence belongs, invites lingering. All additional costs are listed transparently. Although the price is fair, interested parties should get in touch quickly.'
  },

  // ---------- Listening (Goethe-style, 5 realistic B1 scenarios in one transcript) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_013_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Grit, hast du den Vermieter schon angerufen wegen des Vertrags?', en: 'Grit, have you already called the landlord about the contract?' },
      { id: 'B1_013_L002', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, obwohl die Nebenkosten hoch sind, will ich die Wohnung trotzdem nehmen.', en: 'Yes, although the extra costs are high, I still want to take the apartment.' },
      { id: 'B1_013_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Das überrascht mich ein bisschen.', en: 'Really? That surprises me a little.' },
      { id: 'B1_013_L004', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich weiß, aber die Lage ist einfach zu gut. Ich unterschreibe morgen.', en: 'I know, but the location is just too good. I\'m signing tomorrow.' }
    ],
    transcript: 'Grit, hast du den Vermieter schon angerufen wegen des Vertrags? Ja, obwohl die Nebenkosten hoch sind, will ich die Wohnung trotzdem nehmen. Wirklich? Das überrascht mich ein bisschen. Ich weiß, aber die Lage ist einfach zu gut. Ich unterschreibe morgen.',
    translation: 'Grit, have you already called the landlord about the contract? Yes, although the extra costs are high, I still want to take the apartment. Really? That surprises me a little. I know, but the location is just too good. I\'m signing tomorrow.',
    tokens: [
      { w: 'Grit' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'den' },
      { w: 'Vermieter' },
      { w: 'schon' },
      { w: 'angerufen' },
      { w: 'wegen' },
      { w: 'des' },
      { w: 'Vertrags' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'die' },
      { w: 'Nebenkosten' },
      { w: 'hoch' },
      { w: 'sind' },
      { w: ',', plain: true },
      { w: 'will' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Wohnung' },
      { w: 'trotzdem' },
      { w: 'nehmen' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'überrascht' },
      { w: 'mich' },
      { w: 'ein' },
      { w: 'bisschen' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Lage' },
      { w: 'ist' },
      { w: 'einfach' },
      { w: 'zu' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'unterschreibe' },
      { w: 'morgen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum will Grit die Wohnung trotzdem?', qEn: 'Why does Grit still want the apartment?', options: ['Die Miete ist niedrig.', 'Die Lage ist gut.', 'Der Vermieter ist freundlich.', 'Sie hat keine Alternative.'], optionsEn: ['The rent is low.', 'The location is good.', 'The landlord is friendly.', 'She has no alternative.'], answer: 1,
        explain: '"… die Lage ist einfach zu gut."' },
      { q: 'Wann unterschreibt Grit?', qEn: 'When will Grit sign?', options: ['heute', 'morgen', 'nächste Woche', 'nie'], optionsEn: ['today', 'tomorrow', 'next week', 'never'], answer: 1,
        explain: '"Ich unterschreibe morgen."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Erzähl von deiner Wohnungssuche.", taskEn: "Exam, Part 1: talk about your flat hunt.", de: "Ich habe den Vermieter angerufen, obwohl die Wohnung schon vergeben war.", en: "I called the landlord, although the flat had already been taken." },
    { task: "Deine Partnerin fragt, warum du die Wohnung trotzdem nimmst.", taskEn: "Your partner asks why you're taking the flat anyway.", de: "Wegen der Lage nehme ich sie, obwohl die Miete hoch ist.", en: "Because of the location I'm taking it, even though the rent is high." },
    { task: "Teil 2: Sprich über die Besichtigung.", taskEn: "Part 2: talk about the viewing.", de: "Die Besichtigung war so kurz, dass ich nichts klären konnte.", en: "The viewing was so short that I couldn't clarify anything." },
    { task: "Ein Freund fragt, was du beim Vertrag klären willst.", taskEn: "A friend asks what you want to clarify in the contract.", de: "Ich möchte die Nebenkosten klären, weil sie nicht im Vertrag stehen.", en: "I'd like to clarify the service charges, because they're not in the contract." },
    { task: "Deine Freundin fragt, was du eines Tages möchtest.", taskEn: "Your friend asks what you'd like one day.", de: "Eines Tages hätte ich gern eine große Wohnung mit Garten.", en: "One day I'd like a big flat with a garden." },
    { task: "Teil 3: Plant zusammen die nächste Besichtigung.", taskEn: "Part 3: plan the next viewing together.", de: "Wir könnten am Morgen hingehen. Ich würde gern den Vermieter treffen.", en: "We could go in the morning. I'd like to meet the landlord." },
    { task: "Rollenspiel: Ihr sprecht mit dem Vermieter über den Vertrag.", taskEn: "Role-play: you talk to the landlord about the contract.", de: "Während der Besichtigung war alles frisch. Deshalb vertrauen wir Ihnen.", en: "During the viewing everything was fresh. That's why we trust you." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe B1 writing. Choose ONE task and write ~50 words, using at least four grammar points from Chapters 1–12 (Passiv, Relativsätze im Dativ, Adjektivdeklination, zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv, Präteritum, or Zeitangaben). (1) FORMAL EMAIL: inquire about an apartment listing. (2) COMPLAINT: describe a delayed train and the inconvenience it caused. (3) OPINION: is public transport reliable where you live?',
    starters: ['Sehr geehrte/r …,', 'Ich habe gesehen, dass …', 'Wegen …', 'Obwohl …', 'Deshalb …'],
    placeholder: 'Sehr geehrte Damen und Herren, ich habe Ihre Wohnungsanzeige gesehen und hätte …',
    minWords: 50
  },

  // ---------- Exercises (4 types, mixed Ch.1–12) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Die Wohnung ___ uns am Morgen gezeigt."',
      options: ['ist', 'wird', 'hat'],
      answer: 1,
      explain: 'Passiv Präsens: werden + Partizip II.'
    },
    gap: {
      sentence: ['Das ist der Arzt, ', ' ich vertraue.'],
      gaps: [ { answer: 'dem', accepts: ['dem'] } ],
      explain: 'vertrauen takes Dativ — a masculine antecedent needs dem.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Die Wohnung wird …', art: 'Passiv (Präsens)' },
        { noun: 'Das ist der Arzt, dem …', art: 'Relativsatz im Dativ' },
        { noun: 'ein großer Garten', art: 'Adjektivdeklination (gemischt)' },
        { noun: 'Wegen des guten Preises …', art: 'Genitiv + wegen' },
        { noun: 'Eines Tages …', art: 'Zeitangabe (Genitiv)' }
      ]
    },
    builder: {
      target: 'Build: "The apartment is shown to us in the morning."',
      bank: ['Die', 'Wohnung', 'wird', 'uns', 'am', 'Morgen', 'gezeigt', '.'],
      answer: ['Die', 'Wohnung', 'wird', 'uns', 'am', 'Morgen', 'gezeigt', '.'],
      roles: { 'wird': 'r-verb', 'gezeigt': 'r-verb', 'uns': 'r-dativ' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Das Auto ___ repariert."', options: ['ist', 'wird', 'hat'], answer: 1,
      explain: 'Passiv Präsens: werden + Partizip II — "Das Auto wird repariert."' },
    { q: 'Complete: "Das sind die Studenten, ___ ich helfe."', options: ['die', 'denen', 'den'], answer: 1,
      explain: 'helfen takes Dativ — plural Dativ relative pronoun is denen.' },
    { q: 'Complete: "___ Brot schmeckt gut." (frisch, kein Artikel)', options: ['Frisch', 'Frisches', 'Frische'], answer: 1,
      explain: 'Strong declension: no article, Nominativ neuter → -es.' },
    { q: 'Which connector states an unexpected CONTRAST?', options: ['weil', 'da', 'obwohl'], answer: 2,
      explain: 'obwohl means "although" — it signals a contrast.' },
    { q: 'Complete: "Wegen ___ guten Preises hoffe ich, die Wohnung zu bekommen."', options: ['der', 'des', 'dem'], answer: 1,
      explain: 'der Preis is masculine, so its Genitiv article is des: des Preises.' },
    { q: 'Which sentence contains an error?', options: ['Die Wohnung wird uns gezeigt.', 'Das ist der Arzt, der ich vertraue.', 'Ein großer Garten gehört dazu.'], answer: 1,
      explain: 'vertrauen takes Dativ — it should be "der Arzt, dem ich vertraue."' }
  ],

  // ---------- Summary / Third B1 Readiness Check ----------
  takeaways: [
    { c: 'r-verb', html: '<strong>Grammar mastered:</strong> Passiv (Präsens), Relativsätze im Dativ, Adjektivdeklination (weak/mixed/strong), plus recycled zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv, Präteritum, and Zeitangaben.' },
    { c: 'r-dativ', html: '<strong>Vocabulary mastered:</strong> the key words and phrases across Chapters 1–12 — everyday life, apartments, travel, and appointments.' },
    { c: 'r-conjunction', html: '<strong>Speaking confidence:</strong> you can introduce yourself, present a topic, and plan something together — the three Goethe B1 speaking formats, using only two voices.' },
    { c: 'r-adjective', html: '<strong>Listening & reading readiness:</strong> you can follow office, hotel, transport, apartment, and doctor scenarios drawing on all twelve chapters at once.' },
    { c: 'r-verb', html: '<strong>Writing readiness:</strong> you can produce a clean, well-structured short text — email, complaint, or opinion — using accurate B1 grammar.' },
    { c: 'r-dativ', html: '<strong>Overall B1 readiness:</strong> if you scored well across this mock test, you\'re on track for the real Goethe-Zertifikat B1 exam. Review any weak sections below, then move into the final phase of the B1 course.' }
  ],
  revisionTips: [
    'Weak on Passiv? Redo Ch.10 — especially werden conjugation and Partizip II placement.',
    'Mixing up Dativ relative pronouns? Redo Ch.11 — dem/der/dem/denen and the common Dativ verb list.',
    'Adjective endings feel unnatural? Redo Ch.12 — the weak/mixed/strong flowchart.',
    'Shaky on zu-placement, weil/da/obwohl, or polite requests? Redo Ch.1–3.',
    'Unsure about deshalb/so…dass, Genitiv, Präteritum, or Zeitangaben? Redo Ch.4–5, 7–8.'
  ]
};

window.CHAPTER = CHAPTER;
