/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 10
   "Nomen mit Präpositionalobjekt" — fixed noun + preposition
   combinations (Interesse an, Einfluss auf, Verantwortung für,
   Kenntnis von, Angst vor, Suche nach, Unterschied zwischen,
   Umgang mit, Einladung zu, Fähigkeit zu), required cases,
   nominal style. NOT basic noun declension or elementary
   prepositions.
   Dialogue: Antje and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-10-nomen-mit-praepositionalobjekt',
  phase: 'C1 · Kasus & Präpositionen',
  number: 10,
  title: 'Nomen mit Präpositionalobjekt',
  titleEn: 'Nouns with fixed prepositional objects',
  description: 'Don\'t memorize the noun. Memorize the noun + preposition. Interesse an, Einfluss auf, Verantwortung für, Kenntnis von — each is one advanced vocabulary item.',
  xp: 410,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 11, title: 'Goethe Mini 2', titleEn: 'Checkpoint: Chapters 7–10' , href: 'chapter-c1-11-goethe-mini-2.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Noun + preposition is <em>one</em> advanced vocabulary item.',
    intro: 'Revising a research proposal, Antje admits her fear of a difficult conversation and her interest in a solution, while Timo notes the difference between their views isn\'t so big — every noun-preposition pair replacing a wordier verb phrase.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See Interesse an, Einfluss auf, Verantwortung für, Kenntnis von, and Suche nach used correctly in academic style'
    ],
    scene: 'Überarbeitung eines Forschungsantrags',
    femaleSpeakers: ['Antje'],
    dialogue: [
      { speaker: 'Antje', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'Angst', role: 'r-akkusativ', en: 'fear', hi: 'डर', pron: 'ankst', type: 'Noun · fem.', why: 'die Angst vor + Dativ = fear of, fixed noun-preposition pair (this chapter).', ex: 'Ich habe Angst vor dem Gespräch.', exEn: 'I have fear of the conversation.' },
        { w: 'vor', role: 'r-preposition', en: 'of', hi: 'से', pron: 'for', type: 'Preposition (part of Angst vor)' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Gespräch', role: 'r-dativ', en: 'conversation (dat.)', hi: 'बातचीत से', pron: 'ge-SHPRAYKH', type: 'Noun · neut. dat.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc. dat.)', hi: 'हमारे', pron: 'UN-ze-raym', type: 'Possessive · dative' },
        { w: 'Vater', role: 'r-dativ', en: 'father (dat.)', hi: 'पिता के', pron: 'FAH-ter', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'I have fear of the conversation with our father.', hi: 'Mujhe hamaare pita ke saath baatcheet se dar lagta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'großes', role: 'r-akkusativ', en: 'great', hi: 'बहुत', pron: 'GROH-ses', type: 'Adjective' },
        { w: 'Interesse', role: 'r-akkusativ', en: 'interest', hi: 'दिलचस्पी', pron: 'in-te-RE-suh', type: 'Noun · neut.', why: 'das Interesse an + Dativ = interest in, fixed noun-preposition pair (this chapter).', ex: 'Ich habe Interesse an einer Lösung.', exEn: 'I have interest in a solution.' },
        { w: 'an', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition (part of Interesse an)' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Lösung', role: 'r-dativ', en: 'solution (dat.)', hi: 'हल में', pron: 'LÖ-zung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I have great interest in a solution.', hi: 'Mujhe hal mein bahut dilchaspi hai.' },
      { speaker: 'Antje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Suche', role: 'r-subject', en: 'search', hi: 'खोज', pron: 'ZOO-khuh', type: 'Noun · fem.', why: 'die Suche nach + Dativ = search for, fixed noun-preposition pair (this chapter).', ex: 'die Suche nach einer Lösung' },
        { w: 'nach', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'nahkh', type: 'Preposition (part of Suche nach)' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Lösung', role: 'r-dativ', en: 'solution (dat.)', hi: 'हल के लिए', pron: 'LÖ-zung', type: 'Noun · fem. dat.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'wichtig', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes. The search for a solution is important.', hi: 'Haan. Hal ki khoj zaroori hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Unterschied', role: 'r-subject', en: 'difference', hi: 'अंतर', pron: 'UN-ter-sheet', type: 'Noun · masc.', why: 'der Unterschied zwischen + Dativ = difference between, fixed noun-preposition pair (this chapter).', ex: 'der Unterschied zwischen euren Ansichten' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition (part of Unterschied zwischen)' },
        { w: 'euren', role: 'r-dativ', en: 'your (pl. dat.)', hi: 'तुम्हारे', pron: 'OY-ren', type: 'Possessive · dative' },
        { w: 'Ansichten', role: 'r-dativ', en: 'views (dat.)', hi: 'विचारों के', pron: 'AN-zikh-ten', type: 'Noun · plural dat.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'vielleicht', role: 'r-akkusativ', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'so', role: 'r-akkusativ', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'groß', role: 'r-akkusativ', en: 'big', hi: 'बड़ा', pron: 'grohs', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The difference between your views is maybe not so big.', hi: 'Tumhaare vichaaron ke beech ka antar shaayad itna bada nahi hai.' },
      { speaker: 'Antje', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Umgang', role: 'r-subject', en: 'way of dealing', hi: 'व्यवहार', pron: 'UM-gang', type: 'Noun · masc.', why: 'der Umgang mit + Dativ = the way of dealing with, fixed noun-preposition pair (this chapter).', ex: 'der Umgang mit seinen Gefühlen' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition (part of Umgang mit)' },
        { w: 'seinen', role: 'r-dativ', en: 'his (pl. dat.)', hi: 'अपनी', pron: 'ZY-nen', type: 'Possessive · dative' },
        { w: 'Gefühlen', role: 'r-dativ', en: 'feelings (dat.)', hi: 'भावनाओं के', pron: 'ge-FÜ-len', type: 'Noun · plural dat.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'schwierig', role: 'r-akkusativ', en: 'difficult', hi: 'मुश्किल', pron: 'SHVEE-rikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The way of dealing with his feelings was always difficult.', hi: 'Uski bhaavnaon ke saath vyavhaar hamesha mushkil tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसे', pron: 'air', type: 'Pronoun · subject' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Einladung', role: 'r-akkusativ', en: 'invitation', hi: 'आमंत्रण', pron: 'INE-lah-dung', type: 'Noun · fem.', why: 'die Einladung zu + Dativ = invitation to, fixed noun-preposition pair (this chapter).', ex: 'eine Einladung zu einem Gespräch' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of Einladung zu)' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'ehrlichen', role: 'r-dativ', en: 'honest', hi: 'ईमानदार', pron: 'AIR-li-khen', type: 'Adjective · dative' },
        { w: 'Gespräch', role: 'r-dativ', en: 'conversation (dat.)', hi: 'बातचीत के लिए', pron: 'ge-SHPRAYKH', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Maybe he simply needs an invitation to an honest conversation.', hi: 'Shayad use bas ek imaandaar baatcheet ke liye aamantran ki zaroorat hai.' },
      { speaker: 'Antje', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करती हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'That is true. I will still call him today.', hi: 'Yeh sahi hai. Main aaj hi use call karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Don\'t memorize the noun. Memorize <b>the noun + preposition</b>. <span class="de r-an">Interesse an</span>, <span class="de r-auf">Einfluss auf</span>, <span class="de r-fuer">Verantwortung für</span>, <span class="de r-von">Kenntnis von</span> — each is <b>one</b> advanced vocabulary item.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NOMEN MIT PRÄPOSITIONALOBJEKT at C1 level — fixed noun + preposition combinations, NOT basic noun declension or elementary prepositions (already mastered). Covered combinations by preposition: "an" (Interesse an, Anteil an, Freude an, Kritik an, Zweifel an, Mangel an, Teilnahme an — Dativ); "auf" (Einfluss auf, Anspruch auf, Verzicht auf, Antwort auf, Reaktion auf, Hinweis auf, Rücksicht auf — Akkusativ); "für" (Verantwortung für, Verständnis für, Voraussetzung für — Akkusativ; note regional/non-standard "Interesse für" and contrast "Bereitschaft für" vs correct "Bereitschaft zu"); "von" (Kenntnis von, Befreiung von, Abhängigkeit von, Überzeugung von, Trennung von — Dativ); others (Angst vor, Respekt vor, Einladung zu, Fähigkeit zu, Recht auf, Möglichkeit zu, Suche nach, Nachfrage nach, Entscheidung über, Unterschied zwischen, Beziehung zu, Umgang mit). Nominal style: replacing verb-based expressions ("wir interessieren uns für") with noun-preposition constructions ("unser Interesse an") for more formal/academic register. ' +
    'Do NOT expect or require basic noun declension or elementary preposition explanations — this chapter assumes those are mastered; do not flag their absence. The most important thing to catch: wrong preposition paired with a fixed noun (Interesse für instead of Interesse an; Einfluss zu instead of Einfluss auf; Antwort für instead of Antwort auf; Angst von instead of Angst vor; Fähigkeit für instead of Fähigkeit zu; Suche über instead of Suche nach; Unterschied von instead of Unterschied zwischen) and wrong case after the correct preposition. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag any noun paired with the wrong fixed preposition — these are lexical errors, not stylistic choices.\n' +
    '- Check that the case (Dativ/Akkusativ) following each preposition matches what that specific noun-preposition combination requires.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Nominal style check:</b> one sentence on whether the learner used noun-preposition constructions where a more formal/academic style was called for.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your noun-preposition pairs are automatic and correct. Ready for verbs with prepositional objects at C1 level next.',
    mid: 'Good. Re-read the Master Table of noun-preposition combinations once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: memorize the noun + preposition as one vocabulary item, not two.'
  },

  parserSentence: [
    { w: 'Unser', role: 'plain' }, { w: 'Interesse', role: 'r-an' }, { w: 'an', role: 'r-an' }, { w: 'diesem', role: 'plain' }, { w: 'Thema', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: noun + preposition is one advanced vocabulary item, not two separate words.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Antje and Timo revise a research proposal, replacing verb-based expressions with noun-preposition constructions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key noun-preposition pairs — full popups with two examples, case, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master fixed noun-preposition combinations across an, auf, für, von, and other prepositions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic journal article and a professional report, identifying noun-preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify noun-preposition combinations and meaning in a university lecture and a professional meeting.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss research, present projects, and express opinions using authentic noun-preposition structures.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text with noun-preposition constructions, and write a 350-word academic report in nominal style.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct preposition, required case selection, and nominal style transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 410 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 10 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition selection drills, nominal style transformation, and a full academic report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Nominal Style Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Unser Interesse an diesem Thema ist groß.', text: 'Use "Interesse an + Dativ" in nominal style' },
    { de: 'Der Einfluss auf die Ergebnisse ist entscheidend.', text: 'Use "Einfluss auf + Akkusativ" correctly' },
    { de: 'Ich übernehme die Verantwortung für die Literaturrecherche.', text: 'Use "Verantwortung für + Akkusativ" correctly' },
    { de: 'Ich habe gute Kenntnis von statistischen Methoden.', text: 'Use "Kenntnis von + Dativ" correctly' },
    { de: 'Der Unterschied zwischen beiden Gruppen ist signifikant.', text: 'Use "Unterschied zwischen + Dativ" in academic comparison' }
  ],

  vocab: [
    { de: 'Interesse an', art: 'das', gender: 'n', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'interest in', hi: 'में रुचि', ex: 'Unser Interesse an diesem Thema ist groß.', exEn: 'Our interest in this topic is great.', exHi: 'Iss vishay mein hamaari ruchi bahut hai.', ex2: 'Sie zeigt großes Interesse an der Forschung.', ex2En: 'She shows great interest in the research.', ex2Hi: 'Woh shodh mein bahut ruchi dikhaati hai.' },
    { de: 'Einfluss auf', art: 'der', gender: 'm', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Akkusativ', en: 'influence on', hi: 'पर प्रभाव', ex: 'Der Einfluss auf die Ergebnisse ist entscheidend.', exEn: 'The influence on the results is decisive.', exHi: 'Parinaamon par prabhaav nirnaayak hai.', ex2: 'Die Studie hat großen Einfluss auf die Politik.', ex2En: 'The study has great influence on policy.', ex2Hi: 'Adhyayan ka niti par bada prabhaav hai.' },
    { de: 'Verantwortung für', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'both', requiredCase: 'Akkusativ', en: 'responsibility for', hi: 'के लिए जिम्मेदारी', ex: 'Ich übernehme die Verantwortung für die Literaturrecherche.', exEn: 'I take on responsibility for the literature research.', exHi: 'Main sahitya khoj ki zimmedaari sambhaalta hoon.', ex2: 'Sie trägt die Verantwortung für das Projekt.', ex2En: 'She bears responsibility for the project.', ex2Hi: 'Woh project ki zimmedaari uthaati hai.' },
    { de: 'Kenntnis von', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'knowledge of', hi: 'की जानकारी', ex: 'Ich habe gute Kenntnis von statistischen Methoden.', exEn: 'I have good knowledge of statistical methods.', exHi: 'Mujhe sankhyaki vidhiyon ki achhi jaankaari hai.', ex2: 'Sie hat Kenntnis von den neuesten Entwicklungen.', ex2En: 'She has knowledge of the latest developments.', ex2Hi: 'Use naveentam vikaason ki jaankaari hai.' },
    { de: 'Angst vor', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'fear of', hi: 'का डर', ex: 'Meine einzige Angst ist die Angst vor der Deadline.', exEn: 'My only fear is the fear of the deadline.', exHi: 'Mera ek hi dar deadline ka dar hai.', ex2: 'Er hat keine Angst vor Herausforderungen.', ex2En: 'He has no fear of challenges.', ex2Hi: 'Use chunautiyon ka dar nahi hai.' },
    { de: 'Suche nach', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'search for', hi: 'की खोज', ex: 'Unsere Suche nach zusätzlichen Daten ist fast abgeschlossen.', exEn: 'Our search for additional data is almost complete.', exHi: 'Atirikt data ki hamaari khoj lagbhag poori hai.', ex2: 'Die Suche nach einer Lösung dauert an.', ex2En: 'The search for a solution continues.', ex2Hi: 'Solution ki khoj jaari hai.' },
    { de: 'Unterschied zwischen', art: 'der', gender: 'm', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'difference between', hi: 'के बीच का अंतर', ex: 'Der Unterschied zwischen beiden Gruppen ist signifikant.', exEn: 'The difference between the two groups is significant.', exHi: 'Donon groups ke beech ka antar mahatvapurn hai.', ex2: 'Es gibt einen klaren Unterschied zwischen Theorie und Praxis.', ex2En: 'There is a clear difference between theory and practice.', ex2Hi: 'Siddhaant aur vyavahaar ke beech spasht antar hai.' },
    { de: 'Umgang mit', art: 'der', gender: 'm', pos: 'noun + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'handling of, dealing with', hi: 'के साथ व्यवहार', ex: 'Der Umgang mit Kritik erfordert Übung.', exEn: 'Dealing with criticism requires practice.', exHi: 'Aalochana ke saath vyavahaar ke liye practice chahiye.', ex2: 'Sie hat viel Erfahrung im Umgang mit Kunden.', ex2En: 'She has a lot of experience dealing with customers.', ex2Hi: 'Use graahakon ke saath vyavahaar ka bahut anubhav hai.' },
    { de: 'Einladung zu', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'invitation to', hi: 'का निमंत्रण', ex: 'Wir haben eine Einladung zu der Konferenz erhalten.', exEn: 'We received an invitation to the conference.', exHi: 'Hamein sammelan ka nimantran mila.', ex2: 'Die Einladung zum Vortrag kam gestern an.', ex2En: 'The invitation to the talk arrived yesterday.', ex2Hi: 'Vyaakhyaan ka nimantran kal aaya.' },
    { de: 'Fähigkeit zu', art: 'die', gender: 'f', pos: 'noun + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'ability to', hi: 'की क्षमता', ex: 'Die Fähigkeit zu klarer Kommunikation ist wichtig.', exEn: 'The ability for clear communication is important.', exHi: 'Spasht sanchaar ki kshamataa mahatvapurn hai.', ex2: 'Er zeigt große Fähigkeit zu selbstständigem Arbeiten.', ex2En: 'He shows great ability for independent work.', ex2Hi: 'Woh svatantra kaam ki badi kshamataa dikhaata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Nomen + Präposition zählt',
      body: [ 'Simple noun → Correct noun → Native-like noun + preposition combination. These combinations are fixed lexical patterns in German, not derivable from a rule alone.' ],
      hinglish: 'Yeh jodiyan fixed hoti hain \u2014 inhe rule se nikaala nahi jaa sakta. Isliye noun akela mat yaad karo, hamesha uske preposition aur case ke saath: <b>Interesse an + Dativ</b>. Achhi baat yeh hai ki zyada-tar noun apne verb ka preposition hi rakhta hai, jo neeche dekhoge.'
    },
    {
      title: 'Nomen mit "an" (mostly Dativ)',
      body: [ 'Interesse an, Anteil an, Freude an, Kritik an, Zweifel an, Mangel an, Teilnahme an — each with distinct meaning, register, and collocations.' ],
      hinglish: '<b>an</b> wale nouns Dativ lete hain: <b>Interesse an</b>, <b>Anteil an</b>, <b>Freude an</b>, <b>Kritik an</b>, <b>Zweifel an</b>, <b>Mangel an</b> aur <b>Teilnahme an</b>. Dhyaan do ki inme se kai academic writing ke kaam ke shabd hain \u2014 <b>Kritik an</b> aur <b>Mangel an</b> khaas kar.'
    },
    {
      title: 'Nomen mit "auf" (Akkusativ)',
      body: [ '<b>auf</b> wale nouns Akkusativ lete hain \u2014 <b>Einfluss auf</b>, <b>Anspruch auf</b>, <b>Antwort auf</b>, <b>Reaktion auf</b>, <b>Hinweis auf</b>. Yahan case ka dhyaan rakho, kyunki <i>an</i> aur <i>auf</i> ek jaise lagte hain par case alag hai: <i>an</i> Dativ, <i>auf</i> Akkusativ.' ],
      hinglish: '<b>auf</b> wale nouns Akkusativ lete hain \u2014 <b>Einfluss auf</b>, <b>Anspruch auf</b>, <b>Antwort auf</b>, <b>Reaktion auf</b>, <b>Hinweis auf</b>. Yahan case ka dhyaan rakho, kyunki <i>an</i> aur <i>auf</i> ek jaise lagte hain par case alag hai: <i>an</i> Dativ, <i>auf</i> Akkusativ.'
    },
    {
      title: 'Nomen mit "für" (Akkusativ)',
      body: [ 'Verantwortung für, Verständnis für, Voraussetzung für. Note: "Interesse für" is regional/limited usage — "Interesse an" is standard. Contrast "Bereitschaft zu" (standard) with the less common "Bereitschaft für".' ],
      hinglish: 'Verantwortung für, Verständnis für, Voraussetzung für. Dhyaan dein: "Interesse für" regional/limited usage hai — "Interesse an" standard hai. "Bereitschaft zu" (standard) ko "Bereitschaft für" (kam common) se compare karein.'
    },
    {
      title: 'Nomen mit "von" (Dativ)',
      body: [ '<b>von</b> wale nouns Dativ lete hain: <b>Kenntnis von</b>, <b>Abh\u00e4ngigkeit von</b>, <b>\u00dcberzeugung von</b>, <b>Trennung von</b>, <b>Befreiung von</b>. Yeh sab apne verbs se aaye hain, isliye inhe alag se ratna nahi padta.' ],
      hinglish: '<b>von</b> wale nouns Dativ lete hain: <b>Kenntnis von</b>, <b>Abh\u00e4ngigkeit von</b>, <b>\u00dcberzeugung von</b>, <b>Trennung von</b>, <b>Befreiung von</b>. Yeh sab apne verbs se aaye hain, isliye inhe alag se ratna nahi padta.'
    },
    {
      title: 'Nomen mit anderen Präpositionen',
      body: [ 'Baaki prepositions bhi aate hain: <b>Angst vor</b> aur <b>Respekt vor</b> (Dativ), <b>Einladung zu</b>, <b>F\u00e4higkeit zu</b> aur <b>M\u00f6glichkeit zu</b> (Dativ), <b>Suche nach</b> aur <b>Nachfrage nach</b> (Dativ), <b>Entscheidung \u00fcber</b> (Akkusativ), <b>Unterschied zwischen</b> aur <b>Umgang mit</b> (Dativ).' ],
      hinglish: 'Baaki prepositions bhi aate hain: <b>Angst vor</b> aur <b>Respekt vor</b> (Dativ), <b>Einladung zu</b>, <b>F\u00e4higkeit zu</b> aur <b>M\u00f6glichkeit zu</b> (Dativ), <b>Suche nach</b> aur <b>Nachfrage nach</b> (Dativ), <b>Entscheidung \u00fcber</b> (Akkusativ), <b>Unterschied zwischen</b> aur <b>Umgang mit</b> (Dativ).'
    },
    {
      title: 'Bedeutungsunterschiede',
      body: [ 'Interesse an (interest) → Freude an (joy) → Neugier auf (curiosity) → Begeisterung für (enthusiasm) → Kenntnis von (knowledge) — subtle semantic differences that determine which preposition is correct.' ],
      hinglish: 'Yeh paanch milte-julte lagte hain par har ek ka apna matlab aur apna preposition hai \u2014 <b>Interesse an</b> (dilchaspi), <b>Freude an</b> (khushi), <b>Neugier auf</b> (utsukta), <b>Begeisterung f\u00fcr</b> (josh), <b>Kenntnis von</b> (jaankaari). Pehle matlab tay karo, phir jodi chuno.'
    },
    {
      title: 'Die Pr\u00e4position kommt meist vom Verb',
      body: [
        'Here is the shortcut that saves most of the memorising: a noun usually keeps the preposition of the verb it comes from. If you know the verb pairing, you already know the noun pairing.',
        'A few do not follow \u2014 those are the ones worth learning separately.'
      ],
      table: {
        head: ['Verb', 'Noun', 'Same?'],
        rows: [
          ['teilnehmen <b>an</b>', 'die Teilnahme <b>an</b>', 'yes'],
          ['abh\u00e4ngen <b>von</b>', 'die Abh\u00e4ngigkeit <b>von</b>', 'yes'],
          ['sich sehnen <b>nach</b>', 'die Sehnsucht <b>nach</b>', 'yes'],
          ['antworten <b>auf</b>', 'die Antwort <b>auf</b>', 'yes'],
          ['sich interessieren <b>f\u00fcr</b>', 'das Interesse <b>an</b>', '<b>no</b> \u2014 the preposition changes'],
          ['sich freuen <b>auf/\u00fcber</b>', 'die Freude <b>an</b>', '<b>no</b>']
        ]
      },
      note: 'To refer back to a thing, these nouns use the <b>da(r)-</b> forms as well: <span class="de">Ich habe kein Interesse <b>daran</b>.</span> \u2014 <span class="de">Die Angst <b>davor</b> ist gro\u00df.</span>',
      hinglish: 'Yahan ek shortcut hai jo aadha kaam bacha deta hai \u2014 noun aksar wahi preposition rakhta hai jo uske verb ka hai. <span class="de">teilnehmen an</span> se <span class="de">die Teilnahme an</span>, <span class="de">abh\u00e4ngen von</span> se <span class="de">die Abh\u00e4ngigkeit von</span>. Matlab verb wali jodi pata ho to noun wali apne aap aa jaati hai. Par kuch exceptions hain, aur wahi alag se yaad karne layak hain \u2014 sabse important <span class="de">sich interessieren <b>f\u00fcr</b></span> par <span class="de">das Interesse <b>an</b></span>. Aur kisi cheez ki taraf ishara karna ho to yeh nouns bhi <b>da(r)-</b> form lete hain: <span class="de">Ich habe kein Interesse daran.</span>'
    },
    {
      title: 'Nominalstil (Nominal Style)',
      body: [ 'Verb → Verb + Object → Noun + Preposition → Academic Nominal Style. Replacing "wir interessieren uns für" with "unser Interesse an" makes writing more formal and academic.' ],
      hinglish: 'Yeh jodiyan Nominalstil ki reedh hain. <span class="de">Wir interessieren uns f\u00fcr das Thema</span> ko <span class="de">unser Interesse an dem Thema</span> bana do, aur text turant formal lagne lagta hai. Dhyaan do ki yahan preposition bhi badal gaya \u2014 verb <i>f\u00fcr</i> leta hai par noun <i>an</i>.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'A quick-reference table of noun, preposition, and required case.' ],
      table: {
        head: ['Noun', 'Preposition', 'Case'],
        rows: [
          ['Interesse', 'an', 'Dativ'],
          ['Einfluss', 'auf', 'Akkusativ'],
          ['Anspruch', 'auf', 'Akkusativ'],
          ['Verantwortung', 'für', 'Akkusativ'],
          ['Verständnis', 'für', 'Akkusativ'],
          ['Kenntnis', 'von', 'Dativ'],
          ['Angst', 'vor', 'Dativ'],
          ['Suche', 'nach', 'Dativ'],
          ['Unterschied', 'zwischen', 'Dativ'],
          ['Umgang', 'mit', 'Dativ'],
          ['Einladung', 'zu', 'Dativ'],
          ['Fähigkeit', 'zu', 'Dativ']
        ]
      },
      hinglish: 'Noun, preposition aur case ka table \u2014 ise jodi ki tarah padho. Pattern wahi hai jo adjectives mein tha: <b>auf</b>, <b>f\u00fcr</b>, <b>\u00fcber</b> Akkusativ lete hain, aur <b>an</b>, <b>von</b>, <b>zu</b>, <b>nach</b>, <b>mit</b>, <b>vor</b>, <b>zwischen</b> Dativ.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Most come straight from English \u2014 \u201canswer to\u201d, \u201cafraid of\u201d, \u201cdifference of\u201d. Watch the article endings too: a wrong preposition usually drags the wrong case along with it.' ],
      mistakes: [
        { wrong: 'Sein Interesse für dem Thema war groß.', right: 'Sein Interesse an dem Thema war groß.', why: 'Standard German is <b>Interesse an</b> + Dativ. Note the case too \u2014 <i>f\u00fcr</i> would demand the Akkusativ, so the ending gives the error away.' },
        { wrong: 'Der Einfluss zu der Entscheidung war gering.', right: 'Der Einfluss auf die Entscheidung war gering.', why: '<b>Einfluss</b> takes <b>auf</b> + Akkusativ \u2014 so <i>die Entscheidung</i>, not <i>der</i>.' },
        { wrong: 'Die Antwort für diese Frage fehlt.', right: 'Die Antwort auf diese Frage fehlt.', why: '<b>Antwort</b> takes <b>auf</b> + Akkusativ. English \u201canswer to\u201d misleads here.' },
        { wrong: 'Er hat Angst von der Prüfung.', right: 'Er hat Angst vor der Prüfung.', why: '<b>Angst</b> takes <b>vor</b> + Dativ. <i>vor</i> and <i>von</i> look close but only <i>vor</i> works here.' },
        { wrong: 'Die Fähigkeit für schnelles Lernen ist wichtig.', right: 'Die Fähigkeit zum schnellen Lernen ist wichtig.', why: '<b>F\u00e4higkeit</b> takes <b>zu</b> + Dativ, and before a nominalised verb that becomes <b>zum</b>.' },
        { wrong: 'Die Suche über einer Lösung dauert an.', right: 'Die Suche nach einer Lösung dauert an.', why: '<b>Suche</b> takes <b>nach</b> + Dativ \u2014 the same preposition as the verb <i>suchen nach</i>.' },
        { wrong: 'Der Unterschied von beiden Methoden ist klein.', right: 'Der Unterschied zwischen beiden Methoden ist klein.', why: 'When two things are compared, <b>Unterschied</b> takes <b>zwischen</b> + Dativ. (<i>Unterschied zu</i> is also possible when comparing one thing TO another.)' }
      ],
      hinglish: 'Zyada-tar galtiyan English se aati hain \u2014 \u201canswer to\u201d, \u201cafraid of\u201d, \u201cdifference of\u201d. Aur article ki ending par bhi nazar rakho: galat preposition apne saath galat case bhi le aata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to express interest? Interesse an. Need influence? Einfluss auf. Need responsibility? Verantwortung für. Need knowledge? Kenntnis von. Need search? Suche nach. Need comparison? Unterschied zwischen. Need ability? Fähigkeit zu.' ],
      note: 'Memory trick: don\'t memorize the noun — memorize the noun + preposition. Think of each combination as one advanced vocabulary item.',
      hinglish: 'Dilchaspi? <b>Interesse an</b>. Asar? <b>Einfluss auf</b>. Zimmedaari? <b>Verantwortung f\u00fcr</b>. Jaankaari? <b>Kenntnis von</b>. Talaash? <b>Suche nach</b>. Tulna? <b>Unterschied zwischen</b>. Kshamta? <b>F\u00e4higkeit zu</b>. Aur agar jodi yaad na aaye, to us noun ka verb socho \u2014 aksar preposition wahi hota hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Uni-Magazin: Der Boom der Nachhaltigkeitsstudiengänge',
    titleEn: 'Reading A — University magazine: the boom in sustainability degree programmes',
    tokens: [
      { w: 'Das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Interesse', role: 'r-an', en: 'interest (fixed noun, "an" + Dativ)', hi: 'रुचि', type: 'Noun · neut.' },
      { w: 'an', role: 'r-an', en: 'in (Dativ, fixed with "Interesse")', hi: 'में (Dativ)', type: 'Präposition · Dat.' },
      { w: 'nachhaltigkeitsbezogenen', role: 'plain', en: 'sustainability-related', hi: 'स्थिरता से जुड़े', type: 'Adjective · Dat.' },
      { w: 'Studiengängen', role: 'plain', en: 'degree programmes (Satzende)', hi: 'कोर्सों में (Satzende)', type: 'Noun · plural' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'बढ़ रही है', type: 'Verb (Präsens)' },
      { w: 'seit', role: 'plain', en: 'since', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'stetig', role: 'plain', en: 'steadily (Satzende)', hi: 'लगातार (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Einfluss', role: 'r-auf', en: 'influence (fixed noun, "auf" + Akkusativ)', hi: 'प्रभाव', type: 'Noun · masc.' },
      { w: 'auf', role: 'r-auf', en: 'on (Akkusativ, fixed with "Einfluss")', hi: 'पर (Akkusativ)', type: 'Präposition · Akk.' },
      { w: 'klassische', role: 'plain', en: 'classic', hi: 'पारंपरिक', type: 'Adjective · Akk.' },
      { w: 'Fächer', role: 'plain', en: 'subjects (Satzende)', hi: 'विषयों (Satzende)', type: 'Noun · plural' },
      { w: 'wie', role: 'plain', en: 'like', hi: 'जैसे', type: 'Konjunktion' },
      { w: 'Betriebswirtschaft', role: 'plain', en: 'business administration (Satzende)', hi: 'व्यवसाय प्रशासन (Satzende)', type: 'Noun · fem.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'deutlich', role: 'plain', en: 'clearly', hi: 'स्पष्ट रूप से', type: 'Adverb' },
      { w: 'spürbar', role: 'plain', en: 'noticeable (Satzende)', hi: 'महसूस होने लगा है (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Immer', role: 'plain', en: '(part of "immer mehr")', hi: '', type: 'Adverb' },
      { w: 'mehr', role: 'plain', en: 'more and more', hi: 'ज़्यादा से ज़्यादा', type: 'Adverb' },
      { w: 'Hochschulen', role: 'plain', en: 'universities', hi: 'विश्वविद्यालय', type: 'Noun · plural' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'दिखा रहे हैं', type: 'Verb (Präsens)' },
      { w: 'Bereitschaft', role: 'r-zu', en: 'willingness (fixed noun, "zu" + Dativ)', hi: 'तत्परता', type: 'Noun · fem.' },
      { w: 'zur', role: 'r-zu', en: 'to (contraction "zu der", fixed with "Bereitschaft")', hi: 'के लिए', type: 'Präposition · Dat.', why: '"Bereitschaft zu + Dativ" is a further fixed noun-preposition pair (this chapter).' },
      { w: 'Reform', role: 'plain', en: 'reform (Satzende)', hi: 'सुधार के लिए (Satzende)', type: 'Noun · fem.' },
      { w: 'ihrer', role: 'plain', en: 'of their', hi: 'अपने', type: 'Possessivartikel · Genitiv' },
      { w: 'traditionellen', role: 'plain', en: 'traditional', hi: 'पारंपरिक', type: 'Adjective · Genitiv' },
      { w: 'Curricula', role: 'plain', en: 'curricula (Satzende)', hi: 'पाठ्यक्रम (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'Interest in sustainability-related degree programmes has been growing steadily for years. The influence on classic subjects like business administration is by now clearly noticeable. More and more universities are showing willingness to reform their traditional curricula.',
    comprehension: [
      { q: 'Welche Präposition passt zu "Interesse"?', options: ['an', 'für', 'von'], answer: 0 },
      { q: 'Welche Präposition passt zu "Einfluss"?', options: ['auf', 'zu', 'mit'], answer: 0 },
      { q: 'Welchen Kasus verlangt "Bereitschaft zu"?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Beruflicher Bericht',
    titleEn: 'Reading B — Professional report',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Verantwortung', role: 'r-fuer', en: 'responsibility (fixed noun, "für" + Akkusativ)', hi: 'zimmedaari (fixed noun, "für" + Akkusativ)', type: 'Noun · fem.' },
      { w: 'für', role: 'r-fuer', en: 'for (Akkusativ, fixed with "Verantwortung")', hi: 'ke liye (Akkusativ, "Verantwortung" ke saath fixed)', type: 'Präposition · Akk.' },
      { w: 'das', role: 'plain', en: 'the (neut. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Projekt', role: 'plain', en: 'project (Satzende)', hi: 'project ki (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'liegt', role: 'plain', en: 'lies', hi: 'hai', type: 'Verb (Präsens)' },
      { w: 'beim', role: 'plain', en: 'with the (Kontraktion)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Team', role: 'plain', en: 'team (Satzende)', hi: 'team ke paas (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Umgang', role: 'r-mit', en: 'handling (fixed noun, "mit" + Dativ)', hi: 'vyavahaar (fixed noun, "mit" + Dativ)', type: 'Noun · masc.' },
      { w: 'mit', role: 'r-mit', en: 'with (Dativ, fixed with "Umgang")', hi: '(Dativ, "Umgang" ke saath fixed)', type: 'Präposition · Dat.' },
      { w: 'Rückschlägen', role: 'plain', en: 'setbacks (Satzende)', hi: 'jhatkon ke saath (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'erfordert', role: 'plain', en: 'requires (Satzende)', hi: 'zaroorat hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: 'Erfahrung', role: 'plain', en: 'experience (Satzende)', hi: 'anubhav ki (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Responsibility for the project lies with the team. Handling setbacks requires experience.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_010_L001', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe wirklich Angst vor dem Gespräch mit unserem Betreuer morgen.', en: 'Timo, I\'m really afraid of the conversation with our supervisor tomorrow.' },
      { id: 'C1_010_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das verstehe ich, aber dein Interesse an einer Lösung ist doch der erste Schritt.', en: 'I understand that, but your interest in a solution is already the first step.' },
      { id: 'C1_010_L003', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht, aber ich habe Zweifel an meiner eigenen Argumentation.', en: 'Maybe, but I have doubts about my own argumentation.' },
      { id: 'C1_010_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Der Unterschied zwischen unseren Ansichten ist eigentlich gar nicht so groß.', en: 'The difference between our views isn\'t really that big.' }
    ],
    transcript: 'Timo, ich habe wirklich Angst vor dem Gespräch mit unserem Betreuer morgen. Das verstehe ich, aber dein Interesse an einer Lösung ist doch der erste Schritt. Vielleicht, aber ich habe Zweifel an meiner eigenen Argumentation. Der Unterschied zwischen unseren Ansichten ist eigentlich gar nicht so groß.',
    translation: 'Timo, I\'m really afraid of the conversation with our supervisor tomorrow. I understand that, but your interest in a solution is already the first step. Maybe, but I have doubts about my own argumentation. The difference between our views isn\'t really that big.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'wirklich' },
      { w: 'Angst' },
      { w: 'vor' },
      { w: 'dem' },
      { w: 'Gespräch' },
      { w: 'mit' },
      { w: 'unserem' },
      { w: 'Betreuer' },
      { w: 'morgen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'verstehe' },
      { w: 'ich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'dein' },
      { w: 'Interesse' },
      { w: 'an' },
      { w: 'einer' },
      { w: 'Lösung' },
      { w: 'ist' },
      { w: 'doch' },
      { w: 'der' },
      { w: 'erste' },
      { w: 'Schritt' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'Zweifel' },
      { w: 'an' },
      { w: 'meiner' },
      { w: 'eigenen' },
      { w: 'Argumentation' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Unterschied' },
      { w: 'zwischen' },
      { w: 'unseren' },
      { w: 'Ansichten' },
      { w: 'ist' },
      { w: 'eigentlich' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'groß' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wovor hat Antje Angst?', qEn: 'What is Antje afraid of?', options: ['der Prüfung', 'dem Gespräch mit dem Betreuer', 'dem Wetter', 'der Reise'], optionsEn: ['the exam', 'the conversation with the supervisor', 'the weather', 'the trip'], answer: 1,
        explain: '"Ich habe wirklich Angst vor dem Gespräch mit unserem Betreuer."' },
      { q: 'Was sagt Timo über ihre Auffassungen?', qEn: 'What does Timo say about their views?', options: ['Sie sind identisch.', 'Der Unterschied ist nicht so groß.', 'Sie widersprechen sich völlig.', 'Es gibt keinen Unterschied.'], optionsEn: ['They are identical.', 'The difference isn\'t that big.', 'They contradict each other completely.', 'There is no difference.'], answer: 1,
        explain: '"Der Unterschied zwischen unseren Ansichten ist eigentlich gar nicht so groß."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo hat Angst vor dem Gespräch mit dem Betreuer. Reagiere.", taskEn: "Timo is afraid of the meeting with the supervisor. Respond.", de: "Das verstehe ich, aber dein Interesse an einer Lösung ist der erste Schritt.", en: "I understand, but your interest in a solution is the first step." },
    { task: "Begründe im Antrag dein wissenschaftliches Interesse.", taskEn: "Justify your academic interest in the proposal.", de: "Mein Interesse an der Versorgungsforschung entstand während des Praktikums.", en: "My interest in health services research arose during my placement." },
    { task: "Die Kommission fragt nach den Zuständigkeiten.", taskEn: "The committee asks about responsibilities.", de: "Die Verantwortung für die Datenpflege liegt beim Institut.", en: "Responsibility for data maintenance lies with the institute." },
    { task: "Stell im Vortrag zwei Verfahren gegenüber.", taskEn: "Contrast two procedures in your talk.", de: "Der Unterschied zwischen den Verfahren liegt im Umgang mit fehlenden Werten.", en: "The difference between the procedures lies in how missing values are handled." },
    { task: "Eine Kollegin fragt, was über die Langzeitfolgen bekannt ist.", taskEn: "A colleague asks what's known about long-term effects.", de: "Die Kenntnis von Langzeitfolgen ist bislang begrenzt.", en: "Knowledge of long-term effects is so far limited." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text using verb-based expressions ("wir interessieren uns für", "wir sind verantwortlich für") and rewrite it using authentic C1 noun-preposition constructions (Interesse an, Verantwortung für, Kenntnis von) in nominal style.\n\nTASK 2 — Academic report (350 words): Write a report using a wide variety of noun-preposition combinations and nominal style naturally.',
    starters: ['Unser Interesse an diesem Thema ist groß.', 'Der Einfluss auf die Ergebnisse ist entscheidend.'],
    placeholder: 'Unser Interesse an diesem Forschungsprojekt ist groß, und wir übernehmen die Verantwortung für die Durchführung...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which preposition correctly completes "Interesse" (standard usage)?',
      options: ['an', 'für', 'über'],
      answer: 0,
      explain: '"Interesse" standardly pairs with "an" + Dativ — "für" is regional/non-standard.'
    },
    gap: {
      sentence: ['Ich übernehme die Verantwortung ', ' die Literaturrecherche.'],
      gaps: [ { answer: 'für', accepts: ['für'] } ],
      explain: '"Verantwortung" always pairs with "für" + Akkusativ.'
    },
    match: {
      q: 'Match each noun to its fixed preposition.',
      pairs: [
        { noun: 'Interesse', art: 'an' },
        { noun: 'Einfluss', art: 'auf' },
        { noun: 'Kenntnis', art: 'von' },
        { noun: 'Angst', art: 'vor' }
      ]
    },
    builder: {
      target: 'Build: "The difference between the two groups is significant." (fixed noun-preposition combination)',
      bank: ['Der', 'Unterschied', 'zwischen', 'beiden', 'Gruppen', 'ist', 'signifikant', '.'],
      answer: ['Der', 'Unterschied', 'zwischen', 'beiden', 'Gruppen', 'ist', 'signifikant', '.'],
      roles: { 'Unterschied': 'r-zwischen', 'zwischen': 'r-zwischen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Meine Angst von der Deadline ist groß.',
      right: 'Meine Angst vor der Deadline ist groß.',
      explain: '"Angst" always pairs with "vor" + Dativ, never "von".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which preposition pairs with "Interesse" (standard)?', options: ['an', 'für', 'über'], answer: 0,
      explain: '"Interesse an + Dativ" is the standard fixed combination.' },
    { q: 'Which preposition pairs with "Einfluss"?', options: ['auf', 'zu', 'von'], answer: 0,
      explain: '"Einfluss auf + Akkusativ" is the fixed combination.' },
    { q: 'Which preposition pairs with "Kenntnis"?', options: ['von', 'für', 'an'], answer: 0,
      explain: '"Kenntnis von + Dativ" is the fixed combination.' },
    { q: 'What case does "Verantwortung für" require?', options: ['Akkusativ', 'Dativ', 'Genitiv'], answer: 0,
      explain: '"Verantwortung für" governs the Akkusativ case.' },
    { q: 'What is the C1 memory trick for these combinations?', options: ['Memorize noun + preposition as one vocabulary item', 'Memorize only the noun', 'Prepositions can be freely chosen'], answer: 0,
      explain: 'These combinations are fixed lexical units — never translate them word-for-word.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-an', html: '"An" combinations (Interesse an, Anteil an, Freude an, Kritik an) mostly take the Dativ.' },
    { c: 'r-auf', html: '"Auf" combinations (Einfluss auf, Anspruch auf, Antwort auf) take the Akkusativ.' },
    { c: 'r-fuer', html: 'Nominal style (Verb → Noun + Preposition) makes writing more formal — "unser Interesse an" is more academic than "wir interessieren uns für".' }
  ],
  revisionTips: [
    'Rewrite ten verb-based sentences into noun-preposition constructions in nominal style.',
    'Create flashcards pairing each noun directly with its preposition (never the noun alone).',
    'Read a German academic report and underline every noun-preposition combination you find, checking the case that follows.'
  ]
};

window.CHAPTER = CHAPTER;
