/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 31
   "Partizip II mit Präfix"  (participles of prefix verbs)
   Vocabulary source: uploaded chapter-31 word list (11 words).
   Theme = a busy day of getting/selling/telling. Recycles Ch1–30.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-31-partizip-praefix',
  phase: 'A1 · Phase 3',
  number: 31,
  title: 'Partizip II mit Präfix',
  titleEn: 'Participles with Prefixes',
  description: 'Prefixes change where the ge- goes. Separable verbs tuck ge- in the middle (anrufen → angerufen); inseparable verbs (be-, er-, ver-, ent-, emp-) take no ge- at all (bekommen → bekommen, erklären → erklärt). One look at the prefix tells you the participle.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 32, title: 'Akkusativpronomen', titleEn: 'Accusative Pronouns' , href: 'chapter-a1-32-akkusativpronomen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A lot happened yesterday. Wanda got a package, her brother took her book before she could read it, and Timo — forgot the whole thing. As they catch up, every verb has a prefix: some keep ge- in the middle, some drop it completely.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear separable (angerufen) vs inseparable (bekommen) participles'
    ],
    scene: 'Vor dem Kurs \u2014 was gestern passiert ist, Berlin',
    femaleSpeakers: ['Wanda'],
    dialogue: [
      { speaker: 'Wanda', tokens: [
        { w: 'Timo', role: 'r-name', en: 'Timo', hi: 'टीमो', pron: 'TEE-mo', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'मिला', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mein', role: 'r-akkusativ', en: 'my (neut.)', hi: 'मेरा', pron: 'mine', type: 'Possessive · acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: 'bekommen', role: 'r-verb', en: 'received', hi: 'मिला', pron: 'be-KO-men', type: 'Partizip II · Satzende', why: 'bekommen → bekommen: be- verbs take NO ge- (this chapter).', ex: 'Ich habe es bekommen.', exEn: 'I received it.' },
        { w: '?', plain: true }
      ], en: 'Timo, did you get my book?', hi: 'Timo, tumhe meri kitaab mili?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time' },
        { w: 'bekommen', role: 'r-verb', en: 'received', hi: 'मिला', pron: 'be-KO-men', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true }
      ], en: 'Yes, I got it yesterday. Thanks!', hi: 'Haan, mujhe kal mili. Dhanyavaad!' },
      { speaker: 'Wanda', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: '?', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसी', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'वह', pron: 'es', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'And? How was it?', hi: 'Aur? Woh kaisi thi?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'noch', role: 'r-adverb', en: 'not', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'yet', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'gelesen', role: 'r-verb', en: 'read', hi: 'पढ़ी', pron: 'ge-LAY-zen', type: 'Partizip II · Satzende', why: 'lesen → gelesen (recycled, Ch29).', ex: 'Ich habe es gelesen.', exEn: 'I read it.' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Bruder', role: 'r-subject', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'genommen', role: 'r-verb', en: 'taken', hi: 'ले लिया', pron: 'ge-NO-men', type: 'Partizip II · Satzende', why: 'nehmen → genommen (recycled, Ch30).', ex: 'Er hat es genommen.', exEn: 'He took it.' },
        { w: '.', plain: true }
      ], en: 'Hmm. I have not read it yet. But my brother took it.', hi: 'Hmm. Main abhi tak nahi padha. Par mere bhai ne le li.' },
      { speaker: 'Wanda', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'gewusst', role: 'r-verb', en: 'known', hi: 'पता था', pron: 'ge-VUSST', type: 'Partizip II · Satzende', why: 'wissen → gewusst (recycled, Ch26).', ex: 'Ich habe das nicht gewusst.', exEn: 'I did not know that.' },
        { w: '.', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'कहा', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nichts', role: 'r-akkusativ', en: 'nothing', hi: 'कुछ नहीं', pron: 'nikhts', type: 'Pronoun · acc.' },
        { w: 'erzählt', role: 'r-verb', en: 'told', hi: 'बताया', pron: 'er-TSAYLT', type: 'Partizip II · Satzende', why: 'erzählen → erzählt: er- takes no ge- (this chapter).', ex: 'Er hat nichts erzählt.', exEn: 'He told nothing.' },
        { w: '?', plain: true }
      ], en: 'Oh! I did not know that. Why did you not say anything?', hi: 'Oh! Mujhe yeh nahi pata tha. Tumne kuch kyun nahi bataya?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'einfach', role: 'r-adverb', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'vergessen', role: 'r-verb', en: 'forgotten', hi: 'भूल गया', pron: 'fer-GE-sen', type: 'Partizip II · Satzende', why: 'vergessen → vergessen: ver- takes no ge- (this chapter).', ex: 'Ich habe es vergessen.', exEn: 'I forgot it.' },
        { w: '.', plain: true },
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '!', plain: true }
      ], en: 'I simply forgot. Sorry!', hi: 'Main bas bhool gaya. Maaf karo!' },
      { speaker: 'Wanda', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Ah, I see! No problem. But I need the book tomorrow.', hi: 'Achha samjha! Koi baat nahi. Par mujhe kal kitaab chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '?', plain: true },
        { w: 'Okay', role: 'r-subject', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाता हूँ', pron: 'BRING-uh', type: 'Verb · mitbringen (ich)', lexicalUnit: 'mitbringen', why: 'mitbringen splits: ich bringe … mit (recycled, Ch25).', ex: 'Ich bringe es mit.', exEn: 'I bring it along.' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitbringen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitbringen' },
        { w: '.', plain: true }
      ], en: 'Tomorrow? Okay. I will bring it along tomorrow.', hi: 'Kal? Theek hai. Main kal saath laata hoon.' },
      { speaker: 'Wanda', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'समझाया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'erklärt', role: 'r-verb', en: 'explained', hi: 'समझाया', pron: 'er-KLAIRT', type: 'Partizip II · Satzende', why: 'erklären → erklärt: er- takes no ge- (this chapter).', ex: 'Ich habe es erklärt.', exEn: 'I explained it.' },
        { w: '?', plain: true }
      ], en: 'Great! Have you already explained it?', hi: 'Badhiya! Kya tumne pehle se samjhaya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Noch', role: 'r-adverb', en: 'not', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'yet', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'do', hi: 'करता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Not yet. But I will do that now!', hi: 'Abhi nahi. Par main abhi karta hoon!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A verb\u2019s prefix decides what happens to the <span class="de r-verb">ge-</span> in its participle. <strong>Separable</strong> prefixes (an-, auf-, ein-, mit-, zurück-) slot ge- into the middle: <span class="de">anrufen → an<u>ge</u>rufen</span>. <strong>Inseparable</strong> prefixes (be-, er-, ver-, ent-, emp-, ge-) take <em>no ge- at all</em>: <span class="de">bekommen → bekommen</span>, <span class="de">erklären → erklärt</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is PARTIZIP II OF PREFIX VERBS: separable-prefix verbs put ge- in the middle, inseparable-prefix verbs take NO ge-. ' +
    'The learner wrote sentences about the past below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- SEPARABLE prefixes (an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, los-, ab-, weg-, fern-): the participle is prefix + ge + stem + ending. Examples: anrufen→angerufen, aufstehen→aufgestanden, einkaufen→eingekauft, mitbringen→mitgebracht, einladen→eingeladen, anfangen→angefangen, zurückkommen→zurückgekommen, fernsehen→ferngesehen, annehmen→angenommen.\n' +
    '- INSEPARABLE prefixes (be-, emp-, ent-, er-, ge-, ver-, zer-): the participle takes NO ge-. Examples: bekommen→bekommen, erklären→erklärt, erzählen→erzählt, vergessen→vergessen, verkaufen→verkauft, entdecken→entdeckt, empfehlen→empfohlen, vermissen→vermisst, besuchen→besucht, bezahlen→bezahlt.\n' +
    '- -ieren verbs also take no ge- (studiert, telefoniert), like inseparables.\n' +
    '- A plain verb with no prefix gets normal ge-: kaufen→gekauft, machen→gemacht.\n' +
    '- Word order is unchanged: helper (haben/sein) in position 2, participle at the very end.\n' +
    '- Choose haben/sein as usual (movement/change → sein); most prefix verbs here take haben.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Prefix check:</b> one sentence on whether ge- was placed correctly (middle for separable, none for inseparable).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you place ge- correctly by reading the prefix. On to <span class="de">Akkusativpronomen</span>.',
    mid: 'Good. Re-read the separable vs inseparable card once, then continue.',
    low: 'Worth another pass — focus on the two prefix families in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Wir', role: 'r-subject' }, { w: 'haben', role: 'r-verb' },
    { w: 'Anna', role: 'r-object' }, { w: 'angerufen', role: 'r-verb' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how a prefix decides where ge- goes.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A busy yesterday — got a package, sold a bike, forgot the class — all with prefix participles.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the prefix verbs: bekommen, erklären, verkaufen, vergessen, empfehlen and more.' },
    { id: 'grammar',    label: 'Prefix participles', tag: 'core',
      objective: 'Master separable (ge in the middle) vs inseparable (no ge-) participles.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a "what happened yesterday" text full of prefix participles and tap any word.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what each person got, sold, or forgot, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you did yesterday using prefix-verb participles.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences using separable and inseparable prefix participles.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill ge-placement and participle formation with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The prefix verbs and their participles with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'ge-placement drills, separable vs inseparable sorting, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Separable (prefix+ge+stem) vs inseparable (no ge-) participles, the prefix lists, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'angerufen, eingekauft', text: 'Form separable participles (ge in middle)' },
    { de: 'bekommen, erklärt', text: 'Form inseparable participles (no ge-)' },
    { de: 'be-, er-, ver-, ent-', text: 'Recognise the no-ge- prefixes' },
    { de: 'an-, auf-, ein-, mit-', text: 'Recognise the middle-ge prefixes' },
    { de: 'Was hast du gemacht?', text: 'Tell what you did in the past' }
  ],

  // ---------- Vocabulary (11 words) ----------
  vocab: [
    { de: 'bekommen', pos: 'verb', en: 'to get, receive', hi: 'पाना, मिलना', ex: 'Ich habe ein Paket bekommen.', exEn: 'I got a package.', conj: { praesens: 'bekommt', praeteritum: 'bekam', perfekt: 'hat bekommen' } },
    { de: 'annehmen', pos: 'verb', en: 'to accept', hi: 'स्वीकार करना', ex: 'Er hat mein Angebot angenommen.', exEn: 'He accepted my offer.', conj: { praesens: 'nimmt an', praeteritum: 'nahm an', perfekt: 'hat angenommen' } },
    { de: 'Teil', art: 'der', gender: 'm', plural: 'Teile', pos: 'noun', en: 'part', hi: 'हिस्सा', ex: 'Das ist ein wichtiger Teil.', exEn: 'That is an important part.' },
    { de: 'empfehlen', pos: 'verb', en: 'to recommend', hi: 'सुझाव देना', ex: 'Sie hat mir ein Café empfohlen.', exEn: 'She recommended a café to me.', conj: { praesens: 'empfiehlt', praeteritum: 'empfahl', perfekt: 'hat empfohlen' } },
    { de: 'erklären', pos: 'verb', en: 'to explain', hi: 'समझाना', ex: 'Ich habe alles erklärt.', exEn: 'I explained everything.', conj: { praesens: 'erklärt', praeteritum: 'erklärte', perfekt: 'hat erklärt' } },
    { de: 'erzählen', pos: 'verb', en: 'to tell, narrate', hi: 'बताना, सुनाना', ex: 'Er hat mir eine Geschichte erzählt.', exEn: 'He told me a story.', conj: { praesens: 'erzählt', praeteritum: 'erzählte', perfekt: 'hat erzählt' } },
    { de: 'vergessen', pos: 'verb', en: 'to forget', hi: 'भूलना', ex: 'Ich habe den Namen vergessen.', exEn: 'I forgot the name.', conj: { praesens: 'vergisst', praeteritum: 'vergaß', perfekt: 'hat vergessen' } },
    { de: 'verkaufen', pos: 'verb', en: 'to sell', hi: 'बेचना', ex: 'Ich habe mein Rad verkauft.', exEn: 'I sold my bike.', conj: { praesens: 'verkauft', praeteritum: 'verkaufte', perfekt: 'hat verkauft' } },
    // ===== Passive =====
    { de: 'entdecken', pos: 'verb', en: 'to discover', hi: 'खोजना', ex: 'Wir haben ein neues Café entdeckt.', exEn: 'We discovered a new café.', conj: { praesens: 'entdeckt', praeteritum: 'entdeckte', perfekt: 'hat entdeckt' } },
    { de: 'vermissen', pos: 'verb', en: 'to miss (someone)', hi: 'याद करना', ex: 'Wir haben dich vermisst.', exEn: 'We missed you.', conj: { praesens: 'vermisst', praeteritum: 'vermisste', perfekt: 'hat vermisst' } },
    // ===== Reference / System =====
    { de: 'Präfix', art: 'das', gender: 'n', plural: 'Präfixe', pos: 'noun', en: 'prefix', hi: 'उपसर्ग', ex: 'Das Präfix bestimmt das ge-.', exEn: 'The prefix decides the ge-.' }
  ],

  // ---------- Prefix participles (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Separable prefix → ge in the middle',
      body: [
        'You met separable verbs in Chapter 25. In the Perfekt their participle keeps the prefix at the front and slots <span class="de r-verb">ge</span> into the middle: <strong>prefix + ge + stem + ending</strong>.'
      ],
      table: {
        head: ['Verb', 'Participle', 'Example'],
        rows: [
          ['<span class="de">anrufen</span>', '<span class="de r-verb">an·ge·rufen</span>', '<span class="de">Ich habe Anna angerufen.</span>'],
          ['<span class="de">einkaufen</span>', '<span class="de r-verb">ein·ge·kauft</span>', '<span class="de">Ich habe eingekauft.</span>'],
          ['<span class="de">aufstehen</span>', '<span class="de r-verb">auf·ge·standen</span>', '<span class="de">Ich bin aufgestanden.</span>'],
          ['<span class="de">mitbringen</span>', '<span class="de r-verb">mit·ge·bracht</span>', '<span class="de">Ich habe es mitgebracht.</span>']
        ]
      },
      note: 'Separable prefixes: <b>an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, los-, ab-, fern-</b>. The ge- sits between prefix and stem: an<b>ge</b>rufen, ein<b>ge</b>kauft, an<b>ge</b>nommen.',
      hinglish: 'Separable verbs (Chapter 25) mein participle: <b>prefix + ge + stem</b>. Prefixes: an-, auf-, aus-, ein-, mit-, zurück-, los-, ab-, fern-. ge- beech mein: an<b>ge</b>rufen, ein<b>ge</b>kauft, an<b>ge</b>nommen.'
    },
    {
      title: 'Inseparable prefix → no ge-',
      body: [
        'A second group of prefixes is <strong>inseparable</strong> \u2014 they never split off, and their participle takes <strong>no ge-</strong> at all.'
      ],
      table: {
        head: ['Verb', 'Participle', 'Example'],
        rows: [
          ['<span class="de">bekommen</span>', '<span class="de r-verb">bekommen</span>', '<span class="de">Ich habe ein Paket bekommen.</span>'],
          ['<span class="de">verkaufen</span>', '<span class="de r-verb">verkauft</span>', '<span class="de">Ich habe es verkauft.</span>'],
          ['<span class="de">erklären</span>', '<span class="de r-verb">erklärt</span>', '<span class="de">Ich habe es erklärt.</span>'],
          ['<span class="de">empfehlen</span>', '<span class="de r-verb">empfohlen</span>', '<span class="de">Sie hat es empfohlen.</span>']
        ]
      },
      note: 'Inseparable prefixes: <b>be-, emp-, ent-, er-, ge-, ver-, zer-</b>. No ge-: <b>be</b>kommen, <b>ver</b>kauft, <b>er</b>klärt, <b>ent</b>deckt, <b>emp</b>fohlen. (Verbs in <b>-ieren</b> also take no ge-: studiert.)',
      hinglish: 'Inseparable prefixes: <b>be-, emp-, ent-, er-, ge-, ver-, zer-</b> — kabhi alag nahi hote, aur participle mein <b>ge- nahi</b>: bekommen, verkauft, erklärt, entdeckt, empfohlen. (-ieren verbs mein bhi ge- nahi: studiert.)'
    },
    {
      title: 'Spot the prefix, place the ge-',
      goldenRule: 'Three possible homes for <b>ge-</b>: front, middle, or nowhere. The prefix decides — you never guess.',
      formula: [
        'no prefix     →  <b>ge</b>macht        (front)',
        'separable     →  an<b>ge</b>rufen      (middle)',
        'inseparable   →  bekommen        (none)',
        '-ieren        →  studiert        (none)'
      ],
      memoryTrick: 'Prefix par <b>zor</b> hai → ge beech mein. Zor nahi → ge nahi. Prefix hi nahi → ge aage.',
      recap: [
        'Separable prefix → <b>ge</b> in the middle.',
        'Inseparable prefix (be-, er-, ver-, ent-, emp-) → no <b>ge</b>.',
        '<b>-ieren</b> verbs → no <b>ge</b>.'
      ],
      body: [
        'One quick check before you build any participle: is the prefix separable or inseparable?'
      ],
      table: {
        head: ['Prefix type', 'Examples', 'ge-?'],
        rows: [
          ['separable', '<span class="de">an-, auf-, ein-, mit-, zurück-</span>', 'ge in the <b>middle</b>'],
          ['inseparable', '<span class="de">be-, er-, ver-, ent-, emp-</span>', '<b>no</b> ge-'],
          ['no prefix', '<span class="de">machen, kaufen</span>', 'ge at the <b>front</b>'],
          ['-ieren', '<span class="de">studieren, telefonieren</span>', '<b>no</b> ge-']
        ]
      },
      note: 'Three outcomes: front (gemacht), middle (angerufen), or none (bekommen, studiert). The prefix tells you which \u2014 you don\u2019t have to guess.',
      hinglish: 'Teen nateeje: front (gemacht), middle (angerufen), ya none (bekommen, studiert). Prefix dekhte hi pata chal jaata hai — guess karne ki zaroorat nahi.'
    },
    {
      title: 'Word order is unchanged',
      body: [
        'Whatever the prefix, the sentence frame is the same as any Perfekt: helper in position 2, participle at the very end.'
      ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['statement', '<span class="de">Ich habe Anna angerufen.</span>'],
          ['question', '<span class="de">Hast du eingekauft?</span>'],
          ['inseparable', '<span class="de">Ich habe das Rad verkauft.</span>'],
          ['with sein', '<span class="de">Ich bin zurückgekommen.</span>']
        ]
      },
      note: 'Helper (haben/sein) position 2; participle last \u2014 just as before. Movement separable verbs still take sein: <b>zurückkommen → ich bin zurückgekommen</b>.',
      hinglish: 'Frame wahi: helper (haben/sein) position 2, participle end mein. Movement wale separable verbs sein lete hain: <b>zurückkommen → ich bin zurückgekommen</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four prefix-participle traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe Anna geanrufen.', right: 'Ich habe Anna angerufen.', why: 'Separable: ge goes in the middle, not the front: angerufen.' },
        { wrong: 'Ich habe ein Paket gebekommen.', right: 'Ich habe ein Paket bekommen.', why: 'Inseparable be- → no ge-: bekommen.' },
        { wrong: 'Ich habe das Rad geverkauft.', right: 'Ich habe das Rad verkauft.', why: 'Inseparable ver- → no ge-: verkauft.' },
        { wrong: 'Ich habe angerufen Anna.', right: 'Ich habe Anna angerufen.', why: 'The participle goes to the very end.' }
      ],
      hinglish: 'Char galtiyan common hain. Separable verbs mein <b>ge</b> beech mein aata hai: <b>angerufen</b>, na ki "geanrufen". <b>be-</b> wale verbs mein <b>ge-</b> nahi lagta: <b>bekommen</b>. <b>ver-</b> wale verbs mein bhi nahi: <b>verkauft</b>. Aur participle sentence ke end mein aata hai: <b>Ich habe Anna angerufen</b>.'
    }
  ],

  // ---------- Reading passage (yesterday with prefix verbs, clickable) ----------
  reading: {
    title: 'Ein voller Tag',
    titleEn: 'A full day',
    tokens: [
      { w: 'Gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time', why: 'gestern (recycled — Präteritum).', ex: 'Gestern habe ich …', exEn: 'Yesterday I …' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'मिला', pron: 'HAH-buh', type: 'Aux · haben (ich)', why: 'haben helper; verb position 2 (recycled — Perfekt mit haben).', ex: 'Gestern habe ich …', exEn: 'Yesterday I …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'viel', role: 'r-object', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
      { w: 'erlebt', role: 'r-verb', en: 'experienced', hi: 'अनुभव किया', pron: 'air-LAYPT', type: 'Partizip II · erleben', why: 'inseparable er- → no ge- (this chapter).', ex: 'Ich habe viel erlebt.', exEn: 'I experienced a lot.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition · time' },
      { w: 'Morgen', role: 'r-time', en: 'morning', hi: 'सुबह', pron: 'MOR-gen', type: 'Noun · time', why: 'der Morgen (recycled — Uhrzeit).', ex: 'am Morgen', exEn: 'in the morning' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'पाया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Paket', role: 'r-object', en: 'package', hi: 'पार्सल', pron: 'pa-KAYT', type: 'Noun · neut.', why: 'das Paket.', ex: 'ein Paket bekommen', exEn: 'got a package' },
      { w: 'bekommen', role: 'r-verb', en: 'received', hi: 'मिला', pron: 'buh-KO-men', type: 'Partizip II · bekommen', why: 'inseparable be- → no ge- (this chapter).', ex: 'Ich habe ein Paket bekommen.', exEn: 'I got a package.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann habe ich …', exEn: 'Then I …' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Verb position 2 after front adverb (recycled — Satzposition).', ex: 'Dann habe ich …', exEn: 'Then I …' },
      { w: 'eingekauft', role: 'r-verb', en: 'shopped', hi: 'खरीदारी की', pron: 'INE-guh-kowft', type: 'Partizip II · einkaufen', why: 'separable ein- → ge in the middle (this chapter).', ex: 'Ich habe eingekauft.', exEn: 'I went shopping.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'angerufen', role: 'r-verb', en: 'called', hi: 'फ़ोन किया', pron: 'AN-guh-roo-fen', type: 'Partizip II · anrufen', why: 'separable an- → ge in the middle (this chapter).', ex: 'Ich habe Anna angerufen.', exEn: 'I called Anna.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'sie = she (recycled — Wer bist du?).', ex: 'Sie hat empfohlen.', exEn: 'She recommended.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'सुझाया', pron: 'hat', type: 'Aux · haben (sie)' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Café', role: 'r-object', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · neut.', why: 'das Café (recycled — Im Café).', ex: 'ein Café empfohlen', exEn: 'recommended a café' },
      { w: 'empfohlen', role: 'r-verb', en: 'recommended', hi: 'सुझाया', pron: 'emp-FOH-len', type: 'Partizip II · empfehlen', why: 'inseparable emp- → no ge- (this chapter).', ex: 'Sie hat es empfohlen.', exEn: 'She recommended it.' },
      { w: '.', plain: true },
      { w: 'Dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'बेचा', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mein', role: 'r-akkusativ', en: 'my (neut. acc.)', hi: 'मेरी', pron: 'mine', type: 'Possessive · acc.' },
      { w: 'Rad', role: 'r-object', en: 'bike', hi: 'साइकिल', pron: 'raht', type: 'Noun · neut.', why: 'das Rad.', ex: 'das Rad verkauft', exEn: 'sold the bike' },
      { w: 'verkauft', role: 'r-verb', en: 'sold', hi: 'बेचा', pron: 'fair-KOWFT', type: 'Partizip II · verkaufen', why: 'inseparable ver- → no ge- (this chapter).', ex: 'Ich habe das Rad verkauft.', exEn: 'I sold the bike.' },
      { w: '.', plain: true },
      { w: 'Nur', role: 'r-subject', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur (recycled — Hobbies).', ex: 'Nur den Namen …', exEn: 'Only the name …' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.', why: 'masc. acc. der → den (recycled — Akkusativ).', ex: 'den Namen', exEn: 'the name' },
      { w: 'Namen', role: 'r-object', en: 'name', hi: 'नाम', pron: 'NAH-men', type: 'Noun · masc.', why: 'der Name (recycled — Wer bist du?).', ex: 'den Namen vergessen', exEn: 'forgot the name' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'भूल गया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'vergessen', role: 'r-verb', en: 'forgotten', hi: 'भूल गया', pron: 'fair-GE-sen', type: 'Partizip II · vergessen', why: 'inseparable ver- → no ge- (this chapter).', ex: 'Ich habe den Namen vergessen.', exEn: 'I forgot the name.' },
      { w: '!', plain: true }
    ],
    translation: 'Yesterday I experienced a lot. In the morning I got a package. Then I went shopping and called Anna. She recommended a café to me. There I sold my bike. Only the name I forgot!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_031_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wanda, was hast du gestern gemacht?', en: 'Wanda, what did you do yesterday?' },
      { id: 'A1_031_L002', speaker: 'Wanda', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe die Küche aufgeräumt und Brot eingekauft.', en: 'I tidied the kitchen and bought bread.' },
      { id: 'A1_031_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und dann?', en: 'And then?' },
      { id: 'A1_031_L004', speaker: 'Wanda', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe ein Geschenk mitgebracht und die Hausaufgabe verstanden!', en: 'I brought a gift and understood the homework!' },
      { id: 'A1_031_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Toll! Und Max?', en: 'Great! And Max?' },
      { id: 'A1_031_L006', speaker: 'Wanda', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Max hat wieder alles verschoben!', en: 'Max postponed everything again!' }
    ],
    transcript: 'Wanda, was hast du gestern gemacht? Ich habe die Küche aufgeräumt und Brot eingekauft. Und dann? Ich habe ein Geschenk mitgebracht und die Hausaufgabe verstanden! Toll! Und Max? Max hat wieder alles verschoben!',
    translation: 'Wanda, what did you do yesterday? I tidied the kitchen and bought bread. And then? I brought a gift and understood the homework! Great! And Max? Max postponed everything again!',
    tokens: [
      { w: 'Wanda' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'gestern' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'die' },
      { w: 'Küche' },
      { w: 'aufgeräumt' },
      { w: 'und' },
      { w: 'Brot' },
      { w: 'eingekauft' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'dann' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'ein' },
      { w: 'Geschenk' },
      { w: 'mitgebracht' },
      { w: 'und' },
      { w: 'die' },
      { w: 'Hausaufgabe' },
      { w: 'verstanden' },
      { w: '!', plain: true },
      { w: 'Toll' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'Max' },
      { w: '?', plain: true },
      { w: 'Max' },
      { w: 'hat' },
      { w: 'wieder' },
      { w: 'alles' },
      { w: 'verschoben' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was hat Wanda aufgeräumt?', qEn: 'What did Wanda tidy?', options: ['ihr Zimmer', 'die Küche', 'das Klassenzimmer', 'die Bibliothek'], optionsEn: ['her room', 'the kitchen', 'the classroom', 'the library'], answer: 1,
        explain: '"Ich habe die Küche aufgeräumt."' },
      { q: 'Was hat Max gemacht?', qEn: 'What did Max do?', options: ['alles verstanden', 'alles verschoben', 'eingekauft', 'ein Geschenk gebracht'], optionsEn: ['understood everything', 'postponed everything', 'did the shopping', 'brought a present'], answer: 1,
        explain: '"Max hat wieder alles verschoben!"' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Was hast du gestern gemacht?", taskEn: "Your partner asks: what did you do yesterday?", de: "Ich habe die Küche aufgeräumt und Brot eingekauft.", en: "I tidied the kitchen and bought bread." },
    { task: "Deine Lehrerin fragt: Hast du die Hausaufgabe verstanden?", taskEn: "Your teacher asks: did you understand the homework?", de: "Ja, ich habe alles verstanden und ein Geschenk mitgebracht.", en: "Yes, I understood everything and brought a present." },
    { task: "Dein Freund fragt: Was ist mit deinem Rad?", taskEn: "Your friend asks: what happened to your bike?", de: "Ich habe mein Rad verkauft, aber den Preis vergessen.", en: "I sold my bike, but I've forgotten the price." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about what you did yesterday using prefix verbs. Use at least two separable participles (angerufen, eingekauft, mitgebracht) and two inseparable ones (bekommen, verkauft, erklärt, vergessen). Keep the participle at the end.',
    starters: ['Gestern habe ich …', 'Ich habe … angerufen.', 'Ich habe … bekommen.', 'Dann habe ich …'],
    placeholder: 'Gestern habe ich eingekauft und Anna angerufen …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which participle is correct for "anrufen"?',
      options: ['geanrufen', 'angerufen', 'anruft', 'angeruft'],
      answer: 1,
      explain: 'Separable an- → ge in the middle: an·ge·rufen.'
    },
    gap: {
      // inseparable (no ge-) + separable (ge middle)
      sentence: ['Ich habe ein Paket ', ' und Anna ', ' .'],
      gaps: [ { answer: 'bekommen', accepts: ['bekommen'] }, { answer: 'angerufen', accepts: ['angerufen'] } ],
      explain: 'bekommen (inseparable, no ge-); angerufen (separable, ge in middle).'
    },
    match: {
      q: 'Match each verb to its Partizip II.',
      pairs: [
        { noun: 'anrufen', art: 'angerufen' },
        { noun: 'bekommen', art: 'bekommen' },
        { noun: 'verkaufen', art: 'verkauft' },
        { noun: 'einkaufen', art: 'eingekauft' }
      ]
    },
    builder: {
      target: 'Build: "We called Anna." (Perfekt)',
      bank: ['Wir', 'haben', 'Anna', 'angerufen'],
      answer: ['Wir', 'haben', 'Anna', 'angerufen'],
      roles: { 'Wir': 'r-subject', 'haben': 'r-verb', 'Anna': 'r-object', 'angerufen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the Partizip II of "anrufen"?', options: ['geanrufen', 'angerufen', 'anrufen', 'angeruft'], answer: 1,
      explain: 'Separable → ge in the middle: angerufen.' },
    { q: 'What is the Partizip II of "bekommen"?', options: ['gebekommen', 'bekommen', 'bekommt', 'bekomen'], answer: 1,
      explain: 'Inseparable be- → no ge-: bekommen.' },
    { q: 'Which prefix takes NO ge-?', options: ['an-', 'ein-', 'ver-', 'mit-'], answer: 2,
      explain: 'ver- is inseparable → no ge- (verkauft). an-, ein-, mit- are separable.' },
    { q: 'Complete: "Ich habe das Rad ___."', options: ['geverkauft', 'verkauft', 'verkaufen', 'verkaufte'], answer: 1,
      explain: 'verkaufen → verkauft (inseparable, no ge-).' },
    { q: 'Where does the participle go?', options: ['position 1', 'position 2', 'at the end', 'before haben'], answer: 2,
      explain: 'Helper position 2, participle at the very end.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Separable prefix → ge in the <strong>middle</strong>: <span class="de">anrufen → angerufen</span>, <span class="de">einkaufen → eingekauft</span>.' },
    { c: 'r-verb', html: 'Inseparable prefix (be-, er-, ver-, ent-, emp-) → <strong>no ge-</strong>: <span class="de">bekommen, erklärt, verkauft</span>.' },
    { c: 'r-object', html: 'The prefix tells you: front (gemacht), middle (angerufen), or none (bekommen). Word order unchanged.' }
  ],
  revisionTips: [
    'Before building a participle, glance at the prefix: separable → middle ge, inseparable → no ge.',
    'Memorise the no-ge- prefixes as a set: be-, emp-, ent-, er-, ge-, ver-, zer-.',
    'Separable movement verbs still take sein: zurückkommen → ich bin zurückgekommen.'
  ]
};

window.CHAPTER = CHAPTER;
