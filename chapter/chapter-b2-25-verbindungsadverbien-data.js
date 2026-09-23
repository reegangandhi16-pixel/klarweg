/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 25
   "Verbindungsadverbien" (deshalb, deswegen, daher, darum,
   folglich, somit, trotzdem, dennoch) — connect TWO complete
   sentences; unlike conjunctions (weil), the connector occupies
   Position 1 and the verb stays in Position 2 (normal main
   clause). Cause→Result group (deshalb/deswegen/daher/darum),
   formal Result (folglich/somit), Contrast (trotzdem/dennoch).
   Does NOT introduce demnach, alldieweil, or infolge.
   IMPORTANT: dialogue uses ONLY Vera and Timo.
   Vocabulary source: uploaded chapter-25 list (54 items, user-edited
   general B2 vocabulary bank — economy/social-welfare themes).
============================================================ */
const CHAPTER = {
  id: 'b2-25-verbindungsadverbien',
  phase: 'B2 · Phase 1',
  number: 25,
  title: 'Verbindungsadverbien',
  titleEn: 'Conjunctive adverbs',
  description: 'deshalb, folglich, trotzdem — a whole toolkit for connecting two complete sentences, verb always in Position 2.',
  xp: 440,
  time: 60,
  difficulty: 'Advanced',
  nextChapter: { number: 26, title: 'Goethe Mini Test 2 (Checkpoint)', titleEn: 'Goethe Mini Test 2 (checkpoint)' , href: 'chapter-b2-26-goethe-mini-test-2.html' },

  prevChapter: { number: 24, title: 'einerseits ... andererseits', titleEn: 'on the one hand ... on the other hand ...', href: 'chapter-b2-24-einerseits-andererseits.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two sentences, <em>one bridge.</em>',
    intro: 'A successful donation campaign still isn\'t enough, Vera and Timo agree while reading an economic report — food collected, then distributed, nevertheless insufficient, therefore a second campaign — deshalb, folglich, trotzdem bridging every pair of sentences.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear deshalb, folglich, and trotzdem each start a new sentence with the verb in Position 2'
    ],
    scene: 'Der Wirtschaftsbericht',
    femaleSpeakers: ['Vera'],
    dialogue: [
      { speaker: 'Vera', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Spendenaktion', role: 'r-subject', en: 'donation campaign', hi: 'दान अभियान', pron: 'SHPEN-den-ak-tsyon', type: 'Noun · fem.', why: 'die Spendenaktion (recycled).' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'सफल', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'erfolgreich', role: 'r-akkusativ', en: 'successful', hi: 'सफल', pron: 'er-FOLK-ryke', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Dennoch', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'DE-nokh', type: 'Conjunction · Verbindungsadverb', why: 'dennoch = nevertheless, connecting adverb linking two independent sentences (this chapter).', ex: 'Dennoch brauchen wir mehr Hilfe.', exEn: 'Nevertheless we need more help.' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Hilfe', role: 'r-akkusativ', en: 'help', hi: 'मदद', pron: 'HIL-fuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The donation campaign was successful. Nevertheless we need more help.', hi: 'Daan abhiyaan safal tha. Phir bhi humein zyada madad chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zunächst', role: 'r-conjunction', en: 'first', hi: 'पहले', pron: 'tsu-NAYKHST', type: 'Conjunction · Verbindungsadverb', why: 'zunächst = first(ly), connecting adverb (this chapter).', ex: 'Zunächst sammelten wir Lebensmittel.', exEn: 'First we collected food.' },
        { w: 'sammelten', role: 'r-verb', en: 'collected', hi: 'जमा किए', pron: 'ZA-mel-ten', type: 'Verb · sammeln (Präteritum)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Lebensmittel', role: 'r-akkusativ', en: 'food', hi: 'खाद्य पदार्थ', pron: 'LAY-benz-mi-tel', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Anschließend', role: 'r-conjunction', en: 'afterward', hi: 'उसके बाद', pron: 'AN-shlee-sent', type: 'Conjunction · Verbindungsadverb', why: 'anschließend = afterward, connecting adverb (this chapter).', ex: 'Anschließend verteilten wir sie.', exEn: 'Afterward we distributed them.' },
        { w: 'verteilten', role: 'r-verb', en: 'distributed', hi: 'वितरित किए', pron: 'fer-TY-lten', type: 'Verb · verteilen (Präteritum)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sie', role: 'r-akkusativ', en: 'them', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'First we collected food. Afterward we distributed it.', hi: 'Pehle humne khaadya padaarth jama kiye. Uske baad humne unhe vitrit kiya.' },
      { speaker: 'Vera', tokens: [
        { w: 'Allerdings', role: 'r-conjunction', en: 'however', hi: 'हालांकि', pron: 'a-ler-DINGS', type: 'Conjunction · Verbindungsadverb', why: 'allerdings = however, connecting adverb (this chapter).', ex: 'Allerdings reichte das nicht für alle.', exEn: 'However that was not enough for everyone.' },
        { w: 'reichte', role: 'r-verb', en: 'was enough', hi: 'काफ़ी', pron: 'RYKH-tuh', type: 'Verb · reichen (Präteritum)' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'alle', role: 'r-akkusativ', en: 'everyone', hi: 'सभी', pron: 'A-luh', type: 'Pronoun · indefinite' },
        { w: '.', plain: true }
      ], en: 'However that was not enough for everyone.', hi: 'Halaanki yeh sabke liye kaafi nahi tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Deshalb', role: 'r-conjunction', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Conjunction · Verbindungsadverb' },
        { w: 'planen', role: 'r-verb', en: 'plan', hi: 'योजना बना रहे हैं', pron: 'PLAH-nen', type: 'Verb · planen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'zweite', role: 'r-akkusativ', en: 'second', hi: 'दूसरा', pron: 'TSVY-tuh', type: 'Adjective' },
        { w: 'Aktion', role: 'r-akkusativ', en: 'campaign', hi: 'अभियान', pron: 'ak-TSYON', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Therefore we plan a second campaign.', hi: 'Isliye hum doosra abhiyaan yojna bana rahe hain.' },
      { speaker: 'Vera', tokens: [
        { w: 'Übrigens', role: 'r-conjunction', en: 'by the way', hi: 'वैसे', pron: 'Ü-bri-gens', type: 'Conjunction · Verbindungsadverb', why: 'übrigens = by the way, connecting adverb (this chapter).', ex: 'Übrigens hat der Bürgermeister gespendet.', exEn: 'By the way, the mayor donated.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bürgermeister', role: 'r-subject', en: 'mayor', hi: 'महापौर', pron: 'BÜR-ger-mys-ter', type: 'Noun · masc.' },
        { w: 'gespendet', role: 'r-verb', en: 'donated', hi: 'दान', pron: 'ge-SHPEN-det', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'By the way, the mayor donated.', hi: 'Waise, mahapaur ne daan diya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'großartig', role: 'r-akkusativ', en: 'great', hi: 'शानदार', pron: 'GROHS-ar-tikh', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Really? That is great!', hi: 'Sach mein? Yeh shaandaar hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A <span class="de r-verbadverb">Verbindungsadverb</span> (deshalb, folglich, trotzdem…) connects TWO complete sentences — but unlike a conjunction like <span class="de">weil</span>, it doesn\'t create a subordinate clause. It occupies Position 1, and the finite verb STAYS in Position 2, exactly like any normal main clause: <span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERBINDUNGSADVERBIEN (B2 level): conjunctive adverbs that connect two complete sentences while keeping normal main-clause word order (connector in Position 1, finite verb in Position 2) — unlike subordinating conjunctions like "weil" which send the verb to the end. Cause→Result group: deshalb/deswegen/darum (everyday/spoken), daher (more formal). Formal Result: folglich, somit. Contrast: trotzdem (neutral), dennoch (formal). Example: Es regnet. Deshalb bleiben wir zu Hause. — NOT "Deshalb wir bleiben zu Hause." ' +
    'Do NOT expect demnach, alldieweil, or infolge — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Every Verbindungsadverb must be followed immediately by the finite verb (Position 2) — never by the subject first.\n' +
    '- Distinguish these from subordinating conjunctions (weil, da) which require verb-final word order — do not confuse the two structures.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner chose connectors of the right register (spoken vs formal) for the context.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly place the verb in Position 2 after every Verbindungsadverb and choose appropriate register. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Verbindungsadverb vs conjunction comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: a Verbindungsadverb starts a NEW sentence, and the verb ALWAYS stays in Position 2.'
  },

  parserSentence: [
    { w: 'Es', role: 'plain' }, { w: 'regnet', role: 'plain' },
    { w: '.', plain: true }, { w: 'Deshalb', role: 'r-verbadverb' }, { w: 'bleiben', role: 'plain' }, { w: 'wir', role: 'plain' }, { w: 'zu', role: 'plain' }, { w: 'Hause', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Verbindungsadverbien connect two sentences with the verb still in Position 2.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Vera and Timo discuss an economic report, tracing cause, result, and contrast.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 54 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the cause/result/contrast connector groups and register differences.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of Verbindungsadverbien.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the connector, the relationship, and correct word order.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain reasons and give conclusions using conjunctive adverbs naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and essays using a wide variety of connectors instead of repeating "weil".' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill connector choice, conjunction-to-Verbindungsadverb transformation, and word order.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 440 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 54 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Connector-choice drills, conjunction-to-Verbindungsadverb transformation, register selection, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Verbindungsadverbien reference — full connector table, register comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es regnet. Deshalb bleiben wir zu Hause.', text: 'Use deshalb/deswegen/daher/darum for cause→result' },
    { de: 'Die Prüfung war erfolgreich. Somit kann Anna studieren.', text: 'Use folglich/somit for formal results' },
    { de: 'Es regnete. Trotzdem gingen wir spazieren.', text: 'Use trotzdem/dennoch for contrast' },
    { de: 'weil (Nebensatz) vs. deshalb (neuer Hauptsatz)', text: 'Distinguish conjunctions from conjunctive adverbs' },
    { de: 'Verb bleibt IMMER in Position 2', text: 'Keep the verb in Position 2 after every Verbindungsadverb' }
  ],

  // ---------- Vocabulary (54 items — uploaded chapter-25 list) ----------
  vocab: [
    { de: 'Strategie', art: 'die', gender: 'f', plural: 'Strategien', pos: 'noun', level: 'B2', en: 'strategy', hi: 'रणनीति', ex: 'Die Strategie war erfolgreich.', exEn: 'The strategy was successful.', exHi: 'Rananeeti safal thi.', ex2: 'Sie entwickelten eine neue Strategie.', ex2En: 'They developed a new strategy.', ex2Hi: 'Unhone ek nayi rananeeti vikasit ki.' },
    { de: 'Strecke', art: 'die', gender: 'f', plural: 'Strecken', pos: 'noun', level: 'B2', en: 'route, stretch', hi: 'मार्ग', ex: 'Die Strecke ist zwanzig Kilometer lang.', exEn: 'The route is twenty kilometres long.', exHi: 'Maarg bees kilometre lamba hai.', ex2: 'Wir fuhren die ganze Strecke ohne Pause.', ex2En: 'We drove the whole stretch without a break.', ex2Hi: 'Humne poora maarg bina rukaavat ke tay kiya.' },
    { de: 'Sucht', art: 'die', gender: 'f', plural: 'Süchte', pos: 'noun', level: 'B2', en: 'addiction', hi: 'लत', ex: 'Die Sucht ist schwer zu bekämpfen.', exEn: 'Addiction is hard to fight.', exHi: 'Lat se ladna mushkil hai.', ex2: 'Er kämpfte gegen seine Sucht.', ex2En: 'He fought against his addiction.', ex2Hi: 'Woh apni lat ke khilaaf laDaa.' },
    { de: 'symbolisch', pos: 'adjective', level: 'B2', en: 'symbolic', hi: 'प्रतीकात्मक', ex: 'Die Geste war rein symbolisch.', exEn: 'The gesture was purely symbolic.', exHi: 'Ishaara poori tarah prateekaatmak tha.', ex2: 'Der Preis hat symbolischen Wert.', ex2En: 'The prize has symbolic value.', ex2Hi: 'Puraskaar ka prateekaatmak mahatva hai.' },
    { de: 'Taekwondo', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'taekwondo', hi: 'ताइक्वांडो', ex: 'Er übt Taekwondo seit fünf Jahren.', exEn: 'He has practised taekwondo for five years.', exHi: 'Woh paanch saal se taekwondo kar raha hai.', ex2: 'Taekwondo verbessert die Kondition.', ex2En: 'Taekwondo improves fitness.', ex2Hi: 'Taekwondo fitness behtar banaata hai.' },
    { de: 'tatenlos', pos: 'adjective', level: 'B2', en: 'idle, without acting', hi: 'निष्क्रिय', ex: 'Sie blieb nicht tatenlos.', exEn: 'She did not remain idle.', exHi: 'Woh nishkriya nahi rahi.', ex2: 'Man kann nicht tatenlos zusehen.', ex2En: 'One cannot watch without acting.', ex2Hi: 'Bina kuch kiye dekha nahi ja sakta.' },
    { de: 'thematisieren', pos: 'verb', level: 'B2', en: 'to address, raise a topic', hi: 'विषय उठाना', ex: 'Darum thematisierte die Familie das Problem.', exEn: 'Therefore, the family raised the problem.', exHi: 'Isliye, parivaar ne samasya uthaayi.', ex2: 'Sie thematisierte das Thema in ihrem Vortrag.', ex2En: 'She addressed the topic in her talk.', ex2Hi: 'Usne apne vyaakhyaan mein vishay uthaaya.', conj: { praesens: 'thematisiert', praeteritum: 'thematisierte', perfekt: 'hat thematisiert' } },
    { de: 'Turnschuh', art: 'der', gender: 'm', plural: 'Turnschuhe', pos: 'noun', level: 'B2', en: 'trainer, sneaker', hi: 'स्नीकर', ex: 'Sie trägt bequeme Turnschuhe.', exEn: 'She wears comfortable trainers.', exHi: 'Woh aaraamdayak sneakers pehanti hai.', ex2: 'Die Turnschuhe waren im Sonderangebot.', ex2En: 'The trainers were on special offer.', ex2Hi: 'Sneakers vishesh offer mein the.' },
    { de: 'überlassen', pos: 'verb', level: 'B2', en: 'to leave, hand over to someone', hi: 'सौंपना', ex: 'Er überließ ihr die Entscheidung.', exEn: 'He left the decision to her.', exHi: 'Usne faisla usko saump diya.', ex2: 'Sie überließen uns das Haus.', ex2En: 'They left the house to us.', ex2Hi: 'Unhone ghar humein saump diya.', conj: { praesens: 'überlässt', praeteritum: 'überließ', perfekt: 'hat überlassen' } },
    { de: 'überregional', pos: 'adjective', level: 'B2', en: 'supra-regional, national', hi: 'राष्ट्रीय स्तर का', ex: 'Die Zeitung erscheint überregional.', exEn: 'The newspaper is published nationally.', exHi: 'Akhbaar raashtriya star par prakaashit hota hai.', ex2: 'Er ist überregional bekannt.', ex2En: 'He is known nationally.', ex2Hi: 'Woh raashtriya star par prasiddh hai.' },
    { de: 'überschüssig', pos: 'adjective', level: 'B2', en: 'surplus, excess', hi: 'अतिरिक्त', ex: 'Die Naturkatastrophe vernichtete überschüssige Ernten.', exEn: 'The natural disaster destroyed surplus harvests.', exHi: 'Prakritik aapda ne atirikt fasalein nasht kar deen.', ex2: 'Überschüssige Ware wurde gespendet.', ex2En: 'Surplus goods were donated.', ex2Hi: 'Atirikt saamaan daan kiya gaya.' },
    { de: 'übertrieben', pos: 'adjective', level: 'B2', en: 'exaggerated', hi: 'अतिशयोक्तिपूर्ण', ex: 'Das war übertrieben.', exEn: 'That was exaggerated.', exHi: 'Yeh atishayokti-poorn tha.', ex2: 'Seine Reaktion war übertrieben.', ex2En: 'His reaction was exaggerated.', ex2Hi: 'Uski pratikriya atishayokti-poorn thi.' },
    { de: 'unbezahlt', pos: 'adjective', level: 'B2', en: 'unpaid', hi: 'अवैतनिक', ex: 'Sie leistete unbezahlte Überstunden.', exEn: 'She worked unpaid overtime.', exHi: 'Usne avaitanik overtime kiya.', ex2: 'Die Rechnung blieb unbezahlt.', ex2En: 'The bill remained unpaid.', ex2Hi: 'Bill ka bhugtaan nahi hua.' },
    { de: 'unentgeltlich', pos: 'adjective', level: 'B2', en: 'free of charge', hi: 'नि:शुल्क', ex: 'Manche Sozialhilfeempfänger bekamen unentgeltlich Nachhilfestunden.', exEn: 'Some welfare recipients received free tutoring sessions.', exHi: 'Kuch kalyaan praaptkartaon ko nishulk tuition session mile.', ex2: 'Der Service ist unentgeltlich.', ex2En: 'The service is free of charge.', ex2Hi: 'Seva nishulk hai.' },
    { de: 'unentschlossen', pos: 'adjective', level: 'B2', en: 'undecided', hi: 'अनिश्चित', ex: 'Manche Geringverdiener blieben unentschlossen.', exEn: 'Some low earners remained undecided.', exHi: 'Kuch kam kamaane waale anishchit rahe.', ex2: 'Er war noch unentschlossen.', ex2En: 'He was still undecided.', ex2Hi: 'Woh abhi bhi anishchit tha.' },
    { de: 'ungebrochen', pos: 'adjective', level: 'B2', en: 'unbroken, undiminished', hi: 'अटूट', ex: 'Somit blieb die Nachfrage ungebrochen.', exEn: 'Thus, the demand remained unbroken.', exHi: 'Is prakaar, maang atoot rahi.', ex2: 'Ihr Optimismus ist ungebrochen.', ex2En: 'Her optimism is undiminished.', ex2Hi: 'Uska aashaavaad atoot hai.' },
    { de: 'Unterhalt', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'maintenance, upkeep', hi: 'भरण-पोषण', ex: 'Der Alleinernährer zahlte den Unterhalt nicht.', exEn: 'The sole breadwinner didn\'t pay the maintenance.', exHi: 'Ekal kamaane waale ne bharan-poshan nahi diya.', ex2: 'Der Unterhalt des Hauses ist teuer.', ex2En: 'The upkeep of the house is expensive.', ex2Hi: 'Ghar ka bharan-poshan mehnga hai.' },
    { de: 'unverändert', pos: 'adjective', level: 'B2', en: 'unchanged', hi: 'अपरिवर्तित', ex: 'Der Wirtschaftsprozess lief unverändert weiter.', exEn: 'The economic process continued unchanged.', exHi: 'Aarthik prakriya apariवaartित chalti rahi.', ex2: 'Die Preise blieben unverändert.', ex2En: 'The prices remained unchanged.', ex2Hi: 'Daam apariवaartित rahe.' },
    { de: 'verallgemeinern', pos: 'verb', level: 'B2', en: 'to generalise', hi: 'सामान्यीकरण करना', ex: 'Man sollte nicht verallgemeinern.', exEn: 'One shouldn\'t generalise.', exHi: 'Saamaanyikaran nahi karna chaahiye.', ex2: 'Sie verallgemeinerte ihre Erfahrung.', ex2En: 'She generalised her experience.', ex2Hi: 'Usne apne anubhav ka saamaanyikaran kiya.', conj: { praesens: 'verallgemeinert', praeteritum: 'verallgemeinerte', perfekt: 'hat verallgemeinert' } },
    { de: 'Verband', art: 'der', gender: 'm', plural: 'Verbände', pos: 'noun', level: 'B2', en: 'association, bandage', hi: 'संघ, पट्टी', ex: 'Der Verband vertritt viele Unternehmen.', exEn: 'The association represents many companies.', exHi: 'Sangh kai companiyon ka pratinidhitva karta hai.', ex2: 'Sie legte einen Verband an.', ex2En: 'She applied a bandage.', ex2Hi: 'Usne patti baandhi.' },
    { de: 'verderblich', pos: 'adjective', level: 'B2', en: 'perishable', hi: 'नाशवान', ex: 'Milchprodukte sind verderblich.', exEn: 'Dairy products are perishable.', exHi: 'Dairy products naashvaan hote hain.', ex2: 'Verderbliche Ware muss gekühlt werden.', ex2En: 'Perishable goods must be refrigerated.', ex2Hi: 'Naashvaan saamaan ko theek se rakha jaana chaahiye.' },
    { de: 'verhindern', pos: 'verb', level: 'B2', en: 'to prevent', hi: 'रोकना', ex: 'Der Mobilfunkanbieter verhinderte einen Gewaltübergriff.', exEn: 'The mobile network provider prevented a violent assault.', exHi: 'Mobile network provider ne ek hinsak hamla roka.', ex2: 'Man muss solche Fehler verhindern.', ex2En: 'One must prevent such mistakes.', ex2Hi: 'Aisi galtiyon ko rokna chaahiye.', conj: { praesens: 'verhindert', praeteritum: 'verhinderte', perfekt: 'hat verhindert' } },
    { de: 'vernichten', pos: 'verb', level: 'B2', en: 'to destroy, annihilate', hi: 'नष्ट करना', ex: 'Die Naturkatastrophe vernichtete überschüssige Ernten.', exEn: 'The natural disaster destroyed surplus harvests.', exHi: 'Prakritik aapda ne atirikt fasalein nasht kar deen.', ex2: 'Das Feuer vernichtete das ganze Gebäude.', ex2En: 'The fire destroyed the entire building.', ex2Hi: 'Aag ne poori building nasht kar di.', conj: { praesens: 'vernichtet', praeteritum: 'vernichtete', perfekt: 'hat vernichtet' } },
    { de: 'vertreiben', pos: 'verb', level: 'B2', en: 'to drive away, sell, pass time', hi: 'भगाना, बेचना', ex: 'Sie vertrieben die Zeit mit Spielen.', exEn: 'They passed the time with games.', exHi: 'Unhone khelon se samay bitaaya.', ex2: 'Die Firma vertreibt ihre Produkte weltweit.', ex2En: 'The company sells its products worldwide.', ex2Hi: 'Company apne products poori duniya mein bechti hai.', conj: { praesens: 'vertreibt', praeteritum: 'vertrieb', perfekt: 'hat vertrieben' } },
    { de: 'virtuell', pos: 'adjective', level: 'B2', en: 'virtual', hi: 'आभासी', ex: 'Sie besuchten ein virtuelles Treffen.', exEn: 'They attended a virtual meeting.', exHi: 'Unhone ek aabhaasi baithak mein bhaag liya.', ex2: 'Virtuelle Realität wird immer beliebter.', ex2En: 'Virtual reality is becoming increasingly popular.', ex2Hi: 'Aabhaasi vaastavikta lagataar lokpriya ho rahi hai.' },
    { de: 'Vortrag', art: 'der', gender: 'm', plural: 'Vorträge', pos: 'noun', level: 'B2', en: 'talk, lecture', hi: 'व्याख्यान', ex: 'Der Vortrag war sehr informativ.', exEn: 'The talk was very informative.', exHi: 'Vyaakhyaan bahut soochnaaprad tha.', ex2: 'Sie hielt einen Vortrag über Klimawandel.', ex2En: 'She gave a talk about climate change.', ex2Hi: 'Usne jalvaayu parivartan par vyaakhyaan diya.' },
    { de: 'Waffe', art: 'die', gender: 'f', plural: 'Waffen', pos: 'noun', level: 'B2', en: 'weapon', hi: 'हथियार', ex: 'Der Besitz einer Waffe ist streng geregelt.', exEn: 'Owning a weapon is strictly regulated.', exHi: 'Hathiyaar rakhna sakhti se niyantrit hai.', ex2: 'Er trug keine Waffe.', ex2En: 'He carried no weapon.', ex2Hi: 'Uske paas koi hathiyaar nahi tha.' },
    { de: 'Weg', art: 'der', gender: 'm', plural: 'Wege', pos: 'noun', level: 'B2', en: 'way, path, route', hi: 'रास्ता', ex: 'Der Weg zur Arbeit dauert eine Stunde.', exEn: 'The way to work takes an hour.', exHi: 'Kaam ka raasta ek ghanta leta hai.', ex2: 'Sie fanden einen besseren Weg.', ex2En: 'They found a better way.', ex2Hi: 'Unhone ek behtar raasta dhoondha.' },
    { de: 'Weltbank', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'World Bank', hi: 'विश्व बैंक', ex: 'Dennoch blieb die Weltbank zuversichtlich.', exEn: 'Nonetheless, the World Bank remained confident.', exHi: 'Phir bhi, Vishwa Bank aashaanvit rahi.', ex2: 'Die Weltbank unterstützt Entwicklungsländer.', ex2En: 'The World Bank supports developing countries.', ex2Hi: 'Vishwa Bank vikaasasheel deshon ki sahaayata karta hai.' },
    { de: 'Wert', art: 'der', gender: 'm', plural: 'Werte', pos: 'noun', level: 'B2', en: 'value, worth', hi: 'मूल्य', ex: 'Der Wert des Hauses stieg.', exEn: 'The value of the house rose.', exHi: 'Ghar ka mulya badha.', ex2: 'Ehrlichkeit ist ein wichtiger Wert.', ex2En: 'Honesty is an important value.', ex2Hi: 'Imaandaari ek mahatvapurn mulya hai.' },
    { de: 'Wertewandel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'change of values', hi: 'मूल्यों में परिवर्तन', ex: 'Der Wertewandel prägt die junge Generation.', exEn: 'The change of values shapes the young generation.', exHi: 'Mulyon mein parivartan yuva peedhi ko roop deta hai.', ex2: 'Ein Wertewandel ist deutlich zu erkennen.', ex2En: 'A change of values is clearly noticeable.', ex2Hi: 'Mulyon mein parivartan spasht dikhaayi deta hai.' },
    { de: 'Wohnsitz', art: 'der', gender: 'm', plural: 'Wohnsitze', pos: 'noun', level: 'B2', en: 'place of residence', hi: 'निवास स्थान', ex: 'Ihr Wohnsitz ist in Berlin.', exEn: 'Her place of residence is in Berlin.', exHi: 'Uska nivaas sthaan Berlin mein hai.', ex2: 'Er meldete seinen neuen Wohnsitz an.', ex2En: 'He registered his new place of residence.', ex2Hi: 'Usne apna naya nivaas sthaan register kiya.' },
    { de: 'Zahnpastatube', art: 'die', gender: 'f', plural: 'Zahnpastatuben', pos: 'noun', level: 'B2', en: 'toothpaste tube', hi: 'टूथपेस्ट ट्यूब', ex: 'Die Zahnpastatube ist fast leer.', exEn: 'The toothpaste tube is almost empty.', exHi: 'Toothpaste tube lagbhag khaali hai.', ex2: 'Sie kaufte eine neue Zahnpastatube.', ex2En: 'She bought a new toothpaste tube.', ex2Hi: 'Usne naya toothpaste tube khareeda.' },
    { de: 'zeitintensiv', pos: 'adjective', level: 'B2', en: 'time-intensive', hi: 'समय लेने वाला', ex: 'Das Projekt war sehr zeitintensiv.', exEn: 'The project was very time-intensive.', exHi: 'Project bahut samay lene waala tha.', ex2: 'Zeitintensive Aufgaben brauchen Geduld.', ex2En: 'Time-intensive tasks require patience.', ex2Hi: 'Samay lene waale kaam mein sahansheelta chaahiye.' },
    { de: 'zurückhaltend', pos: 'adjective', level: 'B2', en: 'reserved, restrained', hi: 'संयमित', ex: 'Er ist eher zurückhaltend.', exEn: 'He is rather reserved.', exHi: 'Woh kaafi sanyamit hai.', ex2: 'Sie reagierte zurückhaltend auf die Idee.', ex2En: 'She reacted in a restrained way to the idea.', ex2Hi: 'Usne vichaar par sanyamit pratikriya di.' },
    { de: 'zuversichtlich', pos: 'adjective', level: 'B2', en: 'confident, optimistic', hi: 'आशान्वित', ex: 'Die Strategie war erfolgreich. Deshalb wurde das Handelsunternehmen zuversichtlich.', exEn: 'The strategy was successful. That\'s why the trading company became confident.', exHi: 'Rananeeti safal thi. Isiliye vyaapaarik company aashaanvit ho gayi.', ex2: 'Sie blieb trotz allem zuversichtlich.', ex2En: 'Despite everything, she remained confident.', ex2Hi: 'Sab kuch ke baavjood, woh aashaanvit rahi.' },
    { de: 'Alleinernährer/in', art: 'der/die', gender: 'm/f', plural: 'Alleinernährer/innen', pos: 'noun', level: 'B2', en: 'sole breadwinner', hi: 'एकल कमाने वाला', ex: 'Der Alleinernährer zahlte den Unterhalt nicht.', exEn: 'The sole breadwinner didn\'t pay the maintenance.', exHi: 'Ekal kamaane waale ne bharan-poshan nahi diya.', ex2: 'Als Alleinernährerin trägt sie viel Verantwortung.', ex2En: 'As the sole breadwinner, she carries a lot of responsibility.', ex2Hi: 'Ekal kamaane waali hone ke naate, woh bahut zimmedaari uthaati hai.' },
    { de: 'Asylberechtigte/r', art: 'der/die', gender: 'm/f', plural: 'Asylberechtigte', pos: 'noun', level: 'B2', en: 'person entitled to asylum', hi: 'शरण का अधिकारी', ex: 'Der Asylberechtigte erhielt eine Wohnung.', exEn: 'The person entitled to asylum received a flat.', exHi: 'Sharan ke adhikaari ko ek flat mila.', ex2: 'Asylberechtigte haben bestimmte Rechte.', ex2En: 'People entitled to asylum have certain rights.', ex2Hi: 'Sharan ke adhikaariyon ke kuch niyat adhikaar hote hain.' },
    { de: 'Computerspielsucht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'computer game addiction', hi: 'कंप्यूटर गेम की लत', ex: 'Computerspielsucht betrifft viele Jugendliche.', exEn: 'Computer game addiction affects many youths.', exHi: 'Computer game ki lat kai yuvaon ko prabhaavit karti hai.', ex2: 'Die Behandlung von Computerspielsucht erfordert Geduld.', ex2En: 'Treatment of computer game addiction requires patience.', ex2Hi: 'Computer game ki lat ke ilaaj mein sahansheelta chaahiye.' },
    { de: 'Frauenzeitschrift', art: 'die', gender: 'f', plural: 'Frauenzeitschriften', pos: 'noun', level: 'B2', en: 'women\'s magazine', hi: 'महिला पत्रिका', ex: 'Sie liest gern eine Frauenzeitschrift.', exEn: 'She likes reading a women\'s magazine.', exHi: 'Use mahila patrika padhna pasand hai.', ex2: 'Die Frauenzeitschrift veröffentlichte einen interessanten Artikel.', ex2En: 'The women\'s magazine published an interesting article.', ex2Hi: 'Mahila patrika ne ek dilchasp lekh prakaashit kiya.' },
    { de: 'Frühbucherrabatt', art: 'der', gender: 'm', plural: 'Frühbucherrabatte', pos: 'noun', level: 'B2', en: 'early-booking discount', hi: 'शुरुआती-बुकिंग छूट', ex: 'Der Frühbucherrabatt lockte viele Kunden an.', exEn: 'The early-booking discount lured many customers.', exHi: 'Shuruaati-booking chhoot ne kai graahakon ko lubhaaya.', ex2: 'Der Frühbucherrabatt gilt bis Ende des Monats.', ex2En: 'The early-booking discount is valid until the end of the month.', ex2Hi: 'Shuruaati-booking chhoot mahine ke ant tak lagoo hai.' },
    { de: 'Geringverdiener/in', art: 'der/die', gender: 'm/f', plural: 'Geringverdiener/innen', pos: 'noun', level: 'B2', en: 'low earner', hi: 'कम कमाने वाला', ex: 'Manche Geringverdiener blieben unentschlossen.', exEn: 'Some low earners remained undecided.', exHi: 'Kuch kam kamaane waale anishchit rahe.', ex2: 'Geringverdiener brauchen zusätzliche Unterstützung.', ex2En: 'Low earners need additional support.', ex2Hi: 'Kam kamaane waalon ko atirikt sahaayata chaahiye.' },
    { de: 'Gewaltübergriff', art: 'der', gender: 'm', plural: 'Gewaltübergriffe', pos: 'noun', level: 'B2', en: 'violent assault', hi: 'हिंसक हमला', ex: 'Der Mobilfunkanbieter verhinderte einen Gewaltübergriff.', exEn: 'The mobile network provider prevented a violent assault.', exHi: 'Mobile network provider ne ek hinsak hamla roka.', ex2: 'Der Gewaltübergriff wurde der Polizei gemeldet.', ex2En: 'The violent assault was reported to the police.', ex2Hi: 'Hinsak hamle ki soochna police ko di gayi.' },
    { de: 'Handelsunternehmen', art: 'das', gender: 'n', plural: 'Handelsunternehmen', pos: 'noun', level: 'B2', en: 'trading company', hi: 'व्यापारिक कंपनी', ex: 'Die Strategie war erfolgreich. Deshalb wurde das Handelsunternehmen zuversichtlich.', exEn: 'The strategy was successful. That\'s why the trading company became confident.', exHi: 'Rananeeti safal thi. Isiliye vyaapaarik company aashaanvit ho gayi.', ex2: 'Das Handelsunternehmen expandiert weltweit.', ex2En: 'The trading company is expanding worldwide.', ex2Hi: 'Vyaapaarik company poori duniya mein vistaar kar rahi hai.' },
    { de: 'Informationsmaterial', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'information material', hi: 'सूचना सामग्री', ex: 'Das Informationsmaterial wurde an alle verteilt.', exEn: 'The information material was distributed to everyone.', exHi: 'Soochana saamagri sabko baanti gayi.', ex2: 'Sie forderten zusätzliches Informationsmaterial an.', ex2En: 'They requested additional information material.', ex2Hi: 'Unhone atirikt soochana saamagri maangi.' },
    { de: 'Mobilfunkanbieter', art: 'der', gender: 'm', plural: 'Mobilfunkanbieter', pos: 'noun', level: 'B2', en: 'mobile network provider', hi: 'मोबाइल नेटवर्क प्रदाता', ex: 'Der Mobilfunkanbieter verhinderte einen Gewaltübergriff.', exEn: 'The mobile network provider prevented a violent assault.', exHi: 'Mobile network provider ne ek hinsak hamla roka.', ex2: 'Sie wechselten den Mobilfunkanbieter.', ex2En: 'They switched mobile network providers.', ex2Hi: 'Unhone mobile network provider badla.' },
    { de: 'Musikunterricht', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'music lessons', hi: 'संगीत शिक्षा', ex: 'Sie nimmt seit drei Jahren Musikunterricht.', exEn: 'She has taken music lessons for three years.', exHi: 'Woh teen saal se sangeet shiksha le rahi hai.', ex2: 'Der Musikunterricht war sehr effektiv.', ex2En: 'The music lessons were very effective.', ex2Hi: 'Sangeet shiksha bahut prabhaavi thi.' },
    { de: 'Nachhilfestunde', art: 'die', gender: 'f', plural: 'Nachhilfestunden', pos: 'noun', level: 'B2', en: 'tutoring session', hi: 'ट्यूशन सत्र', ex: 'Manche Sozialhilfeempfänger bekamen unentgeltlich Nachhilfestunden.', exEn: 'Some welfare recipients received free tutoring sessions.', exHi: 'Kuch kalyaan praaptkartaon ko nishulk tuition session mile.', ex2: 'Die Nachhilfestunde dauerte eine Stunde.', ex2En: 'The tutoring session lasted an hour.', ex2Hi: 'Tuition session ek ghanta chala.' },
    { de: 'Naturkatastrophe', art: 'die', gender: 'f', plural: 'Naturkatastrophen', pos: 'noun', level: 'B2', en: 'natural disaster', hi: 'प्राकृतिक आपदा', ex: 'Die Naturkatastrophe vernichtete überschüssige Ernten.', exEn: 'The natural disaster destroyed surplus harvests.', exHi: 'Prakritik aapda ne atirikt fasalein nasht kar deen.', ex2: 'Die Naturkatastrophe betraf viele Regionen.', ex2En: 'The natural disaster affected many regions.', ex2Hi: 'Prakritik aapda ne kai kshetron ko prabhaavit kiya.' },
    { de: 'Schwiegermutter', art: 'die', gender: 'f', plural: 'Schwiegermütter', pos: 'noun', level: 'B2', en: 'mother-in-law', hi: 'सास', ex: 'Ihre Schwiegermutter besucht sie oft.', exEn: 'Her mother-in-law visits her often.', exHi: 'Uski saas usse aksar milne aati hai.', ex2: 'Die Schwiegermutter half bei der Kinderbetreuung.', ex2En: 'The mother-in-law helped with childcare.', ex2Hi: 'Saas ne bachon ki dekhbhaal mein madad ki.' },
    { de: 'Sicherheitsleiter/in', art: 'der/die', gender: 'm/f', plural: 'Sicherheitsleiter/innen', pos: 'noun', level: 'B2', en: 'head of security', hi: 'सुरक्षा प्रमुख', ex: 'Daher lobte der Sicherheitsleiter das Team.', exEn: 'Hence, the head of security praised the team.', exHi: 'Ataha, suraksha pramukh ne team ki prashansa ki.', ex2: 'Der Sicherheitsleiter überprüfte alle Ausgänge.', ex2En: 'The head of security checked all the exits.', ex2Hi: 'Suraksha pramukh ne saare exits jaanche.' },
    { de: 'Sozialhilfeempfänger/in', art: 'der/die', gender: 'm/f', plural: 'Sozialhilfeempfänger/innen', pos: 'noun', level: 'B2', en: 'welfare recipient', hi: 'कल्याण प्राप्तकर्ता', ex: 'Manche Sozialhilfeempfänger bekamen unentgeltlich Nachhilfestunden.', exEn: 'Some welfare recipients received free tutoring sessions.', exHi: 'Kuch kalyaan praaptkartaon ko nishulk tuition session mile.', ex2: 'Die Zahl der Sozialhilfeempfänger sank.', ex2En: 'The number of welfare recipients declined.', ex2Hi: 'Kalyaan praaptkartaaon ki sankhya ghati.' },
    { de: 'Wirtschaftsprozess', art: 'der', gender: 'm', plural: 'Wirtschaftsprozesse', pos: 'noun', level: 'B2', en: 'economic process', hi: 'आर्थिक प्रक्रिया', ex: 'Der Wirtschaftsprozess lief unverändert weiter.', exEn: 'The economic process continued unchanged.', exHi: 'Aarthik prakriya apariवaartित chalti rahi.', ex2: 'Der Wirtschaftsprozess wurde genau analysiert.', ex2En: 'The economic process was analyzed precisely.', ex2Hi: 'Aarthik prakriya ka satik vishleshan kiya gaya.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Verbindungsadverbien?',
      body: [ 'Verbindungsadverbien connect TWO complete ideas. Unlike conjunctions, they begin a NEW main clause — the verb stays in Position 2.' ],
      table: {
        head: ['Correct', 'Incorrect'],
        rows: [
          ['<span class="de">Es regnet. Deshalb bleiben wir zu Hause.</span>', '<span class="strike de">Deshalb wir bleiben zu Hause.</span>']
        ]
      },
      hinglish: 'Verbindungsadverbien do poori baaton ko jodte hain. Farak yeh hai ki conjunctions ki tarah yeh subordinate clause nahi banate \u2014 yeh ek naya main clause shuru karte hain, isliye verb turant inke baad Position 2 par aata hai.'
    },
    {
      title: 'Ursache → Folge (Cause → Result)',
      body: [ '"deshalb", "deswegen", "daher", "darum" — all mean roughly the same, with small style/register differences.' ],
      table: {
        head: ['Connector', 'Register'],
        rows: [
          ['deshalb', 'Neutral'],
          ['deswegen', 'Spoken'],
          ['daher', 'Formal'],
          ['darum', 'Spoken']
        ]
      },
      hinglish: '"deshalb", "deswegen", "daher" aur "darum" \u2014 in chaaron ka matlab lagbhag ek hi hai. Fark sirf register ka hai: <b>daher</b> formal writing mein zyada aata hai, aur <b>deswegen</b> ya <b>darum</b> bolchaal mein.'
    },
    {
      title: 'Ergebnis, formell (Result, Formal)',
      body: [ '"folglich" (therefore) and "somit" (thus/consequently) are very common in reports, presentations, newspapers, and scientific writing.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Alle Voraussetzungen wurden erfüllt. Folglich wurde das Projekt genehmigt.</span>'],
          ['<span class="de">Die Prüfung war erfolgreich. Somit kann Anna studieren.</span>']
        ]
      },
      hinglish: '"folglich" aur "somit" formal German ke shabd hain \u2014 reports, presentations aur scientific writing mein aksar dikhte hain. Dosto se baat karte waqt inhe use karo to bhaari lagta hai.'
    },
    {
      title: 'Kontrast (Contrast)',
      body: [ '"trotzdem" (nevertheless/still) and "dennoch" (nonetheless/however) express contrast.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es regnete. Trotzdem gingen wir spazieren.</span>'],
          ['<span class="de">Anna war krank. Dennoch arbeitete sie weiter.</span>']
        ]
      },
      hinglish: '"trotzdem" aur "dennoch" contrast batate hain \u2014 matlab kuch hone ke baavjood kaam phir bhi hua. <b>dennoch</b> thoda zyada formal lagta hai.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Sentence 1 (period). Connector (Position 1) + Verb (Position 2) + Subject + Rest.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es war spät. Deshalb gingen wir nach Hause.</span>'],
          ['<span class="de">Es regnete. Trotzdem spielte Anna Fußball.</span>']
        ]
      },
      hinglish: 'Pattern yeh hai: pehle poora sentence khatam karo, phir connector se naya sentence shuru karo. Connector Position 1 leta hai, uske turant baad verb, aur phir subject.'
    },
    {
      title: 'Verbindungsadverb vs. Konjunktion',
      body: [ 'Never confuse a Verbindungsadverb (new main clause, V2) with a subordinating conjunction like "weil" (Nebensatz, verb at the end).' ],
      table: {
        head: ['weil (Nebensatz)', 'deshalb (neuer Hauptsatz)'],
        rows: [
          ['<span class="de">Ich blieb zu Hause, weil ich krank war.</span>', '<span class="de">Ich war krank. Deshalb blieb ich zu Hause.</span>']
        ]
      },
      hinglish: 'In dono ko mila mat do. <b>weil</b> subordinate clause banata hai, isliye uska verb clause ke end mein jaata hai. <b>deshalb</b> naya main clause shuru karta hai, isliye uska verb Position 2 par rehta hai.'
    },
    {
      title: 'Registervergleich',
      body: [ 'Register ka dhyaan rakho \u2014 kuch connectors rozmarra ki baat mein natural lagte hain, aur kuch sirf formal writing mein. Exam ki writing mein formal wale zyada kaam aate hain.' ],
      table: {
        head: ['Everyday', 'Formal'],
        rows: [
          ['deshalb, deswegen, darum, trotzdem', 'daher, folglich, somit, dennoch']
        ]
      },
      hinglish: 'Register ka dhyaan rakho \u2014 kuch connectors rozmarra ki baat mein natural lagte hain, aur kuch sirf formal writing mein. Exam ki writing mein formal wale zyada kaam aate hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from putting the subject before the verb after a Verbindungsadverb, or confusing it with a conjunction.' ],
      mistakes: [
        { wrong: 'Deshalb wir gehen nach Hause.', right: 'Deshalb gehen wir nach Hause.', why: 'The finite verb must immediately follow the Verbindungsadverb — subject comes after the verb.' },
        { wrong: 'Trotzdem es regnet wir gehen.', right: 'Es regnet. Trotzdem gehen wir.', why: 'This needs two separate sentences, each with V2 word order — not one merged clause.' },
        { wrong: 'Daher weil wir müde waren, gingen wir nach Hause.', right: 'Wir waren müde. Daher gingen wir nach Hause.', why: '"daher" is a Verbindungsadverb, so it cannot be stacked on top of the conjunction "weil". Pick one: either a weil-Nebensatz, or a new main clause starting with "daher".' },
        { wrong: 'Die Prüfung war erfolgreich, somit dass Anna studieren kann.', right: 'Die Prüfung war erfolgreich. Somit kann Anna studieren.', why: '"somit" is a Verbindungsadverb, not a conjunction, so it never introduces a dass-clause \u2014 it opens a new main clause with the verb in Position 2.' },
        { wrong: 'Folglich wir haben bestanden.', right: 'Folglich haben wir bestanden.', why: 'The finite verb ("haben") must come immediately after "folglich", before the subject.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 connector ke baad subject ko verb se pehle rakh dena, ya Verbindungsadverb ko conjunction samajh lena aur uske saath <b>weil</b> ya <b>dass</b> jod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Using a variety of Verbindungsadverbien instead of repeating "weil" significantly improves Goethe B2 writing scores.' ],
      note: 'Memory trick: a Verbindungsadverb starts a NEW sentence — the verb ALWAYS stays in Position 2. Need a subordinate clause? Use "weil". Need a new sentence? Use a Verbindungsadverb.',
      hinglish: 'Baar-baar "weil" likhne ke bajaay alag-alag Verbindungsadverbien use karo \u2014 Goethe B2 ki writing mein isse kaafi farak padta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Nachrichtenbericht: Spendenaufruf nach der Flut',
    titleEn: 'News report: appeal for donations after the flood',
    tokens: [
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'schweren', role: 'plain', en: 'severe', hi: 'गंभीर', type: 'Adjective' },
      { w: 'Naturkatastrophe', role: 'plain', en: 'natural disaster (Satzende)', hi: 'प्राकृतिक आपदा (Satzende)', type: 'Noun · fem.', why: 'die Naturkatastrophe (this chapter).' },
      { w: 'rief', role: 'plain', en: 'called', hi: 'बुलाया', type: 'Verb · rufen' },
      { w: 'eine', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'überregionale', role: 'plain', en: 'nationwide', hi: 'राष्ट्रव्यापी', type: 'Adjective', why: 'überregional (this chapter).' },
      { w: 'Hilfsorganisation', role: 'plain', en: 'aid organisation (Satzende)', hi: 'सहायता संगठन (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · aufrufen' },
      { w: 'Spenden', role: 'plain', en: 'donations', hi: 'दान', type: 'Noun · plural', why: 'die Spende (this chapter).' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'के लिए', type: 'Preposition' },
      { w: '.', plain: true },
      { w: 'Zunächst', role: 'plain', en: 'at first', hi: 'सबसे पहले', type: 'Adverb' },
      { w: 'reagierten', role: 'plain', en: 'reacted', hi: 'प्रतिक्रिया दी', type: 'Verb · reagieren' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'wenige', role: 'plain', en: 'few', hi: 'कुछ ही', type: 'Adjective' },
      { w: 'Firmen', role: 'plain', en: 'companies (Satzende)', hi: 'कंपनियाँ (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Dennoch', role: 'r-connector', en: 'nevertheless', hi: 'फिर भी', type: 'Konjunktionaladverb (Position 1, invertiert)', why: 'dennoch, a connecting adverb, takes position 1 and pulls the finite verb into position 2 (this chapter).' },
      { w: 'fand', role: 'plain', en: 'found (Position 2)', hi: 'मिला (Position 2)', type: 'Verb · finden (Position 2)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'schließlich', role: 'plain', en: 'eventually', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'großer', role: 'plain', en: 'large', hi: 'बड़ा', type: 'Adjective' },
      { w: 'Sponsor', role: 'plain', en: 'sponsor (Satzende)', hi: 'प्रायोजक (Satzende)', type: 'Noun · masc.', why: 'der/die Sponsor/in (this chapter).' },
      { w: '.', plain: true },
      { w: 'Außerdem', role: 'r-connector', en: 'furthermore', hi: 'इसके अलावा', type: 'Konjunktionaladverb (Position 1, invertiert)', why: 'außerdem also occupies position 1, so the verb follows in position 2 (this chapter).' },
      { w: 'meldeten', role: 'plain', en: 'reported (Position 2)', hi: 'दर्ज कराया (Position 2)', type: 'Verb · sich melden (Position 2)' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'zahlreiche', role: 'plain', en: 'numerous', hi: 'अनेक', type: 'Adjective' },
      { w: 'Freiwillige', role: 'plain', en: 'volunteers (Satzende)', hi: 'स्वयंसेवक (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Selbst', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'Asylberechtigte', role: 'plain', en: 'recognised asylum seekers (Satzende)', hi: 'मान्यता प्राप्त शरणार्थी (Satzende)', type: 'Noun · plural', why: 'der/die Asylberechtigte/r (this chapter).' },
      { w: 'halfen', role: 'plain', en: 'helped', hi: 'मदद की', type: 'Verb · helfen' },
      { w: 'beim', role: 'plain', en: 'with the', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Wiederaufbau', role: 'plain', en: 'reconstruction (Satzende)', hi: 'पुनर्निर्माण (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Beobachter', role: 'plain', en: 'observers', hi: 'पर्यवेक्षक', type: 'Noun · plural' },
      { w: 'sprechen', role: 'plain', en: 'speak', hi: 'बात करते हैं', type: 'Verb · sprechen' },
      { w: 'seitdem', role: 'plain', en: 'since then', hi: 'तब से', type: 'Adverb' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'echten', role: 'plain', en: 'genuine', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'Wertewandel', role: 'plain', en: 'shift in values (Satzende)', hi: 'मूल्य परिवर्तन (Satzende)', type: 'Noun · masc.', why: 'der Wertewandel (this chapter).' },
      { w: '.', plain: true },
      { w: 'Trotzdem', role: 'r-connector', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb · Konnektor', why: 'trotzdem connects two clauses like a coordinating conjunction (this chapter).' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'बनी रहती है', type: 'Verb · bleiben' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Lage', role: 'plain', en: 'situation', hi: 'स्थिति', type: 'Noun · fem.' },
      { w: 'vielerorts', role: 'plain', en: 'in many places', hi: 'कई जगहों पर', type: 'Adverb' },
      { w: 'angespannt', role: 'plain', en: 'tense (Satzende)', hi: 'तनावपूर्ण (Satzende)', type: 'Adjective' },
      { w: ';', plain: true },
      { w: 'deshalb', role: 'r-connector', en: 'therefore', hi: 'इसलिए', type: 'Adverb · Konnektor' },
      { w: 'ruft', role: 'plain', en: 'calls', hi: 'बुलाती है', type: 'Verb · aufrufen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Organisation', role: 'plain', en: 'organisation', hi: 'संगठन', type: 'Noun · fem.' },
      { w: 'weiterhin', role: 'plain', en: 'still', hi: 'अब भी', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Dat.' },
      { w: 'Spenden', role: 'plain', en: 'donations (Satzende)', hi: 'दान (Satzende)', type: 'Noun · plural' },
      { w: 'auf', role: 'plain', en: 'up (Satzende, prefix)', hi: '', type: 'Separable prefix · aufrufen' },
      { w: '.', plain: true }
    ],
    translation: 'After the severe natural disaster, a nationwide aid organisation called for donations. At first only a few companies reacted. Nevertheless, a large sponsor was eventually found. Furthermore, numerous volunteers came forward. Even recognised asylum seekers helped with the reconstruction. Observers have since spoken of a genuine shift in values. Nevertheless, the situation remains tense in many places; the organisation is therefore still calling for donations.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_025_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vera, die Spendenaktion war doch ein Erfolg, oder?', en: 'Vera, the donation campaign was a success, wasn\'t it?' },
      { id: 'B2_025_L002', speaker: 'Vera', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, es wurden viele Lebensmittel gesammelt und anschließend verteilt. Trotzdem reicht es nicht für alle Familien.', en: 'Yes, a lot of food was collected and then distributed. Nevertheless it\'s not enough for all families.' },
      { id: 'B2_025_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was schlägst du deshalb vor?', en: 'And what do you therefore suggest?' },
      { id: 'B2_025_L004', speaker: 'Vera', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Deshalb planen wir eine zweite Aktion, denn der Bedarf ist folglich einfach zu groß.', en: 'That\'s why we\'re planning a second campaign, because the need is consequently simply too big.' }
    ],
    transcript: 'Vera, die Spendenaktion war doch ein Erfolg, oder? Ja, es wurden viele Lebensmittel gesammelt und anschließend verteilt. Trotzdem reicht es nicht für alle Familien. Und was schlägst du deshalb vor? Deshalb planen wir eine zweite Aktion, denn der Bedarf ist folglich einfach zu groß.',
    translation: 'Vera, the donation campaign was a success, wasn\'t it? Yes, a lot of food was collected and then distributed. Nevertheless it\'s not enough for all families. And what do you therefore suggest? That\'s why we\'re planning a second campaign, because the need is consequently simply too big.',
    tokens: [
      { w: 'Vera' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Spendenaktion' },
      { w: 'war' },
      { w: 'doch' },
      { w: 'ein' },
      { w: 'Erfolg' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'wurden' },
      { w: 'viele' },
      { w: 'Lebensmittel' },
      { w: 'gesammelt' },
      { w: 'und' },
      { w: 'anschließend' },
      { w: 'verteilt' },
      { w: '.', plain: true },
      { w: 'Trotzdem' },
      { w: 'reicht' },
      { w: 'es' },
      { w: 'nicht' },
      { w: 'für' },
      { w: 'alle' },
      { w: 'Familien' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'schlägst' },
      { w: 'du' },
      { w: 'deshalb' },
      { w: 'vor' },
      { w: '?', plain: true },
      { w: 'Deshalb' },
      { w: 'planen' },
      { w: 'wir' },
      { w: 'eine' },
      { w: 'zweite' },
      { w: 'Aktion' },
      { w: ',', plain: true },
      { w: 'denn' },
      { w: 'der' },
      { w: 'Bedarf' },
      { w: 'ist' },
      { w: 'folglich' },
      { w: 'einfach' },
      { w: 'zu' },
      { w: 'groß' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist mit den gesammelten Lebensmitteln passiert?', qEn: 'What happened to the food after it was collected?', options: ['es wurde weggeworfen', 'es wurde verteilt', 'es wurde verkauft', 'nichts'], optionsEn: ['it was thrown away', 'it was distributed', 'it was sold', 'nothing'], answer: 1,
        explain: '"… es wurden viele Lebensmittel gesammelt und anschließend verteilt."' },
      { q: 'Warum wird eine zweite Aktion geplant?', qEn: 'Why is a second campaign being planned?', options: ['aus Langeweile', 'der Bedarf ist zu groß', 'es gibt zu viel Essen', 'niemand will helfen'], optionsEn: ['out of boredom', 'the demand is too great', 'there is too much food', 'nobody wants to help'], answer: 1,
        explain: '"… der Bedarf ist folglich einfach zu groß."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, ob die Spendenaktion ein Erfolg war.", taskEn: "A friend asks whether the donation drive was a success.", de: "Ja, es wurden viele Lebensmittel gesammelt und anschließend verteilt.", en: "Yes, a lot of food was collected and afterwards distributed." },
    { task: "Er sagt, es reiche nicht für alle. Antworte.", taskEn: "He says it isn't enough for everybody. Answer.", de: "Trotzdem machen wir weiter, denn jede Spende hilft.", en: "Nevertheless we're carrying on, because every donation helps." },
    { task: "Deine Chefin fragt, warum die Kosten gestiegen sind.", taskEn: "Your boss asks why costs have risen.", de: "Die Preise sind gestiegen, daher liegen wir über dem Budget.", en: "Prices have risen, therefore we're over budget." },
    { task: "Eine Kollegin fragt, was aus der Prüfung folgt.", taskEn: "A colleague asks what follows from the audit.", de: "Die Zahlen wurden geprüft, folglich sind die Angaben belastbar.", en: "The figures were checked, consequently the data is reliable." },
    { task: "Ein Bekannter fragt, warum die Aktion unentgeltlich läuft.", taskEn: "An acquaintance asks why the initiative is unpaid.", de: "Alle arbeiten unbezahlt, deshalb bleibt mehr für die Bedürftigen.", en: "Everybody works unpaid, that's why more is left for those in need." },
    { task: "Rollenspiel: Ihr berichtet über die Aktion.", taskEn: "Role-play: you report on the initiative.", de: "Wir haben viel gesammelt, dennoch fehlt es an Geld. — Folglich brauchen wir mehr Helfer.", en: "We collected a lot, nevertheless money is lacking. — Consequently we need more helpers." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short business report (eight to ten sentences) about a company or economic situation — using at least five different Verbindungsadverbien (from the cause/result and contrast groups) instead of repeating "weil", each with the verb correctly in Position 2.',
    starters: ['… . Deshalb …', '… . Folglich …', '… . Trotzdem …'],
    placeholder: 'Die Strategie war erfolgreich. Deshalb wurde das Unternehmen zuversichtlich …',
    minWords: 60
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses a Verbindungsadverb correctly?',
      options: ['Es regnet. Deshalb bleiben wir zu Hause.', 'Es regnet. Deshalb wir bleiben zu Hause.', 'Deshalb es regnet, wir bleiben zu Hause.'],
      answer: 0,
      explain: 'The finite verb must immediately follow "deshalb", before the subject.'
    },
    gap: {
      sentence: ['Die Prüfung war erfolgreich. ', ' kann Anna studieren.'],
      gaps: [ { answer: 'Somit', accepts: ['Somit'] } ],
      explain: '"Somit" is a formal Verbindungsadverb for result — followed immediately by the verb "kann".'
    },
    match: {
      q: 'Match each connector to its category.',
      pairs: [
        { noun: 'deshalb', art: 'Cause → Result (neutral)' },
        { noun: 'folglich', art: 'Result (formal)' },
        { noun: 'trotzdem', art: 'Contrast (neutral)' },
        { noun: 'dennoch', art: 'Contrast (formal)' }
      ]
    },
    builder: {
      target: 'Build: "It rained. Nevertheless, we went for a walk."',
      bank: ['Es', 'regnete', '.', 'Trotzdem', 'gingen', 'wir', 'spazieren', '.'],
      answer: ['Es', 'regnete', '.', 'Trotzdem', 'gingen', 'wir', 'spazieren', '.'],
      roles: { 'Trotzdem': 'r-verbadverb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Folglich wir haben bestanden.',
      right: 'Folglich haben wir bestanden.',
      explain: 'The finite verb ("haben") must come immediately after "folglich", before the subject.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Where does the verb go after a Verbindungsadverb?', options: ['Position 2, immediately after', 'At the end of the sentence', 'Before the connector'], answer: 0,
      explain: 'A Verbindungsadverb occupies Position 1; the finite verb follows immediately in Position 2.' },
    { q: 'Which connector is most formal for "result"?', options: ['folglich', 'deshalb', 'darum'], answer: 0,
      explain: '"folglich" (and "somit") are the formal Result connectors, common in reports and scientific writing.' },
    { q: 'Which connector expresses contrast?', options: ['trotzdem', 'deshalb', 'folglich'], answer: 0,
      explain: '"trotzdem" (and "dennoch") express contrast — nevertheless/nonetheless.' },
    { q: 'What is the key difference between "weil" and "deshalb"?', options: ['weil creates a subordinate clause (verb-final); deshalb starts a new main clause (V2)', 'They are identical', 'weil is more formal'], answer: 0,
      explain: '"weil" sends the verb to the end of a Nebensatz; "deshalb" starts a brand-new main clause with V2 word order.' },
    { q: 'Which sentence contains an error?', options: ['Es war spät. Deshalb gingen wir nach Hause.', 'Deshalb wir gehen nach Hause.', 'Die Prüfung war erfolgreich. Somit kann Anna studieren.'], answer: 1,
      explain: 'The verb must come immediately after "Deshalb" — it should be "Deshalb gehen wir nach Hause."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verbadverb', html: 'A Verbindungsadverb (deshalb, folglich, trotzdem…) connects two complete sentences, but the finite verb ALWAYS stays in Position 2 — it never sends the verb to the end like a subordinating conjunction.' },
    { c: 'r-verbadverb', html: 'Cause→Result: deshalb/deswegen/darum (everyday), daher (formal). Result: folglich, somit (formal). Contrast: trotzdem (neutral), dennoch (formal).' },
    { c: 'r-verbadverb', html: 'Varying your connectors instead of repeating "weil" is one of the fastest ways to improve Goethe B2 writing scores.' }
  ],
  revisionTips: [
    'Practise rewriting weil-sentences as two separate sentences joined by a Verbindungsadverb.',
    'Always double-check: does the finite verb come immediately after the connector, before the subject?',
    'Build a personal register map — know which connectors sound natural in speech versus formal writing.'
  ]
};

window.CHAPTER = CHAPTER;
