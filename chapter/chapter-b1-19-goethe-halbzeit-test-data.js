/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 19
   "Goethe Halbzeit-Test" — the official HALFWAY checkpoint of
   the B1 course. NO new grammar. Tests everything from
   Chapters 1–18: Infinitiv mit zu, weil/da/obwohl, Konjunktiv II
   (höfliche Bitten), deshalb & so … dass, Genitiv + wegen/trotz/
   während, Präteritum, Zeitangaben (Dativ & Genitiv), Passiv
   (Präsens), Relativsätze (Nom./Akk./Dativ), Relativsätze mit
   Präpositionen, Adjektivdeklination, Komparativ & Superlativ
   vor Nomen, N-Deklination, Futur I, damit & um … zu.
   IMPORTANT: dialogue, listening scripts, and speaking role-play
   use ONLY Uta and Timo (two-voice audio system) — no Max,
   no Frau Weber.
   Vocabulary source: uploaded chapter-19 note — "(Review chapter
   — no new words)". Review vocab drawn entirely from Ch.1–18.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-b1-13-goethe-mini-2-data.js (checkpoint
   shape: flat vocab[] review set, grammar[] mixed review cards,
   tokenized reading, Goethe-style mock test, readiness
   takeaways) so it runs on the shared chapter-app.js /
   chapter-tutor.js engine, scaled up (6 listening scenarios,
   longer dialogue, larger mock test) to match a halfway exam.
============================================================ */
const CHAPTER = {
  id: 'b1-19-goethe-halbzeit-test',
  phase: 'B1 · Phase 1',
  number: 19,
  title: 'Goethe Halbzeit-Test',
  titleEn: 'Goethe Halfway Test — the B1 midpoint checkpoint',
  description: 'The official halfway point of your B1 journey — no new grammar. A full-length Goethe-B1-style exam covering everything from Chapters 1–18: zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb & so … dass, Genitiv, Präteritum, Zeitangaben, Passiv, Relativsätze (including with prepositions), adjective declension, comparison, N-Deklination, Futur I, and purpose clauses.',
  xp: 300,
  time: 75,
  difficulty: 'Halbzeit-Prüfung',
  nextChapter: { number: 20, title: 'Plusquamperfekt', titleEn: 'Pluperfect (past perfect)' , href: 'chapter-b1-20-plusquamperfekt.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>eighteen chapters, one day.</em>',
    intro: 'A long Saturday: Uta wants to apply for an apartment fast because the price is good, and Timo — despite his nerves — offers her honest feedback on the application letter, recycling everything from the first half of B1 in one continuous story.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear all eighteen chapters\' grammar work together in one natural conversation'
    ],
    scene: 'Ein langer Samstag in der Stadt',
    femaleSpeakers: ['Uta'],
    dialogue: [
      { speaker: 'Uta', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix' },
        { w: ',', plain: true },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Wohnung', role: 'r-akkusativ', en: 'apartment', hi: 'अपार्टमेंट', pron: 'VO-nung', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'bewerben', role: 'r-verb', en: 'apply', hi: 'आवेदन करना', pron: 'be-VAIR-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I plan to apply for the apartment.', hi: 'Main apartment ke liye avedan karne ki soch raha hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Preis', role: 'r-subject', en: 'price', hi: 'कीमत', pron: 'pryse', type: 'Noun · masc.' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'gut', role: 'r-subject', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'schnell', role: 'r-adverb', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adverb' },
        { w: 'bewerben', role: 'r-verb', en: 'apply', hi: 'आवेदन करना', pron: 'be-VAIR-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Me too! Because the price is so good, we should apply quickly.', hi: 'Main bhi! Kyunki keemat itni achhi hai, humein jaldi avedan karna chahiye.' },
      { speaker: 'Uta', tokens: [
        { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', pron: 'trots', type: 'Preposition + genitive' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'guten', role: 'r-dativ', en: 'good', hi: 'अच्छे', pron: 'GOO-ten', type: 'Adjective · genitive' },
        { w: 'Preises', role: 'r-dativ', en: 'price (gen.)', hi: 'कीमत के', pron: 'PRY-zes', type: 'Noun · masc. genitive' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nervös', role: 'r-subject', en: 'nervous', hi: 'घबराई हुई', pron: 'ner-VÖS', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Despite the good price, I am nervous.', hi: 'Achhi keemat ke bawajood, main ghabraayi hui hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'okay', role: 'r-akkusativ', en: 'okay', hi: 'ठीक', pron: 'o-KAY', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'ehrliches', role: 'r-akkusativ', en: 'honest', hi: 'ईमानदार', pron: 'AIR-li-khes', type: 'Adjective', why: 'ehrlich = honest (this chapter).', ex: 'ehrliches Feedback', exEn: 'honest feedback' },
        { w: 'Feedback', role: 'r-akkusativ', en: 'feedback', hi: 'प्रतिक्रिया', pron: 'FEET-bek', type: 'Noun · neut.' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देना', pron: 'GAY-buh', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Would it be okay if I gave you honest feedback?', hi: 'Kya theek hoga agar main tumhe imaandaar feedback dun?' },
      { speaker: 'Uta', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '!', plain: true }
      ], en: 'Yes, please!', hi: 'Haan, kripya!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुमने', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'लिखा है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Bewerbungsschreiben', role: 'r-akkusativ', en: 'application letter', hi: 'आवेदन पत्र', pron: 'be-VAIR-bungs-shry-ben', type: 'Noun · neut.' },
        { w: 'super', role: 'r-akkusativ', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'You have written the application letter great.', hi: 'Tumne avedan patra badhiya likha hai.' },
      { speaker: 'Uta', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'देता है', pron: 'makht', type: 'Verb · machen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'guten', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Adjective' },
        { w: 'Eindruck', role: 'r-akkusativ', en: 'impression', hi: 'प्रभाव', pron: 'INE-druk', type: 'Noun · masc.', why: 'einen guten Eindruck machen (recycled).' },
        { w: '.', plain: true }
      ], en: 'Thanks! That gives me a good impression.', hi: 'Dhanyavaad! Yeh mujhe achha prabhaav deta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>official halfway checkpoint</strong> of your B1 course — no new grammar. It weaves together everything from Chapters 1–18: <span class="de r-preposition">zu + Infinitiv</span>, <span class="de r-conjunction">weil/da/obwohl</span>, polite <span class="de r-verb">Konjunktiv II</span>, <span class="de r-conjunction">deshalb &amp; so … dass</span>, <span class="de r-genitiv">Genitiv</span>, <span class="de r-verb">Präteritum</span>, <span class="de r-time">Zeitangaben</span>, <span class="de r-verb">Passiv</span>, <span class="de r-dativ">Relativsätze</span> (including with prepositions), <span class="de r-adjective">Adjektivdeklination</span>, <span class="de r-comparative">Komparativ &amp; Superlativ</span>, <span class="de r-nnoun">N-Deklination</span>, <span class="de r-futur">Futur I</span>, and <span class="de r-purpose">damit &amp; um … zu</span> — under full Goethe-B1 exam conditions.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the HALFWAY CHECKPOINT of the B1 course, covering Chapters 1-18 — no new grammar. The learner wrote a short exam-style text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — check against ALL of these, but only flag genuine errors:\n' +
    '- zu + Infinitiv after triggers (hoffen, versuchen, vorhaben, planen…); weil/da/obwohl send the verb to clause-end; Konjunktiv II (könnte/würde/hätte/wäre) softens requests without combining markers.\n' +
    '- deshalb pulls the verb immediately after it; so + Adjektiv + dass sends the verb to the end; wegen/trotz/während take the Genitiv (correct noun ending).\n' +
    '- Präteritum for sein/haben/modals and irregular verbs in narration; Zeitangaben: Dativ for everyday (am/im), Genitiv for literary (eines/Anfang des).\n' +
    '- Passiv Präsens: werden + Partizip II, never a conjugated second verb.\n' +
    '- Relativsätze: gender/number from antecedent, case from function (Nom./Akk./Dativ) or from a preposition that stays glued to the pronoun.\n' +
    '- Adjektivdeklination: weak after der-words, mixed after ein-words, strong with no article.\n' +
    '- Komparativ/Superlativ before a noun needs BOTH the comparison marker and a declension ending; irregular forms (gut/hoch/viel/gern) are memorized exceptions.\n' +
    '- N-Deklination nouns (der Student, der Kollege, der Present…) take -n/-en in every case except Nominativ Singular.\n' +
    '- Futur I: werden + bare Infinitiv at the end, agreeing with its subject.\n' +
    '- um…zu requires the same subject in both clauses; damit is used when subjects differ.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Halfway readiness:</b> one sentence on whether this text shows readiness for the second half of B1.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Outstanding — you\'ve mastered the first half of B1. Every structure from Chapters 1–18 is working together cleanly. Move confidently into the second half.',
    mid: 'Solid halfway result. Identify your weakest one or two grammar points below and re-run those chapters before continuing.',
    low: 'Worth a structured review of Chapters 1–18 before moving on — focus on the grammar points flagged in your weakness report below.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Wohnung', role: 'plain' },
    { w: 'wird', role: 'r-verb' }, { w: 'uns', role: 'r-dativ' },
    { w: 'gezeigt', role: 'r-verb' }, { w: ',', role: 'plain' },
    { w: 'damit', role: 'r-purpose' }, { w: 'wir', role: 'r-subject' },
    { w: 'entscheiden', role: 'plain' }, { w: 'können', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how all eighteen chapters\' grammar works together.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Uta and Timo spend a long Saturday, recycling all eighteen chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words and phrases from Chapters 1–18.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Complete mixed review of all grammar from the first half of B1.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a long Goethe-style passage mixing all eighteen chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point across six realistic exam-style scenarios.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using the full first-half grammar toolkit.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all eighteen chapters\' grammar in mixed exercises.' },
    { id: 'quiz',       label: 'Halbzeit Mock Test', tag: 'assess',
      objective: 'A full-length Goethe-B1-style halfway mock test. Pass to bank the full 300 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your halfway B1 readiness report — strengths, weaknesses, and a personalized study plan.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Halbzeit Mock Test PDF',
      desc: 'A complete, extended Goethe-B1-style halfway mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a "Top 50 mistakes to avoid" section.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '24 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words and phrases from Chapters 1–18 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Every grammar point from the first half of B1 — zu + Infinitiv through damit & um…zu — all in one master reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle a full-length Goethe-B1 listening & reading exam' },
    { de: 'Schreiben', text: 'Write a clean B1 email, complaint, opinion, or report' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Mix all eighteen chapters\' grammar correctly in one text' },
    { de: 'Halbzeit erreicht', text: 'Know your exact halfway B1 readiness score and study plan' }
  ],

  // ---------- Vocabulary review (~36 items — no new words, from Ch.1–18) ----------
  vocab: [
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', ex: 'Ich hoffe, die Stelle zu bekommen.', exEn: 'I hope to get the position.', exHi: 'Mujhe ummeed hai ki main pad pa loongi.' },
    { de: 'vorhaben', pos: 'verb', en: 'to plan, intend', hi: 'योजना बनाना', ex: 'Ich habe vor, mich zu bewerben.', exEn: 'I\'m planning to apply.', exHi: 'Mera iraada hai apply karna.' },
    { de: 'weil', pos: 'grammar', en: 'because (neutral reason)', hi: 'क्योंकि', ex: 'Ich lerne, weil ich bestehen möchte.', exEn: 'I study because I want to pass.', exHi: 'Main padhti hoon kyunki main paas hona chahti hoon.' },
    { de: 'obwohl', pos: 'grammar', en: 'although (contrast)', hi: 'हालांकि', ex: 'Obwohl ich müde war, arbeitete ich weiter.', exEn: 'Although I was tired, I kept working.', exHi: 'Halanki main thaki thi, maine kaam jaari rakha.' },
    { de: 'könnte', pos: 'verb', en: 'could (polite request)', hi: 'क्या आप कर सकते हैं', ex: 'Könnten wir zuerst frühstücken?', exEn: 'Could we have breakfast first?', exHi: 'Kya hum pehle nashta kar sakte hain?' },
    { de: 'wäre', pos: 'verb', en: 'would be', hi: 'होगा', ex: 'Wärst du so freundlich, mir zu helfen?', exEn: 'Would you be so kind as to help me?', exHi: 'Kya tum itni dayaalu hogi ki meri madad karo?' },
    { de: 'deshalb', pos: 'grammar', en: 'that\'s why, therefore (result)', hi: 'इसलिए', ex: 'Ich war müde. Deshalb ging ich früh schlafen.', exEn: 'I was tired. That\'s why I went to sleep early.', exHi: 'Main thaki thi. Isiliye main jaldi so gayi.' },
    { de: 'so … dass', pos: 'grammar', en: 'so … that (strong consequence)', hi: 'इतना … कि', ex: 'Ich war so müde, dass ich sofort einschlief.', exEn: 'I was so tired that I fell asleep immediately.', exHi: 'Main itni thaki thi ki main turant so gayi.' },
    { de: 'wegen', pos: 'grammar', en: 'because of (+ Genitiv)', hi: 'की वजह से', ex: 'Wegen des guten Preises hoffe ich, die Wohnung zu bekommen.', exEn: 'Because of the good price, I hope to get the apartment.', exHi: 'Achhi keemat ki wajah se, mujhe ummeed hai ki main flat pa loongi.' },
    { de: 'trotz', pos: 'grammar', en: 'despite (+ Genitiv)', hi: 'के बावजूद', ex: 'Trotz des schweren Weges bin ich sicher.', exEn: 'Despite the difficult path, I\'m sure.', exHi: 'Kathin raaste ke bawajood, mujhe yakeen hai.' },
    { de: 'während', pos: 'grammar', en: 'during (+ Genitiv)', hi: 'के दौरान', ex: 'Während der Besichtigung stellte ich viele Fragen.', exEn: 'During the viewing, I asked many questions.', exHi: 'Nirikshan ke dauran, maine kai sawaal poochhe.' },
    { de: 'war', pos: 'verb', en: 'was (Präteritum of sein)', hi: 'था/थी (Präteritum)', ex: 'Ich war gestern so müde.', exEn: 'I was so tired yesterday.', exHi: 'Kal main itni thaki hui thi.' },
    { de: 'eines Tages', pos: 'idiom', en: 'one day (Genitiv time expression)', hi: 'एक दिन', ex: 'Eines Tages möchte ich meine eigene Firma gründen.', exEn: 'One day, I\'d like to found my own company.', exHi: 'Ek din, main apni khud ki company sthaapit karna chahti hoon.' },
    { de: 'am Morgen', pos: 'idiom', en: 'in the morning (Dativ time expression)', hi: 'सुबह में', ex: 'Am Morgen wird uns die Wohnung gezeigt.', exEn: 'In the morning, the apartment is shown to us.', exHi: 'Subah, humein flat dikhaya jaata hai.' },
    { de: 'werden', pos: 'verb', en: 'to become / Passiv & Futur I Hilfsverb', hi: 'बनना / सहायक क्रिया', ex: 'Die Wohnung wird uns gezeigt.', exEn: 'The apartment is shown to us.', exHi: 'Flat humein dikhaya jaata hai.' },
    { de: 'gezeigt', pos: 'verb', en: 'shown (Partizip II of zeigen)', hi: 'दिखाया गया', ex: 'Die Wohnung wird uns gezeigt.', exEn: 'The apartment is shown to us.', exHi: 'Flat humein dikhaya jaata hai.' },
    { de: 'gehören', pos: 'verb', en: 'to belong to (+ Dativ)', hi: 'का होना', ex: 'Der Balkon gehört der Wohnung.', exEn: 'The balcony belongs to the apartment.', exHi: 'Balcony flat ka hai.' },
    { de: 'vertrauen', pos: 'verb', en: 'to trust (+ Dativ)', hi: 'भरोसा करना', ex: 'Das ist der Kollege, dem ich vertraue.', exEn: 'That\'s the colleague whom I trust.', exHi: 'Yeh wahi sahkarmi hai jispar main bharosa karta hoon.' },
    { de: 'mit dem', pos: 'grammar', en: 'with whom (Dativ relative + preposition)', hi: 'जिसके साथ', ex: 'Das ist der Makler, mit dem ich telefoniert habe.', exEn: 'That\'s the agent with whom I talked on the phone.', exHi: 'Yeh wahi agent hai jiske saath maine phone par baat ki.' },
    { de: 'großer/große/großes', pos: 'adjective', en: 'big (all three declensions)', hi: 'बड़ा', ex: 'ein großer Garten, der große Garten, großer Garten.', exEn: 'a big garden, the big garden, big garden.', exHi: 'ek bada bagicha, woh bada bagicha, bada bagicha.' },
    { de: 'größte', pos: 'adjective', en: 'biggest (superlative before noun)', hi: 'सबसे बड़ा', ex: 'Das ist der größte Traum, den ich je gehört habe.', exEn: 'That\'s the biggest dream I\'ve ever heard.', exHi: 'Yeh sabse bada sapna hai jo maine kabhi suna hai.' },
    { de: 'der Kollege', pos: 'noun', en: 'colleague (N-Deklination noun)', hi: 'सहकर्मी', ex: 'Der Kollege hilft mir; ich vertraue dem Kollegen.', exEn: 'The colleague helps me; I trust the colleague.', exHi: 'Sahkarmi meri madad karta hai; main sahkarmi par bharosa karta hoon.' },
    { de: 'der Student', pos: 'noun', en: 'student (N-Deklination noun)', hi: 'छात्र', ex: 'Der Student lernt Deutsch; ich kenne den Studenten.', exEn: 'The student learns German; I know the student.', exHi: 'Chhatra German seekhta hai; main chhatra ko jaanta hoon.' },
    { de: 'werde', pos: 'verb', en: 'will (Futur I, ich-Form)', hi: 'करूँगी', ex: 'Ich werde morgen die Bewerbung schicken.', exEn: 'I\'ll send the application tomorrow.', exHi: 'Main kal aavedan bhejoongi.' },
    { de: 'wird', pos: 'verb', en: 'will (Futur I, er/sie/es-Form)', hi: 'होगा', ex: 'Der Makler wird um zehn Uhr kommen.', exEn: 'The agent will come at ten o\'clock.', exHi: 'Agent das baje aayega.' },
    { de: 'damit', pos: 'grammar', en: 'so that (different subjects)', hi: 'ताकि', ex: 'Ich stelle alles zusammen, damit der Chef zufrieden ist.', exEn: 'I put everything together, so that the boss is satisfied.', exHi: 'Main sab kuch taiyaar karti hoon, taaki boss santusht ho.' },
    { de: 'um … zu', pos: 'grammar', en: 'in order to (same subject)', hi: 'ताकि', ex: 'Ich lese die Bewerbung durch, um Fehler zu finden.', exEn: 'I read through the application, in order to find errors.', exHi: 'Main aavedan padhti hoon, taaki galatiyaan dhoondh sakoon.' },
    { de: 'Bewerbung', art: 'die', gender: 'f', plural: 'Bewerbungen', pos: 'noun', en: 'application', hi: 'आवेदन', ex: 'Die Bewerbung wird morgen verschickt.', exEn: 'The application will be sent tomorrow.', exHi: 'Aavedan kal bheja jaayega.' },
    { de: 'Wohnung', art: 'die', gender: 'f', plural: 'Wohnungen', pos: 'noun', en: 'apartment', hi: 'फ़्लैट', ex: 'Die Wohnung wird uns am Morgen gezeigt.', exEn: 'The apartment is shown to us in the morning.', exHi: 'Flat humein subah dikhaya jaata hai.' },
    { de: 'Preis', art: 'der', gender: 'm', plural: 'Preise', pos: 'noun', en: 'price', hi: 'क़ीमत', ex: 'Wegen des guten Preises hoffe ich, sie zu bekommen.', exEn: 'Because of the good price, I hope to get it.', exHi: 'Achhi keemat ki wajah se, mujhe ummeed hai ki main isse pa loongi.' },
    { de: 'Traum', art: 'der', gender: 'm', plural: 'Träume', pos: 'noun', en: 'dream', hi: 'सपना', ex: 'Das ist der größte Traum, den ich je gehört habe.', exEn: 'That\'s the biggest dream I\'ve ever heard.', exHi: 'Yeh sabse bada sapna hai jo maine kabhi suna hai.' },
    { de: 'gründen', pos: 'verb', en: 'to found', hi: 'स्थापित करना', ex: 'Eines Tages möchte ich meine eigene Firma gründen.', exEn: 'One day, I\'d like to found my own company.', exHi: 'Ek din, main apni khud ki company sthaapit karna chahti hoon.' },
    { de: 'Eindruck', art: 'der', gender: 'm', plural: 'Eindrücke', pos: 'noun', en: 'impression', hi: 'प्रभाव', ex: 'Der Personalchef bekommt einen guten Eindruck.', exEn: 'The HR director gets a good impression.', exHi: 'HR pramukh ko achha prabhaav milta hai.' },
    { de: 'unterstützen', pos: 'verb', en: 'to support', hi: 'समर्थन करना', ex: 'Der Kollege unterstützt mich dabei.', exEn: 'The colleague supports me in this.', exHi: 'Sahkarmi is mein mera saath deta hai.' },
    { de: 'schaffen', pos: 'verb', en: 'to manage, accomplish', hi: 'कर पाना', ex: 'Ich bin sicher, dass du es schaffen wirst.', exEn: 'I\'m sure that you\'ll manage it.', exHi: 'Mujhe yakeen hai ki tum ise kar paoge.' },
    { de: 'ehrlich', pos: 'adjective', en: 'honest', hi: 'ईमानदार', ex: 'Wir werden ein ehrliches Feedback bekommen.', exEn: 'We\'ll get honest feedback.', exHi: 'Humein imandaar feedback milega.' },
    { de: 'Feedback', art: 'das', gender: 'n', plural: 'Feedbacks', pos: 'noun', en: 'feedback', hi: 'फ़ीडबैक', ex: 'Am Abend werden wir ein ehrliches Feedback bekommen.', exEn: 'In the evening, we\'ll get honest feedback.', exHi: 'Shaam ko, humein imandaar feedback milega.' }
  ],

  // ---------- Grammar Review (mixed, all 18 chapters) ----------
  grammar: [
    {
      title: 'zu + Infinitiv, weil/da/obwohl, Konjunktiv II (Ch.1–3)',
      body: [ 'A verb/adjective/noun trigger links to zu + Infinitiv at the end. weil/da/obwohl send the verb to clause-end. könnte/würde/hätte/wäre soften requests.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['zu + Infinitiv', '<span class="de">Ich hoffe, die Stelle zu bekommen.</span>'],
          ['weil/da/obwohl', '<span class="de">Obwohl ich müde war, arbeitete ich weiter.</span>'],
          ['Konjunktiv II', '<span class="de">Wärst du so freundlich, mir zu helfen?</span>']
        ]
      },
      hinglish: 'Ek trigger zu + Infinitiv se end mein jodta hai. weil/da/obwohl verb ko clause-end bhejte hain. könnte/würde/hätte/wäre requests ko soft karte hain.'
    },
    {
      title: 'deshalb & so … dass, Genitiv + wegen/trotz/während (Ch.4–5)',
      body: [ 'deshalb states a plain result (verb immediately after). so + Adjektiv + dass shows strong consequence. wegen/trotz/während take the Genitiv.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['deshalb', '<span class="de">Ich war müde. Deshalb ging ich schlafen.</span>'],
          ['so … dass', '<span class="de">Ich war so müde, dass ich einschlief.</span>'],
          ['wegen/trotz/während', '<span class="de">Wegen des guten Preises hoffe ich …</span>']
        ]
      },
      hinglish: 'deshalb plain result batata hai. so + Adjektiv + dass strong consequence dikhata hai. wegen/trotz/während Genitiv lete hain.'
    },
    {
      title: 'Präteritum & Zeitangaben (Ch.7–8)',
      body: [ 'sein/haben/modal verbs and irregular verbs appear in Präteritum for narration. Dativ (am/im) for everyday time, Genitiv (eines/Anfang des) for literary time.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Präteritum', '<span class="de">Ich war gestern müde.</span>'],
          ['Dativ Zeitangabe', '<span class="de">Am Morgen …</span>'],
          ['Genitiv Zeitangabe', '<span class="de">Eines Tages …</span>']
        ]
      },
      hinglish: 'sein/haben/modal verbs aur irregular verbs Präteritum mein aate hain. Dativ (am/im) everyday time ke liye, Genitiv (eines/Anfang des) literary time ke liye.'
    },
    {
      title: 'Passiv, Relativsätze (im Dativ & mit Präpositionen) (Ch.10–11, 18)',
      body: [ 'werden + Partizip II for Passiv. Relative pronouns take gender/number from the antecedent, case from function — or from a preposition glued in front.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Passiv', '<span class="de">Die Wohnung wird uns gezeigt.</span>'],
          ['Relativsatz im Dativ', '<span class="de">der Kollege, dem ich vertraue</span>'],
          ['Relativsatz mit Präposition', '<span class="de">der Makler, mit dem ich telefoniert habe</span>']
        ]
      },
      hinglish: 'werden + Partizip II Passiv ke liye. Relative pronouns antecedent se gender/number lete hain, function ya preposition se case.'
    },
    {
      title: 'Adjektivdeklination, Komparativ & Superlativ, N-Deklination (Ch.12, 14–15)',
      body: [ 'Weak/mixed/strong declension applies to any adjective before a noun — including comparatives and superlatives. N-nouns take -n/-en except in Nominativ Singular.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Adjektivdeklination', '<span class="de">der große Hund, ein großer Hund, großer Hund</span>'],
          ['Komparativ/Superlativ vor Nomen', '<span class="de">der größte Traum</span>'],
          ['N-Deklination', '<span class="de">der Kollege → dem Kollegen</span>']
        ]
      },
      hinglish: 'Weak/mixed/strong declension kisi bhi adjective ke liye jo noun ke pehle ho — comparatives/superlatives bhi. N-nouns Nominativ Singular ke alawa -n/-en lete hain.'
    },
    {
      title: 'Futur I, damit & um … zu (Ch.16–17)',
      body: [ 'werden + Infinitiv (Satzende) for plans/predictions/promises/assumptions. um…zu for same subject, damit for different subjects.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Futur I', '<span class="de">Der Makler wird um zehn Uhr kommen.</span>'],
          ['um … zu', '<span class="de">Ich lese es durch, um Fehler zu finden.</span>'],
          ['damit', '<span class="de">Ich stelle alles zusammen, damit der Chef zufrieden ist.</span>']
        ]
      },
      hinglish: 'werden + Infinitiv (Satzende) plans/predictions/promises/assumptions ke liye. um…zu same subject, damit different subjects.'
    },
    {
      title: 'Quick decision guide — all eighteen chapters together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['link two verbs, give a reason, or soften a request?', '→ zu + Infinitiv / weil-da-obwohl / Konjunktiv II'],
          ['state a result, place events in time, or narrate the past?', '→ deshalb-so…dass / Zeitangaben / Präteritum'],
          ['focus on the action, or describe someone as an object?', '→ Passiv / Relativsätze (+ Präpositionen)'],
          ['put an adjective (or a comparative/superlative) before a noun?', '→ Adjektivdeklination'],
          ['use a noun like Student, Kollege, Herr?', '→ N-Deklination'],
          ['talk about the future, or explain a purpose?', '→ Futur I / um…zu / damit']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool — Chapters 1-18 ka poora system ek jagah.'
    }
  ],

  // ---------- Reading (Goethe-style: long passage, clickable) ----------
  reading: {
    title: 'Der lange Samstag',
    titleEn: 'The long Saturday',
    tokens: [
      { w: 'Am', role: 'r-time', en: 'in the', hi: 'में', type: 'Contraction · an dem', why: 'Dativ time expression (recycled — Ch.8).' },
      { w: 'Morgen', role: 'r-time', en: 'morning', hi: 'सुबह', type: 'Noun · masc.' },
      { w: 'wird', role: 'r-verb', en: 'is (Passiv)', hi: 'दिखाई जाती है', type: 'Verb · werden (Passiv Präsens)', why: 'Passiv Präsens (recycled — Ch.10).' },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'Rohan', role: 'plain', en: 'Rohan', hi: 'रोहन', type: 'Name' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'helle', role: 'plain', en: 'bright', hi: 'रोशन', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension (recycled — Ch.12).' },
      { w: 'Wohnung', role: 'plain', en: 'apartment', hi: 'फ़्लैट', type: 'Noun · fem.' },
      { w: 'gezeigt', role: 'r-verb', en: 'shown (Satzende)', hi: 'दिखाई (Satzende)', type: 'Verb · zeigen (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Makler', role: 'plain', en: 'agent', hi: 'एजेंट', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'mit', role: 'r-prep-rel', en: 'with', hi: 'के साथ', type: 'Präposition · Dativ', why: 'Preposition + relative pronoun (recycled — Ch.18).' },
      { w: 'dem', role: 'r-prep-rel', en: 'whom', hi: 'जिसके साथ', type: 'Relativpronomen · Dativ' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'telefoniert', role: 'r-verb', en: 'talked on the phone', hi: 'फ़ोन पर बात की (Satzende)', type: 'Verb · telefonieren (Partizip II, Satzende)' },
      { w: 'hatten', role: 'r-verb', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Präteritum, Satzende)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: ',', plain: true },
      { w: 'kam', role: 'r-verb', en: 'came (Satzende)', hi: 'आया (Satzende)', type: 'Verb · kommen (Präteritum, Satzende)' },
      { w: 'pünktlich', role: 'plain', en: 'punctually', hi: 'समय पर', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'guten', role: 'plain', en: 'good', hi: 'अच्छा', type: 'Adjective · schwach · Gen.', why: 'Weak declension (recycled — Ch.12).' },
      { w: 'Preises', role: 'plain', en: 'price (gen.)', hi: 'क़ीमत का', type: 'Noun · masc.' },
      { w: 'hofften', role: 'r-verb', en: 'hoped (Satzende)', hi: 'उम्मीद की (Satzende)', type: 'Verb · hoffen (Präteritum, Satzende)', why: 'hoffen + zu + Infinitiv (recycled — Ch.1).' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'उन्होंने', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Wohnung', role: 'plain', en: 'apartment', hi: 'फ़्लैट', type: 'Noun · fem.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'bekommen', role: 'r-verb', en: 'to get (Satzende)', hi: 'पाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', type: 'Adverb' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', type: 'Adverb', why: 'so + Adjektiv …, dass — strong consequence (recycled — Ch.4).' },
      { w: 'müde', role: 'plain', en: 'tired', hi: 'थकी हुई', type: 'Adjective' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'थी (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'sofort', role: 'r-adverb', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'eingeschlafen', role: 'r-verb', en: 'fell asleep (Satzende)', hi: 'सो गई (Satzende)', type: 'Verb · einschlafen (Präteritum, Satzende)' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'गई (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', type: 'Verb · haben (Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Bewerbungsunterlagen', role: 'plain', en: 'application documents', hi: 'आवेदन दस्तावेज़', type: 'Noun · plural' },
      { w: 'zusammengestellt', role: 'r-verb', en: 'compiled (Satzende)', hi: 'तैयार किया (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'damit', role: 'r-purpose', en: 'so that', hi: 'ताकि', type: 'Konjunktion · damit', why: 'damit — DIFFERENT subjects (recycled — Ch.17).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Personalchef', role: 'plain', en: 'HR director', hi: 'मानव संसाधन प्रमुख', type: 'Noun · masc.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'guten', role: 'plain', en: 'good', hi: 'अच्छा', type: 'Adjective · schwach · Akk.' },
      { w: 'Eindruck', role: 'plain', en: 'impression', hi: 'प्रभाव', type: 'Noun · masc.' },
      { w: 'bekommt', role: 'r-purpose', en: 'gets (Satzende)', hi: 'मिलता है (Satzende)', type: 'Verb · bekommen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Eines', role: 'plain', en: 'one (neut. gen.)', hi: 'एक', type: 'Determiner · Genitiv', why: 'eines Tages — literary Genitiv time expression (recycled — Ch.8).' },
      { w: 'Tages', role: 'plain', en: 'day (gen.)', hi: 'दिन का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'möchte', role: 'r-verb', en: 'would like', hi: 'चाहती है', type: 'Verb · Modalverb' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'ihre', role: 'plain', en: 'her (fem. acc.)', hi: 'अपनी', type: 'Possessivartikel · Akk.' },
      { w: 'eigene', role: 'plain', en: 'own', hi: 'अपनी', type: 'Adjective · gemischt · Akk.' },
      { w: 'Firma', role: 'plain', en: 'company', hi: 'कंपनी', type: 'Noun · fem.' },
      { w: 'gründen', role: 'r-verb', en: 'to found (Satzende)', hi: 'स्थापित करना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Kollege', role: 'plain', en: 'colleague', hi: 'सहकर्मी', type: 'N-Deklination · Nom. Sg.', why: 'der Kollege — N-Deklination noun (recycled — Ch.15).' },
      { w: ',', plain: true },
      { w: 'von', role: 'r-prep-rel', en: 'from', hi: 'से', type: 'Präposition · Dativ' },
      { w: 'dem', role: 'r-prep-rel', en: 'whom', hi: 'जिससे', type: 'Relativpronomen · Dativ' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'बहुत', type: 'Adverb' },
      { w: 'gelernt', role: 'r-verb', en: 'learned (Satzende)', hi: 'सीखा (Satzende)', type: 'Verb · lernen (Partizip II, Satzende)' },
      { w: 'hatte', role: 'r-verb', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: ',', plain: true },
      { w: 'unterstützte', role: 'r-verb', en: 'supported', hi: 'समर्थन किया (Position 2)', type: 'Verb · unterstützen (Präteritum, Position 2)' },
      { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उसे', type: 'Pronoun · Akk.' },
      { w: 'dabei', role: 'r-adverb', en: 'in this', hi: 'इसमें', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-time', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', type: 'Noun · masc.' },
      { w: 'wird', role: 'r-verb', en: 'will (Futur I)', hi: 'मिलेगा', type: 'Verb · werden (Futur I)', why: 'Futur I (recycled — Ch.16).' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'größte', role: 'plain', en: 'biggest', hi: 'सबसे बड़ा', type: 'Superlativ · schwach · Nom.', why: 'Superlative + weak declension (recycled — Ch.14).' },
      { w: 'Feedback', role: 'plain', en: 'feedback', hi: 'फ़ीडबैक', type: 'Noun · neut.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Tages', role: 'plain', en: 'day (gen.)', hi: 'दिन का', type: 'Noun · masc.' },
      { w: 'kommen', role: 'r-verb', en: 'to come (Satzende)', hi: 'आना', type: 'Infinitiv (Satzende)' },
      { w: ':', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Makler', role: 'plain', en: 'agent', hi: 'एजेंट', type: 'Noun · masc.' },
      { w: 'wird', role: 'r-verb', en: 'will (Satzende)', hi: 'बताएगा (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: 'ihnen', role: 'r-dativ', en: 'them', hi: 'उन्हें', type: 'Pronoun · Dativ' },
      { w: 'sagen', role: 'r-verb', en: 'to tell (Satzende)', hi: 'बताना', type: 'Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Wohnung', role: 'plain', en: 'apartment', hi: 'फ़्लैट', type: 'Noun · fem.' },
      { w: 'ihnen', role: 'r-dativ', en: 'to them', hi: 'उन्हें', type: 'Pronoun · Dativ' },
      { w: 'gehört', role: 'r-verb', en: 'belongs (Satzende)', hi: 'का है (Satzende)', type: 'Verb · gehören (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In the morning, Uta and Timo are shown a bright apartment. The agent, with whom they had talked on the phone, came punctually. Because of the good price, they hoped to get the apartment. Although Anna was so tired yesterday that she fell asleep immediately, she had compiled the application documents, so that the HR director gets a good impression. One day, she\'d like to found her own company. The colleague from whom she had learned a lot supported her in this. In the evening, the biggest feedback of the day will come: the agent will tell them whether the apartment belongs to them.'
  },

  // ---------- Listening (Goethe-style, 6 realistic B1 scenarios) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_019_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Uta, könntest du mal über mein Bewerbungsschreiben schauen?', en: 'Uta, could you take a look at my application letter?' },
      { id: 'B1_019_L002', speaker: 'Uta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Klar, zeig mal her ... Hm, der erste Satz ist ein bisschen zu förmlich.', en: 'Sure, let me see ... Hmm, the first sentence is a bit too formal.' },
      { id: 'B1_019_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Ich dachte, das klingt professionell.', en: 'Really? I thought that sounds professional.' },
      { id: 'B1_019_L004', speaker: 'Uta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es klingt eher distanziert. Schreib lieber etwas Persönliches am Anfang.', en: 'It sounds more distant. Better write something personal at the beginning.' }
    ],
    transcript: 'Uta, könntest du mal über mein Bewerbungsschreiben schauen? Klar, zeig mal her ... Hm, der erste Satz ist ein bisschen zu förmlich. Wirklich? Ich dachte, das klingt professionell. Es klingt eher distanziert. Schreib lieber etwas Persönliches am Anfang.',
    translation: 'Uta, could you take a look at my application letter? Sure, let me see ... Hmm, the first sentence is a bit too formal. Really? I thought that sounds professional. It sounds more distant. Better write something personal at the beginning.',
    tokens: [
      { w: 'Uta' },
      { w: ',', plain: true },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'mal' },
      { w: 'über' },
      { w: 'mein' },
      { w: 'Bewerbungsschreiben' },
      { w: 'schauen' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'zeig' },
      { w: 'mal' },
      { w: 'her' },
      { w: '...', plain: true, spaceBefore: true },
      { w: 'Hm' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'erste' },
      { w: 'Satz' },
      { w: 'ist' },
      { w: 'ein' },
      { w: 'bisschen' },
      { w: 'zu' },
      { w: 'förmlich' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'dachte' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'klingt' },
      { w: 'professionell' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'klingt' },
      { w: 'eher' },
      { w: 'distanziert' },
      { w: '.', plain: true },
      { w: 'Schreib' },
      { w: 'lieber' },
      { w: 'etwas' },
      { w: 'Persönliches' },
      { w: 'am' },
      { w: 'Anfang' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hält Uta vom ersten Satz?', qEn: 'What does Uta think of the first sentence?', options: ['zu locker', 'zu förmlich', 'perfekt', 'zu kurz'], optionsEn: ['too casual', 'too formal', 'perfect', 'too short'], answer: 1,
        explain: '"… der erste Satz ist ein bisschen zu förmlich."' },
      { q: 'Was schlägt Uta vor?', qEn: 'What does Uta suggest?', options: ['etwas Persönliches am Anfang', 'einen kürzeren Brief', 'mehr Formalität', 'ein anderes Thema'], optionsEn: ['something personal at the start', 'a shorter letter', 'more formality', 'a different topic'], answer: 0,
        explain: '"Schreib lieber etwas Persönliches am Anfang."' }
    ]
  },

  speaking: [
    { task: "Ein Freund bittet dich, sein Bewerbungsschreiben zu prüfen. Reagiere.", taskEn: "A friend asks you to check his application letter. React.", de: "Klar, zeig mal her. Der erste Satz ist ein bisschen zu förmlich.", en: "Sure, let me see. The first sentence is a bit too formal." },
    { task: "Prüfung, Teil 1: Stell dich vor und sag, was du vorhast.", taskEn: "Exam, Part 1: introduce yourself and say what you're planning.", de: "Ich habe vor, mich bei einer Firma zu bewerben, weil ich mehr lernen will.", en: "I'm planning to apply to a company, because I want to learn more." },
    { task: "Teil 2: Sprich über deine Wohnungssuche.", taskEn: "Part 2: talk about your flat hunt.", de: "Wegen der hohen Mieten suche ich schon lange, obwohl ich flexibel bin.", en: "Because of the high rents I've been looking for a long time, even though I'm flexible." },
    { task: "Ein Freund fragt, wem du bei der Bewerbung vertraust.", taskEn: "A friend asks who you trust with your application.", de: "Ich vertraue der Kollegin, der ich meine Unterlagen gezeigt habe.", en: "I trust the colleague I showed my documents to." },
    { task: "Erzähl von einem Tag, der schwierig war.", taskEn: "Talk about a day that was difficult.", de: "Der Tag war so lang, dass ich am Morgen danach kaum aufstehen konnte.", en: "The day was so long that the next morning I could hardly get up." },
    { task: "Teil 3: Plant zusammen die Vorbereitung.", taskEn: "Part 3: plan the preparation together.", de: "Wir könnten uns treffen. Ich wäre am Freitag frei.", en: "We could meet. I'd be free on Friday." },
    { task: "Rollenspiel: Ihr besprecht die größte Schwierigkeit im Kurs.", taskEn: "Role-play: you discuss the biggest difficulty in the course.", de: "Für mich ist das Sprechen am schwersten. Trotz der Übungen bin ich nervös.", en: "For me speaking is the hardest. Despite the exercises I'm nervous." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe B1 writing (Halbzeit-Test). Choose ONE task and write ~70 words, using at least six grammar points from Chapters 1–18 (zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv, Präteritum, Zeitangaben, Passiv, Relativsätze, Adjektivdeklination, Komparativ/Superlativ, N-Deklination, Futur I, or damit/um…zu). (1) FORMAL EMAIL: apply for a job, describing your qualifications and plans. (2) OPINION: what makes an apartment or city livable? (3) TRAVEL REPORT: describe a memorable trip, including something that went wrong.',
    starters: ['Sehr geehrte/r …,', 'Ich hoffe, …', 'Wegen …', 'Obwohl …', 'Deshalb …', 'Eines Tages …'],
    placeholder: 'Sehr geehrte Damen und Herren, ich bewerbe mich hiermit für die Stelle …',
    minWords: 70
  },

  // ---------- Exercises (4 types, mixed Ch.1–18) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich habe vor, mich bei einem Start-up ___."',
      options: ['bewerben', 'zu bewerben', 'beworben'],
      answer: 1,
      explain: 'vorhaben + zu + Infinitiv: "Ich habe vor, mich zu bewerben."'
    },
    gap: {
      sentence: ['Die Wohnung ', ' uns am Morgen gezeigt.'],
      gaps: [ { answer: 'wird', accepts: ['wird'] } ],
      explain: 'Passiv Präsens: werden + Partizip II.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Ich hoffe, …', art: 'zu + Infinitiv' },
        { noun: 'Die Wohnung wird …', art: 'Passiv (Präsens)' },
        { noun: 'Das ist der Kollege, dem …', art: 'Relativsatz im Dativ' },
        { noun: 'der Makler, mit dem …', art: 'Relativsatz mit Präposition' },
        { noun: 'Der Kollege → dem Kollegen', art: 'N-Deklination' },
        { noun: 'Der Makler wird kommen.', art: 'Futur I' }
      ]
    },
    builder: {
      target: 'Build: "The apartment is shown to us in the morning."',
      bank: ['Die', 'Wohnung', 'wird', 'uns', 'am', 'Morgen', 'gezeigt', '.'],
      answer: ['Die', 'Wohnung', 'wird', 'uns', 'am', 'Morgen', 'gezeigt', '.'],
      roles: { 'wird': 'r-verb', 'gezeigt': 'r-verb', 'uns': 'r-dativ' }
    }
  },

  // ---------- Halbzeit Mock Test (10 mixed questions — longer than a Mini) ----------
  quiz: [
    { q: 'Complete: "Ich versuche, ruhig ___."', options: ['bleiben', 'zu bleiben', 'geblieben'], answer: 1,
      explain: 'versuchen + zu + Infinitiv.' },
    { q: 'Which connector states an unexpected CONTRAST?', options: ['weil', 'da', 'obwohl'], answer: 2,
      explain: 'obwohl means "although".' },
    { q: 'Complete: "Trotz ___ Regens gehen wir spazieren."', options: ['der', 'des', 'dem'], answer: 1,
      explain: 'der Regen is masculine → des Regens.' },
    { q: 'Complete: "Ich ___ letzte Woche krank." (Präteritum)', options: ['bin', 'war', 'habe'], answer: 1,
      explain: 'ich war is the Präteritum of sein.' },
    { q: 'Which is correct?', options: ['im Montag', 'am Montag', 'im Wecker'], answer: 1,
      explain: 'Weekdays take am (an dem).' },
    { q: 'Complete: "Das Auto ___ repariert."', options: ['ist', 'wird', 'hat'], answer: 1,
      explain: 'Passiv Präsens: werden + Partizip II.' },
    { q: 'Complete: "Das sind die Studenten, ___ ich helfe."', options: ['die', 'denen', 'den'], answer: 1,
      explain: 'helfen takes Dativ — plural Dativ relative pronoun is denen.' },
    { q: 'Which sentence is correctly declined?', options: ['der größer Hund', 'der größere Hund', 'der große Hund am größten'], answer: 1,
      explain: 'Comparative + weak declension: der + Nominativ masculine → -e.' },
    { q: 'Complete: "Ich kenne ___ Studenten." (Akkusativ)', options: ['der', 'den', 'dem'], answer: 1,
      explain: 'kennen takes Akkusativ — den Studenten.' },
    { q: 'Which sentence uses um…zu correctly?', options: ['Ich lerne Deutsch, um ich arbeite.', 'Ich lerne Deutsch, um zu arbeiten.', 'Ich lerne Deutsch, damit zu arbeiten.'], answer: 1,
      explain: 'um...zu needs zu + Infinitiv, with no separate conjugated subject.' }
  ],

  // ---------- Summary / Halbzeit Progress Report ----------
  takeaways: [
    { c: 'r-preposition', html: '<strong>Chapters 1–9 mastered:</strong> zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb & so … dass, Genitiv + wegen/trotz/während, Präteritum, Zeitangaben.' },
    { c: 'r-dativ', html: '<strong>Chapters 10–13 mastered:</strong> Passiv (Präsens), Relativsätze im Dativ, Adjektivdeklination — plus continuous recycling.' },
    { c: 'r-comparative', html: '<strong>Chapters 14–18 mastered:</strong> Komparativ & Superlativ vor Nomen, N-Deklination, Futur I, damit & um … zu, Relativsätze mit Präpositionen.' },
    { c: 'r-verb', html: '<strong>Speaking & writing confidence:</strong> you can introduce yourself, present a topic, plan together, and write a clean email, opinion, or report — using accurate B1 grammar.' },
    { c: 'r-nnoun', html: '<strong>Listening & reading readiness:</strong> you can follow long, multi-topic Goethe B1 texts drawing on all eighteen chapters at once.' },
    { c: 'r-futur', html: '<strong>Overall halfway readiness:</strong> if you scored well across this mock test, you\'re fully on track for the Goethe-Zertifikat B1 exam. Review any weak sections below, then move confidently into the second half of the course.' }
  ],
  revisionTips: [
    'Weak on zu-placement, weil/da/obwohl, or polite requests? Redo Ch.1–3.',
    'Unsure about deshalb/so…dass, Genitiv, Präteritum, or Zeitangaben? Redo Ch.4–5, 7–8.',
    'Shaky on Passiv or Dativ relative clauses? Redo Ch.10–11.',
    'Adjective endings feel unnatural? Redo Ch.12 — the weak/mixed/strong flowchart.',
    'Mixing up comparatives, N-nouns, or Futur I? Redo Ch.14–16.',
    'Confusing um…zu and damit, or forgetting the preposition in relative clauses? Redo Ch.17–18.'
  ]
};

window.CHAPTER = CHAPTER;
