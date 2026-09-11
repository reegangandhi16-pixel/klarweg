/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 15
   "N-Deklination" — special masculine nouns (der Student, der
   Mensch, der Junge, der Herr, der Kunde, der Kollege, der
   Nachbar, der Polizist, der Tourist, der Präsident, der
   Soldat, der Journalist, der Pilot, der Experte, der
   Architekt, der Fotograf, der Automat, der Planet, der
   Elefant, der Löwe, der Affe, der Hase) that add -n/-en in
   every case except Nominativ Singular.
   IMPORTANT: dialogue uses ONLY Silje and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-15 list (53 items) — a
   professions/law theme (Rechtsanwalt, Richter, Gericht,
   Angeklagte, Verbrechen, Urteil, Spezialist, Journalist,
   Reporter, Briefträger, Chemiker, Elektroingenieur,
   Mechatroniker, Schreiner…), woven into a courtroom/career-day
   reading passage and story that showcase N-Deklination nouns
   (der Spezialist, der Journalist, der Reporter is NOT an
   N-noun — used carefully) alongside regular nouns.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-15-n-deklination',
  phase: 'B1 · Phase 1',
  number: 15,
  title: 'N-Deklination',
  titleEn: 'N-declension (weak masculine nouns)',
  description: 'der Student → den Studenten → dem Studenten → des Studenten. A small, closed group of masculine nouns adds -n or -en in every case except the Nominativ Singular. Once you can spot them, they stop being a trap.',
  xp: 250,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 16, title: 'Futur I', titleEn: 'Future tense I' , href: 'chapter-b1-16-futur1.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one hidden pattern.</em>',
    intro: 'Silje and Timo run through the people they know — a lawyer, a judge, a chemist, maybe a reporter — every one of them an N-Deklination noun that quietly grows an -n or -en in every case but the first.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear der Student become den/dem/des Studenten — and nothing else change'
    ],
    scene: 'Ein Tag voller Begegnungen',
    femaleSpeakers: ['Silje'],
    dialogue: [
      { speaker: 'Silje', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kenne', role: 'r-verb', en: 'know', hi: 'जानती हूँ', pron: 'KE-nuh', type: 'Verb · kennen (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Rechtsanwalt', role: 'r-akkusativ', en: 'lawyer (masc.)', hi: 'वकील', pron: 'REKHTS-an-valt', type: 'Noun · masc. (n-Deklination)', why: 'weak masculine noun: der Rechtsanwalt → den/dem/des Rechtsanwalten in all oblique cases (this chapter).', ex: 'Ich kenne einen Rechtsanwalt.', exEn: 'I know a lawyer.' },
        { w: '.', plain: true }
      ], en: 'I know a lawyer.', hi: 'Main ek vakeel ko jaanti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Vertraust', role: 'r-verb', en: 'do you trust', hi: 'भरोसा करती हो', pron: 'fer-TROWST', type: 'Verb · vertrauen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Rechtsanwalten', role: 'r-dativ', en: 'lawyer (dat., n-Deklination)', hi: 'वकील पर', pron: 'REKHTS-an-val-ten', type: 'Noun · masc. dat.', why: 'weak masculine nouns take -en in dative too (this chapter).', ex: 'Vertraust du diesem Rechtsanwalten?', exEn: 'Do you trust this lawyer?' },
        { w: '?', plain: true }
      ], en: 'Really? Do you trust this lawyer?', hi: 'Sach mein? Kya tum is vakeel par bharosa karti ho?' },
      { speaker: 'Silje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'AR-by-tet', type: 'Verb · arbeiten' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'Richter', role: 'r-dativ', en: 'judge (dat.)', hi: 'न्यायाधीश के', pron: 'RIKH-ter', type: 'Noun · masc. (n-Deklination)', why: 'der Richter (this chapter).', ex: 'mit einem Richter', exEn: 'with a judge' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes. He works together with a judge.', hi: 'Haan. Woh ek nyaayadheesh ke saath kaam karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Chemiker', role: 'r-akkusativ', en: 'chemist (masc.)', hi: 'रसायनज्ञ', pron: 'KAY-mi-ker', type: 'Noun · masc. (n-Deklination)', why: 'der Chemiker (this chapter).', ex: 'einen Chemiker', exEn: 'a chemist' },
        { w: '?', plain: true }
      ], en: 'And do you also know a chemist?', hi: 'Aur kya tum ek rasayanagya ko bhi jaanti ho?' },
      { speaker: 'Silje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'helfe', role: 'r-verb', en: 'help', hi: 'मदद करती हूँ', pron: 'HEL-fuh', type: 'Verb · helfen (ich)' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Chemiker', role: 'r-dativ', en: 'chemist (dat.)', hi: 'रसायनज्ञ की', pron: 'KAY-mi-ker', type: 'Noun · masc. dat.' },
        { w: 'manchmal', role: 'r-adverb', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, I sometimes help this chemist.', hi: 'Haan, main kabhi-kabhi is rasayanagya ki madad karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Reporter', role: 'r-akkusativ', en: 'reporter (masc.)', hi: 'रिपोर्टर', pron: 're-POR-ter', type: 'Noun · masc. (n-Deklination)', why: 'der Reporter (this chapter).', ex: 'einen Reporter', exEn: 'a reporter' },
        { w: '?', plain: true }
      ], en: 'Do you maybe also know a reporter?', hi: 'Kya tum shayad ek reporter ko bhi jaanti ho?' },
      { speaker: 'Silje', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Bruder', role: 'r-subject', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'will', role: 'r-modalverb', en: 'wants', hi: 'चाहता है', pron: 'vil', type: 'Modal · wollen' },
        { w: 'Reporter', role: 'r-subject', en: 'reporter', hi: 'रिपोर्टर', pron: 're-POR-ter', type: 'Noun · masc.' },
        { w: 'werden', role: 'r-verb', en: 'become', hi: 'बनना', pron: 'VAIR-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, but my brother wants to become a reporter.', hi: 'Nahi, par mera bhai reporter banna chahta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'spannender', role: 'r-subject', en: 'exciting', hi: 'रोमांचक', pron: 'SHPAN-en-der', type: 'Adjective' },
        { w: 'Wunschberuf', role: 'r-subject', en: 'dream job', hi: 'सपनों का काम', pron: 'VUNSH-be-roof', type: 'Noun · masc.', why: 'der Wunschberuf (this chapter).', ex: 'ein spannender Wunschberuf', exEn: 'an exciting dream job' },
        { w: '.', plain: true }
      ], en: 'That is an exciting dream job.', hi: 'Yeh ek romaanchak sapno ka kaam hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A small, closed group of masculine nouns — <span class="de r-nnoun">der Student</span>, <span class="de r-nnoun">der Mensch</span>, <span class="de r-nnoun">der Kollege</span>, <span class="de r-nnoun">der Präsident</span>… — add <b>-n</b> or <b>-en</b> in EVERY case except the Nominativ Singular. Only the very first form, <span class="de">der Student</span>, stays bare. Everywhere else — Akkusativ, Dativ, Genitiv, and the entire plural — you\'ll see <span class="de">den/dem/des Studenten</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is N-DEKLINATION (B1 level only): a closed set of masculine nouns (der Student, der Mensch, der Junge, der Herr, der Kunde, der Kollege, der Nachbar, der Polizist, der Tourist, der Präsident, der Soldat, der Journalist, der Pilot, der Experte, der Architekt, der Fotograf, der Automat, der Planet, der Elefant, der Löwe, der Affe, der Hase, and similar nouns ending in -e/-ent/-ant/-ist/-oge/-at/-graph/-nom) that add -n or -en in EVERY case except the Nominativ Singular (Akkusativ, Dativ, Genitiv Singular, and the whole Plural). ' +
    'Do NOT expect weak feminine nouns, special mixed declensions, advanced Genitiv exceptions, or B2 noun declension — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Nominativ Singular of an N-noun stays completely bare: "der Student", never "der Studente".\n' +
    '- Every other form of the noun — Akkusativ, Dativ, Genitiv Singular, and all Plural forms — takes -n or -en: "den/dem/des Studenten", "die Studenten" (plural).\n' +
    '- This applies regardless of which article or determiner precedes the noun (der/ein/mein/kein/diesen…) — the noun itself changes, not just the article.\n' +
    '- Common learner errors to catch: forgetting the ending entirely in Akkusativ/Dativ/Genitiv ("den Student" instead of "den Studenten"), or wrongly adding the ending in Nominativ Singular ("der Studenten" instead of "der Student").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>N-Deklination check:</b> one sentence on whether N-nouns correctly stayed bare in Nominativ Singular and took -n/-en everywhere else.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you spot N-nouns immediately and decline them correctly in every case. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Goethe B1 N-Noun reference table once — especially der Herr, which doubles the -n in the plural (die Herren) — then continue.',
    low: 'Worth another pass through the Grammar section — build the habit of asking "is this noun on the N-Deklination list?" before choosing an ending.'
  },

  parserSentence: [
    { w: 'der', role: 'plain' }, { w: 'Student', role: 'r-nnoun' },
    { w: 'kennt', role: 'r-verb' }, { w: 'den', role: 'plain' },
    { w: 'Studenten', role: 'r-nnoun' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: only Nominativ Singular stays bare; every other form takes -n/-en.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Silje and Timo run into a student, a tourist, a colleague, and a neighbour — all N-nouns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 53 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the N-Deklination pattern, the full Goethe B1 N-Noun list, and recognition rules.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style courtroom passage saturated with N-Deklination nouns.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch N-Deklination endings in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Introduce people and describe professions using N-Deklination nouns correctly.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a description using N-Deklination nouns naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Nominativ→Akkusativ→Dativ→Genitiv transformation and N-noun identification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 53 chapter words — professions and legal vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Nominativ→Akkusativ→Dativ→Genitiv transformation drills, N-noun identification, error correction, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full N-Deklination reference — complete Goethe B1 N-Noun list, ending pattern chart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der Student', text: 'Recognize N-Deklination nouns by their typical endings' },
    { de: 'den Studenten', text: 'Apply the -n/-en ending in Akkusativ' },
    { de: 'dem Studenten', text: 'Apply the -n/-en ending in Dativ' },
    { de: 'des Studenten', text: 'Apply the -n/-en ending in Genitiv' },
    { de: 'der Tisch vs. der Student', text: 'Tell N-nouns apart from normal masculine nouns' }
  ],

  // ---------- Vocabulary (53 items — full chapter-15 upload list) ----------
  vocab: [
    { de: 'Einkommen', art: 'das', gender: 'n', plural: 'Einkommen', pos: 'noun', level: 'B1', en: 'income', hi: 'आय', ex: 'Sein Einkommen ist seit dem neuen Job höher.', exEn: 'His income is higher since the new job.', exHi: 'Naye job ke baad se uski aay zyada hai.' },
    { de: 'Entwicklung', art: 'die', gender: 'f', plural: 'Entwicklungen', pos: 'noun', level: 'B1', en: 'development', hi: 'विकास', ex: 'Die Entwicklung der Firma war schnell.', exEn: 'The company\'s development was fast.', exHi: 'Company ka vikaas tez tha.' },
    { de: 'anbauen', pos: 'verb', level: 'B1', en: 'to cultivate, attach', hi: 'उगाना / जोड़ना', ex: 'Die Familie baut Gemüse an.', exEn: 'The family grows vegetables.', exHi: 'Parivaar sabziyaan ugaata hai.', conj: { praesens: 'baut an', praeteritum: 'baute an', perfekt: 'hat angebaut' } },
    { de: 'aushalten', pos: 'verb', level: 'B1', en: 'to cope with', hi: 'सहना', ex: 'Er kann den Stress kaum noch aushalten.', exEn: 'He can barely cope with the stress anymore.', exHi: 'Woh ab tanaav mushkil se seh pa raha hai.', conj: { praesens: 'hält aus', praeteritum: 'hielt aus', perfekt: 'hat ausgehalten' } },
    { de: 'austragen', pos: 'verb', level: 'B1', en: 'to deliver (Post austragen)', hi: 'वितरण करना', ex: 'Der Briefträger trägt jeden Morgen die Post aus.', exEn: 'The postal carrier delivers the mail every morning.', exHi: 'Postman har subah daak vitarit karta hai.', conj: { praesens: 'trägt aus', praeteritum: 'trug aus', perfekt: 'hat ausgetragen' } },
    { de: 'daran', pos: 'pronominal adverb', level: 'B1', en: 'about that', hi: 'उस बारे में', ex: 'Ich denke oft daran.', exEn: 'I often think about that.', exHi: 'Main aksar uske baare mein sochta hoon.' },
    { de: 'Landwirtschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'agriculture', hi: 'कृषि', ex: 'Die Landwirtschaft ist hier sehr wichtig.', exEn: 'Agriculture is very important here.', exHi: 'Yahan krishi bahut mahatvapurna hai.' },
    { de: 'Menschenkenntnis', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'people skills', hi: 'लोगों को समझने की क्षमता', ex: 'Als Richter braucht man gute Menschenkenntnis.', exEn: 'As a judge, you need good people skills.', exHi: 'Judge banne ke liye logon ko samajhne ki achhi kshamata chahiye.' },
    { de: 'Öffentlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'public', hi: 'जनता', ex: 'Der Fall interessierte die ganze Öffentlichkeit.', exEn: 'The case interested the whole public.', exHi: 'Yeh maamla poori janta ke liye dilchasp tha.' },
    { de: 'ernst nehmen', pos: 'verb', level: 'B1', en: 'to take seriously', hi: 'गंभीरता से लेना', ex: 'Der Richter nahm das Verbrechen sehr ernst.', exEn: 'The judge took the crime very seriously.', exHi: 'Judge ne apraadh ko bahut gambheerta se liya.' },
    { de: 'exakt', pos: 'adjective', level: 'B1', en: 'exact', hi: 'सटीक', ex: 'Die Analyse war exakt.', exEn: 'The analysis was exact.', exHi: 'Vishleshan sateek tha.' },
    { de: 'fair', pos: 'adjective', level: 'B1', en: 'fair', hi: 'निष्पक्ष', ex: 'Das Urteil war fair.', exEn: 'The verdict was fair.', exHi: 'Faisla nishpaksh tha.' },
    { de: 'gerecht', pos: 'adjective', level: 'B1', en: 'fair, just', hi: 'न्यायसंगत', ex: 'Ein gerechtes Urteil war wichtig.', exEn: 'A just verdict was important.', exHi: 'Ek nyaayasangat faisla zaroori tha.' },
    { de: 'geregelt', pos: 'adjective', level: 'B1', en: 'fixed, regulated', hi: 'नियमित', ex: 'Er hat ein geregeltes Einkommen.', exEn: 'He has a fixed income.', exHi: 'Uski niyamit aay hai.' },
    { de: 'herstellen', pos: 'verb', level: 'B1', en: 'to create, manufacture', hi: 'बनाना', ex: 'Die Firma stellt Metallteile her.', exEn: 'The company manufactures metal parts.', exHi: 'Company metal ke hisse banati hai.', conj: { praesens: 'stellt her', praeteritum: 'stellte her', perfekt: 'hat hergestellt' } },
    { de: 'zustellen', pos: 'verb', level: 'B1', en: 'to deliver', hi: 'पहुँचाना', ex: 'Der Briefträger stellt die Pakete zu.', exEn: 'The postal carrier delivers the packages.', exHi: 'Postman parcel pahunchaata hai.', conj: { praesens: 'stellt zu', praeteritum: 'stellte zu', perfekt: 'hat zugestellt' } },
    { de: 'Gericht', art: 'das', gender: 'n', plural: 'Gerichte', pos: 'noun', level: 'B1', en: 'court (of law)', hi: 'अदालत', ex: 'Das Gericht verhandelte den Fall drei Tage lang.', exEn: 'The court heard the case for three days.', exHi: 'Adaalat ne teen din tak is maamle ki sunwaai ki.' },
    { de: 'Metall', art: 'das', gender: 'n', plural: 'Metalle', pos: 'noun', level: 'B1', en: 'metal', hi: 'धातु', ex: 'Dieses Metall ist sehr leicht.', exEn: 'This metal is very light.', exHi: 'Yeh dhaatu bahut halki hai.' },
    { de: 'Urteil', art: 'das', gender: 'n', plural: 'Urteile', pos: 'noun', level: 'B1', en: 'verdict', hi: 'फ़ैसला', ex: 'Das Urteil des Gerichts war fair.', exEn: 'The court\'s verdict was fair.', exHi: 'Adaalat ka faisla nishpaksh tha.' },
    { de: 'Verbrechen', art: 'das', gender: 'n', plural: 'Verbrechen', pos: 'noun', level: 'B1', en: 'crime', hi: 'अपराध', ex: 'Der Richter nahm das Verbrechen ernst.', exEn: 'The judge took the crime seriously.', exHi: 'Judge ne apraadh ko gambheerta se liya.' },
    { de: 'Augenblick', art: 'der', gender: 'm', plural: 'Augenblicke', pos: 'noun', level: 'B1', en: 'moment', hi: 'क्षण', ex: 'In diesem Augenblick klingelte das Telefon.', exEn: 'At that moment, the phone rang.', exHi: 'Us kshan phone baja.' },
    { de: 'Briefträger', art: 'der', gender: 'm', plural: 'Briefträger', pos: 'noun', level: 'B1', en: 'postal carrier', hi: 'डाकिया', ex: 'Der Briefträger kommt jeden Morgen.', exEn: 'The postal carrier comes every morning.', exHi: 'Dakiya har subah aata hai.' },
    { de: 'Chemiker', art: 'der', gender: 'm', plural: 'Chemiker', pos: 'noun', level: 'B1', en: 'chemist', hi: 'रसायनज्ञ', ex: 'Der Chemiker arbeitet in einem großen Labor.', exEn: 'The chemist works in a large lab.', exHi: 'Rasayanagya ek bade laboratory mein kaam karta hai.' },
    { de: 'Elektroingenieur', art: 'der', gender: 'm', plural: 'Elektroingenieure', pos: 'noun', level: 'B1', en: 'electrical engineer', hi: 'इलेक्ट्रिकल इंजीनियर', ex: 'Der Elektroingenieur reparierte das System.', exEn: 'The electrical engineer repaired the system.', exHi: 'Electrical engineer ne system theek kiya.' },
    { de: 'Fernsehsender', art: 'der', gender: 'm', plural: 'Fernsehsender', pos: 'noun', level: 'B1', en: 'TV channel', hi: 'टीवी चैनल', ex: 'Der Fernsehsender berichtete über den Prozess.', exEn: 'The TV channel reported on the trial.', exHi: 'TV channel ne muqadme ke baare mein report ki.' },
    { de: 'Mechatroniker', art: 'der', gender: 'm', plural: 'Mechatroniker', pos: 'noun', level: 'B1', en: 'mechatronics engineer', hi: 'मेकाट्रॉनिक्स इंजीनियर', ex: 'Der Mechatroniker prüfte die Maschine.', exEn: 'The mechatronics engineer checked the machine.', exHi: 'Mechatronics engineer ne machine ki jaanch ki.' },
    { de: 'Rechtsanwalt', art: 'der', gender: 'm', plural: 'Rechtsanwälte', pos: 'noun', level: 'B1', en: 'lawyer', hi: 'वकील', ex: 'Der Rechtsanwalt vertrat den Angeklagten.', exEn: 'The lawyer represented the defendant.', exHi: 'Vakeel ne aaropi ka pratinidhitva kiya.' },
    { de: 'Reporter', art: 'der', gender: 'm', plural: 'Reporter', pos: 'noun', level: 'B1', en: 'reporter', hi: 'रिपोर्टर', ex: 'Der Reporter stellte viele Fragen.', exEn: 'The reporter asked many questions.', exHi: 'Reporter ne kai sawaal poochhe.' },
    { de: 'Richter', art: 'der', gender: 'm', plural: 'Richter', pos: 'noun', level: 'B1', en: 'judge', hi: 'न्यायाधीश', ex: 'Der Richter sprach ein gerechtes Urteil.', exEn: 'The judge delivered a just verdict.', exHi: 'Nyayadhish ne ek nyaayasangat faisla diya.' },
    { de: 'Schreiner', art: 'der', gender: 'm', plural: 'Schreiner', pos: 'noun', level: 'B1', en: 'carpenter', hi: 'बढ़ई', ex: 'Der Schreiner baute einen neuen Tisch.', exEn: 'The carpenter built a new table.', exHi: 'Badhai ne ek naya table banaya.' },
    { de: 'Spezialist', art: 'der', gender: 'm', plural: 'Spezialisten', pos: 'noun', level: 'B1', en: 'specialist', hi: 'विशेषज्ञ', ex: 'Der Spezialist kannte sich mit Metallen aus.', exEn: 'The specialist was knowledgeable about metals.', exHi: 'Visheshagya ko dhaatuon ke baare mein achhi jaankari thi.' },
    { de: 'Wunschberuf', art: 'der', gender: 'm', plural: 'Wunschberufe', pos: 'noun', level: 'B1', en: 'dream job', hi: 'सपनों की नौकरी', ex: 'Richterin ist ihr Wunschberuf.', exEn: 'Being a judge is her dream job.', exHi: 'Nyayadhish banna uski sapno ki naukri hai.' },
    { de: 'Angeklagte', pos: 'noun', level: 'B1', en: 'defendant', hi: 'आरोपी', ex: 'Der Angeklagte schwieg während der Verhandlung.', exEn: 'The defendant stayed silent during the trial.', exHi: 'Aaropi sunwaai ke dauran chup raha.' },
    { de: 'Akte', art: 'die', gender: 'f', plural: 'Akten', pos: 'noun', level: 'B1', en: 'file', hi: 'फ़ाइल', ex: 'Der Richter las die Akte sorgfältig.', exEn: 'The judge read the file carefully.', exHi: 'Nyayadhish ne file ko dhyaan se padha.' },
    { de: 'Analyse', art: 'die', gender: 'f', plural: 'Analysen', pos: 'noun', level: 'B1', en: 'analysis', hi: 'विश्लेषण', ex: 'Die Analyse des Chemikers war exakt.', exEn: 'The chemist\'s analysis was exact.', exHi: 'Rasayanagya ka vishleshan sateek tha.' },
    { de: 'Anlage', art: 'die', gender: 'f', plural: 'Anlagen', pos: 'noun', level: 'B1', en: 'attachment, facility, exhibit', hi: 'संलग्नक', ex: 'Die Anlage zeigte wichtige Beweise.', exEn: 'The exhibit showed important evidence.', exHi: 'Sanlagnak ne mahatvapurna saboot dikhaaye.' },
    { de: 'Briefträgerin', art: 'die', gender: 'f', plural: 'Briefträgerinnen', pos: 'noun', level: 'B1', en: 'postal carrier (female)', hi: 'डाकिया (महिला)', ex: 'Die Briefträgerin trägt jeden Tag die Post aus.', exEn: 'The postal carrier delivers the mail every day.', exHi: 'Mahila dakiya har din daak vitarit karti hai.' },
    { de: 'Chemikerin', art: 'die', gender: 'f', plural: 'Chemikerinnen', pos: 'noun', level: 'B1', en: 'chemist (female)', hi: 'रसायनज्ञ (महिला)', ex: 'Die Chemikerin entdeckte ein neues Metall.', exEn: 'The chemist discovered a new metal.', exHi: 'Mahila rasayanagya ne ek nayi dhaatu khoji.' },
    { de: 'Elektroingenieurin', art: 'die', gender: 'f', plural: 'Elektroingenieurinnen', pos: 'noun', level: 'B1', en: 'electrical engineer (female)', hi: 'इलेक्ट्रिकल इंजीनियर (महिला)', ex: 'Die Elektroingenieurin plante das neue System.', exEn: 'The electrical engineer planned the new system.', exHi: 'Mahila electrical engineer ne naye system ki yojana banayi.' },
    { de: 'Elektronik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'electronics', hi: 'इलेक्ट्रॉनिक्स', ex: 'Er ist ein Experte für Elektronik.', exEn: 'He\'s an expert in electronics.', exHi: 'Woh electronics ka ek visheshagya hai.' },
    { de: 'Gerichtsverhandlung', art: 'die', gender: 'f', plural: 'Gerichtsverhandlungen', pos: 'noun', level: 'B1', en: 'trial', hi: 'न्यायिक सुनवाई', ex: 'Die Gerichtsverhandlung dauerte drei Tage.', exEn: 'The trial lasted three days.', exHi: 'Nyayik sunwaai teen din chali.' },
    { de: 'Industrie', art: 'die', gender: 'f', plural: 'Industrien', pos: 'noun', level: 'B1', en: 'industry', hi: 'उद्योग', ex: 'Die Industrie wächst in dieser Region.', exEn: 'Industry is growing in this region.', exHi: 'Is kshetra mein udyog badh raha hai.' },
    { de: 'Mechatronikerin', art: 'die', gender: 'f', plural: 'Mechatronikerinnen', pos: 'noun', level: 'B1', en: 'mechatronics engineer (female)', hi: 'मेकाट्रॉनिक्स इंजीनियर (महिला)', ex: 'Die Mechatronikerin reparierte den Roboter.', exEn: 'The mechatronics engineer repaired the robot.', exHi: 'Mahila mechatronics engineer ne robot theek kiya.' },
    { de: 'Partei', art: 'die', gender: 'f', plural: 'Parteien', pos: 'noun', level: 'B1', en: 'political party', hi: 'राजनीतिक दल', ex: 'Die Partei diskutierte über neue Gesetze.', exEn: 'The party discussed new laws.', exHi: 'Party naye kaanoon par charcha kar rahi thi.' },
    { de: 'Rechtsanwältin', art: 'die', gender: 'f', plural: 'Rechtsanwältinnen', pos: 'noun', level: 'B1', en: 'lawyer (female)', hi: 'वकील (महिला)', ex: 'Die Rechtsanwältin gewann den Fall.', exEn: 'The lawyer won the case.', exHi: 'Mahila vakeel ne maamla jeet liya.' },
    { de: 'Reportage', art: 'die', gender: 'f', plural: 'Reportagen', pos: 'noun', level: 'B1', en: 'report', hi: 'रिपोर्ट', ex: 'Die Reportage über das Gericht war spannend.', exEn: 'The report about the court was exciting.', exHi: 'Adaalat ke baare mein report dilchasp thi.' },
    { de: 'Reporterin', art: 'die', gender: 'f', plural: 'Reporterinnen', pos: 'noun', level: 'B1', en: 'reporter (female)', hi: 'रिपोर्टर (महिला)', ex: 'Die Reporterin interviewte den Anwalt.', exEn: 'The reporter interviewed the lawyer.', exHi: 'Mahila reporter ne vakeel ka interview liya.' },
    { de: 'Richterin', art: 'die', gender: 'f', plural: 'Richterinnen', pos: 'noun', level: 'B1', en: 'judge (female)', hi: 'न्यायाधीश (महिला)', ex: 'Die Richterin sprach das Urteil aus.', exEn: 'The judge pronounced the verdict.', exHi: 'Mahila nyayadhish ne faisla sunaya.' },
    { de: 'Schreinerin', art: 'die', gender: 'f', plural: 'Schreinerinnen', pos: 'noun', level: 'B1', en: 'carpenter (female)', hi: 'बढ़ई (महिला)', ex: 'Die Schreinerin baute die Möbel selbst.', exEn: 'The carpenter built the furniture herself.', exHi: 'Mahila badhai ne khud furniture banaya.' },
    { de: 'Spezialistin', art: 'die', gender: 'f', plural: 'Spezialistinnen', pos: 'noun', level: 'B1', en: 'specialist (female)', hi: 'विशेषज्ञ (महिला)', ex: 'Die Spezialistin analysierte die Akte genau.', exEn: 'The specialist analyzed the file precisely.', exHi: 'Mahila visheshagya ne file ka sateek vishleshan kiya.' },
    { de: 'sich beschäftigen', pos: 'verb', level: 'B1', en: 'to occupy oneself with (mit + D.)', hi: 'व्यस्त रहना', ex: 'Er beschäftigt sich gern mit Fahrrädern.', exEn: 'He gladly occupies himself with bicycles.', exHi: 'Woh khushi se cyclon ke saath vyast rehta hai.', conj: { praesens: 'beschäftigt sich', praeteritum: 'beschäftigte sich', perfekt: 'hat sich beschäftigt' } },
    { de: 'ursprünglich', pos: 'adverb', level: 'B1', en: 'originally', hi: 'मूल रूप से', ex: 'Er ist ursprünglich ein Experte für Elektronik.', exEn: 'He\'s originally an expert in electronics.', exHi: 'Woh mool roop se electronics ka visheshagya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist N-Deklination?',
      body: [
        'A closed set of masculine nouns adds -n or -en in EVERY case except the Nominativ Singular. The Nominativ Singular is the ONLY bare form.'
      ],
      table: {
        head: ['Case', 'der Student'],
        rows: [
          ['Nominativ', 'der Student'],
          ['Akkusativ', 'den Studenten'],
          ['Dativ', 'dem Studenten'],
          ['Genitiv', 'des Studenten']
        ]
      },
      hinglish: 'Masculine nouns ka ek chhota, band group EVERY case mein -n ya -en jodta hai, sirf Nominativ Singular ke alawa. Nominativ Singular hi sirf bare form hai.'
    },
    {
      title: 'Die wichtigsten N-Nomen (Goethe B1)',
      body: [ 'These are the most common N-Deklination nouns tested at B1 — learn this list by heart.' ],
      table: {
        head: ['Group', 'Nouns'],
        rows: [
          ['Menschen', 'der Student, der Mensch, der Junge, der Herr, der Kunde, der Kollege, der Nachbar'],
          ['Berufe', 'der Polizist, der Tourist, der Präsident, der Soldat, der Journalist, der Pilot, der Experte, der Architekt, der Fotograf'],
          ['Dinge & Tiere', 'der Automat, der Planet, der Elefant, der Löwe, der Affe, der Hase']
        ]
      },
      hinglish: 'Yeh sabse common N-Deklination nouns hain jo B1 mein test hote hain — is list ko yaad karo.'
    },
    {
      title: 'Erkennungsmuster (typische Endungen)',
      body: [ 'Many N-nouns can be spotted by their endings — though this is a helpful pattern, not a guarantee, so always double-check against the list.' ],
      table: {
        head: ['Ending', 'Example'],
        rows: [
          ['-e', 'der Kollege, der Junge, der Experte, der Löwe, der Hase'],
          ['-ent', 'der Präsident, der Student'],
          ['-ant', 'der Elefant'],
          ['-ist', 'der Polizist, der Journalist, der Tourist'],
          ['-at', 'der Soldat, der Automat'],
          ['-graf', 'der Fotograf'],
          ['-nom', 'der Astronom']
        ]
      },
      hinglish: 'Kai N-nouns ko unki ending se pehchaana ja sakta hai — lekin yeh ek helpful pattern hai, guarantee nahi, isliye hamesha list se check karo.'
    },
    {
      title: 'N-Deklination in allen Fällen',
      body: [ 'Only the Nominativ stays unchanged — everything else, in every sentence position, takes the ending.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">Der Student lernt Deutsch.</span>'],
          ['Akkusativ', '<span class="de">Ich sehe den Studenten.</span>'],
          ['Dativ', '<span class="de">Ich helfe dem Studenten.</span>'],
          ['Genitiv', '<span class="de">Das Buch des Studenten.</span>']
        ]
      },
      hinglish: 'Sirf Nominativ badalta nahi hai — baaki sab cases mein, sentence mein kahin bhi ho, ending lagti hai.'
    },
    {
      title: 'Normales Nomen vs. N-Deklination',
      body: [ 'Compare a regular masculine noun (der Tisch) to an N-noun (der Student) side by side.' ],
      table: {
        head: ['Case', 'der Tisch (normal)', 'der Student (N-Deklination)'],
        rows: [
          ['Nominativ', 'der Tisch', 'der Student'],
          ['Akkusativ', 'den Tisch', 'den Studenten'],
          ['Dativ', 'dem Tisch', 'dem Studenten'],
          ['Genitiv', 'des Tisches', 'des Studenten']
        ]
      },
      note: 'A regular noun only changes in the Genitiv (adding -(e)s). An N-noun changes in EVERY case except Nominativ.',
      hinglish: 'Ek regular noun sirf Genitiv mein badalta hai (-(e)s jodkar). N-noun HAR case mein badalta hai, sirf Nominativ ke alawa.'
    },
    {
      title: 'Erkennungs-Flowchart',
      body: [ 'Ask two questions before declining any masculine noun.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Is the noun masculine?', 'If no → normal declension rules apply'],
          ['Is it on the N-Deklination list (or does it look like one)?', 'If yes → add -n/-en in every case except Nominativ Singular']
        ]
      },
      hinglish: 'Kisi bhi masculine noun ko decline karne se pehle do sawaal poocho: kya yeh masculine hai? kya yeh N-Deklination list mein hai?'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from forgetting the ending, adding it where it doesn\'t belong, or using the wrong case entirely.' ],
      mistakes: [
        { wrong: 'den Student', right: 'den Studenten', why: 'Akkusativ Singular of an N-noun always takes -en — the ending can never be dropped.' },
        { wrong: 'dem Student', right: 'dem Studenten', why: 'Dativ Singular also always takes -en.' },
        { wrong: 'des Student', right: 'des Studenten', why: 'Genitiv Singular also always takes -en (not just -s, as a normal noun would).' },
        { wrong: 'Ich kenne der Studenten.', right: 'Ich kenne den Studenten.', why: 'kennen takes Akkusativ — the article must be den (Akkusativ), not der (Nominativ).' },
        { wrong: 'Ich helfe den Studenten. (meaning ONE student)', right: 'Ich helfe dem Studenten.', why: 'helfen takes Dativ — for a single student, the article is dem, not den; "den Studenten" without further context could be read as plural.' }
      ],
      hinglish: 'Yeh paanch galtiyaan ending bhoolne se, jahan zaroorat nahi wahan jodne se, ya galat case use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Merksatz',
      body: [ 'N-Deklination nouns appear constantly in Goethe B1 texts about professions, university, and travel — practise spotting them fast.' ],
      note: 'Memory trick: only the Nominativ Singular stays unchanged. Every other case gets -n or -en — no exceptions once you\'re past the first form.',
      hinglish: 'N-Deklination nouns Goethe B1 texts mein professions, university, aur travel ke baare mein lagataar aate hain. Yaad rakho: sirf Nominativ Singular badalta nahi, baaki sab -n ya -en lete hain.'
    }
  ],

  // ---------- Reading passage (courtroom, clickable words) ----------
  reading: {
    title: 'Der Prozess',
    titleEn: 'The trial',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Richter', role: 'plain', en: 'judge', hi: 'न्यायाधीश', type: 'Noun · masc.' },
      { w: 'eröffnete', role: 'r-verb', en: 'opened (Präteritum)', hi: 'शुरू किया', type: 'Verb · eröffnen (Präteritum)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Gerichtsverhandlung', role: 'plain', en: 'trial', hi: 'न्यायिक सुनवाई', type: 'Noun · fem.', why: 'die Gerichtsverhandlung (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'sah', role: 'r-verb', en: 'looked (Satzende)', hi: 'देखा (Satzende)', type: 'Verb · sehen (Präteritum, Satzende)' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Angeklagten', role: 'r-nnoun', en: 'defendant', hi: 'आरोपी', type: 'N-Deklination · Akk. Sg.', why: 'der Angeklagte behaves like an N-noun/adjective noun: den Angeklagten in Akkusativ.' },
      { w: 'ernst', role: 'r-adjective', en: 'seriously', hi: 'गंभीरता से', type: 'Adverb' },
      { w: 'an', role: 'r-verb', en: '(ansehen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Rechtsanwalt', role: 'plain', en: 'lawyer', hi: 'वकील', type: 'Noun · masc.', why: 'der Rechtsanwalt (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Angeklagten', role: 'r-nnoun', en: 'defendant (gen.)', hi: 'आरोपी का', type: 'N-Deklination · Gen. Sg.', why: 'Genitiv Singular: des Angeklagten.' },
      { w: 'sprach', role: 'r-verb', en: 'spoke (Satzende)', hi: 'बोला (Satzende)', type: 'Verb · sprechen (Präteritum, Satzende)' },
      { w: 'ruhig', role: 'r-adjective', en: 'calmly', hi: 'शांति से', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'wichtigen', role: 'r-adjective', en: 'important', hi: 'महत्वपूर्ण', type: 'Adjective · schwach · Gen.', why: 'Weak declension: des + Genitiv → -en (recycled — Ch.12).' },
      { w: 'Falls', role: 'plain', en: 'case (gen.)', hi: 'मामला', type: 'Noun · masc.' },
      { w: 'kam', role: 'r-verb', en: 'came (Satzende)', hi: 'आया (Satzende)', type: 'Verb · kommen (Präteritum, Satzende)' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Reporter', role: 'plain', en: 'reporter', hi: 'रिपोर्टर', type: 'Noun · masc.', why: 'der Reporter (this chapter, NOT an N-noun — declines like a normal noun).' },
      { w: 'ins', role: 'r-place', en: 'into the', hi: 'में', type: 'Contraction · in das' },
      { w: 'Gericht', role: 'plain', en: 'court', hi: 'अदालत', type: 'Noun · neut.', why: 'das Gericht (this chapter).' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Reporter', role: 'plain', en: 'reporter', hi: 'रिपोर्टर', type: 'Noun · masc.' },
      { w: 'befragte', role: 'r-verb', en: 'questioned (Satzende)', hi: 'पूछताछ की (Satzende)', type: 'Verb · befragen (Präteritum, Satzende)' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Polizisten', role: 'r-nnoun', en: 'police officer', hi: 'पुलिसकर्मी', type: 'N-Deklination · Akk. Sg.', why: 'der Polizist → einen Polizisten in Akkusativ Singular.' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'Öffentlichkeit', role: 'plain', en: 'public', hi: 'जनता', type: 'Noun · fem.', why: 'die Öffentlichkeit (this chapter).' },
      { w: 'gespannt', role: 'r-adjective', en: 'anxious, tense (Satzende)', hi: 'उत्सुक (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'sprach', role: 'r-verb', en: 'delivered (Satzende)', hi: 'सुनाया (Satzende)', type: 'Verb · sprechen (ein Urteil sprechen, Präteritum, Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'Richterin', role: 'plain', en: 'judge (female)', hi: 'न्यायाधीश (महिला)', type: 'Noun · fem.', why: 'die Richterin (this chapter).' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'gerechtes', role: 'r-adjective', en: 'just', hi: 'न्यायसंगत', type: 'Adjective · gemischt · Akk.', why: 'gerecht (this chapter). Mixed declension: ein + Akkusativ neuter → -es.' },
      { w: 'Urteil', role: 'plain', en: 'verdict', hi: 'फ़ैसला', type: 'Noun · neut.', why: 'das Urteil (this chapter).' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'verließ', role: 'r-verb', en: 'left (Position 2)', hi: 'छोड़ दिया (Position 2)', type: 'Verb · verlassen (Präteritum, Position 2)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Angeklagte', role: 'r-nnoun', en: 'defendant', hi: 'आरोपी', type: 'N-Deklination · Nom. Sg.', why: 'der Angeklagte — Nominativ Singular stays unchanged.' },
      { w: 'das', role: 'plain', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Gericht', role: 'plain', en: 'court', hi: 'अदालत', type: 'Noun · neut.' },
      { w: 'erleichtert', role: 'r-adjective', en: 'relieved', hi: 'राहत के साथ', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The judge opened the trial and looked seriously at the defendant. The defendant\'s lawyer spoke calmly. Because of the important case, a reporter also came to the court. The reporter questioned a police officer. Although the public was anxious, the judge delivered a just verdict. That\'s why the defendant left the court relieved.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_015_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Silje, kennst du einen guten Anwalt? Ich brauche Hilfe mit meinem Vertrag.', en: 'Silje, do you know a good lawyer? I need help with my contract.' },
      { id: 'B1_015_L002', speaker: 'Silje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Klar, ich kenne einen Kollegen. Er hat schon vielen Kunden geholfen.', en: 'Sure, I know a colleague. He\'s already helped many clients.' },
      { id: 'B1_015_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und traust du diesem Kollegen wirklich?', en: 'And do you really trust this colleague?' },
      { id: 'B1_015_L004', speaker: 'Silje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Absolut. Ich habe selbst mit diesem Experten gearbeitet — er ist sehr genau.', en: 'Absolutely. I\'ve worked with this expert myself — he\'s very precise.' }
    ],
    transcript: 'Silje, kennst du einen guten Anwalt? Ich brauche Hilfe mit meinem Vertrag. Klar, ich kenne einen Kollegen. Er hat schon vielen Kunden geholfen. Und traust du diesem Kollegen wirklich? Absolut. Ich habe selbst mit diesem Experten gearbeitet — er ist sehr genau.',
    translation: 'Silje, do you know a good lawyer? I need help with my contract. Sure, I know a colleague. He\'s already helped many clients. And do you really trust this colleague? Absolutely. I\'ve worked with this expert myself — he\'s very precise.',
    tokens: [
      { w: 'Silje' },
      { w: ',', plain: true },
      { w: 'kennst' },
      { w: 'du' },
      { w: 'einen' },
      { w: 'guten' },
      { w: 'Anwalt' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'brauche' },
      { w: 'Hilfe' },
      { w: 'mit' },
      { w: 'meinem' },
      { w: 'Vertrag' },
      { w: '.', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'kenne' },
      { w: 'einen' },
      { w: 'Kollegen' },
      { w: '.', plain: true },
      { w: 'Er' },
      { w: 'hat' },
      { w: 'schon' },
      { w: 'vielen' },
      { w: 'Kunden' },
      { w: 'geholfen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'traust' },
      { w: 'du' },
      { w: 'diesem' },
      { w: 'Kollegen' },
      { w: 'wirklich' },
      { w: '?', plain: true },
      { w: 'Absolut' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'selbst' },
      { w: 'mit' },
      { w: 'diesem' },
      { w: 'Experten' },
      { w: 'gearbeitet' },
      { w: '—', plain: true },
      { w: 'er' },
      { w: 'ist' },
      { w: 'sehr' },
      { w: 'genau' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wobei braucht Timo Hilfe?', qEn: 'What does Timo need help with?', options: ['seinem Auto', 'seinem Vertrag', 'seiner Wohnung', 'seinem Job'], optionsEn: ['his car', 'his contract', 'his flat', 'his job'], answer: 1,
        explain: '"Ich brauche Hilfe mit meinem Vertrag."' },
      { q: 'Vertraut Silje dem Kollegen?', qEn: 'Does Silje trust the colleague?', options: ['Nein', 'Absolut', 'Nicht ganz', 'Sie kennt ihn nicht'], optionsEn: ['No', 'Absolutely', 'Not quite', 'She doesn\'t know him'], answer: 1,
        explain: '"Absolut."' }
    ]
  },

  speaking: [
    { task: "Deine Familie fragt, wen du im Kurs kennengelernt hast.", taskEn: "Your family asks who you've met in the course.", de: "Ich kenne einen Studenten aus Kenia, und dem Studenten helfe ich beim Deutsch.", en: "I know a student from Kenya, and I help that student with his German." },
    { task: "Ein Freund fragt, wer bei euch die Post bringt.", taskEn: "A friend asks who delivers your post.", de: "Der Briefträger kommt um zehn. Ich sehe den Briefträger jeden Tag.", en: "The postman comes at ten. I see him every day." },
    { task: "Eine Kollegin fragt, wer die Teile herstellt.", taskEn: "A colleague asks who manufactures the parts.", de: "Der Mechatroniker stellt sie her, und ich helfe dem Mechatroniker manchmal.", en: "The mechatronics technician makes them, and I sometimes help him." },
    { task: "Rollenspiel: Ein Tourist findet den Weg nicht. Ihr helft ihm.", taskEn: "Role-play: a tourist can't find the way. You help him.", de: "Wir haben dem Touristen den Weg erklärt und dem Touristen die Karte gegeben.", en: "We explained the way to the tourist and gave him the map." },
    { task: "Deine Nichte fragt, welche Berufe es in deiner Familie gibt.", taskEn: "Your niece asks what jobs there are in your family.", de: "Mein Onkel ist Chemiker, und mein Cousin arbeitet als Elektroingenieur.", en: "My uncle is a chemist, and my cousin works as an electrical engineer." },
    { task: "Im Kurs geht es um ein Verbrechen aus den Nachrichten. Erzähl davon.", taskEn: "In class the topic is a crime from the news. Talk about it.", de: "Der Zeuge hat vor Gericht gesprochen, aber dem Zeugen hat niemand geglaubt.", en: "The witness spoke in court, but nobody believed him." },
    { task: "Du bist mit einem Kind im Zoo. Erklär, was ihr seht.", taskEn: "You're at the zoo with a child. Explain what you see.", de: "Wir sehen den Löwen, den Elefanten und einen Affen im Baum.", en: "We can see the lion, the elephant and a monkey in the tree." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short description (six to eight sentences) — a person you know, a courtroom scene, or a workplace story — using at least five N-Deklination nouns across different cases (Nominativ, Akkusativ, Dativ, Genitiv).',
    starters: ['Ich kenne einen Studenten, …', 'Mein Kollege …', 'Der Richter …'],
    placeholder: 'Ich kenne einen Studenten, der neben mir wohnt. Ich habe dem Studenten oft geholfen …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich kenne ___ Studenten." (Akkusativ)',
      options: ['der', 'den', 'dem'],
      answer: 1,
      explain: 'kennen takes Akkusativ — den Studenten.'
    },
    gap: {
      sentence: ['Das Buch des ', ' liegt hier.'],
      gaps: [ { answer: 'Studenten', accepts: ['Studenten'] } ],
      explain: 'Genitiv Singular of an N-noun takes -en: des Studenten.'
    },
    match: {
      q: 'Match each case to its N-noun form.',
      pairs: [
        { noun: 'Nominativ', art: 'der Student' },
        { noun: 'Akkusativ', art: 'den Studenten' },
        { noun: 'Dativ', art: 'dem Studenten' },
        { noun: 'Genitiv', art: 'des Studenten' }
      ]
    },
    builder: {
      target: 'Build: "I help the colleague."',
      bank: ['Ich', 'helfe', 'dem', 'Kollegen', '.'],
      answer: ['Ich', 'helfe', 'dem', 'Kollegen', '.'],
      roles: { 'Kollegen': 'r-nnoun', 'helfe': 'r-verb' }
    },
    identifyNNoun: {
      title: 'Identify the N-Noun',
      items: [
        { phrase: 'der Tisch', isNNoun: false },
        { phrase: 'der Student', isNNoun: true },
        { phrase: 'der Kollege', isNNoun: true },
        { phrase: 'der Stuhl', isNNoun: false },
        { phrase: 'der Polizist', isNNoun: true },
        { phrase: 'der Computer', isNNoun: false }
      ]
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich sehe den Student.',
      right: 'Ich sehe den Studenten.',
      explain: 'Akkusativ Singular of an N-noun always takes -en — the ending can never be dropped.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Der ___ lernt Deutsch." (Nominativ)', options: ['Student', 'Studenten', 'Studentes'], answer: 0,
      explain: 'Nominativ Singular of an N-noun stays bare: der Student.' },
    { q: 'Complete: "Ich helfe ___ Nachbarn." (Dativ)', options: ['der', 'dem', 'den'], answer: 1,
      explain: 'helfen takes Dativ — dem Nachbarn.' },
    { q: 'Which noun is NOT an N-Deklination noun?', options: ['der Mensch', 'der Tisch', 'der Kunde'], answer: 1,
      explain: 'der Tisch is a normal masculine noun — it only adds -(e)s in the Genitiv.' },
    { q: 'Complete: "Das Auto des ___." (Genitiv)', options: ['Kollege', 'Kollegen', 'Kolleges'], answer: 1,
      explain: 'Genitiv Singular of an N-noun takes -en: des Kollegen.' },
    { q: 'Which sentence contains an error?', options: ['Ich sehe den Studenten.', 'Ich kenne der Studenten.', 'Der Student kommt aus Indien.'], answer: 1,
      explain: 'kennen takes Akkusativ — it should be "Ich kenne den Studenten," not "der Studenten."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-nnoun', html: 'A closed group of masculine nouns — der Student, der Mensch, der Kollege, der Präsident, and similar — takes -n/-en in EVERY case except Nominativ Singular.' },
    { c: 'r-nnoun', html: 'Regular masculine nouns (der Tisch) only change in the Genitiv (-(e)s). N-nouns change in Akkusativ, Dativ, AND Genitiv, plus the whole plural.' },
    { c: 'r-nnoun', html: 'Recognition patterns help (-e, -ent, -ant, -ist, -at, -graph) but always double-check against the reference list — the ending alone isn\'t a guarantee.' }
  ],
  revisionTips: [
    'Whenever you meet a new masculine noun, ask: is it on the N-Deklination list? If yes, drop the -n/-en habit into every non-Nominativ sentence.',
    'Practise the four-case ladder out loud for five different N-nouns: der Student → den Studenten → dem Studenten → des Studenten.',
    'Watch for der Herr, which doubles its ending in the plural: die Herren (not die Herrn).'
  ]
};

window.CHAPTER = CHAPTER;
