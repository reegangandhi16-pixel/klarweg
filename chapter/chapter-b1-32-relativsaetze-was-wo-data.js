/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 32
   "Relativsätze mit was & wo" — was after alles/etwas/nichts/das/
   superlatives; wo for places (spoken) vs in dem/in der (formal).
   Does NOT introduce worüber/womit/wofür or B2 relative structures.
   IMPORTANT: dialogue uses ONLY Renke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-32 list (21 items) — a
   street-art/public-art theme (Kunstwerk, Graffito, Brunnen,
   Statue, Stadtteil…) — a natural fit for "der Stadtteil, wo…"
   and "das Kunstwerk, was mich beeindruckt hat…".
============================================================ */
const CHAPTER = {
  id: 'b1-32-relativsaetze-was-wo',
  phase: 'B1 · Phase 1',
  number: 32,
  title: 'Relativsätze mit was & wo',
  titleEn: 'Relative clauses with was & wo',
  description: 'Refer back to a whole idea with was (alles, was… / das, was…) and to a place with wo (die Stadt, wo… vs the more formal in der…).',
  xp: 290,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 33, title: 'je … desto / umso', titleEn: 'Proportional comparisons: je … desto/umso' , href: 'chapter-b1-33-je-desto-umso.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Refer back <em>without a specific noun.</em>',
    intro: 'Renke and Timo wander through a street-art district, impressed by everything they see and the places they found it — was refers back to a whole idea, wo to a place: alles, was mir gefällt; die Wand, wo das Kunstwerk hängt.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear relative clauses with was and wo used naturally in one conversation'
    ],
    scene: 'Der Stadtteil voller Kunst',
    femaleSpeakers: ['Renke'],
    dialogue: [
      { speaker: 'Renke', tokens: [
        { w: 'Schau', role: 'r-verb', en: 'look', hi: 'देखो', pron: 'show', type: 'Verb · imperative' },
        { w: 'dir', role: 'r-dativ', en: 'yourself', hi: 'ख़ुद के लिए', pron: 'deer', type: 'Reflexive pronoun' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Graffito', role: 'r-akkusativ', en: 'graffiti', hi: 'भित्तिचित्र', pron: 'gra-FEE-to', type: 'Noun · neut.' },
        { w: 'an', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'an', type: 'Preposition + place' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Hauswand', role: 'r-dativ', en: 'house wall (dat.)', hi: 'दीवार पर', pron: 'HOWS-vant', type: 'Noun · fem. dat.' },
        { w: 'an', role: 'r-place', en: 'over', hi: 'उधर', pron: 'an', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Look at the graffiti on the house wall over there.', hi: 'Udhar ghar ki deewaar par bhitti chitra dekho.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wow', role: 'r-subject', en: 'wow', hi: 'वाह', pron: 'vow', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'das', role: 'r-subject', en: 'that (neut.)', hi: 'वह', pron: 'das', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'जो', pron: 'vas', type: 'Relativpronomen · was', why: 'was as relative pronoun refers to alles/etwas/nichts or a whole clause (this chapter).', ex: 'Das ist genau das, was ich mag.', exEn: 'That is exactly what I like.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद करता हूँ', pron: 'mahk', type: 'Modal · mögen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Wow! That is exactly what I like.', hi: 'Wah! Yeh bilkul wahi hai jo mujhe pasand hai.' },
      { speaker: 'Renke', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Stadtteil', role: 'r-subject', en: 'district', hi: 'मोहल्ला', pron: 'SHTAT-tile', type: 'Noun · masc.', why: 'der Stadtteil (this chapter).', ex: 'der Stadtteil, wo wir sind', exEn: 'the district where we are' },
        { w: ',', plain: true },
        { w: 'wo', role: 'r-akkusativ', en: 'where', hi: 'जहाँ', pron: 'vo', type: 'Relativpronomen · wo', why: 'wo as relative pronoun refers to a place (this chapter).', ex: 'der Stadtteil, wo wir sind', exEn: 'the district where we are' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bekannt', role: 'r-akkusativ', en: 'known', hi: 'प्रसिद्ध', pron: 'be-KANT', type: 'Adjective' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Kunst', role: 'r-akkusativ', en: 'art', hi: 'कला', pron: 'kunst', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The district where we are is known for art.', hi: 'Woh mohalla, jahaan hum hain, kala ke liye prasiddh hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'जो', pron: 'vas', type: 'Relativpronomen · was' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'sehe', role: 'r-verb', en: 'see', hi: 'देखता हूँ', pron: 'ZAY-uh', type: 'Verb · sehen (Satzende)' },
        { w: ',', plain: true },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'Everything that I see here pleases me.', hi: 'Jo bhi main yahaan dekhta hoon, mujhe pasand hai.' },
      { speaker: 'Renke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Betonwand', role: 'r-subject', en: 'concrete wall', hi: 'कंक्रीट दीवार', pron: 'be-TOHN-vant', type: 'Noun · fem.', why: 'die Betonwand (this chapter).', ex: 'die Betonwand, wo das Kunstwerk hängt', exEn: 'the concrete wall where the artwork hangs' },
        { w: ',', plain: true },
        { w: 'wo', role: 'r-akkusativ', en: 'where', hi: 'जहाँ', pron: 'vo', type: 'Relativpronomen · wo' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kunstwerk', role: 'r-subject', en: 'artwork', hi: 'कलाकृति', pron: 'KUNST-vairk', type: 'Noun · neut.', why: 'das Kunstwerk (this chapter).', ex: 'das Kunstwerk hängt dort', exEn: 'the artwork hangs there' },
        { w: 'hängt', role: 'r-verb', en: 'hangs', hi: 'लटकी है', pron: 'henkt', type: 'Verb · hängen (Satzende)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'früher', role: 'r-adverb', en: 'earlier', hi: 'पहले', pron: 'FRÜ-her', type: 'Adverb' },
        { w: 'grau', role: 'r-subject', en: 'grey', hi: 'धूसर', pron: 'grow', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The concrete wall where the artwork hangs was earlier grey.', hi: 'Woh concrete deewaar, jahaan kalaakriti latki hai, pehle dhoosar thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचता हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wundervoll', role: 'r-akkusativ', en: 'wonderful', hi: 'अद्भुत', pron: 'vun-der-FOL', type: 'Adjective', why: 'wundervoll = wonderful (this chapter).', ex: 'Das ist wundervoll.', exEn: 'That is wonderful.' },
        { w: '.', plain: true }
      ], en: 'I find that wonderful.', hi: 'Mujhe yeh adbhut lagta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Two special relative connectors for when a normal relative pronoun won\'t fit: <span class="de">was</span> refers back to a whole idea — alles, etwas, nichts, das, or a nominalized superlative (<span class="de">Alles, <b>was</b> ich sehe…</span>) — while <span class="de">wo</span> refers to a place (<span class="de">die Stadt, <b>wo</b> ich wohne</span>), with <span class="de">in der/in dem</span> as the more formal written alternative.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE MIT WAS & WO (B1 level only): was is used after alles, etwas, nichts, vieles, manches, das, and nominalized superlatives (das Beste, was…); wo refers to a place, especially in spoken German, with in dem/in der as the more formal written alternative. ' +
    'Do NOT expect worüber, womit, wofür, wohin as a relative adverb, or B2 relative constructions — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- was, never der/die/das, after alles/etwas/nichts/vieles/manches/das and nominalized superlatives.\n' +
    '- wo (or the more formal in dem/in der) for a place — never der/die/das alone referring to a location.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>was/wo check:</b> one sentence on whether was and wo were used correctly instead of der/die/das where required.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly choose was after alles/etwas/nichts/das and wo for places every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the comparison table once — especially was vs das — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: no specific noun? was. A place? wo.'
  },

  parserSentence: [
    { w: 'Alles', role: 'plain' }, { w: ',', plain: true },
    { w: 'was', role: 'r-question' }, { w: 'ich', role: 'r-subject' },
    { w: 'sehe', role: 'plain' }, { w: ',', plain: true },
    { w: 'ist', role: 'plain' }, { w: 'schön', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: was for whole ideas, wo for places.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Renke and Timo explore a street-art district full of was and wo clauses.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 21 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master was after alles/etwas/nichts/das and wo for places (vs formal in dem/in der).' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about a city guide, full of was and wo clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch was and wo relative clauses in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe places and experiences using was and wo naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write travel or city texts using was and wo correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill was vs der/die/das and wo vs in dem/in der.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 21 chapter words — street-art and public-art vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'was vs der/die/das drills, wo vs in dem/in der, error correction, and a city-description task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete was/wo reference — triggers, formal vs informal, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'alles, was', text: 'Use was after alles/etwas/nichts' },
    { de: 'das, was', text: 'Use was after das and nominalized superlatives' },
    { de: 'die Stadt, wo', text: 'Use wo for places in spoken German' },
    { de: 'in der/in dem', text: 'Use the formal written alternative to wo' },
    { de: 'was vs das', text: 'Distinguish relative was from the relative pronoun das' }
  ],

  // ---------- Vocabulary (21 items — full chapter-32 upload list) ----------
  vocab: [
    { de: 'anregen', pos: 'verb', level: 'B1', en: 'to inspire (zu + D.)', hi: 'प्रेरित करना', ex: 'Das Kunstwerk regt zum Nachdenken an.', exEn: 'The artwork inspires reflection.', exHi: 'Kalaakriti chintan ke liye prerit karti hai.', conj: { praesens: 'regt an', praeteritum: 'regte an', perfekt: 'hat angeregt' } },
    { de: 'Installation', art: 'die', gender: 'f', plural: 'Installationen', pos: 'noun', level: 'B1', en: 'installation', hi: 'इंस्टॉलेशन', ex: 'Etwas, was mich überrascht hat, war die Installation auf der Betonwand.', exEn: 'Something that surprised me was the installation on the concrete wall.', exHi: 'Kuchh jo mujhe aashcharyachakit kar gaya, woh concrete deewaar par ki installation thi.' },
    { de: 'hinauf', pos: 'adverb', level: 'B1', en: 'up', hi: 'ऊपर', ex: 'Das Graffito reicht bis ganz hinauf.', exEn: 'The graffiti reaches all the way up.', exHi: 'Graffiti bilkul upar tak pahunchti hai.' },
    { de: 'konsumieren', pos: 'verb', level: 'B1', en: 'to consume', hi: 'उपभोग करना', ex: 'Viele konsumieren Kunst nur online.', exEn: 'Many consume art only online.', exHi: 'Kai log kala sirf online upbhog karte hain.', conj: { praesens: 'konsumiert', praeteritum: 'konsumierte', perfekt: 'hat konsumiert' } },
    { de: 'rund', pos: 'adjective', level: 'B1', en: 'round', hi: 'गोल', ex: 'Der Brunnen ist rund.', exEn: 'The fountain is round.', exHi: 'Fawwaara gol hai.' },
    { de: 'weiterentwickeln', pos: 'verb', level: 'B1', en: 'to evolve, develop further', hi: 'आगे विकसित होना', ex: 'Das Kunststück entwickelt sich weiter.', exEn: 'The piece of art keeps evolving.', exHi: 'Kala-kriti aage vikasit ho rahi hai.', conj: { praesens: 'entwickelt weiter', praeteritum: 'entwickelte weiter', perfekt: 'hat weiterentwickelt' } },
    { de: 'Graffito', art: 'das', gender: 'n', plural: 'Graffiti', pos: 'noun', level: 'B1', en: 'graffiti', hi: 'ग्रैफ़िटी', ex: 'Der Stadtteil, wo die meisten Graffiti sind, liegt in der Nähe.', exEn: 'The district where most of the graffiti is, is nearby.', exHi: 'Woh shahar ka hissa jahaan zyaadaatar graffiti hai, nazdeek hai.' },
    { de: 'Kunstobjekt', art: 'das', gender: 'n', plural: 'Kunstobjekte', pos: 'noun', level: 'B1', en: 'art object', hi: 'कला वस्तु', ex: 'Das Kunstobjekt neben dem Brunnen ist das Beste, was ich gesehen habe.', exEn: 'The art object next to the fountain is the best thing I\'ve seen.', exHi: 'Fawwaare ke bagal wali kala vastu sabse achhi cheez hai jo maine dekhi.' },
    { de: 'Kunststück', art: 'das', gender: 'n', plural: 'Kunststücke', pos: 'noun', level: 'B1', en: 'piece of art', hi: 'कला-कृति', ex: 'Das Kunststück, das wir gestern gesehen haben, entwickelt sich weiter.', exEn: 'The piece of art we saw yesterday keeps evolving.', exHi: 'Woh kala-kriti jo humne kal dekhi thi, aage vikasit ho rahi hai.' },
    { de: 'Kunstwerk', art: 'das', gender: 'n', plural: 'Kunstwerke', pos: 'noun', level: 'B1', en: 'artwork', hi: 'कलाकृति', ex: 'Das Kunstwerk an der Hauswand ist das, was mich beeindruckt hat.', exEn: 'The artwork on the house wall is what impressed me.', exHi: 'Ghar ki deewaar par ki kalaakriti wahi hai jo mujhe prabhaavit karti hai.' },
    { de: 'Brunnen', art: 'der', gender: 'm', plural: 'Brunnen', pos: 'noun', level: 'B1', en: 'fountain', hi: 'फव्वारा', ex: 'Das Kunstobjekt neben dem Brunnen ist wundervoll.', exEn: 'The art object next to the fountain is wonderful.', exHi: 'Fawwaare ke bagal wali kala vastu adbhut hai.' },
    { de: 'Kunstblog', art: 'der', gender: 'm', plural: 'Kunstblogs', pos: 'noun', level: 'B1', en: 'art blog', hi: 'कला ब्लॉग', ex: 'Es gibt nichts, was ich an diesem Kunstblog nicht mag.', exEn: 'There\'s nothing I don\'t like about this art blog.', exHi: 'Is kala blog ke baare mein aisa kuchh nahi jo mujhe pasand na ho.' },
    { de: 'Spieß', art: 'der', gender: 'm', plural: 'Spieße', pos: 'noun', level: 'B1', en: 'skewer', hi: 'सीख', ex: 'Der Spieß liegt neben der Statue.', exEn: 'The skewer lies next to the statue.', exHi: 'Seekh moorti ke bagal mein rakhi hai.' },
    { de: 'Stadtteil', art: 'der', gender: 'm', plural: 'Stadtteile', pos: 'noun', level: 'B1', en: 'district', hi: 'शहर का हिस्सा', ex: 'Der Stadtteil, wo die meisten Graffiti sind, liegt ganz in der Nähe.', exEn: 'The district where most of the graffiti is, is quite nearby.', exHi: 'Woh shahar ka hissa jahaan zyaadaatar graffiti hai, bilkul nazdeek hai.' },
    { de: 'Betonwand', art: 'die', gender: 'f', plural: 'Betonwände', pos: 'noun', level: 'B1', en: 'concrete wall', hi: 'कंक्रीट दीवार', ex: 'Die Installation auf der Betonwand hat mich überrascht.', exEn: 'The installation on the concrete wall surprised me.', exHi: 'Concrete deewaar par ki installation ne mujhe aashcharyachakit kiya.' },
    { de: 'Hauswand', art: 'die', gender: 'f', plural: 'Hauswände', pos: 'noun', level: 'B1', en: 'exterior wall of a house', hi: 'घर की बाहरी दीवार', ex: 'Das Kunstwerk an der Hauswand ist beeindruckend.', exEn: 'The artwork on the house wall is impressive.', exHi: 'Ghar ki deewaar par ki kalaakriti prabhaavshaali hai.' },
    { de: 'Radioumfrage', art: 'die', gender: 'f', plural: 'Radioumfragen', pos: 'noun', level: 'B1', en: 'radio survey', hi: 'रेडियो सर्वेक्षण', ex: 'Diese Radioumfrage hat genau das gezeigt.', exEn: 'This radio survey showed exactly that.', exHi: 'Is radio sarvekshan ne bilkul yahi dikhaaya.' },
    { de: 'Statue', art: 'die', gender: 'f', plural: 'Statuen', pos: 'noun', level: 'B1', en: 'statue', hi: 'मूर्ति', ex: 'Die Statue dort, wo die Espressokanne steht, sieht lustig aus.', exEn: 'The statue there, where the espresso pot stands, looks funny.', exHi: 'Wahaan wali moorti, jahaan espresso ketli rakhi hai, mazedaar dikhti hai.' },
    { de: 'steil', pos: 'adjective', level: 'B1', en: 'steep', hi: 'खड़ी', ex: 'Die Straße zum Stadtteil ist steil.', exEn: 'The street to the district is steep.', exHi: 'Shahar ke us hisse tak ki sadak khadi hai.' },
    { de: 'weich', pos: 'adjective', level: 'B1', en: 'soft', hi: 'नरम', ex: 'Das Material des Kunstobjekts ist weich.', exEn: 'The material of the art object is soft.', exHi: 'Kala vastu ki saamagri naram hai.' },
    { de: 'Espressokanne', art: 'die', gender: 'f', plural: 'Espressokannen', pos: 'noun', level: 'B1', en: 'espresso pot', hi: 'एस्प्रेसो केतली', ex: 'Die Statue dort, wo die Espressokanne steht, sieht lustig aus.', exEn: 'The statue there, where the espresso pot stands, looks funny.', exHi: 'Wahaan wali moorti, jahaan espresso ketli rakhi hai, mazedaar dikhti hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Wann benutzen wir "was"?',
      body: [ 'was is used after alles, etwas, nichts, vieles, manches, das, and nominalized superlatives — whenever there\'s no specific noun to point back to.' ],
      table: {
        head: ['Trigger', 'Example'],
        rows: [
          ['alles', '<span class="de">Alles, was ich sehe, ist schön.</span>'],
          ['das', '<span class="de">Das, was Rohan erklärt, ist leicht.</span>'],
          ['nichts', '<span class="de">Es gibt nichts, was ich nicht verstehe.</span>']
        ]
      },
      hinglish: 'was un jagah aata hai jahan koi khaas noun nahi hota — alles, etwas, nichts, das, ya nominalized superlatives ke baad.'
    },
    {
      title: 'Wann benutzen wir "wo"?',
      body: [ 'wo refers to a place — very common in spoken German at B1.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Ort + wo', '<span class="de">Das ist die Stadt, wo ich geboren wurde.</span>']
        ]
      },
      hinglish: 'wo ek jagah ki taraf ishaara karta hai — B1 mein spoken German mein bahut common.'
    },
    {
      title: 'wo vs in dem/in der',
      body: [ 'Both are correct. "in dem/in der" is more formal and common in writing; "wo" is more common in spoken German.' ],
      table: {
        head: ['Informal (spoken)', 'Formal (written)'],
        rows: [
          ['<span class="de">Das Hotel, wo wir gewohnt haben.</span>', '<span class="de">Das Hotel, in dem wir gewohnt haben.</span>']
        ]
      },
      hinglish: 'Dono sahi hain. "in dem/in der" zyaada formal hai; "wo" spoken German mein zyaada common hai.'
    },
    {
      title: 'was vs das',
      body: [ 'das is the relative pronoun used with a specific neuter noun; was is used when there is no specific noun — only a whole idea.' ],
      table: {
        head: ['Specific noun (das)', 'Whole idea (was)'],
        rows: [
          ['<span class="de">Das Buch, das ich lese…</span>', '<span class="de">Das, was ich lese…</span>']
        ]
      },
      hinglish: 'das kisi ek khaas neuter noun ke saath aata hai; was tab aata hai jab koi khaas noun ho hi na — sirf poori baat ya idea ho.'
    },
    {
      title: 'Häufige Ausdrücke',
      body: [ 'These combinations are extremely common at B1.' ],
      table: {
        head: ['Type', 'Examples'],
        rows: [
          ['mit was', 'alles, was · etwas, was · nichts, was · das, was · das Beste, was'],
          ['mit wo', 'der Ort, wo · die Stadt, wo · das Hotel, wo · die Schule, wo · das Restaurant, wo']
        ]
      },
      hinglish: 'Yeh combinations B1 mein bahut common hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from using der/die/das where was is needed, or the wrong case with wo.' ],
      mistakes: [
        { wrong: 'Alles, das ich weiß.', right: 'Alles, was ich weiß.', why: 'was is required after "alles" — never der/die/das.' },
        { wrong: 'Das ist die Stadt, das ich wohne.', right: 'Das ist die Stadt, wo ich wohne.', why: 'A place needs wo (or in der), not das.' },
        { wrong: 'Etwas, der mich freut.', right: 'Etwas, was mich freut.', why: 'was is required after "etwas".' },
        { wrong: 'Nichts, das passiert ist.', right: 'Nichts, was passiert ist.', why: 'was is required after "nichts".' },
        { wrong: 'Das Hotel, wo ich habe gewohnt.', right: 'Das Hotel, wo ich gewohnt habe.', why: 'The Perfekt auxiliary (habe) stays at the very end of the subordinate clause, after the participle.' }
      ],
      hinglish: 'Yeh galtiyaan der/die/das use karne se jahan was chahiye, ya wo ke saath galat word order se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'was and wo relative clauses appear constantly in Goethe B1 travel texts, city guides, and opinion pieces.' ],
      note: 'Quick check: no specific noun, just a whole idea (alles/etwas/nichts/das/superlative)? Use was. Referring to a place? Use wo (spoken) or in dem/in der (formal).',
      hinglish: 'Goethe B1 travel texts, city guides aur opinion pieces mein was aur wo relative clauses lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Stadtteil voller Kunst',
    titleEn: 'A district full of art',
    tokens: [
      { w: 'Alles', role: 'plain', en: 'everything', hi: 'सब कुछ', type: 'Indefinitpronomen' },
      { w: ',', plain: true },
      { w: 'was', role: 'r-question', en: 'that (Relativpronomen)', hi: 'जो', type: 'Relativpronomen · was' },
      { w: 'man', role: 'r-subject', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'diesem', role: 'plain', en: 'this (masc. dat.)', hi: 'इस', type: 'Determiner · Dativ' },
      { w: 'Stadtteil', role: 'plain', en: 'district', hi: 'शहर का हिस्सा', type: 'Noun · masc.', why: 'der Stadtteil (this chapter).' },
      { w: 'sieht', role: 'plain', en: 'sees (Satzende)', hi: 'देखता है (Satzende)', type: 'Verb · sehen (Satzende)' },
      { w: ',', plain: true },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'überraschend', role: 'plain', en: 'surprising (Satzende)', hi: 'आश्चर्यजनक (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'वह', type: 'Article' },
      { w: 'Ort', role: 'plain', en: 'place', hi: 'जगह', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'wo', role: 'plain', en: 'where (Relativadverb)', hi: 'जहाँ', type: 'Relativadverb · wo' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'meisten', role: 'plain', en: 'most', hi: 'ज़्यादातर', type: 'Adjective · schwach · Nom. Pl.' },
      { w: 'Graffiti', role: 'plain', en: 'graffiti (Satzende)', hi: 'ग्रैफ़िटी (Satzende)', type: 'Noun · plural (Satzende)', why: 'das Graffito, Graffiti (this chapter).' },
      { w: 'gesprüht', role: 'plain', en: 'sprayed', hi: 'छिड़की गई', type: 'Verb · sprühen (Partizip II)' },
      { w: 'wurden', role: 'plain', en: 'were (Satzende)', hi: 'गई (Satzende)', type: 'Verb · werden (Passiv Präteritum, Satzende)', why: 'Passiv Präteritum (recycled — Ch.28).' },
      { w: ',', plain: true },
      { w: 'liegt', role: 'plain', en: 'lies (Satzende)', hi: 'है (Satzende)', type: 'Verb · liegen (Satzende)' },
      { w: 'gleich', role: 'plain', en: 'right', hi: 'बिल्कुल', type: 'Adverb' },
      { w: 'hinter', role: 'plain', en: 'behind', hi: 'पीछे', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Brunnen', role: 'plain', en: 'fountain (Satzende)', hi: 'फव्वारा (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Brunnen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'वह', type: 'Article' },
      { w: 'Kunstwerk', role: 'plain', en: 'artwork', hi: 'कलाकृति', type: 'Noun · neut.', why: 'das Kunstwerk (this chapter).' },
      { w: 'an', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Betonwand', role: 'plain', en: 'concrete wall (Satzende)', hi: 'कंक्रीट दीवार (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Betonwand (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'वह', type: 'Article' },
      { w: 'Beste', role: 'plain', en: 'the best (nominalized superlative)', hi: 'सबसे अच्छा', type: 'Adjektiv als Nomen · Nom.', why: 'das Beste (recycled — Ch.31).' },
      { w: ',', plain: true },
      { w: 'was', role: 'r-question', en: 'that (Relativpronomen)', hi: 'जो', type: 'Relativpronomen · was' },
      { w: 'Besucher', role: 'plain', en: 'visitors (Satzende)', hi: 'आगंतुक (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'je', role: 'plain', en: 'ever', hi: 'कभी', type: 'Adverb' },
      { w: 'entdeckt', role: 'plain', en: 'discovered (Satzende)', hi: 'खोजा (Satzende)', type: 'Verb · entdecken (Partizip II, Satzende)' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'वह', type: 'Article' },
      { w: 'Café', role: 'plain', en: 'café', hi: 'कैफ़े', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'which (formal, Relativpronomen)', hi: 'जिसमें', type: 'Relativpronomen · Dativ (formell)', why: 'in dem is the formal written alternative to wo.' },
      { w: 'Besucher', role: 'plain', en: 'visitors', hi: 'आगंतुक', type: 'Noun · plural' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'ausruhen', role: 'plain', en: 'rest (Satzende)', hi: 'आराम करते हैं (Satzende)', type: 'Verb · sich ausruhen (Satzende)' },
      { w: 'können', role: 'plain', en: 'can (Satzende)', hi: 'सकते हैं (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'serviert', role: 'plain', en: 'serves (Satzende)', hi: 'परोसता है (Satzende)', type: 'Verb · servieren (Satzende)' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'guten', role: 'plain', en: 'good', hi: 'अच्छी', type: 'Adjective · stark · Akk.' },
      { w: 'Kaffee', role: 'plain', en: 'coffee (Satzende)', hi: 'कॉफ़ी (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Everything one sees in this district is surprising. The place where most of the graffiti was sprayed lies right behind the fountain. The artwork on the concrete wall is the best thing visitors have ever discovered. The café, in which visitors can rest, also serves good coffee.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_032_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Renke, wohin soll ich meine Schwester bringen, wo es wirklich sehenswert ist?', en: 'Renke, where should I take my sister, where it\'s really worth seeing?' },
      { id: 'B1_032_L002', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Bring sie in den Stadtteil, wo die ganze Straßenkunst ist. Das liebt sie bestimmt.', en: 'Take her to the district where all the street art is. She\'ll definitely love that.' },
      { id: 'B1_032_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee, das ist genau das, was sie sich immer gewünscht hat.', en: 'Good idea, that\'s exactly what she\'s always wanted.' },
      { id: 'B1_032_L004', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und was mir am meisten gefällt, ist die kleine Galerie an der Ecke.', en: 'And what I like most is the small gallery on the corner.' }
    ],
    transcript: 'Renke, wohin soll ich meine Schwester bringen, wo es wirklich sehenswert ist? Bring sie in den Stadtteil, wo die ganze Straßenkunst ist. Das liebt sie bestimmt. Gute Idee, das ist genau das, was sie sich immer gewünscht hat. Und was mir am meisten gefällt, ist die kleine Galerie an der Ecke.',
    translation: 'Renke, where should I take my sister, where it\'s really worth seeing? Take her to the district where all the street art is. She\'ll definitely love that. Good idea, that\'s exactly what she\'s always wanted. And what I like most is the small gallery on the corner.',
    tokens: [
      { w: 'Renke' },
      { w: ',', plain: true },
      { w: 'wohin' },
      { w: 'soll' },
      { w: 'ich' },
      { w: 'meine' },
      { w: 'Schwester' },
      { w: 'bringen' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'es' },
      { w: 'wirklich' },
      { w: 'sehenswert' },
      { w: 'ist' },
      { w: '?', plain: true },
      { w: 'Bring' },
      { w: 'sie' },
      { w: 'in' },
      { w: 'den' },
      { w: 'Stadtteil' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'die' },
      { w: 'ganze' },
      { w: 'Straßenkunst' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'liebt' },
      { w: 'sie' },
      { w: 'bestimmt' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'genau' },
      { w: 'das' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'sie' },
      { w: 'sich' },
      { w: 'immer' },
      { w: 'gewünscht' },
      { w: 'hat' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'mir' },
      { w: 'am' },
      { w: 'meisten' },
      { w: 'gefällt' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'die' },
      { w: 'kleine' },
      { w: 'Galerie' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Ecke' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wohin soll Timo seine Schwester mitnehmen?', qEn: 'Where should Timo take his sister?', options: ['ins Museum', 'in den Stadtteil mit Straßenkunst', 'ins Restaurant', 'zum Bahnhof'], optionsEn: ['to the museum', 'into the district with street art', 'to the restaurant', 'to the station'], answer: 1,
        explain: '"Bring sie in den Stadtteil, wo die ganze Straßenkunst ist."' },
      { q: 'Was mag Renke dort am meisten?', qEn: 'What does Renke like most there?', options: ['die Kirche', 'die kleine Galerie an der Ecke', 'der Park', 'der Markt'], optionsEn: ['the church', 'the small gallery on the corner', 'the park', 'the market'], answer: 1,
        explain: '"… ist die kleine Galerie an der Ecke."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, wohin er seine Schwester bringen soll.", taskEn: "A friend asks where he should take his sister.", de: "Bring sie in den Stadtteil, wo die ganze Straßenkunst ist.", en: "Take her to the district where all the street art is." },
    { task: "Er fragt, was ihr besonders gefallen wird.", taskEn: "He asks what she'll particularly like.", de: "Das, was ihr am besten gefällt, sind die Graffiti an der Betonwand.", en: "What she'll like best is the graffiti on the concrete wall." },
    { task: "Eine Kollegin fragt nach dem Brunnen.", taskEn: "A colleague asks about the fountain.", de: "Das ist der Platz, wo der alte Brunnen steht.", en: "That's the square where the old fountain is." },
    { task: "Deine Freundin fragt, was dich an Kunst anregt.", taskEn: "Your friend asks what inspires you about art.", de: "Was mich anregt, sind Kunstwerke im Freien.", en: "What inspires me is artwork outdoors." },
    { task: "Ein Bekannter fragt, wo du am liebsten bist.", taskEn: "An acquaintance asks where you like being most.", de: "Ich bin am liebsten dort, wo es ruhig und weich ist.", en: "I like being where it's quiet and soft." },
    { task: "Rollenspiel: Ihr plant einen Kunstspaziergang.", taskEn: "Role-play: you plan an art walk.", de: "Wir gehen dorthin, wo die Statue steht. — Und was mir gefällt, ist die steile Straße hinauf.", en: "We'll go where the statue is. — And what I like is the steep street going up." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short travel or city-guide text (six to eight sentences) — using at least three relative clauses with was (alles/etwas/nichts/das/superlative + was) and at least two with wo (or the formal in dem/in der).',
    starters: ['Alles, was …', 'Der Ort, wo …', 'Das Beste, was …', 'Die Stadt, in der …'],
    placeholder: 'Alles, was wir hier gesehen haben, war beeindruckend. Der Stadtteil, wo die meisten Graffiti sind …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Alles, ___ ich sehe, ist schön."',
      options: ['das', 'was', 'wo'],
      answer: 1,
      explain: 'was is required after "alles" — never der/die/das.'
    },
    gap: {
      sentence: ['Das ist die Stadt, ', ' ich geboren wurde.'],
      gaps: [ { answer: 'wo', accepts: ['wo'] } ],
      explain: 'wo refers to a place (die Stadt).'
    },
    match: {
      q: 'Match each trigger to whether it needs was or wo.',
      pairs: [
        { noun: 'alles', art: 'was' },
        { noun: 'die Stadt', art: 'wo' },
        { noun: 'das Beste', art: 'was' },
        { noun: 'das Hotel', art: 'wo' }
      ]
    },
    builder: {
      target: 'Build: "There\'s nothing that I don\'t understand."',
      bank: ['Es', 'gibt', 'nichts', ',', 'was', 'ich', 'nicht', 'verstehe', '.'],
      answer: ['Es', 'gibt', 'nichts', ',', 'was', 'ich', 'nicht', 'verstehe', '.'],
      roles: { 'was': 'r-question' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das ist die Stadt, das ich wohne.',
      right: 'Das ist die Stadt, wo ich wohne.',
      explain: 'A place needs wo (or in der), never das.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Es gibt nichts, ___ ich nicht verstehe."', options: ['das', 'was', 'wo'], answer: 1,
      explain: 'was is required after "nichts".' },
    { q: 'Complete: "Das ist das Restaurant, ___ wir gestern gegessen haben."', options: ['was', 'wo', 'das'], answer: 1,
      explain: 'wo refers to a place (das Restaurant).' },
    { q: 'Which is the more formal alternative to "wo wir gewohnt haben"?', options: ['in dem wir gewohnt haben', 'was wir gewohnt haben', 'das wir gewohnt haben'], answer: 0,
      explain: '"in dem" is the formal written alternative to wo.' },
    { q: 'Complete: "Das Beste, ___ ich erlebt habe, war meine Reise."', options: ['das', 'was', 'wo'], answer: 1,
      explain: 'was follows nominalized superlatives like "das Beste".' },
    { q: 'Which sentence contains an error?', options: ['Alles, was ich weiß, ist wichtig.', 'Das ist die Stadt, das ich wohne.', 'Der Ort, wo wir uns trafen, war schön.'], answer: 1,
      explain: 'It should be "die Stadt, wo ich wohne" — a place needs wo, not das.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-question', html: 'was follows alles, etwas, nichts, vieles, manches, das, and nominalized superlatives — whenever there\'s no specific noun to point back to.' },
    { c: 'r-question', html: 'wo refers to a place — very common in spoken German; in dem/in der is the more formal written alternative.' },
    { c: 'r-question', html: 'Never confuse was (whole idea) with das (specific neuter noun), or wo (place) with das/die/der alone.' }
  ],
  revisionTips: [
    'Before choosing a relative connector, ask: is there a specific noun, or just a whole idea (alles/etwas/nichts/das)? The whole idea always needs was.',
    'For places, default to wo in speech; switch to in dem/in der when writing something formal.',
    'Practise the four common was-phrases (alles was, etwas was, nichts was, das was) out loud until they feel automatic.'
  ]
};

window.CHAPTER = CHAPTER;
