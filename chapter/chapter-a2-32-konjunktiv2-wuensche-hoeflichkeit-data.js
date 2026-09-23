/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 32
   "Konjunktiv II: Wünsche & Höflichkeit" — hätte, wäre, würde +
   Infinitiv, with könnte and sollte reviewed. Covers wishes
   (Ich hätte gern…), polite requests (Könnten Sie…? Würden Sie
   bitte…?), polite offers (Ich würde Ihnen gern helfen), simple
   preferences (Ich würde lieber…), and hypothetical advice (An
   deiner Stelle würde ich…). No unreal past (hätte gemacht), no
   Konjunktiv II Perfekt, no passive Konjunktiv, no B1 hypothetical
   grammar.
   Vocabulary source: uploaded chapter-32 list (20 items; Wünsche &
   Zeit theme — die Stelle, der Helfer, die Weile, der Werktag).
   Recycles A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-31-w-fragen-praepositionen-data.js
   exactly (flat vocab[], grammar[] rule cards, tokenized reading,
   etc.) so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "herein|kommen" → corrected to hereinkommen (to come in).
   • "reich" mislabelled "Adverb/Other" in the source sheet —
     reich is an adjective (rich); corrected accordingly.
   • "die Stelle - stead" — an unusual but correct gloss; this
     chapter uses it in the fixed idiom "an deiner Stelle" (in
     your place/stead), so the original gloss is kept and
     clarified with that context.
============================================================ */
const CHAPTER = {
  id: 'a2-32-konjunktiv2-wuensche-hoeflichkeit',
  phase: 'A2 · Phase 2',
  number: 32,
  title: 'Konjunktiv II: Wünsche & Höflichkeit',
  titleEn: 'Subjunctive II: wishes and politeness',
  description: 'Ich hätte gern einen Kaffee. Könnten Sie mir helfen? An deiner Stelle würde ich mehr lernen. This chapter teaches the everyday Konjunktiv II forms — hätte, wäre, würde + Infinitiv, with könnte and sollte reviewed — for wishes, polite requests and offers, simple preferences, and hypothetical advice.',
  xp: 200,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 33, title: 'Relativsätze im Nominativ', titleEn: 'Relative clauses in the nominative' , href: 'chapter-a2-33-relativsatz-nominativ.html' },

  prevChapter: { number: 31, title: 'W-Fragen mit Präpositionen', titleEn: 'Question words with prepositions', href: 'chapter-a2-31-w-fragen-praepositionen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A café table becomes a crash course in polite German — Timo would like a bread and a coffee, and Frau Reimers takes his order with hätte, wäre, würde, könnte and sollte, all in one relaxed exchange.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear wishes, polite requests, and hypothetical advice side by side'
    ],
    scene: 'Im Café — Sprachschule Berlin',
    femaleSpeakers: ['Frau Reimers'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Hätten', role: 'r-modalverb', en: 'would you have', hi: 'होगी', pron: 'HE-ten', type: 'Modal · haben (Konjunktiv II, Sie)', why: 'hätten Sie = would you have, polite request (this chapter).', ex: 'Hätten Sie einen Moment Zeit?', exEn: 'Would you have a moment?' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आपके पास', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Moment', role: 'r-akkusativ', en: 'moment', hi: 'पल', pron: 'mo-MENT', type: 'Noun · masc.' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Would you have a moment?', hi: 'Kya aapke paas ek pal ka samay hoga?' },
      { speaker: 'Frau Reimers', side: 'right', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'wünschen', role: 'r-verb', en: 'would you like', hi: 'चाहेंगे', pron: 'VÜN-shen', type: 'Verb · wünschen (Sie)', why: 'wünschen = to wish, polite phrase (this chapter).', ex: 'Was wünschen Sie?', exEn: 'What would you like?' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: '?', plain: true }
      ], en: 'Of course. What would you like?', hi: 'Zaroor. Aap kya chahenge?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-modalverb', en: 'would have', hi: 'चाहिए', pron: 'HE-tuh', type: 'Modal · haben (Konjunktiv II, ich)', why: 'ich hätte gern = I would like, polite request (this chapter).', ex: 'Ich hätte gern ein Brot.', exEn: 'I would like a bread.' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Brot', role: 'r-akkusativ', en: 'bread', hi: 'ब्रेड', pron: 'broht', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I would like a bread.', hi: 'Mujhe ek bread chahiye.' },
      { speaker: 'Frau Reimers', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Möchten', role: 'r-modalverb', en: 'would you like', hi: 'चाहेंगे', pron: 'MÖKH-ten', type: 'Modal · möchten (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'anderes', role: 'r-akkusativ', en: 'else', hi: 'और', pron: 'AN-de-res', type: 'Pronoun' },
        { w: '?', plain: true }
      ], en: 'Gladly. Would you also like something else?', hi: 'Khushi se. Kya aap aur kuch chahenge?' },
      { speaker: 'Timo', tokens: [
        { w: 'Könnten', role: 'r-modalverb', en: 'could you', hi: 'सकती हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, Sie)', why: 'könnten Sie = could you, polite request (this chapter).', ex: 'Könnten Sie mir helfen?', exEn: 'Could you help me?' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'ka-FAY', type: 'Noun · masc.' },
        { w: 'geben', role: 'r-verb', en: 'give', hi: 'देना', pron: 'GAY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Could you also give me a coffee?', hi: 'Kya aap mujhe ek coffee bhi de sakti hain?' },
      { speaker: 'Frau Reimers', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sofort', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)', why: 'wäre = would be, Konjunktiv II of sein (this chapter).', ex: 'Wäre das alles?', exEn: 'Would that be everything?' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: '?', plain: true }
      ], en: 'Yes, right away. Would that be everything?', hi: 'Haan, abhi. Kya bas itna hi chahiye?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: '.', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Ihre', role: 'r-akkusativ', en: 'your (fem.)', hi: 'आपकी', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Hilfe', role: 'r-akkusativ', en: 'help', hi: 'मदद', pron: 'HIL-fuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Yes, that would be everything. Thanks for your help.', hi: 'Haan, bas itna hi. Aapki madad ke liye dhanyavaad.' },
      { speaker: 'Frau Reimers', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'schönen', role: 'r-akkusativ', en: 'nice', hi: 'अच्छा', pron: 'SHER-nen', type: 'Adjective' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Gladly! Have a nice day still!', hi: 'Khushi se! Aapka din shubh ho!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Konjunktiv II makes German softer and more polite. <span class="de">ich habe</span> → <span class="de r-modalverb">ich hätte</span> (I would have / I\'d like). <span class="de">ich bin</span> → <span class="de r-modalverb">ich wäre</span> (I would be). <span class="de">ich will</span> → <span class="de r-modalverb">ich würde gern</span> + Infinitiv (I would like to). Use them for wishes (Ich hätte gern…), polite requests (Könnten Sie…? Würden Sie…?), offers (Ich würde Ihnen gern helfen), preferences (Ich würde lieber…), and friendly advice (An deiner Stelle würde ich…).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II FOR WISHES AND POLITENESS (A2 level only): hätte, wäre, würde + Infinitiv, with könnte and sollte reviewed. Used for wishes (Ich hätte gern…), polite requests (Könnten Sie…? Würden Sie bitte…?), polite offers (Ich würde Ihnen gern helfen), simple preferences (Ich würde lieber…), and hypothetical advice (An deiner Stelle würde ich…). ' +
    'No unreal past (hätte gemacht), no Konjunktiv II Perfekt, no passive Konjunktiv, no B1 hypothetical grammar. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- ich habe → ich hätte (not "ich habe gern" for a polite wish — should be "ich hätte gern").\n' +
    '- ich bin → ich wäre (not "ich bin gern" for a wish about state/place — should be "ich wäre gern").\n' +
    '- ich will → ich würde gern + Infinitiv (flag "ich würde gern bin" — würde needs an infinitive at the end, never a conjugated verb like bin).\n' +
    '- Flag "Ich hätte gehen." (hätte needs gern + a noun, or gern + Infinitiv only in fixed cases — for actions, use würde + Infinitiv: "Ich würde gern gehen.").\n' +
    '- Flag "Würdest Sie…?" — the formal Sie form is always "Würden Sie…?", never "Würdest Sie".\n' +
    '- Flag "Ich wäre einen Kaffee." — wäre is for states/being, not for having/wanting something; that needs hätte: "Ich hätte gern einen Kaffee."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Politeness check:</b> one sentence on whether the learner\'s Konjunktiv II sounded natural and polite.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle hätte, wäre, and würde + Infinitiv for wishes and politeness confidently. Next: describe nouns with relative clauses in the Nominativ.',
    mid: 'Good. Re-read the haben→hätte, sein→wäre, werden→würde comparison table once, then continue.',
    low: 'Worth another pass — remember: hätte for having/wanting a thing, wäre for being/state, würde + Infinitiv for doing an action. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'hätte', role: 'r-modalverb' },
    { w: 'gern', role: 'r-adverb' }, { w: 'einen', role: 'r-akkusativ' },
    { w: 'Kaffee', role: 'r-akkusativ' }, { w: ',', role: 'plain' },
    { w: 'und', role: 'r-conjunction' }, { w: 'ich', role: 'r-subject' },
    { w: 'würde', role: 'r-modalverb' }, { w: 'gern', role: 'r-adverb' },
    { w: 'mehr', role: 'r-adverb' }, { w: 'reisen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: hätte, wäre, würde make German softer.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A café afternoon full of polite wishes, requests, and offers.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Stelle, der Helfer, die Weile, der Werktag.' },
    { id: 'grammar',    label: 'Konjunktiv II', tag: 'core',
      objective: 'Master hätte, wäre, würde + Infinitiv, and the reviewed könnte/sollte.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a café story full of polite Konjunktiv II.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each wish, request, and piece of advice in a café conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Order politely, ask for help, and give friendly advice.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a polite email or restaurant conversation using Konjunktiv II.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill hätte/wäre/würde and the classic mistakes.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s wishes and time words — die Stelle, der Helfer, die Weile, der Werktag — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'hätte/wäre/würde transformation drills, polite-request sorting, and an email-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full haben→hätte, sein→wäre, werden→würde comparison table, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich hätte gern einen Kaffee.', text: 'Make a polite wish for a thing' },
    { de: 'Ich wäre gern in Deutschland.', text: 'Make a polite wish about being somewhere or in a state' },
    { de: 'Ich würde gern mehr reisen.', text: 'Make a polite wish to do something' },
    { de: 'Könnten Sie mir helfen? Würden Sie bitte langsamer sprechen?', text: 'Ask a polite question or make a polite request' },
    { de: 'An deiner Stelle würde ich mehr lernen.', text: 'Give friendly, hypothetical advice' }
  ],

  // ---------- Vocabulary (20 items) ----------
  vocab: [
    { de: 'backen', pos: 'verb', en: 'to bake', hi: 'सेंकना', ex: 'Ich würde gern einen Kuchen backen.', exEn: 'I would like to bake a cake.', conj: { praesens: 'bäckt', praeteritum: 'backte', perfekt: 'hat gebacken' } },
    { de: 'besitzen', pos: 'verb', en: 'to own', hi: 'मालिक होना', ex: 'Ich würde gern ein Boot besitzen.', exEn: 'I would like to own a boat.', conj: { praesens: 'besitzt', praeteritum: 'besaß', perfekt: 'hat besessen' } },
    { de: 'brechen', pos: 'verb', en: 'to break', hi: 'तोड़ना', ex: 'An deiner Stelle würde ich das Glas nicht brechen.', exEn: 'In your place, I wouldn\'t break the glass.', conj: { praesens: 'bricht', praeteritum: 'brach', perfekt: 'hat gebrochen' } },
    { de: 'Ehe', art: 'die', gender: 'f', plural: 'Ehen', pos: 'noun', en: 'marriage', hi: 'विवाह', ex: 'Ich wäre gern schon lange in einer glücklichen Ehe.', exEn: 'I would like to have long been in a happy marriage.' },
    { de: 'füllen', pos: 'verb', en: 'to fill', hi: 'भरना', ex: 'Könnten Sie die Lücke füllen?', exEn: 'Could you fill the gap?', conj: { praesens: 'füllt', praeteritum: 'füllte', perfekt: 'hat gefüllt' } },
    { de: 'Gas', art: 'das', gender: 'n', plural: 'Gase', pos: 'noun', en: 'gas', hi: 'गैस', ex: 'Würden Sie bitte das Gas ausschalten?', exEn: 'Would you please turn off the gas?' },
    { de: 'heilen', pos: 'verb', en: 'to heal', hi: 'ठीक करना', ex: 'Ich würde die Wunde gern schneller heilen lassen.', exEn: 'I would like the wound to heal faster.', conj: { praesens: 'heilt', praeteritum: 'heilte', perfekt: 'ist geheilt' } },
    { de: 'Helfer', art: 'der', gender: 'm', plural: 'Helfer', pos: 'noun', en: 'helper', hi: 'सहायक', ex: 'Ich suche einen Helfer für die Kajaktour.', exEn: 'I\'m looking for a helper for the kayak tour.' },
    { de: 'hereinkommen', pos: 'verb', en: 'to come in', hi: 'अंदर आना', ex: 'Würden Sie bitte hereinkommen?', exEn: 'Would you please come in?', conj: { praesens: 'kommt herein', praeteritum: 'kam herein', perfekt: 'ist hereingekommen' } },
    { de: 'Kajaktour', art: 'die', gender: 'f', plural: 'Kajaktouren', pos: 'noun', en: 'kayak tour', hi: 'कयाक यात्रा', ex: 'Ich wäre gern auf einer Kajaktour.', exEn: 'I would like to be on a kayak tour.' },
    { de: 'Lücke', art: 'die', gender: 'f', plural: 'Lücken', pos: 'noun', en: 'gap', hi: 'कमी', ex: 'Jemand müsste die Lücke im Plan füllen.', exEn: 'Someone would have to fill the gap in the plan.' },
    { de: 'Papa', art: 'der', gender: 'm', plural: 'Papas', pos: 'noun', en: 'daddy', hi: 'पापा', ex: 'Mein Papa hätte gern mehr Zeit für die Familie.', exEn: 'My dad would like more time for the family.' },
    { de: 'reich', pos: 'adjective', en: 'rich', hi: 'अमीर', ex: 'Ich wäre gern reich, aber glücklich ist wichtiger.', exEn: 'I would like to be rich, but happy is more important.' },
    { de: 'schimpfen', pos: 'verb', en: 'to scold', hi: 'डांटना', ex: 'An deiner Stelle würde ich nicht so viel schimpfen.', exEn: 'In your place, I wouldn\'t scold so much.', conj: { praesens: 'schimpft', praeteritum: 'schimpfte', perfekt: 'hat geschimpft' } },
    { de: 'Sprecher', art: 'der', gender: 'm', plural: 'Sprecher', pos: 'noun', en: 'speaker', hi: 'वक्ता', ex: 'Könnten Sie den Sprecher fragen?', exEn: 'Could you ask the speaker?' },
    { de: 'Stelle', art: 'die', gender: 'f', plural: 'Stellen', pos: 'noun', en: 'place, stead', hi: 'जगह', ex: 'An deiner Stelle würde ich mehr lernen.', exEn: 'In your place, I would study more.' },
    { de: 'vergehen', pos: 'verb', en: 'to pass by', hi: 'बीत जाना', ex: 'Die Zeit vergeht schneller, als man denkt.', exEn: 'Time passes by faster than you think.', conj: { praesens: 'vergeht', praeteritum: 'verging', perfekt: 'ist vergangen' } },
    { de: 'Weile', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'while (period of time)', hi: 'क्षण', ex: 'Es dauert noch eine Weile.', exEn: 'It will still take a while.' },
    { de: 'Werktag', art: 'der', gender: 'm', plural: 'Werktage', pos: 'noun', en: 'working day', hi: 'कामकाजी दिन', ex: 'Nach einem langen Werktag hätte ich gern Ruhe.', exEn: 'After a long working day, I would like some peace.' },
    { de: 'Gegenvorschlag', art: 'der', gender: 'm', plural: 'Gegenvorschläge', pos: 'noun', en: 'counterproposal', hi: 'प्रति-प्रस्ताव', ex: 'Hätten Sie einen Gegenvorschlag?', exEn: 'Would you have a counterproposal?' }
  ],

  // ---------- Konjunktiv II: Wünsche & Höflichkeit (rule cards) ----------
  grammar: [
    {
      title: 'From plain verb to Konjunktiv II',
      body: [
        'Konjunktiv II makes a sentence softer, more polite, or hypothetical. Three verbs change the most often at A2.'
      ],
      table: {
        head: ['Plain', 'Konjunktiv II', 'Meaning'],
        rows: [
          ['ich habe', 'ich <b>hätte</b>', 'I would have / I\'d like (a thing)'],
          ['ich bin', 'ich <b>wäre</b>', 'I would be (a state, a place)'],
          ['ich will', 'ich <b>würde</b> gern + Infinitiv', 'I would like to (do something)'],
          ['ich kann', 'ich <b>könnte</b> (review)', 'I could'],
          ['ich soll', 'ich <b>sollte</b> (review)', 'I should']
        ]
      },
      hinglish: 'Konjunktiv II sentence ko polite ya hypothetical bana deta hai. <b>habe</b> se <b>hätte</b> banta hai (jab koi cheez chahiye), <b>bin</b> se <b>wäre</b> (jab kahin hona ho), aur <b>will</b> ki jagah <b>würde gern</b> + Infinitiv aata hai (jab kuch karna ho).'
    },
    {
      title: 'Wishes: hätte, wäre, würde gern',
      body: [
        'Use <span class="de r-modalverb">hätte gern</span> for wanting a thing, <span class="de r-modalverb">wäre gern</span> for wanting to be somewhere or in a state, and <span class="de r-modalverb">würde gern</span> + Infinitiv for wanting to do an action.'
      ],
      table: {
        head: ['Wish', 'Example'],
        rows: [
          ['a thing', '<span class="de">Ich hätte gern einen Kaffee.</span>'],
          ['a state / place', '<span class="de">Ich wäre gern in Deutschland.</span>'],
          ['an action', '<span class="de">Ich würde gern mehr reisen.</span>']
        ]
      },
      hinglish: 'Faisla aise karo: koi cheez chahiye to <b>hätte gern</b>, kahin hona ya kisi state mein hona ho to <b>wäre gern</b>, aur kuch karna ho to <b>würde gern</b> ke saath Infinitiv.'
    },
    {
      title: 'Polite requests & offers',
      body: [
        'Formal requests use the Sie-form of könnte, würde, or hätte. Offers use ich könnte or ich würde gern.'
      ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Polite request', '<span class="de">Könnten Sie mir helfen?</span>'],
          ['Polite request', '<span class="de">Würden Sie bitte langsamer sprechen?</span>'],
          ['Polite request', '<span class="de">Hätten Sie einen Moment Zeit?</span>'],
          ['Polite offer', '<span class="de">Ich würde Ihnen gern helfen.</span>'],
          ['Polite offer', '<span class="de">Ich könnte das übernehmen.</span>']
        ]
      },
      hinglish: 'Formal request ke liye <b>Könnten Sie …?</b>, <b>Würden Sie …?</b> ya <b>Hätten Sie …?</b> use karo. Aur kuch offer karna ho to <b>ich könnte</b> ya <b>ich würde gern</b> theek rehta hai.'
    },
    {
      title: 'Preferences & hypothetical advice',
      body: [
        '<span class="de r-modalverb">würde lieber</span> / <span class="de r-modalverb">hätte lieber</span> express a preference. <span class="de">An deiner Stelle würde ich…</span> gives friendly advice by imagining yourself in someone else\'s position.'
      ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Preference (action)', '<span class="de">Ich würde lieber zu Hause bleiben.</span>'],
          ['Preference (thing)', '<span class="de">Ich hätte lieber Tee.</span>'],
          ['Hypothetical advice', '<span class="de">An deiner Stelle würde ich mehr lernen.</span>'],
          ['Hypothetical wish', '<span class="de">Ich wäre glücklich.</span>']
        ]
      },
      note: 'This chapter does not cover the unreal past (ich wäre lieber früher gekommen) beyond simple recognition — it is not tested.',
      hinglish: 'Preference batane ke liye <b>würde lieber</b> ya <b>hätte lieber</b> aata hai. Aur advice dene ke liye <b>an deiner Stelle würde ich …</b> bahut natural lagta hai \u2014 matlab khud ko saamne wale ki jagah rakh kar baat karna.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Ich würde gern bin in Deutschland.</span> → <span class="de">Ich wäre gern in Deutschland.</span> — würde needs an Infinitiv at the end, not a conjugated verb like "bin".',
        '<span class="de strike">Ich hätte gehen.</span> → <span class="de">Ich würde gern gehen.</span> — for an action, use würde + Infinitiv, not hätte + Infinitiv.',
        '<span class="de strike">Würdest Sie mir helfen?</span> → <span class="de">Würden Sie mir helfen?</span> — the formal Sie-form is always würden, never würdest.',
        '<span class="de strike">Ich wäre einen Kaffee.</span> → <span class="de">Ich hätte gern einen Kaffee.</span> — wäre is for being/state, not for having a thing.'
      ],
      hinglish: 'Teen galtiyan common hain. <b>würde</b> ke baad Infinitiv aata hai, koi conjugated form nahi. Kaam ke liye <b>würde</b>, cheez ke liye <b>hätte</b>, aur state ke liye <b>wäre</b> use karo. Aur polite <b>Sie</b> ke saath <b>würden</b> aata hai, <b>würdest</b> nahi.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Ein Nachmittag im Café',
    titleEn: 'An afternoon in the café',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AN-na', type: 'Name' },
      { w: 'hätte', role: 'r-verb', en: 'would like to have', hi: 'चाहेगी', pron: 'HE-tuh', type: 'Konjunktiv II · haben', why: 'hätte — a polite wish (this chapter).' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Konjunktion' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'hätte', role: 'r-verb', en: 'would like to have', hi: 'चाहेगा', pron: 'HE-tuh', type: 'Konjunktiv II · haben' },
      { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'बजाय', pron: 'LEE-ber', type: 'Adverb', why: 'lieber (this chapter).' },
      { w: 'Tee', role: 'r-akkusativ', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'browkht', type: 'Verb · brauchen' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Helfer', role: 'r-akkusativ', en: 'helper', hi: 'सहायक', pron: 'HEL-fer', type: 'Noun · masc.', why: 'der Helfer (this chapter).' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Kajaktour', role: 'r-akkusativ', en: 'kayak tour', hi: 'कयाक यात्रा', pron: 'KAH-yak-toor', type: 'Noun · fem.', why: 'die Kajaktour (this chapter).' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen' },
      { w: 'höflich', role: 'r-adjective', en: 'politely', hi: 'विनम्रता से', pron: 'HOEF-likh', type: 'Adverb' },
      { w: ':', plain: true },
      { w: '"Könnten', role: 'r-modalverb', en: '"could', hi: '"कर सकते हैं', pron: 'KOEN-ten', type: 'Konjunktiv II · können' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formell' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ' },
      { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Infinitiv' },
      { w: '?"', plain: true },
      { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Titel' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'करेगी', pron: 'VUER-duh', type: 'Konjunktiv II · werden', why: 'würde + Infinitiv (this chapter).' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसे', pron: 'eem', type: 'Pronoun · Dativ' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
      { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'An', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition · Dat.' },
      { w: 'Rohans', role: 'r-dativ', en: 'Rohan\'s', hi: 'रोहन का', pron: 'ROH-hans', type: 'Genitiv/Possessiv' },
      { w: 'Stelle', role: 'r-dativ', en: 'place, stead', hi: 'जगह', pron: 'SHTE-luh', type: 'Noun · fem.', why: 'die Stelle — in the idiom "an … Stelle" (this chapter).' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'करेगा', pron: 'VUER-duh', type: 'Konjunktiv II · werden' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'mehr', role: 'r-adverb', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Adverb' },
      { w: 'reisen', role: 'r-verb', en: 'travel', hi: 'यात्रा करना', pron: 'RY-zen', type: 'Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Anna would like a coffee, but Max would rather have tea. Rohan needs a helper for the kayak tour, and he asks politely: "Could you help me?" Frau Weber would gladly help him. In Rohan\'s place, Max would also travel more.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_032_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag, ich hätte gern ein Brot und einen Kaffee.', en: 'Good day, I would like a bread and a coffee.' },
      { id: 'A2_032_L002', speaker: 'Frau Reimers', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gern. Wäre ein Tee auch eine Option für Sie?', en: 'Gladly. Would a tea also be an option for you?' },
      { id: 'A2_032_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, danke, Kaffee wäre perfekt. Könnten Sie mir auch etwas Butter bringen?', en: 'No, thanks, coffee would be perfect. Could you also bring me some butter?' },
      { id: 'A2_032_L004', speaker: 'Frau Reimers', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Natürlich, das würde ich sofort machen.', en: 'Of course, I would do that right away.' }
    ],
    transcript: 'Guten Tag, ich hätte gern ein Brot und einen Kaffee. Gern. Wäre ein Tee auch eine Option für Sie? Nein, danke, Kaffee wäre perfekt. Könnten Sie mir auch etwas Butter bringen? Natürlich, das würde ich sofort machen.',
    translation: 'Good day, I would like a bread and a coffee. Gladly. Would a tea also be an option for you? No, thanks, coffee would be perfect. Could you also bring me some butter? Of course, I would do that right away.',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hätte' },
      { w: 'gern' },
      { w: 'ein' },
      { w: 'Brot' },
      { w: 'und' },
      { w: 'einen' },
      { w: 'Kaffee' },
      { w: '.', plain: true },
      { w: 'Gern' },
      { w: '.', plain: true },
      { w: 'Wäre' },
      { w: 'ein' },
      { w: 'Tee' },
      { w: 'auch' },
      { w: 'eine' },
      { w: 'Option' },
      { w: 'für' },
      { w: 'Sie' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'danke' },
      { w: ',', plain: true },
      { w: 'Kaffee' },
      { w: 'wäre' },
      { w: 'perfekt' },
      { w: '.', plain: true },
      { w: 'Könnten' },
      { w: 'Sie' },
      { w: 'mir' },
      { w: 'auch' },
      { w: 'etwas' },
      { w: 'Butter' },
      { w: 'bringen' },
      { w: '?', plain: true },
      { w: 'Natürlich' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'sofort' },
      { w: 'machen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was bestellt Timo?', qEn: 'What does Timo order?', options: ['Tee und Kuchen', 'Brot und Kaffee', 'Saft und Brot', 'Kaffee und Kuchen'], optionsEn: ['tea and cake', 'bread and coffee', 'juice and bread', 'coffee and cake'], answer: 1,
        explain: '"Ich hätte gern ein Brot und einen Kaffee."' },
      { q: 'Worum bittet Timo zusätzlich?', qEn: 'What does Timo ask for in addition?', options: ['Zucker', 'Butter', 'Milch', 'Marmelade'], optionsEn: ['sugar', 'butter', 'milk', 'jam'], answer: 1,
        explain: '"Könnten Sie mir auch etwas Butter bringen?"' }
    ]
  },

  speaking: [
    { task: "Im Café möchtest du bestellen. Sag es höflich.", taskEn: "In the café you want to order. Say it politely.", de: "Ich hätte gern einen Kaffee und ein Stück Kuchen.", en: "I'd like a coffee and a piece of cake, please." },
    { task: "Du brauchst Hilfe beim Tragen. Frag höflich.", taskEn: "You need help carrying something. Ask politely.", de: "Würden Sie mir bitte helfen?", en: "Would you please help me?" },
    { task: "Deine Freundin arbeitet zu viel. Was wünschst du dir für sie?", taskEn: "Your friend works too much. What do you wish for her?", de: "Ich wünschte, du hättest mehr Zeit für dich.", en: "I wish you had more time for yourself." },
    { task: "Dein Freund schimpft viel. Gib ihm einen freundlichen Rat.", taskEn: "Your friend complains a lot. Give him friendly advice.", de: "An deiner Stelle würde ich einfach eine Weile warten.", en: "In your place I'd simply wait a while." },
    { task: "Du möchtest die Kajaktour verschieben. Mach einen Gegenvorschlag.", taskEn: "You'd like to postpone the kayak trip. Make a counter-proposal.", de: "Wir könnten die Kajaktour auch am Werktag machen.", en: "We could also do the kayak trip on a weekday." },
    { task: "Du bist reich in deinen Träumen. Was würdest du machen?", taskEn: "In your dreams you're rich. What would you do?", de: "Wenn ich reich wäre, würde ich ein Haus für meine Eltern kaufen.", en: "If I were rich, I'd buy a house for my parents." },
    { task: "Ein Gast steht vor der Tür. Lade ihn höflich herein.", taskEn: "A guest is at the door. Invite him in politely.", de: "Würden Sie bitte hereinkommen?", en: "Would you please come in?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short polite email (six sentences) inviting a friend somewhere, using at least one wish with hätte or wäre, one polite request with könnten/würden Sie, and one piece of advice with würde. Try this chapter\'s words: die Kajaktour, der Helfer, die Weile.',
    starters: ['Ich hätte gern …', 'Ich wäre gern …', 'Würden Sie …?', 'An deiner Stelle würde ich …'],
    placeholder: 'Liebe Anna, ich hätte gern deine Meinung zu einer Kajaktour am Wochenende…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct polite wish: "Ich ___ gern einen Kaffee."',
      options: ['bin', 'hätte', 'würde'],
      answer: 1,
      explain: 'hätte gern is used for wanting a thing.'
    },
    gap: {
      sentence: ['', ' Sie mir bitte helfen?'],
      gaps: [ { answer: 'Könnten', accepts: ['Könnten', 'Würden'] } ],
      explain: 'Formal polite requests use Könnten Sie…? or Würden Sie…?'
    },
    match: {
      q: 'Match each Konjunktiv II form to its plain-verb origin.',
      pairs: [
        { noun: 'hätte', art: 'from haben — I would have / I\'d like' },
        { noun: 'wäre', art: 'from sein — I would be' },
        { noun: 'würde', art: 'from werden — I would (do)' },
        { noun: 'könnte', art: 'from können — I could (review)' },
        { noun: 'sollte', art: 'from sollen — I should (review)' }
      ]
    },
    builder: {
      target: 'Build: "In your place, I would travel more."',
      bank: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'mehr', 'reisen', '.'],
      answer: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'mehr', 'reisen', '.'],
      roles: { 'würde': 'r-modalverb', 'Stelle': 'r-dativ', 'ich': 'r-subject', 'reisen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich ___ gern in Deutschland." (a wish about being somewhere)', options: ['hätte', 'wäre', 'würde'], answer: 1,
      explain: 'wäre expresses a wish about being/state.' },
    { q: 'Complete: "Ich ___ gern mehr reisen." (a wish to do something)', options: ['hätte', 'wäre', 'würde'], answer: 2,
      explain: 'würde + Infinitiv expresses a wish to do an action.' },
    { q: 'Which is the correct formal polite request?', options: ['Würdest Sie mir helfen?', 'Würden Sie mir helfen?', 'Würde Sie mir helfen?'], answer: 1,
      explain: 'The formal Sie-form is always würden, never würdest.' },
    { q: 'Which is correct?', options: ['Ich würde gern bin in Berlin.', 'Ich wäre gern in Berlin.', 'Ich hätte gern in Berlin.'], answer: 1,
      explain: 'würde needs an Infinitiv, not a conjugated verb like "bin" — the correct form here is wäre.' },
    { q: 'Which is correct for wanting a coffee?', options: ['Ich wäre einen Kaffee.', 'Ich würde einen Kaffee.', 'Ich hätte gern einen Kaffee.'], answer: 2,
      explain: 'hätte gern is used for wanting a thing.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: '<span class="de r-modalverb">hätte gern</span> for wanting a thing, <span class="de r-modalverb">wäre gern</span> for wanting to be somewhere or in a state, <span class="de r-modalverb">würde gern</span> + Infinitiv for wanting to do an action.' },
    { c: 'r-modalverb', html: 'Polite requests: <span class="de">Könnten Sie…?</span> <span class="de">Würden Sie bitte…?</span> <span class="de">Hätten Sie…?</span> Polite offers: <span class="de">Ich würde Ihnen gern helfen.</span> <span class="de">Ich könnte das übernehmen.</span>' },
    { c: 'r-modalverb', html: '<span class="de">An deiner Stelle würde ich…</span> gives friendly, hypothetical advice by imagining yourself in someone else\'s place.' }
  ],
  revisionTips: [
    'Ask yourself: is it a thing (hätte), a state/place (wäre), or an action (würde + Infinitiv)?',
    'würde always needs an Infinitiv at the end of the clause — never a conjugated verb like "bin" or "gehe".',
    'The formal Sie-form is always würden/könnten/hätten — never würdest/könntest/hättest for Sie.'
  ]
};

window.CHAPTER = CHAPTER;
