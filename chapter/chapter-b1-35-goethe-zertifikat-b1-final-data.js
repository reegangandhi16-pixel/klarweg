/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 35
   "Goethe-Zertifikat B1 Final" — the FINAL capstone chapter of
   the Klarweg B1 course. NO new grammar. Tests everything from
   Chapters 1–34 in official Goethe-Zertifikat B1 module format:
   Lesen, Hören, Schreiben, Sprechen — plus mixed grammar and
   vocabulary revision, a full mock exam, a graduation report,
   and a B2 bridge section.
   IMPORTANT: dialogue, listening, speaking, writing, AI Tutor
   use ONLY Silke and Timo (two-voice audio system) — no Max,
   no Frau Weber.
   Vocabulary source: uploaded chapter-35 note — "(Review chapter
   — no new words)". Review vocab drawn entirely from Ch.1–34.
   Schema mirrors chapter-b1-19-goethe-halbzeit-test-data.js and
   chapter-b1-27-goethe-mini-3-data.js (checkpoint shape), scaled
   up as the final capstone, so it runs on the shared
   chapter-app.js / chapter-tutor.js engine.
============================================================ */
const CHAPTER = {
  id: 'b1-35-goethe-zertifikat-b1-final',
  phase: 'B1 · Phase 1',
  number: 35,
  title: 'Goethe-Zertifikat B1 Final',
  titleEn: 'Goethe-Zertifikat B1 — Final exam & graduation',
  description: 'Your final B1 checkpoint — the complete Goethe-Zertifikat B1 mock exam across all four modules (Lesen, Hören, Schreiben, Sprechen), a full grammar and vocabulary revision, a graduation report, and your bridge into B2.',
  xp: 500,
  time: 90,
  difficulty: 'Final Exam',
  nextChapter: { number: 1, title: 'Erweiterte Satzklammer', titleEn: 'The extended sentence bracket' , href: 'chapter-b2-01-erweiterte-satzklammer.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The whole of B1, <em>one last time.</em>',
    intro: 'Silke and Timo spend one last day together — an apartment viewing, a hospital visit, a job interview, a delayed train — recycling every major B1 structure in one continuous story before the real exam.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear all thirty-four chapters of B1 grammar working together in one day'
    ],
    scene: 'Ein letzter Tag vor der Prüfung',
    femaleSpeakers: ['Silke'],
    dialogue: [
      { speaker: 'Silke', tokens: [
        { w: 'Nachdem', role: 'r-conjunction', en: 'after', hi: 'के बाद', pron: 'NAHKH-daym', type: 'Conjunction · nachdem' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Prüfung', role: 'r-akkusativ', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: 'bestanden', role: 'r-verb', en: 'passed', hi: 'पास कर ली थी', pron: 'be-SHTAN-den', type: 'Partizip II' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'थी', pron: 'HA-tuh', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'völlig', role: 'r-adverb', en: 'completely', hi: 'पूरी तरह', pron: 'FÖ-likh', type: 'Adverb' },
        { w: 'glücklich', role: 'r-subject', en: 'happy', hi: 'ख़ुश', pron: 'GLÜK-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'After I had passed the exam, I was completely happy.', hi: 'Pariksha pass karne ke baad, main poori tarah khush thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zwar', role: 'r-conjunction', en: 'indeed', hi: 'हालांकि', pron: 'tsvahr', type: 'Conjunction · zwar … aber' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'मुश्किल', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Prüfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: 'schwer', role: 'r-akkusativ', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction · part 2' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'warst', role: 'r-verb', en: 'were', hi: 'थी', pron: 'varst', type: 'Verb · sein (Präteritum, du)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The exam was indeed hard, but you were very well prepared.', hi: 'Pariksha mushkil thi, par tum bahut achhi tarah taiyaar thi.' },
      { speaker: 'Silke', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Wohnung', role: 'r-akkusativ', en: 'apartment', hi: 'अपार्टमेंट', pron: 'VO-nung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Thanks! Now I only still need an apartment.', hi: 'Dhanyavaad! Ab mujhe sirf ek apartment chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto' },
        { w: 'schneller', role: 'r-subject', en: 'faster', hi: 'जल्दी', pron: 'SHNE-ler', type: 'Adjective · Komparativ' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'suchst', role: 'r-verb', en: 'search', hi: 'ढूंढती हो', pron: 'ZOOKHST', type: 'Verb · suchen (Satzende)' },
        { w: ',', plain: true },
        { w: 'desto', role: 'r-conjunction', en: 'the more', hi: 'उतना ही', pron: 'DES-to', type: 'Conjunction · part 2' },
        { w: 'mehr', role: 'r-subject', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Auswahl', role: 'r-subject', en: 'choice', hi: 'विकल्प', pron: 'OWS-vahl', type: 'Noun · fem.' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'होगा', pron: 'hast', type: 'Verb · haben (du, Satzende)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '.', plain: true }
      ], en: 'The faster you search, the more choice you have.', hi: 'Jitni jaldi tum dhoondhogi, utna hi zyada vikalp hoga.' },
      { speaker: 'Silke', tokens: [
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Termin', role: 'r-akkusativ', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'Vermieter', role: 'r-dativ', en: 'landlord (dat.)', hi: 'मकान मालिक के साथ', pron: 'fer-MEE-ter', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'You are right about that. I already have an appointment with a landlord.', hi: 'Tum sahi ho. Mera pehle se ek makaan malik ke saath appointment hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'drücke', role: 'r-verb', en: 'press', hi: 'दबाता हूँ', pron: 'DRÜ-kuh', type: 'Verb · drücken (ich)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Daumen', role: 'r-akkusativ', en: 'thumbs', hi: 'अंगूठे', pron: 'DOW-men', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'hast', type: 'Verb · haben' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'geschafft', role: 'r-verb', en: 'achieved', hi: 'हासिल', pron: 'ge-SHAFT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I keep my fingers crossed for you. You have achieved so much.', hi: 'Main tumhare liye ungliyaan crossed rakhta hoon. Tumne itna kuch haasil kiya hai.' },
      { speaker: 'Silke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective' },
        { w: 'darauf', role: 'r-subject', en: 'of it', hi: 'उस पर', pron: 'da-ROWF', type: 'Pronoun · adverbial' },
        { w: '.', plain: true }
      ], en: 'Yes, and I am proud of it.', hi: 'Haan, aur mujhe uspar garv hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the <strong>final B1 checkpoint</strong> — no new grammar. It brings together everything from all thirty-four chapters — <span class="de r-verb">Passiv</span>, <span class="de r-connector">Konnektoren</span>, <span class="de r-negation">nicht</span>, <span class="de r-adjective">Partizipien</span>, <span class="de r-question">was/wo</span>, <span class="de r-connector">je … desto</span> — under full Goethe-Zertifikat B1 exam conditions: Lesen, Hören, Schreiben, Sprechen.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor and official Goethe-B1 examiner for a Hindi/English-speaking learner. ' +
    'This is the FINAL B1 CHECKPOINT covering ALL of Chapters 1-34 — no new grammar. Difficulty should match the real Goethe-Zertifikat B1 exam. The learner wrote an exam-style text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — check against the full B1 grammar set as covered across the course: zu + Infinitiv; weil/da/obwohl; Konjunktiv II (könnte/würde/hätte/wäre); deshalb/so…dass; Genitiv + wegen/trotz/während; Präteritum; Zeitangaben; Passiv (Präsens/Präteritum/Perfekt) and Passiv mit Modalverben; Relativsätze (Nom./Akk./Dativ/mit Präpositionen/was/wo); Adjektivdeklination (weak/mixed/strong) and Adjektive als Nomen; Komparativ/Superlativ vor Nomen; N-Deklination; Futur I; damit/um…zu; Plusquamperfekt; temporale Nebensätze (als/wenn/bevor/nachdem/während); brauchen + zu; Reflexivpronomen; zweiteilige Konnektoren; Stellung von nicht; je…desto/umso; Partizipien als Adjektive; Artikelwörter als Pronomen. ' +
    'If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, examiner-style.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence on how ready this text would be for the real Goethe B1 exam.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are fully ready for the real Goethe-Zertifikat B1 exam. Congratulations on completing Klarweg B1!',
    mid: 'Solid B1. Review your weakest module once more (usually Passiv or Adjektivdeklination), then you\'ll be exam-ready.',
    low: 'Worth a full revision pass through the chapters flagged in your weakness report before sitting the real exam.'
  },

  parserSentence: [
    { w: 'Nachdem', role: 'r-connector' }, { w: 'wir', role: 'r-subject' },
    { w: 'die', role: 'plain' }, { w: 'Wohnung', role: 'plain' },
    { w: 'besichtigt', role: 'plain' }, { w: 'hatten', role: 'plain' },
    { w: ',', plain: true }, { w: 'sind', role: 'plain' },
    { w: 'wir', role: 'r-subject' }, { w: 'gegangen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how everything from Chapters 1–34 works together under exam conditions.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Silke and Timo spend one last full day recycling every B1 structure before the exam.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words across all of B1 — Chapters 1–34.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Complete mixed review of every B1 grammar topic.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'A full Goethe-B1-style Lesen module — five reading tasks in official format.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'A full Goethe-B1-style Hören module — four listening tasks in official format.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Goethe B1 Sprechen Teil 1–3: introduce yourself, present a topic, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'A full Goethe-B1-style Schreiben module — formal email, informal email, opinion post.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed grammar and vocabulary drills across the entire B1 course.' },
    { id: 'quiz',       label: 'Mock Exam',  tag: 'assess',
      objective: 'The complete Goethe-Zertifikat B1 Final Mock Exam. Pass to bank the full 500 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your B1 Graduation Report — strengths, weaknesses, CEFR confirmation, and your bridge to B2.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the complete B1 revision pack.' }
  ],

  resources: [
    { icon: '🎓', title: 'B1 Final Mock Exam PDF',
      desc: 'The complete Goethe-Zertifikat B1 mock exam — Lesen, Hören, Schreiben, Sprechen — with a full answer key, scoring guide, and CEFR analysis.',
      pdfUrl: '/pdfs/mock-test.pdf', size: '32 pages', kind: 'Mock Exam' },
    { icon: '📚', title: 'Complete B1 Vocabulary PDF',
      desc: 'Every key word from Chapters 1–34 in one master revision sheet, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '24 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Complete B1 Grammar PDF',
      desc: 'Every grammar topic from Chapters 1–34 in one master reference, plus the Top 100 B1 mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '28 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Lesen · Hören', text: 'Handle the complete official Goethe-B1 reading and listening modules' },
    { de: 'Schreiben', text: 'Write a formal email, informal email, and opinion post to exam standard' },
    { de: 'Sprechen', text: 'Speak confidently across all three Goethe B1 parts' },
    { de: 'Grammatik', text: 'Correctly combine all thirty-four B1 grammar topics' },
    { de: 'Goethe-Zertifikat B1', text: 'Know your final readiness score and confirm your CEFR level' }
  ],

  // ---------- Vocabulary review (~40 items — no new words, from all of B1) ----------
  vocab: [
    { de: 'sich vorbereiten', pos: 'verb', en: 'to prepare oneself (auf + A.)', hi: 'तैयारी करना', ex: 'Ich hatte mich schon vorbereitet.', exEn: 'I had already prepared myself.', exHi: 'Maine pehle hi khud ko taiyaar kar liya tha.' },
    { de: 'nachdem', pos: 'grammar', en: 'after (+ Plusquamperfekt)', hi: 'बाद में', ex: 'Nachdem ich die Wohnung besichtigt hatte, ging ich zum Amt.', exEn: 'After I had viewed the apartment, I went to the office.', exHi: 'Flat dekhne ke baad, main office gaya.' },
    { de: 'zwar … aber', pos: 'grammar', en: 'admittedly … but', hi: 'हालांकि … लेकिन', ex: 'Zwar ist sie klein, aber gut gelegen.', exEn: 'Admittedly it\'s small, but well located.', exHi: 'Halanki yeh chhota hai, lekin achhi jagah hai.' },
    { de: 'sowohl … als auch', pos: 'grammar', en: 'both … and', hi: '… के साथ-साथ …', ex: 'Sowohl die Lage als auch der Preis sind gut.', exEn: 'Both the location and the price are good.', exHi: 'Sthaan aur keemat dono achhe hain.' },
    { de: 'gehören', pos: 'verb', en: 'to belong to (+ Dativ)', hi: 'का होना', ex: 'Die Wohnung, dem der Vermieter gehört, ist klein.', exEn: 'The apartment that belongs to the landlord is small.', exHi: 'Woh flat jo makaan maalik ka hai, chhota hai.' },
    { de: 'unterschreiben', pos: 'verb', en: 'to sign', hi: 'हस्ताक्षर करना', ex: 'Der Vertrag muss unterschrieben werden.', exEn: 'The contract must be signed.', exHi: 'Anubandh par hastakshar kiya jaana chahiye.' },
    { de: 'je … desto', pos: 'grammar', en: 'the more … the more', hi: 'जितना … उतना', ex: 'Je schneller wir entscheiden, desto besser.', exEn: 'The faster we decide, the better.', exHi: 'Jitni jaldi hum faisla lete hain, utna behtar.' },
    { de: 'wo', pos: 'grammar', en: 'where (Relativadverb)', hi: 'जहाँ', ex: 'Das Restaurant, wo wir reserviert haben, ist gut.', exEn: 'The restaurant where we reserved is good.', exHi: 'Woh restaurant jahaan humne reservation kiya, achha hai.' },
    { de: 'nicht … sondern', pos: 'grammar', en: 'not … but rather (focus negation)', hi: 'नहीं … बल्कि', ex: 'Nicht der Bus, sondern die Straßenbahn bringt uns hin.', exEn: 'Not the bus, but the tram takes us there.', exHi: 'Humein bus nahi, balki tram le jaati hai.' },
    { de: 'brauchen', pos: 'verb', en: 'to need (nicht … zu + Infinitiv)', hi: 'ज़रूरत होना', ex: 'Ich brauche nicht lange zu warten.', exEn: 'I don\'t need to wait long.', exHi: 'Mujhe zyaada intezaar nahi karna.' },
    { de: 'damit', pos: 'grammar', en: 'so that', hi: 'ताकि', ex: 'Damit du nicht nervös wirst, drücke ich dir die Daumen.', exEn: 'So that you don\'t get nervous, I\'m keeping my fingers crossed.', exHi: 'Taaki tum ghabraayi na jao, main ungliyaan cross karta hoon.' },
    { de: 'wegen', pos: 'grammar', en: 'because of (+ Genitiv)', hi: 'की वजह से', ex: 'Wegen des guten Rufes ist der Tisch reserviert worden.', exEn: 'Because of the good reputation, the table has been reserved.', exHi: 'Achhi pratishtha ki wajah se, table reserve kiya ja chuka hai.' },
    { de: 'reservieren', pos: 'verb', en: 'to reserve', hi: 'आरक्षित करना', ex: 'Der Tisch ist reserviert worden.', exEn: 'The table has been reserved.', exHi: 'Table reserve kiya ja chuka hai.' },
    { de: 'hoffen', pos: 'verb', en: 'to hope (+ zu + Infinitiv)', hi: 'उम्मीद करना', ex: 'Ich hoffe, die Stelle zu bekommen.', exEn: 'I hope to get the position.', exHi: 'Mujhe ummeed hai ki main pad pa loongi.' },
    { de: 'Vorstellungsgespräch', art: 'das', gender: 'n', plural: 'Vorstellungsgespräche', pos: 'noun', en: 'job interview', hi: 'नौकरी साक्षात्कार', ex: 'Ich muss zum Vorstellungsgespräch.', exEn: 'I have to go to the job interview.', exHi: 'Mujhe naukri sakshatkaar ke liye jaana hai.' },
    { de: 'Deutsche', pos: 'noun', en: 'German (person, nominalized adjective)', hi: 'जर्मन', ex: 'Jeder Deutsche sagt das.', exEn: 'Every German says that.', exHi: 'Har German aisa kehta hai.' },
    { de: 'sich auszahlen', pos: 'idiom', en: 'to pay off', hi: 'फल देना', ex: 'Ehrliche Vorbereitung zahlt sich aus.', exEn: 'Honest preparation pays off.', exHi: 'Imaandaar taiyaari fal deti hai.' },
    { de: 'überzeugt sein', pos: 'idiom', en: 'to be convinced (von + D.)', hi: 'आश्वस्त होना', ex: 'Ich bin völlig überzeugt davon.', exEn: 'I\'m completely convinced of that.', exHi: 'Mujhe iska poori tarah aashvasth hoon.' },
    { de: 'bestehen', pos: 'verb', en: 'to pass (an exam)', hi: 'पास करना', ex: 'Wir werden die Prüfung bestehen.', exEn: 'We will pass the exam.', exHi: 'Hum pareeksha paas karenge.' },
    { de: 'wiederholen', pos: 'verb', en: 'to review, repeat', hi: 'दोहराना', ex: 'Wir sollten alles noch einmal wiederholen.', exEn: 'We should review everything once more.', exHi: 'Humein sab kuchh ek baar aur dohraana chahiye.' },
    { de: 'die Daumen drücken', pos: 'idiom', en: 'to keep one\'s fingers crossed', hi: 'ऊँगलियाँ क्रॉस करना', ex: 'Ich drücke dir die Daumen.', exEn: 'I\'m keeping my fingers crossed for you.', exHi: 'Main tumhaare liye ungliyaan cross karta hoon.' },
    { de: 'wartend', pos: 'adjective', en: 'waiting (Partizip I)', hi: 'इंतज़ार करते हुए', ex: 'Die wartenden Interessenten stehen draußen.', exEn: 'The waiting interested parties stand outside.', exHi: 'Intezaar karte hue ichchhuk log bahar khade hain.' },
    { de: 'Vermieter', art: 'der', gender: 'm', plural: 'Vermieter', pos: 'noun', en: 'landlord', hi: 'मकान मालिक', ex: 'Der Vermieter muss den Vertrag unterschreiben.', exEn: 'The landlord must sign the contract.', exHi: 'Makaan maalik ko anubandh par hastakshar karna hai.' },
    { de: 'Gegend', art: 'die', gender: 'f', plural: 'Gegenden', pos: 'noun', en: 'area, region', hi: 'क्षेत्र', ex: 'Das ist das Beste in der Gegend.', exEn: 'That\'s the best thing in the area.', exHi: 'Yeh ilaake mein sabse achha hai.' },
    { de: 'Ruf', art: 'der', gender: 'm', plural: 'Rufe', pos: 'noun', en: 'reputation', hi: 'प्रतिष्ठा', ex: 'Wegen des guten Rufes ist der Tisch reserviert worden.', exEn: 'Because of the good reputation, the table has been reserved.', exHi: 'Achhi pratishtha ki wajah se, table reserve kiya ja chuka hai.' },
    { de: 'Stelle', art: 'die', gender: 'f', plural: 'Stellen', pos: 'noun', en: 'position (job)', hi: 'पद', ex: 'Ich hoffe, die Stelle zu bekommen.', exEn: 'I hope to get the position.', exHi: 'Mujhe ummeed hai ki main pad pa loongi.' },
    { de: 'Termin', art: 'der', gender: 'm', plural: 'Termine', pos: 'noun', en: 'appointment', hi: 'नियुक्ति', ex: 'Ich habe einen Termin im Krankenhaus.', exEn: 'I have an appointment at the hospital.', exHi: 'Mera aspataal mein nayukti hai.' },
    { de: 'Straßenbahn', art: 'die', gender: 'f', plural: 'Straßenbahnen', pos: 'noun', en: 'tram', hi: 'ट्राम', ex: 'Die Straßenbahn bringt uns zum Krankenhaus.', exEn: 'The tram takes us to the hospital.', exHi: 'Tram humein aspataal le jaati hai.' },
    { de: 'Vertrag', art: 'der', gender: 'm', plural: 'Verträge', pos: 'noun', en: 'contract', hi: 'अनुबंध', ex: 'Der Vertrag muss unterschrieben werden.', exEn: 'The contract must be signed.', exHi: 'Anubandh par hastakshar kiya jaana chahiye.' },
    { de: 'Interessent', art: 'der', gender: 'm', plural: 'Interessenten', pos: 'noun', en: 'interested party', hi: 'इच्छुक व्यक्ति', ex: 'Die wartenden Interessenten stehen draußen.', exEn: 'The waiting interested parties stand outside.', exHi: 'Intezaar karte hue ichchhuk log bahar khade hain.' },
    { de: 'entscheiden', pos: 'verb', en: 'to decide', hi: 'फ़ैसला लेना', ex: 'Je schneller wir entscheiden, desto besser.', exEn: 'The faster we decide, the better.', exHi: 'Jitni jaldi hum faisla lete hain, utna behtar.' },
    { de: 'Vorbereitung', art: 'die', gender: 'f', plural: 'Vorbereitungen', pos: 'noun', en: 'preparation', hi: 'तैयारी', ex: 'Ehrliche Vorbereitung zahlt sich aus.', exEn: 'Honest preparation pays off.', exHi: 'Imaandaar taiyaari fal deti hai.' },
    { de: 'ehrlich', pos: 'adjective', en: 'honest', hi: 'ईमानदार', ex: 'Ehrliche Vorbereitung zahlt sich aus.', exEn: 'Honest preparation pays off.', exHi: 'Imaandaar taiyaari fal deti hai.' },
    { de: 'völlig', pos: 'adverb', en: 'completely', hi: 'पूरी तरह', ex: 'Ich bin völlig überzeugt davon.', exEn: 'I\'m completely convinced of that.', exHi: 'Mujhe iska poori tarah aashvasth hoon.' },
    { de: 'Einwohnermeldeamt', art: 'das', gender: 'n', plural: 'Einwohnermeldeämter', pos: 'noun', en: 'registration office', hi: 'निवासी पंजीकरण कार्यालय', ex: 'Ich bin zum Einwohnermeldeamt gegangen.', exEn: 'I went to the registration office.', exHi: 'Main registration office gaya.' },
    { de: 'weit', pos: 'adjective', en: 'far', hi: 'दूर', ex: 'Es ist nicht weit.', exEn: 'It\'s not far.', exHi: 'Yeh door nahi hai.' },
    { de: 'liegen', pos: 'verb', en: 'to be located', hi: 'स्थित होना', ex: 'Wo liegt das Krankenhaus?', exEn: 'Where is the hospital located?', exHi: 'Aspataal kahaan hai?' },
    { de: 'nervös', pos: 'adjective', en: 'nervous', hi: 'घबराया हुआ', ex: 'Damit du nicht nervös wirst, drücke ich dir die Daumen.', exEn: 'So that you don\'t get nervous, I\'m keeping my fingers crossed.', exHi: 'Taaki tum ghabraayi na jao, main ungliyaan cross karta hoon.' },
    { de: 'beide', pos: 'pronoun', en: 'both', hi: 'दोनों', ex: 'Wir werden beide die Prüfung bestehen.', exEn: 'We will both pass the exam.', exHi: 'Hum dono pareeksha paas karenge.' }
  ],

  // ---------- Grammar Review (mixed, ALL of B1 Chapters 1–34) ----------
  grammar: [
    {
      title: 'Sätze verbinden — Wiederholung',
      body: [ 'Recycled from Chapters 1-5, 17: zu + Infinitiv, weil/da/obwohl, deshalb/so…dass, wegen/trotz/während + Genitiv, damit/um…zu.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['zu + Infinitiv', '<span class="de">Ich hoffe, die Stelle zu bekommen.</span>'],
          ['weil/da/obwohl', '<span class="de">Obwohl die Wohnung klein ist, ist die Lage sehr gut.</span>'],
          ['damit', '<span class="de">Damit du nicht nervös wirst, drücke ich dir die Daumen.</span>']
        ]
      },
      hinglish: 'Chapters 1-5, 17 se recycled: zu + Infinitiv, weil/da/obwohl, deshalb/so…dass, wegen/trotz/während, damit/um…zu.'
    },
    {
      title: 'Vergangenheit & Zukunft — Wiederholung',
      body: [ 'Recycled from Chapters 7, 16, 20-21: Präteritum, Futur I, Plusquamperfekt, temporale Nebensätze.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Plusquamperfekt', '<span class="de">Nachdem ich die Wohnung besichtigt hatte, ging ich.</span>'],
          ['Futur I', '<span class="de">Wir werden essen gehen.</span>']
        ]
      },
      hinglish: 'Chapters 7, 16, 20-21 se recycled: Präteritum, Futur I, Plusquamperfekt, temporale Nebensätze.'
    },
    {
      title: 'Passiv — Wiederholung',
      body: [ 'Recycled from Chapters 10, 28-29: Passiv Präsens, Präteritum, Perfekt, and Passiv mit Modalverben.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Passiv Perfekt', '<span class="de">Der Tisch ist reserviert worden.</span>'],
          ['Passiv + Modalverb', '<span class="de">Der Vertrag muss unterschrieben werden.</span>']
        ]
      },
      hinglish: 'Chapters 10, 28-29 se recycled: Passiv Präsens, Präteritum, Perfekt, aur Passiv mit Modalverben.'
    },
    {
      title: 'Relativsätze — Wiederholung',
      body: [ 'Recycled from Chapters 11, 18, 32: Relativsätze im Dativ, mit Präpositionen, mit was und wo.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Dativ', '<span class="de">Der Vermieter, dem die Wohnung gehört…</span>'],
          ['wo', '<span class="de">Das Restaurant, wo wir reserviert haben…</span>']
        ]
      },
      hinglish: 'Chapters 11, 18, 32 se recycled: Relativsätze im Dativ, mit Präpositionen, mit was und wo.'
    },
    {
      title: 'Adjektive — Wiederholung',
      body: [ 'Recycled from Chapters 12, 14, 26, 31, 34: Adjektivdeklination (weak/mixed/strong), Komparativ/Superlativ vor Nomen, Adjektive als Nomen, Partizipien als Adjektive.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['Adjektiv als Nomen', '<span class="de">Jeder Deutsche sagt das.</span>'],
          ['Partizip I', '<span class="de">Die wartenden Interessenten…</span>']
        ]
      },
      hinglish: 'Chapters 12, 14, 26, 31, 34 se recycled: Adjektivdeklination, Komparativ/Superlativ, Adjektive als Nomen, Partizipien als Adjektive.'
    },
    {
      title: 'Nicht, Konnektoren & Pronomen — Wiederholung',
      body: [ 'Recycled from Chapters 15, 23-25, 30, 33: N-Deklination, Reflexivpronomen, zweiteilige Konnektoren, Stellung von nicht, Artikelwörter als Pronomen, je…desto/umso.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['zweiteilige Konnektoren', '<span class="de">Sowohl die Lage als auch der Preis sind gut.</span>'],
          ['nicht', '<span class="de">Nicht der Bus, sondern die Straßenbahn bringt uns hin.</span>'],
          ['je … desto', '<span class="de">Je schneller wir entscheiden, desto besser.</span>']
        ]
      },
      hinglish: 'Chapters 15, 23-25, 30, 33 se recycled: N-Deklination, Reflexivpronomen, zweiteilige Konnektoren, nicht, Artikelwörter als Pronomen, je…desto/umso.'
    },
    {
      title: 'Quick decision guide — the entire B1 course together',
      body: [ 'One question decides the tool every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['show one action happened before another?', '→ Plusquamperfekt'],
          ['focus on the action, not who does it?', '→ Passiv (Präsens/Präteritum/Perfekt, ± Modalverb)'],
          ['refer to a whole idea or a place?', '→ was / wo'],
          ['express a choice, both, neither, addition, or contrast?', '→ zweiteilige Konnektoren'],
          ['negate an adjective, adverb, phrase, or word?', '→ nicht (kein for nouns)'],
          ['show a proportional relationship?', '→ je … desto/umso'],
          ['describe a noun with an ongoing or completed action?', '→ Partizip I / II als Adjektiv']
        ]
      },
      hinglish: 'Har situation ke liye sahi tool: poore B1 course se — Plusquamperfekt, Passiv, was/wo, Konnektoren, nicht, je…desto, Partizipien.'
    }
  ],

  // ---------- Reading (Goethe-style Lesen module: 5 texts, official format) ----------
  reading: {
    title: 'Goethe-Zertifikat B1 · Lesen — Fünf Texte',
    titleEn: 'Goethe-Zertifikat B1 · Reading — five texts',
    tokens: [
      { w: 'Nachdem', role: 'r-connector', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem', why: 'nachdem + Plusquamperfekt (recycled — Ch.20/21).' },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'अन्ना', type: 'Name' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Wohnung', role: 'plain', en: 'apartment', hi: 'फ़्लैट', type: 'Noun · fem.' },
      { w: 'besichtigt', role: 'plain', en: 'viewed', hi: 'देखा', type: 'Verb · besichtigen (Partizip II)' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'wurde', role: 'plain', en: 'was (Passiv-Hilfsverb)', hi: 'हस्ताक्षरित की गई थी', type: 'Verb · werden (Passiv Präteritum)', why: 'Passiv Präteritum (recycled — Ch.28).' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Vertrag', role: 'plain', en: 'contract', hi: 'अनुबंध', type: 'Noun · masc.' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adverb' },
      { w: 'unterschrieben', role: 'plain', en: 'signed (Satzende)', hi: 'हस्ताक्षरित (Satzende)', type: 'Verb · unterschreiben (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'wartenden', role: 'plain', en: 'waiting (Partizip I)', hi: 'इंतज़ार करते हुए', type: 'Partizip I · Nom. Pl.', why: 'Partizip I (recycled — Ch.34).' },
      { w: 'Interessenten', role: 'plain', en: 'interested parties (Satzende)', hi: 'इच्छुक व्यक्ति (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'mussten', role: 'plain', en: 'had to', hi: 'चाहिए था', type: 'Verb · Modalverb (Präteritum)' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'gedulden', role: 'plain', en: 'be patient (Satzende)', hi: 'धैर्य रखना (Satzende)', type: 'Verb · sich gedulden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zwar', role: 'r-connector', en: 'admittedly', hi: 'हालांकि', type: 'Konnektor · zwar…aber (1/2)', why: 'zwar...aber (recycled — Ch.24).' },
      { w: 'war', role: 'plain', en: 'was', hi: 'था', type: 'Verb · sein (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Miete', role: 'plain', en: 'rent', hi: 'किराया', type: 'Noun · fem.' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'ज़्यादा (Satzende)', type: 'Adjective (Satzende)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-connector', en: 'but', hi: 'लेकिन', type: 'Konnektor · zwar…aber (2/2)' },
      { w: 'sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konnektor · sowohl…als auch (1/2)', why: 'sowohl...als auch (recycled — Ch.24).' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Lage', role: 'plain', en: 'location', hi: 'स्थान', type: 'Noun · fem.' },
      { w: 'als', role: 'r-connector', en: 'as', hi: '', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Ausstattung', role: 'plain', en: 'furnishing (Satzende)', hi: 'साज-सज्जा (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'überzeugten', role: 'plain', en: 'convinced (Satzende)', hi: 'क़ायल किया (Satzende)', type: 'Verb · überzeugen (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Fokusverneinung', why: 'Focus negation (recycled — Ch.25).' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Preis', role: 'plain', en: 'price (Satzende)', hi: 'क़ीमत (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'entschied', role: 'plain', en: 'decided (Satzende)', hi: 'निर्णय लिया (Satzende)', type: 'Verb · entscheiden (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but', hi: 'बल्कि', type: 'Konnektor' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'वह', type: 'Article' },
      { w: 'Gefühl', role: 'plain', en: 'feeling (Satzende)', hi: 'एहसास (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: ',', plain: true },
      { w: 'zu', role: 'plain', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'Hause', role: 'plain', en: 'home (Satzende)', hi: 'घर (Satzende)', type: 'Noun (idiom, Satzende)' },
      { w: 'anzukommen', role: 'plain', en: 'to arrive (Satzende)', hi: 'पहुँचना', type: 'Infinitiv (Satzende, trennbar)' },
      { w: '.', plain: true }
    ],
    translation: 'After Anna had viewed the apartment, the contract was quickly signed. The waiting interested parties had to be patient. Admittedly the rent was high, but both the location and the furnishing convinced them. It wasn\'t the price that decided it, but the feeling of arriving home.'
  },

  // ---------- Listening (Goethe-style Hören module: 4 sections, official format) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_035_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Silke, ich bin heute Morgen so nervös, ich habe kaum geschlafen.', en: 'Silke, I\'m so nervous this morning, I hardly slept.' },
      { id: 'B1_035_L002', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das kenne ich. Aber denk daran, wir haben alles wiederholt, was wichtig ist.', en: 'I know that feeling. But remember, we\'ve reviewed everything that\'s important.' },
      { id: 'B1_035_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt. Und egal, was passiert, wir haben es zusammen geschafft, so weit zu kommen.', en: 'True. And no matter what happens, we managed together to get this far.' },
      { id: 'B1_035_L004', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau. Jetzt trink erst mal einen Kaffee, dann gehen wir rein.', en: 'Exactly. Now first have a coffee, then we\'ll go in.' }
    ],
    transcript: 'Silke, ich bin heute Morgen so nervös, ich habe kaum geschlafen. Das kenne ich. Aber denk daran, wir haben alles wiederholt, was wichtig ist. Stimmt. Und egal, was passiert, wir haben es zusammen geschafft, so weit zu kommen. Genau. Jetzt trink erst mal einen Kaffee, dann gehen wir rein.',
    translation: 'Silke, I\'m so nervous this morning, I hardly slept. I know that feeling. But remember, we\'ve reviewed everything that\'s important. True. And no matter what happens, we managed together to get this far. Exactly. Now first have a coffee, then we\'ll go in.',
    tokens: [
      { w: 'Silke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'heute' },
      { w: 'Morgen' },
      { w: 'so' },
      { w: 'nervös' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'kaum' },
      { w: 'geschlafen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'kenne' },
      { w: 'ich' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'denk' },
      { w: 'daran' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'alles' },
      { w: 'wiederholt' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'wichtig' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'egal' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'passiert' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'es' },
      { w: 'zusammen' },
      { w: 'geschafft' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'weit' },
      { w: 'zu' },
      { w: 'kommen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: '.', plain: true },
      { w: 'Jetzt' },
      { w: 'trink' },
      { w: 'erst' },
      { w: 'mal' },
      { w: 'einen' },
      { w: 'Kaffee' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'gehen' },
      { w: 'wir' },
      { w: 'rein' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie hat Timo letzte Nacht geschlafen?', qEn: 'How did Timo sleep last night?', options: ['sehr gut', 'kaum', 'normal', 'er weiß es nicht'], optionsEn: ['very good', 'hardly', 'normal', 'he doesn\'t know'], answer: 1,
        explain: '"… ich habe kaum geschlafen."' },
      { q: 'Was schlägt Silke vor dem Hineingehen vor?', qEn: 'What does Silke suggest before going in?', options: ['noch einmal alles lesen', 'einen Kaffee trinken', 'nach Hause gehen', 'die Prüfung verschieben'], optionsEn: ['read everything again', 'have a coffee', 'go home', 'postpone the exam'], answer: 1,
        explain: '"Jetzt trink erst mal einen Kaffee."' }
    ]
  },

  speaking: [
    { task: "Deine Partnerin hat kaum geschlafen. Beruhige sie.", taskEn: "Your partner has hardly slept. Reassure her.", de: "Wir haben alles wiederholt, was wichtig ist.", en: "We've revised everything that matters." },
    { task: "Prüfung, Teil 1: Stell dich vor und sag, was du hoffst.", taskEn: "Exam, Part 1: introduce yourself and say what you hope.", de: "Ich hoffe, die Prüfung zu bestehen, damit ich hier arbeiten kann.", en: "I hope to pass the exam, so that I can work here." },
    { task: "Teil 2: Sprich über Vorbereitung.", taskEn: "Part 2: talk about preparation.", de: "Je öfter ich spreche, desto sicherer werde ich.", en: "The more often I speak, the more confident I become." },
    { task: "Ein Freund fragt, was dir am Kurs gefallen hat.", taskEn: "A friend asks what you liked about the course.", de: "Mir hat sowohl das Sprechen als auch das Lesen gefallen.", en: "I liked both the speaking and the reading." },
    { task: "Eine Partnerin fragt, was du nach der Prüfung machst.", taskEn: "A partner asks what you'll do after the exam.", de: "Nachdem ich die Prüfung geschrieben habe, mache ich frei.", en: "After I've sat the exam, I'll take time off." },
    { task: "Teil 3: Plant zusammen die Feier nach der Prüfung.", taskEn: "Part 3: plan the celebration after the exam together.", de: "Wir könnten einen Tisch reservieren. Ich brauche nur zu bestellen.", en: "We could reserve a table. I only need to order." },
    { task: "Rollenspiel: Ihr wünscht euch Glück vor der Prüfung.", taskEn: "Role-play: you wish each other luck before the exam.", de: "Ich drücke dir die Daumen. — Egal, was passiert, es hat sich ausgezahlt.", en: "Fingers crossed for you. — Whatever happens, it's paid off." }
  ],

  // ---------- Writing (Goethe official Schreiben module: 3 tasks) ----------
  writing: {
    prompt: 'Goethe-Zertifikat B1 Schreiben. Choose ONE task and write ~80 words, using at least six grammar points from across Chapters 1–34. (1) FORMAL EMAIL: inquire about an apartment listing and ask about the contract. (2) INFORMAL EMAIL: tell a friend about your exam preparation and how you feel. (3) OPINION/FORUM POST: is it better to prepare for an exam alone or with a study partner?',
    starters: ['Sehr geehrte/r …,', 'Liebe/r …,', 'Meiner Meinung nach …', 'Nachdem ich …, …', 'Je mehr …, desto …'],
    placeholder: 'Sehr geehrte Damen und Herren, ich habe Ihre Wohnungsanzeige gesehen und hätte …',
    minWords: 80
  },

  // ---------- Exercises (4 types, mixed across ALL of B1) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Nachdem ich die Wohnung besichtigt ___, ging ich zum Amt."',
      options: ['habe', 'hatte', 'werde'],
      answer: 1,
      explain: 'Plusquamperfekt: nachdem + hatte + Partizip II.'
    },
    gap: {
      sentence: ['Der Vertrag muss ', ' werden.'],
      gaps: [ { answer: 'unterschrieben', accepts: ['unterschrieben'] } ],
      explain: 'Passiv mit Modalverben: muss + Partizip II + werden.'
    },
    match: {
      q: 'Match each sentence beginning to its correct grammar point across all of B1.',
      pairs: [
        { noun: 'Nachdem ich die Wohnung besichtigt hatte, …', art: 'Plusquamperfekt' },
        { noun: 'Der Vertrag muss …', art: 'Passiv mit Modalverben' },
        { noun: 'Das Restaurant, wo wir …', art: 'Relativsatz mit wo' },
        { noun: 'Sowohl die Lage als auch …', art: 'Zweiteiliger Konnektor' },
        { noun: 'Je schneller wir …, desto …', art: 'je … desto' }
      ]
    },
    builder: {
      target: 'Build: "The waiting interested parties stand outside."',
      bank: ['Die', 'wartenden', 'Interessenten', 'stehen', 'draußen', '.'],
      answer: ['Die', 'wartenden', 'Interessenten', 'stehen', 'draußen', '.'],
      roles: { 'wartenden': 'r-adjective' }
    }
  },

  // ---------- Complete Goethe B1 Final Mock Exam (6 mixed questions across all modules) ----------
  quiz: [
    { q: 'Complete: "Nachdem ich gegessen ___, ging ich schlafen."', options: ['habe', 'hatte', 'werde'], answer: 1,
      explain: 'Plusquamperfekt: nachdem + hatte + Partizip II.' },
    { q: 'Complete: "Das Auto ___ repariert worden."', options: ['ist', 'hat', 'wird'], answer: 0,
      explain: 'Passiv Perfekt always uses sein (ist/sind), never haben.' },
    { q: 'Complete: "Das ist die Stadt, ___ ich geboren wurde."', options: ['das', 'was', 'wo'], answer: 2,
      explain: 'wo refers to a place.' },
    { q: 'Which connector expresses that BOTH things are true?', options: ['weder … noch', 'sowohl … als auch', 'zwar … aber'], answer: 1,
      explain: 'sowohl...als auch means both are true.' },
    { q: 'Complete: "Die Fragen waren ___ schwierig."', options: ['kein', 'nicht', 'keine'], answer: 1,
      explain: 'Adjectives are negated with nicht, never kein.' },
    { q: 'Which sentence contains an error?', options: ['Der Vertrag muss unterschrieben werden.', 'Der Vertrag muss unterschrieben geworden.', 'Die wartenden Interessenten stehen draußen.'], answer: 1,
      explain: 'Passiv mit Modalverben uses the infinitive werden, never geworden.' }
  ],

  // ---------- Summary / B1 Graduation Report + B2 Bridge ----------
  takeaways: [
    { c: 'r-verb', html: '<strong>Grammar mastered (Ch.1–34):</strong> zu + Infinitiv, weil/da/obwohl, Konjunktiv II, deshalb/so…dass, Genitiv (+wegen/trotz/während), Präteritum, Zeitangaben, Passiv (all tenses + Modalverben), Relativsätze (all types), N-Deklination, Adjektivdeklination (all three + nominalized + participle), Futur I, damit/um…zu, Plusquamperfekt, temporale Nebensätze, brauchen+zu, Reflexivpronomen, zweiteilige Konnektoren, Stellung von nicht, je…desto/umso, Artikelwörter als Pronomen.' },
    { c: 'r-connector', html: '<strong>Vocabulary mastered:</strong> thousands of words across everyday life, work, travel, health, politics, art, and the environment — the full B1 wordlist.' },
    { c: 'r-reflexiv-akk', html: '<strong>Speaking confidence:</strong> you can introduce yourself, present a topic, and plan something together at full Goethe B1 exam standard.' },
    { c: 'r-adjective', html: '<strong>Listening & reading readiness:</strong> you can follow the complete official Goethe B1 Hören and Lesen module formats.' },
    { c: 'r-negation', html: '<strong>Writing readiness:</strong> you can produce a formal email, an informal email, and an opinion post to Goethe B1 exam standard.' },
    { c: 'r-verb', html: '<strong>🎓 Congratulations — you have completed Klarweg B1!</strong> If you scored well across this final mock exam, you are ready to sit the real Goethe-Zertifikat B1 exam with confidence. CEFR B1 confirmed. Course completion: 100%.' }
  ],
  revisionTips: [
    'Before the real exam: review your weakest module (Lesen, Hören, Schreiben, or Sprechen) one final time.',
    'Practise the full mock exam under timed conditions once more, exactly as you would on exam day.',
    'Welcome to B2: expect Konjunktiv I (indirect speech), extended participle clauses, nominal style, and more nuanced connectors — build on everything you\'ve already mastered here.',
    'Keep speaking and writing German daily — B1 fluency only becomes B2 fluency through continued use, not just new grammar.'
  ]
};

window.CHAPTER = CHAPTER;
