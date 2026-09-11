/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 58
   "Textkohärenz: Absatzlogik" — paragraph logic: one central
   idea per paragraph (topic sentence → explanation → example →
   conclusion), logical ordering, and transitions between
   paragraphs. Does NOT teach C1 rhetorical structure, advanced
   academic argumentation, or full connector systems (covered
   elsewhere).
   IMPORTANT: dialogue uses ONLY Anke and Timo.
   Vocabulary source: uploaded Chapter 58 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-58-textkohaerenz-absatzlogik',
  phase: 'B2 · Phase 6',
  number: 58,
  title: 'Textkohärenz: Absatzlogik',
  titleEn: 'Text coherence: paragraph logic',
  description: 'One paragraph = one idea. Topic sentence, explanation, example, conclusion — in that order.',
  xp: 740,
  time: 75,
  difficulty: 'Advanced',
  nextChapter: { number: 59, title: 'Konjunktiv I: Formen', titleEn: 'Konjunktiv I: forms' , href: 'chapter-b2-59-konjunktiv-i-formen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One paragraph. <em>One idea.</em>',
    intro: 'Anke needs feedback on her cover letter, and Timo walks her through the logic — introduce yourself, justify your motivation, then summarize — one paragraph, one idea, in a clear order.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how a topic sentence, explanation, example, and conclusion fit together'
    ],
    scene: 'Planung des Aufsatzes',
    femaleSpeakers: ['Anke'],
    dialogue: [
      { speaker: 'Anke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'Feedback', role: 'r-akkusativ', en: 'feedback', hi: 'प्रतिक्रिया', pron: 'FEET-bek', type: 'Noun · neut.' },
        { w: 'zu', role: 'r-preposition', en: 'on', hi: 'के बारे में', pron: 'tsoo', type: 'Preposition' },
        { w: 'meinem', role: 'r-dativ', en: 'my (neut. dat.)', hi: 'मेरे', pron: 'MY-naym', type: 'Possessive · dative' },
        { w: 'Anschreiben', role: 'r-dativ', en: 'cover letter (dat.)', hi: 'कवर पत्र के', pron: 'AN-shry-ben', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'I need feedback on my cover letter.', hi: 'Mujhe apne cover letter par feedback chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsoo-AIRST', type: 'Adverb', why: 'Absatzlogik: each paragraph has a clear logical function within the text (this chapter).', ex: 'Zuerst stellst du dich vor.', exEn: 'First you introduce yourself.' },
        { w: 'stellst', role: 'r-verb', en: 'introduce', hi: 'मिलवाते हो', pron: 'SHTELST', type: 'Verb · vorstellen (du)', lexicalUnit: 'vorstellen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorstellen)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorstellen' },
        { w: '.', plain: true }
      ], en: 'Gladly. First you introduce yourself.', hi: 'Khushi se. Pehle tum khud ko milvaate ho.' },
      { speaker: 'Anke', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'And after that?', hi: 'Uske baad?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'begründest', role: 'r-verb', en: 'justify', hi: 'कारण बताते हो', pron: 'be-GRÜN-dest', type: 'Verb · begründen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'अपनी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Motivation', role: 'r-akkusativ', en: 'motivation', hi: 'प्रेरणा', pron: 'mo-ti-va-TSYON', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Zuletzt', role: 'r-akkusativ', en: 'lastly', hi: 'अंत में', pron: 'tsoo-LETST', type: 'Adverb', why: 'zuletzt = lastly, structural connector for paragraph order (this chapter).', ex: 'Zuletzt fasst du alles zusammen.', exEn: 'Lastly you summarize everything.' },
        { w: 'fasst', role: 'r-verb', en: 'summarize', hi: 'संक्षेप', pron: 'fast', type: 'Verb · zusammenfassen (du)', lexicalUnit: 'zusammenfassen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'zusammen', role: 'r-verb', en: '(prefix of zusammenfassen)', hi: '', pron: 'tsu-ZA-men', type: 'Separable prefix · Satzende', lexicalUnit: 'zusammenfassen' },
        { w: '.', plain: true }
      ], en: 'After that you justify your motivation. Lastly you summarize everything.', hi: 'Uske baad tum apni prerna ka kaaran bataate ho. Ant mein tum sab kuch sankshep karte ho.' },
      { speaker: 'Anke', tokens: [
        { w: 'Fehlt', role: 'r-verb', en: 'is missing', hi: 'कुछ छूट रहा है', pron: 'failt', type: 'Verb · fehlen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझसे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: '?', plain: true }
      ], en: 'Am I missing something?', hi: 'Kya mujhse kuch chhoot raha hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Absätze', role: 'r-subject', en: 'paragraphs', hi: 'अनुच्छेद', pron: 'AP-zet-tsuh', type: 'Noun · plural' },
        { w: 'folgen', role: 'r-verb', en: 'follow', hi: 'अनुसरण करते हैं', pron: 'FOL-gen', type: 'Verb · folgen' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'klaren', role: 'r-dativ', en: 'clear', hi: 'स्पष्ट', pron: 'KLAH-ren', type: 'Adjective · dative' },
        { w: 'Logik', role: 'r-dativ', en: 'logic (dat.)', hi: 'तर्क का', pron: 'LO-gik', type: 'Noun · fem. dat.', why: 'die Logik (this chapter).', ex: 'einer klaren Logik' },
        { w: '.', plain: true }
      ], en: 'No, your paragraphs follow a clear logic.', hi: 'Nahi, tumhaare anuchhed spasht tark ka anusaran karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every good paragraph is a sandwich: <span class="r-leitsatz">topic sentence</span> (top bread) → <span class="r-erklaerung">explanation</span> + <span class="r-beispiel">example</span> (filling) → <span class="r-schluss">conclusion</span> (bottom bread). If a sentence doesn\'t support the topic sentence, it belongs in a <span class="r-newpara">different paragraph</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEXTKOHÄRENZ: ABSATZLOGIK (paragraph logic) at B2 level: every paragraph should express ONE central idea (Kernaussage), developed through a topic sentence (Leitsatz) → explanation (Erklärung) → example (Beispiel) → logical conclusion (Schluss). Paragraphs connect to each other via transitions (Außerdem, Darüber hinaus, Im Gegensatz dazu, Ein weiterer Aspekt ist, Abschließend). If a sentence does not support the topic sentence, it belongs in a different paragraph — one paragraph, one idea. ' +
    'Do NOT expect or require C1 rhetorical structure, advanced academic argumentation, or a full connector-word inventory — those are separate topics; do not flag their absence. This is about ORGANIZATION, not just grammar accuracy — evaluate paragraph structure and logical flow, not only sentence-level correctness. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check whether EACH paragraph has one identifiable main idea, or whether it mixes multiple unrelated ideas (which should be split into separate paragraphs).\n' +
    '- Check whether each paragraph follows a sensible order (topic sentence first, not example-then-topic or conclusion-then-explanation), without being rigid about exact wording.\n' +
    '- Check whether paragraph-to-paragraph transitions exist and make logical sense (not sentence-level grammar, but whether the reader can follow why paragraph 2 follows paragraph 1).\n' +
    '- If unsure whether something is a structural issue, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Structure corrections:</b></p> then a <ul> with one <li> per genuine structural issue (mixed ideas in one paragraph, missing topic sentence, weak transition, etc.) — describe the issue in plain English, no strike-through formatting needed here since this is about organization, not wording. If there are no issues, write a single <li>No structural issues — well organized.</li>\n' +
    '3) <p><b>One-idea check:</b> one sentence confirming whether each paragraph expresses a single, clear main idea.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your paragraphs are clean, one-idea-per-paragraph structures. Ready for argument structure next.',
    mid: 'Good. Re-read the Standard Paragraph Model once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: one paragraph, one idea, always.'
  },

  parserSentence: [
    { w: 'Viele', role: 'r-leitsatz' }, { w: 'Unternehmen', role: 'r-leitsatz' }, { w: 'setzen', role: 'r-leitsatz' },
    { w: 'künstliche', role: 'r-leitsatz' }, { w: 'Intelligenz', role: 'r-leitsatz' }, { w: 'ein', role: 'r-leitsatz' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: every paragraph is topic sentence → explanation → example → conclusion.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anke and Timo plan a Goethe B2 essay and a report, building paragraphs around single ideas.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the Standard Paragraph Model, logical ordering, and paragraph transitions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a well-structured opinion article and a clearly organized company report.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify main idea, paragraph purpose, supporting information, and transitions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present one idea clearly and organize explanations into logical sections.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Reorganize a poorly structured essay and write a discussion essay with clear paragraph logic.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill finding the topic sentence, arranging sentences logically, and identifying paragraph purpose.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 740 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Topic-sentence drills, paragraph-reordering tasks, and an essay-planning worksheet.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Standard Paragraph Model, common patterns, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Leitsatz → Erklärung → Beispiel → Schluss', text: 'Structure every paragraph as topic sentence, explanation, example, conclusion' },
    { de: 'Ein Absatz = eine Idee.', text: 'Keep exactly one central idea per paragraph — split unrelated ideas into new paragraphs' },
    { de: 'Außerdem ... / Darüber hinaus ... / Abschließend ...', text: 'Use paragraph-level transitions to connect ideas logically' },
    { de: 'Problem → Ursache → Lösung → Ergebnis', text: 'Apply logical patterns (opinion, problem-solution, report) to organize paragraphs' },
    { de: 'Common in Goethe B2 Writing, reports, and university assignments', text: 'Recognize where paragraph logic matters most' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-58 list) ----------
  vocab: [
    { de: 'Bestellvorgang', art: 'der', gender: 'm', plural: 'Bestellvorgänge', pos: 'noun', level: 'B2', register: 'written', en: 'ordering process', hi: 'ऑर्डर की प्रक्रिया', ex: 'Ein gutes Beispiel wäre der Bestellvorgang in Online-Shops.', exEn: 'A good example would be the ordering process in online shops.', exHi: 'Ek achha udaharan online dukaanon mein order ki prakriya hoga.', ex2: 'Sie haben den Bestellvorgang vereinfacht.', ex2En: 'They\'ve simplified the ordering process.', ex2Hi: 'Unhone order ki prakriya aasaan banaayi hai.' },
    { de: 'Blutzucker', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'blood sugar', hi: 'रक्त शर्करा', ex: 'Der Arzt maß ihren Blutzucker.', exEn: 'The doctor measured her blood sugar.', exHi: 'Doctor ne uski rakt sharkara maapi.', ex2: 'Sie haben den Blutzucker regelmäßig kontrolliert.', ex2En: 'They\'ve checked the blood sugar regularly.', ex2Hi: 'Unhone rakt sharkara niyamit roop se jaanchi hai.' },
    { de: 'Browser', art: 'der', gender: 'm', plural: 'Browser', pos: 'noun', level: 'B2', register: 'both', en: 'browser', hi: 'ब्राउज़र', ex: 'Sie öffnete den Browser.', exEn: 'She opened the browser.', exHi: 'Usne browser khola.', ex2: 'Sie haben den Browser aktualisiert.', ex2En: 'They\'ve updated the browser.', ex2Hi: 'Unhone browser update kiya hai.' },
    { de: 'Bundespolizei', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'federal police', hi: 'संघीय पुलिस', ex: 'Die Bundespolizei kontrollierte den Grenzübergang.', exEn: 'The federal police checked the border crossing.', exHi: 'Sangheey police ne seema paar ki jaanch ki.', ex2: 'Sie haben die Bundespolizei informiert.', ex2En: 'They\'ve informed the federal police.', ex2Hi: 'Unhone sangheey police ko soochit kiya hai.' },
    { de: 'Coach', art: 'der/die', gender: 'm/f', plural: 'Coaches', pos: 'noun', level: 'B2', register: 'both', en: 'coach', hi: 'कोच', ex: 'Der Coach motivierte das Team.', exEn: 'The coach motivated the team.', exHi: 'Coach ne team ko protsaahit kiya.', ex2: 'Sie haben einen neuen Coach engagiert.', ex2En: 'They\'ve hired a new coach.', ex2Hi: 'Unhone ek naya coach rakha hai.' },
    { de: 'Datenschutz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'data protection', hi: 'डेटा सुरक्षा', ex: 'Wir sollten auch den Datenschutz erwähnen.', exEn: 'We should also mention data protection.', exHi: 'Humein data suraksha ka bhi zikr karna chaahiye.', ex2: 'Sie haben den Datenschutz verbessert.', ex2En: 'They\'ve improved data protection.', ex2Hi: 'Unhone data suraksha behtar banaayi hai.' },
    { de: 'Denkpause', art: 'die', gender: 'f', plural: 'Denkpausen', pos: 'noun', level: 'B2', register: 'both', en: 'thinking pause', hi: 'सोचने का ब्रेक', ex: 'Ich werde meine Denkpause kurz festhalten.', exEn: 'I will briefly record my thinking pause.', exHi: 'Main apne soch ke break ko thodi der note karunga.', ex2: 'Sie haben eine Denkpause eingelegt.', ex2En: 'They\'ve taken a thinking pause.', ex2Hi: 'Unhone soch ka break liya hai.' },
    { de: 'Diagramm', art: 'das', gender: 'n', plural: 'Diagramme', pos: 'noun', level: 'B2', register: 'written', en: 'diagram, chart', hi: 'आरेख', ex: 'Sie erklärte das Diagramm.', exEn: 'She explained the diagram.', exHi: 'Usne aarekh samjhaaya.', ex2: 'Sie haben ein neues Diagramm erstellt.', ex2En: 'They\'ve created a new diagram.', ex2Hi: 'Unhone ek naya aarekh banaaya hai.' },
    { de: 'Diamant', art: 'der', gender: 'm', plural: 'Diamanten', pos: 'noun', level: 'B2', register: 'written', en: 'diamond', hi: 'हीरा', ex: 'Der Diamant glänzte im Licht.', exEn: 'The diamond glittered in the light.', exHi: 'Heera roshni mein chamak raha tha.', ex2: 'Sie haben einen wertvollen Diamanten gefunden.', ex2En: 'They\'ve found a valuable diamond.', ex2Hi: 'Unhein ek keemti heera mila hai.' },
    { de: 'Doppelklick', art: 'der', gender: 'm', plural: 'Doppelklicks', pos: 'noun', level: 'B2', register: 'both', en: 'double click', hi: 'डबल क्लिक', ex: 'Mit einem Doppelklick öffnete sie die Datei.', exEn: 'With a double click, she opened the file.', exHi: 'Ek double click se usne file kholi.', ex2: 'Sie haben den Doppelklick geübt.', ex2En: 'They\'ve practised the double click.', ex2Hi: 'Unhone double click ka abhyaas kiya hai.' },
    { de: 'dran', pos: 'adverb', level: 'B2', register: 'spoken', en: 'on, up (one\'s turn)', hi: 'बारी होना', ex: 'Jetzt bist du dran.', exEn: 'Now it\'s your turn.', exHi: 'Ab tumhaari baari hai.', ex2: 'Sie waren als Erste dran.', ex2En: 'They were up first.', ex2Hi: 'Unki baari sabse pehle thi.' },
    { de: 'Durchwahl', art: 'die', gender: 'f', plural: 'Durchwahlen', pos: 'noun', level: 'B2', register: 'both', en: 'direct dial, extension', hi: 'सीधा नंबर, एक्सटेंशन', ex: 'Sie gab mir ihre Durchwahl.', exEn: 'She gave me her direct-dial number.', exHi: 'Usne mujhe apna extension diya.', ex2: 'Sie haben die Durchwahl geändert.', ex2En: 'They\'ve changed the extension.', ex2Hi: 'Unhone extension badla hai.' },
    { de: 'eingrenzen', pos: 'verb', level: 'B2', register: 'written', en: 'to narrow down, limit', hi: 'सीमित करना', ex: 'Sie grenzte das Thema ein.', exEn: 'She narrowed down the topic.', exHi: 'Usne vishay seemit kiya.', ex2: 'Sie haben die Suche eingegrenzt.', ex2En: 'They\'ve narrowed down the search.', ex2Hi: 'Unhone khoj seemit ki hai.', conj: { praesens: 'grenzt ein', praeteritum: 'grenzte ein', perfekt: 'hat eingegrenzt' } },
    { de: 'entgegenbringen', pos: 'verb', level: 'B2', register: 'written', en: 'to show, extend (towards someone)', hi: 'दिखाना', ex: 'Er brachte ihr großes Vertrauen entgegen.', exEn: 'He showed her great trust.', exHi: 'Usne use bahut bharosa dikhaaya.', ex2: 'Sie haben Respekt entgegengebracht.', ex2En: 'They\'ve shown respect.', ex2Hi: 'Unhone samman dikhaaya hai.', conj: { praesens: 'bringt entgegen', praeteritum: 'brachte entgegen', perfekt: 'hat entgegengebracht' } },
    { de: 'entgegensehen', pos: 'verb', level: 'B2', register: 'written', en: 'to look forward to, await', hi: 'प्रतीक्षा करना', ex: 'Sie sah der Prüfung gelassen entgegen.', exEn: 'She awaited the exam calmly.', exHi: 'Usne pareeksha ka shaant taur se intezaar kiya.', ex2: 'Sie haben dem Ergebnis gespannt entgegengesehen.', ex2En: 'They\'ve eagerly awaited the result.', ex2Hi: 'Unhone parinaam ka betaabi se intezaar kiya hai.', conj: { praesens: 'sieht entgegen', praeteritum: 'sah entgegen', perfekt: 'hat entgegengesehen' } },
    { de: 'Ersatz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'substitute, replacement', hi: 'विकल्प', ex: 'Sie fanden einen Ersatz für das Teil.', exEn: 'They found a replacement for the part.', exHi: 'Unhein hisse ka ek vikalp mila.', ex2: 'Sie haben einen Ersatz organisiert.', ex2En: 'They\'ve organised a replacement.', ex2Hi: 'Unhone ek vikalp intezaam kiya hai.' },
    { de: 'Feedback', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'feedback', hi: 'प्रतिक्रिया', ex: 'Der Coach gab ihr ehrliches Feedback.', exEn: 'The coach gave her honest feedback.', exHi: 'Coach ne use imaandaar feedback diya.', ex2: 'Sie haben positives Feedback erhalten.', ex2En: 'They\'ve received positive feedback.', ex2Hi: 'Unhein saakaaratmak feedback mila hai.' },
    { de: 'festhalten', pos: 'verb', level: 'B2', register: 'both', en: 'to hold on, record', hi: 'नोट करना', ex: 'Ich werde meine Denkpause kurz festhalten.', exEn: 'I will briefly record my thinking pause.', exHi: 'Main apne soch ke break ko thodi der note karunga.', ex2: 'Sie haben die Ergebnisse schriftlich festgehalten.', ex2En: 'They\'ve recorded the results in writing.', ex2Hi: 'Unhone parinaam likhit roop se note kiye hain.', conj: { praesens: 'hält fest', praeteritum: 'hielt fest', perfekt: 'hat festgehalten' } },
    { de: 'Firewall', art: 'die', gender: 'f', plural: 'Firewalls', pos: 'noun', level: 'B2', register: 'written', en: 'firewall', hi: 'फ़ायरवॉल', ex: 'Die Firewall blockierte den Angriff.', exEn: 'The firewall blocked the attack.', exHi: 'Firewall ne hamla roka.', ex2: 'Sie haben die Firewall aktiviert.', ex2En: 'They\'ve activated the firewall.', ex2Hi: 'Unhone firewall chaalu ki hai.' },
    { de: 'freundschaftlich', pos: 'adjective', level: 'B2', register: 'both', en: 'friendly, amicable', hi: 'मैत्रीपूर्ण', ex: 'Sie trafen eine freundschaftliche Vereinbarung.', exEn: 'They reached an amicable agreement.', exHi: 'Unhone ek maitri poorn samjhauta kiya.', ex2: 'Sie haben sich freundschaftlich verabschiedet.', ex2En: 'They\'ve said goodbye in a friendly way.', ex2Hi: 'Unhone maitri poorn taur se vida li hai.' },
    { de: 'Gebirge', art: 'das', gender: 'n', plural: 'Gebirge', pos: 'noun', level: 'B2', register: 'written', en: 'mountains, mountain range', hi: 'पर्वत श्रृंखला', ex: 'Das Gebirge war schneebedeckt.', exEn: 'The mountain range was snow-covered.', exHi: 'Parvat shrinkhala barf se dhaki thi.', ex2: 'Sie haben das Gebirge durchquert.', ex2En: 'They\'ve crossed the mountain range.', ex2Hi: 'Unhone parvat shrinkhala paar ki hai.' },
    { de: 'gleichberechtigt', pos: 'adjective', level: 'B2', register: 'written', en: 'with equal rights, having equal rights', hi: 'समान अधिकार वाला', ex: 'Alle Mitarbeiter sind gleichberechtigt.', exEn: 'All employees have equal rights.', exHi: 'Sabhi karmchaari samaan adhikaar rakhte hain.', ex2: 'Sie haben gleichberechtigt entschieden.', ex2En: 'They\'ve decided with equal rights.', ex2Hi: 'Unhone samaan adhikaar ke saath faisla kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Absatzlogik?',
      body: [ 'Every paragraph should answer ONE main question. A bad paragraph mixes several unrelated ideas; a good paragraph has one clear topic.' ],
      hinglish: 'Har paragraph ko sirf <b>ek</b> sawaal ka jawaab dena chahiye. Bura paragraph woh hota hai jisme kai alag ideas mil jaate hain; achhe paragraph ka ek hi saaf topic hota hai. Goethe B2 ki writing mein structure alag se check hota hai, isliye grammar sahi hone par bhi kharaab structure se marks kat jaate hain.'
    },
    {
      title: 'Struktur eines guten Absatzes',
      body: [ 'The standard B2 paragraph structure: topic sentence → explanation → example → result/conclusion.' ],
      table: {
        head: ['Part', 'Purpose'],
        rows: [
          ['<span class="r-leitsatz">Leitsatz (topic sentence)</span>', 'Introduces the main idea'],
          ['<span class="r-erklaerung">Erklärung (explanation)</span>', 'Develops the idea'],
          ['<span class="r-beispiel">Beispiel (example)</span>', 'Supports the explanation'],
          ['<span class="r-schluss">Schluss (conclusion)</span>', 'Ends the paragraph logically']
        ]
      },
      hinglish: 'B2 ka standard paragraph chaar hisson mein chalta hai: pehle <b>Leitsatz</b> (main baat), phir <b>Erkl\u00e4rung</b> (use samjhaana), phir <b>Beispiel</b> (ek example), aur ant mein <b>Schluss</b>. Har writing task mein yahi order kaam aata hai.'
    },
    {
      title: 'Leitsatz (topic sentence)',
      body: [ 'Every following sentence in the paragraph should support the topic sentence.' ],
      table: {
        head: ['Example topic sentence'],
        rows: [
          ['Viele Unternehmen setzen heute künstliche Intelligenz ein.']
        ]
      },
      hinglish: 'Leitsatz paragraph ki pehli line hoti hai aur wahi poora topic tay kar deti hai. Uske baad ka har sentence usi baat ko support karna chahiye \u2014 agar koi sentence usse nahi judta, to woh kisi doosre paragraph ka hai.'
    },
    {
      title: 'Unterstützende Details',
      body: [ 'Ways to develop a paragraph: explanation, example, reason, result, experience, evidence. Everything must relate to the topic sentence.' ],
      hinglish: 'Paragraph ko aage badhane ke kai tareeke hain \u2014 explanation, example, reason, result, apna experience, ya koi data. Kaunsa use karoge yeh topic par depend karta hai, par sab kuch Leitsatz se juda hona chahiye.'
    },
    {
      title: 'Logische Reihenfolge',
      body: [ 'Random sentence order weakens a text. Use a logical sequence.' ],
      table: {
        head: ['Pattern', 'Order'],
        rows: [
          ['Problem-Solution', 'Problem → Reason → Solution → Result'],
          ['Opinion', 'General idea → Explanation → Example → Conclusion']
        ]
      },
      hinglish: 'Sentences ka order random ho to text kamzor lagta hai. Do patterns aksar kaam aate hain \u2014 problem wale topic mein: problem \u2192 reason \u2192 solution \u2192 result, aur opinion wale mein: general baat \u2192 explanation \u2192 example \u2192 conclusion.'
    },
    {
      title: 'Absatzübergänge (paragraph transitions)',
      body: [ 'Paragraphs should connect logically using transition words — these connect paragraphs, not just sentences.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Außerdem ...', 'Furthermore ...'],
          ['Darüber hinaus ...', 'Moreover ...'],
          ['Im Gegensatz dazu ...', 'In contrast to that ...'],
          ['Ein weiterer Aspekt ist ...', 'Another aspect is ...'],
          ['Abschließend ...', 'In conclusion ...']
        ]
      },
      hinglish: 'Paragraphs ko bhi aapas mein jodna padta hai, sirf sentences ko nahi. Naya paragraph transition word se shuru karo \u2014 agar wahi baat aage badh rahi hai to <b>Au\u00dferdem</b> ya <b>Dar\u00fcber hinaus</b>, agar ulti baat aa rahi hai to <b>Im Gegensatz dazu</b>, aur ant mein <b>Abschlie\u00dfend</b>.'
    },
    {
      title: 'Register',
      body: [ 'Absatzlogik is essential in Goethe B2 Writing, reports, presentations, scientific writing, university assignments, business communication, formal emails, and newspaper articles.' ],
      hinglish: 'Absatzlogik har formal writing mein zaroori hai \u2014 Goethe B2 ki writing, reports, presentations, university assignments aur business emails mein. Bolchaal mein itni strict structure ki zaroorat nahi hoti.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These structural mistakes weaken even grammatically correct writing \u2014 in the Goethe B2 Writing task, structure is marked separately from grammar.' ],
      mistakes: [
        { wrong: 'Viele Unternehmen setzen KI ein. Das Wetter war gestern schön. KI spart Zeit.', right: 'Viele Unternehmen setzen KI ein. Sie spart Zeit und senkt die Kosten.', why: 'Every sentence in a paragraph must support the Leitsatz. The weather sentence belongs to no idea in this paragraph at all.' },
        { wrong: 'KI spart Zeit. Außerdem ist Datenschutz ein großes Problem.', right: 'KI spart Zeit. \u2014 [neuer Absatz] \u2014 Ein weiterer Aspekt ist der Datenschutz.', why: 'Benefits and problems are two different ideas, so they need two paragraphs \u2014 and "Au\u00dferdem" wrongly signals that the same idea continues.' },
        { wrong: 'Zum Beispiel nutzt Siemens KI in der Produktion. Viele Unternehmen setzen KI ein.', right: 'Viele Unternehmen setzen KI ein. Zum Beispiel nutzt Siemens KI in der Produktion.', why: 'The Leitsatz comes first. An example opening a paragraph leaves the reader with nothing to attach it to.' },
        { wrong: 'Deshalb ist KI sinnvoll. Sie spart Zeit und senkt die Kosten.', right: 'KI spart Zeit und senkt die Kosten. Deshalb ist ihr Einsatz sinnvoll.', why: '"Deshalb" points back to a reason, so the reason has to come first \u2014 otherwise the conclusion refers to nothing.' },
        { wrong: '[Absatz 1: Vorteile] Der Datenschutz bleibt jedoch ein Problem.', right: '[Absatz 1: Vorteile] Im Gegensatz dazu bleibt der Datenschutz ein Problem.', why: 'A new paragraph that switches direction needs a transition at the start. Without it the reader cannot tell whether you are still listing advantages.' }
      ],
      hinglish: 'Yeh galtiyan structure ki hain, grammar ki nahi \u2014 aur yahi wajah hai ki grammar bilkul sahi hone par bhi text kamzor lag sakta hai. Goethe B2 mein structure ke apne marks hote hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Starting a new paragraph? Ask: "What is my ONE main idea?" Write the topic sentence, support it, give an example, finish naturally. Start a NEW paragraph for a NEW idea.' ],
      note: 'Memory trick: think of every paragraph as a small sandwich. Top bread = topic sentence. Middle = explanation + example. Bottom bread = conclusion. If a sentence doesn\'t support the topic, it belongs in another paragraph.',
      hinglish: 'Naya paragraph shuru karne se pehle khud se poochho \u2014 meri <b>ek</b> main baat kya hai? Usko Leitsatz banao, phir support karo, ek example do, aur naturally khatam karo. Nayi baat aaye to naya paragraph shuru karo.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Techblog: Datenschutz im Browser einfach erklärt',
    titleEn: 'Tech blog: browser privacy explained simply',
    tokens: [
      { w: 'Datenschutz', role: 'plain', en: 'data privacy', hi: 'डेटा सुरक्षा', type: 'Noun · masc.', why: 'der Datenschutz (this chapter).' },
      { w: 'beginnt', role: 'plain', en: 'begins', hi: 'शुरू होता है', type: 'Verb · beginnen' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Browser', role: 'plain', en: 'browser (Satzende)', hi: 'ब्राउज़र (Satzende)', type: 'Noun · masc.', why: 'der Browser (this chapter).' },
      { w: '.', plain: true },
      { w: 'Zunächst', role: 'r-connector', en: 'first (Absatzlogik: Einleitung)', hi: 'सबसे पहले (अनुच्छेद तर्क: परिचय)', type: 'Adverb (Textgliederung, erster Schritt)', why: 'zunächst opens the logical sequence of a paragraph — signalling the first step before others follow (this chapter).' },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Cookie-Einstellungen', role: 'plain', en: 'cookie settings (Satzende)', hi: 'कुकी सेटिंग्स (Satzende)', type: 'Noun · plural' },
      { w: 'prüfen', role: 'plain', en: 'check (Satzende)', hi: 'जाँचना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Anschließend', role: 'r-connector', en: 'subsequently (Absatzlogik: zweiter Schritt)', hi: 'उसके बाद (अनुच्छेद तर्क: दूसरा चरण)', type: 'Adverb (Textgliederung, zweiter Schritt)', why: 'anschließend logically follows zunächst, marking the second step in the paragraph\'s structure (this chapter).' },
      { w: 'empfiehlt', role: 'plain', en: 'recommends', hi: 'सुझाव देता है', type: 'Verb · empfehlen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article · Nom.' },
      { w: 'Werbeblocker', role: 'plain', en: 'ad blocker (Satzende)', hi: 'विज्ञापन अवरोधक (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Nutzer', role: 'plain', en: 'users', hi: 'उपयोगकर्ता', type: 'Noun · plural' },
      { w: 'können', role: 'plain', en: 'can', hi: 'सकते हैं', type: 'Verb · Modalverb' },
      { w: 'zudem', role: 'plain', en: 'furthermore', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'jederzeit', role: 'plain', en: 'at any time', hi: 'किसी भी समय', type: 'Adverb' },
      { w: 'Feedback', role: 'plain', en: 'feedback (Satzende)', hi: 'फ़ीडबैक (Satzende)', type: 'Noun · neut.', why: 'das Feedback (this chapter).' },
      { w: 'an', role: 'plain', en: 'to', hi: 'को', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Anbieter', role: 'plain', en: 'provider (Satzende)', hi: 'प्रदाता (Satzende)', type: 'Noun · masc.' },
      { w: 'senden', role: 'plain', en: 'send (Satzende)', hi: 'भेजना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Abschließend', role: 'r-connector', en: 'in conclusion (Absatzlogik: letzter Schritt)', hi: 'अंत में (अनुच्छेद तर्क: अंतिम चरण)', type: 'Adverb (Textgliederung, letzter Schritt)', why: 'abschließend closes the logical chain begun by zunächst and anschließend — the paragraph\'s clear beginning-middle-end structure (this chapter).' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: 'festzuhalten', role: 'plain', en: 'to be noted (Satzende)', hi: 'ध्यान देने योग्य (Satzende)', type: 'Verb · festhalten (Infinitiv, Satzende)' },
      { w: ':', plain: true },
      { w: 'Datenschutz', role: 'plain', en: 'data privacy', hi: 'डेटा सुरक्षा', type: 'Noun · masc.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'keine', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'einmalige', role: 'plain', en: 'one-time', hi: 'एक बार का', type: 'Adjective' },
      { w: 'Aufgabe', role: 'plain', en: 'task (Satzende)', hi: 'कार्य (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'diese', role: 'r-connector', en: 'these', hi: 'ये', type: 'Determiner · Verweiswort', why: 'diese Schritte refers back to all the steps listed in the paragraph above — this is what gives the paragraph its logic (this chapter).' },
      { w: 'Schritte', role: 'plain', en: 'steps', hi: 'क़दम', type: 'Noun · plural' },
      { w: 'befolgt', role: 'plain', en: 'follows (Satzende)', hi: 'का पालन करता है (Satzende)', type: 'Verb · befolgen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'schützt', role: 'plain', en: 'protects', hi: 'सुरक्षित करता है', type: 'Verb · schützen' },
      { w: 'seine', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Daten', role: 'plain', en: 'data', hi: 'डेटा', type: 'Noun · plural' },
      { w: 'also', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'wirksamer', role: 'plain', en: 'more effectively (Satzende)', hi: 'अधिक प्रभावी ढंग से (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true },
      { w: 'Zusätzlich', role: 'plain', en: 'additionally', hi: 'इसके अतिरिक्त', type: 'Adverb' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'Passwörter', role: 'plain', en: 'passwords', hi: 'पासवर्ड', type: 'Noun · plural' },
      { w: 'regelmäßig', role: 'plain', en: 'regularly', hi: 'नियमित रूप से', type: 'Adverb' },
      { w: 'geändert', role: 'plain', en: 'changed (Satzende)', hi: 'बदला जाना (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true }
    ],
    translation: 'Data privacy already begins in the browser. First, one should check the cookie settings. Subsequently, an ad blocker is recommended. Users can furthermore send feedback to the provider at any time. In conclusion, it must be noted: data privacy is not a one-time task. Whoever follows these steps protects their data noticeably more effectively. Additionally, passwords should be changed regularly.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_058_L001', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, kannst du mal über mein Anschreiben schauen? Ich weiß nicht, wo ich anfangen soll.', en: 'Timo, can you look over my cover letter? I don\'t know where to start.' },
      { id: 'B2_058_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Am besten stellst du dich zuerst kurz vor, dann begründest du deine Motivation.', en: 'Best to first introduce yourself briefly, then justify your motivation.' },
      { id: 'B2_058_L003', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und danach?', en: 'And after that?' },
      { id: 'B2_058_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann fasst du am Ende alles noch mal knapp zusammen — ein Absatz, eine Idee, das reicht.', en: 'Then at the end you summarize everything briefly once more — one paragraph, one idea, that\'s enough.' }
    ],
    transcript: 'Timo, kannst du mal über mein Anschreiben schauen? Ich weiß nicht, wo ich anfangen soll. Am besten stellst du dich zuerst kurz vor, dann begründest du deine Motivation. Und danach? Dann fasst du am Ende alles noch mal knapp zusammen — ein Absatz, eine Idee, das reicht.',
    translation: 'Timo, can you look over my cover letter? I don\'t know where to start. Best to first introduce yourself briefly, then justify your motivation. And after that? Then at the end you summarize everything briefly once more — one paragraph, one idea, that\'s enough.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'kannst' },
      { w: 'du' },
      { w: 'mal' },
      { w: 'über' },
      { w: 'mein' },
      { w: 'Anschreiben' },
      { w: 'schauen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'ich' },
      { w: 'anfangen' },
      { w: 'soll' },
      { w: '.', plain: true },
      { w: 'Am' },
      { w: 'besten' },
      { w: 'stellst' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'zuerst' },
      { w: 'kurz' },
      { w: 'vor' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'begründest' },
      { w: 'du' },
      { w: 'deine' },
      { w: 'Motivation' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'danach' },
      { w: '?', plain: true },
      { w: 'Dann' },
      { w: 'fasst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Ende' },
      { w: 'alles' },
      { w: 'noch' },
      { w: 'mal' },
      { w: 'knapp' },
      { w: 'zusammen' },
      { w: '—', plain: true },
      { w: 'ein' },
      { w: 'Absatz' },
      { w: ',', plain: true },
      { w: 'eine' },
      { w: 'Idee' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'reicht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was soll Anke zuerst machen?', qEn: 'What should Anke do first?', options: ['ihr Gehalt nennen', 'sich kurz vorstellen', 'ihre Motivation begründen', 'zusammenfassen'], optionsEn: ['state her salary', 'introduce himself briefly', 'explain her motivation', 'summarise'], answer: 1,
        explain: '"Am besten stellst du dich zuerst kurz vor."' },
      { q: 'Welche Regel hat Timo für jeden Absatz?', qEn: 'What is Timo\'s rule for each paragraph?', options: ['drei Ideen pro Absatz', 'ein Absatz, eine Idee', 'möglichst lang', 'keine Regel'], optionsEn: ['three ideas per paragraph', 'one paragraph, one idea', 'as long as possible', 'no rule'], answer: 1,
        explain: '"Ein Absatz, eine Idee, das reicht."' }
    ]
  },

  speaking: [
    { task: "Dein Kollege weiß nicht, wo er im Anschreiben anfangen soll. Rate ihm.", taskEn: "Your colleague doesn't know where to start his letter. Advise him.", de: "Stell dich zuerst kurz vor, dann begründe die Bewerbung.", en: "Introduce yourself briefly first, then justify the application." },
    { task: "Er fragt, was in den zweiten Absatz gehört.", taskEn: "He asks what belongs in the second paragraph.", de: "In den zweiten Absatz gehört deine Erfahrung, nicht der Datenschutz.", en: "Your experience belongs in the second paragraph, not data protection." },
    { task: "Trag deine Idee im Meeting strukturiert vor.", taskEn: "Present your idea in the meeting in a structured way.", de: "Wir brauchen einen zweiten Coach. Die Nachfrage steigt seit dem Frühjahr.", en: "We need a second coach. Demand has been rising since spring." },
    { task: "Erklär dem Team das Problem von Ursache bis Ergebnis.", taskEn: "Explain the problem to the team from cause to result.", de: "Der Bestellvorgang ist zu lang. Ursache ist der Browser. Wir stellen ihn um.", en: "The ordering process is too long. The cause is the browser. We're changing it." },
    { task: "Rollenspiel: Ihr plant zusammen einen Text.", taskEn: "Role-play: you plan a text together.", de: "Ein Absatz, ein Gedanke. — Dann kommt der Ersatz erst im nächsten Absatz.", en: "One paragraph, one idea. — Then the replacement only comes in the next paragraph." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Reorganize (6-8 sentences): Take a poorly structured paragraph mixing several ideas and reorganize it into separate, logically ordered paragraphs.\n\nTASK 2 — Discussion essay (8-10 sentences): Write a Goethe B2 discussion essay using clear topic sentences, logical paragraph development, and appropriate transitions (Außerdem, Darüber hinaus, Abschließend).',
    starters: ['Viele Unternehmen ...', 'Ein weiterer Aspekt ist ...'],
    placeholder: 'Viele Unternehmen setzen künstliche Intelligenz ein. Ein Beispiel ist der automatisierte Bestellvorgang. Außerdem sollten wir den Datenschutz erwähnen.',
    minWords: 80
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence is the topic sentence (Leitsatz) of a paragraph about AI in companies?',
      options: ['Viele Unternehmen setzen künstliche Intelligenz ein.', 'Ein Beispiel ist der automatisierte Bestellvorgang.', 'Außerdem sollten wir den Datenschutz erwähnen.'],
      answer: 0,
      explain: 'The topic sentence introduces the ONE main idea that the rest of the paragraph supports.'
    },
    gap: {
      sentence: ['Wir sollten auch den Datenschutz erwähnen, aber das gehört in einen anderen ', '.'],
      gaps: [ { answer: 'Absatz', accepts: ['Absatz'] } ],
      explain: 'A different main idea (data protection) needs its own paragraph — never mix two ideas in one.'
    },
    match: {
      q: 'Match each part of the Standard Paragraph Model to its purpose.',
      pairs: [
        { noun: 'Leitsatz', art: 'Introduces the main idea' },
        { noun: 'Erklärung', art: 'Develops the idea' },
        { noun: 'Beispiel', art: 'Supports the explanation' },
        { noun: 'Schluss', art: 'Ends the paragraph logically' }
      ]
    },
    builder: {
      target: 'Build the topic sentence: "Many companies use artificial intelligence."',
      bank: ['Viele', 'Unternehmen', 'setzen', 'künstliche', 'Intelligenz', 'ein', '.'],
      answer: ['Viele', 'Unternehmen', 'setzen', 'künstliche', 'Intelligenz', 'ein', '.'],
      roles: { 'Viele': 'r-leitsatz', 'Unternehmen': 'r-leitsatz', 'setzen': 'r-leitsatz', 'künstliche': 'r-leitsatz', 'Intelligenz': 'r-leitsatz', 'ein': 'r-leitsatz' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ein Beispiel ist der Bestellvorgang. Viele Unternehmen setzen künstliche Intelligenz ein.',
      right: 'Viele Unternehmen setzen künstliche Intelligenz ein. Ein Beispiel ist der Bestellvorgang.',
      explain: 'The topic sentence must come FIRST — an example before the topic confuses the reader about what it illustrates.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How many main ideas should a well-structured paragraph contain?', options: ['One', 'Two or three', 'As many as needed'], answer: 0,
      explain: 'One paragraph = one idea — mixing several ideas weakens a paragraph.' },
    { q: 'What is the correct order of a Standard B2 paragraph?', options: ['Topic sentence → explanation → example → conclusion', 'Example → conclusion → topic sentence', 'Conclusion → explanation → topic sentence'], answer: 0,
      explain: 'This is the standard, logical order that makes a paragraph easy to follow.' },
    { q: 'What should you do if a sentence doesn\'t fit the topic sentence?', options: ['Move it to a different paragraph', 'Force it in anyway', 'Delete the topic sentence instead'], answer: 0,
      explain: 'A sentence that doesn\'t support the topic sentence belongs in another paragraph with its own topic.' },
    { q: 'What connects two paragraphs logically?', options: ['A transition word like "Außerdem" or "Abschließend"', 'Repeating the same topic sentence', 'Starting with an example'], answer: 0,
      explain: 'Paragraph-level transitions signal the logical relationship between paragraphs.' },
    { q: 'Is grammar accuracy alone enough for good German writing?', options: ['No — organization (Absatzlogik) matters too', 'Yes, grammar is the only requirement', 'Only for academic writing'], answer: 0,
      explain: 'Good writing requires both correct grammar AND clear paragraph organization.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-leitsatz', html: 'Every paragraph should express ONE central idea: topic sentence (Leitsatz) → explanation (Erklärung) → example (Beispiel) → conclusion (Schluss).' },
    { c: 'r-transition', html: 'If a sentence doesn\'t support the topic sentence, it belongs in a different paragraph — never mix unrelated ideas.' },
    { c: 'r-transitionword', html: 'Paragraphs connect to each other via transition words: Außerdem, Darüber hinaus, Im Gegensatz dazu, Abschließend.' }
  ],
  revisionTips: [
    'Before writing any paragraph, write down its topic sentence first — if you can\'t state one clear idea, don\'t start writing yet.',
    'Scan a paragraph you\'ve written and check: does every sentence support the topic sentence? If not, move or delete it.',
    'Practise adding transition words (Außerdem, Darüber hinaus, Abschließend) between paragraphs in your next essay.'
  ]
};

window.CHAPTER = CHAPTER;
