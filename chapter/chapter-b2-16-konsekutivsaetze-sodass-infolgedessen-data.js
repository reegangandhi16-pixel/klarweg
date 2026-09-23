/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 16
   "Konsekutivsätze: sodass / infolgedessen" — sodass introduces
   a subordinate clause (verb at the end); infolgedessen is a
   conjunctive adverb that starts a NEW independent sentence
   (verb in Position 2). Both express consequence, contrasted
   with weil/da (reason). Does NOT introduce daher, folglich,
   demnach, or somit (later chapters).
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
   Vocabulary source: uploaded chapter-16 list (55 items, user-edited
   general B2 vocabulary bank — career/workplace/agency themes).
============================================================ */
const CHAPTER = {
  id: 'b2-16-konsekutivsaetze-sodass-infolgedessen',
  phase: 'B2 · Phase 1',
  number: 16,
  title: 'Konsekutivsätze: sodass / infolgedessen',
  titleEn: 'Consequence clauses: sodass / infolgedessen',
  description: 'Cause leads to consequence — one clause with sodass (verb at the end), or a brand-new sentence with infolgedessen (verb in position 2).',
  xp: 410,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 17, title: 'Modalsätze: indem', titleEn: 'Modal clauses: indem' , href: 'chapter-b2-17-modalsaetze-indem.html' },

  prevChapter: { number: 15, title: 'Konzessivsätze: obgleich', titleEn: 'Concessive clauses: obgleich', href: 'chapter-b2-15-konzessivsaetze-obgleich.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Cause and <em>consequence.</em>',
    intro: 'Frauke has just been hired by an ad agency and now must move soon — and gained a leadership role that comes with a lot of responsibility. Timo reacts with pride as cause keeps leading to consequence: sodass inside one clause, infolgedessen as a new sentence.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the difference between sodass (one sentence) and infolgedessen (two sentences)'
    ],
    scene: 'Die Karriereplanung',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Werbeagentur', role: 'r-subject', en: 'ad agency', hi: 'विज्ञापन एजेंसी', pron: 'VAIR-buh-a-gen-toor', type: 'Noun · fem.', why: 'die Werbeagentur (this chapter).', ex: 'Die Werbeagentur hat mich eingestellt.', exEn: 'The ad agency has hired me.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'eingestellt', role: 'r-verb', en: 'hired', hi: 'नियुक्त', pron: 'INE-ge-shtelt', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'sodass', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'zo-DAS', type: 'Conjunction · sodass', why: 'sodass = so that, consequence clause (this chapter).', ex: 'Sie hat mich eingestellt, sodass ich umziehen muss.', exEn: 'They hired me, so that I must move.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'umziehen', role: 'r-verb', en: 'move', hi: 'शिफ़्ट होना', pron: 'UM-tsee-en', type: 'Verb · infinitive' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The ad agency has hired me, so that I must move soon.', hi: 'Vigyaapan agency ne mujhe niyukt kiya hai, isliye mujhe jald shift hona padega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wow', role: 'r-subject', en: 'wow', hi: 'वाह', pron: 'vow', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Karriereplanung', role: 'r-subject', en: 'career planning', hi: 'करियर योजना', pron: 'ka-RYAY-ruh-plah-nung', type: 'Noun · fem.', why: 'die Karriereplanung (this chapter).', ex: 'Deine Karriereplanung geht auf.', exEn: 'Your career planning works out.' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'सही जा रही है', pron: 'gayt', type: 'Verb · aufgehen', lexicalUnit: 'aufgehen' },
        { w: 'auf', role: 'r-verb', en: '(prefix of aufgehen)', hi: '', pron: 'owf', type: 'Separable prefix · Satzende', lexicalUnit: 'aufgehen' },
        { w: '!', plain: true }
      ], en: 'Wow! And your career planning is working out!', hi: 'Wah! Aur tumhaari career yojana sahi ja rahi hai!' },
      { speaker: 'Frauke', tokens: [
        { w: 'Infolgedessen', role: 'r-conjunction', en: 'as a result', hi: 'परिणामस्वरूप', pron: 'in-FOL-guh-de-sen', type: 'Conjunction · infolgedessen', why: 'infolgedessen = as a result, formal consequence adverb (this chapter).', ex: 'Ich habe die Stelle bekommen, infolgedessen bin ich glücklich.', exEn: 'I got the position, as a result I am happy.' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'glücklich', role: 'r-akkusativ', en: 'happy', hi: 'ख़ुश', pron: 'GLÜK-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'As a result I am very happy.', hi: 'Parinaamswaroop main bahut khush hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirst', role: 'r-verb', en: 'will you', hi: 'होगी', pron: 'VIRST', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Innenarchitektur', role: 'r-dativ', en: 'interior design (dat.)', hi: 'आंतरिक वास्तुकला के', pron: 'I-nen-ar-khi-tek-toor', type: 'Noun · fem. dat.', why: 'die Innenarchitektur (this chapter).', ex: 'mit der Innenarchitektur zusammenarbeiten' },
        { w: 'zusammenarbeiten', role: 'r-verb', en: 'collaborate', hi: 'सहयोग करना', pron: 'tsu-ZA-men-ar-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Will you collaborate with the interior design?', hi: 'Kya tum aantarik vaastukala ke saath sahyog karogi?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Projektleitung', role: 'r-subject', en: 'project leadership', hi: 'परियोजना नेतृत्व', pron: 'pro-YEKT-ly-tung', type: 'Noun · fem.', why: 'die Projektleitung (this chapter).', ex: 'Die Projektleitung liegt bei mir.', exEn: 'The project leadership lies with me.' },
        { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'मेरे पास है', pron: 'leekt', type: 'Verb · liegen' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के पास', pron: 'by', type: 'Preposition + dative' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: ',', plain: true },
        { w: 'sodass', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'zo-DAS', type: 'Conjunction · sodass' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Verantwortung', role: 'r-akkusativ', en: 'responsibility', hi: 'ज़िम्मेदारी', pron: 'fer-ANT-vor-tung', type: 'Noun · fem.' },
        { w: 'trage', role: 'r-verb', en: 'carry', hi: 'उठाती हूँ', pron: 'TRAH-guh', type: 'Verb · tragen (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, the project leadership lies with me, so that I carry a lot of responsibility.', hi: 'Haan, pariyojana netritva mere paas hai, isliye main bahut zimmedaari uthaati hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'spannend', role: 'r-akkusativ', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम पर', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'That sounds exciting! I am proud of you.', hi: 'Yeh romaanchak lagta hai! Mujhe tumpar garv hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-sodass">sodass</span> and <span class="de r-infolge">infolgedessen</span> both mean the same thing — "as a result" — but they work completely differently. <span class="de">sodass</span> introduces a subordinate clause with the verb at the END, inside ONE sentence. <span class="de">Infolgedessen</span> starts a brand-new independent sentence, with the verb in Position 2.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONSEKUTIVSÄTZE MIT SODASS UND INFOLGEDESSEN (B2 level): both express consequence ("as a result"), contrasted with weil/da (reason). "sodass" introduces a subordinate clause with verb-final word order, inside one sentence with a comma (Es regnete stark, sodass wir zu Hause blieben.). "infolgedessen" is a conjunctive adverb (Konjunktionaladverb) that STARTS A NEW independent sentence, with the finite verb in Position 2 right after it (Es regnete stark. Infolgedessen blieben wir zu Hause.). "infolgedessen" is mostly formal/written; "sodass" is common in both speech and writing. ' +
    'Do NOT expect daher, folglich, demnach, or somit — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "sodass" clauses must have verb-final word order and stay attached to the main clause with a comma, not a period.\n' +
    '- "infolgedessen" must begin a new sentence (after a period) with the finite verb immediately following in Position 2 — never with verb-final order.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Structure check:</b> one sentence on whether the learner correctly distinguished the one-sentence "sodass" structure from the two-sentence "infolgedessen" structure.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly distinguish sodass (subordinate clause) from infolgedessen (new sentence, V2). Move on to the next B2 chapter.',
    mid: 'Good. Re-read the sodass vs infolgedessen comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: sodass = one sentence, verb at the end. infolgedessen = new sentence, verb in Position 2.'
  },

  parserSentence: [
    { w: 'Es', role: 'plain' }, { w: 'regnete', role: 'plain' },
    { w: 'stark', role: 'plain' }, { w: ',', plain: true }, { w: 'sodass', role: 'r-sodass' }, { w: 'wir', role: 'plain' }, { w: 'blieben', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: sodass is one sentence with the verb at the end; infolgedessen is a new sentence with V2.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo trace career and agency decisions, weighing cause against consequence.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master sodass word order, infolgedessen V2 order, and cause vs consequence.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of consequence structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify cause, consequence, and which structure the speaker uses.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain results and describe consequences using both structures naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using sodass and infolgedessen appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill cause-to-consequence transformation, weil→sodass, and sodass→infolgedessen.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 410 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Cause-to-consequence drills, weil→sodass and sodass→infolgedessen transformation, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Konsekutivsätze reference — word order diagrams, cause vs consequence, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es regnete stark, sodass wir zu Hause blieben.', text: 'Use sodass with correct verb-final word order' },
    { de: 'Es regnete stark. Infolgedessen blieben wir zu Hause.', text: 'Use infolgedessen to start a new sentence with V2' },
    { de: 'weil (Grund) vs. sodass (Folge)', text: 'Distinguish reason from consequence' },
    { de: 'sodass vs. infolgedessen', text: 'Choose subordinate clause vs independent sentence correctly' },
    { de: 'Formal reports, newspapers, business German', text: 'Use infolgedessen naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-16 list) ----------
  vocab: [
    { de: 'Gewerkschaft', art: 'die', gender: 'f', plural: 'Gewerkschaften', pos: 'noun', level: 'B2', en: 'trade union', hi: 'व्यापार संघ', ex: 'Die Gewerkschaft forderte mehr Transparenz.', exEn: 'The trade union demanded more transparency.', exHi: 'Vyapaar sangh ne zyada paardarshita ki maang ki.', ex2: 'Die Gewerkschaft vertritt die Arbeiter.', ex2En: 'The trade union represents the workers.', ex2Hi: 'Vyapaar sangh mazdooron ka pratinidhitva karta hai.' },
    { de: 'gliedern', pos: 'verb', level: 'B2', en: 'to structure, divide up', hi: 'व्यवस्थित करना', ex: 'Wir gliedern den Bericht in drei Teile.', exEn: 'We structure the report into three parts.', exHi: 'Hum report ko teen hisson mein baantte hain.', ex2: 'Die Präsentation ist klar gegliedert.', ex2En: 'The presentation is clearly structured.', ex2Hi: 'Presentation spasht roop se vyavasthit hai.', conj: { praesens: 'gliedert', praeteritum: 'gliederte', perfekt: 'hat gegliedert' } },
    { de: 'Gutschrift', art: 'die', gender: 'f', plural: 'Gutschriften', pos: 'noun', level: 'B2', en: 'credit note', hi: 'क्रेडिट नोट', ex: 'Sie erhielt eine Gutschrift für die Rückgabe.', exEn: 'She received a credit note for the return.', exHi: 'Usse waapsi ke liye ek credit note mila.', ex2: 'Die Gutschrift wird automatisch verbucht.', ex2En: 'The credit note is booked automatically.', ex2Hi: 'Credit note automatically record hota hai.' },
    { de: 'habe eingesehen', pos: 'verb', level: 'B2', en: 'have realised, understood', hi: 'समझ लिया है', ex: 'Ich habe eingesehen, dass die Selbstdarstellung entscheidend war.', exEn: 'I have realised that self-presentation was decisive.', exHi: 'Maine samajh liya hai ki aatma-prastuti nirnaayak thi.', ex2: 'Er habe eingesehen, dass er einen Fehler gemacht hat.', ex2En: 'He has realised that he made a mistake.', ex2Hi: 'Usne samajh liya hai ki usne ek galti ki hai.' },
    { de: 'Handbewegung', art: 'die', gender: 'f', plural: 'Handbewegungen', pos: 'noun', level: 'B2', en: 'hand movement, gesture', hi: 'हाथ का इशारा', ex: 'Mit einer Handbewegung erklärte er alles.', exEn: 'With a hand movement he explained everything.', exHi: 'Ek haath ke ishaare se usne sab kuch samjhaaya.', ex2: 'Ihre Handbewegung war unmissverständlich.', ex2En: 'Her hand gesture was unmistakable.', ex2Hi: 'Uska haath ka ishaara bilkul spasht tha.' },
    { de: 'hängen', pos: 'verb', level: 'B2', en: 'to hang', hi: 'लटकाना', ex: 'Das Bild hängt an der Wand.', exEn: 'The picture hangs on the wall.', exHi: 'Tasveer deewaar par latki hai.', ex2: 'Sie hängt ihre Jacke an den Haken.', ex2En: 'She hangs her jacket on the hook.', ex2Hi: 'Woh apni jacket hook par latkaati hai.', conj: { praesens: 'hängt', praeteritum: 'hing', perfekt: 'hat gehangen' } },
    { de: 'hofieren', pos: 'verb', level: 'B2', en: 'to court, fawn over', hi: 'खुश करने की कोशिश करना', ex: 'Deine Zufriedenheit war deutlich zu erkennen, sodass die Personaler dich sofort hofierten.', exEn: 'Your satisfaction was clearly recognizable, so that the HR staff courted you immediately.', exHi: 'Tumhaari santushti spasht roop se dikh rahi thi, jiske parinaamswaroop HR staff ne turant tumhein khush karne ki koshish ki.', ex2: 'Man sollte Kunden nicht übertrieben hofieren.', ex2En: 'One shouldn\'t excessively fawn over clients.', ex2Hi: 'Graahakon ko atirikt roop se khush karne ki koshish nahi karni chahiye.', conj: { praesens: 'hofiert', praeteritum: 'hofierte', perfekt: 'hat hofiert' } },
    { de: 'Innenarchitektur', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'interior design', hi: 'आंतरिक डिज़ाइन', ex: 'Sie studiert Innenarchitektur.', exEn: 'She studies interior design.', exHi: 'Woh interior design padhti hai.', ex2: 'Die Innenarchitektur des Hotels ist beeindruckend.', ex2En: 'The interior design of the hotel is impressive.', ex2Hi: 'Hotel ka interior design prabhaavshaali hai.' },
    { de: 'Kalkulation', art: 'die', gender: 'f', plural: 'Kalkulationen', pos: 'noun', level: 'B2', en: 'calculation, costing', hi: 'गणना', ex: 'Infolgedessen musste die Geschäftsleitung die Kalkulation offenlegen.', exEn: 'As a consequence, the management had to disclose the calculation.', exHi: 'Parinaamswaroop, prabandhan ko ganana prakat karni padi.', ex2: 'Die Kalkulation zeigt einen Verlust.', ex2En: 'The calculation shows a loss.', ex2Hi: 'Ganana ek nuksaan dikhaati hai.' },
    { de: 'Karriereplanung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'career planning', hi: 'करियर योजना', ex: 'Ihre Karriereplanung ist sehr strukturiert.', exEn: 'Her career planning is very structured.', exHi: 'Uski career yojana bahut vyavasthit hai.', ex2: 'Karriereplanung sollte früh beginnen.', ex2En: 'Career planning should start early.', ex2Hi: 'Career yojana jaldi shuru honi chahiye.' },
    { de: 'Kenntnis', art: 'die', gender: 'f', plural: 'Kenntnisse', pos: 'noun', level: 'B2', en: 'knowledge', hi: 'जानकारी', ex: 'Infolgedessen passte deine Kenntnis perfekt.', exEn: 'As a consequence, your knowledge fit perfectly.', exHi: 'Parinaamswaroop, tumhaari jaankaari poori tarah se fit hui.', ex2: 'Ihre Kenntnisse in Marketing sind hervorragend.', ex2En: 'Her knowledge of marketing is excellent.', ex2Hi: 'Marketing mein uski jaankaari utkrisht hai.' },
    { de: 'Konzeption', art: 'die', gender: 'f', plural: 'Konzeptionen', pos: 'noun', level: 'B2', en: 'conception, design', hi: 'संकल्पना', ex: 'Infolgedessen kreierten wir eine neue Konzeption.', exEn: 'As a consequence, we created a new conception.', exHi: 'Parinaamswaroop, humne ek nayi sankalpana banaayi.', ex2: 'Die Konzeption des Projekts überzeugte alle.', ex2En: 'The conception of the project convinced everyone.', ex2Hi: 'Project ki sankalpana ne sabko convince kiya.' },
    { de: 'Koordination', art: 'die', gender: 'f', plural: 'Koordinationen', pos: 'noun', level: 'B2', en: 'coordination', hi: 'समन्वय', ex: 'Die Koordination zwischen den Abteilungen war lästig.', exEn: 'The coordination between the departments was annoying.', exHi: 'Vibhaagon ke beech samanvay pareshaan karne waala tha.', ex2: 'Gute Koordination spart Zeit.', ex2En: 'Good coordination saves time.', ex2Hi: 'Achha samanvay samay bachaata hai.' },
    { de: 'kreieren', pos: 'verb', level: 'B2', en: 'to create', hi: 'बनाना', ex: 'Infolgedessen kreierten wir eine neue Konzeption.', exEn: 'As a consequence, we created a new conception.', exHi: 'Parinaamswaroop, humne ek nayi sankalpana banaayi.', ex2: 'Der Künstler kreiert ständig neue Werke.', ex2En: 'The artist constantly creates new works.', ex2Hi: 'Kalaakaar lagataar naye kaam banaata hai.', conj: { praesens: 'kreiert', praeteritum: 'kreierte', perfekt: 'hat kreiert' } },
    { de: 'lästig', pos: 'adjective', level: 'B2', en: 'annoying, bothersome', hi: 'परेशान करने वाला', ex: 'Die Koordination zwischen den Abteilungen war lästig.', exEn: 'The coordination between the departments was annoying.', exHi: 'Vibhaagon ke beech samanvay pareshaan karne waala tha.', ex2: 'Diese ständigen Unterbrechungen sind lästig.', ex2En: 'These constant interruptions are annoying.', ex2Hi: 'Yeh lagataar rukaavtein pareshaan karti hain.' },
    { de: 'lecker', pos: 'adjective', level: 'B2', en: 'tasty, delicious', hi: 'स्वादिष्ट', ex: 'Das Essen war sehr lecker.', exEn: 'The food was very tasty.', exHi: 'Khaana bahut swaadisht tha.', ex2: 'Der Kuchen schmeckt lecker.', ex2En: 'The cake tastes delicious.', ex2Hi: 'Cake swaadisht lagta hai.' },
    { de: 'liegen', pos: 'verb', level: 'B2', en: 'to lie, be located', hi: 'स्थित होना', ex: 'Das Büro liegt im Zentrum.', exEn: 'The office is located in the centre.', exHi: 'Office kendra mein sthit hai.', ex2: 'Die Firma liegt an der Hauptstraße.', ex2En: 'The company is located on the main street.', ex2Hi: 'Company mukhya sadak par sthit hai.', conj: { praesens: 'liegt', praeteritum: 'lag', perfekt: 'hat gelegen' } },
    { de: 'locken', pos: 'verb', level: 'B2', en: 'to lure, entice', hi: 'लुभाना', ex: 'Das Angebot lockte viele Kunden an.', exEn: 'The offer lured many customers.', exHi: 'Prastaav ne kai graahakon ko lubhaaya.', ex2: 'Der niedrige Preis lockt Käufer.', ex2En: 'The low price entices buyers.', ex2Hi: 'Kam daam khareedaaron ko lubhaata hai.', conj: { praesens: 'lockt', praeteritum: 'lockte', perfekt: 'hat gelockt' } },
    { de: 'lösen', pos: 'verb', level: 'B2', en: 'to solve, resolve, loosen', hi: 'हल करना', ex: 'Sie lösten das Problem gemeinsam.', exEn: 'They solved the problem together.', exHi: 'Unhone milkar samasya hal ki.', ex2: 'Die Schraube lässt sich leicht lösen.', ex2En: 'The screw can be loosened easily.', ex2Hi: 'Screw ko aasaani se dheela kiya ja sakta hai.', conj: { praesens: 'löst', praeteritum: 'löste', perfekt: 'hat gelöst' } },
    { de: 'loswerden', pos: 'verb', level: 'B2', en: 'to get rid of', hi: 'से छुटकारा पाना', ex: 'Er will die alten Möbel loswerden.', exEn: 'He wants to get rid of the old furniture.', exHi: 'Woh purane furniture se chhutkaara paana chaahta hai.', ex2: 'Sie wurde ihre Zweifel endlich los.', ex2En: 'She finally got rid of her doubts.', ex2Hi: 'Usne aakhirkaar apne shakon se chhutkaara paaya.', conj: { praesens: 'wird los', praeteritum: 'wurde los', perfekt: 'ist losgeworden' } },
    { de: 'Manufaktur', art: 'die', gender: 'f', plural: 'Manufakturen', pos: 'noun', level: 'B2', en: 'manufactory, workshop', hi: 'हस्तनिर्माण शाला', ex: 'Die Manufaktur produziert handgemachte Möbel.', exEn: 'The manufactory produces handmade furniture.', exHi: 'Yeh manufactory haath se bane furniture banaati hai.', ex2: 'Er arbeitet in einer kleinen Manufaktur.', ex2En: 'He works in a small workshop.', ex2Hi: 'Woh ek chhote workshop mein kaam karta hai.' },
    { de: 'mutig', pos: 'adjective', level: 'B2', en: 'brave, courageous', hi: 'साहसी', ex: 'Das war eine mutige Entscheidung.', exEn: 'That was a brave decision.', exHi: 'Yeh ek saahasi faisla tha.', ex2: 'Sie ist sehr mutig.', ex2En: 'She is very brave.', ex2Hi: 'Woh bahut saahasi hai.' },
    { de: 'nachgehen', pos: 'verb', level: 'B2', en: 'to pursue, look into', hi: 'जांच करना', ex: 'Die Polizei geht dem Fall nach.', exEn: 'The police are looking into the case.', exHi: 'Police is maamle ki jaanch kar rahi hai.', ex2: 'Er geht seinen Interessen nach.', ex2En: 'He pursues his interests.', ex2Hi: 'Woh apne ruchiyon ka anusaran karta hai.', conj: { praesens: 'geht nach', praeteritum: 'ging nach', perfekt: 'ist nachgegangen' } },
    { de: 'Nationalität', art: 'die', gender: 'f', plural: 'Nationalitäten', pos: 'noun', level: 'B2', en: 'nationality', hi: 'राष्ट्रीयता', ex: 'Welche Nationalität hat er?', exEn: 'What nationality does he have?', exHi: 'Uski raashtriyata kya hai?', ex2: 'Das Team besteht aus verschiedenen Nationalitäten.', ex2En: 'The team consists of various nationalities.', ex2Hi: 'Team vibhinn raashtriyaton se milkar bana hai.' },
    { de: 'Neukundengewinnung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'acquisition of new customers', hi: 'नए ग्राहक अधिग्रहण', ex: 'Die Werbeagentur suchte jemanden für die Neukundengewinnung.', exEn: 'The advertising agency was looking for someone for the acquisition of new customers.', exHi: 'Vigyaapan agency naye graahak adhigrahan ke liye kisi ki khoj mein thi.', ex2: 'Neukundengewinnung ist für das Wachstum wichtig.', ex2En: 'Acquisition of new customers is important for growth.', ex2Hi: 'Vikaas ke liye naye graahak adhigrahan mahatvapurn hai.' },
    { de: 'Organisation', art: 'die', gender: 'f', plural: 'Organisationen', pos: 'noun', level: 'B2', en: 'organisation', hi: 'संगठन', ex: 'Infolgedessen mussten wir die Organisation verlagern.', exEn: 'As a consequence, we had to shift the organisation.', exHi: 'Parinaamswaroop, humein sangathan sthaanaantarit karna pada.', ex2: 'Die Organisation läuft reibungslos.', ex2En: 'The organisation runs smoothly.', ex2Hi: 'Sangathan sunchaaru roop se chal raha hai.' },
    { de: 'Privatwohnung', art: 'die', gender: 'f', plural: 'Privatwohnungen', pos: 'noun', level: 'B2', en: 'private flat', hi: 'निजी फ्लैट', ex: 'Er hat eine schöne Privatwohnung.', exEn: 'He has a nice private flat.', exHi: 'Uske paas ek achha niji flat hai.', ex2: 'Die Privatwohnung liegt im dritten Stock.', ex2En: 'The private flat is on the third floor.', ex2Hi: 'Niji flat teesri manzil par hai.' },
    { de: 'Projektleitung', art: 'die', gender: 'f', plural: 'Projektleitungen', pos: 'noun', level: 'B2', en: 'project management', hi: 'परियोजना नेतृत्व', ex: 'Die Projektleitung ist unverzichtbar, sodass wir die Strukturierung sofort vertiefen müssen.', exEn: 'Project management is indispensable, so that we must deepen the structuring immediately.', exHi: 'Pariyojana netritva aparihaarya hai, jiske parinaamswaroop humein sanrachna ko turant gehan karna hoga.', ex2: 'Die Projektleitung übernimmt Anna.', ex2En: 'Anna is taking over the project management.', ex2Hi: 'Anna pariyojana netritva sambhaal rahi hai.' },
    { de: 'psychisch', pos: 'adjective', level: 'B2', en: 'psychological, mental', hi: 'मानसिक', ex: 'Die Belastung ist psychisch sehr hoch.', exEn: 'The strain is very high psychologically.', exHi: 'Tanav maansik roop se bahut uncha hai.', ex2: 'Psychische Gesundheit ist genauso wichtig.', ex2En: 'Mental health is just as important.', ex2Hi: 'Maansik swaasthya bhi utna hi mahatvapurn hai.' },
    { de: 'reichen', pos: 'verb', level: 'B2', en: 'to be enough, pass, reach', hi: 'पर्याप्त होना', ex: 'Die Veranstaltungsagentur reichte für den ganzen Umzug nicht.', exEn: 'The event agency wasn\'t enough for the whole move.', exHi: 'Aayojan agency poore sthaanaantaran ke liye kaafi nahi thi.', ex2: 'Das Geld reicht nicht mehr.', ex2En: 'The money isn\'t enough anymore.', ex2Hi: 'Paisa ab kaafi nahi hai.', conj: { praesens: 'reicht', praeteritum: 'reichte', perfekt: 'hat gereicht' } },
    { de: 'Rezeptur', art: 'die', gender: 'f', plural: 'Rezepturen', pos: 'noun', level: 'B2', en: 'formula, recipe', hi: 'सूत्र', ex: 'Die Rezeptur ist ein Geheimnis.', exEn: 'The formula is a secret.', exHi: 'Sootra ek raaz hai.', ex2: 'Die Rezeptur wurde seit Jahren nicht verändert.', ex2En: 'The formula hasn\'t been changed for years.', ex2Hi: 'Sootra saalon se badla nahi gaya hai.' },
    { de: 'rudern', pos: 'verb', level: 'B2', en: 'to row', hi: 'नाव खेना', ex: 'Sie rudern über den See.', exEn: 'They row across the lake.', exHi: 'Woh jheel ke paar naav khete hain.', ex2: 'Er rudert jeden Morgen.', ex2En: 'He rows every morning.', ex2Hi: 'Woh har subah naav khe ta hai.', conj: { praesens: 'rudert', praeteritum: 'ruderte', perfekt: 'hat gerudert' } },
    { de: 'Selbstdarstellung', art: 'die', gender: 'f', plural: 'Selbstdarstellungen', pos: 'noun', level: 'B2', en: 'self-presentation', hi: 'आत्म-प्रस्तुति', ex: 'Ich habe eingesehen, dass die Selbstdarstellung im Vorstellungsgespräch entscheidend war.', exEn: 'I have realised that self-presentation in the job interview was decisive.', exHi: 'Maine samajh liya hai ki naukri interview mein aatma-prastuti nirnaayak thi.', ex2: 'Gute Selbstdarstellung erfordert Übung.', ex2En: 'Good self-presentation requires practice.', ex2Hi: 'Achhi aatma-prastuti ke liye abhyaas chahiye.' },
    { de: 'Stellenausschreibung', art: 'die', gender: 'f', plural: 'Stellenausschreibungen', pos: 'noun', level: 'B2', en: 'job posting', hi: 'नौकरी विज्ञापन', ex: 'Die Stellenausschreibung war sehr attraktiv, sodass ich mich sofort bewarb.', exEn: 'The job posting was very attractive, so that I applied immediately.', exHi: 'Naukri vigyaapan bahut aakarshak tha, jiske parinaamswaroop maine turant aavedan kiya.', ex2: 'Die Stellenausschreibung wurde heute veröffentlicht.', ex2En: 'The job posting was published today.', ex2Hi: 'Naukri vigyaapan aaj prakaashit hua.' },
    { de: 'stimmen', pos: 'verb', level: 'B2', en: 'to be correct, vote, be right/true', hi: 'सही होना, मतदान करना', ex: 'Das stimmt genau.', exEn: 'That is exactly correct.', exHi: 'Yeh bilkul sahi hai.', ex2: 'Wir stimmen über den Vorschlag ab.', ex2En: 'We vote on the proposal.', ex2Hi: 'Hum prastaav par matdaan karte hain.', conj: { praesens: 'stimmt', praeteritum: 'stimmte', perfekt: 'hat gestimmt' } },
    { de: 'Strukturierung', art: 'die', gender: 'f', plural: 'Strukturierungen', pos: 'noun', level: 'B2', en: 'structuring', hi: 'संरचना', ex: 'Die Projektleitung ist unverzichtbar, sodass wir die Strukturierung sofort vertiefen müssen.', exEn: 'Project management is indispensable, so that we must deepen the structuring immediately.', exHi: 'Pariyojana netritva aparihaarya hai, jiske parinaamswaroop humein sanrachna ko turant gehan karna hoga.', ex2: 'Die Strukturierung des Textes ist klar.', ex2En: 'The structuring of the text is clear.', ex2Hi: 'Text ki sanrachna spasht hai.' },
    { de: 'subventionieren', pos: 'verb', level: 'B2', en: 'to subsidise', hi: 'सब्सिडी देना', ex: 'Unser Kunde ist winzig, sodass wir ihn kaum subventionieren können.', exEn: 'Our client is tiny, so that we can hardly subsidise him.', exHi: 'Hamaara graahak bahut chhota hai, jiske parinaamswaroop hum use shaayad hi subsidy de sakte hain.', ex2: 'Der Staat subventioniert erneuerbare Energien.', ex2En: 'The state subsidises renewable energy.', ex2Hi: 'Sarkaar navinikaraniya oorja ko subsidy deti hai.', conj: { praesens: 'subventioniert', praeteritum: 'subventionierte', perfekt: 'hat subventioniert' } },
    { de: 'Transparenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'transparency', hi: 'पारदर्शिता', ex: 'Die Gewerkschaft forderte mehr Transparenz.', exEn: 'The trade union demanded more transparency.', exHi: 'Vyapaar sangh ne zyada paardarshita ki maang ki.', ex2: 'Transparenz schafft Vertrauen.', ex2En: 'Transparency creates trust.', ex2Hi: 'Paardarshita vishwaas paida karti hai.' },
    { de: 'umrunden', pos: 'verb', level: 'B2', en: 'to circle, go around', hi: 'चारों ओर घूमना', ex: 'Der Läufer umrundet den Park.', exEn: 'The runner circles the park.', exHi: 'Runner park ke chaaron taraf ghoomta hai.', ex2: 'Sie umrundeten den See per Fahrrad.', ex2En: 'They went around the lake by bicycle.', ex2Hi: 'Unhone cycle se jheel ke chaaron taraf chakkar lagaaya.', conj: { praesens: 'umrundet', praeteritum: 'umrundete', perfekt: 'hat umrundet' } },
    { de: 'umschreiben', pos: 'verb', level: 'B2', en: 'to paraphrase, circumscribe', hi: 'दोबारा शब्दों में लिखना', ex: 'Er umschreibt das Problem vorsichtig.', exEn: 'He carefully paraphrases the problem.', exHi: 'Woh saavdhaani se samasya ko dobaara shabdon mein likhta hai.', ex2: 'Sie umschrieb ihre Kritik höflich.', ex2En: 'She phrased her criticism politely.', ex2Hi: 'Usne apni aalochana ko vinamrata se shabdon mein likha.', conj: { praesens: 'umschreibt', praeteritum: 'umschrieb', perfekt: 'hat umschrieben' } },
    { de: 'umtauschen', pos: 'verb', level: 'B2', en: 'to exchange, swap', hi: 'बदलना', ex: 'Sie tauschte das Kleid um.', exEn: 'She exchanged the dress.', exHi: 'Usne dress badal li.', ex2: 'Man kann den Artikel innerhalb von 14 Tagen umtauschen.', ex2En: 'One can exchange the item within 14 days.', ex2Hi: '14 dinon ke andar item badla ja sakta hai.', conj: { praesens: 'tauscht um', praeteritum: 'tauschte um', perfekt: 'hat umgetauscht' } },
    { de: 'Umzug', art: 'der', gender: 'm', plural: 'Umzüge', pos: 'noun', level: 'B2', en: 'move, parade', hi: 'स्थानांतरण', ex: 'Die Veranstaltungsagentur reichte für den ganzen Umzug nicht.', exEn: 'The event agency wasn\'t enough for the whole move.', exHi: 'Aayojan agency poore sthaanaantaran ke liye kaafi nahi thi.', ex2: 'Der Umzug fand am Wochenende statt.', ex2En: 'The move took place on the weekend.', ex2Hi: 'Sthaanaantaran weekend par hua.' },
    { de: 'unkompliziert', pos: 'adjective', level: 'B2', en: 'uncomplicated', hi: 'सरल', ex: 'Der Prozess war unkompliziert.', exEn: 'The process was uncomplicated.', exHi: 'Prakriya saral thi.', ex2: 'Sie ist eine unkomplizierte Person.', ex2En: 'She is an uncomplicated person.', ex2Hi: 'Woh ek saral vyakti hai.' },
    { de: 'unverzichtbar', pos: 'adjective', level: 'B2', en: 'indispensable', hi: 'अपरिहार्य', ex: 'Die Projektleitung ist unverzichtbar, sodass wir die Strukturierung sofort vertiefen müssen.', exEn: 'Project management is indispensable, so that we must deepen the structuring immediately.', exHi: 'Pariyojana netritva aparihaarya hai, jiske parinaamswaroop humein sanrachna ko turant gehan karna hoga.', ex2: 'Gute Kommunikation ist unverzichtbar.', ex2En: 'Good communication is indispensable.', ex2Hi: 'Achha sanchaar aparihaarya hai.' },
    { de: 'verankern', pos: 'verb', level: 'B2', en: 'to anchor, embed', hi: 'स्थापित करना', ex: 'Die Regel ist im Gesetz verankert.', exEn: 'The rule is anchored in the law.', exHi: 'Niyam kaanoon mein sthaapit hai.', ex2: 'Sie verankern neue Werte im Unternehmen.', ex2En: 'They embed new values in the company.', ex2Hi: 'Woh company mein naye moolyon ko sthaapit karte hain.', conj: { praesens: 'verankert', praeteritum: 'verankerte', perfekt: 'hat verankert' } },
    { de: 'Veranstaltungsagentur', art: 'die', gender: 'f', plural: 'Veranstaltungsagenturen', pos: 'noun', level: 'B2', en: 'event agency', hi: 'आयोजन एजेंसी', ex: 'Die Veranstaltungsagentur reichte für den ganzen Umzug nicht.', exEn: 'The event agency wasn\'t enough for the whole move.', exHi: 'Aayojan agency poore sthaanaantaran ke liye kaafi nahi thi.', ex2: 'Die Veranstaltungsagentur plant die ganze Feier.', ex2En: 'The event agency plans the entire celebration.', ex2Hi: 'Aayojan agency poori celebration ki yojana banaati hai.' },
    { de: 'verlagern', pos: 'verb', level: 'B2', en: 'to shift, relocate', hi: 'स्थानांतरित करना', ex: 'Infolgedessen mussten wir die Organisation verlagern.', exEn: 'As a consequence, we had to shift the organisation.', exHi: 'Parinaamswaroop, humein sangathan sthaanaantarit karna pada.', ex2: 'Die Firma verlagert ihren Sitz nach Berlin.', ex2En: 'The company is relocating its headquarters to Berlin.', ex2Hi: 'Company apna mukhyaalay Berlin sthaanaantarit kar rahi hai.', conj: { praesens: 'verlagert', praeteritum: 'verlagerte', perfekt: 'hat verlagert' } },
    { de: 'vertiefen', pos: 'verb', level: 'B2', en: 'to deepen, intensify', hi: 'गहन करना', ex: 'Die Projektleitung ist unverzichtbar, sodass wir die Strukturierung sofort vertiefen müssen.', exEn: 'Project management is indispensable, so that we must deepen the structuring immediately.', exHi: 'Pariyojana netritva aparihaarya hai, jiske parinaamswaroop humein sanrachna ko turant gehan karna hoga.', ex2: 'Wir vertiefen unsere Zusammenarbeit.', ex2En: 'We are deepening our collaboration.', ex2Hi: 'Hum apna sahyog gehan kar rahe hain.', conj: { praesens: 'vertieft', praeteritum: 'vertiefte', perfekt: 'hat vertieft' } },
    { de: 'verwöhnen', pos: 'verb', level: 'B2', en: 'to spoil, pamper', hi: 'बिगाड़ना, लाड़ करना', ex: 'Sie verwöhnt ihre Gäste sehr.', exEn: 'She pampers her guests a lot.', exHi: 'Woh apne mehmaanon ko bahut laad karti hai.', ex2: 'Man sollte Kinder nicht zu sehr verwöhnen.', ex2En: 'One shouldn\'t spoil children too much.', ex2Hi: 'Bacchon ko zyada nahi bigaadna chahiye.', conj: { praesens: 'verwöhnt', praeteritum: 'verwöhnte', perfekt: 'hat verwöhnt' } },
    { de: 'Werbeagentur', art: 'die', gender: 'f', plural: 'Werbeagenturen', pos: 'noun', level: 'B2', en: 'advertising agency', hi: 'विज्ञापन एजेंसी', ex: 'Die Werbeagentur suchte jemanden für die Neukundengewinnung.', exEn: 'The advertising agency was looking for someone for the acquisition of new customers.', exHi: 'Vigyaapan agency naye graahak adhigrahan ke liye kisi ki khoj mein thi.', ex2: 'Sie arbeitet bei einer bekannten Werbeagentur.', ex2En: 'She works at a well-known advertising agency.', ex2Hi: 'Woh ek prasiddh vigyaapan agency mein kaam karti hai.' },
    { de: 'Wichtigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'importance', hi: 'महत्व', ex: 'Die Wichtigkeit dieses Themas ist unbestritten.', exEn: 'The importance of this topic is undisputed.', exHi: 'Is vishay ka mahatva anivvaad hai.', ex2: 'Er unterschätzt die Wichtigkeit der Deadline.', ex2En: 'He underestimates the importance of the deadline.', ex2Hi: 'Woh deadline ke mahatva ko kam aankta hai.' },
    { de: 'winzig', pos: 'adjective', level: 'B2', en: 'tiny', hi: 'बहुत छोटा', ex: 'Unser Kunde ist winzig, sodass wir ihn kaum subventionieren können.', exEn: 'Our client is tiny, so that we can hardly subsidise him.', exHi: 'Hamaara graahak bahut chhota hai, jiske parinaamswaroop hum use shaayad hi subsidy de sakte hain.', ex2: 'Das Zimmer ist winzig.', ex2En: 'The room is tiny.', ex2Hi: 'Kamra bahut chhota hai.' },
    { de: 'Zufriedenheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'satisfaction, contentment', hi: 'संतुष्टि', ex: 'Deine Zufriedenheit war deutlich zu erkennen, sodass die Personaler dich sofort hofierten.', exEn: 'Your satisfaction was clearly recognizable, so that the HR staff courted you immediately.', exHi: 'Tumhaari santushti spasht roop se dikh rahi thi, jiske parinaamswaroop HR staff ne turant tumhein khush karne ki koshish ki.', ex2: 'Kundenzufriedenheit steht an erster Stelle.', ex2En: 'Customer satisfaction comes first.', ex2Hi: 'Graahak santushti sabse pehle aati hai.' },
    { de: 'zusammenarbeiten', pos: 'verb', level: 'B2', en: 'to work together, collaborate', hi: 'सहयोग करना', ex: 'Wir arbeiten seit Jahren erfolgreich zusammen.', exEn: 'We have collaborated successfully for years.', exHi: 'Hum saalon se safaltapoorvak sahyog kar rahe hain.', ex2: 'Die Teams arbeiten eng zusammen.', ex2En: 'The teams work closely together.', ex2Hi: 'Teams kariibi roop se sahyog karte hain.', conj: { praesens: 'arbeitet zusammen', praeteritum: 'arbeitete zusammen', perfekt: 'hat zusammengearbeitet' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Konsekutivsatz?',
      body: [ 'A consequence sentence answers: what happened as a result? Cause leads to consequence.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Es regnete stark, sodass wir zu Hause blieben.</span>']
        ]
      },
      hinglish: 'Consequence sentence yeh batata hai ki kisi baat ka result kya nikla. Pehle cause aata hai, phir uska result.'
    },
    {
      title: '"sodass"',
      body: [ '"sodass" means "so that / as a result / with the result that." It introduces a subordinate clause — the verb goes to the END.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna war krank, sodass sie nicht zur Arbeit ging.</span>'],
          ['<span class="de">Es schneite stark, sodass der Verkehr stillstand.</span>'],
          ['<span class="de">Rohan lernte viel, sodass er die Prüfung bestand.</span>']
        ]
      },
      hinglish: '"sodass" ka matlab hai "jiske result mein" ya "isliye". Dhyaan rakho ki yeh <b>result</b> batata hai, purpose nahi \u2014 purpose ke liye <b>damit</b> aata hai. "sodass" ek subordinate clause banata hai, isliye verb sentence ke end mein chala jaata hai.'
    },
    {
      title: 'Satzstruktur mit "sodass"',
      body: [ 'The main clause comes first, then a comma, then "sodass" + subordinate clause with verb-final order.' ],
      table: {
        head: ['Main Clause', 'sodass-Nebensatz'],
        rows: [
          ['Es regnete.', 'sodass wir nicht ausgehen konnten.']
        ]
      },
      hinglish: 'Pehle main clause aata hai, phir comma, aur uske baad "sodass" wala clause \u2014 jiska verb sentence ke end mein jaata hai.'
    },
    {
      title: '"infolgedessen"',
      body: [ '"infolgedessen" means "as a consequence / consequently / as a result." It is a Konjunktionaladverb — it STARTS A NEW independent sentence, with the verb in Position 2.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es regnete stark. Infolgedessen blieben wir zu Hause.</span>'],
          ['<span class="de">Die Maschine war defekt. Infolgedessen musste die Produktion gestoppt werden.</span>']
        ]
      },
      hinglish: '"infolgedessen" ka matlab hai "iske result mein" ya "isliye". Yeh Konjunktionaladverb hai, matlab yeh ek naya poora sentence shuru karta hai \u2014 aur uske turant baad verb aata hai, Position 2 par.'
    },
    {
      title: '"sodass" vs "infolgedessen"',
      body: [ 'Compare the two structures directly — subordinate clause versus independent sentence.' ],
      table: {
        head: ['sodass', 'infolgedessen'],
        rows: [
          ['Subordinate clause', 'Independent sentence'],
          ['Verb at END', 'Verb in Position 2'],
          ['<span class="de">Es war kalt, sodass wir drinnen blieben.</span>', '<span class="de">Es war kalt. Infolgedessen blieben wir drinnen.</span>']
        ]
      },
      hinglish: 'Dono ko saath rakh kar dekho. <b>sodass</b> ek hi sentence ke andar subordinate clause banata hai, aur <b>infolgedessen</b> ek alag naya sentence shuru karta hai. Yahi asli fark hai.'
    },
    {
      title: 'Ursache vs. Folge (Cause vs Consequence)',
      body: [ 'Never confuse the direction of the logic — weil gives the reason, sodass gives the result.' ],
      table: {
        head: ['weil (Grund/Reason)', 'sodass (Folge/Result)'],
        rows: [
          ['<span class="de">Ich blieb zu Hause, weil ich krank war.</span>', '<span class="de">Ich war krank, sodass ich zu Hause blieb.</span>']
        ]
      },
      hinglish: 'Direction ka dhyaan rakho \u2014 <b>weil</b> batata hai ki kyun hua, aur <b>sodass</b> batata hai ki uske baad kya hua. Dono ek hi baat ko ulti taraf se kehte hain.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"infolgedessen" is very common in reports, newspapers, business German, and scientific writing. "sodass" works in both speaking and writing.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from mixing up sentence boundaries and word order between the two structures.' ],
      mistakes: [
        { wrong: 'Es regnete, infolgedessen wir blieben zu Hause.', right: 'Es regnete. Infolgedessen blieben wir zu Hause.', why: '"infolgedessen" starts a NEW sentence — the verb must come in Position 2, right after it, not at the end.' },
        { wrong: 'Es regnete sodass wir blieben.', right: 'Es regnete, sodass wir blieben.', why: 'A comma is required before "sodass" — it introduces a subordinate clause.' },
        { wrong: 'Infolgedessen wir gingen nach Hause.', right: 'Infolgedessen gingen wir nach Hause.', why: 'After "infolgedessen", the verb must come immediately (Position 2) — not the subject first.' },
        { wrong: 'Sie war krank sodass ging sie nicht.', right: 'Sie war krank, sodass sie nicht ging.', why: 'Two things are missing: the comma before "sodass", and verb-final order inside the clause \u2014 "sie nicht ging", not "ging sie nicht".' },
        { wrong: 'Es regnete, sodass wir gingen nicht.', right: 'Es regnete, sodass wir nicht gingen.', why: 'In the "sodass"-clause, "nicht" comes before the verb, which stays at the very end: "nicht gingen".' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki dono structures ka word order mila diya jaata hai \u2014 "sodass" ke baad verb end mein jaata hai, par "infolgedessen" ke baad verb turant aata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Both structures appear frequently in Goethe B2 reports, presentations, and workplace writing.' ],
      note: 'Memory trick: sodass = one sentence, verb at the END. infolgedessen = new sentence, verb in Position 2. Need a subordinate clause? Use sodass. Need a formal independent sentence? Use infolgedessen.',
      hinglish: 'Dono Goethe B2 ke reports, presentations aur workplace writing mein aksar aate hain, isliye dono ka word order pakka karna zaroori hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Fallstudie: Wie eine kleine Werbeagentur wuchs',
    titleEn: 'Case study: how a small ad agency grew',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Werbeagentur', role: 'plain', en: 'ad agency', hi: 'विज्ञापन एजेंसी', type: 'Noun · fem.', why: 'die Werbeagentur (this chapter).' },
      { w: 'Kolibri', role: 'plain', en: 'Kolibri', hi: 'कोलिब्री', type: 'Name' },
      { w: 'hatte', role: 'plain', en: 'had', hi: 'था', type: 'Verb · haben' },
      { w: 'vor', role: 'plain', en: 'ago', hi: 'पहले', type: 'Preposition' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'kleines', role: 'plain', en: 'small', hi: 'छोटा', type: 'Adjective' },
      { w: 'Budget', role: 'plain', en: 'budget (Satzende)', hi: 'बजट (Satzende)', type: 'Noun · neut.', why: 'das Budget (this chapter).' },
      { w: ',', plain: true },
      { w: 'sodass', role: 'r-connector', en: 'so that', hi: 'ताकि', type: 'Konsekutivkonjunktion · sodass', why: 'sodass introduces a consequence clause: sentence + sodass + result (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Projektleitung', role: 'plain', en: 'project management', hi: 'परियोजना प्रबंधन', type: 'Noun · fem.', why: 'die Projektleitung (this chapter).' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Kalkulation', role: 'plain', en: 'calculation', hi: 'गणना', type: 'Noun · fem.', why: 'die Kalkulation (this chapter).' },
      { w: 'zweimal', role: 'plain', en: 'twice', hi: 'दो बार', type: 'Adverb' },
      { w: 'prüfen', role: 'plain', en: 'check (Satzende)', hi: 'जाँचना (Satzende)', type: 'Verb · prüfen (Nebensatz, Satzende)' },
      { w: 'musste', role: 'plain', en: 'had to (Satzende)', hi: 'पड़ा (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Geschäftsführerin', role: 'plain', en: 'CEO (f.)', hi: 'मुख्य कार्यकारी', type: 'Noun · fem.' },
      { w: 'setzte', role: 'plain', en: 'set', hi: 'निर्धारित किया', type: 'Verb · setzen' },
      { w: 'dennoch', role: 'plain', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'konsequent', role: 'plain', en: 'consistently', hi: 'निरंतर रूप से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Neukundengewinnung', role: 'plain', en: 'new-customer acquisition (Satzende)', hi: 'नए ग्राहक अधिग्रहण (Satzende)', type: 'Noun · fem.', why: 'die Neukundengewinnung (this chapter).' },
      { w: ',', plain: true },
      { w: 'sodass', role: 'r-connector', en: 'so that', hi: 'ताकि', type: 'Konsekutivkonjunktion · sodass' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Auftragslage', role: 'plain', en: 'order situation', hi: 'ऑर्डर की स्थिति', type: 'Noun · fem.' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'halben', role: 'plain', en: 'half', hi: 'आधे', type: 'Adjective' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: 'साल (Satzende)', type: 'Noun · neut.' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'स्पष्ट रूप से', type: 'Adverb' },
      { w: 'verbesserte', role: 'plain', en: 'improved (Satzende)', hi: 'सुधार गई (Satzende)', type: 'Verb · sich verbessern (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Infolgedessen', role: 'r-connector', en: 'as a result of this', hi: 'इसके परिणामस्वरूप', type: 'Konsekutivadverb · infolgedessen', why: 'infolgedessen begins its own main clause with the finite verb in position 2 — an alternative to sodass (this chapter).' },
      { w: 'konnte', role: 'plain', en: 'could (linke Klammer)', hi: 'सकी (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Agentur', role: 'plain', en: 'agency', hi: 'एजेंसी', type: 'Noun · fem.' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective' },
      { w: 'Mitarbeiter', role: 'plain', en: 'employees', hi: 'कर्मचारी', type: 'Noun · plural' },
      { w: 'einstellen', role: 'plain', en: 'hire (rechte Klammer)', hi: 'नियुक्त करना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Zusammenarbeit', role: 'plain', en: 'cooperation', hi: 'सहयोग', type: 'Noun · fem.' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इतना', type: 'Adverb', why: 'so … dass = so … that: the classic Konsekutivsatz pattern (this chapter).' },
      { w: 'eng', role: 'plain', en: 'close', hi: 'नज़दीकी', type: 'Adjective' },
      { w: 'geworden', role: 'plain', en: 'become (Satzende)', hi: 'हो गई (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass (nach so … dass)' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'große', role: 'plain', en: 'large', hi: 'बड़े', type: 'Adjective' },
      { w: 'Kunden', role: 'plain', en: 'clients', hi: 'ग्राहक', type: 'Noun · plural' },
      { w: 'exklusiv', role: 'plain', en: 'exclusively', hi: 'विशेष रूप से', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Kolibri', role: 'plain', en: 'Kolibri', hi: 'कोलिब्री', type: 'Name' },
      { w: 'zusammenarbeiten', role: 'plain', en: 'cooperate (Satzende)', hi: 'साथ काम करते हैं (Satzende)', type: 'Verb · zusammenarbeiten (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Infolgedessen', role: 'r-connector', en: 'as a result', hi: 'नतीजतन', type: 'Adverb · Konsekutiv', why: 'infolgedessen = as a consequence (this chapter).' },
      { w: 'plant', role: 'plain', en: 'plans', hi: 'योजना बनाती है', type: 'Verb · planen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Agentur', role: 'plain', en: 'agency', hi: 'एजेंसी', type: 'Noun · fem.' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'eigenes', role: 'plain', en: 'own', hi: 'अपना', type: 'Adjective' },
      { w: 'Beratungsteam', role: 'plain', en: 'consulting team', hi: 'परामर्श टीम', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'sodass', role: 'r-connector', en: 'so that', hi: 'ताकि', type: 'Konjunktion · Konsekutiv', why: 'sodass introduces a consequence clause (this chapter).' },
      { w: 'künftig', role: 'plain', en: 'in future', hi: 'भविष्य में', type: 'Adverb' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'kleinere', role: 'plain', en: 'smaller', hi: 'छोटे', type: 'Adjective' },
      { w: 'Kunden', role: 'plain', en: 'clients', hi: 'ग्राहक', type: 'Noun · plural' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'wachsenden', role: 'plain', en: 'growing', hi: 'बढ़ते हुए', type: 'Adjective' },
      { w: 'Erfahrung', role: 'plain', en: 'experience (Satzende)', hi: 'अनुभव (Satzende)', type: 'Noun · fem.' },
      { w: 'profitieren', role: 'plain', en: 'benefit (Satzende)', hi: 'लाभ उठा सकते हैं (Satzende)', type: 'Verb · Infinitiv' },
      { w: 'können', role: 'plain', en: 'can (Satzende)', hi: '(Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The ad agency Kolibri had a small budget two years ago, so that the project management had to check every calculation twice. The CEO nevertheless consistently set her sights on new-customer acquisition, so that the order situation noticeably improved after just half a year. As a result, the agency was able to hire two new employees. Today the cooperation has become so close that two large clients work exclusively with Kolibri. As a result, the agency is planning its own consulting team, so that smaller clients can also benefit from its growing experience in future.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_016_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe die Stelle bei der Werbeagentur bekommen!', en: 'Timo, I got the job at the ad agency!' },
      { id: 'B2_016_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das ist großartig! Musst du deshalb umziehen?', en: 'That\'s great! Do you have to move because of that?' },
      { id: 'B2_016_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, die Agentur liegt so weit weg, dass ein Umzug unvermeidbar ist. Infolgedessen suche ich schon nach einer Wohnung dort.', en: 'Yes, the agency is so far away that moving is unavoidable. As a result, I\'m already looking for an apartment there.' },
      { id: 'B2_016_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wenn du Hilfe beim Packen brauchst, sag Bescheid.', en: 'If you need help packing, let me know.' }
    ],
    transcript: 'Timo, ich habe die Stelle bei der Werbeagentur bekommen! Das ist großartig! Musst du deshalb umziehen? Ja, die Agentur liegt so weit weg, dass ein Umzug unvermeidbar ist. Infolgedessen suche ich schon nach einer Wohnung dort. Wenn du Hilfe beim Packen brauchst, sag Bescheid.',
    translation: 'Timo, I got the job at the ad agency! That\'s great! Do you have to move because of that? Yes, the agency is so far away that moving is unavoidable. As a result, I\'m already looking for an apartment there. If you need help packing, let me know.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'die' },
      { w: 'Stelle' },
      { w: 'bei' },
      { w: 'der' },
      { w: 'Werbeagentur' },
      { w: 'bekommen' },
      { w: '!', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'großartig' },
      { w: '!', plain: true },
      { w: 'Musst' },
      { w: 'du' },
      { w: 'deshalb' },
      { w: 'umziehen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Agentur' },
      { w: 'liegt' },
      { w: 'so' },
      { w: 'weit' },
      { w: 'weg' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'ein' },
      { w: 'Umzug' },
      { w: 'unvermeidbar' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Infolgedessen' },
      { w: 'suche' },
      { w: 'ich' },
      { w: 'schon' },
      { w: 'nach' },
      { w: 'einer' },
      { w: 'Wohnung' },
      { w: 'dort' },
      { w: '.', plain: true },
      { w: 'Wenn' },
      { w: 'du' },
      { w: 'Hilfe' },
      { w: 'beim' },
      { w: 'Packen' },
      { w: 'brauchst' },
      { w: ',', plain: true },
      { w: 'sag' },
      { w: 'Bescheid' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Neuigkeit erzählt Frauke?', qEn: 'What news does Frauke share?', options: ['Sie hat gekündigt.', 'Sie hat die Stelle bekommen.', 'Sie zieht ins Ausland.', 'Sie sucht einen neuen Job.'], optionsEn: ['She has resigned.', 'She got the job.', 'She is moving abroad.', 'She is looking for a new job.'], answer: 1,
        explain: '"Ich habe die Stelle bei der Werbeagentur bekommen!"' },
      { q: 'Warum muss Frauke umziehen?', qEn: 'Why must Frauke move?', options: ['Die Miete ist zu hoch.', 'Die Agentur liegt zu weit weg.', 'Sie möchte einfach umziehen.', 'Ihr Vertrag verlangt es.'], optionsEn: ['The rent is too high.', 'The agency is too far away.', 'She simply wants to move.', 'Her contract requires it.'], answer: 1,
        explain: '"… die Agentur liegt so weit weg, dass ein Umzug unvermeidbar ist."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Du hast die Stelle bei der Werbeagentur. Sag, was daraus folgt.", taskEn: "You got the job at the ad agency. Say what follows from it.", de: "Die Agentur liegt so weit weg, dass ein Umzug nötig ist.", en: "The agency is so far away that a move is necessary." },
    { task: "Dein Freund fragt, was das für die Wohnung bedeutet.", taskEn: "Your friend asks what that means for the flat.", de: "Ich ziehe um, infolgedessen kündige ich die Wohnung.", en: "I'm moving, consequently I'm giving notice on the flat." },
    { task: "Deine Chefin fragt, warum die Kalkulation nicht fertig ist.", taskEn: "Your boss asks why the costing isn't finished.", de: "Die Kenntnisse fehlten, infolgedessen habe ich Hilfe geholt.", en: "The knowledge was missing, consequently I got help." },
    { task: "Eine Kollegin fragt, wie die Koordination lief.", taskEn: "A colleague asks how the coordination went.", de: "Die Absprachen waren so unklar, dass zwei Teams doppelt gearbeitet haben.", en: "The arrangements were so unclear that two teams duplicated work." },
    { task: "Ein Kollege fragt nach der Gutschrift für den Kunden.", taskEn: "A colleague asks about the credit note for the customer.", de: "Der Fehler war unser, infolgedessen bekommt er eine Gutschrift.", en: "The error was ours, consequently he'll get a credit note." },
    { task: "Rollenspiel: Ihr berichtet über die Karriereplanung.", taskEn: "Role-play: you report on career planning.", de: "Die Konzeption war so gut, dass wir gewonnen haben. — Infolgedessen brauchen wir jetzt mehr Personal.", en: "The concept was so good that we won. — Consequently we now need more staff." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short workplace report or email (six to eight sentences) about a project or career decision — using "sodass" at least twice and "infolgedessen" at least twice, making sure infolgedessen always starts a new sentence with the verb in Position 2.',
    starters: ['Die Situation war …, sodass …', '… . Infolgedessen …'],
    placeholder: 'Die Stellenausschreibung war sehr attraktiv, sodass ich mich sofort bewarb …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "infolgedessen" correctly?',
      options: ['Es regnete. Infolgedessen blieben wir zu Hause.', 'Es regnete, infolgedessen wir blieben zu Hause.', 'Infolgedessen wir blieben zu Hause.'],
      answer: 0,
      explain: '"infolgedessen" starts a new sentence with the verb in Position 2.'
    },
    gap: {
      sentence: ['Es schneite stark, ', ' der Verkehr stillstand.'],
      gaps: [ { answer: 'sodass', accepts: ['sodass'] } ],
      explain: '"sodass" introduces the subordinate clause with verb-final word order.'
    },
    match: {
      q: 'Match each structure to its word order.',
      pairs: [
        { noun: 'sodass', art: 'Verb at the END' },
        { noun: 'infolgedessen', art: 'Verb in Position 2' },
        { noun: 'weil', art: 'Verb at the END' }
      ]
    },
    builder: {
      target: 'Build: "It was cold, so that we stayed inside."',
      bank: ['Es', 'war', 'kalt', ',', 'sodass', 'wir', 'drinnen', 'blieben', '.'],
      answer: ['Es', 'war', 'kalt', ',', 'sodass', 'wir', 'drinnen', 'blieben', '.'],
      roles: { 'sodass': 'r-sodass' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Infolgedessen wir gingen nach Hause.',
      right: 'Infolgedessen gingen wir nach Hause.',
      explain: 'After "infolgedessen", the verb must come immediately in Position 2 — not the subject first.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Where does the verb go in a "sodass"-clause?', options: ['At the end', 'In Position 2', 'At the start'], answer: 0,
      explain: '"sodass" introduces a subordinate clause — the verb goes to the very end.' },
    { q: 'Where does the verb go after "infolgedessen"?', options: ['In Position 2', 'At the end', 'It disappears'], answer: 0,
      explain: '"infolgedessen" is a Konjunktionaladverb starting a new sentence — verb follows immediately in Position 2.' },
    { q: 'Which word expresses REASON, not consequence?', options: ['weil', 'sodass', 'infolgedessen'], answer: 0,
      explain: '"weil" gives the reason; "sodass" and "infolgedessen" give the result.' },
    { q: 'Which register is "infolgedessen" typically used in?', options: ['Formal, written', 'Very casual slang', 'Baby talk'], answer: 0,
      explain: '"infolgedessen" is common in reports, newspapers, and business German.' },
    { q: 'Which sentence contains an error?', options: ['Es regnete, sodass wir blieben.', 'Es regnete, infolgedessen wir blieben zu Hause.', 'Es regnete. Infolgedessen blieben wir zu Hause.'], answer: 1,
      explain: '"infolgedessen" must start a new sentence with the verb in Position 2 — it should be "Es regnete. Infolgedessen blieben wir zu Hause."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-sodass', html: '"sodass" introduces a subordinate clause within ONE sentence — the verb goes to the very end.' },
    { c: 'r-infolge', html: '"infolgedessen" starts a brand-new independent sentence — the verb follows immediately in Position 2.' },
    { c: 'r-sodass', html: 'Never confuse cause (weil, da) with consequence (sodass, infolgedessen) — they point in opposite directions of the logic.' }
  ],
  revisionTips: [
    'Before writing "sodass" or "infolgedessen", check: am I continuing one sentence, or starting a new one?',
    'Practise transforming weil-sentences into sodass-sentences to feel the reversed logic.',
    'When writing formally, prefer "infolgedessen" over "sodass" to add register and sentence variety.'
  ]
};

window.CHAPTER = CHAPTER;
