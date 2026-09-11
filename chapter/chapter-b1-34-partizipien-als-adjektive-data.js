/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 34
   "Partizipien als Adjektive" — Partizip I (active, verb stem +
   -end) and Partizip II (result/passive) used as adjectives,
   declined exactly like ordinary adjectives. Does NOT introduce
   extended participle constructions, Partizipialattribute with
   long phrases, or B2 literary participles.
   IMPORTANT: dialogue uses ONLY Kirsten and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-34 list (~78 items) — an
   art-auction / mistaken-identity comedy theme (Kunstsupermarkt,
   Auktion, Kunstsammler, Detektiv, Dieb, Missverständnis,
   Impro-Theater…) — an excellent natural fit for participle
   adjectives: der schlafende Hund, das gestohlene Original, die
   wartenden Käufer, der beschädigte Spiegel.
============================================================ */
const CHAPTER = {
  id: 'b1-34-partizipien-als-adjektive',
  phase: 'B1 · Phase 1',
  number: 34,
  title: 'Partizipien als Adjektive',
  titleEn: 'Participles as adjectives',
  description: 'Turn verbs into adjectives: Partizip I (verb stem + -end) describes an ongoing action — der schlafende Hund — while Partizip II describes a completed result — die geschlossene Tür.',
  xp: 300,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 35, title: 'Goethe-Zertifikat B1 Final', titleEn: 'Goethe-Zertifikat B1 — Final exam & graduation' , href: 'chapter-b1-35-goethe-zertifikat-b1-final.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The verb <em>becomes the adjective.</em>',
    intro: 'Kirsten and Timo stumble into a mix-up at an art-supermarket auction — a found mirror, a laughing seller, a damaged pot nobody can explain — every object described with a participle adjective: der gefundene Spiegel, der beschädigte Topf.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Partizip I and Partizip II adjectives used naturally in one conversation'
    ],
    scene: 'Das Missverständnis im Kunstsupermarkt',
    femaleSpeakers: ['Kirsten'],
    dialogue: [
      { speaker: 'Kirsten', tokens: [
        { w: 'Schau', role: 'r-verb', en: 'look', hi: 'देखो', pron: 'show', type: 'Verb · imperative' },
        { w: 'dir', role: 'r-dativ', en: 'yourself', hi: 'ख़ुद के लिए', pron: 'deer', type: 'Reflexive pronoun' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'gefundenen', role: 'r-akkusativ', en: 'found', hi: 'मिली हुई', pron: 'ge-FUN-de-nen', type: 'Partizip I/II als Adjektiv', why: 'Partizip II with adjective endings functions as an attributive adjective (this chapter).', ex: 'der gefundene Spiegel', exEn: 'the found mirror' },
        { w: 'Spiegel', role: 'r-akkusativ', en: 'mirror', hi: 'आईना', pron: 'SHPEE-gel', type: 'Noun · masc.' },
        { w: 'an', role: 'r-place', en: 'over', hi: 'उधर', pron: 'an', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Look at the found mirror over there.', hi: 'Udhar wo mili hui aaina dekho.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wow', role: 'r-subject', en: 'wow', hi: 'वाह', pron: 'vow', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'rumliegende', role: 'r-subject', en: 'lying around', hi: 'पड़ी हुई', pron: 'RUM-lee-gen-duh', type: 'Partizip I als Adjektiv', why: 'Partizip I (present participle) as adjective describes an ongoing state (this chapter).', ex: 'das rumliegende Buch', exEn: 'the lying-around book' },
        { w: 'Buch', role: 'r-subject', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'sieht', role: 'r-verb', en: 'looks', hi: 'दिखता है', pron: 'zeet', type: 'Verb · sehen' },
        { w: 'alt', role: 'r-akkusativ', en: 'old', hi: 'पुराना', pron: 'alt', type: 'Adjective' },
        { w: 'aus', role: 'r-verb', en: '(prefix of aussehen)', hi: '', pron: 'ows', type: 'Separable prefix · Satzende' },
        { w: '.', plain: true }
      ], en: 'Wow! And the lying-around book there looks old.', hi: 'Wah! Aur wahaan padi hui kitaab purani lagti hai.' },
      { speaker: 'Kirsten', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'beschädigten', role: 'r-akkusativ', en: 'damaged', hi: 'क्षतिग्रस्त', pron: 'be-SHEH-dik-ten', type: 'Partizip II als Adjektiv', why: 'beschädigt = damaged (this chapter).', ex: 'der beschädigte Topf', exEn: 'the damaged pot' },
        { w: 'Topf', role: 'r-akkusativ', en: 'pot', hi: 'बर्तन', pron: 'topf', type: 'Noun · masc.' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: '.', plain: true }
      ], en: 'I like the damaged pot nevertheless.', hi: 'Mujhe kshatigrast bartan phir bhi pasand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'lachende', role: 'r-subject', en: 'laughing', hi: 'हंसता हुआ', pron: 'LA-khen-duh', type: 'Partizip I als Adjektiv', why: 'lachend = laughing (this chapter).', ex: 'der lachende Mann', exEn: 'the laughing man' },
        { w: 'Verkäufer', role: 'r-subject', en: 'seller', hi: 'विक्रेता', pron: 'fer-KOY-fer', type: 'Noun · masc.' },
        { w: 'bietet', role: 'r-verb', en: 'offers', hi: 'पेश करता है', pron: 'BEE-tet', type: 'Verb · bieten', lexicalUnit: 'anbieten' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'originellen', role: 'r-akkusativ', en: 'original', hi: 'मौलिक', pron: 'o-ri-gi-NE-len', type: 'Adjective' },
        { w: 'Preis', role: 'r-akkusativ', en: 'price', hi: 'कीमत', pron: 'pryse', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anbieten)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anbieten' },
        { w: '.', plain: true }
      ], en: 'The laughing seller offers an original price.', hi: 'Hansta hua vikreta ek maulik keemat pesh karta hai.' },
      { speaker: 'Kirsten', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'reparierten', role: 'r-akkusativ', en: 'repaired', hi: 'मरम्मत किया हुआ', pron: 're-pa-REER-ten', type: 'Partizip II als Adjektiv', why: 'reparieren → repariert = repaired (recycled B1 Ch4).', ex: 'der reparierte Topf', exEn: 'the repaired pot' },
        { w: 'Topf', role: 'r-akkusativ', en: 'pot', hi: 'बर्तन', pron: 'topf', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Good. I take the repaired pot.', hi: 'Achha. Main marammat kiya hua bartan leti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Passendes', role: 'r-akkusativ', en: 'matching', hi: 'मिलता जुलता', pron: 'PA-sen-des', type: 'Partizip I als Adjektiv', why: 'passend = matching (this chapter).', ex: 'ein passendes Geschenk', exEn: 'a matching gift' },
        { w: 'Geschenk', role: 'r-akkusativ', en: 'gift', hi: 'उपहार', pron: 'ge-SHENK', type: 'Noun · neut.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Küche', role: 'r-akkusativ', en: 'kitchen', hi: 'रसोई', pron: 'KÜ-khuh', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'A matching gift for your kitchen!', hi: 'Tumhaari rasoi ke liye milta julta uphaar!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A verb can step into an adjective\'s place: <span class="de">Partizip I</span> (verb stem + <b>-end</b>) describes an ONGOING action — <span class="de">der schlafende Hund</span> — while <span class="de">Partizip II</span> describes a COMPLETED result — <span class="de">die geschlossene Tür</span>. Both decline exactly like ordinary adjectives.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PARTIZIPIEN ALS ADJEKTIVE (B1 level only): Partizip I (verb stem + -end, e.g. lachend, arbeitend, schlafend) describes an ongoing/active state; Partizip II (e.g. geschlossen, gebaut, verkauft) describes a completed result. Both decline exactly like ordinary adjectives (weak/mixed/strong, matching the article). ' +
    'Do NOT expect extended participle constructions, Partizipialattribute with long phrases, or B2 literary participles — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Partizip I is formed from the verb stem + -end (lachen → lachend), never from Partizip II.\n' +
    '- Participle adjectives take the SAME ending a normal adjective would (weak after der/die/das, mixed after ein/kein/mein, strong with no article).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Partizip I vs II check:</b> one sentence on whether the learner chose the correct participle (ongoing vs completed) for each noun.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly form and decline both Partizip I and Partizip II adjectives every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Partizip I vs Partizip II comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: ongoing action? Partizip I. Completed result? Partizip II.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'schlafende', role: 'plain' },
    { w: 'Hund', role: 'plain' }, { w: 'liegt', role: 'plain' },
    { w: 'auf', role: 'plain' }, { w: 'der', role: 'plain' },
    { w: 'Couch', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Partizip I for ongoing action, Partizip II for a completed result.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Kirsten and Timo investigate an art-supermarket mystery full of participle adjectives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 78 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Partizip I and Partizip II as adjectives, including declension.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style newspaper report full of participle adjectives.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Partizip I vs Partizip II adjectives in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people, places, and objects using participle adjectives naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write descriptions and reports using participle adjectives correctly declined.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb-to-participle transformation and declension.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 300 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 78 chapter words — art-auction and mystery-comedy vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb-to-participle drills, declension practice, error correction, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Partizip I / II reference — formation, declension, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'lachend', text: 'Form Partizip I (verb stem + -end)' },
    { de: 'geschlossen', text: 'Use Partizip II as an adjective' },
    { de: 'der schlafende Hund', text: 'Decline participle adjectives like ordinary adjectives' },
    { de: 'aktiv vs Ergebnis', text: 'Distinguish an ongoing action from a completed result' },
    { de: 'Beschreibungen', text: 'Describe people, places, and objects more naturally' }
  ],

  // ---------- Vocabulary (78 items — full chapter-34 upload list) ----------
  vocab: [
    { de: 'nicht ..., sondern ...', pos: 'grammar', level: 'B1', en: 'not … but rather …', hi: 'नहीं … बल्कि …', ex: 'Es war nicht der Dieb, sondern der Ethnologe.', exEn: 'It wasn\'t the thief, but rather the ethnologist.', exHi: 'Yeh chor nahi, balki ethnologist tha.' },
    { de: 'begrenzt', pos: 'adjective', level: 'B1', en: 'limited', hi: 'सीमित', ex: 'Die Auktion hatte begrenzte Preiskategorien.', exEn: 'The auction had limited price categories.', exHi: 'Neelaami mein seemit mulya shreniyaan thin.' },
    { de: 'beschädigen', pos: 'verb', level: 'B1', en: 'to damage', hi: 'नुक़सान पहुँचाना', ex: 'Er untersuchte den beschädigten Verkaufsraum.', exEn: 'He examined the damaged showroom.', exHi: 'Usne kshatigrast bikri kaksh ki jaanch ki.', conj: { praesens: 'beschädigt', praeteritum: 'beschädigte', perfekt: 'hat beschädigt' } },
    { de: 'chaotisch', pos: 'adjective', level: 'B1', en: 'chaotic', hi: 'अव्यवस्थित', ex: 'Das klingt ziemlich chaotisch.', exEn: 'That sounds quite chaotic.', exHi: 'Yeh kaafi ashaant lagta hai.' },
    { de: 'clever', pos: 'adjective', level: 'B1', en: 'smart, clever', hi: 'चतुर', ex: 'Der clevere Kunsthistoriker glaubt das nicht.', exEn: 'The clever art historian doesn\'t believe that.', exHi: 'Chatur kala itihaaskaar isko nahi maanta.' },
    { de: 'dankbar', pos: 'adjective', level: 'B1', en: 'thankful', hi: 'आभारी', ex: 'Der Kunstsammler wirkte scheinbar dankbar.', exEn: 'The art collector apparently seemed thankful.', exHi: 'Kala sangrahakarta prateet roop se aabhaari lag raha tha.' },
    { de: 'Missverständnis', art: 'das', gender: 'n', plural: 'Missverständnisse', pos: 'noun', level: 'B1', en: 'misunderstanding', hi: 'ग़लतफ़हमी', ex: 'Das klingt nach einem Missverständnis.', exEn: 'That sounds like a misunderstanding.', exHi: 'Yeh galatfahmi jaisa lagta hai.' },
    { de: 'Auktion', art: 'die', gender: 'f', plural: 'Auktionen', pos: 'noun', level: 'B1', en: 'auction', hi: 'नीलामी', ex: 'Es handelt sich um eine Auktion.', exEn: 'It\'s about an auction.', exHi: 'Yeh ek neelaami ki baat hai.' },
    { de: 'Umleitung', art: 'die', gender: 'f', plural: 'Umleitungen', pos: 'noun', level: 'B1', en: 'diversion', hi: 'मार्ग परिवर्तन', ex: 'Die Besucher wurden über die Umleitung informiert.', exEn: 'The visitors were informed about the diversion.', exHi: 'Darshakon ko marg parivartan ke baare mein soochit kiya gaya.' },
    { de: 'Vorstellung', art: 'die', gender: 'f', plural: 'Vorstellungen', pos: 'noun', level: 'B1', en: 'performance', hi: 'प्रदर्शन', ex: 'Die Vorstellung im Impro-Theater war lustig.', exEn: 'The performance at the improv theatre was funny.', exHi: 'Improv theatre mein pradarshan mazedaar tha.' },
    { de: 'einzig', pos: 'adjective', level: 'B1', en: 'only', hi: 'एकमात्र', ex: 'Der Spiegel war das einzige Original.', exEn: 'The mirror was the only original.', exHi: 'Sheesha ekmatra mool tha.' },
    { de: 'erfinden', pos: 'verb', level: 'B1', en: 'to invent', hi: 'आविष्कार करना', ex: 'Er erfand eine neue Ausrede.', exEn: 'He invented a new excuse.', exHi: 'Usne ek naya bahaana banaaya.', conj: { praesens: 'erfindet', praeteritum: 'erfand', perfekt: 'hat erfunden' } },
    { de: 'erraten', pos: 'verb', level: 'B1', en: 'to guess', hi: 'अंदाज़ा लगाना', ex: 'Ratet mal, wer den Farbstift verloren hat.', exEn: 'Guess who lost the crayon.', exHi: 'Andaaza lagao kisne rangeen pencil khoyi.', conj: { praesens: 'errät', praeteritum: 'erriet', perfekt: 'hat erraten' } },
    { de: 'ersetzen', pos: 'verb', level: 'B1', en: 'to replace', hi: 'बदलना', ex: 'Der Kunstsammler wollte das Original ersetzen.', exEn: 'The art collector wanted to replace the original.', exHi: 'Kala sangrahakarta mool ko badalna chahta tha.', conj: { praesens: 'ersetzt', praeteritum: 'ersetzte', perfekt: 'hat ersetzt' } },
    { de: 'handeln', pos: 'verb', level: 'B1', en: 'to be about (sich handeln um + A.)', hi: 'बात होना', ex: 'Es handelt sich um eine Auktion.', exEn: 'It\'s about an auction.', exHi: 'Yeh ek neelaami ki baat hai.', conj: { praesens: 'handelt sich', praeteritum: 'handelte sich', perfekt: 'hat sich gehandelt' } },
    { de: 'heimlich', pos: 'adjective', level: 'B1', en: 'secret, secretly', hi: 'गुपचुप', ex: 'Ein heimlich herankommender Dieb sei vorbeigekommen.', exEn: 'A secretly approaching thief had passed by.', exHi: 'Gupchup nazdeek aata hua chor guzra tha.' },
    { de: 'her sein', pos: 'idiom', level: 'B1', en: 'to be long ago (Es ist lange her.)', hi: 'बहुत समय हो गया है', ex: 'Es ist lange her, dass wir uns sahen.', exEn: 'It\'s been a long time since we saw each other.', exHi: 'Humein mile hue bahut samay ho gaya hai.' },
    { de: 'herankommen', pos: 'verb', level: 'B1', en: 'to approach (an + A.)', hi: 'नज़दीक आना', ex: 'Ein heimlich herankommender Dieb sei vorbeigekommen.', exEn: 'A secretly approaching thief had passed by.', exHi: 'Gupchup nazdeek aata hua chor guzra tha.', conj: { praesens: 'kommt heran', praeteritum: 'kam heran', perfekt: 'ist herangekommen' } },
    { de: 'improvisieren', pos: 'verb', level: 'B1', en: 'to improvise', hi: 'तात्कालिक करना', ex: 'Der Gründer musste improvisieren.', exEn: 'The founder had to improvise.', exHi: 'Sansthaapak ko taatkaalik karna pada.', conj: { praesens: 'improvisiert', praeteritum: 'improvisierte', perfekt: 'hat improvisiert' } },
    { de: 'original', pos: 'adjective', level: 'B1', en: 'original', hi: 'मूल', ex: 'Original geplant war ein Theaterstück.', exEn: 'Originally planned was a theatre play.', exHi: 'Shuruaat mein yojana ek natak ki thi.' },
    { de: 'rumliegen', pos: 'verb', level: 'B1', en: 'to lie around', hi: 'पड़े रहना', ex: 'Eine Gummiwanne lag einfach rumliegend auf der Bühne.', exEn: 'A rubber tub was simply lying around on the stage.', exHi: 'Ek rubber tub bas aise hi stage par padi thi.', conj: { praesens: 'liegt rum', praeteritum: 'lag rum', perfekt: 'hat rumgelegen' } },
    { de: 'scheinbar', pos: 'adverb', level: 'B1', en: 'apparent, apparently', hi: 'प्रतीत रूप से', ex: 'Der Kunstsammler wirkte scheinbar dankbar.', exEn: 'The art collector apparently seemed thankful.', exHi: 'Kala sangrahakarta prateet roop se aabhaari lag raha tha.' },
    { de: 'veranstalten', pos: 'verb', level: 'B1', en: 'to organize', hi: 'आयोजित करना', ex: 'Die Galerie veranstaltete eine Auktion.', exEn: 'The gallery organized an auction.', exHi: 'Gallery ne ek neelaami aayojit ki.', conj: { praesens: 'veranstaltet', praeteritum: 'veranstaltete', perfekt: 'hat veranstaltet' } },
    { de: 'Impro-Theater', art: 'das', gender: 'n', plural: 'Impro-Theater', pos: 'noun', level: 'B1', en: 'improv theatre', hi: 'इम्प्रो थिएटर', ex: 'Original geplant war ein Theaterstück im Impro-Theater.', exEn: 'Originally planned was a theatre play at the improv theatre.', exHi: 'Shuruaat mein yojana improv theatre mein ek natak ki thi.' },
    { de: 'Inland', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'inland, domestic', hi: 'देश के भीतर', ex: 'Das Original blieb im Inland.', exEn: 'The original stayed domestic.', exHi: 'Mool desh ke bhitar hi raha.' },
    { de: 'Missgeschick', art: 'das', gender: 'n', plural: 'Missgeschicke', pos: 'noun', level: 'B1', en: 'misfortune', hi: 'दुर्भाग्य', ex: 'Das Missgeschick passierte während der Vorstellung.', exEn: 'The misfortune happened during the performance.', exHi: 'Pradarshan ke dauran durbhaagya hua.' },
    { de: 'Original', art: 'das', gender: 'n', plural: 'Originale', pos: 'noun', level: 'B1', en: 'original', hi: 'मूल', ex: 'Der Spiegel war das einzige Original.', exEn: 'The mirror was the only original.', exHi: 'Sheesha ekmatra mool tha.' },
    { de: 'Referat', art: 'das', gender: 'n', plural: 'Referate', pos: 'noun', level: 'B1', en: 'presentation', hi: 'प्रस्तुति', ex: 'Sie hielt ein Referat über Kunst.', exEn: 'She gave a presentation about art.', exHi: 'Usne kala par ek prastuti di.' },
    { de: 'Reinigungspersonal', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'cleaning staff', hi: 'सफ़ाई कर्मचारी', ex: 'Das schlafende Reinigungspersonal hat nichts gesehen.', exEn: 'The sleeping cleaning staff saw nothing.', exHi: 'Sote hue safaai karmachaari ne kuchh nahi dekha.' },
    { de: 'Sportteam', art: 'das', gender: 'n', plural: 'Sportteams', pos: 'noun', level: 'B1', en: 'sports team', hi: 'खेल टीम', ex: 'Das Sportteam feierte den Sieg.', exEn: 'The sports team celebrated the victory.', exHi: 'Khel team ne jeet ka jashn manaaya.' },
    { de: 'Theaterstück', art: 'das', gender: 'n', plural: 'Theaterstücke', pos: 'noun', level: 'B1', en: 'theatre play', hi: 'नाटक', ex: 'Original geplant war ein Theaterstück.', exEn: 'Originally planned was a theatre play.', exHi: 'Shuruaat mein yojana ek natak ki thi.' },
    { de: 'Treppenhaus', art: 'das', gender: 'n', plural: 'Treppenhäuser', pos: 'noun', level: 'B1', en: 'stairwell', hi: 'सीढ़ीघर', ex: 'Der Dieb versteckte sich im Treppenhaus.', exEn: 'The thief hid in the stairwell.', exHi: 'Chor seedhighar mein chhupa.' },
    { de: 'Auktionsbesucher', art: 'der', gender: 'm', plural: 'Auktionsbesucher', pos: 'noun', level: 'B1', en: 'auction visitor (male)', hi: 'नीलामी दर्शक', ex: 'Die wartenden Auktionsbesucher wurden informiert.', exEn: 'The waiting auction visitors were informed.', exHi: 'Intezaar karte hue neelaami darshakon ko soochit kiya gaya.' },
    { de: 'Autoverkauf', art: 'der', gender: 'm', plural: 'Autoverkäufe', pos: 'noun', level: 'B1', en: 'car sale', hi: 'कार बिक्री', ex: 'Der Autoverkauf lief gut.', exEn: 'The car sale went well.', exHi: 'Car ki bikri achhi rahi.' },
    { de: 'Backofen', art: 'der', gender: 'm', plural: 'Backöfen', pos: 'noun', level: 'B1', en: 'oven', hi: 'ओवन', ex: 'Der Backofen war noch heiß.', exEn: 'The oven was still hot.', exHi: 'Oven abhi bhi garam tha.' },
    { de: 'Detektiv', art: 'der', gender: 'm', plural: 'Detektive', pos: 'noun', level: 'B1', en: 'detective (male)', hi: 'जासूस', ex: 'Ein Detektiv wurde sofort gerufen.', exEn: 'A detective was called immediately.', exHi: 'Ek jaasoos ko turant bulaaya gaya.' },
    { de: 'Dieb', art: 'der', gender: 'm', plural: 'Diebe', pos: 'noun', level: 'B1', en: 'thief', hi: 'चोर', ex: 'Ein heimlich herankommender Dieb sei vorbeigekommen.', exEn: 'A secretly approaching thief had passed by.', exHi: 'Gupchup nazdeek aata hua chor guzra tha.' },
    { de: 'Ethnologe', art: 'der', gender: 'm', plural: 'Ethnologen', pos: 'noun', level: 'B1', en: 'ethnologist (male)', hi: 'नृवंशविज्ञानी', ex: 'Ein Ethnologe hat den Farbstift genommen.', exEn: 'An ethnologist took the crayon.', exHi: 'Ek ethnologist ne rangeen pencil li.' },
    { de: 'Farbstift', art: 'der', gender: 'm', plural: 'Farbstifte', pos: 'noun', level: 'B1', en: 'crayon', hi: 'रंगीन पेंसिल', ex: 'Wer hat den Farbstift verloren?', exEn: 'Who lost the crayon?', exHi: 'Rangeen pencil kisne khoyi?' },
    { de: 'Gründer', art: 'der', gender: 'm', plural: 'Gründer', pos: 'noun', level: 'B1', en: 'founder (male)', hi: 'संस्थापक', ex: 'Der Gründer musste improvisieren.', exEn: 'The founder had to improvise.', exHi: 'Sansthaapak ko taatkaalik karna pada.' },
    { de: 'Kuli', art: 'der', gender: 'm', plural: 'Kulis', pos: 'noun', level: 'B1', en: 'pen', hi: 'क़लम', ex: 'Sie schrieb mit einem Kuli.', exEn: 'She wrote with a pen.', exHi: 'Usne ek pen se likha.' },
    { de: 'Kunsthistoriker', art: 'der', gender: 'm', plural: 'Kunsthistoriker', pos: 'noun', level: 'B1', en: 'art historian (male)', hi: 'कला इतिहासकार', ex: 'Der clevere Kunsthistoriker glaubt das nicht.', exEn: 'The clever art historian doesn\'t believe that.', exHi: 'Chatur kala itihaaskaar isko nahi maanta.' },
    { de: 'Kunstsammler', art: 'der', gender: 'm', plural: 'Kunstsammler', pos: 'noun', level: 'B1', en: 'art collector (male)', hi: 'कला संग्रहकर्ता', ex: 'Der Kunstsammler wollte das Original ersetzen.', exEn: 'The art collector wanted to replace the original.', exHi: 'Kala sangrahakarta mool ko badalna chahta tha.' },
    { de: 'Kunstsupermarkt', art: 'der', gender: 'm', plural: 'Kunstsupermärkte', pos: 'noun', level: 'B1', en: 'art supermarket', hi: 'कला सुपरमार्केट', ex: 'Der Spiegel war das einzige Original in diesem Kunstsupermarkt.', exEn: 'The mirror was the only original in this art supermarket.', exHi: 'Sheesha is kala supermarket mein ekmatra mool tha.' },
    { de: 'Käufer', art: 'der', gender: 'm', plural: 'Käufer', pos: 'noun', level: 'B1', en: 'buyer (male)', hi: 'ख़रीदार', ex: 'Die wartenden Käufer stehen vor der Galerie.', exEn: 'The waiting buyers are standing in front of the gallery.', exHi: 'Intezaar karte hue khareedaar gallery ke saamne khade hain.' },
    { de: 'Meister', art: 'der', gender: 'm', plural: 'Meister', pos: 'noun', level: 'B1', en: 'master (male)', hi: 'उस्ताद', ex: 'Der Meister erklärte die Technik.', exEn: 'The master explained the technique.', exHi: 'Ustaad ne takneek samjhaayi.' },
    { de: 'Putzmann', art: 'der', gender: 'm', plural: 'Putzmänner', pos: 'noun', level: 'B1', en: 'cleaner (male)', hi: 'सफ़ाईकर्मी', ex: 'Der Putzmann sagte, ein Dieb sei vorbeigekommen.', exEn: 'The cleaner said a thief had passed by.', exHi: 'Safaaikarmi ne kaha ki ek chor guzra tha.' },
    { de: 'Spiegel', art: 'der', gender: 'm', plural: 'Spiegel', pos: 'noun', level: 'B1', en: 'mirror', hi: 'शीशा', ex: 'Der gestohlene Spiegel war das einzige Original.', exEn: 'The stolen mirror was the only original.', exHi: 'Chori hua sheesha ekmatra mool tha.' },
    { de: 'Topf', art: 'der', gender: 'm', plural: 'Töpfe', pos: 'noun', level: 'B1', en: 'pot', hi: 'बर्तन', ex: 'Der Topf steht auf dem Backofen.', exEn: 'The pot stands on the oven.', exHi: 'Bartan oven par rakha hai.' },
    { de: 'Verkaufsraum', art: 'der', gender: 'm', plural: 'Verkaufsräume', pos: 'noun', level: 'B1', en: 'showroom', hi: 'बिक्री कक्ष', ex: 'Er untersuchte den beschädigten Verkaufsraum.', exEn: 'He examined the damaged showroom.', exHi: 'Usne kshatigrast bikri kaksh ki jaanch ki.' },
    { de: 'Zeitungstext', art: 'der', gender: 'm', plural: 'Zeitungstexte', pos: 'noun', level: 'B1', en: 'newspaper text', hi: 'अख़बार का पाठ', ex: 'Der Zeitungstext berichtete über die Auktion.', exEn: 'The newspaper text reported on the auction.', exHi: 'Akhbaar ke paath ne neelaami ke baare mein bataaya.' },
    { de: 'Zoodirektor', art: 'der', gender: 'm', plural: 'Zoodirektoren', pos: 'noun', level: 'B1', en: 'zoo director (male)', hi: 'चिड़ियाघर निदेशक', ex: 'Der Zoodirektor hatte eine lebende Biene mitgebracht.', exEn: 'The zoo director had brought a living bee along.', exHi: 'Chidiyaghar nirdeshak apne saath ek jeevit madhumakkhi laaya tha.' },
    { de: 'Auktionsbesucherin', art: 'die', gender: 'f', plural: 'Auktionsbesucherinnen', pos: 'noun', level: 'B1', en: 'auction visitor (female)', hi: 'नीलामी दर्शक (महिला)', ex: 'Die Auktionsbesucherin fragte nach dem Original.', exEn: 'The auction visitor asked about the original.', exHi: 'Neelaami darshak ne mool ke baare mein poochha.' },
    { de: 'Biene', art: 'die', gender: 'f', plural: 'Bienen', pos: 'noun', level: 'B1', en: 'bee', hi: 'मधुमक्खी', ex: 'Der Zoodirektor hatte eine lebende Biene mitgebracht.', exEn: 'The zoo director had brought a living bee along.', exHi: 'Chidiyaghar nirdeshak apne saath ek jeevit madhumakkhi laaya tha.' },
    { de: 'Briefmarke', art: 'die', gender: 'f', plural: 'Briefmarken', pos: 'noun', level: 'B1', en: 'postage stamp', hi: 'डाक टिकट', ex: 'Sie sammelt seltene Briefmarken.', exEn: 'She collects rare postage stamps.', exHi: 'Woh durlabh daak tikat sangrah karti hai.' },
    { de: 'Couch', art: 'die', gender: 'f', plural: 'Couches', pos: 'noun', level: 'B1', en: 'couch', hi: 'सोफ़ा', ex: 'Der schlafende Hund liegt auf der Couch.', exEn: 'The sleeping dog lies on the couch.', exHi: 'Sota hua kutta sofe par leta hai.' },
    { de: 'Detektivin', art: 'die', gender: 'f', plural: 'Detektivinnen', pos: 'noun', level: 'B1', en: 'detective (female)', hi: 'जासूस (महिला)', ex: 'Die Detektivin untersuchte den Fall.', exEn: 'The detective investigated the case.', exHi: 'Jaasoos ne maamle ki jaanch ki.' },
    { de: 'Ethnologin', art: 'die', gender: 'f', plural: 'Ethnologinnen', pos: 'noun', level: 'B1', en: 'ethnologist (female)', hi: 'नृवंशविज्ञानी (महिला)', ex: 'Die Ethnologin forscht über alte Kulturen.', exEn: 'The ethnologist researches ancient cultures.', exHi: 'Ethnologist praacheen sanskritiyon par shodh karti hai.' },
    { de: 'Frisur', art: 'die', gender: 'f', plural: 'Frisuren', pos: 'noun', level: 'B1', en: 'hair style', hi: 'केश शैली', ex: 'Ihre Frisur war ungewöhnlich.', exEn: 'Her hair style was unusual.', exHi: 'Uski hair style asaamaanya thi.' },
    { de: 'Galerie', art: 'die', gender: 'f', plural: 'Galerien', pos: 'noun', level: 'B1', en: 'gallery', hi: 'गैलरी', ex: 'Die wartenden Käufer stehen vor der Galerie.', exEn: 'The waiting buyers stand in front of the gallery.', exHi: 'Intezaar karte hue khareedaar gallery ke saamne khade hain.' },
    { de: 'Gründerin', art: 'die', gender: 'f', plural: 'Gründerinnen', pos: 'noun', level: 'B1', en: 'founder (female)', hi: 'संस्थापक (महिला)', ex: 'Die Gründerin musste improvisieren.', exEn: 'The founder had to improvise.', exHi: 'Sansthaapak ko taatkaalik karna pada.' },
    { de: 'Gummiwanne', art: 'die', gender: 'f', plural: 'Gummiwannen', pos: 'noun', level: 'B1', en: 'rubber tub', hi: 'रबर टब', ex: 'Eine Gummiwanne lag einfach rumliegend auf der Bühne.', exEn: 'A rubber tub was simply lying around on the stage.', exHi: 'Ek rubber tub bas aise hi stage par padi thi.' },
    { de: 'Kunsthistorikerin', art: 'die', gender: 'f', plural: 'Kunsthistorikerinnen', pos: 'noun', level: 'B1', en: 'art historian (female)', hi: 'कला इतिहासकार (महिला)', ex: 'Die clevere Kunsthistorikerin glaubt das nicht.', exEn: 'The clever art historian doesn\'t believe that.', exHi: 'Chatur kala itihaaskaar isko nahi maanti.' },
    { de: 'Kunstsammlerin', art: 'die', gender: 'f', plural: 'Kunstsammlerinnen', pos: 'noun', level: 'B1', en: 'art collector (female)', hi: 'कला संग्रहकर्ता (महिला)', ex: 'Die Kunstsammlerin wirkte scheinbar dankbar.', exEn: 'The art collector apparently seemed thankful.', exHi: 'Kala sangrahakarta prateet roop se aabhaari lag rahi thi.' },
    { de: 'Käuferin', art: 'die', gender: 'f', plural: 'Käuferinnen', pos: 'noun', level: 'B1', en: 'buyer (female)', hi: 'ख़रीदार (महिला)', ex: 'Die wartende Käuferin fragte nach dem Preis.', exEn: 'The waiting buyer asked about the price.', exHi: 'Intezaar karti hui khareedaar ne keemat ke baare mein poochha.' },
    { de: 'Meisterin', art: 'die', gender: 'f', plural: 'Meisterinnen', pos: 'noun', level: 'B1', en: 'master (female)', hi: 'उस्ताद (महिला)', ex: 'Die Meisterin erklärte die Technik.', exEn: 'The master explained the technique.', exHi: 'Ustaad ne takneek samjhaayi.' },
    { de: 'Motto-Party', art: 'die', gender: 'f', plural: 'Motto-Partys', pos: 'noun', level: 'B1', en: 'theme party', hi: 'थीम पार्टी', ex: 'Sie veranstalteten eine Motto-Party.', exEn: 'They organized a theme party.', exHi: 'Unhone ek theme party aayojit ki.' },
    { de: 'Preiskategorie', art: 'die', gender: 'f', plural: 'Preiskategorien', pos: 'noun', level: 'B1', en: 'price category', hi: 'मूल्य श्रेणी', ex: 'Die Auktion hatte begrenzte Preiskategorien.', exEn: 'The auction had limited price categories.', exHi: 'Neelaami mein seemit mulya shreniyaan thin.' },
    { de: 'Putzfirma', art: 'die', gender: 'f', plural: 'Putzfirmen', pos: 'noun', level: 'B1', en: 'cleaning company', hi: 'सफ़ाई कंपनी', ex: 'Die Putzfirma reinigt jeden Tag.', exEn: 'The cleaning company cleans every day.', exHi: 'Safaai company har din safaai karti hai.' },
    { de: 'Putzfrau', art: 'die', gender: 'f', plural: 'Putzfrauen', pos: 'noun', level: 'B1', en: 'cleaner (female)', hi: 'सफ़ाईकर्मी (महिला)', ex: 'Die schlafende Putzfrau hat nichts gesehen.', exEn: 'The sleeping cleaner saw nothing.', exHi: 'Sote hue safaaikarmi ne kuchh nahi dekha.' },
    { de: 'Reinigungsfirma', art: 'die', gender: 'f', plural: 'Reinigungsfirmen', pos: 'noun', level: 'B1', en: 'cleaning company', hi: 'सफ़ाई कंपनी', ex: 'Die Reinigungsfirma arbeitet nachts.', exEn: 'The cleaning company works at night.', exHi: 'Safaai company raat mein kaam karti hai.' },
    { de: 'Rose', art: 'die', gender: 'f', plural: 'Rosen', pos: 'noun', level: 'B1', en: 'rose', hi: 'गुलाब', ex: 'Sie schenkte ihm eine Rose.', exEn: 'She gave him a rose.', exHi: 'Usne use ek gulaab diya.' },
    { de: 'Stufe', art: 'die', gender: 'f', plural: 'Stufen', pos: 'noun', level: 'B1', en: 'step', hi: 'सीढ़ी', ex: 'Er stolperte über die Stufe.', exEn: 'He tripped over the step.', exHi: 'Woh seedhi par thokar khaakar gira.' },
    { de: 'Zoodirektorin', art: 'die', gender: 'f', plural: 'Zoodirektorinnen', pos: 'noun', level: 'B1', en: 'zoo director (female)', hi: 'चिड़ियाघर निदेशक (महिला)', ex: 'Die Zoodirektorin hatte eine lebende Biene mitgebracht.', exEn: 'The zoo director had brought a living bee along.', exHi: 'Chidiyaghar nirdeshak apne saath ek jeevit madhumakkhi laayi thi.' },
    { de: 'durcheinander', pos: 'adjective', level: 'B1', en: 'disorganized', hi: 'अस्त-व्यस्त', ex: 'Bei so einem durcheinander geführten Kunstsupermarkt wundert mich nichts mehr.', exEn: 'At such a disorganized art supermarket, nothing surprises me anymore.', exHi: 'Aise ashaant kala supermarket mein, ab mujhe kuchh bhi hairaan nahi karta.' },
    { de: 'tierisch', pos: 'adjective', level: 'B1', en: 'animal-like (colloquially: really)', hi: 'जानवरों जैसा', ex: 'Das ist ja tierisch lustig.', exEn: 'That\'s really funny.', exHi: 'Yeh sach mein mazedaar hai.' },
    { de: 'Verbteil', art: 'der', gender: 'm', plural: 'Verbteile', pos: 'noun', level: 'B1', en: 'part of the verb', hi: 'क्रिया का भाग', ex: 'Der Verbteil steht am Satzende.', exEn: 'The part of the verb stands at the end of the sentence.', exHi: 'Kriya ka bhaag vaakya ke ant mein hota hai.' },
    { de: 'Präpositionalergänzung', art: 'die', gender: 'f', plural: 'Präpositionalergänzungen', pos: 'noun', level: 'B1', en: 'prepositional complement', hi: 'पूर्वसर्ग पूरक', ex: 'Die Präpositionalergänzung folgt dem Verb.', exEn: 'The prepositional complement follows the verb.', exHi: 'Poorvasarg poorak kriya ke baad aata hai.' },
    { de: 'Satzverneinung', art: 'die', gender: 'f', plural: 'Satzverneinungen', pos: 'noun', level: 'B1', en: 'sentence negation', hi: 'वाक्य निषेध', ex: 'Die Satzverneinung steht meistens am Ende.', exEn: 'Sentence negation usually stands at the end.', exHi: 'Vaakya nishedh aksar ant mein hota hai.' },
    { de: 'Stellung', art: 'die', gender: 'f', plural: 'Stellungen', pos: 'noun', level: 'B1', en: 'position', hi: 'स्थिति', ex: 'Die Stellung des Verbs ist wichtig.', exEn: 'The position of the verb is important.', exHi: 'Kriya ki sthiti mahatvapurn hai.' },
    { de: 'verneinen', pos: 'verb', level: 'B1', en: 'to negate', hi: 'निषेध करना', ex: 'Man verneint den Satz mit "nicht".', exEn: 'One negates the sentence with "nicht".', exHi: '"Nicht" se vaakya ka nishedh kiya jaata hai.', conj: { praesens: 'verneint', praeteritum: 'verneinte', perfekt: 'hat verneint' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Partizip als Adjektiv?',
      body: [ 'A participle can describe a noun just like an adjective, and declines exactly the same way.' ],
      table: {
        head: ['Meaning', 'Example'],
        rows: [
          ['laughing child', '<span class="de">ein lachendes Kind</span>'],
          ['closed door', '<span class="de">eine geschlossene Tür</span>']
        ]
      },
      hinglish: 'Ek participle noun ko bilkul adjective ki tarah describe kar sakta hai, aur waisa hi decline hota hai.'
    },
    {
      title: 'Partizip I (Present Participle)',
      body: [ 'Verb stem + -end. Describes someone/something ACTIVELY doing the action.' ],
      table: {
        head: ['Verb', 'Partizip I'],
        rows: [
          ['lachen', 'lachend'],
          ['arbeiten', 'arbeitend'],
          ['spielen', 'spielend'],
          ['lernen', 'lernend']
        ]
      },
      hinglish: 'Verb stem + -end. Kisi ko active roop se action karte hue describe karta hai.'
    },
    {
      title: 'Partizip II (Past Participle)',
      body: [ 'The familiar Perfekt participle, now used as an adjective. Describes the RESULT of an action.' ],
      table: {
        head: ['Verb', 'Partizip II'],
        rows: [
          ['schließen', 'geschlossen'],
          ['schreiben', 'geschrieben'],
          ['kochen', 'gekocht'],
          ['bauen', 'gebaut']
        ]
      },
      hinglish: 'Wahi jaana-pehchaana Perfekt participle, ab ek adjective ke roop mein. Action ke RESULT ko describe karta hai.'
    },
    {
      title: 'Partizip I vs Partizip II',
      body: [ 'Partizip I = active, ongoing. Partizip II = passive/result, completed.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Partizip I (aktiv)', '<span class="de">der schlafende Hund</span> — the dog IS sleeping'],
          ['Partizip II (Ergebnis)', '<span class="de">der geschlossene Laden</span> — the shop HAS BEEN closed']
        ]
      },
      hinglish: 'Partizip I = active, chal raha hai. Partizip II = result, ho chuka hai.'
    },
    {
      title: 'Adjektivendungen bei Partizipien',
      body: [ 'Participle adjectives follow the exact same declension rules as ordinary adjectives — weak, mixed, or strong.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', 'der schlafende Hund'],
          ['Akkusativ', 'den schlafenden Hund'],
          ['Dativ', 'dem schlafenden Hund'],
          ['ohne Artikel', 'ein geöffnetes Fenster']
        ]
      },
      hinglish: 'Participle adjectives bilkul ordinary adjectives ki tarah decline hote hain — weak, mixed, ya strong.'
    },
    {
      title: 'Die häufigsten B1-Partizipien',
      body: [ 'These participle adjectives appear constantly in Goethe B1 texts.' ],
      table: {
        head: ['Partizip I', 'Partizip II'],
        rows: [
          ['arbeitend, lernend, lachend', 'geschlossen, geöffnet, gebaut'],
          ['spielend, wartend, reisend', 'geschrieben, gekocht, verkauft'],
          ['laufend, sitzend, stehend, schlafend', 'verloren, gefunden, bezahlt, gebrochen']
        ]
      },
      hinglish: 'Yeh participle adjectives Goethe B1 texts mein lagataar aate hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from dropping the ending, or confusing Partizip I with Partizip II.' ],
      mistakes: [
        { wrong: 'der lachene Junge', right: 'der lachende Junge', why: 'Partizip I is lachend (verb stem + -end), not "lachene".' },
        { wrong: 'die geschlossen Tür', right: 'die geschlossene Tür', why: 'Participle adjectives always need the adjective ending — never bare.' },
        { wrong: 'ein geöffnen Fenster', right: 'ein geöffnetes Fenster', why: 'Partizip II is geöffnet, then the mixed-declension ending -es for neuter.' },
        { wrong: 'der schreibende Brief', right: 'der geschriebene Brief', why: 'A letter doesn\'t actively write — use Partizip II (result) here, not Partizip I.' },
        { wrong: 'Das Kind ist spielend.', right: 'Das Kind spielt. / das spielende Kind', why: 'German does not use Partizip I the way English uses "-ing" after "to be". Partizip I works in front of a noun (das spielende Kind) \u2014 for the ongoing action itself, just use the normal verb: Das Kind spielt.' }
      ],
      hinglish: 'Yeh galtiyaan ending chhod dene ya Partizip I ko Partizip II se confuse karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Participle adjectives appear constantly in Goethe B1 newspaper reports, apartment ads, and travel texts.' ],
      note: 'Quick check: is the noun actively doing the action? Use Partizip I. Is the action already completed/a result? Use Partizip II. Always decline like a normal adjective.',
      hinglish: 'Goethe B1 newspaper reports, apartment ads aur travel texts mein participle adjectives lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Das Missverständnis im Kunstsupermarkt',
    titleEn: 'The misunderstanding at the art supermarket',
    tokens: [
      { w: 'Ein', role: 'plain', en: 'a (masc. nom.)', hi: 'एक', type: 'Article' },
      { w: 'gestohlener', role: 'plain', en: 'stolen (Partizip II als Adjektiv)', hi: 'चोरी हुआ', type: 'Partizip II · Nom.', why: 'stehlen → gestohlen. Partizip II describes the result.' },
      { w: 'Spiegel', role: 'plain', en: 'mirror (Satzende)', hi: 'शीशा (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Spiegel (this chapter).' },
      { w: 'sorgte', role: 'plain', en: 'caused (idiom, Satzende)', hi: 'पैदा किया (Satzende)', type: 'Verb · sorgen (idiom, Satzende)' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'großes', role: 'plain', en: 'big', hi: 'बड़ा', type: 'Adjective · stark · Akk.' },
      { w: 'Missverständnis', role: 'plain', en: 'misunderstanding (Satzende)', hi: 'ग़लतफ़हमी (Satzende)', type: 'Noun · neut. (Satzende)', why: 'das Missverständnis (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Kunstsupermarkt', role: 'plain', en: 'art supermarket (Satzende)', hi: 'कला सुपरमार्केट (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Kunstsupermarkt (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'wartenden', role: 'plain', en: 'waiting (Partizip I als Adjektiv)', hi: 'इंतज़ार करते हुए', type: 'Partizip I · Nom. Pl.', why: 'warten → wartend. Partizip I describes an ongoing action.' },
      { w: 'Auktionsbesucher', role: 'plain', en: 'auction visitors (Satzende)', hi: 'नीलामी दर्शक (Satzende)', type: 'Noun · plural (Satzende)', why: 'der Auktionsbesucher (this chapter).' },
      { w: 'wurden', role: 'plain', en: 'were (Passiv-Hilfsverb)', hi: 'सूचित किए गए', type: 'Verb · werden (Passiv Präteritum)', why: 'Passiv Präteritum (recycled — Ch.28).' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adverb' },
      { w: 'informiert', role: 'plain', en: 'informed (Satzende)', hi: 'सूचित (Satzende)', type: 'Verb · informieren (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc. nom.)', hi: 'एक', type: 'Article' },
      { w: 'Detektiv', role: 'plain', en: 'detective', hi: 'जासूस', type: 'Noun · masc.', why: 'der Detektiv (this chapter).' },
      { w: 'untersuchte', role: 'plain', en: 'examined', hi: 'जाँच की', type: 'Verb · untersuchen (Präteritum)' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'beschädigten', role: 'plain', en: 'damaged (Partizip II als Adjektiv, Satzende)', hi: 'क्षतिग्रस्त (Satzende)', type: 'Partizip II · Akk. (Satzende)', why: 'beschädigen (this chapter): to damage.' },
      { w: 'Verkaufsraum', role: 'plain', en: 'showroom (Satzende)', hi: 'बिक्री कक्ष (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Verkaufsraum (this chapter).' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'वह', type: 'Article' },
      { w: 'schlafende', role: 'plain', en: 'sleeping (Partizip I als Adjektiv)', hi: 'सोता हुआ', type: 'Partizip I · Nom.', why: 'schlafen → schlafend.' },
      { w: 'Reinigungspersonal', role: 'plain', en: 'cleaning staff (Satzende)', hi: 'सफ़ाई कर्मचारी (Satzende)', type: 'Noun · neut. (Satzende)', why: 'das Reinigungspersonal (Sg.) (this chapter).' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)', why: 'Plusquamperfekt (recycled — Ch.20).' },
      { w: 'nichts', role: 'plain', en: 'nothing (Satzende)', hi: 'कुछ नहीं (Satzende)', type: 'Indefinitpronomen (Satzende)' },
      { w: 'bemerkt', role: 'plain', en: 'noticed (Satzende)', hi: 'नोटिस (Satzende)', type: 'Verb · bemerken (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc. nom.)', hi: 'एक', type: 'Article' },
      { w: 'heimlich', role: 'plain', en: 'secretly', hi: 'गुपचुप', type: 'Adverb', why: 'heimlich (this chapter): secret.' },
      { w: 'herankommender', role: 'plain', en: 'approaching (Partizip I als Adjektiv, Satzende)', hi: 'नज़दीक आता हुआ (Satzende)', type: 'Partizip I · Nom. (Satzende)', why: 'herankommen (this chapter): to approach.' },
      { w: 'Dieb', role: 'plain', en: 'thief', hi: 'चोर', type: 'Noun · masc.', why: 'der Dieb (this chapter).' },
      { w: 'war', role: 'plain', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'सिर्फ़', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'an (neut. nom.)', hi: 'एक', type: 'Article' },
      { w: 'ratendes', role: 'plain', en: 'guessing (Partizip I als Adjektiv, Satzende)', hi: 'अंदाज़ा लगाता हुआ (Satzende)', type: 'Partizip I · Nom. (Satzende)', why: 'erraten (this chapter). Playful use of Partizip I as adjective.' },
      { w: 'Kind', role: 'plain', en: 'child (Satzende)', hi: 'बच्चा (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'A stolen mirror caused a big misunderstanding at the art supermarket. The waiting auction visitors were quickly informed. A detective examined the damaged showroom. The sleeping cleaning staff had noticed nothing. A secretly approaching thief was, however, only a guessing child.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_034_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kirsten, schau dir diesen zerbrochenen Teller an — kaufst du sowas wirklich?', en: 'Kirsten, look at this broken plate — do you really buy something like that?' },
      { id: 'B1_034_L002', speaker: 'Kirsten', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der lachende Verkäufer hat gesagt, das nennt man Kintsugi-Kunst!', en: 'The laughing seller said that\'s called Kintsugi art!' },
      { id: 'B1_034_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ach so, und dieser reparierte Spiegel dort, ist der auch Kunst?', en: 'Ah, and that repaired mirror over there, is that art too?' },
      { id: 'B1_034_L004', speaker: 'Kirsten', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht! Bei diesem verrückten Laden weiß man das nie so genau.', en: 'Maybe! At this crazy shop you never quite know.' }
    ],
    transcript: 'Kirsten, schau dir diesen zerbrochenen Teller an — kaufst du sowas wirklich? Der lachende Verkäufer hat gesagt, das nennt man Kintsugi-Kunst! Ach so, und dieser reparierte Spiegel dort, ist der auch Kunst? Vielleicht! Bei diesem verrückten Laden weiß man das nie so genau.',
    translation: 'Kirsten, look at this broken plate — do you really buy something like that? The laughing seller said that\'s called Kintsugi art! Ah, and that repaired mirror over there, is that art too? Maybe! At this crazy shop you never quite know.',
    tokens: [
      { w: 'Kirsten' },
      { w: ',', plain: true },
      { w: 'schau' },
      { w: 'dir' },
      { w: 'diesen' },
      { w: 'zerbrochenen' },
      { w: 'Teller' },
      { w: 'an' },
      { w: '—', plain: true },
      { w: 'kaufst' },
      { w: 'du' },
      { w: 'sowas' },
      { w: 'wirklich' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'lachende' },
      { w: 'Verkäufer' },
      { w: 'hat' },
      { w: 'gesagt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'nennt' },
      { w: 'man' },
      { w: 'Kintsugi', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Kunst' },
      { w: '!', plain: true },
      { w: 'Ach' },
      { w: 'so' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'dieser' },
      { w: 'reparierte' },
      { w: 'Spiegel' },
      { w: 'dort' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'der' },
      { w: 'auch' },
      { w: 'Kunst' },
      { w: '?', plain: true },
      { w: 'Vielleicht' },
      { w: '!', plain: true },
      { w: 'Bei' },
      { w: 'diesem' },
      { w: 'verrückten' },
      { w: 'Laden' },
      { w: 'weiß' },
      { w: 'man' },
      { w: 'das' },
      { w: 'nie' },
      { w: 'so' },
      { w: 'genau' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie heißt der Teller am Ende?', qEn: 'What does the plate turn out to be called?', options: ['Müll', 'Kintsugi-Kunst', 'ein Fehler', 'ein Geschenk'], optionsEn: ['rubbish', 'kintsugi art', 'a mistake', 'a present'], answer: 1,
        explain: '"… das nennt man Kintsugi-Kunst!"' },
      { q: 'Wonach fragt Timo als Nächstes?', qEn: 'What does Timo ask about next?', options: ['einen zerbrochenen Teller', 'einen reparierten Spiegel', 'einen neuen Stuhl', 'ein altes Buch'], optionsEn: ['a broken plate', 'a repaired mirror', 'a new chair', 'an old book'], answer: 1,
        explain: '"… dieser reparierte Spiegel dort, ist der auch Kunst?"' }
    ]
  },

  speaking: [
    { task: "Dein Freund wundert sich über den zerbrochenen Teller. Erklär es.", taskEn: "Your friend is puzzled by the broken plate. Explain.", de: "Der lachende Verkäufer hat gesagt, das nennt man Kintsugi-Kunst.", en: "The laughing seller said this is called Kintsugi art." },
    { task: "Er fragt nach dem reparierten Stück.", taskEn: "He asks about the repaired piece.", de: "Der reparierte Teller ist schöner als der originale.", en: "The repaired plate is nicer than the original." },
    { task: "Eine Kollegin fragt nach der Auktion.", taskEn: "A colleague asks about the auction.", de: "Die wartenden Leute haben alle auf das beschädigte Bild geboten.", en: "The waiting people all bid on the damaged picture." },
    { task: "Deine Freundin fragt nach der Umleitung.", taskEn: "Your friend asks about the diversion.", de: "Die gesperrte Straße hat für ein großes Missverständnis gesorgt.", en: "The closed road caused a big misunderstanding." },
    { task: "Ein Freund fragt, warum du dankbar bist.", taskEn: "A friend asks why you're grateful.", de: "Das gefundene Geldstück war ein kleines Geschenk, aber es macht mich glücklich.", en: "The coin I found was a small gift, but it makes me happy." },
    { task: "Rollenspiel: Ihr besprecht die improvisierte Vorstellung.", taskEn: "Role-play: you discuss the improvised show.", de: "Das lachende Publikum war begeistert. — Und die improvisierte Musik war das Beste.", en: "The laughing audience was delighted. — And the improvised music was the best part." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short newspaper-style report or mystery story (six to eight sentences) — using at least three Partizip I adjectives (e.g. wartend, schlafend, lachend) and at least three Partizip II adjectives (e.g. geschlossen, gestohlen, beschädigt), all correctly declined.',
    starters: ['Der/Die/Das … -e/-er/-es …', 'Die wartenden …', 'Der gestohlene …', 'Ein geschlossener/geschlossenes …'],
    placeholder: 'Ein gestohlener Spiegel sorgte für ein großes Missverständnis. Die wartenden Käufer standen vor der Galerie …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "der ___ Hund" (schlafen → Partizip I, masc. Nom.)',
      options: ['schlafende', 'geschlafen', 'schlafend'],
      answer: 0,
      explain: 'Partizip I (schlafend) + weak declension ending -e for masculine Nominativ after "der".'
    },
    gap: {
      sentence: ['die ', ' Tür (schließen → Partizip II)'],
      gaps: [ { answer: 'geschlossene', accepts: ['geschlossene'] } ],
      explain: 'Partizip II (geschlossen) + weak declension ending -e for feminine Nominativ after "die".'
    },
    match: {
      q: 'Match each verb to its participle type used in the sentence.',
      pairs: [
        { noun: 'der schlafende Hund', art: 'Partizip I' },
        { noun: 'die geschlossene Tür', art: 'Partizip II' },
        { noun: 'die wartenden Käufer', art: 'Partizip I' },
        { noun: 'der gestohlene Spiegel', art: 'Partizip II' }
      ]
    },
    builder: {
      target: 'Build: "The waiting buyers stand in front of the gallery."',
      bank: ['Die', 'wartenden', 'Käufer', 'stehen', 'vor', 'der', 'Galerie', '.'],
      answer: ['Die', 'wartenden', 'Käufer', 'stehen', 'vor', 'der', 'Galerie', '.'],
      roles: { 'wartenden': 'r-adjective' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'der schreibende Brief',
      right: 'der geschriebene Brief',
      explain: 'A letter doesn\'t actively write — use Partizip II (result), not Partizip I.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "die ___ Frau" (lachen → Partizip I)', options: ['lachende', 'gelacht', 'lachen'], answer: 0,
      explain: 'Partizip I: lachen → lachend, + weak ending -e.' },
    { q: 'Complete: "das ___ Fenster" (öffnen → Partizip II, kein Artikel)', options: ['öffnend', 'geöffnete', 'geöffnetes'], answer: 2,
      explain: 'Strong declension: no article, neuter Nominativ → -es.' },
    { q: 'Which participle describes an ONGOING action?', options: ['Partizip I', 'Partizip II', 'Both equally'], answer: 0,
      explain: 'Partizip I describes an active, ongoing action.' },
    { q: 'Which is correct?', options: ['der geschlossen Laden', 'der geschlossene Laden', 'der schließend Laden'], answer: 1,
      explain: 'Partizip II (geschlossen) needs the adjective ending -e (weak, after der).' },
    { q: 'Which sentence contains an error?', options: ['Die wartenden Käufer stehen vor der Galerie.', 'Der schreibende Brief liegt auf dem Tisch.', 'Der gestohlene Spiegel war das einzige Original.'], answer: 1,
      explain: 'A letter doesn\'t actively write — it should be "der geschriebene Brief" (Partizip II).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adjective', html: 'Partizip I (verb stem + -end) describes an ONGOING action — der schlafende Hund.' },
    { c: 'r-adjective', html: 'Partizip II describes a COMPLETED result — die geschlossene Tür.' },
    { c: 'r-adjective', html: 'Both decline exactly like ordinary adjectives — weak, mixed, or strong, matching what precedes them.' }
  ],
  revisionTips: [
    'Before choosing a participle, ask: is the noun actively doing this (Partizip I) or has this already happened to it (Partizip II)?',
    'Practise the four-case declension table for one participle adjective (schlafend) until it\'s automatic, then apply the same pattern to others.',
    'Watch for verbs where only one participle makes sense — a letter is always "geschrieben" (written), never "schreibend" (writing).'
  ]
};

window.CHAPTER = CHAPTER;
