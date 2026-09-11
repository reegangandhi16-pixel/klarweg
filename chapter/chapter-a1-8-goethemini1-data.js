/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 8
   "Goethe Mini 1"  (Phase 1 consolidation checkpoint)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded list (75 unique; "über" listed
   twice in the source and merged here).
   This is a REVISION chapter — it aggressively recycles Ch 1–7.
============================================================ */
const CHAPTER = {
  id: 'a1-8-goethemini1',
  phase: 'A1 · Phase 1',
  number: 8,
  title: 'Goethe Mini 1',
  titleEn: 'Phase 1 Checkpoint',
  description: 'Your first Goethe-style checkpoint. No new grammar — instead, everything from Chapters 1–7 comes back together: greet, introduce yourself, give numbers, ask W-Fragen and yes/no questions, and talk about countries and languages.',
  xp: 200,
  time: 50,
  difficulty: 'Checkpoint',
  nextChapter: { number: 9, title: 'Verben im Alltag', titleEn: 'Everyday Verbs' , href: 'chapter-a1-9-verben.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'Why a checkpoint',
    html: 'Memory is built by <span class="de r-verb">retrieval</span>, not rereading. This chapter pulls back everything from Chapters 1–7 — greetings, <span class="de r-subject">numbers</span>, introductions, <span class="de r-question">W-Fragen</span> and yes/no questions — and adds the words for <span class="de r-place">countries</span> and languages, so you can say where you and others are from.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'This is a CONSOLIDATION checkpoint (Goethe A1, Phase 1). It reviews greetings (Hallo, Guten Tag), introductions (Ich heiße…, Ich komme aus…, Ich wohne in…), numbers/age, W-Fragen (wer, was, wo, woher), yes/no questions (verb-first), and adds countries/languages/nationalities. ' +
    'The learner wrote a short self-introduction or profile below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Origin: "Ich komme aus …" + country (aus Indien, aus Deutschland). Residence: "Ich wohne in …" + place.\n' +
    '- Language vs nationality vs country: the language is capitalised (Deutsch, Englisch); "Ich spreche Deutsch." The country is a noun (Deutschland, die Türkei). The adjective of nationality is lower-case (deutsch).\n' +
    '- Some countries take an article: die Schweiz, die Türkei, die USA, der Iran → "aus der Schweiz", "aus der Türkei", "aus den USA". Most others take none: "aus Indien", "aus Deutschland".\n' +
    '- sein: ich bin, du bist, er/sie/es ist, wir/sie/Sie sind, ihr seid.\n' +
    '- W-question = W-word + verb second; yes/no question = verb first; statement = verb second.\n' +
    '- Nouns and the polite Sie are capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — excellent checkpoint work.</li>\n' +
    '3) <p><b>Goethe readiness:</b> one sentence on whether this would pass an A1 self-introduction.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Checkpoint passed — you are ready for Phase 2. Move on to <span class="de">Verben im Alltag</span>.',
    mid: 'Almost there. Revisit the chapters behind any missed questions, then retake.',
    low: 'Take another pass through Chapters 1–7, then come back to the checkpoint.'
  },

  parserSentence: [
    { w: 'Woher', role: 'r-question' }, { w: 'kommst', role: 'r-verb' },
    { w: 'du', role: 'r-subject' }, { w: 'genau', role: 'r-adverb' }, { w: '?', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The first <em>checkpoint.</em>',
    intro: 'A quick partner checkpoint. Nina interviews Daniel using everything from Chapters 1–7 — name, age, origin — and discovers he comes from a country whose language surprises her.',
    outcomes: ['Every word is clickable for meaning + audio', 'Recycles Chapters 1–7 in one scene', 'Meet countries, languages and nationalities'],
    scene: 'Mini-Test — Deutschkurs',
    femaleSpeakers: ['Nina'],
    dialogue: [
      { speaker: 'Nina', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vee', type: 'Question word' },
        { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'नाम है', pron: 'hysst', type: 'Verb · heißen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'woher', role: 'r-question', en: 'where from', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word' },
        { w: 'kommst', role: 'r-verb', en: 'come', hi: 'आते हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Hello! What is your name and where are you from?', hi: 'Namaste! Tumhaara naam kya hai aur kahaan se ho?' },
      { speaker: 'Daniel', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)' },
        { w: 'Daniel', role: 'r-name', en: 'Daniel', hi: 'डैनियल', pron: 'DAH-nyel', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'der', role: 'r-article', en: 'the (fem.)', hi: 'की', pron: 'dair', type: 'Article', why: 'die Türkei takes an article: aus der Türkei.', ex: 'aus der Türkei', exEn: 'from Turkey' },
        { w: 'Türkei', role: 'r-place', en: 'Turkey', hi: 'तुर्की', pron: 'tür-KYE', type: 'Noun · country' },
        { w: '.', plain: true }
      ], en: 'My name is Daniel. I come from Turkey.', hi: 'Mera naam Daniel hai. Main Turkey se hoon.' },
      { speaker: 'Nina', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कितने', pron: 'vee', type: 'Question word' },
        { w: 'alt', role: 'r-adjective', en: 'old', hi: 'उम्र', pron: 'alt', type: 'Adjective' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'sprichst', role: 'r-verb', en: 'do you speak', hi: 'बोलते हो', pron: 'SHPRIKHST', type: 'Verb · sprechen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'Türkisch', role: 'r-object', en: 'Turkish', hi: 'तुर्की भाषा', pron: 'tür-KISH', type: 'Noun · language' },
        { w: '?', plain: true }
      ], en: 'Good. How old are you? And do you speak Turkish?', hi: 'Achha. Tum kitne saal ke ho? Aur kya tum Turkish bolte ho?' },
      { speaker: 'Daniel', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'dreiundzwanzig', role: 'r-object', en: 'twenty-three', hi: 'तेईस', pron: 'DRY-unt-tsvan-tsikh', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spreche', role: 'r-verb', en: 'speak', hi: 'बोलता हूँ', pron: 'SHPRE-khuh', type: 'Verb · sprechen (ich)' },
        { w: 'Türkisch', role: 'r-object', en: 'Turkish', hi: 'तुर्की भाषा', pron: 'tür-KISH', type: 'Noun · language' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '.', plain: true }
      ], en: 'I am twenty-three. Yes, I speak Turkish and German.', hi: 'Main teiees ka hoon. Haan, main Turkish aur German bolta hoon.' },
      { speaker: 'Nina', tokens: [
        { w: 'Wunderbar', role: 'r-adjective', en: 'wonderful', hi: 'शानदार', pron: 'VUN-der-bar', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आती हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'Italien', role: 'r-place', en: 'Italy', hi: 'इटली', pron: 'i-TAH-lee-en', type: 'Noun · country' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spreche', role: 'r-verb', en: 'speak', hi: 'बोलती हूँ', pron: 'SHPRE-khuh', type: 'Verb · sprechen (ich)' },
        { w: 'Italienisch', role: 'r-object', en: 'Italian', hi: 'इतालवी', pron: 'i-tal-YAY-nish', type: 'Noun · language' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '.', plain: true }
      ], en: 'Wonderful! And I come from Italy. I speak Italian and German.', hi: 'Shaandaar! Aur main Italy se hoon. Main Italian aur German bolti hoon.' },
      { speaker: 'Daniel', side: 'right', tokens: [
        { w: 'Zwei', role: 'r-object', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: 'Sprachen', role: 'r-object', en: 'languages', hi: 'भाषाएँ', pron: 'SHPRAH-khen', type: 'Noun · plural', why: 'die Sprache → die Sprachen.', ex: 'zwei Sprachen', exEn: 'two languages' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Test', role: 'r-subject', en: 'test', hi: 'परीक्षा', pron: 'test', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Two languages. The test is not hard!', hi: 'Do bhashaayein. Test mushkil nahi hai!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See what this checkpoint covers and why retrieval matters.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review the new countries, languages, and classroom words — and recall earlier vocabulary.' },
    { id: 'grammar',    label: 'Review', tag: 'core',
      objective: 'Consolidate everything from Chapters 1–7: sounds, numbers, introductions, and questions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style profile that combines names, countries, numbers, and questions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a mixed Goethe A1-style conversation, then answer comprehension questions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Run a mini Goethe speaking simulation: introduce yourself and interview a partner.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a full Goethe-style self-introduction drawing on all seven chapters.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed-skill drills: numbers, question forms, countries, and error correction.' },
    { id: 'quiz',       label: 'Goethe Mini Test', tag: 'assess',
      objective: 'A simplified Goethe A1 checkpoint across every Phase 1 skill. Pass to bank 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'See what you have mastered and what to revisit before Phase 2.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download a full Phase 1 revision pack for offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Phase 1 Vocabulary PDF',
      desc: 'All words from Chapters 1–8 in one revision list, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Goethe Mini Test PDF',
      desc: 'A printable Goethe A1-style mini exam: reading, listening, writing, and speaking tasks with answer key.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Assessment' },
    { icon: '📖', title: 'Phase 1 Grammar Summary PDF',
      desc: 'Every rule from Chapters 1–7 on a few pages: sounds, numbers, introductions, and questions.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hallo → Tschüs', text: 'Greet and say goodbye in the right register' },
    { de: 'Ich heiße / komme aus', text: 'Introduce yourself: name, country, and home' },
    { de: '0 – 100', text: 'Give and understand numbers, age, and phone numbers' },
    { de: 'W- & Ja/Nein-Fragen', text: 'Ask and answer both question types' },
    { de: 'Länder & Sprachen', text: 'Say which country you are from and what you speak' }
  ],

  // ---------- Vocabulary (75 words) ----------
  // The Goethe-Mini set is country/language heavy. Countries with an
  // article carry art/gender; bare country & language names are proper nouns.
  vocab: [
    // — Core / Support —
    { de: 'sie (Pl.)', pos: 'pronoun', en: 'they', hi: 'वे',
      ex: 'Sie kommen aus Indien.', exEn: 'They come from India.' },
    { de: 'Land', art: 'das', gender: 'n', plural: 'Länder', pos: 'noun', en: 'country', hi: 'देश',
      ex: 'Aus welchem Land kommst du?', exEn: 'Which country do you come from?' },
    { de: 'Stadt', art: 'die', gender: 'f', plural: 'Städte', pos: 'noun', en: 'city', hi: 'शहर',
      ex: 'Delhi ist eine große Stadt.', exEn: 'Delhi is a big city.' },
    { de: 'Text', art: 'der', gender: 'm', plural: 'Texte', pos: 'noun', en: 'text', hi: 'पाठ',
      ex: 'Lies den Text laut.', exEn: 'Read the text aloud.' },
    { de: 'Deutsche', art: 'der/die', pos: 'noun', en: 'German (person)', hi: 'जर्मन (व्यक्ति)',
      ex: 'Anna ist Deutsche.', exEn: 'Anna is German (a German woman).' },
    { de: 'kurz', pos: 'adjective', en: 'short', hi: 'छोटा / संक्षिप्त',
      ex: 'Schreib einen kurzen Text.', exEn: 'Write a short text.',
      compare: { comparative: 'kürzer', superlative: 'am kürzesten' } },
    { de: 'zu zweit', pos: 'phrase', en: 'in pairs', hi: 'जोड़ी में',
      ex: 'Arbeitet zu zweit.', exEn: 'Work in pairs.' },
    { de: 'andere', pos: 'adjective', en: 'other', hi: 'अन्य',
      ex: 'Frag eine andere Person.', exEn: 'Ask another person.' },
    { de: 'gegenseitig', pos: 'adjective', en: 'mutual', hi: 'पारस्परिक',
      ex: 'Stellt euch gegenseitig vor.', exEn: 'Introduce each other (mutually).' },
    { de: 'international', pos: 'adjective', en: 'international', hi: 'अंतरराष्ट्रीय',
      ex: 'Der Kurs ist international.', exEn: 'The course is international.' },
    { de: 'deutschsprachig', pos: 'adjective', en: 'German-speaking', hi: 'जर्मनभाषी',
      ex: 'Die Schweiz ist deutschsprachig.', exEn: 'Switzerland is German-speaking.' },
    { de: 'darauf', pos: 'adverb', en: 'upon it, to it', hi: 'उस पर',
      ex: 'Reagiere darauf.', exEn: 'React to it.' },
    { de: 'über', pos: 'preposition (+A)', en: 'about', hi: 'के बारे में',
      ex: 'Wir sprechen über Länder.', exEn: 'We talk about countries.' },
    { de: 'reagieren', pos: 'verb', en: 'to react', hi: 'प्रतिक्रिया देना',
      ex: 'Wie reagierst du darauf?', exEn: 'How do you react to it?',
      conj: { praesens: 'reagiert', praeteritum: 'reagierte', perfekt: 'hat reagiert' } },
    // — Languages —
    { de: 'Deutsch', pos: 'language', en: 'German (language)', hi: 'जर्मन भाषा',
      ex: 'Ich spreche ein bisschen Deutsch.', exEn: 'I speak a little German.' },
    { de: 'deutsch', pos: 'adjective', en: 'German (adj.)', hi: 'जर्मन (विशेषण)',
      ex: 'Das ist ein deutsches Wort.', exEn: 'That is a German word.' },
    { de: 'Englisch', pos: 'language', en: 'English', hi: 'अंग्रेज़ी',
      ex: 'Sprichst du Englisch?', exEn: 'Do you speak English?' },
    { de: 'Französisch', pos: 'language', en: 'French', hi: 'फ़्रेंच',
      ex: 'In Frankreich spricht man Französisch.', exEn: 'In France people speak French.' },
    { de: 'Italienisch', pos: 'language', en: 'Italian', hi: 'इतालवी',
      ex: 'Italienisch klingt schön.', exEn: 'Italian sounds beautiful.' },
    { de: 'Spanisch', pos: 'language', en: 'Spanish', hi: 'स्पेनिश',
      ex: 'Spanisch spricht man in Spanien.', exEn: 'Spanish is spoken in Spain.' },
    { de: 'Portugiesisch', pos: 'language', en: 'Portuguese', hi: 'पुर्तगाली',
      ex: 'In Brasilien spricht man Portugiesisch.', exEn: 'In Brazil people speak Portuguese.' },
    { de: 'Russisch', pos: 'language', en: 'Russian', hi: 'रूसी',
      ex: 'Russisch hat ein anderes Alphabet.', exEn: 'Russian has a different alphabet.' },
    { de: 'Arabisch', pos: 'language', en: 'Arabic', hi: 'अरबी',
      ex: 'Arabisch schreibt man rechts nach links.', exEn: 'Arabic is written right to left.' },
    { de: 'Türkisch', pos: 'language', en: 'Turkish', hi: 'तुर्की',
      ex: 'Sie spricht Türkisch und Deutsch.', exEn: 'She speaks Turkish and German.' },
    { de: 'Polnisch', pos: 'language', en: 'Polish', hi: 'पोलिश',
      ex: 'Polnisch spricht man in Polen.', exEn: 'Polish is spoken in Poland.' },
    { de: 'Griechisch', pos: 'language', en: 'Greek', hi: 'यूनानी',
      ex: 'In Griechenland spricht man Griechisch.', exEn: 'In Greece people speak Greek.' },
    { de: 'Bulgarisch', pos: 'language', en: 'Bulgarian', hi: 'बल्गारियाई',
      ex: 'Bulgarisch ist eine slawische Sprache.', exEn: 'Bulgarian is a Slavic language.' },
    { de: 'Serbisch', pos: 'language', en: 'Serbian', hi: 'सर्बियाई',
      ex: 'Er lernt Serbisch.', exEn: 'He is learning Serbian.' },
    { de: 'Ungarisch', pos: 'language', en: 'Hungarian', hi: 'हंगेरियाई',
      ex: 'Ungarisch ist sehr schwer.', exEn: 'Hungarian is very hard.' },
    { de: 'Japanisch', pos: 'language', en: 'Japanese', hi: 'जापानी',
      ex: 'In Japan spricht man Japanisch.', exEn: 'In Japan people speak Japanese.' },
    { de: 'Indonesisch', pos: 'language', en: 'Indonesian', hi: 'इंडोनेशियाई',
      ex: 'Indonesisch ist leicht zu lesen.', exEn: 'Indonesian is easy to read.' },
    { de: 'Thai', pos: 'language', en: 'Thai', hi: 'थाई',
      ex: 'In Thailand spricht man Thai.', exEn: 'In Thailand people speak Thai.' },
    { de: 'Maori', pos: 'language', en: 'Maori', hi: 'माओरी',
      ex: 'Maori spricht man in Neuseeland.', exEn: 'Maori is spoken in New Zealand.' },
    { de: 'Rätoromanisch', pos: 'language', en: 'Raeto-Romanic', hi: 'रेटो-रोमांस',
      ex: 'Rätoromanisch spricht man in der Schweiz.', exEn: 'Raeto-Romanic is spoken in Switzerland.' },
    { de: 'Muttersprache', art: 'die', gender: 'f', plural: 'Muttersprachen', pos: 'noun', en: 'mother tongue', hi: 'मातृभाषा',
      ex: 'Meine Muttersprache ist Hindi.', exEn: 'My mother tongue is Hindi.' },
    // — Countries (no article) —
    { de: 'Deutschland', pos: 'country', en: 'Germany', hi: 'जर्मनी',
      ex: 'Ich komme aus Deutschland.', exEn: 'I come from Germany.' },
    { de: 'Österreich', pos: 'country', en: 'Austria', hi: 'ऑस्ट्रिया',
      ex: 'Wien ist in Österreich.', exEn: 'Vienna is in Austria.' },
    { de: 'Frankreich', pos: 'country', en: 'France', hi: 'फ़्रांस',
      ex: 'Paris ist in Frankreich.', exEn: 'Paris is in France.' },
    { de: 'Italien', pos: 'country', en: 'Italy', hi: 'इटली',
      ex: 'Ich komme aus Italien.', exEn: 'I come from Italy.' },
    { de: 'Spanien', pos: 'country', en: 'Spain', hi: 'स्पेन',
      ex: 'Madrid ist in Spanien.', exEn: 'Madrid is in Spain.' },
    { de: 'Portugal', pos: 'country', en: 'Portugal', hi: 'पुर्तगाल',
      ex: 'Lissabon ist in Portugal.', exEn: 'Lisbon is in Portugal.' },
    { de: 'Polen', pos: 'country', en: 'Poland', hi: 'पोलैंड',
      ex: 'Sie kommt aus Polen.', exEn: 'She comes from Poland.' },
    { de: 'Griechenland', pos: 'country', en: 'Greece', hi: 'यूनान',
      ex: 'Athen ist in Griechenland.', exEn: 'Athens is in Greece.' },
    { de: 'Ungarn', pos: 'country', en: 'Hungary', hi: 'हंगरी',
      ex: 'Budapest ist in Ungarn.', exEn: 'Budapest is in Hungary.' },
    { de: 'Dänemark', pos: 'country', en: 'Denmark', hi: 'डेनमार्क',
      ex: 'Dänemark liegt im Norden.', exEn: 'Denmark lies in the north.' },
    { de: 'Russland', pos: 'country', en: 'Russia', hi: 'रूस',
      ex: 'Russland ist sehr groß.', exEn: 'Russia is very big.' },
    { de: 'China', pos: 'country', en: 'China', hi: 'चीन',
      ex: 'China hat viele Städte.', exEn: 'China has many cities.' },
    { de: 'Japan', pos: 'country', en: 'Japan', hi: 'जापान',
      ex: 'Tokio ist in Japan.', exEn: 'Tokyo is in Japan.' },
    { de: 'Thailand', pos: 'country', en: 'Thailand', hi: 'थाईलैंड',
      ex: 'Ich komme aus Thailand.', exEn: 'I come from Thailand.' },
    { de: 'Kanada', pos: 'country', en: 'Canada', hi: 'कनाडा',
      ex: 'Kanada ist im Norden.', exEn: 'Canada is in the north.' },
    { de: 'Mexiko', pos: 'country', en: 'Mexico', hi: 'मेक्सिको',
      ex: 'Mexiko ist in Nordamerika.', exEn: 'Mexico is in North America.' },
    { de: 'Brasilien', pos: 'country', en: 'Brazil', hi: 'ब्राज़ील',
      ex: 'Brasilien ist in Südamerika.', exEn: 'Brazil is in South America.' },
    { de: 'Argentinien', pos: 'country', en: 'Argentina', hi: 'अर्जेंटीना',
      ex: 'Sie ist argentinisch — aus Argentinien.', exEn: 'She is Argentinian — from Argentina.' },
    { de: 'argentinisch', pos: 'adjective', en: 'Argentinian', hi: 'अर्जेंटीनी',
      ex: 'Das ist argentinisch.', exEn: 'That is Argentinian.' },
    { de: 'Neuseeland', pos: 'country', en: 'New Zealand', hi: 'न्यूज़ीलैंड',
      ex: 'Neuseeland liegt sehr weit weg.', exEn: 'New Zealand is very far away.' },
    { de: 'Indonesien', pos: 'country', en: 'Indonesia', hi: 'इंडोनेशिया',
      ex: 'Indonesien hat viele Inseln.', exEn: 'Indonesia has many islands.' },
    { de: 'Algerien', pos: 'country', en: 'Algeria', hi: 'अल्जीरिया',
      ex: 'Algerien ist in Afrika.', exEn: 'Algeria is in Africa.' },
    { de: 'Tunesien', pos: 'country', en: 'Tunisia', hi: 'ट्यूनीशिया',
      ex: 'Tunesien liegt am Meer.', exEn: 'Tunisia lies by the sea.' },
    { de: 'Syrien', pos: 'country', en: 'Syria', hi: 'सीरिया',
      ex: 'Sie kommt aus Syrien.', exEn: 'She comes from Syria.' },
    { de: 'Südamerika', pos: 'region', en: 'South America', hi: 'दक्षिण अमेरिका',
      ex: 'Brasilien ist in Südamerika.', exEn: 'Brazil is in South America.' },
    // — Countries (with article) —
    { de: 'Schweiz', art: 'die', gender: 'f', plural: '—', pos: 'country', en: 'Switzerland', hi: 'स्विट्ज़रलैंड',
      ex: 'Ich komme aus der Schweiz.', exEn: 'I come from Switzerland.' },
    { de: 'Türkei', art: 'die', gender: 'f', plural: '—', pos: 'country', en: 'Turkey', hi: 'तुर्की',
      ex: 'Er kommt aus der Türkei.', exEn: 'He comes from Turkey.' },
    { de: 'Ukraine', art: 'die', gender: 'f', plural: '—', pos: 'country', en: 'Ukraine', hi: 'यूक्रेन',
      ex: 'Kiew ist in der Ukraine.', exEn: 'Kyiv is in Ukraine.' },
    { de: 'Slowakei', art: 'die', gender: 'f', plural: '—', pos: 'country', en: 'Slovakia', hi: 'स्लोवाकिया',
      ex: 'Die Slowakei liegt in Europa.', exEn: 'Slovakia is in Europe.' },
    { de: 'Niederlande', art: 'die', plural: 'Niederlande', pos: 'country', en: 'Netherlands', hi: 'नीदरलैंड',
      ex: 'Amsterdam ist in den Niederlanden.', exEn: 'Amsterdam is in the Netherlands.' },
    { de: 'USA', art: 'die', plural: 'USA', pos: 'country', en: 'USA', hi: 'अमेरिका',
      ex: 'New York ist in den USA.', exEn: 'New York is in the USA.' },
    { de: 'Iran', art: 'der', gender: 'm', plural: '—', pos: 'country', en: 'Iran', hi: 'ईरान',
      ex: 'Teheran ist im Iran.', exEn: 'Tehran is in Iran.' },
    { de: 'Irak', art: 'der', gender: 'm', plural: '—', pos: 'country', en: 'Iraq', hi: 'इराक़',
      ex: 'Bagdad ist im Irak.', exEn: 'Baghdad is in Iraq.' },
    { de: 'Libanon', art: 'der', gender: 'm', plural: '—', pos: 'country', en: 'Lebanon', hi: 'लेबनान',
      ex: 'Beirut ist im Libanon.', exEn: 'Beirut is in Lebanon.' },
    { de: 'Jemen', art: 'der', gender: 'm', plural: '—', pos: 'country', en: 'Yemen', hi: 'यमन',
      ex: 'Der Jemen liegt im Süden.', exEn: 'Yemen lies in the south.' },
    // — Reference / System —
    { de: 'Befinden', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'well-being, how one feels', hi: 'हाल-चाल',
      ex: 'Man fragt nach dem Befinden: "Wie geht es dir?"', exEn: 'You ask after well-being: "How are you?"' },
    { de: 'Redemittel', art: 'das', gender: 'n', plural: 'Redemittel', pos: 'noun', en: 'useful phrase', hi: 'उपयोगी वाक्यांश',
      ex: '"Wie heißt du?" ist ein Redemittel.', exEn: '"What is your name?" is a useful phrase.' },
    { de: 'Grammatik', art: 'die', gender: 'f', plural: 'Grammatiken', pos: 'noun', en: 'grammar', hi: 'व्याकरण',
      ex: 'Die Grammatik ist nicht schwer.', exEn: 'The grammar is not hard.' },
    { de: 'Tafel', art: 'die', gender: 'f', plural: 'Tafeln', pos: 'noun', en: 'blackboard', hi: 'श्यामपट',
      ex: 'Schreib es an die Tafel.', exEn: 'Write it on the blackboard.' },
    { de: 'grüßen', pos: 'verb', en: 'to greet', hi: 'अभिवादन करना',
      ex: 'Wir grüßen mit "Hallo".', exEn: 'We greet with "Hallo".',
      conj: { praesens: 'grüßt', praeteritum: 'grüßte', perfekt: 'hat gegrüßt' } },
    { de: 'verabschieden', pos: 'verb', en: 'to say goodbye', hi: 'विदा लेना',
      ex: 'Wir verabschieden uns mit "Tschüs".', exEn: 'We say goodbye with "Tschüs".',
      conj: { praesens: 'verabschiedet', praeteritum: 'verabschiedete', perfekt: 'hat verabschiedet' } },
    { de: 'tauschen', pos: 'verb', en: 'to swap, exchange', hi: 'अदला-बदली करना',
      ex: 'Tauscht die Rollen.', exEn: 'Swap roles.',
      conj: { praesens: 'tauscht', praeteritum: 'tauschte', perfekt: 'hat getauscht' } }
  ],

  // ---------- Review (rule cards → accordion; consolidation, not new theory) ----------
  grammar: [
    {
      title: 'Sounds & numbers — a quick recall (Ch 1–3)',
      body: [
        'Before the new country words, recall the foundations. Pronunciation: <b>w</b>="v", <b>v</b>="f", <b>z</b>="ts", <b>ei</b>="eye", <b>ie</b>="ee"; a vowel before a double consonant is short. Numbers: 0–12 are memorised, teens add <b>-zehn</b>, tens add <b>-zig</b>, and 21–99 reverse: <span class="de r-object">einundzwanzig</span>.'
      ],
      table: {
        head: ['From', 'Recall', 'Example'],
        rows: [
          ['Ch 1–2', 'w = "v", z = "ts"', '<span class="de">Wasser</span> = "VA-ser"'],
          ['Ch 2', 'double consonant → short vowel', '<span class="de">Mann</span> (short a)'],
          ['Ch 3', 'reversal rule', '<span class="de r-object">einundzwanzig</span> = 21'],
          ['Ch 3', 'age', '<span class="de">Ich bin 21 Jahre alt.</span>']
        ]
      },
      note: 'These never stop being useful — every new word you meet is read with the Chapter 1–2 sound rules.',
      hinglish: 'Naye desh-shabd se pehle purana yaad karo. Sound: <b>w</b>="v", <b>v</b>="f", <b>z</b>="ts", double consonant = chhota vowel. Numbers: 0–12 yaad, teens <b>-zehn</b>, tens <b>-zig</b>, 21–99 ulta (<b>einundzwanzig</b>). Yeh sab har naye word mein kaam aata hai.'
    },
    {
      title: 'Greet & introduce — recall (Ch 4–5)',
      body: [
        'A first conversation: greet by register, then give your identity with <b>sein</b> and the fixed patterns.'
      ],
      table: {
        head: ['Function', 'Informal', 'Formal'],
        rows: [
          ['Greet', '<span class="de">Hallo</span>', '<span class="de">Guten Tag</span>'],
          ['Name', '<span class="de">Wie heißt du?</span>', '<span class="de">Wie heißen Sie?</span>'],
          ['Be', '<span class="de">du bist</span>', '<span class="de">Sie sind</span>'],
          ['Bye', '<span class="de">Tschüs</span>', '<span class="de">Auf Wiedersehen</span>']
        ]
      },
      note: 'Identity toolkit: <span class="de">Ich heiße …</span>, <span class="de">Mein Name ist …</span>, <span class="de">Ich komme aus …</span>, <span class="de">Ich wohne in …</span>.',
      hinglish: 'Pehli baat-cheet: register dekh ke greet karo, phir <b>sein</b> + fixed patterns se identity. Informal <b>du</b> / Hallo / Tschüs; formal <b>Sie</b> / Guten Tag / Auf Wiedersehen. Toolkit: Ich heiße…, Mein Name ist…, Ich komme aus…, Ich wohne in…'
    },
    {
      title: 'Two question types — recall (Ch 6–7)',
      body: [
        'Everything you ask is one of two shapes. The difference is just verb position.'
      ],
      table: {
        head: ['Type', 'Pattern', 'Example'],
        rows: [
          ['W-Frage', 'W-word + verb(2) + subject', '<span class="de r-question">Woher</span> kommst du?'],
          ['Ja/Nein-Frage', 'verb(1) + subject', '<span class="de r-verb">Kommst</span> du aus Indien?'],
          ['Answer (yes/no)', 'Ja / Nein (+ full)', 'Ja, ich komme aus Indien.'],
          ['Negation', 'nicht', 'Nein, ich spreche nicht Französisch.']
        ]
      },
      note: 'W-Frage opens with a W-word (verb second); a yes/no question opens with the verb (verb first). Statements keep the verb second.',
      hinglish: 'Do tarah ke sawaal hote hain, aur farak sirf verb ki jagah ka hai. <b>W-Frage</b> mein W-Wort pehle aata hai aur verb doosri jagah par: <b>Woher kommst du?</b> Aur <b>Ja/Nein-Frage</b> mein verb sabse pehle aata hai: <b>Kommst du …?</b> Jawaab <b>Ja</b> ya <b>Nein</b> se dete hain, aur negative banane ke liye <b>nicht</b> lagta hai.'
    },
    {
      title: 'New: countries, languages & nationalities',
      goldenRule: 'Country and language are <b>capitalised</b>; the nationality adjective is <b>lower-case</b>.',
      formula: [
        'Deutschland   (country, capital)',
        'Deutsch       (language, capital)',
        'deutsch       (adjective, small)'
      ],
      memoryTrick: 'Naam bade akshar se (<b>Deutschland, Deutsch</b>), par describe karne wala chhote se (<b>deutsch</b>). Aur zyada-tar desh ke saath article nahi — sirf kuch (<b>die</b> Türkei, <b>die</b> USA) lete hain.',
      recap: [
        'Country + language: capital letter.',
        'Nationality adjective: small letter.',
        'Most countries take no article; <b>die Türkei</b>, <b>die USA</b> do.'
      ],
      body: [
        'The one new idea this chapter: keep three things apart — the <b>country</b> (a place), the <b>language</b> (capitalised), and the <b>nationality adjective</b> (lower-case).'
      ],
      table: {
        head: ['Country', 'Language', 'Adjective', 'Origin'],
        rows: [
          ['<span class="de r-place">Deutschland</span>', '<span class="de">Deutsch</span>', 'deutsch', 'aus Deutschland'],
          ['<span class="de r-place">Frankreich</span>', '<span class="de">Französisch</span>', 'französisch', 'aus Frankreich'],
          ['<span class="de r-place">die Türkei</span>', '<span class="de">Türkisch</span>', 'türkisch', 'aus <b>der</b> Türkei'],
          ['<span class="de r-place">die USA</span>', '<span class="de">Englisch</span>', '—', 'aus <b>den</b> USA']
        ]
      },
      note: 'Most countries take no article (<i>aus Indien</i>), but a few do: <b>die</b> Schweiz, <b>die</b> Türkei, <b>die</b> Ukraine, <b>die</b> USA, <b>der</b> Iran/Irak — these become <i>aus der/den …</i>.',
      hinglish: 'Ek nayi cheez: teen alag rakho — <b>desh</b> (jagah), <b>bhasha</b> (capital: Deutsch), aur <b>nationality adjective</b> (chhota: deutsch). Zyadatar desh bina article (aus Indien), par kuch ke saath: <b>die</b> Schweiz/Türkei/USA, <b>der</b> Iran → "aus <b>der/den</b> …".'
    },
    {
      title: 'Checkpoint mistakes to avoid',
      whatIsIt: 'Four errors are the ones most likely to cost you points at A1 — two are spelling and capitalisation, two are choosing the wrong form.',
      body: [ 'Each row is a rule from this checkpoint, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Ich spreche deutsch', right: 'Ich spreche Deutsch', why: 'The language is a noun — capitalise it. Lower-case deutsch is the adjective.' },
        { wrong: 'aus die Schweiz', right: 'aus der Schweiz', why: 'aus takes the dative: die Schweiz → der Schweiz.' },
        { wrong: 'Kommst du? for origin', right: 'Woher kommst du?', why: 'Use a W-word for information; verb-first is only yes/no.' },
        { wrong: 'Kommen sie aus Indien? (meaning "do you?")', right: 'Kommen Sie aus Indien?', why: 'Lower-case sie is "they"; capital Sie is the polite "you". In writing the capital letter is the only thing telling them apart.' }
      ],
      hinglish: 'Chaar galtiyan A1 mein number kaat deti hain. Pehli, bhasha ka naam bade akshar se aata hai: <b>Ich spreche Deutsch</b> — chhota "deutsch" adjective hota hai. Doosri, <b>aus der Schweiz</b> sahi hai, kyunki <b>aus</b> ke baad Dativ aata hai. Teesri, origin poochhne ke liye <b>Woher kommst du?</b> chahiye, sirf "Kommst du?" nahi. Aur chauthi, <b>sie</b>, <b>sie</b> aur <b>Sie</b> ka farak yaad rakho — capital <b>Sie</b> ka matlab "aap" hota hai.'
    }
  ],

  // ---------- Reading passage (Goethe-style profile, clickable words) ----------
  reading: {
    title: 'Drei Personen im Kurs',
    titleEn: 'Three people in the course',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'this', hi: 'यह', pron: 'das', type: 'Pronoun', why: '"Das ist …" introduces a person.', ex: 'Das ist Anna.', exEn: 'This is Anna.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein, er/sie/es form.', ex: 'Das ist Anna.', exEn: 'This is Anna.', advanced: { synonyms: [], opposites: [] } },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'AH-nah', type: 'Name', why: 'Recurring character from earlier chapters.', ex: 'Das ist Anna.', exEn: 'This is Anna.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', case: 'Nominativ', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'Lower meaning "she" — with "kommt".', ex: 'Sie kommt aus Indien.', exEn: 'She comes from India.' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आती है', pron: 'komt', type: 'Verb · 3rd person', why: 'kommen, er/sie/es: kommt.', ex: 'Sie kommt aus Indien.', exEn: 'She comes from India.', advanced: { synonyms: [], opposites: ['geht'] } },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition + dat.', why: 'Origin: aus + country.', ex: 'aus Indien', exEn: 'from India' },
      { w: 'Indien', role: 'r-place', case: 'Dativ', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Country', why: 'No article → aus Indien.', ex: 'aus Indien', exEn: 'from India' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'und sie ist 21', exEn: 'and she is 21' },
      { w: 'spricht', role: 'r-verb', en: 'speaks', hi: 'बोलती है', pron: 'shprikht', type: 'Verb · 3rd person', why: 'sprechen, er/sie/es: spricht.', ex: 'Sie spricht Hindi und Deutsch.', exEn: 'She speaks Hindi and German.', advanced: { synonyms: ['redet'], opposites: [] } },
      { w: 'Deutsch', role: 'r-object', case: 'Akkusativ', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Language', why: 'Language is capitalised.', ex: 'Sie spricht Deutsch.', exEn: 'She speaks German.' },
      { w: '.', plain: true },
      { w: 'Woher', role: 'r-question', en: 'from where', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word', why: 'Asks origin — answer with aus.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
      { w: 'kommst', role: 'r-verb', en: 'come', hi: 'आते हो', pron: 'komst', type: 'Verb · 2nd position', why: 'W-Frage: verb second.', ex: 'Woher kommst du?', exEn: 'Where are you from?', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun', why: 'After the verb.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
      { w: '?', plain: true },
      { w: 'Sprichst', role: 'r-verb', en: 'speak', hi: 'बोलते हो', pron: 'shprikhst', type: 'Verb · 1st position', why: 'Yes/no question: verb first.', ex: 'Sprichst du Deutsch?', exEn: 'Do you speak German?', conj: { praesens: 'spricht', praeteritum: 'sprach', perfekt: 'hat gesprochen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun', why: 'After the verb in a yes/no question.', ex: 'Sprichst du Deutsch?', exEn: 'Do you speak German?' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb', why: 'auch = also/too (from Ch 4).', ex: 'Ich auch.', exEn: 'Me too.' },
      { w: 'Englisch', role: 'r-object', case: 'Akkusativ', en: 'English', hi: 'अंग्रेज़ी', pron: 'ENG-lish', type: 'Language', why: 'Language, capitalised.', ex: 'Sprichst du Englisch?', exEn: 'Do you speak English?' },
      { w: '?', plain: true }
    ],
    translation: 'This is Anna. She comes from India and speaks German. Where are you from? Do you also speak English?'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_008_L001', speaker: 'Nina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Daniel, hast du dich schon für den Kurs angemeldet?', en: 'Daniel, have you already signed up for the course?' },
      { id: 'A1_008_L002', speaker: 'Daniel', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich heiße Daniel und ich komme aus Indien.', en: 'Yes, my name is Daniel and I come from India.' },
      { id: 'A1_008_L003', speaker: 'Nina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wo wohnst du jetzt?', en: 'And where do you live now?' },
      { id: 'A1_008_L004', speaker: 'Daniel', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich wohne in Wien, in Österreich.', en: 'I live in Vienna, Austria.' },
      { id: 'A1_008_L005', speaker: 'Nina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Perfekt, alles ist richtig in der Liste!', en: 'Perfect, everything is correct on the list!' }
    ],
    transcript: 'Daniel, hast du dich schon für den Kurs angemeldet? Ja, ich heiße Daniel und ich komme aus Indien. Und wo wohnst du jetzt? Ich wohne in Wien, in Österreich. Perfekt, alles ist richtig in der Liste!',
    translation: 'Daniel, have you already signed up for the course? Yes, my name is Daniel and I come from India. And where do you live now? I live in Vienna, Austria. Perfect, everything is correct on the list!',
    tokens: [
      { w: 'Daniel' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'schon' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Kurs' },
      { w: 'angemeldet' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'heiße' },
      { w: 'Daniel' },
      { w: 'und' },
      { w: 'ich' },
      { w: 'komme' },
      { w: 'aus' },
      { w: 'Indien' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wo' },
      { w: 'wohnst' },
      { w: 'du' },
      { w: 'jetzt' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'wohne' },
      { w: 'in' },
      { w: 'Wien' },
      { w: ',', plain: true },
      { w: 'in' },
      { w: 'Österreich' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'alles' },
      { w: 'ist' },
      { w: 'richtig' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Liste' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was kontrolliert Nina?', qEn: 'What is Nina checking?', options: ['Daniels Hausaufgabe', 'Die Anmeldeliste für den Kurs', 'Eine Speisekarte', 'Einen Zugfahrplan'], optionsEn: ['Daniel\'s homework', 'The course sign-up list', 'A menu', 'A train schedule'], answer: 1,
        explain: '"Alles ist richtig in der Liste!" — she is confirming his registration details.' },
      { q: 'Wo wohnt Daniel jetzt?', qEn: 'Where does Daniel live now?', options: ['In Indien', 'In Wien, Österreich', 'In Berlin', 'In der Schweiz'], optionsEn: ['in India', 'in Vienna, Austria', 'in Berlin', 'in Switzerland'], answer: 1,
        explain: '"Ich wohne in Wien, in Österreich."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich kurz vor — Name, Land, Stadt.", taskEn: "Exam, Part 1: introduce yourself briefly — name, country, city.", de: "Ich heiße Daniel. Ich komme aus Indien und ich wohne in Wien.", en: "My name is Daniel. I'm from India and I live in Vienna." },
    { task: "Prüfung, Teil 2: Frag deinen Partner nach seinen Sprachen und antworte auch.", taskEn: "Exam, Part 2: ask your partner about languages and answer too.", de: "Welche Sprachen sprichst du? — Ich spreche Englisch und ein bisschen Deutsch.", en: "Which languages do you speak? — I speak English and a little German." },
    { task: "Prüfung, Teil 3: Dein Partner fragt, wo du wohnst. Antworte kurz.", taskEn: "Exam, Part 3: your partner asks where you live. Answer briefly.", de: "Ich wohne in Wien, in Österreich.", en: "I live in Vienna, in Austria." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a full Goethe-style self-introduction (5–6 lines): greet, give your name, say which country you come from and which city you live in, your age (a number word), and the languages you speak. End with a goodbye.',
    starters: ['Hallo! Ich heiße …', 'Ich komme aus … und wohne in …', 'Ich spreche … Tschüs!'],
    placeholder: 'Hallo! Ich heiße … Ich komme aus …',
    minWords: 18
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which is correct?',
      options: ['Ich spreche deutsch.', 'Ich spreche Deutsch.', 'Ich spreche aus Deutsch.', 'Ich bin Deutsch sprechen.'],
      answer: 1,
      explain: 'The language is a noun and is capitalised: "Ich spreche Deutsch."'
    },
    gap: {
      // Origin with article-country (dative).
      sentence: ['Ich komme aus ', ' Schweiz und spreche ', '.'],
      gaps: [ { answer: 'der', accepts: ['der'] }, { answer: 'Deutsch', accepts: ['deutsch'] } ],
      explain: 'die Schweiz takes an article → "aus der Schweiz"; the language is capitalised: Deutsch.'
    },
    match: {
      q: 'Match each country to its language.',
      pairs: [
        { noun: 'Frankreich', art: 'Französisch' },
        { noun: 'Spanien', art: 'Spanisch' },
        { noun: 'Japan', art: 'Japanisch' },
        { noun: 'die Türkei', art: 'Türkisch' }
      ]
    },
    builder: {
      target: 'Build: "Where do you come from?"',
      bank: ['kommst', 'Woher', 'du'],
      answer: ['Woher', 'kommst', 'du'],
      roles: { 'Woher': 'r-question', 'kommst': 'r-verb', 'du': 'r-subject' }
    }
  },

  // ---------- Goethe Mini Test (5 mixed-skill questions) ----------
  quiz: [
    { q: 'Reading: "Anna kommt aus Indien." Where is Anna from?', options: ['Germany', 'India', 'Austria', 'Turkey'], answer: 1,
      explain: 'aus Indien = from India.' },
    { q: 'Numbers: How do you write 21?', options: ['zwanzigeins', 'einundzwanzig', 'einzwanzig', 'zwei und zehn'], answer: 1,
      explain: 'Reversal rule (Ch 3): einundzwanzig.' },
    { q: 'Questions: Which asks for origin?', options: ['Wie heißt du?', 'Woher kommst du?', 'Wer bist du?', 'Sprichst du?'], answer: 1,
      explain: 'Woher = from where → origin.' },
    { q: 'Yes/No: Choose the correct question.', options: ['Du sprichst Deutsch?', 'Sprichst du Deutsch?', 'Woher Deutsch du?', 'Deutsch sprichst?'], answer: 1,
      explain: 'Yes/no question = verb first: "Sprichst du Deutsch?"' },
    { q: 'Country: Complete "Ich komme aus ___ Türkei."', options: ['die', 'der', 'den', '—'], answer: 1,
      explain: 'die Türkei + aus (dative) → "aus der Türkei".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'You can now run a full A1 self-introduction: greet, name, country, city, age, languages, goodbye.' },
    { c: 'r-question', html: 'You command both question types — <span class="de">Woher kommst du?</span> (W) and <span class="de">Sprichst du Deutsch?</span> (yes/no).' },
    { c: 'r-place', html: 'New skill: countries vs languages vs nationality — and the article countries (<span class="de">aus der Schweiz</span>).' }
  ],
  revisionTips: [
    'Re-record your self-introduction and compare it with your first attempt in Chapter 4.',
    'Drill country → language pairs (Frankreich → Französisch) until they are automatic.',
    'Mix question types in one conversation: a W-Frage, then a yes/no question, then answer both.'
  ]
};

window.CHAPTER = CHAPTER;
