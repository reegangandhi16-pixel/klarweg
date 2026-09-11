/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 22
   "brauchen + zu + Infinitiv" — expressing NO necessity:
   brauchen + (nicht) + zu + Infinitiv (Satzende). Contrasts with
   müssen (obligation). Covers reflexive verbs with brauchen.
   Teaches ONLY the negated form (brauchen nicht zu) as the
   natural everyday pattern.
   IMPORTANT: dialogue uses ONLY Katrin and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-22 list (49 items) — a
   banking/online-banking theme (Kontoeröffnung, Online-Banking,
   Dauerauftrag, IBAN, Kontoauszug, Kontoführungsgebühr…), an
   excellent natural fit for "you don't need to go to the bank,
   you don't need to fill out a form" — woven into the story and
   reading passage.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-22-brauchen-zu-infinitiv',
  phase: 'B1 · Phase 1',
  number: 22,
  title: 'brauchen + zu + Infinitiv',
  titleEn: 'Expressing "don\'t need to"',
  description: 'Ich brauche heute nicht zu arbeiten. Du brauchst nicht nervös zu sein. müssen says you HAVE to. brauchen nicht … zu says you DON\'T have to — the same zu + Infinitiv pattern you already know, now carrying the opposite meaning.',
  xp: 260,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 23, title: 'Reflexivpronomen: Akkusativ & Dativ', titleEn: 'Reflexive pronouns: Akkusativ & Dativ' , href: 'chapter-b1-23-reflexivpronomen-akkusativ-dativ.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>nothing you need to do.</em>',
    intro: 'Katrin sets up online banking while Timo reassures her it\'s easier than she thinks — she doesn\'t need to visit the bank, doesn\'t need to check her balance daily. müssen says what you have to do; brauchen nicht … zu says what you don\'t.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear brauchen nicht … zu contrast directly with müssen in the same conversation'
    ],
    scene: 'Katrin eröffnet ein Online-Konto',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Katrin', tokens: [
        { w: 'Muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Online-Banking', role: 'r-akkusativ', en: 'online banking', hi: 'ऑनलाइन बैंकिंग', pron: 'ON-line-ben-king', type: 'Noun · neut.' },
        { w: 'extra', role: 'r-adverb', en: 'extra', hi: 'अतिरिक्त', pron: 'EKS-tra', type: 'Adverb' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Bank', role: 'r-dativ', en: 'bank (dat.)', hi: 'बैंक', pron: 'bank', type: 'Noun · fem. dat.' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Must I go extra to the bank for the online banking?', hi: 'Kya mujhe online banking ke liye alag se bank jaana zaroori hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'brauchst', role: 'r-verb', en: 'need', hi: 'ज़रूरत नहीं है', pron: 'BROWKHST', type: 'Verb · brauchen (du)', why: 'brauchen + nicht + zu-Infinitiv = don\'t need to (this chapter).', ex: 'Du brauchst nicht zur Bank zu gehen.', exEn: 'You don\'t need to go to the bank.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Bank', role: 'r-akkusativ', en: 'bank', hi: 'बैंक', pron: 'bank', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, you don\'t need to go to the bank.', hi: 'Nahi, tumhe bank jaane ki zaroorat nahi hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Brauche', role: 'r-verb', en: 'do I need', hi: 'ज़रूरत है', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Benutzername', role: 'r-akkusativ', en: 'username', hi: 'उपयोगकर्ता नाम', pron: 'be-NUTS-er-nah-muh', type: 'Noun · masc.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'erstellen', role: 'r-verb', en: 'create', hi: 'बनाना', pron: 'er-SHTE-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do I need to create a username?', hi: 'Kya mujhe upyogkarta naam banaana chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'brauchst', role: 'r-verb', en: 'need', hi: 'ज़रूरत नहीं है', pron: 'BROWKHST', type: 'Verb · brauchen (du)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'kompliziert', role: 'r-adverb', en: 'complicated', hi: 'जटिल', pron: 'kom-pli-TSEERT', type: 'Adjective' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, but it doesn\'t need to be complicated.', hi: 'Haan, lekin ise jatil hone ki zaroorat nahi hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kontostand', role: 'r-akkusativ', en: 'account balance', hi: 'खाता शेष', pron: 'KON-to-shtant', type: 'Noun · masc.' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'prüfen', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'PRÜ-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Must I check the account balance every day?', hi: 'Kya mujhe har din khaata shesh jaanchna zaroori hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'brauchst', role: 'r-verb', en: 'need', hi: 'ज़रूरत नहीं है', pron: 'BROWKHST', type: 'Verb · brauchen (du)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, you don\'t need to do that every day.', hi: 'Nahi, tumhe yeh har din karne ki zaroorat nahi hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Hilfe', role: 'r-akkusativ', en: 'help', hi: 'मदद', pron: 'HIL-fuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Perfect! Thanks for your help.', hi: 'Badhiya! Tumhaari madad ke liye dhanyavaad.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-verb">müssen</span> says something IS necessary: <span class="de">Ich muss arbeiten.</span> <span class="de r-brauchen">brauchen nicht … zu</span> says something is NOT necessary: <span class="de">Ich brauche nicht zu arbeiten.</span> Same zu + Infinitiv pattern you already know — just carrying the opposite meaning, and almost always appearing with <span class="de">nicht</span> or <span class="de">kein-</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is BRAUCHEN + ZU + INFINITIV (B1 level only): brauchen (conjugated) + nicht/kein- + zu + Infinitiv at the end of the clause, expressing NO necessity — the opposite of müssen. This chapter teaches ONLY the negated form (brauchen nicht/kein- … zu); brauchen without a negation and without zu (used with a plain noun, e.g. "Ich brauche Geld") is a different, more basic use and not the focus here. Reflexive verbs also follow this pattern (sich beeilen → Ich brauche mich nicht zu beeilen). ' +
    'Do NOT expect brauchen used in other B2 modal nuances or advanced infinitive constructions — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- brauchen (conjugated: brauche/brauchst/braucht/brauchen/braucht/brauchen) + nicht (or kein-) + zu + bare Infinitiv at the very end — never a conjugated second verb, never a Partizip II.\n' +
    '- The negation (nicht/kein-) must be present — "brauchen zu" without a negation is not the everyday pattern taught here.\n' +
    '- brauchen never takes a second conjugated verb directly (no "Ich brauche gehen") — zu is required before the infinitive.\n' +
    '- With separable verbs, zu goes between the prefix and the stem: einzureichen, einzugeben, auszudrucken.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>brauchen check:</b> one sentence on whether brauchen correctly included nicht/kein- and zu + Infinitiv.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use brauchen nicht … zu confidently and never confuse it with müssen. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the müssen vs. brauchen comparison once — especially remembering never to drop the "nicht" — then continue.',
    low: 'Worth another pass through the Grammar section — practise the formation: brauchen + nicht + zu + Infinitiv, always all four pieces together.'
  },

  parserSentence: [
    { w: 'Du', role: 'r-subject' }, { w: 'brauchst', role: 'r-brauchen' },
    { w: 'nicht', role: 'r-brauchen' }, { w: 'nervös', role: 'plain' },
    { w: 'zu', role: 'r-brauchen' }, { w: 'sein', role: 'r-brauchen' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: brauchen nicht … zu is the opposite of müssen.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anna sets up online banking while Rohan reassures her what she doesn\'t need to do.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 49 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master brauchen + nicht + zu + Infinitiv, and the contrast with müssen.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about online banking, full of brauchen nicht … zu.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch brauchen nicht … zu in natural speech and contrast it with müssen.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give advice about what is and isn\'t necessary, using brauchen naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write travel or workplace advice using brauchen nicht … zu naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill müssen ↔ brauchen transformation and necessity classification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 49 chapter words — banking and online-banking vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'müssen ↔ brauchen transformation drills, necessity classification, error correction, and an advice-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full brauchen + zu + Infinitiv reference — conjugation, formation, müssen contrast, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich brauche nicht zu arbeiten.', text: 'Express "don\'t need to" naturally' },
    { de: 'müssen vs. brauchen', text: 'Contrast obligation with no obligation' },
    { de: 'Du brauchst nicht nervös zu sein.', text: 'Give reassuring advice' },
    { de: 'Ich brauche mich nicht zu beeilen.', text: 'Use brauchen with reflexive verbs' },
    { de: 'Goethe B1', text: 'Recognize brauchen nicht … zu in exam texts' }
  ],

  // ---------- Vocabulary (49 items — full chapter-22 upload list) ----------
  vocab: [
    { de: 'Ansicht', art: 'die', gender: 'f', plural: 'Ansichten', pos: 'noun', level: 'B1', en: 'prospect, view', hi: 'दृष्टिकोण', ex: 'Die Ansicht auf dem Bildschirm ist übersichtlich.', exEn: 'The view on the screen is clear.', exHi: 'Screen par drishtikon spasht hai.' },
    { de: 'abhängig', pos: 'adjective', level: 'B1', en: 'dependent', hi: 'निर्भर', ex: 'Der Zins ist vom Markt abhängig.', exEn: 'The interest rate is dependent on the market.', exHi: 'Byaaj dar market par nirbhar hai.' },
    { de: 'anfallen', pos: 'verb', level: 'B1', en: 'to arise', hi: 'उत्पन्न होना', ex: 'Manchmal fallen zusätzliche Kosten an.', exEn: 'Sometimes additional costs arise.', exHi: 'Kabhi-kabhi atirikt lagat utpann hoti hai.', conj: { praesens: 'fällt an', praeteritum: 'fiel an', perfekt: 'ist angefallen' } },
    { de: 'angeben', pos: 'verb', level: 'B1', en: 'to state', hi: 'बताना', ex: 'Bitte geben Sie Ihren Namen an.', exEn: 'Please state your name.', exHi: 'Kripya apna naam batayein.', conj: { praesens: 'gibt an', praeteritum: 'gab an', perfekt: 'hat angegeben' } },
    { de: 'aufnehmen', pos: 'verb', level: 'B1', en: 'to take out (einen Kredit aufnehmen)', hi: 'लेना (ऋण)', ex: 'Sie hat einen Kredit aufgenommen.', exEn: 'She took out a loan.', exHi: 'Usne ek karz liya.', conj: { praesens: 'nimmt auf', praeteritum: 'nahm auf', perfekt: 'hat aufgenommen' } },
    { de: 'Fotoüberweisung', art: 'die', gender: 'f', plural: 'Fotoüberweisungen', pos: 'noun', level: 'B1', en: 'picture transfer', hi: 'फ़ोटो हस्तांतरण', ex: 'Mit der Fotoüberweisung geht alles schneller.', exEn: 'With the picture transfer, everything goes faster.', exHi: 'Foto transfer se sab kuch tez ho jaata hai.' },
    { de: 'Kontoeröffnung', art: 'die', gender: 'f', plural: 'Kontoeröffnungen', pos: 'noun', level: 'B1', en: 'account opening', hi: 'खाता खोलना', ex: 'Ich muss heute noch die Kontoeröffnung abschließen.', exEn: 'I must complete the account opening today.', exHi: 'Mujhe aaj khaata kholna poora karna hai.' },
    { de: 'Zahlung', art: 'die', gender: 'f', plural: 'Zahlungen', pos: 'noun', level: 'B1', en: 'payment', hi: 'भुगतान', ex: 'Die Zahlung ist bereits erfolgt.', exEn: 'The payment has already been made.', exHi: 'Bhugtaan pehle se ho chuka hai.' },
    { de: 'eintragen', pos: 'verb', level: 'B1', en: 'to register', hi: 'दर्ज करना', ex: 'Muss ich meine Kontodaten neu eintragen?', exEn: 'Must I re-register my account information?', exHi: 'Kya mujhe apni khaata jaankaari naye sire se darj karni hogi?', conj: { praesens: 'trägt ein', praeteritum: 'trug ein', perfekt: 'hat eingetragen' } },
    { de: 'einzahlen', pos: 'verb', level: 'B1', en: 'to deposit', hi: 'जमा करना', ex: 'Er hat Geld auf sein Konto eingezahlt.', exEn: 'He deposited money into his account.', exHi: 'Usne apne khaate mein paisa jama kiya.', conj: { praesens: 'zahlt ein', praeteritum: 'zahlte ein', perfekt: 'hat eingezahlt' } },
    { de: 'fällig', pos: 'adjective', level: 'B1', en: 'due', hi: 'देय', ex: 'Die Rechnung ist morgen fällig.', exEn: 'The bill is due tomorrow.', exHi: 'Bill kal deya hai.' },
    { de: 'gering', pos: 'adjective', level: 'B1', en: 'small', hi: 'छोटा', ex: 'Die Kontoführungsgebühr ist gering.', exEn: 'The account maintenance charge is small.', exHi: 'Khaata rakhrakhaav shulk chhota hai.' },
    { de: 'gutschreiben', pos: 'verb', level: 'B1', en: 'to credit (einen Betrag gutschreiben)', hi: 'जमा करना (खाते में)', ex: 'Die Bank hat den Betrag sofort gutgeschrieben.', exEn: 'The bank credited the amount immediately.', exHi: 'Bank ne raashi turant jama kar di.', conj: { praesens: 'schreibt gut', praeteritum: 'schrieb gut', perfekt: 'hat gutgeschrieben' } },
    { de: 'monatlich', pos: 'adjective', level: 'B1', en: 'monthly', hi: 'मासिक', ex: 'Die monatliche Rate ist niedrig.', exEn: 'The monthly rate is low.', exHi: 'Maasik kisht kam hai.' },
    { de: 'regieren', pos: 'verb', level: 'B1', en: 'to rule', hi: 'शासन करना', ex: 'Klare Regeln regieren das Bankgeschäft.', exEn: 'Clear rules govern banking.', exHi: 'Spasht niyam banking par shaasan karte hain.', conj: { praesens: 'regiert', praeteritum: 'regierte', perfekt: 'hat regiert' } },
    { de: 'sich einloggen', pos: 'verb', level: 'B1', en: 'to log in', hi: 'लॉग इन करना', ex: 'Du brauchst dich nur im Menü einzuloggen.', exEn: 'You only need to log in in the menu.', exHi: 'Tumhein bas menu mein log in karna hoga.', conj: { praesens: 'loggt sich ein', praeteritum: 'loggte sich ein', perfekt: 'hat sich eingeloggt' } },
    { de: 'umgehend', pos: 'adjective', level: 'B1', en: 'immediate', hi: 'तत्काल', ex: 'Die Zahlung erfolgt umgehend.', exEn: 'The payment happens immediately.', exHi: 'Bhugtaan turant ho jaata hai.' },
    { de: 'versäumen', pos: 'verb', level: 'B1', en: 'to miss', hi: 'चूक जाना', ex: 'Sie hat die Zahlungsfrist versäumt.', exEn: 'She missed the payment deadline.', exHi: 'Usne bhugtaan ki samay-seema chook di.', conj: { praesens: 'versäumt', praeteritum: 'versäumte', perfekt: 'hat versäumt' } },
    { de: 'zudem', pos: 'adverb', level: 'B1', en: 'in addition', hi: 'इसके अलावा', ex: 'Zudem ist die Gebühr gering.', exEn: 'In addition, the charge is small.', exHi: 'Iske alaawa, shulk chhota hai.' },
    { de: 'überziehen', pos: 'verb', level: 'B1', en: 'to overdraw', hi: 'खाता ओवरड्रा करना', ex: 'Er hat sein Konto überzogen.', exEn: 'He overdrew his account.', exHi: 'Usne apna khaata overdraw kar diya.', conj: { praesens: 'überzieht', praeteritum: 'überzog', perfekt: 'hat überzogen' } },
    { de: 'Bankgeschäft', art: 'das', gender: 'n', plural: 'Bankgeschäfte', pos: 'noun', level: 'B1', en: 'banking', hi: 'बैंकिंग', ex: 'Das Bankgeschäft läuft heute meist online.', exEn: 'Banking mostly runs online today.', exHi: 'Banking aajkal zyaadatar online chalti hai.' },
    { de: 'Bargeld', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'cash', hi: 'नकद', ex: 'Ich brauche kein Bargeld mitzunehmen.', exEn: 'I don\'t need to bring cash.', exHi: 'Mujhe nakad saath laane ki zaroorat nahi hai.' },
    { de: 'Menü', art: 'das', gender: 'n', plural: 'Menüs', pos: 'noun', level: 'B1', en: 'menu', hi: 'मेनू', ex: 'Klick einfach im Menü auf "Log-in".', exEn: 'Just click on "log-in" in the menu.', exHi: 'Bas menu mein "log-in" par click karo.' },
    { de: 'Online-Banking', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'online banking', hi: 'ऑनलाइन बैंकिंग', ex: 'Das geht per Online-Banking.', exEn: 'That works via online banking.', exHi: 'Yeh online banking se ho jaata hai.' },
    { de: 'Beleg', art: 'der', gender: 'm', plural: 'Belege', pos: 'noun', level: 'B1', en: 'receipt', hi: 'रसीद', ex: 'Du brauchst den Beleg nicht aufzubewahren.', exEn: 'You don\'t need to keep the receipt.', exHi: 'Tumhein rasid rakhne ki zaroorat nahi hai.' },
    { de: 'Benutzername', art: 'der', gender: 'm', plural: 'Benutzernamen', pos: 'noun', level: 'B1', en: 'username', hi: 'उपयोगकर्ता नाम', ex: 'Du bekommst einen Benutzernamen.', exEn: 'You get a username.', exHi: 'Tumhein ek username milega.' },
    { de: 'Dauerauftrag', art: 'der', gender: 'm', plural: 'Daueraufträge', pos: 'noun', level: 'B1', en: 'standing order', hi: 'स्थायी आदेश', ex: 'Ich möchte einen Dauerauftrag einrichten.', exEn: 'I\'d like to set up a standing order.', exHi: 'Main ek sthaayi aadesh set up karna chahti hoon.' },
    { de: 'Kleiderschrank', art: 'der', gender: 'm', plural: 'Kleiderschränke', pos: 'noun', level: 'B1', en: 'wardrobe', hi: 'कपड़ों की अलमारी', ex: 'Der Kleiderschrank ist im Schlafzimmer.', exEn: 'The wardrobe is in the bedroom.', exHi: 'Kapdon ki almari bedroom mein hai.' },
    { de: 'Kontoauszug', art: 'der', gender: 'm', plural: 'Kontoauszüge', pos: 'noun', level: 'B1', en: 'bank statement', hi: 'बैंक स्टेटमेंट', ex: 'Du brauchst den Kontoauszug nicht auszudrucken.', exEn: 'You don\'t need to print the bank statement.', exHi: 'Tumhein bank statement print karne ki zaroorat nahi hai.' },
    { de: 'Log-in', art: 'der', gender: 'm', plural: 'Log-ins', pos: 'noun', level: 'B1', en: 'log-in', hi: 'लॉग-इन', ex: 'Klick auf "Log-in".', exEn: 'Click on "log-in".', exHi: '"Log-in" par click karo.' },
    { de: 'Schein', art: 'der', gender: 'm', plural: 'Scheine', pos: 'noun', level: 'B1', en: 'bill (banknote)', hi: 'नोट', ex: 'Er hat einen Schein aus dem Automaten geholt.', exEn: 'He got a bill from the machine.', exHi: 'Usne machine se ek note nikaala.' },
    { de: 'Verlust', art: 'der', gender: 'm', plural: 'Verluste', pos: 'noun', level: 'B1', en: 'loss', hi: 'हानि', ex: 'Der Verlust war gering.', exEn: 'The loss was small.', exHi: 'Haani chhoti thi.' },
    { de: 'Zins', art: 'der', gender: 'm', plural: 'Zinsen', pos: 'noun', level: 'B1', en: 'interest', hi: 'ब्याज', ex: 'Der Zins ist diesen Monat gestiegen.', exEn: 'Interest rose this month.', exHi: 'Is mahine byaaj badh gaya.' },
    { de: 'Bankangestellte', pos: 'noun', level: 'B1', en: 'bank teller', hi: 'बैंक कर्मचारी', ex: 'Die Bankangestellte half mir freundlich.', exEn: 'The bank teller helped me kindly.', exHi: 'Bank karmchari ne mujhe dayaalu tarike se madad ki.' },
    { de: 'Ausgabe', art: 'die', gender: 'f', plural: 'Ausgaben', pos: 'noun', level: 'B1', en: 'expense', hi: 'ख़र्च', ex: 'Meine Ausgaben sind diesen Monat hoch.', exEn: 'My expenses are high this month.', exHi: 'Is mahine mera kharcha zyada hai.' },
    { de: 'BIC', pos: 'noun', level: 'B1', en: 'SWIFT-BIC', hi: 'स्विफ्ट-बीआईसी', ex: 'Du brauchst die BIC nicht einzugeben.', exEn: 'You don\'t need to enter the BIC.', exHi: 'Tumhein BIC darj karne ki zaroorat nahi hai.' },
    { de: 'Einnahme', art: 'die', gender: 'f', plural: 'Einnahmen', pos: 'noun', level: 'B1', en: 'revenue', hi: 'आय', ex: 'Die Einnahmen sind gestiegen.', exEn: 'Revenue has increased.', exHi: 'Aay badh gayi hai.' },
    { de: 'IBAN', pos: 'noun', level: 'B1', en: 'IBAN', hi: 'आईबीएएन', ex: 'Wenn du die IBAN einmal gespeichert hast, brauchst du sie nicht noch einmal einzugeben.', exEn: 'Once you\'ve saved the IBAN, you don\'t need to enter it again.', exHi: 'Ek baar IBAN save karne ke baad, tumhein use dobara darj karne ki zaroorat nahi.' },
    { de: 'Kontodaten', pos: 'noun', level: 'B1', en: 'account information', hi: 'खाता जानकारी', ex: 'Muss ich meine Kontodaten neu eintragen?', exEn: 'Must I re-register my account information?', exHi: 'Kya mujhe apni khaata jaankaari naye sire se darj karni hogi?' },
    { de: 'Kontoführungsgebühr', art: 'die', gender: 'f', plural: 'Kontoführungsgebühren', pos: 'noun', level: 'B1', en: 'account maintenance charge', hi: 'खाता रखरखाव शुल्क', ex: 'Die Kontoführungsgebühr ist gering.', exEn: 'The account maintenance charge is small.', exHi: 'Khaata rakhrakhaav shulk chhota hai.' },
    { de: 'Kontoübersicht', art: 'die', gender: 'f', plural: 'Kontoübersichten', pos: 'noun', level: 'B1', en: 'account overview', hi: 'खाता अवलोकन', ex: 'Die Kontoübersicht zeigt alle Zahlungen.', exEn: 'The account overview shows all payments.', exHi: 'Khaata avalokan saare bhugtaan dikhaata hai.' },
    { de: 'Kopie', art: 'die', gender: 'f', plural: 'Kopien', pos: 'noun', level: 'B1', en: 'copy', hi: 'प्रति', ex: 'Ein Foto der Kopie reicht aus.', exEn: 'A photo of the copy is enough.', exHi: 'Prati ki ek foto kaafi hai.' },
    { de: 'Münze', art: 'die', gender: 'f', plural: 'Münzen', pos: 'noun', level: 'B1', en: 'coin', hi: 'सिक्का', ex: 'Er zahlte mit einer Münze.', exEn: 'He paid with a coin.', exHi: 'Usne ek sikke se bhugtaan kiya.' },
    { de: 'Rate', art: 'die', gender: 'f', plural: 'Raten', pos: 'noun', level: 'B1', en: 'rate, instalment', hi: 'क़िस्त', ex: 'Die monatliche Rate ist niedrig.', exEn: 'The monthly instalment is low.', exHi: 'Maasik kisht kam hai.' },
    { de: 'Standardübersicht', art: 'die', gender: 'f', plural: 'Standardübersichten', pos: 'noun', level: 'B1', en: 'standard overview', hi: 'मानक अवलोकन', ex: 'Die Standardübersicht zeigt alle Konten.', exEn: 'The standard overview shows all accounts.', exHi: 'Maanak avalokan sabhi khaate dikhaata hai.' },
    { de: 'Schulden', pos: 'noun', level: 'B1', en: 'debt', hi: 'क़र्ज़', ex: 'Sie hat keine Schulden.', exEn: 'She has no debt.', exHi: 'Uspar koi karz nahi hai.' },
    { de: 'fristgerecht', pos: 'adjective', level: 'B1', en: 'on time', hi: 'समय पर', ex: 'Die Zahlung muss fristgerecht erfolgen.', exEn: 'The payment must happen on time.', exHi: 'Bhugtaan samay par hona chahiye.' },
    { de: 'Grundform', art: 'die', gender: 'f', plural: 'Grundformen', pos: 'noun', level: 'B1', en: 'basic form', hi: 'मूल रूप', ex: 'Die Grundform von "brauchen" ist regelmäßig.', exEn: 'The basic form of "brauchen" is regular.', exHi: '"brauchen" ka mool roop niyamit hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "brauchen + zu + Infinitiv"?',
      body: [ 'It expresses that there is NO necessity — "don\'t need to," almost always with nicht or kein-.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de">Ich brauche heute nicht zu arbeiten.</span>', 'I don\'t need to work today.'],
          ['<span class="de">Anna braucht keine Jacke mitzunehmen.</span>', 'Anna doesn\'t need to bring a jacket.']
        ]
      },
      hinglish: 'Yeh batata hai ki koi zaroorat NAHI hai — "karne ki zaroorat nahi," lagbhag hamesha nicht ya kein- ke saath.'
    },
    {
      title: 'Bildung',
      body: [ 'brauchen (conjugated) + (optional noun) + nicht/kein- + zu + Infinitiv at the very end.' ],
      table: {
        head: ['Subject', 'brauchen', '(nicht/kein-)', 'zu + Infinitiv (Satzende)'],
        rows: [
          ['Ich', 'brauche', 'nicht', 'zu lernen.'],
          ['Wir', 'brauchen', 'nicht', 'zu warten.'],
          ['Du', 'brauchst', 'nicht', 'zu kommen.'],
          ['Sie', 'braucht', 'nicht', 'zu kochen.']
        ]
      },
      hinglish: 'brauchen (conjugated) + (optional noun) + nicht/kein- + zu + Infinitiv clause ke bilkul end mein.'
    },
    {
      title: 'brauchen vs. müssen',
      body: [ 'müssen = necessity. brauchen nicht … zu = NO necessity — the opposite meaning.' ],
      table: {
        head: ['müssen (Notwendigkeit)', 'brauchen nicht … zu (keine Notwendigkeit)'],
        rows: [
          ['<span class="de">Ich muss lernen.</span> (I have to study.)', '<span class="de">Ich brauche nicht zu lernen.</span> (I don\'t have to study.)']
        ]
      },
      hinglish: 'müssen = zaroorat. brauchen nicht … zu = KOI zaroorat NAHI — ulta matlab.'
    },
    {
      title: 'Häufige Ausdrücke',
      body: [ 'These four subject patterns cover most everyday uses.' ],
      table: {
        head: ['Subject', 'Example'],
        rows: [
          ['Du brauchst nicht …', '<span class="de">Du brauchst nicht nervös zu sein.</span>'],
          ['Wir brauchen nicht …', '<span class="de">Wir brauchen nicht so früh loszufahren.</span>'],
          ['Man braucht kein- …', '<span class="de">Man braucht keine Angst zu haben.</span>'],
          ['Sie brauchen sich keine …', '<span class="de">Sie brauchen sich keine Sorgen zu machen.</span>']
        ]
      },
      hinglish: 'Yeh chaar subject patterns zyaadatar rozmarra ke uses ko cover karte hain.'
    },
    {
      title: 'Reflexive Verben mit brauchen',
      body: [ 'Reflexive verbs follow the same pattern naturally — the reflexive pronoun stays in its usual position.' ],
      table: {
        head: ['Verb', 'Example'],
        rows: [
          ['sich beeilen', '<span class="de">Ich brauche mich nicht zu beeilen.</span>'],
          ['sich entschuldigen', '<span class="de">Anna braucht sich nicht zu entschuldigen.</span>'],
          ['sich aufregen', '<span class="de">Rohan braucht sich nicht aufzuregen.</span>'],
          ['sich streiten', '<span class="de">Wir brauchen uns nicht zu streiten.</span>']
        ]
      },
      hinglish: 'Reflexive verbs bhi yehi pattern follow karte hain — reflexive pronoun apni usual jagah par rehta hai.'
    },
    {
      title: 'Negative Notwendigkeit — "nicht" nie weglassen',
      body: [ 'brauchen + zu WITHOUT a negation is uncommon in everyday German — always keep nicht or kein- in the sentence.' ],
      note: 'Formation to memorize: brauchen + nicht/kein- + zu + Infinitiv. All four pieces belong together.',
      hinglish: 'Bina negation ke brauchen + zu rozmarra German mein uncommon hai — hamesha nicht ya kein- rakho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from dropping zu, dropping nicht, misplacing zu, mixing brauchen with müssen\'s structure, or using a Partizip II.' ],
      mistakes: [
        { wrong: 'Ich brauche gehen.', right: 'Ich brauche nicht zu gehen.', why: 'brauchen always needs zu before the infinitive, and normally needs a negation too — a bare infinitive after brauchen is not correct German.' },
        { wrong: 'Ich brauche nicht gehen.', right: 'Ich brauche nicht zu gehen.', why: 'zu is required before the infinitive — it can never be dropped.' },
        { wrong: 'Ich brauche zu nicht gehen.', right: 'Ich brauche nicht zu gehen.', why: 'nicht comes before zu, not between zu and the infinitive.' },
        { wrong: 'Ich muss nicht zu lernen.', right: 'Ich muss nicht lernen. / Ich brauche nicht zu lernen.', why: 'müssen never takes zu before its infinitive — only brauchen does.' },
        { wrong: 'Ich brauche nicht gegangen.', right: 'Ich brauche nicht zu gehen.', why: 'The verb after brauchen + zu must be a bare Infinitiv, never a Partizip II.' }
      ],
      hinglish: 'Yeh paanch galtiyaan zu chhodne se, nicht chhodne se, zu ko galat jagah rakhne se, ya Partizip II use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'brauchen nicht … zu appears constantly in Goethe B1 advice texts, workplace rules, and travel tips.' ],
      note: 'Memory trick: MUST → müssen. DON\'T HAVE TO → brauchen + nicht + zu + Infinitiv.',
      hinglish: 'brauchen nicht … zu Goethe B1 advice texts, workplace rules, aur travel tips mein lagataar aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Online-Banking leicht gemacht',
    titleEn: 'Online banking made easy',
    tokens: [
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Frageartikel' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'neues', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective · stark · Akk.' },
      { w: 'Konto', role: 'plain', en: 'account', hi: 'खाता', type: 'Noun · neut.' },
      { w: 'eröffnen', role: 'plain', en: 'to open (Satzende)', hi: 'खोलना', type: 'Infinitiv (Satzende)' },
      { w: 'möchte', role: 'plain', en: 'would like (Satzende)', hi: 'चाहता है (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'braucht', role: 'r-brauchen', en: 'doesn\'t need', hi: 'ज़रूरत नहीं है', type: 'Verb · brauchen (nicht … zu)' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'nicht', role: 'r-brauchen', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'mehr', role: 'plain', en: 'anymore', hi: 'अब', type: 'Adverb' },
      { w: 'zur', role: 'plain', en: 'to the', hi: 'में', type: 'Contraction · zu der' },
      { w: 'Bank', role: 'plain', en: 'bank', hi: 'बैंक', type: 'Noun · fem.' },
      { w: 'zu', role: 'r-brauchen', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'gehen', role: 'r-brauchen', en: 'to go (Satzende)', hi: 'जाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'gesamte', role: 'plain', en: 'entire', hi: 'पूरी', type: 'Adjective · schwach · Nom.' },
      { w: 'Kontoeröffnung', role: 'plain', en: 'account opening', hi: 'खाता खोलना', type: 'Noun · fem.', why: 'die Kontoeröffnung (this chapter).' },
      { w: 'läuft', role: 'plain', en: 'runs', hi: 'होता है', type: 'Verb · laufen' },
      { w: 'online', role: 'plain', en: 'online', hi: 'ऑनलाइन', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-temporal', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem', why: 'nachdem (recycled — Ch.21).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Anmeldung', role: 'plain', en: 'registration', hi: 'पंजीकरण', type: 'Noun · fem.' },
      { w: 'genehmigt', role: 'r-temporal', en: 'approved (Satzende)', hi: 'स्वीकृत (Satzende)', type: 'Verb · genehmigen (Partizip II, Satzende)' },
      { w: 'worden', role: 'r-temporal', en: 'been (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Passiv, Satzende)' },
      { w: 'ist', role: 'r-temporal', en: 'is (Satzende)', hi: '(Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'bekommt', role: 'plain', en: 'gets', hi: 'मिलता है', type: 'Verb · bekommen' },
      { w: 'man', role: 'plain', en: 'one', hi: 'व्यक्ति', type: 'Indefinitpronomen' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Benutzernamen', role: 'plain', en: 'username', hi: 'उपयोगकर्ता नाम', type: 'N-Deklination · Akk. Sg.', why: 'der Benutzername (this chapter) — N-Deklination noun (recycled — Ch.15).' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-temporal', en: 'whenever', hi: 'जब भी', type: 'Konjunktion · wenn', why: 'wenn — repeated action (recycled — Ch.21).' },
      { w: 'man', role: 'plain', en: 'one', hi: 'व्यक्ति', type: 'Indefinitpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'IBAN', role: 'plain', en: 'IBAN', hi: 'आईबीएएन', type: 'Noun · fem.', why: 'die IBAN (this chapter).' },
      { w: 'einmal', role: 'plain', en: 'once', hi: 'एक बार', type: 'Adverb' },
      { w: 'gespeichert', role: 'r-temporal', en: 'saved (Satzende)', hi: 'सेव (Satzende)', type: 'Verb · speichern (Partizip, Satzende)' },
      { w: 'hat', role: 'r-temporal', en: 'has (Satzende)', hi: '(Satzende)', type: 'Verb · haben (Satzende)' },
      { w: ',', plain: true },
      { w: 'braucht', role: 'r-brauchen', en: 'doesn\'t need', hi: 'ज़रूरत नहीं है', type: 'Verb · brauchen (nicht … zu)' },
      { w: 'man', role: 'plain', en: 'one', hi: 'व्यक्ति', type: 'Indefinitpronomen' },
      { w: 'sie', role: 'plain', en: 'it (fem.)', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'nicht', role: 'r-brauchen', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'noch', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'einmal', role: 'plain', en: 'once', hi: 'एक बार', type: 'Adverb' },
      { w: 'einzugeben', role: 'r-brauchen', en: 'to enter (Satzende)', hi: 'दर्ज करना', type: 'Trennbares Verb · eingeben (Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', type: 'Präposition · Genitiv', why: 'trotz + Genitiv (recycled — Ch.5).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'geringen', role: 'plain', en: 'small', hi: 'छोटा', type: 'Adjective · schwach · Gen.' },
      { w: 'Kontoführungsgebühr', role: 'plain', en: 'account maintenance charge', hi: 'खाता रखरखाव शुल्क', type: 'Noun · fem.', why: 'die Kontoführungsgebühr (this chapter).' },
      { w: 'braucht', role: 'r-brauchen', en: 'doesn\'t need', hi: 'ज़रूरत नहीं है', type: 'Verb · brauchen (nicht … zu)' },
      { w: 'niemand', role: 'plain', en: 'nobody', hi: 'कोई नहीं', type: 'Indefinitpronomen' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'Sorgen', role: 'plain', en: 'worries', hi: 'चिंताएँ', type: 'Noun · plural' },
      { w: 'zu', role: 'r-brauchen', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'machen', role: 'r-brauchen', en: 'to make (Satzende)', hi: 'बनाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Whoever would like to open a new account doesn\'t need to go to the bank today anymore. The entire account opening runs online. After the registration has been approved, one gets a username. Whenever one has saved the IBAN once, one doesn\'t need to enter it again. Despite the small account maintenance charge, nobody needs to worry.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_022_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe Angst vor dieser neuen Steuer-App. Muss ich alles selbst ausfüllen?', en: 'Timo, I\'m scared of this new tax app. Do I have to fill everything out myself?' },
      { id: 'B1_022_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, du brauchst nur deine Belege zu fotografieren, den Rest macht die App.', en: 'No, you only need to photograph your receipts, the app does the rest.' },
      { id: 'B1_022_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wirklich? Ich brauche also nicht jede Zahl selbst einzutragen?', en: 'Really? So I don\'t need to enter every number myself?' },
      { id: 'B1_022_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, du brauchst dir da wirklich keine Sorgen zu machen.', en: 'Exactly, you really don\'t need to worry about that.' }
    ],
    transcript: 'Timo, ich habe Angst vor dieser neuen Steuer-App. Muss ich alles selbst ausfüllen? Nein, du brauchst nur deine Belege zu fotografieren, den Rest macht die App. Wirklich? Ich brauche also nicht jede Zahl selbst einzutragen? Genau, du brauchst dir da wirklich keine Sorgen zu machen.',
    translation: 'Timo, I\'m scared of this new tax app. Do I have to fill everything out myself? No, you only need to photograph your receipts, the app does the rest. Really? So I don\'t need to enter every number myself? Exactly, you really don\'t need to worry about that.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'Angst' },
      { w: 'vor' },
      { w: 'dieser' },
      { w: 'neuen' },
      { w: 'Steuer', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'App' },
      { w: '.', plain: true },
      { w: 'Muss' },
      { w: 'ich' },
      { w: 'alles' },
      { w: 'selbst' },
      { w: 'ausfüllen' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'brauchst' },
      { w: 'nur' },
      { w: 'deine' },
      { w: 'Belege' },
      { w: 'zu' },
      { w: 'fotografieren' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'Rest' },
      { w: 'macht' },
      { w: 'die' },
      { w: 'App' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'brauche' },
      { w: 'also' },
      { w: 'nicht' },
      { w: 'jede' },
      { w: 'Zahl' },
      { w: 'selbst' },
      { w: 'einzutragen' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'brauchst' },
      { w: 'dir' },
      { w: 'da' },
      { w: 'wirklich' },
      { w: 'keine' },
      { w: 'Sorgen' },
      { w: 'zu' },
      { w: 'machen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss Katrin mit der App machen?', qEn: 'What does Katrin need to do with the app?', options: ['jede Zahl eintragen', 'ihre Belege fotografieren', 'alles selbst ausfüllen', 'einen Berater anrufen'], optionsEn: ['enter every figure', 'photograph her receipts', 'fill it all in himself', 'call an adviser'], answer: 1,
        explain: '"Du brauchst nur deine Belege zu fotografieren."' },
      { q: 'Wie beruhigt Timo Katrin?', qEn: 'How does Timo reassure Katrin?', options: ['Du brauchst dir keine Sorgen zu machen.', 'Es ist kompliziert.', 'Ruf lieber jemanden an.', 'Mach es lieber selbst.'], optionsEn: ['You don\'t need to worry.', 'It is complicated.', 'Better call someone.', 'Better do it yourself.'], answer: 0,
        explain: '"Du brauchst dir da wirklich keine Sorgen zu machen."' }
    ]
  },

  speaking: [
    { task: "Ein Freund hat Angst vor der Steuer-App. Beruhige ihn.", taskEn: "A friend is afraid of the tax app. Reassure him.", de: "Du brauchst nur die Belege zu fotografieren, den Rest macht die App.", en: "You only need to photograph the receipts, the app does the rest." },
    { task: "Er fragt, ob er alles selbst eintragen muss.", taskEn: "He asks whether he has to enter everything himself.", de: "Du brauchst nichts selbst einzutragen.", en: "You don't need to enter anything yourself." },
    { task: "Eine Kollegin fragt, ob sie zur Bank gehen muss.", taskEn: "A colleague asks whether she has to go to the bank.", de: "Du brauchst nicht zur Bank zu gehen, das geht mit Online-Banking.", en: "You don't need to go to the bank, you can do it with online banking." },
    { task: "Ein Freund fragt, ob er Bargeld braucht.", taskEn: "A friend asks whether he needs cash.", de: "Du brauchst kein Bargeld mitzunehmen, du kannst überall zahlen.", en: "You don't need to bring cash, you can pay everywhere." },
    { task: "Deine Nachbarin fragt, ob sie monatlich einzahlen muss.", taskEn: "Your neighbour asks whether she has to pay in monthly.", de: "Du brauchst nur einmal im Jahr einzuzahlen.", en: "You only need to pay in once a year." },
    { task: "Ein Kollege fragt, ob er die Zahlung umgehend machen muss.", taskEn: "A colleague asks whether he must make the payment immediately.", de: "Du brauchst sie nicht umgehend zu machen, sie ist erst nächste Woche fällig.", en: "You don't need to do it immediately, it's not due until next week." },
    { task: "Rollenspiel: Ihr erklärt einem Freund die Kontoeröffnung.", taskEn: "Role-play: you explain opening an account to a friend.", de: "Du brauchst nur den Ausweis mitzubringen und brauchst nichts zu bezahlen.", en: "You only need to bring your ID and don't need to pay anything." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short piece of advice (six to eight sentences) — travel tips, workplace rules, or exam preparation — using at least five brauchen nicht … zu sentences and at least two müssen sentences for contrast.',
    starters: ['Du brauchst nicht …', 'Man braucht kein- …', 'Du musst aber …'],
    placeholder: 'Für die Reise brauchst du nicht viel Geld mitzunehmen. Du musst aber deinen Pass dabei haben …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Du ___ nicht zur Bank zu gehen."',
      options: ['musst', 'brauchst', 'kannst'],
      answer: 1,
      explain: 'brauchen + nicht + zu + Infinitiv expresses no necessity.'
    },
    gap: {
      sentence: ['Man braucht keine Angst ', ' haben.'],
      gaps: [ { answer: 'zu', accepts: ['zu'] } ],
      explain: 'brauchen always needs zu before the infinitive.'
    },
    match: {
      q: 'Match each sentence to its meaning.',
      pairs: [
        { noun: 'Ich muss arbeiten.', art: 'Necessity (müssen)' },
        { noun: 'Ich brauche nicht zu arbeiten.', art: 'No necessity (brauchen)' }
      ]
    },
    builder: {
      target: 'Build: "You don\'t need to be nervous."',
      bank: ['Du', 'brauchst', 'nicht', 'nervös', 'zu', 'sein', '.'],
      answer: ['Du', 'brauchst', 'nicht', 'nervös', 'zu', 'sein', '.'],
      roles: { 'brauchst': 'r-brauchen', 'nicht': 'r-brauchen', 'zu': 'r-brauchen', 'sein': 'r-brauchen' }
    },
    muessenToBrauchen: {
      title: 'Transform: müssen → brauchen nicht … zu',
      prompt: 'Rewrite as no necessity: "Ich muss heute arbeiten." (make it: I don\'t need to work today)',
      answer: 'Ich brauche heute nicht zu arbeiten.',
      explain: 'müssen (necessity) → brauchen nicht … zu (no necessity) is the direct opposite transformation.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich brauche zu nicht gehen.',
      right: 'Ich brauche nicht zu gehen.',
      explain: 'nicht comes before zu, not between zu and the infinitive.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Wir ___ nicht so früh loszufahren."', options: ['müssen', 'brauchen', 'können'], answer: 1,
      explain: 'brauchen nicht … zu expresses no necessity.' },
    { q: 'Which sentence expresses NECESSITY?', options: ['Ich muss lernen.', 'Ich brauche nicht zu lernen.', 'Ich brauche keine Angst zu haben.'], answer: 0,
      explain: '"Ich muss lernen" uses müssen — necessity.' },
    { q: 'Complete: "Anna braucht sich nicht ___ entschuldigen."', options: ['', 'zu', 'zum'], answer: 1,
      explain: 'brauchen always needs zu before the infinitive.' },
    { q: 'Which sentence contains an error?', options: ['Du brauchst nicht zu kommen.', 'Ich brauche gehen.', 'Man braucht keine Angst zu haben.'], answer: 1,
      explain: 'brauchen always needs zu before the infinitive — it should be "Ich brauche nicht zu gehen."' },
    { q: 'Which is the correct opposite of "Ich muss arbeiten"?', options: ['Ich brauche nicht zu arbeiten.', 'Ich brauche zu arbeiten.', 'Ich muss nicht zu arbeiten.'], answer: 0,
      explain: 'brauchen nicht … zu is the direct opposite of müssen.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-brauchen', html: 'brauchen + nicht/kein- + zu + Infinitiv expresses that something is NOT necessary — the opposite of müssen.' },
    { c: 'r-brauchen', html: 'All four pieces (brauchen, nicht/kein-, zu, Infinitiv) belong together — never drop zu, never drop the negation.' },
    { c: 'r-brauchen', html: 'Reflexive verbs follow the same pattern naturally: Ich brauche mich nicht zu beeilen.' }
  ],
  revisionTips: [
    'Whenever you want to say "don\'t need to," check all four pieces are present: brauchen + nicht/kein- + zu + Infinitiv.',
    'Practise transforming müssen sentences into their brauchen nicht … zu opposites — it\'s the fastest way to internalize the contrast.',
    'Remember: müssen never takes zu before its infinitive — only brauchen does.'
  ]
};

window.CHAPTER = CHAPTER;
