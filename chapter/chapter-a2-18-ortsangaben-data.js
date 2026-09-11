/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 18
   "Ortsangaben: Pr\u00e4positionen"  — REVIEW CHAPTER, no new words
   uploaded. This chapter teaches natural location expressions
   (links, rechts, geradeaus, gegen\u00fcber, in der N\u00e4he \u2026) and
   direction-giving phrases, NOT new Wechselpr\u00e4positionen grammar.
   Wo?\u2192Dativ / Wohin?\u2192Akkusativ appears only as a quick recap
   (Ch.14). The vocabulary set below IS the chapter's teaching
   content \u2014 the Ortsangaben themselves \u2014 with recycled nouns
   (der Bahnhof, die Ampel, die Ecke, der Dom \u2026) as their targets.
   Recycles Ch.13 (Dativ-Pr\u00e4p.), Ch.14 (Wechselpr\u00e4p.), Ch.15
   (Position-/Richtungsverben), Ch.16-17 city/travel vocabulary.
   NOTE: content only \u2014 existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a2-18-ortsangaben',
  phase: 'A2 · Phase 2',
  number: 18,
  title: 'Ortsangaben: Pr\u00e4positionen',
  titleEn: 'Location Expressions',
  description: 'You already know the grammar \u2014 Dativ prepositions, Wechselpr\u00e4positionen, Wo?/Wohin?. Now learn how Germans actually talk about location day to day: links, rechts, geradeaus; gegen\u00fcber, in der N\u00e4he, an der Ecke; and the simple phrases for giving directions \u2014 Gehen Sie geradeaus. Biegen Sie an der Ampel rechts ab. This is vocabulary and phrasing, not a new case rule.',
  xp: 170,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 19, title: 'Indirekte Frage (W-Frage & ob)', titleEn: 'Indirect Questions (W-word & ob)' , href: 'chapter-a2-19-indirekte-fragen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Timo is lost in the city centre and stops Frauke on the street to ask the way to the museum. Her directions walk him there \u2014 geradeaus, links, an der Ecke, gegen\u00fcber dem Park \u2014 every location phrase in one real exchange.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear links, rechts, geradeaus, gegenüber and an der Ecke in context'
    ],
    scene: 'Vor der Sprachschule \u2014 eine Touristin fragt nach dem Weg',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Museum', role: 'r-subject', en: 'museum', hi: 'संग्रहालय', pron: 'mu-ZAY-um', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Sorry! Where is the museum?', hi: 'Maaf kijiye! Sangrahalay kahaan hai?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mitten', role: 'r-place', en: 'in the middle', hi: 'बीच में', pron: 'MI-ten', type: 'Adverb · place', why: 'mitten in = in the middle of (this chapter).', ex: 'mitten in der Stadt', exEn: 'in the middle of the city' },
        { w: 'in', role: 'r-preposition', en: 'of the', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Stadt', role: 'r-dativ', en: 'city (dat.)', hi: 'शहर के', pron: 'shtat', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'It is in the middle of the city.', hi: 'Yeh shahar ke beech mein hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'komme', role: 'r-verb', en: 'do I get', hi: 'पहुंचूं', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dorthin', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort-HIN', type: 'Adverb · direction' },
        { w: '?', plain: true }
      ], en: 'And how do I get there?', hi: 'Aur main wahaan kaise pahunchoon?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Gehen', role: 'r-verb', en: 'go', hi: 'जाइए', pron: 'GAY-en', type: 'Verb · gehen (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'geradeaus', role: 'r-adverb', en: 'straight ahead', hi: 'सीधे', pron: 'ge-RAH-duh-ows', type: 'Adverb' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'की ओर', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Kreuzung', role: 'r-akkusativ', en: 'crossing', hi: 'चौराहे', pron: 'KROY-tsung', type: 'Noun · fem.', why: 'bis zur Kreuzung = until the crossing (this chapter).', ex: 'Gehen Sie bis zur Kreuzung.', exEn: 'Go until the crossing.' },
        { w: '.', plain: true }
      ], en: 'Go straight ahead until the crossing.', hi: 'Seedhe chauraahe tak jaaiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'And then?', hi: 'Aur phir?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Biegen', role: 'r-verb', en: 'turn', hi: 'मुड़ें', pron: 'BEE-gen', type: 'Verb · abbiegen (Sie)', lexicalUnit: 'abbiegen', why: 'abbiegen = to turn (this chapter).', ex: 'Biegen Sie links ab.', exEn: 'Turn left.' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'an', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'an', type: 'Preposition + place' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Ecke', role: 'r-dativ', en: 'corner (dat.)', hi: 'कोने पर', pron: 'E-kuh', type: 'Noun · fem. dat.', why: 'an der Ecke = at the corner (this chapter).', ex: 'an der Ecke', exEn: 'at the corner' },
        { w: 'links', role: 'r-adverb', en: 'left', hi: 'बाईं ओर', pron: 'links', type: 'Adverb' },
        { w: 'ab', role: 'r-verb', en: '(prefix of abbiegen)', hi: 'मुड़ना', pron: 'ap', type: 'Separable prefix · Satzende', lexicalUnit: 'abbiegen' },
        { w: '.', plain: true }
      ], en: 'Turn left at the corner.', hi: 'Kone par baayin or muriye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Museum', role: 'r-subject', en: 'museum', hi: 'संग्रहालय', pron: 'mu-ZAY-um', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'rechten', role: 'r-dativ', en: 'right', hi: 'दाईं', pron: 'REKH-ten', type: 'Adjective · dative' },
        { w: 'Seite', role: 'r-dativ', en: 'side (dat.)', hi: 'ओर', pron: 'ZY-tuh', type: 'Noun · fem. dat.', why: 'auf der rechten Seite = on the right side (this chapter).', ex: 'auf der rechten Seite', exEn: 'on the right side' },
        { w: '?', plain: true }
      ], en: 'And the museum is then on the right side?', hi: 'Aur sangrahalay phir dayin or hoga?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gegenüber', role: 'r-preposition', en: 'opposite', hi: 'सामने', pron: 'gay-gen-Ü-ber', type: 'Preposition + dative' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Park', role: 'r-dativ', en: 'park (dat.)', hi: 'पार्क के', pron: 'park', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Exactly! It is opposite the park.', hi: 'Bilkul! Yeh park ke saamne hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Vielen', role: 'r-adjective', en: 'many', hi: 'बहुत', pron: 'FEE-len', type: 'Phrase' },
        { w: 'Dank', role: 'r-object', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Phrase' },
        { w: '!', plain: true }
      ], en: 'Many thanks!', hi: 'Bahut dhanyavaad!' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Spaß', role: 'r-akkusativ', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Museum', role: 'r-dativ', en: 'museum (dat.)', hi: 'संग्रहालय में', pron: 'mu-ZAY-um', type: 'Noun · neut. dat.' },
        { w: '!', plain: true }
      ], en: 'Gladly! Have fun in the museum!', hi: 'Khushi se! Sangrahalay mein maza kariye!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already know the grammar behind location \u2014 Dativ prepositions and Wechselpr\u00e4positionen (<span class="de r-question">Wo?</span> \u2192 Dativ). This chapter is about the <strong>words</strong> Germans actually reach for: <span class="de r-ortsangabe">links, rechts, geradeaus</span>, <span class="de r-ortsangabe">gegen\u00fcber, in der N\u00e4he, an der Ecke, am Ende der Stra\u00dfe</span>, <span class="de r-ortsangabe">auf der linken/rechten Seite</span>. And the phrases for giving directions: <span class="de r-ortsangabe">Gehen Sie geradeaus. Biegen Sie an der Ampel rechts ab.</span> No new case rule \u2014 just the vocabulary that makes you sound like someone who actually knows the city.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ORTSANGABEN (location expressions) and giving directions: links, rechts, geradeaus, gegen\u00fcber, in der N\u00e4he, an der Ecke, auf der linken/rechten Seite, am Ende der Stra\u00dfe, mitten in, innerhalb/au\u00dferhalb von. ' +
    'No new Wechselpr\u00e4position grammar \u2014 only recall Wo?\u2192Dativ if relevant. The learner described a location or gave directions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- links, rechts, geradeaus, hier, dort, da, oben, unten, vorne, hinten, innen, au\u00dfen, nebenan are plain adverbs \u2014 no preposition needed before them (do NOT write "links zu" or "nach links zu"; "nach links" or plain "links" is correct).\n' +
    '- gegen\u00fcber, in der N\u00e4he, au\u00dferhalb, innerhalb take von + Dativ: gegen\u00fcber von der Schule, in der N\u00e4he vom Bahnhof, au\u00dferhalb von Berlin.\n' +
    '- Fixed phrases: an der Ecke (not "an Ecke" \u2014 the article is required), am Ende der Stra\u00dfe, auf der linken/rechten Seite, bis zur Kreuzung, an der Ampel.\n' +
    '- Direction imperatives: Gehen Sie geradeaus. Biegen Sie rechts/links ab (abbiegen is separable, ab goes to the end).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Direction check:</b> one sentence on whether the location phrases and direction imperatives were natural.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You give directions like a local \u2014 links, rechts, an der Ecke, all natural. Next: ask indirectly with <span class="de">Indirekte Frage</span>.',
    mid: 'Good. Re-read the fixed-phrase card once (an der Ecke, in der N\u00e4he von), then continue.',
    low: 'Worth another pass \u2014 these are set phrases to memorise, not grammar to derive. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Gehen', role: 'r-ortsangabe' }, { w: 'Sie', role: 'r-subject' },
    { w: 'geradeaus', role: 'r-ortsangabe' }, { w: 'und', role: 'r-conjunction' },
    { w: 'biegen', role: 'r-ortsangabe' }, { w: 'Sie', role: 'r-subject' },
    { w: 'rechts', role: 'r-ortsangabe' }, { w: 'ab', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See what\u2019s new here: phrasing, not grammar.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A tourist asks the way to the Dom \u2014 directions in real time.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn every Ortsangabe: links, rechts, gegen\u00fcber, an der Ecke, in der N\u00e4he.' },
    { id: 'grammar',    label: 'Ortsangaben', tag: 'core',
      objective: 'Master the fixed phrases and the direction-giving cheat sheet.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a written direction to a caf\u00e9 \u2014 phrase after phrase.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow spoken directions through a small town.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your room, your street and give directions out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write directions to your home or school using these phrases.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the fixed phrases and common mistakes with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'Every Ortsangabe \u2014 links, rechts, gegen\u00fcber, an der Ecke, in der N\u00e4he, mitten in \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Direction-giving drills, fixed-phrase practice, and a directions-to-my-house task.',
      pdfUrl: '/pdfs/homework.pdf', size: '7 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The full Ortsangaben reference table, the direction-giving cheat sheet, and the Wo?/Wohin? recap.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'links, rechts, geradeaus', text: 'Give basic directions' },
    { de: 'gegen\u00fcber von, in der N\u00e4he von', text: 'Say where something is relative to another place' },
    { de: 'an der Ecke, am Ende der Stra\u00dfe', text: 'Use the fixed location phrases' },
    { de: 'Gehen Sie \u2026 Biegen Sie \u2026 ab.', text: 'Give directions with imperatives' },
    { de: 'auf der linken/rechten Seite', text: 'Say which side something is on' }
  ],

  // ---------- Vocabulary (this chapter's teaching content \u2014 review, no new word list uploaded) ----------
  vocab: [
    // ===== Core location adverbs =====
    { de: 'links', pos: 'adverb', en: 'left, on the left', hi: 'बाएँ', ex: 'Gehen Sie nach links.', exEn: 'Go to the left.' },
    { de: 'rechts', pos: 'adverb', en: 'right, on the right', hi: 'दाएँ', ex: 'Biegen Sie rechts ab.', exEn: 'Turn right.' },
    { de: 'geradeaus', pos: 'adverb', en: 'straight ahead', hi: 'सीधे', ex: 'Gehen Sie geradeaus bis zur Kreuzung.', exEn: 'Go straight ahead to the crossroads.' },
    { de: 'hier', pos: 'adverb', en: 'here', hi: 'यहाँ', ex: 'Von hier sieht man den Dom.', exEn: 'From here you can see the cathedral.' },
    { de: 'dort', pos: 'adverb', en: 'there', hi: 'वहाँ', ex: 'Dort steht die Bank.', exEn: 'The bank is there.' },
    { de: 'da', pos: 'adverb', en: 'there (closer, colloquial)', hi: 'वहाँ', ex: 'Da vorne ist die Ecke.', exEn: 'The corner is right there.' },
    { de: 'oben', pos: 'adverb', en: 'up, upstairs, at the top', hi: 'ऊपर', ex: 'Der Turm ist oben gr\u00f6\u00dfer als unten.', exEn: 'The tower is bigger at the top than at the bottom.' },
    { de: 'unten', pos: 'adverb', en: 'down, downstairs, at the bottom', hi: 'नीचे', ex: 'Die K\u00fcche ist unten.', exEn: 'The kitchen is downstairs.' },
    { de: 'vorne', pos: 'adverb', en: 'at the front', hi: 'सामने', ex: 'Der Dom steht vorne am Ende der Stra\u00dfe.', exEn: 'The cathedral stands at the front, at the end of the street.' },
    { de: 'hinten', pos: 'adverb', en: 'at the back', hi: 'पीछे', ex: 'Die Lampe steht hinten.', exEn: 'The lamp stands at the back.' },
    { de: 'innen', pos: 'adverb', en: 'inside, on the inside', hi: 'अंदर', ex: 'Innen ist es ruhiger als drau\u00dfen.', exEn: 'Inside it\u2019s calmer than outside.' },
    { de: 'au\u00dfen', pos: 'adverb', en: 'outside, on the outside', hi: 'बाहर', ex: 'Au\u00dfen ist das Geb\u00e4ude alt, innen modern.', exEn: 'Outside the building is old, inside modern.' },
    { de: 'nebenan', pos: 'adverb', en: 'next door', hi: 'बगल में', ex: 'Die Bank ist nebenan.', exEn: 'The bank is next door.' },
    // ===== Fixed location phrases (with von + Dativ / der + Dativ) =====
    { de: 'in der N\u00e4he', pos: 'phrase', en: 'nearby, in the vicinity (+ von)', hi: 'नज़दीक', ex: 'Der Parkplatz ist in der N\u00e4he vom Marktplatz.', exEn: 'The parking spot is near the market square.' },
    { de: 'gegen\u00fcber', pos: 'preposition', en: 'opposite (+ von + Dativ)', hi: 'सामने', ex: 'Der Dom liegt gegen\u00fcber von der Beh\u00f6rde.', exEn: 'The cathedral is opposite the authority.' },
    { de: 'zwischen', pos: 'preposition', en: 'between (+ Dativ for location)', hi: 'बीच में', ex: 'Das Caf\u00e9 liegt zwischen der Bank und dem Dom.', exEn: 'The cafe is between the bank and the cathedral.' },
    { de: 'neben', pos: 'preposition', en: 'next to (+ Dativ for location)', hi: 'के बगल', ex: 'Die Bank ist neben dem Caf\u00e9.', exEn: 'The bank is next to the cafe.' },
    { de: 'vor', pos: 'preposition', en: 'in front of (+ Dativ for location)', hi: 'के सामने', ex: 'Der Parkplatz ist vor der Beh\u00f6rde.', exEn: 'The parking spot is in front of the authority.' },
    { de: 'hinter', pos: 'preposition', en: 'behind (+ Dativ for location)', hi: 'के पीछे', ex: 'Der Garten ist hinter dem Haus.', exEn: 'The garden is behind the house.' },
    { de: '\u00fcber', pos: 'preposition', en: 'above, over (+ Dativ for location)', hi: 'के ऊपर', ex: 'Die Lampe h\u00e4ngt \u00fcber dem Tisch.', exEn: 'The lamp hangs above the table.' },
    { de: 'unter', pos: 'preposition', en: 'under, below (+ Dativ for location)', hi: 'के नीचे', ex: 'Der Schl\u00fcssel liegt unter dem Kissen.', exEn: 'The key lies under the cushion.' },
    { de: 'am Ende der Stra\u00dfe', pos: 'phrase', en: 'at the end of the street', hi: 'सड़क के अंत में', ex: 'Der Dom steht am Ende der Stra\u00dfe.', exEn: 'The cathedral stands at the end of the street.' },
    { de: 'an der Ecke', pos: 'phrase', en: 'at the corner', hi: 'कोने पर', ex: 'Biegen Sie an der Ecke rechts ab.', exEn: 'Turn right at the corner.' },
    { de: 'auf der linken Seite', pos: 'phrase', en: 'on the left side', hi: 'बाईं ओर', ex: 'Das Caf\u00e9 ist auf der linken Seite.', exEn: 'The cafe is on the left side.' },
    { de: 'auf der rechten Seite', pos: 'phrase', en: 'on the right side', hi: 'दाईं ओर', ex: 'Die Beh\u00f6rde ist auf der rechten Seite.', exEn: 'The authority is on the right side.' },
    { de: 'mitten in', pos: 'phrase', en: 'right in the middle of', hi: 'बीचोबीच', ex: 'Das Caf\u00e9 liegt mitten in der Innenstadt.', exEn: 'The cafe is right in the middle of the city centre.' },
    { de: 'au\u00dferhalb von', pos: 'phrase', en: 'outside of', hi: 'के बाहर', ex: 'Au\u00dferhalb von der Innenstadt ist es billiger.', exEn: 'Outside the city centre it\u2019s cheaper.' },
    { de: 'innerhalb von', pos: 'phrase', en: 'within', hi: 'के भीतर', ex: 'Innerhalb von zwei Minuten sind Sie da.', exEn: 'Within two minutes you\u2019re there.' },
    // ===== Giving directions =====
    { de: 'gehen', pos: 'verb', en: 'to go, to walk (imperative for directions)', hi: 'जाना', ex: 'Gehen Sie geradeaus.', exEn: 'Go straight ahead.', conj: { praesens: 'geht', praeteritum: 'ging', perfekt: 'ist gegangen' } },
    { de: 'abbiegen', pos: 'verb', en: 'to turn (separable, for directions)', hi: 'मुड़ना', ex: 'Biegen Sie an der Ampel links ab.', exEn: 'Turn left at the traffic light.', conj: { praesens: 'biegt ab', praeteritum: 'bog ab', perfekt: 'ist abgebogen' } },
    { de: 'die Ampel', art: 'die', gender: 'f', plural: 'Ampeln', pos: 'noun', en: 'traffic light', hi: 'ट्रैफ़िक लाइट', ex: 'An der Ampel gehen Sie links.', exEn: 'At the traffic light go left.' },
    { de: 'die Ecke', art: 'die', gender: 'f', plural: 'Ecken', pos: 'noun', en: 'corner', hi: 'कोना', ex: 'An der Ecke ist eine Bank.', exEn: 'At the corner there\u2019s a bank.' },
    { de: 'bis zur Kreuzung', pos: 'phrase', en: 'up to the crossroads', hi: 'चौराहे तक', ex: 'Gehen Sie geradeaus bis zur Kreuzung.', exEn: 'Go straight to the crossroads.' },
    { de: 'die Wegbeschreibung', art: 'die', gender: 'f', plural: 'Wegbeschreibungen', pos: 'noun', en: 'directions', hi: 'रास्ते के निर्देश', ex: 'Danke f\u00fcr die Wegbeschreibung!', exEn: 'Thanks for the directions!' },
    { de: 'ortskundig', pos: 'adjective', en: 'knowing the area, familiar with the local streets', hi: 'स्थानीय जानकार', ex: 'Der Taxifahrer ist sehr ortskundig.', exEn: 'The taxi driver knows the area very well.' }
  ],

  // ---------- Ortsangaben (rule cards) ----------
  grammar: [
    {
      title: 'Core location adverbs \u2014 no preposition needed',
      goldenRule: 'These adverbs stand <b>alone</b> \u2014 no preposition, no article.',
      memoryTrick: '<b>links / rechts / geradeaus</b> ke saath kuch nahi lagta. "links zu" jaisa kuch nahi hota \u2014 bas <b>links</b>, ya <b>nach links</b>.',
      body: [
        'These small adverbs stand alone \u2014 no <span class="de">zu</span>, no article. They\u2019re the backbone of everyday directions.'
      ],
      table: {
        head: ['Direction', 'Position'],
        rows: [
          ['<span class="de r-ortsangabe">links</span> (left)', '<span class="de r-ortsangabe">oben</span> (up top)'],
          ['<span class="de r-ortsangabe">rechts</span> (right)', '<span class="de r-ortsangabe">unten</span> (down below)'],
          ['<span class="de r-ortsangabe">geradeaus</span> (straight ahead)', '<span class="de r-ortsangabe">vorne</span> (at the front)'],
          ['<span class="de r-ortsangabe">hier / dort / da</span> (here / there)', '<span class="de r-ortsangabe">hinten</span> (at the back)']
        ]
      },
      note: '<b>links</b> and <b>rechts</b> never take <em>zu</em>: say <span class="de">nach links</span> or just <span class="de">links</span>, never "links zu".',
      hinglish: 'Yeh chhote adverbs akele khade rehte hain \u2014 na zu, na article. links/rechts ke saath "zu" mat lagao: "nach links" ya bas "links".'
    },
    {
      title: 'Fixed location phrases',
      goldenRule: 'Learn these as <b>whole units</b>, not word by word.',
      memoryTrick: 'Inhe ek shabd ki tarah yaad karo: <b>an der Ecke</b>, <b>in der N\u00e4he von</b>, <b>gegen\u00fcber von</b>, <b>am Ende der Stra\u00dfe</b>. Article kabhi mat girao \u2014 "an Ecke" galat hai.',
      body: [
        'These phrases take a fixed shape \u2014 memorise them as whole units rather than building them word by word.'
      ],
      table: {
        head: ['Phrase', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-ortsangabe">gegen\u00fcber von</span>', 'opposite', '<span class="de">gegen\u00fcber von der Schule</span>'],
          ['<span class="de r-ortsangabe">in der N\u00e4he von</span>', 'near', '<span class="de">in der N\u00e4he vom Bahnhof</span>'],
          ['<span class="de r-ortsangabe">an der Ecke</span>', 'at the corner', '<span class="de">an der Ecke</span> (article always there!)'],
          ['<span class="de r-ortsangabe">am Ende der Stra\u00dfe</span>', 'at the end of the street', '<span class="de">am Ende der Stra\u00dfe</span>'],
          ['<span class="de r-ortsangabe">auf der linken/rechten Seite</span>', 'on the left/right side', '<span class="de">auf der linken Seite</span>']
        ]
      },
      note: 'Two more: <span class="de r-ortsangabe">mitten in</span> (right in the middle of), and <span class="de r-ortsangabe">au\u00dferhalb von / innerhalb von</span> (outside of / within).',
      hinglish: 'Yeh phrases fixed shape mein yaad karo: gegen\u00fcber von, in der N\u00e4he von, an der Ecke (article kabhi mat bhoolna!), am Ende der Stra\u00dfe, auf der linken/rechten Seite.'
    },
    {
      title: 'Giving directions \u2014 the cheat sheet',
      goldenRule: '<b>abbiegen</b> is separable \u2014 the <b>ab</b> goes to the very end.',
      formula: [
        'Biegen Sie an der Ecke links <b>ab</b>.',
        '                              \u2191 prefix last'
      ],
      memoryTrick: 'Separable verb ka purana rule (A1 Ch25) yahan phir kaam aata hai: prefix <b>ab</b> end tak jaata hai.',
      body: [
        'A short set of imperatives covers almost every direction you\u2019ll ever give.'
      ],
      table: {
        head: ['Instruction', 'Example'],
        rows: [
          ['go straight', '<span class="de r-ortsangabe">Gehen Sie geradeaus.</span>'],
          ['turn (separable!)', '<span class="de r-ortsangabe">Biegen Sie rechts ab.</span>'],
          ['at the traffic light', '<span class="de r-ortsangabe">An der Ampel links.</span>'],
          ['up to the crossroads', '<span class="de r-ortsangabe">Bis zur Kreuzung.</span>']
        ]
      },
      note: '<b>abbiegen</b> is separable: the <em>ab</em> goes to the very end \u2014 <span class="de">Biegen Sie an der Ecke links <b>ab</b>.</span>',
      hinglish: 'Direction dene ke liye chhota set: Gehen Sie geradeaus. Biegen Sie rechts ab (abbiegen separable hai, ab sentence ke end mein jaata hai). An der Ampel links. Bis zur Kreuzung.'
    },
    {
      title: 'Quick recap: Wo? \u2192 Dativ, Wohin? \u2192 Akkusativ',
      body: [
        'You learned this fully in Ch.14 \u2014 here it\u2019s just a reminder, since these location phrases almost always describe <em>where something is</em>.'
      ],
      table: {
        head: ['Question', 'Case', 'Example'],
        rows: [
          ['<span class="de r-question">Wo?</span> (location)', 'Dativ', '<span class="de">Der Dom liegt neben <span class="r-dativ">der</span> Beh\u00f6rde.</span>'],
          ['<span class="de r-question">Wohin?</span> (movement)', 'Akkusativ', '<span class="de">Ich gehe neben <span class="r-akkusativ">die</span> Beh\u00f6rde.</span>']
        ]
      },
      note: 'Most Ortsangaben in this chapter describe location \u2014 so you\u2019ll see Dativ far more often than Akkusativ.',
      hinglish: 'Chapter 14 se yaad karo: <b>Wo?</b> ka jawaab Dativ mein aata hai aur <b>Wohin?</b> ka Akkusativ mein. Is chapter mein zyada-tar baat location ki ho rahi hai, isliye tumhe Dativ zyada dikhega.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four Ortsangaben traps to avoid.' ],
      mistakes: [
        { wrong: 'Gehen Sie links zu.', right: 'Gehen Sie nach links.', why: 'links/rechts never take zu \u2014 use nach links/rechts, or just links/rechts alone.' },
        { wrong: 'Die Bank ist neben von dem Caf\u00e9.', right: 'Die Bank ist neben dem Caf\u00e9.', why: 'neben already takes a case directly \u2014 don\u2019t add von.' },
        { wrong: 'Gehen Sie gerade.', right: 'Gehen Sie geradeaus.', why: 'geradeaus is the whole word for "straight ahead" \u2014 don\u2019t shorten it to gerade.' },
        { wrong: 'An Ecke ist eine Bank.', right: 'An der Ecke ist eine Bank.', why: 'an der Ecke always keeps its article \u2014 never drop it.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>links</b> aur <b>rechts</b> ke saath <b>zu</b> nahi lagta. <b>neben</b> ke saath <b>von</b> nahi jodna hai. \u201cgerade\u201d nahi, poora <b>geradeaus</b> bolna hai. Aur <b>an der Ecke</b> mein article chhodna nahi hai.'
    }
  ],

  // ---------- Reading passage (Wegbeschreibung zu meinem Lieblingscaf\u00e9, clickable) ----------
  reading: {
    title: 'Wegbeschreibung zu meinem Lieblingscaf\u00e9',
    titleEn: 'Directions to my favourite cafe',
    tokens: [
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Lieblingscaf\u00e9', role: 'r-subject', en: 'favourite cafe', hi: 'पसंदीदा कैफ़े', pron: 'LEEP-lings-ka-fay', type: 'Noun \u00b7 neut.', why: 'compound: das Lieblingscaf\u00e9 (this chapter).', ex: 'mein Lieblingscaf\u00e9', exEn: 'my favourite cafe' },
      { w: 'liegt', role: 'r-verb', en: 'is (located)', hi: 'है', pron: 'leekt', type: 'Verb \u00b7 liegen', why: 'liegen \u2014 position verb (recycled \u2014 Positionsverben Ch.15).', ex: 'Es liegt mitten in der Stadt.', exEn: 'It\u2019s right in the middle of town.' },
      { w: 'mitten', role: 'r-ortsangabe', en: 'right in the middle', hi: 'बीचोबीच', pron: 'MI-ten', type: 'Adverb \u00b7 Ortsangabe' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Altstadt', role: 'r-dativ', en: 'old town', hi: 'पुराना शहर', pron: 'ALT-shtat', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Altstadt (this chapter usage).', ex: 'die Altstadt', exEn: 'the old town' },
      { w: '.', plain: true },
      { w: 'Von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition \u00b7 Dativ' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Sprachschule', role: 'r-dativ', en: 'language school', hi: 'भाषा स्कूल', pron: 'SHPRAHKH-shoo-luh', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Sprachschule (recycled \u2014 A1).', ex: 'von der Sprachschule', exEn: 'from the language school' },
      { w: 'gehen', role: 'r-ortsangabe', en: 'go', hi: 'जाइए', pron: 'GAY-en', type: 'Verb \u00b7 giving directions' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'geradeaus', role: 'r-ortsangabe', en: 'straight ahead', hi: 'सीधे', pron: 'guh-RAH-duh-ows', type: 'Adverb \u00b7 Ortsangabe' },
      { w: 'bis', role: 'r-ortsangabe', en: 'up to', hi: 'तक', pron: 'bis', type: 'Preposition \u00b7 Ortsangabe', why: 'bis zur Kreuzung (this chapter).', ex: 'bis zur Kreuzung', exEn: 'up to the crossroads' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'तक', pron: 'tsoor', type: 'Kontraktion \u00b7 zu + der', why: 'zu + der \u2192 zur (recycled \u2014 Dativ-Pr\u00e4p. Ch.13).', ex: 'bis zur Kreuzung', exEn: 'up to the crossroads' },
      { w: 'Kreuzung', role: 'r-dativ', en: 'crossroads', hi: 'चौराहा', pron: 'KROY-tsung', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Kreuzung (recycled \u2014 Positionsverben Ch.15).', ex: 'bis zur Kreuzung', exEn: 'up to the crossroads' },
      { w: '.', plain: true },
      { w: 'Biegen', role: 'r-ortsangabe', en: 'turn', hi: 'मुड़िए', pron: 'BEE-gen', type: 'Verb \u00b7 giving directions' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'links', role: 'r-ortsangabe', en: 'left', hi: 'बाएँ', pron: 'links', type: 'Adverb \u00b7 Ortsangabe' },
      { w: 'ab', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'ap', type: 'Prefix \u00b7 abbiegen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'gehen', role: 'r-ortsangabe', en: 'go', hi: 'जाइए', pron: 'GAY-en', type: 'Verb \u00b7 giving directions' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'am', role: 'r-ortsangabe', en: 'past the', hi: 'से होकर', pron: 'am', type: 'Preposition' },
      { w: 'Rathaus', role: 'r-object', en: 'town hall', hi: 'नगर भवन', pron: 'RAHT-hows', type: 'Noun \u00b7 neut.', why: 'das Rathaus (this chapter).', ex: 'am Rathaus vorbei', exEn: 'past the town hall' },
      { w: 'vorbei', role: 'r-ortsangabe', en: 'past', hi: 'से होकर', pron: 'for-BY', type: 'Adverb', why: 'an \u2026 vorbei (recycled \u2014 Goethe Mini 2 Ch.16).', ex: 'am Rathaus vorbei', exEn: 'past the town hall' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Caf\u00e9', role: 'r-subject', en: 'cafe', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun \u00b7 neut.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'gegen\u00fcber', role: 'r-ortsangabe', en: 'opposite', hi: 'सामने', pron: 'gay-gen-\u00dc-ber', type: 'Preposition \u00b7 Ortsangabe' },
      { w: 'von', role: 'r-preposition', en: 'of', hi: 'के', pron: 'fon', type: 'Preposition \u00b7 Dativ' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Rathaus', role: 'r-dativ', en: 'town hall', hi: 'नगर भवन', pron: 'RAHT-hows', type: 'Noun \u00b7 neut. \u00b7 dat.' },
      { w: ',', plain: true },
      { w: 'auf', role: 'r-ortsangabe', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition \u00b7 Ortsangabe' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'rechten', role: 'r-ortsangabe', en: 'right (dat.)', hi: 'दाईं', pron: 'REKH-ten', type: 'Adjective \u00b7 Ortsangabe' },
      { w: 'Seite', role: 'r-ortsangabe', en: 'side', hi: 'ओर', pron: 'ZY-tuh', type: 'Noun \u00b7 fem. \u00b7 Ortsangabe' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'genauso', role: 'r-vergleich', en: 'just as', hi: 'बिल्कुल उतना', pron: 'guh-NOW-zo', type: 'Comparison', why: 'genauso ... wie (recycled \u2014 als/wie Ch.9).', ex: 'genauso gem\u00fctlich wie zu Hause', exEn: 'just as cosy as at home' },
      { w: 'gem\u00fctlich', role: 'r-adjective', en: 'cosy', hi: 'आरामदायक', pron: 'guh-M\u00dcT-likh', type: 'Adjective \u00b7 Positiv' },
      { w: 'wie', role: 'r-vergleich', en: 'as', hi: 'जैसा', pron: 'vee', type: 'Comparison' },
      { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition \u00b7 Dativ' },
      { w: 'Hause', role: 'r-dativ', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun \u00b7 dative', why: 'zu Hause (recycled \u2014 Modalverben Pr\u00e4t. Ch.6).', ex: 'zu Hause', exEn: 'at home' },
      { w: '.', plain: true }
    ],
    translation: 'My favourite cafe is right in the middle of the old town. From the language school, go straight ahead to the crossroads. Turn left and walk past the town hall. The cafe is opposite the town hall, on the right side. It\u2019s just as cosy as at home. \u2014 Count the Ortsangaben: mitten in, geradeaus, bis zur Kreuzung, links, am Rathaus vorbei, gegen\u00fcber von, auf der rechten Seite \u2014 the whole reference table at work.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_018_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frauke, wo ist die nächste Apotheke?', en: 'Frauke, where is the nearest pharmacy?' },
      { id: 'A2_018_L002', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Geh geradeaus und dann links an der Ampel.', en: 'Go straight ahead and then left at the traffic light.' },
      { id: 'A2_018_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der Bahnhof?', en: 'And the station?' },
      { id: 'A2_018_L004', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der ist rechts, direkt hinter der Kirche.', en: 'That\'s on the right, right behind the church.' }
    ],
    transcript: 'Frauke, wo ist die nächste Apotheke? Geh geradeaus und dann links an der Ampel. Und der Bahnhof? Der ist rechts, direkt hinter der Kirche.',
    translation: 'Frauke, where is the nearest pharmacy? Go straight ahead and then left at the traffic light. And the station? That\'s on the right, right behind the church.',
    tokens: [
      { w: 'Frauke' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'nächste' },
      { w: 'Apotheke' },
      { w: '?', plain: true },
      { w: 'Geh' },
      { w: 'geradeaus' },
      { w: 'und' },
      { w: 'dann' },
      { w: 'links' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Ampel' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'Bahnhof' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'ist' },
      { w: 'rechts' },
      { w: ',', plain: true },
      { w: 'direkt' },
      { w: 'hinter' },
      { w: 'der' },
      { w: 'Kirche' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo muss Timo zur Apotheke abbiegen?', qEn: 'Where should Timo turn for the pharmacy?', options: ['rechts', 'links an der Ampel', 'geradeaus weiter', 'zurück'], optionsEn: ['right', 'left at the traffic lights', 'carry on straight ahead', 'back'], answer: 1,
        explain: '"Geh geradeaus und dann links an der Ampel."' },
      { q: 'Wo ist der Bahnhof?', qEn: 'Where is the station?', options: ['links von der Apotheke', 'hinter der Kirche', 'vor der Schule', 'neben dem Park'], optionsEn: ['to the left of the pharmacy', 'behind the church', 'in front of the school', 'next to the park'], answer: 1,
        explain: '"Der ist rechts, direkt hinter der Kirche."' }
    ]
  },

  speaking: [
    { task: "Dein Gast fragt: Wo ist das Bad?", taskEn: "Your guest asks: where's the bathroom?", de: "Das Bad ist oben, gegenüber der Küche.", en: "The bathroom is upstairs, opposite the kitchen." },
    { task: "Ein Tourist fragt: Wo ist die Apotheke?", taskEn: "A tourist asks: where's the pharmacy?", de: "Gehen Sie geradeaus. Die Apotheke ist am Ende der Straße.", en: "Go straight on. The pharmacy is at the end of the street." },
    { task: "Deine Freundin fragt: Wo wohnst du genau?", taskEn: "Your friend asks: where exactly do you live?", de: "Ich wohne hier in der Nähe, zwischen dem Park und der Post.", en: "I live nearby, between the park and the post office." },
    { task: "Dein Freund sucht dich im Café. Sag, wo du sitzt.", taskEn: "Your friend is looking for you in the café. Say where you're sitting.", de: "Ich sitze hinten, neben dem Fenster.", en: "I'm sitting at the back, next to the window." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write directions (six sentences) from your school or workplace to your home, or describe your neighbourhood. Use at least four Ortsangaben from this chapter: e.g. links, rechts, geradeaus, gegen\u00fcber von, in der N\u00e4he von, an der Ecke, auf der linken/rechten Seite, mitten in.',
    starters: ['Gehen Sie geradeaus, dann \u2026', 'Mein Haus liegt gegen\u00fcber von \u2026', 'In der N\u00e4he ist \u2026', 'An der Ecke \u2026'],
    placeholder: 'Von der Schule gehen Sie geradeaus bis zur Kreuzung. Dann biegen Sie rechts ab \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct phrase: "___ ist eine Bank." (At the corner)',
      options: ['An Ecke', 'An der Ecke', 'Auf der Ecke', 'In der Ecke'],
      answer: 1,
      explain: 'an der Ecke is a fixed phrase \u2014 the article is never dropped.'
    },
    gap: {
      // core adverb (no preposition) then von + Dativ phrase
      sentence: ['Gehen Sie ', ' bis zur Kreuzung, dann ist die Schule ', ' vom Bahnhof.'],
      gaps: [ { answer: 'geradeaus', accepts: ['geradeaus'] }, { answer: 'in der N\u00e4he', accepts: ['in der nähe', 'in der Nähe'] } ],
      explain: 'geradeaus stands alone; in der N\u00e4he von + Dativ is a fixed phrase.'
    },
    match: {
      q: 'Match each Ortsangabe to its meaning.',
      pairs: [
        { noun: 'links', art: 'left' },
        { noun: 'gegen\u00fcber von', art: 'opposite' },
        { noun: 'an der Ecke', art: 'at the corner' },
        { noun: 'mitten in', art: 'right in the middle of' },
        { noun: 'au\u00dferhalb von', art: 'outside of' }
      ]
    },
    builder: {
      target: 'Build: "Turn right at the corner."',
      bank: ['Biegen', 'Sie', 'an', 'der', 'Ecke', 'rechts', 'ab'],
      answer: ['Biegen', 'Sie', 'an', 'der', 'Ecke', 'rechts', 'ab'],
      roles: { 'Biegen': 'r-ortsangabe', 'Sie': 'r-subject', 'an': 'r-ortsangabe', 'der': 'r-dativ', 'Ecke': 'r-ortsangabe', 'rechts': 'r-ortsangabe', 'ab': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is correct?', options: ['Gehen Sie links zu.', 'Gehen Sie nach links.', 'Gehen Sie zu links.', 'Gehen Sie links von.'], answer: 1,
      explain: 'links/rechts never take zu \u2014 nach links is correct.' },
    { q: '"an der Ecke" means:', options: ['at the end of the street', 'at the corner', 'opposite', 'straight ahead'], answer: 1,
      explain: 'an der Ecke = at the corner \u2014 a fixed phrase with the article.' },
    { q: 'Which preposition means "opposite"?', options: ['neben', 'gegen\u00fcber', 'hinter', 'zwischen'], answer: 1,
      explain: 'gegen\u00fcber (von) = opposite.' },
    { q: 'abbiegen is separable. Where does "ab" go?', options: ['right after biegen', 'at the end of the clause', 'before Sie', 'it doesn\u2019t change position'], answer: 1,
      explain: 'Separable verbs send their prefix to the end: Biegen Sie rechts ab.' },
    { q: 'Which phrase means "within two minutes"?', options: ['au\u00dferhalb von zwei Minuten', 'innerhalb von zwei Minuten', 'mitten in zwei Minuten', 'gegen\u00fcber von zwei Minuten'], answer: 1,
      explain: 'innerhalb von = within.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-ortsangabe', html: 'Core adverbs stand alone \u2014 no preposition: <span class="de r-ortsangabe">links, rechts, geradeaus, hier, dort, oben, unten, vorne, hinten</span>.' },
    { c: 'r-ortsangabe', html: 'Fixed phrases to memorise as units: <span class="de r-ortsangabe">gegen\u00fcber von, in der N\u00e4he von, an der Ecke, am Ende der Stra\u00dfe, auf der linken/rechten Seite</span>.' },
    { c: 'r-ortsangabe', html: 'Giving directions: <span class="de r-ortsangabe">Gehen Sie geradeaus. Biegen Sie rechts ab.</span> (abbiegen is separable \u2014 ab goes last.)' }
  ],
  revisionTips: [
    'links/rechts never take zu; geradeaus is never shortened to gerade.',
    'Memorise the fixed phrases as whole units \u2014 an der Ecke keeps its article, always.',
    'For directions: Gehen Sie geradeaus / Biegen Sie \u2026 ab / An der Ampel / Bis zur Kreuzung.'
  ]
};

window.CHAPTER = CHAPTER;
