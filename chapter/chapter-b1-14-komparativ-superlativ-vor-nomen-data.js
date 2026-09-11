/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 14
   "Komparativ & Superlativ vor Nomen" — comparative and
   superlative adjectives placed directly before a noun, with
   full adjective-declension endings applied on top (combining
   Ch.12's weak/mixed/strong system with comparison). Covers
   regular comparison (groß→größer→am größten→der größte),
   irregular comparatives (gut→besser, hoch→höher, viel→mehr,
   gern→lieber), and the predicate-vs-attributive distinction
   (Das Auto ist größer. vs. das größere Auto).
   IMPORTANT: dialogue uses ONLY Wiebke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-14 list (95 items) — a
   city-living/urban-planning theme (Wohnraum, Lebensqualität,
   Verkehrssituation, Stadtviertel, Fußgängerzone, Grünfläche,
   Mikro-Wohnen, Homeoffice, barrierearm, familienfreundlich…),
   an excellent natural fit for comparing cities, apartments,
   and neighbourhoods — woven throughout the story, reading, and
   exercises.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-14-komparativ-superlativ-vor-nomen',
  phase: 'B1 · Phase 1',
  number: 14,
  title: 'Komparativ & Superlativ vor Nomen',
  titleEn: 'Comparative & superlative before nouns',
  description: 'Das Auto ist größer. → das größere Auto. Das Auto ist am schnellsten. → das schnellste Auto. This chapter takes the comparison you already know and puts it directly in front of a noun — which means the adjective now needs a declension ending too. Two systems, one sentence.',
  xp: 250,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 15, title: 'N-Deklination', titleEn: 'N-declension (weak masculine nouns)' , href: 'chapter-b1-15-n-deklination.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>comparing everything.</em>',
    intro: 'Wiebke and Timo compare neighbourhoods — a bigger park here, a better traffic situation there, the highest quality of life somewhere else — every comparison landing directly in front of a noun, with the declension ending riding along: der schnellere Weg, das größte Grün.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear comparative and superlative adjectives take declension endings, just like any other adjective before a noun'
    ],
    scene: 'Im Café — Wiebke und Timo vergleichen Wohnungen und Städte',
    femaleSpeakers: ['Wiebke'],
    dialogue: [
      { speaker: 'Wiebke', tokens: [
        { w: 'Dieses', role: 'r-akkusativ', en: 'this (neut.)', hi: 'यह', pron: 'DEE-zes', type: 'Determiner' },
        { w: 'Stadtviertel', role: 'r-akkusativ', en: 'neighborhood', hi: 'मोहल्ला', pron: 'SHTAT-fir-tel', type: 'Noun · neut.', why: 'das Stadtviertel (this chapter).', ex: 'Dieses Stadtviertel hat einen größeren Park.', exEn: 'This neighborhood has a bigger park.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'größeren', role: 'r-akkusativ', en: 'bigger', hi: 'बड़ा', pron: 'GRÖ-se-ren', type: 'Adjective · Komparativ vor Nomen', why: 'Komparativ + noun takes normal adjective endings (this chapter).', ex: 'einen größeren Park', exEn: 'a bigger park' },
        { w: 'Park', role: 'r-akkusativ', en: 'park', hi: 'पार्क', pron: 'park', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'This neighborhood has a bigger park.', hi: 'Is mohalle mein ek bada park hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'andere', role: 'r-subject', en: 'other', hi: 'दूसरा', pron: 'AN-de-ruh', type: 'Adjective' },
        { w: 'Stadtviertel', role: 'r-subject', en: 'neighborhood', hi: 'मोहल्ला', pron: 'SHTAT-fir-tel', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'bessere', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-se-ruh', type: 'Adjective · Komparativ vor Nomen', why: 'besser + noun (this chapter).', ex: 'eine bessere Verkehrssituation', exEn: 'a better traffic situation' },
        { w: 'Verkehrssituation', role: 'r-akkusativ', en: 'traffic situation', hi: 'यातायात स्थिति', pron: 'fer-KAIRS-zi-too-a-tsyon', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'But the other neighborhood has a better traffic situation.', hi: 'Par doosre mohalle mein behtar yatayat sthiti hai.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'gibt', role: 'r-verb', en: 'is there', hi: 'है', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'höchste', role: 'r-akkusativ', en: 'highest', hi: 'सबसे ऊंची', pron: 'HÖKHS-tuh', type: 'Adjective · Superlativ vor Nomen', why: 'Superlativ + noun (this chapter).', ex: 'die höchste Lebensqualität', exEn: 'the highest quality of life' },
        { w: 'Lebensqualität', role: 'r-akkusativ', en: 'quality of life', hi: 'जीवन गुणवत्ता', pron: 'LAY-benz-kva-li-tayt', type: 'Noun · fem.', why: 'die Lebensqualität (this chapter).', ex: 'eine hohe Lebensqualität', exEn: 'a high quality of life' },
        { w: 'der', role: 'r-dativ', en: 'of the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Stadt', role: 'r-dativ', en: 'city (gen.)', hi: 'शहर की', pron: 'shtat', type: 'Noun · fem. genitive' },
        { w: '.', plain: true }
      ], en: 'True. But here there is the highest quality of life in the city.', hi: 'Sahi hai. Par yahaan shahar ki sabse ooncha jeevan gunwatta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'wichtiges', role: 'r-subject', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-ti-ges', type: 'Adjective' },
        { w: 'Argument', role: 'r-subject', en: 'argument', hi: 'तर्क', pron: 'ar-goo-MENT', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'gibt', role: 'r-verb', en: 'is there', hi: 'है', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Grünfläche', role: 'r-akkusativ', en: 'green space', hi: 'हरियाली क्षेत्र', pron: 'GRÜN-fle-khuh', type: 'Noun · fem.', why: 'die Grünfläche (this chapter).', ex: 'mehr Grünfläche', exEn: 'more green space' },
        { w: '?', plain: true }
      ], en: 'That is an important argument. Where is there more green space?', hi: 'Yeh ek zaroori tark hai. Kahaan zyada hariyaali kshetra hai?' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'gibt', role: 'r-verb', en: 'is there', hi: 'है', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'größte', role: 'r-akkusativ', en: 'biggest', hi: 'सबसे बड़ी', pron: 'GRÖS-tuh', type: 'Adjective · Superlativ vor Nomen' },
        { w: 'Grünfläche', role: 'r-akkusativ', en: 'green space', hi: 'हरियाली क्षेत्र', pron: 'GRÜN-fle-khuh', type: 'Noun · fem.' },
        { w: 'der', role: 'r-dativ', en: 'of the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Stadt', role: 'r-dativ', en: 'city (gen.)', hi: 'शहर की', pron: 'shtat', type: 'Noun · fem. genitive' },
        { w: '.', plain: true }
      ], en: 'Here there is the biggest green space in the city.', hi: 'Yahaan shahar ki sabse badi hariyaali kshetra hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'nehmen', role: 'r-verb', en: 'let us take', hi: 'लेते हैं', pron: 'NAY-men', type: 'Verb · nehmen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dieses', role: 'r-akkusativ', en: 'this (neut.)', hi: 'यह', pron: 'DEE-zes', type: 'Determiner' },
        { w: 'Stadtviertel', role: 'r-akkusativ', en: 'neighborhood', hi: 'मोहल्ला', pron: 'SHTAT-fir-tel', type: 'Noun · neut.' },
        { w: '!', plain: true }
      ], en: 'Then let us take this neighborhood!', hi: 'Toh chalo yeh mohalla lete hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already know two systems separately: comparison (<span class="de">groß → größer → am größten</span>) and adjective declension (weak/mixed/strong). This chapter fuses them: whenever a comparative or superlative sits directly before a noun, it takes a declension ending just like any other adjective — <span class="de">das größere Zimmer</span>, <span class="de">die größte Stadt</span>. Only when the adjective stands alone after sein/werden does it stay bare: <span class="de">Das Auto ist größer.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KOMPARATIV & SUPERLATIV VOR NOMEN (B1 level only): comparative adjectives (regular: -er, e.g. günstiger; irregular: gut→besser, hoch→höher, viel→mehr, gern→lieber) and superlative adjectives (regular: -st-, e.g. günstigst-; irregular: gut→best-, hoch→höchst-, viel→meist-, gern→liebst-) placed directly before a noun, ALWAYS combined with the correct weak/mixed/strong adjective-declension ending from Ch.12. Predicate adjectives (after sein/werden, e.g. "Das Auto ist größer") never take a declension ending — only adjectives directly before a noun do. ' +
    'Do NOT expect als ob, je…desto, comparative clauses, or other B2 comparison structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Comparative before a noun always needs BOTH the comparative -er AND a declension ending: "ein größeres Zimmer" not "ein größer Zimmer" or "ein größeres Zimmer ist" (mixing predicate and attributive).\n' +
    '- Superlative before a noun uses der/die/das + -st(e) + declension ending: "die schönste Stadt" not "die schönste Stadt ist" as a bare fragment, and not "am schönsten Stadt" (am + superlative is only for the predicate form, never before a noun).\n' +
    '- Irregular comparatives/superlatives: gut→besser→best-, hoch→höher→höchst- (drop the c), viel→mehr (never declines, no ending ever) →meist-, gern→lieber (adverb, never declines) →liebst-.\n' +
    '- teuer, dunkel, and similar adjectives with a final unstressed -er/-el drop that vowel in the comparative: teuer→teurer (not teuerer), dunkel→dunkler (not dunkeler).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Comparison check:</b> one sentence on whether comparative/superlative forms correctly combined with a declension ending before each noun.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you fuse comparison and declension automatically, even with irregular forms. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the irregular comparative table once (gut/hoch/viel/gern) — those trip up most learners — then continue.',
    low: 'Worth another pass through the Grammar section — practise saying the four-step ladder (positive → comparative → superlative-adverb → superlative-before-noun) out loud for five common adjectives.'
  },

  parserSentence: [
    { w: 'das', role: 'plain' }, { w: 'größere', role: 'r-comparative' },
    { w: 'Zimmer', role: 'plain' }, { w: 'und', role: 'r-conjunction' },
    { w: 'die', role: 'plain' }, { w: 'schönste', role: 'r-superlative' },
    { w: 'Stadt', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how comparison and adjective declension combine into one ending.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wiebke and Timo compare apartments, phones, and cities.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 95 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master comparative and superlative endings before nouns, including irregular forms.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage comparing cities, full of comparatives and superlatives before nouns.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch comparative and superlative endings in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare cities, apartments, universities, and products using correct endings.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a comparison using comparative and superlative phrases naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill positive → comparative → superlative transformation and endings.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 95 chapter words — city-living and urban-planning vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Positive→comparative→superlative transformation drills, ending-completion exercises, error correction, and a comparison-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison reference — regular and irregular comparative/superlative tables, declension-before-noun rules, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ein größeres Zimmer', text: 'Combine comparative adjectives with the correct ending' },
    { de: 'die schönste Stadt', text: 'Combine superlative adjectives with the correct ending' },
    { de: 'gut → besser → best-', text: 'Handle the four irregular comparatives correctly' },
    { de: 'Das Auto ist größer.', text: 'Recognize when NO ending is needed (predicate position)' },
    { de: 'Städte, Wohnungen, Handys vergleichen', text: 'Compare real things naturally in speech and writing' }
  ],

  // ---------- Vocabulary (95 items — full chapter-14 upload list) ----------
  vocab: [
    { de: 'Wohnraum', art: 'der', gender: 'm', plural: 'Wohnräume', pos: 'noun', level: 'B1', en: 'living space', hi: 'रहने की जगह', ex: 'Ich suche eine Wohnung mit mehr Wohnraum.', exEn: 'I\'m looking for an apartment with more living space.', exHi: 'Main ek flat dhoondh rahi hoon jismein zyada rehne ki jagah ho.' },
    { de: 'Bildung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'education', hi: 'शिक्षा', ex: 'Gute Bildung ist wichtig für die Zukunft.', exEn: 'Good education is important for the future.', exHi: 'Achhi shiksha bhavishya ke liye zaroori hai.' },
    { de: 'Lebensqualität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'quality of life', hi: 'जीवन की गुणवत्ता', ex: 'Die bessere Lebensqualität wächst jedes Jahr.', exEn: 'The better quality of life grows every year.', exHi: 'Behtar jeevan gunwatta har saal badhti hai.' },
    { de: 'Verkehrssituation', art: 'die', gender: 'f', plural: 'Verkehrssituationen', pos: 'noun', level: 'B1', en: 'traffic situation', hi: 'यातायात स्थिति', ex: 'Wegen der besseren Verkehrssituation ziehen viele um.', exEn: 'Because of the better traffic situation, many people move.', exHi: 'Behtar yaataayaat sthiti ki wajah se, kai log shift ho jaate hain.' },
    { de: 'möglicherweise', pos: 'adverb', level: 'B1', en: 'possibly', hi: 'शायद', ex: 'Möglicherweise ziehen wir nächstes Jahr um.', exEn: 'Possibly, we\'ll move next year.', exHi: 'Shayad hum agle saal shift ho jaayenge.' },
    { de: 'alltäglich', pos: 'adjective', level: 'B1', en: 'ordinary', hi: 'रोज़मर्रा का', ex: 'Das ist ein alltägliches Problem in der Stadt.', exEn: 'That\'s an ordinary problem in the city.', exHi: 'Yeh sheher ki ek rozmarra ki samasya hai.' },
    { de: 'angehen', pos: 'verb', level: 'B1', en: 'to concern', hi: 'संबंधित होना', ex: 'Das geht mich nichts an.', exEn: 'That doesn\'t concern me.', exHi: 'Iska mujhse koi sambandh nahi.', conj: { praesens: 'geht an', praeteritum: 'ging an', perfekt: 'hat angegangen' } },
    { de: 'anonym', pos: 'adjective', level: 'B1', en: 'anonymous', hi: 'गुमनाम', ex: 'In großen Städten fühlt man sich manchmal anonym.', exEn: 'In big cities, you sometimes feel anonymous.', exHi: 'Bade shehron mein, kabhi-kabhi aap khud ko gumnaam mahsoos karte hain.' },
    { de: 'anscheinend', pos: 'adverb', level: 'B1', en: 'apparently', hi: 'ऐसा लगता है', ex: 'Anscheinend wächst die Lebensqualität hier.', exEn: 'Apparently, the quality of life is growing here.', exHi: 'Aisa lagta hai ki yahan jeevan gunwatta badh rahi hai.' },
    { de: 'sich aufhalten', pos: 'verb', level: 'B1', en: 'to be, to spend time', hi: 'समय बिताना', ex: 'Wir halten uns oft im Stadtviertel auf.', exEn: 'We often spend time in the district.', exHi: 'Hum aksar us ilaake mein samay bitaate hain.', conj: { praesens: 'hält sich auf', praeteritum: 'hielt sich auf', perfekt: 'hat sich aufgehalten' } },
    { de: 'ausgehen', pos: 'verb', level: 'B1', en: 'to assume (von + D.)', hi: 'मान लेना', ex: 'Ich gehe davon aus, dass die Wohnung frei ist.', exEn: 'I assume that the apartment is free.', exHi: 'Main maan leta hoon ki flat khaali hai.', conj: { praesens: 'geht aus', praeteritum: 'ging aus', perfekt: 'ist ausgegangen' } },
    { de: 'autonom', pos: 'adjective', level: 'B1', en: 'autonomous', hi: 'स्वायत्त', ex: 'Das Haus hat ein autonomes Energiesystem.', exEn: 'The house has an autonomous energy system.', exHi: 'Ghar mein ek swayatt urja pranaali hai.' },
    { de: 'begegnen', pos: 'verb', level: 'B1', en: 'to see, encounter', hi: 'सामना करना', ex: 'Diesem Problem begegnet man oft in Großstädten.', exEn: 'You often encounter this problem in big cities.', exHi: 'Bade shehron mein is samasya ka saamna aksar hota hai.', conj: { praesens: 'begegnet', praeteritum: 'begegnete', perfekt: 'ist begegnet' } },
    { de: 'Schönheit', art: 'die', gender: 'f', plural: 'Schönheiten', pos: 'noun', level: 'B1', en: 'beauty', hi: 'सुंदरता', ex: 'Die Schönheit der Stadt beeindruckte uns.', exEn: 'The city\'s beauty impressed us.', exHi: 'Sheher ki sundarta ne humein prabhaavit kiya.' },
    { de: 'eindeutig', pos: 'adjective', level: 'B1', en: 'clear', hi: 'स्पष्ट', ex: 'Der Unterschied ist eindeutig.', exEn: 'The difference is clear.', exHi: 'Antar spasht hai.' },
    { de: 'essbar', pos: 'adjective', level: 'B1', en: 'edible', hi: 'खाने योग्य', ex: 'Diese Pflanze ist nicht essbar.', exEn: 'This plant is not edible.', exHi: 'Yeh paudha khaane layak nahi hai.' },
    { de: 'formen', pos: 'verb', level: 'B1', en: 'to form', hi: 'आकार देना', ex: 'Die Bewohner formen das Stadtbild.', exEn: 'The residents shape the cityscape.', exHi: 'Nivaasi sheher ki shakl banaate hain.', conj: { praesens: 'formt', praeteritum: 'formte', perfekt: 'hat geformt' } },
    { de: 'geeignet', pos: 'adjective', level: 'B1', en: 'suitable (für + A.)', hi: 'उपयुक्त', ex: 'Diese Wohnung ist gut für Familien geeignet.', exEn: 'This apartment is well suited for families.', exHi: 'Yeh flat parivaaron ke liye uchit hai.' },
    { de: 'heutig', pos: 'adjective', level: 'B1', en: 'present-day', hi: 'आजकल का', ex: 'Die heutige Jugend nutzt viel Technologie.', exEn: 'Today\'s youth uses a lot of technology.', exHi: 'Aajkal ke yuva bahut takneek ka upyog karte hain.' },
    { de: 'interaktiv', pos: 'adjective', level: 'B1', en: 'interactive', hi: 'संवादात्मक', ex: 'Das Museum hat interaktive Ausstellungen.', exEn: 'The museum has interactive exhibits.', exHi: 'Museum mein sanvaadatmak pradarshan hain.' },
    { de: 'irgendein', pos: 'determiner', level: 'B1', en: 'some (indefinite)', hi: 'कोई भी', ex: 'Irgendein Stadtviertel wird passen.', exEn: 'Some district will fit.', exHi: 'Koi na koi ilaaka fit ho jaayega.' },
    { de: 'irgendeins', pos: 'pronoun', level: 'B1', en: 'some (one)', hi: 'कोई एक', ex: 'Nimm irgendeins, sie sind alle gut.', exEn: 'Take any one, they\'re all good.', exHi: 'Koi bhi le lo, sab achhe hain.' },
    { de: 'lebenswert', pos: 'adjective', level: 'B1', en: 'worth living in', hi: 'रहने लायक', ex: 'Berlin ist die lebenswerteste Stadt Deutschlands.', exEn: 'Berlin is Germany\'s most livable city.', exHi: 'Berlin Germany ka sabse rehne layak sheher hai.' },
    { de: 'längst', pos: 'adverb', level: 'B1', en: 'for a long time (already)', hi: 'बहुत पहले से', ex: 'Das Problem ist längst bekannt.', exEn: 'The problem has been known for a long time.', exHi: 'Yeh samasya bahut pehle se maloom hai.' },
    { de: 'miteinander', pos: 'adverb', level: 'B1', en: 'togetherness, with one another', hi: 'साथ मिलकर', ex: 'Die Nachbarn leben friedlich miteinander.', exEn: 'The neighbours live peacefully with one another.', exHi: 'Padosi shanti se saath mein rehte hain.' },
    { de: 'Riesen-', pos: 'prefix', level: 'B1', en: 'huge (e.g. Riesenhaus)', hi: 'विशाल', ex: 'Sie wohnen in einem Riesenhaus.', exEn: 'They live in a huge house.', exHi: 'Woh ek vishaal ghar mein rehte hain.' },
    { de: 'sich ausbreiten', pos: 'verb', level: 'B1', en: 'to spread', hi: 'फैलना', ex: 'Die Stadt breitet sich schnell aus.', exEn: 'The city is spreading quickly.', exHi: 'Sheher tezi se fail raha hai.', conj: { praesens: 'breitet sich aus', praeteritum: 'breitete sich aus', perfekt: 'hat sich ausgebreitet' } },
    { de: 'sich befinden', pos: 'verb', level: 'B1', en: 'to be located', hi: 'स्थित होना', ex: 'Das Fundbüro befindet sich am Bahnhof.', exEn: 'The lost and found office is located at the station.', exHi: 'Kho-paayi kaaryaalay station par sthit hai.', conj: { praesens: 'befindet sich', praeteritum: 'befand sich', perfekt: 'hat sich befunden' } },
    { de: 'spielen', pos: 'verb', level: 'B1', en: 'to play (eine Rolle spielen: to play a role)', hi: 'भूमिका निभाना', ex: 'Die Lage spielt eine wichtige Rolle.', exEn: 'The location plays an important role.', exHi: 'Sthaan ek mahatvapurna bhoomika nibhaata hai.', conj: { praesens: 'spielt', praeteritum: 'spielte', perfekt: 'hat gespielt' } },
    { de: 'umformulieren', pos: 'verb', level: 'B1', en: 'to rephrase', hi: 'फिर से लिखना', ex: 'Ich muss den Satz umformulieren.', exEn: 'I need to rephrase the sentence.', exHi: 'Mujhe vaakya ko dobara likhna hoga.', conj: { praesens: 'formuliert um', praeteritum: 'formulierte um', perfekt: 'hat umformuliert' } },
    { de: 'vergrößern', pos: 'verb', level: 'B1', en: 'to enlarge', hi: 'बड़ा करना', ex: 'Die Stadt möchte den Park vergrößern.', exEn: 'The city wants to enlarge the park.', exHi: 'Sheher park ko bada karna chahta hai.', conj: { praesens: 'vergrößert', praeteritum: 'vergrößerte', perfekt: 'hat vergrößert' } },
    { de: 'visuell', pos: 'adjective', level: 'B1', en: 'visual', hi: 'दृश्य', ex: 'Die visuelle Gestaltung der Stadt ist modern.', exEn: 'The city\'s visual design is modern.', exHi: 'Sheher ki drishya sajaavat aadhunik hai.' },
    { de: 'barrierearm', pos: 'adjective', level: 'B1', en: 'partly accessible', hi: 'आंशिक रूप से सुलभ', ex: 'Das neue Gebäude ist barrierearm.', exEn: 'The new building is largely accessible.', exHi: 'Naya bhavan aashik roop se sulabh hai.' },
    { de: 'Altenheim', art: 'das', gender: 'n', plural: 'Altenheime', pos: 'noun', level: 'B1', en: 'care home', hi: 'वृद्धाश्रम', ex: 'Meine Großmutter lebt in einem Altenheim.', exEn: 'My grandmother lives in a care home.', exHi: 'Meri dadi ek vriddhaashram mein rehti hain.' },
    { de: 'Bürogebäude', art: 'das', gender: 'n', plural: 'Bürogebäude', pos: 'noun', level: 'B1', en: 'office building', hi: 'कार्यालय भवन', ex: 'Das höhere Bürogebäude wurde letztes Jahr gebaut.', exEn: 'The taller office building was built last year.', exHi: 'Zyada oonchi office building pichhle saal banayi gayi.' },
    { de: 'Freigelände', art: 'das', gender: 'n', plural: 'Freigelände', pos: 'noun', level: 'B1', en: 'open-air site', hi: 'खुला स्थल', ex: 'Das Freigelände wird für Konzerte genutzt.', exEn: 'The open-air site is used for concerts.', exHi: 'Khula sthal concerts ke liye upyog hota hai.' },
    { de: 'Freizeitangebot', art: 'das', gender: 'n', plural: 'Freizeitangebote', pos: 'noun', level: 'B1', en: 'recreational activity', hi: 'मनोरंजन गतिविधि', ex: 'Das Freizeitangebot in der Stadt ist vielfältig.', exEn: 'The recreational offerings in the city are diverse.', exHi: 'Sheher mein manoranjan ke vikalp vividh hain.' },
    { de: 'Fundbüro', art: 'das', gender: 'n', plural: 'Fundbüros', pos: 'noun', level: 'B1', en: 'lost and found office', hi: 'खोया-पाया कार्यालय', ex: 'Ich habe meinen Schlüssel im Fundbüro abgegeben.', exEn: 'I handed in my key at the lost and found office.', exHi: 'Maine apni chaabi kho-paayi office mein jama ki.' },
    { de: 'Fünftel', art: 'das', gender: 'n', plural: 'Fünftel', pos: 'noun', level: 'B1', en: 'fifth', hi: 'पाँचवाँ हिस्सा', ex: 'Ein Fünftel der Bewohner arbeitet im Homeoffice.', exEn: 'A fifth of the residents work from home.', exHi: 'Nivaasiyon ka ek paanchvaan hissa ghar se kaam karta hai.' },
    { de: 'Hallenbad', art: 'das', gender: 'n', plural: 'Hallenbäder', pos: 'noun', level: 'B1', en: 'indoor swimming pool', hi: 'इनडोर स्विमिंग पूल', ex: 'Das neue Hallenbad ist sehr modern.', exEn: 'The new indoor pool is very modern.', exHi: 'Naya indoor pool bahut aadhunik hai.' },
    { de: 'Homeoffice', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'home office', hi: 'घर से काम', ex: 'Immer mehr Menschen arbeiten im Homeoffice.', exEn: 'More and more people are working from home.', exHi: 'Zyada se zyada log ghar se kaam kar rahe hain.' },
    { de: 'Kulturfest', art: 'das', gender: 'n', plural: 'Kulturfeste', pos: 'noun', level: 'B1', en: 'cultural festival', hi: 'सांस्कृतिक उत्सव', ex: 'Das Kulturfest findet jedes Jahr im Sommer statt.', exEn: 'The cultural festival takes place every summer.', exHi: 'Sanskritik utsav har garmi mein hota hai.' },
    { de: 'Mikro-Wohnen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'micro living', hi: 'सूक्ष्म आवास', ex: 'Mikro-Wohnen wird in Großstädten immer beliebter.', exEn: 'Micro living is becoming more popular in big cities.', exHi: 'Bade shehron mein sookshm aavas zyada lokpriya ho raha hai.' },
    { de: 'Prinzip', art: 'das', gender: 'n', plural: 'Prinzipien', pos: 'noun', level: 'B1', en: 'principle', hi: 'सिद्धांत', ex: 'Das Prinzip der Stadtplanung ist einfach.', exEn: 'The principle of city planning is simple.', exHi: 'Sheher niyojan ka siddhant seedha hai.' },
    { de: 'Privatauto', art: 'das', gender: 'n', plural: 'Privatautos', pos: 'noun', level: 'B1', en: 'private car', hi: 'निजी कार', ex: 'Weniger Menschen besitzen ein Privatauto.', exEn: 'Fewer people own a private car.', exHi: 'Kam log ab niji car rakhte hain.' },
    { de: 'Schaufenster', art: 'das', gender: 'n', plural: 'Schaufenster', pos: 'noun', level: 'B1', en: 'shop window', hi: 'दुकान की खिड़की', ex: 'Das Schaufenster war schön dekoriert.', exEn: 'The shop window was beautifully decorated.', exHi: 'Dukaan ki khidki sundar sajaayi gayi thi.' },
    { de: 'Stadtviertel', art: 'das', gender: 'n', plural: 'Stadtviertel', pos: 'noun', level: 'B1', en: 'district, area', hi: 'शहर का इलाका', ex: 'Unser Stadtviertel ist sehr familienfreundlich.', exEn: 'Our district is very family-friendly.', exHi: 'Hamara ilaaka bahut parivarik hai.' },
    { de: 'Tempo', art: 'das', gender: 'n', plural: 'Tempos', pos: 'noun', level: 'B1', en: 'speed', hi: 'गति', ex: 'Das Tempo des Großstadtlebens ist hoch.', exEn: 'The pace of big-city life is high.', exHi: 'Bade sheher ke jeevan ki gati tez hai.' },
    { de: 'Anteil', art: 'der', gender: 'm', plural: 'Anteile', pos: 'noun', level: 'B1', en: 'percentage, share', hi: 'हिस्सा', ex: 'Der Anteil der Fußgänger nimmt zu.', exEn: 'The percentage of pedestrians is increasing.', exHi: 'Paidal chalne walon ka hissa badh raha hai.' },
    { de: 'Arbeitsort', art: 'der', gender: 'm', plural: 'Arbeitsorte', pos: 'noun', level: 'B1', en: 'workplace', hi: 'कार्यस्थल', ex: 'Mein Arbeitsort liegt im Zentrum.', exEn: 'My workplace is located downtown.', exHi: 'Mera kaaryasthal kendra mein hai.' },
    { de: 'Ausflugstipp', art: 'der', gender: 'm', plural: 'Ausflugstipps', pos: 'noun', level: 'B1', en: 'excursion tip', hi: 'यात्रा सुझाव', ex: 'Hast du einen guten Ausflugstipp für heute?', exEn: 'Do you have a good excursion tip for today?', exHi: 'Kya tumhare paas aaj ke liye koi achha yatra sujhaav hai?' },
    { de: 'Aussichtsturm', art: 'der', gender: 'm', plural: 'Aussichtstürme', pos: 'noun', level: 'B1', en: 'observation tower', hi: 'दृश्य मीनार', ex: 'Vom Aussichtsturm sieht man die ganze Stadt.', exEn: 'From the observation tower, you see the whole city.', exHi: 'Drishya minaar se poora sheher dikhta hai.' },
    { de: 'Bürgermeister', art: 'der', gender: 'm', plural: 'Bürgermeister', pos: 'noun', level: 'B1', en: 'mayor', hi: 'महापौर', ex: 'Der Bürgermeister eröffnete das neue Hallenbad.', exEn: 'The mayor opened the new indoor pool.', exHi: 'Mahapaur ne naya indoor pool khola.' },
    { de: 'Dialekt', art: 'der', gender: 'm', plural: 'Dialekte', pos: 'noun', level: 'B1', en: 'dialect', hi: 'बोली', ex: 'In dieser Region spricht man einen starken Dialekt.', exEn: 'In this region, people speak a strong dialect.', exHi: 'Is ilaake mein log ek majboot boli bolte hain.' },
    { de: 'Dienstleistungsbereich', art: 'der', gender: 'm', plural: 'Dienstleistungsbereiche', pos: 'noun', level: 'B1', en: 'service industry', hi: 'सेवा क्षेत्र', ex: 'Viele Jobs gibt es im Dienstleistungsbereich.', exEn: 'Many jobs exist in the service industry.', exHi: 'Seva kshetra mein kai naukriyaan hain.' },
    { de: 'Dreck', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dirt', hi: 'गंदगी', ex: 'Der Dreck auf der Straße störte alle.', exEn: 'The dirt on the street bothered everyone.', exHi: 'Sadak par gandagi ne sabko pareshaan kiya.' },
    { de: 'Forumsname', art: 'der', gender: 'm', plural: 'Forumsnamen', pos: 'noun', level: 'B1', en: 'forum name', hi: 'मंच का नाम', ex: 'Sein Forumsname war lustig.', exEn: 'His forum name was funny.', exHi: 'Uska forum naam mazedaar tha.' },
    { de: 'Fußgänger', art: 'der', gender: 'm', plural: 'Fußgänger', pos: 'noun', level: 'B1', en: 'pedestrian', hi: 'पैदल यात्री', ex: 'Der Anteil der Fußgänger wächst stetig.', exEn: 'The percentage of pedestrians keeps growing.', exHi: 'Paidal chalne walon ka hissa lagataar badh raha hai.' },
    { de: 'Fußweg', art: 'der', gender: 'm', plural: 'Fußwege', pos: 'noun', level: 'B1', en: 'foot path', hi: 'पैदल रास्ता', ex: 'Der Fußweg führt direkt zum Park.', exEn: 'The foot path leads directly to the park.', exHi: 'Paidal raasta seedhe park tak jaata hai.' },
    { de: 'Hausbewohner', art: 'der', gender: 'm', plural: 'Hausbewohner', pos: 'noun', level: 'B1', en: 'inhabitant (of a building)', hi: 'निवासी', ex: 'Die Hausbewohner trafen sich im Hof.', exEn: 'The building\'s residents met in the courtyard.', exHi: 'Ghar ke nivaasi aangan mein mile.' },
    { de: 'Kiosk', art: 'der', gender: 'm', plural: 'Kioske', pos: 'noun', level: 'B1', en: 'kiosk', hi: 'कियोस्क', ex: 'Am Kiosk kaufte ich eine Zeitung.', exEn: 'At the kiosk, I bought a newspaper.', exHi: 'Kiosk par maine ek akhbaar khareeda.' },
    { de: 'Klang', art: 'der', gender: 'm', plural: 'Klänge', pos: 'noun', level: 'B1', en: 'sound', hi: 'ध्वनि', ex: 'Der Klang der Stadt war laut.', exEn: 'The sound of the city was loud.', exHi: 'Sheher ki dhwani tez thi.' },
    { de: 'Landmensch', art: 'der', gender: 'm', plural: 'Landmenschen', pos: 'noun', level: 'B1', en: 'country person', hi: 'ग्रामीण व्यक्ति', ex: 'Immer mehr Landmenschen ziehen in die Städte.', exEn: 'More and more country people are moving to the cities.', exHi: 'Zyada se zyada gramin log shehron mein ja rahe hain.' },
    { de: 'Pfad', art: 'der', gender: 'm', plural: 'Pfade', pos: 'noun', level: 'B1', en: 'way, path', hi: 'रास्ता', ex: 'Der Pfad führte durch den Wald.', exEn: 'The path led through the forest.', exHi: 'Raasta jungle se hokar gaya.' },
    { de: 'Schmutz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dirt', hi: 'मैल', ex: 'Der Schmutz auf dem Boden war unangenehm.', exEn: 'The dirt on the floor was unpleasant.', exHi: 'Farsh par maila napasand thi.' },
    { de: 'Stadtmensch', art: 'der', gender: 'm', plural: 'Stadtmenschen', pos: 'noun', level: 'B1', en: 'townie, city dweller', hi: 'शहरी व्यक्ति', ex: 'Ich bin ein echter Stadtmensch.', exEn: 'I\'m a real city dweller.', exHi: 'Main ek pakka shahri vyakti hoon.' },
    { de: 'Tierpark', art: 'der', gender: 'm', plural: 'Tierparks', pos: 'noun', level: 'B1', en: 'zoo', hi: 'चिड़ियाघर', ex: 'Der Tierpark ist bei Kindern beliebt.', exEn: 'The zoo is popular with children.', exHi: 'Chidiyaghar bachon mein lokpriya hai.' },
    { de: 'Zirkus', art: 'der', gender: 'm', plural: 'Zirkusse', pos: 'noun', level: 'B1', en: 'circus', hi: 'सर्कस', ex: 'Der Zirkus kommt jedes Jahr in die Stadt.', exEn: 'The circus comes to town every year.', exHi: 'Circus har saal sheher mein aata hai.' },
    { de: 'Musikinteressierte', pos: 'noun', level: 'B1', en: 'musically interested (person)', hi: 'संगीत में रुचि रखने वाला', ex: 'Die Musikinteressierten trafen sich am Freigelände.', exEn: 'The music enthusiasts met at the open-air site.', exHi: 'Sangeet premi khule sthal par mile.' },
    { de: 'Akademie', art: 'die', gender: 'f', plural: 'Akademien', pos: 'noun', level: 'B1', en: 'academy', hi: 'अकादमी', ex: 'Er studiert an einer Akademie für Kunst.', exEn: 'He studies at an art academy.', exHi: 'Woh ek kala akademi mein padhta hai.' },
    { de: 'Altersgruppe', art: 'die', gender: 'f', plural: 'Altersgruppen', pos: 'noun', level: 'B1', en: 'peer group', hi: 'आयु वर्ग', ex: 'Jede Altersgruppe braucht andere Angebote.', exEn: 'Every age group needs different offerings.', exHi: 'Har aayu varg ko alag suvidhaon ki zaroorat hai.' },
    { de: 'Bürgermeisterin', art: 'die', gender: 'f', plural: 'Bürgermeisterinnen', pos: 'noun', level: 'B1', en: 'mayor (female)', hi: 'महापौर (महिला)', ex: 'Die Bürgermeisterin eröffnete das Kulturfest.', exEn: 'The mayor opened the cultural festival.', exHi: 'Mahapaur ne sanskritik utsav khola.' },
    { de: 'Erholungsmöglichkeit', art: 'die', gender: 'f', plural: 'Erholungsmöglichkeiten', pos: 'noun', level: 'B1', en: 'recreational opportunity', hi: 'मनोरंजन का अवसर', ex: 'Der Park bietet viele Erholungsmöglichkeiten.', exEn: 'The park offers many recreational opportunities.', exHi: 'Park manoranjan ke kai avsar deta hai.' },
    { de: 'Ferne', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'distance', hi: 'दूरी', ex: 'In der Ferne sah man die Berge.', exEn: 'In the distance, you could see the mountains.', exHi: 'Doori mein pahaad dikh rahe the.' },
    { de: 'Fußgängerin', art: 'die', gender: 'f', plural: 'Fußgängerinnen', pos: 'noun', level: 'B1', en: 'pedestrian (female)', hi: 'पैदल यात्री (महिला)', ex: 'Die Fußgängerin überquerte die Straße vorsichtig.', exEn: 'The pedestrian crossed the street carefully.', exHi: 'Paidal yatri ne saavdhaani se sadak paar ki.' },
    { de: 'Fußgängerzone', art: 'die', gender: 'f', plural: 'Fußgängerzonen', pos: 'noun', level: 'B1', en: 'pedestrian zone', hi: 'पैदल यात्री क्षेत्र', ex: 'Die Fußgängerzone ist samstags voll.', exEn: 'The pedestrian zone is full on Saturdays.', exHi: 'Paidal yatri kshetra shanivaar ko bhara hota hai.' },
    { de: 'Grünfläche', art: 'die', gender: 'f', plural: 'Grünflächen', pos: 'noun', level: 'B1', en: 'green space', hi: 'हरित क्षेत्र', ex: 'Ich möchte ein Viertel mit mehr Grünflächen.', exEn: 'I\'d like a district with more green spaces.', exHi: 'Mujhe zyada hariyaali wala ilaaka chahiye.' },
    { de: 'Hausbewohnerin', art: 'die', gender: 'f', plural: 'Hausbewohnerinnen', pos: 'noun', level: 'B1', en: 'inhabitant (female)', hi: 'निवासी (महिला)', ex: 'Die Hausbewohnerin half beim Umzug.', exEn: 'The building\'s resident helped with the move.', exHi: 'Ghar ki nivaasi ne shifting mein madad ki.' },
    { de: 'Hausfassade', art: 'die', gender: 'f', plural: 'Hausfassaden', pos: 'noun', level: 'B1', en: 'house front', hi: 'मकान का अगला हिस्सा', ex: 'Die Hausfassade wurde neu gestrichen.', exEn: 'The house front was freshly painted.', exHi: 'Makan ka agla hissa naya rangaya gaya.' },
    { de: 'Kindertagesstätte', art: 'die', gender: 'f', plural: 'Kindertagesstätten', pos: 'noun', level: 'B1', en: 'kindergarten', hi: 'आंगनवाड़ी', ex: 'Die Kindertagesstätte liegt in der Nähe.', exEn: 'The kindergarten is nearby.', exHi: 'Aanganwadi paas mein hai.' },
    { de: 'Klinik', art: 'die', gender: 'f', plural: 'Kliniken', pos: 'noun', level: 'B1', en: 'hospital', hi: 'अस्पताल', ex: 'Die Klinik ist rund um die Uhr geöffnet.', exEn: 'The hospital is open around the clock.', exHi: 'Aspataal chaubees ghante khula rehta hai.' },
    { de: 'Rolle', art: 'die', gender: 'f', plural: 'Rollen', pos: 'noun', level: 'B1', en: 'role', hi: 'भूमिका', ex: 'Die Lage spielt eine wichtige Rolle bei der Wahl.', exEn: 'The location plays an important role in the choice.', exHi: 'Chunaav mein sthaan ek mahatvapurna bhoomika nibhaata hai.' },
    { de: 'Solarzelle', art: 'die', gender: 'f', plural: 'Solarzellen', pos: 'noun', level: 'B1', en: 'solar cell', hi: 'सौर सेल', ex: 'Auf dem Dach sind Solarzellen installiert.', exEn: 'Solar cells are installed on the roof.', exHi: 'Chhat par saur sel lagaaye gaye hain.' },
    { de: 'Sportsachen', pos: 'noun', level: 'B1', en: 'sport gear', hi: 'खेल का सामान', ex: 'Vergiss deine Sportsachen nicht.', exEn: 'Don\'t forget your sport gear.', exHi: 'Apna khel ka saamaan mat bhoolo.' },
    { de: 'Villa', art: 'die', gender: 'f', plural: 'Villen', pos: 'noun', level: 'B1', en: 'mansion', hi: 'हवेली', ex: 'Die Villa liegt außerhalb der Stadt.', exEn: 'The mansion is located outside the city.', exHi: 'Haveli sheher ke bahar sthit hai.' },
    { de: 'Volkshochschule', art: 'die', gender: 'f', plural: 'Volkshochschulen', pos: 'noun', level: 'B1', en: 'community college', hi: 'सामुदायिक कॉलेज', ex: 'Ich lerne Deutsch an der Volkshochschule.', exEn: 'I\'m learning German at the community college.', exHi: 'Main community college mein German seekh raha hoon.' },
    { de: 'Windturbine', art: 'die', gender: 'f', plural: 'Windturbinen', pos: 'noun', level: 'B1', en: 'wind turbine', hi: 'पवन टरबाइन', ex: 'Die Windturbine produziert grünen Strom.', exEn: 'The wind turbine produces green electricity.', exHi: 'Pavan turbine hariyaali wali bijli banaati hai.' },
    { de: 'entsprechend', pos: 'adjective', level: 'B1', en: 'equivalent, corresponding', hi: 'तदनुसार', ex: 'Die entsprechende Regel gilt auch hier.', exEn: 'The corresponding rule also applies here.', exHi: 'Yahan bhi tadanusaar niyam lagoo hota hai.' },
    { de: 'familienfreundlich', pos: 'adjective', level: 'B1', en: 'family friendly', hi: 'परिवार के अनुकूल', ex: 'Ich möchte ein familienfreundlicheres Stadtviertel.', exEn: 'I\'d like a more family-friendly district.', exHi: 'Mujhe zyada parivarik ilaaka chahiye.' },
    { de: 'lauten', pos: 'verb', level: 'B1', en: 'to be, to read (of a text)', hi: 'लिखा होना', ex: 'Die Regel lautet: mehr Grün, weniger Autos.', exEn: 'The rule reads: more green, fewer cars.', exHi: 'Niyam kehta hai: zyada hariyaali, kam gaadiyaan.', conj: { praesens: 'lautet', praeteritum: 'lautete', perfekt: 'hat gelautet' } },
    { de: 'traumhaft', pos: 'adjective', level: 'B1', en: 'dreamy', hi: 'सपनों जैसा', ex: 'Die Aussicht vom Turm war traumhaft.', exEn: 'The view from the tower was dreamy.', exHi: 'Minaar se drishya sapno jaisa tha.' },
    { de: 'voraussichtlich', pos: 'adjective', level: 'B1', en: 'expected', hi: 'अपेक्षित', ex: 'Der Bau ist voraussichtlich nächstes Jahr fertig.', exEn: 'Construction is expected to finish next year.', exHi: 'Nirmaan agle saal poora hone ki ummeed hai.' },
    { de: 'wachsen', pos: 'verb', level: 'B1', en: 'to grow', hi: 'बढ़ना', ex: 'Die Stadt wächst jedes Jahr weiter.', exEn: 'The city keeps growing every year.', exHi: 'Sheher har saal badhta rehta hai.', conj: { praesens: 'wächst', praeteritum: 'wuchs', perfekt: 'ist gewachsen' } },
    { de: 'Kasus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'case (grammar)', hi: 'कारक', ex: 'Der Kasus bestimmt die Endung.', exEn: 'The case determines the ending.', exHi: 'Kaarak ending tay karta hai.' },
    { de: 'Singularform', art: 'die', gender: 'f', plural: 'Singularformen', pos: 'noun', level: 'B1', en: 'singular form', hi: 'एकवचन रूप', ex: 'Die Singularform von "Häuser" ist "Haus".', exEn: 'The singular form of "Häuser" is "Haus".', exHi: '"Häuser" ka ekvachan roop "Haus" hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Komparativ vor Nomen',
      body: [ 'A comparative adjective (regular: adjective + -er) placed directly before a noun ALSO needs the correct weak/mixed/strong declension ending — the two systems stack.' ],
      table: {
        head: ['Positive', 'Komparativ', 'Vor Nomen'],
        rows: [
          ['groß', 'größer', 'ein größeres Zimmer'],
          ['schön', 'schöner', 'die schönere Stadt'],
          ['günstig', 'günstiger', 'eine günstigere Wohnung'],
          ['schnell', 'schneller', 'ein schnelleres Auto']
        ]
      },
      hinglish: 'Comparative adjective (regular: adjective + -er) jab noun ke pehle aata hai, usko bhi weak/mixed/strong declension ending chahiye — dono systems ek saath lagte hain.'
    },
    {
      title: 'Superlativ vor Nomen',
      body: [ 'The superlative before a noun uses der/die/das + adjective-st(e) + declension ending — never am + superlative (that form is only for the predicate position).' ],
      table: {
        head: ['Positive', 'Superlativ (Prädikat)', 'Vor Nomen'],
        rows: [
          ['groß', 'am größten', 'der größte Hund'],
          ['schön', 'am schönsten', 'die schönste Stadt'],
          ['modern', 'am modernsten', 'das modernste Auto'],
          ['wichtig', 'am wichtigsten', 'das wichtigste Problem']
        ]
      },
      hinglish: 'Noun ke pehle superlative ke liye der/die/das + adjective-st(e) + declension ending chahiye — kabhi bhi am + superlative nahi (woh sirf predicate position ke liye hai).'
    },
    {
      title: 'Unregelmäßige Komparative & Superlative',
      body: [ 'Four common adjectives break the regular pattern completely — memorize these four as a set.' ],
      table: {
        head: ['Positiv', 'Komparativ', 'Superlativ (Prädikat)', 'Vor Nomen'],
        rows: [
          ['gut', 'besser', 'am besten', 'der bessere Lehrer / die beste Lehrerin'],
          ['hoch', 'höher', 'am höchsten', 'das höhere Gebäude / das höchste Gebäude'],
          ['viel', 'mehr', 'am meisten', 'mehr Zeit (mehr never declines)'],
          ['gern', 'lieber', 'am liebsten', 'das liebste Hobby']
        ]
      },
      note: 'mehr and lieber never take a declension ending, in any position — they are frozen forms.',
      hinglish: 'Chaar common adjectives regular pattern nahi follow karte — inhe ek set ki tarah yaad karo. mehr aur lieber kabhi bhi declension ending nahi lete.'
    },
    {
      title: 'Komparativ vs. Superlativ — der volle Weg',
      body: [ 'See the full ladder from plain adjective to noun phrase, for one example word.' ],
      table: {
        head: ['Stufe', 'Form'],
        rows: [
          ['Positiv (Prädikat)', '<span class="de">Das Haus ist groß.</span>'],
          ['Komparativ (Prädikat)', '<span class="de">Das Haus ist größer.</span>'],
          ['Komparativ (vor Nomen)', '<span class="de">Das größere Haus gehört Anna.</span>'],
          ['Superlativ (Prädikat)', '<span class="de">Das Auto ist am schnellsten.</span>'],
          ['Superlativ (vor Nomen)', '<span class="de">Das schnellste Auto kostet viel Geld.</span>']
        ]
      },
      hinglish: 'Plain adjective se noun phrase tak poora rasta ek hi example word ke saath.'
    },
    {
      title: 'Vergleich mit Artikeln (alle vier Fälle)',
      body: [ 'The comparative/superlative ending follows the SAME weak/mixed/strong rules as any other adjective, across all four cases.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', 'der größere Hund'],
          ['Akkusativ', 'einen größeren Hund'],
          ['Dativ', 'mit einem größeren Hund'],
          ['Genitiv', 'des größeren Hundes']
        ]
      },
      hinglish: 'Comparative/superlative ending waise hi weak/mixed/strong rules follow karti hai jaise koi bhi doosra adjective, chaaron cases mein.'
    },
    {
      title: 'Prädikativ vs. attributiv — wann KEINE Endung?',
      body: [ 'Predicate adjectives (after sein/werden/bleiben) never take an ending — comparative or not. Endings are required ONLY when the adjective sits directly before a noun.' ],
      table: {
        head: ['Position', 'Example'],
        rows: [
          ['Prädikativ (keine Endung)', '<span class="de">Das Auto ist größer.</span>'],
          ['Attributiv (Endung nötig)', '<span class="de">das größere Auto</span>']
        ]
      },
      hinglish: 'Predicate adjectives (sein/werden/bleiben ke baad) kabhi ending nahi lete — comparative ho ya na ho. Ending sirf tab chahiye jab adjective seedhe noun ke pehle ho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from forgetting the declension ending, using the wrong article combination, or mixing predicate/attributive forms.' ],
      mistakes: [
        { wrong: 'der größer Hund', right: 'der größere Hund', why: 'The comparative before a noun still needs the weak declension -e ending after der.' },
        { wrong: 'ein größere Wohnung', right: 'eine größere Wohnung', why: 'The article itself must also match gender/case (eine, not ein, for feminine Nominativ/Akkusativ) — and the adjective still needs -e.' },
        { wrong: 'das mehr große Auto', right: 'das größere Auto', why: 'German never says "mehr + adjective" for comparison — it always changes the adjective itself: groß → größer.' },
        { wrong: 'der am größte Hund', right: 'der größte Hund', why: 'am + superlative is only for the predicate position; before a noun, use der/die/das + -st(e) directly, no "am".' },
        { wrong: 'Berlin ist am schönsten Stadt.', right: 'Berlin ist die schönste Stadt.', why: 'Once a noun follows, drop am and use der/die/das + -ste: die schönste Stadt. am schönsten only works with no noun after it.' }
      ],
      hinglish: 'Yeh paanch galtiyaan declension ending bhoolne se, galat article combination use karne se, ya predicate/attributive forms mix karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Comparisons appear constantly in Goethe B1 tasks — comparing cities, apartments, products, and jobs. Ask two questions every time.' ],
      note: 'Need to compare two things? → Komparativ. Need the best/biggest/most beautiful? → Superlativ. Is the adjective directly before a noun? → Add the correct declension ending.',
      hinglish: 'Comparisons Goethe B1 tasks mein lagataar aate hain. Do sawaal poocho: Do cheezein compare karni hain? → Komparativ. Best/biggest chahiye? → Superlativ. Adjective noun ke pehle hai? → Sahi declension ending jodo.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die lebenswerteste Stadt Deutschlands',
    titleEn: 'Germany\'s most livable city',
    tokens: [
      { w: 'Laut', role: 'r-preposition', en: 'according to', hi: 'के अनुसार', type: 'Preposition · Dat./Gen.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dativ' },
      { w: 'neuen', role: 'r-adjective', en: 'new', hi: 'नया', type: 'Adjective · gemischt · Dat.', why: 'Mixed declension: einer + Dativ → -en.' },
      { w: 'Umfrage', role: 'plain', en: 'survey', hi: 'सर्वेक्षण', type: 'Noun · fem.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'Berlin', role: 'plain', en: 'Berlin', hi: 'बर्लिन', type: 'Name' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'lebenswerteste', role: 'r-superlative', en: 'most livable', hi: 'सबसे रहने लायक', type: 'Superlativ · schwach · Nom.', why: 'Superlative + weak declension: die + Nominativ feminine → -e.' },
      { w: 'Stadt', role: 'plain', en: 'city', hi: 'शहर', type: 'Noun · fem.' },
      { w: 'Deutschlands', role: 'plain', en: 'of Germany (gen.)', hi: 'जर्मनी का', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'größerer', role: 'r-comparative', en: 'bigger', hi: 'बड़ा', type: 'Komparativ · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er.' },
      { w: 'Anteil', role: 'plain', en: 'share, percentage', hi: 'हिस्सा', type: 'Noun · masc.', why: 'der Anteil (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (masc./fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Bewohner', role: 'plain', en: 'residents', hi: 'निवासी', type: 'Noun · plural' },
      { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करता है', type: 'Verb · arbeiten' },
      { w: 'inzwischen', role: 'r-adverb', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Homeoffice', role: 'plain', en: 'home office', hi: 'घर से काम', type: 'Noun · neut.', why: 'das Homeoffice (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'besseren', role: 'r-comparative', en: 'better', hi: 'बेहतर', type: 'Komparativ · schwach · Gen.', why: 'Comparative + weak declension: Genitiv → -en.' },
      { w: 'Verkehrssituation', role: 'plain', en: 'traffic situation', hi: 'यातायात स्थिति', type: 'Noun · fem.', why: 'die Verkehrssituation (this chapter).' },
      { w: 'nutzen', role: 'r-verb', en: 'use', hi: 'उपयोग करते हैं', type: 'Verb · nutzen' },
      { w: 'immer', role: 'r-adverb', en: 'ever', hi: 'हमेशा', type: 'Adverb' },
      { w: 'mehr', role: 'r-comparative', en: 'more', hi: 'ज़्यादा', type: 'Komparativ (unveränderlich)' },
      { w: 'Fußgänger', role: 'plain', en: 'pedestrians', hi: 'पैदल यात्री', type: 'Noun · plural', why: 'der Fußgänger (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'neueren', role: 'r-comparative', en: 'newer', hi: 'नए', type: 'Komparativ · schwach · Akk. Pl.', why: 'Comparative + weak declension: die + Akkusativ plural → -en.' },
      { w: 'Fußgängerzonen', role: 'plain', en: 'pedestrian zones', hi: 'पैदल यात्री क्षेत्र', type: 'Noun · plural', why: 'die Fußgängerzone (this chapter).' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'Mieten', role: 'plain', en: 'rents', hi: 'किराया', type: 'Noun · plural' },
      { w: 'hoch', role: 'r-adjective', en: 'high (Satzende)', hi: 'ज़्यादा (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'sind', role: 'r-verb', en: 'are (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'wächst', role: 'r-verb', en: 'grows', hi: 'बढ़ता है', type: 'Verb · wachsen', why: 'wachsen (this chapter).' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'वह', type: 'Article' },
      { w: 'wichtigste', role: 'r-superlative', en: 'most important', hi: 'सबसे ज़रूरी', type: 'Superlativ · schwach · Nom.', why: 'Superlative + weak declension: das + Nominativ neuter → -e.' },
      { w: 'Freizeitangebot', role: 'plain', en: 'recreational offering', hi: 'मनोरंजन गतिविधि', type: 'Noun · neut.', why: 'das Freizeitangebot (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Stadt', role: 'plain', en: 'city', hi: 'शहर', type: 'Noun · fem.' },
      { w: 'weiter', role: 'r-adverb', en: 'further', hi: 'आगे', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'ziehen', role: 'r-verb', en: 'move (Position 2)', hi: 'चले जाते हैं (Position 2)', type: 'Verb · ziehen (Position 2)' },
      { w: 'immer', role: 'r-adverb', en: 'ever', hi: 'हमेशा', type: 'Adverb' },
      { w: 'mehr', role: 'r-comparative', en: 'more', hi: 'ज़्यादा', type: 'Komparativ (unveränderlich)' },
      { w: 'Landmenschen', role: 'plain', en: 'country people', hi: 'ग्रामीण लोग', type: 'Noun · plural', why: 'der Landmensch (this chapter).' },
      { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'größeren', role: 'r-comparative', en: 'bigger', hi: 'बड़े', type: 'Komparativ · schwach · Akk. Pl.', why: 'Comparative + weak declension: die + Akkusativ plural → -en.' },
      { w: 'Städte', role: 'plain', en: 'cities', hi: 'शहर', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'According to a new survey, Berlin is Germany\'s most livable city. A larger percentage of residents now work from home. Because of the better traffic situation, more and more pedestrians use the newer pedestrian zones. Although rents are high, the city\'s most important recreational offering keeps growing. That\'s why more and more country people are moving into the bigger cities.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_014_L001', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich überlege, nach Leipzig oder nach Dresden zu ziehen. Was meinst du?', en: 'Timo, I\'m considering moving to Leipzig or Dresden. What do you think?' },
      { id: 'B1_014_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Leipzig hat die günstigeren Mieten, aber Dresden die schönere Altstadt.', en: 'Leipzig has the cheaper rents, but Dresden has the more beautiful old town.' },
      { id: 'B1_014_L003', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und welche Stadt hat das bessere Nachtleben?', en: 'And which city has better nightlife?' },
      { id: 'B1_014_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da ist Leipzig klar die lebendigere Stadt. Aber am Ende zählt dein Bauchgefühl.', en: 'There Leipzig is clearly the livelier city. But in the end your gut feeling counts.' }
    ],
    transcript: 'Timo, ich überlege, nach Leipzig oder nach Dresden zu ziehen. Was meinst du? Leipzig hat die günstigeren Mieten, aber Dresden die schönere Altstadt. Und welche Stadt hat das bessere Nachtleben? Da ist Leipzig klar die lebendigere Stadt. Aber am Ende zählt dein Bauchgefühl.',
    translation: 'Timo, I\'m considering moving to Leipzig or Dresden. What do you think? Leipzig has the cheaper rents, but Dresden has the more beautiful old town. And which city has better nightlife? There Leipzig is clearly the livelier city. But in the end your gut feeling counts.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'überlege' },
      { w: ',', plain: true },
      { w: 'nach' },
      { w: 'Leipzig' },
      { w: 'oder' },
      { w: 'nach' },
      { w: 'Dresden' },
      { w: 'zu' },
      { w: 'ziehen' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'meinst' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Leipzig' },
      { w: 'hat' },
      { w: 'die' },
      { w: 'günstigeren' },
      { w: 'Mieten' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'Dresden' },
      { w: 'die' },
      { w: 'schönere' },
      { w: 'Altstadt' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'welche' },
      { w: 'Stadt' },
      { w: 'hat' },
      { w: 'das' },
      { w: 'bessere' },
      { w: 'Nachtleben' },
      { w: '?', plain: true },
      { w: 'Da' },
      { w: 'ist' },
      { w: 'Leipzig' },
      { w: 'klar' },
      { w: 'die' },
      { w: 'lebendigere' },
      { w: 'Stadt' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'am' },
      { w: 'Ende' },
      { w: 'zählt' },
      { w: 'dein' },
      { w: 'Bauchgefühl' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Stadt hat günstigere Mieten?', qEn: 'Which city has cheaper rents?', options: ['Dresden', 'Leipzig', 'beide gleich', 'keine von beiden'], optionsEn: ['Dresden', 'Leipzig', 'both the same', 'neither of them'], answer: 1,
        explain: '"Leipzig hat die günstigeren Mieten."' },
      { q: 'Welche Stadt nennt Timo lebendiger?', qEn: 'Which city does Timo call livelier?', options: ['Dresden', 'Leipzig', 'beide', 'keine'], optionsEn: ['Dresden', 'Leipzig', 'both', 'none'], answer: 1,
        explain: '"Da ist Leipzig klar die lebendigere Stadt."' }
    ]
  },

  speaking: [
    { task: "Du überlegst, nach Leipzig oder Dresden zu ziehen. Frag deinen Freund.", taskEn: "You're considering moving to Leipzig or Dresden. Ask your friend.", de: "Welche Stadt hat die günstigeren Mieten und die schönere Altstadt?", en: "Which city has the cheaper rents and the nicer old town?" },
    { task: "Dein Freund fragt, welche Stadt die beste Lebensqualität hat.", taskEn: "Your friend asks which city has the best quality of life.", de: "Leipzig hat die bessere Lebensqualität und den günstigeren Wohnraum.", en: "Leipzig has the better quality of life and cheaper housing." },
    { task: "Eine Kollegin fragt, wo die Verkehrssituation schlechter ist.", taskEn: "A colleague asks where the traffic situation is worse.", de: "In der größeren Stadt ist die Verkehrssituation deutlich schlechter.", en: "In the bigger city the traffic situation is considerably worse." },
    { task: "Deine Freundin sucht eine Uni. Vergleiche zwei.", taskEn: "Your friend is looking for a university. Compare two.", de: "Die kleinere Uni bietet die bessere Bildung, aber die längeren Wege.", en: "The smaller university offers better teaching, but longer journeys." },
    { task: "Ein Freund fragt, welche Wohnung du nimmst.", taskEn: "A friend asks which flat you'll take.", de: "Ich nehme die hellere Wohnung, weil sie den schöneren Blick hat.", en: "I'll take the brighter flat, because it has the nicer view." },
    { task: "Eine Bekannte fragt, welche Stadt am lebenswertesten ist.", taskEn: "An acquaintance asks which city is the most liveable.", de: "Für mich ist die kleinere Stadt die lebenswerteste.", en: "For me the smaller city is the most liveable." },
    { task: "Rollenspiel: Ihr diskutiert über den Umzug.", taskEn: "Role-play: you discuss the move.", de: "Dresden hat die schönere Altstadt. — Aber Leipzig hat die günstigeren Mieten und das größere Angebot.", en: "Dresden has the nicer old town. — But Leipzig has cheaper rents and a bigger range on offer." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short comparison (six to eight sentences) — two apartments, two cities, or two products — using at least four comparative or superlative phrases directly before a noun (with correct declension endings).',
    starters: ['Die größere Wohnung …', 'Die schönste Stadt …', 'Das bessere Modell …'],
    placeholder: 'Die günstigere Wohnung hat weniger Wohnraum, aber die bessere Verkehrssituation …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich möchte ein ___ Zimmer." (groß, Komparativ)',
      options: ['größer', 'größeres', 'größte'],
      answer: 1,
      explain: 'Comparative + mixed declension: ein + Akkusativ/Nominativ neuter → -es (größeres).'
    },
    gap: {
      sentence: ['Berlin ist die ', ' Stadt Deutschlands.'],
      gaps: [ { answer: 'größte', accepts: ['größte'] } ],
      explain: 'Superlative + weak declension: die + Nominativ feminine → -e (größte).'
    },
    match: {
      q: 'Match each form to its stage.',
      pairs: [
        { noun: 'groß', art: 'Positiv' },
        { noun: 'größer', art: 'Komparativ' },
        { noun: 'am größten / der größte', art: 'Superlativ' }
      ]
    },
    builder: {
      target: 'Build: "I need the better apartment."',
      bank: ['Ich', 'brauche', 'die', 'bessere', 'Wohnung', '.'],
      answer: ['Ich', 'brauche', 'die', 'bessere', 'Wohnung', '.'],
      roles: { 'bessere': 'r-comparative', 'brauche': 'r-verb' }
    },
    positiveToComparative: {
      title: 'Transform: Positiv → Komparativ',
      prompt: 'Rewrite before a noun: "Das ist ein günstiges Zimmer." (make it comparative)',
      answer: 'Das ist ein günstigeres Zimmer.',
      explain: 'günstig → günstiger (comparative) + mixed declension (ein + neuter Akk./Nom. → -es) = günstigeres.'
    },
    comparativeToSuperlative: {
      title: 'Transform: Komparativ → Superlativ',
      prompt: 'Rewrite as superlative before a noun: "die schönere Stadt" (make it superlative)',
      answer: 'die schönste Stadt',
      explain: 'schön → schöner (comparative) → schönst- (superlative) + weak declension (die + fem. Nom. → -e) = schönste.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das ist der am größte Hund.',
      right: 'Das ist der größte Hund.',
      explain: 'am + superlative is only for the predicate position — before a noun, use der/die/das + -st(e) directly, no "am".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich suche eine ___ Wohnung." (günstig, Komparativ)', options: ['günstiger', 'günstigere', 'günstigste'], answer: 1,
      explain: 'Comparative + weak declension: eine + Nominativ/Akkusativ feminine → -e.' },
    { q: 'Complete: "Das ist das ___ Auto." (schnell, Superlativ)', options: ['schnellste', 'am schnellsten', 'schneller'], answer: 0,
      explain: 'Superlative before a noun: das + -st(e), not "am".' },
    { q: 'Which is the correct comparative of "gut"?', options: ['guter', 'besser', 'gutier'], answer: 1,
      explain: 'gut is irregular: gut → besser → best-.' },
    { q: 'Complete: "Wir brauchen ___ Zeit." (viel, Komparativ)', options: ['mehr', 'mehrer', 'mehres'], answer: 0,
      explain: 'viel → mehr is irregular and never takes a declension ending.' },
    { q: 'Which sentence contains an error?', options: ['das größere Auto', 'die schönste Stadt', 'der größer Hund'], answer: 2,
      explain: 'Weak declension after der needs -e: "der größere Hund," not "der größer Hund."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-comparative', html: 'Before a noun, a comparative or superlative adjective needs BOTH the comparison marker (-er / -st-) AND the correct declension ending — the two systems always stack.' },
    { c: 'r-superlative', html: 'am + superlative is ONLY for the predicate position (Das Auto ist am schnellsten). Before a noun, use der/die/das + -st(e) instead — never "am."' },
    { c: 'r-comparative', html: 'Four irregular forms break the pattern: gut→besser/best-, hoch→höher/höchst-, viel→mehr/meist- (mehr never declines), gern→lieber/liebst- (lieber never declines).' }
  ],
  revisionTips: [
    'Whenever comparing directly before a noun, check two things in order: is the comparison marker correct (-er/-st-, or one of the four irregulars)? Then, does the declension ending match weak/mixed/strong?',
    'Practise the full ladder out loud for five different adjectives: positive → comparative (predicate) → comparative (before noun) → superlative (predicate) → superlative (before noun).',
    'Remember: mehr and lieber are frozen — they never take any declension ending, in any position.'
  ]
};

window.CHAPTER = CHAPTER;
