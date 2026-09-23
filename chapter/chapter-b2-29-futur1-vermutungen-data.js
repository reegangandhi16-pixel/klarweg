/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 29
   "Futur I für Vermutungen" — at B2, werden + Infinitiv is
   frequently NOT about the future at all. It expresses an
   assumption/guess/probability about the PRESENT: "Anna wird
   jetzt zu Hause sein" = "She's probably at home now" (not "she
   will be home"). Context (a time adverb like "jetzt"/"gerade"
   vs "morgen") decides the meaning. Futur II, Konjunktiv II, and
   probability-with-modal-verbs are only briefly previewed as
   later topics, never taught here.
   IMPORTANT: dialogue uses ONLY Ronja and Timo.
   Theme: workplace/university guessing games, with a light
   thread of German political history vocabulary (Kanzler,
   Grenzsoldat, Machtwechsel) continuing Ch.27-28's history arc.
   Vocabulary source: uploaded chapter-29 list (53 items).
============================================================ */
const CHAPTER = {
  id: 'b2-29-futur1-vermutungen',
  phase: 'B2 · Phase 3',
  number: 29,
  title: 'Futur I für Vermutungen',
  titleEn: 'Futur I for assumptions',
  description: 'werden + Infinitiv often isn\'t about the future at all — it\'s how Germans guess what\'s probably true right now.',
  xp: 460,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 30, title: 'Alternativen zum Futur', titleEn: 'Alternatives to the future tense' , href: 'chapter-b2-30-alternativen-zum-futur.html' },

  prevChapter: { number: 28, title: 'Tempuswechsel im Text', titleEn: 'Tense-switching within a text', href: 'chapter-b2-28-tempuswechsel-im-text.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not the future — <em>a guess.</em>',
    intro: 'Ronja and Timo can\'t stop guessing about their strict-sounding new manager — he\'ll probably be tough, he\'ll probably be friendly, he\'ll have to be competent either way — werden + Infinitiv here isn\'t the future, it\'s a guess.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how "jetzt"/"gerade" turn werden + Infinitiv into a present-tense guess, not a future plan'
    ],
    scene: 'Wo ist Herr Kanzler?',
    femaleSpeakers: ['Ronja'],
    dialogue: [
      { speaker: 'Ronja', tokens: [
        { w: 'Unser', role: 'r-subject', en: 'our', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive' },
        { w: 'neuer', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-er', type: 'Adjective' },
        { w: 'Kanzler', role: 'r-subject', en: 'manager', hi: 'प्रबंधक', pron: 'KANTS-ler', type: 'Noun · masc.', why: 'der Kanzler here used loosely as team head (this chapter).', ex: 'der neue Kanzler' },
        { w: 'wird', role: 'r-verb', en: 'will probably', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I für Vermutung)', why: 'werden + Infinitiv can express a present-tense assumption, not just future (this chapter).', ex: 'Er wird streng sein.', exEn: 'He will probably be strict.' },
        { w: 'wohl', role: 'r-adverb', en: 'probably', hi: 'शायद', pron: 'vohl', type: 'Adverb' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'streng', role: 'r-akkusativ', en: 'strict', hi: 'सख़्त', pron: 'shtrenk', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Our new manager will probably be very strict.', hi: 'Hamaara naya prabandhak shayad bahut sakht hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'denke', role: 'r-verb', en: 'think', hi: 'सोचता हूँ', pron: 'DEN-kuh', type: 'Verb · denken (ich)' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will probably', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I für Vermutung)' },
        { w: 'eher', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'AY-er', type: 'Comparative' },
        { w: 'locker', role: 'r-akkusativ', en: 'relaxed', hi: 'ढीला', pron: 'LO-ker', type: 'Adjective', why: 'locker = relaxed (this chapter).', ex: 'Er wird locker sein.', exEn: 'He will probably be relaxed.' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Really? I think he will probably be rather relaxed.', hi: 'Sach mein? Main sochta hoon woh shayad zyada dheela hoga.' },
      { speaker: 'Ronja', tokens: [
        { w: 'Woher', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vo-HAIR', type: 'Question word' },
        { w: 'weißt', role: 'r-verb', en: 'do you know', hi: 'जानते हो', pron: 'VYSST', type: 'Verb · wissen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'How do you know that?', hi: 'Tumhe yeh kaise pata hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will probably', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I für Vermutung)' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'freundlich', role: 'r-akkusativ', en: 'friendly', hi: 'दोस्ताना', pron: 'FROYNT-likh', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'lächelt', role: 'r-verb', en: 'smiles', hi: 'मुस्कुराता है', pron: 'LEKH-elt', type: 'Verb · lächeln (Satzende)' },
        { w: '.', plain: true }
      ], en: 'He will probably surely be friendly, because he always smiles.', hi: 'Woh zaroor dostana hoga, kyunki woh hamesha muskuraata hai.' },
      { speaker: 'Ronja', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will probably', hi: 'होगी', pron: 'virt', type: 'Verb · werden (Futur I für Vermutung)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'reichen', role: 'r-verb', en: 'be enough', hi: 'काफ़ी', pron: 'RY-khen', type: 'Verb · infinitive (Satzende)', why: 'reichen = to be enough (recycled B2 Ch25).', ex: 'das wird nicht reichen' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will probably', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I für Vermutung)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'kompetent', role: 'r-akkusativ', en: 'competent', hi: 'सक्षम', pron: 'kom-pe-TENT', type: 'Adjective', why: 'kompetent = competent (this chapter).', ex: 'Er wird kompetent sein.', exEn: 'He will probably be competent.' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: 'müssen', role: 'r-modalverb', en: 'have to', hi: 'होगी', pron: 'MÜ-sen', type: 'Modal · müssen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That will not be enough. He will also have to be competent.', hi: 'Yeh kaafi nahi hoga. Use saksham bhi hona padega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'werden', role: 'r-verb', en: 'will', hi: 'देखेंगे', pron: 'VAIR-den', type: 'Verb · werden' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'sehen', role: 'r-verb', en: 'see', hi: 'देखेंगे', pron: 'ZAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is true. We will see it soon.', hi: 'Yeh sahi hai. Hum yeh jald dekhenge.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'At B2, <span class="de r-vermutung">werden + Infinitiv</span> is often <em>not</em> about the future at all. With a present-time word like <span class="de">jetzt</span> or <span class="de">gerade</span>, it means "probably" — a guess about right now. With a future-time word like <span class="de">morgen</span>, it means the real future. Same grammar, context decides the meaning.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is FUTUR I FÜR VERMUTUNGEN (B2 level): werden + Infinitiv used to express an assumption/guess/probability about the PRESENT, not the future. Example: "Anna wird jetzt zu Hause sein" = "She is probably at home now" (NOT "she will be home"). The key signal is a present-time adverb (jetzt, gerade, wohl) vs a future-time adverb (morgen, nächste Woche) — the SAME grammar (werden + Infinitiv) means different things depending on this context. ' +
    'Do NOT expect or require Futur II, Konjunktiv II, or probability-with-modal-verbs (dürfte) — those are out of scope; do not flag their absence, and do not require the learner to use them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- If "werden + Infinitiv" appears with jetzt/gerade/now-context, it should read as an assumption about the present — that is correct, not an error.\n' +
    '- If "werden + Infinitiv" appears with morgen/future-context, it should read as a real future plan — that is also correct.\n' +
    '- Do not flag either usage as wrong; only flag genuine grammar errors (wrong verb form, wrong infinitive) or clear factual confusion between the two meanings.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Meaning check:</b> one sentence on whether the learner\'s "werden + Infinitiv" sentences clearly signal assumption vs future through context.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly hear when werden + Infinitiv is a guess about now versus a real future plan. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the meaning-comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: the SAME grammar (werden + Infinitiv) means "probably" with jetzt/gerade, and "will" with morgen. Context, not grammar, tells you which.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'wird', role: 'r-vermutung' }, { w: 'jetzt', role: 'plain' },
    { w: 'zu', role: 'plain' }, { w: 'Hause', role: 'plain' }, { w: 'sein', role: 'r-vermutung' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: werden + Infinitiv can mean "probably", not just "will".' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ronja and Timo guess what colleagues are probably doing right now, then plan a real future call.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 53 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the assumption reading of Futur I and how context distinguishes it from the real future.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an office conversation and a university discussion full of Futur I assumptions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify assumption vs real future, speaker certainty, and the deciding context clue.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Make natural assumptions about people and situations using Futur I.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write emails and opinion texts using Futur I for assumptions where appropriate.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill assumption-vs-future decisions, rewriting, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 460 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 53 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Assumption-or-future drills, rewriting exercises, and a guessing-game writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete meaning-comparison reference, probability scale, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna wird jetzt zu Hause sein.', text: 'Recognize Futur I as an assumption about the present' },
    { de: 'Morgen werde ich nach Berlin fahren.', text: 'Distinguish the real-future meaning of the same grammar' },
    { de: 'jetzt, gerade, wohl vs. morgen, nächste Woche', text: 'Use context clues to decide which meaning applies' },
    { de: 'Das wird stimmen. Er wird Recht haben.', text: 'Use common fixed assumption expressions naturally' },
    { de: '100% → 90% → 50%', text: 'Place Futur I on a rough probability scale' }
  ],

  // ---------- Vocabulary (53 items — uploaded chapter-29 list) ----------
  vocab: [
    { de: 'Drucktafel', art: 'die', gender: 'f', plural: 'Drucktafeln', pos: 'noun', level: 'B2', register: 'written', en: 'display panel', hi: 'डिस्प्ले पैनल', ex: 'Die Drucktafel zeigte die Abfahrtszeiten.', exEn: 'The display panel showed the departure times.', exHi: 'Display panel ne prasthaan samay dikhaaya.', ex2: 'Sie haben die Drucktafel repariert.', ex2En: 'They\'ve repaired the display panel.', ex2Hi: 'Unhone display panel theek kiya hai.' },
    { de: 'durchsetzen', pos: 'verb', level: 'B2', register: 'both', en: 'to assert, push through', hi: 'लागू करना', ex: 'Sie setzte ihre Meinung durch.', exEn: 'She asserted her opinion.', exHi: 'Usne apni raay ko lagoo karvaaya.', ex2: 'Er hat sich durchgesetzt.', ex2En: 'He\'s prevailed.', ex2Hi: 'Woh saphal raha hai.', conj: { praesens: 'setzt durch', praeteritum: 'setzte durch', perfekt: 'hat durchgesetzt' } },
    { de: 'E-Gitarre', art: 'die', gender: 'f', plural: 'E-Gitarren', pos: 'noun', level: 'B2', register: 'both', en: 'electric guitar', hi: 'इलेक्ट्रिक गिटार', ex: 'Er spielt E-Gitarre in einer Band.', exEn: 'He plays electric guitar in a band.', exHi: 'Woh ek band mein electric guitar bajaata hai.', ex2: 'Sie hat sich eine neue E-Gitarre gekauft.', ex2En: 'She\'s bought a new electric guitar.', ex2Hi: 'Usne ek naya electric guitar khareeda hai.' },
    { de: 'Ehrentag', art: 'der', gender: 'm', plural: 'Ehrentage', pos: 'noun', level: 'B2', register: 'written', en: 'day of honour', hi: 'सम्मान का दिन', ex: 'Heute ist ihr Ehrentag.', exEn: 'Today is her day of honour.', exHi: 'Aaj uska samman ka din hai.', ex2: 'Wir haben den Ehrentag gefeiert.', ex2En: 'We\'ve celebrated the day of honour.', ex2Hi: 'Humne samman ka din manaaya hai.' },
    { de: 'Eifersucht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'jealousy', hi: 'ईर्ष्या', ex: 'Eifersucht zerstörte ihre Freundschaft.', exEn: 'Jealousy destroyed their friendship.', exHi: 'Eershya ne unki dosti nasht kar di.', ex2: 'Er hat seine Eifersucht überwunden.', ex2En: 'He\'s overcome his jealousy.', ex2Hi: 'Usne apni eershya par kaabu paa liya hai.' },
    { de: 'Einfuhr', art: 'die', gender: 'f', plural: 'Einfuhren', pos: 'noun', level: 'B2', register: 'written', en: 'import', hi: 'आयात', ex: 'Die Einfuhr von Getreide stieg.', exEn: 'The import of grain rose.', exHi: 'Anaaj ka aayaat badha.', ex2: 'Sie haben die Einfuhr reguliert.', ex2En: 'They\'ve regulated the import.', ex2Hi: 'Unhone aayaat ko niyantrit kiya hai.' },
    { de: 'Einreise', art: 'die', gender: 'f', plural: 'Einreisen', pos: 'noun', level: 'B2', register: 'both', en: 'entry (into a country)', hi: 'प्रवेश', ex: 'Die Einreise wurde streng kontrolliert.', exEn: 'The entry was strictly controlled.', exHi: 'Pravesh ki sakhti se jaanch ki gayi.', ex2: 'Wir haben unsere Einreise vorbereitet.', ex2En: 'We\'ve prepared our entry.', ex2Hi: 'Humne apna pravesh taiyaar kiya hai.' },
    { de: 'endgültig', pos: 'adjective', level: 'B2', register: 'both', en: 'final, definitive', hi: 'अंतिम', ex: 'Das war die endgültige Entscheidung.', exEn: 'That was the final decision.', exHi: 'Yeh antim faisla tha.', ex2: 'Sie haben endgültig zugestimmt.', ex2En: 'They\'ve definitively agreed.', ex2Hi: 'Unhone antim roop se sahmati di hai.' },
    { de: 'Erachten', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'opinion, view', hi: 'राय', ex: 'Nach meinem Erachten wird sich nicht viel ändern.', exEn: 'In my opinion, not much is probably going to change.', exHi: 'Meri raay mein, zyaada kuch shaayad nahi badlega.', ex2: 'Nach ihrem Erachten war der Plan richtig.', ex2En: 'In her opinion, the plan was correct.', ex2Hi: 'Uski raay mein, yojana sahi thi.' },
    { de: 'Examen', art: 'das', gender: 'n', plural: 'Examen', pos: 'noun', level: 'B2', register: 'both', en: 'exam', hi: 'परीक्षा', ex: 'Unser Klassenbester hat sein Examen bestanden.', exEn: 'Our top student passed his exam.', exHi: 'Hamara sabse acha student apni pareeksha mein pass ho gaya.', ex2: 'Sie hat sich auf das Examen vorbereitet.', ex2En: 'She\'s prepared for the exam.', ex2Hi: 'Usne pareeksha ki taiyaari ki hai.' },
    { de: 'Fachwelt', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'experts, specialist world', hi: 'विशेषज्ञ जगत', ex: 'Die Fachwelt reagierte überrascht.', exEn: 'The specialist world reacted with surprise.', exHi: 'Vishesagya jagat ne chaunkkar pratikriya di.', ex2: 'Sie haben die Fachwelt überzeugt.', ex2En: 'They\'ve convinced the specialist world.', ex2Hi: 'Unhone vishesagya jagat ko convince kiya hai.' },
    { de: 'Familienbesuch', art: 'der', gender: 'm', plural: 'Familienbesuche', pos: 'noun', level: 'B2', register: 'both', en: 'family visit', hi: 'पारिवारिक मुलाकात', ex: 'Sein ganzer Familienbesuch wird jetzt gefeiert werden.', exEn: 'His whole family visit is probably being celebrated right now.', exHi: 'Uski pooree parivaarik mulaakaat shaayad abhi manaayi ja rahi hogi.', ex2: 'Wir haben den Familienbesuch geplant.', ex2En: 'We\'ve planned the family visit.', ex2Hi: 'Humne parivaarik mulaakaat ki yojana banaayi hai.' },
    { de: 'Festspiel', art: 'das', gender: 'n', plural: 'Festspiele', pos: 'noun', level: 'B2', register: 'written', en: 'festival', hi: 'महोत्सव', ex: 'Das Festspiel dauerte drei Wochen.', exEn: 'The festival lasted three weeks.', exHi: 'Mahotsav teen hafte tak chala.', ex2: 'Sie haben am Festspiel teilgenommen.', ex2En: 'They\'ve taken part in the festival.', ex2Hi: 'Unhone mahotsav mein bhaag liya hai.' },
    { de: 'Forelle', art: 'die', gender: 'f', plural: 'Forellen', pos: 'noun', level: 'B2', register: 'both', en: 'trout', hi: 'ट्राउट मछली', ex: 'Wir haben Forelle zum Abendessen gegessen.', exEn: 'We\'ve eaten trout for dinner.', exHi: 'Humne raat ke khaane mein trout khaayi hai.', ex2: 'Die Forelle schmeckte ausgezeichnet.', ex2En: 'The trout tasted excellent.', ex2Hi: 'Trout ka swaad utkrisht tha.' },
    { de: 'freihalten', pos: 'verb', level: 'B2', register: 'both', en: 'to keep free, reserve', hi: 'खाली रखना', ex: 'Sie hielt den Platz frei.', exEn: 'She kept the seat free.', exHi: 'Usne jagah khaali rakhi.', ex2: 'Wir haben den Termin freigehalten.', ex2En: 'We\'ve kept the appointment slot free.', ex2Hi: 'Humne appointment ka samay khaali rakha hai.', conj: { praesens: 'hält frei', praeteritum: 'hielt frei', perfekt: 'hat freigehalten' } },
    { de: 'friedlich', pos: 'adjective', level: 'B2', register: 'both', en: 'peaceful', hi: 'शांतिपूर्ण', ex: 'Die Demonstration verlief friedlich.', exEn: 'The demonstration was peaceful.', exHi: 'Pradarshan shaantipurn raha.', ex2: 'Sie haben friedlich zusammengelebt.', ex2En: 'They\'ve lived together peacefully.', ex2Hi: 'Woh shaanti se saath rahe hain.' },
    { de: 'fusionieren', pos: 'verb', level: 'B2', register: 'written', en: 'to merge, fuse', hi: 'विलय करना', ex: 'Die zwei Firmen fusionierten.', exEn: 'The two companies merged.', exHi: 'Do companiyon ka vilay hua.', ex2: 'Sie haben ihre Abteilungen fusioniert.', ex2En: 'They\'ve merged their departments.', ex2Hi: 'Unhone apne vibhaagon ka vilay kiya hai.', conj: { praesens: 'fusioniert', praeteritum: 'fusionierte', perfekt: 'hat fusioniert' } },
    { de: 'Gehweg', art: 'der', gender: 'm', plural: 'Gehwege', pos: 'noun', level: 'B2', register: 'both', en: 'footpath, pavement', hi: 'फुटपाथ', ex: 'Der Gehweg war voller Menschen.', exEn: 'The footpath was full of people.', exHi: 'Footpath logon se bhara tha.', ex2: 'Sie haben den Gehweg repariert.', ex2En: 'They\'ve repaired the footpath.', ex2Hi: 'Unhone footpath theek kiya hai.' },
    { de: 'Gemüsebeet', art: 'das', gender: 'n', plural: 'Gemüsebeete', pos: 'noun', level: 'B2', register: 'both', en: 'vegetable bed, patch', hi: 'सब्ज़ी की क्यारी', ex: 'Sie pflegte ihr Gemüsebeet jeden Tag.', exEn: 'She tended her vegetable patch every day.', exHi: 'Woh har din apni sabzi ki kyaari ki dekhbhaal karti thi.', ex2: 'Wir haben ein neues Gemüsebeet angelegt.', ex2En: 'We\'ve created a new vegetable patch.', ex2Hi: 'Humne ek nayi sabzi ki kyaari banaayi hai.' },
    { de: 'gesetzlich', pos: 'adjective', level: 'B2', register: 'written', en: 'legal, statutory', hi: 'कानूनी', ex: 'Das ist gesetzlich vorgeschrieben.', exEn: 'That is legally required.', exHi: 'Yeh kaanoonan avashyak hai.', ex2: 'Sie haben die gesetzlichen Regeln befolgt.', ex2En: 'They\'ve followed the legal rules.', ex2Hi: 'Unhone kaanooni niyamon ka paalan kiya hai.' },
    { de: 'Getreide', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'grain, cereal', hi: 'अनाज', ex: 'Die Einfuhr von Getreide stieg.', exEn: 'The import of grain rose.', exHi: 'Anaaj ka aayaat badha.', ex2: 'Sie haben Getreide angebaut.', ex2En: 'They\'ve grown grain.', ex2Hi: 'Unhone anaaj ugaaya hai.' },
    { de: 'grafisch', pos: 'adjective', level: 'B2', register: 'written', en: 'graphic, graphical', hi: 'ग्राफिकल', ex: 'Die Daten wurden grafisch dargestellt.', exEn: 'The data was presented graphically.', exHi: 'Data ko graphical roop mein prastut kiya gaya.', ex2: 'Sie haben eine grafische Übersicht erstellt.', ex2En: 'They\'ve created a graphical overview.', ex2Hi: 'Unhone ek graphical overview banaayi hai.' },
    { de: 'Grenzgebiet', art: 'das', gender: 'n', plural: 'Grenzgebiete', pos: 'noun', level: 'B2', register: 'written', en: 'border region', hi: 'सीमा क्षेत्र', ex: 'Das Grenzgebiet war streng bewacht.', exEn: 'The border region was strictly guarded.', exHi: 'Seemaa kshetra ki sakhti se pahre ki gayi.', ex2: 'Sie haben das Grenzgebiet besucht.', ex2En: 'They\'ve visited the border region.', ex2Hi: 'Unhone seemaa kshetra ka daura kiya hai.' },
    { de: 'Grenzkontrolle', art: 'die', gender: 'f', plural: 'Grenzkontrollen', pos: 'noun', level: 'B2', register: 'both', en: 'border control', hi: 'सीमा जांच', ex: 'Morgen werde ich zur Grenzkontrolle fahren.', exEn: 'Tomorrow, I\'ll drive to the border control.', exHi: 'Kal, main seemaa jaanch ke liye jaaungi.', ex2: 'Die Grenzkontrolle dauerte eine Stunde.', ex2En: 'The border control took an hour.', ex2Hi: 'Seemaa jaanch mein ek ghanta laga.' },
    { de: 'Grenzsoldat/in', art: 'der/die', gender: 'm/f', plural: 'Grenzsoldaten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'border guard', hi: 'सीमा प्रहरी', ex: 'Der Grenzsoldat wird wohl da sein.', exEn: 'The border guard is probably there.', exHi: 'Seemaa prahari shaayad wahaan hoga.', ex2: 'Die Grenzsoldatin überprüfte die Pässe.', ex2En: 'The border guard checked the passports.', ex2Hi: 'Seemaa prahari ne passport jaanche.' },
    { de: 'großteils', pos: 'adverb', level: 'B2', register: 'both', en: 'largely, for the most part', hi: 'ज़्यादातर', ex: 'Das Projekt ist großteils fertig.', exEn: 'The project is largely finished.', exHi: 'Project zyaadatar poora ho chuka hai.', ex2: 'Wir haben großteils zugestimmt.', ex2En: 'We\'ve largely agreed.', ex2Hi: 'Humne zyaadatar sahmati di hai.' },
    { de: 'Hinterhof', art: 'der', gender: 'm', plural: 'Hinterhöfe', pos: 'noun', level: 'B2', register: 'both', en: 'backyard', hi: 'पिछवाड़ा', ex: 'Die Kinder spielten im Hinterhof.', exEn: 'The children played in the backyard.', exHi: 'Bachche pichhwaade mein khel rahe the.', ex2: 'Sie haben den Hinterhof renoviert.', ex2En: 'They\'ve renovated the backyard.', ex2Hi: 'Unhone pichhwaade ka naveenikaran kiya hai.' },
    { de: 'Höhepunkt', art: 'der', gender: 'm', plural: 'Höhepunkte', pos: 'noun', level: 'B2', register: 'both', en: 'climax, highlight', hi: 'चरम बिंदु', ex: 'Das war der Höhepunkt des Abends.', exEn: 'That was the highlight of the evening.', exHi: 'Yeh shaam ka charam bindu tha.', ex2: 'Sie haben den Höhepunkt der Reise genossen.', ex2En: 'They\'ve enjoyed the highlight of the trip.', ex2Hi: 'Unhone yatra ke charam bindu ka aanand liya hai.' },
    { de: 'Holzplatte', art: 'die', gender: 'f', plural: 'Holzplatten', pos: 'noun', level: 'B2', register: 'both', en: 'wooden board', hi: 'लकड़ी का तख्ता', ex: 'Die Holzplatte war sehr stabil.', exEn: 'The wooden board was very stable.', exHi: 'Lakdi ka takhta bahut mazboot tha.', ex2: 'Er hat die Holzplatte selbst gebaut.', ex2En: 'He\'s built the wooden board himself.', ex2Hi: 'Usne khud lakdi ka takhta banaaya hai.' },
    { de: 'immerwährend', pos: 'adjective', level: 'B2', register: 'written', en: 'everlasting, perpetual', hi: 'सदाबहार', ex: 'Sie wünschten immerwährenden Frieden.', exEn: 'They wished for everlasting peace.', exHi: 'Unhone sadaabahar shaanti ki kaamna ki.', ex2: 'Das Land erklärte immerwährende Neutralität.', ex2En: 'The country declared perpetual neutrality.', ex2Hi: 'Desh ne sadaabahar tatasthata ghoshit ki.' },
    { de: 'Immobilie', art: 'die', gender: 'f', plural: 'Immobilien', pos: 'noun', level: 'B2', register: 'both', en: 'property, real estate', hi: 'संपत्ति', ex: 'Die Immobilie kostete viel Geld.', exEn: 'The property cost a lot of money.', exHi: 'Sampatti mein bahut paisa laga.', ex2: 'Sie haben eine Immobilie gekauft.', ex2En: 'They\'ve bought a property.', ex2Hi: 'Unhone ek sampatti khareedi hai.' },
    { de: 'initiieren', pos: 'verb', level: 'B2', register: 'written', en: 'to initiate', hi: 'शुरू करना', ex: 'Sie initiierte das Projekt.', exEn: 'She initiated the project.', exHi: 'Usne project shuru kiya.', ex2: 'Er hat eine neue Reform initiiert.', ex2En: 'He\'s initiated a new reform.', ex2Hi: 'Usne ek nayi sudhaar shuru ki hai.', conj: { praesens: 'initiiert', praeteritum: 'initiierte', perfekt: 'hat initiiert' } },
    { de: 'Jugendzeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'youth, adolescence', hi: 'किशोरावस्था', ex: 'Er erinnerte sich an seine Jugendzeit.', exEn: 'He remembered his youth.', exHi: 'Usne apni kishoraavastha ko yaad kiya.', ex2: 'Wir haben viel über unsere Jugendzeit gesprochen.', ex2En: 'We\'ve talked a lot about our youth.', ex2Hi: 'Humne apni kishoraavastha ke baare mein bahut baat ki hai.' },
    { de: 'Kaffeehaus', art: 'das', gender: 'n', plural: 'Kaffeehäuser', pos: 'noun', level: 'B2', register: 'both', en: 'coffee house', hi: 'कॉफी हाउस', ex: 'Das Kaffeehaus war voller Studenten.', exEn: 'The coffee house was full of students.', exHi: 'Coffee house students se bhara tha.', ex2: 'Wir haben uns im Kaffeehaus getroffen.', ex2En: 'We\'ve met at the coffee house.', ex2Hi: 'Hum coffee house mein mile hain.' },
    { de: 'Kampfkunst', art: 'die', gender: 'f', plural: 'Kampfkünste', pos: 'noun', level: 'B2', register: 'both', en: 'martial art', hi: 'मार्शल आर्ट', ex: 'Er übt eine traditionelle Kampfkunst.', exEn: 'He practises a traditional martial art.', exHi: 'Woh ek paramparik martial art karta hai.', ex2: 'Sie hat eine neue Kampfkunst gelernt.', ex2En: 'She\'s learned a new martial art.', ex2Hi: 'Usne ek naya martial art seekha hai.' },
    { de: 'Kanzler/in', art: 'der/die', gender: 'm/f', plural: 'Kanzler/innen', pos: 'noun', level: 'B2', register: 'written', en: 'chancellor', hi: 'चांसलर', ex: 'Der neue Kanzler wird schon informiert sein.', exEn: 'The new chancellor is probably already informed.', exHi: 'Naya chancellor shaayad pehle se hi soochit hoga.', ex2: 'Die Kanzlerin hielt eine wichtige Rede.', ex2En: 'The chancellor gave an important speech.', ex2Hi: 'Chancellor ne ek mahatvapurn bhaashan diya.' },
    { de: 'Kartoffelsuppe', art: 'die', gender: 'f', plural: 'Kartoffelsuppen', pos: 'noun', level: 'B2', register: 'both', en: 'potato soup', hi: 'आलू का सूप', ex: 'Die Kartoffelsuppe schmeckte köstlich.', exEn: 'The potato soup tasted delicious.', exHi: 'Aaloo ka soup bahut swaadisht tha.', ex2: 'Sie hat Kartoffelsuppe gekocht.', ex2En: 'She\'s cooked potato soup.', ex2Hi: 'Usne aaloo ka soup banaaya hai.' },
    { de: 'Klassenbeste/r', art: 'der/die', gender: 'm/f', plural: 'Klassenbeste', pos: 'noun', level: 'B2', register: 'both', en: 'top of the class', hi: 'कक्षा का सर्वश्रेष्ठ', ex: 'Unser Klassenbester hat sein Examen bestanden.', exEn: 'Our top student passed his exam.', exHi: 'Hamara sabse acha student apni pareeksha mein pass ho gaya.', ex2: 'Sie war schon immer die Klassenbeste.', ex2En: 'She was always the top of the class.', ex2Hi: 'Woh hamesha kaksha ki sarvashreshtha rahi hai.' },
    { de: 'Knecht', art: 'der', gender: 'm', plural: 'Knechte', pos: 'noun', level: 'B2', register: 'written', en: 'farmhand, servant', hi: 'नौकर', ex: 'Der Knecht arbeitete auf dem Hof.', exEn: 'The farmhand worked on the farm.', exHi: 'Naukar khet mein kaam karta tha.', ex2: 'Sie haben einen neuen Knecht eingestellt.', ex2En: 'They\'ve hired a new farmhand.', ex2Hi: 'Unhone ek naya naukar rakha hai.' },
    { de: 'komfortabel', pos: 'adjective', level: 'B2', register: 'both', en: 'comfortable', hi: 'आरामदायक', ex: 'Das Hotelzimmer war sehr komfortabel.', exEn: 'The hotel room was very comfortable.', exHi: 'Hotel ka kamra bahut aaraamdayak tha.', ex2: 'Sie haben eine komfortable Wohnung gefunden.', ex2En: 'They\'ve found a comfortable flat.', ex2Hi: 'Unhein ek aaraamdayak flat mila hai.' },
    { de: 'kommentieren', pos: 'verb', level: 'B2', register: 'both', en: 'to comment', hi: 'टिप्पणी करना', ex: 'Er kommentierte die Nachrichten.', exEn: 'He commented on the news.', exHi: 'Usne khabaron par tippani ki.', ex2: 'Sie hat den Artikel kommentiert.', ex2En: 'She\'s commented on the article.', ex2Hi: 'Usne lekh par tippani ki hai.', conj: { praesens: 'kommentiert', praeteritum: 'kommentierte', perfekt: 'hat kommentiert' } },
    { de: 'Kontrollsystem', art: 'das', gender: 'n', plural: 'Kontrollsysteme', pos: 'noun', level: 'B2', register: 'written', en: 'control system', hi: 'नियंत्रण प्रणाली', ex: 'Das Kontrollsystem funktionierte einwandfrei.', exEn: 'The control system functioned flawlessly.', exHi: 'Niyantran pranaali bina galti ke chali.', ex2: 'Sie haben das Kontrollsystem verbessert.', ex2En: 'They\'ve improved the control system.', ex2Hi: 'Unhone niyantran pranaali behtar ki hai.' },
    { de: 'Krieger/in', art: 'der/die', gender: 'm/f', plural: 'Krieger/innen', pos: 'noun', level: 'B2', register: 'written', en: 'warrior', hi: 'योद्धा', ex: 'Der Krieger kämpfte tapfer.', exEn: 'The warrior fought bravely.', exHi: 'Yoddha ne bahaduri se ladaai ki.', ex2: 'Sie haben die Kriegerin geehrt.', ex2En: 'They\'ve honoured the warrior.', ex2Hi: 'Unhone yoddha ka samman kiya hai.' },
    { de: 'Langlauf', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'cross-country skiing', hi: 'क्रॉस-कंट्री स्कीइंग', ex: 'Sie machen jeden Winter Langlauf.', exEn: 'They go cross-country skiing every winter.', exHi: 'Woh har sardi mein cross-country skiing karte hain.', ex2: 'Er hat Langlauf gelernt.', ex2En: 'He\'s learned cross-country skiing.', ex2Hi: 'Usne cross-country skiing seekhi hai.' },
    { de: 'Laufbahn', art: 'die', gender: 'f', plural: 'Laufbahnen', pos: 'noun', level: 'B2', register: 'both', en: 'career, track', hi: 'करियर', ex: 'Ihre Laufbahn begann in Berlin.', exEn: 'Her career began in Berlin.', exHi: 'Uska career Berlin mein shuru hua.', ex2: 'Er hat eine erfolgreiche Laufbahn gehabt.', ex2En: 'He\'s had a successful career.', ex2Hi: 'Uska career safal raha hai.' },
    { de: 'Laute', art: 'die', gender: 'f', plural: 'Lauten', pos: 'noun', level: 'B2', register: 'written', en: 'lute, sounds', hi: 'ल्यूट, ध्वनि', ex: 'Er spielte eine alte Laute.', exEn: 'He played an old lute.', exHi: 'Usne ek puraana lute bajaaya.', ex2: 'Wir haben seltsame Laute gehört.', ex2En: 'We\'ve heard strange sounds.', ex2Hi: 'Humne ajeeb aawazein suni hain.' },
    { de: 'Lautstärke', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'volume, loudness', hi: 'आवाज़ की तीव्रता', ex: 'Die Lautstärke war zu hoch.', exEn: 'The volume was too high.', exHi: 'Aawaaz ki teevrata bahut zyaada thi.', ex2: 'Sie haben die Lautstärke reduziert.', ex2En: 'They\'ve reduced the volume.', ex2Hi: 'Unhone aawaaz kam ki hai.' },
    { de: 'Lexikonartikel', art: 'der', gender: 'm', plural: 'Lexikonartikel', pos: 'noun', level: 'B2', register: 'written', en: 'encyclopaedia article', hi: 'विश्वकोश लेख', ex: 'Der Lexikonartikel war sehr detailliert.', exEn: 'The encyclopaedia article was very detailed.', exHi: 'Vishwakosh lekh bahut vistrit tha.', ex2: 'Sie hat einen Lexikonartikel geschrieben.', ex2En: 'She\'s written an encyclopaedia article.', ex2Hi: 'Usne ek vishwakosh lekh likha hai.' },
    { de: 'Lokführer/in', art: 'der/die', gender: 'm/f', plural: 'Lokführer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'train driver', hi: 'ट्रेन चालक', ex: 'Der Lokführer stoppte den Zug.', exEn: 'The train driver stopped the train.', exHi: 'Train chalak ne train rok di.', ex2: 'Sie ist Lokführerin geworden.', ex2En: 'She\'s become a train driver.', ex2Hi: 'Woh train chalak ban gayi hai.' },
    { de: 'Machtwechsel', art: 'der', gender: 'm', plural: 'Machtwechsel', pos: 'noun', level: 'B2', register: 'written', en: 'change of power', hi: 'सत्ता परिवर्तन', ex: 'Und was ist mit dem Machtwechsel?', exEn: 'And what about the change of power?', exHi: 'Aur satta parivartan ka kya?', ex2: 'Der Machtwechsel verlief friedlich.', ex2En: 'The change of power was peaceful.', ex2Hi: 'Satta parivartan shaanti se hua.' },
    { de: 'Magd', art: 'die', gender: 'f', plural: 'Mägde', pos: 'noun', level: 'B2', register: 'written', en: 'maid', hi: 'दासी', ex: 'Die Magd arbeitete im Haushalt.', exEn: 'The maid worked in the household.', exHi: 'Daasi ghar mein kaam karti thi.', ex2: 'Sie haben eine Magd eingestellt.', ex2En: 'They\'ve hired a maid.', ex2Hi: 'Unhone ek daasi rakhi hai.' },
    { de: 'Maß', art: 'das', gender: 'n', plural: 'Maße', pos: 'noun', level: 'B2', register: 'both', en: 'measure, moderation', hi: 'माप, संयम', ex: 'Alles in Maßen ist gesund.', exEn: 'Everything in moderation is healthy.', exHi: 'Har cheez sanyam mein sehatmand hai.', ex2: 'Sie haben das richtige Maß gefunden.', ex2En: 'They\'ve found the right measure.', ex2Hi: 'Unhein sahi maap mil gayi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Futur I für Vermutungen?',
      body: [ 'German often uses werden + Infinitiv NOT to express the future, but to express probably / I suppose / I assume / he must be...' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de">Anna wird jetzt zu Hause sein.</span>', 'She is probably at home now (NOT "she will be home").']
        ]
      },
      hinglish: 'German mein <b>werden + Infinitiv</b> ka use aksar future ke liye nahi hota, balki andaaza lagane ke liye hota hai \u2014 matlab "probably" ya "mujhe lagta hai". Yahi baat shuru mein confuse karti hai.'
    },
    {
      title: 'Bedeutung: Gegenwart, nicht Zukunft',
      body: [ 'The speaker is guessing about a present fact that is unknown to them.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Rohan wird im Büro sein.</span> — I think he is in the office (right now).']
        ]
      },
      hinglish: 'Yahan speaker abhi ki kisi baat ka andaaza laga raha hai, jo use pakka pata nahi hai. Isliye matlab present ka hota hai, future ka nahi.'
    },
    {
      title: 'Unterschied zur echten Zukunft',
      body: [ 'The same grammar can mean a real future plan or a present-tense assumption — context decides.' ],
      table: {
        head: ['Real Future', 'Assumption'],
        rows: [
          ['<span class="de">Morgen werde ich nach Berlin fahren.</span>', '<span class="de">Er wird jetzt schlafen.</span> (probably)']
        ]
      },
      hinglish: 'Grammar dono cases mein bilkul same rehta hai \u2014 farak sirf context se pata chalta hai. Time word dekho: <b>morgen</b> ho to real future, aur <b>jetzt</b> ya <b>gerade</b> ho to andaaza.'
    },
    {
      title: 'Wahrscheinlichkeitsskala (Probability Scale)',
      body: [ 'A rough scale of certainty, from knowing for sure down to a soft guess. <b>d\u00fcrfte</b> is shown here only so you recognise where it sits \u2014 it gets its own treatment later.' ],
      table: {
        head: ['Certainty', 'Expression'],
        rows: [
          ['100%', 'Ich weiß.'],
          ['90%', 'Er dürfte ...'],
          ['70%', 'Er wird ...'],
          ['50%', 'Er könnte ...'],
          ['30%', 'Vielleicht ...']
        ]
      },
      hinglish: 'Yeh certainty ka ek rough scale hai \u2014 poora pata hone se lekar halke andaaze tak. <b>d\u00fcrfte</b> aur <b>k\u00f6nnte</b> yahan sirf isliye diye hain ki tumhe dikhe ki Futur I in dono ke beech kahan baithta hai; in par detail apne chapter mein aayegi.'
    },
    {
      title: 'Typische Ausdrücke (Typical Expressions)',
      body: [ 'These fixed expressions are extremely common in spoken B2 German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das wird stimmen.</span>'],
          ['<span class="de">Das wird schwierig sein.</span>'],
          ['<span class="de">Er wird Recht haben.</span>']
        ]
      },
      hinglish: 'Yeh fixed expressions spoken B2 German mein bahut common hain.'
    },
    {
      title: 'Gesprochenes Deutsch (Spoken German)',
      body: [ 'Native speakers use this construction constantly in casual conversation.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das wird teuer.</span> — probably expensive'],
          ['<span class="de">Er wird müde sein.</span>'],
          ['<span class="de">Sie wird im Urlaub sein.</span>']
        ]
      },
      hinglish: 'Native speakers casual baat mein yeh construction bahut use karte hain, isliye listening mein ise pehchaanna zaroori hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from assuming every werden + Infinitiv sentence is about the future, or confusing it with Futur II.' ],
      mistakes: [
        { wrong: 'Anna wird jetzt zu Hause ist.', right: 'Anna wird jetzt zu Hause sein.', why: 'After werden the second verb is always a bare infinitive (sein), never a conjugated form.' },
        { wrong: 'Er wird jetzt arbeiten morgen.', right: 'Er wird morgen arbeiten. (or) Er wird jetzt arbeiten.', why: 'Mixing "jetzt" and "morgen" in the same sentence creates a contradictory, unclear timeframe.' },
        { wrong: 'Er wird wohl in Berlin.', right: 'Er wird wohl in Berlin sein.', why: 'The infinitive cannot be dropped \u2014 werden always needs its second verb at the end of the clause, even when the meaning is just a guess.' },
        { wrong: 'Er wird jetzt schlafen, wahrscheinlich.', right: 'Er wird jetzt wohl schlafen.', why: 'The assumption particle (wohl, wahrscheinlich) belongs in the middle of the clause, before the infinitive \u2014 it is not tacked on at the end.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki <b>werden</b> ke baad plain infinitive nahi lagaya jaata, ya woh infinitive chhod diya jaata hai, ya andaaze wala shabd galat jagah rakh diya jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Recognizing the assumption-reading of Futur I instantly improves listening comprehension and natural speaking at B2.' ],
      note: 'Memory trick: See werden + Infinitiv. Ask: Future? OR Guess? Context gives the answer.',
      hinglish: 'Futur I ke assumption-reading ko turant pehchaanna B2 par listening comprehension aur natural speaking dono behtar banaata hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Analyse: Was der Machtwechsel bedeuten wird',
    titleEn: 'Analysis: what the change of power will mean',
    tokens: [
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Grenzöffnung', role: 'plain', en: 'border opening', hi: 'सीमा खोलना', type: 'Noun · fem.' },
      { w: 'erwarten', role: 'plain', en: 'expect', hi: 'उम्मीद करते हैं', type: 'Verb · erwarten' },
      { w: 'Experten', role: 'plain', en: 'experts', hi: 'विशेषज्ञ', type: 'Noun · plural' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'raschen', role: 'plain', en: 'rapid', hi: 'तेज़', type: 'Adjective' },
      { w: 'Machtwechsel', role: 'plain', en: 'change of power (Satzende)', hi: 'सत्ता परिवर्तन (Satzende)', type: 'Noun · masc.', why: 'der Machtwechsel (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Grenzkontrollen', role: 'plain', en: 'border controls', hi: 'सीमा जाँच', type: 'Noun · plural', why: 'die Grenzkontrolle (this chapter).' },
      { w: 'werden', role: 'r-verb', en: 'will (Futur I, Vermutung)', hi: 'होंगी (Futur I, अनुमान)', type: 'Verb · werden (Futur I, Linke Klammer)', why: 'werden + Infinitiv here expresses a confident PREDICTION about the future, not just a plain fact (this chapter).' },
      { w: 'vermutlich', role: 'plain', en: 'presumably', hi: 'संभवतः', type: 'Adverb' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'bald', role: 'plain', en: 'soon', hi: 'जल्द', type: 'Adverb' },
      { w: 'wegfallen', role: 'r-verb', en: 'disappear (rechte Klammer, Futur I)', hi: 'ख़त्म हो जाना (दायाँ कोष्ठक)', type: 'Verb · wegfallen (Infinitiv, Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'Grenzsoldaten', role: 'plain', en: 'border soldiers', hi: 'सीमा सैनिक', type: 'Noun · plural', why: 'der/die Grenzsoldat/in (this chapter).' },
      { w: 'werden', role: 'r-verb', en: 'will (Futur I)', hi: 'होंगे (Futur I)', type: 'Verb · werden (Futur I, Linke Klammer)' },
      { w: 'wohl', role: 'plain', en: 'probably', hi: 'शायद', type: 'Adverb' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel · Akk.' },
      { w: 'Beruf', role: 'plain', en: 'profession (Satzende)', hi: 'पेशा (Satzende)', type: 'Noun · masc.' },
      { w: 'wechseln', role: 'r-verb', en: 'change (rechte Klammer)', hi: 'बदलना (दायाँ कोष्ठक)', type: 'Verb · wechseln (Infinitiv, Rechte Klammer)' },
      { w: 'müssen', role: 'r-verb', en: 'have to (rechte Klammer, Satzende)', hi: 'पड़ेगा (दायाँ कोष्ठक, Satzende)', type: 'Verb · Modalverb (Rechte Klammer, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'zukünftiger', role: 'plain', en: 'future', hi: 'भविष्य का', type: 'Adjective' },
      { w: 'Kanzler', role: 'plain', en: 'chancellor', hi: 'चांसलर', type: 'Noun · masc.', why: 'der/die Kanzler/in (this chapter).' },
      { w: 'wird', role: 'r-verb', en: 'will (Futur I)', hi: 'होगा (Futur I)', type: 'Verb · werden (Futur I, Linke Klammer)' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'vermutlich', role: 'plain', en: 'presumably', hi: 'संभवतः', type: 'Adverb' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'schnelle', role: 'plain', en: 'quick', hi: 'तेज़', type: 'Adjective' },
      { w: 'Wiedervereinigung', role: 'plain', en: 'reunification (Satzende)', hi: 'पुनर्मिलन (Satzende)', type: 'Noun · fem.' },
      { w: 'einsetzen', role: 'r-verb', en: 'advocate (rechte Klammer, Satzende)', hi: 'समर्थन करना (दायाँ कोष्ठक)', type: 'Verb · sich einsetzen (Infinitiv, Rechte Klammer, Satzende)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ लोग', type: 'Pronoun' },
      { w: 'werden', role: 'r-verb', en: 'will (Futur I)', hi: 'शायद', type: 'Verb · werden (Futur I)', why: 'Futur I again expresses an assumption, here about the future, not a fact (this chapter).' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Entwicklung', role: 'plain', en: 'development', hi: 'विकास', type: 'Noun · fem.' },
      { w: 'wohl', role: 'plain', en: 'probably', hi: 'शायद', type: 'Adverb' },
      { w: 'erst', role: 'plain', en: 'only', hi: 'तभी', type: 'Adverb' },
      { w: 'Jahre', role: 'plain', en: 'years', hi: 'सालों', type: 'Noun · plural' },
      { w: 'später', role: 'plain', en: 'later', hi: 'बाद में', type: 'Adverb' },
      { w: 'vollständig', role: 'plain', en: 'fully (Satzende)', hi: 'पूरी तरह (Satzende)', type: 'Adjective' },
      { w: 'verstehen', role: 'r-verb', en: 'understand (Satzende)', hi: 'समझना (Satzende)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Ökonomen', role: 'plain', en: 'economists', hi: 'अर्थशास्त्री', type: 'Noun · plural' },
      { w: 'warnen', role: 'plain', en: 'warn', hi: 'चेतावनी देते हैं', type: 'Verb · warnen' },
      { w: 'derweil', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'davor', role: 'plain', en: 'against it', hi: 'इसके ख़िलाफ़', type: 'Pronominaladverb' },
      { w: ',', plain: true },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'wirtschaftlichen', role: 'plain', en: 'economic', hi: 'आर्थिक', type: 'Adjective' },
      { w: 'Aufwand', role: 'plain', en: 'effort (Satzende)', hi: 'लागत (Satzende)', type: 'Noun · masc.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'unterschätzen', role: 'plain', en: 'underestimate (Satzende)', hi: 'कम आँकना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'After the border opening, experts expect a rapid change of power. The border controls will presumably disappear quite soon. Some border soldiers will probably have to change their profession. A future chancellor will presumably advocate for a quick reunification. Some will probably only fully understand this development years later. Economists, meanwhile, warn against underestimating the economic effort involved.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_029_L001', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie wird unser neuer Chef wohl sein?', en: 'Timo, what will our new boss probably be like?' },
      { id: 'B2_029_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nach dem Interview würde ich sagen, er wird streng sein.', en: 'After the interview I\'d say he\'ll be strict.' },
      { id: 'B2_029_L003', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich glaube eher, er wird freundlich sein, aber sehr genau.', en: 'I rather think he\'ll be friendly, but very precise.' },
      { id: 'B2_029_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kompetent wird er auf jeden Fall sein müssen, sonst hätten sie ihn nicht genommen.', en: 'He\'ll definitely have to be competent, otherwise they wouldn\'t have hired him.' }
    ],
    transcript: 'Timo, wie wird unser neuer Chef wohl sein? Nach dem Interview würde ich sagen, er wird streng sein. Ich glaube eher, er wird freundlich sein, aber sehr genau. Kompetent wird er auf jeden Fall sein müssen, sonst hätten sie ihn nicht genommen.',
    translation: 'Timo, what will our new boss probably be like? After the interview I\'d say he\'ll be strict. I rather think he\'ll be friendly, but very precise. He\'ll definitely have to be competent, otherwise they wouldn\'t have hired him.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'wird' },
      { w: 'unser' },
      { w: 'neuer' },
      { w: 'Chef' },
      { w: 'wohl' },
      { w: 'sein' },
      { w: '?', plain: true },
      { w: 'Nach' },
      { w: 'dem' },
      { w: 'Interview' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'sagen' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'wird' },
      { w: 'streng' },
      { w: 'sein' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'glaube' },
      { w: 'eher' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'wird' },
      { w: 'freundlich' },
      { w: 'sein' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sehr' },
      { w: 'genau' },
      { w: '.', plain: true },
      { w: 'Kompetent' },
      { w: 'wird' },
      { w: 'er' },
      { w: 'auf' },
      { w: 'jeden' },
      { w: 'Fall' },
      { w: 'sein' },
      { w: 'müssen' },
      { w: ',', plain: true },
      { w: 'sonst' },
      { w: 'hätten' },
      { w: 'sie' },
      { w: 'ihn' },
      { w: 'nicht' },
      { w: 'genommen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was vermutet Timo über den neuen Chef?', qEn: 'What does Timo guess about the new boss?', options: ['er wird faul sein', 'er wird streng sein', 'er wird abwesend sein', 'er wird unfreundlich sein'], optionsEn: ['he will be lazy', 'he will be strict', 'he will be absent', 'he will be unfriendly'], answer: 1,
        explain: '"… er wird streng sein."' },
      { q: 'Was muss der neue Chef laut Timo auf jeden Fall sein?', qEn: 'What must the new boss be in any case, according to Timo?', options: ['jung', 'kompetent', 'laut', 'still'], optionsEn: ['young', 'competent', 'loud', 'quiet'], answer: 1,
        explain: '"Kompetent wird er auf jeden Fall sein müssen."' }
    ]
  },

  speaking: [
    { task: "Ein Kollege fragt, wie der neue Chef wohl sein wird.", taskEn: "A colleague asks what the new boss will probably be like.", de: "Nach dem Interview würde ich sagen, er wird streng sein.", en: "After the interview I'd say he'll be strict." },
    { task: "Du siehst ihn anders. Widersprich freundlich.", taskEn: "You see him differently. Disagree kindly.", de: "Ich glaube eher, er wird freundlich sein, aber sehr genau.", en: "I rather think he'll be friendly, but very precise." },
    { task: "Eine Kollegin ist um 14 Uhr nicht am Platz. Vermute, wo sie ist.", taskEn: "A colleague isn't at her desk at 2 p.m. Guess where she is.", de: "Sie wird beim Familienbesuch sein, sie hatte heute frei.", en: "She'll be at the family visit, she had today off." },
    { task: "Ein Freund fragt, wie das Examen gelaufen sein wird.", taskEn: "A friend asks how the exam will have gone.", de: "Er wird gut abgeschnitten haben, er hat wochenlang gelernt.", en: "He'll have done well, he studied for weeks." },
    { task: "Deine Chefin fragt, ob sich das neue Verfahren durchsetzt.", taskEn: "Your boss asks whether the new method will catch on.", de: "Es wird sich durchsetzen, weil es günstiger ist.", en: "It will catch on, because it's cheaper." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Email (6-8 sentences): Write to a colleague, guessing why someone hasn\'t responded, using Futur I for assumptions (with jetzt/gerade/wohl) and at least one real future plan (with morgen).\n\nTASK 2 — Opinion text (6-8 sentences): Share your opinion on a current topic, using expressions like "Das wird stimmen" and "Er wird Recht haben" naturally.',
    starters: ['Er wird jetzt …', 'Nach meinem Erachten wird …'],
    placeholder: 'Rohan antwortet nicht. Er wird wohl gerade beschäftigt sein …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'What does "Anna wird jetzt zu Hause sein" mean?',
      options: ['She is probably at home now', 'She will be home (in the future)', 'She was at home yesterday'],
      answer: 0,
      explain: 'With the present-time word "jetzt", werden + Infinitiv expresses an assumption about the present, not the future.'
    },
    gap: {
      sentence: ['Morgen ', ' ich nach Berlin fahren.'],
      gaps: [ { answer: 'werde', accepts: ['werde'] } ],
      explain: 'With the future-time word "morgen", "werde...fahren" is a real future plan, not an assumption.'
    },
    match: {
      q: 'Match each sentence to its meaning.',
      pairs: [
        { noun: 'Er wird jetzt schlafen.', art: 'Assumption (probably)' },
        { noun: 'Morgen werde ich arbeiten.', art: 'Real future' },
        { noun: 'Das wird stimmen.', art: 'Fixed assumption expression' },
        { noun: 'Sie wird im Urlaub sein.', art: 'Assumption (probably)' }
      ]
    },
    builder: {
      target: 'Build: "He is probably in the office." (assumption)',
      bank: ['Er', 'wird', 'im', 'Büro', 'sein', '.'],
      answer: ['Er', 'wird', 'im', 'Büro', 'sein', '.'],
      roles: { 'wird': 'r-vermutung', 'sein': 'r-vermutung' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er wird jetzt arbeiten morgen.',
      right: 'Er wird jetzt arbeiten. / Er wird morgen arbeiten.',
      explain: 'Mixing "jetzt" and "morgen" in one sentence creates a contradictory timeframe — choose one context.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Futur I often express at B2, besides the future?', options: ['An assumption/probability about the present', 'A command', 'A past habit'], answer: 0,
      explain: 'werden + Infinitiv frequently expresses a guess about the present, not a future plan.' },
    { q: 'Which word signals the assumption reading?', options: ['jetzt / gerade', 'morgen', 'nächste Woche'], answer: 0,
      explain: 'Present-time words like "jetzt" and "gerade" signal that werden + Infinitiv means "probably".' },
    { q: 'Which word signals the real future reading?', options: ['morgen', 'jetzt', 'gerade'], answer: 0,
      explain: 'Future-time words like "morgen" signal a genuine future plan.' },
    { q: 'What does "Das wird stimmen" mean?', options: ['That\'s probably right', 'That will happen tomorrow', 'That was correct yesterday'], answer: 0,
      explain: 'This is a common fixed expression using the assumption reading of Futur I.' },
    { q: 'Is Futur II taught in this chapter?', options: ['No — only briefly mentioned as a preview', 'Yes, in full detail', 'Yes, alongside Konjunktiv II'], answer: 0,
      explain: 'Futur II is only mentioned as a preview of a later topic — this chapter teaches only Futur I für Vermutungen.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-vermutung', html: 'werden + Infinitiv is not always about the future — with jetzt/gerade/wohl, it expresses an assumption about the present.' },
    { c: 'r-vermutung', html: 'The same grammar (werden + Infinitiv) can mean a real future plan with morgen/nächste Woche — context, not grammar, decides.' },
    { c: 'r-vermutung', html: 'Fixed expressions like "Das wird stimmen" and "Er wird Recht haben" use this assumption reading and are extremely common in spoken German.' }
  ],
  revisionTips: [
    'Listen for "wird" in conversations and check the surrounding time-word — is it jetzt/gerade (assumption) or morgen/nächste Woche (future)?',
    'Practise making guesses about people around you using "wird...sein" — a genuinely useful daily habit.',
    'Keep Futur II, Konjunktiv II, and modal-verb probability (dürfte) for later — this chapter is only about Futur I.'
  ]
};

window.CHAPTER = CHAPTER;
