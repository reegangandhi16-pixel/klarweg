/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 38
   "Wechselpräpositionen"  (two-way prepositions)
   Vocabulary source: uploaded chapter-38 word list (132 words).
   Theme = a new flat: rooms, furniture, where things go.
   Recycles Ch1–37. NOTE: content only — existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-38-wechselpraep',
  phase: 'A1 · Phase 5',
  number: 38,
  title: 'Wechselpräpositionen',
  titleEn: 'Two-Way Prepositions',
  description: 'Nine prepositions that swing both ways. in, auf, an, unter, über, vor, hinter, neben, zwischen take the accusative for MOVEMENT (Wohin? — Ich lege das Buch auf den Tisch) and the dative for LOCATION (Wo? — Das Buch liegt auf dem Tisch). One question tells you the case.',
  xp: 190,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 39, title: 'Ortsangaben & Kurzformen', titleEn: 'Places & Contractions' , href: 'chapter-a1-39-ortsangaben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Franzi has a new flat and Basti is helping her move in. As they decide where the sofa, the lamp and the pictures go, the two-way prepositions come alive: putting things somewhere is accusative (Wohin?), and where they already sit is dative (Wo?).',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear in den (motion) vs in dem (place) side by side'
    ],
    scene: 'Umzug \u2014 Franzis neue Wohnung, Berlin',
    femaleSpeakers: ['Franzi'],
    dialogue: [
      { speaker: 'Franzi', tokens: [
        { w: 'Stell', role: 'r-verb', en: 'put', hi: 'रखो', pron: 'shtel', type: 'Verb · stellen (imperative)', why: 'stellen + accusative = to put (movement); this chapter.', ex: 'Stell den Stuhl in die Küche!', exEn: 'Put the chair into the kitchen!' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Stuhl', role: 'r-akkusativ', en: 'chair', hi: 'कुर्सी', pron: 'shtool', type: 'Noun · masc.' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Preposition · Wechselpräp', why: 'in + accusative = movement into (this chapter).', ex: 'Stell den Stuhl in die Küche!', exEn: 'Put the chair into the kitchen!' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Küche', role: 'r-akkusativ', en: 'kitchen', hi: 'रसोई', pron: 'KÜ-khuh', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'Please put the chair into the kitchen!', hi: 'Kripya kursi rasoi mein rakh do!' },
      { speaker: 'Basti', side: 'right', tokens: [
        { w: 'Okay', role: 'r-subject', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Tisch', role: 'r-subject', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc.' },
        { w: '?', plain: true },
        { w: 'Steht', role: 'r-verb', en: 'does it stand', hi: 'रहेगी', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen + dative = to be positioned (state, this chapter).', ex: 'Der Tisch steht im Zimmer.', exEn: 'The table stands in the room.' },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'im', role: 'r-preposition', en: 'in the (dat.)', hi: 'में', pron: 'im', type: 'Preposition · Wechselpräp', why: 'in + dative = a fixed position (this chapter).', ex: 'Er steht im Zimmer.', exEn: 'It stands in the room.' },
        { w: 'Wohnzimmer', role: 'r-dativ', en: 'living room (dat.)', hi: 'बैठक में', pron: 'VOHN-tsi-mer', type: 'Noun · neut. dat.' },
        { w: '?', plain: true }
      ], en: 'Okay. And the table? Does it stand in the living room?', hi: 'Theek hai. Aur mez? Kya woh living room mein rahegi?' },
      { speaker: 'Franzi', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'stell', role: 'r-verb', en: 'put', hi: 'रखो', pron: 'shtel', type: 'Verb · stellen (imperative)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'vor', role: 'r-preposition', en: 'in front of', hi: 'के सामने', pron: 'for', type: 'Preposition · Wechselpräp', why: 'vor + accusative = movement in front of (this chapter).', ex: 'Stell ihn vor das Sofa!', exEn: 'Put it in front of the sofa!' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Sofa', role: 'r-akkusativ', en: 'sofa', hi: 'सोफ़ा', pron: 'ZO-fa', type: 'Noun · neut.' },
        { w: '!', plain: true }
      ], en: 'Yes, put it in front of the sofa!', hi: 'Haan, use sofa ke saamne rakh do!' },
      { speaker: 'Basti', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wohin', role: 'r-question', en: 'where (movement)', hi: 'कहाँ', pron: 'vo-HIN', type: 'Question word', why: 'wohin? asks about a destination (this chapter).', ex: 'Wohin stelle ich das Bett?', exEn: 'Where do I put the bed?' },
        { w: 'stelle', role: 'r-verb', en: 'do I put', hi: 'रखूं', pron: 'SHTE-luh', type: 'Verb · stellen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Bett', role: 'r-akkusativ', en: 'bed', hi: 'बिस्तर', pron: 'bet', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Good. And where do I put the bed?', hi: 'Achha. Aur bistar kahaan rakhoon?' },
      { speaker: 'Franzi', tokens: [
        { w: 'Stell', role: 'r-verb', en: 'put', hi: 'रखो', pron: 'shtel', type: 'Verb · stellen (imperative)' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Preposition · Wechselpräp' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Schlafzimmer', role: 'r-akkusativ', en: 'bedroom', hi: 'शयनकक्ष', pron: 'SHLAHF-tsi-mer', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Please put it into the bedroom.', hi: 'Kripya use bedroom mein rakh do.' },
      { speaker: 'Basti', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Bild', role: 'r-subject', en: 'picture', hi: 'तस्वीर', pron: 'bilt', type: 'Noun · neut.' },
        { w: '?', plain: true },
        { w: 'Hänge', role: 'r-verb', en: 'shall I hang', hi: 'लटकाऊं', pron: 'HENG-uh', type: 'Verb · hängen (ich)', why: 'hängen + accusative = to hang (movement, this chapter).', ex: 'Ich hänge das Bild an die Wand.', exEn: 'I hang the picture on the wall.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'an', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'an', type: 'Preposition · Wechselpräp', why: 'an + accusative = movement onto a vertical surface (this chapter).', ex: 'an die Wand', exEn: 'onto the wall' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Wand', role: 'r-akkusativ', en: 'wall', hi: 'दीवार', pron: 'vant', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'And the picture? Shall I hang it on the wall?', hi: 'Aur tasveer? Kya main use deewar par lataka doon?' },
      { speaker: 'Franzi', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SHPAY-ter', type: 'Adverb · time' },
        { w: 'hängt', role: 'r-verb', en: 'it hangs', hi: 'लटकी रहेगी', pron: 'hengt', type: 'Verb · hängen', why: 'hängen + dative = the state of hanging (this chapter).', ex: 'Es hängt an der Wand.', exEn: 'It hangs on the wall.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'वह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'an', role: 'r-preposition', en: 'on the (dat.)', hi: 'पर', pron: 'an', type: 'Preposition · Wechselpräp' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Wand', role: 'r-dativ', en: 'wall (dat.)', hi: 'दीवार पर', pron: 'vant', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, please! Later it hangs on the wall then.', hi: 'Haan, kripya! Phir yeh deewar par latki rahegi.' },
      { speaker: 'Basti', side: 'right', tokens: [
        { w: 'Alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · acc.' },
        { w: 'klar', role: 'r-adverb', en: 'clear', hi: 'साफ़', pron: 'klahr', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाता हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Stuhl', role: 'r-akkusativ', en: 'chair', hi: 'कुर्सी', pron: 'shtool', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'All clear! I bring the chair now.', hi: 'Sab saaf! Ab main kursi laata hoon.' },
      { speaker: 'Franzi', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Wohnung', role: 'r-subject', en: 'flat', hi: 'फ़्लैट', pron: 'VOH-nung', type: 'Noun · fem.' },
        { w: 'sieht', role: 'r-verb', en: 'looks', hi: 'दिखती है', pron: 'zeet', type: 'Verb · sehen (sie)' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छी', pron: 'shern', type: 'Adjective' },
        { w: 'aus', role: 'r-verb', en: '(prefix of aussehen)', hi: 'दिखना', pron: 'ows', type: 'Separable prefix · Satzende', lexicalUnit: 'aussehen' },
        { w: '.', plain: true }
      ], en: 'Thanks! The flat will soon look nice.', hi: 'Dhanyavaad! Flat jald achha dikhega.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Nine prepositions can take <strong>either</strong> case: <span class="de r-preposition">in, auf, an, unter, über, vor, hinter, neben, zwischen</span>. One question decides which. <span class="de r-question">Wohin?</span> (where to? \u2014 movement) → <strong>accusative</strong>: <span class="de">Ich lege das Buch auf <span class="r-akkusativ">den</span> Tisch.</span> <span class="de r-question">Wo?</span> (where? \u2014 location) → <strong>dative</strong>: <span class="de">Das Buch liegt auf <span class="r-dativ">dem</span> Tisch.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is TWO-WAY PREPOSITIONS (Wechselpräpositionen): in, an, auf, über, unter, vor, hinter, neben, zwischen \u2014 accusative for movement (Wohin?), dative for location (Wo?). ' +
    'The learner wrote sentences placing/locating things below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The nine two-way prepositions: in, an, auf, über, unter, vor, hinter, neben, zwischen.\n' +
    '- MOVEMENT toward a goal (answers Wohin?) → ACCUSATIVE: "Ich lege das Buch auf den Tisch." (der→den, das→das, die→die, plural→die).\n' +
    '- LOCATION / no change of place (answers Wo?) → DATIVE: "Das Buch liegt auf dem Tisch." (der→dem, die→der, das→dem, plural→den +n).\n' +
    '- Motion verbs that take accusative here: legen, stellen, setzen, hängen (transitive), gehen, kommen, fahren INTO a place. Position verbs that take dative: liegen, stehen, sitzen, hängen (intransitive), sein, bleiben, wohnen.\n' +
    '- Contractions: in dem→im, an dem→am, in das→ins, an das→ans. Use them.\n' +
    '- Do not confuse with the always-accusative (durch, für, ohne, gegen, um) or always-dative (aus, bei, mit, nach, seit, von, zu) prepositions.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Case check:</b> one sentence on whether movement→accusative and location→dative were applied correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — Wohin? → accusative, Wo? → dative, every time. On to <span class="de">Ortsangaben & Kurzformen</span>.',
    mid: 'Good. Re-read the Wohin?/Wo? card once, then continue.',
    low: 'Worth another pass — drill movement→accusative vs location→dative in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-article' }, { w: 'Buch', role: 'r-subject' },
    { w: 'liegt', role: 'r-verb' }, { w: 'auf', role: 'r-preposition' },
    { w: 'dem', role: 'r-dativ' }, { w: 'Tisch', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how one question — Wohin? or Wo? — picks the case.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Move into Franzi\u2019s new flat — hear an die Wand (motion) vs an der Wand (place).' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the two-way prepositions plus home, furniture, colour and city words.' },
    { id: 'grammar',    label: 'Two-way prepositions', tag: 'core',
      objective: 'Master Wohin?→accusative vs Wo?→dative, the position/motion verbs, and the contractions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a "my flat" text full of two-way prepositions and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch where things are and where they go, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say where something is and where you put it, using Wo? and Wohin?.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Describe your room with two-way prepositions and correct cases.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill case choice (accusative vs dative) and prepositions with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The two-way prepositions plus home, furniture, colour and city words with examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Wohin?/Wo? case-choice drills, room descriptions, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The nine two-way prepositions, movement→accusative / location→dative, position verbs, contractions, Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wohin? → Akkusativ', text: 'Use accusative for movement' },
    { de: 'Wo? → Dativ', text: 'Use dative for location' },
    { de: 'auf den / auf dem Tisch', text: 'Switch the case with the question' },
    { de: 'legen/stellen vs liegen/stehen', text: 'Pair motion and position verbs' },
    { de: 'im, am, ins, ans', text: 'Use the contractions' }
  ],

  // ---------- Vocabulary (132 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'an', pos: 'preposition', en: 'at, on (vertical)', hi: 'के पास, पर', ex: 'Das Bild hängt an der Wand.', exEn: 'The picture hangs on the wall.' },
    { de: 'auf', pos: 'preposition', en: 'on (horizontal)', hi: 'के ऊपर', ex: 'Das Buch liegt auf dem Tisch.', exEn: 'The book lies on the table.' },
    { de: 'blau', pos: 'adjective', en: 'blue', hi: 'नीला', ex: 'Das Sofa ist blau.', exEn: 'The sofa is blue.' },
    { de: 'Bad', art: 'das', gender: 'n', plural: 'Bäder', pos: 'noun', en: 'bathroom', hi: 'स्नानघर', ex: 'Das Bad ist klein.', exEn: 'The bathroom is small.' },
    { de: 'Bett', art: 'das', gender: 'n', plural: 'Betten', pos: 'noun', en: 'bed', hi: 'बिस्तर', ex: 'Das Bett steht im Schlafzimmer.', exEn: 'The bed is in the bedroom.' },
    { de: 'Haus', art: 'das', gender: 'n', plural: 'Häuser', pos: 'noun', en: 'house', hi: 'घर', ex: 'Das Haus ist groß.', exEn: 'The house is big.' },
    { de: 'Schlafzimmer', art: 'das', gender: 'n', plural: 'Schlafzimmer', pos: 'noun', en: 'bedroom', hi: 'शयनकक्ष', ex: 'Das Bett ist im Schlafzimmer.', exEn: 'The bed is in the bedroom.' },
    { de: 'Sofa', art: 'das', gender: 'n', plural: 'Sofas', pos: 'noun', en: 'sofa', hi: 'सोफ़ा', ex: 'Das Sofa steht an der Wand.', exEn: 'The sofa is against the wall.' },
    { de: 'Wohnzimmer', art: 'das', gender: 'n', plural: 'Wohnzimmer', pos: 'noun', en: 'living room', hi: 'बैठक', ex: 'Wir sitzen im Wohnzimmer.', exEn: 'We sit in the living room.' },
    { de: 'Zimmer', art: 'das', gender: 'n', plural: 'Zimmer', pos: 'noun', en: 'room', hi: 'कमरा', ex: 'Mein Zimmer ist hell.', exEn: 'My room is bright.' },
    { de: 'Bahnhof', art: 'der', gender: 'm', plural: 'Bahnhöfe', pos: 'noun', en: 'train station', hi: 'स्टेशन', ex: 'Der Bahnhof ist in der Mitte.', exEn: 'The station is in the centre.' },
    { de: 'Schrank', art: 'der', gender: 'm', plural: 'Schränke', pos: 'noun', en: 'cupboard, wardrobe', hi: 'अलमारी', ex: 'Die Kleidung ist im Schrank.', exEn: 'The clothes are in the wardrobe.' },
    { de: 'Stuhl', art: 'der', gender: 'm', plural: 'Stühle', pos: 'noun', en: 'chair', hi: 'कुर्सी', ex: 'Die Tasche ist unter dem Stuhl.', exEn: 'The bag is under the chair.' },
    { de: 'Küche', art: 'die', gender: 'f', plural: 'Küchen', pos: 'noun', en: 'kitchen', hi: 'रसोई', ex: 'Ich koche in der Küche.', exEn: 'I cook in the kitchen.' },
    { de: 'Wohnung', art: 'die', gender: 'f', plural: 'Wohnungen', pos: 'noun', en: 'flat, apartment', hi: 'फ़्लैट', ex: 'Meine Wohnung ist neu.', exEn: 'My flat is new.' },
    { de: 'gelb', pos: 'adjective', en: 'yellow', hi: 'पीला', ex: 'Die Lampe ist gelb.', exEn: 'The lamp is yellow.' },
    { de: 'grau', pos: 'adjective', en: 'grey', hi: 'धूसर', ex: 'Der Schrank ist grau.', exEn: 'The wardrobe is grey.' },
    { de: 'grün', pos: 'adjective', en: 'green', hi: 'हरा', ex: 'Die Pflanze ist grün.', exEn: 'The plant is green.' },
    { de: 'hinter', pos: 'preposition', en: 'behind', hi: 'के पीछे', ex: 'Der Ball ist hinter dem Sofa.', exEn: 'The ball is behind the sofa.' },
    { de: 'in', pos: 'preposition', en: 'in, into', hi: 'में', ex: 'Ich gehe in die Küche.', exEn: 'I go into the kitchen.' },
    { de: 'neben', pos: 'preposition', en: 'next to, beside', hi: 'के बगल', ex: 'Die Lampe steht neben dem Sofa.', exEn: 'The lamp is next to the sofa.' },
    { de: 'rot', pos: 'adjective', en: 'red', hi: 'लाल', ex: 'Der Sessel ist rot.', exEn: 'The armchair is red.' },
    { de: 'schwarz', pos: 'adjective', en: 'black', hi: 'काला', ex: 'Der Fernseher ist schwarz.', exEn: 'The TV is black.' },
    { de: 'unter', pos: 'preposition', en: 'under', hi: 'के नीचे', ex: 'Die Tasche ist unter dem Tisch.', exEn: 'The bag is under the table.' },
    { de: 'vor', pos: 'preposition', en: 'in front of; before', hi: 'के सामने', ex: 'Der Stuhl steht vor dem Tisch.', exEn: 'The chair is in front of the table.' },
    { de: 'weiß', pos: 'adjective', en: 'white', hi: 'सफ़ेद', ex: 'Die Wand ist weiß.', exEn: 'The wall is white.' },
    { de: 'wohin', pos: 'pronoun', en: 'where to', hi: 'कहाँ (जाना)', ex: 'Wohin stellst du den Stuhl?', exEn: 'Where do you put the chair?' },
    { de: 'zwischen', pos: 'preposition', en: 'between', hi: 'के बीच', ex: 'Der Tisch steht zwischen den Stühlen.', exEn: 'The table is between the chairs.' },
    { de: 'über', pos: 'preposition', en: 'over, above', hi: 'के ऊपर', ex: 'Das Bild hängt über dem Sofa.', exEn: 'The picture hangs above the sofa.' },
    // ===== Active Support =====
    { de: 'ansehen', pos: 'verb', en: 'to look at', hi: 'देखना', ex: 'Ich sehe mir die Wohnung an.', exEn: 'I look at the flat.', conj: { praesens: 'sieht an', praeteritum: 'sah an', perfekt: 'hat angesehen' } },
    { de: 'aus (Holz)', pos: 'preposition', en: 'made of (wood)', hi: 'का बना', ex: 'Der Tisch ist aus Holz.', exEn: 'The table is made of wood.' },
    { de: 'besondere', pos: 'adjective', en: 'special', hi: 'ख़ास', ex: 'Das ist ein besonderes Zimmer.', exEn: 'That is a special room.' },
    { de: 'besonders', pos: 'adverb', en: 'especially', hi: 'विशेष रूप से', ex: 'Das Zimmer ist besonders hell.', exEn: 'The room is especially bright.' },
    { de: 'braun', pos: 'adjective', en: 'brown', hi: 'भूरा', ex: 'Der Schrank ist braun.', exEn: 'The wardrobe is brown.' },
    { de: 'daneben', pos: 'adverb', en: 'beside it', hi: 'उसके बगल', ex: 'Der Stuhl steht daneben.', exEn: 'The chair stands beside it.' },
    { de: 'Arbeitszimmer', art: 'das', gender: 'n', plural: 'Arbeitszimmer', pos: 'noun', en: 'study (room)', hi: 'अध्ययन कक्ष', ex: 'Ich arbeite im Arbeitszimmer.', exEn: 'I work in the study.' },
    { de: 'Bild', art: 'das', gender: 'n', plural: 'Bilder', pos: 'noun', en: 'picture', hi: 'चित्र', ex: 'Das Bild hängt an der Wand.', exEn: 'The picture hangs on the wall.' },
    { de: 'Erdgeschoss', art: 'das', gender: 'n', plural: 'Erdgeschosse', pos: 'noun', en: 'ground floor', hi: 'भूतल', ex: 'Die Wohnung ist im Erdgeschoss.', exEn: 'The flat is on the ground floor.' },
    { de: 'Fenster', art: 'das', gender: 'n', plural: 'Fenster', pos: 'noun', en: 'window', hi: 'खिड़की', ex: 'Das Fenster ist groß.', exEn: 'The window is big.' },
    { de: 'Gerät', art: 'das', gender: 'n', plural: 'Geräte', pos: 'noun', en: 'device, appliance', hi: 'उपकरण', ex: 'Das Gerät ist in der Küche.', exEn: 'The appliance is in the kitchen.' },
    { de: 'Hochhaus', art: 'das', gender: 'n', plural: 'Hochhäuser', pos: 'noun', en: 'tower block, high-rise', hi: 'ऊँची इमारत', ex: 'Sie wohnt im Hochhaus.', exEn: 'She lives in the high-rise.' },
    { de: 'Kinderzimmer', art: 'das', gender: 'n', plural: 'Kinderzimmer', pos: 'noun', en: 'children\u2019s room', hi: 'बच्चों का कमरा', ex: 'Das Kinderzimmer ist bunt.', exEn: 'The children\u2019s room is colourful.' },
    { de: 'Licht', art: 'das', gender: 'n', plural: 'Lichter', pos: 'noun', en: 'light', hi: 'रोशनी', ex: 'Das Licht ist an.', exEn: 'The light is on.' },
    { de: 'Regal', art: 'das', gender: 'n', plural: 'Regale', pos: 'noun', en: 'shelf', hi: 'शेल्फ़', ex: 'Die Bücher stehen im Regal.', exEn: 'The books are on the shelf.' },
    { de: 'Balkon', art: 'der', gender: 'm', plural: 'Balkone', pos: 'noun', en: 'balcony', hi: 'बालकनी', ex: 'Der Balkon ist klein.', exEn: 'The balcony is small.' },
    { de: 'Baum', art: 'der', gender: 'm', plural: 'Bäume', pos: 'noun', en: 'tree', hi: 'पेड़', ex: 'Der Baum steht im Garten.', exEn: 'The tree is in the garden.' },
    { de: 'Blick', art: 'der', gender: 'm', plural: 'Blicke', pos: 'noun', en: 'view', hi: 'दृश्य', ex: 'Der Blick ist schön.', exEn: 'The view is lovely.' },
    { de: 'Fernseher', art: 'der', gender: 'm', plural: 'Fernseher', pos: 'noun', en: 'TV set', hi: 'टीवी', ex: 'Der Fernseher ist neu.', exEn: 'The TV is new.' },
    { de: 'Flur', art: 'der', gender: 'm', plural: 'Flure', pos: 'noun', en: 'hallway', hi: 'गलियारा', ex: 'Der Flur ist lang.', exEn: 'The hallway is long.' },
    { de: 'Fluss', art: 'der', gender: 'm', plural: 'Flüsse', pos: 'noun', en: 'river', hi: 'नदी', ex: 'Der Fluss ist breit.', exEn: 'The river is wide.' },
    { de: 'Garten', art: 'der', gender: 'm', plural: 'Gärten', pos: 'noun', en: 'garden', hi: 'बगीचा', ex: 'Wir sitzen im Garten.', exEn: 'We sit in the garden.' },
    { de: 'Herd', art: 'der', gender: 'm', plural: 'Herde', pos: 'noun', en: 'stove, cooker', hi: 'चूल्हा', ex: 'Der Herd ist in der Küche.', exEn: 'The stove is in the kitchen.' },
    { de: 'Kühlschrank', art: 'der', gender: 'm', plural: 'Kühlschränke', pos: 'noun', en: 'fridge', hi: 'फ़्रिज', ex: 'Die Milch ist im Kühlschrank.', exEn: 'The milk is in the fridge.' },
    { de: 'Markt', art: 'der', gender: 'm', plural: 'Märkte', pos: 'noun', en: 'market', hi: 'बाज़ार', ex: 'Ich gehe auf den Markt.', exEn: 'I go to the market.' },
    { de: 'Park', art: 'der', gender: 'm', plural: 'Parks', pos: 'noun', en: 'park', hi: 'पार्क', ex: 'Wir gehen in den Park.', exEn: 'We go to the park.' },
    { de: 'Platz', art: 'der', gender: 'm', plural: 'Plätze', pos: 'noun', en: 'room, space', hi: 'जगह', ex: 'Hier ist viel Platz.', exEn: 'There is a lot of space here.' },
    { de: 'Platz (Quadrat)', art: 'der', gender: 'm', plural: 'Plätze', pos: 'noun', en: 'square', hi: 'चौक', ex: 'Der Platz ist groß.', exEn: 'The square is big.' },
    { de: 'Raum', art: 'der', gender: 'm', plural: 'Räume', pos: 'noun', en: 'room, space', hi: 'कक्ष', ex: 'Der Raum ist hell.', exEn: 'The room is bright.' },
    { de: 'Schreibtisch', art: 'der', gender: 'm', plural: 'Schreibtische', pos: 'noun', en: 'desk', hi: 'मेज़', ex: 'Der Laptop ist auf dem Schreibtisch.', exEn: 'The laptop is on the desk.' },
    { de: 'See', art: 'der', gender: 'm', plural: 'Seen', pos: 'noun', en: 'lake', hi: 'झील', ex: 'Der See ist ruhig.', exEn: 'The lake is calm.' },
    { de: 'Sessel', art: 'der', gender: 'm', plural: 'Sessel', pos: 'noun', en: 'armchair', hi: 'आरामकुर्सी', ex: 'Der Sessel ist bequem.', exEn: 'The armchair is comfy.' },
    { de: 'Stock', art: 'der', gender: 'm', plural: 'Stockwerke', pos: 'noun', en: 'floor, storey', hi: 'मंज़िल', ex: 'Ich wohne im dritten Stock.', exEn: 'I live on the third floor.' },
    { de: 'Teppich', art: 'der', gender: 'm', plural: 'Teppiche', pos: 'noun', en: 'carpet, rug', hi: 'कालीन', ex: 'Der Teppich liegt auf dem Boden.', exEn: 'The rug lies on the floor.' },
    { de: 'Bank (Sitz)', art: 'die', gender: 'f', plural: 'Bänke', pos: 'noun', en: 'bench', hi: 'बेंच', ex: 'Wir sitzen auf der Bank.', exEn: 'We sit on the bench.' },
    { de: 'Dusche', art: 'die', gender: 'f', plural: 'Duschen', pos: 'noun', en: 'shower', hi: 'शावर', ex: 'Die Dusche ist im Bad.', exEn: 'The shower is in the bathroom.' },
    { de: 'Farbe', art: 'die', gender: 'f', plural: 'Farben', pos: 'noun', en: 'colour', hi: 'रंग', ex: 'Welche Farbe magst du?', exEn: 'Which colour do you like?' },
    { de: 'Hauptstadt', art: 'die', gender: 'f', plural: 'Hauptstädte', pos: 'noun', en: 'capital city', hi: 'राजधानी', ex: 'Berlin ist die Hauptstadt.', exEn: 'Berlin is the capital.' },
    { de: 'Kaffeemaschine', art: 'die', gender: 'f', plural: 'Kaffeemaschinen', pos: 'noun', en: 'coffee machine', hi: 'कॉफ़ी मशीन', ex: 'Die Kaffeemaschine ist neu.', exEn: 'The coffee machine is new.' },
    { de: 'Kirche', art: 'die', gender: 'f', plural: 'Kirchen', pos: 'noun', en: 'church', hi: 'गिरजाघर', ex: 'Die Kirche ist alt.', exEn: 'The church is old.' },
    { de: 'Lampe', art: 'die', gender: 'f', plural: 'Lampen', pos: 'noun', en: 'lamp', hi: 'लैंप', ex: 'Die Lampe steht neben dem Bett.', exEn: 'The lamp is next to the bed.' },
    { de: 'Lieblingsfarbe', art: 'die', gender: 'f', plural: 'Lieblingsfarben', pos: 'noun', en: 'favourite colour', hi: 'पसंदीदा रंग', ex: 'Blau ist meine Lieblingsfarbe.', exEn: 'Blue is my favourite colour.' },
    { de: 'Mitte', art: 'die', gender: 'f', plural: 'Mitten', pos: 'noun', en: 'middle, centre', hi: 'बीच', ex: 'Der Tisch steht in der Mitte.', exEn: 'The table is in the middle.' },
    { de: 'Möbel', art: 'die', gender: 'pl', plural: 'Möbel', pos: 'noun', en: 'furniture', hi: 'फ़र्नीचर', ex: 'Die Möbel sind neu.', exEn: 'The furniture is new.' },
    { de: 'Pflanze', art: 'die', gender: 'f', plural: 'Pflanzen', pos: 'noun', en: 'plant', hi: 'पौधा', ex: 'Die Pflanze steht am Fenster.', exEn: 'The plant is by the window.' },
    { de: 'Spülmaschine', art: 'die', gender: 'f', plural: 'Spülmaschinen', pos: 'noun', en: 'dishwasher', hi: 'बर्तन धोने की मशीन', ex: 'Das Geschirr ist in der Spülmaschine.', exEn: 'The dishes are in the dishwasher.' },
    { de: 'Terrasse', art: 'die', gender: 'f', plural: 'Terrassen', pos: 'noun', en: 'terrace, patio', hi: 'छत', ex: 'Wir essen auf der Terrasse.', exEn: 'We eat on the terrace.' },
    { de: 'Toilette', art: 'die', gender: 'f', plural: 'Toiletten', pos: 'noun', en: 'toilet', hi: 'शौचालय', ex: 'Die Toilette ist links.', exEn: 'The toilet is on the left.' },
    { de: 'Treppe', art: 'die', gender: 'f', plural: 'Treppen', pos: 'noun', en: 'stairs', hi: 'सीढ़ी', ex: 'Die Treppe ist steil.', exEn: 'The stairs are steep.' },
    { de: 'Tür', art: 'die', gender: 'f', plural: 'Türen', pos: 'noun', en: 'door', hi: 'दरवाज़ा', ex: 'Die Tür ist offen.', exEn: 'The door is open.' },
    { de: 'Waschmaschine', art: 'die', gender: 'f', plural: 'Waschmaschinen', pos: 'noun', en: 'washing machine', hi: 'वॉशिंग मशीन', ex: 'Die Waschmaschine ist im Bad.', exEn: 'The washing machine is in the bathroom.' },
    { de: 'draußen', pos: 'adverb', en: 'outside', hi: 'बाहर', ex: 'Die Kinder spielen draußen.', exEn: 'The children play outside.' },
    { de: 'dunkel', pos: 'adjective', en: 'dark', hi: 'अंधेरा', ex: 'Das Zimmer ist dunkel.', exEn: 'The room is dark.' },
    { de: 'gemütlich', pos: 'adjective', en: 'cosy', hi: 'आरामदायक', ex: 'Das Wohnzimmer ist gemütlich.', exEn: 'The living room is cosy.' },
    { de: 'hell', pos: 'adjective', en: 'bright, light', hi: 'उजला', ex: 'Die Küche ist hell.', exEn: 'The kitchen is bright.' },
    { de: 'liegen', pos: 'verb', en: 'to lie, be located', hi: 'पड़ा होना', ex: 'Das Buch liegt auf dem Tisch.', exEn: 'The book lies on the table.', conj: { praesens: 'liegt', praeteritum: 'lag', perfekt: 'hat gelegen' } },
    { de: 'lila', pos: 'adjective', en: 'purple', hi: 'बैंगनी', ex: 'Die Lampe ist lila.', exEn: 'The lamp is purple.' },
    { de: 'oben', pos: 'adverb', en: 'above, upstairs', hi: 'ऊपर', ex: 'Das Schlafzimmer ist oben.', exEn: 'The bedroom is upstairs.' },
    { de: 'orange', pos: 'adjective', en: 'orange', hi: 'नारंगी', ex: 'Der Sessel ist orange.', exEn: 'The armchair is orange.' },
    { de: 'sauber machen', pos: 'verb', en: 'to clean', hi: 'साफ़ करना', ex: 'Ich mache das Zimmer sauber.', exEn: 'I clean the room.', conj: { praesens: 'macht sauber', praeteritum: 'machte sauber', perfekt: 'hat sauber gemacht' } },
    { de: 'sitzen', pos: 'verb', en: 'to sit', hi: 'बैठना', ex: 'Ich sitze auf dem Sofa.', exEn: 'I sit on the sofa.', conj: { praesens: 'sitzt', praeteritum: 'saß', perfekt: 'hat gesessen' } },
    { de: 'stehen', pos: 'verb', en: 'to stand, be located', hi: 'खड़ा होना', ex: 'Der Schrank steht an der Wand.', exEn: 'The wardrobe stands against the wall.', conj: { praesens: 'steht', praeteritum: 'stand', perfekt: 'hat gestanden' } },
    { de: 'stellen', pos: 'verb', en: 'to put (upright)', hi: 'खड़ा रखना', ex: 'Ich stelle die Lampe auf den Tisch.', exEn: 'I put the lamp on the table.', conj: { praesens: 'stellt', praeteritum: 'stellte', perfekt: 'hat gestellt' } },
    { de: 'stellen (put)', pos: 'verb', en: 'to put, place', hi: 'रखना', ex: 'Stell den Stuhl dorthin.', exEn: 'Put the chair there.', conj: { praesens: 'stellt', praeteritum: 'stellte', perfekt: 'hat gestellt' } },
    { de: 'unten', pos: 'adverb', en: 'below, downstairs', hi: 'नीचे', ex: 'Die Küche ist unten.', exEn: 'The kitchen is downstairs.' },
    { de: 'voll', pos: 'adjective', en: 'full', hi: 'भरा', ex: 'Der Schrank ist voll.', exEn: 'The wardrobe is full.' },
    { de: 'zeigen', pos: 'verb', en: 'to point, show', hi: 'दिखाना', ex: 'Ich zeige dir die Wohnung.', exEn: 'I show you the flat.', conj: { praesens: 'zeigt', praeteritum: 'zeigte', perfekt: 'hat gezeigt' } },
    { de: 'umziehen', pos: 'verb', en: 'to move (house)', hi: 'घर बदलना', ex: 'Ich ziehe nach Berlin um.', exEn: 'I move to Berlin.', conj: { praesens: 'zieht um', praeteritum: 'zog um', perfekt: 'ist umgezogen' } },
    { de: 'zufrieden', pos: 'adjective', en: 'satisfied, content', hi: 'संतुष्ट', ex: 'Ich bin zufrieden.', exEn: 'I am satisfied.' },
    // ===== Passive =====
    { de: 'Fachwerkhaus', art: 'das', gender: 'n', plural: 'Fachwerkhäuser', pos: 'noun', en: 'timber-framed house', hi: 'लकड़ी का घर', ex: 'Das Fachwerkhaus ist alt.', exEn: 'The timber house is old.' },
    { de: 'Geschirr', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'crockery, dishes', hi: 'बर्तन', ex: 'Das Geschirr ist sauber.', exEn: 'The dishes are clean.' },
    { de: 'Holz', art: 'das', gender: 'n', plural: 'Hölzer', pos: 'noun', en: 'wood', hi: 'लकड़ी', ex: 'Der Tisch ist aus Holz.', exEn: 'The table is made of wood.' },
    { de: 'Konzerthaus', art: 'das', gender: 'n', plural: 'Konzerthäuser', pos: 'noun', en: 'concert hall', hi: 'कॉन्सर्ट हॉल', ex: 'Das Konzerthaus ist berühmt.', exEn: 'The concert hall is famous.' },
    { de: 'Lieblingszimmer', art: 'das', gender: 'n', plural: 'Lieblingszimmer', pos: 'noun', en: 'favourite room', hi: 'पसंदीदा कमरा', ex: 'Die Küche ist mein Lieblingszimmer.', exEn: 'The kitchen is my favourite room.' },
    { de: 'Loft', art: 'das', gender: 'n', plural: 'Lofts', pos: 'noun', en: 'loft', hi: 'लॉफ्ट', ex: 'Sie wohnt in einem Loft.', exEn: 'She lives in a loft.' },
    { de: 'Rathaus', art: 'das', gender: 'n', plural: 'Rathäuser', pos: 'noun', en: 'town hall', hi: 'नगर भवन', ex: 'Das Rathaus ist am Platz.', exEn: 'The town hall is on the square.' },
    { de: 'Reihenhaus', art: 'das', gender: 'n', plural: 'Reihenhäuser', pos: 'noun', en: 'terraced house', hi: 'पंक्ति घर', ex: 'Wir wohnen in einem Reihenhaus.', exEn: 'We live in a terraced house.' },
    { de: 'Aufzug', art: 'der', gender: 'm', plural: 'Aufzüge', pos: 'noun', en: 'elevator, lift', hi: 'लिफ़्ट', ex: 'Der Aufzug ist kaputt.', exEn: 'The lift is broken.' },
    { de: 'Besucher', art: 'der', gender: 'm', plural: 'Besucher', pos: 'noun', en: 'visitor (m)', hi: 'आगंतुक', ex: 'Der Besucher wartet.', exEn: 'The visitor waits.' },
    { de: 'Bewohner', art: 'der', gender: 'm', plural: 'Bewohner', pos: 'noun', en: 'resident (m)', hi: 'निवासी', ex: 'Der Bewohner ist freundlich.', exEn: 'The resident is friendly.' },
    { de: 'Hafen', art: 'der', gender: 'm', plural: 'Häfen', pos: 'noun', en: 'harbour, port', hi: 'बंदरगाह', ex: 'Der Hafen ist groß.', exEn: 'The harbour is big.' },
    { de: 'Hof', art: 'der', gender: 'm', plural: 'Höfe', pos: 'noun', en: 'courtyard, yard', hi: 'आँगन', ex: 'Die Kinder spielen im Hof.', exEn: 'The children play in the yard.' },
    { de: 'Lieblingsort', art: 'der', gender: 'm', plural: 'Lieblingsorte', pos: 'noun', en: 'favourite place', hi: 'पसंदीदा जगह', ex: 'Der Park ist mein Lieblingsort.', exEn: 'The park is my favourite place.' },
    { de: 'Spielplatz', art: 'der', gender: 'm', plural: 'Spielplätze', pos: 'noun', en: 'playground', hi: 'खेल का मैदान', ex: 'Der Spielplatz ist im Park.', exEn: 'The playground is in the park.' },
    { de: 'Stadtpark', art: 'der', gender: 'm', plural: 'Stadtparks', pos: 'noun', en: 'city park', hi: 'शहर का पार्क', ex: 'Wir gehen in den Stadtpark.', exEn: 'We go to the city park.' },
    { de: 'Turm', art: 'der', gender: 'm', plural: 'Türme', pos: 'noun', en: 'tower', hi: 'मीनार', ex: 'Der Turm ist hoch.', exEn: 'The tower is high.' },
    { de: 'Weihnachtsmarkt', art: 'der', gender: 'm', plural: 'Weihnachtsmärkte', pos: 'noun', en: 'Christmas market', hi: 'क्रिसमस बाज़ार', ex: 'Der Weihnachtsmarkt ist im Dezember.', exEn: 'The Christmas market is in December.' },
    { de: 'Altbauwohnung', art: 'die', gender: 'f', plural: 'Altbauwohnungen', pos: 'noun', en: 'old-building flat', hi: 'पुरानी इमारत का फ़्लैट', ex: 'Die Altbauwohnung ist schön.', exEn: 'The old-building flat is lovely.' },
    { de: 'Altstadt', art: 'die', gender: 'f', plural: 'Altstädte', pos: 'noun', en: 'old town', hi: 'पुराना शहर', ex: 'Die Altstadt ist schön.', exEn: 'The old town is lovely.' },
    { de: 'Architektur', art: 'die', gender: 'f', plural: 'Architekturen', pos: 'noun', en: 'architecture', hi: 'वास्तुकला', ex: 'Die Architektur ist modern.', exEn: 'The architecture is modern.' },
    { de: 'Ausstellung', art: 'die', gender: 'f', plural: 'Ausstellungen', pos: 'noun', en: 'exhibition', hi: 'प्रदर्शनी', ex: 'Die Ausstellung ist interessant.', exEn: 'The exhibition is interesting.' },
    { de: 'Bauzeit', art: 'die', gender: 'f', plural: 'Bauzeiten', pos: 'noun', en: 'construction period', hi: 'निर्माण काल', ex: 'Die Bauzeit war lang.', exEn: 'The construction period was long.' },
    { de: 'Besucherin', art: 'die', gender: 'f', plural: 'Besucherinnen', pos: 'noun', en: 'visitor (f)', hi: 'आगंतुक', ex: 'Die Besucherin fotografiert.', exEn: 'The visitor takes photos.' },
    { de: 'Bewohnerin', art: 'die', gender: 'f', plural: 'Bewohnerinnen', pos: 'noun', en: 'resident (f)', hi: 'निवासी', ex: 'Die Bewohnerin grüßt.', exEn: 'The resident greets.' },
    { de: 'Brücke', art: 'die', gender: 'f', plural: 'Brücken', pos: 'noun', en: 'bridge', hi: 'पुल', ex: 'Die Brücke ist über dem Fluss.', exEn: 'The bridge is over the river.' },
    { de: 'Decke', art: 'die', gender: 'f', plural: 'Decken', pos: 'noun', en: 'ceiling; blanket', hi: 'छत; कंबल', ex: 'Die Lampe hängt an der Decke.', exEn: 'The lamp hangs from the ceiling.' },
    { de: 'Kiste', art: 'die', gender: 'f', plural: 'Kisten', pos: 'noun', en: 'box, crate', hi: 'पेटी', ex: 'Die Bücher sind in der Kiste.', exEn: 'The books are in the box.' },
    { de: 'Kunsthalle', art: 'die', gender: 'f', plural: 'Kunsthallen', pos: 'noun', en: 'art gallery', hi: 'कला दीर्घा', ex: 'Die Kunsthalle ist groß.', exEn: 'The art gallery is big.' },
    { de: 'Trendstadt', art: 'die', gender: 'f', plural: 'Trendstädte', pos: 'noun', en: 'trendy city', hi: 'ट्रेंडी शहर', ex: 'Berlin ist eine Trendstadt.', exEn: 'Berlin is a trendy city.' },
    { de: 'Wohnform', art: 'die', gender: 'f', plural: 'Wohnformen', pos: 'noun', en: 'type of housing', hi: 'आवास का प्रकार', ex: 'Das Loft ist eine moderne Wohnform.', exEn: 'The loft is a modern type of housing.' },
    { de: 'renoviert', pos: 'adjective', en: 'renovated', hi: 'मरम्मत किया हुआ', ex: 'Die Wohnung ist renoviert.', exEn: 'The flat is renovated.' },
    // ===== Reference / System =====
    { de: 'Wechselpräposition', art: 'die', gender: 'f', plural: 'Wechselpräpositionen', pos: 'noun', en: 'two-way preposition', hi: 'द्विमार्गी पूर्वसर्ग', ex: '"in" ist eine Wechselpräposition.', exEn: '"in" is a two-way preposition.' }
  ],

  // ---------- Two-way prepositions (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The nine two-way prepositions',
      body: [
        'Nine prepositions can take <strong>either</strong> the accusative or the dative. They\u2019re all about position in space:'
      ],
      table: {
        head: ['Preposition', 'Meaning'],
        rows: [
          ['<span class="de r-preposition">in</span> · <span class="de r-preposition">an</span> · <span class="de r-preposition">auf</span>', 'in/into · at/on · on (top)'],
          ['<span class="de r-preposition">über</span> · <span class="de r-preposition">unter</span>', 'over/above · under'],
          ['<span class="de r-preposition">vor</span> · <span class="de r-preposition">hinter</span>', 'in front of · behind'],
          ['<span class="de r-preposition">neben</span> · <span class="de r-preposition">zwischen</span>', 'next to · between']
        ]
      },
      note: 'These nine are the <b>Wechselpräpositionen</b> (two-way / changeable prepositions). Unlike the always-dative set (Chapter 37), each can switch case \u2014 the next card shows how.',
      hinglish: 'German mein nau <b>Wechselpräpositionen</b> hain: in, an, auf, über, unter, vor, hinter, neben aur zwischen. Chapter 37 wale always-dative set se yeh alag hain, kyunki inke saath Dativ aur Akkusativ dono aa sakte hain. Kaunsa aayega, woh agle card mein hai.'
    },
    {
      title: 'The one rule: Wohin? vs Wo?',
      goldenRule: 'Ask <b>Wohin?</b> (movement) → <b>Akkusativ</b>. Ask <b>Wo?</b> (location) → <b>Dativ</b>.',
      why: 'German uses the case to carry information English carries with different words. "in the kitchen" and "into the kitchen" are two prepositions in English; in German it is one preposition and the <b>article</b> tells you which one you meant.',
      formula: [
        'Wohin? movement  →  in <b>die</b> Küche   (Akkusativ)',
        'Wo?    location  →  in <b>der</b> Küche   (Dativ)'
      ],
      memoryTrick: '<b>Wohin</b> mein <b>hin</b> hai — matlab kahin <b>jaana</b>, to <b>Akkusativ</b>. Akela <b>Wo</b> matlab wahin <b>hona</b>, to <b>Dativ</b>.',
      recap: [
        'Movement toward a goal → accusative.',
        'Staying in a place → dative.',
        'The preposition never changes — only the article does.'
      ],
      body: [
        'A single question decides the case. Is there <strong>movement toward a goal</strong> (Wohin? = where to?) or just <strong>a location</strong> (Wo? = where?)'
      ],
      table: {
        head: ['Question', 'Meaning', 'Case', 'Example'],
        rows: [
          ['<span class="de r-question">Wohin?</span>', 'where to? (movement)', '<span class="r-akkusativ">Akkusativ</span>', '<span class="de">Ich lege das Buch auf <span class="r-akkusativ">den</span> Tisch.</span>'],
          ['<span class="de r-question">Wo?</span>', 'where? (location)', '<span class="r-dativ">Dativ</span>', '<span class="de">Das Buch liegt auf <span class="r-dativ">dem</span> Tisch.</span>'],
          ['movement', 'in die Küche', '<span class="r-akkusativ">acc.</span>', '<span class="de">Ich gehe in die Küche.</span>'],
          ['location', 'in der Küche', '<span class="r-dativ">dat.</span>', '<span class="de">Ich bin in der Küche.</span>']
        ]
      },
      note: 'Going somewhere new = <b>accusative</b> (Wohin?). Already there / staying put = <b>dative</b> (Wo?). The article does the rest: acc. der→den, die→die, das→das; dat. der→dem, die→der, das→dem.',
      hinglish: 'Bas ek simple difference yaad rakho. <b>Wohin?</b> matlab tum kahaan jaa rahe ho \u2014 yahan movement hai, aur iske saath <b>Akkusativ</b> aata hai. <b>Wo?</b> matlab tum kahaan ho \u2014 yahan sirf place batayi jaa rahi hai, aur iske saath <b>Dativ</b> aata hai. Isi wajah se <b>in die Küche</b> (jaana) aur <b>in der Küche</b> (wahaan hona) alag hain.'
    },
    {
      title: 'Motion verbs vs position verbs',
      goldenRule: 'Does the verb <b>put</b> something somewhere, or <b>report</b> where it is? Putting → accusative. Reporting → dative.',
      memoryTrick: 'Jodi mein yaad karo: <b>legen/liegen</b>, <b>stellen/stehen</b>, <b>setzen/sitzen</b>. Pehla rakhta hai (Akk.), doosra batata hai (Dat.).',
      body: [
        'Certain verbs signal movement (→ accusative) and others signal a fixed position (→ dative). They come in neat pairs.'
      ],
      table: {
        head: ['Movement (Akkusativ)', 'Position (Dativ)'],
        rows: [
          ['<span class="de r-verb">legen</span> (lay down)', '<span class="de r-verb">liegen</span> (lie)'],
          ['<span class="de r-verb">stellen</span> (stand up)', '<span class="de r-verb">stehen</span> (stand)'],
          ['<span class="de r-verb">setzen</span> (set down)', '<span class="de r-verb">sitzen</span> (sit)'],
          ['<span class="de r-verb">hängen</span> (hang up)', '<span class="de r-verb">hängen</span> (be hanging)']
        ]
      },
      note: 'If the verb <em>puts</em> something somewhere (legen, stellen, setzen, gehen) → accusative. If it just <em>describes</em> where something is (liegen, stehen, sitzen, sein) → dative. "Ich stelle die Lampe auf <b>den</b> Tisch" vs "Die Lampe steht auf <b>dem</b> Tisch."',
      hinglish: 'Verb agar kuch <em>rakhta</em> hai (legen, stellen, setzen, gehen) → Akkusativ. Verb agar sirf <em>batata</em> hai kahaan hai (liegen, stehen, sitzen, sein) → Dativ. "stelle … auf <b>den</b> Tisch" vs "steht auf <b>dem</b> Tisch".'
    },
    {
      title: 'Contractions: im, am, ins, ans',
      body: [
        'Two-way prepositions contract with the article \u2014 different forms for the dative and the accusative.'
      ],
      table: {
        head: ['Full', 'Contraction', 'Example'],
        rows: [
          ['in dem', '<span class="de r-preposition">im</span> (dat.)', '<span class="de">Ich bin im Garten.</span>'],
          ['in das', '<span class="de r-preposition">ins</span> (acc.)', '<span class="de">Ich gehe ins Kino.</span>'],
          ['an dem', '<span class="de r-preposition">am</span> (dat.)', '<span class="de">Das Bild ist am Fenster.</span>'],
          ['an das', '<span class="de r-preposition">ans</span> (acc.)', '<span class="de">Ich gehe ans Fenster.</span>']
        ]
      },
      note: 'Location (dative): <b>im</b> (in dem), <b>am</b> (an dem). Movement (accusative): <b>ins</b> (in das), <b>ans</b> (an das). "Ich gehe <b>ins</b> Bad" (motion) vs "Ich bin <b>im</b> Bad" (location).',
      hinglish: 'Contractions mein bhi yahi difference dikhta hai. Place batane ke liye Dativ wali forms aati hain: <b>im</b> (in dem) aur <b>am</b> (an dem). Aur movement ke liye Akkusativ wali: <b>ins</b> (in das) aur <b>ans</b> (an das). Isliye <b>Ich gehe ins Bad</b> matlab jaa rahe ho, aur <b>Ich bin im Bad</b> matlab wahaan ho.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four two-way-preposition traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich lege das Buch auf dem Tisch.', right: 'Ich lege das Buch auf den Tisch.', why: 'legen = movement (Wohin?) → accusative: den Tisch.' },
        { wrong: 'Das Buch liegt auf den Tisch.', right: 'Das Buch liegt auf dem Tisch.', why: 'liegen = location (Wo?) → dative: dem Tisch.' },
        { wrong: 'Ich gehe in der Küche.', right: 'Ich gehe in die Küche.', why: 'gehen = movement → accusative: in die Küche.' },
        { wrong: 'Ich bin in die Küche.', right: 'Ich bin in der Küche.', why: 'sein = location → dative: in der Küche.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>legen</b> ka matlab kuch rakhna hai, isliye <b>den Tisch</b> aayega. <b>liegen</b> batata hai ki cheez kahaan hai, isliye <b>dem Tisch</b>. <b>gehen</b> movement hai: <b>in die Küche</b>. Aur <b>sein</b> batata hai ki tum kahaan ho: <b>in der Küche</b>. Har baar verb dekho — rakhna hai ya hona?'
    }
  ],

  // ---------- Reading passage (my flat, clickable) ----------
  reading: {
    title: 'Meine neue Wohnung',
    titleEn: 'My new flat',
    tokens: [
      { w: 'Meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive', why: 'meine (recycled — Possessiv & Familie).', ex: 'meine Wohnung', exEn: 'my flat' },
      { w: 'Wohnung', role: 'r-subject', en: 'flat', hi: 'फ़्लैट', pron: 'VOH-nung', type: 'Noun · fem.', why: 'die Wohnung (this chapter).', ex: 'Meine Wohnung ist hell.', exEn: 'My flat is bright.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'hell', role: 'r-adjective', en: 'bright', hi: 'उजली', pron: 'hel', type: 'Adjective', why: 'hell (this chapter); sein + adjective (Chapter 13).', ex: 'Die Wohnung ist hell.', exEn: 'The flat is bright.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und gemütlich.', exEn: '…, and cosy.' },
      { w: 'gem\u00fctlich', role: 'r-adjective', en: 'cosy', hi: 'आरामदायक', pron: 'guh-MÜT-likh', type: 'Adjective', why: 'gemütlich (this chapter).', ex: 'Die Wohnung ist gemütlich.', exEn: 'The flat is cosy.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + dat.', why: 'in + dem → im (location → dative) (this chapter).', ex: 'im Wohnzimmer', exEn: 'in the living room' },
      { w: 'Wohnzimmer', role: 'r-place', en: 'living room', hi: 'बैठक', pron: 'VOHN-tsi-mer', type: 'Noun · neut.', why: 'das Wohnzimmer (this chapter).', ex: 'im Wohnzimmer', exEn: 'in the living room' },
      { w: 'steht', role: 'r-verb', en: 'stands', hi: 'है', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen — location → dative (this chapter).', ex: 'Das Sofa steht …', exEn: 'The sofa stands …' },
      { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Sofa', role: 'r-subject', en: 'sofa', hi: 'सोफ़ा', pron: 'ZO-fa', type: 'Noun · neut.', why: 'das Sofa (this chapter).', ex: 'ein Sofa', exEn: 'a sofa' },
      { w: 'an', role: 'r-preposition', en: 'against', hi: 'के पास', pron: 'an', type: 'Wechselpräp. + dat.', why: 'Location → dative: an der Wand (this chapter).', ex: 'an der Wand', exEn: 'against the wall' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative', why: 'Location → dative der (this chapter).', ex: 'an der Wand', exEn: 'on the wall' },
      { w: 'Wand', role: 'r-object', en: 'wall', hi: 'दीवार', pron: 'vant', type: 'Noun · fem.', why: 'die Wand.', ex: 'an der Wand', exEn: 'against the wall' },
      { w: '.', plain: true },
      { w: '\u00dcber', role: 'r-preposition', en: 'above', hi: 'के ऊपर', pron: 'Ü-ber', type: 'Wechselpräp. + dat.', why: 'Location → dative: über dem Sofa (this chapter).', ex: 'über dem Sofa', exEn: 'above the sofa' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative' },
      { w: 'Sofa', role: 'r-subject', en: 'sofa', hi: 'सोफ़ा', pron: 'ZO-fa', type: 'Noun · neut.' },
      { w: 'h\u00e4ngt', role: 'r-verb', en: 'hangs', hi: 'टंगा है', pron: 'hengt', type: 'Verb · hängen', why: 'hängen — location → dative (this chapter).', ex: 'Das Bild hängt über dem Sofa.', exEn: 'The picture hangs above the sofa.' },
      { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Bild', role: 'r-subject', en: 'picture', hi: 'चित्र', pron: 'bilt', type: 'Noun · neut.', why: 'das Bild (this chapter).', ex: 'ein Bild', exEn: 'a picture' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Lampe', role: 'r-subject', en: 'lamp', hi: 'लैंप', pron: 'LAM-puh', type: 'Noun · fem.', why: 'die Lampe (this chapter).', ex: 'Die Lampe steht neben dem Sofa.', exEn: 'The lamp is next to the sofa.' },
      { w: 'steht', role: 'r-verb', en: 'stands', hi: 'है', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen — location → dative (this chapter).', ex: 'Die Lampe steht …', exEn: 'The lamp stands …' },
      { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल', pron: 'NAY-ben', type: 'Wechselpräp. + dat.', why: 'Location → dative: neben dem Sofa (this chapter).', ex: 'neben dem Sofa', exEn: 'next to the sofa' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative' },
      { w: 'Sofa', role: 'r-object', en: 'sofa', hi: 'सोफ़ा', pron: 'ZO-fa', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'heute (recycled — Verben).', ex: 'Heute stelle ich …', exEn: 'Today I put …' },
      { w: 'stelle', role: 'r-verb', en: 'put', hi: 'रखती हूँ', pron: 'SHTE-luh', type: 'Verb · stellen (ich)', why: 'stellen — movement → accusative; verb position 2 (this chapter).', ex: 'Ich stelle die Pflanze …', exEn: 'I put the plant …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Pflanze', role: 'r-object', en: 'plant', hi: 'पौधा', pron: 'PFLAN-tsuh', type: 'Noun · fem.', why: 'die Pflanze (this chapter).', ex: 'eine Pflanze', exEn: 'a plant' },
      { w: 'auf', role: 'r-preposition', en: 'onto', hi: 'के ऊपर', pron: 'owf', type: 'Wechselpräp. + acc.', why: 'Movement → accusative: auf den Tisch (this chapter).', ex: 'auf den Tisch', exEn: 'onto the table' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'इस', pron: 'dayn', type: 'Article · acc.', why: 'Movement → accusative der → den (this chapter).', ex: 'auf den Tisch', exEn: 'onto the table' },
      { w: 'Tisch', role: 'r-object', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc.', why: 'der Tisch (recycled — Der Nominativ).', ex: 'auf den Tisch stellen', exEn: 'put on the table' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann gehe ich …', exEn: 'Then I go …' },
      { w: 'gehe', role: 'r-verb', en: 'go', hi: 'जाती हूँ', pron: 'GAY-uh', type: 'Verb · gehen (ich)', why: 'gehen — movement → accusative; verb position 2 (this chapter).', ex: 'Dann gehe ich in die Küche.', exEn: 'Then I go into the kitchen.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Wechselpräp. + acc.', why: 'Movement → accusative: in die Küche (this chapter).', ex: 'in die Küche', exEn: 'into the kitchen' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article · acc.' },
      { w: 'K\u00fcche', role: 'r-place', en: 'kitchen', hi: 'रसोई', pron: 'KÜ-khuh', type: 'Noun · fem.', why: 'die Küche (this chapter).', ex: 'in die Küche gehen', exEn: 'go into the kitchen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'koche', role: 'r-verb', en: 'cook', hi: 'खाना बनाती हूँ', pron: 'KO-khuh', type: 'Verb · kochen (ich)', why: 'kochen (recycled — Essen & Trinken).', ex: 'Ich koche.', exEn: 'I cook.' },
      { w: 'Kaffee', role: 'r-object', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee (recycled — Im Café).', ex: 'Kaffee kochen', exEn: 'make coffee' },
      { w: '.', plain: true }
    ],
    translation: 'My flat is bright and cosy. In the living room a sofa stands against the wall. Above the sofa hangs a picture. The lamp stands next to the sofa. Today I put a plant on the table. Then I go into the kitchen and make coffee.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_038_L001', speaker: 'Basti', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Basti, wohin stellen wir den Tisch für die Party?', en: 'Basti, where do we put the table for the party?' },
      { id: 'A1_038_L002', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stell ihn neben das Fenster.', en: 'Put it next to the window.' },
      { id: 'A1_038_L003', speaker: 'Basti', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und die Blumen?', en: 'And the flowers?' },
      { id: 'A1_038_L004', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Häng sie über die Tür, das sieht schön aus.', en: 'Hang them above the door, that looks nice.' },
      { id: 'A1_038_L005', speaker: 'Basti', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wo liegen die Servietten?', en: 'And where are the napkins?' },
      { id: 'A1_038_L006', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sie liegen schon auf dem Tisch.', en: 'They\'re already on the table.' }
    ],
    transcript: 'Basti, wohin stellen wir den Tisch für die Party? Stell ihn neben das Fenster. Und die Blumen? Häng sie über die Tür, das sieht schön aus. Und wo liegen die Servietten? Sie liegen schon auf dem Tisch.',
    translation: 'Basti, where do we put the table for the party? Put it next to the window. And the flowers? Hang them above the door, that looks nice. And where are the napkins? They\'re already on the table.',
    tokens: [
      { w: 'Basti' },
      { w: ',', plain: true },
      { w: 'wohin' },
      { w: 'stellen' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Tisch' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Party' },
      { w: '?', plain: true },
      { w: 'Stell' },
      { w: 'ihn' },
      { w: 'neben' },
      { w: 'das' },
      { w: 'Fenster' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Blumen' },
      { w: '?', plain: true },
      { w: 'Häng' },
      { w: 'sie' },
      { w: 'über' },
      { w: 'die' },
      { w: 'Tür' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'sieht' },
      { w: 'schön' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wo' },
      { w: 'liegen' },
      { w: 'die' },
      { w: 'Servietten' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'liegen' },
      { w: 'schon' },
      { w: 'auf' },
      { w: 'dem' },
      { w: 'Tisch' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wohin soll der Tisch?', qEn: 'Where should the table go?', options: ['neben das Fenster', 'unter das Sofa', 'vor die Tür', 'hinter den Stuhl'], optionsEn: ['next to the window', 'under the sofa', 'outside the door', 'behind the chair'], answer: 0,
        explain: '"Stell ihn neben das Fenster."' },
      { q: 'Wo sind die Servietten schon?', qEn: 'Where are the napkins already?', options: ['im Schrank', 'auf dem Tisch', 'unter dem Stuhl', 'in der Küche'], optionsEn: ['in the cupboard', 'on the table', 'under the chair', 'in the kitchen'], answer: 1,
        explain: '"Sie liegen schon auf dem Tisch."' }
    ]
  },

  speaking: [
    { task: "Dein Freund sucht seine Jacke. Du siehst sie im Wohnzimmer. Sag, wo sie ist.", taskEn: "Your friend is looking for his jacket. You can see it in the living room. Say where it is.", de: "Die Jacke liegt auf dem Sofa im Wohnzimmer.", en: "The jacket is on the sofa in the living room." },
    { task: "Deine Mitbewohnerin fragt: Wohin soll ich den Stuhl stellen?", taskEn: "Your flatmate asks: where should I put the chair?", de: "Stell den Stuhl in die Küche, neben den Tisch.", en: "Put the chair in the kitchen, next to the table." },
    { task: "Dein Freund fragt: Wo ist das Buch? Es liegt im Schrank.", taskEn: "Your friend asks: where's the book? It's in the cupboard.", de: "Das Buch ist im Schrank, hinter dem Bett.", en: "The book is in the cupboard, behind the bed." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Describe your room or flat in five sentences using two-way prepositions. Use location verbs (steht, liegt, hängt, ist) with the dative, and at least one movement sentence (Ich stelle/lege/hänge … ) with the accusative. Add a colour and a "cosy/bright" adjective.',
    starters: ['Mein Zimmer ist …', 'An der Wand hängt …', 'Auf dem Tisch steht …', 'Ich stelle … auf/neben/unter …'],
    placeholder: 'Mein Zimmer ist hell. An der Wand hängt ein Bild …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct case: "Ich lege das Buch auf ___ Tisch."',
      options: ['dem', 'den', 'der', 'das'],
      answer: 1,
      explain: 'legen = movement (Wohin?) → accusative: der Tisch → den Tisch.'
    },
    gap: {
      // location (dative) + movement (accusative)
      sentence: ['Das Buch liegt auf ', ' Tisch, aber ich lege es jetzt in ', ' Schrank.'],
      gaps: [ { answer: 'dem', accepts: ['dem'] }, { answer: 'den', accepts: ['den'] } ],
      explain: 'liegen = location → dem (dative); legen … in = movement → den (accusative).'
    },
    match: {
      q: 'Match each preposition to its meaning.',
      pairs: [
        { noun: 'auf', art: 'on (top of)' },
        { noun: 'unter', art: 'under' },
        { noun: 'neben', art: 'next to' },
        { noun: 'zwischen', art: 'between' }
      ]
    },
    builder: {
      target: 'Build: "The book lies on the table." (location)',
      bank: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'],
      answer: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'],
      roles: { 'Das': 'r-article', 'Buch': 'r-subject', 'liegt': 'r-verb', 'auf': 'r-preposition', 'dem': 'r-dativ', 'Tisch': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which question goes with the accusative?', options: ['Wo?', 'Wohin?', 'Wer?', 'Wann?'], answer: 1,
      explain: 'Wohin? (movement) → accusative; Wo? (location) → dative.' },
    { q: 'Complete: "Das Buch liegt auf ___ Tisch."', options: ['den', 'dem', 'der', 'das'], answer: 1,
      explain: 'liegen = location → dative: dem Tisch.' },
    { q: 'Complete: "Ich gehe in ___ Küche."', options: ['der', 'die', 'dem', 'den'], answer: 1,
      explain: 'gehen = movement → accusative: in die Küche.' },
    { q: 'Which verb signals a fixed location (dative)?', options: ['legen', 'stellen', 'stehen', 'setzen'], answer: 2,
      explain: 'stehen = to be standing (location) → dative. The others are movement verbs.' },
    { q: 'What is "in das" contracted?', options: ['im', 'ins', 'am', 'ans'], answer: 1,
      explain: 'in + das → ins (movement/accusative).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: 'Nine two-way prepositions: <span class="de">in, an, auf, über, unter, vor, hinter, neben, zwischen</span>.' },
    { c: 'r-akkusativ', html: '<span class="de r-question">Wohin?</span> (movement) → <strong>accusative</strong>; <span class="de r-question">Wo?</span> (location) → <strong>dative</strong>.' },
    { c: 'r-verb', html: 'Verb pairs: <span class="de">legen/stellen/setzen</span> (acc.) vs <span class="de">liegen/stehen/sitzen</span> (dat.). Contractions: <span class="de">im, am, ins, ans</span>.' }
  ],
  revisionTips: [
    'Ask one question before choosing the case: Wohin? (→ accusative) or Wo? (→ dative).',
    'Pair the verbs: legen↔liegen, stellen↔stehen, setzen↔sitzen — first is motion, second is position.',
    'Use the contractions: ins/ans for motion, im/am for location.'
  ]
};

window.CHAPTER = CHAPTER;
