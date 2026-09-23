/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 7
   "Präteritum (Alltag & Erzählen)" — the simple past for
   narration. Teaches ONLY: sein/haben in the Präteritum, modal
   verbs in the Präteritum (very common instead of Perfekt), and
   the most useful B1 irregular Präteritum verbs (ging, kam,
   fand, gab, wusste, dachte, brachte, stand, lag, sah, wurde).
   Deliberately does NOT introduce Plusquamperfekt, Präteritum
   Passiv, Konjunktiv II Präteritum, or other B2 narrative
   structures.
   Vocabulary source: uploaded chapter-07 list (173 items — a
   life-stories/biography theme: Olympiasieger, Wildhüter, Alm,
   Krise, Trennung, Sehnsucht, Namibia, …) — woven into short
   biography-style narration in the Präteritum throughout.
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations}
   where natural — one full example per word (per this
   chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-7-praeteritum',
  phase: 'B1 · Phase 1',
  number: 7,
  title: 'Präteritum',
  titleEn: 'The simple past (Präteritum)',
  description: 'Ich war gestern krank. Wir hatten viel Arbeit. Er ging nach Hause. This chapter adds the Präteritum — the tense of stories, newspapers, and formal writing — alongside the Perfekt you already use in speech. Same past, different register: sein and haben, the modal verbs, and the most common irregular verbs.',
  xp: 240,
  time: 45,
  difficulty: 'Intermediate',
  nextChapter: { number: 8, title: 'Zeitangaben: Dativ & Genitiv', titleEn: 'Time expressions: Dativ & Genitiv' , href: 'chapter-b1-8-zeitangaben-dativ-genitiv.html' },

  prevChapter: { number: 6, title: 'Goethe Mini 1', titleEn: 'Goethe Checkpoint 1 — First B1 Readiness', href: 'chapter-b1-6-goethe-mini-1.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Almut tells Timo about the summer she worked at a mountain hut — calm, beautiful, arriving in June — and every memory reaches for the Präteritum, the tense of stories and biographies.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear sein, haben, the modal verbs, and common irregular verbs all in the Präteritum'
    ],
    scene: 'Erinnerungen an früher',
    femaleSpeakers: ['Almut'],
    dialogue: [
      { speaker: 'Almut', tokens: [
        { w: 'Letzten', role: 'r-akkusativ', en: 'last', hi: 'पिछली', pron: 'LETS-ten', type: 'Adjective' },
        { w: 'Sommer', role: 'r-akkusativ', en: 'summer', hi: 'गर्मी', pron: 'ZO-mer', type: 'Noun · masc.' },
        { w: 'arbeitete', role: 'r-verb', en: 'worked', hi: 'काम किया', pron: 'AR-by-te-tuh', type: 'Verb · arbeiten (Präteritum)', why: 'Präteritum: weak verbs add -te (this chapter).', ex: 'Ich arbeitete auf der Alm.', exEn: 'I worked at the mountain hut.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auf', role: 'r-preposition', en: 'at the', hi: 'पर', pron: 'owf', type: 'Preposition + place' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Alm', role: 'r-dativ', en: 'mountain hut (dat.)', hi: 'पर्वतीय झोंपड़ी', pron: 'alm', type: 'Noun · fem. dat.', why: 'die Alm (this chapter).', ex: 'Ich war auf der Alm.', exEn: 'I was at the mountain hut.' },
        { w: '.', plain: true }
      ], en: 'Last summer I worked at the mountain hut.', hi: 'Pichli garmi mein maine pahaadi jhopdi mein kaam kiya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'How was it there?', hi: 'Wahaan kaisa tha?' },
      { speaker: 'Almut', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'ruhig', role: 'r-adjective', en: 'calm', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'schön', role: 'r-adjective', en: 'beautiful', hi: 'ख़ूबसूरत', pron: 'shern', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Präteritum)' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot of', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद के', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: '.', plain: true }
      ], en: 'It was calm and beautiful. I had a lot of time for myself.', hi: 'Yeh shaant aur khoobsurat tha. Mere paas apne liye bahut samay tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'kamst', role: 'r-verb', en: 'did you come', hi: 'आयी', pron: 'KAHMST', type: 'Verb · kommen (Präteritum, du)', lexicalUnit: 'ankommen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'an', role: 'r-verb', en: '(prefix of ankommen)', hi: 'पहुंची', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'ankommen' },
        { w: '?', plain: true }
      ], en: 'When did you arrive there?', hi: 'Tum wahaan kab pahunchi?' },
      { speaker: 'Almut', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kam', role: 'r-verb', en: 'came', hi: 'आयी', pron: 'kahm', type: 'Verb · kommen (Präteritum)', lexicalUnit: 'ankommen' },
        { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition + time' },
        { w: 'Juni', role: 'r-dativ', en: 'June', hi: 'जून', pron: 'YOO-nee', type: 'Noun · month' },
        { w: 'an', role: 'r-verb', en: '(prefix of ankommen)', hi: 'पहुंची', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'ankommen' },
        { w: '.', plain: true },
        { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Anfang', role: 'r-dativ', en: 'beginning (dat.)', hi: 'शुरुआत में', pron: 'AN-fang', type: 'Noun · masc. dat.' },
        { w: 'ging', role: 'r-verb', en: 'went', hi: 'गया', pron: 'ginkt', type: 'Verb · gehen (Präteritum)' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'langsam', role: 'r-subject', en: 'slow', hi: 'धीरे', pron: 'LANG-zahm', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I arrived in June. In the beginning, everything went very slowly.', hi: 'Main June mein pahunchi. Shuru mein, sab kuch bahut dheere hua.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sahst', role: 'r-verb', en: 'did you see', hi: 'देखी', pron: 'ZAHST', type: 'Verb · sehen (Präteritum, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Tiere', role: 'r-akkusativ', en: 'animals', hi: 'जानवर', pron: 'TEE-ruh', type: 'Noun · plural' },
        { w: '?', plain: true }
      ], en: 'Did you also see animals?', hi: 'Kya tumne janwar bhi dekhe?' },
      { speaker: 'Almut', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sah', role: 'r-verb', en: 'saw', hi: 'देखी', pron: 'zah', type: 'Verb · sehen (Präteritum)' },
        { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: 'Kühe', role: 'r-akkusativ', en: 'cows', hi: 'गायें', pron: 'KÜ-uh', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Manchmal', role: 'r-adverb', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb' },
        { w: 'fuhr', role: 'r-verb', en: 'went', hi: 'जाती थी', pron: 'foor', type: 'Verb · fahren (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Dorf', role: 'r-akkusativ', en: 'village', hi: 'गांव', pron: 'dorf', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes, I often saw cows. Sometimes I went to the village.', hi: 'Haan, maine aksar gaayein dekhein. Kabhi-kabhi main gaon jaati thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'wunderbar', role: 'r-adjective', en: 'wonderful', hi: 'अद्भुत', pron: 'vun-der-BAHR', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Bliebst', role: 'r-verb', en: 'did you stay', hi: 'रही', pron: 'BLEEPST', type: 'Verb · bleiben (Präteritum, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'पूरी', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'ganzen', role: 'r-akkusativ', en: 'whole', hi: 'पूरी', pron: 'GAN-tsen', type: 'Adjective' },
        { w: 'Sommer', role: 'r-akkusativ', en: 'summer', hi: 'गर्मी', pron: 'ZO-mer', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'That sounds wonderful! Did you stay the whole summer?', hi: 'Yeh adbhut lagta hai! Kya tum poori garmi wahaan rahi?' },
      { speaker: 'Almut', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'September', role: 'r-akkusativ', en: 'September', hi: 'सितंबर', pron: 'sep-TEM-ber', type: 'Noun · month' },
        { w: '.', plain: true },
        { w: 'Danach', role: 'r-adverb', en: 'afterward', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'kam', role: 'r-verb', en: 'came', hi: 'आयी', pron: 'kahm', type: 'Verb · kommen (Präteritum)', lexicalUnit: 'zurückkommen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nach', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'nahkh', type: 'Preposition + place' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'zurück', role: 'r-verb', en: 'back', hi: 'वापस', pron: 'tsu-RÜK', type: 'Separable prefix · Satzende', lexicalUnit: 'zurückkommen' },
        { w: '.', plain: true }
      ], en: 'Yes, until September. Afterward I came back home.', hi: 'Haan, September tak. Uske baad main ghar wapas aayi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The Präteritum is the same past as the Perfekt you already know — but with a different register. <b>Spoken German</b> reaches for the Perfekt: <span class="de">Ich bin nach Hause gegangen.</span> <b>Written German</b> — stories, newspapers, biographies — reaches for the Präteritum: <span class="de">Ich ging nach Hause.</span> Two exceptions apply everywhere, spoken or written: <span class="de r-verb">sein</span> (war) and <span class="de r-verb">haben</span> (hatte) almost always appear in the Präteritum, even in conversation — and so do the modal verbs (konnte, musste, wollte…).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PRÄTERITUM (B1 level only): the simple past for narration, alongside the Perfekt already known. Focus: sein (war/warst/war/waren/wart/waren), haben (hatte/hattest/hatte/hatten/hattet/hatten), the modal verbs in the Präteritum (konnte, musste, durfte, wollte, sollte), and common irregular verbs (ging, kam, fand, gab, wusste, dachte, brachte, stand, lag, sah, wurde). ' +
    'Do NOT expect or require Plusquamperfekt, Präteritum Passiv, Konjunktiv II Präteritum, or other B2 narrative structures — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- sein/haben and modal verbs almost always appear in the Präteritum, even in otherwise spoken/Perfekt-heavy text — this is normal and correct, not an error to flag.\n' +
    '- Never combine the Perfekt auxiliary with a Präteritum-marked verb in the same clause: "Ich war gegangen" (mixing war + Partizip II) is wrong for simple past narration — it should be either "Ich bin gegangen" (Perfekt) or "Ich ging" (Präteritum), not a blend.\n' +
    '- "Ich hatte gegangen" is wrong — haben is not the auxiliary for gehen (which uses sein); and mixing hatte with a Partizip II like this is a Plusquamperfekt-looking error out of scope for this chapter — flag it as wrong tense mixing.\n' +
    '- Never double-mark the past: "Ich ging nach Hause gegangen" (Präteritum verb + Partizip II together) is wrong — pick ONE past form per clause.\n' +
    '- Modal verbs in the Präteritum take a plain infinitive, never a Partizip II: "Ich konnte gegangen" is wrong; "Ich konnte gehen" is correct.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether Präteritum vs. Perfekt was used appropriately for the text type (story/formal writing vs. spoken account).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you move fluently between Perfekt and Präteritum, and your irregular verb forms are solid. Move on to <span class="de">Zeitangaben: Dativ & Genitiv</span>.',
    mid: 'Good. Re-read the sein/haben/modal-verb conjugation tables once — those four are used constantly — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the irregular verb list), then retake.'
  },

  parserSentence: [
    { w: 'Er', role: 'r-subject' }, { w: 'ging', role: 'r-verb' },
    { w: 'nach', role: 'plain' }, { w: 'Hause', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: same past, different register — Perfekt for speech, Präteritum for writing.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends swap childhood memories and biographies, told in the Präteritum.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 173 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master sein, haben, the modal verbs, and common irregular verbs in the Präteritum.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style biography written mainly in the Präteritum.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Präteritum forms in narrated speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Narrate childhood memories and past events using both Perfekt and Präteritum.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a diary entry or biography using the Präteritum.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Perfekt→Präteritum transformation and irregular verb forms.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 240 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 173 chapter words — Olympiasieger, Wildhüter, Alm, Krise, Trennung, Sehnsucht, Namibia — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '22 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Perfekt→Präteritum transformation drills, irregular-verb practice, error correction, and a biography-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Präteritum reference — sein/haben/modal conjugation tables, common irregular verbs, Perfekt vs. Präteritum, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich war gestern krank.', text: 'Conjugate sein in the Präteritum' },
    { de: 'Wir hatten viel Arbeit.', text: 'Conjugate haben in the Präteritum' },
    { de: 'Ich konnte nicht kommen.', text: 'Use modal verbs in the Präteritum' },
    { de: 'Er ging nach Hause.', text: 'Use common irregular Präteritum verbs' },
    { de: 'Perfekt vs. Präteritum', text: 'Choose the right register for speech vs. writing' }
  ],

  // ---------- Vocabulary (173 items — full chapter-07 upload list) ----------
  vocab: [
    { de: 'Behandlung', art: 'die', gender: 'f', plural: 'Behandlungen', pos: 'noun', level: 'B1', en: 'treatment', hi: 'उपचार', ex: 'Die Behandlung dauerte mehrere Wochen.', exEn: 'The treatment lasted several weeks.', exHi: 'Upchaar kai hafton tak chala.' },
    { de: 'Schulbildung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'education', hi: 'शिक्षा', ex: 'Seine Schulbildung war sehr einfach.', exEn: 'His education was very basic.', exHi: 'Uski shiksha bahut saral thi.' },
    { de: 'politisch', pos: 'adjective', level: 'B1', en: 'political', hi: 'राजनीतिक', ex: 'Die Lage war damals sehr politisch.', exEn: 'The situation was very political back then.', exHi: 'Us samay sthiti bahut rajnitik thi.' },
    { de: 'von … auf', pos: 'idiom', level: 'B1', en: 'from one … to the next', hi: 'एक से दूसरे तक', ex: 'Von einem Tag auf den anderen änderte sich alles.', exEn: 'From one day to the next, everything changed.', exHi: 'Ek din se doosre din tak, sab kuch badal gaya.' },
    { de: 'wesentlich', pos: 'adjective', level: 'B1', en: 'considerable', hi: 'महत्वपूर्ण', ex: 'Das war eine wesentliche Verbesserung.', exEn: 'That was a considerable improvement.', exHi: 'Yeh ek mahatvapurn sudhaar tha.' },
    { de: '-fach', pos: 'suffix', level: 'B1', en: '-fold (zehnfach: tenfold)', hi: '-गुना', ex: 'Der Preis stieg zehnfach.', exEn: 'The price rose tenfold.', exHi: 'Keemat das guna badh gayi.' },
    { de: 'abwärts', pos: 'adverb', level: 'B1', en: 'downwards', hi: 'नीचे की ओर', ex: 'Der Weg führte steil abwärts.', exEn: 'The path led steeply downwards.', exHi: 'Raasta seedhe neeche ki taraf jaata tha.' },
    { de: 'aufgeben', pos: 'verb', level: 'B1', en: 'to forsake, give up', hi: 'छोड़ देना', ex: 'Er gab seinen alten Beruf auf.', exEn: 'He gave up his old profession.', exHi: 'Usne apna purana pesha chhod diya.', conj: { praesens: 'gibt auf', praeteritum: 'gab auf', perfekt: 'hat aufgegeben' } },
    { de: 'aufwachen', pos: 'verb', level: 'B1', en: 'to wake up', hi: 'जागना', ex: 'Sie wachte jeden Morgen früh auf.', exEn: 'She woke up early every morning.', exHi: 'Woh har subah jaldi jaagti thi.', conj: { praesens: 'wacht auf', praeteritum: 'wachte auf', perfekt: 'ist aufgewacht' } },
    { de: 'außerhalb', pos: 'preposition', level: 'B1', en: 'outside (+ Genitiv)', hi: 'बाहर', ex: 'Er lebte außerhalb der Stadt.', exEn: 'He lived outside the city.', exHi: 'Woh shahar ke bahar rehta tha.' },
    { de: 'begeistern', pos: 'verb', level: 'B1', en: 'to delight, inspire', hi: 'प्रेरित करना', ex: 'Die Geschichte begeisterte alle Zuhörer.', exEn: 'The story delighted all the listeners.', exHi: 'Kahani ne saare sunne walon ko prerit kiya.', conj: { praesens: 'begeistert', praeteritum: 'begeisterte', perfekt: 'hat begeistert' } },
    { de: 'begeistert', pos: 'adjective', level: 'B1', en: 'enthusiastic', hi: 'उत्साहित', ex: 'Sie war begeistert von dem Vortrag.', exEn: 'She was enthusiastic about the talk.', exHi: 'Woh bhashan se utsahit thi.' },
    { de: 'beinahe', pos: 'adverb', level: 'B1', en: 'almost', hi: 'लगभग', ex: 'Er wäre beinahe gestürzt.', exEn: 'He almost fell.', exHi: 'Woh lagbhag gir gaya tha.' },
    { de: 'Verhältnis', art: 'das', gender: 'n', plural: 'Verhältnisse', pos: 'noun', level: 'B1', en: 'relationship', hi: 'रिश्ता', ex: 'Ihr Verhältnis war immer sehr eng.', exEn: 'Their relationship was always very close.', exHi: 'Unka rishta hamesha bahut kareebi tha.' },
    { de: 'Optimismus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'optimism', hi: 'आशावाद', ex: 'Ihr Optimismus half ihr in schweren Zeiten.', exEn: 'Her optimism helped her in hard times.', exHi: 'Uske aashaavad ne use mushkil samay mein madad ki.' },
    { de: 'Bedingung', art: 'die', gender: 'f', plural: 'Bedingungen', pos: 'noun', level: 'B1', en: 'condition', hi: 'शर्त', ex: 'Die Bedingungen waren nicht einfach.', exEn: 'The conditions weren\'t easy.', exHi: 'Sthitiyaan aasaan nahi thi.' },
    { de: 'Botschaft', art: 'die', gender: 'f', plural: 'Botschaften', pos: 'noun', level: 'B1', en: 'embassy', hi: 'दूतावास', ex: 'Er arbeitete früher in der Botschaft.', exEn: 'He used to work at the embassy.', exHi: 'Woh pehle dootavaas mein kaam karta tha.' },
    { de: 'Einsamkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'solitude', hi: 'अकेलापन', ex: 'Auf der Alm spürte er oft die Einsamkeit.', exEn: 'On the alp, he often felt the solitude.', exHi: 'Alm par, use aksar akelapan mehsoos hota tha.' },
    { de: 'Herausforderung', art: 'die', gender: 'f', plural: 'Herausforderungen', pos: 'noun', level: 'B1', en: 'challenge', hi: 'चुनौती', ex: 'Das neue Leben war eine große Herausforderung.', exEn: 'The new life was a big challenge.', exHi: 'Naya jeevan ek badi chunauti thi.' },
    { de: 'Krisensituation', art: 'die', gender: 'f', plural: 'Krisensituationen', pos: 'noun', level: 'B1', en: 'crisis situation', hi: 'संकट की स्थिति', ex: 'In der Krisensituation blieb sie ruhig.', exEn: 'In the crisis situation, she stayed calm.', exHi: 'Sankat ki sthiti mein, woh shaant rahi.' },
    { de: 'Neuigkeit', art: 'die', gender: 'f', plural: 'Neuigkeiten', pos: 'noun', level: 'B1', en: 'news', hi: 'ख़बर', ex: 'Er brachte uns eine wichtige Neuigkeit.', exEn: 'He brought us an important piece of news.', exHi: 'Woh humare liye ek zaroori khabar laya.' },
    { de: 'Selbstständigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'independence', hi: 'स्वतंत्रता', ex: 'Ihre Selbstständigkeit wuchs mit den Jahren.', exEn: 'Her independence grew over the years.', exHi: 'Uski svatantrata saalon ke saath badhti gayi.' },
    { de: 'Trennung', art: 'die', gender: 'f', plural: 'Trennungen', pos: 'noun', level: 'B1', en: 'separation', hi: 'अलगाव', ex: 'Die Trennung war für beide schwer.', exEn: 'The separation was hard for both of them.', exHi: 'Alagaav dono ke liye mushkil tha.' },
    { de: 'Wildtierstation', art: 'die', gender: 'f', plural: 'Wildtierstationen', pos: 'noun', level: 'B1', en: 'wild animal care facility', hi: 'वन्यजीव देखभाल केंद्र', ex: 'Er arbeitete jahrelang in der Wildtierstation.', exEn: 'He worked for years at the wild animal care facility.', exHi: 'Woh kai saalon tak vanyajeev dekhbhal kendra mein kaam karta tha.' },
    { de: 'Zuneigung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'affection', hi: 'स्नेह', ex: 'Sie zeigte ihm viel Zuneigung.', exEn: 'She showed him a lot of affection.', exHi: 'Usne use bahut sneh dikhaya.' },
    { de: 'eher', pos: 'adverb', level: 'B1', en: 'rather', hi: 'बल्कि', ex: 'Er war eher schüchtern als mutig.', exEn: 'He was rather shy than brave.', exHi: 'Woh bahaadur se zyada sharmeela tha.' },
    { de: 'ehren', pos: 'verb', level: 'B1', en: 'to honour', hi: 'सम्मान करना', ex: 'Die Stadt ehrte den Weltmeister.', exEn: 'The city honoured the world champion.', exHi: 'Shahar ne vishwa champion ka samman kiya.', conj: { praesens: 'ehrt', praeteritum: 'ehrte', perfekt: 'hat geehrt' } },
    { de: 'engagiert sein', pos: 'verb', level: 'B1', en: 'to be involved in', hi: 'सक्रिय रूप से शामिल होना', ex: 'Sie war schon immer politisch engagiert.', exEn: 'She had always been politically involved.', exHi: 'Woh hamesha se rajnitik roop se sakriya thi.' },
    { de: 'erben', pos: 'verb', level: 'B1', en: 'to inherit', hi: 'विरासत में पाना', ex: 'Er erbte den Hof von seinem Vater.', exEn: 'He inherited the farm from his father.', exHi: 'Usne apne pita se khet virasat mein paaya.', conj: { praesens: 'erbt', praeteritum: 'erbte', perfekt: 'hat geerbt' } },
    { de: 'erholt', pos: 'adjective', level: 'B1', en: 'relaxed, recovered', hi: 'तरोताज़ा', ex: 'Nach dem Urlaub fühlte er sich erholt.', exEn: 'After the holiday, he felt recovered.', exHi: 'Chutti ke baad, use tarotaza mehsoos hua.' },
    { de: 'erstellen', pos: 'verb', level: 'B1', en: 'to create', hi: 'तैयार करना', ex: 'Sie erstellte einen genauen Plan.', exEn: 'She created a precise plan.', exHi: 'Usne ek sateek yojana banayi.', conj: { praesens: 'erstellt', praeteritum: 'erstellte', perfekt: 'hat erstellt' } },
    { de: 'falls', pos: 'conjunction', level: 'B1', en: 'in case', hi: 'अगर, स्थिति में', ex: 'Falls es regnete, blieben wir zu Hause.', exEn: 'In case it rained, we stayed home.', exHi: 'Agar barish hoti, to hum ghar par rehte.' },
    { de: 'frisch', pos: 'adjective', level: 'B1', en: 'new, fresh (frisch verliebt: newly in love)', hi: 'ताज़ा', ex: 'Sie waren damals frisch verliebt.', exEn: 'They were newly in love back then.', exHi: 'Woh us samay abhi-abhi pyaar mein pade the.' },
    { de: 'führen', pos: 'verb', level: 'B1', en: 'to lead (to + Dat.)', hi: 'ले जाना (की ओर)', ex: 'Der Weg führte zu einer alten Hütte.', exEn: 'The path led to an old hut.', exHi: 'Raasta ek purani jhopdi ki taraf le jaata tha.', conj: { praesens: 'führt', praeteritum: 'führte', perfekt: 'hat geführt' } },
    { de: 'gegen', pos: 'preposition', level: 'B1', en: 'around (time)', hi: 'लगभग (समय)', ex: 'Er kam gegen acht Uhr an.', exEn: 'He arrived around eight o\'clock.', exHi: 'Woh lagbhag aath baje pahuncha.' },
    { de: 'gelähmt', pos: 'adjective', level: 'B1', en: 'paralyzed', hi: 'लकवाग्रस्त', ex: 'Nach dem Unfall war sein Bein gelähmt.', exEn: 'After the accident, his leg was paralyzed.', exHi: 'Durghatna ke baad, uska pair lakvagrast ho gaya.' },
    { de: 'gemacht sein (für)', pos: 'idiom', level: 'B1', en: 'to be made for', hi: 'के लिए बना होना', ex: 'Er war für dieses Leben gemacht.', exEn: 'He was made for this life.', exHi: 'Woh is jeevan ke liye bana tha.' },
    { de: 'gewohnt', pos: 'adjective', level: 'B1', en: 'usual', hi: 'सामान्य', ex: 'Das war für ihn nicht der gewohnte Tag.', exEn: 'That wasn\'t his usual day.', exHi: 'Yeh uske liye aam din nahi tha.' },
    { de: 'heimfahren', pos: 'verb', level: 'B1', en: 'to go home', hi: 'घर वापस जाना', ex: 'Sie fuhr nach der Arbeit sofort heim.', exEn: 'She went home immediately after work.', exHi: 'Woh kaam ke baad turant ghar chali gayi.', conj: { praesens: 'fährt heim', praeteritum: 'fuhr heim', perfekt: 'ist heimgefahren' } },
    { de: 'hierher', pos: 'adverb', level: 'B1', en: 'here (to this place)', hi: 'यहाँ', ex: 'Er kam vor zehn Jahren hierher.', exEn: 'He came here ten years ago.', exHi: 'Woh das saal pehle yahan aaya tha.' },
    { de: 'historisch', pos: 'adjective', level: 'B1', en: 'historical', hi: 'ऐतिहासिक', ex: 'Das war ein historisches Ereignis.', exEn: 'That was a historical event.', exHi: 'Yeh ek aitihaasik ghatna thi.' },
    { de: 'innerhalb', pos: 'preposition', level: 'B1', en: 'within (+ Genitiv)', hi: 'भीतर', ex: 'Innerhalb eines Jahres änderte sich alles.', exEn: 'Within a year, everything changed.', exHi: 'Ek saal ke bheetar, sab kuch badal gaya.' },
    { de: 'jahrelang', pos: 'adverb', level: 'B1', en: 'for years', hi: 'सालों तक', ex: 'Er lebte jahrelang auf der Alm.', exEn: 'He lived on the alp for years.', exHi: 'Woh saalon tak alm par raha.' },
    { de: 'jetzig', pos: 'adjective', level: 'B1', en: 'current', hi: 'वर्तमान', ex: 'Ihre jetzige Arbeit gefällt ihr sehr.', exEn: 'She likes her current job a lot.', exHi: 'Use apna vartaman kaam bahut pasand hai.' },
    { de: 'kämpfen', pos: 'verb', level: 'B1', en: 'to fight (für/gegen + Akk.)', hi: 'लड़ना', ex: 'Sie kämpfte jahrelang für ihre Rechte.', exEn: 'She fought for her rights for years.', exHi: 'Woh saalon tak apne adhikaron ke liye ladti rahi.', conj: { praesens: 'kämpft', praeteritum: 'kämpfte', perfekt: 'hat gekämpft' } },
    { de: 'lieb haben', pos: 'idiom', level: 'B1', en: 'to love', hi: 'प्यार करना', ex: 'Sie hatte ihre Großmutter sehr lieb.', exEn: 'She loved her grandmother very much.', exHi: 'Woh apni dadi se bahut pyaar karti thi.' },
    { de: 'literarisch', pos: 'adjective', level: 'B1', en: 'literary', hi: 'साहित्यिक', ex: 'Sein literarisches Werk war beeindruckend.', exEn: 'His literary work was impressive.', exHi: 'Uska sahityik kaam prabhavshaali tha.' },
    { de: 'lokal', pos: 'adjective', level: 'B1', en: 'local', hi: 'स्थानीय', ex: 'Sie arbeitete für eine lokale Zeitung.', exEn: 'She worked for a local newspaper.', exHi: 'Woh ek sthaniya akhbaar ke liye kaam karti thi.' },
    { de: 'medizinisch', pos: 'adjective', level: 'B1', en: 'medical', hi: 'चिकित्सा संबंधी', ex: 'Er brauchte medizinische Hilfe.', exEn: 'He needed medical help.', exHi: 'Use chikitsa sahayata ki zaroorat thi.' },
    { de: 'minimal', pos: 'adjective', level: 'B1', en: 'minimal', hi: 'न्यूनतम', ex: 'Der Unterschied war nur minimal.', exEn: 'The difference was only minimal.', exHi: 'Fark keval bahut kam tha.' },
    { de: 'mitarbeiten', pos: 'verb', level: 'B1', en: 'to assist', hi: 'सहयोग करना', ex: 'Er arbeitete oft im Projekt mit.', exEn: 'He often assisted with the project.', exHi: 'Woh aksar project mein sahyog karta tha.', conj: { praesens: 'arbeitet mit', praeteritum: 'arbeitete mit', perfekt: 'hat mitgearbeitet' } },
    { de: 'mittlerweile', pos: 'adverb', level: 'B1', en: 'meanwhile', hi: 'इस बीच', ex: 'Mittlerweile hatte sich vieles verändert.', exEn: 'Meanwhile, much had changed.', exHi: 'Is beech, bahut kuch badal gaya tha.' },
    { de: 'momentan', pos: 'adverb', level: 'B1', en: 'at the moment', hi: 'फ़िलहाल', ex: 'Momentan war sie sehr beschäftigt.', exEn: 'At the moment, she was very busy.', exHi: 'Filhaal, woh bahut vyast thi.' },
    { de: 'monoton', pos: 'adjective', level: 'B1', en: 'monotonous', hi: 'नीरस', ex: 'Der Alltag wurde ihm oft monoton.', exEn: 'Daily life often became monotonous for him.', exHi: 'Roz-marra ki zindagi use aksar neeras lagti thi.' },
    { de: 'niemals', pos: 'adverb', level: 'B1', en: 'never', hi: 'कभी नहीं', ex: 'Er verließ die Alm niemals im Winter.', exEn: 'He never left the alp in winter.', exHi: 'Woh sardiyon mein alm ko kabhi nahi chhodta tha.' },
    { de: 'operieren', pos: 'verb', level: 'B1', en: 'to operate', hi: 'ऑपरेशन करना', ex: 'Die Ärzte operierten ihn sofort.', exEn: 'The doctors operated on him immediately.', exHi: 'Doctoron ne turant uska operation kiya.', conj: { praesens: 'operiert', praeteritum: 'operierte', perfekt: 'hat operiert' } },
    { de: 'radikal', pos: 'adjective', level: 'B1', en: 'radical', hi: 'कट्टरपंथी', ex: 'Das war eine radikale Entscheidung.', exEn: 'That was a radical decision.', exHi: 'Yeh ek kattarpanthi faisla tha.' },
    { de: 'relativ', pos: 'adjective', level: 'B1', en: 'relative', hi: 'सापेक्ष', ex: 'Ihr Leben war relativ ruhig.', exEn: 'Her life was relatively calm.', exHi: 'Uska jeevan sapeksh roop se shaant tha.' },
    { de: 'sammeln', pos: 'verb', level: 'B1', en: 'to gain (Erfahrung sammeln: gain experience)', hi: 'इकट्ठा करना (अनुभव प्राप्त करना)', ex: 'Er sammelte viel Erfahrung im Ausland.', exEn: 'He gained a lot of experience abroad.', exHi: 'Usne videsh mein bahut anubhav praapt kiya.', conj: { praesens: 'sammelt', praeteritum: 'sammelte', perfekt: 'hat gesammelt' } },
    { de: 'schließlich', pos: 'adverb', level: 'B1', en: 'finally, eventually', hi: 'आख़िरकार', ex: 'Schließlich fand sie ihren Traumjob.', exEn: 'Eventually she found her dream job.', exHi: 'Aakhirkar use apna sapno ka kaam mil gaya.' },
    { de: 'schwach', pos: 'adjective', level: 'B1', en: 'weak', hi: 'कमज़ोर', ex: 'Nach der Krankheit fühlte er sich schwach.', exEn: 'After the illness, he felt weak.', exHi: 'Bimari ke baad, use kamzor mehsoos hua.' },
    { de: 'seitdem', pos: 'adverb', level: 'B1', en: 'since then', hi: 'तब से', ex: 'Seitdem lebte sie glücklich auf dem Land.', exEn: 'Since then, she has lived happily in the countryside.', exHi: 'Tab se, woh gaon mein khushi se rehti hai.' },
    { de: 'sich ereignen', pos: 'verb', level: 'B1', en: 'to happen', hi: 'घटित होना', ex: 'Der Unfall ereignete sich am Morgen.', exEn: 'The accident happened in the morning.', exHi: 'Durghatna subah ghatit hui.', conj: { praesens: 'ereignet sich', praeteritum: 'ereignete sich', perfekt: 'hat sich ereignet' } },
    { de: 'sich erkälten', pos: 'verb', level: 'B1', en: 'to have a cold', hi: 'सर्दी लगना', ex: 'Sie erkältete sich im Winter oft.', exEn: 'She often had a cold in winter.', exHi: 'Sardiyon mein use aksar sardi lag jaati thi.', conj: { praesens: 'erkältet sich', praeteritum: 'erkältete sich', perfekt: 'hat sich erkältet' } },
    { de: 'stürzen', pos: 'verb', level: 'B1', en: 'to fall', hi: 'गिरना', ex: 'Er stürzte auf dem eisigen Weg.', exEn: 'He fell on the icy path.', exHi: 'Woh barfeele raaste par gir gaya.', conj: { praesens: 'stürzt', praeteritum: 'stürzte', perfekt: 'ist gestürzt' } },
    { de: 'tolerant', pos: 'adjective', level: 'B1', en: 'tolerant', hi: 'सहिष्णु', ex: 'Die Familie war sehr tolerant.', exEn: 'The family was very tolerant.', exHi: 'Parivaar bahut sahishnu tha.' },
    { de: 'tätig sein', pos: 'idiom', level: 'B1', en: 'to take an active part', hi: 'सक्रिय भूमिका निभाना', ex: 'Er war jahrelang im Verein tätig.', exEn: 'He took an active part in the club for years.', exHi: 'Woh saalon tak club mein sakriya raha.' },
    { de: 'unverändert', pos: 'adjective', level: 'B1', en: 'unchanged', hi: 'अपरिवर्तित', ex: 'Das Haus blieb unverändert.', exEn: 'The house remained unchanged.', exHi: 'Ghar apariwartit raha.' },
    { de: 'verschwinden', pos: 'verb', level: 'B1', en: 'to disappear', hi: 'गायब होना', ex: 'Er verschwand plötzlich für Wochen.', exEn: 'He suddenly disappeared for weeks.', exHi: 'Woh achanak haftonon ke liye gayab ho gaya.', conj: { praesens: 'verschwindet', praeteritum: 'verschwand', perfekt: 'ist verschwunden' } },
    { de: 'verursachen', pos: 'verb', level: 'B1', en: 'to cause', hi: 'कारण बनना', ex: 'Der Sturz verursachte eine schwere Verletzung.', exEn: 'The fall caused a serious injury.', exHi: 'Girne se ek gambhir chot lagi.', conj: { praesens: 'verursacht', praeteritum: 'verursachte', perfekt: 'hat verursacht' } },
    { de: 'vorbei sein', pos: 'idiom', level: 'B1', en: 'to be over', hi: 'खत्म हो जाना', ex: 'Die schwere Zeit war endlich vorbei.', exEn: 'The hard times were finally over.', exHi: 'Mushkil samay aakhirkar khatm ho gaya.' },
    { de: 'wegziehen', pos: 'verb', level: 'B1', en: 'to move away', hi: 'चला जाना', ex: 'Er zog aufs Land weg.', exEn: 'He moved away to the countryside.', exHi: 'Woh gaon chala gaya.', conj: { praesens: 'zieht weg', praeteritum: 'zog weg', perfekt: 'ist weggezogen' } },
    { de: 'weshalb', pos: 'adverb', level: 'B1', en: 'why', hi: 'क्यों', ex: 'Ich verstand nicht, weshalb er ging.', exEn: 'I didn\'t understand why he left.', exHi: 'Mujhe samajh nahi aaya ki woh kyun gaya.' },
    { de: 'während', pos: 'preposition', level: 'B1', en: 'during (+ Genitiv)', hi: 'के दौरान', ex: 'Während der Krise war sie stark.', exEn: 'During the crisis, she was strong.', exHi: 'Sankat ke dauran, woh mazboot thi.' },
    { de: 'zufällig', pos: 'adjective', level: 'B1', en: 'coincidentally', hi: 'संयोग से', ex: 'Sie trafen sich zufällig auf der Alm.', exEn: 'They met coincidentally on the alp.', exHi: 'Woh alm par sanyog se mile.' },
    { de: 'zweimonatig', pos: 'adjective', level: 'B1', en: 'two-month(ly)', hi: 'दो महीने का', ex: 'Er machte ein zweimonatiges Praktikum.', exEn: 'He did a two-month internship.', exHi: 'Usne do mahine ki internship ki.' },
    { de: 'überqueren', pos: 'verb', level: 'B1', en: 'to cross', hi: 'पार करना', ex: 'Sie überquerten die Grenze bei Nacht.', exEn: 'They crossed the border at night.', exHi: 'Unhone raat mein seema paar ki.', conj: { praesens: 'überquert', praeteritum: 'überquerte', perfekt: 'hat überquert' } },
    { de: 'ausschließlich', pos: 'adverb', level: 'B1', en: 'exclusive(ly)', hi: 'विशेष रूप से', ex: 'Er sprach ausschließlich Deutsch.', exEn: 'He spoke exclusively German.', exHi: 'Woh sirf German bolta tha.' },
    { de: 'automatisiert', pos: 'adjective', level: 'B1', en: 'automated', hi: 'स्वचालित', ex: 'Die Käserei war schon automatisiert.', exEn: 'The cheese factory was already automated.', exHi: 'Panir ki jagah pehle se svachalit thi.' },
    { de: 'Anliegen', art: 'das', gender: 'n', plural: 'Anliegen', pos: 'noun', level: 'B1', en: 'issue', hi: 'मुद्दा', ex: 'Sie hatte ein wichtiges Anliegen.', exEn: 'She had an important issue.', exHi: 'Uska ek zaroori mudda tha.' },
    { de: 'Camping', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'camping', hi: 'कैंपिंग', ex: 'Sie liebten Camping in den Bergen.', exEn: 'They loved camping in the mountains.', exHi: 'Unhein pahaadon mein camping bahut pasand thi.' },
    { de: 'Fach', art: 'das', gender: 'n', plural: 'Fächer', pos: 'noun', level: 'B1', en: 'compartment', hi: 'ख़ाना', ex: 'Er legte den Pass in das Fach.', exEn: 'He put the passport in the compartment.', exHi: 'Usne passport khaane mein rakh diya.' },
    { de: 'Gebirge', art: 'das', gender: 'n', plural: 'Gebirge', pos: 'noun', level: 'B1', en: 'mountains, mountain range', hi: 'पहाड़', ex: 'Das Gebirge war im Winter unpassierbar.', exEn: 'The mountain range was impassable in winter.', exHi: 'Sardiyon mein pahaad paar nahi kiya ja sakta tha.' },
    { de: 'Heimweh', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'homesickness', hi: 'घर की याद', ex: 'Er hatte oft Heimweh im Ausland.', exEn: 'He often had homesickness abroad.', exHi: 'Videsh mein use aksar ghar ki yaad aati thi.' },
    { de: 'Klinikum', art: 'das', gender: 'n', plural: 'Kliniken', pos: 'noun', level: 'B1', en: 'clinic, hospital', hi: 'अस्पताल', ex: 'Er arbeitete jahrelang im Klinikum.', exEn: 'He worked at the hospital for years.', exHi: 'Woh saalon tak aspataal mein kaam karta tha.' },
    { de: 'Konsulat', art: 'das', gender: 'n', plural: 'Konsulate', pos: 'noun', level: 'B1', en: 'consulate', hi: 'वाणिज्य दूतावास', ex: 'Sie ging zum Konsulat wegen ihres Passes.', exEn: 'She went to the consulate about her passport.', exHi: 'Woh apne passport ke silsile mein consulate gayi.' },
    { de: 'Privatleben', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'private life', hi: 'निजी जीवन', ex: 'Er sprach selten über sein Privatleben.', exEn: 'He rarely spoke about his private life.', exHi: 'Woh apni niji zindagi ke baare mein kam hi baat karta tha.' },
    { de: 'Schutzprojekt', art: 'das', gender: 'n', plural: 'Schutzprojekte', pos: 'noun', level: 'B1', en: 'protection project', hi: 'सुरक्षा परियोजना', ex: 'Das Schutzprojekt half vielen Wildtieren.', exEn: 'The protection project helped many wild animals.', exHi: 'Suraksha pariyojna ne kai jangli janwaron ki madad ki.' },
    { de: 'Stadtfest', art: 'das', gender: 'n', plural: 'Stadtfeste', pos: 'noun', level: 'B1', en: 'city festival', hi: 'शहर का उत्सव', ex: 'Beim Stadtfest trafen sich alle Nachbarn.', exEn: 'At the city festival, all the neighbours met.', exHi: 'Shahar ke utsav mein sabhi padosi mile.' },
    { de: 'Wildtier', art: 'das', gender: 'n', plural: 'Wildtiere', pos: 'noun', level: 'B1', en: 'wild animal', hi: 'जंगली जानवर', ex: 'Er half verletzten Wildtieren.', exEn: 'He helped injured wild animals.', exHi: 'Usne ghayal jangli janwaron ki madad ki.' },
    { de: 'Almaufenthalt', art: 'der', gender: 'm', plural: 'Almaufenthalte', pos: 'noun', level: 'B1', en: 'visit to an alp', hi: 'अल्म में प्रवास', ex: 'Der Almaufenthalt dauerte drei Monate.', exEn: 'The visit to the alp lasted three months.', exHi: 'Alm mein pravaas teen mahine tak chala.' },
    { de: 'Almsommer', art: 'der', gender: 'm', plural: 'Almsommer', pos: 'noun', level: 'B1', en: 'summer on the alp', hi: 'अल्म पर गर्मी का मौसम', ex: 'Der Almsommer war für ihn unvergesslich.', exEn: 'The summer on the alp was unforgettable for him.', exHi: 'Alm par woh garmi ka mausam uske liye yaadgaar tha.' },
    { de: 'Almurlaub', art: 'der', gender: 'm', plural: 'Almurlaube', pos: 'noun', level: 'B1', en: 'holiday on the alp', hi: 'अल्म पर छुट्टी', ex: 'Sie buchten einen Almurlaub für den Sommer.', exEn: 'They booked a holiday on the alp for the summer.', exHi: 'Unhone garmiyon ke liye alm par ek chutti book ki.' },
    { de: 'Arbeiter', art: 'der', gender: 'm', plural: 'Arbeiter', pos: 'noun', level: 'B1', en: 'worker', hi: 'कर्मचारी', ex: 'Der Arbeiter kam jeden Tag pünktlich.', exEn: 'The worker came punctually every day.', exHi: 'Karmchaari har din samay par aata tha.' },
    { de: 'Aspekt', art: 'der', gender: 'm', plural: 'Aspekte', pos: 'noun', level: 'B1', en: 'aspect', hi: 'पहलू', ex: 'Das war ein wichtiger Aspekt der Geschichte.', exEn: 'That was an important aspect of the story.', exHi: 'Yeh kahani ka ek mahatvapurn pahlu tha.' },
    { de: 'Berufssoldat', art: 'der', gender: 'm', plural: 'Berufssoldaten', pos: 'noun', level: 'B1', en: 'professional soldier', hi: 'पेशेवर सैनिक', ex: 'Sein Vater war Berufssoldat.', exEn: 'His father was a professional soldier.', exHi: 'Uske pita peshevar sainik the.' },
    { de: 'Blogeintrag', art: 'der', gender: 'm', plural: 'Blogeinträge', pos: 'noun', level: 'B1', en: 'blog post', hi: 'ब्लॉग पोस्ट', ex: 'Ich fand einen Blogeintrag über den Wildhüter.', exEn: 'I found a blog post about the gamekeeper.', exHi: 'Maine vanyajeev rakshak ke baare mein ek blog post paayi.' },
    { de: 'Buchautor', art: 'der', gender: 'm', plural: 'Buchautoren', pos: 'noun', level: 'B1', en: 'author', hi: 'लेखक', ex: 'Der Buchautor lebte lange in Afrika.', exEn: 'The author lived in Africa for a long time.', exHi: 'Lekhak lambe samay tak Africa mein raha.' },
    { de: 'Empfang', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'reception, signal', hi: 'स्वागत / सिग्नल', ex: 'Der Empfang war auf der Alm sehr schwach.', exEn: 'The signal was very weak on the alp.', exHi: 'Alm par signal bahut kamzor tha.' },
    { de: 'Ferienclub', art: 'der', gender: 'm', plural: 'Ferienclubs', pos: 'noun', level: 'B1', en: 'holiday club', hi: 'छुट्टी क्लब', ex: 'Sie arbeitete früher in einem Ferienclub.', exEn: 'She used to work at a holiday club.', exHi: 'Woh pehle ek chutti club mein kaam karti thi.' },
    { de: 'Gegensatz', art: 'der', gender: 'm', plural: 'Gegensätze', pos: 'noun', level: 'B1', en: 'opposite', hi: 'विपरीत', ex: 'Ihr Leben war ein völliger Gegensatz zu seinem.', exEn: 'Her life was a complete opposite of his.', exHi: 'Uska jeevan uske jeevan ke bilkul viprit tha.' },
    { de: 'Held', art: 'der', gender: 'm', plural: 'Helden', pos: 'noun', level: 'B1', en: 'hero', hi: 'नायक', ex: 'Für viele war er ein echter Held.', exEn: 'For many, he was a real hero.', exHi: 'Kai logon ke liye, woh ek sacha nayak tha.' },
    { de: 'Höhepunkt', art: 'der', gender: 'm', plural: 'Höhepunkte', pos: 'noun', level: 'B1', en: 'peak', hi: 'चरम बिंदु', ex: 'Das war der Höhepunkt seiner Karriere.', exEn: 'That was the peak of his career.', exHi: 'Yeh uske career ka charam bindu tha.' },
    { de: 'Lebensweg', art: 'der', gender: 'm', plural: 'Lebenswege', pos: 'noun', level: 'B1', en: 'path in life', hi: 'जीवन का रास्ता', ex: 'Ihr Lebensweg war voller Überraschungen.', exEn: 'Her path in life was full of surprises.', exHi: 'Uske jeevan ka raasta aashcharyon se bhara tha.' },
    { de: 'Lehrling', art: 'der', gender: 'm', plural: 'Lehrlinge', pos: 'noun', level: 'B1', en: 'apprentice', hi: 'शिक्षु', ex: 'Als Lehrling lernte er viel.', exEn: 'As an apprentice, he learned a lot.', exHi: 'Shikshu ke roop mein, usne bahut kuch seekha.' },
    { de: 'Mut', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'courage', hi: 'साहस', ex: 'Sie brauchte viel Mut für diesen Schritt.', exEn: 'She needed a lot of courage for this step.', exHi: 'Use is kadam ke liye bahut saahas ki zaroorat thi.' },
    { de: 'Nachtisch', art: 'der', gender: 'm', plural: 'Nachtische', pos: 'noun', level: 'B1', en: 'dessert', hi: 'मिठाई', ex: 'Zum Nachtisch gab es frisches Obst.', exEn: 'For dessert, there was fresh fruit.', exHi: 'Mithai mein taaza phal tha.' },
    { de: 'Oberkörper', art: 'der', gender: 'm', plural: 'Oberkörper', pos: 'noun', level: 'B1', en: 'upper body', hi: 'ऊपरी शरीर', ex: 'Nach dem Unfall tat sein Oberkörper weh.', exEn: 'After the accident, his upper body hurt.', exHi: 'Durghatna ke baad, uska upari sharir dukh raha tha.' },
    { de: 'Olivenbaum', art: 'der', gender: 'm', plural: 'Olivenbäume', pos: 'noun', level: 'B1', en: 'olive tree', hi: 'जैतून का पेड़', ex: 'Vor dem Haus stand ein alter Olivenbaum.', exEn: 'In front of the house stood an old olive tree.', exHi: 'Ghar ke saamne ek purana jaitun ka ped tha.' },
    { de: 'Olympiasieger', art: 'der', gender: 'm', plural: 'Olympiasieger', pos: 'noun', level: 'B1', en: 'Olympic champion', hi: 'ओलंपिक विजेता', ex: 'Er las einen Artikel über einen Olympiasieger.', exEn: 'He read an article about an Olympic champion.', exHi: 'Usne ek Olympic vijeta ke baare mein lekh padha.' },
    { de: 'Pfennig', art: 'der', gender: 'm', plural: 'Pfennige', pos: 'noun', level: 'B1', en: 'penny (old German coin)', hi: 'पुराना जर्मन सिक्का', ex: 'Damals rechnete man noch in Pfennig.', exEn: 'Back then, one still counted in Pfennig.', exHi: 'Us samay, log abhi bhi Pfennig mein hisaab karte the.' },
    { de: 'Prozess', art: 'der', gender: 'm', plural: 'Prozesse', pos: 'noun', level: 'B1', en: 'process', hi: 'प्रक्रिया', ex: 'Der Prozess dauerte mehrere Jahre.', exEn: 'The process took several years.', exHi: 'Prakriya kai saalon tak chali.' },
    { de: 'Regentag', art: 'der', gender: 'm', plural: 'Regentage', pos: 'noun', level: 'B1', en: 'rainy day', hi: 'बारिश का दिन', ex: 'An einem Regentag blieben sie zu Hause.', exEn: 'On a rainy day, they stayed home.', exHi: 'Barish ke ek din, woh ghar par rahe.' },
    { de: 'Reisepass', art: 'der', gender: 'm', plural: 'Reisepässe', pos: 'noun', level: 'B1', en: 'passport', hi: 'पासपोर्ट', ex: 'Sie verlor ihren Reisepass im Zug.', exEn: 'She lost her passport on the train.', exHi: 'Usne apna passport train mein kho diya.' },
    { de: 'Rückblick', art: 'der', gender: 'm', plural: 'Rückblicke', pos: 'noun', level: 'B1', en: 'review, looking back', hi: 'पीछे मुड़कर देखना', ex: 'Im Rückblick war alles klar.', exEn: 'Looking back, everything was clear.', exHi: 'Peeche mudkar dekhne par, sab kuch saaf tha.' },
    { de: 'Sonnabend', art: 'der', gender: 'm', plural: 'Sonnabende', pos: 'noun', level: 'B1', en: 'Saturday', hi: 'शनिवार', ex: 'Am Sonnabend besuchten sie das Stadtfest.', exEn: 'On Saturday, they visited the city festival.', exHi: 'Shanivaar ko, unhone shahar ka utsav dekha.' },
    { de: 'Sonnenaufgang', art: 'der', gender: 'm', plural: 'Sonnenaufgänge', pos: 'noun', level: 'B1', en: 'sunrise', hi: 'सूर्योदय', ex: 'Auf der Alm sah sie jeden Sonnenaufgang.', exEn: 'On the alp, she saw every sunrise.', exHi: 'Alm par, woh har sooryoday dekhti thi.' },
    { de: 'Stadtrat', art: 'der', gender: 'm', plural: 'Stadträte', pos: 'noun', level: 'B1', en: 'city council', hi: 'शहर परिषद', ex: 'Der Stadtrat entschied über das Fest.', exEn: 'The city council decided about the festival.', exHi: 'Shahar parishad ne utsav ke baare mein faisla kiya.' },
    { de: 'Terminkalender', art: 'der', gender: 'm', plural: 'Terminkalender', pos: 'noun', level: 'B1', en: 'diary, schedule', hi: 'डायरी', ex: 'Ihr Terminkalender war immer voll.', exEn: 'Her diary was always full.', exHi: 'Uski diary hamesha bhari rehti thi.' },
    { de: 'Todesfall', art: 'der', gender: 'm', plural: 'Todesfälle', pos: 'noun', level: 'B1', en: 'death', hi: 'मृत्यु', ex: 'Der Todesfall traf die ganze Familie hart.', exEn: 'The death hit the whole family hard.', exHi: 'Mrityu ne poore parivaar ko gehra dhakka pahunchaya.' },
    { de: 'Weltmeister', art: 'der', gender: 'm', plural: 'Weltmeister', pos: 'noun', level: 'B1', en: 'world champion', hi: 'विश्व विजेता', ex: 'Er wurde mit zwanzig Jahren Weltmeister.', exEn: 'He became world champion at twenty years old.', exHi: 'Woh bees saal ki umar mein vishwa vijeta bana.' },
    { de: 'Wendepunkt', art: 'der', gender: 'm', plural: 'Wendepunkte', pos: 'noun', level: 'B1', en: 'turning point', hi: 'मोड़', ex: 'Das war der Wendepunkt in seinem Leben.', exEn: 'That was the turning point in his life.', exHi: 'Yeh uske jeevan ka mor tha.' },
    { de: 'Wildhüter', art: 'der', gender: 'm', plural: 'Wildhüter', pos: 'noun', level: 'B1', en: 'gamekeeper', hi: 'वन्यजीव रक्षक', ex: 'Der Wildhüter kannte jedes Tier im Wald.', exEn: 'The gamekeeper knew every animal in the forest.', exHi: 'Vanyajeev rakshak jangal ke har janwar ko jaanta tha.' },
    { de: 'Zeitpunkt', art: 'der', gender: 'm', plural: 'Zeitpunkte', pos: 'noun', level: 'B1', en: '(point in) time', hi: 'समय बिंदु', ex: 'Zu diesem Zeitpunkt wusste sie noch nichts.', exEn: 'At this point in time, she still knew nothing.', exHi: 'Us samay bindu par, use kuch pata nahi tha.' },
    { de: 'Zeitschriftenartikel', art: 'der', gender: 'm', plural: 'Zeitschriftenartikel', pos: 'noun', level: 'B1', en: 'magazine article', hi: 'पत्रिका लेख', ex: 'Ich las einen Zeitschriftenartikel über sie.', exEn: 'I read a magazine article about her.', exHi: 'Maine uske baare mein ek patrika lekh padha.' },
    { de: 'Zeitungsartikel', art: 'der', gender: 'm', plural: 'Zeitungsartikel', pos: 'noun', level: 'B1', en: 'newspaper article', hi: 'समाचार पत्र लेख', ex: 'Der Zeitungsartikel erzählte seine Geschichte.', exEn: 'The newspaper article told his story.', exHi: 'Akhbaar ke lekh ne uski kahani batayi.' },
    { de: 'Zoll', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'customs', hi: 'सीमा शुल्क', ex: 'Am Zoll mussten sie lange warten.', exEn: 'At customs, they had to wait a long time.', exHi: 'Seema shulk par, unhein lambe samay tak intzaar karna pada.' },
    { de: 'der/die Alte', pos: 'noun', level: 'B1', en: 'oneself, the old one', hi: 'खुद, बुज़ुर्ग', ex: 'Er blieb bis zuletzt derselbe Alte.', exEn: 'He remained the same old one until the end.', exHi: 'Woh aakhir tak vahi purana khud raha.' },
    { de: 'der/die Büroangestellte', pos: 'noun', level: 'B1', en: 'office worker', hi: 'कार्यालय कर्मचारी', ex: 'Sie war früher Büroangestellte.', exEn: 'She used to be an office worker.', exHi: 'Woh pehle karyalay karmchaari thi.' },
    { de: 'Alm', art: 'die', gender: 'f', plural: 'Almen', pos: 'noun', level: 'B1', en: 'alpine pasture (alp)', hi: 'अल्पाइन चारागाह', ex: 'Sie verbrachte den Sommer auf der Alm.', exEn: 'She spent the summer on the alp.', exHi: 'Usne garmi ka mausam alm par bitaya.' },
    { de: 'Arbeiterin', art: 'die', gender: 'f', plural: 'Arbeiterinnen', pos: 'noun', level: 'B1', en: 'worker (female)', hi: 'महिला कर्मचारी', ex: 'Die Arbeiterin begann früh am Morgen.', exEn: 'The worker began early in the morning.', exHi: 'Mahila karmchaari subah jaldi shuru karti thi.' },
    { de: 'Bahnradfahrerin', art: 'die', gender: 'f', plural: 'Bahnradfahrerinnen', pos: 'noun', level: 'B1', en: 'track bicycle driver (female)', hi: 'महिला ट्रैक साइकिल चालक', ex: 'Die Bahnradfahrerin gewann drei Medaillen.', exEn: 'The track cyclist won three medals.', exHi: 'Track cyclist ne teen medal jeete.' },
    { de: 'Berufssoldatin', art: 'die', gender: 'f', plural: 'Berufssoldatinnen', pos: 'noun', level: 'B1', en: 'professional soldier (female)', hi: 'महिला पेशेवर सैनिक', ex: 'Sie war eine erfolgreiche Berufssoldatin.', exEn: 'She was a successful professional soldier.', exHi: 'Woh ek safal peshevar mahila sainik thi.' },
    { de: 'Buchautorin', art: 'die', gender: 'f', plural: 'Buchautorinnen', pos: 'noun', level: 'B1', en: 'author (female)', hi: 'महिला लेखक', ex: 'Die Buchautorin schrieb über ihr Leben in Afrika.', exEn: 'The author wrote about her life in Africa.', exHi: 'Lekhika ne Africa mein apne jeevan ke baare mein likha.' },
    { de: 'Bundeswehrzeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'time in the armed forces', hi: 'सेना में सेवा का समय', ex: 'Nach der Bundeswehrzeit begann er zu studieren.', exEn: 'After his time in the armed forces, he began to study.', exHi: 'Sena mein seva ke baad, usne padhai shuru ki.' },
    { de: 'Diagnose', art: 'die', gender: 'f', plural: 'Diagnosen', pos: 'noun', level: 'B1', en: 'diagnosis', hi: 'निदान', ex: 'Die Diagnose änderte ihr ganzes Leben.', exEn: 'The diagnosis changed her whole life.', exHi: 'Nidaan ne uska poora jeevan badal diya.' },
    { de: 'Gruppenarbeit', art: 'die', gender: 'f', plural: 'Gruppenarbeiten', pos: 'noun', level: 'B1', en: 'group work', hi: 'समूह कार्य', ex: 'Sie liebte die Gruppenarbeit in der Schule.', exEn: 'She loved group work at school.', exHi: 'Use school mein samooh kaarya bahut pasand tha.' },
    { de: 'Handarbeit', art: 'die', gender: 'f', plural: 'Handarbeiten', pos: 'noun', level: 'B1', en: 'handiwork', hi: 'हस्तशिल्प', ex: 'Ihre Handarbeit war sehr fein.', exEn: 'Her handiwork was very fine.', exHi: 'Uska hastashilp bahut sundar tha.' },
    { de: 'Heldin', art: 'die', gender: 'f', plural: 'Heldinnen', pos: 'noun', level: 'B1', en: 'hero (female)', hi: 'नायिका', ex: 'Für ihre Familie war sie eine echte Heldin.', exEn: 'For her family, she was a true hero.', exHi: 'Apne parivaar ke liye, woh ek sachi nayika thi.' },
    { de: 'Hygiene', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'hygiene', hi: 'स्वच्छता', ex: 'Im Klinikum war Hygiene sehr wichtig.', exEn: 'Hygiene was very important at the hospital.', exHi: 'Aspataal mein swachhta bahut zaroori thi.' },
    { de: 'Hütte', art: 'die', gender: 'f', plural: 'Hütten', pos: 'noun', level: 'B1', en: 'hut, lodge', hi: 'झोपड़ी', ex: 'Der Weg führte zu einer kleinen Hütte.', exEn: 'The path led to a small hut.', exHi: 'Raasta ek choti si jhopdi ki taraf le jaata tha.' },
    { de: 'Konkurrenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'competition', hi: 'प्रतिस्पर्धा', ex: 'Die Konkurrenz in diesem Sport war groß.', exEn: 'The competition in this sport was strong.', exHi: 'Is khel mein pratispardha bahut zyada thi.' },
    { de: 'Krise', art: 'die', gender: 'f', plural: 'Krisen', pos: 'noun', level: 'B1', en: 'crisis', hi: 'संकट', ex: 'Er blieb während der Krise ruhig.', exEn: 'He stayed calm during the crisis.', exHi: 'Sankat ke dauran, woh shaant raha.' },
    { de: 'Käserei', art: 'die', gender: 'f', plural: 'Käsereien', pos: 'noun', level: 'B1', en: 'cheese factory', hi: 'पनीर बनाने की जगह', ex: 'Er fand Arbeit in einer Käserei.', exEn: 'He found work at a cheese factory.', exHi: 'Use panir banane ki jagah mein kaam mil gaya.' },
    { de: 'Lebensgeschichte', art: 'die', gender: 'f', plural: 'Lebensgeschichten', pos: 'noun', level: 'B1', en: 'life story', hi: 'जीवन कहानी', ex: 'Ihre Lebensgeschichte war voller Überraschungen.', exEn: 'Her life story was full of surprises.', exHi: 'Uski jeevan kahani aashcharyon se bhari thi.' },
    { de: 'Lebenswende', art: 'die', gender: 'f', plural: 'Lebenswenden', pos: 'noun', level: 'B1', en: 'turning point (in life)', hi: 'जीवन का मोड़', ex: 'Diese Diagnose war eine echte Lebenswende.', exEn: 'This diagnosis was a real turning point in life.', exHi: 'Yeh nidaan jeevan ka ek sacha mor tha.' },
    { de: 'Liebesgeschichte', art: 'die', gender: 'f', plural: 'Liebesgeschichten', pos: 'noun', level: 'B1', en: 'love story', hi: 'प्रेम कहानी', ex: 'Es war eine ungewöhnliche Liebesgeschichte.', exEn: 'It was an unusual love story.', exHi: 'Yeh ek asaamanya prem kahani thi.' },
    { de: 'Mark', art: 'die', gender: 'f', plural: 'Mark', pos: 'noun', level: 'B1', en: 'German Mark (former currency)', hi: 'जर्मन मार्क (पुरानी मुद्रा)', ex: 'Damals kostete das Brot eine Mark.', exEn: 'Back then, bread cost one Mark.', exHi: 'Us samay, roti ek Mark ki milti thi.' },
    { de: 'Olympiasiegerin', art: 'die', gender: 'f', plural: 'Olympiasiegerinnen', pos: 'noun', level: 'B1', en: 'Olympic champion (female)', hi: 'महिला ओलंपिक विजेता', ex: 'Die Olympiasiegerin trainierte jahrelang hart.', exEn: 'The Olympic champion trained hard for years.', exHi: 'Olympic vijeta ne saalon tak kadi mehnat ki.' },
    { de: 'Pflegekraft', art: 'die', gender: 'f', plural: 'Pflegekräfte', pos: 'noun', level: 'B1', en: 'caregiver', hi: 'देखभाल करने वाला/वाली', ex: 'Sie arbeitete als Pflegekraft im Klinikum.', exEn: 'She worked as a caregiver at the hospital.', exHi: 'Woh aspataal mein dekhbhaal karne wali ke roop mein kaam karti thi.' },
    { de: 'Powerfrau', art: 'die', gender: 'f', plural: 'Powerfrauen', pos: 'noun', level: 'B1', en: 'power woman', hi: 'सशक्त महिला', ex: 'Sie galt als echte Powerfrau.', exEn: 'She was considered a real power woman.', exHi: 'Use ek sachi sashakt mahila mana jaata tha.' },
    { de: 'Rückkehr', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'return', hi: 'वापसी', ex: 'Ihre Rückkehr freute die ganze Familie.', exEn: 'Her return delighted the whole family.', exHi: 'Uski vaapsi se poora parivaar khush hua.' },
    { de: 'Schwiegereltern', art: 'die', gender: 'plural', plural: 'Schwiegereltern', pos: 'noun', level: 'B1', en: 'parents-in-law', hi: 'ससुराल वाले', ex: 'Seine Schwiegereltern lebten auf dem Land.', exEn: 'His parents-in-law lived in the countryside.', exHi: 'Uske sasural wale gaon mein rehte the.' },
    { de: 'Sehnsucht', art: 'die', gender: 'f', plural: 'Sehnsüchte', pos: 'noun', level: 'B1', en: 'longing, desire', hi: 'तड़प', ex: 'Sie hatte immer Sehnsucht nach den Bergen.', exEn: 'She always had a longing for the mountains.', exHi: 'Use hamesha paharon ki tadap rehti thi.' },
    { de: 'Strafe', art: 'die', gender: 'f', plural: 'Strafen', pos: 'noun', level: 'B1', en: 'punishment, penalty', hi: 'सज़ा', ex: 'Die Strafe für den Fehler war hart.', exEn: 'The punishment for the mistake was harsh.', exHi: 'Galti ki saza kathin thi.' },
    { de: 'Unterrichtsform', art: 'die', gender: 'f', plural: 'Unterrichtsformen', pos: 'noun', level: 'B1', en: 'form of instruction', hi: 'शिक्षण का तरीका', ex: 'Die neue Unterrichtsform gefiel den Schülern.', exEn: 'The new form of instruction pleased the students.', exHi: 'Naye shikshan tarike ne chhatron ko pasand aaya.' },
    { de: 'Wahl', art: 'die', gender: 'f', plural: 'Wahlen', pos: 'noun', level: 'B1', en: 'election', hi: 'चुनाव', ex: 'Die Wahl fand im Herbst statt.', exEn: 'The election took place in autumn.', exHi: 'Chunaav sharad ritu mein hua.' },
    { de: 'Weihnachtsferien', art: 'die', gender: 'plural', plural: 'Weihnachtsferien', pos: 'noun', level: 'B1', en: 'Christmas holidays', hi: 'क्रिसमस की छुट्टियाँ', ex: 'In den Weihnachtsferien besuchte sie die Alm.', exEn: 'During the Christmas holidays, she visited the alp.', exHi: 'Christmas ki chuttiyon mein, woh alm gayi.' },
    { de: 'Weltmeisterin', art: 'die', gender: 'f', plural: 'Weltmeisterinnen', pos: 'noun', level: 'B1', en: 'world champion (female)', hi: 'महिला विश्व विजेता', ex: 'Sie wurde mit achtzehn Weltmeisterin.', exEn: 'She became world champion at eighteen.', exHi: 'Woh atharah saal ki umar mein vishwa vijeta bani.' },
    { de: 'Wildhüterin', art: 'die', gender: 'f', plural: 'Wildhüterinnen', pos: 'noun', level: 'B1', en: 'gamekeeper (female)', hi: 'महिला वन्यजीव रक्षक', ex: 'Die Wildhüterin schützte die Tiere jahrelang.', exEn: 'The gamekeeper protected the animals for years.', exHi: 'Vanyajeev rakshak ne saalon tak janwaron ki raksha ki.' },
    { de: 'Wirbelsäule', art: 'die', gender: 'f', plural: 'Wirbelsäulen', pos: 'noun', level: 'B1', en: 'spine', hi: 'रीढ़ की हड्डी', ex: 'Nach dem Sturz verletzte er sich die Wirbelsäule.', exEn: 'After the fall, he injured his spine.', exHi: 'Girne ke baad, uski reedh ki haddi mein chot lagi.' },
    { de: 'gucken', pos: 'verb', level: 'B1', en: 'to look', hi: 'देखना', ex: 'Sie guckte lange aus dem Fenster.', exEn: 'She looked out the window for a long time.', exHi: 'Woh lambe samay tak khidki se baahar dekhti rahi.', conj: { praesens: 'guckt', praeteritum: 'guckte', perfekt: 'hat geguckt' } },
    { de: 'liebevoll', pos: 'adjective', level: 'B1', en: 'loving', hi: 'प्रेमपूर्ण', ex: 'Sie pflegte die Tiere liebevoll.', exEn: 'She cared for the animals lovingly.', exHi: 'Woh premapurvak janwaron ki dekhbhaal karti thi.' },
    { de: 'melken', pos: 'verb', level: 'B1', en: 'to milk', hi: 'दूध निकालना', ex: 'Jeden Morgen melkte er die Kühe.', exEn: 'Every morning he milked the cows.', exHi: 'Har subah woh gaayon ka doodh nikaalta tha.', conj: { praesens: 'melkt', praeteritum: 'melkte', perfekt: 'hat gemolken' } },
    { de: 'sich einsetzen', pos: 'verb', level: 'B1', en: 'to support, campaign (für/gegen + Akk.)', hi: 'समर्थन करना', ex: 'Sie setzte sich für den Tierschutz ein.', exEn: 'She campaigned for animal protection.', exHi: 'Usne pashu suraksha ke liye samarthan diya.', conj: { praesens: 'setzt sich ein', praeteritum: 'setzte sich ein', perfekt: 'hat sich eingesetzt' } },
    { de: 'sich entschließen', pos: 'verb', level: 'B1', en: 'to decide (zu + Dat.)', hi: 'फ़ैसला करना', ex: 'Er entschloss sich zu einem neuen Leben.', exEn: 'He decided on a new life.', exHi: 'Usne ek naye jeevan ka faisla kiya.', conj: { praesens: 'entschließt sich', praeteritum: 'entschloss sich', perfekt: 'hat sich entschlossen' } },
    { de: 'sich verlieben', pos: 'verb', level: 'B1', en: 'to fall in love (in + Akk.)', hi: 'प्यार में पड़ना', ex: 'Sie verliebte sich sofort in die Berge.', exEn: 'She fell in love with the mountains immediately.', exHi: 'Woh turant paharon ke pyaar mein pad gayi.', conj: { praesens: 'verliebt sich', praeteritum: 'verliebte sich', perfekt: 'hat sich verliebt' } },
    { de: 'Afrika', pos: 'noun', level: 'B1', en: 'Africa', hi: 'अफ्रीका', ex: 'Sie lebte lange in Afrika.', exEn: 'She lived in Africa for a long time.', exHi: 'Woh lambe samay tak Africa mein rahi.' },
    { de: 'Vergangene', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'the past', hi: 'भूतकाल', ex: 'Er sprach oft vom Vergangenen.', exEn: 'He often spoke of the past.', exHi: 'Woh aksar bhootkaal ke baare mein baat karta tha.' },
    { de: 'Espresso-Kanne', art: 'die', gender: 'f', plural: 'Espresso-Kannen', pos: 'noun', level: 'B1', en: 'Italian coffee pot', hi: 'इटैलियन कॉफ़ी पॉट', ex: 'Die alte Espresso-Kanne gehörte ihrer Großmutter.', exEn: 'The old coffee pot belonged to her grandmother.', exHi: 'Purana coffee pot uski dadi ka tha.' },
    { de: 'Vergangenheitsform', art: 'die', gender: 'f', plural: 'Vergangenheitsformen', pos: 'noun', level: 'B1', en: 'past tense', hi: 'भूतकाल रूप', ex: 'Das Präteritum ist eine Vergangenheitsform.', exEn: 'The Präteritum is a past tense.', exHi: 'Präteritum ek bhootkaal roop hai.' },
    { de: 'Namibia', pos: 'noun', level: 'B1', en: 'Namibia', hi: 'नामीबिया', ex: 'Er kam aus Namibia.', exEn: 'He came from Namibia.', exHi: 'Woh Namibia se aaya tha.' },
    { de: 'raus', pos: 'adverb', level: 'B1', en: 'out', hi: 'बाहर', ex: 'Er wollte einfach raus aus der Stadt.', exEn: 'He simply wanted to get out of the city.', exHi: 'Woh bas shahar se bahar nikalna chahta tha.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Perfekt vs. Präteritum — dieselbe Vergangenheit, anderes Register',
      body: [
        'Both tenses describe the past — they don\'t differ in meaning, only in register. <b>Perfekt</b> dominates spoken German. <b>Präteritum</b> dominates written German: stories, books, newspapers, reports, formal writing, narration.'
      ],
      example: [
        { html: '<span class="de">Ich bin nach Hause gegangen.</span> (Perfekt — spoken)' },
        { html: '<span class="de">Ich ging nach Hause.</span> (Präteritum — written)' }
      ],
      hinglish: 'Dono tenses past ko describe karte hain — matlab mein fark nahi, register mein hai. Perfekt bolchaal mein zyada, Präteritum likhawat mein zyada (kahaniyaan, akhbaar, report, formal writing).'
    },
    {
      title: 'sein im Präteritum',
      body: [ 'sein almost always appears in the Präteritum — even in spoken German.' ],
      table: {
        head: ['Person', 'Form'],
        rows: [
          ['ich', 'war'], ['du', 'warst'], ['er/sie/es', 'war'],
          ['wir', 'waren'], ['ihr', 'wart'], ['sie/Sie', 'waren']
        ]
      },
      example: [
        { html: '<span class="de">Ich war gestern krank.</span>' },
        { html: '<span class="de">Wir waren in Berlin.</span>' },
        { html: '<span class="de">Sie war sehr glücklich.</span>' }
      ],
      hinglish: 'sein lagbhag hamesha Präteritum mein aata hai — bolchaal mein bhi.'
    },
    {
      title: 'haben im Präteritum',
      body: [ 'Like sein, haben almost always appears in the Präteritum, in speech and writing alike.' ],
      table: {
        head: ['Person', 'Form'],
        rows: [
          ['ich', 'hatte'], ['du', 'hattest'], ['er/sie/es', 'hatte'],
          ['wir', 'hatten'], ['ihr', 'hattet'], ['sie/Sie', 'hatten']
        ]
      },
      example: [
        { html: '<span class="de">Ich hatte keine Zeit.</span>' },
        { html: '<span class="de">Wir hatten Glück.</span>' },
        { html: '<span class="de">Er hatte viel Arbeit.</span>' }
      ],
      hinglish: 'sein ki tarah, haben bhi lagbhag hamesha Präteritum mein aata hai — bolchaal aur likhawat dono mein.'
    },
    {
      title: 'Modalverben im Präteritum',
      body: [ 'Modal verbs are used VERY often in the Präteritum instead of the Perfekt — this is normal and expected, even in spoken German.' ],
      table: {
        head: ['Modal', 'Präteritum'],
        rows: [
          ['können', 'konnte'], ['müssen', 'musste'], ['dürfen', 'durfte'],
          ['wollen', 'wollte'], ['sollen', 'sollte']
        ]
      },
      example: [
        { html: '<span class="de">Ich konnte nicht kommen.</span>' },
        { html: '<span class="de">Wir mussten arbeiten.</span>' },
        { html: '<span class="de">Sie durfte früher gehen.</span>' },
        { html: '<span class="de">Er wollte Arzt werden.</span>' },
        { html: '<span class="de">Ich sollte mehr lernen.</span>' }
      ],
      hinglish: 'Modal verbs Perfekt ki jagah Präteritum mein bahut istemal hote hain — yeh bolchaal mein bhi normal hai.'
    },
    {
      title: 'Häufige unregelmäßige Präteritum-Verben',
      body: [ 'These eleven irregular verbs cover most everyday narration at B1.' ],
      table: {
        head: ['Infinitiv', 'Präteritum'],
        rows: [
          ['gehen', 'ging'], ['kommen', 'kam'], ['finden', 'fand'],
          ['geben', 'gab'], ['wissen', 'wusste'], ['denken', 'dachte'],
          ['bringen', 'brachte'], ['stehen', 'stand'], ['liegen', 'lag'],
          ['sehen', 'sah'], ['werden', 'wurde']
        ]
      },
      example: [
        { html: '<span class="de">Er ging nach Hause.</span>' },
        { html: '<span class="de">Sie kam zu spät.</span>' },
        { html: '<span class="de">Ich fand den Schlüssel.</span>' },
        { html: '<span class="de">Wir sahen einen Film.</span>' }
      ],
      hinglish: 'Yeh gyaarah irregular verbs B1 level ki zyada tar narration ko cover karte hain.'
    },
    {
      title: 'Schriftliches vs. gesprochenes Deutsch — Zeitleiste',
      body: [
        'Think of it as two channels for the same past: spoken conversation flows through Perfekt (with sein/haben/modals always in Präteritum); written narration flows through Präteritum (with the same three exceptions still holding).'
      ],
      table: {
        head: ['Context', 'Preferred tense'],
        rows: [
          ['Speaking', 'Mostly Perfekt'],
          ['Writing', 'Often Präteritum'],
          ['Stories', 'Mostly Präteritum'],
          ['Newspapers', 'Mostly Präteritum']
        ]
      },
      hinglish: 'Isse do channels ki tarah socho: bolchaal Perfekt se chalti hai (sein/haben/modals hamesha Präteritum mein); likhi hui narration Präteritum se chalti hai (wahi teen apvaad yahan bhi lagoo hote hain).'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These four mistakes are extremely common at B1 — mixing Perfekt and Präteritum markers in the same clause.' ],
      mistakes: [
        { wrong: 'Ich ging gegangen.', right: 'Ich ging. / Ich bin gegangen.', why: 'Do not combine a Präteritum verb with a Partizip II — pick one past form. (Note: <span class="de">Ich war gegangen</span> is NOT a mistake — that is the Plusquamperfekt, which you meet in Chapter 20.)' },
        { wrong: 'Ich hatte gegangen.', right: 'Ich war gegangen.', why: 'gehen takes sein, not haben — so the Plusquamperfekt is war gegangen. The auxiliary choice stays the same as in the Perfekt.' },
        { wrong: 'Ich ging nach Hause gegangen.', right: 'Ich ging nach Hause.', why: 'Never double-mark the past — pick ONE past form (Präteritum verb OR Partizip II), not both.' },
        { wrong: 'Ich konnte gegangen.', right: 'Ich konnte gehen.', why: 'Modal verbs in the Präteritum take a plain infinitive at the end, not a Partizip II.' }
      ],
      hinglish: 'Sabse aam galti hai Perfekt aur Präteritum ke markers ko ek hi clause mein mix kar dena. Hamesha ek hi past form chuno.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'For the Goethe exam: reading passages (newspapers, biographies, stories) are almost always in the Präteritum — recognising the irregular forms quickly speeds up comprehension.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Are you speaking?', '→ Mostly Perfekt (but sein/haben/modals → Präteritum)'],
          ['Are you writing formally, or telling a story?', '→ Often Präteritum'],
          ['Are you reading a newspaper or biography?', '→ Mostly Präteritum']
        ]
      },
      note: 'Memory trick: sein and haben and the modal verbs almost ALWAYS go to the Präteritum, everywhere — the choice between Perfekt and Präteritum really only applies to the other verbs.',
      hinglish: 'Goethe exam ke liye: reading passages (akhbaar, biography, kahaniyaan) lagbhag hamesha Präteritum mein hote hain — irregular forms ko jaldi pehchaanna samajhne mein madad karta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Vom Berufssoldat zum Käser',
    titleEn: 'From professional soldier to cheesemaker',
    tokens: [
      { w: 'Martin', role: 'r-subject', en: 'Martin', hi: 'मार्टिन', type: 'Name' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', type: 'Verb · sein (Präteritum)', why: 'sein — Präteritum.' },
      { w: 'zwanzig', role: 'r-subject', en: 'twenty', hi: 'बीस', type: 'Number' },
      { w: 'Jahre', role: 'r-subject', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'lang', role: 'r-adverb', en: 'long', hi: 'तक', type: 'Adverb' },
      { w: 'Berufssoldat', role: 'r-subject', en: 'professional soldier', hi: 'पेशेवर सैनिक', type: 'Noun · masc.', why: 'der Berufssoldat (this chapter).' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', type: 'Verb · haben (Präteritum)', why: 'haben — Präteritum.' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'Sehnsucht', role: 'r-akkusativ', en: 'longing', hi: 'तड़प', type: 'Noun · fem.', why: 'die Sehnsucht (this chapter).' },
      { w: 'nach', role: 'r-preposition', en: 'for', hi: 'के लिए', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · dat.' },
      { w: 'ruhigeren', role: 'r-dativ', en: 'calmer', hi: 'शांत', type: 'Adjective · Komparativ · Dativ' },
      { w: 'Leben', role: 'r-dativ', en: 'life', hi: 'जीवन', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Eines', role: 'r-genitiv', en: 'one (neut. gen.)', hi: 'एक', type: 'Determiner · Genitiv' },
      { w: 'Tages', role: 'r-genitiv', en: 'day (gen.)', hi: 'दिन का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'entschloss', role: 'r-verb', en: 'decided (Präteritum)', hi: 'फ़ैसला किया', type: 'Verb · sich entschließen (Präteritum)', why: 'sich entschließen (this chapter): to decide.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sich', role: 'r-akkusativ', en: 'himself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Präposition' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · dat.' },
      { w: 'radikalen', role: 'r-dativ', en: 'radical', hi: 'कट्टरपंथी', type: 'Adjective · Dativ', why: 'radikal (this chapter).' },
      { w: 'Wechsel', role: 'r-dativ', en: 'change', hi: 'बदलाव', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'zog', role: 'r-verb', en: 'moved (Präteritum)', hi: 'चला गया', type: 'Verb · wegziehen (Präteritum)', why: 'wegziehen (this chapter): to move away.' },
      { w: 'weg', role: 'r-verb', en: '(wegziehen)', hi: '—', type: 'Verbpartikel' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'begann', role: 'r-verb', en: 'began (Präteritum)', hi: 'शुरू किया', type: 'Verb · beginnen (Präteritum)' },
      { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Lehrling', role: 'r-akkusativ', en: 'apprentice', hi: 'शिक्षु', type: 'Noun · masc.', why: 'der Lehrling (this chapter).' },
      { w: 'in', role: 'r-preposition', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · dat.' },
      { w: 'Käserei', role: 'r-dativ', en: 'cheese factory', hi: 'पनीर बनाने की जगह', type: 'Noun · fem.', why: 'die Käserei (this chapter).' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'wusste', role: 'r-verb', en: 'knew (Präteritum)', hi: 'जानता था', type: 'Verb · wissen (Präteritum)', why: 'wissen → wusste (this chapter).' },
      { w: 'am', role: 'r-time', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Anfang', role: 'r-time', en: 'beginning', hi: 'शुरुआत', type: 'Noun · masc.' },
      { w: 'wenig', role: 'r-akkusativ', en: 'little', hi: 'बहुत कम', type: 'Adjective' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'Käse', role: 'r-akkusativ', en: 'cheese', hi: 'पनीर', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', type: 'Konjunktion' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sammelte', role: 'r-verb', en: 'gained (Präteritum)', hi: 'प्राप्त किया', type: 'Verb · sammeln (Präteritum)', why: 'sammeln (this chapter): to gain (experience).' },
      { w: 'schnell', role: 'r-adverb', en: 'quickly', hi: 'जल्दी', type: 'Adverb' },
      { w: 'Erfahrung', role: 'r-akkusativ', en: 'experience', hi: 'अनुभव', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', type: 'Artikel · Akk.' },
      { w: 'Morgen', role: 'r-akkusativ', en: 'morning', hi: 'सुबह', type: 'Noun · masc.' },
      { w: 'stand', role: 'r-verb', en: 'got up (Präteritum)', hi: 'उठता था', type: 'Verb · aufstehen (Präteritum)', why: 'stehen → stand (this chapter).' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', type: 'Adverb' },
      { w: 'früh', role: 'r-adjective', en: 'early', hi: 'जल्दी', type: 'Adjective' },
      { w: 'auf', role: 'r-verb', en: '(aufstehen)', hi: '—', type: 'Verbpartikel' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'melkte', role: 'r-verb', en: 'milked (Präteritum)', hi: 'दूध निकालता था', type: 'Verb · melken (Präteritum)', why: 'melken (this chapter): to milk.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (plural)', hi: 'ये', type: 'Article · acc.' },
      { w: 'Kühe', role: 'r-akkusativ', en: 'cows', hi: 'गायें', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Schließlich', role: 'r-adverb', en: 'eventually', hi: 'आख़िरकार', type: 'Adverb', why: 'schließlich (this chapter): finally, eventually.' },
      { w: 'wurde', role: 'r-verb', en: 'became (Präteritum)', hi: 'बन गया', type: 'Verb · werden (Präteritum)', why: 'werden → wurde (this chapter).' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'Besitzer', role: 'r-subject', en: 'owner', hi: 'मालिक', type: 'Noun · masc.' },
      { w: 'seiner', role: 'r-genitiv', en: 'his own (fem. gen.)', hi: 'अपनी', type: 'Possessivartikel · Genitiv' },
      { w: 'eigenen', role: 'r-genitiv', en: 'own', hi: 'खुद की', type: 'Adjective · Genitiv' },
      { w: 'Käserei', role: 'r-genitiv', en: 'cheese factory (gen.)', hi: 'पनीर की जगह का', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'Martin was a professional soldier for twenty years. He often had a longing for a calmer life. One day, he decided on a radical change. He moved away and began as an apprentice at a cheese factory. He knew little about cheese at the beginning, but he quickly gained experience. Every morning he got up very early and milked the cows. Eventually, he became the owner of his own cheese factory.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_007_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Weißt du noch, wie wir uns kennenlernten? Ich war so schrecklich schüchtern.', en: 'Do you remember how we met? I was so terribly shy.' },
      { id: 'B1_007_L002', speaker: 'Almut', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Schüchtern? Du standest die ganze Zeit einfach nur da und starrtest auf deine Schuhe!', en: 'Shy? You just stood there the whole time staring at your shoes!' },
      { id: 'B1_007_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt. Aber dann fragtest du mich einfach, ob ich Kaffee wollte.', en: 'True. But then you just asked me if I wanted coffee.' },
      { id: 'B1_007_L004', speaker: 'Almut', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und du sagtest ja, obwohl du gar keinen Kaffee magst!', en: 'And you said yes, even though you don\'t even like coffee!' }
    ],
    transcript: 'Weißt du noch, wie wir uns kennenlernten? Ich war so schrecklich schüchtern. Schüchtern? Du standest die ganze Zeit einfach nur da und starrtest auf deine Schuhe! Stimmt. Aber dann fragtest du mich einfach, ob ich Kaffee wollte. Und du sagtest ja, obwohl du gar keinen Kaffee magst!',
    translation: 'Do you remember how we met? I was so terribly shy. Shy? You just stood there the whole time staring at your shoes! True. But then you just asked me if I wanted coffee. And you said yes, even though you don\'t even like coffee!',
    tokens: [
      { w: 'Weißt' },
      { w: 'du' },
      { w: 'noch' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'kennenlernten' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'war' },
      { w: 'so' },
      { w: 'schrecklich' },
      { w: 'schüchtern' },
      { w: '.', plain: true },
      { w: 'Schüchtern' },
      { w: '?', plain: true },
      { w: 'Du' },
      { w: 'standest' },
      { w: 'die' },
      { w: 'ganze' },
      { w: 'Zeit' },
      { w: 'einfach' },
      { w: 'nur' },
      { w: 'da' },
      { w: 'und' },
      { w: 'starrtest' },
      { w: 'auf' },
      { w: 'deine' },
      { w: 'Schuhe' },
      { w: '!', plain: true },
      { w: 'Stimmt' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'dann' },
      { w: 'fragtest' },
      { w: 'du' },
      { w: 'mich' },
      { w: 'einfach' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'ich' },
      { w: 'Kaffee' },
      { w: 'wollte' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: 'sagtest' },
      { w: 'ja' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'du' },
      { w: 'gar' },
      { w: 'keinen' },
      { w: 'Kaffee' },
      { w: 'magst' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wie war Timo beim ersten Treffen?', qEn: 'How was Timo when they first met?', options: ['sehr selbstsicher', 'sehr schüchtern', 'sehr müde', 'sehr laut'], optionsEn: ['very self-assured', 'very shy', 'very tired', 'very loud'], answer: 1,
        explain: '"Ich war so schrecklich schüchtern."' },
      { q: 'Was hat Timo gemacht, obwohl er keinen Kaffee mag?', qEn: 'What did Timo do even though he doesn\'t like coffee?', options: ['Er trank Tee.', 'Er sagte ja zum Kaffee.', 'Er ging weg.', 'Er kochte Kaffee.'], optionsEn: ['He drank tea.', 'He said yes to the coffee.', 'He left.', 'He made coffee.'], answer: 1,
        explain: '"Und du sagtest ja, obwohl du gar keinen Kaffee magst!"' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt, wie ihr euch kennengelernt habt.", taskEn: "Your friend asks how you two met.", de: "Ich war schrecklich schüchtern und stand nur da.", en: "I was terribly shy and just stood there." },
    { task: "Erzähl von deiner Schulbildung als Kind.", taskEn: "Talk about your schooling as a child.", de: "Ich ging außerhalb der Stadt zur Schule und wachte immer früh auf.", en: "I went to school outside the town and always woke up early." },
    { task: "Deine Kollegin fragt nach einer schweren Zeit in deinem Leben.", taskEn: "Your colleague asks about a difficult time in your life.", de: "Nach der Trennung fühlte ich Einsamkeit, aber ich gab nicht auf.", en: "After the separation I felt loneliness, but I didn't give up." },
    { task: "Ein Freund fragt, was dich als Kind begeisterte.", taskEn: "A friend asks what excited you as a child.", de: "Die Wildtierstation begeisterte mich. Ich war beinahe jeden Tag dort.", en: "The wildlife station excited me. I was there almost every day." },
    { task: "Erzähl von einer Herausforderung, die dich verändert hat.", taskEn: "Talk about a challenge that changed you.", de: "Es war eine Krisensituation, aber sie brachte mir Selbstständigkeit.", en: "It was a crisis, but it brought me independence." },
    { task: "Deine Freundin fragt, wie die Bedingungen damals waren.", taskEn: "Your friend asks what conditions were like back then.", de: "Die Verhältnisse waren schwierig, doch mein Optimismus blieb.", en: "Conditions were difficult, but my optimism remained." },
    { task: "Rollenspiel: Ihr erzählt euch Kindheitserinnerungen.", taskEn: "Role-play: you tell each other childhood memories.", de: "Ich wuchs auf dem Land auf und hatte wenig. Und du? — Ich hatte eine schöne Kindheit.", en: "I grew up in the countryside and had little. And you? — I had a lovely childhood." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short biography or diary entry (six to eight sentences) about yourself or someone you admire — use the Präteritum throughout, including sein, haben, at least one modal verb, and at least two irregular verbs from this chapter.',
    starters: ['Er/Sie war …', 'Damals hatte …', 'Eines Tages …', 'Schließlich …'],
    placeholder: 'Meine Großmutter war eine mutige Frau. Sie hatte immer Sehnsucht nach Abenteuern …',
    minWords: 50
  },

  // ---------- Exercises (4 types + Präteritum-specific, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which is the correct Präteritum of "gehen"?',
      options: ['gegangen', 'ging', 'gehte'],
      answer: 1,
      explain: 'gehen → ging is the irregular Präteritum form.'
    },
    gap: {
      sentence: ['Ich ', ' gestern keine Zeit.'],
      gaps: [ { answer: 'hatte', accepts: ['hatte'] } ],
      explain: 'ich hatte is the Präteritum of haben.'
    },
    match: {
      q: 'Match each infinitive to its Präteritum form.',
      pairs: [
        { noun: 'kommen', art: 'kam' },
        { noun: 'finden', art: 'fand' },
        { noun: 'wissen', art: 'wusste' },
        { noun: 'sehen', art: 'sah' }
      ]
    },
    builder: {
      target: 'Build: "He was a professional soldier."',
      bank: ['Er', 'war', 'Berufssoldat', '.'],
      answer: ['Er', 'war', 'Berufssoldat', '.'],
      roles: { 'Er': 'r-subject', 'war': 'r-verb', 'Berufssoldat': 'r-subject' }
    },
    transform: {
      title: 'Transform: Perfekt → Präteritum',
      prompt: 'Rewrite in the Präteritum: "Ich bin nach Hause gegangen."',
      answer: 'Ich ging nach Hause.',
      explain: 'gehen → ging is the irregular Präteritum form, replacing bin + Partizip II.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich war gegangen und ich konnte gegangen.',
      right: 'Ich ging, und ich konnte gehen.',
      explain: 'Never mix war/hatte with a Partizip II for simple narration, and modal verbs in the Präteritum take a plain infinitive, not a Partizip II.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich ___ gestern krank."', options: ['bin', 'war', 'hatte'], answer: 1,
      explain: 'ich war is the Präteritum of sein.' },
    { q: 'Which is the correct Präteritum of "können"?', options: ['konnte', 'gekonnt', 'kannte'], answer: 0,
      explain: 'können → konnte is the modal verb Präteritum form.' },
    { q: 'Which sentence is correct?', options: ['Ich war gegangen.', 'Ich ging nach Hause.', 'Ich habe gegangen.'], answer: 1,
      explain: 'ging is the plain Präteritum of gehen — no mixing with war or habe needed.' },
    { q: 'Which register mostly uses the Präteritum?', options: ['Spoken conversation', 'Newspapers and stories', 'Text messages'], answer: 1,
      explain: 'Präteritum dominates written German: stories, newspapers, formal writing.' },
    { q: 'Which sentence contains an error?', options: ['Wir hatten viel Arbeit.', 'Er wollte Arzt werden.', 'Ich konnte gegangen.'], answer: 2,
      explain: 'Modal verbs in the Präteritum need a plain infinitive: "Ich konnte gehen," not "Ich konnte gegangen."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Use the <span class="de r-verb">Präteritum</span> of <b>sein</b> (war) and <b>haben</b> (hatte) almost everywhere — spoken or written.' },
    { c: 'r-verb', html: 'Modal verbs (konnte, musste, durfte, wollte, sollte) also prefer the Präteritum, even in speech.' },
    { c: 'r-verb', html: 'Learn the common irregular verbs — ging, kam, fand, gab, wusste, dachte, brachte, stand, lag, sah, wurde — for reading stories and newspapers.' }
  ],
  revisionTips: [
    'Drill sein and haben in the Präteritum until they\'re automatic — you\'ll use them constantly, in speech too.',
    'Notice modal verbs defaulting to Präteritum even in casual conversation — that\'s normal, not formal.',
    'When reading anything in German — a story, an article, a biography — expect Präteritum and watch for the eleven common irregular forms.'
  ]
};

window.CHAPTER = CHAPTER;
