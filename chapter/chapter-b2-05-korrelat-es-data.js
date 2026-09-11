/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 5
   "Korrelat-es (es freut mich, dass …)" — anticipatory es that
   points forward to a dass-clause or zu-infinitive clause, and
   disappears when that clause moves to position 1. Distinct from
   Formales es (Chapter 4), which fills an empty subject with no
   real clause behind it. Does NOT introduce Objekt-es, C1 omission
   rules, or literary inversion.
   IMPORTANT: dialogue uses ONLY Merle and Timo.
   Vocabulary source: uploaded chapter-5 list (35 items, user-edited
   general B2 vocabulary bank).
============================================================ */
const CHAPTER = {
  id: 'b2-05-korrelat-es',
  phase: 'B2 · Phase 1',
  number: 5,
  title: 'Korrelat-es (es freut mich, dass …)',
  titleEn: 'Correlative es (anticipatory es)',
  description: 'Use "es" to announce a clause that follows: Es freut mich, dass … / Es macht Spaß, … zu … — and learn exactly when that es disappears.',
  xp: 350,
  time: 50,
  difficulty: 'Advanced',
  nextChapter: { number: 6, title: 'Es in festen Ausdrücken', titleEn: 'Es in fixed expressions' , href: 'chapter-b2-06-es-in-festen-ausdruecken.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'An "es" that <em>points forward.</em>',
    intro: 'Merle is weighing a career change from graphic design toward filmmaking, and Timo finds the decision easy — every plan announced with a correlative es pointing forward: Es fällt mir leicht, zu entscheiden. Es macht Spaß, einen Film zu gestalten.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Korrelat-es used with dass-clauses and zu-infinitives naturally'
    ],
    scene: 'Der Werdegang',
    femaleSpeakers: ['Merle'],
    dialogue: [
      { speaker: 'Merle', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · Korrelat es', why: 'Korrelat es anticipates a following infinitive or dass-clause (this chapter).', ex: 'Ich finde es schwer, den Job zu wechseln.', exEn: 'I find it hard to change the job.' },
        { w: 'schwer', role: 'r-akkusativ', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Job', role: 'r-akkusativ', en: 'job', hi: 'नौकरी', pron: 'job', type: 'Noun · masc.' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'Grafikerin', role: 'r-akkusativ', en: 'graphic designer (f)', hi: 'ग्राफ़िक डिज़ाइनर', pron: 'GRA-fi-ke-rin', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'wechseln', role: 'r-verb', en: 'change', hi: 'बदलना', pron: 'VEK-seln', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I find it hard to change the job as a graphic designer.', hi: 'Mujhe graphic designer ki naukri badalna mushkil lagta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'fällt', role: 'r-verb', en: 'falls', hi: 'आसान लगता है', pron: 'felt', type: 'Verb · leichtfallen', why: 'es fällt mir leicht = it comes easy to me (this chapter).', ex: 'Es fällt mir leicht, mich zu entscheiden.', exEn: 'It comes easy to me to decide.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · Korrelat es' },
        { w: 'leicht', role: 'r-akkusativ', en: 'easy', hi: 'आसान', pron: 'lykht', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'entscheiden', role: 'r-verb', en: 'decide', hi: 'फ़ैसला करना', pron: 'ent-SHY-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It comes easy to me to decide.', hi: 'Mujhe faisla karna aasaan lagta hai.' },
      { speaker: 'Merle', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · Korrelat es', why: 'sein + es + gewohnt/gewöhnt = accustomed to it (this chapter).', ex: 'Ich bin es gewohnt, hart zu arbeiten.', exEn: 'I am used to working hard.' },
        { w: 'gewohnt', role: 'r-akkusativ', en: 'used to', hi: 'अभ्यस्त', pron: 'ge-VOHNT', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'hart', role: 'r-akkusativ', en: 'hard', hi: 'मेहनत से', pron: 'hart', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am used to working hard.', hi: 'Main mehnat se kaam karne ki abhyast hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'würdest', role: 'r-verb', en: 'would you', hi: 'चाहोगी', pron: 'VÜR-dest', type: 'Verb · werden (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · Korrelat es' },
        { w: 'bevorzugen', role: 'r-verb', en: 'prefer', hi: 'पसंद करना', pron: 'be-FOR-tsoo-gen', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Kino', role: 'r-dativ', en: 'cinema (dat.)', hi: 'सिनेमा में', pron: 'KEE-no', type: 'Noun · neut. dat.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'And would you prefer to work at the cinema?', hi: 'Aur kya tum cinema mein kaam karna pasand karogi?' },
      { speaker: 'Merle', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'चाहूंगी', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II, ich)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · Korrelat es' },
        { w: 'vorziehen', role: 'r-verb', en: 'prefer', hi: 'प्राथमिकता देना', pron: 'FOR-tsee-en', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'eigenen', role: 'r-akkusativ', en: 'own', hi: 'अपना', pron: 'EYE-ge-nen', type: 'Adjective' },
        { w: 'Kinofilm', role: 'r-akkusativ', en: 'cinema film', hi: 'सिनेमा फ़िल्म', pron: 'KEE-no-film', type: 'Noun · masc.', why: 'der Kinofilm (this chapter).', ex: 'einen eigenen Kinofilm' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'gestalten', role: 'r-verb', en: 'design', hi: 'डिज़ाइन करना', pron: 'ge-SHTAL-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would prefer to design my own cinema film.', hi: 'Main apni sinema film design karna prathamikta dungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'nach', role: 'r-preposition', en: 'like', hi: 'जैसा', pron: 'nahkh', type: 'Preposition' },
        { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'spannenden', role: 'r-dativ', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nen-den', type: 'Adjective · dative' },
        { w: 'Weg', role: 'r-dativ', en: 'path (dat.)', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc. dat.' },
        { w: '!', plain: true }
      ], en: 'That sounds like an exciting path!', hi: 'Yeh ek romaanchak raaste jaisa lagta hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Sometimes German places <span class="de r-es">es</span> before a clause simply to announce that important information is coming: <span class="de">Es freut mich, dass du gekommen bist.</span> The real content is the clause — not "es". Move the clause to first position, and this "es" disappears: <span class="de">Dass du gekommen bist, freut mich.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KORRELAT-ES (B2 level): the anticipatory "es" that announces a dass-clause or zu-infinitive clause that follows (Es freut mich, dass ... / Es macht Spaß, ... zu ...). This es disappears entirely when the clause itself moves into first position (Dass du gekommen bist, freut mich). Distinguish this from Formales es (Chapter 4), which fills an empty subject with no real clause behind it (Es regnet). ' +
    'Do NOT expect Objekt-es, C1 omission rules, or literary inversion — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Korrelat-es is required when the clause stays at the end; it disappears when the clause is fronted to position 1.\n' +
    '- Distinguish Korrelat-es (announces a clause) from Formales es (no real subject at all) — do not confuse the two.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>es check:</b> one sentence on whether Korrelat-es was correctly included or correctly dropped in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use Korrelat-es with dass-clauses and zu-infinitives, and know exactly when it disappears. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Korrelat-es vs Formales es comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: does the clause stay at the end, or move to position 1?'
  },

  parserSentence: [
    { w: 'Es', role: 'r-es' }, { w: 'freut', role: 'plain' },
    { w: 'mich', role: 'plain' }, { w: ',', plain: true },
    { w: 'dass', role: 'r-connector' }, { w: 'du', role: 'plain' },
    { w: 'kommst', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: es announces a clause that follows, then disappears if the clause moves first.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Merle and Timo discuss a design career and film jury, full of Korrelat-es expressions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 35 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Korrelat-es with dass-clauses and zu-infinitives, and when it disappears.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of Korrelat-es structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Korrelat-es in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Express emotions and opinions using Korrelat-es naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write emails and opinion texts using Korrelat-es correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Formales es vs Korrelat-es, and adding/removing Korrelat-es correctly.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 350 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 35 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Formales es vs Korrelat-es drills, add/remove es exercises, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Korrelat-es reference — dass-clauses, zu-infinitives, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es freut mich, dass …', text: 'Use Korrelat-es with dass-clauses' },
    { de: 'Es macht Spaß, … zu …', text: 'Use Korrelat-es with zu-infinitives' },
    { de: 'Dass …, freut mich.', text: 'Know when Korrelat-es disappears' },
    { de: 'Es regnet. / Es freut mich, dass …', text: 'Distinguish Formales es from Korrelat-es' },
    { de: 'Es ist schade, dass …', text: 'Use common B2 evaluative expressions' }
  ],

  // ---------- Vocabulary (35 items — uploaded chapter-5 list) ----------
  vocab: [
    { de: 'gläubig', pos: 'adjective', level: 'B2', en: 'devout, religious', hi: 'धार्मिक', ex: 'Sie ist sehr gläubig.', exEn: 'She is very devout.', exHi: 'Woh bahut dhaarmik hai.' },
    { de: 'Grafiker/in', art: 'der/die', gender: 'm/f', plural: 'Grafiker/innen', pos: 'noun', level: 'B2', en: 'graphic designer', hi: 'ग्राफ़िक डिज़ाइनर', ex: 'Es freut mich, dass du als Grafiker so viel Kontakt zu Filmemachern hast.', exEn: 'It pleases me that you have so much contact with filmmakers as a graphic designer.', exHi: 'Mujhe khushi hai ki graphic designer ke roop mein tumhara filmmakeron se itna sampark hai.' },
    { de: 'Gründer/in', art: 'der/die', gender: 'm/f', plural: 'Gründer/innen', pos: 'noun', level: 'B2', en: 'founder', hi: 'संस्थापक', ex: 'Sie ist die Gründerin der Firma.', exEn: 'She is the founder of the company.', exHi: 'Woh company ki sansthaapak hai.' },
    { de: 'Handyvertrag', art: 'der', gender: 'm', plural: 'Handyverträge', pos: 'noun', level: 'B2', en: 'mobile phone contract', hi: 'मोबाइल फ़ोन अनुबंध', ex: 'Es ist schade, dass der Handyvertrag so teuer ist.', exEn: 'It\'s a pity that the mobile phone contract is so expensive.', exHi: 'Afsos ki baat hai ki mobile phone anubandh itna mehnga hai.' },
    { de: 'Härte', art: 'die', gender: 'f', plural: 'Härten', pos: 'noun', level: 'B2', en: 'hardness, harshness', hi: 'कठोरता', ex: 'Die Härte des Urteils überraschte alle.', exEn: 'The harshness of the verdict surprised everyone.', exHi: 'Faisle ki kathorta ne sabko hairaan kar diya.' },
    { de: 'Hauptrolle', art: 'die', gender: 'f', plural: 'Hauptrollen', pos: 'noun', level: 'B2', en: 'leading role', hi: 'मुख्य भूमिका', ex: 'Es macht mir Spaß, die Hauptrolle für einen Langspielfilm zu entwerfen.', exEn: 'It\'s fun for me to design the leading role for a feature-length film.', exHi: 'Ek poorn-lambaai film ke liye mukhya bhoomika design karne mein mujhe maza aata hai.' },
    { de: 'heimisch', pos: 'adjective', level: 'B2', en: 'native, local, domestic', hi: 'स्थानीय', ex: 'Das ist eine heimische Tradition.', exEn: 'That is a local tradition.', exHi: 'Yeh ek sthaaniya parampara hai.' },
    { de: 'Hochschulreife', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'university entrance qualification', hi: 'विश्वविद्यालय प्रवेश योग्यता', ex: 'Er hat die Hochschulreife letztes Jahr erworben.', exEn: 'He obtained his university entrance qualification last year.', exHi: 'Usne pichle saal university praveshyogyata haasil ki.' },
    { de: 'Horizont', art: 'der', gender: 'm', plural: 'Horizonte', pos: 'noun', level: 'B2', en: 'horizon', hi: 'क्षितिज', ex: 'Reisen erweitert den Horizont.', exEn: 'Travelling broadens the horizon.', exHi: 'Yatra karne se kshitij vistrit hota hai.' },
    { de: 'Informatik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'computer science', hi: 'कंप्यूटर विज्ञान', ex: 'Sie studiert Informatik.', exEn: 'She studies computer science.', exHi: 'Woh computer vigyaan padhti hai.' },
    { de: 'inhaltsleer', pos: 'adjective', level: 'B2', en: 'empty of content, vacuous', hi: 'खोखला', ex: 'Die Rede war völlig inhaltsleer.', exEn: 'The speech was completely vacuous.', exHi: 'Bhaashan bilkul khokhla tha.' },
    { de: 'intolerant', pos: 'adjective', level: 'B2', en: 'intolerant', hi: 'असहिष्णु', ex: 'Er ist gegenüber anderen Meinungen intolerant.', exEn: 'He is intolerant of other opinions.', exHi: 'Woh doosre vichaaron ke prati asahishnu hai.' },
    { de: 'irreal', pos: 'adjective', level: 'B2', en: 'unreal, hypothetical', hi: 'अवास्तविक', ex: 'Das klingt völlig irreal.', exEn: 'That sounds completely unreal.', exHi: 'Yeh bilkul avaastavik lagta hai.' },
    { de: 'jeglich', pos: 'adjective', level: 'B2', en: 'any, every', hi: 'कोई भी', ex: 'Jegliche Hilfe ist willkommen.', exEn: 'Any help is welcome.', exHi: 'Koi bhi madad swaagat yogya hai.' },
    { de: 'Juryvorsitz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'jury chairmanship', hi: 'जूरी अध्यक्षता', ex: 'Es überrascht mich, dass der Juryvorsitz so komplex ist.', exEn: 'It surprises me that the jury chairmanship is so complex.', exHi: 'Mujhe hairaani hoti hai ki jury adhyakshta itni jatil hai.' },
    { de: 'katholisch', pos: 'adjective', level: 'B2', en: 'Catholic', hi: 'कैथोलिक', ex: 'Ihre Familie ist katholisch.', exEn: 'Her family is Catholic.', exHi: 'Uska parivaar Catholic hai.' },
    { de: 'Keks', art: 'der', gender: 'm', plural: 'Kekse', pos: 'noun', level: 'B2', en: 'biscuit, cookie', hi: 'बिस्कुट', ex: 'Die Kinder essen gerne Kekse.', exEn: 'The children like eating biscuits.', exHi: 'Bacchon ko biscuit khaana pasand hai.' },
    { de: 'Kiez', art: 'der', gender: 'm', plural: 'Kieze', pos: 'noun', level: 'B2', en: 'neighbourhood (slang)', hi: 'मोहल्ला', ex: 'Er kennt jeden im Kiez.', exEn: 'He knows everyone in the neighbourhood.', exHi: 'Woh mohalle mein sabko jaanta hai.' },
    { de: 'Kinofilm', art: 'der', gender: 'm', plural: 'Kinofilme', pos: 'noun', level: 'B2', en: 'cinema film', hi: 'सिनेमा फ़िल्म', ex: 'Es lohnt sich, jeden Kinofilm genau zu analysieren.', exEn: 'It\'s worth it to analyse every cinema film closely.', exHi: 'Har cinema film ka dhyaan se vishleshan karna faayde ka hai.' },
    { de: 'Kinokasse', art: 'die', gender: 'f', plural: 'Kinokassen', pos: 'noun', level: 'B2', en: 'cinema box office', hi: 'सिनेमा टिकट खिड़की', ex: 'Es ist wichtig, dass wir pünktlich zur Kinokasse kommen.', exEn: 'It\'s important that we arrive on time at the cinema box office.', exHi: 'Yeh mahatvapurn hai ki hum samay par cinema ticket khidki tak pahunchein.' },
    { de: 'kommerziell', pos: 'adjective', level: 'B2', en: 'commercial', hi: 'व्यावसायिक', ex: 'Der Film war ein kommerzieller Erfolg.', exEn: 'The film was a commercial success.', exHi: 'Film ek vyaavasaayik safalta thi.' },
    { de: 'komplex', pos: 'adjective', level: 'B2', en: 'complex', hi: 'जटिल', ex: 'Der Juryvorsitz ist sehr komplex.', exEn: 'The jury chairmanship is very complex.', exHi: 'Jury adhyakshta bahut jatil hai.' },
    { de: 'Kontakt', art: 'der', gender: 'm', plural: 'Kontakte', pos: 'noun', level: 'B2', en: 'contact', hi: 'संपर्क', ex: 'Sie hat viel Kontakt zu Filmemachern.', exEn: 'She has a lot of contact with filmmakers.', exHi: 'Uska filmmakeron se bahut sampark hai.' },
    { de: 'Lächeln', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'smile', hi: 'मुस्कान', ex: 'Ihr Lächeln war herzlich.', exEn: 'Her smile was warm.', exHi: 'Uski muskaan garmjoshi bhari thi.' },
    { de: 'Landesgesetz', art: 'das', gender: 'n', plural: 'Landesgesetze', pos: 'noun', level: 'B2', en: 'state law', hi: 'राज्य कानून', ex: 'Das Landesgesetz regelt diese Frage.', exEn: 'The state law regulates this matter.', exHi: 'Rajya kanoon is mudde ko niyantrit karta hai.' },
    { de: 'Landessprache', art: 'die', gender: 'f', plural: 'Landessprachen', pos: 'noun', level: 'B2', en: 'national language', hi: 'राष्ट्रभाषा', ex: 'Es gelingt mir, jede Landessprache gut zu verstehen.', exEn: 'I succeed in understanding every national language well.', exHi: 'Mujhe har rashtrabhaasha achhi tarah samajhne mein safalta milti hai.' },
    { de: 'Langspielfilm', art: 'der', gender: 'm', plural: 'Langspielfilme', pos: 'noun', level: 'B2', en: 'feature-length film', hi: 'पूर्ण-लंबाई फ़िल्म', ex: 'Es macht mir Spaß, die Hauptrolle für einen Langspielfilm zu entwerfen.', exEn: 'It\'s fun for me to design the leading role for a feature-length film.', exHi: 'Ek poorn-lambaai film ke liye mukhya bhoomika design karne mein mujhe maza aata hai.' },
    { de: 'Lebensweg', art: 'der', gender: 'm', plural: 'Lebenswege', pos: 'noun', level: 'B2', en: 'life path', hi: 'जीवन पथ', ex: 'Ihr Lebensweg war ungewöhnlich.', exEn: 'Her life path was unusual.', exHi: 'Uska jeevan path asaadhaaran tha.' },
    { de: 'Lehrkraft', art: 'die', gender: 'f', plural: 'Lehrkräfte', pos: 'noun', level: 'B2', en: 'teacher, teaching staff', hi: 'शिक्षक', ex: 'Meinetwegen ist es auch erfreulich, dass die Lehrkraft so geduldig ist.', exEn: 'As far as I\'m concerned, it\'s also pleasing that the teacher is so patient.', exHi: 'Meri taraf se, yeh bhi sukhad hai ki shikshak itne dhairyavaan hain.' },
    { de: 'leichtfallen', pos: 'verb', level: 'B2', en: 'to be easy (for someone)', hi: 'आसान लगना', ex: 'Es fällt mir leicht, die Merkformel zu behalten.', exEn: 'It\'s easy for me to remember the mnemonic formula.', exHi: 'Mujhe yaad rakhne ka sutra yaad rakhna aasaan lagta hai.', conj: { praesens: 'fällt leicht', praeteritum: 'fiel leicht', perfekt: 'ist leichtgefallen' } },
    { de: 'meinetwegen', pos: 'adverb', level: 'B2', en: 'as far as I\'m concerned, fine by me', hi: 'मेरी तरफ़ से', ex: 'Meinetwegen ist es auch erfreulich, dass die Lehrkraft so geduldig ist.', exEn: 'As far as I\'m concerned, it\'s also pleasing that the teacher is so patient.', exHi: 'Meri taraf se, yeh bhi sukhad hai ki shikshak itne dhairyavaan hain.' },
    { de: 'Melodram', art: 'das', gender: 'n', plural: 'Melodramen', pos: 'noun', level: 'B2', en: 'melodrama', hi: 'भावुक नाटक', ex: 'Der Film war ein klassisches Melodram.', exEn: 'The film was a classic melodrama.', exHi: 'Film ek classic melodrama thi.' },
    { de: 'Merkformel', art: 'die', gender: 'f', plural: 'Merkformeln', pos: 'noun', level: 'B2', en: 'mnemonic formula', hi: 'याद रखने का सूत्र', ex: 'Es fällt mir leicht, die Merkformel zu behalten.', exEn: 'It\'s easy for me to remember the mnemonic formula.', exHi: 'Mujhe yaad rakhne ka sutra yaad rakhna aasaan lagta hai.' },
    { de: 'Mietvertrag', art: 'der', gender: 'm', plural: 'Mietverträge', pos: 'noun', level: 'B2', en: 'rental contract, lease', hi: 'किराया अनुबंध', ex: 'Der Mietvertrag läuft nächstes Jahr aus.', exEn: 'The rental contract expires next year.', exHi: 'Kiraaya anubandh agle saal samaapt ho jaayega.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Korrelat-es?',
      body: [ 'Sometimes German places "es" before a subordinate or infinitive clause. This "es" does not have its own meaning — it simply announces the important information that comes later.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Es freut mich, dass du gekommen bist.</span>'],
          ['<span class="de">Es ist schön, dich wiederzusehen.</span>']
        ]
      },
      hinglish: 'Kabhi German subordinate ya infinitive clause se pehle "es" rakh deta hai. Iska apna koi matlab nahi hota — yeh sirf pehle se signal de deta hai ki asli baat aage aa rahi hai.'
    },
    {
      title: 'Korrelat-es mit dass-Sätzen',
      body: [ 'The real subject comes later, inside the dass-clause.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es freut mich, dass du hier bist.</span>'],
          ['<span class="de">Es überrascht mich, dass Anna so gut Deutsch spricht.</span>'],
          ['<span class="de">Es ist schade, dass das Museum geschlossen ist.</span>']
        ]
      },
      hinglish: 'Asli subject baad mein, dass-clause ke andar aata hai.'
    },
    {
      title: 'Korrelat-es mit Infinitiv + zu',
      body: [ 'Korrelat-es also announces zu-infinitive clauses.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es macht Spaß, Deutsch zu lernen.</span>'],
          ['<span class="de">Es lohnt sich, früh aufzustehen.</span>']
        ]
      },
      hinglish: 'Korrelat-es zu-infinitive clauses ke liye bhi isi tarah signal deta hai.'
    },
    {
      title: 'Wann verschwindet Korrelat-es?',
      body: [ 'When the clause itself moves into the subject position, Korrelat-es disappears entirely.' ],
      table: {
        head: ['With es', 'es disappears'],
        rows: [
          ['<span class="de">Es freut mich, dass du gekommen bist.</span>', '<span class="de">Dass du gekommen bist, freut mich.</span>'],
          ['<span class="de">Es ist wichtig, Deutsch zu lernen.</span>', '<span class="de">Deutsch zu lernen, ist wichtig.</span>']
        ]
      },
      hinglish: 'Jab clause khud subject position mein aati hai, Korrelat-es poori tarah gayab ho jaata hai.'
    },
    {
      title: 'Korrelat-es vs Formales es',
      body: [ 'Formal es (Chapter 4) fills an empty subject — no real subject exists at all. Korrelat-es announces a real clause that appears later.' ],
      table: {
        head: ['Formales es', 'Korrelat-es'],
        rows: [
          ['<span class="de">Es regnet.</span>', '<span class="de">Es freut mich, dass du hier bist.</span>'],
          ['No real subject exists', 'The clause is the real subject'],
          ['Cannot be replaced', 'Can disappear when the clause moves first']
        ]
      },
      hinglish: 'Formal es (Chapter 4) khaali subject bharta hai — koi asli subject hota hi nahi. Korrelat-es ek asli clause ka signal deta hai jo baad mein aati hai.'
    },
    {
      title: 'Häufige B2-Ausdrücke',
      body: [ 'These evaluative and emotional expressions appear constantly in Goethe B2 material.' ],
      table: {
        head: ['Expressions'],
        rows: [
          ['<span class="de">Es freut mich, … / Es überrascht mich, … / Es ärgert mich, … / Es ist wichtig, … / Es ist schade, … / Es macht Spaß, … / Es lohnt sich, … / Es fällt mir leicht, … / Es gelingt mir, …</span>']
        ]
      },
      hinglish: 'Yeh evaluative aur emotional expressions Goethe B2 material mein lagataar aate hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from dropping the required Korrelat-es, or keeping it after the clause has moved to first position.' ],
      mistakes: [
        { wrong: 'Freut mich, dass du hier bist.', right: 'Es freut mich, dass du hier bist.', why: 'When the clause stays at the end, Korrelat-es is required at the start.' },
        { wrong: 'Dass du hier bist, es freut mich.', right: 'Dass du hier bist, freut mich.', why: 'Once the clause moves to position 1, Korrelat-es disappears entirely — it is never repeated.' },
        { wrong: 'Es freut mich, du bist hier.', right: 'Es freut mich, dass du hier bist.', why: 'The clause needs "dass" to connect properly to Korrelat-es.' },
        { wrong: 'Es macht Spaß, dass Deutsch lernen.', right: 'Es macht Spaß, Deutsch zu lernen.', why: 'Use a zu-infinitive here, not a dass-clause with a bare verb.' }
      ],
      hinglish: 'Yeh galtiyaan required Korrelat-es chhod dene se, ya clause aage aane ke baad bhi use rakhne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Korrelat-es appears constantly in Goethe B2 newspapers, presentations, emails, and discussions.' ],
      note: 'Quick check: does the clause stay at the end? Add Korrelat-es. Does the clause move to position 1? Remove Korrelat-es. Is there no real clause at all? Use Formales es instead.',
      hinglish: 'Goethe B2 newspapers, presentations, emails aur discussions mein Korrelat-es lagataar aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Filmkritik: Ein Melodram, das im Gedächtnis bleibt',
    titleEn: 'Film review: a melodrama that stays in the memory',
    tokens: [
      { w: 'Es', role: 'r-subject', en: 'it (Korrelat-es)', hi: 'यह (Korrelat-es)', type: 'Pronoun · Korrelat-es', why: 'Korrelat-es announces the dass-Satz that follows and can be dropped if the clause moves to the front (this chapter).' },
      { w: 'überrascht', role: 'plain', en: 'surprises', hi: 'हैरान करता है', type: 'Verb · überraschen' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Kinofilm', role: 'plain', en: 'cinema film', hi: 'सिनेमा फ़िल्म', type: 'Noun · masc.', why: 'der Kinofilm (this chapter).' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'पहले', type: 'Article · Dat.' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहले', type: 'Adjective' },
      { w: 'Woche', role: 'plain', en: 'week', hi: 'हफ़्ते', type: 'Noun · fem.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Kinokasse', role: 'plain', en: 'box office', hi: 'बॉक्स ऑफ़िस', type: 'Noun · fem.', why: 'die Kinokasse (this chapter).' },
      { w: 'gesprengt', role: 'plain', en: 'blown up, broken (Satzende)', hi: 'तोड़ दिया (Satzende)', type: 'Verb · sprengen (Partizip II)' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Melodram', role: 'plain', en: 'melodrama', hi: 'मेलोड्रामा', type: 'Noun · neut.', why: 'das Melodram (this chapter).' },
      { w: 'erzählt', role: 'plain', en: 'tells', hi: 'बताती है', type: 'Verb · erzählen' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'jungen', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Schauspielerin', role: 'plain', en: 'actress', hi: 'अभिनेत्री', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'to whom', hi: 'जिसे', type: 'Relativpronomen · Dat.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Hauptrolle', role: 'plain', en: 'lead role', hi: 'मुख्य भूमिका', type: 'Noun · fem.', why: 'die Hauptrolle (this chapter).' },
      { w: 'anfangs', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb' },
      { w: 'ziemlich', role: 'plain', en: 'quite', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'schwerfällt', role: 'plain', en: 'is difficult (Satzende)', hi: 'कठिन लगती है (Satzende)', type: 'Verb · schwerfallen (Nebensatz, Satzende)', why: 'schwerfallen (recycled B1/B2).' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (Korrelat-es)', hi: 'यह (Korrelat-es)', type: 'Pronoun · Korrelat-es', why: 'Es lässt sich kaum leugnen: another Korrelat-es before a dass-Satz (this chapter).' },
      { w: 'lässt', role: 'plain', en: 'lets', hi: 'देती है', type: 'Verb · lassen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'leugnen', role: 'plain', en: 'deny', hi: 'नकारना', type: 'Verb · leugnen' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Regie', role: 'plain', en: 'direction', hi: 'निर्देशन', type: 'Noun · fem.' },
      { w: 'ihr', role: 'plain', en: 'her (dat.)', hi: 'उसे', type: 'Pronoun · Dat.' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'einem', role: 'plain', en: 'to a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'wahren', role: 'plain', en: 'true', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'Horizont', role: 'plain', en: 'horizon (Satzende)', hi: 'क्षितिज (Satzende)', type: 'Noun · masc.', why: 'der Horizont (this chapter).' },
      { w: 'verhilft', role: 'plain', en: 'helps (Satzende)', hi: 'मदद करती है (Satzende)', type: 'Verb · verhelfen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'wenn', role: 'plain', en: 'if', hi: 'अगर', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Landessprache', role: 'plain', en: 'national language', hi: 'राष्ट्रभाषा', type: 'Noun · fem.', why: 'die Landessprache (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Films', role: 'plain', en: 'film (gen.)', hi: 'फ़िल्म का', type: 'Noun · masc.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'jedem', role: 'plain', en: 'to everyone', hi: 'हर किसी के लिए', type: 'Pronoun · Dat.' },
      { w: 'leichtfällt', role: 'plain', en: 'is easy (Satzende)', hi: 'आसान होती है (Satzende)', type: 'Verb · leichtfallen', why: 'leichtfallen (this chapter).' },
      { w: ',', plain: true },
      { w: 'lohnt', role: 'plain', en: 'is worth', hi: 'लायक है', type: 'Verb · sich lohnen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Kinobesuch', role: 'plain', en: 'cinema visit', hi: 'सिनेमा यात्रा', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (Korrelat-es)', hi: 'यह (Korrelat-es)', type: 'Pronoun · Korrelat-es', why: 'Es ist kein Zufall, dass …: a third Korrelat-es pattern (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'kein', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'Zufall', role: 'plain', en: 'coincidence', hi: 'संयोग', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Jury­vorsitz', role: 'plain', en: 'jury chairmanship', hi: 'जूरी अध्यक्षता', type: 'Noun · masc.', why: 'der Juryvorsitz (this chapter).' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Kameramann', role: 'plain', en: 'cameraman', hi: 'कैमरामैन', type: 'Noun · masc.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'sein', role: 'plain', en: 'his', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'gesamtes', role: 'plain', en: 'entire', hi: 'संपूर्ण', type: 'Adjective' },
      { w: 'Langspielfilm-Werk', role: 'plain', en: 'feature-film body of work (Satzende)', hi: 'फ़ीचर-फ़िल्म कार्य (Satzende)', type: 'Noun · neut.', why: 'der Langspielfilm (this chapter).' },
      { w: 'gedankt', role: 'plain', en: 'thanked (Satzende)', hi: 'धन्यवाद दिया (Satzende)', type: 'Verb · danken (Partizip II)' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It does not surprise that the new cinema film had already broken box-office records in its first week. The melodrama tells of a young actress for whom the lead role is initially rather difficult. It can hardly be denied that the direction eventually helps her to a true horizon. Even if the film\'s national language is not easy for everyone, the cinema visit is worth it. It is no coincidence that the jury chairmanship thanked the cameraman for his entire feature-film body of work.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_005_L001', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, es fällt mir wirklich schwer, mich zwischen Grafikdesign und Filmemachen zu entscheiden.', en: 'Timo, it\'s really hard for me to decide between graphic design and filmmaking.' },
      { id: 'B2_005_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Es hat mich gefreut zu hören, dass du überhaupt darüber nachdenkst — das war früher kein Thema.', en: 'It made me happy to hear you\'re even thinking about it — that wasn\'t a topic before.' },
      { id: 'B2_005_L003', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stimmt. Es macht mir jedenfalls Spaß, beides mal auszuprobieren.', en: 'True. Either way, it\'s fun trying both.' },
      { id: 'B2_005_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann lass dir Zeit damit, es muss ja nicht heute entschieden werden.', en: 'Then take your time with it, it doesn\'t have to be decided today.' }
    ],
    transcript: 'Timo, es fällt mir wirklich schwer, mich zwischen Grafikdesign und Filmemachen zu entscheiden. Es hat mich gefreut zu hören, dass du überhaupt darüber nachdenkst — das war früher kein Thema. Stimmt. Es macht mir jedenfalls Spaß, beides mal auszuprobieren. Dann lass dir Zeit damit, es muss ja nicht heute entschieden werden.',
    translation: 'Timo, it\'s really hard for me to decide between graphic design and filmmaking. It made me happy to hear you\'re even thinking about it — that wasn\'t a topic before. True. Either way, it\'s fun trying both. Then take your time with it, it doesn\'t have to be decided today.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'fällt' },
      { w: 'mir' },
      { w: 'wirklich' },
      { w: 'schwer' },
      { w: ',', plain: true },
      { w: 'mich' },
      { w: 'zwischen' },
      { w: 'Grafikdesign' },
      { w: 'und' },
      { w: 'Filmemachen' },
      { w: 'zu' },
      { w: 'entscheiden' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'hat' },
      { w: 'mich' },
      { w: 'gefreut' },
      { w: 'zu' },
      { w: 'hören' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'du' },
      { w: 'überhaupt' },
      { w: 'darüber' },
      { w: 'nachdenkst' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'war' },
      { w: 'früher' },
      { w: 'kein' },
      { w: 'Thema' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'macht' },
      { w: 'mir' },
      { w: 'jedenfalls' },
      { w: 'Spaß' },
      { w: ',', plain: true },
      { w: 'beides' },
      { w: 'mal' },
      { w: 'auszuprobieren' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'lass' },
      { w: 'dir' },
      { w: 'Zeit' },
      { w: 'damit' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'muss' },
      { w: 'ja' },
      { w: 'nicht' },
      { w: 'heute' },
      { w: 'entschieden' },
      { w: 'werden' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was fällt Merle schwer?', qEn: 'What is hard for Merle?', options: ['Grafikdesign zu lernen', 'sich zu entscheiden', 'einen Job zu finden', 'Timo zu überzeugen'], optionsEn: ['to study graphic design', 'to decide', 'to find a job', 'to convince Timo'], answer: 1,
        explain: '"Es fällt mir wirklich schwer, mich … zu entscheiden."' },
      { q: 'Was schlägt Timo vor?', qEn: 'What does Timo suggest?', options: ['sofort entscheiden', 'sich Zeit lassen', 'Grafikdesign wählen', 'das Filmemachen aufgeben'], optionsEn: ['decide immediately', 'take her time', 'choose graphic design', 'give up film-making'], answer: 1,
        explain: '"Dann lass dir Zeit damit."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Du kannst dich nicht entscheiden. Sag es deinem Freund.", taskEn: "You can't decide. Tell your friend.", de: "Es fällt mir schwer, mich zwischen Grafikdesign und Filmemachen zu entscheiden.", en: "I find it hard to decide between graphic design and film-making." },
    { task: "Er freut sich, dass du überlegst. Antworte in seinem Ton.", taskEn: "He's glad you're considering it. Answer in his tone.", de: "Es hat mich gefreut, dass du überhaupt darüber nachdenkst.", en: "I was pleased that you're even considering it." },
    { task: "Deine Kollegin fragt, was dich am Studium stört.", taskEn: "Your colleague asks what bothers you about the course.", de: "Es ärgert mich, dass Informatik im Stundenplan fehlt.", en: "It annoys me that computer science is missing from the timetable." },
    { task: "Ein Freund fragt nach der Hauptrolle im Kinofilm.", taskEn: "A friend asks about the lead role in the film.", de: "Es überrascht mich, dass sie die Hauptrolle bekommen hat.", en: "It surprises me that she got the lead role." },
    { task: "Eine Bekannte fragt nach dem Handyvertrag.", taskEn: "An acquaintance asks about the phone contract.", de: "Es stört mich, dass der Vertrag zwei Jahre läuft.", en: "It bothers me that the contract runs for two years." },
    { task: "Rollenspiel: Ihr sprecht über die Entscheidung nach dem Abitur.", taskEn: "Role-play: you talk about the decision after school.", de: "Es freut mich, dass du die Hochschulreife hast. — Aber es macht mich nervös, dass ich wählen muss.", en: "I'm glad you have your school-leaving qualification. — But it makes me nervous that I have to choose." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion or personal email (six to eight sentences) about your studies or career — using at least two Korrelat-es expressions (one with a dass-clause, one with a zu-infinitive), plus one sentence where the clause moves to position 1 and Korrelat-es disappears.',
    starters: ['Es freut mich, dass …', 'Es macht mir Spaß, … zu …', 'Es ist wichtig, dass …', 'Dass …, freut mich.'],
    placeholder: 'Es freut mich, dass ich als Grafikerin arbeite. Es macht mir Spaß, neue Projekte zu entwerfen …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ freut mich, dass du gekommen bist."',
      options: ['Es', 'Das', 'Er'],
      answer: 0,
      explain: 'Korrelat-es announces the dass-clause that follows.'
    },
    gap: {
      sentence: ['', ' macht mir Spaß, Deutsch zu lernen.'],
      gaps: [ { answer: 'Es', accepts: ['Es'] } ],
      explain: 'Korrelat-es is required here because the zu-infinitive clause stays at the end.'
    },
    match: {
      q: 'Match each Korrelat-es expression to its type.',
      pairs: [
        { noun: 'Es freut mich, dass ...', art: 'dass-Satz' },
        { noun: 'Es macht Spaß, ... zu ...', art: 'zu-Infinitiv' },
        { noun: 'Dass du kommst, freut mich.', art: 'es verschwindet' },
        { noun: 'Es regnet.', art: 'Formales es (kein Korrelat)' }
      ]
    },
    builder: {
      target: 'Build: "It pleases me that you are here."',
      bank: ['Es', 'freut', 'mich', ',', 'dass', 'du', 'hier', 'bist', '.'],
      answer: ['Es', 'freut', 'mich', ',', 'dass', 'du', 'hier', 'bist', '.'],
      roles: { 'Es': 'r-es', 'dass': 'r-connector' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Dass du hier bist, es freut mich.',
      right: 'Dass du hier bist, freut mich.',
      explain: 'Once the dass-clause takes the subject position, Korrelat-es disappears entirely — it is never repeated.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ überrascht mich, dass Anna so gut Deutsch spricht."', options: ['Es', 'Das', 'Sie'], answer: 0,
      explain: 'Korrelat-es announces the dass-clause that follows.' },
    { q: 'Which sentence correctly drops Korrelat-es?', options: ['Dass du hier bist, freut mich.', 'Dass du hier bist, es freut mich.', 'Es dass du hier bist, freut mich.'], answer: 0,
      explain: 'Once the clause moves to position 1, Korrelat-es disappears entirely.' },
    { q: 'What is the difference between Formales es and Korrelat-es?', options: ['No difference', 'Formales es fills an empty subject; Korrelat-es announces a real clause', 'Korrelat-es is only used in questions'], answer: 1,
      explain: 'Formal es has no real subject behind it at all; Korrelat-es points forward to a real clause.' },
    { q: 'Complete: "___ lohnt sich, früh aufzustehen."', options: ['Es', 'Das', 'Er'], answer: 0,
      explain: 'Korrelat-es announces the zu-infinitive clause that follows.' },
    { q: 'Which sentence contains an error?', options: ['Es freut mich, dass du hier bist.', 'Es freut mich, du bist hier.', 'Es macht Spaß, Deutsch zu lernen.'], answer: 1,
      explain: 'The clause needs "dass" to connect properly — it should be "Es freut mich, dass du hier bist."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-es', html: 'Korrelat-es announces a dass-clause or zu-infinitive clause that comes later — the clause carries the real meaning, not "es".' },
    { c: 'r-es', html: 'When the clause itself moves into the subject position, Korrelat-es disappears entirely — it is never repeated.' },
    { c: 'r-es', html: 'Korrelat-es (announces a real clause) is different from Formales es (fills an empty subject with no real clause at all) — never confuse the two.' }
  ],
  revisionTips: [
    'Before dropping Korrelat-es, check: does the clause stay at the end of the sentence? If so, "es" is required.',
    'Practise transforming "Es freut mich, dass..." into "Dass..., freut mich." to feel exactly when "es" disappears.',
    'Compare Formales es (Chapter 4) and Korrelat-es (this chapter) side by side until the difference feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
