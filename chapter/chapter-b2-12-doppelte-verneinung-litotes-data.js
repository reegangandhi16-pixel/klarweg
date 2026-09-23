/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 12
   "Doppelte Verneinung & Litotes" — Standard German avoids double
   negation (one negative is enough: nichts, niemand, nie), but
   Litotes deliberately uses "nicht + negative-leaning word" to
   soften or diplomatically strengthen a statement (nicht schlecht,
   nicht unmöglich, nicht ohne Grund). Does NOT introduce kaum,
   keineswegs, keinesfalls, irony, sarcasm, or C1 rhetoric.
   IMPORTANT: dialogue uses ONLY Meike and Timo.
   Vocabulary source: uploaded chapter-12 list (34 items, user-edited
   general B2 vocabulary bank — rehearsal/communication/fate themes).
============================================================ */
const CHAPTER = {
  id: 'b2-12-doppelte-verneinung-litotes',
  phase: 'B2 · Phase 1',
  number: 12,
  title: 'Doppelte Verneinung & Litotes',
  titleEn: 'Double negation & litotes',
  description: 'German avoids double negation — one negative is enough. But Litotes deliberately pairs two negatives on purpose, to sound softer, more diplomatic, more native.',
  xp: 400,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 13, title: 'Nuancierte Negation', titleEn: 'Nuanced negation' , href: 'chapter-b2-13-nuancierte-negation.html' },

  prevChapter: { number: 11, title: 'Stellung von nicht (Satz- vs. Sondernegation)', titleEn: 'Position of nicht (sentence vs. special negation)', href: 'chapter-b2-11-stellung-von-nicht.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two negatives, <em>on purpose.</em>',
    intro: 'After a rehearsal, Meike and Timo trade careful, diplomatic feedback — this scene is not unimportant, that choice is not unwise — softening every opinion with a deliberate double negative, Litotes.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how "nicht schlecht" and "nicht unmöglich" soften direct statements'
    ],
    scene: 'Nach der Probe',
    femaleSpeakers: ['Meike'],
    dialogue: [
      { speaker: 'Meike', tokens: [
        { w: 'Diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Szene', role: 'r-subject', en: 'scene', hi: 'दृश्य', pron: 'STSAY-nuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'doppelte Verneinung/Litotes: nicht + un- = a weakened positive statement (this chapter).', ex: 'Diese Szene ist nicht unwichtig.', exEn: 'This scene is not unimportant.' },
        { w: 'unwichtig', role: 'r-akkusativ', en: 'unimportant', hi: 'महत्वहीन', pron: 'UN-vikh-tikh', type: 'Adjective', why: 'unwichtig = unimportant (this chapter).', ex: 'Das ist unwichtig.', exEn: 'That is unimportant.' },
        { w: '.', plain: true }
      ], en: 'This scene is not unimportant.', hi: 'Yeh drishya mahatvaheen nahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'ohne', role: 'r-akkusativ', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Preposition', why: 'nicht ohne = not without, a litotes expression (this chapter).', ex: 'Das ist nicht ohne Bedeutung.', exEn: 'That is not without meaning.' },
        { w: 'Bedeutung', role: 'r-akkusativ', en: 'meaning', hi: 'अर्थ', pron: 'be-DOY-tung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'True. It is not without meaning.', hi: 'Sahi hai. Yeh arth ke bina nahi hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'unsicher', role: 'r-akkusativ', en: 'unsure', hi: 'अनिश्चित', pron: 'UN-zi-kher', type: 'Adjective', why: 'unsicher = unsure (this chapter).', ex: 'Ich bin mir unsicher.', exEn: 'I am unsure.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'übe', role: 'r-verb', en: 'practise', hi: 'अभ्यास करती हूँ', pron: 'Ü-buh', type: 'Verb · üben (ich)' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: '.', plain: true }
      ], en: 'I am not unsure, but I nevertheless practise.', hi: 'Main anishchit nahi hoon, par phir bhi abhyaas karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'unklug', role: 'r-akkusativ', en: 'unwise', hi: 'अबुद्धिमान', pron: 'UN-klook', type: 'Adjective', why: 'unklug = unwise (this chapter).', ex: 'Das ist nicht unklug.', exEn: 'That is not unwise.' },
        { w: '.', plain: true },
        { w: 'Übung', role: 'r-subject', en: 'practice', hi: 'अभ्यास', pron: 'Ü-bung', type: 'Noun · fem.' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'That is not unwise. Practice always helps.', hi: 'Yeh abuddhimaan nahi hai. Abhyaas hamesha madad karta hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Rücksicht', role: 'r-subject', en: 'consideration', hi: 'ख़्याल', pron: 'RÜK-zikht', type: 'Noun · fem.', why: 'die Rücksicht (this chapter).', ex: 'Deine Rücksicht hilft mir.', exEn: 'Your consideration helps me.' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! Your consideration really helps me.', hi: 'Dhanyavaad! Tumhaara khyaal mujhe sach mein madad karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kein', role: 'r-subject', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Problem', role: 'r-subject', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'untypisch', role: 'r-akkusativ', en: 'uncharacteristic', hi: 'अस्वाभाविक', pron: 'UN-tü-pish', type: 'Adjective', why: 'untypisch = uncharacteristic (this chapter).', ex: 'Das ist nicht untypisch für mich.', exEn: 'That is not uncharacteristic for me.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मेरे लिए', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'No problem! That is not uncharacteristic for me.', hi: 'Koi baat nahi! Yeh mere liye asvaabhavik nahi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Standard German avoids <span class="de r-neg">double negation</span> — one negative (nichts, niemand, nie, kein) is always enough. But <span class="de r-litotes">Litotes</span> deliberately pairs "nicht" with a negative-leaning word on purpose — <span class="de">nicht schlecht</span> (quite good), <span class="de">nicht unmöglich</span> (possible) — to sound softer and more diplomatic.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is DOPPELTE VERNEINUNG & LITOTES (B2 level): Standard German avoids double negation — a sentence should have only ONE negative word (nichts, niemand, nie, kein) and never a second "nicht" alongside it (Ich habe nichts gesehen — NOT Ich habe nichts nicht gesehen). Litotes, however, is a deliberate stylistic device that intentionally pairs "nicht" with a negative-leaning word to soften or diplomatically strengthen a statement: nicht schlecht (quite good), nicht unmöglich (possible), nicht selten (quite often), nicht unwichtig (important), nicht ungefährlich (rather dangerous), nicht ausgeschlossen (possible), nicht ohne Grund (for a good reason), nicht unzufrieden (quite satisfied). Litotes is common in formal/diplomatic German (newspapers, reports, presentations, business). ' +
    'Do NOT expect kaum, keineswegs, keinesfalls, irony, sarcasm, or C1 rhetorical devices — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A sentence should contain only ONE negative word unless it is a recognized Litotes expression (nicht + negative-leaning adjective/adverb).\n' +
    '- Genuine accidental double negation (e.g. "nichts nicht", "niemand ... nicht") is always an error — flag it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Litotes check:</b> one sentence on whether the learner used any Litotes expressions naturally, or if there\'s a good opportunity to add one for a more diplomatic tone.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly avoid accidental double negation and use Litotes naturally to sound diplomatic. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Doppelte Verneinung vs Litotes comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: one negative is normal German; two negatives are only correct as deliberate Litotes.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'war', role: 'plain' },
    { w: 'nicht', role: 'r-litotes' }, { w: 'schlecht', role: 'r-litotes' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: one negative is normal German; two negatives on purpose is Litotes.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meike and Timo give each other diplomatic feedback after a rehearsal, using Litotes.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master correct single negation, and how Litotes intentionally uses two negatives to soften meaning.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of Litotes expressions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify simple negation, incorrect double negation, and Litotes in spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give diplomatic feedback and soft disagreement using Litotes naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write opinion texts and reviews using Litotes where appropriate.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill correct-vs-incorrect negation, Litotes recognition, and polite rewriting.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 400 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Correct/incorrect negation drills, Litotes recognition, polite rewriting, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Doppelte Verneinung & Litotes reference — comparison tables, common expressions, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe nichts gesehen.', text: 'Use one negative correctly — never double it accidentally' },
    { de: 'Das war nicht schlecht.', text: 'Recognize Litotes as a deliberate stylistic softener' },
    { de: 'Nicht unmöglich.', text: 'Use Litotes to sound diplomatic and formal' },
    { de: 'Nicht ohne Risiko.', text: 'Understand Litotes with prepositional phrases' },
    { de: '❌ Ich habe nichts nicht gesehen.', text: 'Recognize and avoid incorrect double negation' }
  ],

  // ---------- Vocabulary (34 items — uploaded chapter-12 list) ----------
  vocab: [
    { de: 'Linie', art: 'die', gender: 'f', plural: 'Linien', pos: 'noun', level: 'B2', en: 'line', hi: 'रेखा', ex: 'Er zeichnet eine gerade Linie.', exEn: 'He draws a straight line.', exHi: 'Woh ek seedhi rekha kheenchta hai.', ex2: 'Die Linie zwischen den beiden Punkten ist kurz.', ex2En: 'The line between the two points is short.', ex2Hi: 'Dono bindu ke beech ki rekha choti hai.' },
    { de: 'Macht', art: 'die', gender: 'f', plural: 'Mächte', pos: 'noun', level: 'B2', en: 'power, might', hi: 'शक्ति', ex: 'Die Macht der Worte ist nicht zu unterschätzen.', exEn: 'The power of words is not to be underestimated.', exHi: 'Shabdon ki shakti ko kam nahi aankna chahiye.', ex2: 'Er hat viel Macht in der Firma.', ex2En: 'He has a lot of power in the company.', ex2Hi: 'Company mein uski bahut shakti hai.' },
    { de: 'Mimik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'facial expression', hi: 'चेहरे के भाव', ex: 'Deine Mimik war nicht unwichtig.', exEn: 'Your facial expression wasn\'t unimportant.', exHi: 'Tumhaare chehre ke bhaav mahatvapurn hi the.', ex2: 'Ihre Mimik verriet Nervosität.', ex2En: 'Her facial expression revealed nervousness.', ex2Hi: 'Uske chehre ke bhaavon ne ghabrahat zaahir ki.' },
    { de: 'Mitleid', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'compassion, pity', hi: 'सहानुभूति', ex: 'Sie zeigte Mitleid mit dem Verletzten.', exEn: 'She showed compassion for the injured person.', exHi: 'Usne ghayal vyakti ke prati sahaanubhooti dikhaayi.', ex2: 'Mitleid allein hilft nicht immer.', ex2En: 'Compassion alone doesn\'t always help.', ex2Hi: 'Sirf sahaanubhooti hamesha madad nahi karti.' },
    { de: 'Mitschrift', art: 'die', gender: 'f', plural: 'Mitschriften', pos: 'noun', level: 'B2', en: 'transcript, notes', hi: 'नोट्स', ex: 'Ich habe eine Mitschrift der Vorlesung gemacht.', exEn: 'I made a transcript of the lecture.', exHi: 'Maine lecture ke note banaaye.', ex2: 'Die Mitschrift war sehr detailliert.', ex2En: 'The transcript was very detailed.', ex2Hi: 'Notes bahut vistrit the.' },
    { de: 'monolingual', pos: 'adjective', level: 'B2', en: 'monolingual', hi: 'एकभाषी', ex: 'Er ist monolingual aufgewachsen.', exEn: 'He grew up monolingual.', exHi: 'Woh ekbhaashi ban ke bada hua.', ex2: 'Die Schule bietet einen monolingualen Unterricht an.', ex2En: 'The school offers monolingual instruction.', ex2Hi: 'School ekbhaashi shiksha deta hai.' },
    { de: 'nachweisen', pos: 'verb', level: 'B2', en: 'to prove, demonstrate', hi: 'साबित करना', ex: 'Sie konnte ihre Unschuld nachweisen.', exEn: 'She was able to prove her innocence.', exHi: 'Woh apni maasoomiyat saabit kar saki.', ex2: 'Man muss die Qualifikation nachweisen.', ex2En: 'One must demonstrate the qualification.', ex2Hi: 'Yogyata saabit karni hoti hai.', conj: { praesens: 'weist nach', praeteritum: 'wies nach', perfekt: 'hat nachgewiesen' } },
    { de: 'nichtssagend', pos: 'adjective', level: 'B2', en: 'meaningless, bland', hi: 'निरर्थक', ex: 'Kein Wort war nichtssagend.', exEn: 'No word was meaningless.', exHi: 'Koi bhi shabd nirarthak nahi tha.', ex2: 'Seine Antwort war leider nichtssagend.', ex2En: 'His answer was unfortunately meaningless.', ex2Hi: 'Uska jawaab durbhaagya se nirarthak tha.' },
    { de: 'Nummer', art: 'die', gender: 'f', plural: 'Nummern', pos: 'noun', level: 'B2', en: 'number', hi: 'संख्या', ex: 'Wie ist deine Nummer?', exEn: 'What\'s your number?', exHi: 'Tumhaara number kya hai?', ex2: 'Die Nummer steht auf dem Formular.', ex2En: 'The number is on the form.', ex2Hi: 'Number form par likha hai.' },
    { de: 'Phase', art: 'die', gender: 'f', plural: 'Phasen', pos: 'noun', level: 'B2', en: 'phase', hi: 'चरण', ex: 'Wir befinden uns in einer schwierigen Phase.', exEn: 'We are in a difficult phase.', exHi: 'Hum ek mushkil charan mein hain.', ex2: 'Die zweite Phase beginnt nächste Woche.', ex2En: 'The second phase begins next week.', ex2Hi: 'Doosra charan agle hafte shuru hota hai.' },
    { de: 'phrasieren', pos: 'verb', level: 'B2', en: 'to phrase', hi: 'शब्दबद्ध करना', ex: 'Er phrasiert seine Kritik sehr höflich.', exEn: 'He phrases his criticism very politely.', exHi: 'Woh apni aalochana bahut vinamrata se shabdabaddh karta hai.', ex2: 'Man sollte diese Bitte anders phrasieren.', ex2En: 'One should phrase this request differently.', ex2Hi: 'Is anurodh ko alag tarike se shabdabaddh karna chahiye.', conj: { praesens: 'phrasiert', praeteritum: 'phrasierte', perfekt: 'hat phrasiert' } },
    { de: 'Piktogramm', art: 'das', gender: 'n', plural: 'Piktogramme', pos: 'noun', level: 'B2', en: 'pictogram', hi: 'चित्रलेख', ex: 'Das Piktogramm zeigt einen Notausgang.', exEn: 'The pictogram shows an emergency exit.', exHi: 'Chitra-lekh emergency exit dikhaata hai.', ex2: 'Piktogramme helfen bei der Orientierung.', ex2En: 'Pictograms help with orientation.', ex2Hi: 'Chitra-lekh disha-nirdesh mein madad karte hain.' },
    { de: 'platt', pos: 'adjective', level: 'B2', en: 'flat, banal', hi: 'चपटा, सतही', ex: 'Der Witz war ziemlich platt.', exEn: 'The joke was quite banal.', exHi: 'Mazaak kaafi satahi tha.', ex2: 'Der Reifen ist platt.', ex2En: 'The tire is flat.', ex2Hi: 'Tyre patla ho gaya hai.' },
    { de: 'poetisch', pos: 'adjective', level: 'B2', en: 'poetic', hi: 'काव्यात्मक', ex: 'Ihre Sprache ist sehr poetisch.', exEn: 'Her language is very poetic.', exHi: 'Uski bhaasha bahut kaavyaatmak hai.', ex2: 'Das war eine poetische Beschreibung.', ex2En: 'That was a poetic description.', ex2Hi: 'Yeh ek kaavyaatmak varnan tha.' },
    { de: 'Prinzip', art: 'das', gender: 'n', plural: 'Prinzipien', pos: 'noun', level: 'B2', en: 'principle', hi: 'सिद्धांत', ex: 'Das ist ein wichtiges Prinzip.', exEn: 'That is an important principle.', exHi: 'Yeh ek mahatvapurn siddhant hai.', ex2: 'Er hält sich strikt an seine Prinzipien.', ex2En: 'He strictly adheres to his principles.', ex2Hi: 'Woh apne siddhanton ka sakhti se paalan karta hai.' },
    { de: 'Probe', art: 'die', gender: 'f', plural: 'Proben', pos: 'noun', level: 'B2', en: 'sample, rehearsal, test', hi: 'नमूना, रिहर्सल', ex: 'Wie war die Probe im Probenraum?', exEn: 'How was the rehearsal in the rehearsal room?', exHi: 'Rehearsal room mein practice kaisi thi?', ex2: 'Die Probe verlief gut.', ex2En: 'The rehearsal went well.', ex2Hi: 'Rehearsal achhi rahi.' },
    { de: 'Probenraum', art: 'der', gender: 'm', plural: 'Probenräume', pos: 'noun', level: 'B2', en: 'rehearsal room', hi: 'रिहर्सल कक्ष', ex: 'Wie war die Probe im Probenraum?', exEn: 'How was the rehearsal in the rehearsal room?', exHi: 'Rehearsal room mein practice kaisi thi?', ex2: 'Der Probenraum ist heute belegt.', ex2En: 'The rehearsal room is occupied today.', ex2Hi: 'Rehearsal room aaj kabza mein hai.' },
    { de: 'ratsam', pos: 'adjective', level: 'B2', en: 'advisable', hi: 'उचित', ex: 'Das ist ratsam.', exEn: 'That\'s advisable.', exHi: 'Yeh uchit hai.', ex2: 'Es ist ratsam, früh anzukommen.', ex2En: 'It\'s advisable to arrive early.', ex2Hi: 'Jaldi pahunchna uchit hai.' },
    { de: 'Respekt', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'respect', hi: 'सम्मान', ex: 'Es fällt mir nicht schwer, Respekt zu zeigen.', exEn: 'It\'s not hard for me to show respect.', exHi: 'Mujhe samman dikhaana mushkil nahi hai.', ex2: 'Respekt muss man sich verdienen.', ex2En: 'You have to earn respect.', ex2Hi: 'Samman kamaana padta hai.' },
    { de: 'Rücksicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'consideration, regard', hi: 'ख्याल', ex: 'Ich zeige mehr Rücksicht, wenn ich nie zu hart urteile.', exEn: 'I show more consideration if I never judge too harshly.', exHi: 'Agar main kabhi bahut kathor faisla na karoon toh main zyada khyaal rakhta hoon.', ex2: 'Rücksicht auf andere ist wichtig.', ex2En: 'Consideration for others is important.', ex2Hi: 'Doosron ka khyaal rakhna mahatvapurn hai.' },
    { de: 'ruhig', pos: 'adjective', level: 'B2', en: 'calm, quiet', hi: 'शांत', ex: 'Bleib ruhig.', exEn: 'Stay calm.', exHi: 'Shaant raho.', ex2: 'Es war ein ruhiger Abend.', ex2En: 'It was a calm evening.', ex2Hi: 'Yeh ek shaant shaam thi.' },
    { de: 'Sache', art: 'die', gender: 'f', plural: 'Sachen', pos: 'noun', level: 'B2', en: 'matter, thing', hi: 'बात, चीज़', ex: 'Das ist eine ernste Sache.', exEn: 'That\'s a serious matter.', exHi: 'Yeh ek gambhir baat hai.', ex2: 'Ich kümmere mich um die Sache.', ex2En: 'I\'ll take care of the matter.', ex2Hi: 'Main is baat ka khyaal rakhoonga.' },
    { de: 'Schicksal', art: 'das', gender: 'n', plural: 'Schicksale', pos: 'noun', level: 'B2', en: 'fate, destiny', hi: 'भाग्य', ex: 'Das Schicksal hat es so gewollt.', exEn: 'Fate wanted it this way.', exHi: 'Bhaagya ne aisa chaha.', ex2: 'Ihr Schicksal berührte alle.', ex2En: 'Her fate touched everyone.', ex2Hi: 'Uske bhaagya ne sabko chhoo liya.' },
    { de: 'Schranke', art: 'die', gender: 'f', plural: 'Schranken', pos: 'noun', level: 'B2', en: 'barrier', hi: 'बाधा', ex: 'Die Schranke war geschlossen.', exEn: 'The barrier was closed.', exHi: 'Baadha band thi.', ex2: 'Es gibt keine Schranken mehr zwischen uns.', ex2En: 'There are no more barriers between us.', ex2Hi: 'Hamare beech ab koi baadha nahi hai.' },
    { de: 'Schwäche', art: 'die', gender: 'f', plural: 'Schwächen', pos: 'noun', level: 'B2', en: 'weakness', hi: 'कमज़ोरी', ex: 'Jeder hat seine Schwächen.', exEn: 'Everyone has their weaknesses.', exHi: 'Har kisi ki apni kamzoriyaan hoti hain.', ex2: 'Seine größte Schwäche ist Ungeduld.', ex2En: 'His greatest weakness is impatience.', ex2Hi: 'Uski sabse badi kamzori aadhirya hai.' },
    { de: 'schwerfallen', pos: 'verb', level: 'B2', en: 'to be difficult for someone', hi: 'मुश्किल होना', ex: 'Es fällt mir nicht schwer, Respekt zu zeigen.', exEn: 'It\'s not hard for me to show respect.', exHi: 'Mujhe samman dikhaana mushkil nahi hai.', ex2: 'Ihm fällt Deutsch nicht schwer.', ex2En: 'German isn\'t difficult for him.', ex2Hi: 'Usse German mushkil nahi lagti.', conj: { praesens: 'fällt schwer', praeteritum: 'fiel schwer', perfekt: 'ist schwergefallen' } },
    { de: 'Seminar', art: 'das', gender: 'n', plural: 'Seminare', pos: 'noun', level: 'B2', en: 'seminar', hi: 'संगोष्ठी', ex: 'Das Seminar beginnt um neun Uhr.', exEn: 'The seminar begins at nine o\'clock.', exHi: 'Seminar nau baje shuru hota hai.', ex2: 'Sie nimmt an einem Seminar teil.', ex2En: 'She is taking part in a seminar.', ex2Hi: 'Woh ek seminar mein bhaag le rahi hai.' },
    { de: 'Signal', art: 'das', gender: 'n', plural: 'Signale', pos: 'noun', level: 'B2', en: 'signal', hi: 'संकेत', ex: 'Das Signal war eindeutig.', exEn: 'The signal was clear.', exHi: 'Sanket spasht tha.', ex2: 'Er gab kein klares Signal.', ex2En: 'He gave no clear signal.', ex2Hi: 'Usne koi spasht sanket nahi diya.' },
    { de: 'smart', pos: 'adjective', level: 'B2', en: 'smart, clever', hi: 'चतुर', ex: 'Das war eine smarte Lösung.', exEn: 'That was a smart solution.', exHi: 'Yeh ek chatur samaadhaan tha.', ex2: 'Sie ist wirklich smart.', ex2En: 'She is really smart.', ex2Hi: 'Woh sach mein chatur hai.' },
    { de: 'Spielraum', art: 'der', gender: 'm', plural: 'Spielräume', pos: 'noun', level: 'B2', en: 'scope, leeway', hi: 'गुंजाइश', ex: 'Es gibt immer einen Spielraum für Verbesserung.', exEn: 'There\'s always some scope for improvement.', exHi: 'Sudhaar ki gunjaaish hamesha hoti hai.', ex2: 'Wir haben wenig Spielraum bei diesem Projekt.', ex2En: 'We have little leeway on this project.', ex2Hi: 'Is project mein hamare paas kam gunjaaish hai.' },
    { de: 'Sprachschatz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'vocabulary, word treasure', hi: 'शब्द भंडार', ex: 'Ihr Sprachschatz ist beeindruckend.', exEn: 'Her vocabulary is impressive.', exHi: 'Uska shabd bhandaar prabhaavshaali hai.', ex2: 'Lesen erweitert den Sprachschatz.', ex2En: 'Reading expands your vocabulary.', ex2Hi: 'Padhna shabd bhandaar badhaata hai.' },
    { de: 'Startchance', art: 'die', gender: 'f', plural: 'Startchancen', pos: 'noun', level: 'B2', en: 'starting chance', hi: 'शुरुआती मौका', ex: 'Jeder verdient eine faire Startchance.', exEn: 'Everyone deserves a fair starting chance.', exHi: 'Har kisi ko ek uchit shuruaati mauka milna chahiye.', ex2: 'Die Startchancen sind nicht gleich verteilt.', ex2En: 'The starting chances aren\'t distributed equally.', ex2Hi: 'Shuruaati mauke saman roop se vitarit nahi hain.' },
    { de: 'Stopp', art: 'der', gender: 'm', plural: 'Stopps', pos: 'noun', level: 'B2', en: 'stop', hi: 'रुकावट', ex: 'Wir machen einen kurzen Stopp.', exEn: 'We\'re making a short stop.', exHi: 'Hum ek chhoti si rukaavat lenge.', ex2: 'Der Stopp dauerte nur fünf Minuten.', ex2En: 'The stop lasted only five minutes.', ex2Hi: 'Rukaavat sirf paanch minute chali.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Doppelte Verneinung?',
      body: [ 'In Standard German one negative word does the whole job. Adding a second one does not make the sentence \u201cmore negative\u201d \u2014 it just makes it ungrammatical. (English dialects allow \u201cI don\u2019t know nothing\u201d; German never does.) The one exception is deliberate, stylistic Litotes, which this chapter covers below.' ],
      table: {
        head: ['Incorrect'],
        rows: [
          ['<span class="strike de">Ich habe nichts nicht gesehen.</span>'],
          ['<span class="strike de">Niemand kommt nicht.</span>'],
          ['<span class="strike de">Ich habe kein nichts.</span>']
        ]
      },
      hinglish: 'Standard German mein ek negative word hi poora kaam kar deta hai. Doosra jodne se sentence zyada negative nahi banta \u2014 bas galat ho jaata hai. English ki kuch dialects mein "I don\u2019t know nothing" chalta hai, par German mein kabhi nahi. Ek hi exception hai, aur woh jaan-boojhkar kiya jaata hai \u2014 Litotes, jo aage aa raha hai.'
    },
    {
      title: 'Korrekte Negation',
      body: [ 'One negative word is normally enough — never add a second one.' ],
      table: {
        head: ['Correct'],
        rows: [
          ['<span class="de">Ich habe nichts gesehen.</span>'],
          ['<span class="de">Niemand ist gekommen.</span>'],
          ['<span class="de">Ich habe kein Geld.</span>'],
          ['<span class="de">Er hat nie angerufen.</span>']
        ]
      },
      hinglish: 'Ek negative word normally kaafi hota hai \u2014 doosra jodne ki zaroorat nahi padti.'
    },
    {
      title: 'Was ist Litotes?',
      body: [ 'Litotes is a rhetorical device: instead of saying something directly, German sometimes expresses it through a deliberate double negative. This sounds softer, more diplomatic, and more elegant — especially in formal communication.' ]
    },
    {
      title: 'Häufige Litotes-Ausdrücke',
      body: [ 'These are the most common Litotes expressions at B2 — memorize them as fixed chunks with their softened meaning.' ],
      table: {
        head: ['Litotes', 'Meaning'],
        rows: [
          ['nicht schlecht', 'quite good'],
          ['nicht unmöglich', 'possible'],
          ['nicht selten', 'quite often'],
          ['nicht unwichtig', 'important'],
          ['nicht ungefährlich', 'rather dangerous'],
          ['nicht ausgeschlossen', 'possible'],
          ['nicht ohne Grund', 'for a good reason'],
          ['nicht unzufrieden', 'quite satisfied']
        ]
      },
      hinglish: 'Yeh B2 ke sabse common Litotes expressions hain. Inhe poore chunk ki tarah yaad karo, aur saath mein unka asli matlab bhi \u2014 kyunki word-by-word translate karne se matlab ulta samajh mein aayega.'
    },
    {
      title: 'Bedeutungsunterschiede',
      body: [ 'Litotes is a more modest, less direct way of saying something — compare the tone.' ],
      table: {
        head: ['Direct', 'Litotes'],
        rows: [
          ['gut (positive)', 'nicht schlecht (more modest)'],
          ['perfekt (very strong)', 'nicht schlecht (less direct)']
        ]
      },
      hinglish: 'Litotes kisi baat ko kehne ka thoda polite aur kam seedha tareeka hai. Neeche tone compare karo \u2014 matlab lagbhag wahi rehta hai, bas kehne ka andaaz narm ho jaata hai.'
    },
    {
      title: 'Litotes im formellen Deutsch',
      body: [ 'Litotes appears frequently in newspapers, reports, presentations, university, and business writing.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Der Vorschlag ist nicht schlecht. Diese Lösung ist nicht unmöglich. Das Ergebnis ist nicht überraschend. Der Plan ist nicht ohne Risiko. Das Problem ist nicht unlösbar.</span>']
        ]
      },
      hinglish: 'Litotes newspapers, reports, presentations aur business writing mein aksar dikhta hai, kyunki wahan seedha judgement dene se bachte hain.'
    },
    {
      title: 'Wann KEINE doppelte Negation?',
      body: [ 'Standard German prefers ONE negative. Only rhetorical Litotes intentionally combines negatives — accidental double negation is always wrong.' ],
      table: {
        head: ['English (some dialects)', 'German (always wrong)'],
        rows: [
          ['I don\'t know nothing.', '<span class="strike de">Ich weiß nichts nicht.</span>']
        ]
      },
      hinglish: 'Standard German ek hi negative use karta hai. Sirf Litotes mein do negatives jaan-boojhkar aate hain, aur wahan uska ek style purpose hota hai. Galti se do negatives lag jaayein to woh hamesha galat hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from accidentally combining two negatives, or overusing Litotes where a direct word is more natural.' ],
      mistakes: [
        { wrong: 'Ich habe nichts nicht verstanden.', right: 'Ich habe nichts verstanden.', why: 'One negative ("nichts") is enough — never add a second "nicht".' },
        { wrong: 'Niemand kommt nicht.', right: 'Niemand kommt.', why: '"Niemand" alone is a complete negative — adding "nicht" is incorrect.' },
        { wrong: 'Das ist nicht ungut.', right: 'Das ist gut.', why: '"nicht ungut" is not a natural Litotes expression — just say "gut" directly.' },
        { wrong: 'Ich bin nicht niemals dort gewesen.', right: 'Ich bin nie dort gewesen.', why: 'Combining "nicht" with "niemals" creates confusing accidental double negation.' },
        { wrong: 'Er hat kein nichts gekauft.', right: 'Er hat nichts gekauft.', why: '"kein" and "nichts" cannot be combined — choose one negative word.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 galti se do negatives lag jaana, ya Litotes ko wahan use karna jahan seedha shabd zyada natural lagta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Recognizing Litotes helps you understand diplomatic, formal Goethe B2 texts — and using it yourself makes your German sound more native.' ],
      note: 'Memory trick: one negative = normal German. Two negatives = usually wrong. Two negatives with stylistic purpose = Litotes = polite, softer, more diplomatic.',
      hinglish: 'Litotes pehchaan lo to Goethe B2 ke diplomatic aur formal texts samajhna aasaan ho jaata hai. Aur khud thoda use karo to German kaafi natural lagne lagta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Blogeintrag: Ein Schauspielseminar hinter den Kulissen',
    titleEn: 'Blog post: an acting seminar behind the scenes',
    tokens: [
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'unserem', role: 'plain', en: 'our (neut. dat.)', hi: 'हमारे', type: 'Possessivartikel · Dat.' },
      { w: 'Seminar', role: 'plain', en: 'seminar', hi: 'सेमिनार', type: 'Noun · neut.', why: 'das Seminar (this chapter).' },
      { w: 'zur', role: 'plain', en: 'on', hi: 'पर', type: 'Contraction · zu der' },
      { w: 'Schauspielkunst', role: 'plain', en: 'acting art', hi: 'अभिनय कला', type: 'Noun · fem.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'Mimik', role: 'plain', en: 'facial expression', hi: 'चेहरे के भाव', type: 'Noun · fem.', why: 'die Mimik (this chapter).' },
      { w: 'längst', role: 'plain', en: 'by far', hi: 'बहुत', type: 'Adverb' },
      { w: 'nicht', role: 'r-negation', en: 'not (doppelte Verneinung)', hi: 'नहीं (दोहरा निषेध)', type: 'Litotes-Negation', why: '"nicht unwichtig" = not unimportant (i.e., quite important): double negation softens while still emphasising (this chapter).' },
      { w: 'unwichtig', role: 'r-negation', en: 'unimportant (Satzende)', hi: 'महत्वहीन (Satzende)', type: 'Adjective mit Negativpräfix un-' },
      { w: '–', plain: true },
      { w: 'im', role: 'plain', en: 'on the', hi: 'इसके', type: 'Contraction · in dem' },
      { w: 'Gegenteil', role: 'plain', en: 'contrary', hi: 'विपरीत', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'sie', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'entscheidet', role: 'plain', en: 'decides', hi: 'तय करती है', type: 'Verb · entscheiden' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a whole', hi: 'एक पूरी', type: 'Article · Akk.' },
      { w: 'ganze', role: 'plain', en: 'whole', hi: 'पूरी', type: 'Adjective' },
      { w: 'Szene', role: 'plain', en: 'scene (Satzende)', hi: 'दृश्य (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Unsere', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Dozentin', role: 'plain', en: 'lecturer (f.)', hi: 'व्याख्याता', type: 'Noun · fem.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'nicht', role: 'r-negation', en: 'not (Litotes)', hi: 'नहीं (Litotes)', type: 'Litotes-Negation', why: '"nicht unbekannt" = not unknown (i.e., quite well-known): another litotes (this chapter).' },
      { w: 'unbekannt', role: 'r-negation', en: 'unknown', hi: 'अज्ञात', type: 'Adjective mit Negativpräfix un-' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'freien', role: 'plain', en: 'independent', hi: 'स्वतंत्र', type: 'Adjective' },
      { w: 'Theaterszene', role: 'plain', en: 'theatre scene (Satzende)', hi: 'रंगमंच जगत (Satzende)', type: 'Noun · fem.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'arbeitet', role: 'plain', en: 'works', hi: 'काम करती है', type: 'Verb · arbeiten' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'klaren', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective' },
      { w: 'Prinzipien', role: 'plain', en: 'principles (Satzende)', hi: 'सिद्धांतों (Satzende)', type: 'Noun · plural', why: 'das Prinzip (this chapter).' },
      { w: ':', plain: true },
      { w: 'kein', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'Wort', role: 'plain', en: 'word', hi: 'शब्द', type: 'Noun · neut.' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Preposition · Akk.' },
      { w: 'Bedeutung', role: 'plain', en: 'meaning', hi: 'अर्थ', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'keine', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'Geste', role: 'plain', en: 'gesture', hi: 'भाव-भंगिमा', type: 'Noun · fem.' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Preposition · Akk.' },
      { w: 'Absicht', role: 'plain', en: 'intention (Satzende)', hi: 'इरादा (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'पिछली', type: 'Article · Dat.' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछली', type: 'Adjective' },
      { w: 'Probe', role: 'plain', en: 'rehearsal', hi: 'रिहर्सल', type: 'Noun · fem.', why: 'die Probe (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Probenraum', role: 'plain', en: 'rehearsal room', hi: 'रिहर्सल कक्ष', type: 'Noun · masc.', why: 'der Probenraum (this chapter).' },
      { w: 'ging', role: 'plain', en: 'was about (Satzklammer)', hi: 'बारे में था', type: 'Verb · gehen' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'um', role: 'plain', en: 'about', hi: 'बारे में', type: 'Preposition · Akk.' },
      { w: 'Mitleid', role: 'plain', en: 'compassion (Satzende)', hi: 'सहानुभूति (Satzende)', type: 'Noun · neut.', why: 'das Mitleid (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'that', hi: 'जो', type: 'Relativpronomen · Akk.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Figur', role: 'plain', en: 'character', hi: 'पात्र', type: 'Noun · fem.' },
      { w: 'beim', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Publikum', role: 'plain', en: 'audience', hi: 'दर्शकों', type: 'Noun · neut.' },
      { w: 'wecken', role: 'plain', en: 'evoke (Satzende)', hi: 'जगाना (Satzende)', type: 'Verb · wecken (Nebensatz, Satzende)' },
      { w: 'soll', role: 'plain', en: 'is meant to (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu' },
      { w: 'dabei', role: 'plain', en: 'in doing so', hi: 'इस दौरान', type: 'Pronominaladverb' },
      { w: 'platt', role: 'plain', en: 'flat, trite', hi: 'नीरस', type: 'Adjective', why: 'platt (this chapter).' },
      { w: 'oder', role: 'plain', en: 'or', hi: 'या', type: 'Conjunction' },
      { w: 'nichtssagend', role: 'plain', en: 'meaningless', hi: 'निरर्थक', type: 'Adjective', why: 'nichtssagend (this chapter).' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'wirken', role: 'plain', en: 'seem (Satzende)', hi: 'दिखना (Satzende)', type: 'Verb · wirken (Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not (Litotes)', hi: 'नहीं (Litotes)', type: 'Litotes-Negation', why: '"nicht selten" = not rarely (i.e., often): a litotes using an adverb instead of an adjective (this chapter).' },
      { w: 'selten', role: 'r-negation', en: 'rarely', hi: 'शायद ही कभी', type: 'Adverb' },
      { w: 'fällt', role: 'plain', en: 'is', hi: 'है', type: 'Verb · schwerfallen' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'Anfängern', role: 'plain', en: 'beginners', hi: 'शुरुआती लोगों को', type: 'Noun · plural' },
      { w: 'schwer', role: 'plain', en: 'difficult (Satzende)', hi: 'कठिन (Satzende)', type: 'Adjective', why: 'schwerfallen (this chapter).' },
      { w: ',', plain: true },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'eigene', role: 'plain', en: 'own', hi: 'अपनी', type: 'Adjective' },
      { w: 'Schwäche', role: 'plain', en: 'weakness', hi: 'कमज़ोरी', type: 'Noun · fem.', why: 'die Schwäche (this chapter).' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Bühne', role: 'plain', en: 'stage', hi: 'मंच', type: 'Noun · fem.' },
      { w: 'zuzulassen', role: 'plain', en: 'to allow (Satzende)', hi: 'स्वीकार करना (Satzende)', type: 'Verb · zulassen (Infinitiv mit zu, Satzende)' },
      { w: '.', plain: true },
      { w: 'Doch', role: 'plain', en: 'yet', hi: 'फिर भी', type: 'Konjunktion' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-negation', en: 'without (Litotes)', hi: 'बिना (Litotes)', type: 'Litotes-Ausdruck', why: '"ohne Zweifel" = without doubt (i.e., certainly): a fixed litotes-like idiom (this chapter).' },
      { w: 'Zweifel', role: 'r-negation', en: 'doubt', hi: 'संदेह', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'erste', role: 'plain', en: 'first', hi: 'पहला', type: 'Adjective' },
      { w: 'Schritt', role: 'plain', en: 'step', hi: 'कदम', type: 'Noun · masc.' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'की ओर', type: 'Preposition · Dat.' },
      { w: 'echtem', role: 'plain', en: 'genuine (masc. dat.)', hi: 'सच्चे', type: 'Adjective · Dat.' },
      { w: 'Respekt', role: 'plain', en: 'respect', hi: 'सम्मान', type: 'Noun · masc.', why: 'der Respekt (this chapter).' },
      { w: 'vor', role: 'plain', en: 'for', hi: 'के प्रति', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'अपनी', type: 'Article · Dat.' },
      { w: 'eigenen', role: 'plain', en: 'own', hi: 'अपनी', type: 'Adjective' },
      { w: 'Rolle', role: 'plain', en: 'role (Satzende)', hi: 'भूमिका (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Spielraum', role: 'plain', en: 'leeway', hi: 'गुंजाइश', type: 'Noun · masc.', why: 'der Spielraum (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'persönliche', role: 'plain', en: 'personal', hi: 'व्यक्तिगत', type: 'Adjective' },
      { w: 'Interpretation', role: 'plain', en: 'interpretation', hi: 'व्याख्या', type: 'Noun · fem.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'dabei', role: 'plain', en: 'here', hi: 'यहाँ', type: 'Adverb' },
      { w: 'keineswegs', role: 'r-negation', en: 'by no means (Litotes)', hi: 'किसी भी तरह से नहीं (Litotes)', type: 'Litotes-Adverb', why: '"keineswegs klein" = by no means small (i.e., quite large): a strong litotes closing the passage (this chapter).' },
      { w: 'klein', role: 'r-negation', en: 'small (Satzende)', hi: 'छोटा (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'In our acting seminar, facial expression is by far not unimportant — on the contrary, it often decides an entire scene. Our lecturer is not unknown in the independent theatre scene and works with clear principles: no word without meaning, no gesture without intention. In the last rehearsal in the rehearsal room, it was about the compassion a character is meant to evoke in the audience, without seeming flat or meaningless in the process. It is not rarely difficult for beginners to allow their own weakness on stage. But that, without doubt, is the first step to genuine respect for one\'s own role. The leeway for personal interpretation here is by no means small.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_012_L001', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie fandest du meine Szene in der Probe eben?', en: 'Timo, how did you find my scene in the rehearsal just now?' },
      { id: 'B2_012_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nicht schlecht, wirklich. Nur der letzte Satz war nicht ganz unproblematisch.', en: 'Not bad, really. Only the last line was not entirely unproblematic.' },
      { id: 'B2_012_L003', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das dachte ich mir schon. Was würdest du ändern?', en: 'I thought so. What would you change?' },
      { id: 'B2_012_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Eine kleine Pause davor wäre nicht unklug.', en: 'A small pause before it wouldn\'t be unwise.' }
    ],
    transcript: 'Timo, wie fandest du meine Szene in der Probe eben? Nicht schlecht, wirklich. Nur der letzte Satz war nicht ganz unproblematisch. Das dachte ich mir schon. Was würdest du ändern? Eine kleine Pause davor wäre nicht unklug.',
    translation: 'Timo, how did you find my scene in the rehearsal just now? Not bad, really. Only the last line was not entirely unproblematic. I thought so. What would you change? A small pause before it wouldn\'t be unwise.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'fandest' },
      { w: 'du' },
      { w: 'meine' },
      { w: 'Szene' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Probe' },
      { w: 'eben' },
      { w: '?', plain: true },
      { w: 'Nicht' },
      { w: 'schlecht' },
      { w: ',', plain: true },
      { w: 'wirklich' },
      { w: '.', plain: true },
      { w: 'Nur' },
      { w: 'der' },
      { w: 'letzte' },
      { w: 'Satz' },
      { w: 'war' },
      { w: 'nicht' },
      { w: 'ganz' },
      { w: 'unproblematisch' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'dachte' },
      { w: 'ich' },
      { w: 'mir' },
      { w: 'schon' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'würdest' },
      { w: 'du' },
      { w: 'ändern' },
      { w: '?', plain: true },
      { w: 'Eine' },
      { w: 'kleine' },
      { w: 'Pause' },
      { w: 'davor' },
      { w: 'wäre' },
      { w: 'nicht' },
      { w: 'unklug' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie beschreibt Timo die letzte Zeile?', qEn: 'How does Timo describe the last line?', options: ['perfekt', 'katastrophal', 'nicht ganz unproblematisch', 'viel zu kurz'], optionsEn: ['perfect', 'disastrous', 'not entirely unproblematic', 'far too short'], answer: 2,
        explain: '"Der letzte Satz war nicht ganz unproblematisch."' },
      { q: 'Was schlägt Timo vor?', qEn: 'What does Timo suggest?', options: ['die Szene streichen', 'eine kleine Pause davor', 'lauter sprechen', 'den Satz wiederholen'], optionsEn: ['cut the scene', 'a short break beforehand', 'speak louder', 'repeat the sentence'], answer: 1,
        explain: '"Eine kleine Pause davor wäre nicht unklug."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Ein Freund fragt, wie du seine Szene in der Probe fandest.", taskEn: "A friend asks how you found his scene in the rehearsal.", de: "Nicht schlecht, wirklich. Nur der letzte Satz war nicht ganz unproblematisch.", en: "Not bad, really. Only the last line wasn't entirely unproblematic." },
    { task: "Er fragt, was du am Text ändern würdest.", taskEn: "He asks what you'd change in the text.", de: "Es ist nicht uninteressant, aber es ist auch nicht ganz klar.", en: "It's not uninteresting, but it's not entirely clear either." },
    { task: "Deine Kollegin fragt, ob der Vorschlag schlecht ist.", taskEn: "Your colleague asks whether the proposal is bad.", de: "Der Vorschlag ist nicht unvernünftig, wir sollten ihn prüfen.", en: "The proposal isn't unreasonable, we should examine it." },
    { task: "Ein Kollege fragt, ob du seine Idee ablehnst.", taskEn: "A colleague asks whether you reject his idea.", de: "Ich halte sie nicht für unmöglich, nur für schwierig.", en: "I don't consider it impossible, only difficult." },
    { task: "Eine Freundin fragt, wie du den Probenraum findest.", taskEn: "A friend asks what you think of the rehearsal room.", de: "Er ist nicht ungeeignet, aber ein größerer wäre ratsam.", en: "It's not unsuitable, but a bigger one would be advisable." },
    { task: "Rollenspiel: Ihr gebt einander Feedback nach der Probe.", taskEn: "Role-play: you give each other feedback after the rehearsal.", de: "Deine Mimik war nicht unpassend. — Und dein Text war nicht ohne Wirkung.", en: "Your facial expression wasn't inappropriate. — And your text wasn't without effect." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short review or diplomatic feedback text (six to eight sentences) about a performance, project, or product — using at least three Litotes expressions (nicht schlecht, nicht unmöglich, nicht ohne Risiko, etc.) and at least two examples of correct simple negation (nichts, niemand, nie, kein).',
    starters: ['Das war nicht schlecht.', 'Niemand hat …', 'Der Plan ist nicht ohne …', 'Das Ergebnis ist nicht …'],
    placeholder: 'Die Probe war nicht schlecht. Niemand hat einen Fehler gemacht …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct German?',
      options: ['Ich habe nichts gesehen.', 'Ich habe nichts nicht gesehen.', 'Ich habe kein nichts gesehen.'],
      answer: 0,
      explain: 'One negative word ("nichts") is correct and sufficient.'
    },
    gap: {
      sentence: ['Der Vorschlag ist ', ' schlecht.'],
      gaps: [ { answer: 'nicht', accepts: ['nicht'] } ],
      explain: '"nicht schlecht" is a Litotes expression meaning "quite good".'
    },
    match: {
      q: 'Match each Litotes expression to its meaning.',
      pairs: [
        { noun: 'nicht schlecht', art: 'quite good' },
        { noun: 'nicht unmöglich', art: 'possible' },
        { noun: 'nicht selten', art: 'quite often' },
        { noun: 'nicht unwichtig', art: 'important' }
      ]
    },
    builder: {
      target: 'Build (Litotes): "The problem isn\'t unsolvable."',
      bank: ['Das', 'Problem', 'ist', 'nicht', 'unlösbar', '.'],
      answer: ['Das', 'Problem', 'ist', 'nicht', 'unlösbar', '.'],
      roles: { 'nicht': 'r-litotes', 'unlösbar': 'r-litotes' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Niemand kommt nicht.',
      right: 'Niemand kommt.',
      explain: '"Niemand" alone is a complete negative — adding "nicht" creates incorrect double negation.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is correct?', options: ['Ich habe nichts gesehen.', 'Ich habe nichts nicht gesehen.', 'Ich habe kein nichts gesehen.'], answer: 0,
      explain: 'Standard German uses only ONE negative word.' },
    { q: 'What does "nicht schlecht" mean as Litotes?', options: ['Quite good', 'Very bad', 'Perfect'], answer: 0,
      explain: '"nicht schlecht" softly means "quite good" — a diplomatic understatement.' },
    { q: 'Which sentence uses Litotes correctly?', options: ['Der Plan ist nicht ohne Risiko.', 'Der Plan ist kein Risiko nicht.', 'Der Plan ist nicht kein Risiko.'], answer: 0,
      explain: '"nicht ohne Risiko" = rather risky — a correct, diplomatic Litotes expression.' },
    { q: 'What is the rule for standard German negation?', options: ['Always use two negatives', 'One negative is normally enough', 'Negation is optional'], answer: 1,
      explain: 'Standard German normally uses only one negative word per clause.' },
    { q: 'Which sentence contains an error?', options: ['Er hat nie angerufen.', 'Er hat kein nichts gekauft.', 'Niemand ist gekommen.'], answer: 1,
      explain: '"kein" and "nichts" cannot be combined — it should be "Er hat nichts gekauft."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-neg', html: 'Standard German avoids double negation — one negative word (nichts, niemand, nie, kein) is always enough in a clause.' },
    { c: 'r-litotes', html: 'Litotes deliberately pairs "nicht" with a negative-leaning word to soften or diplomatically strengthen a statement: nicht schlecht, nicht unmöglich, nicht ohne Risiko.' },
    { c: 'r-litotes', html: 'Litotes is common in formal, diplomatic German — newspapers, reports, presentations, and business writing.' }
  ],
  revisionTips: [
    'Whenever you write "nicht" near another negative, stop and check: is this an accidental double negation, or a recognized Litotes expression?',
    'Build a personal list of the eight core Litotes expressions and practise using them in feedback and reviews.',
    'When giving criticism, reach for Litotes (nicht ganz überzeugend, nicht ohne Schwächen) instead of a blunt direct statement.'
  ]
};

window.CHAPTER = CHAPTER;
