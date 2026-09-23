/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 2 · Chapter 27
   "Tempus: Perfekt vs. Präteritum" — this is a USAGE chapter, not
   a formation chapter. Perfekt = mostly spoken German (everyday
   conversation, friends, family). Präteritum = mostly written
   German (newspapers, novels, reports, history). Common spoken
   exceptions stay in Präteritum even in conversation: war, hatte,
   konnte, musste, wollte, durfte, sollte, wusste, dachte.
   Does NOT teach Plusquamperfekt, Futur, or Konjunktiv.
   IMPORTANT: dialogue uses ONLY Ines and Timo.
   Theme: modern German history (Berlin Wall / reunification) —
   ideal contrast ground for spoken vs written register.
   Vocabulary source: uploaded chapter-27 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-27-perfekt-vs-praeteritum',
  phase: 'B2 · Phase 2',
  number: 27,
  title: 'Tempus: Perfekt vs. Präteritum',
  titleEn: 'Tense: Perfekt vs. Präteritum (usage)',
  description: 'Not how to form the tenses — WHEN to use each. Perfekt for talking, Präteritum for writing, with a handful of spoken exceptions.',
  xp: 450,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 28, title: 'Tempuswechsel im Text', titleEn: 'Tense-switching within a text' , href: 'chapter-b2-28-tempuswechsel-im-text.html' },

  prevChapter: { number: 26, title: 'Goethe Mini Test 2 (Checkpoint)', titleEn: 'Goethe Mini Test 2 (checkpoint)', href: 'chapter-b2-26-goethe-mini-test-2.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Same past, <em>two voices.</em>',
    intro: 'Preparing a presentation on German history, Ines tells Timo what her grandmother witnessed at the border opening in 1989 — their spoken German drifting naturally into the Perfekt, except for a few stubborn verbs that stay in the Präteritum.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how war, hatte, musste, and konnte slip into spoken Präteritum even mid-conversation'
    ],
    scene: 'Die Referatsvorbereitung',
    femaleSpeakers: ['Ines'],
    dialogue: [
      { speaker: 'Ines', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Großmutter', role: 'r-subject', en: 'grandmother', hi: 'दादी', pron: 'GROHS-mu-ter', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'बताया है', pron: 'hat', type: 'Verb · haben', why: 'Perfekt used in spoken recounting of personal memory (this chapter).', ex: 'Sie hat mir davon erzählt.', exEn: 'She has told me about it.' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'von', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'fon', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Grenzöffnung', role: 'r-dativ', en: 'border opening (dat.)', hi: 'सीमा खोलने के', pron: 'GRENTS-öf-nung', type: 'Noun · fem. dat.', why: 'die Grenzöffnung (this chapter).', ex: 'von der Grenzöffnung' },
        { w: 'erzählt', role: 'r-verb', en: 'told', hi: 'बताया', pron: 'er-TSAYLT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'My grandmother has told me about the border opening.', hi: 'Meri dadi ne mujhe seema kholne ke baare mein bataya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'geschah', role: 'r-verb', en: 'happened', hi: 'हुआ', pron: 'ge-SHAH', type: 'Verb · geschehen (Präteritum)', why: 'Präteritum used for the historical event itself, narrative/factual style (this chapter).', ex: 'Die Grenzöffnung geschah 1989.', exEn: 'The border opening happened in 1989.' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'genau', role: 'r-akkusativ', en: 'exactly', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'When exactly did that happen?', hi: 'Yeh theek se kab hua?' },
      { speaker: 'Ines', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'geschah', role: 'r-verb', en: 'happened', hi: 'हुआ', pron: 'ge-SHAH', type: 'Verb · geschehen (Präteritum)' },
        { w: '1989', role: 'r-time', en: '1989', hi: '1989', pron: 'NOYN-tsayn-HOON-dert-noyn-und-akh-tsikh', type: 'Number · year', ex: 'neunzehnhundertneunundachtzig' },
        { w: '.', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Großmutter', role: 'r-subject', en: 'grandmother', hi: 'दादी', pron: 'GROHS-mu-ter', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'देखी है', pron: 'hat', type: 'Verb · haben' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Feier', role: 'r-akkusativ', en: 'celebration', hi: 'जश्न', pron: 'FY-er', type: 'Noun · fem.' },
        { w: 'miterlebt', role: 'r-verb', en: 'witnessed', hi: 'ख़ुद देखा', pron: 'MIT-er-laypt', type: 'Partizip II · Satzende', why: 'miterleben = to witness/experience together (this chapter).', ex: 'Sie hat die Feier miterlebt.', exEn: 'She witnessed the celebration.' },
        { w: '.', plain: true }
      ], en: 'That happened in 1989. My grandmother witnessed the celebration.', hi: 'Yeh 1989 mein hua. Meri dadi ne khud jashn dekha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Stimmung', role: 'r-subject', en: 'mood', hi: 'माहौल', pron: 'SHTI-mung', type: 'Noun · fem.' },
        { w: 'damals', role: 'r-time', en: 'back then', hi: 'उस समय', pron: 'DAH-mahls', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'How was the mood back then?', hi: 'Us samay maahaul kaisa tha?' },
      { speaker: 'Ines', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'voller', role: 'r-subject', en: 'full of', hi: 'भरा हुआ', pron: 'FO-ler', type: 'Adjective' },
        { w: 'Hoffnung', role: 'r-subject', en: 'hope', hi: 'आशा', pron: 'HOF-nung', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Großmutter', role: 'r-subject', en: 'grandmother', hi: 'दादी', pron: 'GROHS-mu-ter', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'रोई है', pron: 'hat', type: 'Verb · haben' },
        { w: 'vor', role: 'r-preposition', en: 'out of', hi: 'के कारण', pron: 'for', type: 'Preposition + dative' },
        { w: 'Freude', role: 'r-dativ', en: 'joy (dat.)', hi: 'ख़ुशी के', pron: 'FROY-duh', type: 'Noun · fem. dat.', why: 'die Freude (recycled B1).', ex: 'vor Freude weinen' },
        { w: 'geweint', role: 'r-verb', en: 'cried', hi: 'रोई', pron: 'ge-VYNT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'It was full of hope. My grandmother cried out of joy.', hi: 'Yeh aasha se bhara hua tha. Meri dadi khushi ke maare royi thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adverb' },
        { w: 'vorstellen', role: 'r-verb', en: 'imagine', hi: 'कल्पना करना', pron: 'FOR-shte-len', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I can imagine that well.', hi: 'Main is baat ki achhi tarah kalpana kar sakta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This chapter is <em>not</em> about how to form Perfekt or Präteritum — you already know that. It\'s about <span class="de r-tempus">choosing</span> the right one: Perfekt for talking, Präteritum for writing, with a handful of stubborn spoken exceptions like <span class="de">war</span>, <span class="de">hatte</span>, and every modal verb.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPUS: PERFEKT vs. PRÄTERITUM (B2 level, usage only — not formation). Perfekt is the natural choice for spoken/conversational German (talking with friends, family, daily life). Präteritum is the natural choice for written German (newspapers, novels, reports, history, formal writing). The difference is mostly STYLE, not TIME. Common spoken exceptions that stay in Präteritum even in conversation: war, hatte, and all modal verbs (konnte, musste, wollte, durfte, sollte) plus wusste, dachte. ' +
    'Do NOT expect or require Plusquamperfekt, Futur, or Konjunktiv — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- If the text reads like a spoken/conversational register (diary-like, personal, dialogue), Perfekt should dominate, with the listed exceptions naturally in Präteritum.\n' +
    '- If the text reads like a formal/written register (report, news, narrative history), Präteritum should dominate.\n' +
    '- Do not flag "war", "hatte", or modal verbs in Präteritum as errors — that is the correct spoken form.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine register mismatch or grammar issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the tense choice fits the intended register (spoken vs written).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly hear the difference between spoken Perfekt and written Präteritum, and you know the common exceptions. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the register comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: talking uses Perfekt, reading/writing uses Präteritum, and a handful of verbs (war, hatte, the modals) prefer Präteritum everywhere.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'habe', role: 'r-tempus' }, { w: 'gestern', role: 'plain' },
    { w: 'gearbeitet', role: 'r-tempus' }, { w: '.', plain: true }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Perfekt for talking, Präteritum for writing, with a few stubborn exceptions.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ines and Timo prepare a history presentation, naturally mixing Perfekt with spoken-exception Präteritum.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with an example, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the spoken vs written tense choice and the common spoken exceptions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Compare a Präteritum-heavy newspaper article with a Perfekt-heavy blog post.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify spoken tense, written tense, register, and why each tense was chosen.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Tell stories and describe experiences using authentic spoken tense choices.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a diary entry (Perfekt) and a newspaper report (Präteritum), comparing both styles.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Perfekt-or-Präteritum decisions, register rewriting, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 450 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Perfekt-or-Präteritum drills, register rewriting, and a two-style writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete spoken-vs-written register guide, with the full spoken-exceptions list.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe gestern gearbeitet.', text: 'Use Perfekt naturally in spoken, everyday conversation' },
    { de: 'Der Zug kam pünktlich an.', text: 'Use Präteritum naturally in written, formal German' },
    { de: 'war, hatte, musste, konnte, wollte, durfte, sollte, wusste, dachte', text: 'Recognize the common spoken exceptions that stay in Präteritum' },
    { de: 'Gespräch vs. Zeitungsartikel', text: 'Distinguish spoken register from written register at a glance' },
    { de: 'Tempuswahl ist Stil, nicht Zeit', text: 'Understand that the choice is about STYLE, not TIME' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-27 list; modern-history theme) ----------
  vocab: [
    { de: 'Bewachung', art: 'die', gender: 'f', plural: 'Bewachungen', pos: 'noun', level: 'B2', register: 'both', en: 'guarding, surveillance', hi: 'निगरानी', ex: 'Die Bewachung der Grenze war streng.', exEn: 'The guarding of the border was strict.', exHi: 'Seemaa ki nigraani sakht thi.', ex2: 'Wir haben die Bewachung verstärkt.', ex2En: 'We\'ve reinforced the surveillance.', ex2Hi: 'Humne nigraani majboot kar di hai.' },
    { de: 'Entscheidung', art: 'die', gender: 'f', plural: 'Entscheidungen', pos: 'noun', level: 'B2', register: 'both', en: 'decision', hi: 'निर्णय', ex: 'Die Koalition musste schnell entscheiden.', exEn: 'The coalition had to decide quickly.', exHi: 'Gathbandhan ko jaldi faisla lena pada.', ex2: 'Ich habe darüber viel nachgedacht.', ex2En: 'I\'ve thought about that a lot.', ex2Hi: 'Maine iske baare mein bahut socha.' },
    { de: 'Lebensbedingung', art: 'die', gender: 'f', plural: 'Lebensbedingungen', pos: 'noun', level: 'B2', register: 'both', en: 'living condition', hi: 'जीवन स्थिति', ex: 'Wollten wir nicht auch die Lebensbedingungen vergleichen?', exEn: 'Didn\'t we also want to compare the living conditions?', exHi: 'Kya humein jeevan sthitiyon ki tulna bhi nahi karni thi?', ex2: 'Die Lebensbedingungen verbesserten sich langsam.', ex2En: 'The living conditions improved slowly.', ex2Hi: 'Jeevan sthitiyaan dheere dheere sudhareen.' },
    { de: 'Schutzmaßnahme', art: 'die', gender: 'f', plural: 'Schutzmaßnahmen', pos: 'noun', level: 'B2', register: 'written', en: 'protective measure', hi: 'सुरक्षा उपाय', ex: 'Die Regierung führte neue Schutzmaßnahmen ein.', exEn: 'The government introduced new protective measures.', exHi: 'Sarkaar ne nayi suraksha upaay laagu kiye.', ex2: 'Wir haben zusätzliche Schutzmaßnahmen getroffen.', ex2En: 'We\'ve taken additional protective measures.', ex2Hi: 'Humne atirikt suraksha upaay kiye hain.' },
    { de: 'Voraussetzung', art: 'die', gender: 'f', plural: 'Voraussetzungen', pos: 'noun', level: 'B2', register: 'both', en: 'prerequisite, requirement', hi: 'शर्त', ex: 'Alle Voraussetzungen wurden erfüllt.', exEn: 'All prerequisites were fulfilled.', exHi: 'Saari sharten poori ki gayeen.', ex2: 'Das ist eine wichtige Voraussetzung.', ex2En: 'That\'s an important requirement.', ex2Hi: 'Yeh ek mahatvapurn shart hai.' },
    { de: 'Wissenschaftssprache', art: 'die', gender: 'f', plural: 'Wissenschaftssprachen', pos: 'noun', level: 'B2', register: 'written', en: 'scientific language', hi: 'वैज्ञानिक भाषा', ex: 'Englisch ist die dominante Wissenschaftssprache.', exEn: 'English is the dominant scientific language.', exHi: 'Angrezi pramukh vaigyaanik bhaasha hai.', ex2: 'Die Wissenschaftssprache veränderte sich über die Jahre.', ex2En: 'The scientific language changed over the years.', ex2Hi: 'Vaigyaanik bhaasha varshon mein badal gayi.' },
    { de: 'abgrenzen', pos: 'verb', level: 'B2', register: 'both', en: 'to set apart, demarcate', hi: 'अलग करना', ex: 'Sie grenzten das Gebiet ab.', exEn: 'They demarcated the area.', exHi: 'Unhone kshetra ko alag kiya.', ex2: 'Wir haben unsere Aufgaben klar abgegrenzt.', ex2En: 'We\'ve clearly demarcated our tasks.', ex2Hi: 'Humne apne kaam spasht roop se baant liye hain.', conj: { praesens: 'grenzt ab', praeteritum: 'grenzte ab', perfekt: 'hat abgegrenzt' } },
    { de: 'Abhängigkeit', art: 'die', gender: 'f', plural: 'Abhängigkeiten', pos: 'noun', level: 'B2', register: 'both', en: 'dependency, addiction', hi: 'निर्भरता, लत', ex: 'Die Abhängigkeit von Öl war ein Problem.', exEn: 'The dependency on oil was a problem.', exHi: 'Tel par nirbharta ek samasya thi.', ex2: 'Er hat seine Abhängigkeit überwunden.', ex2En: 'He\'s overcome his dependency.', ex2Hi: 'Usne apni nirbharta par kaabu paa liya hai.' },
    { de: 'abriegeln', pos: 'verb', level: 'B2', register: 'written', en: 'to seal off', hi: 'सील करना', ex: 'Die Polizei riegelte die Straße ab.', exEn: 'The police sealed off the street.', exHi: 'Police ne sadak seal kar di.', ex2: 'Sie haben das Gebäude abgeriegelt.', ex2En: 'They\'ve sealed off the building.', ex2Hi: 'Unhone building seal kar di hai.', conj: { praesens: 'riegelt ab', praeteritum: 'riegelte ab', perfekt: 'hat abgeriegelt' } },
    { de: 'Absperrung', art: 'die', gender: 'f', plural: 'Absperrungen', pos: 'noun', level: 'B2', register: 'written', en: 'barrier, cordon', hi: 'बैरियर', ex: 'Die Absperrung blockierte den Weg.', exEn: 'The barrier blocked the way.', exHi: 'Barrier ne raasta rok diya.', ex2: 'Wir haben die Absperrung entfernt.', ex2En: 'We\'ve removed the barrier.', ex2Hi: 'Humne barrier hata diya hai.' },
    { de: 'angehen', pos: 'verb', level: 'B2', register: 'both', en: 'to tackle, approach', hi: 'निपटना', ex: 'Sie gingen das Problem sofort an.', exEn: 'They tackled the problem immediately.', exHi: 'Unhone turant samasya se nipta.', ex2: 'Wir haben die Aufgabe systematisch angegangen.', ex2En: 'We\'ve tackled the task systematically.', ex2Hi: 'Humne kaam ko vyavasthit tarike se kiya hai.', conj: { praesens: 'geht an', praeteritum: 'ging an', perfekt: 'hat angegangen' } },
    { de: 'ängstigen', pos: 'verb', level: 'B2', register: 'both', en: 'to frighten, scare', hi: 'डराना', ex: 'Die Nachricht ängstigte viele Menschen.', exEn: 'The news frightened many people.', exHi: 'Khabar ne kai logon ko dara diya.', ex2: 'Er hat sich vor der Prüfung geängstigt.', ex2En: 'He was scared before the exam.', ex2Hi: 'Woh pareeksha se pehle dara hua tha.', conj: { praesens: 'ängstigt', praeteritum: 'ängstigte', perfekt: 'hat geängstigt' } },
    { de: 'Aufteilung', art: 'die', gender: 'f', plural: 'Aufteilungen', pos: 'noun', level: 'B2', register: 'both', en: 'distribution, division', hi: 'बंटवारा', ex: 'Sollten wir unser Referat jetzt aufteilen?', exEn: 'Should we divide up our presentation now?', exHi: 'Kya humein ab apna presentation baant lena chaahiye?', ex2: 'Die Aufteilung der Arbeit war fair.', ex2En: 'The distribution of work was fair.', ex2Hi: 'Kaam ka baantvaara nyaayasangat tha.' },
    { de: 'ausbauen', pos: 'verb', level: 'B2', register: 'both', en: 'to expand, develop', hi: 'विस्तार करना', ex: 'Die Firma baute ihr Netzwerk aus.', exEn: 'The company expanded its network.', exHi: 'Company ne apna network vistaarit kiya.', ex2: 'Wir haben unsere Beziehungen ausgebaut.', ex2En: 'We\'ve developed our relationships.', ex2Hi: 'Humne apne sambandh vikasit kiye hain.', conj: { praesens: 'baut aus', praeteritum: 'baute aus', perfekt: 'hat ausgebaut' } },
    { de: 'ausfallen', pos: 'verb', level: 'B2', register: 'both', en: 'to fall through, be cancelled', hi: 'रद्द होना', ex: 'Der Unterricht fiel aus.', exEn: 'The class was cancelled.', exHi: 'Class radd ho gayi.', ex2: 'Die Vorlesung ist wegen Krankheit ausgefallen.', ex2En: 'The lecture was cancelled due to illness.', ex2Hi: 'Bimaari ki vajah se lecture radd ho gaya.', conj: { praesens: 'fällt aus', praeteritum: 'fiel aus', perfekt: 'ist ausgefallen' } },
    { de: 'ausgezeichnet', pos: 'adjective', level: 'B2', register: 'both', en: 'excellent', hi: 'उत्कृष्ट', ex: 'Die Präsentation war ausgezeichnet.', exEn: 'The presentation was excellent.', exHi: 'Presentation utkrisht tha.', ex2: 'Sie hat ausgezeichnete Noten bekommen.', ex2En: 'She\'s gotten excellent grades.', ex2Hi: 'Usne utkrisht grades paaye hain.' },
    { de: 'ausreisen', pos: 'verb', level: 'B2', register: 'written', en: 'to emigrate, leave the country', hi: 'देश छोड़ना', ex: 'Viele Familien reisten damals aus.', exEn: 'Many families emigrated back then.', exHi: 'Kai parivaar us samay desh chhod gaye.', ex2: 'Sie sind letztes Jahr ausgereist.', ex2En: 'They emigrated last year.', ex2Hi: 'Woh pichhle saal desh chhod gaye.', conj: { praesens: 'reist aus', praeteritum: 'reiste aus', perfekt: 'ist ausgereist' } },
    { de: 'Behinderung', art: 'die', gender: 'f', plural: 'Behinderungen', pos: 'noun', level: 'B2', register: 'both', en: 'disability', hi: 'विकलांगता', ex: 'Er lebt mit einer Behinderung.', exEn: 'He lives with a disability.', exHi: 'Woh ek viklaangata ke saath jeeta hai.', ex2: 'Die Stadt verbesserte die Zugänglichkeit für Menschen mit Behinderung.', ex2En: 'The city improved accessibility for people with disabilities.', ex2Hi: 'Shahar ne viklaang logon ke liye suvidha sudhaari.' },
    { de: 'beitragen', pos: 'verb', level: 'B2', register: 'both', en: 'to contribute', hi: 'योगदान देना', ex: 'Ich trage die Einleitung bei.', exEn: 'I\'ll contribute the introduction.', exHi: 'Main introduction mein yogdaan dunga.', ex2: 'Jeder hat auf seine Weise beigetragen.', ex2En: 'Everyone contributed in their own way.', ex2Hi: 'Sabne apne tarike se yogdaan diya.', conj: { praesens: 'trägt bei', praeteritum: 'trug bei', perfekt: 'hat beigetragen' } },
    { de: 'beitreten', pos: 'verb', level: 'B2', register: 'written', en: 'to join (an organisation)', hi: 'शामिल होना', ex: 'Sie trat der Hilfsorganisation bei.', exEn: 'She joined the aid organisation.', exHi: 'Woh sahaayata sangathan mein shaamil ho gayi.', ex2: 'Er ist der Koalition beigetreten.', ex2En: 'He\'s joined the coalition.', ex2Hi: 'Woh gathbandhan mein shaamil ho gaya hai.', conj: { praesens: 'tritt bei', praeteritum: 'trat bei', perfekt: 'ist beigetreten' } },
    { de: 'besetzen', pos: 'verb', level: 'B2', register: 'written', en: 'to occupy, fill (a post)', hi: 'भरना, कब्जा करना', ex: 'Die Firma besetzte die Stelle schnell.', exEn: 'The company filled the position quickly.', exHi: 'Company ne pad jaldi bhar diya.', ex2: 'Die Stelle wurde bereits besetzt.', ex2En: 'The position has already been filled.', ex2Hi: 'Pad pehle se hi bhar diya gaya hai.', conj: { praesens: 'besetzt', praeteritum: 'besetzte', perfekt: 'hat besetzt' } },
    { de: 'Beteiligung', art: 'die', gender: 'f', plural: 'Beteiligungen', pos: 'noun', level: 'B2', register: 'both', en: 'participation, involvement', hi: 'भागीदारी', ex: 'Die Beteiligung an der Wahl war hoch.', exEn: 'The participation in the election was high.', exHi: 'Chunaav mein bhaagidaari zyaada thi.', ex2: 'Ihre Beteiligung hat viel bewirkt.', ex2En: 'Her involvement has achieved a lot.', ex2Hi: 'Uski bhaagidaari ne bahut kuch kiya hai.' },
    { de: 'bewachen', pos: 'verb', level: 'B2', register: 'written', en: 'to guard', hi: 'पहरा देना', ex: 'Soldaten bewachten die Grenze.', exEn: 'Soldiers guarded the border.', exHi: 'Sainikon ne seemaa ki pahra diya.', ex2: 'Der Hund hat das Haus bewacht.', ex2En: 'The dog has guarded the house.', ex2Hi: 'Kutte ne ghar ki pahra di hai.', conj: { praesens: 'bewacht', praeteritum: 'bewachte', perfekt: 'hat bewacht' } },
    { de: 'Bundestagsfraktion', art: 'die', gender: 'f', plural: 'Bundestagsfraktionen', pos: 'noun', level: 'B2', register: 'written', en: 'parliamentary group', hi: 'संसदीय समूह', ex: 'Konntest du auch etwas über die Bundestagsfraktion finden?', exEn: 'Could you also find something about the parliamentary group?', exHi: 'Kya tumhein sansadeey samuh ke baare mein bhi kuch mila?', ex2: 'Die Bundestagsfraktion stimmte einstimmig ab.', ex2En: 'The parliamentary group voted unanimously.', ex2Hi: 'Sansadeey samuh ne sarvasammat se vote kiya.' },
    { de: 'distanzieren', pos: 'verb', level: 'B2', register: 'both', en: 'to distance oneself', hi: 'दूरी बनाना', ex: 'Sie distanzierte sich von der Aussage.', exEn: 'She distanced herself from the statement.', exHi: 'Usne bayaan se doori bana li.', ex2: 'Er hat sich klar distanziert.', ex2En: 'He\'s clearly distanced himself.', ex2Hi: 'Usne spasht roop se doori bana li hai.', conj: { praesens: 'distanziert', praeteritum: 'distanzierte', perfekt: 'hat distanziert' } },
    { de: 'eifersüchtig', pos: 'adjective', level: 'B2', register: 'both', en: 'jealous', hi: 'ईर्ष्यालु', ex: 'Er war ein bisschen eifersüchtig.', exEn: 'He was a little jealous.', exHi: 'Woh thoda eershyaalu tha.', ex2: 'Sie ist nicht eifersüchtig auf ihre Schwester.', ex2En: 'She\'s not jealous of her sister.', ex2Hi: 'Woh apni behen se eershya nahi karti.' },
    { de: 'einlenken', pos: 'verb', level: 'B2', register: 'written', en: 'to relent, give in', hi: 'नरम पड़ना', ex: 'Die Regierung lenkte schließlich ein.', exEn: 'The government finally relented.', exHi: 'Sarkaar aakhir mein narm pad gayi.', ex2: 'Sie hat nach langer Diskussion eingelenkt.', ex2En: 'She\'s relented after a long discussion.', ex2Hi: 'Usne lambi charcha ke baad narm rukh apnaaya.', conj: { praesens: 'lenkt ein', praeteritum: 'lenkte ein', perfekt: 'hat eingelenkt' } },
    { de: 'eintreten', pos: 'verb', level: 'B2', register: 'both', en: 'to enter, occur, step in', hi: 'प्रवेश करना, होना', ex: 'Eine Wende trat unerwartet ein.', exEn: 'A turning point occurred unexpectedly.', exHi: 'Ek badlaav achaanak hua.', ex2: 'Er ist für seinen Freund eingetreten.', ex2En: 'He\'s stepped in for his friend.', ex2Hi: 'Woh apne dost ke liye aage aaya hai.', conj: { praesens: 'tritt ein', praeteritum: 'trat ein', perfekt: 'ist eingetreten' } },
    { de: 'Entfernung', art: 'die', gender: 'f', plural: 'Entfernungen', pos: 'noun', level: 'B2', register: 'both', en: 'distance, removal', hi: 'दूरी', ex: 'Die Entfernung war beträchtlich.', exEn: 'The distance was considerable.', exHi: 'Doori kaafi thi.', ex2: 'Sie haben die Entfernung schnell zurückgelegt.', ex2En: 'They\'ve covered the distance quickly.', ex2Hi: 'Unhone doori jaldi tay ki hai.' },
    { de: 'entlassen', pos: 'verb', level: 'B2', register: 'written', en: 'to dismiss, release', hi: 'बर्खास्त करना', ex: 'Die Firma entließ viele Mitarbeiter.', exEn: 'The company dismissed many employees.', exHi: 'Company ne kai karmachaariyon ko nikaal diya.', ex2: 'Er wurde aus dem Krankenhaus entlassen.', ex2En: 'He\'s been released from the hospital.', ex2Hi: 'Use aspataal se chhutti mil gayi hai.', conj: { praesens: 'entlässt', praeteritum: 'entließ', perfekt: 'hat entlassen' } },
    { de: 'ereignen', pos: 'verb', level: 'B2', register: 'written', en: 'to happen, occur', hi: 'घटित होना', ex: 'Der Unfall ereignete sich am Morgen.', exEn: 'The accident occurred in the morning.', exHi: 'Durghatna subah hui.', ex2: 'Etwas Unerwartetes hat sich ereignet.', ex2En: 'Something unexpected has occurred.', ex2Hi: 'Kuch anapekshit hua hai.', conj: { praesens: 'ereignet', praeteritum: 'ereignete', perfekt: 'hat ereignet' } },
    { de: 'ergeben', pos: 'verb', level: 'B2', register: 'written', en: 'to result, yield, surrender', hi: 'परिणाम देना', ex: 'Das Buch ergab interessante Details.', exEn: 'The book yielded interesting details.', exHi: 'Kitaab ne dilchasp vivaran diye.', ex2: 'Die Umfrage hat ein klares Ergebnis ergeben.', ex2En: 'The survey has yielded a clear result.', ex2Hi: 'Sarvekshan ne ek spasht parinaam diya hai.', conj: { praesens: 'ergibt', praeteritum: 'ergab', perfekt: 'hat ergeben' } },
    { de: 'ergehen', pos: 'verb', level: 'B2', register: 'written', en: 'to fare, get on', hi: 'हाल होना', ex: 'Wie ist es ihnen ergangen?', exEn: 'How did it go for them?', exHi: 'Unka kya haal hua?', ex2: 'Es ist ihm gut ergangen.', ex2En: 'It\'s gone well for him.', ex2Hi: 'Uske saath sab theek raha.', conj: { praesens: 'ergeht', praeteritum: 'erging', perfekt: 'ist ergangen' } },
    { de: 'ernennen', pos: 'verb', level: 'B2', register: 'written', en: 'to appoint, name', hi: 'नियुक्त करना', ex: 'Man ernannte sie zur Leiterin.', exEn: 'They appointed her as director.', exHi: 'Use nideshak niyukt kiya gaya.', ex2: 'Er ist zum Minister ernannt worden.', ex2En: 'He\'s been appointed minister.', ex2Hi: 'Use mantri niyukt kiya gaya hai.', conj: { praesens: 'ernennt', praeteritum: 'ernannte', perfekt: 'hat ernannt' } },
    { de: 'errichten', pos: 'verb', level: 'B2', register: 'written', en: 'to erect, construct', hi: 'निर्माण करना', ex: 'Der Text errichtete einen klaren Zeitrahmen.', exEn: 'The text established a clear timeframe.', exHi: 'Text ne ek spasht samay-seema sthaapit ki.', ex2: 'Sie haben ein neues Denkmal errichtet.', ex2En: 'They\'ve erected a new monument.', ex2Hi: 'Unhone ek naya smaarak banaaya hai.', conj: { praesens: 'errichtet', praeteritum: 'errichtete', perfekt: 'hat errichtet' } },
    { de: 'erzwingen', pos: 'verb', level: 'B2', register: 'written', en: 'to force, enforce', hi: 'बाध्य करना', ex: 'Die Krise erzwang schnelles Handeln.', exEn: 'The crisis forced quick action.', exHi: 'Sankat ne turant kaarrvaai ko majboor kiya.', ex2: 'Sie haben eine Lösung erzwungen.', ex2En: 'They\'ve forced a solution.', ex2Hi: 'Unhone ek samaadhaan par majboor kiya hai.', conj: { praesens: 'erzwingt', praeteritum: 'erzwang', perfekt: 'hat erzwungen' } },
    { de: 'fallen', pos: 'verb', level: 'B2', register: 'both', en: 'to fall, drop', hi: 'गिरना', ex: 'Die Mauer fiel im Jahr 1989.', exEn: 'The wall fell in 1989.', exHi: 'Deewaar 1989 mein girii.', ex2: 'Die Preise sind gefallen.', ex2En: 'The prices have fallen.', ex2Hi: 'Daam gir gaye hain.', conj: { praesens: 'fällt', praeteritum: 'fiel', perfekt: 'ist gefallen' } },
    { de: 'Faszination', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'fascination', hi: 'आकर्षण', ex: 'Die Faszination für Geschichte wuchs.', exEn: 'The fascination for history grew.', exHi: 'Itihaas ke prati aakarshan badha.', ex2: 'Ich habe eine Faszination für alte Fotos entwickelt.', ex2En: 'I\'ve developed a fascination for old photos.', ex2Hi: 'Mujhe puraani tasveeron ke prati aakarshan ho gaya hai.' },
    { de: 'fehlen', pos: 'verb', level: 'B2', register: 'both', en: 'to be missing, lacking', hi: 'कमी होना', ex: 'Es fehlte an klaren Informationen.', exEn: 'There was a lack of clear information.', exHi: 'Spasht jaankaari ki kami thi.', ex2: 'Mir hat die Zeit gefehlt.', ex2En: 'I\'ve lacked the time.', ex2Hi: 'Mujhe samay ki kami rahi hai.', conj: { praesens: 'fehlt', praeteritum: 'fehlte', perfekt: 'hat gefehlt' } },
    { de: 'festlegen', pos: 'verb', level: 'B2', register: 'both', en: 'to fix, set, determine', hi: 'तय करना', ex: 'Sie legten den Termin fest.', exEn: 'They fixed the appointment.', exHi: 'Unhone appointment tay ki.', ex2: 'Wir haben die Regeln festgelegt.', ex2En: 'We\'ve determined the rules.', ex2Hi: 'Humne niyam tay kar diye hain.', conj: { praesens: 'legt fest', praeteritum: 'legte fest', perfekt: 'hat festgelegt' } },
    { de: 'Führung', art: 'die', gender: 'f', plural: 'Führungen', pos: 'noun', level: 'B2', register: 'both', en: 'leadership, guided tour', hi: 'नेतृत्व, दौरा', ex: 'Die Führung des Landes wechselte.', exEn: 'The leadership of the country changed.', exHi: 'Desh ka netritva badal gaya.', ex2: 'Wir haben eine Führung durch das Museum gemacht.', ex2En: 'We\'ve done a guided tour of the museum.', ex2Hi: 'Humne museum ka daura kiya hai.' },
    { de: 'Gemeinschaft', art: 'die', gender: 'f', plural: 'Gemeinschaften', pos: 'noun', level: 'B2', register: 'both', en: 'community', hi: 'समुदाय', ex: 'Die Gemeinschaft half einander.', exEn: 'The community helped one another.', exHi: 'Samudaay ek dusre ki madad karta tha.', ex2: 'Wir haben eine starke Gemeinschaft aufgebaut.', ex2En: 'We\'ve built a strong community.', ex2Hi: 'Humne ek majboot samudaay banaaya hai.' },
    { de: 'Genehmigung', art: 'die', gender: 'f', plural: 'Genehmigungen', pos: 'noun', level: 'B2', register: 'both', en: 'approval, permission', hi: 'अनुमति', ex: 'Die Genehmigung dauerte Wochen.', exEn: 'The approval took weeks.', exHi: 'Anumati mein hafte lage.', ex2: 'Wir haben die Genehmigung endlich erhalten.', ex2En: 'We\'ve finally received the approval.', ex2Hi: 'Humein aakhirkaar anumati mil gayi hai.' },
    { de: 'Grenzöffnung', art: 'die', gender: 'f', plural: 'Grenzöffnungen', pos: 'noun', level: 'B2', register: 'written', en: 'opening of the border', hi: 'सीमा खुलना', ex: 'Ich habe gestern einen Artikel über die Grenzöffnung gelesen.', exEn: 'I read an article about the opening of the border yesterday.', exHi: 'Maine kal seemaa khulne ke baare mein ek lekh padha.', ex2: 'Die Grenzöffnung veränderte alles.', ex2En: 'The opening of the border changed everything.', ex2Hi: 'Seemaa khulne ne sab kuch badal diya.' },
    { de: 'Gründung', art: 'die', gender: 'f', plural: 'Gründungen', pos: 'noun', level: 'B2', register: 'both', en: 'founding, establishment', hi: 'स्थापना', ex: 'Ich habe einen Text über die Gründung gefunden.', exEn: 'I\'ve found a text about the founding.', exHi: 'Mujhe sthaapana ke baare mein ek text mila.', ex2: 'Die Gründung des Vereins dauerte lange.', ex2En: 'The founding of the association took a long time.', ex2Hi: 'Sangathan ki sthaapana mein lamba samay laga.' },
    { de: 'Handelsbeziehung', art: 'die', gender: 'f', plural: 'Handelsbeziehungen', pos: 'noun', level: 'B2', register: 'written', en: 'trade relationship', hi: 'व्यापार संबंध', ex: 'Die Handelsbeziehungen verbesserten sich.', exEn: 'The trade relationships improved.', exHi: 'Vyaapaar sambandh sudhre.', ex2: 'Wir haben neue Handelsbeziehungen aufgebaut.', ex2En: 'We\'ve built new trade relationships.', ex2Hi: 'Humne naye vyaapaar sambandh banaaye hain.' },
    { de: 'Hilfsorganisation', art: 'die', gender: 'f', plural: 'Hilfsorganisationen', pos: 'noun', level: 'B2', register: 'both', en: 'aid organisation', hi: 'सहायता संगठन', ex: 'Der Artikel erwähnte auch eine Hilfsorganisation.', exEn: 'The article also mentioned an aid organisation.', exHi: 'Lekh mein ek sahaayata sangathan ka bhi ullekh tha.', ex2: 'Sie trat der Hilfsorganisation bei.', ex2En: 'She joined the aid organisation.', ex2Hi: 'Woh sahaayata sangathan mein shaamil ho gayi.' },
    { de: 'irren', pos: 'verb', level: 'B2', register: 'both', en: 'to err, be mistaken', hi: 'गलती करना', ex: 'Er irrte sich in der Einschätzung.', exEn: 'He was mistaken in his assessment.', exHi: 'Woh apne aankalan mein galat tha.', ex2: 'Ich habe mich geirrt.', ex2En: 'I\'ve been mistaken.', ex2Hi: 'Mujhse galti hui hai.', conj: { praesens: 'irrt', praeteritum: 'irrte', perfekt: 'hat geirrt' } },
    { de: 'Isolation', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'isolation', hi: 'अलगाव', ex: 'Zum Beispiel über die Isolation vieler Familien.', exEn: 'For example about the isolation of many families.', exHi: 'Jaise ki kai parivaaron ke alagaav ke baare mein.', ex2: 'Die Isolation dauerte Monate.', ex2En: 'The isolation lasted months.', ex2Hi: 'Alagaav mahinon tak raha.' },
    { de: 'kennzeichnen', pos: 'verb', level: 'B2', register: 'written', en: 'to mark, characterise', hi: 'चिह्नित करना', ex: 'Der Artikel kennzeichnete die Zeit als historisch.', exEn: 'The article characterized the time as historic.', exHi: 'Lekh ne us samay ko aitihaasik ke roop mein chihnit kiya.', ex2: 'Diese Merkmale kennzeichnen die Epoche.', ex2En: 'These features characterise the era.', ex2Hi: 'Yeh visheshtaayein us yug ko darshaati hain.', conj: { praesens: 'kennzeichnet', praeteritum: 'kennzeichnete', perfekt: 'hat gekennzeichnet' } },
    { de: 'Koalition', art: 'die', gender: 'f', plural: 'Koalitionen', pos: 'noun', level: 'B2', register: 'both', en: 'coalition', hi: 'गठबंधन', ex: 'Die Koalition musste schnell entscheiden.', exEn: 'The coalition had to decide quickly.', exHi: 'Gathbandhan ko jaldi faisla lena pada.', ex2: 'Er ist der Koalition beigetreten.', ex2En: 'He\'s joined the coalition.', ex2Hi: 'Woh gathbandhan mein shaamil ho gaya hai.' },
    { de: 'Himmel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'sky, heaven', hi: 'आकाश', ex: 'Der Himmel war klar in dieser Nacht.', exEn: 'The sky was clear that night.', exHi: 'Us raat aakaash saaf tha.', ex2: 'Wir haben den Sternenhimmel bewundert.', ex2En: 'We\'ve admired the starry sky.', ex2Hi: 'Humne taaron bhare aakaash ki prashansa ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum hat Deutsch zwei Vergangenheitsformen?',
      body: [ 'German has two common past tenses. Perfekt is mostly spoken German. Präteritum is mostly written German. The difference is usually STYLE, not TIME.' ],
      table: {
        head: ['Tense', 'Typical register'],
        rows: [
          ['Perfekt', 'Spoken (conversations, daily life)'],
          ['Präteritum', 'Written (books, newspapers, reports)']
        ]
      },
      hinglish: 'German mein past ke do common tenses hain. <b>Perfekt</b> zyada-tar bolne mein aata hai, aur <b>Pr\u00e4teritum</b> likhne mein. Sabse zaroori baat yeh hai ki fark <b>style</b> ka hai, time ka nahi \u2014 dono ka matlab past hi hota hai.'
    },
    {
      title: 'Perfekt — gesprochene Situationen',
      body: [ 'Perfekt wahan aata hai jahan tum baat kar rahe ho \u2014 dosto se, ghar par, roz-marra ki conversation mein. Bolne wale German ka yeh default past tense hai.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich habe gestern gearbeitet.</span>'],
          ['<span class="de">Anna hat den Film gesehen.</span>'],
          ['<span class="de">Wir sind nach Berlin gefahren.</span>']
        ]
      },
      hinglish: 'Perfekt wahan aata hai jahan tum baat kar rahe ho \u2014 dosto se, ghar par, roz-marra ki conversation mein. Bolne wale German ka yeh default past tense hai.'
    },
    {
      title: 'Präteritum — geschriebene Situationen',
      body: [ 'Pr\u00e4teritum likhne wale German mein aata hai \u2014 kitaabein, newspapers, reports, novels aur history. Isliye reading mein tum ise sabse zyada dekhoge.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna arbeitete bis spät.</span>'],
          ['<span class="de">Der Zug kam pünktlich an.</span>'],
          ['<span class="de">Die Firma eröffnete eine neue Filiale.</span>']
        ]
      },
      hinglish: 'Pr\u00e4teritum likhne wale German mein aata hai \u2014 kitaabein, newspapers, reports, novels aur history. Isliye reading mein tum ise sabse zyada dekhoge.'
    },
    {
      title: 'Gemischte Verwendung (Mixed Usage)',
      body: [ 'Germans often mix both tenses, especially with sein, haben, werden, and modal verbs — these appear in Präteritum even while speaking.' ],
      table: {
        head: ['Natural (spoken)', 'Possible but heavy \u2014 last row is WRONG'],
        rows: [
          ['<span class="de">Ich war gestern krank.</span>', '<span class="strike de">Ich bin gestern krank gewesen.</span>'],
          ['<span class="de">Es gab viele Probleme.</span>', '<span class="strike de">Es hat viele Probleme gegeben.</span>'],
          ['<span class="de">Ich musste lange arbeiten.</span>', '<span class="strike de">Ich habe lange arbeiten gemusst.</span> \u2014 not just heavy, this form is incorrect: it needs the Ersatzinfinitiv <span class="de">m\u00fcssen</span>']
        ]
      },
      hinglish: 'Germans aksar dono tenses mix karte hain, khaas kar <b>sein, haben, werden</b> aur modal verbs ke saath \u2014 yeh bolne mein bhi Pr\u00e4teritum mein hi aate hain. Pehli do rows sirf bhaari lagti hain, galat nahi. Par aakhri row sach mein galat hai: modal ke saath doosra infinitive ho to Ersatzinfinitiv chahiye, isliye <span class="de">arbeiten m\u00fcssen</span>, na ki <span class="de">gemusst</span>.'
    },
    {
      title: 'Typisches gesprochenes Deutsch',
      body: [ 'Recognize everyday spoken German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich habe gut geschlafen.</span>'],
          ['<span class="de">Wir haben viel gelernt.</span>'],
          ['<span class="de">Anna ist nach München gefahren.</span>'],
          ['<span class="de">Rohan hat das Buch gelesen.</span>']
        ]
      },
      hinglish: 'In sentences ko dhyaan se dekho \u2014 yeh bilkul waise hain jaise log roz bolte hain.'
    },
    {
      title: 'Typisches geschriebenes Deutsch',
      body: [ 'Authentic Goethe B2 writing style, mostly Präteritum.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Der Wissenschaftler erklärte...</span>'],
          ['<span class="de">Die Autorin beschrieb...</span>'],
          ['<span class="de">Das Unternehmen veröffentlichte...</span>'],
          ['<span class="de">Der Minister betonte...</span>']
        ]
      },
      hinglish: 'Yeh Goethe B2 ki asli writing style hai \u2014 zyada-tar Pr\u00e4teritum, khaas kar reporting wale verbs ke saath jaise <span class="de">erkl\u00e4rte, beschrieb, betonte</span>.'
    },
    {
      title: 'Häufige Ausnahmen (Common Spoken Exceptions)',
      body: [ 'These verbs sound more natural in Präteritum, even in spoken conversation.' ],
      table: {
        head: ['Verb', 'Spoken German'],
        rows: [
          ['sein', 'war'],
          ['haben', 'hatte'],
          ['können', 'konnte'],
          ['müssen', 'musste'],
          ['wollen', 'wollte'],
          ['dürfen', 'durfte'],
          ['sollen', 'sollte'],
          ['wissen', 'wusste'],
          ['denken', 'dachte']
        ]
      },
      hinglish: 'Yeh verbs bolne mein bhi Pr\u00e4teritum mein hi natural lagte hain. Inhe ek chhoti list ki tarah yaad kar lo, phir bolte waqt sochna nahi padega.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These four are genuinely wrong \u2014 wrong auxiliary, wrong participle, or a broken verb form. Important: choosing Perfekt where Pr\u00e4teritum would be more idiomatic is NOT an error. <span class="de">Ich arbeitete gestern</span> and <span class="de">Ich habe gestern gearbeitet</span> are both correct German; only the register differs.' ],
      mistakes: [
        { wrong: 'Ich habe lange arbeiten gemusst.', right: 'Ich habe lange arbeiten müssen.', why: 'This one really is wrong. When a modal carries a second infinitive, its Perfekt uses the Ersatzinfinitiv (müssen), never the Partizip II (gemusst).' },
        { wrong: 'Ich bin gestern lange gearbeitet.', right: 'Ich habe gestern lange gearbeitet.', why: 'arbeiten takes haben, not sein — sein is only for movement or a change of state.' },
        { wrong: 'Der Zug ankam pünktlich.', right: 'Der Zug kam pünktlich an.', why: 'In the Präteritum a separable verb still splits — the prefix (an) goes to the end of the main clause.' },
        { wrong: 'Ich habe gestern gearbeitet gehabt.', right: 'Ich habe gestern gearbeitet.', why: 'Do not stack a second haben on top of the Perfekt — one auxiliary plus the Partizip II is already the complete form.' }
      ],
      hinglish: 'Yeh chaar sach mein galat hain \u2014 galat auxiliary, galat participle, ya toota hua verb form. Ek baat clear rakho: register ka choice galti nahi hai. <span class="de">Ich arbeitete gestern</span> aur <span class="de">Ich habe gestern gearbeitet</span> dono sahi German hain, bas ek likhne mein zyada aata hai aur doosra bolne mein.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'The choice between Perfekt and Präteritum is one of the fastest ways to sound like a native speaker at B2.' ],
      note: 'Memory trick: Talking? → Perfekt. Reading/writing? → Präteritum. Exceptions? → war, hatte, musste, konnte, wollte → usually Präteritum, even while speaking.',
      hinglish: 'Perfekt aur Pr\u00e4teritum ka sahi choice B2 par sabse jaldi farak dikhata hai \u2014 isse tumhara German turant natural lagne lagta hai.'
    }
  ],

  // ---------- Reading: TWO passages, contrasting register ----------
  reading: {
    title: 'Rückblick: Der Weg zur Wiedervereinigung',
    titleEn: 'Retrospective: the path to reunification',
    tokens: [
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Herbst', role: 'plain', en: 'autumn', hi: 'शरद ऋतु', type: 'Noun · masc.' },
      { w: '1989', role: 'plain', en: '1989', hi: '1989', type: 'Number · year', pron: 'NOYN-tsayn-HOON-dert-noyn-und-akh-tsikh', ex: 'neunzehnhundertneunundachtzig' },
      { w: 'öffnete', role: 'r-verb', en: 'opened (Präteritum, schriftliche Erzählung)', hi: 'खोला (Präteritum)', type: 'Verb · öffnen (Präteritum)', why: 'Written narration of a historical event defaults to Präteritum as its base tense (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'DDR', role: 'plain', en: 'GDR', hi: 'जीडीआर', type: 'Name' },
      { w: 'überraschend', role: 'plain', en: 'surprisingly', hi: 'आश्चर्यजनक रूप से', type: 'Adverb' },
      { w: 'ihre', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Grenzen', role: 'plain', en: 'borders (Satzende)', hi: 'सीमाएँ (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Grenzöffnung', role: 'plain', en: 'border opening', hi: 'सीमा खोलना', type: 'Noun · fem.', why: 'die Grenzöffnung (this chapter).' },
      { w: 'löste', role: 'plain', en: 'triggered', hi: 'शुरू किया', type: 'Verb · auslösen (Präteritum)' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Welle', role: 'plain', en: 'wave', hi: 'लहर', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Freude', role: 'plain', en: 'joy (Satzende)', hi: 'ख़ुशी (Satzende)', type: 'Noun · fem.' },
      { w: 'aus', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · auslösen' },
      { w: '.', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'an (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Interview', role: 'plain', en: 'interview', hi: 'साक्षात्कार', type: 'Noun · neut.' },
      { w: 'sagt', role: 'r-verb', en: 'says (Präsens, direkte Rede)', hi: 'कहती है (Präsens)', type: 'Verb · sagen (Präsens)', why: 'Present-day commentary and direct quotes typically use Präsens, in contrast with the Präteritum narration around them (this chapter).' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Zeitzeugin', role: 'plain', en: 'contemporary witness (f.)', hi: 'प्रत्यक्षदर्शी', type: 'Noun · fem.' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: ':', plain: true },
      { w: '„Ich', role: 'plain', en: '"I', hi: '"मैं', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have (Perfekt, gesprochene Sprache)', hi: 'है (Perfekt)', type: 'Verb · haben (Perfekt)', why: 'In spoken register and personal recollection, Perfekt (not Präteritum) is the natural choice, even for past events (this chapter).' },
      { w: 'diesen', role: 'plain', en: 'this (masc. acc.)', hi: 'यह', type: 'Determiner · Akk.' },
      { w: 'Tag', role: 'plain', en: 'day', hi: 'दिन', type: 'Noun · masc.' },
      { w: 'nie', role: 'plain', en: 'never', hi: 'कभी नहीं', type: 'Adverb' },
      { w: 'vergessen', role: 'plain', en: 'forgotten (Satzende)', hi: 'भुलाया (Satzende)', type: 'Verb · Partizip II' },
      { w: '.“', plain: true },
      { w: 'Kurz', role: 'plain', en: 'shortly', hi: 'जल्द ही', type: 'Adverb' },
      { w: 'darauf', role: 'plain', en: 'after that', hi: 'उसके बाद', type: 'Pronominaladverb' },
      { w: 'bildete', role: 'plain', en: 'formed (Präteritum)', hi: 'बनी (Präteritum)', type: 'Verb · bilden (Präteritum)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Koalition', role: 'plain', en: 'coalition (Satzende)', hi: 'गठबंधन (Satzende)', type: 'Noun · fem.', why: 'die Koalition (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Bundestag', role: 'plain', en: 'Bundestag', hi: 'बुंडेस्टाग', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Wiedervereinigung', role: 'plain', en: 'reunification (Satzende)', hi: 'पुनर्मिलन (Satzende)', type: 'Noun · fem.', why: 'die Wiedervereinigung (this chapter).' },
      { w: 'folgte', role: 'plain', en: 'followed (Präteritum)', hi: 'हुआ (Präteritum)', type: 'Verb · folgen (Präteritum)' },
      { w: 'weniger', role: 'plain', en: 'less than', hi: 'से कम', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'than', hi: 'से', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'später', role: 'plain', en: 'later (Satzende)', hi: 'बाद (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Rückblickend', role: 'plain', en: 'in retrospect', hi: 'पीछे मुड़कर देखने पर', type: 'Adverb' },
      { w: 'hat', role: 'r-verb', en: 'has (Perfekt, spoken register)', hi: 'है (Perfekt)', type: 'Verb · haben (Perfekt)', why: 'Perfekt: used here for a personal, evaluative statement, unlike the narrated Präteritum above (this chapter).' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'jemand', role: 'plain', en: 'anyone', hi: 'कोई भी', type: 'Pronoun' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'diesem', role: 'plain', en: 'this (masc. dat.)', hi: 'इस', type: 'Determiner · Dat.' },
      { w: 'Tempo', role: 'plain', en: 'pace (Satzende)', hi: 'गति (Satzende)', type: 'Noun · neut.' },
      { w: 'gerechnet', role: 'plain', en: 'expected (Satzende)', hi: 'उम्मीद की (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'doch', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Bilder', role: 'plain', en: 'images', hi: 'तस्वीरें', type: 'Noun · plural' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'damals', role: 'plain', en: 'back then', hi: 'तब', type: 'Adverb' },
      { w: 'blieben', role: 'r-verb', en: 'remained (Präteritum)', hi: 'रहीं (Präteritum)', type: 'Verb · bleiben (Präteritum)', why: 'Präteritum: narrative fact, back to the written register (this chapter).' },
      { w: 'unvergessen', role: 'plain', en: 'unforgotten (Satzende)', hi: 'अविस्मरणीय (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'In the autumn of 1989, the GDR surprisingly opened its borders. This border opening triggered a wave of joy. In an interview, a contemporary witness says today: "I have never forgotten this day." Shortly after, a new coalition formed in the Bundestag. Reunification followed less than a year later. In retrospect, hardly anyone expected this pace, but the images from back then remained unforgotten.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_027_L001', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meine Oma hat mir erzählt, wie sie die Maueröffnung erlebt hat.', en: 'Timo, my grandma told me how she experienced the opening of the wall.' },
      { id: 'B2_027_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Was war das für ein Gefühl für sie?', en: 'Really? What kind of feeling was that for her?' },
      { id: 'B2_027_L003', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sie sagte, es war einfach unbeschreiblich — alle standen auf der Straße und weinten.', en: 'She said it was simply indescribable — everyone stood on the street and cried.' },
      { id: 'B2_027_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das hat sicher Eindruck gemacht. Hat sie dir auch erzählt, wie es danach weiterging?', en: 'That surely made an impression. Did she also tell you how it continued afterwards?' },
      { id: 'B2_027_L005', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, sie hat noch lange erzählt. Ich zeige dir n\u00e4chstes Mal ihre Fotos.', en: 'Yes, she talked for a long time. Next time I will show you her photos.' }
    ],
    transcript: 'Timo, meine Oma hat mir erzählt, wie sie die Maueröffnung erlebt hat. Wirklich? Was war das für ein Gefühl für sie? Sie sagte, es war einfach unbeschreiblich — alle standen auf der Straße und weinten. Das hat sicher Eindruck gemacht. Hat sie dir auch erzählt, wie es danach weiterging? Ja, sie hat noch lange erzählt. Ich zeige dir n\u00e4chstes Mal ihre Fotos.',
    translation: 'Timo, my grandma told me how she experienced the opening of the wall. Really? What kind of feeling was that for her? She said it was simply indescribable — everyone stood on the street and cried. That surely made an impression. Did she also tell you how it continued afterwards? Yes, she talked for a long time. Next time I will show you her photos.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meine' },
      { w: 'Oma' },
      { w: 'hat' },
      { w: 'mir' },
      { w: 'erzählt' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'sie' },
      { w: 'die' },
      { w: 'Maueröffnung' },
      { w: 'erlebt' },
      { w: 'hat' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Was' },
      { w: 'war' },
      { w: 'das' },
      { w: 'für' },
      { w: 'ein' },
      { w: 'Gefühl' },
      { w: 'für' },
      { w: 'sie' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'sagte' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'war' },
      { w: 'einfach' },
      { w: 'unbeschreiblich' },
      { w: '—', plain: true },
      { w: 'alle' },
      { w: 'standen' },
      { w: 'auf' },
      { w: 'der' },
      { w: 'Straße' },
      { w: 'und' },
      { w: 'weinten' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'hat' },
      { w: 'sicher' },
      { w: 'Eindruck' },
      { w: 'gemacht' },
      { w: '.', plain: true },
      { w: 'Hat' },
      { w: 'sie' },
      { w: 'dir' },
      { w: 'auch' },
      { w: 'erzählt' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'es' },
      { w: 'danach' },
      { w: 'weiterging' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'hat' },
      { w: 'noch' },
      { w: 'lange' },
      { w: 'erzählt' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'zeige' },
      { w: 'dir' },
      { w: 'n\u00e4chstes' },
      { w: 'Mal' },
      { w: 'ihre' },
      { w: 'Fotos' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Ines\' Oma erlebt?', qEn: 'What did Ines\' grandma experience?', options: ['einen Umzug', 'die Maueröffnung', 'eine Hochzeit', 'eine Reise'], optionsEn: ['a move', 'the opening of the Wall', 'a wedding', 'a trip'], answer: 1,
        explain: '"… wie sie die Maueröffnung erlebt hat."' },
      { q: 'Was haben die Leute auf der Straße gemacht?', qEn: 'What did people do on the street?', options: ['sie tanzten', 'sie standen und weinten', 'sie schliefen', 'sie arbeiteten'], optionsEn: ['they danced', 'they stood and wept', 'they slept', 'they worked'], answer: 1,
        explain: '"… alle standen auf der Straße und weinten."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, was deine Oma über die Maueröffnung erzählt hat.", taskEn: "A friend asks what your grandmother said about the Wall opening.", de: "Sie hat mir erzählt, wie sie es erlebt hat. Sie sagte, es war unbeschreiblich.", en: "She told me how she experienced it. She said it was indescribable." },
    { task: "Er fragt, wie es in der Familie danach weiterging.", taskEn: "He asks how things went on in the family afterwards.", de: "Wir sind sofort nach Berlin gefahren und haben Verwandte besucht.", en: "We drove to Berlin straight away and visited relatives." },
    { task: "Eine Kollegin fragt nach den Lebensbedingungen damals.", taskEn: "A colleague asks about living conditions back then.", de: "Die Bedingungen waren schwer, und viele hatten Angst.", en: "Conditions were hard, and many people were afraid." },
    { task: "Ein Lernpartner fragt, wie du im Referat erzählen willst.", taskEn: "A study partner asks how you'll narrate in your talk.", de: "Im Referat nehme ich das Präteritum: Deutschland wurde geteilt, die Mauer fiel 1989.", en: "In the talk I'll use the past simple: Germany was divided, the Wall fell in 1989." },
    { task: "Rollenspiel: Ihr sprecht über Familiengeschichten.", taskEn: "Role-play: you talk about family stories.", de: "Meine Großeltern haben viel verloren. Es war eine harte Zeit. — Und meine Familie ist nie ausgereist.", en: "My grandparents lost a lot. It was a hard time. — And my family never left." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Diary entry (Perfekt, 6-8 sentences): Describe your day using mostly Perfekt, with "war"/"hatte"/modal verbs naturally in Präteritum where they belong.\n\nTASK 2 — Newspaper report (Präteritum, 6-8 sentences): Report on a historical or current event using mostly Präteritum, in authentic written style.\n\nCompare both styles when you\'re done.',
    starters: ['Ich habe heute …', 'Der Bericht beschrieb …'],
    placeholder: 'Ich habe heute viel gelernt. Ich war zuerst müde, aber …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which tense is most natural for a spoken, everyday conversation?',
      options: ['Perfekt', 'Präteritum', 'Both equally, always'],
      answer: 0,
      explain: 'Perfekt is the natural choice for spoken/conversational German — everyday talk with friends and family.'
    },
    gap: {
      sentence: ['Ich ', ' gestern krank.'],
      gaps: [ { answer: 'war', accepts: ['war'] } ],
      explain: '"sein" is a common spoken exception — Germans say "ich war" rather than "ich bin gewesen", even in conversation.'
    },
    match: {
      q: 'Match each sentence style to its typical tense.',
      pairs: [
        { noun: 'Gespräch mit Freunden', art: 'Perfekt' },
        { noun: 'Zeitungsartikel', art: 'Präteritum' },
        { noun: 'sein / haben / Modalverben (gesprochen)', art: 'Präteritum (Ausnahme)' },
        { noun: 'Tagebuch', art: 'Perfekt' }
      ]
    },
    builder: {
      target: 'Build: "I read an article yesterday." (spoken Perfekt)',
      bank: ['Ich', 'habe', 'gestern', 'einen', 'Artikel', 'gelesen', '.'],
      answer: ['Ich', 'habe', 'gestern', 'einen', 'Artikel', 'gelesen', '.'],
      roles: { 'habe': 'r-tempus', 'gelesen': 'r-tempus' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich habe lange arbeiten gemusst.',
      right: 'Ich habe lange arbeiten müssen.',
      explain: 'A modal verb carrying a second infinitive forms its Perfekt with the Ersatzinfinitiv (müssen), never the Partizip II (gemusst).'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which tense do Germans mostly use in conversation?', options: ['Perfekt', 'Präteritum', 'Neither'], answer: 0,
      explain: 'Perfekt is the natural spoken choice for everyday conversation.' },
    { q: 'Which tense is typical for newspapers and novels?', options: ['Präteritum', 'Perfekt', 'Neither'], answer: 0,
      explain: 'Präteritum dominates written German — books, newspapers, reports, history.' },
    { q: 'Which of these verbs stays in Präteritum even in spoken German?', options: ['war', 'gelesen', 'gearbeitet'], answer: 0,
      explain: '"war" (sein) is one of the common spoken exceptions — "bin gewesen" sounds unnatural.' },
    { q: 'Is the Perfekt/Präteritum choice mainly about time or style?', options: ['Style/register', 'Time', 'Neither'], answer: 0,
      explain: 'The difference is about STYLE — spoken vs written register — not about WHEN the action happened.' },
    { q: 'Which sentence sounds most natural in spoken German?', options: ['Ich war gestern krank.', 'Ich bin gestern krank gewesen.', 'Ich krank war gestern.'], answer: 0,
      explain: '"war" is the natural spoken form for "sein" in the past, even in conversation.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-tempus', html: 'Perfekt is the natural tense for spoken, everyday German — conversations, daily life, friends, family.' },
    { c: 'r-tempus', html: 'Präteritum is the natural tense for written German — newspapers, novels, reports, formal writing.' },
    { c: 'r-tempus', html: 'A handful of verbs — war, hatte, and all modal verbs (konnte, musste, wollte, durfte, sollte), plus wusste and dachte — stay in Präteritum even in spoken conversation.' }
  ],
  revisionTips: [
    'Read a short news article and a casual text message side by side — notice which tense dominates each.',
    'Practise telling the same short story twice: once as spoken Perfekt, once as written Präteritum.',
    'Memorize the nine common spoken exceptions (sein, haben, and the six modal verbs, plus wissen/denken) — they are the most frequent slip-up.'
  ]
};

window.CHAPTER = CHAPTER;
