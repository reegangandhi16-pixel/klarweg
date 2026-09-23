/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 6
   "Goethe Mini 1" — FIRST B1 checkpoint. NO new grammar.
   Covers Chapters 1–5: Infinitiv mit zu, Nebensätze (weil/da/
   obwohl), Konjunktiv II (höfliche Bitten), Folgen (deshalb &
   so … dass), Genitiv & Präpositionen mit Genitiv (wegen/trotz/
   während) — with natural recycling across all five chapters.
   Vocabulary source: uploaded chapter-06 note ("Review chapter
   — no new words") → review vocab drawn from Chapters 1–5.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-35-goethe-mini-4-data.js exactly
   (checkpoint shape: flat vocab[] review set, grammar[] mixed
   review cards, tokenized reading, Goethe-style mock test,
   readiness takeaways, etc.) so it runs on the shared
   chapter-app.js / chapter-tutor.js engine. The Listening
   section bundles FIVE realistic Goethe B1 scenarios (office,
   doctor, telephone, university/train station, apartment) into
   one continuous transcript with per-scenario questions, since
   the shared engine renders one listening block per chapter.
============================================================ */
const CHAPTER = {
  id: 'b1-6-goethe-mini-1',
  phase: 'B1 · Phase 1',
  number: 6,
  title: 'Goethe Mini 1',
  titleEn: 'Goethe Checkpoint 1 — First B1 Readiness',
  description: 'Your first B1 checkpoint — no new grammar. A complete Goethe-B1-style mock that puts Chapters 1–5 to work at once: zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb & so … dass, and the Genitiv with wegen/trotz/während — ending with a full readiness check.',
  xp: 260,
  time: 55,
  difficulty: 'Checkpoint',
  nextChapter: { number: 7, title: 'Präteritum', titleEn: 'The simple past (Präteritum)' , href: 'chapter-b1-7-praeteritum.html' },

  prevChapter: { number: 5, title: 'Genitiv & Präpositionen mit Genitiv', titleEn: 'Genitive & prepositions with the Genitive (wegen, trotz, während)', href: 'chapter-b1-5-genitiv-wegen-trotz-waehrend.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together — one last time.</em>',
    intro: 'The evening before the mock exam, Meike is nervous and Timo reassures her — since she\'s practised so much, she\'ll surely succeed — recycling zu + Infinitiv, weil/da/obwohl, polite requests, and the Genitiv all at once.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb/so…dass, and Genitiv+wegen/trotz/während side by side'
    ],
    scene: 'Der Abend vor der Probeprüfung — Sprachschule Berlin',
    femaleSpeakers: ['Meike'],
    dialogue: [
      { speaker: 'Meike', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'nervös', role: 'r-subject', en: 'nervous', hi: 'घबराई हुई', pron: 'ner-VÖS', type: 'Adjective' },
        { w: 'wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Probeprüfung', role: 'r-dativ', en: 'practice exam (gen.)', hi: 'अभ्यास परीक्षा के', pron: 'PRO-buh-prü-fung', type: 'Noun · fem. genitive', why: 'die Probeprüfung (this chapter).', ex: 'wegen der Probeprüfung', exEn: 'because of the practice exam' },
        { w: '.', plain: true }
      ], en: 'I am nervous because of the practice exam.', hi: 'Main abhyaas pariksha ke kaaran ghabraayi hui hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', pron: 'trots', type: 'Preposition + genitive' },
        { w: 'deiner', role: 'r-dativ', en: 'your (fem. gen.)', hi: 'तुम्हारी', pron: 'DY-ner', type: 'Possessive · genitive' },
        { w: 'Nervosität', role: 'r-dativ', en: 'nervousness (gen.)', hi: 'घबराहट के', pron: 'ner-vo-zi-TAYT', type: 'Noun · fem. genitive' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adverb' },
        { w: 'vorbereitet', role: 'r-subject', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Adjective', why: 'vorbereitet = prepared (this chapter).', ex: 'Du bist gut vorbereitet.', exEn: 'You are well prepared.' },
        { w: '.', plain: true }
      ], en: 'Despite your nervousness, you are well prepared.', hi: 'Tumhari ghabraahat ke bawajood, tum achhi tarah taiyaar ho.' },
      { speaker: 'Meike', tokens: [
        { w: 'Meinst', role: 'r-verb', en: 'do you think', hi: 'सोचते हो', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होगी', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Chance', role: 'r-akkusativ', en: 'chance', hi: 'मौका', pron: 'SHAHNS', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Do you think I would have a chance?', hi: 'Kya tumhe lagta hai mujhe mauka milega?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'sicher', role: 'r-subject', en: 'sure', hi: 'निश्चित', pron: 'ZI-kher', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'geübt', role: 'r-verb', en: 'practised', hi: 'अभ्यास किया', pron: 'ge-ÜPT', type: 'Partizip II' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes, I am sure. Since you have practised so much, you surely have success.', hi: 'Haan, mujhe yakeen hai. Chunki tumne itna abhyaas kiya hai, tumhe zaroor safalta milti hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'versuche', role: 'r-verb', en: 'try', hi: 'कोशिश करती हूँ', pron: 'fer-ZOO-khuh', type: 'Verb · versuchen (ich)' },
        { w: 'ruhig', role: 'r-adverb', en: 'calm', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I try to stay calm.', hi: 'Dhanyavaad! Main shaant rehne ki koshish karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix' },
        { w: ',', plain: true },
        { w: 'vorher', role: 'r-adverb', en: 'beforehand', hi: 'पहले', pron: 'FOR-hair', type: 'Adverb' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-adverb', en: 'once more', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Liste', role: 'r-akkusativ', en: 'list', hi: 'सूची', pron: 'LIS-tuh', type: 'Noun · fem.', why: 'die Liste (this chapter).', ex: 'die Liste wiederholen', exEn: 'to revise the list' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'wiederholen', role: 'r-verb', en: 'revise', hi: 'दोहराना', pron: 'vee-der-HO-len', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good. I plan to revise the list once more beforehand.', hi: 'Achha. Main pehle ek baar aur list dohraane ki soch raha hoon.' },
      { speaker: 'Meike', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '!', plain: true }
      ], en: 'Good idea! We will manage this!', hi: 'Achha vichaar! Hum yeh kar lenge!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>first B1 checkpoint</strong> — no new grammar. It gathers Chapters 1–5 into one Goethe-B1-style rehearsal: <span class="de r-preposition">zu + Infinitiv</span> after verbs, adjectives, and nouns; <span class="de r-conjunction">weil / da / obwohl</span> for reason and contrast; polite <span class="de r-verb">Konjunktiv II</span> (könnte/würde/hätte/wäre); <span class="de r-conjunction">deshalb</span> and <span class="de">so … dass</span> for result and strong consequence; and the <span class="de r-genitiv">Genitiv</span> with <span class="de r-preposition">wegen/trotz/während</span> — all under Goethe B1 exam conditions, ending in a full readiness check.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the FIRST B1 CHECKPOINT covering Chapters 1-5 — no new grammar. The learner wrote a short exam-style text (email / opinion / travel report / complaint) below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- zu + Infinitiv: required after triggers like hoffen, versuchen, vergessen, planen, vorhaben, versprechen, and after Es ist wichtig/schwer/leicht… and Ich habe Lust/Zeit/Angst…; never after modal verbs; separable verbs insert zu between prefix and stem (anzurufen).\n' +
    '- weil/da/obwohl: all three send the finite verb to the very end of their clause; obwohl signals contrast, weil/da signal reason; never combine two of these connectors in one clause.\n' +
    '- Polite Konjunktiv II: könnte/würde/hätte/wäre soften a request; never combine two of these markers in one clause (e.g. "würde gern … haben möchten" is wrong); word order keeps the dative pronoun before the final infinitive ("Könnten Sie mir helfen?").\n' +
    '- deshalb pulls the finite verb immediately after it (verb-second); so + Adjektiv/viel/viele + dass sends the dass-clause verb to the end; never combine weil and deshalb in one clause.\n' +
    '- Genitiv: wegen/trotz/während all take the Genitiv (des/der + noun ending -s/-es for masc./neut., no ending for fem./plural) — never the Dativ, in this chapter\'s target register.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe B1 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are ready for the real Goethe B1 exam so far. Your grammar across zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb/so…dass, and the Genitiv is solid. Trust your preparation.',
    mid: 'Solid B1. Re-run the weakest section once (usually Genitiv endings or the weil/da/obwohl distinction), then you\'ll be ready.',
    low: 'Worth a full re-run of Chapters 1–5 before continuing — focus especially on zu-placement in separable verbs and the Genitiv article/noun-ending pair.'
  },

  parserSentence: [
    { w: 'Wegen', role: 'r-preposition' }, { w: 'des', role: 'r-genitiv' },
    { w: 'Erfolgs', role: 'r-genitiv' }, { w: 'hoffe', role: 'r-verb' },
    { w: 'ich', role: 'r-subject' }, { w: ',', role: 'plain' },
    { w: 'zu', role: 'plain' }, { w: 'feiern', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Chapters 1–5 fit together — and how the first B1 checkpoint works.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'The evening before the mock exam, recycling all five chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words and phrases from Chapters 1–5.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv + wegen/trotz/während.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style email mixing all five chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point across five realistic exam-style scenarios.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this chapter\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all five grammar points in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full Goethe-B1-style mini mock test. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your first B1 readiness check — strengths, weaknesses, and an overall score.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A complete Goethe-B1-style mini mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a final readiness checklist.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '16 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words and phrases from Chapters 1–5 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb/so…dass, and Genitiv + wegen/trotz/während — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle full Goethe-B1 listening & reading tasks' },
    { de: 'Schreiben', text: 'Write a clean B1 email, opinion, travel report, or complaint' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Mix zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, and Genitiv correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your first B1 readiness score and what to revise' }
  ],

  // ---------- Vocabulary review (~32 items — no new words, from Ch.1–5) ----------
  vocab: [
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', ex: 'Ich hoffe, die Prüfung zu bestehen.', exEn: 'I hope to pass the exam.',
      conj: { praesens: 'hofft', praeteritum: 'hoffte', perfekt: 'hat gehofft' } },
    { de: 'versuchen', pos: 'verb', en: 'to try', hi: 'कोशिश करना', ex: 'Ich versuche, ruhig zu bleiben.', exEn: 'I\'m trying to stay calm.',
      conj: { praesens: 'versucht', praeteritum: 'versuchte', perfekt: 'hat versucht' } },
    { de: 'vorhaben', pos: 'verb', en: 'to plan, intend', hi: 'योजना बनाना', ex: 'Ich habe vor, morgen zu üben.', exEn: 'I\'m planning to practise tomorrow.',
      conj: { praesens: 'hat vor', praeteritum: 'hatte vor', perfekt: 'hat vorgehabt' } },
    { de: 'versprechen', pos: 'verb', en: 'to promise', hi: 'वादा करना', ex: 'Ich verspreche, pünktlich zu sein.', exEn: 'I promise to be on time.',
      conj: { praesens: 'verspricht', praeteritum: 'versprach', perfekt: 'hat versprochen' } },
    { de: 'weil', pos: 'grammar', en: 'because (neutral reason)', hi: 'क्योंकि', ex: 'Ich lerne, weil ich bestehen möchte.', exEn: 'I study because I want to pass.' },
    { de: 'da', pos: 'grammar', en: 'as, since (formal reason)', hi: 'चूंकि', ex: 'Da ich vorbereitet bin, bin ich ruhig.', exEn: 'Since I\'m prepared, I\'m calm.' },
    { de: 'obwohl', pos: 'grammar', en: 'although (contrast)', hi: 'हालांकि', ex: 'Obwohl ich nervös bin, schaffe ich es.', exEn: 'Although I\'m nervous, I\'ll manage it.' },
    { de: 'könnte', pos: 'verb', en: 'could (polite request)', hi: 'क्या आप कर सकते हैं', ex: 'Könnten Sie mir helfen?', exEn: 'Could you help me?' },
    { de: 'würde', pos: 'verb', en: 'would (polite request)', hi: 'क्या आप करेंगे', ex: 'Würden Sie bitte langsamer sprechen?', exEn: 'Would you please speak more slowly?' },
    { de: 'hätte gern', pos: 'verb', en: 'would like (to have)', hi: 'मुझे चाहिए', ex: 'Ich hätte gern einen Kaffee.', exEn: 'I\'d like a coffee.' },
    { de: 'wäre', pos: 'verb', en: 'would be', hi: 'होगा', ex: 'Wären Sie so freundlich, mir zu helfen?', exEn: 'Would you be so kind as to help me?' },
    { de: 'deshalb', pos: 'grammar', en: 'that\'s why, therefore (result)', hi: 'इसलिए', ex: 'Es regnet. Deshalb bleiben wir zu Hause.', exEn: 'It\'s raining. That\'s why we\'re staying home.' },
    { de: 'so … dass', pos: 'grammar', en: 'so … that (strong consequence)', hi: 'इतना … कि', ex: 'Ich war so müde, dass ich sofort eingeschlafen bin.', exEn: 'I was so tired that I fell asleep immediately.' },
    { de: 'wegen', pos: 'grammar', en: 'because of (+ Genitiv)', hi: 'की वजह से', ex: 'Wegen des Regens bleiben wir zu Hause.', exEn: 'Because of the rain, we\'re staying home.' },
    { de: 'trotz', pos: 'grammar', en: 'despite (+ Genitiv)', hi: 'के बावजूद', ex: 'Trotz des Regens gehen wir spazieren.', exEn: 'Despite the rain, we\'re going for a walk.' },
    { de: 'während', pos: 'grammar', en: 'during (+ Genitiv)', hi: 'के दौरान', ex: 'Während der Reise haben wir fotografiert.', exEn: 'During the trip, we took photos.' },
    { de: 'Erfolg', art: 'der', gender: 'm', plural: 'Erfolge', pos: 'noun', en: 'success', hi: 'सफलता', ex: 'Wegen des Erfolgs feiern wir heute.', exEn: 'Because of the success, we\'re celebrating today.' },
    { de: 'Grund', art: 'der', gender: 'm', plural: 'Gründe', pos: 'noun', en: 'reason', hi: 'कारण', ex: 'Was ist der Grund für deine Entscheidung?', exEn: 'What is the reason for your decision?' },
    { de: 'Gegensatz', art: 'der', gender: 'm', plural: 'Gegensätze', pos: 'noun', en: 'contrast, opposite', hi: 'विरोधाभास', ex: 'Trotz und wegen bilden einen Gegensatz.', exEn: '"Trotz" and "wegen" form a contrast.' },
    { de: 'nervös', pos: 'adjective', en: 'nervous', hi: 'घबराया हुआ', ex: 'Vor der Prüfung bin ich immer etwas nervös.', exEn: 'Before an exam, I\'m always a bit nervous.' },
    { de: 'gestresst', pos: 'adjective', en: 'stressed', hi: 'तनाव में', ex: 'Wegen der Prüfung bin ich gestresst.', exEn: 'Because of the exam, I\'m stressed.' },
    { de: 'ausgeruht', pos: 'adjective', en: 'well-rested', hi: 'तरोताज़ा', ex: 'Nach einer Pause fühle ich mich ausgeruht.', exEn: 'After a break, I feel well-rested.' },
    { de: 'vorbereitet', pos: 'adjective', en: 'prepared', hi: 'तैयार', ex: 'Ich bin gut auf die Prüfung vorbereitet.', exEn: 'I\'m well prepared for the exam.' },
    { de: 'Probeprüfung', art: 'die', gender: 'f', plural: 'Probeprüfungen', pos: 'noun', en: 'mock exam', hi: 'नकली परीक्षा', ex: 'Die Probeprüfung findet heute Abend statt.', exEn: 'The mock exam takes place this evening.' },
    { de: 'wiederholen', pos: 'verb', en: 'to review, repeat', hi: 'दोहराना', ex: 'Wir sollten die Grammatik noch einmal wiederholen.', exEn: 'We should review the grammar once more.',
      conj: { praesens: 'wiederholt', praeteritum: 'wiederholte', perfekt: 'hat wiederholt' } },
    { de: 'verwechseln', pos: 'verb', en: 'to confuse, mix up', hi: 'भ्रमित करना', ex: 'Ich verwechsle oft wegen und trotz.', exEn: 'I often confuse "wegen" and "trotz".',
      conj: { praesens: 'verwechselt', praeteritum: 'verwechselte', perfekt: 'hat verwechselt' } },
    { de: 'ruhig', pos: 'adjective', en: 'calm', hi: 'शांत', ex: 'Bleib ruhig, du bist gut vorbereitet.', exEn: 'Stay calm, you\'re well prepared.' },
    { de: 'sicher', pos: 'adjective', en: 'confident, certain', hi: 'आश्वस्त', ex: 'Ich bin mir ziemlich sicher.', exEn: 'I\'m fairly confident.' },
    { de: 'Übung', art: 'die', gender: 'f', plural: 'Übungen', pos: 'noun', en: 'exercise', hi: 'अभ्यास', ex: 'Diese Übung hilft mir sehr.', exEn: 'This exercise helps me a lot.' },
    { de: 'Thema', art: 'das', gender: 'n', plural: 'Themen', pos: 'noun', en: 'topic', hi: 'विषय', ex: 'Welches Thema fällt dir am schwersten?', exEn: 'Which topic seems hardest to you?' },
    { de: 'feiern', pos: 'verb', en: 'to celebrate', hi: 'जश्न मनाना', ex: 'Wir feiern den Erfolg zusammen.', exEn: 'We\'re celebrating the success together.',
      conj: { praesens: 'feiert', praeteritum: 'feierte', perfekt: 'hat gefeiert' } },
    { de: 'Liste', art: 'die', gender: 'f', plural: 'Listen', pos: 'noun', en: 'list', hi: 'सूची', ex: 'Ich schreibe eine Liste aller Konjunktionen.', exEn: 'I\'m writing a list of all the conjunctions.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 1–5 focus) ----------
  grammar: [
    {
      title: 'zu + Infinitiv — Verben, Adjektive, Nomen',
      body: [
        'A first verb (hoffen, versuchen, vergessen, planen, vorhaben, versprechen…), an adjective construction (Es ist wichtig …), or a noun construction (Ich habe Lust …) all link to a second verb with zu + Infinitiv at the end. Separable verbs insert zu between the prefix and the stem: anzurufen, mitzubringen.'
      ],
      table: {
        head: ['Trigger', 'Example'],
        rows: [
          ['Verb', '<span class="de">Ich hoffe, Deutsch zu lernen.</span>'],
          ['Adjective', '<span class="de">Es ist wichtig, genug zu schlafen.</span>'],
          ['Noun', '<span class="de">Ich habe Lust, ins Kino zu gehen.</span>'],
          ['Separable verb', '<span class="de">Vergiss nicht, anzurufen.</span>']
        ]
      },
      hinglish: 'Pehla verb, adjective construction, ya noun construction sabhi zu + Infinitiv se doosre verb ko end mein jodte hain. Trennbare verbs mein zu prefix aur verb ke beech mein aata hai.'
    },
    {
      title: 'weil / da / obwohl',
      body: [
        'All three send the finite verb to the very end of their clause. weil is the neutral, everyday reason; da is the more formal/already-known reason; obwohl signals an unexpected contrast.'
      ],
      table: {
        head: ['Connector', 'Job', 'Example'],
        rows: [
          ['weil', 'Reason', '<span class="de">Ich bin müde, weil ich gearbeitet habe.</span>'],
          ['da', 'Formal/known reason', '<span class="de">Da ich krank bin, bleibe ich zu Hause.</span>'],
          ['obwohl', 'Contrast', '<span class="de">Obwohl es regnet, gehen wir spazieren.</span>']
        ]
      },
      hinglish: 'Teeno hi apne clause ke end mein finite verb bhejte hain. <b>weil</b> neutral reason deta hai, <b>da</b> formal ya pehle se pata reason, aur <b>obwohl</b> contrast batata hai.'
    },
    {
      title: 'Konjunktiv II — Höfliche Bitten',
      body: [
        'könnte/würde soften a request for an action; hätte gern requests a thing; wäre so freundlich reaches for maximum politeness. Never combine two of these markers in one clause.'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['Könnten Sie …?', '<span class="de">Könnten Sie mir helfen?</span>'],
          ['Ich hätte gern …', '<span class="de">Ich hätte gern einen Kaffee.</span>'],
          ['Wären Sie so freundlich …?', '<span class="de">Wären Sie so freundlich, das Fenster zu öffnen?</span>']
        ]
      },
      hinglish: 'könnte/würde ek action ke liye request ko soft karte hain; hätte gern ek cheez ke liye; wäre so freundlich sabse zyada politeness ke liye. Do markers ko kabhi ek saath mat jodo.'
    },
    {
      title: 'deshalb & so … dass — Folgen',
      body: [
        'deshalb states a plain result and pulls the finite verb immediately after it. so + Adjektiv/viel/viele + dass shows a strong consequence, with the dass-clause verb at the end.'
      ],
      table: {
        head: ['Level', 'Example'],
        rows: [
          ['Result', '<span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span>'],
          ['Strong Result', '<span class="de">Ich war so müde, dass ich sofort eingeschlafen bin.</span>']
        ]
      },
      hinglish: 'deshalb ek plain result batata hai aur uske turant baad verb aata hai. so + Adjektiv/viel/viele + dass ek strong consequence dikhata hai.'
    },
    {
      title: 'Genitiv & wegen / trotz / während',
      body: [
        'The Genitiv answers Wessen? (Whose?). wegen states a reason, trotz a contrast, während a time period — all three always take the Genitiv.'
      ],
      table: {
        head: ['Preposition', 'Job', 'Example'],
        rows: [
          ['wegen', 'Reason', '<span class="de">Wegen des Regens bleiben wir zu Hause.</span>'],
          ['trotz', 'Contrast', '<span class="de">Trotz der Probleme arbeitet er weiter.</span>'],
          ['während', 'Time (during)', '<span class="de">Während der Reise haben wir fotografiert.</span>']
        ]
      },
      hinglish: 'Genitiv Wessen? (kiska?) ka jawab deta hai. <b>wegen</b> reason ke liye, <b>trotz</b> contrast ke liye, aur <b>während</b> time ke liye — teeno hamesha Genitiv lete hain.'
    },
    {
      title: 'Quick decision guide — all five together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['link two verbs cleanly?', '→ zu + Infinitiv'],
          ['give a reason, or signal a contrast?', '→ weil / da / obwohl'],
          ['soften a request?', '→ könnte / würde / hätte / wäre'],
          ['state a plain result?', '→ deshalb'],
          ['show HOW strong a consequence was?', '→ so … dass'],
          ['show possession, reason, contrast, or time?', '→ Genitiv, wegen, trotz, während']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool: zu + Infinitiv, weil/da/obwohl, könnte/würde/hätte/wäre, deshalb, so … dass, Genitiv + wegen/trotz/während.'
    }
  ],

  // ---------- Reading (Goethe-style: E-Mail, clickable) ----------
  reading: {
    title: 'E-Mail: Vor der Probeprüfung',
    titleEn: 'Email: before the mock exam',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'dear', hi: 'प्रिय', type: 'Adjective' },
      { w: 'Kursteilnehmer', role: 'r-subject', en: 'course participants', hi: 'कोर्स सहभागी', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'der', role: 'r-genitiv', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Probeprüfung', role: 'r-genitiv', en: 'mock exam (gen.)', hi: 'नकली परीक्षा का', type: 'Noun · fem.' },
      { w: 'am', role: 'r-time', en: 'on the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Freitag', role: 'r-time', en: 'Friday', hi: 'शुक्रवार', type: 'Noun · masc.' },
      { w: 'möchte', role: 'r-verb', en: 'would like (to)', hi: 'चाहती हूँ', type: 'Verb · Modalverb' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपको', type: 'Pronoun · Akk.' },
      { w: 'bitten', role: 'r-verb', en: 'to ask (Satzende)', hi: 'निवेदन करना', type: 'Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सब', type: 'Indefinitpronomen' },
      { w: 'Unterlagen', role: 'r-akkusativ', en: 'documents', hi: 'दस्तावेज़', type: 'Noun · plural' },
      { w: 'mitzubringen', role: 'r-verb', en: 'to bring along (Satzende)', hi: 'साथ लाना', type: 'Trennbares Verb · mitbringen (Satzende)', why: 'zu goes between prefix and stem: mit + zu + bringen (recycled — Ch.1).' },
      { w: '.', plain: true },
      { w: 'Da', role: 'r-conjunction', en: 'as/since', hi: 'चूंकि', type: 'Konjunktion · da', why: 'da — formal, already-known reason (recycled — Ch.2).' },
      { w: 'viele', role: 'r-subject', en: 'many', hi: 'कई', type: 'Indefinitpronomen' },
      { w: 'Teilnehmer', role: 'r-subject', en: 'participants', hi: 'सहभागी', type: 'Noun · plural' },
      { w: 'nervös', role: 'r-adjective', en: 'nervous', hi: 'घबराए हुए', type: 'Adjective' },
      { w: 'sind', role: 'r-verb', en: 'are (Satzende)', hi: 'हैं', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'möchten', role: 'r-verb', en: 'would like (to)', hi: 'चाहते हैं', type: 'Verb · Modalverb' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'versuchen', role: 'r-verb', en: 'to try', hi: 'कोशिश करना', type: 'Verb · versuchen' },
      { w: ',', plain: true },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'entspannte', role: 'r-akkusativ', en: 'relaxed', hi: 'आरामदायक', type: 'Adjective · Akk.' },
      { w: 'Atmosphäre', role: 'r-akkusativ', en: 'atmosphere', hi: 'माहौल', type: 'Noun · fem.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'schaffen', role: 'r-verb', en: 'to create (Satzende)', hi: 'बनाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Probeprüfung', role: 'r-subject', en: 'mock exam', hi: 'नकली परीक्षा', type: 'Noun · fem.' },
      { w: 'anspruchsvoll', role: 'r-adjective', en: 'demanding', hi: 'कठिन', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is (Satzende)', hi: 'है', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'alle', role: 'r-subject', en: 'all', hi: 'सब', type: 'Indefinitpronomen' },
      { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छी तरह', type: 'Adverb' },
      { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Wären', role: 'r-verb', en: 'would be', hi: 'क्या आप होंगे', type: 'Konjunktiv II · sein', why: 'Wären Sie so freundlich …? — maximum politeness (recycled — Ch.3).' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', type: 'Pronoun · formal' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतने', type: 'Adverb' },
      { w: 'freundlich', role: 'r-adjective', en: 'kind', hi: 'दयालु', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'pünktlich', role: 'r-adjective', en: 'punctual', hi: 'समय पर', type: 'Adjective' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'kommen', role: 'r-verb', en: 'to come (Satzende)', hi: 'आना', type: 'Infinitiv (Satzende)' },
      { w: '?', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'engen', role: 'r-genitiv', en: 'tight', hi: 'तंग', type: 'Adjective · Genitiv' },
      { w: 'Zeitplans', role: 'r-genitiv', en: 'schedule (gen.)', hi: 'समय-सारणी का', type: 'Noun · masc.' },
      { w: 'beginnen', role: 'r-verb', en: 'begin (Satzende)', hi: 'शुरू करते हैं', type: 'Verb · beginnen (Satzende)' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'pünktlich', role: 'r-adjective', en: 'punctually', hi: 'समय पर', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', type: 'Verb · sein' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', type: 'Adverb', why: 'so + Adjektiv …, dass — strong consequence (recycled — Ch.4).' },
      { w: 'gespannt', role: 'r-adjective', en: 'excited', hi: 'उत्सुक', type: 'Adjective' },
      { w: 'auf', role: 'r-preposition', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'eure', role: 'r-akkusativ', en: 'your (plural)', hi: 'तुम्हारा', type: 'Possessivartikel · Akk.' },
      { w: 'Ergebnisse', role: 'r-akkusativ', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'kaum', role: 'r-adverb', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'schlafen', role: 'r-verb', en: 'to sleep (Satzende)', hi: 'सोना', type: 'Infinitiv (Satzende)' },
      { w: 'kann', role: 'r-verb', en: 'can (Satzende)', hi: 'सकती (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: '!', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'wünsche', role: 'r-verb', en: 'wish (Position 2)', hi: 'शुभकामनाएं देती हूँ', type: 'Verb · wünschen (Position 2)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'euch', role: 'r-dativ', en: '(to) you (plural)', hi: 'तुम्हें', type: 'Pronoun · Dativ' },
      { w: 'allen', role: 'r-dativ', en: 'all', hi: 'सबको', type: 'Determiner · Dativ' },
      { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', type: 'Adjective' },
      { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'के साथ', type: 'Preposition' },
      { w: 'freundlichen', role: 'r-dativ', en: 'kind', hi: 'सादर', type: 'Adjective · Dativ' },
      { w: 'Grüßen', role: 'r-dativ', en: 'regards', hi: 'शुभकामनाएं', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'Frau', role: 'r-subject', en: 'Mrs', hi: 'श्रीमती', type: 'Noun · fem.' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', type: 'Name' }
    ],
    translation: 'Dear course participants, because of the mock exam on Friday, I would like to ask you to bring all documents. Since many participants are nervous, we\'d like to try to create a relaxed atmosphere. Although the mock exam is demanding, everyone is well prepared. Would you be so kind as to arrive on time? Because of the tight schedule, we\'ll begin punctually. I\'m so excited about your results that I can hardly sleep! That\'s why I wish you all much success. Kind regards, Mrs. Weber.'
  },

  // ---------- Listening (Goethe-style, 5 realistic B1 scenarios in one transcript) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_006_L001', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich bin heute Abend so nervös wegen der Probeprüfung morgen.', en: 'Timo, I\'m so nervous tonight about the mock exam tomorrow.' },
      { id: 'B1_006_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Musst du gar nicht sein — da du so viel geübt hast, wird das bestimmt gut laufen.', en: 'You really don\'t need to be — since you\'ve practiced so much, it\'ll definitely go well.' },
      { id: 'B1_006_L003', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Meinst du das ernst, obwohl ich letzte Woche noch alles durcheinander hatte?', en: 'Do you mean that seriously, even though last week I still had everything mixed up?' },
      { id: 'B1_006_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Total. Würde es dir helfen, wenn wir jetzt noch einmal kurz zusammen üben?', en: 'Totally. Would it help if we practiced together once more right now?' },
      { id: 'B1_006_L005', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, das wäre toll — danke, dass du dir die Zeit nimmst.', en: 'Yes, that would be great — thanks for taking the time.' }
    ],
    transcript: 'Timo, ich bin heute Abend so nervös wegen der Probeprüfung morgen. Musst du gar nicht sein — da du so viel geübt hast, wird das bestimmt gut laufen. Meinst du das ernst, obwohl ich letzte Woche noch alles durcheinander hatte? Total. Würde es dir helfen, wenn wir jetzt noch einmal kurz zusammen üben? Ja, das wäre toll — danke, dass du dir die Zeit nimmst.',
    translation: 'Timo, I\'m so nervous tonight about the mock exam tomorrow. You really don\'t need to be — since you\'ve practiced so much, it\'ll definitely go well. Do you mean that seriously, even though last week I still had everything mixed up? Totally. Would it help if we practiced together once more right now? Yes, that would be great — thanks for taking the time.',
    tokens: [
      { w: 'Timo', role: 'r-name', en: 'Timo', type: 'Name' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: 'so' },
      { w: 'nervös' },
      { w: 'wegen' },
      { w: 'der' },
      { w: 'Probeprüfung' },
      { w: 'morgen', role: 'r-adverb', en: 'tomorrow', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Musst', role: 'r-modalverb', en: 'must, to have to', type: 'Modal · müssen (du)' },
      { w: 'du' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: 'sein' },
      { w: '—', plain: true },
      { w: 'da' },
      { w: 'du' },
      { w: 'so' },
      { w: 'viel' },
      { w: 'geübt' },
      { w: 'hast' },
      { w: ',', plain: true },
      { w: 'wird' },
      { w: 'das' },
      { w: 'bestimmt' },
      { w: 'gut' },
      { w: 'laufen' },
      { w: '.', plain: true },
      { w: 'Meinst' },
      { w: 'du' },
      { w: 'das' },
      { w: 'ernst', role: 'plain', en: 'seriously' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'ich' },
      { w: 'letzte', role: 'plain', en: 'last', type: 'Adjective' },
      { w: 'Woche' },
      { w: 'noch' },
      { w: 'alles' },
      { w: 'durcheinander' },
      { w: 'hatte' },
      { w: '?', plain: true },
      { w: 'Total' },
      { w: '.', plain: true },
      { w: 'Würde' },
      { w: 'es' },
      { w: 'dir' },
      { w: 'helfen' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'wir' },
      { w: 'jetzt' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'kurz' },
      { w: 'zusammen' },
      { w: 'üben' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'wäre' },
      { w: 'toll' },
      { w: '—', plain: true },
      { w: 'danke' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'du' },
      { w: 'dir' },
      { w: 'die' },
      { w: 'Zeit' },
      { w: 'nimmst' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum ist Meike nervös?', qEn: 'Why is Meike nervous?', options: ['Ein Bewerbungsgespräch', 'Die Modellprüfung morgen', 'Ein Arzttermin', 'Ein Wohnungsumzug'], optionsEn: ['A job interview', 'The mock exam tomorrow', 'A doctor\'s appointment', 'Moving apartments'], answer: 1,
        explain: '"Ich bin heute Abend so nervös wegen der Probeprüfung morgen."' },
      { q: 'Was bietet Timo an?', qEn: 'What does Timo offer to do?', options: ['Die Prüfung abzusagen', 'Jetzt zusammen zu üben', 'Die Prüfung für sie zu schreiben', 'Die Lehrerin anzurufen'], optionsEn: ['Cancel the exam', 'Practice together now', 'Take the exam for her', 'Call the teacher'], answer: 1,
        explain: '"Würde es dir helfen, wenn wir jetzt noch einmal kurz zusammen üben?"' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor und sag, warum du Deutsch lernst.", taskEn: "Exam, Part 1: introduce yourself and say why you're learning German.", de: "Ich lerne Deutsch, weil ich hier arbeiten möchte. Deshalb übe ich jeden Tag.", en: "I'm learning German because I want to work here. That's why I practise every day." },
    { task: "Deine Partnerin ist nervös wegen der Probeprüfung. Beruhige sie.", taskEn: "Your partner is nervous about the mock exam. Reassure her.", de: "Da du so viel geübt hast, wird das bestimmt gut laufen.", en: "Since you've practised so much, it'll definitely go well." },
    { task: "Teil 2: Sprich über Stress vor Prüfungen.", taskEn: "Part 2: talk about stress before exams.", de: "Ich bin oft gestresst, obwohl ich vorbereitet bin. Wegen der Aufregung schlafe ich schlecht.", en: "I'm often stressed even though I'm prepared. Because of the nerves I sleep badly." },
    { task: "Dein Partner fragt, was dir beim Lernen hilft.", taskEn: "Your partner asks what helps you when studying.", de: "Ich lerne morgens, weil ich dann ausgeruht bin.", en: "I study in the morning because I'm rested then." },
    { task: "Teil 3: Plant zusammen, wie ihr für die Prüfung übt.", taskEn: "Part 3: plan together how you'll practise for the exam.", de: "Wir könnten uns dienstags treffen. Ich hätte gern zwei Stunden Sprechen.", en: "We could meet on Tuesdays. I'd like two hours of speaking." },
    { task: "Erzähl von einem Erfolg trotz Schwierigkeiten.", taskEn: "Talk about a success despite difficulties.", de: "Trotz meiner Nervosität habe ich die Prüfung geschafft.", en: "Despite my nerves I passed the exam." },
    { task: "Rollenspiel: Ihr sprecht nach der Probeprüfung.", taskEn: "Role-play: you talk after the mock exam.", de: "Es war so schwer, dass ich müde bin. Aber während der Prüfung war ich ruhig.", en: "It was so hard that I'm tired. But during the exam I was calm." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe B1 writing. Choose ONE task and write ~50 words, using at least four grammar points from Chapters 1–5 (zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, or Genitiv+wegen/trotz/während). (1) FORMAL EMAIL: ask the language school to reschedule the mock exam, and give a polite reason. (2) OPINION: do you think mock exams are useful? Give reasons and a result. (3) TRAVEL REPORT: describe a trip where something went wrong but you still enjoyed it.',
    starters: ['Sehr geehrte/r …,', 'Ich hoffe, …', 'Wegen …', 'Obwohl …', 'Deshalb …'],
    placeholder: 'Sehr geehrte Frau Weber, wegen eines Arzttermins hätte ich eine Bitte …',
    minWords: 50
  },

  // ---------- Exercises (4 types, mixed Ch.1–5) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich habe vor, nach Deutschland ___."',
      options: ['fahren', 'zu fahren', 'gefahren'],
      answer: 1,
      explain: 'vorhaben + zu + Infinitiv: "Ich habe vor, nach Deutschland zu fahren."'
    },
    gap: {
      sentence: ['', ' es regnet, gehen wir spazieren.'],
      gaps: [ { answer: 'Obwohl', accepts: ['Obwohl'] } ],
      explain: 'obwohl signals an unexpected contrast: going for a walk despite the rain.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Ich hoffe, …', art: 'zu + Infinitiv' },
        { noun: 'Da ich krank bin, …', art: 'weil / da / obwohl' },
        { noun: 'Könnten Sie …', art: 'Konjunktiv II — höfliche Bitte' },
        { noun: 'Deshalb bin ich …', art: 'Folgen — deshalb' },
        { noun: 'Wegen des Regens …', art: 'Genitiv + wegen/trotz/während' }
      ]
    },
    builder: {
      target: 'Build: "Because of the rain, we\'re staying home."',
      bank: ['Wegen', 'des', 'Regens', 'bleiben', 'wir', 'zu', 'Hause', '.'],
      answer: ['Wegen', 'des', 'Regens', 'bleiben', 'wir', 'zu', 'Hause', '.'],
      roles: { 'Wegen': 'r-preposition', 'des': 'r-genitiv', 'Regens': 'r-genitiv', 'bleiben': 'r-verb' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Ich versuche, ruhig ___."', options: ['bleiben', 'zu bleiben', 'geblieben'], answer: 1,
      explain: 'versuchen + zu + Infinitiv: "Ich versuche, ruhig zu bleiben."' },
    { q: 'Which connector states an unexpected CONTRAST?', options: ['weil', 'da', 'obwohl'], answer: 2,
      explain: 'obwohl means "although" — it signals a contrast.' },
    { q: 'Complete: "Ich ___ gern einen Kaffee."', options: ['hätte', 'würde', 'wäre'], answer: 0,
      explain: 'hätte gern is the classic polite pattern for ordering or requesting a thing.' },
    { q: 'Which sentence has correct deshalb word order?', options: ['Deshalb ich bin müde.', 'Deshalb bin ich müde.', 'Ich deshalb bin müde.'], answer: 1,
      explain: 'The finite verb comes immediately after deshalb, before the subject.' },
    { q: 'Complete: "Trotz ___ Regens gehen wir spazieren."', options: ['der', 'des', 'dem'], answer: 1,
      explain: 'der Regen is masculine, so its Genitiv article is des: des Regens.' },
    { q: 'Which sentence contains an error?', options: ['Es ist wichtig, genug zu schlafen.', 'Wegen der Mann ist es kalt.', 'Ich war so müde, dass ich eingeschlafen bin.'], answer: 1,
      explain: 'Masculine nouns need both the Genitiv article (des) and the noun ending (-es): "Wegen des Mannes."' }
  ],

  // ---------- Summary / First B1 Readiness Check ----------
  takeaways: [
    { c: 'r-preposition', html: '<strong>Grammar mastered:</strong> zu + Infinitiv after verbs/adjectives/nouns and inside separable verbs, weil/da/obwohl, polite Konjunktiv II (könnte/würde/hätte/wäre), deshalb & so … dass, and the Genitiv with wegen/trotz/während.' },
    { c: 'r-verb', html: '<strong>Vocabulary mastered:</strong> the key words and phrases across Chapters 1–5 — everyday life, travel, requests, results, and reasons.' },
    { c: 'r-conjunction', html: '<strong>Speaking confidence:</strong> you can introduce yourself, present a topic, and plan something together — the three Goethe B1 speaking formats.' },
    { c: 'r-genitiv', html: '<strong>Listening & reading readiness:</strong> you can follow office, doctor, telephone, university, and apartment scenarios drawing on all five chapters at once.' },
    { c: 'r-verb', html: '<strong>Writing readiness:</strong> you can produce a clean, well-structured short text — email, opinion, or travel report — using accurate B1 grammar.' },
    { c: 'r-preposition', html: '<strong>Overall B1 readiness:</strong> if you scored well across this mock test, you\'re on track for the real Goethe-Zertifikat B1 exam. Review any weak sections below, then keep moving through Phase 1.' }
  ],
  revisionTips: [
    'Weak on zu-placement? Redo Ch.1 — especially separable verbs like anzurufen, mitzubringen.',
    'Mixing up weil/da/obwohl? Redo Ch.2 — reason vs. formal reason vs. contrast.',
    'Shaky on polite requests? Redo Ch.3 — könnte vs. würde vs. hätte gern vs. wäre so freundlich.',
    'Unsure about deshalb\'s word order? Redo Ch.4 — verb immediately after deshalb, before the subject.',
    'Genitiv endings feel unnatural? Redo Ch.5 — des/der + noun ending, and the wegen/trotz/während trio.'
  ]
};

window.CHAPTER = CHAPTER;
