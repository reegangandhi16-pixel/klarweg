/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 40
   "Verben mit Dativ"  (verbs that take a dative object)
   Vocabulary source: uploaded chapter-40 word list (62 words).
   Theme = clothes shopping / trying things on. Recycles Ch1–39.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-40-verben-dativ',
  phase: 'A1 · Phase 5',
  number: 40,
  title: 'Verben mit Dativ',
  titleEn: 'Dative Verbs',
  description: 'Some German verbs quietly demand the dative. helfen, danken, gefallen, gehören, passen, stehen, schmecken — the object is the person who likes, owns, or is helped. Das Kleid gefällt mir und es passt mir. Ask Wem?',
  xp: 180,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 41, title: 'Dativpronomen', titleEn: 'Dative Pronouns' , href: 'chapter-a1-41-dativpronomen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Kevin needs an outfit for a party and Nele comes along to judge every jacket and every pullover. Every verdict rides on a dative verb: Das gef\u00e4llt mir, das passt dir, der Pullover steht dir.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear gefällt mir / passt dir / steht dir in real speech'
    ],
    scene: 'Im Kleidergesch\u00e4ft \u2014 ein Outfit f\u00fcr die Party, Berlin',
    femaleSpeakers: ['Nele'],
    dialogue: [
      { speaker: 'Nele', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'gefällt', role: 'r-verb', en: 'does it please', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen (es)', why: 'gefallen + dative: "Wie gefällt es dir?" = How do you like it? (this chapter).', ex: 'Wie gefällt dir die Jacke?', exEn: 'How do you like the jacket?' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Jacke', role: 'r-subject', en: 'jacket', hi: 'जैकेट', pron: 'YA-kuh', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'How do you like this jacket?', hi: 'Tumhein yeh jacket kaisi lagti hai?' },
      { speaker: 'Kevin', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen (sie)' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'passt', role: 'r-verb', en: 'fits', hi: 'फ़िट होती है', pron: 'past', type: 'Verb · passen', why: 'passen + dative: to fit (this chapter).', ex: 'Sie passt mir nicht.', exEn: 'It does not fit me.' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'I like it very much! But it does not fit me.', hi: 'Mujhe yeh bahut pasand hai! Par yeh mujhe fit nahi hoti.' },
      { speaker: 'Nele', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'eng', role: 'r-adjective', en: 'tight', hi: 'तंग', pron: 'eng', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Really? Is it too tight?', hi: 'Sach mein? Kya yeh bahut tang hai?' },
      { speaker: 'Kevin', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'viel', role: 'r-adverb', en: 'far', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'eng', role: 'r-adjective', en: 'tight', hi: 'तंग', pron: 'eng', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Hilfst', role: 'r-verb', en: 'can you help', hi: 'मदद करोगी', pron: 'hilfst', type: 'Verb · helfen (du)', why: 'helfen + dative: to help someone (this chapter).', ex: 'Hilfst du mir?', exEn: 'Can you help me?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'Yes, far too tight. Can you help me?', hi: 'Haan, bahut zyada tang. Kya tum meri madad karogi?' },
      { speaker: 'Nele', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Probier', role: 'r-verb', en: 'try', hi: 'पहनकर देखो', pron: 'pro-BEER', type: 'Verb · anprobieren (imperative)', lexicalUnit: 'anprobieren', why: 'anprobieren = to try on (this chapter).', ex: 'Probier den Pullover an!', exEn: 'Try on the sweater!' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Pullover', role: 'r-akkusativ', en: 'sweater', hi: 'स्वेटर', pron: 'pu-LOH-ver', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anprobieren)', hi: 'पहनकर', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anprobieren' },
        { w: '!', plain: true }
      ], en: 'Yes, gladly! Try on the sweater!', hi: 'Haan, khushi se! Sweater pehen kar dekho!' },
      { speaker: 'Kevin', side: 'right', tokens: [
        { w: 'Okay', role: 'r-subject', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'sieht', role: 'r-verb', en: 'does it look', hi: 'दिखता है', pron: 'zeet', type: 'Verb · aussehen', lexicalUnit: 'aussehen', why: 'aussehen = to look (a certain way, this chapter).', ex: 'Wie sieht das aus?', exEn: 'How does that look?' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'aus', role: 'r-verb', en: '(prefix of aussehen)', hi: 'दिखना', pron: 'ows', type: 'Separable prefix · Satzende', lexicalUnit: 'aussehen' },
        { w: '?', plain: true }
      ], en: 'Okay. And how does that look?', hi: 'Theek hai. Aur yeh kaisa dikhta hai?' },
      { speaker: 'Nele', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Pullover', role: 'r-subject', en: 'sweater', hi: 'स्वेटर', pron: 'pu-LOH-ver', type: 'Noun · masc.' },
        { w: 'steht', role: 'r-verb', en: 'suits', hi: 'जँचता है', pron: 'shtayt', type: 'Verb · stehen', why: 'stehen + dative: to suit someone (this chapter).', ex: 'Der Pullover steht dir gut.', exEn: 'The sweater suits you well.' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम पर', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'The sweater suits you very well!', hi: 'Sweater tum par bahut achha jamta hai!' },
      { speaker: 'Kevin', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'passt', role: 'r-verb', en: 'fits', hi: 'फ़िट होता है', pron: 'past', type: 'Verb · passen' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Really? And it fits well.', hi: 'Sach mein? Aur yeh achha fit hota hai.' },
      { speaker: 'Nele', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'gehört', role: 'r-verb', en: 'belongs', hi: 'जाना चाहिए', pron: 'ge-HÖRT', type: 'Verb · gehören', why: 'gehören + dative: this pattern is recycled (Ch10 gehören belong-to).', ex: 'Der gehört dir!', exEn: 'It belongs to you!' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारा', pron: 'deer', type: 'Pronoun · dative' },
        { w: '!', plain: true }
      ], en: 'Yes! That belongs to you!', hi: 'Haan! Yeh tumhaara honi chahiye!' },
      { speaker: 'Kevin', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'खरीदता हूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'इसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Thanks! I will buy it.', hi: 'Dhanyavaad! Main ise khareedta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A handful of everyday verbs take their object in the <span class="de r-dativ">dative</span>, not the accusative. With <span class="de r-verb">gefallen, passen, stehen, schmecken</span> the dative person is the one who <em>likes / fits / suits / tastes</em> \u2014 <span class="de">Das Kleid gefällt <span class="r-dativ">mir</span></span> (literally "the dress pleases to-me"). With <span class="de r-verb">helfen, danken, gehören, antworten</span> the dative is the person helped, thanked, or owned-by. Ask <span class="de r-dativ">Wem?</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DATIVE VERBS (Verben mit Dativ): verbs whose object is in the dative \u2014 helfen, danken, gefallen, gehören, passen, stehen, schmecken, antworten, glauben, gratulieren, wehtun, fehlen. ' +
    'The learner wrote sentences using dative verbs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- These verbs take a DATIVE object (ask Wem?): helfen, danken, gehören, antworten, glauben, gratulieren, folgen, passen, schmecken, gefallen, stehen (= suit), wehtun, fehlen.\n' +
    '- With gefallen / schmecken / passen / stehen / gehören / wehtun / fehlen, the German subject is the THING and the person is dative: "Das Kleid gefällt mir", "Die Schuhe passen mir", "Das Essen schmeckt mir", "Der Mantel steht dir", "Das Buch gehört mir", "Der Arm tut mir weh", "Mir fehlt ein Stift". The verb agrees with the thing (singular thing → gefällt; plural → gefallen/passen).\n' +
    '- Dative articles: der→dem, die→der, das→dem, plural die→den (+n). Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.\n' +
    '- Do NOT use the accusative with these verbs: "Ich helfe dir" (not dich); "Ich danke dir" (not dich).\n' +
    '- helfen + infinitive sends the infinitive to the end ("Kannst du mir helfen?"). danken/gratulieren take für + accusative for the reason ("Ich danke dir für die Hilfe").\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Dative-verb check:</b> one sentence on whether the person was in the dative (mir/dir/dem …).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you put the person in the dative after helfen, gefallen, passen and friends. On to <span class="de">Dativpronomen</span>.',
    mid: 'Good. Re-read the dative-verb list and the "gefällt mir" pattern once, then continue.',
    low: 'Worth another pass — memorise the dative verbs and that the person is dative, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-article' }, { w: 'Kleid', role: 'r-subject' },
    { w: 'gefällt', role: 'r-verb' }, { w: 'mir', role: 'r-dativ' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See which everyday verbs put the person in the dative.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Shop for a party outfit with the gang — hear gefällt mir, passt dir, steht dir live.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the dative verbs and the clothing words around them.' },
    { id: 'grammar',    label: 'Dative verbs', tag: 'core',
      objective: 'Master helfen/danken/gehören and the gefallen/passen/stehen/schmecken pattern.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a clothes-shopping text full of dative verbs and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who likes what and what fits whom, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you like, what fits you, and whom you help.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences with dative verbs about clothes and helping.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill dative-verb objects and pronouns with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The dative verbs and the clothing words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Dative-verb drills, the gefällt-mir pattern, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The dative verb list, the thing-is-subject pattern (gefallen/passen/stehen), and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich helfe dir.', text: 'Use helfen, danken + dative' },
    { de: 'Das gefällt mir.', text: 'Say you like something' },
    { de: 'Es passt / steht mir.', text: 'Say it fits / suits you' },
    { de: 'Das gehört mir.', text: 'Say what belongs to you' },
    { de: 'Wem?', text: 'Ask "to whom?"' }
  ],

  // ---------- Vocabulary (62 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'danken', pos: 'verb', en: 'to thank', hi: 'धन्यवाद देना', ex: 'Ich danke dir.', exEn: 'I thank you.', conj: { praesens: 'dankt', praeteritum: 'dankte', perfekt: 'hat gedankt' } },
    { de: 'Hemd', art: 'das', gender: 'n', plural: 'Hemden', pos: 'noun', en: 'shirt', hi: 'कमीज़', ex: 'Das Hemd ist weiß.', exEn: 'The shirt is white.' },
    { de: 'Kleid', art: 'das', gender: 'n', plural: 'Kleider', pos: 'noun', en: 'dress', hi: 'पोशाक', ex: 'Das Kleid gefällt mir.', exEn: 'I like the dress.' },
    { de: 'T-Shirt', art: 'das', gender: 'n', plural: 'T-Shirts', pos: 'noun', en: 't-shirt', hi: 'टी-शर्ट', ex: 'Das T-Shirt ist blau.', exEn: 'The t-shirt is blue.' },
    { de: 'Pullover', art: 'der', gender: 'm', plural: 'Pullover', pos: 'noun', en: 'jumper, sweater', hi: 'स्वेटर', ex: 'Der Pullover passt mir.', exEn: 'The jumper fits me.' },
    { de: 'Schuh', art: 'der', gender: 'm', plural: 'Schuhe', pos: 'noun', en: 'shoe', hi: 'जूता', ex: 'Die Schuhe passen mir.', exEn: 'The shoes fit me.' },
    { de: 'Hose', art: 'die', gender: 'f', plural: 'Hosen', pos: 'noun', en: 'trousers', hi: 'पतलून', ex: 'Die Hose ist zu eng.', exEn: 'The trousers are too tight.' },
    { de: 'Jacke', art: 'die', gender: 'f', plural: 'Jacken', pos: 'noun', en: 'jacket', hi: 'जैकेट', ex: 'Die Jacke ist teuer.', exEn: 'The jacket is expensive.' },
    { de: 'Kleidung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'clothing', hi: 'कपड़े', ex: 'Die Kleidung ist im Schrank.', exEn: 'The clothing is in the wardrobe.' },
    { de: 'gefallen', pos: 'verb', en: 'to please, like', hi: 'पसंद आना', ex: 'Das Kleid gefällt mir.', exEn: 'I like the dress.', conj: { praesens: 'gefällt', praeteritum: 'gefiel', perfekt: 'hat gefallen' } },
    { de: 'gehören', pos: 'verb', en: 'to belong (to)', hi: 'का होना', ex: 'Das Buch gehört mir.', exEn: 'The book belongs to me.', conj: { praesens: 'gehört', praeteritum: 'gehörte', perfekt: 'hat gehört' } },
    { de: 'helfen', pos: 'verb', en: 'to help', hi: 'मदद करना', ex: 'Ich helfe dir.', exEn: 'I help you.', conj: { praesens: 'hilft', praeteritum: 'half', perfekt: 'hat geholfen' } },
    { de: 'passen', pos: 'verb', en: 'to fit', hi: 'फ़िट होना', ex: 'Die Schuhe passen mir.', exEn: 'The shoes fit me.', conj: { praesens: 'passt', praeteritum: 'passte', perfekt: 'hat gepasst' } },
    { de: 'tragen', pos: 'verb', en: 'to wear; to carry', hi: 'पहनना', ex: 'Ich trage ein Kleid.', exEn: 'I wear a dress.', conj: { praesens: 'trägt', praeteritum: 'trug', perfekt: 'hat getragen' } },
    // ===== Active Support =====
    { de: 'anprobieren', pos: 'verb', en: 'to try on', hi: 'पहनकर देखना', ex: 'Ich probiere das Kleid an.', exEn: 'I try on the dress.', conj: { praesens: 'probiert an', praeteritum: 'probierte an', perfekt: 'hat anprobiert' } },
    { de: 'anziehen', pos: 'verb', en: 'to put on', hi: 'पहनना', ex: 'Ich ziehe die Jacke an.', exEn: 'I put on the jacket.', conj: { praesens: 'zieht an', praeteritum: 'zog an', perfekt: 'hat angezogen' } },
    { de: 'aussehen', pos: 'verb', en: 'to look (appear)', hi: 'दिखना', ex: 'Du siehst gut aus.', exEn: 'You look good.', conj: { praesens: 'sieht aus', praeteritum: 'sah aus', perfekt: 'hat ausgesehen' } },
    { de: 'ausziehen', pos: 'verb', en: 'to take off', hi: 'उतारना', ex: 'Ich ziehe die Schuhe aus.', exEn: 'I take off the shoes.', conj: { praesens: 'zieht aus', praeteritum: 'zog aus', perfekt: 'hat ausgezogen' } },
    { de: 'bequem', pos: 'adjective', en: 'comfortable', hi: 'आरामदायक', ex: 'Die Schuhe sind bequem.', exEn: 'The shoes are comfortable.' },
    { de: 'Sweatshirt', art: 'das', gender: 'n', plural: 'Sweatshirts', pos: 'noun', en: 'sweatshirt', hi: 'स्वेटशर्ट', ex: 'Das Sweatshirt ist grau.', exEn: 'The sweatshirt is grey.' },
    { de: 'Anzug', art: 'der', gender: 'm', plural: 'Anzüge', pos: 'noun', en: 'suit', hi: 'सूट', ex: 'Der Anzug steht ihm gut.', exEn: 'The suit suits him well.' },
    { de: 'Handschuh', art: 'der', gender: 'm', plural: 'Handschuhe', pos: 'noun', en: 'glove', hi: 'दस्ताना', ex: 'Im Winter trage ich Handschuhe.', exEn: 'In winter I wear gloves.' },
    { de: 'Hut', art: 'der', gender: 'm', plural: 'Hüte', pos: 'noun', en: 'hat', hi: 'टोपी', ex: 'Der Hut ist schön.', exEn: 'The hat is nice.' },
    { de: 'Mantel', art: 'der', gender: 'm', plural: 'Mäntel', pos: 'noun', en: 'coat', hi: 'कोट', ex: 'Der Mantel ist warm.', exEn: 'The coat is warm.' },
    { de: 'Pulli', art: 'der', gender: 'm', plural: 'Pullis', pos: 'noun', en: 'pullover (informal)', hi: 'स्वेटर', ex: 'Der Pulli ist bequem.', exEn: 'The pullover is comfy.' },
    { de: 'Regenschirm', art: 'der', gender: 'm', plural: 'Regenschirme', pos: 'noun', en: 'umbrella', hi: 'छाता', ex: 'Ich nehme den Regenschirm mit.', exEn: 'I take the umbrella along.' },
    { de: 'Rock', art: 'der', gender: 'm', plural: 'Röcke', pos: 'noun', en: 'skirt', hi: 'स्कर्ट', ex: 'Der Rock ist kurz.', exEn: 'The skirt is short.' },
    { de: 'Schal', art: 'der', gender: 'm', plural: 'Schals', pos: 'noun', en: 'scarf', hi: 'दुपट्टा', ex: 'Der Schal ist rot.', exEn: 'The scarf is red.' },
    { de: 'Sportschuh', art: 'der', gender: 'm', plural: 'Sportschuhe', pos: 'noun', en: 'trainer, sports shoe', hi: 'स्पोर्ट्स जूता', ex: 'Die Sportschuhe sind bequem.', exEn: 'The trainers are comfy.' },
    { de: 'Stiefel', art: 'der', gender: 'm', plural: 'Stiefel', pos: 'noun', en: 'boot', hi: 'बूट', ex: 'Die Stiefel sind neu.', exEn: 'The boots are new.' },
    { de: 'Bluse', art: 'die', gender: 'f', plural: 'Blusen', pos: 'noun', en: 'blouse', hi: 'ब्लाउज़', ex: 'Die Bluse ist weiß.', exEn: 'The blouse is white.' },
    { de: 'Handtasche', art: 'die', gender: 'f', plural: 'Handtaschen', pos: 'noun', en: 'handbag', hi: 'हैंडबैग', ex: 'Die Handtasche ist braun.', exEn: 'The handbag is brown.' },
    { de: 'Hilfe', art: 'die', gender: 'f', plural: 'Hilfen', pos: 'noun', en: 'help', hi: 'मदद', ex: 'Danke für die Hilfe!', exEn: 'Thanks for the help!' },
    { de: 'Jeans', art: 'die', gender: 'f', plural: 'Jeans', pos: 'noun', en: 'jeans', hi: 'जींस', ex: 'Die Jeans passt mir.', exEn: 'The jeans fit me.' },
    { de: 'Krawatte', art: 'die', gender: 'f', plural: 'Krawatten', pos: 'noun', en: 'tie', hi: 'टाई', ex: 'Er trägt eine Krawatte.', exEn: 'He wears a tie.' },
    { de: 'Mütze', art: 'die', gender: 'f', plural: 'Mützen', pos: 'noun', en: 'cap, woolly hat', hi: 'टोपी', ex: 'Die Mütze ist warm.', exEn: 'The cap is warm.' },
    { de: 'Regenjacke', art: 'die', gender: 'f', plural: 'Regenjacken', pos: 'noun', en: 'rain jacket', hi: 'बरसाती जैकेट', ex: 'Die Regenjacke ist praktisch.', exEn: 'The rain jacket is practical.' },
    { de: 'Seife', art: 'die', gender: 'f', plural: 'Seifen', pos: 'noun', en: 'soap', hi: 'साबुन', ex: 'Die Seife ist im Bad.', exEn: 'The soap is in the bathroom.' },
    { de: 'Sonnenbrille', art: 'die', gender: 'f', plural: 'Sonnenbrillen', pos: 'noun', en: 'sunglasses', hi: 'धूप का चश्मा', ex: 'Ich brauche eine Sonnenbrille.', exEn: 'I need sunglasses.' },
    { de: 'Sonnencreme', art: 'die', gender: 'f', plural: 'Sonnencremes', pos: 'noun', en: 'sunscreen', hi: 'सनस्क्रीन', ex: 'Vergiss die Sonnencreme nicht!', exEn: 'Don\u2019t forget the sunscreen!' },
    { de: 'Tasche', art: 'die', gender: 'f', plural: 'Taschen', pos: 'noun', en: 'bag', hi: 'थैला', ex: 'Die Tasche ist schwer.', exEn: 'The bag is heavy.' },
    { de: 'Winterjacke', art: 'die', gender: 'f', plural: 'Winterjacken', pos: 'noun', en: 'winter jacket', hi: 'सर्दियों की जैकेट', ex: 'Die Winterjacke ist warm.', exEn: 'The winter jacket is warm.' },
    { de: 'eng', pos: 'adjective', en: 'tight', hi: 'तंग', ex: 'Die Hose ist zu eng.', exEn: 'The trousers are too tight.' },
    { de: 'fehlen', pos: 'verb', en: 'to be missing', hi: 'कमी होना', ex: 'Mir fehlt ein Schuh.', exEn: 'I\u2019m missing a shoe.', conj: { praesens: 'fehlt', praeteritum: 'fehlte', perfekt: 'hat gefehlt' } },
    { de: 'freuen (sich)', pos: 'verb', en: 'to look forward, be glad', hi: 'खुश होना', ex: 'Ich freue mich auf die Party.', exEn: 'I look forward to the party.', conj: { praesens: 'freut sich', praeteritum: 'freute sich', perfekt: 'hat sich gefreut' } },
    { de: 'ohne', pos: 'preposition', en: 'without', hi: 'के बिना', ex: 'Ich gehe ohne Jacke.', exEn: 'I go without a jacket.' },
    { de: 'packen', pos: 'verb', en: 'to pack', hi: 'पैक करना', ex: 'Ich packe die Tasche.', exEn: 'I pack the bag.', conj: { praesens: 'packt', praeteritum: 'packte', perfekt: 'hat gepackt' } },
    { de: 'passen (match)', pos: 'verb', en: 'to fit, match', hi: 'मेल खाना', ex: 'Der Schal passt zur Jacke.', exEn: 'The scarf matches the jacket.', conj: { praesens: 'passt', praeteritum: 'passte', perfekt: 'hat gepasst' } },
    { de: 'stehen (suit)', pos: 'verb', en: 'to suit (someone)', hi: 'जँचना', ex: 'Das Kleid steht dir.', exEn: 'The dress suits you.', conj: { praesens: 'steht', praeteritum: 'stand', perfekt: 'hat gestanden' } },
    { de: 'viel zu', pos: 'phrase', en: 'much too', hi: 'बहुत ज़्यादा', ex: 'Die Jacke ist viel zu teuer.', exEn: 'The jacket is much too expensive.' },
    { de: 'weit', pos: 'adjective', en: 'loose, wide', hi: 'ढीला', ex: 'Die Hose ist zu weit.', exEn: 'The trousers are too loose.' },
    // ===== Passive =====
    { de: 'Kofferpacken', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'packing (suitcases)', hi: 'सामान बाँधना', ex: 'Kofferpacken ist anstrengend.', exEn: 'Packing is exhausting.' },
    { de: 'Tuch', art: 'das', gender: 'n', plural: 'Tücher', pos: 'noun', en: 'shawl, cloth', hi: 'कपड़ा', ex: 'Das Tuch ist aus Seide.', exEn: 'The cloth is made of silk.' },
    { de: 'Zelt', art: 'das', gender: 'n', plural: 'Zelte', pos: 'noun', en: 'tent', hi: 'तंबू', ex: 'Wir schlafen im Zelt.', exEn: 'We sleep in the tent.' },
    { de: 'Badeanzug', art: 'der', gender: 'm', plural: 'Badeanzüge', pos: 'noun', en: 'swimsuit', hi: 'तैराकी पोशाक', ex: 'Der Badeanzug ist blau.', exEn: 'The swimsuit is blue.' },
    { de: 'Bikini', art: 'der', gender: 'm', plural: 'Bikinis', pos: 'noun', en: 'bikini', hi: 'बिकिनी', ex: 'Der Bikini ist neu.', exEn: 'The bikini is new.' },
    { de: 'Helm', art: 'der', gender: 'm', plural: 'Helme', pos: 'noun', en: 'helmet', hi: 'हेलमेट', ex: 'Der Helm ist wichtig.', exEn: 'The helmet is important.' },
    { de: 'Schlafsack', art: 'der', gender: 'm', plural: 'Schlafsäcke', pos: 'noun', en: 'sleeping bag', hi: 'स्लीपिंग बैग', ex: 'Der Schlafsack ist warm.', exEn: 'The sleeping bag is warm.' },
    { de: 'Badehose', art: 'die', gender: 'f', plural: 'Badehosen', pos: 'noun', en: 'swimming trunks', hi: 'तैराकी जाँघिया', ex: 'Die Badehose ist im Koffer.', exEn: 'The swimming trunks are in the suitcase.' },
    { de: 'Klamotten', art: 'die', gender: 'pl', plural: 'Klamotten', pos: 'noun', en: 'clothes (slang)', hi: 'कपड़े', ex: 'Meine Klamotten sind cool.', exEn: 'My clothes are cool.' },
    { de: 'Reisetasche', art: 'die', gender: 'f', plural: 'Reisetaschen', pos: 'noun', en: 'travel bag', hi: 'यात्रा बैग', ex: 'Die Reisetasche ist voll.', exEn: 'The travel bag is full.' },
    // ===== Reference / System =====
    { de: 'Gefallen', art: 'der', gender: 'm', plural: 'Gefallen', pos: 'noun', en: 'favour', hi: 'एहसान', ex: 'Tust du mir einen Gefallen?', exEn: 'Will you do me a favour?' }
  ],

  // ---------- Dative verbs (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Verbs that take a dative object',
      body: [
        'Most verbs take an accusative object. But a fixed group take the <span class="de r-dativ">dative</span> \u2014 the person is in the dative, and you ask <span class="de r-dativ">Wem?</span>'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-verb">helfen</span>', 'to help', '<span class="de">Ich helfe <span class="r-dativ">dir</span>.</span>'],
          ['<span class="de r-verb">danken</span>', 'to thank', '<span class="de">Ich danke <span class="r-dativ">dir</span>.</span>'],
          ['<span class="de r-verb">gehören</span>', 'to belong to', '<span class="de">Das Buch gehört <span class="r-dativ">mir</span>.</span>'],
          ['<span class="de r-verb">antworten</span>', 'to answer', '<span class="de">Ich antworte <span class="r-dativ">dem Lehrer</span>.</span>']
        ]
      },
      note: 'Learn this set: <b>helfen, danken, gehören, antworten, glauben, folgen, gratulieren</b>. The person is dative, NOT accusative: "Ich helfe <b>dir</b>" (not dich), "Ich danke <b>dir</b>" (not dich).',
      hinglish: 'Zyadatar verbs accusative lete hain, par ek group <b>dative</b> leta hai: <b>helfen, danken, gehören, antworten, glauben, folgen</b>. Person dative mein, accusative nahi: "Ich helfe <b>dir</b>" \u2014 "dich" nahi. Sawaal: <b>Wem?</b>'
    },
    {
      title: 'The "gefällt mir" pattern',
      goldenRule: 'The <b>thing</b> is the subject; the <b>person</b> is in the dative. So the verb agrees with the thing, not with you.',
      formula: [
        'Das Kleid  <b>gefällt</b>  mir.     (one thing → singular verb)',
        'Die Schuhe <b>gefallen</b> mir.     (plural thing → plural verb)'
      ],
      memoryTrick: 'Socho "X <b>mujhe</b> pasand aata hai" — Hindi bhi bilkul yahi karti hai. Cheez subject banti hai aur insaan ko "mujhe/tumhe" milta hai. Isliye yeh pattern tumhare liye pehle se aasaan hai.',
      recap: [
        'The thing is the subject and controls the verb ending.',
        'The person sits in the dative: <b>mir, dir, ihm, ihr</b>.',
        'Same pattern: gefallen, passen, schmecken, stehen, wehtun, fehlen.'
      ],
      body: [
        'With <span class="de r-verb">gefallen, passen, schmecken, stehen, gehören, wehtun, fehlen</span> something flips: the <strong>thing</strong> is the subject and the <strong>person</strong> is in the dative.'
      ],
      table: {
        head: ['German', 'Literally', 'Real meaning'],
        rows: [
          ['<span class="de">Das Kleid gefällt mir.</span>', 'the dress pleases to-me', 'I like the dress'],
          ['<span class="de">Die Schuhe passen mir.</span>', 'the shoes fit to-me', 'the shoes fit me'],
          ['<span class="de">Das Essen schmeckt mir.</span>', 'the food tastes to-me', 'I like the food'],
          ['<span class="de">Der Mantel steht dir.</span>', 'the coat stands to-you', 'the coat suits you']
        ]
      },
      note: 'The verb agrees with the THING, not the person: one dress → <b>gefällt</b>, but "Die Schuhe <b>gefallen</b> mir" (plural). Think "X is pleasing TO ME" and the dative makes sense.',
      hinglish: '<b>gefallen, passen, schmecken, stehen, gehören, wehtun, fehlen</b> mein ulta hota hai: <b>cheez</b> subject, <b>person</b> dative. Verb cheez se agree karta hai: ek Kleid → <b>gefällt</b>, par "Die Schuhe <b>gefallen</b> mir" (plural). Socho "X mujhe pasand aata hai".' },
    {
      title: 'wehtun, fehlen & "Mir ist kalt"',
      body: [
        'A few more dative patterns describe how you feel or what you lack.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Der Arm tut mir weh.</span>', 'My arm hurts.'],
          ['<span class="de">Mir tut alles weh.</span>', 'Everything hurts me.'],
          ['<span class="de">Mir fehlt ein Stift.</span>', 'I\u2019m missing a pen.'],
          ['<span class="de">Mir ist kalt / warm.</span>', 'I\u2019m cold / warm.']
        ]
      },
      note: '<b>wehtun</b> (to hurt) and <b>fehlen</b> (to be missing) use the dative person, and so does the feeling phrase <b>Mir ist kalt</b> (literally "to-me it-is cold"). The dative often starts the sentence: "Mir fehlt …".',
      hinglish: '<b>wehtun</b> (dard hona) aur <b>fehlen</b> (kami hona) dative person lete hain; aur feeling phrase <b>Mir ist kalt</b> bhi ("mujhe thand lag rahi hai"). Dative aksar sentence ke shuru mein: "Mir fehlt …".' },
    {
      title: 'danken für & helfen + infinitive',
      body: [
        'Two useful combinations with the dative verbs.'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['danken + für + accusative', '<span class="de">Ich danke dir für die Hilfe.</span>'],
          ['helfen + bei', '<span class="de">Ich helfe dir bei der Arbeit.</span>'],
          ['helfen + infinitive', '<span class="de">Kannst du mir helfen, das zu tragen?</span>'],
          ['gratulieren + zu', '<span class="de">Ich gratuliere dir zum Geburtstag.</span>']
        ]
      },
      note: 'The person stays dative; the reason uses <b>für</b> + accusative ("für die Hilfe") or <b>zu</b> + dative ("zum Geburtstag"). With a second verb, "Kannst du <b>mir</b> helfen?" keeps mir dative and the infinitive at the end.',
      hinglish: 'Person dative rehta hai; reason <b>für</b> + accusative ("für die Hilfe") ya <b>zu</b> + dative ("zum Geburtstag"). Doosre verb ke saath: "Kannst du <b>mir</b> helfen?" \u2014 mir dative, infinitive end mein.' },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative-verb traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich helfe dich.', right: 'Ich helfe dir.', why: 'helfen takes the dative: dir, not dich.' },
        { wrong: 'Ich danke dich.', right: 'Ich danke dir.', why: 'danken takes the dative: dir, not dich.' },
        { wrong: 'Ich mag das Kleid. (when meaning "it pleases me")', right: 'Das Kleid gefällt mir.', why: 'For "I like" an object/look, use gefallen + dative.' },
        { wrong: 'Die Schuhe passt mir.', right: 'Die Schuhe passen mir.', why: 'The verb agrees with the thing: plural Schuhe → passen.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>helfen</b> ke saath <b>dir</b> aata hai, <b>dich</b> nahi. <b>danken</b> ke saath bhi <b>dir</b>. "Mujhe pasand hai" kehne ke liye <b>gefallen</b> use hota hai: <b>Das Kleid gefällt mir</b>. Aur verb us cheez se agree karta hai, insaan se nahi: <b>Die Schuhe passen mir</b> — plural cheez, plural verb.' }
  ],

  // ---------- Reading passage (clothes shopping, clickable) ----------
  reading: {
    title: 'Im Kleidergesch\u00e4ft',
    titleEn: 'At the clothes shop',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'चाहिए', pron: 'browkht', type: 'Verb · brauchen (sie)', why: 'brauchen (recycled).', ex: 'Anna braucht ein Kleid.', exEn: 'Anna needs a dress.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Kleid', role: 'r-object', en: 'dress', hi: 'पोशाक', pron: 'klyt', type: 'Noun · neut.', why: 'das Kleid (this chapter).', ex: 'ein Kleid brauchen', exEn: 'need a dress' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'blaue', role: 'r-adjective', en: 'blue', hi: 'नीली', pron: 'BLOW-uh', type: 'Adjective', why: 'blau (recycled — Wechselpräpositionen).', ex: 'das blaue Kleid', exEn: 'the blue dress' },
      { w: 'Kleid', role: 'r-subject', en: 'dress', hi: 'पोशाक', pron: 'klyt', type: 'Noun · neut.' },
      { w: 'gef\u00e4llt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'guh-FELT', type: 'Verb · gefallen (+ dative)', why: 'gefallen takes the dative (this chapter).', ex: 'Das Kleid gefällt ihr.', exEn: 'She likes the dress.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative', why: 'sie → ihr in the dative (recycled — Dativ Einführung).', ex: 'Es gefällt ihr.', exEn: 'She likes it.' },
      { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'sie = she (recycled — Wer bist du?).', ex: 'Sie probiert es an.', exEn: 'She tries it on.' },
      { w: 'probiert', role: 'r-verb', en: 'tries', hi: 'पहनकर देखती है', pron: 'pro-BEERT', type: 'Verb · anprobieren (sie)', why: 'anprobieren (this chapter).', ex: 'Sie probiert es an.', exEn: 'She tries it on.' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.', why: 'das Kleid → es (recycled — Akkusativpronomen).', ex: 'Sie probiert es an.', exEn: 'She tries it on.' },
      { w: 'an', role: 'r-verb', en: '(try on)', hi: 'पहनकर', pron: 'an', type: 'Separable prefix', why: 'an from anprobieren (recycled — Trennbare Verben).', ex: '… an.', exEn: '… on.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'passt', role: 'r-verb', en: 'fits', hi: 'फ़िट होती है', pron: 'past', type: 'Verb · passen (+ dative)', why: 'passen takes the dative (this chapter).', ex: 'Es passt ihr.', exEn: 'It fits her.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und es steht ihr.', exEn: '…, and it suits her.' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'steht', role: 'r-verb', en: 'suits', hi: 'जँचती है', pron: 'shtayt', type: 'Verb · stehen (+ dative)', why: 'stehen = to suit (this chapter).', ex: 'Es steht ihr gut.', exEn: 'It suits her well.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उस पर', pron: 'eer', type: 'Pronoun · dative' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen (+ dative)', why: 'helfen takes the dative (this chapter).', ex: 'Rohan hilft ihr.', exEn: 'Rohan helps her.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसकी', pron: 'eer', type: 'Pronoun · dative' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'dankt', role: 'r-verb', en: 'thanks', hi: 'धन्यवाद देती है', pron: 'dankt', type: 'Verb · danken (+ dative)', why: 'danken takes the dative (this chapter).', ex: 'Sie dankt ihm.', exEn: 'She thanks him.' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसे', pron: 'eem', type: 'Pronoun · dative', why: 'er → ihm in the dative (recycled — Dativ Einführung).', ex: 'Sie dankt ihm.', exEn: 'She thanks him.' },
      { w: '.', plain: true },
      { w: 'Nur', role: 'r-subject', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur (recycled — Hobbies).', ex: 'Nur Max …', exEn: 'Only Max …' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen (recycled — Verben).', ex: 'Max sagt: Mir tun die Füße weh.', exEn: 'Max says: My feet hurt.' },
      { w: ':', plain: true },
      { w: '"Mir', role: 'r-dativ', en: '"my', hi: '"मेरे', pron: 'meer', type: 'Pronoun · dative', why: 'wehtun + dative: mir (this chapter).', ex: 'Mir tun die Füße weh.', exEn: 'My feet hurt.' },
      { w: 'tun', role: 'r-verb', en: 'hurt', hi: 'दर्द करते हैं', pron: 'toon', type: 'Verb · wehtun', why: 'wehtun + dative (this chapter).', ex: 'Mir tun die Füße weh.', exEn: 'My feet hurt.' },
      { w: 'die', role: 'r-subject', en: 'the (plural)', hi: 'ये', pron: 'dee', type: 'Article' },
      { w: 'F\u00fc\u00dfe', role: 'r-subject', en: 'feet', hi: 'पैर', pron: 'FÜ-suh', type: 'Noun · plural', why: 'der Fuß → die Füße (recycled — Präpositionen mit Dativ).', ex: 'Mir tun die Füße weh.', exEn: 'My feet hurt.' },
      { w: 'weh', role: 'r-verb', en: '(hurt)', hi: 'दर्द', pron: 'vay', type: 'Part of wehtun', why: 'weh from wehtun goes to the end (this chapter).', ex: '… weh."', exEn: '… hurt."' },
      { w: '"', plain: true }
    ],
    translation: 'Anna needs a dress. She likes the blue dress very much. She tries it on. It fits her and it suits her well. Rohan helps her and she thanks him. Only Max says: "My feet hurt."'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_040_L001', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kevin, wie findest du diesen Anzug für mein Interview?', en: 'Kevin, how do you like this suit for my interview?' },
      { id: 'A1_040_L002', speaker: 'Kevin', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Er gefällt mir sehr, aber die Farbe passt dir nicht so gut.', en: 'I like it a lot, but the color doesn\'t suit you so well.' },
      { id: 'A1_040_L003', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und dieses Kleid?', en: 'And this dress?' },
      { id: 'A1_040_L004', speaker: 'Kevin', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das steht dir super! Nimm das.', en: 'That suits you great! Take that.' },
      { id: 'A1_040_L005', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gehört die Tasche hier dir?', en: 'Does this bag here belong to you?' },
      { id: 'A1_040_L006', speaker: 'Kevin', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, die gehört meiner Schwester.', en: 'No, it belongs to my sister.' }
    ],
    transcript: 'Kevin, wie findest du diesen Anzug für mein Interview? Er gefällt mir sehr, aber die Farbe passt dir nicht so gut. Und dieses Kleid? Das steht dir super! Nimm das. Gehört die Tasche hier dir? Nein, die gehört meiner Schwester.',
    translation: 'Kevin, how do you like this suit for my interview? I like it a lot, but the color doesn\'t suit you so well. And this dress? That suits you great! Take that. Does this bag here belong to you? No, it belongs to my sister.',
    tokens: [
      { w: 'Kevin' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'findest' },
      { w: 'du' },
      { w: 'diesen' },
      { w: 'Anzug' },
      { w: 'für' },
      { w: 'mein' },
      { w: 'Interview' },
      { w: '?', plain: true },
      { w: 'Er' },
      { w: 'gefällt' },
      { w: 'mir' },
      { w: 'sehr' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Farbe' },
      { w: 'passt' },
      { w: 'dir' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'dieses' },
      { w: 'Kleid' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'steht' },
      { w: 'dir' },
      { w: 'super' },
      { w: '!', plain: true },
      { w: 'Nimm' },
      { w: 'das' },
      { w: '.', plain: true },
      { w: 'Gehört' },
      { w: 'die' },
      { w: 'Tasche' },
      { w: 'hier' },
      { w: 'dir' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'gehört' },
      { w: 'meiner' },
      { w: 'Schwester' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür kauft Nele ein?', qEn: 'What is Nele shopping for?', options: ['eine Party', 'ein Interview', 'einen Urlaub', 'eine Hochzeit'], optionsEn: ['a party', 'an interview', 'a holiday', 'a wedding'], answer: 1,
        explain: '"… für mein Interview."' },
      { q: 'Wessen Tasche ist das?', qEn: 'Whose bag is it?', options: ['Neles', 'Kevins', 'seiner Schwester', 'der Verkäuferin'], optionsEn: ['Nele\'s', 'Kevin\'s', 'his sister', 'the sales assistant'], answer: 2,
        explain: '"Die gehört meiner Schwester."' }
    ]
  },

  speaking: [
    { task: "Im Kleidergeschäft fragt die Verkäuferin: Gefällt Ihnen das Hemd?", taskEn: "In the clothes shop the assistant asks: do you like the shirt?", de: "Das Hemd gefällt mir, aber es passt mir nicht.", en: "I like the shirt, but it doesn't fit me." },
    { task: "Deine Freundin probiert ein Kleid an und fragt: Wie sieht es aus?", taskEn: "Your friend tries on a dress and asks: how does it look?", de: "Das Kleid gefällt mir gut. Es sieht bequem aus.", en: "I really like the dress. It looks comfortable." },
    { task: "Dein Freund fragt: Wem gehört die Jacke?", taskEn: "Your friend asks: whose jacket is this?", de: "Die Jacke gehört meiner Schwester. Ich danke ihr.", en: "The jacket belongs to my sister. I thank her." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences using dative verbs about clothes or helping. Use gefallen ("… gefällt mir"), passen or stehen ("… passt/steht mir"), gehören ("… gehört mir"), and helfen or danken with a dative pronoun. Remember the person is in the dative (mir, dir, ihm, ihr).',
    starters: ['Das … gefällt mir.', 'Die … passt/steht mir.', 'Das … gehört mir.', 'Ich helfe / danke …'],
    placeholder: 'Das blaue Kleid gefällt mir und es passt mir …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich helfe ___." (you, informal)',
      options: ['dich', 'dir', 'du', 'dein'],
      answer: 1,
      explain: 'helfen takes the dative: dir, not dich.'
    },
    gap: {
      // gefallen + dative pronoun, passen agreement
      sentence: ['Das Kleid gefällt ', ', aber die Schuhe ', ' mir nicht.'],
      gaps: [ { answer: 'mir', accepts: ['mir'] }, { answer: 'passen', accepts: ['passen'] } ],
      explain: 'gefallen + mir (dative); plural Schuhe → passen (agrees with the thing).'
    },
    match: {
      q: 'Match each dative verb to its meaning.',
      pairs: [
        { noun: 'helfen', art: 'to help' },
        { noun: 'gefallen', art: 'to please / like' },
        { noun: 'passen', art: 'to fit' },
        { noun: 'gehören', art: 'to belong to' }
      ]
    },
    builder: {
      target: 'Build: "The dress pleases me." (I like the dress)',
      bank: ['Das', 'Kleid', 'gefällt', 'mir'],
      answer: ['Das', 'Kleid', 'gefällt', 'mir'],
      roles: { 'Das': 'r-article', 'Kleid': 'r-subject', 'gefällt': 'r-verb', 'mir': 'r-dativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which case does "helfen" take?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 2,
      explain: 'helfen takes the dative: "Ich helfe dir."' },
    { q: 'Complete: "Das Buch gehört ___." (me)', options: ['mich', 'mir', 'ich', 'mein'], answer: 1,
      explain: 'gehören + dative: mir.' },
    { q: 'How do you say "I like the dress"?', options: ['Ich gefalle das Kleid.', 'Das Kleid gefällt mir.', 'Ich mag mir das Kleid.', 'Das Kleid gefällt mich.'], answer: 1,
      explain: 'gefallen: the thing is subject, the person is dative — "Das Kleid gefällt mir."' },
    { q: 'Complete: "Die Schuhe ___ mir." (fit)', options: ['passt', 'passen', 'passe', 'gepasst'], answer: 1,
      explain: 'The verb agrees with the thing: plural Schuhe → passen.' },
    { q: 'Which sentence is correct?', options: ['Ich danke dich.', 'Ich danke dir.', 'Ich danke du.', 'Ich danke dein.'], answer: 1,
      explain: 'danken takes the dative: dir.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Dative verbs: <span class="de">helfen, danken, gehören, antworten, glauben, folgen</span> \u2014 the person is dative (ask <span class="de">Wem?</span>).' },
    { c: 'r-dativ', html: 'The "gefällt mir" pattern: thing = subject, person = dative \u2014 <span class="de">Das Kleid gefällt mir</span>, <span class="de">Die Schuhe passen mir</span>, <span class="de">Es steht dir</span>.' },
    { c: 'r-dativ', html: 'Feelings & lacks: <span class="de">Der Arm tut mir weh</span>, <span class="de">Mir fehlt ein Stift</span>, <span class="de">Mir ist kalt</span>.' }
  ],
  revisionTips: [
    'Never use the accusative with helfen/danken: it\u2019s "Ich helfe dir / danke dir".',
    'For gefallen/passen/schmecken/stehen, make the verb agree with the THING, not the person.',
    'Reach for the dative whenever you mean "to me / for me": gefällt mir, gehört mir, tut mir weh.'
  ]
};

window.CHAPTER = CHAPTER;
