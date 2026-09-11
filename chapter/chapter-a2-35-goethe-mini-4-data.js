/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 35
   "Goethe Mini 4" — FINAL A2 checkpoint. NO new grammar.
   Covers Chapters 25–34: Adjektiv nach bestimmtem Artikel,
   Adjektiv nach unbestimmtem Artikel, Nebensatz mit als/wenn,
   Indefinitpronomen, Verben mit Präpositionen, W-Fragen mit
   Präpositionen, Konjunktiv II (Wünsche & Höflichkeit),
   Relativsätze im Nominativ, Relativsätze im Akkusativ — with
   natural recycling from the whole A2 course.
   Vocabulary source: uploaded chapter-35 note ("Review chapter
   — no new words; 639 items recycled") → review vocab drawn
   from Chapters 25–34.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-25-goethe-mini-3-data.js exactly
   (checkpoint shape: flat vocab[] review set, grammar[] mixed
   review cards, tokenized reading, Goethe-style mock test,
   readiness takeaways, etc.) so it runs on the shared
   chapter-app.js / chapter-tutor.js engine. This is the final
   checkpoint of the entire A2 course, so the Summary/takeaways
   include a full A2 readiness self-assessment across all six
   skill areas plus an overall readiness estimate.
============================================================ */
const CHAPTER = {
  id: 'a2-35-goethe-mini-4',
  phase: 'A2 · Phase 2',
  number: 35,
  title: 'Goethe A2 Final',
  titleEn: 'Goethe Checkpoint 4 — Final A2 Readiness',
  description: 'Your fourth and final A2 checkpoint — no new grammar. A complete Goethe-A2-style mock that puts Chapters 25–34 to work at once: adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, W-Fragen mit Präpositionen, polite Konjunktiv II, and Nominativ/Akkusativ relative clauses — ending with a full A2 readiness check.',
  xp: 220,
  time: 50,
  difficulty: 'Checkpoint',
  nextChapter: { number: 1, title: 'Infinitiv mit zu', titleEn: 'Infinitive with zu' , href: 'chapter-b1-1-infinitiv-mit-zu.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together — one last time.</em>',
    intro: 'The last afternoon before the real exam: Timo hasn\'t revised everything, and Silke admits she keeps drifting into the subjunctive — wishing for more time, and looking forward to a stress-free week once it\'s over. Nothing new — just Chapters 25 through 34, all at once.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, Konjunktiv II, and relative clauses side by side'
    ],
    scene: 'Der letzte Nachmittag vor der Prüfung — Sprachschule Berlin',
    femaleSpeakers: ['Silke'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Nächste', role: 'r-subject', en: 'next', hi: 'अगले', pron: 'NEKS-tuh', type: 'Adjective' },
        { w: 'Woche', role: 'r-subject', en: 'week', hi: 'हफ़्ते', pron: 'VO-khuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Prüfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Hat', role: 'r-verb', en: 'has', hi: 'किया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'jemand', role: 'r-subject', en: 'someone', hi: 'किसी ने', pron: 'YAY-mant', type: 'Pronoun · indefinite' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'wiederholt', role: 'r-verb', en: 'revised', hi: 'दोहराया', pron: 'vee-der-HOLT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Next week is the exam. Has someone already revised everything?', hi: 'Agle hafte pariksha hai. Kya kisi ne pehle se sab kuch dohraaya hai?' },
      { speaker: 'Silke', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'manche', role: 'r-akkusativ', en: 'some', hi: 'कुछ', pron: 'MAN-khuh', type: 'Pronoun · indefinite', why: 'manche = some (this chapter).', ex: 'Ich habe manche Themen wiederholt.', exEn: 'I have revised some topics.' },
        { w: 'Themen', role: 'r-akkusativ', en: 'topics', hi: 'विषय', pron: 'TAY-men', type: 'Noun · plural' },
        { w: 'wiederholt', role: 'r-verb', en: 'revised', hi: 'दोहराया', pron: 'vee-der-HOLT', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सारे', pron: 'A-luh', type: 'Pronoun · indefinite' },
        { w: '.', plain: true }
      ], en: 'I have revised some topics, but not all.', hi: 'Maine kuch vishay dohraaye hain, par sab nahi.' },
      { speaker: 'Timo', tokens: [
        { w: 'Woran', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-RAN', type: 'Question word', why: 'woran = on what, fixed-preposition W-question (this chapter).', ex: 'Woran denkst du am meisten?', exEn: 'What do you think about the most?' },
        { w: 'denkst', role: 'r-verb', en: 'do you think', hi: 'सोचती हो', pron: 'DENKST', type: 'Verb · denken (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: '?', plain: true }
      ], en: 'What do you think about the most?', hi: 'Tum sabse zyada kis baare mein sochti ho?' },
      { speaker: 'Silke', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'denke', role: 'r-verb', en: 'think', hi: 'सोचती हूँ', pron: 'DEN-kuh', type: 'Verb · denken (ich)' },
        { w: 'an', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'an', type: 'Preposition · fixed with denken' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Konjunktiv', role: 'r-akkusativ', en: 'subjunctive', hi: 'उपजातिवाचक', pron: 'kon-yunk-TEEF', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'hätte', role: 'r-verb', en: 'had', hi: 'होता', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: ',', plain: true },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'करती', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II, ich)', why: 'würde = would, Konjunktiv II helper verb (this chapter).', ex: 'Ich würde mehr üben.', exEn: 'I would practise more.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करना', pron: 'Ü-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I think about the subjunctive. If I had more time, I would practise more.', hi: 'Main upjaativaachak ke baare mein sochti hoon. Agar mere paas zyada samay hota, toh main zyada abhyaas karti.' },
      { speaker: 'Timo', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Worauf', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-ROWF', type: 'Question word' },
        { w: 'freust', role: 'r-verb', en: 'are you looking forward', hi: 'उत्साहित हो', pron: 'FROYST', type: 'Verb · sich freuen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Prüfung', role: 'r-dativ', en: 'exam (dat.)', hi: 'परीक्षा के', pron: 'PRÜ-fung', type: 'Noun · fem. dat.' },
        { w: '?', plain: true }
      ], en: 'I understand that. What are you looking forward to after the exam?', hi: 'Main yeh samajhta hoon. Pariksha ke baad tumhe kis cheez ka intezaar hai?' },
      { speaker: 'Silke', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'freie', role: 'r-akkusativ', en: 'free', hi: 'आज़ाद', pron: 'FRY-uh', type: 'Adjective' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Niemand', role: 'r-subject', en: 'no one', hi: 'कोई नहीं', pron: 'NEE-mant', type: 'Pronoun · indefinite' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'mehr', role: 'r-adverb', en: 'anymore', hi: 'अब', pron: 'mair', type: 'Adverb' },
        { w: 'stressen', role: 'r-verb', en: 'stress', hi: 'तनाव देना', pron: 'SHTRE-sen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I look forward to free time. No one will stress me anymore.', hi: 'Mujhe khaali samay ka intezaar hai. Koi bhi mujhe aur tanaav nahi dega.' },
      { speaker: 'Timo', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Exactly! We will manage this together!', hi: 'Bilkul! Hum yeh saath mein kar lenge!' },
      { speaker: 'Silke', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: '!', plain: true }
      ], en: 'Yes, we will manage this!', hi: 'Haan, hum yeh kar lenge!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>final A2 checkpoint</strong> — no new grammar. It gathers Chapters 25–34 into one Goethe-A2-style rehearsal: <span class="de r-adjective">adjective endings</span> after the definite and indefinite article, <span class="de r-conjunction">als/wenn</span>, <span class="de">Indefinitpronomen</span>, fixed-preposition verbs and <span class="de r-frage">W-Fragen mit Präpositionen</span>, polite <span class="de r-modalverb">Konjunktiv II</span> (hätte/wäre/würde), and <span class="de r-akkusativ">Relativsätze</span> in the Nominativ and Akkusativ — all under Goethe A2 exam conditions, ending in a full readiness check.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor and Goethe-A2 examiner for a Hindi/English-speaking learner. ' +
    'This is the FINAL CHECKPOINT covering Chapters 25-34 — no new grammar. The learner wrote a short exam-style text (email / invitation / apology / complaint / request / description) below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Adjective endings after der/die/das take -e (Nom. sg.) or -en (elsewhere); after ein-words, masculine Nom. sg. is -er, neuter Nom./Akk. sg. is -es, all else follows the der/die/das pattern.\n' +
    '- als = one single past event; wenn = repeated/habitual or present/future conditional — never mix them up.\n' +
    '- Indefinitpronomen (jemand/niemand/etwas/nichts/alles/jeder/alle/manche/viele/einige/wenige) agree in meaning, not gender, and don\'t take an article.\n' +
    '- Fixed-preposition verbs (warten auf, denken an, sich freuen auf, träumen von …) always keep their fixed preposition — never substitute a different one.\n' +
    '- W-Fragen mit Präpositionen: wo(r)+Präposition for things (worauf, woran), Präposition + wen/wem for people (auf wen, mit wem) — never mix the two patterns.\n' +
    '- Konjunktiv II: hätte for having/wanting a thing, wäre for being/state, würde + Infinitiv for an action; formal Sie always takes würden/könnten/hätten, never würdest/könntest/hättest.\n' +
    '- Relativsätze: pronoun matches the antecedent\'s gender/number; only masculine changes from Nominativ der to Akkusativ den; verb goes to the end of the clause.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe A2 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are ready for the real Goethe A2 exam. Your grammar across adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, Konjunktiv II, and relative clauses is solid. Trust your preparation.',
    mid: 'Solid A2. Re-run the weakest section once (usually adjective endings or Nominativ vs. Akkusativ relative pronouns), then you\'ll be ready.',
    low: 'Worth a full re-run of Chapters 25–34 before the real exam — focus especially on adjective endings after der/die/das vs. ein-words, and der vs. den in relative clauses.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'der', role: 'r-subject' }, { w: 'beste', role: 'r-adjective' },
    { w: 'Rat', role: 'r-subject' }, { w: ',', role: 'plain' },
    { w: 'den', role: 'r-akkusativ' }, { w: 'ich', role: 'r-subject' },
    { w: 'geben', role: 'r-verb' }, { w: 'kann', role: 'r-modalverb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Chapters 25–34 fit together — and how the final checkpoint works.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'The last afternoon before the exam, recycling all nine chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words from Chapters 25–34.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, W-Fragen mit Präpositionen, Konjunktiv II, relative clauses.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style notice mixing all nine chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point in five realistic exam-style tasks.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe A2 Teil 1–3: introduce yourself, describe a picture, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this chapter\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all nine grammar points in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full Goethe-A2-style mini mock test. Pass to bank the full 220 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your final A2 readiness check — strengths, weaknesses, and an overall score.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A complete Goethe-A2-style mini mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a final readiness checklist.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '14 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words from Chapters 25–34 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, W-Fragen mit Präpositionen, Konjunktiv II, and Nominativ/Akkusativ relative clauses — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle full Goethe-A2 listening & reading tasks' },
    { de: 'Schreiben', text: 'Write a clean A2 email, invitation, complaint, or request' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe A2 parts' },
    { de: 'Grammatik', text: 'Mix adjective endings, als/wenn, indefinite pronouns, fixed-preposition verbs, Konjunktiv II, and relative clauses correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your final A2 readiness score and what to revise' }
  ],

  // ---------- Vocabulary review (~36 items — no new words, from Ch.25–34) ----------
  vocab: [
    { de: 'genauso', pos: 'adverb', en: 'just as', hi: 'बिल्कुल वैसे ही', ex: 'Das ist genauso schwer wie die letzte Prüfung.', exEn: 'That is just as hard as the last exam.' },
    { de: 'Grund', art: 'der', gender: 'm', plural: 'Gründe', pos: 'noun', en: 'reason', hi: 'कारण', ex: 'Was ist der Grund für deine Nervosität?', exEn: 'What is the reason for your nervousness?' },
    { de: 'gehören', pos: 'verb', en: 'to belong to', hi: 'का होना', ex: 'Dieses Buch gehört mir.', exEn: 'This book belongs to me.', conj: { praesens: 'gehört', praeteritum: 'gehörte', perfekt: 'hat gehört' } },
    { de: 'teuer', pos: 'adjective', en: 'expensive', hi: 'महंगा', ex: 'Der teure Kurs hat sich gelohnt.', exEn: 'The expensive course was worth it.' },
    { de: 'gemütlich', pos: 'adjective', en: 'cosy', hi: 'आरामदायक', ex: 'Das gemütliche Klassenzimmer hilft mir zu lernen.', exEn: 'The cosy classroom helps me learn.' },
    { de: 'jemand', pos: 'pronoun', en: 'someone', hi: 'कोई', ex: 'Jemand hat mir geholfen.', exEn: 'Someone helped me.' },
    { de: 'niemand', pos: 'pronoun', en: 'no one', hi: 'कोई नहीं', ex: 'Niemand ist perfekt vorbereitet.', exEn: 'No one is perfectly prepared.' },
    { de: 'etwas', pos: 'pronoun', en: 'something', hi: 'कुछ', ex: 'Ich hätte gern etwas Ruhe.', exEn: 'I would like some peace.' },
    { de: 'nichts', pos: 'pronoun', en: 'nothing', hi: 'कुछ नहीं', ex: 'Ich habe nichts vergessen.', exEn: 'I haven\'t forgotten anything.' },
    { de: 'alles', pos: 'pronoun', en: 'everything', hi: 'सब कुछ', ex: 'Alles ist bereit für die Prüfung.', exEn: 'Everything is ready for the exam.' },
    { de: 'jeder', pos: 'pronoun', en: 'everyone, each', hi: 'हर कोई', ex: 'Jeder hat Angst vor der Prüfung.', exEn: 'Everyone is afraid of the exam.' },
    { de: 'alle', pos: 'pronoun', en: 'all', hi: 'सब', ex: 'Alle denken an dasselbe.', exEn: 'Everyone thinks about the same thing.' },
    { de: 'manche', pos: 'pronoun', en: 'some', hi: 'कुछ लोग', ex: 'Manche sind schon fertig.', exEn: 'Some are already finished.' },
    { de: 'warten auf', pos: 'verb', en: 'to wait for', hi: 'का इंतज़ार करना', ex: 'Sie wartet auf ihre Prüfung.', exEn: 'She is waiting for her exam.', conj: { praesens: 'wartet auf', praeteritum: 'wartete auf', perfekt: 'hat gewartet auf' } },
    { de: 'denken an', pos: 'verb', en: 'to think about', hi: 'के बारे में सोचना', ex: 'Alle denken an dasselbe.', exEn: 'Everyone thinks about the same thing.', conj: { praesens: 'denkt an', praeteritum: 'dachte an', perfekt: 'hat gedacht an' } },
    { de: 'sich freuen auf', pos: 'verb', en: 'to look forward to', hi: 'का इंतज़ार करना (खुशी से)', ex: 'Worauf freust du dich am meisten?', exEn: 'What are you looking forward to most?', conj: { praesens: 'freut sich auf', praeteritum: 'freute sich auf', perfekt: 'hat sich gefreut auf' } },
    { de: 'träumen von', pos: 'verb', en: 'to dream of', hi: 'का सपना देखना', ex: 'Ich träume von den Ferien nach der Prüfung.', exEn: 'I dream of the holidays after the exam.', conj: { praesens: 'träumt von', praeteritum: 'träumte von', perfekt: 'hat geträumt von' } },
    { de: 'worauf', pos: 'adverb', en: 'what … for', hi: 'किस चीज़ के लिए', ex: 'Worauf wartest du?', exEn: 'What are you waiting for?' },
    { de: 'darauf', pos: 'adverb', en: 'to that', hi: 'उस पर', ex: 'Darauf freue ich mich schon.', exEn: 'I\'m already looking forward to that.' },
    { de: 'woran', pos: 'adverb', en: 'about what', hi: 'किस बारे में', ex: 'Woran denkst du gerade?', exEn: 'What are you thinking about right now?' },
    { de: 'hätte', pos: 'verb', en: 'would like to have', hi: 'चाहूंगी', ex: 'Ich hätte gern einen Kaffee.', exEn: 'I would like a coffee.' },
    { de: 'wäre', pos: 'verb', en: 'would be', hi: 'होता', ex: 'Ich wäre gern in Deutschland.', exEn: 'I would like to be in Germany.' },
    { de: 'würde', pos: 'verb', en: 'would', hi: 'करूंगी', ex: 'Ich würde gern mehr reisen.', exEn: 'I would like to travel more.' },
    { de: 'Stelle', art: 'die', gender: 'f', plural: 'Stellen', pos: 'noun', en: 'place, stead', hi: 'जगह', ex: 'An deiner Stelle würde ich mehr lernen.', exEn: 'In your place, I would study more.' },
    { de: 'Helfer', art: 'der', gender: 'm', plural: 'Helfer', pos: 'noun', en: 'helper', hi: 'सहायक', ex: 'Ich suche einen Helfer für die Prüfungsvorbereitung.', exEn: 'I\'m looking for a helper for exam prep.' },
    { de: 'Wanderer', art: 'der', gender: 'm', plural: 'Wanderer', pos: 'noun', en: 'wanderer', hi: 'यात्री', ex: 'Das ist der Wanderer, der letztes Jahr im Radio war.', exEn: 'That\'s the wanderer who was on the radio last year.' },
    { de: 'Sammlerin', art: 'die', gender: 'f', plural: 'Sammlerinnen', pos: 'noun', en: 'collector', hi: 'संग्राहक', ex: 'Ich kenne eine Sammlerin, die jährlich einen Stehplatz kauft.', exEn: 'I know a collector who buys a standing spot yearly.' },
    { de: 'Nachrichtensprecher', art: 'der', gender: 'm', plural: 'Nachrichtensprecher', pos: 'noun', en: 'newsreader', hi: 'समाचार वाचक', ex: 'Das ist der Nachrichtensprecher, der jeden Abend berichtet.', exEn: 'That\'s the newsreader who reports every evening.' },
    { de: 'Quiz', art: 'das', gender: 'n', plural: 'Quiz', pos: 'noun', en: 'quiz', hi: 'प्रश्नोत्तरी', ex: 'Das ist das Quiz, das ich jede Woche spiele.', exEn: 'That\'s the quiz that I play every week.' },
    { de: 'Steuer', art: 'die', gender: 'f', plural: 'Steuern', pos: 'noun', en: 'tax', hi: 'कर', ex: 'Das ist die Steuer, die ich jedes Jahr zahle.', exEn: 'That\'s the tax that I pay every year.' },
    { de: 'Hörerin', art: 'die', gender: 'f', plural: 'Hörerinnen', pos: 'noun', en: 'listener', hi: 'श्रोता', ex: 'Das ist die Hörerin, die der Moderator immer grüßt.', exEn: 'That\'s the listener whom the host always greets.' },
    { de: 'melodisch', pos: 'adjective', en: 'melodious', hi: 'मधुर', ex: 'Das ist der Song, den ich so melodisch fand.', exEn: 'That\'s the song that I thought was so melodious.' },
    { de: 'befreundet', pos: 'adjective', en: 'friends (with each other)', hi: 'दोस्त', ex: 'Wir sind schon lange befreundet.', exEn: 'We\'ve been friends for a long time.' },
    { de: 'gestehen', pos: 'verb', en: 'to confess', hi: 'कबूल करना', ex: 'Ich möchte dir etwas gestehen.', exEn: 'I would like to confess something to you.', conj: { praesens: 'gesteht', praeteritum: 'gestand', perfekt: 'hat gestanden' } },
    { de: 'reich', pos: 'adjective', en: 'rich', hi: 'अमीर', ex: 'Ich wäre gern reich, aber glücklich ist wichtiger.', exEn: 'I would like to be rich, but happy is more important.' },
    { de: 'Werktag', art: 'der', gender: 'm', plural: 'Werktage', pos: 'noun', en: 'working day', hi: 'कामकाजी दिन', ex: 'Nach einem langen Werktag hätte ich gern Ruhe.', exEn: 'After a long working day, I would like some peace.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 25–34 focus) ----------
  grammar: [
    {
      title: 'Adjektivendungen — bestimmter & unbestimmter Artikel',
      body: [
        'After der/die/das, adjectives take -e in the Nominativ singular and -en almost everywhere else. After ein-words (ein, mein, dein…), the article itself sometimes carries no ending, so the adjective steps in: masculine Nom. sg. -er, neuter Nom./Akk. sg. -es.'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['der + -e', '<span class="de">der letzte Tag</span>'],
          ['ein + -er (masc. Nom.)', '<span class="de">ein guter Rat</span>'],
          ['mein + -e (fem. Nom./Akk.)', '<span class="de">meine erste Prüfung</span>']
        ]
      },
      hinglish: '<b>der/die/das</b> ke baad adjective <b>-e</b> leta hai (Nominativ singular mein) ya <b>-en</b>. Aur <b>ein</b>-word ke baad masculine Nominativ mein <b>-er</b> aata hai aur neuter mein <b>-es</b>.'
    },
    {
      title: 'als vs. wenn',
      body: [
        'als describes ONE single event in the past. wenn describes a repeated/habitual past event, or any present/future condition.'
      ],
      table: {
        head: ['als (one past event)', 'wenn (repeated / present / future)'],
        rows: [
          ['<span class="de">Als ich meine erste Prüfung machte, war ich nervös.</span>', '<span class="de">Wenn man gut vorbereitet ist, ist man ruhiger.</span>']
        ]
      },
      hinglish: '<b>als</b> past ke ek specific time ke liye aata hai, aur <b>wenn</b> baar-baar hone wali situation ke liye, ya present aur future ki condition ke liye.'
    },
    {
      title: 'Indefinitpronomen',
      body: [
        'jemand/niemand (people), etwas/nichts (things), alles/jeder/alle/manche/viele/einige/wenige (quantities) — none of them take an article.'
      ],
      table: {
        head: ['Word', 'Meaning'],
        rows: [
          ['jemand / niemand', 'someone / no one'],
          ['etwas / nichts', 'something / nothing'],
          ['alles / jeder / alle', 'everything / everyone (each) / all'],
          ['manche / viele / einige / wenige', 'some / many / a few / few']
        ]
      },
      hinglish: 'Indefinitpronomen teen groups mein baant lo: logon ke liye <b>jemand</b> aur <b>niemand</b>, cheezon ke liye <b>etwas</b> aur <b>nichts</b>, aur quantity ke liye <b>alles, jeder, alle, manche, viele</b>. In sab ke saath article nahi lagta.'
    },
    {
      title: 'Verben mit Präpositionen & W-Fragen',
      body: [
        'Fixed-preposition verbs (warten auf, denken an, sich freuen auf, träumen von) never change their preposition. Ask about them with wo(r)- for things and Präposition + wen/wem for people.'
      ],
      table: {
        head: ['Verb', 'Question (thing)', 'Question (person)'],
        rows: [
          ['warten auf', 'Worauf wartest du?', 'Auf wen wartest du?'],
          ['denken an', 'Woran denkst du?', 'An wen denkst du?']
        ]
      },
      hinglish: 'Fixed-preposition verbs ki preposition badalti nahi. Cheezon ke baare mein poochhna ho to <b>wo(r)-</b> use karo, aur logon ke baare mein poochhna ho to preposition ke saath <b>wen</b> ya <b>wem</b>.'
    },
    {
      title: 'Konjunktiv II — hätte, wäre, würde',
      body: [
        'hätte for wanting a thing, wäre for wanting to be somewhere/a state, würde + Infinitiv for wanting to do an action. Formal Sie always takes würden/könnten/hätten.'
      ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['a thing', '<span class="de">Ich hätte gern einen Kaffee.</span>'],
          ['a state', '<span class="de">Ich wäre gern in Deutschland.</span>'],
          ['an action', '<span class="de">Ich würde gern mehr reisen.</span>']
        ]
      },
      hinglish: 'Koi cheez chahiye to <b>hätte gern</b>, kahin hona ya kisi state mein hona ho to <b>wäre gern</b>, aur kuch karna ho to <b>würde gern</b> ke saath Infinitiv.'
    },
    {
      title: 'Relativsätze — Nominativ vs. Akkusativ',
      body: [
        'When the relative pronoun is the subject, use Nominativ (der/die/das/die). When it\'s the object, use Akkusativ — only the masculine changes: der → den.'
      ],
      table: {
        head: ['Nominativ (subject)', 'Akkusativ (object)'],
        rows: [
          ['<span class="de">der Mann, der hier arbeitet</span>', '<span class="de">der Film, den ich gesehen habe</span>']
        ]
      },
      hinglish: 'Relative pronoun subject ho to Nominativ aata hai, aur object ho to Akkusativ. Sirf masculine badalta hai \u2014 <b>der</b> se <b>den</b>.'
    },
    {
      title: 'Quick decision guide — all nine together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['describe a noun with an adjective?', '→ check der/die/das vs. ein-word, then the ending'],
          ['talk about a one-time vs. repeated past event?', '→ als vs. wenn'],
          ['refer to people/things without naming them?', '→ Indefinitpronomen'],
          ['name a fixed action-target?', '→ Verben mit Präpositionen'],
          ['ask about that fixed target?', '→ wo(r)- (things) / Präp.+wen/wem (people)'],
          ['soften a wish or request?', '→ hätte / wäre / würde'],
          ['add a description clause?', '→ Relativsatz — check subject (Nom.) vs. object (Akk.)']
        ]
      },
      hinglish: 'Is checkpoint mein chhe cheezein test hoti hain: adjective endings, <b>als</b> vs <b>wenn</b>, Indefinitpronomen, fixed-preposition verbs ke saath W-Frage, Konjunktiv II, aur Relativsatz ke Nominativ aur Akkusativ forms.'
    }
  ],

  // ---------- Reading (Goethe-style: Aushang, clickable) ----------
  reading: {
    title: 'Aushang: Der letzte Schultag',
    titleEn: 'Notice: the last day of school',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Adjektiv nach best. Artikel' },
      { w: 'Kursteilnehmer', role: 'r-object', en: 'course participants', hi: 'कोर्स सहभागी', pron: 'KOORS-tile-nay-mer', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'letzte', role: 'r-adjective', en: 'last', hi: 'आखिरी', pron: 'LETS-tuh', type: 'Adjektiv nach bestimmtem Artikel', why: 'adjective ending after the definite article (recycled — Ch.26).' },
      { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
      { w: 'vor', role: 'r-time', en: 'before', hi: 'पहले', pron: 'for', type: 'Preposition · Dat.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dat.' },
      { w: 'Prüfung', role: 'r-dativ', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-foong', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Jeder', role: 'r-subject', en: 'everyone', hi: 'हर कोई', pron: 'YAY-der', type: 'Indefinitpronomen', why: 'Indefinitpronomen (recycled — Ch.29).' },
      { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Konjunktiv II · sollen' },
      { w: 'sein', role: 'r-akkusativ', en: 'his', hi: 'अपना', pron: 'zine', type: 'Possessivartikel · Akk.' },
      { w: 'eigenes', role: 'r-akkusativ', en: 'own', hi: 'खुद का', pron: 'EYE-ge-nes', type: 'Adjektiv nach unbestimmtem Artikel', why: 'neuter ending -es after the possessive, like an ein-word (recycled — Ch.27).' },
      { w: 'Dokument', role: 'r-akkusativ', en: 'document', hi: 'दस्तावेज़', pron: 'do-koo-MENT', type: 'Noun · neut.' },
      { w: 'mitbringen', role: 'r-verb', en: 'bring along', hi: 'साथ लाना', pron: 'MIT-bring-en', type: 'Verb · mitbringen (Nebensatz-Ende)' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'if', hi: 'अगर', pron: 'ven', type: 'Konjunktion · wenn', why: 'wenn — present/future condition (recycled — Ch.11/28).', ex: 'Wenn Sie Fragen haben, wenden Sie sich an uns.', exEn: 'If you have questions, turn to us.' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'Fragen', role: 'r-akkusativ', en: 'questions', hi: 'सवाल', pron: 'FRAH-gen', type: 'Noun · plural' },
      { w: 'haben', role: 'r-verb', en: 'have', hi: 'हैं', pron: 'HAH-ben', type: 'Verb · haben (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'wenden', role: 'r-verb', en: 'turn', hi: 'संपर्क करें', pron: 'VEN-den', type: 'Verb · sich wenden an (reflexiv)' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv', en: 'yourself', hi: 'खुद को', pron: 'zikh', type: 'Reflexivpronomen' },
      { w: 'an', role: 'r-preposition', en: 'to', hi: 'की ओर', pron: 'an', type: 'Preposition · Akk. (fest)', why: 'sich wenden an — fixed-preposition verb (recycled — Ch.30).' },
      { w: 'unseren', role: 'r-akkusativ', en: 'our', hi: 'हमारा', pron: 'OON-ze-ren', type: 'Possessivartikel · Akk.' },
      { w: 'freundlichen', role: 'r-akkusativ', en: 'friendly', hi: 'मिलनसार', pron: 'FROYNT-li-khen', type: 'Adjektiv nach unbestimmtem Artikel', why: 'masc. Akk. ending -en after the possessive, like an ein-word (recycled — Ch.27).' },
      { w: 'Helfer', role: 'r-akkusativ', en: 'helper', hi: 'सहायक', pron: 'HEL-fer', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Helfer', role: 'r-subject', en: 'helper', hi: 'सहायक', pron: 'HEL-fer', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'den', role: 'r-akkusativ', en: 'whom', hi: 'जिसे', pron: 'dain', type: 'Relativpronomen · Akk.', why: 'den — Akkusativ relative pronoun, masculine, the only form that changes (recycled — Ch.34).' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'diesen', role: 'r-akkusativ', en: 'this', hi: 'यह', pron: 'DEE-zen', type: 'Determiner · Akk.' },
      { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
      { w: 'organisiert', role: 'r-verb', en: 'organized', hi: 'आयोजित किया', pron: 'or-ga-ni-ZEERT', type: 'Verb · organisieren (Nebensatz-Ende)' },
      { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Hilfsverb · haben' },
      { w: ',', plain: true },
      { w: 'wartet', role: 'r-verb', en: 'waits', hi: 'इंतज़ार करता है', pron: 'VAR-tet', type: 'Verb · warten auf', why: 'warten auf — fixed-preposition verb (recycled — Ch.30).' },
      { w: 'auf', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'owf', type: 'Preposition · Akk. (fest)' },
      { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपका', pron: 'zee', type: 'Pronoun · Akk.' },
      { w: 'am', role: 'r-place', en: 'at the', hi: 'में', pron: 'am', type: 'Preposition · contraction' },
      { w: 'Eingang', role: 'r-place', en: 'entrance', hi: 'प्रवेश द्वार', pron: 'INE-gank', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'Dear course participants, tomorrow is the last day before the exam. Everyone should bring their own document. If you have questions, turn to our friendly helper. The helper, whom we organized for this day, is waiting for you at the entrance.'
  },

  // ---------- Listening (Goethe-style, 5 realistic tasks) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_035_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Silke, ich hätte gern mehr Zeit für die Prüfung gehabt.', en: 'Silke, I would have liked more time for the exam.' },
      { id: 'A2_035_L002', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich weiß, was du meinst. Ich rutsche auch ständig in den Konjunktiv.', en: 'I know what you mean. I also keep sliding into the subjunctive.' },
      { id: 'A2_035_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Freust du dich schon auf die Woche danach?', en: 'Are you already looking forward to the week after?' },
      { id: 'A2_035_L004', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sehr! Eine Woche ganz ohne Stress, das wäre schön.', en: 'Very much! A week completely without stress, that would be nice.' }
    ],
    transcript: 'Silke, ich hätte gern mehr Zeit für die Prüfung gehabt. Ich weiß, was du meinst. Ich rutsche auch ständig in den Konjunktiv. Freust du dich schon auf die Woche danach? Sehr! Eine Woche ganz ohne Stress, das wäre schön.',
    translation: 'Silke, I would have liked more time for the exam. I know what you mean. I also keep sliding into the subjunctive. Are you already looking forward to the week after? Very much! A week completely without stress, that would be nice.',
    tokens: [
      { w: 'Silke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hätte' },
      { w: 'gern' },
      { w: 'mehr' },
      { w: 'Zeit' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: 'gehabt' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'du' },
      { w: 'meinst' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'rutsche' },
      { w: 'auch' },
      { w: 'ständig' },
      { w: 'in' },
      { w: 'den' },
      { w: 'Konjunktiv' },
      { w: '.', plain: true },
      { w: 'Freust' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'schon' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Woche' },
      { w: 'danach' },
      { w: '?', plain: true },
      { w: 'Sehr' },
      { w: '!', plain: true },
      { w: 'Eine' },
      { w: 'Woche' },
      { w: 'ganz' },
      { w: 'ohne' },
      { w: 'Stress' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'wäre' },
      { w: 'schön' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wovon hätte Timo gern mehr gehabt?', qEn: 'What does Timo wish he had had more of?', options: ['Geld', 'Zeit für die Prüfung', 'Bücher', 'Kaffee'], optionsEn: ['money', 'time for the exam', 'books', 'coffee'], answer: 1,
        explain: '"Ich hätte gern mehr Zeit für die Prüfung gehabt."' },
      { q: 'Worauf freut sich Silke?', qEn: 'What is Silke looking forward to?', options: ['der Prüfung', 'einer Woche ohne Stress', 'einem neuen Kurs', 'den Ferien im Sommer'], optionsEn: ['the exam', 'a week without stress', 'a new course', 'the summer holidays'], answer: 1,
        explain: '"Eine Woche ganz ohne Stress, das wäre schön."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor und beschreibe dein Zuhause.", taskEn: "Exam, Part 1: introduce yourself and describe your home.", de: "Ich heiße David. Ich wohne in einer gemütlichen Wohnung, die nicht teuer ist.", en: "My name is David. I live in a cosy flat that isn't expensive." },
    { task: "Prüfung, Teil 1: Der Prüfer fragt, worauf du dich freust.", taskEn: "Exam, Part 1: the examiner asks what you're looking forward to.", de: "Ich freue mich auf meinen Urlaub. Ich träume schon lange davon.", en: "I'm looking forward to my holiday. I've been dreaming of it for ages." },
    { task: "Prüfung, Teil 2: Beschreibe ein Bild — ein Wartezimmer.", taskEn: "Exam, Part 2: describe a picture — a waiting room.", de: "Jemand wartet auf den Arzt. Niemand spricht, alle sind still.", en: "Somebody is waiting for the doctor. Nobody's talking, everybody's quiet." },
    { task: "Prüfung, Teil 2: Der Prüfer fragt, wem die Sachen gehören.", taskEn: "Exam, Part 2: the examiner asks whose things they are.", de: "Die Tasche gehört der Frau, die links sitzt.", en: "The bag belongs to the woman sitting on the left." },
    { task: "Prüfung, Teil 3: Plant zusammen ein Treffen.", taskEn: "Exam, Part 3: plan a meeting together.", de: "Wir könnten uns am Samstag treffen. Woran denkst du?", en: "We could meet on Saturday. What are you thinking?" },
    { task: "Prüfung, Teil 3: Frag deine Partnerin, worauf sie wartet.", taskEn: "Exam, Part 3: ask your partner what she's waiting for.", de: "Worauf wartest du noch? Ist etwas nicht klar?", en: "What are you still waiting for? Is something unclear?" }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe A2 writing. Choose ONE task and write ~40 words, using at least three grammar points from Chapters 25–34 (adjective ending, als/wenn, Indefinitpronomen, fixed-preposition verb, Konjunktiv II, or a relative clause). (1) FORMAL EMAIL: ask the language school whether you can reschedule the exam, and describe your reason politely. (2) INVITATION: invite a friend to celebrate after the exam. (3) APOLOGY: apologize for missing a class and explain what you would do differently.',
    starters: ['Sehr geehrte/r …,', 'Liebe/r …,', 'Ich hätte gern …', 'Als ich …, war ich …', 'Das ist der/die/das …, der/die/das …'],
    placeholder: 'Sehr geehrte Frau Weber, ich hätte eine Frage zur Prüfung …',
    minWords: 40
  },

  // ---------- Exercises (4 types, mixed Ch.25–34) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses the correct adjective ending?',
      options: ['der letzt Tag', 'der letzte Tag', 'der letzten Tag'],
      answer: 1,
      explain: 'After der (masc. Nom. sg.), the adjective takes -e: der letzte Tag.'
    },
    gap: {
      sentence: ['', ' ich meine erste Prüfung machte, war ich nervös.'],
      gaps: [ { answer: 'Als', accepts: ['Als'] } ],
      explain: 'als describes one single past event.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Jemand hat mir …', art: 'Indefinitpronomen' },
        { noun: 'Sie wartet auf …', art: 'fixed-preposition verb' },
        { noun: 'Ich hätte gern …', art: 'Konjunktiv II wish' },
        { noun: 'der Mann, der …', art: 'Nominativ relative clause' },
        { noun: 'der Film, den …', art: 'Akkusativ relative clause' }
      ]
    },
    builder: {
      target: 'Build: "That is the best advice that I can give you."',
      bank: ['Das', 'ist', 'der', 'beste', 'Rat', ',', 'den', 'ich', 'geben', 'kann', '.'],
      answer: ['Das', 'ist', 'der', 'beste', 'Rat', ',', 'den', 'ich', 'geben', 'kann', '.'],
      roles: { 'beste': 'r-adjective', 'den': 'r-akkusativ', 'ich': 'r-subject', 'kann': 'r-modalverb' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Das ist ein ___ Rat." (masc. Nom., after ein)', options: ['gut', 'guter', 'gute'], answer: 1,
      explain: 'After ein (masc. Nom. sg.), the adjective takes -er: ein guter Rat.' },
    { q: 'Complete: "___ ich zum ersten Mal Deutsch sprach, war ich nervös." (one past event)', options: ['Wenn', 'Als', 'Ob'], answer: 1,
      explain: 'als describes a single past event.' },
    { q: 'Which Indefinitpronomen means "no one"?', options: ['jemand', 'niemand', 'jeder'], answer: 1,
      explain: 'niemand = no one.' },
    { q: 'Which question asks about a fixed-preposition verb for a THING?', options: ['Auf wen wartest du?', 'Worauf wartest du?', 'Wer wartet?'], answer: 1,
      explain: 'worauf uses the wo(r)- pattern for things.' },
    { q: 'Complete: "Ich ___ gern mehr reisen." (a wish to do something)', options: ['hätte', 'wäre', 'würde'], answer: 2,
      explain: 'würde + Infinitiv expresses a wish to do an action.' },
    { q: 'Which relative pronoun is correct: "Das ist der Film, ___ ich gesehen habe."', options: ['der', 'den', 'das'], answer: 1,
      explain: 'der Film is the object here, so the Akkusativ pronoun den is needed.' }
  ],

  // ---------- Summary / Final A2 Readiness Check ----------
  takeaways: [
    { c: 'r-adjective', html: '<strong>Grammar mastered:</strong> adjective endings after der/die/das and ein-words, als vs. wenn, Indefinitpronomen, fixed-preposition verbs with W-Fragen mit Präpositionen, Konjunktiv II (hätte/wäre/würde), and Nominativ/Akkusativ relative clauses.' },
    { c: 'r-modalverb', html: '<strong>Vocabulary mastered:</strong> the full A2 word list across 34 chapters — everyday life, work, travel, media, feelings, and exam-specific vocabulary.' },
    { c: 'r-frage', html: '<strong>Speaking confidence:</strong> you can introduce yourself, describe a picture, and plan something together — the three Goethe A2 speaking formats.' },
    { c: 'r-conjunction', html: '<strong>Listening & reading readiness:</strong> you can follow everyday announcements, notices, and conversations across work, health, shopping, transport, and travel.' },
    { c: 'r-akkusativ', html: '<strong>Writing readiness:</strong> you can produce a clean, well-structured short text — email, invitation, apology, or complaint — using accurate A2 grammar.' },
    { c: 'r-dativ', html: '<strong>Overall A2 readiness:</strong> if you scored well across this mock test and the three earlier checkpoints, you are ready to sit the real Goethe-Zertifikat A2 exam. Review any weak sections below, then trust your preparation.' }
  ],
  revisionTips: [
    'Weak on adjective endings? Redo Ch.26–28 — der/die/das vs. ein-word patterns.',
    'Mixing als and wenn? Redo Ch.28 — one past event vs. repeated/present/future.',
    'Shaky on relative clauses? Redo Ch.33–34 — Nominativ (subject) vs. Akkusativ (object), and der→den.',
    'Unsure about Konjunktiv II? Redo Ch.32 — hätte (thing), wäre (state), würde + Infinitiv (action).',
    'Fixed-preposition verbs feel unnatural? Redo Ch.30–31 and drill the wo(r)-/da(r)- pattern.'
  ]
};

window.CHAPTER = CHAPTER;
