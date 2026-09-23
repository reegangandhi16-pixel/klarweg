/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 17
   "Modalsätze: indem" — indem answers "Wie?" (how), expressing
   the METHOD by which something is achieved. Contrasted with
   weil (reason). Verb-end word order like all Nebensätze. Does
   NOT introduce dadurch/dass, um...zu, ohne...zu, or anstatt...zu
   (later chapters).
   IMPORTANT: dialogue uses ONLY Nele and Timo.
   Vocabulary source: uploaded chapter-17 list (55 items, user-edited
   general B2 vocabulary bank — job-application/workplace themes).
============================================================ */
const CHAPTER = {
  id: 'b2-17-modalsaetze-indem',
  phase: 'B2 · Phase 1',
  number: 17,
  title: 'Modalsätze: indem',
  titleEn: 'Modal clauses: indem',
  description: 'weil answers "why". indem answers "how" — the exact method by which something gets done.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 18, title: 'Modalsätze: dadurch, dass', titleEn: 'Modal clauses: dadurch, dass' , href: 'chapter-b2-18-modalsaetze-dadurch-dass.html' },

  prevChapter: { number: 16, title: 'Konsekutivsätze: sodass / infolgedessen', titleEn: 'Consequence clauses: sodass / infolgedessen', href: 'chapter-b2-16-konsekutivsaetze-sodass-infolgedessen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not <em>why</em> — <em>how.</em>',
    intro: 'Nele polishes her cover letter with Timo\'s help — naming concrete examples, mentioning her internship, describing her responsibilities precisely — every improvement explained not by why, but exactly how: indem.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear indem answer "Wie?" across many realistic method sentences'
    ],
    scene: 'Die Bewerbung',
    femaleSpeakers: ['Nele'],
    dialogue: [
      { speaker: 'Nele', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'verbessere', role: 'r-verb', en: 'improve', hi: 'बेहतर बनाती हूँ', pron: 'fer-BE-se-ruh', type: 'Verb · verbessern (ich)' },
        { w: 'mein', role: 'r-akkusativ', en: 'my (neut.)', hi: 'अपना', pron: 'mine', type: 'Possessive · acc.' },
        { w: 'Anschreiben', role: 'r-akkusativ', en: 'cover letter', hi: 'कवर पत्र', pron: 'AN-shry-ben', type: 'Noun · neut.', why: 'das Anschreiben (this chapter).', ex: 'Ich verbessere mein Anschreiben.', exEn: 'I improve my cover letter.' },
        { w: ',', plain: true },
        { w: 'indem', role: 'r-conjunction', en: 'by', hi: 'इसके ज़रिए', pron: 'IN-daym', type: 'Conjunction · indem', why: 'indem = by (doing something), modal clause of manner/means (this chapter).', ex: 'Ich verbessere es, indem ich konkrete Beispiele nenne.', exEn: 'I improve it by naming concrete examples.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'konkrete', role: 'r-akkusativ', en: 'concrete', hi: 'ठोस', pron: 'kon-KRAY-tuh', type: 'Adjective' },
        { w: 'Beispiele', role: 'r-akkusativ', en: 'examples', hi: 'उदाहरण', pron: 'BY-shpee-luh', type: 'Noun · plural' },
        { w: 'nenne', role: 'r-verb', en: 'name', hi: 'बताती हूँ', pron: 'NE-nuh', type: 'Verb · nennen (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I improve my cover letter by naming concrete examples.', hi: 'Main apna cover letter behtar banaati hoon apne udaharan bata kar.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zeigst', role: 'r-verb', en: 'do you show', hi: 'दिखाती हो', pron: 'TSYKST', type: 'Verb · zeigen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'अपनी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Ausdauer', role: 'r-akkusativ', en: 'stamina', hi: 'सहनशक्ति', pron: 'OWS-dow-er', type: 'Noun · fem.', why: 'die Ausdauer (this chapter).', ex: 'deine Ausdauer zeigen' },
        { w: ',', plain: true },
        { w: 'indem', role: 'r-conjunction', en: 'by', hi: 'इसके ज़रिए', pron: 'IN-daym', type: 'Conjunction · indem' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Praktikum', role: 'r-akkusativ', en: 'internship', hi: 'इंटर्नशिप', pron: 'PRAK-ti-kum', type: 'Noun · neut.' },
        { w: 'erwähnst', role: 'r-verb', en: 'mention', hi: 'बताती हो', pron: 'er-VAYNST', type: 'Verb · erwähnen (du, Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you show your stamina by mentioning an internship?', hi: 'Kya tum apni sahansakhti dikhati ho internship batakar?' },
      { speaker: 'Nele', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'दिखाती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'indem', role: 'r-conjunction', en: 'by', hi: 'इसके ज़रिए', pron: 'IN-daym', type: 'Conjunction · indem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (fem.)', hi: 'अपनी', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'Bachelorarbeit', role: 'r-akkusativ', en: 'bachelor thesis', hi: 'स्नातक शोध प्रबंध', pron: 'BE-che-lor-ar-byte', type: 'Noun · fem.', why: 'die Bachelorarbeit (this chapter).', ex: 'meine Bachelorarbeit erwähnen' },
        { w: 'erwähne', role: 'r-verb', en: 'mention', hi: 'बताती हूँ', pron: 'er-VAY-nuh', type: 'Verb · erwähnen (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, I do that by mentioning my bachelor thesis.', hi: 'Haan, main yeh apni bachelor thesis batakar karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'überzeugst', role: 'r-verb', en: 'do you convince', hi: 'कैसे मनाती हो', pron: 'ü-ber-TSOYKST', type: 'Verb · überzeugen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Personalchef', role: 'r-akkusativ', en: 'HR manager', hi: 'मानव संसाधन प्रमुख', pron: 'per-zo-NAHL-shef', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'How do you convince the HR manager?', hi: 'Tum HR manager ko kaise manaati ho?' },
      { speaker: 'Nele', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überzeuge', role: 'r-verb', en: 'convince', hi: 'मनाती हूँ', pron: 'ü-ber-TSOY-guh', type: 'Verb · überzeugen (ich)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'indem', role: 'r-conjunction', en: 'by', hi: 'इसके ज़रिए', pron: 'IN-daym', type: 'Conjunction · indem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mein', role: 'r-akkusativ', en: 'my (neut.)', hi: 'अपना', pron: 'mine', type: 'Possessive · acc.' },
        { w: 'Aufgabengebiet', role: 'r-akkusativ', en: 'area of responsibility', hi: 'कार्यक्षेत्र', pron: 'OWF-gah-ben-ge-beet', type: 'Noun · neut.', why: 'das Aufgabengebiet (this chapter).', ex: 'mein Aufgabengebiet beschreibe' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'beschreibe', role: 'r-verb', en: 'describe', hi: 'वर्णन करती हूँ', pron: 'be-SHRY-buh', type: 'Verb · beschreiben (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I convince him by precisely describing my area of responsibility.', hi: 'Main use apna karyakshetra theek se varnan karke manaati hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">weil</span> answers "Why?" — <span class="de r-indem">indem</span> answers "Wie?" (How?). It always names the exact METHOD by which a goal is reached: <span class="de">Anna verbessert ihr Deutsch, indem sie jeden Tag liest.</span> — the goal is improving her German, the method is reading every day.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALSÄTZE MIT INDEM (B2 level): "indem" answers the question "Wie?" (How?) — it introduces a subordinate clause naming the exact METHOD by which a goal is achieved, with verb-final word order (Anna verbessert ihr Deutsch, indem sie jeden Tag liest.). Contrasted with "weil", which answers "Warum?" (Why? — the reason). "indem" can also front the clause (Indem sie viele Übungen macht, lernt sie schneller.). Typical verbs used with "indem": verbessern, lernen, erreichen, lösen, unterstützen, reduzieren, entwickeln, optimieren, steigern, fördern, vermeiden. Common in reports, presentations, business German, and academic writing. ' +
    'Do NOT expect dadurch/dass, um...zu, ohne...zu, or anstatt...zu — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "indem"-clauses must have verb-final word order, separated from the main clause by a comma.\n' +
    '- "indem" must express a METHOD (how something is done), not a REASON (why) — if the learner uses "indem" where "weil" is meant, flag it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Method vs reason check:</b> one sentence on whether the learner correctly used "indem" for method and "weil" for reason.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "indem" to express method with proper verb-final word order. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the indem vs weil comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: indem = How. It explains the METHOD, not the REASON.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'lernt', role: 'plain' },
    { w: 'schneller', role: 'plain' }, { w: ',', plain: true }, { w: 'indem', role: 'r-indem' }, { w: 'sie', role: 'plain' }, { w: 'übt', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: indem names the exact method, not the reason.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nele and Timo polish a job application, explaining HOW they\'ll stand out.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master indem word order, position variations, and indem vs weil.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of indem method sentences.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the goal, the method, and why indem is used.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain methods and give study tips using indem naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and process explanations using indem appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill weil-vs-indem, sentence building, and error correction.' },
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
      desc: 'weil-vs-indem drills, sentence building, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete indem reference — word order, position variations, weil comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna verbessert ihr Deutsch, indem sie liest.', text: 'Use indem to name the method behind a goal' },
    { de: 'Indem sie viele Übungen macht, lernt sie schneller.', text: 'Front the indem-clause correctly' },
    { de: 'weil (Warum?) vs. indem (Wie?)', text: 'Distinguish reason from method' },
    { de: 'verbessern, lösen, entwickeln, reduzieren …', text: 'Use common indem verbs naturally' },
    { de: 'Formal reports, presentations, business German', text: 'Use indem naturally in professional writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-17 list) ----------
  vocab: [
    { de: 'zutrauen', pos: 'verb', level: 'B2', en: 'to trust (someone to do something)', hi: 'भरोसा करना', ex: 'Ich traue ihr zu, das Projekt zu leiten.', exEn: 'I trust her to lead the project.', exHi: 'Mujhe uspar bharosa hai ki woh project ka netritva kar sakti hai.', ex2: 'Sie traut ihm die Aufgabe nicht zu.', ex2En: 'She doesn\'t trust him to do the task.', ex2Hi: 'Use uspar us kaam ka bharosa nahi hai.', conj: { praesens: 'traut zu', praeteritum: 'traute zu', perfekt: 'hat zugetraut' } },
    { de: 'Abfahrt', art: 'die', gender: 'f', plural: 'Abfahrten', pos: 'noun', level: 'B2', en: 'departure, descent', hi: 'प्रस्थान', ex: 'Die Abfahrt ist um acht Uhr.', exEn: 'The departure is at eight o\'clock.', exHi: 'Prasthaan aath baje hai.', ex2: 'Wir verpassten die Abfahrt.', ex2En: 'We missed the departure.', ex2Hi: 'Hum prasthaan chook gaye.' },
    { de: 'abgeschlossen', pos: 'adjective', level: 'B2', en: 'completed, closed off', hi: 'पूर्ण', ex: 'Meine Bachelorarbeit ist noch nicht abgeschlossen.', exEn: 'My bachelor\'s thesis isn\'t completed yet.', exHi: 'Meri bachelor thesis abhi poori nahi hui hai.', ex2: 'Das Projekt ist erfolgreich abgeschlossen.', ex2En: 'The project is successfully completed.', ex2Hi: 'Project safaltapoorvak poora ho gaya hai.' },
    { de: 'Absprache', art: 'die', gender: 'f', plural: 'Absprachen', pos: 'noun', level: 'B2', en: 'agreement, arrangement', hi: 'सहमति', ex: 'Nach Absprache können wir den Termin ändern.', exEn: 'By agreement we can change the appointment.', exHi: 'Sehmati se hum appointment badal sakte hain.', ex2: 'Die Absprache wurde eingehalten.', ex2En: 'The agreement was kept.', ex2Hi: 'Sehmati ka paalan kiya gaya.' },
    { de: 'Anbau', art: 'der', gender: 'm', plural: 'Anbauten', pos: 'noun', level: 'B2', en: 'cultivation, extension', hi: 'खेती, विस्तार', ex: 'Der Anbau von Baumwolle ist wasserintensiv.', exEn: 'The cultivation of cotton is water-intensive.', exHi: 'Kapaas ki kheti paani mein bharpoor hoti hai.', ex2: 'Sie planen einen Anbau am Haus.', ex2En: 'They\'re planning an extension to the house.', ex2Hi: 'Woh ghar mein ek vistaar ki yojana bana rahe hain.' },
    { de: 'Anschreiben', art: 'das', gender: 'n', plural: 'Anschreiben', pos: 'noun', level: 'B2', en: 'cover letter', hi: 'कवर लेटर', ex: 'Ich verbessere mein Anschreiben, indem ich jeden Satz aussagekräftiger formuliere.', exEn: 'I improve my cover letter by formulating every sentence more meaningfully.', exHi: 'Main har vaakya ko adhik arthapoorn banaate hue apna cover letter sudhaarti hoon.', ex2: 'Das Anschreiben sollte kurz und klar sein.', ex2En: 'The cover letter should be short and clear.', ex2Hi: 'Cover letter chhota aur spasht hona chahiye.' },
    { de: 'Anschrift', art: 'die', gender: 'f', plural: 'Anschriften', pos: 'noun', level: 'B2', en: 'address', hi: 'पता', ex: 'Bitte geben Sie Ihre Anschrift an.', exEn: 'Please provide your address.', exHi: 'Kripya apna pata batayein.', ex2: 'Die Anschrift hat sich geändert.', ex2En: 'The address has changed.', ex2Hi: 'Pata badal gaya hai.' },
    { de: 'Ansehen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'reputation, prestige', hi: 'प्रतिष्ठा', ex: 'Unser Ansehen wächst, indem wir ein positives Arbeitsumfeld schaffen.', exEn: 'Our reputation grows by us creating a positive work environment.', exHi: 'Hum ek sakaraatmak kaarya vaataavaran banaate hue apni pratishtha badhaate hain.', ex2: 'Sein Ansehen in der Branche ist hoch.', ex2En: 'His reputation in the industry is high.', ex2Hi: 'Industry mein uski pratishtha uchi hai.' },
    { de: 'anspruchsvoll', pos: 'adjective', level: 'B2', en: 'demanding, sophisticated', hi: 'उच्च-स्तरीय', ex: 'Indem ich meine EDV-Kenntnisse erwähne, wirke ich anspruchsvoller.', exEn: 'By mentioning my IT skills, I seem more sophisticated.', exHi: 'Apne IT kaushal ka ullekh karke, main adhik uchch-stariya lagti hoon.', ex2: 'Die Aufgabe ist sehr anspruchsvoll.', ex2En: 'The task is very demanding.', ex2Hi: 'Kaam bahut mushkil hai.' },
    { de: 'Arbeitslose/r', art: 'der/die', gender: 'm/f', plural: 'Arbeitslose', pos: 'noun', level: 'B2', en: 'unemployed person', hi: 'बेरोज़गार व्यक्ति', ex: 'Viele Arbeitslose suchen neue Chancen.', exEn: 'Many unemployed people are looking for new opportunities.', exHi: 'Kai berozgaar log nayi sambhaavnaayein dhoondte hain.', ex2: 'Die Zahl der Arbeitslosen ist gesunken.', ex2En: 'The number of unemployed people has decreased.', ex2Hi: 'Berozgaaron ki sankhya kam hui hai.' },
    { de: 'Arbeitsumfeld', art: 'das', gender: 'n', plural: 'Arbeitsumfelder', pos: 'noun', level: 'B2', en: 'work environment', hi: 'कार्य वातावरण', ex: 'Unser Ansehen wächst, indem wir ein positives Arbeitsumfeld schaffen.', exEn: 'Our reputation grows by us creating a positive work environment.', exHi: 'Hum ek sakaraatmak kaarya vaataavaran banaate hue apni pratishtha badhaate hain.', ex2: 'Das Arbeitsumfeld ist sehr angenehm.', ex2En: 'The work environment is very pleasant.', ex2Hi: 'Kaarya vaataavaran bahut suhaavna hai.' },
    { de: 'Arbeitsweise', art: 'die', gender: 'f', plural: 'Arbeitsweisen', pos: 'noun', level: 'B2', en: 'way of working', hi: 'काम करने का तरीका', ex: 'Ihre Arbeitsweise ist sehr strukturiert.', exEn: 'Her way of working is very structured.', exHi: 'Uske kaam karne ka tareeka bahut vyavasthit hai.', ex2: 'Die Arbeitsweise hat sich verändert.', ex2En: 'The way of working has changed.', ex2Hi: 'Kaam karne ka tareeka badal gaya hai.' },
    { de: 'arrogant', pos: 'adjective', level: 'B2', en: 'arrogant', hi: 'अभिमानी', ex: 'Ich wirke nicht arrogant, indem ich meine Fehler eingestehe.', exEn: 'I don\'t seem arrogant by admitting my mistakes.', exHi: 'Main apni galtiyaan sweekaar karke abhimaani nahi lagta.', ex2: 'Er wirkte etwas arrogant.', ex2En: 'He seemed a bit arrogant.', ex2Hi: 'Woh thoda abhimaani lag raha tha.' },
    { de: 'Arztpraxis', art: 'die', gender: 'f', plural: 'Arztpraxen', pos: 'noun', level: 'B2', en: 'doctor\'s practice', hi: 'डॉक्टर का क्लीनिक', ex: 'Die Arztpraxis ist heute geschlossen.', exEn: 'The doctor\'s practice is closed today.', exHi: 'Doctor ka clinic aaj band hai.', ex2: 'Ich habe einen Termin in der Arztpraxis.', ex2En: 'I have an appointment at the doctor\'s practice.', ex2Hi: 'Mera clinic mein appointment hai.' },
    { de: 'Atmosphäre', art: 'die', gender: 'f', plural: 'Atmosphären', pos: 'noun', level: 'B2', en: 'atmosphere', hi: 'वातावरण', ex: 'Die Atmosphäre im Büro ist entspannt.', exEn: 'The atmosphere in the office is relaxed.', exHi: 'Office ka vaataavaran shaant hai.', ex2: 'Eine gute Atmosphäre fördert die Kreativität.', ex2En: 'A good atmosphere promotes creativity.', ex2Hi: 'Achha vaataavaran rachnaatmakta ko badhaata hai.' },
    { de: 'Aufgabengebiet', art: 'das', gender: 'n', plural: 'Aufgabengebiete', pos: 'noun', level: 'B2', en: 'area of responsibility', hi: 'ज़िम्मेदारी का क्षेत्र', ex: 'Die Bewerberin erweitert ihr Aufgabengebiet, indem sie sich aktiv einbringt.', exEn: 'The applicant expands her area of responsibility by actively contributing.', exHi: 'Aavedak sakriya roop se yogdaan dete hue apna zimmedaari kshetra badhaati hai.', ex2: 'Sein Aufgabengebiet umfasst Marketing und Vertrieb.', ex2En: 'His area of responsibility includes marketing and sales.', ex2Hi: 'Uske zimmedaari kshetra mein marketing aur sales shaamil hai.' },
    { de: 'Aufsehen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'sensation, stir', hi: 'सनसनी', ex: 'Die Nachricht erregte großes Aufsehen.', exEn: 'The news caused a great sensation.', exHi: 'Khabar ne bahut sansani macha di.', ex2: 'Der Vorfall sorgte für Aufsehen.', ex2En: 'The incident caused a stir.', ex2Hi: 'Ghatna ne halchal macha di.' },
    { de: 'Ausdauer', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'stamina, endurance', hi: 'सहनशक्ति', ex: 'Ich zeige meine Ausdauer, indem ich schwierige Aufgaben durchhalte.', exEn: 'I show my stamina by enduring difficult tasks.', exHi: 'Main kathin kaaryon ko sahan karke apni sahansheelta dikhaata hoon.', ex2: 'Ausdauer ist beim Marathonlaufen wichtig.', ex2En: 'Endurance is important in marathon running.', ex2Hi: 'Marathon daudne mein sahansheelta mahatvapurn hai.' },
    { de: 'ausgesprochen', pos: 'adjective', level: 'B2', en: 'pronounced, spoken; decidedly', hi: 'स्पष्ट रूप से', ex: 'Das war eine ausgesprochen gute Idee.', exEn: 'That was a decidedly good idea.', exHi: 'Yeh ek bilkul achha vichaar tha.', ex2: 'Ihre Meinung war ausgesprochen deutlich.', ex2En: 'Her opinion was decidedly clear.', ex2Hi: 'Uski raay bilkul spasht thi.' },
    { de: 'aussagekräftig', pos: 'adjective', level: 'B2', en: 'meaningful, telling', hi: 'अर्थपूर्ण', ex: 'Ich verbessere mein Anschreiben, indem ich jeden Satz aussagekräftiger formuliere.', exEn: 'I improve my cover letter by formulating every sentence more meaningfully.', exHi: 'Main har vaakya ko adhik arthapoorn banaate hue apna cover letter sudhaarti hoon.', ex2: 'Die Statistik ist sehr aussagekräftig.', ex2En: 'The statistic is very telling.', ex2Hi: 'Aankada bahut kuch bataata hai.' },
    { de: 'Ausweg', art: 'der', gender: 'm', plural: 'Auswege', pos: 'noun', level: 'B2', en: 'way out', hi: 'रास्ता', ex: 'Man entwickelt einen Ausweg aus jeder Krise, indem man ruhig bleibt.', exEn: 'One develops a way out of every crisis by staying calm.', exHi: 'Shaanti se rehte hue, koi bhi har sankat se ek raasta dhoond leta hai.', ex2: 'Es gibt keinen einfachen Ausweg.', ex2En: 'There is no easy way out.', ex2Hi: 'Koi aasaan raasta nahi hai.' },
    { de: 'Bachelor', art: 'der', gender: 'm', plural: 'Bachelor', pos: 'noun', level: 'B2', en: 'bachelor\'s degree', hi: 'स्नातक डिग्री', ex: 'Sie hat einen Bachelor in BWL.', exEn: 'She has a bachelor\'s degree in business.', exHi: 'Uske paas business mein bachelor degree hai.', ex2: 'Der Bachelor dauert meist drei Jahre.', ex2En: 'The bachelor\'s degree usually takes three years.', ex2Hi: 'Bachelor degree aksar teen saal ki hoti hai.' },
    { de: 'Bachelorarbeit', art: 'die', gender: 'f', plural: 'Bachelorarbeiten', pos: 'noun', level: 'B2', en: 'bachelor\'s thesis', hi: 'स्नातक थीसिस', ex: 'Ich gestehe ein, dass meine Bachelorarbeit noch nicht abgeschlossen ist.', exEn: 'I admit that my bachelor\'s thesis isn\'t completed yet.', exHi: 'Main sweekaar karti hoon ki meri bachelor thesis abhi poori nahi hui hai.', ex2: 'Die Bachelorarbeit muss bis Juni fertig sein.', ex2En: 'The bachelor\'s thesis must be finished by June.', ex2Hi: 'Bachelor thesis June tak poori honi chahiye.' },
    { de: 'Banklehre', art: 'die', gender: 'f', plural: 'Banklehren', pos: 'noun', level: 'B2', en: 'bank traineeship', hi: 'बैंक प्रशिक्षुता', ex: 'Er macht eine Banklehre.', exEn: 'He is doing a bank traineeship.', exHi: 'Woh bank prashikshuta kar raha hai.', ex2: 'Die Banklehre dauert drei Jahre.', ex2En: 'The bank traineeship lasts three years.', ex2Hi: 'Bank prashikshuta teen saal ki hoti hai.' },
    { de: 'Baumwolle', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'cotton', hi: 'कपास', ex: 'Der Anbau von Baumwolle ist wasserintensiv.', exEn: 'The cultivation of cotton is water-intensive.', exHi: 'Kapaas ki kheti paani mein bharpoor hoti hai.', ex2: 'Das Hemd ist aus reiner Baumwolle.', ex2En: 'The shirt is made of pure cotton.', ex2Hi: 'Shirt shuddh kapaas se banii hai.' },
    { de: 'Bauzeichner/in', art: 'der/die', gender: 'm/f', plural: 'Bauzeichner/innen', pos: 'noun', level: 'B2', en: 'draughtsperson', hi: 'डिज़ाइनर', ex: 'Der Bauzeichner erstellt die Pläne.', exEn: 'The draughtsperson creates the plans.', exHi: 'Designer plans banaata hai.', ex2: 'Sie arbeitet als Bauzeichnerin.', ex2En: 'She works as a draughtsperson.', ex2Hi: 'Woh designer ke roop mein kaam karti hai.' },
    { de: 'Befragte/r', art: 'der/die', gender: 'm/f', plural: 'Befragte', pos: 'noun', level: 'B2', en: 'respondent, interviewee', hi: 'उत्तरदाता', ex: 'Die Mehrheit der Befragten stimmte zu.', exEn: 'The majority of respondents agreed.', exHi: 'Uttardataaon ka bahumat sahmat tha.', ex2: 'Ein Befragter äußerte Bedenken.', ex2En: 'One respondent expressed concerns.', ex2Hi: 'Ek uttardata ne chinta jataayi.' },
    { de: 'Bestandteil', art: 'der', gender: 'm', plural: 'Bestandteile', pos: 'noun', level: 'B2', en: 'component, part', hi: 'घटक', ex: 'Teamarbeit ist ein wichtiger Bestandteil des Projekts.', exEn: 'Teamwork is an important component of the project.', exHi: 'Team kaarya project ka mahatvapurn hissa hai.', ex2: 'Jeder Bestandteil hat seine Funktion.', ex2En: 'Every component has its function.', ex2Hi: 'Har ghatak ka apna kaam hai.' },
    { de: 'Betreffzeile', art: 'die', gender: 'f', plural: 'Betreffzeilen', pos: 'noun', level: 'B2', en: 'subject line', hi: 'विषय पंक्ति', ex: 'Die Betreffzeile sollte klar formuliert sein.', exEn: 'The subject line should be clearly formulated.', exHi: 'Vishay panktee spasht honi chahiye.', ex2: 'Ohne Betreffzeile wirkt die E-Mail unprofessionell.', ex2En: 'Without a subject line, the email seems unprofessional.', ex2Hi: 'Vishay panktee ke bina email agair-vyavasaayik lagta hai.' },
    { de: 'bewältigen', pos: 'verb', level: 'B2', en: 'to cope with, manage', hi: 'सामना करना', ex: 'Ich bewältige den Stress, indem ich eine Checkliste benutze.', exEn: 'I cope with the stress by using a checklist.', exHi: 'Main ek soochi ka upyog karke tanaav ka saamna karta hoon.', ex2: 'Sie bewältigt jede Herausforderung gelassen.', ex2En: 'She copes with every challenge calmly.', ex2Hi: 'Woh har chunauti ka shaanti se saamna karti hai.', conj: { praesens: 'bewältigt', praeteritum: 'bewältigte', perfekt: 'hat bewältigt' } },
    { de: 'Bewerber/in', art: 'der/die', gender: 'm/f', plural: 'Bewerber/innen', pos: 'noun', level: 'B2', en: 'applicant', hi: 'आवेदक', ex: 'Die Bewerberin erweitert ihr Aufgabengebiet, indem sie sich aktiv einbringt.', exEn: 'The applicant expands her area of responsibility by actively contributing.', exHi: 'Aavedak sakriya roop se yogdaan dete hue apna zimmedaari kshetra badhaati hai.', ex2: 'Viele Bewerber haben sich beworben.', ex2En: 'Many applicants have applied.', ex2Hi: 'Kai aavedakon ne aavedan kiya hai.' },
    { de: 'Billiglohnland', art: 'das', gender: 'n', plural: 'Billiglohnländer', pos: 'noun', level: 'B2', en: 'low-wage country', hi: 'कम-मज़दूरी वाला देश', ex: 'Die Produktion wurde in ein Billiglohnland verlagert.', exEn: 'Production was relocated to a low-wage country.', exHi: 'Utpaadan kam-mazdoori waale desh mein sthaanaantarit hua.', ex2: 'Billiglohnländer bieten geringere Kosten.', ex2En: 'Low-wage countries offer lower costs.', ex2Hi: 'Kam-mazdoori waale desh kam kharch dete hain.' },
    { de: 'bisherig', pos: 'adjective', level: 'B2', en: 'previous, so far', hi: 'पिछला', ex: 'Trotzdem überzeuge ich, indem ich meinen bisherigen Werdegang betone.', exEn: 'Still, I convince by emphasizing my previous career path.', exHi: 'Phir bhi, main apna pichla career path zor dete hue vishvaas dilaati hoon.', ex2: 'Der bisherige Verlauf war erfolgreich.', ex2En: 'The previous course was successful.', ex2Hi: 'Pichla kram safal raha.' },
    { de: 'Blogger/in', art: 'der/die', gender: 'm/f', plural: 'Blogger/innen', pos: 'noun', level: 'B2', en: 'blogger', hi: 'ब्लॉगर', ex: 'Sie ist eine bekannte Bloggerin.', exEn: 'She is a well-known blogger.', exHi: 'Woh ek prasiddh blogger hai.', ex2: 'Der Blogger schreibt über Reisen.', ex2En: 'The blogger writes about travel.', ex2Hi: 'Blogger yatra ke baare mein likhta hai.' },
    { de: 'Budget', art: 'das', gender: 'n', plural: 'Budgets', pos: 'noun', level: 'B2', en: 'budget', hi: 'बजट', ex: 'Wir müssen im Rahmen des Budgets bleiben.', exEn: 'We have to stay within the budget.', exHi: 'Humein budget ke andar rehna hoga.', ex2: 'Das Budget wurde erhöht.', ex2En: 'The budget was increased.', ex2Hi: 'Budget badhaaya gaya.' },
    { de: 'Bürokauffrau', art: 'die', gender: 'f', plural: 'Bürokauffrauen', pos: 'noun', level: 'B2', en: 'office administrator (f.)', hi: 'कार्यालय प्रशासक', ex: 'Die Bürokauffrau demotiviert niemanden, indem sie immer konstruktives Feedback gibt.', exEn: 'The office administrator demotivates nobody by always giving constructive feedback.', exHi: 'Karyaalay prashaasak hamesha rachnaatmak feedback dekar kisi ko hatotsaahit nahi karti.', ex2: 'Die Bürokauffrau organisiert die Termine.', ex2En: 'The office administrator organizes the appointments.', ex2Hi: 'Karyaalay prashaasak appointments ka aayojan karti hai.' },
    { de: 'Catering', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'catering', hi: 'खानपान सेवा', ex: 'Das Catering für die Feier ist organisiert.', exEn: 'The catering for the celebration is organized.', exHi: 'Celebration ke liye khanpaan seva ka aayojan ho gaya hai.', ex2: 'Sie buchten ein professionelles Catering.', ex2En: 'They booked professional catering.', ex2Hi: 'Unhone professional khanpaan seva book ki.' },
    { de: 'Checkliste', art: 'die', gender: 'f', plural: 'Checklisten', pos: 'noun', level: 'B2', en: 'checklist', hi: 'सूची', ex: 'Ich bewältige den Stress, indem ich eine Checkliste benutze.', exEn: 'I cope with the stress by using a checklist.', exHi: 'Main ek soochi ka upyog karke tanaav ka saamna karta hoon.', ex2: 'Die Checkliste hilft, nichts zu vergessen.', ex2En: 'The checklist helps not to forget anything.', ex2Hi: 'Soochi kuch bhi bhoolne se rokti hai.' },
    { de: 'Datumsangabe', art: 'die', gender: 'f', plural: 'Datumsangaben', pos: 'noun', level: 'B2', en: 'date specification', hi: 'तारीख विवरण', ex: 'Die Datumsangabe fehlt im Dokument.', exEn: 'The date specification is missing in the document.', exHi: 'Document mein taareekh vivaran gaayab hai.', ex2: 'Bitte prüfen Sie die Datumsangabe.', ex2En: 'Please check the date specification.', ex2Hi: 'Kripya taareekh vivaran jaanchein.' },
    { de: 'Dauer', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'duration', hi: 'अवधि', ex: 'Die Dauer der Ausbildung beträgt drei Jahre.', exEn: 'The duration of the training is three years.', exHi: 'Prashikshan ki avadhi teen saal hai.', ex2: 'Die Dauer des Fluges war lang.', ex2En: 'The duration of the flight was long.', ex2Hi: 'Udaan ki avadhi lambi thi.' },
    { de: 'dekorieren', pos: 'verb', level: 'B2', en: 'to decorate', hi: 'सजाना', ex: 'Sie dekoriert den Raum für die Feier.', exEn: 'She decorates the room for the celebration.', exHi: 'Woh celebration ke liye kamra sajaati hai.', ex2: 'Der Saal wurde festlich dekoriert.', ex2En: 'The hall was festively decorated.', ex2Hi: 'Hall ko utsavi tareeke se sajaaya gaya.', conj: { praesens: 'dekoriert', praeteritum: 'dekorierte', perfekt: 'hat dekoriert' } },
    { de: 'demotivieren', pos: 'verb', level: 'B2', en: 'to demotivate', hi: 'हतोत्साहित करना', ex: 'Die Bürokauffrau demotiviert niemanden, indem sie immer konstruktives Feedback gibt.', exEn: 'The office administrator demotivates nobody by always giving constructive feedback.', exHi: 'Karyaalay prashaasak hamesha rachnaatmak feedback dekar kisi ko hatotsaahit nahi karti.', ex2: 'Negative Kritik kann demotivieren.', ex2En: 'Negative criticism can demotivate.', ex2Hi: 'Nakaaraatmak aalochana hatotsaahit kar sakti hai.', conj: { praesens: 'demotiviert', praeteritum: 'demotivierte', perfekt: 'hat demotiviert' } },
    { de: 'Design', art: 'das', gender: 'n', plural: 'Designs', pos: 'noun', level: 'B2', en: 'design', hi: 'डिज़ाइन', ex: 'Das Design der Webseite ist modern.', exEn: 'The design of the website is modern.', exHi: 'Website ka design aadhunik hai.', ex2: 'Das neue Design gefällt allen.', ex2En: 'Everyone likes the new design.', ex2Hi: 'Naya design sabko pasand aata hai.' },
    { de: 'Dokument', art: 'das', gender: 'n', plural: 'Dokumente', pos: 'noun', level: 'B2', en: 'document', hi: 'दस्तावेज़', ex: 'Bitte senden Sie mir das Dokument.', exEn: 'Please send me the document.', exHi: 'Kripya mujhe dastaavez bhejein.', ex2: 'Das Dokument ist unterschrieben.', ex2En: 'The document is signed.', ex2Hi: 'Dastaavez par hastaakshar ho gaye hain.' },
    { de: 'doof', pos: 'adjective', level: 'B2', en: 'stupid, dumb', hi: 'बेवकूफ़', ex: 'Das war eine doofe Idee.', exEn: 'That was a dumb idea.', exHi: 'Yeh ek bevakoof vichaar tha.', ex2: 'Er fühlte sich doof.', ex2En: 'He felt stupid.', ex2Hi: 'Use bevakoof jaisa laga.' },
    { de: 'drauf', pos: 'adverb', level: 'B2', en: 'on it, on top', hi: 'उस पर', ex: 'Leg das Buch drauf.', exEn: 'Put the book on top.', exHi: 'Kitaab uspar rakh do.', ex2: 'Er kam gut drauf.', ex2En: 'He was in a good mood.', ex2Hi: 'Woh achhe mood mein tha.' },
    { de: 'durchhalten', pos: 'verb', level: 'B2', en: 'to hold out, endure', hi: 'सहन करना', ex: 'Ich zeige meine Ausdauer, indem ich schwierige Aufgaben durchhalte.', exEn: 'I show my stamina by enduring difficult tasks.', exHi: 'Main kathin kaaryon ko sahan karke apni sahansheelta dikhaata hoon.', ex2: 'Er hat den Marathon durchgehalten.', ex2En: 'He endured the marathon.', ex2Hi: 'Usne marathon sahan kiya.', conj: { praesens: 'hält durch', praeteritum: 'hielt durch', perfekt: 'hat durchgehalten' } },
    { de: 'EDV', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'electronic data processing (IT)', hi: 'इलेक्ट्रॉनिक डेटा प्रोसेसिंग', ex: 'Die EDV-Abteilung ist im dritten Stock.', exEn: 'The IT department is on the third floor.', exHi: 'IT vibhaag teesri manzil par hai.', ex2: 'Er arbeitet in der EDV.', ex2En: 'He works in IT.', ex2Hi: 'Woh IT mein kaam karta hai.' },
    { de: 'EDV-Kenntnisse', art: 'die', gender: 'f', plural: '(nur Plural)', pos: 'noun', level: 'B2', en: 'IT skills', hi: 'आईटी कौशल', ex: 'Indem ich meine EDV-Kenntnisse erwähne, wirke ich anspruchsvoller.', exEn: 'By mentioning my IT skills, I seem more sophisticated.', exHi: 'Apne IT kaushal ka ullekh karke, main adhik uchch-stariya lagti hoon.', ex2: 'Gute EDV-Kenntnisse sind heute wichtig.', ex2En: 'Good IT skills are important today.', ex2Hi: 'Aaj achhe IT kaushal mahatvapurn hain.' },
    { de: 'einbringen', pos: 'verb', level: 'B2', en: 'to bring in, contribute', hi: 'योगदान देना', ex: 'Die Bewerberin erweitert ihr Aufgabengebiet, indem sie sich aktiv einbringt.', exEn: 'The applicant expands her area of responsibility by actively contributing.', exHi: 'Aavedak sakriya roop se yogdaan dete hue apna zimmedaari kshetra badhaati hai.', ex2: 'Er bringt viele Ideen ein.', ex2En: 'He contributes many ideas.', ex2Hi: 'Woh kai vichaar deta hai.', conj: { praesens: 'bringt ein', praeteritum: 'brachte ein', perfekt: 'hat eingebracht' } },
    { de: 'eingestehen', pos: 'verb', level: 'B2', en: 'to admit, confess', hi: 'स्वीकार करना', ex: 'Ich wirke nicht arrogant, indem ich meine Fehler eingestehe.', exEn: 'I don\'t seem arrogant by admitting my mistakes.', exHi: 'Main apni galtiyaan sweekaar karke abhimaani nahi lagta.', ex2: 'Sie gestand ihren Irrtum ein.', ex2En: 'She admitted her mistake.', ex2Hi: 'Usne apni galti sweekaar ki.', conj: { praesens: 'gesteht ein', praeteritum: 'gestand ein', perfekt: 'hat eingestanden' } },
    { de: 'einrichten', pos: 'verb', level: 'B2', en: 'to furnish, set up, arrange', hi: 'व्यवस्थित करना', ex: 'Sie richtet ihr neues Büro ein.', exEn: 'She is furnishing her new office.', exHi: 'Woh apna naya office set up kar rahi hai.', ex2: 'Wir haben ein System eingerichtet.', ex2En: 'We have set up a system.', ex2Hi: 'Humne ek system set up kiya hai.', conj: { praesens: 'richtet ein', praeteritum: 'richtete ein', perfekt: 'hat eingerichtet' } },
    { de: 'Event', art: 'das', gender: 'n', plural: 'Events', pos: 'noun', level: 'B2', en: 'event', hi: 'आयोजन', ex: 'Das Event war ein großer Erfolg.', exEn: 'The event was a great success.', exHi: 'Aayojan ek badi safalta thi.', ex2: 'Sie plant das nächste Event.', ex2En: 'She is planning the next event.', ex2Hi: 'Woh agla aayojan plan kar rahi hai.' },
    { de: 'Eventmarketing', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'event marketing', hi: 'आयोजन मार्केटिंग', ex: 'Er arbeitet im Eventmarketing.', exEn: 'He works in event marketing.', exHi: 'Woh event marketing mein kaam karta hai.', ex2: 'Eventmarketing verbindet Erlebnis und Werbung.', ex2En: 'Event marketing combines experience and advertising.', ex2Hi: 'Event marketing anubhav aur vigyaapan ko jodta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "indem"?',
      body: [ '"indem" answers the question "Wie?" (How?) — it names the method by which something happens.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna verbessert ihr Deutsch, indem sie jeden Tag liest.</span>'],
          ['<span class="de">Rohan spart Geld, indem er jeden Tag zu Hause kocht.</span>']
        ]
      },
      hinglish: '"indem" is sawaal ka jawaab deta hai ki kaam <b>kaise</b> hota hai. Matlab yeh us tareeke ko batata hai jisse result aata hai.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'The main clause comes first, then "indem" introduces the Nebensatz with verb-final word order.' ],
      table: {
        head: ['Main Clause', 'indem-Nebensatz'],
        rows: [
          ['Ich lerne Deutsch,', 'indem ich jeden Tag spreche.'],
          ['Sie verbessert ihre Aussprache,', 'indem sie Podcasts hört.']
        ]
      },
      hinglish: 'Pehle main clause aata hai, aur uske baad "indem" wala clause \u2014 jiska verb sentence ke end mein chala jaata hai.'
    },
    {
      title: 'Hauptsatz zuerst vs. Nebensatz zuerst',
      body: [ 'The indem-clause can also come first, followed by a comma and the main clause starting with the verb.' ],
      table: {
        head: ['Order', 'Example'],
        rows: [
          ['Main Clause first', '<span class="de">Anna lernt schneller, indem sie viele Übungen macht.</span>'],
          ['indem-clause first', '<span class="de">Indem Anna viele Übungen macht, lernt sie schneller.</span>']
        ]
      },
      hinglish: 'indem-clause ko aage bhi rakh sakte ho. Aise case mein comma ke baad main clause apne verb se shuru hoga.'
    },
    {
      title: 'indem vs. weil',
      body: [ 'Never confuse method with reason — they answer different questions.' ],
      table: {
        head: ['weil (Warum? / Reason)', 'indem (Wie? / Method)'],
        rows: [
          ['<span class="de">Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.</span>', '<span class="de">Ich lerne Deutsch, indem ich jeden Tag übe.</span>']
        ]
      },
      hinglish: 'Method aur reason ko mila mat do \u2014 dono alag sawaalon ka jawaab dete hain. <b>weil</b> batata hai kyun, aur <b>indem</b> batata hai kaise.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show indem in workplace and university contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Die Firma verbessert ihre Produkte, indem sie regelmäßig Kundenfeedback sammelt.</span>'],
          ['<span class="de">Viele Studenten bestehen die Prüfung, indem sie systematisch lernen.</span>'],
          ['<span class="de">Das Unternehmen spart Kosten, indem es digitale Prozesse nutzt.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki indem asli mein kahan aata hai \u2014 office aur university ki formal writing mein.'
    },
    {
      title: 'Typische Verben mit "indem"',
      body: [ 'These verbs commonly appear in the main clause of indem-sentences.' ],
      table: {
        head: ['Verbs'],
        rows: [
          ['<span class="de">verbessern, lernen, erreichen, lösen, unterstützen, reduzieren, entwickeln, optimieren, steigern, fördern, vermeiden</span>']
        ]
      },
      hinglish: 'Yeh verbs aksar indem wale sentences ke main clause mein aate hain, isliye inhe saath mein yaad rakhna kaam ka hai.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"indem" is common in reports, presentations, business German, and academic writing — it makes you sound more professional.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong word order, missing commas, or mixing up method with reason.' ],
      mistakes: [
        { wrong: 'Ich lerne Deutsch, indem ich nach Deutschland gehen will.', right: 'Ich lerne Deutsch, weil ich nach Deutschland gehen will.', why: 'The word order is fine here, but the meaning is not: a wish is a REASON, so it needs "weil". "indem" only introduces the method you use \u2014 e.g. "indem ich jeden Tag \u00fcbe".' },
        { wrong: 'Indem ich lerne Deutsch...', right: 'Indem ich Deutsch lerne...', why: 'The verb must go to the END of the indem-clause: "Deutsch lerne", not "lerne Deutsch".' },
        { wrong: 'Anna verbessert Deutsch indem sie liest.', right: 'Anna verbessert Deutsch, indem sie liest.', why: 'A comma is required before "indem".' },
        { wrong: 'Ich verbessere mein Deutsch, indem jeden Tag lese.', right: 'Ich verbessere mein Deutsch, indem ich jeden Tag lese.', why: 'The subject "ich" cannot be dropped inside the indem-clause.' },
        { wrong: 'Indem sie viel gelernt hat, weil sie die Prüfung bestanden hat.', right: 'Sie hat die Prüfung bestanden, indem sie viel gelernt hat.', why: 'There is no main clause here \u2014 both "indem" and "weil" open subordinate clauses, so the sentence never finishes. One clause must be a main clause. (indem and weil CAN appear in the same sentence, as long as a main clause carries them.)' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 verb ko clause ke end mein na bhejna, comma chhod dena, ya method ki jagah reason bata dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"indem" appears frequently in Goethe B2 writing tasks that ask you to explain HOW something is achieved.' ],
      note: 'Memory trick: indem = How. It explains the METHOD, not the REASON. Need to explain WHY? Use weil. Need to explain HOW? Use indem.',
      hinglish: '"indem" Goethe B2 ki writing mein aksar kaam aata hai, khaas kar jab batana ho ki koi cheez <b>kaise</b> haasil hoti hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ratgeber: Wie man sich erfolgreich bewirbt',
    titleEn: 'Guide: how to apply successfully',
    tokens: [
      { w: 'Personalchefs', role: 'plain', en: 'HR managers', hi: 'एचआर प्रबंधक', type: 'Noun · plural' },
      { w: 'berichten', role: 'plain', en: 'report', hi: 'बताते हैं', type: 'Verb · berichten' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Bewerbungen', role: 'plain', en: 'applications', hi: 'आवेदन', type: 'Noun · plural' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'voneinander', role: 'plain', en: 'from one another', hi: 'एक दूसरे से', type: 'Pronominaladverb' },
      { w: 'unterscheiden', role: 'plain', en: 'differ (Satzende)', hi: 'भिन्न होते हैं (Satzende)', type: 'Verb · sich unterscheiden (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit)' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Masse', role: 'plain', en: 'crowd', hi: 'भीड़', type: 'Noun · fem.' },
      { w: 'herausstechen', role: 'plain', en: 'stand out (Satzende)', hi: 'अलग दिखना (Satzende)', type: 'Verb · herausstechen (Nebensatz, Satzende)' },
      { w: 'will', role: 'plain', en: 'wants to (Satzende)', hi: 'चाहता है (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'verbessert', role: 'plain', en: 'improves', hi: 'सुधारता है', type: 'Verb · verbessern' },
      { w: 'seine', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Chancen', role: 'plain', en: 'chances', hi: 'मौके', type: 'Noun · plural' },
      { w: 'vor', role: 'plain', en: 'above', hi: 'सबसे', type: 'Preposition' },
      { w: 'allem', role: 'plain', en: 'all', hi: 'ऊपर', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'indem', role: 'r-indem', en: 'by (Wie?)', hi: 'द्वारा (कैसे?)', type: 'Modalkonjunktion · indem', why: 'indem answers "wie?" — by which means something is achieved (this chapter).' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sein', role: 'plain', en: 'his', hi: 'अपना', type: 'Possessivartikel' },
      { w: 'Anschreiben', role: 'plain', en: 'cover letter', hi: 'कवर लेटर', type: 'Noun · neut.', why: 'das Anschreiben (this chapter).' },
      { w: 'individuell', role: 'plain', en: 'individually', hi: 'व्यक्तिगत रूप से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'के अनुसार', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Stellenanzeige', role: 'plain', en: 'job ad (Satzende)', hi: 'नौकरी विज्ञापन (Satzende)', type: 'Noun · fem.', why: 'die Stellenanzeige (this chapter).' },
      { w: 'zuschneidet', role: 'plain', en: 'tailors (Satzende)', hi: 'अनुकूल बनाता है (Satzende)', type: 'Verb · zuschneiden (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Indem', role: 'r-indem', en: 'by (fronted)', hi: 'द्वारा (आगे रखा हुआ)', type: 'Modalkonjunktion · indem (satzeinleitend)', why: 'When the indem-Satz opens the sentence, the main clause verb follows immediately in position 2 (this chapter).' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'konkrete', role: 'plain', en: 'concrete', hi: 'ठोस', type: 'Adjective' },
      { w: 'Beispiele', role: 'plain', en: 'examples', hi: 'उदाहरण', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'पिछले', type: 'Article · Dat.' },
      { w: 'bisherigen', role: 'plain', en: 'previous', hi: 'पिछले', type: 'Adjective' },
      { w: 'Berufserfahrung', role: 'plain', en: 'professional experience (Satzende)', hi: 'व्यावसायिक अनुभव (Satzende)', type: 'Noun · fem.' },
      { w: 'nennt', role: 'plain', en: 'names (Satzende)', hi: 'बताता है (Satzende)', type: 'Verb · nennen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'wirkt', role: 'plain', en: 'seems (linke Klammer)', hi: 'लगता है (बायाँ कोष्ठक)', type: 'Verb · wirken (Linke Klammer)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Bewerbung', role: 'plain', en: 'application', hi: 'आवेदन', type: 'Noun · fem.' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'glaubwürdiger', role: 'plain', en: 'more credible (Satzende)', hi: 'अधिक विश्वसनीय (Satzende)', type: 'Adjective · Komparativ (Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'beim', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Lebenslauf', role: 'plain', en: 'CV', hi: 'बायोडेटा', type: 'Noun · masc.' },
      { w: 'zählt', role: 'plain', en: 'counts', hi: 'मायने रखता है', type: 'Verb · zählen' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Detail', role: 'plain', en: 'detail (Satzende)', hi: 'विवरण (Satzende)', type: 'Noun · neut.' },
      { w: ':', plain: true },
      { w: 'Indem', role: 'r-indem', en: 'by (fronted)', hi: 'द्वारा', type: 'Modalkonjunktion · indem (satzeinleitend)' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'seine', role: 'plain', en: 'one\'s', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'EDV-Kenntnisse', role: 'plain', en: 'IT skills', hi: 'आईटी कौशल', type: 'Noun · plural', why: 'die EDV-Kenntnisse (this chapter).' },
      { w: 'präzise', role: 'plain', en: 'precisely', hi: 'सटीक रूप से', type: 'Adverb' },
      { w: 'auflistet', role: 'plain', en: 'lists (Satzende)', hi: 'सूचीबद्ध करता है (Satzende)', type: 'Verb · auflisten (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'statt', role: 'plain', en: 'instead of', hi: 'के बजाय', type: 'Präposition/Konjunktion' },
      { w: 'sie', role: 'plain', en: 'them', hi: 'उन्हें', type: 'Pronoun · Akk.' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'pauschal', role: 'plain', en: 'in general terms', hi: 'सामान्य रूप से', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'erwähnen', role: 'plain', en: 'mention (Satzende)', hi: 'उल्लेख करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'wirkt', role: 'plain', en: 'seems', hi: 'लगता है', type: 'Verb · wirken' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'kompetenter', role: 'plain', en: 'more competent (Satzende)', hi: 'अधिक सक्षम (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Recruiter', role: 'plain', en: 'recruiter', hi: 'भर्तीकर्ता', type: 'Noun · masc.' },
      { w: 'empfiehlt', role: 'plain', en: 'recommends', hi: 'सुझाव देता है', type: 'Verb · empfehlen' },
      { w: 'außerdem', role: 'plain', en: 'furthermore', hi: 'इसके अलावा', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Anschreiben', role: 'plain', en: 'cover letter', hi: 'कवर लेटर', type: 'Noun · neut.' },
      { w: 'laut', role: 'plain', en: 'out loud', hi: 'ज़ोर से', type: 'Adjective' },
      { w: 'vorzulesen', role: 'plain', en: 'to read (Satzende)', hi: 'पढ़ना (Satzende)', type: 'Verb · vorlesen (Infinitiv mit zu, Satzende)' },
      { w: ',', plain: true },
      { w: 'denn', role: 'plain', en: 'because', hi: 'क्योंकि', type: 'Konjunktion · denn' },
      { w: 'dadurch', role: 'plain', en: 'through this', hi: 'इससे', type: 'Pronominaladverb' },
      { w: 'fallen', role: 'plain', en: 'stand out', hi: 'ध्यान देने योग्य होती हैं', type: 'Verb · auffallen' },
      { w: 'unpassende', role: 'plain', en: 'unsuitable', hi: 'अनुपयुक्त', type: 'Adjective' },
      { w: 'Formulierungen', role: 'plain', en: 'phrasings', hi: 'शब्दावली', type: 'Noun · plural' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · auffallen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit)' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'zusätzlich', role: 'plain', en: 'additionally', hi: 'अतिरिक्त रूप से', type: 'Adverb' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Firmenkultur', role: 'plain', en: 'company culture (Satzende)', hi: 'कंपनी संस्कृति (Satzende)', type: 'Noun · fem.' },
      { w: 'informiert', role: 'plain', en: 'informs (Satzende)', hi: 'जानकारी लेता है (Satzende)', type: 'Verb · sich informieren (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'kann', role: 'plain', en: 'can (linke Klammer)', hi: 'सकता है (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Vorstellungsgespräch', role: 'plain', en: 'job interview', hi: 'साक्षात्कार', type: 'Noun · neut.' },
      { w: 'gezielter', role: 'plain', en: 'more precisely', hi: 'अधिक लक्षित रूप से', type: 'Adverb · Komparativ' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Erwartungen', role: 'plain', en: 'expectations', hi: 'अपेक्षाएँ', type: 'Noun · plural' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Unternehmens', role: 'plain', en: 'company (Satzende)', hi: 'कंपनी का (Satzende)', type: 'Noun · neut.' },
      { w: 'eingehen', role: 'plain', en: 'respond (rechte Klammer)', hi: 'प्रतिक्रिया देना (दायाँ कोष्ठक)', type: 'Verb · eingehen auf (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'this way', hi: 'इस तरह', type: 'Adverb' },
      { w: 'erhöht', role: 'plain', en: 'increases', hi: 'बढ़ाता है', type: 'Verb · erhöhen' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'seine', role: 'plain', en: 'one\'s', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Aussichten', role: 'plain', en: 'prospects', hi: 'संभावनाएँ', type: 'Noun · plural' },
      { w: 'auf', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'an', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Einladung', role: 'plain', en: 'invitation (Satzende)', hi: 'निमंत्रण (Satzende)', type: 'Noun · fem.' },
      { w: 'erheblich', role: 'plain', en: 'considerably (Satzende)', hi: 'काफ़ी हद तक (Satzende)', type: 'Adverb' },
      { w: '.', plain: true }
    ],
    translation: 'HR managers report that many applications hardly differ from one another. Whoever wants to stand out from the crowd improves their chances above all by individually tailoring their cover letter to the job ad. By naming concrete examples from previous professional experience, an application immediately seems more credible. Every detail counts on the CV too: by precisely listing one\'s IT skills, instead of mentioning them only in general terms, one seems more competent. A recruiter also recommends reading the cover letter out loud, because unsuitable phrasings immediately stand out that way. Whoever additionally finds out about the company culture can respond more precisely to the company\'s expectations in the job interview. This way, one considerably increases one\'s prospects of an invitation.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_017_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nele, deine Bewerbung klingt jetzt viel überzeugender.', en: 'Nele, your application sounds much more convincing now.' },
      { id: 'B2_017_L002', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke, ich hab sie verbessert, indem ich konkrete Zahlen aus dem Praktikum eingebaut habe.', en: 'Thanks, I improved it by adding concrete numbers from the internship.' },
      { id: 'B2_017_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wie hast du den Einstieg so lebendig gemacht?', en: 'And how did you make the opening so vivid?' },
      { id: 'B2_017_L004', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Indem ich mit einer konkreten Situation aus dem Projekt angefangen habe, statt allgemein zu bleiben.', en: 'By starting with a concrete situation from the project instead of staying general.' }
    ],
    transcript: 'Nele, deine Bewerbung klingt jetzt viel überzeugender. Danke, ich hab sie verbessert, indem ich konkrete Zahlen aus dem Praktikum eingebaut habe. Und wie hast du den Einstieg so lebendig gemacht? Indem ich mit einer konkreten Situation aus dem Projekt angefangen habe, statt allgemein zu bleiben.',
    translation: 'Nele, your application sounds much more convincing now. Thanks, I improved it by adding concrete numbers from the internship. And how did you make the opening so vivid? By starting with a concrete situation from the project instead of staying general.',
    tokens: [
      { w: 'Nele' },
      { w: ',', plain: true },
      { w: 'deine' },
      { w: 'Bewerbung' },
      { w: 'klingt' },
      { w: 'jetzt' },
      { w: 'viel' },
      { w: 'überzeugender' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hab' },
      { w: 'sie' },
      { w: 'verbessert' },
      { w: ',', plain: true },
      { w: 'indem' },
      { w: 'ich' },
      { w: 'konkrete' },
      { w: 'Zahlen' },
      { w: 'aus' },
      { w: 'dem' },
      { w: 'Praktikum' },
      { w: 'eingebaut' },
      { w: 'habe' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wie' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'den' },
      { w: 'Einstieg' },
      { w: 'so' },
      { w: 'lebendig' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Indem' },
      { w: 'ich' },
      { w: 'mit' },
      { w: 'einer' },
      { w: 'konkreten' },
      { w: 'Situation' },
      { w: 'aus' },
      { w: 'dem' },
      { w: 'Projekt' },
      { w: 'angefangen' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'statt' },
      { w: 'allgemein' },
      { w: 'zu' },
      { w: 'bleiben' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie hat Nele ihre Bewerbung verbessert?', qEn: 'How did Nele improve her application?', options: ['durch ein neues Foto', 'indem sie konkrete Zahlen einbaute', 'durch längere Sätze', 'indem sie alles kürzte'], optionsEn: ['with a new photo', 'by building in concrete figures', 'with longer sentences', 'by cutting everything'], answer: 1,
        explain: '"… indem ich konkrete Zahlen aus dem Praktikum eingebaut habe."' },
      { q: 'Wie hat sie den Einstieg anschaulich gemacht?', qEn: 'How did she make the opening vivid?', options: ['mit einem Zitat', 'mit einer konkreten Situation', 'mit einer Frage', 'mit einem Witz'], optionsEn: ['with a quotation', 'with a concrete situation', 'with a question', 'with a joke'], answer: 1,
        explain: '"Indem ich mit einer konkreten Situation … angefangen habe."' }
    ]
  },

  speaking: [
    { task: "Deine Bewerbung klingt jetzt überzeugender. Sag, wie du das geschafft hast.", taskEn: "Your application sounds more convincing now. Say how you managed it.", de: "Ich habe sie verbessert, indem ich konkrete Zahlen aus dem Praktikum eingebaut habe.", en: "I improved it by building in concrete figures from my placement." },
    { task: "Eine Kollegin fragt, wie du das Anschreiben kürzer machst.", taskEn: "A colleague asks how you make the covering letter shorter.", de: "Ich kürze es, indem ich nur das Aufgabengebiet nenne.", en: "I shorten it by mentioning only the role." },
    { task: "Ein Freund fragt, wie er im Gespräch sicherer wirkt.", taskEn: "A friend asks how to seem more confident in the interview.", de: "Du wirkst sicherer, indem du langsam sprichst und Fragen stellst.", en: "You seem more confident by speaking slowly and asking questions." },
    { task: "Deine Chefin fragt, wie du die Arbeitsweise verbessern willst.", taskEn: "Your boss asks how you want to improve the workflow.", de: "Ich verbessere sie, indem ich klare Absprachen einführe.", en: "I'll improve it by introducing clear arrangements." },
    { task: "Ein Praktikant fragt, wie er Ausdauer beim Lernen bekommt.", taskEn: "An intern asks how to build stamina for studying.", de: "Du bekommst Ausdauer, indem du jeden Tag nur zwanzig Minuten übst.", en: "You build stamina by practising just twenty minutes a day." },
    { task: "Rollenspiel: Ihr besprecht die Bewerbung.", taskEn: "Role-play: you discuss the application.", de: "Ich habe Aufsehen erregt, indem ich das Projekt beschrieben habe. — Und ich punkte, indem ich die Anschrift korrigiere.", en: "I got attention by describing the project. — And I score points by correcting the address." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short workplace report or cover letter (six to eight sentences) about how you achieve a goal — using "indem" at least three times, with at least one example of the indem-clause coming first and one of the main clause coming first.',
    starters: ['Ich verbessere …, indem …', 'Indem ich …, erreiche ich …', 'Man wirkt professioneller, indem …'],
    placeholder: 'Ich verbessere mein Anschreiben, indem ich jeden Satz aussagekräftiger formuliere …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which question does "indem" answer?',
      options: ['Wie? (How?)', 'Warum? (Why?)', 'Wann? (When?)'],
      answer: 0,
      explain: '"indem" always answers "Wie?" — it names the method.'
    },
    gap: {
      sentence: ['Anna verbessert ihr Deutsch, ', ' sie jeden Tag liest.'],
      gaps: [ { answer: 'indem', accepts: ['indem'] } ],
      explain: '"indem" introduces the method-clause here, with verb-final word order.'
    },
    match: {
      q: 'Match each connector to its question.',
      pairs: [
        { noun: 'weil', art: 'Warum?' },
        { noun: 'indem', art: 'Wie?' }
      ]
    },
    builder: {
      target: 'Build: "By reading every day, I improve my German."',
      bank: ['Indem', 'ich', 'jeden', 'Tag', 'lese', ',', 'verbessere', 'ich', 'mein', 'Deutsch', '.'],
      answer: ['Indem', 'ich', 'jeden', 'Tag', 'lese', ',', 'verbessere', 'ich', 'mein', 'Deutsch', '.'],
      roles: { 'Indem': 'r-indem' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Anna verbessert Deutsch indem sie liest.',
      right: 'Anna verbessert Deutsch, indem sie liest.',
      explain: 'A comma is required before "indem".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "indem" express?', options: ['Method (How?)', 'Reason (Why?)', 'Time (When?)'], answer: 0,
      explain: '"indem" always names the method by which something is achieved.' },
    { q: 'Where does the verb go in an indem-clause?', options: ['At the end', 'In second position', 'At the start'], answer: 0,
      explain: '"indem" introduces a Nebensatz — the verb goes to the very end.' },
    { q: 'Which sentence uses indem correctly?', options: ['Ich lerne Deutsch, indem ich jeden Tag übe.', 'Ich lerne Deutsch, indem ich will nach Deutschland gehen.', 'Indem ich lerne Deutsch...'], answer: 0,
      explain: '"indem ich jeden Tag übe" correctly names a method with verb-final word order.' },
    { q: 'Which register is "indem" typically used in?', options: ['Formal, written, business German', 'Very casual slang', 'Baby talk'], answer: 0,
      explain: '"indem" is common in reports, presentations, and academic writing.' },
    { q: 'Which sentence contains an error?', options: ['Anna verbessert Deutsch, indem sie liest.', 'Anna verbessert Deutsch indem sie liest.', 'Indem sie liest, verbessert Anna Deutsch.'], answer: 1,
      explain: 'A comma is required before "indem" — it should be "Anna verbessert Deutsch, indem sie liest."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-indem', html: '"indem" answers "Wie?" (How?) — it names the exact method by which a goal is achieved, with verb-final word order.' },
    { c: 'r-indem', html: 'Never confuse "indem" (method) with "weil" (reason) — they answer completely different questions.' },
    { c: 'r-indem', html: '"indem" is common in formal reports, presentations, and business German — use it to sound more professional.' }
  ],
  revisionTips: [
    'Before using "indem", ask: am I explaining HOW (method) or WHY (reason)? Choose the connector that matches.',
    'Practise fronting the indem-clause versus keeping the main clause first — both are correct, but word order differs.',
    'Build a personal list of common indem-verbs (verbessern, lösen, entwickeln, reduzieren) and practise using each in a method sentence.'
  ]
};

window.CHAPTER = CHAPTER;
