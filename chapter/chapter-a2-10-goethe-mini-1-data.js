/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 10
   "Goethe Mini 1"  — the first full A2 checkpoint. NOT a grammar
   chapter: it simulates the Goethe A2 exam while recycling every
   grammar point and much of the vocabulary from Chapters 1-9.
   NO new grammar, NO new words (the review-vocab set below is all
   recycled — each item is tagged with the chapter it came from).
   NOTE: content only — existing audio engine, no new assets.

   Recycled grammar under test:
   Ch.1 Genitiv: Name + s · Ch.2 Perfekt (Wdh.) · Ch.3 Artikel (Wdh.)
   Ch.4 Nebensatz mit weil · Ch.5 Nebensatz mit dass
   Ch.6 Modalverben im Pr\u00e4teritum · Ch.7 Possessivartikel im Dativ
   Ch.8 Komparativ & Superlativ · Ch.9 Vergleiche mit als / wie
============================================================ */
const CHAPTER = {
  id: 'a2-10-goethe-mini-1',
  phase: 'A2 · Phase 1',
  number: 10,
  title: 'Goethe Mini 1',
  titleEn: 'Goethe Checkpoint 1',
  description: 'Your first full checkpoint. No new grammar and no new words \u2014 instead, a Goethe-A2-style mock that puts Chapters 1\u20139 to work at once: the Genitiv with names, the Perfekt, articles, weil and dass, modal verbs in the Pr\u00e4teritum, dative possessives, and the whole comparison system (Komparativ, Superlativ, als vs wie). Listening, Reading, Writing and Speaking in the real exam formats, plus a mini mock test with an estimated score and a personalised revision plan.',
  xp: 200,
  time: 40,
  difficulty: 'Checkpoint',
  nextChapter: { number: 11, title: 'Nebensatz mit wenn', titleEn: 'Subordinate Clauses with wenn' , href: 'chapter-a2-11-wenn.html' },

  prevChapter: { number: 9, title: 'Vergleiche mit als / wie', titleEn: 'Comparisons with als / wie', href: 'chapter-a2-9-vergleiche-als-wie.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together.</em>',
    intro: 'One week before the mock exam, the class runs a warm-up. Runa fires questions; she and Nick answer with everything they\'ve built this phase — a Genitiv here, a weil-clause there, a modal in the Präteritum, a comparison with als. Nothing new is taught.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Ch.1\u20139 grammar recycled in one natural conversation'
    ],
    scene: 'Aufw\u00e4rmen vor dem Goethe-Mini-Test \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानती हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Prüfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: 'schwer', role: 'r-subject', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I believe that the exam is hard.', hi: 'Main maanti hoon ki pariksha mushkil hai.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hoffe', role: 'r-verb', en: 'hope', hi: 'आशा है', pron: 'HO-fuh', type: 'Verb · hoffen (ich)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'bestehen', role: 'r-verb', en: 'pass', hi: 'पास करते हैं', pron: 'be-SHTAY-en', type: 'Verb · bestehen (Satzende)', why: 'bestehen = to pass (an exam), this chapter.', ex: 'Ich hoffe, dass wir sie bestehen.', exEn: 'I hope that we pass it.' },
        { w: '.', plain: true }
      ], en: 'I hope that we pass it.', hi: 'Mujhe umeed hai ki hum use pass karenge.' },
      { speaker: 'Runa', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतने', pron: 'zo', type: 'Adverb' },
        { w: 'ruhig', role: 'r-adjective', en: 'calm', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Why are you so calm?', hi: 'Tum itne shaant kyun ho?' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'पढ़ा', pron: 'ge-LAIRNT', type: 'Partizip II' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'konnte', role: 'r-modalverb', en: 'could', hi: 'सका', pron: 'KON-tuh', type: 'Modal · können (Präteritum, ich)' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करना', pron: 'Ü-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Because I have studied a lot. I could practise every day.', hi: 'Kyunki maine bahut padha hai. Main har din abhyaas kar saka.' },
      { speaker: 'Runa', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'musste', role: 'r-modalverb', en: 'had to', hi: 'था', pron: 'MUS-tuh', type: 'Modal · müssen (Präteritum, ich)' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Präteritum)' },
        { w: 'weniger', role: 'r-akkusativ', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I had to work. I had less time.', hi: 'Mujhe kaam karna tha. Mere paas kam time tha.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'tut', role: 'r-verb', en: 'sorry', hi: 'माफ़ करना', pron: 'toot', type: 'Verb · leid tun', why: 'das tut mir leid = I am sorry (recycled).' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'leid', role: 'r-akkusativ', en: 'sorry', hi: 'अफ़सोस', pron: 'lite', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'genauso', role: 'r-adverb', en: 'just as', hi: 'उतनी ही', pron: 'ge-NOW-zo', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: 'wie', role: 'r-conjunction', en: 'as', hi: 'जितनी', pron: 'vee', type: 'Conjunction · wie' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true }
      ], en: 'I am sorry. But you are just as good as I am.', hi: 'Mujhe afsos hai. Par tum mujh jitni hi achhi ho.' },
      { speaker: 'Runa', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hoffe', role: 'r-verb', en: 'hope', hi: 'आशा है', pron: 'HO-fuh', type: 'Verb · hoffen (ich)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I hope that you are right.', hi: 'Dhanyavaad! Mujhe umeed hai ki tum sahi ho.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Yes, surely! We will manage this together!', hi: 'Haan, zaroor! Hum yeh saath kar lenge!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'What this checkpoint is',
    html: 'This chapter teaches <strong>nothing new</strong>. It is a <strong>Goethe-A2-style checkpoint</strong> that puts the whole of Phase 1 to work at once. Everything you meet here is recycled from Chapters 1\u20139: the <span class="de r-genitiv">Genitiv with names</span> (Annas Buch), the <strong>Perfekt</strong> (ich bin gefahren), <strong>articles</strong>, <span class="de r-weil">weil</span> and <span class="de r-dass">dass</span> clauses, <span class="de r-modalverb">modal verbs in the Pr\u00e4teritum</span> (ich musste, ich konnte), <span class="de r-dativ">dative possessives</span> (mit meinen Freunden), and the full comparison system \u2014 <strong>Komparativ</strong>, <strong>Superlativ</strong> and <span class="de r-vergleich">als vs wie</span>. You\u2019ll work through the real exam formats \u2014 Listening, Reading, Writing, Speaking \u2014 and finish with a <strong>mini mock test</strong> that estimates your score and tells you exactly which chapters to revise. Treat it like the real thing: calm, steady, no rush.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging Goethe A2 examiner and tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 1-9 (Genitiv Name+s, Perfekt, Artikel, weil, dass, Modalverben im Pr\u00e4teritum, Possessivartikel im Dativ, Komparativ/Superlativ, als vs wie). No new grammar. ' +
    'The learner wrote a short Goethe-style email / message below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Genitiv with names: Annas Buch; names ending in -s/-\u00df/-x/-z take an apostrophe only: Max\u2019 Handy.\n' +
    '- Perfekt: haben/sein + Partizip II; movement/change verbs take sein (ich bin gefahren/gekommen/gegangen).\n' +
    '- weil and dass send the conjugated verb to the END of the clause; a comma precedes them.\n' +
    '- Modal past = Pr\u00e4teritum: ich musste/konnte/durfte/wollte/sollte/mochte (no umlaut, -t- infix, ich=er with no ending). Prefer it over the Perfekt for modals.\n' +
    '- Dative possessives: -em (m/n), -er (f), -en (pl); after mit/bei/von/zu/nach/aus and dative verbs (helfen, geh\u00f6ren, danken). euer \u2192 eurem/eurer/euren.\n' +
    '- Comparison: DIFFERENT \u2192 Komparativ + als (gr\u00f6\u00dfer als); EQUAL \u2192 (genau)so + plain adjective + wie (so gro\u00df wie). \u201cthan\u201d is als, never wie; \u201cas...as\u201d is so...wie, never so...als. Irregulars: gut\u2192besser\u2192am besten, viel\u2192mehr, gern\u2192lieber, hoch\u2192h\u00f6her.\n' +
    '- A Goethe A2 email needs a greeting (Liebe/r \u2026 or Hallo \u2026), a reason/content, and a close (Viele Gr\u00fc\u00dfe / Liebe Gr\u00fc\u00dfe + name). Note if one is missing.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence with a rough Goethe band (e.g. \u201con track for a pass\u201d).</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why (name the chapter/topic, e.g. \u201cweil word order\u201d). If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Email format:</b> one sentence on greeting/close/completeness.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Checkpoint passed with room to spare \u2014 every Phase 1 topic is solid. You\u2019re ready for Phase 2: <span class="de">Nebensatz mit wenn</span>.',
    mid: 'A solid pass. Glance again at whichever grammar felt slow \u2014 the summary below points you to the exact chapters \u2014 then move on to <span class="de">Nebensatz mit wenn</span>.',
    low: 'Nearly there. Revisit the two or three weakest topics from the summary\u2019s revision plan (most often weil/dass word order or the dative possessive), then retake this checkpoint before Phase 2.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'glaube', role: 'r-verb' },
    { w: 'dass', role: 'r-dass' }, { w: 'Annas', role: 'r-genitiv' },
    { w: 'Feier', role: 'r-subject' }, { w: 'besser', role: 'r-adjective' },
    { w: 'als', role: 'r-vergleich' }, { w: 'meine', role: 'r-akkusativ' },
    { w: 'war', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the checkpoint and how the mock test is scored.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A warm-up conversation recycling all nine Phase 1 topics.' },
    { id: 'vocabulary', label: 'Review Words', tag: 'core',
      objective: 'Revisit key words from Chapters 1\u20139 in one mixed set.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'One card per chapter: the nine rules of Phase 1 at a glance.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'A Goethe-style email + notice with comprehension questions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Goethe-style dialogues: shop, station, workplace, appointment.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Teil 1 introduce yourself \u00b7 Teil 2 describe a picture \u00b7 Teil 3 plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style email: invite, reply or apologise.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed drills across all nine grammar topics.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'The graded mini mock \u2014 pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Score & Plan', tag: 'assess',   auto: true,
      objective: 'Estimated score, strengths, weaknesses and a revision plan.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the full Phase 1 revision pack.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Phase 1 Vocabulary Pack',
      desc: 'All the key words from Chapters 1\u20139 in one place \u2014 school, work, media, home, pets \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Mock Test PDF',
      desc: 'A printable Goethe-A2-style mini mock: Listening, Reading, Writing, Speaking and a grammar section, with an answer key.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Mock Test' },
    { icon: '\ud83d\udcd6', title: 'Grammar Review PDF',
      desc: 'The nine Phase 1 rules on nine cards \u2014 Genitiv Name+s, Perfekt, Artikel, weil, dass, Modalverben Pr\u00e4t., Possessiv Dativ, Komparativ/Superlativ, als/wie.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Annas Buch / Max\u2019 Handy', text: 'Show possession with names (Ch.1)' },
    { de: 'Ich bin gefahren, weil \u2026', text: 'Combine Perfekt + weil/dass (Ch.2, 4, 5)' },
    { de: 'Ich musste / konnte \u2026', text: 'Narrate the past with modals (Ch.6)' },
    { de: 'mit meinen Freunden', text: 'Bend dative possessives (Ch.7)' },
    { de: 'besser als \u00b7 so gut wie', text: 'Compare with als and wie (Ch.8, 9)' }
  ],

  // ---------- Review vocabulary (recycled from Ch.1-9; no new words) ----------
  vocab: [
    // ===== Ch.1 Genitiv: Name + s =====
    { de: 'Genitiv', art: 'der', gender: 'm', plural: 'Genitive', pos: 'noun', en: 'genitive (case)', hi: 'संबंधकारक', tag: 'Ch.1', ex: 'Annas Buch ist ein Beispiel f\u00fcr den Genitiv.', exEn: 'Anna\u2019s book is an example of the genitive.' },
    { de: 'Handy', art: 'das', gender: 'n', plural: 'Handys', pos: 'noun', en: 'mobile phone', hi: 'मोबाइल फ़ोन', tag: 'Ch.1', ex: 'Das ist Max\u2019 Handy, nicht Rohans Handy.', exEn: 'That\u2019s Max\u2019s phone, not Rohan\u2019s phone.' },
    { de: 'Tasche', art: 'die', gender: 'f', plural: 'Taschen', pos: 'noun', en: 'bag', hi: 'बैग', tag: 'Ch.1', ex: 'Wo ist Rohans Tasche?', exEn: 'Where is Rohan\u2019s bag?' },
    // ===== Ch.2 Perfekt (Wiederholung) =====
    { de: 'gefahren', pos: 'participle', en: 'travelled, driven (Partizip von fahren)', hi: 'गया/गई (सवारी से)', tag: 'Ch.2', ex: 'Ich bin zu meiner Oma gefahren.', exEn: 'I travelled to my grandma\u2019s.' },
    { de: 'gemacht', pos: 'participle', en: 'done, made (Partizip von machen)', hi: 'किया', tag: 'Ch.2', ex: 'Was hast du am Wochenende gemacht?', exEn: 'What did you do on the weekend?' },
    { de: 'schon', pos: 'adverb', en: 'already', hi: 'पहले ही', tag: 'Ch.2', ex: 'Hast du das schon gesehen?', exEn: 'Have you already seen that?' },
    { de: 'gestern', pos: 'adverb', en: 'yesterday', hi: 'कल', tag: 'Ch.2', ex: 'Gestern habe ich viel gelernt.', exEn: 'Yesterday I studied a lot.' },
    // ===== Ch.3 Artikel (Wiederholung) =====
    { de: 'Kuchen', art: 'der', gender: 'm', plural: 'Kuchen', pos: 'noun', en: 'cake', hi: 'केक', tag: 'Ch.3', ex: 'Der Kuchen war so gut wie im Restaurant.', exEn: 'The cake was as good as in a restaurant.' },
    { de: 'Restaurant', art: 'das', gender: 'n', plural: 'Restaurants', pos: 'noun', en: 'restaurant', hi: 'रेस्टोरेंट', tag: 'Ch.3', ex: 'Wir gehen in ein Restaurant.', exEn: 'We\u2019re going to a restaurant.' },
    { de: 'Feier', art: 'die', gender: 'f', plural: 'Feiern', pos: 'noun', en: 'celebration, party', hi: 'जश्न', tag: 'Ch.3', ex: 'Es war die sch\u00f6nste Feier des Jahres.', exEn: 'It was the nicest party of the year.' },
    // ===== Ch.4 Nebensatz mit weil =====
    { de: 'weil', pos: 'conjunction', en: 'because (verb to the end)', hi: 'क्योंकि', tag: 'Ch.4', ex: 'Ich lerne, weil ich den Test bestehen will.', exEn: 'I study because I want to pass the test.' },
    { de: 'Grund', art: 'der', gender: 'm', plural: 'Gr\u00fcnde', pos: 'noun', en: 'reason', hi: 'कारण', tag: 'Ch.4', ex: 'Gib mir einen Grund mit weil.', exEn: 'Give me a reason with weil.' },
    { de: 'bestehen', pos: 'verb', en: 'to pass (an exam)', hi: 'पास करना', tag: 'Ch.4', ex: 'Ich will den Test unbedingt bestehen.', exEn: 'I really want to pass the test.', conj: { praesens: 'besteht', praeteritum: 'bestand', perfekt: 'hat bestanden' } },
    // ===== Ch.5 Nebensatz mit dass =====
    { de: 'dass', pos: 'conjunction', en: 'that (verb to the end)', hi: 'कि', tag: 'Ch.5', ex: 'Ich glaube, dass es die beste Feier war.', exEn: 'I think that it was the best party.' },
    { de: 'glauben', pos: 'verb', en: 'to believe, to think', hi: 'मानना, सोचना', tag: 'Ch.5', ex: 'Ich glaube, dass Deutsch wichtig ist.', exEn: 'I think that German is important.', conj: { praesens: 'glaubt', praeteritum: 'glaubte', perfekt: 'hat geglaubt' } },
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', tag: 'Ch.5', ex: 'Ich hoffe, dass ich bestehe.', exEn: 'I hope that I pass.', conj: { praesens: 'hofft', praeteritum: 'hoffte', perfekt: 'hat gehofft' } },
    // ===== Ch.6 Modalverben im Pr\u00e4teritum =====
    { de: 'musste', pos: 'verb', en: 'had to (Pr\u00e4t. von m\u00fcssen)', hi: 'पड़ा', tag: 'Ch.6', ex: 'Ich musste am Wochenende arbeiten.', exEn: 'I had to work on the weekend.' },
    { de: 'konnte', pos: 'verb', en: 'could (Pr\u00e4t. von k\u00f6nnen)', hi: 'सका', tag: 'Ch.6', ex: 'Abends konnte ich ins Kino gehen.', exEn: 'In the evening I could go to the cinema.' },
    { de: 'durfte', pos: 'verb', en: 'was allowed to (Pr\u00e4t. von d\u00fcrfen)', hi: 'इजाज़त थी', tag: 'Ch.6', ex: 'Als Kind durfte ich nicht lange fernsehen.', exEn: 'As a child I wasn\u2019t allowed to watch TV for long.' },
    { de: 'wollte', pos: 'verb', en: 'wanted to (Pr\u00e4t. von wollen)', hi: 'चाहता था', tag: 'Ch.6', ex: 'Ich wollte das Zertifikat bekommen.', exEn: 'I wanted to get the certificate.' },
    // ===== Ch.7 Possessivartikel im Dativ =====
    { de: 'Freund', art: 'der', gender: 'm', plural: 'Freunde', pos: 'noun', en: 'friend (m.)', hi: 'दोस्त', tag: 'Ch.7', ex: 'Ich war mit meinen Freunden im Kino.', exEn: 'I was at the cinema with my friends.' },
    { de: 'helfen', pos: 'verb', en: 'to help (+ dative)', hi: 'मदद करना', tag: 'Ch.7', ex: 'Ich helfe meiner Oma gern.', exEn: 'I gladly help my grandma.', conj: { praesens: 'hilft', praeteritum: 'half', perfekt: 'hat geholfen' } },
    { de: 'geh\u00f6ren', pos: 'verb', en: 'to belong to (+ dative)', hi: 'का होना', tag: 'Ch.7', ex: 'Das Buch geh\u00f6rt meiner Schwester.', exEn: 'The book belongs to my sister.', conj: { praesens: 'geh\u00f6rt', praeteritum: 'geh\u00f6rte', perfekt: 'hat geh\u00f6rt' } },
    // ===== Ch.8 Komparativ & Superlativ =====
    { de: 'besser', pos: 'adjective', en: 'better (Komparativ von gut)', hi: 'बेहतर', tag: 'Ch.8', ex: 'Der Film war besser als der letzte.', exEn: 'The film was better than the last one.' },
    { de: 'teuer', pos: 'adjective', en: 'expensive', hi: 'महंगा', tag: 'Ch.8', ex: 'Die Tickets waren teurer als sonst.', exEn: 'The tickets were more expensive than usual.' },
    { de: 'am besten', pos: 'phrase', en: 'best (Superlativ von gut)', hi: 'सबसे अच्छा', tag: 'Ch.8', ex: 'Pizza schmeckt mir am besten.', exEn: 'Pizza tastes best to me.' },
    { de: 'wichtig', pos: 'adjective', en: 'important', hi: 'महत्वपूर्ण', tag: 'Ch.8', ex: 'Ein guter Abschluss ist am wichtigsten.', exEn: 'A good degree is the most important.' },
    // ===== Ch.9 Vergleiche mit als / wie =====
    { de: 'als', pos: 'conjunction', en: 'than (difference)', hi: 'से', tag: 'Ch.9', ex: 'Mein Deutsch ist besser als letztes Jahr.', exEn: 'My German is better than last year.' },
    { de: 'wie', pos: 'conjunction', en: 'as (equality: so \u2026 wie)', hi: 'जैसा', tag: 'Ch.9', ex: 'Der Kuchen war so gut wie im Restaurant.', exEn: 'The cake was as good as in a restaurant.' },
    { de: 'genauso', pos: 'adverb', en: 'just as (genauso \u2026 wie)', hi: 'बिल्कुल उतना', tag: 'Ch.9', ex: 'Ich bin genauso gro\u00df wie du.', exEn: 'I\u2019m just as tall as you.' },
    // ===== Exam words (recycled A1/A2 Goethe vocabulary) =====
    { de: 'Zertifikat', art: 'das', gender: 'n', plural: 'Zertifikate', pos: 'noun', en: 'certificate', hi: 'प्रमाणपत्र', tag: 'Goethe', ex: 'Ich m\u00f6chte das Goethe-Zertifikat bekommen.', exEn: 'I\u2019d like to get the Goethe certificate.' },
    { de: 'Pr\u00fcfung', art: 'die', gender: 'f', plural: 'Pr\u00fcfungen', pos: 'noun', en: 'exam', hi: 'परीक्षा', tag: 'Goethe', ex: 'Die Pr\u00fcfung hat vier Teile.', exEn: 'The exam has four parts.' },
    { de: 'Erfolg', art: 'der', gender: 'm', plural: 'Erfolge', pos: 'noun', en: 'success', hi: 'सफलता', tag: 'Goethe', ex: 'Viel Erfolg beim Test!', exEn: 'Good luck with the test!' },
    { de: 'wiederholen', pos: 'verb', en: 'to revise, to repeat', hi: 'दोहराना', tag: 'Goethe', ex: 'Heute wiederholen wir alles.', exEn: 'Today we revise everything.', conj: { praesens: 'wiederholt', praeteritum: 'wiederholte', perfekt: 'hat wiederholt' } }
  ],

  // ---------- Grammar Review (one card per Phase 1 chapter) ----------
  grammar: [
    {
      title: 'Ch.1 \u2014 Genitiv: Name + s',
      body: [
        'Show possession by adding <strong>-s</strong> to a name (no apostrophe). Names ending in <strong>-s, -\u00df, -x, -z</strong> take an apostrophe only.'
      ],
      table: {
        head: ['Name', 'Possession', 'vs. von'],
        rows: [
          ['Anna', '<span class="de r-genitiv">Annas</span> Buch', '<span class="de">das Buch von Anna</span>'],
          ['Rohan', '<span class="de r-genitiv">Rohans</span> Tasche', '<span class="de">die Tasche von Rohan</span>'],
          ['Max', '<span class="de r-genitiv">Max\u2019</span> Handy', '<span class="de">das Handy von Max</span>'],
          ['Frau Weber', '<span class="de r-genitiv">Frau Webers</span> B\u00fcro', '<span class="de">das B\u00fcro von Frau Weber</span>']
        ]
      },
      note: 'Name + s sounds more natural than "von + Name" in everyday speech. The apostrophe form (Max\u2019) is only for names already ending in an s-sound.',
      hinglish: 'Naam ke baad -s lagao (bina apostrophe): Annas Buch. Jo naam -s/-\u00df/-x/-z par khatam ho, sirf apostrophe: Max\u2019 Handy.'
    },
    {
      title: 'Ch.2 \u2014 Perfekt (Wiederholung)',
      body: [
        'The spoken past: <strong>haben</strong> or <strong>sein</strong> (position 2) + <strong>Partizip II</strong> (at the end). Movement/change verbs take <strong>sein</strong>.'
      ],
      table: {
        head: ['Helper', 'Example', 'Use'],
        rows: [
          ['haben', '<span class="de">Ich <b>habe</b> viel <b>gelernt</b>.</span>', 'most verbs'],
          ['sein', '<span class="de">Ich <b>bin</b> nach Berlin <b>gefahren</b>.</span>', 'movement'],
          ['sein', '<span class="de">Sie <b>ist</b> zu sp\u00e4t <b>gekommen</b>.</span>', 'movement'],
          ['haben', '<span class="de">Was <b>hast</b> du <b>gemacht</b>?</span>', 'question']
        ]
      },
      note: 'Partizip II goes to the very end. Regular: ge-\u2026-t (gemacht); many strong verbs: ge-\u2026-en (gefahren, gekommen).',
      hinglish: 'Perfekt = haben/sein (position 2) + Partizip II (sentence ke end mein). Chalne/badalne wale verbs sein lete hain: ich bin gefahren.'
    },
    {
      title: 'Ch.3 \u2014 Artikel (Wiederholung)',
      body: [
        'der/die/das and ein/eine change by case. Quick reminder of Nominativ vs. Akkusativ vs. Dativ (masculine is the mover).'
      ],
      table: {
        head: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominativ', '<span class="de">der</span>', '<span class="de">die</span>', '<span class="de">das</span>', '<span class="de">die</span>'],
          ['Akkusativ', '<span class="de r-akkusativ">den</span>', '<span class="de">die</span>', '<span class="de">das</span>', '<span class="de">die</span>'],
          ['Dativ', '<span class="de r-dativ">dem</span>', '<span class="de r-dativ">der</span>', '<span class="de r-dativ">dem</span>', '<span class="de r-dativ">den</span>']
        ]
      },
      note: 'Only the masculine changes in the accusative (der \u2192 den). The dative changes for everyone \u2014 the base for the possessive endings in Ch.7.',
      hinglish: 'Akkusativ mein sirf masculine badalta hai (der\u2192den). Dativ mein sab badalte hain (dem/der/dem/den) \u2014 yahi Ch.7 possessive endings ka base hai.'
    },
    {
      title: 'Ch.4 & 5 \u2014 weil / dass: verb to the end',
      body: [
        'Both <span class="de r-weil">weil</span> (reason) and <span class="de r-dass">dass</span> (reported thought/fact) open a Nebensatz \u2014 the conjugated verb goes to the <strong>end</strong>, with a comma before.'
      ],
      table: {
        head: ['Conjunction', 'Example', 'Verb position'],
        rows: [
          ['<span class="de r-weil">weil</span>', '<span class="de">Ich lerne, weil ich bestehen <b>will</b>.</span>', 'last (will)'],
          ['<span class="de r-dass">dass</span>', '<span class="de">Ich glaube, dass es gut <b>war</b>.</span>', 'last (war)'],
          ['<span class="de r-weil">weil</span> (Perfekt)', '<span class="de">\u2026, weil ich den Bus verloren <b>habe</b>.</span>', 'habe last'],
          ['<span class="de r-dass">dass</span> (modal)', '<span class="de">\u2026, dass sie kommen <b>kann</b>.</span>', 'kann last']
        ]
      },
      note: 'Same rule for both. Answer warum? with weil; report thoughts/facts (glauben, denken, wissen, hoffen) with dass.',
      hinglish: 'weil (reason) aur dass (baat/fact) dono Nebensatz kholte hain: conjugated verb sabse last mein, comma pehle. warum? \u2192 weil; glauben/denken/hoffen \u2192 dass.'
    },
    {
      title: 'Ch.6 \u2014 Modalverben im Pr\u00e4teritum',
      body: [
        'For modals, the past is the <strong>Pr\u00e4teritum</strong>: drop the umlaut, add -t-, simple endings. ich = er/sie/es (no ending).'
      ],
      table: {
        head: ['Modal', 'Pr\u00e4teritum (ich/er)', 'Meaning'],
        rows: [
          ['k\u00f6nnen', '<span class="de r-modalverb">konnte</span>', 'could'],
          ['m\u00fcssen', '<span class="de r-modalverb">musste</span>', 'had to'],
          ['d\u00fcrfen', '<span class="de r-modalverb">durfte</span>', 'was allowed to'],
          ['wollen', '<span class="de r-modalverb">wollte</span>', 'wanted to'],
          ['sollen / m\u00f6gen', '<span class="de r-modalverb">sollte / mochte</span>', 'should / liked']
        ]
      },
      note: 'Say "ich musste", not "ich habe gemusst". mochte (liked) \u2260 m\u00f6chte (would like); konnte (could) \u2260 k\u00f6nnte (would be able to).',
      hinglish: 'Modals ka past = Pr\u00e4teritum: umlaut hatao, -t- lagao. "ich musste", "habe gemusst" nahi. mochte (pasand tha) \u2260 m\u00f6chte.'
    },
    {
      title: 'Ch.7 \u2014 Possessivartikel im Dativ',
      body: [
        'A possessive in the dative takes <strong>-em</strong> (m/n), <strong>-er</strong> (f), <strong>-en</strong> (pl) \u2014 after mit/bei/von/zu/nach/aus and dative verbs.'
      ],
      table: {
        head: ['Gender/number', 'Ending', 'Example'],
        rows: [
          ['masc./neut.', '<span class="de r-dativ">-em</span>', '<span class="de">mit <span class="r-dativ">meinem</span> Freund</span>'],
          ['feminine', '<span class="de r-dativ">-er</span>', '<span class="de">bei <span class="r-dativ">meiner</span> Oma</span>'],
          ['plural', '<span class="de r-dativ">-en</span>', '<span class="de">mit <span class="r-dativ">meinen</span> Freunden</span>'],
          ['dative verb', '<span class="de r-dativ">-em</span>', '<span class="de">Ich helfe <span class="r-dativ">meinem</span> Bruder.</span>']
        ]
      },
      note: 'euer drops its middle -e-: eurem/eurer/euren. In the plural the noun adds -n: meinen Freunden. Dative verbs like <b>geh\u00f6ren</b> also trigger it: <span class="de">Das Buch geh\u00f6rt meiner Schwester.</span>',
      hinglish: 'Dativ possessive: -em (m/n), -er (f), -en (pl), mit/bei/von ya helfen/geh\u00f6ren ke baad. euer \u2192 eurem/eurer/euren.'
    },
    {
      title: 'Ch.8 & 9 \u2014 Komparativ, Superlativ, als / wie',
      body: [
        'Compare with <strong>-er + <span class="de r-vergleich">als</span></strong> (difference); top the list with <strong>am ...-sten</strong>. For equality use <strong>(genau)so + Positiv + <span class="de r-vergleich">wie</span></strong>.'
      ],
      table: {
        head: ['Type', 'Structure', 'Example'],
        rows: [
          ['difference', '<span class="de">Komparativ + <span class="r-vergleich">als</span></span>', '<span class="de">besser <span class="r-vergleich">als</span> der letzte</span>'],
          ['top', '<span class="de r-superlativ">am ...-sten</span>', '<span class="de">am besten</span>'],
          ['equality', '<span class="de">so + Positiv + <span class="r-vergleich">wie</span></span>', '<span class="de">so gut <span class="r-vergleich">wie</span> im Restaurant</span>'],
          ['irregulars', '\u2014', '<span class="de">gut\u2192besser, viel\u2192mehr, gern\u2192lieber, hoch\u2192h\u00f6her</span>']
        ]
      },
      note: 'Golden rule: <b>different \u2192 als, same \u2192 wie.</b> Never "gr\u00f6\u00dfer wie", never "so gr\u00f6\u00dfer als".',
      hinglish: 'Alag \u2192 Komparativ + als. Top \u2192 am ...-sten. Barabar \u2192 (genau)so + plain adjective + wie. "gr\u00f6\u00dfer wie" galat, "so gr\u00f6\u00dfer als" galat.'
    }
  ],

  // ---------- Reading (Goethe-style: email + notice, clickable) ----------
  reading: {
    title: 'Eine Einladung per E-Mail',
    titleEn: 'An invitation by email',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'Dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Greeting', why: 'Liebe/r \u2026 opens an informal email (recycled \u2014 A1).', ex: 'Liebe Anna,', exEn: 'Dear Anna,' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'A-na', type: 'Name' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
      { w: 'geht', role: 'r-verb', en: 'is going', hi: 'चल रहा', pron: 'gayt', type: 'Verb \u00b7 gehen' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'dir', role: 'r-dativ', en: 'to you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun \u00b7 dative' },
      { w: '?', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun \u00b7 masc.', why: 'der Samstag (recycled \u2014 A1).', ex: 'am Samstag', exEn: 'on Saturday' },
      { w: 'feiere', role: 'r-verb', en: 'am celebrating', hi: 'मना रहा हूँ', pron: 'FY-uh-ruh', type: 'Verb \u00b7 feiern', why: 'feiern (recycled \u2014 A1).', ex: 'Ich feiere Geburtstag.', exEn: 'I\u2019m celebrating my birthday.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'अपने', pron: 'MY-ner', type: 'Possessive \u00b7 dative', why: 'in + Dativ; mein \u2192 meiner (recycled \u2014 Possessiv Dativ Ch.7).', ex: 'in meiner Wohnung', exEn: 'in my flat' },
      { w: 'neuen', role: 'r-adjective', en: 'new', hi: 'नए', pron: 'NOY-en', type: 'Adjective' },
      { w: 'Wohnung', role: 'r-dativ', en: 'flat', hi: 'फ़्लैट', pron: 'VO-nung', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Wohnung (recycled \u2014 Wohnung).', ex: 'in meiner Wohnung', exEn: 'in my flat' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'gr\u00f6\u00dfer', role: 'r-adjective', en: 'bigger', hi: 'ज़्यादा बड़ी', pron: 'GR\u00d6-ser', type: 'Komparativ \u00b7 gro\u00df', why: 'gro\u00df \u2192 gr\u00f6\u00dfer (recycled \u2014 Komparativ Ch.8).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference', why: 'Komparativ + als (recycled \u2014 als/wie Ch.9).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'पुरानी', pron: 'dee', type: 'Article' },
      { w: 'alte', role: 'r-object', en: 'old one', hi: 'पुरानी', pron: 'AL-tuh', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'wollte', role: 'r-modalverb', en: 'wanted to', hi: 'चाहती थी', pron: 'VOL-tuh', type: 'Modalverb \u00b7 wollen (Pr\u00e4t.)', why: 'wollen \u2192 wollte (recycled \u2014 Modalverben Pr\u00e4t. Ch.6).', ex: 'Ich wollte feiern.', exEn: 'I wanted to celebrate.' },
      { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun \u00b7 acc.' },
      { w: 'unbedingt', role: 'r-adverb', en: 'definitely', hi: 'ज़रूर', pron: 'UN-buh-dingt', type: 'Adverb' },
      { w: 'einladen', role: 'r-verb', en: 'invite', hi: 'न्योता देना', pron: 'INE-lah-den', type: 'Infinitive', why: 'einladen (recycled \u2014 A1).', ex: 'jemanden einladen', exEn: 'to invite someone' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil Ch.4).', ex: 'weil du meine beste Freundin bist', exEn: 'because you\u2019re my best friend' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'beste', role: 'r-superlativ', en: 'best', hi: 'सबसे अच्छी', pron: 'BES-tuh', type: 'Superlativ \u00b7 gut', why: 'gut \u2192 beste (recycled \u2014 Superlativ Ch.8).', ex: 'meine beste Freundin', exEn: 'my best friend' },
      { w: 'Freundin', role: 'r-subject', en: 'friend (f.)', hi: 'सहेली', pron: 'FROYN-din', type: 'Noun \u00b7 fem.' },
      { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb \u00b7 sein', why: 'conjugated verb last after weil (recycled \u2014 weil Ch.4).', ex: '\u2026, weil du \u2026 bist.', exEn: '\u2026 because you are \u2026' },
      { w: '.', plain: true },
      { w: 'Bring', role: 'r-verb', en: 'bring', hi: 'लाना', pron: 'bring', type: 'Imperativ \u00b7 bringen' },
      { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb' },
      { w: 'Rohans', role: 'r-genitiv', en: 'Rohan\u2019s', hi: 'रोहन का', pron: 'RO-hans', type: 'Genitiv \u00b7 Name + s', why: 'Name + s (recycled \u2014 Genitiv Ch.1).', ex: 'Rohans Gitarre', exEn: 'Rohan\u2019s guitar' },
      { w: 'Gitarre', role: 'r-object', en: 'guitar', hi: 'गिटार', pron: 'gi-TA-ruh', type: 'Noun \u00b7 fem.', why: 'die Gitarre (recycled \u2014 A1).', ex: 'Rohans Gitarre', exEn: 'Rohan\u2019s guitar' },
      { w: 'mit', role: 'r-preposition', en: 'along', hi: 'साथ', pron: 'mit', type: 'Preposition' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction', why: 'wenn (recycled \u2014 A1; taught fully in Ch.11).', ex: 'wenn du kannst', exEn: 'if you can' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'kanst', type: 'Modalverb \u00b7 k\u00f6nnen' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'glaube', role: 'r-verb', en: 'think', hi: 'सोचती हूँ', pron: 'GLOW-buh', type: 'Verb \u00b7 glauben', why: 'glauben, dass \u2026 (recycled \u2014 dass Ch.5).', ex: 'Ich glaube, dass \u2026', exEn: 'I think that \u2026' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-dass', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction \u00b7 dass', why: 'dass \u2192 verb last (recycled \u2014 dass Ch.5).', ex: 'dass es ein sch\u00f6ner Abend wird', exEn: 'that it\u2019ll be a nice evening' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'sch\u00f6ner', role: 'r-adjective', en: 'nice', hi: 'सुंदर', pron: 'SH\u00d6-ner', type: 'Adjective' },
      { w: 'Abend', role: 'r-subject', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun \u00b7 masc.' },
      { w: 'wird', role: 'r-verb', en: 'will be', hi: 'होगी', pron: 'virt', type: 'Verb \u00b7 werden', why: 'conjugated verb last after dass (recycled \u2014 dass Ch.5).', ex: '\u2026, dass es sch\u00f6n wird.', exEn: '\u2026 that it\u2019ll be nice.' },
      { w: '.', plain: true },
      { w: 'Viele', role: 'r-adjective', en: 'many', hi: 'बहुत', pron: 'FEE-luh', type: 'Adjective' },
      { w: 'Gr\u00fc\u00dfe', role: 'r-object', en: 'greetings', hi: 'शुभकामनाएँ', pron: 'GR\u00dc-suh', type: 'Noun \u00b7 plural', why: 'Viele Gr\u00fc\u00dfe closes an email (recycled \u2014 A1).', ex: 'Viele Gr\u00fc\u00dfe, Anna', exEn: 'Best wishes, Anna' },
      { w: ',', plain: true },
      { w: 'Lena', role: 'r-subject', en: 'Lena', hi: 'लेना', pron: 'LAY-na', type: 'Name' }
    ],
    translation: 'Dear Anna, how are you? On Saturday I\u2019m celebrating in my new flat. It\u2019s bigger than the old one. I definitely wanted to invite you, because you\u2019re my best friend. Please bring Rohan\u2019s guitar along, if you can. I think that it\u2019ll be a nice evening. Best wishes, Lena. '
  },

  // ---------- Listening (Goethe-style dialogues) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_010_L001', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nick, was hast du diese Woche gelernt?', en: 'Nick, what did you learn this week?' },
      { id: 'A2_010_L002', speaker: 'Nick', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Weil ich Familie hatte, konnte ich nicht viel lernen. Aber ich weiß, dass der Genitiv nicht so schwer ist.', en: 'Because I had family visiting, I couldn\'t study much. But I know the genitive isn\'t that hard.' },
      { id: 'A2_010_L003', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Meine Woche war interessanter als deine! Ich habe die beste Note bekommen.', en: 'My week was more interesting than yours! I got the best grade.' },
      { id: 'A2_010_L004', speaker: 'Nick', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Toll! Wessen Buch hast du benutzt?', en: 'Great! Whose book did you use?' },
      { id: 'A2_010_L005', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Annas Buch. Es war hilfreicher als mein altes.', en: 'Anna\'s book. It was more helpful than my old one.' }
    ],
    transcript: 'Nick, was hast du diese Woche gelernt? Weil ich Familie hatte, konnte ich nicht viel lernen. Aber ich weiß, dass der Genitiv nicht so schwer ist. Meine Woche war interessanter als deine! Ich habe die beste Note bekommen. Toll! Wessen Buch hast du benutzt? Annas Buch. Es war hilfreicher als mein altes.',
    translation: 'Nick, what did you learn this week? Because I had family visiting, I couldn\'t study much. But I know the genitive isn\'t that hard. My week was more interesting than yours! I got the best grade. Great! Whose book did you use? Anna\'s book. It was more helpful than my old one.',
    tokens: [
      { w: 'Nick' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'diese' },
      { w: 'Woche' },
      { w: 'gelernt' },
      { w: '?', plain: true },
      { w: 'Weil' },
      { w: 'ich' },
      { w: 'Familie' },
      { w: 'hatte' },
      { w: ',', plain: true },
      { w: 'konnte' },
      { w: 'ich' },
      { w: 'nicht' },
      { w: 'viel' },
      { w: 'lernen' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'der' },
      { w: 'Genitiv' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'schwer' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Meine' },
      { w: 'Woche' },
      { w: 'war' },
      { w: 'interessanter' },
      { w: 'als' },
      { w: 'deine' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'die' },
      { w: 'beste' },
      { w: 'Note' },
      { w: 'bekommen' },
      { w: '.', plain: true },
      { w: 'Toll' },
      { w: '!', plain: true },
      { w: 'Wessen' },
      { w: 'Buch' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'benutzt' },
      { w: '?', plain: true },
      { w: 'Annas' },
      { w: 'Buch' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'war' },
      { w: 'hilfreicher' },
      { w: 'als' },
      { w: 'mein' },
      { w: 'altes' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum konnte Nick nicht viel lernen?', qEn: 'Why couldn\'t Nick study much?', options: ['Er war krank.', 'Er hatte Familie zu Besuch.', 'Er hatte keine Zeit.', 'Er war im Urlaub.'], optionsEn: ['He was ill.', 'He had family visiting.', 'He had no time.', 'He was on holiday.'], answer: 1,
        explain: '"Weil ich Familie hatte …"' },
      { q: 'Wessen Buch hat Runa benutzt?', qEn: 'Whose book did Runa use?', options: ['ihr eigenes', 'Nicks', 'Annas', 'Timos'], optionsEn: ['her own', 'Nick\'s', 'Anna\'s', 'Timo\'s'], answer: 2,
        explain: '"Annas Buch."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor und sag, warum du Deutsch lernst.", taskEn: "Exam, Part 1: introduce yourself and say why you're learning German.", de: "Ich heiße Anna und ich lerne Deutsch, weil ich hier arbeiten möchte.", en: "My name is Anna and I'm learning German because I want to work here." },
    { task: "Prüfung, Teil 2: Beschreibe ein Bild — eine Feier im Restaurant.", taskEn: "Exam, Part 2: describe a picture — a party in a restaurant.", de: "Auf dem Bild sitzen Freunde im Restaurant. Sie essen Kuchen und feiern.", en: "In the picture friends are sitting in a restaurant. They're eating cake and celebrating." },
    { task: "Prüfung, Teil 3: Deine Partnerin fragt, was du gestern gemacht hast.", taskEn: "Exam, Part 3: your partner asks what you did yesterday.", de: "Ich bin zu Anna gefahren und wir haben zusammen gekocht.", en: "I went to Anna's and we cooked together." },
    { task: "Prüfung, Teil 3: Plant zusammen eine Feier.", taskEn: "Exam, Part 3: plan a party together.", de: "Ich hoffe, dass alle kommen. Kannst du den Kuchen mitbringen?", en: "I hope everybody comes. Can you bring the cake?" }
  ],

  // ---------- Writing (Goethe-style email task) ----------
  writing: {
    prompt: 'Goethe-style writing: A friend has invited you to a party on Saturday. Write a short reply email (about 40 words). Include: a greeting (Liebe/r \u2026 or Hallo \u2026), thank them, say whether you can come and why (use weil), one comparison (als or so ... wie), and a close (Viele Gr\u00fc\u00dfe + your name). Recycle Phase 1 grammar naturally.',
    starters: ['Liebe \u2026 / Hallo \u2026,', 'Vielen Dank f\u00fcr die Einladung!', 'Ich komme gern, weil \u2026', 'Viele Gr\u00fc\u00dfe, \u2026'],
    placeholder: 'Hallo Lena,\nvielen Dank f\u00fcr die Einladung! Ich komme sehr gern, weil ich dich lange nicht gesehen habe. Deine neue Wohnung ist sicher sch\u00f6ner als \u2026\nViele Gr\u00fc\u00dfe,\nAnna',
    minWords: 40
  },

  // ---------- Exercises (mixed, all four types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Ich bin gefahren zu meiner Oma, weil sie Geburtstag hatte.',
        'Ich bin zu meiner Oma gefahren, weil sie Geburtstag hatte.',
        'Ich habe zu meiner Oma gefahren, weil sie Geburtstag hatte.',
        'Ich bin zu meine Oma gefahren, weil sie hatte Geburtstag.'
      ],
      answer: 1,
      explain: 'fahren takes sein (Perfekt, Partizip at end); mit dative-verb-less "zu + meiner Oma" (dative); weil sends hatte to the end.'
    },
    gap: {
      // modal Präteritum + comparison
      sentence: ['Am Wochenende ', ' ich arbeiten, aber der Abend war so sch\u00f6n ', ' im Kino.'],
      gaps: [ { answer: 'musste', accepts: ['musste'] }, { answer: 'wie', accepts: ['wie'] } ],
      explain: 'm\u00fcssen \u2192 musste (Ch.6); equality so sch\u00f6n wie (Ch.9).'
    },
    match: {
      q: 'Match each Phase 1 topic to a correct example.',
      pairs: [
        { noun: 'Genitiv: Name + s', art: 'Annas Buch' },
        { noun: 'Modalverb Pr\u00e4teritum', art: 'ich musste' },
        { noun: 'Possessiv im Dativ', art: 'mit meinen Freunden' },
        { noun: 'Komparativ + als', art: 'besser als der letzte' },
        { noun: 'Gleichheit mit wie', art: 'so gut wie im Restaurant' }
      ]
    },
    builder: {
      target: 'Build: "I think that the cake was the best." ',
      bank: ['Ich', 'glaube', 'dass', 'der', 'Kuchen', 'am', 'besten', 'war'],
      answer: ['Ich', 'glaube', 'dass', 'der', 'Kuchen', 'am', 'besten', 'war'],
      roles: { 'Ich': 'r-subject', 'glaube': 'r-verb', 'dass': 'r-dass', 'der': 'r-subject', 'Kuchen': 'r-subject', 'am': 'r-superlativ', 'besten': 'r-superlativ', 'war': 'r-verb' }
    }
  },

  // ---------- Mock Test (quiz \u2014 mixed across Ch.1-9) ----------
  quiz: [
    { q: 'Ch.1 \u2014 How do you write "Max\u2019s phone"?', options: ['Maxs Handy', 'Max\u2019 Handy', 'Max Handy', 'Handy von Maxs'], answer: 1,
      explain: 'Names ending in -s take an apostrophe only: Max\u2019 Handy.' },
    { q: 'Ch.2 \u2014 Complete the Perfekt: "Ich ___ nach Berlin ___."', options: ['habe \u2026 gefahren', 'bin \u2026 gefahren', 'bin \u2026 gefahrt', 'habe \u2026 fahren'], answer: 1,
      explain: 'fahren is movement \u2192 sein + gefahren.' },
    { q: 'Ch.4/5 \u2014 Which is correct?', options: ['Ich glaube, dass es war gut.', 'Ich glaube, dass es gut war.', 'Ich glaube, dass war es gut.', 'Ich glaube dass es gut war.'], answer: 1,
      explain: 'dass sends the conjugated verb (war) to the end, with a comma before dass.' },
    { q: 'Ch.6 \u2014 Which sounds natural in the past?', options: ['Ich habe arbeiten gemusst.', 'Ich musste arbeiten.', 'Ich muss gearbeitet.', 'Ich bin arbeiten gemusst.'], answer: 1,
      explain: 'For modals use the Pr\u00e4teritum: ich musste arbeiten.' },
    { q: 'Ch.7 \u2014 Complete: "Ich war mit ___ Freunden im Kino."', options: ['meine', 'meinen', 'meinem', 'meiner'], answer: 1,
      explain: 'Plural dative \u2192 -en: mit meinen Freunden.' },
    { q: 'Ch.8/9 \u2014 Which is correct?', options: ['Der Film war besser wie der letzte.', 'Der Film war so besser als der letzte.', 'Der Film war besser als der letzte.', 'Der Film war gutter als der letzte.'], answer: 2,
      explain: 'Komparativ (besser) + als. "than" is als, never wie.' }
  ],

  // ---------- Summary: Score & revision plan ----------
  takeaways: [
    { c: 'r-genitiv', html: '<b>Possession & past:</b> Name + s (Annas Buch, Max\u2019 Handy) and the Perfekt with the right helper (ich <b>bin</b> gefahren, ich <b>habe</b> gemacht).' },
    { c: 'r-weil', html: '<b>Clauses & modals:</b> <span class="de r-weil">weil</span> / <span class="de r-dass">dass</span> send the verb to the end; modal past is the Pr\u00e4teritum \u2014 <span class="de r-modalverb">ich musste, konnte, wollte</span>.' },
    { c: 'r-vergleich', html: '<b>Cases & comparison:</b> dative possessives (<span class="de r-dativ">mit meinen Freunden</span>) and the golden rule \u2014 different \u2192 <span class="de r-vergleich">als</span>, same \u2192 <span class="de r-vergleich">wie</span>.' }
  ],
  revisionTips: [
    'Score 5\u20136/6: Phase 1 is solid \u2014 move on to Ch.11 (Nebensatz mit wenn).',
    'Score 3\u20134/6: revise the topics you missed \u2014 most often weil/dass word order (Ch.4\u20135) or the dative possessive (Ch.7).',
    'Score 0\u20132/6: re-read the Grammar Review cards above, redo Ch.6\u20139, then retake this checkpoint before Phase 2.',
    'Strength check: comparisons (Ch.8\u20139) and Perfekt (Ch.2) are the most tested \u2014 make sure als/wie and sein/haben are automatic.'
  ]
};

window.CHAPTER = CHAPTER;
