/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 5
   "Zweiteilige Satzverbindungen" — correlative/paired connectors:
   addition, alternatives, contrast, comparison, cause-result,
   restriction. NOT basic conjunctions.
   Dialogue: Silke and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-05-zweiteilige-satzverbindungen',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 5,
  title: 'Zweiteilige Satzverbindungen',
  titleEn: 'Correlative & paired sentence connectors',
  description: 'Think of paired connectors as bridges. The first word opens the bridge; the second word completes it. Never use only one half.',
  xp: 330,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 6, title: 'Goethe Mini 1', titleEn: 'Checkpoint: Chapters 1–5' , href: 'chapter-c1-06-goethe-mini-1.html' },

  prevChapter: { number: 4, title: 'Hauptsätze elegant verbinden', titleEn: 'Connecting main clauses elegantly', href: 'chapter-c1-04-hauptsaetze-elegant-verbinden.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Paired connectors are <em>bridges</em>: never leave one side unconnected.',
    intro: 'Discussing a job candidate before a conference presentation, Silke argues she convinces both professionally and personally, while Timo notes neither her experience nor her language skills quite suffice — every judgment built on a paired connector, never left half-finished.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See addition, alternative, contrast, comparison, and degree structures used naturally as balanced pairs'
    ],
    scene: 'Vorbereitung einer Konferenzpräsentation',
    femaleSpeakers: ['Silke'],
    dialogue: [
      { speaker: 'Silke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Kandidatin', role: 'r-subject', en: 'candidate (f)', hi: 'उम्मीदवार', pron: 'kan-di-DAH-tin', type: 'Noun · fem.' },
        { w: 'überzeugt', role: 'r-verb', en: 'convinces', hi: 'मनाती है', pron: 'ü-ber-TSOYKT', type: 'Verb · überzeugen' },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch (recycled B2)' },
        { w: 'fachlich', role: 'r-akkusativ', en: 'professionally', hi: 'पेशेवर रूप से', pron: 'FAKH-likh', type: 'Adverb' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'menschlich', role: 'r-akkusativ', en: 'on a human level', hi: 'मानवीय रूप से', pron: 'MEN-shlikh', type: 'Adjective', why: 'menschlich = on a human level (this chapter).', ex: 'menschlich überzeugend' },
        { w: '.', plain: true }
      ], en: 'The candidate convinces both professionally and on a human level.', hi: 'Ummeedwaar dono pesheva roop se aur maanviya roop se mana leti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'weder', role: 'r-conjunction', en: 'neither', hi: 'न तो', pron: 'VAY-der', type: 'Conjunction · weder … noch (recycled B2)' },
        { w: 'ihre', role: 'r-subject', en: 'her (fem.)', hi: 'उसका', pron: 'EE-ruh', type: 'Possessive' },
        { w: 'Erfahrung', role: 'r-subject', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'noch', role: 'r-conjunction', en: 'nor', hi: 'न ही', pron: 'nokh', type: 'Conjunction · part 2' },
        { w: 'ihre', role: 'r-subject', en: 'her (fem.)', hi: 'उसकी', pron: 'EE-ruh', type: 'Possessive' },
        { w: 'Sprachkenntnisse', role: 'r-subject', en: 'language skills', hi: 'भाषा कौशल', pron: 'SHPRAHKH-kent-ni-suh', type: 'Noun · plural', why: 'die Sprachkenntnisse (this chapter).', ex: 'ihre Sprachkenntnisse' },
        { w: 'reichen', role: 'r-verb', en: 'suffice', hi: 'पर्याप्त हैं', pron: 'RY-khen', type: 'Verb · ausreichen', lexicalUnit: 'ausreichen', why: 'ausreichen = to suffice (this chapter).', ex: 'Sie reichen nicht aus.', exEn: 'They do not suffice.' },
        { w: 'aus', role: 'r-verb', en: '(prefix of ausreichen)', hi: '', pron: 'ows', type: 'Separable prefix · Satzende', lexicalUnit: 'ausreichen' },
        { w: '.', plain: true }
      ], en: 'True, but neither her experience nor her language skills suffice.', hi: 'Sahi hai, lekin na uska anubhav na uski bhasha kaushal paryaapt hain.' },
      { speaker: 'Silke', tokens: [
        { w: 'Zwar', role: 'r-conjunction', en: 'admittedly', hi: 'हालांकि', pron: 'tsvahr', type: 'Conjunction · zwar … aber (recycled B2)' },
        { w: 'fehlt', role: 'r-verb', en: 'lacks', hi: 'कमी है', pron: 'faylt', type: 'Verb · fehlen' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसमें', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'Erfahrung', role: 'r-subject', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction · part 2' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'lernt', role: 'r-verb', en: 'learns', hi: 'सीखती है', pron: 'LAIRNT', type: 'Verb · lernen' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schnell', role: 'r-akkusativ', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Admittedly she lacks experience, but she learns very quickly.', hi: 'Halaanki uske paas anubhav ki kami hai, par woh bahut jaldi seekhti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto (recycled B1)' },
        { w: 'schneller', role: 'r-subject', en: 'faster', hi: 'जल्दी', pron: 'SHNE-ler', type: 'Adjective · Komparativ' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'lernt', role: 'r-verb', en: 'learns', hi: 'सीखती है', pron: 'LAIRNT', type: 'Verb · lernen (Satzende)' },
        { w: ',', plain: true },
        { w: 'desto', role: 'r-conjunction', en: 'the more', hi: 'उतना ही', pron: 'DES-to', type: 'Conjunction · part 2' },
        { w: 'eher', role: 'r-subject', en: 'sooner', hi: 'जल्दी', pron: 'AY-er', type: 'Adverb' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगी', pron: 'virt', type: 'Verb · werden' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'produktiv', role: 'r-subject', en: 'productive', hi: 'उत्पादक', pron: 'pro-duk-TEEF', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The faster she learns, the sooner she will be productive.', hi: 'Jitni jaldi woh seekhegi, utni hi jaldi woh utpaadak hogi.' },
      { speaker: 'Silke', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'entweder', role: 'r-conjunction', en: 'either', hi: 'या तो', pron: 'ent-VAY-der', type: 'Conjunction · entweder … oder (recycled B1)' },
        { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'einstellen', role: 'r-verb', en: 'hire', hi: 'नियुक्त करना', pron: 'INE-shte-len', type: 'Verb · einstellen' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'O-der', type: 'Conjunction · part 2' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार करना', pron: 'VAR-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Shall we either hire her or still wait?', hi: 'Kya humein use naukri deni chahiye ya abhi aur intezaar karna chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Einstellung', role: 'r-akkusativ', en: 'hiring', hi: 'नियुक्ति', pron: 'INE-shte-lung', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Ihr', role: 'r-subject', en: 'her (neut.)', hi: 'उसकी', pron: 'eer', type: 'Possessive' },
        { w: 'Potenzial', role: 'r-subject', en: 'potential', hi: 'क्षमता', pron: 'po-ten-TSYAHL', type: 'Noun · neut.', why: 'das Potenzial (this chapter).', ex: 'ihr Potenzial' },
        { w: 'überzeugt', role: 'r-verb', en: 'convinces', hi: 'मनाती है', pron: 'ü-ber-TSOYKT', type: 'Verb · überzeugen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'I am for hiring. Her potential convinces me.', hi: 'Main naukri dene ke paksh mein hoon. Uski kshamta mujhe manaati hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Paired connectors are <b>bridges</b>. The first word opens the bridge; the second word completes it. Never use only one half — <span class="de r-addition">sowohl</span> needs <span class="de r-addition">als auch</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ZWEITEILIGE SATZVERBINDUNGEN at C1 level — correlative/paired sentence connectors, NOT basic conjunctions or simple connectors (already mastered at B2). Covered categories: Addition (sowohl...als auch, nicht nur...sondern auch, ebenso...wie); Alternatives (entweder...oder, weder...noch, beziehungsweise, ob...oder); Contrast (zwar...aber, einerseits...andererseits, auf der einen Seite...auf der anderen Seite, nicht...sondern); Comparison (je...desto, je...umso, genauso...wie, ebenso...wie, mehr...als, weniger...als); Cause and Result / Degree (so...dass, derart...dass, so sehr...dass, in einem solchen Maß...dass); Restriction/Exception (weder...noch, nicht etwa...sondern, kaum...als, erst...dann). ' +
    'Do NOT expect or require basic single conjunctions or simple connector explanations — this chapter assumes those are mastered; do not flag their absence. The most important thing to catch: an INCOMPLETE correlative pair — using only the first half of a bridge without its required second half, or mismatching the two halves (e.g. "sowohl...und" instead of "sowohl...als auch"; "entweder...und" instead of "entweder...oder"; "weder...oder" instead of "weder...noch"; "zwar...sondern" instead of "zwar...aber"; "nicht nur...auch" instead of "nicht nur...sondern auch"; "je...mehr" instead of "je...desto/umso"). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag any correlative pair that is incomplete (only one half used) or mismatched (wrong second half paired with the first).\n' +
    '- Check "je + Komparativ, desto/umso + Komparativ" word order carefully — both clauses need a comparative adjective.\n' +
    '- Check that "so...dass" / "derart...dass" degree structures have the adjective/adverb correctly placed before "dass".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Bridge check:</b> one sentence on whether every correlative pair the learner used was properly completed (both halves present and matched).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — every bridge you build is properly completed. Ready for genitive prepositions next.',
    mid: 'Good. Re-read the Master Table of paired connectors once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: a bridge is complete only when both sides are connected.'
  },

  parserSentence: [
    { w: 'Sowohl', role: 'r-addition' }, { w: 'die', role: 'plain' }, { w: 'Methodik', role: 'plain' }, { w: 'als', role: 'r-addition' }, { w: 'auch', role: 'r-addition' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: paired connectors are bridges — never leave one half unconnected.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Silke and Timo build a balanced conference presentation using six categories of paired connectors.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master addition, alternative, contrast, comparison, and degree correlative pairs.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic article and an opinion editorial, identifying paired connectors and rhetorical balance.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify paired connectors and argument progression in a university lecture and a conference presentation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give presentations and discuss advantages/disadvantages using authentic paired sentence structures.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text with elegant paired connectors, and write a 350-word argumentative essay.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill completing paired connectors, connector selection, and parallel structure analysis.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 330 XP.' },
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
      desc: 'Complete-the-bridge drills, connector selection, and a full argumentative essay writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Meaning Map, Register Comparison, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Sowohl die Methodik als auch die Ergebnisse überzeugen.', text: 'Build a balanced addition structure with sowohl...als auch' },
    { de: 'Nicht nur bestätigt die Studie die Hypothese, sondern auch einen neuen Trend.', text: 'Emphasize surprising additional information' },
    { de: 'Entweder setzen wir die Forschung fort, oder wir verändern den Ansatz.', text: 'Present exactly two exclusive options' },
    { de: 'Weder die Stichprobe noch die Methode war perfekt.', text: 'Negate both alternatives at once' },
    { de: 'Je größer die Stichprobe, desto zuverlässiger werden die Ergebnisse.', text: 'Express a proportional relationship' }
  ],

  vocab: [
    { de: 'sowohl ... als auch', ipa: '[zoˈvoːl ʔals ˈaʊx]', en: 'both ... and', hi: 'dono ... aur bhi', pos: 'Korrelativkonnektor', register: 'C1 · neutral/formal', connectorCategory: 'Addition',
      note: 'A correlative pair that gives equal weight to two connected ideas — never use "sowohl" alone with "und".',
      ex1: { de: 'Sowohl die Theorie als auch die Praxis wurden berücksichtigt.', en: 'Both the theory and the practice were taken into account.', hi: 'Siddhant aur vyavahaar dono ko dhyaan mein rakha gaya.' },
      ex2: { de: 'Er beherrscht sowohl Deutsch als auch Französisch fließend.', en: 'He masters both German and French fluently.', hi: 'Woh German aur French dono hi ravaani se bolta hai.' },
      collocations: ['sowohl ... als auch berücksichtigen', 'sowohl ... als auch überzeugen'] },
    { de: 'entweder ... oder', ipa: '[ˈɛntveːdɐ ˈoːdɐ]', en: 'either ... or', hi: 'ya toh ... ya', pos: 'Korrelativkonnektor', register: 'C1 · neutral/formal', connectorCategory: 'Alternative',
      note: 'Presents exactly two mutually exclusive options — never combine with "und".',
      ex1: { de: 'Entweder akzeptieren wir das Risiko, oder wir ändern den Plan.', en: 'Either we accept the risk, or we change the plan.', hi: 'Ya toh hum risk accept karte hain, ya hum plan badalte hain.' },
      ex2: { de: 'Entweder kommt er heute, oder er kommt gar nicht.', en: 'Either he comes today, or he doesn\'t come at all.', hi: 'Ya toh woh aaj aata hai, ya bilkul nahi aata.' },
      collocations: ['entweder ... oder entscheiden', 'entweder ... oder wählen'] },
    { de: 'weder ... noch', ipa: '[ˈveːdɐ nɔx]', en: 'neither ... nor', hi: 'na toh ... na hi', pos: 'Korrelativkonnektor', register: 'C1 · neutral/formal', connectorCategory: 'Negation',
      note: 'Negates both alternatives simultaneously — never pair "weder" with "oder".',
      ex1: { de: 'Weder die Kritiker noch die Befürworter konnten überzeugen.', en: 'Neither the critics nor the supporters could convince.', hi: 'Na toh aalochak, na hi samarthak convince kar sake.' },
      ex2: { de: 'Sie hatte weder Zeit noch Geduld für die Diskussion.', en: 'She had neither time nor patience for the discussion.', hi: 'Uske paas charcha ke liye na toh samay tha, na hi dhairya.' },
      collocations: ['weder ... noch bestätigen', 'weder ... noch möglich'] },
    { de: 'zwar ... aber', ipa: '[tsvaːɐ̯ ˈaːbɐ]', en: 'admittedly ... but', hi: 'sach hai ki ... lekin', pos: 'Korrelativkonnektor', register: 'C1 · academic/formal', connectorCategory: 'Contrast',
      note: 'Concedes a point before contrasting it — a classic academic rhetorical structure.',
      ex1: { de: 'Zwar war die Stichprobe klein, aber die Ergebnisse waren signifikant.', en: 'Admittedly the sample was small, but the results were significant.', hi: 'Sach hai ki namoona chhota tha, lekin parinaam mahatvapurn thay.' },
      ex2: { de: 'Zwar kostet die Lösung mehr, aber sie spart langfristig Zeit.', en: 'Admittedly the solution costs more, but it saves time long-term.', hi: 'Sach hai ki solution zyaada mehenga hai, lekin yeh lambi avadhi mein samay bachaata hai.' },
      collocations: ['zwar ... aber dennoch', 'zwar ... aber trotzdem'] },
    { de: 'je ... desto', ipa: '[jeː ˈdɛsto]', en: 'the ... the (proportional comparison)', hi: 'jitna ... utna', pos: 'Korrelativkonnektor', register: 'C1 · formal/academic', connectorCategory: 'Comparison',
      note: 'Expresses a proportional relationship — both clauses require a comparative adjective, and "je" starts a verb-final clause.',
      ex1: { de: 'Je größer die Stichprobe, desto zuverlässiger die Ergebnisse.', en: 'The larger the sample, the more reliable the results.', hi: 'Jitna bada namoona, utne vishvaasneey parinaam.' },
      ex2: { de: 'Je mehr man übt, desto besser wird man.', en: 'The more one practises, the better one becomes.', hi: 'Jitna zyaada practice karo, utna behtar bante ho.' },
      collocations: ['je ... desto besser', 'je ... desto zuverlässiger'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Zweiteilige Satzverbindungen?',
      body: [ 'A single connector expresses one relationship. A paired connector connects two ideas with balanced emphasis — this is one of the strongest indicators of C1 writing.' ],
      hinglish: 'Single connector ek rishta batata hai. Paired connector do ideas ko barabar weight ke saath jodta hai \u2014 aur exam mein yeh turant dikhta hai ki tumhara German C1 level ka hai. Inhe jodi ki tarah socho: pehla shabd pul kholta hai, doosra use poora karta hai.'
    },
    {
      title: 'Addition (sowohl...als auch / nicht nur...sondern auch)',
      body: [ 'sowohl...als auch, nicht nur...sondern auch, ebenso...wie, sowohl hinsichtlich...als auch bezüglich (formal) — each with distinct meaning, emphasis, register, and punctuation.' ],
      hinglish: 'Jodne ke liye do main jodiyan hain. <b>sowohl \u2026 als auch</b> dono cheezon ko barabar rakhta hai, aur <b>nicht nur \u2026 sondern auch</b> mein zor <b>doosri</b> cheez par padta hai \u2014 isliye jo baat highlight karni ho use doosri jagah rakho. <b>ebenso \u2026 wie</b> comparison ke liye hai, aur <b>sowohl hinsichtlich \u2026 als auch bez\u00fcglich</b> kaafi formal hai, sirf academic writing ke liye.'
    },
    {
      title: 'Alternativen (entweder...oder / weder...noch)',
      body: [ 'entweder...oder (choice), weder...noch (exclusion of both), beziehungsweise, ob...oder — subtle differences between choice and exclusion.' ],
      hinglish: '<b>entweder \u2026 oder</b> do mein se ek chunne ke liye hai, aur <b>weder \u2026 noch</b> dono ko mana karne ke liye \u2014 isliye uske saath alag se <i>nicht</i> nahi lagta. <b>beziehungsweise</b> (bzw.) formal writing mein aata hai, matlab \u201cya phir\u201d, aur <b>ob \u2026 oder</b> tab jab dono soorat mein baat ek hi rahe.'
    },
    {
      title: 'Kontrast (zwar...aber / einerseits...andererseits)',
      body: [ 'zwar...aber, einerseits...andererseits, auf der einen Seite...auf der anderen Seite, nicht...sondern — each with its own stylistic nuance.' ],
      hinglish: 'Contrast ke liye chaar jodiyan hain, par kaam alag hai. <b>zwar \u2026 aber</b> mein tum pehle ek baat maan lete ho aur phir usse aage badhte ho. <b>einerseits \u2026 andererseits</b> do pehlu barabar rakhta hai. <b>nicht \u2026 sondern</b> pehli baat ko kaat kar sahi baat batata hai \u2014 aur yahi ek hai jisme <i>sondern</i> aata hai, kyunki uske pehle negation hai.'
    },
    {
      title: 'Vergleich (je...desto / genauso...wie)',
      body: [ '<b>je \u2026 desto</b> aur <b>je \u2026 umso</b> ka matlab ek hi hai \u2014 jitna zyada ek, utna zyada doosra. Dono chalte hain, bas <b>desto</b> zyada common hai. <b>genauso \u2026 wie</b> barabari batata hai, aur <b>mehr \u2026 als</b> farak. Yaad rakho ki barabari mein <b>wie</b> aata hai aur farak mein <b>als</b>.' ],
      hinglish: '<b>je \u2026 desto</b> aur <b>je \u2026 umso</b> ka matlab ek hi hai \u2014 jitna zyada ek, utna zyada doosra. Dono chalte hain, bas <b>desto</b> zyada common hai. <b>genauso \u2026 wie</b> barabari batata hai, aur <b>mehr \u2026 als</b> farak. Yaad rakho ki barabari mein <b>wie</b> aata hai aur farak mein <b>als</b>.'
    },
    {
      title: 'Wortstellung und Kongruenz',
      body: [
        'Most paired connectors leave the word order alone \u2014 but three points decide whether the sentence is actually right, and the chapter\u2019s own examples depend on all three.'
      ],
      table: {
        head: ['Point', 'Rule', 'Example'],
        rows: [
          ['<b>je \u2026 desto</b>', 'je-clause is a SUBORDINATE clause \u2192 verb last. Then desto + comparative + verb + subject.', '<span class="de">Je l\u00e4nger man <b>wartet</b>, desto teurer <b>wird</b> es.</span>'],
          ['<b>zwar \u2026 aber</b>', 'zwar takes position 1 \u2192 verb second. aber then starts a normal main clause.', '<span class="de">Zwar <b>ist</b> es teuer, aber es lohnt sich.</span>'],
          ['<b>weder \u2026 noch</b>', 'already negative \u2014 never add nicht or kein', '<span class="de">Er hat weder Zeit noch Geld.</span>'],
          ['<b>sowohl \u2026 als auch</b>', 'joins two subjects \u2192 PLURAL verb', '<span class="de">Sowohl Anna als auch Rohan <b>kommen</b>.</span>'],
          ['<b>nicht nur \u2026 sondern auch</b>', 'verb agrees with the SECOND element', '<span class="de">Nicht nur die Kollegen, sondern auch der Chef <b>war</b> da.</span>']
        ]
      },
      note: 'The two halves must join the same kind of element \u2014 two nouns, two verbs, two clauses. <i>Sie spricht sowohl Deutsch als auch sie schreibt</i> is wrong because a noun is paired with a clause.',
      hinglish: 'Zyada-tar paired connectors word order nahi badalte \u2014 par teen baatein sentence ko sahi ya galat bana deti hain. Sabse pehle <b>je \u2026 desto</b>: <i>je</i> wala hissa subordinate clause hai, isliye uska verb end mein jaata hai, aur phir <b>desto</b> + comparative + verb + subject aata hai. Yahi sabse zyada galat hota hai. Doosra, <b>zwar</b> position 1 leta hai, isliye uske turant baad verb aata hai. Teesra, <b>weder \u2026 noch</b> khud hi negative hai \u2014 uske saath <i>nicht</i> ya <i>kein</i> nahi lagta. Aur verb agreement dekho: <b>sowohl \u2026 als auch</b> ke saath plural verb aata hai, par <b>nicht nur \u2026 sondern auch</b> mein verb <b>doosre</b> element se match karta hai. Ek aakhri baat \u2014 dono taraf ek hi tarah ka element aana chahiye, dono noun ya dono clause.'
    },
    {
      title: 'Ursache und Folge (so...dass / derart...dass)',
      body: [ 'so...dass, derart...dass, so sehr...dass, in einem solchen Maß...dass — expressing degree and consequence.' ],
      hinglish: 'Yeh jodiyan batati hain ki koi cheez itni zyada thi ki uska ek nateeja nikla. <b>so \u2026 dass</b> sabse aam hai, aur <b>derart \u2026 dass</b> ya <b>in einem solchen Ma\u00df \u2026 dass</b> zyada formal. Dhyaan do ki <b>dass</b> wale hisse ka verb end mein jaata hai.'
    },
    {
      title: 'Einschränkung und Ausnahme (weder...noch / nicht etwa...sondern)',
      body: [ 'weder...noch, nicht etwa...sondern, kaum...als, erst...dann — stylistic differences in restriction and exception.' ],
      hinglish: 'Yeh jodiyan baat ko seemit karti hain. <b>nicht etwa \u2026 sondern</b> ek galat andaaze ko hataa kar sahi baat rakhta hai, aur <b>erst \u2026 dann</b> order batata hai \u2014 pehle yeh, uske baad woh.'
    },
    {
      title: 'Master-Tabelle',
      body: [ 'A quick-reference table of function to expression.' ],
      table: {
        head: ['Function', 'Expressions'],
        rows: [
          ['Addition', 'sowohl ... als auch, nicht nur ... sondern auch'],
          ['Choice', 'entweder ... oder'],
          ['Negation', 'weder ... noch'],
          ['Contrast', 'zwar ... aber, einerseits ... andererseits'],
          ['Comparison', 'je ... desto, je ... umso'],
          ['Equality', 'genauso ... wie, ebenso ... wie'],
          ['Degree', 'so ... dass, derart ... dass']
        ]
      },
      hinglish: 'Function ke hisaab se table \u2014 pehle socho ki tumhe kya karna hai (jodna, chunna, contrast, comparison, degree), phir usi row se jodi uthao. Ek hi jodi baar-baar mat use karo.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Most of these are broken pairs \u2014 the wrong second half, or none at all. The last one also breaks the word order, which is where <b>je \u2026 desto</b> catches nearly everyone.' ],
      mistakes: [
        { wrong: 'Sie spricht sowohl Deutsch und Englisch.', right: 'Sie spricht sowohl Deutsch als auch Englisch.', why: '<b>sowohl</b> is always completed by <b>als auch</b> \u2014 never by und.' },
        { wrong: 'Wir fahren entweder heute und morgen.', right: 'Wir fahren entweder heute oder morgen.', why: '<b>entweder</b> offers a choice, so its partner is <b>oder</b>. With und there would be no choice left.' },
        { wrong: 'Er hat weder Zeit oder Geld.', right: 'Er hat weder Zeit noch Geld.', why: '<b>weder</b> is completed by <b>noch</b>. Note that the pair already carries the negation \u2014 no extra <i>nicht</i> or <i>kein</i>.' },
        { wrong: 'Zwar ist das Projekt teuer, sondern es lohnt sich.', right: 'Zwar ist das Projekt teuer, aber es lohnt sich.', why: '<b>zwar</b> concedes a point, so it pairs with <b>aber</b>. <i>sondern</i> only follows a negation, to correct it.' },
        { wrong: 'Er ist nicht nur Arzt, auch Forscher.', right: 'Er ist nicht nur Arzt, sondern auch Forscher.', why: 'The fixed pair is <b>nicht nur \u2026 sondern auch</b>. Dropping <i>sondern</i> leaves the sentence hanging.' },
        { wrong: 'Je mehr man übt, man wird besser.', right: 'Je mehr man übt, desto besser wird man.', why: 'Both halves need work: <b>je</b> sends its verb to the END, and the second half starts with <b>desto</b> + comparative, then the verb.' }
      ],
      hinglish: 'Inme se zyada-tar galtiyan tooti hui jodi ki hain \u2014 doosra hissa galat, ya hai hi nahi. Aakhri wali mein word order bhi galat hai, aur <b>je \u2026 desto</b> mein yahi sabse zyada log galat karte hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to connect two equal ideas? Addition — sowohl...als auch. Need a choice? entweder...oder. Need contrast? zwar...aber. Need proportional comparison? je...desto. Need consequence? so...dass.' ],
      note: 'Memory trick: think of paired connectors as bridges. The first word opens the bridge; the second word completes it. A bridge is complete only when both sides are connected — sowohl → als auch, entweder → oder, weder → noch, zwar → aber, je → desto.',
      hinglish: 'Do barabar baatein jodni hain? <b>sowohl \u2026 als auch</b>. Chunna hai? <b>entweder \u2026 oder</b>. Dono mana karne hain? <b>weder \u2026 noch</b>. Contrast? <b>zwar \u2026 aber</b>. Ek badhe to doosra badhe? <b>je \u2026 desto</b>. Aur nateeja batana hai? <b>so \u2026 dass</b>. Jodi shuru kar di hai to use poora karna mat bhoolo.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Buchbesprechung: Ein vielschichtiger Roman',
    titleEn: 'Reading A — Book review: a multi-layered novel',
    tokens: [
      { w: 'Sowohl', role: 'r-addition', en: 'both (correlative addition, opens the bridge)', hi: 'दोनों (सहसंबंधी जोड़)', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Sprache', role: 'plain', en: 'language', hi: 'भाषा', type: 'Noun · fem.' },
      { w: 'als', role: 'r-addition', en: 'as (part of "als auch")', hi: '', type: 'Konjunktion' },
      { w: 'auch', role: 'r-addition', en: 'also (Satzende, closes the bridge)', hi: 'भी (Satzende)', type: 'Adverb (Satzende)', why: '"Sowohl...als auch" gives equal weight to two qualities of the novel (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Aufbau', role: 'plain', en: 'structure (Satzende)', hi: 'संरचना (Satzende)', type: 'Noun · masc.' },
      { w: 'überzeugen', role: 'plain', en: 'convince', hi: 'प्रभावित करते हैं', type: 'Verb (Präsens)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'diesem', role: 'plain', en: 'this (masc. dat.)', hi: 'इस', type: 'Determiner · Dat.' },
      { w: 'Debütroman', role: 'plain', en: 'debut novel (Satzende)', hi: 'पहले उपन्यास (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Zwar', role: 'r-contrast', en: 'admittedly (correlative contrast, opens the bridge)', hi: 'सच है कि', type: 'Adverb' },
      { w: 'wirkt', role: 'plain', en: 'seems', hi: 'लगता है', type: 'Verb · wirken (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Handlung', role: 'plain', en: 'plot', hi: 'कहानी', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'at', hi: '', type: 'Preposition · Dat.' },
      { w: 'Beginn', role: 'plain', en: 'the beginning (Satzende)', hi: 'शुरुआत में (Satzende)', type: 'Noun · masc.' },
      { w: 'etwas', role: 'plain', en: 'somewhat', hi: 'कुछ', type: 'Adverb' },
      { w: 'zäh', role: 'plain', en: 'sluggish (Satzende)', hi: 'सुस्त (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-contrast', en: 'but (Satzende, closes the bridge)', hi: 'लेकिन (Satzende)', type: 'Konjunktion (Satzende)', why: '"Zwar...aber" concedes a weakness before pivoting to a stronger claim (this chapter).' },
      { w: 'spätestens', role: 'plain', en: 'at the latest', hi: 'देर से देर', type: 'Adverb' },
      { w: 'ab', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Mitte', role: 'plain', en: 'middle (Satzende)', hi: 'बीच (Satzende)', type: 'Noun · fem.' },
      { w: 'entfaltet', role: 'plain', en: 'unfolds', hi: 'खुल जाती है', type: 'Verb · entfalten' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'Sog', role: 'plain', en: 'pull (Satzende)', hi: 'खिंचाव (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dem', role: 'plain', en: 'which (masc. dat.)', hi: 'जिसका', type: 'Relativpronomen · Dat.' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'sich', role: 'plain', en: 'oneself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'entziehen', role: 'plain', en: 'escape (Satzende)', hi: 'बच सकता (Satzende)', type: 'Verb · Infinitiv' },
      { w: 'kann', role: 'plain', en: 'can (Satzende)', hi: '(Satzende)', type: 'Verb · können (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Both the language and the structure convince in this debut novel. Admittedly, the plot seems somewhat sluggish at the beginning, but by the middle at the latest, a pull unfolds that one can hardly escape.',
    comprehension: [
      { q: 'Welche Funktion hat "sowohl...als auch"?', options: ['Addition (gleichwertige Verbindung zweier Qualitäten)', 'Kontrast', 'Alternative'], answer: 0 },
      { q: 'Welche Funktion hat "zwar...aber"?', options: ['Einräumung einer Schwäche, dann stärkere Aussage', 'Vergleich', 'Ursache'], answer: 0 },
      { q: 'Was wäre der Satz ohne "aber"?', options: ['Unvollständig — die Brücke bliebe offen', 'Trotzdem korrekt', 'Bedeutungsgleich'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Meinungskommentar',
    titleEn: 'Reading B — Opinion editorial',
    tokens: [
      { w: 'Einerseits', role: 'r-contrast', en: 'on the one hand (correlative contrast, opens the bridge)', hi: 'ek taraf (correlative contrast, bridge kholta hai)', type: 'Adverb' },
      { w: 'bietet', role: 'plain', en: 'offers', hi: 'deta hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform', hi: 'sudhar', type: 'Noun · fem.' },
      { w: 'Vorteile', role: 'plain', en: 'advantages (Satzende)', hi: 'labh (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'andererseits', role: 'r-contrast', en: 'on the other hand (Satzende, closes the bridge)', hi: 'doosri taraf (Satzende, bridge band karta hai)', type: 'Adverb (Satzende)', why: '"Einerseits...andererseits" balances two contrasting perspectives fairly, common in editorials.' },
      { w: 'bringt', role: 'plain', en: 'brings', hi: 'laati hai', type: 'Verb (Präsens)' },
      { w: 'sie', role: 'plain', en: 'it', hi: 'yeh', type: 'Pronomen · Nom.' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'naye', type: 'Adjective · Akk.' },
      { w: 'Herausforderungen', role: 'plain', en: 'challenges (Satzende)', hi: 'chunautiyaan (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'On the one hand, the reform offers advantages; on the other hand, it brings new challenges.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_005_L001', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Kandidatin überzeugt mich sowohl fachlich als auch menschlich.', en: 'Timo, the candidate convinces me both professionally and personally.' },
      { id: 'C1_005_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da bin ich anderer Meinung — weder ihre Erfahrung noch ihre Sprachkenntnisse reichen ganz aus.', en: 'I disagree there — neither her experience nor her language skills are quite sufficient.' },
      { id: 'C1_005_L003', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht nicht perfekt, aber sie bringt einerseits frische Ideen, andererseits enorme Motivation mit.', en: 'Maybe not perfect, but on the one hand she brings fresh ideas, on the other hand enormous motivation.' },
      { id: 'C1_005_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das stimmt, darüber sollten wir noch einmal in Ruhe nachdenken.', en: 'That\'s true, we should think about that calmly once more.' }
    ],
    transcript: 'Timo, die Kandidatin überzeugt mich sowohl fachlich als auch menschlich. Da bin ich anderer Meinung — weder ihre Erfahrung noch ihre Sprachkenntnisse reichen ganz aus. Vielleicht nicht perfekt, aber sie bringt einerseits frische Ideen, andererseits enorme Motivation mit. Das stimmt, darüber sollten wir noch einmal in Ruhe nachdenken.',
    translation: 'Timo, the candidate convinces me both professionally and personally. I disagree there — neither her experience nor her language skills are quite sufficient. Maybe not perfect, but on the one hand she brings fresh ideas, on the other hand enormous motivation. That\'s true, we should think about that calmly once more.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Kandidatin' },
      { w: 'überzeugt' },
      { w: 'mich' },
      { w: 'sowohl' },
      { w: 'fachlich' },
      { w: 'als' },
      { w: 'auch' },
      { w: 'menschlich' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'bin' },
      { w: 'ich' },
      { w: 'anderer' },
      { w: 'Meinung' },
      { w: '—', plain: true },
      { w: 'weder' },
      { w: 'ihre' },
      { w: 'Erfahrung' },
      { w: 'noch' },
      { w: 'ihre' },
      { w: 'Sprachkenntnisse' },
      { w: 'reichen' },
      { w: 'ganz' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: 'nicht' },
      { w: 'perfekt' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sie' },
      { w: 'bringt' },
      { w: 'einerseits' },
      { w: 'frische' },
      { w: 'Ideen' },
      { w: ',', plain: true },
      { w: 'andererseits' },
      { w: 'enorme' },
      { w: 'Motivation' },
      { w: 'mit' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'stimmt' },
      { w: ',', plain: true },
      { w: 'darüber' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'in' },
      { w: 'Ruhe' },
      { w: 'nachdenken' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hält Silke von der Kandidatin?', qEn: 'What does Silke think of the candidate?', options: ['nur fachlich gut', 'sowohl fachlich als auch menschlich überzeugend', 'völlig ungeeignet', 'zu jung'], optionsEn: ['only professionally good', 'convincing both professionally and personally', 'completely unsuitable', 'too young'], answer: 1,
        explain: '"… überzeugt mich sowohl fachlich als auch menschlich."' },
      { q: 'Was ist Timos Bedenken?', qEn: 'What is Timo\'s concern?', options: ['Sie ist zu teuer.', 'Weder ihre Erfahrung noch ihre Sprachkenntnisse reichen ganz aus.', 'Sie kommt zu spät.', 'Sie hat kein Interesse.'], optionsEn: ['It is too expensive.', 'Neither her experience nor her language skills are quite sufficient.', 'She is late.', 'She isn\'t interested.'], answer: 1,
        explain: '"… weder ihre Erfahrung noch ihre Sprachkenntnisse reichen ganz aus."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo findet die Kandidatin fachlich und menschlich überzeugend. Stimm zu.", taskEn: "Timo finds the candidate convincing professionally and personally. Agree.", de: "Sie überzeugt sowohl fachlich als auch menschlich.", en: "She convinces both professionally and personally." },
    { task: "Du bist anderer Meinung über die Bewerberin. Sag es klar.", taskEn: "You disagree about the applicant. Say it clearly.", de: "Weder ihre Erfahrung noch ihre Sprachkenntnisse reichen für die Stelle.", en: "Neither her experience nor her language skills are enough for the post." },
    { task: "Stell dem Gremium zwei Wege zur Auswahl.", taskEn: "Offer the committee two options.", de: "Entweder erweitern wir die Stichprobe oder wir verlängern die Laufzeit.", en: "Either we expand the sample or we extend the duration." },
    { task: "Nenne eine Einschränkung deiner Methode.", taskEn: "Name a limitation of your method.", de: "Die Methode ist zwar aufwendig, aber sie liefert belastbare Werte.", en: "The method is laborious, but it yields robust values." },
    { task: "Eine Kollegin fragt nach dem Zusammenhang von Aufwand und Genauigkeit.", taskEn: "A colleague asks about the link between effort and accuracy.", de: "Je größer die Stichprobe, desto belastbarer das Ergebnis.", en: "The larger the sample, the more robust the result." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2 text with simple connectors and replace them with elegant zweiteilige Satzverbindungen (sowohl...als auch, zwar...aber, je...desto).\n\nTASK 2 — Argumentative essay (350 words): Write an essay demonstrating balanced sentence structures, paired connectors, and proportional comparisons.',
    starters: ['Sowohl die Theorie als auch die Praxis bestätigen dieses Modell.', 'Zwar gibt es Einschränkungen, aber die Ergebnisse überzeugen.'],
    placeholder: 'Sowohl die Ergebnisse als auch die Methodik überzeugen. Zwar war die Stichprobe klein, aber die Trends waren eindeutig...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which pair correctly completes "weder"?',
      options: ['weder ... noch', 'weder ... oder', 'weder ... aber'],
      answer: 0,
      explain: '"Weder" must always be completed with "noch", never "oder" or "aber".'
    },
    gap: {
      sentence: ['Sowohl die Methodik als ', ' die Ergebnisse überzeugen.'],
      gaps: [ { answer: 'auch', accepts: ['auch'] } ],
      explain: '"Sowohl...als auch" is a fixed correlative bridge — "als" always requires "auch" to close it.'
    },
    match: {
      q: 'Match each opening word to its required closing partner.',
      pairs: [
        { noun: 'sowohl', art: 'als auch' },
        { noun: 'entweder', art: 'oder' },
        { noun: 'weder', art: 'noch' },
        { noun: 'zwar', art: 'aber' }
      ]
    },
    builder: {
      target: 'Build: "Either we continue the research, or we change the approach." (complete correlative pair)',
      bank: ['Entweder', 'setzen', 'wir', 'die', 'Forschung', 'fort', ',', 'oder', 'wir', 'verändern', 'den', 'Ansatz', '.'],
      answer: ['Entweder', 'setzen', 'wir', 'die', 'Forschung', 'fort', ',', 'oder', 'wir', 'verändern', 'den', 'Ansatz', '.'],
      roles: { 'Entweder': 'r-alternative', 'oder': 'r-alternative' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Sowohl die Theorie und die Praxis bestätigen das Modell.',
      right: 'Sowohl die Theorie als auch die Praxis bestätigen das Modell.',
      explain: '"Sowohl" must always be completed with "als auch", not "und" — an incomplete bridge is ungrammatical.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the required second half of "sowohl"?', options: ['als auch', 'und', 'oder'], answer: 0,
      explain: '"Sowohl" must always be completed with "als auch" to form a complete correlative bridge.' },
    { q: 'What does "entweder...oder" express?', options: ['A choice between exactly two options', 'Negation of both options', 'A proportional comparison'], answer: 0,
      explain: '"Entweder...oder" presents exactly two mutually exclusive options.' },
    { q: 'What is the required second half of "weder"?', options: ['noch', 'oder', 'aber'], answer: 0,
      explain: '"Weder" must always be completed with "noch", never "oder".' },
    { q: 'What does "je...desto" require in both clauses?', options: ['A comparative adjective/adverb in each clause', 'A negation in each clause', 'A question word in each clause'], answer: 0,
      explain: '"Je + Komparativ, desto + Komparativ" requires a comparative form on both sides of the bridge.' },
    { q: 'What is the memory trick for paired connectors?', options: ['They are bridges — never use only one half', 'They can always be replaced with "und"', 'Only the first half matters grammatically'], answer: 0,
      explain: 'A bridge is complete only when both sides are connected — the first word opens it, the second completes it.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-addition', html: 'Addition pairs (sowohl...als auch, nicht nur...sondern auch) give equal or emphasized weight to two ideas — always complete both halves.' },
    { c: 'r-contrast', html: 'Contrast pairs (zwar...aber, einerseits...andererseits) concede a point before contrasting or balancing it fairly.' },
    { c: 'r-comparison', html: 'Comparison pairs (je...desto, je...umso) express proportional relationships — both clauses need a comparative form.' }
  ],
  revisionTips: [
    'Write five sentences, one for each category: addition, alternative, negation, contrast, and comparison — using a different paired connector each time.',
    'Find a paired connector in a German text and check whether both halves are used correctly.',
    'Practise "je + Komparativ, desto + Komparativ" sentences until the word order feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
