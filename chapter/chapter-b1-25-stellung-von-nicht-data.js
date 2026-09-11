/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 25
   "Stellung von 'nicht' im Satz" — sentence negation, adjective/
   adverb/prepositional-phrase negation, focus negation, and the
   nicht vs kein decision. Does NOT introduce double negation,
   literary negation, or B2 focus particles.
   IMPORTANT: dialogue uses ONLY Sinje and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-25 list (21 items) — an
   honesty/conscience theme (Gewissensfrage, Zeitungskasten,
   Blickkontakt, betrügen, tolerieren…) built around an
   honesty-box newspaper stand — a natural fit for negating
   claims, actions and specific words.
============================================================ */
const CHAPTER = {
  id: 'b1-25-stellung-von-nicht',
  phase: 'B1 · Phase 1',
  number: 25,
  title: 'Stellung von „nicht" im Satz',
  titleEn: 'Position of "nicht" in the sentence',
  description: 'Where nicht goes: sentence negation, negating adjectives, adverbs, and prepositional phrases, focus negation on a single word, and the nicht vs kein decision.',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 26, title: 'Adjektivdeklination ohne Artikel', titleEn: 'Adjective declension without an article' , href: 'chapter-b1-26-adjektiv-ohne-artikel.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One word, <em>five places it can stand.</em>',
    intro: 'Sinje and Timo pass an honesty-box newspaper stand — she won\'t take the change, because that isn\'t right, and won\'t keep the wallet either — a small moral test of exactly what "nicht" is negating each time.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear all five nicht-positions used naturally in one conversation'
    ],
    scene: 'Der Zeitungskasten',
    femaleSpeakers: ['Sinje'],
    dialogue: [
      { speaker: 'Sinje', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती नहीं', pron: 'NAY-muh', type: 'Verb · nehmen (ich)', why: 'nicht negates the whole predicate: at Satzende for simple verbs (this chapter).', ex: 'Ich nehme das Kleingeld nicht.', exEn: 'I do not take the small change.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Kleingeld', role: 'r-akkusativ', en: 'small change', hi: 'खुल्ला पैसा', pron: 'KLINE-gelt', type: 'Noun · neut.', why: 'das Kleingeld (this chapter).', ex: 'Ich nehme das Kleingeld nicht.', exEn: 'I do not take the small change.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'I do not take the small change.', hi: 'Main khulla paisa nahi leti.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '?', plain: true }
      ], en: 'Why not?', hi: 'Kyun nahi?' },
      { speaker: 'Sinje', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht before an adjective negates just that word (this chapter).', ex: 'Das ist nicht richtig.', exEn: 'That is not right.' },
        { w: 'richtig', role: 'r-subject', en: 'right', hi: 'सही', pron: 'RIKH-tikh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Because that is not right.', hi: 'Kyunki yeh sahi nahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gehen', role: 'r-verb', en: 'shall we go', hi: 'जाएं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht before a prepositional phrase negates just that phrase (this chapter).', ex: 'Wir gehen nicht zur Polizei.', exEn: 'We do not go to the police.' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Polizei', role: 'r-akkusativ', en: 'police', hi: 'पुलिस', pron: 'po-li-TSY', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Shall we not go to the police?', hi: 'Kya hum police ke paas nahi jaayenge?' },
      { speaker: 'Sinje', tokens: [
        { w: 'Doch', role: 'r-adverb', en: 'yes we do', hi: 'हाँ हम जाएंगे', pron: 'dokh', type: 'Reaction' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Geldbeutel', role: 'r-akkusativ', en: 'wallet', hi: 'बटुआ', pron: 'GELT-boy-tel', type: 'Noun · masc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht before an infinitive at Satzende negates the whole action (this chapter).', ex: 'Wir sollten das nicht behalten.', exEn: 'We should not keep that.' },
        { w: 'behalten', role: 'r-verb', en: 'keep', hi: 'रखना', pron: 'be-HAL-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes we do, we should not keep the wallet.', hi: 'Haan hum jaayenge, humein batua nahi rakhna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Gehen', role: 'r-verb', en: 'let us go', hi: 'चलते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'You are right about that. Let us go now.', hi: 'Tum sahi ho. Ab chalte hain.' },
      { speaker: 'Sinje', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'froh', role: 'r-akkusativ', en: 'glad', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'gezögert', role: 'r-verb', en: 'hesitated', hi: 'देरी की', pron: 'ge-TSÖ-gert', type: 'Partizip II' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'थी', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am glad that we did not hesitate.', hi: 'Mujhe khushi hai ki humne deri nahi ki.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'One word, five places it can stand: <span class="de r-negation">nicht</span> negates the whole sentence, an adjective, an adverb, a prepositional phrase, or one specific word — and the position always shifts to sit directly before whatever is being negated. For nouns with an article, reach for <span class="de r-negation">kein</span> instead.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is STELLUNG VON NICHT IM SATZ (B1 level only): sentence negation (nicht near the end, before the element outside the negation), adjective negation (nicht directly before the adjective), adverb negation (nicht directly before the adverb), prepositional-phrase negation (nicht before the whole phrase), and focus negation (nicht directly before one specific word, often followed by sondern). Also nicht vs kein: kein negates nouns with an article, nicht negates everything else. ' +
    'Do NOT expect double negation, literary negation, or advanced focus particles — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- If a noun with an article is negated, "kein" is required, not "nicht ein".\n' +
    '- If "nicht" is placed before the wrong element (e.g. before the finite verb, or floating mid-sentence with no clear target), flag it and show where it should sit — directly before the element being negated.\n' +
    '- Focus negation ("Nicht X, sondern Y") should only be flagged as wrong if the two halves don\'t logically contrast.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Placement check:</b> one sentence on whether "nicht" sits directly before the element it negates in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you consistently place nicht right before whatever it negates. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the decision table once — especially nicht vs kein and focus negation — then continue.',
    low: 'Worth another pass through the Grammar section — practise asking "what exactly am I negating?" before every sentence.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subject' }, { w: 'Auto', role: 'plain' },
    { w: 'ist', role: 'plain' }, { w: 'nicht', role: 'r-negation' },
    { w: 'teuer', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: nicht always moves to sit directly before what it negates.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Sinje and Timo work through a conscience question at an honesty-box newspaper stand.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master sentence, adjective, adverb, prepositional-phrase, and focus negation with nicht.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about an honesty-box test, full of different nicht-positions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what exactly is being negated in each spoken sentence.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Correct misunderstandings and state facts precisely using nicht.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write short texts placing nicht correctly in every sentence.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill nicht placement and the nicht vs kein decision.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 21 chapter words — conscience and honesty vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Nicht-placement drills, nicht vs kein, error correction, and a short-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full nicht-placement reference — five positions, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'nicht (Satzende)', text: 'Negate a whole sentence or action' },
    { de: 'nicht + Adjektiv', text: 'Negate an adjective' },
    { de: 'nicht + Adverb', text: 'Negate an adverb' },
    { de: 'nicht + Präposition', text: 'Negate a prepositional phrase' },
    { de: 'Nicht X, sondern Y', text: 'Negate one specific word for emphasis' }
  ],

  // ---------- Vocabulary (21 items — full chapter-25 upload list) ----------
  vocab: [
    { de: 'Gewissen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'conscience', hi: 'अंतरात्मा', ex: 'Mein Gewissen lässt mich nicht in Ruhe.', exEn: 'My conscience won\'t leave me alone.', exHi: 'Mera zameer mujhe chain se nahi rehne deta.', ex2: 'Sie hat ein gutes Gewissen.', ex2En: 'She has a clear conscience.', ex2Hi: 'Uska zameer saaf hai.' },
    { de: 'basieren', pos: 'verb', level: 'B1', en: 'to be based on (auf + D.)', hi: 'आधारित होना', ex: 'Der Film basiert auf einer wahren Geschichte.', exEn: 'The film is based on a true story.', exHi: 'Film ek sacchi kahani par aadhaarit hai.', ex2: 'Seine Meinung basiert nicht auf Fakten.', ex2En: 'His opinion isn\'t based on facts.', ex2Hi: 'Uski raay tathyon par aadhaarit nahi hai.', conj: { praesens: 'basiert', praeteritum: 'basierte', perfekt: 'hat basiert' } },
    { de: 'befürworten', pos: 'verb', level: 'B1', en: 'to agree with, support', hi: 'समर्थन करना', ex: 'Ich befürworte diesen Plan nicht.', exEn: 'I don\'t support this plan.', exHi: 'Main is yojana ka samarthan nahi karta.', ex2: 'Sie befürwortet die Idee sehr.', ex2En: 'She strongly supports the idea.', ex2Hi: 'Woh is vichaar ka poora samarthan karti hai.', conj: { praesens: 'befürwortet', praeteritum: 'befürwortete', perfekt: 'hat befürwortet' } },
    { de: 'betrügen', pos: 'verb', level: 'B1', en: 'to cheat', hi: 'धोखा देना', ex: 'Er betrügt niemanden.', exEn: 'He\'s not cheating anyone.', exHi: 'Woh kisi ko dhokha nahi de raha.', ex2: 'Es geht nicht ums Erwischtwerden, sondern ums Betrügen selbst.', ex2En: 'It\'s not about getting caught, but about the cheating itself.', ex2Hi: 'Baat pakde jaane ki nahi, balki dhokhe ki hai.', conj: { praesens: 'betrügt', praeteritum: 'betrog', perfekt: 'hat betrogen' } },
    { de: 'einwerfen', pos: 'verb', level: 'B1', en: 'to insert (a coin)', hi: 'डालना (सिक्का)', ex: 'Ich habe das Kleingeld nicht eingeworfen.', exEn: 'I didn\'t insert the change.', exHi: 'Maine chutte paise nahi daale.', ex2: 'Wirf das Geld bitte in den Kasten ein.', ex2En: 'Please insert the money into the box.', ex2Hi: 'Kripya paise box mein daalo.', conj: { praesens: 'wirft ein', praeteritum: 'warf ein', perfekt: 'hat eingeworfen' } },
    { de: 'fort', pos: 'adverb', level: 'B1', en: 'gone', hi: 'चला गया', ex: 'Das Geld war schnell fort.', exEn: 'The money was gone quickly.', exHi: 'Paisa jaldi gayab ho gaya.', ex2: 'Er ist schon lange fort.', ex2En: 'He\'s been gone for a long time.', ex2Hi: 'Woh bahut der se chala gaya hai.' },
    { de: 'merken', pos: 'verb', level: 'B1', en: 'to notice', hi: 'ध्यान देना, नोटिस करना', ex: 'Er merkt, dass ich nervös bin.', exEn: 'He notices that I\'m nervous.', exHi: 'Use lagta hai ki main ghabraya hua hoon.', ex2: 'Niemand hat es gemerkt.', ex2En: 'Nobody noticed it.', ex2Hi: 'Kisi ne bhi isse notice nahi kiya.', conj: { praesens: 'merkt', praeteritum: 'merkte', perfekt: 'hat gemerkt' } },
    { de: 'nachprüfen', pos: 'verb', level: 'B1', en: 'to check, verify', hi: 'जाँचना', ex: 'Niemand wird das nachprüfen.', exEn: 'Nobody will check that.', exHi: 'Koi bhi isse nahi jaanchega.', ex2: 'Ich muss die Zahlen nachprüfen.', ex2En: 'I have to check the numbers.', ex2Hi: 'Mujhe sankhyaon ki jaanch karni hai.', conj: { praesens: 'prüft nach', praeteritum: 'prüfte nach', perfekt: 'hat nachgeprüft' } },
    { de: 'sich räuspern', pos: 'verb', level: 'B1', en: 'to clear one\'s throat', hi: 'गला साफ़ करना', ex: 'Räuspere dich nicht so nervös.', exEn: 'Don\'t clear your throat so nervously.', exHi: 'Itna ghabraakar gala saaf mat karo.', ex2: 'Er räusperte sich, bevor er sprach.', ex2En: 'He cleared his throat before speaking.', ex2Hi: 'Bolne se pehle usne gala saaf kiya.', conj: { praesens: 'räuspert sich', praeteritum: 'räusperte sich', perfekt: 'hat sich geräuspert' } },
    { de: 'tolerieren', pos: 'verb', level: 'B1', en: 'to tolerate', hi: 'बर्दाश्त करना', ex: 'Ich toleriere so etwas bei mir nicht.', exEn: 'I don\'t tolerate that kind of thing from myself.', exHi: 'Main khud se aisi cheez bardaasht nahi karta.', ex2: 'Sie toleriert keine Lügen.', ex2En: 'She doesn\'t tolerate lies.', ex2Hi: 'Woh jhooth bardaasht nahi karti.', conj: { praesens: 'toleriert', praeteritum: 'tolerierte', perfekt: 'hat toleriert' } },
    { de: 'unmöglich', pos: 'adjective', level: 'B1', en: 'impossible', hi: 'असंभव', ex: 'Das ist nicht unmöglich.', exEn: 'That\'s not impossible.', exHi: 'Yeh asambhav nahi hai.', ex2: 'Es ist unmöglich, das zu beweisen.', ex2En: 'It\'s impossible to prove that.', ex2Hi: 'Isse saabit karna asambhav hai.' },
    { de: 'weiterverschenken', pos: 'verb', level: 'B1', en: 'to pass on as a gift', hi: 'आगे उपहार में देना', ex: 'Ich werde das Buch weiterverschenken.', exEn: 'I\'ll pass the book on as a gift.', exHi: 'Main kitaab aage upahaar mein doonga.', ex2: 'Er verschenkt seine alten Zeitungen nicht weiter.', ex2En: 'He doesn\'t pass on his old newspapers.', ex2Hi: 'Woh apne purane akhbaar aage nahi deta.', conj: { praesens: 'verschenkt weiter', praeteritum: 'verschenkte weiter', perfekt: 'hat weiterverschenkt' } },
    { de: 'Kleingeld', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'small change', hi: 'छुट्टे पैसे', ex: 'Ich habe kein Kleingeld dabei.', exEn: 'I don\'t have any change on me.', exHi: 'Mere paas chutte paise nahi hain.', ex2: 'Wirf das Kleingeld in den Kasten.', ex2En: 'Put the change in the box.', ex2Hi: 'Chutte paise box mein daalo.' },
    { de: 'Wort', art: 'das', gender: 'n', plural: 'Wörter', pos: 'noun', level: 'B1', en: 'word', hi: 'शब्द', ex: 'Er sagte kein Wort.', exEn: 'He didn\'t say a word.', exHi: 'Usne ek shabd bhi nahi kaha.', ex2: 'Nicht jedes Wort war ehrlich.', ex2En: 'Not every word was honest.', ex2Hi: 'Har shabd imaandaar nahi tha.' },
    { de: 'Blickkontakt', art: 'der', gender: 'm', plural: 'Blickkontakte', pos: 'noun', level: 'B1', en: 'eye contact', hi: 'आँखों का संपर्क', ex: 'Ein Blickkontakt mit einem Nachbarn genügt.', exEn: 'Eye contact with one neighbour is enough.', exHi: 'Ek padosi ke saath aankhon ka sampark kaafi hai.', ex2: 'Sie vermied jeden Blickkontakt.', ex2En: 'She avoided all eye contact.', ex2Hi: 'Usne har aankhon ke sampark se bachaav kiya.' },
    { de: 'Kasten', art: 'der', gender: 'm', plural: 'Kästen', pos: 'noun', level: 'B1', en: 'box', hi: 'बॉक्स', ex: 'Der Kasten steht vor dem Haus.', exEn: 'The box stands in front of the house.', exHi: 'Box ghar ke saamne hai.', ex2: 'Wirf das Geld in den Kasten.', ex2En: 'Put the money in the box.', ex2Hi: 'Paisa box mein daalo.' },
    { de: 'Staub', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dust', hi: 'धूल', ex: 'Auf dem Kasten liegt Staub.', exEn: 'Dust is sitting on the box.', exHi: 'Box par dhool jami hai.', ex2: 'Ich mag keinen Staub im Zimmer.', ex2En: 'I don\'t like dust in the room.', ex2Hi: 'Mujhe kamre mein dhool pasand nahi.' },
    { de: 'Vorwurf', art: 'der', gender: 'm', plural: 'Vorwürfe', pos: 'noun', level: 'B1', en: 'accusation', hi: 'आरोप', ex: 'Das ist kein Vorwurf, nur eine Frage.', exEn: 'That\'s not an accusation, just a question.', exHi: 'Yeh koi aarop nahi, sirf ek sawaal hai.', ex2: 'Er machte ihr keinen Vorwurf.', ex2En: 'He didn\'t make any accusation against her.', ex2Hi: 'Usne uspar koi aarop nahi lagaaya.' },
    { de: 'Zeitungskasten', art: 'der', gender: 'm', plural: 'Zeitungskästen', pos: 'noun', level: 'B1', en: 'newspaper rack (honesty box)', hi: 'अख़बार बॉक्स', ex: 'Wir stehen vor dem Zeitungskasten.', exEn: 'We\'re standing in front of the newspaper rack.', exHi: 'Hum akhbaar box ke saamne khade hain.', ex2: 'Der Zeitungskasten funktioniert ohne Verkäufer.', ex2En: 'The newspaper rack works without a seller.', ex2Hi: 'Akhbaar box bina vikreta ke chalta hai.' },
    { de: 'Gewissensfrage', art: 'die', gender: 'f', plural: 'Gewissensfragen', pos: 'noun', level: 'B1', en: 'question of conscience', hi: 'अंतरात्मा का सवाल', ex: 'Das ist eine echte Gewissensfrage.', exEn: 'That\'s a real question of conscience.', exHi: 'Yeh ek asli antaraatma ka sawaal hai.', ex2: 'Solche Gewissensfragen sind nicht leicht.', ex2En: 'Such questions of conscience aren\'t easy.', ex2Hi: 'Aise antaraatma ke sawaal aasaan nahi hote.' },
    { de: 'drin sein', pos: 'idiom', level: 'B1', en: 'to be in, be possible', hi: 'संभव होना', ex: 'Eine Ausrede ist nicht drin.', exEn: 'An excuse isn\'t possible / won\'t fly.', exHi: 'Koi bahaana nahi chalega.', ex2: 'Mehr Zeit ist heute leider nicht drin.', ex2En: 'More time isn\'t possible today, unfortunately.', ex2Hi: 'Aaj zyaada samay milna sambhav nahi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was verneint "nicht"?',
      body: [ '"nicht" can negate the whole sentence, an adjective, an adverb, a prepositional phrase, or one specific word. Always ask WHAT is being negated first — that decides where "nicht" goes.' ],
      hinglish: '"nicht" poore sentence ko, ya sirf ek adjective, adverb, prepositional phrase ya ek khaas word ko negate kar sakta hai. Hamesha pehle poochho: kya negate ho raha hai?'
    },
    {
      title: 'Satzverneinung — der ganze Satz',
      body: [ 'When the WHOLE sentence/action is negated, nicht usually stands near the end — after objects and most adverbs, before the final verb or verb complement.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Subjekt … Objekt … nicht (+ Verbrest)', '<span class="de">Rohan hat das Kleingeld nicht eingeworfen.</span>']
        ]
      },
      hinglish: 'Jab poore sentence ya action ko negate karna ho, to nicht aksar sentence ke end mein aata hai — objects ke baad, aakhri verb se pehle.'
    },
    {
      title: 'Adjektivnegation',
      body: [ 'nicht stands directly before the adjective it negates.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['nicht + Adjektiv', '<span class="de">Die Zeitung ist nicht teuer.</span>']
        ]
      },
      hinglish: 'nicht seedhe adjective se pehle aata hai jise woh negate karta hai.'
    },
    {
      title: 'Adverbnegation',
      body: [ 'nicht stands directly before the adverb it negates.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['nicht + Adverb', '<span class="de">Ich komme nicht oft hierher.</span>']
        ]
      },
      hinglish: 'nicht seedhe adverb se pehle aata hai jise woh negate karta hai.'
    },
    {
      title: 'Präpositionalphrase-Negation',
      body: [ 'nicht stands directly before the entire prepositional phrase it negates.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['nicht + Präpositionalphrase', '<span class="de">Ich wohne nicht in dieser Straße.</span>']
        ]
      },
      hinglish: 'nicht seedhe poore prepositional phrase se pehle aata hai.'
    },
    {
      title: 'Fokusverneinung — ein bestimmtes Wort',
      body: [ 'When ONE specific word is emphatically negated, nicht stands directly before that word — often followed by a sondern-clause naming the true alternative.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Nicht X, sondern Y', '<span class="de">Nicht das Geld stört mich, sondern mein Gewissen.</span>']
        ]
      },
      hinglish: 'Jab ek khaas shabd ko emphatically negate kiya jaata hai, nicht seedhe us shabd se pehle aata hai — aksar sondern ke saath.'
    },
    {
      title: 'nicht vs kein',
      body: [ 'kein negates a noun that would otherwise carry ein/eine or no article. nicht negates everything else — verbs, adjectives, adverbs, phrases, and nouns that already have a definite article or possessive.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['kein (Substantiv mit ein/Nullartikel)', '<span class="de">Ich habe kein Auto.</span>'],
          ['nicht (alles andere)', '<span class="de">Das Auto ist nicht teuer.</span>']
        ]
      },
      note: 'Ask: am I negating a noun that would take ein/eine or no article? If yes → kein. Everything else → nicht.',
      hinglish: 'kein un nouns ko negate karta hai jo ein/eine ya bina article ke aate. Baaki sab kuch → nicht.'
    },
    {
      title: 'Wortstellungs-Zusammenfassung',
      body: [ 'One question decides where nicht goes every time: what exactly am I negating?' ],
      table: {
        head: ['What is negated?', 'Where nicht goes'],
        rows: [
          ['Noun (ein/Nullartikel)', 'Use kein instead'],
          ['Whole sentence / verb', 'Near the end, before the remaining verb part'],
          ['Adjective', 'Directly before the adjective'],
          ['Adverb', 'Directly before the adverb'],
          ['Prepositional phrase', 'Directly before the whole phrase'],
          ['One specific word', 'Directly before that word (often + sondern)']
        ]
      },
      note: 'Memory trick: ask "what exactly am I negating?" — the answer tells you exactly where nicht belongs.',
      hinglish: 'Ek sawaal hamesha nicht ki jagah tay karta hai: main asal mein kya negate kar raha hoon?'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from placing nicht in the wrong spot, or using nicht where kein belongs.' ],
      mistakes: [
        { wrong: 'Ich nicht komme.', right: 'Ich komme nicht.', why: 'nicht cannot stand between subject and verb in a simple sentence — the verb stays in position 2.' },
        { wrong: 'Ich komme nach Berlin nicht.', right: 'Ich komme nicht nach Berlin.', why: 'nicht goes directly before the prepositional phrase it negates \u2014 it cannot be parked at the very end after "nach Berlin".' },
        { wrong: 'Ich habe nicht Auto.', right: 'Ich habe kein Auto.', why: 'A noun without an article ("Auto") is negated with kein, never nicht.' },
        { wrong: 'Anna nicht arbeitet.', right: 'Anna arbeitet nicht.', why: 'The finite verb keeps position 2 — nicht cannot come before it here.' },
        { wrong: 'Wir fahren mit nicht dem Bus.', right: 'Wir fahren nicht mit dem Bus.', why: 'nicht stands before the whole prepositional phrase ("mit dem Bus"), not inside it.' }
      ],
      hinglish: 'Yeh galtiyaan nicht ko galat jagah rakhne se ya jahan kein chahiye wahan nicht use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Correct nicht-placement is tested constantly in Goethe B1 speaking and writing tasks — precision here signals real fluency.' ],
      note: 'Quick check: negating a noun with ein/no article? kein. Negating the whole action? nicht near the end. Negating one adjective, adverb, phrase, or word? nicht directly before it.',
      hinglish: 'Goethe B1 speaking aur writing mein nicht ki sahi jagah baar-baar test hoti hai — yahaan precision asli fluency dikhaati hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Der Test am Zeitungskasten',
    titleEn: 'The test at the newspaper rack',
    tokens: [
      { w: 'Vor', role: 'plain', en: 'in front of', hi: 'के सामने', type: 'Preposition · Dat.' },
      { w: 'vielen', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · stark · Dat.' },
      { w: 'Häusern', role: 'plain', en: 'houses', hi: 'घरों', type: 'Noun · plural · Dat.' },
      { w: 'steht', role: 'plain', en: 'stands', hi: 'खड़ा है', type: 'Verb · stehen' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Zeitungskasten', role: 'plain', en: 'newspaper rack', hi: 'अख़बार बॉक्स', type: 'Noun · masc.', why: 'der Zeitungskasten (this chapter).' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'which', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Preposition · Akk.' },
      { w: 'Verkäufer', role: 'plain', en: 'seller (Satzende)', hi: 'विक्रेता (Satzende)', type: 'Noun (Satzende)' },
      { w: 'funktioniert', role: 'plain', en: 'works (Satzende)', hi: 'काम करता है (Satzende)', type: 'Verb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Man', role: 'r-subject', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'nimmt', role: 'plain', en: 'takes', hi: 'लेता है', type: 'Verb · nehmen' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Zeitung', role: 'plain', en: 'newspaper', hi: 'अख़बार', type: 'Noun · fem.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'wirft', role: 'plain', en: 'inserts', hi: 'डालता है', type: 'Verb · einwerfen' },
      { w: 'das', role: 'plain', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Kleingeld', role: 'plain', en: 'small change', hi: 'छुट्टे पैसे', type: 'Noun · neut.', why: 'das Kleingeld (Sg.) (this chapter).' },
      { w: 'ein', role: 'plain', en: '(einwerfen, Satzende)', hi: '—', type: 'Verbpartikel (Satzende)' },
      { w: '.', plain: true },
      { w: 'Niemand', role: 'plain', en: 'nobody', hi: 'कोई नहीं', type: 'Indefinitpronomen' },
      { w: 'wird', role: 'plain', en: 'will (Futur I)', hi: 'करेगा', type: 'Verb · werden' },
      { w: 'das', role: 'plain', en: 'that (neut. acc.)', hi: 'यह', type: 'Pronoun · Akk.' },
      { w: 'nachprüfen', role: 'plain', en: 'check (Satzende)', hi: 'जाँचना (Satzende)', type: 'Infinitiv (Satzende)', why: 'nachprüfen (this chapter): to check.' },
      { w: '.', plain: true },
      { w: 'Genau', role: 'plain', en: 'exactly', hi: 'बिल्कुल', type: 'Adverb' },
      { w: 'deshalb', role: 'r-connector', en: 'therefore', hi: 'इसलिए', type: 'Konjunktion' },
      { w: 'nennt', role: 'plain', en: 'calls (Satzende)', hi: 'कहते हैं (Satzende)', type: 'Verb · nennen (Satzende)' },
      { w: 'man', role: 'r-subject', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'ihn', role: 'r-akkusativ', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Gewissensfrage', role: 'plain', en: 'question of conscience', hi: 'अंतरात्मा का सवाल', type: 'Noun · fem.', why: 'die Gewissensfrage (this chapter).' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Fokusverneinung (5/5)', why: 'Focus negation: nicht stands directly before the specific word it negates.' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Geld', role: 'plain', en: 'money', hi: 'पैसा', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'entscheidend', role: 'plain', en: 'decisive', hi: 'निर्णायक', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but', hi: 'बल्कि', type: 'Konnektor' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Gewissen', role: 'plain', en: 'conscience', hi: 'अंतरात्मा', type: 'Noun · neut.', why: 'das Gewissen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Indefinitpronomen' },
      { w: 'tolerieren', role: 'plain', en: 'tolerate (Satzende)', hi: 'बर्दाश्त करते हैं (Satzende)', type: 'Verb (Satzende)', why: 'tolerieren (this chapter): to tolerate.' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'bei', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Satzverneinung (1/5)' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-connector', en: 'if / when', hi: 'अगर / जब', type: 'Konjunktion' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Kasten', role: 'plain', en: 'box', hi: 'बॉक्स', type: 'Noun · masc.', why: 'der Kasten (this chapter).' },
      { w: 'leer', role: 'plain', en: 'empty', hi: 'ख़ाली', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'सिर्फ़', type: 'Adverb' },
      { w: 'Staub', role: 'plain', en: 'dust', hi: 'धूल', type: 'Noun · masc.', why: 'der Staub (Sg.) (this chapter).' },
      { w: 'darin', role: 'plain', en: 'inside it (Satzende)', hi: 'इसके अंदर (Satzende)', type: 'Pronominaladverb (Satzende)' },
      { w: 'liegt', role: 'plain', en: 'lies (Satzende)', hi: 'पड़ी है (Satzende)', type: 'Verb · liegen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Blickkontakt', role: 'plain', en: 'eye contact', hi: 'आँखों का संपर्क', type: 'Noun · masc.', why: 'der Blickkontakt (this chapter).' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'के साथ', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dativ' },
      { w: 'Nachbarn', role: 'plain', en: 'neighbour', hi: 'पड़ोसी', type: 'N-Deklination · Dat. Sg.' },
      { w: 'genügt', role: 'plain', en: 'is enough (Satzende)', hi: 'काफ़ी है (Satzende)', type: 'Verb · genügen (Satzende)' },
      { w: 'meistens', role: 'plain', en: 'usually', hi: 'ज़्यादातर', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'damit', role: 'r-connector', en: 'so that', hi: 'ताकि', type: 'Konjunktion' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Gewissen', role: 'plain', en: 'conscience', hi: 'अंतरात्मा', type: 'Noun · neut.' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Adjektivnegation (2/5)' },
      { w: 'unruhig', role: 'plain', en: 'unsettled (Satzende)', hi: 'बेचैन (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'bleibt', role: 'plain', en: 'stays (Satzende)', hi: 'रहता है (Satzende)', type: 'Verb · bleiben (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In front of many houses stands a newspaper rack that works without a seller. One takes a newspaper and inserts the change. Nobody will check that. That\'s exactly why it\'s called a question of conscience. It\'s not the money that\'s decisive, but the conscience. Some don\'t tolerate it in themselves when the box is empty and only dust lies inside. Eye contact with one neighbour is usually enough so the conscience doesn\'t stay unsettled.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_025_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sinje, schau, jemand hat hier eine Geldbörse liegen lassen.', en: 'Sinje, look, someone left a wallet here.' },
      { id: 'B1_025_L002', speaker: 'Sinje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wir öffnen sie nicht, bevor wir wissen, wem sie gehört.', en: 'We won\'t open it before we know who it belongs to.' },
      { id: 'B1_025_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, aber ich schaue nicht in das Geld, nur nach einem Ausweis.', en: 'Sure, but I\'m not looking at the money, only for an ID.' },
      { id: 'B1_025_L004', speaker: 'Sinje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut. Und wir bringen sie nicht zur Polizei, sondern rufen erst den Besitzer an.', en: 'Good. And we won\'t take it to the police, but call the owner first.' }
    ],
    transcript: 'Sinje, schau, jemand hat hier eine Geldbörse liegen lassen. Wir öffnen sie nicht, bevor wir wissen, wem sie gehört. Klar, aber ich schaue nicht in das Geld, nur nach einem Ausweis. Gut. Und wir bringen sie nicht zur Polizei, sondern rufen erst den Besitzer an.',
    translation: 'Sinje, look, someone left a wallet here. We won\'t open it before we know who it belongs to. Sure, but I\'m not looking at the money, only for an ID. Good. And we won\'t take it to the police, but call the owner first.',
    tokens: [
      { w: 'Sinje' },
      { w: ',', plain: true },
      { w: 'schau' },
      { w: ',', plain: true },
      { w: 'jemand' },
      { w: 'hat' },
      { w: 'hier' },
      { w: 'eine' },
      { w: 'Geldbörse' },
      { w: 'liegen' },
      { w: 'lassen' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'öffnen' },
      { w: 'sie' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'wissen' },
      { w: ',', plain: true },
      { w: 'wem' },
      { w: 'sie' },
      { w: 'gehört' },
      { w: '.', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'schaue' },
      { w: 'nicht' },
      { w: 'in' },
      { w: 'das' },
      { w: 'Geld' },
      { w: ',', plain: true },
      { w: 'nur' },
      { w: 'nach' },
      { w: 'einem' },
      { w: 'Ausweis' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wir' },
      { w: 'bringen' },
      { w: 'sie' },
      { w: 'nicht' },
      { w: 'zur' },
      { w: 'Polizei' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'rufen' },
      { w: 'erst' },
      { w: 'den' },
      { w: 'Besitzer' },
      { w: 'an' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was haben sie gefunden?', qEn: 'What did they find?', options: ['ein Handy', 'eine Geldbörse', 'einen Schlüssel', 'eine Tasche'], optionsEn: ['a mobile phone', 'a purse', 'a key', 'a bag'], answer: 1,
        explain: '"… jemand hat hier eine Geldbörse liegen lassen."' },
      { q: 'Was machen sie zuerst?', qEn: 'What will they do first?', options: ['zur Polizei gehen', 'den Besitzer anrufen', 'das Geld zählen', 'die Börse wegwerfen'], optionsEn: ['go to the police', 'call the owner', 'count the money', 'throw the purse away'], answer: 1,
        explain: '"… rufen erst den Besitzer an."' }
    ]
  },

  speaking: [
    { task: "Ihr findet eine Geldbörse. Sag, was ihr nicht macht.", taskEn: "You find a wallet. Say what you're not doing.", de: "Wir öffnen sie nicht, bevor wir wissen, wem sie gehört.", en: "We won't open it before we know whose it is." },
    { task: "Deine Freundin denkt, du hast das Geld schon gezählt. Korrigiere sie.", taskEn: "Your friend thinks you've already counted the money. Correct her.", de: "Ich habe das Geld nicht gezählt, ich habe nur nachgesehen.", en: "I haven't counted the money, I only had a look." },
    { task: "Ein Bekannter sagt, du hättest sie behalten. Widersprich.", taskEn: "An acquaintance says you'd keep it. Contradict him.", de: "Ich behalte das Kleingeld nicht. Das wäre Betrug.", en: "I'm not keeping the change. That would be fraud." },
    { task: "Deine Kollegin fragt, ob du die Sache tolerierst.", taskEn: "Your colleague asks whether you tolerate this.", de: "Ich toleriere das nicht, mein Gewissen lässt das nicht zu.", en: "I don't tolerate that, my conscience won't allow it." },
    { task: "Ein Freund macht dir einen Vorwurf. Stell es richtig.", taskEn: "A friend makes an accusation. Set it straight.", de: "Ich habe das Geld nicht eingesteckt, ich habe es nur nachgeprüft.", en: "I didn't pocket the money, I only checked it." },
    { task: "Deine Nachbarin fragt, ob das Geld im Kasten war.", taskEn: "Your neighbour asks whether the money was in the box.", de: "Im Zeitungskasten war das Geld nicht.", en: "The money was not in the newspaper box." },
    { task: "Rollenspiel: Ihr diskutiert die Gewissensfrage.", taskEn: "Role-play: you discuss the moral question.", de: "Ich befürworte das nicht. — Ich verschenke es auch nicht weiter, ich bringe es zur Polizei.", en: "I don't approve of that. — And I won't pass it on either, I'll take it to the police." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short text (six to eight sentences) about an honest or dishonest moment — using sentence negation, adjective negation, adverb negation, prepositional-phrase negation, and focus negation (Nicht X, sondern Y) at least once each. Use kein at least once for a noun.',
    starters: ['Ich habe … nicht …', 'Das ist nicht …', 'Ich komme nicht …', 'Ich wohne nicht in …', 'Nicht …, sondern …'],
    placeholder: 'Ich habe das Kleingeld nicht eingeworfen. Die Zeitung war nicht teuer …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Das Auto ist ___ teuer."',
      options: ['kein', 'nicht', 'keine'],
      answer: 1,
      explain: 'Adjectives are negated with nicht, never kein.'
    },
    gap: {
      sentence: ['Ich wohne ', ' in dieser Straße.'],
      gaps: [ { answer: 'nicht', accepts: ['nicht'] } ],
      explain: 'Negating a prepositional phrase: nicht stands directly before it.'
    },
    match: {
      q: 'Match each sentence type to where nicht goes.',
      pairs: [
        { noun: 'Ganzer Satz', art: 'Near the end' },
        { noun: 'Adjektiv', art: 'Directly before the adjective' },
        { noun: 'Adverb', art: 'Directly before the adverb' },
        { noun: 'Präpositionalphrase', art: 'Directly before the phrase' },
        { noun: 'Ein bestimmtes Wort', art: 'Directly before that word' }
      ]
    },
    builder: {
      target: 'Build: "That\'s not the money, but my conscience."',
      bank: ['Nicht', 'das', 'Geld', 'stört', 'mich', ',', 'sondern', 'mein', 'Gewissen', '.'],
      answer: ['Nicht', 'das', 'Geld', 'stört', 'mich', ',', 'sondern', 'mein', 'Gewissen', '.'],
      roles: { 'Nicht': 'r-negation', 'sondern': 'r-connector' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich habe nicht Auto.',
      right: 'Ich habe kein Auto.',
      explain: 'A noun without an article ("Auto") is negated with kein, never nicht.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich komme ___ oft hierher."', options: ['kein', 'nicht', 'keine'], answer: 1,
      explain: 'Adverbs are negated with nicht, directly before the adverb.' },
    { q: 'Complete: "Ich habe ___ Auto."', options: ['nicht', 'kein', 'nicht ein'], answer: 1,
      explain: 'Nouns with ein/Nullartikel are negated with kein.' },
    { q: 'Which sentence uses focus negation correctly?', options: ['Nicht das Geld stört mich, sondern mein Gewissen.', 'Das Geld nicht stört mich, sondern mein Gewissen.', 'Das Geld stört nicht mich, mein Gewissen.'], answer: 0,
      explain: 'Focus negation: nicht stands directly before the specific word, followed by sondern.' },
    { q: 'Complete: "Wir fahren ___ mit dem Bus."', options: ['mit nicht dem', 'nicht mit dem', 'nicht dem mit'], answer: 1,
      explain: 'nicht stands before the whole prepositional phrase, not inside it.' },
    { q: 'Which sentence contains an error?', options: ['Die Zeitung ist nicht teuer.', 'Ich habe nicht Auto.', 'Ich wohne nicht in dieser Straße.'], answer: 1,
      explain: 'It should be "Ich habe kein Auto" — kein negates the noun, not nicht.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-negation', html: 'Always ask WHAT is being negated first — that decides exactly where nicht goes.' },
    { c: 'r-negation', html: 'Whole sentence → nicht near the end. Adjective, adverb, or prepositional phrase → nicht directly before it. One specific word → Nicht X, sondern Y.' },
    { c: 'r-negation', html: 'kein negates nouns with ein/Nullartikel. nicht negates everything else.' }
  ],
  revisionTips: [
    'Before every sentence, ask: am I negating a noun (→ kein) or something else (→ nicht)?',
    'If negating something else, ask exactly what — the whole action, one adjective, one adverb, one phrase, or one word — then place nicht directly before that target.',
    'Practise focus negation (Nicht X, sondern Y) out loud — it\'s the position learners get wrong most often.'
  ]
};

window.CHAPTER = CHAPTER;
