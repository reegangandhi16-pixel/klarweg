/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 2
   "Nebensätze: weil / da & obwohl" — reasons and contrasts.
   Reviews: weil (known from A2/B1-Ch1 context). Teaches new:
   da (formal/known-reason) and obwohl (unexpected contrast).
   Deliberately does NOT introduce dennoch, hingegen, alldieweil,
   or other B2 connectors.
   Vocabulary source: uploaded chapter-02 list (36 items).
   Schema: every vocab entry carries de/art/gender/plural/pos/
   level/ipa/en/hi/ex+exEn+exHi/ex2+ex2En+ex2Hi/advanced
   {synonyms,opposites,collocations} — full popup coverage.
============================================================ */
const CHAPTER = {
  id: 'b1-2-nebensaetze-weil-da-obwohl',
  phase: 'B1 · Phase 1',
  number: 2,
  title: 'Nebensätze: weil / da & obwohl',
  titleEn: 'Subordinate clauses: weil / da & obwohl',
  description: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Da ich krank bin, bleibe ich zu Hause. Obwohl es regnet, gehen wir spazieren. This chapter sharpens the reason-clause you already know (weil), adds its more formal cousin (da), and introduces the connector for unexpected contrast (obwohl) — in every case, the finite verb goes to the very end.',
  xp: 220,
  time: 40,
  difficulty: 'Intermediate',
  nextChapter: { number: 3, title: 'Konjunktiv II: Höfliche Bitten', titleEn: 'Subjunctive II: Polite requests' , href: 'chapter-b1-3-konjunktiv2-hoefliche-bitten.html' },

  prevChapter: { number: 1, title: 'Infinitiv mit zu', titleEn: 'Infinitive with zu', href: 'chapter-b1-1-infinitiv-mit-zu.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Frauke has lost her appetite for camping — it\'s too cold outside — while Timo wants to go to the beach anyway. Every reason and every unexpected contrast reaches for weil, da, or obwohl, all sending the verb to the very end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear weil, da, and obwohl doing three different jobs in real conversation'
    ],
    scene: 'Im Café nach der Arbeit',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'keinen', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'KY-nen', type: 'Determiner' },
        { w: 'Bock', role: 'r-akkusativ', en: 'desire', hi: 'मन', pron: 'bok', type: 'Noun · masc.', why: 'keinen Bock haben = to not feel like it (this chapter).', ex: 'Ich habe keinen Bock, zu zelten.', exEn: 'I do not feel like camping.' },
        { w: 'mehr', role: 'r-adverb', en: 'anymore', hi: 'अब', pron: 'mair', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'zelten', role: 'r-verb', en: 'camp', hi: 'कैंपिंग करना', pron: 'TSEL-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I do not feel like camping anymore.', hi: 'Mera ab camping karne ka man nahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wieso', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'VEE-zo', type: 'Question word' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '?', plain: true }
      ], en: 'Why not?', hi: 'Kyun nahi?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil', why: 'weil sends the verb to the end (this chapter).', ex: 'Ich bleibe zu Hause, weil es regnet.', exEn: 'I stay home because it rains.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'draußen', role: 'r-place', en: 'outside', hi: 'बाहर', pron: 'DROW-sen', type: 'Adverb · place' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'kalt', role: 'r-subject', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Because it is so cold outside.', hi: 'Kyunki bahar itni thand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da', why: 'da introduces a cause, often known info, also verb-final (this chapter).', ex: 'Da es kalt ist, bleiben wir drinnen.', exEn: 'Since it is cold, we stay inside.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'kalt', role: 'r-subject', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'bleiben', role: 'r-verb', en: 'shall we stay', hi: 'रहते हैं', pron: 'BLY-ben', type: 'Verb · bleiben (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'drinnen', role: 'r-place', en: 'inside', hi: 'अंदर', pron: 'DRI-nen', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Since it is cold, we should rather stay inside.', hi: 'Chunki thand hai, hum andar rehte hain toh behtar hai.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-VOHL', type: 'Conjunction · obwohl', why: 'obwohl introduces a concession, also verb-final (this chapter).', ex: 'Obwohl es kalt ist, will ich raus.', exEn: 'Although it is cold, I want to go out.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'kalt', role: 'r-subject', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहती हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'an', role: 'r-preposition', en: 'to', hi: 'पर', pron: 'an', type: 'Preposition + place' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Strand', role: 'r-akkusativ', en: 'beach', hi: 'समुद्र तट', pron: 'shtrant', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Although it is cold, I want to go to the beach.', hi: 'Halaanki thand hai, main samudra tat jaana chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-VOHL', type: 'Conjunction · obwohl' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Himmel', role: 'r-subject', en: 'sky', hi: 'आकाश', pron: 'HI-mel', type: 'Noun · masc.' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'grau', role: 'r-subject', en: 'grey', hi: 'धूसर', pron: 'grow', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Really? Although the sky is so grey?', hi: 'Sach mein? Halaanki aasmaan itna dhoosar hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sowieso', role: 'r-adverb', en: 'anyway', hi: 'वैसे भी', pron: 'zo-VEE-zo', type: 'Adverb' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'wenigstens', role: 'r-adverb', en: 'at least', hi: 'कम से कम', pron: 'VAY-nikhs-tens', type: 'Adverb' },
        { w: 'spazieren', role: 'r-verb', en: 'walk', hi: 'टहलना', pron: 'shpa-TSEE-ren', type: 'Verb · infinitive' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Since we are here anyway, we should at least go for a walk.', hi: 'Chunki hum vaise bhi yahaan hain, humein kam se kam sair par jaana chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Also', role: 'r-subject', en: 'well', hi: 'ठीक है', pron: 'AL-zo', type: 'Reaction' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-VOHL', type: 'Conjunction · obwohl' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Auto', role: 'r-dativ', en: 'car (dat.)', hi: 'कार में', pron: 'OW-to', type: 'Noun · neut. dat.' },
        { w: 'bleibe', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-buh', type: 'Verb · bleiben (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)', lexicalUnit: 'mitkommen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-verb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitkommen' },
        { w: '.', plain: true }
      ], en: 'Well, although I would rather stay in the car, I will come along.', hi: 'Theek hai, halaanki main kaar mein rehna behtar samajhta, main saath aata hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Three connectors, three jobs. <span class="de r-conjunction">weil</span> gives an everyday reason: <span class="de">Ich bin müde, weil ich lange gearbeitet habe.</span> <span class="de r-conjunction">da</span> gives a formal or already-known reason, often at the front: <span class="de">Da ich krank bin, bleibe ich zu Hause.</span> <span class="de r-conjunction">obwohl</span> signals an unexpected contrast: <span class="de">Obwohl es regnet, gehen wir spazieren.</span> In every case, the finite verb is pushed to the very end of the subordinate clause.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NEBENSÄTZE MIT WEIL, DA UND OBWOHL (B1 level only): weil (everyday spoken reason), da (formal/already-known reason, often clause-initial), and obwohl (unexpected contrast) — all three push the finite verb to the very end of their subordinate clause. ' +
    'Do NOT expect or require dennoch, hingegen, alldieweil, or other B2 connectors — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- weil, da, and obwohl are all subordinating conjunctions: the finite (conjugated) verb of their clause MUST go to the very end. "weil ich bin müde" is wrong; "weil ich müde bin" is correct.\n' +
    '- da and obwohl can start the sentence; when they do, the main clause verb comes immediately after the comma, before the main-clause subject (verb-second word order): "Da ich krank bin, bleibe ich zu Hause." not "Da ich krank bin, ich bleibe zu Hause."\n' +
    '- obwohl introduces a contrast (something happens despite an obstacle); da/weil introduce a reason (something happens because of a cause). Flag a da/weil clause that is logically describing a contrast, or an obwohl clause logically describing a plain cause.\n' +
    '- Do not require da over weil or vice versa — both are acceptable reason connectors; da simply reads more formal/written. Never mark weil "wrong" for being informal.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-position check:</b> one sentence on whether the verb landed at the end of every weil/da/obwohl clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you distinguish weil, da, and obwohl confidently and push the verb to clause-end every time. Move on to <span class="de">Konjunktiv II — Höfliche Bitten</span>.',
    mid: 'Good. Re-read the weil/da/obwohl comparison table once — especially verb position when the clause starts the sentence — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the decision guide), then retake.'
  },

  parserSentence: [
    { w: 'Obwohl', role: 'r-conjunction' }, { w: 'es', role: 'r-subject' },
    { w: 'regnet', role: 'r-verb' }, { w: ',', role: 'plain' },
    { w: 'gehen', role: 'r-verb' }, { w: 'wir', role: 'r-subject' },
    { w: 'spazieren', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: three connectors, three different jobs.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends talk through a stressful night and a beach trip using weil, da, and obwohl.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 36 words — full popups with two examples, Hindi, IPA, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master weil vs. da vs. obwohl, word order, and the decision guide.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a travel-story passage full of reason and contrast clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch weil, da, and obwohl clauses in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give your own reasons, decisions, and contrasts out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write about a decision or trip using several subordinate clauses.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill connector choice and verb-end word order.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 220 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 36 chapter words — Abenteuer, Forumstext, Strandpromenade, Wiese, enttäuscht, verzweifelt, schiefgehen — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'weil/da/obwohl selection drills, verb-position practice, and a travel-story writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full weil / da / obwohl reference — comparisons, word order, common mistakes, decision guide.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin müde, weil ich gearbeitet habe.', text: 'Give an everyday reason with weil' },
    { de: 'Da ich krank bin, bleibe ich zu Hause.', text: 'Give a formal or already-known reason with da' },
    { de: 'Obwohl es regnet, gehen wir spazieren.', text: 'Signal an unexpected contrast with obwohl' },
    { de: 'Verb … Verb.', text: 'Push the finite verb to clause-end every time' },
    { de: 'weil vs. da vs. obwohl', text: 'Choose the right connector by ear and by meaning' }
  ],

  // ---------- Vocabulary (36 items — full chapter-02 upload list) ----------
  vocab: [
    { de: 'jedenfalls', pos: 'adverb', level: 'B1', en: 'in any case, anyway', hi: 'हर हाल में',
      ex: 'Ich habe jedenfalls versucht, pünktlich zu sein.', exEn: 'In any case, I tried to be on time.', exHi: 'Main har haal mein samay par aane ki koshish ki.',
      ex2: 'Jedenfalls war die Reise ein Erlebnis.', ex2En: 'In any case, the trip was an experience.', ex2Hi: 'Har haal mein, yatra ek anubhav thi.',
      advanced: { synonyms: ['auf jeden Fall', 'zumindest'], opposites: ['keinesfalls'], collocations: ['jedenfalls nicht', 'ich, jedenfalls'] } },
    { de: 'aufbauen', pos: 'verb', level: 'B1', en: 'to build, set up', hi: 'बनाना, स्थापित करना',
      ex: 'Wir haben das Zelt zusammen aufgebaut.', exEn: 'We set up the tent together.', exHi: 'Humne tambu milkar khada kiya.',
      ex2: 'Sie baut ihre eigene Firma auf.', ex2En: 'She is building her own company.', ex2Hi: 'Woh apni khud ki company bana rahi hai.',
      conj: { praesens: 'baut auf', praeteritum: 'baute auf', perfekt: 'hat aufgebaut' },
      advanced: { synonyms: ['errichten', 'gründen'], opposites: ['abbauen', 'zerstören'], collocations: ['ein Zelt aufbauen', 'eine Karriere aufbauen'] } },
    { de: 'Bock haben', pos: 'idiom', level: 'B1', en: 'to feel like something (colloquial)', hi: 'मन करना (बोलचाल)',
      ex: 'Ich habe keinen Bock, heute zu kochen.', exEn: 'I don\'t feel like cooking today.', exHi: 'Aaj mera khana banane ka mann nahi hai.',
      ex2: 'Hast du Bock, ins Kino zu gehen?', ex2En: 'Do you feel like going to the cinema?', ex2Hi: 'Kya tumhara cinema jaane ka mann hai?',
      advanced: { synonyms: ['Lust haben'], opposites: ['keinen Bock haben'], collocations: ['Bock haben auf + Akk.', 'keinen Bock haben'] } },
    { de: 'brennen', pos: 'verb', level: 'B1', en: 'to burn', hi: 'जलना',
      ex: 'Das Feuer brennt die ganze Nacht.', exEn: 'The fire burns all night.', exHi: 'Aag poori raat jalti hai.',
      ex2: 'Die Kerze hat schnell gebrannt.', ex2En: 'The candle burned quickly.', ex2Hi: 'Mombatti jaldi jal gayi.',
      conj: { praesens: 'brennt', praeteritum: 'brannte', perfekt: 'hat gebrannt' },
      advanced: { synonyms: ['lodern'], opposites: ['löschen', 'erlöschen'], collocations: ['ein Feuer brennt', 'die Sonne brennt'] } },
    { de: 'da', pos: 'grammar', level: 'B1', en: 'as, since, because (formal reason)', hi: 'चूंकि, क्योंकि (औपचारिक)',
      ex: 'Da ich krank bin, bleibe ich heute zu Hause.', exEn: 'Since I\'m sick, I\'m staying home today.', exHi: 'Chunki main bimar hoon, main aaj ghar par rahoonga.',
      ex2: 'Da es schon spät ist, fahren wir jetzt los.', ex2En: 'Since it\'s already late, we\'re leaving now.', ex2Hi: 'Chunki der ho chuki hai, hum ab nikalte hain.',
      advanced: { synonyms: ['weil'], opposites: [], collocations: ['Da … , Hauptsatz.'] } },
    { de: 'Abneigung', art: 'die', gender: 'f', plural: 'Abneigungen', pos: 'noun', level: 'B1', en: 'dislike, aversion', hi: 'नापसंदगी',
      ex: 'Er hat eine Abneigung gegen laute Musik.', exEn: 'He has a dislike of loud music.', exHi: 'Use tez awaaz wale sangeet se nafrat hai.',
      ex2: 'Ihre Abneigung gegen Pilze ist bekannt.', ex2En: 'Her dislike of mushrooms is well known.', ex2Hi: 'Mushroom ke prati uski napasandagi jaani-mani hai.',
      advanced: { synonyms: ['Widerwille', 'Aversion'], opposites: ['Vorliebe', 'Zuneigung'], collocations: ['eine Abneigung gegen + Akk.', 'eine Abneigung haben'] } },
    { de: 'diktieren', pos: 'verb', level: 'B1', en: 'to dictate', hi: 'बोलकर लिखवाना',
      ex: 'Der Chef diktiert der Assistentin einen Brief.', exEn: 'The boss dictates a letter to the assistant.', exHi: 'Boss sahayak ko ek patra bolkar likhwata hai.',
      ex2: 'Ich habe den Text meinem Kollegen diktiert.', ex2En: 'I dictated the text to my colleague.', ex2Hi: 'Maine text apne sahyogi ko bolkar likhwaya.',
      conj: { praesens: 'diktiert', praeteritum: 'diktierte', perfekt: 'hat diktiert' },
      advanced: { synonyms: [], opposites: [], collocations: ['einen Brief diktieren', 'einen Text diktieren'] } },
    { de: 'enttäuscht', pos: 'adjective', level: 'B1', en: 'disappointed', hi: 'निराश',
      ex: 'Ich bin enttäuscht, weil das Konzert ausgefallen ist.', exEn: 'I\'m disappointed because the concert was cancelled.', exHi: 'Main nirash hoon kyunki concert radd ho gaya.',
      ex2: 'Sie war sehr enttäuscht von dem Ergebnis.', ex2En: 'She was very disappointed with the result.', ex2Hi: 'Woh parinaam se bahut nirash thi.',
      advanced: { synonyms: ['frustriert', 'traurig'], opposites: ['begeistert', 'zufrieden'], collocations: ['enttäuscht sein von + Dat.', 'enttäuscht sein, dass …'] } },
    { de: 'fest machen', pos: 'verb', level: 'B1', en: 'to fasten, moor', hi: 'बांधना, स्थिर करना',
      ex: 'Wir machen das Boot am Steg fest.', exEn: 'We fasten the boat at the jetty.', exHi: 'Hum naav ko ghaat par bandhte hain.',
      ex2: 'Kannst du das Seil fest machen?', ex2En: 'Can you fasten the rope?', ex2Hi: 'Kya tum rassi ko bandh sakte ho?',
      conj: { praesens: 'macht fest', praeteritum: 'machte fest', perfekt: 'hat festgemacht' },
      advanced: { synonyms: ['befestigen', 'anbinden'], opposites: ['losmachen', 'lösen'], collocations: ['ein Boot festmachen', 'einen Termin festmachen'] } },
    { de: 'liegen', pos: 'verb', level: 'B1', en: 'to lie, be in the lead', hi: 'रखा होना, आगे होना',
      ex: 'Meine Tasche liegt im Kofferraum.', exEn: 'My bag is lying in the car boot.', exHi: 'Meri bag gaadi ki dicky mein rakhi hai.',
      ex2: 'Nach dem ersten Halbjahr liegt sie in Führung.', ex2En: 'After the first half, she\'s in the lead.', ex2Hi: 'Pehle half ke baad, woh aage hai.',
      conj: { praesens: 'liegt', praeteritum: 'lag', perfekt: 'hat gelegen' },
      advanced: { synonyms: ['sich befinden'], opposites: ['stehen'], collocations: ['in Führung liegen', 'auf dem Tisch liegen'] } },
    { de: 'mehrfach', pos: 'adverb', level: 'B1', en: 'repeatedly, multiple times', hi: 'बार-बार',
      ex: 'Ich habe ihn mehrfach angerufen.', exEn: 'I called him repeatedly.', exHi: 'Maine use baar-baar phone kiya.',
      ex2: 'Der Fehler ist mehrfach aufgetreten.', ex2En: 'The error occurred multiple times.', ex2Hi: 'Galti kai baar hui.',
      advanced: { synonyms: ['wiederholt', 'mehrmals'], opposites: ['einmal'], collocations: ['mehrfach versuchen', 'mehrfach anrufen'] } },
    { de: 'obwohl', pos: 'grammar', level: 'B1', en: 'although, even though', hi: 'हालांकि, बावजूद',
      ex: 'Obwohl es regnet, gehen wir spazieren.', exEn: 'Although it\'s raining, we\'re going for a walk.', exHi: 'Halanki barish ho rahi hai, hum tehalne jaate hain.',
      ex2: 'Obwohl er müde war, hat er weitergearbeitet.', ex2En: 'Although he was tired, he kept working.', ex2Hi: 'Halanki woh thaka hua tha, usne kaam karna jaari rakha.',
      advanced: { synonyms: ['trotzdem (as adverb, not conjunction)'], opposites: [], collocations: ['Obwohl … , Hauptsatz.'] } },
    { de: 'offenbar', pos: 'adverb', level: 'B1', en: 'apparently, obviously', hi: 'ज़ाहिर है, प्रतीत होता है',
      ex: 'Offenbar hat er die Nachricht nicht gelesen.', exEn: 'Apparently he didn\'t read the message.', exHi: 'Zahir hai usne sandesh nahi padha.',
      ex2: 'Sie ist offenbar schon gegangen.', ex2En: 'She has apparently already left.', ex2Hi: 'Woh zahir taur par pehle hi chali gayi.',
      advanced: { synonyms: ['anscheinend', 'wohl'], opposites: [], collocations: ['offenbar nicht', 'ganz offenbar'] } },
    { de: 'schiefgehen', pos: 'verb', level: 'B1', en: 'to go wrong', hi: 'गलत होना',
      ex: 'Bei der Präsentation ist alles schiefgegangen.', exEn: 'Everything went wrong during the presentation.', exHi: 'Presentation ke dauran sab kuch galat ho gaya.',
      ex2: 'Hoffentlich geht heute nichts schief.', ex2En: 'Hopefully nothing goes wrong today.', ex2Hi: 'Ummeed hai aaj kuch bhi galat na ho.',
      conj: { praesens: 'geht schief', praeteritum: 'ging schief', perfekt: 'ist schiefgegangen' },
      advanced: { synonyms: ['misslingen', 'scheitern'], opposites: ['gelingen', 'klappen'], collocations: ['etwas geht schief', 'alles ist schiefgegangen'] } },
    { de: 'solche', pos: 'pronoun', level: 'B1', en: 'such, of that kind', hi: 'ऐसे, इस तरह के',
      ex: 'Solche Ideen hatte ich noch nie.', exEn: 'I\'ve never had such ideas.', exHi: 'Mujhe kabhi aise vichar nahi aaye the.',
      ex2: 'Mit solchen Problemen kenne ich mich aus.', ex2En: 'I know my way around such problems.', ex2Hi: 'Aise samasyaon ke saath mujhe anubhav hai.',
      advanced: { synonyms: ['derartige', 'so ein'], opposites: [], collocations: ['solche Leute', 'so etwas wie solche'] } },
    { de: 'spazieren', pos: 'verb', level: 'B1', en: 'to walk, stroll (spazieren gehen)', hi: 'टहलना',
      ex: 'Wir gehen jeden Abend spazieren.', exEn: 'We go for a walk every evening.', exHi: 'Hum har shaam tehalne jaate hain.',
      ex2: 'Sie ist am Fluss entlang spaziert.', ex2En: 'She strolled along the river.', ex2Hi: 'Woh nadi ke kinare tehli.',
      conj: { praesens: 'geht spazieren', praeteritum: 'ging spazieren', perfekt: 'ist spazieren gegangen' },
      advanced: { synonyms: ['schlendern', 'flanieren'], opposites: ['rennen', 'hetzen'], collocations: ['spazieren gehen', 'am Strand spazieren'] } },
    { de: 'tragen', pos: 'verb', level: 'B1', en: 'to carry, to wear', hi: 'ले जाना, पहनना',
      ex: 'Er trägt den Koffer zum Auto.', exEn: 'He carries the suitcase to the car.', exHi: 'Woh suitcase gaadi tak le jaata hai.',
      ex2: 'Sie trägt heute ein blaues Kleid.', ex2En: 'She\'s wearing a blue dress today.', ex2Hi: 'Woh aaj neela kapda pehni hui hai.',
      conj: { praesens: 'trägt', praeteritum: 'trug', perfekt: 'hat getragen' },
      advanced: { synonyms: ['schleppen', 'anhaben'], opposites: ['ablegen'], collocations: ['einen Koffer tragen', 'Kleidung tragen'] } },
    { de: 'weg sein', pos: 'idiom', level: 'B1', en: 'to be gone', hi: 'गायब होना',
      ex: 'Mein Schlüssel ist plötzlich weg.', exEn: 'My key is suddenly gone.', exHi: 'Meri chaabi achanak gayab ho gayi.',
      ex2: 'Nach dem Sturm war das ganze Zelt weg.', ex2En: 'After the storm, the whole tent was gone.', ex2Hi: 'Toofan ke baad, poora tambu gayab tha.',
      advanced: { synonyms: ['verschwunden sein', 'verloren sein'], opposites: ['da sein'], collocations: ['ganz weg sein', 'plötzlich weg sein'] } },
    { de: 'Abenteuer', art: 'das', gender: 'n', plural: 'Abenteuer', pos: 'noun', level: 'B1', en: 'adventure', hi: 'रोमांच',
      ex: 'Der Urlaub war ein echtes Abenteuer.', exEn: 'The holiday was a real adventure.', exHi: 'Chutti ek sacha romanch thi.',
      ex2: 'Sie sucht immer neue Abenteuer.', ex2En: 'She\'s always looking for new adventures.', ex2Hi: 'Woh hamesha naye romanch dhundhti hai.',
      advanced: { synonyms: ['Erlebnis'], opposites: ['Routine', 'Alltag'], collocations: ['ein Abenteuer erleben', 'auf Abenteuer aus sein'] } },
    { de: 'Boot', art: 'das', gender: 'n', plural: 'Boote', pos: 'noun', level: 'B1', en: 'boat', hi: 'नाव',
      ex: 'Wir sind mit dem Boot zur Insel gefahren.', exEn: 'We took the boat to the island.', exHi: 'Hum naav se dweep gaye.',
      ex2: 'Das Boot liegt am Steg.', ex2En: 'The boat is at the jetty.', ex2Hi: 'Naav ghaat par hai.',
      advanced: { synonyms: ['Schiff (larger)'], opposites: [], collocations: ['Boot fahren', 'ein Boot mieten'] } },
    { de: 'Eimer', art: 'der', gender: 'm', plural: 'Eimer', pos: 'noun', level: 'B1', en: 'bucket', hi: 'बाल्टी',
      ex: 'Der Eimer ist ins Meer gefallen.', exEn: 'The bucket fell into the sea.', exHi: 'Baalti samudra mein gir gayi.',
      ex2: 'Kannst du mir den Eimer bringen?', ex2En: 'Can you bring me the bucket?', ex2Hi: 'Kya tum mujhe baalti la sakte ho?',
      advanced: { synonyms: [], opposites: [], collocations: ['ein Eimer Wasser', 'der Eimer ist weg'] } },
    { de: 'Einfall', art: 'der', gender: 'm', plural: 'Einfälle', pos: 'noun', level: 'B1', en: 'idea, notion', hi: 'विचार',
      ex: 'Das war ein guter Einfall!', exEn: 'That was a good idea!', exHi: 'Yeh ek accha vichar tha!',
      ex2: 'Sein Einfall hat uns alle überrascht.', ex2En: 'His idea surprised us all.', ex2Hi: 'Uske vichar ne hum sabko charaka diya.',
      advanced: { synonyms: ['Idee', 'Gedanke'], opposites: [], collocations: ['einen Einfall haben', 'ein guter Einfall'] } },
    { de: 'Forumstext', art: 'der', gender: 'm', plural: 'Forumstexte', pos: 'noun', level: 'B1', en: 'forum post/text', hi: 'फ़ोरम पोस्ट',
      ex: 'Ich habe einen Forumstext über Reisen geschrieben.', exEn: 'I wrote a forum post about travel.', exHi: 'Maine yatra ke bare mein ek forum post likhi.',
      ex2: 'Der Forumstext bekam viele Antworten.', ex2En: 'The forum post got many replies.', ex2Hi: 'Forum post ko kai jawaab mile.',
      advanced: { synonyms: ['Beitrag'], opposites: [], collocations: ['einen Forumstext schreiben', 'einen Forumstext lesen'] } },
    { de: 'Kofferraum', art: 'der', gender: 'm', plural: 'Kofferräume', pos: 'noun', level: 'B1', en: 'car boot, trunk', hi: 'डिक्की',
      ex: 'Die Koffer sind im Kofferraum.', exEn: 'The suitcases are in the car boot.', exHi: 'Suitcases dicky mein hain.',
      ex2: 'Der Kofferraum ist zu klein für alles.', ex2En: 'The boot is too small for everything.', ex2Hi: 'Dicky sab kuch ke liye bahut chhoti hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['etwas in den Kofferraum legen', 'den Kofferraum öffnen'] } },
    { de: 'Strandurlaub', art: 'der', gender: 'm', plural: 'Strandurlaube', pos: 'noun', level: 'B1', en: 'beach holiday', hi: 'तट पर छुट्टी',
      ex: 'Wir machen dieses Jahr Strandurlaub.', exEn: 'We\'re having a beach holiday this year.', exHi: 'Hum is saal beach par chutti bita rahe hain.',
      ex2: 'Ein Strandurlaub ist sehr entspannend.', ex2En: 'A beach holiday is very relaxing.', ex2Hi: 'Beach holiday bahut aaramdayak hoti hai.',
      advanced: { synonyms: [], opposites: ['Städtereise', 'Bergurlaub'], collocations: ['Strandurlaub machen', 'einen Strandurlaub buchen'] } },
    { de: 'Badewanne', art: 'die', gender: 'f', plural: 'Badewannen', pos: 'noun', level: 'B1', en: 'bathtub', hi: 'बाथटब',
      ex: 'Die Badewanne ist voller Wasser.', exEn: 'The bathtub is full of water.', exHi: 'Bathtub pani se bhara hai.',
      ex2: 'Er liegt gern lange in der Badewanne.', ex2En: 'He likes to lie in the bathtub for a long time.', ex2Hi: 'Use bathtub mein lambe samay tak lete rehna pasand hai.',
      advanced: { synonyms: [], opposites: ['Dusche'], collocations: ['in der Badewanne liegen', 'die Badewanne einlassen'] } },
    { de: 'Bild-Geschichte', art: 'die', gender: 'f', plural: 'Bild-Geschichten', pos: 'noun', level: 'B1', en: 'picture story', hi: 'चित्र कहानी',
      ex: 'Die Kinder haben eine Bild-Geschichte gemalt.', exEn: 'The children painted a picture story.', exHi: 'Bachchon ne ek chitra kahani banayi.',
      ex2: 'Die Bild-Geschichte erzählt von einem Abenteuer.', ex2En: 'The picture story tells of an adventure.', ex2Hi: 'Chitra kahani ek romanch ke baare mein batati hai.',
      advanced: { synonyms: ['Comic'], opposites: [], collocations: ['eine Bild-Geschichte zeichnen', 'eine Bild-Geschichte erzählen'] } },
    { de: 'Perspektive', art: 'die', gender: 'f', plural: 'Perspektiven', pos: 'noun', level: 'B1', en: 'perspective', hi: 'दृष्टिकोण',
      ex: 'Aus ihrer Perspektive war alles in Ordnung.', exEn: 'From her perspective, everything was fine.', exHi: 'Uske drishtikon se, sab theek tha.',
      ex2: 'Wir brauchen eine neue Perspektive auf das Problem.', ex2En: 'We need a new perspective on the problem.', ex2Hi: 'Humein samasya par ek naya drishtikon chahiye.',
      advanced: { synonyms: ['Sichtweise', 'Blickwinkel'], opposites: [], collocations: ['aus ihrer Perspektive', 'die Perspektive wechseln'] } },
    { de: 'Stadtatmosphäre', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'city atmosphere', hi: 'शहर का माहौल',
      ex: 'Die Stadtatmosphäre in Berlin gefällt mir.', exEn: 'I like the city atmosphere in Berlin.', exHi: 'Mujhe Berlin ka shahar wala mahaul pasand hai.',
      ex2: 'Nach dem Strandurlaub vermisse ich die Stadtatmosphäre.', ex2En: 'After the beach holiday, I miss the city atmosphere.', ex2Hi: 'Beach holiday ke baad, mujhe shahar ka mahaul yaad aata hai.',
      advanced: { synonyms: ['Großstadtflair'], opposites: ['Landleben'], collocations: ['die Stadtatmosphäre genießen'] } },
    { de: 'Strandpromenade', art: 'die', gender: 'f', plural: 'Strandpromenaden', pos: 'noun', level: 'B1', en: 'beach promenade', hi: 'समुद्र तट पथ',
      ex: 'Wir sind die Strandpromenade entlang gelaufen.', exEn: 'We walked along the beach promenade.', exHi: 'Hum samudra tat path ke saath saath chale.',
      ex2: 'Abends ist die Strandpromenade sehr voll.', ex2En: 'In the evening, the beach promenade gets very crowded.', ex2Hi: 'Shaam ko samudra tat path bahut bhida hota hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['die Strandpromenade entlanggehen'] } },
    { de: 'Wiese', art: 'die', gender: 'f', plural: 'Wiesen', pos: 'noun', level: 'B1', en: 'meadow', hi: 'घास का मैदान',
      ex: 'Die Kinder spielen auf der Wiese.', exEn: 'The children are playing in the meadow.', exHi: 'Bachche maidan mein khel rahe hain.',
      ex2: 'Hinter dem Strand liegt eine grüne Wiese.', ex2En: 'Behind the beach lies a green meadow.', ex2Hi: 'Samudra tat ke peeche ek hara-bhara maidan hai.',
      advanced: { synonyms: ['Rasen', 'Grünfläche'], opposites: [], collocations: ['auf der Wiese liegen', 'eine grüne Wiese'] } },
    { de: 'verzweifelt', pos: 'adjective', level: 'B1', en: 'desperate', hi: 'हताश',
      ex: 'Er suchte verzweifelt nach seinem Schlüssel.', exEn: 'He desperately searched for his key.', exHi: 'Woh hataashaipurvak apni chaabi dhoondh raha tha.',
      ex2: 'Sie war verzweifelt, weil sie den Bus verpasst hatte.', ex2En: 'She was desperate because she\'d missed the bus.', ex2Hi: 'Woh hataash thi kyunki uski bus chhoot gayi thi.',
      advanced: { synonyms: ['hoffnungslos', 'ratlos'], opposites: ['gelassen', 'zuversichtlich'], collocations: ['verzweifelt suchen', 'verzweifelt sein'] } },
    { de: 'Zeug', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'stuff, things', hi: 'सामान',
      ex: 'Wessen Zeug liegt auf dem Tisch?', exEn: 'Whose stuff is on the table?', exHi: 'Table par kiska saaman rakha hai?',
      ex2: 'Ich muss mein ganzes Zeug einpacken.', ex2En: 'I have to pack all my stuff.', ex2Hi: 'Mujhe apna saara saaman pack karna hai.',
      advanced: { synonyms: ['Sachen', 'Kram'], opposites: [], collocations: ['mein ganzes Zeug', 'Zeug liegen lassen'] } },
    { de: 'Kausalsatz', art: 'der', gender: 'm', plural: 'Kausalsätze', pos: 'noun', level: 'B1', en: 'causal clause', hi: 'कारण-वाचक वाक्य',
      ex: 'Ein Kausalsatz mit "weil" nennt einen Grund.', exEn: 'A causal clause with "weil" states a reason.', exHi: '"weil" wala kaaran-vachak vaakya ek kaaran batata hai.',
      ex2: 'Auch "da" leitet einen Kausalsatz ein.', ex2En: '"da" also introduces a causal clause.', ex2Hi: '"da" bhi ek kaaran-vachak vaakya shuru karta hai.',
      advanced: { synonyms: ['Grundsatz'], opposites: ['Konzessivsatz'], collocations: ['ein Kausalsatz mit weil/da'] } },
    { de: 'Konzessivsatz', art: 'der', gender: 'm', plural: 'Konzessivsätze', pos: 'noun', level: 'B1', en: 'concessive clause', hi: 'रियायती वाक्य',
      ex: 'Ein Konzessivsatz mit "obwohl" zeigt einen Gegensatz.', exEn: 'A concessive clause with "obwohl" shows a contrast.', exHi: '"obwohl" wala riyaayati vaakya ek vipreet baat dikhata hai.',
      ex2: 'Konzessivsätze beginnen oft mit "obwohl".', ex2En: 'Concessive clauses often begin with "obwohl".', ex2Hi: 'Riyaayati vaakya aksar "obwohl" se shuru hote hain.',
      advanced: { synonyms: [], opposites: ['Kausalsatz'], collocations: ['ein Konzessivsatz mit obwohl'] } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Grundstruktur: Nebensatz mit Verb am Ende',
      body: [
        '<span class="de r-conjunction">weil</span>, <span class="de r-conjunction">da</span>, and <span class="de r-conjunction">obwohl</span> are all subordinating conjunctions: they introduce a subordinate clause in which the finite (conjugated) verb moves to the very end.',
        'Structure: <b>Hauptsatz</b>, <span class="de r-conjunction">weil/da/obwohl</span> + <b>Subjekt</b> … <b>Verb (Satzende)</b>. Or reversed: <span class="de r-conjunction">Weil/Da/Obwohl</span> + <b>Subjekt</b> … <b>Verb</b>, <b>Verb</b> + <b>Subjekt</b> (Hauptsatz).'
      ],
      example: [
        { html: '<span class="de">Ich bin müde, weil ich lange <span class="r-verb">gearbeitet habe</span>.</span>' },
        { html: '<span class="de">Da ich krank <span class="r-verb">bin</span>, bleibe ich zu Hause.</span>' },
        { html: '<span class="de">Obwohl es <span class="r-verb">regnet</span>, gehen wir spazieren.</span>' }
      ],
      hinglish: 'weil, da, aur obwohl teeno hi subordinating conjunctions hain — inke clause mein finite verb hamesha sabse end mein jaata hai. Agar clause pehle aata hai, to comma ke baad seedha Hauptsatz ka verb aata hai (subject se pehle).'
    },
    {
      title: 'weil — der neutrale, alltägliche Grund',
      body: [
        '<span class="de r-conjunction">weil</span> is the most common, most neutral way to give a reason — everyday spoken and written German. It usually follows the main clause.'
      ],
      example: [
        { html: '<span class="de">Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.</span>' },
        { html: '<span class="de">Max war enttäuscht, weil sein Eimer weg war.</span>' },
        { html: '<span class="de">Wir bleiben zu Hause, weil es regnet.</span>' }
      ],
      hinglish: 'weil sabse aam aur neutral tareeka hai reason batane ka — roz-marra ki bolchaal aur likhawat dono mein. Yeh aksar Hauptsatz ke baad aata hai.'
    },
    {
      title: 'da — der formelle, bereits bekannte Grund',
      body: [
        '<span class="de r-conjunction">da</span> also gives a reason, but reads more formal or written, and is typically used when the reason is already known/obvious to the listener. <span class="de r-conjunction">da</span> most often starts the sentence.'
      ],
      example: [
        { html: '<span class="de">Da ich krank bin, bleibe ich heute zu Hause.</span>' },
        { html: '<span class="de">Da mein Chef den Text wollte, habe ich die ganze Nacht gearbeitet.</span>' },
        { html: '<span class="de">Da wir schon einmal dort waren, kennen wir die Wiese.</span>' }
      ],
      hinglish: 'da bhi reason batata hai, par yeh zyada formal ya likhit lagta hai, aur tab aata hai jab reason pehle se pata ho. da aksar sentence ki shuruaat mein aata hai.'
    },
    {
      title: 'obwohl — der unerwartete Gegensatz',
      body: [
        '<span class="de r-conjunction">obwohl</span> introduces a concessive clause: something happens despite an obstacle or expectation — the opposite of what you\'d predict.'
      ],
      example: [
        { html: '<span class="de">Obwohl es regnet, gehen wir spazieren.</span>' },
        { html: '<span class="de">Obwohl das stressig klingt, hast du es geschafft.</span>' },
        { html: '<span class="de">Obwohl so viel schiefgegangen ist, war die Reise toll.</span>' }
      ],
      hinglish: '<b>obwohl</b> contrast batata hai — kuch kisi rukawat ya ummeed ke bawajood ho jaata hai, yaani jo tum expect karte ho uska ulta.'
    },
    {
      title: 'Vergleich: weil vs. da vs. obwohl',
      body: [
        'All three change verb position identically, but their MEANING differs. Use this table to choose the right one.'
      ],
      table: {
        head: ['Connector', 'Job', 'Feel'],
        rows: [
          ['weil', 'Reason', 'Neutral, everyday, spoken'],
          ['da', 'Reason (known/given)', 'Formal, written, often clause-initial'],
          ['obwohl', 'Contrast', 'Unexpected — opposite of what you\'d predict']
        ]
      },
      note: 'weil vs. da: both give reasons — da is not "more correct", just more formal, and often used when the reason is already obvious. weil vs. obwohl: weil explains WHY something happens; obwohl explains that something happens DESPITE a reason. da vs. obwohl: da gives a cause; obwohl gives a contrast — they can never be swapped for each other.',
      hinglish: 'Teeno hi verb ko end mein bhejte hain, lekin matlab alag hai: weil = neutral reason; da = formal ya pehle se pata reason; obwohl = contrast (jo tum expect karte ho uska ulta hota hai).'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These four mistakes are extremely common at B1 — usually verb position, or swapping obwohl for a reason-connector by mistake.'
      ],
      mistakes: [
        { wrong: 'weil ich bin müde', right: 'weil ich müde bin', why: 'The finite verb (bin) must go to the very end of the weil-clause, not stay in position 2.' },
        { wrong: 'Da ich bin krank...', right: 'Da ich krank bin, ...', why: 'Same rule for da — verb to the end, not "ich bin krank".' },
        { wrong: 'Obwohl regnet es...', right: 'Obwohl es regnet, ...', why: 'The subject (es) comes right after obwohl; the verb (regnet) still goes to the end of that clause.' },
        { wrong: 'Obwohl weil...', right: 'Choose ONE connector', why: 'Never combine two subordinating conjunctions — pick either obwohl (contrast) or weil (reason), not both.' }
      ],
      hinglish: 'Sabse aam galti hai verb ko end mein na bhejna. Doosri galti hai obwohl aur weil ko ek saath jodna — hamesha sirf ek connector chuno, jo matlab ke hisaab se sahi ho.'
    },
    {
      title: 'Wortstellung & Entscheidungshilfe',
      body: [
        '<b>Word order (clause at the end):</b> Hauptsatz (Verb Position 2), [comma], weil/da/obwohl + Subjekt … Verb (Satzende).',
        '<b>Word order (clause first):</b> Weil/Da/Obwohl + Subjekt … Verb (Satzende), [comma], Verb + Subjekt … (Hauptsatz — verb-second).',
        '<b>Quick decision guide:</b>'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Are you giving a normal, everyday reason?', 'weil'],
          ['Are you giving a formal reason, or one the listener already knows?', 'da'],
          ['Are you describing something unexpected, despite an obstacle?', 'obwohl']
        ]
      },
      note: 'Whichever connector you choose, never forget: the finite verb of that clause goes to the very end — no exceptions.',
      hinglish: 'Agar clause pehle Hauptsatz ke baad ho: Hauptsatz, weil/da/obwohl + Subjekt … Verb (end mein). Agar clause pehle ho: Weil/Da/Obwohl + Subjekt … Verb, phir Verb + Subjekt (Hauptsatz, verb-second). Decision guide: (1) normal reason → weil. (2) formal ya pehle se pata reason → da. (3) koi aisi baat jo expect nahi ki jaati → obwohl.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Abenteuer am Strand',
    titleEn: 'An adventure at the beach',
    tokens: [
      { w: 'Letztes', role: 'r-time', en: 'last', hi: 'पिछला', type: 'Adjective' },
      { w: 'Jahr', role: 'r-time', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', type: 'Verb · haben' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', type: 'Name' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Strandurlaub', role: 'r-akkusativ', en: 'beach holiday', hi: 'तट पर छुट्टी', type: 'Noun · masc.', why: 'der Strandurlaub (this chapter).' },
      { w: 'geplant', role: 'r-verb', en: 'planned', hi: 'योजना बनाई', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Da', role: 'r-conjunction', en: 'as/since', hi: 'चूंकि', type: 'Konjunktion · da', why: 'da introduces a formal, already-known reason.' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Wetter', role: 'r-akkusativ', en: 'weather', hi: 'मौसम', type: 'Noun · neut.' },
      { w: 'perfekt', role: 'r-akkusativ', en: 'perfect', hi: 'बिल्कुल सही', type: 'Adjective · Akk.' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'था', type: 'Verb · sein (Satzende)', why: 'Verb at the end of the da-clause: war.' },
      { w: ',', plain: true },
      { w: 'mieteten', role: 'r-verb', en: 'rented', hi: 'किराए पर लिया', type: 'Verb · mieten' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'kleines', role: 'r-akkusativ', en: 'small', hi: 'छोटा', type: 'Adjective · Akk.' },
      { w: 'Boot', role: 'r-akkusativ', en: 'boat', hi: 'नाव', type: 'Noun · neut.', why: 'das Boot (this chapter).' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl introduces an unexpected contrast.' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'nie', role: 'r-negation', en: 'never', hi: 'कभी नहीं', type: 'Negation' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Boot', role: 'r-akkusativ', en: 'boat', hi: 'नाव', type: 'Noun · neut.' },
      { w: 'gefahren', role: 'r-verb', en: 'driven (Satzende)', hi: 'चलाया', type: 'Verb · Partizip II (Satzende)' },
      { w: 'war', role: 'r-verb', en: 'had (Satzende)', hi: 'था', type: 'Verb · sein (Satzende)', why: 'Verb at the end of the obwohl-clause: gefahren war.' },
      { w: ',', plain: true },
      { w: 'wollte', role: 'r-verb', en: 'wanted', hi: 'चाहता था', type: 'Verb · Modalverb' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'unbedingt', role: 'r-adverb', en: 'absolutely', hi: 'ज़रूर', type: 'Adverb' },
      { w: 'versuchen', role: 'r-verb', en: 'to try', hi: 'कोशिश करना', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'machten', role: 'r-verb', en: 'made', hi: 'किया', type: 'Verb · machen' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Boot', role: 'r-akkusativ', en: 'boat', hi: 'नाव', type: 'Noun · neut.' },
      { w: 'am', role: 'r-place', en: 'at the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Steg', role: 'r-place', en: 'jetty', hi: 'घाट', type: 'Noun · masc.' },
      { w: 'fest', role: 'r-verb', en: '(festmachen)', hi: '—', type: 'Verbpartikel', why: 'festmachen (this chapter): to fasten, moor.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'fuhren', role: 'r-verb', en: 'drove', hi: 'चले', type: 'Verb · fahren' },
      { w: 'los', role: 'r-verb', en: '(losfahren)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', type: 'Konjunktion · weil', why: 'weil introduces a neutral, everyday reason.' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Wellen', role: 'r-subject', en: 'waves', hi: 'लहरें', type: 'Noun · plural' },
      { w: 'hoch', role: 'r-subject', en: 'high', hi: 'ऊँची', type: 'Adjective' },
      { w: 'waren', role: 'r-verb', en: 'were (Satzende)', hi: 'थीं', type: 'Verb · sein (Satzende)', why: 'Verb at the end of the weil-clause: waren.' },
      { w: ',', plain: true },
      { w: 'fiel', role: 'r-verb', en: 'fell', hi: 'गिर गई', type: 'Verb · fallen' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', type: 'Name' },
      { w: 'plötzlich', role: 'r-adverb', en: 'suddenly', hi: 'अचानक', type: 'Adverb' },
      { w: 'sein', role: 'r-subject', en: 'his', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Eimer', role: 'r-subject', en: 'bucket', hi: 'बाल्टी', type: 'Noun · masc.', why: 'der Eimer (this chapter).' },
      { w: 'ins', role: 'r-place', en: 'into the', hi: 'में', type: 'Contraction · in das' },
      { w: 'Meer', role: 'r-place', en: 'sea', hi: 'समुद्र', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', type: 'Verb · sein' },
      { w: 'total', role: 'r-adverb', en: 'totally', hi: 'बिल्कुल', type: 'Adverb' },
      { w: 'enttäuscht', role: 'r-adjective', en: 'disappointed', hi: 'निराश', type: 'Adjective', why: 'enttäuscht (this chapter).' },
      { w: ',', plain: true },
      { w: 'da', role: 'r-conjunction', en: 'as/since', hi: 'चूंकि', type: 'Konjunktion · da' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Eimer', role: 'r-akkusativ', en: 'bucket', hi: 'बाल्टी', type: 'Noun · masc.' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', type: 'Adverb' },
      { w: 'gemocht', role: 'r-verb', en: 'liked (Satzende)', hi: 'पसंद किया (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: 'hatte', role: 'r-verb', en: 'had (Satzende)', hi: 'था', type: 'Verb · haben (Satzende)', why: 'Verb at the end of the da-clause: gemocht hatte.' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', type: 'Adverb' },
      { w: 'viel', role: 'r-adverb', en: 'much', hi: 'बहुत', type: 'Adverb' },
      { w: 'schiefgegangen', role: 'r-verb', en: 'went wrong (Satzende)', hi: 'गलत हुआ', type: 'Trennbares Verb · Partizip II (Satzende)', why: 'schiefgehen (this chapter).' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'था', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'blieben', role: 'r-verb', en: 'remained', hi: 'रहे', type: 'Verb · bleiben' },
      { w: 'die', role: 'r-subject', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', type: 'Noun · plural' },
      { w: 'fröhlich', role: 'r-adverb', en: 'cheerful', hi: 'खुशमिज़ाज', type: 'Adjective' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'nannten', role: 'r-verb', en: 'called', hi: 'बुलाया', type: 'Verb · nennen' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Fahrt', role: 'r-akkusativ', en: 'trip', hi: 'सफ़र', type: 'Noun · fem.' },
      { w: 'ihr', role: 'r-akkusativ', en: 'their', hi: 'उनका', type: 'Possessivartikel' },
      { w: 'größtes', role: 'r-akkusativ', en: 'greatest', hi: 'सबसे बड़ा', type: 'Adjective · Superlativ' },
      { w: 'Abenteuer', role: 'r-akkusativ', en: 'adventure', hi: 'रोमांच', type: 'Noun · neut.', why: 'das Abenteuer (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'Last year, Max and Rohan had planned a beach holiday. Since the weather was perfect, they rented a small boat. Although Max had never driven a boat before, he absolutely wanted to try it. They fastened the boat at the jetty and set off. Because the waves were high, Max\'s bucket suddenly fell into the sea. He was totally disappointed, since he had liked the bucket very much. Although so much went wrong, the friends stayed cheerful and called the trip their greatest adventure.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_002_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kommst du morgen wirklich mit an den Strand, obwohl es nur zwölf Grad hat?', en: 'Are you really coming to the beach tomorrow, even though it\'s only twelve degrees?' },
      { id: 'B1_002_L002', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich? Ich weiß noch nicht. Da es so kalt ist, habe ich eigentlich keine Lust mehr.', en: 'Honestly? I don\'t know yet. Since it\'s so cold, I don\'t really feel like it anymore.' },
      { id: 'B1_002_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Schade. Ich gehe trotzdem, weil ich diese Woche einfach mal raus muss.', en: 'Too bad. I\'m going anyway, because I really just need to get out this week.' },
      { id: 'B1_002_L004', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Na gut — wenn du mir versprichst, dass wir danach etwas Warmes trinken, komme ich doch mit.', en: 'Alright — if you promise we\'ll get something warm to drink afterwards, I\'ll come after all.' }
    ],
    transcript: 'Kommst du morgen wirklich mit an den Strand, obwohl es nur zwölf Grad hat? Ehrlich? Ich weiß noch nicht. Da es so kalt ist, habe ich eigentlich keine Lust mehr. Schade. Ich gehe trotzdem, weil ich diese Woche einfach mal raus muss. Na gut — wenn du mir versprichst, dass wir danach etwas Warmes trinken, komme ich doch mit.',
    translation: 'Are you really coming to the beach tomorrow, even though it\'s only twelve degrees? Honestly? I don\'t know yet. Since it\'s so cold, I don\'t really feel like it anymore. Too bad. I\'m going anyway, because I really just need to get out this week. Alright — if you promise we\'ll get something warm to drink afterwards, I\'ll come after all.',
    tokens: [
      { w: 'Kommst' },
      { w: 'du' },
      { w: 'morgen', role: 'r-adverb', en: 'tomorrow', type: 'Adverb' },
      { w: 'wirklich' },
      { w: 'mit' },
      { w: 'an' },
      { w: 'den' },
      { w: 'Strand' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'es' },
      { w: 'nur' },
      { w: 'zwölf' },
      { w: 'Grad' },
      { w: 'hat' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: 'noch' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'es' },
      { w: 'so' },
      { w: 'kalt' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'habe' },
      { w: 'ich' },
      { w: 'eigentlich' },
      { w: 'keine' },
      { w: 'Lust' },
      { w: 'mehr' },
      { w: '.', plain: true },
      { w: 'Schade' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'gehe' },
      { w: 'trotzdem' },
      { w: ',', plain: true },
      { w: 'weil' },
      { w: 'ich' },
      { w: 'diese', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
      { w: 'Woche' },
      { w: 'einfach' },
      { w: 'mal', role: 'r-adverb', en: 'once', hi: 'ज़रा', pron: 'mahl', type: 'Adverb' },
      { w: 'raus' },
      { w: 'muss' },
      { w: '.', plain: true },
      { w: 'Na', role: 'plain', en: 'well' },
      { w: 'gut' },
      { w: '—', plain: true },
      { w: 'wenn' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'versprichst' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'danach' },
      { w: 'etwas' },
      { w: 'Warmes', role: 'plain', en: 'warm' },
      { w: 'trinken' },
      { w: ',', plain: true },
      { w: 'komme' },
      { w: 'ich' },
      { w: 'doch' },
      { w: 'mit' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum zögert Frauke bei dem Strandausflug?', qEn: 'Why is Frauke hesitant about the beach trip?', options: ['Sie muss arbeiten', 'Es ist zu kalt', 'Sie mag Timo nicht', 'Sie ist krank'], optionsEn: ['She has to work', 'It\'s too cold', 'She doesn\'t like Timo', 'She\'s sick'], answer: 1,
        explain: '"Da es so kalt ist, habe ich eigentlich keine Lust mehr."' },
      { q: 'Was überzeugt Frauke mitzukommen?', qEn: 'What convinces Frauke to come?', options: ['Ein Rabatt', 'Das Versprechen eines warmen Getränks danach', 'Eine bessere Wettervorhersage', 'Eine Freundin kommt mit'], optionsEn: ['A discount', 'A promise of a warm drink afterwards', 'Better weather forecast', 'A friend joining'], answer: 1,
        explain: '"Wenn du mir versprichst, dass wir danach etwas Warmes trinken, komme ich doch mit."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt, ob du morgen an den Strand mitkommst. Es hat zwölf Grad.", taskEn: "Your friend asks whether you're coming to the beach tomorrow. It's twelve degrees.", de: "Ich komme mit, obwohl es kalt ist.", en: "I'll come along, even though it's cold." },
    { task: "Dein Freund fragt, warum du keine Lust mehr hast.", taskEn: "Your friend asks why you don't fancy it any more.", de: "Da es so kalt ist, habe ich keine Lust mehr.", en: "Since it's so cold, I don't fancy it any more." },
    { task: "Ein Freund fragt, warum du das Boot nicht mitnimmst.", taskEn: "A friend asks why you're not bringing the boat.", de: "Weil es nicht in den Kofferraum passt.", en: "Because it doesn't fit in the boot." },
    { task: "Deine Kollegin fragt, warum du enttäuscht bist.", taskEn: "Your colleague asks why you're disappointed.", de: "Ich bin enttäuscht, weil der Ausflug mehrfach schiefgegangen ist.", en: "I'm disappointed because the trip has gone wrong several times." },
    { task: "Deine Freundin fragt, warum du trotzdem spazieren gehst.", taskEn: "Your friend asks why you're going for a walk anyway.", de: "Obwohl es regnet, gehe ich spazieren.", en: "Even though it's raining, I'm going for a walk." },
    { task: "Ein Freund fragt, warum du das Abenteuer machst.", taskEn: "A friend asks why you're going on the adventure.", de: "Da ich Bock auf ein Abenteuer habe, fahre ich mit.", en: "Since I fancy an adventure, I'm going along." },
    { task: "Rollenspiel: Ihr diskutiert, ob der Ausflug stattfindet.", taskEn: "Role-play: you discuss whether the trip happens.", de: "Ich bin dafür, weil das Wetter besser wird. — Ich bleibe hier, obwohl du recht hast.", en: "I'm in favour because the weather's improving. — I'll stay here, even though you're right." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short email to a friend (six to eight sentences) about a recent trip or decision — mention one reason with weil, one reason with da, and one contrast with obwohl. Explain what happened and how you felt.',
    starters: ['Ich war …, weil …', 'Da …, habe ich …', 'Obwohl …, war es …', 'Am Ende …'],
    placeholder: 'Liebe Priya, letztes Wochenende war ich am Strand, weil das Wetter so gut war …',
    minWords: 40
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich bin müde, ___ ich lange gearbeitet habe."',
      options: ['obwohl', 'weil', 'aber'],
      answer: 1,
      explain: 'weil gives a neutral, everyday reason: "Ich bin müde, weil ich lange gearbeitet habe."'
    },
    gap: {
      sentence: ['Obwohl es regnet, ', ' wir spazieren.'],
      gaps: [ { answer: 'gehen', accepts: ['gehen'] } ],
      explain: 'The main clause after an obwohl-clause uses verb-second word order: "…, gehen wir spazieren."'
    },
    match: {
      q: 'Match each connector to its job.',
      pairs: [
        { noun: 'weil', art: 'Neutral, everyday reason' },
        { noun: 'da', art: 'Formal or already-known reason' },
        { noun: 'obwohl', art: 'Unexpected contrast' }
      ]
    },
    builder: {
      target: 'Build: "Since I am sick, I am staying home."',
      bank: ['Da', 'ich', 'krank', 'bin', ',', 'bleibe', 'ich', 'zu', 'Hause', '.'],
      answer: ['Da', 'ich', 'krank', 'bin', ',', 'bleibe', 'ich', 'zu', 'Hause', '.'],
      roles: { 'Da': 'r-conjunction', 'ich': 'r-subject', 'bin': 'r-verb', 'bleibe': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ es regnet, gehen wir spazieren."', options: ['Weil', 'Obwohl', 'Da'], answer: 1,
      explain: 'obwohl signals an unexpected contrast: going for a walk despite the rain.' },
    { q: 'Which sentence has correct word order?', options: ['Weil ich bin müde.', 'Weil ich müde bin.', 'Weil bin ich müde.'], answer: 1,
      explain: 'The finite verb (bin) goes to the very end of a weil-clause.' },
    { q: 'Complete: "___ ich krank bin, bleibe ich zu Hause."', options: ['Obwohl', 'Da', 'Aber'], answer: 1,
      explain: 'da gives a reason that is simply given/known — and often opens the sentence.' },
    { q: 'Which connector introduces a CONTRAST, not a reason?', options: ['weil', 'da', 'obwohl'], answer: 2,
      explain: 'obwohl means "although" — it signals something happens despite an obstacle.' },
    { q: 'Complete: "Da es schon spät ___, fahren wir jetzt los."', options: ['ist', 'ist es', 'es ist'], answer: 0,
      explain: 'Verb-end word order: "Da es schon spät ist, …" — the subject (es) sits between da and the verb, and the verb comes last.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-conjunction', html: 'Use <span class="de r-conjunction">weil</span> for a neutral, everyday reason: <span class="de">Ich bin müde, weil ich gearbeitet habe.</span>' },
    { c: 'r-conjunction', html: 'Use <span class="de r-conjunction">da</span> for a formal or already-known reason, often at the start: <span class="de">Da ich krank bin, bleibe ich zu Hause.</span>' },
    { c: 'r-conjunction', html: 'Use <span class="de r-conjunction">obwohl</span> for an unexpected contrast: <span class="de">Obwohl es regnet, gehen wir spazieren.</span> The verb always goes to the end.' }
  ],
  revisionTips: [
    'Whenever you give a reason, ask: is this everyday (weil) or formal/already-known (da)?',
    'Whenever something happens despite an obstacle, reach for obwohl — never weil or da.',
    'Say the clause out loud and check the verb lands last: "weil ich müde bin", not "weil ich bin müde".'
  ]
};

window.CHAPTER = CHAPTER;
