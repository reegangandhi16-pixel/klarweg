/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 55
   "Modalpartikeln: doch / ja" — spoken-German particles that
   shift the speaker's attitude/expectation without changing the
   factual meaning. Teaches ONLY doch and ja; does NOT teach
   eben, halt, mal, denn, wohl, eigentlich (later chapters).
   IMPORTANT: dialogue uses ONLY Ines and Timo.
   Vocabulary source: uploaded Chapter 55 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-55-modalpartikeln-doch-ja',
  phase: 'B2 · Phase 6',
  number: 55,
  title: 'Modalpartikeln: doch / ja',
  titleEn: 'Modal particles: doch / ja',
  description: 'Du kommst. Du kommst doch. Du kommst ja. Same facts — different feeling. Learn what native speakers really mean.',
  xp: 680,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 56, title: 'Modalpartikeln: eben / halt', titleEn: 'Modal particles: eben / halt' , href: 'chapter-b2-56-modalpartikeln-eben-halt.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Same facts. <em>Different feeling.</em>',
    intro: 'Ines can\'t find her keys, and Timo is sure they\'re on the table — they\'re indeed not there — until he suggests the jacket and, well, there they indeed are. doch and ja carry all the extra feeling the plain facts can\'t.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how doch and ja shift attitude, never the facts'
    ],
    scene: 'Vor der Präsentation',
    femaleSpeakers: ['Ines'],
    dialogue: [
      { speaker: 'Ines', tokens: [
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'denn', role: 'r-akkusativ', en: 'then', hi: 'आख़िर', pron: 'den', type: 'Modalpartikel', why: 'denn = softens a question, expresses curiosity (this chapter).', ex: 'Wo sind denn die Schlüssel?', exEn: 'Where are the keys, then?' },
        { w: 'meine', role: 'r-subject', en: 'my (masc.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Schlüssel', role: 'r-subject', en: 'keys', hi: 'चाबियाँ', pron: 'SHLÜ-sel', type: 'Noun · plural' },
        { w: '?', plain: true }
      ], en: 'Where are my keys, then?', hi: 'Aakhir meri chaabiyaan kahaan hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'liegen', role: 'r-verb', en: 'lie', hi: 'हैं', pron: 'LEE-gen', type: 'Verb · liegen' },
        { w: 'doch', role: 'r-akkusativ', en: 'surely', hi: 'यहीं तो', pron: 'dokh', type: 'Modalpartikel', why: 'doch = emphasizes an obvious/known fact (this chapter).', ex: 'Die liegen doch auf dem Tisch.', exEn: 'They are surely lying on the table.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition + place' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Tisch', role: 'r-dativ', en: 'table (dat.)', hi: 'मेज़ पर', pron: 'tish', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'They are surely lying on the table.', hi: 'Woh yaheen toh mez par hain.' },
      { speaker: 'Ines', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'da', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb · place' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ja', role: 'r-akkusativ', en: 'indeed', hi: 'सच में', pron: 'yah', type: 'Modalpartikel', why: 'ja = expresses shared assumption/reassurance, mild emphasis (this chapter).', ex: 'Da sind sie ja nicht.', exEn: 'They are indeed not there.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'They are indeed not there.', hi: 'Woh sach mein wahaan nahi hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'denn', role: 'r-akkusativ', en: 'then', hi: 'आख़िर', pron: 'den', type: 'Modalpartikel' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Jacke', role: 'r-dativ', en: 'jacket (dat.)', hi: 'जैकेट में', pron: 'YA-kuh', type: 'Noun · fem. dat.' },
        { w: 'geschaut', role: 'r-verb', en: 'looked', hi: 'देखा', pron: 'ge-SHOWT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Have you looked in the jacket, then?', hi: 'Aakhir kya tumne jacket mein dekha?' },
      { speaker: 'Ines', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'oh', hi: 'अरे', pron: 'ahkh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'doch', role: 'r-akkusativ', en: 'indeed', hi: 'वाकई', pron: 'dokh', type: 'Modalpartikel', why: 'doch = confirms/agrees with realization (this chapter).', ex: 'Das ist doch eine gute Idee.', exEn: 'That is indeed a good idea.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-akkusativ', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'Oh, that is indeed a good idea!', hi: 'Are, yeh wakai achha vichaar hai!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Na', role: 'r-subject', en: 'well', hi: 'अच्छा', pron: 'nah', type: 'Interjection' },
        { w: 'siehst', role: 'r-verb', en: 'see', hi: 'देखो', pron: 'ZEEST', type: 'Verb · sehen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'ja', role: 'r-akkusativ', en: 'indeed', hi: 'सच में', pron: 'yah', type: 'Modalpartikel' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Jacke', role: 'r-dativ', en: 'jacket (dat.)', hi: 'जैकेट में', pron: 'YA-kuh', type: 'Noun · fem. dat.' },
        { w: '!', plain: true }
      ], en: 'Well, see, they are indeed in the jacket!', hi: 'Achha dekho, woh sach mein jacket mein hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Du kommst.</span> → <span class="de r-doch">Du kommst doch.</span> → <span class="de r-ja">Du kommst ja.</span> Same fact — different feeling. Modalpartikeln <span class="de r-doch">doch</span> and <span class="de r-ja">ja</span> shift the speaker\'s attitude, expectation, or shared knowledge — never the literal information.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALPARTIKELN doch and ja at B2 level: these particles do NOT change factual meaning — they signal the speaker\'s attitude, expectation, shared knowledge, reminder, contradiction, encouragement, or explanation. Examples: "Du kennst ihn doch" (reminder), "Das stimmt doch nicht!" (contradiction), "Komm doch mit!" (encouragement), "Setz dich doch" (softened request), "Das weißt du ja" (shared knowledge), "Es ist ja kalt" (obvious information), "Er ist ja krank" (explanation). ' +
    'Do NOT expect or require eben, halt, mal (as an independent particle), denn, wohl, or eigentlich — those are separate topics taught in later chapters; do not flag their absence. Do NOT treat "ja" as always meaning "yes" or "doch" as always meaning "however" — context decides. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that doch/ja are placed in the middle field (not sentence-initial as a stressed word) and that their use matches one of the taught functions (reminder, contradiction, encouragement, softening, shared knowledge, obvious information, explanation).\n' +
    '- Do not flag "ja" used as a simple answer word ("Ja, gerne") as an error — that is a separate, correct use of the same word, not the Modalpartikel.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Nuance check:</b> one sentence on whether the learner\'s doch/ja choices match the intended attitude (reminder, contradiction, encouragement, shared knowledge, explanation).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly hear the difference between doch and ja. Ready for eben/halt/mal next.',
    mid: 'Good. Re-read the Master Usage Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: don\'t translate literally, listen for the speaker\'s attitude.'
  },

  parserSentence: [
    { w: 'Du', role: 'plain' }, { w: 'kommst', role: 'plain' }, { w: 'doch', role: 'r-doch' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: doch and ja shift attitude, not facts.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ines and Timo prepare a presentation and discuss an internship using doch and ja naturally.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the five main uses of doch and five main uses of ja, and the difference in meaning.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a WhatsApp conversation and workplace dialogue full of doch and ja.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify reminder, contradiction, encouragement, shared knowledge, and explanation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Invite, disagree politely, give advice, and remind using doch and ja naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a neutral dialogue to sound more natural by adding doch and ja where appropriate.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill particle choice, meaning comparison, and emotion identification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 680 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Particle-choice drills, meaning comparison, and a dialogue-rewriting task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Usage Table, meaning comparisons, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Du kommst doch. / Du kommst ja.', text: 'Hear how doch and ja shift attitude without changing the facts' },
    { de: 'Du kennst ihn doch. / Komm doch mit! / Das stimmt doch nicht!', text: 'Use doch for reminders, encouragement, and contradiction' },
    { de: 'Das weißt du ja. / Er ist ja krank.', text: 'Use ja for shared knowledge and explanation' },
    { de: 'doch ≠ "however" always; ja ≠ "yes" always', text: 'Stop translating Modalpartikeln literally — read the speaker\'s intention instead' },
    { de: 'Common in conversation; rare in academic writing', text: 'Recognize the spoken-vs-written register split for Modalpartikeln' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-55 list) ----------
  vocab: [
    { de: 'bewirken', pos: 'verb', level: 'B2', register: 'written', en: 'to bring about, cause', hi: 'लाना, कारण बनना', ex: 'Die Reform bewirkte große Veränderungen.', exEn: 'The reform brought about great changes.', exHi: 'Sudhaar ne bade badlaav laaye.', ex2: 'Sie hat viel Gutes bewirkt.', ex2En: 'She\'s brought about a lot of good.', ex2Hi: 'Usne bahut kuch achha kiya hai.', conj: { praesens: 'bewirkt', praeteritum: 'bewirkte', perfekt: 'hat bewirkt' } },
    { de: 'dank', pos: 'preposition', level: 'B2', register: 'both', en: 'thanks to', hi: 'की वजह से', ex: 'Dank deiner Höflichkeit fühle ich mich ruhiger.', exEn: 'Thanks to your politeness, I feel calmer.', exHi: 'Tumhaari shishtachaar ki wajah se main zyaada shaant mahsoos karta hoon.', ex2: 'Dank ihrer Hilfe haben wir es geschafft.', ex2En: 'Thanks to her help, we\'ve managed it.', ex2Hi: 'Uski madad ki wajah se hum kaamyaab hue hain.' },
    { de: 'Datensicherheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'data security', hi: 'डेटा सुरक्षा', ex: 'Die Datensicherheit ist doch wichtiger.', exEn: 'Data security is more important, isn\'t it.', exHi: 'Data suraksha zyaada mahatvapurn hai, hai na.', ex2: 'Sie haben die Datensicherheit verbessert.', ex2En: 'They\'ve improved data security.', ex2Hi: 'Unhone data suraksha behtar banaayi hai.' },
    { de: 'eingeben', pos: 'verb', level: 'B2', register: 'both', en: 'to enter, input', hi: 'दर्ज करना', ex: 'Sie gab das Passwort ein.', exEn: 'She entered the password.', exHi: 'Usne password darj kiya.', ex2: 'Er hat die Daten eingegeben.', ex2En: 'He\'s entered the data.', ex2Hi: 'Usne data darj kiya hai.', conj: { praesens: 'gibt ein', praeteritum: 'gab ein', perfekt: 'hat eingegeben' } },
    { de: 'einleiten', pos: 'verb', level: 'B2', register: 'written', en: 'to introduce, initiate', hi: 'शुरू करना', ex: 'Sie leitete die Diskussion ein.', exEn: 'She introduced the discussion.', exHi: 'Usne charcha shuru ki.', ex2: 'Sie haben Maßnahmen eingeleitet.', ex2En: 'They\'ve initiated measures.', ex2Hi: 'Unhone upaay shuru kiye hain.', conj: { praesens: 'leitet ein', praeteritum: 'leitete ein', perfekt: 'hat eingeleitet' } },
    { de: 'Einleitung', art: 'die', gender: 'f', plural: 'Einleitungen', pos: 'noun', level: 'B2', register: 'written', en: 'introduction', hi: 'प्रस्तावना', ex: 'Wir sollten die Einleitung noch formulieren.', exEn: 'We should formulate the introduction again.', exHi: 'Humein prastaavna phir se likhni chahiye.', ex2: 'Die Einleitung war sehr klar.', ex2En: 'The introduction was very clear.', ex2Hi: 'Prastaavna bahut spasht thi.' },
    { de: 'einplanen', pos: 'verb', level: 'B2', register: 'both', en: 'to plan in, allow for', hi: 'योजना में रखना', ex: 'Ich plane noch zehn Minuten für Fragen ein.', exEn: 'I still allow for ten minutes for questions.', exHi: 'Main abhi bhi sawaalon ke liye das minute rakhta hoon.', ex2: 'Sie haben genug Zeit eingeplant.', ex2En: 'They\'ve planned in enough time.', ex2Hi: 'Unhone kaafi samay rakha hai.', conj: { praesens: 'plant ein', praeteritum: 'plante ein', perfekt: 'hat eingeplant' } },
    { de: 'einprägen', pos: 'verb', level: 'B2', register: 'both', en: 'to memorise, imprint', hi: 'याद करना', ex: 'Präg dir die wichtigsten Zahlen ein.', exEn: 'Memorise the most important numbers.', exHi: 'Sabse mahatvapurn sankhyaayein yaad kar lo.', ex2: 'Sie hat sich den Weg eingeprägt.', ex2En: 'She\'s memorised the way.', ex2Hi: 'Usne raasta yaad kar liya hai.', conj: { praesens: 'prägt ein', praeteritum: 'prägte ein', perfekt: 'hat eingeprägt' } },
    { de: 'einteilen', pos: 'verb', level: 'B2', register: 'both', en: 'to divide up, classify', hi: 'बांटना', ex: 'Lass uns beides einteilen.', exEn: 'Let\'s divide up both.', exHi: 'Chalo hum donon ko baantte hain.', ex2: 'Sie haben die Aufgaben eingeteilt.', ex2En: 'They\'ve divided up the tasks.', ex2Hi: 'Unhone kaam baante hain.', conj: { praesens: 'teilt ein', praeteritum: 'teilte ein', perfekt: 'hat eingeteilt' } },
    { de: 'entlang', pos: 'preposition', level: 'B2', register: 'both', en: 'along', hi: 'साथ में, किनारे', ex: 'Sie gingen den Fluss entlang.', exEn: 'They walked along the river.', exHi: 'Woh nadi ke kinaare chale.', ex2: 'Der Weg führt die Küste entlang.', ex2En: 'The path leads along the coast.', ex2Hi: 'Raasta tat ke kinaare jaata hai.' },
    { de: 'ersetzen', pos: 'verb', level: 'B2', register: 'both', en: 'to replace, substitute', hi: 'बदलना', ex: 'Sie ersetzte den alten Drucker.', exEn: 'She replaced the old printer.', exHi: 'Usne purana printer badla.', ex2: 'Sie haben das System ersetzt.', ex2En: 'They\'ve replaced the system.', ex2Hi: 'Unhone system badla hai.', conj: { praesens: 'ersetzt', praeteritum: 'ersetzte', perfekt: 'hat ersetzt' } },
    { de: 'erstatten', pos: 'verb', level: 'B2', register: 'written', en: 'to refund, reimburse', hi: 'वापस करना', ex: 'Die Firma erstattete die Kosten.', exEn: 'The company reimbursed the costs.', exHi: 'Company ne kharcha wapas kiya.', ex2: 'Sie haben den Betrag erstattet.', ex2En: 'They\'ve refunded the amount.', ex2Hi: 'Unhone raashi wapas ki hai.', conj: { praesens: 'erstattet', praeteritum: 'erstattete', perfekt: 'hat erstattet' } },
    { de: 'formulieren', pos: 'verb', level: 'B2', register: 'written', en: 'to formulate, phrase', hi: 'शब्दों में लिखना', ex: 'Wir sollten die Einleitung noch formulieren.', exEn: 'We should formulate the introduction again.', exHi: 'Humein prastaavna phir se likhni chahiye.', ex2: 'Sie hat den Satz klar formuliert.', ex2En: 'She\'s phrased the sentence clearly.', ex2Hi: 'Usne vaakya spasht roop se likha hai.', conj: { praesens: 'formuliert', praeteritum: 'formulierte', perfekt: 'hat formuliert' } },
    { de: 'Gesamtwiederholung', art: 'die', gender: 'f', plural: 'Gesamtwiederholungen', pos: 'noun', level: 'B2', register: 'written', en: 'overall review', hi: 'पूरी पुनरावृत्ति', ex: 'Lass uns die Gesamtwiederholung später machen.', exEn: 'Let\'s do the overall review later.', exHi: 'Chalo poori punaravrutti baad mein karte hain.', ex2: 'Die Gesamtwiederholung dauerte zwei Stunden.', ex2En: 'The overall review took two hours.', ex2Hi: 'Poori punaravrutti do ghante chali.' },
    { de: 'gestalten', pos: 'verb', level: 'B2', register: 'written', en: 'to shape, design', hi: 'रचना करना', ex: 'Sie gestaltete die Präsentation neu.', exEn: 'She redesigned the presentation.', exHi: 'Usne prastuti nayi tarah se banaayi.', ex2: 'Sie haben das Projekt kreativ gestaltet.', ex2En: 'They\'ve designed the project creatively.', ex2Hi: 'Unhone project ko creative tarike se banaaya hai.', conj: { praesens: 'gestaltet', praeteritum: 'gestaltete', perfekt: 'hat gestaltet' } },
    { de: 'gönnen', pos: 'verb', level: 'B2', register: 'both', en: 'to grant, allow oneself', hi: 'देना, अनुमति देना', ex: 'Gönn dir doch eine Pause.', exEn: 'Give yourself a break.', exHi: 'Apne aap ko break do.', ex2: 'Sie haben sich Ruhe gegönnt.', ex2En: 'They\'ve granted themselves rest.', ex2Hi: 'Unhone khud ko aaraam diya hai.', conj: { praesens: 'gönnt', praeteritum: 'gönnte', perfekt: 'hat gegönnt' } },
    { de: 'Hilfsbereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'helpfulness', hi: 'सहायकता', ex: 'Deine Hilfsbereitschaft ist bekannt.', exEn: 'Your helpfulness is known.', exHi: 'Tumhaari sahaayakta prasiddh hai.', ex2: 'Sie schätzen seine Hilfsbereitschaft.', ex2En: 'They value his helpfulness.', ex2Hi: 'Woh uski sahaayakta ki kadar karte hain.' },
    { de: 'Höflichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'politeness', hi: 'शिष्टाचार', ex: 'Dank deiner Höflichkeit fühle ich mich ruhiger.', exEn: 'Thanks to your politeness, I feel calmer.', exHi: 'Tumhaari shishtachaar ki wajah se main zyaada shaant mahsoos karta hoon.', ex2: 'Sie behandeln alle mit Höflichkeit.', ex2En: 'They treat everyone with politeness.', ex2Hi: 'Woh sabke saath shishtachaar se pesh aate hain.' },
    { de: 'innerhalb', pos: 'preposition', level: 'B2', register: 'written', en: 'within', hi: 'के भीतर', ex: 'Innerhalb einer Woche kam die Antwort.', exEn: 'Within a week, the answer came.', exHi: 'Ek hafte ke bhitar jawaab aaya.', ex2: 'Sie haben es innerhalb kurzer Zeit geschafft.', ex2En: 'They\'ve managed it within a short time.', ex2Hi: 'Unhone ise thodi der mein kar liya hai.' },
    { de: 'jenseits', pos: 'preposition', level: 'B2', register: 'written', en: 'beyond, on the other side of', hi: 'दूसरी ओर', ex: 'Jenseits der Grenze liegt ein anderes Land.', exEn: 'Beyond the border lies another country.', exHi: 'Seema ke us paar ek dusra desh hai.', ex2: 'Sie leben jenseits des Flusses.', ex2En: 'They live on the other side of the river.', ex2Hi: 'Woh nadi ke us paar rehte hain.' },
    { de: 'Kaution', art: 'die', gender: 'f', plural: 'Kautionen', pos: 'noun', level: 'B2', register: 'written', en: 'deposit, bail', hi: 'जमानत', ex: 'Die Kaution für die Wohnung muss ich noch klären.', exEn: 'I still have to clarify the deposit for the apartment.', exHi: 'Mujhe abhi bhi flat ki jamaanat spasht karni hai.', ex2: 'Sie haben die Kaution bezahlt.', ex2En: 'They\'ve paid the deposit.', ex2Hi: 'Unhone jamaanat bhar di hai.' },
    { de: 'klären', pos: 'verb', level: 'B2', register: 'both', en: 'to clarify, resolve', hi: 'स्पष्ट करना', ex: 'Die Kaution für die Wohnung muss ich noch klären.', exEn: 'I still have to clarify the deposit for the apartment.', exHi: 'Mujhe abhi bhi flat ki jamaanat spasht karni hai.', ex2: 'Sie haben das Missverständnis geklärt.', ex2En: 'They\'ve resolved the misunderstanding.', ex2Hi: 'Unhone galatfahmi door ki hai.', conj: { praesens: 'klärt', praeteritum: 'klärte', perfekt: 'hat geklärt' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Modalpartikel?',
      body: [ 'Modal particles do NOT change the factual information in a sentence. They change emotion, expectation, politeness, surprise, or shared knowledge.' ],
      table: {
        head: ['Neutral', 'With particle'],
        rows: [
          ['Du kommst.', '<span class="de r-doch">Du kommst doch.</span> / <span class="de r-ja">Du kommst ja.</span>']
        ]
      },
      hinglish: 'Modal particles sentence ki factual baat nahi badalte \u2014 baat wahi rehti hai. Yeh sirf tone badalte hain: emotion, expectation, politeness, surprise, ya yeh signal ki baat dono ko pehle se pata hai. Isliye inka koi seedha English translation nahi hota.'
    },
    {
      title: 'Modalpartikel doch — fünf Hauptfunktionen',
      body: [ '"doch" has five main functions: reminder, contradiction, encouragement, persuasion, and softening commands.' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Reminder', 'Du kennst ihn doch. ("you know him, remember?")'],
          ['Contradiction', 'Das stimmt doch nicht! ("that\'s NOT true!")'],
          ['Encouragement', 'Komm doch mit! ("come on, join us!")'],
          ['Persuasion', 'Probier doch mal den Kuchen. ("go on, try the cake")'],
          ['Softening commands', 'Setz dich doch. ("do sit down")']
        ]
      },
      hinglish: '<b>doch</b> ke paanch kaam hain \u2014 yaad dilana, kisi baat ko kaatna, hosla dena, manana, aur order ko narm karna. In sab mein ek common baat hai: <b>doch</b> aksar us cheez ki taraf ishara karta hai jo saamne wala bhool raha hai ya maan nahi raha.'
    },
    {
      title: 'Modalpartikel ja — fünf Hauptfunktionen',
      body: [ '"ja" has five main functions: shared knowledge, obvious information, explanation, reminder, and surprise after realization.' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Shared knowledge', 'Das weißt du ja. ("as you already know")'],
          ['Obvious information', 'Es ist ja kalt. ("it\'s cold, obviously")'],
          ['Explanation', 'Er ist ja krank. ("well, he\'s sick, that explains it")'],
          ['Reminder', 'Du hast ja morgen Prüfung. ("remember, you have an exam tomorrow")'],
          ['Surprise after realization', 'Ach ja! ("oh right!")']
        ]
      },
      hinglish: '<b>ja</b> ke paanch kaam hain \u2014 pehle se pata baat batana, obvious cheez kehna, wajah samjhaana, yaad dilana, aur achanak realization. In sab ka matlab lagbhag yeh hota hai: "yeh to tum jaante hi ho".'
    },
    {
      title: 'Wo steht der Modalpartikel?',
      body: [
        'Modal particles have a fixed home: the <b>Mittelfeld</b>. They come after the conjugated verb and after any pronoun, and they never take position 1 or the very end of the clause.'
      ],
      table: {
        head: ['Sentence type', 'Position', 'Example'],
        rows: [
          ['Statement', 'after the verb', '<span class="de">Du kennst ihn <b>doch</b>.</span>'],
          ['With a pronoun', 'after the pronoun', '<span class="de">Ich habe es <b>ja</b> gesagt.</span>'],
          ['Imperative', 'after the verb', '<span class="de">Komm <b>doch</b> mit!</span>'],
          ['Perfekt', 'before the Partizip II', '<span class="de">Er ist <b>ja</b> gekommen.</span>']
        ]
      },
      note: 'Never at the start and never at the end: <i>Doch du kennst ihn</i> and <i>Du kennst ihn ja doch</i> both sound wrong. Note that clause-initial <b>doch</b> is a different word \u2014 there it is a conjunction meaning \u201cyet / however\u201d.',
      hinglish: 'In particles ki jagah fix hai \u2014 yeh <b>Mittelfeld</b> mein baithte hain, matlab conjugated verb ke baad aur pronoun ke baad. Yeh na sentence ke shuru mein aate hain aur na end mein. Perfekt ho to Partizip II se pehle aate hain: <span class="de">Er ist ja gekommen.</span> Ek baat dhyaan se \u2014 sentence ke shuru wala <b>doch</b> alag cheez hai; wahan woh conjunction hota hai, matlab "phir bhi".'
    },
    {
      title: 'Ohne vs Mit Modalpartikel',
      body: [ 'The factual meaning stays the same across all three versions — only the emotional colour changes.' ],
      table: {
        head: ['Neutral', 'With doch', 'With ja'],
        rows: [
          ['Du bist müde.', 'Du bist doch müde.', 'Du bist ja müde.'],
          ['Das stimmt.', 'Das stimmt doch.', 'Das stimmt ja.'],
          ['Er ist krank.', 'Er ist doch krank.', 'Er ist ja krank.']
        ]
      },
      hinglish: 'Teeno versions ka factual matlab ek hi hai \u2014 sirf tone badalta hai. <b>doch</b> lagane se lagta hai ki tum yaad dila rahe ho ya disagree kar rahe ho, aur <b>ja</b> lagane se lagta hai ki baat obvious hai ya dono ko pata hai.'
    },
    {
      title: 'Register',
      body: [ '"doch" and "ja" are extremely common in conversations, family discussions, workplace conversations, university discussions, interviews, TV shows, and podcasts — but much less common in formal academic writing.' ],
      hinglish: '<b>doch</b> aur <b>ja</b> bolchaal mein bahut aate hain \u2014 baatcheet, office ki baat, interviews, TV aur podcasts mein. Par formal academic writing mein yeh lagbhag nahi aate, isliye report likhte waqt inhe chhod do.'
    },
    {
      title: 'Übersetzungsfehler vermeiden',
      body: [ 'Students should NEVER translate "doch" as "however" in every sentence, and "ja" does NOT always mean "yes". Meaning depends entirely on context.' ],
      hinglish: 'Ek badi galti hai in particles ka seedha translation dhoondna. <b>doch</b> ko har jagah "however" mat samjho, aur Mittelfeld wala <b>ja</b> "yes" nahi hota. Inka matlab context se aata hai \u2014 isliye translate karne ki jagah yeh socho ki bolne wala kya feel karwa raha hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from stacking two particles, putting one at the start or the end instead of the Mittelfeld, or choosing the particle that carries the wrong attitude.' ],
      mistakes: [
        { wrong: 'Ja ich bin ja Student.', right: 'Ich bin Student. / Ich bin ja Student.', why: 'Do not stack the answer word and the particle. Use one "ja" in the middle field \u2014 and only when you really are pointing to shared knowledge.' },
        { wrong: 'Doch ich gehe doch morgen.', right: 'Ich gehe doch morgen.', why: '"doch" appears once, in the middle field \u2014 not doubled at the start of the sentence as well.' },
        { wrong: 'Das stimmt doch nicht, doch es ist wahr.', right: 'Das stimmt doch nicht, aber es ist wahr.', why: 'The first "doch" is a Modalpartikel in the middle field. To join two clauses you need a conjunction \u2014 "aber" (or "doch" at the START of the clause), not a second middle-field particle.' },
        { wrong: 'Ja, er ist krank ja.', right: 'Ja, er ist ja krank.', why: 'The answer word "ja" opens the sentence, but the Modalpartikel "ja" belongs in the middle field \u2014 right after the verb, never at the end.' },
        { wrong: 'Komm ja mit!', right: 'Komm doch mit!', why: '"doch" is the particle for a friendly invitation. "ja" in an imperative sounds like a threat \u2014 <span class="de">Komm ja nicht zu sp\u00e4t!</span> means \u201cdon\u2019t you dare be late\u201d.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 do particles ek saath laga dena, particle ko Mittelfeld ki jagah shuru ya end mein rakh dena, ya galat particle chun lena jisse attitude hi badal jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to remind someone? Use doch. Need to refer to shared knowledge? Use ja. Writing a scientific report? Usually use neither.' ],
      note: 'Memory trick: doch = "remember?" / "come on!" / "actually!" — often changes expectation. ja = "as you already know..." — points to shared or obvious information. Don\'t translate literally — understand the speaker\'s intention.',
      hinglish: 'Faisla aasaan hai \u2014 kisi ko yaad dilana hai ya manana hai to <b>doch</b>. Aur yeh batana hai ki baat pehle se pata hai to <b>ja</b>. Scientific report likh rahe ho to dono chhod do. Aur dono ek hi Mittelfeld mein saath mat lagao.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Chat: Die Kaution für die neue Wohnung',
    titleEn: 'Chat: the deposit for the new flat',
    tokens: [
      { w: 'Lisa', role: 'plain', en: 'Lisa', hi: 'लीज़ा', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Du', role: 'plain', en: 'you', hi: 'तुम', type: 'Pronoun' },
      { w: 'weißt', role: 'plain', en: 'know', hi: 'जानते हो', type: 'Verb · wissen' },
      { w: 'doch', role: 'r-connector', en: 'after all (Modalpartikel)', hi: 'तो (Modalpartikel)', type: 'Modalpartikel · doch', why: 'doch (unstressed) softens a reminder — implying "you already know this, right?" (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Kaution', role: 'plain', en: 'deposit (Satzende)', hi: 'ज़मानत राशि (Satzende)', type: 'Noun · fem.', why: 'die Kaution (this chapter).' },
      { w: 'bis', role: 'plain', en: 'by', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'Freitag', role: 'plain', en: 'Friday (Satzende)', hi: 'शुक्रवार (Satzende)', type: 'Noun · masc.' },
      { w: 'überwiesen', role: 'plain', en: 'transferred (Satzende)', hi: 'भेजी जानी चाहिए (Satzende)', type: 'Verb · Partizip II' },
      { w: 'sein', role: 'plain', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Verb · sein (Zustandspassiv, Nebensatz-Satzende)' },
      { w: 'muss', role: 'plain', en: 'must (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Nebensatz-Satzende)' },
      { w: '.', plain: true },
      { w: 'Max', role: 'plain', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ja', role: 'r-connector', en: 'yes (Modalpartikel)', hi: 'हाँ (Modalpartikel)', type: 'Modalpartikel · ja', why: 'ja (unstressed, mid-sentence) marks the fact as obviously true, not up for debate (this chapter).' },
      { w: ',', plain: true },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'habe', role: 'plain', en: 'have', hi: 'है', type: 'Verb · haben' },
      { w: 'das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ja', role: 'r-connector', en: 'after all (Modalpartikel)', hi: 'तो (Modalpartikel)', type: 'Modalpartikel · ja' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'vergessen', role: 'plain', en: 'forgotten (Satzende)', hi: 'भूला (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'schätze', role: 'plain', en: 'appreciate', hi: 'सराहना करता हूँ', type: 'Verb · schätzen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Höflichkeit', role: 'plain', en: 'politeness', hi: 'शिष्टाचार', type: 'Noun · fem.', why: 'die Höflichkeit (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Vermieters', role: 'plain', en: 'landlord (gen., Satzende)', hi: 'मकान मालिक (gen., Satzende)', type: 'Noun · masc.' },
      { w: 'übrigens', role: 'plain', en: 'by the way (Satzende)', hi: 'वैसे (Satzende)', type: 'Adverb' },
      { w: 'sehr', role: 'plain', en: 'very (Satzende)', hi: 'बहुत (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Lisa', role: 'plain', en: 'Lisa', hi: 'लीज़ा', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Stimmt', role: 'plain', en: 'true', hi: 'सच है', type: 'Verb · stimmen' },
      { w: ',', plain: true },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Hilfsbereitschaft', role: 'plain', en: 'willingness to help (Satzende)', hi: 'सहायता की इच्छा (Satzende)', type: 'Noun · fem.', why: 'die Hilfsbereitschaft (this chapter).' },
      { w: 'macht', role: 'plain', en: 'makes', hi: 'बनाता है', type: 'Verb · machen' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Umzug', role: 'plain', en: 'move (house) (Satzende)', hi: 'स्थानांतरण (Satzende)', type: 'Noun · masc.' },
      { w: 'doch', role: 'r-connector', en: 'still (Modalpartikel, adversative)', hi: 'फिर भी (Modalpartikel)', type: 'Modalpartikel · doch (adversativ)', why: 'doch here softens a contrast: despite the stress of moving, this makes it easier — the modal particle carries that nuance (this chapter).' },
      { w: 'gleich', role: 'plain', en: 'right away (Satzende)', hi: 'तुरंत (Satzende)', type: 'Adverb' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'बहुत', type: 'Adjective' },
      { w: 'einfacher', role: 'plain', en: 'easier (Satzende)', hi: 'आसान (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true },
      { w: 'Lisa', role: 'plain', en: 'Lisa', hi: 'लीज़ा', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Hast', role: 'plain', en: 'have (you)', hi: 'क्या तुमने', type: 'Verb · haben (du)' },
      { w: 'du', role: 'plain', en: 'you', hi: 'तुम', type: 'Pronoun' },
      { w: 'eigentlich', role: 'r-verb', en: 'actually', hi: 'वैसे', type: 'Modalpartikel · eigentlich', why: 'eigentlich softly introduces a new question (this chapter).' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'Kartons', role: 'plain', en: 'boxes', hi: 'डिब्बे', type: 'Noun · plural' },
      { w: 'besorgt', role: 'plain', en: 'got (Satzende)', hi: 'जुटाए (Satzende)', type: 'Verb · Partizip II' },
      { w: '?', plain: true },
      { w: 'Max', role: 'plain', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ja', role: 'plain', en: 'yes', hi: 'हाँ', type: 'Answer particle' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'stehen', role: 'plain', en: 'have been standing', hi: 'रखे हैं', type: 'Verb · stehen' },
      { w: 'doch', role: 'r-verb', en: 'you know', hi: 'न', type: 'Modalpartikel · doch', why: 'doch here reminds the listener of something they should already know (this chapter).' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Tagen', role: 'plain', en: 'days', hi: 'दिनों', type: 'Noun · plural' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Flur', role: 'plain', en: 'hallway (Satzende)', hi: 'गलियारे (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'Lisa: You know the deposit has to be transferred by Friday, right? — Max: Yes, I haven\u2019t forgotten that. By the way, I really appreciate the landlord\u2019s politeness. — Lisa: True, and his willingness to help makes the move a lot easier right away. — Lisa: Have you actually gotten boxes yet? — Max: Yes, they\u2019ve been sitting in the hallway for days now.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_055_L001', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich finde meine Schlüssel nicht!', en: 'Timo, I can\'t find my keys!' },
      { id: 'B2_055_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Die liegen doch auf dem Tisch, hab ich gesehen.', en: 'They\'re right there on the table, I saw them.' },
      { id: 'B2_055_L003', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, da sind sie ja nicht, ich hab schon nachgeschaut!', en: 'No, they\'re indeed not there, I already looked!' },
      { id: 'B2_055_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Schau mal in deiner Jacke — ah, da sind sie ja!', en: 'Check your jacket — ah, there they are!' }
    ],
    transcript: 'Timo, ich finde meine Schlüssel nicht! Die liegen doch auf dem Tisch, hab ich gesehen. Nein, da sind sie ja nicht, ich hab schon nachgeschaut! Schau mal in deiner Jacke — ah, da sind sie ja!',
    translation: 'Timo, I can\'t find my keys! They\'re right there on the table, I saw them. No, they\'re indeed not there, I already looked! Check your jacket — ah, there they are!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'finde' },
      { w: 'meine' },
      { w: 'Schlüssel' },
      { w: 'nicht' },
      { w: '!', plain: true },
      { w: 'Die' },
      { w: 'liegen' },
      { w: 'doch' },
      { w: 'auf' },
      { w: 'dem' },
      { w: 'Tisch' },
      { w: ',', plain: true },
      { w: 'hab' },
      { w: 'ich' },
      { w: 'gesehen' },
      { w: '.', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'da' },
      { w: 'sind' },
      { w: 'sie' },
      { w: 'ja' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hab' },
      { w: 'schon' },
      { w: 'nachgeschaut' },
      { w: '!', plain: true },
      { w: 'Schau' },
      { w: 'mal' },
      { w: 'in' },
      { w: 'deiner' },
      { w: 'Jacke' },
      { w: '—', plain: true },
      { w: 'ah' },
      { w: ',', plain: true },
      { w: 'da' },
      { w: 'sind' },
      { w: 'sie' },
      { w: 'ja' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wo vermutet Timo die Schlüssel zuerst?', qEn: 'Where does Timo first think the keys are?', options: ['in der Tasche', 'auf dem Tisch', 'im Auto', 'in der Jacke'], optionsEn: ['in the bag', 'on the table', 'in the car', 'in the jacket'], answer: 1,
        explain: '"Die liegen doch auf dem Tisch."' },
      { q: 'Wo werden die Schlüssel schließlich gefunden?', qEn: 'Where are the keys finally found?', options: ['auf dem Tisch', 'in der Jacke', 'im Auto', 'in der Küche'], optionsEn: ['on the table', 'in the jacket', 'in the car', 'in the kitchen'], answer: 1,
        explain: '"Schau mal in deiner Jacke — ah, da sind sie ja!"' }
    ]
  },

  speaking: [
    { task: "Dein Freund findet seine Schlüssel nicht. Erinnere ihn.", taskEn: "Your friend can't find his keys. Remind him.", de: "Die liegen doch auf dem Tisch, hab ich gesehen.", en: "They're on the table, I saw them." },
    { task: "Er sagt, dort seien sie nicht. Antworte.", taskEn: "He says they're not there. Answer.", de: "Da sind sie ja nicht, ich hab schon nachgeschaut.", en: "Well, they're not there, I've already looked." },
    { task: "Eine Kollegin behauptet etwas Falsches. Widersprich freundlich.", taskEn: "A colleague claims something wrong. Contradict her kindly.", de: "Das stimmt doch nicht, der Termin war am Dienstag.", en: "That's not right, though — the meeting was on Tuesday." },
    { task: "Deine Freundin zögert mitzukommen. Ermutige sie.", taskEn: "Your friend hesitates to come along. Encourage her.", de: "Komm doch mit, es dauert nur eine Stunde.", en: "Do come along, it only takes an hour." },
    { task: "Rollenspiel: Ihr klärt ein Missverständnis über den Termin.", taskEn: "Role-play: you clear up a misunderstanding about the appointment.", de: "Ich habe dir doch geschrieben. — Du hast ja meine neue Nummer nicht.", en: "But I did write to you. — Well, you don't have my new number." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Take a neutral dialogue and rewrite it to sound more natural by adding doch and ja where appropriate.\n\nTASK 2 — Dialogue (8-10 sentences): Write a conversation between two colleagues preparing a presentation, using Modalpartikeln naturally without overusing them.',
    starters: ['Du kennst doch ...', 'Das weißt du ja ...'],
    placeholder: 'Du kennst Professor Müller doch. Er ist ja sehr streng. Probier doch mal einen neuen Satz.',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "doch" to soften a command?',
      options: ['Setz dich doch.', 'Das stimmt doch nicht!', 'Du kennst ihn doch.'],
      answer: 0,
      explain: '"Setz dich doch" turns a bare command into a friendly, softened request.'
    },
    gap: {
      sentence: ['Er ist ', ' sehr streng.'],
      gaps: [ { answer: 'ja', accepts: ['ja'] } ],
      explain: '"ja" here points to shared knowledge both speakers already have — "he\'s strict, as you know".'
    },
    match: {
      q: 'Match each sentence to its function.',
      pairs: [
        { noun: 'Du kennst ihn doch.', art: 'Reminder' },
        { noun: 'Komm doch mit!', art: 'Encouragement' },
        { noun: 'Das weißt du ja.', art: 'Shared knowledge' },
        { noun: 'Er ist ja krank.', art: 'Explanation' }
      ]
    },
    builder: {
      target: 'Build: "Come along, then!" (encouragement with doch)',
      bank: ['Komm', 'doch', 'mit', '!'],
      answer: ['Komm', 'doch', 'mit', '!'],
      roles: { 'doch': 'r-doch' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Komm ja mit!',
      right: 'Komm doch mit!',
      explain: '"doch" is the particle for friendly encouragement/invitation — "ja" would not fit this function here.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What do Modalpartikeln like doch and ja generally do to a sentence\'s factual meaning?', options: ['Nothing — they change attitude/emotion, not facts', 'They add new information', 'They reverse the meaning'], answer: 0,
      explain: 'Modalpartikeln shift the speaker\'s attitude, expectation, or shared knowledge — the facts stay the same.' },
    { q: '"Du kennst ihn doch." is an example of which function?', options: ['Reminder', 'Contradiction', 'Explanation'], answer: 0,
      explain: '"doch" here reminds the listener of something they already know.' },
    { q: '"Das stimmt doch nicht!" is an example of which function?', options: ['Contradiction', 'Shared knowledge', 'Encouragement'], answer: 0,
      explain: '"doch" here contradicts an assumption emphatically.' },
    { q: '"Er ist ja krank." is an example of which function?', options: ['Explanation', 'Contradiction', 'Encouragement'], answer: 0,
      explain: '"ja" here explains — "well, he\'s sick, that explains it".' },
    { q: 'Is it correct to always translate "doch" as "however"?', options: ['No — its meaning depends entirely on context', 'Yes, always', 'Only in written German'], answer: 0,
      explain: '"doch" can be a conjunction ("however") or a Modalpartikel with no fixed English translation — context decides.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-doch', html: 'Modalpartikeln doch and ja never change the facts — they signal reminder, contradiction, encouragement, shared knowledge, or explanation.' },
    { c: 'r-doch', html: 'doch = reminder, contradiction, encouragement, persuasion, softened commands. ja = shared knowledge, obvious information, explanation, reminder, surprise.' },
    { c: 'r-ja', html: 'Never translate doch as "however" or ja as "yes" in every sentence — read the speaker\'s intention, not the dictionary.' }
  ],
  revisionTips: [
    'For every neutral sentence you know, practise adding doch and ja and explaining how the feeling changes.',
    'Watch a short German conversation clip and count how many times you hear doch or ja — note the function each time.',
    'Ask yourself before using either particle: am I reminding, contradicting, encouraging, or pointing to shared knowledge?'
  ]
};

window.CHAPTER = CHAPTER;
