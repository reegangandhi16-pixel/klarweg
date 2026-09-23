/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 22
   "Berufe & Arbeit"  (Jobs, workplaces & work routines)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-22 word list (135 words).
   Recycles Chapters 1–21 throughout. Theme = jobs after class.
============================================================ */
const CHAPTER = {
  id: 'a1-22-berufe',
  phase: 'A1 · Phase 2',
  number: 22,
  title: 'Berufe & Arbeit',
  titleEn: 'Jobs & Work',
  description: 'Say what you do for a living and where you work. Learn the professions (and their female forms), the workplace words, and the two patterns that carry every job conversation — Ich bin Lehrer and Ich arbeite als Ärztin.',
  xp: 170,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 23, title: 'Possessivartikel & Familie', titleEn: 'Possessives & Family' , href: 'chapter-a1-23-familie.html' },

  prevChapter: { number: 21, title: 'Uhrzeit', titleEn: 'Telling the Time', href: 'chapter-a1-21-uhrzeit.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Career day comes up in the canteen. Lea wants to be a doctor, Erik has just landed an engineering job, and between the two of them the two job patterns keep resurfacing: Ich bin … and Ich arbeite als …',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear "Ich bin Arzt" vs "Ich arbeite als …" in real speech'
    ],
    scene: 'In der Mensa \u2014 \u00fcber Berufe, Berlin',
    femaleSpeakers: ['Lea'],
    dialogue: [
      { speaker: 'Lea', tokens: [
        { w: 'Erik', role: 'r-name', en: 'Erik', hi: 'एरिक', pron: 'AY-rik', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'machst', role: 'r-verb', en: 'do', hi: 'करते हो', pron: 'makhst', type: 'Verb · machen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'beruflich', role: 'r-adverb', en: 'professionally', hi: 'पेशे से', pron: 'be-ROOF-likh', type: 'Adverb', why: '"Was machst du beruflich?" = what do you do for a living (this chapter).', ex: 'Was machst du beruflich?', exEn: 'What do you do for a living?' },
        { w: '?', plain: true }
      ], en: 'Erik! What do you do for a living now?', hi: 'Erik! Ab tum peshe se kya karte ho?' },
      { speaker: 'Erik', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'arbeite', role: 'r-verb', en: 'work', hi: 'काम करता हूँ', pron: 'AR-by-tuh', type: 'Verb · arbeiten (ich)' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition · profession', why: '"arbeiten als" + profession, no article (this chapter).', ex: 'Ich arbeite als Ingenieur.', exEn: 'I work as an engineer.' },
        { w: 'Ingenieur', role: 'r-object', en: 'engineer', hi: 'इंजीनियर', pron: 'in-zhe-NYÖR', type: 'Noun · masc.', why: 'der Ingenieur (this chapter).', ex: 'Er ist Ingenieur.', exEn: 'He is an engineer.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I work as an engineer. And you?', hi: 'Main engineer ke roop mein kaam karta hoon. Aur tum?' },
      { speaker: 'Lea', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'Studentin', role: 'r-object', en: 'student (f)', hi: 'छात्रा', pron: 'shtu-DEN-tin', type: 'Noun · fem.', why: 'Female forms add -in: Student → Studentin (this chapter).', ex: 'Ich bin Studentin.', exEn: 'I am a student.' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'want to', hi: 'चाहती हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition · profession' },
        { w: 'Ärztin', role: 'r-object', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.', why: 'die Ärztin (this chapter).', ex: 'Sie arbeitet als Ärztin.', exEn: 'She works as a doctor.' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am still a student. But I want to work as a doctor.', hi: 'Main abhi bhi chhatra hoon. Par main doctor ke roop mein kaam karna chahti hoon.' },
      { speaker: 'Erik', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'toll', role: 'r-adjective', en: 'great', hi: 'शानदार', pron: 'tol', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'willst', role: 'r-modalverb', en: 'do you want to', hi: 'चाहती हो', pron: 'vilst', type: 'Modal · wollen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Really? That is great! Where do you want to work?', hi: 'Sach mein? Yeh shaandaar hai! Tum kahaan kaam karna chahti ho?' },
      { speaker: 'Lea', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Krankenhaus', role: 'r-place', en: 'hospital', hi: 'अस्पताल', pron: 'KRAN-ken-hows', type: 'Noun · neut.', why: 'das Krankenhaus (this chapter).', ex: 'Sie arbeitet im Krankenhaus.', exEn: 'She works in the hospital.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive' },
        { w: 'Büro', role: 'r-subject', en: 'office', hi: 'दफ़्तर', pron: 'bü-RO', type: 'Noun · neut.', why: 'das Büro (this chapter).', ex: 'Mein Büro ist hier.', exEn: 'My office is here.' },
        { w: '?', plain: true }
      ], en: 'In the hospital. And where is your office?', hi: 'Aspataal mein. Aur tumhaara daftar kahaan hai?' },
      { speaker: 'Erik', side: 'right', tokens: [
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '.', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Arbeitszeit', role: 'r-subject', en: 'working hours', hi: 'काम का समय', pron: 'AR-byts-tsyte', type: 'Noun · fem.', why: 'die Arbeitszeit (this chapter).', ex: 'Meine Arbeitszeit ist lang.', exEn: 'My working hours are long.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition · von … bis' },
        { w: 'neun', role: 'r-time', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · von … bis' },
        { w: 'fünf', role: 'r-time', en: 'five', hi: 'पाँच', pron: 'fünf', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'Here in Berlin. My working hours are from nine to five.', hi: 'Yahaan Berlin mein. Mera kaam ka samay nau se paanch tak hai.' },
      { speaker: 'Lea', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nette', role: 'r-adjective', en: 'nice', hi: 'अच्छे', pron: 'NE-tuh', type: 'Adjective' },
        { w: 'Kollegen', role: 'r-akkusativ', en: 'colleagues', hi: 'सहकर्मी', pron: 'ko-LAY-gen', type: 'Noun · plural', why: 'der Kollege → die Kollegen (this chapter).', ex: 'Meine Kollegen sind nett.', exEn: 'My colleagues are nice.' },
        { w: '?', plain: true }
      ], en: 'That is good! Do you have nice colleagues?', hi: 'Yeh achha hai! Kya tumhaare sahkarmi achhe hain?' },
      { speaker: 'Erik', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'nette', role: 'r-adjective', en: 'nice', hi: 'अच्छे', pron: 'NE-tuh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Chef', role: 'r-subject', en: 'boss', hi: 'बॉस', pron: 'shef', type: 'Noun · masc.', why: 'der Chef (this chapter).', ex: 'Mein Chef ist nett.', exEn: 'My boss is nice.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'freundlich', role: 'r-adjective', en: 'friendly', hi: 'मिलनसार', pron: 'FROYNT-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, very nice. My boss is friendly too.', hi: 'Haan, bahut achhe. Mera boss bhi milansaar hai.' },
      { speaker: 'Lea', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'guten', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-ten', type: 'Adjective' },
        { w: 'Job', role: 'r-akkusativ', en: 'job', hi: 'नौकरी', pron: 'job', type: 'Noun · masc.', why: 'der Job (this chapter).', ex: 'Er hat einen guten Job.', exEn: 'He has a good job.' },
        { w: '.', plain: true }
      ], en: 'Lovely! Then you have a good job.', hi: 'Badhiya! Toh tumhaari naukri achhi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Talking about work runs on two patterns. To name the job: <span class="de">Ich bin <span class="r-object">Lehrer</span>.</span> (no article!). To describe the activity: <span class="de">Ich arbeite <span class="r-preposition">als</span> <span class="r-object">Ärztin</span>.</span> And almost every job has a female form ending in <strong>-in</strong>: Lehrer → Lehrer<strong>in</strong>, Arzt → Ärzt<strong>in</strong>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is JOBS & WORK (Berufe & Arbeit): naming professions, female forms in -in, workplaces, and saying what you do with "Ich bin …" and "Ich arbeite als …". ' +
    'The learner wrote sentences about jobs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- To state a profession, German drops the article: "Ich bin Lehrer." / "Sie ist Ärztin." (NOT "Ich bin ein Lehrer" in neutral statements).\n' +
    '- "arbeiten als" + profession, also no article: "Ich arbeite als Ingenieur."\n' +
    '- Female forms add -in (often + umlaut): Lehrer→Lehrerin, Arzt→Ärztin, Koch→Köchin, Krankenpfleger→Krankenpflegerin, Verkäufer→Verkäuferin.\n' +
    '- Workplace uses "in" + dative: "im Büro" (in dem), "im Krankenhaus", "in einer Schule".\n' +
    '- Ask jobs: "Was machst du beruflich?" / "Was bist du von Beruf?" / "Wo arbeitest du?".\n' +
    '- arbeiten is regular: ich arbeite, du arbeitest, er arbeitet (extra -e- before -st/-t). verdienen = to earn.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Job-pattern check:</b> one sentence on "Ich bin …" (no article) vs "Ich arbeite als …".</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you can name jobs and say where you work. On to <span class="de">Possessivartikel & Familie</span>.',
    mid: 'Good. Re-read the "Ich bin … / Ich arbeite als …" card and the -in forms once, then continue.',
    low: 'Worth another pass — focus on the two job patterns in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'arbeite', role: 'r-verb' },
    { w: 'als', role: 'r-preposition' }, { w: 'Lehrer', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the two job patterns before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Talk careers with Lea and Lea — hear "Ich bin …" and "Ich arbeite als …".' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the professions (with female forms), workplaces, and work-routine words.' },
    { id: 'grammar',    label: 'Talking about jobs', tag: 'core',
      objective: 'Master Ich bin … (no article), Ich arbeite als …, female -in forms, and asking about work.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a work-day text and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who does what job and where, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you do, ask about jobs, and run a short interview roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five job sentences and a short paragraph about your work or future work.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill professions, female forms, and the job patterns with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All professions (with female forms), workplaces and work-routine words, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Profession matching, -in form drills, job-pattern practice, and an interview writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Ich bin … / Ich arbeite als …, female -in forms, workplace prepositions, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin Lehrer.', text: 'Name a profession (no article)' },
    { de: 'Ich arbeite als …', text: 'Say what you work as' },
    { de: 'Lehrer → Lehrerin', text: 'Form the female version' },
    { de: 'im Büro / Krankenhaus', text: 'Say where you work' },
    { de: 'Was machst du beruflich?', text: 'Ask about someone\'s job' }
  ],

  // ---------- Vocabulary (135 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Büro', art: 'das', gender: 'n', plural: 'Büros', pos: 'noun', en: 'office', hi: 'दफ़्तर', ex: 'Ich arbeite in einem Büro.', exEn: 'I work in an office.' },
    { de: 'Arzt', art: 'der', gender: 'm', plural: 'Ärzte', pos: 'noun', en: 'doctor (m)', hi: 'डॉक्टर', ex: 'Er ist Arzt.', exEn: 'He is a doctor.' },
    { de: 'Beruf', art: 'der', gender: 'm', plural: 'Berufe', pos: 'noun', en: 'profession', hi: 'पेशा', ex: 'Was bist du von Beruf?', exEn: 'What is your profession?' },
    { de: 'Lehrer', art: 'der', gender: 'm', plural: 'Lehrer', pos: 'noun', en: 'teacher (m)', hi: 'अध्यापक', ex: 'Mein Lehrer ist nett.', exEn: 'My teacher is nice.' },
    { de: 'Student', art: 'der', gender: 'm', plural: 'Studenten', pos: 'noun', en: 'student (m)', hi: 'छात्र', ex: 'Er ist Student.', exEn: 'He is a student.' },
    { de: 'Urlaub', art: 'der', gender: 'm', plural: 'Urlaube', pos: 'noun', en: 'holiday, vacation', hi: 'छुट्टी', ex: 'Ich habe Urlaub.', exEn: 'I am on holiday.' },
    { de: 'Arbeit', art: 'die', gender: 'f', plural: 'Arbeiten', pos: 'noun', en: 'work', hi: 'काम', ex: 'Die Arbeit ist interessant.', exEn: 'The work is interesting.' },
    { de: 'Arbeitszeit', art: 'die', gender: 'f', plural: 'Arbeitszeiten', pos: 'noun', en: 'working hours', hi: 'काम का समय', ex: 'Meine Arbeitszeit ist lang.', exEn: 'My working hours are long.' },
    { de: 'Lehrerin', art: 'die', gender: 'f', plural: 'Lehrerinnen', pos: 'noun', en: 'teacher (f)', hi: 'अध्यापिका', ex: 'Frau Weber ist Lehrerin.', exEn: 'Frau Weber is a teacher.' },
    { de: 'Studentin', art: 'die', gender: 'f', plural: 'Studentinnen', pos: 'noun', en: 'student (f)', hi: 'छात्रा', ex: 'Anna ist Studentin.', exEn: 'Anna is a student.' },
    { de: 'Stunde', art: 'die', gender: 'f', plural: 'Stunden', pos: 'noun', en: 'hour', hi: 'घंटा', ex: 'Ich arbeite acht Stunden.', exEn: 'I work eight hours.' },
    { de: 'Ärztin', art: 'die', gender: 'f', plural: 'Ärztinnen', pos: 'noun', en: 'doctor (f)', hi: 'डॉक्टर', ex: 'Sie ist Ärztin.', exEn: 'She is a doctor.' },
    // ===== Active Support =====
    { de: 'als', pos: 'preposition', en: 'as', hi: 'के रूप में', ex: 'Ich arbeite als Lehrer.', exEn: 'I work as a teacher.' },
    { de: 'arbeitslos', pos: 'adjective', en: 'unemployed', hi: 'बेरोज़गार', ex: 'Er ist arbeitslos.', exEn: 'He is unemployed.' },
    { de: 'beantworten', pos: 'verb', en: 'to answer', hi: 'जवाब देना', ex: 'Ich beantworte die Frage.', exEn: 'I answer the question.', conj: { praesens: 'beantwortet', praeteritum: 'beantwortete', perfekt: 'hat beantwortet' } },
    { de: 'Geld', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'money', hi: 'पैसा', ex: 'Ich verdiene Geld.', exEn: 'I earn money.' },
    { de: 'Praktikum', art: 'das', gender: 'n', plural: 'Praktika', pos: 'noun', en: 'internship', hi: 'इंटर्नशिप', ex: 'Ich mache ein Praktikum.', exEn: 'I do an internship.' },
    { de: 'Team', art: 'das', gender: 'n', plural: 'Teams', pos: 'noun', en: 'team', hi: 'टीम', ex: 'Mein Team ist gut.', exEn: 'My team is good.' },
    { de: 'Arbeitsalltag', art: 'der', gender: 'm', plural: 'Arbeitsalltage', pos: 'noun', en: 'workday, daily work', hi: 'कार्यदिवस', ex: 'Der Arbeitsalltag ist lang.', exEn: 'The workday is long.' },
    { de: 'Arbeitsplatz', art: 'der', gender: 'm', plural: 'Arbeitsplätze', pos: 'noun', en: 'workplace', hi: 'कार्यस्थल', ex: 'Mein Arbeitsplatz ist ein Büro.', exEn: 'My workplace is an office.' },
    { de: 'Architekt', art: 'der', gender: 'm', plural: 'Architekten', pos: 'noun', en: 'architect (m)', hi: 'वास्तुकार', ex: 'Er ist Architekt.', exEn: 'He is an architect.' },
    { de: 'Chef', art: 'der', gender: 'm', plural: 'Chefs', pos: 'noun', en: 'boss (m)', hi: 'मालिक', ex: 'Mein Chef ist freundlich.', exEn: 'My boss is friendly.' },
    { de: 'Feierabend', art: 'der', gender: 'm', plural: 'Feierabende', pos: 'noun', en: 'end of the work day', hi: 'काम के बाद का समय', ex: 'Schönen Feierabend!', exEn: 'Have a nice evening (after work)!' },
    { de: 'Friseur', art: 'der', gender: 'm', plural: 'Friseure', pos: 'noun', en: 'hairdresser (m)', hi: 'नाई', ex: 'Der Friseur arbeitet schnell.', exEn: 'The hairdresser works fast.' },
    { de: 'Ingenieur', art: 'der', gender: 'm', plural: 'Ingenieure', pos: 'noun', en: 'engineer (m)', hi: 'इंजीनियर', ex: 'Ich arbeite als Ingenieur.', exEn: 'I work as an engineer.' },
    { de: 'Job', art: 'der', gender: 'm', plural: 'Jobs', pos: 'noun', en: 'job', hi: 'नौकरी', ex: 'Ich suche einen Job.', exEn: 'I am looking for a job.' },
    { de: 'Koch', art: 'der', gender: 'm', plural: 'Köche', pos: 'noun', en: 'cook, chef (m)', hi: 'रसोइया', ex: 'Der Koch macht Pizza.', exEn: 'The cook makes pizza.' },
    { de: 'Kollege', art: 'der', gender: 'm', plural: 'Kollegen', pos: 'noun', en: 'colleague (m)', hi: 'सहकर्मी', ex: 'Mein Kollege ist nett.', exEn: 'My colleague is nice.' },
    { de: 'Krankenpfleger', art: 'der', gender: 'm', plural: 'Krankenpfleger', pos: 'noun', en: 'nurse (m)', hi: 'नर्स', ex: 'Er ist Krankenpfleger.', exEn: 'He is a nurse.' },
    { de: 'Kurs', art: 'der', gender: 'm', plural: 'Kurse', pos: 'noun', en: 'course', hi: 'कोर्स', ex: 'Der Kurs beginnt um neun.', exEn: 'The course begins at nine.' },
    { de: 'Mitarbeiter', art: 'der', gender: 'm', plural: 'Mitarbeiter', pos: 'noun', en: 'co-worker (m)', hi: 'कर्मचारी', ex: 'Der Mitarbeiter hilft mir.', exEn: 'The co-worker helps me.' },
    { de: 'Taxifahrer', art: 'der', gender: 'm', plural: 'Taxifahrer', pos: 'noun', en: 'taxi driver (m)', hi: 'टैक्सी चालक', ex: 'Der Taxifahrer fährt schnell.', exEn: 'The taxi driver drives fast.' },
    { de: 'Verkäufer', art: 'der', gender: 'm', plural: 'Verkäufer', pos: 'noun', en: 'salesperson (m)', hi: 'विक्रेता', ex: 'Der Verkäufer ist freundlich.', exEn: 'The salesperson is friendly.' },
    { de: 'Architektin', art: 'die', gender: 'f', plural: 'Architektinnen', pos: 'noun', en: 'architect (f)', hi: 'वास्तुकार', ex: 'Sie ist Architektin.', exEn: 'She is an architect.' },
    { de: 'Bewerbung', art: 'die', gender: 'f', plural: 'Bewerbungen', pos: 'noun', en: 'job application', hi: 'आवेदन', ex: 'Ich schreibe eine Bewerbung.', exEn: 'I write a job application.' },
    { de: 'Chefin', art: 'die', gender: 'f', plural: 'Chefinnen', pos: 'noun', en: 'boss (f)', hi: 'मालकिन', ex: 'Meine Chefin ist streng.', exEn: 'My boss is strict.' },
    { de: 'Friseurin', art: 'die', gender: 'f', plural: 'Friseurinnen', pos: 'noun', en: 'hairdresser (f)', hi: 'नाई', ex: 'Die Friseurin ist nett.', exEn: 'The hairdresser is nice.' },
    { de: 'Ingenieurin', art: 'die', gender: 'f', plural: 'Ingenieurinnen', pos: 'noun', en: 'engineer (f)', hi: 'इंजीनियर', ex: 'Sie arbeitet als Ingenieurin.', exEn: 'She works as an engineer.' },
    { de: 'Kollegin', art: 'die', gender: 'f', plural: 'Kolleginnen', pos: 'noun', en: 'colleague (f)', hi: 'सहकर्मी', ex: 'Meine Kollegin ist klug.', exEn: 'My colleague is clever.' },
    { de: 'Krankenpflegerin', art: 'die', gender: 'f', plural: 'Krankenpflegerinnen', pos: 'noun', en: 'nurse (f)', hi: 'नर्स', ex: 'Sie ist Krankenpflegerin.', exEn: 'She is a nurse.' },
    { de: 'Köchin', art: 'die', gender: 'f', plural: 'Köchinnen', pos: 'noun', en: 'cook, chef (f)', hi: 'रसोइया', ex: 'Die Köchin kocht gut.', exEn: 'The cook cooks well.' },
    { de: 'Mitarbeiterin', art: 'die', gender: 'f', plural: 'Mitarbeiterinnen', pos: 'noun', en: 'co-worker (f)', hi: 'कर्मचारी', ex: 'Die Mitarbeiterin ist neu.', exEn: 'The co-worker is new.' },
    { de: 'Mittagspause', art: 'die', gender: 'f', plural: 'Mittagspausen', pos: 'noun', en: 'lunch break', hi: 'दोपहर का अवकाश', ex: 'Die Mittagspause ist um eins.', exEn: 'The lunch break is at one.' },
    { de: 'Pause', art: 'die', gender: 'f', plural: 'Pausen', pos: 'noun', en: 'break', hi: 'विराम', ex: 'Wir machen eine Pause.', exEn: 'We take a break.' },
    { de: 'Stelle', art: 'die', gender: 'f', plural: 'Stellen', pos: 'noun', en: 'position, job', hi: 'पद', ex: 'Ich suche eine Stelle.', exEn: 'I am looking for a position.' },
    { de: 'Taxifahrerin', art: 'die', gender: 'f', plural: 'Taxifahrerinnen', pos: 'noun', en: 'taxi driver (f)', hi: 'टैक्सी चालक', ex: 'Die Taxifahrerin kennt die Stadt.', exEn: 'The taxi driver knows the city.' },
    { de: 'Verkäuferin', art: 'die', gender: 'f', plural: 'Verkäuferinnen', pos: 'noun', en: 'salesperson (f)', hi: 'विक्रेता', ex: 'Die Verkäuferin hilft mir.', exEn: 'The salesperson helps me.' },
    { de: 'freihaben', pos: 'verb', en: 'to have time off', hi: 'छुट्टी होना', ex: 'Am Sonntag habe ich frei.', exEn: 'On Sunday I have off.', conj: { praesens: 'hat frei', praeteritum: 'hatte frei', perfekt: 'hat freigehabt' } },
    { de: 'geben (Unterricht)', pos: 'verb', en: 'to give (lessons)', hi: 'पढ़ाना', ex: 'Sie gibt Deutschunterricht.', exEn: 'She gives German lessons.', conj: { praesens: 'gibt', praeteritum: 'gab', perfekt: 'hat gegeben' } },
    { de: 'pro', pos: 'preposition', en: 'per', hi: 'प्रति', ex: 'Ich arbeite acht Stunden pro Tag.', exEn: 'I work eight hours per day.' },
    { de: 'verdienen', pos: 'verb', en: 'to earn', hi: 'कमाना', ex: 'Ich verdiene gut.', exEn: 'I earn well.', conj: { praesens: 'verdient', praeteritum: 'verdiente', perfekt: 'hat verdient' } },
    // ===== Passive =====
    { de: 'betreuen', pos: 'verb', en: 'to supervise, look after', hi: 'देखभाल करना', ex: 'Sie betreut die Kinder.', exEn: 'She looks after the children.', conj: { praesens: 'betreut', praeteritum: 'betreute', perfekt: 'hat betreut' } },
    { de: 'Atelier', art: 'das', gender: 'n', plural: 'Ateliers', pos: 'noun', en: 'studio', hi: 'स्टूडियो', ex: 'Der Künstler hat ein Atelier.', exEn: 'The artist has a studio.' },
    { de: 'Job-Portal', art: 'das', gender: 'n', plural: 'Job-Portale', pos: 'noun', en: 'job portal', hi: 'नौकरी पोर्टल', ex: 'Ich suche im Job-Portal.', exEn: 'I search on the job portal.' },
    { de: 'Krankenhaus', art: 'das', gender: 'n', plural: 'Krankenhäuser', pos: 'noun', en: 'hospital', hi: 'अस्पताल', ex: 'Sie arbeitet im Krankenhaus.', exEn: 'She works in the hospital.' },
    { de: 'Labor', art: 'das', gender: 'n', plural: 'Labore', pos: 'noun', en: 'laboratory', hi: 'प्रयोगशाला', ex: 'Er arbeitet im Labor.', exEn: 'He works in the lab.' },
    { de: 'Profil', art: 'das', gender: 'n', plural: 'Profile', pos: 'noun', en: 'profile', hi: 'प्रोफ़ाइल', ex: 'Mein Profil ist online.', exEn: 'My profile is online.' },
    { de: 'Seminar', art: 'das', gender: 'n', plural: 'Seminare', pos: 'noun', en: 'seminar', hi: 'सेमिनार', ex: 'Das Seminar ist heute.', exEn: 'The seminar is today.' },
    { de: 'Designer', art: 'der', gender: 'm', plural: 'Designer', pos: 'noun', en: 'designer (m)', hi: 'डिज़ाइनर', ex: 'Er ist Designer.', exEn: 'He is a designer.' },
    { de: 'Elektriker', art: 'der', gender: 'm', plural: 'Elektriker', pos: 'noun', en: 'electrician (m)', hi: 'बिजली मिस्त्री', ex: 'Der Elektriker kommt heute.', exEn: 'The electrician comes today.' },
    { de: 'Erzieher', art: 'der', gender: 'm', plural: 'Erzieher', pos: 'noun', en: 'childcare worker (m)', hi: 'शिक्षक', ex: 'Er ist Erzieher.', exEn: 'He is a childcare worker.' },
    { de: 'Fotograf', art: 'der', gender: 'm', plural: 'Fotografen', pos: 'noun', en: 'photographer (m)', hi: 'फ़ोटोग्राफ़र', ex: 'Der Fotograf macht Fotos.', exEn: 'The photographer takes photos.' },
    { de: 'Handwerker', art: 'der', gender: 'm', plural: 'Handwerker', pos: 'noun', en: 'craftsman', hi: 'कारीगर', ex: 'Der Handwerker repariert das.', exEn: 'The craftsman repairs it.' },
    { de: 'Hausmeister', art: 'der', gender: 'm', plural: 'Hausmeister', pos: 'noun', en: 'caretaker (m)', hi: 'चौकीदार', ex: 'Der Hausmeister hat den Schlüssel.', exEn: 'The caretaker has the key.' },
    { de: 'Hotelchef', art: 'der', gender: 'm', plural: 'Hotelchefs', pos: 'noun', en: 'hotel manager (m)', hi: 'होटल प्रबंधक', ex: 'Der Hotelchef ist streng.', exEn: 'The hotel manager is strict.' },
    { de: 'Händler', art: 'der', gender: 'm', plural: 'Händler', pos: 'noun', en: 'merchant, trader (m)', hi: 'व्यापारी', ex: 'Der Händler verkauft Obst.', exEn: 'The merchant sells fruit.' },
    { de: 'Informatiker', art: 'der', gender: 'm', plural: 'Informatiker', pos: 'noun', en: 'IT specialist (m)', hi: 'आईटी विशेषज्ञ', ex: 'Er ist Informatiker.', exEn: 'He is an IT specialist.' },
    { de: 'Journalist', art: 'der', gender: 'm', plural: 'Journalisten', pos: 'noun', en: 'journalist (m)', hi: 'पत्रकार', ex: 'Der Journalist schreibt viel.', exEn: 'The journalist writes a lot.' },
    { de: 'Jurist', art: 'der', gender: 'm', plural: 'Juristen', pos: 'noun', en: 'lawyer (m)', hi: 'वकील', ex: 'Der Jurist kennt das Gesetz.', exEn: 'The lawyer knows the law.' },
    { de: 'Kundenbesuch', art: 'der', gender: 'm', plural: 'Kundenbesuche', pos: 'noun', en: 'client visit', hi: 'ग्राहक मुलाक़ात', ex: 'Ich habe einen Kundenbesuch.', exEn: 'I have a client visit.' },
    { de: 'Kursraum', art: 'der', gender: 'm', plural: 'Kursräume', pos: 'noun', en: 'course room', hi: 'कक्षा', ex: 'Der Kursraum ist groß.', exEn: 'The course room is big.' },
    { de: 'Künstler', art: 'der', gender: 'm', plural: 'Künstler', pos: 'noun', en: 'artist (m)', hi: 'कलाकार', ex: 'Der Künstler malt ein Bild.', exEn: 'The artist paints a picture.' },
    { de: 'Laborant', art: 'der', gender: 'm', plural: 'Laboranten', pos: 'noun', en: 'lab assistant (m)', hi: 'प्रयोगशाला सहायक', ex: 'Der Laborant arbeitet im Labor.', exEn: 'The lab assistant works in the lab.' },
    { de: 'Mechaniker', art: 'der', gender: 'm', plural: 'Mechaniker', pos: 'noun', en: 'mechanic (m)', hi: 'मैकेनिक', ex: 'Der Mechaniker repariert das Auto.', exEn: 'The mechanic repairs the car.' },
    { de: 'Modedesigner', art: 'der', gender: 'm', plural: 'Modedesigner', pos: 'noun', en: 'fashion designer (m)', hi: 'फ़ैशन डिज़ाइनर', ex: 'Er ist Modedesigner.', exEn: 'He is a fashion designer.' },
    { de: 'Notarzt', art: 'der', gender: 'm', plural: 'Notärzte', pos: 'noun', en: 'emergency doctor (m)', hi: 'आपातकालीन डॉक्टर', ex: 'Der Notarzt kommt schnell.', exEn: 'The emergency doctor comes fast.' },
    { de: 'Physiotherapeut', art: 'der', gender: 'm', plural: 'Physiotherapeuten', pos: 'noun', en: 'physiotherapist (m)', hi: 'फ़िज़ियोथेरेपिस्ट', ex: 'Der Physiotherapeut hilft mir.', exEn: 'The physiotherapist helps me.' },
    { de: 'Polizist', art: 'der', gender: 'm', plural: 'Polizisten', pos: 'noun', en: 'police officer (m)', hi: 'पुलिसकर्मी', ex: 'Der Polizist regelt den Verkehr.', exEn: 'The police officer directs traffic.' },
    { de: 'Professor', art: 'der', gender: 'm', plural: 'Professoren', pos: 'noun', en: 'professor (m)', hi: 'प्रोफ़ेसर', ex: 'Der Professor hält eine Vorlesung.', exEn: 'The professor gives a lecture.' },
    { de: 'Regisseur', art: 'der', gender: 'm', plural: 'Regisseure', pos: 'noun', en: 'director (m)', hi: 'निर्देशक', ex: 'Der Regisseur dreht einen Film.', exEn: 'The director shoots a film.' },
    { de: 'Saison-Job', art: 'der', gender: 'm', plural: 'Saison-Jobs', pos: 'noun', en: 'seasonal job', hi: 'मौसमी नौकरी', ex: 'Im Sommer habe ich einen Saison-Job.', exEn: 'In summer I have a seasonal job.' },
    { de: 'Schauspieler', art: 'der', gender: 'm', plural: 'Schauspieler', pos: 'noun', en: 'actor', hi: 'अभिनेता', ex: 'Der Schauspieler ist berühmt.', exEn: 'The actor is famous.' },
    { de: 'Segellehrer', art: 'der', gender: 'm', plural: 'Segellehrer', pos: 'noun', en: 'sailing instructor (m)', hi: 'नौकायन प्रशिक्षक', ex: 'Der Segellehrer ist am See.', exEn: 'The sailing instructor is at the lake.' },
    { de: 'Sekretär', art: 'der', gender: 'm', plural: 'Sekretäre', pos: 'noun', en: 'secretary (m)', hi: 'सचिव', ex: 'Der Sekretär schreibt E-Mails.', exEn: 'The secretary writes emails.' },
    { de: 'Sportler', art: 'der', gender: 'm', plural: 'Sportler', pos: 'noun', en: 'athlete (m)', hi: 'खिलाड़ी', ex: 'Der Sportler trainiert viel.', exEn: 'The athlete trains a lot.' },
    { de: 'Statist', art: 'der', gender: 'm', plural: 'Statisten', pos: 'noun', en: 'extra (m)', hi: 'अतिरिक्त कलाकार', ex: 'Er ist Statist im Film.', exEn: 'He is an extra in the film.' },
    { de: 'Techniker', art: 'der', gender: 'm', plural: 'Techniker', pos: 'noun', en: 'technician (m)', hi: 'तकनीशियन', ex: 'Der Techniker repariert das Gerät.', exEn: 'The technician repairs the device.' },
    { de: 'Therapeut', art: 'der', gender: 'm', plural: 'Therapeuten', pos: 'noun', en: 'therapist (m)', hi: 'चिकित्सक', ex: 'Der Therapeut hilft den Patienten.', exEn: 'The therapist helps the patients.' },
    { de: 'Agentur für Arbeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'employment office', hi: 'रोज़गार कार्यालय', ex: 'Ich gehe zur Agentur für Arbeit.', exEn: 'I go to the employment office.' },
    { de: 'Baustelle', art: 'die', gender: 'f', plural: 'Baustellen', pos: 'noun', en: 'construction site', hi: 'निर्माण स्थल', ex: 'Er arbeitet auf der Baustelle.', exEn: 'He works on the construction site.' },
    { de: 'Computerarbeit', art: 'die', gender: 'f', plural: 'Computerarbeiten', pos: 'noun', en: 'computer work', hi: 'कंप्यूटर का काम', ex: 'Ich mache viel Computerarbeit.', exEn: 'I do a lot of computer work.' },
    { de: 'Computerfirma', art: 'die', gender: 'f', plural: 'Computerfirmen', pos: 'noun', en: 'computer company', hi: 'कंप्यूटर कंपनी', ex: 'Sie arbeitet in einer Computerfirma.', exEn: 'She works in a computer company.' },
    { de: 'Designerin', art: 'die', gender: 'f', plural: 'Designerinnen', pos: 'noun', en: 'designer (f)', hi: 'डिज़ाइनर', ex: 'Sie ist Designerin.', exEn: 'She is a designer.' },
    { de: 'Elektrikerin', art: 'die', gender: 'f', plural: 'Elektrikerinnen', pos: 'noun', en: 'electrician (f)', hi: 'बिजली मिस्त्री', ex: 'Die Elektrikerin ist gut.', exEn: 'The electrician is good.' },
    { de: 'Erzieherin', art: 'die', gender: 'f', plural: 'Erzieherinnen', pos: 'noun', en: 'childcare worker (f)', hi: 'शिक्षिका', ex: 'Sie ist Erzieherin.', exEn: 'She is a childcare worker.' },
    { de: 'Fernsehproduktion', art: 'die', gender: 'f', plural: 'Fernsehproduktionen', pos: 'noun', en: 'TV production', hi: 'टीवी निर्माण', ex: 'Sie arbeitet in der Fernsehproduktion.', exEn: 'She works in TV production.' },
    { de: 'Filmproduktion', art: 'die', gender: 'f', plural: 'Filmproduktionen', pos: 'noun', en: 'film production', hi: 'फ़िल्म निर्माण', ex: 'Die Filmproduktion ist teuer.', exEn: 'The film production is expensive.' },
    { de: 'Fotografin', art: 'die', gender: 'f', plural: 'Fotografinnen', pos: 'noun', en: 'photographer (f)', hi: 'फ़ोटोग्राफ़र', ex: 'Die Fotografin ist kreativ.', exEn: 'The photographer is creative.' },
    { de: 'Handwerkerin', art: 'die', gender: 'f', plural: 'Handwerkerinnen', pos: 'noun', en: 'craftswoman', hi: 'कारीगर', ex: 'Die Handwerkerin arbeitet schnell.', exEn: 'The craftswoman works fast.' },
    { de: 'Hausmeisterin', art: 'die', gender: 'f', plural: 'Hausmeisterinnen', pos: 'noun', en: 'caretaker (f)', hi: 'चौकीदार', ex: 'Die Hausmeisterin ist freundlich.', exEn: 'The caretaker is friendly.' },
    { de: 'Hotelchefin', art: 'die', gender: 'f', plural: 'Hotelchefinnen', pos: 'noun', en: 'hotel manager (f)', hi: 'होटल प्रबंधक', ex: 'Die Hotelchefin ist nett.', exEn: 'The hotel manager is nice.' },
    { de: 'Händlerin', art: 'die', gender: 'f', plural: 'Händlerinnen', pos: 'noun', en: 'merchant (f)', hi: 'व्यापारी', ex: 'Die Händlerin verkauft Blumen.', exEn: 'The merchant sells flowers.' },
    { de: 'Informatikerin', art: 'die', gender: 'f', plural: 'Informatikerinnen', pos: 'noun', en: 'IT specialist (f)', hi: 'आईटी विशेषज्ञ', ex: 'Sie ist Informatikerin.', exEn: 'She is an IT specialist.' },
    { de: 'Journalistin', art: 'die', gender: 'f', plural: 'Journalistinnen', pos: 'noun', en: 'journalist (f)', hi: 'पत्रकार', ex: 'Die Journalistin stellt Fragen.', exEn: 'The journalist asks questions.' },
    { de: 'Juristin', art: 'die', gender: 'f', plural: 'Juristinnen', pos: 'noun', en: 'lawyer (f)', hi: 'वकील', ex: 'Die Juristin berät mich.', exEn: 'The lawyer advises me.' },
    { de: 'Kantine', art: 'die', gender: 'f', plural: 'Kantinen', pos: 'noun', en: 'canteen', hi: 'कैंटीन', ex: 'Wir essen in der Kantine.', exEn: 'We eat in the canteen.' },
    { de: 'Karriere', art: 'die', gender: 'f', plural: 'Karrieren', pos: 'noun', en: 'career', hi: 'करियर', ex: 'Sie macht Karriere.', exEn: 'She is building a career.' },
    { de: 'Kursstatistik', art: 'die', gender: 'f', plural: 'Kursstatistiken', pos: 'noun', en: 'class statistic', hi: 'कक्षा आँकड़े', ex: 'Die Kursstatistik ist interessant.', exEn: 'The class statistic is interesting.' },
    { de: 'Künstlerin', art: 'die', gender: 'f', plural: 'Künstlerinnen', pos: 'noun', en: 'artist (f)', hi: 'कलाकार', ex: 'Die Künstlerin malt gern.', exEn: 'The artist likes to paint.' },
    { de: 'Laborantin', art: 'die', gender: 'f', plural: 'Laborantinnen', pos: 'noun', en: 'lab assistant (f)', hi: 'प्रयोगशाला सहायक', ex: 'Die Laborantin arbeitet genau.', exEn: 'The lab assistant works precisely.' },
    { de: 'Mechanikerin', art: 'die', gender: 'f', plural: 'Mechanikerinnen', pos: 'noun', en: 'mechanic (f)', hi: 'मैकेनिक', ex: 'Die Mechanikerin ist erfahren.', exEn: 'The mechanic is experienced.' },
    { de: 'Modedesignerin', art: 'die', gender: 'f', plural: 'Modedesignerinnen', pos: 'noun', en: 'fashion designer (f)', hi: 'फ़ैशन डिज़ाइनर', ex: 'Sie ist Modedesignerin.', exEn: 'She is a fashion designer.' },
    { de: 'Modeschule', art: 'die', gender: 'f', plural: 'Modeschulen', pos: 'noun', en: 'fashion school', hi: 'फ़ैशन विद्यालय', ex: 'Sie geht zur Modeschule.', exEn: 'She goes to fashion school.' },
    { de: 'Musikproduktion', art: 'die', gender: 'f', plural: 'Musikproduktionen', pos: 'noun', en: 'music production', hi: 'संगीत निर्माण', ex: 'Er arbeitet in der Musikproduktion.', exEn: 'He works in music production.' },
    { de: 'Möglichkeit', art: 'die', gender: 'f', plural: 'Möglichkeiten', pos: 'noun', en: 'possibility', hi: 'संभावना', ex: 'Es gibt viele Möglichkeiten.', exEn: 'There are many possibilities.' },
    { de: 'Notärztin', art: 'die', gender: 'f', plural: 'Notärztinnen', pos: 'noun', en: 'emergency doctor (f)', hi: 'आपातकालीन डॉक्टर', ex: 'Die Notärztin hilft sofort.', exEn: 'The emergency doctor helps at once.' },
    { de: 'Physiotherapeutin', art: 'die', gender: 'f', plural: 'Physiotherapeutinnen', pos: 'noun', en: 'physiotherapist (f)', hi: 'फ़िज़ियोथेरेपिस्ट', ex: 'Die Physiotherapeutin ist gut.', exEn: 'The physiotherapist is good.' },
    { de: 'Polizistin', art: 'die', gender: 'f', plural: 'Polizistinnen', pos: 'noun', en: 'police officer (f)', hi: 'पुलिसकर्मी', ex: 'Die Polizistin ist freundlich.', exEn: 'The police officer is friendly.' },
    { de: 'Professorin', art: 'die', gender: 'f', plural: 'Professorinnen', pos: 'noun', en: 'professor (f)', hi: 'प्रोफ़ेसर', ex: 'Die Professorin ist klug.', exEn: 'The professor is clever.' },
    { de: 'Präsentation', art: 'die', gender: 'f', plural: 'Präsentationen', pos: 'noun', en: 'presentation', hi: 'प्रस्तुति', ex: 'Ich halte eine Präsentation.', exEn: 'I give a presentation.' },
    { de: 'Regisseurin', art: 'die', gender: 'f', plural: 'Regisseurinnen', pos: 'noun', en: 'director (f)', hi: 'निर्देशक', ex: 'Die Regisseurin ist berühmt.', exEn: 'The director is famous.' },
    { de: 'Schauspielerin', art: 'die', gender: 'f', plural: 'Schauspielerinnen', pos: 'noun', en: 'actress', hi: 'अभिनेत्री', ex: 'Die Schauspielerin spielt gut.', exEn: 'The actress acts well.' },
    { de: 'Segellehrerin', art: 'die', gender: 'f', plural: 'Segellehrerinnen', pos: 'noun', en: 'sailing instructor (f)', hi: 'नौकायन प्रशिक्षक', ex: 'Die Segellehrerin ist erfahren.', exEn: 'The sailing instructor is experienced.' },
    { de: 'Sekretärin', art: 'die', gender: 'f', plural: 'Sekretärinnen', pos: 'noun', en: 'secretary (f)', hi: 'सचिव', ex: 'Die Sekretärin organisiert alles.', exEn: 'The secretary organises everything.' },
    { de: 'Sportlerin', art: 'die', gender: 'f', plural: 'Sportlerinnen', pos: 'noun', en: 'athlete (f)', hi: 'खिलाड़ी', ex: 'Die Sportlerin trainiert hart.', exEn: 'The athlete trains hard.' },
    { de: 'Statistik', art: 'die', gender: 'f', plural: 'Statistiken', pos: 'noun', en: 'statistics', hi: 'आँकड़े', ex: 'Die Statistik zeigt viel.', exEn: 'The statistic shows a lot.' },
    { de: 'Statistin', art: 'die', gender: 'f', plural: 'Statistinnen', pos: 'noun', en: 'extra (f)', hi: 'अतिरिक्त कलाकार', ex: 'Sie ist Statistin im Film.', exEn: 'She is an extra in the film.' },
    { de: 'Technikerin', art: 'die', gender: 'f', plural: 'Technikerinnen', pos: 'noun', en: 'technician (f)', hi: 'तकनीशियन', ex: 'Die Technikerin repariert das.', exEn: 'The technician repairs it.' },
    { de: 'Therapeutin', art: 'die', gender: 'f', plural: 'Therapeutinnen', pos: 'noun', en: 'therapist (f)', hi: 'चिकित्सक', ex: 'Die Therapeutin hört zu.', exEn: 'The therapist listens.' },
    { de: 'Universität', art: 'die', gender: 'f', plural: 'Universitäten', pos: 'noun', en: 'university', hi: 'विश्वविद्यालय', ex: 'Ich studiere an der Universität.', exEn: 'I study at the university.' },
    { de: 'Werkstatt', art: 'die', gender: 'f', plural: 'Werkstätten', pos: 'noun', en: 'workshop', hi: 'कार्यशाला', ex: 'Das Auto ist in der Werkstatt.', exEn: 'The car is in the workshop.' },
    { de: 'kreativ', pos: 'adjective', en: 'creative', hi: 'रचनात्मक', ex: 'Sie ist sehr kreativ.', exEn: 'She is very creative.' },
    { de: 'länger', pos: 'adverb', en: 'longer', hi: 'अधिक देर', ex: 'Heute arbeite ich länger.', exEn: 'Today I work longer.' },
    { de: 'mehrere', pos: 'determiner', en: 'several', hi: 'कई', ex: 'Ich habe mehrere Jobs.', exEn: 'I have several jobs.' },
    { de: 'präsentieren', pos: 'verb', en: 'to present', hi: 'प्रस्तुत करना', ex: 'Ich präsentiere das Projekt.', exEn: 'I present the project.', conj: { praesens: 'präsentiert', praeteritum: 'präsentierte', perfekt: 'hat präsentiert' } }
  ],

  // ---------- Talking about jobs (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Ich bin … — naming a profession',
      goldenRule: 'Profession after <b>sein</b> takes <b>no article</b>: <span class="de">Ich bin Lehrer.</span>',
      why: 'English needs "a" because it treats the job as one example of a category. German treats the job as a <b>quality</b> of the person, like an adjective — and qualities do not take articles.',
      memoryTrick: 'Kaam batao to article <b>hatao</b>: <b>Ich bin Arzt</b>, "ein Arzt" nahi. Socho jaise adjective bol rahe ho.',
      recap: [
        'No article after <b>sein</b> + profession.',
        'Female forms add <b>-in</b>: Lehrer → Lehrerin.',
        'Use an article only when you describe it: <i>Ich bin ein guter Lehrer.</i>'
      ],
      body: [
        'To say what someone IS, German drops the article. This is different from English ("I am <em>a</em> teacher") — in German it is simply <span class="de">Ich bin Lehrer.</span>'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich bin Lehrer.</span>', 'I am a teacher.'],
          ['<span class="de">Sie ist Ärztin.</span>', 'She is a doctor.'],
          ['<span class="de">Er ist Student.</span>', 'He is a student.'],
          ['<span class="de">Wir sind Ingenieure.</span>', 'We are engineers.']
        ]
      },
      note: 'No <b>ein/eine</b> before the job: "Ich bin Lehrer", NOT "Ich bin ein Lehrer". Use the verb <b>sein</b> + the bare profession.',
      hinglish: 'Pesha batane ke liye German article gira deta hai: <b>Ich bin Lehrer</b> (main teacher hoon) — "ein" nahi! Bas <b>sein</b> + naukri ka naam. English ki tarah "a" mat lagao.'
    },
    {
      title: 'Ich arbeite als … — what you work as',
      body: [
        'The second pattern uses the verb <span class="de r-verb">arbeiten</span> + <span class="de r-preposition">als</span> (as). Again, no article after als.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich arbeite als Ingenieur.</span>', 'I work as an engineer.'],
          ['<span class="de">Sie arbeitet als Köchin.</span>', 'She works as a cook.'],
          ['<span class="de">Er arbeitet als Verkäufer.</span>', 'He works as a salesperson.'],
          ['<span class="de">Ich arbeite im Büro.</span>', 'I work in an office. (place)']
        ]
      },
      note: '<b>als</b> + job (no article): "als Ingenieur". For the workplace use <b>in</b> + dative: <b>im Büro</b>, <b>im Krankenhaus</b>, <b>in einer Schule</b>.',
      hinglish: 'Doosra pattern: <b>arbeiten</b> + <b>als</b> (ke roop mein) — als ke baad bhi article nahi: "Ich arbeite als Ingenieur." Kaam ki jagah ke liye <b>in</b> + dative: <b>im Büro</b>, <b>im Krankenhaus</b>.'
    },
    {
      title: 'Female forms: add -in',
      body: [
        'Almost every German job has a female form. The rule is simple: add <strong>-in</strong> (and sometimes an umlaut).'
      ],
      table: {
        head: ['Male', 'Female', 'Meaning'],
        rows: [
          ['<span class="de">Lehrer</span>', '<span class="de">Lehrerin</span>', 'teacher'],
          ['<span class="de">Arzt</span>', '<span class="de">Ärztin</span>', 'doctor (+ umlaut)'],
          ['<span class="de">Koch</span>', '<span class="de">Köchin</span>', 'cook (+ umlaut)'],
          ['<span class="de">Verkäufer</span>', '<span class="de">Verkäuferin</span>', 'salesperson']
        ]
      },
      note: 'Add <b>-in</b> for the female form: Lehrer → Lehrer<b>in</b>. Some also add an umlaut: Arzt → <b>Ä</b>rztin, Koch → K<b>ö</b>chin. The plural female ending is <b>-innen</b>.',
      hinglish: 'Har naukri ka female form hai: bas <b>-in</b> jodo — Lehrer → Lehrer<b>in</b>. Kuch mein umlaut bhi: Arzt → <b>Ä</b>rztin, Koch → K<b>ö</b>chin. Female plural: <b>-innen</b>.'
    },
    {
      title: 'Asking about jobs',
      body: [
        'Three common ways to ask what someone does, plus the workplace question.'
      ],
      table: {
        head: ['Question', 'Meaning'],
        rows: [
          ['<span class="de">Was machst du beruflich?</span>', 'What do you do for a living?'],
          ['<span class="de">Was bist du von Beruf?</span>', 'What is your profession?'],
          ['<span class="de">Wo arbeitest du?</span>', 'Where do you work?'],
          ['<span class="de">Was möchtest du werden?</span>', 'What would you like to become?']
        ]
      },
      note: 'Answer "Was machst du beruflich?" with <b>Ich bin …</b> or <b>Ich arbeite als …</b>. Answer "Wo arbeitest du?" with <b>im / in einem …</b>. <b>arbeiten</b> takes an extra -e-: du arbeit<b>e</b>st, er arbeit<b>e</b>t.',
      hinglish: 'Teen tarah se poochho: <b>Was machst du beruflich?</b>, <b>Was bist du von Beruf?</b>, <b>Wo arbeitest du?</b>. Jawab: <b>Ich bin …</b> ya <b>Ich arbeite als …</b>. <b>arbeiten</b> mein extra -e-: du arbeit<b>e</b>st, er arbeit<b>e</b>t.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four job-talk traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich bin ein Lehrer.', right: 'Ich bin Lehrer.', why: 'No article when stating a profession with sein.' },
        { wrong: 'Ich arbeite als ein Koch.', right: 'Ich arbeite als Koch.', why: 'No article after als either.' },
        { wrong: 'Anna ist Arzt.', right: 'Anna ist Ärztin.', why: 'Use the female form -in for a woman.' },
        { wrong: 'Ich arbeite in Büro.', right: 'Ich arbeite im Büro.', why: 'Workplace takes in + dative; in + dem → im.' }
      ],
      hinglish: 'Char galtiyan common hain. Profession ke saath article nahi lagta: <b>Ich bin Lehrer</b>. <b>als</b> ke baad bhi article nahi aata: <b>als Koch</b>. Aurat ke liye female form use hoti hai: <b>Anna ist \u00c4rztin</b>. Aur kaam ki jagah batane ke liye <b>im B\u00fcro</b> aata hai, jo <b>in</b> aur <b>dem</b> se milkar bana hai.'
    }
  ],

  // ---------- Reading passage (work day, clickable) ----------
  reading: {
    title: 'Annas Arbeitstag',
    titleEn: 'Anna\u2019s work day',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Ärztin', role: 'r-object', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.', why: 'Ich bin … (no article); die Ärztin (this chapter).', ex: 'Anna ist Ärztin.', exEn: 'Anna is a doctor.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'sie = she (recycled — Wer bist du?).', ex: 'Sie arbeitet.', exEn: 'She works.' },
      { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करती है', pron: 'AR-by-tet', type: 'Verb · arbeiten (sie)', why: 'arbeiten, er/sie-form (this chapter).', ex: 'Sie arbeitet im Krankenhaus.', exEn: 'She works in the hospital.' },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + dat.', why: 'in + dem → im (this chapter).', ex: 'im Krankenhaus', exEn: 'in the hospital' },
      { w: 'Krankenhaus', role: 'r-place', en: 'hospital', hi: 'अस्पताल', pron: 'KRAN-ken-hows', type: 'Noun · place', why: 'das Krankenhaus (this chapter).', ex: 'im Krankenhaus arbeiten', exEn: 'work in a hospital' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'r-article', en: 'her (fem.)', hi: 'उसका', pron: 'EE-ruh', type: 'Possessive' },
      { w: 'Arbeitszeit', role: 'r-subject', en: 'working hours', hi: 'काम का समय', pron: 'AR-byts-tsyt', type: 'Noun · fem.', why: 'die Arbeitszeit (this chapter).', ex: 'Ihre Arbeitszeit ist lang.', exEn: 'Her working hours are long.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition · time', why: 'von … bis (recycled — Uhrzeit).', ex: 'von acht bis vier', exEn: 'from eight to four' },
      { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number', why: 'acht = 8 (recycled — Zahlen).', ex: 'von acht …', exEn: 'from eight …' },
      { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · time', why: 'bis (recycled — Uhrzeit).', ex: 'bis vier', exEn: 'until four' },
      { w: 'vier', role: 'r-time', en: 'four', hi: 'चार', pron: 'feer', type: 'Number', why: 'vier = 4 (recycled — Zahlen).', ex: 'bis vier Uhr', exEn: 'until four' },
      { w: '.', plain: true },
      { w: 'Um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock', why: 'um + clock (recycled — Uhrzeit).', ex: 'um eins', exEn: 'at one' },
      { w: 'eins', role: 'r-time', en: 'one', hi: 'एक', pron: 'ines', type: 'Number', why: 'eins = 1 (recycled — Zahlen).', ex: 'um eins', exEn: 'at one' },
      { w: 'macht', role: 'r-verb', en: 'makes/takes', hi: 'करती है', pron: 'makht', type: 'Verb · machen', why: '"eine Pause machen" = take a break (recycled — Verben).', ex: 'Sie macht eine Pause.', exEn: 'She takes a break.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'Verb position 2 after front time phrase (Chapter 19).', ex: 'Um eins macht sie …', exEn: 'At one she takes …' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Mittagspause', role: 'r-object', en: 'lunch break', hi: 'दोपहर का अवकाश', pron: 'MI-tahks-pow-zuh', type: 'Noun · fem.', why: 'die Mittagspause (this chapter).', ex: 'eine Mittagspause machen', exEn: 'take a lunch break' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'r-article', en: 'her (plural)', hi: 'उसके', pron: 'EE-ruh', type: 'Possessive' },
      { w: 'Kollegen', role: 'r-subject', en: 'colleagues', hi: 'सहकर्मी', pron: 'ko-LAY-gen', type: 'Noun · plural', why: 'der Kollege → die Kollegen (this chapter).', ex: 'Ihre Kollegen sind nett.', exEn: 'Her colleagues are nice.' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
      { w: 'nett', role: 'r-adjective', en: 'nice', hi: 'अच्छे', pron: 'net', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Sie sind nett.', exEn: 'They are nice.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'verdient', role: 'r-verb', en: 'earns', hi: 'कमाती है', pron: 'fair-DEENT', type: 'Verb · verdienen (sie)', why: 'verdienen (this chapter).', ex: 'Sie verdient gut.', exEn: 'She earns well.' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adverb' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'liebt', role: 'r-verb', en: 'loves', hi: 'पसंद करती है', pron: 'leept', type: 'Verb · lieben (sie)', why: 'lieben (recycled — Hobbies).', ex: 'Sie liebt ihren Beruf.', exEn: 'She loves her job.' },
      { w: 'ihren', role: 'r-akkusativ', en: 'her (masc. acc.)', hi: 'अपने', pron: 'EE-ren', type: 'Possessive · acc.', why: 'masc. accusative ihr → ihren (Chapter 12).', ex: 'ihren Beruf', exEn: 'her profession' },
      { w: 'Beruf', role: 'r-object', en: 'profession', hi: 'पेशा', pron: 'buh-ROOF', type: 'Noun · masc.', why: 'der Beruf (this chapter).', ex: 'Sie liebt ihren Beruf.', exEn: 'She loves her job.' },
      { w: '.', plain: true }
    ],
    translation: 'Anna is a doctor. She works in the hospital. Her working hours are from eight to four. At one she takes a lunch break. Her colleagues are nice. She earns well and loves her job.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_022_L001', speaker: 'Lea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Erik, ich möchte meinen Beruf wechseln. Was meinst du?', en: 'Erik, I want to change my profession. What do you think?' },
      { id: 'A1_022_L002', speaker: 'Erik', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wechseln? Aber du bist doch eine gute Lehrerin!', en: 'Change? But you are a good teacher!' },
      { id: 'A1_022_L003', speaker: 'Lea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber ich arbeite zu viel und verdiene wenig.', en: 'Yes, but I work too much and earn little.' },
      { id: 'A1_022_L004', speaker: 'Erik', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Als Ingenieur verdient man oft besser.', en: 'As an engineer one often earns better.' },
      { id: 'A1_022_L005', speaker: 'Lea', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht hast du recht.', en: 'Maybe you\'re right.' }
    ],
    transcript: 'Erik, ich möchte meinen Beruf wechseln. Was meinst du? Wechseln? Aber du bist doch eine gute Lehrerin! Ja, aber ich arbeite zu viel und verdiene wenig. Als Ingenieur verdient man oft besser. Vielleicht hast du recht.',
    translation: 'Erik, I want to change my profession. What do you think? Change? But you are a good teacher! Yes, but I work too much and earn little. As an engineer one often earns better. Maybe you\'re right.',
    tokens: [
      { w: 'Erik' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'meinen' },
      { w: 'Beruf' },
      { w: 'wechseln' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'meinst' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Wechseln' },
      { w: '?', plain: true },
      { w: 'Aber' },
      { w: 'du' },
      { w: 'bist' },
      { w: 'doch' },
      { w: 'eine' },
      { w: 'gute' },
      { w: 'Lehrerin' },
      { w: '!', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'arbeite' },
      { w: 'zu' },
      { w: 'viel' },
      { w: 'und' },
      { w: 'verdiene' },
      { w: 'wenig' },
      { w: '.', plain: true },
      { w: 'Als' },
      { w: 'Ingenieur' },
      { w: 'verdient' },
      { w: 'man' },
      { w: 'oft' },
      { w: 'besser' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'recht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was möchte Lea machen?', qEn: 'What does Lea want to do?', options: ['mehr arbeiten', 'ihren Beruf wechseln', 'weniger verdienen', 'Urlaub machen'], optionsEn: ['work more', 'change career', 'earn less', 'go on holiday'], answer: 1,
        explain: '"Ich möchte meinen Beruf wechseln."' },
      { q: 'Warum ist Lea mit ihrem Beruf unzufrieden?', qEn: 'Why is Lea unhappy with her job?', options: ['Sie arbeitet zu viel und verdient wenig.', 'Sie mag ihre Schüler nicht.', 'Der Weg ist zu weit.', 'Sie hat keine Kollegen.'], optionsEn: ['She works too much and earns little.', 'She doesn\'t like her pupils.', 'The route is too far.', 'She has no colleagues.'], answer: 0,
        explain: '"Ich arbeite zu viel und verdiene wenig."' }
    ]
  },

  speaking: [
    { task: "Auf einer Feier fragt jemand: Was ist dein Beruf?", taskEn: "At a party somebody asks: what's your job?", de: "Ich bin Studentin. Und du?", en: "I'm a student. And you?" },
    { task: "Deine Nachbarin fragt: Wie ist deine Arbeitszeit?", taskEn: "Your neighbour asks: what are your working hours?", de: "Ich arbeite im Büro, von neun bis fünf Uhr.", en: "I work in an office, from nine to five." },
    { task: "Ein Freund will den Beruf wechseln. Was ist deine Meinung?", taskEn: "A friend wants to change careers. What's your view?", de: "Du bist eine gute Lehrerin, aber als Ärztin verdient man besser.", en: "You're a good teacher, but as a doctor you earn better." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about a job — yours, a family member\u2019s, or a dream job. Say the profession with "… ist / bin …" (no article), use "arbeitet als …" or a workplace with "im …", give the working hours (von … bis), and use one female -in form.',
    starters: ['Ich bin …', 'Ich arbeite als … in …', 'Meine Arbeitszeit ist von … bis …', 'Ich möchte … werden.'],
    placeholder: 'Mein Vater ist Ingenieur. Er arbeitet in einem Büro …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich bin als Lehrer.', 'Ich Lehrer bin.'],
      answer: 1,
      explain: 'No article when stating a profession: "Ich bin Lehrer."'
    },
    gap: {
      // arbeiten als + workplace im
      sentence: ['Sie arbeitet ', ' Ärztin ', ' Krankenhaus.'],
      gaps: [ { answer: 'als', accepts: ['als'] }, { answer: 'im', accepts: ['im'] } ],
      explain: 'arbeiten als + job; workplace = im (in + dem).'
    },
    match: {
      q: 'Match each male job to its female form.',
      pairs: [
        { noun: 'Lehrer', art: 'Lehrerin' },
        { noun: 'Arzt', art: 'Ärztin' },
        { noun: 'Koch', art: 'Köchin' },
        { noun: 'Verkäufer', art: 'Verkäuferin' }
      ]
    },
    builder: {
      target: 'Build: "I work as a teacher."',
      bank: ['Ich', 'arbeite', 'als', 'Lehrer'],
      answer: ['Ich', 'arbeite', 'als', 'Lehrer'],
      roles: { 'Ich': 'r-subject', 'arbeite': 'r-verb', 'als': 'r-preposition', 'Lehrer': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you say "I am a teacher"?', options: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich habe Lehrer.', 'Ich als Lehrer.'], answer: 1,
      explain: 'No article: "Ich bin Lehrer."' },
    { q: 'What is the female form of "Arzt"?', options: ['Arztin', 'Ärztin', 'Arzterin', 'Ärzte'], answer: 1,
      explain: 'Add -in + umlaut: Arzt → Ärztin.' },
    { q: 'Complete: "Ich arbeite ___ Ingenieur."', options: ['wie', 'als', 'ein', 'im'], answer: 1,
      explain: 'arbeiten als + profession (no article).' },
    { q: 'How do you ask about someone\u2019s job?', options: ['Wie heißt du?', 'Was machst du beruflich?', 'Wo wohnst du?', 'Wie alt bist du?'], answer: 1,
      explain: '"Was machst du beruflich?" = What do you do for a living?' },
    { q: 'Which is correct for "in the office"?', options: ['in Büro', 'im Büro', 'am Büro', 'als Büro'], answer: 1,
      explain: 'Workplace: in + dem → im Büro.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'Name the job with no article: <span class="de">Ich bin Lehrer.</span> / <span class="de">Sie ist Ärztin.</span>' },
    { c: 'r-preposition', html: 'Describe the work: <span class="de">Ich arbeite als Ingenieur</span> · workplace <span class="de">im Büro / im Krankenhaus</span>.' },
    { c: 'r-object', html: 'Female form = <strong>+ -in</strong>: <span class="de">Lehrer → Lehrerin</span>, <span class="de">Koch → Köchin</span>.' }
  ],
  revisionTips: [
    'Drop the article for jobs: "Ich bin Student", never "ein Student".',
    'Build the female form by reflex: add -in, add an umlaut where it fits (Arzt → Ärztin).',
    'Pair each job with its workplace: Lehrer → Schule, Arzt → Krankenhaus, Koch → Küche.'
  ]
};

window.CHAPTER = CHAPTER;
