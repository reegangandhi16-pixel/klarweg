/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 31
   "Konjunktiv II der Vergangenheit" — hätte/wäre + Partizip II
   for unreal past: regret, criticism, missed opportunity. Past
   cannot be changed. hätte = most verbs; wäre = movement/change
   of state (Perfekt-with-sein rule revisited).
   Does NOT teach Konjunktiv I, Irreale Vergleiche, or Futur II.
   IMPORTANT: dialogue uses ONLY Lea and Timo.
   Vocabulary source: uploaded chapter-31 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-31-konjunktiv2-vergangenheit',
  phase: 'B2 · Phase 3',
  number: 31,
  title: 'Konjunktiv II der Vergangenheit',
  titleEn: 'Konjunktiv II of the past',
  description: 'hätte / wäre + Partizip II — how Germans express regret, criticism, and missed opportunities about a past that cannot be changed.',
  xp: 470,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 32, title: 'Konjunktiv II für Vermutungen', titleEn: 'Konjunktiv II for assumptions' , href: 'chapter-b2-32-konjunktiv2-vermutungen.html' },

  prevChapter: { number: 30, title: 'Alternativen zum Futur', titleEn: 'Alternatives to the future tense', href: 'chapter-b2-30-alternativen-zum-futur.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'What <em>should have</em> happened.',
    intro: 'Lea almost missed her job interview because of a delayed train, and Timo wonders aloud whether she should have left earlier — every regret and gentle criticism about the unchangeable past carried by hätte/wäre + Partizip II.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear hätte and wäre + Partizip II express regret about an unchangeable past'
    ],
    scene: 'Nach der Prüfung',
    femaleSpeakers: ['Lea'],
    dialogue: [
      { speaker: 'Lea', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होता', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)', why: 'hätte/wäre + Partizip II = Konjunktiv II der Vergangenheit, expressing regret about the past (this chapter).', ex: 'Ich hätte das Vorstellungsgespräch nicht verpasst.', exEn: 'I would not have missed the interview.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Vorstellungsgespräch', role: 'r-akkusativ', en: 'job interview', hi: 'साक्षात्कार', pron: 'for-SHTE-lungs-ge-shpraikh', type: 'Noun · neut.' },
        { w: 'fast', role: 'r-adverb', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: 'verpasst', role: 'r-verb', en: 'missed', hi: 'छूट गया', pron: 'fer-PAST', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I would have almost missed the job interview.', hi: 'Main saakshaatkaar chhod deta agar thoda aur der ho jaati.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Wärst', role: 'r-verb', en: 'would you have', hi: 'होते', pron: 'VAIRST', type: 'Verb · sein (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'spät', role: 'r-akkusativ', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adjective' },
        { w: 'gekommen', role: 'r-verb', en: 'come', hi: 'आती', pron: 'ge-KO-men', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Really? Would you have come too late?', hi: 'Sach mein? Kya tum bahut der se aati?' },
      { speaker: 'Lea', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would have been', hi: 'होती', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'fast', role: 'r-adverb', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'spät', role: 'r-akkusativ', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adjective' },
        { w: 'gekommen', role: 'r-verb', en: 'come', hi: 'आती', pron: 'ge-KO-men', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Zug', role: 'r-subject', en: 'train', hi: 'ट्रेन', pron: 'tsook', type: 'Noun · masc.' },
        { w: 'Verspätung', role: 'r-akkusativ', en: 'delay', hi: 'देरी', pron: 'fer-SHPAY-tung', type: 'Noun · fem.', why: 'die Verspätung (this chapter).', ex: 'Der Zug hatte Verspätung.', exEn: 'The train had a delay.' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'थी', pron: 'HA-tuh', type: 'Verb · haben (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would have almost come too late, because the train had a delay.', hi: 'Main lagbhag der se aati, kyunki train mein deri thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hättest', role: 'r-verb', en: 'would you have', hi: 'होता', pron: 'HE-test', type: 'Verb · haben (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'früher', role: 'r-akkusativ', en: 'earlier', hi: 'जल्दी', pron: 'FRÜ-er', type: 'Adjective · Komparativ' },
        { w: 'losfahren', role: 'r-verb', en: 'leave', hi: 'निकलना', pron: 'LOHS-fah-ren', type: 'Verb · infinitive' },
        { w: 'sollen', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (Konjunktiv II, Satzende)' },
        { w: '?', plain: true }
      ], en: 'Should you have left earlier?', hi: 'Kya tumhe jaldi nikalna chahiye tha?' },
      { speaker: 'Lea', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होता', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: 'früher', role: 'r-akkusativ', en: 'earlier', hi: 'जल्दी', pron: 'FRÜ-er', type: 'Adjective · Komparativ' },
        { w: 'losfahren', role: 'r-verb', en: 'leave', hi: 'निकलना', pron: 'LOHS-fah-ren', type: 'Verb · infinitive' },
        { w: 'sollen', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (Konjunktiv II, Satzende)' },
        { w: '.', plain: true },
        { w: 'Zum', role: 'r-preposition', en: 'fortunately', hi: 'सौभाग्य से', pron: 'tsum', type: 'Fixed phrase' },
        { w: 'Glück', role: 'r-akkusativ', en: 'luck', hi: 'सौभाग्य', pron: 'glük', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'funktioniert', role: 'r-verb', en: 'worked out', hi: 'काम किया', pron: 'funk-tsyo-NEERT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, I should have left earlier. Fortunately everything worked out.', hi: 'Haan, mujhe jaldi nikalna chahiye tha. Khushi se, sab kuch theek ho gaya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'did', hi: 'हुआ', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Gespräch', role: 'r-subject', en: 'interview', hi: 'साक्षात्कार', pron: 'ge-SHPRAYKH', type: 'Noun · neut.' },
        { w: 'verlaufen', role: 'r-verb', en: 'go', hi: 'हुआ', pron: 'fer-LOW-fen', type: 'Verb · verlaufen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'How did the interview go?', hi: 'Saakshaatkaar kaisa hua?' },
      { speaker: 'Lea', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'froh', role: 'r-akkusativ', en: 'glad', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Very good! I am glad.', hi: 'Bahut achha! Mujhe khushi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The past cannot be changed. <span class="de r-konjunktiv2">hätte</span> / <span class="de r-konjunktiv2">wäre</span> + Partizip II lets Germans express regret, criticism, and missed opportunities about it: <span class="de">Ich hätte mehr lernen sollen</span> ("I should have studied more"), <span class="de">Anna wäre früher gekommen</span> ("She would have come earlier").'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II DER VERGANGENHEIT (B2 level): hätte/wäre + Partizip II expressing regret, criticism, and missed opportunities about an unchangeable past. hätte is used with most verbs; wäre is used with movement/change-of-state verbs (same rule as Perfekt with sein). Common patterns: "hätte...sollen" (should have), "hätte...können" (could have), "wäre gern...gekommen" (would have liked to come). ' +
    'Do NOT expect or require Konjunktiv I, Irreale Vergleiche (als ob), or Futur II — those are out of scope; do not flag their absence. A brief "wenn...hätte" conditional clause may appear naturally but full conditional-clause teaching is not the focus here — do not penalize its absence or presence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check hätte vs wäre selection: movement/change-of-state verbs (kommen, gehen, fahren, fliegen, laufen, reisen, ankommen, werden, etc.) require wäre; everything else requires hätte.\n' +
    '- Check that Partizip II is placed correctly at the end of the clause, with hätte/wäre in the normal verb position.\n' +
    '- Check modal verb combinations (hätte...sollen/können/müssen) keep the modal infinitive, not a Partizip II, at the very end.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Meaning check:</b> one sentence on whether the learner\'s sentences clearly express regret/criticism/missed opportunity about a fixed past, rather than a present wish.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly choose hätte vs wäre and express regret about the past naturally. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the hätte-vs-wäre comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: hätte for most verbs, wäre for movement/change-of-state verbs, and Partizip II always goes to the end.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'hätte', role: 'r-konjunktiv2' }, { w: 'mehr', role: 'plain' },
    { w: 'lernen', role: 'plain' }, { w: 'sollen', role: 'r-konjunktiv2' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: hätte/wäre + Partizip II expresses regret about an unchangeable past.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Lea and Timo reflect on a difficult exam, trading regrets and gentle criticism.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master hätte vs wäre selection and the meanings: regret, missed opportunity, criticism.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an exam reflection and a workplace project evaluation full of unreal-past structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify regret, criticism, missed opportunity, and hätte vs wäre.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about mistakes and missed opportunities using Konjunktiv II der Vergangenheit.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a reflection text and a project evaluation using the unreal past naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill hätte-or-wäre decisions, rewriting, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 470 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'hätte-or-wäre drills, rewriting exercises, and a reflection-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete formation table, meaning table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich hätte mehr lernen sollen.', text: 'Express regret about the past' },
    { de: 'Anna wäre früher gekommen.', text: 'Describe a missed opportunity' },
    { de: 'Du hättest früher anrufen können.', text: 'Offer gentle criticism after the fact' },
    { de: 'hätte (most verbs) vs wäre (movement verbs)', text: 'Choose the correct auxiliary every time' },
    { de: 'hätte / wäre + Partizip II', text: 'Build the complete unreal-past structure' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-31 list) ----------
  vocab: [
    { de: 'auswendig lernen', pos: 'verb', level: 'B2', register: 'both', en: 'to learn by heart', hi: 'ज़ुबानी सीखना', ex: 'Wir hätten die Fragen auswendig lernen sollen.', exEn: 'We should have learned the questions by heart.', exHi: 'Hamein sawaalon ko zubaani seekhna chahiye tha.', ex2: 'Sie hat das Gedicht auswendig gelernt.', ex2En: 'She\'s learned the poem by heart.', ex2Hi: 'Usne kavita zubaani seekhi hai.' },
    { de: 'Bauch', art: 'der', gender: 'm', plural: 'Bäuche', pos: 'noun', level: 'B2', register: 'both', en: 'belly, stomach', hi: 'पेट', ex: 'Ihr Bauch tat weh.', exEn: 'Her stomach hurt.', exHi: 'Uska pet dard kar raha tha.', ex2: 'Er hat sich den Bauch gehalten.', ex2En: 'He\'s held his stomach.', ex2Hi: 'Usne apna pet pakda hai.' },
    { de: 'Erkenntnis', art: 'die', gender: 'f', plural: 'Erkenntnisse', pos: 'noun', level: 'B2', register: 'both', en: 'insight, realisation', hi: 'अंतर्दृष्टि', ex: 'Rohan wäre gern früher gekommen, um die Erkenntnis früher zu gewinnen.', exEn: 'Rohan would have gladly come earlier to gain the insight sooner.', exHi: 'Rohan khushi se pehle aata taaki antardrishti pehle mil jaati.', ex2: 'Diese Erkenntnis hat alles verändert.', ex2En: 'This insight has changed everything.', ex2Hi: 'Is antardrishti ne sab kuch badal diya hai.' },
    { de: 'Gesellschaftskritik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'social criticism', hi: 'सामाजिक आलोचना', ex: 'Der Roman enthielt viel Gesellschaftskritik.', exEn: 'The novel contained a lot of social criticism.', exHi: 'Upanyaas mein bahut saamaajik aalochana thi.', ex2: 'Sie haben die Gesellschaftskritik diskutiert.', ex2En: 'They\'ve discussed the social criticism.', ex2Hi: 'Unhone saamaajik aalochana par charcha ki hai.' },
    { de: 'Grenze', art: 'die', gender: 'f', plural: 'Grenzen', pos: 'noun', level: 'B2', register: 'both', en: 'border, limit', hi: 'सीमा', ex: 'Er hatte seine Grenze erreicht.', exEn: 'He had reached his limit.', exHi: 'Woh apni seemaa tak pahunch chuka tha.', ex2: 'Sie haben die Grenze überquert.', ex2En: 'They\'ve crossed the border.', ex2Hi: 'Unhone seemaa paar ki hai.' },
    { de: 'Rechtswissenschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'jurisprudence, law', hi: 'विधि विज्ञान', ex: 'Sie studierte Rechtswissenschaft.', exEn: 'She studied law.', exHi: 'Usne vidhi vigyaan padha.', ex2: 'Er hat sich für Rechtswissenschaft entschieden.', ex2En: 'He\'s decided on law.', ex2Hi: 'Usne vidhi vigyaan chuna hai.' },
    { de: 'Stein', art: 'der', gender: 'm', plural: 'Steine', pos: 'noun', level: 'B2', register: 'both', en: 'stone', hi: 'पत्थर', ex: 'Ein Stein fiel vom Berg.', exEn: 'A stone fell from the mountain.', exHi: 'Ek patthar pahaad se gira.', ex2: 'Sie haben Steine gesammelt.', ex2En: 'They\'ve collected stones.', ex2Hi: 'Unhone patthar ekatra kiye hain.' },
    { de: 'Stellung', art: 'die', gender: 'f', plural: 'Stellungen', pos: 'noun', level: 'B2', register: 'both', en: 'position, stance', hi: 'स्थिति, रुख', ex: 'Sie nahm eine klare Stellung ein.', exEn: 'She took a clear stance.', exHi: 'Usne ek spasht rukh apnaaya.', ex2: 'Er hat seine Stellung verteidigt.', ex2En: 'He\'s defended his position.', ex2Hi: 'Usne apni sthiti ka bachaav kiya hai.' },
    { de: 'Weste', art: 'die', gender: 'f', plural: 'Westen', pos: 'noun', level: 'B2', register: 'both', en: 'vest, waistcoat', hi: 'बनियान', ex: 'Er trug eine schicke Weste.', exEn: 'He wore a stylish vest.', exHi: 'Usne ek stylish waistcoat pehna.', ex2: 'Sie hat die Weste gekauft.', ex2En: 'She\'s bought the vest.', ex2Hi: 'Usne waistcoat khareeda hai.' },
    { de: 'ablaufen', pos: 'verb', level: 'B2', register: 'both', en: 'to expire, proceed', hi: 'समाप्त होना, आगे बढ़ना', ex: 'Der Vertrag lief nächsten Monat ab.', exEn: 'The contract expired next month.', exHi: 'Anubandh agle mahine samaapt hua.', ex2: 'Das Projekt ist reibungslos abgelaufen.', ex2En: 'The project has proceeded smoothly.', ex2Hi: 'Project bina rukaawat aage badha hai.', conj: { praesens: 'läuft ab', praeteritum: 'lief ab', perfekt: 'ist abgelaufen' } },
    { de: 'abwechslungsreich', pos: 'adjective', level: 'B2', register: 'both', en: 'varied, diverse', hi: 'विविधतापूर्ण', ex: 'Das Programm war sehr abwechslungsreich.', exEn: 'The programme was very varied.', exHi: 'Karyakram bahut vividh tha.', ex2: 'Sie haben ein abwechslungsreiches Leben.', ex2En: 'They\'ve got a varied life.', ex2Hi: 'Unka jeevan vividh hai.' },
    { de: 'ähneln', pos: 'verb', level: 'B2', register: 'both', en: 'to resemble', hi: 'मिलता-जुलता होना', ex: 'Sie ähnelte ihrer Mutter.', exEn: 'She resembled her mother.', exHi: 'Woh apni maa jaisi dikhti thi.', ex2: 'Das Gebäude hat einem Schloss geähnelt.', ex2En: 'The building has resembled a castle.', ex2Hi: 'Imaarat ek mahal jaisi dikhti thi.', conj: { praesens: 'ähnelt', praeteritum: 'ähnelte', perfekt: 'hat geähnelt' } },
    { de: 'Angstreaktion', art: 'die', gender: 'f', plural: 'Angstreaktionen', pos: 'noun', level: 'B2', register: 'both', en: 'fear response', hi: 'भय प्रतिक्रिया', ex: 'Ich hätte diese Angstreaktion vermeiden können.', exEn: 'I could have avoided that fear response.', exHi: 'Main is bhay pratikriya se bach sakta tha.', ex2: 'Die Angstreaktion war völlig normal.', ex2En: 'The fear response was completely normal.', ex2Hi: 'Bhay pratikriya bilkul saamaanya thi.' },
    { de: 'anknüpfen', pos: 'verb', level: 'B2', register: 'written', en: 'to link up, connect', hi: 'जोड़ना', ex: 'Er knüpfte an das vorherige Thema an.', exEn: 'He connected to the previous topic.', exHi: 'Usne pichhle vishay se jodaa.', ex2: 'Sie haben neue Kontakte angeknüpft.', ex2En: 'They\'ve made new connections.', ex2Hi: 'Unhone naye sampark banaaye hain.', conj: { praesens: 'knüpft an', praeteritum: 'knüpfte an', perfekt: 'hat angeknüpft' } },
    { de: 'ärgern', pos: 'verb', level: 'B2', register: 'both', en: 'to annoy, be annoyed', hi: 'चिढ़ना', ex: 'Das ärgerte sie sehr.', exEn: 'That annoyed her a lot.', exHi: 'Isse woh bahut chidh gayi.', ex2: 'Er hat sich über den Fehler geärgert.', ex2En: 'He\'s been annoyed about the mistake.', ex2Hi: 'Woh galti se chidh gaya hai.', conj: { praesens: 'ärgert', praeteritum: 'ärgerte', perfekt: 'hat geärgert' } },
    { de: 'Atmung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'breathing, respiration', hi: 'सांस', ex: 'Meine Atmung wäre ruhiger gewesen, wenn ich mich besser vorbereitet hätte.', exEn: 'My breathing would have been calmer if I had prepared myself better.', exHi: 'Meri saans zyaada shaant hoti agar maine khud ko behtar taiyaar kiya hota.', ex2: 'Die Atmung normalisierte sich schnell.', ex2En: 'The breathing normalised quickly.', ex2Hi: 'Saans jaldi saamaanya ho gayi.' },
    { de: 'aufgehen', pos: 'verb', level: 'B2', register: 'both', en: 'to rise, work out', hi: 'उगना, सफल होना', ex: 'Die Sonne ging um sechs Uhr auf.', exEn: 'The sun rose at six o\'clock.', exHi: 'Suraj chhah baje ugaa.', ex2: 'Der Plan ist aufgegangen.', ex2En: 'The plan has worked out.', ex2Hi: 'Yojana safal rahi hai.', conj: { praesens: 'geht auf', praeteritum: 'ging auf', perfekt: 'ist aufgegangen' } },
    { de: 'aussuchen', pos: 'verb', level: 'B2', register: 'both', en: 'to pick, choose', hi: 'चुनना', ex: 'Sie suchte sich ein neues Kleid aus.', exEn: 'She picked out a new dress.', exHi: 'Usne ek naya kapda chuna.', ex2: 'Er hat sich das beste Angebot ausgesucht.', ex2En: 'He\'s chosen the best offer.', ex2Hi: 'Usne sabse achha offer chuna hai.', conj: { praesens: 'sucht aus', praeteritum: 'suchte aus', perfekt: 'hat ausgesucht' } },
    { de: 'beantworten', pos: 'verb', level: 'B2', register: 'both', en: 'to answer', hi: 'जवाब देना', ex: 'Sie beantwortete die Frage schnell.', exEn: 'She answered the question quickly.', exHi: 'Usne sawaal ka jaldi jawaab diya.', ex2: 'Er hat alle E-Mails beantwortet.', ex2En: 'He\'s answered all the emails.', ex2Hi: 'Usne saare emails ka jawaab diya hai.', conj: { praesens: 'beantwortet', praeteritum: 'beantwortete', perfekt: 'hat beantwortet' } },
    { de: 'beerdigen', pos: 'verb', level: 'B2', register: 'written', en: 'to bury', hi: 'दफनाना', ex: 'Man beerdigte ihn auf dem Dorffriedhof.', exEn: 'He was buried in the village cemetery.', exHi: 'Use gaanv ke kabristaan mein dafnaaya gaya.', ex2: 'Sie haben ihre Großmutter beerdigt.', ex2En: 'They\'ve buried their grandmother.', ex2Hi: 'Unhone apni dadi ko dafnaaya hai.', conj: { praesens: 'beerdigt', praeteritum: 'beerdigte', perfekt: 'hat beerdigt' } },
    { de: 'befassen', pos: 'verb', level: 'B2', register: 'written', en: 'to deal with, occupy oneself', hi: 'व्यस्त होना', ex: 'Sie befasste sich mit dem Thema.', exEn: 'She dealt with the topic.', exHi: 'Woh vishay se juti hui thi.', ex2: 'Wir haben uns intensiv damit befasst.', ex2En: 'We\'ve dealt with it intensively.', ex2Hi: 'Humne isse gehrai se nipta hai.', conj: { praesens: 'befasst', praeteritum: 'befasste', perfekt: 'hat befasst' } },
    { de: 'behaupten', pos: 'verb', level: 'B2', register: 'both', en: 'to claim, assert', hi: 'दावा करना', ex: 'Ich behaupte nicht, dass ich perfekt vorbereitet war.', exEn: 'I\'m not claiming that I was perfectly prepared.', exHi: 'Main dava nahi kar rahi ki main perfect taiyaar thi.', ex2: 'Er hat das Gegenteil behauptet.', ex2En: 'He\'s claimed the opposite.', ex2Hi: 'Usne ulta dava kiya hai.', conj: { praesens: 'behauptet', praeteritum: 'behauptete', perfekt: 'hat behauptet' } },
    { de: 'beladen', pos: 'verb', level: 'B2', register: 'written', en: 'to load', hi: 'लादना', ex: 'Sie beluden den Lastwagen.', exEn: 'They loaded the truck.', exHi: 'Unhone truck lada.', ex2: 'Der Wagen ist schwer beladen worden.', ex2En: 'The cart has been heavily loaded.', ex2Hi: 'Gaadi bhaari roop se laadi gayi hai.', conj: { praesens: 'belädt', praeteritum: 'belud', perfekt: 'hat beladen' } },
    { de: 'Betonung', art: 'die', gender: 'f', plural: 'Betonungen', pos: 'noun', level: 'B2', register: 'both', en: 'emphasis, stress', hi: 'ज़ोर, बलाघात', ex: 'Die Betonung lag auf dem ersten Wort.', exEn: 'The emphasis was on the first word.', exHi: 'Zor pehle shabd par tha.', ex2: 'Sie haben die Betonung geändert.', ex2En: 'They\'ve changed the emphasis.', ex2Hi: 'Unhone zor badla hai.' },
    { de: 'Bewegungsstörung', art: 'die', gender: 'f', plural: 'Bewegungsstörungen', pos: 'noun', level: 'B2', register: 'written', en: 'movement disorder', hi: 'गति विकार', ex: 'Die Bewegungsstörung erschwerte den Alltag.', exEn: 'The movement disorder made daily life harder.', exHi: 'Gati vikaar ne roz-marra ki zindagi mushkil banaayi.', ex2: 'Ärzte haben die Bewegungsstörung diagnostiziert.', ex2En: 'Doctors have diagnosed the movement disorder.', ex2Hi: 'Doctoron ne gati vikaar ka nidaan kiya hai.' },
    { de: 'dankbar', pos: 'adjective', level: 'B2', register: 'both', en: 'grateful', hi: 'आभारी', ex: 'Dankbar bin ich trotzdem.', exEn: 'I\'m grateful nevertheless.', exHi: 'Main phir bhi aabhaari hoon.', ex2: 'Sie war ihm sehr dankbar.', ex2En: 'She was very grateful to him.', ex2Hi: 'Woh uski bahut aabhaari thi.' },
    { de: 'Demenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'dementia', hi: 'मनोभ्रंश', ex: 'Die Demenz verschlechterte sich langsam.', exEn: 'The dementia worsened slowly.', exHi: 'Manobhransh dheere-dheere badha.', ex2: 'Sie haben viel über Demenz gelernt.', ex2En: 'They\'ve learned a lot about dementia.', ex2Hi: 'Unhone manobhransh ke baare mein bahut seekha hai.' },
    { de: 'ehrgeizig', pos: 'adjective', level: 'B2', register: 'both', en: 'ambitious', hi: 'महत्वाकांक्षी', ex: 'Wir wären ohne diese Erfahrung nicht so ehrgeizig geworden.', exEn: 'We wouldn\'t have become so ambitious without this experience.', exHi: 'Is anubhav ke bina hum itne mahatvaakaankshi na bane hote.', ex2: 'Sie ist eine sehr ehrgeizige Studentin.', ex2En: 'She\'s a very ambitious student.', ex2Hi: 'Woh ek bahut mahatvaakaankshi student hai.' },
    { de: 'ehrlich', pos: 'adjective', level: 'B2', register: 'both', en: 'honest', hi: 'ईमानदार', ex: 'Er war immer ehrlich.', exEn: 'He was always honest.', exHi: 'Woh hamesha imaandaar tha.', ex2: 'Sie haben ehrlich geantwortet.', ex2En: 'They\'ve answered honestly.', ex2Hi: 'Unhone imaandaari se jawaab diya hai.' },
    { de: 'Zeitreise', art: 'die', gender: 'f', plural: 'Zeitreisen', pos: 'noun', level: 'B2', register: 'both', en: 'time travel', hi: 'समय यात्रा', ex: 'Der Film handelte von Zeitreise.', exEn: 'The film was about time travel.', exHi: 'Film samay yatra ke baare mein thi.', ex2: 'Sie haben über Zeitreise diskutiert.', ex2En: 'They\'ve discussed time travel.', ex2Hi: 'Unhone samay yatra par charcha ki hai.' },
    { de: 'Zeitstrahl', art: 'der', gender: 'm', plural: 'Zeitstrahlen', pos: 'noun', level: 'B2', register: 'both', en: 'timeline', hi: 'समयरेखा', ex: 'Der Zeitstrahl zeigte alle wichtigen Ereignisse.', exEn: 'The timeline showed all important events.', exHi: 'Samayarekha ne saare mahatvapurn ghatnaayein dikhaayi.', ex2: 'Sie haben einen Zeitstrahl erstellt.', ex2En: 'They\'ve created a timeline.', ex2Hi: 'Unhone ek samayarekha banaayi hai.' },
    { de: 'zurückgeben', pos: 'verb', level: 'B2', register: 'both', en: 'to give back, return', hi: 'वापस देना', ex: 'Er gab das Buch zurück.', exEn: 'He gave the book back.', exHi: 'Usne kitaab wapas di.', ex2: 'Sie hat das Geld zurückgegeben.', ex2En: 'She\'s given the money back.', ex2Hi: 'Usne paisa wapas de diya hai.', conj: { praesens: 'gibt zurück', praeteritum: 'gab zurück', perfekt: 'hat zurückgegeben' } },
    { de: 'Zusammenbruch', art: 'der', gender: 'm', plural: 'Zusammenbrüche', pos: 'noun', level: 'B2', register: 'both', en: 'collapse, breakdown', hi: 'पतन', ex: 'Der wirtschaftliche Zusammenbruch traf viele Familien.', exEn: 'The economic collapse hit many families.', exHi: 'Aarthik patan ne kai parivaaron ko prabhaavit kiya.', ex2: 'Sie haben den Zusammenbruch verhindert.', ex2En: 'They\'ve prevented the collapse.', ex2Hi: 'Unhone patan ko roka hai.' },
    { de: 'zusammensetzen', pos: 'verb', level: 'B2', register: 'both', en: 'to put together, assemble', hi: 'जोड़ना', ex: 'Sie setzten das Modell zusammen.', exEn: 'They put the model together.', exHi: 'Unhone model jodaa.', ex2: 'Er hat den Schrank zusammengesetzt.', ex2En: 'He\'s assembled the cupboard.', ex2Hi: 'Usne almari jodi hai.', conj: { praesens: 'setzt zusammen', praeteritum: 'setzte zusammen', perfekt: 'hat zusammengesetzt' } },
    { de: 'zusammentragen', pos: 'verb', level: 'B2', register: 'written', en: 'to compile, gather', hi: 'इकट्ठा करना', ex: 'Sie trugen die Informationen zusammen.', exEn: 'They gathered the information.', exHi: 'Unhone jaankaari ikattha ki.', ex2: 'Wir haben alle Daten zusammengetragen.', ex2En: 'We\'ve compiled all the data.', ex2Hi: 'Humne saara data ikattha kiya hai.', conj: { praesens: 'trägt zusammen', praeteritum: 'trug zusammen', perfekt: 'hat zusammengetragen' } },
    { de: 'Ausreisekontrolle', art: 'die', gender: 'f', plural: 'Ausreisekontrollen', pos: 'noun', level: 'B2', register: 'written', en: 'exit control', hi: 'निकास जांच', ex: 'Die Ausreisekontrolle dauerte lange.', exEn: 'The exit control took a long time.', exHi: 'Nikaas jaanch mein lamba samay laga.', ex2: 'Sie haben die Ausreisekontrolle passiert.', ex2En: 'They\'ve passed the exit control.', ex2Hi: 'Unhone nikaas jaanch paar ki hai.' },
    { de: 'Bestseller-Liste', art: 'die', gender: 'f', plural: 'Bestseller-Listen', pos: 'noun', level: 'B2', register: 'written', en: 'bestseller list', hi: 'बेस्टसेलर सूची', ex: 'Das Buch stand auf der Bestseller-Liste.', exEn: 'The book was on the bestseller list.', exHi: 'Kitaab bestseller list mein thi.', ex2: 'Sie haben die Bestseller-Liste erreicht.', ex2En: 'They\'ve made the bestseller list.', ex2Hi: 'Unhone bestseller list mein jagah banaayi hai.' },
    { de: 'Bundeskanzler/in', art: 'der/die', gender: 'm/f', plural: 'Bundeskanzler/innen', pos: 'noun', level: 'B2', register: 'written', en: 'federal chancellor', hi: 'संघीय चांसलर', ex: 'Der Bundeskanzler hielt eine Rede.', exEn: 'The federal chancellor gave a speech.', exHi: 'Sangheey chancellor ne bhaashan diya.', ex2: 'Sie ist Bundeskanzlerin geworden.', ex2En: 'She\'s become federal chancellor.', ex2Hi: 'Woh sangheey chancellor ban gayi hai.' },
    { de: 'Bundesminister/in', art: 'der/die', gender: 'm/f', plural: 'Bundesminister/innen', pos: 'noun', level: 'B2', register: 'written', en: 'federal minister', hi: 'संघीय मंत्री', ex: 'Der Bundesminister besuchte die Fabrik.', exEn: 'The federal minister visited the factory.', exHi: 'Sangheey mantri ne factory ka daura kiya.', ex2: 'Sie hat als Bundesministerin gearbeitet.', ex2En: 'She\'s worked as federal minister.', ex2Hi: 'Usne sangheey mantri ke roop mein kaam kiya hai.' },
    { de: 'Kanzlerkandidat/in', art: 'der/die', gender: 'm/f', plural: 'Kanzlerkandidaten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'chancellor candidate', hi: 'चांसलर उम्मीदवार', ex: 'Der Kanzlerkandidat gewann die Debatte.', exEn: 'The chancellor candidate won the debate.', exHi: 'Chancellor ummeedwar ne bahas jeeti.', ex2: 'Sie ist Kanzlerkandidatin geworden.', ex2En: 'She\'s become chancellor candidate.', ex2Hi: 'Woh chancellor ummeedwar ban gayi hai.' },
    { de: 'Nationalfeiertag', art: 'der', gender: 'm', plural: 'Nationalfeiertage', pos: 'noun', level: 'B2', register: 'written', en: 'national holiday', hi: 'राष्ट्रीय अवकाश', ex: 'Der Nationalfeiertag wurde groß gefeiert.', exEn: 'The national holiday was celebrated grandly.', exHi: 'Raashtreey avakaash badi dhoomdhaam se manaaya gaya.', ex2: 'Sie haben den Nationalfeiertag genossen.', ex2En: 'They\'ve enjoyed the national holiday.', ex2Hi: 'Unhone raashtreey avakaash ka aanand liya hai.' },
    { de: 'Parteivorsitzende/r', art: 'der/die', gender: 'm/f', plural: 'Parteivorsitzende', pos: 'noun', level: 'B2', register: 'written', en: 'party chairperson', hi: 'पार्टी अध्यक्ष', ex: 'Der Parteivorsitzende kündigte neue Pläne an.', exEn: 'The party chairperson announced new plans.', exHi: 'Party adhyaksh ne nayi yojanaon ki ghoshna ki.', ex2: 'Sie ist Parteivorsitzende geworden.', ex2En: 'She\'s become party chairperson.', ex2Hi: 'Woh party adhyaksh ban gayi hai.' },
    { de: 'Pressesprecher/in', art: 'der/die', gender: 'm/f', plural: 'Pressesprecher/innen', pos: 'noun', level: 'B2', register: 'written', en: 'press spokesperson', hi: 'प्रेस प्रवक्ता', ex: 'Der Pressesprecher gab ein Statement ab.', exEn: 'The press spokesperson gave a statement.', exHi: 'Press pravakta ne ek bayaan diya.', ex2: 'Sie hat als Pressesprecherin gearbeitet.', ex2En: 'She\'s worked as press spokesperson.', ex2Hi: 'Usne press pravakta ke roop mein kaam kiya hai.' },
    { de: 'Regierungssprecher/in', art: 'der/die', gender: 'm/f', plural: 'Regierungssprecher/innen', pos: 'noun', level: 'B2', register: 'written', en: 'government spokesperson', hi: 'सरकारी प्रवक्ता', ex: 'Der Regierungssprecher beantwortete die Fragen.', exEn: 'The government spokesperson answered the questions.', exHi: 'Sarkaari pravakta ne sawaalon ke jawaab diye.', ex2: 'Sie ist Regierungssprecherin geworden.', ex2En: 'She\'s become government spokesperson.', ex2Hi: 'Woh sarkaari pravakta ban gayi hai.' },
    { de: 'Rundfunkanstalt', art: 'die', gender: 'f', plural: 'Rundfunkanstalten', pos: 'noun', level: 'B2', register: 'written', en: 'broadcasting corporation', hi: 'प्रसारण निगम', ex: 'Die Rundfunkanstalt sendete die Nachrichten.', exEn: 'The broadcasting corporation aired the news.', exHi: 'Prasaran nigam ne khabarein prasaarit ki.', ex2: 'Sie haben bei der Rundfunkanstalt gearbeitet.', ex2En: 'They\'ve worked at the broadcasting corporation.', ex2Hi: 'Unhone prasaran nigam mein kaam kiya hai.' },
    { de: 'Staatsführer/in', art: 'der/die', gender: 'm/f', plural: 'Staatsführer/innen', pos: 'noun', level: 'B2', register: 'written', en: 'state leader', hi: 'राष्ट्र प्रमुख', ex: 'Der Staatsführer traf andere Politiker.', exEn: 'The state leader met other politicians.', exHi: 'Raashtra pramukh ne doosre neetaon se mulaakaat ki.', ex2: 'Sie ist Staatsführerin geworden.', ex2En: 'She\'s become state leader.', ex2Hi: 'Woh raashtra pramukh ban gayi hai.' },
    { de: 'Umsteigebahnhof', art: 'der', gender: 'm', plural: 'Umsteigebahnhöfe', pos: 'noun', level: 'B2', register: 'both', en: 'interchange station', hi: 'ट्रांसफर स्टेशन', ex: 'Wir stiegen am Umsteigebahnhof um.', exEn: 'We changed trains at the interchange station.', exHi: 'Hum transfer station par train badli.', ex2: 'Der Umsteigebahnhof war sehr groß.', ex2En: 'The interchange station was very large.', ex2Hi: 'Transfer station bahut bada tha.' },
    { de: 'Verabschiedungshalle', art: 'die', gender: 'f', plural: 'Verabschiedungshallen', pos: 'noun', level: 'B2', register: 'written', en: 'departure hall', hi: 'विदाई हॉल', ex: 'Die Verabschiedungshalle war voller Menschen.', exEn: 'The departure hall was full of people.', exHi: 'Vidaayi hall logon se bhara tha.', ex2: 'Sie haben sich in der Verabschiedungshalle getroffen.', ex2En: 'They\'ve met in the departure hall.', ex2Hi: 'Woh vidaayi hall mein mile hain.' },
    { de: 'Verhaltensregel', art: 'die', gender: 'f', plural: 'Verhaltensregeln', pos: 'noun', level: 'B2', register: 'written', en: 'rule of conduct', hi: 'आचरण नियम', ex: 'Die Verhaltensregel galt für alle.', exEn: 'The rule of conduct applied to everyone.', exHi: 'Aacharan niyam sabke liye laagu tha.', ex2: 'Sie haben neue Verhaltensregeln eingeführt.', ex2En: 'They\'ve introduced new rules of conduct.', ex2Hi: 'Unhone naye aacharan niyam laagu kiye hain.' },
    { de: 'Wirtschaftssektor', art: 'der', gender: 'm', plural: 'Wirtschaftssektoren', pos: 'noun', level: 'B2', register: 'written', en: 'economic sector', hi: 'आर्थिक क्षेत्र', ex: 'Der Wirtschaftssektor wuchs schnell.', exEn: 'The economic sector grew quickly.', exHi: 'Aarthik kshetra tezi se badha.', ex2: 'Sie haben den Wirtschaftssektor analysiert.', ex2En: 'They\'ve analysed the economic sector.', ex2Hi: 'Unhone aarthik kshetra ka vishleshan kiya hai.' },
    { de: 'Zeitzeuge/-zeugin', art: 'der/die', gender: 'm/f', plural: 'Zeitzeugen/-zeuginnen', pos: 'noun', level: 'B2', register: 'written', en: 'contemporary witness', hi: 'प्रत्यक्षदर्शी', ex: 'Der Zeitzeuge erzählte von seiner Kindheit.', exEn: 'The contemporary witness told of his childhood.', exHi: 'Pratyakshadarshi ne apne bachpan ke baare mein bataaya.', ex2: 'Sie haben viele Zeitzeugen befragt.', ex2En: 'They\'ve interviewed many contemporary witnesses.', ex2Hi: 'Unhone kai pratyakshadarshiyon se poochha hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Konjunktiv II der Vergangenheit?',
      body: [ 'It describes an unreal past: reality happened one way, but the speaker wishes it had happened differently.' ],
      table: {
        head: ['Reality', 'Wish (Konjunktiv II Vergangenheit)'],
        rows: [
          ['She came late.', '<span class="de">Anna wäre früher gekommen.</span> (would have come earlier)']
        ]
      },
      hinglish: 'Yeh us past ki baat karta hai jo hui nahi \u2014 asal mein kuch aur hua tha, par speaker keh raha hai ki kaash aisa hota. Isliye ise unreal past kehte hain.'
    },
    {
      title: 'Struktur: hätte / wäre + Partizip II',
      body: [ 'Formed with the Konjunktiv II of haben or sein, plus the Partizip II at the end. (When a modal verb is involved the shape is different \u2014 see the next block but one.)' ],
      table: {
        head: ['haben-Verben', 'sein-Verben'],
        rows: [
          ['<span class="de">Ich hätte gearbeitet.</span>', '<span class="de">Ich wäre gekommen.</span>'],
          ['<span class="de">Wir hätten gelernt.</span>', '<span class="de">Wir wären geblieben.</span>']
        ]
      },
      hinglish: 'Yeh <b>haben</b> ya <b>sein</b> ke Konjunktiv II se banta hai, aur Partizip II sentence ke end mein aata hai. Modal verb aa jaaye to shape badal jaata hai \u2014 woh aage ke block mein dekhoge.'
    },
    {
      title: 'Typische Bedeutungen (Typical Meanings)',
      body: [ 'The four core uses: regret, missed opportunity, criticism, and after-the-fact advice.' ],
      table: {
        head: ['Meaning', 'Example'],
        rows: [
          ['Regret', '<span class="de">Ich hätte besser lernen sollen.</span>'],
          ['Missed opportunity', '<span class="de">Wir wären gern nach Deutschland gefahren.</span>'],
          ['Criticism', '<span class="de">Du hättest früher anrufen können.</span>'],
          ['Advice after the event', '<span class="de">Ihr hättet vorsichtiger sein müssen.</span>']
        ]
      },
      hinglish: 'Iske chaar main use hain \u2014 pachhtawa, chhooti hui opportunity, kisi ki criticism, aur baad mein di gayi advice ki "aisa karna chahiye tha".'
    },
    {
      title: 'hätte vs wäre',
      body: [ 'Same rule as Perfekt: movement/change-of-state verbs take wäre; everything else takes hätte.' ],
      table: {
        head: ['wäre (movement/change)', 'hätte (everything else)'],
        rows: [
          ['kommen, gehen, fahren, fliegen, laufen, reisen, ankommen', 'arbeiten, lernen, essen, lesen, schreiben, machen']
        ]
      },
      hinglish: 'Rule Perfekt jaisa hi hai \u2014 jo verbs movement ya state change batate hain woh <b>wäre</b> lete hain, aur baaki sab <b>hätte</b>. Naya kuch yaad karne ki zaroorat nahi.'
    },
    {
      title: 'Mit Modalverb: kein Partizip II',
      body: [
        'As soon as a modal verb joins in, the pattern changes: there is NO Partizip II at all. You get <b>hätte</b> + the main verb as an infinitive + the modal as an infinitive, and the modal comes LAST. This is the Ersatzinfinitiv you met in the Perfekt \u2014 the modal never appears as gesollt or gekonnt.'
      ],
      table: {
        head: ['Pattern', 'Example', 'Meaning'],
        rows: [
          ['hätte + Infinitiv + <b>sollen</b>', '<span class="de">Ich hätte besser lernen sollen.</span>', 'I should have studied harder'],
          ['hätte + Infinitiv + <b>können</b>', '<span class="de">Du hättest früher anrufen können.</span>', 'you could have called earlier'],
          ['hätte + Infinitiv + <b>müssen</b>', '<span class="de">Ihr hättet vorsichtiger sein müssen.</span>', 'you should have been more careful']
        ]
      },
      note: 'Note that <b>hätte</b> is used even with sein-verbs here: <span class="de">Ihr hättet \u2026 sein müssen</span>, not <i>wärt</i>. The modal decides the auxiliary, so it is always hätte. In a subordinate clause the whole cluster stays together and the finite verb moves to the FRONT of it: <span class="de">\u2026, dass ich besser h\u00e4tte lernen sollen.</span>',
      hinglish: 'Jaise hi modal verb aata hai, pattern badal jaata hai \u2014 Partizip II bilkul nahi lagta. Structure banta hai <b>hätte</b> + asli verb ka infinitive + modal ka infinitive, aur modal sabse end mein aata hai. Yeh wahi Ersatzinfinitiv hai jo tumne Perfekt mein dekha tha, isliye <i>gesollt</i> ya <i>gekonnt</i> kabhi nahi aata. Ek baat dhyaan se \u2014 yahan sein wale verbs ke saath bhi <b>hätte</b> hi lagta hai: <span class="de">Ihr hättet vorsichtiger sein müssen</span>, <i>wärt</i> nahi. Auxiliary modal decide karta hai. Aur subordinate clause mein poora cluster saath rehta hai, bas finite verb uske aage chala jaata hai: <span class="de">\u2026, dass ich besser h\u00e4tte lernen sollen.</span>'
    },
    {
      title: 'Häufige Ausdrücke (Common Expressions)',
      body: [ 'These modal-verb combinations are extremely common.' ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['<span class="de">hätte machen sollen</span>', 'should have done'],
          ['<span class="de">hätte machen können</span>', 'could have done'],
          ['<span class="de">wäre gern gekommen</span>', 'would have liked to come'],
          ['<span class="de">hätte vermeiden können</span>', 'could have avoided']
        ]
      },
      hinglish: 'Yeh modal wale combinations rozmarra mein bahut aate hain. Inhe poore chunk ki tarah yaad karo \u2014 modal hamesha sabse end mein rehta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from picking the wrong auxiliary, stacking two auxiliaries, or mixing a Pr\u00e4sens form with the Konjunktiv II.' ],
      mistakes: [
        { wrong: 'Ich hätte gegangen.', right: 'Ich wäre gegangen.', why: '"gehen" is a movement verb — it requires "wäre", not "hätte".' },
        { wrong: 'Anna hätte gefahren.', right: 'Anna wäre gefahren.', why: '"fahren" is a movement verb — it requires "wäre".' },
        { wrong: 'Wir wären gearbeitet.', right: 'Wir hätten gearbeitet.', why: '"arbeiten" is not a movement verb — it requires "hätte".' },
        { wrong: 'Ich hätte sein gekommen.', right: 'Ich wäre gekommen.', why: 'Only one auxiliary is needed — either hätte or wäre, never both.' },
        { wrong: 'Ich habe hätte gearbeitet.', right: 'Ich hätte gearbeitet.', why: 'Do not combine a Präsens auxiliary (habe) with the Konjunktiv II form (hätte) — use hätte alone.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 galat auxiliary chunna, do auxiliary ek saath laga dena, ya Pr\u00e4sens wala form Konjunktiv II ke saath mila dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Confidently expressing regret and criticism about the past is a strong marker of B2 fluency.' ],
      note: 'Memory trick: Past + Impossible to change → hätte/wäre + Partizip II → Regret, missed opportunity, unreal past.',
      hinglish: 'Past ke baare mein pachhtawa ya criticism theek se bol paana B2 par kaafi strong signal hai \u2014 examiner ko turant dikhta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Interview: Ein früherer Pressesprecher erinnert sich',
    titleEn: 'Interview: a former press spokesperson remembers',
    tokens: [
      { w: 'Als', role: 'plain', en: 'as', hi: 'जब', type: 'Konjunktion · als' },
      { w: 'ehemaliger', role: 'plain', en: 'former', hi: 'पूर्व', type: 'Adjective' },
      { w: 'Pressesprecher', role: 'plain', en: 'press spokesperson', hi: 'प्रवक्ता', type: 'Noun · masc.', why: 'der/die Pressesprecher/in (this chapter).' },
      { w: 'blickt', role: 'plain', en: 'looks back', hi: 'याद करता है', type: 'Verb · zurückblicken' },
      { w: 'Herr', role: 'plain', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Berger', role: 'plain', en: 'Berger', hi: 'बर्गर', type: 'Name' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition' },
      { w: 'jenen', role: 'plain', en: 'that (masc. acc.)', hi: 'उस', type: 'Determiner · Akk.' },
      { w: 'Abend', role: 'plain', en: 'evening (Satzende)', hi: 'शाम (Satzende)', type: 'Noun · masc.' },
      { w: 'zurück', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · zurückblicken' },
      { w: '.', plain: true },
      { w: '„Hätte', role: 'r-verb', en: '"Had (Konjunktiv II Vergangenheit)', hi: '"होता (Konjunktiv II भूतकाल)', type: 'Verb · haben (Konjunktiv II Plusquamperfekt)', why: 'Konjunktiv II of the past (hätte + Partizip II) expresses an unreal condition about something that did NOT happen (this chapter).' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैंने', type: 'Pronoun' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Formulierung', role: 'plain', en: 'wording (Satzende)', hi: 'शब्दावली (Satzende)', type: 'Noun · fem.' },
      { w: 'genauer', role: 'plain', en: 'more precisely', hi: 'अधिक सटीक रूप से', type: 'Adverb · Komparativ' },
      { w: 'geprüft', role: 'plain', en: 'checked (Satzende)', hi: 'जाँचा होता (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'wäre', role: 'r-verb', en: 'would have (Konjunktiv II Vergangenheit)', hi: 'हुआ होता (Konjunktiv II)', type: 'Verb · sein (Konjunktiv II Plusquamperfekt)', why: 'wäre + Partizip II forms the "then"-clause (Konsequenz) of the unreal past condition (this chapter).' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Missverständnis', role: 'plain', en: 'misunderstanding (Satzende)', hi: 'ग़लतफ़हमी (Satzende)', type: 'Noun · neut.' },
      { w: 'vermieden', role: 'plain', en: 'avoided (Satzende)', hi: 'टाला गया होता (Satzende)', type: 'Verb · Partizip II' },
      { w: 'worden', role: 'plain', en: '(Passiv-Hilfsverb, Satzende)', hi: '', type: 'Verb · werden (Passiv Konjunktiv II Vergangenheit, Satzende)' },
      { w: '“', plain: true },
      { w: ',', plain: true },
      { w: 'gibt', role: 'plain', en: 'admits', hi: 'स्वीकार करता है', type: 'Verb · zugeben' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'zu', role: 'plain', en: '(prefix)', hi: '', type: 'Separable prefix · zugeben' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'damalige', role: 'plain', en: 'then', hi: 'तत्कालीन', type: 'Adjective' },
      { w: 'Bundeskanzler', role: 'plain', en: 'federal chancellor', hi: 'संघीय चांसलर', type: 'Noun · masc.', why: 'der/die Bundeskanzler/in (this chapter).' },
      { w: 'hätte', role: 'r-verb', en: 'would have (Konjunktiv II Vergangenheit)', hi: 'चाहा होता (Konjunktiv II)', type: 'Verb · haben (Konjunktiv II Plusquamperfekt)' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'wohl', role: 'plain', en: 'probably', hi: 'शायद', type: 'Adverb' },
      { w: 'anders', role: 'plain', en: 'differently', hi: 'अलग तरीक़े से', type: 'Adjective' },
      { w: 'entschieden', role: 'plain', en: 'decided (Satzende)', hi: 'निर्णय लिया होता (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-connector', en: 'if', hi: 'अगर', type: 'Konjunktion · wenn (irreal, Vergangenheit)' },
      { w: 'er', role: 'plain', en: 'he', hi: 'उसे', type: 'Pronoun' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'echten', role: 'plain', en: 'genuine', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'Zeitzeugen', role: 'plain', en: 'contemporary witness (Satzende)', hi: 'प्रत्यक्षदर्शी (Satzende)', type: 'Noun · masc.', why: 'der/die Zeitzeuge/-zeugin (this chapter).' },
      { w: 'vorab', role: 'plain', en: 'in advance', hi: 'पहले से', type: 'Adverb' },
      { w: 'gewusst', role: 'plain', en: 'known (Satzende)', hi: 'जानता होता (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hätte', role: 'plain', en: 'had (Satzende)', hi: 'होता (Satzende)', type: 'Verb · haben (Konjunktiv II Plusquamperfekt, Nebensatz-Satzende)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Pronoun' },
      { w: 'Historiker', role: 'plain', en: 'historians', hi: 'इतिहासकार', type: 'Noun · plural' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'sicher', role: 'plain', en: 'sure', hi: 'निश्चित', type: 'Adjective' },
      { w: ':', plain: true },
      { w: 'Wäre', role: 'r-verb', en: 'had been', hi: 'होती', type: 'Verb · sein (Konjunktiv II Plusquamperfekt)', why: 'Konjunktiv II der Vergangenheit: an unreal condition about the past (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Öffentlichkeit', role: 'plain', en: 'public', hi: 'जनता', type: 'Noun · fem.' },
      { w: 'früher', role: 'plain', en: 'earlier', hi: 'पहले', type: 'Adverb' },
      { w: 'informiert', role: 'plain', en: 'informed (Satzende)', hi: 'सूचित की गई (Satzende)', type: 'Verb · Partizip II' },
      { w: 'worden', role: 'plain', en: '(Passiv-Hilfsverb, Satzende)', hi: '', type: 'Verb · werden (Passiv Plusquamperfekt)' },
      { w: ',', plain: true },
      { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होती', type: 'Verb · haben (Konjunktiv II)' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Skandal', role: 'plain', en: 'scandal', hi: 'घोटाला', type: 'Noun · masc.' },
      { w: 'wohl', role: 'plain', en: 'probably', hi: 'शायद', type: 'Adverb' },
      { w: 'verhindern', role: 'plain', en: 'prevent (Satzende)', hi: 'रोकना (Satzende)', type: 'Verb · Infinitiv' },
      { w: 'können', role: 'plain', en: 'could (Satzende)', hi: 'सकते थे (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Herr', role: 'plain', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Berger', role: 'plain', en: 'Berger', hi: 'बर्गर', type: 'Name' },
      { w: 'widerspricht', role: 'plain', en: 'disagrees', hi: 'असहमत है', type: 'Verb · widersprechen' },
      { w: 'dem', role: 'plain', en: 'with that', hi: 'इससे', type: 'Pronomen · Dat.' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: ':', plain: true },
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Nachhinein', role: 'plain', en: 'hindsight (Satzende)', hi: 'बाद में देखने पर (Satzende)', type: 'Noun · neut.' },
      { w: 'lasse', role: 'r-verb', en: 'lets (Konjunktiv I, indirekte Rede)', hi: 'देता है (Konjunktiv I)', type: 'Verb · lassen (Konjunktiv I)', why: 'Even in a spoken interview, the reporting can shift into Konjunktiv I when quoting his exact stance (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'vieles', role: 'plain', en: 'much (Satzende)', hi: 'बहुत कुछ (Satzende)', type: 'Pronoun' },
      { w: 'leicht', role: 'plain', en: 'easily', hi: 'आसानी से', type: 'Adverb' },
      { w: 'behaupten', role: 'r-verb', en: 'claim (Satzende)', hi: 'दावा करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'As a former press spokesperson, Mr Berger often looks back on that evening. "Had I checked the wording more precisely, the misunderstanding would have been avoided," he admits. The then federal chancellor would probably have decided differently, if he had known from a genuine contemporary witness in advance. Some historians are sure: had the public been informed earlier, the scandal could probably have been prevented. Mr Berger disagrees, however: in hindsight, he says, much is easily claimed.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_031_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Lea, du hast doch fast das Vorstellungsgespräch verpasst?', en: 'Lea, didn\'t you almost miss the job interview?' },
      { id: 'B2_031_L002', speaker: 'Lea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, der Zug hatte Verspätung. Hätte ich früher losgehen müssen, wäre das nicht passiert.', en: 'Yes, the train was delayed. If I\'d had to leave earlier, that wouldn\'t have happened.' },
      { id: 'B2_031_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Na ja, du hättest ja nicht wissen können, dass er ausfällt.', en: 'Well, you couldn\'t have known it would be cancelled.' },
      { id: 'B2_031_L004', speaker: 'Lea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stimmt, aber ich wäre trotzdem lieber eine halbe Stunde früher gefahren.', en: 'True, but I would have preferred to leave half an hour earlier anyway.' }
    ],
    transcript: 'Lea, du hast doch fast das Vorstellungsgespräch verpasst? Ja, der Zug hatte Verspätung. Hätte ich früher losgehen müssen, wäre das nicht passiert. Na ja, du hättest ja nicht wissen können, dass er ausfällt. Stimmt, aber ich wäre trotzdem lieber eine halbe Stunde früher gefahren.',
    translation: 'Lea, didn\'t you almost miss the job interview? Yes, the train was delayed. If I\'d had to leave earlier, that wouldn\'t have happened. Well, you couldn\'t have known it would be cancelled. True, but I would have preferred to leave half an hour earlier anyway.',
    tokens: [
      { w: 'Lea' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'hast' },
      { w: 'doch' },
      { w: 'fast' },
      { w: 'das' },
      { w: 'Vorstellungsgespräch' },
      { w: 'verpasst' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Zug' },
      { w: 'hatte' },
      { w: 'Verspätung' },
      { w: '.', plain: true },
      { w: 'Hätte' },
      { w: 'ich' },
      { w: 'früher' },
      { w: 'losgehen' },
      { w: 'müssen' },
      { w: ',', plain: true },
      { w: 'wäre' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'passiert' },
      { w: '.', plain: true },
      { w: 'Na' },
      { w: 'ja' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'hättest' },
      { w: 'ja' },
      { w: 'nicht' },
      { w: 'wissen' },
      { w: 'können' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'er' },
      { w: 'ausfällt' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'wäre' },
      { w: 'trotzdem' },
      { w: 'lieber' },
      { w: 'eine' },
      { w: 'halbe' },
      { w: 'Stunde' },
      { w: 'früher' },
      { w: 'gefahren' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum war Lea fast zu spät?', qEn: 'Why was Lea almost late?', options: ['sie verschlief', 'der Zug hatte Verspätung', 'sie vergaß den Termin', 'das Auto war kaputt'], optionsEn: ['she overslept', 'the train was delayed', 'she forgot the appointment', 'the car was broken'], answer: 1,
        explain: '"Der Zug hatte Verspätung."' },
      { q: 'Was hätte Lea nach eigener Aussage lieber gemacht?', qEn: 'What does Lea say she would have preferred?', options: ['zu Hause bleiben', 'früher fahren', 'den Termin absagen', 'ein Taxi nehmen'], optionsEn: ['stay at home', 'travel earlier', 'cancel the appointment', 'take a taxi'], answer: 1,
        explain: '"… ich wäre trotzdem lieber eine halbe Stunde früher gefahren."' }
    ]
  },

  speaking: [
    { task: "Du hast fast das Vorstellungsgespräch verpasst. Sag, was falsch lief.", taskEn: "You nearly missed the interview. Say what went wrong.", de: "Hätte ich früher losgehen müssen, wäre das nicht passiert.", en: "If I'd had to set off earlier, that wouldn't have happened." },
    { task: "Dein Freund fragt, was du anders machen würdest.", taskEn: "Your friend asks what you'd do differently.", de: "Ich hätte den früheren Zug nehmen sollen.", en: "I should have taken the earlier train." },
    { task: "Eine Kollegin fragt, warum du Rechtswissenschaft nicht studiert hast.", taskEn: "A colleague asks why you didn't study law.", de: "Ich hätte mich früher bewerben müssen, dann wäre es gegangen.", en: "I should have applied earlier, then it would have worked." },
    { task: "Ein Freund ärgert sich über eine Entscheidung. Tröste ihn.", taskEn: "A friend is annoyed about a decision. Comfort him.", de: "Du hättest es nicht wissen können, das war nicht dein Fehler.", en: "You couldn't have known, that wasn't your fault." },
    { task: "Rollenspiel: Ihr sprecht über eine verpasste Chance.", taskEn: "Role-play: you talk about a missed opportunity.", de: "Ich hätte die Stelle annehmen sollen. — Und ich hätte dir früher davon erzählen müssen.", en: "I should have taken the job. — And I should have told you about it earlier." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Reflection text (6-8 sentences): Reflect on a past exam or project, using hätte/wäre + Partizip II to express regret and criticism.\n\nTASK 2 — Complaint email (6-8 sentences): Write about a service or workplace issue, using "hätte...sollen/können" to describe what should have been done differently.',
    starters: ['Ich hätte …', 'Wir wären gern …'],
    placeholder: 'Ich hätte mehr lernen sollen. Wir wären gern früher gekommen …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which auxiliary is correct: "Anna ___ früher gekommen"?',
      options: ['wäre', 'hätte', 'ist'],
      answer: 0,
      explain: '"kommen" is a movement verb, so it takes "wäre", not "hätte".'
    },
    gap: {
      sentence: ['Wir ', ' die Fragen auswendig lernen sollen.'],
      gaps: [ { answer: 'hätten', accepts: ['hätten'] } ],
      explain: '"lernen" is not a movement verb, so it takes "hätten" (plural of hätte).'
    },
    match: {
      q: 'Match each sentence to its meaning.',
      pairs: [
        { noun: 'Ich hätte mehr lernen sollen.', art: 'Regret' },
        { noun: 'Wir wären gern gefahren.', art: 'Missed opportunity' },
        { noun: 'Du hättest anrufen können.', art: 'Criticism' },
        { noun: 'Ihr hättet vorsichtiger sein müssen.', art: 'Advice after the event' }
      ]
    },
    builder: {
      target: 'Build: "I could have avoided that." (missed opportunity/regret)',
      bank: ['Ich', 'hätte', 'das', 'vermeiden', 'können', '.'],
      answer: ['Ich', 'hätte', 'das', 'vermeiden', 'können', '.'],
      roles: { 'hätte': 'r-konjunktiv2', 'können': 'r-konjunktiv2' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich hätte gegangen.',
      right: 'Ich wäre gegangen.',
      explain: '"gehen" is a movement verb — it requires "wäre", not "hätte".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Konjunktiv II der Vergangenheit express?', options: ['Regret, criticism, or missed opportunity about an unchangeable past', 'A real future plan', 'A polite request'], answer: 0,
      explain: 'This structure describes an unreal past — the speaker wishes something had happened differently.' },
    { q: 'Which auxiliary do movement verbs take?', options: ['wäre', 'hätte', 'werde'], answer: 0,
      explain: 'Movement/change-of-state verbs (kommen, gehen, fahren...) take "wäre", following the same rule as Perfekt.' },
    { q: 'Which auxiliary does "arbeiten" take?', options: ['hätte', 'wäre', 'sei'], answer: 0,
      explain: '"arbeiten" is not a movement verb, so it takes "hätte".' },
    { q: 'What does "hätte...sollen" mean?', options: ['should have', 'could have', 'would have liked to'], answer: 0,
      explain: '"hätte...sollen" expresses regret about an obligation that wasn\'t fulfilled — "should have done".' },
    { q: 'Is this chapter about Konjunktiv I?', options: ['No — only Konjunktiv II der Vergangenheit', 'Yes, alongside Konjunktiv II', 'Yes, exclusively'], answer: 0,
      explain: 'Konjunktiv I is a separate topic (indirect speech) not covered in this chapter.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-konjunktiv2', html: 'hätte/wäre + Partizip II expresses regret, criticism, and missed opportunity about a past that cannot be changed.' },
    { c: 'r-konjunktiv2', html: 'hätte is used with most verbs; wäre is used with movement/change-of-state verbs — the same rule as Perfekt with sein.' },
    { c: 'r-konjunktiv2', html: 'Common patterns: hätte...sollen (should have), hätte...können (could have), wäre gern...gekommen (would have liked to come).' }
  ],
  revisionTips: [
    'Practise turning your own past mistakes into hätte/wäre sentences — a genuinely useful reflective habit.',
    'Double-check hätte vs wäre by asking: does this verb use "sein" in the Perfekt? If yes, use wäre.',
    'Keep Konjunktiv I, Irreale Vergleiche, and Futur II for later — this chapter is only about the unreal past.'
  ]
};

window.CHAPTER = CHAPTER;
