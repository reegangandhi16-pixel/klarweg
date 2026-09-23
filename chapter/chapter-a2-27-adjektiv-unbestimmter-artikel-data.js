/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 27
   "Adjektiv nach unbestimmtem Artikel" — adjective endings after
   ein/eine/einen/einem/einer and possessive articles (mein/dein/
   sein/ihr/unser/euer/Ihr), which follow the exact same pattern.
   Unlike der/die/das, the indefinite article doesn't always show
   gender clearly (ein serves both masc. and neut. Nom.), so the
   adjective sometimes has to carry that information itself — the
   endings -er, -es, -e, -en. No adjective without article, no
   weak/strong terminology, no B1 grammar.
   Vocabulary source: uploaded chapter-27 list (~25 items; outdoor/
   adventure sports theme — das Kajak, der Nationalpark, die
   Bergstation). Recycles Ch.4 (weil), Ch.24 (deshalb/trotzdem) and
   A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-26-adjektiv-bestimmter-artikel-data.js
   exactly (flat vocab[], grammar[] rule cards, tokenized reading,
   etc.) so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "mit|spielen - to act in sth" — corrected to mitspielen (to
     take part, to play along; "to act in sth" is an imprecise
     paraphrase of the separable verb's real meaning).
   • "zurück|geben" → corrected to zurückgeben (to give back,
     to return).
   • "trotzdem - still" — glossed more precisely as nevertheless
     (its standard A2 meaning, consistent with Ch.24); "still" is
     an imprecise/ambiguous gloss.
============================================================ */
const CHAPTER = {
  id: 'a2-27-adjektiv-unbestimmter-artikel',
  phase: 'A2 · Phase 2',
  number: 27,
  title: 'Adjektiv nach unbestimmtem Artikel',
  titleEn: 'Adjective endings after the indefinite article',
  description: 'der kleine Hund becomes ein kleiner Hund. das kleine Kind becomes ein kleines Kind. Unlike der/die/das, the indefinite article ein doesn\'t always show gender clearly — so the adjective sometimes has to carry that information itself, with -er, -es, -e or -en. Possessive articles (mein/dein/sein/ihr/unser/euer/Ihr) follow the exact same pattern.',
  xp: 190,
  time: 35,
  difficulty: 'Elementary',
  nextChapter: { number: 28, title: 'Nebensatz mit als / wenn', titleEn: 'Subordinate clauses with als / wenn' , href: 'chapter-a2-28-als-wenn.html' },

  prevChapter: { number: 26, title: 'Adjektiv nach bestimmtem Artikel', titleEn: 'Adjective endings after the definite article', href: 'chapter-a2-26-adjektiv-bestimmter-artikel.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A weekend at the national park turns into an adjective drill: Timo needs a small kayak and a warm suit, and Greta hands him a light paddle for a cold day. Unlike der/die/das, ein doesn\'t always show gender itself — so the adjective has to work harder.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the same adjective take -er, -es, -e and -en depending on the article'
    ],
    scene: 'Ein Ausflug zum Nationalpark — Sprachschule Berlin',
    femaleSpeakers: ['Greta'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'kleines', role: 'r-akkusativ', en: 'small', hi: 'छोटा', pron: 'KLY-nes', type: 'Adjective · strong ending', why: 'adjective after ein (neut. acc.) takes -es (this chapter).', ex: 'ein kleines Kajak', exEn: 'a small kayak' },
        { w: 'Kajak', role: 'r-akkusativ', en: 'kayak', hi: 'कयाक', pron: 'KA-yak', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I need a small kayak.', hi: 'Mujhe ek chhota kayak chahiye.' },
      { speaker: 'Greta', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'leichtes', role: 'r-akkusativ', en: 'light', hi: 'हल्का', pron: 'LYKH-tes', type: 'Adjective · strong ending' },
        { w: 'Paddel', role: 'r-akkusativ', en: 'paddle', hi: 'पैडल', pron: 'PA-del', type: 'Noun · neut.', why: 'das Paddel (this chapter).', ex: 'ein leichtes Paddel', exEn: 'a light paddle' },
        { w: '.', plain: true }
      ], en: 'Good. Then I give you a light paddle.', hi: 'Achha. Toh main tumhe ek halka paddle deti hoon.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'warmen', role: 'r-akkusativ', en: 'warm', hi: 'गर्म', pron: 'VAR-men', type: 'Adjective · strong ending', why: 'adjective after ein (masc. acc.) takes -en (this chapter).', ex: 'einen warmen Anzug', exEn: 'a warm suit' },
        { w: 'Anzug', role: 'r-akkusativ', en: 'suit', hi: 'सूट', pron: 'AN-tsook', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Thanks! Do you also have a warm suit?', hi: 'Dhanyavaad! Kya tumhare paas garam suit bhi hai?' },
      { speaker: 'Greta', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'warmer', role: 'r-subject', en: 'warm', hi: 'गर्म', pron: 'VAR-mer', type: 'Adjective · strong ending', why: 'adjective after ein as subject (masc. nom.) takes -er (this chapter).', ex: 'ein warmer Anzug', exEn: 'a warm suit' },
        { w: 'Anzug', role: 'r-subject', en: 'suit', hi: 'सूट', pron: 'AN-tsook', type: 'Noun · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Yes. Here is a warm suit for you.', hi: 'Haan. Yeh raha ek garam suit tumhare liye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Temperatur', role: 'r-subject', en: 'temperature', hi: 'तापमान', pron: 'tem-pe-ra-TOOR', type: 'Noun · fem.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Perfect! How is the temperature today?', hi: 'Badhiya! Aaj ka taapmaan kaisa hai?' },
      { speaker: 'Greta', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'kalter', role: 'r-subject', en: 'cold', hi: 'ठंडा', pron: 'KAL-ter', type: 'Adjective · strong ending', why: 'adjective after ein as subject (masc. nom.), this chapter.', ex: 'ein kalter Tag', exEn: 'a cold day' },
        { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector' },
        { w: 'brauchst', role: 'r-verb', en: 'you need', hi: 'ज़रूरत है', pron: 'BROWKHST', type: 'Verb · brauchen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Anzug', role: 'r-akkusativ', en: 'suit', hi: 'सूट', pron: 'AN-tsook', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'It is a cold day, therefore you need the suit.', hi: 'Yeh ek thanda din hai, isliye tumhe suit ki zaroorat hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'lange', role: 'r-akkusativ', en: 'long', hi: 'लंबी', pron: 'LANG-uh', type: 'Adjective · strong ending', why: 'adjective after eine (fem. acc.) takes -e (this chapter).', ex: 'eine lange Tour', exEn: 'a long tour' },
        { w: 'Tour', role: 'r-akkusativ', en: 'tour', hi: 'यात्रा', pron: 'toor', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Nevertheless I look forward to a long tour.', hi: 'Phir bhi mujhe lambi yatra ka intezaar hai.' },
      { speaker: 'Greta', side: 'right', tokens: [
        { w: 'Gute', role: 'r-subject', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective · weak ending' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Spaß', role: 'r-akkusativ', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'See', role: 'r-dativ', en: 'lake (dat.)', hi: 'झील पर', pron: 'zay', type: 'Noun · masc. dat.' },
        { w: '!', plain: true }
      ], en: 'Good idea! Have much fun on the lake!', hi: 'Achha vichaar! Jheel par bahut maza karo!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The definite article der/die/das always shows gender and case, so the adjective just adds <b>-e</b> or <b>-en</b>. But <span class="de r-article">ein</span> is the same word for masculine and neuter Nominativ/Akkusativ — it can\'t show gender by itself. So the adjective steps in and carries that information: <b>-er</b> (masc. Nom.), <b>-es</b> (neut. Nom./Akk.), <b>-e</b> (fem. Nom./Akk.), <b>-en</b> (everywhere else — masc. Akk., all Dativ, plural). Possessive articles (<span class="de">mein/dein/sein/ihr/unser/euer/Ihr</span>) follow the exact same pattern as ein.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJECTIVE ENDINGS AFTER THE INDEFINITE ARTICLE (ein/eine/einen/einem/einer) and possessive articles (mein/dein/sein/ihr/unser/euer/Ihr), which follow the same pattern: -er (masc. Nom.), -es (neut. Nom./Akk.), -e (fem. Nom./Akk.), -en (everywhere else). ' +
    'No adjective without article, no weak/strong terminology, no B1 grammar. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Nominativ masculine: ein kleiner Hund (-er). Nominativ/Akkusativ neuter: ein kleines Kind (-es). Nominativ/Akkusativ feminine: eine kleine Tasche (-e). Everywhere else — Akkusativ masculine, all Dativ, plural: -en (einen kleinen Hund, einem kleinen Hund, einer kleinen Tasche).\n' +
    '- Possessive articles work exactly like ein: mein kleiner Bruder, meine kleine Schwester, mein kleines Auto, meinen kleinen Bruder, meinem kleinen Bruder, meiner kleinen Schwester.\n' +
    '- Flag wrong endings: "ein kleine Hund" (should be "ein kleiner Hund"), "ein kleinen Hund" (should be "ein kleinen Hund" is actually correct for Akkusativ — but flag it if used for Nominativ), "eine schönes Auto" (Auto is neuter, should be "ein schönes Auto"), "mein kleine Bruder" (should be "mein kleiner Bruder"), "mein kleiner Schwester" (Schwester is feminine, should be "meine kleine Schwester").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>-er/-es/-e/-en check:</b> one sentence on whether the learner picked the right ending for each gender/case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You place -er, -es, -e and -en correctly after ein and the possessive articles almost every time. Next: tell a one-off past event (als) from a repeated one (wenn).',
    mid: 'Good. Re-read the comparison table once (der kleine Mann → ein kleiner Mann; das kleine Kind → ein kleines Kind), then continue.',
    low: 'Worth another pass — remember: ein can\'t show gender alone, so the adjective carries it with -er/-es/-e, and -en covers everywhere else. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'habe', role: 'r-verb' },
    { w: 'ein', role: 'r-akkusativ' }, { w: 'neues', role: 'r-adjective' },
    { w: 'Kajak', role: 'r-akkusativ' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why ein needs the adjective\'s help to show gender.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A national-park trip full of ein/mein + adjective combinations.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Nationalpark, die Wanderung, sympathisch, entfernt.' },
    { id: 'grammar',    label: 'Adjektivendungen', tag: 'core',
      objective: 'Master the -er/-es/-e/-en table after ein and possessive articles, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a trip-planning story full of ein/mein + adjective phrases.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each -er/-es/-e/-en ending in a shopping conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your family, apartment, city and hobbies with correct endings.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a family or apartment description using ein/mein + adjective phrases.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the -er/-es/-e/-en table and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s outdoor/adventure words — das Kajak, der Nationalpark, die Bergstation, der Kletterer — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Full -er/-es/-e/-en drills after ein and possessive articles, plus a family-description writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete adjective-ending table after indefinite and possessive articles, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ein kleiner Hund', text: 'Use -er for Nominativ masculine' },
    { de: 'ein kleines Kind', text: 'Use -es for Nominativ/Akkusativ neuter' },
    { de: 'eine kleine Tasche', text: 'Use -e for Nominativ/Akkusativ feminine' },
    { de: 'einen kleinen Hund · einem kleinen Mann', text: 'Use -en everywhere else' },
    { de: 'mein kleiner Bruder · meine kleine Schwester', text: 'Apply the same pattern to possessive articles' }
  ],

  // ---------- Vocabulary (~25 items) ----------
  vocab: [
    { de: 'Cousin', art: 'der', gender: 'm', plural: 'Cousins', pos: 'noun', en: 'cousin', hi: 'कज़िन', ex: 'Mein kleiner Cousin hat ein gutes Surfbrett.', exEn: 'My small cousin has a good surfboard.' },
    { de: 'deshalb', pos: 'adverb', en: 'therefore', hi: 'इसलिए', ex: 'Es ist kalt. Deshalb nehme ich ein warmes Material.', exEn: 'It\'s cold. Therefore I take warm material.' },
    { de: 'Einwohnerin', art: 'die', gender: 'f', plural: 'Einwohnerinnen', pos: 'noun', en: 'inhabitant (f.)', hi: 'निवासी (महिला)', ex: 'Ihre neue Einwohnerin hat uns eingeladen.', exEn: 'Her new inhabitant (f.) invited us.' },
    { de: 'entfernt', pos: 'adjective', en: 'away, distant', hi: 'दूर', ex: 'Das Gasthaus liegt weit entfernt.', exEn: 'The inn is far away.' },
    { de: 'Gasthaus', art: 'das', gender: 'n', plural: 'Gasthäuser', pos: 'noun', en: 'inn', hi: 'सराय', ex: 'Sie hat uns zu einem kleinen Gasthaus eingeladen.', exEn: 'She invited us to a small inn.' },
    { de: 'Gesundheit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'health', hi: 'स्वास्थ्य', ex: 'Eine gute Wanderung ist gut für die Gesundheit.', exEn: 'A good hike is good for your health.' },
    { de: 'Hinweis', art: 'der', gender: 'm', plural: 'Hinweise', pos: 'noun', en: 'hint, indication', hi: 'संकेत', ex: 'Wir sollten einen guten Hinweis auf die Temperatur beachten.', exEn: 'We should consider a good hint about the temperature.' },
    { de: 'Kajak', art: 'das', gender: 'n', plural: 'Kajaks', pos: 'noun', en: 'kayak', hi: 'कयाक', ex: 'Ich habe ein neues Kajak gekauft.', exEn: 'I bought a new kayak.' },
    { de: 'Kletterer', art: 'der', gender: 'm', plural: 'Kletterer', pos: 'noun', en: 'climber', hi: 'पर्वतारोही', ex: 'Ein sympathischer Kletterer wollte es kaufen.', exEn: 'A likeable climber wanted to buy it.' },
    { de: 'Material', art: 'das', gender: 'n', plural: 'Materialien', pos: 'noun', en: 'material', hi: 'सामग्री', ex: 'Ich nehme ein warmes Material für unser Zelt.', exEn: 'I take warm material for our tent.' },
    { de: 'mega', pos: 'adverb', en: 'really', hi: 'बहुत', ex: 'Eine Wanderung zur Bergstation wäre mega schön.', exEn: 'A hike to the summit station would be really beautiful.' },
    { de: 'mitspielen', pos: 'verb', en: 'to take part, to play along', hi: 'साथ खेलना', ex: 'Ein junger Spieler möchte auch mitspielen.', exEn: 'A young player would also like to take part.', conj: { praesens: 'spielt mit', praeteritum: 'spielte mit', perfekt: 'hat mitgespielt' } },
    { de: 'Paddel', art: 'das', gender: 'n', plural: 'Paddel', pos: 'noun', en: 'paddle', hi: 'चप्पू', ex: 'Ich brauche ein leichtes Paddel für mein Kajak.', exEn: 'I need a light paddle for my kayak.' },
    { de: 'passen', pos: 'verb', en: 'to fit', hi: 'फिट होना', ex: 'Ein kleines Paddel passt gut in den Rucksack.', exEn: 'A small paddle fits well in the backpack.', conj: { praesens: 'passt', praeteritum: 'passte', perfekt: 'hat gepasst' } },
    { de: 'Staat', art: 'der', gender: 'm', plural: 'Staaten', pos: 'noun', en: 'state', hi: 'राज्य', ex: 'Ein kleiner Staat hat einen großen Nationalpark.', exEn: 'A small state has a big national park.' },
    { de: 'Surfbrett', art: 'das', gender: 'n', plural: 'Surfbretter', pos: 'noun', en: 'surfboard', hi: 'सर्फ़बोर्ड', ex: 'Mein kleiner Cousin hat ein gutes Surfbrett.', exEn: 'My small cousin has a good surfboard.' },
    { de: 'sympathisch', pos: 'adjective', en: 'likeable', hi: 'पसंद आने वाला', ex: 'Ein sympathischer Kletterer im Verein wollte es kaufen.', exEn: 'A likeable climber in the club wanted to buy it.' },
    { de: 'Tor', art: 'das', gender: 'n', plural: 'Tore', pos: 'noun', en: 'goal', hi: 'गोल', ex: 'Ein wichtiges Tor entscheidet das Spiel.', exEn: 'An important goal decides the match.' },
    { de: 'trotzdem', pos: 'adverb', en: 'nevertheless', hi: 'फिर भी', ex: 'Die Temperatur ist niedrig. Trotzdem gehen wir wandern.', exEn: 'The temperature is low. Nevertheless we go hiking.' },
    { de: 'Volleyball', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'volleyball', hi: 'वॉलीबॉल', ex: 'Ein guter Volleyball ist nicht billig.', exEn: 'A good volleyball is not cheap.' },
    { de: 'Wanderung', art: 'die', gender: 'f', plural: 'Wanderungen', pos: 'noun', en: 'hike', hi: 'पैदल यात्रा', ex: 'Eine gute Wanderung zur Bergstation wäre mega schön.', exEn: 'A good hike to the summit station would be really beautiful.' },
    { de: 'zurückgeben', pos: 'verb', en: 'to give back, to return', hi: 'वापस देना', ex: 'Gibst du dein altes Kajak zurück?', exEn: 'Are you giving your old kayak back?', conj: { praesens: 'gibt zurück', praeteritum: 'gab zurück', perfekt: 'hat zurückgegeben' } },
    { de: 'Bergstation', art: 'die', gender: 'f', plural: 'Bergstationen', pos: 'noun', en: 'summit station', hi: 'शिखर स्टेशन', ex: 'Eine gute Wanderung zur Bergstation wäre mega schön.', exEn: 'A good hike to the summit station would be really beautiful.' },
    { de: 'Enttäuschung', art: 'die', gender: 'f', plural: 'Enttäuschungen', pos: 'noun', en: 'disappointment', hi: 'निराशा', ex: 'Das wäre eine große Enttäuschung.', exEn: 'That would be a big disappointment.' },
    { de: 'Katastrophe', art: 'die', gender: 'f', plural: 'Katastrophen', pos: 'noun', en: 'catastrophe', hi: 'आपदा', ex: 'Das wird eine echte Katastrophe.', exEn: 'That is becoming a real catastrophe.' },
    { de: 'Nationalpark', art: 'der', gender: 'm', plural: 'Nationalparks', pos: 'noun', en: 'national park', hi: 'राष्ट्रीय उद्यान', ex: 'Wir fahren in den Nationalpark.', exEn: 'We\'re driving into the national park.' },
    { de: 'Temperatur', art: 'die', gender: 'f', plural: 'Temperaturen', pos: 'noun', en: 'temperature', hi: 'तापमान', ex: 'Wir sollten einen Hinweis auf die Temperatur beachten.', exEn: 'We should consider a hint about the temperature.' }
  ],

  // ---------- Adjektiv nach unbestimmtem Artikel (rule cards) ----------
  grammar: [
    {
      title: 'Why ein needs the adjective\'s help',
      body: [
        'der/die/das always show gender and case clearly. But <span class="de r-article">ein</span> is identical for masculine and neuter in Nominativ/Akkusativ — it can\'t tell them apart by itself. So the adjective steps in and shows the gender that ein can\'t.'
      ],
      table: {
        head: ['Definite (article shows it)', 'Indefinite (adjective shows it)'],
        rows: [
          ['<span class="de">der kleine Hund</span>', '<span class="de">ein kleiner Hund</span>'],
          ['<span class="de">das kleine Kind</span>', '<span class="de">ein kleines Kind</span>'],
          ['<span class="de">die kleine Tasche</span>', '<span class="de">eine kleine Tasche</span> (no change — eine already shows feminine)']
        ]
      },
      note: '<em>"If the article does not clearly show the gender or case, the adjective helps."</em>',
      hinglish: '<b>der/die/das</b> gender aur case saaf dikha dete hain, isliye adjective ko zyada kaam nahi karna padta. Lekin <b>ein</b> masculine aur neuter mein ek jaisa dikhta hai \u2014 isliye wahan adjective ko khud gender batana padta hai.'
    },
    {
      title: 'Full ending table after ein/eine/einen/einem/einer',
      body: [
        'Four different endings appear, each marking exactly what ein/eine alone cannot.'
      ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['Nominativ', '<span class="de">ein kleiner Hund</span>', '<span class="de">eine kleine Tasche</span>', '<span class="de">ein kleines Kind</span>'],
          ['Akkusativ', '<span class="de">einen kleinen Hund</span>', '<span class="de">eine kleine Tasche</span>', '<span class="de">ein kleines Kind</span>'],
          ['Dativ', '<span class="de">einem kleinen Hund</span>', '<span class="de">einer kleinen Tasche</span>', '<span class="de">einem kleinen Kind</span>']
        ]
      },
      note: 'Four endings total: <b>-er</b> (Nom. masc.), <b>-es</b> (Nom./Akk. neut.), <b>-e</b> (Nom./Akk. fem.), <b>-en</b> (everywhere else: Akk. masc., all Dativ).',
      hinglish: '-er (Nom. masc.), -es (Nom./Akk. neut.), -e (Nom./Akk. fem.), -en (baaki sab jagah: Akk. masc., pura Dativ).'
    },
    {
      title: 'Possessive articles work the same way',
      body: [
        'mein, dein, sein, ihr, unser, euer, Ihr all follow the exact same pattern as ein — because grammatically, they are ein-words too.'
      ],
      table: {
        head: ['Case/Gender', 'Example'],
        rows: [
          ['Nominativ masc.', '<span class="de">mein kleiner Bruder</span>'],
          ['Nominativ fem.', '<span class="de">meine kleine Schwester</span>'],
          ['Nominativ/Akkusativ neut.', '<span class="de">mein kleines Auto</span>'],
          ['Akkusativ masc.', '<span class="de">meinen kleinen Bruder</span>'],
          ['Dativ masc.', '<span class="de">meinem kleinen Bruder</span>'],
          ['Dativ fem.', '<span class="de">meiner kleinen Schwester</span>']
        ]
      },
      hinglish: '<b>mein, dein, sein, ihr, unser, euer</b> aur <b>Ihr</b> sab <b>ein</b> ki tarah behave karte hain, aur wahi <b>-er/-es/-e/-en</b> pattern lete hain. Isliye ek baar pattern aa gaya to sab par lag jaata hai.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">ein kleine Hund</span> → <span class="de">ein kleiner Hund</span> — Nominativ masculine needs -er, not -e.',
        '<span class="de strike">eine schönes Auto</span> → <span class="de">ein schönes Auto</span> — Auto is neuter, so use ein (not eine) with -es.',
        '<span class="de strike">mein kleine Bruder</span> → <span class="de">mein kleiner Bruder</span> — Bruder is masculine Nominativ, needs -er.',
        '<span class="de strike">mein kleiner Schwester</span> → <span class="de">meine kleine Schwester</span> — Schwester is feminine, needs meine + -e, not mein + -er.'
      ],
      hinglish: 'Teen galtiyan common hain. Nominativ masculine mein adjective par <b>-er</b> chahiye. Neuter noun ke saath <b>ein</b> aata hai, <b>eine</b> nahi. Aur possessive ka gender bhi noun se match hona chahiye.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'Three questions decide the ending every time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Nominativ masculine?', '→ <span class="de">-er</span> (ein kleiner Hund)'],
          ['Nominativ or Akkusativ neuter?', '→ <span class="de">-es</span> (ein kleines Kind)'],
          ['Nominativ or Akkusativ feminine?', '→ <span class="de">-e</span> (eine kleine Tasche)'],
          ['Akkusativ masculine, or anywhere in Dativ?', '→ <span class="de">-en</span> (einen/einem/einer kleinen …)']
        ]
      },
      hinglish: 'Chaar sawaal se kaam ho jaata hai. Nominativ masculine ho to <b>-er</b>, Nominativ ya Akkusativ neuter ho to <b>-es</b>, Nominativ ya Akkusativ feminine ho to <b>-e</b>, aur Akkusativ masculine ya kahin bhi Dativ ho to <b>-en</b>.'
    }
  ],

  // ---------- Reading passage (Ein Ausflug in den Nationalpark, clickable) ----------
  reading: {
    title: 'Ein Ausflug in den Nationalpark',
    titleEn: 'A trip into the national park',
    tokens: [
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · unbest. Akk.' },
      { w: 'neues', role: 'r-adjective', en: 'new', hi: 'नया', pron: 'NOY-es', type: 'Adjektiv · Akk. neut. -es', why: 'ein + -es for Akkusativ neuter (this chapter).', ex: 'ein neues Kajak', exEn: 'a new kayak' },
      { w: 'Kajak', role: 'r-akkusativ', en: 'kayak', hi: 'कयाक', pron: 'KAH-yak', type: 'Noun · neut.', why: 'das Kajak (this chapter).', ex: 'ein neues Kajak', exEn: 'a new kayak' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · unbest. Akk.' },
      { w: 'leichtes', role: 'r-adjective', en: 'light', hi: 'हल्का', pron: 'LYKH-tes', type: 'Adjektiv · Akk. neut. -es' },
      { w: 'Paddel', role: 'r-akkusativ', en: 'paddle', hi: 'चप्पू', pron: 'PA-del', type: 'Noun · neut.', why: 'das Paddel (this chapter).', ex: 'ein leichtes Paddel', exEn: 'a light paddle' },
      { w: 'gekauft', role: 'r-verb', en: 'bought', hi: 'खरीदा', pron: 'guh-KOWFT', type: 'Partizip II · kaufen' },
      { w: '.', plain: true },
      { w: 'Sein', role: 'r-subject', en: 'his', hi: 'उसका', pron: 'zine', type: 'Possessivartikel · Nom.' },
      { w: 'sympathischer', role: 'r-adjective', en: 'likeable', hi: 'पसंद आने वाला', pron: 'züm-PAH-ti-sher', type: 'Adjektiv · Nom. masc. -er', why: 'sein + -er for Nominativ masculine (this chapter).', ex: 'sein sympathischer Freund', exEn: 'his likeable friend' },
      { w: 'Freund', role: 'r-subject', en: 'friend', hi: 'दोस्त', pron: 'froynt', type: 'Noun · masc.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'AY-nuh', type: 'Article · unbest. Akk.' },
      { w: 'billige', role: 'r-adjective', en: 'cheap', hi: 'सस्ता', pron: 'BI-li-guh', type: 'Adjektiv · Akk. fem. -e', why: 'eine + -e for Akkusativ feminine (this chapter).', ex: 'eine billige Ausrüstung', exEn: 'cheap equipment' },
      { w: 'Ausrüstung', role: 'r-akkusativ', en: 'equipment', hi: 'सामान', pron: 'OWS-rüs-toong', type: 'Noun · fem.' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'seinen', role: 'r-akkusativ', en: 'his (masc. acc.)', hi: 'उसका', pron: 'ZY-nen', type: 'Possessivartikel · Akk.', why: 'seinen + -en for Akkusativ masculine (this chapter).', ex: 'seinen ersten Ausflug', exEn: 'his first trip' },
      { w: 'ersten', role: 'r-adjective', en: 'first', hi: 'पहला', pron: 'AIR-sten', type: 'Adjektiv · Akk. masc. -en' },
      { w: 'Ausflug', role: 'r-akkusativ', en: 'trip', hi: 'यात्रा', pron: 'OWS-flook', type: 'Noun · masc.', why: 'der Ausflug (recycled — A1).', ex: 'seinen ersten Ausflug', exEn: 'his first trip' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'AY-nuh', type: 'Article · unbest. Nom.' },
      { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjektiv · Nom. fem. -e', why: 'eine + -e for Nominativ feminine (this chapter).', ex: 'eine gute Wanderung', exEn: 'a good hike' },
      { w: 'Wanderung', role: 'r-subject', en: 'hike', hi: 'पैदल यात्रा', pron: 'VAN-der-oong', type: 'Noun · fem.', why: 'die Wanderung (this chapter).', ex: 'eine gute Wanderung', exEn: 'a good hike' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'तक', pron: 'tsoor', type: 'Kontraktion · zu + der' },
      { w: 'Bergstation', role: 'r-dativ', en: 'summit station', hi: 'शिखर स्टेशन', pron: 'BAIRK-shta-tsee-ohn', type: 'Noun · fem.', why: 'die Bergstation (this chapter).', ex: 'zur Bergstation wandern', exEn: 'to hike to the summit station' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'geplant', role: 'r-verb', en: 'planned', hi: 'योजना बनाई', pron: 'guh-PLAHNT', type: 'Partizip II · planen' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (recycled — Ch.23)' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · unbest. Akk.' },
      { w: 'guten', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Adjektiv · Akk. masc. -en', why: 'einen + -en for Akkusativ masculine (this chapter).', ex: 'einen guten Hinweis beachten', exEn: 'to consider a good hint' },
      { w: 'Hinweis', role: 'r-akkusativ', en: 'hint', hi: 'संकेत', pron: 'HIN-vyse', type: 'Noun · masc.', why: 'der Hinweis (this chapter).', ex: 'einen guten Hinweis beachten', exEn: 'to consider a good hint' },
      { w: 'auf', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'owf', type: 'Preposition · Akk.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · Akk.' },
      { w: 'Temperatur', role: 'r-akkusativ', en: 'temperature', hi: 'तापमान', pron: 'tem-peh-ra-TOOR', type: 'Noun · fem.', why: 'die Temperatur (this chapter).', ex: 'die Temperatur beachten', exEn: 'to consider the temperature' },
      { w: 'beachten', role: 'r-verb', en: 'consider', hi: 'ध्यान देना', pron: 'buh-AKH-ten', type: 'Verb · beachten' },
      { w: '.', plain: true }
    ],
    translation: 'Max bought a new kayak and a light paddle. His likeable friend Rohan needs cheap equipment for his first trip. A good hike to the summit station is planned. We should consider a good hint about the temperature. — Watch the four endings: -es (ein neues Kajak, ein leichtes Paddel), -er (sein sympathischer Freund), -e (eine billige Ausrüstung, eine gute Wanderung), -en (seinen ersten Ausflug, einen guten Hinweis).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_027_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Greta, brauche ich ein kleines Zelt oder ein großes?', en: 'Greta, do I need a small tent or a big one?' },
      { id: 'A2_027_L002', speaker: 'Greta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Für dich reicht ein kleines Zelt. Nimm auch einen warmen Schlafsack.', en: 'A small tent is enough for you. Also take a warm sleeping bag.' },
      { id: 'A2_027_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und für einen kalten Tag?', en: 'And for a cold day?' },
      { id: 'A2_027_L004', speaker: 'Greta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann brauchst du eine dicke Jacke und ein leichtes Paddel für das Kajak.', en: 'Then you need a thick jacket and a light paddle for the kayak.' }
    ],
    transcript: 'Greta, brauche ich ein kleines Zelt oder ein großes? Für dich reicht ein kleines Zelt. Nimm auch einen warmen Schlafsack. Und für einen kalten Tag? Dann brauchst du eine dicke Jacke und ein leichtes Paddel für das Kajak.',
    translation: 'Greta, do I need a small tent or a big one? A small tent is enough for you. Also take a warm sleeping bag. And for a cold day? Then you need a thick jacket and a light paddle for the kayak.',
    tokens: [
      { w: 'Greta' },
      { w: ',', plain: true },
      { w: 'brauche' },
      { w: 'ich' },
      { w: 'ein' },
      { w: 'kleines' },
      { w: 'Zelt' },
      { w: 'oder' },
      { w: 'ein' },
      { w: 'großes' },
      { w: '?', plain: true },
      { w: 'Für' },
      { w: 'dich' },
      { w: 'reicht' },
      { w: 'ein' },
      { w: 'kleines' },
      { w: 'Zelt' },
      { w: '.', plain: true },
      { w: 'Nimm' },
      { w: 'auch' },
      { w: 'einen' },
      { w: 'warmen' },
      { w: 'Schlafsack' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'für' },
      { w: 'einen' },
      { w: 'kalten' },
      { w: 'Tag' },
      { w: '?', plain: true },
      { w: 'Dann' },
      { w: 'brauchst' },
      { w: 'du' },
      { w: 'eine' },
      { w: 'dicke' },
      { w: 'Jacke' },
      { w: 'und' },
      { w: 'ein' },
      { w: 'leichtes' },
      { w: 'Paddel' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Kajak' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was für ein Zelt braucht Timo?', qEn: 'What size tent does Timo need?', options: ['ein großes', 'ein kleines', 'kein Zelt', 'zwei Zelte'], optionsEn: ['a big one', 'a small one', 'no tent', 'two tents'], answer: 1,
        explain: '"Für dich reicht ein kleines Zelt."' },
      { q: 'Was braucht Timo für einen kalten Tag?', qEn: 'What does Timo need for a cold day?', options: ['eine dünne Jacke', 'eine dicke Jacke und ein leichtes Paddel', 'nur Schuhe', 'ein großes Zelt'], optionsEn: ['a thin jacket', 'a thick jacket and a light paddle', 'only shoes', 'a big tent'], answer: 1,
        explain: '"Dann brauchst du eine dicke Jacke und ein leichtes Paddel."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt nach deiner Familie. Beschreibe deinen Cousin.", taskEn: "Your friend asks about your family. Describe your cousin.", de: "Ich habe einen sympathischen Cousin. Er ist ein guter Kletterer.", en: "I have a nice cousin. He's a good climber." },
    { task: "Deine Kollegin fragt: Was für eine Wohnung hast du?", taskEn: "Your colleague asks: what kind of flat do you have?", de: "Ich habe eine kleine Wohnung, aber mit einem schönen Balkon.", en: "I have a small flat, but with a lovely balcony." },
    { task: "Ein Gast fragt: Wie ist deine Stadt?", taskEn: "A guest asks: what's your city like?", de: "Es ist eine ruhige Stadt mit einem großen Park.", en: "It's a quiet city with a big park." },
    { task: "Dein Freund fragt nach deinem Hobby.", taskEn: "Your friend asks about your hobby.", de: "Ich habe ein neues Surfbrett und ein leichtes Paddel.", en: "I have a new surfboard and a light paddle." },
    { task: "Deine Freundin fragt, wo ihr gegessen habt.", taskEn: "Your friend asks where you ate.", de: "Wir waren in einem alten Gasthaus. Das Essen war wirklich gut.", en: "We were at an old inn. The food was really good." },
    { task: "Dein Trainer fragt: Wie war das Spiel?", taskEn: "Your coach asks: how was the match?", de: "Wir haben ein schönes Tor geschossen, trotzdem haben wir verloren.", en: "We scored a lovely goal, but we lost anyway." },
    { task: "Deine Mutter fragt nach deiner Gesundheit.", taskEn: "Your mother asks about your health.", de: "Ich hatte eine kleine Erkältung, deshalb war ich zu Hause.", en: "I had a slight cold, so I stayed at home." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short family or apartment description (six sentences), using at least five ein/eine or possessive-article + adjective combinations, covering at least Nominativ, Akkusativ and Dativ. Try this chapter\'s words: der Nationalpark, die Wanderung, sympathisch, mega.',
    starters: ['Mein/Meine … ist …', 'Ich habe ein(e) …', 'Wir helfen einem/einer …'],
    placeholder: 'Meine Familie hat ein kleines Haus mit einem schönen Garten. Mein kleiner Bruder …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct ending: "Ich habe ein neu___ Kajak." (Akkusativ, neuter)',
      options: ['-er', '-es', '-en'],
      answer: 1,
      explain: 'Akkusativ/Nominativ neuter after ein takes -es: ein neues Kajak.'
    },
    gap: {
      sentence: ['Mein klein', ' Bruder spielt gern Volleyball.'],
      gaps: [ { answer: 'er', accepts: ['er'] } ],
      explain: 'Nominativ masculine after mein takes -er: mein kleiner Bruder.'
    },
    match: {
      q: 'Match each phrase to its case and gender.',
      pairs: [
        { noun: 'ein kleiner Hund', art: 'Nominativ, masculine' },
        { noun: 'ein kleines Kind', art: 'Nominativ/Akkusativ, neuter' },
        { noun: 'eine kleine Tasche', art: 'Nominativ/Akkusativ, feminine' },
        { noun: 'einen kleinen Hund', art: 'Akkusativ, masculine' },
        { noun: 'einem kleinen Mann', art: 'Dativ, masculine' }
      ]
    },
    builder: {
      target: 'Build: "I have a new kayak." (Akkusativ)',
      bank: ['Ich', 'habe', 'ein', 'neues', 'Kajak', '.'],
      answer: ['Ich', 'habe', 'ein', 'neues', 'Kajak', '.'],
      roles: { 'Ich': 'r-subject', 'habe': 'r-verb', 'ein': 'r-akkusativ', 'neues': 'r-adjective', 'Kajak': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: '"Ein klein___ Hund spielt." (Nominativ, masculine)', options: ['-er', '-es', '-e'], answer: 0,
      explain: 'Nominativ masculine after ein takes -er: ein kleiner Hund.' },
    { q: '"Ich sehe ein schön___ Auto." (Akkusativ, neuter)', options: ['-er', '-es', '-en'], answer: 1,
      explain: 'Akkusativ neuter after ein takes -es: ein schönes Auto.' },
    { q: '"Meine klein___ Schwester lacht." (Nominativ, feminine)', options: ['-er', '-e', '-en'], answer: 1,
      explain: 'Nominativ feminine after meine takes -e: meine kleine Schwester.' },
    { q: '"Wir helfen einem klein___ Kind." (Dativ)', options: ['-e', '-es', '-en'], answer: 2,
      explain: 'Dativ always takes -en, in every gender: einem kleinen Kind.' },
    { q: 'Which is correct?', options: ['mein kleiner Schwester', 'meine kleine Schwester', 'mein kleine Schwester'], answer: 1,
      explain: 'Schwester is feminine, so it needs meine (not mein) and -e.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-article', html: '<span class="de r-article">ein</span> can\'t show gender by itself (it\'s the same for masc./neut. Nom./Akk.), so the adjective carries that information instead.' },
    { c: 'r-adjective', html: 'Four endings: <b>-er</b> (Nom. masc.), <b>-es</b> (Nom./Akk. neut.), <b>-e</b> (Nom./Akk. fem.), <b>-en</b> (everywhere else — Akk. masc., all Dativ).' },
    { c: 'r-article', html: 'Possessive articles (<span class="de">mein/dein/sein/ihr/unser/euer/Ihr</span>) follow the exact same pattern as ein — they are ein-words too.' }
  ],
  revisionTips: [
    'Nominativ masculine? -er. Nominativ/Akkusativ neuter? -es. Nominativ/Akkusativ feminine? -e. Everything else? -en.',
    'Possessive articles behave exactly like ein — the same four endings, the same rules.',
    'Check the noun\'s real gender first (der/die/das), then pick the ein-word and ending that match it.'
  ]
};

window.CHAPTER = CHAPTER;
