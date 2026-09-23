/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 23
   "Konjunktiv II: sollte (Ratschläge)" — giving advice,
   recommendations, opinions and soft obligations with sollen's
   Konjunktiv II. Present forms only: ich sollte, du solltest,
   er/sie/es sollte, wir sollten, ihr solltet, sie/Sie sollten.
   No hätte sollen, no würde, no Konjunktiv II of other verbs,
   no B1 hypothetical structures.
   Vocabulary source: uploaded chapter-23 list (~71 items; language
   school exam / music / travel / workplace theme — der Prüfer,
   die Abschlussprüfung, das Grundeinkommen, die Herzchirurgin).
   Recycles Ch.6, Ch.21–22 and A1 modal verbs throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-22-konjunktiv2-koennte-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "auflnehmen" → corrected to aufnehmen (to record).
   • "bereit|legen" → corrected to bereitlegen (to keep ready).
   • "dazulkommen" → corrected to dazukommen (to be added).
   • "dazullernen" → corrected to dazulernen (to learn something new).
   • "einlhalten" → corrected to einhalten (to adhere to).
   • "freilmachen" → corrected to freimachen (to clear, to free up).
   • "weglwerfen" → corrected to wegwerfen (to throw away).
   • "weiterlarbeiten" → corrected to weiterarbeiten (to continue
     working).
   • "zulnehmen" → corrected to zunehmen (to increase, to gain).
   • "mehr - longer" — imprecise gloss; mehr plainly means "more"
     (its well-known A1 meaning); glossed accurately here.
============================================================ */
const CHAPTER = {
  id: 'a2-23-konjunktiv2-sollte',
  phase: 'A2 · Phase 2',
  number: 23,
  title: 'Konjunktiv II: sollte (Ratschläge)',
  titleEn: 'Konjunktiv II: sollte (advice)',
  description: 'Du sollst mehr lernen. is an instruction. Du solltest mehr lernen. is advice — a recommendation, an opinion, offered rather than ordered. This chapter drills sollen\'s Konjunktiv II (ich sollte, du solltest, wir sollten …) across its everyday jobs: giving advice, recommending, sharing an opinion, and naming a soft obligation.',
  xp: 180,
  time: 25,
  difficulty: 'Elementary',
  nextChapter: { number: 24, title: 'deshalb & trotzdem', titleEn: 'deshalb & trotzdem' , href: 'chapter-a2-24-deshalb-trotzdem.html' },

  prevChapter: { number: 22, title: 'Konjunktiv II: könnte', titleEn: 'Konjunktiv II: könnte', href: 'chapter-a2-22-konjunktiv2-koennte.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'The Abschlussprüfung is close, and Timo is nervous — so Petra keeps turning bare commands into gentler advice: not "Du sollst mehr üben" but "Du solltest mehr üben", the same idea offered as a recommendation rather than an order.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear soll and sollte side by side'
    ],
    scene: 'Vor der Abschlussprüfung — Sprachschule Berlin',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'nervös', role: 'r-adjective', en: 'nervous', hi: 'घबराया हुआ', pron: 'ner-VÖS', type: 'Adjective' },
        { w: 'vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Abschlussprüfung', role: 'r-dativ', en: 'final exam (dat.)', hi: 'अंतिम परीक्षा से', pron: 'AP-shlus-prü-fung', type: 'Noun · fem. dat.', why: 'die Abschlussprüfung (this chapter).', ex: 'vor der Abschlussprüfung', exEn: 'before the final exam' },
        { w: '.', plain: true }
      ], en: 'I am so nervous before the final exam.', hi: 'Main antim pariksha se pehle itna ghabraya hua hoon.' },
      { speaker: 'Petra', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'solltest', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-test', type: 'Modal · sollen (Konjunktiv II, du)', why: 'solltest = should (advice), this chapter.', ex: 'Du solltest ruhig bleiben.', exEn: 'You should stay calm.' },
        { w: 'ruhig', role: 'r-adjective', en: 'calm', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You should stay calm.', hi: 'Tumhe shaant rehna chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'mache', role: 'r-verb', en: 'do I do', hi: 'करूं', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'How do I do that?', hi: 'Main yeh kaise karoon?' },
      { speaker: 'Petra', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'solltest', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-test', type: 'Modal · sollen (Konjunktiv II, du)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.' },
        { w: 'früh', role: 'r-adverb', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb' },
        { w: 'schlafen', role: 'r-verb', en: 'sleep', hi: 'सोना', pron: 'SHLAH-fen', type: 'Verb · infinitive (Satzende)' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive' },
        { w: '.', plain: true }
      ], en: 'You should go to sleep early this evening.', hi: 'Tumhe aaj shaam jaldi sona chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'früh', role: 'r-time', en: 'early', hi: 'सुबह', pron: 'frü', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'And tomorrow morning?', hi: 'Aur kal subah?' },
      { speaker: 'Petra', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'solltest', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-test', type: 'Modal · sollen (Konjunktiv II, du)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'hetzen', role: 'r-verb', en: 'rush', hi: 'जल्दबाज़ी करना', pron: 'HET-sen', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but rather', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adjective' },
        { w: 'frühstücken', role: 'r-verb', en: 'have breakfast', hi: 'नाश्ता करना', pron: 'FRÜ-shtü-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You should not rush, but rather have a good breakfast.', hi: 'Tumhe jaldbaazi nahi karni chahiye, balki achhe se nashta karna chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'सलाह', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II, ich)', why: 'sollte = should (ich/es), this chapter.', ex: 'Sollte ich früh ankommen?', exEn: 'Should I arrive early?' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'früh', role: 'r-adverb', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb' },
        { w: 'ankommen', role: 'r-verb', en: 'arrive', hi: 'पहुंचना', pron: 'AN-ko-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Good idea. Should I arrive early?', hi: 'Achha vichaar. Kya mujhe jaldi pahunchna chahiye?' },
      { speaker: 'Petra', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'solltest', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-test', type: 'Modal · sollen (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'होगे', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Stress', role: 'r-dativ', en: 'stress (dat.)', hi: 'तनाव', pron: 'shtres', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, you should. Then you will not be stressed.', hi: 'Haan, tumhe chahiye. Phir tum tanaav mein nahi hoge.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Du sollst mehr lernen.</span> is an instruction. <span class="de r-modalverb">Du solltest mehr lernen.</span> is <strong>advice</strong> — a recommendation, an opinion, offered rather than ordered. <strong>sollte is Konjunktiv II of sollen</strong>: ich sollte, du solltest, er/sie/es sollte, wir sollten, ihr solltet, sie/Sie sollten. It covers <b>advice</b> (Du solltest…), <b>recommendation</b> (Sie sollten…), <b>opinion</b> (Ich denke, du solltest…), and <b>soft obligation</b> (Wir sollten…) — always gentler than plain soll.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II OF SOLLEN (sollte) for advice, recommendations, opinions, and soft obligations. ' +
    'No hätte sollen, no würde, no Konjunktiv II of other verbs, no B1 hypothetical structures. The learner wrote advice/recommendations below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Conjugation: ich sollte, du solltest, er/sie/es sollte, wir sollten, ihr solltet, sie/Sie sollten. Flag wrong endings (e.g. "du soll Deutsch lernen" mixes soll with sollte-style advice — should be "du solltest").\n' +
    '- sollte + bare infinitive at the end: "Du solltest mehr schlafen." Flag "du solltest zu gehst" (wrong verb form; should be "du solltest gehen") or "man sollte geht" (should be "man sollte gehen").\n' +
    '- soll = instruction/obligation (a direct command); sollte = recommendation/advice (softer, an opinion). If the learner uses soll where advice is clearly intended, gently suggest sollte — but don\'t mark soll as wrong when a real instruction is intended.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>soll vs. sollte check:</b> one sentence on whether the learner picked the right level of directness.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You give advice naturally with sollte, and you know when a plain soll instruction is meant instead. Next: link ideas across sentences with deshalb and trotzdem.',
    mid: 'Good. Re-read the sollte conjugation and the soll vs. sollte card once, then continue.',
    low: 'Worth another pass — remember: sollte softens soll into advice, a recommendation, or an opinion. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Du', role: 'r-subject' }, { w: 'solltest', role: 'r-modalverb' },
    { w: 'mehr', role: 'r-adverb' }, { w: 'schlafen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how sollte softens soll into advice, a recommendation, or an opinion.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A pre-exam afternoon full of gentle sollte advice.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Abschlussprüfung, der Prüfer, einhalten, realistisch.' },
    { id: 'grammar',    label: 'sollte',     tag: 'core',
      objective: 'Master the conjugation, the four uses, soll vs. sollte, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an advice email full of sollte recommendations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each sollte use in a workplace and health conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give advice on health, study, work and travel.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an advice email or study plan using sollte.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill conjugation, soll vs. sollte, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s exam, music and workplace words — die Abschlussprüfung, der Prüfer, das Klavier, die Konferenz — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'sollte conjugation drills, soll vs. sollte sorting, and an advice-email writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full sollte conjugation table, the four-use breakdown, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Du solltest mehr schlafen.', text: 'Give advice instead of an order' },
    { de: 'Sie sollten den Arzt besuchen.', text: 'Make a recommendation' },
    { de: 'Ich denke, du solltest das machen.', text: 'Share an opinion softly' },
    { de: 'Wir sollten pünktlich sein.', text: 'Name a soft obligation' },
    { de: 'soll = order · sollte = advice', text: 'Choose the right one every time' }
  ],

  // ---------- Vocabulary (~71 items) ----------
  vocab: [
    { de: 'Abschlussprüfung', art: 'die', gender: 'f', plural: 'Abschlussprüfungen', pos: 'noun', en: 'final exam', hi: 'अंतिम परीक्षा', ex: 'Ich bin neugierig, wie die Abschlussprüfung wird.', exEn: 'I am curious how the final exam will be.' },
    { de: 'also gut', pos: 'phrase', en: 'very well', hi: 'ठीक है फिर', ex: 'Also gut, wir sollten jetzt los.', exEn: 'Very well, we should get going now.' },
    { de: 'Arbeitsleben', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'professional life', hi: 'व्यावसायिक जीवन', ex: 'Du solltest über dein Arbeitsleben nachdenken.', exEn: 'You should think about your professional life.' },
    { de: 'aufnehmen', pos: 'verb', en: 'to record', hi: 'रिकॉर्ड करना', ex: 'Du solltest die Prüfung aufnehmen.', exEn: 'You should record the exam.', conj: { praesens: 'nimmt auf', praeteritum: 'nahm auf', perfekt: 'hat aufgenommen' } },
    { de: 'ausländisch', pos: 'adjective', en: 'foreign', hi: 'विदेशी', ex: 'Der Prüfer kommt aus einem ausländischen Institut.', exEn: 'The examiner comes from a foreign institute.' },
    { de: 'Band', art: 'die', gender: 'f', plural: 'Bands', pos: 'noun', en: 'band', hi: 'बैंड', ex: 'Ihr solltet die Band zur Feier einladen.', exEn: 'You should invite the band to the party.' },
    { de: 'beeilen (sich)', pos: 'verb', en: 'to hurry', hi: 'जल्दी करना', ex: 'Ich sollte mich beeilen.', exEn: 'I should hurry.', conj: { praesens: 'beeilt sich', praeteritum: 'beeilte sich', perfekt: 'hat sich beeilt' } },
    { de: 'bereitlegen', pos: 'verb', en: 'to keep ready', hi: 'तैयार रखना', ex: 'Du solltest deine Tasche bereitlegen.', exEn: 'You should keep your bag ready.', conj: { praesens: 'legt bereit', praeteritum: 'legte bereit', perfekt: 'hat bereitgelegt' } },
    { de: 'bereuen', pos: 'verb', en: 'to regret', hi: 'पछताना', ex: 'Du solltest das nicht bereuen.', exEn: 'You shouldn\'t regret that.', conj: { praesens: 'bereut', praeteritum: 'bereute', perfekt: 'hat bereut' } },
    { de: 'beschweren (sich)', pos: 'verb', en: 'to complain about', hi: 'शिकायत करना', ex: 'Du solltest dich nicht beschweren.', exEn: 'You shouldn\'t complain.', conj: { praesens: 'beschwert sich', praeteritum: 'beschwerte sich', perfekt: 'hat sich beschwert' } },
    { de: 'Chance', art: 'die', gender: 'f', plural: 'Chancen', pos: 'noun', en: 'opportunity', hi: 'मौक़ा', ex: 'Du solltest diese Chance nutzen.', exEn: 'You should make use of this opportunity.' },
    { de: 'chinesisch', pos: 'adjective', en: 'Chinese', hi: 'चीनी', ex: 'Man sollte auch ein chinesisches Restaurant probieren.', exEn: 'One should also try a Chinese restaurant.' },
    { de: 'dazukommen', pos: 'verb', en: 'to be added', hi: 'जुड़ना', ex: 'Vielleicht kommt da noch etwas dazu.', exEn: 'Maybe something will still be added.', conj: { praesens: 'kommt dazu', praeteritum: 'kam dazu', perfekt: 'ist dazugekommen' } },
    { de: 'dazulernen', pos: 'verb', en: 'to learn something new', hi: 'नया सीखना', ex: 'Du solltest jeden Tag etwas dazulernen.', exEn: 'You should learn something new every day.', conj: { praesens: 'lernt dazu', praeteritum: 'lernte dazu', perfekt: 'hat dazugelernt' } },
    { de: 'Freiwillige', art: 'der/die', gender: 'm/f', plural: 'Freiwillige', pos: 'noun', en: 'volunteer', hi: 'स्वयंसेवक', ex: 'Ein Freiwilliger sollte pünktlich sein.', exEn: 'A volunteer should be punctual.' },
    { de: 'einhalten', pos: 'verb', en: 'to adhere to', hi: 'पालन करना', ex: 'Ihr solltet den Fahrplan einhalten.', exEn: 'You should stick to the timetable.', conj: { praesens: 'hält ein', praeteritum: 'hielt ein', perfekt: 'hat eingehalten' } },
    { de: 'einzeln', pos: 'adjective', en: 'single', hi: 'एकल', ex: 'Du solltest jeden einzelnen Punkt prüfen.', exEn: 'You should check each single item.' },
    { de: 'Fahrplan', art: 'der', gender: 'm', plural: 'Fahrpläne', pos: 'noun', en: 'timetable', hi: 'समय सारणी', ex: 'Ihr solltet den Fahrplan einhalten.', exEn: 'You should stick to the timetable.' },
    { de: 'Figur', art: 'die', gender: 'f', plural: 'Figuren', pos: 'noun', en: 'character', hi: 'पात्र', ex: 'Man sollte jede Figur im Buch verstehen.', exEn: 'One should understand every character in the book.' },
    { de: 'freimachen', pos: 'verb', en: 'to clear, to free up', hi: 'खाली करना', ex: 'Du solltest den Gang freimachen.', exEn: 'You should clear the aisle.', conj: { praesens: 'macht frei', praeteritum: 'machte frei', perfekt: 'hat freigemacht' } },
    { de: 'Gang', art: 'der', gender: 'm', plural: 'Gänge', pos: 'noun', en: 'aisle', hi: 'रास्ता', ex: 'Du solltest den Gang freimachen.', exEn: 'You should clear the aisle.' },
    { de: 'geben', pos: 'verb', en: 'to give', hi: 'देना', ex: 'Man sollte eine Zitrone in den Tee geben.', exEn: 'One should put a lemon in the tea.', conj: { praesens: 'gibt', praeteritum: 'gab', perfekt: 'hat gegeben' } },
    { de: 'gebraucht', pos: 'adjective', en: 'used', hi: 'पुराना', ex: 'Du solltest kein gebrauchtes Buch kaufen.', exEn: 'You shouldn\'t buy a used book.' },
    { de: 'Gesprächspartnerin', art: 'die', gender: 'f', plural: 'Gesprächspartnerinnen', pos: 'noun', en: 'interlocutor (f.)', hi: 'बातचीत साथी (महिला)', ex: 'Deine Gesprächspartnerin sollte dich verstehen.', exEn: 'Your interlocutor should understand you.' },
    { de: 'hinterlassen', pos: 'verb', en: 'to leave (a message)', hi: 'छोड़ना', ex: 'Du solltest eine Nachricht hinterlassen.', exEn: 'You should leave a message.', conj: { praesens: 'hinterlässt', praeteritum: 'hinterließ', perfekt: 'hat hinterlassen' } },
    { de: 'Hälfte', art: 'die', gender: 'f', plural: 'Hälften', pos: 'noun', en: 'half', hi: 'आधा', ex: 'Du solltest nur die Hälfte essen.', exEn: 'You should only eat half.' },
    { de: 'häufig', pos: 'adjective', en: 'often', hi: 'अक्सर', ex: 'Du solltest häufig üben.', exEn: 'You should practise often.' },
    { de: 'Inhalt', art: 'der', gender: 'm', plural: 'Inhalte', pos: 'noun', en: 'content', hi: 'सामग्री', ex: 'Der Prospekt sollte den ganzen Inhalt zeigen.', exEn: 'The brochure should show the whole content.' },
    { de: 'Interesse', art: 'das', gender: 'n', plural: 'Interessen', pos: 'noun', en: 'interest', hi: 'रुचि', ex: 'Du solltest dein Interesse zeigen.', exEn: 'You should show your interest.' },
    { de: 'kapieren', pos: 'verb', en: 'to understand', hi: 'समझना', ex: 'Du solltest das schnell kapieren.', exEn: 'You should understand that quickly.', conj: { praesens: 'kapiert', praeteritum: 'kapierte', perfekt: 'hat kapiert' } },
    { de: 'Klassiker', art: 'der', gender: 'm', plural: 'Klassiker', pos: 'noun', en: 'classic', hi: 'क्लासिक', ex: 'Du solltest diesen Klassiker lesen.', exEn: 'You should read this classic.' },
    { de: 'Klavier', art: 'das', gender: 'n', plural: 'Klaviere', pos: 'noun', en: 'piano', hi: 'पियानो', ex: 'Ich denke, du solltest weiter Klavier üben.', exEn: 'I think you should keep practising piano.' },
    { de: 'Konferenz', art: 'die', gender: 'f', plural: 'Konferenzen', pos: 'noun', en: 'conference', hi: 'सम्मेलन', ex: 'Ich habe einen Prospekt über die Konferenz gefunden.', exEn: 'I found a brochure about the conference.' },
    { de: 'Leiter', art: 'der', gender: 'm', plural: 'Leiter', pos: 'noun', en: 'director', hi: 'निर्देशक', ex: 'Der Leiter sollte den Zeitplan prüfen.', exEn: 'The director should check the schedule.' },
    { de: 'lächeln', pos: 'verb', en: 'to smile', hi: 'मुस्कुराना', ex: 'Du solltest während der Prüfung lächeln.', exEn: 'You should smile during the exam.', conj: { praesens: 'lächelt', praeteritum: 'lächelte', perfekt: 'hat gelächelt' } },
    { de: 'Maschine', art: 'die', gender: 'f', plural: 'Maschinen', pos: 'noun', en: 'machine, train (colloquial)', hi: 'गाड़ी/मशीन', ex: 'Wir sollten nicht die falsche Maschine nehmen.', exEn: 'We shouldn\'t take the wrong train.' },
    { de: 'mehr', pos: 'adverb', en: 'more', hi: 'और', ex: 'Du solltest mehr Deutsch sprechen.', exEn: 'You should speak more German.' },
    { de: 'Menge', art: 'die', gender: 'f', plural: 'Mengen', pos: 'noun', en: 'amount', hi: 'मात्रा', ex: 'Du solltest nur eine kleine Menge nehmen.', exEn: 'You should only take a small amount.' },
    { de: 'neugierig', pos: 'adjective', en: 'curious', hi: 'उत्सुक', ex: 'Ich bin neugierig, wie die Prüfung wird.', exEn: 'I am curious how the exam will be.' },
    { de: 'Oberarzt', art: 'der', gender: 'm', plural: 'Oberärzte', pos: 'noun', en: 'consultant doctor', hi: 'वरिष्ठ चिकित्सक', ex: 'Sie sollten den Oberarzt besuchen.', exEn: 'You should visit the consultant doctor.' },
    { de: 'Prospekt', art: 'der', gender: 'm', plural: 'Prospekte', pos: 'noun', en: 'brochure', hi: 'विवरणिका', ex: 'Ich sollte den Prospekt nicht wegwerfen.', exEn: 'I shouldn\'t throw away the brochure.' },
    { de: 'Prüfer', art: 'der', gender: 'm', plural: 'Prüfer', pos: 'noun', en: 'examiner', hi: 'परीक्षक', ex: 'Sie sollten auch unseren Prüfer fragen.', exEn: 'You should also ask our examiner.' },
    { de: 'Punkt', art: 'der', gender: 'm', plural: 'Punkte', pos: 'noun', en: 'item, point', hi: 'बिंदु', ex: 'Du solltest jeden einzelnen Punkt prüfen.', exEn: 'You should check each single item.' },
    { de: 'Qualität', art: 'die', gender: 'f', plural: 'Qualitäten', pos: 'noun', en: 'quality', hi: 'गुणवत्ता', ex: 'Sie sollten die Qualität der Prüfung fragen.', exEn: 'You should ask about the quality of the exam.' },
    { de: 'realistisch', pos: 'adjective', en: 'realistic', hi: 'यथार्थवादी', ex: 'Sei realistisch, du hast gut gelernt.', exEn: 'Be realistic, you\'ve learned well.' },
    { de: 'Reparatur', art: 'die', gender: 'f', plural: 'Reparaturen', pos: 'noun', en: 'repair', hi: 'मरम्मत', ex: 'Du solltest die Reparatur nicht vergessen.', exEn: 'You shouldn\'t forget the repair.' },
    { de: 'selbstständig', pos: 'adjective', en: 'independent', hi: 'स्वतंत्र', ex: 'Du solltest selbstständiger lernen.', exEn: 'You should learn more independently.' },
    { de: 'Service', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'service', hi: 'सेवा', ex: 'Der Service sollte freundlich sein.', exEn: 'The service should be friendly.' },
    { de: 'stressfrei', pos: 'adjective', en: 'stress-free', hi: 'तनावमुक्त', ex: 'Die Prüfung sollte stressfrei sein.', exEn: 'The exam should be stress-free.' },
    { de: 'Sängerin', art: 'die', gender: 'f', plural: 'Sängerinnen', pos: 'noun', en: 'singer (f.)', hi: 'गायिका', ex: 'Die Sängerin sollte lauter singen.', exEn: 'The singer should sing louder.' },
    { de: 'Trattoria', art: 'die', gender: 'f', plural: 'Trattorien', pos: 'noun', en: 'trattoria', hi: 'इटैलियन रेस्तरां', ex: 'Wir sollten die neue Trattoria probieren.', exEn: 'We should try the new trattoria.' },
    { de: 'unnötig', pos: 'adjective', en: 'unnecessary', hi: 'अनावश्यक', ex: 'Du solltest unnötigen Stress vermeiden.', exEn: 'You should avoid unnecessary stress.' },
    { de: 'wegwerfen', pos: 'verb', en: 'to throw away', hi: 'फेंकना', ex: 'Ich sollte den Prospekt nicht wegwerfen.', exEn: 'I shouldn\'t throw away the brochure.', conj: { praesens: 'wirft weg', praeteritum: 'warf weg', perfekt: 'hat weggeworfen' } },
    { de: 'weiterarbeiten', pos: 'verb', en: 'to continue working', hi: 'काम करते रहना', ex: 'Ich denke, du solltest weiterarbeiten.', exEn: 'I think you should keep working.', conj: { praesens: 'arbeitet weiter', praeteritum: 'arbeitete weiter', perfekt: 'hat weitergearbeitet' } },
    { de: 'wohl', pos: 'adverb', en: 'might, probably', hi: 'शायद', ex: 'Das ist wohl wahr.', exEn: 'That might well be true.' },
    { de: 'Zeitplan', art: 'der', gender: 'm', plural: 'Zeitpläne', pos: 'noun', en: 'schedule', hi: 'समय सारणी', ex: 'Der Leiter sollte den Zeitplan prüfen.', exEn: 'The director should check the schedule.' },
    { de: 'Zitrone', art: 'die', gender: 'f', plural: 'Zitronen', pos: 'noun', en: 'lemon', hi: 'नींबू', ex: 'Man sollte eine Zitrone in den Tee geben.', exEn: 'One should put a lemon in the tea.' },
    { de: 'zunehmen', pos: 'verb', en: 'to increase, to gain', hi: 'बढ़ना', ex: 'Die Nervosität sollte nicht zunehmen.', exEn: 'The nervousness shouldn\'t increase.', conj: { praesens: 'nimmt zu', praeteritum: 'nahm zu', perfekt: 'hat zugenommen' } },
    { de: 'übersetzen', pos: 'verb', en: 'to translate', hi: 'अनुवाद करना', ex: 'Du solltest den Text vorher übersetzen.', exEn: 'You should translate the text beforehand.', conj: { praesens: 'übersetzt', praeteritum: 'übersetzte', perfekt: 'hat übersetzt' } },
    { de: 'übrigens', pos: 'adverb', en: 'by the way', hi: 'वैसे', ex: 'Übrigens, ich habe einen Prospekt gefunden.', exEn: 'By the way, I found a brochure.' },
    { de: 'Altersangabe', art: 'die', gender: 'f', plural: 'Altersangaben', pos: 'noun', en: 'age statement', hi: 'आयु विवरण', ex: 'Du solltest die Altersangabe im Formular prüfen.', exEn: 'You should check the age statement in the form.' },
    { de: 'Babysitter', art: 'der', gender: 'm', plural: 'Babysitter', pos: 'noun', en: 'babysitter', hi: 'बच्चा-देखभालक', ex: 'Du solltest einen erfahrenen Babysitter suchen.', exEn: 'You should look for an experienced babysitter.' },
    { de: 'Einleitung', art: 'die', gender: 'f', plural: 'Einleitungen', pos: 'noun', en: 'introduction', hi: 'परिचय', ex: 'Du solltest die Einleitung kürzer schreiben.', exEn: 'You should write the introduction shorter.' },
    { de: 'Fernfahrerin', art: 'die', gender: 'f', plural: 'Fernfahrerinnen', pos: 'noun', en: 'long-distance lorry driver (f.)', hi: 'लंबी दूरी की ट्रक चालक (महिला)', ex: 'Die Fernfahrerin sollte öfter Pause machen.', exEn: 'The long-distance lorry driver should take breaks more often.' },
    { de: 'Gebärdentelefon', art: 'das', gender: 'n', plural: 'Gebärdentelefone', pos: 'noun', en: 'sign language telephone', hi: 'सांकेतिक भाषा टेलीफ़ोन', ex: 'Die Schule sollte ein Gebärdentelefon anbieten.', exEn: 'The school should offer a sign language telephone.' },
    { de: 'Grundeinkommen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'basic income', hi: 'बुनियादी आय', ex: 'Man sollte über ein Grundeinkommen diskutieren.', exEn: 'One should discuss a basic income.' },
    { de: 'Herzchirurgin', art: 'die', gender: 'f', plural: 'Herzchirurginnen', pos: 'noun', en: 'heart surgeon (f.)', hi: 'हृदय शल्य चिकित्सक (महिला)', ex: 'Die Herzchirurgin sollte genug schlafen.', exEn: 'The heart surgeon should sleep enough.' },
    { de: 'Kunstmuseum', art: 'das', gender: 'n', plural: 'Kunstmuseen', pos: 'noun', en: 'art museum', hi: 'कला संग्रहालय', ex: 'Wir sollten das Kunstmuseum besuchen.', exEn: 'We should visit the art museum.' },
    { de: 'Mineralwasser', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'mineral water', hi: 'खनिज पानी', ex: 'Man sollte genug Mineralwasser trinken.', exEn: 'One should drink enough mineral water.' },
    { de: 'Standesamt', art: 'das', gender: 'n', plural: 'Standesämter', pos: 'noun', en: "registrar's office", hi: 'रजिस्ट्रार कार्यालय', ex: 'Ihr solltet früh zum Standesamt gehen.', exEn: "You should go to the registrar's office early." }
  ],

  // ---------- Konjunktiv II: sollte (rule cards) ----------
  grammar: [
    {
      title: 'Conjugation and soll vs. sollte',
      body: [
        '<span class="de r-modalverb">sollte</span> is the Konjunktiv II of sollen — same meaning family as "should", but a recommendation or opinion, not a direct order.'
      ],
      table: {
        head: ['Person', 'sollen (soll)', 'Konjunktiv II (sollte)'],
        rows: [
          ['ich', 'soll', '<span class="de r-modalverb">sollte</span>'],
          ['du', 'sollst', '<span class="de r-modalverb">solltest</span>'],
          ['er/sie/es', 'soll', '<span class="de r-modalverb">sollte</span>'],
          ['wir', 'sollen', '<span class="de r-modalverb">sollten</span>'],
          ['ihr', 'sollt', '<span class="de r-modalverb">solltet</span>'],
          ['sie/Sie', 'sollen', '<span class="de r-modalverb">sollten</span>']
        ]
      },
      note: '<span class="de">Du sollst mehr lernen.</span> (instruction) vs. <span class="de">Du solltest mehr lernen.</span> (advice).',
      hinglish: '<b>sollte</b> <b>sollen</b> ka Konjunktiv II hai. Matlab \u201cshould\u201d jaisa hai, lekin yeh seedha order nahi deta \u2014 sirf advice ya recommendation deta hai.'
    },
    {
      title: 'Four everyday uses',
      body: [
        'sollte does four jobs in everyday German — all gentler than a direct instruction.'
      ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Advice', '<span class="de">Du solltest mehr schlafen.</span> / <span class="de">Ihr solltet mehr Deutsch sprechen.</span>'],
          ['Recommendation', '<span class="de">Sie sollten den Arzt besuchen.</span> / <span class="de">Man sollte genug Wasser trinken.</span>'],
          ['Opinion', '<span class="de">Ich denke, du solltest das machen.</span> / <span class="de">Wir sollten früher losfahren.</span>'],
          ['Soft obligation', '<span class="de">Du solltest deine Hausaufgaben machen.</span> / <span class="de">Wir sollten pünktlich sein.</span>']
        ]
      },
      note: 'Common frames: <span class="de">Du solltest … / Sie sollten … / Wir sollten … / Man sollte … / Ich glaube, du solltest …</span>',
      hinglish: '<b>sollte</b> chaar kaam karta hai: advice dena, recommendation dena, apni opinion batana, aur halka-phulka obligation. Yeh sab <b>soll</b> se zyada soft lagte hain.'
    },
    {
      title: 'soll vs. sollte',
      body: [
        'soll is a direct instruction or obligation — a rule, an order. sollte softens it into a recommendation, an opinion, or a suggestion.'
      ],
      table: {
        head: ['soll (instruction)', 'sollte (advice)'],
        rows: [
          ['<span class="de">Du sollst mehr lernen.</span>', '<span class="de">Du solltest mehr lernen.</span>'],
          ['<span class="de">Ihr sollt pünktlich sein.</span> (a rule)', '<span class="de">Ihr solltet pünktlich sein.</span> (advice)'],
          ['<span class="de">Er soll den Arzt besuchen.</span> (told to)', '<span class="de">Er sollte den Arzt besuchen.</span> (recommended to)']
        ]
      },
      hinglish: 'soll = seedha instruction/obligation (order). sollte = advice, recommendation, ya opinion — narm.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Du soll Deutsch lernen.</span> → <span class="de">Du solltest Deutsch lernen.</span> — "du soll" is not a valid conjugation; du takes -st: sollst or solltest.',
        '<span class="de strike">Du solltest zu gehst.</span> → <span class="de">Du solltest gehen.</span> — sollte takes a bare infinitive at the end, never a conjugated verb, and never with "zu".',
        '<span class="de strike">Man sollte geht.</span> → <span class="de">Man sollte gehen.</span> — same rule: bare infinitive, not a conjugated form.'
      ],
      hinglish: 'Do galtiyan common hain. <b>du soll</b> galat hai \u2014 sahi hai <b>du sollst</b> ya <b>du solltest</b>. Aur <b>sollte</b> ke baad plain infinitive aata hai, na conjugated verb aur na <b>zu</b>.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'One question decides the verb every time.' ],
      table: {
        head: ['Situation', 'Use'],
        rows: [
          ['Strong obligation or a rule?', '→ <span class="de">soll</span>'],
          ['Advice?', '→ <span class="de r-modalverb">sollte</span>'],
          ['Recommendation?', '→ <span class="de r-modalverb">sollte</span>'],
          ['Polite opinion?', '→ <span class="de r-modalverb">sollte</span>']
        ]
      },
      hinglish: 'Seedha obligation ya rule? soll. Advice, recommendation, ya polite opinion? sollte — teeno jagah sollte hi sahi hai.'
    }
  ],

  // ---------- Reading passage (Ratschläge vor der Prüfung, clickable) ----------
  reading: {
    title: 'Ratschläge vor der Prüfung',
    titleEn: 'Advice before the exam',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Adjective' },
      { w: 'Kursteilnehmer', role: 'r-object', en: 'course participants', hi: 'कोर्स सहभागी', pron: 'KOORS-tile-nay-mer', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition · Dat.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dative' },
      { w: 'Abschlussprüfung', role: 'r-dativ', en: 'final exam', hi: 'अंतिम परीक्षा', pron: 'AP-shloos-prü-foong', type: 'Noun · fem.', why: 'die Abschlussprüfung (this chapter).', ex: 'vor der Abschlussprüfung', exEn: 'before the final exam' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (Sie/sie)', why: 'sollten — recommendation (this chapter).', ex: 'Sie sollten früh schlafen gehen.', exEn: 'You should go to sleep early.' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'früh', role: 'r-time', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb' },
      { w: 'schlafen', role: 'r-verb', en: 'sleep', hi: 'सोना', pron: 'SHLAH-fen', type: 'Infinitive' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Infinitive' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
      { w: 'unnötigen', role: 'r-adjective', en: 'unnecessary', hi: 'अनावश्यक', pron: 'oon-NÖ-ti-gen', type: 'Adjective', why: 'unnötig (this chapter).', ex: 'unnötigen Stress vermeiden', exEn: 'to avoid unnecessary stress' },
      { w: 'Stress', role: 'r-akkusativ', en: 'stress', hi: 'तनाव', pron: 'shtres', type: 'Noun · masc.' },
      { w: 'haben', role: 'r-verb', en: 'have', hi: 'रखना', pron: 'HAH-ben', type: 'Verb · haben' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (Sie/sie)' },
      { w: 'außerdem', role: 'r-adverb', en: 'also, besides', hi: 'इसके अलावा', pron: 'OW-ser-daym', type: 'Adverb' },
      { w: 'genug', role: 'r-adverb', en: 'enough', hi: 'काफ़ी', pron: 'guh-NOOK', type: 'Adverb' },
      { w: 'Mineralwasser', role: 'r-akkusativ', en: 'mineral water', hi: 'खनिज पानी', pron: 'mi-neh-RAHL-va-ser', type: 'Noun · neut.', why: 'das Mineralwasser (this chapter).', ex: 'genug Mineralwasser trinken', exEn: 'to drink enough mineral water' },
      { w: 'trinken', role: 'r-verb', en: 'drink', hi: 'पीना', pron: 'TRIN-ken', type: 'Infinitive' },
      { w: '.', plain: true },
      { w: 'Man', role: 'r-subject', en: 'one', hi: 'व्यक्ति', pron: 'man', type: 'Pronoun' },
      { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Konjunktiv II · sollen' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.' },
      { w: 'Zeitplan', role: 'r-akkusativ', en: 'schedule', hi: 'समय सारणी', pron: 'TSYTE-plahn', type: 'Noun · masc.', why: 'der Zeitplan (this chapter).', ex: 'den Zeitplan prüfen', exEn: 'to check the schedule' },
      { w: 'prüfen', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'PRÜ-fen', type: 'Verb · prüfen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner · Akk.' },
      { w: 'einzelnen', role: 'r-adjective', en: 'single', hi: 'एकल', pron: 'INE-tsel-nen', type: 'Adjective', why: 'einzeln (this chapter).', ex: 'jeder einzelne Punkt', exEn: 'every single item' },
      { w: 'Punkt', role: 'r-akkusativ', en: 'item', hi: 'बिंदु', pron: 'poonkt', type: 'Noun · masc.', why: 'der Punkt (this chapter).', ex: 'jeder einzelne Punkt', exEn: 'every single item' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition · contraction' },
      { w: 'Fahrplan', role: 'r-place', en: 'timetable', hi: 'समय सारणी', pron: 'FAHR-plahn', type: 'Noun · masc.', why: 'der Fahrplan (this chapter).', ex: 'im Fahrplan', exEn: 'in the timetable' },
      { w: 'einhalten', role: 'r-verb', en: 'adhere to', hi: 'पालन करना', pron: 'INE-hal-ten', type: 'Verb · einhalten' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (wir)' },
      { w: 'außerdem', role: 'r-adverb', en: 'also, besides', hi: 'इसके अलावा', pron: 'OW-ser-daym', type: 'Adverb' },
      { w: 'niemand', role: 'r-subject', en: 'no one', hi: 'कोई नहीं', pron: 'NEE-mant', type: 'Pronoun' },
      { w: 'unnötig', role: 'r-adjective', en: 'unnecessary', hi: 'अनावश्यक', pron: 'oon-NÖ-tikh', type: 'Adjective' },
      { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार करना', pron: 'VAR-ten', type: 'Verb · warten' },
      { w: 'lassen', role: 'r-verb', en: 'let', hi: 'देना', pron: 'LAH-sen', type: 'Verb · lassen', why: 'lassen (recycled — Ch.22).', ex: 'jemanden warten lassen', exEn: 'to let someone wait' },
      { w: '.', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'zum', role: 'r-preposition', en: 'finally', hi: 'अंत में', pron: 'tsoom', type: 'Kontraktion · zu + dem' },
      { w: 'Schluss', role: 'r-dativ', en: 'end', hi: 'अंत', pron: 'shloos', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Konjunktiv II · sollen (Sie/sie)' },
      { w: 'während', role: 'r-preposition', en: 'during', hi: 'के दौरान', pron: 'VAY-rent', type: 'Preposition · Gen.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Prüfung', role: 'r-dativ', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-foong', type: 'Noun · fem.' },
      { w: 'einfach', role: 'r-adverb', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
      { w: 'lächeln', role: 'r-verb', en: 'smile', hi: 'मुस्कुराना', pron: 'LE-kheln', type: 'Verb · lächeln', why: 'lächeln (this chapter).', ex: 'während der Prüfung lächeln', exEn: 'to smile during the exam' },
      { w: '.', plain: true }
    ],
    translation: 'Dear course participants, before the final exam you should go to sleep early and not have unnecessary stress. You should also drink enough mineral water. One should also check the schedule and adhere to every single item in the timetable. We should also not let anyone wait unnecessarily. And finally: you should simply smile during the exam. — Watch the repeated sollten/sollte throughout: every piece of advice is offered, not ordered.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_023_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Petra, ich bin so nervös wegen der Prüfung.', en: 'Petra, I\'m so nervous about the exam.' },
      { id: 'A2_023_L002', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Du solltest ruhig atmen und heute früh schlafen gehen.', en: 'You should breathe calmly and go to bed early today.' },
      { id: 'A2_023_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und morgen früh? Sollte ich noch üben?', en: 'And tomorrow morning? Should I still practice?' },
      { id: 'A2_023_L004', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, du solltest nur ein gutes Frühstück essen.', en: 'No, you should just eat a good breakfast.' }
    ],
    transcript: 'Petra, ich bin so nervös wegen der Prüfung. Du solltest ruhig atmen und heute früh schlafen gehen. Und morgen früh? Sollte ich noch üben? Nein, du solltest nur ein gutes Frühstück essen.',
    translation: 'Petra, I\'m so nervous about the exam. You should breathe calmly and go to bed early today. And tomorrow morning? Should I still practice? No, you should just eat a good breakfast.',
    tokens: [
      { w: 'Petra' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'so' },
      { w: 'nervös' },
      { w: 'wegen' },
      { w: 'der' },
      { w: 'Prüfung' },
      { w: '.', plain: true },
      { w: 'Du' },
      { w: 'solltest' },
      { w: 'ruhig' },
      { w: 'atmen' },
      { w: 'und' },
      { w: 'heute' },
      { w: 'früh' },
      { w: 'schlafen' },
      { w: 'gehen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'morgen' },
      { w: 'früh' },
      { w: '?', plain: true },
      { w: 'Sollte' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'üben' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'solltest' },
      { w: 'nur' },
      { w: 'ein' },
      { w: 'gutes' },
      { w: 'Frühstück' },
      { w: 'essen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was rät Petra Timo für heute Abend?', qEn: 'What does Petra advise Timo to do tonight?', options: ['noch üben', 'früh schlafen gehen', 'fernsehen', 'laufen gehen'], optionsEn: ['keep practising', 'go to bed early', 'watch television', 'go running'], answer: 1,
        explain: '"Du solltest … heute früh schlafen gehen."' },
      { q: 'Was sollte Timo morgen früh machen?', qEn: 'What should Timo do tomorrow morning?', options: ['viel üben', 'ein gutes Frühstück essen', 'nichts essen', 'noch einmal alles lesen'], optionsEn: ['practise a lot', 'eat a good breakfast', 'eat nothing', 'read everything again'], answer: 1,
        explain: '"Du solltest nur ein gutes Frühstück essen."' }
    ]
  },

  speaking: [
    { task: "Dein Freund hat Angst vor der Abschlussprüfung. Was rätst du?", taskEn: "Your friend is afraid of the final exam. What do you advise?", de: "Du solltest jeden Tag eine Stunde lernen.", en: "You should study for an hour every day." },
    { task: "Deine Kollegin kommt oft zu spät. Was solltest du sagen?", taskEn: "Your colleague is often late. What should you say?", de: "Du solltest den Fahrplan lesen und dich mehr beeilen.", en: "You should read the timetable and hurry more." },
    { task: "Dein Bruder will die Chance nicht nutzen. Berate ihn.", taskEn: "Your brother doesn't want to take the chance. Advise him.", de: "Du solltest die Chance nutzen, sonst bereust du es.", en: "You should take the chance, otherwise you'll regret it." },
    { task: "Deine Freundin ist unzufrieden im Job. Was rätst du ihr?", taskEn: "Your friend is unhappy at work. What do you advise her?", de: "Sie sollte sich beschweren oder etwas Neues suchen.", en: "She should complain or look for something new." },
    { task: "Ein Freund will Chinesisch lernen. Gib einen Ratschlag.", taskEn: "A friend wants to learn Chinese. Give some advice.", de: "Du solltest jeden Tag etwas dazulernen.", en: "You should learn a bit more every day." },
    { task: "Dein Kollege hält die Frist nicht ein. Was sagst du?", taskEn: "Your colleague isn't meeting the deadline. What do you say?", de: "Du solltest die Frist einhalten und früher anfangen.", en: "You should meet the deadline and start earlier." },
    { task: "Deine Freundin fährt morgen weg. Was sollte sie vorbereiten?", taskEn: "Your friend is leaving tomorrow. What should she prepare?", de: "Sie sollte alles heute bereitlegen.", en: "She should get everything ready today." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short advice email (six sentences) recommending something to a friend before an exam or a trip, using at least four sollte/solltest/sollten sentences. Cover at least two of the four uses: advice, recommendation, opinion, soft obligation. Try this chapter\'s words: die Abschlussprüfung, einhalten, realistisch, stressfrei.',
    starters: ['Du solltest …', 'Ich denke, du solltest …', 'Wir sollten …', 'Man sollte …', 'Sie sollten …'],
    placeholder: 'Liebe Anna, vor der Prüfung solltest du …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct advice: "Du ___ mehr schlafen."',
      options: ['soll', 'sollst', 'solltest'],
      answer: 2,
      explain: 'solltest is the Konjunktiv II form for du — advice, not a bare order.'
    },
    gap: {
      sentence: ['Man ', ' genug Wasser trinken.'],
      gaps: [ { answer: 'sollte', accepts: ['sollte'] } ],
      explain: 'Man sollte + infinitive is a general recommendation.'
    },
    match: {
      q: 'Match each sollte sentence to its use.',
      pairs: [
        { noun: 'Du solltest mehr schlafen.', art: 'advice' },
        { noun: 'Sie sollten den Arzt besuchen.', art: 'recommendation' },
        { noun: 'Ich denke, du solltest das machen.', art: 'opinion' },
        { noun: 'Wir sollten pünktlich sein.', art: 'soft obligation' },
        { noun: 'Man sollte genug Wasser trinken.', art: 'general recommendation' }
      ]
    },
    builder: {
      target: 'Build: "You should speak more German."',
      bank: ['Du', 'solltest', 'mehr', 'Deutsch', 'sprechen', '.'],
      answer: ['Du', 'solltest', 'mehr', 'Deutsch', 'sprechen', '.'],
      roles: { 'Du': 'r-subject', 'solltest': 'r-modalverb', 'mehr': 'r-adverb', 'Deutsch': 'r-akkusativ', 'sprechen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the correct advice form for "du"?', options: ['soll', 'sollst', 'solltest'], answer: 2,
      explain: 'du solltest is the Konjunktiv II form for du — advice, not a bare instruction.' },
    { q: 'Which sentence gives advice, not an order?', options: ['Du sollst mehr lernen.', 'Du solltest mehr lernen.', 'Du musst mehr lernen.'], answer: 1,
      explain: 'solltest softens the idea into advice, not a direct order.' },
    { q: 'Complete: "___ Sie den Arzt besuchen." (recommendation, formal)', options: ['Sollen', 'Sollten', 'Soll'], answer: 1,
      explain: 'Sollten is the polite recommendation form for Sie.' },
    { q: 'Which is wrong?', options: ['Du solltest gehen.', 'Du solltest zu gehst.', 'Man sollte gehen.'], answer: 1,
      explain: 'sollte takes a bare infinitive at the end — never "zu" plus a conjugated verb.' },
    { q: 'Which describes soll vs. sollte correctly?', options: ['soll = advice, sollte = order', 'soll = order/instruction, sollte = advice/recommendation', 'They mean exactly the same'], answer: 1,
      explain: 'soll is a direct instruction; sollte softens it into advice or a recommendation.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: '<span class="de r-modalverb">sollte</span> is the Konjunktiv II of sollen — <b>softer</b> than soll: ich sollte, du solltest, er/sie/es sollte, wir sollten, ihr solltet, sie/Sie sollten.' },
    { c: 'r-modalverb', html: 'sollte does four jobs: <b>advice</b> (Du solltest…), <b>recommendation</b> (Sie sollten…), <b>opinion</b> (Ich denke, du solltest…), and <b>soft obligation</b> (Wir sollten…).' },
    { c: 'r-modalverb', html: 'sollte always takes a <b>bare infinitive</b> at the end — never "zu", never a second conjugated verb.' }
  ],
  revisionTips: [
    'Strong obligation or a rule? → soll. Advice, recommendation, or polite opinion? → sollte.',
    'sollte + bare infinitive at the end — never "zu", never a conjugated verb after it.',
    'du takes -st: sollst (instruction) or solltest (advice) — never bare "du soll".'
  ]
};

window.CHAPTER = CHAPTER;
