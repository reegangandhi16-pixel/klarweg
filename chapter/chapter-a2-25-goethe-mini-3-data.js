/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 25
   "Goethe Mini 3" — third full checkpoint. NO new grammar.
   Covers Chapters 19–24: Indirekte Frage, was für ein(e),
   Verben mit Dativ und Akkusativ, könnte, sollte, deshalb &
   trotzdem — with natural recycling from earlier A2 chapters.
   Vocabulary source: uploaded chapter-25 note ("Review chapter
   — no new words") → review vocab drawn from Chapters 19–24.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-16-goethe-mini-2-data.js exactly
   (checkpoint shape: flat vocab[] review set, grammar[] mixed
   review cards, tokenized reading, Goethe-style mock test, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.
============================================================ */
const CHAPTER = {
  id: 'a2-25-goethe-mini-3',
  phase: 'A2 · Phase 2',
  number: 25,
  title: 'Goethe Mini 3',
  titleEn: 'Goethe Checkpoint 3',
  description: 'Your third full checkpoint — no new grammar. A Goethe-A2-style mock that puts Chapters 19–24 to work at once: indirect questions, was für ein(e) vs. welcher, two-object verbs, könnte, sollte, and deshalb/trotzdem — all inside realistic exam tasks.',
  xp: 220,
  time: 45,
  difficulty: 'Checkpoint',
  nextChapter: { number: 26, title: 'Adjektiv nach bestimmtem Artikel', titleEn: 'Adjective endings after the definite article' , href: 'chapter-a2-26-adjektiv-bestimmter-artikel.html' },

  prevChapter: { number: 24, title: 'deshalb & trotzdem', titleEn: 'deshalb & trotzdem', href: 'chapter-a2-24-deshalb-trotzdem.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together.</em>',
    intro: 'A full afternoon before the final exam: Timo is nervous and looking for advice, and Frau Sander answers with everything from Chapters 19–24 at once — an indirect question, a sollte, a deshalb, a was für ein — all inside one reassuring conversation.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear indirect questions, was für ein(e), könnte, sollte, deshalb and trotzdem side by side'
    ],
    scene: 'Ein voller Nachmittag — Sprachschule Berlin',
    femaleSpeakers: ['Frau Sander'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'nervös', role: 'r-adjective', en: 'nervous', hi: 'घबराया हुआ', pron: 'ner-VÖS', type: 'Adjective' },
        { w: 'vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Abschlussprüfung', role: 'r-dativ', en: 'final exam (dat.)', hi: 'अंतिम परीक्षा', pron: 'AP-shlus-prü-fung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true },
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकती हैं', pron: 'KÖ-nen', type: 'Modal · können (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Ratschlag', role: 'r-akkusativ', en: 'piece of advice', hi: 'सलाह', pron: 'RAHT-shlahk', type: 'Noun · masc.', why: 'der Ratschlag (this chapter).', ex: 'Geben Sie mir einen Ratschlag.', exEn: 'Give me a piece of advice.' },
        { w: 'geben', role: 'r-verb', en: 'give', hi: 'देना', pron: 'GAY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'I am nervous before the final exam. Can you give me a piece of advice?', hi: 'Main antim pariksha se pehle ghabraya hua hoon. Kya aap mujhe salah de sakti hain?' },
      { speaker: 'Frau Sander', side: 'right', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, Sie)' },
        { w: 'realistisch', role: 'r-adjective', en: 'realistic', hi: 'यथार्थवादी', pron: 'ray-a-LIS-tish', type: 'Adjective' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Of course. You should stay realistic.', hi: 'Zaroor. Aapko yatharthvaadi rehna chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'bedeutet', role: 'r-verb', en: 'does that mean', hi: 'मतलब', pron: 'be-DOY-tet', type: 'Verb · bedeuten' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'What does that mean?', hi: 'Iska kya matlab hai?' },
      { speaker: 'Frau Sander', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'erfahren', role: 'r-verb', en: 'learned', hi: 'सीखा', pron: 'er-FAH-ren', type: 'Partizip II · Satzende', why: 'erfahren = to learn/find out (Partizip II, this chapter).', ex: 'Sie haben viel erfahren.', exEn: 'You have learned a lot.' },
        { w: '.', plain: true },
        { w: 'Deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'sich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद पर', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'vertrauen', role: 'r-verb', en: 'trust', hi: 'भरोसा करना', pron: 'fer-TROW-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You have already learned a lot. Therefore you should trust yourself.', hi: 'Aapne pehle hi bahut kuch seekha hai. Isliye aapko khud par bharosa karna chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II, ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Stipendium', role: 'r-akkusativ', en: 'scholarship', hi: 'छात्रवृत्ति', pron: 'shti-PEN-dee-um', type: 'Noun · neut.', why: 'das Stipendium (this chapter).', ex: 'Ich bewerbe mich für ein Stipendium.', exEn: 'I apply for a scholarship.' },
        { w: 'bewerben', role: 'r-verb', en: 'apply', hi: 'आवेदन करना', pron: 'be-VAIR-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Should I also apply for a scholarship?', hi: 'Kya mujhe chhatravrutti ke liye bhi avedan karna chahiye?' },
      { speaker: 'Frau Sander', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)', why: 'wäre = would be (Konjunktiv II of sein), recycled.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'sinnvoll', role: 'r-adjective', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes! That would be very sensible.', hi: 'Haan! Yeh bahut uchit hoga.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ihr', role: 'r-subject', en: 'your (formal)', hi: 'आपकी', pron: 'eer', type: 'Possessive' },
        { w: 'Ratschlag', role: 'r-subject', en: 'advice', hi: 'सलाह', pron: 'RAHT-shlahk', type: 'Noun · masc.' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करती है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! Your advice really helps me.', hi: 'Dhanyavaad! Aapki salah sach mein meri madad karti hai.' },
      { speaker: 'Frau Sander', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Prüfung', role: 'r-dativ', en: 'exam (dat.)', hi: 'परीक्षा में', pron: 'PRÜ-fung', type: 'Noun · fem. dat.' },
        { w: '!', plain: true }
      ], en: 'Gladly! Much success with the exam!', hi: 'Khushi se! Pariksha mein bahut safalta mile!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is a <strong>checkpoint</strong>, not a new lesson — no new grammar. It gathers Chapters 19–24 into one Goethe-A2-style rehearsal: <span class="de r-frage">indirect questions</span> (wo, ob), <span class="de r-frage">was für ein(e)</span> vs. welcher, two-object verbs (Dativ + Akkusativ), <span class="de r-modalverb">könnte</span> and <span class="de r-modalverb">sollte</span> for politeness and advice, and <span class="de r-conjunction">deshalb/trotzdem</span> for result and contrast — all under Goethe A2 exam conditions.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor and Goethe-A2 examiner for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 19-24 — no new grammar. The learner wrote a short exam-style text (email / invitation / apology / complaint / request / advice) below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Indirect questions: W-word or ob opens the clause, verb goes to the end. No inversion.\n' +
    '- was für ein(e)/einen agrees with gender/case of the noun; welcher picks one specific item — don\'t confuse the two.\n' +
    '- Two-object verbs (geben, zeigen, schicken, erklären …): Dativ (receiver) before Akkusativ (thing) with nouns; Akkusativ before Dativ with pronouns.\n' +
    '- könnte/könntest/könnten for polite requests, suggestions, possibility, hypothetical ability — never stack können on top of könnte.\n' +
    '- sollte/solltest/sollten for advice, recommendations, opinions — bare infinitive at the end, never "zu" or a second conjugated verb.\n' +
    '- deshalb/trotzdem take position one, verb comes right after in position two — never subject before verb.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe A2 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you\'re ready for the real Goethe A2. Keep your word order tidy under time pressure and you\'ll pass comfortably. Next: adjective endings after der/die/das.',
    mid: 'Solid A2. Re-run the weakest section once (usually was für ein(e) vs. welcher, or the Dativ/Akkusativ word order), then move on.',
    low: 'Worth a full re-run of Chapters 19–24 before the real exam — focus especially on verb position after deshalb/trotzdem and the könnte/sollte conjugations.'
  },

  parserSentence: [
    { w: 'Weißt', role: 'r-verb' }, { w: 'du', role: 'r-subject' },
    { w: 'was', role: 'r-frage' }, { w: 'für', role: 'r-frage' },
    { w: 'ein', role: 'r-frage' }, { w: 'Geschenk', role: 'r-akkusativ' },
    { w: 'sie', role: 'r-subject' }, { w: 'möchte', role: 'r-modalverb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Chapters 19–24 fit together — and how the checkpoint works.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A busy exam-day afternoon recycling all six chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review the key words from Chapters 19–24.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: indirect questions, was für ein(e), Dativ/Akkusativ verbs, könnte, sollte, deshalb/trotzdem.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style notice mixing all six chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point in a realistic phone call.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe A2 Teil 1–3: introduce yourself, describe a picture, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this chapter\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all six grammar points in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full Goethe-A2-style mini mock. Pass to bank the full 220 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your readiness and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A full Goethe-A2-style mini mock — Hören, Lesen, Schreiben, Sprechen — with an answer key and a score band.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '10 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'All key words from Chapters 19–24 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Indirect questions, was für ein(e), Dativ/Akkusativ verbs, könnte, sollte, deshalb/trotzdem — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle Goethe-A2 listening & reading' },
    { de: 'Schreiben', text: 'Write a clean A2 email / advice / request' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe A2 parts' },
    { de: 'Grammatik', text: 'Mix indirect questions, was für ein(e), könnte, sollte, deshalb/trotzdem correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your strengths and what to revise' }
  ],

  // ---------- Vocabulary review (~35 items — no new words, from Ch.19–24) ----------
  vocab: [
    { de: 'Abschlussprüfung', art: 'die', gender: 'f', plural: 'Abschlussprüfungen', pos: 'noun', en: 'final exam', hi: 'अंतिम परीक्षा', ex: 'Wissen Sie, ob die Abschlussprüfung verschoben wurde?', exEn: 'Do you know whether the final exam was postponed?' },
    { de: 'Ratschlag', art: 'der', gender: 'm', plural: 'Ratschläge', pos: 'noun', en: 'piece of advice', hi: 'सलाह', ex: 'Ein guter Ratschlag: bleib realistisch.', exEn: 'Good advice: stay realistic.' },
    { de: 'Beratung', art: 'die', gender: 'f', plural: 'Beratungen', pos: 'noun', en: 'consultation', hi: 'परामर्श', ex: 'Könnten Sie mir eine Beratung anbieten?', exEn: 'Could you offer me a consultation?' },
    { de: 'Kursleiter', art: 'der', gender: 'm', plural: 'Kursleiter', pos: 'noun', en: 'course director', hi: 'कोर्स निर्देशक', ex: 'Was für einen Kursleiter habt ihr?', exEn: 'What kind of course director do you have?' },
    { de: 'Prüfer', art: 'der', gender: 'm', plural: 'Prüfer', pos: 'noun', en: 'examiner', hi: 'परीक्षक', ex: 'Was für einen Prüfer habt ihr?', exEn: 'What kind of examiner do you have?' },
    { de: 'Prüferin', art: 'die', gender: 'f', plural: 'Prüferinnen', pos: 'noun', en: 'examiner (f.)', hi: 'परीक्षक (महिला)', ex: 'Meine Prüferin ist sehr erfahren.', exEn: 'My examiner is very experienced.' },
    { de: 'realistisch', pos: 'adjective', en: 'realistic', hi: 'यथार्थवादी', ex: 'Du solltest realistisch bleiben.', exEn: 'You should stay realistic.' },
    { de: 'erfahren', pos: 'adjective', en: 'experienced', hi: 'अनुभवी', ex: 'Sie ist eine erfahrene Prüferin.', exEn: 'She is an experienced examiner.' },
    { de: 'nervös', pos: 'adjective', en: 'nervous', hi: 'घबराया हुआ', ex: 'Vor der Prüfung bin ich nervös.', exEn: 'Before the exam I am nervous.' },
    { de: 'einhalten', pos: 'verb', en: 'to adhere to', hi: 'पालन करना', ex: 'Ihr solltet den Fahrplan einhalten.', exEn: 'You should stick to the timetable.', conj: { praesens: 'hält ein', praeteritum: 'hielt ein', perfekt: 'hat eingehalten' } },
    { de: 'Fahrplan', art: 'der', gender: 'm', plural: 'Fahrpläne', pos: 'noun', en: 'timetable', hi: 'समय सारणी', ex: 'Wir sollten den Fahrplan einhalten.', exEn: 'We should stick to the timetable.' },
    { de: 'Übersetzung', art: 'die', gender: 'f', plural: 'Übersetzungen', pos: 'noun', en: 'translation', hi: 'अनुवाद', ex: 'Ich könnte die Übersetzung schicken.', exEn: 'I could send the translation.' },
    { de: 'Stipendium', art: 'das', gender: 'n', plural: 'Stipendien', pos: 'noun', en: 'scholarship', hi: 'छात्रवृत्ति', ex: 'Du könntest ein Stipendium beantragen.', exEn: 'You could apply for a scholarship.' },
    { de: 'bewerben (sich)', pos: 'verb', en: 'to apply', hi: 'आवेदन करना', ex: 'Ich sollte mich bei einem Betrieb bewerben.', exEn: 'I should apply at a firm.', conj: { praesens: 'bewirbt sich', praeteritum: 'bewarb sich', perfekt: 'hat sich beworben' } },
    { de: 'Betrieb', art: 'der', gender: 'm', plural: 'Betriebe', pos: 'noun', en: 'firm', hi: 'कंपनी', ex: 'Mein Betrieb schickt mir eine Telefonkonferenz.', exEn: 'My firm sends me a conference call.' },
    { de: 'Dokument', art: 'das', gender: 'n', plural: 'Dokumente', pos: 'noun', en: 'document', hi: 'दस्तावेज़', ex: 'Könntest du mir das Dokument zeigen?', exEn: 'Could you show me the document?' },
    { de: 'zeigen', pos: 'verb', en: 'to show', hi: 'दिखाना', ex: 'Er zeigt ihr die Hausaufgabe.', exEn: 'He shows her the homework.', conj: { praesens: 'zeigt', praeteritum: 'zeigte', perfekt: 'hat gezeigt' } },
    { de: 'erklären', pos: 'verb', en: 'to explain', hi: 'समझाना', ex: 'Kannst du mir erklären, wie das funktioniert?', exEn: 'Can you explain to me how that works?', conj: { praesens: 'erklärt', praeteritum: 'erklärte', perfekt: 'hat erklärt' } },
    { de: 'leihen', pos: 'verb', en: 'to borrow, to lend', hi: 'उधार लेना/देना', ex: 'Könntest du mir dein Werkzeug leihen?', exEn: 'Could you lend me your tool?', conj: { praesens: 'leiht', praeteritum: 'lieh', perfekt: 'hat geliehen' } },
    { de: 'empfehlen', pos: 'verb', en: 'to recommend', hi: 'सुझाना', ex: 'Ich empfehle dir dieses Buch.', exEn: 'I recommend this book to you.', conj: { praesens: 'empfiehlt', praeteritum: 'empfahl', perfekt: 'hat empfohlen' } },
    { de: 'schicken', pos: 'verb', en: 'to send', hi: 'भेजना', ex: 'Ich könnte dir die Gliederung schicken.', exEn: 'I could send you the outline.', conj: { praesens: 'schickt', praeteritum: 'schickte', perfekt: 'hat geschickt' } },
    { de: 'schenken', pos: 'verb', en: 'to give (as a gift)', hi: 'भेंट देना', ex: 'Ich schenke ihm ein Armband.', exEn: 'I give him a bracelet as a gift.', conj: { praesens: 'schenkt', praeteritum: 'schenkte', perfekt: 'hat geschenkt' } },
    { de: 'stressfrei', pos: 'adjective', en: 'stress-free', hi: 'तनावमुक्त', ex: 'Die Prüfung sollte stressfrei sein.', exEn: 'The exam should be stress-free.' },
    { de: 'unnötig', pos: 'adjective', en: 'unnecessary', hi: 'अनावश्यक', ex: 'Du solltest unnötigen Stress vermeiden.', exEn: 'You should avoid unnecessary stress.' },
    { de: 'wegwerfen', pos: 'verb', en: 'to throw away', hi: 'फेंकना', ex: 'Ich sollte den Prospekt nicht wegwerfen.', exEn: 'I shouldn\'t throw away the brochure.', conj: { praesens: 'wirft weg', praeteritum: 'warf weg', perfekt: 'hat weggeworfen' } },
    { de: 'Wettbewerb', art: 'der', gender: 'm', plural: 'Wettbewerbe', pos: 'noun', en: 'competition', hi: 'प्रतियोगिता', ex: 'Ich habe eine Sendung über einen Wettbewerb gesehen.', exEn: 'I saw a programme about a competition.' },
    { de: 'Mannschaft', art: 'die', gender: 'f', plural: 'Mannschaften', pos: 'noun', en: 'team', hi: 'टीम', ex: 'Eine Mannschaft hat eine Höhle erkundet.', exEn: 'A team explored a cave.' },
    { de: 'faszinierend', pos: 'adjective', en: 'fascinating', hi: 'आकर्षक', ex: 'Das ist faszinierend.', exEn: 'That is fascinating.' },
    { de: 'unglaublich', pos: 'adjective', en: 'unbelievable', hi: 'अविश्वसनीय', ex: 'Unglaublich, sie surft im Winter!', exEn: 'Unbelievable, she surfs in winter!' },
    { de: 'Nebel', art: 'der', gender: 'm', plural: 'Nebel', pos: 'noun', en: 'fog', hi: 'कोहरा', ex: 'Draußen ist dichter Nebel.', exEn: 'Outside is thick fog.' },
    { de: 'verstärken', pos: 'verb', en: 'to reinforce, to intensify', hi: 'तेज़ करना', ex: 'Der Nebel verstärkt sich.', exEn: 'The fog is intensifying.', conj: { praesens: 'verstärkt', praeteritum: 'verstärkte', perfekt: 'hat verstärkt' } },
    { de: 'geeignet', pos: 'adjective', en: 'suitable', hi: 'उपयुक्त', ex: 'Ist der neue Kursleiter geeignet?', exEn: 'Is the new course director suitable?' },
    { de: 'Gehörlose', art: 'der/die', gender: 'm/f', plural: 'Gehörlose', pos: 'noun', en: 'deaf person, hearing-impaired person', hi: 'बधिर व्यक्ति', ex: 'Der Kurs ist auch für Gehörlose geeignet.', exEn: 'The course is also suitable for deaf people.' },
    { de: 'Gebärdendolmetscher', art: 'der', gender: 'm', plural: 'Gebärdendolmetscher', pos: 'noun', en: 'sign language interpreter', hi: 'सांकेतिक भाषा दुभाषिया', ex: 'Er unterrichtet mit einem Gebärdendolmetscher.', exEn: 'He teaches with a sign language interpreter.' },
    { de: 'Widerspruch', art: 'der', gender: 'm', plural: 'Widersprüche', pos: 'noun', en: 'contradiction', hi: 'विरोधाभास', ex: 'Das wäre ein Widerspruch.', exEn: 'That would be a contradiction.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 19–24 focus) ----------
  grammar: [
    {
      title: 'Indirekte Frage — W-word or ob, verb to the end',
      body: [
        'Wrap a direct question in a polite frame, and it becomes indirect. Keep the original W-word, or use ob for a yes/no question — either way, the verb moves to the end.'
      ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['<span class="de">Wo ist der Prüfer?</span>', '<span class="de">Weißt du, <span class="r-frage">wo</span> der Prüfer ist?</span>'],
          ['<span class="de">Ist die Prüfung verschoben?</span>', '<span class="de">Ich weiß nicht, <span class="r-frage">ob</span> die Prüfung verschoben ist.</span>']
        ]
      },
      hinglish: 'Direct sawaal ko ek frame mein daal do, phir W-word ya <b>ob</b> se clause shuru karo, aur verb sentence ke end mein bhej do.'
    },
    {
      title: 'was für ein(e) vs. welcher',
      body: [
        'was für ein(e)/einen asks about type or kind. welcher asks the listener to pick one specific, known item.'
      ],
      table: {
        head: ['Question', 'Asks about'],
        rows: [
          ['<span class="de">Was für ein Prüfer ist das?</span>', 'kind / category'],
          ['<span class="de">Welcher Prüfer, der neue oder der alte?</span>', 'one specific item']
        ]
      },
      hinglish: 'was für ein(e) = kism poochna. welcher = ek particular, jaana item choose karna.'
    },
    {
      title: 'Verben mit Dativ und Akkusativ',
      body: [
        'geben, zeigen, schicken, erklären, schenken, leihen, empfehlen … all need a Dativ receiver and an Akkusativ thing. With nouns, Dativ comes first; with pronouns, Akkusativ comes first.'
      ],
      table: {
        head: ['Two nouns', 'Two pronouns'],
        rows: [
          ['<span class="de">Ich schenke <span class="r-dativ">ihm</span> <span class="r-akkusativ">ein Armband</span>.</span>', '<span class="de">Ich schenke <span class="r-akkusativ">es</span> <span class="r-dativ">ihm</span>.</span>']
        ]
      },
      hinglish: 'Agar dono objects noun hain to Dativ pehle aata hai aur Akkusativ baad mein. Aur agar dono pronoun hain to order ulta ho jaata hai \u2014 Akkusativ pehle.'
    },
    {
      title: 'könnte vs. sollte',
      body: [
        'könnte softens kann into a request, suggestion, possibility, or hypothetical ability. sollte softens soll into advice, a recommendation, or an opinion.'
      ],
      table: {
        head: ['könnte', 'sollte'],
        rows: [
          ['<span class="de">Könntest du mir helfen?</span> (polite request)', '<span class="de">Du solltest mehr üben.</span> (advice)'],
          ['<span class="de">Es könnte regnen.</span> (possibility)', '<span class="de">Wir sollten pünktlich sein.</span> (soft obligation)']
        ]
      },
      hinglish: 'könnte = polite request, suggestion, possibility, hypothetical ability. sollte = advice, recommendation, opinion.'
    },
    {
      title: 'deshalb & trotzdem — result vs. contrast',
      body: [
        'deshalb marks an expected result; trotzdem marks an unexpected contrast. Both take position one, so the verb comes right after in position two.'
      ],
      table: {
        head: ['Cause', 'Result (deshalb)', 'Contrast (trotzdem)'],
        rows: [
          ['Es regnet.', '<span class="de">Deshalb bleiben wir zu Hause.</span>', '<span class="de">Trotzdem gehen wir spazieren.</span>']
        ]
      },
      hinglish: 'Agar result expected hai to <b>deshalb</b> use karo, aur agar contrast unexpected hai to <b>trotzdem</b>. Dono ke baad seedha verb aata hai, subject uske baad.'
    },
    {
      title: 'Quick decision guide — all six together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['ask politely/indirectly?', '→ indirect question (W-word/ob)'],
          ['ask about kind vs. one specific item?', '→ was für ein(e) / welcher'],
          ['say who receives what?', '→ Dativ + Akkusativ verb, correct order'],
          ['soften "can" or "should"?', '→ könnte / sollte'],
          ['show a result or a contrast?', '→ deshalb / trotzdem']
        ]
      },
      hinglish: 'Is checkpoint mein paanch tools test hote hain: indirect question, <b>was für ein(e)</b> vs <b>welcher</b>, Dativ aur Akkusativ ka order, <b>könnte</b> vs <b>sollte</b>, aur <b>deshalb</b> vs <b>trotzdem</b>. Har situation ke liye sahi tool chuno.'
    }
  ],

  // ---------- Reading (Goethe-style: Aushang, clickable) ----------
  reading: {
    title: 'Aushang: Prüfungsvorbereitung',
    titleEn: 'Notice: exam preparation',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Adjective' },
      { w: 'Kursteilnehmer', role: 'r-object', en: 'course participants', hi: 'कोर्स सहभागी', pron: 'KOORS-tile-nay-mer', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानते हैं', pron: 'VI-sen', type: 'Verb · wissen' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले ही', pron: 'shohn', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'was', role: 'r-frage', en: 'what', hi: 'क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed', why: 'was für ein(e) (recycled — Ch.20).', ex: 'was für einen Prüfer', exEn: 'what kind of examiner' },
      { w: 'einen', role: 'r-frage', en: 'a (kind of, acc.)', hi: 'किस तरह का', pron: 'AY-nen', type: 'Interrogativartikel · Akk.' },
      { w: 'Prüfer', role: 'r-akkusativ', en: 'examiner', hi: 'परीक्षक', pron: 'PRÜ-fer', type: 'Noun · masc.' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'bekommen', role: 'r-verb', en: 'will get', hi: 'मिलेगा', pron: 'buh-KOM-en', type: 'Verb · bekommen' },
      { w: '?', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'können', role: 'r-modalverb', en: 'cannot', hi: 'सकते', pron: 'KÖ-nen', type: 'Modalverb' },
      { w: 'Ihnen', role: 'r-dativ', en: 'to you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · Dativ' },
      { w: 'leider', role: 'r-adverb', en: 'unfortunately', hi: 'अफ़सोस', pron: 'LY-der', type: 'Adverb' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
      { w: 'mitteilen', role: 'r-verb', en: 'let know', hi: 'बताना', pron: 'MIT-ty-len', type: 'Verb · mitteilen' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-frage', en: 'whether', hi: 'क्या', pron: 'op', type: 'Konjunktion · ob', why: 'indirect ob-question (recycled — Ch.19).', ex: 'ob die Prüferin schon feststeht', exEn: 'whether the examiner is already fixed' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Prüferin', role: 'r-subject', en: 'examiner (f.)', hi: 'परीक्षक (महिला)', pron: 'PRÜ-fer-in', type: 'Noun · fem.' },
      { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले ही', pron: 'shohn', type: 'Adverb' },
      { w: 'feststeht', role: 'r-verb', en: 'is fixed', hi: 'तय है', pron: 'FEST-shtayt', type: 'Verb · feststehen' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Konnektor · deshalb', why: 'deshalb — expected result (recycled — Ch.24).', ex: 'Deshalb bitten wir Sie um Geduld.', exEn: 'Therefore we ask you for patience.' },
      { w: 'bitten', role: 'r-verb', en: 'ask', hi: 'निवेदन करते हैं', pron: 'BI-ten', type: 'Verb · bitten' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपसे', pron: 'zee', type: 'Pronoun · Akk.' },
      { w: 'um', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'oom', type: 'Preposition · Akk.' },
      { w: 'Geduld', role: 'r-akkusativ', en: 'patience', hi: 'सहनशीलता', pron: 'guh-DOOLT', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (Sie/sie)', why: 'sollten — recommendation (recycled — Ch.23).', ex: 'Sie sollten sich trotzdem gut vorbereiten.', exEn: 'You should nevertheless prepare well.' },
      { w: 'sich', role: 'r-reflexiv', en: 'yourself', hi: 'खुद को', pron: 'zikh', type: 'Reflexivpronomen' },
      { w: 'trotzdem', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DEM', type: 'Konnektor · trotzdem', why: 'trotzdem — unexpected contrast (recycled — Ch.24).', ex: 'Trotzdem sollten Sie sich vorbereiten.', exEn: 'Nevertheless, you should prepare.' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adverb' },
      { w: 'vorbereiten', role: 'r-verb', en: 'prepare', hi: 'तैयारी करना', pron: 'FOR-buh-ry-ten', type: 'Verb · vorbereiten' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Konjunktiv II · können (wir)', why: 'könnten — suggestion (recycled — Ch.22).', ex: 'Wir könnten Ihnen die Übungen schicken.', exEn: 'We could send you the exercises.' },
      { w: 'Ihnen', role: 'r-dativ', en: 'to you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · Dativ' },
      { w: 'die', role: 'r-akkusativ', en: 'the (plural)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Übungen', role: 'r-akkusativ', en: 'exercises', hi: 'अभ्यास', pron: 'ÜB-oon-gen', type: 'Noun · plural' },
      { w: 'schicken', role: 'r-verb', en: 'send', hi: 'भेजना', pron: 'SHI-ken', type: 'Infinitive' },
      { w: '.', plain: true }
    ],
    translation: 'Dear course participants, do you already know what kind of examiner you will get? Unfortunately, we cannot let you know whether the examiner (f.) is already fixed. Therefore we ask you for patience. You should nevertheless prepare yourselves well. We could send you the exercises. — Watch all six patterns: was für einen (kind), ob (indirect question), deshalb (result), sollten (recommendation), trotzdem (contrast), könnten (suggestion).'
  },

  // ---------- Listening (Goethe-style) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_025_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frau Sander, wissen Sie, was für eine Prüfung mich erwartet?', en: 'Frau Sander, do you know what kind of exam is waiting for me?' },
      { id: 'A2_025_L002', speaker: 'Frau Sander', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es ist ein Test mit Hören, Lesen und Schreiben. Du solltest heute Abend noch einmal alles wiederholen.', en: 'It\'s a test with listening, reading, and writing. You should review everything again tonight.' },
      { id: 'A2_025_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich bin trotzdem sehr nervös.', en: 'I\'m nervous anyway.' },
      { id: 'A2_025_L004', speaker: 'Frau Sander', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das ist normal, deshalb üben wir jetzt gemeinsam noch fünf Minuten.', en: 'That\'s normal, so let\'s practice together for five more minutes now.' }
    ],
    transcript: 'Frau Sander, wissen Sie, was für eine Prüfung mich erwartet? Es ist ein Test mit Hören, Lesen und Schreiben. Du solltest heute Abend noch einmal alles wiederholen. Ich bin trotzdem sehr nervös. Das ist normal, deshalb üben wir jetzt gemeinsam noch fünf Minuten.',
    translation: 'Frau Sander, do you know what kind of exam is waiting for me? It\'s a test with listening, reading, and writing. You should review everything again tonight. I\'m nervous anyway. That\'s normal, so let\'s practice together for five more minutes now.',
    tokens: [
      { w: 'Frau' },
      { w: 'Sander' },
      { w: ',', plain: true },
      { w: 'wissen' },
      { w: 'Sie' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'für' },
      { w: 'eine' },
      { w: 'Prüfung' },
      { w: 'mich' },
      { w: 'erwartet' },
      { w: '?', plain: true },
      { w: 'Es' },
      { w: 'ist' },
      { w: 'ein' },
      { w: 'Test' },
      { w: 'mit' },
      { w: 'Hören' },
      { w: ',', plain: true },
      { w: 'Lesen' },
      { w: 'und' },
      { w: 'Schreiben' },
      { w: '.', plain: true },
      { w: 'Du' },
      { w: 'solltest' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'alles' },
      { w: 'wiederholen' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'trotzdem' },
      { w: 'sehr' },
      { w: 'nervös' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'normal' },
      { w: ',', plain: true },
      { w: 'deshalb' },
      { w: 'üben' },
      { w: 'wir' },
      { w: 'jetzt' },
      { w: 'gemeinsam' },
      { w: 'noch' },
      { w: 'fünf' },
      { w: 'Minuten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Teile hat die Prüfung?', qEn: 'What parts does the exam have?', options: ['nur Hören', 'Hören, Lesen und Schreiben', 'nur Schreiben', 'Sprechen und Singen'], optionsEn: ['only listening', 'listening, reading and writing', 'only writing', 'speaking and singing'], answer: 1,
        explain: '"Es ist ein Test mit Hören, Lesen und Schreiben."' },
      { q: 'Was schlägt Frau Sander vor?', qEn: 'What does Frau Sander suggest they do?', options: ['nach Hause gehen', 'fünf Minuten gemeinsam üben', 'eine Pause machen', 'die Prüfung verschieben'], optionsEn: ['go home', 'practise together for five minutes', 'take a break', 'postpone the exam'], answer: 1,
        explain: '"… deshalb üben wir jetzt gemeinsam noch fünf Minuten."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor und sag, wie du dich auf die Prüfung vorbereitest.", taskEn: "Exam, Part 1: introduce yourself and say how you prepare for the exam.", de: "Ich heiße Lena. Ich lerne jeden Tag, weil ich die Abschlussprüfung machen will.", en: "My name is Lena. I study every day because I want to take the final exam." },
    { task: "Prüfung, Teil 1: Der Prüfer fragt, ob du nervös bist.", taskEn: "Exam, Part 1: the examiner asks whether you're nervous.", de: "Ich bin ein bisschen nervös, aber ich bin gut vorbereitet.", en: "I'm a little nervous, but I'm well prepared." },
    { task: "Prüfung, Teil 2: Beschreibe ein Bild — eine Beratung im Betrieb.", taskEn: "Exam, Part 2: describe a picture — an advice session at a company.", de: "Auf dem Bild berät der Kursleiter eine Frau. Er zeigt ihr ein Dokument.", en: "In the picture the tutor is advising a woman. He's showing her a document." },
    { task: "Prüfung, Teil 3: Deine Partnerin will sich bewerben. Gib ihr einen Ratschlag.", taskEn: "Exam, Part 3: your partner wants to apply. Give her advice.", de: "Du solltest die Frist einhalten und die Dokumente früher schicken.", en: "You should meet the deadline and send the documents earlier." },
    { task: "Prüfung, Teil 3: Plant zusammen, wann ihr lernt.", taskEn: "Exam, Part 3: plan together when you'll study.", de: "Wir könnten am Samstag lernen. Ist das realistisch für dich?", en: "We could study on Saturday. Is that realistic for you?" },
    { task: "Prüfung, Teil 3: Frag deine Partnerin nach dem Stipendium.", taskEn: "Exam, Part 3: ask your partner about the scholarship.", de: "Weißt du, ob man sich für das Stipendium noch bewerben kann?", en: "Do you know whether you can still apply for the scholarship?" }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe A2 writing. Choose ONE task and write ~40 words, using at least three grammar points from Chapters 19–24 (indirect question, was für ein(e), Dativ/Akkusativ verb, könnte, sollte, deshalb/trotzdem). (1) EMAIL: ask the language school whether the exam date changed and what kind of examiner you\'ll get. (2) ADVICE: write to a friend about how they should prepare for their exam. (3) REQUEST: politely ask a classmate to lend you their notes.',
    starters: ['Sehr geehrte/r …,', 'Liebe/r …,', 'Könntest du …?', 'Du solltest …', 'Weißt du, ob …?'],
    placeholder: 'Sehr geehrte Frau Weber, wissen Sie, ob die Prüfung verschoben wurde? …',
    minWords: 40
  },

  // ---------- Exercises (4 types, mixed Ch.19–24) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Weißt du, wo ist der Prüfer?', 'Weißt du, wo der Prüfer ist?', 'Weißt du wo der Prüfer ist.'],
      answer: 1,
      explain: 'No inversion after the question word; the verb (ist) goes to the end: wo der Prüfer ist.'
    },
    gap: {
      sentence: ['Es regnet. ', ' bleiben wir zu Hause.'],
      gaps: [ { answer: 'Deshalb', accepts: ['Deshalb'] } ],
      explain: 'Rain leading to staying home is an expected result — deshalb, with the verb (bleiben) right after.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Weißt du, ob …', art: 'indirect yes/no question' },
        { noun: 'Was für ein(e) …', art: 'asking about type/kind' },
        { noun: 'Ich gebe ihm …', art: 'Dativ before Akkusativ' },
        { noun: 'Könntest du …?', art: 'polite request' },
        { noun: 'Du solltest …', art: 'advice' }
      ]
    },
    builder: {
      target: 'Build: "It\'s raining. Nevertheless we go for a walk."',
      bank: ['Es', 'regnet', '.', 'Trotzdem', 'gehen', 'wir', 'spazieren', '.'],
      answer: ['Es', 'regnet', '.', 'Trotzdem', 'gehen', 'wir', 'spazieren', '.'],
      roles: { 'Es': 'r-subject', 'regnet': 'r-verb', 'Trotzdem': 'r-conjunction', 'gehen': 'r-verb', 'wir': 'r-subject' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Ich weiß nicht, ___ die Prüfung heute ist." (yes/no question)', options: ['wenn', 'ob', 'dass', 'weil'], answer: 1,
      explain: 'A plain yes/no question uses ob.' },
    { q: 'Complete: "Was für ___ Prüfer habt ihr?" (masc., Akk.)', options: ['ein', 'eine', 'einen'], answer: 2,
      explain: 'Prüfer is masculine and here it\'s Akkusativ — was für einen Prüfer.' },
    { q: 'Complete: "Ich gebe ___ das Buch." (Dativ pronoun)', options: ['er', 'ihm', 'ihn'], answer: 1,
      explain: 'The receiver takes the Dativ pronoun: ihm.' },
    { q: 'Which is the polite form for "du"?', options: ['kannst', 'könntest', 'kann'], answer: 1,
      explain: 'könntest is the Konjunktiv II form for du — a polite request.' },
    { q: 'Which sentence gives advice, not an order?', options: ['Du sollst mehr üben.', 'Du solltest mehr üben.', 'Du musst mehr üben.'], answer: 1,
      explain: 'solltest softens the idea into advice.' },
    { q: 'Complete: "Es regnet. ___ gehen wir trotzdem spazieren."', options: ['Deshalb', 'Weil', '(nothing needed)'], answer: 2,
      explain: '"Trotzdem" is already the connector in this sentence — no second connector is needed before it.' }
  ],

  // ---------- Summary / readiness ----------
  takeaways: [
    { c: 'r-frage', html: 'Chapters 19–24 in one place: <span class="de r-frage">indirect questions</span> (W-word/ob, verb-final), <span class="de r-frage">was für ein(e)</span> vs. welcher, two-object verbs (Dativ before Akkusativ with nouns, reversed with pronouns).' },
    { c: 'r-modalverb', html: '<span class="de r-modalverb">könnte</span> softens requests/suggestions/possibility; <span class="de r-modalverb">sollte</span> softens advice/recommendations — neither ever stacks a second modal.' },
    { c: 'r-conjunction', html: '<span class="de r-conjunction">deshalb</span> (result) and <span class="de r-conjunction">trotzdem</span> (contrast) both push the verb into position two, right after the connector.' }
  ],
  revisionTips: [
    'Weak on word order after deshalb/trotzdem? Redo Ch.24 and recheck the verb-second rule.',
    'Mixing was für ein(e) and welcher? Redo Ch.20 — kind vs. one specific item.',
    'Shaky on Dativ/Akkusativ order? Redo Ch.21 — nouns vs. pronouns flip the order.',
    'Unsure about könnte vs. sollte? Redo Ch.22–23 side by side.'
  ]
};

window.CHAPTER = CHAPTER;
