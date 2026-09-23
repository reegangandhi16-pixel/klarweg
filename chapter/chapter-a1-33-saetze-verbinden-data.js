/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 33
   "Sätze verbinden"  (connecting sentences)
   Vocabulary source: uploaded chapter-33 word list (10 words).
   Theme = weekend plans, reasons & choices. Recycles Ch1–32.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-33-saetze-verbinden',
  phase: 'A1 · Phase 3',
  number: 33,
  title: 'Sätze verbinden',
  titleEn: 'Connecting Sentences',
  description: 'Turn choppy sentences into real speech. Six little words link your ideas: und, aber, oder, denn and deshalb keep the verb in position 2 — but weil sends it to the very end. Ich bleibe zu Hause, weil ich krank bin.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 34, title: 'Schreiben & Einladungen', titleEn: 'Writing & Invitations' , href: 'chapter-a1-34-schreiben.html' },

  prevChapter: { number: 32, title: 'Akkusativpronomen', titleEn: 'Accusative Pronouns', href: 'chapter-a1-32-akkusativpronomen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Weekend plans are up in the air. Carla wants to go out, but Jonas has a reason to stay in — work — and, as ever, an excuse ready. As they argue it out, every sentence gets glued to the next with und, aber, denn, deshalb and weil.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear weil push the verb to the end, live'
    ],
    scene: 'Wochenendplanung \u2014 im Kurs, Berlin',
    femaleSpeakers: ['Carla'],
    dialogue: [
      { speaker: 'Carla', tokens: [
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आ रहे हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Kino', role: 'r-place', en: 'cinema', hi: 'सिनेमा', pron: 'KEE-no', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'Jonas', role: 'r-name', en: 'Jonas', hi: 'योनास', pron: 'YO-nas', type: 'Name · person' },
        { w: '?', plain: true }
      ], en: 'Are you coming to the cinema today, Jonas?', hi: 'Aaj cinema aa rahe ho, Jonas?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: ',', plain: true },
        { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction · denn', why: 'denn = because; the word order after denn stays normal (this chapter).', ex: 'Ich kann nicht, denn ich arbeite.', exEn: 'I cannot, because I am working.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'arbeite', role: 'r-verb', en: 'am working', hi: 'काम करता हूँ', pron: 'AR-by-tuh', type: 'Verb · arbeiten (ich)' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'No, I cannot today, because I am working late.', hi: 'Nahi, aaj main nahi aa sakta, kyunki main der tak kaam karta hoon.' },
      { speaker: 'Carla', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कितनी', pron: 'vee', type: 'Question word' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: 'arbeitest', role: 'r-verb', en: 'do you work', hi: 'काम करते हो', pron: 'AR-by-test', type: 'Verb · arbeiten (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Oh! How long are you working?', hi: 'Oh! Tum kitni der kaam karte ho?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · time' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'Uhr', role: 'r-time', en: 'o’clock', hi: 'बजे', pron: 'oor', type: 'Noun · time' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'beginnt', role: 'r-verb', en: 'starts', hi: 'शुरू होती है', pron: 'be-GINT', type: 'Verb · beginnen' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'sieben', role: 'r-time', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: ',', plain: true },
        { w: 'also', role: 'r-conjunction', en: 'so', hi: 'तो', pron: 'AL-zo', type: 'Conjunction · also', why: 'also = so / therefore; it draws the conclusion (this chapter).', ex: 'Ich arbeite, also komme ich nicht.', exEn: 'I am working, so I am not coming.' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'Until eight o’clock. The film starts at seven, so I am not coming.', hi: 'Aath baje tak. Film saat baje shuru hoti hai, toh main nahi aata.' },
      { speaker: 'Carla', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schade', role: 'r-adjective', en: 'a pity', hi: 'अफ़सोस', pron: 'SHAH-duh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'ना', pron: 'OH-der', type: 'Tag question' },
        { w: '?', plain: true }
      ], en: 'Ah, I see! That is a pity. But we have time tomorrow too, right?', hi: 'Achha samjha! Afsos hai. Par kal bhi hamaare paas time hai, na?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'frei', role: 'r-adjective', en: 'free', hi: 'खाली', pron: 'fry', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'genug', role: 'r-adverb', en: 'enough', hi: 'काफ़ी', pron: 'ge-NOOK', type: 'Adverb · quantity' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction · denn' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'läuft', role: 'r-verb', en: 'is showing', hi: 'चलती है', pron: 'loyft', type: 'Verb · laufen (er/sie/es)', why: 'laufen → er läuft: a → äu (recycled, Ch30).', ex: 'Der Film läuft morgen.', exEn: 'The film is showing tomorrow.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, tomorrow I am free. We have enough time, because the film is showing tomorrow too.', hi: 'Haan, kal main khaali hoon. Hamaare paas bahut time hai, kyunki film kal bhi chalti hai.' },
      { speaker: 'Carla', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'खरीदती हूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Karten', role: 'r-akkusativ', en: 'tickets', hi: 'टिकट', pron: 'KAR-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Great! Then we go tomorrow. I will buy the tickets.', hi: 'Badhiya! Toh hum kal jaate hain. Main tickets khareedungi.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bezahle', role: 'r-verb', en: 'pay', hi: 'देता हूँ', pron: 'be-TSAH-luh', type: 'Verb · bezahlen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction · denn' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'kaufst', role: 'r-verb', en: 'are buying', hi: 'खरीदती हो', pron: 'kowfst', type: 'Verb · kaufen (du)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Karten', role: 'r-akkusativ', en: 'tickets', hi: 'टिकट', pron: 'KAR-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Thanks! But I will pay for the coffee, because you are buying the tickets.', hi: 'Dhanyavaad! Par main coffee ka doonga, kyunki tum tickets khareed rahi ho.' },
      { speaker: 'Carla', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Also', role: 'r-conjunction', en: 'so', hi: 'तो', pron: 'AL-zo', type: 'Conjunction · also' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'sieben', role: 'r-time', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'Perfect! So tomorrow at seven.', hi: 'Badhiya! Toh kal saat baje.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Exactly! See you tomorrow!', hi: 'Bilkul! Kal milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Connectors glue sentences together \u2014 and they fall into two groups by what they do to the verb. <span class="de r-conjunction">und, aber, oder, denn</span> link two complete sentences and leave the verb in <strong>position 2</strong>. <span class="de r-conjunction">deshalb</span> also keeps position 2 (so the verb jumps before the subject). But <span class="de r-conjunction">weil</span> is special: it sends the verb to the <strong>very end</strong>. <span class="de">Ich bleibe zu Hause, weil ich krank <u>bin</u>.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is CONNECTING SENTENCES (Satzverbindung) with und, aber, oder, denn, deshalb and weil. ' +
    'The learner wrote linked sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- und, aber, oder, denn are coordinating: they join two main clauses and the word order in BOTH clauses is normal (verb in position 2). "Ich bin müde, aber ich komme." / "Ich gehe, denn ich habe Zeit."\n' +
    '- weil is subordinating: the conjugated verb moves to the END of the weil-clause. "Ich bleibe zu Hause, weil ich krank bin." (NOT "weil ich bin krank").\n' +
    '- deshalb (therefore/so) is an adverb, not a conjunction: it occupies position 1, so the verb comes next, before the subject. "Es regnet, deshalb bleibe ich zu Hause."\n' +
    '- A comma comes before aber, denn, weil and before deshalb when it starts a new clause. No comma is needed before und/oder at A1.\n' +
    '- denn and weil both mean "because"; denn keeps normal order, weil sends the verb to the end. also = so/therefore (like deshalb).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Connector check:</b> one sentence on whether weil sent the verb to the end and the others kept position 2.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — weil sends the verb to the end and the rest keep position 2. On to Goethe Mini 4.',
    mid: 'Good. Re-read the weil card once (verb to the end!), then continue.',
    low: 'Worth another pass — focus on the weil word-order card in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'bleibe', role: 'r-verb' },
    { w: 'zu', role: 'r-preposition' }, { w: 'Hause', role: 'r-place' },
    { w: ',', role: '' }, { w: 'weil', role: 'r-conjunction' },
    { w: 'ich', role: 'r-subject' }, { w: 'krank', role: 'r-adjective' },
    { w: 'bin', role: 'r-verb' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the two connector groups and what they do to the verb.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Argue out the weekend with the gang — every line glued with und, aber, denn, weil.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the connectors and linking words: denn, also, der Grund, doch, nicht nur and more.' },
    { id: 'grammar',    label: 'Connectors', tag: 'core',
      objective: 'Master und/aber/oder/denn (position 2), deshalb, and weil (verb to the end).' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a connected text full of reasons and choices and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the reason and the contrast in each exchange, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Connect two ideas and give a reason with weil and denn.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five linked sentences and a short paragraph using connectors.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill connector choice and weil word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The connectors and linking words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Connector-choice drills, weil word-order practice, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'und/aber/oder/denn (position 2), deshalb, weil (verb to the end), and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'und, aber, oder', text: 'Link two ideas (verb stays second)' },
    { de: 'denn', text: 'Give a reason, normal word order' },
    { de: 'deshalb', text: 'Express a result (verb before subject)' },
    { de: 'weil … + Verb am Ende', text: 'Give a reason, verb to the end' },
    { de: 'Tee oder Kaffee?', text: 'Offer a choice' }
  ],

  // ---------- Vocabulary (10 words) ----------
  vocab: [
    { de: 'denn', pos: 'conjunction', en: 'because (normal order)', hi: 'क्योंकि', ex: 'Ich gehe, denn ich habe Zeit.', exEn: 'I\u2019m going because I have time.' },
    { de: 'also', pos: 'conjunction', en: 'so, therefore', hi: 'तो, इसलिए', ex: 'Es regnet, also bleibe ich hier.', exEn: 'It\u2019s raining, so I stay here.' },
    { de: 'Grund', art: 'der', gender: 'm', plural: 'Gründe', pos: 'noun', en: 'reason', hi: 'कारण', ex: 'Das ist ein guter Grund.', exEn: 'That is a good reason.' },
    { de: 'doch', pos: 'adverb', en: 'but, yet, on the contrary', hi: 'फिर भी', ex: 'Es ist spät, doch ich lerne weiter.', exEn: 'It\u2019s late, yet I keep studying.' },
    { de: 'nicht nur', pos: 'phrase', en: 'not only', hi: 'सिर्फ़ नहीं', ex: 'Nicht nur Tee, auch Kaffee.', exEn: 'Not only tea, also coffee.' },
    { de: 'durch', pos: 'preposition', en: 'through', hi: 'के द्वारा', ex: 'Wir gehen durch den Park.', exEn: 'We go through the park.' },
    { de: 'durch (Portal)', pos: 'preposition', en: 'through (a portal/door)', hi: 'से होकर', ex: 'Geh durch die Tür.', exEn: 'Go through the door.' },
    { de: 'ebenso', pos: 'adverb', en: 'likewise, also', hi: 'इसी तरह', ex: 'Anna kommt, Rohan ebenso.', exEn: 'Anna comes, Rohan likewise.' },
    { de: 'Ereignis', art: 'das', gender: 'n', plural: 'Ereignisse', pos: 'noun', en: 'event, result', hi: 'घटना', ex: 'Das Fest war ein großes Ereignis.', exEn: 'The party was a big event.' },
    { de: 'Aussage', art: 'die', gender: 'f', plural: 'Aussagen', pos: 'noun', en: 'statement', hi: 'बयान', ex: 'Das ist eine klare Aussage.', exEn: 'That is a clear statement.' }
  ],

  // ---------- Connectors (rule cards → accordion) ----------
  grammar: [
    {
      title: 'und, aber, oder, denn — link two sentences',
      goldenRule: 'These four join two full sentences and <b>change nothing</b> — the verb stays in slot 2 on both sides.',
      memoryTrick: 'Chaar aaram-pasand connectors: <b>und, aber, oder, denn</b>. Yeh word order ko chhoote hi nahi.',
      body: [
        'The friendliest connectors. They join two complete main clauses and change <strong>nothing</strong> about word order \u2014 the verb stays in position 2 in both halves.'
      ],
      table: {
        head: ['Connector', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-conjunction">und</span>', 'and', '<span class="de">Ich lerne, und ich höre Musik.</span>'],
          ['<span class="de r-conjunction">aber</span>', 'but', '<span class="de">Ich bin müde, aber ich komme.</span>'],
          ['<span class="de r-conjunction">oder</span>', 'or', '<span class="de">Willst du Tee oder Kaffee?</span>'],
          ['<span class="de r-conjunction">denn</span>', 'because', '<span class="de">Ich gehe, denn ich habe Zeit.</span>']
        ]
      },
      note: 'These four (und, aber, oder, denn) are <b>coordinating</b> \u2014 verb stays in position 2 in both clauses. Put a comma before <b>aber</b> and <b>denn</b>; none is needed before und/oder.',
      hinglish: 'Yeh chaar connectors sabse aasaan hain: <b>und</b>, <b>aber</b>, <b>oder</b> aur <b>denn</b>. Yeh word order ko bilkul nahi chhedte \u2014 dono clauses mein verb position 2 par hi rehta hai. <b>aber</b> aur <b>denn</b> se pehle comma lagta hai, par <b>und</b> aur <b>oder</b> se pehle zaroori nahi hai.'
    },
    {
      title: 'denn vs weil — both mean "because"',
      goldenRule: 'Same meaning, opposite behaviour: <b>denn</b> leaves the verb in slot 2; <b>weil</b> throws it to the end.',
      formula: [
        '… <b>denn</b> ich <b>bin</b> krank.     (verb 2 — unchanged)',
        '… <b>weil</b> ich krank <b>bin</b>.     (verb LAST)'
      ],
      compare: {
        intro: 'One idea, two grammars — this is the pair to burn in:',
        head: ['Connector', 'Where the verb goes', 'Sentence'],
        rows: [
          ['<span class="de">denn</span>', 'position 2', '<span class="de">Ich bleibe, denn ich bin krank.</span>'],
          ['<span class="de">weil</span>', 'the very end', '<span class="de">Ich bleibe, weil ich krank bin.</span>']
        ]
      },
      memoryTrick: '<b>WEIL = VERB LAST.</b> Bas yahi ek line yaad rahe to yeh chapter jeet liya.',
      body: [
        'Two ways to give a reason \u2014 same meaning, different word order. This is the heart of the chapter.'
      ],
      table: {
        head: ['Connector', 'Word order', 'Example'],
        rows: [
          ['<span class="de r-conjunction">denn</span>', 'verb in position 2', '<span class="de">Ich bleibe, denn ich <u>bin</u> krank.</span>'],
          ['<span class="de r-conjunction">weil</span>', 'verb at the END', '<span class="de">Ich bleibe, weil ich krank <u>bin</u>.</span>'],
          ['both =', 'because', 'same meaning'],
          ['tip', 'A1 favourite', '<span class="de">weil</span> is tested most']
        ]
      },
      note: '<b>denn</b> keeps normal order (subject + verb + …). <b>weil</b> is <b>subordinating</b>: the conjugated verb jumps to the very end. "… denn ich bin krank" = "… weil ich krank <b>bin</b>."',
      hinglish: '<b>denn</b> aur <b>weil</b> dono ka matlab \u201ckyunki\u201d hai, par kaam alag hai. <b>denn</b> ke saath word order normal rehta hai: <b>\u2026 denn ich bin krank</b>. Lekin <b>weil</b> verb ko sentence ke end mein bhej deta hai: <b>\u2026 weil ich krank bin</b>. Goethe exam mein <b>weil</b> sabse zyada poochha jaata hai, isliye ise pakka karo.'
    },
    {
      title: 'weil — the verb goes to the end',
      goldenRule: 'After <b>weil</b>: subject, then everything else, and the conjugated verb <b>last</b>.',
      why: 'A <i>weil</i>-clause is not a sentence in its own right — it is a piece attached to the main sentence. German marks that dependency by parking the verb at the far end, so you can hear from the word order alone that this half cannot stand alone.',
      memoryTrick: '<b>weil</b> ke baad verb apni seat chhod kar <b>aakhri</b> seat le leta hai. weil = verb ko last seat milti hai.',
      recap: [
        '<b>weil</b> → conjugated verb at the end of its clause.',
        'A comma always comes before <b>weil</b>.',
        '<b>denn</b> means the same but keeps normal order.'
      ],
      body: [
        'After <span class="de r-conjunction">weil</span>, everything shifts: subject first, then the rest, and the conjugated verb lands at the very end of the clause.'
      ],
      table: {
        head: ['weil', 'subject', 'middle', 'verb (end)'],
        rows: [
          ['<span class="de r-conjunction">weil</span>', '<span class="de">ich</span>', '<span class="de">krank</span>', '<span class="de r-verb">bin.</span>'],
          ['<span class="de r-conjunction">weil</span>', '<span class="de">ich</span>', '<span class="de">eine Prüfung</span>', '<span class="de r-verb">habe.</span>'],
          ['<span class="de r-conjunction">weil</span>', '<span class="de">der Kaffee</span>', '<span class="de">mich wach</span>', '<span class="de r-verb">macht.</span>'],
          ['<span class="de r-conjunction">weil</span>', '<span class="de">es</span>', '', '<span class="de r-verb">regnet.</span>']
        ]
      },
      note: 'In the weil-clause the verb is <b>last</b>: "weil ich müde <b>bin</b>", "weil ich Zeit <b>habe</b>". A comma always comes before weil. This "verb to the end" rule is the single most important point of the chapter.',
      hinglish: '<b>weil</b> ke baad pehle subject aata hai, phir baaki cheezein, aur conjugated verb sentence ke end mein chala jaata hai: <b>weil ich m\u00fcde bin</b>, <b>weil ich Zeit habe</b>. <b>weil</b> se pehle comma lagana zaroori hai. Yeh verb-end-mein wala rule A1 ka sabse important rule hai.'
    },
    {
      title: 'deshalb — express a result',
      goldenRule: '<b>deshalb</b> takes slot 1, so the verb lands in slot 2 — <b>before</b> the subject.',
      memoryTrick: 'Reason = <b>weil / denn</b>. Result = <b>deshalb</b>. Aur deshalb slot 1 le leta hai, isliye verb subject se pehle.',
      body: [
        '<span class="de r-conjunction">deshalb</span> (therefore/so) shows a <strong>result</strong>. It is an adverb, so it takes position 1 \u2014 which pushes the verb in front of the subject.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Es regnet, deshalb bleibe ich zu Hause.</span>', 'It\u2019s raining, so I stay home.'],
          ['<span class="de">Ich bin müde, deshalb gehe ich nicht.</span>', 'I\u2019m tired, so I\u2019m not going.'],
          ['<span class="de">also</span>', 'so / therefore (like deshalb)'],
          ['<span class="de">der Grund</span>', 'the reason']
        ]
      },
      note: 'After <b>deshalb</b> the verb comes <b>next</b> (position 2), before the subject: "deshalb <b>bleibe</b> ich …". <b>also</b> works the same way. Cause = weil/denn; result = deshalb/also.',
      hinglish: '<b>deshalb</b> ka matlab \u201cisliye\u201d hai aur yeh result batata hai. Yeh position 1 le leta hai, isliye verb subject se pehle aa jaata hai: <b>deshalb bleibe ich \u2026</b>. <b>also</b> bhi isi tarah kaam karta hai. Simple tarika yeh hai: reason batana ho to <b>weil</b> ya <b>denn</b>, aur result batana ho to <b>deshalb</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four connector traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich bleibe zu Hause, weil ich bin krank.', right: 'Ich bleibe zu Hause, weil ich krank bin.', why: 'After weil the verb goes to the very end: … krank bin.' },
        { wrong: 'Es regnet, deshalb ich bleibe zu Hause.', right: 'Es regnet, deshalb bleibe ich zu Hause.', why: 'After deshalb the verb comes before the subject.' },
        { wrong: 'Ich komme, weil ich habe Zeit.', right: 'Ich komme, weil ich Zeit habe.', why: 'weil → verb last: … Zeit habe.' },
        { wrong: 'Ich lerne und ich bin müde aber.', right: 'Ich lerne, aber ich bin müde.', why: 'aber joins clauses at the front, not the end.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>weil</b> ke baad verb ko sentence ke end mein rakhna hai: <b>\u2026 weil ich krank bin</b>. <b>deshalb</b> ke baad verb subject se pehle aata hai: <b>deshalb bleibe ich \u2026</b>. Perfekt ya modal ho to bhi conjugated verb end mein hi jaayega: <b>\u2026 weil ich Zeit habe</b>. Aur <b>aber</b> clause ke shuru mein aata hai, end mein nahi.'
    }
  ],

  // ---------- Reading passage (connected text, clickable) ----------
  reading: {
    title: 'Das Wochenende',
    titleEn: 'The weekend',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'geht', role: 'r-verb', en: 'goes', hi: 'जाती है', pron: 'gayt', type: 'Verb · gehen (sie)', why: 'gehen (recycled — Verben).', ex: 'Anna geht aus.', exEn: 'Anna goes out.' },
      { w: 'aus', role: 'r-verb', en: 'out', hi: 'बाहर', pron: 'ows', type: 'Separable prefix', why: 'ausgehen (recycled — Perfekt mit sein).', ex: 'Sie geht aus.', exEn: 'She goes out.' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und links two main clauses (this chapter).', ex: 'Anna geht aus, und Rohan lernt.', exEn: 'Anna goes out and Rohan studies.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'bleibt', role: 'r-verb', en: 'stays', hi: 'रहता है', pron: 'blypt', type: 'Verb · bleiben (er)', why: 'bleiben (recycled — Perfekt mit sein).', ex: 'Rohan bleibt zu Hause.', exEn: 'Rohan stays home.' },
      { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition', why: '"zu Hause" = at home.', ex: 'zu Hause', exEn: 'at home' },
      { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place', why: '"zu Hause" (recycled — Possessiv & Familie).', ex: 'zu Hause bleiben', exEn: 'stay home' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'lernt', role: 'r-verb', en: 'studies', hi: 'पढ़ता है', pron: 'lairnt', type: 'Verb · lernen (er)', why: 'lernen (recycled — Verben).', ex: 'Er lernt.', exEn: 'He studies.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction', why: 'weil sends the verb to the END (this chapter).', ex: 'Er lernt, weil er eine Prüfung hat.', exEn: 'He studies because he has an exam.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्दी', pron: 'balt', type: 'Adverb' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Prüfung', role: 'r-object', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.', why: 'die Prüfung (recycled — Perfekt mit haben).', ex: 'eine Prüfung', exEn: 'an exam' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (er)', why: 'In a weil-clause the verb goes to the END (this chapter).', ex: '… weil er eine Prüfung hat.', exEn: '… because he has an exam.' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen (er)', why: 'kommen (recycled — Hallo!).', ex: 'Max kommt nicht.', exEn: 'Max isn\u2019t coming.' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht (recycled — Kein & Nicht).', ex: 'Max kommt nicht.', exEn: 'Max isn\u2019t coming.' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn = because; verb stays position 2 (this chapter).', ex: '…, denn er ist müde.', exEn: '… because he is tired.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)', why: 'denn → verb stays in position 2 (this chapter).', ex: 'denn er ist müde', exEn: 'because he is tired' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'müde (recycled — Adjektive mit sein).', ex: 'Er ist müde.', exEn: 'He is tired.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'regnet', role: 'r-verb', en: 'is raining', hi: 'बारिश हो रही है', pron: 'RAYG-net', type: 'Verb · regnen', why: 'regnen — to rain.', ex: 'Es regnet.', exEn: 'It is raining.' },
      { w: ',', plain: true },
      { w: 'deshalb', role: 'r-conjunction', en: 'so', hi: 'इसलिए', pron: 'DES-halp', type: 'Conjunction', why: 'deshalb → verb comes next, before subject (this chapter).', ex: 'Es regnet, deshalb bleibt er zu Hause.', exEn: 'It\u2019s raining, so he stays home.' },
      { w: 'bleibt', role: 'r-verb', en: 'stays', hi: 'रहता है', pron: 'blypt', type: 'Verb · bleiben (er)', why: 'After deshalb the verb is position 2, before the subject (this chapter).', ex: 'deshalb bleibt er …', exEn: 'so he stays …' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Adverb', why: 'gern (recycled — Hobbies).', ex: 'Er bleibt gern zu Hause.', exEn: 'He gladly stays home.' },
      { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition' },
      { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place', why: '"zu Hause" (recycled — Possessiv & Familie).', ex: 'zu Hause bleiben', exEn: 'stay home' },
      { w: '.', plain: true }
    ],
    translation: 'Anna goes out, and Rohan stays home. He studies because he has an exam soon. Max isn\u2019t coming, because he is tired. It\u2019s raining, so he gladly stays home.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_033_L001', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Carla, kommst du heute zur Party?', en: 'Carla, are you coming to the party today?' },
      { id: 'A1_033_L002', speaker: 'Carla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ich komme, aber ich bleibe nicht lange, weil ich früh aufstehen muss.', en: 'Yes, I\'m coming, but I won\'t stay long because I have to get up early.' },
      { id: 'A1_033_L003', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und Max?', en: 'And Max?' },
      { id: 'A1_033_L004', speaker: 'Carla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Max kommt nicht, denn er ist krank. Er hat auch Fieber, deshalb bleibt er im Bett.', en: 'Max isn\'t coming because he\'s sick. He also has a fever, so he\'s staying in bed.' }
    ],
    transcript: 'Carla, kommst du heute zur Party? Ja, ich komme, aber ich bleibe nicht lange, weil ich früh aufstehen muss. Und Max? Max kommt nicht, denn er ist krank. Er hat auch Fieber, deshalb bleibt er im Bett.',
    translation: 'Carla, are you coming to the party today? Yes, I\'m coming, but I won\'t stay long because I have to get up early. And Max? Max isn\'t coming because he\'s sick. He also has a fever, so he\'s staying in bed.',
    tokens: [
      { w: 'Carla' },
      { w: ',', plain: true },
      { w: 'kommst' },
      { w: 'du' },
      { w: 'heute' },
      { w: 'zur' },
      { w: 'Party' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'komme' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'bleibe' },
      { w: 'nicht' },
      { w: 'lange' },
      { w: ',', plain: true },
      { w: 'weil' },
      { w: 'ich' },
      { w: 'früh' },
      { w: 'aufstehen' },
      { w: 'muss' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'Max' },
      { w: '?', plain: true },
      { w: 'Max' },
      { w: 'kommt' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'denn' },
      { w: 'er' },
      { w: 'ist' },
      { w: 'krank' },
      { w: '.', plain: true },
      { w: 'Er' },
      { w: 'hat' },
      { w: 'auch' },
      { w: 'Fieber' },
      { w: ',', plain: true },
      { w: 'deshalb' },
      { w: 'bleibt' },
      { w: 'er' },
      { w: 'im' },
      { w: 'Bett' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum bleibt Carla nicht lange?', qEn: 'Why won\'t Carla stay long?', options: ['Sie ist müde.', 'Sie muss früh aufstehen.', 'Sie mag keine Partys.', 'Sie hat kein Geld.'], optionsEn: ['She is tired.', 'She has to get up early.', 'She doesn\'t like parties.', 'She has no money.'], answer: 1,
        explain: '"… weil ich früh aufstehen muss."' },
      { q: 'Warum bleibt Max im Bett?', qEn: 'Why is Max staying in bed?', options: ['Er lernt.', 'Er hat Fieber.', 'Er arbeitet.', 'Er hat keine Zeit.'], optionsEn: ['He is studying.', 'He has a fever.', 'He is working.', 'He has no time.'], answer: 1,
        explain: '"Er hat auch Fieber, deshalb bleibt er im Bett."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Warum lernst du so viel?", taskEn: "Your friend asks: why are you studying so much?", de: "Ich lerne viel, weil ich eine Prüfung habe.", en: "I'm studying a lot because I have an exam." },
    { task: "Deine Freundin fragt: Kommst du heute? Du hast keine Zeit.", taskEn: "Your friend asks: are you coming today? You have no time.", de: "Ich komme heute nicht, denn ich habe keine Zeit.", en: "I'm not coming today, because I have no time." },
    { task: "Es regnet. Deine Mutter fragt: Was machst du jetzt?", taskEn: "It's raining. Your mother asks: what are you doing now?", de: "Es regnet, also bleibe ich zu Hause.", en: "It's raining, so I'm staying at home." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five linked sentences about your week. Use und, aber and oder to join ideas; give one reason with weil (verb to the end!) and one with denn (normal order); and show a result with deshalb. Keep the weil-verb at the end.',
    starters: ['Ich lerne Deutsch, und …', 'Ich bin müde, aber …', 'Ich bleibe zu Hause, weil …', 'Es ist spät, deshalb …'],
    placeholder: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence has correct weil word order?',
      options: ['Ich bleibe, weil ich bin müde.', 'Ich bleibe, weil ich müde bin.', 'Ich bleibe, weil bin ich müde.', 'Ich bleibe, weil müde ich bin.'],
      answer: 1,
      explain: 'After weil the verb goes to the end: "… weil ich müde bin."'
    },
    gap: {
      // denn (reason, normal order) + weil contrast handled in note; here choose connectors
      sentence: ['Ich gehe nicht aus, ', ' es regnet. Ich bleibe zu Hause, ', ' ich müde bin.'],
      gaps: [ { answer: 'denn', accepts: ['denn'] }, { answer: 'weil', accepts: ['weil'] } ],
      explain: 'denn keeps normal order; weil sends the verb (bin) to the end.'
    },
    match: {
      q: 'Match each connector to its meaning.',
      pairs: [
        { noun: 'und', art: 'and' },
        { noun: 'aber', art: 'but' },
        { noun: 'weil', art: 'because' },
        { noun: 'deshalb', art: 'therefore' }
      ]
    },
    builder: {
      target: 'Build: "I stay home because I am tired."',
      bank: ['Ich', 'bleibe', 'zu Hause', 'weil', 'ich', 'müde', 'bin'],
      answer: ['Ich', 'bleibe', 'zu Hause', 'weil', 'ich', 'müde', 'bin'],
      roles: { 'Ich': 'r-subject', 'bleibe': 'r-verb', 'zu Hause': 'r-place', 'weil': 'r-conjunction', 'ich': 'r-subject', 'müde': 'r-adjective', 'bin': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'After "weil", where does the conjugated verb go?', options: ['position 1', 'position 2', 'the end', 'after the subject'], answer: 2,
      explain: 'weil is subordinating → verb to the end.' },
    { q: 'Which keeps normal word order (verb in position 2)?', options: ['weil', 'denn', 'dass', 'obwohl'], answer: 1,
      explain: 'denn is coordinating → verb stays in position 2.' },
    { q: 'Complete: "Es regnet, deshalb ___ ich zu Hause."', options: ['ich bleibe', 'bleibe', 'bleiben', 'geblieben'], answer: 1,
      explain: 'After deshalb the verb comes first: "deshalb bleibe ich".' },
    { q: 'Which means "or"?', options: ['und', 'aber', 'oder', 'denn'], answer: 2,
      explain: 'oder = or.' },
    { q: 'Which is correct?', options: ['Ich komme, weil ich habe Zeit.', 'Ich komme, weil ich Zeit habe.', 'Ich komme, weil habe ich Zeit.', 'Ich komme weil ich Zeit habe.'], answer: 1,
      explain: 'weil → verb last, comma before weil: "… weil ich Zeit habe."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-conjunction', html: '<span class="de">und, aber, oder, denn</span> link two sentences and keep the verb in <strong>position 2</strong>.' },
    { c: 'r-conjunction', html: '<span class="de">weil</span> sends the verb to the <strong>very end</strong>: <span class="de">Ich bleibe, weil ich müde bin.</span>' },
    { c: 'r-conjunction', html: '<span class="de">deshalb</span> (result) takes position 1, so the verb comes next: <span class="de">Es regnet, deshalb bleibe ich.</span>' }
  ],
  revisionTips: [
    'Memorise the split: und/aber/oder/denn = verb stays second; weil = verb to the end.',
    'denn and weil both mean "because" — only the word order differs.',
    'After deshalb (and also), the verb jumps in front of the subject.'
  ]
};

window.CHAPTER = CHAPTER;
