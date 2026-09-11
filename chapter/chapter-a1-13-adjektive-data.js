/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 13
   "Adjektive mit sein"  (Describing with sein + adjective)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-13 word list (76 items;
   duplicate-sense words merged → one card each).
   Recycles Chapters 1–12 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-13-adjektive',
  phase: 'A1 · Phase 2',
  number: 13,
  title: 'Adjektive mit sein',
  titleEn: 'Adjectives with sein',
  description: 'Now you can describe anything. Put an adjective after the verb sein and you have a full sentence — Das Buch ist interessant, Ich bin müde. And the gift: after sein the adjective takes no ending at all.',
  xp: 180,
  time: 50,
  difficulty: 'Beginner',
  nextChapter: { number: 14, title: 'Essen & Trinken', titleEn: 'Food & Drink' , href: 'chapter-a1-14-essen.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'To describe something, use <span class="de r-verb">sein</span> + an <span class="de r-adjective">adjective</span>: <span class="de">Das Zimmer ist groß.</span> The best part — after <span class="de r-verb">sein</span> the adjective is in its <b>plain dictionary form</b>, with <b>no ending</b> to add.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DESCRIBING with sein + adjective (predicate adjectives): "Das Buch ist interessant.", "Ich bin müde." ' +
    'The learner wrote descriptive sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A predicate adjective (after sein/werden/bleiben) takes NO ending: "Der Mann ist freundlich." (never "freundlicher" unless it is a real comparative).\n' +
    '- sein conjugation: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.\n' +
    '- Word order: Subject – ist – adjective ("Die Stadt ist schön."). With a time/place word first, sein stays second.\n' +
    '- Comparative adds -er + als ("kleiner als"), superlative am …-sten ("am kleinsten"); many short adjectives umlaut (alt→älter, groß→größer, jung→jünger). gut→besser→am besten; viel→mehr→am meisten; hoch→höher.\n' +
    '- Do NOT add adjective endings before a noun here — that is a later chapter; keep adjectives after sein.\n' +
    '- All nouns are capitalised; adjectives are lower-case.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>sein + adjective check:</b> one sentence on whether the adjective is in its plain form and sein agrees with the subject.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can describe people, places and things. Move on to <span class="de">Essen & Trinken</span>.',
    mid: 'Good. Re-read the sein + adjective card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-article' }, { w: 'Zimmer', role: 'r-subject' },
    { w: 'ist', role: 'r-verb' }, { w: 'sehr', role: 'r-adverb' },
    { w: 'groß', role: 'r-adjective' }, { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'How is it <em>really?</em>',
    intro: 'Marie asks Leon to describe his city and his friends. With sein and an adjective, Leon paints a picture of his new life in Berlin.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear sein + adjective with no endings', 'Leon describes his new home'],
    scene: 'Beschreibungen — Deutschkurs',
    femaleSpeakers: ['Marie'],
    dialogue: [
      { speaker: 'Marie', tokens: [
        { w: 'Leon', role: 'r-name', en: 'Leon', hi: 'लियोन', pron: 'LAY-on', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'Leon, how is Berlin for you?', hi: 'Leon, tumhaare liye Berlin kaisa hai?' },
      { speaker: 'Leon', side: 'right', tokens: [
        { w: 'Berlin', role: 'r-subject', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'groß', role: 'r-adjective', en: 'big', hi: 'बड़ा', pron: 'grohss', type: 'Adjective' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wunderschön', role: 'r-adjective', en: 'beautiful', hi: 'बेहद सुंदर', pron: 'VUN-der-shön', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'kalt', role: 'r-adjective', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Berlin is big and beautiful. But right now it is very cold.', hi: 'Berlin bada aur khoobsurat hai. Par abhi bahut thanda hai.' },
      { speaker: 'Marie', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'kalt', role: 'r-adjective', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive · nom.' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Yes, very cold! And is your course good?', hi: 'Haan, bahut thanda! Aur tumhaara course achha hai?' },
      { speaker: 'Leon', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The course is interesting, but hard. Today I am very tired.', hi: 'Course dilchasp hai, par mushkil. Aaj main bahut thaka hua hoon.' },
      { speaker: 'Marie', tokens: [
        { w: 'Müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'normal', role: 'r-adjective', en: 'normal', hi: 'सामान्य', pron: 'nor-MAHL', type: 'Adjective', why: 'sein + adjective, no ending (this chapter).', ex: 'Das ist normal.', exEn: 'That is normal.' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'fleißig', role: 'r-adjective', en: 'hardworking', hi: 'मेहनती', pron: 'FLY-sikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Tired? That is normal! You are very hardworking.', hi: 'Thake hue? Yeh sामान्य hai! Tum bahut mehnati ho.' },
      { speaker: 'Leon', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'Marie', role: 'r-name', en: 'Marie', hi: 'मारी', pron: 'ma-REE', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'nett', role: 'r-adjective', en: 'kind', hi: 'अच्छी', pron: 'net', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glücklich', role: 'r-adjective', en: 'happy', hi: 'खुश', pron: 'GLÜK-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Thanks, Marie! You are very kind. Now I am happy.', hi: 'Dhanyavaad, Marie! Tum bahut achhi ho. Ab main khush hoon.' },
      { speaker: 'Marie', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive · nom.' },
        { w: 'Deutsch', role: 'r-subject', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'And how is your German now?', hi: 'Aur ab tumhaara German kaisa hai?' },
      { speaker: 'Leon', side: 'right', tokens: [
        { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'perfekt', role: 'r-adjective', en: 'perfect', hi: 'बिल्कुल सही', pron: 'per-FEKT', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'genug', role: 'r-adverb', en: 'enough', hi: 'काफ़ी', pron: 'ge-NOOK', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Not perfect, but already good. Is that enough?', hi: 'Perfect nahi, par pehle se achha. Kya yeh kaafi hai?' },
      { speaker: 'Marie', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Berlin', role: 'r-subject', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive · nom.' },
        { w: 'Zuhause', role: 'r-subject', en: 'home', hi: 'घर', pron: 'tsu-HOW-zuh', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes! That is very good! Berlin is your home now.', hi: 'Haan! Yeh bahut achha hai! Ab Berlin tumhaara ghar hai.' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn a big set of descriptive adjectives for people, places, objects and feelings.' },
    { id: 'grammar',    label: 'sein + Adjektiv', tag: 'core',
      objective: 'Master describing with sein + adjective — no endings — plus opposites and a first look at comparison.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a description of a person and place, and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Hear people and things described, then answer how they are.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe yourself, a friend and your room, and ask a partner how things are.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five descriptive sentences using sein + adjective.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill adjective meanings, opposites, and sein + adjective sentences with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All descriptive adjectives with opposites, translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '13 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Adjective–opposite matching, sein + adjective drills, description tasks, and self-study.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The sein + adjective pattern, predicate adjectives (no endings), comparison basics, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'sein + Adjektiv', text: 'Describe anything with "… ist + adjective"' },
    { de: 'keine Endung', text: 'Use the plain adjective form (no ending after sein)' },
    { de: 'Gegenteile', text: 'Pair adjectives with their opposites (groß ↔ klein)' },
    { de: 'Gefühle', text: 'Talk about feelings: müde, glücklich, hungrig' },
    { de: 'Komparativ', text: 'Take a first look at "bigger / better than"' }
  ],

  // ---------- Vocabulary (descriptive adjectives + a few nouns) ----------
  vocab: [
    // — Core active —
    { de: 'groß', pos: 'adjective', en: 'big, tall', hi: 'बड़ा',
      ex: 'Das Zimmer ist groß.', exEn: 'The room is big.',
      compare: { comparative: 'größer', superlative: 'am größten' } },
    { de: 'klein', pos: 'adjective', en: 'small', hi: 'छोटा',
      ex: 'Der Schlüssel ist klein.', exEn: 'The key is small.',
      compare: { comparative: 'kleiner', superlative: 'am kleinsten' } },
    { de: 'interessant', pos: 'adjective', en: 'interesting', hi: 'दिलचस्प',
      ex: 'Das Buch ist interessant.', exEn: 'The book is interesting.',
      compare: { comparative: 'interessanter', superlative: 'am interessantesten' } },
    { de: 'richtig', pos: 'adjective / adverb', en: 'correct; really', hi: 'सही / सचमुच',
      ex: 'Die Antwort ist richtig.', exEn: 'The answer is correct.' },
    { de: 'falsch', pos: 'adjective', en: 'wrong', hi: 'ग़लत',
      ex: 'Die Antwort ist falsch.', exEn: 'The answer is wrong.' },
    { de: 'schön', pos: 'adjective', en: 'nice, pretty', hi: 'सुंदर',
      ex: 'Die Stadt ist schön.', exEn: 'The city is beautiful.',
      compare: { comparative: 'schöner', superlative: 'am schönsten' } },
    { de: 'super', pos: 'adjective', en: 'super, great', hi: 'बढ़िया',
      ex: 'Das Essen ist super!', exEn: 'The food is super!' },
    { de: 'toll', pos: 'adjective', en: 'great', hi: 'शानदार',
      ex: 'Der Film ist toll.', exEn: 'The film is great.' },
    { de: 'viel/viele', pos: 'adjective / quantifier', en: 'a lot, many', hi: 'बहुत',
      ex: 'Ich habe viele Bücher.', exEn: 'I have many books.',
      compare: { comparative: 'mehr', superlative: 'am meisten' } },
    // — Active support —
    { de: 'als', pos: 'conjunction', en: 'than', hi: 'से (तुलना)',
      ex: 'Berlin ist größer als Bonn.', exEn: 'Berlin is bigger than Bonn.' },
    { de: 'alt', pos: 'adjective', en: 'old', hi: 'पुराना / बूढ़ा',
      ex: 'Das Auto ist alt.', exEn: 'The car is old.',
      compare: { comparative: 'älter', superlative: 'am ältesten' } },
    { de: 'anstrengend', pos: 'adjective', en: 'exhausting', hi: 'थकाऊ',
      ex: 'Der Tag ist anstrengend.', exEn: 'The day is exhausting.' },
    { de: 'attraktiv', pos: 'adjective', en: 'attractive', hi: 'आकर्षक',
      ex: 'Die Stadt ist attraktiv.', exEn: 'The city is attractive.' },
    { de: 'beide', pos: 'quantifier', en: 'both', hi: 'दोनों',
      ex: 'Beide Bücher sind neu.', exEn: 'Both books are new.' },
    { de: 'beliebt', pos: 'adjective', en: 'popular', hi: 'लोकप्रिय',
      ex: 'Der Lehrer ist beliebt.', exEn: 'The teacher is popular.' },
    { de: 'berühmt', pos: 'adjective', en: 'famous', hi: 'प्रसिद्ध',
      ex: 'Die Stadt ist berühmt.', exEn: 'The city is famous.' },
    { de: 'beschreiben', pos: 'verb', en: 'to describe', hi: 'वर्णन करना',
      ex: 'Beschreibe deinen Freund.', exEn: 'Describe your friend.',
      conj: { praesens: 'beschreibt', praeteritum: 'beschrieb', perfekt: 'hat beschrieben' } },
    { de: 'besser', pos: 'adjective (comparative)', en: 'better', hi: 'बेहतर',
      ex: 'Heute ist es besser.', exEn: 'Today it is better.' },
    { de: 'billig', pos: 'adjective', en: 'cheap', hi: 'सस्ता',
      ex: 'Das Buch ist billig.', exEn: 'The book is cheap.',
      compare: { comparative: 'billiger', superlative: 'am billigsten' } },
    { de: 'böse', pos: 'adjective', en: 'angry, mean', hi: 'गुस्सा / दुष्ट',
      ex: 'Der Mann ist böse.', exEn: 'The man is angry.' },
    { de: 'cool', pos: 'adjective', en: 'cool', hi: 'कूल',
      ex: 'Die Jacke ist cool.', exEn: 'The jacket is cool.' },
    { de: 'doof', pos: 'adjective', en: 'silly, dumb', hi: 'बेवकूफ़',
      ex: 'Das ist doof.', exEn: 'That is silly.' },
    { de: 'einfach', pos: 'adjective / adverb', en: 'easy; simply', hi: 'आसान / बस',
      ex: 'Die Regel ist einfach.', exEn: 'The rule is easy.' },
    { de: 'faul', pos: 'adjective', en: 'lazy', hi: 'आलसी',
      ex: 'Der Hund ist faul.', exEn: 'The dog is lazy.' },
    { de: 'fleißig', pos: 'adjective', en: 'hardworking', hi: 'मेहनती',
      ex: 'Die Studentin ist fleißig.', exEn: 'The student is hardworking.' },
    { de: 'freundlich', pos: 'adjective', en: 'friendly', hi: 'मिलनसार',
      ex: 'Der Chef ist freundlich.', exEn: 'The boss is friendly.',
      compare: { comparative: 'freundlicher', superlative: 'am freundlichsten' } },
    { de: 'froh', pos: 'adjective', en: 'glad', hi: 'खुश',
      ex: 'Ich bin froh.', exEn: 'I am glad.' },
    { de: 'ganz', pos: 'adjective / adverb', en: 'whole; quite', hi: 'पूरा / काफ़ी',
      ex: 'Der ganze Tag ist frei.', exEn: 'The whole day is free.' },
    { de: 'gefährlich', pos: 'adjective', en: 'dangerous', hi: 'खतरनाक',
      ex: 'Die Straße ist gefährlich.', exEn: 'The street is dangerous.' },
    { de: 'genau', pos: 'adjective / adverb', en: 'exact, exactly', hi: 'बिल्कुल सही',
      ex: 'Das ist genau richtig.', exEn: 'That is exactly right.' },
    { de: 'glücklich', pos: 'adjective', en: 'happy', hi: 'खुश',
      ex: 'Sie ist glücklich.', exEn: 'She is happy.' },
    { de: 'günstig', pos: 'adjective', en: 'cheap, good value', hi: 'किफ़ायती',
      ex: 'Das Geschäft ist günstig.', exEn: 'The shop is good value.' },
    { de: 'hoch', pos: 'adjective', en: 'high', hi: 'ऊँचा',
      ex: 'Der Turm ist hoch.', exEn: 'The tower is high.',
      compare: { comparative: 'höher', superlative: 'am höchsten' } },
    { de: 'hungrig', pos: 'adjective', en: 'hungry', hi: 'भूखा',
      ex: 'Ich bin hungrig.', exEn: 'I am hungry.' },
    { de: 'hässlich', pos: 'adjective', en: 'ugly', hi: 'बदसूरत',
      ex: 'Das Bild ist hässlich.', exEn: 'The picture is ugly.' },
    { de: 'jung', pos: 'adjective', en: 'young', hi: 'जवान',
      ex: 'Der Mann ist jung.', exEn: 'The man is young.',
      compare: { comparative: 'jünger', superlative: 'am jüngsten' } },
    { de: 'kalt', pos: 'adjective', en: 'cold', hi: 'ठंडा',
      ex: 'Der Kaffee ist kalt.', exEn: 'The coffee is cold.',
      compare: { comparative: 'kälter', superlative: 'am kältesten' } },
    { de: 'kaputt', pos: 'adjective', en: 'broken', hi: 'टूटा हुआ',
      ex: 'Der Computer ist kaputt.', exEn: 'The computer is broken.' },
    { de: 'lang', pos: 'adjective', en: 'long', hi: 'लंबा',
      ex: 'Die Straße ist lang.', exEn: 'The street is long.',
      compare: { comparative: 'länger', superlative: 'am längsten' } },
    { de: 'langweilig', pos: 'adjective', en: 'boring', hi: 'उबाऊ',
      ex: 'Der Film ist langweilig.', exEn: 'The film is boring.' },
    { de: 'leer', pos: 'adjective', en: 'empty', hi: 'खाली',
      ex: 'Der Kühlschrank ist leer.', exEn: 'The fridge is empty.' },
    { de: 'leicht', pos: 'adjective', en: 'easy, light', hi: 'आसान / हल्का',
      ex: 'Die Aufgabe ist leicht.', exEn: 'The task is easy.' },
    { de: 'lustig', pos: 'adjective', en: 'funny', hi: 'मज़ेदार',
      ex: 'Der Film ist lustig.', exEn: 'The film is funny.' },
    { de: 'müde', pos: 'adjective', en: 'tired', hi: 'थका हुआ',
      ex: 'Ich bin müde.', exEn: 'I am tired.' },
    { de: 'nett', pos: 'adjective', en: 'nice, kind', hi: 'अच्छा (व्यवहार)',
      ex: 'Die Frau ist nett.', exEn: 'The woman is nice.' },
    { de: 'neu', pos: 'adjective', en: 'new', hi: 'नया',
      ex: 'Das Auto ist neu.', exEn: 'The car is new.' },
    { de: 'normal', pos: 'adjective', en: 'normal', hi: 'सामान्य',
      ex: 'Der Tag ist normal.', exEn: 'The day is normal.' },
    { de: 'perfekt', pos: 'adjective', en: 'perfect', hi: 'उत्तम',
      ex: 'Alles ist perfekt.', exEn: 'Everything is perfect.' },
    { de: 'praktisch', pos: 'adjective', en: 'practical', hi: 'व्यावहारिक',
      ex: 'Die Tasche ist praktisch.', exEn: 'The bag is practical.' },
    { de: 'sauber', pos: 'adjective', en: 'clean', hi: 'साफ़',
      ex: 'Das Zimmer ist sauber.', exEn: 'The room is clean.' },
    { de: 'schnell', pos: 'adjective', en: 'quick, fast', hi: 'तेज़',
      ex: 'Der Computer ist schnell.', exEn: 'The computer is fast.',
      compare: { comparative: 'schneller', superlative: 'am schnellsten' } },
    { de: 'schwer', pos: 'adjective', en: 'difficult; heavy', hi: 'कठिन / भारी',
      ex: 'Der Koffer ist schwer.', exEn: 'The suitcase is heavy.' },
    { de: 'sicher', pos: 'adjective', en: 'sure, safe', hi: 'सुरक्षित / निश्चित',
      ex: 'Die Stadt ist sicher.', exEn: 'The city is safe.' },
    { de: 'teuer', pos: 'adjective', en: 'expensive', hi: 'महँगा',
      ex: 'Das Auto ist teuer.', exEn: 'The car is expensive.',
      compare: { comparative: 'teurer', superlative: 'am teuersten' } },
    { de: 'warm', pos: 'adjective', en: 'warm', hi: 'गरम',
      ex: 'Der Tee ist warm.', exEn: 'The tea is warm.',
      compare: { comparative: 'wärmer', superlative: 'am wärmsten' } },
    { de: 'wichtig', pos: 'adjective', en: 'important', hi: 'महत्वपूर्ण',
      ex: 'Die Aussprache ist wichtig.', exEn: 'Pronunciation is important.' },
    { de: 'wunderbar', pos: 'adjective', en: 'wonderful', hi: 'अद्भुत',
      ex: 'Das Wetter ist wunderbar.', exEn: 'The weather is wonderful.' },
    { de: 'wunderschön', pos: 'adjective', en: 'beautiful', hi: 'बेहद सुंदर',
      ex: 'Die Stadt ist wunderschön.', exEn: 'The city is beautiful.' },
    // — Nouns / system —
    { de: 'Mensch', art: 'der', gender: 'm', plural: 'Menschen', pos: 'noun', en: 'person, human', hi: 'इंसान',
      ex: 'Der Mensch ist freundlich.', exEn: 'The person is friendly.' },
    { de: 'Mann', art: 'der', gender: 'm', plural: 'Männer', pos: 'noun', en: 'man', hi: 'आदमी',
      ex: 'Der Mann ist nett.', exEn: 'The man is nice.' },
    { de: 'Adjektiv', art: 'das', gender: 'n', plural: 'Adjektive', pos: 'noun', en: 'adjective', hi: 'विशेषण',
      ex: '"groß" ist ein Adjektiv.', exEn: '"groß" is an adjective.' },
    // — Passive —
    { de: 'breit', pos: 'adjective', en: 'wide', hi: 'चौड़ा',
      ex: 'Die Straße ist breit.', exEn: 'The street is wide.' },
    { de: 'eilig', pos: 'adjective', en: 'in a hurry', hi: 'जल्दी में',
      ex: 'Ich bin eilig.', exEn: 'I am in a hurry.' },
    { de: 'elegant', pos: 'adjective', en: 'elegant', hi: 'सुरुचिपूर्ण',
      ex: 'Das Kleid ist elegant.', exEn: 'The dress is elegant.' },
    { de: 'fehlend', pos: 'adjective', en: 'missing', hi: 'गायब',
      ex: 'Das fehlende Wort ist "ist".', exEn: 'The missing word is "ist".' },
    { de: 'ideal', pos: 'adjective', en: 'ideal', hi: 'आदर्श',
      ex: 'Das ist ideal.', exEn: 'That is ideal.' },
    { de: 'individuell', pos: 'adjective', en: 'individual', hi: 'व्यक्तिगत',
      ex: 'Jeder Mensch ist individuell.', exEn: 'Every person is individual.' },
    { de: 'k.o.', pos: 'adjective', en: 'exhausted (knocked out)', hi: 'पूरी तरह थका',
      ex: 'Nach dem Tag bin ich k.o.', exEn: 'After the day I am exhausted.' },
    { de: 'lebendig', pos: 'adjective', en: 'lively', hi: 'जीवंत',
      ex: 'Die Stadt ist lebendig.', exEn: 'The city is lively.' },
    { de: 'originell', pos: 'adjective', en: 'original', hi: 'मौलिक',
      ex: 'Die Idee ist originell.', exEn: 'The idea is original.' },
    { de: 'populär', pos: 'adjective', en: 'popular', hi: 'लोकप्रिय',
      ex: 'Der Song ist populär.', exEn: 'The song is popular.' },
    { de: 'supernett', pos: 'adjective', en: 'super nice', hi: 'बहुत प्यारा',
      ex: 'Die Lehrerin ist supernett.', exEn: 'The teacher is super nice.' },
    { de: 'top', pos: 'adjective', en: 'top, great', hi: 'बढ़िया',
      ex: 'Das Hotel ist top.', exEn: 'The hotel is top.' },
    { de: 'typisch', pos: 'adjective', en: 'typical', hi: 'विशिष्ट',
      ex: 'Das ist typisch Deutsch.', exEn: 'That is typically German.' }
  ],

  // ---------- sein + Adjektiv (rule cards → accordion) ----------
  grammar: [
    {
      title: 'sein + adjective — describe anything',
      goldenRule: 'Subject + <b>sein</b> + adjective. Three slots, and you can describe anything you can point at.',
      memoryTrick: 'Teen cheezein bas: <b>kaun</b> + <b>hai</b> + <b>kaisa</b>.',
      body: [
        'To describe a person, place, thing or feeling, you only need three pieces: a <span class="de r-subject">subject</span>, the verb <span class="de r-verb">sein</span>, and an <span class="de r-adjective">adjective</span>.',
        'The adjective comes <b>after</b> sein, in its plain dictionary form.'
      ],
      table: {
        head: ['Subject', 'sein', 'Adjective'],
        rows: [
          ['<span class="de r-subject">Das Buch</span>', '<span class="de r-verb">ist</span>', '<span class="de r-adjective">interessant</span>.'],
          ['<span class="de r-subject">Der Mann</span>', '<span class="de r-verb">ist</span>', '<span class="de r-adjective">freundlich</span>.'],
          ['<span class="de r-subject">Das Zimmer</span>', '<span class="de r-verb">ist</span>', '<span class="de r-adjective">groß</span>.'],
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">bin</span>', '<span class="de r-adjective">müde</span>.']
        ]
      },
      note: 'Remember sein from Chapter 5: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
      hinglish: 'Kuch bhi describe karne ke liye teen cheez: <b>subject</b> + <b>sein</b> + <b>adjective</b>. Adjective <b>sein ke baad</b> aata hai, apne plain (dictionary) roop mein: Das Buch ist <b>interessant</b>. Ich bin <b>müde</b>. sein yaad: ich bin, du bist, er ist…'
    },
    {
      title: 'The gift: no adjective endings here',
      goldenRule: 'After <b>sein</b>, the adjective takes <b>no ending at all</b> — whatever the gender or number.',
      why: 'The ending on a German adjective exists to point at the noun that follows it. After <i>sein</i> there is no following noun — the adjective is describing backwards, at the subject — so there is nothing to point at and no ending to add.',
      formula: [
        'Der Tisch ist <b>neu</b>.     (m)',
        'Die Karte ist <b>neu</b>.     (f)',
        'Das Auto ist <b>neu</b>.      (n)',
        'Die Bücher sind <b>neu</b>.   (pl)'
      ],
      memoryTrick: 'Adjective <b>noun se pehle</b> ho to ending lagti hai. <b>sein ke baad</b> ho to kuch nahi lagta — aur yeh tumhare faayde mein hai.',
      recap: [
        'After <b>sein</b>: no ending, ever.',
        'One form covers all four genders.',
        'Endings return only when the adjective sits <b>before</b> a noun — that comes in A2.'
      ],
      body: [
        'After <span class="de r-verb">sein</span>, the adjective takes <b>no ending at all</b> — it stays exactly as in the dictionary, whatever the gender or number of the subject.'
      ],
      table: {
        head: ['Subject (any gender)', 'sein + adjective', 'Adjective form'],
        rows: [
          ['Der Tisch (m)', 'ist <span class="de r-adjective">neu</span>', 'neu — plain'],
          ['Die Karte (f)', 'ist <span class="de r-adjective">neu</span>', 'neu — plain'],
          ['Das Auto (n)', 'ist <span class="de r-adjective">neu</span>', 'neu — plain'],
          ['Die Bücher (pl)', 'sind <span class="de r-adjective">neu</span>', 'neu — plain']
        ]
      },
      note: 'Endings like <i>neuer / neue / neues</i> only appear when the adjective sits <b>before</b> a noun, which you will learn in A2. After sein — never.',
      hinglish: 'Sabse achhi baat: <b>sein ke baad adjective par koi ending nahi</b> lagti. Chahe subject masculine, feminine, neuter ya plural ho — adjective <b>neu</b> hi rehta hai (neuer/neue/neues nahi). Endings tab aati hain jab adjective noun se <b>pehle</b> aata hai — woh tum A2 mein seekhoge.'
    },
    {
      title: 'Opposites — describe by contrast',
      body: [ 'Adjectives come in pairs. Learn each one with its <span class="de">Gegenteil</span> (opposite) — it doubles your vocabulary instantly.' ],
      table: {
        head: ['Adjective', 'Opposite', 'Adjective', 'Opposite'],
        rows: [
          ['<span class="de r-adjective">groß</span> big', '<span class="de r-adjective">klein</span> small', '<span class="de r-adjective">alt</span> old', '<span class="de r-adjective">neu/jung</span> new/young'],
          ['<span class="de r-adjective">teuer</span> expensive', '<span class="de r-adjective">billig</span> cheap', '<span class="de r-adjective">warm</span> warm', '<span class="de r-adjective">kalt</span> cold'],
          ['<span class="de r-adjective">richtig</span> right', '<span class="de r-adjective">falsch</span> wrong', '<span class="de r-adjective">schön</span> pretty', '<span class="de r-adjective">hässlich</span> ugly'],
          ['<span class="de r-adjective">fleißig</span> diligent', '<span class="de r-adjective">faul</span> lazy', '<span class="de r-adjective">interessant</span> interesting', '<span class="de r-adjective">langweilig</span> boring']
        ]
      },
      note: 'Feelings work the same way: <span class="de">müde</span> ↔ wach, <span class="de">glücklich</span> ↔ traurig, <span class="de">hungrig</span> (hungry).',
      hinglish: 'Adjectives jodi mein aate hain — har ek ko uske <b>Gegenteil</b> (opposite) ke saath seekho — vocabulary do-guni ho jaati hai: groß↔klein, alt↔neu, teuer↔billig, warm↔kalt, richtig↔falsch, fleißig↔faul.'
    },
    {
      title: 'A first look at comparison (Komparativ)',
      goldenRule: 'Add <b>-er</b> to the adjective and join with <b>als</b> — never <i>wie</i>.',
      formula: [
        'klein  + er  →  kleiner <b>als</b> …',
        'groß   + er  →  gr<b>ö</b>ßer  (short adjectives add an umlaut)',
        'gut          →  <b>besser</b>  (irregular)'
      ],
      memoryTrick: 'English "-er … than" = German "-er … <b>als</b>". Aur kuch chhote adjectives umlaut le lete hain: alt → älter.',
      recap: [
        'Comparative = adjective + <b>-er</b>.',
        '"Than" is <b>als</b>, not <i>wie</i>.',
        'Short adjectives often umlaut: alt→älter, groß→größer, jung→jünger.'
      ],
      body: [
        'To compare, add <b>-er</b> to the adjective and use <span class="de">als</span> (than). This is a preview — you will go deeper later.'
      ],
      table: {
        head: ['Adjective', 'Comparative', 'Example'],
        rows: [
          ['<span class="de r-adjective">klein</span>', 'kleiner', '<span class="de">Bonn ist kleiner als Berlin.</span>'],
          ['<span class="de r-adjective">groß</span>', 'größer', '<span class="de">Berlin ist größer.</span>'],
          ['<span class="de r-adjective">gut</span>', 'besser', '<span class="de">Heute ist besser.</span>'],
          ['<span class="de r-adjective">teuer</span>', 'teurer', '<span class="de">Das Auto ist teurer.</span>']
        ]
      },
      note: 'Some short adjectives add an umlaut: alt→<b>älter</b>, groß→<b>größer</b>, jung→<b>jünger</b>, warm→<b>wärmer</b>. A few are irregular: gut→<b>besser</b>, viel→<b>mehr</b>, hoch→<b>höher</b>.',
      hinglish: 'Compare ke liye adjective mein <b>-er</b> jodo aur <b>als</b> (se) use karo: klein → <b>kleiner als</b>. Kuch chhote adjectives umlaut lete hain: alt→älter, groß→größer, jung→jünger. Kuch irregular: gut→<b>besser</b>, viel→<b>mehr</b>. Abhi bas itna kaafi hai — poori detail A2 mein aayegi.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits. The first is the one worth guarding most — the ending-free adjective after <span class="de">sein</span> is a gift, and learners often add an ending that German does not want.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Das Buch ist interessante.', right: 'Das Buch ist interessant.', why: 'After sein the adjective takes no ending.' },
        { wrong: 'Ich habe müde.', right: 'Ich bin müde.', why: 'Feelings/descriptions use sein (to be), not haben (to have).' },
        { wrong: 'Berlin ist großer wie Bonn.', right: 'Berlin ist größer als Bonn.', why: 'Comparison uses als (than), never wie — and groß takes an umlaut: größer.' },
        { wrong: 'Das Buch ist Interessant.', right: 'Das Buch ist interessant.', why: 'German capitalises nouns, not adjectives. das Buch keeps its capital; interessant stays lower-case.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>sein</b> ke baad adjective par koi ending nahi lagti: <b>ist interessant</b>, na ki \u201cinteressante\u201d. Feelings batane ke liye <b>sein</b> aata hai: <b>Ich bin m\u00fcde</b>, na ki \u201chabe m\u00fcde\u201d. Compare karte waqt <b>als</b> aata hai, <b>wie</b> nahi: <b>gr\u00f6\u00dfer als</b>. Aur adjective chhote akshar se likha jaata hai, jabki noun bade akshar se.'
    }
  ],

  // ---------- Reading passage (description, clickable) ----------
  reading: {
    title: 'Meine Stadt und mein Freund',
    titleEn: 'My city and my friend',
    tokens: [
      { w: 'Meine', role: 'r-article', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive', why: 'meine (fem.) before Stadt.', ex: 'meine Stadt', exEn: 'my city' },
      { w: 'Stadt', role: 'r-subject', case: 'Nominativ', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.', why: 'die Stadt — the subject being described.', ex: 'Die Stadt ist schön.', exEn: 'The city is beautiful.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein links subject and adjective.', ex: 'Sie ist groß.', exEn: 'It is big.', advanced: { synonyms: [], opposites: [] } },
      { w: 'groß', role: 'r-adjective', en: 'big', hi: 'बड़ा', pron: 'grohss', type: 'Adjective', why: 'Plain form after sein — no ending. ß = sharp "ss".', ex: 'Die Stadt ist groß.', exEn: 'The city is big.', compare: { comparative: 'größer', superlative: 'am größten' }, advanced: { synonyms: ['riesig'], opposites: ['klein'] } },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'groß und schön', exEn: 'big and beautiful' },
      { w: 'wunderschön', role: 'r-adjective', en: 'beautiful', hi: 'बेहद सुंदर', pron: 'VUN-der-shön', type: 'Adjective', why: 'w = "v", ö = round lips "e".', ex: 'Die Stadt ist wunderschön.', exEn: 'The city is beautiful.', advanced: { synonyms: ['herrlich'], opposites: ['hässlich'] } },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-article', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive', why: 'mein (masc.) before Freund.', ex: 'mein Freund', exEn: 'my friend' },
      { w: 'Freund', role: 'r-subject', case: 'Nominativ', en: 'friend', hi: 'दोस्त', pron: 'froynt', type: 'Noun · masc.', why: 'der Freund; eu = "oy", final d → "t".', ex: 'Der Freund ist nett.', exEn: 'The friend is nice.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein again.', ex: 'Er ist freundlich.', exEn: 'He is friendly.', advanced: { synonyms: [], opposites: [] } },
      { w: 'jung', role: 'r-adjective', en: 'young', hi: 'जवान', pron: 'yung', type: 'Adjective', why: 'Plain form after sein.', ex: 'Der Mann ist jung.', exEn: 'The man is young.', compare: { comparative: 'jünger', superlative: 'am jüngsten' }, advanced: { synonyms: [], opposites: ['alt'] } },
      { w: ',', plain: true },
      { w: 'fleißig', role: 'r-adjective', en: 'hardworking', hi: 'मेहनती', pron: 'FLY-sikh', type: 'Adjective', why: 'ei = "eye", final -ig = "ikh".', ex: 'Sie ist fleißig.', exEn: 'She is hardworking.', advanced: { synonyms: [], opposites: ['faul'] } },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'joins adjectives.', ex: 'jung und fleißig', exEn: 'young and hardworking' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb', why: 's = "z". Intensifies the next adjective.', ex: 'sehr nett', exEn: 'very nice' },
      { w: 'nett', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'net', type: 'Adjective', why: 'Plain form; double t → short e.', ex: 'Er ist sehr nett.', exEn: 'He is very nice.', advanced: { synonyms: ['freundlich'], opposites: ['böse'] } },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'Time word first → verb stays second.', ex: 'Heute bin ich müde.', exEn: 'Today I am tired.' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein', why: 'sein, ich-form; second position after the time word.', ex: 'Ich bin müde.', exEn: 'I am tired.', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject after the verb (time word opened the sentence).', ex: 'Heute bin ich müde.', exEn: 'Today I am tired.' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'ü = round lips "ee". A feeling, after sein.', ex: 'Ich bin müde.', exEn: 'I am tired.', advanced: { synonyms: ['k.o.'], opposites: ['wach'] } },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-preposition', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'contrast.', ex: 'müde, aber froh', exEn: 'tired, but glad' },
      { w: 'glücklich', role: 'r-adjective', en: 'happy', hi: 'खुश', pron: 'GLÜK-likh', type: 'Adjective', why: 'ü = round lips; ck = "k".', ex: 'Ich bin glücklich.', exEn: 'I am happy.', advanced: { synonyms: ['froh'], opposites: ['traurig'] } },
      { w: '.', plain: true }
    ],
    translation: 'My city is big and beautiful. My friend is young, hardworking and very nice. Today I am tired, but happy.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_013_L001', speaker: 'Leon', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie ist das neue Café, Marie?', en: 'What is the new café like, Marie?' },
      { id: 'A1_013_L002', speaker: 'Marie', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es ist klein, aber sehr gemütlich. Der Kaffee ist stark und lecker.', en: 'It\'s small, but very cozy. The coffee is strong and delicious.' },
      { id: 'A1_013_L003', speaker: 'Leon', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und die Kellnerin?', en: 'And the waitress?' },
      { id: 'A1_013_L004', speaker: 'Marie', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sie ist sehr freundlich und schnell.', en: 'She is very friendly and fast.' }
    ],
    transcript: 'Wie ist das neue Café, Marie? Es ist klein, aber sehr gemütlich. Der Kaffee ist stark und lecker. Und die Kellnerin? Sie ist sehr freundlich und schnell.',
    translation: 'What is the new café like, Marie? It\'s small, but very cozy. The coffee is strong and delicious. And the waitress? She is very friendly and fast.',
    tokens: [
      { w: 'Wie' },
      { w: 'ist' },
      { w: 'das' },
      { w: 'neue' },
      { w: 'Café' },
      { w: ',', plain: true },
      { w: 'Marie' },
      { w: '?', plain: true },
      { w: 'Es' },
      { w: 'ist' },
      { w: 'klein' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sehr' },
      { w: 'gemütlich' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Kaffee' },
      { w: 'ist' },
      { w: 'stark' },
      { w: 'und' },
      { w: 'lecker' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Kellnerin' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'ist' },
      { w: 'sehr' },
      { w: 'freundlich' },
      { w: 'und' },
      { w: 'schnell' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie wird das neue Café beschrieben?', qEn: 'How is the new café described?', options: ['groß und laut', 'klein und gemütlich', 'alt und kalt', 'teuer und leer'], optionsEn: ['big and loud', 'small and cosy', 'old and cold', 'expensive and empty'], answer: 1,
        explain: '"Es ist klein, aber sehr gemütlich."' },
      { q: 'Wie ist die Kellnerin?', qEn: 'How is the waitress?', options: ['langsam und unfreundlich', 'freundlich und schnell', 'müde', 'still'], optionsEn: ['slow and unfriendly', 'friendly and fast', 'tired', 'quiet'], answer: 1,
        explain: '"Sie ist sehr freundlich und schnell."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wie ist das neue Café?", taskEn: "Your friend asks: what's the new café like?", de: "Es ist klein, aber sehr schön.", en: "It's small, but very nice." },
    { task: "Deine Freundin fragt: Wie geht es dir heute?", taskEn: "Your friend asks: how are you today?", de: "Mir geht es gut, aber ich bin müde.", en: "I'm fine, but I'm tired." },
    { task: "Deine Lehrerin fragt: Wie ist dein Zimmer?", taskEn: "Your teacher asks: what's your room like?", de: "Mein Zimmer ist klein und billig, aber toll.", en: "My room is small and cheap, but great." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five descriptive sentences with sein + adjective. Describe yourself (a feeling), a friend (a person), your room (a place) and two objects. Keep each adjective in its plain form after sein.',
    starters: ['Ich bin …', 'Mein Freund ist …', 'Mein Zimmer ist …'],
    placeholder: 'Ich bin müde, aber glücklich …',
    minWords: 15
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct sentence.',
      options: ['Das Buch ist interessante.', 'Das Buch ist interessant.', 'Das Buch interessant ist.', 'Das Buch hat interessant.'],
      answer: 1,
      explain: 'After sein the adjective has no ending: "Das Buch ist interessant."'
    },
    gap: {
      // sein + adjective + opposite.
      sentence: ['Ich bin nicht faul, ich bin ', '. Die Stadt ist nicht klein, sie ist ', '.'],
      gaps: [ { answer: 'fleißig', accepts: ['fleißig','fleissig'] }, { answer: 'groß', accepts: ['groß','gross'] } ],
      explain: 'Opposites: faul ↔ fleißig; klein ↔ groß.'
    },
    match: {
      q: 'Match each adjective to its opposite.',
      pairs: [
        { noun: 'groß', art: 'klein' },
        { noun: 'teuer', art: 'billig' },
        { noun: 'richtig', art: 'falsch' },
        { noun: 'fleißig', art: 'faul' }
      ]
    },
    builder: {
      target: 'Build: "The room is very big."',
      bank: ['ist', 'Das Zimmer', 'groß', 'sehr'],
      answer: ['Das Zimmer', 'ist', 'sehr', 'groß'],
      roles: { 'Das Zimmer': 'r-subject', 'ist': 'r-verb', 'sehr': 'r-adverb', 'groß': 'r-adjective' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'After "sein", a predicate adjective…', options: ['adds -e', 'adds -er', 'takes no ending', 'adds -en'], answer: 2,
      explain: 'After sein the adjective stays in its plain form — no ending.' },
    { q: 'Which verb describes a feeling? "Ich ___ müde."', options: ['habe', 'bin', 'mache', 'finde'], answer: 1,
      explain: 'Feelings use sein: "Ich bin müde."' },
    { q: 'What is the opposite of "teuer"?', options: ['groß', 'billig', 'neu', 'warm'], answer: 1,
      explain: 'teuer (expensive) ↔ billig (cheap).' },
    { q: 'The comparative of "groß" is…', options: ['großer', 'gröser', 'größer', 'mehr groß'], answer: 2,
      explain: 'groß → größer (with umlaut).' },
    { q: 'Comparison uses which word for "than"?', options: ['wie', 'als', 'dann', 'oder'], answer: 1,
      explain: '"größer als Bonn" — comparison uses als.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Describe with <span class="de">sein + adjective</span>: Das Buch <span class="de">ist interessant</span>, Ich <span class="de">bin müde</span>.' },
    { c: 'r-adjective', html: 'After sein the adjective takes <b>no ending</b> — plain dictionary form, any gender or number.' },
    { c: 'r-subject', html: 'Learn adjectives in opposite pairs (groß↔klein); compare with <span class="de">-er + als</span> (größer als).' }
  ],
  revisionTips: [
    'Describe three things around you right now: "… ist + adjective" — say them aloud.',
    'Learn every new adjective with its opposite; it doubles your words.',
    'For feelings always reach for sein, never haben: Ich bin müde / hungrig / glücklich.'
  ]
};

window.CHAPTER = CHAPTER;
