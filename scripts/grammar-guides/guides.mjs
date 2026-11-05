/* The free, indexable grammar guides (grammar/<slug>.html).
   One entry per guide; the page body lives next to this file in
   <slug>.html and is assembled by scripts/build-grammar-guides.mjs.
   `chapter` is the paid course chapter that teaches the same topic in
   depth; german-grammar.html links the guide from that chapter's row.
   The guides are written independently of the paid chapters and never
   reproduce their content. */
export const GUIDES = [
  {
    slug: 'der-die-das',
    level: 'A1',
    crumb: 'Der, die, das',
    title: 'Der, Die, Das: German Articles and Noun Gender Explained — Klarweg',
    description: 'When does German use der, die or das? The three genders, reliable noun-ending patterns, why Hindi gender does not carry over, common mistakes, and exercises with answers.',
    teaches: 'German definite and indefinite articles and grammatical gender (der, die, das)',
    chapter: 'chapter-a1-10-artikel.html',
    linkText: 'Der, die, das explained',
  },
  {
    slug: 'akkusativ',
    level: 'A1',
    crumb: 'Akkusativ',
    title: 'Akkusativ in German: The Accusative Case Explained — Klarweg',
    description: 'The German accusative made simple: when to use it, the only articles that change (der → den), pronouns, accusative prepositions, mistakes Hindi speakers make, and exercises.',
    teaches: 'The German accusative case (Akkusativ): articles, pronouns, verbs and prepositions',
    chapter: 'chapter-a1-12-akkusativ.html',
    linkText: 'Akkusativ explained',
  },
  {
    slug: 'dativ',
    level: 'A1',
    crumb: 'Dativ',
    title: 'Dativ in German: The Dative Case Explained — Klarweg',
    description: 'The German dative made simple: dem, der, dem and den + n, dative pronouns, verbs like helfen and gefallen, dative prepositions, Akkusativ vs Dativ, and exercises with answers.',
    teaches: 'The German dative case (Dativ): articles, pronouns, verbs and prepositions',
    chapter: 'chapter-a1-36-dativ.html',
    linkText: 'Dativ explained',
  },
  {
    slug: 'word-order',
    level: 'A1',
    crumb: 'Word order',
    title: 'German Word Order: Verb Position Explained, with Hindi Tips — Klarweg',
    description: 'German word order made simple: the verb in second position, the sentence bracket, questions, and verb-last clauses after weil and dass, with what Hindi gets right and wrong, and exercises.',
    teaches: 'German word order (Satzstellung): verb-second, sentence bracket, questions and subordinate clauses',
    chapter: 'chapter-a1-19-satzposition.html',
    linkText: 'German word order explained',
    footer: false,
  },
  {
    slug: 'prepositions',
    level: 'A1',
    crumb: 'Prepositions',
    title: 'German Prepositions: Akkusativ, Dativ & Two-Way Explained — Klarweg',
    description: 'German prepositions made clear: which always take the Akkusativ or Dativ, the nine two-way prepositions and the Wo?/Wohin? test, contractions, the Hindi से trap, and exercises with answers.',
    teaches: 'German prepositions with the Akkusativ and Dativ, and two-way prepositions (Wechselpräpositionen)',
    chapter: 'chapter-a1-38-wechselpraep.html',
    linkText: 'Prepositions explained',
    footer: false,
  },
];
