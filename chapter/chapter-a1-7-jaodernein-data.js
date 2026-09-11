/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 7
   "Ja oder Nein?"  (Yes/no questions & short answers)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-7 word list (20 words).
   Recycles Chapters 1–6 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-7-jaodernein',
  phase: 'A1 · Phase 1',
  number: 7,
  title: 'Ja oder Nein?',
  titleEn: 'Yes/No Questions',
  description: 'Half of every conversation is a yes/no question. In German you make one by moving the verb to the front — no question word needed. Learn the verb-first pattern, the short answers, and how to say "not" with nicht.',
  xp: 150,
  time: 45,
  difficulty: 'Beginner',
  nextChapter: { number: 8, title: 'Goethe Mini 1', titleEn: 'Phase 1 Checkpoint' , href: 'chapter-a1-8-goethemini1.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'To ask a yes/no question in German, just put the <span class="de r-verb">verb</span> first: <span class="de r-verb">Kommst</span> <span class="de r-subject">du</span> aus Indien? The answer is <span class="de r-subject">Ja</span> or <span class="de r-subject">Nein</span> — and to make it negative you add <span class="de r-negation">nicht</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is JA/NEIN-FRAGEN (yes/no questions): verb-first word order, short answers (Ja/Nein), and simple negation with nicht. ' +
    'The learner wrote some yes/no questions and/or short answers below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A yes/no question (Ja-/Nein-Frage) puts the conjugated VERB in first position, then the subject: "Kommst du aus Indien?", "Sprichst du Deutsch?", "Ist das ein Buch?".\n' +
    '- It contrasts with a statement (verb second: "Du kommst aus Indien.") and a W-question (W-word first: "Woher kommst du?").\n' +
    '- Answers: Ja (yes), Nein (no). A full answer repeats the idea: "Ja, ich komme aus Indien." / "Nein, ich komme nicht aus Indien."\n' +
    '- Negation: nicht usually comes at the end or directly before the word it negates: "Ich verstehe nicht.", "Das ist nicht richtig." (kein is used to negate a noun with an article, but this chapter focuses on nicht.)\n' +
    '- Questions end with a question mark; nouns and the polite Sie are capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (verb not first, or nicht misplaced). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-first check:</b> one sentence on whether the verb opens each yes/no question.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can ask, answer, and negate. On to your first checkpoint, Goethe Mini 1.',
    mid: 'Good. Re-read the verb-first card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Sprichst', role: 'r-verb' }, { w: 'du', role: 'r-subject' },
    { w: 'Deutsch', role: 'r-object' }, { w: '?', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Yes or <em>no?</em>',
    intro: 'After class, Ben checks if Mia has time, then finds out how well they actually understand each other — quick-fire yes/no questions, honest answers, and one classic "say that again?" moment.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear verb-first yes/no questions', 'nicht in action, plus a real misunderstanding'],
    scene: 'Nach dem Kurs — Deutschkurs',
    femaleSpeakers: ['Mia'],
    dialogue: [
      { speaker: 'Ben', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)', why: 'haben: du hast. Verb first = a yes/no question.', ex: 'Hast du Zeit?', exEn: 'Do you have time?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.', why: 'die Zeit; Hast du Zeit? = Do you have time?', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
        { w: '?', plain: true }
      ], en: 'Do you have time today?', hi: 'Aaj tumhaare paas time hai?' },
      { speaker: 'Mia', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HA-buh', type: 'Verb · haben (ich)' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: '?', plain: true }
      ], en: 'Yes, I have time. Why?', hi: 'Haan, mere paas time hai. Kyun?' },
      { speaker: 'Ben', tokens: [
        { w: 'Kommst', role: 'r-verb', en: 'do you come', hi: 'आते हो', pron: 'komst', type: 'Verb · kommen (du)', why: 'kommst du mit? = are you coming along? verb first.', ex: 'Kommst du mit?', exEn: 'Are you coming along?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Adverb (particle)' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gehe', role: 'r-verb', en: 'go', hi: 'जाता हूँ', pron: 'GAY-uh', type: 'Verb · gehen (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Are you coming along? I am going now.', hi: 'Saath aaoge? Main abhi jaa raha hoon.' },
      { speaker: 'Mia', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Sprichst', role: 'r-verb', en: 'do you speak', hi: 'बोलते हो', pron: 'SHPRIKHST', type: 'Verb · sprechen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adjective' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly! Do you speak German well?', hi: 'Haan, khushi se! Kya tum achhi tarah German bolte ho?' },
      { speaker: 'Ben', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer word' },
        { w: ',', plain: true },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'so', role: 'r-adverb', en: 'that', hi: 'उतना', pron: 'zo', type: 'Adverb', why: 'nicht so gut = not that good.', ex: 'Nicht so gut.', exEn: 'Not that good.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fair-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb', why: 'ich verstehe schon = I already understand.', ex: 'Ich verstehe schon.', exEn: 'I already understand.' },
        { w: '.', plain: true }
      ], en: 'No, not that good. But I already understand.', hi: 'Nahi, itna achha nahi. Par main pehle se samajhta hoon.' },
      { speaker: 'Mia', side: 'right', tokens: [
        { w: 'Verstehst', role: 'r-verb', en: 'do you understand', hi: 'समझते हो', pron: 'fair-SHTAYST', type: 'Verb · verstehen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Do you understand me now?', hi: 'Kya tum ab mujhe samajh rahe ho?' },
      { speaker: 'Ben', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '?', plain: true },
        { w: 'Sag', role: 'r-verb', en: 'say', hi: 'कहो', pron: 'zahk', type: 'Verb · imperative', why: 'sagen imperative: Sag das noch einmal!', ex: 'Sag das noch einmal!', exEn: 'Say that once more!' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-adverb', en: 'once', hi: 'फिर', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-adverb', en: 'more', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb', why: 'noch einmal = once more.', ex: 'noch einmal', exEn: 'once more' },
        { w: '!', plain: true }
      ], en: 'Sorry? Say that once more!', hi: 'Maaf kijiye? Ek baar phir kaho!' },
      { speaker: 'Mia', side: 'right', tokens: [
        { w: 'Verstehst', role: 'r-verb', en: 'understand', hi: 'समझते हो', pron: 'fair-SHTAYST', type: 'Verb · verstehen (du)' },
        { w: '—', plain: true },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '—', plain: true },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'Understand — you — me?', hi: 'Samajh — tum — mujhe?' },
      { speaker: 'Ben', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fair-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '!', plain: true }
      ], en: 'Yes! Now I understand.', hi: 'Haan! Ab main samajh gaya.' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the communication verbs and the words you need to ask, answer, and clarify.' },
    { id: 'grammar',    label: 'Yes/No Questions', tag: 'core',
      objective: 'Master verb-first question order, short answers (Ja/Nein), and simple negation with nicht.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a short yes/no exchange and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch yes/no questions and their short answers, then answer what you heard.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask and answer quick-fire yes/no questions with a partner.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write yes/no questions, short answers, and a small Q&A exchange.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill question building, short-answer choice, and negation with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The communication verbs and yes/no vocabulary with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Question building, short-answer choice, negation, mini-dialogues, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Verb-first questions, Ja/Nein answers, negation with nicht, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Verb zuerst', text: 'Build a yes/no question by putting the verb first' },
    { de: 'Ja / Nein', text: 'Answer yes/no questions naturally, short or full' },
    { de: 'nicht', text: 'Make a simple sentence negative with nicht' },
    { de: 'Entschuldigung', text: 'Ask politely to repeat or say you understand a little' },
    { de: 'Frage & Antwort', text: 'Hold a short yes/no exchange in real situations' }
  ],

  // ---------- Vocabulary (20 words) ----------
  vocab: [
    // — Core active (communication verbs) —
    { de: 'hören', pos: 'verb', en: 'to hear, listen', hi: 'सुनना',
      ex: 'Hörst du die Frage?', exEn: 'Do you hear the question?',
      conj: { praesens: 'hört', praeteritum: 'hörte', perfekt: 'hat gehört' } },
    { de: 'lesen', pos: 'verb', en: 'to read', hi: 'पढ़ना',
      ex: 'Liest du das Wort?', exEn: 'Are you reading the word?',
      conj: { praesens: 'liest', praeteritum: 'las', perfekt: 'hat gelesen' } },
    { de: 'sagen', pos: 'verb', en: 'to say', hi: 'कहना',
      ex: 'Sag das noch einmal!', exEn: 'Say that once more!',
      conj: { praesens: 'sagt', praeteritum: 'sagte', perfekt: 'hat gesagt' } },
    { de: 'schreiben', pos: 'verb', en: 'to write', hi: 'लिखना',
      ex: 'Schreibst du die Antwort?', exEn: 'Are you writing the answer?',
      conj: { praesens: 'schreibt', praeteritum: 'schrieb', perfekt: 'hat geschrieben' } },
    { de: 'sprechen', pos: 'verb', en: 'to speak', hi: 'बोलना',
      ex: 'Sprichst du Deutsch?', exEn: 'Do you speak German?',
      conj: { praesens: 'spricht', praeteritum: 'sprach', perfekt: 'hat gesprochen' } },
    { de: 'verstehen', pos: 'verb', en: 'to understand', hi: 'समझना',
      ex: 'Verstehst du die Frage?', exEn: 'Do you understand the question?',
      conj: { praesens: 'versteht', praeteritum: 'verstand', perfekt: 'hat verstanden' } },
    { de: 'nicht', pos: 'negation', en: 'not', hi: 'नहीं',
      ex: 'Ich verstehe das nicht.', exEn: 'I do not understand that.' },
    // — Active support —
    { de: 'bedeuten', pos: 'verb', en: 'to mean', hi: 'मतलब होना',
      ex: 'Was bedeutet das Wort?', exEn: 'What does the word mean?',
      conj: { praesens: 'bedeutet', praeteritum: 'bedeutete', perfekt: 'hat bedeutet' } },
    { de: 'Gespräch', art: 'das', gender: 'n', plural: 'Gespräche', pos: 'noun', en: 'conversation', hi: 'बातचीत',
      ex: 'Das Gespräch ist auf Deutsch.', exEn: 'The conversation is in German.' },
    { de: 'Dank', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'thanks', hi: 'धन्यवाद',
      ex: 'Vielen Dank für das Gespräch!', exEn: 'Many thanks for the conversation!' },
    { de: 'Dialog', art: 'der', gender: 'm', plural: 'Dialoge', pos: 'noun', en: 'dialogue', hi: 'संवाद',
      ex: 'Lest den Dialog zu zweit.', exEn: 'Read the dialogue in pairs.' },
    { de: 'Entschuldigung', art: 'die', gender: 'f', plural: 'Entschuldigungen', pos: 'noun', en: 'sorry; excuse me', hi: 'माफ़ कीजिए',
      ex: 'Entschuldigung, verstehst du das?', exEn: 'Excuse me, do you understand that?' },
    { de: 'ein bisschen', pos: 'phrase', en: 'a little', hi: 'थोड़ा',
      ex: 'Ich spreche ein bisschen Deutsch.', exEn: 'I speak a little German.' },
    // — Passive —
    { de: 'Wort', art: 'das', gender: 'n', plural: 'Wörter', pos: 'noun', en: 'word', hi: 'शब्द',
      ex: 'Was bedeutet dieses Wort?', exEn: 'What does this word mean?' },
    { de: 'Sprache', art: 'die', gender: 'f', plural: 'Sprachen', pos: 'noun', en: 'language', hi: 'भाषा',
      ex: 'Deutsch ist eine schöne Sprache.', exEn: 'German is a beautiful language.' },
    // — Reference / System —
    { de: 'Satz', art: 'der', gender: 'm', plural: 'Sätze', pos: 'noun', en: 'sentence', hi: 'वाक्य',
      ex: 'Bilde einen Satz.', exEn: 'Form a sentence.' },
    { de: 'Art', art: 'die', gender: 'f', plural: 'Arten', pos: 'noun', en: 'type, kind', hi: 'प्रकार',
      ex: 'Welche Art von Frage ist das?', exEn: 'What type of question is that?' },
    { de: 'Ja-/Nein-Frage', art: 'die', gender: 'f', plural: 'Ja-/Nein-Fragen', pos: 'noun', en: 'yes/no question', hi: 'हाँ/नहीं प्रश्न',
      ex: 'Eine Ja-/Nein-Frage beginnt mit dem Verb.', exEn: 'A yes/no question begins with the verb.' },
    { de: 'Weise', art: 'die', gender: 'f', plural: 'Weisen', pos: 'noun', en: 'manner, way', hi: 'तरीका',
      ex: 'Auf diese Weise fragt man.', exEn: 'This is the way you ask.' },
    { de: 'führen', pos: 'verb', en: 'to lead; to have (a conversation)', hi: 'चलाना (बातचीत)',
      ex: 'Wir führen ein Gespräch.', exEn: 'We have a conversation.',
      conj: { praesens: 'führt', praeteritum: 'führte', perfekt: 'hat geführt' } }
  ],

  // ---------- Yes/No Questions (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Three sentence types — spot the difference',
      goldenRule: 'German changes the <b>question</b> by moving the verb, not by adding a word.',
      formula: [
        'statement   :  Du <b>sprichst</b> Deutsch.      (verb 2)',
        'W-question  :  Woher <b>kommst</b> du?          (verb 2)',
        'yes/no      :  <b>Sprichst</b> du Deutsch?      (verb 1)'
      ],
      memoryTrick: 'Verb <b>doosri</b> seat = keh raha hoon. Verb <b>pehli</b> seat = poochh raha hoon.',
      body: [
        'German has three everyday sentence shapes, and they differ only by <b>where the verb goes</b>. You already know the first two; this chapter adds the third.'
      ],
      table: {
        head: ['Type', 'Verb position', 'Example'],
        rows: [
          ['Statement (Aussagesatz)', 'second', '<span class="de r-subject">Du</span> <span class="de r-verb">sprichst</span> Deutsch.'],
          ['W-question (W-Frage)', 'second (after W-word)', '<span class="de r-question">Woher</span> <span class="de r-verb">kommst</span> du?'],
          ['Yes/No question (Ja-/Nein-Frage)', '<b>first</b>', '<span class="de r-verb">Sprichst</span> <span class="de r-subject">du</span> Deutsch?']
        ]
      },
      note: 'The only thing that turns "Du sprichst Deutsch." into a question is moving <b>sprichst</b> to the front. No extra word needed.',
      hinglish: 'German mein teen sentence — farak sirf <b>verb kahan hai</b> isme. Statement: verb doosre (Du sprichst …). W-Frage: W-Wort ke baad verb doosre. <b>Ja-/Nein-Frage: verb sabse pehle</b> (Sprichst du …?). Bas verb ko aage le aao — naya shabd nahi chahiye.'
    },
    {
      title: 'Making a yes/no question: verb first',
      goldenRule: 'Swap the first two words. That is the entire operation.',
      why: 'English needs a helper — "<i>do</i> you speak?" — because English verbs stopped being able to move to the front. German verbs never lost that ability, so German just moves the verb and needs no helper at all.',
      memoryTrick: 'Subject aur verb ki jagah badal do: "Du kommst" → "Kommst du?" Kuch add nahi karna.',
      recap: [
        'Statement = subject + verb. Yes/no question = verb + subject.',
        'No German equivalent of "do/does" exists.',
        'The intonation rises at the end.'
      ],
      body: [
        'Take any statement, move the <span class="de r-verb">verb</span> to position 1, put the <span class="de r-subject">subject</span> right after it, add a question mark — done.'
      ],
      table: {
        head: ['Statement', '→ Yes/No question'],
        rows: [
          ['Du kommst aus Indien.', '<span class="de r-verb">Kommst</span> du aus Indien?'],
          ['Du verstehst das.', '<span class="de r-verb">Verstehst</span> du das?'],
          ['Das ist ein Buch.', '<span class="de r-verb">Ist</span> das ein Buch?'],
          ['Ihr lest den Dialog.', '<span class="de r-verb">Lest</span> ihr den Dialog?']
        ]
      },
      note: 'It is the mirror image of a statement: statement = subject + verb; yes/no question = verb + subject.',
      hinglish: 'Kisi bhi statement ka <b>verb</b> aage lao, <b>subject</b> uske baad, question mark lagao — ho gaya. "Du kommst …" → "<b>Kommst</b> du …?" Statement = subject+verb; yes/no question = verb+subject. Bilkul ulta.'
    },
    {
      title: 'Short answers & full answers',
      body: [
        'A yes/no question is answered with <span class="de r-subject">Ja</span> or <span class="de r-subject">Nein</span>. You can stop there (short answer) or repeat the idea (full answer) to sound more natural.'
      ],
      table: {
        head: ['Question', 'Short', 'Full answer'],
        rows: [
          ['Sprichst du Deutsch?', 'Ja.', 'Ja, ich spreche ein bisschen Deutsch.'],
          ['Kommst du aus Berlin?', 'Nein.', 'Nein, ich komme aus Indien.'],
          ['Verstehst du das?', 'Ja./Nein.', 'Nein, ich verstehe das nicht.']
        ]
      },
      note: 'If you do not catch the question, say <b>Entschuldigung?</b> or <b>Wie bitte?</b> and ask them to repeat.',
      hinglish: 'Jawaab <b>Ja</b> ya <b>Nein</b> se. Short answer (sirf "Ja.") theek hai, par full answer (idea dohra ke) zyada natural lagta hai: "Ja, ich spreche ein bisschen Deutsch." Samajh na aaye to <b>Entschuldigung?</b> ya <b>Wie bitte?</b> bolo.'
    },
    {
      title: 'Saying "no": negation with nicht',
      goldenRule: 'Negating the whole action → <b>nicht</b> at the end. Negating one word → <b>nicht</b> just before it.',
      memoryTrick: 'Hindi mein "nahi" verb se pehle aata hai, par German mein <b>nicht</b> verb ke baad aata hai. Aur agar sirf ek word ko negate karna ho, to <b>nicht</b> us word se theek pehle rakho.',
      body: [
        'To make a sentence negative, add <span class="de r-negation">nicht</span> (not). For now, two safe placements cover most A1 sentences.'
      ],
      table: {
        head: ['Rule', 'Example', 'Meaning'],
        rows: [
          ['nicht at the end (negates the verb)', 'Ich verstehe <span class="de r-negation">nicht</span>.', 'I do not understand.'],
          ['nicht before the word it negates', 'Das ist <span class="de r-negation">nicht</span> richtig.', 'That is not right.'],
          ['in a full answer', 'Nein, ich spreche <span class="de r-negation">nicht</span> Englisch.', 'No, I do not speak English.']
        ]
      },
      note: 'A1 tip: to negate the whole action, <b>nicht</b> usually goes at the end. (To negate a noun with an article you use "kein" — that comes later.)',
      hinglish: 'Negative banane ke liye <span class="de r-negation">nicht</span> lagta hai, aur iski do safe jagah hain. Agar poori action negate karni ho to <b>nicht</b> aksar sentence ke end mein aata hai: <b>Ich verstehe nicht</b>. Aur agar kisi khaas shabd ko negate karna ho to <b>nicht</b> us shabd se pehle aata hai: <b>Das ist nicht richtig</b>. Noun ko negate karne ke liye <b>kein</b> use hota hai, jo aage ke chapter mein aayega.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and three of them come from expecting German to work like English. The fourth is about sounding natural rather than being correct.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Du sprichst Deutsch? (for a question)', right: 'Sprichst du Deutsch?', why: 'For a yes/no question the verb must move to the front.' },
        { wrong: 'Using "do/does" like English', right: 'just move the verb', why: 'German has no "do"-helper: "Do you speak…?" = "Sprichst du…?"' },
        { wrong: 'Ich nicht verstehe.', right: 'Ich verstehe nicht.', why: 'nicht comes after the verb, usually at the end. Hindi puts the negative before the verb; German does not.' },
        { wrong: 'Kommst du aus Indien? — Ja.', right: 'Ja, ich komme aus Indien.', why: 'A bare Ja is correct but sounds clipped. Repeating the idea is what a German speaker actually does, and it also proves you understood the question.' }
      ],
      hinglish: 'Chaar galtiyan common hain. Sawaal banane ke liye verb aage aata hai: <b>Sprichst du Deutsch?</b>, na ki "Du sprichst…?". English ka "do/does" German mein nahi lagta — bas verb aage kar do. <b>nicht</b> verb ke baad ya sentence ke end mein aata hai: <b>Ich verstehe nicht</b>, na ki "Ich nicht verstehe". Aur jawaab mein poora sentence dohra dena zyada natural lagta hai.'
    }
  ],

  // ---------- Reading passage (yes/no dialogue, clickable words) ----------
  reading: {
    title: 'Im Kurs',
    titleEn: 'In the course',
    tokens: [
      { w: 'Sprichst', role: 'r-verb', en: 'speak', hi: 'बोलते हो', pron: 'SHPRIKHST', type: 'Verb · 1st position', why: 'A yes/no question opens with the verb. sch = "sh".', ex: 'Sprichst du Deutsch?', exEn: 'Do you speak German?', conj: { praesens: 'spricht', praeteritum: 'sprach', perfekt: 'hat gesprochen' }, advanced: { synonyms: ['reden'], opposites: ['schweigen'] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'Subject comes right after the verb in a yes/no question.', ex: 'Sprichst du Deutsch?', exEn: 'Do you speak German?' },
      { w: 'Deutsch', role: 'r-object', case: 'Akkusativ', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language', why: 'The language spoken — recycled from Chapter 6.', ex: 'Ich spreche Deutsch.', exEn: 'I speak German.' },
      { w: '?', plain: true },
      { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word', why: 'The positive short answer.', ex: 'Ja, ein bisschen.', exEn: 'Yes, a little.' },
      { w: ',', plain: true },
      { w: 'ein', role: 'r-article', en: 'a', hi: 'थोड़ा (part)', pron: 'ine', type: 'Phrase part', why: 'Part of "ein bisschen" = a little.', ex: 'ein bisschen', exEn: 'a little' },
      { w: 'bisschen', role: 'r-adverb', en: 'a little (bit)', hi: 'थोड़ा', pron: 'BIS-khen', type: 'Quantity phrase', why: '"ein bisschen" softens the answer: a little.', ex: 'Ich spreche ein bisschen Deutsch.', exEn: 'I speak a little German.' },
      { w: '.', plain: true },
      { w: 'Verstehst', role: 'r-verb', en: 'understand', hi: 'समझते हो', pron: 'fair-SHTAYST', type: 'Verb · 1st position', why: 'Another yes/no question — verb first. v = "f".', ex: 'Verstehst du das?', exEn: 'Do you understand that?', conj: { praesens: 'versteht', praeteritum: 'verstand', perfekt: 'hat verstanden' }, advanced: { synonyms: ['kapieren'], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'After the verb.', ex: 'Verstehst du das?', exEn: 'Do you understand that?' },
      { w: 'das', role: 'r-object', case: 'Akkusativ', en: 'that', hi: 'वह', pron: 'das', type: 'Pronoun · object', why: '"das" = that, the thing in question.', ex: 'Verstehst du das?', exEn: 'Do you understand that?' },
      { w: '?', plain: true },
      { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer word', why: 'The negative short answer.', ex: 'Nein, ich verstehe nicht.', exEn: 'No, I do not understand.' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject of the full answer.', ex: 'Ich verstehe nicht.', exEn: 'I do not understand.' },
      { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fair-SHTAY-uh', type: 'Verb · 1st person', why: 'verstehen for ich: verstehe.', ex: 'Ich verstehe das nicht.', exEn: 'I do not understand that.', conj: { praesens: 'versteht', praeteritum: 'verstand', perfekt: 'hat verstanden' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht at the end negates the verb: "do not understand".', ex: 'Ich verstehe nicht.', exEn: 'I do not understand.', advanced: { synonyms: [], opposites: [] } },
      { w: '.', plain: true },
      { w: 'Entschuldigung', role: 'r-subject', en: 'sorry, excuse me', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness', why: 'Used to ask for a repeat or to apologise.', ex: 'Entschuldigung, noch einmal?', exEn: 'Sorry, once more?' },
      { w: '!', plain: true }
    ],
    translation: 'Do you speak German? — Yes, a little. Do you understand that? — No, I do not understand. Sorry!'
  },

  // ---------- Listening ----------
  listening: {
    tokens: [
      { w: 'Mia' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'morgen' },
      { w: 'Zeit' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'keine' },
      { w: 'Zeit' },
      { w: '.', plain: true },
      { w: 'Kommst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Sonntag' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'am' },
      { w: 'Sonntag' },
      { w: 'komme' },
      { w: 'ich' },
      { w: '.', plain: true },
      { w: 'Verstehst' },
      { w: 'du' },
      { w: 'die' },
      { w: 'Hausaufgabe' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'verstehe' },
      { w: 'sie' },
      { w: 'nicht' },
      { w: 'ganz' },
      { w: '.', plain: true }
    ],
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_007_L001', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mia, hast du morgen Zeit?', en: 'Mia, do you have time tomorrow?' },
      { id: 'A1_007_L002', speaker: 'Mia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, ich habe keine Zeit.', en: 'No, I have no time.' },
      { id: 'A1_007_L003', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kommst du am Sonntag?', en: 'Are you coming on Sunday?' },
      { id: 'A1_007_L004', speaker: 'Mia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, am Sonntag komme ich.', en: 'Yes, I\'m coming on Sunday.' },
      { id: 'A1_007_L005', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehst du die Hausaufgabe?', en: 'Do you understand the homework?' },
      { id: 'A1_007_L006', speaker: 'Mia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, ich verstehe sie nicht ganz.', en: 'No, I don\'t quite understand it.' }
    ],
    transcript: 'Mia, hast du morgen Zeit? Nein, ich habe keine Zeit. Kommst du am Sonntag? Ja, am Sonntag komme ich. Verstehst du die Hausaufgabe? Nein, ich verstehe sie nicht ganz.',
    translation: 'Mia, do you have time tomorrow? No, I have no time. Are you coming on Sunday? Yes, I\'m coming on Sunday. Do you understand the homework? No, I don\'t quite understand it.',
    questions: [
      { q: 'Wann hat Mia Zeit zu kommen?', qEn: 'When does Mia have time to come?', options: ['morgen', 'am Sonntag', 'heute', 'nie'], optionsEn: ['tomorrow', 'on Sunday', 'today', 'never'], answer: 1,
        explain: '"Am Sonntag komme ich."' },
      { q: 'Versteht Mia die Hausaufgabe?', qEn: 'Does Mia understand the homework?', options: ['Ja, ganz', 'Nein, nicht ganz', 'Ja, ein bisschen', 'Sie weiß es nicht'], optionsEn: ['Yes, completely', 'No, not quite', 'Yes, a little', 'She doesn\'t know'], answer: 1,
        explain: '"Nein, ich verstehe sie nicht ganz."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Hast du morgen Zeit? Du hast keine Zeit.", taskEn: "Your partner asks: do you have time tomorrow? You don't.", de: "Nein, ich habe keine Zeit.", en: "No, I don't have time." },
    { task: "Frag deinen Partner zwei Ja-/Nein-Fragen über Deutsch.", taskEn: "Ask your partner two yes/no questions about German.", de: "Sprichst du Deutsch? Verstehst du die Hausaufgabe?", en: "Do you speak German? Do you understand the homework?" },
    { task: "Dein Partner fragt: Kommst du am Sonntag?", taskEn: "Your partner asks: are you coming on Sunday?", de: "Ja, am Sonntag komme ich.", en: "Yes, I'm coming on Sunday." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write four yes/no questions (verb first), each with a short answer (Ja/Nein). Then write a three-line mini-dialogue that uses nicht at least once. Recycle words from earlier chapters.',
    starters: ['Sprichst du …?', 'Kommst du aus …?', 'Verstehst du …?'],
    placeholder: 'Sprichst du Deutsch? — Ja, ein bisschen.',
    minWords: 14
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which is a correct yes/no question?',
      options: ['Du sprichst Deutsch?', 'Woher sprichst du?', 'Sprichst du Deutsch?', 'Deutsch du sprichst?'],
      answer: 2,
      explain: 'A yes/no question opens with the verb: "Sprichst du Deutsch?"'
    },
    gap: {
      // Build verb-first questions.
      sentence: ['', ' du das? — Nein, ich verstehe ', '.'],
      gaps: [ { answer: 'Verstehst', accepts: ['verstehst'] }, { answer: 'nicht', accepts: ['nicht'] } ],
      explain: 'Verstehst du das? — Nein, ich verstehe nicht. (verb first; nicht negates.)'
    },
    match: {
      q: 'Match each question to a natural answer.',
      pairs: [
        { noun: 'Sprichst du Deutsch?', art: 'Ja, ein bisschen.' },
        { noun: 'Kommst du aus Berlin?', art: 'Nein, aus Indien.' },
        { noun: 'Verstehst du das?', art: 'Nein, nicht alles.' },
        { noun: 'Bist du einundzwanzig?', art: 'Ja, genau.' }
      ]
    },
    builder: {
      target: 'Build the yes/no question: "Do you understand that?"',
      bank: ['das', 'Verstehst', 'du'],
      answer: ['Verstehst', 'du', 'das'],
      roles: { 'Verstehst': 'r-verb', 'du': 'r-subject', 'das': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you form a yes/no question in German?', options: ['Add "do" before the subject', 'Put the verb first', 'Use a W-word', 'Add "ka" at the end'], answer: 1,
      explain: 'Move the conjugated verb to first position: "Sprichst du Deutsch?"' },
    { q: 'Which sentence is a statement (not a question)?', options: ['Sprichst du Deutsch?', 'Du sprichst Deutsch.', 'Woher kommst du?', 'Verstehst du?'], answer: 1,
      explain: 'Verb in second position = statement: "Du sprichst Deutsch."' },
    { q: 'Complete the negative: "Ich verstehe ___."', options: ['nein', 'kein', 'nicht', 'nichts'], answer: 2,
      explain: 'nicht negates the verb: "Ich verstehe nicht."' },
    { q: 'A natural full answer to "Kommst du aus Berlin?" is…', options: ['Ja, Berlin.', 'Nein, ich komme aus Indien.', 'Woher?', 'Ein bisschen.'], answer: 1,
      explain: 'A full answer repeats the idea: "Nein, ich komme aus Indien."' },
    { q: 'You did not catch the question. You say…', options: ['Genau!', 'Entschuldigung?', 'Ja, danke.', 'Tschüs!'], answer: 1,
      explain: '"Entschuldigung?" (or "Wie bitte?") asks them to repeat.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'A yes/no question puts the <b>verb first</b>: <span class="de">Sprichst du Deutsch?</span> — no "do", no W-word.' },
    { c: 'r-subject', html: 'Answer with <span class="de">Ja</span> or <span class="de">Nein</span>; a full answer repeats the idea: <span class="de">Ja, ich spreche ein bisschen.</span>' },
    { c: 'r-negation', html: 'Make it negative with <span class="de">nicht</span> — usually at the end: <span class="de">Ich verstehe nicht.</span>' }
  ],
  revisionTips: [
    'Turn every statement you know into a yes/no question by fronting the verb.',
    'Practise short and full answers: "Ja." vs "Ja, ich komme aus Indien."',
    'Drop "nicht" into sentences to negate them — usually it lands at the end.'
  ]
};

window.CHAPTER = CHAPTER;
