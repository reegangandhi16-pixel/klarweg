/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 3
   "Artikel (Wiederholung)"  (article review — der/die/das,
   ein/eine/einen/einem, definite vs indefinite, gender patterns,
   plural). Confidence-building revision. NO new grammar.
   Vocabulary source: uploaded chapter-03 word list (48 items,
   career + school theme). Recycles Ch.1 (Name+s), Ch.2 (Perfekt)
   and A1: Akkusativ, Dativ, Modalverben, Perfekt, trennbare Verben.
   NOTE: content only — existing audio engine, no new assets.

   VOCAB NOTE (flagged, not silently overridden): the source file
   lists "das WG - WC". The correct German is die WG (die
   Wohngemeinschaft) = a shared flat, and it is feminine. Using the
   wrong article/meaning in an ARTICLE-REVIEW chapter would teach the
   opposite of the lesson, so this entry is corrected to die WG /
   shared flat. Please confirm.
============================================================ */
const CHAPTER = {
  id: 'a2-3-artikel-review',
  phase: 'A2 · Phase 1',
  number: 3,
  title: 'Artikel (Wiederholung)',
  titleEn: 'Articles — Review',
  description: 'One more confidence chapter before the cases start pulling their weight. You already know der, die, das and ein, eine, einen, einem from A1 — here we make the choice automatic. Gender patterns you can trust, definite vs indefinite, the plural (always die), and the small changes across Nominativ, Akkusativ and Dativ. No new grammar — just the article, until it runs by itself.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 4, title: 'Nebensatz mit weil', titleEn: 'Subordinate Clauses with weil' , href: 'chapter-a2-4-weil.html' },

  prevChapter: { number: 2, title: 'Perfekt (Wiederholung)', titleEn: 'The Spoken Past — Review', href: 'chapter-a2-2-perfekt-review.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Week three, and the language school is buzzing: today there\'s a small Berufsmesse — a careers fair — in the cafeteria. Merle and Timo wander from table to table meeting a gardener, a bank clerk, a geriatric nurse, weighing whether Merle should switch to something with children. Every job, every place, every subject needs its article — der, die, das.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear der/die/das and ein/eine/einen in natural conversation'
    ],
    scene: 'Berufsmesse in der Cafeteria \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Merle'],
    dialogue: [
      { speaker: 'Merle', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'suche', role: 'r-verb', en: 'am looking for', hi: 'ढूंढ रही हूँ', pron: 'ZOO-khuh', type: 'Verb · suchen (ich)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नई', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Arbeit', role: 'r-akkusativ', en: 'job', hi: 'नौकरी', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'meinst', role: 'r-verb', en: 'do you think', hi: 'सोचते हो', pron: 'MYNST', type: 'Verb · meinen (du)', why: 'meinen = to think/mean (this chapter).', ex: 'Was meinst du?', exEn: 'What do you think?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I am looking for a new job. What do you think?', hi: 'Main nayi naukri dhundh rahi hoon. Tum kya sochte ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Arzthelfer', role: 'r-subject', en: 'medical assistant', hi: 'डॉक्टर सहायक', pron: 'ARTST-hel-fer', type: 'Noun · masc.', why: 'der Arzthelfer (this chapter).', ex: 'Der Arzthelfer hat viel Arbeit.', exEn: 'The medical assistant has a lot of work.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'interessante', role: 'r-akkusativ', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SAN-tuh', type: 'Adjective' },
        { w: 'Arbeit', role: 'r-akkusativ', en: 'work', hi: 'काम', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'magst', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahkst', type: 'Modal · mögen (du)' },
        { w: 'Medizin', role: 'r-akkusativ', en: 'medicine', hi: 'चिकित्सा', pron: 'me-di-TSEEN', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The medical assistant has interesting work. And you like medicine.', hi: 'Doctor sahayak ka kaam dilchasp hota hai. Aur tumhe medicine pasand hai.' },
      { speaker: 'Merle', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'is true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'Bankkauffrau', role: 'r-subject', en: 'bank clerk (f)', hi: 'बैंक क्लर्क', pron: 'BANK-kowf-frow', type: 'Noun · fem.', why: 'die Bankkauffrau (this chapter).', ex: 'Eine Bankkauffrau verdient gut.', exEn: 'A bank clerk earns well.' },
        { w: 'verdient', role: 'r-verb', en: 'earns', hi: 'कमाती है', pron: 'fer-DEENT', type: 'Verb · verdienen (sie)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Hmm, that is true. But a bank clerk earns well too.', hi: 'Hmm, yeh sahi hai. Par bank clerk bhi achha kamati hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: 'langweilig', role: 'r-adjective', en: 'boring', hi: 'उबाऊ', pron: 'LANG-vy-likh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'willst', role: 'r-modalverb', en: 'do you want', hi: 'चाहती हो', pron: 'vilst', type: 'Modal · wollen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Yes, but that is often boring. What do you really want to do?', hi: 'Haan, par yeh aksar boring hota hai. Tum sach mein kya karna chahti ho?' },
      { speaker: 'Merle', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहती हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · acc.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'Kindern', role: 'r-dativ', en: 'children (dat.)', hi: 'बच्चों', pron: 'KIN-dern', type: 'Noun · plural dat.' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Schule', role: 'r-dativ', en: 'school (dat.)', hi: 'स्कूल में', pron: 'SHOO-luh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I want to do something with children. Maybe in a school.', hi: 'Main bacchon ke saath kuch karna chahti hoon. Shayad school mein.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'passt', role: 'r-verb', en: 'fits', hi: 'फ़िट बैठता है', pron: 'past', type: 'Verb · passen' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'से', pron: 'tsoo', type: 'Preposition' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे', pron: 'deer', type: 'Pronoun · dative' },
        { w: '.', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'geduldig', role: 'r-adjective', en: 'patient', hi: 'धैर्यवान', pron: 'ge-DUL-dikh', type: 'Adjective' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'kreativ', role: 'r-adjective', en: 'creative', hi: 'रचनात्मक', pron: 'kre-a-TEEF', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'That suits you well. You are patient and creative.', hi: 'Yeh tumpar sahi baithta hai. Tum dhairyavaan aur rachnatmak ho.' },
      { speaker: 'Merle', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schaue', role: 'r-verb', en: 'will look', hi: 'देखती हूँ', pron: 'SHOW-uh', type: 'Verb · schauen (ich)', lexicalUnit: 'ansehen' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद', pron: 'meer', type: 'Reflexive dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Schule', role: 'r-akkusativ', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'an', role: 'r-verb', en: '(prefix of ansehen/anschauen)', hi: 'देखना', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'ansehen' },
        { w: '.', plain: true }
      ], en: 'Thanks! I will look at the school tomorrow.', hi: 'Dhanyavaad! Main kal school dekh lungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'mach', role: 'r-verb', en: 'do', hi: 'करो', pron: 'makh', type: 'Verb · imperative' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'drücke', role: 'r-verb', en: 'press', hi: 'दबाता हूँ', pron: 'DRÜ-kuh', type: 'Verb · drücken (ich)', why: 'die Daumen drücken = to keep fingers crossed (this chapter, fixed phrase).', ex: 'Ich drücke dir die Daumen.', exEn: 'I keep my fingers crossed for you.' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Daumen', role: 'r-akkusativ', en: 'thumbs', hi: 'अंगूठे', pron: 'DOW-men', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Yes, do that! I will keep my fingers crossed for you.', hi: 'Haan, karo! Main tumhare liye ungliyaan cross karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'No new grammar here \u2014 just the <strong>article</strong>, made automatic. German nouns are <span class="de r-article">der</span> (masc.), <span class="de r-article">die</span> (fem.) or <span class="de r-article">das</span> (neut.), and the article is the single most useful thing to know about a noun. This chapter re-drills the two families you met in A1: the <strong>definite</strong> (der/die/das \u2014 <em>the</em>) and the <strong>indefinite</strong> (ein/eine \u2014 <em>a</em>). You already know how they shift across the cases: <span class="de">der Mann \u2192 <span class="r-akkusativ">den</span> Mann \u2192 mit <span class="r-dativ">dem</span> Mann</span>, and <span class="de">ein \u2192 <span class="r-akkusativ">einen</span> \u2192 <span class="r-dativ">einem</span></span>. Add a few reliable gender patterns (<span class="de">-in, -ung, -heit</span> = fem.; <span class="de">-er, -ling</span> = masc.), remember the plural is always <span class="de r-article">die</span>, and the choice starts running by itself.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner reviewing ARTICLES (A1 level only \u2014 no new grammar). ' +
    'Focus: der/die/das (definite), ein/eine/einen/einem (indefinite), gender patterns, plural (always die), and the case changes already learned in A1. ' +
    'The learner wrote about jobs/school below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Nominative: der (m), die (f), das (n), die (pl). Indefinite: ein (m/n), eine (f); no plural indefinite.\n' +
    '- Accusative changes ONLY masculine: der\u2192den, ein\u2192einen. die/das/die(pl) unchanged. eine\u2192eine, ein(n)\u2192ein(n).\n' +
    '- Dative: dem (m), der (f), dem (n), den + -n on plural noun. Indefinite dative: einem (m/n), einer (f).\n' +
    '- Gender clues (reliable, not absolute): -in/-ung/-heit/-keit/-ei/-schaft = feminine; -er/-ling/-ismus = masculine; -chen/-lein/-um = neuter.\n' +
    '- Chapter nouns and their articles: die Arbeit, der Arzthelfer, der Beitrag, die Berufserfahrung, das Berufsleben, die Cafeteria, der Eingang, das Fach, die Grafik, die G\u00e4rtnerin, die Kunsterziehung, das Land, die Lernerfahrung, die Medizin, die Meinung, der Platz, der Rentner, der Schulabschluss, das Schulfach, der Schultyp, die Sch\u00fclerin, die WG, der Altenpfleger, die Bankkauffrau, die Behinderung, die Hauptschule, der Hotelkaufmann, der Riesenspa\u00df, die Schuluniform, die Theatergruppe, die Unterrichtszeit, der Unterschied, der Vokabeltest, die Werbeagentur, die \u00dcberstunde, das Artikelwort.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Article check:</b> one sentence on gender and case-ending accuracy.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'The article choice is automatic now \u2014 exactly the goal. Next: your first real A2 clause, <span class="de">Nebensatz mit weil</span>.',
    mid: 'Good. Re-read the gender-patterns card once (-in/-ung = fem., -er = masc.), then continue.',
    low: 'Worth another pass \u2014 learn each noun WITH its article, and remember: accusative only changes the masculine (der\u2192den, ein\u2192einen). Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Der', role: 'r-article' }, { w: 'Altenpfleger', role: 'r-subject' },
    { w: 'hilft', role: 'r-verb' }, { w: 'einer', role: 'r-dativ' },
    { w: 'Sch\u00fclerin', role: 'r-object' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole article system on one page \u2014 nothing new, all review.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A careers fair \u2014 every job and place naturally needs its article.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn each career/school noun WITH its article: der Rentner, die G\u00e4rtnerin, das Fach.' },
    { id: 'grammar',    label: 'Articles',   tag: 'core',
      objective: 'Re-drill der/die/das, ein/eine/einen/einem, gender patterns and the plural.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Annas school memories \u2014 packed with every article form.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow two students comparing school subjects and jobs.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe jobs and places out loud, with the right article each time.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write six sentences about jobs and school, choosing every article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill definite vs indefinite, gender and case with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s career and school nouns \u2014 each listed WITH its article and plural \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'der/die/das and ein/eine drills, gender-pattern sorting, definite vs indefinite, and a describe-your-job task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The full article table across the cases, gender patterns, the plural, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der / die / das', text: 'Choose the right definite article' },
    { de: 'ein / eine / einen / einem', text: 'Use the indefinite article across cases' },
    { de: 'die G\u00e4rtnerin \u00b7 der Rentner', text: 'Read gender from noun endings' },
    { de: 'die B\u00fccher, die Pl\u00e4tze', text: 'Remember the plural is always die' },
    { de: 'den Mann \u00b7 dem Mann', text: 'Track the masculine through the cases' }
  ],

  // ---------- Vocabulary (48 items) ----------
  vocab: [
    // ===== Core Active (professions & workplaces) =====
    { de: 'Arbeit', art: 'die', gender: 'f', plural: 'Arbeiten', pos: 'noun', en: 'work, job', hi: 'काम', ex: 'Die G\u00e4rtnerin hat eine Arbeit im Land.', exEn: 'The gardener has a job in the countryside.' },
    { de: 'G\u00e4rtnerin', art: 'die', gender: 'f', plural: 'G\u00e4rtnerinnen', pos: 'noun', en: 'gardener (female)', hi: 'माली (स्त्री)', ex: 'Ich sehe eine G\u00e4rtnerin.', exEn: 'I see a gardener.' },
    { de: 'Rentner', art: 'der', gender: 'm', plural: 'Rentner', pos: 'noun', en: 'pensioner, retiree', hi: 'सेवानिवृत्त व्यक्ति', ex: 'Der Rentner ist erwachsen und unabh\u00e4ngig.', exEn: 'The pensioner is grown-up and independent.' },
    { de: 'Altenpfleger', art: 'der', gender: 'm', plural: 'Altenpfleger', pos: 'noun', en: 'geriatric nurse', hi: 'बुज़ुर्गों की देखभाल करने वाला', ex: 'Der Altenpfleger hilft \u00e4lteren Menschen.', exEn: 'The geriatric nurse helps older people.' },
    { de: 'Bankkauffrau', art: 'die', gender: 'f', plural: 'Bankkauffrauen', pos: 'noun', en: 'bank clerk (female)', hi: 'बैंक क्लर्क (स्त्री)', ex: 'Eine Bankkauffrau informiert uns \u00fcber die Ausbildung.', exEn: 'A bank clerk informs us about the training.' },
    { de: 'Hotelkaufmann', art: 'der', gender: 'm', plural: 'Hotelkaufm\u00e4nner', pos: 'noun', en: 'hotel management assistant', hi: 'होटल प्रबंधन सहायक', ex: 'Ich habe mit einem Hotelkaufmann gesprochen.', exEn: 'I spoke with a hotel management assistant.' },
    { de: 'Arzthelfer', art: 'der', gender: 'm', plural: 'Arzthelfer', pos: 'noun', en: 'doctor\u2019s assistant', hi: 'डॉक्टर का सहायक', ex: 'Der Arzthelfer arbeitet in der Cafeteria mit uns.', exEn: 'The doctor\u2019s assistant works in the cafeteria with us.' },
    // ===== Workplaces & places =====
    { de: 'Cafeteria', art: 'die', gender: 'f', plural: 'Cafeterien', pos: 'noun', en: 'cafeteria', hi: 'कैफ़ेटेरिया', ex: 'Die Berufsmesse ist in der Cafeteria.', exEn: 'The careers fair is in the cafeteria.' },
    { de: 'Eingang', art: 'der', gender: 'm', plural: 'Eing\u00e4nge', pos: 'noun', en: 'entrance', hi: 'प्रवेश द्वार', ex: 'Der Eingang ist dort.', exEn: 'The entrance is over there.' },
    { de: 'Platz', art: 'der', gender: 'm', plural: 'Pl\u00e4tze', pos: 'noun', en: 'place, spot, square', hi: 'जगह', ex: 'Am n\u00e4chsten Platz steht eine Bankkauffrau.', exEn: 'A bank clerk is at the next spot.' },
    { de: 'Land', art: 'das', gender: 'n', plural: 'L\u00e4nder', pos: 'noun', en: 'countryside, land, country', hi: 'गाँव, देश', ex: 'Sie arbeitet im Land.', exEn: 'She works in the countryside.' },
    { de: 'WG', art: 'die', gender: 'f', plural: 'WGs', pos: 'noun', en: 'shared flat (Wohngemeinschaft)', hi: 'साझा फ़्लैट', ex: 'Rohan wohnt in einer WG.', exEn: 'Rohan lives in a shared flat.' },
    { de: 'Werbeagentur', art: 'die', gender: 'f', plural: 'Werbeagenturen', pos: 'noun', en: 'advertising agency', hi: 'विज्ञापन एजेंसी', ex: 'Max m\u00f6chte in einer Werbeagentur arbeiten.', exEn: 'Max would like to work at an advertising agency.' },
    // ===== Work life =====
    { de: 'Berufserfahrung', art: 'die', gender: 'f', plural: 'Berufserfahrungen', pos: 'noun', en: 'work experience', hi: 'कार्य अनुभव', ex: 'Man braucht Berufserfahrung.', exEn: 'One needs work experience.' },
    { de: 'Berufsleben', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'professional life', hi: 'पेशेवर जीवन', ex: 'Hier ist ein Beitrag \u00fcber das Berufsleben.', exEn: 'Here is an article about professional life.' },
    { de: '\u00dcberstunde', art: 'die', gender: 'f', plural: '\u00dcberstunden', pos: 'noun', en: 'overtime (hour)', hi: 'ओवरटाइम', ex: 'Er macht oft \u00dcberstunden.', exEn: 'He often works overtime.' },
    { de: 'Riesenspa\u00df', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'lots of fun', hi: 'बहुत मज़ा', ex: 'Die Arbeit macht Riesenspa\u00df.', exEn: 'The work is great fun.' },
    { de: 'Behinderung', art: 'die', gender: 'f', plural: 'Behinderungen', pos: 'noun', en: 'disability', hi: 'दिव्यांगता', ex: 'Er hilft Menschen mit einer Behinderung.', exEn: 'He helps people with a disability.' },
    // ===== School =====
    { de: 'Schulabschluss', art: 'der', gender: 'm', plural: 'Schulabschl\u00fcsse', pos: 'noun', en: 'school leaving qualification, graduation', hi: 'स्कूल की उपाधि', ex: 'Nach dem Schulabschluss beginnt die Ausbildung.', exEn: 'After graduation the training begins.' },
    { de: 'Schulfach', art: 'das', gender: 'n', plural: 'Schulf\u00e4cher', pos: 'noun', en: 'school subject', hi: 'स्कूल विषय', ex: 'Mathe ist mein Lieblings-Schulfach.', exEn: 'Maths is my favourite school subject.' },
    { de: 'Fach', art: 'das', gender: 'n', plural: 'F\u00e4cher', pos: 'noun', en: 'subject', hi: 'विषय', ex: 'Welches Fach magst du?', exEn: 'Which subject do you like?' },
    { de: 'Schultyp', art: 'der', gender: 'm', plural: 'Schultypen', pos: 'noun', en: 'type of school', hi: 'स्कूल का प्रकार', ex: 'Die Hauptschule ist ein Schultyp.', exEn: 'The Hauptschule is a type of school.' },
    { de: 'Hauptschule', art: 'die', gender: 'f', plural: 'Hauptschulen', pos: 'noun', en: 'secondary (lower) school', hi: 'माध्यमिक स्कूल', ex: 'Rohan war auf einer Hauptschule.', exEn: 'Rohan went to a Hauptschule.' },
    { de: 'Sch\u00fclerin', art: 'die', gender: 'f', plural: 'Sch\u00fclerinnen', pos: 'noun', en: 'pupil (female)', hi: 'छात्रा', ex: 'Die Sch\u00fclerin macht bald ihren Schulabschluss.', exEn: 'The pupil will graduate soon.' },
    { de: 'Schuluniform', art: 'die', gender: 'f', plural: 'Schuluniformen', pos: 'noun', en: 'school uniform', hi: 'स्कूल वर्दी', ex: 'In Indien tr\u00e4gt man eine Schuluniform.', exEn: 'In India you wear a school uniform.' },
    { de: 'Unterrichtszeit', art: 'die', gender: 'f', plural: 'Unterrichtszeiten', pos: 'noun', en: 'class time, lesson time', hi: 'कक्षा का समय', ex: 'Die Unterrichtszeit beginnt um acht.', exEn: 'Class time starts at eight.' },
    { de: 'Vokabeltest', art: 'der', gender: 'm', plural: 'Vokabeltests', pos: 'noun', en: 'vocabulary test', hi: 'शब्दावली परीक्षा', ex: 'Rohan schl\u00e4gt einen Vokabeltest vor.', exEn: 'Rohan suggests a vocabulary test.' },
    { de: 'Theatergruppe', art: 'die', gender: 'f', plural: 'Theatergruppen', pos: 'noun', en: 'drama group', hi: 'नाटक समूह', ex: 'Anna war in einer Theatergruppe.', exEn: 'Anna was in a drama group.' },
    { de: 'Lernerfahrung', art: 'die', gender: 'f', plural: 'Lernerfahrungen', pos: 'noun', en: 'learning experience', hi: 'सीखने का अनुभव', ex: 'Die Theatergruppe war eine tolle Lernerfahrung.', exEn: 'The drama group was a great learning experience.' },
    // ===== School subjects =====
    { de: 'Kunsterziehung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'art (education)', hi: 'कला शिक्षा', ex: 'Kunsterziehung ist ein kreatives Fach.', exEn: 'Art is a creative subject.' },
    { de: 'Medizin', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'medicine', hi: 'चिकित्सा', ex: 'Sie studiert Medizin.', exEn: 'She studies medicine.' },
    { de: 'Grafik', art: 'die', gender: 'f', plural: 'Grafiken', pos: 'noun', en: 'graphics, diagram', hi: 'ग्राफ़िक, आरेख', ex: 'Die Grafik zeigt die Berufe.', exEn: 'The diagram shows the jobs.' },
    // ===== Ideas & concepts =====
    { de: 'Beitrag', art: 'der', gender: 'm', plural: 'Beitr\u00e4ge', pos: 'noun', en: 'article, contribution, piece', hi: 'लेख, योगदान', ex: 'Hier ist ein Beitrag \u00fcber Berufe.', exEn: 'Here is an article about jobs.' },
    { de: 'Meinung', art: 'die', gender: 'f', plural: 'Meinungen', pos: 'noun', en: 'opinion', hi: 'राय', ex: 'Das ist auch meine Meinung.', exEn: 'That\u2019s my opinion too.' },
    { de: 'Unterschied', art: 'der', gender: 'm', plural: 'Unterschiede', pos: 'noun', en: 'difference', hi: 'अंतर', ex: 'Was ist der Unterschied?', exEn: 'What is the difference?' },
    { de: 'Artikelwort', art: 'das', gender: 'n', plural: 'Artikelw\u00f6rter', pos: 'noun', en: 'determiner (der/ein/mein\u2026)', hi: 'निर्धारक शब्द', ex: 'Ein Artikelwort steht vor dem Nomen.', exEn: 'A determiner stands before the noun.' },
    // ===== Verbs =====
    { de: 'organisieren', pos: 'verb', en: 'to organise', hi: 'आयोजित करना', ex: 'Wir organisieren eine Berufsmesse.', exEn: 'We organise a careers fair.', conj: { praesens: 'organisiert', praeteritum: 'organisierte', perfekt: 'hat organisiert' } },
    { de: 'informieren', pos: 'verb', en: 'to inform', hi: 'सूचित करना', ex: 'Die Bankkauffrau informiert uns.', exEn: 'The bank clerk informs us.', conj: { praesens: 'informiert', praeteritum: 'informierte', perfekt: 'hat informiert' } },
    { de: 'heiraten', pos: 'verb', en: 'to marry', hi: 'शादी करना', ex: 'Sie will bald heiraten.', exEn: 'She wants to marry soon.', conj: { praesens: 'heiratet', praeteritum: 'heiratete', perfekt: 'hat geheiratet' } },
    { de: 'vorschlagen', pos: 'verb', en: 'to suggest (separable)', hi: 'सुझाव देना', ex: 'Ich schlage einen Vokabeltest vor.', exEn: 'I suggest a vocabulary test.', conj: { praesens: 'schl\u00e4gt vor', praeteritum: 'schlug vor', perfekt: 'hat vorgeschlagen' } },
    { de: 'weitersuchen', pos: 'verb', en: 'to keep searching (separable)', hi: 'ढूँढते रहना', ex: 'Zuerst suchen wir weiter.', exEn: 'First we keep looking.', conj: { praesens: 'sucht weiter', praeteritum: 'suchte weiter', perfekt: 'hat weitergesucht' } },
    // ===== Adjectives / adverbs / phrases =====
    { de: 'erwachsen', pos: 'adjective', en: 'grown-up, adult', hi: 'वयस्क', ex: 'Der Rentner ist erwachsen.', exEn: 'The pensioner is grown-up.' },
    { de: 'unabh\u00e4ngig', pos: 'adjective', en: 'independent', hi: 'स्वतंत्र, आत्मनिर्भर', ex: 'Mit einer Arbeit ist man unabh\u00e4ngig.', exEn: 'With a job you are independent.' },
    { de: 'salzig', pos: 'adjective', en: 'salty', hi: 'नमकीन', ex: 'Das Essen in der Cafeteria ist salzig.', exEn: 'The food in the cafeteria is salty.' },
    { de: 'konjugiert', pos: 'adjective', en: 'conjugated, inflected', hi: 'रूपांतरित', ex: 'Jedes Artikelwort wird anders konjugiert.', exEn: 'Every determiner is inflected differently.' },
    { de: 'heute', pos: 'adverb', en: 'today', hi: 'आज', ex: 'Heute ist die Berufsmesse.', exEn: 'Today is the careers fair.' },
    { de: 'Lieblings-', pos: 'prefix', en: 'favourite (prefix)', hi: 'पसंदीदा', ex: 'Kunsterziehung ist mein Lieblings-Fach.', exEn: 'Art is my favourite subject.' },
    { de: 'zum Beispiel', pos: 'phrase', en: 'for example (z. B.)', hi: 'उदाहरण के लिए', ex: 'Ein Artikelwort ist zum Beispiel der oder ein.', exEn: 'A determiner is, for example, der or ein.' }
  ],

  // ---------- Article review (rule cards → accordion) ----------
  grammar: [
    {
      title: 'der / die / das \u2014 the definite article, at a glance',
      goldenRule: 'Learn the noun <b>with</b> its article. And every plural is <b>die</b>.',
      memoryTrick: 'Plural mein gender khatam \u2014 sab <b>die</b>. Yeh sabse sasta jeet hai.',
      body: [
        'Every German noun carries a gender \u2014 masculine, feminine or neuter \u2014 and the <strong>definite</strong> article (English <em>the</em>) shows it. In the plural, all three collapse into one: always <strong>die</strong>.'
      ],
      table: {
        head: ['Gender', 'Definite (the)', 'Example'],
        rows: [
          ['masculine', '<span class="de r-article">der</span>', '<span class="de">der Rentner, der Platz, der Eingang</span>'],
          ['feminine', '<span class="de r-article">die</span>', '<span class="de">die G\u00e4rtnerin, die Arbeit, die Meinung</span>'],
          ['neuter', '<span class="de r-article">das</span>', '<span class="de">das Land, das Fach, das Berufsleben</span>'],
          ['plural (all)', '<span class="de r-article">die</span>', '<span class="de">die Pl\u00e4tze, die F\u00e4cher, die Meinungen</span>']
        ]
      },
      note: 'The plural is the easy one: <b>die</b> for everything \u2014 die Rentner, die G\u00e4rtnerinnen, die L\u00e4nder. Always learn a noun <b>with</b> its article, never alone: not "Platz" but "<b>der</b> Platz".',
      hinglish: 'Har German noun ka ek gender hota hai: der (m), die (f), das (n). Plural mein hamesha die. Noun hamesha article ke saath yaad karo \u2014 "Platz" nahi, "der Platz". Hindi mein gender natural aata hai; German mein yaad karna padta hai.'
    },
    {
      title: 'ein / eine \u2014 the indefinite article',
      body: [
        'The <strong>indefinite</strong> article (English <em>a/an</em>) has just two nominative shapes: <strong>ein</strong> for masculine and neuter, <strong>eine</strong> for feminine. There is <strong>no plural</strong> \u2014 "a books" makes no sense in German either.'
      ],
      table: {
        head: ['Gender', 'Indefinite (a)', 'Example'],
        rows: [
          ['masculine', '<span class="de r-article">ein</span>', '<span class="de">ein Rentner, ein Platz</span>'],
          ['feminine', '<span class="de r-article">eine</span>', '<span class="de">eine G\u00e4rtnerin, eine Arbeit</span>'],
          ['neuter', '<span class="de r-article">ein</span>', '<span class="de">ein Land, ein Fach</span>'],
          ['plural', '\u2014 (none)', '<span class="de">Pl\u00e4tze, F\u00e4cher</span> (no article)']
        ]
      },
      note: 'Note that masculine and neuter share <b>ein</b> in the nominative \u2014 the difference only shows up in the accusative and dative (next card). Its negative, <b>kein/keine</b>, behaves exactly the same way.',
      hinglish: 'Indefinite article ki do hi shapes hain: <b>ein</b> masculine aur neuter ke liye, aur <b>eine</b> feminine ke liye. Plural mein indefinite article hota hi nahi. <b>kein/keine</b> bhi bilkul isi tarah chalte hain.'
    },
    {
      title: 'Across the cases \u2014 only the masculine really changes',
      goldenRule: 'In the accusative <b>only masculine</b> moves (der\u2192den, ein\u2192einen). In the dative everything moves.',
      formula: [
        'Nom:  der / die / das / die',
        'Akk:  <b>den</b> / die / das / die     \u2190 only masc. changed',
        'Dat:  dem / der / dem / <b>den</b> +n'
      ],
      memoryTrick: 'Akkusativ mein sirf masculine par nazar rakho. Dativ mein har jagah <b>m</b> ya <b>r</b> sunai deta hai: dem, der, dem, den.',
      recap: [
        'Accusative: masculine only \u2014 <b>den / einen</b>.',
        'Dative: <b>dem / der / dem / den</b>, and the plural noun adds <b>-n</b>.',
        'Feminine and neuter never change in the accusative.'
      ],
      body: [
        'You met this in A1. The comforting news for review: in the <strong>accusative</strong>, only the <strong>masculine</strong> changes. Feminine, neuter and plural look identical to the nominative.'
      ],
      table: {
        head: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominativ', '<span class="de r-article">der / ein</span>', '<span class="de r-article">die / eine</span>', '<span class="de r-article">das / ein</span>', '<span class="de r-article">die</span>'],
          ['Akkusativ', '<span class="de r-akkusativ">den / einen</span>', '<span class="de r-article">die / eine</span>', '<span class="de r-article">das / ein</span>', '<span class="de r-article">die</span>'],
          ['Dativ', '<span class="de r-dativ">dem / einem</span>', '<span class="de r-dativ">der / einer</span>', '<span class="de r-dativ">dem / einem</span>', '<span class="de r-dativ">den (+n)</span>']
        ]
      },
      note: 'Watch the masculine journey: <span class="de">der Mann \u2192 ich sehe <b>den</b> Mann \u2192 mit <b>dem</b> Mann</span>, and <span class="de">ein \u2192 <b>einen</b> \u2192 <b>einem</b></span>. In the dative plural the noun itself gains an <b>-n</b>: mit <b>den</b> Kinder<b>n</b>.',
      hinglish: 'Achhi khabar: Akkusativ mein sirf masculine badalta hai (der\u2192den, ein\u2192einen). fem/neut/plural same rehte hain. Dativ mein sab badalte hain: dem/der/dem, aur plural noun par extra -n: mit den Kindern.'
    },
    {
      title: 'Gender patterns you can trust',
      goldenRule: 'Endings are good <b>guesses</b>: <b>-in -ung -heit -keit -schaft</b> \u2192 die \u00b7 <b>-er -ling -ismus</b> \u2192 der \u00b7 <b>-chen -lein -um -ment</b> \u2192 das.',
      memoryTrick: 'Ending dekh kar andaaza lagao \u2014 aur <b>-chen/-lein</b> to hamesha <b>das</b> hota hai, chahe matlab kuch bhi ho (das M\u00e4dchen).',
      body: [
        'Gender feels random, but noun <strong>endings</strong> predict it surprisingly often. These three groups are reliable enough to lean on:'
      ],
      table: {
        head: ['Ending', 'Usually', 'Chapter examples'],
        rows: [
          ['-in, -ung, -heit, -keit, -schaft', '<span class="de r-article">die</span> (fem.)', '<span class="de">die G\u00e4rtnerin, die Sch\u00fclerin, die Behinderung, die Meinung</span>'],
          ['-er, -ling, -ismus', '<span class="de r-article">der</span> (masc.)', '<span class="de">der Rentner, der Arzthelfer, der Altenpfleger</span>'],
          ['-chen, -lein, -um, -ment', '<span class="de r-article">das</span> (neut.)', '<span class="de">das M\u00e4dchen, das Zentrum</span>'],
          ['compound noun', 'gender of the LAST part', '<span class="de">die Schul\u00b7uniform</span> (die Uniform), <span class="de">der Vokabel\u00b7test</span> (der Test)']
        ]
      },
      note: 'For a compound, only the <b>last</b> noun decides: <span class="de">der Beruf + das Leben = <b>das</b> Berufsleben</span>; <span class="de">die Schule + der Abschluss = <b>der</b> Schulabschluss</span>. That one rule settles most of this chapter\u2019s long words.',
      hinglish: 'Ending dekh kar gender ka andaaza lag jaata hai. <b>-in</b>, <b>-ung</b> aur <b>-heit</b> wale nouns aksar <b>die</b> lete hain; <b>-er</b> aur <b>-ling</b> wale <b>der</b>; aur <b>-chen</b> aur <b>-um</b> wale <b>das</b>. Compound word mein sirf aakhri hissa gender decide karta hai, isliye <b>das Berufsleben</b> (kyunki <b>das Leben</b>) aur <b>der Schulabschluss</b> (kyunki <b>der Abschluss</b>).'
    },
    {
      title: 'definite vs indefinite \u2014 which one, when?',
      body: [
        'Same choice as English <em>the</em> vs <em>a</em>: use the <strong>indefinite</strong> when something is new or non-specific, and the <strong>definite</strong> once it\u2019s known or unique.'
      ],
      table: {
        head: ['Use', 'Article', 'Example'],
        rows: [
          ['first mention / non-specific', '<span class="de r-article">ein/eine</span>', '<span class="de">Dort steht <b>ein</b> Altenpfleger.</span>'],
          ['already known / specific', '<span class="de r-article">der/die/das</span>', '<span class="de"><b>Der</b> Altenpfleger hilft Menschen.</span>'],
          ['unique / general truth', '<span class="de r-article">der/die/das</span>', '<span class="de"><b>Die</b> Arbeit macht Riesenspa\u00df.</span>'],
          ['none (job after sein/werden)', '\u2014', '<span class="de">Sie ist Bankkauffrau.</span> (no article)']
        ]
      },
      note: 'One handy exception: after <b>sein</b>/<b>werden</b>, professions take <b>no article</b> \u2014 "Er ist Altenpfleger", "Sie wird G\u00e4rtnerin". Just like we\u2019d say it in Hindi.',
      hinglish: '<b>ein/eine</b> tab use hota hai jab cheez pehli baar aa rahi ho ya baat general ho. <b>der/die/das</b> tab aata hai jab cheez pehle se maloom ho. Aur profession batate waqt <b>sein</b> ya <b>werden</b> ke baad koi article nahi lagta: <b>Er ist Altenpfleger</b> \u2014 yeh Hindi jaisa hi hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four article traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich sehe der Rentner.', right: 'Ich sehe den Rentner.', why: 'Accusative masculine: der \u2192 den, ein \u2192 einen.' },
        { wrong: 'mit dem G\u00e4rtnerin', right: 'mit der G\u00e4rtnerin', why: 'G\u00e4rtnerin is feminine (-in), and feminine dative is der \u2014 not dem.' },
        { wrong: 'Sie ist eine Bankkauffrau.', right: 'Sie ist Bankkauffrau.', why: 'Professions after sein/werden take no article.' },
        { wrong: 'die Berufsleben', right: 'das Berufsleben', why: 'A compound takes the gender of its LAST part: das Leben \u2192 das Berufsleben.' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. Akkusativ mein masculine article badalta hai: <b>der</b> se <b>den</b>. <b>-in</b> wale nouns feminine hote hain, isliye <b>mit der G\u00e4rtnerin</b>. Profession batate waqt article nahi lagta: <b>Sie ist Bankkauffrau</b>. Aur compound word ka gender uske aakhri hisse se decide hota hai: <b>das Berufsleben</b>, kyunki <b>das Leben</b>.'
    }
  ],

  // ---------- Reading passage (Annas Schulzeit, clickable) ----------
  reading: {
    title: 'Annas Schulzeit',
    titleEn: 'Anna\u2019s school days',
    tokens: [
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb \u00b7 time', why: 'heute (this chapter).', ex: 'Heute denke ich an die Schule.', exEn: 'Today I think of school.' },
      { w: 'denke', role: 'r-verb', en: 'think', hi: 'सोचती हूँ', pron: 'DEN-kuh', type: 'Verb \u00b7 denken' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'an', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'an', type: 'Preposition', why: 'denken an + Akkusativ (recycled \u2014 Wechselpr\u00e4positionen).', ex: 'Ich denke an die Schule.', exEn: 'I think about school.' },
      { w: 'meine', role: 'r-akkusativ', en: 'my', hi: 'अपने', pron: 'MY-nuh', type: 'Possessive \u00b7 acc.' },
      { w: 'Schulzeit', role: 'r-object', en: 'school days', hi: 'स्कूली दिन', pron: 'SHOOL-tsite', type: 'Noun \u00b7 fem.', why: 'compound: die Zeit \u2192 die Schulzeit (this chapter pattern).', ex: 'meine Schulzeit', exEn: 'my school days' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)', why: 'war \u2014 simple past of sein (recycled \u2014 Pr\u00e4teritum).', ex: 'Ich war eine Sch\u00fclerin.', exEn: 'I was a pupil.' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'INE-uh', type: 'Article' },
      { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
      { w: 'Sch\u00fclerin', role: 'r-subject', en: 'pupil (f.)', hi: 'छात्रा', pron: 'SH\u00dc-ler-in', type: 'Noun \u00b7 fem.', why: '-in \u2192 feminine: die Sch\u00fclerin (this chapter).', ex: 'eine gute Sch\u00fclerin', exEn: 'a good pupil' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Lieblings-Fach', role: 'r-subject', en: 'favourite subject', hi: 'पसंदीदा विषय', pron: 'LEEP-lings-fakh', type: 'Noun \u00b7 neut.', why: 'Lieblings- (prefix) + das Fach (this chapter).', ex: 'mein Lieblings-Fach', exEn: 'my favourite subject' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Kunsterziehung', role: 'r-subject', en: 'art', hi: 'कला शिक्षा', pron: 'KUNST-air-tsee-ung', type: 'Noun \u00b7 fem.', why: '-ung \u2192 feminine: die Kunsterziehung (this chapter).', ex: 'die Kunsterziehung', exEn: 'art (as a subject)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mochte', role: 'r-verb', en: 'liked', hi: 'पसंद था', pron: 'MOKH-tuh', type: 'Verb \u00b7 m\u00f6gen (Pr\u00e4t.)', why: 'mochte \u2014 simple past of m\u00f6gen (recycled \u2014 Modalverben).', ex: 'Ich mochte Medizin.', exEn: 'I liked medicine.' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'Medizin', role: 'r-object', en: 'medicine', hi: 'चिकित्सा', pron: 'me-di-TSEEN', type: 'Noun \u00b7 fem.', why: 'die Medizin (this chapter).', ex: 'Ich mochte Medizin.', exEn: 'I liked medicine.' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Schule', role: 'r-subject', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun \u00b7 fem.', why: 'die Schule (recycled \u2014 Ort).', ex: 'meine Schule', exEn: 'my school' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'INE-uh', type: 'Article' },
      { w: 'Hauptschule', role: 'r-subject', en: 'secondary school', hi: 'माध्यमिक स्कूल', pron: 'HOWPT-shoo-luh', type: 'Noun \u00b7 fem.', why: 'compound: die Schule \u2192 die Hauptschule (this chapter).', ex: 'eine Hauptschule', exEn: 'a secondary school' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'dieser', role: 'r-subject', en: 'this', hi: 'यह', pron: 'DEE-zer', type: 'Determiner', why: 'dieser like der \u2014 masc.: dieser Schultyp (recycled \u2014 Welcher & dieser).', ex: 'dieser Schultyp', exEn: 'this type of school' },
      { w: 'Schultyp', role: 'r-subject', en: 'type of school', hi: 'स्कूल का प्रकार', pron: 'SHOOL-t\u00fcp', type: 'Noun \u00b7 masc.', why: 'der Schultyp (this chapter).', ex: 'dieser Schultyp', exEn: 'this type of school' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मुझे', pron: 'meer', type: 'Pronoun \u00b7 dative', why: 'gefallen + Dativ (recycled \u2014 Verben mit Dativ).', ex: 'Er hat mir gefallen.', exEn: 'I liked it.' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
      { w: 'gefallen', role: 'r-verb', en: 'pleased', hi: 'पसंद आया', pron: 'guh-FA-len', type: 'Partizip II \u00b7 gefallen', why: 'Perfekt (recycled \u2014 Perfekt Wdh.).', ex: 'Es hat mir gefallen.', exEn: 'I liked it.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'hatten', role: 'r-verb', en: 'had', hi: 'नहीं थी', pron: 'HA-ten', type: 'Verb \u00b7 haben (Pr\u00e4t.)', why: 'hatten \u2014 simple past of haben (recycled \u2014 Pr\u00e4teritum).', ex: 'Wir hatten keine Schuluniform.', exEn: 'We had no school uniform.' },
      { w: 'keine', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Negation article', why: 'kein/keine like ein/eine (recycled \u2014 Negation).', ex: 'keine Schuluniform', exEn: 'no school uniform' },
      { w: 'Schuluniform', role: 'r-object', en: 'school uniform', hi: 'स्कूल वर्दी', pron: 'SHOOL-oo-ni-form', type: 'Noun \u00b7 fem.', why: 'compound: die Uniform \u2192 die Schuluniform (this chapter).', ex: 'keine Schuluniform', exEn: 'no school uniform' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Nachmittag', role: 'r-time', en: 'afternoon', hi: 'दोपहर', pron: 'NAHKH-mi-tahk', type: 'Noun \u00b7 masc.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition \u00b7 Wechsel' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'INE-er', type: 'Article \u00b7 dative', why: 'in + Dativ; eine \u2192 einer (recycled \u2014 Dativ).', ex: 'in einer Theatergruppe', exEn: 'in a drama group' },
      { w: 'Theatergruppe', role: 'r-place', en: 'drama group', hi: 'नाटक समूह', pron: 'te-AH-ter-gru-puh', type: 'Noun \u00b7 fem.', why: 'die Theatergruppe (this chapter).', ex: 'in einer Theatergruppe', exEn: 'in a drama group' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'sch\u00f6ne', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'SH\u00d6-nuh', type: 'Adjective' },
      { w: 'Lernerfahrung', role: 'r-object', en: 'learning experience', hi: 'सीखने का अनुभव', pron: 'LAIRN-air-fah-rung', type: 'Noun \u00b7 fem.', why: '-ung \u2192 feminine: die Lernerfahrung (this chapter).', ex: 'eine sch\u00f6ne Lernerfahrung', exEn: 'a lovely learning experience' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition \u00b7 Dativ', why: 'nach + Dativ (recycled \u2014 Pr\u00e4positionen mit Dativ).', ex: 'nach dem Schulabschluss', exEn: 'after graduation' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Schulabschluss', role: 'r-place', en: 'graduation', hi: 'स्कूल की उपाधि', pron: 'SHOOL-ap-shluss', type: 'Noun \u00b7 masc.', why: 'compound: der Abschluss \u2192 der Schulabschluss (this chapter).', ex: 'nach dem Schulabschluss', exEn: 'after graduation' },
      { w: 'will', role: 'r-modalverb', en: 'want to', hi: 'चाहती हूँ', pron: 'vil', type: 'Modalverb \u00b7 wollen', why: 'wollen + Infinitiv am Ende (recycled \u2014 Modalverben 1).', ex: 'Ich will unabh\u00e4ngig sein.', exEn: 'I want to be independent.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'unabh\u00e4ngig', role: 'r-adjective', en: 'independent', hi: 'स्वतंत्र', pron: 'UN-ap-heng-ikh', type: 'Adjective', why: 'unabh\u00e4ngig (this chapter).', ex: 'Ich will unabh\u00e4ngig sein.', exEn: 'I want to be independent.' },
      { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Infinitive' },
      { w: '.', plain: true }
    ],
    translation: 'Today I think about my school days. I was a good pupil. My favourite subject was art, but I also liked medicine. My school was a Hauptschule, and I liked this type of school. We had no school uniform. In the afternoon I was in a drama group. That was a lovely learning experience. After graduation I want to be independent. \u2014 Watch the articles: eine Sch\u00fclerin, die Kunsterziehung, dieser Schultyp, in einer Theatergruppe, nach dem Schulabschluss \u2014 gender and case, every time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_003_L001', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wen hast du beim Tag der offenen Tür getroffen?', en: 'Timo, who did you meet at the open house?' },
      { id: 'A2_003_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Einen Zahnarzt und eine Köchin. Der Zahnarzt war sehr nett.', en: 'A dentist and a chef. The dentist was very nice.' },
      { id: 'A2_003_L003', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe mit einer Lehrerin gesprochen. Die Schule sieht toll aus.', en: 'I talked with a teacher. The school looks great.' },
      { id: 'A2_003_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Möchtest du dort arbeiten?', en: 'Would you like to work there?' },
      { id: 'A2_003_L005', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht! Der Beruf passt gut zu mir.', en: 'Maybe! The profession suits me well.' }
    ],
    transcript: 'Timo, wen hast du beim Tag der offenen Tür getroffen? Einen Zahnarzt und eine Köchin. Der Zahnarzt war sehr nett. Ich habe mit einer Lehrerin gesprochen. Die Schule sieht toll aus. Möchtest du dort arbeiten? Vielleicht! Der Beruf passt gut zu mir.',
    translation: 'Timo, who did you meet at the open house? A dentist and a chef. The dentist was very nice. I talked with a teacher. The school looks great. Would you like to work there? Maybe! The profession suits me well.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wen' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'beim' },
      { w: 'Tag' },
      { w: 'der' },
      { w: 'offenen' },
      { w: 'Tür' },
      { w: 'getroffen' },
      { w: '?', plain: true },
      { w: 'Einen' },
      { w: 'Zahnarzt' },
      { w: 'und' },
      { w: 'eine' },
      { w: 'Köchin' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Zahnarzt' },
      { w: 'war' },
      { w: 'sehr' },
      { w: 'nett' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'mit' },
      { w: 'einer' },
      { w: 'Lehrerin' },
      { w: 'gesprochen' },
      { w: '.', plain: true },
      { w: 'Die' },
      { w: 'Schule' },
      { w: 'sieht' },
      { w: 'toll' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Möchtest' },
      { w: 'du' },
      { w: 'dort' },
      { w: 'arbeiten' },
      { w: '?', plain: true },
      { w: 'Vielleicht' },
      { w: '!', plain: true },
      { w: 'Der' },
      { w: 'Beruf' },
      { w: 'passt' },
      { w: 'gut' },
      { w: 'zu' },
      { w: 'mir' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wen hat Timo getroffen?', qEn: 'Who did Timo meet?', options: ['einen Bankangestellten', 'einen Zahnarzt und eine Köchin', 'eine Gärtnerin', 'einen Lehrer'], optionsEn: ['a bank clerk', 'a dentist and a cook', 'a gardener', 'a teacher'], answer: 1,
        explain: '"Einen Zahnarzt und eine Köchin."' },
      { q: 'Mit wem hat Merle gesprochen?', qEn: 'Who did Merle talk to?', options: ['einer Ärztin', 'einer Lehrerin', 'einem Koch', 'einer Gärtnerin'], optionsEn: ['a doctor', 'a teacher', 'a cook', 'a gardener'], answer: 1,
        explain: '"Ich habe mit einer Lehrerin gesprochen."' }
    ]
  },

  speaking: [
    { task: "Eine Bekannte fragt: Was machen deine Geschwister?", taskEn: "An acquaintance asks: what do your siblings do?", de: "Meine Schwester ist Gärtnerin und mein Bruder ist Altenpfleger.", en: "My sister is a gardener and my brother is a care worker." },
    { task: "Dein Freund fragt: Wo arbeitest du und wie ist es dort?", taskEn: "Your friend asks: where do you work and what's it like?", de: "Ich arbeite in einer Werbeagentur. Das Team ist klein, aber die Arbeit macht Spaß.", en: "I work at an advertising agency. The team is small, but the work is fun." },
    { task: "Deine Nachbarin fragt: Wie war dein Schulabschluss?", taskEn: "Your neighbour asks: how was your school-leaving qualification?", de: "Mein Schulabschluss war gut. Mein Lieblingsfach war Biologie.", en: "My school-leaving qualification was good. My favourite subject was biology." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write six sentences about jobs or school. Name at least four different people or places WITH the correct article (der/die/das or ein/eine), use one accusative masculine (den/einen) and one dative (dem/der/einem/einer), and try this chapter\u2019s nouns: der Rentner, die G\u00e4rtnerin, das Fach, die Cafeteria, der Unterschied, die Meinung.',
    starters: ['Das ist der \u2026', 'Ich sehe eine \u2026', 'Mein Lieblings-Fach ist \u2026', 'Nach dem Schulabschluss \u2026'],
    placeholder: 'Das ist der Altenpfleger. Ich sehe eine G\u00e4rtnerin und einen Rentner \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct article: "Ich sehe ___ Rentner." (accusative, masculine)',
      options: ['der', 'den', 'dem', 'das'],
      answer: 1,
      explain: 'Accusative masculine: der \u2192 den. Ich sehe den Rentner.'
    },
    gap: {
      // fill definite (fem. nom.) then indefinite (masc. acc.)
      sentence: ['', ' G\u00e4rtnerin hat ', ' Garten.'],
      gaps: [ { answer: 'Die', accepts: ['die'] }, { answer: 'einen', accepts: ['einen'] } ],
      explain: 'die G\u00e4rtnerin (fem. nominative) \u00b7 einen Garten (masc. accusative: ein \u2192 einen).'
    },
    match: {
      q: 'Match each profession to where they work.',
      pairs: [
        { noun: 'die G\u00e4rtnerin', art: 'arbeitet im Land' },
        { noun: 'der Altenpfleger', art: 'hilft \u00e4lteren Menschen' },
        { noun: 'die Bankkauffrau', art: 'arbeitet in der Bank' },
        { noun: 'der Hotelkaufmann', art: 'arbeitet im Hotel' },
        { noun: 'der Arzthelfer', art: 'arbeitet beim Arzt' }
      ]
    },
    builder: {
      target: 'Build: "The geriatric nurse helps a pupil."',
      bank: ['Der', 'Altenpfleger', 'hilft', 'einer', 'Sch\u00fclerin'],
      answer: ['Der', 'Altenpfleger', 'hilft', 'einer', 'Sch\u00fclerin'],
      roles: { 'Der': 'r-article', 'Altenpfleger': 'r-subject', 'hilft': 'r-verb', 'einer': 'r-dativ', 'Sch\u00fclerin': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which article is correct? "___ G\u00e4rtnerin arbeitet im Land." (nominative)', options: ['Der', 'Die', 'Das', 'Den'], answer: 1,
      explain: 'G\u00e4rtnerin ends in -in \u2192 feminine \u2192 die.' },
    { q: 'Accusative: "Ich sehe ___ Hotelkaufmann."', options: ['ein', 'einen', 'einem', 'eine'], answer: 1,
      explain: 'Accusative masculine: ein \u2192 einen.' },
    { q: 'What gender is "das Berufsleben"? Why?', options: ['masc., ends in -en', 'fem., it\u2019s about life', 'neut., compound takes the last part (das Leben)', 'it has no gender'], answer: 2,
      explain: 'A compound takes the gender of its last noun: das Leben \u2192 das Berufsleben.' },
    { q: 'Dative: "Ich spreche mit ___ Bankkauffrau."', options: ['einem', 'einen', 'einer', 'eine'], answer: 2,
      explain: 'Feminine dative: eine \u2192 einer. mit einer Bankkauffrau.' },
    { q: 'What is the plural article for all genders?', options: ['der', 'das', 'die', 'den'], answer: 2,
      explain: 'The plural is always die: die Rentner, die G\u00e4rtnerinnen, die L\u00e4nder.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-article', html: 'Three genders, one plural: <span class="de r-article">der</span> (m), <span class="de r-article">die</span> (f), <span class="de r-article">das</span> (n) \u2014 and always <span class="de r-article">die</span> in the plural. Learn every noun WITH its article.' },
    { c: 'r-akkusativ', html: 'Across the cases, only the masculine really moves: <span class="de">der \u2192 <span class="r-akkusativ">den</span> \u2192 <span class="r-dativ">dem</span></span>, <span class="de">ein \u2192 <span class="r-akkusativ">einen</span> \u2192 <span class="r-dativ">einem</span></span>.' },
    { c: 'r-article', html: 'Endings predict gender: <span class="de">-in, -ung, -heit</span> = die; <span class="de">-er, -ling</span> = der; a compound takes the gender of its <b>last</b> part.' }
  ],
  revisionTips: [
    'Never learn a noun bare \u2014 always with its color-coded article: der Platz, die Arbeit, das Fach.',
    'Accusative only touches the masculine (der\u2192den, ein\u2192einen). Feminine, neuter and plural stay put.',
    'For any long compound, cover everything but the last noun \u2014 its article is the whole word\u2019s article.'
  ]
};

window.CHAPTER = CHAPTER;
