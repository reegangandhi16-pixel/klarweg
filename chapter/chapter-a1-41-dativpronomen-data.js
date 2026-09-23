/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 41
   "Dativpronomen"  (dative pronouns)
   Vocabulary source: uploaded chapter-41 word list (2 words).
   Theme = classroom — helping, lending, explaining. Recycles Ch1–40.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-41-dativpronomen',
  phase: 'A1 · Phase 5',
  number: 41,
  title: 'Dativpronomen',
  titleEn: 'Dative Pronouns',
  description: 'The other half of the pronoun system. After a dative verb or for the receiver of an action, swap the noun for a dative pronoun: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen. Ich helfe meiner Mutter → Ich helfe ihr.',
  xp: 170,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 42, title: 'Welcher & Dieser', titleEn: 'which & this' , href: 'chapter-a1-42-welcher-dieser.html' },

  prevChapter: { number: 40, title: 'Verben mit Dativ', titleEn: 'Dative Verbs', href: 'chapter-a1-40-verben-dativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Lunch break in a café. Frau Sommer is the one asking now — for the soup, for water, for the bill — and der Kellner obliges every time: Ich bringe es Ihnen, ich bringe Ihnen das Wasser sofort. Every favour swaps a name for a dative pronoun.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear names become mir, dir, ihm, ihr, uns in real speech'
    ],
    scene: 'Im Café — Mittagspause, Berlin',
    femaleSpeakers: ['Frau Sommer'],
    dialogue: [
      { speaker: 'Kellner', tokens: [
        { w: 'Guten', role: 'r-adverb', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Greeting' },
        { w: 'Tag', role: 'r-object', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Greeting' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'bringe', role: 'r-verb', en: 'shall I bring', hi: 'लाऊं', pron: 'BRING-uh', type: 'Verb · bringen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'Ihnen', role: 'r-dativ', en: 'you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · formal dative', why: 'Ihnen = to you, formal (this chapter).', ex: 'Was bringe ich Ihnen?', exEn: 'What shall I bring you?' },
        { w: '?', plain: true }
      ], en: 'Good day! What shall I bring you?', hi: 'Namaskar! Aapke liye kya laaun?' },
      { speaker: 'Frau Sommer', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'will have', hi: 'लूंगी', pron: 'NAY-muh', type: 'Verb · nehmen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Suppe', role: 'r-akkusativ', en: 'soup', hi: 'सूप', pron: 'ZU-puh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Bringen', role: 'r-verb', en: 'bring', hi: 'लाइए', pron: 'BRING-en', type: 'Verb · bringen (imperative, Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative', why: 'mir = to me (this chapter). Two pronouns: accusative before dative — sie mir.', ex: 'Bringen Sie sie mir bitte.', exEn: 'Please bring it to me.' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '.', plain: true }
      ], en: 'I will have the soup. Please bring it to me.', hi: 'Main soup lungi. Kripya mujhe woh laaiye.' },
      { speaker: 'Kellner', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Suppe', role: 'r-subject', en: 'soup', hi: 'सूप', pron: 'ZU-puh', type: 'Noun · fem.' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'लगता है', pron: 'browkht', type: 'Verb · brauchen (sie)' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'zehn', role: 'r-time', en: 'ten', hi: 'दस', pron: 'tsayn', type: 'Number' },
        { w: 'Minuten', role: 'r-time', en: 'minutes', hi: 'मिनट', pron: 'mi-NOO-ten', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'okay', role: 'r-adverb', en: 'okay', hi: 'ठीक', pron: 'o-KAY', type: 'Reaction' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपके', pron: 'zee', type: 'Pronoun · formal acc.' },
        { w: '?', plain: true }
      ], en: 'Gladly! But the soup needs ten more minutes. Is that okay for you?', hi: 'Khushi se! Par soup ko das minute aur lagenge. Kya yeh aapke liye theek hai?' },
      { speaker: 'Frau Sommer', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'okay', role: 'r-adverb', en: 'okay', hi: 'ठीक', pron: 'o-KAY', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖN-en', type: 'Modal · können (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'erst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'airst', type: 'Adverb' },
        { w: 'Wasser', role: 'r-akkusativ', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: 'bringen', role: 'r-verb', en: 'bring', hi: 'लाना', pron: 'BRING-en', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Yes, that is okay. Can you bring me water first?', hi: 'Haan, theek hai. Kya aap pehle mujhe paani laa sakte hain?' },
      { speaker: 'Kellner', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'बिल्कुल', pron: 'na-TÜR-likh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाता हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)' },
        { w: 'Ihnen', role: 'r-dativ', en: 'you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · formal dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Wasser', role: 'r-akkusativ', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'तुरंत', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Of course! I bring you the water right away.', hi: 'Bilkul! Main aapko turant paani laata hoon.' },
      { speaker: 'Frau Sommer', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'freundlich', role: 'r-adjective', en: 'kind', hi: 'मिलनसार', pron: 'FROYNT-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Thanks! That is very kind.', hi: 'Dhanyavaad! Yeh bahut milansaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Just as accusative nouns become <span class="de r-akkusativ">ihn/sie/es</span>, dative nouns become <span class="de r-dativ">dative pronouns</span>: <span class="de r-dativ">mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</span>. Use them after a dative verb or for the receiver of an action \u2014 <span class="de">Ich helfe meiner Mutter → Ich helfe <span class="r-dativ">ihr</span>.</span> The tricky one: <span class="de r-subject">er</span> and <span class="de r-subject">es</span> both become <span class="de r-dativ">ihm</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DATIVE PRONOUNS (Dativpronomen): replacing a dative noun with mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen. ' +
    'The learner wrote sentences using dative pronouns below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Dative pronoun table: ich→mir, du→dir, er→ihm, sie(she)→ihr, es→ihm, wir→uns, ihr(you-pl)→euch, sie(they)→ihnen, Sie(formal)→Ihnen.\n' +
    '- The notorious overlaps: er AND es both → ihm; sie(she)→ihr but sie(they)→ihnen; "ihr" can be the subject "you all" OR the dative "(to) her" — context decides.\n' +
    '- Use a dative pronoun (a) after dative verbs (helfen, danken, gehören, gefallen, passen, antworten, …) and (b) for the receiver with give/show/explain/send verbs: "Ich gebe ihm das Buch", "Ich erkläre ihr die Aufgabe".\n' +
    '- Word order with two objects: dative before accusative when both are NOUNS ("Ich gebe dem Kind den Ball"); a pronoun comes first ("Ich gebe ihm den Ball"; "Ich gebe es ihm" when both are pronouns — accusative pronoun before dative pronoun).\n' +
    '- Feelings/states use the dative: "Mir ist kalt/warm", "Der Kopf tut mir weh", "Mir fehlt …".\n' +
    '- Do not confuse with the accusative pronouns (mich, dich, ihn, …): helfen/danken/gefallen take the DATIVE, not the accusative.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Pronoun check:</b> one sentence on whether the dative pronoun matched the person (esp. er/es → ihm).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your dative pronouns match the person (even er/es → ihm). On to Goethe Mini 5.',
    mid: 'Good. Re-read the pronoun table once (watch ihm and ihr), then continue.',
    low: 'Worth another pass — memorise mir/dir/ihm/ihr/uns/euch/ihnen, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'gebe', role: 'r-verb' },
    { w: 'ihm', role: 'r-dativ' }, { w: 'das', role: 'r-akkusativ' },
    { w: 'Buch', role: 'r-object' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how dative nouns become mir, dir, ihm, ihr …' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A pre-class scramble of lending and explaining — names turn into dative pronouns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the dative pronouns dir and Ihnen alongside the full set.' },
    { id: 'grammar',    label: 'Dative pronouns', tag: 'core',
      objective: 'Master mir/dir/ihm/ihr/uns/euch/ihnen/Ihnen and where they sit.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a helping-and-thanking text full of dative pronouns and tap any word.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which person each pronoun stands for, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say who helps whom and who gives what to whom, using pronouns.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite sentences with dative pronouns and write a short helping paragraph.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill noun → dative-pronoun replacement and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The dative pronouns with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Noun → dative-pronoun drills, gap-fill, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full dative pronoun table, two-object word order, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ich → mir, du → dir', text: 'Use the dative personal pronouns' },
    { de: 'er / es → ihm', text: 'Get the tricky overlap right' },
    { de: 'Ich helfe ihr.', text: 'Replace a dative noun with a pronoun' },
    { de: 'Ich gebe ihm das Buch.', text: 'Use the receiver pronoun' },
    { de: 'Mir ist kalt.', text: 'Express feelings with the dative' }
  ],

  // ---------- Vocabulary (2 words) ----------
  vocab: [
    { de: 'dir', pos: 'pronoun', en: 'to you (dative)', hi: 'तुम्हें', ex: 'Ich danke dir.', exEn: 'I thank you.' },
    { de: 'Ihnen', pos: 'pronoun', en: 'to you (formal dative)', hi: 'आपको', ex: 'Das Kleid steht Ihnen gut.', exEn: 'The dress suits you well.' }
  ],

  // ---------- Dative pronouns (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The dative pronoun table',
      body: [
        'Every subject pronoun has a dative form \u2014 the partner of the accusative set you learned in Chapter 32.'
      ],
      table: {
        head: ['Nominative', 'Accusative (Ch32)', 'Dative (here)'],
        rows: [
          ['<span class="de r-subject">ich / du</span>', '<span class="de r-akkusativ">mich / dich</span>', '<span class="de r-dativ">mir / dir</span>'],
          ['<span class="de r-subject">er / es</span>', '<span class="de r-akkusativ">ihn / es</span>', '<span class="de r-dativ">ihm / ihm</span>'],
          ['<span class="de r-subject">sie (she)</span>', '<span class="de r-akkusativ">sie</span>', '<span class="de r-dativ">ihr</span>'],
          ['<span class="de r-subject">wir / ihr</span>', '<span class="de r-akkusativ">uns / euch</span>', '<span class="de r-dativ">uns / euch</span>'],
          ['<span class="de r-subject">sie / Sie</span>', '<span class="de r-akkusativ">sie / Sie</span>', '<span class="de r-dativ">ihnen / Ihnen</span>']
        ]
      },
      note: 'Watch the overlaps: <b>er</b> and <b>es</b> both become <b>ihm</b>; <b>sie</b> (she) → <b>ihr</b> but <b>sie</b> (they) → <b>ihnen</b>. uns and euch are the same in both cases. Formal <b>Ihnen</b> is always capitalised.',
      hinglish: 'Har subject pronoun ka dative roop hai (accusative set ka partner — Chapter 32). Dhyaan: <b>er</b> aur <b>es</b> dono → <b>ihm</b>; <b>sie</b> (she) → <b>ihr</b>, par <b>sie</b> (they) → <b>ihnen</b>. uns/euch dono cases mein same. Formal <b>Ihnen</b> hamesha capital.'
    },
    {
      title: 'Replacing a dative noun',
      body: [
        'When the dative person is already clear, swap the noun for the matching pronoun \u2014 just like the accusative.'
      ],
      table: {
        head: ['Noun', 'Pronoun', 'Example'],
        rows: [
          ['meiner Mutter (fem.)', '<span class="de r-dativ">ihr</span>', '<span class="de">Ich helfe ihr.</span>'],
          ['meinem Bruder (masc.)', '<span class="de r-dativ">ihm</span>', '<span class="de">Ich danke ihm.</span>'],
          ['dem Kind (neut.)', '<span class="de r-dativ">ihm</span>', '<span class="de">Das Buch gehört ihm.</span>'],
          ['den Eltern (plural)', '<span class="de r-dativ">ihnen</span>', '<span class="de">Ich höre ihnen zu.</span>']
        ]
      },
      note: 'Match the gender/number of the noun: feminine → <b>ihr</b>, masculine/neuter → <b>ihm</b>, plural → <b>ihnen</b>. "Ich helfe meiner Mutter" becomes "Ich helfe <b>ihr</b>".',
      hinglish: 'Dative person saaf ho to noun ko pronoun se badlo: feminine → <b>ihr</b>, masculine/neuter → <b>ihm</b>, plural → <b>ihnen</b>. "Ich helfe meiner Mutter" → "Ich helfe <b>ihr</b>."'
    },
    {
      title: 'Two objects: give, show, explain',
      goldenRule: '<b>Person first, thing second</b> — dative before accusative.',
      formula: [
        'Ich gebe   <b>ihm</b> (dat.)   <b>das Buch</b> (akk.).',
        'Ich zeige  <b>euch</b>         <b>die Stadt</b>.'
      ],
      memoryTrick: 'Insaan pehle, cheez baad mein. English mein bhi wahi: "give <b>him</b> the book".',
      body: [
        'Verbs like <span class="de r-verb">geben, zeigen, erklären, schicken</span> have two objects: a <span class="de r-dativ">dative</span> receiver (a person) and an <span class="de r-akkusativ">accusative</span> thing.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich gebe <span class="r-dativ">ihm</span> <span class="r-akkusativ">das Buch</span>.</span>', 'I give him the book.'],
          ['<span class="de">Ich erkläre <span class="r-dativ">dir</span> <span class="r-akkusativ">die Aufgabe</span>.</span>', 'I explain the task to you.'],
          ['<span class="de">Ich zeige <span class="r-dativ">euch</span> <span class="r-akkusativ">die Stadt</span>.</span>', 'I show you the city.'],
          ['<span class="de">Ich schicke <span class="r-dativ">ihr</span> <span class="r-akkusativ">eine Nachricht</span>.</span>', 'I send her a message.']
        ]
      },
      note: 'Order: the <b>person (dative)</b> comes before the <b>thing (accusative)</b> \u2014 "Ich gebe <b>ihm das Buch</b>". The receiver is dative even though English has no marker: "give <em>him</em> the book".',
      hinglish: 'geben/zeigen/erklären/schicken ke do object: <b>dative</b> (person) + <b>accusative</b> (cheez). Order: person (dative) pehle, cheez (accusative) baad: "Ich gebe <b>ihm das Buch</b>." Lene wala hamesha dative.'
    },
    {
      title: 'Feelings & fixed dative phrases',
      body: [
        'A set of everyday phrases puts the person in the dative \u2014 often at the very front.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Mir ist kalt / warm.</span>', 'I\u2019m cold / warm.'],
          ['<span class="de">Wie geht es dir?</span>', 'How are you?'],
          ['<span class="de">Der Kopf tut mir weh.</span>', 'My head hurts.'],
          ['<span class="de">Das gefällt mir / schmeckt mir.</span>', 'I like it / it tastes good to me.']
        ]
      },
      note: 'These have no "I" as subject \u2014 the dative carries the person: <b>Mir</b> ist kalt, <b>Wie geht es dir?</b>, <b>Der Kopf tut mir weh.</b> Learn them as whole phrases.',
      hinglish: 'In phrases mein "I" subject nahi hota \u2014 dative person ko leta hai: <b>Mir</b> ist kalt (mujhe thand hai), <b>Wie geht es dir?</b> (kaise ho?), <b>Der Kopf tut mir weh.</b> Inhe poore phrase ki tarah yaad karo.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative-pronoun traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich helfe sie. (meaning "her")', right: 'Ich helfe ihr.', why: 'helfen takes the dative: "her" = ihr, not sie.' },
        { wrong: 'Das Buch gehört er.', right: 'Das Buch gehört ihm.', why: 'er → ihm in the dative.' },
        { wrong: 'Ich gebe das Buch ihm.', right: 'Ich gebe ihm das Buch.', why: 'The dative person comes before the accusative thing.' },
        { wrong: 'Ich ist kalt.', right: 'Mir ist kalt.', why: 'The feeling phrase uses the dative: Mir, not Ich.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>helfen</b> Dativ leta hai, isliye "her" ke liye <b>ihr</b> aayega, <b>sie</b> nahi. <b>er</b> ka Dativ <b>ihm</b> hai: <b>gehört ihm</b>. Insaan (Dativ) cheez se pehle aata hai: <b>Ich gebe ihm das Buch</b>. Aur feelings wale phrase Dativ se banate hain: <b>Mir ist kalt</b>, na ki "Ich ist kalt".'
    }
  ],

  // ---------- Reading passage (helping & thanking, clickable) ----------
  reading: {
    title: 'Vor dem Unterricht',
    titleEn: 'Before class',
    tokens: [
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'fehlt', role: 'r-verb', en: 'is missing', hi: 'की कमी है', pron: 'faylt', type: 'Verb · fehlen (+ dative)', why: 'fehlen + dative (recycled — Verben mit Dativ).', ex: 'Rohan fehlt ein Stift.', exEn: 'Rohan is missing a pen.' },
      { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Stift', role: 'r-subject', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc.', why: 'der Stift (recycled).', ex: 'Ihm fehlt ein Stift.', exEn: 'He\u2019s missing a pen.' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करती है', pron: 'hilft', type: 'Verb · helfen (+ dative)', why: 'helfen + dative (recycled — Verben mit Dativ).', ex: 'Anna hilft ihm.', exEn: 'Anna helps him.' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसकी', pron: 'eem', type: 'Pronoun · dative', why: 'er → ihm in the dative (this chapter).', ex: 'Sie hilft ihm.', exEn: 'She helps him.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und gibt ihm einen Stift.', exEn: '…, and gives him a pen.' },
      { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देती है', pron: 'gipt', type: 'Verb · geben (sie)', why: 'geben + dative receiver + accusative (recycled — Dativ Einführung).', ex: 'Sie gibt ihm einen Stift.', exEn: 'She gives him a pen.' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसे', pron: 'eem', type: 'Pronoun · dative', why: 'dative receiver (this chapter).', ex: 'Sie gibt ihm …', exEn: 'She gives him …' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. acc. ein → einen (recycled — Akkusativ).', ex: 'einen Stift', exEn: 'a pen' },
      { w: 'Stift', role: 'r-object', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc.', why: 'der Stift (recycled).', ex: 'Sie gibt ihm einen Stift.', exEn: 'She gives him a pen.' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'dankt', role: 'r-verb', en: 'thanks', hi: 'धन्यवाद देता है', pron: 'dankt', type: 'Verb · danken (+ dative)', why: 'danken + dative (recycled — Verben mit Dativ).', ex: 'Rohan dankt ihr.', exEn: 'Rohan thanks her.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative', why: 'sie (she) → ihr in the dative (this chapter).', ex: 'Er dankt ihr.', exEn: 'He thanks her.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann erklärt er …', exEn: 'Then he explains …' },
      { w: 'erkl\u00e4rt', role: 'r-verb', en: 'explains', hi: 'समझाता है', pron: 'air-KLAYRT', type: 'Verb · erklären (er)', why: 'erklären + dative person + accusative thing; verb position 2 (this chapter).', ex: 'Er erklärt ihr die Aufgabe.', exEn: 'He explains the task to her.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun', why: 'er (recycled — Wer bist du?).', ex: 'Dann erklärt er …', exEn: 'Then he explains …' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative', why: 'dative receiver: ihr (this chapter).', ex: 'Er erklärt ihr …', exEn: 'He explains to her …' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Aufgabe', role: 'r-object', en: 'task', hi: 'कार्य', pron: 'OWF-gah-buh', type: 'Noun · fem.', why: 'die Aufgabe (recycled).', ex: 'die Aufgabe erklären', exEn: 'explain the task' },
      { w: '.', plain: true },
      { w: 'Frau', role: 'r-subject', en: 'Mrs', hi: 'श्रीमती', pron: 'frow', type: 'Title' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करती है', pron: 'hilft', type: 'Verb · helfen (+ dative)', why: 'helfen + dative (recycled — Verben mit Dativ).', ex: 'Frau Weber hilft ihnen.', exEn: 'Frau Weber helps them.' },
      { w: 'ihnen', role: 'r-dativ', en: 'them', hi: 'उनकी', pron: 'EE-nen', type: 'Pronoun · dative', why: 'sie (they) → ihnen in the dative (this chapter).', ex: 'Sie hilft ihnen.', exEn: 'She helps them.' },
      { w: 'allen', role: 'r-dativ', en: 'all', hi: 'सबकी', pron: 'A-len', type: 'Determiner · dative' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'gef\u00e4llt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'guh-FELT', type: 'Verb · gefallen (+ dative)', why: 'gefallen + dative (recycled — Verben mit Dativ).', ex: 'Das gefällt ihnen.', exEn: 'They like that.' },
      { w: 'ihnen', role: 'r-dativ', en: 'them', hi: 'उन्हें', pron: 'EE-nen', type: 'Pronoun · dative', why: 'sie (they) → ihnen (this chapter).', ex: 'Das gefällt ihnen.', exEn: 'They like it.' },
      { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: '!', plain: true }
    ],
    translation: 'Rohan is missing a pen. Anna helps him and gives him a pen. Rohan thanks her. Then he explains the task to her. Frau Weber helps them all. They like that very much!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_041_L001', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hat Ihnen die Suppe geschmeckt?', en: 'Did you enjoy the soup?' },
      { id: 'A1_041_L002', speaker: 'Frau Sommer', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, sehr gut. Können Sie mir bitte die Rechnung bringen?', en: 'Yes, very good. Can you please bring me the bill?' },
      { id: 'A1_041_L003', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Natürlich, ich bringe sie Ihnen sofort.', en: 'Of course, I will bring it to you right away.' },
      { id: 'A1_041_L004', speaker: 'Frau Sommer', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke. Und gehört der Schirm hier Ihnen?', en: 'Thank you. And does the umbrella here belong to you?' },
      { id: 'A1_041_L005', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, er gehört ihr, der Frau am Fenster.', en: 'No, it belongs to her, the woman by the window.' },
      { id: 'A1_041_L006', speaker: 'Frau Sommer', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann bringe ich ihn ihr. Wie geht es Ihnen heute?', en: 'Then I will take it to her. How are you today?' },
      { id: 'A1_041_L007', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mir geht es gut, danke!', en: 'I am fine, thank you!' }
    ],
    transcript: 'Hat Ihnen die Suppe geschmeckt? Ja, sehr gut. Können Sie mir bitte die Rechnung bringen? Natürlich, ich bringe sie Ihnen sofort. Danke. Und gehört der Schirm hier Ihnen? Nein, er gehört ihr, der Frau am Fenster. Dann bringe ich ihn ihr. Wie geht es Ihnen heute? Mir geht es gut, danke!',
    translation: 'Did you enjoy the soup? Yes, very good. Can you please bring me the bill? Of course, I will bring it to you right away. Thank you. And does the umbrella here belong to you? No, it belongs to her, the woman by the window. Then I will take it to her. How are you today? I am fine, thank you!',
    tokens: [
      { w: 'Hat' },
      { w: 'Ihnen' },
      { w: 'die' },
      { w: 'Suppe' },
      { w: 'geschmeckt' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'sehr' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Können' },
      { w: 'Sie' },
      { w: 'mir' },
      { w: 'bitte' },
      { w: 'die' },
      { w: 'Rechnung' },
      { w: 'bringen' },
      { w: '?', plain: true },
      { w: 'Natürlich' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bringe' },
      { w: 'sie' },
      { w: 'Ihnen' },
      { w: 'sofort' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'gehört' },
      { w: 'der' },
      { w: 'Schirm' },
      { w: 'hier' },
      { w: 'Ihnen' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'gehört' },
      { w: 'ihr' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Frau' },
      { w: 'am' },
      { w: 'Fenster' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'bringe' },
      { w: 'ich' },
      { w: 'ihn' },
      { w: 'ihr' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'Ihnen' },
      { w: 'heute' },
      { w: '?', plain: true },
      { w: 'Mir' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'gut' },
      { w: ',', plain: true },
      { w: 'danke' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was möchte Frau Sommer?', qEn: 'What does Ms Sommer want?', options: ['die Rechnung', 'die Suppe', 'einen Schirm', 'Wasser'], optionsEn: ['the bill', 'the soup', 'an umbrella', 'water'], answer: 0,
        explain: '"Können Sie mir bitte die Rechnung bringen?"' },
      { q: 'Wem gehört der Schirm?', qEn: 'Whom does the umbrella belong to?', options: ['Frau Sommer', 'dem Kellner', 'ihr (der Frau am Fenster)', 'niemandem'], optionsEn: ['Ms Sommer', 'the waiter', 'her (the woman by the window)', 'nobody'], answer: 2,
        explain: '"Nein, er gehört ihr, der Frau am Fenster." (sie → ihr).' },
      { q: 'Wie antwortet er auf "Wie geht es Ihnen?"', qEn: 'How does he answer "Wie geht es Ihnen?"', options: ['Mir geht es gut.', 'Uns geht es gut.', 'Dir geht es gut.', 'Ihm geht es gut.'], optionsEn: ['I am well.', 'We are well.', 'You are well.', 'He is well.'], answer: 0,
        explain: '"Mir geht es gut!" — the dative pronoun for "I".' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Dein Freund hat Probleme mit dem Laptop. Was sagst du?", taskEn: "Your friend has trouble with his laptop. What do you say?", de: "Ich helfe dir gern.", en: "I'll gladly help you." },
    { task: "Deine Chefin fragt: Können Sie mir das Buch geben?", taskEn: "Your boss asks: can you give me the book?", de: "Ja, ich gebe Ihnen das Buch.", en: "Yes, I'll give you the book." },
    { task: "Deine Freundin fragt: Gefällt euch das Zimmer?", taskEn: "Your friend asks: do you like the room?", de: "Ja, es gefällt uns sehr gut.", en: "Yes, we like it very much." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences using dative pronouns. Use a dative verb (helfen/danken/gehören/gefallen) with a pronoun, one give/explain sentence with two objects ("Ich gebe ihm …"), and one feeling phrase ("Mir ist kalt" / "Der Kopf tut mir weh"). Watch er/es → ihm and sie → ihr/ihnen.',
    starters: ['Ich helfe …', 'Das gehört …', 'Ich gebe … das Buch.', 'Mir ist …'],
    placeholder: 'Ich helfe ihr und sie dankt mir …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Replace: "Ich helfe meinem Bruder." → "Ich helfe ___."',
      options: ['ihn', 'ihm', 'ihr', 'es'],
      answer: 1,
      explain: 'meinem Bruder (masc., dative) → ihm.'
    },
    gap: {
      // er→ihm and the feeling phrase
      sentence: ['Das Buch gehört ', ', und mir ', ' kalt.'],
      gaps: [ { answer: 'ihm', accepts: ['ihm'] }, { answer: 'ist', accepts: ['ist'] } ],
      explain: 'gehören + dative (er → ihm); the feeling phrase "Mir ist kalt".'
    },
    match: {
      q: 'Match each subject pronoun to its dative form.',
      pairs: [
        { noun: 'ich', art: 'mir' },
        { noun: 'du', art: 'dir' },
        { noun: 'er', art: 'ihm' },
        { noun: 'sie (they)', art: 'ihnen' }
      ]
    },
    builder: {
      target: 'Build: "I give him the book."',
      bank: ['Ich', 'gebe', 'ihm', 'das', 'Buch'],
      answer: ['Ich', 'gebe', 'ihm', 'das', 'Buch'],
      roles: { 'Ich': 'r-subject', 'gebe': 'r-verb', 'ihm': 'r-dativ', 'das': 'r-akkusativ', 'Buch': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the dative of "ich"?', options: ['mich', 'mir', 'ich', 'mein'], answer: 1,
      explain: 'ich → mir.' },
    { q: 'Both "er" and "es" become which dative pronoun?', options: ['ihn', 'ihm', 'ihr', 'ihnen'], answer: 1,
      explain: 'er and es both → ihm.' },
    { q: 'Replace: "Ich danke meiner Lehrerin." → "Ich danke ___."', options: ['sie', 'ihr', 'ihm', 'ihnen'], answer: 1,
      explain: 'meiner Lehrerin (fem., dative) → ihr.' },
    { q: 'Which order is correct?', options: ['Ich gebe das Buch ihm.', 'Ich gebe ihm das Buch.', 'Ich gebe ihm es Buch.', 'Ich ihm gebe das Buch.'], answer: 1,
      explain: 'Dative person before accusative thing: "Ich gebe ihm das Buch."' },
    { q: 'How do you say "I\u2019m cold"?', options: ['Ich bin kalt.', 'Mir ist kalt.', 'Ich ist kalt.', 'Mich ist kalt.'], answer: 1,
      explain: 'The feeling phrase uses the dative: "Mir ist kalt."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'The set: <span class="de">mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</span>. The overlap: <span class="de">er</span> and <span class="de">es</span> both → <span class="de">ihm</span>.' },
    { c: 'r-dativ', html: 'Match the noun: feminine → <span class="de">ihr</span>, masc./neut. → <span class="de">ihm</span>, plural → <span class="de">ihnen</span> \u2014 <span class="de">Ich helfe ihr.</span>' },
    { c: 'r-dativ', html: 'Two objects: person (dative) before thing (accusative) \u2014 <span class="de">Ich gebe ihm das Buch.</span> Feelings: <span class="de">Mir ist kalt.</span>' }
  ],
  revisionTips: [
    'Drill the overlaps: er/es → ihm, sie(she) → ihr, sie(they) → ihnen.',
    'After helfen/danken/gehören/gefallen, reach for a dative pronoun, never the accusative.',
    'In give/explain sentences, say the person (dative) first, then the thing (accusative).'
  ]
};

window.CHAPTER = CHAPTER;
