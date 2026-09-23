/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 17 (Goethe Halbzeit-Test)
   Halfway checkpoint chapter — NO new grammar, NO new vocabulary.
   Reviews ONLY Chapters 12-16: Modalverben präzise verwenden,
   Vermutungen mit Modalverben, Konjunktiv II für Irreales &
   Hypothesen, Konjunktiv I & Indirekte Rede, Aufforderung/
   Empfehlung & Handlungssteuerung.
   Dialogue: Meret and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-17-goethe-halbzeit-test',
  phase: 'C1 · Modalität & Nuance',
  number: 17,
  title: 'Goethe Halbzeit-Test',
  titleEn: 'Halfway Checkpoint: Chapters 12–16',
  description: 'The Halbzeit-Test is not another chapter. It verifies whether the learner has internalized the second phase of the course and can use it automatically under exam conditions.',
  xp: 550,
  time: 120,
  difficulty: 'Checkpoint',
  nextChapter: { number: 18, title: 'Adjektivdeklination sicher anwenden', titleEn: 'Applying adjective declension with confidence' , href: 'chapter-c1-18-adjektivdeklination-sicher-anwenden.html' },

  prevChapter: { number: 16, title: 'Aufforderung, Empfehlung & Handlungssteuerung', titleEn: 'Directives, recommendations & guiding action', href: 'chapter-c1-16-aufforderung-empfehlung-und-handlungssteuerung.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not a new chapter — a <em>mirror</em> for Chapters 12–16.',
    intro: 'Preparing for an international research conference, Meret shares her summary and Timo suggests revising the last paragraph — naturally recycling modal verbs, both Konjunktivs, and diplomatic recommendations without it feeling like a grammar lesson.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See all five Chapter 12-16 skills woven together in one authentic professional conversation'
    ],
    scene: 'Vorbereitung auf eine internationale Forschungskonferenz',
    femaleSpeakers: ['Meret'],
    dialogue: [
      { speaker: 'Meret', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'लिखा है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zusammenfassung', role: 'r-akkusativ', en: 'summary', hi: 'सारांश', pron: 'tsu-ZA-men-fa-sung', type: 'Noun · fem.', why: 'die Zusammenfassung (this chapter).', ex: 'die Zusammenfassung schreiben' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I have written the summary.', hi: 'Maine saaraansh likh liya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'vielversprechend', role: 'r-akkusativ', en: 'promising', hi: 'आशाजनक', pron: 'FEEL-fer-shpre-khent', type: 'Adjective', why: 'vielversprechend = promising (this chapter).', ex: 'Die Zusammenfassung ist vielversprechend.', exEn: 'The summary is promising.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होगा', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Anmerkung', role: 'r-akkusativ', en: 'remark', hi: 'टिप्पणी', pron: 'AN-mer-kung', type: 'Noun · fem.', why: 'die Anmerkung (this chapter).', ex: 'eine Anmerkung haben' },
        { w: '.', plain: true }
      ], en: 'It is promising, but I would have a remark.', hi: 'Yeh aashaajanak hai, par mera ek tippani hai.' },
      { speaker: 'Meret', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Anmerkung', role: 'r-akkusativ', en: 'remark', hi: 'टिप्पणी', pron: 'AN-mer-kung', type: 'Noun · fem.' },
        { w: 'meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Which remark do you mean?', hi: 'Tumhaari kaunsi tippani hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'letzte', role: 'r-subject', en: 'last', hi: 'आख़िरी', pron: 'LETS-tuh', type: 'Adjective' },
        { w: 'Absatz', role: 'r-subject', en: 'paragraph', hi: 'अनुच्छेद', pron: 'AP-zats', type: 'Noun · masc.' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'neu', role: 'r-akkusativ', en: 'newly', hi: 'फिर से', pron: 'noy', type: 'Adverb' },
        { w: 'analysiert', role: 'r-verb', en: 'analyzed', hi: 'विश्लेषित', pron: 'a-na-lü-ZEERT', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'किया जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'The last paragraph should be newly analyzed.', hi: 'Aakhri anuchhed ko phir se vishleshit kiya jaana chahiye.' },
      { speaker: 'Meret', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा करती हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich)', why: 'überarbeiten (recycled C1).', ex: 'ich überarbeite' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, I will revise that right away.', hi: 'Achha, main ise abhi dobara karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective', why: 'zuversichtlich (recycled C1).', ex: 'zuversichtlich sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adjective' },
        { w: 'ankommt', role: 'r-verb', en: 'arrives', hi: 'मिलती है', pron: 'AN-komt', type: 'Verb · ankommen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I am confident that the report will be well received.', hi: 'Dhanyavaad! Mujhe vishwaas hai ki report achhi tarah mili jaayegi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A Goethe Halbzeit-Test is <b>not another chapter</b> — it measures whether Chapters 12–16 have become automatic. Zero new content: only <span class="de r-modalverb">Modalverben</span>, <span class="de r-konjunktiv2">Konjunktiv II</span>, <span class="de r-konjunktiv1">Konjunktiv I</span>, and <span class="de r-empfehlung">Empfehlungen</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'This is GOETHE HALBZEIT-TEST — a halfway checkpoint chapter reviewing ONLY Chapters 12-16, with ZERO new grammar or vocabulary. Covered material: Chapter 12 precise modal verb use (objective vs subjective modality); Chapter 13 epistemic assumptions with modal verbs (certainty scale muss/dürfte/könnte/mag/vielleicht, deduction from evidence); Chapter 14 Konjunktiv II for unreal/hypothetical situations (unreal present/past, wishes, regrets, academic hypotheses, diplomatic softening); Chapter 15 Konjunktiv I and indirect speech (reporting statements/questions/requests, journalistic and academic reporting); Chapter 16 directives, recommendations, and guiding action (soft recommendations, diplomatic requests, professional instructions, warnings). ' +
    'Do NOT expect, require, or introduce ANY grammar or vocabulary beyond these five chapters — flag nothing from C1 Chapter 17 onward or from C2. The most important thing to catch: whether the learner integrates MULTIPLE Chapter 12-16 skills naturally together (modal verbs + Konjunktiv II + Konjunktiv I + diplomatic recommendations in the same piece of writing), since that is what this checkpoint measures. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check modal verb precision (objective vs subjective), Konjunktiv II hypothetical/wish structures, Konjunktiv I reported speech, and diplomatic recommendation/request language — drawing only on Chapters 12-16 concepts.\n' +
    '- Flag confusions such as Indicative used for formal reported speech, or Imperativ used where diplomatic softening is expected.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Readiness check:</b> one sentence on whether the learner combined multiple Chapter 12-16 skills naturally, as a real C1 exam would require.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — Chapters 12-16 are automatic for you. Ready to move on to the next phase of C1.',
    mid: 'Good — but re-read whichever chapter you found hardest before continuing.',
    low: 'Worth repeating Chapters 12-16 before continuing — this checkpoint exists to catch that now, not on exam day.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Vortrag', role: 'plain' }, { w: 'müsste', role: 'r-modalverb' }, { w: 'fertig', role: 'plain' }, { w: 'sein', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: this checkpoint measures whether Chapters 12-16 are automatic, not new content.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meret and Timo prepare for a research conference, naturally weaving all five chapters\' skills together.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words recycled from Chapters 12-16 — full popups with two examples, case, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Review the Halfway Revision Map and Skill Progression covering Chapters 12-16 — zero new grammar.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific journal article and a newspaper report, identifying modal, Konjunktiv, and reporting structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify assumptions, hypotheses, reporting language, and recommendations in a lecture and discussion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give a Goethe C1-style presentation, discussion, and collaborative task using Chapters 12-16 naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Improve a B2 text into formal C1 German and write a 350-400 word academic argumentative essay.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Complete integrated grammar, vocabulary, and academic/professional editing exercises from Chapters 12-16 only.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 550 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your Goethe C1 readiness dashboard and recommended revision order.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: '100 grammar questions and 70 vocabulary questions covering Chapters 12-16, plus a full academic essay task.',
      pdfUrl: '/pdfs/homework.pdf', size: '17 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Halfway Revision Map, Skill Progression, and Goethe Readiness Scale for Chapters 12-16.',
      pdfUrl: '/pdfs/grammar.pdf', size: '15 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Der Vortrag müsste bis Freitag fertig sein.', text: 'Combine subjective modal certainty (Ch.12/13) with a deadline context' },
    { de: 'Wenn wir mehr Zeit hätten, würden wir die Daten neu analysieren.', text: 'Use unreal present Konjunktiv II (Ch.14) in a professional context' },
    { de: 'Die Professorin sagte, die Ergebnisse seien vielversprechend.', text: 'Report a statement neutrally with Konjunktiv I (Ch.15)' },
    { de: 'Es wäre sinnvoll, ihre Anmerkungen einzuarbeiten.', text: 'Make a soft, diplomatic recommendation (Ch.16)' },
    { de: 'Könntest du bitte die Zusammenfassung schreiben?', text: 'Make a polite, diplomatic request (Ch.16)' }
  ],

  vocab: [
    { de: 'die Zusammenfassung', art: 'die', gender: 'f', plural: 'Zusammenfassungen', pos: 'noun', level: 'C1', register: 'written', en: 'summary', hi: 'सारांश', ex: 'Könntest du bitte die Zusammenfassung schreiben?', exEn: 'Could you please write the summary?', exHi: 'Kya aap kripya saaraansh likh sakti hain?', ex2: 'Die Zusammenfassung fasst die wichtigsten Ergebnisse zusammen.', ex2En: 'The summary summarizes the key results.', ex2Hi: 'Saaraansh mukhya parinaamon ko sankshep mein prastut karta hai.' },
    { de: 'vielversprechend', pos: 'adjective', level: 'C1', register: 'written', en: 'promising', hi: 'आशाजनक', ex: 'Die Professorin sagte, die Ergebnisse seien vielversprechend.', exEn: 'The professor said the results are promising.', exHi: 'Professor ne kaha ki parinaam aasha janak hain.', ex2: 'Das Projekt entwickelt sich vielversprechend.', ex2En: 'The project is developing promisingly.', ex2Hi: 'Project aasha janak roop se aage badh raha hai.' },
    { de: 'die Anmerkung', art: 'die', gender: 'f', plural: 'Anmerkungen', pos: 'noun', level: 'C1', register: 'written', en: 'remark, note', hi: 'टिप्पणी', ex: 'Es wäre sinnvoll, ihre Anmerkungen einzuarbeiten.', exEn: 'It would be sensible to incorporate her remarks.', exHi: 'Unke tippaniyon ko shaamil karna samajhdaari poorn hoga.', ex2: 'Der Gutachter machte mehrere kritische Anmerkungen.', ex2En: 'The reviewer made several critical remarks.', ex2Hi: 'Samiksha karta ne kai aalochanaatmak tippaniyaan ki.' },
    { de: 'überarbeiten', pos: 'verb', level: 'C1', register: 'written', en: 'to revise', hi: 'संशोधित करना', ex: 'Wir sollten die Folien heute noch überarbeiten.', exEn: 'We should revise the slides today.', exHi: 'Hamein slides aaj hi sanshodhit karni chahiye.', ex2: 'Der Artikel wurde mehrfach überarbeitet.', ex2En: 'The article has been revised multiple times.', ex2Hi: 'Lekh ko kai baar sanshodhit kiya gaya hai.', conj: { praesens: 'überarbeitet', praeteritum: 'überarbeitete', perfekt: 'hat überarbeitet' } },
    { de: 'neu analysieren', pos: 'verb phrase', level: 'C1', register: 'written', en: 'to re-analyze', hi: 'फिर से विश्लेषण करना', ex: 'Wenn wir mehr Zeit hätten, würden wir die Daten neu analysieren.', exEn: 'If we had more time, we would re-analyze the data.', exHi: 'Agar hamare paas zyaada samay hota, toh hum data ko nayi tarah se analyse karte.', ex2: 'Die Forscher haben die Daten mehrmals neu analysiert.', ex2En: 'The researchers have re-analyzed the data several times.', ex2Hi: 'Shodhkartaon ne data ko kai baar nayi tarah se analyse kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Halbzeit-Revisionskarte (Halfway Revision Map)',
      body: [ 'Chapter 12 → Chapter 13 → Chapter 14 → Chapter 15 → Chapter 16 → Goethe Halbzeit-Test. This checkpoint tests all five chapters together, not in isolation.' ],
      hinglish: 'Yeh checkpoint Chapter 12 se 16 tak ka sab kuch ek saath test karta hai. Paanchon chapters ek hi cheez ke alag roop hain \u2014 apni certainty aur apna register control karna \u2014 isliye inhe saath mein dekhna hi sahi hai.'
    },
    {
      title: 'Integrierte Kompetenzentwicklung (Integrated Skill Progression)',
      body: [ 'Grammar → Vocabulary → Reading → Listening → Speaking → Writing → Professional Communication → Academic Communication. Every skill recycles Chapters 12-16 exclusively.' ],
      hinglish: 'Har skill wahi Chapter 12 se 16 wala material dobara laati hai \u2014 kuch naya nahi aayega.'
    },
    {
      title: 'Kapitel 12 — Modalverben präzise verwenden (Rückblick)',
      body: [ 'Ek hi modal ke do kaam hote hain. <b>Objective</b> use mein woh asli majboori ya ijaazat batata hai \u2014 <span class="de">Er muss arbeiten</span>. Aur <b>subjective</b> use mein woh bolne wale ka andaaza batata hai \u2014 <span class="de">Er muss krank sein</span>, matlab \u201clagta hai woh bimaar hoga\u201d. Pehchaan ka tarika: saath mein <i>sein</i> jaisa state wala verb ho to matlab aksar andaaza hota hai.' ],
      hinglish: 'Ek hi modal ke do kaam hote hain. <b>Objective</b> use mein woh asli majboori ya ijaazat batata hai \u2014 <span class="de">Er muss arbeiten</span>. Aur <b>subjective</b> use mein woh bolne wale ka andaaza batata hai \u2014 <span class="de">Er muss krank sein</span>, matlab \u201clagta hai woh bimaar hoga\u201d. Pehchaan ka tarika: saath mein <i>sein</i> jaisa state wala verb ho to matlab aksar andaaza hota hai.'
    },
    {
      title: 'Kapitel 13 — Vermutungen mit Modalverben ausdrücken (Rückblick)',
      body: [ 'Certainty scale: muss (~95%) → dürfte (~80%) → könnte (~60%) → mag (~40%) → vielleicht (low). Deduction from evidence, academic hedging, journalistic reporting.' ],
      hinglish: 'Certainty ki seedhi: <b>muss</b> (lagbhag pakka) \u2192 <b>d\u00fcrfte</b> (kaafi sambhavna) \u2192 <b>k\u00f6nnte</b> (ho sakta hai) \u2192 <b>mag</b> (shaayad) \u2192 <b>vielleicht</b> (sirf andaaza). Modal ko saboot se match karo. Aur past ki baat ho to modal present mein rakho aur end mein <b>Partizip II + haben/sein</b> lagao: <span class="de">Er muss krank gewesen sein.</span>'
    },
    {
      title: 'Kapitel 14 — Konjunktiv II für Irreales & Hypothesen (Rückblick)',
      body: [ 'Abhi ki unreal baat <b>w\u00e4re/h\u00e4tte</b> se, past ki unreal baat <b>h\u00e4tte/w\u00e4re + Partizip II</b> se. Academic hypothesis ke liye <span class="de">Es w\u00e4re denkbar, dass \u2026</span>, aur baat narm karne ke liye <span class="de">Ich w\u00fcrde vorschlagen, \u2026</span>. Yaad rakho ki <b>haben</b>, <b>sein</b> aur modals kabhi <i>w\u00fcrde</i> ke saath nahi aate \u2014 unki apni form hi lagti hai.' ],
      hinglish: 'Abhi ki unreal baat <b>w\u00e4re/h\u00e4tte</b> se, past ki unreal baat <b>h\u00e4tte/w\u00e4re + Partizip II</b> se. Academic hypothesis ke liye <span class="de">Es w\u00e4re denkbar, dass \u2026</span>, aur baat narm karne ke liye <span class="de">Ich w\u00fcrde vorschlagen, \u2026</span>. Yaad rakho ki <b>haben</b>, <b>sein</b> aur modals kabhi <i>w\u00fcrde</i> ke saath nahi aate \u2014 unki apni form hi lagti hai.'
    },
    {
      title: 'Kapitel 15 — Konjunktiv I & Indirekte Rede (Rückblick)',
      body: [ 'Reporting statements (er sagte, sie sei...), reporting questions (ob/W-word + Konjunktiv I), reporting requests (zu + Infinitiv after bitten/auffordern), Konjunktiv I vs II when forms overlap.' ],
      hinglish: 'Statement report karne ke liye Konjunktiv I (<span class="de">er sagte, sie sei \u2026</span>), sawaal ke liye <b>ob</b> ya W-word ke saath verb end mein, aur request ke liye <b>zu + Infinitiv</b> (<span class="de">bat ihn, zu kommen</span>). Aur jahan Konjunktiv I ki form Indicative jaisi ho jaaye \u2014 <i>ich</i>, <i>wir</i>, <i>sie</i> \u2014 wahan Konjunktiv II ya <b>w\u00fcrde</b> par switch karo.'
    },
    {
      title: 'Kapitel 16 — Aufforderung, Empfehlung & Handlungssteuerung (Rückblick)',
      body: [ 'Narm sujhav ke liye <span class="de">Ich w\u00fcrde empfehlen \u2026</span>, polite request ke liye <span class="de">K\u00f6nnten Sie bitte \u2026</span>, official instruction ke liye <span class="de">Bitte beachten Sie \u2026</span>, aur warning ke liye <span class="de">Es ist davon abzuraten, \u2026</span>. Dhyaan rakho ki inme se zyada-tar ke baad <b>zu + Infinitiv</b> aata hai, aur <b>raten</b>/<b>empfehlen</b> insaan ko <b>Dativ</b> mein lete hain.' ],
      hinglish: 'Narm sujhav ke liye <span class="de">Ich w\u00fcrde empfehlen \u2026</span>, polite request ke liye <span class="de">K\u00f6nnten Sie bitte \u2026</span>, official instruction ke liye <span class="de">Bitte beachten Sie \u2026</span>, aur warning ke liye <span class="de">Es ist davon abzuraten, \u2026</span>. Dhyaan rakho ki inme se zyada-tar ke baad <b>zu + Infinitiv</b> aata hai, aur <b>raten</b>/<b>empfehlen</b> insaan ko <b>Dativ</b> mein lete hain.'
    },
    {
      title: 'Goethe-Bereitschaftsskala (Readiness Scale)',
      body: [ 'Excellent → Very Good → Good → Needs Revision → Repeat Chapters. Use this scale honestly to plan your next study session.' ],
      hinglish: 'Apne score ko imaandaari se dekho \u2014 yeh scale batata hai ki aage badhna hai ya kisi chapter par wapas jaana hai.'
    },
    {
      title: 'Erinnerung (Memory Reminder)',
      body: [ 'The Halbzeit-Test is not another chapter. It verifies whether the learner has internalized everything from the second phase of the course and can use it automatically under exam conditions.' ],
      note: 'If you find yourself stopping to recall a specific rule from Chapters 12-16, that chapter needs another revision pass before moving forward.',
      hinglish: 'Yeh koi naya chapter nahi hai \u2014 sirf yeh dekhta hai ki course ka doosra phase automatic hua ya nahi. Agar kisi rule ko yaad karne ke liye rukna pad raha hai, to us chapter par ek baar aur jaao.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Fachartikel: Warum Erinnerungen sich verändern',
    titleEn: 'Reading A — Article: why memories change over time',
    tokens: [
      { w: 'Es', role: 'r-empfehlung', en: 'it (academic hedging expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'wäre', role: 'r-empfehlung', en: 'would be (academic hypothesis)', hi: 'सोचा जा सकता है', type: 'Verb · sein (Konjunktiv II)' },
      { w: 'denkbar', role: 'r-empfehlung', en: 'conceivable (Satzende, academic hedging)', hi: 'कि (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Erinnerung', role: 'plain', en: 'memory', hi: 'याद', type: 'Noun · fem.' },
      { w: 'beim', role: 'plain', en: 'when (contraction)', hi: 'याद करते समय', type: 'Contraction · bei dem' },
      { w: 'Abrufen', role: 'plain', en: 'recalling (Satzende)', hi: '(Satzende)', type: 'Noun · neut. (substantivierter Infinitiv)' },
      { w: 'leicht', role: 'plain', en: 'slightly', hi: 'थोड़ा-सा', type: 'Adverb' },
      { w: 'verändert', role: 'plain', en: 'altered (Satzende)', hi: 'बदल जाती है (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wird', role: 'plain', en: 'is (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Passiv, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Neurowissenschaftler', role: 'plain', en: 'neuroscientists', hi: 'तंत्रिका वैज्ञानिक', type: 'Noun · plural' },
      { w: 'sprechen', role: 'plain', en: 'speak', hi: 'बात करते हैं', type: 'Verb · sprechen' },
      { w: 'dabei', role: 'plain', en: 'in this context', hi: 'इस संदर्भ में', type: 'Adverb' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Art', role: 'plain', en: 'kind (Satzende)', hi: 'तरह की (Satzende)', type: 'Noun · fem.' },
      { w: 'Neukonstruktion', role: 'plain', en: 'reconstruction (Satzende)', hi: 'पुनर्निर्माण (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-hypothese', en: 'it (academic hypothesis expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'ließe', role: 'r-hypothese', en: 'let (part of "sich vermuten", elegant synthetic form)', hi: 'यह अनुमान लगाया जा सकता है', type: 'Verb · lassen (Konjunktiv II)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: '', type: 'Reflexivpronomen' },
      { w: 'vermuten', role: 'r-hypothese', en: 'assume (Satzende, fixed academic expression)', hi: 'कि (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'dieser', role: 'plain', en: 'this', hi: 'यही', type: 'Determiner' },
      { w: 'Mechanismus', role: 'plain', en: 'mechanism (Satzende)', hi: 'तंत्र (Satzende)', type: 'Noun · masc.' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'falsche', role: 'plain', en: 'false', hi: 'झूठी', type: 'Adjective' },
      { w: 'Erinnerungen', role: 'plain', en: 'memories (Satzende)', hi: 'यादों (Satzende)', type: 'Noun · plural' },
      { w: 'entstehen', role: 'plain', en: 'arise (Satzende)', hi: 'पैदा कर सकता है (Satzende)', type: 'Verb · Infinitiv' },
      { w: 'lässt', role: 'plain', en: 'lets (Satzende)', hi: '(Satzende)', type: 'Verb · lassen (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It would be conceivable that every memory is slightly altered when recalled. Neuroscientists speak in this context of a kind of reconstruction. It could be surmised that exactly this mechanism also lets false memories arise.',
    comprehension: [
      { q: 'Welche Funktion hat "es wäre denkbar"?', options: ['Akademische Hypothese', 'Sichere Tatsache', 'Befehl'], answer: 0 },
      { q: 'Was passiert laut Text mit Erinnerungen beim Abrufen?', options: ['Sie verändern sich leicht', 'Sie bleiben exakt gleich', 'Sie verschwinden'], answer: 0 },
      { q: 'Was könnte laut Text auch entstehen?', options: ['Falsche Erinnerungen', 'Neue Sprachen', 'Neue Berufe'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsbericht (Revision)',
    titleEn: 'Reading B — Newspaper report',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Sprecher', role: 'plain', en: 'spokesperson (Satzende)', hi: 'pravakta (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'erklärte', role: 'plain', en: 'explained (reporting verb, Ch.15)', hi: '(reporting verb, Ch.15)', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Projekt', role: 'plain', en: 'project (Satzende)', hi: 'project (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'werde', role: 'r-konjunktiv1', en: 'will (Konjunktiv I, journalistic neutrality, Ch.15)', hi: 'hoga (Konjunktiv I, journalistic neutrality, Ch.15)', type: 'Verb · werden (Konjunktiv I, Satzende)' },
      { w: 'pünktlich', role: 'plain', en: 'on time', hi: 'samay par', type: 'Adjective' },
      { w: 'abgeschlossen', role: 'plain', en: 'completed (Satzende)', hi: 'poora hoga (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-empfehlung', en: 'it (part of fixed recommendation expression, Ch.16)', hi: '(fixed recommendation expression ka hissa, Ch.16)', type: 'Pronomen · Nom.' },
      { w: 'wird', role: 'r-empfehlung', en: 'is (impersonal official recommendation, Ch.16)', hi: '(impersonal official recommendation, Ch.16)', type: 'Verb · werden (Präsens)' },
      { w: 'empfohlen', role: 'r-empfehlung', en: 'recommended (Satzende, Ch.16)', hi: 'sujhaav diya jaata hai (Satzende, Ch.16)', type: 'Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Fortschritt', role: 'plain', en: 'progress (Satzende)', hi: 'pragati (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'regelmäßig', role: 'plain', en: 'regularly', hi: 'niyamit roop se', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to (part of zu-Infinitiv)', hi: '(zu-Infinitiv ka hissa)', type: 'Partikel · Infinitiv' },
      { w: 'überprüfen', role: 'plain', en: 'check (Satzende)', hi: 'jaanchna (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The spokesperson explained that the project will be completed on time. It is recommended to check progress regularly.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_017_L001', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe meine Zusammenfassung fertig — magst du kurz drüberschauen?', en: 'Timo, I\'ve finished my summary — would you mind taking a quick look?' },
      { id: 'C1_017_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, gib mir eine Minute … der letzte Absatz wirkt etwas abrupt, den würde ich noch überarbeiten.', en: 'Sure, give me a minute … the last paragraph seems a bit abrupt, I\'d revise that one.' },
      { id: 'C1_017_L003', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Guter Hinweis, ich füge noch einen Übergangssatz ein.', en: 'Good point, I\'ll add a transition sentence.' },
      { id: 'C1_017_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, dann ist die Konferenzvorbereitung praktisch abgeschlossen.', en: 'Perfect, then the conference preparation is practically done.' }
    ],
    transcript: 'Timo, ich habe meine Zusammenfassung fertig — magst du kurz drüberschauen? Klar, gib mir eine Minute … der letzte Absatz wirkt etwas abrupt, den würde ich noch überarbeiten. Guter Hinweis, ich füge noch einen Übergangssatz ein. Perfekt, dann ist die Konferenzvorbereitung praktisch abgeschlossen.',
    translation: 'Timo, I\'ve finished my summary — would you mind taking a quick look? Sure, give me a minute … the last paragraph seems a bit abrupt, I\'d revise that one. Good point, I\'ll add a transition sentence. Perfect, then the conference preparation is practically done.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'meine' },
      { w: 'Zusammenfassung' },
      { w: 'fertig' },
      { w: '—', plain: true },
      { w: 'magst' },
      { w: 'du' },
      { w: 'kurz' },
      { w: 'drüberschauen' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'gib' },
      { w: 'mir' },
      { w: 'eine' },
      { w: 'Minute' },
      { w: '…', plain: true, spaceBefore: true },
      { w: 'der' },
      { w: 'letzte' },
      { w: 'Absatz' },
      { w: 'wirkt' },
      { w: 'etwas' },
      { w: 'abrupt' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'überarbeiten' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Hinweis' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'füge' },
      { w: 'noch' },
      { w: 'einen' },
      { w: 'Übergangssatz' },
      { w: 'ein' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'Konferenzvorbereitung' },
      { w: 'praktisch' },
      { w: 'abgeschlossen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was will Timo überarbeiten?', qEn: 'What does Timo suggest revising?', options: ['die Einleitung', 'den letzten Absatz', 'den Titel', 'die Vokabeln'], optionsEn: ['the introduction', 'the last paragraph', 'the title', 'the vocabulary'], answer: 1,
        explain: '"… der letzte Absatz wirkt etwas abrupt, den würde ich noch überarbeiten."' },
      { q: 'Was ergänzt Meret?', qEn: 'What does Meret add?', options: ['ein neues Kapitel', 'einen Übergangssatz', 'ein Bild', 'eine Tabelle'], optionsEn: ['a new chapter', 'a transition sentence', 'a picture', 'a table'], answer: 1,
        explain: '"Ich füge noch einen Übergangssatz ein."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo bittet dich, seine Zusammenfassung durchzusehen. Sag deine Anmerkung.", taskEn: "Timo asks you to look over his summary. Give your comment.", de: "Der letzte Absatz wirkt abrupt; den würde ich überarbeiten.", en: "The last paragraph feels abrupt; I'd revise that one." },
    { task: "Prüfung, Teil 1: Bewerte ein Ergebnis, das vielversprechend aussieht.", taskEn: "Exam, Part 1: assess a result that looks promising.", de: "Die Daten sind vielversprechend, müssten aber neu analysiert werden.", en: "The data is promising, but would have to be re-analysed." },
    { task: "Prüfung, Teil 2: Verhandelt einen Vorschlag zur Hochschulpolitik.", taskEn: "Exam, Part 2: negotiate a proposal on university policy.", de: "Ich würde empfehlen, die Anwesenheitspflicht zu lockern.", en: "I'd recommend relaxing the attendance requirement." },
    { task: "Prüfung, Teil 3: Löst gemeinsam ein Problem im Institut.", taskEn: "Exam, Part 3: solve a problem in the institute together.", de: "Wenn wir die Seminare zusammenlegten, hätten wir zwei Räume frei.", en: "If we merged the seminars, we'd have two rooms free." },
    { task: "Prüfung: Berichte, was die Fachschaft dazu erklärt hat.", taskEn: "Exam: report what the student council stated.", de: "Die Fachschaft erklärte, sie sei einverstanden, und bat uns zu informieren.", en: "The council stated it agreed, and asked us to inform people." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150-200 words): Improve a B2-level text into authentic C1 German by upgrading modal verbs, assumptions, Konjunktiv I/II, recommendations, and register — recycling ONLY Chapters 12-16.\n\nTASK 2 — Academic argumentative essay (350-400 words): Demonstrate modal verbs, epistemic modality, Konjunktiv II, Konjunktiv I, reporting verbs, diplomatic recommendations, academic hedging, and formal register.',
    starters: ['Der Vortrag müsste bis Freitag fertig sein, aber es wäre sinnvoll, die Folien noch einmal zu überarbeiten.', 'Die Professorin sagte, die Ergebnisse seien vielversprechend.'],
    placeholder: 'Es dürfte davon auszugehen sein, dass weitere Untersuchungen notwendig sind. Wenn wir mehr Zeit hätten, würden wir...',
    minWords: 200
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which chapter covers subjective modal certainty like "Er muss krank sein" (Chapter 12/13 review)?',
      options: ['Chapters 12-13', 'Chapter 15', 'Chapter 16'],
      answer: 0,
      explain: 'Chapters 12-13 cover precise modal verb use and epistemic assumptions/certainty.'
    },
    gap: {
      sentence: ['Wenn wir mehr Zeit ', ', würden wir die Daten neu analysieren.'],
      gaps: [ { answer: 'hätten', accepts: ['hätten'] } ],
      explain: '"Hätten" forms the unreal present conditional — reviewed from Chapter 14.'
    },
    match: {
      q: 'Match each expression to the chapter it comes from.',
      pairs: [
        { noun: 'müsste / dürfte / könnte', art: 'Kapitel 12-13' },
        { noun: 'wenn...hätten/wären, würden...', art: 'Kapitel 14' },
        { noun: 'sagte, ...sei / seien', art: 'Kapitel 15' },
        { noun: 'Ich würde empfehlen / Könnten Sie bitte', art: 'Kapitel 16' }
      ]
    },
    builder: {
      target: 'Build: "The professor said the results are promising." (Ch.15 review)',
      bank: ['Die', 'Professorin', 'sagte', ',', 'die', 'Ergebnisse', 'seien', 'vielversprechend', '.'],
      answer: ['Die', 'Professorin', 'sagte', ',', 'die', 'Ergebnisse', 'seien', 'vielversprechend', '.'],
      roles: { 'seien': 'r-konjunktiv1' }
    },
    errorCorrection: {
      title: 'Error correction (mixed review)',
      wrong: 'Mach die Zusammenfassung fertig, sonst gibt es Probleme.',
      right: 'Könntest du bitte die Zusammenfassung fertigstellen?',
      explain: 'Reviewing Chapter 16: a blunt Imperativ command is inappropriate in professional register — a diplomatic request is expected.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which chapter covers precise modal verb use (objective vs subjective)?', options: ['Chapter 12', 'Chapter 14', 'Chapter 16'], answer: 0,
      explain: 'Chapter 12 (Modalverben präzise verwenden) covers this distinction.' },
    { q: 'Which chapter covers the certainty scale (muss/dürfte/könnte/mag/vielleicht)?', options: ['Chapter 13', 'Chapter 15', 'Chapter 16'], answer: 0,
      explain: 'Chapter 13 (Vermutungen mit Modalverben ausdrücken) covers epistemic certainty.' },
    { q: 'Which chapter covers unreal present/past and academic hypotheses?', options: ['Chapter 14', 'Chapter 12', 'Chapter 15'], answer: 0,
      explain: 'Chapter 14 (Konjunktiv II für Irreales & Hypothesen) covers this.' },
    { q: 'Which chapter covers Konjunktiv I and indirect speech?', options: ['Chapter 15', 'Chapter 13', 'Chapter 16'], answer: 0,
      explain: 'Chapter 15 (Konjunktiv I & Indirekte Rede) covers reported speech.' },
    { q: 'What does this Goethe Halbzeit-Test measure?', options: ['Whether Chapters 12-16 have become automatic', 'New C1 grammar not yet taught', 'Only vocabulary memorization'], answer: 0,
      explain: 'A Goethe Halbzeit-Test verifies automatic, natural use of the second course phase under exam conditions.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: 'This checkpoint introduces zero new grammar — it recycles Chapters 12-16: precise modal verbs, epistemic certainty, Konjunktiv II, Konjunktiv I, and diplomatic recommendations.' },
    { c: 'r-konjunktiv2', html: 'Real C1 fluency means combining several of these skills naturally in one conversation, not using them one at a time.' },
    { c: 'r-empfehlung', html: 'Use your Goethe Readiness Scale result honestly: Excellent/Very Good → move on; Good/Needs Revision → repeat the weakest chapter before continuing.' }
  ],
  revisionTips: [
    'Identify your single weakest chapter from this Halbzeit-Test and re-read only that chapter\'s Grammar section before continuing.',
    'Write one paragraph that deliberately combines a subjective modal verb (Ch.12/13), a Konjunktiv II hypothesis (Ch.14), and a Konjunktiv I reported statement (Ch.15).',
    'Create flashcards mixing diplomatic recommendation phrases (Ch.16) with the certainty scale (Ch.13) to test register and precision together.'
  ]
};

window.CHAPTER = CHAPTER;
