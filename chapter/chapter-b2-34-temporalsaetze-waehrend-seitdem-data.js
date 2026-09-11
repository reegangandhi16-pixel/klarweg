/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 34
   "Temporalsätze: während / seitdem" — während (simultaneous
   actions, same time) vs seitdem (past event → beginning →
   continues into NOW). Does NOT teach bevor, bis, or sobald.
   IMPORTANT: dialogue uses ONLY Marlen and Timo.
   Vocabulary source: uploaded chapter-34 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-34-temporalsaetze-waehrend-seitdem',
  phase: 'B2 · Phase 3',
  number: 34,
  title: 'Temporalsätze: während / seitdem',
  titleEn: 'Time clauses: while / since',
  description: 'während links two actions happening at once; seitdem links a past beginning to something still true now.',
  xp: 480,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 35, title: 'Temporalsätze: bevor / nachdem', titleEn: 'Time clauses: before / after' , href: 'chapter-b2-35-temporalsaetze-bevor-nachdem.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'At the same time — <em>or since then?</em>',
    intro: 'Marlen has quit smoking and feels fitter ever since, and Timo notices the difference — while she used to be tired all the time, she\'s now full of energy. Every sentence links two actions happening at once (während) or a change still true today (seitdem).',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear während mark simultaneous actions and seitdem mark a past-to-present continuation'
    ],
    scene: 'Neue Routinen',
    femaleSpeakers: ['Marlen'],
    dialogue: [
      { speaker: 'Marlen', tokens: [
        { w: 'Seitdem', role: 'r-conjunction', en: 'since', hi: 'जब से', pron: 'ZYT-daym', type: 'Conjunction · seitdem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'mehr', role: 'r-adverb', en: 'anymore', hi: 'अब', pron: 'mair', type: 'Adverb' },
        { w: 'rauche', role: 'r-verb', en: 'smoke', hi: 'धूम्रपान करती', pron: 'ROW-khuh', type: 'Verb · rauchen (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'fühle', role: 'r-verb', en: 'feel', hi: 'महसूस करती हूँ', pron: 'FÜ-luh', type: 'Verb · fühlen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'fitter', role: 'r-akkusativ', en: 'fitter', hi: 'ज़्यादा फ़िट', pron: 'FI-ter', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'Since I do not smoke anymore, I feel much fitter.', hi: 'Jab se main dhoomrapaan nahi karti, main bahut zyada fit mehsoos karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Während', role: 'r-conjunction', en: 'while', hi: 'जबकि', pron: 'VAI-rent', type: 'Conjunction · während' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'früher', role: 'r-akkusativ', en: 'earlier', hi: 'पहले', pron: 'FRÜ-er', type: 'Adverb' },
        { w: 'oft', role: 'r-akkusativ', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: 'müde', role: 'r-akkusativ', en: 'tired', hi: 'थकी हुई', pron: 'MÜ-duh', type: 'Adjective' },
        { w: 'warst', role: 'r-verb', en: 'were', hi: 'थी', pron: 'varst', type: 'Verb · sein (Präteritum, du, Satzende)' },
        { w: ',', plain: true },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'voller', role: 'r-subject', en: 'full of', hi: 'भरपूर', pron: 'FO-ler', type: 'Adjective' },
        { w: 'Energie', role: 'r-subject', en: 'energy', hi: 'ऊर्जा', pron: 'e-ner-GEE', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'That pleases me very much. While you were often tired earlier, you are now full of energy.', hi: 'Mujhe iski bahut khushi hai. Jabki tum pehle aksar thaki hui thi, ab tum oorja se bharpoor ho.' },
      { speaker: 'Marlen', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Seitdem', role: 'r-conjunction', en: 'since', hi: 'जब से', pron: 'ZYT-daym', type: 'Conjunction · seitdem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'aufgehört', role: 'r-verb', en: 'stopped', hi: 'छोड़ दिया', pron: 'OWF-ge-hört', type: 'Partizip II' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'schlafe', role: 'r-verb', en: 'sleep', hi: 'सोती हूँ', pron: 'SHLAH-fuh', type: 'Verb · schlafen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'Exactly! Since I have stopped, I also sleep better.', hi: 'Bilkul! Jab se maine chhoda hai, main behtar bhi sotee hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Während', role: 'r-conjunction', en: 'while', hi: 'जबकि', pron: 'VAI-rent', type: 'Conjunction · während' },
        { w: 'andere', role: 'r-subject', en: 'others', hi: 'दूसरे', pron: 'AN-de-ruh', type: 'Pronoun' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'schwer', role: 'r-akkusativ', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: 'finden', role: 'r-verb', en: 'find', hi: 'पाते हैं', pron: 'FIN-den', type: 'Verb · finden (Satzende)' },
        { w: ',', plain: true },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'कर लिया', pron: 'hast', type: 'Verb · haben' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'geschafft', role: 'r-verb', en: 'managed', hi: 'कर लिया', pron: 'ge-SHAFT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'While others find it hard, you have managed it.', hi: 'Jabki doosre ise mushkil paate hain, tumne yeh kar liya.' },
      { speaker: 'Marlen', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Seitdem', role: 'r-conjunction', en: 'since', hi: 'जब से', pron: 'ZYT-daym', type: 'Conjunction · seitdem' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'stolzer', role: 'r-akkusativ', en: 'prouder', hi: 'ज़्यादा गर्वित', pron: 'SHTOL-tser', type: 'Adjective · Komparativ' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद पर', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Since then I am much prouder of myself.', hi: 'Us samay se main khud par bahut zyada garvit hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Two time connectors, two completely different jobs. <span class="de r-temporal">während</span> links two actions happening at the SAME time. <span class="de r-temporal">seitdem</span> links a past beginning to something that is STILL true now.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPORALSÄTZE: WÄHREND / SEITDEM (B2 level): während links two SIMULTANEOUS actions ("while"); seitdem links a past beginning to a state/action still true NOW ("since"). Both send the verb to the end of the subordinate clause (Nebensatz word order). "während" can also work as a preposition + Genitiv (während der Präsentation). ' +
    'Do NOT expect or require bevor, bis, or sobald — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "während" and "seitdem" both send the verb to the end of the clause.\n' +
    '- Check that "während" describes genuinely simultaneous actions, not a starting point.\n' +
    '- Check that "seitdem" describes a past beginning that continues into the present (often paired with Perfekt or a present-tense main clause describing an ongoing state), not two simultaneous actions.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Timeline check:</b> one sentence on whether the learner correctly distinguished simultaneous actions (während) from a past-to-present continuation (seitdem).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly distinguish während (simultaneous) from seitdem (past-to-present). Move on to the next B2 chapter.',
    mid: 'Good. Re-read the timeline diagrams once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: während = two actions at once, seitdem = began in the past, still true now.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'höre', role: 'plain' }, { w: 'Musik', role: 'plain' }, { w: ',', plain: true },
    { w: 'während', role: 'r-temporal' }, { w: 'ich', role: 'plain' }, { w: 'lerne', role: 'r-temporal' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: während links simultaneous actions, seitdem links past-to-present continuation.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marlen and Timo compare routines, using während for what happens at once and seitdem for lasting changes.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master während and seitdem, and compare all four temporal connectors: als, wenn, während, seitdem.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a workplace report and a personal story about moving to Germany.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify simultaneous actions, beginnings, and continuing states.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe routines and life changes using während and seitdem naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an experience report and an email using während and seitdem appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill während-or-seitdem decisions, timeline exercises, and sentence transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 480 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'während-or-seitdem drills, timeline exercises, and an experience-report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete connector comparison table, timeline diagrams, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich lerne, während Rohan arbeitet.', text: 'Describe two simultaneous actions with während' },
    { de: 'Seitdem Anna nach Deutschland gezogen ist, spricht sie Deutsch.', text: 'Describe a past-to-present continuation with seitdem' },
    { de: 'als (one past event), wenn (repeated/future)', text: 'Distinguish während/seitdem from als and wenn' },
    { de: 'während + Genitiv', text: 'Use während as a preposition (during)' },
    { de: 'Both connectors: verb at the end', text: 'Apply correct Nebensatz word order' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-34 list) ----------
  vocab: [
    { de: 'Lerneffekt', art: 'der', gender: 'm', plural: 'Lerneffekte', pos: 'noun', level: 'B2', register: 'written', en: 'learning effect', hi: 'सीखने का प्रभाव', ex: 'Der Lerneffekt war deutlich sichtbar.', exEn: 'The learning effect was clearly visible.', exHi: 'Seekhne ka prabhaav spasht dikhaai diya.', ex2: 'Sie haben den Lerneffekt gemessen.', ex2En: 'They\'ve measured the learning effect.', ex2Hi: 'Unhone seekhne ka prabhaav maapa hai.' },
    { de: 'Lerninhalt', art: 'der', gender: 'm', plural: 'Lerninhalte', pos: 'noun', level: 'B2', register: 'written', en: 'learning content', hi: 'सीखने की सामग्री', ex: 'Der Lerninhalt war anspruchsvoll.', exEn: 'The learning content was demanding.', exHi: 'Seekhne ki saamagri chunautipoorn thi.', ex2: 'Sie haben den Lerninhalt überarbeitet.', ex2En: 'They\'ve revised the learning content.', ex2Hi: 'Unhone seekhne ki saamagri sudhaari hai.' },
    { de: 'Lesetext', art: 'der', gender: 'm', plural: 'Lesetexte', pos: 'noun', level: 'B2', register: 'both', en: 'reading text', hi: 'पठन पाठ', ex: 'Der Lesetext behandelte ein aktuelles Thema.', exEn: 'The reading text dealt with a current topic.', exHi: 'Pathan paath ek vartamaan vishay se sambandhit tha.', ex2: 'Sie haben den Lesetext analysiert.', ex2En: 'They\'ve analysed the reading text.', ex2Hi: 'Unhone pathan paath ka vishleshan kiya hai.' },
    { de: 'limitiert', pos: 'adjective', level: 'B2', register: 'both', en: 'limited', hi: 'सीमित', ex: 'Die Anzahl der Plätze war limitiert.', exEn: 'The number of seats was limited.', exHi: 'Seaton ki sankhya seemit thi.', ex2: 'Sie haben ein limitiertes Angebot genutzt.', ex2En: 'They\'ve used a limited offer.', ex2Hi: 'Unhone ek seemit offer ka upyog kiya hai.' },
    { de: 'Magen', art: 'der', gender: 'm', plural: 'Mägen', pos: 'noun', level: 'B2', register: 'both', en: 'stomach', hi: 'पेट', ex: 'Ihr Magen tat weh.', exEn: 'Her stomach hurt.', exHi: 'Uska pet dard kar raha tha.', ex2: 'Er hat sich den Magen verdorben.', ex2En: 'He\'s upset his stomach.', ex2Hi: 'Uska pet kharaab ho gaya hai.' },
    { de: 'melancholisch', pos: 'adjective', level: 'B2', register: 'written', en: 'melancholic', hi: 'उदास', ex: 'Die Musik klang melancholisch.', exEn: 'The music sounded melancholic.', exHi: 'Sangeet udaas lag raha tha.', ex2: 'Sie haben sich melancholisch gefühlt.', ex2En: 'They\'ve felt melancholic.', ex2Hi: 'Unhein udaasi mahsoos hui hai.' },
    { de: 'neulich', pos: 'adverb', level: 'B2', register: 'both', en: 'recently, the other day', hi: 'हाल ही में', ex: 'Neulich haben wir uns getroffen.', exEn: 'We met the other day.', exHi: 'Haal hi mein hum mile the.', ex2: 'Sie hat neulich angerufen.', ex2En: 'She\'s called recently.', ex2Hi: 'Usne haal hi mein phone kiya hai.' },
    { de: 'Oldtimer', art: 'der', gender: 'm', plural: 'Oldtimer', pos: 'noun', level: 'B2', register: 'both', en: 'vintage car, classic car', hi: 'पुरानी कार', ex: 'Er restaurierte einen alten Oldtimer.', exEn: 'He restored an old vintage car.', exHi: 'Usne ek purani classic car ki marammat ki.', ex2: 'Sie haben einen Oldtimer gekauft.', ex2En: 'They\'ve bought a vintage car.', ex2Hi: 'Unhone ek classic car khareedi hai.' },
    { de: 'parodieren', pos: 'verb', level: 'B2', register: 'written', en: 'to parody', hi: 'नकल उतारना', ex: 'Der Komiker parodierte den Politiker.', exEn: 'The comedian parodied the politician.', exHi: 'Hasya kalaakaar ne neta ki nakal utaari.', ex2: 'Sie haben den Film parodiert.', ex2En: 'They\'ve parodied the film.', ex2Hi: 'Unhone film ki nakal utaari hai.', conj: { praesens: 'parodiert', praeteritum: 'parodierte', perfekt: 'hat parodiert' } },
    { de: 'Pfeil', art: 'der', gender: 'm', plural: 'Pfeile', pos: 'noun', level: 'B2', register: 'both', en: 'arrow', hi: 'तीर', ex: 'Der Pfeil zeigte nach Norden.', exEn: 'The arrow pointed north.', exHi: 'Teer uttar ki taraf dikha raha tha.', ex2: 'Sie haben einen Pfeil gezeichnet.', ex2En: 'They\'ve drawn an arrow.', ex2Hi: 'Unhone ek teer banaaya hai.' },
    { de: 'Pulsschlag', art: 'der', gender: 'm', plural: 'Pulsschläge', pos: 'noun', level: 'B2', register: 'both', en: 'heartbeat, pulse', hi: 'नब्ज़', ex: 'Ihr Pulsschlag beschleunigte sich.', exEn: 'Her pulse quickened.', exHi: 'Uski nabz tez ho gayi.', ex2: 'Sie haben den Pulsschlag gemessen.', ex2En: 'They\'ve measured the pulse.', ex2Hi: 'Unhone nabz maapi hai.' },
    { de: 'reaktivieren', pos: 'verb', level: 'B2', register: 'written', en: 'to reactivate', hi: 'फिर से सक्रिय करना', ex: 'Sie reaktivierten das alte Konto.', exEn: 'They reactivated the old account.', exHi: 'Unhone purana khaata phir se sakriya kiya.', ex2: 'Er hat sein Abonnement reaktiviert.', ex2En: 'He\'s reactivated his subscription.', ex2Hi: 'Usne apni subscription phir se sakriya ki hai.', conj: { praesens: 'reaktiviert', praeteritum: 'reaktivierte', perfekt: 'hat reaktiviert' } },
    { de: 'Refrain', art: 'der', gender: 'm', plural: 'Refrains', pos: 'noun', level: 'B2', register: 'both', en: 'refrain, chorus', hi: 'टेक', ex: 'Der Refrain war eingängig.', exEn: 'The chorus was catchy.', exHi: 'Tek yaad rehne wala tha.', ex2: 'Sie haben den Refrain mitgesungen.', ex2En: 'They\'ve sung along to the chorus.', ex2Hi: 'Unhone tek ke saath gaaya hai.' },
    { de: 'reproduzieren', pos: 'verb', level: 'B2', register: 'written', en: 'to reproduce', hi: 'पुनरुत्पादन करना', ex: 'Der Drucker reproduzierte das Bild genau.', exEn: 'The printer reproduced the image exactly.', exHi: 'Printer ne tasveer bilkul theek se punarutpaadit ki.', ex2: 'Sie haben die Ergebnisse reproduziert.', ex2En: 'They\'ve reproduced the results.', ex2Hi: 'Unhone parinaam punarutpaadit kiye hain.', conj: { praesens: 'reproduziert', praeteritum: 'reproduzierte', perfekt: 'hat reproduziert' } },
    { de: 'Reue', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'remorse, regret', hi: 'पछतावा', ex: 'Er zeigte echte Reue.', exEn: 'He showed genuine remorse.', exHi: 'Usne asli pachtaava dikhaaya.', ex2: 'Sie haben ihre Reue ausgedrückt.', ex2En: 'They\'ve expressed their remorse.', ex2Hi: 'Unhone apna pachtaava vyakt kiya hai.' },
    { de: 'Routine', art: 'die', gender: 'f', plural: 'Routinen', pos: 'noun', level: 'B2', register: 'both', en: 'routine', hi: 'दिनचर्या', ex: 'Während du arbeitest, pflege ich meine Routine.', exEn: 'While you work, I tend to my routine.', exHi: 'Jabki tum kaam karte ho, main apni dincharya sambhaalti hoon.', ex2: 'Sie haben eine neue Routine entwickelt.', ex2En: 'They\'ve developed a new routine.', ex2Hi: 'Unhone ek nayi dincharya vikasit ki hai.' },
    { de: 'Schale', art: 'die', gender: 'f', plural: 'Schalen', pos: 'noun', level: 'B2', register: 'both', en: 'bowl, shell, peel', hi: 'कटोरा, छिलका', ex: 'Sie legte das Obst in eine Schale.', exEn: 'She put the fruit in a bowl.', exHi: 'Usne phal katore mein rakhe.', ex2: 'Er hat die Schale entfernt.', ex2En: 'He\'s removed the peel.', ex2Hi: 'Usne chhilka hataaya hai.' },
    { de: 'Schlaganfall', art: 'der', gender: 'm', plural: 'Schlaganfälle', pos: 'noun', level: 'B2', register: 'written', en: 'stroke (medical)', hi: 'दौरा (चिकित्सा)', ex: 'Er erlitt einen Schlaganfall.', exEn: 'He suffered a stroke.', exHi: 'Use daura pada.', ex2: 'Sie haben nach dem Schlaganfall Therapie gemacht.', ex2En: 'They\'ve done therapy after the stroke.', ex2Hi: 'Daure ke baad unhone therapy karvaayi hai.' },
    { de: 'schmerzlindernd', pos: 'adjective', level: 'B2', register: 'written', en: 'pain-relieving', hi: 'दर्द निवारक', ex: 'Das Medikament war schmerzlindernd.', exEn: 'The medication was pain-relieving.', exHi: 'Davaai dard nivaarak thi.', ex2: 'Sie haben schmerzlindernde Mittel genommen.', ex2En: 'They\'ve taken pain-relieving remedies.', ex2Hi: 'Unhone dard nivaarak davaayein li hain.' },
    { de: 'Schmetterling', art: 'der', gender: 'm', plural: 'Schmetterlinge', pos: 'noun', level: 'B2', register: 'both', en: 'butterfly', hi: 'तितली', ex: 'Ein bunter Schmetterling flog vorbei.', exEn: 'A colourful butterfly flew past.', exHi: 'Ek rangbirangi titli udkar gayi.', ex2: 'Sie haben Schmetterlinge fotografiert.', ex2En: 'They\'ve photographed butterflies.', ex2Hi: 'Unhone titliyon ki tasveerein li hain.' },
    { de: 'Schnäppchen', art: 'das', gender: 'n', plural: 'Schnäppchen', pos: 'noun', level: 'B2', register: 'spoken', en: 'bargain', hi: 'सस्ता सौदा', ex: 'Das war ein echtes Schnäppchen.', exEn: 'That was a real bargain.', exHi: 'Yeh ek asli sasta sauda tha.', ex2: 'Sie haben ein Schnäppchen gefunden.', ex2En: 'They\'ve found a bargain.', ex2Hi: 'Unhein ek sasta sauda mila hai.' },
    { de: 'schwarz', pos: 'adjective', level: 'B2', register: 'both', en: 'black', hi: 'काला', ex: 'Sie trug ein schwarzes Kleid.', exEn: 'She wore a black dress.', exHi: 'Usne kaala kapda pehna.', ex2: 'Er hat schwarzen Kaffee getrunken.', ex2En: 'He\'s drunk black coffee.', ex2Hi: 'Usne kaali coffee pi hai.' },
    { de: 'selbstsicher', pos: 'adjective', level: 'B2', register: 'both', en: 'self-assured', hi: 'आत्मविश्वासी', ex: 'Sie wirkte selbstsicher.', exEn: 'She seemed self-assured.', exHi: 'Woh aatmvishwaasi lag rahi thi.', ex2: 'Er hat selbstsicher geantwortet.', ex2En: 'He\'s answered self-assuredly.', ex2Hi: 'Usne aatmvishwaas se jawaab diya hai.' },
    { de: 'Shopping', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'spoken', en: 'shopping', hi: 'खरीदारी', ex: 'Sie gingen zum Shopping.', exEn: 'They went shopping.', exHi: 'Woh khareedaari karne gaye.', ex2: 'Wir haben Shopping gemacht.', ex2En: 'We\'ve gone shopping.', ex2Hi: 'Humne khareedaari ki hai.' },
    { de: 'Stoffwechsel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'metabolism', hi: 'चयापचय', ex: 'Ihr Stoffwechsel war sehr schnell.', exEn: 'Her metabolism was very fast.', exHi: 'Uska chayaapchay bahut tez tha.', ex2: 'Sie haben ihren Stoffwechsel verbessert.', ex2En: 'They\'ve improved their metabolism.', ex2Hi: 'Unhone apna chayaapchay behtar kiya hai.' },
    { de: 'strukturiert', pos: 'adjective', level: 'B2', register: 'written', en: 'structured', hi: 'संरचित', ex: 'Der Bericht war gut strukturiert.', exEn: 'The report was well structured.', exHi: 'Report achhi tarah sanrachit thi.', ex2: 'Sie haben strukturiert gearbeitet.', ex2En: 'They\'ve worked in a structured way.', ex2Hi: 'Unhone sanrachit tareeke se kaam kiya hai.' },
    { de: 'Takt', art: 'der', gender: 'm', plural: 'Takte', pos: 'noun', level: 'B2', register: 'both', en: 'beat, rhythm, tact', hi: 'ताल, विवेक', ex: 'Sie tanzten im Takt der Musik.', exEn: 'They danced to the beat of the music.', exHi: 'Woh sangeet ki taal par naache.', ex2: 'Er hat viel Takt bewiesen.', ex2En: 'He\'s shown a lot of tact.', ex2Hi: 'Usne bahut vivek dikhaaya hai.' },
    { de: 'Ton', art: 'der', gender: 'm', plural: 'Töne', pos: 'noun', level: 'B2', register: 'both', en: 'sound, tone, clay', hi: 'ध्वनि, स्वर, मिट्टी', ex: 'Der Ton war zu laut.', exEn: 'The sound was too loud.', exHi: 'Aawaaz bahut tez thi.', ex2: 'Sie haben aus Ton geformt.', ex2En: 'They\'ve shaped from clay.', ex2Hi: 'Unhone mitti se aakaar diya hai.' },
    { de: 'Träne', art: 'die', gender: 'f', plural: 'Tränen', pos: 'noun', level: 'B2', register: 'both', en: 'tear', hi: 'आंसू', ex: 'Eine Träne lief über ihre Wange.', exEn: 'A tear ran down her cheek.', exHi: 'Ek aansu uske gaal par baha.', ex2: 'Sie haben Tränen vergossen.', ex2En: 'They\'ve shed tears.', ex2Hi: 'Unhone aansu bahaaye hain.' },
    { de: 'Trauer', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'mourning, grief', hi: 'शोक', ex: 'Die Trauer war spürbar.', exEn: 'The grief was palpable.', exHi: 'Shok mahsoos hota tha.', ex2: 'Sie haben ihre Trauer verarbeitet.', ex2En: 'They\'ve processed their grief.', ex2Hi: 'Unhone apne shok ko sambhaala hai.' },
    { de: 'Treue', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'loyalty, faithfulness', hi: 'निष्ठा', ex: 'Ihre Treue war bewundernswert.', exEn: 'Her loyalty was admirable.', exHi: 'Uski nishtha prashansaneey thi.', ex2: 'Sie haben Treue geschworen.', ex2En: 'They\'ve sworn loyalty.', ex2Hi: 'Unhone nishtha ki kasam khaayi hai.' },
    { de: 'überschatten', pos: 'verb', level: 'B2', register: 'written', en: 'to overshadow', hi: 'फीका करना', ex: 'Der Skandal überschattete den Erfolg.', exEn: 'The scandal overshadowed the success.', exHi: 'Ghotaale ne safalta ko feeka kar diya.', ex2: 'Sie haben das Ereignis überschattet.', ex2En: 'They\'ve overshadowed the event.', ex2Hi: 'Unhone ghatna ko feeka kar diya hai.', conj: { praesens: 'überschattet', praeteritum: 'überschattete', perfekt: 'hat überschattet' } },
    { de: 'unsterblich', pos: 'adjective', level: 'B2', register: 'written', en: 'immortal', hi: 'अमर', ex: 'Der Mythos machte ihn unsterblich.', exEn: 'The myth made him immortal.', exHi: 'Kathaa ne use amar bana diya.', ex2: 'Sie haben von unsterblicher Liebe gesprochen.', ex2En: 'They\'ve spoken of immortal love.', ex2Hi: 'Unhone amar prem ki baat ki hai.' },
    { de: 'Verstand', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'reason, mind', hi: 'बुद्धि', ex: 'Ihr Verstand arbeitete schnell.', exEn: 'Her mind worked quickly.', exHi: 'Uska dimaag tezi se kaam karta tha.', ex2: 'Sie haben ihren Verstand benutzt.', ex2En: 'They\'ve used their reason.', ex2Hi: 'Unhone apni buddhi ka upyog kiya hai.' },
    { de: 'verstärken', pos: 'verb', level: 'B2', register: 'both', en: 'to strengthen, reinforce', hi: 'मज़बूत करना', ex: 'Sie verstärkten die Zusammenarbeit.', exEn: 'They strengthened the collaboration.', exHi: 'Unhone saath kaam karne ko mazboot kiya.', ex2: 'Er hat die Wand verstärkt.', ex2En: 'He\'s reinforced the wall.', ex2Hi: 'Usne deewaar mazboot ki hai.', conj: { praesens: 'verstärkt', praeteritum: 'verstärkte', perfekt: 'hat verstärkt' } },
    { de: 'verwandeln', pos: 'verb', level: 'B2', register: 'both', en: 'to transform, turn into', hi: 'बदल देना', ex: 'Die Erfahrung verwandelte ihr Leben.', exEn: 'The experience transformed her life.', exHi: 'Anubhav ne uski zindagi badal di.', ex2: 'Sie haben den Raum verwandelt.', ex2En: 'They\'ve transformed the room.', ex2Hi: 'Unhone kamre ko badal diya hai.', conj: { praesens: 'verwandelt', praeteritum: 'verwandelte', perfekt: 'hat verwandelt' } },
    { de: 'vielfach', pos: 'adjective', level: 'B2', register: 'written', en: 'manifold, repeated', hi: 'बहुगुणित', ex: 'Das Problem trat vielfach auf.', exEn: 'The problem occurred repeatedly.', exHi: 'Samasya baar-baar hui.', ex2: 'Sie haben vielfache Vorteile genannt.', ex2En: 'They\'ve named manifold advantages.', ex2Hi: 'Unhone kai faayde bataaye hain.' },
    { de: 'vorausdenken', pos: 'verb', level: 'B2', register: 'written', en: 'to think ahead', hi: 'पहले से सोचना', ex: 'Sie dachte immer voraus.', exEn: 'She always thought ahead.', exHi: 'Woh hamesha pehle se soch leti thi.', ex2: 'Er hat vorausgedacht.', ex2En: 'He\'s thought ahead.', ex2Hi: 'Usne pehle se socha hai.', conj: { praesens: 'denkt voraus', praeteritum: 'dachte voraus', perfekt: 'hat vorausgedacht' } },
    { de: 'wohltuend', pos: 'adjective', level: 'B2', register: 'both', en: 'soothing, pleasant', hi: 'सुखदायक', ex: 'Die Musik war wohltuend.', exEn: 'The music was soothing.', exHi: 'Sangeet sukhdaayak tha.', ex2: 'Sie haben eine wohltuende Pause gemacht.', ex2En: 'They\'ve taken a pleasant break.', ex2Hi: 'Unhone ek sukhdaayak break liya hai.' },
    { de: 'zunehmend', pos: 'adjective', level: 'B2', register: 'written', en: 'increasing(ly)', hi: 'बढ़ता हुआ', ex: 'Das Interesse wuchs zunehmend.', exEn: 'The interest grew increasingly.', exHi: 'Ruchi lagaataar badhi.', ex2: 'Sie haben zunehmend Probleme bemerkt.', ex2En: 'They\'ve increasingly noticed problems.', ex2Hi: 'Unhone badhti samasyaayein dekhi hain.' },
    { de: 'zusammenbrechen', pos: 'verb', level: 'B2', register: 'both', en: 'to collapse, break down', hi: 'ढह जाना', ex: 'Das System brach zusammen.', exEn: 'The system collapsed.', exHi: 'Pranaali dhah gayi.', ex2: 'Sie ist emotional zusammengebrochen.', ex2En: 'She\'s broken down emotionally.', ex2Hi: 'Woh bhaavnaatmak roop se toot gayi hai.', conj: { praesens: 'bricht zusammen', praeteritum: 'brach zusammen', perfekt: 'ist zusammengebrochen' } },
    { de: 'Alltagssprache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'everyday language', hi: 'रोज़मर्रा की भाषा', ex: 'Die Alltagssprache unterschied sich vom Hochdeutschen.', exEn: 'Everyday language differed from standard German.', exHi: 'Roz-marra ki bhaasha standard German se alag thi.', ex2: 'Sie haben die Alltagssprache gelernt.', ex2En: 'They\'ve learned everyday language.', ex2Hi: 'Unhone roz-marra ki bhaasha seekhi hai.' },
    { de: 'Arbeitschance', art: 'die', gender: 'f', plural: 'Arbeitschancen', pos: 'noun', level: 'B2', register: 'written', en: 'job opportunity', hi: 'नौकरी का अवसर', ex: 'Die Arbeitschance war einzigartig.', exEn: 'The job opportunity was unique.', exHi: 'Naukri ka avasar anokha tha.', ex2: 'Sie haben die Arbeitschance genutzt.', ex2En: 'They\'ve used the job opportunity.', ex2Hi: 'Unhone naukri ke avasar ka upyog kiya hai.' },
    { de: 'Außenseiter/in', art: 'der/die', gender: 'm/f', plural: 'Außenseiter/innen', pos: 'noun', level: 'B2', register: 'both', en: 'outsider', hi: 'बाहरी व्यक्ति', ex: 'Er fühlte sich als Außenseiter.', exEn: 'He felt like an outsider.', exHi: 'Woh khud ko baahri vyakti mahsoos kar raha tha.', ex2: 'Sie haben den Außenseiter unterstützt.', ex2En: 'They\'ve supported the outsider.', ex2Hi: 'Unhone baahri vyakti ka samarthan kiya hai.' },
    { de: 'bang', pos: 'adjective', level: 'B2', register: 'written', en: 'anxious, fearful', hi: 'भयभीत', ex: 'Ihr war bang zumute.', exEn: 'She felt anxious.', exHi: 'Woh bhaybheet mahsoos kar rahi thi.', ex2: 'Sie haben bange Momente erlebt.', ex2En: 'They\'ve experienced anxious moments.', ex2Hi: 'Unhone bhaybheet pal anubhav kiye hain.' },
    { de: 'bankrott', pos: 'adjective', level: 'B2', register: 'written', en: 'bankrupt', hi: 'दिवालिया', ex: 'Die Firma ging bankrott.', exEn: 'The company went bankrupt.', exHi: 'Company diwaaliya ho gayi.', ex2: 'Sie haben den Bankrott vermieden.', ex2En: 'They\'ve avoided bankruptcy.', ex2Hi: 'Unhone diwaaliyapan se bacha hai.' },
    { de: 'bedeutend', pos: 'adjective', level: 'B2', register: 'written', en: 'significant, important', hi: 'महत्वपूर्ण', ex: 'Das war eine bedeutende Entdeckung.', exEn: 'That was a significant discovery.', exHi: 'Yeh ek mahatvapurn khoj thi.', ex2: 'Sie haben bedeutende Fortschritte gemacht.', ex2En: 'They\'ve made significant progress.', ex2Hi: 'Unhone mahatvapurn pragati ki hai.' },
    { de: 'Bewunderer/Bewunderin', art: 'der/die', gender: 'm/f', plural: 'Bewunderer/Bewunderinnen', pos: 'noun', level: 'B2', register: 'written', en: 'admirer', hi: 'प्रशंसक', ex: 'Sie hatte viele Bewunderer.', exEn: 'She had many admirers.', exHi: 'Uske kai prashansak the.', ex2: 'Er ist ein großer Bewunderer der Kunst.', ex2En: 'He\'s a great admirer of art.', ex2Hi: 'Woh kala ka bada prashansak hai.' },
    { de: 'Bezug', art: 'der', gender: 'm', plural: 'Bezüge', pos: 'noun', level: 'B2', register: 'written', en: 'reference, relation', hi: 'संदर्भ', ex: 'Der Bezug zum Thema war klar.', exEn: 'The reference to the topic was clear.', exHi: 'Vishay se sambandh spasht tha.', ex2: 'Sie haben den Bezug hergestellt.', ex2En: 'They\'ve established the connection.', ex2Hi: 'Unhone sambandh sthaapit kiya hai.' },
    { de: 'Business-Outfit', art: 'das', gender: 'n', plural: 'Business-Outfits', pos: 'noun', level: 'B2', register: 'both', en: 'business outfit', hi: 'व्यावसायिक पोशाक', ex: 'Sie trug ein professionelles Business-Outfit.', exEn: 'She wore a professional business outfit.', exHi: 'Usne ek professional vyaavasaayik poshaak pehni.', ex2: 'Er hat ein neues Business-Outfit gekauft.', ex2En: 'He\'s bought a new business outfit.', ex2Hi: 'Usne ek nayi vyaavasaayik poshaak khareedi hai.' },
    { de: 'daraufhin', pos: 'adverb', level: 'B2', register: 'written', en: 'thereupon, as a result', hi: 'तत्पश्चात', ex: 'Sie protestierten, daraufhin änderte sich die Regel.', exEn: 'They protested; as a result the rule changed.', exHi: 'Unhone virodh kiya, tatpashchaat niyam badla.', ex2: 'Er hat daraufhin reagiert.', ex2En: 'He\'s reacted as a result.', ex2Hi: 'Usne tatpashchaat pratikriya di hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeuten diese Konnektoren?',
      body: [ 'während = while, during the time that (two simultaneous actions). seitdem = since, from that time until now (started in the past, continues now).' ],
      table: {
        head: ['Connector', 'Meaning'],
        rows: [
          ['während', 'Two actions at the SAME TIME'],
          ['seitdem', 'Started in the past, STILL true now']
        ]
      },
      hinglish: '<b>w\u00e4hrend</b> ka matlab hai "jab tak" ya "usi waqt" \u2014 do kaam ek hi samay par ho rahe hote hain. <b>seitdem</b> ka matlab hai "tab se" \u2014 kuch past mein shuru hua aur ab bhi chal raha hai.'
    },
    {
      title: 'während',
      body: [ 'Structure: Main Clause + während + Nebensatz, verb at the end.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna lernt Deutsch, während Rohan arbeitet.</span>'],
          ['<span class="de">Während Anna kocht, liest Rohan ein Buch.</span>'],
          ['<span class="de">Ich höre Musik, während ich lerne.</span>']
        ]
      },
      hinglish: 'Structure simple hai: pehle main clause, phir comma, phir <b>w\u00e4hrend</b>, aur uske clause ka verb sentence ke end mein jaata hai. Clause ko aage bhi rakh sakte ho \u2014 phir main clause apne verb se shuru hoga.'
    },
    {
      title: 'seitdem',
      body: [ 'Something began in the past and is still true now.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Seitdem Anna nach Deutschland gezogen ist, spricht sie jeden Tag Deutsch.</span>'],
          ['<span class="de">Seitdem ich diesen Kurs besuche, fühle ich mich sicherer.</span>'],
          ['<span class="de">Rohan arbeitet mehr, seitdem er befördert wurde.</span>']
        ]
      },
      hinglish: '<b>seitdem</b> tab use hota hai jab koi baat past mein shuru hui thi aur aaj bhi chal rahi hai \u2014 isliye main clause aksar Pr\u00e4sens mein hota hai.'
    },
    {
      title: 'während = auch "whereas" (Kontrast)',
      body: [
        'At B2 you will meet a second meaning of <b>w\u00e4hrend</b>: it also marks a CONTRAST between two things, the way English uses \u201cwhereas\u201d. The grammar is identical \u2014 verb at the end of the clause \u2014 so only the context tells you which reading is meant.'
      ],
      table: {
        head: ['Reading', 'Example'],
        rows: [
          ['Time (at the same moment)', '<span class="de">Ich h\u00f6re Musik, w\u00e4hrend ich lerne.</span> \u2014 both happening together'],
          ['Contrast (whereas)', '<span class="de">Anna lernt gern Grammatik, w\u00e4hrend Rohan lieber spricht.</span> \u2014 comparing two people'],
          ['Both readings possible', '<span class="de">Anna lernt Deutsch, w\u00e4hrend Rohan arbeitet.</span>']
        ]
      },
      note: 'In written and academic German the contrast reading is very common \u2014 it is a more elegant alternative to <i>aber</i> when you compare two facts.',
      hinglish: 'B2 par <b>w\u00e4hrend</b> ka ek doosra matlab bhi milta hai \u2014 yeh contrast bhi batata hai, jaise English mein "whereas". Grammar bilkul same rehta hai, verb clause ke end mein hi jaata hai, isliye farak sirf context se pata chalta hai. Jaise <span class="de">Anna lernt gern Grammatik, w\u00e4hrend Rohan lieber spricht</span> \u2014 yahan time ki baat nahi ho rahi, do logon ki comparison ho rahi hai. Written aur academic German mein yeh use bahut common hai, kyunki <i>aber</i> se zyada elegant lagta hai.'
    },
    {
      title: 'Zeitliche Beziehung (Time Relationship)',
      body: [ 'während shows two parallel timelines; seitdem shows a single timeline continuing to now.' ],
      table: {
        head: ['während', 'seitdem'],
        rows: [
          ['Action A ═══ + Action B ═══ (same time)', 'Past event → Beginning → NOW (still continues)']
        ]
      },
      hinglish: 'Timeline ki tarah socho \u2014 <b>w\u00e4hrend</b> mein do lines saath-saath chalti hain, aur <b>seitdem</b> mein ek hi line past se shuru hokar aaj tak aati hai.'
    },
    {
      title: 'Vergleich mit anderen Temporalkonnektoren',
      body: [ 'All four connectors describe time, but each has a different function.' ],
      table: {
        head: ['Connector', 'Usage'],
        rows: [
          ['als', 'One completed event in the past'],
          ['wenn', 'Repeated events / present / future'],
          ['während', 'Same time (simultaneous)'],
          ['seitdem', 'Since then until now']
        ]
      },
      hinglish: 'Chaaron time ki baat karte hain, par kaam alag-alag hai. Ise ek jagah dekh lo to chunna aasaan ho jaata hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from mixing up <b>seit</b> and <b>seitdem</b>, adding a connector that is not needed, or leaving the sentence without a main clause.' ],
      mistakes: [
        { wrong: 'Während ich war krank, arbeitete ich.', right: 'Während ich krank war, arbeitete ich.', why: 'The verb must go to the END of the "während" clause, not stay in second position.' },
        { wrong: 'Seitdem ich komme nach Deutschland...', right: 'Seitdem ich nach Deutschland gekommen bin...', why: '"seitdem" typically pairs with Perfekt (or a present tense describing an ongoing state) to show the action started in the past and continues — not plain Präsens.' },
        { wrong: 'Seitdem zwei Jahren lerne ich Deutsch.', right: 'Seit zwei Jahren lerne ich Deutsch.', why: 'With a bare time phrase you need the preposition <b>seit</b>. <b>seitdem</b> is a conjunction \u2014 it introduces a whole clause with its own subject and verb.' },
        { wrong: 'Während Rohan arbeitet, aber Anna lernt.', right: 'Während Rohan arbeitet, lernt Anna.', why: 'After the w\u00e4hrend-clause the main clause begins with its own verb, and no <b>aber</b> is needed \u2014 w\u00e4hrend already carries the contrast.' },
        { wrong: 'Während ich lerne.', right: 'Während ich lerne, höre ich Musik.', why: '"w\u00e4hrend" only opens a subordinate clause, so on its own the sentence is unfinished \u2014 it still needs a main clause.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki <b>seit</b> aur <b>seitdem</b> mila diye jaate hain, ya ek extra connector laga diya jaata hai, ya sentence ko main clause ke bina chhod diya jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Correctly distinguishing simultaneous actions from past-to-present continuation improves narration and text cohesion significantly.' ],
      note: 'Memory trick: während = two actions happen together. seitdem = started in the past, still true now.',
      hinglish: 'In dono ko theek se alag kar paana narration mein kaafi farak laata hai \u2014 tumhari kahani ka time saaf samajh mein aata hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Reportage: Musiktherapie nach dem Schlaganfall',
    titleEn: 'Report: music therapy after a stroke',
    tokens: [
      { w: 'Während', role: 'r-connector', en: 'while', hi: 'जबकि', type: 'Konjunktion · während (temporal)', why: 'während (temporal) = while, describing two actions happening at the same time (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'Herr', role: 'plain', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Klein', role: 'plain', en: 'Klein', hi: 'क्लाइन', type: 'Name' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'seinem', role: 'plain', en: 'his', hi: 'अपने', type: 'Possessivartikel · Dat.' },
      { w: 'Schlaganfall', role: 'plain', en: 'stroke (Satzende)', hi: 'लकवाग्रस्त हमला (Satzende)', type: 'Noun · masc.', why: 'der Schlaganfall (this chapter).' },
      { w: 'erholt', role: 'plain', en: 'recovers (Satzende)', hi: 'ठीक होता है (Satzende)', type: 'Verb · sich erholen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'besucht', role: 'plain', en: 'attends', hi: 'भाग लेता है', type: 'Verb · besuchen' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'zweimal', role: 'plain', en: 'twice', hi: 'दो बार', type: 'Adverb' },
      { w: 'pro', role: 'plain', en: 'per', hi: 'प्रति', type: 'Preposition' },
      { w: 'Woche', role: 'plain', en: 'week (Satzende)', hi: 'सप्ताह (Satzende)', type: 'Noun · fem.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Musiktherapeuten', role: 'plain', en: 'music therapist (Satzende)', hi: 'संगीत चिकित्सक (Satzende)', type: 'Noun · masc.', why: 'der/die Musiktherapeut/in (this chapter).' },
      { w: '.', plain: true },
      { w: 'Seitdem', role: 'r-connector', en: 'since (temporal point)', hi: 'तब से', type: 'Konjunktion · seitdem (temporal)', why: 'seitdem marks the starting point of an ongoing situation — the therapy has continued since that point (this chapter).' },
      { w: 'er', role: 'plain', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Therapie', role: 'plain', en: 'therapy (Satzende)', hi: 'चिकित्सा (Satzende)', type: 'Noun · fem.' },
      { w: 'begonnen', role: 'plain', en: 'begun (Satzende)', hi: 'शुरू की (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'hat', role: 'plain', en: 'has (linke Klammer)', hi: 'है (बायाँ कोष्ठक)', type: 'Verb · haben (Linke Klammer)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'sein', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Stoffwechsel', role: 'plain', en: 'metabolism (Satzende)', hi: 'चयापचय (Satzende)', type: 'Noun · masc.', why: 'der Stoffwechsel (this chapter).' },
      { w: 'spürbar', role: 'plain', en: 'noticeably', hi: 'ध्यान देने योग्य रूप से', type: 'Adverb' },
      { w: 'stabilisiert', role: 'plain', en: 'stabilised (rechte Klammer)', hi: 'स्थिर हो गया (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Bevor', role: 'r-connector', en: 'before', hi: 'पहले', type: 'Konjunktion · bevor (temporal)', why: 'bevor introduces an action that happens AFTER the main clause chronologically, though it comes first in the sentence (this chapter).' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Musiktherapie', role: 'plain', en: 'music therapy (Satzende)', hi: 'संगीत चिकित्सा (Satzende)', type: 'Noun · fem.' },
      { w: 'begann', role: 'plain', en: 'began (Satzende)', hi: 'शुरू की (Satzende)', type: 'Verb · beginnen (Präteritum, Nebensatz-Satzende)' },
      { w: ',', plain: true },
      { w: 'konnte', role: 'plain', en: 'could (linke Klammer)', hi: 'सका (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'sprechen', role: 'plain', en: 'speak (rechte Klammer, Satzende)', hi: 'बोल पाना (दायाँ कोष्ठक, Satzende)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-connector', en: 'after', hi: 'बाद', type: 'Konjunktion · nachdem (temporal, recycled)', why: 'nachdem + Plusquamperfekt: an action completed before another past action (recycled from B1).' },
      { w: 'er', role: 'plain', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'drei', role: 'plain', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Monate', role: 'plain', en: 'months (Satzende)', hi: 'महीने (Satzende)', type: 'Noun · plural' },
      { w: 'geübt', role: 'plain', en: 'practised (Satzende)', hi: 'अभ्यास किया था (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Nebensatz-Satzende)' },
      { w: ',', plain: true },
      { w: 'sang', role: 'plain', en: 'sang (linke Klammer)', hi: 'गाया (बायाँ कोष्ठक)', type: 'Verb · singen (Präteritum, Linke Klammer)' },
      { w: 'er', role: 'plain', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'seinen', role: 'plain', en: 'his', hi: 'अपने', type: 'Possessivartikel · Akk.' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहला', type: 'Adjective' },
      { w: 'ganzen', role: 'plain', en: 'whole', hi: 'पूरा', type: 'Adjective' },
      { w: 'Satz', role: 'plain', en: 'sentence (Satzende)', hi: 'वाक्य (Satzende)', type: 'Noun · masc.' },
      { w: 'wieder', role: 'plain', en: 'again (Satzende)', hi: 'फिर से (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Während', role: 'r-connector', en: 'while', hi: 'जबकि', type: 'Konjunktion · während (Temporal)', why: 'während here compares two time periods, not just a contrast (this chapter).' },
      { w: 'sein', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Fortschritt', role: 'plain', en: 'progress', hi: 'प्रगति', type: 'Noun · masc.' },
      { w: 'anfangs', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb' },
      { w: 'langsam', role: 'plain', en: 'slow', hi: 'धीमी', type: 'Adjective' },
      { w: 'wirkte', role: 'plain', en: 'seemed (Satzende)', hi: 'लगती थी (Satzende)', type: 'Verb · wirken (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'überrascht', role: 'plain', en: 'surprises', hi: 'हैरान करता है', type: 'Verb · überraschen' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Ärzte', role: 'plain', en: 'doctors', hi: 'डॉक्टरों', type: 'Noun · plural' },
      { w: 'inzwischen', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'fast', role: 'plain', en: 'almost', hi: 'लगभग', type: 'Adverb' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Woche', role: 'plain', en: 'week (Satzende)', hi: 'हफ़्ता (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Seine', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Frau', role: 'plain', en: 'wife', hi: 'पत्नी', type: 'Noun · fem.' },
      { w: 'sagt', role: 'plain', en: 'says', hi: 'कहती है', type: 'Verb · sagen' },
      { w: ',', plain: true },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'habe', role: 'r-konji', en: 'has (Konjunktiv I)', hi: '(Konjunktiv I)', type: 'Verb · haben (Konjunktiv I)' },
      { w: 'ihren', role: 'plain', en: 'her', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Mann', role: 'plain', en: 'husband', hi: 'पति', type: 'Noun · masc.' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'lange', role: 'plain', en: 'long', hi: 'लंबे समय से', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'mehr', role: 'plain', en: 'anymore (Satzende)', hi: 'अब (Satzende)', type: 'Adverb' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इतना', type: 'Adverb' },
      { w: 'zuversichtlich', role: 'plain', en: 'confident (Satzende)', hi: 'आशान्वित (Satzende)', type: 'Adjective' },
      { w: 'gesehen', role: 'plain', en: 'seen (Satzende)', hi: 'देखा (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'While Mr Klein recovers from his stroke, he attends a music therapist twice a week. Since he began the therapy, his metabolism has noticeably stabilised. Before he began the music therapy, he could hardly speak. After he had practised for three months, he sang his first whole sentence again. While his progress initially seemed slow, he now surprises his doctors almost every week. His wife says she hasn\u2019t seen her husband this confident in a long time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_034_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Marlen, du wirkst seit Wochen viel energiegeladener!', en: 'Marlen, you\'ve seemed much more energetic for weeks!' },
      { id: 'B2_034_L002', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stimmt, seitdem ich das Rauchen aufgegeben habe, fühle ich mich fitter.', en: 'True, ever since I quit smoking I\'ve felt fitter.' },
      { id: 'B2_034_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Während du früher ständig müde warst, bist du jetzt kaum zu bremsen.', en: 'While you used to be constantly tired, now you\'re hardly to be stopped.' },
      { id: 'B2_034_L004', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und während ich früher jede Pause zum Rauchen genutzt habe, gehe ich jetzt spazieren.', en: 'Exactly, and while I used to use every break to smoke, I now go for walks.' }
    ],
    transcript: 'Marlen, du wirkst seit Wochen viel energiegeladener! Stimmt, seitdem ich das Rauchen aufgegeben habe, fühle ich mich fitter. Während du früher ständig müde warst, bist du jetzt kaum zu bremsen. Genau, und während ich früher jede Pause zum Rauchen genutzt habe, gehe ich jetzt spazieren.',
    translation: 'Marlen, you\'ve seemed much more energetic for weeks! True, ever since I quit smoking I\'ve felt fitter. While you used to be constantly tired, now you\'re hardly to be stopped. Exactly, and while I used to use every break to smoke, I now go for walks.',
    tokens: [
      { w: 'Marlen' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'wirkst' },
      { w: 'seit' },
      { w: 'Wochen' },
      { w: 'viel' },
      { w: 'energiegeladener' },
      { w: '!', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'seitdem' },
      { w: 'ich' },
      { w: 'das' },
      { w: 'Rauchen' },
      { w: 'aufgegeben' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'fühle' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'fitter' },
      { w: '.', plain: true },
      { w: 'Während' },
      { w: 'du' },
      { w: 'früher' },
      { w: 'ständig' },
      { w: 'müde' },
      { w: 'warst' },
      { w: ',', plain: true },
      { w: 'bist' },
      { w: 'du' },
      { w: 'jetzt' },
      { w: 'kaum' },
      { w: 'zu' },
      { w: 'bremsen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'während' },
      { w: 'ich' },
      { w: 'früher' },
      { w: 'jede' },
      { w: 'Pause' },
      { w: 'zum' },
      { w: 'Rauchen' },
      { w: 'genutzt' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'gehe' },
      { w: 'ich' },
      { w: 'jetzt' },
      { w: 'spazieren' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum fühlt sich Marlen fitter?', qEn: 'Why does Marlen feel fitter?', options: ['sie schläft mehr', 'sie hat das Rauchen aufgegeben', 'sie isst weniger', 'sie arbeitet weniger'], optionsEn: ['she sleeps more', 'she has given up smoking', 'she is eating less', 'she is working less'], answer: 1,
        explain: '"Seitdem ich das Rauchen aufgegeben habe, fühle ich mich fitter."' },
      { q: 'Was macht Marlen jetzt in den Pausen?', qEn: 'What does Marlen do now during breaks?', options: ['sie raucht', 'sie geht spazieren', 'sie schläft', 'sie isst'], optionsEn: ['she smokes', 'she goes for a walk', 'she is sleeping', 'she is eating'], answer: 1,
        explain: '"… gehe ich jetzt spazieren."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin wirkt energiegeladener. Sag, warum.", taskEn: "Your friend seems more energetic. Say why.", de: "Seitdem ich das Rauchen aufgegeben habe, fühle ich mich fitter.", en: "Since I gave up smoking, I feel fitter." },
    { task: "Sie erinnert sich an früher. Vergleiche.", taskEn: "She remembers how it used to be. Compare.", de: "Während ich früher ständig müde war, habe ich jetzt Routine.", en: "Whereas I used to be constantly tired, I now have a routine." },
    { task: "Ein Kollege fragt, wie du zwei Dinge gleichzeitig schaffst.", taskEn: "A colleague asks how you manage two things at once.", de: "Während ich koche, höre ich Nachrichten auf Deutsch.", en: "While I cook, I listen to the news in German." },
    { task: "Eine Bekannte fragt, was sich nach dem Umzug geändert hat.", taskEn: "An acquaintance asks what changed after the move.", de: "Seitdem ich hier wohne, spreche ich jeden Tag Deutsch.", en: "Since I've been living here, I speak German every day." },
    { task: "Rollenspiel: Ihr vergleicht euren Tagesablauf.", taskEn: "Role-play: you compare your daily routines.", de: "Während du morgens läufst, schlafe ich noch. — Seitdem ich Schicht arbeite, ist alles anders.", en: "While you run in the morning, I'm still asleep. — Since I started shift work, everything is different." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Experience report (6-8 sentences): Describe your life since moving somewhere new or starting something new, using seitdem naturally.\n\nTASK 2 — Email (6-8 sentences): Describe your daily routine using während to show simultaneous activities.',
    starters: ['Während ich …', 'Seitdem ich …'],
    placeholder: 'Seitdem ich nach Deutschland gezogen bin, spreche ich jeden Tag Deutsch …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which connector describes two actions happening at the same time?',
      options: ['während', 'seitdem', 'nachdem'],
      answer: 0,
      explain: '"während" links two simultaneous actions.'
    },
    gap: {
      sentence: [' ich nach Deutschland gezogen bin, spreche ich jeden Tag Deutsch.'],
      gaps: [ { answer: 'Seitdem', accepts: ['Seitdem'] } ],
      explain: '"seitdem" marks something that began in the past and continues to be true now.'
    },
    match: {
      q: 'Match each connector to its function.',
      pairs: [
        { noun: 'als', art: 'One completed past event' },
        { noun: 'wenn', art: 'Repeated / present / future' },
        { noun: 'während', art: 'Simultaneous actions' },
        { noun: 'seitdem', art: 'Since then until now' }
      ]
    },
    builder: {
      target: 'Build: "I listen to music while I study."',
      bank: ['Ich', 'höre', 'Musik', ',', 'während', 'ich', 'lerne', '.'],
      answer: ['Ich', 'höre', 'Musik', ',', 'während', 'ich', 'lerne', '.'],
      roles: { 'während': 'r-temporal', 'lerne': 'r-temporal' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Während ich war krank, arbeitete ich.',
      right: 'Während ich krank war, arbeitete ich.',
      explain: 'The verb must go to the end of the "während" clause, not stay in second position.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "während" describe?', options: ['Two actions happening at the same time', 'A single completed past event', 'A future plan'], answer: 0,
      explain: '"während" links two simultaneous actions.' },
    { q: 'What does "seitdem" describe?', options: ['Something that began in the past and continues now', 'Two simultaneous actions', 'A repeated present action'], answer: 0,
      explain: '"seitdem" marks a past beginning that is still true in the present.' },
    { q: 'Where does the verb go in a "während" clause?', options: ['At the end', 'In second position', 'At the beginning'], answer: 0,
      explain: '"während" introduces a subordinate clause, so the verb goes to the end.' },
    { q: 'Which connector means "one completed past event"?', options: ['als', 'wenn', 'seitdem'], answer: 0,
      explain: '"als" describes a single, completed event in the past.' },
    { q: 'Is "während" ever used as a preposition?', options: ['Yes — während + Genitiv (during)', 'No, never', 'Only in questions'], answer: 0,
      explain: '"während" can work as a preposition + Genitiv, e.g. "während der Präsentation" (during the presentation).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-temporal', html: 'während links two actions happening at the same time — both action A and action B occur simultaneously.' },
    { c: 'r-temporal', html: 'seitdem links a past beginning to something still true now — a continuing timeline, not a simultaneous moment.' },
    { c: 'r-temporal', html: 'Both connectors send the verb to the end of the clause; während can also work as a preposition + Genitiv.' }
  ],
  revisionTips: [
    'Practise describing your own daily routine using während for what happens at once.',
    'Reflect on a life change and describe it using seitdem — a genuinely useful storytelling structure.',
    'Compare als, wenn, während, and seitdem side by side until the four functions feel automatic.'
  ]
};

window.CHAPTER = CHAPTER;
