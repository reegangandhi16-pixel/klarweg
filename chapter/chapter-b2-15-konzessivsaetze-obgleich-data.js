/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 15
   "Konzessivsätze: obgleich" — a more formal, written synonym
   for "obwohl". Same meaning, same verb-end word order, but
   register shifts toward reports, newspapers, and formal
   writing. Does NOT introduce wenngleich, auch wenn, trotzdem,
   dennoch, ungeachtet, or C1 stylistic variants (later chapters).
   IMPORTANT: dialogue uses ONLY Ronja and Timo.
   Vocabulary source: uploaded chapter-15 list (55 items, user-edited
   general B2 vocabulary bank — workplace/career/business themes).
============================================================ */
const CHAPTER = {
  id: 'b2-15-konzessivsaetze-obgleich',
  phase: 'B2 · Phase 1',
  number: 15,
  title: 'Konzessivsätze: obgleich',
  titleEn: 'Concessive clauses: obgleich',
  description: 'obgleich means exactly what obwohl means — although — but dressed for a report instead of a conversation.',
  xp: 400,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 16, title: 'Konsekutivsätze: sodass / infolgedessen', titleEn: 'Consequence clauses: sodass / infolgedessen' , href: 'chapter-b2-16-konsekutivsaetze-sodass-infolgedessen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Same meaning, <em>different register.</em>',
    intro: 'Ronja and Timo review a job offer and a company\'s culture — weighing expectations against reality with the more formal "obgleich".',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how "obgleich" elevates a sentence toward formal, written German'
    ],
    scene: 'Das Jobangebot',
    femaleSpeakers: ['Ronja'],
    dialogue: [
      { speaker: 'Ronja', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)', lexicalUnit: 'annehmen' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Angebot', role: 'r-akkusativ', en: 'offer', hi: 'प्रस्ताव', pron: 'AN-ge-boht', type: 'Noun · neut.' },
        { w: 'an', role: 'r-verb', en: '(prefix of annehmen)', hi: '', pron: 'an', type: 'Separable prefix', lexicalUnit: 'annehmen' },
        { w: ',', plain: true },
        { w: 'obgleich', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-GLYKH', type: 'Conjunction · obgleich', why: 'obgleich = although, formal concessive conjunction (this chapter).', ex: 'Ich nehme es an, obgleich es schwierig wird.', exEn: 'I accept it although it will be difficult.' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Anforderungen', role: 'r-subject', en: 'requirements', hi: 'आवश्यकताएँ', pron: 'AN-for-de-run-gen', type: 'Noun · plural', why: 'die Anforderung (this chapter).', ex: 'Die Anforderungen sind hoch.', exEn: 'The requirements are high.' },
        { w: 'hoch', role: 'r-subject', en: 'high', hi: 'ज़्यादा', pron: 'hokh', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I accept the offer, although the requirements are high.', hi: 'Main prastaav sweekaar karti hoon, halaanki aavashyaktaayein zyada hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mutig', role: 'r-akkusativ', en: 'brave', hi: 'साहसी', pron: 'MOO-tikh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Wirst', role: 'r-verb', en: 'will you', hi: 'होगी', pron: 'VIRST', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'budgetverantwortlich', role: 'r-akkusativ', en: 'budget-responsible', hi: 'बजट-ज़िम्मेदार', pron: 'buh-DZHAY-fer-ant-vort-likh', type: 'Adjective', why: 'budgetverantwortlich = responsible for the budget (this chapter).', ex: 'Ich bin budgetverantwortlich.', exEn: 'I am responsible for the budget.' },
        { w: '?', plain: true }
      ], en: 'That is brave. Will you be budget-responsible?', hi: 'Yeh saahasi hai. Kya tum budget ki zimmedaar hogi?' },
      { speaker: 'Ronja', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'obgleich', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-GLYKH', type: 'Conjunction · obgleich' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bisher', role: 'r-adverb', en: 'so far', hi: 'अब तक', pron: 'BIS-hair', type: 'Adverb' },
        { w: 'wenig', role: 'r-akkusativ', en: 'little', hi: 'कम', pron: 'VAY-nikh', type: 'Adverb' },
        { w: 'Erfahrung', role: 'r-akkusativ', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'damit', role: 'r-akkusativ', en: 'with it', hi: 'उसमें', pron: 'da-MIT', type: 'Adverb' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, although so far I have little experience with it.', hi: 'Haan, halaanki ab tak mujhe usmein kam anubhav hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Obgleich', role: 'r-conjunction', en: 'although', hi: 'हालांकि', pron: 'op-GLYKH', type: 'Conjunction · obgleich' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Herausforderung', role: 'r-akkusativ', en: 'challenge', hi: 'चुनौती', pron: 'he-ROWS-for-de-rung', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'wirst', role: 'r-verb', en: 'will you', hi: 'सीख जाओगी', pron: 'VIRST', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'schnell', role: 'r-akkusativ', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: 'lernen', role: 'r-verb', en: 'learn', hi: 'सीखना', pron: 'LAIR-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Although that is a challenge, you will learn it quickly.', hi: 'Halaanki yeh ek chunauti hai, tum ise jaldi seekh jaogi.' },
      { speaker: 'Ronja', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नयी', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Firmenkultur', role: 'r-akkusativ', en: 'company culture', hi: 'कंपनी संस्कृति', pron: 'FIR-men-kul-toor', type: 'Noun · fem.', why: 'die Firmenkultur (this chapter).', ex: 'die Firmenkultur' },
        { w: '.', plain: true }
      ], en: 'Thanks! I look forward to the new company culture.', hi: 'Dhanyavaad! Mujhe nayi company sanskriti ka intezaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-konz">obgleich</span> means exactly what <span class="de">obwohl</span> means — although — with the same verb-end Nebensatz word order. The only difference is register: <span class="de">obgleich</span> belongs in reports, newspapers, and formal writing, where <span class="de">obwohl</span> belongs in everyday speech.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONZESSIVSÄTZE MIT OBGLEICH (B2 level): "obgleich" is a formal, written synonym for "obwohl" — both mean "although" and both introduce a Nebensatz with verb-end word order (Obgleich er krank ist, geht er zur Arbeit. / Wir fahren nach Berlin, obgleich das Wetter schlecht ist.). "obgleich" is more common in reports, newspapers, university writing, and business German, while "obwohl" is more common in spoken, everyday German. The meaning is nearly identical — only the register differs. ' +
    'Do NOT expect wenngleich, auch wenn, trotzdem, dennoch, ungeachtet, or C1 stylistic variants — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "obgleich" clauses must have verb-end word order, and a comma must separate the Nebensatz from the main clause.\n' +
    '- If the Nebensatz comes first, the main clause must start immediately with the finite verb (V2 rule after a fronted subordinate clause).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether "obgleich" fits the formality of the text, or whether "obwohl" would be more natural here.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "obgleich" with verb-end word order and choose it appropriately for formal writing. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the obgleich vs obwohl comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: obgleich = obwohl, but more formal and written.'
  },

  parserSentence: [
    { w: 'Obgleich', role: 'r-konz' }, { w: 'es', role: 'plain' },
    { w: 'regnet', role: 'plain' }, { w: ',', plain: true }, { w: 'gehen', role: 'plain' }, { w: 'wir', role: 'plain' }, { w: 'spazieren', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: obgleich = obwohl, but for formal, written German.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ronja and Timo discuss a job offer, weighing expectations against reality with obgleich.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master obgleich word order, position variations, and when to prefer it over obwohl.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage using obgleich in formal contexts.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify concessive relationships and the contrast between expectation and reality.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe unexpected situations and give presentations using obgleich naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and reports using obgleich appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill obwohl-to-obgleich transformation, sentence ordering, and formal rewriting.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 400 XP.' },
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
      desc: 'obwohl→obgleich transformation, sentence ordering, formal rewriting, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete obgleich reference — word order, position variations, obwohl comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Obgleich es regnet, gehen wir spazieren.', text: 'Use obgleich with correct verb-end word order' },
    { de: 'Wir fahren nach Berlin, obgleich das Wetter schlecht ist.', text: 'Place obgleich after the main clause correctly' },
    { de: 'obgleich vs. obwohl', text: 'Choose the right register for formal vs spoken German' },
    { de: 'Obgleich er krank ist, geht er zur Arbeit.', text: 'Follow correct comma and V2 word order rules' },
    { de: 'Formal report / newspaper / business German', text: 'Use obgleich naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-15 list) ----------
  vocab: [
    { de: 'abkaufen', pos: 'verb', level: 'B2', en: 'to buy off, buy from', hi: 'से खरीदना', ex: 'Er kauft ihm das Auto ab.', exEn: 'He buys the car off him.', exHi: 'Woh usse gaadi khareedta hai.', ex2: 'Sie will ihm die Aktien abkaufen.', ex2En: 'She wants to buy the shares off him.', ex2Hi: 'Woh usse shares khareedna chahti hai.', conj: { praesens: 'kauft ab', praeteritum: 'kaufte ab', perfekt: 'hat abgekauft' } },
    { de: 'Absage', art: 'die', gender: 'f', plural: 'Absagen', pos: 'noun', level: 'B2', en: 'refusal, rejection', hi: 'अस्वीकृति', ex: 'Er erhielt eine Absage.', exEn: 'He received a rejection.', exHi: 'Usse ek asveekriti mili.', ex2: 'Die Absage kam unerwartet.', ex2En: 'The rejection came unexpectedly.', ex2Hi: 'Asveekriti apratyaashit roop se aayi.' },
    { de: 'Anforderung', art: 'die', gender: 'f', plural: 'Anforderungen', pos: 'noun', level: 'B2', en: 'requirement, demand', hi: 'आवश्यकता', ex: 'Obgleich die Anforderung hoch ist, bewerbe ich mich.', exEn: 'Although the requirement is high, I\'m applying.', exHi: 'Halaanki aavashyakta uchi hai, main aavedan kar rahi hoon.', ex2: 'Die Anforderungen sind klar definiert.', ex2En: 'The requirements are clearly defined.', ex2Hi: 'Aavashyaktaayein spasht roop se paribhaashit hain.' },
    { de: 'Angebotserstellung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'quote preparation', hi: 'प्रस्ताव तैयारी', ex: 'Die Angebotserstellung dauert zwei Tage.', exEn: 'The quote preparation takes two days.', exHi: 'Prastaav taiyaari do din leti hai.', ex2: 'Sie ist für die Angebotserstellung zuständig.', ex2En: 'She is responsible for quote preparation.', ex2Hi: 'Woh prastaav taiyaari ke liye zimmedaar hai.' },
    { de: 'angestellt', pos: 'adjective', level: 'B2', en: 'employed', hi: 'नियोजित', ex: 'Er ist seit drei Jahren angestellt.', exEn: 'He has been employed for three years.', exHi: 'Woh teen saal se niyojit hai.', ex2: 'Sie ist fest angestellt.', ex2En: 'She is permanently employed.', ex2Hi: 'Woh sthaayi roop se niyojit hai.' },
    { de: 'animieren', pos: 'verb', level: 'B2', en: 'to animate, encourage', hi: 'प्रोत्साहित करना', ex: 'Die Musik animiert die Gäste zum Tanzen.', exEn: 'The music encourages the guests to dance.', exHi: 'Sangeet mehmaanon ko nachne ke liye protsaahit karta hai.', ex2: 'Er animiert das Team zu mehr Kreativität.', ex2En: 'He encourages the team towards more creativity.', ex2Hi: 'Woh team ko zyada rachnaatmakta ke liye protsaahit karta hai.', conj: { praesens: 'animiert', praeteritum: 'animierte', perfekt: 'hat animiert' } },
    { de: 'Arbeitsmarkt', art: 'der', gender: 'm', plural: 'Arbeitsmärkte', pos: 'noun', level: 'B2', en: 'labour market', hi: 'श्रम बाज़ार', ex: 'Ich werde das Angebot aushandeln, obgleich der Arbeitsmarkt angespannt ist.', exEn: 'I will negotiate the offer, although the labour market is tense.', exHi: 'Main prastaav tay karoonga, halaanki shram baazaar tanaavpurn hai.', ex2: 'Der Arbeitsmarkt hat sich stark verändert.', ex2En: 'The labour market has changed a lot.', ex2Hi: 'Shram baazaar mein bahut badlaav aaya hai.' },
    { de: 'aufmerksam', pos: 'adjective', level: 'B2', en: 'attentive', hi: 'सचेत', ex: 'Sie ist immer sehr aufmerksam.', exEn: 'She is always very attentive.', exHi: 'Woh hamesha bahut sachet rehti hai.', ex2: 'Der Kellner war äußerst aufmerksam.', ex2En: 'The waiter was extremely attentive.', ex2Hi: 'Waiter bahut sachet tha.' },
    { de: 'aufreiben', pos: 'verb', level: 'B2', en: 'to wear down', hi: 'थका देना', ex: 'Die Arbeit reibt ihn völlig auf.', exEn: 'The work wears him down completely.', exHi: 'Kaam use poori tarah se thaka deta hai.', ex2: 'Solche Konflikte reiben das Team auf.', ex2En: 'Such conflicts wear down the team.', ex2Hi: 'Aise sangharsh team ko thaka dete hain.', conj: { praesens: 'reibt auf', praeteritum: 'rieb auf', perfekt: 'hat aufgerieben' } },
    { de: 'Aufzählung', art: 'die', gender: 'f', plural: 'Aufzählungen', pos: 'noun', level: 'B2', en: 'enumeration, list', hi: 'गणना', ex: 'Die Aufzählung enthält alle Punkte.', exEn: 'The enumeration contains all points.', exHi: 'Ganana mein saare bindu shaamil hain.', ex2: 'Eine einfache Aufzählung reicht nicht aus.', ex2En: 'A simple list is not enough.', ex2Hi: 'Ek saadhaaran soochi kaafi nahi hai.' },
    { de: 'Ausarbeitung', art: 'die', gender: 'f', plural: 'Ausarbeitungen', pos: 'noun', level: 'B2', en: 'working-out, elaboration', hi: 'विस्तृत योजना', ex: 'Die Ausarbeitung des Plans dauert lange.', exEn: 'The elaboration of the plan takes long.', exHi: 'Yojana ki vistrit tayyari mein samay lagta hai.', ex2: 'Seine Ausarbeitung war sehr detailliert.', ex2En: 'His elaboration was very detailed.', ex2Hi: 'Uski vistrit tayyari bahut vistrit thi.' },
    { de: 'ausgehen', pos: 'verb', level: 'B2', en: 'to assume, go out', hi: 'मानना, बाहर जाना', ex: 'Ich gehe davon aus, dass du die Grundvoraussetzungen erfüllst.', exEn: 'I assume that you fulfil the basic prerequisites.', exHi: 'Main maanta hoon ki tum mool poorv sharton ko poora karti ho.', ex2: 'Wir gehen heute Abend aus.', ex2En: 'We\'re going out tonight.', ex2Hi: 'Hum aaj raat baahar jaa rahe hain.', conj: { praesens: 'geht aus', praeteritum: 'ging aus', perfekt: 'ist ausgegangen' } },
    { de: 'aushandeln', pos: 'verb', level: 'B2', en: 'to negotiate', hi: 'तय करना', ex: 'Ich werde das Angebot aushandeln, obgleich der Arbeitsmarkt angespannt ist.', exEn: 'I will negotiate the offer, although the labour market is tense.', exHi: 'Main prastaav tay karoonga, halaanki shram baazaar tanaavpurn hai.', ex2: 'Sie handelten einen guten Preis aus.', ex2En: 'They negotiated a good price.', ex2Hi: 'Unhone ek achha daam tay kiya.', conj: { praesens: 'handelt aus', praeteritum: 'handelte aus', perfekt: 'hat ausgehandelt' } },
    { de: 'ausüben', pos: 'verb', level: 'B2', en: 'to practise, exercise (a profession)', hi: 'करना (पेशा)', ex: 'Ich übe meinen Beruf seit fünf Jahren aus, obgleich meine Berufserfahrung begrenzt ist.', exEn: 'I have practised my profession for five years, although my work experience is limited.', exHi: 'Main paanch saal se apna pesha kar rahi hoon, halaanki mera kaam ka anubhav seemit hai.', ex2: 'Er übt seinen Beruf mit Leidenschaft aus.', ex2En: 'He practises his profession with passion.', ex2Hi: 'Woh apna pesha jazbe se karta hai.', conj: { praesens: 'übt aus', praeteritum: 'übte aus', perfekt: 'hat ausgeübt' } },
    { de: 'avancieren', pos: 'verb', level: 'B2', en: 'to advance, rise (to)', hi: 'आगे बढ़ना', ex: 'Sie avancierte zur Abteilungsleiterin.', exEn: 'She advanced to department head.', exHi: 'Woh vibhaag pramukh ban gayi.', ex2: 'Er avancierte schnell in der Firma.', ex2En: 'He advanced quickly in the company.', ex2Hi: 'Woh company mein tezi se aagey badha.', conj: { praesens: 'avanciert', praeteritum: 'avancierte', perfekt: 'ist avanciert' } },
    { de: 'begrenzt', pos: 'adjective', level: 'B2', en: 'limited, restricted', hi: 'सीमित', ex: 'Meine Berufserfahrung ist begrenzt.', exEn: 'My work experience is limited.', exHi: 'Mera kaam ka anubhav seemit hai.', ex2: 'Die Ressourcen sind begrenzt.', ex2En: 'The resources are limited.', ex2Hi: 'Sansaadhan seemit hain.' },
    { de: 'Bekleidung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'clothing', hi: 'पोशाक', ex: 'Die Bekleidung im Büro ist formell.', exEn: 'The clothing in the office is formal.', exHi: 'Office mein poshaak aupcharik hai.', ex2: 'Sie verkauft Bekleidung für Kinder.', ex2En: 'She sells clothing for children.', ex2Hi: 'Woh bacchon ke liye poshaak becti hai.' },
    { de: 'Berufserfahrung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'work experience', hi: 'कार्य अनुभव', ex: 'Ich übe meinen Beruf seit fünf Jahren aus, obgleich meine Berufserfahrung begrenzt ist.', exEn: 'I have practised my profession for five years, although my work experience is limited.', exHi: 'Main paanch saal se apna pesha kar rahi hoon, halaanki mera kaam ka anubhav seemit hai.', ex2: 'Berufserfahrung ist bei dieser Stelle wichtig.', ex2En: 'Work experience is important for this position.', ex2Hi: 'Is pad ke liye kaam ka anubhav mahatvapurn hai.' },
    { de: 'besagen', pos: 'verb', level: 'B2', en: 'to state, mean', hi: 'बताना', ex: 'Das besagt viel über deine Genauigkeit.', exEn: 'That states a lot about your accuracy.', exHi: 'Yeh tumhaari satikta ke baare mein bahut kuch bataata hai.', ex2: 'Was besagt dieser Bericht?', ex2En: 'What does this report state?', ex2Hi: 'Yeh report kya bataati hai?', conj: { praesens: 'besagt', praeteritum: 'besagte', perfekt: 'hat besagt' } },
    { de: 'beschäftigen', pos: 'verb', level: 'B2', en: 'to occupy, employ, deal with', hi: 'व्यस्त रखना, नियुक्त करना', ex: 'Die Firma beschäftigt fünfzig Mitarbeiter.', exEn: 'The company employs fifty employees.', exHi: 'Company pachaas karmchaariyon ko niyukt karti hai.', ex2: 'Er beschäftigt sich mit dem Problem.', ex2En: 'He is dealing with the problem.', ex2Hi: 'Woh samasya se juda hai.', conj: { praesens: 'beschäftigt', praeteritum: 'beschäftigte', perfekt: 'hat beschäftigt' } },
    { de: 'betreiben', pos: 'verb', level: 'B2', en: 'to operate, run', hi: 'चलाना', ex: 'Sie betreibt ein kleines Unternehmen.', exEn: 'She runs a small business.', exHi: 'Woh ek chhota business chalaati hai.', ex2: 'Er betreibt den Laden seit zehn Jahren.', ex2En: 'He has run the shop for ten years.', ex2Hi: 'Woh das saal se dukaan chalaa raha hai.', conj: { praesens: 'betreibt', praeteritum: 'betrieb', perfekt: 'hat betrieben' } },
    { de: 'betreuen', pos: 'verb', level: 'B2', en: 'to look after, care for', hi: 'देखभाल करना', ex: 'Stattdessen habe ich Teambildungsaktivitäten betreut, obgleich die Betreuung nicht in meine eigentliche Rolle fiel.', exEn: 'Instead, I looked after team-building activities, although the care wasn\'t part of my actual role.', exHi: 'Iske bajaay, maine team-nirmaan gatividhiyon ki dekhbhaal ki, halaanki dekhbhaal meri vaastavik bhoomika mein nahi aati thi.', ex2: 'Sie betreut mehrere Kunden gleichzeitig.', ex2En: 'She looks after several clients simultaneously.', ex2Hi: 'Woh ek saath kai graahakon ki dekhbhaal karti hai.', conj: { praesens: 'betreut', praeteritum: 'betreute', perfekt: 'hat betreut' } },
    { de: 'Betreuung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'care, supervision', hi: 'देखभाल', ex: 'Die Betreuung fiel nicht in meine eigentliche Rolle.', exEn: 'The care wasn\'t part of my actual role.', exHi: 'Dekhbhaal meri vaastavik bhoomika mein nahi aati thi.', ex2: 'Die Kinder brauchen ständige Betreuung.', ex2En: 'The children need constant supervision.', ex2Hi: 'Bacchon ko lagaataar dekhbhaal chahiye.' },
    { de: 'budgetverantwortlich', pos: 'adjective', level: 'B2', en: 'responsible for the budget', hi: 'बजट के लिए जिम्मेदार', ex: 'Du warst noch nie budgetverantwortlich.', exEn: 'You\'ve never been responsible for the budget.', exHi: 'Tum kabhi budget ke liye zimmedaar nahi thi.', ex2: 'Er ist budgetverantwortlich für das Projekt.', ex2En: 'He is responsible for the budget for the project.', ex2Hi: 'Woh project ke budget ke liye zimmedaar hai.' },
    { de: 'darüber hinaus', pos: 'adverb', level: 'B2', en: 'moreover, furthermore', hi: 'इसके अलावा', ex: 'Darüber hinaus benötigen wir mehr Zeit.', exEn: 'Moreover, we need more time.', exHi: 'Iske alaawa, humein zyada samay chahiye.', ex2: 'Darüber hinaus ist die Stelle attraktiv.', ex2En: 'Furthermore, the position is attractive.', ex2Hi: 'Iske alaawa, pad aakarshak hai.' },
    { de: 'durchführen', pos: 'verb', level: 'B2', en: 'to carry out, implement', hi: 'क्रियान्वित करना', ex: 'Wir führen das Projekt durch.', exEn: 'We are carrying out the project.', exHi: 'Hum project ko lagoo kar rahe hain.', ex2: 'Die Studie wurde erfolgreich durchgeführt.', ex2En: 'The study was carried out successfully.', ex2Hi: 'Adhyayan safalta se poora hua.', conj: { praesens: 'führt durch', praeteritum: 'führte durch', perfekt: 'hat durchgeführt' } },
    { de: 'Durchführung', art: 'die', gender: 'f', plural: 'Durchführungen', pos: 'noun', level: 'B2', en: 'implementation, carrying out', hi: 'क्रियान्वयन', ex: 'Die Durchführung des Projekts war erfolgreich.', exEn: 'The implementation of the project was successful.', exHi: 'Project ka kriyaanvayan safal raha.', ex2: 'Die Durchführung erfordert Geduld.', ex2En: 'The implementation requires patience.', ex2Hi: 'Kriyaanvayan mein sahansheelta chahiye.' },
    { de: 'edel', pos: 'adjective', level: 'B2', en: 'noble, refined', hi: 'श्रेष्ठ', ex: 'Das war eine edle Geste.', exEn: 'That was a noble gesture.', exHi: 'Yeh ek shreshtha ishaara tha.', ex2: 'Der Wein hat einen edlen Geschmack.', ex2En: 'The wine has a refined taste.', ex2Hi: 'Wine ka swaad shreshtha hai.' },
    { de: 'einsehen', pos: 'verb', level: 'B2', en: 'to realise, see the point', hi: 'समझना', ex: 'Das kann ich einsehen.', exEn: 'I can see that.', exHi: 'Yeh main samajh sakti hoon.', ex2: 'Er hat seinen Fehler eingesehen.', ex2En: 'He has realised his mistake.', ex2Hi: 'Usne apni galti samjhi.', conj: { praesens: 'sieht ein', praeteritum: 'sah ein', perfekt: 'hat eingesehen' } },
    { de: 'einstellen', pos: 'verb', level: 'B2', en: 'to set, adjust, hire, employ', hi: 'सेट करना, नियुक्त करना', ex: 'Die Firma stellt zehn neue Mitarbeiter ein.', exEn: 'The company is hiring ten new employees.', exHi: 'Company das naye karmachaariyon ko niyukt kar rahi hai.', ex2: 'Ich stelle den Wecker auf sechs Uhr ein.', ex2En: 'I set the alarm for six o\'clock.', ex2Hi: 'Main alarm chhe baje ke liye set karta hoon.', conj: { praesens: 'stellt ein', praeteritum: 'stellte ein', perfekt: 'hat eingestellt' } },
    { de: 'Einschränkung', art: 'die', gender: 'f', plural: 'Einschränkungen', pos: 'noun', level: 'B2', en: 'restriction, limitation', hi: 'प्रतिबंध', ex: 'Es gibt einige Einschränkungen.', exEn: 'There are some restrictions.', exHi: 'Kuch prathibandh hain.', ex2: 'Die Einschränkung betrifft nur wenige Fälle.', ex2En: 'The restriction affects only a few cases.', ex2Hi: 'Prathibandh sirf kuch maamlon par lagoo hota hai.' },
    { de: 'erfüllen', pos: 'verb', level: 'B2', en: 'to fulfil', hi: 'पूरा करना', ex: 'Ich gehe davon aus, dass du die Grundvoraussetzungen erfüllst.', exEn: 'I assume that you fulfil the basic prerequisites.', exHi: 'Main maanta hoon ki tum mool poorv sharton ko poora karti ho.', ex2: 'Sie erfüllt alle Anforderungen.', ex2En: 'She fulfils all the requirements.', ex2Hi: 'Woh saari aavashyaktaon ko poora karti hai.', conj: { praesens: 'erfüllt', praeteritum: 'erfüllte', perfekt: 'hat erfüllt' } },
    { de: 'erhoffen', pos: 'verb', level: 'B2', en: 'to hope for', hi: 'आशा करना', ex: 'Die Geschäftsleitung erhofft sich jemanden mit Kommunikationsstärke.', exEn: 'The management hopes for someone with communication strength.', exHi: 'Prabandhan sanchaar shakti waale kisi ki aasha karta hai.', ex2: 'Wir erhoffen uns eine positive Antwort.', ex2En: 'We hope for a positive answer.', ex2Hi: 'Hum ek sakaraatmak jawaab ki aasha karte hain.', conj: { praesens: 'erhofft', praeteritum: 'erhoffte', perfekt: 'hat erhofft' } },
    { de: 'erhöhen', pos: 'verb', level: 'B2', en: 'to raise, increase', hi: 'बढ़ाना', ex: 'Die Globalisierung erhöht die Erwartungen stark.', exEn: 'Globalisation strongly raises expectations.', exHi: 'Bhoomandalikaran apekshaon ko dridhta se badhaata hai.', ex2: 'Die Firma erhöht die Gehälter dieses Jahr.', ex2En: 'The company is raising salaries this year.', ex2Hi: 'Company is saal vetan badha rahi hai.', conj: { praesens: 'erhöht', praeteritum: 'erhöhte', perfekt: 'hat erhöht' } },
    { de: 'erregen', pos: 'verb', level: 'B2', en: 'to arouse, excite', hi: 'उत्तेजित करना', ex: 'Die Nachricht erregte großes Aufsehen.', exEn: 'The news caused great excitement.', exHi: 'Khabar ne bahut hangaama macha diya.', ex2: 'Sein Verhalten erregte Verdacht.', ex2En: 'His behaviour aroused suspicion.', ex2Hi: 'Uske vyavahaar ne shaka utpann ki.', conj: { praesens: 'erregt', praeteritum: 'erregte', perfekt: 'hat erregt' } },
    { de: 'Erwartung', art: 'die', gender: 'f', plural: 'Erwartungen', pos: 'noun', level: 'B2', en: 'expectation', hi: 'अपेक्षा', ex: 'Die Globalisierung erhöht die Erwartungen stark.', exEn: 'Globalisation strongly raises expectations.', exHi: 'Bhoomandalikaran apekshaon ko dridhta se badhaata hai.', ex2: 'Seine Erwartungen waren zu hoch.', ex2En: 'His expectations were too high.', ex2Hi: 'Uski apekshaayein bahut uchi thi.' },
    { de: 'essbar', pos: 'adjective', level: 'B2', en: 'edible', hi: 'खाने योग्य', ex: 'Diese Pilze sind nicht essbar.', exEn: 'These mushrooms are not edible.', exHi: 'Yeh mushroom khaane ke liye theek nahi hain.', ex2: 'Alle Zutaten sind essbar.', ex2En: 'All ingredients are edible.', ex2Hi: 'Saari samagri khaane ke liye theek hai.' },
    { de: 'Firmenkultur', art: 'die', gender: 'f', plural: 'Firmenkulturen', pos: 'noun', level: 'B2', en: 'company culture', hi: 'कंपनी संस्कृति', ex: 'Obgleich die Firmenkultur locker wirkt, ist Freizeitkleidung im Büro nicht gefragt.', exEn: 'Although the company culture seems relaxed, leisure wear isn\'t in demand in the office.', exHi: 'Halaanki company sanskriti dheeli lagti hai, aaraamdayak pehnaava office mein maang mein nahi hai.', ex2: 'Die Firmenkultur beeinflusst die Motivation der Mitarbeiter.', ex2En: 'Company culture influences employee motivation.', ex2Hi: 'Company sanskriti karmchaariyon ki prerna ko prabhaavit karti hai.' },
    { de: 'Freizeitkleidung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'leisure wear', hi: 'आरामदायक पहनावा', ex: 'Freizeitkleidung im Büro ist nicht gefragt.', exEn: 'Leisure wear isn\'t in demand in the office.', exHi: 'Aaraamdayak pehnaava office mein maang mein nahi hai.', ex2: 'Am Wochenende trägt er nur Freizeitkleidung.', ex2En: 'On the weekend he only wears leisure wear.', ex2Hi: 'Weekend par woh sirf aaraamdayak pehnaava pehanta hai.' },
    { de: 'gefragt sein', pos: 'verb', level: 'B2', en: 'to be in demand', hi: 'मांग में होना', ex: 'Freizeitkleidung im Büro ist nicht gefragt.', exEn: 'Leisure wear isn\'t in demand in the office.', exHi: 'Aaraamdayak pehnaava office mein maang mein nahi hai.', ex2: 'Diese Fähigkeiten sind heute sehr gefragt.', ex2En: 'These skills are highly in demand today.', ex2Hi: 'Yeh yogyataayein aaj bahut maang mein hain.', conj: { praesens: 'ist gefragt', praeteritum: 'war gefragt', perfekt: 'ist gefragt gewesen' } },
    { de: 'Genauigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'accuracy, precision', hi: 'सटीकता', ex: 'Das besagt viel über deine Genauigkeit.', exEn: 'That states a lot about your accuracy.', exHi: 'Yeh tumhaari satikta ke baare mein bahut kuch bataata hai.', ex2: 'Die Genauigkeit der Messung ist entscheidend.', ex2En: 'The accuracy of the measurement is crucial.', ex2Hi: 'Maapan ki satikta mahatvapurn hai.' },
    { de: 'Geschäftsleitung', art: 'die', gender: 'f', plural: 'Geschäftsleitungen', pos: 'noun', level: 'B2', en: 'management', hi: 'प्रबंधन', ex: 'Die Geschäftsleitung erhofft sich jemanden mit Kommunikationsstärke.', exEn: 'The management hopes for someone with communication strength.', exHi: 'Prabandhan sanchaar shakti waale kisi ki aasha karta hai.', ex2: 'Die Geschäftsleitung trifft die endgültige Entscheidung.', ex2En: 'The management makes the final decision.', ex2Hi: 'Prabandhan antim faisla leta hai.' },
    { de: 'Globalisierung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'globalisation', hi: 'भूमंडलीकरण', ex: 'Die Globalisierung erhöht die Erwartungen stark.', exEn: 'Globalisation strongly raises expectations.', exHi: 'Bhoomandalikaran apekshaon ko dridhta se badhaata hai.', ex2: 'Globalisierung verändert den Arbeitsmarkt.', ex2En: 'Globalisation changes the labour market.', ex2Hi: 'Bhoomandalikaran shram baazaar ko badalta hai.' },
    { de: 'Grundvoraussetzung', art: 'die', gender: 'f', plural: 'Grundvoraussetzungen', pos: 'noun', level: 'B2', en: 'basic prerequisite', hi: 'मूल पूर्व शर्त', ex: 'Ich gehe davon aus, dass du die Grundvoraussetzungen erfüllst.', exEn: 'I assume that you fulfil the basic prerequisites.', exHi: 'Main maanta hoon ki tum mool poorv sharton ko poora karti ho.', ex2: 'Deutschkenntnisse sind eine Grundvoraussetzung.', ex2En: 'German skills are a basic prerequisite.', ex2Hi: 'German bhaasha ka gyaan ek mool poorv shart hai.' },
    { de: 'Herausforderung', art: 'die', gender: 'f', plural: 'Herausforderungen', pos: 'noun', level: 'B2', en: 'challenge', hi: 'चुनौती', ex: 'Obgleich das Unternehmen wächst, bleiben Herausforderungen bestehen.', exEn: 'Although the company is growing, challenges remain.', exHi: 'Halaanki company badh rahi hai, chunautiyaan bani rehti hain.', ex2: 'Diese Herausforderung ist nicht einfach.', ex2En: 'This challenge is not easy.', ex2Hi: 'Yeh chunauti aasaan nahi hai.' },
    { de: 'Kommunikationsstärke', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'communication strength', hi: 'संचार शक्ति', ex: 'Die Geschäftsleitung erhofft sich jemanden mit Kommunikationsstärke.', exEn: 'The management hopes for someone with communication strength.', exHi: 'Prabandhan sanchaar shakti waale kisi ki aasha karta hai.', ex2: 'Kommunikationsstärke ist in dieser Rolle entscheidend.', ex2En: 'Communication strength is crucial in this role.', ex2Hi: 'Is bhoomika mein sanchaar shakti mahatvapurn hai.' },
    { de: 'mitverantwortlich', pos: 'adjective', level: 'B2', en: 'jointly responsible, partly to blame', hi: 'संयुक्त रूप से जिम्मेदार', ex: 'Er ist mitverantwortlich für den Fehler.', exEn: 'He is partly to blame for the mistake.', exHi: 'Woh galti ke liye samyukt roop se zimmedaar hai.', ex2: 'Alle Teammitglieder sind mitverantwortlich.', ex2En: 'All team members are jointly responsible.', ex2Hi: 'Saare team sadasya samyukt roop se zimmedaar hain.' },
    { de: 'Mode', art: 'die', gender: 'f', plural: 'Moden', pos: 'noun', level: 'B2', en: 'fashion', hi: 'फ़ैशन', ex: 'Die Mode ändert sich ständig.', exEn: 'Fashion changes constantly.', exHi: 'Fashion lagataar badalta hai.', ex2: 'Sie interessiert sich sehr für Mode.', ex2En: 'She is very interested in fashion.', ex2Hi: 'Use fashion mein bahut ruchi hai.' },
    { de: 'rein', pos: 'adjective', level: 'B2', en: 'pure, clean', hi: 'शुद्ध', ex: 'Das Wasser ist rein.', exEn: 'The water is pure.', exHi: 'Paani shuddh hai.', ex2: 'Das ist reine Verschwendung.', ex2En: 'That is pure waste.', ex2Hi: 'Yeh shuddh barbaadi hai.' },
    { de: 'stattdessen', pos: 'adverb', level: 'B2', en: 'instead', hi: 'इसके बजाय', ex: 'Stattdessen habe ich Teambildungsaktivitäten betreut.', exEn: 'Instead, I looked after team-building activities.', exHi: 'Iske bajaay, maine team-nirmaan gatividhiyon ki dekhbhaal ki.', ex2: 'Er kam nicht; stattdessen schickte er eine E-Mail.', ex2En: 'He didn\'t come; instead he sent an email.', ex2Hi: 'Woh nahi aaya; iske bajaay usne ek email bheji.' },
    { de: 'Teambildung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'team building', hi: 'टीम-निर्माण', ex: 'Teambildung ist für den Erfolg wichtig.', exEn: 'Team building is important for success.', exHi: 'Team-nirmaan safalta ke liye mahatvapurn hai.', ex2: 'Die Firma investiert in Teambildung.', ex2En: 'The company invests in team building.', ex2Hi: 'Company team-nirmaan mein nivesh karti hai.' },
    { de: 'Teambildungsaktivität', art: 'die', gender: 'f', plural: 'Teambildungsaktivitäten', pos: 'noun', level: 'B2', en: 'team-building activity', hi: 'टीम-निर्माण गतिविधि', ex: 'Stattdessen habe ich Teambildungsaktivitäten betreut.', exEn: 'Instead, I looked after team-building activities.', exHi: 'Iske bajaay, maine team-nirmaan gatividhiyon ki dekhbhaal ki.', ex2: 'Die Teambildungsaktivität fand im Park statt.', ex2En: 'The team-building activity took place in the park.', ex2Hi: 'Team-nirmaan gatividhi park mein hui.' },
    { de: 'verantworten', pos: 'verb', level: 'B2', en: 'to take responsibility for', hi: 'ज़िम्मेदारी लेना', ex: 'Er verantwortet das gesamte Projekt.', exEn: 'He takes responsibility for the entire project.', exHi: 'Woh poore project ki zimmedaari leta hai.', ex2: 'Wer verantwortet diesen Fehler?', ex2En: 'Who takes responsibility for this mistake?', ex2Hi: 'Is galti ki zimmedaari kaun leta hai?', conj: { praesens: 'verantwortet', praeteritum: 'verantwortete', perfekt: 'hat verantwortet' } },
    { de: 'Zusammenhang', art: 'der', gender: 'm', plural: 'Zusammenhänge', pos: 'noun', level: 'B2', en: 'connection, context', hi: 'संबंध', ex: 'Es gibt einen klaren Zusammenhang zwischen beiden Ereignissen.', exEn: 'There is a clear connection between both events.', exHi: 'Dono ghatnaon ke beech ek spasht sambandh hai.', ex2: 'Im Zusammenhang mit dieser Frage müssen wir vorsichtig sein.', ex2En: 'In the context of this question, we must be careful.', ex2Hi: 'Is sawaal ke sandarbh mein humein saavdhaan rehna chahiye.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "obgleich"?',
      body: [ '"obgleich" = although = even though. It introduces a concession: something happens DESPITE another fact.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Obgleich Ronja müde ist, arbeitet sie weiter.</span>'],
          ['<span class="de">Obgleich es regnet, gehen wir spazieren.</span>']
        ]
      },
      hinglish: '"obgleich" ka matlab hai "halaanki" ya "bhale hi". Yeh batata hai ki kuch hone ke baavjood kaam phir bhi hota hai \u2014 matlab jo expect karte ho uska ulta.'
    },
    {
      title: 'Satzstruktur',
      body: [ '"obgleich" introduces a Nebensatz with verb-end word order. The main clause follows normal V2 order.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Obgleich er krank ist, geht er zur Arbeit.</span>'],
          ['<span class="de">Wir fahren nach Berlin, obgleich das Wetter schlecht ist.</span>']
        ]
      },
      hinglish: '"obgleich" ke baad Nebensatz banta hai, aur usme verb sentence ke end mein chala jaata hai. Main clause apna normal order rakhta hai, matlab wahan verb doosri position par hi rehta hai.'
    },
    {
      title: 'obgleich vs. obwohl',
      body: [ 'Both mean "although" — the meaning is almost identical. The difference is register.' ],
      table: {
        head: ['obwohl', 'obgleich'],
        rows: [
          ['More common', 'More formal'],
          ['Spoken', 'Written'],
          ['Everyday', 'Newspapers, reports, business German, Goethe writing']
        ]
      },
      hinglish: 'Dono ka matlab lagbhag ek hi hai. Fark sirf register ka hai \u2014 <b>obwohl</b> rozmarra bolchaal mein aata hai, aur <b>obgleich</b> likhne mein aur formal German mein.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show obgleich in workplace and business contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Obgleich die Ergebnisse positiv sind, muss die Studie wiederholt werden.</span>'],
          ['<span class="de">Obgleich das Unternehmen wächst, bleiben Herausforderungen bestehen.</span>'],
          ['<span class="de">Obgleich viele Studenten teilnehmen, gibt es noch freie Plätze.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki obgleich asli mein kahan use hota hai \u2014 office, business aur reports jaisi formal writing mein.'
    },
    {
      title: 'Positionsvariationen',
      body: [ 'The obgleich-clause can come first (followed by a comma and the main clause starting with the verb) or second (after the main clause, with a comma before obgleich).' ],
      table: {
        head: ['Position', 'Example'],
        rows: [
          ['Obgleich-clause first', '<span class="de">Obgleich es regnet, gehen wir spazieren.</span>'],
          ['Main clause first', '<span class="de">Wir gehen spazieren, obgleich es regnet.</span>']
        ]
      },
      hinglish: 'obgleich-clause dono jagah aa sakta hai. Agar woh pehle aata hai to comma ke baad main clause apne verb se shuru hoga. Aur agar baad mein aata hai to obgleich se pehle comma lagana zaroori hai.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ 'Use obgleich in reports, newspaper articles, university assignments, workplace communication, and Goethe B2 writing to sound more sophisticated.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong word order, missing commas, or combining obgleich incorrectly with "aber".' ],
      mistakes: [
        { wrong: 'Obgleich er ist krank...', right: 'Obgleich er krank ist...', why: 'The verb must go to the END of the obgleich-clause, not stay in second position.' },
        { wrong: 'Obgleich regnet es...', right: 'Obgleich es regnet...', why: 'Subject "es" must come before the verb-end position — the whole clause needs verb-final word order.' },
        { wrong: 'Obgleich er krank ist, aber geht er arbeiten.', right: 'Obgleich er krank ist, geht er arbeiten.', why: 'After the obgleich-clause the main clause must start with its verb (geht er) \u2014 "aber" cannot occupy that slot. In formal writing a second concession word is also redundant, since "obgleich" already carries it. (You will hear "\u2026, geht er aber arbeiten" in speech; there "aber" sits in the Mittelfeld and just adds emphasis.)' },
        { wrong: 'Wir gehen spazieren obgleich es regnet.', right: 'Wir gehen spazieren, obgleich es regnet.', why: 'A comma is required before "obgleich" when the main clause comes first.' },
        { wrong: 'Obgleich er müde ist geht er weiter.', right: 'Obgleich er müde ist, geht er weiter.', why: 'A comma is required after the obgleich-clause, before the main clause.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 verb ko clause ke end mein na bhejna, comma chhod dena, ya main clause ko "aber" se shuru kar dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"obgleich" appears frequently in Goethe B2 formal reading texts and is valued in writing tasks for showing register range.' ],
      note: 'Memory trick: obgleich = obwohl, but more elegant and more formal. Need formal concession? Use obgleich. Speaking with friends? Usually obwohl.',
      hinglish: '"obgleich" Goethe B2 ke formal reading texts mein aksar aata hai. Writing mein ise thoda use karo to examiner ko dikh jaata hai ki tum formal register bhi handle kar sakte ho.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Unternehmensblog: Warum unsere Firmenkultur anders ist',
    titleEn: 'Company blog: why our company culture is different',
    tokens: [
      { w: 'Obgleich', role: 'r-connector', en: 'although (formal)', hi: 'हालांकि (औपचारिक)', type: 'Konzessivkonjunktion · obgleich', why: 'obgleich = although: formal concessive conjunction, Nebensatz word order (this chapter).' },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Unternehmen', role: 'plain', en: 'company', hi: 'कंपनी', type: 'Noun · neut.' },
      { w: 'erst', role: 'plain', en: 'only', hi: 'बस', type: 'Adverb' },
      { w: 'vor', role: 'plain', en: 'ago', hi: 'पहले', type: 'Preposition · Dat.' },
      { w: 'drei', role: 'plain', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'gegründet', role: 'plain', en: 'founded (Satzende)', hi: 'स्थापित (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wurde', role: 'plain', en: 'was (Satzende)', hi: 'हुई थी (Satzende)', type: 'Verb · werden (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'gilt', role: 'plain', en: 'is regarded', hi: 'मानी जाती है', type: 'Verb · gelten als' },
      { w: 'unsere', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Firmenkultur', role: 'plain', en: 'company culture', hi: 'कंपनी संस्कृति', type: 'Noun · fem.', why: 'die Firmenkultur (this chapter).' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Vorbild', role: 'plain', en: 'model (Satzende)', hi: 'आदर्श (Satzende)', type: 'Noun · neut.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Branche', role: 'plain', en: 'industry', hi: 'उद्योग', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Trotz', role: 'plain', en: 'despite', hi: 'के बावजूद', type: 'Preposition · Genitiv', why: 'trotz + Genitiv: an alternative way of expressing concession, without a full Nebensatz (this chapter, for comparison).' },
      { w: 'fehlender', role: 'plain', en: 'lacking (gen.)', hi: 'अभाव के', type: 'Adjective · Genitiv' },
      { w: 'strikter', role: 'plain', en: 'strict (gen.)', hi: 'सख़्त', type: 'Adjective · Genitiv' },
      { w: 'Kleiderordnung', role: 'plain', en: 'dress code (Satzanfang, Genitiv)', hi: 'पोशाक नियम (Satzanfang)', type: 'Noun · fem.' },
      { w: 'erscheinen', role: 'plain', en: 'appear', hi: 'आते हैं', type: 'Verb · erscheinen' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'अधिकांश', type: 'Article' },
      { w: 'meisten', role: 'plain', en: 'most', hi: 'अधिकांश', type: 'Adjective' },
      { w: 'Mitarbeiter', role: 'plain', en: 'employees', hi: 'कर्मचारी', type: 'Noun · plural' },
      { w: 'freiwillig', role: 'plain', en: 'voluntarily', hi: 'स्वेच्छा से', type: 'Adjective' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'gepflegter', role: 'plain', en: 'well-groomed', hi: 'सुव्यवस्थित', type: 'Adjective · Dat.', why: 'gepflegt (this chapter).' },
      { w: 'Freizeitkleidung', role: 'plain', en: 'casual wear', hi: 'आराम की पोशाक', type: 'Noun · fem.', why: 'die Freizeitkleidung (this chapter).' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'लिए', type: 'Preposition · Dat.' },
      { w: 'wichtigen', role: 'plain', en: 'important', hi: 'महत्वपूर्ण', type: 'Adjective' },
      { w: 'Kundenterminen', role: 'plain', en: 'client appointments (Satzende)', hi: 'ग्राहक मुलाक़ातों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Obgleich', role: 'r-connector', en: 'although', hi: 'हालांकि', type: 'Konzessivkonjunktion · obgleich' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Anforderungen', role: 'plain', en: 'requirements', hi: 'आवश्यकताएँ', type: 'Noun · plural', why: 'die Anforderung (this chapter).' },
      { w: 'an', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective' },
      { w: 'Bewerber', role: 'plain', en: 'applicants', hi: 'आवेदक', type: 'Noun · plural' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'अधिक (Satzende)', type: 'Adjective' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'legen', role: 'plain', en: 'place', hi: 'देते हैं', type: 'Verb · Wert legen auf' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'अधिक', type: 'Adjective' },
      { w: 'Wert', role: 'plain', en: 'value', hi: 'महत्व', type: 'Noun · masc.' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Kommunikationsstärke', role: 'plain', en: 'communication strength', hi: 'संचार क्षमता', type: 'Noun · fem.', why: 'die Kommunikationsstärke (this chapter).' },
      { w: 'als', role: 'plain', en: 'than', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'reine', role: 'plain', en: 'pure', hi: 'शुद्ध' , type: 'Adjective' },
      { w: 'Berufserfahrung', role: 'plain', en: 'professional experience (Satzende)', hi: 'व्यावसायिक अनुभव (Satzende)', type: 'Noun · fem.', why: 'die Berufserfahrung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Woche', role: 'plain', en: 'week', hi: 'हफ़्ते', type: 'Noun · fem.' },
      { w: 'organisiert', role: 'plain', en: 'organises', hi: 'आयोजित करता है', type: 'Verb · organisieren' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Geschäftsleitung', role: 'plain', en: 'management', hi: 'प्रबंधन', type: 'Noun · fem.', why: 'die Geschäftsleitung (this chapter).' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Teambildungsaktivität', role: 'plain', en: 'team-building activity (Satzende)', hi: 'टीम-निर्माण गतिविधि (Satzende)', type: 'Noun · fem.', why: 'die Teambildungsaktivität (this chapter).' },
      { w: ',', plain: true },
      { w: 'obgleich', role: 'r-connector', en: 'although', hi: 'हालांकि', type: 'Konzessivkonjunktion · obgleich' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Mitarbeiter', role: 'plain', en: 'employees', hi: 'कर्मचारी', type: 'Noun · plural' },
      { w: 'anfangs', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb' },
      { w: 'skeptisch', role: 'plain', en: 'skeptical (Satzende)', hi: 'संदेहजनक (Satzende)', type: 'Adjective' },
      { w: 'waren', role: 'plain', en: 'were (Satzende)', hi: 'थे (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Mittlerweile', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'herausgestellt', role: 'plain', en: 'turned out (Satzende)', hi: 'साबित हुआ (Satzende)', type: 'Verb · sich herausstellen (Partizip II)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'gerade', role: 'plain', en: 'precisely', hi: 'ठीक', type: 'Adverb' },
      { w: 'diese', role: 'plain', en: 'these', hi: 'ये', type: 'Determiner' },
      { w: 'Aktivitäten', role: 'plain', en: 'activities', hi: 'गतिविधियाँ', type: 'Noun · plural' },
      { w: 'mitverantwortlich', role: 'plain', en: 'partly responsible', hi: 'आंशिक रूप से ज़िम्मेदार', type: 'Adjective', why: 'mitverantwortlich (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'niedrige', role: 'plain', en: 'low', hi: 'कम', type: 'Adjective' },
      { w: 'Fluktuation', role: 'plain', en: 'staff turnover (Satzende)', hi: 'कर्मचारी परिवर्तन दर (Satzende)', type: 'Noun · fem.' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Obgleich', role: 'r-connector', en: 'although', hi: 'हालांकि', type: 'Konzessivkonjunktion · obgleich' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'mittlerweile', role: 'plain', en: 'meanwhile', hi: 'अब', type: 'Adverb' },
      { w: 'international', role: 'plain', en: 'internationally', hi: 'अंतरराष्ट्रीय रूप से', type: 'Adjective' },
      { w: 'tätig', role: 'plain', en: 'active (Satzende)', hi: 'सक्रिय (Satzende)', type: 'Adjective' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'versuchen', role: 'plain', en: 'try', hi: 'कोशिश करते हैं', type: 'Verb · versuchen' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'jeden', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner · Akk.' },
      { w: 'Standort', role: 'plain', en: 'location', hi: 'स्थान', type: 'Noun · masc.' },
      { w: 'individuell', role: 'plain', en: 'individually', hi: 'व्यक्तिगत रूप से', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'betreuen', role: 'plain', en: 'support (Satzende)', hi: 'सहायता देना (Satzende)', type: 'Verb · betreuen (Infinitiv, Satzende)', why: 'betreuen (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'Although our company was only founded three years ago, our company culture is by now regarded as a model in the industry. Despite the lack of a strict dress code, most employees voluntarily appear in well-groomed casual wear for important client appointments. Although the requirements for new applicants are high, we place more value on communication strength than on pure professional experience. Every week, management organises a team-building activity, although many employees were skeptical at first. It has meanwhile turned out that precisely these activities are partly responsible for the low staff turnover. Although we are meanwhile active internationally, we try to support every location individually.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_015_L001', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, obgleich das Gehalt wirklich gut ist, zögere ich noch bei dem Angebot.', en: 'Timo, even though the salary is really good, I\'m still hesitating about the offer.' },
      { id: 'B2_015_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Warum? Die Unternehmenskultur klang doch vielversprechend.', en: 'Why? The company culture sounded promising, didn\'t it?' },
      { id: 'B2_015_L003', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Obgleich sie das im Gespräch behauptet haben, habe ich online ganz andere Erfahrungsberichte gelesen.', en: 'Although they claimed that in the interview, I\'ve read very different reviews online.' },
      { id: 'B2_015_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann würde ich vor der Entscheidung noch mal genauer nachfragen.', en: 'Then I would ask more specific questions before deciding.' }
    ],
    transcript: 'Timo, obgleich das Gehalt wirklich gut ist, zögere ich noch bei dem Angebot. Warum? Die Unternehmenskultur klang doch vielversprechend. Obgleich sie das im Gespräch behauptet haben, habe ich online ganz andere Erfahrungsberichte gelesen. Dann würde ich vor der Entscheidung noch mal genauer nachfragen.',
    translation: 'Timo, even though the salary is really good, I\'m still hesitating about the offer. Why? The company culture sounded promising, didn\'t it? Although they claimed that in the interview, I\'ve read very different reviews online. Then I would ask more specific questions before deciding.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'obgleich' },
      { w: 'das' },
      { w: 'Gehalt' },
      { w: 'wirklich' },
      { w: 'gut' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'zögere' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'bei' },
      { w: 'dem' },
      { w: 'Angebot' },
      { w: '.', plain: true },
      { w: 'Warum' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Unternehmenskultur' },
      { w: 'klang' },
      { w: 'doch' },
      { w: 'vielversprechend' },
      { w: '.', plain: true },
      { w: 'Obgleich' },
      { w: 'sie' },
      { w: 'das' },
      { w: 'im' },
      { w: 'Gespräch' },
      { w: 'behauptet' },
      { w: 'haben' },
      { w: ',', plain: true },
      { w: 'habe' },
      { w: 'ich' },
      { w: 'online' },
      { w: 'ganz' },
      { w: 'andere' },
      { w: 'Erfahrungsberichte' },
      { w: 'gelesen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'vor' },
      { w: 'der' },
      { w: 'Entscheidung' },
      { w: 'noch' },
      { w: 'mal' },
      { w: 'genauer' },
      { w: 'nachfragen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum zögert Ronja trotz des guten Gehalts?', qEn: 'Why does Ronja hesitate despite the good salary?', options: ['Sie mag den Job nicht.', 'Sie hat andere Erfahrungsberichte gelesen.', 'Sie hat schon einen Job.', 'Der Standort gefällt ihr nicht.'], optionsEn: ['She doesn\'t like the job.', 'She read other reviews.', 'She already has a job.', 'She doesn\'t like the location.'], answer: 1,
        explain: '"… habe ich online ganz andere Erfahrungsberichte gelesen."' },
      { q: 'Was empfiehlt Timo?', qEn: 'What does Timo recommend?', options: ['sofort zusagen', 'ablehnen', 'genauer nachfragen', 'den Job wechseln'], optionsEn: ['accept immediately', 'reject', 'ask in more detail', 'change jobs'], answer: 2,
        explain: '"Dann würde ich vor der Entscheidung noch mal genauer nachfragen."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Du zögerst bei einem Jobangebot, obwohl das Gehalt gut ist. Sag es.", taskEn: "You're hesitating over a job offer although the pay is good. Say so.", de: "Obgleich das Gehalt gut ist, zögere ich noch bei dem Angebot.", en: "Although the pay is good, I'm still hesitating over the offer." },
    { task: "Dein Freund findet die Unternehmenskultur vielversprechend. Antworte.", taskEn: "Your friend finds the company culture promising. Answer.", de: "Obgleich sie vielversprechend klang, passt das Aufgabengebiet nicht.", en: "Although it sounded promising, the role doesn't fit." },
    { task: "Eine Kollegin fragt, warum du die Absage bekommen hast.", taskEn: "A colleague asks why you got the rejection.", de: "Obgleich ich Berufserfahrung habe, waren die Anforderungen zu speziell.", en: "Although I have professional experience, the requirements were too specialised." },
    { task: "Ein Bekannter fragt, wie der Arbeitsmarkt gerade ist.", taskEn: "An acquaintance asks how the job market is right now.", de: "Obgleich viele Stellen frei sind, sind die Verträge oft begrenzt.", en: "Although many positions are open, the contracts are often limited." },
    { task: "Deine Chefin fragt, ob du die Angebotserstellung übernimmst.", taskEn: "Your boss asks whether you'll take on the quotation.", de: "Obgleich ich viel zu tun habe, übernehme ich sie.", en: "Although I have a lot on, I'll take it on." },
    { task: "Rollenspiel: Ihr besprecht ein Jobangebot.", taskEn: "Role-play: you discuss a job offer.", de: "Obgleich die Bezahlung stimmt, ist der Weg zu weit. — Obgleich du recht hast, würde ich es probieren.", en: "Although the pay is right, the commute is too far. — Although you're right, I'd try it." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short formal report or email (six to eight sentences) about a workplace or career topic — using "obgleich" at least three times, with at least one example of the obgleich-clause coming first and one of the main clause coming first.',
    starters: ['Obgleich …, …', '…, obgleich …', 'Die Geschäftsleitung erhofft sich …, obgleich …'],
    placeholder: 'Obgleich die Anforderungen hoch sind, bewerbe ich mich um die Stelle …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence has correct obgleich word order?',
      options: ['Obgleich er krank ist, geht er zur Arbeit.', 'Obgleich er ist krank, geht er zur Arbeit.', 'Obgleich geht er krank ist zur Arbeit.'],
      answer: 0,
      explain: 'The verb must go to the end of the obgleich-clause: "er krank ist".'
    },
    gap: {
      sentence: ['Wir fahren nach Berlin, ', ' das Wetter schlecht ist.'],
      gaps: [ { answer: 'obgleich', accepts: ['obgleich'] } ],
      explain: '"obgleich" introduces the concessive clause here, placed after the main clause with a comma.'
    },
    match: {
      q: 'Match each register to its typical conjunction.',
      pairs: [
        { noun: 'Spoken, everyday', art: 'obwohl' },
        { noun: 'Formal, written', art: 'obgleich' }
      ]
    },
    builder: {
      target: 'Build: "Although it is raining, we go for a walk."',
      bank: ['Obgleich', 'es', 'regnet', ',', 'gehen', 'wir', 'spazieren', '.'],
      answer: ['Obgleich', 'es', 'regnet', ',', 'gehen', 'wir', 'spazieren', '.'],
      roles: { 'Obgleich': 'r-konz' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wir gehen spazieren obgleich es regnet.',
      right: 'Wir gehen spazieren, obgleich es regnet.',
      explain: 'A comma is required before "obgleich" when the main clause comes first.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "obgleich" mean?', options: ['although', 'because', 'therefore'], answer: 0,
      explain: '"obgleich" means "although" — the same meaning as "obwohl", but more formal.' },
    { q: 'Where does the verb go in an obgleich-clause?', options: ['At the end', 'In second position', 'At the start'], answer: 0,
      explain: '"obgleich" introduces a Nebensatz — the verb goes to the very end.' },
    { q: 'Which register is "obgleich" typically used in?', options: ['Formal, written', 'Very casual slang', 'Baby talk'], answer: 0,
      explain: '"obgleich" is common in reports, newspapers, and formal writing.' },
    { q: 'Which sentence contains an error?', options: ['Obgleich er krank ist, geht er zur Arbeit.', 'Obgleich er krank ist, aber geht er arbeiten.', 'Wir fahren nach Berlin, obgleich das Wetter schlecht ist.'], answer: 1,
      explain: 'Never combine "obgleich" with "aber" — the concession is already expressed by "obgleich" alone.' },
    { q: 'Which conjunction is more common in spoken German?', options: ['obwohl', 'obgleich', 'Both equally'], answer: 0,
      explain: '"obwohl" is the everyday, spoken equivalent; "obgleich" is the formal, written one.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-konz', html: '"obgleich" means exactly what "obwohl" means — although — with the same verb-end Nebensatz word order.' },
    { c: 'r-konz', html: 'The only real difference is register: "obgleich" belongs in reports, newspapers, and formal writing; "obwohl" belongs in everyday speech.' },
    { c: 'r-konz', html: 'Never combine "obgleich" with "aber" in the same sentence — the concession is already fully expressed by "obgleich" alone.' }
  ],
  revisionTips: [
    'Practise rewriting spoken "obwohl" sentences into formal "obgleich" versions for reports and emails.',
    'Always check: does the verb sit at the very end of the obgleich-clause, and is there a comma separating it from the main clause?',
    'When writing formally for Goethe B2, reach for "obgleich" instead of "obwohl" to show register range.'
  ]
};

window.CHAPTER = CHAPTER;
