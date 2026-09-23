/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 32
   "Akkusativpronomen"  (accusative pronouns)
   Vocabulary source: uploaded chapter-32 word list (8 words).
   Theme = preparing a class event. Recycles Ch1–31.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-32-akkusativpronomen',
  phase: 'A1 · Phase 3',
  number: 32,
  title: 'Akkusativpronomen',
  titleEn: 'Accusative Pronouns',
  description: 'Stop repeating nouns. Instead of "Ich kenne Anna. Ich sehe Anna," German swaps the object for a pronoun: Ich kenne sie. Ich sehe sie. Learn the eight accusative pronouns — mich, dich, ihn, sie, es, uns, euch, Sie — and your German starts to flow.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 33, title: 'Sätze verbinden', titleEn: 'Connecting Sentences' , href: 'chapter-a1-33-saetze-verbinden.html' },

  prevChapter: { number: 31, title: 'Partizip II mit Präfix', titleEn: 'Participles with Prefixes', href: 'chapter-a1-31-partizip-praefix.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'The class is planning a little party. Who is bringing the cake, who is calling Ronja, who has the music? As Ronja and Fabian sort out the jobs, every answer swaps the noun for a pronoun — ihn, sie, es, uns — so nobody has to repeat themselves.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear nouns become mich, dich, ihn, sie, es in real speech'
    ],
    scene: 'Kursplanung \u2014 das Fest, Berlin',
    femaleSpeakers: ['Ronja'],
    dialogue: [
      { speaker: 'Ronja', tokens: [
        { w: 'Fabian', role: 'r-name', en: 'Fabian', hi: 'फ़ाबियान', pron: 'FAH-bee-an', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'meinen', role: 'r-akkusativ', en: 'my (masc. acc.)', hi: 'मेरी', pron: 'MY-nen', type: 'Possessive · acc.' },
        { w: 'Schlüssel', role: 'r-akkusativ', en: 'key', hi: 'चाबी', pron: 'SHLÜ-sel', type: 'Noun · masc.' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende', why: 'sehen → gesehen (recycled, Ch18).', ex: 'Ich habe ihn gesehen.', exEn: 'I saw it.' },
        { w: '?', plain: true }
      ], en: 'Fabian, have you seen my key?', hi: 'Fabian, kya tumne meri chaabi dekhi?' },
      { speaker: 'Fabian', side: 'right', tokens: [
        { w: 'Deinen', role: 'r-akkusativ', en: 'your (masc. acc.)', hi: 'तुम्हारी', pron: 'DY-nen', type: 'Possessive · acc.' },
        { w: 'Schlüssel', role: 'r-akkusativ', en: 'key', hi: 'चाबी', pron: 'SHLÜ-sel', type: 'Noun · masc.' },
        { w: '?', plain: true },
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.', why: 'der Schlüssel → ihn in the accusative (this chapter).', ex: 'Ich habe ihn nicht gesehen.', exEn: 'I have not seen it.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Your key? No, I have not seen it.', hi: 'Tumhaari chaabi? Nahi, maine use nahi dekha.' },
      { speaker: 'Ronja', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Suchst', role: 'r-verb', en: 'are you looking', hi: 'ढूँढते हो', pron: 'ZOOKHST', type: 'Verb · suchen (du)', why: 'suchen = to look for (this chapter).', ex: 'Suchst du mit?', exEn: 'Are you looking too?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'I need it now! Are you looking too?', hi: 'Mujhe abhi chahiye! Tum bhi dhoondh rahe ho?' },
      { speaker: 'Fabian', side: 'right', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'रखा', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time' },
        { w: 'gehabt', role: 'r-verb', en: 'had', hi: 'रखा', pron: 'ge-HAHPT', type: 'Partizip II · Satzende', why: 'haben → gehabt (recycled, Ch28).', ex: 'Ich habe ihn gehabt.', exEn: 'I had it.' },
        { w: '?', plain: true }
      ], en: 'Sure! Where did you have it yesterday?', hi: 'Bilkul! Kal tumne use kahaan rakha tha?' },
      { speaker: 'Ronja', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'खरीदा', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'Brot', role: 'r-akkusativ', en: 'bread', hi: 'ब्रेड', pron: 'broht', type: 'Noun · neut.' },
        { w: 'gekauft', role: 'r-verb', en: 'bought', hi: 'खरीदा', pron: 'ge-KOWFT', type: 'Partizip II · Satzende', why: 'kaufen → gekauft (recycled, Ch28).', ex: 'Ich habe Brot gekauft.', exEn: 'I bought bread.' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'ले गई', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zeitung', role: 'r-akkusativ', en: 'newspaper', hi: 'अख़बार', pron: 'TSY-tung', type: 'Noun · fem.' },
        { w: 'genommen', role: 'r-verb', en: 'taken', hi: 'ले गई', pron: 'ge-NO-men', type: 'Partizip II · Satzende', why: 'nehmen → genommen (recycled, Ch30).', ex: 'Ich habe sie genommen.', exEn: 'I took it.' },
        { w: '.', plain: true }
      ], en: 'Hmm. I bought bread. Then I took the newspaper.', hi: 'Hmm. Maine bread khareeda. Phir maine akhbaar liya.' },
      { speaker: 'Fabian', side: 'right', tokens: [
        { w: 'Die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zeitung', role: 'r-akkusativ', en: 'newspaper', hi: 'अख़बार', pron: 'TSY-tung', type: 'Noun · fem.' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehe', role: 'r-verb', en: 'see', hi: 'देखता हूँ', pron: 'ZAY-uh', type: 'Verb · sehen (ich)' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.', why: 'die Tasche → sie in the accusative; the form does not change (this chapter).', ex: 'Ich sehe sie.', exEn: 'I see it.' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '!', plain: true }
      ], en: 'The newspaper? I can see it here!', hi: 'Akhbaar? Main use yahaan dekhta hoon!' },
      { speaker: 'Ronja', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Sieh', role: 'r-verb', en: 'look at', hi: 'देखो', pron: 'zee', type: 'Verb · sehen (imperative)', lexicalUnit: 'ansehen', why: 'sehen → Sieh! in the command form (recycled, Ch18).', ex: 'Sieh sie an!', exEn: 'Look at it!' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'bitte','role': 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'an', role: 'r-verb', en: '(prefix of ansehen)', hi: 'देखना', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'ansehen' },
        { w: '!', plain: true }
      ], en: 'Oh! Please look at it!', hi: 'Oh! Kripya use dekho!' },
      { speaker: 'Fabian', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'er', role: 'r-subject', en: 'it (masc.)', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'पा लिया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'gefunden', role: 'r-verb', en: 'found', hi: 'पा लिया', pron: 'ge-FUN-den', type: 'Partizip II · Satzende', why: 'finden → gefunden (this chapter).', ex: 'Ich habe ihn gefunden.', exEn: 'I found it.' },
        { w: '!', plain: true }
      ], en: 'Yes, here it is! I found it!', hi: 'Haan, yeh yahaan hai! Mujhe mil gayi!' },
      { speaker: 'Ronja', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true }
      ], en: 'Really? You are great! Thanks!', hi: 'Sach mein? Tum badhiya ho! Dhanyavaad!' },
      { speaker: 'Fabian', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'nimm', role: 'r-verb', en: 'take', hi: 'ले जाओ', pron: 'nim', type: 'Verb · nehmen (imperative)', lexicalUnit: 'mitnehmen' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitnehmen' },
        { w: '!', plain: true }
      ], en: 'Gladly! But take it along today!', hi: 'Khushi se! Par aaj use saath le jao!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Once a noun is clear, German replaces it with a <strong>pronoun</strong> so you don\u2019t repeat yourself. The accusative (direct-object) pronouns are: <span class="de r-akkusativ">mich, dich, ihn, sie, es, uns, euch, Sie</span>. <span class="de">Kennst du Anna? \u2014 Ja, ich kenne <u>sie</u>.</span> The pronoun copies the gender of the noun it replaces: der Kuchen → <span class="de r-akkusativ">ihn</span>, die Musik → <span class="de r-akkusativ">sie</span>, das Buch → <span class="de r-akkusativ">es</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is ACCUSATIVE PRONOUNS (Akkusativpronomen): replacing a direct-object noun with mich/dich/ihn/sie/es/uns/euch/Sie. ' +
    'The learner wrote sentences using accusative pronouns below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Accusative pronoun table: ich→mich, du→dich, er→ihn, sie(she)→sie, es→es, wir→uns, ihr→euch, sie(they)→sie, Sie(formal)→Sie.\n' +
    '- A pronoun replacing a THING copies that noun\u2019s gender: der Kuchen→ihn, die Musik→sie, das Buch→es, plural (die Gäste)→sie.\n' +
    '- Only the masculine changes form from nominative: er→ihn. she/it/they look the same as nominative (sie/es/sie); but the FUNCTION is object.\n' +
    '- Word order: the pronoun normally comes right after the conjugated verb. "Ich kenne ihn." / "Ich rufe ihn an." (separable prefix still goes to the end).\n' +
    '- "wen" = whom (the accusative question word): "Wen lädst du ein?".\n' +
    '- Do not confuse with dative (mir/dir/ihm) — at A1 here we only use the accusative set.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Pronoun check:</b> one sentence on whether the pronoun matched the noun\u2019s gender (ihn/sie/es).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your pronouns match the noun\u2019s gender. On to <span class="de">Sätze verbinden</span>.',
    mid: 'Good. Re-read the pronoun table once (er → ihn is the tricky one), then continue.',
    low: 'Worth another pass — memorise mich/dich/ihn/sie/es/uns/euch, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'kenne', role: 'r-verb' },
    { w: 'ihn', role: 'r-akkusativ' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how pronouns replace objects so you don\u2019t repeat nouns.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan a class party — every job-swap turns a noun into ihn, sie, es, uns or euch.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the eight accusative pronouns plus wen (whom) and das Pronomen.' },
    { id: 'grammar',    label: 'Accusative pronouns', tag: 'core',
      objective: 'Master mich/dich/ihn/sie/es/uns/euch/Sie and matching the pronoun to the noun.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a text full of pronoun replacements and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which noun each pronoun stands for, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Answer questions with a pronoun instead of repeating the noun.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite sentences using pronouns and write a short pronoun-rich paragraph.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill noun → pronoun replacement and error correction with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The accusative pronouns and wen with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Noun → pronoun transformation drills, gap-fill, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full accusative pronoun table, gender matching, pronoun position, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ich → mich, du → dich', text: 'Use the personal object pronouns' },
    { de: 'er → ihn', text: 'Get the tricky masculine right' },
    { de: 'der Kuchen → ihn', text: 'Match the pronoun to the noun' },
    { de: 'Ich kenne sie.', text: 'Answer without repeating the noun' },
    { de: 'Wen lädst du ein?', text: 'Ask "whom?" with wen' }
  ],

  // ---------- Vocabulary (8 words) ----------
  vocab: [
    { de: 'mich', pos: 'pronoun', en: 'me (accusative)', hi: 'मुझे', ex: 'Hörst du mich?', exEn: 'Do you hear me?' },
    { de: 'dich', pos: 'pronoun', en: 'you (accusative)', hi: 'तुम्हें', ex: 'Ich sehe dich.', exEn: 'I see you.' },
    { de: 'ihn', pos: 'pronoun', en: 'him; it (masc.)', hi: 'उसे, इसे', ex: 'Ich kenne ihn.', exEn: 'I know him.' },
    { de: 'sie', pos: 'pronoun', en: 'her, them; it (fem.)', hi: 'उसे, उन्हें', ex: 'Ich rufe sie an.', exEn: 'I call her.' },
    { de: 'uns', pos: 'pronoun', en: 'us (accusative)', hi: 'हमें', ex: 'Frau Weber hört uns.', exEn: 'Frau Weber hears us.' },
    { de: 'euch', pos: 'pronoun', en: 'you all (accusative)', hi: 'तुम सबको', ex: 'Ich vergesse euch nicht.', exEn: 'I won\u2019t forget you.' },
    { de: 'wen', pos: 'pronoun', en: 'whom', hi: 'किसे', ex: 'Wen lädst du ein?', exEn: 'Whom do you invite?' },
    { de: 'Pronomen', art: 'das', gender: 'n', plural: 'Pronomen', pos: 'noun', en: 'pronoun', hi: 'सर्वनाम', ex: '"Ihn" ist ein Pronomen.', exEn: '"Ihn" is a pronoun.' }
  ],

  // ---------- Accusative pronouns (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The accusative pronoun table',
      goldenRule: 'Only one form really surprises you: <b>er → ihn</b>. The rest are near-guesses or unchanged.',
      memoryTrick: 'Sirf <b>er → ihn</b> yaad karo. mich/dich/uns/euch already English jaise lagte hain, aur sie/es/Sie badalte hi nahi.',
      body: [
        'Every subject pronoun has a matching object (accusative) form. Most look similar \u2014 only <span class="de r-subject">er</span> changes noticeably, to <span class="de r-akkusativ">ihn</span>.'
      ],
      table: {
        head: ['Nominative (subject)', 'Accusative (object)'],
        rows: [
          ['<span class="de r-subject">ich</span>', '<span class="de r-akkusativ">mich</span> (me)'],
          ['<span class="de r-subject">du</span>', '<span class="de r-akkusativ">dich</span> (you)'],
          ['<span class="de r-subject">er / sie / es</span>', '<span class="de r-akkusativ">ihn / sie / es</span>'],
          ['<span class="de r-subject">wir / ihr</span>', '<span class="de r-akkusativ">uns / euch</span>'],
          ['<span class="de r-subject">sie / Sie</span>', '<span class="de r-akkusativ">sie / Sie</span>']
        ]
      },
      note: 'The big one to remember: <b>er → ihn</b>. The rest are either obvious (ich→mich, du→dich, wir→uns, ihr→euch) or unchanged (sie→sie, es→es, Sie→Sie).',
      hinglish: 'Har subject pronoun ka ek object (accusative) roop hai. Sabse zaroori: <b>er → ihn</b>. Baaki aasaan: ich→mich, du→dich, wir→uns, ihr→euch; aur sie→sie, es→es, Sie→Sie nahi badalte.'
    },
    {
      title: 'A pronoun copies the noun\u2019s gender',
      goldenRule: 'The pronoun takes its gender from the <b>German noun</b>, not from English "it".',
      formula: [
        'der Kuchen  →  <b>ihn</b>',
        'die Musik   →  <b>sie</b>',
        'das Buch    →  <b>es</b>',
        'die Gäste   →  <b>sie</b>'
      ],
      memoryTrick: 'English mein har cheez "it" hai — German mein cheez ka bhi gender hota hai. <b>der Kuchen</b> insaan nahi, phir bhi <b>ihn</b>.',
      recap: [
        'masculine → <b>ihn</b> · feminine → <b>sie</b> · neuter → <b>es</b> · plural → <b>sie</b>.',
        'Never translate "it" as <b>es</b> by default — check the article first.'
      ],
      body: [
        'When a pronoun replaces a <strong>thing</strong>, pick the form that matches the noun\u2019s gender \u2014 not the English "it".'
      ],
      table: {
        head: ['Noun (accusative)', 'Pronoun', 'Example'],
        rows: [
          ['<span class="de">den Kuchen</span> (masc.)', '<span class="de r-akkusativ">ihn</span>', '<span class="de">Ich bringe ihn.</span>'],
          ['<span class="de">die Musik</span> (fem.)', '<span class="de r-akkusativ">sie</span>', '<span class="de">Ich mache sie.</span>'],
          ['<span class="de">das Buch</span> (neut.)', '<span class="de r-akkusativ">es</span>', '<span class="de">Ich habe es.</span>'],
          ['<span class="de">die Gäste</span> (plural)', '<span class="de r-akkusativ">sie</span>', '<span class="de">Ich lade sie ein.</span>']
        ]
      },
      note: 'In English everything non-human is "it". In German you must match: masculine → <b>ihn</b>, feminine → <b>sie</b>, neuter → <b>es</b>, plural → <b>sie</b>. So "der Kuchen" becomes <b>ihn</b>, never "es".',
      hinglish: 'English mein har cheez "it" hai. German mein gender match karo: masculine → <b>ihn</b>, feminine → <b>sie</b>, neuter → <b>es</b>, plural → <b>sie</b>. "der Kuchen" → <b>ihn</b>, "es" nahi.'
    },
    {
      title: 'Where the pronoun goes',
      body: [
        'The accusative pronoun usually sits right after the conjugated verb. With a separable verb, the prefix still flies to the end.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich kenne ihn.</span>', 'I know him.'],
          ['<span class="de">Ich rufe ihn an.</span>', 'I call him. (an at the end)'],
          ['<span class="de">Hörst du mich?</span>', 'Do you hear me?'],
          ['<span class="de">Wen lädst du ein?</span>', 'Whom do you invite?']
        ]
      },
      note: 'Pronoun right after the verb: "Ich kenne <b>ihn</b>." With separable verbs the prefix still ends the sentence: "Ich rufe <b>ihn</b> an." Ask "whom?" with <b>wen</b> \u2014 the accusative of wer.',
      hinglish: 'Pronoun verb ke turant baad: "Ich kenne <b>ihn</b>." Separable verb ke saath prefix phir bhi end mein: "Ich rufe <b>ihn</b> an." "Kise?" = <b>wen</b> (wer ka accusative).'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four pronoun traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich kenne er.', right: 'Ich kenne ihn.', why: 'er is the subject form; the object form is ihn.' },
        { wrong: 'Ich habe ihn. (for "das Buch")', right: 'Ich habe es.', why: 'das Buch is neuter → es, not ihn.' },
        { wrong: 'Ich sehe du.', right: 'Ich sehe dich.', why: 'du → dich in the accusative.' },
        { wrong: 'Ich rufe an ihn.', right: 'Ich rufe ihn an.', why: 'The separable prefix goes to the end, after the pronoun.' }
      ],
      hinglish: 'Char galtiyan common hain. Object ke liye <b>ihn</b> aata hai, <b>er</b> nahi: <b>Ich kenne ihn</b>. <b>das Buch</b> neuter hai, isliye uske liye <b>es</b> aayega, <b>ihn</b> nahi. <b>du</b> ka object form <b>dich</b> hai: <b>Ich sehe dich</b>. Aur separable prefix sentence ke end mein jaata hai: <b>Ich rufe ihn an</b>.'
    }
  ],

  // ---------- Reading passage (pronouns in context, clickable) ----------
  reading: {
    title: 'Das Fest',
    titleEn: 'The party',
    tokens: [
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'machen', role: 'r-verb', en: 'are having', hi: 'कर रहे हैं', pron: 'MA-khen', type: 'Verb · machen', why: 'machen (recycled — Verben).', ex: 'Wir machen ein Fest.', exEn: 'We are having a party.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Fest', role: 'r-object', en: 'party', hi: 'उत्सव', pron: 'fest', type: 'Noun · neut.', why: 'das Fest (recycled — Hobbies).', ex: 'ein Fest machen', exEn: 'have a party' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'bringt', role: 'r-verb', en: 'brings', hi: 'लाती है', pron: 'bringt', type: 'Verb · bringen (sie)', why: 'bringen (recycled).', ex: 'Anna bringt den Kuchen.', exEn: 'Anna brings the cake.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.', why: 'masc. acc. der → den (recycled — Akkusativ).', ex: 'den Kuchen', exEn: 'the cake' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen (recycled — Essen & Trinken).', ex: 'den Kuchen', exEn: 'the cake' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'sie = she (recycled — Wer bist du?).', ex: 'Sie bringt ihn.', exEn: 'She brings it.' },
      { w: 'bringt', role: 'r-verb', en: 'brings', hi: 'लाती है', pron: 'bringt', type: 'Verb · bringen (sie)' },
      { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'इसे', pron: 'een', type: 'Pronoun · acc.', why: 'den Kuchen → ihn (masc.) (this chapter).', ex: 'den Kuchen → ihn', exEn: 'the cake → it' },
      { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock', why: 'um + clock (recycled — Uhrzeit).', ex: 'um sechs', exEn: 'at six' },
      { w: 'sechs', role: 'r-time', en: 'six', hi: 'छह', pron: 'zeks', type: 'Number', why: 'sechs = 6 (recycled — Zahlen).', ex: 'um sechs Uhr', exEn: 'at six' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'macht', role: 'r-verb', en: 'does', hi: 'संभालता है', pron: 'makht', type: 'Verb · machen (er)' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Musik', role: 'r-object', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.', why: 'die Musik (recycled — Hobbies).', ex: 'die Musik machen', exEn: 'do the music' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'macht', role: 'r-verb', en: 'does', hi: 'संभालता है', pron: 'makht', type: 'Verb · machen (er)' },
      { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'इसे', pron: 'zee', type: 'Pronoun · acc.', why: 'die Musik → sie (fem.) (this chapter).', ex: 'die Musik → sie', exEn: 'the music → it' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb', why: 'gern (recycled — Hobbies).', ex: 'Er macht sie gern.', exEn: 'He gladly does it.' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'lädt', role: 'r-verb', en: 'invites', hi: 'बुलाता है', pron: 'layt', type: 'Verb · einladen (er)', why: 'einladen splits (recycled — Trennbare Verben).', ex: 'Max lädt die Gäste ein.', exEn: 'Max invites the guests.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (plural acc.)', hi: 'इन', pron: 'dee', type: 'Article · acc.' },
      { w: 'Gäste', role: 'r-object', en: 'guests', hi: 'मेहमान', pron: 'GES-tuh', type: 'Noun · plural', why: 'die Gäste (recycled — Goethe Mini 3).', ex: 'die Gäste einladen', exEn: 'invite the guests' },
      { w: 'ein', role: 'r-verb', en: '(invite)', hi: 'न्योता', pron: 'ine', type: 'Separable prefix', why: 'ein from einladen (recycled — Trennbare Verben).', ex: '… ein.', exEn: '… invite.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'lädt', role: 'r-verb', en: 'invites', hi: 'बुलाता है', pron: 'layt', type: 'Verb · einladen (er)' },
      { w: 'sie', role: 'r-akkusativ', en: 'them', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · acc.', why: 'die Gäste (plural) → sie (this chapter).', ex: 'die Gäste → sie', exEn: 'the guests → them' },
      { w: 'ein', role: 'r-verb', en: '(invite)', hi: 'न्योता', pron: 'ine', type: 'Separable prefix' },
      { w: '.', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Frau', role: 'r-subject', en: 'Mrs', hi: 'श्रीमती', pron: 'frow', type: 'Title' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: '?', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'laden', role: 'r-verb', en: 'invite', hi: 'बुलाते हैं', pron: 'LAH-den', type: 'Verb · einladen (wir)' },
      { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · acc.', why: 'Frau Weber → sie (fem. person) (this chapter).', ex: 'Frau Weber → sie', exEn: 'Frau Weber → her' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'ein', role: 'r-verb', en: '(invite)', hi: 'न्योता', pron: 'ine', type: 'Separable prefix' },
      { w: '!', plain: true }
    ],
    translation: 'We are having a party. Anna brings the cake. She brings it at six. Rohan does the music. He gladly does it. Max invites the guests. He invites them. And Frau Weber? We invite her too!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_032_L001', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kennst du den neuen Studenten?', en: 'Do you know the new student?' },
      { id: 'A1_032_L002', speaker: 'Fabian', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich kenne ihn.', en: 'Yes, I know him.' },
      { id: 'A1_032_L003', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und hast du das Buch für ihn?', en: 'And do you have the book for him?' },
      { id: 'A1_032_L004', speaker: 'Fabian', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich habe es.', en: 'Yes, I have it.' },
      { id: 'A1_032_L005', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut. Rufst du Anna an?', en: 'Good. Are you calling Anna?' },
      { id: 'A1_032_L006', speaker: 'Fabian', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Natürlich rufe ich sie an.', en: 'Of course I\'m calling her.' },
      { id: 'A1_032_L007', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und hört uns Frau Weber?', en: 'And does Frau Weber hear us?' },
      { id: 'A1_032_L008', speaker: 'Fabian', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, sie hört uns sehr gut.', en: 'Yes, she hears us very well.' }
    ],
    transcript: 'Kennst du den neuen Studenten? Ja, ich kenne ihn. Und hast du das Buch für ihn? Ja, ich habe es. Gut. Rufst du Anna an? Natürlich rufe ich sie an. Und hört uns Frau Weber? Ja, sie hört uns sehr gut.',
    translation: 'Do you know the new student? Yes, I know him. And do you have the book for him? Yes, I have it. Good. Are you calling Anna? Of course I\'m calling her. And does Frau Weber hear us? Yes, she hears us very well.',
    tokens: [
      { w: 'Kennst' },
      { w: 'du' },
      { w: 'den' },
      { w: 'neuen' },
      { w: 'Studenten' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'kenne' },
      { w: 'ihn' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'das' },
      { w: 'Buch' },
      { w: 'für' },
      { w: 'ihn' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'es' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: '.', plain: true },
      { w: 'Rufst' },
      { w: 'du' },
      { w: 'Anna' },
      { w: 'an' },
      { w: '?', plain: true },
      { w: 'Natürlich' },
      { w: 'rufe' },
      { w: 'ich' },
      { w: 'sie' },
      { w: 'an' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'hört' },
      { w: 'uns' },
      { w: 'Frau' },
      { w: 'Weber' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'hört' },
      { w: 'uns' },
      { w: 'sehr' },
      { w: 'gut' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Pronomen ersetzt "den neuen Studenten"?', qEn: 'Which pronoun replaces "den neuen Studenten"?', options: ['es', 'ihn', 'sie', 'uns'], optionsEn: ['it', 'him', 'she', 'us'], answer: 1,
        explain: 'masculine accusative → ihn: "ich kenne ihn".' },
      { q: 'Welches Pronomen ersetzt "das Buch"?', qEn: 'Which pronoun replaces "das Buch"?', options: ['ihn', 'sie', 'es', 'euch'], optionsEn: ['him', 'she', 'it', 'you (plural)'], answer: 2,
        explain: 'das Buch is neuter → es: "ich habe es".' },
      { q: 'Wie antwortet Fabian auf "Rufst du Anna an?"', qEn: 'How does Fabian answer "Rufst du Anna an?"', options: ['Ich rufe ihn an.', 'Ich rufe sie an.', 'Ich rufe es an.', 'Ich rufe uns an.'], optionsEn: ['I\'ll call him.', 'I\'ll call her.', 'I\'ll call it.', 'I\'ll call us.'], answer: 1,
        explain: 'Anna (fem.) → sie: "Ich rufe sie an."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Dein Partner fragt: Kennst du den neuen Studenten?", taskEn: "Your partner asks: do you know the new student?", de: "Ja, ich kenne ihn.", en: "Yes, I know him." },
    { task: "Dein Freund fragt: Hast du das Buch? Und rufst du Anna an?", taskEn: "Your friend asks: do you have the book? And are you calling Anna?", de: "Ja, ich habe es, und ich rufe sie an.", en: "Yes, I have it, and I'm calling her." },
    { task: "Dein Partner fragt: Hört uns Frau Weber?", taskEn: "Your partner asks: can Mrs Weber hear us?", de: "Ja, sie hört uns. Und ich höre dich auch gut.", en: "Yes, she can hear us. And I can hear you too." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five short question-and-answer pairs where the answer replaces the noun with a pronoun. Use a mix: a masculine noun (→ ihn), a feminine noun (→ sie), a neuter noun (→ es), and the personal pronouns mich/dich/uns/euch. Example: "Kennst du Anna? — Ja, ich kenne sie."',
    starters: ['Kennst du …? — Ja, ich kenne …', 'Hast du das Buch? — Ja, ich habe …', 'Rufst du … an? — Ich rufe … an.', 'Hörst du mich? — Ja, ich höre …'],
    placeholder: 'Kennst du Max? — Ja, ich kenne ihn …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Replace the noun: "Ich kenne den Mann." → "Ich kenne ___."',
      options: ['es', 'ihn', 'sie', 'dich'],
      answer: 1,
      explain: 'der Mann (masc.) → ihn.'
    },
    gap: {
      // er→ihn and das Buch→es
      sentence: ['Kennst du Max? \u2014 Ja, ich kenne ', '. Hast du das Buch? \u2014 Ja, ich habe ', '.'],
      gaps: [ { answer: 'ihn', accepts: ['ihn'] }, { answer: 'es', accepts: ['es'] } ],
      explain: 'Max → ihn (masc.); das Buch → es (neut.).'
    },
    match: {
      q: 'Match each subject pronoun to its accusative form.',
      pairs: [
        { noun: 'ich', art: 'mich' },
        { noun: 'du', art: 'dich' },
        { noun: 'er', art: 'ihn' },
        { noun: 'wir', art: 'uns' }
      ]
    },
    builder: {
      target: 'Build: "I know him."',
      bank: ['Ich', 'kenne', 'ihn'],
      answer: ['Ich', 'kenne', 'ihn'],
      roles: { 'Ich': 'r-subject', 'kenne': 'r-verb', 'ihn': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the accusative of "er"?', options: ['ihm', 'ihn', 'er', 'es'], answer: 1,
      explain: 'er → ihn.' },
    { q: 'Replace: "Ich habe das Buch." → "Ich habe ___."', options: ['ihn', 'sie', 'es', 'dich'], answer: 2,
      explain: 'das Buch is neuter → es.' },
    { q: 'Complete: "Hörst du ___?" (me)', options: ['ich', 'mir', 'mich', 'mein'], answer: 2,
      explain: 'ich → mich in the accusative.' },
    { q: 'Replace: "Ich rufe Anna an." → "Ich rufe ___ an."', options: ['ihn', 'sie', 'es', 'uns'], answer: 1,
      explain: 'Anna (fem.) → sie.' },
    { q: 'Which word means "whom"?', options: ['wer', 'wen', 'wie', 'was'], answer: 1,
      explain: 'wen = whom (the accusative of wer).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-akkusativ', html: 'The set: <span class="de">mich, dich, ihn, sie, es, uns, euch, Sie</span>. The tricky one is <span class="de">er → ihn</span>.' },
    { c: 'r-akkusativ', html: 'Match the noun: <span class="de">der Kuchen → ihn</span>, <span class="de">die Musik → sie</span>, <span class="de">das Buch → es</span>, <span class="de">die Gäste → sie</span>.' },
    { c: 'r-subject', html: 'Pronoun right after the verb; ask "whom?" with <span class="de">wen</span>: <span class="de">Wen lädst du ein?</span>' }
  ],
  revisionTips: [
    'Drill the one that changes most: er → ihn. The rest follow easily.',
    'Match a thing-pronoun to the article: der→ihn, die→sie, das→es, plural→sie.',
    'Answer questions with a pronoun instead of repeating the noun — that\u2019s what makes you sound fluent.'
  ]
};

window.CHAPTER = CHAPTER;
