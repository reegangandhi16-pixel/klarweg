/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 15
   "Konjunktiv I & Indirekte Rede" — reported speech, statements/
   questions/commands, Konjunktiv I vs II, journalism vs academic
   reporting. NOT basic Konjunktiv II or elementary reported
   speech (already covered earlier in the curriculum).
   Dialogue: Grit and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-15-konjunktiv-i-und-indirekte-rede',
  phase: 'C1 · Modalität & Nuance',
  number: 15,
  title: 'Konjunktiv I & Indirekte Rede',
  titleEn: 'Konjunktiv I and reported speech',
  description: 'Konjunktiv II asks "what if reality were different?" Konjunktiv I asks "someone says this — but I\'m only reporting it." Reality → Konjunktiv II. Reported Reality → Konjunktiv I.',
  xp: 490,
  time: 105,
  difficulty: 'Advanced',
  nextChapter: { number: 16, title: 'Aufforderung, Empfehlung & Handlungssteuerung', titleEn: 'Directives, recommendations & guiding action' , href: 'chapter-c1-16-aufforderung-empfehlung-und-handlungssteuerung.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: '"Someone says this — but I\'m only <em>reporting</em> it."',
    intro: 'Grit reports back from a university conference Timo missed — the minister claims he\'s innocent, a source says he lied — carefully preserving Konjunktiv I so neither of them takes sides.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See reported statements, questions, and requests expressed with neutral, objective Konjunktiv I'
    ],
    scene: 'Bericht über eine Universitätskonferenz',
    femaleSpeakers: ['Grit'],
    dialogue: [
      { speaker: 'Grit', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Minister', role: 'r-subject', en: 'minister', hi: 'मंत्री', pron: 'mi-NIS-ter', type: 'Noun · masc.' },
        { w: 'behauptet', role: 'r-verb', en: 'claims', hi: 'दावा करता है', pron: 'be-HOWP-tet', type: 'Verb · behaupten', why: 'behaupten = to claim (this chapter).', ex: 'Der Minister behauptet, er sei unschuldig.', exEn: 'The minister claims he is innocent.' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'sei', role: 'r-verb', en: 'is', hi: 'है', pron: 'zy', type: 'Verb · sein (Konjunktiv I)', why: 'Konjunktiv I marks reported speech, distancing the speaker from the claim (this chapter).', ex: 'er sei unschuldig' },
        { w: 'unschuldig', role: 'r-akkusativ', en: 'innocent', hi: 'निर्दोष', pron: 'UN-shul-dikh', type: 'Adjective', why: 'unschuldig = innocent (this chapter).', ex: 'Er ist unschuldig.', exEn: 'He is innocent.' },
        { w: '.', plain: true }
      ], en: 'The minister claims he is innocent.', hi: 'Mantri daava karta hai ki woh nirdosh hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Quelle', role: 'r-subject', en: 'source', hi: 'स्रोत', pron: 'KVE-luh', type: 'Noun · fem.', why: 'die Quelle (this chapter).', ex: 'die Quelle prüfen' },
        { w: 'berichtet', role: 'r-verb', en: 'reports', hi: 'रिपोर्ट करता है', pron: 'be-RIKH-tet', type: 'Verb · berichten', why: 'berichten = to report (this chapter).', ex: 'Die Quelle berichtet, er habe gelogen.', exEn: 'The source reports he has lied.' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'has', hi: 'था', pron: 'HAH-buh', type: 'Verb · haben (Konjunktiv I)' },
        { w: 'gelogen', role: 'r-verb', en: 'lied', hi: 'झूठ बोला', pron: 'ge-LO-gen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'The source reports he has lied.', hi: 'Srot report karta hai ki usne jhoot bola tha.' },
      { speaker: 'Grit', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Neutralität', role: 'r-akkusativ', en: 'neutrality', hi: 'निष्पक्षता', pron: 'noy-tra-li-TAYT', type: 'Noun · fem.', why: 'die Neutralität (this chapter).', ex: 'die Neutralität bewahren' },
        { w: 'bewahren', role: 'r-verb', en: 'preserve', hi: 'बचाए रखना', pron: 'be-VAH-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We must preserve neutrality.', hi: 'Humein nishpakshta banaaye rakhni chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stelle', role: 'r-verb', en: 'state', hi: 'कहता हूँ', pron: 'SHTE-luh', type: 'Verb · feststellen (ich)', lexicalUnit: 'feststellen', why: 'feststellen = to state/establish (this chapter).', ex: 'Ich stelle nur fest, was passiert ist.', exEn: 'I only state what has happened.' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'fest', role: 'r-verb', en: '(prefix of feststellen)', hi: '', pron: 'fest', type: 'Separable prefix', lexicalUnit: 'feststellen' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'जो', pron: 'vas', type: 'Relativpronomen · was' },
        { w: 'passiert', role: 'r-verb', en: 'happened', hi: 'हुआ', pron: 'pa-SEERT', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I only state what has happened.', hi: 'Main sirf woh batata hoon jo hua hai.' },
      { speaker: 'Grit', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Kollegin', role: 'r-subject', en: 'colleague (f)', hi: 'सहकर्मी', pron: 'ko-LAY-gin', type: 'Noun · fem.' },
        { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen (Präteritum)' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Antwort', role: 'r-subject', en: 'answer', hi: 'जवाब', pron: 'ANT-vort', type: 'Noun · fem.' },
        { w: 'sei', role: 'r-verb', en: 'was', hi: 'था', pron: 'zy', type: 'Verb · sein (Konjunktiv I)', why: 'indirect speech in the past uses sei/habe + Partizip II (this chapter).', ex: 'die Antwort sei ausweichend gewesen' },
        { w: 'ausweichend', role: 'r-akkusativ', en: 'evasive', hi: 'टालमटोल भरा', pron: 'OWS-vy-khent', type: 'Adjective', why: 'ausweichend = evasive (this chapter).', ex: 'Die Antwort war ausweichend.', exEn: 'The answer was evasive.' },
        { w: 'gewesen', role: 'r-verb', en: 'been', hi: '', pron: 'ge-VAY-zen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'My colleague said the answer was evasive.', hi: 'Meri sahkarmi ne kaha ki jawaab taalmatol bhara tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'nachfragen', role: 'r-verb', en: 'ask again', hi: 'फिर से पूछना', pron: 'NAHKH-frah-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Then we should ask again.', hi: 'Toh humein phir se poochhna chahiye.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Konjunktiv II asks: <b>"What if reality were different?"</b> Konjunktiv I asks: <b>"Someone says this — but I\'m only reporting it."</b> Reality → Konjunktiv II. <span class="de r-konjunktiv1">Reported Reality</span> → Konjunktiv I.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV I & INDIREKTE REDE at C1 level — reported speech using Konjunktiv I with objective neutrality, NOT basic Konjunktiv II or elementary reported speech (already mastered earlier). Covered: direct vs indirect speech transformation (speaker shift, pronoun shift, tense preservation); reporting statements with common reporting verbs (sagen, berichten, erklären, behaupten, mitteilen, betonen, hinzufügen, erwähnen, schreiben, feststellen); reporting yes/no questions with "ob + Konjunktiv I"; reporting W-questions (question word retained + verb-final Konjunktiv I); reporting commands/requests using "zu + Infinitiv" after verbs like auffordern/bitten/empfehlen/verlangen/anweisen (NOT Konjunktiv I for these); Konjunktiv I vs Konjunktiv II — when Konjunktiv I forms are identical to the Indicative, Konjunktiv II or würde-Form is preferred instead (e.g. plural forms); journalistic and academic reporting conventions distinguishing reported claims from confirmed facts. ' +
    'Do NOT expect or require basic Konjunktiv II formation or elementary reported speech (simple present-tense statement transformation) — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: using Indicative instead of Konjunktiv I in formal reported speech; using Konjunktiv II unnecessarily when a distinct Konjunktiv I form exists; forgetting pronoun shifts when transforming direct to indirect speech; incorrect tense transfer; using Konjunktiv I after request-reporting verbs (bitten, auffordern) where "zu + Infinitiv" is required instead. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag Indicative used where Konjunktiv I is expected in formal/journalistic reported speech, unless the register is clearly casual conversation.\n' +
    '- Check that Konjunktiv I forms identical to Indicative are appropriately replaced by Konjunktiv II/würde where the text calls for clarity.\n' +
    '- Flag Konjunktiv I incorrectly used after "bitten"/"auffordern" where "zu + Infinitiv" is the correct structure for reported requests.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Neutrality check:</b> one sentence on whether the learner\'s reported speech maintained objective distance from the reported content, as journalism/academic writing requires.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your reported speech maintains authentic journalistic neutrality. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Reporting Flow and Decision Flowchart once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: Konjunktiv I expresses distance from the content, not uncertainty about grammar.'
  },

  parserSentence: [
    { w: 'Er', role: 'plain' }, { w: 'sagte', role: 'plain' }, { w: ',', role: 'plain' }, { w: 'die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: 'sei', role: 'r-konjunktiv1' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Konjunktiv I signals objective distance from reported content, not grammatical uncertainty.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anna reports what professors and researchers said at a conference, using authentic Konjunktiv I throughout.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key reporting expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master reporting statements, questions, and requests, plus Konjunktiv I vs II choice.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper report and an academic conference summary, identifying Konjunktiv I and source attribution.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify indirect speech, reporting verbs, and reported claims in a radio bulletin and lecture summary.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Summarize interviews, presentations, and research findings using authentic Konjunktiv I.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Transform direct speech into Konjunktiv I, and write a 350-word newspaper report or conference summary.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill direct-to-indirect transformation, reporting verb selection, and pronoun shifts.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 490 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Direct-to-indirect transformation drills, reporting verb selection, and a full newspaper report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Reporting Flow, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Er sagte, die Studie sei noch nicht abgeschlossen.', text: 'Report a statement neutrally with Konjunktiv I' },
    { de: 'Sie erklärte, die Ergebnisse würden nächstes Jahr veröffentlicht.', text: 'Use Konjunktiv II/würde when Konjunktiv I is identical to Indicative' },
    { de: 'Ein Student fragte, wann die Studie beginne.', text: 'Report a W-question with retained question word' },
    { de: 'Eine andere fragte, ob die Daten öffentlich zugänglich seien.', text: 'Report a yes/no question with "ob"' },
    { de: 'Ein Kollege bat die Forscherin, die Methodik genauer zu erklären.', text: 'Report a request using "zu + Infinitiv", not Konjunktiv I' }
  ],

  vocab: [
    { de: 'berichten', pos: 'verb', level: 'C1', register: 'written', en: 'to report', hi: 'रिपोर्ट करना', ex: 'Die Zeitung berichtet, der Minister sei zurückgetreten.', exEn: 'The newspaper reports that the minister has resigned.', exHi: 'Akhbaar report karta hai ki mantri ne isteefa de diya hai.', ex2: 'Sie haben ausführlich über das Ereignis berichtet.', ex2En: 'They\'ve reported extensively on the event.', ex2Hi: 'Unhone ghatna ke baare mein vistaar se report kiya hai.', conj: { praesens: 'berichtet', praeteritum: 'berichtete', perfekt: 'hat berichtet' } },
    { de: 'behaupten', pos: 'verb', level: 'C1', register: 'written', en: 'to claim, assert', hi: 'दावा करना', ex: 'Der Zeuge behauptete, er habe alles gesehen.', exEn: 'The witness claimed to have seen everything.', exHi: 'Gawaah ne daava kiya ki usne sab kuch dekha.', ex2: 'Sie behaupten, die Ergebnisse seien eindeutig.', ex2En: 'They claim the results are unambiguous.', ex2Hi: 'Woh daava karte hain ki parinaam spasht hain.', conj: { praesens: 'behauptet', praeteritum: 'behauptete', perfekt: 'hat behauptet' } },
    { de: 'die Quelle', art: 'die', gender: 'f', plural: 'Quellen', pos: 'noun', level: 'C1', register: 'written', en: 'source', hi: 'स्रोत', ex: 'Die Quelle bleibt anonym.', exEn: 'The source remains anonymous.', exHi: 'Srot anonymous rehta hai.', ex2: 'Nach Angaben mehrerer Quellen ist die Reform beschlossen.', ex2En: 'According to several sources, the reform has been decided.', ex2Hi: 'Kai srotom ke anusaar, sudhaar tay ho gaya hai.' },
    { de: 'die Neutralität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'neutrality', hi: 'निष्पक्षता', ex: 'Journalistische Neutralität erfordert distanzierte Sprache.', exEn: 'Journalistic neutrality requires detached language.', exHi: 'Patrakaarita neutrality ke liye distant bhaasha chahiye.', ex2: 'Sie bewahrten ihre Neutralität während der Debatte.', ex2En: 'They maintained their neutrality during the debate.', ex2Hi: 'Unhone bahas ke dauraan apni neutrality banaaye rakhi.' },
    { de: 'feststellen', pos: 'verb', level: 'C1', register: 'written', en: 'to note, determine, state', hi: 'निर्धारित करना', ex: 'Der Bericht stellt fest, dass die Zahlen gestiegen seien.', exEn: 'The report notes that the numbers have risen.', exHi: 'Report note karta hai ki sankhyaayein badh gayi hain.', ex2: 'Die Forscher haben einen klaren Zusammenhang festgestellt.', ex2En: 'The researchers have determined a clear connection.', ex2Hi: 'Shodhkartaon ne ek spasht sambandh nirdhaarit kiya hai.', conj: { praesens: 'stellt fest', praeteritum: 'stellte fest', perfekt: 'hat festgestellt' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Konjunktiv I existiert',
      body: [ 'Direct Speech → Reported Speech → Neutral Reporting → Journalistic Objectivity → Academic Objectivity. Konjunktiv I lets the speaker report information without adopting it as fact.' ],
      hinglish: 'Konjunktiv I ka ek hi kaam hai \u2014 kisi ki baat aage pahunchana bina uski sachai ki zimmedaari liye. Isliye yeh news aur academic writing mein har jagah milta hai. Dhyaan rakho: iska matlab yeh nahi ki baat jhooth hai, sirf yeh ki woh <b>tumhari</b> baat nahi hai.'
    },
    {
      title: 'Direkte vs Indirekte Rede',
      body: [ 'Transformation mein teen cheezein badalti hain: quotation marks hat jaate hain, pronoun bolne wale se reporter ke nazariye par shift hota hai (<i>ich</i> se <b>er</b>), aur verb Konjunktiv I mein chala jaata hai. Time reference waisa hi rehta hai \u2014 <i>morgen</i> <i>morgen</i> hi rehta hai.' ],
      hinglish: 'Transformation mein teen cheezein badalti hain: quotation marks hat jaate hain, pronoun bolne wale se reporter ke nazariye par shift hota hai (<i>ich</i> se <b>er</b>), aur verb Konjunktiv I mein chala jaata hai. Time reference waisa hi rehta hai \u2014 <i>morgen</i> <i>morgen</i> hi rehta hai.'
    },
    {
      title: 'Aussagen berichten (Reporting Statements)',
      body: [ 'Reporting verbs sirf \u201ckaha\u201d nahi batate \u2014 har ek ka apna rang hai. <b>berichten</b> aur <b>mitteilen</b> neutral hain, <b>betonen</b> matlab zor dekar kaha, <b>behaupten</b> matlab daava kiya (aur isme shak jhalakta hai), aur <b>feststellen</b> matlab jaanch kar batana. Isliye verb chunte waqt sochna padta hai.' ],
      hinglish: 'Reporting verbs sirf \u201ckaha\u201d nahi batate \u2014 har ek ka apna rang hai. <b>berichten</b> aur <b>mitteilen</b> neutral hain, <b>betonen</b> matlab zor dekar kaha, <b>behaupten</b> matlab daava kiya (aur isme shak jhalakta hai), aur <b>feststellen</b> matlab jaanch kar batana. Isliye verb chunte waqt sochna padta hai.'
    },
    {
      title: 'Fragen berichten (Reporting Questions)',
      body: [ 'Sawaal report karne ke do tarike hain. Ja/Nein sawaal ke liye <b>ob</b> lagao, aur W-sawaal mein wahi W-word rakho. Dono mein ek hi baat pakki hai \u2014 yeh subordinate clause ban jaate hain, isliye verb <b>end</b> mein jaata hai aur inversion nahi hoti.' ],
      hinglish: 'Sawaal report karne ke do tarike hain. Ja/Nein sawaal ke liye <b>ob</b> lagao, aur W-sawaal mein wahi W-word rakho. Dono mein ek hi baat pakki hai \u2014 yeh subordinate clause ban jaate hain, isliye verb <b>end</b> mein jaata hai aur inversion nahi hoti.'
    },
    {
      title: 'Befehle & Bitten berichten (Reporting Commands & Requests)',
      body: [ 'Verbs like auffordern, bitten, empfehlen, verlangen, anweisen use "zu + Infinitiv", NOT Konjunktiv I: Der Professor bittet die Studierenden: „Lesen Sie den Artikel." → Der Professor bittet die Studierenden, den Artikel zu lesen.' ],
      hinglish: 'Yahan ek alag rule hai. Agar koi <b>request</b> ya <b>order</b> report karni ho, to Konjunktiv I nahi lagta \u2014 <b>zu + Infinitiv</b> aata hai: <span class="de">Der Professor bittet die Studierenden, den Artikel zu lesen.</span> Yeh verbs yaad rakho: <b>bitten, auffordern, empfehlen, verlangen, anweisen</b>.'
    },
    {
      title: 'Konjunktiv I vs Konjunktiv II',
      body: [ 'When Konjunktiv I looks identical to Indicative (e.g. "ich komme" — Konjunktiv I = komme = Indicative), Konjunktiv II or würde-Form is preferred for clarity, especially in newspaper conventions.' ],
      hinglish: 'Kabhi-kabhi Konjunktiv I bilkul Indicative jaisa dikhta hai \u2014 jaise <i>ich komme</i> dono mein same hai. Aise mein reader ko pata hi nahi chalega ki yeh reported speech hai. Isliye German us jagah Konjunktiv II (<b>k\u00e4me</b>) ya <b>w\u00fcrde</b> par switch kar deta hai. Yeh koi shortcut nahi hai \u2014 yeh standard tareeka hai.'
    },
    {
      title: 'Formen und die Ausweichregel',
      body: [
        'Konjunktiv I is built from the INFINITIVE stem plus <b>-e</b>: <i>kommen \u2192 er komme</i>, <i>haben \u2192 er habe</i>, <i>gehen \u2192 er gehe</i>. Present-tense vowel changes disappear: <i>er spricht</i> becomes <b>er spreche</b>.',
        'Only the 3rd person singular is reliably distinct. Everywhere else the form collides with the Indicative \u2014 and that is exactly when German switches to Konjunktiv II or w\u00fcrde.'
      ],
      table: {
        head: ['Person', 'Indikativ', 'Konjunktiv I', 'Usable?'],
        rows: [
          ['er/sie/es', 'kommt', '<b>komme</b>', 'yes \u2014 always distinct'],
          ['du', 'kommst', '<b>kommest</b>', 'yes, but rare'],
          ['ihr', 'kommt', '<b>kommet</b>', 'yes, but rare'],
          ['ich', 'komme', 'komme', 'no \u2192 <b>k\u00e4me</b> / <b>w\u00fcrde kommen</b>'],
          ['wir', 'kommen', 'kommen', 'no \u2192 <b>k\u00e4men</b> / <b>w\u00fcrden kommen</b>'],
          ['sie/Sie', 'kommen', 'kommen', 'no \u2192 <b>k\u00e4men</b> / <b>w\u00fcrden kommen</b>']
        ]
      },
      note: '<b>sein</b> is the exception that saves you: <i>sei, seiest, sei, seien, seiet, seien</i> \u2014 every form differs from the Indicative, which is why <b>sei</b> appears constantly in reported speech.',
      hinglish: 'Konjunktiv I banta hai <b>infinitive ke stem</b> par <b>-e</b> lagakar: <i>kommen</i> se <b>er komme</b>, <i>haben</i> se <b>er habe</b>. Aur jo vowel change present tense mein hota hai woh yahan gayab ho jaata hai \u2014 <i>er spricht</i> se <b>er spreche</b>. Ab asli baat: sirf <b>er/sie/es</b> wali form hamesha Indicative se alag dikhti hai. <b>ich</b>, <b>wir</b> aur <b>sie/Sie</b> mein form bilkul same ho jaati hai \u2014 aur wahi par German Konjunktiv II ya <b>w\u00fcrde</b> par switch kar deta hai. Isliye newspapers mein zyada-tar <b>er/sie</b> wali reporting dikhti hai. Ek verb tumhe bacha leta hai \u2014 <b>sein</b>, jiski har form alag hai, isliye <b>sei</b> har jagah milta hai.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Function mapped to example.' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Report Statement', 'Er sagte, er komme später.'],
          ['Report Question', 'Sie fragte, ob er komme.'],
          ['Report W-Question', 'Er fragte, wann sie beginne.'],
          ['Report Opinion', 'Der Experte erklärte, ...'],
          ['Report Research', 'Die Studie zeige, ...'],
          ['Report Claim', 'Der Zeuge behauptete, ...']
        ]
      },
      hinglish: 'Function aur example ka table \u2014 dhyaan do ki har example mein <b>er/sie</b> wali form hai, kyunki wahi Indicative se saaf alag dikhti hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Four of these are mechanical \u2014 pronoun shift, past form, verb-final order in reported questions, and the structure a reporting verb demands. The other two are about choosing between Konjunktiv I and II.' ],
      mistakes: [
        { wrong: 'Der Minister erkl\u00e4rte, die Lage ist stabil.', right: 'Der Minister erkl\u00e4rte, die Lage sei stabil.', why: 'The Indicative makes the reporter vouch for the claim. Konjunktiv I keeps it as the minister\u2019s statement.' },
        { wrong: 'Er sagte, er w\u00fcrde morgen kommen \u2014 und er h\u00e4tte keine Zeit.', right: 'Er sagte, er komme morgen \u2014 und er habe keine Zeit.', why: 'Both verbs have a distinct Konjunktiv I form (<b>komme</b>, <b>habe</b>), so no substitute is needed. Save Konjunktiv II for where the form collides with the Indicative.' },
        { wrong: 'Anna sagte, ich sei m\u00fcde und meine Arbeit sei fertig.', right: 'Anna sagte, sie sei m\u00fcde und ihre Arbeit sei fertig.', why: 'Possessives shift too, not just the subject pronoun \u2014 <i>meine</i> becomes <b>ihre</b>.' },
        { wrong: 'Er sagte, er sei gestern gekommen sein.', right: 'Er sagte, er sei gestern gekommen.', why: 'The past in reported speech is <b>sei/habe + Partizip II</b> \u2014 one auxiliary only, and it comes first, not twice.' },
        { wrong: 'Sie fragte, ob kommt er morgen.', right: 'Sie fragte, ob er morgen komme.', why: 'A reported question is a subordinate clause, so the verb goes to the END \u2014 no inversion after <b>ob</b>.' },
        { wrong: 'Der Professor bat die Studierenden, dass sie den Artikel lesen sollen.', right: 'Der Professor bat die Studierenden, den Artikel zu lesen.', why: '<b>bitten</b> takes <b>zu + Infinitiv</b>, not a dass-clause with a modal \u2014 the request is already in the verb.' }
      ],
      hinglish: 'Inme se chaar galtiyan mechanical hain \u2014 pronoun shift, past wali form, reported question mein verb ka end mein na jaana, aur reporting verb ke hisaab se galat structure. Baaki do Konjunktiv I aur II ke beech chunne ki hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to report a statement? Konjunktiv I. Need to report a yes/no question? ob + Konjunktiv I. Need to report a W-question? W-word + Konjunktiv I. Same form as Indicative? Use Konjunktiv II if needed for clarity. Need to summarize a source? Reporting Verb + Konjunktiv I.' ],
      note: 'Memory trick: Konjunktiv II asks "what if reality were different?" Konjunktiv I asks "someone says this — but I\'m only reporting it." Reality → Konjunktiv II. Reported Reality → Konjunktiv I.',
      hinglish: 'Statement report karni hai? Konjunktiv I. Ja/Nein sawaal? <b>ob</b> + verb end mein. W-sawaal? W-word + verb end mein. Request ya order? <b>zu + Infinitiv</b>. Aur agar form Indicative jaisi nikal rahi hai, to Konjunktiv II ya <b>w\u00fcrde</b> par switch kar do.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsmeldung: Reform der Rentenversicherung angekündigt',
    titleEn: 'Reading A — Newspaper report: pension reform announced',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Minister', role: 'plain', en: 'minister (Satzende)', hi: 'मंत्री (Satzende)', type: 'Noun · masc.' },
      { w: 'erklärte', role: 'plain', en: 'explained (reporting verb)', hi: 'ने बताया', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform (Satzende)', hi: 'सुधार (Satzende)', type: 'Noun · fem.' },
      { w: 'werde', role: 'r-konjunktiv1', en: 'will (Konjunktiv I of "werden", journalistic neutrality)', hi: 'होगा', type: 'Verb · werden (Konjunktiv I)', why: '"Werde" here reports the minister\'s claim without the newspaper endorsing it (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'अगले', type: 'Contraction · in dem' },
      { w: 'nächsten', role: 'plain', en: 'next', hi: 'साल', type: 'Adjective · Dat.' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: '(Satzende)', type: 'Noun · neut.' },
      { w: 'umgesetzt', role: 'plain', en: 'implemented (Satzende)', hi: 'लागू किया जाएगा (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Opposition', role: 'plain', en: 'opposition', hi: 'विरोधी दल', type: 'Noun · fem.' },
      { w: 'entgegnete', role: 'plain', en: 'replied (reporting verb)', hi: 'ने जवाब दिया', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'geplanten', role: 'plain', en: 'planned', hi: 'नियोजित', type: 'Adjective' },
      { w: 'Änderungen', role: 'plain', en: 'changes (Satzende)', hi: 'बदलाव (Satzende)', type: 'Noun · plural' },
      { w: 'seien', role: 'r-konjunktiv1', en: 'are (Konjunktiv I of "sein", reported neutrally)', hi: 'हैं', type: 'Verb · sein (Konjunktiv I)' },
      { w: 'unzureichend', role: 'plain', en: 'insufficient (Satzende)', hi: 'अपर्याप्त (Satzende)', type: 'Adjective' },
      { w: 'durchdacht', role: 'plain', en: 'thought through (Satzende)', hi: 'सोचे हुए (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Beobachter', role: 'plain', en: 'observers', hi: 'पर्यवेक्षक', type: 'Noun · plural' },
      { w: 'vermuten', role: 'plain', en: 'suspect', hi: 'शक करते हैं', type: 'Verb · vermuten' },
      { w: 'derweil', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'eigentliche', role: 'plain', en: 'real', hi: 'असली', type: 'Adjective' },
      { w: 'Streit', role: 'plain', en: 'dispute (Satzende)', hi: 'विवाद (Satzende)', type: 'Noun · masc.' },
      { w: 'werde', role: 'r-konjunktiv1', en: 'will (Konjunktiv I, reported)', hi: '', type: 'Verb · werden (Konjunktiv I)' },
      { w: 'erst', role: 'plain', en: 'only', hi: 'तभी', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in', hi: 'सांसदों में', type: 'Contraction · in dem' },
      { w: 'Bundestag', role: 'plain', en: 'parliament (Satzende)', hi: '(Satzende)', type: 'Noun · masc.' },
      { w: 'sichtbar', role: 'plain', en: 'visible (Satzende)', hi: 'दिखेगा (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The minister explained that the reform will be implemented next year. The opposition replied that the planned changes are insufficiently thought through. Observers suspect meanwhile that the real dispute will only become visible in parliament.',
    comprehension: [
      { q: 'Warum verwendet der Journalist "werde" statt "wird"?', options: ['Um journalistische Neutralität zu wahren', 'Aus Versehen', 'Weil es die Zukunft ist'], answer: 0 },
      { q: 'Welche Funktion hat "seien"?', options: ['Neutrale Berichterstattung der Meinung der Opposition (Konjunktiv I)', 'Sichere Bestätigung', 'Befehl'], answer: 0 },
      { q: 'Bestätigt der Journalist, dass die Reform tatsächlich stattfindet?', options: ['Nein, er berichtet nur die Aussage des Ministers', 'Ja, definitiv', 'Es ist unklar'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Akademische Konferenzzusammenfassung',
    titleEn: 'Reading B — Academic conference summary',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Autorin', role: 'plain', en: 'author (Satzende)', hi: 'lekhika (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'schrieb', role: 'plain', en: 'wrote (reporting verb)', hi: '(reporting verb)', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ye', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results (Satzende)', hi: 'parinaam (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'seien', role: 'r-konjunktiv1', en: 'are (Konjunktiv I plural of "sein", academic reporting)', hi: 'hain (Konjunktiv I plural, academic reporting)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: 'vorläufig', role: 'plain', en: 'preliminary (Satzende)', hi: 'praathamik (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Bericht', role: 'plain', en: 'report (Satzende)', hi: 'report (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'kommt', role: 'plain', en: 'comes', hi: 'pahunchti hai', type: 'Verb (Präsens)' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'Präposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'iss', type: 'Article · Dat.' },
      { w: 'Schluss', role: 'plain', en: 'conclusion (Satzende)', hi: 'nishkarsh tak (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: ',', plain: true },
      { w: 'weitere', role: 'plain', en: 'further', hi: 'aur', type: 'Adjective · Nom.' },
      { w: 'Untersuchungen', role: 'plain', en: 'investigations (Satzende)', hi: 'jaanch (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'seien', role: 'r-konjunktiv1', en: 'are (Konjunktiv I plural, academic reporting)', hi: 'hain (Konjunktiv I plural, academic reporting)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: 'erforderlich', role: 'plain', en: 'required (Satzende)', hi: 'zaroori (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The author wrote that the results are preliminary. The report comes to the conclusion that further investigations are required.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_015_L001', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, du hast die Konferenz ja verpasst — der Minister habe angeblich alle Vorwürfe zurückgewiesen.', en: 'Timo, you missed the conference — the minister apparently rejected all accusations.' },
      { id: 'C1_015_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was sagt die andere Quelle dazu?', en: 'And what does the other source say about that?' },
      { id: 'C1_015_L003', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sie behauptet, er habe schon vorher davon gewusst, könne sich aber an nichts erinnern.', en: 'It claims he already knew beforehand, but can\'t remember anything.' },
      { id: 'C1_015_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da widersprechen sich die Berichte ja deutlich — schwer zu sagen, wem man glauben soll.', en: 'The reports clearly contradict each other there — hard to say who to believe.' }
    ],
    transcript: 'Timo, du hast die Konferenz ja verpasst — der Minister habe angeblich alle Vorwürfe zurückgewiesen. Und was sagt die andere Quelle dazu? Sie behauptet, er habe schon vorher davon gewusst, könne sich aber an nichts erinnern. Da widersprechen sich die Berichte ja deutlich — schwer zu sagen, wem man glauben soll.',
    translation: 'Timo, you missed the conference — the minister apparently rejected all accusations. And what does the other source say about that? It claims he already knew beforehand, but can\'t remember anything. The reports clearly contradict each other there — hard to say who to believe.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'hast' },
      { w: 'die' },
      { w: 'Konferenz' },
      { w: 'ja' },
      { w: 'verpasst' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'Minister' },
      { w: 'habe' },
      { w: 'angeblich' },
      { w: 'alle' },
      { w: 'Vorwürfe' },
      { w: 'zurückgewiesen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'sagt' },
      { w: 'die' },
      { w: 'andere' },
      { w: 'Quelle' },
      { w: 'dazu' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'behauptet' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'habe' },
      { w: 'schon' },
      { w: 'vorher' },
      { w: 'davon' },
      { w: 'gewusst' },
      { w: ',', plain: true },
      { w: 'könne' },
      { w: 'sich' },
      { w: 'aber' },
      { w: 'an' },
      { w: 'nichts' },
      { w: 'erinnern' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'widersprechen' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Berichte' },
      { w: 'ja' },
      { w: 'deutlich' },
      { w: '—', plain: true },
      { w: 'schwer' },
      { w: 'zu' },
      { w: 'sagen' },
      { w: ',', plain: true },
      { w: 'wem' },
      { w: 'man' },
      { w: 'glauben' },
      { w: 'soll' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was soll der Minister angeblich gemacht haben?', qEn: 'What did the minister allegedly do?', options: ['alle Vorwürfe zurückgewiesen', 'alles zugegeben', 'die Konferenz verlassen', 'nichts gesagt'], optionsEn: ['rejected all the accusations', 'admitted everything', 'leave the conference', 'said nothing'], answer: 0,
        explain: '"… der Minister habe angeblich alle Vorwürfe zurückgewiesen."' },
      { q: 'Was behauptet die andere Quelle?', qEn: 'What does the other source claim?', options: ['er sei unschuldig', 'er habe schon vorher davon gewusst', 'er sei krank gewesen', 'er habe gekündigt'], optionsEn: ['that he was innocent', 'that he had known about it beforehand', 'that he had been ill', 'that he had resigned'], answer: 1,
        explain: '"Sie behauptet, er habe schon vorher davon gewusst."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo hat die Konferenz verpasst. Berichte, was der Minister gesagt hat.", taskEn: "Timo missed the conference. Report what the minister said.", de: "Der Minister habe alle Vorwürfe zurückgewiesen.", en: "The minister rejected all the accusations, he said." },
    { task: "Timo fragt, was die andere Quelle dazu sagt.", taskEn: "Timo asks what the other source says about it.", de: "Sie behauptet, die Zahlen seien nie geprüft worden.", en: "It claims the figures were never checked." },
    { task: "Berichte die Frage der Gutachterin weiter.", taskEn: "Pass on the reviewer's question.", de: "Sie fragte, ob die Daten öffentlich zugänglich seien.", en: "She asked whether the data was publicly accessible." },
    { task: "Gib die Bitte des Instituts weiter.", taskEn: "Pass on the institute's request.", de: "Das Institut bat uns, die Unterlagen bis Freitag einzureichen.", en: "The institute asked us to submit the documents by Friday." },
    { task: "Deine Kollegin fragt, wie du im Bericht die Neutralität hältst.", taskEn: "Your colleague asks how you keep neutrality in the report.", de: "Ich stelle fest, was die Quelle sagt, und bewerte es nicht selbst.", en: "I state what the source says and don't judge it myself." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Transformation (150 words): Transform direct speech (statements, questions, commands, requests) into authentic Konjunktiv I / Indirekte Rede.\n\nTASK 2 — Newspaper report or conference summary (350 words): Write a report using authentic Konjunktiv I, reporting verbs, and indirect speech throughout.',
    starters: ['Der Minister erklärte, die Reform werde nächstes Jahr umgesetzt.', 'Die Autorin schrieb, die Ergebnisse seien vorläufig.'],
    placeholder: 'Der Professor sagte, die Studie sei noch nicht abgeschlossen. Ein Student fragte, wann sie beginne...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'How is a reported yes/no question formed?',
      options: ['ob + verb-final Konjunktiv I', 'dass + verb-final Konjunktiv I', 'question word + Indicative'],
      answer: 0,
      explain: 'Yes/no questions become "ob" clauses when reported, with verb-final Konjunktiv I.'
    },
    gap: {
      sentence: ['Er sagte, die Studie ', ' noch nicht abgeschlossen.'],
      gaps: [ { answer: 'sei', accepts: ['sei'] } ],
      explain: '"Sei" is the Konjunktiv I of "sein", reporting the claim neutrally.'
    },
    match: {
      q: 'Match each direct speech type to its indirect speech structure.',
      pairs: [
        { noun: 'Statement', art: 'Konjunktiv I' },
        { noun: 'Yes/No question', art: 'ob + Konjunktiv I' },
        { noun: 'W-question', art: 'W-word + Konjunktiv I' },
        { noun: 'Request (bitten)', art: 'zu + Infinitiv' }
      ]
    },
    builder: {
      target: 'Build: "A student asked when the study begins." (reported W-question)',
      bank: ['Ein', 'Student', 'fragte', ',', 'wann', 'die', 'Studie', 'beginne', '.'],
      answer: ['Ein', 'Student', 'fragte', ',', 'wann', 'die', 'Studie', 'beginne', '.'],
      roles: { 'wann': 'r-w-frage', 'beginne': 'r-w-frage' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der Professor bat die Studierenden, dass sie den Artikel lesen sollen.',
      right: 'Der Professor bat die Studierenden, den Artikel zu lesen.',
      explain: 'Reported requests after "bitten" use "zu + Infinitiv", not a "dass"-clause with a modal verb.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Konjunktiv I signal in reported speech?', options: ['Objective distance — the speaker is only reporting', 'Full personal endorsement', 'Grammatical uncertainty'], answer: 0,
      explain: 'Konjunktiv I lets the speaker report information without adopting it as their own fact.' },
    { q: 'How is a reported W-question formed?', options: ['Question word retained + verb-final Konjunktiv I', 'ob + verb-final Konjunktiv I', 'dass + Indicative'], answer: 0,
      explain: 'W-questions keep their question word when reported, with the verb moving to the end.' },
    { q: 'What structure is used to report a request after "bitten"?', options: ['zu + Infinitiv', 'Konjunktiv I', 'dass + Konjunktiv II'], answer: 0,
      explain: 'Requests reported after verbs like "bitten" use "zu + Infinitiv", not Konjunktiv I.' },
    { q: 'When is Konjunktiv II/würde preferred over Konjunktiv I?', options: ['When Konjunktiv I is identical to the Indicative', 'Always, in every report', 'Never in formal writing'], answer: 0,
      explain: 'Konjunktiv II clarifies the reported nature of a statement when Konjunktiv I would be indistinguishable from fact.' },
    { q: 'What is the C1 memory trick distinguishing Konjunktiv I from II?', options: ['Konjunktiv II = "what if reality were different?"; Konjunktiv I = "someone says this, I\'m reporting it"', 'They are interchangeable', 'Konjunktiv I only appears in questions'], answer: 0,
      explain: 'Konjunktiv II expresses hypothetical/unreal worlds; Konjunktiv I reports someone else\'s claim neutrally.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-konjunktiv1', html: 'Konjunktiv I (sei, habe, werde, seien) reports statements neutrally, without the reporter endorsing them as fact.' },
    { c: 'r-w-frage', html: 'Reported W-questions retain their question word; reported yes/no questions use "ob" — both push the verb to the end.' },
    { c: 'r-bitte', html: 'Reported commands and requests (after bitten, auffordern, empfehlen) use "zu + Infinitiv", never Konjunktiv I.' }
  ],
  revisionTips: [
    'Take five direct quotations from a German news article and transform them into Konjunktiv I indirect speech.',
    'Practise distinguishing when to use Konjunktiv I versus Konjunktiv II/würde by checking whether the form is identical to the Indicative.',
    'Write a short conference summary using at least one reported statement, one reported question, and one reported request.'
  ]
};

window.CHAPTER = CHAPTER;
