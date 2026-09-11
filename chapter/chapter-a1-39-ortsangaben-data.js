/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 39
   "Ortsangaben & Kurzformen"  (location words & contractions)
   Vocabulary source: uploaded chapter-39 word list (116 words).
   Theme = finding the way in the city; travel & directions.
   Recycles Ch1–38. NOTE: content only — existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-39-ortsangaben',
  phase: 'A1 · Phase 5',
  number: 39,
  title: 'Ortsangaben & Kurzformen',
  titleEn: 'Places & Contractions',
  description: 'Find your way and sound natural doing it. Learn the location and direction words — links, rechts, geradeaus, in der Nähe — and the contractions Germans use constantly: im, am, ins, ans, zum, zur, beim.',
  xp: 190,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 40, title: 'Verben mit Dativ', titleEn: 'Dative Verbs' , href: 'chapter-a1-40-verben-dativ.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Meike is lost on the way to a new café and calls Timo for directions. As he walks her there — left, right, straight on, past the pharmacy — the location words and the everyday contractions (zum, zur, am, ins) do all the work.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear zum / zur / am / ins in real, spoken directions'
    ],
    scene: 'Auf dem Weg \u2014 eine Wegbeschreibung, Berlin',
    femaleSpeakers: ['Meike'],
    dialogue: [
      { speaker: 'Meike', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Apotheke', role: 'r-subject', en: 'pharmacy', hi: 'दवाखाना', pron: 'a-po-TAY-kuh', type: 'Noun · fem.', why: 'die Apotheke (this chapter).', ex: 'Wo ist die Apotheke?', exEn: 'Where is the pharmacy?' },
        { w: '?', plain: true }
      ], en: 'Sorry! Where is the pharmacy?', hi: 'Maaf kijiye! Dawakhana kahaan hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Am', role: 'r-preposition', en: 'at the', hi: 'पर', pron: 'am', type: 'Preposition + place' },
        { w: 'Bahnhof', role: 'r-place', en: 'station', hi: 'स्टेशन', pron: 'BAHN-hohf', type: 'Noun · masc.', why: 'am Bahnhof (this chapter).', ex: 'Sie ist am Bahnhof.', exEn: 'It is at the station.' },
        { w: '.', plain: true },
        { w: 'Gehen', role: 'r-verb', en: 'go', hi: 'जाइए', pron: 'GAY-en', type: 'Verb · gehen (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'geradeaus', role: 'r-adverb', en: 'straight ahead', hi: 'सीधे', pron: 'ge-RAH-duh-ows', type: 'Adverb', why: 'geradeaus = straight ahead (this chapter).', ex: 'Gehen Sie geradeaus!', exEn: 'Go straight ahead!' },
        { w: '.', plain: true }
      ], en: 'At the station. Go straight ahead.', hi: 'Station par. Seedhe jaaiye.' },
      { speaker: 'Meike', tokens: [
        { w: 'Geradeaus', role: 'r-adverb', en: 'straight ahead', hi: 'सीधे', pron: 'ge-RAH-duh-ows', type: 'Adverb' },
        { w: '?', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Straight ahead? And then?', hi: 'Seedhe? Aur phir?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'nach', role: 'r-preposition', en: 'to the', hi: 'दाईं', pron: 'nahkh', type: 'Preposition' },
        { w: 'rechts', role: 'r-adverb', en: 'right', hi: 'ओर', pron: 'rekhts', type: 'Adverb', why: 'nach rechts = to the right (this chapter).', ex: 'Gehen Sie nach rechts.', exEn: 'Go to the right.' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Apotheke', role: 'r-subject', en: 'pharmacy', hi: 'दवाखाना', pron: 'a-po-TAY-kuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'links', role: 'r-adverb', en: 'on the left', hi: 'बाईं ओर', pron: 'links', type: 'Adverb', why: 'links = on the left (this chapter).', ex: 'Sie ist links.', exEn: 'It is on the left.' },
        { w: '.', plain: true }
      ], en: 'Then to the right. The pharmacy is then on the left.', hi: 'Phir daayin or. Dawakhana phir baayin or hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'weit', role: 'r-adjective', en: 'far', hi: 'दूर', pron: 'vyte', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Is that far?', hi: 'Kya woh door hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'fünf', role: 'r-time', en: 'five', hi: 'पाँच', pron: 'fünf', type: 'Number' },
        { w: 'Minuten', role: 'r-time', en: 'minutes', hi: 'मिनट', pron: 'mi-NOO-ten', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'direkt', role: 'r-adverb', en: 'directly', hi: 'ठीक', pron: 'di-REKT', type: 'Adverb' },
        { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'बगल', pron: 'NAY-ben', type: 'Preposition · Wechselpräp' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Post', role: 'r-dativ', en: 'post office (dat.)', hi: 'पोस्ट ऑफ़िस के', pron: 'post', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'No, only five minutes. It is directly next to the post office.', hi: 'Nahi, sirf paanch minute. Woh post office ke bagal mein hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-adjective', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Phrase' },
        { w: 'schön', role: 'r-adjective', en: 'kindly', hi: 'बहुत', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Great! Thank you!', hi: 'Badhiya! Bahut dhanyavaad!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Reise', role: 'r-subject', en: 'journey', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'Gladly! Good journey!', hi: 'Khushi se! Achhi yaatra!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'To talk about <em>where</em> and <em>which way</em>, German leans on a small set of location words \u2014 <span class="de r-place">hier, dort, links, rechts, geradeaus</span> \u2014 and a handful of <strong>contractions</strong> that Germans use almost every sentence: <span class="de r-preposition">im</span> (in dem), <span class="de r-preposition">am</span> (an dem), <span class="de r-preposition">ins</span> (in das), <span class="de r-preposition">ans</span> (an das), <span class="de r-preposition">zum</span> (zu dem), <span class="de r-preposition">zur</span> (zu der), <span class="de r-preposition">beim</span> (bei dem).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is LOCATION EXPRESSIONS & CONTRACTIONS (Ortsangaben & Kurzformen): direction/location words and the contractions im, am, ans, ins, zum, zur, beim. ' +
    'The learner wrote sentences about places and directions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Location/direction words: hier (here), dort/da (there), drüben (over there), links (left), rechts (right), geradeaus (straight ahead), oben/unten (up/down), vorne/hinten (front/back), in der Nähe (nearby), weit weg (far away), an der Ecke (at the corner).\n' +
    '- Contractions (use them, they are standard): in dem→im, an dem→am, bei dem→beim, zu dem→zum, zu der→zur (these are dative/location); in das→ins, an das→ans (these are accusative/movement).\n' +
    '- Movement (Wohin?) uses accusative contractions ins/ans and zum/zur: "Ich gehe ins Café / zum Arzt / zur Schule." Location (Wo?) uses dative im/am/beim: "Ich bin im Café / am Bahnhof / beim Arzt."\n' +
    '- "nach Hause" = (going) home; "zu Hause" = (being) at home — fixed phrases.\n' +
    '- Directions often use the imperative: "Geh geradeaus", "Gehen Sie links".\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Contraction check:</b> one sentence on whether the right contraction (movement ins/zum vs location im/beim) was used.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your location words and contractions sound natural. On to <span class="de">Verben mit Dativ</span>.',
    mid: 'Good. Re-read the contractions card once (im vs ins, zum vs beim), then continue.',
    low: 'Worth another pass — memorise im/am/ins/ans/zum/zur/beim and the direction words, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'gehe', role: 'r-verb' },
    { w: 'zum', role: 'r-preposition' }, { w: 'Bahnhof', role: 'r-place' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the location words and the everyday contractions at a glance.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Talk Meike to the café — hear links, rechts, geradeaus, zum, am, ins in real directions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the location & direction words plus travel and city places.' },
    { id: 'grammar',    label: 'Places & contractions', tag: 'core',
      objective: 'Master hier/dort/links/rechts/geradeaus and the contractions im/am/ins/ans/zum/zur/beim.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a short route description and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a set of spoken directions and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask where to meet, say where you are, and give simple directions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short set of directions or describe where places are.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill contraction choice (im vs ins, zum vs beim) and location words.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The location & direction words plus travel and city places with examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Contraction drills (im/ins/zum/beim), direction-giving, error correction, and a route-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Location & direction words, the contractions im/am/ins/ans/zum/zur/beim, movement vs location, Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'links, rechts, geradeaus', text: 'Give simple directions' },
    { de: 'hier, dort, drüben', text: 'Say where something is' },
    { de: 'im / am / beim', text: 'Use location contractions' },
    { de: 'ins / ans / zum / zur', text: 'Use movement contractions' },
    { de: 'in der Nähe / weit weg', text: 'Say near or far' }
  ],

  // ---------- Vocabulary (116 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'am', pos: 'contraction', en: 'at the (an+dem)', hi: 'के पास', ex: 'Wir treffen uns am Bahnhof.', exEn: 'We meet at the station.' },
    { de: 'Flughafen', art: 'der', gender: 'm', plural: 'Flughäfen', pos: 'noun', en: 'airport', hi: 'हवाई अड्डा', ex: 'Der Flughafen ist weit weg.', exEn: 'The airport is far away.' },
    { de: 'Supermarkt', art: 'der', gender: 'm', plural: 'Supermärkte', pos: 'noun', en: 'supermarket', hi: 'सुपरमार्केट', ex: 'Ich bin beim Supermarkt.', exEn: 'I\u2019m at the supermarket.' },
    { de: 'Weg', art: 'der', gender: 'm', plural: 'Wege', pos: 'noun', en: 'way, path', hi: 'रास्ता', ex: 'Der Weg ist kurz.', exEn: 'The way is short.' },
    { de: 'Apotheke', art: 'die', gender: 'f', plural: 'Apotheken', pos: 'noun', en: 'pharmacy', hi: 'दवाख़ाना', ex: 'Die Apotheke ist an der Ecke.', exEn: 'The pharmacy is at the corner.' },
    { de: 'Bank (Geld)', art: 'die', gender: 'f', plural: 'Banken', pos: 'noun', en: 'bank (money)', hi: 'बैंक', ex: 'Die Bank ist gegenüber der Post.', exEn: 'The bank is across from the post office.' },
    { de: 'Haltestelle', art: 'die', gender: 'f', plural: 'Haltestellen', pos: 'noun', en: 'stop (bus/tram)', hi: 'ठहराव', ex: 'Die Haltestelle ist da vorne.', exEn: 'The stop is over there.' },
    { de: 'Post', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'post office', hi: 'डाकघर', ex: 'Ich gehe zur Post.', exEn: 'I go to the post office.' },
    { de: 'Wegbeschreibung', art: 'die', gender: 'f', plural: 'Wegbeschreibungen', pos: 'noun', en: 'directions', hi: 'रास्ते का विवरण', ex: 'Danke für die Wegbeschreibung!', exEn: 'Thanks for the directions!' },
    { de: 'geradeaus', pos: 'adverb', en: 'straight ahead', hi: 'सीधे', ex: 'Gehen Sie geradeaus.', exEn: 'Go straight ahead.' },
    { de: 'links', pos: 'adverb', en: 'left', hi: 'बाएँ', ex: 'Der Bahnhof ist links.', exEn: 'The station is on the left.' },
    { de: 'nach Hause', pos: 'phrase', en: '(toward) home', hi: 'घर की ओर', ex: 'Ich gehe nach Hause.', exEn: 'I go home.' },
    { de: 'rechts', pos: 'adverb', en: 'right', hi: 'दाएँ', ex: 'Das Café ist rechts.', exEn: 'The café is on the right.' },
    // ===== Active Support =====
    { de: 'aussteigen', pos: 'verb', en: 'to get off', hi: 'उतरना', ex: 'Ich steige am Bahnhof aus.', exEn: 'I get off at the station.', conj: { praesens: 'steigt aus', praeteritum: 'stieg aus', perfekt: 'ist ausgestiegen' } },
    { de: 'bar', pos: 'adverb', en: 'in cash', hi: 'नक़द', ex: 'Ich bezahle bar.', exEn: 'I pay in cash.' },
    { de: 'benutzen', pos: 'verb', en: 'to use', hi: 'इस्तेमाल करना', ex: 'Ich benutze die U-Bahn.', exEn: 'I use the subway.', conj: { praesens: 'benutzt', praeteritum: 'benutzte', perfekt: 'hat benutzt' } },
    { de: 'da vorne', pos: 'phrase', en: 'over there (front)', hi: 'आगे वहाँ', ex: 'Das Café ist da vorne.', exEn: 'The café is over there.' },
    { de: 'Apartment', art: 'das', gender: 'n', plural: 'Apartments', pos: 'noun', en: 'apartment', hi: 'अपार्टमेंट', ex: 'Das Apartment ist zentral.', exEn: 'The apartment is central.' },
    { de: 'Doppelzimmer', art: 'das', gender: 'n', plural: 'Doppelzimmer', pos: 'noun', en: 'double room', hi: 'डबल कमरा', ex: 'Wir nehmen ein Doppelzimmer.', exEn: 'We take a double room.' },
    { de: 'Dorf', art: 'das', gender: 'n', plural: 'Dörfer', pos: 'noun', en: 'village', hi: 'गाँव', ex: 'Das Dorf ist klein.', exEn: 'The village is small.' },
    { de: 'Einzelzimmer', art: 'das', gender: 'n', plural: 'Einzelzimmer', pos: 'noun', en: 'single room', hi: 'सिंगल कमरा', ex: 'Ich reserviere ein Einzelzimmer.', exEn: 'I book a single room.' },
    { de: 'Gepäck', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'luggage', hi: 'सामान', ex: 'Mein Gepäck ist schwer.', exEn: 'My luggage is heavy.' },
    { de: 'Gleis', art: 'das', gender: 'n', plural: 'Gleise', pos: 'noun', en: 'track, platform', hi: 'पटरी', ex: 'Der Zug fährt von Gleis drei.', exEn: 'The train leaves from track three.' },
    { de: 'Hotel', art: 'das', gender: 'n', plural: 'Hotels', pos: 'noun', en: 'hotel', hi: 'होटल', ex: 'Das Hotel ist im Zentrum.', exEn: 'The hotel is in the centre.' },
    { de: 'Paket', art: 'das', gender: 'n', plural: 'Pakete', pos: 'noun', en: 'package', hi: 'पार्सल', ex: 'Ich hole das Paket bei der Post.', exEn: 'I pick up the package at the post office.' },
    { de: 'Reiseziel', art: 'das', gender: 'n', plural: 'Reiseziele', pos: 'noun', en: 'destination', hi: 'गंतव्य', ex: 'Berlin ist mein Reiseziel.', exEn: 'Berlin is my destination.' },
    { de: 'Schild', art: 'das', gender: 'n', plural: 'Schilder', pos: 'noun', en: 'sign', hi: 'चिह्न', ex: 'Das Schild zeigt nach links.', exEn: 'The sign points left.' },
    { de: 'Zentrum', art: 'das', gender: 'n', plural: 'Zentren', pos: 'noun', en: 'centre', hi: 'केंद्र', ex: 'Ich gehe ins Zentrum.', exEn: 'I go into the centre.' },
    { de: 'Ausgang', art: 'der', gender: 'm', plural: 'Ausgänge', pos: 'noun', en: 'exit', hi: 'निकास', ex: 'Der Ausgang ist rechts.', exEn: 'The exit is on the right.' },
    { de: 'Ausweis', art: 'der', gender: 'm', plural: 'Ausweise', pos: 'noun', en: 'ID card', hi: 'पहचान पत्र', ex: 'Ich zeige meinen Ausweis.', exEn: 'I show my ID card.' },
    { de: 'Badeurlaub', art: 'der', gender: 'm', plural: 'Badeurlaube', pos: 'noun', en: 'beach holiday', hi: 'समुद्र तट की छुट्टी', ex: 'Wir machen einen Badeurlaub.', exEn: 'We go on a beach holiday.' },
    { de: 'Bahnsteig', art: 'der', gender: 'm', plural: 'Bahnsteige', pos: 'noun', en: 'platform', hi: 'प्लेटफ़ॉर्म', ex: 'Der Zug steht am Bahnsteig.', exEn: 'The train is at the platform.' },
    { de: 'Bäcker', art: 'der', gender: 'm', plural: 'Bäcker', pos: 'noun', en: 'baker', hi: 'बेकर', ex: 'Ich gehe zum Bäcker.', exEn: 'I go to the baker.' },
    { de: 'Ort', art: 'der', gender: 'm', plural: 'Orte', pos: 'noun', en: 'place, village', hi: 'स्थान', ex: 'Der Ort ist ruhig.', exEn: 'The place is quiet.' },
    { de: 'Pass', art: 'der', gender: 'm', plural: 'Pässe', pos: 'noun', en: 'passport', hi: 'पासपोर्ट', ex: 'Mein Pass ist im Gepäck.', exEn: 'My passport is in the luggage.' },
    { de: 'Plan', art: 'der', gender: 'm', plural: 'Pläne', pos: 'noun', en: 'plan, map', hi: 'योजना, नक़्शा', ex: 'Ich habe einen Plan.', exEn: 'I have a plan.' },
    { de: 'Reiseführer (Buch)', art: 'der', gender: 'm', plural: 'Reiseführer', pos: 'noun', en: 'guidebook', hi: 'गाइडबुक', ex: 'Der Reiseführer ist hilfreich.', exEn: 'The guidebook is helpful.' },
    { de: 'Stadturlaub', art: 'der', gender: 'm', plural: 'Stadturlaube', pos: 'noun', en: 'city break', hi: 'शहर की छुट्टी', ex: 'Wir machen einen Stadturlaub.', exEn: 'We take a city break.' },
    { de: 'Strand', art: 'der', gender: 'm', plural: 'Strände', pos: 'noun', en: 'beach', hi: 'समुद्र तट', ex: 'Der Strand ist schön.', exEn: 'The beach is lovely.' },
    { de: 'Urlaubsort', art: 'der', gender: 'm', plural: 'Urlaubsorte', pos: 'noun', en: 'holiday resort', hi: 'छुट्टी का स्थान', ex: 'Der Urlaubsort ist am Meer.', exEn: 'The resort is by the sea.' },
    { de: 'Zoo', art: 'der', gender: 'm', plural: 'Zoos', pos: 'noun', en: 'zoo', hi: 'चिड़ियाघर', ex: 'Wir gehen in den Zoo.', exEn: 'We go to the zoo.' },
    { de: 'Abfahrt', art: 'die', gender: 'f', plural: 'Abfahrten', pos: 'noun', en: 'departure', hi: 'प्रस्थान', ex: 'Die Abfahrt ist um acht.', exEn: 'The departure is at eight.' },
    { de: 'Ankunft', art: 'die', gender: 'f', plural: 'Ankünfte', pos: 'noun', en: 'arrival', hi: 'आगमन', ex: 'Die Ankunft ist um zehn.', exEn: 'The arrival is at ten.' },
    { de: 'Anmeldung', art: 'die', gender: 'f', plural: 'Anmeldungen', pos: 'noun', en: 'registration, reception', hi: 'पंजीकरण', ex: 'Die Anmeldung ist im Erdgeschoss.', exEn: 'Registration is on the ground floor.' },
    { de: 'Auskunft', art: 'die', gender: 'f', plural: 'Auskünfte', pos: 'noun', en: 'information (desk)', hi: 'जानकारी', ex: 'Ich frage an der Auskunft.', exEn: 'I ask at the information desk.' },
    { de: 'Bäckerei', art: 'die', gender: 'f', plural: 'Bäckereien', pos: 'noun', en: 'bakery', hi: 'बेकरी', ex: 'Die Bäckerei ist an der Ecke.', exEn: 'The bakery is at the corner.' },
    { de: 'Ecke', art: 'die', gender: 'f', plural: 'Ecken', pos: 'noun', en: 'corner', hi: 'कोना', ex: 'An der Ecke ist eine Apotheke.', exEn: 'There\u2019s a pharmacy at the corner.' },
    { de: 'Fahrkarte', art: 'die', gender: 'f', plural: 'Fahrkarten', pos: 'noun', en: 'ticket', hi: 'टिकट', ex: 'Ich kaufe eine Fahrkarte.', exEn: 'I buy a ticket.' },
    { de: 'Insel', art: 'die', gender: 'f', plural: 'Inseln', pos: 'noun', en: 'island', hi: 'द्वीप', ex: 'Die Insel ist klein.', exEn: 'The island is small.' },
    { de: 'Jugendherberge', art: 'die', gender: 'f', plural: 'Jugendherbergen', pos: 'noun', en: 'youth hostel', hi: 'युवा छात्रावास', ex: 'Wir schlafen in der Jugendherberge.', exEn: 'We sleep in the youth hostel.' },
    { de: 'Karte (map)', art: 'die', gender: 'f', plural: 'Karten', pos: 'noun', en: 'map', hi: 'नक़्शा', ex: 'Die Karte zeigt das Zentrum.', exEn: 'The map shows the centre.' },
    { de: 'Karte (pay)', art: 'die', gender: 'f', plural: 'Karten', pos: 'noun', en: 'card', hi: 'कार्ड', ex: 'Ich bezahle mit Karte.', exEn: 'I pay by card.' },
    { de: 'Kreditkarte', art: 'die', gender: 'f', plural: 'Kreditkarten', pos: 'noun', en: 'credit card', hi: 'क्रेडिट कार्ड', ex: 'Ich habe keine Kreditkarte.', exEn: 'I have no credit card.' },
    { de: 'Lage', art: 'die', gender: 'f', plural: 'Lagen', pos: 'noun', en: 'location', hi: 'स्थिति', ex: 'Die Lage ist zentral.', exEn: 'The location is central.' },
    { de: 'Miete', art: 'die', gender: 'f', plural: 'Mieten', pos: 'noun', en: 'rent', hi: 'किराया', ex: 'Die Miete ist hoch.', exEn: 'The rent is high.' },
    { de: 'Nummer', art: 'die', gender: 'f', plural: 'Nummern', pos: 'noun', en: 'number', hi: 'नंबर', ex: 'Welche Nummer hat der Bus?', exEn: 'Which number is the bus?' },
    { de: 'Nähe', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'proximity', hi: 'नज़दीकी', ex: 'Es ist in der Nähe.', exEn: 'It\u2019s nearby.' },
    { de: 'Papiere', art: 'die', gender: 'pl', plural: 'Papiere', pos: 'noun', en: 'documents', hi: 'काग़ज़ात', ex: 'Ich zeige meine Papiere.', exEn: 'I show my documents.' },
    { de: 'Postkarte', art: 'die', gender: 'f', plural: 'Postkarten', pos: 'noun', en: 'postcard', hi: 'पोस्टकार्ड', ex: 'Ich schreibe eine Postkarte.', exEn: 'I write a postcard.' },
    { de: 'Rezeption', art: 'die', gender: 'f', plural: 'Rezeptionen', pos: 'noun', en: 'reception', hi: 'स्वागत कक्ष', ex: 'Die Rezeption ist offen.', exEn: 'Reception is open.' },
    { de: 'Route', art: 'die', gender: 'f', plural: 'Routen', pos: 'noun', en: 'route', hi: 'मार्ग', ex: 'Die Route ist einfach.', exEn: 'The route is easy.' },
    { de: 'Sehenswürdigkeit', art: 'die', gender: 'f', plural: 'Sehenswürdigkeiten', pos: 'noun', en: 'sight, attraction', hi: 'दर्शनीय स्थल', ex: 'Die Sehenswürdigkeit ist berühmt.', exEn: 'The sight is famous.' },
    { de: 'Stadtführung', art: 'die', gender: 'f', plural: 'Stadtführungen', pos: 'noun', en: 'city tour (guided)', hi: 'शहर भ्रमण', ex: 'Die Stadtführung beginnt um zehn.', exEn: 'The city tour starts at ten.' },
    { de: 'Station', art: 'die', gender: 'f', plural: 'Stationen', pos: 'noun', en: 'station, stop', hi: 'स्टेशन', ex: 'Noch zwei Stationen.', exEn: 'Two more stops.' },
    { de: 'Städtereise', art: 'die', gender: 'f', plural: 'Städtereisen', pos: 'noun', en: 'city trip', hi: 'शहर यात्रा', ex: 'Eine Städtereise nach Wien.', exEn: 'A city trip to Vienna.' },
    { de: 'direkt', pos: 'adverb', en: 'directly, right', hi: 'सीधे', ex: 'Das Café ist direkt an der Ecke.', exEn: 'The café is right at the corner.' },
    { de: 'dort', pos: 'adverb', en: 'there', hi: 'वहाँ', ex: 'Das Hotel ist dort.', exEn: 'The hotel is there.' },
    { de: 'einfach', pos: 'adjective', en: 'easy, simple', hi: 'आसान', ex: 'Der Weg ist einfach.', exEn: 'The way is easy.' },
    { de: 'einsteigen', pos: 'verb', en: 'to board, get on', hi: 'चढ़ना', ex: 'Wir steigen in den Bus ein.', exEn: 'We get on the bus.', conj: { praesens: 'steigt ein', praeteritum: 'stieg ein', perfekt: 'ist eingestiegen' } },
    { de: 'etwas (a bit)', pos: 'adverb', en: 'a bit', hi: 'थोड़ा', ex: 'Es ist etwas weit.', exEn: 'It\u2019s a bit far.' },
    { de: 'nehmen (Bus)', pos: 'verb', en: 'to take (the bus)', hi: 'लेना', ex: 'Ich nehme den Bus.', exEn: 'I take the bus.', conj: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { de: 'offen', pos: 'adjective', en: 'open', hi: 'खुला', ex: 'Die Apotheke ist offen.', exEn: 'The pharmacy is open.' },
    { de: 'reservieren', pos: 'verb', en: 'to book, reserve', hi: 'आरक्षित करना', ex: 'Ich reserviere ein Zimmer.', exEn: 'I book a room.', conj: { praesens: 'reserviert', praeteritum: 'reservierte', perfekt: 'hat reserviert' } },
    { de: 'umsteigen', pos: 'verb', en: 'to change (transport)', hi: 'बदलना', ex: 'Ich steige am Bahnhof um.', exEn: 'I change at the station.', conj: { praesens: 'steigt um', praeteritum: 'stieg um', perfekt: 'ist umgestiegen' } },
    { de: 'umziehen', pos: 'verb', en: 'to move (house)', hi: 'घर बदलना', ex: 'Ich ziehe ins Zentrum um.', exEn: 'I move to the centre.', conj: { praesens: 'zieht um', praeteritum: 'zog um', perfekt: 'ist umgezogen' } },
    { de: 'unterwegs', pos: 'adverb', en: 'on the way', hi: 'रास्ते में', ex: 'Ich bin schon unterwegs.', exEn: 'I\u2019m already on the way.' },
    { de: 'verpassen', pos: 'verb', en: 'to miss (a train)', hi: 'छूट जाना', ex: 'Ich verpasse den Zug.', exEn: 'I miss the train.', conj: { praesens: 'verpasst', praeteritum: 'verpasste', perfekt: 'hat verpasst' } },
    { de: 'vorne', pos: 'adverb', en: 'in front, at the front', hi: 'आगे', ex: 'Anna sitzt vorne.', exEn: 'Anna sits at the front.' },
    { de: 'weit (far)', pos: 'adjective', en: 'far', hi: 'दूर', ex: 'Der Flughafen ist weit.', exEn: 'The airport is far.' },
    { de: 'zentral', pos: 'adjective', en: 'central', hi: 'केंद्रीय', ex: 'Das Hotel ist zentral.', exEn: 'The hotel is central.' },
    { de: 'übernachten', pos: 'verb', en: 'to stay overnight', hi: 'रात बिताना', ex: 'Wir übernachten im Hotel.', exEn: 'We stay overnight in the hotel.', conj: { praesens: 'übernachtet', praeteritum: 'übernachtete', perfekt: 'hat übernachtet' } },
    // ===== Passive =====
    { de: 'besichtigen', pos: 'verb', en: 'to view, visit (sight)', hi: 'देखने जाना', ex: 'Wir besichtigen die Burg.', exEn: 'We visit the castle.', conj: { praesens: 'besichtigt', praeteritum: 'besichtigte', perfekt: 'hat besichtigt' } },
    { de: 'Konto', art: 'das', gender: 'n', plural: 'Konten', pos: 'noun', en: 'account', hi: 'खाता', ex: 'Mein Konto ist leer.', exEn: 'My account is empty.' },
    { de: 'Souvenir', art: 'das', gender: 'n', plural: 'Souvenirs', pos: 'noun', en: 'souvenir', hi: 'स्मृति चिह्न', ex: 'Ich kaufe ein Souvenir.', exEn: 'I buy a souvenir.' },
    { de: 'Automat', art: 'der', gender: 'm', plural: 'Automaten', pos: 'noun', en: 'machine, dispenser', hi: 'मशीन', ex: 'Die Fahrkarte kommt vom Automaten.', exEn: 'The ticket comes from the machine.' },
    { de: 'Campingurlaub', art: 'der', gender: 'm', plural: 'Campingurlaube', pos: 'noun', en: 'camping holiday', hi: 'कैंपिंग छुट्टी', ex: 'Wir machen einen Campingurlaub.', exEn: 'We go on a camping holiday.' },
    { de: 'Schaffner', art: 'der', gender: 'm', plural: 'Schaffner', pos: 'noun', en: 'conductor (m)', hi: 'टिकट निरीक्षक', ex: 'Der Schaffner kommt.', exEn: 'The conductor is coming.' },
    { de: 'Ski-Urlaub', art: 'der', gender: 'm', plural: 'Ski-Urlaube', pos: 'noun', en: 'ski holiday', hi: 'स्की छुट्टी', ex: 'Ein Ski-Urlaub in den Bergen.', exEn: 'A ski holiday in the mountains.' },
    { de: 'Snowboard-Urlaub', art: 'der', gender: 'm', plural: 'Snowboard-Urlaube', pos: 'noun', en: 'snowboard holiday', hi: 'स्नोबोर्ड छुट्टी', ex: 'Max will einen Snowboard-Urlaub.', exEn: 'Max wants a snowboard holiday.' },
    { de: 'Ticketkauf', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'ticket purchase', hi: 'टिकट ख़रीद', ex: 'Der Ticketkauf ist einfach.', exEn: 'Buying a ticket is easy.' },
    { de: 'Traumurlaub', art: 'der', gender: 'm', plural: 'Traumurlaube', pos: 'noun', en: 'dream holiday', hi: 'सपनों की छुट्टी', ex: 'Das ist mein Traumurlaub.', exEn: 'That\u2019s my dream holiday.' },
    { de: 'Umzug', art: 'der', gender: 'm', plural: 'Umzüge', pos: 'noun', en: 'move (house)', hi: 'गृह-परिवर्तन', ex: 'Der Umzug ist am Samstag.', exEn: 'The move is on Saturday.' },
    { de: 'Vermieter', art: 'der', gender: 'm', plural: 'Vermieter', pos: 'noun', en: 'landlord', hi: 'मकान मालिक', ex: 'Der Vermieter ist nett.', exEn: 'The landlord is nice.' },
    { de: 'Attraktion', art: 'die', gender: 'f', plural: 'Attraktionen', pos: 'noun', en: 'attraction', hi: 'आकर्षण', ex: 'Die Attraktion ist beliebt.', exEn: 'The attraction is popular.' },
    { de: 'Bergtour', art: 'die', gender: 'f', plural: 'Bergtouren', pos: 'noun', en: 'mountain tour', hi: 'पर्वत यात्रा', ex: 'Die Bergtour ist lang.', exEn: 'The mountain tour is long.' },
    { de: 'Burg', art: 'die', gender: 'f', plural: 'Burgen', pos: 'noun', en: 'castle', hi: 'किला', ex: 'Die Burg ist alt.', exEn: 'The castle is old.' },
    { de: 'Kontonummer', art: 'die', gender: 'f', plural: 'Kontonummern', pos: 'noun', en: 'account number', hi: 'खाता संख्या', ex: 'Wie ist Ihre Kontonummer?', exEn: 'What is your account number?' },
    { de: 'Metzgerei', art: 'die', gender: 'f', plural: 'Metzgereien', pos: 'noun', en: 'butcher\u2019s', hi: 'कसाई की दुकान', ex: 'Die Metzgerei ist neben der Bäckerei.', exEn: 'The butcher\u2019s is next to the bakery.' },
    { de: 'Pension', art: 'die', gender: 'f', plural: 'Pensionen', pos: 'noun', en: 'guesthouse', hi: 'अतिथिगृह', ex: 'Wir wohnen in einer Pension.', exEn: 'We stay in a guesthouse.' },
    { de: 'Schaffnerin', art: 'die', gender: 'f', plural: 'Schaffnerinnen', pos: 'noun', en: 'conductor (f)', hi: 'टिकट निरीक्षक', ex: 'Die Schaffnerin prüft die Karten.', exEn: 'The conductor checks the tickets.' },
    { de: 'Stadttour', art: 'die', gender: 'f', plural: 'Stadttouren', pos: 'noun', en: 'city tour', hi: 'शहर भ्रमण', ex: 'Die Stadttour ist toll.', exEn: 'The city tour is great.' },
    { de: 'Taxifahrt', art: 'die', gender: 'f', plural: 'Taxifahrten', pos: 'noun', en: 'taxi ride', hi: 'टैक्सी यात्रा', ex: 'Die Taxifahrt ist teuer.', exEn: 'The taxi ride is expensive.' },
    { de: 'Tour', art: 'die', gender: 'f', plural: 'Touren', pos: 'noun', en: 'tour', hi: 'यात्रा', ex: 'Die Tour dauert zwei Stunden.', exEn: 'The tour lasts two hours.' },
    { de: 'Vermieterin', art: 'die', gender: 'f', plural: 'Vermieterinnen', pos: 'noun', en: 'landlady', hi: 'मकान मालकिन', ex: 'Die Vermieterin wohnt oben.', exEn: 'The landlady lives upstairs.' },
    { de: 'Wohnfläche', art: 'die', gender: 'f', plural: 'Wohnflächen', pos: 'noun', en: 'living space', hi: 'रहने का क्षेत्र', ex: 'Die Wohnfläche ist 60 qm.', exEn: 'The living space is 60 sq m.' },
    { de: 'Wohnungsanzeige', art: 'die', gender: 'f', plural: 'Wohnungsanzeigen', pos: 'noun', en: 'flat advert', hi: 'फ़्लैट विज्ञापन', ex: 'Ich lese eine Wohnungsanzeige.', exEn: 'I read a flat advert.' },
    { de: 'Wohnungssuche', art: 'die', gender: 'f', plural: 'Wohnungssuchen', pos: 'noun', en: 'flat search', hi: 'फ़्लैट की तलाश', ex: 'Die Wohnungssuche ist schwer.', exEn: 'The flat search is hard.' },
    { de: 'maximal', pos: 'adverb', en: 'maximum, at most', hi: 'अधिकतम', ex: 'Maximal 500 Euro Miete.', exEn: 'At most 500 euros rent.' },
    { de: 'orientieren (sich)', pos: 'verb', en: 'to orient oneself', hi: 'रास्ता पहचानना', ex: 'Ich orientiere mich mit der Karte.', exEn: 'I orient myself with the map.', conj: { praesens: 'orientiert sich', praeteritum: 'orientierte sich', perfekt: 'hat sich orientiert' } },
    { de: 'qm (Quadratmeter)', spokenDe: 'Quadratmeter', pos: 'noun', en: 'square metre', hi: 'वर्ग मीटर', ex: 'Die Wohnung hat 60 qm.', exEn: 'The flat has 60 sq m.' },
    { de: 'vermieten', pos: 'verb', en: 'to rent out', hi: 'किराए पर देना', ex: 'Sie vermietet ein Zimmer.', exEn: 'She rents out a room.', conj: { praesens: 'vermietet', praeteritum: 'vermietete', perfekt: 'hat vermietet' } },
    { de: 'zurückfinden', pos: 'verb', en: 'to find the way back', hi: 'वापस रास्ता ढूँढना', ex: 'Ich finde zurück.', exEn: 'I find my way back.', conj: { praesens: 'findet zurück', praeteritum: 'fand zurück', perfekt: 'hat zurückgefunden' } },
    { de: 'überweisen', pos: 'verb', en: 'to transfer (money)', hi: 'पैसे भेजना', ex: 'Ich überweise die Miete.', exEn: 'I transfer the rent.', conj: { praesens: 'überweist', praeteritum: 'überwies', perfekt: 'hat überwiesen' } },
    // ===== Reference / System =====
    { de: 'Kurzform', art: 'die', gender: 'f', plural: 'Kurzformen', pos: 'noun', en: 'short form, contraction', hi: 'संक्षिप्त रूप', ex: '"im" ist eine Kurzform.', exEn: '"im" is a contraction.' },
    { de: 'Ortsangabe', art: 'die', gender: 'f', plural: 'Ortsangaben', pos: 'noun', en: 'location expression', hi: 'स्थान-सूचक', ex: '"links" ist eine Ortsangabe.', exEn: '"links" is a location expression.' }
  ],

  // ---------- Places & contractions (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Location & direction words',
      body: [
        'A small kit of words covers "where" and "which way". They\u2019re adverbs \u2014 no article, no case to worry about.'
      ],
      table: {
        head: ['Word', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-place">hier / dort / da</span>', 'here / there', '<span class="de">Das Café ist dort.</span>'],
          ['<span class="de r-place">links / rechts</span>', 'left / right', '<span class="de">Der Bahnhof ist links.</span>'],
          ['<span class="de r-place">geradeaus</span>', 'straight ahead', '<span class="de">Geh geradeaus.</span>'],
          ['<span class="de r-place">vorne / hinten</span>', 'front / back', '<span class="de">Anna sitzt vorne.</span>']
        ]
      },
      note: 'Also: <b>oben / unten</b> (up / down), <b>drüben</b> (over there), <b>in der Nähe</b> (nearby), <b>weit weg</b> (far away), <b>an der Ecke</b> (at the corner). These don\u2019t change \u2014 just drop them in.',
      hinglish: 'Chhota sa kit "kahaan" aur "kis taraf" cover karta hai: <b>hier/dort/da</b> (yahaan/wahaan), <b>links/rechts</b> (baayen/daayen), <b>geradeaus</b> (seedhe), <b>vorne/hinten</b> (aage/peeche). Plus <b>oben/unten, drüben, in der Nähe, weit weg</b>. Yeh nahi badalte.'
    },
    {
      title: 'The contractions: location (dative)',
      body: [
        'Germans almost never say "in dem" or "an dem". They contract. The dative (location) contractions:'
      ],
      table: {
        head: ['Full', 'Contraction', 'Example'],
        rows: [
          ['in dem', '<span class="de r-preposition">im</span>', '<span class="de">Ich bin im Café.</span>'],
          ['an dem', '<span class="de r-preposition">am</span>', '<span class="de">Wir treffen uns am Bahnhof.</span>'],
          ['bei dem', '<span class="de r-preposition">beim</span>', '<span class="de">Ich bin beim Supermarkt.</span>'],
          ['zu dem / zu der', '<span class="de r-preposition">zum / zur</span>', '<span class="de">Ich gehe zum Arzt / zur Post.</span>']
        ]
      },
      note: 'Location uses <b>im</b> (in dem), <b>am</b> (an dem), <b>beim</b> (bei dem). And <b>zum</b> (zu dem) / <b>zur</b> (zu der) for going to a place. These are dative \u2014 use them by default.',
      hinglish: 'Germans "in dem"/"an dem" lagbhag kabhi nahi kehte \u2014 jod dete hain. Location (dative): <b>im</b> (in dem), <b>am</b> (an dem), <b>beim</b> (bei dem). Aur jagah jaane ke liye <b>zum</b> (zu dem) / <b>zur</b> (zu der). Default inhe use karo.'
    },
    {
      title: 'The contractions: movement (accusative)',
      body: [
        'When there\u2019s movement into something (Wohin?), the two-way prepositions in/an contract differently \u2014 into the accusative.'
      ],
      table: {
        head: ['Full', 'Contraction', 'Example'],
        rows: [
          ['in das', '<span class="de r-preposition">ins</span>', '<span class="de">Ich gehe ins Café.</span>'],
          ['an das', '<span class="de r-preposition">ans</span>', '<span class="de">Ich gehe ans Fenster.</span>'],
          ['im vs ins', 'location vs motion', '<span class="de">im Café (Wo?) / ins Café (Wohin?)</span>'],
          ['am vs ans', 'location vs motion', '<span class="de">am Fenster (Wo?) / ans Fenster (Wohin?)</span>']
        ]
      },
      note: 'Movement: <b>ins</b> (in das), <b>ans</b> (an das). Compare: "Ich bin <b>im</b> Café" (Wo? location) vs "Ich gehe <b>ins</b> Café" (Wohin? movement). zum/zur already cover going to a place.',
      hinglish: 'Movement (Wohin?) ke liye: <b>ins</b> (in das), <b>ans</b> (an das). Farak: "Ich bin <b>im</b> Café" (Wo? \u2014 hona) vs "Ich gehe <b>ins</b> Café" (Wohin? \u2014 jaana). zum/zur pehle se jagah jaane ke liye hain.'
    },
    {
      title: 'nach Hause vs zu Hause; giving directions',
      goldenRule: '<b>nach Hause</b> = going home (movement). <b>zu Hause</b> = being at home (location).',
      memoryTrick: 'Do fixed phrases, aur inhe todna nahi hai: <b>nach Hause</b> (ghar <b>jaana</b>) vs <b>zu Hause</b> (ghar <b>par hona</b>). Yeh Wohin/Wo ka hi farak hai.',
      body: [
        'Two fixed "home" phrases, and how directions usually sound.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich gehe nach Hause.</span>', 'I go home. (movement)'],
          ['<span class="de">Ich bin zu Hause.</span>', 'I am at home. (location)'],
          ['<span class="de">Geh geradeaus, dann links.</span>', 'Go straight, then left. (imperative)'],
          ['<span class="de">Es ist in der Nähe / weit weg.</span>', 'It\u2019s nearby / far away.']
        ]
      },
      note: '<b>nach Hause</b> = going home; <b>zu Hause</b> = being at home (fixed phrases, no article). Directions use the imperative: "Geh / Gehen Sie geradeaus." Ask "Wie komme ich zum Bahnhof?"',
      hinglish: '<b>nach Hause</b> = ghar jaana; <b>zu Hause</b> = ghar par hona (fixed, article nahi). Directions imperative mein: "Geh / Gehen Sie geradeaus." Poochho: "Wie komme ich zum Bahnhof?"'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four location/contraction traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich gehe im Café.', right: 'Ich gehe ins Café.', why: 'Movement (Wohin?) → ins, not im.' },
        { wrong: 'Ich bin ins Büro.', right: 'Ich bin im Büro.', why: 'Location (Wo?) → im, not ins.' },
        { wrong: 'Ich gehe zu dem Arzt.', right: 'Ich gehe zum Arzt.', why: 'zu dem always contracts to zum.' },
        { wrong: 'Ich gehe zu Hause.', right: 'Ich gehe nach Hause.', why: 'Going home = nach Hause; zu Hause = being at home.' }
      ],
      hinglish: 'Char galtiyan common hain. Movement ke liye <b>ins Café</b> aata hai, "im" nahi. Location ke liye <b>im Büro</b>, "ins" nahi. <b>zu dem</b> ko aksar <b>zum</b> bola jaata hai. Aur ghar jaane ke liye <b>nach Hause</b> aata hai, jabki ghar par hone ke liye <b>zu Hause</b>.'
    }
  ],

  // ---------- Reading passage (a route description, clickable) ----------
  reading: {
    title: 'Der Weg zum Café',
    titleEn: 'The way to the café',
    tokens: [
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'am', role: 'r-preposition', en: 'at the', hi: 'के पास', pron: 'am', type: 'Contraction · dat.', why: 'an + dem → am (location) (this chapter).', ex: 'am Bahnhof', exEn: 'at the station' },
      { w: 'Bahnhof', role: 'r-place', en: 'station', hi: 'स्टेशन', pron: 'BAHN-hohf', type: 'Noun · masc.', why: 'der Bahnhof (recycled — Wechselpräpositionen).', ex: 'am Bahnhof', exEn: 'at the station' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'geht', role: 'r-verb', en: 'goes', hi: 'जाता है', pron: 'gayt', type: 'Verb · gehen (er)', why: 'gehen (recycled — Verben).', ex: 'Er geht geradeaus.', exEn: 'He goes straight ahead.' },
      { w: 'geradeaus', role: 'r-place', en: 'straight ahead', hi: 'सीधे', pron: 'guh-RAH-duh-ows', type: 'Direction', why: 'geradeaus (this chapter).', ex: 'geradeaus gehen', exEn: 'go straight ahead' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und dann links.', exEn: '…, and then left.' },
      { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'dann links', exEn: 'then left' },
      { w: 'links', role: 'r-place', en: 'left', hi: 'बाएँ', pron: 'links', type: 'Direction', why: 'links (this chapter).', ex: 'nach links', exEn: 'to the left' },
      { w: '.', plain: true },
      { w: 'An', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'an', type: 'Wechselpräp. + dat.', why: 'an der Ecke (location → dative) (recycled — Wechselpräpositionen).', ex: 'an der Ecke', exEn: 'at the corner' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Ecke', role: 'r-object', en: 'corner', hi: 'कोना', pron: 'E-kuh', type: 'Noun · fem.', why: 'die Ecke (this chapter).', ex: 'an der Ecke', exEn: 'at the corner' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article' },
      { w: 'Apotheke', role: 'r-subject', en: 'pharmacy', hi: 'दवाख़ाना', pron: 'a-po-TAY-kuh', type: 'Noun · fem.', why: 'die Apotheke (this chapter).', ex: 'eine Apotheke', exEn: 'a pharmacy' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-article', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Caf\u00e9', role: 'r-subject', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · neut.', why: 'das Café (recycled — Im Café).', ex: 'Das Café ist rechts.', exEn: 'The café is on the right.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'direkt', role: 'r-adverb', en: 'right', hi: 'सीधे', pron: 'di-REKT', type: 'Adverb', why: 'direkt (this chapter).', ex: 'direkt an der Ecke', exEn: 'right at the corner' },
      { w: 'rechts', role: 'r-place', en: 'on the right', hi: 'दाएँ', pron: 'rekhts', type: 'Direction', why: 'rechts (this chapter).', ex: 'rechts neben der Apotheke', exEn: 'right next to the pharmacy' },
      { w: ',', plain: true },
      { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल', pron: 'NAY-ben', type: 'Wechselpräp. + dat.', why: 'neben + dative (recycled — Wechselpräpositionen).', ex: 'neben der Apotheke', exEn: 'next to the pharmacy' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Apotheke', role: 'r-object', en: 'pharmacy', hi: 'दवाख़ाना', pron: 'a-po-TAY-kuh', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpräp. + dat.', why: '"in der Nähe" = nearby (this chapter).', ex: 'in der Nähe', exEn: 'nearby' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'N\u00e4he', role: 'r-object', en: 'proximity', hi: 'नज़दीक', pron: 'NAY-uh', type: 'Noun · fem.', why: '"in der Nähe" (this chapter).', ex: 'in der Nähe', exEn: 'nearby' },
      { w: ',', plain: true },
      { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur (recycled — Hobbies).', ex: 'nur zwei Minuten', exEn: 'only two minutes' },
      { w: 'zwei', role: 'r-object', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number', why: 'zwei = 2 (recycled — Zahlen).', ex: 'zwei Minuten', exEn: 'two minutes' },
      { w: 'Minuten', role: 'r-object', en: 'minutes', hi: 'मिनट', pron: 'mi-NOO-ten', type: 'Noun · plural', why: 'die Minuten (recycled — Uhrzeit).', ex: 'zwei Minuten', exEn: 'two minutes' },
      { w: 'zu', role: 'r-preposition', en: 'on', hi: 'से', pron: 'tsoo', type: 'Preposition', why: '"zu Fuß" (recycled — Präpositionen mit Dativ).', ex: 'zu Fuß', exEn: 'on foot' },
      { w: 'Fu\u00df', role: 'r-place', en: 'foot', hi: 'पैदल', pron: 'foos', type: 'Noun · masc.', why: '"zu Fuß" (recycled — Präpositionen mit Dativ).', ex: 'zu Fuß', exEn: 'on foot' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'geht', role: 'r-verb', en: 'goes', hi: 'जाता है', pron: 'gayt', type: 'Verb · gehen (er)', why: 'gehen (recycled — Verben).', ex: 'Er geht ins Café.', exEn: 'He goes into the café.' },
      { w: 'ins', role: 'r-preposition', en: 'into the', hi: 'के अंदर', pron: 'ins', type: 'Contraction · acc.', why: 'in + das → ins (movement) (this chapter).', ex: 'ins Café', exEn: 'into the café' },
      { w: 'Caf\u00e9', role: 'r-place', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · neut.', why: 'das Café (recycled — Im Café).', ex: 'ins Café gehen', exEn: 'go into the café' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sieht', role: 'r-verb', en: 'sees', hi: 'देखता है', pron: 'zeet', type: 'Verb · sehen (er)', why: 'sehen (recycled — Unregelmäßige Verben).', ex: 'Er sieht Anna.', exEn: 'He sees Anna.' },
      { w: 'Anna', role: 'r-akkusativ', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'am', role: 'r-preposition', en: 'at the', hi: 'के पास', pron: 'am', type: 'Contraction · dat.', why: 'an + dem → am (location) (this chapter).', ex: 'am Fenster', exEn: 'at the window' },
      { w: 'Fenster', role: 'r-place', en: 'window', hi: 'खिड़की', pron: 'FEN-ster', type: 'Noun · neut.', why: 'das Fenster (recycled — Wechselpräpositionen).', ex: 'am Fenster', exEn: 'at the window' },
      { w: '.', plain: true }
    ],
    translation: 'Rohan is at the station. He goes straight ahead and then left. At the corner there\u2019s a pharmacy. The café is right on the right, next to the pharmacy. It\u2019s nearby, only two minutes on foot. Rohan goes into the café and sees Anna at the window.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_039_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Entschuldigung, wie komme ich zum Bahnhof?', en: 'Excuse me, how do I get to the station?' },
      { id: 'A1_039_L002', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gehen Sie geradeaus, dann rechts. An der Ecke ist eine Bäckerei. Der Bahnhof ist direkt dahinter.', en: 'Go straight ahead, then right. At the corner there\'s a bakery. The station is right behind it.' },
      { id: 'A1_039_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ist es weit?', en: 'Is it far?' },
      { id: 'A1_039_L004', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, es ist in der Nähe, nur fünf Minuten.', en: 'No, it\'s nearby, only five minutes.' },
      { id: 'A1_039_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der Supermarkt?', en: 'And the supermarket?' },
      { id: 'A1_039_L006', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der ist am Bahnhof, links vom Ausgang.', en: 'That\'s at the station, to the left of the exit.' }
    ],
    transcript: 'Entschuldigung, wie komme ich zum Bahnhof? Gehen Sie geradeaus, dann rechts. An der Ecke ist eine Bäckerei. Der Bahnhof ist direkt dahinter. Ist es weit? Nein, es ist in der Nähe, nur fünf Minuten. Und der Supermarkt? Der ist am Bahnhof, links vom Ausgang.',
    translation: 'Excuse me, how do I get to the station? Go straight ahead, then right. At the corner there\'s a bakery. The station is right behind it. Is it far? No, it\'s nearby, only five minutes. And the supermarket? That\'s at the station, to the left of the exit.',
    tokens: [
      { w: 'Entschuldigung' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'komme' },
      { w: 'ich' },
      { w: 'zum' },
      { w: 'Bahnhof' },
      { w: '?', plain: true },
      { w: 'Gehen' },
      { w: 'Sie' },
      { w: 'geradeaus' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'rechts' },
      { w: '.', plain: true },
      { w: 'An' },
      { w: 'der' },
      { w: 'Ecke' },
      { w: 'ist' },
      { w: 'eine' },
      { w: 'Bäckerei' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Bahnhof' },
      { w: 'ist' },
      { w: 'direkt' },
      { w: 'dahinter' },
      { w: '.', plain: true },
      { w: 'Ist' },
      { w: 'es' },
      { w: 'weit' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'ist' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Nähe' },
      { w: ',', plain: true },
      { w: 'nur' },
      { w: 'fünf' },
      { w: 'Minuten' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'Supermarkt' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'ist' },
      { w: 'am' },
      { w: 'Bahnhof' },
      { w: ',', plain: true },
      { w: 'links' },
      { w: 'vom' },
      { w: 'Ausgang' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'In welche Richtung geht es zuerst?', qEn: 'Which way first?', options: ['links', 'geradeaus', 'rechts', 'zurück'], optionsEn: ['left', 'straight ahead', 'right', 'back'], answer: 1,
        explain: '"Gehen Sie geradeaus, dann rechts."' },
      { q: 'Wie weit ist der Bahnhof?', qEn: 'How far is the station?', options: ['sehr weit', 'in der Nähe', 'eine Stunde', 'am Flughafen'], optionsEn: ['very far', 'nearby', 'an hour', 'at the airport'], answer: 1,
        explain: '"… es ist in der Nähe, nur fünf Minuten."' },
      { q: 'Wo ist der Supermarkt?', qEn: 'Where is the supermarket?', options: ['am Bahnhof', 'an der Bäckerei', 'im Zentrum', 'am Flughafen'], optionsEn: ['at the station', 'at the bakery', 'in the centre', 'at the airport'], answer: 0,
        explain: '"Der ist am Bahnhof, links vom Ausgang."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Dein Freund fragt am Telefon: Wo bist du?", taskEn: "Your friend asks on the phone: where are you?", de: "Ich bin am Bahnhof, da vorne bei der Apotheke.", en: "I'm at the station, over there by the pharmacy." },
    { task: "Ein Tourist fragt: Wie komme ich zur Post?", taskEn: "A tourist asks: how do I get to the post office?", de: "Gehen Sie geradeaus und dann rechts. Die Post ist neben der Bank.", en: "Go straight on and then right. The post office is next to the bank." },
    { task: "Dein Freund fragt: Wo treffen wir uns?", taskEn: "Your friend asks: where shall we meet?", de: "Wir treffen uns an der Haltestelle beim Supermarkt.", en: "Let's meet at the stop by the supermarket." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short set of directions (5\u20137 sentences) from the station to your favourite place. Use direction words (geradeaus, links, rechts, an der Ecke) and at least three contractions (zum, zur, am, im, ins). End by saying whether it\u2019s nearby or far.',
    starters: ['Geh vom Bahnhof geradeaus …', 'Dann links / rechts …', 'An der Ecke ist …', 'Das … ist in der Nähe / weit weg.'],
    placeholder: 'Geh vom Bahnhof geradeaus, dann links …',
    minWords: 25
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the right contraction: "Ich gehe ___ Arzt."',
      options: ['im', 'zum', 'am', 'beim'],
      answer: 1,
      explain: 'Going to a place: zu dem → zum. "Ich gehe zum Arzt."'
    },
    gap: {
      // location im vs movement ins
      sentence: ['Ich bin ', ' Café und dann gehe ich ', ' Zentrum.'],
      gaps: [ { answer: 'im', accepts: ['im'] }, { answer: 'ins', accepts: ['ins'] } ],
      explain: 'im = location (Wo?); ins = movement (Wohin?).'
    },
    match: {
      q: 'Match each contraction to its full form.',
      pairs: [
        { noun: 'im', art: 'in dem' },
        { noun: 'zur', art: 'zu der' },
        { noun: 'beim', art: 'bei dem' },
        { noun: 'ans', art: 'an das' }
      ]
    },
    builder: {
      target: 'Build: "I go to the station."',
      bank: ['Ich', 'gehe', 'zum', 'Bahnhof'],
      answer: ['Ich', 'gehe', 'zum', 'Bahnhof'],
      roles: { 'Ich': 'r-subject', 'gehe': 'r-verb', 'zum': 'r-preposition', 'Bahnhof': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which word means "straight ahead"?', options: ['links', 'rechts', 'geradeaus', 'oben'], answer: 2,
      explain: 'geradeaus = straight ahead.' },
    { q: 'What is "zu der" contracted?', options: ['zum', 'zur', 'zer', 'zus'], answer: 1,
      explain: 'zu der → zur.' },
    { q: 'Complete (location): "Ich bin ___ Café."', options: ['ins', 'im', 'ans', 'zum'], answer: 1,
      explain: 'Location (Wo?) → im (in dem).' },
    { q: 'Complete (movement): "Ich gehe ___ Café."', options: ['im', 'ins', 'am', 'beim'], answer: 1,
      explain: 'Movement (Wohin?) → ins (in das).' },
    { q: 'How do you say "I go home"?', options: ['Ich bin zu Hause.', 'Ich gehe nach Hause.', 'Ich gehe im Haus.', 'Ich bin nach Hause.'], answer: 1,
      explain: 'Going home = nach Hause; zu Hause = being at home.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-place', html: 'Direction words: <span class="de">hier, dort, links, rechts, geradeaus, vorne, in der Nähe</span>.' },
    { c: 'r-preposition', html: 'Location contractions (dative): <span class="de">im, am, beim, zum, zur</span>.' },
    { c: 'r-preposition', html: 'Movement contractions (accusative): <span class="de">ins, ans</span>. <span class="de">nach Hause</span> = going home, <span class="de">zu Hause</span> = at home.' }
  ],
  revisionTips: [
    'Use the contractions by default — "in dem"/"zu dem" sound unnatural; say im/zum.',
    'Wo? (location) → im/am/beim; Wohin? (movement) → ins/ans/zum/zur.',
    'Keep the two home phrases straight: nach Hause (going) vs zu Hause (being).'
  ]
};

window.CHAPTER = CHAPTER;
