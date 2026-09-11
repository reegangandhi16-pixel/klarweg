/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 3
   "Nebensätze sicher beherrschen" — complex subordinate clause
   architecture: multiple/nested/parallel clauses, hierarchy,
   clause reduction, information flow. NOT basic conjunctions
   or elementary Nebensatz word order.
   Dialogue: Antje and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-03-nebensaetze-sicher-beherrschen',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 3,
  title: 'Nebensätze sicher beherrschen',
  titleEn: 'Mastering complex subordinate clauses',
  description: 'C1 is not about knowing more conjunctions — it is about controlling sentence architecture. Build hierarchy, not just length.',
  xp: 290,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 4, title: 'Hauptsätze elegant verbinden', titleEn: 'Connecting main clauses elegantly' , href: 'chapter-c1-04-hauptsaetze-elegant-verbinden.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not more conjunctions — better <em>sentence architecture</em>.',
    intro: 'Antje edits a joint university research paper with Timo, flagging his nested subordinate clauses as impressive but unclear — the fix isn\'t more conjunctions, but rebuilding the sentence\'s whole architecture.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See clause hierarchy, nested clauses, parallel structures and clause reduction used naturally'
    ],
    scene: 'Gemeinsames Schreiben einer Forschungsarbeit',
    femaleSpeakers: ['Antje'],
    dialogue: [
      { speaker: 'Antje', tokens: [
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Satzarchitektur', role: 'r-subject', en: 'sentence architecture', hi: 'वाक्य संरचना', pron: 'ZATS-ar-khi-tek-toor', type: 'Noun · fem.', why: 'die Satzarchitektur = the overall structural design of a sentence (this chapter).', ex: 'Deine Satzarchitektur ist beeindruckend.', exEn: 'Your sentence architecture is impressive.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'beeindruckend', role: 'r-akkusativ', en: 'impressive', hi: 'प्रभावशाली', pron: 'be-INE-druk-ent', type: 'Adjective', why: 'beeindruckend = impressive (recycled B2).', ex: 'Das ist beeindruckend.', exEn: 'That is impressive.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nebensatzhierarchie', role: 'r-subject', en: 'subordinate-clause hierarchy', hi: 'अधीनस्थ उपवाक्य पदानुक्रम', pron: 'NAY-ben-zats-hi-e-rar-khee', type: 'Noun · fem.', why: 'die Nebensatzhierarchie = the ranking/nesting order of subordinate clauses (this chapter).', ex: 'Die Nebensatzhierarchie ist unklar.', exEn: 'The subordinate-clause hierarchy is unclear.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'manchmal', role: 'r-akkusativ', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb' },
        { w: 'unklar', role: 'r-akkusativ', en: 'unclear', hi: 'अस्पष्ट', pron: 'UN-klahr', type: 'Adjective', why: 'unklar = unclear (this chapter).', ex: 'Das ist unklar.', exEn: 'That is unclear.' },
        { w: '.', plain: true }
      ], en: 'Your sentence architecture is impressive, but the subordinate-clause hierarchy is sometimes unclear.', hi: 'Tumhaari vaakya sanrachna prabhaavshaali hai, par adheensth upvaakya padaanukram kabhi-kabhi aspasht hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'viele', role: 'r-akkusativ', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Sätze', role: 'r-akkusativ', en: 'clauses', hi: 'वाक्य', pron: 'ZET-suh', type: 'Noun · plural' },
        { w: 'verschachtele', role: 'r-verb', en: 'nest', hi: 'गुथता हूँ', pron: 'fer-SHAKH-te-luh', type: 'Verb · verschachteln (ich, Satzende)', why: 'verschachteln = to nest/embed one clause inside another (this chapter).', ex: 'Ich verschachtele die Sätze.', exEn: 'I nest the clauses.' },
        { w: '?', plain: true }
      ], en: 'Do you mean that I nest too many clauses?', hi: 'Kya tumhaara matlab hai ki main bahut ज़्यादा vaakya guthta hoon?' },
      { speaker: 'Antje', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Satzreduktion', role: 'r-akkusativ', en: 'sentence reduction', hi: 'वाक्य संक्षिप्तीकरण', pron: 'ZATS-ray-duk-tsyon', type: 'Noun · fem.', why: 'die Satzreduktion = simplifying/shortening a sentence (this chapter).', ex: 'eine Satzreduktion vornehmen' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'मदद', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II)' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Exactly. A sentence reduction would help here.', hi: 'Bilkul. Yahaan vaakya sankshiptikaran madad karega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Informationsstruktur', role: 'r-subject', en: 'information structure', hi: 'सूचना संरचना', pron: 'in-for-ma-TSYONS-shtruk-toor', type: 'Noun · fem.', why: 'die Informationsstruktur (recycled B2, Thema-Rhema).', ex: 'Die Informationsstruktur ist wichtig.', exEn: 'The information structure is important.' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'klarer', role: 'r-akkusativ', en: 'clearer', hi: 'ज़्यादा साफ़', pron: 'KLAH-rer', type: 'Adjective · Komparativ' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होनी', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'And the information structure should be clearer?', hi: 'Aur soochana sanrachna zyada saaf honi chahiye?' },
      { speaker: 'Antje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ordne', role: 'r-verb', en: 'arrange', hi: 'व्यवस्थित करो', pron: 'OR-duh-nuh', type: 'Verb · imperative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Gedanken', role: 'r-akkusativ', en: 'thoughts', hi: 'विचार', pron: 'ge-DAN-ken', type: 'Noun · plural' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'linear', role: 'r-akkusativ', en: 'linear', hi: 'रैखिक', pron: 'li-ne-AHR', type: 'Adjective', why: 'linear = linear/straightforward (this chapter).', ex: 'die Gedanken linear ordnen' },
        { w: '.', plain: true }
      ], en: 'Yes. Simply arrange the thoughts linearly.', hi: 'Haan. Bas vichaaron ko raikhik roop se vyavasthit karo.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा लिखता हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Kapitel', role: 'r-akkusativ', en: 'chapter', hi: 'अध्याय', pron: 'ka-PI-tel', type: 'Noun · neut.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! I will revise the chapter right away.', hi: 'Dhanyavaad! Main abhi adhyaay dobaara likhta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks: <b>"Can I build a subordinate clause?"</b> C1 asks: <b>"How can I organize four ideas into one elegant sentence?"</b> Strong C1 writing is built on <span class="de r-hierarchy">clear hierarchy</span>, not length for its own sake.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NEBENSÄTZE SICHER BEHERRSCHEN at C1 level — complex subordinate clause architecture, NOT basic conjunction meanings or elementary Nebensatz word order (already mastered at B2). Covered: clause hierarchy (Main → Subordinate → Embedded → Additional → Conclusion); multiple subordinate clauses combined naturally (weil, obwohl, nachdem, bevor, während, sobald, sofern, falls, indem, sodass, ohne dass, anstatt dass); nested clauses (e.g. "Ich glaube, dass Anna gesagt hat, dass Rohan erklärt hat, weil..."); parallel/balanced clauses (sowohl...als auch, nicht nur...sondern auch, einerseits...andererseits); clause reduction (long repetitive clauses → infinitive constructions → participial constructions → nominal style, e.g. "der Bericht, der veröffentlicht wurde" → "der veröffentlichte Bericht"); information flow within one sentence (known → new → explanation → evidence → conclusion). ' +
    'Do NOT expect or require basic conjunction meanings or elementary Nebensatz word order explanations — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: too many short choppy sentences where combination would be more elegant; random/unmotivated conjunction selection; incorrect clause hierarchy or lost main verb in long sentences; overusing "weil" where "da" or a nominal/participial reduction would be more elegant; mixed-up logical relationships between clauses. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag choppy short sentences only where combining them would clearly improve C1-level flow — do not force combination everywhere.\n' +
    '- Check that verb-final word order is correctly maintained in every subordinate/nested clause, however long.\n' +
    '- Check that clause reduction (participial attributes, infinitive constructions) is grammatically correct when the learner attempts it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Sentence architecture check:</b> one sentence on whether the learner built clear clause hierarchy rather than just longer sentences.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you build clause hierarchy with real control. Ready for precise case and preposition use next.',
    mid: 'Good. Re-read the Clause Hierarchy diagram once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: C1 is about hierarchy, not length.'
  },

  parserSentence: [
    { w: 'Da', role: 'r-hierarchy' }, { w: 'ich', role: 'plain' }, { w: 'krank', role: 'plain' }, { w: 'war', role: 'r-hierarchy' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: C1 sentence-building is about hierarchy and control, not simply longer sentences.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Antje and Timo revise their research paper, layering clauses into elegant, hierarchical C1 sentences.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master clause hierarchy, nested clauses, parallel structures, and clause reduction.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic journal article and a literary excerpt, identifying subordinate clause hierarchy and nesting.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify clause relationships and embedded information in a university lecture and a radio documentary.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present complex ideas, explain causes, and summarize research using sophisticated subordinate clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Combine short B2 sentences into elegant C1 structures, and write a 350-word academic essay.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill clause hierarchy analysis, sentence combining, and nested clause reconstruction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 15 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Clause hierarchy analysis, sentence combining drills, and a full academic essay writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Clause Hierarchy diagram, Common Clause Patterns table, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Da ich krank gewesen war, entschied ich mich, zu Hause zu bleiben.', text: 'Nest a Plusquamperfekt background clause inside a main decision' },
    { de: 'Obwohl ich ursprünglich hatte arbeiten wollen, blieb ich schließlich zu Hause.', text: 'Build a second layer of hierarchy using a contrast clause' },
    { de: 'Sowohl die Ergebnisse als auch die Methodik sollten wir kritisch diskutieren.', text: 'Use balanced parallel clause structures' },
    { de: 'Statt "der Bericht, der veröffentlicht wurde" — "der veröffentlichte Bericht".', text: 'Reduce a relative clause into an elegant participial attribute' },
    { de: 'So organisieren wir die Information logisch.', text: 'Organize known/new information and evidence within one sentence' }
  ],

  vocab: [
    { de: 'die Satzarchitektur', ipa: '[ˈzatsʔaʁçiˌtɛktuːɐ̯]', en: 'sentence architecture', hi: 'vaakya sanrachnaa', pos: 'Noun · fem.', register: 'C1 · academic', clauseFunction: 'Meta-concept',
      note: 'The deliberate structural design of a complex sentence, balancing multiple clauses.',
      ex1: { de: 'Die Satzarchitektur dieses Textes ist beeindruckend komplex.', en: 'The sentence architecture of this text is impressively complex.', hi: 'Iss text ki vaakya sanrachnaa prabhaavshaali roop se jatil hai.' },
      ex2: { de: 'Gute Satzarchitektur erleichtert das Verständnis langer Texte.', en: 'Good sentence architecture makes understanding long texts easier.', hi: 'Achhi vaakya sanrachnaa lambe texts ko samajhna aasaan banaati hai.' },
      collocations: ['komplexe Satzarchitektur', 'elegante Satzarchitektur'] },
    { de: 'die Nebensatzhierarchie', ipa: '[ˈneːbənzatsˌhiːʁaʁˌçiː]', en: 'subordinate clause hierarchy', hi: 'upvaakya padakram', pos: 'Noun · fem.', register: 'C1 · academic/grammatical', clauseFunction: 'Structural concept',
      note: 'The layered relationship between main clause, subordinate clause, and embedded clauses.',
      ex1: { de: 'Die Nebensatzhierarchie zeigt, welche Information am wichtigsten ist.', en: 'The subordinate clause hierarchy shows which information is most important.', hi: 'Upvaakya padakram dikhaata hai ki kaunsi jaankaari sabse mahatvapurn hai.' },
      ex2: { de: 'Ohne klare Nebensatzhierarchie wirkt ein Text unübersichtlich.', en: 'Without a clear subordinate clause hierarchy, a text seems confusing.', hi: 'Bina spasht upvaakya padakram ke, ek text uljhaa hua lagta hai.' },
      collocations: ['klare Nebensatzhierarchie', 'Nebensatzhierarchie aufbauen'] },
    { de: 'verschachteln', ipa: '[fɛɐ̯ˈʃaxtl̩n]', en: 'to nest / embed', hi: 'nest karna', pos: 'Verb', register: 'C1 · academic/stylistic', clauseFunction: 'Nested clause verb',
      note: 'To embed one clause inside another to add narrative or logical depth.',
      ex1: { de: 'Erfahrene Autoren verschachteln Nebensätze geschickt.', en: 'Experienced authors skillfully nest subordinate clauses.', hi: 'Anubhavi lekhak upvaakyon ko kushaltaa se nest karte hain.' },
      ex2: { de: 'Man sollte Sätze nicht zu tief verschachteln.', en: 'One shouldn\'t nest sentences too deeply.', hi: 'Vaakyon ko bahut zyaada gehraai se nest nahi karna chahiye.' },
      collocations: ['Nebensätze verschachteln', 'tief verschachtelt'] },
    { de: 'die Satzreduktion', ipa: '[ˈzatsʁeˌdʊktsi̯oːn]', en: 'clause/sentence reduction', hi: 'vaakya samkshepan', pos: 'Noun · fem.', register: 'C1 · academic/stylistic', clauseFunction: 'Stylistic reduction concept',
      note: 'Reducing a relative clause into a shorter participial attribute or nominal form for elegance.',
      ex1: { de: 'Durch Satzreduktion wirkt der Text prägnanter.', en: 'Through sentence reduction, the text seems more concise.', hi: 'Vaakya samkshepan ke jariye, text zyaada sankshipt lagta hai.' },
      ex2: { de: 'Satzreduktion ersetzt oft Relativsätze durch Partizipialattribute.', en: 'Sentence reduction often replaces relative clauses with participial attributes.', hi: 'Vaakya samkshepan aksar relative clauses ko participial attributes se badal deta hai.' },
      collocations: ['Satzreduktion anwenden', 'stilistische Satzreduktion'] },
    { de: 'die Informationsstruktur', ipa: '[ɪnfɔʁmaˈtsi̯oːnsˌʃtʁʊktuːɐ̯]', en: 'information structure', hi: 'jaankaari sanrachnaa', pos: 'Noun · fem.', register: 'C1 · academic', clauseFunction: 'Information flow concept',
      note: 'The logical ordering of known information, new information, evidence, and conclusion within a sentence.',
      ex1: { de: 'Die Informationsstruktur des Absatzes ist klar gegliedert.', en: 'The information structure of the paragraph is clearly organized.', hi: 'Paragraph ki jaankaari sanrachnaa spasht roop se vyavasthit hai.' },
      ex2: { de: 'Eine logische Informationsstruktur erleichtert das Lesen.', en: 'A logical information structure makes reading easier.', hi: 'Ek taarkik jaankaari sanrachnaa padhna aasaan banaati hai.' },
      collocations: ['logische Informationsstruktur', 'klare Informationsstruktur'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Satzarchitektur zählt',
      body: [ 'Simple German → Correct German → Complex German → Elegant German. Compare a basic sentence with progressively layered, nested, and contrastive versions.' ],
      hinglish: 'C1 par lambe sentence banana koi lakshya nahi hai \u2014 asli baat yeh hai ki kai ideas ko ek saaf structure mein rakh sako. Ek basic sentence lo aur usme dheere-dheere layers jodo, phir dekho ki matlab kaise saaf rehta hai.'
    },
    {
      title: 'Satzhierarchie (Clause Hierarchy)',
      body: [ 'Main Clause → Subordinate Clause → Embedded Clause → Additional Clause → Conclusion. Learn to identify sentence layers.' ],
      hinglish: 'Lambe sentence ko layers ki tarah socho \u2014 main clause sabse upar, uske andar subordinate clause, uske andar aur ek. Padhte waqt sabse pehle main clause ka verb dhoondo; usi se poora dhaancha samajh mein aa jaata hai.'
    },
    {
      title: 'Mehrere Nebensätze (Multiple Subordinate Clauses)',
      body: [ 'Combine several conjunctions naturally: weil, obwohl, nachdem, bevor, während, sobald, sofern, falls, indem, sodass, ohne dass, anstatt dass.' ],
      hinglish: 'Ek hi sentence mein kai conjunctions aa sakte hain \u2014 <b>weil, obwohl, nachdem, bevor, w\u00e4hrend, sobald, sofern, falls, indem, sodass, ohne dass, anstatt dass</b>. Har ek apna clause banata hai aur har clause ka verb apne end mein jaata hai. Isliye ek sentence mein teen clause hon to teen verbs alag-alag jagah band honge.'
    },
    {
      title: 'Verschachtelte Nebensätze (Nested Clauses)',
      body: [ 'Example pattern: "Ich glaube, dass Anna gesagt hat, dass Rohan erklärt hat, weil...". Learn to read and produce deeply nested structures without confusion.' ],
      hinglish: 'Nested clause matlab clause ke andar clause. Padhne ka tarika yeh hai \u2014 har comma par ruko, dekho kaunsa naya clause khula, aur uska verb dhoondo. Likhte waqt ulta karo: pehle main clause poora karo, phir ek-ek layer jodo. Do se zyada layers likhne mein reader ko mushkil hoti hai, isliye padhne ke liye teen samjho par likhne mein do hi kaafi hain.'
    },
    {
      title: 'Verwechselbare Konjunktionen',
      body: [
        'The list above contains several pairs that look interchangeable and are not. At C1 the mark of control is choosing the precise one, so these are worth separating clearly.'
      ],
      table: {
        head: ['Pair', 'Difference', 'Example'],
        rows: [
          ['<b>weil</b> / <b>da</b>', 'weil = new reason, often spoken; da = reason already known, more formal', '<span class="de">Da dies bekannt ist, \u2026</span>'],
          ['<b>falls</b> / <b>sofern</b>', 'falls = if; sofern = only provided that (a restriction)', '<span class="de">Sofern die Mittel reichen, \u2026</span>'],
          ['<b>sodass</b> / <b>damit</b>', 'sodass = result that follows; damit = purpose that is intended', '<span class="de">\u2026, sodass alle es verstanden</span>'],
          ['<b>w\u00e4hrend</b> (Zeit) / <b>w\u00e4hrend</b> (Kontrast)', 'same word, two jobs \u2014 only context decides', '<span class="de">W\u00e4hrend er arbeitet, liest sie.</span>'],
          ['<b>indem</b> / <b>dadurch, dass</b>', 'both = method; dadurch dass is more formal and emphasises the mechanism', '<span class="de">Indem er \u00fcbte, verbesserte er sich.</span>']
        ]
      },
      note: 'All of these send the verb to the end of their clause \u2014 only the meaning differs, never the word order.',
      hinglish: 'Upar wali list mein kuch jodiyan aisi hain jo ek jaisi lagti hain par hain nahi \u2014 aur C1 par sahi wala chunna hi asli control dikhata hai. <b>weil</b> naya reason deta hai aur bolchaal mein zyada aata hai, jabki <b>da</b> tab lagta hai jab reason pehle se pata ho, aur woh formal lagta hai. <b>falls</b> ka matlab hai \u201cagar\u201d, par <b>sofern</b> ek shart lagata hai \u2014 \u201csirf tab jab\u201d. <b>sodass</b> result batata hai jo apne aap hua, aur <b>damit</b> woh maksad jo tumne chaha tha. Aur ek baat aasaan hai \u2014 in sab mein verb clause ke end mein hi jaata hai, sirf matlab badalta hai.'
    },
    {
      title: 'Parallele Nebensätze (Parallel Clauses)',
      body: [ 'Do baaton ko barabar weight dena ho to yeh jodiyan kaam aati hain: <span class="de">sowohl \u2026 als auch</span>, <span class="de">nicht nur \u2026 sondern auch</span>, <span class="de">einerseits \u2026 andererseits</span>. Dhyaan do ki dono taraf ek hi tarah ka element aana chahiye \u2014 dono noun, ya dono verb.' ],
      hinglish: 'Do baaton ko barabar weight dena ho to yeh jodiyan kaam aati hain: <span class="de">sowohl \u2026 als auch</span>, <span class="de">nicht nur \u2026 sondern auch</span>, <span class="de">einerseits \u2026 andererseits</span>. Dhyaan do ki dono taraf ek hi tarah ka element aana chahiye \u2014 dono noun, ya dono verb.'
    },
    {
      title: 'Satzreduktion (Clause Reduction)',
      body: [ 'Long repetitive clauses → infinitive constructions → participial constructions → nominal style. Reduction improves style when clauses become repetitive.' ],
      hinglish: 'Har baat ke liye poora clause banane ki zaroorat nahi hoti. <span class="de">\u2026, ohne dass er eine Pause machte</span> ko chhota karke <span class="de">\u2026, ohne eine Pause zu machen</span> kiya jaa sakta hai. Isse style saaf aur zyada C1 jaisa lagta hai \u2014 par sab kuch reduce mat karo, warna text bhaari ho jaata hai.'
    },
    {
      title: 'Informationsfluss (Information Flow)',
      body: [ 'Known information → New information → Explanation → Evidence → Conclusion. Organize information logically inside one sentence.' ],
      hinglish: 'Ek sentence ke andar bhi information ka order hota hai \u2014 pehle jo pata hai, phir nayi baat, phir uska explanation aur proof, aur ant mein nateeja. Yeh wahi known-to-new flow hai jo B2 mein dekha tha, bas ab ek hi lambe sentence ke andar.'
    },
    {
      title: 'Häufige Satzmuster (Common Clause Patterns)',
      body: [ 'A quick-reference table of pattern to conjunction.' ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['Cause + Result', 'Da ..., ...'],
          ['Contrast', 'Obwohl ..., ...'],
          ['Time', 'Nachdem ..., ...'],
          ['Condition', 'Falls ..., ...'],
          ['Purpose', 'Damit ..., ...'],
          ['Manner', 'Indem ..., ...']
        ]
      },
      hinglish: 'Yeh table pattern se conjunction dhoondne ke liye hai \u2014 pehle socho ki tum kaunsa rishta batana chahte ho (cause, contrast, time, condition, purpose, method), phir uska conjunction chuno.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'At C1 the individual clauses are usually fine \u2014 what breaks is the architecture holding them together: a lost verb, a fronted clause that does not trigger inversion, or two competing structures merged into one.' ],
      mistakes: [
        { wrong: 'Ich glaube, dass Anna gesagt hat, dass sie kommt, weil sie hat Zeit.', right: 'Ich glaube, dass Anna gesagt hat, dass sie kommt, weil sie Zeit hat.', why: 'Every subordinate clause sends its verb to the end \u2014 including the innermost one. In a nested sentence it is the last clause that learners forget.' },
        { wrong: 'Obwohl das Projekt teuer war, deshalb wurde es abgelehnt.', right: 'Da das Projekt teuer war, wurde es abgelehnt.', why: 'The relationship here is cause, not contrast \u2014 and <b>obwohl</b> plus <b>deshalb</b> cannot share one sentence anyway.' },
        { wrong: 'Nachdem er den Bericht gelesen hatte, er rief den Kollegen an.', right: 'Nachdem er den Bericht gelesen hatte, rief er den Kollegen an.', why: 'A fronted subordinate clause fills position 1, so the main clause has to begin with its verb \u2014 before the subject.' },
        { wrong: 'Obwohl die Ergebnisse, die im Labor entstanden sind, überzeugend.', right: 'Obwohl die Ergebnisse, die im Labor entstanden sind, überzeugend sind, bleiben Zweifel.', why: 'After the embedded relative clause the sentence still owes two verbs \u2014 one to close the obwohl-clause, one for the main clause.' },
        { wrong: 'Sofern es regnet, bleiben wir zu Hause, sofern wir keine Regenjacke haben.', right: 'Falls es regnet, bleiben wir zu Hause, sofern wir keine Regenjacke haben.', why: 'Two conditions in one sentence need two different conjunctions. <b>falls</b> marks the plain condition; <b>sofern</b> adds a restriction (\u201conly provided that\u201d).' },
        { wrong: 'Er arbeitete weiter, ohne dass er eine Pause zu machen.', right: 'Er arbeitete weiter, ohne eine Pause zu machen.', why: 'Choose one structure: <b>ohne dass</b> takes a full clause with a finite verb, while <b>ohne \u2026 zu</b> takes an infinitive. They cannot be combined.' }
      ],
      hinglish: 'C1 par alag-alag clause aksar sahi hote hain \u2014 tootta dhaancha hai. Verb kho jaata hai, aage rakhe clause ke baad inversion nahi hoti, ya do structures aapas mein mila diye jaate hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to express one idea? Simple sentence. Need two related ideas? One subordinate clause. Need several logical relationships? Build clause hierarchy. Need elegant C1 style? Reduce unnecessary clauses where possible.' ],
      note: 'Memory trick: B2 asks "Can I build a subordinate clause?" C1 asks "How can I organize four ideas into one elegant sentence?" Strong C1 writing is built on clear hierarchy, not long sentences for their own sake.',
      hinglish: 'Ek hi baat kehni hai? Simple sentence kaafi hai. Do judi hui baatein? Ek subordinate clause. Kai rishte batane hain? Layers banao. Aur C1 style chahiye? Jahan clause ki zaroorat na ho, wahan use chhota kar do. Yaad rakho \u2014 lamba sentence apne aap achha nahi hota, saaf structure achha hota hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kommentar: Ein umstrittenes Urteil',
    titleEn: 'Reading A — Commentary on a controversial court ruling',
    tokens: [
      { w: 'Obwohl', role: 'r-hierarchy', en: 'although (subordinating conjunction, contrast)', hi: 'हालांकि', type: 'Konjunktion' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Gericht', role: 'plain', en: 'court', hi: 'अदालत', type: 'Noun · neut.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'seiner', role: 'plain', en: 'its', hi: 'अपने', type: 'Possessivartikel · Dat.' },
      { w: 'Begründung', role: 'plain', en: 'reasoning (Satzende)', hi: 'तर्क (Satzende)', type: 'Noun · fem.' },
      { w: 'betont', role: 'r-hierarchy', en: 'emphasises (Satzende, subordinate clause verb)', hi: 'ज़ोर देता है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-nested', en: 'that (nested subordinate opener)', hi: 'कि', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Meinungsfreiheit', role: 'plain', en: 'freedom of speech', hi: 'अभिव्यक्ति की स्वतंत्रता', type: 'Noun · fem.' },
      { w: 'geschützt', role: 'r-nested', en: 'protected (part of Zustandspassiv)', hi: 'सुरक्षित', type: 'Partizip II' },
      { w: 'bleiben', role: 'r-nested', en: 'remain (Satzende, nested clause)', hi: 'रहनी चाहिए (Satzende)', type: 'Verb · bleiben (Satzende)', why: 'A "dass" clause nested inside the "obwohl" clause creates two layers of subordination (this chapter).' },
      { w: 'müsse', role: 'r-nested', en: 'must (Konjunktiv I, Satzende)', hi: '(Konjunktiv I, Satzende)', type: 'Verb · müssen (Konjunktiv I, Satzende)' },
      { w: ',', plain: true },
      { w: 'sorgt', role: 'plain', en: 'causes (main clause)', hi: 'पैदा करता है (main clause)', type: 'Verb · sorgen für' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Urteil', role: 'plain', en: 'ruling', hi: 'फ़ैसला', type: 'Noun · neut.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'erhebliche', role: 'plain', en: 'considerable', hi: 'काफ़ी', type: 'Adjective' },
      { w: 'Kritik', role: 'plain', en: 'criticism (Satzende)', hi: 'आलोचना (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'आलोचक', type: 'Noun · plural' },
      { w: 'bemängeln', role: 'plain', en: 'criticise', hi: 'शिकायत करते हैं', type: 'Verb · bemängeln' },
      { w: 'vor', role: 'plain', en: 'above all', hi: 'सबसे ज़्यादा', type: 'Adverbiale' },
      { w: 'allem', role: 'plain', en: '(Satzende, part of "vor allem")', hi: '', type: 'Pronomen' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'ausreichend', role: 'plain', en: 'sufficiently', hi: 'पर्याप्त रूप से', type: 'Adverb' },
      { w: 'berücksichtigt', role: 'plain', en: 'considered', hi: 'ध्यान में रखा गया', type: 'Verb · Partizip II' },
      { w: 'worden', role: 'plain', en: 'been (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Passiv Perfekt, Satzende)' },
      { w: 'sei', role: 'r-nested', en: 'has (Konjunktiv I, Satzende)', hi: '(Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: ',', plain: true },
      { w: 'wie', role: 'plain', en: 'how', hi: 'कैसे', type: 'Konjunktion' },
      { w: 'stark', role: 'plain', en: 'strongly', hi: 'गंभीर रूप से', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Betroffenen', role: 'plain', en: 'those affected (Satzende)', hi: 'प्रभावित लोग (Satzende)', type: 'Noun · plural' },
      { w: 'unter', role: 'plain', en: 'under', hi: 'के अंतर्गत', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Aussage', role: 'plain', en: 'statement (Satzende)', hi: 'बयान (Satzende)', type: 'Noun · fem.' },
      { w: 'gelitten', role: 'plain', en: 'suffered (Satzende)', hi: 'तकलीफ़ उठाई (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'hätten', role: 'plain', en: 'have (Satzende)', hi: '(Satzende)', type: 'Verb · haben (Konjunktiv II, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Although the court emphasises in its reasoning that freedom of speech must remain protected, the ruling has caused considerable criticism. Critics complain above all that it was not sufficiently considered how severely those affected had suffered under the statement.',
    comprehension: [
      { q: 'Wie viele Ebenen hat der erste Satz?', options: ['Hauptsatz + zwei verschachtelte Nebensätze', 'Nur ein Hauptsatz', 'Vier unabhängige Sätze'], answer: 0 },
      { q: 'Welche Funktion hat "obwohl" hier?', options: ['Kontrast zwischen Begründung und Reaktion', 'Grund', 'Zeit'], answer: 0 },
      { q: 'Warum steht "sei" im Konjunktiv I?', options: ['Es gibt die Meinung der Kritiker wieder, nicht die Meinung des Autors', 'Es ist die einzig mögliche Form', 'Es handelt sich um wörtliche Rede'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Literarischer Auszug',
    titleEn: 'Reading B — Literary excerpt',
    tokens: [
      { w: 'Nachdem', role: 'r-hierarchy', en: 'after (time subordinate clause opener)', hi: 'ke baad (time subordinate clause opener)', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'woh', type: 'Pronomen · Nom.' },
      { w: 'gezögert', role: 'r-hierarchy', en: 'hesitated (part of Plusquamperfekt)', hi: '(Plusquamperfekt ka hissa)', type: 'Partizip II' },
      { w: 'hatte', role: 'r-hierarchy', en: 'had (Satzende, Plusquamperfekt)', hi: 'tha (Satzende, Plusquamperfekt)', type: 'Verb · haben (Satzende)', why: 'The Plusquamperfekt time clause delays the main action, building narrative suspense.' },
      { w: ',', plain: true },
      { w: 'öffnete', role: 'plain', en: 'opened (main clause)', hi: '(main clause)', type: 'Verb (Präteritum)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'usne', type: 'Pronomen · Nom.' },
      { w: 'endlich', role: 'plain', en: 'finally', hi: 'aakhirkaar', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'woh', type: 'Article' },
      { w: 'Tür', role: 'plain', en: 'door (Satzende)', hi: 'darwaaza (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'hinter', role: 'r-nested', en: 'behind', hi: 'ke peeche', type: 'Präposition · Dat.' },
      { w: 'der', role: 'r-nested', en: 'which (fem. dat., relative clause, delayed information)', hi: 'jiske peeche (relative clause, delayed information)', type: 'Relativpronomen · Dat.', why: 'A relative clause delaying the key information ("was waiting") builds suspense — a classic literary technique.' },
      { w: 'eine', role: 'plain', en: 'a (fem. nom.)', hi: 'ek', type: 'Article' },
      { w: 'Überraschung', role: 'plain', en: 'surprise', hi: 'aashcharya', type: 'Noun · fem.' },
      { w: 'wartete', role: 'r-nested', en: 'was waiting (Satzende, delayed relative clause)', hi: 'intezaar kar rahi thi (Satzende, delayed relative clause)', type: 'Verb (Präteritum, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'After she had hesitated, she finally opened the door, behind which a surprise was waiting.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_003_L001', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dieser Satz hier hat vier verschachtelte Nebensätze — ich verliere völlig den Faden.', en: 'Timo, this sentence here has four nested subordinate clauses — I completely lose the thread.' },
      { id: 'C1_003_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, ich wollte eigentlich nur einen Gedanken ausdrücken, der sich verselbstständigt hat.', en: 'True, I actually just wanted to express one thought that got out of hand.' },
      { id: 'C1_003_L003', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Am besten teilen wir ihn in zwei kürzere Sätze auf.', en: 'It\'s best if we split it into two shorter sentences.' },
      { id: 'C1_003_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee, das liest sich bestimmt klarer.', en: 'Good idea, that will definitely read more clearly.' }
    ],
    transcript: 'Timo, dieser Satz hier hat vier verschachtelte Nebensätze — ich verliere völlig den Faden. Stimmt, ich wollte eigentlich nur einen Gedanken ausdrücken, der sich verselbstständigt hat. Am besten teilen wir ihn in zwei kürzere Sätze auf. Gute Idee, das liest sich bestimmt klarer.',
    translation: 'Timo, this sentence here has four nested subordinate clauses — I completely lose the thread. True, I actually just wanted to express one thought that got out of hand. It\'s best if we split it into two shorter sentences. Good idea, that will definitely read more clearly.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dieser' },
      { w: 'Satz' },
      { w: 'hier' },
      { w: 'hat' },
      { w: 'vier' },
      { w: 'verschachtelte' },
      { w: 'Nebensätze' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'verliere' },
      { w: 'völlig' },
      { w: 'den' },
      { w: 'Faden' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'wollte' },
      { w: 'eigentlich' },
      { w: 'nur' },
      { w: 'einen' },
      { w: 'Gedanken' },
      { w: 'ausdrücken' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'sich' },
      { w: 'verselbstständigt' },
      { w: 'hat' },
      { w: '.', plain: true },
      { w: 'Am' },
      { w: 'besten' },
      { w: 'teilen' },
      { w: 'wir' },
      { w: 'ihn' },
      { w: 'in' },
      { w: 'zwei' },
      { w: 'kürzere' },
      { w: 'Sätze' },
      { w: 'auf' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'liest' },
      { w: 'sich' },
      { w: 'bestimmt' },
      { w: 'klarer' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist das Problem an Timos Satz?', qEn: 'What is the problem with Timo\'s sentence?', options: ['zu kurz', 'vier verschachtelte Nebensätze', 'falsche Grammatik', 'kein Verb'], optionsEn: ['too short', 'four nested subordinate clauses', 'wrong grammar', 'no verb'], answer: 1,
        explain: '"… dieser Satz hier hat vier verschachtelte Nebensätze."' },
      { q: 'Wozu entscheiden sie sich?', qEn: 'What do they decide to do?', options: ['den Satz löschen', 'ihn in zwei kürzere Sätze aufteilen', 'nichts ändern', 'ihn länger machen'], optionsEn: ['delete the sentence', 'split it into two shorter sentences', 'change nothing', 'make it longer'], answer: 1,
        explain: '"Am besten teilen wir ihn in zwei kürzere Sätze auf."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo verliert bei vier verschachtelten Nebensätzen den Faden. Was rätst du?", taskEn: "Timo loses the thread with four embedded clauses. What do you advise?", de: "Ich würde den Satz reduzieren; ein Gedanke pro Satz trägt die Informationsstruktur besser.", en: "I'd reduce the sentence; one idea per sentence carries the information structure better." },
    { task: "Deine Betreuerin fragt, warum die Prognose fehlt.", taskEn: "Your supervisor asks why the forecast is missing.", de: "Da die Datenlage dünn ist, verzichten wir auf eine Prognose.", en: "Since the data is thin, we refrain from a forecast." },
    { task: "Eine Kollegin fragt, woran die Abweichung liegt.", taskEn: "A colleague asks what's behind the deviation.", de: "Ich glaube, dass die Abweichung daran liegt, dass wir zu früh gemessen haben.", en: "I think the deviation is due to us having measured too early." },
    { task: "Die Lektorin sagt, der Abstract sei zwei Zeilen zu lang. Was schlägst du vor?", taskEn: "The editor says the abstract is two lines too long. What do you propose?", de: "Ich schreibe die 2024 erhobenen Daten und spare so den ganzen Relativsatz.", en: "I'll write 'the data collected in 2024' and so save the whole relative clause." },
    { task: "Rollenspiel: Ihr überarbeitet gemeinsam einen Absatz.", taskEn: "Role-play: you revise a paragraph together.", de: "Obwohl die Stichprobe klein ist, lässt sich zeigen, dass der Effekt bestehen bleibt.", en: "Although the sample is small, it can be shown that the effect persists." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2 text made of short sentences and combine them into elegant C1 sentences using clause hierarchy, nesting, and clause reduction.\n\nTASK 2 — Academic essay (350 words): Write an essay demonstrating clause hierarchy, multiple subordinate clauses, stylistic variation, and logical information flow.',
    starters: ['Da die Ergebnisse eindeutig waren, konnten die Forscher, obwohl sie zunächst skeptisch gewesen waren, ihre Hypothese bestätigen.', 'Sowohl die Methodik als auch die Ergebnisse überzeugten das Fachpublikum.'],
    placeholder: 'Da das Projekt erfolgreich verlaufen war, entschied sich das Team, obwohl es zunächst Zweifel gegeben hatte, die Ergebnisse zu veröffentlichen...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence shows the most elegant C1 clause hierarchy?',
      options: ['Da ich krank gewesen war, entschied ich mich, zu Hause zu bleiben.', 'Ich war krank. Ich blieb zu Hause.', 'Ich war krank und ich blieb zu Hause.'],
      answer: 0,
      explain: 'The first sentence nests a Plusquamperfekt background clause inside a main decision — genuine C1 clause hierarchy.'
    },
    gap: {
      sentence: ['Statt „der Bericht, der veröffentlicht wurde" können wir „der ', ' Bericht" schreiben.'],
      gaps: [ { answer: 'veröffentlichte', accepts: ['veröffentlichte'] } ],
      explain: 'Reducing a relative clause to a participial attribute ("veröffentlichte") is elegant C1 clause reduction.'
    },
    match: {
      q: 'Match each clause pattern to its function.',
      pairs: [
        { noun: 'Da ..., ...', art: 'Cause + Result' },
        { noun: 'Obwohl ..., ...', art: 'Contrast' },
        { noun: 'Nachdem ..., ...', art: 'Time' },
        { noun: 'Damit ..., ...', art: 'Purpose' }
      ]
    },
    builder: {
      target: 'Build: "Since I was sick, I stayed home." (elegant fronted cause clause)',
      bank: ['Da', 'ich', 'krank', 'war', ',', 'blieb', 'ich', 'zu', 'Hause', '.'],
      answer: ['Da', 'ich', 'krank', 'war', ',', 'blieb', 'ich', 'zu', 'Hause', '.'],
      roles: { 'Da': 'r-hierarchy', 'war': 'r-hierarchy' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich war krank. Ich blieb zu Hause. Ich wollte eigentlich arbeiten. Ich habe mich entschieden zu bleiben.',
      right: 'Da ich krank gewesen war, entschied ich mich, obwohl ich ursprünglich hatte arbeiten wollen, zu Hause zu bleiben.',
      explain: 'Four choppy B2-level sentences are combined into one hierarchical C1 sentence with cause and contrast clauses.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the main goal of C1 clause architecture?', options: ['Organizing multiple ideas into clear hierarchy', 'Writing the longest sentence possible', 'Avoiding all subordinate clauses'], answer: 0,
      explain: 'C1 writing is about clear hierarchy and control, not length for its own sake.' },
    { q: 'What does clause reduction achieve stylistically?', options: ['Replaces relative clauses with participial attributes for elegance', 'Makes sentences longer', 'Removes all subordinate clauses'], answer: 0,
      explain: '"Der Bericht, der veröffentlicht wurde" → "der veröffentlichte Bericht" is a classic C1 reduction.' },
    { q: 'What does "sowohl...als auch" express?', options: ['A balanced, parallel structure', 'A contrast', 'A cause'], answer: 0,
      explain: 'Parallel structures balance two ideas of equal weight in one sentence.' },
    { q: 'What is a common C1 mistake regarding "weil"?', options: ['Overusing it instead of varying cause expressions', 'Never using it at all', 'Using it only in questions'], answer: 0,
      explain: 'Repeating "weil" throughout a text sounds monotonous and B1-level; vary with "da", nominalization, or reduction.' },
    { q: 'B2 asks "Can I build a subordinate clause?" What does C1 ask?', options: ['"How can I organize four ideas into one elegant sentence?"', '"How many conjunctions do I know?"', '"Is my sentence short enough?"'], answer: 0,
      explain: 'C1 mastery is about sentence planning and hierarchy, not just correctness or brevity.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-hierarchy', html: 'Clause hierarchy (Main → Subordinate → Embedded → Additional → Conclusion) organizes multiple ideas into one elegant sentence.' },
    { c: 'r-nested', html: 'Nested clauses ("Ich glaube, dass...dass...") let you embed complex logical relationships without losing clarity.' },
    { c: 'r-reduction', html: 'Clause reduction (relative clause → participial attribute → nominal style) creates concise, elegant C1 prose.' }
  ],
  revisionTips: [
    'Take four short B2-level sentences from your own writing and combine them into one hierarchical C1 sentence.',
    'Find a relative clause in a German text and try reducing it to a participial attribute.',
    'Practise using "da" instead of "weil" at least three times to vary your cause expressions.'
  ]
};

window.CHAPTER = CHAPTER;
