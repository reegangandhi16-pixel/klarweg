/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 4
   "Folgen: deshalb & so … dass" — results and consequences.
   Reviews: weil, da, obwohl (Ch2). Teaches new: deshalb (result
   connector, verb immediately after) and so … dass (strong
   consequence, incl. so viel … dass / so viele … dass).
   Deliberately does NOT introduce sodass, folglich,
   infolgedessen, daher, darum, deswegen as ACTIVE connectors —
   those four appear only as recognise-only vocabulary entries,
   clearly marked, never taught as this chapter's grammar.
   Vocabulary source: uploaded chapter-04 list (75 items — an
   advertising/consumer-behaviour theme: Werbetrick, Rabatt,
   Kaufverhalten, Girokonto, Powerbank, Geheimzahl, …).
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations} —
   one full example per word (per this chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-4-folgen-deshalb-so-dass',
  phase: 'B1 · Phase 1',
  number: 4,
  title: 'Folgen: deshalb & so … dass',
  titleEn: 'Consequences: deshalb & so … dass',
  description: 'Es regnet, deshalb bleiben wir zu Hause. Ich war so nervös, dass ich alles vergessen habe. This chapter adds the RESULT of a cause to what you already know — deshalb states a plain result, and so … dass shows just how strong that result was.',
  xp: 230,
  time: 40,
  difficulty: 'Intermediate',
  nextChapter: { number: 5, title: 'Genitiv & Präpositionen mit Genitiv', titleEn: 'Genitive & prepositions with the Genitive (wegen, trotz, während)' , href: 'chapter-b1-5-genitiv-wegen-trotz-waehrend.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Franzi wants to return a broken charging cable, and Timo checks the receipt — the cable is so broken it won\'t charge, and she\'s so surprised it broke this fast. Every result gets a deshalb, every extreme a so … dass.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear deshalb and so … dass doing two different jobs — plain result vs. strong consequence'
    ],
    scene: 'Nach der Prüfung',
    femaleSpeakers: ['Franzi'],
    dialogue: [
      { speaker: 'Franzi', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Ladekabel', role: 'r-subject', en: 'charging cable', hi: 'चार्जिंग केबल', pron: 'LAH-de-kah-bel', type: 'Noun · neut.', why: 'das Ladekabel (this chapter).', ex: 'Das Ladekabel funktioniert nicht.', exEn: 'The charging cable does not work.' },
        { w: 'funktioniert', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'funk-tsyo-NEERT', type: 'Verb · funktionieren' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: ',', plain: true },
        { w: 'deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'zurückgeben', role: 'r-verb', en: 'return', hi: 'वापस करना', pron: 'tsu-RÜK-gay-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The charging cable does not work, therefore I would like to return it.', hi: 'Charging cable kaam nahi karta, isliye main ise wapas karna chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Haben', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आपके पास', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Quittung', role: 'r-akkusativ', en: 'receipt', hi: 'रसीद', pron: 'KVI-tung', type: 'Noun · fem.', why: 'die Quittung (this chapter).', ex: 'Haben Sie die Quittung?', exEn: 'Do you have the receipt?' },
        { w: 'dabei', role: 'r-adverb', en: 'with you', hi: 'साथ', pron: 'da-BY', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Do you have the receipt with you?', hi: 'Kya aapke paas rasid hai?' },
      { speaker: 'Franzi', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sie', role: 'r-subject', en: 'it (fem.)', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kabel', role: 'r-subject', en: 'cable', hi: 'केबल', pron: 'KAH-bel', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'kaputt', role: 'r-subject', en: 'broken', hi: 'ख़राब', pron: 'ka-PUT', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass', why: 'so ... dass = so ... that, describing an extreme result (this chapter).', ex: 'Das Kabel ist so kaputt, dass es nicht lädt.', exEn: 'The cable is so broken that it does not charge.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'lädt', role: 'r-verb', en: 'charges', hi: 'चार्ज करता है', pron: 'lädt', type: 'Verb · laden (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, here it is. The cable is so broken that it does not charge.', hi: 'Haan, yeh rahi. Cable itna kharaab hai ki yeh charge nahi karta.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehe', role: 'r-verb', en: 'see', hi: 'देखता हूँ', pron: 'ZAY-uh', type: 'Verb · sehen (ich)' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'mal', role: 'r-adverb', en: 'once', hi: 'ज़रा', pron: 'mahl', type: 'Adverb' },
        { w: 'nach', role: 'r-verb', en: '(prefix of nachsehen)', hi: 'देखना', pron: 'nahkh', type: 'Separable prefix · Satzende', why: 'nachsehen = to check/look into (this chapter).', ex: 'Ich sehe es mir nach.', exEn: 'I check it.' },
        { w: '.', plain: true }
      ], en: 'I will check it.', hi: 'Main ise jaanch leta hoon.' },
      { speaker: 'Franzi', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'überrascht', role: 'r-subject', en: 'surprised', hi: 'हैरान', pron: 'ü-ber-RASHT', type: 'Adjective', why: 'überrascht = surprised (this chapter).', ex: 'Ich bin überrascht.', exEn: 'I am surprised.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'schnell', role: 'r-subject', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: 'kaputtgegangen', role: 'r-verb', en: 'broke', hi: 'ख़राब हो गया', pron: 'ka-PUT-ge-gan-gen', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: '', pron: 'ist', type: 'Verb · sein (helper, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks. I am so surprised that it broke so quickly.', hi: 'Dhanyavaad. Mujhe itna hairan hoon ki yeh itni jaldi kharaab ho gaya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zahle', role: 'r-verb', en: 'pay', hi: 'वापस देता हूँ', pron: 'TSAH-luh', type: 'Verb · zurückzahlen (ich)', lexicalUnit: 'zurückzahlen' },
        { w: 'Ihnen', role: 'r-dativ', en: 'you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · formal dative' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Betrag', role: 'r-akkusativ', en: 'amount', hi: 'राशि', pron: 'be-TRAHK', type: 'Noun · masc.' },
        { w: 'zurück', role: 'r-verb', en: 'back', hi: 'वापस', pron: 'tsu-RÜK', type: 'Separable prefix · Satzende', lexicalUnit: 'zurückzahlen' },
        { w: '.', plain: true }
      ], en: 'I understand that. I will pay you back the amount.', hi: 'Main yeh samajhta hoon. Main aapko raashi wapas de deta hoon.' },
      { speaker: 'Franzi', tokens: [
        { w: 'Vielen', role: 'r-adjective', en: 'many', hi: 'बहुत', pron: 'FEE-len', type: 'Phrase' },
        { w: 'Dank', role: 'r-object', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Phrase' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'ausgezeichnetes', role: 'r-subject', en: 'excellent', hi: 'उत्कृष्ट', pron: 'ows-ge-TSEIKH-ne-tes', type: 'Adjective', why: 'ausgezeichnet = excellent (this chapter).', ex: 'ein ausgezeichnetes Geschäft', exEn: 'an excellent shop' },
        { w: 'Geschäft', role: 'r-subject', en: 'shop', hi: 'दुकान', pron: 'ge-SHEFT', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Many thanks! That is an excellent shop.', hi: 'Bahut dhanyavaad! Yeh ek utkrisht dukaan hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already know how to give a REASON (weil, da). Now add the RESULT. <span class="de r-conjunction">deshalb</span> states a plain result — and the finite verb comes immediately after it: <span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span> <span class="de r-conjunction">so … dass</span> shows just how STRONG that result was: <span class="de">Ich war so nervös, dass ich alles vergessen habe.</span> Three levels, one logic: <b>Cause</b> (weil/da) → <b>Result</b> (deshalb) → <b>Strong Result</b> (so … dass).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is FOLGEN: DESHALB UND SO … DASS (B1 level only): deshalb states a plain result and pulls the finite verb immediately after it (verb-second word order); so + Adjektiv/viel/viele + dass shows a strong consequence, with the finite verb of the dass-clause at the very end. ' +
    'Do NOT expect or require sodass, folglich, infolgedessen, daher, darum, deswegen, or other B2 connectors — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- deshalb is NOT a subordinating conjunction — it occupies the front position of its own clause, and the finite verb comes immediately after it, before the subject: "Deshalb bin ich glücklich." not "Deshalb ich bin glücklich."\n' +
    '- so … dass needs "so" before the adjective/viel/viele — "so dass" cannot appear without "so" earlier having introduced the intensity; and the dass-clause always sends its finite verb to the very end: "…, dass ich alles vergessen habe." not "…, dass ich habe alles vergessen."\n' +
    '- Never combine weil and deshalb in the same clause, or deshalb and weil back to back ("deshalb weil…") — pick one job per clause: weil/da explain WHY, deshalb states WHAT HAPPENED BECAUSE OF IT, so … dass shows HOW STRONG the result was.\n' +
    '- so viel + dass (uncountable) vs. so viele + dass (countable/plural) — flag a countable-noun sentence using "so viel" or an uncountable one using "so viele".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Word-order check:</b> one sentence on whether deshalb pulled the verb immediately after it, and whether every dass-clause sent its verb to the end.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you move smoothly from cause to result to strong consequence. Move on to <span class="de">Verb lassen</span>.',
    mid: 'Good. Re-read the Cause → Result → Strong Result diagram once — especially deshalb\'s word order — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the decision guide), then retake.'
  },

  parserSentence: [
    { w: 'Es', role: 'r-subject' }, { w: 'regnet', role: 'r-verb' },
    { w: '.', role: 'plain' }, { w: 'Deshalb', role: 'r-conjunction' },
    { w: 'bleiben', role: 'r-verb' }, { w: 'wir', role: 'r-subject' },
    { w: 'zu', role: 'plain' }, { w: 'Hause', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Cause → Result → Strong Result.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends talk about an exam and advertising tricks using deshalb and so … dass.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 75 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master deshalb\'s word order and the so … dass strong-consequence pattern.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage full of result and consequence clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch deshalb and so … dass constructions in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain consequences and describe extreme situations out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write about an experience using deshalb and so … dass.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Transform weil into deshalb, deshalb into so … dass, and fix common errors.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 230 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 75 chapter words — Werbetrick, Rabatt, Kaufverhalten, Girokonto, Powerbank, Geheimzahl — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'weil→deshalb and deshalb→so…dass transformation drills, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full deshalb / so … dass reference — Cause → Result → Strong Result diagram, word order, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es regnet. Deshalb bleiben wir zu Hause.', text: 'State a plain result with deshalb, verb immediately after' },
    { de: 'Ich war so nervös, dass ich alles vergessen habe.', text: 'Show a strong consequence with so … dass' },
    { de: 'so viel … dass / so viele … dass', text: 'Use so with viel (uncountable) and viele (countable)' },
    { de: 'weil → deshalb → so … dass', text: 'Move between reason, result, and strong result' },
    { de: 'Deshalb bin ich …', text: 'Get deshalb\'s verb-second word order right every time' }
  ],

  // ---------- Vocabulary (75 items — full chapter-04 upload list) ----------
  vocab: [
    { de: 'verbieten', pos: 'verb', level: 'B1', en: 'to forbid', hi: 'मना करना',
      ex: 'Der Arzt hat ihm süße Getränke verboten.', exEn: 'The doctor forbade him sweet drinks.', exHi: 'Doctor ne use meethe drinks mana kiye.',
      conj: { praesens: 'verbietet', praeteritum: 'verbot', perfekt: 'hat verboten' },
      advanced: { synonyms: ['untersagen'], opposites: ['erlauben'], collocations: ['jemandem etwas verbieten'] } },
    { de: 'anhaben', pos: 'verb', level: 'B1', en: 'to wear', hi: 'पहनना',
      ex: 'Sie hat heute ein neues Kleid an.', exEn: 'She\'s wearing a new dress today.', exHi: 'Woh aaj naya kapda pehni hui hai.',
      conj: { praesens: 'hat an', praeteritum: 'hatte an', perfekt: 'hat angehabt' },
      advanced: { synonyms: ['tragen'], opposites: ['ausziehen'], collocations: ['Kleidung anhaben'] } },
    { de: 'anschalten', pos: 'verb', level: 'B1', en: 'to switch on', hi: 'चालू करना',
      ex: 'Könntest du das Licht anschalten?', exEn: 'Could you switch on the light?', exHi: 'Kya tum light chala sakte ho?',
      conj: { praesens: 'schaltet an', praeteritum: 'schaltete an', perfekt: 'hat angeschaltet' },
      advanced: { synonyms: ['einschalten'], opposites: ['ausschalten'], collocations: ['das Licht anschalten', 'den Fernseher anschalten'] } },
    { de: 'ansprechen', pos: 'verb', level: 'B1', en: 'to speak to, address', hi: 'बात करना',
      ex: 'Ein Fremder hat mich auf der Straße angesprochen.', exEn: 'A stranger spoke to me on the street.', exHi: 'Ek ajnabi ne mujhse sadak par baat ki.',
      conj: { praesens: 'spricht an', praeteritum: 'sprach an', perfekt: 'hat angesprochen' },
      advanced: { synonyms: ['anreden'], opposites: [], collocations: ['jemanden ansprechen', 'ein Thema ansprechen'] } },
    { de: 'ansprechend', pos: 'adjective', level: 'B1', en: 'appealing', hi: 'आकर्षक',
      ex: 'Die Werbung war sehr ansprechend gestaltet.', exEn: 'The advertisement was designed very appealingly.', exHi: 'Vigyapan bahut aakarshak roop se banaya gaya tha.',
      advanced: { synonyms: ['attraktiv'], opposites: ['abstoßend'], collocations: ['ansprechend gestaltet', 'ansprechendes Design'] } },
    { de: 'aufmerksam', pos: 'adjective', level: 'B1', en: 'attentive', hi: 'सतर्क',
      ex: 'Wir sollten bei Werbung aufmerksam bleiben.', exEn: 'We should stay attentive with advertising.', exHi: 'Hamein vigyapan ke saath satark rehna chahiye.',
      advanced: { synonyms: ['achtsam'], opposites: ['unaufmerksam'], collocations: ['aufmerksam bleiben', 'aufmerksam zuhören'] } },
    { de: 'ausgezeichnet', pos: 'adjective', level: 'B1', en: 'excellent', hi: 'शानदार',
      ex: 'Manche Werbeanzeigen sind ausgezeichnet gemacht.', exEn: 'Some advertisements are excellently made.', exHi: 'Kuch vigyapan bahut shandaar tareeke se bane hote hain.',
      advanced: { synonyms: ['hervorragend'], opposites: ['mangelhaft'], collocations: ['ausgezeichnet gemacht', 'ausgezeichnete Qualität'] } },
    { de: 'automatisch', pos: 'adjective', level: 'B1', en: 'automatic', hi: 'स्वचालित',
      ex: 'Das Gerät schaltet sich automatisch aus.', exEn: 'The device switches off automatically.', exHi: 'Device apne aap band ho jaata hai.',
      advanced: { synonyms: [], opposites: ['manuell'], collocations: ['sich automatisch ausschalten'] } },
    { de: 'beeinflussen', pos: 'verb', level: 'B1', en: 'to influence', hi: 'प्रभावित करना',
      ex: 'Werbung soll unser Kaufverhalten beeinflussen.', exEn: 'Advertising is meant to influence our shopping behaviour.', exHi: 'Vigyapan hamari kharidari ke vyavhaar ko prabhavit karne ke liye hota hai.',
      conj: { praesens: 'beeinflusst', praeteritum: 'beeinflusste', perfekt: 'hat beeinflusst' },
      advanced: { synonyms: ['prägen'], opposites: [], collocations: ['das Verhalten beeinflussen'] } },
    { de: 'dabei', pos: 'adverb', level: 'B1', en: 'thereby, in doing so', hi: 'इस दौरान',
      ex: 'Sie las die Anzeige, dabei lächelte sie.', exEn: 'She read the ad, and while doing so she smiled.', exHi: 'Usne vigyapan padha, aur us dauran muskurayi.',
      advanced: { synonyms: [], opposites: [], collocations: ['dabei sein'] } },
    { de: 'dabeihaben', pos: 'verb', level: 'B1', en: 'to have with oneself', hi: 'साथ रखना',
      ex: 'Hast du deine EC-Karte dabei?', exEn: 'Do you have your debit card with you?', exHi: 'Kya tumhare paas apna debit card hai?',
      conj: { praesens: 'hat dabei', praeteritum: 'hatte dabei', perfekt: 'hat dabeigehabt' },
      advanced: { synonyms: ['mitbringen'], opposites: [], collocations: ['etwas dabeihaben'] } },
    { de: 'daher', pos: 'grammar', level: 'B1', en: 'therefore (synonym of deshalb — recognise only, not this chapter\'s active grammar)', hi: 'इसलिए (केवल पहचान के लिए)',
      ex: 'Es war spät, daher gingen wir schnell nach Hause.', exEn: 'It was late, therefore we went home quickly.', exHi: 'Der ho gayi thi, isliye hum jaldi ghar chale gaye.',
      advanced: { synonyms: ['deshalb', 'darum'], opposites: [], collocations: [] } },
    { de: 'darum', pos: 'grammar', level: 'B1', en: 'that\'s why (synonym of deshalb — recognise only)', hi: 'इसीलिए (केवल पहचान के लिए)',
      ex: 'Ich war krank, darum bin ich nicht gekommen.', exEn: 'I was sick, that\'s why I didn\'t come.', exHi: 'Main bimar tha, isi liye main nahi aaya.',
      advanced: { synonyms: ['deshalb', 'daher'], opposites: [], collocations: [] } },
    { de: 'davon', pos: 'adverb', level: 'B1', en: 'of it, from it', hi: 'उससे',
      ex: 'Ich habe nichts davon gewusst.', exEn: 'I knew nothing of it.', exHi: 'Mujhe iske baare mein kuch pata nahi tha.',
      advanced: { synonyms: [], opposites: [], collocations: ['nichts davon wissen'] } },
    { de: 'davor', pos: 'adverb', level: 'B1', en: 'before that, in front of it', hi: 'उससे पहले',
      ex: 'Ärzte warnen davor, zu viel Zucker zu essen.', exEn: 'Doctors warn about eating too much sugar.', exHi: 'Doctor zyada cheeni khane ke khilaf chetavani dete hain.',
      advanced: { synonyms: [], opposites: ['danach'], collocations: ['davor warnen'] } },
    { de: 'deswegen', pos: 'grammar', level: 'B1', en: 'therefore (synonym of deshalb — recognise only)', hi: 'इसलिए (केवल पहचान के लिए)',
      ex: 'Er hat kein Geld, deswegen kann er das nicht kaufen.', exEn: 'He has no money, therefore he can\'t buy that.', exHi: 'Uske paas paise nahi hain, isliye woh yeh nahi khareed sakta.',
      advanced: { synonyms: ['deshalb', 'darum'], opposites: [], collocations: [] } },
    { de: 'Erinnerung', art: 'die', gender: 'f', plural: 'Erinnerungen', pos: 'noun', level: 'B1', en: 'memory', hi: 'याद',
      ex: 'Diese Werbung weckt schöne Erinnerungen.', exEn: 'This advertisement awakens nice memories.', exHi: 'Yeh vigyapan achhi yaadein taaza karta hai.',
      advanced: { synonyms: ['Gedächtnis'], opposites: ['Vergessen'], collocations: ['Erinnerungen wecken'] } },
    { de: 'Gebrauchsanweisung', art: 'die', gender: 'f', plural: 'Gebrauchsanweisungen', pos: 'noun', level: 'B1', en: 'instructions, user manual', hi: 'उपयोग निर्देश',
      ex: 'Lies zuerst die Gebrauchsanweisung.', exEn: 'Read the instructions first.', exHi: 'Pehle upyog nirdesh padho.',
      advanced: { synonyms: ['Anleitung'], opposites: [], collocations: ['die Gebrauchsanweisung lesen'] } },
    { de: 'Quittung', art: 'die', gender: 'f', plural: 'Quittungen', pos: 'noun', level: 'B1', en: 'receipt', hi: 'रसीद',
      ex: 'Ohne Quittung kann ich es nicht reklamieren.', exEn: 'Without a receipt, I can\'t make a complaint.', exHi: 'Rasid ke bina main shikayat nahi kar sakta.',
      advanced: { synonyms: ['Beleg'], opposites: [], collocations: ['eine Quittung aufbewahren'] } },
    { de: 'diesmal', pos: 'adverb', level: 'B1', en: 'this time', hi: 'इस बार',
      ex: 'Diesmal habe ich es genau gelesen.', exEn: 'This time I read it carefully.', exHi: 'Is baar maine isse dhyan se padha.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'ebenfalls', pos: 'adverb', level: 'B1', en: 'also, likewise', hi: 'भी',
      ex: 'Das Ladekabel war ebenfalls im Angebot.', exEn: 'The charger was also on offer.', exHi: 'Charger bhi offer mein tha.',
      advanced: { synonyms: ['auch'], opposites: [], collocations: [] } },
    { de: 'genügen', pos: 'verb', level: 'B1', en: 'to suffice, be enough', hi: 'पर्याप्त होना',
      ex: 'Ein kurzer Blick genügt, um den Trick zu erkennen.', exEn: 'A brief glance suffices to recognise the trick.', exHi: 'Trick pehchaanne ke liye ek chhoti si nazar kaafi hai.',
      conj: { praesens: 'genügt', praeteritum: 'genügte', perfekt: 'hat genügt' },
      advanced: { synonyms: ['reichen', 'ausreichen'], opposites: [], collocations: ['genügen, um … zu …'] } },
    { de: 'gratis', pos: 'adjective', level: 'B1', en: 'free', hi: 'मुफ़्त',
      ex: 'Das Ladekabel war gratis dabei.', exEn: 'The charger was included for free.', exHi: 'Charger muft mein saath mein tha.',
      advanced: { synonyms: ['kostenlos', 'umsonst'], opposites: ['kostenpflichtig'], collocations: ['gratis dazu bekommen'] } },
    { de: 'interessiert', pos: 'adjective', level: 'B1', en: 'interested', hi: 'रुचि रखने वाला',
      ex: 'Sie ist sehr an neuer Technik interessiert.', exEn: 'She is very interested in new technology.', exHi: 'Use nayi technology mein bahut ruchi hai.',
      advanced: { synonyms: ['neugierig'], opposites: ['gleichgültig'], collocations: ['interessiert sein an + Dat.'] } },
    { de: 'laden', pos: 'verb', level: 'B1', en: 'to charge, load', hi: 'चार्ज करना',
      ex: 'Ich muss meinen Handyakku laden.', exEn: 'I need to charge my phone battery.', exHi: 'Mujhe apna phone battery charge karna hai.',
      conj: { praesens: 'lädt', praeteritum: 'lud', perfekt: 'hat geladen' },
      advanced: { synonyms: ['aufladen'], opposites: ['entladen'], collocations: ['den Akku laden'] } },
    { de: 'merkwürdig', pos: 'adjective', level: 'B1', en: 'strange', hi: 'अजीब',
      ex: 'Manche Werbesprüche wirken auf mich merkwürdig.', exEn: 'Some advertising slogans seem strange to me.', exHi: 'Kuch vigyapan naare mujhe ajeeb lagte hain.',
      advanced: { synonyms: ['seltsam'], opposites: ['normal'], collocations: [] } },
    { de: 'nachsehen', pos: 'verb', level: 'B1', en: 'to have a look, check', hi: 'जांचना',
      ex: 'Könnten Sie bitte kurz nachsehen, ob es noch da ist?', exEn: 'Could you please have a quick look to see if it\'s still there?', exHi: 'Kya aap kripya thoda dekh sakte hain ki woh abhi bhi hai ya nahi?',
      conj: { praesens: 'sieht nach', praeteritum: 'sah nach', perfekt: 'hat nachgesehen' },
      advanced: { synonyms: ['überprüfen'], opposites: [], collocations: ['nachsehen, ob …'] } },
    { de: 'reichen', pos: 'verb', level: 'B1', en: 'to be enough', hi: 'पर्याप्त होना',
      ex: 'Das Geld auf meinem Girokonto reicht nicht.', exEn: 'The money in my checking account isn\'t enough.', exHi: 'Mere checking account mein paise kaafi nahi hain.',
      conj: { praesens: 'reicht', praeteritum: 'reichte', perfekt: 'hat gereicht' },
      advanced: { synonyms: ['genügen', 'ausreichen'], opposites: [], collocations: ['das reicht'] } },
    { de: 'rein', pos: 'adjective', level: 'B1', en: 'pure (reines Glück: pure luck)', hi: 'शुद्ध, केवल',
      ex: 'Dass ich das Sonderangebot fand, war reines Glück.', exEn: 'Finding the special offer was pure luck.', exHi: 'Special offer milna keval kismat thi.',
      advanced: { synonyms: ['pur'], opposites: ['unrein'], collocations: ['reines Glück'] } },
    { de: 'reklamieren', pos: 'verb', level: 'B1', en: 'to complain, exchange', hi: 'शिकायत करना',
      ex: 'Ich möchte das Gerät reklamieren, weil es kaputt ist.', exEn: 'I would like to return the device because it\'s broken.', exHi: 'Main device wapas karna chahta hoon kyunki woh kharab hai.',
      conj: { praesens: 'reklamiert', praeteritum: 'reklamierte', perfekt: 'hat reklamiert' },
      advanced: { synonyms: ['beanstanden'], opposites: [], collocations: ['einen Artikel reklamieren'] } },
    { de: 'seltsam', pos: 'adjective', level: 'B1', en: 'odd, strange', hi: 'अजीब',
      ex: 'Die Werbeanzeige war so seltsam, dass ich sie zweimal ansehen musste.', exEn: 'The advertisement was so odd that I had to look at it twice.', exHi: 'Vigyapan itna ajeeb tha ki mujhe use do baar dekhna pada.',
      advanced: { synonyms: ['merkwürdig'], opposites: ['normal'], collocations: [] } },
    { de: 'sodass', pos: 'grammar', level: 'B1', en: 'so that (formal one-word variant of so … dass — recognise only, not this chapter\'s active grammar)', hi: 'ताकि (केवल पहचान के लिए)',
      ex: 'Er sprach sehr leise, sodass ich ihn kaum verstand.', exEn: 'He spoke very quietly, so that I could hardly understand him.', exHi: 'Woh bahut dheere bola, isliye main use mushkil se samajh paaya.',
      advanced: { synonyms: ['so … dass'], opposites: [], collocations: [] } },
    { de: 'testen', pos: 'verb', level: 'B1', en: 'to test', hi: 'परखना',
      ex: 'Wir haben den neuen Kopfhörer getestet.', exEn: 'We tested the new headphones.', exHi: 'Humne naye headphones test kiye.',
      conj: { praesens: 'testet', praeteritum: 'testete', perfekt: 'hat getestet' },
      advanced: { synonyms: ['ausprobieren'], opposites: [], collocations: ['ein Produkt testen'] } },
    { de: 'ungesund', pos: 'adjective', level: 'B1', en: 'unhealthy', hi: 'अस्वस्थकर',
      ex: 'Viele Kinderprodukte sind sehr ungesund.', exEn: 'Many children\'s products are very unhealthy.', exHi: 'Kai bachchon ke utpad bahut asvasthkar hain.',
      advanced: { synonyms: ['schädlich'], opposites: ['gesund'], collocations: [] } },
    { de: 'unmodern', pos: 'adjective', level: 'B1', en: 'unfashionable', hi: 'पुराने ज़माने का',
      ex: 'Dieses Design wirkt heute schon unmodern.', exEn: 'This design already seems unfashionable today.', exHi: 'Yeh design aaj hi purane zamane ka lagta hai.',
      advanced: { synonyms: ['altmodisch'], opposites: ['modern'], collocations: [] } },
    { de: 'verraten', pos: 'verb', level: 'B1', en: 'to reveal', hi: 'बता देना',
      ex: 'Die Werbeanzeige verrät nicht den echten Preis.', exEn: 'The advertisement doesn\'t reveal the real price.', exHi: 'Vigyapan asli keemat nahi batata.',
      conj: { praesens: 'verrät', praeteritum: 'verriet', perfekt: 'hat verraten' },
      advanced: { synonyms: ['offenbaren'], opposites: ['verschweigen'], collocations: ['ein Geheimnis verraten'] } },
    { de: 'vertrauen', pos: 'verb', level: 'B1', en: 'to trust', hi: 'भरोसा करना',
      ex: 'Ich vertraue solchen Werbesprüchen nicht.', exEn: 'I don\'t trust such advertising slogans.', exHi: 'Main aise vigyapan naaron par bharosa nahi karta.',
      conj: { praesens: 'vertraut', praeteritum: 'vertraute', perfekt: 'hat vertraut' },
      advanced: { synonyms: [], opposites: ['misstrauen'], collocations: ['jemandem vertrauen'] } },
    { de: 'wirken', pos: 'verb', level: 'B1', en: 'to seem, have an effect on (+ auf Akk.)', hi: 'लगना, असर डालना',
      ex: 'Der Spruch wirkt auf viele Leute überzeugend.', exEn: 'The slogan seems convincing to many people.', exHi: 'Yeh naara kai logon ko vishwasniya lagta hai.',
      conj: { praesens: 'wirkt', praeteritum: 'wirkte', perfekt: 'hat gewirkt' },
      advanced: { synonyms: ['erscheinen'], opposites: [], collocations: ['auf jemanden wirken'] } },
    { de: 'zurückgehen', pos: 'verb', level: 'B1', en: 'to go back, decline', hi: 'वापस जाना, कम होना',
      ex: 'Die Verkäufe sind nach der Werbung zurückgegangen.', exEn: 'Sales declined after the advertisement.', exHi: 'Vigyapan ke baad bikri kam ho gayi.',
      conj: { praesens: 'geht zurück', praeteritum: 'ging zurück', perfekt: 'ist zurückgegangen' },
      advanced: { synonyms: ['sinken', 'abnehmen'], opposites: ['steigen'], collocations: [] } },
    { de: 'zurückzahlen', pos: 'verb', level: 'B1', en: 'to pay back', hi: 'वापस भुगतान करना',
      ex: 'Das Unternehmen musste den Rabatt zurückzahlen.', exEn: 'The company had to pay back the discount.', exHi: 'Company ko chhoot wapas dena pada.',
      conj: { praesens: 'zahlt zurück', praeteritum: 'zahlte zurück', perfekt: 'hat zurückgezahlt' },
      advanced: { synonyms: ['erstatten'], opposites: [], collocations: ['Geld zurückzahlen'] } },
    { de: 'überrascht', pos: 'adjective', level: 'B1', en: 'surprised', hi: 'हैरान',
      ex: 'Ich war überrascht, wie günstig der Rabatt war.', exEn: 'I was surprised how good the discount was.', exHi: 'Main hairan tha ki chhoot kitni achhi thi.',
      advanced: { synonyms: ['erstaunt'], opposites: ['gelassen'], collocations: ['überrascht sein von + Dat.'] } },
    { de: 'Girokonto', art: 'das', gender: 'n', plural: 'Girokonten', pos: 'noun', level: 'B1', en: 'checking account', hi: 'चेकिंग खाता',
      ex: 'Das Geld auf meinem Girokonto reicht diesmal nicht.', exEn: 'The money in my checking account isn\'t enough this time.', exHi: 'Is baar mere checking account mein paise kaafi nahi hain.',
      advanced: { synonyms: ['Konto'], opposites: [], collocations: ['Geld vom Girokonto abheben'] } },
    { de: 'Kaufverhalten', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'shopping behaviour', hi: 'ख़रीदारी का व्यवहार',
      ex: 'Werbung soll unser Kaufverhalten beeinflussen.', exEn: 'Advertising is meant to influence our shopping behaviour.', exHi: 'Vigyapan hamari kharidari ke vyavhaar ko prabhavit karta hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['das Kaufverhalten beeinflussen'] } },
    { de: 'Kinderprodukt', art: 'das', gender: 'n', plural: 'Kinderprodukte', pos: 'noun', level: 'B1', en: 'children\'s product', hi: 'बच्चों का उत्पाद',
      ex: 'Viele Kinderprodukte enthalten zu viel Zucker.', exEn: 'Many children\'s products contain too much sugar.', exHi: 'Kai bachchon ke utpaad mein bahut zyada cheeni hoti hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Ladekabel', art: 'das', gender: 'n', plural: 'Ladekabel', pos: 'noun', level: 'B1', en: 'charger, charging cable', hi: 'चार्जर केबल',
      ex: 'Ich habe ein neues Ladekabel im Sonderangebot gekauft.', exEn: 'I bought a new charger on special offer.', exHi: 'Maine special offer mein ek naya charger kharida.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Merkmal', art: 'das', gender: 'n', plural: 'Merkmale', pos: 'noun', level: 'B1', en: 'characteristic, feature', hi: 'विशेषता',
      ex: 'Ein wichtiges Merkmal des Geräts ist der lange Akku.', exEn: 'An important feature of the device is the long battery life.', exHi: 'Device ki ek zaroori visheshta lambi battery hai.',
      advanced: { synonyms: ['Eigenschaft'], opposites: [], collocations: ['ein Merkmal haben'] } },
    { de: 'Portemonnaie', art: 'das', gender: 'n', plural: 'Portemonnaies', pos: 'noun', level: 'B1', en: 'wallet', hi: 'बटुआ',
      ex: 'Mein Portemonnaie war plötzlich weg.', exEn: 'My wallet was suddenly gone.', exHi: 'Mera batua achanak gayab ho gaya.',
      advanced: { synonyms: ['Geldbeutel'], opposites: [], collocations: [] } },
    { de: 'Taschentuch', art: 'das', gender: 'n', plural: 'Taschentücher', pos: 'noun', level: 'B1', en: 'handkerchief, tissue', hi: 'रूमाल',
      ex: 'Hast du ein Taschentuch dabei?', exEn: 'Do you have a tissue with you?', exHi: 'Kya tumhare paas rumaal hai?',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Unternehmen', art: 'das', gender: 'n', plural: 'Unternehmen', pos: 'noun', level: 'B1', en: 'company', hi: 'कंपनी',
      ex: 'Manche Unternehmen wollen unser Kaufverhalten beeinflussen.', exEn: 'Some companies want to influence our shopping behaviour.', exHi: 'Kuch companiyaan hamari kharidari ke vyavhaar ko prabhavit karna chahti hain.',
      advanced: { synonyms: ['Firma'], opposites: [], collocations: ['ein Unternehmen gründen'] } },
    { de: 'Verhalten', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'behaviour', hi: 'व्यवहार',
      ex: 'Sein Verhalten hat mich überrascht.', exEn: 'His behaviour surprised me.', exHi: 'Uske vyavhaar ne mujhe hairan kar diya.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Wortspiel', art: 'das', gender: 'n', plural: 'Wortspiele', pos: 'noun', level: 'B1', en: 'pun, play on words', hi: 'शब्दों का खेल',
      ex: 'Ein gutes Wortspiel bleibt im Kopf.', exEn: 'A good pun stays in your head.', exHi: 'Ek achha shabd-khel dimaag mein reh jaata hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Geldautomat', art: 'der', gender: 'm', plural: 'Geldautomaten', pos: 'noun', level: 'B1', en: 'ATM', hi: 'एटीएम',
      ex: 'Der Geldautomat um die Ecke hat gerade Probleme.', exEn: 'The ATM around the corner has problems right now.', exHi: 'Kone wala ATM abhi kharab hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['Geld am Geldautomaten abheben'] } },
    { de: 'Handyakku', art: 'der', gender: 'm', plural: 'Handyakkus', pos: 'noun', level: 'B1', en: 'mobile phone battery', hi: 'फ़ोन की बैटरी',
      ex: 'Mein Handyakku ist schon wieder leer.', exEn: 'My phone battery is empty again.', exHi: 'Meri phone battery phir khatam ho gayi.',
      advanced: { synonyms: [], opposites: [], collocations: ['den Handyakku laden'] } },
    { de: 'Klebefilm', art: 'der', gender: 'm', plural: 'Klebefilme', pos: 'noun', level: 'B1', en: 'adhesive tape', hi: 'चिपकाने वाला टेप',
      ex: 'Hast du Klebefilm für dieses Paket?', exEn: 'Do you have adhesive tape for this package?', exHi: 'Kya tumhare paas is package ke liye tape hai?',
      advanced: { synonyms: ['Klebeband'], opposites: [], collocations: [] } },
    { de: 'Kopfhörer', art: 'der', gender: 'm', plural: 'Kopfhörer', pos: 'noun', level: 'B1', en: 'headphones', hi: 'हेडफ़ोन',
      ex: 'Wir haben den neuen Kopfhörer getestet.', exEn: 'We tested the new headphones.', exHi: 'Humne naye headphones test kiye.',
      advanced: { synonyms: [], opposites: [], collocations: ['Kopfhörer tragen'] } },
    { de: 'Markenname', art: 'der', gender: 'm', plural: 'Markennamen', pos: 'noun', level: 'B1', en: 'brand name', hi: 'ब्रांड नाम',
      ex: 'Ich habe den Markennamen sofort erkannt.', exEn: 'I recognised the brand name immediately.', exHi: 'Maine brand naam turant pehchaan liya.',
      advanced: { synonyms: [], opposites: [], collocations: ['einen Markennamen erkennen'] } },
    { de: 'Rabatt', art: 'der', gender: 'm', plural: 'Rabatte', pos: 'noun', level: 'B1', en: 'discount', hi: 'छूट',
      ex: 'Es gab einen Rabatt, deshalb habe ich zugeschlagen.', exEn: 'There was a discount, that\'s why I grabbed it.', exHi: 'Ek chhoot thi, isliye maine le liya.',
      advanced: { synonyms: ['Ermäßigung'], opposites: ['Aufschlag'], collocations: ['einen Rabatt bekommen'] } },
    { de: 'Spruch', art: 'der', gender: 'm', plural: 'Sprüche', pos: 'noun', level: 'B1', en: 'saying, slogan', hi: 'नारा',
      ex: 'Der Werbespruch ist mir sofort im Kopf geblieben.', exEn: 'The advertising slogan stuck in my head immediately.', exHi: 'Vigyapan ka naara turant mere dimaag mein reh gaya.',
      advanced: { synonyms: ['Slogan'], opposites: [], collocations: ['ein Spruch bleibt im Kopf'] } },
    { de: 'Stick', art: 'der', gender: 'm', plural: 'Sticks', pos: 'noun', level: 'B1', en: 'USB stick', hi: 'यूएसबी स्टिक',
      ex: 'Ich habe die Fotos auf einen Stick kopiert.', exEn: 'I copied the photos onto a USB stick.', exHi: 'Maine photos ek USB stick par copy kiye.',
      advanced: { synonyms: ['USB-Stick'], opposites: [], collocations: [] } },
    { de: 'Süßstoff', art: 'der', gender: 'm', plural: 'Süßstoffe', pos: 'noun', level: 'B1', en: 'sweetener', hi: 'मिठासकारी',
      ex: 'Dieses Getränk enthält Süßstoff statt Zucker.', exEn: 'This drink contains sweetener instead of sugar.', exHi: 'Is drink mein cheeni ki jagah sweetener hai.',
      advanced: { synonyms: [], opposites: ['Zucker'], collocations: [] } },
    { de: 'Werbetrick', art: 'der', gender: 'm', plural: 'Werbetricks', pos: 'noun', level: 'B1', en: 'advertising trick', hi: 'विज्ञापन की चाल',
      ex: 'Vorsicht mit Werbetricks!', exEn: 'Be careful with advertising tricks!', exHi: 'Vigyapan ki chaalon se saavdhaan raho!',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'EC-Karte', art: 'die', gender: 'f', plural: 'EC-Karten', pos: 'noun', level: 'B1', en: 'debit card', hi: 'डेबिट कार्ड',
      ex: 'Hast du deine EC-Karte dabei?', exEn: 'Do you have your debit card with you?', exHi: 'Kya tumhare paas apna debit card hai?',
      advanced: { synonyms: ['Debitkarte'], opposites: [], collocations: [] } },
    { de: 'Garantie', art: 'die', gender: 'f', plural: 'Garantien', pos: 'noun', level: 'B1', en: 'warranty', hi: 'वारंटी',
      ex: 'Das Gerät hat noch zwei Jahre Garantie.', exEn: 'The device still has two years of warranty.', exHi: 'Device par abhi bhi do saal ki warranty hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['Garantie haben'] } },
    { de: 'Geheimzahl', art: 'die', gender: 'f', plural: 'Geheimzahlen', pos: 'noun', level: 'B1', en: 'PIN', hi: 'गुप्त संख्या',
      ex: 'Bitte gib deine Geheimzahl niemandem.', exEn: 'Please don\'t give your PIN to anyone.', exHi: 'Kripya apna PIN kisi ko na dein.',
      advanced: { synonyms: ['PIN'], opposites: [], collocations: ['die Geheimzahl eingeben'] } },
    { de: 'Powerbank', art: 'die', gender: 'f', plural: 'Powerbanks', pos: 'noun', level: 'B1', en: 'powerbank', hi: 'पावरबैंक',
      ex: 'Ich habe immer eine Powerbank dabei.', exEn: 'I always have a powerbank with me.', exHi: 'Mere paas hamesha ek powerbank hoti hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Schmerztablette', art: 'die', gender: 'f', plural: 'Schmerztabletten', pos: 'noun', level: 'B1', en: 'pain killer', hi: 'दर्द निवारक गोली',
      ex: 'Hast du eine Schmerztablette gegen Kopfschmerzen?', exEn: 'Do you have a pain killer for a headache?', exHi: 'Kya tumhare paas sirdard ke liye ek dard nivarak goli hai?',
      advanced: { synonyms: ['Tablette'], opposites: [], collocations: [] } },
    { de: 'Werbeanzeige', art: 'die', gender: 'f', plural: 'Werbeanzeigen', pos: 'noun', level: 'B1', en: 'advertisement', hi: 'विज्ञापन',
      ex: 'Ich habe letztens eine seltsame Werbeanzeige gesehen.', exEn: 'I recently saw a strange advertisement.', exHi: 'Maine haal hi mein ek ajeeb vigyapan dekha.',
      advanced: { synonyms: ['Anzeige', 'Werbung'], opposites: [], collocations: [] } },
    { de: 'Werbesprache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'advertising language', hi: 'विज्ञापन की भाषा',
      ex: 'Die Werbesprache ist oft unverständlich.', exEn: 'Advertising language is often incomprehensible.', exHi: 'Vigyapan ki bhasha aksar samajh se pare hoti hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'frech', pos: 'adjective', level: 'B1', en: 'cheeky', hi: 'ढीठ',
      ex: 'Der Werbespruch war ziemlich frech formuliert.', exEn: 'The slogan was written quite cheekily.', exHi: 'Yeh naara kaafi dheeth tareeke se likha gaya tha.',
      advanced: { synonyms: ['dreist'], opposites: ['höflich'], collocations: [] } },
    { de: 'unverständlich', pos: 'adjective', level: 'B1', en: 'incomprehensible', hi: 'समझ से परे',
      ex: 'Die Anleitung war völlig unverständlich.', exEn: 'The instructions were completely incomprehensible.', exHi: 'Nirdesh bilkul samajh se pare the.',
      advanced: { synonyms: ['unklar'], opposites: ['verständlich'], collocations: [] } },
    { de: 'Adverb', art: 'das', gender: 'n', plural: 'Adverbien', pos: 'noun', level: 'B1', en: 'adverb', hi: 'क्रिया विशेषण',
      ex: '"Deshalb" ist ein Adverb, das ein Ergebnis einleitet.', exEn: '"Deshalb" is an adverb that introduces a result.', exHi: '"Deshalb" ek adverb hai jo parinaam ko darshata hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Konsekutivsatz', art: 'der', gender: 'm', plural: 'Konsekutivsätze', pos: 'noun', level: 'B1', en: 'consecutive clause (consequence clause)', hi: 'परिणाम-वाचक वाक्य',
      ex: 'Ein Konsekutivsatz mit "so … dass" zeigt eine starke Folge.', exEn: 'A consecutive clause with "so … dass" shows a strong consequence.', exHi: '"so … dass" wala parinaam-vachak vaakya ek majboot parinaam dikhata hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Silbe', art: 'die', gender: 'f', plural: 'Silben', pos: 'noun', level: 'B1', en: 'syllable', hi: 'शब्दांश',
      ex: 'Das Wort "deshalb" hat zwei Silben.', exEn: 'The word "deshalb" has two syllables.', exHi: '"deshalb" shabd mein do shabdaansh hain.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Finnland', pos: 'noun', level: 'B1', en: 'Finland', hi: 'फ़िनलैंड',
      ex: 'Dieses Unternehmen kommt ursprünglich aus Finnland.', exEn: 'This company originally comes from Finland.', exHi: 'Yeh company mool roop se Finland se hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'italienisch', pos: 'adjective', level: 'B1', en: 'Italian', hi: 'इतालवी',
      ex: 'Der Markenname klingt italienisch, obwohl das Unternehmen deutsch ist.', exEn: 'The brand name sounds Italian, although the company is German.', exHi: 'Brand naam Italian jaisa lagta hai, halanki company German hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Von der Ursache zum Ergebnis',
      body: [
        'You already know how to give a REASON with weil and da. This chapter adds the next step: the RESULT of that reason.',
        'Structure: Satz 1 (Ursache). <span class="de r-conjunction">Deshalb</span> + <b>Verb</b> + Subjekt … (Satz 2, Ergebnis).'
      ],
      example: [
        { html: '<span class="de">Ich habe Fieber. Deshalb bleibe ich zu Hause.</span>' },
        { html: '<span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span>' },
        { html: '<span class="de">Ich habe die Prüfung bestanden. Deshalb bin ich glücklich.</span>' }
      ],
      hinglish: 'Tumhe pehle se pata hai ki weil aur da se reason kaise batate hain. Yeh chapter agla step sikhata hai: us reason ka <b>result</b>. deshalb ke turant baad verb aata hai, phir subject.'
    },
    {
      title: 'deshalb — Wortstellung',
      body: [
        '<span class="de r-conjunction">deshalb</span> is NOT a subordinating conjunction — it simply occupies the front position of its own sentence. That means the finite verb comes IMMEDIATELY after deshalb (verb-second word order), never the subject.'
      ],
      example: [
        { html: '<span class="de">Deshalb bin ich glücklich.</span> (verb immediately after deshalb)' },
        { html: '<span class="de strike">Deshalb ich bin glücklich.</span> (wrong — subject cannot come before the verb here)' },
        { html: 'Both word orders work: separate sentences — <span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span> — or joined with a comma — <span class="de">Es regnet, deshalb bleiben wir zu Hause.</span>' }
      ],
      hinglish: 'deshalb ek subordinating conjunction nahi hai — yeh apne hi sentence ki front position leta hai. Isliye deshalb ke turant baad finite verb aata hai, subject nahi. Dono word order sahi hain: alag sentence ya comma se joda hua sentence.'
    },
    {
      title: 'so … dass — die starke Folge',
      body: [
        'Use <span class="de">so + Adjektiv + …, dass …</span> when something is so strong/extreme that another event becomes its direct consequence. The finite verb of the dass-clause goes to the very end, just like weil/da/obwohl.'
      ],
      example: [
        { html: '<span class="de">Er ist so müde, dass er sofort einschläft.</span>' },
        { html: '<span class="de">Das Auto ist so teuer, dass ich es nicht kaufen kann.</span>' },
        { html: '<span class="de">Sie spricht so schnell, dass ich nichts verstehe.</span>' }
      ],
      hinglish: 'so + Adjektiv + …, dass … ka use tab karo jab koi cheez itni strong/extreme ho ki ek aur event uska seedha result ban jaaye. dass-clause ka finite verb bhi end mein hi jaata hai, weil/da/obwohl ki tarah.'
    },
    {
      title: 'so viel … dass / so viele … dass',
      body: [
        'Two special variants: <span class="de">so viel …, dass</span> for uncountable nouns/amounts, and <span class="de">so viele …, dass</span> for countable plural nouns.'
      ],
      example: [
        { html: '<span class="de">Ich habe so viel gearbeitet, dass ich Rückenschmerzen habe.</span> (uncountable — Arbeit)' },
        { html: '<span class="de">Wir hatten so viel Spaß, dass wir die Zeit vergessen haben.</span> (uncountable — Spaß)' },
        { html: '<span class="de">Es waren so viele Leute da, dass wir keinen Sitzplatz gefunden haben.</span> (countable, plural — Leute)' },
        { html: '<span class="de">Ich habe so viele Hausaufgaben, dass ich heute nicht ausgehen kann.</span> (countable, plural — Hausaufgaben)' }
      ],
      note: 'viel stays viel (no plural -e) with uncountable/mass nouns; viele takes the plural ending with countable nouns.',
      hinglish: 'Do special variants: so viel …, dass uncountable ke liye (jaise kaam, maza), aur so viele …, dass countable plural nouns ke liye (jaise log, homework).'
    },
    {
      title: 'Das Klarweg-Logiksystem: Ursache → Ergebnis → Starkes Ergebnis',
      body: [
        'The same situation, told three ways — with increasing focus on the CONSEQUENCE.'
      ],
      table: {
        head: ['Level', 'Connector', 'Example'],
        rows: [
          ['Cause (reason)', 'weil / da', '<span class="de">Ich bleibe zu Hause, weil ich krank bin.</span>'],
          ['Result', 'deshalb', '<span class="de">Ich bin krank. Deshalb bleibe ich zu Hause.</span>'],
          ['Strong Result', 'so … dass', '<span class="de">Ich bin so krank, dass ich nicht arbeiten kann.</span>']
        ]
      },
      note: 'Memory trick: WHY? → weil/da. WHAT HAPPENED BECAUSE OF IT? → deshalb. HOW STRONG WAS THE RESULT? → so … dass.',
      hinglish: 'Ek hi situation, teen tareekon se — CONSEQUENCE par badhta hua focus. Yaad rakhne ka tarika: KYUN? → weil/da. USKI WAJAH SE KYA HUA? → deshalb. RESULT KITNA STRONG THA? → so … dass.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These mistakes are extremely common at B1 — mixing up deshalb\'s word order, forgetting "so", or combining two connectors that each already do the same job.'
      ],
      mistakes: [
        { wrong: 'Deshalb ich gehe.', right: 'Deshalb gehe ich.', why: 'The verb comes immediately after deshalb, before the subject.' },
        { wrong: 'So ich bin müde dass...', right: 'Ich bin so müde, dass...', why: '"so" attaches directly to the adjective, right after the verb — not at the front of the sentence.' },
        { wrong: 'weil deshalb', right: 'Choose ONE connector', why: 'Never combine a reason-connector and a result-connector in the same clause.' },
        { wrong: 'Deshalb weil...', right: 'Choose ONE connector', why: 'deshalb states a result; weil states a reason — never stack them together.' },
        { wrong: 'so dass (without "so" earlier)', right: 'so + Adjektiv …, dass', why: '"dass" alone doesn\'t create the strong-consequence meaning — "so" must appear before the adjective/viel/viele.' },
        { wrong: 'so viele Leute dass...', right: 'so viele Leute, dass...', why: 'Don\'t forget the comma before dass — it marks the start of the consequence clause.' }
      ],
      hinglish: 'Sabse aam galtiyaan: deshalb ke baad subject ko verb se pehle rakhna, "so" bhool jaana, ya do connectors ko ek saath jodna. Hamesha sirf ek connector chuno jo matlab ke hisaab se sahi ho.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [
        'For the Goethe exam: examiners reward variety — using weil, deshalb, AND so … dass across a written task shows range. Don\'t repeat the same connector for every sentence.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Need to give a reason?', 'weil / da'],
          ['Need to express a result?', 'deshalb'],
          ['Need to express a strong consequence?', 'so … dass']
        ]
      },
      note: 'In the Goethe writing section, alternate connectors across sentences (don\'t say weil three times in one paragraph) — this is exactly what the three levels of this chapter are for.',
      hinglish: 'Goethe exam ke liye: examiners variety ko reward karte hain — weil, deshalb, aur so … dass teeno ka istemal karna range dikhata hai. Ek hi connector baar-baar mat dohrao.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Test mit Werbeanzeigen',
    titleEn: 'A test with advertisements',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'schreibt', role: 'r-verb', en: 'writes', hi: 'लिखती है', type: 'Verb · schreiben' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Bericht', role: 'r-akkusativ', en: 'report', hi: 'रिपोर्ट', type: 'Noun · masc.' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'Werbetricks', role: 'r-akkusativ', en: 'advertising tricks', hi: 'विज्ञापन की चालें', type: 'Noun · plural', why: 'der Werbetrick (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'Unternehmen', role: 'r-subject', en: 'company', hi: 'कंपनी', type: 'Noun · neut.', why: 'das Unternehmen (this chapter).' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'sein', role: 'r-akkusativ', en: 'its', hi: 'अपना', type: 'Possessivartikel' },
      { w: 'Ladekabel', role: 'r-akkusativ', en: 'charger', hi: 'चार्जर केबल', type: 'Noun · neut.', why: 'das Ladekabel (this chapter).' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतने', type: 'Adverb' },
      { w: 'ansprechend', role: 'r-adjective', en: 'appealing', hi: 'आकर्षक', type: 'Adjective', why: 'ansprechend (this chapter).' },
      { w: 'beworben', role: 'r-verb', en: 'advertised (Satzende)', hi: 'विज्ञापित किया (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'sofort', role: 'r-adverb', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'kaufte', role: 'r-verb', en: 'bought (Satzende)', hi: 'खरीद लिया (Satzende)', type: 'Verb · Präteritum (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zu', role: 'r-preposition', en: 'at', hi: 'पर', type: 'Preposition' },
      { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', type: 'Noun · neut.' },
      { w: 'merkte', role: 'r-verb', en: 'noticed', hi: 'महसूस किया', type: 'Verb · merken' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', type: 'Konjunktion' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Kabel', role: 'r-subject', en: 'cable', hi: 'केबल', type: 'Noun · neut.' },
      { w: 'gar', role: 'r-adverb', en: 'at all', hi: 'बिल्कुल', type: 'Adverb' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'ihrem', role: 'r-dativ', en: 'her', hi: 'उसके', type: 'Possessivartikel · Dativ' },
      { w: 'Handy', role: 'r-dativ', en: 'phone', hi: 'फ़ोन', type: 'Noun · neut.' },
      { w: 'passte', role: 'r-verb', en: 'fit (Satzende)', hi: 'फिट हुआ (Satzende)', type: 'Verb · passen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', type: 'Verb · sein' },
      { w: 'überrascht', role: 'r-adjective', en: 'surprised', hi: 'हैरान', type: 'Adjective', why: 'überrascht (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'wollte', role: 'r-verb', en: 'wanted', hi: 'चाहती थी', type: 'Verb · Modalverb' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Kabel', role: 'r-akkusativ', en: 'cable', hi: 'केबल', type: 'Noun · neut.' },
      { w: 'reklamieren', role: 'r-verb', en: 'to return (Satzende)', hi: 'वापस करना', type: 'Infinitiv (Satzende)', why: 'reklamieren (this chapter): to complain, exchange.' },
      { w: '.', plain: true },
      { w: 'Zum', role: 'r-place', en: 'to the', hi: 'में', type: 'Contraction · zu dem' },
      { w: 'Glück', role: 'r-place', en: 'luck', hi: 'ख़ुशकिस्मती', type: 'Noun · neut.' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', type: 'Verb · haben' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Quittung', role: 'r-akkusativ', en: 'receipt', hi: 'रसीद', type: 'Noun · fem.', why: 'die Quittung (this chapter).' },
      { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb: verb comes immediately after it.' },
      { w: 'bekam', role: 'r-verb', en: 'got (Position 2)', hi: 'मिला', type: 'Verb · bekommen (Position 2)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'ihr', role: 'r-akkusativ', en: 'her', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसा', type: 'Noun · neut.' },
      { w: 'zurück', role: 'r-verb', en: '(zurückbekommen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Werbeanzeige', role: 'r-subject', en: 'advertisement', hi: 'विज्ञापन', type: 'Noun · fem.', why: 'die Werbeanzeige (this chapter).' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', type: 'Verb · sein' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', type: 'Adverb' },
      { w: 'irreführend', role: 'r-adjective', en: 'misleading', hi: 'भ्रामक', type: 'Adjective' },
      { w: 'gewesen', role: 'r-verb', en: 'been (Satzende)', hi: 'हुई थी (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'noch', role: 'r-adverb', en: 'even', hi: 'और भी', type: 'Adverb' },
      { w: 'aufmerksamer', role: 'r-adjective', en: 'more attentive', hi: 'ज़्यादा सतर्क', type: 'Adjective · Komparativ', why: 'aufmerksam (this chapter).' },
      { w: 'einkauft', role: 'r-verb', en: 'shops (Satzende)', hi: 'ख़रीदारी करती है (Satzende)', type: 'Verb · einkaufen (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Anna is writing a report on advertising tricks. A company advertised its charger so appealingly that Anna bought it immediately. At home, however, she noticed that the cable didn\'t fit her phone at all. She was surprised and wanted to return the cable. Luckily, she still had the receipt. That\'s why she got her money back. The advertisement had been so misleading that Anna now shops even more attentively.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_004_L001', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich möchte dieses Kabel zurückgeben — es ist so kaputt, dass es gar nicht mehr lädt.', en: 'I\'d like to return this cable — it\'s so broken that it doesn\'t charge at all anymore.' },
      { id: 'B1_004_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zeigen Sie mal … stimmt, hier ist es total durchgescheuert. Haben Sie noch den Kassenzettel?', en: 'Let me see … you\'re right, it\'s completely worn through here. Do you still have the receipt?' },
      { id: 'B1_004_L003', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, hier. Ich bin so überrascht, dass es schon nach zwei Wochen kaputt ist.', en: 'Yes, here. I\'m so surprised it broke after just two weeks.' },
      { id: 'B1_004_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehe ich, deshalb bekommen Sie sofort ein neues — ganz ohne Diskussion.', en: 'I understand, so you\'ll get a new one right away — no discussion needed.' }
    ],
    transcript: 'Ich möchte dieses Kabel zurückgeben — es ist so kaputt, dass es gar nicht mehr lädt. Zeigen Sie mal … stimmt, hier ist es total durchgescheuert. Haben Sie noch den Kassenzettel? Ja, hier. Ich bin so überrascht, dass es schon nach zwei Wochen kaputt ist. Verstehe ich, deshalb bekommen Sie sofort ein neues — ganz ohne Diskussion.',
    translation: 'I\'d like to return this cable — it\'s so broken that it doesn\'t charge at all anymore. Let me see … you\'re right, it\'s completely worn through here. Do you still have the receipt? Yes, here. I\'m so surprised it broke after just two weeks. I understand, so you\'ll get a new one right away — no discussion needed.',
    tokens: [
      { w: 'Ich' },
      { w: 'möchte' },
      { w: 'dieses' },
      { w: 'Kabel' },
      { w: 'zurückgeben' },
      { w: '—', plain: true },
      { w: 'es' },
      { w: 'ist' },
      { w: 'so' },
      { w: 'kaputt' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'es' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: 'mehr' },
      { w: 'lädt' },
      { w: '.', plain: true },
      { w: 'Zeigen' },
      { w: 'Sie' },
      { w: 'mal' },
      { w: '…', plain: true, spaceBefore: true },
      { w: 'stimmt' },
      { w: ',', plain: true },
      { w: 'hier' },
      { w: 'ist' },
      { w: 'es' },
      { w: 'total' },
      { w: 'durchgescheuert' },
      { w: '.', plain: true },
      { w: 'Haben' },
      { w: 'Sie' },
      { w: 'noch' },
      { w: 'den' },
      { w: 'Kassenzettel' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'hier' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'so' },
      { w: 'überrascht' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'es' },
      { w: 'schon' },
      { w: 'nach' },
      { w: 'zwei' },
      { w: 'Wochen' },
      { w: 'kaputt' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Verstehe' },
      { w: 'ich' },
      { w: ',', plain: true },
      { w: 'deshalb' },
      { w: 'bekommen' },
      { w: 'Sie' },
      { w: 'sofort' },
      { w: 'ein' },
      { w: 'neues' },
      { w: '—', plain: true },
      { w: 'ganz' },
      { w: 'ohne' },
      { w: 'Diskussion' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum will Franzi das Kabel zurückgeben?', qEn: 'Why does Franzi want to return the cable?', options: ['Falsche Farbe', 'Es ist zu kurz', 'Es ist so kaputt, dass es nicht lädt', 'Sie hat es sich anders überlegt'], optionsEn: ['Wrong color', 'It\'s too short', 'It\'s so broken it doesn\'t charge', 'She changed her mind'], answer: 2,
        explain: '"Es ist so kaputt, dass es gar nicht mehr lädt."' },
      { q: 'Was überrascht Franzi?', qEn: 'What surprises Franzi?', options: ['Der Preis', 'Dass es schon nach zwei Wochen kaputt war', 'Die Öffnungszeiten', 'Der Kassenbon'], optionsEn: ['The price', 'That it broke after only two weeks', 'The store hours', 'The receipt'], answer: 1,
        explain: '"Ich bin so überrascht, dass es schon nach zwei Wochen kaputt ist."' }
    ]
  },

  speaking: [
    { task: "Du möchtest ein Kabel zurückgeben. Erklär das Problem.", taskEn: "You want to return a cable. Explain the problem.", de: "Das Kabel ist so kaputt, dass es gar nicht mehr lädt.", en: "The cable is so broken that it doesn't charge at all any more." },
    { task: "Der Verkäufer fragt nach der Quittung. Du hast sie nicht.", taskEn: "The assistant asks for the receipt. You don't have it.", de: "Ich habe die Quittung verloren, deshalb kann ich sie nicht zeigen.", en: "I've lost the receipt, so I can't show it." },
    { task: "Deine Freundin fragt, warum du das Gerät nicht benutzt.", taskEn: "Your friend asks why you don't use the device.", de: "Die Gebrauchsanweisung war so kompliziert, dass ich aufgegeben habe.", en: "The instruction manual was so complicated that I gave up." },
    { task: "Ein Kollege fragt, warum du diesmal früher gehst.", taskEn: "A colleague asks why you're leaving earlier this time.", de: "Der Laden schließt um sechs, darum gehe ich früher.", en: "The shop closes at six, that's why I'm leaving earlier." },
    { task: "Deine Nachbarin fragt, warum du das Licht automatisch anschaltest.", taskEn: "Your neighbour asks why you have the light come on automatically.", de: "Der Flur war so dunkel, dass ich es automatisch anschalten lasse.", en: "The hall was so dark that I have it switch on automatically." },
    { task: "Dein Freund fragt, warum du das Angebot ausgezeichnet findest.", taskEn: "Your friend asks why you find the offer excellent.", de: "Es ist gratis, deswegen finde ich es ausgezeichnet.", en: "It's free, that's why I find it excellent." },
    { task: "Rollenspiel: Du reklamierst im Geschäft ein Gerät.", taskEn: "Role-play: you make a complaint about a device in the shop.", de: "Es ist so laut, dass ich nicht schlafen kann. Deshalb möchte ich es zurückgeben.", en: "It's so loud that I can't sleep. That's why I'd like to return it." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short experience report (six to eight sentences) about a purchase, an exam, or a trip — state the cause, the result with deshalb, and one strong consequence with so … dass.',
    starters: ['Zuerst …', 'Deshalb …', 'Es war so …, dass …', 'Am Ende …'],
    placeholder: 'Letzte Woche habe ich ein neues Handy gekauft. Es gab einen Rabatt, deshalb …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Es regnet. ___ bleiben wir zu Hause."',
      options: ['Weil', 'Deshalb', 'Obwohl'],
      answer: 1,
      explain: 'deshalb states the plain result of the rain — the verb (bleiben) comes immediately after it.'
    },
    gap: {
      sentence: ['Ich war ', ' müde, dass ich sofort eingeschlafen bin.'],
      gaps: [ { answer: 'so', accepts: ['so'] } ],
      explain: '"so" must appear before the adjective to build the strong-consequence pattern with dass.'
    },
    match: {
      q: 'Match each connector to its job.',
      pairs: [
        { noun: 'weil / da', art: 'Reason' },
        { noun: 'deshalb', art: 'Result' },
        { noun: 'so … dass', art: 'Strong consequence' }
      ]
    },
    builder: {
      target: 'Build: "I was so nervous that I forgot everything."',
      bank: ['Ich', 'war', 'so', 'nervös', ',', 'dass', 'ich', 'alles', 'vergessen', 'habe', '.'],
      answer: ['Ich', 'war', 'so', 'nervös', ',', 'dass', 'ich', 'alles', 'vergessen', 'habe', '.'],
      roles: { 'Ich': 'r-subject', 'war': 'r-verb', 'dass': 'r-conjunction', 'habe': 'r-verb' }
    },
    transform1: {
      title: 'Transform: weil → deshalb',
      prompt: 'Rewrite using deshalb: "Ich bleibe zu Hause, weil ich krank bin."',
      answer: 'Ich bin krank. Deshalb bleibe ich zu Hause.',
      explain: 'The weil-clause reason becomes its own sentence; deshalb introduces the result, verb immediately after.'
    },
    transform2: {
      title: 'Transform: deshalb → so … dass',
      prompt: 'Rewrite using so … dass: "Ich bin krank. Deshalb bleibe ich zu Hause."',
      answer: 'Ich bin so krank, dass ich zu Hause bleiben muss.',
      explain: 'so … dass raises the intensity — the result becomes an unavoidable strong consequence.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Deshalb ich bin müde, weil deshalb ich zu viel gearbeitet habe.',
      right: 'Ich habe zu viel gearbeitet. Deshalb bin ich müde.',
      explain: 'Two errors: deshalb needs verb-second word order (bin ich, not ich bin), and weil + deshalb can never be combined — pick one connector.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich habe die Prüfung bestanden. ___ bin ich glücklich."', options: ['Weil', 'Deshalb', 'Da'], answer: 1,
      explain: 'deshalb states the result — and the verb (bin) comes immediately after it.' },
    { q: 'Which sentence is correct?', options: ['Deshalb ich bin müde.', 'Deshalb bin ich müde.', 'Ich deshalb bin müde.'], answer: 1,
      explain: 'The verb comes immediately after deshalb, before the subject.' },
    { q: 'Complete: "Er ist ___ müde, dass er sofort einschläft."', options: ['sehr', 'so', 'zu'], answer: 1,
      explain: '"so + Adjektiv …, dass" is the fixed pattern for a strong consequence.' },
    { q: 'Which is correct with a countable plural noun?', options: ['so viel Leute, dass...', 'so viele Leute, dass...', 'so viel Leuten, dass...'], answer: 1,
      explain: 'viele takes the plural form with countable nouns like Leute.' },
    { q: 'Which sentence contains an error?', options: ['Es regnet, deshalb bleiben wir zu Hause.', 'Ich war so nervös, dass ich alles vergessen habe.', 'Deshalb weil ich müde bin, gehe ich schlafen.'], answer: 2,
      explain: 'weil and deshalb can never be combined in the same clause — pick one connector.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-conjunction', html: 'Use <span class="de r-conjunction">deshalb</span> to state a plain result — the verb comes immediately after it: <span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span>' },
    { c: 'r-conjunction', html: 'Use <span class="de">so + Adjektiv …, dass</span> to show a strong consequence: <span class="de">Ich war so nervös, dass ich alles vergessen habe.</span>' },
    { c: 'r-conjunction', html: 'Remember the ladder: weil/da (Cause) → deshalb (Result) → so … dass (Strong Result).' }
  ],
  revisionTips: [
    'After deshalb, say the verb out loud FIRST, before the subject: "Deshalb bin ich…", never "Deshalb ich bin…".',
    'Whenever you want to show HOW strong a result was, reach for so … dass instead of deshalb.',
    'Practise telling the same short story three ways: with weil, with deshalb, and with so … dass.'
  ]
};

window.CHAPTER = CHAPTER;
