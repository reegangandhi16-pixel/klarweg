/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 29
   "Passiv mit Modalverben" — combining the Passive (Ch.10, 28)
   with all six modal verbs. Does NOT introduce Passiv
   Plusquamperfekt/Futur mit Modalverben, Ersatzinfinitiv, B2
   passive constructions, or Passiv Konjunktiv.
   IMPORTANT: dialogue uses ONLY Solveig and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-29 list (44 items) — an
   EU/politics/history theme (Europäische Union, Mitgliedsstaat,
   Grenzkontrolle, Weltkrieg, Vorschrift, Skeptiker…) — a natural
   fit for Passive + Modal: treaties, regulations, and border
   rules are always phrased as "müssen unterzeichnet werden",
   "dürfen nicht eingeführt werden".
============================================================ */
const CHAPTER = {
  id: 'b1-29-passiv-modalverben',
  phase: 'B1 · Phase 1',
  number: 29,
  title: 'Passiv mit Modalverben',
  titleEn: 'Passive with modal verbs',
  description: 'Combine the passive with all six modal verbs: das Formular muss ausgefüllt werden, hier darf nicht fotografiert werden — the infinitive werden always comes last.',
  xp: 290,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 30, title: 'Artikelwörter als Pronomen', titleEn: 'Article words as pronouns' , href: 'chapter-b1-30-artikelwoerter-als-pronomen.html' },

  prevChapter: { number: 28, title: 'Passiv: Präsens, Präteritum & Perfekt', titleEn: 'Passive: present, simple past & perfect', href: 'chapter-b1-28-passiv-praesens-praeteritum-perfekt.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Focus on the action, <em>with obligation attached.</em>',
    intro: 'A lecture on the European Union has Solveig and Timo working through contracts that must be signed, decisions that must be made, member states that must be informed — the passive combined with every modal verb, werden always last.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Passiv with müssen, können, dürfen, and sollen used naturally in one conversation'
    ],
    scene: 'Der Vortrag über die EU',
    femaleSpeakers: ['Solveig'],
    dialogue: [
      { speaker: 'Solveig', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Vertrag', role: 'r-subject', en: 'contract', hi: 'समझौता', pron: 'fer-TRAHK', type: 'Noun · masc.' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'होना चाहिए', pron: 'mus', type: 'Modal · müssen', why: 'Modal + Partizip II + werden = Passiv mit Modalverb (this chapter).', ex: 'Der Vertrag muss unterschrieben werden.', exEn: 'The contract must be signed.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'unterschrieben', role: 'r-verb', en: 'signed', hi: 'हस्ताक्षरित', pron: 'un-ter-SHREE-ben', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'किया जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'The contract must be signed soon.', hi: 'Yeh samjhauta jald hastakshaarit hona chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kann', role: 'r-modalverb', en: 'can', hi: 'सकता है', pron: 'kan', type: 'Modal · können' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'verschoben', role: 'r-verb', en: 'postponed', hi: 'टाला', pron: 'fer-SHO-ben', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can that not be postponed?', hi: 'Kya ise taala nahi ja sakta?' },
      { speaker: 'Solveig', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'ये', pron: 'dee', type: 'Article · fem.' },
        { w: 'Entscheidung', role: 'r-subject', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'होना चाहिए', pron: 'mus', type: 'Modal · müssen' },
        { w: 'diese', role: 'r-akkusativ', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Woche', role: 'r-akkusativ', en: 'week', hi: 'हफ़्ते', pron: 'VO-khuh', type: 'Noun · fem.' },
        { w: 'getroffen', role: 'r-verb', en: 'made', hi: 'लिया', pron: 'ge-TRO-fen', type: 'Partizip II', why: 'eine Entscheidung treffen → getroffen werden (this chapter).' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, the decision must be made this week.', hi: 'Nahi, yeh faisla is hafte hona chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Mitgliedsstaaten', role: 'r-subject', en: 'member states', hi: 'सदस्य देश', pron: 'MIT-gleets-shtah-ten', type: 'Noun · plural' },
        { w: 'darüber', role: 'r-akkusativ', en: 'about it', hi: 'इसके बारे में', pron: 'da-RÜ-ber', type: 'Pronoun · adverbial' },
        { w: 'informiert', role: 'r-verb', en: 'informed', hi: 'सूचित', pron: 'in-for-MEERT', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'किया जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '?', plain: true }
      ], en: 'Shall the member states be informed about it?', hi: 'Kya sadasya deshon ko iske baare mein soochit kiya jaana chahiye?' },
      { speaker: 'Solveig', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'चाहिए', pron: 'MÜ-sen', type: 'Modal · müssen (plural)' },
        { w: 'sofort', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'benachrichtigt', role: 'r-verb', en: 'notified', hi: 'सूचित', pron: 'be-NAHKH-rikh-tikt', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'किया जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, they must be notified right away.', hi: 'Haan, unhe abhi soochit kiya jaana chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'vernünftig', role: 'r-akkusativ', en: 'reasonable', hi: 'उचित', pron: 'fer-NÜNF-tikh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stimme', role: 'r-verb', en: 'agree', hi: 'सहमत हूँ', pron: 'SHTI-muh', type: 'Verb · stimmen', lexicalUnit: 'zustimmen' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix · Satzende', lexicalUnit: 'zustimmen' },
        { w: '.', plain: true }
      ], en: 'That sounds reasonable. I agree.', hi: 'Yeh uchit lagta hai. Main sahmat hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Sometimes the focus isn\'t on WHO does something, but on obligation, permission, or possibility: <span class="de r-verb">Modalverb + Partizip II + werden</span> — the infinitive <b>werden</b> always comes last. <span class="de r-verb">muss</span> gemacht werden (obligation), <span class="de r-verb">darf</span> nicht benutzt werden (prohibition), <span class="de r-verb">kann</span> gelöst werden (possibility), <span class="de r-verb">soll</span> gestärkt werden (recommendation).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PASSIV MIT MODALVERBEN (B1 level only): Modalverb (conjugated) + Partizip II + werden (infinitive, at the end). Covers müssen (obligation), können (possibility), dürfen (permission, or nicht = prohibition), sollen (recommendation) — with brief mention that wollen/mögen + Passiv are rare and mostly written/uncommon. ' +
    'Do NOT expect Passiv Plusquamperfekt/Futur mit Modalverben, Ersatzinfinitiv, B2 passive constructions, or Passiv Konjunktiv — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Word order: Modalverb in position 2 (main clause), Partizip II + werden together at the very end, werden always last.\n' +
    '- Never confuse "muss ... werden" with "muss ... worden" — Passiv mit Modalverben always uses the infinitive werden, never worden.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Word-order check:</b> one sentence on whether werden correctly sits at the very end in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly place werden at the end of every Passiv + Modalverb sentence, and choose the right modal for obligation, permission, and possibility. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Formation Table once — especially where werden sits in the sentence — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: obligation? müssen. permission? dürfen. possibility? können.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'Formular', role: 'plain' },
    { w: 'muss', role: 'plain' }, { w: 'ausgefüllt', role: 'plain' },
    { w: 'werden', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Modalverb + Partizip II + werden, with werden always last.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Solveig and Timo attend an EU lecture full of Passiv + Modalverb rules.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 44 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Passiv with müssen, können, dürfen, sollen (and briefly wollen/mögen).' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage of museum/EU rules using Passiv + Modalverben.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which modal verb + Passiv is used in each spoken sentence.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain rules and regulations using Passiv + Modalverben naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write public notices and workplace rules using Passiv + Modalverben.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Active-to-Passive transformation with modal verbs and word order.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 44 chapter words — EU, politics, and history vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Active-to-Passive drills with modal verbs, word-order practice, error correction, and a rules-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Passiv + Modalverb reference — all four common modals, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'muss … werden', text: 'Express obligation with Passiv' },
    { de: 'kann … werden', text: 'Express possibility with Passiv' },
    { de: 'darf … werden', text: 'Express permission (or nicht = prohibition) with Passiv' },
    { de: 'soll … werden', text: 'Express recommendation with Passiv' },
    { de: 'werden am Ende', text: 'Always place the infinitive werden at the very end' }
  ],

  // ---------- Vocabulary (44 items — full chapter-29 upload list) ----------
  vocab: [
    { de: 'eine Entscheidung treffen', pos: 'idiom', level: 'B1', en: 'to make a decision', hi: 'फ़ैसला लेना', ex: 'Eine wichtige Entscheidung muss getroffen werden.', exEn: 'An important decision must be made.', exHi: 'Ek mahatvapurn faisla liya jaana chahiye.' },
    { de: 'wirtschaftlich', pos: 'adjective', level: 'B1', en: 'economic', hi: 'आर्थिक', ex: 'Die wirtschaftliche Lage muss geregelt werden.', exEn: 'The economic situation must be regulated.', exHi: 'Aarthik sthiti ko viniyamit kiya jaana chahiye.' },
    { de: 'befürchten', pos: 'verb', level: 'B1', en: 'to fear', hi: 'डरना', ex: 'Manche Skeptiker befürchten, dass die Würde verloren geht.', exEn: 'Some sceptics fear that dignity could be lost.', exHi: 'Kuchh sanshayavaadi darte hain ki samman kho sakta hai.', conj: { praesens: 'befürchtet', praeteritum: 'befürchtete', perfekt: 'hat befürchtet' } },
    { de: 'beitreten', pos: 'verb', level: 'B1', en: 'to join', hi: 'शामिल होना', ex: 'Der Mitgliedsstaat möchte beitreten.', exEn: 'The member state wants to join.', exHi: 'Sadasya desh shaamil hona chahta hai.', conj: { praesens: 'tritt bei', praeteritum: 'trat bei', perfekt: 'ist beigetreten' } },
    { de: 'Besonderheit', art: 'die', gender: 'f', plural: 'Besonderheiten', pos: 'noun', level: 'B1', en: 'feature, special characteristic', hi: 'विशेषता', ex: 'Jedes Land hat seine eigene Besonderheit.', exEn: 'Every country has its own feature.', exHi: 'Har desh ki apni visheshta hoti hai.' },
    { de: 'Dienstleistung', art: 'die', gender: 'f', plural: 'Dienstleistungen', pos: 'noun', level: 'B1', en: 'service', hi: 'सेवा', ex: 'Diese Dienstleistung muss verbessert werden.', exEn: 'This service must be improved.', exHi: 'Is seva ko behtar kiya jaana chahiye.' },
    { de: 'Gemeinschaft', art: 'die', gender: 'f', plural: 'Gemeinschaften', pos: 'noun', level: 'B1', en: 'community', hi: 'समुदाय', ex: 'Die europäische Gemeinschaft muss gestärkt werden.', exEn: 'The European community must be strengthened.', exHi: 'Yuropiya samuday ko majboot kiya jaana chahiye.' },
    { de: 'Solidarität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'solidarity', hi: 'एकजुटता', ex: 'Die Solidarität soll gestärkt werden.', exEn: 'Solidarity should be strengthened.', exHi: 'Ekjuta ko majboot kiya jaana chahiye.' },
    { de: 'endgültig', pos: 'adjective', level: 'B1', en: 'final', hi: 'अंतिम', ex: 'Großbritannien hat die EU endgültig verlassen.', exEn: 'Great Britain finally left the EU.', exHi: 'Great Britain ne aakhirkaar EU chhod diya.' },
    { de: 'führen', pos: 'verb', level: 'B1', en: 'to wage (war: Krieg führen)', hi: 'लड़ना', ex: 'Europa wollte nie wieder Krieg führen.', exEn: 'Europe never wanted to wage war again.', exHi: 'Europe kabhi phir se yuddh nahi ladna chahta tha.', conj: { praesens: 'führt', praeteritum: 'führte', perfekt: 'hat geführt' } },
    { de: 'ins Stocken kommen', pos: 'idiom', level: 'B1', en: 'to falter', hi: 'रुक जाना', ex: 'Die Verhandlungen sind ins Stocken gekommen.', exEn: 'The negotiations have faltered.', exHi: 'Baatcheet ruk gayi hai.' },
    { de: 'national', pos: 'adjective', level: 'B1', en: 'national', hi: 'राष्ट्रीय', ex: 'Die nationale Würde muss respektiert werden.', exEn: 'National dignity must be respected.', exHi: 'Rashtriya samman ka samman kiya jaana chahiye.' },
    { de: 'regeln', pos: 'verb', level: 'B1', en: 'to regulate', hi: 'विनियमित करना', ex: 'Die Wirtschaftsbeziehung muss geregelt werden.', exEn: 'The economic relationship must be regulated.', exHi: 'Aarthik sambandh ko viniyamit kiya jaana chahiye.', conj: { praesens: 'regelt', praeteritum: 'regelte', perfekt: 'hat geregelt' } },
    { de: 'schließen', pos: 'verb', level: 'B1', en: 'to conclude (a treaty: einen Vertrag schließen)', hi: 'संधि करना', ex: 'Ein Vertrag muss geschlossen werden.', exEn: 'A treaty must be concluded.', exHi: 'Ek sandhi ki jaani chahiye.', conj: { praesens: 'schließt', praeteritum: 'schloss', perfekt: 'hat geschlossen' } },
    { de: 'unterzeichnen', pos: 'verb', level: 'B1', en: 'to sign', hi: 'हस्ताक्षर करना', ex: 'Der Vertrag muss unterzeichnet werden.', exEn: 'The treaty must be signed.', exHi: 'Sandhi par hastakshar kiya jaana chahiye.', conj: { praesens: 'unterzeichnet', praeteritum: 'unterzeichnete', perfekt: 'hat unterzeichnet' } },
    { de: 'zunächst', pos: 'adverb', level: 'B1', en: 'initially', hi: 'शुरुआत में', ex: 'Zunächst muss der Ausweis gezeigt werden.', exEn: 'First the ID card must be shown.', exHi: 'Pehle pehchaan patra dikhaana hoga.' },
    { de: 'abschließend', pos: 'adverb', level: 'B1', en: 'in conclusion', hi: 'अंत में', ex: 'Abschließend soll gesagt werden, dass alles gut lief.', exEn: 'In conclusion, it should be said that everything went well.', exHi: 'Ant mein, kehna chahiye ki sab kuchh achha raha.' },
    { de: 'Ausstieg', art: 'der', gender: 'm', plural: 'Ausstiege', pos: 'noun', level: 'B1', en: 'exit, withdrawal', hi: 'निकास', ex: 'Der Ausstieg aus der Union war kompliziert.', exEn: 'The withdrawal from the Union was complicated.', exHi: 'Sangh se nikaas jatil tha.' },
    { de: 'Faden', art: 'der', gender: 'm', plural: 'Fäden', pos: 'noun', level: 'B1', en: 'thread (the train of thought)', hi: 'सूत्र (विचार का)', ex: 'Ich habe den Faden verloren.', exEn: 'I lost the train of thought.', exHi: 'Main vichaar ka sootra kho baitha.' },
    { de: 'Humor', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'humour', hi: 'हास्यबोध', ex: 'Mit gutem Humor kann die Skepsis überwunden werden.', exEn: 'With good humour, scepticism can be overcome.', exHi: 'Achhe haasyabodh se sanshay ko door kiya jaa sakta hai.' },
    { de: 'Krieg', art: 'der', gender: 'm', plural: 'Kriege', pos: 'noun', level: 'B1', en: 'war', hi: 'युद्ध', ex: 'Europa wollte nie wieder Krieg führen.', exEn: 'Europe never wanted to wage war again.', exHi: 'Europe kabhi phir se yuddh nahi ladna chahta tha.' },
    { de: 'Mitgliedsstaat', art: 'der', gender: 'm', plural: 'Mitgliedsstaaten', pos: 'noun', level: 'B1', en: 'member state', hi: 'सदस्य देश', ex: 'Jeder Mitgliedsstaat hat eine Stimme.', exEn: 'Every member state has one vote.', exHi: 'Har sadasya desh ke paas ek vote hai.' },
    { de: 'Normalfall', art: 'der', gender: 'm', plural: 'Normalfälle', pos: 'noun', level: 'B1', en: 'rule, normal case', hi: 'सामान्य मामला', ex: 'Im Normalfall wird der Vertrag akzeptiert.', exEn: 'In the normal case, the treaty is accepted.', exHi: 'Saamaanya sthiti mein sandhi sweekaar ki jaati hai.' },
    { de: 'Skeptiker', art: 'der', gender: 'm', plural: 'Skeptiker', pos: 'noun', level: 'B1', en: 'sceptic (male)', hi: 'संशयवादी', ex: 'Manche Skeptiker befürchten Probleme.', exEn: 'Some sceptics fear problems.', exHi: 'Kuchh sanshayavaadi samasyaon se darte hain.' },
    { de: 'Umgang', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dealing, handling', hi: 'व्यवहार', ex: 'Der Umgang miteinander wird verbessert.', exEn: 'The way we deal with each other is being improved.', exHi: 'Ek doosre ke saath vyavahaar behtar kiya jaa raha hai.' },
    { de: 'Vortrag', art: 'der', gender: 'm', plural: 'Vorträge', pos: 'noun', level: 'B1', en: 'lecture', hi: 'व्याख्यान', ex: 'Der Vortrag muss pünktlich begonnen werden.', exEn: 'The lecture must be started punctually.', exHi: 'Vyaakhyaan samay par shuru kiya jaana chahiye.' },
    { de: 'Weltkrieg', art: 'der', gender: 'm', plural: 'Weltkriege', pos: 'noun', level: 'B1', en: 'world war', hi: 'विश्व युद्ध', ex: 'Nach dem Weltkrieg wollte Europa Frieden.', exEn: 'After the world war, Europe wanted peace.', exHi: 'Vishwa yuddh ke baad, Europe shaanti chaahta tha.' },
    { de: 'Atomkraft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'atomic power', hi: 'परमाणु शक्ति', ex: 'Die Atomkraft muss reguliert werden.', exEn: 'Atomic power must be regulated.', exHi: 'Parmaanu shakti ko viniyamit kiya jaana chahiye.' },
    { de: 'Grenzkontrolle', art: 'die', gender: 'f', plural: 'Grenzkontrollen', pos: 'noun', level: 'B1', en: 'border control', hi: 'सीमा नियंत्रण', ex: 'Grenzkontrollen dürfen nicht wieder eingeführt werden.', exEn: 'Border controls may not be reintroduced.', exHi: 'Seema niyantran phir se laagoo nahi kiye jaa sakte.' },
    { de: 'Kriegswaffe', art: 'die', gender: 'f', plural: 'Kriegswaffen', pos: 'noun', level: 'B1', en: 'weapon of war', hi: 'युद्ध का हथियार', ex: 'Kriegswaffen müssen streng kontrolliert werden.', exEn: 'Weapons of war must be strictly controlled.', exHi: 'Yuddh ke hathiyaaron ko sakhti se niyantrit kiya jaana chahiye.' },
    { de: 'Skeptikerin', art: 'die', gender: 'f', plural: 'Skeptikerinnen', pos: 'noun', level: 'B1', en: 'sceptic (female)', hi: 'संशयवादी (महिला)', ex: 'Die Skeptikerin stellte viele Fragen.', exEn: 'The sceptic asked many questions.', exHi: 'Sanshayavaadi ne kai sawaal poochhe.' },
    { de: 'Toleranz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'tolerance', hi: 'सहिष्णुता', ex: 'Mit Toleranz kann viel erreicht werden.', exEn: 'With tolerance, much can be achieved.', exHi: 'Sahishnuta se bahut kuchh haasil kiya jaa sakta hai.' },
    { de: 'Union', art: 'die', gender: 'f', plural: 'Unionen', pos: 'noun', level: 'B1', en: 'union', hi: 'संघ', ex: 'Die Union wird immer größer.', exEn: 'The union is getting bigger and bigger.', exHi: 'Sangh lagaataar bada ho raha hai.' },
    { de: 'Vorschrift', art: 'die', gender: 'f', plural: 'Vorschriften', pos: 'noun', level: 'B1', en: 'regulation', hi: 'विनियम', ex: 'Diese Vorschrift muss beachtet werden.', exEn: 'This regulation must be observed.', exHi: 'Is viniyam ka paalan kiya jaana chahiye.' },
    { de: 'Wirtschaftsbeziehung', art: 'die', gender: 'f', plural: 'Wirtschaftsbeziehungen', pos: 'noun', level: 'B1', en: 'economic relationship', hi: 'आर्थिक संबंध', ex: 'Die Wirtschaftsbeziehung muss geregelt werden.', exEn: 'The economic relationship must be regulated.', exHi: 'Aarthik sambandh ko viniyamit kiya jaana chahiye.' },
    { de: 'Würde', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dignity', hi: 'सम्मान', ex: 'Die nationale Würde muss respektiert werden.', exEn: 'National dignity must be respected.', exHi: 'Rashtriya samman ka samman kiya jaana chahiye.' },
    { de: 'Großbritannien', pos: 'noun', level: 'B1', en: 'Great Britain', hi: 'ग्रेट ब्रिटेन', ex: 'Großbritannien hat die EU verlassen.', exEn: 'Great Britain left the EU.', exHi: 'Great Britain ne EU chhod diya.' },
    { de: 'im Lauf', pos: 'idiom', level: 'B1', en: 'over the course of (+ Genitiv)', hi: 'के दौरान', ex: 'Im Lauf der Zeit wird der Umgang besser.', exEn: 'Over the course of time, the way we interact gets better.', exHi: 'Samay ke saath, vyavahaar behtar hota hai.' },
    { de: 'Belgien', pos: 'noun', level: 'B1', en: 'Belgium', hi: 'बेल्जियम', ex: 'Belgien ist ein Mitgliedsstaat der EU.', exEn: 'Belgium is a member state of the EU.', exHi: 'Belgium EU ka ek sadasya desh hai.' },
    { de: 'EU', pos: 'noun', level: 'B1', en: 'EU', hi: 'ईयू', ex: 'Die EU hat viele Mitgliedsstaaten.', exEn: 'The EU has many member states.', exHi: 'EU ke kai sadasya desh hain.' },
    { de: 'Europäische Union', pos: 'noun', level: 'B1', en: 'European Union', hi: 'यूरोपीय संघ', ex: 'Der Vortrag über die Europäische Union war interessant.', exEn: 'The lecture on the European Union was interesting.', exHi: 'Yuropiya sangh par vyaakhyaan dilchasp tha.' },
    { de: 'Niederlande', pos: 'noun', level: 'B1', en: 'Netherlands (plural)', hi: 'नीदरलैंड', ex: 'Die Niederlande sind ein Mitgliedsstaat.', exEn: 'The Netherlands is a member state.', exHi: 'Netherlands ek sadasya desh hai.' },
    { de: 'Luxemburg', pos: 'noun', level: 'B1', en: 'Luxembourg', hi: 'लक्ज़मबर्ग', ex: 'Luxemburg ist ein kleiner Mitgliedsstaat.', exEn: 'Luxembourg is a small member state.', exHi: 'Luxembourg ek chhota sadasya desh hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Passiv mit Modalverben?',
      body: [ 'Sometimes the focus is on obligation, permission, ability, necessity, or possibility — not on who does the action.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Modalverb + Partizip II + werden', '<span class="de">Die Hausaufgaben müssen gemacht werden.</span>']
        ]
      },
      hinglish: 'Kabhi-kabhi focus obligation, permission, ability, ya possibility par hota hai — kaun karta hai us par nahi.'
    },
    {
      title: 'Formation — werden immer am Ende',
      body: [ 'Subject → Modalverb (position 2) → … → Partizip II → werden (infinitive, always LAST).' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Modalverb … Partizip II werden', '<span class="de">Das Auto muss repariert werden.</span>']
        ]
      },
      hinglish: 'Subject → Modalverb → … → Partizip II → werden (hamesha AAKHIR mein).'
    },
    {
      title: 'Aktiv → Passiv mit Modalverben',
      body: [ 'Compare active and passive with a modal verb, side by side.' ],
      table: {
        head: ['Active', 'Passive'],
        rows: [
          ['<span class="de">Der Mechaniker muss das Auto reparieren.</span>', '<span class="de">Das Auto muss repariert werden.</span>']
        ]
      },
      hinglish: 'Active aur passive ko ek modal verb ke saath compare karo.'
    },
    {
      title: 'müssen, können, dürfen, sollen + Passiv',
      body: [ 'The four common modals with Passiv, each with its own meaning.' ],
      table: {
        head: ['Modal', 'Example'],
        rows: [
          ['müssen (obligation)', '<span class="de">Die Hausaufgaben müssen gemacht werden.</span>'],
          ['können (possibility)', '<span class="de">Das Problem kann gelöst werden.</span>'],
          ['dürfen (permission / nicht = prohibition)', '<span class="de">Hier darf nicht geraucht werden.</span>'],
          ['sollen (recommendation)', '<span class="de">Der Bericht soll geschrieben werden.</span>']
        ]
      },
      note: 'wollen + Passiv is uncommon and mostly appears in written German. mögen + Passiv is very rare in modern German — not worth spending time on.',
      hinglish: 'Chaar common modals Passiv ke saath, har ek ka apna matlab.'
    },
    {
      title: 'Wortstellung: Hauptsatz vs Nebensatz',
      body: [ 'Main clause: Modalverb in position 2, werden at the very end. Subordinate clause: the whole verb cluster (Partizip II + werden + Modalverb) moves to the end.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Hauptsatz', '<span class="de">Das Auto muss repariert werden.</span>'],
          ['Nebensatz', '<span class="de">…, weil das Auto repariert werden muss.</span>']
        ]
      },
      hinglish: 'Main clause mein Modalverb position 2 mein, werden aakhir mein. Nebensatz mein poora verb cluster aakhir mein jaata hai.'
    },
    {
      title: 'Passiv mit Modalverben und Verneinung',
      body: [ 'nicht sits directly before the participle/werden cluster to negate the whole action.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Modalverb + nicht + Partizip II + werden', '<span class="de">Die Tür darf nicht geöffnet werden.</span>']
        ]
      },
      hinglish: 'nicht seedhe participle/werden cluster se pehle aata hai poori action ko negate karne ke liye.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong word order, or dropping/misplacing werden.' ],
      mistakes: [
        { wrong: 'Das Auto muss reparieren werden.', right: 'Das Auto muss repariert werden.', why: 'Needs Partizip II (repariert), not the infinitive (reparieren).' },
        { wrong: 'Das Auto muss werden repariert.', right: 'Das Auto muss repariert werden.', why: 'werden always comes LAST, after the Partizip II.' },
        { wrong: 'Die Tür darf geöffnet.', right: 'Die Tür darf geöffnet werden.', why: 'werden can never be dropped — it completes the Passiv + Modalverb structure.' },
        { wrong: 'Die Grammatik muss erklärt.', right: 'Die Grammatik muss erklärt werden.', why: 'Same as above — werden is required.' },
        { wrong: 'Der Brief muss geschrieben geworden.', right: 'Der Brief muss geschrieben werden.', why: 'Passiv mit Modalverben uses the infinitive werden, never geworden.' }
      ],
      hinglish: 'Yeh galtiyaan galat word order se ya werden ko chhod dene/galat jagah rakhne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Passiv mit Modalverben appears constantly in Goethe B1 public notices, museum rules, and workplace regulations.' ],
      note: 'Quick check: obligation? müssen + Passiv. permission? dürfen + Passiv. possibility? können + Passiv. recommendation? sollen + Passiv. Always keep werden at the very end.',
      hinglish: 'Goethe B1 public notices, museum rules aur workplace regulations mein Passiv mit Modalverben lagataar aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Regeln im Museum der Europäischen Union',
    titleEn: 'Rules at the Museum of the European Union',
    tokens: [
      { w: 'Zunächst', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb', why: 'zunächst (this chapter): initially.' },
      { w: 'muss', role: 'plain', en: 'must (Modalverb)', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Ausweis', role: 'plain', en: 'ID card', hi: 'पहचान पत्र', type: 'Noun · masc.' },
      { w: 'am', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Eingang', role: 'plain', en: 'entrance (Satzende)', hi: 'प्रवेश द्वार (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'gezeigt', role: 'plain', en: 'shown', hi: 'दिखाया', type: 'Verb · zeigen (Partizip II)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'जाना (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Handys', role: 'plain', en: 'mobile phones', hi: 'मोबाइल फ़ोन', type: 'Noun · plural' },
      { w: 'dürfen', role: 'plain', en: 'may (Modalverb)', hi: 'नहीं सकते', type: 'Verb · Modalverb' },
      { w: 'während', role: 'r-connector', en: 'during', hi: 'के दौरान', type: 'Konjunktion · während', why: 'während (recycled — Ch.21).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Vortrags', role: 'plain', en: 'lecture (gen.)', hi: 'व्याख्यान का', type: 'Noun · masc.', why: 'der Vortrag (this chapter).' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'benutzt', role: 'plain', en: 'used', hi: 'इस्तेमाल', type: 'Verb · benutzen (Partizip II)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'किए जा (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Fotos', role: 'plain', en: 'photos', hi: 'फ़ोटो', type: 'Noun · plural' },
      { w: 'können', role: 'plain', en: 'can (Modalverb)', hi: 'सकते हैं', type: 'Verb · Modalverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Foyer', role: 'plain', en: 'foyer (Satzende)', hi: 'फ़ोयर (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'gemacht', role: 'plain', en: 'made', hi: 'लिए', type: 'Verb · machen (Partizip II)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'जा (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Geschichte', role: 'plain', en: 'history', hi: 'इतिहास', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Europäischen', role: 'plain', en: 'European', hi: 'यूरोपीय', type: 'Adjective · schwach · Gen.' },
      { w: 'Union', role: 'plain', en: 'Union (gen.)', hi: 'संघ का', type: 'Noun · fem.', why: 'die Europäische Union (Sg.) (this chapter).' },
      { w: 'soll', role: 'plain', en: 'should (Modalverb)', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'sorgfältig', role: 'plain', en: 'carefully', hi: 'सावधानी से', type: 'Adverb' },
      { w: 'erklärt', role: 'plain', en: 'explained', hi: 'समझाई', type: 'Verb · erklären (Partizip II)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'जानी (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'plain', en: 'after', hi: 'के बाद', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Weltkrieg', role: 'plain', en: 'world war', hi: 'विश्व युद्ध', type: 'Noun · masc.', why: 'der Weltkrieg (this chapter).' },
      { w: 'mussten', role: 'plain', en: 'had to (Modalverb, Präteritum)', hi: 'चाहिए था', type: 'Verb · Modalverb (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Mitgliedsstaaten', role: 'plain', en: 'member states', hi: 'सदस्य देश', type: 'Noun · plural' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Vertrag', role: 'plain', en: 'treaty (Satzende)', hi: 'संधि (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'unterzeichnen', role: 'plain', en: 'to sign (Satzende)', hi: 'हस्ताक्षर करना', type: 'Infinitiv (Satzende, Aktiv)', why: 'unterzeichnen (this chapter): to sign. This clause is Active for contrast.' },
      { w: '.', plain: true },
      { w: 'Grenzkontrollen', role: 'plain', en: 'border controls', hi: 'सीमा नियंत्रण', type: 'Noun · plural', why: 'die Grenzkontrolle (this chapter).' },
      { w: 'dürfen', role: 'plain', en: 'may', hi: 'नहीं फिर से', type: 'Verb · Modalverb' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'wieder', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'eingeführt', role: 'plain', en: 'introduced', hi: 'लागू', type: 'Verb · einführen (Partizip II)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'किए जा (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'First, the ID card must be shown at the entrance. Mobile phones may not be used during the lecture. Photos can be taken in the foyer. The history of the European Union should be explained carefully. After the world war, the member states had to sign a treaty. Border controls may not be reintroduced.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_029_L001', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, für das Nachbarschaftstreffen muss noch ein Raum gebucht werden.', en: 'Timo, a room still needs to be booked for the neighborhood meeting.' },
      { id: 'B1_029_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich kümmere mich darum. Sollte auch eine Einladung verschickt werden?', en: 'I\'ll take care of it. Should an invitation also be sent out?' },
      { id: 'B1_029_L003', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, unbedingt, und die Themen müssen vorher festgelegt werden.', en: 'Yes, definitely, and the topics need to be decided beforehand.' },
      { id: 'B1_029_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, das kann bis Freitag alles erledigt werden.', en: 'Good, all of that can be done by Friday.' }
    ],
    transcript: 'Timo, für das Nachbarschaftstreffen muss noch ein Raum gebucht werden. Ich kümmere mich darum. Sollte auch eine Einladung verschickt werden? Ja, unbedingt, und die Themen müssen vorher festgelegt werden. Gut, das kann bis Freitag alles erledigt werden.',
    translation: 'Timo, a room still needs to be booked for the neighborhood meeting. I\'ll take care of it. Should an invitation also be sent out? Yes, definitely, and the topics need to be decided beforehand. Good, all of that can be done by Friday.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'für' },
      { w: 'das' },
      { w: 'Nachbarschaftstreffen' },
      { w: 'muss' },
      { w: 'noch' },
      { w: 'ein' },
      { w: 'Raum' },
      { w: 'gebucht' },
      { w: 'werden' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'kümmere' },
      { w: 'mich' },
      { w: 'darum' },
      { w: '.', plain: true },
      { w: 'Sollte' },
      { w: 'auch' },
      { w: 'eine' },
      { w: 'Einladung' },
      { w: 'verschickt' },
      { w: 'werden' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'unbedingt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'die' },
      { w: 'Themen' },
      { w: 'müssen' },
      { w: 'vorher' },
      { w: 'festgelegt' },
      { w: 'werden' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'kann' },
      { w: 'bis' },
      { w: 'Freitag' },
      { w: 'alles' },
      { w: 'erledigt' },
      { w: 'werden' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss noch gebucht werden?', qEn: 'What still needs to be booked?', options: ['ein Bus', 'ein Raum', 'ein Restaurant', 'ein Auto'], optionsEn: ['a bus', 'a room', 'a restaurant', 'a car'], answer: 1,
        explain: '"… muss noch ein Raum gebucht werden."' },
      { q: 'Was muss vorher entschieden werden?', qEn: 'What must be decided beforehand?', options: ['die Themen', 'das Datum', 'die Kosten', 'die Gäste'], optionsEn: ['the topics', 'the date', 'the costs', 'the guests'], answer: 0,
        explain: '"… die Themen müssen vorher festgelegt werden."' }
    ]
  },

  speaking: [
    { task: "Für das Nachbarschaftstreffen fehlt noch ein Raum. Sag es.", taskEn: "A room is still needed for the neighbourhood meeting. Say so.", de: "Es muss noch ein Raum gebucht werden.", en: "A room still has to be booked." },
    { task: "Dein Freund fragt, ob eine Einladung nötig ist.", taskEn: "Your friend asks whether an invitation is needed.", de: "Ja, eine Einladung sollte verschickt werden.", en: "Yes, an invitation should be sent out." },
    { task: "Eine Nachbarin fragt, was vorher geklärt werden muss.", taskEn: "A neighbour asks what has to be settled beforehand.", de: "Die Themen müssen zunächst abgestimmt werden.", en: "The topics have to be agreed on first." },
    { task: "Ein Kollege fragt, was im Vertrag geregelt werden kann.", taskEn: "A colleague asks what can be settled in the contract.", de: "Die Dienstleistungen können im Vertrag geregelt werden.", en: "The services can be settled in the contract." },
    { task: "Ein Bekannter fragt, was nicht entschieden werden darf.", taskEn: "An acquaintance asks what may not be decided.", de: "Das darf nicht allein entschieden werden, wir stimmen ab.", en: "That may not be decided alone, we'll vote." },
    { task: "Rollenspiel: Ihr plant das Nachbarschaftstreffen.", taskEn: "Role-play: you plan the neighbourhood meeting.", de: "Der Raum muss gebucht werden, das Essen kann bestellt werden, und der Termin sollte heute unterschrieben werden.", en: "The room has to be booked, the food can be ordered, and the date should be signed off today." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short set of public notices or workplace rules (six to eight sentences) — for a museum, office, or public space — using müssen, können, dürfen, and sollen + Passiv at least once each, keeping werden at the end of every sentence.',
    starters: ['… muss … werden.', '… kann … werden.', '… darf nicht … werden.', '… soll … werden.', 'Zunächst …'],
    placeholder: 'Der Ausweis muss am Eingang gezeigt werden. Handys dürfen hier nicht benutzt werden …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Das Formular ___ ausgefüllt werden."',
      options: ['muss', 'werden', 'worden'],
      answer: 0,
      explain: 'Passiv mit Modalverben: Modalverb + Partizip II + werden.'
    },
    gap: {
      sentence: ['Die Tür darf nicht geöffnet ', '.'],
      gaps: [ { answer: 'werden', accepts: ['werden'] } ],
      explain: 'werden always comes last, even with negation.'
    },
    match: {
      q: 'Match each modal verb to its function with Passiv.',
      pairs: [
        { noun: 'müssen', art: 'Obligation' },
        { noun: 'können', art: 'Possibility' },
        { noun: 'dürfen', art: 'Permission (or nicht = prohibition)' },
        { noun: 'sollen', art: 'Recommendation' }
      ]
    },
    builder: {
      target: 'Build: "The door may not be opened."',
      bank: ['Die', 'Tür', 'darf', 'nicht', 'geöffnet', 'werden', '.'],
      answer: ['Die', 'Tür', 'darf', 'nicht', 'geöffnet', 'werden', '.'],
      roles: { 'darf': 'r-verb', 'geöffnet': 'r-verb', 'werden': 'r-verb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Auto muss werden repariert.',
      right: 'Das Auto muss repariert werden.',
      explain: 'werden always comes last, after the Partizip II.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Die Hausaufgaben ___ gemacht werden."', options: ['müssen', 'werden', 'worden'], answer: 0,
      explain: 'müssen + Partizip II + werden — obligation.' },
    { q: 'Complete: "Hier darf nicht ___."', options: ['rauchen geworden', 'geraucht werden', 'geraucht worden'], answer: 1,
      explain: 'dürfen + nicht + Partizip II + werden — prohibition.' },
    { q: 'Which sentence has correct word order?', options: ['Das Problem kann gelöst werden.', 'Das Problem kann werden gelöst.', 'Das Problem gelöst kann werden.'], answer: 0,
      explain: 'Modalverb (position 2) … Partizip II … werden (always last).' },
    { q: 'Complete: "Der Bericht ___ geschrieben werden."', options: ['soll', 'ist', 'wurde'], answer: 0,
      explain: 'sollen + Partizip II + werden — recommendation.' },
    { q: 'Which sentence contains an error?', options: ['Das Auto muss repariert werden.', 'Der Brief muss geschrieben geworden.', 'Die Tür darf geöffnet werden.'], answer: 1,
      explain: 'Passiv mit Modalverben uses the infinitive werden, never geworden — it should be "muss geschrieben werden."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Passiv mit Modalverben: Modalverb (position 2) + Partizip II + werden (infinitive, always at the very end).' },
    { c: 'r-verb', html: 'müssen = obligation. können = possibility. dürfen (+ nicht) = permission/prohibition. sollen = recommendation. wollen/mögen + Passiv are rare — not worth much attention.' },
    { c: 'r-verb', html: 'werden is never dropped and never becomes geworden here — that confusion is one of the biggest B1 mistakes.' }
  ],
  revisionTips: [
    'Before every sentence, ask: obligation, possibility, permission, or recommendation? That answer picks your modal verb.',
    'Always check that werden sits at the very end — never before the Partizip II, never dropped.',
    'Practise reading real public notices (museum, airport, office) and spotting the Passiv + Modalverb pattern.'
  ]
};

window.CHAPTER = CHAPTER;
