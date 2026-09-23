/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 15
   "Positions- & Richtungsverben"  (verb pairs: stehen/stellen,
   liegen/legen, sitzen/setzen, h\u00e4ngen/h\u00e4ngen, stecken/stecken).
   Position (Wo?) \u2192 Dativ; Direction (Wohin?) \u2192 Akkusativ.
   Direct continuation of Ch.14 Wechselpr\u00e4positionen.
   Vocabulary source: uploaded chapter-15 list (~35 items; traffic /
   mobility / commuting / bank-PIN theme). Recycles Ch.14 (Wechsel-
   pr\u00e4p.), Ch.13 (Dativ-Pr\u00e4p.), Ch.12 (reflexive), Ch.8-9 (Komparativ,
   als/wie) and A1.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS / gloss slips corrected (flagged, not overridden):
   • "das Konzept - concept to park" \u2192 das Konzept = concept, plan.
     The "to park" fragment belongs to no entry; dropped.
   • "3c\u00dcB abifliegen - to depart" \u2192 abfliegen (to depart/take off),
     separable.
   • "weiter|fahren" \u2192 weiterfahren (to carry on / drive on).
   • "zusammen|fassen" \u2192 zusammenfassen (to summarize).
   • "gegen - against" is an accusative preposition; taught only as
     vocabulary (gegen die Wand), not as a case rule here.
   • "halten - to stop" glossed as to stop / to hold.
============================================================ */
const CHAPTER = {
  id: 'a2-15-positions-richtungsverben',
  phase: 'A2 · Phase 2',
  number: 15,
  title: 'Positions- & Richtungsverben',
  titleEn: 'Position & Direction Verbs',
  description: 'German has matched pairs of verbs: one says where something IS (position), the other says where it\u2019s GOING (direction). Das Buch liegt auf dem Tisch (position \u2192 Dativ) vs. Ich lege das Buch auf den Tisch (direction \u2192 Akkusativ). Five pairs cover almost everything \u2014 stehen/stellen, liegen/legen, sitzen/setzen, h\u00e4ngen, stecken. Pick the verb by asking Wo? or Wohin?, and the case from Chapter 14 follows automatically.',
  xp: 170,
  time: 35,
  difficulty: 'Elementary',
  nextChapter: { number: 16, title: 'Goethe Mini 2', titleEn: 'Goethe Checkpoint 2' , href: 'chapter-a2-16-goethe-mini-2.html' },

  prevChapter: { number: 14, title: 'Wechselpr\u00e4positionen', titleEn: 'Two-Way Prepositions', href: 'chapter-a2-14-wechselpraepositionen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Meret and Timo are planning a car-free week for the city, and the office is chaos: plans on the table, maps on the wall, keys stuck in bags, everyone finding a seat. It\u2019s the ideal stage for the position/direction pairs \u2014 stellen vs stehen, legen vs liegen, h\u00e4ngen both ways. Meret keeps asking the one question that picks the verb: Wo, or wohin?',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear stellen/stehen, legen/liegen, h\u00e4ngen side by side'
    ],
    scene: 'Projektplanung im B\u00fcro \u2014 \u201eeine autofreie Woche\u201c',
    femaleSpeakers: ['Meret'],
    dialogue: [
      { speaker: 'Meret', tokens: [
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Parkplatz', role: 'r-subject', en: 'parking spot', hi: 'पार्किंग', pron: 'PARK-plats', type: 'Noun · masc.', why: 'der Parkplatz (this chapter).', ex: 'Der Parkplatz ist hier.', exEn: 'The parking spot is here.' },
        { w: '?', plain: true }
      ], en: 'Where is the parking spot?', hi: 'Parking kahaan hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Er', role: 'r-subject', en: 'it', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'है', pron: 'leekt', type: 'Verb · liegen', why: 'liegen = to lie/be positioned, state verb (this chapter).', ex: 'Der Parkplatz liegt neben der Kreuzung.', exEn: 'The parking spot lies next to the crossing.' },
        { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल में', pron: 'NAY-ben', type: 'Preposition · Wechselpräp' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Kreuzung', role: 'r-dativ', en: 'crossing (dat.)', hi: 'चौराहे के', pron: 'KROY-tsung', type: 'Noun · fem. dat.', why: 'die Kreuzung (this chapter).', ex: 'neben der Kreuzung', exEn: 'next to the crossing' },
        { w: '.', plain: true }
      ], en: 'It lies next to the crossing.', hi: 'Woh chaurahe ke bagal mein hai.' },
      { speaker: 'Meret', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Fahr', role: 'r-verb', en: 'drive', hi: 'चलाओ', pron: 'fahr', type: 'Verb · imperative', why: 'richtungsverb: fahren = movement to a destination (this chapter).', ex: 'Fahr zur Kreuzung!', exEn: 'Drive to the crossing!' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'की ओर', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Kreuzung', role: 'r-akkusativ', en: 'crossing', hi: 'चौराहे', pron: 'KROY-tsung', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'Good. Drive to the crossing!', hi: 'Achha. Chauraahe ki or chalao!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fahre', role: 'r-verb', en: 'am driving', hi: 'जा रहा हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)' },
        { w: 'hin', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'hin', type: 'Adverb · direction', why: 'fahre hin = drive there (direction verb, this chapter).' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'I am driving there. And then?', hi: 'Main wahaan jaa raha hoon. Aur phir?' },
      { speaker: 'Meret', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'stell', role: 'r-verb', en: 'put', hi: 'खड़ी करो', pron: 'shtel', type: 'Verb · stellen (imperative)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Auto', role: 'r-akkusativ', en: 'car', hi: 'कार', pron: 'OW-to', type: 'Noun · neut.' },
        { w: 'hinter', role: 'r-preposition', en: 'behind', hi: 'के पीछे', pron: 'HIN-ter', type: 'Preposition · Wechselpräp' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Parkhaus', role: 'r-akkusativ', en: 'parking garage', hi: 'पार्किंग गैराज', pron: 'PARK-hows', type: 'Noun · neut.', why: 'das Parkhaus (this chapter).', ex: 'hinter das Parkhaus', exEn: 'behind the parking garage' },
        { w: '.', plain: true }
      ], en: 'Then put the car behind the parking garage.', hi: 'Phir kaar parking garage ke peeche khadi karo.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'will do', hi: 'करता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Steht', role: 'r-verb', en: 'does it stand', hi: 'खड़ी है', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen + dative = position state, this chapter.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'sicher', role: 'r-adverb', en: 'safely', hi: 'सुरक्षित', pron: 'ZI-kher', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Yes, I will do that. Does it stand there safely?', hi: 'Haan, main karta hoon. Kya woh wahaan surakshit khadi rahegi?' },
      { speaker: 'Meret', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Hinter', role: 'r-preposition', en: 'behind', hi: 'के पीछे', pron: 'HIN-ter', type: 'Preposition · Wechselpräp' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Parkhaus', role: 'r-dativ', en: 'parking garage (dat.)', hi: 'पार्किंग गैराज के', pron: 'PARK-hows', type: 'Noun · neut. dat.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'ruhig', role: 'r-adjective', en: 'quiet', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes! Behind the parking garage it is always quiet.', hi: 'Haan! Parking garage ke peeche hamesha shaant rehta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'parke', role: 'r-verb', en: 'park', hi: 'पार्क करता हूँ', pron: 'PAR-kuh', type: 'Verb · parken (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then I park there.', hi: 'Badhiya! Phir main wahaan park karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German pairs its \u201cput\u201d and \u201cbe\u201d verbs. One verb of each pair is a <strong>direction verb</strong> (you\u2019re moving something \u2014 <span class="de r-question">Wohin?</span> \u2192 Akkusativ), the other a <strong>position verb</strong> (it\u2019s already there \u2014 <span class="de r-question">Wo?</span> \u2192 Dativ). Compare: <span class="de">Ich <span class="r-verb">lege</span> das Buch auf <span class="r-akkusativ">den</span> Tisch</span> (direction) vs. <span class="de">Das Buch <span class="r-verb">liegt</span> auf <span class="r-dativ">dem</span> Tisch</span> (position). The five pairs: <span class="de">stellen/stehen, legen/liegen, setzen/sitzen, h\u00e4ngen/h\u00e4ngen, stecken/stecken</span>. The direction verbs are regular (legen \u2013 legte \u2013 gelegt); the position verbs are often irregular (liegen \u2013 lag \u2013 gelegen). This is Chapter 14\u2019s wohin/wo rule made into verbs \u2014 pick the verb, and the case comes with it.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is POSITION vs DIRECTION VERBS: stellen/stehen, legen/liegen, setzen/sitzen, h\u00e4ngen/h\u00e4ngen, stecken/stecken. Direction (wohin?) + Akkusativ; position (wo?) + Dativ. ' +
    'No passive, no relative clauses. The learner described a room / moving furniture below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- DIRECTION verbs (you move something; take a direct object; wohin? \u2192 ACCUSATIVE): stellen (stellte/gestellt), legen (legte/gelegt), setzen (setzte/gesetzt), h\u00e4ngen (h\u00e4ngte/geh\u00e4ngt), stecken (steckte/gesteckt). Example: "Ich stelle die Vase auf den Tisch."\n' +
    '- POSITION verbs (it is already there; usually no direct object; wo? \u2192 DATIVE): stehen (stand/gestanden), liegen (lag/gelegen), sitzen (sa\u00df/gesessen), h\u00e4ngen (hing/gehangen), stecken (steckte/gesteckt). Example: "Die Vase steht auf dem Tisch."\n' +
    '- setzen/sitzen with people: "Ich setze mich" (reflexive, movement, acc.) vs "Ich sitze" (position). Flag "Ich sitze mich".\n' +
    '- Do not mix the pair: "Ich liege das Buch..." is wrong \u2192 "Ich lege das Buch..."; "Das Buch legt auf dem Tisch" \u2192 "Das Buch liegt auf dem Tisch".\n' +
    '- The case must match: direction verb \u2192 accusative object of the two-way preposition; position verb \u2192 dative. Flag "Das Bild h\u00e4ngt an die Wand" \u2192 "an der Wand".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why (position vs direction). If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Verb-pair check:</b> one sentence on whether the position/direction verb (and its case) was right.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You pick stellen vs stehen, legen vs liegen without a wobble \u2014 and the case follows. Next: the Phase-2 checkpoint, Goethe Mini 2.',
    mid: 'Good. Re-read the verb-pair card once (direction = move it, position = it\u2019s there), then continue.',
    low: 'Worth another pass \u2014 each pair has a "put" verb (+Akk) and a "be" verb (+Dat): stellen/stehen, legen/liegen, setzen/sitzen. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'stelle', role: 'r-verb' },
    { w: 'die', role: 'r-akkusativ' }, { w: 'Vase', role: 'r-object' },
    { w: 'auf', role: 'r-wechsel' }, { w: 'den', role: 'r-akkusativ' },
    { w: 'Tisch', role: 'r-object' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the pairs: a "put" verb (+Akk) and a "be" verb (+Dat).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Planning a car-free week \u2014 plans, maps and chairs go into place.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the mobility words: die Kreuzung, der Parkplatz, pendeln, buchen, elektrisch.' },
    { id: 'grammar',    label: 'Verbpaare',  tag: 'core',
      objective: 'Master stellen/stehen, legen/liegen, setzen/sitzen, h\u00e4ngen, stecken.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a desk being organised \u2014 every verb pair at work.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which verb (and case) matches movement vs position.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your room and where you put things, both verbs.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a room description and a tidy-up using all five pairs.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the verb pairs and the matching case with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s mobility and city words \u2014 die Kreuzung, der Parkplatz, das Parkhaus, pendeln, elektrisch \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Verb-pair sorting, position-vs-direction drills, case matching, and a describe-and-move-your-room task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'All five verb pairs, the wo/wohin link, the regular/irregular forms, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich stelle \u2026 (Wohin? \u2192 Akk)', text: 'Use a direction verb to move something' },
    { de: '\u2026 steht (Wo? \u2192 Dat)', text: 'Use a position verb for where it is' },
    { de: 'legen/liegen, setzen/sitzen', text: 'Keep the verb pairs apart' },
    { de: 'Ich h\u00e4nge / es h\u00e4ngt', text: 'Use h\u00e4ngen both ways' },
    { de: 'Der Schl\u00fcssel steckt \u2026', text: 'Say where something is stuck / put it in' }
  ],

  // ---------- Vocabulary (35 items) ----------
  vocab: [
    // ===== Grammar labels =====
    { de: 'Positionsverb', art: 'das', gender: 'n', plural: 'Positionsverben', pos: 'noun', en: 'position verb', hi: 'स्थिति क्रिया', ex: 'stehen ist ein Positionsverb.', exEn: 'stehen is a position verb.' },
    { de: 'Richtungsverb', art: 'das', gender: 'n', plural: 'Richtungsverben', pos: 'noun', en: 'direction verb', hi: 'दिशा क्रिया', ex: 'stellen ist ein Richtungsverb.', exEn: 'stellen is a direction verb.' },
    { de: 'Wortgrenze', art: 'die', gender: 'f', plural: 'Wortgrenzen', pos: 'noun', en: 'word boundary', hi: 'शब्द सीमा', ex: 'Achte auf die Wortgrenze zwischen den W\u00f6rtern.', exEn: 'Pay attention to the word boundary between the words.' },
    { de: 'Konzept', art: 'das', gender: 'n', plural: 'Konzepte', pos: 'noun', en: 'concept, plan', hi: 'अवधारणा', ex: 'Unser Konzept liegt auf dem Tisch.', exEn: 'Our concept lies on the table.' },
    // ===== Traffic & mobility =====
    { de: 'Kreuzung', art: 'die', gender: 'f', plural: 'Kreuzungen', pos: 'noun', en: 'crossroads, junction', hi: 'चौराहा', ex: 'An der Kreuzung h\u00e4lt der Bus.', exEn: 'At the crossroads the bus stops.' },
    { de: 'Linie', art: 'die', gender: 'f', plural: 'Linien', pos: 'noun', en: 'route, line (bus/tram)', hi: 'मार्ग, लाइन', ex: 'Die Linie 5 f\u00e4hrt zum Bahnhof.', exEn: 'Route 5 goes to the station.' },
    { de: 'Parkplatz', art: 'der', gender: 'm', plural: 'Parkpl\u00e4tze', pos: 'noun', en: 'parking space, car park', hi: 'पार्किंग स्थल', ex: 'Der Parkplatz vor dem Haus ist frei.', exEn: 'The parking space in front of the house is free.' },
    { de: 'Parkhaus', art: 'das', gender: 'n', plural: 'Parkh\u00e4user', pos: 'noun', en: 'multi-storey car park', hi: 'पार्किंग गैराज', ex: 'Ich stelle den Pkw ins Parkhaus.', exEn: 'I put the car in the multi-storey car park.' },
    { de: 'Pkw', art: 'der', gender: 'm', plural: 'Pkw', pos: 'noun', en: 'car, motorcar', hi: 'कार', ex: 'Der Pkw steht im Parkhaus.', exEn: 'The car is in the car park.' },
    { de: 'Kraftfahrzeug', art: 'das', gender: 'n', plural: 'Kraftfahrzeuge', pos: 'noun', en: 'motor vehicle', hi: 'मोटर वाहन', ex: 'Jedes Kraftfahrzeug braucht eine Versicherung.', exEn: 'Every motor vehicle needs insurance.' },
    { de: 'Kinderwagen', art: 'der', gender: 'm', plural: 'Kinderwagen', pos: 'noun', en: 'pram, buggy', hi: 'बच्चा गाड़ी', ex: 'Der Kinderwagen steht neben der T\u00fcr.', exEn: 'The pram stands next to the door.' },
    { de: 'Versicherung', art: 'die', gender: 'f', plural: 'Versicherungen', pos: 'noun', en: 'insurance', hi: 'बीमा', ex: 'Die Versicherung liegt in der Mappe.', exEn: 'The insurance is in the folder.' },
    { de: 'Kundenservice', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'customer service', hi: 'ग्राहक सेवा', ex: 'Der Kundenservice hilft am Telefon.', exEn: 'Customer service helps on the phone.' },
    { de: 'PIN', art: 'die', gender: 'f', plural: 'PINs', pos: 'noun', en: 'PIN', hi: 'पिन', ex: 'Ich stecke die Karte in den Automaten und gebe die PIN ein.', exEn: 'I put the card into the machine and enter the PIN.' },
    { de: 'Mama', art: 'die', gender: 'f', plural: 'Mamas', pos: 'noun', en: 'mum', hi: 'माँ', ex: 'Meine Mama f\u00e4hrt nur noch elektrisch.', exEn: 'My mum only drives electric now.' },
    { de: 'Stadtbewohnerin', art: 'die', gender: 'f', plural: 'Stadtbewohnerinnen', pos: 'noun', en: 'city dweller (f.)', hi: 'शहरवासी', ex: 'Als Stadtbewohnerin pendelt sie mit dem Rad.', exEn: 'As a city dweller she commutes by bike.' },
    { de: 'Prozent', art: 'das', gender: 'n', plural: 'Prozent', pos: 'noun', en: 'percent', hi: 'प्रतिशत', ex: 'Wir reduzieren den Verkehr um zwanzig Prozent.', exEn: 'We reduce traffic by twenty percent.' },
    // ===== Verbs =====
    { de: 'bestimmen', pos: 'verb', en: 'to determine, to decide', hi: 'तय करना', ex: 'Das Gesetz bestimmt, wo man parken darf.', exEn: 'The law determines where you may park.', conj: { praesens: 'bestimmt', praeteritum: 'bestimmte', perfekt: 'hat bestimmt' } },
    { de: 'buchen', pos: 'verb', en: 'to book', hi: 'बुक करना', ex: 'Ich buche die Zugfahrt online.', exEn: 'I book the train ride online.', conj: { praesens: 'bucht', praeteritum: 'buchte', perfekt: 'hat gebucht' } },
    { de: 'halten', pos: 'verb', en: 'to stop; to hold', hi: 'रुकना; पकड़ना', ex: 'Der Bus h\u00e4lt an der Kreuzung.', exEn: 'The bus stops at the crossroads.', conj: { praesens: 'h\u00e4lt', praeteritum: 'hielt', perfekt: 'hat gehalten' } },
    { de: 'pendeln', pos: 'verb', en: 'to commute', hi: 'आना-जाना, पेंडुलम की तरह चलना', ex: 'Viele pendeln mit dem Rad zur Arbeit.', exEn: 'Many commute to work by bike.', conj: { praesens: 'pendelt', praeteritum: 'pendelte', perfekt: 'ist gependelt' } },
    { de: 'reduzieren', pos: 'verb', en: 'to reduce', hi: 'कम करना', ex: 'Wir reduzieren den Verkehr in der Stadt.', exEn: 'We reduce traffic in the city.', conj: { praesens: 'reduziert', praeteritum: 'reduzierte', perfekt: 'hat reduziert' } },
    { de: 'zeigen', pos: 'verb', en: 'to show', hi: 'दिखाना', ex: 'Die Karte zeigt jede Linie.', exEn: 'The map shows every route.', conj: { praesens: 'zeigt', praeteritum: 'zeigte', perfekt: 'hat gezeigt' } },
    { de: '\u00fcberlegen', pos: 'verb', en: 'to think over, to consider', hi: 'सोच-विचार करना', ex: 'Ich \u00fcberlege, welche Linie besser ist.', exEn: 'I\u2019m considering which route is better.', conj: { praesens: '\u00fcberlegt', praeteritum: '\u00fcberlegte', perfekt: 'hat \u00fcberlegt' } },
    { de: 'abfliegen', pos: 'verb', en: 'to depart, to take off (separable)', hi: 'उड़ान भरना', ex: 'Das Flugzeug fliegt um acht Uhr ab.', exEn: 'The plane departs at eight o\u2019clock.', conj: { praesens: 'fliegt ab', praeteritum: 'flog ab', perfekt: 'ist abgeflogen' } },
    { de: 'weiterfahren', pos: 'verb', en: 'to carry on, to drive on (separable)', hi: 'आगे बढ़ना', ex: 'Nach der Pause fahren wir weiter.', exEn: 'After the break we carry on.', conj: { praesens: 'f\u00e4hrt weiter', praeteritum: 'fuhr weiter', perfekt: 'ist weitergefahren' } },
    { de: 'zusammenfassen', pos: 'verb', en: 'to summarise (separable)', hi: 'सारांश देना', ex: 'Fass bitte das Konzept zusammen.', exEn: 'Please summarise the concept.', conj: { praesens: 'fasst zusammen', praeteritum: 'fasste zusammen', perfekt: 'hat zusammengefasst' } },
    // ===== Adjectives / adverbs / small words =====
    { de: 'elektrisch', pos: 'adjective', en: 'electric', hi: 'बिजली से चलने वाला', ex: 'Ein elektrisches Auto ist leiser.', exEn: 'An electric car is quieter.' },
    { de: 'unterschiedlich', pos: 'adjective', en: 'different, varying', hi: 'भिन्न', ex: 'Die Linien sind unterschiedlich lang.', exEn: 'The routes are of different lengths.' },
    { de: 'sch\u00f6n', pos: 'adjective', en: 'nice, pretty', hi: 'सुंदर', ex: 'Meine Mama findet das Konzept sch\u00f6n.', exEn: 'My mum finds the concept nice.' },
    { de: 'regelm\u00e4\u00dfig', pos: 'adjective', en: 'regular', hi: 'नियमित', ex: 'Richtungsverben sind meistens regelm\u00e4\u00dfig.', exEn: 'Direction verbs are mostly regular.' },
    { de: 'hinten', pos: 'adverb', en: 'at the back, behind', hi: 'पीछे', ex: 'Das Kennzeichen ist hinten am Pkw.', exEn: 'The licence plate is at the back of the car.' },
    { de: 'gegen', pos: 'preposition', en: 'against (+ Akk.)', hi: 'के विरुद्ध', ex: 'Stell das Rad nicht gegen die Wand.', exEn: 'Don\u2019t put the bike against the wall.' },
    { de: 'in Zukunft', pos: 'phrase', en: 'in future', hi: 'भविष्य में', ex: 'In Zukunft fahren wir weniger Auto.', exEn: 'In future we\u2019ll drive less.' },
    { de: 'd.h.', pos: 'phrase', en: 'i.e., meaning (das hei\u00dft)', hi: 'यानी', ex: 'autofrei, d.h. ohne Pkw.', exEn: 'car-free, i.e. without a car.' }
  ],

  // ---------- Positions- & Richtungsverben (rule cards) ----------
  grammar: [
    {
      title: 'The five verb pairs',
      goldenRule: 'Direction verb = you <b>move</b> something (+ Akkusativ). Position verb = it <b>is</b> somewhere (+ Dativ).',
      formula: [
        'stellen \u2192 stehen   (upright)',
        'legen   \u2192 liegen   (flat)',
        'setzen  \u2192 sitzen   (seated)',
        'h\u00e4ngen \u2192 h\u00e4ngen  (same word, different past)',
        'stecken \u2192 stecken  (same word, same past)'
      ],
      memoryTrick: 'Jodi mein yaad karo. Direction verbs <b>regular</b> hain (stellte, legte, setzte) aur position verbs <b>irregular</b> (stand, lag, sa\u00df) \u2014 yahi sabse tez pehchaan hai.',
      recap: [
        'Direction verb takes an object \u2192 <b>Akkusativ</b>.',
        'Position verb describes a state \u2192 <b>Dativ</b>.',
        'Direction verbs are regular; position verbs mostly are not.'
      ],
      body: [
        'Each pair has a <strong>direction verb</strong> (you move something \u2014 takes a direct object) and a <strong>position verb</strong> (it is already there). The direction verb is regular; the position verb is often irregular.'
      ],
      table: {
        head: ['Direction (Wohin? \u2192 Akk.)', 'Position (Wo? \u2192 Dat.)', 'Meaning'],
        rows: [
          ['<span class="de r-verb">stellen</span> (stellte, gestellt)', '<span class="de r-verb">stehen</span> (stand, gestanden)', 'to stand (upright)'],
          ['<span class="de r-verb">legen</span> (legte, gelegt)', '<span class="de r-verb">liegen</span> (lag, gelegen)', 'to lie (flat)'],
          ['<span class="de r-verb">setzen</span> (setzte, gesetzt)', '<span class="de r-verb">sitzen</span> (sa\u00df, gesessen)', 'to sit'],
          ['<span class="de r-verb">h\u00e4ngen</span> (h\u00e4ngte, geh\u00e4ngt)', '<span class="de r-verb">h\u00e4ngen</span> (hing, gehangen)', 'to hang'],
          ['<span class="de r-verb">stecken</span> (steckte, gesteckt)', '<span class="de r-verb">stecken</span> (steckte, gesteckt)', 'to put in / be inside']
        ]
      },
      note: 'The direction verbs take a <b>direct object</b> (I put <em>something</em>) \u2014 that\u2019s why they trigger the accusative. The position verbs describe a state, so they go with the dative. h\u00e4ngen and stecken use the same word for both directions. <b>h\u00e4ngen</b> still separates them in the past (h\u00e4ngte/geh\u00e4ngt for the move, hing/gehangen for the position), but <b>stecken</b> has identical past forms \u2014 so with stecken only the <b>case</b> tells you which job it is.',
      hinglish: 'Paanch jodi hain, aur har jodi mein ek Richtungsverb hota hai jo kuch hilaane ke liye use hota hai aur object leta hai, aur ek Positionsverb jo batata hai ki cheez pehle se kahaan hai. Jodi yeh hain: <b>stellen/stehen</b>, <b>legen/liegen</b>, <b>setzen/sitzen</b>, <b>h\u00e4ngen/h\u00e4ngen</b> aur <b>stecken/stecken</b>.'
    },
    {
      title: 'Same scene, two verbs \u2014 side by side',
      goldenRule: 'Direction: <b>I</b> am the subject. Position: <b>the thing</b> is the subject.',
      memoryTrick: 'Subject badal jaata hai: <b>Ich</b> stelle die Vase \u2026 par <b>Die Vase</b> steht \u2026 Isse pata chal jaata hai kaun sa verb chahiye.',
      body: [
        'Watch each pair in action. The direction verb + Akkusativ describes the <em>move</em>; the position verb + Dativ describes the <em>result</em>.'
      ],
      table: {
        head: ['Direction \u2192 Akkusativ', 'Position \u2192 Dativ'],
        rows: [
          ['<span class="de">Ich <span class="r-verb">stelle</span> die Vase auf <span class="r-akkusativ">den</span> Tisch.</span>', '<span class="de">Die Vase <span class="r-verb">steht</span> auf <span class="r-dativ">dem</span> Tisch.</span>'],
          ['<span class="de">Ich <span class="r-verb">lege</span> das Buch auf <span class="r-akkusativ">den</span> Tisch.</span>', '<span class="de">Das Buch <span class="r-verb">liegt</span> auf <span class="r-dativ">dem</span> Tisch.</span>'],
          ['<span class="de">Ich <span class="r-verb">setze</span> das Kind auf <span class="r-akkusativ">den</span> Stuhl.</span>', '<span class="de">Das Kind <span class="r-verb">sitzt</span> auf <span class="r-dativ">dem</span> Stuhl.</span>'],
          ['<span class="de">Ich <span class="r-verb">h\u00e4nge</span> das Bild an <span class="r-akkusativ">die</span> Wand.</span>', '<span class="de">Das Bild <span class="r-verb">h\u00e4ngt</span> an <span class="r-dativ">der</span> Wand.</span>']
        ]
      },
      note: 'Notice the subject changes too: with the direction verb <em>I</em> do the action (Ich stelle \u2026); with the position verb the <em>thing</em> is the subject (Die Vase steht \u2026).',
      hinglish: 'Dono verbs mein subject badal jaata hai. Direction verb ke saath main kuch kar raha hoon: <b>Ich stelle die Vase \u2026</b>, aur uske saath Akkusativ aata hai. Position verb ke saath cheez khud subject ban jaati hai: <b>Die Vase steht \u2026</b>, aur uske saath Dativ aata hai. Ek hi scene, par do alag verb.'
    },
    {
      title: 'setzen/sitzen with people (reflexive)',
      goldenRule: 'Sitting <b>down</b> is reflexive: <b>sich setzen</b>. Sitting (already) is not: <b>sitzen</b>.',
      memoryTrick: '<b>Ich setze mich</b> = baith raha hoon (movement). <b>Ich sitze</b> = baitha hoon (position). "Ich sitze mich" kabhi nahi \u2014 position verb reflexive nahi hota.',
      body: [
        'When people sit down, the direction verb <span class="de">setzen</span> is <strong>reflexive</strong>: <span class="de">sich setzen</span>. The position verb <span class="de">sitzen</span> is not.'
      ],
      table: {
        head: ['Direction (sitting down) \u2192 Akk.', 'Position (sitting) \u2192 Dat.'],
        rows: [
          ['<span class="de">Ich <span class="r-verb">setze mich</span> auf <span class="r-akkusativ">den</span> Stuhl.</span>', '<span class="de">Ich <span class="r-verb">sitze</span> auf <span class="r-dativ">dem</span> Stuhl.</span>'],
          ['<span class="de">Setzt <span class="r-reflexiv">euch</span> an <span class="r-akkusativ">den</span> Tisch!</span>', '<span class="de">Wir <span class="r-verb">sitzen</span> am <span class="r-dativ">Tisch</span>.</span>']
        ]
      },
      note: 'So it\u2019s <b>Ich setze mich</b> (I sit down \u2014 movement) but <b>Ich sitze</b> (I\u2019m sitting \u2014 position). Never \u201cIch sitze mich\u201d.',
      hinglish: 'Log baithte hain: setzen reflexive hai \u2014 "Ich setze mich" (baith rahe ho, movement). Position: "Ich sitze" (baitha hoon). "Ich sitze mich" galat hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four position/direction traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich liege das Buch auf den Tisch.', right: 'Ich lege das Buch auf den Tisch.', why: 'Moving something = direction verb legen, not liegen.' },
        { wrong: 'Das Buch legt auf dem Tisch.', right: 'Das Buch liegt auf dem Tisch.', why: 'It is already there = position verb liegen, not legt.' },
        { wrong: 'Das Bild h\u00e4ngt an die Wand.', right: 'Das Bild h\u00e4ngt an der Wand.', why: 'h\u00e4ngen as position (it is there) \u2192 dative: an der Wand.' },
        { wrong: 'Ich sitze mich auf den Stuhl.', right: 'Ich setze mich auf den Stuhl.', why: 'Sitting down = movement \u2192 reflexive direction verb setzen.' }
      ],
      hinglish: 'Char galtiyan common hain. Agar tum kuch rakh rahe ho to <b>legen</b> aayega: <b>Ich lege</b>. Agar cheez pehle se wahaan hai to <b>liegen</b>: <b>Das Buch liegt</b>. Position wale <b>h\u00e4ngen</b> ke saath Dativ aata hai: <b>an der Wand</b>. Aur baithne ke liye <b>Ich setze mich</b> sahi hai, <b>Ich sitze mich</b> nahi.'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Two questions pick the verb and the case together.'
      ],
      table: {
        head: ['Ask', 'Verb type', 'Case'],
        rows: [
          ['Am I <b>moving</b> something / putting it somewhere? (Wohin?)', '<span class="de r-verb">Richtungsverb</span> (stellen, legen, setzen, h\u00e4ngen, stecken)', '<span class="de r-akkusativ">Akkusativ</span>'],
          ['Is it <b>already there</b> / where is it? (Wo?)', '<span class="de r-verb">Positionsverb</span> (stehen, liegen, sitzen, h\u00e4ngen, stecken)', '<span class="de r-dativ">Dativ</span>']
        ]
      },
      note: 'This is exactly Chapter 14\u2019s wohin/wo test \u2014 now the <b>verb</b> also tells you which. Moving? \u2192 direction verb + Akkusativ. Already there? \u2192 position verb + Dativ.',
      hinglish: 'Do sawaal poochho. Agar tum kuch hila rahe ho ya rakh rahe ho (<b>Wohin?</b>), to Richtungsverb ke saath Akkusativ aayega. Aur agar tum bata rahe ho ki cheez pehle se kahaan hai (<b>Wo?</b>), to Positionsverb ke saath Dativ aayega. Yeh Chapter 14 ka wahi test hai, bas ab verb ke saath.'
    }
  ],

  // ---------- Reading passage (Ich r\u00e4ume meinen Schreibtisch auf, clickable) ----------
  reading: {
    title: 'Ich r\u00e4ume meinen Schreibtisch auf',
    titleEn: 'I tidy up my desk',
    tokens: [
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb \u00b7 time' },
      { w: 'r\u00e4ume', role: 'r-verb', en: 'tidy', hi: 'साफ़ करता हूँ', pron: 'ROY-muh', type: 'Verb \u00b7 aufr\u00e4umen', why: 'aufr\u00e4umen \u2014 separable (recycled \u2014 Dativ-Pr\u00e4p.).', ex: 'Ich r\u00e4ume auf.', exEn: 'I tidy up.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'meinen', role: 'r-akkusativ', en: 'my (masc. acc.)', hi: 'अपना', pron: 'MY-nen', type: 'Possessive \u00b7 acc.' },
      { w: 'Schreibtisch', role: 'r-object', en: 'desk', hi: 'मेज़', pron: 'SHRYP-tish', type: 'Noun \u00b7 masc.', why: 'der Schreibtisch (recycled \u2014 Arbeit).', ex: 'meinen Schreibtisch', exEn: 'my desk' },
      { w: 'auf', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'owf', type: 'Prefix \u00b7 aufr\u00e4umen' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article' },
      { w: 'Unterlagen', role: 'r-subject', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun \u00b7 plural', why: 'die Unterlagen (recycled \u2014 Wechselpr\u00e4p.).', ex: 'die Unterlagen', exEn: 'the documents' },
      { w: 'liegen', role: 'r-verb', en: 'lie', hi: 'पड़ी हैं', pron: 'LEE-gen', type: 'Verb \u00b7 liegen', why: 'position \u2192 Dativ (this chapter).', ex: 'Sie liegen auf dem Tisch.', exEn: 'They lie on the table.' },
      { w: '\u00fcberall', role: 'r-adverb', en: 'everywhere', hi: 'हर जगह', pron: '\u00fc-ber-AL', type: 'Adverb' },
      { w: 'auf', role: 'r-wechsel', en: 'on', hi: 'पर', pron: 'owf', type: 'Wechselpr\u00e4position' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Tisch', role: 'r-dativ', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun \u00b7 masc. \u00b7 dat.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'lege', role: 'r-verb', en: 'lay', hi: 'रखता हूँ', pron: 'LAY-guh', type: 'Verb \u00b7 legen', why: 'direction \u2192 Akkusativ (this chapter).', ex: 'Ich lege sie in die Mappe.', exEn: 'I lay them in the folder.' },
      { w: 'sie', role: 'r-akkusativ', en: 'them', hi: 'इन्हें', pron: 'zee', type: 'Pronoun \u00b7 acc.' },
      { w: 'in', role: 'r-wechsel', en: 'into', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'Mappe', role: 'r-object', en: 'folder', hi: 'फ़ाइल', pron: 'MA-puh', type: 'Noun \u00b7 fem.', why: 'die Mappe (recycled \u2014 B\u00fcro).', ex: 'in die Mappe', exEn: 'into the folder' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Lampe', role: 'r-subject', en: 'lamp', hi: 'लैंप', pron: 'LAM-puh', type: 'Noun \u00b7 fem.', why: 'die Lampe (recycled \u2014 Wohnung).', ex: 'die Lampe', exEn: 'the lamp' },
      { w: 'steht', role: 'r-verb', en: 'stands', hi: 'रखी है', pron: 'shtayt', type: 'Verb \u00b7 stehen', why: 'position \u2192 Dativ (this chapter).', ex: 'Die Lampe steht hinten.', exEn: 'The lamp stands at the back.' },
      { w: 'hinten', role: 'r-place', en: 'at the back', hi: 'पीछे', pron: 'HIN-ten', type: 'Adverb \u00b7 place', why: 'hinten (this chapter).', ex: 'hinten', exEn: 'at the back' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'stelle', role: 'r-verb', en: 'put', hi: 'रखता हूँ', pron: 'SHTE-luh', type: 'Verb \u00b7 stellen', why: 'direction \u2192 Akkusativ (this chapter).', ex: 'Ich stelle sie an das Fenster.', exEn: 'I put it by the window.' },
      { w: 'sie', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'zee', type: 'Pronoun \u00b7 acc.' },
      { w: 'an', role: 'r-wechsel', en: 'by', hi: 'के पास', pron: 'an', type: 'Wechselpr\u00e4position' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'इस', pron: 'das', type: 'Article \u00b7 acc.' },
      { w: 'Fenster', role: 'r-object', en: 'window', hi: 'खिड़की', pron: 'FENS-ter', type: 'Noun \u00b7 neut.' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'mine', type: 'Possessive' },
      { w: 'Schl\u00fcssel', role: 'r-subject', en: 'key', hi: 'चाबी', pron: 'SHL\u00dc-sel', type: 'Noun \u00b7 masc.', why: 'der Schl\u00fcssel (recycled \u2014 Wohnung).', ex: 'mein Schl\u00fcssel', exEn: 'my key' },
      { w: 'steckt', role: 'r-verb', en: 'is (stuck)', hi: 'लगी है', pron: 'shtekt', type: 'Verb \u00b7 stecken', why: 'position \u2192 Dativ (this chapter).', ex: 'Der Schl\u00fcssel steckt in der Tasche.', exEn: 'The key is in the bag.' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Tasche', role: 'r-dativ', en: 'bag', hi: 'बैग', pron: 'TA-shuh', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Tasche (recycled \u2014 Genitiv).', ex: 'in der Tasche', exEn: 'in the bag' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'stecke', role: 'r-verb', en: 'put', hi: 'डालता हूँ', pron: 'SHTE-kuh', type: 'Verb \u00b7 stecken', why: 'direction \u2192 Akkusativ (this chapter).', ex: 'Ich stecke die PIN \u2026', exEn: 'I put the \u2026' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Karte', role: 'r-object', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun \u00b7 fem.', why: 'die Karte (recycled \u2014 Reisen).', ex: 'die Karte', exEn: 'the card' },
      { w: 'in', role: 'r-wechsel', en: 'into', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Tasche', role: 'r-object', en: 'bag', hi: 'बैग', pron: 'TA-shuh', type: 'Noun \u00b7 fem.' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Bild', role: 'r-subject', en: 'picture', hi: 'तस्वीर', pron: 'bilt', type: 'Noun \u00b7 neut.', why: 'das Bild (recycled \u2014 Wohnung).', ex: 'das Bild', exEn: 'the picture' },
      { w: 'h\u00e4ngt', role: 'r-verb', en: 'hangs', hi: 'टँगी है', pron: 'hengt', type: 'Verb \u00b7 h\u00e4ngen', why: 'position \u2192 Dativ (this chapter).', ex: 'Das Bild h\u00e4ngt an der Wand.', exEn: 'The picture hangs on the wall.' },
      { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
      { w: 'an', role: 'r-wechsel', en: 'on', hi: 'पर', pron: 'an', type: 'Wechselpr\u00e4position' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Wand', role: 'r-dativ', en: 'wall', hi: 'दीवार', pron: 'vant', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Wand (recycled \u2014 Wohnung).', ex: 'an der Wand', exEn: 'on the wall' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Karte', role: 'r-object', en: 'map', hi: 'नक्शा', pron: 'KAR-tuh', type: 'Noun \u00b7 fem.' },
      { w: 'h\u00e4nge', role: 'r-verb', en: 'hang', hi: 'टाँगता हूँ', pron: 'HENG-uh', type: 'Verb \u00b7 h\u00e4ngen', why: 'direction \u2192 Akkusativ (this chapter).', ex: 'Ich h\u00e4nge die Karte an die Wand.', exEn: 'I hang the map on the wall.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'daneben', role: 'r-place', en: 'next to it', hi: 'उसके बगल', pron: 'da-NAY-ben', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Zum', role: 'r-preposition', en: 'in the', hi: 'अंत में', pron: 'tsoom', type: 'Preposition \u00b7 contraction' },
      { w: 'Schluss', role: 'r-object', en: 'end', hi: 'अंत', pron: 'shloos', type: 'Noun \u00b7 masc.', why: 'zum Schluss = finally (recycled \u2014 Konnektoren).', ex: 'zum Schluss', exEn: 'finally' },
      { w: 'setze', role: 'r-verb', en: 'sit', hi: 'बैठता हूँ', pron: 'ZE-tsuh', type: 'Verb \u00b7 sich setzen', why: 'sich setzen = direction \u2192 Akkusativ (this chapter).', ex: 'Ich setze mich auf den Stuhl.', exEn: 'I sit down on the chair.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'sich setzen \u2014 reflexive (recycled \u2014 Reflexive).', ex: 'Ich setze mich.', exEn: 'I sit down.' },
      { w: 'auf', role: 'r-wechsel', en: 'on', hi: 'पर', pron: 'owf', type: 'Wechselpr\u00e4position' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'इस', pron: 'dayn', type: 'Article \u00b7 acc.' },
      { w: 'Stuhl', role: 'r-object', en: 'chair', hi: 'कुर्सी', pron: 'shtool', type: 'Noun \u00b7 masc.', why: 'der Stuhl (recycled \u2014 Wohnung).', ex: 'auf den Stuhl', exEn: 'onto the chair' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sitze', role: 'r-verb', en: 'sit', hi: 'बैठा रहता हूँ', pron: 'ZI-tsuh', type: 'Verb \u00b7 sitzen', why: 'position \u2192 Dativ (this chapter).', ex: 'Ich sitze zufrieden am Tisch.', exEn: 'I sit contentedly at the table.' },
      { w: 'zufrieden', role: 'r-adjective', en: 'content', hi: 'संतुष्ट', pron: 'tsoo-FREE-den', type: 'Adjective', why: 'zufrieden (recycled \u2014 Gef\u00fchle).', ex: 'zufrieden sitzen', exEn: 'to sit contentedly' },
      { w: 'am', role: 'r-wechsel', en: 'at the', hi: 'पर', pron: 'am', type: 'Wechselpr\u00e4position \u00b7 contraction' },
      { w: 'Tisch', role: 'r-dativ', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun \u00b7 masc. \u00b7 dat.' },
      { w: '.', plain: true }
    ],
    translation: 'Today I tidy up my desk. The documents lie everywhere on the table. I lay them into a folder. The lamp stands at the back, but I put it by the window. My key is stuck in the bag, and I put the card into the bag. The picture already hangs on the wall, but I hang the map next to it. Finally I sit down on the chair and sit contentedly at the table. \u2014 Watch the pairs: liegen/lege, steht/stelle, steckt/stecke, h\u00e4ngt/h\u00e4nge, setze mich/sitze \u2014 position (Dativ) vs direction (Akkusativ) every time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_015_L001', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wo liegen die Unterlagen für das Projekt?', en: 'Timo, where are the documents for the project?' },
      { id: 'A2_015_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sie liegen noch auf meinem Schreibtisch.', en: 'They\'re still lying on my desk.' },
      { id: 'A2_015_L003', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kannst du sie in den Ordner legen?', en: 'Can you put them in the folder?' },
      { id: 'A2_015_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, ich lege sie jetzt gleich hinein.', en: 'Sure, I\'ll put them in right now.' }
    ],
    transcript: 'Timo, wo liegen die Unterlagen für das Projekt? Sie liegen noch auf meinem Schreibtisch. Kannst du sie in den Ordner legen? Klar, ich lege sie jetzt gleich hinein.',
    translation: 'Timo, where are the documents for the project? They\'re still lying on my desk. Can you put them in the folder? Sure, I\'ll put them in right now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'liegen' },
      { w: 'die' },
      { w: 'Unterlagen' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Projekt' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'liegen' },
      { w: 'noch' },
      { w: 'auf' },
      { w: 'meinem' },
      { w: 'Schreibtisch' },
      { w: '.', plain: true },
      { w: 'Kannst' },
      { w: 'du' },
      { w: 'sie' },
      { w: 'in' },
      { w: 'den' },
      { w: 'Ordner' },
      { w: 'legen' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'lege' },
      { w: 'sie' },
      { w: 'jetzt' },
      { w: 'gleich' },
      { w: 'hinein' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo liegen die Unterlagen?', qEn: 'Where are the documents lying?', options: ['im Ordner', 'auf dem Schreibtisch', 'im Schrank', 'auf dem Boden'], optionsEn: ['in the folder', 'on the desk', 'in the cupboard', 'on the floor'], answer: 1,
        explain: '"Sie liegen noch auf meinem Schreibtisch."' },
      { q: 'Was macht Timo mit den Unterlagen?', qEn: 'What does Timo do with the documents?', options: ['er wirft sie weg', 'er legt sie in den Ordner', 'er liest sie', 'er kopiert sie'], optionsEn: ['he throws them away', 'he puts them in the folder', 'he reads them', 'he copies them'], answer: 1,
        explain: '"Ich lege sie jetzt gleich hinein."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Wo ist der Kinderwagen?", taskEn: "Your friend asks: where's the pram?", de: "Der Kinderwagen steht im Parkhaus, neben dem Pkw.", en: "The pram is in the car park, next to the car." },
    { task: "Dein Mitbewohner fragt: Wohin stelle ich die Tasche?", taskEn: "Your flatmate asks: where shall I put the bag?", de: "Stell die Tasche auf den Stuhl und leg die Karte auf den Tisch.", en: "Put the bag on the chair and the card on the table." },
    { task: "Dein Freund findet die Versicherung nicht. Sag, wo sie liegt.", taskEn: "Your friend can't find the insurance papers. Say where they are.", de: "Die Versicherung liegt im Auto, unter dem Navi.", en: "The insurance papers are in the car, under the sat nav." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Describe your room and then tidy it up (six sentences) using the verb pairs. Use at least two position verbs (steht/liegt/h\u00e4ngt/sitzt/steckt + Dativ) and two direction verbs (stelle/lege/h\u00e4nge/setze/stecke + Akkusativ). Try this chapter\u2019s words: das Konzept, der Parkplatz, elektrisch, hinten, in Zukunft.',
    starters: ['Auf dem Tisch liegt \u2026', 'Ich stelle \u2026 an/auf/in \u2026', 'Das Bild h\u00e4ngt \u2026', 'Ich setze mich \u2026'],
    placeholder: 'Auf dem Tisch liegen meine B\u00fccher. Ich lege sie in das Regal. Die Lampe steht hinten, aber ich stelle sie an das Fenster \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct verb: "Ich ___ die Vase auf den Tisch." (I\u2019m putting it there)',
      options: ['stehe', 'stelle', 'steht', 'stellt'],
      answer: 1,
      explain: 'Moving something (wohin?) = direction verb stellen + Akkusativ: Ich stelle die Vase auf den Tisch.'
    },
    gap: {
      // position verb (dative) then direction verb (accusative)
      sentence: ['Das Buch ', ' auf dem Tisch, aber ich ', ' es ins Regal.'],
      gaps: [ { answer: 'liegt', accepts: ['liegt'] }, { answer: 'lege', accepts: ['lege'] } ],
      explain: 'Position (wo?) \u2192 liegt (+Dativ); direction (wohin?) \u2192 lege (+Akkusativ).'
    },
    match: {
      q: 'Match each direction verb to its position partner.',
      pairs: [
        { noun: 'stellen', art: 'stehen' },
        { noun: 'legen', art: 'liegen' },
        { noun: 'setzen', art: 'sitzen' },
        { noun: 'h\u00e4ngen (Akk.)', art: 'h\u00e4ngen (Dat.)' },
        { noun: 'stecken (Akk.)', art: 'stecken (Dat.)' }
      ]
    },
    builder: {
      target: 'Build (position): "The lamp stands on the table."',
      bank: ['Die', 'Lampe', 'steht', 'auf', 'dem', 'Tisch'],
      answer: ['Die', 'Lampe', 'steht', 'auf', 'dem', 'Tisch'],
      roles: { 'Die': 'r-subject', 'Lampe': 'r-subject', 'steht': 'r-verb', 'auf': 'r-wechsel', 'dem': 'r-dativ', 'Tisch': 'r-dativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which verb do you use to MOVE something (wohin?)?', options: ['stehen', 'stellen', 'liegen', 'sitzen'], answer: 1,
      explain: 'Direction verb (moving) = stellen; position verb (being there) = stehen.' },
    { q: 'Complete: "Das Buch ___ auf dem Tisch." (it is there)', options: ['legt', 'liegt', 'lege', 'legen'], answer: 1,
      explain: 'Position verb liegen: Das Buch liegt auf dem Tisch.' },
    { q: 'Which case goes with a direction verb?', options: ['Dativ', 'Akkusativ', 'Nominativ', 'Genitiv'], answer: 1,
      explain: 'Direction (wohin?) \u2192 Akkusativ. Position (wo?) \u2192 Dativ.' },
    { q: 'Complete: "Ich ___ mich auf den Stuhl."', options: ['sitze', 'setze', 'stehe', 'stelle'], answer: 1,
      explain: 'Sitting down = movement = reflexive setzen: Ich setze mich.' },
    { q: 'Which sentence is correct?', options: ['Das Bild h\u00e4ngt an die Wand.', 'Das Bild h\u00e4ngt an der Wand.', 'Ich h\u00e4nge das Bild an der Wand.', 'Das Bild h\u00e4nge an die Wand.'], answer: 1,
      explain: 'h\u00e4ngen as position (it is there) \u2192 Dativ: an der Wand.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Five pairs: <span class="de">stellen/stehen, legen/liegen, setzen/sitzen, h\u00e4ngen/h\u00e4ngen, stecken/stecken</span> \u2014 a "put" verb and a "be" verb.' },
    { c: 'r-akkusativ', html: 'Direction verb (you move it, <span class="de r-question">Wohin?</span>) takes the <b>Akkusativ</b>: <span class="de">Ich lege das Buch auf <span class="r-akkusativ">den</span> Tisch.</span>' },
    { c: 'r-dativ', html: 'Position verb (it\u2019s already there, <span class="de r-question">Wo?</span>) takes the <b>Dativ</b>: <span class="de">Das Buch liegt auf <span class="r-dativ">dem</span> Tisch.</span> Pick the verb, and the case follows.' }
  ],
  revisionTips: [
    'Each pair: a "put" verb (+Akk, moving) and a "be" verb (+Dat, already there).',
    'People sitting down: "Ich setze mich" (reflexive); sitting: "Ich sitze". Never "Ich sitze mich".',
    'Direction verbs are regular (legte/gelegt); position verbs are often irregular (lag/gelegen).'
  ]
};

window.CHAPTER = CHAPTER;
