/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 3
   "Konjunktiv II: Höfliche Bitten" — polite requests only.
   Teaches: könnte, würde, hätte, wäre in fixed polite patterns
   (Könnten Sie …? / Würden Sie …? / Hätten Sie …? / Wären Sie so
   freundlich …? / Ich hätte gern … / Ich würde gern … / Ich würde
   Sie bitten …). Deliberately does NOT introduce Konjunktiv II
   Perfekt, unreal-past constructions, passive, or B2 politeness
   structures.
   Vocabulary source: uploaded chapter-03 list (27 items — a
   tech/appliance theme: anschließen, aufladen, Anleitung,
   Handyladen, Staubsauger, kaputtgehen, sich lohnen, …) — used
   as the CONTENT people are politely asking about/for help with,
   inside restaurant / hotel / office / doctor / course /
   customer-service situations.
   Every vocab entry carries: de/art/gender/plural/pos/level/ipa/
   en/hi/ex+exEn+exHi/ex2+ex2En+ex2Hi/advanced{synonyms,opposites,
   collocations} — full popup coverage, no exceptions.
============================================================ */
const CHAPTER = {
  id: 'b1-3-konjunktiv2-hoefliche-bitten',
  phase: 'B1 · Phase 1',
  number: 3,
  title: 'Konjunktiv II: Höfliche Bitten',
  titleEn: 'Subjunctive II: Polite requests',
  description: 'Könnten Sie mir helfen? Würden Sie bitte langsamer sprechen? Ich hätte gern einen Kaffee. This chapter teaches the four polite-request words — könnte, würde, hätte, wäre — as fixed patterns you can use immediately in restaurants, hotels, offices, doctors\' surgeries, courses, and customer service, without any grammar theory beyond the pattern itself.',
  xp: 230,
  time: 40,
  difficulty: 'Intermediate',
  nextChapter: { number: 4, title: 'Folgen: deshalb & so … dass', titleEn: 'Consequences: deshalb & so … dass' , href: 'chapter-b1-4-folgen-deshalb-so-dass.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Timo\'s phone has broken, and Frau Lorenzen at the shop helps him fix it — every request softened into a polite Konjunktiv II: Könnten Sie mir helfen? Würden Sie es bitte anschließen?',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear könnte, würde, hätte, and wäre doing real, everyday polite work'
    ],
    scene: 'Ein langer Samstag in der Stadt',
    femaleSpeakers: ['Frau Lorenzen'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'excuse me', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Könnten', role: 'r-modalverb', en: 'could', hi: 'सकती हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Excuse me! Could you please help me?', hi: 'Maaf kijiye! Kya aap kripya meri madad kar sakti hain?' },
      { speaker: 'Frau Lorenzen', side: 'right', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'हुआ', pron: 'ist', type: 'Verb · sein' },
        { w: 'passiert', role: 'r-verb', en: 'happened', hi: 'हुआ', pron: 'pa-SEERT', type: 'Partizip II (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Of course. What happened?', hi: 'Zaroor. Kya hua?' },
      { speaker: 'Timo', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'हुआ है', pron: 'ist', type: 'Verb · sein' },
        { w: 'kaputtgegangen', role: 'r-verb', en: 'broken', hi: 'ख़राब', pron: 'ka-PUT-ge-gan-gen', type: 'Partizip II', why: 'kaputtgehen = to break (this chapter).', ex: 'Mein Handy ist kaputtgegangen.', exEn: 'My phone has broken.' },
        { w: '.', plain: true }
      ], en: 'My phone has broken.', hi: 'Mera phone kharaab ho gaya hai.' },
      { speaker: 'Frau Lorenzen', side: 'right', tokens: [
        { w: 'Hätten', role: 'r-modalverb', en: 'would you have', hi: 'होगा', pron: 'HE-ten', type: 'Modal · haben (Konjunktiv II, Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आपके पास', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Anleitung', role: 'r-akkusativ', en: 'manual', hi: 'निर्देश पुस्तिका', pron: 'AN-ly-tung', type: 'Noun · fem.', why: 'die Anleitung (this chapter).', ex: 'Hätten Sie die Anleitung?', exEn: 'Would you have the manual?' },
        { w: 'dabei', role: 'r-adverb', en: 'with you', hi: 'साथ', pron: 'da-BY', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Would you maybe have the manual with you?', hi: 'Kya shayad aapke paas nirdesh pustika hai?' },
      { speaker: 'Timo', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'leider', role: 'r-adverb', en: 'unfortunately', hi: 'दुर्भाग्य से', pron: 'LY-der', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true },
        { w: 'Würden', role: 'r-modalverb', en: 'would', hi: 'सकती हैं', pron: 'VÜR-den', type: 'Modal · werden (Konjunktiv II, Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'anschließen', role: 'r-verb', en: 'connect', hi: 'जोड़ना', pron: 'AN-shlee-sen', type: 'Verb · infinitive (Satzende)', why: 'anschließen = to connect (this chapter).', ex: 'Würden Sie es anschließen?', exEn: 'Would you connect it?' },
        { w: '?', plain: true }
      ], en: 'No, unfortunately not. Would you please connect it?', hi: 'Nahi, durbhagya se nahi. Kya aap kripya ise jod sakti hain?' },
      { speaker: 'Frau Lorenzen', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sofort', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हो', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, du)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'einstecken', role: 'r-verb', en: 'plug in', hi: 'प्लग करना', pron: 'INE-shte-ken', type: 'Verb · infinitive (Satzende)', why: 'einstecken = to plug in (this chapter).', ex: 'Könnten Sie es einstecken?', exEn: 'Could you plug it in?' },
        { w: '?', plain: true }
      ], en: 'Yes, right away. Could you please plug it in?', hi: 'Haan, abhi. Kya aap kripya ise plug kar sakti hain?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'होगा', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II, ich)' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानना', pron: 'VI-sen', type: 'Verb · infinitive (Satzende)', why: 'ich würde gern wissen = I would like to know, polite phrase (this chapter).', ex: 'Ich würde gern wissen, ob es funktioniert.', exEn: 'I would like to know if it works.' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'funktioniert', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'funk-tsyo-NEERT', type: 'Verb · funktionieren (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, gladly. I would like to know whether it works now.', hi: 'Haan, khushi se. Main jaanna chahunga ki yeh ab kaam karta hai ya nahi.' },
      { speaker: 'Frau Lorenzen', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: '', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II, es)' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'wundern', role: 'r-verb', en: 'surprise', hi: 'हैरान करना', pron: 'VUN-dern', type: 'Verb · infinitive (Satzende)', why: 'es würde mich nicht wundern = it would not surprise me (this chapter).', ex: 'Es würde mich nicht wundern, wenn es funktioniert.', exEn: 'It would not surprise me if it worked.' },
        { w: ',', plain: true },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'funktioniert', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'funk-tsyo-NEERT', type: 'Verb · funktionieren (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It would not surprise me if it already worked.', hi: 'Mujhe hairaani nahi hogi agar yeh pehle se kaam kare.' },
      { speaker: 'Timo', tokens: [
        { w: 'Wow', role: 'r-subject', en: 'wow', hi: 'वाह', pron: 'vow', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'funktioniert', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'funk-tsyo-NEERT', type: 'Verb · funktionieren' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Ihre', role: 'r-akkusativ', en: 'your (fem.)', hi: 'आपकी', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Hilfe', role: 'r-akkusativ', en: 'help', hi: 'मदद', pron: 'HIL-fuh', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'Wow, it works! Thanks for your help!', hi: 'Wah, yeh kaam karta hai! Aapki madad ke liye dhanyavaad!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Four small words turn any direct request into a polite one — no new grammar theory, just fixed patterns to reuse everywhere: <span class="de r-verb">Könnten</span> Sie …?, <span class="de r-verb">Würden</span> Sie …?, <span class="de r-verb">Hätten</span> Sie …?, and <span class="de r-verb">Wären</span> Sie so freundlich …? Compare: <span class="de">Öffnen Sie das Fenster.</span> (direct, almost a command) becomes <span class="de">Könnten Sie bitte das Fenster öffnen?</span> (polite, natural in any shop, office, or restaurant).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II FÜR HÖFLICHE BITTEN (B1 level only, polite requests ONLY): fixed patterns using könnte, würde, hätte, wäre — "Könnten Sie …?", "Würden Sie …?", "Hätten Sie …?", "Wären Sie so freundlich, … zu …?", "Ich hätte gern …", "Ich würde gern …", "Ich würde Sie bitten, … zu …". ' +
    'Do NOT expect or require Konjunktiv II Perfekt, unreal-past constructions, passive voice, or any B2 politeness structures — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A polite request needs a Konjunktiv II form (könnte/würde/hätte/wäre), not the plain present tense of können — "Können Sie mir helfen?" is a normal question, not the polite pattern being practised; if the learner is clearly trying to practise this chapter\'s polite pattern, encourage "Könnten Sie mir helfen?" instead, but do not mark plain "Können Sie" sentences as flatly wrong on their own.\n' +
    '- "Könnten Sie mir helfen?" is correct; "Könnten Sie helfen mir?" (wrong word order — the dative pronoun mir comes before the infinitive helfen at the end) is an error.\n' +
    '- "Ich hätte gern einen Kaffee" is correct; "Ich würde gern einen Kaffee haben möchten" (stacking würde + möchten together) is an error — never combine two Konjunktiv II politeness markers in one clause.\n' +
    '- "Ich hätte gern, zu gehen" or similar infinitive-after-hätte-gern constructions are wrong — hätte gern takes a direct object (a noun), not a zu-infinitive: "Ich hätte gern einen Termin" not "Ich hätte gern zu gehen".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Politeness check:</b> one sentence on whether the request sounds appropriately polite for a formal situation (restaurant, office, hotel).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — könnte, würde, hätte, and wäre all sound natural and polite in your German. Move on to <span class="de">Folgen: deshalb & so … dass</span>.',
    mid: 'Good. Re-read the könnte vs. würde comparison once — especially word order with an infinitive at the end — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the situation cheat-sheets), then retake.'
  },

  parserSentence: [
    { w: 'Könnten', role: 'r-verb' }, { w: 'Sie', role: 'r-subject' },
    { w: 'mir', role: 'r-dativ' }, { w: 'bitte', role: 'r-adverb' },
    { w: 'helfen', role: 'r-verb' }, { w: '?', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: four words that turn any request into a polite one.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends move through a restaurant, phone shop, and office, asking for everything politely.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 26 words — full popups with two examples, Hindi, IPA, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master könnte, würde, hätte, wäre, and the situation cheat-sheets.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a passage full of natural polite-request expressions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each polite pattern in natural, formal speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask for help, order food, book a room, and request an appointment politely.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal email using several polite-request patterns.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill direct-vs-polite conversion and pattern choice.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 230 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 27 chapter words — Anleitung, Handyladen, Staubsauger, kaputtgehen, sich lohnen, technisch — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Direct-vs-polite conversion drills, situation cheat-sheets, and a formal-email writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full könnte / würde / hätte / wäre reference — comparisons, cheat-sheets by situation, common mistakes, decision guide.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Könnten Sie mir helfen?', text: 'Ask for help politely with könnte' },
    { de: 'Würden Sie bitte langsamer sprechen?', text: 'Make a polite request with würde' },
    { de: 'Ich hätte gern einen Kaffee.', text: 'Order politely with hätte gern' },
    { de: 'Wären Sie so freundlich, …?', text: 'Reach for maximum politeness with wäre' },
    { de: 'Ich würde Sie bitten, … zu …', text: 'Make a formal, gentle request' }
  ],

  // ---------- Vocabulary (27 items — full chapter-03 upload list) ----------
  vocab: [
    { de: 'anschließen', pos: 'verb', level: 'B1', en: 'to connect', hi: 'जोड़ना',
      ex: 'Könnten Sie den Drucker bitte anschließen?', exEn: 'Could you please connect the printer?', exHi: 'Kya aap kripya printer ko connect kar sakte hain?',
      ex2: 'Ich würde gern das Kabel anschließen.', ex2En: 'I would like to connect the cable.', ex2Hi: 'Main cable connect karna chahoonga.',
      conj: { praesens: 'schließt an', praeteritum: 'schloss an', perfekt: 'hat angeschlossen' },
      advanced: { synonyms: ['verbinden'], opposites: ['trennen', 'abschließen'], collocations: ['ein Gerät anschließen', 'den Drucker anschließen'] } },
    { de: 'aufladen', pos: 'verb', level: 'B1', en: 'to charge', hi: 'चार्ज करना',
      ex: 'Würden Sie mein Handy bitte aufladen?', exEn: 'Would you please charge my phone?', exHi: 'Kya aap kripya mera phone charge karenge?',
      ex2: 'Ich hätte gern ein Kabel, um das Handy aufzuladen.', ex2En: 'I\'d like a cable to charge the phone.', ex2Hi: 'Mujhe phone charge karne ke liye ek cable chahiye.',
      conj: { praesens: 'lädt auf', praeteritum: 'lud auf', perfekt: 'hat aufgeladen' },
      advanced: { synonyms: ['laden'], opposites: ['entladen'], collocations: ['den Akku aufladen', 'das Handy aufladen'] } },
    { de: 'bedienen', pos: 'verb', level: 'B1', en: 'to use, operate', hi: 'चलाना, इस्तेमाल करना',
      ex: 'Könnten Sie mir zeigen, wie man die Maschine bedient?', exEn: 'Could you show me how to operate the machine?', exHi: 'Kya aap mujhe dikha sakte hain ki machine kaise chalate hain?',
      ex2: 'Ich hätte gern eine Anleitung, um das Gerät zu bedienen.', ex2En: 'I\'d like an instruction manual to operate the device.', ex2Hi: 'Mujhe device chalane ke liye ek manual chahiye.',
      conj: { praesens: 'bedient', praeteritum: 'bediente', perfekt: 'hat bedient' },
      advanced: { synonyms: ['betreiben', 'benutzen'], opposites: [], collocations: ['eine Maschine bedienen', 'ein Gerät bedienen'] } },
    { de: 'bloß', pos: 'adverb', level: 'B1', en: 'only, just', hi: 'सिर्फ़',
      ex: 'Ich hätte bloß eine kleine Frage.', exEn: 'I\'d just have one small question.', exHi: 'Mera bas ek chhota sa sawaal hai.',
      ex2: 'Bloß nicht wieder ein technisches Problem!', ex2En: 'Not another technical problem, please!', ex2Hi: 'Bas ek aur technical problem na ho!',
      advanced: { synonyms: ['nur'], opposites: [], collocations: ['bloß eine Frage', 'bloß nicht'] } },
    { de: 'Anleitung', art: 'die', gender: 'f', plural: 'Anleitungen', pos: 'noun', level: 'B1', en: 'instructions, manual', hi: 'निर्देश',
      ex: 'Hätten Sie die Anleitung für den Staubsauger?', exEn: 'Would you have the instructions for the vacuum cleaner?', exHi: 'Kya aapke paas vacuum cleaner ke instructions honge?',
      ex2: 'Die Anleitung liegt unten im Karton.', ex2En: 'The manual is at the bottom of the box.', ex2Hi: 'Manual box ke neeche rakha hai.',
      advanced: { synonyms: ['Bedienungsanleitung', 'Handbuch'], opposites: [], collocations: ['die Anleitung lesen', 'laut Anleitung'] } },
    { de: 'einsetzen', pos: 'verb', level: 'B1', en: 'to insert (a battery)', hi: 'डालना',
      ex: 'Könnten Sie bitte die Batterie einsetzen?', exEn: 'Could you please insert the battery?', exHi: 'Kya aap kripya battery daal sakte hain?',
      ex2: 'Ich würde gern eine neue Batterie einsetzen.', ex2En: 'I would like to insert a new battery.', ex2Hi: 'Main ek nayi battery daalna chahoonga.',
      conj: { praesens: 'setzt ein', praeteritum: 'setzte ein', perfekt: 'hat eingesetzt' },
      advanced: { synonyms: ['einlegen'], opposites: ['herausnehmen'], collocations: ['eine Batterie einsetzen'] } },
    { de: 'einstecken', pos: 'verb', level: 'B1', en: 'to plug in', hi: 'प्लग करना',
      ex: 'Würden Sie das Kabel bitte einstecken?', exEn: 'Would you please plug in the cable?', exHi: 'Kya aap kripya cable plug karenge?',
      ex2: 'Man muss ihn nur einstecken und den Knopf drücken.', ex2En: 'You just need to plug it in and press the button.', ex2Hi: 'Bas isse plug karna hai aur button dabana hai.',
      conj: { praesens: 'steckt ein', praeteritum: 'steckte ein', perfekt: 'hat eingesteckt' },
      advanced: { synonyms: ['anschließen'], opposites: ['ausstecken'], collocations: ['den Stecker einstecken'] } },
    { de: 'herunterfallen', pos: 'verb', level: 'B1', en: 'to fall down', hi: 'गिरना',
      ex: 'Ist es einfach heruntergefallen?', exEn: 'Did it simply fall down?', exHi: 'Kya woh bas gir gaya?',
      ex2: 'Das Handy ist mir aus der Hand heruntergefallen.', ex2En: 'The phone fell out of my hand.', ex2Hi: 'Phone mere haath se gir gaya.',
      conj: { praesens: 'fällt herunter', praeteritum: 'fiel herunter', perfekt: 'ist heruntergefallen' },
      advanced: { synonyms: ['runterfallen'], opposites: [], collocations: ['vom Tisch herunterfallen'] } },
    { de: 'installieren', pos: 'verb', level: 'B1', en: 'to install', hi: 'इंस्टॉल करना',
      ex: 'Könnten Sie die App für mich installieren?', exEn: 'Could you install the app for me?', exHi: 'Kya aap mere liye app install kar sakte hain?',
      ex2: 'Ich würde die Software gern selbst installieren.', ex2En: 'I would like to install the software myself.', ex2Hi: 'Main software khud install karna chahoonga.',
      conj: { praesens: 'installiert', praeteritum: 'installierte', perfekt: 'hat installiert' },
      advanced: { synonyms: ['einrichten'], opposites: ['deinstallieren'], collocations: ['eine App installieren', 'Software installieren'] } },
    { de: 'irgendetwas', pos: 'pronoun', level: 'B1', en: 'something, anything', hi: 'कुछ भी',
      ex: 'Könnten Sie mir irgendetwas Vegetarisches empfehlen?', exEn: 'Could you recommend something vegetarian to me?', exHi: 'Kya aap mujhe kuch bhi shakahari suggest kar sakte hain?',
      ex2: 'Hätten Sie irgendetwas gegen Kopfschmerzen?', ex2En: 'Would you have something for a headache?', ex2Hi: 'Kya aapke paas sirdard ke liye kuch hoga?',
      advanced: { synonyms: ['etwas'], opposites: ['nichts'], collocations: ['irgendetwas empfehlen', 'irgendetwas anderes'] } },
    { de: 'kaputtgehen', pos: 'verb', level: 'B1', en: 'to break', hi: 'ख़राब होना',
      ex: 'Mein Handy ist einfach kaputtgegangen.', exEn: 'My phone simply broke.', exHi: 'Mera phone bas kharab ho gaya.',
      ex2: 'Hoffentlich geht der Staubsauger nicht wieder kaputt.', ex2En: 'Hopefully the vacuum cleaner doesn\'t break again.', ex2Hi: 'Ummeed hai vacuum cleaner phir se kharab na ho.',
      conj: { praesens: 'geht kaputt', praeteritum: 'ging kaputt', perfekt: 'ist kaputtgegangen' },
      advanced: { synonyms: ['defekt sein'], opposites: ['funktionieren'], collocations: ['etwas geht kaputt'] } },
    { de: 'auf den Markt kommen', pos: 'verb', level: 'B1', en: 'to come onto the market', hi: 'बाज़ार में आना',
      ex: 'Wann ist das neue Modell auf den Markt gekommen?', exEn: 'When did the new model come onto the market?', exHi: 'Naya model bazaar mein kab aaya?',
      ex2: 'Das Gerät kommt nächsten Monat auf den Markt.', ex2En: 'The device comes onto the market next month.', ex2Hi: 'Device agle mahine bazaar mein aayega.',
      conj: { praesens: 'kommt auf den Markt', praeteritum: 'kam auf den Markt', perfekt: 'ist auf den Markt gekommen' },
      advanced: { synonyms: ['erscheinen', 'herauskommen'], opposites: [], collocations: ['ein neues Modell kommt auf den Markt'] } },
    { de: 'stumm schalten', pos: 'verb', level: 'B1', en: 'to switch to mute', hi: 'म्यूट करना',
      ex: 'Könnten Sie Ihr Handy bitte stumm schalten?', exEn: 'Could you please put your phone on mute?', exHi: 'Kya aap kripya apna phone mute kar sakte hain?',
      ex2: 'Ich würde das Mikrofon gern stumm schalten.', ex2En: 'I would like to mute the microphone.', ex2Hi: 'Main microphone mute karna chahoonga.',
      conj: { praesens: 'schaltet stumm', praeteritum: 'schaltete stumm', perfekt: 'hat stumm geschaltet' },
      advanced: { synonyms: ['muten'], opposites: ['den Ton anschalten'], collocations: ['das Handy stumm schalten', 'das Mikrofon stumm schalten'] } },
    { de: 'sich anschaffen', pos: 'verb', level: 'B1', en: 'to get, acquire (for oneself)', hi: 'खुद के लिए खरीदना',
      ex: 'Würdest du dir gern ein neues Handy anschaffen?', exEn: 'Would you like to get yourself a new phone?', exHi: 'Kya tumhara naya phone lene ka mann hai?',
      ex2: 'Ich hätte gern einen neuen Staubsauger, aber ich würde ihn mir erst später anschaffen.', ex2En: 'I\'d like a new vacuum cleaner, but I would only get it for myself later.', ex2Hi: 'Mujhe naya vacuum cleaner chahiye, lekin main use baad mein hi khareedunga.',
      conj: { praesens: 'schafft sich an', praeteritum: 'schaffte sich an', perfekt: 'hat sich angeschafft' },
      advanced: { synonyms: ['kaufen', 'erwerben'], opposites: ['verkaufen'], collocations: ['sich ein Gerät anschaffen'] } },
    { de: 'sich lohnen', pos: 'verb', level: 'B1', en: 'to be worth it', hi: 'फायदेमंद होना',
      ex: 'Würde sich eine Reparatur lohnen?', exEn: 'Would a repair be worth it?', exHi: 'Kya repair karwana faayde ka hoga?',
      ex2: 'Es lohnt sich, auf das Sonderangebot zu warten.', ex2En: 'It\'s worth waiting for the special offer.', ex2Hi: 'Special offer ka intzaar karna faayde ka hai.',
      conj: { praesens: 'lohnt sich', praeteritum: 'lohnte sich', perfekt: 'hat sich gelohnt' },
      advanced: { synonyms: ['sich rentieren'], opposites: [], collocations: ['sich lohnen, … zu …', 'eine Reparatur lohnt sich'] } },
    { de: 'vor einer Frage stehen', pos: 'verb', level: 'B1', en: 'to be confronted with a question', hi: 'सवाल का सामना करना',
      ex: 'Ich stehe vor der Frage, ob ich ein neues Handy kaufen soll.', exEn: 'I\'m facing the question of whether I should buy a new phone.', exHi: 'Main is sawaal ka saamna kar raha hoon ki naya phone khareedoon ya nahi.',
      ex2: 'Viele Kunden stehen vor der gleichen Frage.', ex2En: 'Many customers face the same question.', ex2Hi: 'Kai grahak isi sawaal ka saamna karte hain.',
      advanced: { synonyms: ['sich fragen'], opposites: [], collocations: ['vor der Frage stehen, ob …'] } },
    { de: 'stumm', pos: 'adjective', level: 'B1', en: 'mute, silent', hi: 'मौन, ख़ामोश',
      ex: 'Das Handy war den ganzen Tag stumm.', exEn: 'The phone was on mute all day.', exHi: 'Phone poore din mute tha.',
      ex2: 'Könnten Sie bitte stumm bleiben, während ich telefoniere?', ex2En: 'Could you please stay quiet while I\'m on the phone?', ex2Hi: 'Kya aap kripya khamosh reh sakte hain jab tak main phone par baat kar raha hoon?',
      advanced: { synonyms: ['lautlos', 'still'], opposites: ['laut'], collocations: ['stumm schalten', 'stumm bleiben'] } },
    { de: 'technisch', pos: 'adjective', level: 'B1', en: 'technical', hi: 'तकनीकी',
      ex: 'Bloß nicht wieder ein technisches Problem!', exEn: 'Not another technical problem, please!', exHi: 'Bas ek aur technical problem na ho!',
      ex2: 'Hätten Sie technische Unterstützung für dieses Gerät?', ex2En: 'Would you have technical support for this device?', ex2Hi: 'Kya aapke paas is device ke liye technical support hoga?',
      advanced: { synonyms: ['elektronisch'], opposites: [], collocations: ['ein technisches Problem', 'technische Unterstützung'] } },
    { de: 'Sonderangebot', art: 'das', gender: 'n', plural: 'Sonderangebote', pos: 'noun', level: 'B1', en: 'special offer', hi: 'विशेष ऑफ़र',
      ex: 'Hätten Sie auch ein Sonderangebot für Kuchen?', exEn: 'Would you also have a special offer on cake?', exHi: 'Kya aapke paas cake ka special offer bhi hoga?',
      ex2: 'Das Sonderangebot gilt nur bis Freitag.', ex2En: 'The special offer is valid only until Friday.', ex2Hi: 'Special offer sirf Friday tak valid hai.',
      advanced: { synonyms: ['Angebot', 'Aktion'], opposites: ['Normalpreis'], collocations: ['ein Sonderangebot nutzen', 'im Sonderangebot'] } },
    { de: 'Handyladen', art: 'der', gender: 'm', plural: 'Handyläden', pos: 'noun', level: 'B1', en: 'mobile phone shop', hi: 'मोबाइल फ़ोन की दुकान',
      ex: 'Ich muss noch in den Handyladen.', exEn: 'I still need to go to the mobile phone shop.', exHi: 'Mujhe abhi mobile shop jaana hai.',
      ex2: 'Der Handyladen hat ein gutes Sonderangebot.', ex2En: 'The mobile phone shop has a good special offer.', ex2Hi: 'Mobile shop mein ek accha special offer hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['in den Handyladen gehen'] } },
    { de: 'Knopf', art: 'der', gender: 'm', plural: 'Knöpfe', pos: 'noun', level: 'B1', en: 'button', hi: 'बटन',
      ex: 'Man muss nur den Knopf drücken.', exEn: 'You just need to press the button.', exHi: 'Bas button dabana hai.',
      ex2: 'Der rote Knopf schaltet das Gerät aus.', ex2En: 'The red button switches the device off.', ex2Hi: 'Laal button device ko band karta hai.',
      advanced: { synonyms: ['Taste'], opposites: [], collocations: ['den Knopf drücken', 'auf den Knopf drücken'] } },
    { de: 'Staubsauger', art: 'der', gender: 'm', plural: 'Staubsauger', pos: 'noun', level: 'B1', en: 'vacuum cleaner', hi: 'वैक्यूम क्लीनर',
      ex: 'Könntest du mir zeigen, wie man den Staubsauger bedient?', exEn: 'Could you show me how to operate the vacuum cleaner?', exHi: 'Kya tum mujhe dikha sakte ho ki vacuum cleaner kaise chalate hain?',
      ex2: 'Unser Staubsauger ist gestern kaputtgegangen.', ex2En: 'Our vacuum cleaner broke yesterday.', ex2Hi: 'Hamara vacuum cleaner kal kharab ho gaya.',
      advanced: { synonyms: [], opposites: [], collocations: ['den Staubsauger bedienen', 'einen Staubsauger kaufen'] } },
    { de: 'Frage', art: 'die', gender: 'f', plural: 'Fragen', pos: 'noun', level: 'B1', en: 'question', hi: 'सवाल',
      ex: 'Ich hätte gern noch eine Frage.', exEn: 'I\'d like to ask one more question.', exHi: 'Mera ek aur sawaal hai.',
      ex2: 'Die Frage wäre, ob sich eine Reparatur lohnt.', ex2En: 'The question would be whether a repair is worth it.', ex2Hi: 'Sawaal yeh hoga ki kya repair karwana faayde ka hai.',
      advanced: { synonyms: ['Anfrage'], opposites: ['Antwort'], collocations: ['eine Frage haben', 'eine Frage stellen'] } },
    { de: 'nähen', pos: 'verb', level: 'B1', en: 'to sew', hi: 'सिलाई करना',
      ex: 'Könnten Sie diesen Knopf bitte annähen?', exEn: 'Could you please sew on this button?', exHi: 'Kya aap kripya yeh button si sakte hain?',
      ex2: 'Meine Oma näht ihre Kleider selbst.', ex2En: 'My grandmother sews her own clothes.', ex2Hi: 'Meri dadi apne kapde khud silti hain.',
      conj: { praesens: 'näht', praeteritum: 'nähte', perfekt: 'hat genäht' },
      advanced: { synonyms: ['flicken'], opposites: [], collocations: ['einen Knopf annähen', 'Kleider nähen'] } },
    { de: 'reinigen', pos: 'verb', level: 'B1', en: 'to clean', hi: 'साफ़ करना',
      ex: 'Würden Sie das Gerät bitte reinigen?', exEn: 'Would you please clean the device?', exHi: 'Kya aap kripya device saaf karenge?',
      ex2: 'Ich würde den Teppich gern professionell reinigen lassen.', ex2En: 'I would like to have the carpet cleaned professionally.', ex2Hi: 'Main carpet professionally saaf karwana chahoonga.',
      conj: { praesens: 'reinigt', praeteritum: 'reinigte', perfekt: 'hat gereinigt' },
      advanced: { synonyms: ['putzen', 'säubern'], opposites: ['verschmutzen'], collocations: ['ein Gerät reinigen', 'den Teppich reinigen'] } },
    { de: 'streichen', pos: 'verb', level: 'B1', en: 'to paint', hi: 'रंगना',
      ex: 'Könnten Sie das Zimmer bitte weiß streichen?', exEn: 'Could you please paint the room white?', exHi: 'Kya aap kripya kamre ko safed rang sakte hain?',
      ex2: 'Wir würden die Wand gern hellblau streichen.', ex2En: 'We would like to paint the wall light blue.', ex2Hi: 'Hum diwaar ko halka neela rangna chahenge.',
      conj: { praesens: 'streicht', praeteritum: 'strich', perfekt: 'hat gestrichen' },
      advanced: { synonyms: ['anmalen'], opposites: [], collocations: ['eine Wand streichen', 'ein Zimmer streichen'] } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Direkte Bitte vs. höfliche Bitte',
      body: [
        'A direct request in German can sound abrupt — almost like a command. Konjunktiv II softens it instantly, using the same four helper verbs every time: <b>könnte</b>, <b>würde</b>, <b>hätte</b>, <b>wäre</b>.'
      ],
      example: [
        { html: '<span class="de strike">Öffnen Sie das Fenster.</span> → <span class="de">Könnten Sie bitte das Fenster öffnen?</span>' },
        { html: '<span class="de strike">Helfen Sie mir.</span> → <span class="de">Könnten Sie mir helfen?</span>' },
        { html: '<span class="de strike">Ich will einen Kaffee.</span> → <span class="de">Ich hätte gern einen Kaffee.</span>' }
      ],
      hinglish: 'Direct request German mein command jaisa lag sakta hai. Konjunktiv II usko turant polite bana deta hai — hamesha yehi chaar helper verbs istemal karke: könnte, würde, hätte, wäre.'
    },
    {
      title: 'Die vier Formen: könnte, würde, hätte, wäre',
      body: [
        'You do not need to derive these forms from a rule — learn them as four fixed patterns, each attached to a Sie/du-form and (usually) a final infinitive or noun.'
      ],
      table: {
        head: ['Pattern', 'Use for', 'Example'],
        rows: [
          ['Könnten Sie …?', 'Asking someone to do something', '<span class="de">Könnten Sie mir helfen?</span>'],
          ['Würden Sie …?', 'Asking someone to do something (softer/more formal)', '<span class="de">Würden Sie bitte langsamer sprechen?</span>'],
          ['Hätten Sie …?', 'Asking if something is available/possible', '<span class="de">Hätten Sie einen Moment Zeit?</span>'],
          ['Wären Sie so freundlich, … zu …?', 'Maximum politeness, bigger favor', '<span class="de">Wären Sie so freundlich, das Fenster zu öffnen?</span>'],
          ['Ich hätte gern …', 'Ordering / requesting a thing', '<span class="de">Ich hätte gern einen Kaffee.</span>'],
          ['Ich würde gern …', 'Requesting to do something', '<span class="de">Ich würde gern einen Termin vereinbaren.</span>'],
          ['Ich würde Sie bitten, … zu …', 'A gentle, formal request', '<span class="de">Ich würde Sie bitten, das zu wiederholen.</span>']
        ]
      },
      hinglish: 'Inhe rule se nikaalne ki zaroorat nahi — inhe chaar fixed patterns ki tarah yaad karo, har ek Sie/du-form aur (aksar) ek infinitive ya noun ke saath aata hai.'
    },
    {
      title: 'könnte vs. würde',
      body: [
        'Both ask someone to DO something. <b>könnte</b> focuses on ability/possibility ("could you…", asking if it\'s possible); <b>würde</b> focuses on willingness ("would you…", asking if they\'re willing). In everyday polite speech they are close to interchangeable — choose whichever feels natural.'
      ],
      example: [
        { html: '<span class="de">Könnten Sie mir helfen?</span> — "Could you help me?" (is it possible)' },
        { html: '<span class="de">Würden Sie mir helfen?</span> — "Would you help me?" (are you willing)' }
      ],
      hinglish: 'Dono hi kisi se kuch karne ke liye kehte hain, bas focus alag hai. <b>könnte</b> poochta hai ki tum kuch <b>kar sakte ho ya nahi</b> (ability), aur <b>würde</b> poochta hai ki tum <b>karna chahoge ya nahi</b> (willingness). Rozmarra bolchaal mein dono lagbhag ek jaise hi use hote hain.'
    },
    {
      title: 'hätte gern vs. möchte',
      body: [
        '<span class="de">Ich hätte gern …</span> and <span class="de">Ich möchte …</span> both mean "I would like…", but hätte gern is the more classically polite, slightly more formal choice for ordering or requesting a specific thing — the safest default in restaurants, shops, and offices.'
      ],
      example: [
        { html: '<span class="de">Ich hätte gern einen Kaffee.</span> (very polite, classic)' },
        { html: '<span class="de">Ich möchte einen Kaffee.</span> (polite, slightly more direct)' }
      ],
      hinglish: 'Ich hätte gern … aur Ich möchte … dono ka matlab hai "mujhe chahiye…", lekin hätte gern zyada classic aur formal polite tareeka hai kisi cheez ko order/request karne ka — restaurant, dukaan, office mein safest default.'
    },
    {
      title: 'Situationen: Cheat-Sheets',
      body: [
        'Five ready-to-use situations. Swap in your own noun or verb and the pattern stays the same.'
      ],
      table: {
        head: ['Situation', 'Useful pattern'],
        rows: [
          ['Restaurant', '<span class="de">Ich hätte gern die Speisekarte / einen Tisch für zwei.</span>'],
          ['Hotel', '<span class="de">Hätten Sie noch ein Zimmer frei? / Könnten Sie mein Gepäck bringen?</span>'],
          ['Büro / Office', '<span class="de">Könnten Sie mir das Dokument schicken? / Würden Sie mich zurückrufen?</span>'],
          ['Telefon', '<span class="de">Würden Sie bitte langsamer sprechen? / Könnten Sie mich verbinden?</span>'],
          ['Formelle E-Mail', '<span class="de">Ich würde gern einen Termin vereinbaren. / Wären Sie so freundlich, mir zu antworten?</span>']
        ]
      },
      hinglish: 'Paanch ready-to-use situations — apna khud ka noun ya verb daalo, pattern wahi rehta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These four mistakes are extremely common — mixing up plain and Konjunktiv II modal, stacking two politeness markers, or getting the word order at the end wrong.'
      ],
      mistakes: [
        { wrong: 'Können Sie bitte...', right: 'Könnten Sie bitte...', why: 'When practising this chapter\'s polite pattern, use könnten (Konjunktiv II), not können (plain present) — könnten is softer and more polite.' },
        { wrong: 'Ich würde gern einen Kaffee haben möchten.', right: 'Ich hätte gern einen Kaffee.', why: 'Never stack würde and möchten together — pick ONE politeness marker per clause.' },
        { wrong: 'Könnten Sie helfen mir?', right: 'Könnten Sie mir helfen?', why: 'The dative pronoun (mir) comes before the infinitive (helfen) at the end, not after it.' },
        { wrong: 'Ich hätte gern zu gehen.', right: 'Ich hätte gern einen Termin.', why: 'hätte gern takes a noun (a thing you want), not a zu-infinitive.' }
      ],
      hinglish: 'Sabse aam galti hai plain können aur Konjunktiv II könnten mein confuse hona, ya do politeness markers ko ek saath jodna. hätte gern ke baad hamesha ek noun aata hai, zu-infinitive nahi.'
    },
    {
      title: 'Entscheidungshilfe',
      body: [
        'A quick guide for choosing the right pattern in the moment.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Need to ask politely for an action?', 'Könnten Sie …?'],
          ['Need to order or request a thing?', 'Ich hätte gern …'],
          ['Need to request an action, slightly softer?', 'Ich würde gern …'],
          ['Need maximum politeness for a bigger favor?', 'Wären Sie so freundlich, … zu …?']
        ]
      },
      note: 'None of these patterns require you to know how Konjunktiv II is formed from scratch — learn them as fixed phrases first; the grammar behind them comes later, at B2.',
      hinglish: 'Decision guide: (1) kisi action ke liye politely poochna ho → Könnten Sie …? (2) koi cheez order/request karni ho → Ich hätte gern … (3) thoda soft request → Ich würde gern … (4) sabse zyada politeness chahiye → Wären Sie so freundlich, … zu …?'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Im Handyladen',
    titleEn: 'At the mobile phone shop',
    tokens: [
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'betritt', role: 'r-verb', en: 'enters', hi: 'प्रवेश करता है', type: 'Verb · betreten' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Handyladen', role: 'r-akkusativ', en: 'mobile phone shop', hi: 'मोबाइल फ़ोन की दुकान', type: 'Noun · masc.', why: 'der Handyladen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Entschuldigung', role: 'r-subject', en: 'excuse me', hi: 'माफ़ कीजिए', type: 'Interjection' },
      { w: ',', plain: true },
      { w: 'könnten', role: 'r-verb', en: 'could', hi: 'क्या आप कर सकते हैं', type: 'Konjunktiv II · können', why: 'Könnten Sie …? — the standard polite request pattern.' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', type: 'Pronoun · formal' },
      { w: 'mir', role: 'r-dativ', en: '(to) me', hi: 'मुझे', type: 'Pronoun · Dativ' },
      { w: 'helfen', role: 'r-verb', en: 'to help (Satzende)', hi: 'मदद करना', type: 'Infinitiv (Satzende)' },
      { w: '?', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', type: 'Possessivartikel' },
      { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', type: 'Noun · neut.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'kaputtgegangen', role: 'r-verb', en: 'broken (Satzende)', hi: 'ख़राब हो गया', type: 'Trennbares Verb · Partizip II (Satzende)', why: 'kaputtgehen (this chapter): to break.' },
      { w: ',', plain: true },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', type: 'Verb · sagen' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Verkäuferin', role: 'r-subject', en: 'saleswoman', hi: 'विक्रेता', type: 'Noun · fem.' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछती है', type: 'Verb · fragen' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', type: 'Konjunktion' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'einfach', role: 'r-adverb', en: 'simply', hi: 'बस', type: 'Adverb' },
      { w: 'heruntergefallen', role: 'r-verb', en: 'fallen down (Satzende)', hi: 'गिर गया', type: 'Trennbares Verb · Partizip II (Satzende)', why: 'herunterfallen (this chapter).' },
      { w: 'ist', role: 'r-verb', en: 'is (Satzende)', hi: 'है', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'चाहूँगा', type: 'Konjunktiv II · werden' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', type: 'Adverb' },
      { w: 'zuerst', role: 'r-time', en: 'first', hi: 'सबसे पहले', type: 'Adverb' },
      { w: 'fragen', role: 'r-verb', en: 'to ask (Satzende)', hi: 'पूछना', type: 'Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', type: 'Konjunktion' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Reparatur', role: 'r-subject', en: 'repair', hi: 'मरम्मत', type: 'Noun · fem.' },
      { w: 'lohnt', role: 'r-verb', en: 'is worth it (Satzende)', hi: 'फायदेमंद है', type: 'Verb · sich lohnen (Satzende)', why: 'sich lohnen (this chapter): to be worth it.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Verkäuferin', role: 'r-subject', en: 'saleswoman', hi: 'विक्रेता', type: 'Noun · fem.' },
      { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाती है', type: 'Verb · zeigen' },
      { w: 'ihm', role: 'r-dativ', en: '(to) him', hi: 'उसे', type: 'Pronoun · Dativ' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Sonderangebot', role: 'r-akkusativ', en: 'special offer', hi: 'विशेष ऑफ़र', type: 'Noun · neut.', why: 'das Sonderangebot (this chapter).' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'neues', role: 'r-akkusativ', en: 'new', hi: 'नया', type: 'Adjective · Akk.' },
      { w: 'Modell', role: 'r-akkusativ', en: 'model', hi: 'मॉडल', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'das', role: 'r-subject', en: 'that (neut.)', hi: 'यह', type: 'Relativpronomen' },
      { w: 'gerade', role: 'r-time', en: 'just', hi: 'अभी', type: 'Adverb' },
      { w: 'auf', role: 'r-preposition', en: 'onto', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Markt', role: 'r-akkusativ', en: 'market', hi: 'बाज़ार', type: 'Noun · masc.' },
      { w: 'gekommen', role: 'r-verb', en: 'come (Satzende)', hi: 'आया', type: 'Verb · Partizip II (Satzende)', why: 'auf den Markt kommen (this chapter).' },
      { w: 'ist', role: 'r-verb', en: 'has (Satzende)', hi: 'है', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Hätten', role: 'r-verb', en: 'would have', hi: 'क्या आपके पास होगा', type: 'Konjunktiv II · haben', why: 'Hätten Sie …? — asking if something is available.' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', type: 'Pronoun · formal' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Anleitung', role: 'r-akkusativ', en: 'instructions', hi: 'निर्देश', type: 'Noun · fem.', why: 'die Anleitung (this chapter).' },
      { w: 'auf', role: 'r-preposition', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Englisch', role: 'r-dativ', en: 'English', hi: 'अंग्रेज़ी', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', type: 'Verb · fragen' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-time', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'r-time', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'चाहूँगा', type: 'Konjunktiv II · werden' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', type: 'Adverb' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नया', type: 'Adjective · Akk.' },
      { w: 'Handy', role: 'r-akkusativ', en: 'phone', hi: 'फ़ोन', type: 'Noun · neut.' },
      { w: 'kaufen', role: 'r-verb', en: 'to buy (Satzende)', hi: 'खरीदना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Max enters the mobile phone shop. "Excuse me, could you help me? My phone broke," he says. The saleswoman asks whether it simply fell down. Max would first like to ask whether a repair is worth it. The saleswoman shows him a special offer for a new model that has just come onto the market. "Would you also have instructions in English?" Max asks. In the end, Max would like to buy the new phone.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_003_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Entschuldigung, mein Display ist komplett schwarz — könnten Sie mal draufschauen?', en: 'Excuse me, my screen is completely black — could you take a look?' },
      { id: 'B1_003_L002', speaker: 'Frau Lorenzen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Klar, zeigen Sie mal her. Höppla, das sieht nach einem Wackelkontakt aus.', en: 'Sure, show me. Oops, that looks like a loose connection.' },
      { id: 'B1_003_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Oh nein. Wäre das teuer zu reparieren?', en: 'Oh no. Would that be expensive to repair?' },
      { id: 'B1_003_L004', speaker: 'Frau Lorenzen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, gar nicht — würden Sie es fünf Minuten hier lassen? Dann schaffe ich das schnell.', en: 'No, not at all — would you leave it here for five minutes? Then I can fix it quickly.' },
      { id: 'B1_003_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das wäre super, vielen Dank!', en: 'That would be great, thank you very much!' }
    ],
    transcript: 'Entschuldigung, mein Display ist komplett schwarz — könnten Sie mal draufschauen? Klar, zeigen Sie mal her. Höppla, das sieht nach einem Wackelkontakt aus. Oh nein. Wäre das teuer zu reparieren? Nein, gar nicht — würden Sie es fünf Minuten hier lassen? Dann schaffe ich das schnell. Das wäre super, vielen Dank!',
    translation: 'Excuse me, my screen is completely black — could you take a look? Sure, show me. Oops, that looks like a loose connection. Oh no. Would that be expensive to repair? No, not at all — would you leave it here for five minutes? Then I can fix it quickly. That would be great, thank you very much!',
    tokens: [
      { w: 'Entschuldigung' },
      { w: ',', plain: true },
      { w: 'mein' },
      { w: 'Display', en: 'screen', type: 'Noun' },
      { w: 'ist' },
      { w: 'komplett' },
      { w: 'schwarz' },
      { w: '—', plain: true },
      { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकती हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, Sie)' },
      { w: 'Sie' },
      { w: 'mal', role: 'r-adverb', en: 'once', hi: 'ज़रा', pron: 'mahl', type: 'Adverb' },
      { w: 'draufschauen', role: 'r-verb', en: 'to take a look', type: 'Verb' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'zeigen' },
      { w: 'Sie' },
      { w: 'mal', role: 'r-adverb', en: 'once', hi: 'ज़रा', pron: 'mahl', type: 'Adverb' },
      { w: 'her' },
      { w: '.', plain: true },
      { w: 'Höppla', role: 'plain', en: 'oops' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'sieht' },
      { w: 'nach' },
      { w: 'einem' },
      { w: 'Wackelkontakt', en: 'loose connection', type: 'Noun' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Oh', role: 'plain', en: 'oh' },
      { w: 'nein' },
      { w: '.', plain: true },
      { w: 'Wäre' },
      { w: 'das' },
      { w: 'teuer' },
      { w: 'zu' },
      { w: 'reparieren' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'gar' },
      { w: 'nicht' },
      { w: '—', plain: true },
      { w: 'würden' },
      { w: 'Sie' },
      { w: 'es' },
      { w: 'fünf' },
      { w: 'Minuten' },
      { w: 'hier' },
      { w: 'lassen' },
      { w: '?', plain: true },
      { w: 'Dann' },
      { w: 'schaffe' },
      { w: 'ich' },
      { w: 'das' },
      { w: 'schnell' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'wäre' },
      { w: 'super' },
      { w: ',', plain: true },
      { w: 'vielen', role: 'plain', en: 'many' },
      { w: 'Dank' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was ist mit Timos Handy?', qEn: 'What is wrong with Timo\'s phone?', options: ['Es ist nass', 'Das Display hat einen Riss', 'Das Display ist schwarz', 'Es ist zu alt'], optionsEn: ['It\'s wet', 'The screen is cracked', 'The screen is black', 'It\'s too old'], answer: 2,
        explain: '"Mein Display ist komplett schwarz."' },
      { q: 'Wie will Frau Lorenzen helfen?', qEn: 'How does Frau Lorenzen offer to help?', options: ['Ein neues Handy bestellen', 'Es in fünf Minuten reparieren', 'Es zur Reparatur einschicken', 'Das Handy erstatten'], optionsEn: ['Order a new phone', 'Fix it in five minutes', 'Send it away for repair', 'Refund the phone'], answer: 1,
        explain: '"Würden Sie es fünf Minuten hier lassen? Dann schaffe ich das schnell."' }
    ]
  },

  speaking: [
    { task: "Dein Display ist schwarz. Bitte im Handyladen höflich um Hilfe.", taskEn: "Your display is black. Politely ask for help in the phone shop.", de: "Könnten Sie bitte mal draufschauen? Mein Display ist komplett schwarz.", en: "Could you please take a look? My display is completely black." },
    { task: "Du willst wissen, was die Reparatur kostet. Frag vorsichtig.", taskEn: "You want to know what the repair costs. Ask cautiously.", de: "Wäre das teuer? Ich würde es gern reparieren lassen.", en: "Would that be expensive? I'd like to have it repaired." },
    { task: "Du brauchst die Anleitung für den Staubsauger. Bitte darum.", taskEn: "You need the instructions for the vacuum cleaner. Ask for them.", de: "Hätten Sie die Anleitung für mich? Ich würde ihn gern selbst anschließen.", en: "Would you have the instructions for me? I'd like to connect it myself." },
    { task: "Im Restaurant möchtest du bestellen. Sei höflich.", taskEn: "In the restaurant you'd like to order. Be polite.", de: "Ich hätte gern die Suppe, und könnten Sie uns bitte Wasser bringen?", en: "I'd like the soup, and could you please bring us water?" },
    { task: "Du rufst im Hotel an und möchtest ein Zimmer.", taskEn: "You call the hotel and would like a room.", de: "Ich würde gern ein Zimmer für zwei Nächte buchen. Wäre das möglich?", en: "I'd like to book a room for two nights. Would that be possible?" },
    { task: "Dein Nachbar hört laut Musik. Bitte ihn freundlich.", taskEn: "Your neighbour is playing loud music. Ask him kindly.", de: "Würdest du die Musik bitte leiser machen oder stumm schalten?", en: "Would you please turn the music down or mute it?" },
    { task: "Rollenspiel: Du brauchst einen Termin im Handyladen.", taskEn: "Role-play: you need an appointment at the phone shop.", de: "Könnten Sie mir einen Termin geben? Am Freitag hätte ich Zeit.", en: "Could you give me an appointment? I'd have time on Friday." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short, formal email (six to eight sentences) — choose ONE: requesting an appointment, reserving a hotel room, making a polite complaint, or asking for information. Use at least four different polite Konjunktiv II patterns (könnte, würde, hätte, wäre).',
    starters: ['Sehr geehrte Damen und Herren,', 'Ich würde gern …', 'Könnten Sie mir bitte …', 'Wären Sie so freundlich, …', 'Vielen Dank im Voraus.'],
    placeholder: 'Sehr geehrte Damen und Herren, ich würde gern einen Termin vereinbaren …',
    minWords: 40
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which is the polite version of "Helfen Sie mir"?',
      options: ['Können Sie mir helfen', 'Könnten Sie mir helfen?', 'Sie helfen mir'],
      answer: 1,
      explain: 'könnten (Konjunktiv II) is softer and more polite than the plain modal können or an imperative.'
    },
    gap: {
      sentence: ['Ich ', ' gern einen Kaffee.'],
      gaps: [ { answer: 'hätte', accepts: ['hätte'] } ],
      explain: '"Ich hätte gern …" is the classic polite ordering pattern — a fixed phrase.'
    },
    match: {
      q: 'Match each pattern to its typical use.',
      pairs: [
        { noun: 'Könnten Sie …?', art: 'Asking someone to do something' },
        { noun: 'Ich hätte gern …', art: 'Ordering or requesting a thing' },
        { noun: 'Wären Sie so freundlich …?', art: 'Maximum politeness, a bigger favor' },
        { noun: 'Ich würde gern …', art: 'Requesting to do something' }
      ]
    },
    builder: {
      target: 'Build: "Would you please speak more slowly?"',
      bank: ['Würden', 'Sie', 'bitte', 'langsamer', 'sprechen', '?'],
      answer: ['Würden', 'Sie', 'bitte', 'langsamer', 'sprechen', '?'],
      roles: { 'Würden': 'r-verb', 'Sie': 'r-subject', 'sprechen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete the polite request: "___ Sie mir bitte helfen?"', options: ['Können', 'Könnten', 'Konnten'], answer: 1,
      explain: 'könnten is the Konjunktiv II form — softer and more polite than können.' },
    { q: 'Which sentence uses hätte gern correctly?', options: ['Ich hätte gern zu gehen.', 'Ich hätte gern einen Kaffee.', 'Ich hätte gern gehen.'], answer: 1,
      explain: 'hätte gern takes a noun (a thing you want), not a zu-infinitive.' },
    { q: 'Which is the MOST formal, maximum-politeness pattern?', options: ['Würden Sie …?', 'Wären Sie so freundlich, … zu …?', 'Könnten Sie …?'], answer: 1,
      explain: 'Wären Sie so freundlich …? is reserved for bigger favors and maximum politeness.' },
    { q: 'Correct word order: "Könnten Sie ___?"', options: ['helfen mir', 'mir helfen', 'mir zu helfen'], answer: 1,
      explain: 'The dative pronoun (mir) comes before the infinitive (helfen) at the end.' },
    { q: 'Which sentence contains an error?', options: ['Ich würde gern einen Termin vereinbaren.', 'Ich würde gern einen Kaffee haben möchten.', 'Ich würde Sie bitten, das zu wiederholen.'], answer: 1,
      explain: 'Never stack würde and möchten together — pick one politeness marker per clause.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Use <span class="de r-verb">Könnten Sie …?</span> or <span class="de r-verb">Würden Sie …?</span> to politely ask someone to do something.' },
    { c: 'r-verb', html: 'Use <span class="de r-verb">Ich hätte gern …</span> to order or request a thing — the safest polite default.' },
    { c: 'r-verb', html: 'Reach for <span class="de r-verb">Wären Sie so freundlich, … zu …?</span> when you need maximum politeness for a bigger favor.' }
  ],
  revisionTips: [
    'Before any request in a shop, restaurant, or office, swap the direct verb form for könnte or würde automatically.',
    'Say "Ich hätte gern einen/eine/ein …" out loud until it feels as natural as "I would like…" in English.',
    'Never stack two politeness markers in one clause — pick one: könnte, würde, hätte, or wäre.'
  ]
};

window.CHAPTER = CHAPTER;
