/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 3
   "Zahlen 0–100"  (German numbers 0–100)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-3 word list (39 words).
   Recycles Chapter 1 (Alphabet) & Chapter 2 (Vokale) throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-3-zahlen',
  phase: 'A1 · Phase 1',
  number: 3,
  title: 'Zahlen 0–100',
  titleEn: 'Numbers 0–100',
  description: 'Numbers run through every real conversation — your age, a price, a phone number. Learn the building blocks 0–12, the -zehn teens, the -zig tens, and the one reversal rule that makes every number up to 100 click into place.',
  xp: 140,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 4, title: 'Hallo!', titleEn: 'Greetings & Introductions' , href: 'chapter-a1-4-hallo.html' },

  prevChapter: { number: 2, title: 'Vokale & Laute', titleEn: 'Vowels & Sounds', href: 'chapter-a1-2-vokale.html' },
  // No grammar animation for this chapter — renderer skips the Watch First block.
  heroAnimationPath: null,

  // Overview "one idea" card.
  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German says two-digit numbers <span class="de r-subject">backwards</span>: <span class="de r-object">einundzwanzig</span> is literally "one-and-twenty". Learn 0–12, the teens, and the tens — then just flip the order, and every number to 100 is yours.'
  },

  // Writing AI-tutor prompt (numbers-focused). "{{TEXT}}" → learner input.
  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is NUMBERS 0–100 (counting, age, prices, phone numbers, quantities). ' +
    'The learner wrote the text below — usually numbers written as words, an age, or a price.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'NUMBER ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Two-digit numbers are written as ONE word, units BEFORE tens, joined by "und": 21 = einundzwanzig, 47 = siebenundvierzig.\n' +
    '- Before "und" the number 1 is "ein" (not "eins"): 21 = EINundzwanzig, not einsundzwanzig.\n' +
    '- Spelling traps: 16 = sechzehn (not sechszehn), 17 = siebzehn (not siebenzehn), 30 = dreißig (with ß, not -zig).\n' +
    '- Tens: 20 zwanzig, 30 dreißig, 40 vierzig, 50 fünfzig, 60 sechzig, 70 siebzig, 80 achtzig, 90 neunzig.\n' +
    '- Age: "Ich bin ... Jahre alt." Prices: the number + "Euro". Phone numbers are read digit by digit.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong form in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (order, spelling, or ein/eins). If there are no errors, write a single <li>No number errors — well done.</li>\n' +
    '3) <p><b>Order check:</b> one sentence on whether units-before-tens and the joining "und" are correct.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  // Quiz result recommendations by performance tier.
  quizRecommendation: {
    high: 'Excellent — you can count, price, and dial in German. Move on to <span class="de">Hallo!</span>',
    mid: 'Good. Re-read the reversal rule once (einundzwanzig), then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  // Live Sentence Parser concept sentence (tokens drive role colours).
  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'bin', role: 'r-verb' },
    { w: 'einundzwanzig', role: 'r-object' }, { w: 'Jahre', role: 'r-time' },
    { w: 'alt', role: 'r-adjective' }
  ],

  // Curriculum sections (identical structure to Ch1/Ch2).
  story: {
    eyebrow: 'Story-based learning',
    headline: 'By the <em>numbers.</em>',
    intro: 'Third lesson, and two classmates finally get properly acquainted — names, ages, and the all-important phone-number swap. Emma reels off her digits; Tim needs them a little slower.',
    outcomes: ['Every number is clickable for meaning + audio', 'Hear the reversal rule: einundzwanzig', 'Two classmates swap ages and numbers'],
    scene: 'Zahlen üben — Deutschkurs',
    femaleSpeakers: ['Emma'],
    dialogue: [
      { speaker: 'Tim', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)', why: 'ich heiße = my name is.', ex: 'Ich heiße Tim.', exEn: 'My name is Tim.' },
        { w: 'Tim', role: 'r-name', en: 'Tim', hi: 'टिम', pron: 'tim', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Hello! My name is Tim. And you?', hi: 'Namaste! Mera naam Tim hai. Aur tum?' },
      { speaker: 'Emma', side: 'right', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Tim', role: 'r-name', en: 'Tim', hi: 'टिम', pron: 'tim', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'Emma', role: 'r-name', en: 'Emma', hi: 'एमा', pron: 'E-ma', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कितने', pron: 'vee', type: 'Question word', why: 'Wie alt …? = How old …?', ex: 'Wie alt bist du?', exEn: 'How old are you?' },
        { w: 'alt', role: 'r-adjective', en: 'old', hi: 'उम्र', pron: 'alt', type: 'Adjective', why: 'wie alt = how old.', ex: 'Wie alt bist du?', exEn: 'How old are you?' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Hi Tim! I am Emma. How old are you?', hi: 'Hi Tim! Main Emma hoon. Tum kitne saal ke ho?' },
      { speaker: 'Tim', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'dreiundzwanzig', role: 'r-object', en: 'twenty-three', hi: 'तेईस', pron: 'DRY-unt-tsvan-tsikh', type: 'Number', why: 'reversal: drei + und + zwanzig, one word.', ex: 'Ich bin dreiundzwanzig.', exEn: 'I am twenty-three.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I am twenty-three. And you?', hi: 'Main teiees ka hoon. Aur tum?' },
      { speaker: 'Emma', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'einundzwanzig', role: 'r-object', en: 'twenty-one', hi: 'इक्कीस', pron: 'INE-unt-tsvan-tsikh', type: 'Number', why: 'reversal: ein + und + zwanzig — ein, not eins.', ex: 'Ich bin einundzwanzig.', exEn: 'I am twenty-one.' },
        { w: 'Jahre', role: 'r-time', en: 'years', hi: 'साल', pron: 'YAH-ruh', type: 'Noun · time', why: '… Jahre alt = … years old.', ex: 'einundzwanzig Jahre alt', exEn: 'twenty-one years old' },
        { w: 'alt', role: 'r-adjective', en: 'old', hi: 'का', pron: 'alt', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I am twenty-one years old.', hi: 'Main ikkees saal ki hoon.' },
      { speaker: 'Tim', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'nice', hi: 'बढ़िया', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vee', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'deine', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'DY-nuh', type: 'Possessive · nom.', why: 'deine Handynummer = your mobile number (nominative).', ex: 'deine Nummer', exEn: 'your number' },
        { w: 'Handynummer', role: 'r-subject', en: 'mobile number', hi: 'मोबाइल नंबर', pron: 'HEN-di-nu-mer', type: 'Noun · fem.', why: 'die Handynummer; read digit by digit.', ex: 'Wie ist deine Handynummer?', exEn: 'What is your mobile number?' },
        { w: '?', plain: true }
      ], en: 'Nice! What is your mobile number?', hi: 'Badhiya! Tumhaara mobile number kya hai?' },
      { speaker: 'Emma', side: 'right', tokens: [
        { w: 'Null', role: 'r-object', en: 'zero', hi: 'शून्य', pron: 'nul', type: 'Number' },
        { w: ',', plain: true },
        { w: 'eins', role: 'r-object', en: 'one', hi: 'एक', pron: 'ines', type: 'Number' },
        { w: ',', plain: true },
        { w: 'sieben', role: 'r-object', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: ',', plain: true },
        { w: 'vier', role: 'r-object', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: ',', plain: true },
        { w: 'neun', role: 'r-object', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: ',', plain: true },
        { w: 'zwei', role: 'r-object', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'Zero, one, seven, four, nine, two.', hi: 'Null, eins, sieben, vier, neun, zwei.' },
      { speaker: 'Tim', tokens: [
        { w: 'Null', role: 'r-object', en: 'zero', hi: 'शून्य', pron: 'nul', type: 'Number' },
        { w: ',', plain: true },
        { w: 'eins', role: 'r-object', en: 'one', hi: 'एक', pron: 'ines', type: 'Number' },
        { w: ',', plain: true },
        { w: 'sieben', role: 'r-object', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: '…', plain: true },
        { w: 'langsam', role: 'r-adverb', en: 'slowly', hi: 'धीरे', pron: 'LANG-zahm', type: 'Adverb', why: 'langsam = slowly (Ch2).', ex: 'Sprich langsam!', exEn: 'Speak slowly!' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Zero, one, seven … slowly, please!', hi: 'Null, eins, sieben … dheere, kripya!' },
      { speaker: 'Emma', side: 'right', tokens: [
        { w: '…', plain: true },
        { w: 'vier', role: 'r-object', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: ',', plain: true },
        { w: 'neun', role: 'r-object', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: ',', plain: true },
        { w: 'zwei', role: 'r-object', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'मिल गया', pron: 'hast', type: 'Verb · haben (du)', why: 'Hast du das? = Did you get that?', ex: 'Hast du Zeit?', exEn: 'Do you have time?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: '… four, nine, two. Did you get that?', hi: '… vier, neun, zwei. Mil gaya?' },
      { speaker: 'Tim', tokens: [
        { w: 'Ja', role: 'r-adverb', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Particle' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'Emma', role: 'r-name', en: 'Emma', hi: 'एमा', pron: 'E-ma', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)', why: 'bis später = see you later.', ex: 'Bis später!', exEn: 'See you later!' },
        { w: 'später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SHPAY-ter', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Yes! Thanks, Emma. See you later!', hi: 'Haan! Dhanyavaad, Emma. Baad mein milte hain!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the numbers 0–29, the tens, and the words you need for prices, ages, and phone numbers.' },
    { id: 'grammar',    label: 'Number System', tag: 'core',
      objective: 'Master 0–12, the -zehn teens, the -zig tens, and the units-before-tens reversal rule.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a café scene full of numbers and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch ages, prices, and a phone number in natural speech, then answer what you heard.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Count aloud, say your age, give a phone number, and state a price.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write your age, a price, and a phone number as full German words.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill number recognition, building, and the reversal rule with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 140 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 39 number words with translations, examples, and the building patterns.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Counting drills, price and age tasks, phone-number dictation, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Number Rules PDF',
      desc: 'Every pattern 0–100, the reversal rule, spelling traps, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: '0 – 12', text: 'Say the building-block numbers you have to memorise' },
    { de: '-zehn / -zig', text: 'Form the teens and the tens from the base numbers' },
    { de: 'einundzwanzig', text: 'Build any two-digit number with the reversal rule' },
    { de: 'Jahre alt', text: 'State your age and ask someone else\'s' },
    { de: 'Euro · Nummer', text: 'Understand prices and read out a phone number' }
  ],

  // ---------- Vocabulary (39 words from the uploaded source) ----------
  // Numbers carry no article; the 6 nouns do. pos drives the card label.
  vocab: [
    { de: 'null', pos: 'number', en: 'zero', hi: 'शून्य',
      ex: 'Null Fehler — sehr gut!', exEn: 'Zero mistakes — very good!' },
    { de: 'eins', pos: 'number', en: 'one', hi: 'एक',
      ex: 'Ich habe ein Buch — Nummer eins.', exEn: 'I have one book — number one.' },
    { de: 'zwei', pos: 'number', en: 'two', hi: 'दो',
      ex: 'Zwei Äpfel, bitte.', exEn: 'Two apples, please.' },
    { de: 'drei', pos: 'number', en: 'three', hi: 'तीन',
      ex: 'Drei plus zwei ist fünf.', exEn: 'Three plus two is five.' },
    { de: 'vier', pos: 'number', en: 'four', hi: 'चार',
      ex: 'Der Hund ist vier Jahre alt.', exEn: 'The dog is four years old.' },
    { de: 'fünf', pos: 'number', en: 'five', hi: 'पाँच',
      ex: 'Das kostet fünf Euro.', exEn: 'That costs five euros.' },
    { de: 'sechs', pos: 'number', en: 'six', hi: 'छह',
      ex: 'Sechs Bücher sind auf dem Tisch.', exEn: 'Six books are on the table.' },
    { de: 'sieben', pos: 'number', en: 'seven', hi: 'सात',
      ex: 'Eine Woche hat sieben Tage.', exEn: 'A week has seven days.' },
    { de: 'acht', pos: 'number', en: 'eight', hi: 'आठ',
      ex: 'Die Schule beginnt um acht.', exEn: 'School begins at eight.' },
    { de: 'neun', pos: 'number', en: 'nine', hi: 'नौ',
      ex: 'Neun minus eins ist acht.', exEn: 'Nine minus one is eight.' },
    { de: 'zehn', pos: 'number', en: 'ten', hi: 'दस',
      ex: 'Zehn Finger, zehn Zahlen.', exEn: 'Ten fingers, ten numbers.' },
    { de: 'elf', pos: 'number', en: 'eleven', hi: 'ग्यारह',
      ex: 'Elf Spieler sind ein Team.', exEn: 'Eleven players are a team.' },
    { de: 'zwölf', pos: 'number', en: 'twelve', hi: 'बारह',
      ex: 'Ein Jahr hat zwölf Monate.', exEn: 'A year has twelve months.' },
    { de: 'dreizehn', pos: 'number', en: 'thirteen', hi: 'तेरह',
      ex: 'Mein Bruder ist dreizehn.', exEn: 'My brother is thirteen.' },
    { de: 'vierzehn', pos: 'number', en: 'fourteen', hi: 'चौदह',
      ex: 'Vierzehn Tage sind zwei Wochen.', exEn: 'Fourteen days are two weeks.' },
    { de: 'fünfzehn', pos: 'number', en: 'fifteen', hi: 'पंद्रह',
      ex: 'Das Buch kostet fünfzehn Euro.', exEn: 'The book costs fifteen euros.' },
    { de: 'sechzehn', pos: 'number', en: 'sixteen', hi: 'सोलह',
      ex: 'Sechzehn — nicht "sechszehn"!', exEn: 'Sixteen — not "sechszehn"!' },
    { de: 'siebzehn', pos: 'number', en: 'seventeen', hi: 'सत्रह',
      ex: 'Siebzehn — nicht "siebenzehn"!', exEn: 'Seventeen — not "siebenzehn"!' },
    { de: 'achtzehn', pos: 'number', en: 'eighteen', hi: 'अठारह',
      ex: 'Mit achtzehn ist man erwachsen.', exEn: 'At eighteen you are an adult.' },
    { de: 'neunzehn', pos: 'number', en: 'nineteen', hi: 'उन्नीस',
      ex: 'Neunzehn kommt vor zwanzig.', exEn: 'Nineteen comes before twenty.' },
    { de: 'zwanzig', pos: 'number', en: 'twenty', hi: 'बीस',
      ex: 'Zwanzig Euro, bitte.', exEn: 'Twenty euros, please.' },
    { de: 'einundzwanzig', pos: 'number', en: 'twenty-one', hi: 'इक्कीस',
      ex: 'Ich bin einundzwanzig Jahre alt.', exEn: 'I am twenty-one years old.' },
    { de: 'zweiundzwanzig', pos: 'number', en: 'twenty-two', hi: 'बाईस',
      ex: 'Sie ist zweiundzwanzig.', exEn: 'She is twenty-two.' },
    { de: 'dreiundzwanzig', pos: 'number', en: 'twenty-three', hi: 'तेईस',
      ex: 'Zimmer dreiundzwanzig, bitte.', exEn: 'Room twenty-three, please.' },
    { de: 'vierundzwanzig', pos: 'number', en: 'twenty-four', hi: 'चौबीस',
      ex: 'Ein Tag hat vierundzwanzig Stunden.', exEn: 'A day has twenty-four hours.' },
    { de: 'fünfundzwanzig', pos: 'number', en: 'twenty-five', hi: 'पच्चीस',
      ex: 'Das kostet fünfundzwanzig Euro.', exEn: 'That costs twenty-five euros.' },
    { de: 'sechsundzwanzig', pos: 'number', en: 'twenty-six', hi: 'छब्बीस',
      ex: 'Das Alphabet hat sechsundzwanzig Buchstaben.', exEn: 'The alphabet has twenty-six letters.' },
    { de: 'siebenundzwanzig', pos: 'number', en: 'twenty-seven', hi: 'सत्ताईस',
      ex: 'Meine Schwester wird siebenundzwanzig.', exEn: 'My sister is turning twenty-seven.' },
    { de: 'achtundzwanzig', pos: 'number', en: 'twenty-eight', hi: 'अट्ठाईस',
      ex: 'Der Februar hat achtundzwanzig Tage.', exEn: 'February has twenty-eight days.' },
    { de: 'neunundzwanzig', pos: 'number', en: 'twenty-nine', hi: 'उनतीस',
      ex: 'Neunundzwanzig plus eins ist dreißig.', exEn: 'Twenty-nine plus one is thirty.' },
    { de: 'Zahl', art: 'die', gender: 'f', plural: 'Zahlen', pos: 'noun', en: 'number, figure', hi: 'संख्या',
      ex: 'Welche Zahl hörst du?', exEn: 'Which number do you hear?' },
    { de: 'Handynummer', art: 'die', gender: 'f', plural: 'Handynummern', pos: 'noun', en: 'mobile number', hi: 'मोबाइल नंबर',
      ex: 'Wie ist deine Handynummer?', exEn: 'What is your mobile number?' },
    { de: 'Telefonnummer', art: 'die', gender: 'f', plural: 'Telefonnummern', pos: 'noun', en: 'phone number', hi: 'टेलीफ़ोन नंबर',
      ex: 'Meine Telefonnummer ist neu.', exEn: 'My phone number is new.' },
    { de: 'E-Mail-Adresse', art: 'die', gender: 'f', plural: 'E-Mail-Adressen', pos: 'noun', en: 'email address', hi: 'ईमेल पता',
      ex: 'Meine E-Mail-Adresse hat einen Punkt.', exEn: 'My email address has a dot.' },
    { de: 'Punkt', art: 'der', gender: 'm', plural: 'Punkte', pos: 'noun', en: 'dot, point', hi: 'बिंदु',
      ex: 'anna.berlin — hier ist ein Punkt.', exEn: 'anna.berlin — here is a dot.' },
    { de: 'Unterstrich', art: 'der', gender: 'm', plural: 'Unterstriche', pos: 'noun', en: 'underscore', hi: 'अंडरस्कोर',
      ex: 'anna_berlin — das ist ein Unterstrich.', exEn: 'anna_berlin — that is an underscore.' },
    { de: 'dann', pos: 'adverb', en: 'then, next', hi: 'फिर',
      ex: 'Erst zehn, dann elf, dann zwölf.', exEn: 'First ten, then eleven, then twelve.' },
    { de: 'plus', pos: 'operator', en: 'plus', hi: 'जोड़ (धन)',
      ex: 'Vier plus drei ist sieben.', exEn: 'Four plus three is seven.' },
    { de: 'minus', pos: 'operator', en: 'minus', hi: 'घटा (ऋण)',
      ex: 'Zehn minus zwei ist acht.', exEn: 'Ten minus two is eight.' }
  ],

  // ---------- Number System (rule cards → accordion) ----------
  grammar: [
    {
      title: '0–12 — the building blocks',
      whatIsIt: 'The numbers <b>0 to 12</b> have no pattern. You learn them the way you learned them in your own language — by saying them until they are automatic. Every other number in German is built out of these twelve, so this is the one list worth learning cold.',
      body: [
        'Say them in a rhythm rather than reading them off a page. <i>klopfen</i> (tap) the table as you go, the way you practised stress in Chapter 2.'
      ],
      goldenRule: 'Learn 0–12 by ear, not by sight. Everything above 12 is assembled from them.',
      table: {
        head: ['#', 'German', '#', 'German'],
        rows: [
          ['0', '<span class="de r-subject">null</span>', '7', '<span class="de r-subject">sieben</span>'],
          ['1', '<span class="de r-subject">eins</span>', '8', '<span class="de r-subject">acht</span>'],
          ['2', '<span class="de r-subject">zwei</span>', '9', '<span class="de r-subject">neun</span>'],
          ['3', '<span class="de r-subject">drei</span>', '10', '<span class="de r-subject">zehn</span>'],
          ['4', '<span class="de r-subject">vier</span>', '11', '<span class="de r-subject">elf</span>'],
          ['5', '<span class="de r-subject">fünf</span>', '12', '<span class="de r-subject">zwölf</span>'],
          ['6', '<span class="de r-subject">sechs</span>', '', '']
        ]
      },
      note: 'Counting starts with <b>eins</b>, but directly before a noun it drops the -s: <span class="de">ein Buch</span>, <span class="de">eine Frau</span>. So "one book" is <b>ein</b> Buch, never <i>eins Buch</i>. Remember this — the reversal rule below needs it.',
      hinglish: '0 se 12 tak koi pattern nahi hai — inhe bas yaad karna padta hai, kyunki aage ke saare numbers inhi se bante hain. Kaagaz se padhne se better hai bol-bol kar rhythm mein yaad karo. Ek dhyaan ki baat: ginti mein <b>eins</b>, par noun se pehle sirf <b>ein</b> (ein Buch, eine Frau) — yeh baat neeche reversal rule mein kaam aayegi.',
      memoryTrick: 'Do bhaag mein todo: <b>null se sechs</b>, phir <b>sieben se zwölf</b>. Chhe-chhe ka set aasaan baithta hai.',
      connect: { from: 'Chapters 1 and 2', text: 'Every number here uses sounds you already have: <b>z</b> = "ts" (<span class="de">zwei</span> = "tsvai", Chapter 1), <b>ei</b> = "eye" (<span class="de">drei</span>, <span class="de">eins</span>, Chapter 2), and <b>ü</b> = lips "u" + "ee" (<span class="de">fünf</span>, <span class="de">zwölf</span>).' }
    },
    {
      title: '13–19 — unit + zehn',
      whatIsIt: 'The teens are assembled, not memorised: take the unit (3–9), stick <b>-zehn</b> (ten) on the end, and you are done. <i>drei + zehn = dreizehn</i>.',
      body: [
        'Only two of the seven change shape, and they change for the same reason: German trims a syllable that would be awkward to say.'
      ],
      goldenRule: 'unit + <b>-zehn</b>. Only <b>sechzehn</b> and <b>siebzehn</b> lose a piece.',
      formula: [
        'drei + zehn  →  dreizehn',
        'sechs + zehn →  sech<b>zehn</b>   (the s drops)',
        'sieben + zehn →  sieb<b>zehn</b>   (the -en drops)'
      ],
      table: {
        head: ['#', 'Built from', 'German', 'Watch out'],
        rows: [
          ['13', 'drei + zehn', '<span class="de r-subject">dreizehn</span>', '—'],
          ['14', 'vier + zehn', '<span class="de r-subject">vierzehn</span>', '—'],
          ['15', 'fünf + zehn', '<span class="de r-subject">fünfzehn</span>', '—'],
          ['16', 'sechs + zehn', '<span class="de r-subject">sechzehn</span>', 'loses the <b>s</b>'],
          ['17', 'sieben + zehn', '<span class="de r-subject">siebzehn</span>', 'loses the <b>-en</b>'],
          ['18', 'acht + zehn', '<span class="de r-subject">achtzehn</span>', '—'],
          ['19', 'neun + zehn', '<span class="de r-subject">neunzehn</span>', '—']
        ]
      },
      why: 'Say <i>sechszehn</i> and <i>siebenzehn</i> out loud and you can hear the problem — too many consonants in a row, too many syllables. German shortened them centuries ago for exactly the reason you would.',
      hinglish: 'Teens banane padte hain, ratne nahi: unit + <b>-zehn</b> (das). drei+zehn = dreizehn. Sirf do jagah shape badalta hai: <b>sechzehn</b> (s gir gaya) aur <b>siebzehn</b> (-en gir gaya). Wajah bhi simple hai — "sechszehn" aur "siebenzehn" bolna mushkil hai, isliye German ne chhota kar diya.',
      memoryTrick: '16 aur 17 <b>chhote</b> ho jaate hain, baaki teens poore rehte hain.',
      recap: [
        'Teens = unit + <b>-zehn</b>.',
        '<b>sechzehn</b> drops the s; <b>siebzehn</b> drops the -en.',
        'The other five are completely regular.'
      ]
    },
    {
      title: '20–100 — the tens, ending in -zig',
      whatIsIt: 'The tens work the same way as the teens, with a different ending: base number + <b>-zig</b>. <i>vier → vierzig</i>, <i>fünf → fünfzig</i>.',
      body: [
        'Two of them are irregular and simply have to be learned: <b>zwanzig</b> (20) and <b>dreißig</b> (30). And the same two numbers that shortened in the teens shorten again here.'
      ],
      goldenRule: 'base + <b>-zig</b>. Except <b>zwanzig</b>, and <b>dreißig</b> which is spelled with <b>ß</b>.',
      table: {
        head: ['#', 'German', '#', 'German'],
        rows: [
          ['20', '<span class="de r-subject">zwanzig</span>', '60', '<span class="de r-subject">sechzig</span>'],
          ['30', '<span class="de r-subject">dreißig</span>', '70', '<span class="de r-subject">siebzig</span>'],
          ['40', '<span class="de r-subject">vierzig</span>', '80', '<span class="de r-subject">achtzig</span>'],
          ['50', '<span class="de r-subject">fünfzig</span>', '90', '<span class="de r-subject">neunzig</span>'],
          ['', '', '100', '<span class="de r-subject">(ein)hundert</span>']
        ]
      },
      note: '<b>sechzig</b> and <b>siebzig</b> shorten exactly as <b>sechzehn</b> and <b>siebzehn</b> did — same two numbers, same two cuts. Learn the pair once and it covers four words.',
      hinglish: 'Tens bhi bante hain: base + <b>-zig</b> (vier → vierzig). Do irregular hain: <b>zwanzig</b> (20) aur <b>dreißig</b> (30 — <b>ß</b> ke saath, -zig nahi). Aur wahi do numbers phir chhote hote hain: <b>sechzig</b>, <b>siebzig</b> — bilkul jaise 16 aur 17 mein hua tha. Ek hi baat do jagah kaam aa gayi. 100 = <span class="de">hundert</span>.',
      memoryTrick: 'Teens ka <b>-zehn</b>, tens ka <b>-zig</b>. Aur "chhota hone wale" numbers wahi do hain: <b>sechs</b> aur <b>sieben</b>.',
      recap: [
        'Tens = base + <b>-zig</b>.',
        '<b>zwanzig</b> and <b>dreißig</b> are irregular; <b>dreißig</b> takes <b>ß</b>.',
        '<b>sechzig</b> / <b>siebzig</b> shorten just like 16 / 17.'
      ],
      connect: { from: 'Chapter 2', text: 'The ending <b>-zig</b> is said "tsikh", not "tsig" — that is Chapter 2\'s rule that word-final <b>-ig</b> becomes "ikh". So <span class="de">zwanzig</span> = "TSVAN-tsikh".' }
    },
    {
      title: 'The reversal rule — units before tens',
      whatIsIt: 'This is the heart of German numbers. For 21–99 you say the <b>unit first</b>, then <b>und</b>, then the ten — and you write the whole thing as <b>one word</b>. <span class="de r-object">einundzwanzig</span> is literally "one-and-twenty".',
      body: [
        'English does this too, in old poetry and in "four and twenty blackbirds". German simply never stopped.'
      ],
      goldenRule: 'Small number first, then <b>und</b>, then the big one — one word, no spaces.',
      formula: [
        '<b>unit</b> + und + <b>ten</b>  =  one word',
        '5 + und + 20  →  fünfundzwanzig',
        '1 + und + 20  →  einundzwanzig   (ein, not eins)'
      ],
      why: 'Reading a two-digit German number out loud means holding the second digit in your head first. This feels backwards for about a week, then it stops being an effort. The fastest way through is saying prices and house numbers aloud, not translating them.',
      table: {
        head: ['#', 'Spoken order', 'German (one word)'],
        rows: [
          ['21', 'one-and-twenty', '<span class="de r-object">einundzwanzig</span>'],
          ['25', 'five-and-twenty', '<span class="de r-object">fünfundzwanzig</span>'],
          ['42', 'two-and-forty', '<span class="de r-object">zweiundvierzig</span>'],
          ['67', 'seven-and-sixty', '<span class="de r-object">siebenundsechzig</span>'],
          ['99', 'nine-and-ninety', '<span class="de r-object">neunundneunzig</span>']
        ]
      },
      note: 'Two details in that table are worth naming. Before <b>und</b>, 1 is <b>ein</b>, never <i>eins</i>. And <b>sechs</b> and <b>sieben</b> stay <b>full</b> in front of <b>und</b> — they only shorten when they carry <b>-zehn</b> or <b>-zig</b>. So 67 is <span class="de">sieben</span>-und-<span class="de">sech</span>zig: the first seven is whole, the sixty is clipped.',
      compare: {
        intro: 'The same two numbers, in the two positions — this is the one place learners mix them up:',
        head: ['Number', 'In front of und (unit)', 'Carrying -zehn / -zig'],
        rows: [
          ['6', '<span class="de">sechs</span>undzwanzig (26)', '<span class="de">sech</span>zehn (16), <span class="de">sech</span>zig (60)'],
          ['7', '<span class="de">sieben</span>undzwanzig (27)', '<span class="de">sieb</span>zehn (17), <span class="de">sieb</span>zig (70)']
        ]
      },
      hinglish: 'Yeh German numbers ka dil hai: 21–99 mein pehle <b>unit</b> aata hai, phir <b>und</b>, phir <b>ten</b> — aur sab ek hi shabd mein. einundzwanzig = "ek-aur-bees". Shuru mein ulta lagega, kuch din baad normal ho jaayega — bas prices aur ghar ke number bol-bol kar practice karo, translate mat karo. Do baat yaad rakho: <b>und</b> se pehle 1 = <b>ein</b> (eins nahi), aur <b>sechs/sieben</b> <b>und</b> ke aage <b>poore</b> rehte hain — woh sirf <b>-zehn</b>/<b>-zig</b> ke saath chhote hote hain.',
      memoryTrick: '<b>Chhota number pehle, bada baad mein.</b> Ulta bolo, ek word mein likho.',
      recap: [
        '21–99: <b>unit + und + ten</b>, written as one word.',
        'Before <b>und</b>, 1 is <b>ein</b> — never eins.',
        '<b>sechs</b> / <b>sieben</b> stay full before <b>und</b>, and shorten only with -zehn / -zig.'
      ]
    },
    {
      title: 'Numbers at work — age, prices, phone numbers',
      whatIsIt: 'Knowing the numbers is not the same as using them. Three everyday jobs cover almost everything you will need at A1, and each has a fixed pattern you can copy exactly.',
      body: [
        'Age uses the verb <b>sein</b> (to be), not "have" — this is the opposite of Hindi and of several other languages, so it is worth fixing early.'
      ],
      goldenRule: 'Age: <b>Ich bin … Jahre alt.</b> Price: <b>Das kostet … Euro.</b> Phone number: read it <b>digit by digit</b>.',
      formula: [
        'Ich bin <b>einundzwanzig</b> Jahre alt.     →  age',
        'Wie alt bist du?                         →  asking age',
        'Das kostet <b>fünfzehn</b> Euro.           →  price',
        '017 49 2  →  null-eins-sieben, vier-neun, zwei  →  phone'
      ],
      table: {
        head: ['Job', 'Pattern', 'Example'],
        rows: [
          ['Say your age', 'Ich bin … Jahre alt.', '<span class="de">Ich bin einundzwanzig Jahre alt.</span>'],
          ['Ask an age', 'Wie alt bist du?', '<span class="de">Wie alt bist du?</span>'],
          ['Give a price', '… kostet … Euro.', '<span class="de">Der Kaffee kostet drei Euro.</span>'],
          ['Read a number', 'digit by digit', '<span class="de">null, eins, sieben, vier, neun, zwei</span>']
        ]
      },
      note: 'After a number, <b>Euro</b> and <b>Jahr</b>e do not take an English-style plural -s: <span class="de">fünfzehn Euro</span>, not <i>Euros</i>. And a phone number is never said as a big number — Germans read the digits, sometimes in pairs, never "seventeen thousand four hundred".',
      why: 'German counts <i>Jahre</i> as a measurement, and measurement words after a number stay in their plain form — the number already tells you how many, so the word does not need to repeat it.',
      hinglish: 'Numbers aa gaye, ab dekho inka kaam kya hai. Teen cheezein lagbhag sab kuch cover kar deti hain. Pehli, umar batana — German mein <i>hona</i> use hota hai, <i>rakhna</i> nahi: <span class="de">Ich bin einundzwanzig Jahre alt</span>, matlab "main ikkees saal ka hoon". Yeh Hindi se ulta hai. Poochhne ke liye <span class="de">Wie alt bist du?</span> aata hai. Doosri, daam batana: <span class="de">Das kostet fünfzehn Euro</span> — aur number ke baad <b>Euro</b> waise hi rehta hai, "Euros" nahi. Teesri, phone number — usme ek-ek digit padha jaata hai (null, eins, sieben…), poora number ek saath nahi bola jaata.',
      memoryTrick: 'Umar ke liye <b>bin</b> (hoon), <b>habe</b> nahi. Aur number ke baad <b>Euro</b> hamesha akela — "s" nahi lagta.',
      recap: [
        'Age = <b>Ich bin … Jahre alt.</b> (sein, not haben)',
        'Price = <b>… kostet … Euro.</b> — Euro never takes an -s.',
        'Phone numbers are read <b>digit by digit</b>.'
      ]
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits account for nearly every number mistake at this level. Three are spelling, one is word order — and the word-order one is the only one that stops you being understood.',
      body: [ 'Each row below is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: '21 = zwanzigeins', right: '21 = einundzwanzig', why: 'Unit first, then und, then the ten — and always one word. This is the mistake that actually confuses a listener.' },
        { wrong: '16 = sechszehn', right: '16 = sechzehn', why: 'sechs drops its s before -zehn and -zig. Same for sieben → siebzehn, siebzig.' },
        { wrong: '30 = dreizig', right: '30 = dreißig', why: 'Thirty is the one ten spelled with ß. Every other ten uses -zig.' },
        { wrong: 'Ich habe 21 Jahre.', right: 'Ich bin 21 Jahre alt.', why: 'German is an age, it does not have one: sein + Jahre alt. And keep the word alt — without it the sentence is incomplete.' }
      ],
      hinglish: 'Chaar galtiyan se bachna hai. Pehli, 21 ko <b>einundzwanzig</b> likhna — order ulta hota hai aur sab ek hi shabd mein aata hai. Yahi ek galti hai jo samajhne mein sach mein rukaawat daalti hai. Doosri, 16 <b>sechzehn</b> hai, jisme <b>s</b> gir jaata hai. Teesri, 30 <b>dreißig</b> hai, <b>ß</b> ke saath. Aur chauthi, umar ke liye <b>Ich bin … Jahre alt</b> aata hai — <i>habe</i> nahi, aur <b>alt</b> chhodna nahi hai.',
      memoryTrick: 'Chaar check: order ulta hai? sechs/sieben chhote hue? dreißig mein ß? umar mein <b>bin … alt</b>?',
      connect: { from: 'the next chapter', text: 'Chapter 4 (<i>Hallo!</i>) puts these numbers into real introductions — you will give your name, your age and your number in the same breath, which is exactly how a first German conversation goes.' }
    }
  ],
  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Einkaufen und Kaffee',
    titleEn: 'Shopping and coffee',
    tokens: [
      { w: 'Anna', role: 'r-subject', case: 'Nominativ', en: 'Anna', hi: 'अना', pron: 'AH-nah', type: 'Name · subject', why: 'A name as the subject sits in the nominative.', ex: 'Anna ist hier.', exEn: 'Anna is here.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'From <i>sein</i> (to be) — irregular, memorise it.', ex: 'Sie ist da.', exEn: 'She is there.', advanced: { synonyms: [], opposites: [] } },
      { w: 'einundzwanzig', role: 'r-object', en: 'twenty-one', hi: 'इक्कीस', pron: 'INE-unt-tsvan-tsikh', type: 'Number', why: 'Units before tens, one word: ein + und + zwanzig.', ex: 'Ich bin einundzwanzig.', exEn: 'I am twenty-one.' },
      { w: 'Jahre', role: 'r-time', en: 'years', hi: 'साल', pron: 'YAH-re', type: 'Noun · time', why: 'Plural of Jahr; used for age: "… Jahre alt".', ex: 'zwei Jahre', exEn: 'two years' },
      { w: 'alt', role: 'r-adjective', en: 'old', hi: 'बूढ़ा / पुराना', pron: 'alt', type: 'Adjective', why: 'A predicate adjective after a number takes no ending.', ex: 'Wie alt bist du?', exEn: 'How old are you?', compare: { comparative: 'älter', superlative: 'am ältesten' }, advanced: { synonyms: [], opposites: ['jung', 'neu'] } },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', case: 'Nominativ', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject', why: 'Lower-case "sie" here, with the verb "kauft", means "she".', ex: 'Sie kauft Kaffee.', exEn: 'She buys coffee.' },
      { w: 'kauft', role: 'r-verb', en: 'buys', hi: 'खरीदती है', pron: 'kowft', type: 'Verb · 3rd person', why: 'From <i>kaufen</i>: regular -t ending for er/sie/es.', ex: 'Sie kauft ein Buch.', exEn: 'She buys a book.', conj: { praesens: 'kauft', praeteritum: 'kaufte', perfekt: 'hat gekauft' }, advanced: { synonyms: ['besorgen'], opposites: ['verkaufen'] } },
      { w: 'zwei', role: 'r-object', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number', why: 'A base number 0–12 — just memorised.', ex: 'zwei Äpfel', exEn: 'two apples' },
      { w: 'Bücher', role: 'r-object', case: 'Akkusativ', en: 'books', hi: 'किताबें', pron: 'BÜ-kher', type: 'Noun · object', why: 'Plural of Buch (from Chapter 1); the thing bought — accusative.', ex: 'Die Bücher sind neu.', exEn: 'The books are new.' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fÜr', type: 'Preposition + acc.', why: 'für takes the accusative; ü = round lips, say "ee".', ex: 'für dich', exEn: 'for you' },
      { w: 'fünfzehn', role: 'r-object', en: 'fifteen', hi: 'पंद्रह', pron: 'FÜNF-tsayn', type: 'Number', why: 'A teen: fünf + zehn.', ex: 'fünfzehn Euro', exEn: 'fifteen euros' },
      { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency', why: 'Euro stays singular after a number: "fünfzehn Euro".', ex: 'Das kostet zehn Euro.', exEn: 'That costs ten euros.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc. nom.', why: 'Masculine nouns take der in the nominative (from Chapter on articles).', ex: 'Der Kaffee ist heiß.', exEn: 'The coffee is hot.' },
      { w: 'Kaffee', role: 'r-subject', case: 'Nominativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fey', type: 'Noun · subject', why: 'The thing being described — subject in the nominative.', ex: 'Der Kaffee kostet drei Euro.', exEn: 'The coffee costs three euros.' },
      { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'दाम है', pron: 'KOS-tet', type: 'Verb · 3rd person', why: 'From <i>kosten</i>; used for prices: "kostet … Euro".', ex: 'Es kostet vier Euro.', exEn: 'It costs four euros.', conj: { praesens: 'kostet', praeteritum: 'kostete', perfekt: 'hat gekostet' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'drei', role: 'r-object', en: 'three', hi: 'तीन', pron: 'drai', type: 'Number', why: 'A base number 0–12.', ex: 'drei Euro', exEn: 'three euros' },
      { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency', why: 'Stays singular after a number.', ex: 'zehn Euro', exEn: 'ten euros' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'r-article', en: 'her', hi: 'उसका', pron: 'EE-re', type: 'Possessive', why: 'Possessive "her", agreeing with the feminine Handynummer.', ex: 'Ihre Nummer ist neu.', exEn: 'Her number is new.' },
      { w: 'Handynummer', role: 'r-subject', case: 'Nominativ', en: 'mobile number', hi: 'मोबाइल नंबर', pron: 'HEN-di-nu-mer', type: 'Noun · subject', why: 'A compound: Handy + Nummer. Read the digits one by one.', ex: 'Wie ist deine Handynummer?', exEn: 'What is your mobile number?' },
      { w: 'endet', role: 'r-verb', en: 'ends', hi: 'खत्म होती है', pron: 'EN-det', type: 'Verb · 3rd person', why: 'From <i>enden</i> (to end); regular -t ending.', ex: 'Das Wort endet auf -t.', exEn: 'The word ends in -t.', conj: { praesens: 'endet', praeteritum: 'endete', perfekt: 'hat geendet' }, advanced: { synonyms: ['aufhören'], opposites: ['beginnen'] } },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition + dat.', why: 'mit takes the dative; short i.', ex: 'mit dir', exEn: 'with you' },
      { w: 'neunundzwanzig', role: 'r-object', en: 'twenty-nine', hi: 'उनतीस', pron: 'NOYN-unt-tsvan-tsikh', type: 'Number', why: 'Reversal again: neun + und + zwanzig.', ex: 'Zimmer neunundzwanzig.', exEn: 'Room twenty-nine.' },
      { w: '.', plain: true }
    ],
    translation: 'Anna is twenty-one years old. She buys two books for fifteen euros. The coffee costs three euros. Her mobile number ends with twenty-nine.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_003_L001', speaker: 'Tim', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Emma, wie viel kostet der Kaffee hier?', en: 'Emma, how much does the coffee cost here?' },
      { id: 'A1_003_L002', speaker: 'Emma', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der Kaffee kostet drei Euro. Und das Wasser kostet zwei Euro.', en: 'The coffee costs three euros. And the water costs two euros.' },
      { id: 'A1_003_L003', speaker: 'Tim', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und die Zeitung?', en: 'And the newspaper?' },
      { id: 'A1_003_L004', speaker: 'Emma', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die Zeitung kostet einen Euro fünfzig.', en: 'The newspaper costs one euro fifty.' }
    ],
    transcript: 'Emma, wie viel kostet der Kaffee hier? Der Kaffee kostet drei Euro. Und das Wasser kostet zwei Euro. Und die Zeitung? Die Zeitung kostet einen Euro fünfzig.',
    translation: 'Emma, how much does the coffee cost here? The coffee costs three euros. And the water costs two euros. And the newspaper? The newspaper costs one euro fifty.',
    tokens: [
      { w: 'Emma' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'viel' },
      { w: 'kostet' },
      { w: 'der' },
      { w: 'Kaffee' },
      { w: 'hier' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'Kaffee' },
      { w: 'kostet' },
      { w: 'drei' },
      { w: 'Euro' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'das' },
      { w: 'Wasser' },
      { w: 'kostet' },
      { w: 'zwei' },
      { w: 'Euro' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Zeitung' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Zeitung' },
      { w: 'kostet' },
      { w: 'einen' },
      { w: 'Euro' },
      { w: 'fünfzig' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie viel kostet der Kaffee?', qEn: 'How much does the coffee cost?', options: ['zwei Euro', 'drei Euro', 'ein Euro fünfzig', 'fünf Euro'], optionsEn: ['two euros', 'three euros', 'one euro fifty', 'five euros'], answer: 1,
        explain: '"Der Kaffee kostet drei Euro."' },
      { q: 'Wie viel kostet die Zeitung?', qEn: 'How much does the newspaper cost?', options: ['ein Euro fünfzig', 'zwei Euro', 'drei Euro', 'vier Euro'], optionsEn: ['one euro fifty', 'two euros', 'three euros', 'four euros'], answer: 0,
        explain: '"Die Zeitung kostet einen Euro fünfzig."' }
    ]
  },

  speaking: [
    { task: "Im Café fragt dein Freund: Wie viel kostet der Kaffee?", taskEn: "In the café your friend asks: how much is the coffee?", de: "Der Kaffee kostet drei Euro.", en: "The coffee costs three euros." },
    { task: "Die Lehrerin fragt: Wie alt bist du?", taskEn: "The teacher asks: how old are you?", de: "Ich bin einundzwanzig Jahre alt.", en: "I'm twenty-one years old." },
    { task: "Zähl für die Gruppe laut von null bis zehn.", taskEn: "Count out loud from zero to ten for the group.", de: "Null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn.", en: "Zero, one, two, three, four, five, six, seven, eight, nine, ten." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write three short lines as full German words: (1) your age — "Ich bin … Jahre alt.", (2) a price — "Das kostet … Euro.", (3) a phone number read digit by digit. Spell every number out.',
    starters: ['Ich bin … Jahre alt.', 'Das kostet … Euro.', 'Meine Nummer ist …'],
    placeholder: 'Ich bin einundzwanzig Jahre alt …',
    minWords: 9
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'How do you write 21 in German?',
      options: ['zwanzigeins', 'einundzwanzig', 'zwanzig und eins', 'einzwanzig'],
      answer: 1,
      explain: 'Unit before ten, joined by und, one word: einundzwanzig.'
    },
    gap: {
      // Build the reversal number.
      sentence: ['25 = ', 'undzwanzig, und 16 = ', '.'],
      gaps: [ { answer: 'fünf', accepts: ['fünf', 'funf'] }, { answer: 'sechzehn', accepts: ['sechzehn'] } ],
      explain: '25 = fünfundzwanzig (five-and-twenty); 16 = sechzehn (sechs loses its s).'
    },
    match: {
      q: 'Match each numeral to its German word.',
      pairs: [
        { noun: '7', art: 'sieben' },
        { noun: '12', art: 'zwölf' },
        { noun: '30', art: 'dreißig' },
        { noun: '21', art: 'einundzwanzig' }
      ]
    },
    builder: {
      target: 'Build: "I am twenty-one years old."',
      bank: ['Jahre', 'Ich', 'einundzwanzig', 'bin', 'alt'],
      answer: ['Ich', 'bin', 'einundzwanzig', 'Jahre', 'alt'],
      roles: { 'Ich': 'r-subject', 'bin': 'r-verb', 'einundzwanzig': 'r-object', 'Jahre': 'r-time', 'alt': 'r-adjective' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the correct spelling of 21?', options: ['zwanzigundein', 'einsundzwanzig', 'einundzwanzig', 'ein und zwanzig'], answer: 2,
      explain: 'einundzwanzig — unit first (ein, not eins), then und, then zwanzig, as one word.' },
    { q: 'How is 16 spelled?', options: ['sechszehn', 'sechzehn', 'sechsundzehn', 'sechzig'], answer: 1,
      explain: 'sechzehn — sechs drops its s before zehn.' },
    { q: 'What is "dreißig"?', options: ['13', '3', '30', '33'], answer: 2,
      explain: 'dreißig = 30 (spelled with ß).' },
    { q: 'To say your age you use…', options: ['Ich habe … Jahre', 'Ich bin … Jahre alt', 'Ich bin … Jahre', 'Mein Alter hat …'], answer: 1,
      explain: 'German uses "Ich bin … Jahre alt" — literally "I am … years old".' },
    { q: 'In a price like "fünfzehn Euro", the word Euro is…', options: ['plural: Euros', 'singular: Euro', 'always capitalised mid-word', 'replaced by €s'], answer: 1,
      explain: 'Euro stays singular after a number: fünfzehn Euro, not Euros.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'Memorise <b>0–12</b> cold — every other number is built from them.' },
    { c: 'r-article', html: 'Teens add <b>-zehn</b>, tens add <b>-zig</b>; watch <span class="de">sechzehn</span>, <span class="de">siebzehn</span>, <span class="de">dreißig</span>.' },
    { c: 'r-object', html: 'The reversal rule: 21 = <span class="de">einundzwanzig</span> — unit, <i>und</i>, ten, all one word.' }
  ],
  revisionTips: [
    'Count out loud 0→100 once a day; speed comes from repetition, not study.',
    'Read every price tag and house number you see as a German word in your head.',
    'Practise your own phone number digit by digit until it is automatic.'
  ]
};

window.CHAPTER = CHAPTER;
