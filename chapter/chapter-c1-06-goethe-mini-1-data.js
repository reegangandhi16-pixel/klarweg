/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 6 (Goethe Mini 1)
   Checkpoint chapter — NO new grammar, NO new vocabulary.
   Reviews ONLY Chapters 1-5:
   Tempusgebrauch, Raum & Zeit, Nebensätze, Hauptsatzverbindungen,
   Zweiteilige Satzverbindungen.
   Dialogue: Nike and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-06-goethe-mini-1',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 6,
  title: 'Goethe Mini 1',
  titleEn: 'Checkpoint: Chapters 1–5',
  description: 'A Mini Test is not another lesson — it measures whether the first five chapters have become automatic. Answer naturally, without consciously thinking about grammar rules.',
  xp: 450,
  time: 110,
  difficulty: 'Checkpoint',
  nextChapter: { number: 7, title: 'Präpositionen mit Genitiv', titleEn: 'Genitive prepositions in formal German' , href: 'chapter-c1-07-praepositionen-mit-genitiv.html' },

  prevChapter: { number: 5, title: 'Zweiteilige Satzverbindungen', titleEn: 'Correlative & paired sentence connectors', href: 'chapter-c1-05-zweiteilige-satzverbindungen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not a new lesson — a <em>mirror</em> for the first five chapters.',
    intro: 'The night before their Goethe C1 exam, Nike and Timo revise together at the university library — her argumentation convincing but unclear in structure, his advice to practise out loud — naturally recycling tense choice, precision, subordinate clauses, and paired connectors.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See all five Chapter 1-5 skills woven together naturally, without explicit grammar talk'
    ],
    scene: 'Prüfungsvorbereitung in der Universitätsbibliothek',
    femaleSpeakers: ['Nike'],
    dialogue: [
      { speaker: 'Nike', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Prüfungsvorbereitung', role: 'r-subject', en: 'exam preparation', hi: 'परीक्षा तैयारी', pron: 'PRÜ-fungs-for-be-ry-tung', type: 'Noun · fem.', why: 'die Prüfungsvorbereitung (this chapter).', ex: 'Meine Prüfungsvorbereitung läuft gut.', exEn: 'My exam preparation is going well.' },
        { w: 'läuft', role: 'r-verb', en: 'is going', hi: 'चल रही है', pron: 'LOYFT', type: 'Verb · laufen' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dennoch', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'DE-nokh', type: 'Conjunction · dennoch' },
        { w: 'fehlt', role: 'r-verb', en: 'lacks', hi: 'कमी है', pron: 'faylt', type: 'Verb · fehlen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'Übung', role: 'r-akkusativ', en: 'practice', hi: 'अभ्यास', pron: 'Ü-bung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'My exam preparation is going well, nevertheless I still lack practice.', hi: 'Meri pariksha taiyaari achhi chal rahi hai, phir bhi mujhe abhi aur abhyaas ki kami hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Argumentation', role: 'r-subject', en: 'argumentation', hi: 'तर्क-वितर्क', pron: 'ar-gu-men-ta-TSYON', type: 'Noun · fem.', why: 'die Argumentation (this chapter).', ex: 'Deine Argumentation ist überzeugend.', exEn: 'Your argumentation is convincing.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'überzeugend', role: 'r-akkusativ', en: 'convincing', hi: 'मनाने वाली', pron: 'ü-ber-TSOY-gent', type: 'Adjective', why: 'überzeugend = convincing (this chapter).', ex: 'Deine Argumentation ist überzeugend.', exEn: 'Your argumentation is convincing.' },
        { w: ',', plain: true },
        { w: 'jedoch', role: 'r-conjunction', en: 'however', hi: 'हालांकि', pron: 'yay-DOKH', type: 'Adverb' },
        { w: 'fehlt', role: 'r-verb', en: 'lacks', hi: 'कमी है', pron: 'faylt', type: 'Verb · fehlen' },
        { w: 'der', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Struktur', role: 'r-dativ', en: 'structure (dat.)', hi: 'संरचना में', pron: 'shtruk-TOOR', type: 'Noun · fem. dat.', why: 'die Struktur (this chapter).', ex: 'Der Struktur fehlt Klarheit.', exEn: 'The structure lacks clarity.' },
        { w: 'Klarheit', role: 'r-akkusativ', en: 'clarity', hi: 'स्पष्टता', pron: 'KLAHR-hite', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Your argumentation is convincing, however the structure lacks clarity.', hi: 'Tumhaari tark-vitark manaane waali hai, halaanki sanrachna mein spashtata ki kami hai.' },
      { speaker: 'Nike', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'पाऊं', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'guten', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Adjective' },
        { w: 'Rhythmus', role: 'r-akkusativ', en: 'rhythm', hi: 'लय', pron: 'RÜT-mus', type: 'Noun · masc.', why: 'der Rhythmus (this chapter).', ex: 'einen guten Rhythmus finden' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (fem.)', hi: 'अपनी', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'Rede', role: 'r-akkusativ', en: 'speech', hi: 'भाषण', pron: 'RAY-duh', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'How do I find a good rhythm for my speech?', hi: 'Main apne bhaashan ke liye achhi lay kaise paaun?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Übe', role: 'r-verb', en: 'practise', hi: 'अभ्यास करो', pron: 'Ü-buh', type: 'Verb · imperative' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'laut', role: 'r-akkusativ', en: 'out loud', hi: 'ज़ोर से', pron: 'lowt', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'sodass', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'zo-DAS', type: 'Conjunction · sodass' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Gefühl', role: 'r-akkusativ', en: 'feeling', hi: 'एहसास', pron: 'ge-FÜL', type: 'Noun · neut.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Satzbau', role: 'r-akkusativ', en: 'sentence structure', hi: 'वाक्य संरचना', pron: 'ZATS-bow', type: 'Noun · masc.', why: 'der Satzbau (recycled B2/C1).', ex: 'ein Gefühl für den Satzbau' },
        { w: 'bekommst', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KOMST', type: 'Verb · bekommen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Simply practise out loud, so that you get a feeling for the sentence structure.', hi: 'Bas zor se abhyaas karo, taaki tumhe vaakya sanrachna ka ehsaas mile.' },
      { speaker: 'Nike', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा तैयार करती हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich)' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (fem.)', hi: 'अपनी', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'Struktur', role: 'r-akkusativ', en: 'structure', hi: 'संरचना', pron: 'shtruk-TOOR', type: 'Noun · fem.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! I will revise my structure right away.', hi: 'Dhanyavaad! Main abhi apni sanrachna dobara taiyaar karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Prüfung', role: 'r-dativ', en: 'exam (dat.)', hi: 'परीक्षा में', pron: 'PRÜ-fung', type: 'Noun · fem. dat.' },
        { w: '!', plain: true }
      ], en: 'Much success with the exam!', hi: 'Pariksha mein bahut safalta mile!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A Mini Test is <b>not another lesson</b> — it measures whether Chapters 1–5 have become automatic. Answer naturally, without consciously thinking about grammar rules. Zero new content: only <span class="de r-hierarchy">Tempusgebrauch</span>, <span class="de r-space">Raum &amp; Zeit</span>, <span class="de r-hierarchy">Nebensätze</span>, <span class="de r-addition">Hauptsatzverbindungen</span>, and <span class="de r-paired">Zweiteilige Satzverbindungen</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'This is GOETHE MINI 1 — a checkpoint chapter reviewing ONLY Chapters 1-5, with ZERO new grammar or vocabulary. Covered material: Chapter 1 stylistic tense choice (historic present, Präteritum vs Perfekt, Plusquamperfekt for background, Futur I/II); Chapter 2 precise time/space expressions (unmittelbar nach, innerhalb von, in unmittelbarer Nähe, im Rahmen); Chapter 3 complex subordinate clause architecture (clause hierarchy, nesting, parallel clauses, clause reduction); Chapter 4 elegant coordination (zudem, dennoch, folglich, gleichzeitig, connector placement and variation); Chapter 5 correlative paired connectors (sowohl...als auch, entweder...oder, weder...noch, zwar...aber, je...desto). ' +
    'Do NOT expect, require, or introduce ANY grammar or vocabulary beyond these five chapters — flag nothing from C1 Chapter 6 onward or from C2. The most important thing to catch: whether the learner integrates MULTIPLE Chapter 1-5 skills naturally together in one piece of writing (not just one skill in isolation), since that is what this checkpoint measures. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check stylistic tense appropriateness, precise time/space expressions, subordinate clause word order, connector placement, and complete correlative pairs — drawing only on Chapters 1-5 concepts.\n' +
    '- Flag an incomplete correlative pair (e.g. "sowohl...und") same as in Chapter 5.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Readiness check:</b> one sentence on whether the learner combined multiple Chapter 1-5 skills naturally, as a real C1 exam would require.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — Chapters 1-5 are automatic for you. Ready to move on to genitive prepositions.',
    mid: 'Good — but re-read whichever chapter you found hardest before continuing.',
    low: 'Worth repeating Chapters 1-5 before continuing — this checkpoint exists to catch that now, not on exam day.'
  },

  parserSentence: [
    { w: 'Zwar', role: 'r-paired' }, { w: 'war', role: 'plain' }, { w: 'er', role: 'plain' }, { w: 'kurz', role: 'plain' }, { w: ',', role: 'plain' }, { w: 'aber', role: 'r-paired' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: this checkpoint measures whether Chapters 1-5 are automatic, not new content.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nike and Timo revise together, naturally weaving all five chapters\' skills into one conversation.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review revision vocabulary from Chapters 1-5 — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Review the Revision Map and Skills Map covering Chapters 1-5 — zero new grammar.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic article and a newspaper commentary, identifying tense, connectors, and argument structure.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify tense choice, clause hierarchy, and paired connectors in a university lecture and a radio interview.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give a Goethe C1-style presentation, discussion, and collaborative task using Chapters 1-5 naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal argumentative article and improve a B2 proposal into authentic C1 writing.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Complete integrated grammar, vocabulary, and academic editing exercises from Chapters 1-5 only.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 450 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your Goethe C1 readiness report and recommended revision order.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 15 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: '80 grammar questions and 50 vocabulary questions covering Chapters 1-5, plus a full argumentative essay task.',
      pdfUrl: '/pdfs/homework.pdf', size: '14 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Revision Map, Skills Map, and Readiness Scale for Chapters 1-5.',
      pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wenn wir heute noch fertig werden wollen, sollten wir jetzt beginnen.', text: 'Combine subordinate clause (Ch.3) with a natural spoken register' },
    { de: 'Innerhalb von zwei Stunden sollten wir die Grammatik wiederholen.', text: 'Use precise duration expressions (Ch.2) in planning' },
    { de: 'Sowohl die Argumentation als auch der Stil zählen.', text: 'Complete a correlative pair (Ch.5) under exam pressure' },
    { de: 'Zwar war er kurz, aber die Struktur war klar.', text: 'Concede and contrast (Ch.5) while discussing a draft' },
    { de: 'Je natürlicher der Text klingt, desto überzeugter wird das Fachpublikum.', text: 'Build a proportional comparison (Ch.5) with correct word order' }
  ],

  vocab: [
    { de: 'die Prüfungsvorbereitung', ipa: '[ˈpʁyːfʊŋsfɔɐ̯beˌʁaɪtʊŋ]', en: 'exam preparation', hi: 'pariksha ki taiyaari', pos: 'Noun · fem.', register: 'C1 · academic', note: 'Revision vocabulary recycled from Chapters 1-5 contexts.',
      ex1: { de: 'Die Prüfungsvorbereitung erfordert Disziplin und Struktur.', en: 'Exam preparation requires discipline and structure.', hi: 'Pariksha ki taiyaari ke liye anushaasan aur sanrachnaa chahiye.' },
      ex2: { de: 'Während der Prüfungsvorbereitung übten sie täglich das Schreiben.', en: 'During exam preparation, they practised writing daily.', hi: 'Pariksha ki taiyaari ke daurान, unhone roz likhna practise kiya.' },
      collocations: ['Prüfungsvorbereitung treffen', 'während der Prüfungsvorbereitung'] },
    { de: 'die Argumentation', ipa: '[ˌaʁɡumɛntaˈtsi̯oːn]', en: 'argumentation', hi: 'tark', pos: 'Noun · fem.', register: 'C1 · academic', note: 'Key term for evaluating essay and discussion quality across Chapters 1-5.',
      ex1: { de: 'Die Argumentation des Aufsatzes war schlüssig.', en: 'The argumentation of the essay was conclusive.', hi: 'Nibandh ka tark spasht tha.' },
      ex2: { de: 'Eine überzeugende Argumentation braucht klare Struktur.', en: 'A convincing argumentation needs clear structure.', hi: 'Ek vishvaasneey tark ke liye spasht sanrachnaa chahiye.' },
      collocations: ['schlüssige Argumentation', 'überzeugende Argumentation'] },
    { de: 'der Rhythmus', ipa: '[ˈʁʏtmʊs]', en: 'rhythm', hi: 'lai', pos: 'Noun · masc.', register: 'C1 · stylistic', note: 'Refers to sentence rhythm from Chapter 4 — alternating short and long sentences.',
      ex1: { de: 'Ein guter Rhythmus entsteht durch abwechselnde Satzlängen.', en: 'A good rhythm emerges through alternating sentence lengths.', hi: 'Ek achha lai badalte hue vaakya lambaai se banta hai.' },
      ex2: { de: 'Der Rhythmus des Textes wirkt monoton.', en: 'The rhythm of the text seems monotonous.', hi: 'Text ka lai ekaakhi lagta hai.' },
      collocations: ['einen Rhythmus finden', 'stilistischer Rhythmus'] },
    { de: 'die Struktur', ipa: '[ʃtʁʊkˈtuːɐ̯]', en: 'structure', hi: 'sanrachnaa', pos: 'Noun · fem.', register: 'C1 · academic', note: 'Central concept across Chapters 3-5 for clause hierarchy and argument organization.',
      ex1: { de: 'Die Struktur des Entwurfs war klar erkennbar.', en: 'The structure of the draft was clearly recognizable.', hi: 'Draft ki sanrachnaa spasht roop se pehchaani jaa sakti thi.' },
      ex2: { de: 'Eine logische Struktur erleichtert das Verständnis.', en: 'A logical structure makes understanding easier.', hi: 'Ek taarkik sanrachnaa samajhna aasaan banaati hai.' },
      collocations: ['klare Struktur', 'logische Struktur'] },
    { de: 'überzeugend', ipa: '[yːbɐˈtsɔʏɡn̩t]', en: 'convincing', hi: 'sammohak / vishvaasneey', pos: 'Adjective', register: 'C1 · academic/formal', note: 'Common evaluative adjective in academic writing and speaking assessment.',
      ex1: { de: 'Die Ergebnisse waren überzeugend.', en: 'The results were convincing.', hi: 'Parinaam sammohak thay.' },
      ex2: { de: 'Ein überzeugendes Argument braucht Belege.', en: 'A convincing argument needs evidence.', hi: 'Ek sammohak tark ke liye praman chahiye.' },
      collocations: ['überzeugendes Argument', 'überzeugend wirken'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Revisionskarte (Revision Map)',
      body: [ 'Chapter 1 → Chapter 2 → Chapter 3 → Chapter 4 → Chapter 5 → Goethe Mini 1. This checkpoint tests all five chapters together, not in isolation.' ],
      hinglish: 'Yeh checkpoint Chapter 1 se 5 tak ka sab kuch ek saath test karta hai, alag-alag nahi. Asli exam mein bhi yahi hota hai \u2014 ek hi text mein tense choice, precise expressions, clause structure aur connectors sab mile-jule aate hain.'
    },
    {
      title: 'Kompetenzkarte (Skills Map)',
      body: [ 'Grammar → Reading → Listening → Speaking → Writing → Integrated Skills. Every skill must recycle Chapters 1-5 exclusively.' ],
      hinglish: 'Har skill \u2014 reading, listening, speaking, writing \u2014 wahi Chapters 1 se 5 wala material dobara laati hai. Yahan kuch naya nahi aayega, sirf woh dekha jaayega jo padh chuke ho.'
    },
    {
      title: 'Kapitel 1 — Tempusgebrauch (Rückblick)',
      body: [ 'Stylistic tense selection: historic present, Präteritum vs Perfekt by register, Plusquamperfekt for background layering, Futur I for predictions, Futur II for speculation about the past.' ],
      hinglish: 'Tense ka style wala choice: historic present, register ke hisaab se Pr\u00e4teritum ya Perfekt, background ke liye Plusquamperfekt, prediction ke liye Futur I, aur past ke andaaze ke liye Futur II.'
    },
    {
      title: 'Kapitel 2 — Raum & Zeit (Rückblick)',
      body: [ 'Precise temporal expressions (unmittelbar nach, im Laufe von, seither) and precise spatial expressions (in unmittelbarer Nähe, gegenüber, im Rahmen).' ],
      hinglish: 'Precise temporal expressions (unmittelbar nach, im Laufe von, seither) aur precise spatial expressions (in unmittelbarer Nähe, gegenüber, im Rahmen).'
    },
    {
      title: 'Kapitel 3 — Nebensätze (Rückblick)',
      body: [ 'Clause hierarchy, nested clauses, parallel structures, and clause reduction \u2014 shortening a full clause to an infinitive construction (ohne dass \u2192 ohne \u2026 zu). Confusable conjunction pairs: weil/da, falls/sofern, sodass/damit.' ],
      hinglish: 'Clause hierarchy, nested clauses, parallel structures, aur clause reduction \u2014 matlab poore clause ko chhota karke infinitive banana (<span class="de">ohne dass \u2026</span> se <span class="de">ohne \u2026 zu</span>). Saath mein woh confusable jodiyan bhi dekh lo: weil/da, falls/sofern, sodass/damit.'
    },
    {
      title: 'Kapitel 4 — Hauptsatzverbindungen (Rückblick)',
      body: [ 'Addition (zudem, dar\u00fcber hinaus), contrast (dennoch, allerdings), result (folglich, somit), parallel (gleichzeitig). Above all: these are ADVERBS \u2014 they take position 1 and push the verb ahead of the subject, unlike und/aber/denn, which take no position at all.' ],
      hinglish: 'Addition (zudem, dar\u00fcber hinaus), contrast (dennoch, allerdings), result (folglich, somit), parallel (gleichzeitig). Sabse zaroori baat yaad rakho \u2014 yeh <b>adverb</b> hain, isliye position 1 lete hain aur verb subject se pehle aa jaata hai. Jabki <i>und</i>, <i>aber</i>, <i>denn</i> koi position lete hi nahi.'
    },
    {
      title: 'Kapitel 5 — Zweiteilige Satzverbindungen (Rückblick)',
      body: [ 'Correlative pairs as bridges: sowohl\u2026als auch, entweder\u2026oder, weder\u2026noch, zwar\u2026aber, je\u2026desto. Never leave one half unconnected \u2014 and remember the word order: the je-clause sends its verb to the end, then desto + comparative + verb.' ],
      hinglish: 'Correlative pairs pul ki tarah hain: sowohl\u2026als auch, entweder\u2026oder, weder\u2026noch, zwar\u2026aber, je\u2026desto. Jodi shuru ki hai to use poora karo. Aur <b>je \u2026 desto</b> ka word order dhyaan mein rakho \u2014 je wale hisse ka verb end mein, phir desto + comparative + verb.'
    },
    {
      title: 'Bereitschaftsskala (Readiness Scale)',
      body: [ 'Excellent → Very Good → Good → Needs Revision → Repeat Chapters. Use this scale honestly to plan your next study session.' ],
      hinglish: 'Apne score ko imaandaari se dekho \u2014 yeh scale hi batata hai ki aage badhna hai ya kisi chapter par wapas jaana hai. Kam score koi problem nahi, par use ignore karna problem hai.'
    },
    {
      title: 'Erinnerung (Memory Reminder)',
      body: [ 'A Mini Test is not another lesson. It measures whether the first five chapters have become automatic. Answer naturally, without consciously thinking about grammar rules.' ],
      note: 'If you find yourself stopping to recall a rule, that chapter needs another revision pass before moving to Chapter 7.',
      hinglish: 'Mini Test koi naya lesson nahi hai \u2014 yeh sirf yeh dekhta hai ki pehle paanch chapters automatic hue ya nahi. Rules soch-soch kar mat lagao, jo natural lage wahi likho. Agar kahin rukna pad raha hai to samajh lo ki us chapter par ek baar aur jaana hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Reisemagazin: Nachtzüge feiern ihr Comeback',
    titleEn: 'Reading A — Travel magazine: night trains make a comeback',
    tokens: [
      { w: 'Sowohl', role: 'r-addition', en: 'both (correlative addition)', hi: 'दोनों', type: 'Konjunktion' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Deutschland', role: 'plain', en: 'Germany', hi: 'जर्मनी', type: 'Name' },
      { w: 'als', role: 'r-addition', en: 'as (part of "als auch")', hi: '', type: 'Konjunktion' },
      { w: 'auch', role: 'r-addition', en: 'also (Satzende, closes the bridge)', hi: 'भी (Satzende)', type: 'Adverb (Satzende)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Österreich', role: 'plain', en: 'Austria (Satzende)', hi: 'ऑस्ट्रिया (Satzende)', type: 'Name' },
      { w: 'erlebt', role: 'plain', en: 'is experiencing', hi: 'देख रहा है', type: 'Verb · erleben (Präsens)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Nachtzug', role: 'plain', en: 'night train', hi: 'रात की ट्रेन', type: 'Noun · masc.' },
      { w: 'derzeit', role: 'plain', en: 'currently', hi: 'फ़िलहाल', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'erstaunliche', role: 'plain', en: 'astonishing', hi: 'आश्चर्यजनक', type: 'Adjective' },
      { w: 'Renaissance', role: 'plain', en: 'renaissance (Satzende)', hi: 'पुनरुत्थान (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-plusquam', en: 'after (introduces Plusquamperfekt background)', hi: 'के बाद', type: 'Konjunktion', why: '"Nachdem" + Plusquamperfekt establishes an event that concluded before the following main clause (this chapter).' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Verbindungen', role: 'plain', en: 'connections', hi: 'मार्ग', type: 'Noun · plural' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: '2000er', role: 'plain', en: '2000s', hi: '2000 के दशक', type: 'Adjective' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'साल (Satzende)', type: 'Noun · plural' },
      { w: 'nach', role: 'plain', en: 'gradually', hi: 'धीरे-धीरे', type: 'Adverbiale' },
      { w: 'und', role: 'plain', en: '(part of "nach und nach")', hi: '', type: 'Conjunction' },
      { w: 'nach', role: 'plain', en: '(Satzende, part of "nach und nach")', hi: '(Satzende)', type: 'Adverbiale (Satzende)' },
      { w: 'eingestellt', role: 'r-plusquam', en: 'discontinued (Partizip II)', hi: 'बंद कर दिए गए थे', type: 'Verb · Partizip II' },
      { w: 'worden', role: 'r-plusquam', en: 'been (Passiv Plusquamperfekt, Satzende)', hi: '(Satzende)', type: 'Verb · werden (Plusquamperfekt Passiv, Satzende)' },
      { w: 'waren', role: 'r-plusquam', en: 'had (Satzende, closes Plusquamperfekt)', hi: '(Satzende)', type: 'Verb · sein (Plusquamperfekt, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'kehrten', role: 'plain', en: 'returned', hi: 'लौट आए', type: 'Verb · zurückkehren (Präteritum)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'im', role: 'r-time', en: 'in the (part of "im Laufe" — gradual duration)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Laufe', role: 'r-time', en: 'course (Satzende)', hi: 'के दौरान (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'बीते', type: 'Article · Gen.' },
      { w: 'vergangenen', role: 'plain', en: 'past', hi: 'सालों', type: 'Adjective · Gen.' },
      { w: 'Jahre', role: 'plain', en: 'years (Satzende)', hi: '(Satzende)', type: 'Noun · plural · Gen.' },
      { w: 'wieder', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'onto', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Schiene', role: 'plain', en: 'rail (Satzende)', hi: 'रेल पर (Satzende)', type: 'Noun · fem.' },
      { w: 'zurück', role: 'plain', en: '(Satzende, prefix)', hi: '', type: 'Separable prefix · zurückkehren' },
      { w: '.', plain: true },
      { w: 'Zwar', role: 'r-contrast', en: 'admittedly (correlative contrast)', hi: 'सच है कि', type: 'Adverb' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Fahrzeiten', role: 'plain', en: 'travel times', hi: 'यात्रा का समय', type: 'Noun · plural' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'länger', role: 'plain', en: 'longer', hi: 'अधिक', type: 'Adjective · Komparativ' },
      { w: 'als', role: 'plain', en: 'than', hi: 'की तुलना में', type: 'Konjunktion' },
      { w: 'bei', role: 'plain', en: 'with', hi: 'के साथ', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Flug', role: 'plain', en: 'flight (Satzende)', hi: 'फ़्लाइट (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-contrast', en: 'but (Satzende, closes the bridge)', hi: 'लेकिन (Satzende)', type: 'Konjunktion (Satzende)' },
      { w: 'immer', role: 'plain', en: '(part of "immer mehr")', hi: '', type: 'Adverb' },
      { w: 'mehr', role: 'plain', en: 'more and more', hi: 'ज़्यादा से ज़्यादा', type: 'Adverb' },
      { w: 'Reisende', role: 'plain', en: 'travellers', hi: 'यात्री', type: 'Noun · plural' },
      { w: 'nehmen', role: 'plain', en: 'accept', hi: 'स्वीकार करते हैं', type: 'Verb · in Kauf nehmen' },
      { w: 'das', role: 'plain', en: 'that', hi: 'इसे', type: 'Pronoun' },
      { w: 'bewusst', role: 'plain', en: 'knowingly (Satzende)', hi: 'जानते हुए (Satzende)', type: 'Adjective' },
      { w: 'in', role: 'plain', en: '(fixed with nehmen)', hi: '', type: 'Präposition' },
      { w: 'Kauf', role: 'plain', en: '(Satzende, fixed expression)', hi: '(Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Both in Germany and in Austria, the night train is currently experiencing an astonishing renaissance. After many connections had gradually been discontinued in the 2000s, they returned to the rails over the course of recent years. Admittedly, travel times are often longer than with a flight, but more and more travellers knowingly accept that.',
    comprehension: [
      { q: 'Welche Funktion hat "nachdem" + Plusquamperfekt?', options: ['Zeigt eine abgeschlossene Vorgeschichte vor dem Hauptsatz', 'Eine Vermutung', 'Eine wörtliche Rede'], answer: 0 },
      { q: 'Welche Funktion hat "im Laufe der vergangenen Jahre"?', options: ['Präzise Dauer über einen Zeitraum', 'Ein einzelner Zeitpunkt', 'Ein Befehl'], answer: 0 },
      { q: 'Welche Funktion hat "zwar...aber" hier?', options: ['Einräumung eines Nachteils, dann Gegenargument', 'Addition', 'Ursache'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar (Revision)',
    titleEn: 'Reading B — Newspaper commentary',
    tokens: [
      { w: 'Zwar', role: 'r-paired', en: 'admittedly (Ch.5 correlative pair)', hi: 'sach hai ki (Ch.5 correlative pair)', type: 'Adverb' },
      { w: 'bringt', role: 'plain', en: 'brings', hi: 'laata hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform', hi: 'sudhar', type: 'Noun · fem.' },
      { w: 'Vorteile', role: 'plain', en: 'advantages (Satzende)', hi: 'labh (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-paired', en: 'but (closes the bridge)', hi: 'lekin (bridge band karta hai)', type: 'Konjunktion' },
      { w: 'zudem', role: 'r-addition', en: 'moreover (Ch.4 addition connector)', hi: 'iske alaawa (Ch.4 addition connector)', type: 'Adverb (Konnektor)' },
      { w: 'entstehen', role: 'plain', en: 'arise (Satzende)', hi: 'utpann hoti hain (Satzende)', type: 'Verb · Satzende' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'nayi', type: 'Adjective · Nom.' },
      { w: 'Herausforderungen', role: 'plain', en: 'challenges (Satzende)', hi: 'chunautiyaan (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Admittedly the reform brings advantages, but moreover new challenges arise.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_006_L001', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meine Argumentation in der letzten Übung war eigentlich überzeugend, oder?', en: 'Timo, my argumentation in the last exercise was actually convincing, right?' },
      { id: 'C1_006_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Inhaltlich ja, aber die Struktur war stellenweise unklar — man verliert kurz den roten Faden.', en: 'Content-wise yes, but the structure was unclear in places — you briefly lose the thread.' },
      { id: 'C1_006_L003', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Verständlich. Sollen wir es laut üben, bevor wir morgen die Prüfung schreiben?', en: 'Understandable. Should we practice it out loud before we take the exam tomorrow?' },
      { id: 'C1_006_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau das würde uns beiden helfen.', en: 'That would help both of us exactly.' }
    ],
    transcript: 'Timo, meine Argumentation in der letzten Übung war eigentlich überzeugend, oder? Inhaltlich ja, aber die Struktur war stellenweise unklar — man verliert kurz den roten Faden. Verständlich. Sollen wir es laut üben, bevor wir morgen die Prüfung schreiben? Genau das würde uns beiden helfen.',
    translation: 'Timo, my argumentation in the last exercise was actually convincing, right? Content-wise yes, but the structure was unclear in places — you briefly lose the thread. Understandable. Should we practice it out loud before we take the exam tomorrow? That would help both of us exactly.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meine' },
      { w: 'Argumentation' },
      { w: 'in' },
      { w: 'der' },
      { w: 'letzten' },
      { w: 'Übung' },
      { w: 'war' },
      { w: 'eigentlich' },
      { w: 'überzeugend' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Inhaltlich' },
      { w: 'ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Struktur' },
      { w: 'war' },
      { w: 'stellenweise' },
      { w: 'unklar' },
      { w: '—', plain: true },
      { w: 'man' },
      { w: 'verliert' },
      { w: 'kurz' },
      { w: 'den' },
      { w: 'roten' },
      { w: 'Faden' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Sollen' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'laut' },
      { w: 'üben' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'morgen' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: 'schreiben' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: 'das' },
      { w: 'würde' },
      { w: 'uns' },
      { w: 'beiden' },
      { w: 'helfen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was war in Nikes Argumentation unklar?', qEn: 'What was unclear in Nike\'s argumentation?', options: ['der Inhalt', 'die Struktur', 'die Aussprache', 'das Thema'], optionsEn: ['the content', 'the structure', 'the pronunciation', 'the topic'], answer: 1,
        explain: '"… die Struktur war stellenweise unklar."' },
      { q: 'Was wollen sie vor der Prüfung machen?', qEn: 'What do they decide to do before the exam?', options: ['schlafen', 'es laut üben', 'das Thema wechseln', 'nichts mehr tun'], optionsEn: ['sleep', 'practise it out loud', 'change the subject', 'do nothing more'], answer: 1,
        explain: '"Sollen wir es laut üben, bevor wir morgen die Prüfung schreiben?"' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt, ob seine Argumentation überzeugend war. Antworte ehrlich.", taskEn: "Timo asks whether his argument was convincing. Answer honestly.", de: "Inhaltlich ja, aber die Struktur war stellenweise unklar.", en: "In content yes, but the structure was unclear in places." },
    { task: "Prüfung, Teil 1: Halte einen kurzen strukturierten Vortrag.", taskEn: "Exam, Part 1: give a short structured talk.", de: "Zunächst die Ausgangslage, sodann zwei Lösungen, abschließend meine Bewertung.", en: "First the situation, then two solutions, finally my assessment." },
    { task: "Prüfung, Teil 2: Widersprich deinem Partner einmal höflich.", taskEn: "Exam, Part 2: disagree with your partner once, politely.", de: "Da stimme ich Ihnen zu; dennoch sehe ich ein Finanzierungsproblem.", en: "I agree with you there; nevertheless I see a funding problem." },
    { task: "Prüfung, Teil 3: Findet gemeinsam eine Lösung.", taskEn: "Exam, Part 3: find a joint solution together.", de: "Wir könnten die Gebühren staffeln; einigen wir uns auf einen Versuch.", en: "We could stagger the fees; let's agree on a trial." },
    { task: "Timo fragt, wie ihr die Prüfungsvorbereitung aufteilt.", taskEn: "Timo asks how you'll divide the exam preparation.", de: "Ich übernehme die Einleitung, du das Gegenargument, dann fassen wir zusammen.", en: "I'll take the introduction, you the counter-argument, then we'll summarise." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal argumentative article (350-400 words): Demonstrate stylistic tense choice, elegant coordination, paired connectors, precise time expressions, and complex subordinate clauses — recycling ONLY Chapters 1-5.\n\nTASK 2 — Formal proposal/report: Improve a B2-level version into authentic C1 writing using skills from Chapters 1-5.',
    starters: ['Sowohl die Theorie als auch die Praxis bestätigen diesen Trend.', 'Innerhalb weniger Jahre hat sich die Situation erheblich verändert.'],
    placeholder: 'Zwar war die Ausgangslage schwierig, aber innerhalb kurzer Zeit entwickelte sich eine klare Lösung...',
    minWords: 350
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which pair correctly completes "sowohl" (Chapter 5 review)?',
      options: ['sowohl ... als auch', 'sowohl ... und', 'sowohl ... aber'],
      answer: 0,
      explain: '"Sowohl" must always be completed with "als auch" — reviewed from Chapter 5.'
    },
    gap: {
      sentence: ['Innerhalb ', ' zwei Stunden sollten wir die Grammatik wiederholen.'],
      gaps: [ { answer: 'von', accepts: ['von'] } ],
      explain: '"Innerhalb von" (Chapter 2) precisely bounds a duration.'
    },
    match: {
      q: 'Match each expression to the chapter it comes from.',
      pairs: [
        { noun: 'historisches Präsens', art: 'Kapitel 1' },
        { noun: 'in unmittelbarer Nähe', art: 'Kapitel 2' },
        { noun: 'verschachtelte Nebensätze', art: 'Kapitel 3' },
        { noun: 'zudem / dennoch', art: 'Kapitel 4' }
      ]
    },
    builder: {
      target: 'Build: "Admittedly it was short, but the structure was clear." (Ch.5 review)',
      bank: ['Zwar', 'war', 'er', 'kurz', ',', 'aber', 'die', 'Struktur', 'war', 'klar', '.'],
      answer: ['Zwar', 'war', 'er', 'kurz', ',', 'aber', 'die', 'Struktur', 'war', 'klar', '.'],
      roles: { 'Zwar': 'r-paired', 'aber': 'r-paired' }
    },
    errorCorrection: {
      title: 'Error correction (mixed review)',
      wrong: 'Sowohl die Theorie und die Praxis bestätigen den Trend.',
      right: 'Sowohl die Theorie als auch die Praxis bestätigen den Trend.',
      explain: 'Reviewing Chapter 5: "sowohl" must be completed with "als auch", never "und".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which chapter covers historic present and stylistic tense choice?', options: ['Chapter 1', 'Chapter 3', 'Chapter 5'], answer: 0,
      explain: 'Chapter 1 (Tempusgebrauch & Stilistische Tempuswahl) covers stylistic tense choice.' },
    { q: 'Which chapter covers "in unmittelbarer Nähe" and "im Rahmen"?', options: ['Chapter 2', 'Chapter 4', 'Chapter 5'], answer: 0,
      explain: 'Chapter 2 (Raum & Zeit präzise ausdrücken) covers precise spatial expressions.' },
    { q: 'Which chapter covers nested and parallel subordinate clauses?', options: ['Chapter 3', 'Chapter 1', 'Chapter 4'], answer: 0,
      explain: 'Chapter 3 (Nebensätze sicher beherrschen) covers clause hierarchy and nesting.' },
    { q: 'Which chapter covers "zudem", "dennoch", and "folglich"?', options: ['Chapter 4', 'Chapter 2', 'Chapter 5'], answer: 0,
      explain: 'Chapter 4 (Hauptsätze elegant verbinden) covers advanced coordinating connectors.' },
    { q: 'What does this Mini Test measure?', options: ['Whether Chapters 1-5 have become automatic', 'New C1 grammar not yet taught', 'Only vocabulary memorization'], answer: 0,
      explain: 'A Mini Test is not another lesson — it checks whether prior chapters are now automatic.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-hierarchy', html: 'This checkpoint introduces zero new grammar — it recycles Chapters 1-5: stylistic tense choice, precise time/space, clause hierarchy, elegant coordination, and paired connectors.' },
    { c: 'r-paired', html: 'Real C1 fluency means combining several of these skills naturally in one sentence, not using them one at a time.' },
    { c: 'r-space', html: 'Use your Readiness Scale result honestly: Excellent/Very Good → move on; Good/Needs Revision → repeat the weakest chapter before Chapter 7.' }
  ],
  revisionTips: [
    'Identify your single weakest chapter from this Mini Test and re-read only that chapter\'s Grammar section before continuing.',
    'Write one paragraph that deliberately combines a paired connector (Ch.5), a nested clause (Ch.3), and a precise time expression (Ch.2).',
    'Read your Chapter 4 essay draft aloud and check whether you repeated any connector more than twice.'
  ]
};

window.CHAPTER = CHAPTER;
