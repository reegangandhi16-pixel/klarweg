/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 44
   "Imperativ & Modalverben 2"  (commands + dürfen & sollen)
   Vocabulary source: uploaded chapter-44 word list (106 words).
   Theme = the doctor's office: health, body, advice & rules.
   Recycles Ch1–43. NOTE: content only — existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-44-imperativ-modal2',
  phase: 'A1 · Phase 5',
  number: 44,
  title: 'Imperativ & Modalverben 2',
  titleEn: 'Commands · dürfen & sollen',
  description: 'Tell people what to do, and finish the modal set. The Imperativ gives commands (Komm! Macht die Tür zu! Seien Sie ruhig!), dürfen asks permission (Darf ich?), and sollen gives advice or instructions (Du sollst mehr trinken). Perfect for the doctor, the classroom and public signs.',
  xp: 180,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 45, title: 'Telefonieren & Nachfragen', titleEn: 'Phone Calls' , href: 'chapter-a1-45-telefonieren.html' },

  prevChapter: { number: 43, title: 'Small Talk & man', titleEn: 'Small Talk & man', href: 'chapter-a1-43-smalltalk-man.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Marco wakes up sick the day before the exam, so he drags himself to Frau Dr. Berg. She examines him and fires off instructions — commands, what he may and may not do, and what he should take — while Marco, predictably, protests taking the medicine.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the Imperativ, darf and soll in real speech'
    ],
    scene: 'Beim Arzt \u2014 einen Tag vor der Pr\u00fcfung, Berlin',
    femaleSpeakers: ['Frau Dr. Berg'],
    dialogue: [
      { speaker: 'Frau Dr. Berg', tokens: [
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'fehlt', role: 'r-verb', en: 'is wrong', hi: 'तकलीफ़ है', pron: 'faylt', type: 'Verb · fehlen', why: 'fehlen + dative: "Was fehlt Ihnen?" = What ails you? (this chapter).', ex: 'Was fehlt Ihnen?', exEn: 'What is wrong with you?' },
        { w: 'Ihnen', role: 'r-dativ', en: 'you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · formal dative' },
        { w: '?', plain: true }
      ], en: 'What is wrong with you?', hi: 'Aapko kya takleef hai?' },
      { speaker: 'Marco', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'Kopfschmerzen', role: 'r-akkusativ', en: 'headache', hi: 'सिरदर्द', pron: 'KOPF-shmair-tsen', type: 'Noun · plural', why: 'die Kopfschmerzen (this chapter).', ex: 'Ich habe Kopfschmerzen.', exEn: 'I have a headache.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Fieber', role: 'r-akkusativ', en: 'fever', hi: 'बुख़ार', pron: 'FEE-ber', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I have a headache and a fever.', hi: 'Mujhe sirdard aur bukhar hai.' },
      { speaker: 'Frau Dr. Berg', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'चाहिए', pron: 'MÜ-sen', type: 'Modal · müssen (Sie)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'ruhen', role: 'r-verb', en: 'rest', hi: 'आराम करना', pron: 'ROO-en', type: 'Verb · infinitive (Satzende)', why: 'ruhen = to rest (this chapter).', ex: 'Sie müssen ruhen.', exEn: 'You must rest.' },
        { w: '.', plain: true }
      ], en: 'Hmm. You must rest now.', hi: 'Hmm. Aapko abhi aaram karna chahiye.' },
      { speaker: 'Marco', side: 'right', tokens: [
        { w: 'Darf', role: 'r-modalverb', en: 'am I allowed', hi: 'जा सकता हूँ', pron: 'darf', type: 'Modal · dürfen (ich)', why: 'dürfen = to be allowed (this chapter).', ex: 'Darf ich morgen arbeiten?', exEn: 'Am I allowed to work tomorrow?' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम पर', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Am I allowed to work tomorrow?', hi: 'Kya main kal kaam par jaa sakta hoon?' },
      { speaker: 'Frau Dr. Berg', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'dürfen', role: 'r-modalverb', en: 'are allowed', hi: 'जा सकते', pron: 'DÜR-fen', type: 'Modal · dürfen (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'noch', role: 'r-adverb', en: 'not yet', hi: 'अभी नहीं', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'sollen', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (Sie)', why: 'sollen = should, advice from a doctor (this chapter).', ex: 'Sie sollen zu Hause bleiben.', exEn: 'You should stay home.' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, you are not allowed to yet. You should stay home.', hi: 'Nahi, abhi nahi jaa sakte. Aapko ghar par rehna chahiye.' },
      { speaker: 'Marco', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'soll', role: 'r-modalverb', en: 'should', hi: 'करना', pron: 'zol', type: 'Modal · sollen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gegen', role: 'r-preposition', en: 'against', hi: 'के लिए', pron: 'GAY-gen', type: 'Preposition', why: 'gegen + accusative: gegen die Schmerzen = against the pain (this chapter).', ex: 'gegen die Kopfschmerzen', exEn: 'against the headache' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl. acc.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Kopfschmerzen', role: 'r-akkusativ', en: 'headache', hi: 'सिरदर्द', pron: 'KOPF-shmair-tsen', type: 'Noun · plural' },
        { w: 'nehmen', role: 'r-verb', en: 'take', hi: 'लेना', pron: 'NAY-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'And what should I take for the headache?', hi: 'Aur sirdard ke liye main kya lun?' },
      { speaker: 'Frau Dr. Berg', tokens: [
        { w: 'Nehmen', role: 'r-verb', en: 'take', hi: 'लीजिए', pron: 'NAY-men', type: 'Verb · imperative (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Tablette', role: 'r-akkusativ', en: 'tablet', hi: 'गोली', pron: 'ta-BLE-tuh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Trinken', role: 'r-verb', en: 'drink', hi: 'पीजिए', pron: 'TRIN-ken', type: 'Verb · imperative (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot of', hi: 'बहुत', pron: 'feel', type: 'Adverb · quantity' },
        { w: 'Wasser', role: 'r-akkusativ', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Take a tablet. Also drink a lot of water.', hi: 'Ek goli lijiye. Bahut paani bhi pijiye.' },
      { speaker: 'Marco', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'mache', role: 'r-verb', en: 'will do', hi: 'करूंगा', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '.', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true }
      ], en: 'Yes, I will do that. Thanks!', hi: 'Haan, main yeh karunga. Dhanyavaad!' },
      { speaker: 'Frau Dr. Berg', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'शुभ', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Besserung', role: 'r-subject', en: 'recovery', hi: 'स्वास्थ्य लाभ', pron: 'BE-se-rung', type: 'Noun · fem.', why: 'Gute Besserung! = get well soon (this chapter).', ex: 'Gute Besserung!', exEn: 'Get well soon!' },
        { w: '!', plain: true }
      ], en: 'Get well soon!', hi: 'Jald swasth ho jaayein!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Three ways to steer people. The <strong>Imperativ</strong> gives a direct command \u2014 drop the subject: <span class="de">Komm! Trink Tee! Macht die Tür zu!</span> (Sie keeps its pronoun: <span class="de">Kommen Sie!</span>). <span class="de r-modalverb">dürfen</span> handles permission (<span class="de">Darf ich?</span> / <span class="de">Hier darf man nicht rauchen</span>), and <span class="de r-modalverb">sollen</span> gives advice or instructions (<span class="de">Du sollst mehr trinken</span>).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the IMPERATIVE (commands) plus the modal verbs dürfen (permission) and sollen (advice/obligation), in a health/doctor context. ' +
    'The learner wrote sentences with commands, dürfen and sollen below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- du-imperative: take the present du-form and drop -st and the pronoun: du kommst → Komm!, du trinkst → Trink!, du gibst → Gib!, du nimmst → Nimm!, du liest → Lies!. Verbs with a→ä do NOT keep the umlaut: du fährst → Fahr!, du schläfst → Schlaf!.\n' +
    '- ihr-imperative = the ihr-form without the pronoun: Kommt! Trinkt! Lest! Macht die Tür zu!.\n' +
    '- Sie-imperative = verb + Sie: Kommen Sie!, Trinken Sie!, Setzen Sie sich!.\n' +
    '- sein is irregular: Sei ruhig! / Seid ruhig! / Seien Sie ruhig!.\n' +
    '- Separable verbs: the prefix goes to the end: Mach die Tür zu! Hör zu! Steh auf!.\n' +
    '- dürfen (permission): ich darf, du darfst, er/sie/es darf, wir/sie/Sie dürfen, ihr dürft. "darf ich …?" = may I…?; "man darf hier nicht rauchen" = one isn\u2019t allowed to smoke here. The other verb is an infinitive at the end.\n' +
    '- sollen (advice/should/instruction): ich soll, du sollst, er/sie/es soll, wir/sie/Sie sollen, ihr sollt. "Du sollst mehr üben." Infinitive at the end.\n' +
    '- dürfen = permission; sollen = advice/obligation. Do not confuse them with können (ability) or müssen (necessity).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Command/modal check:</b> one sentence on whether the imperative form or dürfen/sollen was used correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your commands and dürfen/sollen are spot on. On to <span class="de">Telefonieren & Nachfragen</span>.',
    mid: 'Good. Re-read the imperative card and the dürfen-vs-sollen card once, then continue.',
    low: 'Worth another pass — drill the du/ihr/Sie imperative forms and dürfen vs sollen, then retake.'
  },

  parserSentence: [
    { w: 'Trink', role: 'r-verb' }, { w: 'viel', role: 'r-object' },
    { w: 'Tee', role: 'r-object' }, { w: '!', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the three ways to steer people: command, may, should.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'At the doctor with sick Frau Dr. Berg — hear the Imperativ, darf and soll in action.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the body, health and command words plus dürfen & sollen.' },
    { id: 'grammar',    label: 'Imperativ & Modals', tag: 'core',
      objective: 'Master the du/ihr/Sie imperative and dürfen (permission) vs sollen (advice).' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a doctor\u2019s-advice text full of commands and modals, and tap any word.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the instructions and what\u2019s allowed, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give commands, ask permission, and give advice.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write commands, a rule list, and a permission dialogue.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill imperative forms and dürfen/sollen with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The body & health words, dürfen & sollen, and command verbs with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Imperative-formation drills, dürfen/sollen selection, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The du/ihr/Sie imperative, dürfen (permission) vs sollen (advice), and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Komm! / Kommt! / Kommen Sie!', text: 'Give commands to du / ihr / Sie' },
    { de: 'Darf ich …?', text: 'Ask for permission' },
    { de: 'Hier darf man nicht …', text: 'State a prohibition' },
    { de: 'Du sollst …', text: 'Give advice or an instruction' },
    { de: 'Gute Besserung!', text: 'Talk about health' }
  ],

  // ---------- Vocabulary (106 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Bein', art: 'das', gender: 'n', plural: 'Beine', pos: 'noun', en: 'leg', hi: 'टाँग', ex: 'Mein Bein tut weh.', exEn: 'My leg hurts.' },
    { de: 'Fieber', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'fever', hi: 'बुखार', ex: 'Ich habe Fieber.', exEn: 'I have a fever.' },
    { de: 'Medikament', art: 'das', gender: 'n', plural: 'Medikamente', pos: 'noun', en: 'medicine', hi: 'दवा', ex: 'Nimm das Medikament!', exEn: 'Take the medicine!' },
    { de: 'Rezept', art: 'das', gender: 'n', plural: 'Rezepte', pos: 'noun', en: 'prescription', hi: 'पर्ची', ex: 'Hier ist das Rezept.', exEn: 'Here is the prescription.' },
    { de: 'Bauch', art: 'der', gender: 'm', plural: 'Bäuche', pos: 'noun', en: 'stomach, belly', hi: 'पेट', ex: 'Mein Bauch tut weh.', exEn: 'My stomach hurts.' },
    { de: 'Fuß', art: 'der', gender: 'm', plural: 'Füße', pos: 'noun', en: 'foot', hi: 'पैर', ex: 'Der Fuß tut mir weh.', exEn: 'My foot hurts.' },
    { de: 'Hals', art: 'der', gender: 'm', plural: 'Hälse', pos: 'noun', en: 'neck, throat', hi: 'गला', ex: 'Mein Hals tut weh.', exEn: 'My throat hurts.' },
    { de: 'Kopf', art: 'der', gender: 'm', plural: 'Köpfe', pos: 'noun', en: 'head', hi: 'सिर', ex: 'Mein Kopf tut weh.', exEn: 'My head hurts.' },
    { de: 'Körper', art: 'der', gender: 'm', plural: 'Körper', pos: 'noun', en: 'body', hi: 'शरीर', ex: 'Der Körper braucht Ruhe.', exEn: 'The body needs rest.' },
    { de: 'Rücken', art: 'der', gender: 'm', plural: 'Rücken', pos: 'noun', en: 'back', hi: 'पीठ', ex: 'Mein Rücken tut weh.', exEn: 'My back hurts.' },
    { de: 'Schmerz', art: 'der', gender: 'm', plural: 'Schmerzen', pos: 'noun', en: 'pain', hi: 'दर्द', ex: 'Ich habe Schmerzen.', exEn: 'I\u2019m in pain.' },
    { de: 'Hand', art: 'die', gender: 'f', plural: 'Hände', pos: 'noun', en: 'hand', hi: 'हाथ', ex: 'Wasch die Hände!', exEn: 'Wash your hands!' },
    { de: 'Kopfschmerzen', art: 'die', gender: 'pl', plural: 'Kopfschmerzen', pos: 'noun', en: 'headache', hi: 'सिरदर्द', ex: 'Ich habe Kopfschmerzen.', exEn: 'I have a headache.' },
    { de: 'Tablette', art: 'die', gender: 'f', plural: 'Tabletten', pos: 'noun', en: 'pill, tablet', hi: 'गोली', ex: 'Nimm eine Tablette!', exEn: 'Take a pill!' },
    { de: 'dürfen', pos: 'verb', en: 'may, to be allowed', hi: 'अनुमति होना', ex: 'Darf ich hereinkommen?', exEn: 'May I come in?', conj: { praesens: 'darf', praeteritum: 'durfte', perfekt: 'hat gedurft' } },
    { de: 'gesund', pos: 'adjective', en: 'healthy', hi: 'स्वस्थ', ex: 'Obst ist gesund.', exEn: 'Fruit is healthy.' },
    { de: 'husten', pos: 'verb', en: 'to cough', hi: 'खाँसना', ex: 'Ich huste viel.', exEn: 'I cough a lot.', conj: { praesens: 'hustet', praeteritum: 'hustete', perfekt: 'hat gehustet' } },
    { de: 'krank', pos: 'adjective', en: 'sick, ill', hi: 'बीमार', ex: 'Max ist krank.', exEn: 'Max is ill.' },
    { de: 'sollen', pos: 'verb', en: 'should, to be supposed to', hi: 'चाहिए', ex: 'Du sollst mehr trinken.', exEn: 'You should drink more.', conj: { praesens: 'soll', praeteritum: 'sollte', perfekt: 'hat gesollt' } },
    // ===== Active Support =====
    { de: 'aktiv', pos: 'adjective', en: 'active', hi: 'सक्रिय', ex: 'Sei aktiv!', exEn: 'Be active!' },
    { de: 'bewegen', pos: 'verb', en: 'to move', hi: 'हिलाना', ex: 'Beweg den Arm!', exEn: 'Move your arm!', conj: { praesens: 'bewegt', praeteritum: 'bewegte', perfekt: 'hat bewegt' } },
    { de: 'Alter', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'age', hi: 'उम्र', ex: 'Welches Alter hat er?', exEn: 'What age is he?' },
    { de: 'Auge', art: 'das', gender: 'n', plural: 'Augen', pos: 'noun', en: 'eye', hi: 'आँख', ex: 'Mein Auge tut weh.', exEn: 'My eye hurts.' },
    { de: 'Gesicht', art: 'das', gender: 'n', plural: 'Gesichter', pos: 'noun', en: 'face', hi: 'चेहरा', ex: 'Wasch das Gesicht!', exEn: 'Wash your face!' },
    { de: 'Haar', art: 'das', gender: 'n', plural: 'Haare', pos: 'noun', en: 'hair', hi: 'बाल', ex: 'Die Haare sind lang.', exEn: 'The hair is long.' },
    { de: 'Knie', art: 'das', gender: 'n', plural: 'Knie', pos: 'noun', en: 'knee', hi: 'घुटना', ex: 'Mein Knie tut weh.', exEn: 'My knee hurts.' },
    { de: 'Ohr', art: 'das', gender: 'n', plural: 'Ohren', pos: 'noun', en: 'ear', hi: 'कान', ex: 'Mein Ohr tut weh.', exEn: 'My ear hurts.' },
    { de: 'Arm', art: 'der', gender: 'm', plural: 'Arme', pos: 'noun', en: 'arm', hi: 'बाँह', ex: 'Der Arm ist verletzt.', exEn: 'The arm is injured.' },
    { de: 'Arztbesuch', art: 'der', gender: 'm', plural: 'Arztbesuche', pos: 'noun', en: 'doctor\u2019s visit', hi: 'डॉक्टर की मुलाक़ात', ex: 'Der Arztbesuch ist heute.', exEn: 'The doctor\u2019s visit is today.' },
    { de: 'Doktor', art: 'der', gender: 'm', plural: 'Doktoren', pos: 'noun', en: 'doctor (m)', hi: 'डॉक्टर', ex: 'Der Doktor untersucht mich.', exEn: 'The doctor examines me.' },
    { de: 'Finger', art: 'der', gender: 'm', plural: 'Finger', pos: 'noun', en: 'finger', hi: 'उँगली', ex: 'Der Finger tut weh.', exEn: 'The finger hurts.' },
    { de: 'Mund', art: 'der', gender: 'm', plural: 'Münder', pos: 'noun', en: 'mouth', hi: 'मुँह', ex: 'Öffne den Mund!', exEn: 'Open your mouth!' },
    { de: 'Patient', art: 'der', gender: 'm', plural: 'Patienten', pos: 'noun', en: 'patient (m)', hi: 'मरीज़', ex: 'Der Patient ist krank.', exEn: 'The patient is ill.' },
    { de: 'Unfall', art: 'der', gender: 'm', plural: 'Unfälle', pos: 'noun', en: 'accident', hi: 'दुर्घटना', ex: 'Er hatte einen Unfall.', exEn: 'He had an accident.' },
    { de: 'Zahn', art: 'der', gender: 'm', plural: 'Zähne', pos: 'noun', en: 'tooth', hi: 'दाँत', ex: 'Mein Zahn tut weh.', exEn: 'My tooth hurts.' },
    { de: 'Zahnarzt', art: 'der', gender: 'm', plural: 'Zahnärzte', pos: 'noun', en: 'dentist (m)', hi: 'दंत चिकित्सक', ex: 'Ich gehe zum Zahnarzt.', exEn: 'I go to the dentist.' },
    { de: 'Bauchschmerzen', art: 'die', gender: 'pl', plural: 'Bauchschmerzen', pos: 'noun', en: 'stomach ache', hi: 'पेट दर्द', ex: 'Ich habe Bauchschmerzen.', exEn: 'I have a stomach ache.' },
    { de: 'Bewegung', art: 'die', gender: 'f', plural: 'Bewegungen', pos: 'noun', en: 'exercise, movement', hi: 'व्यायाम', ex: 'Bewegung ist gesund.', exEn: 'Exercise is healthy.' },
    { de: 'Bitte', art: 'die', gender: 'f', plural: 'Bitten', pos: 'noun', en: 'request', hi: 'अनुरोध', ex: 'Ich habe eine Bitte.', exEn: 'I have a request.' },
    { de: 'Doktorin', art: 'die', gender: 'f', plural: 'Doktorinnen', pos: 'noun', en: 'doctor (f)', hi: 'डॉक्टर', ex: 'Die Doktorin ist nett.', exEn: 'The doctor is nice.' },
    { de: 'Halsschmerzen', art: 'die', gender: 'pl', plural: 'Halsschmerzen', pos: 'noun', en: 'sore throat', hi: 'गले में दर्द', ex: 'Ich habe Halsschmerzen.', exEn: 'I have a sore throat.' },
    { de: 'Krankheit', art: 'die', gender: 'f', plural: 'Krankheiten', pos: 'noun', en: 'illness', hi: 'बीमारी', ex: 'Die Krankheit ist nicht schlimm.', exEn: 'The illness isn\u2019t serious.' },
    { de: 'Nase', art: 'die', gender: 'f', plural: 'Nasen', pos: 'noun', en: 'nose', hi: 'नाक', ex: 'Meine Nase läuft.', exEn: 'My nose is running.' },
    { de: 'Patientin', art: 'die', gender: 'f', plural: 'Patientinnen', pos: 'noun', en: 'patient (f)', hi: 'मरीज़', ex: 'Die Patientin wartet.', exEn: 'The patient waits.' },
    { de: 'Rückenschmerzen', art: 'die', gender: 'pl', plural: 'Rückenschmerzen', pos: 'noun', en: 'back pain', hi: 'पीठ दर्द', ex: 'Ich habe Rückenschmerzen.', exEn: 'I have back pain.' },
    { de: 'Zahnschmerzen', art: 'die', gender: 'pl', plural: 'Zahnschmerzen', pos: 'noun', en: 'toothache', hi: 'दाँत दर्द', ex: 'Ich habe Zahnschmerzen.', exEn: 'I have toothache.' },
    { de: 'Zahnärztin', art: 'die', gender: 'f', plural: 'Zahnärztinnen', pos: 'noun', en: 'dentist (f)', hi: 'दंत चिकित्सक', ex: 'Die Zahnärztin hilft mir.', exEn: 'The dentist helps me.' },
    { de: 'erkältet', pos: 'adjective', en: 'having a cold', hi: 'ज़ुकाम से ग्रस्त', ex: 'Ich bin erkältet.', exEn: 'I have a cold.' },
    { de: 'erlaubt', pos: 'adjective', en: 'allowed', hi: 'अनुमत', ex: 'Das ist erlaubt.', exEn: 'That\u2019s allowed.' },
    { de: 'erlaubt sein', pos: 'verb', en: 'to be allowed', hi: 'अनुमति होना', ex: 'Rauchen ist hier nicht erlaubt.', exEn: 'Smoking is not allowed here.', conj: { praesens: 'ist erlaubt', praeteritum: 'war erlaubt', perfekt: 'ist erlaubt gewesen' } },
    { de: 'fit', pos: 'adjective', en: 'fit', hi: 'चुस्त', ex: 'Ich bin wieder fit.', exEn: 'I\u2019m fit again.' },
    { de: 'geben (Anweisung)', pos: 'verb', en: 'to give (an instruction)', hi: 'निर्देश देना', ex: 'Die Ärztin gibt eine Anweisung.', exEn: 'The doctor gives an instruction.', conj: { praesens: 'gibt', praeteritum: 'gab', perfekt: 'hat gegeben' } },
    { de: 'gegen', pos: 'preposition', en: 'for, against (+ acc.)', hi: 'के विरुद्ध', ex: 'Eine Tablette gegen Kopfschmerzen.', exEn: 'A pill for a headache.' },
    { de: 'gute Besserung', pos: 'phrase', en: 'get well soon', hi: 'जल्दी ठीक हो जाओ', ex: 'Gute Besserung!', exEn: 'Get well soon!' },
    { de: 'holen', pos: 'verb', en: 'to get, fetch', hi: 'लाना', ex: 'Hol bitte Wasser!', exEn: 'Please get water!', conj: { praesens: 'holt', praeteritum: 'holte', perfekt: 'hat geholt' } },
    { de: 'kontrollieren', pos: 'verb', en: 'to check', hi: 'जाँचना', ex: 'Der Arzt kontrolliert das Fieber.', exEn: 'The doctor checks the fever.', conj: { praesens: 'kontrolliert', praeteritum: 'kontrollierte', perfekt: 'hat kontrolliert' } },
    { de: 'leise', pos: 'adjective', en: 'quiet', hi: 'धीरे', ex: 'Sprich leise!', exEn: 'Speak quietly!' },
    { de: 'nehmen', pos: 'verb', en: 'to take (medicine)', hi: 'लेना', ex: 'Nimm den Saft!', exEn: 'Take the syrup!', conj: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { de: 'rauchen', pos: 'verb', en: 'to smoke', hi: 'धूम्रपान करना', ex: 'Hier darf man nicht rauchen.', exEn: 'You may not smoke here.', conj: { praesens: 'raucht', praeteritum: 'rauchte', perfekt: 'hat geraucht' } },
    { de: 'ruhig', pos: 'adjective', en: 'quiet, calm', hi: 'शांत', ex: 'Sei ruhig!', exEn: 'Be quiet!' },
    { de: 'schaffen', pos: 'verb', en: 'to manage, make it', hi: 'कर लेना', ex: 'Du schaffst das!', exEn: 'You\u2019ll manage it!', conj: { praesens: 'schafft', praeteritum: 'schaffte', perfekt: 'hat geschafft' } },
    { de: 'schlecht', pos: 'adjective', en: 'unwell (Mir ist schlecht)', hi: 'बुरा (जी मिचलाना)', ex: 'Mir ist schlecht.', exEn: 'I feel sick.' },
    { de: 'sich', pos: 'pronoun', en: 'oneself (reflexive)', hi: 'ख़ुद', ex: 'Ruh dich aus!', exEn: 'Rest (yourself)!' },
    { de: 'sofort', pos: 'adverb', en: 'immediately', hi: 'तुरंत', ex: 'Komm sofort!', exEn: 'Come immediately!' },
    { de: 'sportlich', pos: 'adjective', en: 'athletic, sporty', hi: 'खेलकूद वाला', ex: 'Anna ist sportlich.', exEn: 'Anna is sporty.' },
    { de: 'untersuchen', pos: 'verb', en: 'to examine', hi: 'जाँच करना', ex: 'Der Arzt untersucht den Patienten.', exEn: 'The doctor examines the patient.', conj: { praesens: 'untersucht', praeteritum: 'untersuchte', perfekt: 'hat untersucht' } },
    { de: 'verletzt', pos: 'adjective', en: 'injured', hi: 'घायल', ex: 'Sein Bein ist verletzt.', exEn: 'His leg is injured.' },
    { de: 'versuchen', pos: 'verb', en: 'to try', hi: 'कोशिश करना', ex: 'Versuch es!', exEn: 'Give it a try!', conj: { praesens: 'versucht', praeteritum: 'versuchte', perfekt: 'hat versucht' } },
    { de: 'wehtun', pos: 'verb', en: 'to hurt', hi: 'दर्द होना', ex: 'Der Kopf tut mir weh.', exEn: 'My head hurts.', conj: { praesens: 'tut weh', praeteritum: 'tat weh', perfekt: 'hat wehgetan' } },
    // ===== Passive =====
    { de: 'baden', pos: 'verb', en: 'to bathe', hi: 'नहाना', ex: 'Bade nicht zu heiß!', exEn: 'Don\u2019t bathe too hot!', conj: { praesens: 'badet', praeteritum: 'badete', perfekt: 'hat gebadet' } },
    { de: 'Blut', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'blood', hi: 'खून', ex: 'Der Arzt nimmt Blut.', exEn: 'The doctor takes blood.' },
    { de: 'Gewicht', art: 'das', gender: 'n', plural: 'Gewichte', pos: 'noun', en: 'weight', hi: 'वज़न', ex: 'Das Gewicht ist normal.', exEn: 'The weight is normal.' },
    { de: 'Hausmittel', art: 'das', gender: 'n', plural: 'Hausmittel', pos: 'noun', en: 'home remedy', hi: 'घरेलू नुस्ख़ा', ex: 'Tee ist ein Hausmittel.', exEn: 'Tea is a home remedy.' },
    { de: 'Pflaster', art: 'das', gender: 'n', plural: 'Pflaster', pos: 'noun', en: 'plaster, band-aid', hi: 'पट्टी', ex: 'Ich brauche ein Pflaster.', exEn: 'I need a plaster.' },
    { de: 'Suppenhuhn', art: 'das', gender: 'n', plural: 'Suppenhühner', pos: 'noun', en: 'soup chicken', hi: 'सूप मुर्गी', ex: 'Oma kocht ein Suppenhuhn.', exEn: 'Grandma cooks a soup chicken.' },
    { de: 'Forumsbeitrag', art: 'der', gender: 'm', plural: 'Forumsbeiträge', pos: 'noun', en: 'forum post', hi: 'फ़ोरम पोस्ट', ex: 'Ich lese einen Forumsbeitrag.', exEn: 'I read a forum post.' },
    { de: 'Honig', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'honey', hi: 'शहद', ex: 'Tee mit Honig hilft.', exEn: 'Tea with honey helps.' },
    { de: 'Hustensaft', art: 'der', gender: 'm', plural: 'Hustensäfte', pos: 'noun', en: 'cough syrup', hi: 'खाँसी की दवा', ex: 'Nimm den Hustensaft!', exEn: 'Take the cough syrup!' },
    { de: 'Saft', art: 'der', gender: 'm', plural: 'Säfte', pos: 'noun', en: 'syrup, juice', hi: 'सिरप', ex: 'Der Saft ist süß.', exEn: 'The syrup is sweet.' },
    { de: 'Schnupfen', art: 'der', gender: 'm', plural: 'Schnupfen', pos: 'noun', en: 'head cold', hi: 'ज़ुकाम', ex: 'Ich habe einen Schnupfen.', exEn: 'I have a cold.' },
    { de: 'Tropfen', art: 'der', gender: 'm', plural: 'Tropfen', pos: 'noun', en: 'drop', hi: 'बूँद', ex: 'Nimm die Tropfen!', exEn: 'Take the drops!' },
    { de: 'Verband', art: 'der', gender: 'm', plural: 'Verbände', pos: 'noun', en: 'bandage', hi: 'पट्टी', ex: 'Der Verband ist sauber.', exEn: 'The bandage is clean.' },
    { de: 'Zettel', art: 'der', gender: 'm', plural: 'Zettel', pos: 'noun', en: 'note, slip', hi: 'पर्ची', ex: 'Schreib es auf den Zettel!', exEn: 'Write it on the note!' },
    { de: 'Verletzte', art: 'der/die', gender: 'mf', plural: 'Verletzten', pos: 'noun', en: 'injured person', hi: 'घायल व्यक्ति', ex: 'Der Verletzte braucht Hilfe.', exEn: 'The injured person needs help.' },
    { de: 'Anweisung', art: 'die', gender: 'f', plural: 'Anweisungen', pos: 'noun', en: 'instruction', hi: 'निर्देश', ex: 'Folge der Anweisung!', exEn: 'Follow the instruction!' },
    { de: 'Hühnersuppe', art: 'die', gender: 'f', plural: 'Hühnersuppen', pos: 'noun', en: 'chicken soup', hi: 'मुर्गी का सूप', ex: 'Hühnersuppe hilft bei Erkältung.', exEn: 'Chicken soup helps with a cold.' },
    { de: 'Kontrolle', art: 'die', gender: 'f', plural: 'Kontrollen', pos: 'noun', en: 'check-up', hi: 'जाँच', ex: 'Die Kontrolle ist morgen.', exEn: 'The check-up is tomorrow.' },
    { de: 'Nelke', art: 'die', gender: 'f', plural: 'Nelken', pos: 'noun', en: 'clove', hi: 'लौंग', ex: 'Eine Nelke hilft gegen Zahnschmerzen.', exEn: 'A clove helps with toothache.' },
    { de: 'Physiotherapie', art: 'die', gender: 'f', plural: 'Physiotherapien', pos: 'noun', en: 'physiotherapy', hi: 'फ़िज़ियोथेरेपी', ex: 'Er braucht Physiotherapie.', exEn: 'He needs physiotherapy.' },
    { de: 'Salbe', art: 'die', gender: 'f', plural: 'Salben', pos: 'noun', en: 'ointment, cream', hi: 'मरहम', ex: 'Die Salbe hilft.', exEn: 'The ointment helps.' },
    { de: 'Schlaftablette', art: 'die', gender: 'f', plural: 'Schlaftabletten', pos: 'noun', en: 'sleeping pill', hi: 'नींद की गोली', ex: 'Nimm keine Schlaftablette!', exEn: 'Don\u2019t take a sleeping pill!' },
    { de: 'Spritze', art: 'die', gender: 'f', plural: 'Spritzen', pos: 'noun', en: 'injection', hi: 'इंजेक्शन', ex: 'Die Spritze tut kurz weh.', exEn: 'The injection hurts briefly.' },
    { de: 'Wunde', art: 'die', gender: 'f', plural: 'Wunden', pos: 'noun', en: 'wound', hi: 'घाव', ex: 'Die Wunde ist klein.', exEn: 'The wound is small.' },
    { de: 'hinlegen', pos: 'verb', en: 'to lie down (sich)', hi: 'लेट जाना', ex: 'Leg dich hin!', exEn: 'Lie down!', conj: { praesens: 'legt sich hin', praeteritum: 'legte sich hin', perfekt: 'hat sich hingelegt' } },
    { de: 'inhalieren', pos: 'verb', en: 'to inhale', hi: 'साँस लेना', ex: 'Inhaliere mit Salzwasser!', exEn: 'Inhale with salt water!', conj: { praesens: 'inhaliert', praeteritum: 'inhalierte', perfekt: 'hat inhaliert' } },
    { de: 'riechen', pos: 'verb', en: 'to smell', hi: 'सूँघना', ex: 'Das riecht gut.', exEn: 'That smells good.', conj: { praesens: 'riecht', praeteritum: 'roch', perfekt: 'hat gerochen' } },
    { de: 'verboten', pos: 'adjective', en: 'forbidden', hi: 'मना', ex: 'Rauchen ist verboten.', exEn: 'Smoking is forbidden.' },
    { de: 'vermuten', pos: 'verb', en: 'to suspect', hi: 'अनुमान लगाना', ex: 'Der Arzt vermutet eine Grippe.', exEn: 'The doctor suspects flu.', conj: { praesens: 'vermutet', praeteritum: 'vermutete', perfekt: 'hat vermutet' } },
    { de: 'wiegen', pos: 'verb', en: 'to weigh', hi: 'वज़न करना', ex: 'Der Arzt wiegt das Kind.', exEn: 'The doctor weighs the child.', conj: { praesens: 'wiegt', praeteritum: 'wog', perfekt: 'hat gewogen' } },
    // ===== Reference / System =====
    { de: 'Gebot', art: 'das', gender: 'n', plural: 'Gebote', pos: 'noun', en: 'command', hi: 'आदेश', ex: '"Komm!" ist ein Gebot.', exEn: '"Komm!" is a command.' },
    { de: 'Verbot', art: 'das', gender: 'n', plural: 'Verbote', pos: 'noun', en: 'prohibition', hi: 'निषेध', ex: 'Ein Rauchverbot ist ein Verbot.', exEn: 'A smoking ban is a prohibition.' },
    { de: 'Körperteil', art: 'der', gender: 'm', plural: 'Körperteile', pos: 'noun', en: 'body part', hi: 'शरीर का अंग', ex: 'Der Kopf ist ein Körperteil.', exEn: 'The head is a body part.' },
    { de: 'Aufforderung', art: 'die', gender: 'f', plural: 'Aufforderungen', pos: 'noun', en: 'request, command', hi: 'अनुरोध', ex: 'Der Imperativ ist eine Aufforderung.', exEn: 'The imperative is a request.' },
    { de: 'Erlaubnis', art: 'die', gender: 'f', plural: 'Erlaubnisse', pos: 'noun', en: 'permission', hi: 'अनुमति', ex: 'Ich brauche eine Erlaubnis.', exEn: 'I need permission.' }
  ],

  // ---------- Imperativ & Modals (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The Imperativ: du, ihr, Sie',
      goldenRule: 'Drop the pronoun for <b>du</b> and <b>ihr</b>; keep it for <b>Sie</b>.',
      formula: [
        'du   :  du kommst  →  <b>Komm!</b>      (drop -st and du)',
        'ihr  :  ihr kommt  →  <b>Kommt!</b>     (drop ihr)',
        'Sie  :  Sie kommen →  <b>Kommen Sie!</b> (keep Sie)'
      ],
      memoryTrick: 'Sirf <b>Sie</b> apna pronoun rakhta hai — kyunki wahi polite roop hai. du/ihr pronoun gira dete hain.',
      recap: [
        'du: du-form minus <b>-st</b> and minus the pronoun.',
        'ihr: ihr-form, pronoun dropped.',
        'Sie: verb + <b>Sie</b>, pronoun kept.'
      ],
      body: [
        'Commands have three forms, one for each "you". The trick: <strong>drop the subject</strong> (except Sie).'
      ],
      table: {
        head: ['Form', 'How', 'Example'],
        rows: [
          ['<span class="de r-subject">du</span>', 'du-form minus -st & pronoun', '<span class="de r-verb">Komm! Trink! Hör zu!</span>'],
          ['<span class="de r-subject">ihr</span>', 'ihr-form minus pronoun', '<span class="de r-verb">Kommt! Trinkt! Hört zu!</span>'],
          ['<span class="de r-subject">Sie</span>', 'verb + Sie', '<span class="de r-verb">Kommen Sie! Trinken Sie!</span>'],
          ['<span class="de r-verb">sein</span>', 'irregular', '<span class="de r-verb">Sei / Seid / Seien Sie ruhig!</span>']
        ]
      },
      note: 'du: <b>Komm!</b> (from du kommst, drop -st). ihr: <b>Kommt!</b> Sie keeps the pronoun: <b>Kommen Sie!</b> Separable verbs send the prefix to the end: <b>Mach die Tür zu!</b>, <b>Hör zu!</b>',
      hinglish: 'Command ke teen roop hote hain. <b>du</b> ke liye du-form se <b>-st</b> aur pronoun dono hata do: <b>Komm!</b> <b>ihr</b> ke liye sirf pronoun hatao: <b>Kommt!</b> Aur <b>Sie</b> ke liye verb ke baad <b>Sie</b> rakho: <b>Kommen Sie!</b> <b>sein</b> yahan bhi irregular hai: <b>Sei / Seid / Seien Sie ruhig!</b> Aur separable verb ka prefix sentence ke end mein jaata hai: <b>Mach die Tür zu!</b>'
    },
    {
      title: 'du-imperative: the e→i verbs',
      goldenRule: '<b>e→i/ie</b> verbs keep the change; <b>a→ä</b> verbs lose the umlaut.',
      memoryTrick: '<b>e</b> wala change <b>rukta</b> hai (Nimm! Lies! Gib!), <b>a</b> wala umlaut <b>jaata</b> hai (Fahr! Schlaf!).',
      body: [
        'Verbs that change e→i/ie in the du-form <strong>keep that change</strong> in the command. But a→ä verbs drop the umlaut.'
      ],
      table: {
        head: ['Verb', 'du-form', 'Imperativ (du)'],
        rows: [
          ['<span class="de">nehmen</span>', 'du nimmst', '<span class="de r-verb">Nimm!</span>'],
          ['<span class="de">lesen</span>', 'du liest', '<span class="de r-verb">Lies!</span>'],
          ['<span class="de">geben</span>', 'du gibst', '<span class="de r-verb">Gib!</span>'],
          ['<span class="de">fahren</span> (a→ä)', 'du fährst', '<span class="de r-verb">Fahr!</span> (no umlaut)']
        ]
      },
      note: 'Keep the <b>e→i/ie</b> change: nehmen → <b>Nimm!</b>, lesen → <b>Lies!</b>, geben → <b>Gib!</b>, essen → <b>Iss!</b>. But <b>a→ä</b> verbs LOSE the umlaut: fahren → <b>Fahr!</b>, schlafen → <b>Schlaf!</b>',
      hinglish: '<b>e→i/ie</b> change rakho: nehmen → <b>Nimm!</b>, lesen → <b>Lies!</b>, geben → <b>Gib!</b>, essen → <b>Iss!</b>. Par <b>a→ä</b> verbs umlaut chhod dete hain: fahren → <b>Fahr!</b>, schlafen → <b>Schlaf!</b>'
    },
    {
      title: 'dürfen — permission',
      body: [
        '<span class="de r-modalverb">dürfen</span> means "may / to be allowed". Use it to ask and give permission, and (with nicht) for prohibition.'
      ],
      table: {
        head: ['Person', 'Form', 'Example'],
        rows: [
          ['ich / er', '<span class="de r-modalverb">darf</span>', '<span class="de">Darf ich hereinkommen?</span>'],
          ['du', '<span class="de r-modalverb">darfst</span>', '<span class="de">Du darfst gehen.</span>'],
          ['wir / sie / Sie', '<span class="de r-modalverb">dürfen</span>', '<span class="de">Sie dürfen warten.</span>'],
          ['prohibition', '<span class="de r-modalverb">darf</span> + nicht', '<span class="de">Hier darf man nicht rauchen.</span>']
        ]
      },
      note: 'Like all modals: <b>dürfen</b> in position 2, the main verb as an infinitive at the end. <b>Darf ich …?</b> = may I…? <b>… darf nicht …</b> = isn\u2019t allowed to. ich and er share <b>darf</b> (no ending).',
      hinglish: '<b>dürfen</b> permission ke liye aata hai. Yeh baaki modals ki tarah chalta hai — <b>dürfen</b> position 2 par, aur main verb infinitive ban kar end mein. <b>Darf ich …?</b> matlab "kya main … sakta hoon?", aur <b>… darf nicht …</b> matlab mana hai. Dhyaan do ki <b>ich</b> aur <b>er</b> dono ke saath <b>darf</b> aata hai.'
    },
    {
      title: 'sollen — advice & instructions',
      body: [
        '<span class="de r-modalverb">sollen</span> means "should / to be supposed to" \u2014 advice, instructions, or what someone else wants you to do.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Du sollst mehr üben.</span>', 'You should practise more.'],
          ['<span class="de">Wir sollen pünktlich sein.</span>', 'We\u2019re supposed to be on time.'],
          ['<span class="de">Was soll ich machen?</span>', 'What should I do?'],
          ['<span class="de">Der Arzt sagt, ich soll Tee trinken.</span>', 'The doctor says I should drink tea.']
        ]
      },
      note: 'Forms: ich/er <b>soll</b>, du <b>sollst</b>, ihr <b>sollt</b>, wir/sie/Sie <b>sollen</b>. <b>dürfen</b> = permission ("may"); <b>sollen</b> = advice/obligation ("should"). Don\u2019t mix them with können (ability) or müssen (must).',
      hinglish: 'Forms yeh hain: ich/er <b>soll</b>, du <b>sollst</b>, ihr <b>sollt</b>, aur wir/sie/Sie <b>sollen</b>. Difference simple hai — <b>dürfen</b> permission batata hai ("may"), aur <b>sollen</b> advice ya obligation ("chahiye"). Inhe <b>können</b> (sakna) aur <b>müssen</b> (zaroori hona) se mat milao.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four command/modal traps to avoid.' ],
      mistakes: [
        { wrong: 'Du komm hier!', right: 'Komm hier!', why: 'The du-imperative drops the pronoun "du".' },
        { wrong: 'Nehm die Tablette!', right: 'Nimm die Tablette!', why: 'nehmen keeps the e→i change in the command: Nimm!' },
        { wrong: 'Darf ich zu gehen?', right: 'Darf ich gehen?', why: 'No "zu" after a modal — plain infinitive at the end.' },
        { wrong: 'Du sollst trinkst Tee.', right: 'Du sollst Tee trinken.', why: 'Only the modal is conjugated; the main verb stays infinitive at the end.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>du</b>-imperative mein pronoun hata dena hai: <b>Komm her!</b> <b>nehmen</b> se <b>Nimm!</b> banta hai, kyunki <b>e</b> se <b>i</b> ho jaata hai. Modal ke baad <b>zu</b> nahi lagta: <b>Darf ich gehen?</b> Aur sirf modal conjugate hota hai, main verb infinitive ban kar end mein rehta hai: <b>Du sollst Tee trinken</b>.'
    }
  ],

  // ---------- Reading passage (doctor's advice, clickable) ----------
  reading: {
    title: 'Beim Arzt',
    titleEn: 'At the doctor\u2019s',
    tokens: [
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'krank', role: 'r-adjective', en: 'ill', hi: 'बीमार', pron: 'krank', type: 'Adjective', why: 'krank (this chapter); sein + adjective (Chapter 13).', ex: 'Max ist krank.', exEn: 'Max is ill.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben', why: 'haben (recycled — Akkusativ).', ex: 'Er hat Fieber.', exEn: 'He has a fever.' },
      { w: 'Fieber', role: 'r-object', en: 'a fever', hi: 'बुखार', pron: 'FEE-ber', type: 'Noun · neut.', why: 'das Fieber (this chapter).', ex: 'Er hat Fieber.', exEn: 'He has a fever.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: 'Fieber und Kopfschmerzen', exEn: 'fever and a headache' },
      { w: 'Kopfschmerzen', role: 'r-object', en: 'a headache', hi: 'सिरदर्द', pron: 'KOPF-shmer-tsen', type: 'Noun · plural', why: 'die Kopfschmerzen (this chapter).', ex: 'Er hat Kopfschmerzen.', exEn: 'He has a headache.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: '\u00c4rztin', role: 'r-subject', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.', why: 'die Ärztin (recycled — Berufe).', ex: 'Die Ärztin untersucht ihn.', exEn: 'The doctor examines him.' },
      { w: 'untersucht', role: 'r-verb', en: 'examines', hi: 'जाँच करती है', pron: 'un-ter-ZOOKHT', type: 'Verb · untersuchen (sie)', why: 'untersuchen (this chapter).', ex: 'Sie untersucht ihn.', exEn: 'She examines him.' },
      { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसकी', pron: 'een', type: 'Pronoun · acc.', why: 'er → ihn (recycled — Akkusativpronomen).', ex: 'Sie untersucht ihn.', exEn: 'She examines him.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen (recycled — Verben).', ex: 'Sie sagt: …', exEn: 'She says: …' },
      { w: ':', plain: true },
      { w: '\u201eNehmen', role: 'r-verb', en: '\u201ctake', hi: '"लीजिए', pron: 'NAY-men', type: 'Imperativ · Sie', why: 'Sie-imperative (this chapter).', ex: 'Nehmen Sie das Medikament!', exEn: 'Take the medicine!' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · acc.' },
      { w: 'Medikament', role: 'r-object', en: 'medicine', hi: 'दवा', pron: 'me-di-ka-MENT', type: 'Noun · neut.', why: 'das Medikament (this chapter).', ex: 'Nehmen Sie das Medikament!', exEn: 'Take the medicine!' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहिए', pron: 'BLY-ben', type: 'Imperativ · Sie', why: 'Sie-imperative (this chapter).', ex: 'Bleiben Sie im Bett!', exEn: 'Stay in bed!' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition + dat.', why: 'in + dem → im (recycled — Wechselpräpositionen).', ex: 'im Bett', exEn: 'in bed' },
      { w: 'Bett', role: 'r-place', en: 'bed', hi: 'बिस्तर', pron: 'bet', type: 'Noun · neut.', why: 'das Bett (recycled — Wechselpräpositionen).', ex: 'im Bett bleiben', exEn: 'stay in bed' },
      { w: '!', plain: true },
      { w: '\u201c', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen', why: 'fragen (recycled — Welcher & Dieser).', ex: 'Max fragt: Darf ich …?', exEn: 'Max asks: May I …?' },
      { w: ':', plain: true },
      { w: '\u201eDarf', role: 'r-modalverb', en: '\u201cmay', hi: '"सकता हूँ क्या', pron: 'darf', type: 'Modal · dürfen (ich)', why: 'dürfen; question → modal first (this chapter).', ex: 'Darf ich Kaffee trinken?', exEn: 'May I drink coffee?' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Kaffee', role: 'r-object', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee (recycled — Im Café).', ex: 'Darf ich Kaffee trinken?', exEn: 'May I drink coffee?' },
      { w: 'trinken', role: 'r-verb', en: 'drink', hi: 'पीना', pron: 'TRING-ken', type: 'Verb · infinitive', why: 'infinitive at the end after a modal (recycled — Modalverben 1).', ex: 'Darf ich Kaffee trinken?', exEn: 'May I drink coffee?' },
      { w: '?', plain: true },
      { w: '\u201c', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: '\u00c4rztin', role: 'r-subject', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.', why: 'die Ärztin (recycled — Berufe).', ex: 'Die Ärztin sagt …', exEn: 'The doctor says …' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen' },
      { w: ':', plain: true },
      { w: '\u201eNein', role: 'r-negation', en: '\u201cno', hi: '"नहीं', pron: 'nine', type: 'Answer', why: 'nein (recycled — Ja oder Nein).', ex: 'Nein, du sollst Tee trinken.', exEn: 'No, you should drink tea.' },
      { w: ',', plain: true },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'sollst', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'zolst', type: 'Modal · sollen (du)', why: 'sollen, du-form (this chapter).', ex: 'Du sollst Tee trinken.', exEn: 'You should drink tea.' },
      { w: 'Tee', role: 'r-object', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.', why: 'der Tee (recycled — Essen & Trinken).', ex: 'Du sollst Tee trinken.', exEn: 'You should drink tea.' },
      { w: 'trinken', role: 'r-verb', en: 'drink', hi: 'पीना', pron: 'TRING-ken', type: 'Verb · infinitive', why: 'infinitive at the end after a modal (recycled — Modalverben 1).', ex: 'Du sollst Tee trinken.', exEn: 'You should drink tea.' },
      { w: '!', plain: true },
      { w: '\u201c', plain: true },
      { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective', why: '"Gute Besserung!" (this chapter).', ex: 'Gute Besserung!', exEn: 'Get well soon!' },
      { w: 'Besserung', role: 'r-object', en: 'recovery', hi: 'स्वस्थ होना', pron: 'BE-suh-rung', type: 'Noun · fem.', why: '"Gute Besserung!" = get well soon (this chapter).', ex: 'Gute Besserung, Max!', exEn: 'Get well soon, Max!' },
      { w: '!', plain: true }
    ],
    translation: 'Max is ill. He has a fever and a headache. The doctor examines him and says: "Take the medicine and stay in bed!" Max asks: "May I drink coffee?" The doctor says: "No, you should drink tea!" Get well soon!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_044_L001', speaker: 'Frau Dr. Berg', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Guten Tag, Marco! Was fehlt Ihnen heute?', en: 'Good day, Marco! What\'s wrong today?' },
      { id: 'A1_044_L002', speaker: 'Marco', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mein Rücken tut weh. Ich kann schlecht sitzen.', en: 'My back hurts. I can\'t sit well.' },
      { id: 'A1_044_L003', speaker: 'Frau Dr. Berg', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stehen Sie oft auf und bewegen Sie sich. Nehmen Sie diese Salbe.', en: 'Stand up often and move around. Take this ointment.' },
      { id: 'A1_044_L004', speaker: 'Marco', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Darf ich trotzdem Sport machen?', en: 'May I still do sport?' },
      { id: 'A1_044_L005', speaker: 'Frau Dr. Berg', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber nur leichten Sport. Gute Besserung!', en: 'Yes, but only light sport. Get well soon!' }
    ],
    transcript: 'Guten Tag, Marco! Was fehlt Ihnen heute? Mein Rücken tut weh. Ich kann schlecht sitzen. Stehen Sie oft auf und bewegen Sie sich. Nehmen Sie diese Salbe. Darf ich trotzdem Sport machen? Ja, aber nur leichten Sport. Gute Besserung!',
    translation: 'Good day, Marco! What\'s wrong today? My back hurts. I can\'t sit well. Stand up often and move around. Take this ointment. May I still do sport? Yes, but only light sport. Get well soon!',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'Marco' },
      { w: '!', plain: true },
      { w: 'Was' },
      { w: 'fehlt' },
      { w: 'Ihnen' },
      { w: 'heute' },
      { w: '?', plain: true },
      { w: 'Mein' },
      { w: 'Rücken' },
      { w: 'tut' },
      { w: 'weh' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'kann' },
      { w: 'schlecht' },
      { w: 'sitzen' },
      { w: '.', plain: true },
      { w: 'Stehen' },
      { w: 'Sie' },
      { w: 'oft' },
      { w: 'auf' },
      { w: 'und' },
      { w: 'bewegen' },
      { w: 'Sie' },
      { w: 'sich' },
      { w: '.', plain: true },
      { w: 'Nehmen' },
      { w: 'Sie' },
      { w: 'diese' },
      { w: 'Salbe' },
      { w: '.', plain: true },
      { w: 'Darf' },
      { w: 'ich' },
      { w: 'trotzdem' },
      { w: 'Sport' },
      { w: 'machen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'nur' },
      { w: 'leichten' },
      { w: 'Sport' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Besserung' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was hat Marco diesmal?', qEn: 'What is wrong with Marco this time?', options: ['Halsschmerzen', 'Rückenschmerzen', 'Zahnschmerzen', 'Fieber'], optionsEn: ['a sore throat', 'back pain', 'toothache', 'fever'], answer: 1,
        explain: '"Mein Rücken tut weh."' },
      { q: 'Darf Marco Sport machen?', qEn: 'May Marco do sport?', options: ['Nein, gar nicht', 'Ja, nur leichten Sport', 'Ja, viel Sport', 'Nur schwimmen'], optionsEn: ['No, not at all', 'Yes, but only light exercise', 'Yes, a lot of sport', 'only swimming'], answer: 1,
        explain: '"Ja, aber nur leichten Sport."' }
    ]
  },

  speaking: [
    { task: "Dein Freund hat Kopfschmerzen und Fieber. Was rätst du ihm?", taskEn: "Your friend has a headache and a fever. What do you advise?", de: "Nimm eine Tablette und trink viel Wasser!", en: "Take a tablet and drink plenty of water!" },
    { task: "Beim Arzt: Du hast seit zwei Tagen Halsschmerzen. Was sagst du?", taskEn: "At the doctor's: you've had a sore throat for two days. What do you say?", de: "Ich bin krank. Ich habe Schmerzen im Hals und ich huste.", en: "I'm ill. I have a sore throat and I'm coughing." },
    { task: "Im Wartezimmer fragst du, ob du telefonieren darfst.", taskEn: "In the waiting room you ask whether you may make a call.", de: "Darf ich hier telefonieren? Soll ich draußen warten?", en: "May I make a call here? Should I wait outside?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short set of doctor\u2019s instructions and a permission dialogue (6\u20138 sentences). Use two imperatives (Trink …! Nimm …! Bleib …!), one dürfen question ("Darf ich …?") with its answer, and two sollen sentences of advice ("Du sollst …"). Finish with "Gute Besserung!".',
    starters: ['Trink viel Tee!', 'Nimm die Tabletten!', 'Darf ich …? — Nein, du darfst nicht.', 'Du sollst …'],
    placeholder: 'Bleib im Bett und trink viel Tee! …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Make the du-imperative of "nehmen": "___ die Tablette!"',
      options: ['Nehm', 'Nimm', 'Nehme', 'Nimmst'],
      answer: 1,
      explain: 'nehmen keeps the e→i change in the command: Nimm!'
    },
    gap: {
      // dürfen (permission) vs sollen (advice)
      sentence: ['___ ich gehen? \u2014 Nein, du ', ' im Bett bleiben.'],
      gaps: [ { answer: 'Darf', accepts: ['darf'] }, { answer: 'sollst', accepts: ['sollst'] } ],
      explain: 'Darf ich …? = permission (dürfen); du sollst … = advice (sollen).'
    },
    match: {
      q: 'Match each command to its "you" form.',
      pairs: [
        { noun: 'Komm!', art: 'du' },
        { noun: 'Kommt!', art: 'ihr' },
        { noun: 'Kommen Sie!', art: 'Sie' },
        { noun: 'Seien Sie ruhig!', art: 'Sie (sein)' }
      ]
    },
    builder: {
      target: 'Build the command: "Drink a lot of tea!"',
      bank: ['Trink', 'viel', 'Tee'],
      answer: ['Trink', 'viel', 'Tee'],
      roles: { 'Trink': 'r-verb', 'viel': 'r-object', 'Tee': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the du-imperative of "kommen"?', options: ['Du komm', 'Komm', 'Kommst', 'Kommen'], answer: 1,
      explain: 'Drop -st and the pronoun: Komm!' },
    { q: 'Which verb means "to be allowed / may"?', options: ['sollen', 'dürfen', 'müssen', 'können'], answer: 1,
      explain: 'dürfen = permission (may / to be allowed).' },
    { q: 'Complete: "Du ___ mehr üben." (should)', options: ['darfst', 'sollst', 'kannst', 'willst'], answer: 1,
      explain: 'sollen = advice/should: du sollst.' },
    { q: 'The du-imperative of "nehmen" is…', options: ['Nehm!', 'Nimm!', 'Nehme!', 'Nimmst!'], answer: 1,
      explain: 'nehmen keeps the e→i change: Nimm!' },
    { q: 'Which is correct?', options: ['Darf ich zu gehen?', 'Darf ich gehen?', 'Darf ich gehe?', 'Darf ich gehst?'], answer: 1,
      explain: 'No "zu" after a modal; plain infinitive: "Darf ich gehen?"' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Imperativ: <span class="de">Komm! (du), Kommt! (ihr), Kommen Sie! (Sie)</span>. sein → <span class="de">Sei / Seid / Seien Sie ruhig!</span>' },
    { c: 'r-modalverb', html: '<span class="de">dürfen</span> = permission: <span class="de">Darf ich …?</span> / <span class="de">… darf nicht …</span>' },
    { c: 'r-modalverb', html: '<span class="de">sollen</span> = advice / instruction: <span class="de">Du sollst mehr trinken.</span> Modal in position 2, infinitive at the end.' }
  ],
  revisionTips: [
    'Build the du-command from the du-form: drop -st (du trinkst → Trink!); keep e→i (Nimm!, Lies!), drop a→ä (Fahr!).',
    'dürfen = "may / allowed"; sollen = "should / supposed to" — don\u2019t swap them for können/müssen.',
    'Separable prefix and the second verb both go to the end: "Mach die Tür zu!", "Du sollst Tee trinken."'
  ]
};

window.CHAPTER = CHAPTER;
