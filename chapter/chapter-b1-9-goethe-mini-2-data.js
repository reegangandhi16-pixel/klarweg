/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 9
   "Goethe Mini 2" — SECOND B1 checkpoint. NO new grammar.
   Primary focus: Präteritum (Ch.7), Zeitangaben: Dativ & Genitiv
   (Ch.8). Continuously recycles: Infinitiv mit zu, weil/da/
   obwohl, Konjunktiv II (höfliche Bitten), deshalb & so … dass,
   Genitiv & Präpositionen mit Genitiv (Ch.1–6).
   Vocabulary source: uploaded chapter-09 list (60 items — a
   job-application/interview theme: Bewerber, Bewerbungsunter-
   lagen, Körpersprache, Vorstellungsgespräch-adjacent vocab,
   Teilzeitjob, Stundenlohn, …).
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-b1-6-goethe-mini-1-data.js exactly
   (checkpoint shape: flat vocab[] review set, grammar[] mixed
   review cards, tokenized reading, Goethe-style mock test,
   readiness takeaways, etc.) so it runs on the shared
   chapter-app.js / chapter-tutor.js engine. The Listening
   section bundles FIVE realistic Goethe B1 scenarios into one
   continuous transcript with per-scenario questions, since the
   shared engine renders one listening block per chapter.
============================================================ */
const CHAPTER = {
  id: 'b1-9-goethe-mini-2',
  phase: 'B1 · Phase 1',
  number: 9,
  title: 'Goethe Mini 2',
  titleEn: 'Goethe Checkpoint 2 — Präteritum & Zeitangaben',
  description: 'Your second B1 checkpoint — no new grammar. A complete Goethe-B1-style mock focused on Präteritum and Zeitangaben (Dativ & Genitiv), while continuously recycling zu + Infinitiv, weil/da/obwohl, polite Konjunktiv II, deshalb & so … dass, and the Genitiv with wegen/trotz/während.',
  xp: 260,
  time: 55,
  difficulty: 'Checkpoint',
  nextChapter: { number: 10, title: 'Passiv (Präsens)', titleEn: 'The passive voice (present tense)' , href: 'chapter-b1-10-passiv-praesens.html' },

  prevChapter: { number: 8, title: 'Zeitangaben: Dativ & Genitiv', titleEn: 'Time expressions: Dativ & Genitiv', href: 'chapter-b1-8-zeitangaben-dativ-genitiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together — one more time.</em>',
    intro: 'Nele has an interview tomorrow with an entrepreneur, and Timo helps her prepare — her outfit, her posture, whether she comes across as too stiff — recycling Präteritum and Zeitangaben across the whole conversation.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Präteritum and Zeitangaben working alongside zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, and the Genitiv'
    ],
    scene: 'Vorbereitung auf das Bewerbungsgespräch',
    femaleSpeakers: ['Nele'],
    dialogue: [
      { speaker: 'Nele', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Gespräch', role: 'r-akkusativ', en: 'interview', hi: 'साक्षात्कार', pron: 'ge-SHPRAYKH', type: 'Noun · neut.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Unternehmer', role: 'r-dativ', en: 'entrepreneur (dat.)', hi: 'उद्यमी के', pron: 'un-ter-NAY-mer', type: 'Noun · masc. dat.', why: 'der Unternehmer (this chapter).', ex: 'das Gespräch mit dem Unternehmer', exEn: 'the interview with the entrepreneur' },
        { w: '.', plain: true }
      ], en: 'Tomorrow I have the interview with the entrepreneur.', hi: 'Kal mera udyami ke saath interview hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your (neut.)', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive' },
        { w: 'Outfit', role: 'r-subject', en: 'outfit', hi: 'पोशाक', pron: 'OWT-fit', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'How is your outfit?', hi: 'Tumhari poshaak kaisi hai?' },
      { speaker: 'Nele', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'trage', role: 'r-verb', en: 'wear', hi: 'पहनती हूँ', pron: 'TRAH-guh', type: 'Verb · tragen (ich)' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'konservatives', role: 'r-akkusativ', en: 'conservative', hi: 'पारंपरिक', pron: 'kon-zer-va-TEE-ves', type: 'Adjective', why: 'konservativ = conservative (this chapter).', ex: 'Ich trage ein konservatives Outfit.', exEn: 'I wear a conservative outfit.' },
        { w: 'Outfit', role: 'r-akkusativ', en: 'outfit', hi: 'पोशाक', pron: 'OWT-fit', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I wear a conservative outfit.', hi: 'Main paramparik poshaak pehanti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Körperhaltung', role: 'r-subject', en: 'posture', hi: 'शारीरिक मुद्रा', pron: 'KÖR-per-hal-tung', type: 'Noun · fem.', why: 'die Körperhaltung (this chapter).', ex: 'Deine Körperhaltung ist wichtig.', exEn: 'Your posture is important.' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'entspannt', role: 'r-akkusativ', en: 'relaxed', hi: 'शांत', pron: 'ent-SHPANT', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होनी', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good. And your posture should be relaxed.', hi: 'Achha. Aur tumhari mudra shaant honi chahiye.' },
      { speaker: 'Nele', tokens: [
        { w: 'Meinst', role: 'r-verb', en: 'do you think', hi: 'सोचते हो', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wirke', role: 'r-verb', en: 'come across', hi: 'लगती हूँ', pron: 'VIR-kuh', type: 'Verb · wirken (ich)', why: 'wirken = to come across/seem (this chapter).', ex: 'Ich wirke ruhig.', exEn: 'I come across as calm.' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'steif', role: 'r-akkusativ', en: 'stiff', hi: 'कठोर', pron: 'shtife', type: 'Adjective', why: 'steif = stiff (this chapter).', ex: 'Ich wirke zu steif.', exEn: 'I come across as too stiff.' },
        { w: '?', plain: true }
      ], en: 'Do you think I come across as too stiff?', hi: 'Kya tumhe lagta hai main zyada kathor lagti hoon?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'wirkst', role: 'r-verb', en: 'come across', hi: 'लगती हो', pron: 'VIRKST', type: 'Verb · wirken (du)' },
        { w: 'offen', role: 'r-akkusativ', en: 'open', hi: 'खुले दिल', pron: 'O-fen', type: 'Adjective', why: 'offen = open (this chapter).', ex: 'Du wirkst offen.', exEn: 'You come across as open.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'kommunikativ', role: 'r-akkusativ', en: 'communicative', hi: 'संवादी', pron: 'ko-mu-ni-ka-TEEF', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'No, you come across as open and communicative.', hi: 'Nahi, tum khule dil aur samvaadi lagti ho.' },
      { speaker: 'Nele', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देता है', pron: 'geept', type: 'Verb · geben' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'Aufmerksamkeit', role: 'r-akkusativ', en: 'attention', hi: 'ध्यान', pron: 'OWF-mairk-zahm-kite', type: 'Noun · fem.', why: 'die Aufmerksamkeit (this chapter).', ex: 'Das gibt mir Aufmerksamkeit.', exEn: 'That gives me attention.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'achte', role: 'r-verb', en: 'pay attention', hi: 'ध्यान देती हूँ', pron: 'AKH-tuh', type: 'Verb · achten (ich)' },
        { w: 'darauf', role: 'r-subject', en: 'to it', hi: 'उस पर', pron: 'da-ROWF', type: 'Pronoun · adverbial' },
        { w: '.', plain: true }
      ], en: 'Thanks! That gives me attention. I pay attention to it.', hi: 'Dhanyavaad! Yeh mujhe dhyaan deta hai. Main uspar dhyaan deti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Much success tomorrow!', hi: 'Kal bahut safalta mile!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>second B1 checkpoint</strong> — no new grammar. It puts <span class="de r-verb">Präteritum</span> and <span class="de r-genitiv">Zeitangaben mit Dativ &amp; Genitiv</span> to work, while continuously recycling <span class="de r-preposition">zu + Infinitiv</span>, <span class="de r-conjunction">weil/da/obwohl</span>, polite <span class="de r-verb">Konjunktiv II</span>, <span class="de r-conjunction">deshalb &amp; so … dass</span>, and the <span class="de r-genitiv">Genitiv</span> with wegen/trotz/während — all under Goethe B1 exam conditions.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the SECOND B1 CHECKPOINT covering Chapters 1-8, with special focus on Präteritum and Zeitangaben (Dativ & Genitiv) — no new grammar. The learner wrote a short exam-style text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Präteritum: sein/haben/modal verbs almost always appear in the Präteritum even in spoken text; never mix war/hatte with a Partizip II for simple narration (e.g. "ich war gegangen" is wrong for plain past — use "ich ging" or "ich bin gegangen").\n' +
    '- Zeitangaben: everyday time expressions use Dativ (am Montag, im Sommer); literary/formal ones use Genitiv with the correct noun ending (eines Tages, Anfang des Monats, Mitte der Woche) — never drop the Genitiv -s/-es on masculine/neuter nouns.\n' +
    '- zu + Infinitiv after triggers like hoffen, versuchen, vorhaben, planen; weil/da/obwohl send the verb to the end of their clause; Konjunktiv II (könnte/würde/hätte/wäre) softens requests without combining two markers; deshalb pulls the verb immediately after it; so + Adjektiv + dass sends the dass-clause verb to the end; wegen/trotz/während take the Genitiv.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe B1 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your Präteritum and Zeitangaben are solid, and everything else recycles cleanly. Move on to <span class="de">Passiv (Präsens)</span>.',
    mid: 'Solid B1. Re-run the weakest section once (usually Präteritum irregular verbs or Genitiv noun endings), then you\'ll be ready.',
    low: 'Worth a full re-run of Chapters 7–8 before continuing — focus especially on sein/haben in the Präteritum and the Dativ/Genitiv time-expression split.'
  },

  parserSentence: [
    { w: 'Eines', role: 'r-genitiv' }, { w: 'Abends', role: 'r-genitiv' },
    { w: 'las', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: 'ein', role: 'plain' }, { w: 'Inserat', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Präteritum and Zeitangaben work alongside everything from Chapters 1–6.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anna prepares for a job interview, recycling all eight chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words from Chapters 1–8, with focus on job-application vocabulary.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: Präteritum, Zeitangaben, zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style job advertisement and application story.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point across five realistic exam-style scenarios.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this checkpoint\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all eight chapters\' grammar in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full Goethe-B1-style mini mock test. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your second B1 readiness check — strengths, weaknesses, and an overall score.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A complete Goethe-B1-style mini mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a final readiness checklist.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '16 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words from Chapters 1–8 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Präteritum, Zeitangaben (Dativ & Genitiv), zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, and Genitiv + wegen/trotz/während — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle full Goethe-B1 listening & reading tasks' },
    { de: 'Schreiben', text: 'Write a clean B1 email, opinion, or diary entry' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Mix Präteritum, Zeitangaben, and Chapters 1–6\'s grammar correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your second B1 readiness score and what to revise' }
  ],

  // ---------- Vocabulary review (~30 items — no new words, from Ch.1–8) ----------
  vocab: [
    { de: 'Bewerber', art: 'der', gender: 'm', plural: 'Bewerber', pos: 'noun', en: 'applicant', hi: 'आवेदक', ex: 'Der Bewerber kam pünktlich zum Gespräch.', exEn: 'The applicant came punctually to the interview.', exHi: 'Aavedak samay par interview ke liye aaya.' },
    { de: 'Stundenlohn', art: 'der', gender: 'm', plural: 'Stundenlöhne', pos: 'noun', en: 'hourly wage', hi: 'प्रति घंटा वेतन', ex: 'Der Stundenlohn war überraschend gut.', exEn: 'The hourly wage was surprisingly good.', exHi: 'Prati ghanta vetan aashcharyajanak roop se accha tha.' },
    { de: 'Teilzeitjob', art: 'der', gender: 'm', plural: 'Teilzeitjobs', pos: 'noun', en: 'part-time job', hi: 'अंशकालिक नौकरी', ex: 'Sie bewarb sich für einen Teilzeitjob.', exEn: 'She applied for a part-time job.', exHi: 'Usne ek part-time job ke liye apply kiya.' },
    { de: 'Bewerbungsunterlagen', pos: 'noun', en: 'application documents', hi: 'आवेदन दस्तावेज़', ex: 'Ich stellte meine Bewerbungsunterlagen zusammen.', exEn: 'I compiled my application documents.', exHi: 'Maine apne aavedan dastavez taiyaar kiye.' },
    { de: 'Fähigkeit', art: 'die', gender: 'f', plural: 'Fähigkeiten', pos: 'noun', en: 'ability', hi: 'क्षमता', ex: 'Seine Fähigkeit zu kommunizieren war beeindruckend.', exEn: 'His ability to communicate was impressive.', exHi: 'Uski sanvaad karne ki kshamata prabhaavshaali thi.' },
    { de: 'kommunikativ', pos: 'adjective', en: 'communicative', hi: 'संवादपटु', ex: 'Sie ist eine sehr kommunikative Person.', exEn: 'She\'s a very communicative person.', exHi: 'Woh ek bahut sanvaadapatu vyakti hai.' },
    { de: 'möglichst', pos: 'adverb', en: 'as … as possible', hi: 'यथासंभव', ex: 'Bitte kommen Sie möglichst früh.', exEn: 'Please come as early as possible.', exHi: 'Kripya yathasambhav jaldi aayein.' },
    { de: 'absolut', pos: 'adverb', en: 'absolutely', hi: 'बिल्कुल', ex: 'Das war absolut die richtige Entscheidung.', exEn: 'That was absolutely the right decision.', exHi: 'Yeh bilkul sahi faisla tha.' },
    { de: 'aggressiv', pos: 'adjective', en: 'aggressive', hi: 'आक्रामक', ex: 'Sein Ton war zu aggressiv im Gespräch.', exEn: 'His tone was too aggressive in the interview.', exHi: 'Baatcheet mein uska lehja bahut aakramak tha.' },
    { de: 'Aufmerksamkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', en: 'attention', hi: 'ध्यान', ex: 'Der Bewerber erregte viel Aufmerksamkeit.', exEn: 'The applicant attracted a lot of attention.', exHi: 'Aavedak ne bahut dhyan aakarshit kiya.' },
    { de: 'Aufregung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', en: 'excitement', hi: 'उत्तेजना', ex: 'Vor lauter Aufregung vergaß sie ihre Unterlagen.', exEn: 'From all the excitement, she forgot her documents.', exHi: 'Saari uttejana ki wajah se, woh apne dastavez bhool gayi.' },
    { de: 'Beurteilung', art: 'die', gender: 'f', plural: 'Beurteilungen', pos: 'noun', en: 'assessment', hi: 'मूल्यांकन', ex: 'Die Beurteilung fiel positiv aus.', exEn: 'The assessment turned out positive.', exHi: 'Mulyaankan sakaaratmak raha.' },
    { de: 'Einstellung', art: 'die', gender: 'f', plural: 'Einstellungen', pos: 'noun', en: 'approach, attitude', hi: 'दृष्टिकोण', ex: 'Ihre Einstellung zur Arbeit gefiel dem Chef.', exEn: 'Her attitude to work pleased the boss.', exHi: 'Uska kaam ke prati drishtikon boss ko pasand aaya.' },
    { de: 'Körperhaltung', art: 'die', gender: 'f', plural: 'Körperhaltungen', pos: 'noun', en: 'posture', hi: 'शारीरिक मुद्रा', ex: 'Deine Körperhaltung signalisiert viel.', exEn: 'Your posture signals a lot.', exHi: 'Tumhari sharirik mudra bahut kuch batati hai.' },
    { de: 'Persönlichkeit', art: 'die', gender: 'f', plural: 'Persönlichkeiten', pos: 'noun', en: 'personality', hi: 'व्यक्तित्व', ex: 'Manchmal zählt die Persönlichkeit mehr als die Fähigkeit.', exEn: 'Sometimes personality counts more than ability.', exHi: 'Kabhi-kabhi vyaktitva, kshamata se zyada mayne rakhta hai.' },
    { de: 'Planung', art: 'die', gender: 'f', plural: 'Planungen', pos: 'noun', en: 'planning', hi: 'योजना', ex: 'Die Planung des Gesprächs dauerte eine Woche.', exEn: 'Planning the interview took a week.', exHi: 'Interview ki yojana banane mein ek hafta laga.' },
    { de: 'Verbindung', art: 'die', gender: 'f', plural: 'Verbindungen', pos: 'noun', en: 'connection', hi: 'संबंध', ex: 'Es gab eine gute Verbindung zwischen ihnen.', exEn: 'There was a good connection between them.', exHi: 'Unke beech achha sambandh tha.' },
    { de: 'Zeiteinteilung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', en: 'time management', hi: 'समय प्रबंधन', ex: 'Gute Zeiteinteilung half ihr bei der Prüfung.', exEn: 'Good time management helped her in the exam.', exHi: 'Achhe samay prabandhan ne pariksha mein uski madad ki.' },
    { de: 'entspannt', pos: 'adjective', en: 'relaxed', hi: 'आरामदायक', ex: 'Es ist wichtig, entspannt zu wirken.', exEn: 'It\'s important to appear relaxed.', exHi: 'Aaramdayak dikhna zaroori hai.' },
    { de: 'gesamt', pos: 'adjective', en: 'whole', hi: 'पूरा', ex: 'Die gesamte Bewerbung war gut vorbereitet.', exEn: 'The whole application was well prepared.', exHi: 'Poora aavedan achhi tarah taiyaar tha.' },
    { de: 'gesucht', pos: 'adjective', en: 'wanted', hi: 'वांछित', ex: 'Im Inserat stand: Bewerber gesucht.', exEn: 'The ad said: applicants wanted.', exHi: 'Vigyapan mein likha tha: aavedak chaahiye.' },
    { de: 'heraussuchen', pos: 'verb', en: 'to look up', hi: 'ढूंढना', ex: 'Er suchte die passende Stelle heraus.', exEn: 'He looked up the suitable position.', exHi: 'Usne uchit pad dhoondh nikaala.', conj: { praesens: 'sucht heraus', praeteritum: 'suchte heraus', perfekt: 'hat herausgesucht' } },
    { de: 'inhaltlich', pos: 'adjective', en: 'relevant, in terms of content', hi: 'विषयवस्तु के संदर्भ में', ex: 'Der Brief war inhaltlich sehr klar.', exEn: 'The letter was very clear in terms of content.', exHi: 'Patra vishayvastu ke sandarbh mein bahut spasht tha.' },
    { de: 'konservativ', pos: 'adjective', en: 'conservative', hi: 'रूढ़िवादी', ex: 'Manche Unternehmer sind eher konservativ.', exEn: 'Some business people are rather conservative.', exHi: 'Kuch vyavsayi kaafi roodhivaadi hote hain.' },
    { de: 'lauter', pos: 'idiom', en: 'all (vor lauter Aufregung: from all the excitement)', hi: 'सारे', ex: 'Vor lauter Aufregung konnte er nicht sprechen.', exEn: 'From all the excitement, he couldn\'t speak.', exHi: 'Saari uttejana ki wajah se, woh bol nahi paaya.' },
    { de: 'locker', pos: 'adjective', en: 'casual', hi: 'ढीला-ढाला', ex: 'Sie wählte ein lockeres Outfit für das Gespräch.', exEn: 'She chose a casual outfit for the interview.', exHi: 'Usne interview ke liye ek dheela-dhala poshak chuna.' },
    { de: 'menschlich', pos: 'adjective', en: 'human', hi: 'मानवीय', ex: 'Der Chef war sehr menschlich im Umgang.', exEn: 'The boss was very human in his manner.', exHi: 'Boss vyavhaar mein bahut manaviy tha.' },
    { de: 'offen', pos: 'adjective', en: 'open', hi: 'खुला', ex: 'Da du sehr offen bist, passt diese Stelle zu dir.', exEn: 'Since you\'re very open, this position fits you.', exHi: 'Chunki tum bahut khule vichaaron wale ho, yeh pad tumhare liye sahi hai.' },
    { de: 'optimistisch', pos: 'adjective', en: 'optimistic', hi: 'आशावादी', ex: 'Während des Gesprächs solltest du optimistisch bleiben.', exEn: 'During the conversation, you should stay optimistic.', exHi: 'Baatcheet ke dauran, tumhe aashawadi rehna chahiye.' },
    { de: 'ruhig', pos: 'adjective', en: 'calm', hi: 'शांत', ex: 'Obwohl ich ziemlich ruhig bin, war ich nervös.', exEn: 'Although I\'m quite calm, I was nervous.', exHi: 'Halanki main kaafi shaant hoon, main ghabraya hua tha.' },
    { de: 'signalisieren', pos: 'verb', en: 'to signal', hi: 'संकेत देना', ex: 'Deine Körperhaltung signalisiert viel.', exEn: 'Your posture signals a lot.', exHi: 'Tumhari sharirik mudra bahut kuch batati hai.', conj: { praesens: 'signalisiert', praeteritum: 'signalisierte', perfekt: 'hat signalisiert' } },
    { de: 'speziell', pos: 'adjective', en: 'specifically', hi: 'विशेष रूप से', ex: 'Diese Frage war speziell für ihn vorbereitet.', exEn: 'This question was specifically prepared for him.', exHi: 'Yeh sawaal khaas taur par uske liye taiyaar kiya gaya tha.' },
    { de: 'steif', pos: 'adjective', en: 'stiff', hi: 'कठोर', ex: 'Beim ersten Gespräch war er ganz steif.', exEn: 'At the first interview, he was completely stiff.', exHi: 'Pehle interview mein, woh bilkul kathor tha.' },
    { de: 'stellen', pos: 'verb', en: 'to set (den Wecker stellen: set the alarm)', hi: 'सेट करना', ex: 'Zuerst stellte ich meinen Wecker früh.', exEn: 'First I set my alarm early.', exHi: 'Sabse pehle maine apna alarm jaldi set kiya.', conj: { praesens: 'stellt', praeteritum: 'stellte', perfekt: 'hat gestellt' } },
    { de: 'vorbeikommen', pos: 'verb', en: 'to come over in person', hi: 'व्यक्तिगत रूप से आना', ex: 'Am Montag komme ich persönlich vorbei.', exEn: 'On Monday, I\'ll come by in person.', exHi: 'Somvaar ko, main khud aaungi.', conj: { praesens: 'kommt vorbei', praeteritum: 'kam vorbei', perfekt: 'ist vorbeigekommen' } },
    { de: 'vorziehen', pos: 'verb', en: 'to prefer', hi: 'प्राथमिकता देना', ex: 'Er zog konservative Kleidung vor.', exEn: 'He preferred conservative clothing.', exHi: 'Usne roodhivaadi kapdon ko prathamikta di.', conj: { praesens: 'zieht vor', praeteritum: 'zog vor', perfekt: 'hat vorgezogen' } },
    { de: 'zahlreich', pos: 'adjective', en: 'numerous', hi: 'असंख्य', ex: 'Es gab zahlreiche Bewerber für die Stelle.', exEn: 'There were numerous applicants for the position.', exHi: 'Us pad ke liye asankhya aavedak the.' },
    { de: 'zornig', pos: 'adjective', en: 'furious', hi: 'क्रोधित', ex: 'Der Kunde wurde zornig über die Antwort.', exEn: 'The customer became furious about the answer.', exHi: 'Grahak jawaab se krodhit ho gaya.' },
    { de: 'zusammenstellen', pos: 'verb', en: 'to collect, compile', hi: 'तैयार करना', ex: 'Ich stellte meine Bewerbungsunterlagen zusammen.', exEn: 'I compiled my application documents.', exHi: 'Maine apne aavedan dastavez taiyaar kiye.', conj: { praesens: 'stellt zusammen', praeteritum: 'stellte zusammen', perfekt: 'hat zusammengestellt' } },
    { de: 'zählen', pos: 'verb', en: 'to count (zu + Dativ)', hi: 'गिना जाना', ex: 'Manchmal zählt die Persönlichkeit mehr als die Fähigkeit.', exEn: 'Sometimes personality counts more than ability.', exHi: 'Kabhi-kabhi vyaktitva, kshamata se zyada mayne rakhta hai.', conj: { praesens: 'zählt', praeteritum: 'zählte', perfekt: 'hat gezählt' } },
    { de: 'Inserat', art: 'das', gender: 'n', plural: 'Inserate', pos: 'noun', en: 'advertisement', hi: 'विज्ञापन', ex: 'Eines Abends las ich ein Inserat, das genau zu mir passte.', exEn: 'One evening, I read an advertisement that fit me exactly.', exHi: 'Ek shaam, maine ek vigyapan padha jo mujhse bilkul milta tha.' },
    { de: 'Outfit', art: 'das', gender: 'n', plural: 'Outfits', pos: 'noun', en: 'outfit', hi: 'पोशाक', ex: 'Sie wählte ein lockeres Outfit.', exEn: 'She chose a casual outfit.', exHi: 'Usne ek dheela-dhala poshak chuna.' },
    { de: 'Vergnügen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', en: 'enjoyment, delight', hi: 'आनंद', ex: 'Das Gespräch war ein echtes Vergnügen.', exEn: 'The conversation was a real pleasure.', exHi: 'Baatcheet ek sacha anand thi.' },
    { de: 'Auftritt', art: 'der', gender: 'm', plural: 'Auftritte', pos: 'noun', en: 'appearance', hi: 'प्रस्तुति', ex: 'Ihr Auftritt beim Gespräch war überzeugend.', exEn: 'Her appearance at the interview was convincing.', exHi: 'Interview mein uski prastuti vishwasniya thi.' },
    { de: 'Bereich', art: 'der', gender: 'm', plural: 'Bereiche', pos: 'noun', en: 'area', hi: 'क्षेत्र', ex: 'Der Bereich braucht viel Kundenkontakt.', exEn: 'The area needs a lot of customer contact.', exHi: 'Us kshetra mein bahut grahak sampark chahiye.' },
    { de: 'Faktor', art: 'der', gender: 'm', plural: 'Faktoren', pos: 'noun', en: 'factor', hi: 'कारक', ex: 'Erfahrung war ein wichtiger Faktor.', exEn: 'Experience was an important factor.', exHi: 'Anubhav ek zaroori kaarak tha.' },
    { de: 'Interessent', art: 'der', gender: 'm', plural: 'Interessenten', pos: 'noun', en: 'interested party', hi: 'इच्छुक व्यक्ति', ex: 'Viele Interessenten riefen wegen der Stelle an.', exEn: 'Many interested parties called about the position.', exHi: 'Kai ichchhuk vyakti us pad ke baare mein phone kiye.' },
    { de: 'Nachtportier', art: 'der', gender: 'm', plural: 'Nachtportiers', pos: 'noun', en: 'night porter', hi: 'रात्रि द्वारपाल', ex: 'Der Nachtportier arbeitete allein.', exEn: 'The night porter worked alone.', exHi: 'Raatri dwaarapaal akela kaam karta tha.' },
    { de: 'Unternehmer', art: 'der', gender: 'm', plural: 'Unternehmer', pos: 'noun', en: 'businessman', hi: 'व्यवसायी', ex: 'Manche Unternehmer sind eher konservativ.', exEn: 'Some business people are rather conservative.', exHi: 'Kuch vyavsayi kaafi roodhivaadi hote hain.' },
    { de: 'Wecker', art: 'der', gender: 'm', plural: 'Wecker', pos: 'noun', en: 'alarm', hi: 'अलार्म', ex: 'Zuerst stellte ich meinen Wecker früh.', exEn: 'First I set my alarm early.', exHi: 'Sabse pehle maine apna alarm jaldi set kiya.' },
    { de: 'Zweifel', art: 'der', gender: 'm', plural: 'Zweifel', pos: 'noun', en: 'doubt', hi: 'संदेह', ex: 'Falls du Zweifel hast, ruf mich an.', exEn: 'In case you have doubts, call me.', exHi: 'Agar tumhe koi shak ho, mujhe phone karo.' },
    { de: 'Absprache', art: 'die', gender: 'f', plural: 'Absprachen', pos: 'noun', en: 'agreement', hi: 'सहमति', ex: 'Nach der Absprache begannen sie sofort.', exEn: 'After the agreement, they began immediately.', exHi: 'Sahmati ke baad, unhone turant shuru kiya.' },
    { de: 'Anfahrt', art: 'die', gender: 'f', plural: 'Anfahrten', pos: 'noun', en: 'journey (to a place)', hi: 'यात्रा', ex: 'Die Anfahrt zum Büro dauerte eine Stunde.', exEn: 'The journey to the office took an hour.', exHi: 'Office tak ki yatra ek ghante ki thi.' },
    { de: 'Bewerberin', art: 'die', gender: 'f', plural: 'Bewerberinnen', pos: 'noun', en: 'applicant (female)', hi: 'महिला आवेदक', ex: 'Die Bewerberin überzeugte alle.', exEn: 'The applicant convinced everyone.', exHi: 'Mahila aavedak ne sabko vishwaas dilaya.' },
    { de: 'Branche', art: 'die', gender: 'f', plural: 'Branchen', pos: 'noun', en: 'field of business', hi: 'व्यवसाय क्षेत्र', ex: 'Sie arbeitete lange in dieser Branche.', exEn: 'She worked in this field for a long time.', exHi: 'Woh lambe samay tak is kshetra mein kaam karti thi.' },
    { de: 'Interessentin', art: 'die', gender: 'f', plural: 'Interessentinnen', pos: 'noun', en: 'interested party (female)', hi: 'इच्छुक महिला', ex: 'Die Interessentin fragte nach dem Gehalt.', exEn: 'The interested party asked about the salary.', exHi: 'Ichchhuk mahila ne vetan ke baare mein poocha.' },
    { de: 'Körpersprache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', en: 'body language', hi: 'शारीरिक भाषा', ex: 'Ihre Körpersprache war sehr offen.', exEn: 'Her body language was very open.', exHi: 'Uski sharirik bhasha bahut khuli thi.' },
    { de: 'Unternehmerin', art: 'die', gender: 'f', plural: 'Unternehmerinnen', pos: 'noun', en: 'businesswoman', hi: 'व्यवसायी महिला', ex: 'Die Unternehmerin führte ihre Firma seit zehn Jahren.', exEn: 'The businesswoman had run her company for ten years.', exHi: 'Vyavsayi mahila das saalon se apni company chala rahi thi.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 1–8 focus) ----------
  grammar: [
    {
      title: 'Präteritum — der Schwerpunkt',
      body: [
        'sein/haben and modal verbs almost always appear in the Präteritum, even in speech. Common irregular verbs (ging, kam, fand, gab, wusste, dachte, brachte, stand, lag, sah, wurde) dominate written narration.'
      ],
      table: {
        head: ['Form', 'Example'],
        rows: [
          ['sein', '<span class="de">Ich war beim Gespräch nervös.</span>'],
          ['haben', '<span class="de">Ich hatte keine Zeit zum Üben.</span>'],
          ['Modal', '<span class="de">Ich konnte gut antworten.</span>'],
          ['Irregular', '<span class="de">Sie las das Inserat.</span>']
        ]
      },
      hinglish: 'sein/haben aur modal verbs lagbhag hamesha Präteritum mein aate hain, bolchaal mein bhi. Likhi hui narration mein common irregular verbs sabse zyada aate hain.'
    },
    {
      title: 'Zeitangaben — der Schwerpunkt',
      body: [
        'Everyday Dativ (am Montag, im Sommer) vs. literary/formal Genitiv (eines Tages, Anfang des Monats, Mitte der Woche) — both appear constantly in Goethe B1 reading texts.'
      ],
      table: {
        head: ['Register', 'Example'],
        rows: [
          ['Everyday Dativ', '<span class="de">Am Montag komme ich vorbei.</span>'],
          ['Literary Genitiv', '<span class="de">Eines Abends las ich ein Inserat.</span>']
        ]
      },
      hinglish: 'Everyday Dativ (am Montag, im Sommer) aur literary/formal Genitiv (eines Tages, Anfang des Monats) — dono Goethe B1 reading texts mein lagataar aate hain.'
    },
    {
      title: 'zu + Infinitiv, weil/da/obwohl, Konjunktiv II',
      body: [
        'Recycled from Chapters 1–3: zu + Infinitiv after triggers; weil/da/obwohl for reason and contrast; könnte/würde/hätte/wäre for polite requests.'
      ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['zu + Infinitiv', '<span class="de">Ich habe vor, mich zu bewerben.</span>'],
          ['weil/da/obwohl', '<span class="de">Obwohl ich ruhig bin, war ich nervös.</span>'],
          ['Konjunktiv II', '<span class="de">Könntest du mich anrufen?</span>']
        ]
      },
      hinglish: 'Chapters 1-3 se recycled: zu + Infinitiv triggers ke baad; weil/da/obwohl reason aur contrast ke liye; könnte/würde/hätte/wäre polite requests ke liye.'
    },
    {
      title: 'deshalb & so … dass, Genitiv + wegen/trotz/während',
      body: [
        'Recycled from Chapters 4–5: deshalb states a plain result (verb immediately after); so + Adjektiv + dass shows a strong consequence; wegen/trotz/während always take the Genitiv.'
      ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['deshalb', '<span class="de">Deshalb wählte ich ein lockeres Outfit.</span>'],
          ['so … dass', '<span class="de">Ich war so nervös, dass ich fast alles vergaß.</span>'],
          ['wegen/trotz/während', '<span class="de">Wegen des guten Stundenlohns lohnt sich das.</span>']
        ]
      },
      hinglish: 'Chapters 4-5 se recycled: deshalb ek plain result batata hai (verb turant baad); so + Adjektiv + dass ek strong consequence dikhata hai; wegen/trotz/während hamesha Genitiv lete hain.'
    },
    {
      title: 'Quick decision guide — all eight chapters together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['narrate the past formally?', '→ Präteritum'],
          ['place an event in everyday time?', '→ Dativ (am/im/in der)'],
          ['place an event in literary/formal time?', '→ Genitiv (eines/Anfang des/Mitte der)'],
          ['link two verbs cleanly?', '→ zu + Infinitiv'],
          ['give a reason, or signal contrast?', '→ weil / da / obwohl'],
          ['soften a request?', '→ könnte / würde / hätte / wäre'],
          ['state a result, or a strong consequence?', '→ deshalb / so … dass'],
          ['show possession, reason, contrast, or time?', '→ Genitiv, wegen, trotz, während']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool: Präteritum, Dativ/Genitiv Zeitangaben, zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv + wegen/trotz/während.'
    }
  ],

  // ---------- Reading (Goethe-style: Stellenanzeige + Bericht, clickable) ----------
  reading: {
    title: 'Stellenanzeige und Bewerbung',
    titleEn: 'Job advertisement and application',
    tokens: [
      { w: 'Eines', role: 'r-genitiv', en: 'one (neut. gen.)', hi: 'एक', type: 'Determiner · Genitiv', why: 'eines Abends — literary Genitiv time expression (recycled — Ch.8).' },
      { w: 'Abends', role: 'r-genitiv', en: 'evening (gen.)', hi: 'शाम का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'las', role: 'r-verb', en: 'read (Präteritum)', hi: 'पढ़ा', type: 'Verb · lesen (Präteritum)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'ein', role: 'r-akkusativ', en: 'an (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Inserat', role: 'r-akkusativ', en: 'advertisement', hi: 'विज्ञापन', type: 'Noun · neut.', why: 'das Inserat (this chapter).' },
      { w: '.', plain: true },
      { w: 'Gesucht', role: 'r-adjective', en: 'wanted', hi: 'वांछित', type: 'Adjective', why: 'gesucht (this chapter): wanted.' },
      { w: 'wurde', role: 'r-verb', en: 'was (Präteritum)', hi: 'था (Präteritum)', type: 'Verb · werden (Präteritum)' },
      { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'kommunikativer', role: 'r-subject', en: 'communicative', hi: 'संवादपटु', type: 'Adjective', why: 'kommunikativ (this chapter).' },
      { w: 'Bewerber', role: 'r-subject', en: 'applicant', hi: 'आवेदक', type: 'Noun · masc.', why: 'der Bewerber (this chapter).' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Teilzeitjob', role: 'r-akkusativ', en: 'part-time job', hi: 'अंशकालिक नौकरी', type: 'Noun · masc.', why: 'der Teilzeitjob (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'guten', role: 'r-genitiv', en: 'good', hi: 'अच्छा', type: 'Adjective · Genitiv' },
      { w: 'Stundenlohns', role: 'r-genitiv', en: 'hourly wage (gen.)', hi: 'प्रति घंटा वेतन का', type: 'Noun · masc.', why: 'der Stundenlohn (this chapter).' },
      { w: 'entschloss', role: 'r-verb', en: 'decided (Präteritum)', hi: 'फ़ैसला किया (Präteritum)', type: 'Verb · sich entschließen (Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'r-akkusativ', en: 'herself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'sich', role: 'r-akkusativ', en: 'herself', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Präposition' },
      { w: 'bewerben', role: 'r-verb', en: 'to apply (Satzende)', hi: 'आवेदन करना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-dativ', en: 'on the', hi: 'में', type: 'Contraction · an dem (Dativ)', why: 'am + weekday — everyday Dativ time expression.' },
      { w: 'nächsten', role: 'r-dativ', en: 'next', hi: 'अगला', type: 'Adjective · Dativ' },
      { w: 'Montag', role: 'r-dativ', en: 'Monday', hi: 'सोमवार', type: 'Noun · masc. Dativ' },
      { w: 'stellte', role: 'r-verb', en: 'compiled (Präteritum)', hi: 'तैयार किया (Präteritum)', type: 'Verb · zusammenstellen (Präteritum)', why: 'zusammenstellen (this chapter): to collect.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'ihre', role: 'r-akkusativ', en: 'her', hi: 'अपने', type: 'Possessivartikel · Akk.' },
      { w: 'Bewerbungsunterlagen', role: 'r-akkusativ', en: 'application documents', hi: 'आवेदन दस्तावेज़', type: 'Noun · plural', why: 'die Bewerbungsunterlagen (this chapter).' },
      { w: 'zusammen', role: 'r-verb', en: '(zusammenstellen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'ziemlich', role: 'r-adverb', en: 'quite', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'ruhig', role: 'r-adjective', en: 'calm', hi: 'शांत', type: 'Adjective', why: 'ruhig (this chapter): calm.' },
      { w: 'war', role: 'r-verb', en: 'was (Satzende)', hi: 'थी (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', type: 'Verb · sein (Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'am', role: 'r-time', en: 'on the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Tag', role: 'r-time', en: 'day', hi: 'दिन', type: 'Noun · masc.' },
      { w: 'des', role: 'r-genitiv', en: 'of the (neut. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Gesprächs', role: 'r-genitiv', en: 'interview (gen.)', hi: 'साक्षात्कार का', type: 'Noun · neut.' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', type: 'Adverb', why: 'so + Adjektiv …, dass — strong consequence (recycled — Ch.4).' },
      { w: 'nervös', role: 'r-adjective', en: 'nervous', hi: 'घबराई हुई', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'ihren', role: 'r-akkusativ', en: 'her', hi: 'अपना', type: 'Possessivartikel · Akk.' },
      { w: 'Wecker', role: 'r-akkusativ', en: 'alarm', hi: 'अलार्म', type: 'Noun · masc.', why: 'der Wecker (this chapter).' },
      { w: 'zweimal', role: 'r-adverb', en: 'twice', hi: 'दो बार', type: 'Adverb' },
      { w: 'stellte', role: 'r-verb', en: 'set (Satzende)', hi: 'सेट किया (Satzende)', type: 'Verb · stellen (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'kam', role: 'r-verb', en: 'came (Position 2)', hi: 'आई', type: 'Verb · kommen (Position 2, Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'rechtzeitig', role: 'r-adjective', en: 'on time', hi: 'समय पर', type: 'Adjective' },
      { w: 'an', role: 'r-verb', en: '(ankommen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true }
    ],
    translation: 'One evening, Anna read an advertisement. A communicative applicant was wanted for a part-time job. Because of the good hourly wage, she decided to apply. On the next Monday, she compiled her application documents. Although she was quite calm, on the day of the interview she was so nervous that she set her alarm twice. That\'s why she nevertheless arrived on time.'
  },

  // ---------- Listening (Goethe-style, 5 realistic B1 scenarios in one transcript) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_009_L001', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe morgen das Bewerbungsgespräch und bin völlig durcheinander.', en: 'Timo, I have the job interview tomorrow and I\'m completely rattled.' },
      { id: 'B1_009_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Du schaffst das! Was macht dir denn am meisten Sorgen?', en: 'You\'ll manage it! What worries you the most?' },
      { id: 'B1_009_L003', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die Frage, warum ich meinen letzten Job gekündigt habe.', en: 'The question of why I quit my last job.' },
      { id: 'B1_009_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sag einfach die Wahrheit — dass du dich weiterentwickeln wolltest. Das ist doch nichts Schlimmes.', en: 'Just tell the truth — that you wanted to develop further. That\'s not bad at all.' }
    ],
    transcript: 'Timo, ich habe morgen das Bewerbungsgespräch und bin völlig durcheinander. Du schaffst das! Was macht dir denn am meisten Sorgen? Die Frage, warum ich meinen letzten Job gekündigt habe. Sag einfach die Wahrheit — dass du dich weiterentwickeln wolltest. Das ist doch nichts Schlimmes.',
    translation: 'Timo, I have the job interview tomorrow and I\'m completely rattled. You\'ll manage it! What worries you the most? The question of why I quit my last job. Just tell the truth — that you wanted to develop further. That\'s not bad at all.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'morgen' },
      { w: 'das' },
      { w: 'Bewerbungsgespräch' },
      { w: 'und' },
      { w: 'bin' },
      { w: 'völlig' },
      { w: 'durcheinander' },
      { w: '.', plain: true },
      { w: 'Du' },
      { w: 'schaffst' },
      { w: 'das' },
      { w: '!', plain: true },
      { w: 'Was' },
      { w: 'macht' },
      { w: 'dir' },
      { w: 'denn' },
      { w: 'am' },
      { w: 'meisten' },
      { w: 'Sorgen' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Frage' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'ich' },
      { w: 'meinen' },
      { w: 'letzten' },
      { w: 'Job' },
      { w: 'gekündigt' },
      { w: 'habe' },
      { w: '.', plain: true },
      { w: 'Sag' },
      { w: 'einfach' },
      { w: 'die' },
      { w: 'Wahrheit' },
      { w: '—', plain: true },
      { w: 'dass' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'weiterentwickeln' },
      { w: 'wolltest' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'doch' },
      { w: 'nichts' },
      { w: 'Schlimmes' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Nele die größten Sorgen?', qEn: 'What worries Nele the most?', options: ['die Anfahrt', 'das Gehalt', 'die Kündigungsfrage', 'die Kleidung'], optionsEn: ['the journey there', 'the salary', 'the question of resigning', 'the clothes'], answer: 2,
        explain: '"Die Frage, warum ich meinen letzten Job gekündigt habe."' },
      { q: 'Was schlägt Timo vor?', qEn: 'What does Timo suggest?', options: ['zu lügen', 'die Wahrheit zu sagen', 'nicht hinzugehen', 'die Frage zu vermeiden'], optionsEn: ['to lie', 'to tell the truth', 'not to go', 'to avoid the question'], answer: 1,
        explain: '"Sag einfach die Wahrheit."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Sprich über deine Fähigkeiten für einen Teilzeitjob.", taskEn: "Exam, Part 1: talk about your skills for a part-time job.", de: "Ich bin kommunikativ und arbeite gern im Team.", en: "I'm communicative and like working in a team." },
    { task: "Deine Partnerin hat morgen ein Bewerbungsgespräch und ist durcheinander.", taskEn: "Your partner has a job interview tomorrow and is flustered.", de: "Du schaffst das. Was macht dir am meisten Sorgen?", en: "You'll manage. What worries you most?" },
    { task: "Man fragt dich, warum du den letzten Job gekündigt hast.", taskEn: "You're asked why you left your last job.", de: "Ich wollte mehr Verantwortung, deshalb habe ich gekündigt.", en: "I wanted more responsibility, so I resigned." },
    { task: "Teil 2: Sprich über Körperhaltung im Gespräch.", taskEn: "Part 2: talk about body language in an interview.", de: "Eine ruhige Körperhaltung macht einen entspannten Eindruck.", en: "A calm posture makes a relaxed impression." },
    { task: "Ein Freund fragt, wie du die Bewerbungsunterlagen vorbereitest.", taskEn: "A friend asks how you prepare your application documents.", de: "Ich suche die Zeugnisse heraus und schreibe möglichst kurz.", en: "I dig out the certificates and write as briefly as possible." },
    { task: "Teil 3: Plant zusammen die Vorbereitung auf ein Gespräch.", taskEn: "Part 3: plan the interview preparation together.", de: "Wir könnten die Fragen üben. Ich hätte gern eine Beurteilung von dir.", en: "We could practise the questions. I'd like feedback from you." },
    { task: "Rollenspiel: Ihr spielt das Bewerbungsgespräch.", taskEn: "Role-play: you act out the job interview.", de: "Warum bewerben Sie sich bei uns? — Wegen der Aufgaben und weil der Stundenlohn faire Bedingungen bietet.", en: "Why are you applying to us? — Because of the tasks and because the hourly rate offers fair conditions." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe B1 writing. Choose ONE task and write ~50 words, using at least four grammar points from Chapters 1–8 (Präteritum, Zeitangaben, zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, or Genitiv+wegen/trotz/während). (1) FORMAL EMAIL: apply for a part-time job, describing your abilities politely. (2) DIARY ENTRY: describe your first job interview. (3) OPINION: what matters more in an interview — personality or ability?',
    starters: ['Sehr geehrte/r …,', 'Eines Tages …', 'Ich hatte vor, …', 'Obwohl …', 'Deshalb …'],
    placeholder: 'Sehr geehrte Damen und Herren, ich bewerbe mich hiermit für den Teilzeitjob …',
    minWords: 50
  },

  // ---------- Exercises (4 types, mixed Ch.1–8) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich habe vor, mich für einen Teilzeitjob ___."',
      options: ['bewerben', 'zu bewerben', 'beworben'],
      answer: 1,
      explain: 'vorhaben + zu + Infinitiv: "Ich habe vor, mich zu bewerben."'
    },
    gap: {
      sentence: ['', ' Abends las ich ein Inserat.'],
      gaps: [ { answer: 'Eines', accepts: ['Eines'] } ],
      explain: 'eines Abends is the fixed Genitiv time expression meaning "one evening".'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Ich habe vor, …', art: 'zu + Infinitiv' },
        { noun: 'Ich war gestern …', art: 'Präteritum' },
        { noun: 'Eines Tages …', art: 'Genitiv time expression' },
        { noun: 'Könntest du …', art: 'Konjunktiv II — höfliche Bitte' },
        { noun: 'Wegen des Stundenlohns …', art: 'Genitiv + wegen/trotz/während' }
      ]
    },
    builder: {
      target: 'Build: "Because of the good hourly wage, that\'s worth it."',
      bank: ['Wegen', 'des', 'guten', 'Stundenlohns', 'lohnt', 'sich', 'das', '.'],
      answer: ['Wegen', 'des', 'guten', 'Stundenlohns', 'lohnt', 'sich', 'das', '.'],
      roles: { 'Wegen': 'r-preposition', 'des': 'r-genitiv', 'Stundenlohns': 'r-genitiv', 'lohnt': 'r-verb' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Ich ___ letzte Woche krank." (Präteritum)', options: ['bin', 'war', 'habe'], answer: 1,
      explain: 'ich war is the Präteritum of sein.' },
    { q: 'Which is correct?', options: ['im Montag', 'am Montag', 'im Wecker'], answer: 1,
      explain: 'Weekdays take am (an dem): am Montag.' },
    { q: 'Complete: "___ Tages möchte ich einen neuen Job finden."', options: ['Ein', 'Eines', 'Einem'], answer: 1,
      explain: 'eines Tages is the fixed Genitiv time expression meaning "one day".' },
    { q: 'Which connector states an unexpected CONTRAST?', options: ['weil', 'da', 'obwohl'], answer: 2,
      explain: 'obwohl signals a contrast.' },
    { q: 'Which sentence uses Konjunktiv II correctly for a polite request?', options: ['Könntest du mir helfen?', 'Kannst du mir hilfst?', 'Du könntest helfen mir?'], answer: 0,
      explain: 'Könntest du …? is the correct informal polite request pattern.' },
    { q: 'Which sentence contains an error?', options: ['Wegen des Stundenlohns lohnt sich das.', 'Anfang des Monats bekomme ich mein Gehalt.', 'Ich war gegangen zum Gespräch.'], answer: 2,
      explain: 'Never mix war with a Partizip II for simple narration — use "Ich ging" or "Ich bin gegangen."' }
  ],

  // ---------- Summary / Second B1 Readiness Check ----------
  takeaways: [
    { c: 'r-verb', html: '<strong>Grammar mastered:</strong> Präteritum (sein/haben/modals/irregular verbs), Zeitangaben (Dativ + Genitiv), plus recycled zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, and Genitiv + wegen/trotz/während.' },
    { c: 'r-genitiv', html: '<strong>Vocabulary mastered:</strong> job-application vocabulary and key words across Chapters 1–8.' },
    { c: 'r-conjunction', html: '<strong>Speaking confidence:</strong> you can introduce yourself, present a topic, and plan something together — the three Goethe B1 speaking formats.' },
    { c: 'r-preposition', html: '<strong>Listening & reading readiness:</strong> you can follow work, doctor, university, telephone, and daily-life scenarios drawing on all eight chapters at once.' },
    { c: 'r-verb', html: '<strong>Writing readiness:</strong> you can produce a clean, well-structured short text — email, diary entry, or opinion — using accurate B1 grammar.' },
    { c: 'r-genitiv', html: '<strong>Overall B1 readiness:</strong> if you scored well across this mock test, you\'re on track for the real Goethe-Zertifikat B1 exam. Review any weak sections below, then continue into the next phase.' }
  ],
  revisionTips: [
    'Weak on Präteritum? Redo Ch.7 — especially sein, haben, and the eleven common irregular verbs.',
    'Mixing up Dativ and Genitiv time expressions? Redo Ch.8 — am/im for everyday, eines/Anfang des/Mitte der for literary.',
    'Shaky on zu-placement or weil/da/obwohl? Redo Ch.1–2.',
    'Unsure about polite requests or deshalb/so…dass? Redo Ch.3–4.',
    'Genitiv endings feel unnatural? Redo Ch.5 — des/der + noun ending, and the wegen/trotz/während trio.'
  ]
};

window.CHAPTER = CHAPTER;
