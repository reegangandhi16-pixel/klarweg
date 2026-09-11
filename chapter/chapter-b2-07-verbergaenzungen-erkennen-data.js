/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 7
   "Verbergänzungen erkennen" — recognizing which parts of a
   sentence a verb REQUIRES (Ergänzung) vs which are optional
   extra information (Angabe). Covers subject/Akkusativ/Dativ/
   Genitiv/prepositional/infinitive/dass-clause complements, and
   the "remove it" test. Prepares students for Chapter 8 (Valenz
   von Verben) without teaching full valency theory or dependency
   grammar terminology.
   IMPORTANT: dialogue uses ONLY Petra and Timo.
   Vocabulary source: uploaded chapter-7 list (35 items, user-edited
   general B2 vocabulary bank — media/film/immigration themes).
============================================================ */
const CHAPTER = {
  id: 'b2-07-verbergaenzungen-erkennen',
  phase: 'B2 · Phase 1',
  number: 7,
  title: 'Verbergänzungen erkennen',
  titleEn: 'Recognizing verb complements',
  description: 'Learn to spot what a verb requires — an accusative, a dative, a preposition — versus what is just optional extra information, before you build the sentence.',
  xp: 360,
  time: 50,
  difficulty: 'Advanced',
  nextChapter: { number: 8, title: 'Valenz von Verben', titleEn: 'Verb valency' , href: 'chapter-b2-08-valenz-von-verben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'What the verb <em>really needs.</em>',
    intro: 'At an exhibition, screenwriter Petra tells Timo about her work — writing about immigrants, following her director role model — every verb here revealing exactly what it requires versus what\'s just extra detail.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear which parts of a sentence are required (Ergänzung) vs optional (Angabe)'
    ],
    scene: 'Die Ausstellung',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'Drehbuchautorin', role: 'r-akkusativ', en: 'screenwriter (f)', hi: 'पटकथा लेखिका', pron: 'DRAY-bookh-ow-to-rin', type: 'Noun · fem.', why: 'die Drehbuchautorin (this chapter, Verbergänzung: sein + Nominativ/Präpositionalgruppe).', ex: 'Ich bin als Drehbuchautorin tätig.', exEn: 'I am active as a screenwriter.' },
        { w: 'tätig', role: 'r-akkusativ', en: 'active', hi: 'सक्रिय', pron: 'TAY-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I am active as a screenwriter.', hi: 'Main patkatha lekhika ke roop mein sakriya hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'worüber', role: 'r-question', en: 'about what', hi: 'किस बारे में', pron: 'vo-RÜ-ber', type: 'Question word' },
        { w: 'schreibst', role: 'r-verb', en: 'do you write', hi: 'लिखती हो', pron: 'SHRYPST', type: 'Verb · schreiben (du)', why: 'schreiben über + Akkusativ = Verbergänzung with preposition (this chapter).', ex: 'Worüber schreibst du?', exEn: 'What do you write about?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'And what do you write about?', hi: 'Aur tum kis baare mein likhti ho?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'Einwanderer', role: 'r-akkusativ', en: 'immigrants', hi: 'आप्रवासी', pron: 'INE-van-de-rer', type: 'Noun · plural', why: 'der Einwanderer (this chapter).', ex: 'über Einwanderer schreiben' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ihre', role: 'r-akkusativ', en: 'their (fem.)', hi: 'उनके', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Vielfalt', role: 'r-akkusativ', en: 'diversity', hi: 'विविधता', pron: 'FEEL-falt', type: 'Noun · fem.', why: 'die Vielfalt (this chapter).', ex: 'ihre Vielfalt' },
        { w: '.', plain: true }
      ], en: 'I write about immigrants and their diversity.', hi: 'Main aapravasiyon aur unki vividhta ke baare mein likhti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gehört', role: 'r-verb', en: 'belongs', hi: 'संबंधित है', pron: 'ge-HÖRT', type: 'Verb · gehören', why: 'gehören zu + Dativ = fixed verb complement (this chapter).', ex: 'Das gehört zu meinem Vorbild.', exEn: 'That belongs to my role model.' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'से', pron: 'tsoo', type: 'Preposition + dative' },
        { w: 'deinem', role: 'r-dativ', en: 'your (neut. dat.)', hi: 'तुम्हारे', pron: 'DY-naym', type: 'Possessive · dative' },
        { w: 'Vorbild', role: 'r-dativ', en: 'role model (dat.)', hi: 'आदर्श के', pron: 'FOR-bilt', type: 'Noun · neut. dat.', why: 'das Vorbild (this chapter).', ex: 'zu deinem Vorbild' },
        { w: '?', plain: true }
      ], en: 'Does that belong to your role model?', hi: 'Kya yeh tumhaare aadarsh se sambandhit hai?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Vorbild', role: 'r-subject', en: 'role model', hi: 'आदर्श', pron: 'FOR-bilt', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Filmregisseurin', role: 'r-akkusativ', en: 'film director (f)', hi: 'फ़िल्म निर्देशिका', pron: 'FILM-re-zhi-sö-rin', type: 'Noun · fem.', why: 'die Filmregisseurin (this chapter).', ex: 'eine Filmregisseurin' },
        { w: '.', plain: true }
      ], en: 'Yes. My role model is a film director.', hi: 'Haan. Mera aadarsh ek film nirdeshika hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wovon', role: 'r-question', en: 'of what', hi: 'किससे', pron: 'vo-FON', type: 'Question word' },
        { w: 'handelt', role: 'r-verb', en: 'is', hi: 'संबंधित है', pron: 'HAN-delt', type: 'Verb · handeln', why: 'handeln von + Dativ = to be about, fixed verb complement (this chapter).', ex: 'Wovon handelt der neue Film?', exEn: 'What is the new film about?' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'neue', role: 'r-subject', en: 'new', hi: 'नई', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'What is the new film about?', hi: 'Nayi film kis baare mein hai?' },
      { speaker: 'Petra', tokens: [
        { w: 'Er', role: 'r-subject', en: 'it', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'handelt', role: 'r-verb', en: 'is', hi: 'संबंधित है', pron: 'HAN-delt', type: 'Verb · handeln' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Wüste', role: 'r-dativ', en: 'desert (dat.)', hi: 'रेगिस्तान से', pron: 'VÜS-tuh', type: 'Noun · fem. dat.', why: 'die Wüste (this chapter).', ex: 'von einer Wüste' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'unerwarteten', role: 'r-dativ', en: 'unexpected', hi: 'अप्रत्याशित', pron: 'UN-er-var-te-ten', type: 'Adjective · dative' },
        { w: 'Reise', role: 'r-dativ', en: 'journey (dat.)', hi: 'यात्रा से', pron: 'RY-zuh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'It is about a desert and an unexpected journey.', hi: 'Yeh ek registaan aur ek apratyaashit yaatra ke baare mein hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every verb needs certain information to make a complete sentence — this required part is called <span class="de r-erg">Ergänzung</span>. Extra, optional information is called <span class="de">Angabe</span>. Test: remove the word — if the sentence breaks, it was an Ergänzung; if it still works, it was an Angabe.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERBERGÄNZUNGEN ERKENNEN (B2 level): recognizing which parts of a sentence a verb REQUIRES (Ergänzung — subject, Akkusativ, Dativ, Genitiv, prepositional, infinitive, or dass-clause complements) versus optional extra information (Angabe — time, manner, reason, etc. that can be removed without breaking the sentence). Covers common B2 verbs with fixed prepositional complements: brauchen, helfen (+Dativ), warten auf, denken an, abhängen von, gehören zu, teilnehmen an, sich interessieren für, bestehen aus, sich kümmern um, sich freuen auf, sich erinnern an. This chapter is foundational for the NEXT chapter (Valenz von Verben) — do not expect full valency tables or dependency-grammar terminology here. ' +
    'Do NOT expect detailed Valenz theory, Tesnière terminology, or C1 linguistic concepts — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A verb\'s required complement (Ergänzung) must be present and in the correct case/preposition — e.g. "warten auf + Akkusativ", "helfen + Dativ", "sich interessieren für + Akkusativ".\n' +
    '- Do not flag missing Angabe (optional information) as an error — only missing/incorrect Ergänzung.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Complement check:</b> one sentence on whether the learner correctly supplied each verb\'s required complement.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly identify Ergänzung vs Angabe and supply the right complements. Move on to Valenz von Verben.',
    mid: 'Good. Re-read the "remove it" test once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: remove the word — does the sentence still work?'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'warte', role: 'plain' },
    { w: 'auf', role: 'r-erg' }, { w: 'den', role: 'r-erg' }, { w: 'Bus', role: 'r-erg' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Ergänzung is required, Angabe is optional extra information.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Petra and Timo discuss an exhibition, full of verbs and their required complements.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 35 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master recognizing Ergänzung vs Angabe, and common B2 verbs with fixed complements.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of verb complements to identify.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the required complements of verbs in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe plans and discuss projects using correct verb complements.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using correct verb complements.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Ergänzung vs Angabe, missing complements, and verb-complement matching.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 360 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 35 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Ergänzung vs Angabe drills, missing-complement exercises, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Verbergänzungen reference — types of complements, common B2 verbs, the removal test.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna kauft ein Buch.', text: 'Identify a required Akkusativ complement' },
    { de: 'Ich warte auf den Bus.', text: 'Identify a required prepositional complement' },
    { de: 'Ich brauche heute Hilfe.', text: 'Distinguish Ergänzung from Angabe' },
    { de: 'helfen, warten auf, denken an, sich interessieren für …', text: 'Use common B2 verbs with their fixed complements' },
    { de: 'Weglassprobe: „heute" kann weg, „Hilfe" nicht.', text: 'Apply the removal test to any sentence' }
  ],

  // ---------- Vocabulary (35 items — uploaded chapter-7 list) ----------
  vocab: [
    { de: 'ständig', pos: 'adjective', level: 'B2', en: 'constant, continual', hi: 'निरंतर', ex: 'Er übt ständig für die Ausstellung.', exEn: 'He constantly practises for the exhibition.', exHi: 'Woh pradarshani ke liye nirantar abhyaas karta hai.' },
    { de: 'stets', pos: 'adverb', level: 'B2', en: 'always, constantly', hi: 'हमेशा', ex: 'Sie ist stets vorbereitet.', exEn: 'She is always prepared.', exHi: 'Woh hamesha taiyaar rehti hai.' },
    { de: 'trennbar', pos: 'adjective', level: 'B2', en: 'separable', hi: 'अलग करने योग्य', ex: '"Teilnehmen" ist ein trennbares Verb.', exEn: '"Teilnehmen" is a separable verb.', exHi: '"Teilnehmen" ek alag hone waala kriya hai.' },
    { de: 'treu', pos: 'adjective', level: 'B2', en: 'faithful, loyal', hi: 'वफ़ादार', ex: 'Er bleibt seinem Beruf treu.', exEn: 'He stays loyal to his profession.', exHi: 'Woh apne pesha ke prati wafadaar rehta hai.' },
    { de: 'Trophäe', art: 'die', gender: 'f', plural: 'Trophäen', pos: 'noun', level: 'B2', en: 'trophy', hi: 'ट्रॉफ़ी', ex: 'Er freut sich auf die Trophäe.', exEn: 'He is looking forward to the trophy.', exHi: 'Woh trophy ka intezaar kar raha hai.' },
    { de: 'üblich', pos: 'adjective', level: 'B2', en: 'usual, customary', hi: 'सामान्य', ex: 'Das ist eine übliche Vorgehensweise.', exEn: 'That is a usual procedure.', exHi: 'Yeh ek saamaanya prakriya hai.' },
    { de: 'unerwartet', pos: 'adjective', level: 'B2', en: 'unexpected', hi: 'अप्रत्याशित', ex: 'Der Regisseur erinnert sich gern an den unerwarteten Wandel.', exEn: 'The director gladly remembers the unexpected transformation.', exHi: 'Director khushi se apratyaashit badlaav ko yaad karte hain.' },
    { de: 'veranstalten', pos: 'verb', level: 'B2', en: 'to organise, host', hi: 'आयोजित करना', ex: 'Heute veranstaltet er eine Ausstellung.', exEn: 'Today he\'s organising an exhibition.', exHi: 'Aaj woh ek pradarshani aayojit kar rahe hain.', conj: { praesens: 'veranstaltet', praeteritum: 'veranstaltete', perfekt: 'hat veranstaltet' } },
    { de: 'Verkehrsschild', art: 'das', gender: 'n', plural: 'Verkehrsschilder', pos: 'noun', level: 'B2', en: 'traffic sign', hi: 'यातायात संकेत', ex: 'Ich kümmere mich um das Verkehrsschild vor dem Eingang.', exEn: 'I take care of the traffic sign in front of the entrance.', exHi: 'Main pravesh dwaar ke saamne yatayat sanket ki dekhbhaal karti hoon.' },
    { de: 'veröffentlichen', pos: 'verb', level: 'B2', en: 'to publish, release', hi: 'प्रकाशित करना', ex: 'Ich freue mich schon auf die nächste Veröffentlichung.', exEn: 'I\'m already looking forward to the next publication.', exHi: 'Main pehle se hi agle prakaashan ka intezaar kar raha hoon.', conj: { praesens: 'veröffentlicht', praeteritum: 'veröffentlichte', perfekt: 'hat veröffentlicht' } },
    { de: 'Vielfalt', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'diversity, variety', hi: 'विविधता', ex: 'Es hängt völlig von der Vielfalt des Publikums ab.', exEn: 'It depends completely on the diversity of the audience.', exHi: 'Yeh poori tarah darshakon ki vividhta par nirbhar karta hai.' },
    { de: 'vielsprachig', pos: 'adjective', level: 'B2', en: 'multilingual', hi: 'बहुभाषी', ex: 'Die Ausstellung ist vielsprachig.', exEn: 'The exhibition is multilingual.', exHi: 'Pradarshani bahubhaashi hai.' },
    { de: 'visuell', pos: 'adjective', level: 'B2', en: 'visual', hi: 'दृश्य', ex: 'Die Ausstellung besteht vollkommen aus visuellen Zitaten.', exEn: 'The exhibition consists entirely of visual quotations.', exHi: 'Pradarshani poori tarah drishya udhharanon se banii hai.' },
    { de: 'voller', pos: 'adjective', level: 'B2', en: 'full of', hi: 'भरा हुआ', ex: 'Der Saal war voller Besucher.', exEn: 'The hall was full of visitors.', exHi: 'Hall aagantukon se bhara hua tha.' },
    { de: 'völlig', pos: 'adverb', level: 'B2', en: 'completely, utterly', hi: 'पूरी तरह', ex: 'Es hängt völlig von der Vielfalt des Publikums ab.', exEn: 'It depends completely on the diversity of the audience.', exHi: 'Yeh poori tarah darshakon ki vividhta par nirbhar karta hai.' },
    { de: 'vollkommen', pos: 'adjective', level: 'B2', en: 'perfect, complete', hi: 'संपूर्ण', ex: 'Die Ausstellung besteht vollkommen aus visuellen Zitaten.', exEn: 'The exhibition consists entirely of visual quotations.', exHi: 'Pradarshani poori tarah drishya udhharanon se banii hai.' },
    { de: 'Vorbild', art: 'das', gender: 'n', plural: 'Vorbilder', pos: 'noun', level: 'B2', en: 'role model', hi: 'आदर्श', ex: 'Der Regisseur ist ein Vorbild für viele.', exEn: 'The director is a role model for many.', exHi: 'Director kai logon ke liye ek aadarsh hain.' },
    { de: 'Wandel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'change, transformation', hi: 'बदलाव', ex: 'Der Regisseur erinnert sich gern an den unerwarteten Wandel.', exEn: 'The director gladly remembers the unexpected transformation.', exHi: 'Director khushi se apratyaashit badlaav ko yaad karte hain.' },
    { de: 'Webseite', art: 'die', gender: 'f', plural: 'Webseiten', pos: 'noun', level: 'B2', en: 'website', hi: 'वेबसाइट', ex: 'Ich interessiere mich sehr für das Zitat auf der Webseite.', exEn: 'I\'m very interested in the quotation on the website.', exHi: 'Mujhe website par udhharan mein bahut ruchi hai.' },
    { de: 'weitergehen', pos: 'verb', level: 'B2', en: 'to go on, continue', hi: 'जारी रहना', ex: 'Die Ausstellung soll weitergehen.', exEn: 'The exhibition should continue.', exHi: 'Pradarshani jaari rehni chaahiye.', conj: { praesens: 'geht weiter', praeteritum: 'ging weiter', perfekt: 'ist weitergegangen' } },
    { de: 'Windeseile', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'breakneck speed', hi: 'बिजली की गति', ex: 'Die Nachricht verbreitete sich in Windeseile.', exEn: 'The news spread at breakneck speed.', exHi: 'Khabar bijli ki gati se failii.' },
    { de: 'Wohnungssuche', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'flat-hunting, housing search', hi: 'घर की तलाश', ex: 'Die Wohnungssuche gehört zu einer schwierigen Zeit.', exEn: 'The flat-hunting belongs to a difficult time.', exHi: 'Ghar ki talaash ek kathin samay se sambandhit hai.' },
    { de: 'Wüste', art: 'die', gender: 'f', plural: 'Wüsten', pos: 'noun', level: 'B2', en: 'desert', hi: 'रेगिस्तान', ex: 'Die Wüste besteht aus Sand.', exEn: 'The desert consists of sand.', exHi: 'Registaan ret se bana hai.' },
    { de: 'zerschneiden', pos: 'verb', level: 'B2', en: 'to cut up, cut to pieces', hi: 'टुकड़े-टुकड़े करना', ex: 'Sie zerschneidet das Papier für die Ausstellung.', exEn: 'She cuts up the paper for the exhibition.', exHi: 'Woh pradarshani ke liye kaagaz ke tukde karti hai.', conj: { praesens: 'zerschneidet', praeteritum: 'zerschnitt', perfekt: 'hat zerschnitten' } },
    { de: 'Zitat', art: 'das', gender: 'n', plural: 'Zitate', pos: 'noun', level: 'B2', en: 'quotation', hi: 'उद्धरण', ex: 'Ich interessiere mich sehr für das Zitat auf der Webseite.', exEn: 'I\'m very interested in the quotation on the website.', exHi: 'Mujhe website par udhharan mein bahut ruchi hai.' },
    { de: 'Zöpfchen', art: 'das', gender: 'n', plural: 'Zöpfchen', pos: 'noun', level: 'B2', en: 'little braid', hi: 'छोटी चोटी', ex: 'Das Mädchen trägt zwei Zöpfchen.', exEn: 'The girl wears two little braids.', exHi: 'Ladki do choti choti pehenti hai.' },
    { de: 'Zugewanderte', art: 'der/die', gender: 'm/f', plural: 'Zugewanderte', pos: 'noun', level: 'B2', en: 'immigrant, newcomer', hi: 'प्रवासी', ex: 'Die Zugewanderte erinnert sich an die Wohnungssuche.', exEn: 'The immigrant remembers the flat-hunting.', exHi: 'Pravaasi ghar ki talaash ko yaad karti hai.' },
    { de: 'zusammenbinden', pos: 'verb', level: 'B2', en: 'to tie together', hi: 'साथ बाँधना', ex: 'Sie bindet die Zöpfchen zusammen.', exEn: 'She ties the little braids together.', exHi: 'Woh choti choti ko saath baandhti hai.', conj: { praesens: 'bindet zusammen', praeteritum: 'band zusammen', perfekt: 'hat zusammengebunden' } },
    { de: 'zwischendurch', pos: 'adverb', level: 'B2', en: 'in between, now and then', hi: 'बीच-बीच में', ex: 'Ich kümmere mich zwischendurch um das Verkehrsschild.', exEn: 'In between, I take care of the traffic sign.', exHi: 'Beech-beech mein, main yatayat sanket ki dekhbhaal karti hoon.' },
    { de: 'Amateur-Boxer/in', art: 'der/die', gender: 'm/f', plural: 'Amateur-Boxer/innen', pos: 'noun', level: 'B2', en: 'amateur boxer', hi: 'शौकिया मुक्केबाज़', ex: 'Der Amateur-Boxer nimmt an der Ausstellung teil.', exEn: 'The amateur boxer takes part in the exhibition.', exHi: 'Shaukiya mukkebaaz pradarshani mein bhaag lete hain.' },
    { de: 'Automobilhersteller', art: 'der', gender: 'm', plural: 'Automobilhersteller', pos: 'noun', level: 'B2', en: 'car manufacturer', hi: 'ऑटोमोबाइल निर्माता', ex: 'Der Automobilhersteller wartet auf den Journalisten.', exEn: 'The car manufacturer is waiting for the journalist.', exHi: 'Automobile nirmaata patrakaar ka intezaar kar rahe hain.' },
    { de: 'Drehbuchautor/in', art: 'der/die', gender: 'm/f', plural: 'Drehbuchautoren/Drehbuchautorinnen', pos: 'noun', level: 'B2', en: 'screenwriter', hi: 'पटकथा लेखक', ex: 'Der Drehbuchautor nimmt auch an der Ausstellung teil.', exEn: 'The screenwriter is also taking part in the exhibition.', exHi: 'Patkatha lekhak bhi pradarshani mein bhaag le rahe hain.' },
    { de: 'Einwanderer/in', art: 'der/die', gender: 'm/f', plural: 'Einwanderer/Einwanderinnen', pos: 'noun', level: 'B2', en: 'immigrant', hi: 'आप्रवासी', ex: 'Der Einwanderer erinnert sich an die Wohnungssuche.', exEn: 'The immigrant remembers the flat-hunting.', exHi: 'Aapravaasi ghar ki talaash ko yaad karta hai.' },
    { de: 'Filmregisseur/in', art: 'der/die', gender: 'm/f', plural: 'Filmregisseure/Filmregisseurinnen', pos: 'noun', level: 'B2', en: 'film director', hi: 'फ़िल्म निर्देशक', ex: 'Der Filmregisseur erinnert sich gern an den unerwarteten Wandel.', exEn: 'The film director gladly remembers the unexpected transformation.', exHi: 'Film director khushi se apratyaashit badlaav ko yaad karte hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Verbergänzungen?',
      body: [ 'Every verb needs certain information to form a complete sentence. Without it, the sentence feels incomplete.' ],
      table: {
        head: ['Incomplete', 'Complete'],
        rows: [
          ['<span class="de">Anna kauft.</span>', '<span class="de">Anna kauft ein Buch.</span>']
        ]
      },
      hinglish: 'Har verb ko ek poore sentence banane ke liye kuch jaankaari chahiye hoti hai. Uske bina, sentence adhoora lagta hai.'
    },
    {
      title: 'Ergänzung vs Angabe',
      body: [ 'Ergänzung is REQUIRED — without it the sentence is incomplete. Angabe is OPTIONAL extra information — the sentence still works without it.' ],
      table: {
        head: ['Type', 'Example', 'Test'],
        rows: [
          ['Ergänzung', '<span class="de">Ich brauche Hilfe.</span>', 'Remove "Hilfe" → sentence breaks'],
          ['Angabe', '<span class="de">Ich brauche heute Hilfe.</span>', 'Remove "heute" → sentence still works']
        ]
      },
      hinglish: 'Ergänzung REQUIRED hota hai — uske bina sentence adhoora hota hai. Angabe OPTIONAL extra jaankaari hota hai — uske bina bhi sentence chalta hai.'
    },
    {
      title: 'Arten von Ergänzungen',
      body: [ 'Complements come in several types depending on the verb.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Subjekt', '<span class="de">Ich arbeite.</span>'],
          ['Akkusativ', '<span class="de">Ich kaufe ein Auto.</span>'],
          ['Dativ', '<span class="de">Ich helfe meinem Freund.</span>'],
          ['Genitiv', '<span class="de">Er bedarf deiner Hilfe.</span>'],
          ['Präpositional', '<span class="de">Ich warte auf den Bus.</span>'],
          ['Infinitiv', '<span class="de">Ich versuche, Deutsch zu lernen.</span>'],
          ['Dass-Satz', '<span class="de">Ich hoffe, dass du kommst.</span>']
        ]
      },
      hinglish: 'Complements verb ke hisaab se kai types mein aate hain.'
    },
    {
      title: 'Wie man Ergänzungen erkennt',
      body: [ 'A simple method: find the verb, ask a question (Who? What? Whom? To whom? For what? About what?), then apply the removal test.' ],
      table: {
        head: ['Step'],
        rows: [
          ['1. Find the verb. 2. Ask Who?/What?/Whom?/To whom?/For what?/About what? 3. Required answer = Ergänzung. Optional answer = Angabe.']
        ]
      },
      hinglish: 'Tarika simple hai. Pehle verb dhoondo, phir uske hisaab se sawaal poochho \u2014 Kaun? Kya? Kisko? Kiske liye? Kis baare mein? \u2014 aur uske baad removal test lagao: us shabd ko hata kar dekho, sentence chalta hai ya toot jaata hai.'
    },
    {
      title: 'Häufige B2-Verben mit festen Ergänzungen',
      body: [ 'These common B2 verbs have fixed prepositional or case complements — memorize them as pairs.' ],
      table: {
        head: ['Verb', 'Complement'],
        rows: [
          ['brauchen', '+ Akkusativ'],
          ['helfen', '+ Dativ'],
          ['warten auf', '+ Akkusativ'],
          ['denken an', '+ Akkusativ'],
          ['abhängen von', '+ Dativ'],
          ['gehören zu', '+ Dativ'],
          ['teilnehmen an', '+ Dativ'],
          ['sich interessieren für', '+ Akkusativ'],
          ['bestehen aus', '+ Dativ'],
          ['sich kümmern um', '+ Akkusativ'],
          ['sich freuen auf', '+ Akkusativ'],
          ['sich erinnern an', '+ Akkusativ']
        ]
      },
      hinglish: 'In common B2 verbs ka apna fixed preposition ya case hota hai. Inhe jodi ki tarah yaad karo — verb akela yaad karne se sentence banate waqt case galat ho jaata hai.'
    },
    {
      title: 'Ein Komplement vs mehrere Komplemente',
      body: [ 'Some verbs need only a subject; others need two or more complements at once.' ],
      table: {
        head: ['Example', 'Complements'],
        rows: [
          ['<span class="de">Ich schlafe.</span>', 'Only subject'],
          ['<span class="de">Ich kaufe meiner Schwester ein Buch.</span>', 'Subject + Dativ + Akkusativ'],
          ['<span class="de">Ich warte auf den Zug.</span>', 'Subject + prepositional complement']
        ]
      },
      hinglish: 'Kuch verbs ko sirf subject chahiye hota hai; doosron ko ek saath do ya zyaada complements chahiye hote hain.'
    },
    {
      title: 'Vorbereitung auf Valenz (Vorschau)',
      body: [ 'Every German verb has its own fixed "pattern" of complements. The next chapter (Valenz von Verben) studies this pattern in detail.' ],
      table: {
        head: ['Verb', 'Pattern'],
        rows: [
          ['helfen', 'always + Dativ'],
          ['warten', 'auf + Akkusativ'],
          ['denken', 'an + Akkusativ']
        ]
      },
      hinglish: 'Har German verb ka apna fixed complements ka "pattern" hota hai. Agla chapter (Valenz von Verben) is pattern ko detail mein padhta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from dropping a required preposition, or using the wrong case for a fixed complement.' ],
      mistakes: [
        { wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', why: '"warten" needs the preposition "auf" + Akkusativ — it cannot take a direct object alone.' },
        { wrong: 'Ich helfe meinen Bruder.', right: 'Ich helfe meinem Bruder.', why: '"helfen" always takes Dativ, not Akkusativ.' },
        { wrong: 'Ich interessiere Deutsch.', right: 'Ich interessiere mich für Deutsch.', why: '"sich interessieren für" is reflexive and needs the preposition "für" + Akkusativ.' },
        { wrong: 'Ich denke Deutschland.', right: 'Ich denke an Deutschland.', why: '"denken" needs the preposition "an" + Akkusativ.' },
        { wrong: 'Ich brauche.', right: 'Ich brauche Hilfe.', why: '"brauchen" requires an Akkusativ object — the sentence is incomplete without it.' }
      ],
      hinglish: 'Yeh galtiyaan required preposition chhod dene se, ya fixed complement ke liye galat case use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Recognizing verb complements helps you understand and build longer Goethe B2 sentences accurately.' ],
      note: 'Quick check: remove the word from the sentence. Does the sentence still work? Then it was an Angabe. Does the sentence break? Then it was an Ergänzung.',
      hinglish: 'Verb ke complements pehchaan lo to Goethe B2 ke lambe sentences padhna aur khud banana dono aasaan ho jaate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Porträt: Vom Amateur-Boxer zum Vorbild',
    titleEn: 'Profile: from amateur boxer to role model',
    tokens: [
      { w: 'Karim', role: 'plain', en: 'Karim', hi: 'करीम', type: 'Name' },
      { w: 'trainiert', role: 'plain', en: 'trains', hi: 'प्रशिक्षण लेता है', type: 'Verb · trainieren (Vollverb, kein Ergänzungsverb nötig)' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'सालों', type: 'Noun · plural' },
      { w: 'als', role: 'plain', en: 'as an', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Amateur-Boxer', role: 'plain', en: 'amateur boxer', hi: 'शौकिया मुक्केबाज़', type: 'Noun · masc.', why: 'der Amateur-Boxer (this chapter).' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'gehört', role: 'r-verb', en: 'belongs (Verb + Präpositionalergänzung)', hi: 'संबंधित है (क्रिया + पूर्वसर्ग पूरक)', type: 'Verb · gehören zu', why: 'gehören zu + Dat.: a fixed verb complement, not optional (this chapter).' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'उन', type: 'Article · Dat.' },
      { w: 'wenigen', role: 'plain', en: 'few', hi: 'कुछ ही', type: 'Adjective' },
      { w: 'Sportlern', role: 'plain', en: 'athletes (Satzende)', hi: 'खिलाड़ियों (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Zugewanderten-Status', role: 'plain', en: 'migrant status', hi: 'प्रवासी स्थिति', type: 'Noun · masc.', why: 'Zugewanderte (this chapter).' },
      { w: 'nie', role: 'plain', en: 'never', hi: 'कभी नहीं', type: 'Adverb' },
      { w: 'verheimlicht', role: 'plain', en: 'concealed (Satzende)', hi: 'छुपाया (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'kämpft', role: 'r-verb', en: 'fights (Verb + Präpositionalergänzung)', hi: 'लड़ता है', type: 'Verb · kämpfen für', why: 'kämpfen für + Akk.: verb complement (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'अधिक', type: 'Adjective' },
      { w: 'Vielfalt', role: 'plain', en: 'diversity', hi: 'विविधता', type: 'Noun · fem.', why: 'die Vielfalt (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Amateursport', role: 'plain', en: 'amateur sport', hi: 'शौकिया खेल', type: 'Noun · masc.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'gilt', role: 'r-verb', en: 'is considered (Verb + Präpositionalergänzung)', hi: 'माना जाता है', type: 'Verb · gelten als', why: 'gelten als + Nom.: verb complement, no preposition variation possible (this chapter).' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Vorbild', role: 'plain', en: 'role model', hi: 'आदर्श', type: 'Noun · neut.', why: 'das Vorbild (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'junge', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Einwanderer', role: 'plain', en: 'immigrants (Satzende)', hi: 'प्रवासी (Satzende)', type: 'Noun · plural', why: 'der Einwanderer/die Einwanderer (this chapter).' },
      { w: '.', plain: true },
      { w: 'Letztes', role: 'plain', en: 'last', hi: 'पिछला', type: 'Adjective' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'ihn', role: 'plain', en: 'him', hi: 'उसे', type: 'Pronoun · Akk.' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'Automobilhersteller', role: 'plain', en: 'car manufacturer', hi: 'वाहन निर्माता', type: 'Noun · masc.', why: 'der Automobilhersteller (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'seine', role: 'plain', en: 'its', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Werbekampagne', role: 'plain', en: 'ad campaign (Satzende)', hi: 'विज्ञापन अभियान (Satzende)', type: 'Noun · fem.' },
      { w: 'angefragt', role: 'plain', en: 'asked (Satzende)', hi: 'पूछा (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Karim', role: 'plain', en: 'Karim', hi: 'करीम', type: 'Name' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'zunächst', role: 'plain', en: 'at first', hi: 'पहले', type: 'Adverb' },
      { w: 'gezweifelt', role: 'plain', en: 'doubted (Satzende)', hi: 'शक किया (Satzende)', type: 'Verb · zweifeln (Partizip II)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Trophäe', role: 'plain', en: 'trophy', hi: 'ट्रॉफ़ी', type: 'Noun · fem.', why: 'die Trophäe (this chapter).' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Landesmeisterschaft', role: 'plain', en: 'state championship', hi: 'राज्य चैंपियनशिप', type: 'Noun · fem.' },
      { w: 'überzeugte', role: 'plain', en: 'convinced', hi: 'क़ायल कर दिया', type: 'Verb · überzeugen' },
      { w: 'ihn', role: 'plain', en: 'him', hi: 'उसे', type: 'Pronoun · Akk.' },
      { w: 'schließlich', role: 'plain', en: 'eventually', hi: 'आख़िरकार', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'plain', en: 'to', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Frage', role: 'plain', en: 'question', hi: 'सवाल', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'ob', role: 'plain', en: 'whether', hi: 'क्या', type: 'Konjunktion' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'weitermachen', role: 'plain', en: 'continue', hi: 'जारी रखना', type: 'Verb · Infinitiv' },
      { w: 'will', role: 'plain', en: 'wants (Satzende)', hi: 'चाहता है (Satzende)', type: 'Verb · wollen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'antwortet', role: 'plain', en: 'answers', hi: 'जवाब देता है', type: 'Verb · antworten' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'बस', type: 'Adverb' },
      { w: 'lachend', role: 'plain', en: 'laughing', hi: 'हँसते हुए', type: 'Partizip I' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'freut', role: 'r-verb', en: 'is glad (Verb + Präpositionalergänzung)', hi: 'ख़ुश होता है', type: 'Verb · sich freuen über', why: 'sich freuen über + Akk.: fixed verb complement (this chapter).' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Gelegenheit', role: 'plain', en: 'opportunity', hi: 'अवसर', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'junge', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Sportler', role: 'plain', en: 'athletes', hi: 'खिलाड़ियों', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'ermutigen', role: 'plain', en: 'encourage (Satzende)', hi: 'प्रोत्साहित करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'wartet', role: 'r-verb', en: 'is waiting (Verb + Präpositionalergänzung)', hi: 'इंतज़ार कर रहा है', type: 'Verb · warten auf', why: 'warten auf + Akk.: fixed verb complement (this chapter).' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'nächsten', role: 'plain', en: 'next', hi: 'अगला', type: 'Adjective' },
      { w: 'Wettkampf', role: 'plain', en: 'competition (Satzende)', hi: 'प्रतियोगिता (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'Karim has trained as an amateur boxer for ten years. He belongs to the few athletes who have never concealed their migrant status. He fights for more diversity in amateur sport and is considered a role model for young immigrants. Last year a car manufacturer even asked him to appear in its ad campaign. Karim doubted it at first, but his trophy from the state championship eventually convinced him. Asked whether he wants to continue, he just answers laughing. He is glad about every opportunity to encourage young athletes, and is already looking forward to the next competition.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_007_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Petra, worüber schreibst du gerade für die Ausstellung?', en: 'Petra, what are you currently writing about for the exhibition?' },
      { id: 'B2_007_L002', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich schreibe über eine Familie, die vor Jahren eingewandert ist.', en: 'I\'m writing about a family that immigrated years ago.' },
      { id: 'B2_007_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Orientierst du dich dabei an einem bestimmten Regisseur?', en: 'Are you orienting yourself around a particular director?' },
      { id: 'B2_007_L004', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ich orientiere mich stark an ihrem dokumentarischen Stil.', en: 'Yes, I\'m strongly guided by her documentary style.' }
    ],
    transcript: 'Petra, worüber schreibst du gerade für die Ausstellung? Ich schreibe über eine Familie, die vor Jahren eingewandert ist. Orientierst du dich dabei an einem bestimmten Regisseur? Ja, ich orientiere mich stark an ihrem dokumentarischen Stil.',
    translation: 'Petra, what are you currently writing about for the exhibition? I\'m writing about a family that immigrated years ago. Are you orienting yourself around a particular director? Yes, I\'m strongly guided by her documentary style.',
    tokens: [
      { w: 'Petra' },
      { w: ',', plain: true },
      { w: 'worüber' },
      { w: 'schreibst' },
      { w: 'du' },
      { w: 'gerade' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Ausstellung' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'schreibe' },
      { w: 'über' },
      { w: 'eine' },
      { w: 'Familie' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'vor' },
      { w: 'Jahren' },
      { w: 'eingewandert' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Orientierst' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'dabei' },
      { w: 'an' },
      { w: 'einem' },
      { w: 'bestimmten' },
      { w: 'Regisseur' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'orientiere' },
      { w: 'mich' },
      { w: 'stark' },
      { w: 'an' },
      { w: 'ihrem' },
      { w: 'dokumentarischen' },
      { w: 'Stil' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worüber schreibt Petra?', qEn: 'What is Petra writing about?', options: ['einen Regisseur', 'eine eingewanderte Familie', 'die Ausstellung selbst', 'ein Drehbuchfestival'], optionsEn: ['a director', 'an immigrant family', 'the exhibition itself', 'a screenplay festival'], answer: 1,
        explain: '"Ich schreibe über eine Familie, die vor Jahren eingewandert ist."' },
      { q: 'Welcher Stil leitet Petra?', qEn: 'What style guides Petra?', options: ['ein komödiantischer Stil', 'ein dokumentarischer Stil', 'kein bestimmter Stil', 'ein historischer Stil'], optionsEn: ['a comedic style', 'a documentary style', 'no particular style', 'a historical style'], answer: 1,
        explain: '"Ich orientiere mich stark an ihrem dokumentarischen Stil."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Eine Kollegin fragt, worüber du für die Ausstellung schreibst.", taskEn: "A colleague asks what you're writing about for the exhibition.", de: "Ich schreibe über eine Familie, die vor Jahren eingewandert ist.", en: "I'm writing about a family that immigrated years ago." },
    { task: "Sie fragt, an wem du dich dabei orientierst.", taskEn: "She asks who you're taking as your model.", de: "Ich orientiere mich an einem Vorbild aus meiner eigenen Familie.", en: "I'm taking a role model from my own family." },
    { task: "Ein Kollege fragt, worauf du bei der Webseite achtest.", taskEn: "A colleague asks what you pay attention to on the website.", de: "Ich achte auf die Vielfalt der Bilder und auf klare Texte.", en: "I pay attention to the variety of images and clear texts." },
    { task: "Deine Chefin fragt, womit du bei der Veranstaltung rechnest.", taskEn: "Your boss asks what you're expecting at the event.", de: "Ich rechne mit vielen Gästen und mit unerwarteten Fragen.", en: "I'm expecting many guests and unexpected questions." },
    { task: "Ein Bekannter fragt, worum du dich noch kümmerst.", taskEn: "An acquaintance asks what else you're taking care of.", de: "Ich kümmere mich um die Trophäe und um die Einladungen.", en: "I'm taking care of the trophy and the invitations." },
    { task: "Rollenspiel: Ihr plant die Ausstellung.", taskEn: "Role-play: you plan the exhibition.", de: "Wir warten noch auf die Bilder. — Und ich erinnere dich an die Webseite.", en: "We're still waiting for the pictures. — And I'll remind you about the website." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or email (six to eight sentences) about an event or project — using at least four verbs with fixed complements (warten auf, sich interessieren für, teilnehmen an, sich freuen auf, gehören zu, bestehen aus, or similar), plus at least one Angabe (optional information) in a different sentence.',
    starters: ['Ich warte auf …', 'Ich interessiere mich für …', 'Die Ausstellung besteht aus …', 'Wir nehmen an … teil.'],
    placeholder: 'Ich warte auf die nächste Ausstellung. Ich interessiere mich sehr für …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which is the required complement in "Ich warte auf den Bus"?',
      options: ['auf den Bus', 'Ich', 'warte'],
      answer: 0,
      explain: '"auf den Bus" is the Ergänzung — remove it and the sentence is incomplete.'
    },
    gap: {
      sentence: ['Ich helfe ', ' Freund.'],
      gaps: [ { answer: 'meinem', accepts: ['meinem'] } ],
      explain: '"helfen" always takes Dativ — "meinem Freund", not "meinen Freund".'
    },
    match: {
      q: 'Match each verb to its required complement.',
      pairs: [
        { noun: 'warten', art: 'auf + Akkusativ' },
        { noun: 'helfen', art: '+ Dativ' },
        { noun: 'denken', art: 'an + Akkusativ' },
        { noun: 'bestehen', art: 'aus + Dativ' }
      ]
    },
    builder: {
      target: 'Build: "I am interested in the quotation."',
      bank: ['Ich', 'interessiere', 'mich', 'für', 'das', 'Zitat', '.'],
      answer: ['Ich', 'interessiere', 'mich', 'für', 'das', 'Zitat', '.'],
      roles: { 'für': 'r-erg', 'das': 'r-erg', 'Zitat': 'r-erg' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich denke Deutschland.',
      right: 'Ich denke an Deutschland.',
      explain: '"denken" needs the preposition "an" + Akkusativ — it cannot take a direct object alone.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is Ergänzung and which is Angabe in "Ich brauche heute Hilfe"?', options: ['"Hilfe" = Ergänzung, "heute" = Angabe', '"heute" = Ergänzung, "Hilfe" = Angabe', 'Both are Ergänzung'], answer: 0,
      explain: 'Remove "Hilfe" and the sentence breaks (Ergänzung); remove "heute" and it still works (Angabe).' },
    { q: 'Complete: "Ich interessiere mich ___ Deutsch."', options: ['für', 'an', 'auf'], answer: 0,
      explain: '"sich interessieren für" is the fixed prepositional complement.' },
    { q: 'What test identifies an Ergänzung?', options: ['Remove the word — if the sentence breaks, it\'s an Ergänzung', 'Count the syllables', 'Check if it\'s a noun'], answer: 0,
      explain: 'The removal test: if removing the word breaks the sentence, it was required (Ergänzung).' },
    { q: 'Complete: "Es hängt ___ der Vielfalt des Publikums ab."', options: ['von', 'auf', 'für'], answer: 0,
      explain: '"abhängen von" is the fixed prepositional complement.' },
    { q: 'Which sentence contains an error?', options: ['Ich warte auf den Bus.', 'Ich warte den Bus.', 'Ich helfe meinem Freund.'], answer: 1,
      explain: '"warten" needs the preposition "auf" + Akkusativ — it should be "Ich warte auf den Bus."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-erg', html: 'Ergänzung is required by the verb — remove it and the sentence breaks. Angabe is optional extra information — remove it and the sentence still works.' },
    { c: 'r-erg', html: 'Many common B2 verbs have fixed prepositional or case complements: warten auf, helfen (+Dativ), denken an, sich interessieren für, bestehen aus, sich freuen auf — learn them as pairs.' },
    { c: 'r-erg', html: 'This chapter is the foundation for Valenz von Verben (next chapter), which studies each verb\'s full complement pattern in detail.' }
  ],
  revisionTips: [
    'Practise the removal test on sentences from this chapter until identifying Ergänzung vs Angabe feels automatic.',
    'Build a personal list of verb + fixed preposition pairs (warten auf, denken an, sich freuen auf) and drill them.',
    'When reading Goethe B2 texts, underline every prepositional complement you recognize to build speed.'
  ]
};

window.CHAPTER = CHAPTER;
