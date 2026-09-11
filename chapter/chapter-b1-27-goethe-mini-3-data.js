/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 27
   "Goethe Mini 3" — FOURTH B1 checkpoint. NO new grammar.
   Primary focus: Plusquamperfekt (Ch.20), Temporale Nebensätze
   (Ch.21), brauchen + zu + Infinitiv (Ch.22), Reflexivpronomen
   Akk./Dativ (Ch.23), Zweiteilige Konnektoren (Ch.24), Stellung
   von nicht (Ch.25), Adjektivdeklination ohne Artikel (Ch.26).
   Continuously recycles: Passiv, Futur I, Relativsätze (+ mit
   Präpositionen), N-Deklination, Genitiv/wegen, Präteritum,
   Adjektivdeklination, Konjunktiv II, damit/um…zu, weil/da/obwohl
   (Ch.1–19). Difficulty ~90–95% of the real Goethe B1 exam.
   IMPORTANT: dialogue, listening, speaking, writing, AI Tutor
   use ONLY Marte and Timo (two-voice audio system) — no Max,
   no Frau Weber.
   Vocabulary source: uploaded chapter-27 note — "(Review chapter
   — no new words)". Review vocab drawn entirely from Ch.20–26.
   Schema mirrors chapter-b1-13-goethe-mini-2-data.js (checkpoint
   shape) so it runs on the shared chapter-app.js / chapter-tutor.js
   engine. Grammar coloring uses the shared roleFor/guessRole
   pipeline — no manual role overrides beyond what's needed for
   accuracy.
============================================================ */
const CHAPTER = {
  id: 'b1-27-goethe-mini-3',
  phase: 'B1 · Phase 1',
  number: 27,
  title: 'Goethe Mini 4',
  titleEn: 'Goethe Checkpoint 4 — Plusquamperfekt, Nebensätze & Konnektoren',
  description: 'Your fourth B1 checkpoint — no new grammar. A near-exam-difficulty Goethe-B1-style mock focused on Plusquamperfekt, temporal clauses, brauchen + zu, reflexive pronouns, two-part connectors, nicht placement, and strong adjective endings, while recycling everything from Chapters 1–19.',
  xp: 300,
  time: 65,
  difficulty: 'Checkpoint',
  nextChapter: { number: 28, title: 'Passiv: Präsens, Präteritum & Perfekt', titleEn: 'Passive: present, simple past & perfect' , href: 'chapter-b1-28-passiv-praesens-praeteritum-perfekt.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>the whole of B1 so far.</em>',
    intro: 'Marte and Timo compare a demanding week — a job interview that exhausted her, a delayed connection, a doctor\'s visit — recycling Plusquamperfekt, temporal clauses, and two-part connectors from every B1 chapter so far.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Plusquamperfekt, temporal clauses, and two-part connectors work alongside everything from Chapters 1–19'
    ],
    scene: 'Eine anstrengende Woche',
    femaleSpeakers: ['Marte'],
    dialogue: [
      { speaker: 'Marte', tokens: [
        { w: 'Nachdem', role: 'r-conjunction', en: 'after', hi: 'के बाद', pron: 'NAHKH-daym', type: 'Conjunction · nachdem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Vorstellungsgespräch', role: 'r-akkusativ', en: 'job interview', hi: 'साक्षात्कार', pron: 'for-SHTE-lungs-ge-shpraikh', type: 'Noun · neut.' },
        { w: 'gehabt', role: 'r-verb', en: 'had', hi: 'किया था', pron: 'ge-HAPT', type: 'Partizip II' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'erschöpft', role: 'r-subject', en: 'exhausted', hi: 'थकी हुई', pron: 'er-SHÖPFT', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'After I had had the job interview, I was exhausted.', hi: 'Sakshatkaar karne ke baad, main thaki hui thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'reingegangen', role: 'r-verb', en: 'went in', hi: 'अंदर गयी', pron: 'RINE-ge-gan-gen', type: 'Partizip II' },
        { w: 'bist', role: 'r-verb', en: 'were', hi: 'थी', pron: 'bist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'hattest', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-test', type: 'Verb · haben (Plusquamperfekt, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'yourself', hi: 'अपने लिए', pron: 'deer', type: 'Reflexive pronoun · dative' },
        { w: 'Sorgen', role: 'r-akkusativ', en: 'worries', hi: 'चिंता', pron: 'ZOR-gen', type: 'Noun · plural' },
        { w: 'gemacht', role: 'r-verb', en: 'made', hi: 'कीं', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Before you went in, you had worried.', hi: 'Andar jaane se pehle, tumne chinta ki thi.' },
      { speaker: 'Marte', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'während', role: 'r-conjunction', en: 'while', hi: 'जबकि', pron: 'VAI-rent', type: 'Conjunction · während' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gesprochen', role: 'r-verb', en: 'spoke', hi: 'बात की', pron: 'ge-SHPRO-khen', type: 'Partizip II' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'थी', pron: 'HAH-buh', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'wurde', role: 'r-verb', en: 'became', hi: 'हो गयी', pron: 'VUR-duh', type: 'Verb · werden (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ruhiger', role: 'r-subject', en: 'calmer', hi: 'ज़्यादा शांत', pron: 'ROO-i-ger', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'Yes, but while I was speaking, I became calmer.', hi: 'Haan, lekin baat karte samay, main zyada shaant ho gayi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Erfahrung', role: 'r-subject', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-subject', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Qualifikation', role: 'r-subject', en: 'qualification', hi: 'योग्यता', pron: 'kva-li-fi-ka-TSYON', type: 'Noun · fem.' },
        { w: 'waren', role: 'r-verb', en: 'were', hi: 'थीं', pron: 'VAH-ren', type: 'Verb · sein (Präteritum, plural)' },
        { w: 'überzeugend', role: 'r-akkusativ', en: 'convincing', hi: 'प्रभावशाली', pron: 'ü-ber-TSOY-gent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Both your experience and your qualification were convincing.', hi: 'Tumhaari anubhav aur yogyata dono prabhaavshaali the.' },
      { speaker: 'Marte', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Sobald', role: 'r-conjunction', en: 'as soon as', hi: 'जैसे ही', pron: 'zo-BALT', type: 'Conjunction · sobald', why: 'sobald = as soon as (this chapter).', ex: 'Sobald ich die Antwort bekomme, rufe ich dich an.', exEn: 'As soon as I get the answer, I will call you.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Antwort', role: 'r-akkusativ', en: 'answer', hi: 'जवाब', pron: 'ANT-vort', type: 'Noun · fem.' },
        { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'मिले', pron: 'be-KO-muh', type: 'Verb · bekommen (Satzende)' },
        { w: ',', plain: true },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करती हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Thanks! As soon as I get the answer, I will call you.', hi: 'Dhanyavaad! Jaise hi mujhe jawaab mile, main tumhe call karungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'drücke', role: 'r-verb', en: 'press', hi: 'दबाता हूँ', pron: 'DRÜ-kuh', type: 'Verb · drücken (ich)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Daumen', role: 'r-akkusativ', en: 'thumbs', hi: 'अंगूठे', pron: 'DOW-men', type: 'Noun · plural', why: 'die Daumen drücken = to keep fingers crossed, fixed phrase (this chapter).', ex: 'Ich drücke dir die Daumen.', exEn: 'I keep my fingers crossed for you.' },
        { w: '.', plain: true }
      ], en: 'I keep my fingers crossed for you.', hi: 'Main tumhare liye ungliyaan crossed rakhta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>fourth B1 checkpoint</strong> — no new grammar, near-exam difficulty. It puts <span class="de r-verb">Plusquamperfekt</span>, <span class="de r-connector">temporale Nebensätze</span>, <span class="de r-verb">brauchen + zu</span>, <span class="de r-reflexiv-akk">Reflexivpronomen</span>, <span class="de r-connector">zweiteilige Konnektoren</span>, <span class="de r-negation">Stellung von nicht</span>, and <span class="de r-adjective">Adjektivdeklination ohne Artikel</span> to work, while continuously recycling everything from Chapters 1–19.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the FOURTH B1 CHECKPOINT covering Chapters 1-26, with special focus on Plusquamperfekt, temporal clauses (als/wenn/bevor/nachdem/während), brauchen + zu + Infinitiv, Reflexivpronomen (Akk./Dativ), the five two-part connectors, nicht-placement, and strong adjective declension — no new grammar. Difficulty should approach the real Goethe B1 exam. The learner wrote a short exam-style text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Plusquamperfekt: hatte/war + Partizip II for an action before another past action; never combine with a Präsens/Perfekt verb in the same clause chain incorrectly.\n' +
    '- Temporal clauses: als for a single past event, wenn for repeated/future, bevor/nachdem for before/after, während for simultaneous actions.\n' +
    '- brauchen + zu + Infinitiv: only for negated necessity (nicht/kein brauchen ... zu); never omit "zu" or "nicht".\n' +
    '- Reflexivpronomen: mich/dich for Akkusativ-only reflexives; mir/dir when another Akkusativ object is already present.\n' +
    '- Zweiteilige Konnektoren: each pair is fixed (entweder...oder, sowohl...als auch, weder...noch, nicht nur...sondern auch, zwar...aber) — never mixed halves.\n' +
    '- nicht placement: directly before the adjective/adverb/prepositional phrase/word it negates; kein for nouns with ein/Nullartikel.\n' +
    '- Strong adjective declension: correct ending only when NO article precedes the noun.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe B1 exam.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are exam-ready. Plusquamperfekt, temporal clauses, connectors, nicht-placement, and strong adjective endings are all solid.',
    mid: 'Solid B1. Re-run the weakest section once (usually nicht-placement or the two-part connectors), then you\'ll be ready for the final checkpoint.',
    low: 'Worth a full re-run of Chapters 20–26 before continuing — focus especially on Plusquamperfekt formation and the five connector pairs.'
  },

  parserSentence: [
    { w: 'Bevor', role: 'r-connector' }, { w: 'ich', role: 'r-subject' },
    { w: 'ging', role: 'plain' }, { w: ',', plain: true },
    { w: 'hatte', role: 'plain' }, { w: 'ich', role: 'r-subject' },
    { w: 'mich', role: 'r-reflexiv-akk' }, { w: 'vorbereitet', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Plusquamperfekt, temporal clauses, connectors, nicht-placement, and strong adjectives work alongside Chapters 1–19.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marte and Timo navigate a job interview and a demanding week, recycling all twenty-six chapters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words from Chapters 20–26.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed review: Plusquamperfekt, temporal clauses, brauchen+zu, reflexives, connectors, nicht, strong adjectives, plus Ch.1–19.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style job-offer email and report mixing grammar from all twenty-six chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each grammar point across six realistic exam-style scenarios.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a Goethe-style task using this checkpoint\'s grammar.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill all twenty-six chapters\' grammar in mixed exercises.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'A full near-exam Goethe-B1-style mini mock test. Pass to bank the full 300 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your fourth B1 readiness check — strengths, weaknesses, and an overall score.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📝', title: 'Mock Test PDF',
      desc: 'A complete near-exam Goethe-B1-style mini mock — Hören, Lesen, Schreiben, Sprechen, Grammatik, Wortschatz — with an answer key, a score band, and a final readiness checklist.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '20 pages', kind: 'Mock Test' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'Key words from Chapters 20–26 in one revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Review PDF',
      desc: 'Plusquamperfekt, temporal clauses, brauchen+zu, reflexives, connectors, nicht-placement, strong adjectives, and Chapters 1–19 — all in one reference.',
      pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hören · Lesen', text: 'Handle full near-exam Goethe-B1 listening & reading tasks' },
    { de: 'Schreiben', text: 'Write a clean B1 email, complaint, or opinion text' },
    { de: 'Sprechen', text: 'Speak confidently in all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Mix Plusquamperfekt, temporal clauses, connectors, nicht, strong adjectives, and Chapters 1–19 correctly' },
    { de: 'Bereit für die echte Prüfung', text: 'Know your fourth B1 readiness score and what to revise before the final phase' }
  ],

  // ---------- Vocabulary review (~30 items — no new words, from Ch.20–26) ----------
  vocab: [
    { de: 'sich vorbereiten', pos: 'verb', en: 'to prepare oneself (auf + A.)', hi: 'तैयारी करना', ex: 'Ich hatte mich gründlich vorbereitet.', exEn: 'I had prepared myself thoroughly.', exHi: 'Maine khud ko achhi tarah taiyaar kar liya tha.' },
    { de: 'Vorstellungsgespräch', art: 'das', gender: 'n', plural: 'Vorstellungsgespräche', pos: 'noun', en: 'job interview', hi: 'नौकरी साक्षात्कार', ex: 'Bevor ich zum Vorstellungsgespräch ging, hatte ich mich vorbereitet.', exEn: 'Before I went to the job interview, I had prepared myself.', exHi: 'Naukri sakshatkaar mein jaane se pehle, maine khud ko taiyaar kar liya tha.' },
    { de: 'nachdem', pos: 'grammar', en: 'after (temporal clause, + Plusquamperfekt)', hi: 'बाद में', ex: 'Nachdem ich das Gespräch beendet hatte, rief ich dich an.', exEn: 'After I had finished the interview, I called you.', exHi: 'Baatcheet khatm karne ke baad, maine tumhein phone kiya.' },
    { de: 'bevor', pos: 'grammar', en: 'before (temporal clause)', hi: 'पहले', ex: 'Bevor ich ging, hatte ich mich vorbereitet.', exEn: 'Before I went, I had prepared myself.', exHi: 'Jaane se pehle, maine khud ko taiyaar kiya tha.' },
    { de: 'während', pos: 'grammar', en: 'while (temporal clause, simultaneous)', hi: 'जबकि', ex: 'Während du gewartet hast, habe ich Brötchen geholt.', exEn: 'While you were waiting, I fetched bread rolls.', exHi: 'Jabki tum intezaar kar rahi thi, main roti le aaya.' },
    { de: 'als', pos: 'grammar', en: 'when (one-time past event)', hi: 'जब', ex: 'Als ich jung war, hatte ich ähnliche Angst empfunden.', exEn: 'When I was young, I had felt a similar fear.', exHi: 'Jab main jawaan tha, mujhe aisa hi dar mehsoos hua tha.' },
    { de: 'brauchen', pos: 'verb', en: 'to need (nicht ... zu + Infinitiv)', hi: 'ज़रूरत होना', ex: 'Du brauchst dir keine Sorgen zu machen.', exEn: 'You don\'t need to worry.', exHi: 'Tumhein chinta karne ki zaroorat nahi hai.' },
    { de: 'sich Sorgen machen', pos: 'idiom', en: 'to worry', hi: 'चिंता करना', ex: 'Mach dir keine Sorgen.', exEn: 'Don\'t worry.', exHi: 'Chinta mat karo.' },
    { de: 'entweder … oder', pos: 'grammar', en: 'either … or', hi: 'या तो … या', ex: 'Entweder bekommen wir die Stelle, oder wir suchen weiter.', exEn: 'Either we get the position, or we keep searching.', exHi: 'Ya to humein pad milega, ya hum aage dhoondhenge.' },
    { de: 'sowohl … als auch', pos: 'grammar', en: 'both … and', hi: '… के साथ-साथ …', ex: 'Sowohl deine Qualifikation als auch deine Erfahrung sind stark.', exEn: 'Both your qualification and your experience are strong.', exHi: 'Tumhaari yogyata aur anubhav dono mazboot hain.' },
    { de: 'weder … noch', pos: 'grammar', en: 'neither … nor', hi: 'न तो … न ही', ex: 'Weder die Firma noch die Adresse war mir bekannt.', exEn: 'Neither the company nor the address was known to me.', exHi: 'Na kampani na hi pata mujhe pata tha.' },
    { de: 'nicht nur … sondern auch', pos: 'grammar', en: 'not only … but also', hi: 'सिर्फ़ … ही नहीं, बल्कि … भी', ex: 'Nicht nur die Brötchen waren lecker, sondern auch die Nachricht.', exEn: 'Not only were the bread rolls delicious, but also the message.', exHi: 'Sirf roti hi nahi, balki message bhi achha tha.' },
    { de: 'zwar … aber', pos: 'grammar', en: 'admittedly … but', hi: 'हालांकि … लेकिन', ex: 'Zwar war ich nervös, aber die Fragen waren nicht schwierig.', exEn: 'Admittedly I was nervous, but the questions weren\'t difficult.', exHi: 'Halanki main ghabraayi hui thi, lekin sawaal mushkil nahi the.' },
    { de: 'nicht (Adjektivnegation)', pos: 'grammar', en: 'not (before an adjective)', hi: 'नहीं (adjective se pehle)', ex: 'Die Fragen waren nicht schwierig.', exEn: 'The questions weren\'t difficult.', exHi: 'Sawaal mushkil nahi the.' },
    { de: 'nicht … sondern (Fokusverneinung)', pos: 'grammar', en: 'not X, but Y (focus negation)', hi: 'X नहीं, बल्कि Y', ex: 'Nicht die Angst störte mich, sondern die lange Wartezeit.', exEn: 'It wasn\'t the fear that bothered me, but the long waiting time.', exHi: 'Mujhe dar ne nahi, balki lambe intezaar ne pareshaan kiya.' },
    { de: 'Erfahrung', art: 'die', gender: 'f', plural: 'Erfahrungen', pos: 'noun', en: 'experience', hi: 'अनुभव', ex: 'Deine Erfahrung ist stark.', exEn: 'Your experience is strong.', exHi: 'Tumhaara anubhav mazboot hai.' },
    { de: 'Qualifikation', art: 'die', gender: 'f', plural: 'Qualifikationen', pos: 'noun', en: 'qualification', hi: 'योग्यता', ex: 'Sowohl deine Qualifikation als auch deine Erfahrung sind stark.', exEn: 'Both your qualification and experience are strong.', exHi: 'Tumhaari yogyata aur anubhav dono mazboot hain.' },
    { de: 'Wartezeit', art: 'die', gender: 'f', plural: 'Wartezeiten', pos: 'noun', en: 'waiting time', hi: 'प्रतीक्षा समय', ex: 'Die lange Wartezeit störte mich.', exEn: 'The long waiting time bothered me.', exHi: 'Lambe intezaar ne mujhe pareshaan kiya.' },
    { de: 'Entscheidung', art: 'die', gender: 'f', plural: 'Entscheidungen', pos: 'noun', en: 'decision', hi: 'फ़ैसला', ex: 'Sobald wir die Entscheidung bekommen, werden wir feiern gehen.', exEn: 'As soon as we get the decision, we\'ll go celebrate.', exHi: 'Jaise hi humein faisla milega, hum jashn manaane jaayenge.' },
    { de: 'Einstellung', art: 'die', gender: 'f', plural: 'Einstellungen', pos: 'noun', en: 'attitude', hi: 'दृष्टिकोण', ex: 'Das ist eine gesunde Einstellung.', exEn: 'That\'s a healthy attitude.', exHi: 'Yeh ek swasth soch hai.' },
    { de: 'Stelle', art: 'die', gender: 'f', plural: 'Stellen', pos: 'noun', en: 'position (job)', hi: 'पद', ex: 'Ich brauche nicht unbedingt diese Stelle.', exEn: 'I don\'t necessarily need this position.', exHi: 'Mujhe zaroori nahi ki yeh pad chahiye ho.' },
    { de: 'ähnlich', pos: 'adjective', en: 'similar', hi: 'ऐसा ही', ex: 'Ich hatte ähnliche Angst empfunden.', exEn: 'I had felt a similar fear.', exHi: 'Mujhe aisa hi dar mehsoos hua tha.' },
    { de: 'gesund', pos: 'adjective', en: 'healthy', hi: 'स्वस्थ', ex: 'Das ist eine gesunde Einstellung.', exEn: 'That\'s a healthy attitude.', exHi: 'Yeh ek swasth soch hai.' },
    { de: 'nervös', pos: 'adjective', en: 'nervous', hi: 'घबराया हुआ', ex: 'Zwar war ich nervös, aber die Fragen waren nicht schwierig.', exEn: 'Admittedly I was nervous, but the questions weren\'t difficult.', exHi: 'Halanki main ghabraayi hui thi, lekin sawaal mushkil nahi the.' },
    { de: 'gründlich', pos: 'adverb', en: 'thoroughly', hi: 'अच्छी तरह', ex: 'Ich hatte mich gründlich vorbereitet.', exEn: 'I had prepared myself thoroughly.', exHi: 'Maine khud ko achhi tarah taiyaar kiya tha.' },
    { de: 'unbedingt', pos: 'adverb', en: 'necessarily, absolutely', hi: 'ज़रूरी तौर पर', ex: 'Ich brauche nicht unbedingt diese Stelle.', exEn: 'I don\'t necessarily need this position.', exHi: 'Mujhe zaroori nahi ki yeh pad chahiye ho.' },
    { de: 'trotzdem', pos: 'adverb', en: 'nevertheless', hi: 'फिर भी', ex: 'Trotzdem drücke ich dir die Daumen.', exEn: 'Still, I\'m keeping my fingers crossed for you.', exHi: 'Fir bhi, main tumhaare liye ungliyaan cross karta hoon.' },
    { de: 'sobald', pos: 'grammar', en: 'as soon as', hi: 'जैसे ही', ex: 'Sobald wir die Entscheidung bekommen, werden wir feiern gehen.', exEn: 'As soon as we get the decision, we\'ll go celebrate.', exHi: 'Jaise hi humein faisla milega, hum jashn manaane jaayenge.' },
    { de: 'die Daumen drücken', pos: 'idiom', en: 'to keep one\'s fingers crossed', hi: 'ऊँगलियाँ क्रॉस करना', ex: 'Ich drücke dir die Daumen.', exEn: 'I\'m keeping my fingers crossed for you.', exHi: 'Main tumhaare liye ungliyaan cross karta hoon.' },
    { de: 'anrufen', pos: 'verb', en: 'to call (phone)', hi: 'फ़ोन करना', ex: 'Ich rief dich sofort an.', exEn: 'I called you right away.', exHi: 'Maine tumhein turant phone kiya.' }
  ],

  // ---------- Grammar Review (mixed, Chapters 20–26 focus) ----------
  grammar: [
    {
      title: 'Plusquamperfekt — der Schwerpunkt',
      body: [ 'hatte/war + Partizip II — an action that happened BEFORE another past action.' ],
      table: {
        head: ['Präteritum (later event)', 'Plusquamperfekt (earlier event)'],
        rows: [
          ['<span class="de">Ich rief dich an.</span>', '<span class="de">Ich hatte mich vorher vorbereitet.</span>']
        ]
      },
      hinglish: 'hatte/war + Partizip II — ek action jo doosre past action se PEHLE hui thi.'
    },
    {
      title: 'Temporale Nebensätze — der Schwerpunkt',
      body: [ 'als (one past event), wenn (repeated/future), bevor (before), nachdem (after, + Plusquamperfekt), während (simultaneous).' ],
      table: {
        head: ['Conjunction', 'Example'],
        rows: [
          ['als', '<span class="de">Als ich jung war, hatte ich Angst empfunden.</span>'],
          ['nachdem', '<span class="de">Nachdem ich das Gespräch beendet hatte, rief ich an.</span>'],
          ['während', '<span class="de">Während du gewartet hast, habe ich Brötchen geholt.</span>']
        ]
      },
      hinglish: 'als (ek baar ka past), wenn (baar-baar/future), bevor (pehle), nachdem (baad mein), während (ek saath).'
    },
    {
      title: 'brauchen + zu + Infinitiv & Reflexivpronomen — der Schwerpunkt',
      body: [ 'brauchen nicht ... zu = no necessity. Reflexive pronouns: mich/dich alone, mir/dir when another Akkusativ object is present.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['brauchen + zu', '<span class="de">Du brauchst dir keine Sorgen zu machen.</span>'],
          ['Reflexivpronomen Akk.', '<span class="de">Ich habe mich vorbereitet.</span>'],
          ['Reflexivpronomen Dat.', '<span class="de">Ich mache mir keine Sorgen.</span>']
        ]
      },
      hinglish: 'brauchen nicht ... zu = zaroorat nahi. mich/dich akele, mir/dir jab doosra Akkusativ object ho.'
    },
    {
      title: 'Zweiteilige Konnektoren, Stellung von nicht, Adjektiv ohne Artikel — der Schwerpunkt',
      body: [ 'Five fixed connector pairs. nicht sits directly before what it negates (or kein for nouns). Strong adjective endings appear only with no article.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Konnektoren', '<span class="de">Sowohl … als auch, weder … noch, zwar … aber.</span>'],
          ['nicht', '<span class="de">Die Fragen waren nicht schwierig.</span>'],
          ['Adjektiv ohne Artikel', '<span class="de">Ich hatte ähnliche Angst empfunden.</span>']
        ]
      },
      hinglish: 'Paanch fixed connector pairs. nicht seedhe uske pehle aata hai jise woh negate karta hai. Strong adjective endings sirf tab jab article na ho.'
    },
    {
      title: 'Chapters 1–19 — Wiederholung',
      body: [ 'Recycled: Passiv, Futur I, Relativsätze (+ mit Präpositionen), N-Deklination, Genitiv/wegen, Präteritum, Adjektivdeklination, Konjunktiv II, damit/um…zu, weil/da/obwohl.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Futur I', '<span class="de">Wir werden feiern gehen.</span>'],
          ['da / obwohl', '<span class="de">Da ich Zeit habe, warte ich nicht.</span>'],
          ['Konjunktiv II', '<span class="de">Könntest du am Samstag mitkommen?</span>']
        ]
      },
      hinglish: 'Chapters 1-19 se recycled: Passiv, Futur I, Relativsätze, N-Deklination, Genitiv, Präteritum, Adjektivdeklination, Konjunktiv II, damit/um…zu, weil/da/obwohl.'
    },
    {
      title: 'Quick decision guide — all twenty-six chapters together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['show one past action happened before another?', '→ Plusquamperfekt (hatte/war + Partizip II)'],
          ['place two events in time?', '→ als/wenn/bevor/nachdem/während'],
          ['say something is NOT necessary?', '→ brauchen nicht ... zu + Infinitiv'],
          ['express a choice, both, neither, addition, or contrast?', '→ one of the five two-part connectors'],
          ['negate an adjective, adverb, phrase, or one word?', '→ nicht directly before it (kein for nouns)'],
          ['describe a noun with no article?', '→ strong adjective ending']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool: Plusquamperfekt, temporal clauses, brauchen+zu, Konnektoren, nicht, strong adjectives.'
    }
  ],

  // ---------- Reading (Goethe-style: Job-offer email + report, clickable) ----------
  reading: {
    title: 'Eine E-Mail und ein Bericht',
    titleEn: 'An email and a report',
    tokens: [
      { w: 'Sehr', role: 'plain', en: 'very', hi: 'बहुत', type: 'Adverb' },
      { w: 'geehrte', role: 'plain', en: 'esteemed', hi: 'सम्मानित', type: 'Adjective', why: '"Sehr geehrte Frau …" — the standard formal email salutation.' },
      { w: 'Frau', role: 'plain', en: 'Ms', hi: 'श्रीमती', type: 'Noun · fem.' },
      { w: 'Sharma', role: 'plain', en: 'Sharma', hi: 'शर्मा', type: 'Name' },
      { w: ',', plain: true },
      { w: 'Nachdem', role: 'r-connector', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem', why: 'nachdem + Plusquamperfekt (recycled — Ch.20, Ch.21).' },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'अन्ना', type: 'Name' },
      { w: 'das', role: 'plain', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Vorstellungsgespräch', role: 'plain', en: 'job interview', hi: 'नौकरी साक्षात्कार', type: 'Noun · neut.', why: 'das Vorstellungsgespräch (this chapter).' },
      { w: 'gehabt', role: 'plain', en: 'had (Satzende)', hi: 'दिया (Satzende)', type: 'Verb · haben (Partizip II, Satzende)' },
      { w: 'hatte', role: 'plain', en: '(Plusquamperfekt, Satzende)', hi: '(Plusquamperfekt, Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'schrieb', role: 'plain', en: 'wrote', hi: 'लिखा', type: 'Verb · schreiben (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Firma', role: 'plain', en: 'company', hi: 'कंपनी', type: 'Noun · fem.' },
      { w: 'ihr', role: 'r-dativ', en: 'her (Satzende)', hi: 'उसे (Satzende)', type: 'Pronoun · Dativ' },
      { w: 'eine', role: 'plain', en: 'an (fem. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'freundliche', role: 'plain', en: 'friendly', hi: 'मिलनसार', type: 'Adjective · schwach · Akk.', why: 'Weak declension: eine + Akkusativ feminine → -e (recycled — Ch.12).' },
      { w: 'E-Mail', role: 'plain', en: 'email (Satzende)', hi: 'ईमेल (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konnektor · sowohl…als auch (1/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Qualifikation', role: 'plain', en: 'qualification', hi: 'योग्यता', type: 'Noun · fem.', why: 'die Qualifikation (this chapter).' },
      { w: 'als', role: 'r-connector', en: 'as', hi: '', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Erfahrung', role: 'plain', en: 'experience (Satzende)', hi: 'अनुभव (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Erfahrung (this chapter).' },
      { w: 'hätten', role: 'plain', en: 'would have', hi: 'प्रभावित किया होगा', type: 'Konjunktiv II · haben', why: 'Konjunktiv II — polite formal phrasing (recycled — Ch.3).' },
      { w: 'überzeugt', role: 'plain', en: 'convinced (Satzende)', hi: 'क़ायल किया (Satzende)', type: 'Verb · überzeugen (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Weder', role: 'r-connector', en: 'neither', hi: 'न तो', type: 'Konnektor · weder…noch (1/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'lange', role: 'plain', en: 'long', hi: 'लंबा', type: 'Adjective · schwach · Nom.', why: 'Weak declension: die + Nominativ feminine → -e.' },
      { w: 'Wartezeit', role: 'plain', en: 'waiting time', hi: 'प्रतीक्षा समय', type: 'Noun · fem.', why: 'die Wartezeit (this chapter).' },
      { w: 'noch', role: 'r-connector', en: 'nor', hi: 'न ही', type: 'Konnektor · weder…noch (2/2)' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'vielen', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · schwach · Akk. Pl.' },
      { w: 'Fragen', role: 'plain', en: 'questions (Satzende)', hi: 'सवाल (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'hatten', role: 'plain', en: 'had (Satzende)', hi: 'रोका था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
      { w: 'sie', role: 'r-subject', en: 'her (Satzende)', hi: 'उसे (Satzende)', type: 'Pronoun · Akk.' },
      { w: 'aufgehalten', role: 'plain', en: 'held up (Satzende)', hi: 'रोका (Satzende)', type: 'Verb · aufhalten (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Fokusverneinung', why: 'Focus negation: nicht + sondern (recycled — Ch.25).' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'सिर्फ़', type: 'Adverb' },
      { w: 'ihre', role: 'plain', en: 'her (fem. nom.)', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'ähnliche', role: 'plain', en: 'similar', hi: 'ऐसी ही', type: 'Adjective · stark · Nom.', why: 'Strong declension: no article, Nominativ feminine → -e (recycled — Ch.26).' },
      { w: 'Erfahrung', role: 'plain', en: 'experience', hi: 'अनुभव', type: 'Noun · fem.' },
      { w: 'zählte', role: 'plain', en: 'counted (Satzende)', hi: 'गिनी गई (Satzende)', type: 'Verb · zählen (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but', hi: 'बल्कि', type: 'Konnektor' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konnektor' },
      { w: 'ihre', role: 'plain', en: 'her (fem. nom.)', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'gesunde', role: 'plain', en: 'healthy', hi: 'स्वस्थ', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ihre + Nominativ feminine → -e (recycled — Ch.12).' },
      { w: 'Einstellung', role: 'plain', en: 'attitude (Satzende)', hi: 'दृष्टिकोण (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Einstellung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'freuen', role: 'plain', en: 'look forward', hi: 'प्रतीक्षा', type: 'Verb · sich freuen', why: '"Wir freuen uns …" — the standard closing before a formal sign-off.' },
      { w: 'uns', role: 'plain', en: 'ourselves', hi: '', type: 'Reflexivpronomen' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'की', type: 'Preposition' },
      { w: 'Ihre', role: 'plain', en: 'your', hi: 'आपकी', type: 'Possessivartikel' },
      { w: 'Antwort', role: 'plain', en: 'reply', hi: 'प्रतिक्रिया', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Mit', role: 'plain', en: 'with', hi: 'के साथ', type: 'Preposition' },
      { w: 'freundlichen', role: 'plain', en: 'kind', hi: 'सौहार्दपूर्ण', type: 'Adjective' },
      { w: 'Grüßen', role: 'plain', en: 'regards', hi: 'नमस्कार', type: 'Noun · plural', why: '"Mit freundlichen Grüßen" — the standard formal email sign-off.' }
    ],
    translation: 'Dear Ms Sharma, After Anna had had the job interview, the company wrote her a friendly email. Both her qualification and her experience had convinced them. Neither the long waiting time nor the many questions had held her up. Not only did her similar experience count, but also her sound attitude. We look forward to your reply. Kind regards,'
  },

  // ---------- Listening (Goethe-style, 6 realistic B1 scenarios in one transcript) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_027_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Marte, wie geht es dir nach dieser Woche? Du wirkst erschöpft.', en: 'Marte, how are you after this week? You seem exhausted.' },
      { id: 'B1_027_L002', speaker: 'Marte', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich gesagt, ich hatte den Termin schon dreimal verschoben, bevor er endlich stattfand.', en: 'Honestly, I had already postponed the appointment three times before it finally happened.' },
      { id: 'B1_027_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das klingt anstrengend. Brauchst du heute Abend einfach Ruhe?', en: 'That sounds exhausting. Do you just need rest tonight?' },
      { id: 'B1_027_L004', speaker: 'Marte', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau das. Aber danke, dass du fragst — das hilft schon.', en: 'Exactly that. But thanks for asking — that already helps.' }
    ],
    transcript: 'Marte, wie geht es dir nach dieser Woche? Du wirkst erschöpft. Ehrlich gesagt, ich hatte den Termin schon dreimal verschoben, bevor er endlich stattfand. Das klingt anstrengend. Brauchst du heute Abend einfach Ruhe? Genau das. Aber danke, dass du fragst — das hilft schon.',
    translation: 'Marte, how are you after this week? You seem exhausted. Honestly, I had already postponed the appointment three times before it finally happened. That sounds exhausting. Do you just need rest tonight? Exactly that. But thanks for asking — that already helps.',
    tokens: [
      { w: 'Marte' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'dir' },
      { w: 'nach' },
      { w: 'dieser' },
      { w: 'Woche' },
      { w: '?', plain: true },
      { w: 'Du' },
      { w: 'wirkst' },
      { w: 'erschöpft' },
      { w: '.', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hatte' },
      { w: 'den' },
      { w: 'Termin' },
      { w: 'schon' },
      { w: 'dreimal' },
      { w: 'verschoben' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'er' },
      { w: 'endlich' },
      { w: 'stattfand' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'klingt' },
      { w: 'anstrengend' },
      { w: '.', plain: true },
      { w: 'Brauchst' },
      { w: 'du' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: 'einfach' },
      { w: 'Ruhe' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: 'das' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'danke' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'du' },
      { w: 'fragst' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'hilft' },
      { w: 'schon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie oft hatte Marte den Termin verschoben?', qEn: 'How many times had Marte postponed the appointment?', options: ['einmal', 'zweimal', 'dreimal', 'nie'], optionsEn: ['once', 'twice', 'three times', 'never'], answer: 2,
        explain: '"… ich hatte den Termin schon dreimal verschoben."' },
      { q: 'Was braucht Marte heute Abend?', qEn: 'What does Marte need tonight?', options: ['Gesellschaft', 'Ruhe', 'Arbeit', 'einen Ausflug'], optionsEn: ['society', 'quiet', 'work', 'an outing'], answer: 1,
        explain: '"Genau das." (referring to "einfach Ruhe").' }
    ]
  },

  speaking: [
    { task: "Deine Freundin wirkt erschöpft. Frag nach der Woche.", taskEn: "Your friend seems exhausted. Ask about her week.", de: "Wie geht es dir nach dieser Woche? Du wirkst erschöpft.", en: "How are you after this week? You seem exhausted." },
    { task: "Sag, warum der Termin so lange gedauert hat.", taskEn: "Say why the appointment took so long.", de: "Ich hatte ihn dreimal verschoben, bevor er endlich stattfand.", en: "I'd postponed it three times before it finally took place." },
    { task: "Prüfung, Teil 1: Sprich über deine Erfahrung und Qualifikation.", taskEn: "Exam, Part 1: talk about your experience and qualifications.", de: "Ich habe sowohl Erfahrung im Büro als auch eine gute Qualifikation.", en: "I have both office experience and a good qualification." },
    { task: "Teil 2: Sprich über Wartezeiten bei Bewerbungen.", taskEn: "Part 2: talk about waiting times in applications.", de: "Die Wartezeit war nicht kurz, sondern sehr lang.", en: "The wait wasn't short, but very long." },
    { task: "Ein Freund fragt, wie du dich vorbereitest.", taskEn: "A friend asks how you prepare.", de: "Nachdem ich die Stelle gelesen hatte, habe ich mich vorbereitet.", en: "After I'd read the job ad, I prepared myself." },
    { task: "Deine Partnerin fragt, was du von der Entscheidung erwartest.", taskEn: "Your partner asks what you expect from the decision.", de: "Ich mache mir Sorgen, aber ich hoffe auf eine Einstellung.", en: "I'm worried, but I'm hoping for a job offer." },
    { task: "Teil 3: Plant zusammen die Vorbereitung auf das Gespräch.", taskEn: "Part 3: plan the interview preparation together.", de: "Entweder wir üben am Freitag oder am Sonntag. Ich brauche nur zwei Stunden.", en: "Either we practise on Friday or on Sunday. I only need two hours." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe B1 writing. Choose ONE task and write ~60 words, using at least five grammar points from Chapters 1–26 (Plusquamperfekt, temporal clauses, brauchen+zu, reflexives, two-part connectors, nicht-placement, strong adjectives, Passiv, Futur I, Relativsätze, Genitiv, Präteritum, Konjunktiv II, or damit/um…zu). (1) FORMAL EMAIL: thank a company for a job interview and ask about next steps. (2) OPINION: is it important to prepare thoroughly before an interview? (3) REPORT: describe a demanding week and what you had done beforehand.',
    starters: ['Sehr geehrte/r …,', 'Bevor …, hatte ich …', 'Nachdem …', 'Sowohl … als auch …', 'Ich brauche nicht …'],
    placeholder: 'Sehr geehrte Damen und Herren, vielen Dank für das Gespräch. Bevor ich kam, hatte ich mich …',
    minWords: 60
  },

  // ---------- Exercises (4 types, mixed Ch.1–26) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Bevor ich ging, ___ ich mich vorbereitet."',
      options: ['habe', 'hatte', 'werde'],
      answer: 1,
      explain: 'Plusquamperfekt: hatte + Partizip II — an earlier past action.'
    },
    gap: {
      sentence: ['Du brauchst dir keine Sorgen ', ' machen.'],
      gaps: [ { answer: 'zu', accepts: ['zu'] } ],
      explain: 'brauchen + zu + Infinitiv — never omit "zu".'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point.',
      pairs: [
        { noun: 'Bevor ich ging, hatte ich …', art: 'Plusquamperfekt' },
        { noun: 'Sowohl … als auch …', art: 'Zweiteiliger Konnektor' },
        { noun: 'Die Fragen waren nicht …', art: 'Adjektivnegation' },
        { noun: 'Ich hatte ähnliche Angst …', art: 'Adjektivdeklination ohne Artikel' },
        { noun: 'Du brauchst dir keine Sorgen zu …', art: 'brauchen + zu + Infinitiv' }
      ]
    },
    builder: {
      target: 'Build: "You don\'t need to worry."',
      bank: ['Du', 'brauchst', 'dir', 'keine', 'Sorgen', 'zu', 'machen', '.'],
      answer: ['Du', 'brauchst', 'dir', 'keine', 'Sorgen', 'zu', 'machen', '.'],
      roles: { 'brauchst': 'r-verb', 'dir': 'r-dativ', 'keine': 'r-negation' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'Complete: "Nachdem ich das Gespräch beendet ___, rief ich an."', options: ['habe', 'hatte', 'werde'], answer: 1,
      explain: 'Plusquamperfekt: nachdem + hatte + Partizip II.' },
    { q: 'Complete: "___ die Firma noch die Adresse war mir bekannt."', options: ['Sowohl', 'Weder', 'Zwar'], answer: 1,
      explain: 'weder...noch — neither is true.' },
    { q: 'Complete: "Die Fragen waren ___ schwierig."', options: ['kein', 'nicht', 'keine'], answer: 1,
      explain: 'Adjectives are negated with nicht, never kein.' },
    { q: 'Complete: "Ich hatte ___ Angst empfunden." (ähnlich, kein Artikel)', options: ['ähnliches', 'ähnliche', 'ähnlicher'], answer: 1,
      explain: 'Angst is feminine — strong Akkusativ ending is -e.' },
    { q: 'Which sentence uses brauchen + zu correctly?', options: ['Du brauchst dir keine Sorgen zu machen.', 'Du brauchst dir keine Sorgen machen.', 'Du brauchst zu dir keine Sorgen machen.'], answer: 0,
      explain: 'brauchen + nicht/kein + zu + Infinitiv — "zu" must come directly before the infinitive.' },
    { q: 'Which sentence contains an error?', options: ['Bevor ich ging, hatte ich mich vorbereitet.', 'Nicht die Angst störte mich, sondern die Wartezeit.', 'Ich brauche nicht diese Stelle zu.'], answer: 2,
      explain: 'It should be "Ich brauche diese Stelle nicht zu bekommen" or similar — "zu" must precede an infinitive, not end the sentence alone.' }
  ],

  // ---------- Summary / Fourth B1 Readiness Check ----------
  takeaways: [
    { c: 'r-verb', html: '<strong>Grammar mastered:</strong> Plusquamperfekt, temporal clauses (als/wenn/bevor/nachdem/während), brauchen + zu + Infinitiv, Reflexivpronomen, the five two-part connectors, nicht-placement, and strong adjective declension — plus everything recycled from Chapters 1–19.' },
    { c: 'r-connector', html: '<strong>Vocabulary mastered:</strong> the key words and phrases across Chapters 20–26 — job interviews, decisions, and everyday reasoning.' },
    { c: 'r-reflexiv-akk', html: '<strong>Speaking confidence:</strong> you can introduce yourself, present a topic, and plan something together at near-exam difficulty, using only two voices.' },
    { c: 'r-adjective', html: '<strong>Listening & reading readiness:</strong> you can follow interview, apartment, travel, doctor, office, and home scenarios drawing on all twenty-six chapters at once.' },
    { c: 'r-negation', html: '<strong>Writing readiness:</strong> you can produce a clean, well-structured short text using accurate, near-exam-level B1 grammar.' },
    { c: 'r-verb', html: '<strong>Overall B1 readiness:</strong> if you scored well across this mock test, you\'re nearly exam-ready. Review any weak sections below, then move into the final phase of the B1 course.' }
  ],
  revisionTips: [
    'Weak on Plusquamperfekt? Redo Ch.20 — especially hatte vs war and the timeline logic.',
    'Mixing up temporal conjunctions? Redo Ch.21 — als vs wenn is the most common slip.',
    'Forgetting "zu" with brauchen? Redo Ch.22 — brauchen nicht ... zu + Infinitiv.',
    'Mixing mich/mir? Redo Ch.23 — check whether another Akkusativ object is already present.',
    'Mixing connector halves? Redo Ch.24 — each of the five pairs is fixed.',
    'Unsure where nicht goes? Redo Ch.25 — ask what exactly is being negated.',
    'Strong adjective endings still shaky? Redo Ch.26 — no article means the adjective carries everything.'
  ]
};

window.CHAPTER = CHAPTER;
