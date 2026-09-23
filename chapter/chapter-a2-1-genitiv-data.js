/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 1
   "Genitiv: Name + s"  (possession with proper names)
   Vocabulary source: uploaded chapter-01 word list (17 items).
   Theme = first day of the A2 course; Season 2, Episode 1.
   Recycles A1: Perfekt, Dativ, Akkusativ, Modalverben,
   trennbare Verben, Wechselpräpositionen.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a2-1-genitiv',
  phase: 'A2 · Phase 1',
  number: 1,
  title: 'Genitiv: Name + s',
  titleEn: 'Possession with Names',
  description: 'Your first step into A2 — and it\u2019s a small one. Germans show possession with names by adding a simple -s: Annas Buch, Rohans Tasche, Frau Webers B\u00fcro. No new endings to memorise, no article changes. Names ending in s, \u00df, x or z just take an apostrophe: Max\u2019 Handy, Felix\u2019 Fahrrad.',
  xp: 150,
  time: 25,
  difficulty: 'Elementary',
  nextChapter: { number: 2, title: 'Perfekt (Wiederholung)', titleEn: 'The Spoken Past — Review' , href: 'chapter-a2-2-perfekt-review.html' },

  prevChapter: { number: 47, title: 'Goethe A1 Final', titleEn: 'The A1 Finale', href: 'chapter-a1-47-goethe-final.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Season 2 begins. The Goethe A1 certificates have just been handed out, and the same classroom feels new: today is the first day of the A2 course. On the table lie books, bags, phones and photos \u2014 and Petra and Malte discover how naturally Germans say whose things they are: Annas Buch, Petras Handy, Rohans Tasche.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Name + s in natural conversation'
    ],
    scene: 'Erster Tag im A2-Kurs \u2014 Berlin',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Schau', role: 'r-verb', en: 'look', hi: 'देखो', pron: 'show', type: 'Verb · imperative' },
        { w: '!', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Kais', role: 'r-subject', en: 'Kai (genitive)', hi: 'काई का', pron: 'kice', type: 'Name · genitive', why: 'Genitiv with names: Name + s, no apostrophe (this chapter).', ex: 'Ist das Kais Handy?', exEn: 'Is that Kai’s phone?' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Look! Is that the phone of Kai?', hi: 'Dekho! Kya yeh Kai ka phone hai?' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'Kais', role: 'r-subject', en: 'Kai (genitive)', hi: 'काई का', pron: 'kice', type: 'Name · genitive' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Kais', role: 'r-subject', en: 'Kai (genitive)', hi: 'काई का', pron: 'kice', type: 'Name · genitive' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schwarz', role: 'r-adjective', en: 'black', hi: 'काला', pron: 'shvarts', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'No, that is not the phone of Kai. The phone of Kai is black.', hi: 'Nahi, yeh Kai ka phone nahi hai. Kai ka phone kaala hai.' },
      { speaker: 'Petra', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'Julias', role: 'r-subject', en: 'Julia (genitive)', hi: 'यूलिया का', pron: 'YOO-lee-as', type: 'Name · genitive' },
        { w: '?', plain: true }
      ], en: 'Then maybe it is Julia’s?', hi: 'Toh shayad yeh Julia ka hai?' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Julias', role: 'r-subject', en: 'Julia (genitive)', hi: 'यूलिया का', pron: 'YOO-lee-as', type: 'Name · genitive' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'rot', role: 'r-adjective', en: 'red', hi: 'लाल', pron: 'roht', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'this', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'grau', role: 'r-adjective', en: 'grey', hi: 'धूसर', pron: 'grow', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The phone of Julia is red. This one here is grey.', hi: 'Julia ka phone laal hai. Yeh wala grey hai.' },
      { speaker: 'Petra', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb', why: 'bestimmt = surely / certainly (this chapter).', ex: 'Das ist bestimmt seins.', exEn: 'That is surely his.' },
        { w: 'Robins', role: 'r-subject', en: 'Robin (genitive)', hi: 'रॉबिन का', pron: 'RO-bins', type: 'Name · genitive' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'graues', role: 'r-akkusativ', en: 'grey', hi: 'धूसर', pron: 'GROW-es', type: 'Adjective' },
        { w: 'Handy', role: 'r-akkusativ', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Hmm. That is surely of Robin. He always has a grey phone.', hi: 'Hmm. Yeh zaroor Robin ka hai. Uske paas hamesha grey phone hota hai.' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Robins', role: 'r-subject', en: 'Robin (genitive)', hi: 'रॉबिन का', pron: 'RO-bins', type: 'Name · genitive' },
        { w: 'Handy', role: 'r-subject', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Ruf', role: 'r-verb', en: 'call', hi: 'फ़ोन करो', pron: 'roof', type: 'Verb · imperative', lexicalUnit: 'anrufen' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '!', plain: true }
      ], en: 'Exactly! That is the phone of Robin. Call him!', hi: 'Bilkul! Yeh Robin ka phone hai. Use call karo!' },
      { speaker: 'Petra', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'करती हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'sofort', role: 'r-adverb', en: 'right away', hi: 'तुरंत', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Yes, good idea! I will call him right away.', hi: 'Haan, achha vichaar! Main use turant call karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A2 opens with the gentlest possible step: to say something belongs to a person, put the <strong>name first and add -s</strong> \u2014 <span class="de r-genitiv">Annas</span> Buch, <span class="de r-genitiv">Rohans</span> Tasche, <span class="de r-genitiv">Frau Webers</span> B\u00fcro. No apostrophe (unlike English), no article, no new endings. You already know <span class="de">das Buch von Anna</span> from A1 \u2014 both are correct, but <span class="de r-genitiv">Annas Buch</span> is shorter and sounds more natural, especially in writing. Names ending in <strong>s, \u00df, x, z</strong> take only an apostrophe: <span class="de r-genitiv">Max\u2019</span> Handy, <span class="de r-genitiv">Felix\u2019</span> Fahrrad, <span class="de r-genitiv">Hans\u2019</span> Auto.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner who has just finished A1. ' +
    'The lesson is the GENITIVE WITH PROPER NAMES (Genitiv: Name + s): Annas Buch, Rohans Tasche, Frau Webers B\u00fcro; apostrophe for names ending in s/\u00df/x/z: Max\u2019 Handy, Felix\u2019 Fahrrad, Hans\u2019 Auto. ' +
    'The learner wrote sentences about family and friends\u2019 belongings below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Name + s, written together, NO apostrophe: Annas Buch (not Anna\u2019s Buch), Rohans Tasche, Papas Auto.\n' +
    '- Names ending in s, \u00df, x or z take an apostrophe only, no extra s: Max\u2019 Handy, Felix\u2019 Fahrrad, Hans\u2019 Auto.\n' +
    '- With titles/full names the -s goes on the last word: Frau Webers B\u00fcro, Herrn M\u00fcllers Auto is fine as Herr M\u00fcllers Auto at A2.\n' +
    '- No article before the possessive name: Annas Buch, never "die Annas Buch" or "das Annas Buch".\n' +
    '- The alternative "das Buch von Anna" (von + dative) is also correct \u2014 do not mark it wrong; you may note Name + s is more natural in writing.\n' +
    '- The possessed noun keeps its normal case in the sentence: "Ich sehe Annas Buch" (accusative), "mit Rohans Tasche" (dative).\n' +
    '- Wessen + noun takes NO article: "Wessen Handy ist das?" \u2014 and "Wem geh\u00f6rt das?" (geh\u00f6ren + dative) is an equally correct spoken alternative; do not mark either wrong.\n' +
    '- Verb stays in position 2; all nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Genitiv check:</b> one sentence on whether Name + s and the apostrophe rule were used correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong start to A2 \u2014 Name + s is yours. Next: reactivate the spoken past in <span class="de">Perfekt (Wiederholung)</span>.',
    mid: 'Good. Re-read the apostrophe card (s, \u00df, x, z) once, then continue.',
    low: 'Worth another pass \u2014 the whole chapter is one rule: Name + s, apostrophe after s/\u00df/x/z. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Annas', role: 'r-genitiv' }, { w: 'Buch', role: 'r-subject' },
    { w: 'liegt', role: 'r-verb' }, { w: 'auf', role: 'r-preposition' },
    { w: 'dem', role: 'r-dativ' }, { w: 'Tisch', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one rule that opens A2: Name + s.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Season 2 begins \u2014 certificates, new course, and whose things are on the table.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the A2 starter words: anmelden, der Verein, das Handy, die Note, gemeinsam, einverstanden.' },
    { id: 'grammar',    label: 'Name + s',   tag: 'core',
      objective: 'Master Name + s, the apostrophe after s/\u00df/x/z, and when von is fine too.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read about Rohans family \u2014 full of possessives \u2014 and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch whose things are whose in a quick classroom conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say whose things are on the table and ask whose something is.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences about your family\u2019s belongings with Name + s.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Name + s, the apostrophe rule and von vs Genitiv with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The A2 starter words \u2014 anmelden, der Verein, das Handy, die Note and more \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Name + s formation drills, von vs Genitiv choices, apostrophe practice, and a describe-your-room task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The Name + s rule, the s/\u00df/x/z apostrophe, von vs Genitiv, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Annas Buch', text: 'Show possession with Name + s' },
    { de: 'Max\u2019 Handy \u00b7 Felix\u2019 Fahrrad', text: 'Use the apostrophe after s, \u00df, x, z' },
    { de: 'das Auto von Anna', text: 'Know when von is fine too' },
    { de: 'Frau Webers B\u00fcro', text: 'Handle titles and full names' },
    { de: 'kein Apostroph vor dem s', text: 'Avoid the English \u2019s trap' }
  ],

  // ---------- Vocabulary (17 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Genitiv', art: 'der', gender: 'm', plural: 'Genitive', pos: 'noun', en: 'genitive (possession case)', hi: 'संबंध कारक', ex: 'Annas Buch \u2014 das ist der Genitiv.', exEn: 'Anna\u2019s book \u2014 that is the genitive.' },
    { de: 'Handy', art: 'das', gender: 'n', plural: 'Handys', pos: 'noun', en: 'mobile phone', hi: 'मोबाइल फ़ोन', ex: 'Das ist Max\u2019 Handy.', exEn: 'That is Max\u2019s phone.' },
    { de: 'anmelden', pos: 'verb', en: 'to sign up, to register (separable)', hi: 'पंजीकरण करना', ex: 'Ich melde uns heute im Verein an.', exEn: 'I\u2019ll register us at the club today.', conj: { praesens: 'meldet an', praeteritum: 'meldete an', perfekt: 'hat angemeldet' } },
    { de: 'Verein', art: 'der', gender: 'm', plural: 'Vereine', pos: 'noun', en: 'club, association', hi: 'क्लब', ex: 'Wir \u00fcben Deutsch im Verein.', exEn: 'We practise German at the club.' },
    { de: 'gemeinsam', pos: 'adverb', en: 'together, jointly', hi: 'साथ मिलकर', ex: 'Wir lernen gemeinsam im Kurs.', exEn: 'We study together in the course.' },
    { de: 'einverstanden sein', pos: 'verb', en: 'to agree, to be in agreement', hi: 'सहमत होना', ex: 'Bist du einverstanden?', exEn: 'Do you agree?', conj: { praesens: 'ist einverstanden', praeteritum: 'war einverstanden', perfekt: 'ist einverstanden gewesen' } },
    // ===== Active Support =====
    { de: 'Note', art: 'die', gender: 'f', plural: 'Noten', pos: 'noun', en: 'grade, mark', hi: 'ग्रेड, अंक', ex: 'Anitas Note in Biologie ist sehr gut.', exEn: 'Anita\u2019s grade in biology is very good.' },
    { de: 'Ausbildung', art: 'die', gender: 'f', plural: 'Ausbildungen', pos: 'noun', en: 'training, vocational education', hi: 'प्रशिक्षण', ex: 'Rohans Schwester macht eine Ausbildung.', exEn: 'Rohan\u2019s sister is doing a training programme.' },
    { de: 'Biologie', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'biology', hi: 'जीव विज्ञान', ex: 'Ihre Ausbildung ist in Biologie.', exEn: 'Her training is in biology.' },
    { de: 'ganz', pos: 'adverb', en: 'completely, all the way, quite', hi: 'बिल्कुल, पूरा', ex: 'Mein Zertifikat ist ganz neu.', exEn: 'My certificate is brand new.' },
    { de: 'sp\u00e4testens', pos: 'adverb', en: 'at the latest', hi: 'ज़्यादा से ज़्यादा (समय तक)', ex: 'Wir treffen uns sp\u00e4testens um f\u00fcnf.', exEn: 'We meet at five at the latest.' },
    { de: 'renovieren', pos: 'verb', en: 'to renovate', hi: 'मरम्मत करना', ex: 'Onkel Raj renoviert Omas Haus.', exEn: 'Uncle Raj is renovating Grandma\u2019s house.', conj: { praesens: 'renoviert', praeteritum: 'renovierte', perfekt: 'hat renoviert' } },
    { de: 'Grippe', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'flu', hi: 'फ़्लू', ex: 'Oma hat die Grippe.', exEn: 'Grandma has the flu.' },
    { de: 'geschieden', pos: 'adjective', en: 'divorced', hi: 'तलाक़शुदा', ex: 'Rohans Onkel ist geschieden.', exEn: 'Rohan\u2019s uncle is divorced.' },
    { de: 'daf\u00fcr', pos: 'adverb', en: 'instead, in return, to make up for it', hi: 'उसके बदले', ex: 'Oma ist krank, daf\u00fcr hilft die ganze Familie.', exEn: 'Grandma is ill \u2014 to make up for it, the whole family helps.' },
    // ===== Passive =====
    { de: 'folgend', pos: 'adjective', en: 'following, next', hi: 'अगला, निम्नलिखित', ex: 'Am folgenden Tag kommt der Arzt.', exEn: 'The following day the doctor comes.' },
    { de: 'bitter', pos: 'adjective', en: 'bitter', hi: 'कड़वा', ex: 'Der Kaffee im Verein ist bitter.', exEn: 'The coffee at the club is bitter.' }
  ],

  // ---------- Name + s (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Name + s \u2014 the everyday Genitiv',
      whatIsIt: 'A2 opens with the smallest possible step. To show that something belongs to a person, you put the <b>name first</b> and add <b>-s</b>. Nothing else changes \u2014 no new endings, no article.',
      goldenRule: '<b>Name + s</b>, written together, <b>no apostrophe</b>, <b>no article</b>.',
      why: 'German once had a full genitive ending on every noun. It survives intact only with names, which is why this is the one genitive form you can use everywhere without learning a table.',
      formula: [
        'Anna  + s  \u2192  <b>Annas</b> Buch',
        'Rohan + s  \u2192  <b>Rohans</b> Tasche',
        'Frau Weber + s  \u2192  <b>Frau Webers</b> B\u00fcro   (-s on the LAST word)'
      ],
      memoryTrick: 'Hindi "Anna <b>ki</b> kitaab" ka order same hai \u2014 naam pehle, cheez baad mein. Sirf <b>-s</b> naya hai, aur apostrophe kabhi nahi.',
      recap: [
        '<b>Annas Buch</b> \u2014 name, then <b>-s</b>, then the thing.',
        'No apostrophe (that is English) and no article.',
        'Titles and full names: the <b>-s</b> goes on the last word.'
      ],
      body: [
        'To say something belongs to a person, put the <strong>name first</strong> and add <strong>-s</strong> \u2014 written together, <strong>no apostrophe</strong>. The owned thing follows, with no article before the name.'
      ],
      table: {
        head: ['Owner', 'Genitiv', 'Meaning'],
        rows: [
          ['Anna', '<span class="de"><span class="r-genitiv">Annas</span> Buch</span>', 'Anna\u2019s book'],
          ['Rohan', '<span class="de"><span class="r-genitiv">Rohans</span> Tasche</span>', 'Rohan\u2019s bag'],
          ['Frau Weber', '<span class="de"><span class="r-genitiv">Frau Webers</span> B\u00fcro</span>', 'Frau Weber\u2019s office'],
          ['Papa', '<span class="de"><span class="r-genitiv">Papas</span> Auto</span>', 'Dad\u2019s car']
        ]
      },
      note: 'Unlike English, German writes the s <b>without</b> an apostrophe: <b>Annas</b> Buch, not <span class="strike">Anna\u2019s Buch</span>. And no article before the name: <b>Annas Buch</b>, never <span class="strike">die Annas Buch</span>. With titles and full names the -s goes on the <b>last</b> word: Frau Weber<b>s</b> B\u00fcro.',
      hinglish: 'Hindi ke "Anna <b>ki</b> kitaab" jaisa hi hai \u2014 bas order ulta: naam pehle, phir -s, phir cheez: <b>Annas Buch</b>. English jaisa apostrophe <b>nahi</b> lagta: "Anna\u2019s Buch" galat. Naam se pehle article bhi nahi: "die Annas Buch" galat.'
    },
    {
      title: 'Names ending in s, \u00df, x, z \u2014 apostrophe only',
      goldenRule: 'Name already ends in an s-sound? Write an <b>apostrophe only</b> \u2014 and add nothing to the pronunciation.',
      why: 'You cannot hear a second s after Max or Hans, so German does not write one. The apostrophe is there purely to mark on paper what the ear cannot catch.',
      formula: [
        'Max   \u2192  <b>Max\u2019</b> Handy      (not Maxs, not Max\u2019s)',
        'Felix \u2192  <b>Felix\u2019</b> Fahrrad',
        'Hans  \u2192  <b>Hans\u2019</b> Auto'
      ],
      memoryTrick: 'Chaar akshar yaad rakho \u2014 <b>s, \u00df, x, z</b>. Inke baad sirf apostrophe, extra <b>s</b> nahi. Aur bolne mein koi farak nahi padta.',
      recap: [
        'After <b>s, \u00df, x, z</b>: apostrophe only.',
        'The pronunciation is unchanged \u2014 <span class="de">Max\u2019 Handy</span> sounds like "Max Handy".',
        'Because you cannot hear it, speech often prefers <span class="de">das Handy von Max</span>.'
      ],
      body: [
        'If the name already ends in an s-sound (<strong>s, \u00df, x, z</strong>), you cannot hear an extra -s \u2014 so German writes just an <strong>apostrophe</strong> and adds nothing to the pronunciation.'
      ],
      table: {
        head: ['Name ends in', 'Genitiv', 'Meaning'],
        rows: [
          ['x', '<span class="de"><span class="r-genitiv">Max\u2019</span> Handy</span>', 'Max\u2019s phone'],
          ['x', '<span class="de"><span class="r-genitiv">Felix\u2019</span> Fahrrad</span>', 'Felix\u2019s bicycle'],
          ['s', '<span class="de"><span class="r-genitiv">Hans\u2019</span> Auto</span>', 'Hans\u2019s car'],
          ['z', '<span class="de"><span class="r-genitiv">Moritz\u2019</span> Buch</span>', 'Moritz\u2019s book']
        ]
      },
      note: 'Pronunciation does not change: <b>Max\u2019 Handy</b> sounds exactly like "Max Handy". Because you can\u2019t hear the difference, spoken German often prefers <b>das Handy von Max</b> \u2014 both are correct. Never write an extra s: <span class="strike">Maxs Handy</span>, <span class="strike">Max\u2019s Handy</span>.',
      hinglish: 'Agar naam s, \u00df, x ya z par khatam hota hai, toh sirf apostrophe: <b>Max\u2019 Handy</b>, <b>Hans\u2019 Auto</b>. Bolne mein koi farak nahi \u2014 isliye bolchal mein log aksar <b>das Handy von Max</b> kehte hain. Dono sahi hain.'
    },
    {
      title: 'Annas Auto vs. das Auto von Anna',
      goldenRule: 'Both are correct. <b>Name + s</b> for writing, <b>von + Dativ</b> is very common in speech.',
      memoryTrick: 'Likhna ho to <b>Annas Auto</b> (chhota, natural). Bolna ho to dono chalte hain \u2014 aur <b>Hans</b>, <b>Max</b> jaise naamon ke baad <b>von</b> zyada saaf hai, kyunki wahan -s sunai nahi deta.',
      recap: [
        '<span class="de">Annas Auto</span> = <span class="de">das Auto von Anna</span>.',
        'Prefer Name + s in writing; both are fine in speech.',
        'Never combine the two forms.'
      ],
      body: [
        'You already know <span class="de">von + Dativ</span> from A1. Both forms are correct \u2014 the difference is register and rhythm.'
      ],
      table: {
        head: ['Form', 'Example', 'Where it fits'],
        rows: [
          ['Name + s', '<span class="de"><span class="r-genitiv">Annas</span> Auto</span>', 'natural everywhere; preferred in writing'],
          ['von + Dativ', '<span class="de">das Auto <span class="r-preposition">von</span> Anna</span>', 'very common in speech'],
          ['Name + s', '<span class="de"><span class="r-genitiv">Frau Webers</span> Foto</span>', 'short, elegant, A2-level writing'],
          ['von + Dativ', '<span class="de">das Foto <span class="r-preposition">von</span> Frau Weber</span>', 'fine \u2014 just longer']
        ]
      },
      note: 'Rule of thumb: in <b>writing</b>, prefer <b>Annas Auto</b> \u2014 it is shorter and sounds more fluent. In <b>speech</b>, both are natural; after s/\u00df/x/z names, <b>von</b> is often clearer (das Auto von Hans). Never combine them: <span class="strike">das Annas Auto von</span>.',
      hinglish: 'Dono sahi hain: <b>Annas Auto</b> = <b>das Auto von Anna</b>. Likhne mein Name + s zyada natural aur chhota hai. Bolne mein von bhi bilkul aam hai \u2014 khaas kar Hans, Max jaise naamon ke baad, jahan -s sunai nahi deta.'
    },
    {
      title: 'The owned noun keeps its own case',
      goldenRule: 'The <b>-s</b> marks the owner. The owned thing still takes whatever case the sentence gives it.',
      formula: [
        '<b>Annas Buch</b> liegt da.        \u2192 nominative',
        'Ich sehe <b>Rohans Tasche</b>.     \u2192 accusative',
        'Wir fahren mit <b>Papas Auto</b>.  \u2192 dative (after mit)'
      ],
      memoryTrick: 'Name + s ek <b>block</b> hai jo saath-saath chalta hai \u2014 aur block ke andar article kabhi nahi aata: <b>mit Papas Auto</b>, "mit dem Papas Auto" nahi.',
      recap: [
        'The Name + s block travels together.',
        'The owned noun keeps its normal case.',
        'No article inside the block.'
      ],
      body: [
        'The name takes the -s; the thing that is owned still plays its normal role in the sentence \u2014 nominative, accusative or dative. The Name + s block simply travels together.'
      ],
      table: {
        head: ['German', 'Case of the owned noun'],
        rows: [
          ['<span class="de"><span class="r-genitiv">Annas</span> Buch liegt auf dem Tisch.</span>', 'nominative \u2014 subject'],
          ['<span class="de">Ich sehe <span class="r-genitiv">Rohans</span> Tasche.</span>', 'accusative \u2014 object'],
          ['<span class="de">Das Foto h\u00e4ngt in <span class="r-genitiv">Frau Webers</span> B\u00fcro.</span>', 'dative \u2014 after in (location)'],
          ['<span class="de">Wir fahren mit <span class="r-genitiv">Papas</span> Auto.</span>', 'dative \u2014 after mit']
        ]
      },
      note: 'Notice there is <b>no article</b> in the block: "mit Papas Auto", not <span class="strike">mit dem Papas Auto</span>. Everything you learned about Akkusativ and Dativ in A1 still applies around it.',
      hinglish: 'Naam pe -s lagta hai, lekin cheez apna normal case rakhti hai: "Ich sehe Rohans Tasche" (Akkusativ), "mit Papas Auto" (Dativ). Block ke andar article nahi aata.'
    },
    {
      title: 'Asking "whose?" \u2014 wessen',
      whatIsIt: 'Now that you can <i>say</i> whose something is, you need the question that asks it. <b>Wessen?</b> = "whose?" \u2014 and it is the question word that goes with everything in this chapter.',
      body: [
        'It behaves like any other W-word: it takes slot 1, the verb follows in slot 2. What is new is that <b>wessen</b> comes directly before the noun, with no article \u2014 exactly like Name + s.'
      ],
      goldenRule: '<b>Wessen</b> + noun (no article) + verb. Answer it with <b>Name + s</b>.',
      formula: [
        '<b>Wessen</b> Handy ist das?   \u2192  Das ist <b>Annas</b> Handy.',
        '<b>Wessen</b> Schl\u00fcssel sind das? \u2192  Das sind <b>Annas</b> Schl\u00fcssel.'
      ],
      table: {
        head: ['Question', 'Answer', 'Note'],
        rows: [
          ['<span class="de">Wessen Handy ist das?</span>', '<span class="de">Das ist <span class="r-genitiv">Annas</span> Handy.</span>', 'singular thing \u2192 ist'],
          ['<span class="de">Wessen Jacke ist das?</span>', '<span class="de">Das ist <span class="r-genitiv">Ninas</span> Jacke.</span>', 'no article after wessen'],
          ['<span class="de">Wessen Schl\u00fcssel sind das?</span>', '<span class="de">Das sind <span class="r-genitiv">Annas</span> Schl\u00fcssel.</span>', 'plural thing \u2192 sind'],
          ['<span class="de">Wem geh\u00f6rt das Handy?</span>', '<span class="de">Das geh\u00f6rt Anna.</span>', 'the everyday spoken alternative']
        ]
      },
      note: 'In everyday speech Germans very often avoid <b>wessen</b> and ask <b>Wem geh\u00f6rt das?</b> ("who does this belong to?") instead \u2014 with <b>geh\u00f6ren + Dativ</b>, which you already know from A1. Both are correct; <b>wessen</b> is the more written, more precise form, and it is what you will see in exercises.',
      hinglish: 'Ab jab tum bata sakte ho ki cheez kiski hai, to poochhne ka tarika bhi aana chahiye. <b>Wessen?</b> ka matlab hai \u201ckiska\u201d ya \u201ckiski\u201d, aur yeh baaki W-words jaise hi chalta hai \u2014 pehli seat par <b>wessen</b>, aur doosri seat par verb. Naya sirf itna hai ki <b>wessen</b> ke baad seedha noun aata hai, article nahi \u2014 bilkul Name + s jaisa hi. Jawaab tum Name + s se dete ho: <span class="de">Wessen Handy ist das? \u2014 Das ist Annas Handy.</span> Bolchal mein log aksar <b>Wem geh\u00f6rt das?</b> keh dete hain, jo <b>geh\u00f6ren</b> + Dativ hai aur A1 se tumhe aata hai. Woh bhi sahi hai, par likhne mein aur exercises mein <b>wessen</b> hi aata hai.',
      memoryTrick: '<b>wessen</b> ke baad article nahi lagta \u2014 jaise Name + s ke baad nahi lagta. Sawaal aur jawaab dono <b>article-free</b> hain.',
      recap: [
        '<b>Wessen</b> + noun, no article, verb in slot 2.',
        'Answer with <b>Name + s</b>: <span class="de">Das ist Annas Handy.</span>',
        'Plural thing \u2192 <b>sind</b>: <span class="de">Das sind Annas Schl\u00fcssel.</span>',
        'Spoken alternative: <b>Wem geh\u00f6rt das?</b> + dative.'
      ],
      connect: { from: 'A1', text: 'You met the W-word slot in A1 (<i>W-Fragen</i>) and <b>geh\u00f6ren + Dativ</b> in <i>Verben mit Dativ</i>. <b>Wessen</b> simply fills that same slot 1, and <b>Wem geh\u00f6rt \u2026?</b> reuses the dative verb you already have.' }
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four Name + s traps to avoid.' ],
      mistakes: [
        { wrong: 'Anna\u2019s Buch', right: 'Annas Buch', why: 'German writes Name + s together, without an apostrophe \u2014 unlike English.' },
        { wrong: 'Maxs Handy', right: 'Max\u2019 Handy', why: 'Names ending in s, \u00df, x, z take an apostrophe only, no extra s.' },
        { wrong: 'die Annas Buch', right: 'Annas Buch', why: 'No article before the possessive name.' },
        { wrong: 'das Buch Annas', right: 'Annas Buch', why: 'The name comes first, then the thing \u2014 like Hindi "Anna ki kitaab".' }
      ],
      hinglish: 'Char galtiyan aksar hoti hain. Pehli, English wala apostrophe lagana \u2014 sahi hai <b>Annas Buch</b>, na ki \u201cAnna\u2019s Buch\u201d. Doosri, jo naam <b>s, \u00df, x</b> ya <b>z</b> par khatam hote hain unme sirf apostrophe aata hai: <b>Max\u2019 Handy</b>. Teesri, naam se pehle article lagana \u2014 \u201cdie Annas Buch\u201d galat hai. Aur chauthi, order ulta kar dena \u2014 naam pehle aata hai aur cheez baad mein, bilkul jaise Hindi mein \u201cAnna ki kitaab\u201d.'
    }
  ],

  // ---------- Reading passage (Rohans Familie, clickable) ----------
  reading: {
    title: 'Rohans Familie',
    titleEn: 'Rohan\u2019s family',
    tokens: [
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive', why: 'mein (recycled \u2014 Familie).', ex: 'meine Familie', exEn: 'my family' },
      { w: 'Familie', role: 'r-subject', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lee-uh', type: 'Noun \u00b7 fem.', why: 'die Familie (recycled \u2014 Familie).', ex: 'meine Familie', exEn: 'my family' },
      { w: 'wohnt', role: 'r-verb', en: 'lives', hi: 'रहता है', pron: 'vohnt', type: 'Verb \u00b7 wohnen', why: 'wohnen (recycled \u2014 Wer bist du?).', ex: 'Sie wohnt in Indien.', exEn: 'They live in India.' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'Indien', role: 'r-place', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun \u00b7 country', why: 'Indien (recycled \u2014 Wer bist du?).', ex: 'in Indien', exEn: 'in India' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun \u00b7 fem.', why: 'die Schwester (recycled \u2014 Familie).', ex: 'meine Schwester Anita', exEn: 'my sister Anita' },
      { w: 'Anita', role: 'r-subject', en: 'Anita', hi: 'अनीता', pron: 'a-NEE-ta', type: 'Name' },
      { w: 'macht', role: 'r-verb', en: 'is doing', hi: 'कर रही है', pron: 'makht', type: 'Verb \u00b7 machen', why: 'eine Ausbildung machen = to do a training (this chapter).', ex: 'Sie macht eine Ausbildung.', exEn: 'She is doing a training.' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'Ausbildung', role: 'r-object', en: 'training', hi: 'प्रशिक्षण', pron: 'OWS-bil-dung', type: 'Noun \u00b7 fem.', why: 'die Ausbildung (this chapter).', ex: 'eine Ausbildung machen', exEn: 'to do a training' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'Biologie', role: 'r-object', en: 'biology', hi: 'जीव विज्ञान', pron: 'bee-o-lo-GHEE', type: 'Noun \u00b7 fem.', why: 'die Biologie (this chapter).', ex: 'Ausbildung in Biologie', exEn: 'training in biology' },
      { w: '.', plain: true },
      { w: 'Anitas', role: 'r-genitiv', en: 'Anita\u2019s', hi: 'अनीता की', pron: 'a-NEE-tas', type: 'Name + s \u00b7 Genitiv', why: 'Name + s (this chapter).', ex: 'Anitas Note', exEn: 'Anita\u2019s grade' },
      { w: 'Note', role: 'r-subject', en: 'grade', hi: 'ग्रेड', pron: 'NO-tuh', type: 'Noun \u00b7 fem.', why: 'die Note (this chapter).', ex: 'Anitas Note ist gut.', exEn: 'Anita\u2019s grade is good.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Onkel', role: 'r-subject', en: 'uncle', hi: 'चाचा', pron: 'ON-kel', type: 'Noun \u00b7 masc.', why: 'der Onkel (recycled \u2014 Familie).', ex: 'mein Onkel Raj', exEn: 'my uncle Raj' },
      { w: 'Raj', role: 'r-subject', en: 'Raj', hi: 'राज', pron: 'rahj', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'geschieden', role: 'r-adjective', en: 'divorced', hi: 'तलाक़शुदा', pron: 'guh-SHEE-den', type: 'Adjective', why: 'geschieden (this chapter).', ex: 'Er ist geschieden.', exEn: 'He is divorced.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'renoviert', role: 'r-verb', en: 'is renovating', hi: 'मरम्मत कर रहा है', pron: 're-no-VEERT', type: 'Verb \u00b7 renovieren', why: 'renovieren (this chapter).', ex: 'Er renoviert das Haus.', exEn: 'He is renovating the house.' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb \u00b7 time' },
      { w: 'Omas', role: 'r-genitiv', en: 'Grandma\u2019s', hi: 'दादी का', pron: 'OH-mas', type: 'Name + s \u00b7 Genitiv', why: 'family names work like names: Omas Haus (this chapter).', ex: 'Omas Haus', exEn: 'Grandma\u2019s house' },
      { w: 'Haus', role: 'r-object', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun \u00b7 neut.', why: 'das Haus (recycled \u2014 Artikel).', ex: 'Omas Haus', exEn: 'Grandma\u2019s house' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn (recycled \u2014 S\u00e4tze verbinden).', ex: '\u2026, denn Oma ist krank.', exEn: '\u2026, because Grandma is ill.' },
      { w: 'Oma', role: 'r-subject', en: 'Grandma', hi: 'दादी', pron: 'OH-ma', type: 'Noun \u00b7 fem.', why: 'die Oma (recycled \u2014 Familie).', ex: 'Oma hat die Grippe.', exEn: 'Grandma has the flu.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Grippe', role: 'r-object', en: 'flu', hi: 'फ़्लू', pron: 'GRI-puh', type: 'Noun \u00b7 fem.', why: 'die Grippe (this chapter).', ex: 'Oma hat die Grippe.', exEn: 'Grandma has the flu.' },
      { w: '.', plain: true },
      { w: 'Daf\u00fcr', role: 'r-adverb', en: 'to make up for it', hi: 'उसके बदले', pron: 'da-F\u00dcR', type: 'Adverb', why: 'daf\u00fcr (this chapter).', ex: 'Daf\u00fcr hilft die Familie.', exEn: 'To make up for it, the family helps.' },
      { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb \u00b7 helfen', why: 'helfen + Dativ (recycled \u2014 Verben mit Dativ).', ex: 'Die Familie hilft ihr.', exEn: 'The family helps her.' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'ganze', role: 'r-adjective', en: 'whole', hi: 'पूरा', pron: 'GAN-tsuh', type: 'Adjective', why: 'ganz \u2192 die ganze Familie (this chapter).', ex: 'die ganze Familie', exEn: 'the whole family' },
      { w: 'Familie', role: 'r-subject', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lee-uh', type: 'Noun \u00b7 fem.' },
      { w: 'gemeinsam', role: 'r-adverb', en: 'together', hi: 'साथ मिलकर', pron: 'guh-MINE-zahm', type: 'Adverb', why: 'gemeinsam (this chapter).', ex: 'gemeinsam helfen', exEn: 'help together' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time', why: 'am + day = dative (recycled \u2014 Zeitangaben).', ex: 'am folgenden Tag', exEn: 'on the following day' },
      { w: 'folgenden', role: 'r-adjective', en: 'following', hi: 'अगले', pron: 'FOL-gen-den', type: 'Adjective', why: 'folgend (this chapter).', ex: 'am folgenden Tag', exEn: 'the following day' },
      { w: 'Tag', role: 'r-time', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun \u00b7 masc.', why: 'der Tag (recycled \u2014 Datum).', ex: 'am folgenden Tag', exEn: 'on the following day' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb \u00b7 kommen', why: 'verb position 2 after front time phrase (recycled \u2014 Satzposition).', ex: 'Am folgenden Tag kommt der Arzt.', exEn: 'The following day the doctor comes.' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Arzt', role: 'r-subject', en: 'doctor', hi: 'डॉक्टर', pron: 'artst', type: 'Noun \u00b7 masc.', why: 'der Arzt (recycled \u2014 Berufe).', ex: 'Der Arzt kommt.', exEn: 'The doctor comes.' },
      { w: '.', plain: true },
      { w: 'Rajs', role: 'r-genitiv', en: 'Raj\u2019s', hi: 'राज की', pron: 'rahjs', type: 'Name + s \u00b7 Genitiv', why: 'Name + s (this chapter).', ex: 'Rajs Auto', exEn: 'Raj\u2019s car' },
      { w: 'Auto', role: 'r-subject', en: 'car', hi: 'गाड़ी', pron: 'OW-to', type: 'Noun \u00b7 neut.', why: 'das Auto (recycled \u2014 Artikel).', ex: 'Rajs Auto', exEn: 'Raj\u2019s car' },
      { w: 'steht', role: 'r-verb', en: 'is parked', hi: 'खड़ी है', pron: 'shtayt', type: 'Verb \u00b7 stehen', why: 'stehen for position (recycled \u2014 Ortsangaben).', ex: 'Das Auto steht dort.', exEn: 'The car is parked there.' },
      { w: 'vor', role: 'r-preposition', en: 'in front of', hi: 'के सामने', pron: 'for', type: 'Preposition \u00b7 Wechsel', why: 'vor + dative for location (recycled \u2014 Wechselpr\u00e4positionen).', ex: 'vor dem Haus', exEn: 'in front of the house' },
      { w: 'Omas', role: 'r-genitiv', en: 'Grandma\u2019s', hi: 'दादी के', pron: 'OH-mas', type: 'Name + s \u00b7 Genitiv', why: 'Name + s inside a dative phrase \u2014 no article (this chapter).', ex: 'vor Omas Haus', exEn: 'in front of Grandma\u2019s house' },
      { w: 'Haus', role: 'r-place', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun \u00b7 neut.' },
      { w: '.', plain: true },
      { w: 'Sp\u00e4testens', role: 'r-time', en: 'at the latest', hi: 'ज़्यादा से ज़्यादा', pron: 'SHPAY-tes-tens', type: 'Adverb \u00b7 time', why: 'sp\u00e4testens (this chapter).', ex: 'Sp\u00e4testens im August ist alles fertig.', exEn: 'By August at the latest, everything is done.' },
      { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition \u00b7 time', why: 'im + month = dative (recycled \u2014 Zeitangaben).', ex: 'im August', exEn: 'in August' },
      { w: 'August', role: 'r-time', en: 'August', hi: 'अगस्त', pron: 'ow-GUST', type: 'Noun \u00b7 month', why: 'August (recycled \u2014 Datum).', ex: 'im August', exEn: 'in August' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein', why: 'verb position 2 after front time phrase (recycled \u2014 Satzposition).', ex: 'Sp\u00e4testens im August ist alles fertig.', exEn: 'By August at the latest everything is done.' },
      { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun' },
      { w: 'fertig', role: 'r-adjective', en: 'finished', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective', why: 'fertig (recycled \u2014 Adjektive).', ex: 'Alles ist fertig.', exEn: 'Everything is done.' },
      { w: '.', plain: true }
    ],
    translation: 'My family lives in India. My sister Anita is doing a training programme in biology. Anita\u2019s grade is very good. My uncle Raj is divorced. He is now renovating Grandma\u2019s house, because Grandma has the flu. To make up for it, the whole family helps together. The following day the doctor comes. Raj\u2019s car is parked in front of Grandma\u2019s house. By August at the latest, everything will be finished. \u2014 Notice the possessives: Anitas Note, Omas Haus, Rajs Auto \u2014 name first, then -s, no apostrophe, no article.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_001_L001', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Malte, ist das deine Jacke hier auf dem Stuhl?', en: 'Malte, is that your jacket here on the chair?' },
      { id: 'A2_001_L002', speaker: 'Malte', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, das ist Ninas Jacke. Meine Jacke hängt im Schrank.', en: 'No, that\'s Nina\'s jacket. My jacket is hanging in the closet.' },
      { id: 'A2_001_L003', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wessen Schlüssel sind das?', en: 'And whose keys are those?' },
      { id: 'A2_001_L004', speaker: 'Malte', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das sind Annas Schlüssel. Sie kommt gleich zurück.', en: 'Those are Anna\'s keys. She\'s coming back soon.' }
    ],
    transcript: 'Malte, ist das deine Jacke hier auf dem Stuhl? Nein, das ist Ninas Jacke. Meine Jacke hängt im Schrank. Und wessen Schlüssel sind das? Das sind Annas Schlüssel. Sie kommt gleich zurück.',
    translation: 'Malte, is that your jacket here on the chair? No, that\'s Nina\'s jacket. My jacket is hanging in the closet. And whose keys are those? Those are Anna\'s keys. She\'s coming back soon.',
    tokens: [
      { w: 'Malte' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'das' },
      { w: 'deine' },
      { w: 'Jacke' },
      { w: 'hier' },
      { w: 'auf' },
      { w: 'dem' },
      { w: 'Stuhl' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'Ninas' },
      { w: 'Jacke' },
      { w: '.', plain: true },
      { w: 'Meine' },
      { w: 'Jacke' },
      { w: 'hängt' },
      { w: 'im' },
      { w: 'Schrank' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wessen' },
      { w: 'Schlüssel' },
      { w: 'sind' },
      { w: 'das' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'sind' },
      { w: 'Annas' },
      { w: 'Schlüssel' },
      { w: '.', plain: true },
      { w: 'Sie' },
      { w: 'kommt' },
      { w: 'gleich' },
      { w: 'zurück' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wessen Jacke liegt auf dem Stuhl?', qEn: 'Whose jacket is on the chair?', options: ['Maltes', 'Ninas', 'Petras', 'Annas'], optionsEn: ['Malte\'s', 'Nina\'s', 'Petra\'s', 'Anna\'s'], answer: 1,
        explain: '"Das ist Ninas Jacke."' },
      { q: 'Wessen Schlüssel sind das?', qEn: 'Whose keys are they?', options: ['Maltes', 'Petras', 'Ninas', 'Annas'], optionsEn: ['Malte\'s', 'Petra\'s', 'Nina\'s', 'Anna\'s'], answer: 3,
        explain: '"Das sind Annas Schlüssel."' }
    ]
  },

  speaking: [
    { task: "Auf dem Tisch liegt ein Handy. Dein Freund fragt: Wessen Handy ist das?", taskEn: "There's a phone on the table. Your friend asks: whose phone is that?", de: "Das ist Annas Handy.", en: "That's Anna's phone." },
    { task: "Deine Lehrerin fragt nach den Noten. Sag, wessen Note gut ist.", taskEn: "Your teacher asks about the marks. Say whose mark is good.", de: "Lisas Note ist sehr gut, aber Toms Note ist besser.", en: "Lisa's mark is very good, but Tom's mark is better." },
    { task: "Deine Freundin will sich beim Verein anmelden. Erklär, wem das Formular gehört.", taskEn: "Your friend wants to register with the club. Explain whose form it is.", de: "Das ist Davids Formular für die Anmeldung.", en: "That's David's registration form." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your family\u2019s and friends\u2019 belongings using Name + s \u2014 for example your dad\u2019s car, your sister\u2019s phone, a friend\u2019s bicycle. Use at least one name ending in s, x or z (apostrophe only!), and try words from this chapter: das Handy, die Note, der Verein, gemeinsam, ganz.',
    starters: ['Papas Auto ist \u2026', 'Mamas Handy liegt \u2026', 'Das ist \u2026s Buch.', 'Max\u2019 Fahrrad \u2026'],
    placeholder: 'Papas Auto ist ganz neu. Anitas Handy liegt auf dem Tisch \u2026',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form for "Max\u2019s phone":',
      options: ['Maxs Handy', 'Max\u2019 Handy', 'Max\u2019s Handy', 'Handy Max'],
      answer: 1,
      explain: 'Max ends in x \u2192 apostrophe only, no extra s: Max\u2019 Handy.'
    },
    gap: {
      // Name + s, twice
      sentence: ['Das ist ', ' Buch, und das ist ', ' Tasche.'],
      gaps: [ { answer: 'Annas', accepts: ['annas'] }, { answer: 'Rohans', accepts: ['rohans'] } ],
      explain: 'Name + s, written together, no apostrophe: Annas Buch, Rohans Tasche.'
    },
    match: {
      q: 'Match each Genitiv to the von-form with the same meaning.',
      pairs: [
        { noun: 'Annas Buch', art: 'das Buch von Anna' },
        { noun: 'Max\u2019 Handy', art: 'das Handy von Max' },
        { noun: 'Frau Webers B\u00fcro', art: 'das B\u00fcro von Frau Weber' },
        { noun: 'Hans\u2019 Auto', art: 'das Auto von Hans' }
      ]
    },
    builder: {
      target: 'Build: "That is Anna\u2019s book."',
      bank: ['Das', 'ist', 'Annas', 'Buch'],
      answer: ['Das', 'ist', 'Annas', 'Buch'],
      roles: { 'Das': 'r-subject', 'ist': 'r-verb', 'Annas': 'r-genitiv', 'Buch': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you say "Anna\u2019s book" in German?', options: ['Anna\u2019s Buch', 'Annas Buch', 'die Annas Buch', 'Buch Annas'], answer: 1,
      explain: 'Name + s, together, no apostrophe, no article: Annas Buch.' },
    { q: 'The name ends in s, \u00df, x or z. What do you add?', options: ['an extra -s', 'nothing at all', 'an apostrophe only', '-es'], answer: 2,
      explain: 'Apostrophe only: Max\u2019 Handy, Hans\u2019 Auto, Felix\u2019 Fahrrad.' },
    { q: 'Complete: "___ Fahrrad ist neu." (the bike belongs to Felix)', options: ['Felixs', 'Felix\u2019', 'Felix\u2019s', 'Felixes'], answer: 1,
      explain: 'Felix ends in x \u2192 apostrophe only: Felix\u2019 Fahrrad.' },
    { q: '"Das Auto von Anna" and "Annas Auto" \u2014 which is correct?', options: ['only "das Auto von Anna"', 'only "Annas Auto"', 'both are correct', 'neither'], answer: 2,
      explain: 'Both are correct. Name + s is shorter and preferred in writing; von is very common in speech.' },
    { q: 'Complete: "Ich melde uns im Verein ___." (anmelden)', options: ['an', 'auf', 'ab', 'aus'], answer: 0,
      explain: 'anmelden is separable \u2014 the prefix an goes to the end: Ich melde uns an.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-genitiv', html: '<span class="de">Name + s</span>, written together \u2014 <span class="de">Annas Buch, Rohans Tasche, Frau Webers B\u00fcro</span>. No apostrophe, no article.' },
    { c: 'r-genitiv', html: 'Names ending in <span class="de">s, \u00df, x, z</span> take an apostrophe only: <span class="de">Max\u2019 Handy, Felix\u2019 Fahrrad, Hans\u2019 Auto</span>.' },
    { c: 'r-preposition', html: '<span class="de">das Auto von Anna</span> = <span class="de">Annas Auto</span> \u2014 both correct; Name + s is more natural in writing, von is common in speech.' }
  ],
  revisionTips: [
    'Think Hindi: "Anna ki kitaab" \u2192 name first, then the thing \u2014 Annas Buch. Only the -s is new.',
    'Say the four apostrophe letters out loud \u2014 s, \u00df, x, z \u2014 then: Max\u2019 Handy, Hans\u2019 Auto.',
    'Catch the English trap: never write Anna\u2019s in German. Annas \u2014 no apostrophe.'
  ]
};

window.CHAPTER = CHAPTER;
