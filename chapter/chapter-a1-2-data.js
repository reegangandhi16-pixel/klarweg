/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 2
   "Vokale & Laute"  (German vowels & sounds)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-2 word list (16 words).
   Recycles Chapter 1 (Alphabet) words throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-2-vokale',
  phase: 'A1 · Phase 1',
  number: 2,
  title: 'Vokale & Laute',
  titleEn: 'Vowels & Sounds',
  description: 'German is read the way it is written — once you own the vowels. Learn a e i o u, the umlauts ä ö ü, long vs short length, and the stress that makes a word sound German.',
  xp: 130,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 3, title: 'Zahlen 0–100', titleEn: 'Numbers 0–100' , href: 'chapter-a1-3-zahlen.html' },

  // No grammar animation for this chapter — renderer skips the Watch First block.
  heroAnimationPath: null,

  // Overview "one idea" card.
  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German vowels come in just two lengths — <span class="de r-subject">long</span> and <span class="de r-subject">short</span> — and the spelling tells you which. Learn that one signal and you can <span class="de r-verb">read</span> almost any German word aloud correctly.'
  },

  // Writing AI-tutor prompt (pronunciation-focused). "{{TEXT}}" → learner input.
  writingTutorPrompt:
    'You are a warm, encouraging German (A1) pronunciation tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is GERMAN VOWELS & SOUNDS (a e i o u, umlauts ä ö ü, long vs short vowel length, word stress). ' +
    'The learner wrote the text below — usually a word with its sound/length marked, or a short sentence.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'PRONUNCIATION ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A vowel is SHORT before a double consonant (Mann, kommen) and usually before two or more consonants (ist, Kind).\n' +
    '- A vowel is LONG when doubled (Haar, See), when followed by a silent h (Jahr, ihm), or when followed by a single consonant (Tag, gut).\n' +
    '- "ie" is a long "ee" sound (Liebe, sie). "ei" is the English "eye" sound (Eis, mein).\n' +
    '- Umlauts: ä = "e" in bed; ö = round the lips and say "e"; ü = round the lips and say "ee".\n' +
    '- German word stress normally falls on the FIRST syllable (BE-tont, AP-fel), except many borrowed words and a few prefixes.\n' +
    '- Final consonants devoice: -d sounds like "t", -g like "k", -b like "p" (Hund → "Hunt").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Sound check:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong version in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (length, umlaut, or stress). If there are no errors, write a single <li>No pronunciation errors — well done.</li>\n' +
    '3) <p><b>Stress:</b> one sentence on whether the stressed syllable is right.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  // Quiz result recommendations by performance tier.
  quizRecommendation: {
    high: 'Excellent — your ear is tuned. Move on to <span class="de">Zahlen 0–100</span>.',
    mid: 'Good. Re-read the long-vs-short table once, then continue.',
    low: 'Worth another pass — revisit the Sound System section, then retake.'
  },

  // Live Sentence Parser concept sentence (tokens drive role colours).
  parserSentence: [
    { w: 'Sprich', role: 'r-verb' }, { w: 'das', role: 'r-article' },
    { w: 'Wort', role: 'r-subject' }, { w: 'langsam', role: 'r-adverb' },
    { w: 'nach', role: 'r-verb' }
  ],

  // Curriculum sections (identical structure to Ch1/Ch3).
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Say it <em>again.</em>',
    intro: 'Second lesson, pure sound. Frau Bauer coaches Jonas through the five German vowels and the umlauts that Hindi does not have — and Jonas finds his inner German.',
    outcomes: ['Every word is clickable for meaning + audio', 'Slow the audio to 0.5× to hear each vowel', 'Hear the umlauts ä, ö, ü in real speech'],
    scene: 'Ausspracheübung — Deutschkurs',
    femaleSpeakers: ['Frau Bauer'],
    dialogue: [
      { speaker: 'Frau Bauer', tokens: [
        { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'heute = today; a front adverb pushes the verb to position 2.', ex: 'Heute üben wir.', exEn: 'Today we practise.' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करते हैं', pron: 'Ü-ben', type: 'Verb · üben (wir)', why: 'üben = to practise: wir üben.', ex: 'Wir üben die Vokale.', exEn: 'We practise the vowels.' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-article', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Vokale', role: 'r-object', en: 'vowels', hi: 'स्वर', pron: 'vo-KAH-luh', type: 'Noun · plural', why: 'der Vokal → die Vokale: a, e, i, o, u.', ex: 'die fünf Vokale', exEn: 'the five vowels' },
        { w: ':', plain: true },
        { w: 'a', role: 'r-letter', en: 'the vowel A', hi: 'स्वर A', pron: 'ah', type: 'Vowel', spokenDe: 'Apfel' },
        { w: ',', plain: true },
        { w: 'e', role: 'r-letter', en: 'the vowel E', hi: 'स्वर E', pron: 'eh', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'i', role: 'r-letter', en: 'the vowel I', hi: 'स्वर I', pron: 'ee', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'o', role: 'r-letter', en: 'the vowel O', hi: 'स्वर O', pron: 'oh', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'u', role: 'r-letter', en: 'the vowel U', hi: 'स्वर U', pron: 'oo', type: 'Vowel' },
        { w: '.', plain: true }
      ], en: 'Today we practise the vowels: a, e, i, o, u.', hi: 'Aaj hum vowels ka abhyaas karte hain: a, e, i, o, u.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'a', role: 'r-letter', en: 'the vowel A', hi: 'स्वर A', pron: 'ah', type: 'Vowel', spokenDe: 'Apfel' },
        { w: ',', plain: true },
        { w: 'e', role: 'r-letter', en: 'the vowel E', hi: 'स्वर E', pron: 'eh', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'i', role: 'r-letter', en: 'the vowel I', hi: 'स्वर I', pron: 'ee', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'o', role: 'r-letter', en: 'the vowel O', hi: 'स्वर O', pron: 'oh', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'u', role: 'r-letter', en: 'the vowel U', hi: 'स्वर U', pron: 'oo', type: 'Vowel' },
        { w: '.', plain: true },
        { w: 'Klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen', why: 'das klingt gut = that sounds good.', ex: 'Das klingt gut.', exEn: 'That sounds good.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'a, e, i, o, u. Sounds good!', hi: 'a, e, i, o, u. Achha lagta hai!' },
      { speaker: 'Frau Bauer', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'die', role: 'r-article', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Umlaute', role: 'r-object', en: 'umlauts', hi: 'उमलाउट', pron: 'UM-low-tuh', type: 'Noun · plural', why: 'die Umlaute: ä, ö, ü.', ex: 'die drei Umlaute', exEn: 'the three umlauts' },
        { w: ':', plain: true },
        { w: 'ä', role: 'r-letter', en: 'the vowel Ä', hi: 'स्वर Ä', pron: 'eh', type: 'Vowel', why: 'ä = a-umlaut, like "e" in bed.', ex: 'Käse', exEn: 'cheese', spokenDe: 'Käse' },
        { w: ',', plain: true },
        { w: 'ö', role: 'r-letter', en: 'the vowel Ö', hi: 'स्वर Ö', pron: 'er', type: 'Vowel', why: 'ö: round the lips and say "e".', ex: 'schön', exEn: 'beautiful', spokenDe: 'schön' },
        { w: ',', plain: true },
        { w: 'ü', role: 'r-letter', en: 'the vowel Ü', hi: 'स्वर Ü', pron: 'ue', type: 'Vowel', why: 'ü: round the lips and say "ee".', ex: 'über', exEn: 'over', spokenDe: 'über' },
        { w: '.', plain: true }
      ], en: 'Very good! Now the umlauts: ä, ö, ü.', hi: 'Bahut achha! Ab umlaut: ä, ö, ü.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Ä', role: 'r-letter', en: 'the vowel Ä', hi: 'स्वर Ä', pron: 'eh', type: 'Vowel' },
        { w: ',', plain: true },
        { w: 'ö', role: 'r-letter', en: 'the vowel Ö', hi: 'स्वर Ö', pron: 'er', type: 'Vowel', spokenDe: 'schön' },
        { w: '…', plain: true },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'ü', role: 'r-letter', en: 'the vowel Ü', hi: 'स्वर Ü', pron: 'ue', type: 'Vowel', spokenDe: 'über' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective', why: 'schwer = hard / difficult.', ex: 'Das ist schwer.', exEn: 'That is hard.' },
        { w: '!', plain: true }
      ], en: 'ä, ö … the ü is hard!', hi: 'ä, ö … "ü" mushkil hai!' },
      { speaker: 'Frau Bauer', tokens: [
        { w: 'Mund', role: 'r-object', en: 'mouth', hi: 'मुँह', pron: 'munt', type: 'Noun · masc.', why: 'der Mund = mouth. Final d → "t".', ex: 'Mund rund machen', exEn: 'make your mouth round' },
        { w: 'rund', role: 'r-adjective', en: 'round', hi: 'गोल', pron: 'runt', type: 'Adjective', why: 'rund = round.', ex: 'Der Mund ist rund.', exEn: 'The mouth is round.' },
        { w: 'machen', role: 'r-verb', en: 'make', hi: 'बनाओ', pron: 'MA-khen', type: 'Verb · infinitive', why: 'Mund rund machen = make your mouth round.', ex: 'Mund rund machen!', exEn: 'Make your mouth round!' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'i', role: 'r-letter', en: 'the vowel I', hi: 'स्वर I', pron: 'ee', type: 'Vowel' },
        { w: 'sagen', role: 'r-verb', en: 'say', hi: 'बोलो', pron: 'ZAH-gen', type: 'Verb · infinitive', why: 'sagen = to say.', ex: 'i sagen!', exEn: 'say "i"!' },
        { w: ':', plain: true },
        { w: 'ü', role: 'r-letter', en: 'the vowel Ü', hi: 'स्वर Ü', pron: 'ue', type: 'Vowel', spokenDe: 'über' },
        { w: '!', plain: true }
      ], en: 'Make your mouth round and say "i": ü!', hi: 'Muh gol karo aur "i" bolo: ü!' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Üüü', role: 'r-letter', en: 'the Ü sound', hi: 'Ü ध्वनि', pron: 'ueee', type: 'Sound' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'klinge', role: 'r-verb', en: 'sound', hi: 'लगता हूँ', pron: 'KLING-uh', type: 'Verb · klingen (ich)', why: 'ich klinge = I sound.', ex: 'Ich klinge deutsch.', exEn: 'I sound German.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'richtig', role: 'r-adverb', en: 'really / properly', hi: 'सचमुच', pron: 'RIKH-tikh', type: 'Adverb', why: 'richtig here = really / properly.', ex: 'richtig gut', exEn: 'really good' },
        { w: 'deutsch', role: 'r-adjective', en: 'German', hi: 'जर्मन', pron: 'doytsh', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Üüü! Now I really sound German!', hi: 'Üüü! Ab main sachmuch German lagta hoon!' },
      { speaker: 'Frau Bauer', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Adverb', why: 'genau = exactly / right.', ex: 'Genau!', exEn: 'Exactly!' },
        { w: '!', plain: true },
        { w: 'Achte', role: 'r-verb', en: 'pay attention', hi: 'ध्यान दो', pron: 'AKH-tuh', type: 'Verb · imperative', why: 'achten auf = to pay attention to.', ex: 'Achte auf die Betonung.', exEn: 'Mind the stress.' },
        { w: 'auf', role: 'r-preposition', en: 'to / on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Betonung', role: 'r-object', en: 'stress', hi: 'बलाघात', pron: 'be-TOH-nung', type: 'Noun · fem.', why: 'die Betonung = word stress.', ex: 'Achte auf die Betonung.', exEn: 'Mind the stress.' },
        { w: ':', plain: true },
        { w: 'Apfel', role: 'r-object', en: 'apple', hi: 'सेब', pron: 'AP-fel', type: 'Noun · masc.', why: 'der Apfel (Ch1). Stress on the first syllable: AP-fel.', ex: 'der Apfel', exEn: 'the apple' },
        { w: '.', plain: true }
      ], en: 'Exactly! Mind the stress: Apfel.', hi: 'Bilkul! Betonung par dhyaan do: Apfel.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Apfel', role: 'r-object', en: 'apple', hi: 'सेब', pron: 'AP-fel', type: 'Noun · masc.' },
        { w: '…', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'a', role: 'r-letter', en: 'the vowel A', hi: 'स्वर A', pron: 'ah', type: 'Vowel', spokenDe: 'Apfel' },
        { w: 'lang', role: 'r-adjective', en: 'long', hi: 'लंबा', pron: 'lang', type: 'Adjective', why: 'lang = long (vowel length).', ex: 'ein langer Vokal', exEn: 'a long vowel' },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'OH-der', type: 'Conjunction' },
        { w: 'kurz', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'kurts', type: 'Adjective', why: 'kurz = short (vowel length).', ex: 'ein kurzer Vokal', exEn: 'a short vowel' },
        { w: '?', plain: true }
      ], en: 'Apfel … is the a long or short?', hi: 'Apfel … "a" lamba hai ya chhota?' },
      { speaker: 'Frau Bauer', tokens: [
        { w: 'Kurz', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'kurts', type: 'Adjective', why: 'a double consonant (pf) keeps the a short.', ex: 'Das a ist kurz.', exEn: 'The a is short.' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'a', role: 'r-letter', en: 'the vowel A', hi: 'स्वर A', pron: 'ah', type: 'Vowel', spokenDe: 'Apfel' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'kurz', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'kurts', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'Jonas', role: 'r-name', en: 'Jonas', hi: 'योनास', pron: 'YO-nas', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Short! The a is short. Very good, Jonas!', hi: 'Chhota! "a" chhota hai. Bahut achha, Jonas!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the 16 words your teacher uses to coach pronunciation — plus the nouns that name each sound.' },
    { id: 'grammar',    label: 'Sound System', tag: 'core',
      objective: 'Master a e i o u, the umlauts ä ö ü, long vs short length, and German word stress.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a short pronunciation lesson aloud and tap any word to hear it and see how it sounds.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Hear long and short vowels in natural speech, then answer what you heard.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Repeat the tricky vowel pairs out loud and check your pronunciation.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Mark three words as long or short and name the stressed syllable.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill sound recognition and vowel length with instant feedback across four exercise types.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 130 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The 16 pronunciation words with translations, articles, and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Vowel-length drills, minimal-pair listening, stress marking, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Sound Rules PDF',
      desc: 'Every vowel, umlaut, length rule, and stress pattern with examples and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Pronunciation' }
  ],

  outcomes: [
    { de: 'a e i o u', text: 'Recognise and say all five German vowel sounds' },
    { de: 'ä · ö · ü', text: 'Hear and produce the three umlauts' },
    { de: 'lang / kurz', text: 'Tell a long vowel from a short one by its spelling' },
    { de: 'die Betonung', text: 'Find the stressed syllable — usually the first' },
    { de: 'Nachsprechen', text: 'Repeat words after a model and self-correct' }
  ],

  // ---------- Vocabulary (16 words from the uploaded source) ----------
  // Coaching verbs/adjectives carry no article; the 6 nouns do.
  vocab: [
    { de: 'Aussprache', art: 'die', gender: 'f', plural: 'Aussprachen', pos: 'noun', en: 'pronunciation', hi: 'उच्चारण',
      ex: 'Die Aussprache ist wichtig.', exEn: 'Pronunciation is important.' },
    { de: 'Betonung', art: 'die', gender: 'f', plural: 'Betonungen', pos: 'noun', en: 'stress, accent', hi: 'बल (ज़ोर)',
      ex: 'Achte auf die Betonung.', exEn: 'Pay attention to the stress.' },
    { de: 'Satzmelodie', art: 'die', gender: 'f', plural: 'Satzmelodien', pos: 'noun', en: 'intonation', hi: 'वाक्य की लय',
      ex: 'Die Satzmelodie steigt bei Fragen.', exEn: 'Intonation rises in questions.' },
    { de: 'Wortanfang', art: 'der', gender: 'm', plural: 'Wortanfänge', pos: 'noun', en: 'start of the word', hi: 'शब्द का आरंभ',
      ex: 'Am Wortanfang hörst du den ersten Laut.', exEn: 'At the start of the word you hear the first sound.' },
    { de: 'Silbenanfang', art: 'der', gender: 'm', plural: 'Silbenanfänge', pos: 'noun', en: 'start of the syllable', hi: 'अक्षर का आरंभ',
      ex: 'Am Silbenanfang steht oft ein Konsonant.', exEn: 'A consonant often stands at the start of the syllable.' },
    { de: 'Wortinnere', art: 'das', gender: 'n', plural: 'Wortinneren', pos: 'noun', en: 'the inside of a word', hi: 'शब्द का भीतरी भाग',
      ex: 'Im Wortinneren ist der Vokal oft kurz.', exEn: 'Inside the word the vowel is often short.' },
    { de: 'achten', pos: 'verb', en: 'to pay attention', hi: 'ध्यान देना',
      ex: 'Achte auf die langen Vokale!', exEn: 'Pay attention to the long vowels!',
      conj: { praesens: 'achtet', praeteritum: 'achtete', perfekt: 'hat geachtet' } },
    { de: 'nachsprechen', pos: 'verb', en: 'to repeat (after)', hi: 'दोहराना (बाद में)',
      ex: 'Sprich die Wörter nach.', exEn: 'Repeat the words after me.',
      conj: { praesens: 'spricht nach', praeteritum: 'sprach nach', perfekt: 'hat nachgesprochen' } },
    { de: 'mitsprechen', pos: 'verb', en: 'to speak along', hi: 'साथ बोलना',
      ex: 'Sprich mit mir mit.', exEn: 'Speak along with me.',
      conj: { praesens: 'spricht mit', praeteritum: 'sprach mit', perfekt: 'hat mitgesprochen' } },
    { de: 'klopfen', pos: 'verb', en: 'to knock, to tap', hi: 'थपथपाना',
      ex: 'Wir klopfen den Rhythmus.', exEn: 'We tap the rhythm.',
      conj: { praesens: 'klopft', praeteritum: 'klopfte', perfekt: 'hat geklopft' } },
    { de: 'langsam', pos: 'adjective', en: 'slow, slowly', hi: 'धीमा / धीरे',
      ex: 'Sprich langsam und deutlich.', exEn: 'Speak slowly and clearly.',
      compare: { comparative: 'langsamer', superlative: 'am langsamsten' } },
    { de: 'laut', pos: 'adjective', en: 'loud, aloud', hi: 'ज़ोर से',
      ex: 'Lies das Wort laut vor.', exEn: 'Read the word aloud.',
      compare: { comparative: 'lauter', superlative: 'am lautesten' } },
    { de: 'gleich', pos: 'adjective', en: 'the same, equal', hi: 'एक जैसा',
      ex: 'a und aa klingen gleich, aber aa ist lang.', exEn: 'a and aa sound the same, but aa is long.',
      compare: { comparative: 'gleicher', superlative: 'am gleichsten' } },
    { de: 'doppelt', pos: 'adjective', en: 'double', hi: 'दुगना / दोहरा',
      ex: 'Ein doppelter Konsonant macht den Vokal kurz.', exEn: 'A double consonant makes the vowel short.',
      compare: { comparative: 'doppelter', superlative: 'am doppeltesten' } },
    { de: 'betont', pos: 'adjective', en: 'stressed (syllable)', hi: 'बलाघात वाला',
      ex: 'Die erste Silbe ist betont.', exEn: 'The first syllable is stressed.',
      compare: { comparative: 'stärker betont', superlative: 'am stärksten betont' } },
    { de: 'noch einmal', pos: 'phrase', en: 'once more, again', hi: 'एक बार और',
      ex: 'Sag das bitte noch einmal.', exEn: 'Please say that once more.' }
  ],

  // ---------- Sound System (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The five vowels — a · e · i · o · u',
      whatIsIt: 'German has the same five vowel letters as English, but each one makes a <b>single, clean sound</b>. English slides one vowel into another — "no" is really "no-oo". German does not slide. You set the mouth, make the sound, stop.',
      body: [
        'Every one of these five comes in a long and a short version, and the next block shows how to tell which. The table below gives you both, so your ear has the pair from the start.'
      ],
      goldenRule: 'One vowel letter, one mouth position. Do not let the sound drift while you say it.',
      why: 'Hindi works the same way — <i>a</i> in "kal" is one steady sound. So this is a habit you already have; you only have to stop importing the English slide.',
      table: {
        head: ['Vowel', 'Short — sounds like', 'Long — sounds like', 'Say the pair'],
        rows: [
          ['<b>a</b>', '"u" in <i>cut</i>', '"a" in <i>father</i>', '<span class="de r-subject">Apfel</span> (short) · <span class="de r-subject">Jahr</span> (long)'],
          ['<b>e</b>', '"e" in <i>bed</i>', '"ay" in <i>day</i>', '<span class="de r-subject">Heft</span> (short) · <span class="de r-subject">Weber</span> (long)'],
          ['<b>i</b>', '"i" in <i>sit</i>', '"ee" in <i>see</i>', '<span class="de r-subject">Kind</span> (short) · <span class="de r-subject">Liebe</span> (long)'],
          ['<b>o</b>', '"o" in <i>hot</i>', '"o" in <i>more</i>', '<span class="de r-subject">Wort</span> (short) · <span class="de r-subject">Brot</span> (long)'],
          ['<b>u</b>', '"u" in <i>put</i>', '"oo" in <i>boot</i>', '<span class="de r-subject">Mund</span> (short) · <span class="de r-subject">Buch</span> (long)']
        ]
      },
      note: 'An unstressed <b>e</b> at the end of a word is neither long nor short — it relaxes into a soft "uh": <span class="de">Schule</span> = "SHOO-luh", <span class="de">Käse</span> = "KAY-zuh". You will hear this ending on hundreds of words.',
      hinglish: 'German ke vowels <b>saaf aur single</b> hote hain — English ki tarah fisalte nahi. Hindi bhi aise hi chalti hai, to yeh aadat tumhare paas already hai; bas English wala kheenchna band karna hai. Har vowel do lambaai mein aata hai — chhota aur lamba — aur dono ko jodi mein sunna sabse tez tareeka hai: <span class="de">Apfel</span> / <span class="de">Jahr</span>, <span class="de">Kind</span> / <span class="de">Liebe</span>, <span class="de">Mund</span> / <span class="de">Buch</span>.',
      memoryTrick: 'Vowel ko ek jagah pakad ke rakho — muh hile to sound English ban gaya.',
      recap: [
        'Five vowel letters, each one clean sound — no sliding.',
        'Every vowel has a <b>short</b> and a <b>long</b> version; learn them as pairs.',
        'Unstressed <b>-e</b> at the end = soft "uh" (<span class="de">Schule</span>, <span class="de">Käse</span>).'
      ],
      connect: { from: 'Chapter 1', text: 'Chapter 1 gave you the letter <b>names</b> and the traps (z = "ts", w = "v", s- = "z"). This chapter is about the <b>vowels inside</b> the words those letters spell.' }
    },
    {
      title: 'Long vs short — the spelling tells you',
      whatIsIt: 'You never have to guess a vowel\'s length. German writes the answer into the spelling: look at what follows the vowel, and you know whether to hold it or snap it.',
      body: [
        'This one signal fixes more beginner pronunciation than anything else in the chapter, because length is what makes <span class="de">Stadt</span> (city) different from <span class="de">Staat</span> (state).'
      ],
      goldenRule: 'Crowded after the vowel → <b>short</b>. Roomy after the vowel → <b>long</b>.',
      why: 'Think of the vowel as having a room. Two consonants crowd in and squeeze it short. A single consonant, a doubled vowel or a silent <b>h</b> leaves space, so the vowel stretches out. The spelling is a map of that room.',
      formula: [
        'vowel + <b>2 consonants</b>  →  SHORT      (Mann, ist, Kind)',
        'vowel + <b>1 consonant</b>   →  LONG       (gut, Tag)',
        '<b>double vowel</b> (aa ee oo) →  LONG       (Haar, See)',
        'vowel + silent <b>h</b>      →  LONG       (Jahr, ihm)'
      ],
      table: {
        head: ['Signal', 'Length', 'Example', 'Read it'],
        rows: [
          ['<b>doppelt</b> consonant (nn, mm, tt)', 'short', '<span class="de r-subject">Mann</span>', '"man" — snappy a'],
          ['two or more consonants', 'short', '<span class="de r-subject">ist</span>', '"ist" — snappy i'],
          ['double vowel (aa, ee, oo)', 'long', '<span class="de r-subject">Haar</span>', '"haar" — held a'],
          ['vowel + silent <b>h</b>', 'long', '<span class="de r-subject">Jahr</span>', '"yaar" — held a'],
          ['single consonant', 'long', '<span class="de r-subject">gut</span>', '"goot" — held u']
        ]
      },
      note: '⚠️ Two limits, and they are both easy. First, the rule describes the <b>stressed</b> syllable — unstressed vowels are always relaxed and short. Second, a handful of very common little words break it and are simply short: <span class="de">das</span>, <span class="de">was</span>, <span class="de">mit</span>, <span class="de">hat</span>, <span class="de">es</span>, <span class="de">bin</span>, <span class="de">bis</span>. You will use them so often that they learn themselves.',
      hinglish: 'Length guess karne ki zarurat nahi — <b>spelling</b> bata deti hai. Vowel ke baad do consonant ho to vowel <b>chhota</b> ho jaata hai (Mann, ist). Aur jagah ho — ek consonant, double vowel, ya silent <b>h</b> — to vowel <b>lamba</b> (gut, Haar, Jahr). Yeh farak matlab badal deta hai: <span class="de">Stadt</span> (shehar) vs <span class="de">Staat</span> (rajya). Do chhoti limits: rule <b>stressed</b> syllable par lagta hai, aur kuch rozmarra ke chhote words (das, was, mit, hat, es) hamesha chhote hain.',
      memoryTrick: 'Vowel ke baad <b>do consonant = chhota</b>, <b>ek consonant = lamba</b>. Ek hi cheez dekhni hai: baad mein kitne consonant hain.',
      recap: [
        'Two or more consonants after the vowel → <b>short</b>.',
        'One consonant, a doubled vowel, or a silent <b>h</b> → <b>long</b>.',
        '<span class="de">a</span> and <span class="de">aa</span> are the same sound — <span class="de">aa</span> is just the long one (Stadt / Staat).',
        'Only the stressed syllable follows the rule; a few tiny words (das, mit, was) are just short.'
      ]
    },
    {
      title: 'Vowel pairs — ei · ie · au · eu',
      whatIsIt: 'Two vowel letters standing together are not two sounds. Each pair is <b>one</b> fixed sound, and there are only four pairs to know.',
      body: [
        'These four are completely regular — no exceptions to learn. Once you can see a pair and say its sound without thinking, most German words are readable on sight.'
      ],
      goldenRule: 'In <b>ei</b> and <b>ie</b>, say the <b>second</b> letter. <b>au</b> = "ow", <b>eu</b> = "oy".',
      formula: [
        'ei → "eye"    (Eis, mein, einmal)',
        'ie → "ee"     (Liebe, vier, sie)',
        'au → "ow"     (laut, auf, Aussprache)',
        'eu / äu → "oy" (heute, Deutsch, Häuser)'
      ],
      table: {
        head: ['Pair', 'One sound', 'Example', 'Read it'],
        rows: [
          ['<b>ei</b>', '"eye"', '<span class="de r-subject">einmal</span>', 'INE-mahl'],
          ['<b>ie</b>', 'long "ee"', '<span class="de r-subject">Liebe</span>', 'LEE-buh'],
          ['<b>au</b>', '"ow" in <i>now</i>', '<span class="de r-subject">laut</span>', 'lowt'],
          ['<b>eu</b>', '"oy" in <i>boy</i>', '<span class="de r-subject">heute</span>', 'HOY-tuh']
        ]
      },
      note: 'This is why <span class="de">Aussprache</span> starts with an "ow" sound: <b>Au</b>-sprache = "OWS-shprah-khuh". When you see it written <b>AUS</b>-spra-che, that is marking the <i>stress</i>, not the sound.',
      hinglish: 'Do vowel saath khade ho to woh <b>ek</b> sound hai, do nahi. Sirf chaar jodi hain: <b>ei</b> = "eye" (Eis), <b>ie</b> = "ee" (Liebe), <b>au</b> = "ow" (laut), <b>eu/äu</b> = "oy" (heute). <b>ei</b> aur <b>ie</b> ka faisla aasaan — <b>doosra</b> letter bolo. Inme koi exception nahi, isliye ek baar pakad liya to permanent hai.',
      memoryTrick: '<b>ei</b>/<b>ie</b> — doosra letter bolo. <b>au</b> = "ow" jaise "now", <b>eu</b> = "oy" jaise "boy".',
      recap: [
        'Four pairs, one sound each, zero exceptions.',
        'ei = "eye", ie = "ee" — the <b>second</b> letter wins.',
        'au = "ow", eu / äu = "oy".'
      ],
      connect: { from: 'Chapter 1', text: 'You already met <b>ei</b> and <b>ie</b> in Chapter 1 as reading traps. Here they join their two missing partners, <b>au</b> and <b>eu</b>, so the set is complete.' }
    },
    {
      title: 'The umlauts — ä · ö · ü',
      whatIsIt: 'Two dots on a vowel make a new sound. <b>ä</b> is easy for you — it is just "e". <b>ö</b> and <b>ü</b> are the two German sounds that exist in neither Hindi nor English, so they need a minute of mouth-training.',
      body: [
        'The training trick works because these sounds are literally a mix: the lips of one vowel with the tongue of another. Set the lips first, then say the other vowel without moving them.'
      ],
      goldenRule: 'For <b>ö</b> and <b>ü</b>: <b>lips of "o"/"u", sound of "e"/"ee"</b>. Lips stay still.',
      formula: [
        'ä = "e" in bed                  (Käse, Mädchen)',
        'ö = lips for "o" + say "e"      (schön, hören)',
        'ü = lips for "u" + say "ee"     (über, München)'
      ],
      table: {
        head: ['Umlaut', 'How to make it', 'Long example', 'Short example'],
        rows: [
          ['<b>ä</b>', 'just "e" in <i>bed</i>, held or snapped', '<span class="de r-subject">Käse</span> (KAY-zuh)', '<span class="de r-subject">Äpfel</span> (EP-fel)'],
          ['<b>ö</b>', 'round your lips for "o", say "e"', '<span class="de r-subject">schön</span> (shern)', '<span class="de r-subject">können</span> (KER-nen)'],
          ['<b>ü</b>', 'round your lips for "u", say "ee"', '<span class="de r-subject">über</span> (Ü-ber)', '<span class="de r-subject">München</span> (MÜN-khen)']
        ]
      },
      note: 'The length rule from the last block still applies here: <span class="de">Käse</span> has one consonant after the ä, so it is long; <span class="de">München</span> has two, so the ü is snapped short.',
      hinglish: 'Do dots = <b>umlaut</b>. <b>ä</b> bilkul "e" jaisa hai — yeh aasaan wala hai. <b>ö</b> aur <b>ü</b> Hindi mein nahi hain, isliye trick yaad rakho: honth <b>"o"/"u"</b> ke shape mein set karo, phir <b>bina hilaye</b> "e"/"ee" bolo. Honth hil gaye to sound wapas purana ho jaayega. Aur length ka rule inpar bhi lagta hai: <span class="de">Käse</span> lamba, <span class="de">München</span> chhota.',
      memoryTrick: '<b>Honth ek vowel ke, aawaaz doosre vowel ki.</b> ö = honth O + "e". ü = honth U + "ee". ä = seedha "e".',
      recap: [
        '<b>ä</b> = "e". No new mouth position needed.',
        '<b>ö</b> = lips "o" + sound "e". <b>ü</b> = lips "u" + sound "ee".',
        'Umlauts obey the same long/short spelling rule as plain vowels.'
      ]
    },
    {
      title: 'Three consonant habits: ch · -ig · final d/g/b',
      whatIsIt: 'The vowels are the hard part; these three consonant habits are the rest. Each one shows up in almost every German sentence, including every sentence in this chapter.',
      body: [
        '<b>ch</b> has two sounds and the vowel in front of it decides which — you do not choose. <b>-ig</b> at the end of a word is a fixed ending. And a <b>d</b>, <b>g</b> or <b>b</b> at the end of a word hardens.'
      ],
      goldenRule: 'After a, o, u → <b>ch</b> is throaty "kh". After i, e and the umlauts → <b>ch</b> is soft, like a whispered "hy". Word-final <b>-ig</b> = "ikh".',
      formula: [
        'a / o / u + ch  →  throaty "kh"   (Buch, noch, achten)',
        'i / e / ä ö ü + ch  →  soft "hy"  (ich, München, Mädchen)',
        'word-final -ig  →  "ikh"          (wichtig, richtig)',
        'word-final d / g / b  →  t / k / p (und, Tag, halb)'
      ],
      table: {
        head: ['Spelling', 'Sound', 'Example', 'Read it'],
        rows: [
          ['<b>ch</b> after a o u', 'throaty "kh"', '<span class="de r-subject">noch</span>', 'nokh'],
          ['<b>ch</b> after i e ä ö ü', 'soft "hy"', '<span class="de r-subject">ich</span>', 'ikh'],
          ['<b>-ig</b> at the end', '"ikh"', '<span class="de r-subject">wichtig</span>', 'VIKH-tikh'],
          ['final <b>-d</b>', '"t"', '<span class="de r-subject">und</span>', 'unt'],
          ['final <b>-g</b>', '"k"', '<span class="de r-subject">sag</span>', 'zahk']
        ]
      },
      note: 'The final-consonant hardening only happens at the <b>end</b> of a word or syllable. Put a vowel after it and the soft sound comes back: <span class="de">Tag</span> is "tahk", but <span class="de">Tage</span> is "TAH-guh"; <span class="de">Hund</span> is "hunt", but <span class="de">Hunde</span> is "HUN-duh".',
      hinglish: 'Teen consonant rules hain, aur teeno har German sentence mein aate hain. <b>ch</b> ka sound uske <b>pehle wale vowel</b> se tay hota hai — tumhe choose nahi karna padta: a/o/u ke baad gale se "kh" (<span class="de">Buch</span>, <span class="de">noch</span>), aur i/e/umlaut ke baad halka "hy" (<span class="de">ich</span>, <span class="de">München</span>). Word ke end mein <b>-ig</b> = "ikh" (<span class="de">wichtig</span>). Aur end ka <b>d/g/b</b> sakht ho jaata hai — t/k/p (<span class="de">und</span> = "unt", <span class="de">sag</span> = "zahk") — kyunki word khatam hote waqt aawaaz band ho jaati hai. Vowel lagao to soft wapas: <span class="de">Tag</span> = "tahk", par <span class="de">Tage</span> = "TAH-guh".',
      memoryTrick: 'ch ka sound uske aage wala vowel decide karta hai: <b>mota vowel (a o u) = mota kh</b>, <b>patla vowel (i e ä ö ü) = patla hy</b>. Aur word ke end mein d/g/b <b>sakht</b> ho jaate hain.',
      recap: [
        '<b>ch</b>: throaty after a o u, soft after i e ä ö ü.',
        'Final <b>-ig</b> = "ikh" (<span class="de">wichtig</span>, <span class="de">richtig</span>).',
        'Final <b>d g b</b> harden to <b>t k p</b> — but only at the end.'
      ],
      connect: { from: 'Chapter 1', text: 'Chapter 1 promised these two: <b>ch</b> and <b>-ig</b>. That is why <span class="de">Mädchen</span> was written "MAYT-khen" there — now you know which of the two ch sounds it is, and why.' }
    },
    {
      title: 'Stress & the music of a word',
      whatIsIt: 'One syllable in every word is <span class="de r-adjective">betont</span> — stressed: a little louder, longer and clearer than the others. Put the stress on the wrong syllable and a correctly pronounced word can still be hard to understand.',
      body: [
        'In German the stress is almost always the <b>first</b> syllable. Two things move it, and both are predictable.'
      ],
      goldenRule: 'Stress the <b>first</b> syllable — unless the word starts with an unstressed prefix (<b>be- ge- ver- er- ent-</b>), or it is an obvious international word.',
      formula: [
        'normal German word     →  FIRST syllable   (AP-fel, AUS-spra-che)',
        'be- / ge- / ver- / er- →  skip the prefix  (be-TO-nung, ver-STE-hen)',
        'international word     →  usually the end   (Mu-SIK, Stu-DENT, Ho-TEL)'
      ],
      table: {
        head: ['Word', 'Stressed syllable', 'Why'],
        rows: [
          ['<span class="de r-subject">Apfel</span>', '<b>AP</b>-fel', 'normal German word — first syllable'],
          ['<span class="de r-subject">Aussprache</span>', '<b>AUS</b>-spra-che', 'normal German word — first syllable'],
          ['<span class="de r-subject">Betonung</span>', 'be-<b>TO</b>-nung', '<b>be-</b> is an unstressed prefix, so the stress moves past it'],
          ['<span class="de r-subject">Musik</span>', 'Mu-<b>SIK</b>', 'borrowed word — stress at the end']
        ]
      },
      note: 'Across a whole sentence the pitch also moves — the <i>Satzmelodie</i>. It <b>falls</b> at the end of a statement and <b>rises</b> at the end of a yes/no question. Same words, different melody, different meaning: <span class="de">Du kommst.</span> / <span class="de">Du kommst?</span>',
      hinglish: 'Har word mein ek syllable <b>betont</b> hoti hai, matlab uspar thoda zyada zor padta hai aur woh thodi lambi bolti jaati hai. German mein aksar pehli syllable par zor hota hai, jaise <span class="de">AP-fel</span> aur <span class="de">AUS-spra-che</span>. Do cheezein ise hila deti hain, aur dono predictable hain. Pehli, <b>be-, ge-, ver-, er-</b> aur <b>ent-</b> prefix par zor nahi padta, isliye <span class="de">be-TO-nung</span> bolte hain — yeh koi borrowed word nahi hai, bas prefix skip ho raha hai. Doosri, bahar se aaye words ka zor aakhir mein hota hai, jaise <span class="de">Mu-SIK</span>. Class mein ek trick kaam karti hai: stressed syllable par mez <i>klopfen</i> karo, aur haath tumhare kaan ko sikha dega.',
      memoryTrick: 'Zor <b>pehli</b> syllable par — jab tak be-/ge-/ver-/er- saamne na ho. Prefix ko skip karo, phir pehli syllable.',
      recap: [
        'German stress = <b>first</b> syllable, as a default.',
        'Unstressed prefixes <b>be- ge- ver- er- ent-</b> get skipped (be-<b>TO</b>-nung).',
        'International words usually stress the <b>end</b> (Mu-<b>SIK</b>).',
        'Statement falls at the end; yes/no question rises.'
      ]
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits carry over from Hindi and English. None of them are hard to fix — they are just automatic, so you have to catch them once and then listen for them.',
      body: [ 'Each one below is a real rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Mann = "maan" (long a)', right: 'Mann = "man" (short a)', why: 'The double n crowds the vowel, so the a is snapped short. Crowded = short.' },
        { wrong: 'Jahr = "jar" (English j)', right: 'Jahr = "yaar" (long a)', why: 'German j is the English "y", and the silent h gives the a room to stretch.' },
        { wrong: 'über = "oober"', right: 'über = lips for "u", say "ee"', why: 'ü is not "oo". Set the lips, then change only the sound — not the lips.' },
        { wrong: 'Hund = "hund" (soft d)', right: 'Hund = "hunt" (hard t)', why: 'A d at the end of a word hardens to t. Add a vowel and it softens again: Hunde = "HUN-duh".' }
      ],
      hinglish: 'Chaar aadat Hindi aur English se aa jaati hain, aur ek baar inhe pakad lo to phir tum khud hi notice karne lagoge. <span class="de">Mann</span> mein chhota "man" bolna hai, kyunki double <b>n</b> ne vowel ko daba diya hai. <span class="de">Jahr</span> ko "yaar" bolo, kyunki German ka <b>j</b> "y" ki tarah bolta hai. <span class="de">über</span> mein <b>ü</b> ko "oo" nahi bolna — honth gol karke "ee" bolo. Aur word ke end ka <b>-d, -g</b> ya <b>-b</b> sakht ho jaata hai: <span class="de">Hund</span> = "hunt" aur <span class="de">Tag</span> = "tahk".',
      memoryTrick: 'Chaar check: <b>length</b> theek? <b>j</b> ko "y" bola? <b>ü</b> par honth gol? <b>end</b> ka d/g/b sakht?',
      connect: { from: 'the next chapter', text: 'Chapter 3 (<i>Zahlen 0–100</i>) is your first real test of all this — German numbers are full of short vowels, <b>ei</b>, <b>z</b> and word-final <b>-g</b>: <span class="de">zwei</span>, <span class="de">drei</span>, <span class="de">zwanzig</span>, <span class="de">dreißig</span>.' }
    }
  ],
  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die erste Stunde',
    titleEn: 'The first lesson',
    tokens: [
      { w: 'Die', role: 'r-article', en: 'the', hi: 'वह', pron: 'dee', type: 'Article · fem. nom.', why: 'Feminine nouns take <b>die</b> in the nominative.', ex: 'Die Aussprache ist wichtig.', exEn: 'Pronunciation is important.' },
      { w: 'Aussprache', role: 'r-subject', case: 'Nominativ', en: 'pronunciation', hi: 'उच्चारण', pron: 'OWS-shprah-khe', type: 'Noun · subject', why: 'The thing being described — subject in the nominative. Stress falls on AUS.', ex: 'Die Aussprache ist wichtig.', exEn: 'Pronunciation is important.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'From <i>sein</i> (to be). Short i — two consonants follow.', ex: 'Es ist gut.', exEn: 'It is good.', advanced: { synonyms: ['existiert'], opposites: [] } },
      { w: 'wichtig', role: 'r-adjective', en: 'important', hi: 'महत्वपूर्ण', pron: 'VIKH-tikh', type: 'Adjective', why: 'Note: w = "v", and final -ig sounds like "ikh".', ex: 'Das ist wichtig.', exEn: 'That is important.', compare: { comparative: 'wichtiger', superlative: 'am wichtigsten' }, advanced: { synonyms: ['bedeutend'], opposites: ['unwichtig'] } },
      { w: '.', plain: true },
      { w: 'Sprich', role: 'r-verb', en: 'speak (you)', hi: 'बोलो', pron: 'shprikh', type: 'Verb · imperative', why: 'Command form of <i>sprechen</i>. sch = "sh", short i.', ex: 'Sprich langsam!', exEn: 'Speak slowly!', conj: { praesens: 'spricht', praeteritum: 'sprach', perfekt: 'hat gesprochen' }, advanced: { synonyms: ['reden'], opposites: ['schweigen'] } },
      { w: 'langsam', role: 'r-adverb', en: 'slowly', hi: 'धीरे', pron: 'LANG-zahm', type: 'Adverb', why: 'Short a (two consonants), then long a. s sounds like "z".', ex: 'Sprich langsam.', exEn: 'Speak slowly.', compare: { comparative: 'langsamer', superlative: 'am langsamsten' }, advanced: { synonyms: ['gemächlich'], opposites: ['schnell'] } },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'Final d devoices to "t": "unt".', ex: 'du und ich', exEn: 'you and I' },
      { w: 'laut', role: 'r-adverb', en: 'aloud, loudly', hi: 'ज़ोर से', pron: 'lowt', type: 'Adverb', why: 'au is one sound, like "ow" in <i>now</i>.', ex: 'Lies laut.', exEn: 'Read aloud.', compare: { comparative: 'lauter', superlative: 'am lautesten' }, advanced: { synonyms: ['deutlich'], opposites: ['leise'] } },
      { w: '.', plain: true },
      { w: 'Achte', role: 'r-verb', en: 'pay attention', hi: 'ध्यान दो', pron: 'AKH-te', type: 'Verb · imperative', why: 'Command form of <i>achten</i>. ch after a = throaty "kh".', ex: 'Achte auf die Vokale.', exEn: 'Pay attention to the vowels.', conj: { praesens: 'achtet', praeteritum: 'achtete', perfekt: 'hat geachtet' }, advanced: { synonyms: ['aufpassen'], opposites: ['ignorieren'] } },
      { w: 'auf', role: 'r-preposition', en: 'on / to', hi: 'पर', pron: 'owf', type: 'Preposition', why: 'au = "ow". Goes with <i>achten auf</i> = pay attention to.', ex: 'auf den Laut', exEn: 'to the sound' },
      { w: 'die', role: 'r-article', en: 'the', hi: 'वह', pron: 'dee', type: 'Article · plural', why: 'Plural article — here before Betonung group.', ex: 'die Laute', exEn: 'the sounds' },
      { w: 'Betonung', role: 'r-object', case: 'Akkusativ', en: 'the stress', hi: 'बलाघात', pron: 'be-TOH-nung', type: 'Noun · object', why: 'The thing to attend to — object. Stress on the long second syllable: be-TOH-nung.', ex: 'Achte auf die Betonung.', exEn: 'Pay attention to the stress.' },
      { w: '.', plain: true },
      { w: 'Sprich', role: 'r-verb', en: 'speak (you)', hi: 'बोलो', pron: 'shprikh', type: 'Verb · imperative', why: 'Command form again — now with a separable prefix coming.', ex: 'Sprich nach!', exEn: 'Repeat after me!', conj: { praesens: 'spricht', praeteritum: 'sprach', perfekt: 'hat gesprochen' }, advanced: { synonyms: ['wiederholen'], opposites: [] } },
      { w: 'nach', role: 'r-verb', en: '…after (prefix)', hi: 'बाद में (उपसर्ग)', pron: 'nakh', type: 'Separable prefix', why: 'Prefix of <i>nachsprechen</i> — it jumps to the end: "Sprich … nach".', ex: 'Sprich das Wort nach.', exEn: 'Repeat the word.', advanced: { synonyms: [], opposites: [] } },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'Final d → "t".', ex: 'laut und klar', exEn: 'loud and clear' },
      { w: 'sag', role: 'r-verb', en: 'say (you)', hi: 'कहो', pron: 'zahk', type: 'Verb · imperative', why: 'Command form of <i>sagen</i>. s = "z", final g → "k".', ex: 'Sag das noch einmal.', exEn: 'Say that once more.', conj: { praesens: 'sagt', praeteritum: 'sagte', perfekt: 'hat gesagt' }, advanced: { synonyms: ['sprechen'], opposites: ['schweigen'] } },
      { w: 'es', role: 'r-pronoun', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · object', why: 'Short e, like "e" in bed.', ex: 'Sag es laut.', exEn: 'Say it aloud.' },
      { w: 'noch', role: 'r-adverb', en: 'still / more', hi: 'और / अभी', pron: 'nokh', type: 'Adverb', why: 'ch after o = throaty "kh". Part of <i>noch einmal</i>.', ex: 'noch einmal', exEn: 'once more' },
      { w: 'einmal', role: 'r-adverb', en: 'once', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb', why: 'ei = "eye". <i>noch einmal</i> = once more.', ex: 'Sag es noch einmal.', exEn: 'Say it once more.' },
      { w: '.', plain: true }
    ],
    translation: 'Pronunciation is important. Speak slowly and aloud. Pay attention to the stress. Repeat after me and say it once more.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_002_L001', speaker: 'Frau Bauer', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Jonas, morgen sprichst du über deine Stadt. Sag "München" bitte langsam.', en: 'Jonas, tomorrow you talk about your city. Please say "Munich" slowly.' },
      { id: 'A1_002_L002', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'München.', en: 'Munich.' },
      { id: 'A1_002_L003', speaker: 'Frau Bauer', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, aber höre den Umlaut: Mün-chen. Noch einmal.', en: 'Good, but listen to the umlaut: Mün-chen. Once more.' },
      { id: 'A1_002_L004', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'München! Jetzt hört es sich besser an.', en: 'Munich! Now it sounds better.' }
    ],
    transcript: 'Jonas, morgen sprichst du über deine Stadt. Sag "München" bitte langsam. München. Gut, aber höre den Umlaut: Mün-chen. Noch einmal. München! Jetzt hört es sich besser an.',
    translation: 'Jonas, tomorrow you talk about your city. Please say "Munich" slowly. Munich. Good, but listen to the umlaut: Mün-chen. Once more. Munich! Now it sounds better.',
    tokens: [
      { w: 'Jonas' },
      { w: ',', plain: true },
      { w: 'morgen' },
      { w: 'sprichst' },
      { w: 'du' },
      { w: 'über' },
      { w: 'deine' },
      { w: 'Stadt' },
      { w: '.', plain: true },
      { w: 'Sag' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'München' },
      { w: '"', plain: true },
      { w: 'bitte' },
      { w: 'langsam' },
      { w: '.', plain: true },
      { w: 'München' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'höre' },
      { w: 'den' },
      { w: 'Umlaut' },
      { w: ':', plain: true },
      { w: 'Mün-chen' },
      { w: '.', plain: true },
      { w: 'Noch' },
      { w: 'einmal' },
      { w: '.', plain: true },
      { w: 'München' },
      { w: '!', plain: true },
      { w: 'Jetzt' },
      { w: 'hört' },
      { w: 'es' },
      { w: 'sich' },
      { w: 'besser' },
      { w: 'an' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür übt Jonas?', qEn: 'What is Jonas practicing for?', options: ['Für ein Telefongespräch', 'Für eine Präsentation über seine Stadt', 'Für einen Brief', 'Für ein Lied'], optionsEn: ['A phone call', 'A presentation about his city', 'A letter', 'A song'], answer: 1,
        explain: '"Morgen sprichst du über deine Stadt" — he is preparing to talk about his city.' },
      { q: 'Welchen Laut korrigiert Frau Bauer?', qEn: 'Which sound does Frau Bauer correct?', options: ['Den Konsonanten ch', 'Den Umlaut ü', 'Den Buchstaben B', 'Den Buchstaben S'], optionsEn: ['The consonant ch', 'The umlaut ü', 'The letter B', 'The letter S'], answer: 1,
        explain: '"Höre den Umlaut: Mün-chen" — she is correcting the ü sound.' }
    ]
  },

  speaking: [
    { task: "Die Lehrerin sagt: Sprich bitte langsam nach — München.", taskEn: "The teacher says: repeat slowly after me — München.", de: "Mün-chen. Ich spreche langsam nach.", en: "Mün-chen. I'm repeating slowly." },
    { task: "Deine Lehrerin fragt: Wo ist die Betonung in „Aussprache“?", taskEn: "Your teacher asks: where is the stress in “Aussprache”?", de: "Die Betonung ist am Wortanfang: AUS-sprache.", en: "The stress is at the start of the word: AUS-sprache." },
    { task: "Dein Partner spricht zu schnell. Was sagst du ihm?", taskEn: "Your partner speaks too fast. What do you say to him?", de: "Sprich bitte langsam und laut. Noch einmal!", en: "Please speak slowly and loudly. Once more!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write three words from this chapter. For each, mark the vowel as long or short and underline the stressed syllable (e.g. "Mann — short a — MANN"). Use the coaching words if you can.',
    starters: ['Aussprache — …', 'langsam — …', 'über — …'],
    placeholder: 'Mann — short a — …',
    minWords: 9
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'In which word is the vowel SHORT?',
      options: ['Jahr', 'Mann', 'gut', 'Haar'],
      answer: 1,
      explain: 'Mann has a double n → the a is short. The others are long (silent h, single consonant, double vowel).'
    },
    gap: {
      // Fill the coaching instruction.
      sentence: ['Sprich ', ' und ', '.'],
      gaps: [ { answer: 'langsam', accepts: ['langsam'] }, { answer: 'laut', accepts: ['laut'] } ],
      explain: 'A typical classroom instruction: "Sprich langsam und laut." — Speak slowly and aloud.'
    },
    match: {
      q: 'Match each umlaut/sound to how you make it.',
      pairs: [
        { noun: 'ä', art: '"e" in bed' },
        { noun: 'ö', art: 'round lips, "e"' },
        { noun: 'ü', art: 'round lips, "ee"' },
        { noun: 'ie', art: 'long "ee"' }
      ]
    },
    builder: {
      target: 'Build: "Pay attention to the stress."',
      bank: ['die', 'Achte', 'Betonung', 'auf'],
      answer: ['Achte', 'auf', 'die', 'Betonung'],
      roles: { 'Achte': 'r-verb', 'auf': 'r-preposition', 'die': 'r-article', 'Betonung': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'A double consonant (e.g. "nn" in Mann) tells you the vowel is…', options: ['long', 'short', 'silent', 'stressed'], answer: 1,
      explain: 'A doppelt (double) consonant shortens the vowel before it: Mann = short a.' },
    { q: 'How do you make the German "ü" (as in über)?', options: ['Say "oo"', 'Say "you"', 'Round the lips and say "ee"', 'Say "uh"'], answer: 2,
      explain: 'Round your lips for "oo", then say "ee" without moving them.' },
    { q: 'Where does German word stress usually fall?', options: ['Last syllable', 'First syllable', 'Middle syllable', 'It varies randomly'], answer: 1,
      explain: 'Most native German words are stressed on the first syllable: AP-fel, AUS-spra-che.' },
    { q: 'The vowels "a" and "aa" (as in Stadt vs Staat)…', options: ['are completely different sounds', 'sound the same — aa is just longer', 'are both always short', 'never appear in German'], answer: 1,
      explain: 'a and aa are the same vowel quality; aa is simply the long version. (gleich = the same.)' },
    { q: 'The word "Jahr" is pronounced…', options: ['"jar"', '"yaar" (long a)', '"yar" (short)', '"zhar"'], answer: 1,
      explain: 'j = "y" and the silent h makes the a long: "yaar".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'German vowels are <b>pure and single</b>, and come in two lengths — the <b>spelling</b> tells you long or short.' },
    { c: 'r-article', html: 'Three umlauts: <span class="de">ä</span> ("e"), <span class="de">ö</span> and <span class="de">ü</span> (round the lips, then "e"/"ee").' },
    { c: 'r-object', html: 'Stress is usually the <b>first</b> syllable; <i>klopfen</i> (tap) it out to train your ear.' }
  ],
  revisionTips: [
    'Say minimal pairs aloud daily: Mann/Bahn, Stadt/Staat — feel the short vs long.',
    'Tap the table on the stressed syllable while you say each new word.',
    'When you meet a new word, decide "long or short?" from the spelling before you say it.'
  ]
};

window.CHAPTER = CHAPTER;
