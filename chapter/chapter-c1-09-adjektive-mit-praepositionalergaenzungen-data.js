/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 9
   "Adjektive mit Präpositionalergänzungen" — fixed adjective +
   preposition combinations (interessiert an, bekannt für,
   abhängig von, stolz auf, vertraut mit, fähig zu, etc.),
   required cases, meaning nuances. NOT basic adjective endings
   or elementary prepositions.
   Dialogue: Marlen and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-09-adjektive-mit-praepositionalergaenzungen',
  phase: 'C1 · Kasus & Präpositionen',
  number: 9,
  title: 'Adjektive mit Präpositionalergänzungen',
  titleEn: 'Adjectives with fixed prepositional complements',
  description: 'Don\'t memorize the adjective. Memorize the adjective + preposition. Think of each combination as one vocabulary item, not two separate words.',
  xp: 390,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 10, title: 'Nomen mit Präpositionalobjekt', titleEn: 'Nouns with fixed prepositional objects' , href: 'chapter-c1-10-nomen-mit-praepositionalobjekt.html' },

  prevChapter: { number: 8, title: 'Anspruchsvolle Präpositionen', titleEn: 'Advanced prepositional expressions', href: 'chapter-c1-08-anspruchsvolle-praepositionen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Adjective + preposition is <em>one</em> vocabulary item, not two.',
    intro: 'Preparing internship applications, Marlen says she\'s interested in the new position and ready for the challenge, while Timo says he\'s convinced of her talent — every adjective here locked to one fixed preposition, learned as a single vocabulary item.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See interessiert an, verantwortlich für, abhängig von, stolz auf, and vertraut mit produced automatically'
    ],
    scene: 'Vorbereitung einer Bewerbung für ein Forschungspraktikum',
    femaleSpeakers: ['Marlen'],
    dialogue: [
      { speaker: 'Marlen', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'interessiert', role: 'r-akkusativ', en: 'interested', hi: 'दिलचस्पी रखती हूँ', pron: 'in-te-re-SEERT', type: 'Adjective + Präposition', why: 'interessiert an + Dativ = interested in, fixed adjective-preposition pair (this chapter).', ex: 'Ich bin interessiert an der Stelle.', exEn: 'I am interested in the position.' },
        { w: 'an', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition (part of interessiert an)' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'neuen', role: 'r-dativ', en: 'new', hi: 'नयी', pron: 'NOY-en', type: 'Adjective · dative' },
        { w: 'Stelle', role: 'r-dativ', en: 'position (dat.)', hi: 'जगह में', pron: 'SHTE-luh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I am interested in the new position.', hi: 'Mujhe nayi jagah mein dilchaspi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'fähig', role: 'r-akkusativ', en: 'capable', hi: 'सक्षम', pron: 'FAY-ikh', type: 'Adjective + Präposition', why: 'fähig zu + Dativ = capable of, fixed adjective-preposition pair (this chapter).', ex: 'Bist du fähig zu dieser Aufgabe?', exEn: 'Are you capable of this task?' },
        { w: 'zu', role: 'r-preposition', en: 'of', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of fähig zu)' },
        { w: 'dieser', role: 'r-dativ', en: 'this (fem. dat.)', hi: 'इस', pron: 'DEE-zer', type: 'Determiner · dative' },
        { w: 'Aufgabe', role: 'r-dativ', en: 'task (dat.)', hi: 'काम के लिए', pron: 'OWF-gah-buh', type: 'Noun · fem. dat.' },
        { w: '?', plain: true }
      ], en: 'Are you capable of this task?', hi: 'Kya tum is kaam ke liye saksham ho?' },
      { speaker: 'Marlen', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'bereit', role: 'r-akkusativ', en: 'ready', hi: 'तैयार', pron: 'be-RYTE', type: 'Adjective + Präposition', why: 'bereit zu + Dativ = ready for, fixed adjective-preposition pair (this chapter).', ex: 'Ich bin bereit zu dieser Herausforderung.', exEn: 'I am ready for this challenge.' },
        { w: 'zu', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of bereit zu)' },
        { w: 'dieser', role: 'r-dativ', en: 'this (fem. dat.)', hi: 'इस', pron: 'DEE-zer', type: 'Determiner · dative' },
        { w: 'Herausforderung', role: 'r-dativ', en: 'challenge (dat.)', hi: 'चुनौती के लिए', pron: 'he-ROWS-for-de-rung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes. I am ready for this challenge.', hi: 'Haan. Main is chunauti ke liye taiyaar hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'vertraut', role: 'r-akkusativ', en: 'familiar', hi: 'परिचित', pron: 'fer-TROWT', type: 'Adjective + Präposition', why: 'vertraut mit + Dativ = familiar with, fixed adjective-preposition pair (this chapter).', ex: 'Bist du vertraut mit dem Team?', exEn: 'Are you familiar with the team?' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition (part of vertraut mit)' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Team', role: 'r-dativ', en: 'team (dat.)', hi: 'टीम से', pron: 'teem', type: 'Noun · neut. dat.' },
        { w: '?', plain: true }
      ], en: 'Are you familiar with the team?', hi: 'Kya tum team se parichit ho?' },
      { speaker: 'Marlen', tokens: [
        { w: 'Noch', role: 'r-akkusativ', en: 'not yet', hi: 'अभी नहीं', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'begeistert', role: 'r-akkusativ', en: 'enthusiastic', hi: 'उत्साहित', pron: 'be-GYS-tert', type: 'Adjective + Präposition', why: 'begeistert von + Dativ = enthusiastic about, fixed adjective-preposition pair (this chapter).', ex: 'Ich bin begeistert von der Aufgabe.', exEn: 'I am enthusiastic about the task.' },
        { w: 'von', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'fon', type: 'Preposition (part of begeistert von)' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Aufgabe', role: 'r-dativ', en: 'task (dat.)', hi: 'काम के बारे में', pron: 'OWF-gah-buh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Not yet, but I am enthusiastic about the task.', hi: 'Abhi nahi, par mujhe kaam ke baare mein utsaah hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'überzeugt', role: 'r-akkusativ', en: 'convinced', hi: 'आश्वस्त', pron: 'ü-ber-TSOYKT', type: 'Adjective + Präposition', why: 'überzeugt von + Dativ = convinced of, fixed adjective-preposition pair (this chapter).', ex: 'Ich bin überzeugt von deinem Talent.', exEn: 'I am convinced of your talent.' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'से', pron: 'fon', type: 'Preposition (part of überzeugt von)' },
        { w: 'deinem', role: 'r-dativ', en: 'your (neut. dat.)', hi: 'तुम्हारी', pron: 'DY-naym', type: 'Possessive · dative' },
        { w: 'Talent', role: 'r-dativ', en: 'talent (dat.)', hi: 'प्रतिभा से', pron: 'ta-LENT', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Good. I am convinced of your talent.', hi: 'Achha. Mujhe tumhaari pratibha par vishwaas hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Don\'t memorize the adjective. Memorize <b>the adjective + preposition</b>. <span class="de r-an">interessiert an</span>, <span class="de r-fuer">bekannt für</span>, <span class="de r-von">abhängig von</span>, <span class="de r-auf">stolz auf</span> — each is <b>one</b> vocabulary item, not two.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVE MIT PRÄPOSITIONALERGÄNZUNGEN at C1 level — fixed adjective + preposition combinations, NOT basic adjective endings or elementary prepositions (already mastered). Covered combinations by preposition: "an" (interessiert an, beteiligt an, schuld an, reich an, arm an, erkennbar an — mostly Dativ); "für" (bekannt für, geeignet für, verantwortlich für, typisch für, notwendig für, hilfreich für, relevant für — Akkusativ); "von" (abhängig von, überzeugt von, begeistert von, frei von, unabhängig von, entfernt von — Dativ); "über" (erfreut über, überrascht über, enttäuscht über, verärgert über, informiert über — Akkusativ); others (bewusst + Dativ, fähig zu, bereit zu, stolz auf, neugierig auf, sicher in, vertraut mit, vergleichbar mit, empfindlich gegen, verantwortlich gegenüber). Key semantic distinctions: interessiert an (interest) vs begeistert von (enthusiasm) vs überzeugt von (conviction) vs neugierig auf (curiosity). ' +
    'Do NOT expect or require basic adjective declension or elementary preposition explanations — this chapter assumes those are mastered; do not flag their absence. The most important thing to catch: wrong preposition paired with a fixed adjective (interessiert für instead of interessiert an; abhängig aus instead of abhängig von; stolz für instead of stolz auf; überzeugt über instead of überzeugt von; bekannt von instead of bekannt für; geeignet an instead of geeignet für) and wrong case after the correct preposition. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag any adjective paired with the wrong fixed preposition — these are lexical errors, not stylistic choices.\n' +
    '- Check that the case (Dativ/Akkusativ) following each preposition matches what that specific adjective-preposition combination requires.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Automaticity check:</b> one sentence on whether the learner produced adjective-preposition pairs as single fixed units rather than translating word-for-word.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your adjective-preposition pairs are automatic and correct. Ready for noun-preposition combinations next.',
    mid: 'Good. Re-read the Master Table of adjective-preposition combinations once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: memorize the adjective + preposition as one vocabulary item, not two.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'bin', role: 'plain' }, { w: 'interessiert', role: 'r-an' }, { w: 'an', role: 'r-an' }, { w: 'diesem', role: 'plain' }, { w: 'Projekt', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: adjective + preposition is one vocabulary item, not two separate words.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marlen and Timo prepare research internship applications using fixed adjective-preposition combinations.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key adjective-preposition pairs — full popups with two examples, case, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master fixed adjective-preposition combinations across an, für, von, über, and other prepositions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university article and a professional interview, identifying adjective-preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify adjective-preposition combinations and meaning in a university seminar and a career interview.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe opinions, present qualifications, and discuss research using authentic combinations.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text with authentic adjective-preposition combinations, and write a 350-word motivation letter.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct preposition, completing adjective phrases, and collocation matching.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 390 XP.' },
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
      desc: 'Preposition selection drills, collocation matching, and a full motivation letter writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Meaning Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin sehr interessiert an diesem Forschungsprojekt.', text: 'Use "interessiert an + Dativ" correctly' },
    { de: 'Ich bin überzeugt von unserem Ansatz.', text: 'Use "überzeugt von + Dativ" correctly' },
    { de: 'Wofür sind wir besonders geeignet?', text: 'Use "geeignet für + Akkusativ" correctly' },
    { de: 'Ich bin verantwortlich für die Datenanalyse und stolz auf die Ergebnisse.', text: 'Combine "verantwortlich für" and "stolz auf" naturally' },
    { de: 'Wir sind beide fähig zu eigenständiger Arbeit und bereit zu neuen Herausforderungen.', text: 'Use two different "zu"-adjectives correctly in one sentence' }
  ],

  vocab: [
    { de: 'interessiert an', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'interested in', hi: 'में रुचि रखना', ex: 'Ich bin sehr interessiert an diesem Forschungsprojekt.', exEn: 'I\'m very interested in this research project.', exHi: 'Main iss shodh project mein bahut ruchi rakhta hoon.', ex2: 'Sie ist an internationaler Politik interessiert.', ex2En: 'She is interested in international politics.', ex2Hi: 'Use antarrashtriya rajneeti mein ruchi hai.' },
    { de: 'überzeugt von', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'convinced of', hi: 'के प्रति आश्वस्त', ex: 'Er ist überzeugt von seinem Erfolg.', exEn: 'He is convinced of his success.', exHi: 'Woh apni safaltaa ke prati aashvast hai.', ex2: 'Wir sind von diesem Ansatz überzeugt.', ex2En: 'We are convinced of this approach.', ex2Hi: 'Hum iss drishtikon ke prati aashvast hain.' },
    { de: 'geeignet für', pos: 'adjective + preposition', level: 'C1', register: 'written', requiredCase: 'Akkusativ', en: 'suited for', hi: 'के लिए उपयुक्त', ex: 'Sie ist besonders geeignet für diese Position.', exEn: 'She is especially suited for this position.', exHi: 'Woh iss pad ke liye khaas taur par uपयुक्त hai.', ex2: 'Er ist für die Aufgabe geeignet.', ex2En: 'He is suited for the task.', ex2Hi: 'Woh kaam ke liye uपयुक्त hai.' },
    { de: 'verantwortlich für', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Akkusativ', en: 'responsible for', hi: 'के लिए जिम्मेदार', ex: 'Ich war verantwortlich für die Datenanalyse.', exEn: 'I was responsible for the data analysis.', exHi: 'Main data vishleshan ke liye zimmedaar tha.', ex2: 'Sie ist für das Projekt verantwortlich.', ex2En: 'She is responsible for the project.', ex2Hi: 'Woh project ke liye zimmedaar hai.' },
    { de: 'abhängig von', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'dependent on', hi: 'पर निर्भर', ex: 'Der Erfolg ist abhängig von guter Vorbereitung.', exEn: 'Success is dependent on good preparation.', exHi: 'Safaltaa achhi taiyaari par nirbhar hai.', ex2: 'Sie ist finanziell von ihren Eltern abhängig.', ex2En: 'She is financially dependent on her parents.', ex2Hi: 'Woh vittiya roop se apne maata-pita par nirbhar hai.' },
    { de: 'stolz auf', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Akkusativ', en: 'proud of', hi: 'पर गर्वित', ex: 'Er ist stolz auf seine Leistung.', exEn: 'He is proud of his achievement.', exHi: 'Woh apni upalabdhi par garvit hai.', ex2: 'Wir sind stolz auf die Ergebnisse.', ex2En: 'We are proud of the results.', ex2Hi: 'Hum parinaamon par garvit hain.' },
    { de: 'vertraut mit', pos: 'adjective + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'familiar with', hi: 'से परिचित', ex: 'Wir sind vertraut mit statistischer Software.', exEn: 'We are familiar with statistical software.', exHi: 'Hum sankhyaki software se parichit hain.', ex2: 'Sie ist mit den Regeln vertraut.', ex2En: 'She is familiar with the rules.', ex2Hi: 'Woh niyamon se parichit hai.' },
    { de: 'fähig zu', pos: 'adjective + preposition', level: 'C1', register: 'written', requiredCase: 'Dativ', en: 'capable of', hi: 'में सक्षम', ex: 'Er ist fähig zu eigenständiger Arbeit.', exEn: 'He is capable of independent work.', exHi: 'Woh svatantra kaam mein saksham hai.', ex2: 'Sie sind zu großen Leistungen fähig.', ex2En: 'They are capable of great achievements.', ex2Hi: 'Woh badi upalabdhiyon mein saksham hain.' },
    { de: 'bereit zu', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'ready for', hi: 'के लिए तैयार', ex: 'Wir sind bereit zu neuen Herausforderungen.', exEn: 'We are ready for new challenges.', exHi: 'Hum nayi chunautiyon ke liye taiyaar hain.', ex2: 'Sie ist bereit zur Zusammenarbeit.', ex2En: 'She is ready for cooperation.', ex2Hi: 'Woh sahyog ke liye taiyaar hai.' },
    { de: 'begeistert von', pos: 'adjective + preposition', level: 'C1', register: 'both', requiredCase: 'Dativ', en: 'enthusiastic about', hi: 'से उत्साहित', ex: 'Ich bin sehr begeistert von der Möglichkeit.', exEn: 'I\'m very enthusiastic about the opportunity.', exHi: 'Main iss avsar se bahut utsaahit hoon.', ex2: 'Er ist von dem Konzept begeistert.', ex2En: 'He is enthusiastic about the concept.', ex2Hi: 'Woh concept se utsaahit hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Adjektiv + Präposition zählt',
      body: [ 'Simple adjective → Correct adjective → Native-like adjective + preposition combination. These combinations are lexical units, not derivable from grammar rules alone.' ],
      hinglish: 'In combinations ko rule se nikaala nahi jaa sakta \u2014 yeh vocabulary ki tarah yaad karni padti hain. Isliye adjective akela mat yaad karo; hamesha uske preposition aur case ke saath yaad karo, jaise <b>interessiert an + Dativ</b> ek hi shabd ho.'
    },
    {
      title: 'Adjektive mit "an" (mostly Dativ)',
      body: [ 'interessiert an, beteiligt an, schuld an, reich an, arm an, erkennbar an — each with distinct meaning, register, and collocations.' ],
      hinglish: '<b>an</b> wale adjectives zyada-tar Dativ lete hain: <b>interessiert an</b> (dilchaspi), <b>beteiligt an</b> (kisi kaam mein shaamil), <b>schuld an</b> (kisi cheez ka zimmedaar), <b>reich an</b> aur <b>arm an</b> (kisi cheez se bharpoor ya uski kami).'
    },
    {
      title: 'Adjektive mit "für" (Akkusativ)',
      body: [ '<b>f\u00fcr</b> wale adjectives Akkusativ lete hain, aur inka matlab aksar \u201ckiske liye\u201d hota hai: <b>verantwortlich f\u00fcr</b> (zimmedaar), <b>geeignet f\u00fcr</b> (kiske liye theek), <b>typisch f\u00fcr</b>, <b>notwendig f\u00fcr</b> aur <b>relevant f\u00fcr</b> \u2014 yeh aakhri do academic writing mein bahut aate hain.' ],
      hinglish: '<b>f\u00fcr</b> wale adjectives Akkusativ lete hain, aur inka matlab aksar \u201ckiske liye\u201d hota hai: <b>verantwortlich f\u00fcr</b> (zimmedaar), <b>geeignet f\u00fcr</b> (kiske liye theek), <b>typisch f\u00fcr</b>, <b>notwendig f\u00fcr</b> aur <b>relevant f\u00fcr</b> \u2014 yeh aakhri do academic writing mein bahut aate hain.'
    },
    {
      title: 'Adjektive mit "von" (Dativ)',
      body: [ '<b>von</b> wale adjectives Dativ lete hain: <b>abh\u00e4ngig von</b>, <b>\u00fcberzeugt von</b>, <b>begeistert von</b>, <b>frei von</b> aur <b>unabh\u00e4ngig von</b>. Dhyaan do ki English mein \u201cdepend <i>on</i>\u201d hai, par German mein <b>von</b> \u2014 yahi galti sabse zyada hoti hai.' ],
      hinglish: '<b>von</b> wale adjectives Dativ lete hain: <b>abh\u00e4ngig von</b>, <b>\u00fcberzeugt von</b>, <b>begeistert von</b>, <b>frei von</b> aur <b>unabh\u00e4ngig von</b>. Dhyaan do ki English mein \u201cdepend <i>on</i>\u201d hai, par German mein <b>von</b> \u2014 yahi galti sabse zyada hoti hai.'
    },
    {
      title: 'Adjektive mit "über" (Akkusativ)',
      body: [ '<b>\u00fcber</b> wale adjectives Akkusativ lete hain aur zyada-tar bhaavnaon ke liye hain: <b>erfreut</b>, <b>\u00fcberrascht</b>, <b>entt\u00e4uscht</b>, <b>ver\u00e4rgert</b> \u2014 aur <b>informiert \u00fcber</b>, jo emotion nahi balki jaankaari batata hai.' ],
      hinglish: '<b>\u00fcber</b> wale adjectives Akkusativ lete hain aur zyada-tar bhaavnaon ke liye hain: <b>erfreut</b>, <b>\u00fcberrascht</b>, <b>entt\u00e4uscht</b>, <b>ver\u00e4rgert</b> \u2014 aur <b>informiert \u00fcber</b>, jo emotion nahi balki jaankaari batata hai.'
    },
    {
      title: 'Adjektive mit anderen Präpositionen',
      body: [ 'Baaki prepositions bhi aate hain: <b>f\u00e4hig zu</b> aur <b>bereit zu</b> (Dativ), <b>stolz auf</b> aur <b>neugierig auf</b> (Akkusativ), <b>vertraut mit</b> aur <b>vergleichbar mit</b> (Dativ). Aur <b>bewusst</b> alag hai \u2014 woh Genitiv leta hai: <span class="de">Ich bin mir des Problems bewusst.</span>' ],
      hinglish: 'Baaki prepositions bhi aate hain: <b>f\u00e4hig zu</b> aur <b>bereit zu</b> (Dativ), <b>stolz auf</b> aur <b>neugierig auf</b> (Akkusativ), <b>vertraut mit</b> aur <b>vergleichbar mit</b> (Dativ). Aur <b>bewusst</b> alag hai \u2014 woh Genitiv leta hai: <span class="de">Ich bin mir des Problems bewusst.</span>'
    },
    {
      title: 'Satzbau: wo das Adjektiv steht',
      body: [
        'Knowing the pairing is not enough \u2014 you also need to place it. The adjective normally sits at the very end of the clause, with its prepositional phrase in front of it.',
        'And when you refer back to a thing rather than a person, the preposition fuses into a <b>da(r)-</b> form; to ask about it, into a <b>wo(r)-</b> form.'
      ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['sein + prepositional phrase + adjective', '<span class="de">Ich bin <b>an dem Thema</b> interessiert.</span>'],
          ['adjective last, even in the Perfekt', '<span class="de">Er ist immer <b>von seiner Idee</b> \u00fcberzeugt gewesen.</span>'],
          ['referring to a THING', '<span class="de">Ich bin <b>daran</b> interessiert.</span>'],
          ['referring to a PERSON', '<span class="de">Ich bin <b>an ihm</b> interessiert.</span>'],
          ['asking about a thing', '<span class="de"><b>Woran</b> bist du interessiert?</span>'],
          ['asking about a person', '<span class="de"><b>An wem</b> bist du interessiert?</span>']
        ]
      },
      note: 'The <b>da(r)-</b> form also opens a following clause: <span class="de">Ich bin <b>daran</b> interessiert, mehr zu erfahren.</span> This is how these adjectives connect to a whole idea rather than a single noun.',
      hinglish: 'Sirf jodi yaad karna kaafi nahi \u2014 use sentence mein rakhna bhi aana chahiye. Adjective aksar clause ke <b>end</b> mein aata hai, aur uska prepositional phrase usse pehle: <span class="de">Ich bin an dem Thema interessiert.</span> Aur jab tum kisi <b>cheez</b> ki baat karte ho, to preposition <b>da(r)-</b> form mein badal jaata hai \u2014 <span class="de">Ich bin daran interessiert</span> \u2014 par kisi <b>insaan</b> ke liye preposition waisa hi rehta hai: <span class="de">an ihm</span>. Sawaal poochhna ho to cheez ke liye <b>woran</b> aur insaan ke liye <b>an wem</b>. Yeh <b>da(r)-</b> form aage clause bhi khol deta hai: <span class="de">Ich bin daran interessiert, mehr zu erfahren.</span>'
    },
    {
      title: 'Bedeutungsunterschiede',
      body: [ 'interessiert an (interest) → begeistert von (enthusiasm) → überzeugt von (conviction) → neugierig auf (curiosity) — subtle semantic differences that change which preposition is correct.' ],
      hinglish: 'In chaaron ka matlab milta-julta lagta hai par alag hai \u2014 aur isi wajah se preposition badal jaata hai. <b>interessiert an</b> matlab saadharan dilchaspi, <b>begeistert von</b> matlab bahut zyada pasand, <b>\u00fcberzeugt von</b> matlab yakeen hona, aur <b>neugierig auf</b> matlab jaanne ki utsukta. Pehle matlab tay karo, phir preposition apne aap sahi aayega.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'A quick-reference table of adjective, preposition, and required case.' ],
      table: {
        head: ['Adjective', 'Preposition', 'Case'],
        rows: [
          ['interessiert', 'an', 'Dativ'],
          ['beteiligt', 'an', 'Dativ'],
          ['bekannt', 'für', 'Akkusativ'],
          ['geeignet', 'für', 'Akkusativ'],
          ['verantwortlich', 'für', 'Akkusativ'],
          ['abhängig', 'von', 'Dativ'],
          ['überzeugt', 'von', 'Dativ'],
          ['begeistert', 'von', 'Dativ'],
          ['stolz', 'auf', 'Akkusativ'],
          ['vertraut', 'mit', 'Dativ'],
          ['fähig', 'zu', 'Dativ'],
          ['bereit', 'zu', 'Dativ']
        ]
      },
      hinglish: 'Adjective, preposition aur case ka table \u2014 ise jodi ki tarah padho, adjective akela mat dekho. Ek pattern kaam ka hai: <b>f\u00fcr</b>, <b>auf</b> aur <b>\u00fcber</b> Akkusativ lete hain, aur <b>an</b>, <b>von</b>, <b>mit</b>, <b>zu</b> Dativ.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Almost all of these come from English: \u201cinterested in\u201d, \u201cproud of\u201d, \u201cdepend on\u201d. German picks its own preposition, so the pairing has to be learned, not translated.' ],
      mistakes: [
        { wrong: 'Sie ist interessiert für Politik.', right: 'Sie ist interessiert an Politik. / Sie interessiert sich für Politik.', why: 'The adjective <b>interessiert</b> takes <b>an</b> + Dativ. The reflexive VERB takes <i>f\u00fcr</i> \u2014 mixing the two is what produces this error.' },
        { wrong: 'Das Ergebnis ist abhängig aus mehreren Faktoren.', right: 'Das Ergebnis ist abhängig von mehreren Faktoren.', why: '<b>abh\u00e4ngig</b> takes <b>von</b> + Dativ. English \u201cdepend on\u201d tempts learners into <i>auf</i> or <i>aus</i>.' },
        { wrong: 'Wir sind stolz für unsere Ergebnisse.', right: 'Wir sind stolz auf unsere Ergebnisse.', why: '<b>stolz</b> takes <b>auf</b> + Akkusativ \u2014 so it is <i>unsere</i>, not <i>unseren</i>.' },
        { wrong: 'Ich bin überzeugt über den Plan.', right: 'Ich bin überzeugt von dem Plan. / Ich bin vom Plan überzeugt.', why: '<b>\u00fcberzeugt</b> takes <b>von</b> + Dativ. Neighbouring adjectives like <i>informiert \u00fcber</i> and <i>\u00fcberrascht \u00fcber</i> make <i>\u00fcber</i> feel right, but it is not.' },
        { wrong: 'Die Stadt ist bekannt von ihre Architektur.', right: 'Die Stadt ist bekannt für ihre Architektur.', why: 'In the sense \u201cfamous for\u201d, <b>bekannt</b> takes <b>f\u00fcr</b> + Akkusativ. (With a Dativ, <i>bekannt</i> means something else: <span class="de">Das ist mir bekannt</span> = I know that.)' },
        { wrong: 'Das Programm ist geeignet an Anfänger.', right: 'Das Programm ist geeignet für Anfänger.', why: '<b>geeignet</b> takes <b>f\u00fcr</b> + Akkusativ. Note that <b>zu</b> also occurs, but with a different sense: <i>geeignet zum Kochen</i> (suitable for doing something).' }
      ],
      hinglish: 'Yeh saari galtiyan English se aati hain \u2014 \u201cinterested in\u201d, \u201cproud of\u201d, \u201cdepend on\u201d. German apna preposition khud chunta hai, isliye ise translate mat karo, yaad karo.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to describe interest? interessiert an. Need responsibility? verantwortlich für. Need dependence? abhängig von. Need pride? stolz auf. Need ability? fähig zu. Need familiarity? vertraut mit.' ],
      note: 'Memory trick: don\'t memorize the adjective — memorize the adjective + preposition. Think of each combination as one vocabulary item, not two separate words.',
      hinglish: 'Dilchaspi? <b>interessiert an</b>. Zimmedaari? <b>verantwortlich f\u00fcr</b>. Nirbharta? <b>abh\u00e4ngig von</b>. Garv? <b>stolz auf</b>. Kshamta? <b>f\u00e4hig zu</b>. Jaan-pehchaan? <b>vertraut mit</b>. Aur likhte waqt do cheezein check karo \u2014 case sahi hai, aur adjective clause ke end mein hai?'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Uni-Magazin: Porträt eines Forschungsteams',
    titleEn: 'Reading A — University magazine: profile of a research team',
    tokens: [
      { w: 'Das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'sechsköpfige', role: 'plain', en: 'six-member', hi: 'छह सदस्यीय', type: 'Adjective' },
      { w: 'Team', role: 'plain', en: 'team (Satzende)', hi: 'टीम (Satzende)', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein (Präsens)' },
      { w: 'besonders', role: 'plain', en: 'particularly', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'stolz', role: 'r-auf', en: 'proud (fixed adjective, "auf" + Akkusativ)', hi: 'गर्व करता है', type: 'Adjective' },
      { w: 'auf', role: 'r-auf', en: 'of (Akkusativ, fixed with "stolz")', hi: 'पर (Akkusativ)', type: 'Präposition · Akk.' },
      { w: 'seine', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel · Akk.' },
      { w: 'internationale', role: 'plain', en: 'international', hi: 'अंतरराष्ट्रीय', type: 'Adjective · Akk.' },
      { w: 'Zusammensetzung', role: 'plain', en: 'composition (Satzende)', hi: 'संरचना (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Forscherinnen', role: 'plain', en: 'researchers (f.)', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Forscher', role: 'plain', en: 'researchers (m.) (Satzende)', hi: 'शोधकर्ता (Satzende)', type: 'Noun · plural' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein (Präsens)' },
      { w: 'vor', role: 'plain', en: 'above all', hi: 'सबसे ज़्यादा', type: 'Adverbiale' },
      { w: 'allem', role: 'plain', en: '(part of "vor allem")', hi: '', type: 'Pronomen' },
      { w: 'interessiert', role: 'r-an', en: 'interested (fixed adjective, "an" + Dativ)', hi: 'रुचि रखते हैं', type: 'Adjective' },
      { w: 'an', role: 'r-an', en: 'in (Dativ, fixed with "interessiert")', hi: 'में (Dativ)', type: 'Präposition · Dat.' },
      { w: 'Fragen', role: 'plain', en: 'questions (Satzende)', hi: 'प्रश्नों में (Satzende)', type: 'Noun · plural' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Klimaanpassung', role: 'plain', en: 'climate adaptation (Satzende)', hi: 'जलवायु अनुकूलन (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'plain', en: 'their', hi: 'उनकी', type: 'Possessivartikel' },
      { w: 'Doktorandin', role: 'plain', en: 'doctoral student (f.)', hi: 'पीएचडी छात्रा', type: 'Noun · fem.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'seit', role: 'plain', en: 'since', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'letztem', role: 'plain', en: 'last (masc. dat.)', hi: 'पिछले', type: 'Adjective · Dat.' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: 'साल (Satzende)', type: 'Noun · neut.' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'an', role: 'r-an', en: 'in (Dativ, fixed with "beteiligt")', hi: 'में (Dativ)', type: 'Präposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'EU-Projekt', role: 'plain', en: 'EU project (Satzende)', hi: 'EU परियोजना में (Satzende)', type: 'Noun · neut.' },
      { w: 'beteiligt', role: 'r-an', en: 'involved (fixed adjective, "an" + Dativ, Satzende)', hi: 'शामिल है (Satzende)', type: 'Adjective', why: '"Beteiligt an + Dativ" is a further fixed adjective-preposition pair (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'which', hi: 'जो', type: 'Relativpronomen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Küstenschutz', role: 'plain', en: 'coastal protection (Satzende)', hi: 'तटीय सुरक्षा (Satzende)', type: 'Noun · masc.' },
      { w: 'befasst', role: 'plain', en: 'deals (Satzende)', hi: 'से संबंधित है (Satzende)', type: 'Verb · sich befassen (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The six-member team is particularly proud of its international composition. The researchers are above all interested in questions of climate adaptation. Their doctoral student has moreover been involved since last year in an EU project dealing with coastal protection.',
    comprehension: [
      { q: 'Welche Präposition passt zu "stolz"?', options: ['auf', 'für', 'von'], answer: 0 },
      { q: 'Welche Präposition passt zu "interessiert"?', options: ['an', 'für', 'mit'], answer: 0 },
      { q: 'Welchen Kasus verlangt "beteiligt an"?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Berufsinterview',
    titleEn: 'Reading B — Professional interview',
    tokens: [
      { w: 'Ich', role: 'plain', en: 'I', hi: 'main', type: 'Pronomen · Nom.' },
      { w: 'bin', role: 'plain', en: 'am', hi: 'hoon', type: 'Verb · sein (Präsens)' },
      { w: 'sehr', role: 'plain', en: 'very', hi: 'bahut', type: 'Adverb' },
      { w: 'stolz', role: 'r-auf', en: 'proud (fixed adjective, "auf" + Akkusativ)', hi: 'garvit hoon (fixed adjective, "auf" + Akkusativ)', type: 'Adjective' },
      { w: 'auf', role: 'r-auf', en: 'of (Akkusativ, fixed with "stolz")', hi: '(Akkusativ, "stolz" ke saath fixed)', type: 'Präposition · Akk.' },
      { w: 'unser', role: 'plain', en: 'our (neut. akk.)', hi: 'hamaari', type: 'Possessivartikel · Akk.' },
      { w: 'Team', role: 'plain', en: 'team (Satzende)', hi: 'team par (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'plain', en: 'we', hi: 'hum', type: 'Pronomen · Nom.' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'hain', type: 'Verb · sein (Präsens)' },
      { w: 'sehr', role: 'plain', en: 'very', hi: 'bahut', type: 'Adverb' },
      { w: 'vertraut', role: 'r-mit', en: 'familiar (fixed adjective, "mit" + Dativ)', hi: 'parichit hain (fixed adjective, "mit" + Dativ)', type: 'Adjective' },
      { w: 'mit', role: 'r-mit', en: 'with (Dativ, fixed with "vertraut")', hi: '(Dativ, "vertraut" ke saath fixed)', type: 'Präposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'in', type: 'Article · Dat.' },
      { w: 'Herausforderungen', role: 'plain', en: 'challenges (Satzende)', hi: 'chunautiyon se (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'iss', type: 'Article · Gen.' },
      { w: 'Branche', role: 'plain', en: 'industry (Satzende)', hi: 'industry ki (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'I am very proud of our team. We are very familiar with the challenges of the industry.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_009_L001', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich bin wirklich interessiert an der neuen Praktikumsstelle im Labor.', en: 'Timo, I\'m really interested in the new internship position in the lab.' },
      { id: 'C1_009_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das freut mich zu hören, ich bin überzeugt von deinem Talent für diese Aufgabe.', en: 'I\'m glad to hear that, I\'m convinced of your talent for this task.' },
      { id: 'C1_009_L003', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke! Ich bin auch bereit für die Herausforderung, auch wenn sie anspruchsvoll klingt.', en: 'Thanks! I\'m also ready for the challenge, even if it sounds demanding.' },
      { id: 'C1_009_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau diese Haltung ist ausschlaggebend für den Erfolg.', en: 'Exactly that attitude is decisive for success.' }
    ],
    transcript: 'Timo, ich bin wirklich interessiert an der neuen Praktikumsstelle im Labor. Das freut mich zu hören, ich bin überzeugt von deinem Talent für diese Aufgabe. Danke! Ich bin auch bereit für die Herausforderung, auch wenn sie anspruchsvoll klingt. Genau diese Haltung ist ausschlaggebend für den Erfolg.',
    translation: 'Timo, I\'m really interested in the new internship position in the lab. I\'m glad to hear that, I\'m convinced of your talent for this task. Thanks! I\'m also ready for the challenge, even if it sounds demanding. Exactly that attitude is decisive for success.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'wirklich' },
      { w: 'interessiert' },
      { w: 'an' },
      { w: 'der' },
      { w: 'neuen' },
      { w: 'Praktikumsstelle' },
      { w: 'im' },
      { w: 'Labor' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'freut' },
      { w: 'mich' },
      { w: 'zu' },
      { w: 'hören' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'überzeugt' },
      { w: 'von' },
      { w: 'deinem' },
      { w: 'Talent' },
      { w: 'für' },
      { w: 'diese' },
      { w: 'Aufgabe' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'auch' },
      { w: 'bereit' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Herausforderung' },
      { w: ',', plain: true },
      { w: 'auch' },
      { w: 'wenn' },
      { w: 'sie' },
      { w: 'anspruchsvoll' },
      { w: 'klingt' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'diese' },
      { w: 'Haltung' },
      { w: 'ist' },
      { w: 'ausschlaggebend' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Erfolg' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Woran ist Marlen interessiert?', qEn: 'What is Marlen interested in?', options: ['einem neuen Job', 'der neuen Praktikumsstelle im Labor', 'einem Urlaub', 'einer Prüfung'], optionsEn: ['a new job', 'the new internship in the lab', 'a holiday', 'an exam'], answer: 1,
        explain: '"Ich bin wirklich interessiert an der neuen Praktikumsstelle im Labor."' },
      { q: 'Wovon ist Timo überzeugt?', qEn: 'What is Timo convinced of?', options: ['ihrem Talent', 'ihrem Geld', 'ihrer Erfahrung', 'ihrem Alter'], optionsEn: ['her talent', 'her money', 'her experience', 'her age'], answer: 0,
        explain: '"Ich bin überzeugt von deinem Talent für diese Aufgabe."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo erzählt von der Praktikumsstelle im Labor. Sag, was dich reizt.", taskEn: "Timo talks about the lab placement. Say what appeals to you.", de: "Ich bin wirklich interessiert an der neuen Praktikumsstelle im Labor.", en: "I'm really interested in the new lab placement." },
    { task: "Deine Betreuerin fragt, ob du die Aufgabe schaffst.", taskEn: "Your supervisor asks whether you can manage the task.", de: "Ich bin überzeugt von der Methode und fähig zu selbstständiger Arbeit.", en: "I'm convinced by the method and capable of independent work." },
    { task: "Im Gespräch fragt man nach deinem Aufgabenbereich.", taskEn: "In the interview you're asked about your area of responsibility.", de: "Ich bin verantwortlich für die Auswertung und vertraut mit statistischen Verfahren.", en: "I'm responsible for the analysis and familiar with statistical methods." },
    { task: "Man fragt nach einem Erfolg, der dir wichtig ist.", taskEn: "You're asked about an achievement that matters to you.", de: "Ich bin stolz auf die Publikation aus meiner Abschlussarbeit.", en: "I'm proud of the publication from my thesis." },
    { task: "Eine Kollegin fragt, ob das Labor allein arbeiten kann.", taskEn: "A colleague asks whether the lab can work alone.", de: "Wir sind abhängig von den Zulieferern, aber bereit zu einer Umstellung.", en: "We're dependent on the suppliers, but ready for a changeover." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text with simple adjectives and rewrite it using authentic C1 adjective-preposition combinations (interessiert an, verantwortlich für, abhängig von, stolz auf).\n\nTASK 2 — Motivation letter (350 words): Write a motivation letter or academic statement naturally using a wide variety of adjective-preposition combinations.',
    starters: ['Ich bin sehr interessiert an dieser Position.', 'Ich bin überzeugt von meinen Fähigkeiten und bereit zu neuen Herausforderungen.'],
    placeholder: 'Ich bin sehr interessiert an diesem Forschungsprojekt und überzeugt von meinen Fähigkeiten...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which preposition correctly completes "interessiert"?',
      options: ['an', 'für', 'über'],
      answer: 0,
      explain: '"Interessiert" always pairs with "an" + Dativ — never "für" or "über".'
    },
    gap: {
      sentence: ['Ich bin verantwortlich ', ' die Datenanalyse.'],
      gaps: [ { answer: 'für', accepts: ['für'] } ],
      explain: '"Verantwortlich" always pairs with "für" + Akkusativ.'
    },
    match: {
      q: 'Match each adjective to its fixed preposition.',
      pairs: [
        { noun: 'interessiert', art: 'an' },
        { noun: 'bekannt', art: 'für' },
        { noun: 'abhängig', art: 'von' },
        { noun: 'stolz', art: 'auf' }
      ]
    },
    builder: {
      target: 'Build: "I am capable of independent work." (fixed adjective-preposition combination)',
      bank: ['Ich', 'bin', 'fähig', 'zu', 'eigenständiger', 'Arbeit', '.'],
      answer: ['Ich', 'bin', 'fähig', 'zu', 'eigenständiger', 'Arbeit', '.'],
      roles: { 'fähig': 'r-zu', 'zu': 'r-zu' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin sehr interessiert für dieses Projekt.',
      right: 'Ich bin sehr interessiert an diesem Projekt.',
      explain: '"Interessiert" always pairs with "an" + Dativ, never "für".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which preposition pairs with "interessiert"?', options: ['an', 'für', 'über'], answer: 0,
      explain: '"Interessiert an + Dativ" is the fixed combination.' },
    { q: 'Which preposition pairs with "stolz"?', options: ['auf', 'für', 'von'], answer: 0,
      explain: '"Stolz auf + Akkusativ" is the fixed combination.' },
    { q: 'Which preposition pairs with "abhängig"?', options: ['von', 'aus', 'an'], answer: 0,
      explain: '"Abhängig von + Dativ" is the fixed combination.' },
    { q: 'What case does "verantwortlich für" require?', options: ['Akkusativ', 'Dativ', 'Genitiv'], answer: 0,
      explain: '"Verantwortlich für" governs the Akkusativ case.' },
    { q: 'What is the C1 memory trick for these combinations?', options: ['Memorize adjective + preposition as one vocabulary item', 'Memorize only the adjective', 'Prepositions can be freely chosen'], answer: 0,
      explain: 'These combinations are fixed lexical units — never translate them word-for-word.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-an', html: '"An" combinations (interessiert an, beteiligt an, schuld an, reich an) mostly take the Dativ.' },
    { c: 'r-fuer', html: '"Für" combinations (bekannt für, geeignet für, verantwortlich für, typisch für) take the Akkusativ.' },
    { c: 'r-von', html: '"Von" combinations (abhängig von, überzeugt von, begeistert von) take the Dativ — each with distinct nuances of meaning.' }
  ],
  revisionTips: [
    'Write ten sentences about yourself, each using a different adjective-preposition combination from this chapter.',
    'Create flashcards pairing each adjective directly with its preposition (never the adjective alone).',
    'Read a German job interview transcript or motivation letter and underline every adjective-preposition combination you find.'
  ]
};

window.CHAPTER = CHAPTER;
