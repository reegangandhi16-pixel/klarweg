/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 14
   "Wechselpr\u00e4positionen"  (two-way prepositions: an, auf, hinter,
   in, neben, \u00fcber, unter, vor, zwischen). Core: Wo? \u2192 Dativ,
   Wohin? \u2192 Akkusativ. Teaches ONLY the nine two-way prepositions.
   No Genitiv prepositions, no idioms, no rare exceptions.
   Vocabulary source: uploaded chapter-14 list (~60 items; traffic /
   city / bank / train theme). Recycles Ch.13 (Dativ-Pr\u00e4p.),
   Ch.12 (reflexive), Ch.6 (modal Pr\u00e4t.), Ch.7 (Dativ possessives),
   Ch.8-9 (Komparativ, als/wie) and A1.
   NOTE: content only \u2014 existing audio engine, no new assets.

   VOCAB NOTES (flagged, not silently overridden):
   • "dr\u00fccken - to cross" is a source gloss slip; dr\u00fccken = to press
     / push (e.g. den Knopf dr\u00fccken). Glossed as "to press/push".
   • "immer - straight" \u2014 the intended word is "immer geradeaus"
     (straight ahead); immer alone = always. Glossed as "always;
     (immer geradeaus) straight ahead".
   • "die Gro\u00dfstadt - (see glossary)" \u2192 die Gro\u00dfstadt = big city / metropolis.
============================================================ */
const CHAPTER = {
  id: 'a2-14-wechselpraepositionen',
  phase: 'A2 · Phase 2',
  number: 14,
  title: 'Wechselpr\u00e4positionen',
  titleEn: 'Two-Way Prepositions',
  description: 'Nine prepositions can take EITHER case, and one question decides which: are you moving or already there? Wohin? (where to? \u2014 movement) \u2192 Akkusativ. Wo? (where? \u2014 location) \u2192 Dativ. Ich lege das Buch auf den Tisch (movement) vs. Das Buch liegt auf dem Tisch (location). Same nine words \u2014 an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen \u2014 two cases, one simple test.',
  xp: 170,
  time: 35,
  difficulty: 'Elementary',
  nextChapter: { number: 15, title: 'Positions- & Richtungsverben', titleEn: 'Position & Direction Verbs' , href: 'chapter-a2-15-positions-richtungsverben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Frieda has a new flat and Timo shows up to help move furniture \u2014 which means a whole morning of "put it there / no, it\u2019s already here". The sofa goes against the wall, the lamp between the windows, the boxes into the cellar. Every sentence forces the choice: moving something (wohin? \u2192 Akkusativ) or saying where it now sits (wo? \u2192 Dativ). Frieda turns the chaos into one clean rule.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear an die Wand vs. an der Wand, in die K\u00fcche vs. in der K\u00fcche'
    ],
    scene: 'Umzugstag in Friedas neuer Wohnung \u2014 Berlin',
    femaleSpeakers: ['Frieda'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'parken', role: 'r-verb', en: 'do we park', hi: 'पार्क करते हैं', pron: 'PAR-ken', type: 'Verb · parken (wir)', why: 'parken = to park (this chapter).', ex: 'Wo parken wir?', exEn: 'Where do we park?' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Where do we park?', hi: 'Hum kahaan park karte hain?' },
      { speaker: 'Frieda', side: 'right', tokens: [
        { w: 'Stell', role: 'r-verb', en: 'put', hi: 'खड़ी करो', pron: 'shtel', type: 'Verb · stellen (imperative)', why: 'stellen + accusative = to place (movement), recycled.', ex: 'Stell das Auto neben die Ampel!', exEn: 'Put the car next to the traffic light!' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Auto', role: 'r-akkusativ', en: 'car', hi: 'कार', pron: 'OW-to', type: 'Noun · neut.' },
        { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल में', pron: 'NAY-ben', type: 'Preposition · Wechselpräp' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Ampel', role: 'r-akkusativ', en: 'traffic light', hi: 'ट्रैफ़िक लाइट', pron: 'AM-pel', type: 'Noun · fem.', why: 'die Ampel (this chapter).', ex: 'neben die Ampel', exEn: 'next to the traffic light' },
        { w: '.', plain: true }
      ], en: 'Put the car next to the traffic light!', hi: 'Kaar traffic light ke bagal mein khadi karo!' },
      { speaker: 'Timo', tokens: [
        { w: 'Da', role: 'r-adverb', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb' },
        { w: 'steht', role: 'r-verb', en: 'stands', hi: 'खड़ी है', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen + dative = to be positioned (state).' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'Auto', role: 'r-subject', en: 'car', hi: 'कार', pron: 'OW-to', type: 'Noun · neut.' },
        { w: 'vor', role: 'r-preposition', en: 'in front of', hi: 'के सामने', pron: 'for', type: 'Preposition · Wechselpräp' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Ampel', role: 'r-dativ', en: 'traffic light (dat.)', hi: 'ट्रैफ़िक लाइट के', pron: 'AM-pel', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'A car is already standing in front of the traffic light there.', hi: 'Wahaan pehle se ek kaar traffic light ke saamne khadi hai.' },
      { speaker: 'Frieda', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fahr', role: 'r-verb', en: 'drive', hi: 'चलाओ', pron: 'fahr', type: 'Verb · imperative' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition · Wechselpräp' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl. acc.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Bäume', role: 'r-akkusativ', en: 'trees', hi: 'पेड़ों', pron: 'BOY-muh', type: 'Noun · plural', why: 'die Bäume (this chapter).', ex: 'zwischen die Bäume', exEn: 'between the trees' },
        { w: '.', plain: true }
      ], en: 'Then drive between the trees.', hi: 'Toh peedon ke beech chalao.' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'geht', role: 'r-verb', en: 'works', hi: 'ठीक है', pron: 'gayt', type: 'Verb · gehen' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'erlaubt', role: 'r-adjective', en: 'allowed', hi: 'अनुमति', pron: 'er-LOWPT', type: 'Adjective', why: 'erlaubt = allowed (recycled Ch44).' },
        { w: '?', plain: true }
      ], en: 'Yes, that works. But is that allowed here?', hi: 'Haan, theek hai. Par kya yeh yahaan permit hai?' },
      { speaker: 'Frieda', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानती हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'okay', role: 'r-adjective', en: 'okay', hi: 'ठीक', pron: 'o-KAY', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I believe that it is okay.', hi: 'Main maanti hoon ki yeh theek hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stelle', role: 'r-verb', en: 'put', hi: 'रखता हूँ', pron: 'SHTE-luh', type: 'Verb · stellen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Auto', role: 'r-akkusativ', en: 'car', hi: 'कार', pron: 'OW-to', type: 'Noun · neut.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition · Wechselpräp' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl. acc.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Bäume', role: 'r-akkusativ', en: 'trees', hi: 'पेड़ों', pron: 'BOY-muh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Good. I will put the car between the trees now.', hi: 'Achha. Main abhi kaar peedon ke beech rakhta hoon.' },
      { speaker: 'Frieda', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'steht', role: 'r-verb', en: 'stands', hi: 'खड़ी है', pron: 'shtayt', type: 'Verb · stehen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'sicher', role: 'r-adverb', en: 'safely', hi: 'सुरक्षित', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition · Wechselpräp' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · plural dat.' },
        { w: 'Bäumen', role: 'r-dativ', en: 'trees (dat.)', hi: 'पेड़ों के', pron: 'BOY-men', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Perfect! Now it stands safely between the trees.', hi: 'Badhiya! Ab yeh peedon ke beech surakshit khadi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Nine prepositions sit on the fence \u2014 they can take <strong>either</strong> case, and a single question decides: <strong>am I moving, or am I already there?</strong> <span class="de r-question">Wohin?</span> (where <em>to</em>? \u2014 movement) \u2192 <strong>Akkusativ</strong>. <span class="de r-question">Wo?</span> (where? \u2014 location) \u2192 <strong>Dativ</strong>. Watch the same preposition flip: <span class="de">Ich lege das Buch <span class="r-wechsel">auf</span> <span class="r-akkusativ">den</span> Tisch</span> (I\u2019m moving it \u2192 Akk.) vs. <span class="de">Das Buch liegt <span class="r-wechsel">auf</span> <span class="r-dativ">dem</span> Tisch</span> (it\u2019s already there \u2192 Dat.). The nine are <span class="de">an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen</span>. Learn them as a set, ask <em>wohin or wo?</em> every time, and the case falls out on its own.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is WECHSELPR\u00c4POSITIONEN (two-way prepositions: an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen). Core rule: Wohin?/movement \u2192 Akkusativ; Wo?/location \u2192 Dativ. ' +
    'No genitive prepositions, no idioms. The learner described a room/moving furniture/directions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- MOVEMENT / direction (answer to wohin?) \u2192 ACCUSATIVE: "Ich stelle die Lampe auf den Tisch." "Ich gehe in die K\u00fcche." "Ich h\u00e4nge das Bild an die Wand."\n' +
    '- LOCATION / position (answer to wo?) \u2192 DATIVE: "Die Lampe steht auf dem Tisch." "Ich bin in der K\u00fcche." "Das Bild h\u00e4ngt an der Wand."\n' +
    '- Article shift acc\u2192dat: den\u2192dem (m), das\u2192dem (n), die\u2192der (f), die\u2192den+~n (pl).\n' +
    '- Motion verbs that pair with accusative: stellen, legen, setzen, h\u00e4ngen (transitive), gehen, fahren, kommen. Position verbs with dative: stehen, liegen, sitzen, h\u00e4ngen (intransitive), sein, bleiben.\n' +
    '- Contractions are fine: in dem = im, in das = ins, an dem = am, an das = ans, auf das = aufs.\n' +
    '- Flag classic errors: "Ich bin in die Schule" \u2192 "in der Schule" (location); "Ich gehe in der Schule" \u2192 "in die Schule" (movement); "an den Wand" \u2192 "an der Wand"/"an die Wand" depending on sense.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why (movement vs location). If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Wo/Wohin check:</b> one sentence on whether the case matched movement vs location.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You flip between Akkusativ and Dativ without blinking \u2014 wohin vs wo, sorted. Next: the verb pairs that go with them in <span class="de">Positions- & Richtungsverben</span>.',
    mid: 'Good. Re-read the wohin/wo card once (moving \u2192 Akk, already there \u2192 Dat), then continue.',
    low: 'Worth another pass \u2014 the whole chapter is one question: moving (wohin? \u2192 Akkusativ) or already there (wo? \u2192 Dativ)? Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'lege', role: 'r-verb' },
    { w: 'das', role: 'r-akkusativ' }, { w: 'Buch', role: 'r-object' },
    { w: 'auf', role: 'r-wechsel' }, { w: 'den', role: 'r-akkusativ' },
    { w: 'Tisch', role: 'r-object' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one test: moving (wohin? \u2192 Akk) vs already there (wo? \u2192 Dat).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Moving day \u2014 furniture goes in, on, under, between and against.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the city/traffic/bank words: die Ampel, der Antrag, das Fahrzeug, parken, g\u00fcltig.' },
    { id: 'grammar',    label: 'Wechsel',    tag: 'core',
      objective: 'Master the nine two-way prepositions, the wohin/wo test and the article flips.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a room described in full \u2014 an, auf, in, unter, zwischen.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each Akkusativ (movement) and each Dativ (location).' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your room and where you put things, both cases.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a room description and a furniture-move using all nine.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the case choice and the article flips with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s city, traffic and bank words \u2014 die Ampel, der Antrag, das Fahrzeug, die Kaution, parken \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '13 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'wohin/wo sorting, Akkusativ-vs-Dativ drills, article flips, and a describe-your-room task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'All nine two-way prepositions, the wohin/wo test, the full article table, contractions, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wohin? \u2192 Akkusativ', text: 'Use the accusative for movement' },
    { de: 'Wo? \u2192 Dativ', text: 'Use the dative for location' },
    { de: 'Ich lege das Buch auf den Tisch.', text: 'Say where you move something' },
    { de: 'Das Buch liegt auf dem Tisch.', text: 'Say where something is' },
    { de: 'an, auf, in, unter, \u00fcber \u2026', text: 'Use all nine two-way prepositions' }
  ],

  // ---------- Vocabulary (60 items) ----------
  vocab: [
    // ===== Traffic & vehicles =====
    { de: 'Ampel', art: 'die', gender: 'f', plural: 'Ampeln', pos: 'noun', en: 'traffic light', hi: 'ट्रैफ़िक लाइट', ex: 'An der Ampel muss das Fahrzeug bremsen.', exEn: 'At the traffic light the vehicle has to brake.' },
    { de: 'Fahrzeug', art: 'das', gender: 'n', plural: 'Fahrzeuge', pos: 'noun', en: 'vehicle', hi: 'वाहन', ex: 'Ich stelle das Fahrzeug vor das Haus.', exEn: 'I put the vehicle in front of the house.' },
    { de: 'Fahrer', art: 'der', gender: 'm', plural: 'Fahrer', pos: 'noun', en: 'driver (m.)', hi: 'चालक', ex: 'Der Fahrer parkt neben der Ampel.', exEn: 'The driver parks next to the traffic light.' },
    { de: 'E-Bike', art: 'das', gender: 'n', plural: 'E-Bikes', pos: 'noun', en: 'e-bike, electric bike', hi: 'ई-बाइक', ex: 'Ich stelle mein E-Bike hinter das Haus.', exEn: 'I put my e-bike behind the house.' },
    { de: 'Radweg', art: 'der', gender: 'm', plural: 'Radwege', pos: 'noun', en: 'cycle path', hi: 'साइकिल मार्ग', ex: 'Auf dem Radweg f\u00e4hrt man sicher.', exEn: 'On the cycle path you ride safely.' },
    { de: 'Glatteis', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'black ice', hi: 'काली बर्फ़', ex: 'Bei Glatteis muss man langsam bremsen.', exEn: 'On black ice you have to brake slowly.' },
    { de: 'Panne', art: 'die', gender: 'f', plural: 'Pannen', pos: 'noun', en: 'breakdown, car trouble', hi: 'गाड़ी ख़राबी', ex: 'Nach der Panne stand das Auto vor der Werkstatt.', exEn: 'After the breakdown the car stood in front of the garage.' },
    { de: 'T\u00dcV', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'MOT, vehicle inspection', hi: 'वाहन जाँच', ex: 'Der T\u00dcV ist noch ein Jahr g\u00fcltig.', exEn: 'The MOT is valid for another year.' },
    { de: 'Kennzeichen', art: 'das', gender: 'n', plural: 'Kennzeichen', pos: 'noun', en: 'licence plate', hi: 'नंबर प्लेट', ex: 'Das Kennzeichen h\u00e4ngt hinten am Fahrzeug.', exEn: 'The licence plate is on the back of the vehicle.' },
    { de: 'Navi', art: 'das', gender: 'n', plural: 'Navis', pos: 'noun', en: 'satnav', hi: 'नेवीगेशन', ex: 'Das Navi liegt zwischen den Sitzen.', exEn: 'The satnav is between the seats.' },
    { de: 'Verkehrsproblem', art: 'das', gender: 'n', plural: 'Verkehrsprobleme', pos: 'noun', en: 'traffic problem', hi: 'यातायात समस्या', ex: 'In der Gro\u00dfstadt gibt es viele Verkehrsprobleme.', exEn: 'In the big city there are many traffic problems.' },
    { de: 'bremsen', pos: 'verb', en: 'to brake', hi: 'ब्रेक लगाना', ex: 'Vor der Ampel bremst der Fahrer.', exEn: 'Before the traffic light the driver brakes.', conj: { praesens: 'bremst', praeteritum: 'bremste', perfekt: 'hat gebremst' } },
    { de: 'parken', pos: 'verb', en: 'to park', hi: 'पार्क करना', ex: 'Man darf nicht auf dem Radweg parken.', exEn: 'You mustn\u2019t park on the cycle path.', conj: { praesens: 'parkt', praeteritum: 'parkte', perfekt: 'hat geparkt' } },
    { de: 'tanken', pos: 'verb', en: 'to refuel, to fill up', hi: 'ईंधन भरना', ex: 'Vor der Zugfahrt tanke ich das Auto.', exEn: 'Before the train ride I fill up the car.', conj: { praesens: 'tankt', praeteritum: 'tankte', perfekt: 'hat getankt' } },
    { de: 'transportieren', pos: 'verb', en: 'to transport', hi: 'ले जाना', ex: 'Wir transportieren die Kartons in den Keller.', exEn: 'We transport the boxes into the cellar.', conj: { praesens: 'transportiert', praeteritum: 'transportierte', perfekt: 'hat transportiert' } },
    { de: 'dr\u00fccken', pos: 'verb', en: 'to press, to push', hi: 'दबाना', ex: 'An der Ampel dr\u00fcckt man auf den Knopf.', exEn: 'At the traffic light you press the button.', conj: { praesens: 'dr\u00fcckt', praeteritum: 'dr\u00fcckte', perfekt: 'hat gedr\u00fcckt' } },
    // ===== Bank & admin =====
    { de: 'Antrag', art: 'der', gender: 'm', plural: 'Antr\u00e4ge', pos: 'noun', en: 'application, form', hi: 'आवेदन', ex: 'Ich lege den Antrag auf den Tisch der Beamtin.', exEn: 'I put the application on the official\u2019s desk.' },
    { de: 'Bankkarte', art: 'die', gender: 'f', plural: 'Bankkarten', pos: 'noun', en: 'bank card', hi: 'बैंक कार्ड', ex: 'Die Bankkarte steckt im Automaten.', exEn: 'The bank card is in the machine.' },
    { de: 'Beamtin', art: 'die', gender: 'f', plural: 'Beamtinnen', pos: 'noun', en: 'official, civil servant (f.)', hi: 'अधिकारी', ex: 'Die Beamtin sitzt hinter dem Schalter.', exEn: 'The official sits behind the counter.' },
    { de: 'Angestellte', art: 'der/die', gender: 'mf', plural: 'Angestellten', pos: 'noun', en: 'employee', hi: 'कर्मचारी', ex: 'Die Angestellte legt die Unterlagen in die Mappe.', exEn: 'The employee puts the documents in the folder.' },
    { de: 'Aushilfe', art: 'die', gender: 'f', plural: 'Aushilfen', pos: 'noun', en: 'temporary help, temp', hi: 'अस्थायी सहायक', ex: 'Die Aushilfe arbeitet seit einem Monat bei uns.', exEn: 'The temp has worked with us for a month.' },
    { de: 'Betrag', art: 'der', gender: 'm', plural: 'Betr\u00e4ge', pos: 'noun', en: 'amount, sum', hi: 'राशि', ex: 'Der Betrag steht unten auf der Rechnung.', exEn: 'The amount is at the bottom of the bill.' },
    { de: 'Kredit', art: 'der', gender: 'm', plural: 'Kredite', pos: 'noun', en: 'loan, credit', hi: 'ऋण', ex: 'F\u00fcr die Wohnung brauche ich einen Kredit.', exEn: 'For the flat I need a loan.' },
    { de: 'Kaution', art: 'die', gender: 'f', plural: 'Kautionen', pos: 'noun', en: 'deposit', hi: 'जमानत राशि', ex: 'Die Kaution zahle ich vor dem Einzug.', exEn: 'I pay the deposit before moving in.' },
    { de: 'Unterlagen', art: 'die', gender: 'pl', plural: 'Unterlagen', pos: 'noun', en: 'documents, paperwork', hi: 'दस्तावेज़', ex: 'Die Unterlagen liegen auf dem Schreibtisch.', exEn: 'The documents are on the desk.' },
    { de: 'Kenntnis', art: 'die', gender: 'f', plural: 'Kenntnisse', pos: 'noun', en: 'knowledge', hi: 'जानकारी', ex: 'Gute Deutschkenntnisse stehen im Antrag.', exEn: 'Good German knowledge is in the application.' },
    { de: 'Gesetz', art: 'das', gender: 'n', plural: 'Gesetze', pos: 'noun', en: 'law', hi: 'कानून', ex: 'Das Gesetz gilt in der ganzen Gro\u00dfstadt.', exEn: 'The law applies in the whole city.' },
    { de: 'Konsequenz', art: 'die', gender: 'f', plural: 'Konsequenzen', pos: 'noun', en: 'consequence', hi: 'परिणाम', ex: 'Falsch parken hat Konsequenzen.', exEn: 'Parking wrongly has consequences.' },
    { de: 'Sicherheit', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'security, safety', hi: 'सुरक्षा', ex: 'Die Sicherheit steht an erster Stelle.', exEn: 'Safety comes first.' },
    { de: 'g\u00fcltig', pos: 'adjective', en: 'valid', hi: 'मान्य', ex: 'Die Bankkarte ist noch g\u00fcltig.', exEn: 'The bank card is still valid.' },
    { de: 'bitten', pos: 'verb', en: 'to ask for (um + Akk.)', hi: 'निवेदन करना', ex: 'Ich bitte die Beamtin um eine Kopie.', exEn: 'I ask the official for a copy.', conj: { praesens: 'bittet', praeteritum: 'bat', perfekt: 'hat gebeten' } },
    { de: 'brauchen', pos: 'verb', en: 'to need', hi: 'ज़रूरत होना', ex: 'F\u00fcr den Antrag brauche ich meine Unterlagen.', exEn: 'For the application I need my documents.', conj: { praesens: 'braucht', praeteritum: 'brauchte', perfekt: 'hat gebraucht' } },
    { de: 'leeren', pos: 'verb', en: 'to empty', hi: 'ख़ाली करना', ex: 'Ich leere die Tasche auf den Tisch.', exEn: 'I empty the bag onto the table.', conj: { praesens: 'leert', praeteritum: 'leerte', perfekt: 'hat geleert' } },
    { de: 'dagegen sein', pos: 'phrase', en: 'to be against, to disapprove', hi: 'विरुद्ध होना', ex: 'Ich bin dagegen, das Auto auf dem Radweg zu parken.', exEn: 'I\u2019m against parking the car on the cycle path.' },
    // ===== City & public life =====
    { de: 'Gro\u00dfstadt', art: 'die', gender: 'f', plural: 'Gro\u00dfst\u00e4dte', pos: 'noun', en: 'big city, metropolis', hi: 'महानगर', ex: 'In der Gro\u00dfstadt wohnen viele Stadtbewohner.', exEn: 'Many city dwellers live in the metropolis.' },
    { de: 'Stadtbewohner', art: 'der', gender: 'm', plural: 'Stadtbewohner', pos: 'noun', en: 'city dweller', hi: 'शहरवासी', ex: 'Der Stadtbewohner f\u00e4hrt mit dem E-Bike zur Arbeit.', exEn: 'The city dweller rides an e-bike to work.' },
    { de: 'Ordnung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'order, tidiness', hi: 'व्यवस्था', ex: 'Jetzt ist alles in Ordnung.', exEn: 'Now everything is in order.' },
    { de: 'Ruhe', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'quiet, calm', hi: 'शांति', ex: 'Auf dem Land findet man mehr Ruhe.', exEn: 'In the countryside you find more quiet.' },
    { de: 'Luft', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'air', hi: 'हवा', ex: 'Die Luft in der Gro\u00dfstadt ist nicht so gut.', exEn: 'The air in the big city isn\u2019t so good.' },
    { de: '\u00f6ffentlich', pos: 'adjective', en: 'public', hi: 'सार्वजनिक', ex: '\u00d6ffentliche Verkehrsmittel sind praktisch.', exEn: 'Public transport is practical.' },
    { de: 'telefonisch', pos: 'adjective', en: 'by phone', hi: 'फ़ोन द्वारा', ex: 'Ich melde die Panne telefonisch.', exEn: 'I report the breakdown by phone.' },
    { de: 'spontan', pos: 'adjective', en: 'spontaneous', hi: 'स्वतःस्फूर्त', ex: 'Spontan fahren wir in die Gro\u00dfstadt.', exEn: 'Spontaneously we drive into the city.' },
    { de: 'ungeduldig', pos: 'adjective', en: 'impatient', hi: 'अधीर', ex: 'An der Ampel wird der Fahrer ungeduldig.', exEn: 'At the traffic light the driver gets impatient.' },
    { de: 'modern', pos: 'adjective', en: 'modern', hi: 'आधुनिक', ex: 'Die moderne Wohnung liegt in der Gro\u00dfstadt.', exEn: 'The modern flat is in the big city.' },
    { de: 'immer', pos: 'adverb', en: 'always; (immer geradeaus) straight ahead', hi: 'हमेशा; सीधे', ex: 'Fahren Sie immer geradeaus bis zur Ampel.', exEn: 'Drive straight ahead to the traffic light.' },
    { de: 'weg sein', pos: 'phrase', en: 'to be gone', hi: 'गायब होना', ex: 'Mein Wohnungsschl\u00fcssel ist weg!', exEn: 'My flat key is gone!' },
    // ===== Home, keys, media =====
    { de: 'Wohnungsschl\u00fcssel', art: 'der', gender: 'm', plural: 'Wohnungsschl\u00fcssel', pos: 'noun', en: 'key to the flat', hi: 'फ़्लैट की चाबी', ex: 'Der Wohnungsschl\u00fcssel liegt auf dem Regal.', exEn: 'The flat key is on the shelf.' },
    { de: 'Werbung', art: 'die', gender: 'f', plural: 'Werbungen', pos: 'noun', en: 'advertisement, advertising', hi: 'विज्ञापन', ex: 'Die Werbung steckt im Briefkasten.', exEn: 'The advertising is in the letterbox.' },
    { de: 'SMS', art: 'die', gender: 'f', plural: 'SMS', pos: 'noun', en: 'text message, SMS', hi: 'एसएमएस', ex: 'Ich schreibe eine SMS an die Aushilfe.', exEn: 'I write a text message to the temp.' },
    { de: 'Malerin', art: 'die', gender: 'f', plural: 'Malerinnen', pos: 'noun', en: 'painter (f.)', hi: 'चित्रकार', ex: 'Die Malerin h\u00e4ngt ihr Bild an die Wand.', exEn: 'The painter hangs her picture on the wall.' },
    { de: 'Drama', art: 'das', gender: 'n', plural: 'Dramen', pos: 'noun', en: 'drama', hi: 'नाटक', ex: 'Das Drama l\u00e4uft im Konzertsaal.', exEn: 'The drama is on at the concert hall.' },
    { de: 'Konzertsaal', art: 'der', gender: 'm', plural: 'Konzerts\u00e4le', pos: 'noun', en: 'concert hall', hi: 'संगीत सभागार', ex: 'Im Konzertsaal klatschen alle laut.', exEn: 'In the concert hall everyone claps loudly.' },
    { de: 'klatschen', pos: 'verb', en: 'to clap, to applaud', hi: 'ताली बजाना', ex: 'Nach dem Drama klatschen die G\u00e4ste.', exEn: 'After the drama the guests applaud.', conj: { praesens: 'klatscht', praeteritum: 'klatschte', perfekt: 'hat geklatscht' } },
    { de: 'Beschreibung', art: 'die', gender: 'f', plural: 'Beschreibungen', pos: 'noun', en: 'description', hi: 'विवरण', ex: 'Die Beschreibung steht \u00fcber dem Bild.', exEn: 'The description is above the picture.' },
    // ===== Train ride =====
    { de: 'Zugfahrt', art: 'die', gender: 'f', plural: 'Zugfahrten', pos: 'noun', en: 'train ride', hi: 'रेल यात्रा', ex: 'Auf der Zugfahrt lese ich ein Buch.', exEn: 'On the train ride I read a book.' },
    { de: 'Bordbistro', art: 'das', gender: 'n', plural: 'Bordbistros', pos: 'noun', en: 'on-board bistro', hi: 'ट्रेन कैफ़े', ex: 'Im Bordbistro kaufe ich einen Kaffee.', exEn: 'In the on-board bistro I buy a coffee.' },
    { de: 'Kinderabteil', art: 'das', gender: 'n', plural: 'Kinderabteile', pos: 'noun', en: 'children\u2019s compartment', hi: 'बच्चों का डिब्बा', ex: 'Die Familie sitzt im Kinderabteil.', exEn: 'The family sits in the children\u2019s compartment.' },
    { de: 'Delikatesse', art: 'die', gender: 'f', plural: 'Delikatessen', pos: 'noun', en: 'delicacy', hi: 'स्वादिष्ट व्यंजन', ex: 'Im Bordbistro gibt es eine Delikatesse.', exEn: 'In the on-board bistro there\u2019s a delicacy.' },
    { de: 'Zutat', art: 'die', gender: 'f', plural: 'Zutaten', pos: 'noun', en: 'ingredient', hi: 'सामग्री', ex: 'Die Zutaten liegen auf dem Tisch.', exEn: 'The ingredients are on the table.' }
  ],

  // ---------- Wechselpr\u00e4positionen (rule cards) ----------
  grammar: [
    {
      title: 'The nine two-way prepositions',
      goldenRule: 'These nine \u2014 and only these nine \u2014 can switch case: <b>an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen</b>.',
      memoryTrick: 'Nau naam ek lay mein: <b>an-auf-hinter-in-neben-\u00fcber-unter-vor-zwischen</b>. Baaki saare prepositions fixed hain \u2014 sirf yeh nau faisla maangte hain.',
      body: [
        'These nine prepositions can take <strong>either</strong> the accusative or the dative. They all describe a spatial relationship.'
      ],
      table: {
        head: ['Preposition', 'Meaning', 'Example (location, Dativ)'],
        rows: [
          ['<span class="de r-wechsel">an</span>', 'on (vertical), at', '<span class="de">an <span class="r-dativ">der</span> Wand</span>'],
          ['<span class="de r-wechsel">auf</span>', 'on (horizontal)', '<span class="de">auf <span class="r-dativ">dem</span> Tisch</span>'],
          ['<span class="de r-wechsel">hinter</span>', 'behind', '<span class="de">hinter <span class="r-dativ">dem</span> Sofa</span>'],
          ['<span class="de r-wechsel">in</span>', 'in, into', '<span class="de">in <span class="r-dativ">der</span> K\u00fcche</span>'],
          ['<span class="de r-wechsel">neben</span>', 'next to', '<span class="de">neben <span class="r-dativ">dem</span> Bett</span>'],
          ['<span class="de r-wechsel">\u00fcber</span>', 'above, over', '<span class="de">\u00fcber <span class="r-dativ">dem</span> Sofa</span>'],
          ['<span class="de r-wechsel">unter</span>', 'under', '<span class="de">unter <span class="r-dativ">dem</span> Tisch</span>'],
          ['<span class="de r-wechsel">vor</span>', 'in front of', '<span class="de">vor <span class="r-dativ">dem</span> Haus</span>'],
          ['<span class="de r-wechsel">zwischen</span>', 'between', '<span class="de">zwischen <span class="r-dativ">den</span> Fenstern</span>']
        ]
      },
      note: 'A memory rhyme for the nine: <b>an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen</b>. These are the ONLY prepositions that switch case \u2014 all others are fixed.',
      hinglish: 'Nau Wechselpr\u00e4positionen hain: <b>an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen</b>. Sirf yehi prepositions case badalte hain \u2014 baaki sab ka case pehle se decide hota hai. Isliye inhe ek group ki tarah yaad kar lo, phir sirf inke saath sochna padega.'
    },
    {
      title: 'The one test: Wohin? or Wo?',
      goldenRule: '<b>Wohin?</b> (movement) \u2192 Akkusativ. <b>Wo?</b> (location) \u2192 Dativ.',
      why: 'English uses two different words for this \u2014 "in" the kitchen vs "into" the kitchen. German keeps one preposition and lets the <b>article</b> carry the difference. So the case is doing the work "into" does in English.',
      formula: [
        'Wohin? \u2192 Akk:  Ich gehe <b>in die</b> Schule.   (jaa rahe ho)',
        'Wo?    \u2192 Dat:  Ich bin  <b>in der</b> Schule.   (wahaan ho)'
      ],
      memoryTrick: 'Ek hi sawaal: <b>hila raha hoon ya pehle se wahaan hoon?</b> Hila raha hoon \u2192 Akkusativ. Wahaan hoon \u2192 Dativ. Preposition wahi rehta hai, sirf article badalta hai.',
      recap: [
        'Movement toward a goal \u2192 <b>Akkusativ</b>.',
        'Staying in a place \u2192 <b>Dativ</b>.',
        'The preposition never changes \u2014 only the article does.'
      ],
      body: [
        'Ask one question about the action. <span class="de r-question">Wohin?</span> (where to? \u2014 <strong>movement</strong> toward a place) \u2192 <strong>Akkusativ</strong>. <span class="de r-question">Wo?</span> (where? \u2014 <strong>location</strong>, no change of place) \u2192 <strong>Dativ</strong>.'
      ],
      table: {
        head: ['Wohin? (movement) \u2192 Akkusativ', 'Wo? (location) \u2192 Dativ'],
        rows: [
          ['<span class="de">Ich lege das Buch auf <span class="r-akkusativ">den</span> Tisch.</span>', '<span class="de">Das Buch liegt auf <span class="r-dativ">dem</span> Tisch.</span>'],
          ['<span class="de">Ich gehe in <span class="r-akkusativ">die</span> Schule.</span>', '<span class="de">Ich bin in <span class="r-dativ">der</span> Schule.</span>'],
          ['<span class="de">Ich h\u00e4nge das Bild an <span class="r-akkusativ">die</span> Wand.</span>', '<span class="de">Das Bild h\u00e4ngt an <span class="r-dativ">der</span> Wand.</span>'],
          ['<span class="de">Der Hund l\u00e4uft unter <span class="r-akkusativ">den</span> Tisch.</span>', '<span class="de">Der Hund schl\u00e4ft unter <span class="r-dativ">dem</span> Tisch.</span>']
        ]
      },
      note: 'Simple version: <b>Am I moving?</b> \u2192 Akkusativ. <b>Am I already there?</b> \u2192 Dativ. The preposition stays the same \u2014 only the case (and article) changes.',
      hinglish: 'Ek hi sawaal poochhna hai. Agar tum kahin <b>jaa rahe ho</b> ya kuch <b>rakh rahe ho</b> (<b>Wohin?</b>), to Akkusativ aayega. Aur agar tum bata rahe ho ki cheez ya tum <b>kahaan ho</b> (<b>Wo?</b>), to Dativ aayega. Preposition wahi rehta hai \u2014 sirf article badalta hai.'
    },
    {
      title: 'The article flip: Akkusativ \u2194 Dativ',
      goldenRule: 'Akk <b>den/die/das/die</b> \u2194 Dat <b>dem/der/dem/den</b> (+<b>-n</b> on the plural noun).',
      memoryTrick: 'Chaar contractions roz kaam aati hain: <b>in dem = im</b>, <b>in das = ins</b>, <b>an dem = am</b>, <b>an das = ans</b>. Dativ wale mein <b>m</b>, Akkusativ wale mein <b>s</b> \u2014 im/am vs ins/ans.',
      body: [
        'When the case changes, the article changes with it. Learn the two rows together.'
      ],
      table: {
        head: ['Gender/number', 'Akkusativ (Wohin?)', 'Dativ (Wo?)'],
        rows: [
          ['masculine', '<span class="de r-akkusativ">den</span> Tisch', '<span class="de r-dativ">dem</span> Tisch'],
          ['feminine', '<span class="de r-akkusativ">die</span> Wand', '<span class="de r-dativ">der</span> Wand'],
          ['neuter', '<span class="de r-akkusativ">das</span> Regal', '<span class="de r-dativ">dem</span> Regal'],
          ['plural', '<span class="de r-akkusativ">die</span> Fenster', '<span class="de r-dativ">den</span> Fenstern']
        ]
      },
      note: 'Only the <b>masculine</b> shows a big change in the accusative (den). In the dative, plural gets <b>den + noun -n</b> (den Fenster<b>n</b>). Contractions: in dem = <b>im</b>, in das = <b>ins</b>, an dem = <b>am</b>, an das = <b>ans</b>.',
      hinglish: 'Jab case badalta hai to article bhi badal jaata hai. Akkusativ mein <b>den/die/das/die</b> aata hai, aur Dativ mein <b>dem/der/dem/den</b> (+<b>-n</b>). Chaar contractions roz kaam aati hain: <b>in dem</b> se <b>im</b>, <b>in das</b> se <b>ins</b>, <b>an dem</b> se <b>am</b>, aur <b>an das</b> se <b>ans</b>.'
    },
    {
      title: 'Same preposition, two jobs \u2014 an der / an die',
      body: [
        'Watch one preposition do both jobs, side by side. The verb often signals which: <em>stellen/legen/h\u00e4ngen/gehen</em> (movement) vs <em>stehen/liegen/h\u00e4ngen/sein</em> (location).'
      ],
      table: {
        head: ['Movement \u2192 Akkusativ', 'Location \u2192 Dativ'],
        rows: [
          ['<span class="de">Ich h\u00e4nge das Bild an <span class="r-akkusativ">die</span> Wand.</span>', '<span class="de">Das Bild h\u00e4ngt an <span class="r-dativ">der</span> Wand.</span>'],
          ['<span class="de">Ich stelle die Lampe in <span class="r-akkusativ">die</span> Ecke.</span>', '<span class="de">Die Lampe steht in <span class="r-dativ">der</span> Ecke.</span>'],
          ['<span class="de">Wir gehen vor <span class="r-akkusativ">das</span> Haus.</span>', '<span class="de">Wir sitzen vor <span class="r-dativ">dem</span> Haus.</span>'],
          ['<span class="de">Ich setze mich zwischen <span class="r-akkusativ">die</span> St\u00fchle.</span>', '<span class="de">Ich sitze zwischen <span class="r-dativ">den</span> St\u00fchlen.</span>']
        ]
      },
      note: 'The paired verbs are the giveaway: <b>stellen/legen/setzen/h\u00e4ngen (+ Akk.)</b> = putting something somewhere; <b>stehen/liegen/sitzen/h\u00e4ngen (+ Dat.)</b> = it is already there. (More on these next chapter.)',
      hinglish: 'Verb dekh kar bhi pata chal jaata hai. <b>stellen, legen, setzen, h\u00e4ngen</b> ka matlab hai kuch rakhna, isliye inke saath Akkusativ aata hai. <b>stehen, liegen, sitzen, h\u00e4ngen</b> batate hain ki cheez pehle se kahaan hai, isliye inke saath Dativ aata hai. Agle chapter mein inhi jodi ko detail mein dekhoge.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four two-way-preposition traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich bin in die Schule.', right: 'Ich bin in der Schule.', why: 'sein = location (wo?) \u2192 dative: in der Schule.' },
        { wrong: 'Ich gehe in der Schule.', right: 'Ich gehe in die Schule.', why: 'gehen = movement (wohin?) \u2192 accusative: in die Schule.' },
        { wrong: 'Das Bild h\u00e4ngt an die Wand.', right: 'Das Bild h\u00e4ngt an der Wand.', why: 'h\u00e4ngen (it is there) = location \u2192 dative: an der Wand.' },
        { wrong: 'Ich lege das Handy neben dem Tisch.', right: 'Ich lege das Handy neben den Tisch.', why: 'legen = movement \u2192 accusative: neben den Tisch.' }
      ],
      hinglish: 'Char galtiyan common hain, aur chaaron mein faisla verb se hota hai. <b>Ich bin in der Schule</b> mein tum wahaan ho, isliye Dativ aaya. <b>Ich gehe in die Schule</b> mein tum jaa rahe ho, isliye Akkusativ. <b>Das Bild h\u00e4ngt an der Wand</b> mein tasveer pehle se lagi hui hai, isliye Dativ. Aur <b>Ich lege \u2026 neben den Tisch</b> mein tum rakh rahe ho, isliye Akkusativ. Har baar verb dekho \u2014 jaana ya rakhna ho raha hai, ya sirf hona?'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Two questions and you\u2019re done \u2014 every single time.'
      ],
      table: {
        head: ['Ask', 'Answer', 'Case'],
        rows: [
          ['Am I <b>moving</b> something / going somewhere? (Wohin?)', 'yes', '<span class="de r-akkusativ">Akkusativ</span> (den/die/das/die)'],
          ['Am I saying <b>where</b> something is? (Wo?)', 'yes', '<span class="de r-dativ">Dativ</span> (dem/der/dem/den+n)']
        ]
      },
      note: 'Say it before every two-way preposition: <b>Moving? \u2192 Akkusativ. Already there? \u2192 Dativ.</b> That one check removes the most common A2 location error.',
      hinglish: 'Har Wechselpr\u00e4position se pehle yeh poochho: kya main kahin <b>jaa raha hoon</b> ya kuch <b>hila raha hoon</b>? Agar haan, to Akkusativ. Aur agar main sirf bata raha hoon ki cheez <b>kahaan hai</b>, to Dativ.'
    }
  ],

  // ---------- Reading passage (Mein neues Zimmer, clickable) ----------
  reading: {
    title: 'Mein neues Zimmer',
    titleEn: 'My new room',
    tokens: [
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Zimmer', role: 'r-subject', en: 'room', hi: 'कमरा', pron: 'TSI-mer', type: 'Noun \u00b7 neut.', why: 'das Zimmer (recycled \u2014 Wohnung).', ex: 'mein Zimmer', exEn: 'my room' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position', why: 'in + Dativ \u2014 location (wo?) (this chapter).', ex: 'in der Gro\u00dfstadt', exEn: 'in the big city' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative', why: 'Wo? \u2192 Dativ (this chapter).', ex: 'in der Gro\u00dfstadt', exEn: 'in the big city' },
      { w: 'Gro\u00dfstadt', role: 'r-dativ', en: 'big city', hi: 'महानगर', pron: 'GROHS-shtat', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Gro\u00dfstadt (this chapter).', ex: 'in der Gro\u00dfstadt', exEn: 'in the big city' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'klein', role: 'r-adjective', en: 'small', hi: 'छोटा', pron: 'kline', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'modern', role: 'r-adjective', en: 'modern', hi: 'आधुनिक', pron: 'mo-DAIRN', type: 'Adjective', why: 'modern (this chapter).', ex: 'modern', exEn: 'modern' },
      { w: '.', plain: true },
      { w: 'An', role: 'r-wechsel', en: 'on', hi: 'पर', pron: 'an', type: 'Wechselpr\u00e4position', why: 'an + Dativ \u2014 location (wo?) (this chapter).', ex: 'an der Wand', exEn: 'on the wall' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Wand', role: 'r-dativ', en: 'wall', hi: 'दीवार', pron: 'vant', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Wand (recycled \u2014 Wohnung).', ex: 'an der Wand', exEn: 'on the wall' },
      { w: 'h\u00e4ngt', role: 'r-verb', en: 'hangs', hi: 'टँगी है', pron: 'hengt', type: 'Verb \u00b7 h\u00e4ngen', why: 'location \u2192 Dativ (this chapter).', ex: 'Ein Bild h\u00e4ngt an der Wand.', exEn: 'A picture hangs on the wall.' },
      { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Bild', role: 'r-subject', en: 'picture', hi: 'तस्वीर', pron: 'bilt', type: 'Noun \u00b7 neut.', why: 'das Bild (recycled \u2014 Wohnung).', ex: 'ein Bild', exEn: 'a picture' },
      { w: 'von', role: 'r-preposition', en: 'by', hi: 'का', pron: 'fon', type: 'Preposition \u00b7 Dativ' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'INE-er', type: 'Article \u00b7 dative' },
      { w: 'Malerin', role: 'r-dativ', en: 'painter (f.)', hi: 'चित्रकार', pron: 'MAH-luh-rin', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Malerin (this chapter).', ex: 'von einer Malerin', exEn: 'by a painter' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'r-wechsel', en: 'on', hi: 'पर', pron: 'owf', type: 'Wechselpr\u00e4position', why: 'auf + Dativ \u2014 location (wo?) (this chapter).', ex: 'auf dem Regal', exEn: 'on the shelf' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Regal', role: 'r-dativ', en: 'shelf', hi: 'रैक', pron: 're-GAHL', type: 'Noun \u00b7 neut. \u00b7 dat.', why: 'das Regal (recycled \u2014 Wohnung).', ex: 'auf dem Regal', exEn: 'on the shelf' },
      { w: 'liegen', role: 'r-verb', en: 'lie', hi: 'पड़ी हैं', pron: 'LEE-gen', type: 'Verb \u00b7 liegen', why: 'location \u2192 Dativ (this chapter).', ex: 'B\u00fccher liegen auf dem Regal.', exEn: 'Books lie on the shelf.' },
      { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Unterlagen', role: 'r-subject', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun \u00b7 plural', why: 'die Unterlagen (this chapter).', ex: 'meine Unterlagen', exEn: 'my documents' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb \u00b7 time' },
      { w: 'stelle', role: 'r-verb', en: 'put', hi: 'रखता हूँ', pron: 'SHTE-luh', type: 'Verb \u00b7 stellen', why: 'movement \u2192 Akkusativ (this chapter).', ex: 'Ich stelle den Tisch an das Fenster.', exEn: 'I put the table by the window.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'इस', pron: 'dayn', type: 'Article \u00b7 acc.', why: 'Wohin? \u2192 Akkusativ (this chapter).', ex: 'den Tisch', exEn: 'the table' },
      { w: 'Tisch', role: 'r-object', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun \u00b7 masc.', why: 'der Tisch (recycled \u2014 Wohnung).', ex: 'den Tisch', exEn: 'the table' },
      { w: 'an', role: 'r-wechsel', en: 'by', hi: 'के पास', pron: 'an', type: 'Wechselpr\u00e4position', why: 'an + Akkusativ \u2014 movement (wohin?) (this chapter).', ex: 'an das Fenster', exEn: 'by the window' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'इस', pron: 'das', type: 'Article \u00b7 acc.' },
      { w: 'Fenster', role: 'r-object', en: 'window', hi: 'खिड़की', pron: 'FENS-ter', type: 'Noun \u00b7 neut.', why: 'das Fenster (recycled \u2014 Wohnung).', ex: 'an das Fenster', exEn: 'by the window' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'lege', role: 'r-verb', en: 'lay', hi: 'रखता हूँ', pron: 'LAY-guh', type: 'Verb \u00b7 legen', why: 'movement \u2192 Akkusativ (this chapter).', ex: 'Ich lege den Laptop auf den Tisch.', exEn: 'I lay the laptop on the table.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'इस', pron: 'dayn', type: 'Article \u00b7 acc.' },
      { w: 'Laptop', role: 'r-object', en: 'laptop', hi: 'लैपटॉप', pron: 'LEP-top', type: 'Noun \u00b7 masc.', why: 'der Laptop (recycled \u2014 als/wie).', ex: 'den Laptop', exEn: 'the laptop' },
      { w: 'darauf', role: 'r-adverb', en: 'on it', hi: 'उस पर', pron: 'da-ROWF', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'mine', type: 'Possessive' },
      { w: 'E-Bike', role: 'r-subject', en: 'e-bike', hi: 'ई-बाइक', pron: 'AY-byke', type: 'Noun \u00b7 neut.', why: 'das E-Bike (this chapter).', ex: 'mein E-Bike', exEn: 'my e-bike' },
      { w: 'stelle', role: 'r-verb', en: 'put', hi: 'रखता हूँ', pron: 'SHTE-luh', type: 'Verb \u00b7 stellen', why: 'movement \u2192 Akkusativ (this chapter).', ex: 'Ich stelle es hinter das Haus.', exEn: 'I put it behind the house.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'hinter', role: 'r-wechsel', en: 'behind', hi: 'के पीछे', pron: 'HIN-ter', type: 'Wechselpr\u00e4position', why: 'hinter + Akkusativ \u2014 movement (wohin?) (this chapter).', ex: 'hinter das Haus', exEn: 'behind the house' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'इस', pron: 'das', type: 'Article \u00b7 acc.' },
      { w: 'Haus', role: 'r-object', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun \u00b7 neut.', why: 'das Haus (recycled \u2014 Wohnung).', ex: 'hinter das Haus', exEn: 'behind the house' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil).', ex: 'weil es dort sicher ist', exEn: 'because it\u2019s safe there' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb \u00b7 place' },
      { w: 'sicher', role: 'r-adjective', en: 'safe', hi: 'सुरक्षित', pron: 'ZI-kher', type: 'Adjective', why: 'sicher (recycled \u2014 Sicherheit).', ex: 'dort sicher', exEn: 'safe there' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein', why: 'conjugated verb last after weil (recycled \u2014 weil).', ex: '\u2026, weil es sicher ist.', exEn: '\u2026 because it\u2019s safe.' },
      { w: '.', plain: true },
      { w: 'Abends', role: 'r-time', en: 'in the evenings', hi: 'शाम को', pron: 'AH-bents', type: 'Adverb \u00b7 time' },
      { w: 'sitze', role: 'r-verb', en: 'sit', hi: 'बैठता हूँ', pron: 'ZI-tsuh', type: 'Verb \u00b7 sitzen', why: 'location \u2192 Dativ (this chapter).', ex: 'Ich sitze vor dem Fenster.', exEn: 'I sit in front of the window.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'शौक से', pron: 'gairn', type: 'Adverb' },
      { w: 'vor', role: 'r-wechsel', en: 'in front of', hi: 'के सामने', pron: 'for', type: 'Wechselpr\u00e4position', why: 'vor + Dativ \u2014 location (wo?) (this chapter).', ex: 'vor dem Fenster', exEn: 'in front of the window' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Fenster', role: 'r-dativ', en: 'window', hi: 'खिड़की', pron: 'FENS-ter', type: 'Noun \u00b7 neut. \u00b7 dat.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'genie\u00dfe', role: 'r-verb', en: 'enjoy', hi: 'आनंद लेता हूँ', pron: 'guh-NEE-suh', type: 'Verb \u00b7 genie\u00dfen' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Ruhe', role: 'r-object', en: 'quiet', hi: 'शांति', pron: 'ROO-uh', type: 'Noun \u00b7 fem.', why: 'die Ruhe (this chapter).', ex: 'die Ruhe genie\u00dfen', exEn: 'to enjoy the quiet' },
      { w: '.', plain: true }
    ],
    translation: 'My room in the big city is small but modern. On the wall hangs a picture by a painter. On the shelf lie my documents. Today I put the table by the window and lay the laptop on it. I put my e-bike behind the house, because it\u2019s safe there. In the evenings I like sitting in front of the window and enjoy the quiet. \u2014 Watch the case flip: an der Wand, auf dem Regal, vor dem Fenster (location \u2192 Dativ) vs. an das Fenster, hinter das Haus (movement \u2192 Akkusativ).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_014_L001', speaker: 'Frieda', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Frieda, wohin stellst du die Lampe?', en: 'Frieda, where are you putting the lamp?' },
      { id: 'A2_014_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich stelle sie neben das Bett.', en: 'I\'m putting it next to the bed.' },
      { id: 'A2_014_L003', speaker: 'Frieda', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wo hängt jetzt das Bild?', en: 'And where is the picture hanging now?' },
      { id: 'A2_014_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Es hängt schon an der Wand, über dem Sofa.', en: 'It\'s already hanging on the wall, above the sofa.' }
    ],
    transcript: 'Frieda, wohin stellst du die Lampe? Ich stelle sie neben das Bett. Und wo hängt jetzt das Bild? Es hängt schon an der Wand, über dem Sofa.',
    translation: 'Frieda, where are you putting the lamp? I\'m putting it next to the bed. And where is the picture hanging now? It\'s already hanging on the wall, above the sofa.',
    tokens: [
      { w: 'Frieda' },
      { w: ',', plain: true },
      { w: 'wohin' },
      { w: 'stellst' },
      { w: 'du' },
      { w: 'die' },
      { w: 'Lampe' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'stelle' },
      { w: 'sie' },
      { w: 'neben' },
      { w: 'das' },
      { w: 'Bett' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wo' },
      { w: 'hängt' },
      { w: 'jetzt' },
      { w: 'das' },
      { w: 'Bild' },
      { w: '?', plain: true },
      { w: 'Es' },
      { w: 'hängt' },
      { w: 'schon' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Wand' },
      { w: ',', plain: true },
      { w: 'über' },
      { w: 'dem' },
      { w: 'Sofa' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wohin stellt Frieda die Lampe?', qEn: 'Where is Frieda putting the lamp?', options: ['auf den Tisch', 'neben das Bett', 'unter das Fenster', 'vor die Tür'], optionsEn: ['onto the table', 'next to the bed', 'under the window', 'outside the door'], answer: 1,
        explain: '"Ich stelle sie neben das Bett."' },
      { q: 'Wo hängt das Bild?', qEn: 'Where does the picture hang?', options: ['neben der Tür', 'über dem Sofa', 'unter dem Fenster', 'hinter dem Bett'], optionsEn: ['next to the door', 'above the sofa', 'under the window', 'behind the bed'], answer: 1,
        explain: '"Es hängt schon an der Wand, über dem Sofa."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wo hast du geparkt?", taskEn: "Your friend asks: where did you park?", de: "Ich habe das Fahrzeug neben dem Radweg geparkt.", en: "I parked the vehicle next to the cycle path." },
    { task: "Deine Kollegin fragt: Wohin soll ich den Antrag legen?", taskEn: "Your colleague asks: where should I put the application?", de: "Leg den Antrag auf den Tisch, neben die Bankkarte.", en: "Put the application on the table, next to the bank card." },
    { task: "Ein Fahrer fragt: Wo ist die Ampel?", taskEn: "A driver asks: where's the traffic light?", de: "Die Ampel ist hinter der Kreuzung, vor dem Parkplatz.", en: "The traffic light is beyond the junction, in front of the car park." },
    { task: "Du hast eine Panne. Erklär am Telefon, wo du stehst.", taskEn: "You've broken down. Explain on the phone where you are.", de: "Ich stehe mit dem Auto auf dem Radweg, hinter der Ampel.", en: "I'm on the cycle path with the car, past the traffic light." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Describe your room and then move some furniture (six sentences) using two-way prepositions. Use at least three location sentences (Wo? \u2192 Dativ: steht/liegt/h\u00e4ngt) and three movement sentences (Wohin? \u2192 Akkusativ: stelle/lege/h\u00e4nge). Try this chapter\u2019s words: das Regal, das Fahrzeug, die Unterlagen, modern, die Ruhe.',
    starters: ['An der Wand h\u00e4ngt \u2026', 'Ich stelle \u2026 an/auf/in \u2026', 'Auf dem Tisch liegt \u2026', 'Ich lege \u2026 unter/neben \u2026'],
    placeholder: 'Mein Zimmer ist modern. An der Wand h\u00e4ngt ein Bild. Ich stelle den Tisch an das Fenster \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct case: "Ich lege das Buch ___ Tisch." (I\u2019m putting it there)',
      options: ['auf dem', 'auf den', 'auf der', 'auf das'],
      answer: 1,
      explain: 'Movement (wohin?) \u2192 Akkusativ; Tisch is masculine \u2192 den: auf den Tisch.'
    },
    gap: {
      // location (dative fem) then movement (accusative fem)
      sentence: ['Das Bild h\u00e4ngt an ', ' Wand, aber ich h\u00e4nge es an ', ' Wand im Flur.'],
      gaps: [ { answer: 'der', accepts: ['der'] }, { answer: 'die', accepts: ['die'] } ],
      explain: 'First: location (wo?) \u2192 der Wand. Second: movement (wohin?) \u2192 die Wand.'
    },
    match: {
      q: 'Match each question/verb to its case.',
      pairs: [
        { noun: 'Wohin? (movement)', art: 'Akkusativ' },
        { noun: 'Wo? (location)', art: 'Dativ' },
        { noun: 'Ich stelle die Lampe \u2026', art: 'Akkusativ (2)' },
        { noun: 'Die Lampe steht \u2026', art: 'Dativ (2)' },
        { noun: 'Ich gehe in die Schule.', art: 'Akkusativ (3)' }
      ]
    },
    builder: {
      target: 'Build (movement): "I hang the picture on the wall."',
      bank: ['Ich', 'h\u00e4nge', 'das', 'Bild', 'an', 'die', 'Wand'],
      answer: ['Ich', 'h\u00e4nge', 'das', 'Bild', 'an', 'die', 'Wand'],
      roles: { 'Ich': 'r-subject', 'h\u00e4nge': 'r-verb', 'das': 'r-akkusativ', 'Bild': 'r-object', 'an': 'r-wechsel', 'die': 'r-akkusativ', 'Wand': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which case answers the question "Wohin?" (where to?)', options: ['Dativ', 'Akkusativ', 'Nominativ', 'Genitiv'], answer: 1,
      explain: 'Wohin? = movement \u2192 Akkusativ.' },
    { q: 'Complete: "Das Buch liegt ___ Tisch." (it is there)', options: ['auf den', 'auf dem', 'auf die', 'auf der'], answer: 1,
      explain: 'Location (wo?) \u2192 Dativ; Tisch masculine \u2192 dem.' },
    { q: 'Which sentence shows movement?', options: ['Ich bin in der K\u00fcche.', 'Ich gehe in die K\u00fcche.', 'Ich sitze in der K\u00fcche.', 'Ich koche in der K\u00fcche.'], answer: 1,
      explain: 'gehen = movement (wohin?) \u2192 in die K\u00fcche (Akkusativ).' },
    { q: 'Complete: "Ich h\u00e4nge das Bild ___ Wand." (I\u2019m hanging it up)', options: ['an der', 'an die', 'an dem', 'an das'], answer: 1,
      explain: 'Movement (wohin?) \u2192 Akkusativ; Wand feminine \u2192 die.' },
    { q: 'Which nine are the two-way prepositions?', options: ['aus, bei, mit, nach, seit, von, zu \u2026', 'an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen', 'durch, f\u00fcr, gegen, ohne, um', 'wegen, trotz, w\u00e4hrend'], answer: 1,
      explain: 'The nine: an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-wechsel', html: 'Nine prepositions take <b>either</b> case: <span class="de">an, auf, hinter, in, neben, \u00fcber, unter, vor, zwischen</span>.' },
    { c: 'r-akkusativ', html: '<span class="de r-question">Wohin?</span> (movement) \u2192 <b>Akkusativ</b>: <span class="de">Ich lege das Buch auf <span class="r-akkusativ">den</span> Tisch.</span>' },
    { c: 'r-dativ', html: '<span class="de r-question">Wo?</span> (location) \u2192 <b>Dativ</b>: <span class="de">Das Buch liegt auf <span class="r-dativ">dem</span> Tisch.</span> Ask: moving, or already there?' }
  ],
  revisionTips: [
    'One question every time: Wohin? (moving \u2192 Akkusativ) or Wo? (already there \u2192 Dativ).',
    'The verb hints: stellen/legen/setzen/h\u00e4ngen + Akk (put) vs stehen/liegen/sitzen/h\u00e4ngen + Dat (be there).',
    'Contractions: in dem = im, in das = ins, an dem = am, an das = ans.'
  ]
};

window.CHAPTER = CHAPTER;
