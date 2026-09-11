/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 37
   "Relativsätze im Genitiv (dessen / deren)" — dessen/deren
   replace possessive articles (sein/ihr) inside a relative
   clause. dessen = masc./neut. antecedent (der/das); deren =
   fem./plural antecedent (die/die-Pl). Does NOT teach
   Präpositionalrelativsätze (worüber/woran).
   IMPORTANT: dialogue uses ONLY Petra and Timo.
   Vocabulary source: uploaded chapter-37 list (51 items).
============================================================ */
const CHAPTER = {
  id: 'b2-37-relativsaetze-genitiv',
  phase: 'B2 · Phase 4',
  number: 37,
  title: 'Relativsätze im Genitiv (dessen / deren)',
  titleEn: 'Genitive relative clauses (dessen / deren)',
  description: 'dessen and deren swap in for sein/ihr inside a relative clause — the elegant way German describes whose thing it is.',
  xp: 500,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 38, title: 'Verschachtelte Relativsätze', titleEn: 'Nested relative clauses' , href: 'chapter-b2-38-verschachtelte-relativsaetze.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Whose <em>is it</em>, exactly?',
    intro: 'At a reading, Petra and Timo describe the writer whose book just appeared and the publisher whose program supports young talent — every description swapping sein/ihr for the more elegant dessen and deren.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear dessen (masc./neut. antecedent) and deren (fem./plural antecedent) replace sein/ihr naturally'
    ],
    scene: 'Wer gehört wozu?',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Schriftsteller', role: 'r-subject', en: 'writer', hi: 'लेखक', pron: 'SHRIFT-shte-ler', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'dessen', role: 'r-dativ', en: 'whose', hi: 'जिसकी', pron: 'DE-sen', type: 'Relativpronomen · genitive', why: 'dessen = whose (masc./neut. antecedent), Genitiv relative pronoun (this chapter).', ex: 'der Schriftsteller, dessen Buch erschienen ist', exEn: 'the writer whose book has appeared' },
        { w: 'Buch', role: 'r-subject', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: 'gerade', role: 'r-adverb', en: 'just', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'erschienen', role: 'r-verb', en: 'appeared', hi: 'आयी', pron: 'er-SHEE-nen', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'liest', role: 'r-verb', en: 'reads', hi: 'पढ़ता है', pron: 'leest', type: 'Verb · lesen', lexicalUnit: 'vorlesen' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorlesen)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorlesen' },
        { w: '.', plain: true }
      ], en: 'The writer whose book has just appeared reads out today.', hi: 'Woh lekhak jiski kitaab abhi aayi hai, aaj padhta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kenne', role: 'r-verb', en: 'know', hi: 'जानता हूँ', pron: 'KE-nuh', type: 'Verb · kennen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Autorin', role: 'r-akkusativ', en: 'author (f)', hi: 'लेखिका', pron: 'ow-to-RIN', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'deren', role: 'r-dativ', en: 'whose', hi: 'जिसकी', pron: 'DE-ren', type: 'Relativpronomen · genitive', why: 'deren = whose (fem./plural antecedent), Genitiv relative pronoun (this chapter).', ex: 'die Autorin, deren Roman berühmt ist', exEn: 'the author whose novel is famous' },
        { w: 'Roman', role: 'r-subject', en: 'novel', hi: 'उपन्यास', pron: 'ro-MAHN', type: 'Noun · masc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'berühmt', role: 'r-subject', en: 'famous', hi: 'प्रसिद्ध', pron: 'be-RÜMT', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I know the author whose novel is very famous.', hi: 'Main us lekhika ko jaanta hoon jiska upanyaas bahut prasiddh hai.' },
      { speaker: 'Petra', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Verlag', role: 'r-subject', en: 'publisher', hi: 'प्रकाशक', pron: 'fer-LAHK', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'dessen', role: 'r-dativ', en: 'whose', hi: 'जिसकी', pron: 'DE-sen', type: 'Relativpronomen · genitive' },
        { w: 'Programm', role: 'r-subject', en: 'program', hi: 'कार्यक्रम', pron: 'pro-GRAM', type: 'Noun · neut.' },
        { w: 'vielfältig', role: 'r-subject', en: 'diverse', hi: 'विविध', pron: 'FEEL-fel-tikh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'unterstützt', role: 'r-verb', en: 'supports', hi: 'समर्थन करता है', pron: 'un-ter-SHTÜTST', type: 'Verb · unterstützen' },
        { w: 'junge', role: 'r-akkusativ', en: 'young', hi: 'युवा', pron: 'YUNG-uh', type: 'Adjective' },
        { w: 'Talente', role: 'r-akkusativ', en: 'talents', hi: 'प्रतिभाओं', pron: 'ta-LEN-tuh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'The publisher whose program is diverse supports young talents.', hi: 'Woh prakaashak jiska karyakram vividh hai, yuva pratibhaon ka samarthan karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'lobenswert', role: 'r-akkusativ', en: 'praiseworthy', hi: 'प्रशंसनीय', pron: 'LO-benz-vairt', type: 'Adjective', why: 'lobenswert = praiseworthy (this chapter).', ex: 'Das ist lobenswert.', exEn: 'That is praiseworthy.' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Leser', role: 'r-subject', en: 'readers', hi: 'पाठक', pron: 'LAY-zer', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'deren', role: 'r-dativ', en: 'whose', hi: 'जिनकी', pron: 'DE-ren', type: 'Relativpronomen · genitive' },
        { w: 'Geschmack', role: 'r-subject', en: 'taste', hi: 'स्वाद', pron: 'ge-SHMAK', type: 'Noun · masc.' },
        { w: 'breit', role: 'r-subject', en: 'broad', hi: 'व्यापक', pron: 'bryte', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'werden', role: 'r-verb', en: 'will', hi: 'होंगे', pron: 'VAIR-den', type: 'Verb · werden' },
        { w: 'zufrieden', role: 'r-akkusativ', en: 'satisfied', hi: 'संतुष्ट', pron: 'tsu-FREE-den', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होंगे', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Readers whose taste is broad will be satisfied.', hi: 'Woh paathak jinka swaad vyaapak hai, santusht honge.' },
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'अभी से', pron: 'shohn', type: 'Adverb' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Lesung', role: 'r-akkusativ', en: 'reading', hi: 'पाठ', pron: 'LAY-zung', type: 'Noun · fem.', why: 'die Lesung (this chapter).', ex: 'die Lesung' },
        { w: '.', plain: true }
      ], en: 'I am already looking forward to the reading.', hi: 'Mujhe abhi se paath ka intezaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-genitiv2">dessen</span> and <span class="de r-genitiv2">deren</span> replace <span class="de">sein</span>/<span class="de">ihr</span> inside a relative clause. Look at the ANTECEDENT (the noun before the comma): masculine or neuter → <span class="de r-genitiv2">dessen</span>; feminine or plural → <span class="de r-genitiv2">deren</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE IM GENITIV (B2 level): dessen (masc./neut. antecedent) and deren (fem./plural antecedent) replace possessive articles (sein/ihr) inside a relative clause. Example: "Der Mann, dessen Auto gestohlen wurde, ist mein Nachbar" (NOT "Der Mann, sein Auto gestohlen wurde"). The choice depends on the GENDER/NUMBER OF THE ANTECEDENT (the noun the clause describes), NOT the gender of the possessed noun that follows. ' +
    'Do NOT expect or require Präpositionalrelativsätze (worüber/woran) — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that dessen/deren is chosen based on the ANTECEDENT\'s gender/number, not the possessed noun\'s gender.\n' +
    '- Flag any use of "sein"/"ihr" inside a relative clause where dessen/deren should be used instead.\n' +
    '- Check that the verb goes to the end of the relative clause, as in any normal Nebensatz.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Antecedent check:</b> one sentence on whether the learner correctly identified the antecedent\'s gender/number when choosing dessen vs deren.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly choose dessen vs deren based on the antecedent every time. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: look at the ANTECEDENT\'s gender, not the possessed noun\'s gender, to choose dessen or deren.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Mann', role: 'plain' }, { w: ',', plain: true },
    { w: 'dessen', role: 'r-genitiv2' }, { w: 'Auto', role: 'plain' }, { w: 'neu', role: 'plain' }, { w: 'ist', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: dessen/deren replace sein/ihr inside a relative clause.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Petra and Timo describe colleagues, professors, and companies using dessen and deren.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 51 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master dessen vs deren and how they replace possessive pronouns.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university profile and a company profile full of Genitive relative clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the antecedent, the possessed noun, and the correct relative pronoun.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people and companies using dessen and deren naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and profiles using Genitive relative clauses naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill dessen-or-deren decisions, transformation, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 500 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 51 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'dessen-or-deren drills, transformation exercises, and a profile-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete comparison table, possessive transformation chart, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Der Mann, dessen Auto gestohlen wurde...', text: 'Use dessen for masculine/neuter antecedents' },
    { de: 'Die Frau, deren Sohn Arzt ist...', text: 'Use deren for feminine/plural antecedents' },
    { de: 'sein Auto → dessen Auto', text: 'Replace possessive pronouns inside relative clauses' },
    { de: 'der/das → dessen; die/die(Pl.) → deren', text: 'Apply the antecedent-based decision rule instantly' },
    { de: 'Ohne dessen Erlaubnis...', text: 'Use dessen/deren after a preposition' }
  ],

  // ---------- Vocabulary (51 items — uploaded chapter-37 list) ----------
  vocab: [
    { de: 'Bedeutungsnuance', art: 'die', gender: 'f', plural: 'Bedeutungsnuancen', pos: 'noun', level: 'B2', register: 'written', en: 'nuance of meaning', hi: 'अर्थ की सूक्ष्मता', ex: 'Die Bedeutungsnuance war schwer zu übersetzen.', exEn: 'The nuance of meaning was hard to translate.', exHi: 'Arth ki sookshmata anuvaad karna mushkil tha.', ex2: 'Sie haben die Bedeutungsnuance erklärt.', ex2En: 'They\'ve explained the nuance of meaning.', ex2Hi: 'Unhone arth ki sookshmata samjhaayi hai.' },
    { de: 'Bedeutungsverlust', art: 'der', gender: 'm', plural: 'Bedeutungsverluste', pos: 'noun', level: 'B2', register: 'written', en: 'loss of meaning/importance', hi: 'महत्व की हानि', ex: 'Der Bedeutungsverlust des Wortes war deutlich.', exEn: 'The loss of meaning of the word was clear.', exHi: 'Shabd ke arth ki haani spasht thi.', ex2: 'Sie haben den Bedeutungsverlust analysiert.', ex2En: 'They\'ve analysed the loss of meaning.', ex2Hi: 'Unhone arth ki haani ka vishleshan kiya hai.' },
    { de: 'Einfluss', art: 'der', gender: 'm', plural: 'Einflüsse', pos: 'noun', level: 'B2', register: 'both', en: 'influence', hi: 'प्रभाव', ex: 'Ihr Einfluss war groß.', exEn: 'Her influence was great.', exHi: 'Uska prabhaav bada tha.', ex2: 'Sie haben viel Einfluss ausgeübt.', ex2En: 'They\'ve exerted a lot of influence.', ex2Hi: 'Unhone bahut prabhaav daala hai.' },
    { de: 'gewohnt sein', pos: 'verb', level: 'B2', register: 'both', en: 'to be used to', hi: 'आदी होना', ex: 'Sie war es gewohnt, früh aufzustehen.', exEn: 'She was used to getting up early.', exHi: 'Woh jaldi uthne ki aadi thi.', ex2: 'Er ist es gewohnt, allein zu arbeiten.', ex2En: 'He\'s used to working alone.', ex2Hi: 'Woh akela kaam karne ka aadi hai.', conj: { praesens: 'ist gewohnt', praeteritum: 'war gewohnt', perfekt: 'ist gewohnt gewesen' } },
    { de: 'Liste', art: 'die', gender: 'f', plural: 'Listen', pos: 'noun', level: 'B2', register: 'both', en: 'list', hi: 'सूची', ex: 'Die Liste war sehr lang.', exEn: 'The list was very long.', exHi: 'Soochi bahut lambi thi.', ex2: 'Sie haben eine neue Liste erstellt.', ex2En: 'They\'ve created a new list.', ex2Hi: 'Unhone ek nayi soochi banaayi hai.' },
    { de: 'setzen', pos: 'verb', level: 'B2', register: 'both', en: 'to set, put, seat', hi: 'रखना, बिठाना', ex: 'Sie setzte das Kind auf den Stuhl.', exEn: 'She seated the child on the chair.', exHi: 'Usne bachche ko kursi par bithaaya.', ex2: 'Er hat sich hingesetzt.', ex2En: 'He\'s sat down.', ex2Hi: 'Woh baith gaya hai.', conj: { praesens: 'setzt', praeteritum: 'setzte', perfekt: 'hat gesetzt' } },
    { de: 'Textzusammenhang', art: 'der', gender: 'm', plural: 'Textzusammenhänge', pos: 'noun', level: 'B2', register: 'written', en: 'textual context', hi: 'पाठ संदर्भ', ex: 'Der Textzusammenhang half beim Verstehen.', exEn: 'The textual context helped with understanding.', exHi: 'Paath sandarbh ne samajhne mein madad ki.', ex2: 'Sie haben den Textzusammenhang analysiert.', ex2En: 'They\'ve analysed the textual context.', ex2Hi: 'Unhone paath sandarbh ka vishleshan kiya hai.' },
    { de: 'aktuell', pos: 'adjective', level: 'B2', register: 'both', en: 'current, up to date', hi: 'वर्तमान', ex: 'Die Information war aktuell.', exEn: 'The information was current.', exHi: 'Jaankaari vartamaan thi.', ex2: 'Sie haben aktuelle Daten verwendet.', ex2En: 'They\'ve used current data.', ex2Hi: 'Unhone vartamaan data ka upyog kiya hai.' },
    { de: 'an sich', pos: 'adverb', level: 'B2', register: 'written', en: 'in itself', hi: 'अपने आप में', ex: 'Das ist an sich kein Problem.', exEn: 'That is in itself no problem.', exHi: 'Yeh apne aap mein koi samasya nahi hai.', ex2: 'Die Idee ist an sich gut.', ex2En: 'The idea is good in itself.', ex2Hi: 'Vichaar apne aap mein achha hai.' },
    { de: 'andeuten', pos: 'verb', level: 'B2', register: 'both', en: 'to hint, imply', hi: 'इशारा करना', ex: 'Sie deutete ein Problem an.', exEn: 'She hinted at a problem.', exHi: 'Usne ek samasya ki ओर ishaara kiya.', ex2: 'Er hat seine Meinung angedeutet.', ex2En: 'He\'s hinted at his opinion.', ex2Hi: 'Usne apni raay ka ishaara diya hai.', conj: { praesens: 'deutet an', praeteritum: 'deutete an', perfekt: 'hat angedeutet' } },
    { de: 'angelehnt', pos: 'adjective', level: 'B2', register: 'written', en: 'leaning against, based on', hi: 'आधारित', ex: 'Die Geschichte war angelehnt an wahre Ereignisse.', exEn: 'The story was based on true events.', exHi: 'Kahaani sacchi ghatnaaon par aadhaarit thi.', ex2: 'Sie haben ein angelehntes Konzept entwickelt.', ex2En: 'They\'ve developed a based-on concept.', ex2Hi: 'Unhone ek aadhaarit avdhaarna vikasit ki hai.' },
    { de: 'ankaufen', pos: 'verb', level: 'B2', register: 'written', en: 'to buy up', hi: 'खरीद लेना', ex: 'Die Firma kaufte das Grundstück an.', exEn: 'The company bought up the property.', exHi: 'Company ne zameen khareed li.', ex2: 'Sie haben Aktien angekauft.', ex2En: 'They\'ve bought up shares.', ex2Hi: 'Unhone shares khareede hain.', conj: { praesens: 'kauft an', praeteritum: 'kaufte an', perfekt: 'hat angekauft' } },
    { de: 'Anlage', art: 'die', gender: 'f', plural: 'Anlagen', pos: 'noun', level: 'B2', register: 'both', en: 'facility, installation, aptitude', hi: 'सुविधा, योग्यता', ex: 'Die Anlage war modern ausgestattet.', exEn: 'The facility was modernly equipped.', exHi: 'Suvidha aadhunik roop se lais thi.', ex2: 'Sie haben eine natürliche Anlage für Musik.', ex2En: 'They\'ve got a natural aptitude for music.', ex2Hi: 'Unke paas sangeet ke liye prakritik yogyata hai.' },
    { de: 'anpassen', pos: 'verb', level: 'B2', register: 'both', en: 'to adapt, adjust', hi: 'अनुकूलित करना', ex: 'Sie passte sich schnell an.', exEn: 'She adapted quickly.', exHi: 'Woh jaldi anukoolit ho gayi.', ex2: 'Er hat den Plan angepasst.', ex2En: 'He\'s adjusted the plan.', ex2Hi: 'Usne yojana ko anukoolit kiya hai.', conj: { praesens: 'passt an', praeteritum: 'passte an', perfekt: 'hat angepasst' } },
    { de: 'antreten', pos: 'verb', level: 'B2', register: 'written', en: 'to start, take up (a post)', hi: 'पद ग्रहण करना', ex: 'Sie trat die neue Stelle an.', exEn: 'She took up the new position.', exHi: 'Usne nayi jagah grahan ki.', ex2: 'Er hat seine Amtszeit angetreten.', ex2En: 'He\'s taken up his term of office.', ex2Hi: 'Usne apna karyakaal shuru kiya hai.', conj: { praesens: 'tritt an', praeteritum: 'trat an', perfekt: 'ist angetreten' } },
    { de: 'Aufklärung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'enlightenment, education', hi: 'ज्ञानोदय', ex: 'Die Aufklärung veränderte Europa.', exEn: 'The Enlightenment changed Europe.', exHi: 'Gyaanoday ne Europe ko badal diya.', ex2: 'Sie haben über die Aufklärung diskutiert.', ex2En: 'They\'ve discussed the Enlightenment.', ex2Hi: 'Unhone gyaanoday par charcha ki hai.' },
    { de: 'aufliegen', pos: 'verb', level: 'B2', register: 'written', en: 'to lie on top', hi: 'ऊपर पड़ा होना', ex: 'Das Buch lag auf dem Tisch auf.', exEn: 'The book lay on top of the table.', exHi: 'Kitaab mez ke oopar padi thi.', ex2: 'Der Staub hat auf den Möbeln aufgelegen.', ex2En: 'The dust has lain on the furniture.', ex2Hi: 'Dhool furniture par jami thi.', conj: { praesens: 'liegt auf', praeteritum: 'lag auf', perfekt: 'hat aufgelegen' } },
    { de: 'auflisten', pos: 'verb', level: 'B2', register: 'both', en: 'to list', hi: 'सूचीबद्ध करना', ex: 'Sie listete alle Punkte auf.', exEn: 'She listed all the points.', exHi: 'Usne saare bindu soochibaddh kiye.', ex2: 'Er hat die Aufgaben aufgelistet.', ex2En: 'He\'s listed the tasks.', ex2Hi: 'Usne kaam soochibaddh kiye hain.', conj: { praesens: 'listet auf', praeteritum: 'listete auf', perfekt: 'hat aufgelistet' } },
    { de: 'aufreißen', pos: 'verb', level: 'B2', register: 'both', en: 'to tear open', hi: 'फाड़ खोलना', ex: 'Er riss den Umschlag auf.', exEn: 'He tore open the envelope.', exHi: 'Usne lifaafa faad kar khola.', ex2: 'Sie haben das Paket aufgerissen.', ex2En: 'They\'ve torn open the package.', ex2Hi: 'Unhone package faad kar khola hai.', conj: { praesens: 'reißt auf', praeteritum: 'riss auf', perfekt: 'hat aufgerissen' } },
    { de: 'aushalten', pos: 'verb', level: 'B2', register: 'both', en: 'to endure, bear', hi: 'सहन करना', ex: 'Sie hielt den Schmerz aus.', exEn: 'She endured the pain.', exHi: 'Usne dard sahaa.', ex2: 'Er hat die Situation ausgehalten.', ex2En: 'He\'s borne the situation.', ex2Hi: 'Usne sthiti sahi hai.', conj: { praesens: 'hält aus', praeteritum: 'hielt aus', perfekt: 'hat ausgehalten' } },
    { de: 'ausrauben', pos: 'verb', level: 'B2', register: 'both', en: 'to rob', hi: 'लूटना', ex: 'Man raubte die Bank aus.', exEn: 'The bank was robbed.', exHi: 'Bank ko loota gaya.', ex2: 'Sie haben den Laden ausgeraubt.', ex2En: 'They\'ve robbed the shop.', ex2Hi: 'Unhone dukaan loot li hai.', conj: { praesens: 'raubt aus', praeteritum: 'raubte aus', perfekt: 'hat ausgeraubt' } },
    { de: 'basieren', pos: 'verb', level: 'B2', register: 'written', en: 'to be based on', hi: 'आधारित होना', ex: 'Der Film basierte auf einer wahren Geschichte.', exEn: 'The film was based on a true story.', exHi: 'Film ek sacchi kahaani par aadhaarit thi.', ex2: 'Die Studie hat auf Daten basiert.', ex2En: 'The study has been based on data.', ex2Hi: 'Adhyayan data par aadhaarit raha hai.', conj: { praesens: 'basiert', praeteritum: 'basierte', perfekt: 'hat basiert' } },
    { de: 'bedecken', pos: 'verb', level: 'B2', register: 'both', en: 'to cover', hi: 'ढकना', ex: 'Schnee bedeckte die Straße.', exEn: 'Snow covered the street.', exHi: 'Barf ne sadak dhak di.', ex2: 'Sie haben den Tisch bedeckt.', ex2En: 'They\'ve covered the table.', ex2Hi: 'Unhone mez dhaki hai.', conj: { praesens: 'bedeckt', praeteritum: 'bedeckte', perfekt: 'hat bedeckt' } },
    { de: 'begegnen', pos: 'verb', level: 'B2', register: 'both', en: 'to meet, encounter', hi: 'मिलना', ex: 'Sie begegnete ihm zufällig.', exEn: 'She encountered him by chance.', exHi: 'Woh usse achaanak mil gayi.', ex2: 'Er ist einer Herausforderung begegnet.', ex2En: 'He\'s encountered a challenge.', ex2Hi: 'Usne ek chunauti ka saamna kiya hai.', conj: { praesens: 'begegnet', praeteritum: 'begegnete', perfekt: 'ist begegnet' } },
    { de: 'begreifen', pos: 'verb', level: 'B2', register: 'both', en: 'to grasp, comprehend', hi: 'समझना', ex: 'Sie begriff die Situation sofort.', exEn: 'She grasped the situation immediately.', exHi: 'Usne turant sthiti samjhi.', ex2: 'Er hat das Konzept begriffen.', ex2En: 'He\'s grasped the concept.', ex2Hi: 'Usne avdhaarna samjhi hai.', conj: { praesens: 'begreift', praeteritum: 'begriff', perfekt: 'hat begriffen' } },
    { de: 'bereiten', pos: 'verb', level: 'B2', register: 'both', en: 'to prepare, cause', hi: 'तैयार करना, उत्पन्न करना', ex: 'Das bereitete ihr Freude.', exEn: 'That gave her joy.', exHi: 'Isse use khushi hui.', ex2: 'Sie haben Probleme bereitet.', ex2En: 'They\'ve caused problems.', ex2Hi: 'Unhone samasyaayein utpann ki hain.', conj: { praesens: 'bereitet', praeteritum: 'bereitete', perfekt: 'hat bereitet' } },
    { de: 'berühren', pos: 'verb', level: 'B2', register: 'both', en: 'to touch', hi: 'छूना', ex: 'Sie berührte seine Hand.', exEn: 'She touched his hand.', exHi: 'Usne uska haath chhua.', ex2: 'Das Thema hat mich berührt.', ex2En: 'The topic has touched me.', ex2Hi: 'Vishay ne mujhe chhua hai.', conj: { praesens: 'berührt', praeteritum: 'berührte', perfekt: 'hat berührt' } },
    { de: 'beseelt', pos: 'adjective', level: 'B2', register: 'written', en: 'inspired, animated', hi: 'प्रेरित', ex: 'Sie war von großer Leidenschaft beseelt.', exEn: 'She was inspired by great passion.', exHi: 'Woh mahaan josh se prerit thi.', ex2: 'Er hat beseelt gearbeitet.', ex2En: 'He\'s worked with inspiration.', ex2Hi: 'Usne josh ke saath kaam kiya hai.' },
    { de: 'besehen', pos: 'verb', level: 'B2', register: 'written', en: 'to look at, inspect, view', hi: 'देखना, निरीक्षण करना', ex: 'Sie besah das Gemälde genau.', exEn: 'She inspected the painting closely.', exHi: 'Usne painting ka barikee se nireekshan kiya.', ex2: 'Er hat sich das Haus besehen.', ex2En: 'He\'s viewed the house.', ex2Hi: 'Usne ghar dekha hai.', conj: { praesens: 'besieht', praeteritum: 'besah', perfekt: 'hat besehen' } },
    { de: 'besorgt', pos: 'adjective', level: 'B2', register: 'both', en: 'worried, concerned', hi: 'चिंतित', ex: 'Sie war besorgt um ihn.', exEn: 'She was worried about him.', exHi: 'Woh uske baare mein chintit thi.', ex2: 'Sie haben besorgt reagiert.', ex2En: 'They\'ve reacted with concern.', ex2Hi: 'Unhone chintit hokar pratikriya di hai.' },
    { de: 'Besprechung', art: 'die', gender: 'f', plural: 'Besprechungen', pos: 'noun', level: 'B2', register: 'both', en: 'meeting, discussion, review', hi: 'बैठक, समीक्षा', ex: 'Die Besprechung dauerte eine Stunde.', exEn: 'The meeting lasted an hour.', exHi: 'Baithak ek ghanta chali.', ex2: 'Sie haben eine wichtige Besprechung gehabt.', ex2En: 'They\'ve had an important meeting.', ex2Hi: 'Unki ek mahatvapurn baithak hui hai.' },
    { de: 'bestehen', pos: 'verb', level: 'B2', register: 'both', en: 'to exist, pass, consist of', hi: 'अस्तित्व में होना, पास होना', ex: 'Sie bestand die Prüfung.', exEn: 'She passed the exam.', exHi: 'Usne pareeksha paas ki.', ex2: 'Das Team hat aus fünf Personen bestanden.', ex2En: 'The team has consisted of five people.', ex2Hi: 'Team paanch logon se bana hai.', conj: { praesens: 'besteht', praeteritum: 'bestand', perfekt: 'hat bestanden' } },
    { de: 'besteigen', pos: 'verb', level: 'B2', register: 'written', en: 'to climb', hi: 'चढ़ना', ex: 'Sie bestiegen den Berg.', exEn: 'They climbed the mountain.', exHi: 'Unhone pahaad par chadhaai ki.', ex2: 'Er hat den Zug bestiegen.', ex2En: 'He\'s boarded the train.', ex2Hi: 'Woh train mein chadha hai.', conj: { praesens: 'besteigt', praeteritum: 'bestieg', perfekt: 'hat bestiegen' } },
    { de: 'betreten', pos: 'verb', level: 'B2', register: 'both', en: 'to enter, step on', hi: 'प्रवेश करना', ex: 'Sie betrat den Raum leise.', exEn: 'She entered the room quietly.', exHi: 'Woh chupchaap kamre mein daakhil hui.', ex2: 'Er hat das Gebäude betreten.', ex2En: 'He\'s entered the building.', ex2Hi: 'Woh imaarat mein daakhil hua hai.', conj: { praesens: 'betritt', praeteritum: 'betrat', perfekt: 'hat betreten' } },
    { de: 'Buchbesprechung', art: 'die', gender: 'f', plural: 'Buchbesprechungen', pos: 'noun', level: 'B2', register: 'written', en: 'book review', hi: 'पुस्तक समीक्षा', ex: 'Die Buchbesprechung war sehr positiv.', exEn: 'The book review was very positive.', exHi: 'Pustak sameeksha bahut sakaraatmak thi.', ex2: 'Sie haben eine Buchbesprechung geschrieben.', ex2En: 'They\'ve written a book review.', ex2Hi: 'Unhone ek pustak sameeksha likhi hai.' },
    { de: 'drehen', pos: 'verb', level: 'B2', register: 'both', en: 'to turn, shoot (a film)', hi: 'घुमाना, फिल्म बनाना', ex: 'Sie drehte den Schlüssel um.', exEn: 'She turned the key.', exHi: 'Usne chaabi ghumaayi.', ex2: 'Er hat einen Film gedreht.', ex2En: 'He\'s shot a film.', ex2Hi: 'Usne ek film banaayi hai.', conj: { praesens: 'dreht', praeteritum: 'drehte', perfekt: 'hat gedreht' } },
    { de: 'einführen', pos: 'verb', level: 'B2', register: 'both', en: 'to introduce, import', hi: 'शुरू करना, आयात करना', ex: 'Sie führten ein neues System ein.', exEn: 'They introduced a new system.', exHi: 'Unhone ek nayi pranaali shuru ki.', ex2: 'Das Land hat Waren eingeführt.', ex2En: 'The country has imported goods.', ex2Hi: 'Desh ne saamaan aayaat kiya hai.', conj: { praesens: 'führt ein', praeteritum: 'führte ein', perfekt: 'hat eingeführt' } },
    { de: 'einlassen', pos: 'verb', level: 'B2', register: 'both', en: 'to let in, engage with', hi: 'अंदर आने देना, जुड़ना', ex: 'Sie ließ ihn nicht ein.', exEn: 'She didn\'t let him in.', exHi: 'Usne use andar aane nahi diya.', ex2: 'Er hat sich auf das Risiko eingelassen.', ex2En: 'He\'s engaged with the risk.', ex2Hi: 'Usne khatre ko sweekaar kiya hai.', conj: { praesens: 'lässt ein', praeteritum: 'ließ ein', perfekt: 'hat eingelassen' } },
    { de: 'einsam', pos: 'adjective', level: 'B2', register: 'both', en: 'lonely', hi: 'अकेला', ex: 'Sie fühlte sich einsam.', exEn: 'She felt lonely.', exHi: 'Woh akela mahsoos kar rahi thi.', ex2: 'Er hat einsame Nächte verbracht.', ex2En: 'He\'s spent lonely nights.', ex2Hi: 'Usne akeli raatein bitaayi hain.' },
    { de: 'Empfindung', art: 'die', gender: 'f', plural: 'Empfindungen', pos: 'noun', level: 'B2', register: 'written', en: 'sensation, feeling', hi: 'अनुभूति', ex: 'Ihre Empfindung war intensiv.', exEn: 'Her sensation was intense.', exHi: 'Uski anubhooti teevr thi.', ex2: 'Sie haben ihre Empfindungen beschrieben.', ex2En: 'They\'ve described their sensations.', ex2Hi: 'Unhone apni anubhootiyaan varnan ki hain.' },
    { de: 'entführen', pos: 'verb', level: 'B2', register: 'written', en: 'to abduct, kidnap', hi: 'अपहरण करना', ex: 'Man entführte das Kind.', exEn: 'The child was abducted.', exHi: 'Bachche ka apaharan hua.', ex2: 'Sie haben den Geschäftsmann entführt.', ex2En: 'They\'ve kidnapped the businessman.', ex2Hi: 'Unhone vyapaari ka apaharan kiya hai.', conj: { praesens: 'entführt', praeteritum: 'entführte', perfekt: 'hat entführt' } },
    { de: 'entstehen', pos: 'verb', level: 'B2', register: 'both', en: 'to arise, come into being', hi: 'उत्पन्न होना', ex: 'Ein Problem entstand.', exEn: 'A problem arose.', exHi: 'Ek samasya utpann hui.', ex2: 'Das Projekt ist langsam entstanden.', ex2En: 'The project has slowly come into being.', ex2Hi: 'Project dheere-dheere aakaar le chuka hai.', conj: { praesens: 'entsteht', praeteritum: 'entstand', perfekt: 'ist entstanden' } },
    { de: 'erben', pos: 'verb', level: 'B2', register: 'both', en: 'to inherit', hi: 'विरासत में पाना', ex: 'Sie erbte das Haus.', exEn: 'She inherited the house.', exHi: 'Use ghar viraasat mein mila.', ex2: 'Er hat Geld geerbt.', ex2En: 'He\'s inherited money.', ex2Hi: 'Use paisa viraasat mein mila hai.', conj: { praesens: 'erbt', praeteritum: 'erbte', perfekt: 'hat geerbt' } },
    { de: 'erfolgen', pos: 'verb', level: 'B2', register: 'written', en: 'to take place, occur', hi: 'होना, घटित होना', ex: 'Die Zahlung erfolgte pünktlich.', exEn: 'The payment took place on time.', exHi: 'Bhugtaan samay par hua.', ex2: 'Die Entscheidung ist schnell erfolgt.', ex2En: 'The decision has occurred quickly.', ex2Hi: 'Faisla jaldi hua hai.', conj: { praesens: 'erfolgt', praeteritum: 'erfolgte', perfekt: 'ist erfolgt' } },
    { de: 'erpressen', pos: 'verb', level: 'B2', register: 'written', en: 'to blackmail, extort', hi: 'ब्लैकमेल करना', ex: 'Er erpresste das Opfer.', exEn: 'He blackmailed the victim.', exHi: 'Usne peedit ko blackmail kiya.', ex2: 'Sie haben Geld erpresst.', ex2En: 'They\'ve extorted money.', ex2Hi: 'Unhone paisa jabardasti liya hai.', conj: { praesens: 'erpresst', praeteritum: 'erpresste', perfekt: 'hat erpresst' } },
    { de: 'schlagen', pos: 'verb', level: 'B2', register: 'both', en: 'to hit, beat, strike', hi: 'मारना', ex: 'Sie schlug an die Tür.', exEn: 'She struck the door.', exHi: 'Usne darwaaze par thoka.', ex2: 'Er hat den Rekord geschlagen.', ex2En: 'He\'s beaten the record.', ex2Hi: 'Usne record tod diya hai.', conj: { praesens: 'schlägt', praeteritum: 'schlug', perfekt: 'hat geschlagen' } },
    { de: 'verleihen', pos: 'verb', level: 'B2', register: 'both', en: 'to award, lend, confer', hi: 'प्रदान करना, उधार देना', ex: 'Man verlieh ihr einen Preis.', exEn: 'She was awarded a prize.', exHi: 'Use ek puraskaar diya gaya.', ex2: 'Sie haben ihm Geld verliehen.', ex2En: 'They\'ve lent him money.', ex2Hi: 'Unhone use paisa udhaar diya hai.', conj: { praesens: 'verleiht', praeteritum: 'verlieh', perfekt: 'hat verliehen' } },
    { de: 'Charakter', art: 'der', gender: 'm', plural: 'Charaktere', pos: 'noun', level: 'B2', register: 'both', en: 'character, personality', hi: 'चरित्र', ex: 'Ihr Charakter war stark.', exEn: 'Her character was strong.', exHi: 'Uska charitra mazboot tha.', ex2: 'Sie haben seinen Charakter geschätzt.', ex2En: 'They\'ve valued his character.', ex2Hi: 'Unhone uske charitra ki sarahna ki hai.' },
    { de: 'Flügel', art: 'der', gender: 'm', plural: 'Flügel', pos: 'noun', level: 'B2', register: 'both', en: 'wing, grand piano', hi: 'पंख, ग्रैंड पियानो', ex: 'Der Vogel breitete seinen Flügel aus.', exEn: 'The bird spread its wing.', exHi: 'Chidiya ne apna pankh phailaaya.', ex2: 'Sie hat auf dem Flügel gespielt.', ex2En: 'She\'s played on the grand piano.', ex2Hi: 'Usne grand piano baaja hai.' },
    { de: 'Konzept', art: 'das', gender: 'n', plural: 'Konzepte', pos: 'noun', level: 'B2', register: 'both', en: 'concept, draft', hi: 'अवधारणा', ex: 'Das Konzept war innovativ.', exEn: 'The concept was innovative.', exHi: 'Avdhaarna navacharpurn thi.', ex2: 'Sie haben ein neues Konzept entwickelt.', ex2En: 'They\'ve developed a new concept.', ex2Hi: 'Unhone ek nayi avdhaarna vikasit ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Genitiv-Relativsätze?',
      body: [ 'dessen/deren replace a possessive article (sein/ihr) inside a relative clause.' ],
      table: {
        head: ['Normal sentences', 'Relative clause'],
        rows: [
          ['Anna hat einen Bruder. Sein Auto ist neu.', 'Anna hat einen Bruder, dessen Auto neu ist.']
        ]
      },
      hinglish: '<b>dessen</b> aur <b>deren</b> relative clause ke andar possessive ki jagah lete hain \u2014 matlab jahan tum normally <i>sein</i> ya <i>ihr</i> kehte, wahan yeh aate hain. Inka matlab hai "jiska" ya "jiski".'
    },
    {
      title: 'dessen',
      body: [ 'Used when the possessed noun belongs to a masculine or neuter antecedent.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Der Mann, dessen Auto gestohlen wurde, ist mein Nachbar.</span>'],
          ['<span class="de">Das Kind, dessen Eltern Ärzte sind, wohnt nebenan.</span>'],
          ['<span class="de">Der Professor, dessen Vortrag interessant war, arbeitet an der Universität.</span>']
        ]
      },
      hinglish: '<b>dessen</b> tab aata hai jab comma se pehle wala noun masculine ya neuter ho \u2014 matlab <i>der</i> ya <i>das</i> wala.'
    },
    {
      title: 'deren',
      body: [ 'Used when the possessed noun belongs to a feminine or plural antecedent.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Die Frau, deren Sohn Arzt ist, arbeitet hier.</span>'],
          ['<span class="de">Die Studenten, deren Prüfung morgen beginnt, lernen gemeinsam.</span>'],
          ['<span class="de">Die Firma, deren Produkte weltweit verkauft werden, expandiert weiter.</span>']
        ]
      },
      hinglish: '<b>deren</b> tab aata hai jab comma se pehle wala noun feminine ho ya plural \u2014 matlab dono cases mein <i>die</i> wala.'
    },
    {
      title: 'dessen vs deren — Vergleichstabelle',
      body: [ 'Memorize this table — the antecedent\'s gender/number decides the choice.' ],
      table: {
        head: ['Antecedent', 'Relative Pronoun'],
        rows: [
          ['der', 'dessen'],
          ['das', 'dessen'],
          ['die', 'deren'],
          ['die (Plural)', 'deren']
        ]
      },
      hinglish: 'Is table ko yaad kar lo. Yaad rakhne ki ek hi baat hai \u2014 choice comma se <b>pehle</b> wale noun se hoti hai, uske baad wale noun se nahi. Yahi sabse badi galti hoti hai.'
    },
    {
      title: 'dessen / deren ändern sich NICHT',
      body: [
        'Once you have picked <b>dessen</b> or <b>deren</b> from the antecedent, the form never changes again \u2014 no matter what job the possessed noun does inside the relative clause. It can be the subject, the accusative object, or sit after a preposition; <b>dessen</b> stays <b>dessen</b>.',
        'Two more things follow from this: the possessed noun takes <b>no article</b> of its own (<i>dessen Auto</i>, never <i>dessen das Auto</i>), and any adjective in front of it takes a strong ending (<i>dessen neues Auto</i>).'
      ],
      table: {
        head: ['Role of the possessed noun', 'Example'],
        rows: [
          ['Subject (Nominativ)', '<span class="de">Der Mann, dessen Auto neu ist, \u2026</span>'],
          ['Object (Akkusativ)', '<span class="de">Der Mann, dessen Auto ich gesehen habe, \u2026</span>'],
          ['After a preposition', '<span class="de">Der Mann, mit dessen Bruder ich arbeite, \u2026</span>'],
          ['Feminine antecedent, object', '<span class="de">Die Frau, deren Sohn ich kenne, \u2026</span>']
        ]
      },
      note: 'Note the third row: when a preposition is involved it comes FIRST, before dessen/deren \u2014 <span class="de">mit dessen Bruder</span>, not <i>dessen mit Bruder</i>.',
      hinglish: 'Ek baar antecedent dekh kar <b>dessen</b> ya <b>deren</b> choose kar liya, to woh form phir badalta nahi \u2014 chahe uske baad wala noun subject ho, object ho, ya preposition ke baad aaye. Isliye <span class="de">dessen Auto neu ist</span> aur <span class="de">dessen Auto ich gesehen habe</span> \u2014 dono mein <b>dessen</b> hi rehta hai. Do baatein saath yaad rakho: us noun par apna koi article nahi lagta (<i>dessen Auto</i>, na ki <i>dessen das Auto</i>), aur agar adjective aaye to usme strong ending lagti hai (<i>dessen neues Auto</i>). Aur preposition ho to woh sabse pehle aata hai: <span class="de">mit dessen Bruder</span>.'
    },
    {
      title: 'dessen / deren vs sein / ihr',
      body: [ 'sein/ihr cannot be used inside a relative clause — dessen/deren must replace them.' ],
      table: {
        head: ['Incorrect', 'Correct'],
        rows: [
          ['<span class="de">Der Mann, sein Auto gestohlen wurde...</span>', '<span class="de">Der Mann, dessen Auto gestohlen wurde...</span>']
        ]
      },
      hinglish: 'Relative clause ke andar <i>sein</i> ya <i>ihr</i> nahi chalta \u2014 wahan <b>dessen</b> ya <b>deren</b> hi aata hai. Yeh dono hi possessive ka kaam kar dete hain, isliye alag se <i>sein</i> lagane ki zaroorat nahi.'
    },
    {
      title: 'Register',
      body: [ 'dessen and deren are extremely common in newspapers, reports, academic writing, presentations, and business communication.' ],
      note: 'They make writing more elegant and compact — a strong marker of formal, native-like B2 German.',
      hinglish: '<b>dessen</b> aur <b>deren</b> newspapers, reports aur business writing mein bahut aate hain, kyunki inse do sentences ek saaf sentence ban jaate hain. Isliye reading mein inhe pehchaanna zaroori hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from using sein/ihr instead of dessen/deren, or choosing the wrong one based on the possessed noun instead of the antecedent.' ],
      mistakes: [
        { wrong: 'Der Mann, sein Auto neu ist...', right: 'Der Mann, dessen Auto neu ist...', why: '"sein" cannot be used inside a relative clause — "dessen" replaces it.' },
        { wrong: 'Die Frau, dessen Sohn Arzt ist...', right: 'Die Frau, deren Sohn Arzt ist...', why: 'The antecedent "die Frau" is feminine, so "deren" is required — not "dessen".' },
        { wrong: 'Das Kind, deren Eltern hier wohnen...', right: 'Das Kind, dessen Eltern hier wohnen...', why: 'The antecedent "das Kind" is neuter, so "dessen" is required — not "deren".' },
        { wrong: 'Die Studenten, dessen Prüfung morgen ist...', right: 'Die Studenten, deren Prüfung morgen ist...', why: 'The antecedent "die Studenten" is plural, so "deren" is required — not "dessen".' },
        { wrong: 'Der Professor, der sein Vortrag interessant war...', right: 'Der Professor, dessen Vortrag interessant war...', why: 'A possessive relationship requires "dessen", not a plain relative pronoun "der" plus "sein".' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 <i>sein/ihr</i> ko relative clause mein use kar dena, ya <b>dessen/deren</b> ka choice galat noun dekh kar karna. Choice hamesha comma se pehle wale noun se hoti hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Always ask: what is the antecedent (the noun right before the comma)? Its gender/number decides dessen vs deren.' ],
      note: 'Memory trick: der/das → dessen. die/die(Pl.) → deren. Think: Whose? → Use dessen/deren.',
      hinglish: 'Har baar ek hi sawaal poochho \u2014 comma se pehle wala noun kya hai? Uska gender aur number hi tay karta hai ki <b>dessen</b> aayega ya <b>deren</b>.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Buchbesprechung: Ein Roman über einen zerrissenen Charakter',
    titleEn: 'Book review: a novel about a torn character',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective' },
      { w: 'Roman', role: 'plain', en: 'novel', hi: 'उपन्यास', type: 'Noun · masc.' },
      { w: 'erzählt', role: 'plain', en: 'tells', hi: 'बताता है', type: 'Verb · erzählen' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Pianisten', role: 'plain', en: 'pianist (Satzende)', hi: 'पियानोवादक (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dessen', role: 'r-connector', en: 'whose (Genitiv)', hi: 'जिसका (Genitiv)', type: 'Relativpronomen · Genitiv (masculine Bezugswort)', why: 'dessen refers back to Pianisten (masculine) — the Genitiv relative pronoun for masc./neut. antecedents (this chapter).' },
      { w: 'ganzes', role: 'plain', en: 'entire', hi: 'पूरा', type: 'Adjective' },
      { w: 'Leben', role: 'plain', en: 'life (Satzende)', hi: 'जीवन (Satzende)', type: 'Noun · neut.' },
      { w: 'von', role: 'plain', en: 'by', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'zerbrochenen', role: 'plain', en: 'broken', hi: 'टूटा हुआ', type: 'Adjective' },
      { w: 'Flügel', role: 'plain', en: 'grand piano (Satzende)', hi: 'ग्रैंड पियानो (Satzende)', type: 'Noun · masc.', why: 'der Flügel (this chapter): a grand piano, distinct from the "wing" meaning in ch.35.' },
      { w: 'geprägt', role: 'plain', en: 'shaped (Satzende)', hi: 'गढ़ा गया (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wird', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · werden (Passiv, Nebensatz-Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Hauptfigur', role: 'plain', en: 'main character', hi: 'मुख्य पात्र', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-connector', en: 'whose (Genitiv)', hi: 'जिसकी (Genitiv)', type: 'Relativpronomen · Genitiv (feminine Bezugswort)', why: 'deren refers back to Hauptfigur (feminine) — same form for feminine and plural antecedents (this chapter).' },
      { w: 'Charakter', role: 'plain', en: 'character', hi: 'चरित्र', type: 'Noun · masc.', why: 'der Charakter (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Verlauf', role: 'plain', en: 'course (Satzende)', hi: 'दौरान (Satzende)', type: 'Noun · masc.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Romans', role: 'plain', en: 'novel (gen., Satzende)', hi: 'उपन्यास (gen., Satzende)', type: 'Noun · masc.' },
      { w: 'wandelt', role: 'plain', en: 'transforms (Satzende)', hi: 'बदलती है (Satzende)', type: 'Verb · sich wandeln (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'überzeugt', role: 'plain', en: 'convinces (linke Klammer)', hi: 'क़ायल करती है (बायाँ कोष्ठक)', type: 'Verb · überzeugen (Linke Klammer)' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'के माध्यम से', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'ungewöhnliches', role: 'plain', en: 'unusual', hi: 'असामान्य', type: 'Adjective' },
      { w: 'Konzept', role: 'plain', en: 'concept (Satzende)', hi: 'अवधारणा (Satzende)', type: 'Noun · neut.', why: 'das Konzept (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Kritiker', role: 'plain', en: 'critic', hi: 'आलोचक', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dessen', role: 'r-connector', en: 'whose (Genitiv)', hi: 'जिसका (Genitiv)', type: 'Relativpronomen · Genitiv (masculine Bezugswort)' },
      { w: 'Buchbesprechung', role: 'plain', en: 'review (Satzende)', hi: 'समीक्षा (Satzende)', type: 'Noun · fem.', why: 'die Buchbesprechung (this chapter).' },
      { w: 'international', role: 'plain', en: 'internationally (Satzende)', hi: 'अंतरराष्ट्रीय रूप से (Satzende)', type: 'Adjective' },
      { w: 'zitiert', role: 'plain', en: 'quoted (Satzende)', hi: 'उद्धृत की गई (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wurde', role: 'plain', en: 'was (Satzende)', hi: 'गई (Satzende)', type: 'Verb · werden (Präteritum Passiv, Nebensatz-Satzende)' },
      { w: ',', plain: true },
      { w: 'nennt', role: 'plain', en: 'calls (linke Klammer)', hi: 'कहता है (बायाँ कोष्ठक)', type: 'Verb · nennen (Linke Klammer)' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Buch', role: 'plain', en: 'book', hi: 'किताब', type: 'Noun · neut.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Meisterwerk', role: 'plain', en: 'masterpiece (Satzende)', hi: 'उत्कृष्ट कृति (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Verlag', role: 'plain', en: 'publishing house', hi: 'प्रकाशक', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dessen', role: 'r-connector', en: 'whose', hi: 'जिसकी', type: 'Relativpronomen · Genitiv', why: 'dessen (masc./neut. genitive) refers back to der Verlag (this chapter).' },
      { w: 'Erwartungen', role: 'plain', en: 'expectations', hi: 'अपेक्षाएँ', type: 'Noun · plural' },
      { w: 'ohnehin', role: 'plain', en: 'anyway', hi: 'वैसे भी', type: 'Adverb' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'ऊँची (Satzende)', type: 'Adjective' },
      { w: 'waren', role: 'plain', en: 'were (Satzende)', hi: 'थीं (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'plant', role: 'plain', en: 'is planning', hi: 'योजना बना रहा है', type: 'Verb · planen' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Übersetzung', role: 'plain', en: 'translation', hi: 'अनुवाद', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'into', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Sprachen', role: 'plain', en: 'languages (Satzende)', hi: 'भाषाओं (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Leser', role: 'plain', en: 'readers', hi: 'पाठक', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-connector', en: 'whose', hi: 'जिनकी', type: 'Relativpronomen · Genitiv Plural' },
      { w: 'Erwartungen', role: 'plain', en: 'expectations', hi: 'अपेक्षाएँ', type: 'Noun · plural' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'के बाद', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (neut. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Vorgängerroman', role: 'plain', en: 'previous novel (Satzende)', hi: 'पिछले उपन्यास (Satzende)', type: 'Noun · masc.' },
      { w: 'entsprechend', role: 'plain', en: 'accordingly', hi: 'तदनुसार', type: 'Adjective' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'ऊँची (Satzende)', type: 'Adjective' },
      { w: 'waren', role: 'plain', en: 'were (Satzende)', hi: 'थीं (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'werden', role: 'plain', en: 'will be', hi: 'होंगे', type: 'Verb · werden (Futur I)' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'enttäuscht', role: 'plain', en: 'disappointed (Satzende)', hi: 'निराश (Satzende)', type: 'Adjective' },
      { w: 'sein', role: 'plain', en: 'be (Satzende)', hi: 'होंगे (Satzende)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true }
    ],
    translation: 'The new novel tells of a pianist whose entire life was shaped by a broken grand piano. The main character, whose personality transforms in the course of the novel, convinces through an unusual concept. A critic whose review was quoted internationally calls the book a masterpiece. The publishing house, whose expectations were high anyway, is already planning a translation into several languages. Readers whose expectations were accordingly high after the previous novel will hardly be disappointed.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_037_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Petra, wer ist der Autor, dessen Buch gerade erschienen ist?', en: 'Petra, who is the author whose book just came out?' },
      { id: 'B2_037_L002', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das ist Jonas Berger, dessen letzter Roman schon sehr erfolgreich war.', en: 'That\'s Jonas Berger, whose last novel was already very successful.' },
      { id: 'B2_037_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der Verlag, dessen Programm junge Talente fördert — ist das derselbe wie letztes Jahr?', en: 'And the publisher whose program supports young talent — is that the same as last year?' },
      { id: 'B2_037_L004', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, deren Reihe hat schon drei Debütromane herausgebracht.', en: 'Exactly, their series has already published three debut novels.' }
    ],
    transcript: 'Petra, wer ist der Autor, dessen Buch gerade erschienen ist? Das ist Jonas Berger, dessen letzter Roman schon sehr erfolgreich war. Und der Verlag, dessen Programm junge Talente fördert — ist das derselbe wie letztes Jahr? Genau, deren Reihe hat schon drei Debütromane herausgebracht.',
    translation: 'Petra, who is the author whose book just came out? That\'s Jonas Berger, whose last novel was already very successful. And the publisher whose program supports young talent — is that the same as last year? Exactly, their series has already published three debut novels.',
    tokens: [
      { w: 'Petra' },
      { w: ',', plain: true },
      { w: 'wer' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Autor' },
      { w: ',', plain: true },
      { w: 'dessen' },
      { w: 'Buch' },
      { w: 'gerade' },
      { w: 'erschienen' },
      { w: 'ist' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'Jonas' },
      { w: 'Berger' },
      { w: ',', plain: true },
      { w: 'dessen' },
      { w: 'letzter' },
      { w: 'Roman' },
      { w: 'schon' },
      { w: 'sehr' },
      { w: 'erfolgreich' },
      { w: 'war' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'Verlag' },
      { w: ',', plain: true },
      { w: 'dessen' },
      { w: 'Programm' },
      { w: 'junge' },
      { w: 'Talente' },
      { w: 'fördert' },
      { w: '—', plain: true },
      { w: 'ist' },
      { w: 'das' },
      { w: 'derselbe' },
      { w: 'wie' },
      { w: 'letztes' },
      { w: 'Jahr' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'deren' },
      { w: 'Reihe' },
      { w: 'hat' },
      { w: 'schon' },
      { w: 'drei' },
      { w: 'Debütromane' },
      { w: 'herausgebracht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist gerade mit Jonas Bergers neuem Buch passiert?', qEn: 'What just happened with Jonas Berger\'s new book?', options: ['es wurde abgesagt', 'es ist gerade erschienen', 'es wurde übersetzt', 'es ist vergriffen'], optionsEn: ['it was cancelled', 'it has just come out', 'it was translated', 'it is out of print'], answer: 1,
        explain: '"Der Autor, dessen Buch gerade erschienen ist."' },
      { q: 'Wie viele Debütromane hat die Reihe des Verlags herausgebracht?', qEn: 'How many debut novels has the publisher\'s series released?', options: ['eins', 'zwei', 'drei', 'vier'], optionsEn: ['one', 'two', 'three', 'four'], answer: 2,
        explain: '"Deren Reihe hat schon drei Debütromane herausgebracht."' }
    ]
  },

  speaking: [
    { task: "Eine Kollegin fragt, wer der Autor mit dem neuen Buch ist.", taskEn: "A colleague asks who the author with the new book is.", de: "Das ist Jonas Berger, dessen letzter Roman sehr erfolgreich war.", en: "That's Jonas Berger, whose last novel was very successful." },
    { task: "Sie fragt nach dem Verlag.", taskEn: "She asks about the publisher.", de: "Das ist der Verlag, dessen Programm ich sehr schätze.", en: "That's the publisher whose list I greatly value." },
    { task: "Ein Bekannter fragt nach der Autorin auf der Liste.", taskEn: "An acquaintance asks about the author on the list.", de: "Das ist die Autorin, deren Essays im Feuilleton stehen.", en: "That's the author whose essays are in the arts pages." },
    { task: "Deine Chefin fragt, wen du für das Projekt vorschlägst.", taskEn: "Your boss asks who you propose for the project.", de: "Ich schlage die Kollegin vor, deren Texte immer präzise sind.", en: "I propose the colleague whose texts are always precise." },
    { task: "Rollenspiel: Ihr stellt zwei Verlage vor.", taskEn: "Role-play: you present two publishing houses.", de: "Der Verlag, dessen Autoren bekannt sind, zahlt besser. — Aber der andere, dessen Lektoren gut sind, arbeitet genauer.", en: "The publisher whose authors are well known pays better. — But the other one, whose editors are good, works more carefully." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Company profile (6-8 sentences): Describe a company and its employees using dessen and deren naturally.\n\nTASK 2 — University description (6-8 sentences): Describe a university, its professors, and its students using Genitive relative clauses.',
    starters: ['Der Mitarbeiter, dessen …', 'Die Firma, deren …'],
    placeholder: 'Die Universität, deren Bibliothek modern ist, zieht viele Studenten an …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is correct: "Die Frau, ___ Sohn Arzt ist, arbeitet hier"?',
      options: ['deren', 'dessen', 'ihre'],
      answer: 0,
      explain: 'The antecedent "die Frau" is feminine, so "deren" is required.'
    },
    gap: {
      sentence: ['Der Mann, ', ' Auto gestohlen wurde, ist mein Nachbar.'],
      gaps: [ { answer: 'dessen', accepts: ['dessen'] } ],
      explain: 'The antecedent "der Mann" is masculine, so "dessen" is required.'
    },
    match: {
      q: 'Match each antecedent to its relative pronoun.',
      pairs: [
        { noun: 'der Mann', art: 'dessen' },
        { noun: 'das Kind', art: 'dessen' },
        { noun: 'die Frau', art: 'deren' },
        { noun: 'die Studenten', art: 'deren' }
      ]
    },
    builder: {
      target: 'Build: "The woman whose son is a doctor works here."',
      bank: ['Die', 'Frau', ',', 'deren', 'Sohn', 'Arzt', 'ist', ',', 'arbeitet', 'hier', '.'],
      answer: ['Die', 'Frau', ',', 'deren', 'Sohn', 'Arzt', 'ist', ',', 'arbeitet', 'hier', '.'],
      roles: { 'deren': 'r-genitiv2' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der Mann, sein Auto neu ist...',
      right: 'Der Mann, dessen Auto neu ist...',
      explain: '"sein" cannot be used inside a relative clause — "dessen" replaces it.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does dessen/deren replace inside a relative clause?', options: ['Possessive articles (sein/ihr)', 'The subject', 'The verb'], answer: 0,
      explain: 'dessen/deren replace sein/ihr inside a relative clause.' },
    { q: 'Which is used for a masculine antecedent?', options: ['dessen', 'deren', 'dessen or deren, either works'], answer: 0,
      explain: 'Masculine (der) and neuter (das) antecedents use "dessen".' },
    { q: 'Which is used for a feminine antecedent?', options: ['deren', 'dessen', 'either works'], answer: 0,
      explain: 'Feminine (die) and plural (die-Pl.) antecedents use "deren".' },
    { q: 'What decides dessen vs deren — the antecedent or the possessed noun?', options: ['The antecedent', 'The possessed noun', 'Neither — it\'s random'], answer: 0,
      explain: 'The gender/number of the ANTECEDENT (the noun before the comma) decides the choice, not the possessed noun.' },
    { q: 'Is "Der Mann, sein Auto neu ist" correct?', options: ['No — should be "dessen Auto"', 'Yes, perfectly correct', 'Only in spoken German'], answer: 0,
      explain: '"sein" cannot appear inside a relative clause — "dessen" must replace it.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-genitiv2', html: 'dessen and deren replace sein/ihr inside a relative clause to show possession elegantly.' },
    { c: 'r-genitiv2', html: 'The antecedent\'s gender/number decides the choice: der/das → dessen; die/die(Pl.) → deren.' },
    { c: 'r-genitiv2', html: 'dessen/deren are extremely common in formal and academic German — newspapers, reports, and presentations.' }
  ],
  revisionTips: [
    'Practise transforming "sein/ihr" possessive sentences into dessen/deren relative clauses.',
    'Always identify the antecedent first (the noun before the comma), then decide dessen or deren.',
    'Keep Präpositionalrelativsätze (worüber/woran) for later — this chapter is only about dessen/deren.'
  ]
};

window.CHAPTER = CHAPTER;
