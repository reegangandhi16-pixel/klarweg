/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 23
   "Possessivartikel & Familie"  (Family & possessive articles)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-23 word list (43 words).
   Recycles Chapters 1–22 throughout. Theme = family photos.
============================================================ */
const CHAPTER = {
  id: 'a1-23-familie',
  phase: 'A1 · Phase 2',
  number: 23,
  title: 'Possessivartikel & Familie',
  titleEn: 'Possessives & Family',
  description: 'Talk about your family and say what belongs to whom. Learn the family words and the possessive articles — mein, dein, sein, ihr, unser — and the one rule that makes them all work: they copy the gender of the thing owned, not the owner.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 24, title: 'Datum & Ordinalzahlen', titleEn: 'Dates & Ordinals' , href: 'chapter-a1-24-datum.html' },

  prevChapter: { number: 22, title: 'Berufe & Arbeit', titleEn: 'Jobs & Work', href: 'chapter-a1-22-berufe.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Ines brings a family photo to the canteen. As she and Nils pass it around, every "this is my…/her…/his…" puts a possessive article to work — and Ines, of course, has a photo of someone unexpected.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear mein / meine / dein / sein / ihr in real speech'
    ],
    scene: 'In der Mensa \u2014 Familienfotos, Berlin',
    femaleSpeakers: ['Ines'],
    dialogue: [
      { speaker: 'Ines', tokens: [
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: ',', plain: true },
        { w: 'Nils', role: 'r-name', en: 'Nils', hi: 'निल्स', pron: 'nils', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive', why: 'The possessive agrees with the OWNED noun: die Familie → meine (this chapter).', ex: 'meine Familie', exEn: 'my family' },
        { w: 'Familie', role: 'r-subject', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lyuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Here, Nils! That is my family.', hi: 'Yeh dekho, Nils! Yeh mera parivaar hai.' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: ',', plain: true },
        { w: 'schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Mutter', role: 'r-subject', en: 'mother', hi: 'माँ', pron: 'MU-ter', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Oh, lovely! Is that your mother?', hi: 'Oh, badhiya! Kya yeh tumhaari maa hain?' },
      { speaker: 'Ines', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mein', role: 'r-subject', en: 'my (masc.)', hi: 'मेरे', pron: 'mine', type: 'Possessive', why: 'der Vater → mein (masculine, no ending).', ex: 'mein Vater', exEn: 'my father' },
        { w: 'Vater', role: 'r-subject', en: 'father', hi: 'पिता', pron: 'FAH-ter', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करते हैं', pron: 'AR-by-tet', type: 'Verb · arbeiten (er)' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition · profession' },
        { w: 'Lehrer', role: 'r-object', en: 'teacher', hi: 'शिक्षक', pron: 'LAY-rer', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes, and that is my father. He works as a teacher.', hi: 'Haan, aur yeh mere pita hain. Woh shikshak ke roop mein kaam karte hain.' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true },
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'And who is that? Your sister?', hi: 'Aur yeh kaun hai? Tumhaari bahan?' },
      { speaker: 'Ines', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.' },
        { w: 'heißt', role: 'r-verb', en: 'is called', hi: 'नाम है', pron: 'hysst', type: 'Verb · heißen (sie)' },
        { w: 'Lena', role: 'r-object', en: 'Lena', hi: 'लेना', pron: 'LAY-na', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (sie)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Hund', role: 'r-akkusativ', en: 'dog', hi: 'कुत्ता', pron: 'hunt', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Exactly! My sister is called Lena. She has a dog.', hi: 'Bilkul! Meri bahan ka naam Lena hai. Uske paas ek kutta hai.' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ihr', role: 'r-subject', en: 'her (masc.)', hi: 'उसका', pron: 'eer', type: 'Possessive', why: 'ihr = her; the ending follows the owned noun: der Hund → ihr (this chapter).', ex: 'ihr Hund', exEn: 'her dog' },
        { w: 'Hund', role: 'r-subject', en: 'dog', hi: 'कुत्ता', pron: 'hunt', type: 'Noun · masc.' },
        { w: '?', plain: true },
        { w: 'Wie', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vee', type: 'Question word' },
        { w: 'heißt', role: 'r-verb', en: 'is called', hi: 'नाम है', pron: 'hysst', type: 'Verb · heißen (er)' },
        { w: 'er', role: 'r-subject', en: 'he/it', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Is that her dog? What is he called?', hi: 'Kya yeh uska kutta hai? Uska naam kya hai?' },
      { speaker: 'Ines', tokens: [
        { w: 'Sein', role: 'r-subject', en: 'his (masc.)', hi: 'उसका', pron: 'zine', type: 'Possessive', why: 'sein = his; here the dog\u2019s own name (this chapter).', ex: 'sein Name', exEn: 'his name' },
        { w: 'Name', role: 'r-subject', en: 'name', hi: 'नाम', pron: 'NAH-muh', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Bello', role: 'r-object', en: 'Bello', hi: 'बेलो', pron: 'BE-lo', type: 'Name · dog' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Geschwister', role: 'r-akkusativ', en: 'siblings', hi: 'भाई-बहन', pron: 'ge-SHVIS-ter', type: 'Noun · plural', why: 'die Geschwister (this chapter).', ex: 'Ich habe Geschwister.', exEn: 'I have siblings.' },
        { w: '?', plain: true }
      ], en: 'His name is Bello. Do you have siblings too?', hi: 'Uska naam Bello hai. Kya tumhaare bhi bhai-bahan hain?' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Bruder', role: 'r-akkusativ', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Bruder', role: 'r-subject', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'wohnt', role: 'r-verb', en: 'lives', hi: 'रहता है', pron: 'vohnt', type: 'Verb · wohnen (er)' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Hamburg', role: 'r-place', en: 'Hamburg', hi: 'हैम्बर्ग', pron: 'HAM-burk', type: 'Noun · city' },
        { w: '.', plain: true }
      ], en: 'Yes, I have a brother. My brother lives in Hamburg.', hi: 'Haan, mera ek bhai hai. Mera bhai Hamburg mein rehta hai.' },
      { speaker: 'Ines', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'deine', role: 'r-subject', en: 'your (pl.)', hi: 'तुम्हारे', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Eltern', role: 'r-subject', en: 'parents', hi: 'माता-पिता', pron: 'EL-tern', type: 'Noun · plural', why: 'die Eltern → deine (plural, this chapter).', ex: 'meine Eltern', exEn: 'my parents' },
        { w: '?', plain: true },
        { w: 'Wohnen', role: 'r-verb', en: 'do they live', hi: 'रहते हैं', pron: 'VOH-nen', type: 'Verb · wohnen (sie)' },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'And your parents? Do they live there too?', hi: 'Aur tumhaare maata-pita? Kya woh bhi wahaan rehte hain?' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'meine', role: 'r-subject', en: 'my (pl.)', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Eltern', role: 'r-subject', en: 'parents', hi: 'माता-पिता', pron: 'EL-tern', type: 'Noun · plural' },
        { w: 'wohnen', role: 'r-verb', en: 'live', hi: 'रहते हैं', pron: 'VOH-nen', type: 'Verb · wohnen (sie)' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'shern', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'No, my parents live here in Berlin. That is very nice.', hi: 'Nahi, mere maata-pita yahaan Berlin mein rehte hain. Yeh bahut achha hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A possessive article (<span class="de r-article">mein, dein, sein, ihr, unser</span>) answers "whose?" The key rule trips up everyone: the ending copies the gender of the <strong>thing owned</strong>, not the owner. So it\u2019s <span class="de">mein Vater</span> (masc., no ending) but <span class="de">meine Mutter</span> (fem., add -e) — same owner, different ending.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is POSSESSIVE ARTICLES & FAMILY: mein/dein/sein/ihr/unser/euer/Ihr and family vocabulary. ' +
    'The learner wrote sentences about their family below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A possessive article agrees with the gender/number of the OWNED noun, not the owner. Nominative: masculine & neuter get NO ending (mein Vater, mein Kind); feminine & plural add -e (meine Mutter, meine Eltern).\n' +
    '- Stems: mein (my), dein (your, informal), sein (his/its), ihr (her/their), unser (our), euer→eure (your, pl.), Ihr (your, formal — always capitalised).\n' +
    '- ihr = her OR their; sein = his OR its. They depend on the OWNER\u2019s gender but the ending still follows the owned noun: "ihr Bruder" (her brother, masc → no ending), "ihre Schwester" (her sister, fem → -e).\n' +
    '- "euer" drops the e when an ending is added: euer Haus, but eure Mutter.\n' +
    '- Family nouns: der Vater/Bruder/Sohn/Onkel/Opa, die Mutter/Schwester/Tochter/Tante/Oma, das Kind/Baby/Mädchen; die Eltern/Geschwister/Großeltern are plural-only.\n' +
    '- In the accusative, masculine adds -en (Ich habe einen Bruder → Ich liebe meinen Bruder); keep feedback simple and only mention this if the learner attempted it.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Agreement check:</b> one sentence on whether endings matched the owned noun (mein Vater vs meine Mutter).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your possessive endings match the owned noun. On to <span class="de">Datum & Ordinalzahlen</span>.',
    mid: 'Good. Re-read the agreement card once (mein Vater / meine Mutter), then continue.',
    low: 'Worth another pass — focus on the ending rule in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'meine', role: 'r-article' }, { w: 'Mutter', role: 'r-subject' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one rule behind every possessive article.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Pass family photos around with Ines and Ines — hear mein/meine/dein/sein/ihr.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the family members and the possessive articles.' },
    { id: 'grammar',    label: 'Possessives', tag: 'core',
      objective: 'Master mein/dein/sein/ihr/unser and the rule: the ending follows the owned noun.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a family-introduction text and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who is whose, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Introduce your family and say who owns what.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences about your family and a short family paragraph.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill possessive endings and family vocabulary with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All family members and possessive articles with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Possessive-ending drills, family matching, error correction, and a family writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'mein/dein/sein/ihr/unser/euer/Ihr, the agreement rule, formal vs informal, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'mein Vater / meine Mutter', text: 'Match the ending to the noun' },
    { de: 'die Familie', text: 'Name family members' },
    { de: 'sein / ihr', text: 'Say his, her, their' },
    { de: 'Wessen … ist das?', text: 'Say whose something is' },
    { de: 'Ihr / Ihre', text: 'Use the formal possessive' }
  ],

  // ---------- Vocabulary (43 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Kind', art: 'das', gender: 'n', plural: 'Kinder', pos: 'noun', en: 'child', hi: 'बच्चा', ex: 'Das Kind spielt im Park.', exEn: 'The child plays in the park.' },
    { de: 'Bruder', art: 'der', gender: 'm', plural: 'Brüder', pos: 'noun', en: 'brother', hi: 'भाई', ex: 'Mein Bruder wohnt in Indien.', exEn: 'My brother lives in India.' },
    { de: 'Mann', art: 'der', gender: 'm', plural: 'Männer', pos: 'noun', en: 'man, husband', hi: 'आदमी, पति', ex: 'Ihr Mann ist Arzt.', exEn: 'Her husband is a doctor.' },
    { de: 'Sohn', art: 'der', gender: 'm', plural: 'Söhne', pos: 'noun', en: 'son', hi: 'बेटा', ex: 'Mein Sohn ist klein.', exEn: 'My son is small.' },
    { de: 'Vater', art: 'der', gender: 'm', plural: 'Väter', pos: 'noun', en: 'father', hi: 'पिता', ex: 'Das ist mein Vater.', exEn: 'This is my father.' },
    { de: 'Eltern', art: 'die', gender: 'pl', plural: 'Eltern', pos: 'noun', en: 'parents', hi: 'माता-पिता', ex: 'Meine Eltern sind nett.', exEn: 'My parents are nice.' },
    { de: 'Familie', art: 'die', gender: 'f', plural: 'Familien', pos: 'noun', en: 'family', hi: 'परिवार', ex: 'Das ist meine Familie.', exEn: 'This is my family.' },
    { de: 'Frau', art: 'die', gender: 'f', plural: 'Frauen', pos: 'noun', en: 'woman, wife', hi: 'औरत, पत्नी', ex: 'Seine Frau heißt Anna.', exEn: 'His wife is called Anna.' },
    { de: 'Mutter', art: 'die', gender: 'f', plural: 'Mütter', pos: 'noun', en: 'mother', hi: 'माँ', ex: 'Meine Mutter kocht gut.', exEn: 'My mother cooks well.' },
    { de: 'Schwester', art: 'die', gender: 'f', plural: 'Schwestern', pos: 'noun', en: 'sister', hi: 'बहन', ex: 'Meine Schwester heißt Lena.', exEn: 'My sister is called Lena.' },
    { de: 'Tochter', art: 'die', gender: 'f', plural: 'Töchter', pos: 'noun', en: 'daughter', hi: 'बेटी', ex: 'Ihre Tochter ist klein.', exEn: 'Her daughter is small.' },
    { de: 'euer/eure', pos: 'possessive', en: 'your (plural)', hi: 'तुम सबका', ex: 'Wo ist euer Haus?', exEn: 'Where is your house?' },
    { de: 'Ihr/Ihre', pos: 'possessive', en: 'your (formal)', hi: 'आपका', ex: 'Ist das Ihre Karte?', exEn: 'Is that your card?' },
    { de: 'ihr/ihre', pos: 'possessive', en: 'her, their, its', hi: 'उसका, उनका', ex: 'Das ist ihr Hund.', exEn: 'That is her dog.' },
    { de: 'sein/seine', pos: 'possessive', en: 'his, its', hi: 'उसका', ex: 'Sein Name ist Bello.', exEn: 'His name is Bello.' },
    { de: 'unser/unsere', pos: 'possessive', en: 'our', hi: 'हमारा', ex: 'Das ist unser Haus.', exEn: 'This is our house.' },
    // ===== Active Support =====
    { de: 'Baby', art: 'das', gender: 'n', plural: 'Babys', pos: 'noun', en: 'baby', hi: 'शिशु', ex: 'Das Baby schläft.', exEn: 'The baby is sleeping.' },
    { de: 'Mädchen', art: 'das', gender: 'n', plural: 'Mädchen', pos: 'noun', en: 'girl', hi: 'लड़की', ex: 'Das Mädchen liest ein Buch.', exEn: 'The girl reads a book.' },
    { de: 'Ehemann', art: 'der', gender: 'm', plural: 'Ehemänner', pos: 'noun', en: 'husband', hi: 'पति', ex: 'Ihr Ehemann arbeitet viel.', exEn: 'Her husband works a lot.' },
    { de: 'Großvater', art: 'der', gender: 'm', plural: 'Großväter', pos: 'noun', en: 'grandfather', hi: 'दादा', ex: 'Mein Großvater ist alt.', exEn: 'My grandfather is old.' },
    { de: 'Hund', art: 'der', gender: 'm', plural: 'Hunde', pos: 'noun', en: 'dog', hi: 'कुत्ता', ex: 'Ihr Hund heißt Bello.', exEn: 'Her dog is called Bello.' },
    { de: 'Junge', art: 'der', gender: 'm', plural: 'Jungen', pos: 'noun', en: 'boy', hi: 'लड़का', ex: 'Der Junge spielt Fußball.', exEn: 'The boy plays football.' },
    { de: 'Nachbar', art: 'der', gender: 'm', plural: 'Nachbarn', pos: 'noun', en: 'neighbour (m)', hi: 'पड़ोसी', ex: 'Mein Nachbar ist freundlich.', exEn: 'My neighbour is friendly.' },
    { de: 'Onkel', art: 'der', gender: 'm', plural: 'Onkel', pos: 'noun', en: 'uncle', hi: 'चाचा', ex: 'Mein Onkel wohnt in Berlin.', exEn: 'My uncle lives in Berlin.' },
    { de: 'Opa', art: 'der', gender: 'm', plural: 'Opas', pos: 'noun', en: 'grandpa', hi: 'दादा', ex: 'Mein Opa erzählt Geschichten.', exEn: 'My grandpa tells stories.' },
    { de: 'Bekannte', art: 'der/die', gender: 'mf', plural: 'Bekannten', pos: 'noun', en: 'acquaintance', hi: 'परिचित', ex: 'Sie ist eine Bekannte.', exEn: 'She is an acquaintance.' },
    { de: 'Jugendliche', art: 'der/die', gender: 'mf', plural: 'Jugendlichen', pos: 'noun', en: 'teenager', hi: 'किशोर', ex: 'Der Jugendliche hört Musik.', exEn: 'The teenager listens to music.' },
    { de: 'Ehefrau', art: 'die', gender: 'f', plural: 'Ehefrauen', pos: 'noun', en: 'wife', hi: 'पत्नी', ex: 'Seine Ehefrau ist Lehrerin.', exEn: 'His wife is a teacher.' },
    { de: 'Geschwister', art: 'die', gender: 'pl', plural: 'Geschwister', pos: 'noun', en: 'siblings', hi: 'भाई-बहन', ex: 'Hast du Geschwister?', exEn: 'Do you have siblings?' },
    { de: 'Großeltern', art: 'die', gender: 'pl', plural: 'Großeltern', pos: 'noun', en: 'grandparents', hi: 'दादा-दादी', ex: 'Meine Großeltern sind nett.', exEn: 'My grandparents are nice.' },
    { de: 'Großmutter', art: 'die', gender: 'f', plural: 'Großmütter', pos: 'noun', en: 'grandmother', hi: 'दादी', ex: 'Meine Großmutter kocht super.', exEn: 'My grandmother cooks great.' },
    { de: 'Nachbarin', art: 'die', gender: 'f', plural: 'Nachbarinnen', pos: 'noun', en: 'neighbour (f)', hi: 'पड़ोसी', ex: 'Meine Nachbarin ist nett.', exEn: 'My neighbour is nice.' },
    { de: 'Oma', art: 'die', gender: 'f', plural: 'Omas', pos: 'noun', en: 'grandma', hi: 'दादी', ex: 'Das ist meine Oma.', exEn: 'This is my grandma.' },
    { de: 'Tante', art: 'die', gender: 'f', plural: 'Tanten', pos: 'noun', en: 'aunt', hi: 'चाची', ex: 'Meine Tante wohnt in München.', exEn: 'My aunt lives in Munich.' },
    { de: 'ledig', pos: 'adjective', en: 'single, unmarried', hi: 'अविवाहित', ex: 'Mein Bruder ist ledig.', exEn: 'My brother is single.' },
    { de: 'verheiratet', pos: 'adjective', en: 'married', hi: 'विवाहित', ex: 'Meine Schwester ist verheiratet.', exEn: 'My sister is married.' },
    // ===== Passive =====
    { de: 'Familienfoto', art: 'das', gender: 'n', plural: 'Familienfotos', pos: 'noun', en: 'family photo', hi: 'पारिवारिक फ़ोटो', ex: 'Das Familienfoto ist schön.', exEn: 'The family photo is lovely.' },
    { de: 'Hamster', art: 'der', gender: 'm', plural: 'Hamster', pos: 'noun', en: 'hamster', hi: 'हैम्स्टर', ex: 'Mein Hamster ist klein.', exEn: 'My hamster is small.' },
    { de: 'Erwachsene', art: 'der/die', gender: 'mf', plural: 'Erwachsenen', pos: 'noun', en: 'adult', hi: 'वयस्क', ex: 'Der Erwachsene arbeitet.', exEn: 'The adult works.' },
    { de: 'Verwandte', art: 'der/die', gender: 'mf', plural: 'Verwandten', pos: 'noun', en: 'relative', hi: 'रिश्तेदार', ex: 'Wir besuchen unsere Verwandten.', exEn: 'We visit our relatives.' },
    { de: 'Fantasie', art: 'die', gender: 'f', plural: 'Fantasien', pos: 'noun', en: 'imagination', hi: 'कल्पना', ex: 'Das Kind hat viel Fantasie.', exEn: 'The child has a lot of imagination.' },
    { de: 'Maus', art: 'die', gender: 'f', plural: 'Mäuse', pos: 'noun', en: 'mouse', hi: 'चूहा', ex: 'Die Maus ist klein.', exEn: 'The mouse is small.' },
    // ===== Reference / System =====
    { de: 'Possessivartikel', art: 'der', gender: 'm', plural: 'Possessivartikel', pos: 'noun', en: 'possessive article', hi: 'अधिकारवाचक उपपद', ex: '"Mein" ist ein Possessivartikel.', exEn: '"Mein" is a possessive article.' }
  ],

  // ---------- Possessives (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The possessive articles',
      body: [
        'Each person has their own possessive stem. These answer the question "whose?"'
      ],
      table: {
        head: ['Person', 'Possessive', 'Example'],
        rows: [
          ['ich → ', '<span class="de r-article">mein</span>', '<span class="de">mein Vater</span> (my father)'],
          ['du → ', '<span class="de r-article">dein</span>', '<span class="de">dein Bruder</span> (your brother)'],
          ['er/es → ', '<span class="de r-article">sein</span>', '<span class="de">sein Hund</span> (his dog)'],
          ['sie → ', '<span class="de r-article">ihr</span>', '<span class="de">ihr Sohn</span> (her son)'],
          ['wir → ', '<span class="de r-article">unser</span>', '<span class="de">unser Haus</span> (our house)']
        ]
      },
      note: 'Also: <b>euer</b> (your, plural) and <b>Ihr</b> (your, formal — always capitalised). Note <b>sein</b> = his/its and <b>ihr</b> = her/their — watch the owner.',
      hinglish: 'Har person ka apna stem: <b>mein</b> (mera), <b>dein</b> (tera), <b>sein</b> (uska — ladka), <b>ihr</b> (uska — ladki / unka), <b>unser</b> (hamara). Aur <b>euer</b> (tum sabka), <b>Ihr</b> (aapka — hamesha capital). Dhyaan: sein = his/its, ihr = her/their.'
    },
    {
      title: 'The key rule: agree with the OWNED noun',
      body: [
        'This is the rule everyone gets wrong. The ending of the possessive follows the gender of the thing owned, NOT the owner. Add <strong>-e</strong> for feminine and plural; nothing for masculine and neuter (in the nominative).'
      ],
      table: {
        head: ['Owned noun', 'Form', 'Example'],
        rows: [
          ['masculine (der)', '<span class="de r-article">mein</span> (no -e)', '<span class="de">mein Vater</span>'],
          ['feminine (die)', '<span class="de r-article">meine</span> (+ -e)', '<span class="de">meine Mutter</span>'],
          ['neuter (das)', '<span class="de r-article">mein</span> (no -e)', '<span class="de">mein Kind</span>'],
          ['plural (die)', '<span class="de r-article">meine</span> (+ -e)', '<span class="de">meine Eltern</span>']
        ]
      },
      note: 'Same owner, different endings: <b>mein</b> Vater (masc.) but <b>meine</b> Mutter (fem.). Masc. & neut. = no ending; fem. & plural = <b>-e</b>. This pattern is identical for dein, sein, ihr, unser…',
      hinglish: 'Sabse zaroori rule: ending <b>owned noun</b> ke gender se milti hai, owner se nahi! Masculine & neuter = koi ending nahi (mein Vater, mein Kind). Feminine & plural = <b>-e</b> (meine Mutter, meine Eltern). Yahi pattern dein/sein/ihr/unser sab ke liye.'
    },
    {
      title: 'sein vs ihr — his, her, their',
      body: [
        'Two possessives depend on the OWNER\u2019s gender, then still take their ending from the owned noun.'
      ],
      table: {
        head: ['Owner', 'Possessive', 'Example'],
        rows: [
          ['er (he) →', '<span class="de r-article">sein</span>', '<span class="de">sein Bruder, seine Schwester</span>'],
          ['es (it) →', '<span class="de r-article">sein</span>', '<span class="de">sein Name</span>'],
          ['sie (she) →', '<span class="de r-article">ihr</span>', '<span class="de">ihr Bruder, ihre Schwester</span>'],
          ['sie (they) →', '<span class="de r-article">ihr</span>', '<span class="de">ihre Eltern</span>']
        ]
      },
      note: 'Pick <b>sein</b> for a male/neuter owner, <b>ihr</b> for a female/plural owner — THEN add -e if the owned noun is feminine or plural: <b>ihr</b> Bruder, but <b>ihre</b> Schwester.',
      hinglish: 'Owner ladka/neuter → <b>sein</b>; owner ladki/plural → <b>ihr</b>. Phir owned noun feminine/plural ho to -e jodo: <b>ihr</b> Bruder (bhai), par <b>ihre</b> Schwester (behan). Owner pehle, ending baad mein.'
    },
    {
      title: 'Family words: gender groups & plural-only nouns',
      goldenRule: 'Male family members are <b>der</b>, female are <b>die</b>, and the group words (<b>Eltern, Geschwister</b>) exist only in the plural.',
      memoryTrick: '<b>Eltern</b> aur <b>Geschwister</b> ka singular hi nahi hota — hamesha <b>die</b> + plural verb: <span class="de">Meine Eltern sind …</span>',
      body: [
        'Family nouns split by gender, and three of them exist only in the plural.'
      ],
      table: {
        head: ['Group', 'Words'],
        rows: [
          ['der (masc.)', '<span class="de">Vater, Bruder, Sohn, Onkel, Opa</span>'],
          ['die (fem.)', '<span class="de">Mutter, Schwester, Tochter, Tante, Oma</span>'],
          ['das (neut.)', '<span class="de">Kind, Baby, Mädchen</span>'],
          ['plural only', '<span class="de">die Eltern, die Geschwister, die Großeltern</span>']
        ]
      },
      note: '<b>die Eltern</b>, <b>die Geschwister</b> and <b>die Großeltern</b> have no singular. Note <b>das Mädchen</b> (girl) is neuter, not feminine — the -chen ending always makes a word neuter.',
      hinglish: 'Family nouns gender se bate hain. <b>die Eltern / Geschwister / Großeltern</b> sirf plural mein hote hain — inka singular hi nahi hota. Dhyaan: <b>das Mädchen</b> (ladki) neuter hai — "-chen" wale shabd hamesha neuter.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four possessive traps to avoid.' ],
      mistakes: [
        { wrong: 'meine Vater', right: 'mein Vater', why: 'Vater is masculine → no -e in the nominative.' },
        { wrong: 'mein Mutter', right: 'meine Mutter', why: 'Mutter is feminine → add -e.' },
        { wrong: 'Sie hat ihre Bruder.', right: 'Sie hat ihren Bruder.', why: 'Accusative masculine: ihr → ihren.' },
        { wrong: 'Das ist seine Hund.', right: 'Das ist sein Hund.', why: 'Hund is masculine → sein, no -e.' }
      ],
      hinglish: 'Char galtiyan common hain. Masculine noun ke saath koi <b>-e</b> nahi lagta: <b>mein Vater</b>. Feminine noun ke saath <b>-e</b> jodna hota hai: <b>meine Mutter</b>. Accusative masculine mein form badal jaati hai: <b>Sie hat ihren Bruder</b>. Aur <b>Hund</b> masculine hai, isliye <b>sein Hund</b> sahi hai, bina <b>-e</b> ke.'
    }
  ],

  // ---------- Reading passage (family intro, clickable) ----------
  reading: {
    title: 'Meine Familie',
    titleEn: 'My family',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'this', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive', why: 'meine + feminine noun (this chapter).', ex: 'meine Familie', exEn: 'my family' },
      { w: 'Familie', role: 'r-subject', en: 'family', hi: 'परिवार', pron: 'fa-MEEL-yuh', type: 'Noun · fem.', why: 'die Familie (this chapter).', ex: 'meine Familie', exEn: 'my family' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-article', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive', why: 'mein + masculine noun — no -e (this chapter).', ex: 'mein Vater', exEn: 'my father' },
      { w: 'Vater', role: 'r-subject', en: 'father', hi: 'पिता', pron: 'FAH-ter', type: 'Noun · masc.', why: 'der Vater (this chapter).', ex: 'Mein Vater ist Lehrer.', exEn: 'My father is a teacher.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Lehrer', role: 'r-object', en: 'teacher', hi: 'अध्यापक', pron: 'LAY-rer', type: 'Noun · masc.', why: 'no article for profession (recycled — Berufe).', ex: 'Er ist Lehrer.', exEn: 'He is a teacher.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive', why: 'meine + feminine noun (this chapter).', ex: 'meine Mutter', exEn: 'my mother' },
      { w: 'Mutter', role: 'r-subject', en: 'mother', hi: 'माँ', pron: 'MU-ter', type: 'Noun · fem.', why: 'die Mutter (this chapter).', ex: 'Meine Mutter ist Ärztin.', exEn: 'My mother is a doctor.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Ärztin', role: 'r-object', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.', why: 'female form (recycled — Berufe).', ex: 'Sie ist Ärztin.', exEn: 'She is a doctor.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'के पास है', pron: 'HAH-buh', type: 'Verb · haben', why: 'haben (recycled — Akkusativ).', ex: 'Ich habe eine Schwester.', exEn: 'I have a sister.' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Schwester', role: 'r-object', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.', why: 'die Schwester (this chapter).', ex: 'Ich habe eine Schwester.', exEn: 'I have a sister.' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'verheiratet', role: 'r-adjective', en: 'married', hi: 'विवाहित', pron: 'fair-HY-ra-tet', type: 'Adjective', why: 'verheiratet (this chapter); sein + adjective (Chapter 13).', ex: 'Sie ist verheiratet.', exEn: 'She is married.' },
      { w: '.', plain: true },
      { w: 'Ihr', role: 'r-article', en: 'her (masc.)', hi: 'उसका', pron: 'eer', type: 'Possessive', why: 'ihr = her; masculine noun → no -e (this chapter).', ex: 'ihr Mann', exEn: 'her husband' },
      { w: 'Mann', role: 'r-subject', en: 'husband', hi: 'पति', pron: 'man', type: 'Noun · masc.', why: 'der Mann (this chapter).', ex: 'Ihr Mann ist nett.', exEn: 'Her husband is nice.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Journalist', role: 'r-object', en: 'journalist', hi: 'पत्रकार', pron: 'zhoor-na-LIST', type: 'Noun · masc.', why: 'no article for profession (recycled — Berufe).', ex: 'Er ist Journalist.', exEn: 'He is a journalist.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'nett', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'net', type: 'Adjective', why: 'sein + adjective (recycled — Adjektive).', ex: 'Er ist sehr nett.', exEn: 'He is very nice.' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-article', en: 'my (plural)', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive', why: 'meine + plural noun (this chapter).', ex: 'meine Großeltern', exEn: 'my grandparents' },
      { w: 'Großeltern', role: 'r-subject', en: 'grandparents', hi: 'दादा-दादी', pron: 'GROHS-el-tern', type: 'Noun · plural', why: 'die Großeltern — plural only (this chapter).', ex: 'Meine Großeltern wohnen hier.', exEn: 'My grandparents live here.' },
      { w: 'wohnen', role: 'r-verb', en: 'live', hi: 'रहते हैं', pron: 'VOH-nen', type: 'Verb · wohnen', why: 'wohnen (recycled — Wer bist du?).', ex: 'Sie wohnen in Berlin.', exEn: 'They live in Berlin.' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
      { w: '.', plain: true }
    ],
    translation: 'This is my family. My father is a teacher and my mother is a doctor. I have a sister. My sister is married. Her husband is a journalist and very nice. My grandparents also live here.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_023_L001', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nils, ich möchte deiner Familie ein Geschenk kaufen. Wer feiert Geburtstag?', en: 'Nils, I want to buy your family a gift. Who is celebrating a birthday?' },
      { id: 'A1_023_L002', speaker: 'Nils', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Meine Schwester! Sie ist verheiratet und wohnt in München.', en: 'My sister! She is married and lives in Munich.' },
      { id: 'A1_023_L003', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und was mag sie?', en: 'And what does she like?' },
      { id: 'A1_023_L004', speaker: 'Nils', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bücher! Meine Oma auch, sie liebt Kuchen.', en: 'Books! My grandma too, she loves cake.' }
    ],
    transcript: 'Nils, ich möchte deiner Familie ein Geschenk kaufen. Wer feiert Geburtstag? Meine Schwester! Sie ist verheiratet und wohnt in München. Und was mag sie? Bücher! Meine Oma auch, sie liebt Kuchen.',
    translation: 'Nils, I want to buy your family a gift. Who is celebrating a birthday? My sister! She is married and lives in Munich. And what does she like? Books! My grandma too, she loves cake.',
    tokens: [
      { w: 'Nils' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'deiner' },
      { w: 'Familie' },
      { w: 'ein' },
      { w: 'Geschenk' },
      { w: 'kaufen' },
      { w: '.', plain: true },
      { w: 'Wer' },
      { w: 'feiert' },
      { w: 'Geburtstag' },
      { w: '?', plain: true },
      { w: 'Meine' },
      { w: 'Schwester' },
      { w: '!', plain: true },
      { w: 'Sie' },
      { w: 'ist' },
      { w: 'verheiratet' },
      { w: 'und' },
      { w: 'wohnt' },
      { w: 'in' },
      { w: 'München' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'mag' },
      { w: 'sie' },
      { w: '?', plain: true },
      { w: 'Bücher' },
      { w: '!', plain: true },
      { w: 'Meine' },
      { w: 'Oma' },
      { w: 'auch' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'liebt' },
      { w: 'Kuchen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer hat Geburtstag?', qEn: 'Who is celebrating a birthday?', options: ['Nils', 'seine Schwester', 'seine Oma', 'sein Bruder'], optionsEn: ['Nils', 'his sister', 'his grandmother', 'his brother'], answer: 1,
        explain: '"Meine Schwester! Sie ist verheiratet."' },
      { q: 'Was mag die Schwester?', qEn: 'What does the sister like?', options: ['Kuchen', 'Bücher', 'Musik', 'Blumen'], optionsEn: ['cake', 'books', 'music', 'flowers'], answer: 1,
        explain: '"Bücher!" — she likes books.' }
    ]
  },

  speaking: [
    { task: "Du zeigst ein Foto. Dein Freund fragt: Wer ist das?", taskEn: "You show a photo. Your friend asks: who's that?", de: "Das ist mein Vater und das ist meine Mutter.", en: "That's my father and that's my mother." },
    { task: "Dein Partner fragt: Hast du Geschwister?", taskEn: "Your partner asks: do you have siblings?", de: "Ich habe einen Bruder und eine Schwester.", en: "I have a brother and a sister." },
    { task: "Dein Freund kauft ein Geschenk. Er fragt: Wer feiert Geburtstag und was mag sie?", taskEn: "Your friend is buying a present. He asks: whose birthday is it and what does she like?", de: "Meine Schwester feiert Geburtstag. Sie liebt Bücher.", en: "It's my sister's birthday. She loves books." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your family. Name at least four members (use mein/meine correctly), say one person\u2019s job, and say whether someone is ledig or verheiratet. Watch the endings: mein + masculine/neuter, meine + feminine/plural.',
    starters: ['Das ist meine Familie.', 'Mein Vater ist …', 'Meine Mutter …', 'Ich habe … Geschwister.'],
    placeholder: 'Das ist meine Familie. Mein Vater ist …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which is correct?',
      options: ['meine Vater', 'mein Vater', 'meinen Vater', 'meins Vater'],
      answer: 1,
      explain: 'Vater is masculine → no ending in the nominative: mein Vater.'
    },
    gap: {
      // mein (masc, no -e) vs meine (fem, +e)
      sentence: ['Das ist ', ' Bruder und das ist ', ' Schwester.'],
      gaps: [ { answer: 'mein', accepts: ['mein'] }, { answer: 'meine', accepts: ['meine'] } ],
      explain: 'mein Bruder (masc., no -e); meine Schwester (fem., +e).'
    },
    match: {
      q: 'Match each family word to its English.',
      pairs: [
        { noun: 'der Bruder', art: 'brother' },
        { noun: 'die Schwester', art: 'sister' },
        { noun: 'die Eltern', art: 'parents' },
        { noun: 'die Oma', art: 'grandma' }
      ]
    },
    builder: {
      target: 'Build: "This is my mother."',
      bank: ['Das', 'ist', 'meine', 'Mutter'],
      answer: ['Das', 'ist', 'meine', 'Mutter'],
      roles: { 'Das': 'r-subject', 'ist': 'r-verb', 'meine': 'r-article', 'Mutter': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das ist ___ Vater." (my)', options: ['meine', 'mein', 'meinen', 'meiner'], answer: 1,
      explain: 'Vater is masculine → mein (no -e).' },
    { q: 'Complete: "Das ist ___ Mutter." (my)', options: ['mein', 'meine', 'meinen', 'meins'], answer: 1,
      explain: 'Mutter is feminine → meine (+ -e).' },
    { q: 'What does "ihr" mean here: "ihr Bruder"?', options: ['your', 'his', 'her/their', 'our'], answer: 2,
      explain: 'ihr = her or their (depending on the owner).' },
    { q: 'Which word is plural-only?', options: ['der Bruder', 'die Eltern', 'die Mutter', 'das Kind'], answer: 1,
      explain: 'die Eltern (parents) has no singular.' },
    { q: 'The ending of a possessive article agrees with…', options: ['the owner', 'the owned noun', 'the verb', 'nothing'], answer: 1,
      explain: 'It agrees with the gender/number of the owned noun.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-article', html: 'The possessives: <span class="de">mein, dein, sein, ihr, unser, euer, Ihr</span> — answer "whose?"' },
    { c: 'r-article', html: 'The rule: the ending follows the <strong>owned noun</strong> — <span class="de">mein Vater</span> (masc.) vs <span class="de">meine Mutter</span> (fem./plural).' },
    { c: 'r-subject', html: 'Family by gender: <span class="de">der Vater, die Mutter, das Kind</span>; plural-only <span class="de">die Eltern, die Geschwister</span>.' }
  ],
  revisionTips: [
    'Drill the contrast: mein Vater (no -e) vs meine Mutter (-e). Masc/neut = nothing, fem/plural = -e.',
    'Choose sein vs ihr by the owner, then add the ending for the owned noun.',
    'Memorise the three plural-only family words: die Eltern, die Geschwister, die Großeltern.'
  ]
};

window.CHAPTER = CHAPTER;
