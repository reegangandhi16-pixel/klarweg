/* KLARWEG CHAPTER DATA — C2 · Chapter 27
   "Kollokationen & Idiomatik" — native-like lexical competence: fixed
   verb-noun collocations and idiomatic phraseology across academic,
   scientific, legal, political, business, media, and literary registers.
   NOT a chapter of memorizing hundreds of idioms — the focus is on natural
   word PARTNERSHIPS (a noun's one or two natural verbs) that make German
   sound fluent rather than merely grammatical. Vocabulary curated from the
   uploaded Chapter 27 collocation/idiom list, each paired with its fixed
   verb partner, register, and two authentic C2 examples. Follows the
   Chapter 26 template exactly. Dialogue: Bettina and Timo only. */
const CHAPTER = {
  id: 'c2-27-kollokationen-und-idiomatik',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 27,
  title: 'Kollokationen & Idiomatik',
  titleEn: 'Collocations and idiomatic usage',
  description: 'A word rarely dances alone. Every important noun has a verb it naturally prefers — Entscheidungen trifft man, Verantwortung übernimmt man. Choose the wrong partner, and native speakers notice immediately.',
  xp: 1875, time: 140, difficulty: 'Mastery',
  nextChapter: { number: 28, title: 'Präpositionen der Schriftsprache', titleEn: 'Prepositions of written German' , href: 'chapter-c2-28-praepositionen-der-schriftsprache.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Words are <em>dance partners</em> — some pairings are natural, some are wrong.',
    intro: 'Celebrating a successful campaign, Bettina says it made headlines and Timo claims they\'re on the pulse of the times — replacing grammatically correct but unnatural phrasing with the collocations native speakers actually reach for.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'Recognize which verb naturally "dances with" which noun, instead of translating word by word'],
    scene: 'Redaktion einer Universitätspublikation',
    femaleSpeakers: ['Bettina'],
    dialogue: [
      { speaker: 'Bettina', tokens: [
        { w: 'Unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Kampagne', role: 'r-subject', en: 'campaign', hi: 'अभियान', pron: 'kam-PAN-yuh', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'made', hi: 'बनाई', pron: 'hat', type: 'Verb · haben' },
        { w: 'wirklich', role: 'r-akkusativ', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'Schlagzeilen', role: 'r-akkusativ', en: 'headlines', hi: 'सुर्खियाँ', pron: 'SHLAHK-tsy-len', type: 'Noun · plural' },
        { w: 'gemacht', role: 'r-verb', en: 'made', hi: 'बनाई', pron: 'ge-MAKHT', type: 'Verb · machen (Satzende)', why: 'Schlagzeilen machen = to make headlines, idiomatic collocation (this chapter).', ex: 'Die Kampagne hat Schlagzeilen gemacht.', exEn: 'The campaign made headlines.' },
        { w: '.', plain: true }
      ], en: 'Our campaign really made headlines.', hi: 'Hamaare abhiyaan ne sach mein surkhiyaan banaayi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'wirklich', role: 'r-akkusativ', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Nerv', role: 'r-akkusativ', en: 'nerve', hi: 'नस', pron: 'nairf', type: 'Noun · masc.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Zeit', role: 'r-dativ', en: 'time (gen.)', hi: 'समय की', pron: 'tsyte', type: 'Noun · fem. genitive' },
        { w: 'getroffen', role: 'r-verb', en: 'hit', hi: 'छुआ', pron: 'ge-TRO-fen', type: 'Partizip II · Satzende', why: 'den Nerv der Zeit treffen = to hit the pulse of the times, idiomatic collocation (this chapter, gate).', ex: 'Die Kampagne hat den Nerv der Zeit getroffen.', exEn: 'The campaign hit the pulse of the times.' },
        { w: '.', plain: true }
      ], en: 'It has really hit the pulse of the times.', hi: 'Isne sach mein samay ki nas ko chua hai.' },
      { speaker: 'Bettina', tokens: [
        { w: 'Unser', role: 'r-subject', en: 'our (neut.)', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive' },
        { w: 'Team', role: 'r-subject', en: 'team', hi: 'टीम', pron: 'teem', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'अपना', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Namen', role: 'r-akkusativ', en: 'name', hi: 'नाम', pron: 'NAH-men', type: 'Noun · masc.' },
        { w: 'gemacht', role: 'r-verb', en: 'made', hi: 'बनाया है', pron: 'ge-MAKHT', type: 'Verb · machen (Satzende)', why: 'sich einen Namen machen = to make a name for oneself, idiomatic collocation (this chapter, gate).', ex: 'Unser Team hat sich einen Namen gemacht.', exEn: 'Our team has made a name for itself.' },
        { w: '.', plain: true }
      ], en: 'Our team has made a name for itself.', hi: 'Hamaari team ne apna naam banaaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'am', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'am', type: 'Preposition + place' },
        { w: 'Puls', role: 'r-dativ', en: 'pulse (dat.)', hi: 'धड़कन पर', pron: 'pools', type: 'Noun · masc. dat.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Zeit', role: 'r-dativ', en: 'time (gen.)', hi: 'समय की', pron: 'tsyte', type: 'Noun · fem. genitive' },
        { w: '.', plain: true }
      ], en: 'We are now on the pulse of the times.', hi: 'Hum ab samay ki dhadkan par hain.' },
      { speaker: 'Bettina', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'gutem', role: 'r-dativ', en: 'good (dat.)', hi: 'अच्छे', pron: 'GOO-tem', type: 'Adjective · dative' },
        { w: 'Beispiel', role: 'r-dativ', en: 'example (dat.)', hi: 'उदाहरण के साथ', pron: 'by-SHPEEL', type: 'Noun · neut. dat.' },
        { w: 'vorangehen', role: 'r-verb', en: 'lead', hi: 'आगे बढ़ना', pron: 'fo-RAN-gay-en', type: 'Verb · infinitive (Satzende)', why: 'mit gutem Beispiel vorangehen = to lead by good example, idiomatic collocation (this chapter, gate).', ex: 'Wir sollten mit gutem Beispiel vorangehen.', exEn: 'We should lead by good example.' },
        { w: '.', plain: true }
      ], en: 'We should nevertheless lead by good example.', hi: 'Phir bhi humein achhe udaaharan ke saath aage badhna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Lass', role: 'r-verb', en: 'let', hi: 'दो', pron: 'las', type: 'Verb · lassen (Imperativ du)' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमें', pron: 'uns', type: 'Pronoun · acc.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: 'feiern', role: 'r-verb', en: 'celebrate', hi: 'मनाना', pron: 'FY-ern', type: 'Verb · infinitive (Satzende)' },
        { w: '!', plain: true }
      ], en: 'Agreed. Let us celebrate the success!', hi: 'Sahmat. Chalo safalta manaate hain!' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Words are <span class="de r-tanzpartner-metapher">dance partners</span> — every important noun has a verb it naturally prefers, and choosing the wrong one is instantly noticeable to native speakers.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is KOLLOKATIONEN & IDIOMATIK — native-like lexical competence through fixed verb-noun collocations and idiomatic phraseology, NOT memorizing hundreds of isolated idioms. The focus is natural word PARTNERSHIPS: a noun (or adjective) has one or two verbs it naturally pairs with, and dictionary knowledge of individual words is not enough — native speakers think in chunks, not isolated words. Core examples: eine Entscheidung treffen (not machen), Kritik üben (not machen), Verantwortung übernehmen, zur Verfügung stehen, in Betracht ziehen, Maßnahmen ergreifen, Zweifel äußern, Einfluss ausüben, einen Beitrag leisten, eine Rolle spielen. Covered: free combinations vs. strong collocations vs. fixed collocations vs. idiomatic expressions (a spectrum of increasing fixedness); register-specific collocations across academic (eine Forschungslücke schließen, den Stand der Forschung darstellen), scientific (auf Evidenz basieren, eine Erkenntnis gewinnen), legal (Stellung beziehen, rechtskräftig werden), political/journalistic (Schlagzeilen machen, für Gesprächsstoff sorgen, eine Debatte anstoßen), business (in die Krise geraten, den Markt erobern), and literary/idiomatic register (den Nerv der Zeit treffen, am Puls der Zeit sein). The most important things to catch: literal translation from English (calquing "make a decision" as "eine Entscheidung machen" instead of "treffen"); mixing two collocations together (a Frankenstein blend); choosing the wrong verb for a fixed noun partner; unnatural adjective-noun combinations; incorrect register (using a folksy idiom in a legal document, or vice versa); overusing idioms until the text sounds forced rather than fluent. Answer ONLY questions about this chapter\'s collocations and idiomatic phraseology; if asked about something else, gently redirect to Kollokationen & Idiomatik. Keep answers short, concrete, example-driven. Mix in Hindi/Hinglish naturally, like a bilingual tutor would.',
  quizRecommendation: { high: 'Outstanding — you always find the right dance partner. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Lexical Chunk Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: a word rarely dances alone, and every important word has a partner it naturally prefers.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Kommission', role: 'plain' }, { w: 'trifft', role: 'r-tanzpartner-metapher' }, { w: 'eine', role: 'plain' }, { w: 'Entscheidung', role: 'r-tanzpartner-metapher' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: words are dance partners, and every important noun has a verb it naturally prefers.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Bettina and Timo replace unnatural literal translations with authentic German collocations for a university publication.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic verb-noun collocations and idiomatic expressions across academia, science, politics, business, law, media, and literature.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master free combinations vs. fixed collocations, idiomatic expressions, and register-based phraseology.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a newspaper editorial for collocations, idiomatic expressions, and lexical chunks.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify collocations and natural phraseology in a radio interview with a university professor.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice expressing opinions naturally and choosing appropriate collocations at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace unnatural expressions with authentic collocations, edit an article, and write a 600-word essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill collocation matching, natural-combination choice, and idiomatic meaning.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1875 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter collocations and idiomatic expressions with register, translations, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Collocation matching, natural-combination choice, and idiomatic meaning drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '24 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Lexical Chunk Model, and Decision Flow.', pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'eine Entscheidung treffen, Kritik üben, Verantwortung übernehmen', text: 'Use the correct fixed verb partner instead of a literal English translation' },
    { de: 'in Betracht ziehen, Maßnahmen ergreifen, Zweifel äußern', text: 'Recognize and produce authentic academic and professional collocations' },
    { de: 'eine Forschungslücke schließen, auf Evidenz basieren', text: 'Use register-specific collocations in academic and scientific writing' },
    { de: 'Schlagzeilen machen, für Gesprächsstoff sorgen', text: 'Use authentic journalistic and idiomatic phraseology' },
    { de: 'Jedes Wort hat einen Tanzpartner.', text: 'Understand the chapter\'s core "dance partners" metaphor for lexical fluency' }
  ],
  vocab: [
    { de: 'eine Entscheidung treffen', pos: 'collocation (verb + noun)', level: 'C2', register: 'general/professional', partner: 'treffen', en: 'to make a decision', hi: 'निर्णय लेना', synonyms: 'sich entscheiden', antonyms: null, ex: 'Der Vorstand trifft die Entscheidung erst nach eingehender Prüfung.', exEn: 'The board makes the decision only after thorough review.', exHi: 'Board thorough review ke baad hi decision leta hai.', ex2: 'Es ist Zeit, eine mutige Entscheidung zu treffen.', ex2En: 'It is time to make a bold decision.', ex2Hi: 'Ek bold decision lene ka waqt aa gaya hai.', why: 'The noun "Entscheidung" pairs fixedly with "treffen" — never with "machen", a common English-calque error.' },
    { de: 'Kritik üben', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic/journalism', partner: 'üben', en: 'to voice/exercise criticism', hi: 'आलोचना करना', synonyms: 'kritisieren', antonyms: 'loben', ex: 'Die Opposition übt scharfe Kritik an der Reform.', exEn: 'The opposition voices sharp criticism of the reform.', exHi: 'Opposition reform par sharp criticism voice karti hai.', ex2: 'Kritik zu üben ist einfacher, als eine Alternative vorzuschlagen.', ex2En: 'Voicing criticism is easier than proposing an alternative.', ex2Hi: 'Criticism voice karna, ek alternative propose karne se aasaan hai.', why: '"Kritik" pairs naturally with "üben" (or "an etwas üben"), not "machen" — a fixed academic/journalistic collocation.' },
    { de: 'Verantwortung übernehmen', pos: 'collocation (verb + noun)', level: 'C2', register: 'general/professional', partner: 'übernehmen', en: 'to take on responsibility', hi: 'ज़िम्मेदारी लेना', synonyms: null, antonyms: 'Verantwortung abschieben', ex: 'Der Geschäftsführer übernahm die volle Verantwortung für den Fehler.', exEn: 'The CEO took on full responsibility for the error.', exHi: 'CEO ne error ki poori responsibility li.', ex2: 'Verantwortung zu übernehmen erfordert Mut.', ex2En: 'Taking on responsibility requires courage.', ex2Hi: 'Responsibility lena himmat maangta hai.' },
    { de: 'zur Verfügung stehen', pos: 'collocation (fixed phrase)', level: 'C2', register: 'administrative/professional', partner: 'stehen', en: 'to be available', hi: 'उपलब्ध होना', synonyms: 'verfügbar sein', antonyms: null, ex: 'Die Unterlagen stehen ab sofort zur Verfügung.', exEn: 'The documents are available from now on.', exHi: 'Documents ab available hain.', ex2: 'Der Berater steht dem Team jederzeit zur Verfügung.', ex2En: 'The consultant is available to the team at any time.', ex2Hi: 'Consultant team ke liye hamesha available hai.' },
    { de: 'in Betracht ziehen', pos: 'collocation (fixed phrase)', level: 'C2', register: 'academic/administrative', partner: 'ziehen', en: 'to take into consideration', hi: 'विचार में लेना', synonyms: 'berücksichtigen', antonyms: 'außer Acht lassen', ex: 'Man sollte alle Optionen in Betracht ziehen.', exEn: 'One should take all options into consideration.', exHi: 'Sabhi options ko consideration mein lena chahiye.', ex2: 'Die Kommission zog eine Fristverlängerung in Betracht.', ex2En: 'The commission considered an extension of the deadline.', ex2Hi: 'Commission ne deadline ki extension par consider kiya.' },
    { de: 'Maßnahmen ergreifen', pos: 'collocation (verb + noun)', level: 'C2', register: 'administrative/political', partner: 'ergreifen', en: 'to take measures', hi: 'उपाय करना', synonyms: null, antonyms: null, ex: 'Die Regierung ergreift Maßnahmen gegen die Inflation.', exEn: 'The government takes measures against inflation.', exHi: 'Government inflation ke khilaaf measures leti hai.', ex2: 'Es müssen dringend präventive Maßnahmen ergriffen werden.', ex2En: 'Preventive measures must urgently be taken.', ex2Hi: 'Preventive measures turant liye jaane chahiye.', why: '"Maßnahmen" pairs fixedly with "ergreifen" (or "treffen"), never "machen" — a hallmark administrative/political collocation.' },
    { de: 'Zweifel äußern', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic/journalism', partner: 'äußern', en: 'to voice doubt', hi: 'संदेह व्यक्त करना', synonyms: null, antonyms: null, ex: 'Mehrere Experten äußerten Zweifel an der Methodik.', exEn: 'Several experts voiced doubts about the methodology.', exHi: 'Kai experts ne methodology par doubts voice kiye.', ex2: 'Sie äußerte offen ihre Zweifel am Erfolg des Projekts.', ex2En: 'She openly voiced her doubts about the project\'s success.', ex2Hi: 'Usne khule taur par project ki success par apne doubts voice kiye.' },
    { de: 'Einfluss ausüben', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic/political', partner: 'ausüben', en: 'to exert influence', hi: 'प्रभाव डालना', synonyms: null, antonyms: null, ex: 'Soziale Medien üben erheblichen Einfluss auf die öffentliche Meinung aus.', exEn: 'Social media exert considerable influence on public opinion.', exHi: 'Social media public opinion par kaafi influence exert karte hain.', ex2: 'Der Konzern übt großen Einfluss auf die Gesetzgebung aus.', ex2En: 'The corporation exerts great influence on legislation.', ex2Hi: 'Corporation legislation par bada influence exert karta hai.' },
    { de: 'einen Beitrag leisten', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic/professional', partner: 'leisten', en: 'to make a contribution', hi: 'योगदान देना', synonyms: null, antonyms: null, ex: 'Die Studie leistet einen wichtigen Beitrag zur Forschung.', exEn: 'The study makes an important contribution to research.', exHi: 'Study research mein ek important contribution deti hai.', ex2: 'Jeder Einzelne kann einen Beitrag zum Klimaschutz leisten.', ex2En: 'Every individual can make a contribution to climate protection.', ex2Hi: 'Har individual climate protection mein contribution de sakta hai.' },
    { de: 'eine Rolle spielen', pos: 'collocation (verb + noun)', level: 'C2', register: 'general/academic', partner: 'spielen', en: 'to play a role', hi: 'भूमिका निभाना', synonyms: null, antonyms: null, ex: 'Kultur spielt eine zentrale Rolle in dieser Debatte.', exEn: 'Culture plays a central role in this debate.', exHi: 'Culture is debate mein central role play karti hai.', ex2: 'Zufall scheint hier keine Rolle zu spielen.', ex2En: 'Chance does not seem to play a role here.', ex2Hi: 'Chance yahan koi role play karti nahi lagti.' },
    { de: 'eine Forschungslücke schließen', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic', partner: 'schließen', en: 'to close a research gap', hi: 'शोध-अंतर भरना', synonyms: null, antonyms: null, ex: 'Diese Dissertation schließt eine wichtige Forschungslücke.', exEn: 'This dissertation closes an important research gap.', exHi: 'Yeh dissertation ek important research gap close karti hai.', ex2: 'Weitere Studien sind nötig, um die Forschungslücke vollständig zu schließen.', ex2En: 'Further studies are needed to fully close the research gap.', ex2Hi: 'Research gap ko poori tarah close karne ke liye aur studies chahiye.' },
    { de: 'den Stand der Forschung darstellen', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic', partner: 'darstellen', en: 'to present the state of research', hi: 'शोध की स्थिति प्रस्तुत करना', synonyms: null, antonyms: null, ex: 'Das erste Kapitel stellt den aktuellen Stand der Forschung dar.', exEn: 'The first chapter presents the current state of research.', exHi: 'Pehla chapter current state of research present karta hai.', ex2: 'Bevor man weiterforscht, sollte man den Stand der Forschung sorgfältig darstellen.', ex2En: 'Before continuing research, one should carefully present the state of research.', ex2Hi: 'Aage research karne se pehle, state of research ko saavdhaani se present karna chahiye.' },
    { de: 'auf Evidenz basieren', pos: 'collocation (verb + noun)', level: 'C2', register: 'scientific', partner: 'basieren', en: 'to be based on evidence', hi: 'साक्ष्य पर आधारित होना', synonyms: 'auf Evidenz beruhen', antonyms: null, ex: 'Die Empfehlung basiert auf solider wissenschaftlicher Evidenz.', exEn: 'The recommendation is based on solid scientific evidence.', exHi: 'Recommendation solid scientific evidence par based hai.', ex2: 'Politische Entscheidungen sollten stärker auf Evidenz basieren.', ex2En: 'Political decisions should be based more strongly on evidence.', ex2Hi: 'Political decisions ko zyaada evidence par based hona chahiye.' },
    { de: 'eine Erkenntnis gewinnen', pos: 'collocation (verb + noun)', level: 'C2', register: 'academic/scientific', partner: 'gewinnen', en: 'to gain an insight', hi: 'अंतर्दृष्टि प्राप्त करना', synonyms: null, antonyms: null, ex: 'Aus dem Experiment gewann das Team eine überraschende Erkenntnis.', exEn: 'From the experiment, the team gained a surprising insight.', exHi: 'Experiment se team ne ek surprising insight gain kiya.', ex2: 'Neue Erkenntnisse zu gewinnen ist das Ziel jeder Forschung.', ex2En: 'Gaining new insights is the goal of all research.', ex2Hi: 'Naye insights gain karna har research ka goal hai.' },
    { de: 'Stellung beziehen', pos: 'collocation (verb + noun)', level: 'C2', register: 'political/journalism', partner: 'beziehen', en: 'to take a position/stance', hi: 'रुख़ अपनाना', synonyms: null, antonyms: null, ex: 'Die Ministerin bezog klar Stellung zur geplanten Reform.', exEn: 'The minister clearly took a position on the planned reform.', exHi: 'Minister ne planned reform par saaf stance liya.', ex2: 'In der Debatte weigerte er sich, Stellung zu beziehen.', ex2En: 'In the debate, he refused to take a stance.', ex2Hi: 'Debate mein, usne stance lene se inkaar kar diya.' },
    { de: 'rechtskräftig werden', pos: 'collocation (adjective + verb)', level: 'C2', register: 'legal', partner: 'werden', en: 'to become legally binding/final', hi: 'क़ानूनी रूप से प्रभावी होना', synonyms: null, antonyms: null, ex: 'Das Urteil wird erst nach Ablauf der Frist rechtskräftig.', exEn: 'The verdict only becomes legally binding after the deadline expires.', exHi: 'Verdict deadline khatam hone ke baad hi legally binding banta hai.', ex2: 'Ein rechtskräftiges Urteil kann nicht mehr angefochten werden.', ex2En: 'A legally final verdict can no longer be contested.', ex2Hi: 'Ek legally final verdict ko ab challenge nahi kiya ja sakta.' },
    { de: 'zur Debatte stehen', pos: 'collocation (fixed phrase)', level: 'C2', register: 'political/journalism', partner: 'stehen', en: 'to be up for debate', hi: 'बहस के लिए खुला होना', synonyms: null, antonyms: null, ex: 'Die Reform des Wahlrechts steht derzeit zur Debatte.', exEn: 'The reform of electoral law is currently up for debate.', exHi: 'Electoral law ka reform abhi debate ke liye khula hai.', ex2: 'Mehrere Vorschläge stehen im Parlament zur Debatte.', ex2En: 'Several proposals are up for debate in parliament.', ex2Hi: 'Kai proposals parliament mein debate ke liye khule hain.' },
    { de: 'Schlagzeilen machen', pos: 'collocation (verb + noun)', level: 'C2', register: 'journalism', partner: 'machen', en: 'to make headlines', hi: 'सुर्खियाँ बटोरना', synonyms: null, antonyms: null, ex: 'Der Skandal machte tagelang Schlagzeilen.', exEn: 'The scandal made headlines for days.', exHi: 'Scandal ne kai dinon tak headlines banayi.', ex2: 'Die Entdeckung machte weltweit Schlagzeilen.', ex2En: 'The discovery made headlines worldwide.', ex2Hi: 'Discovery ne duniya bhar mein headlines banayi.' },
    { de: 'für Gesprächsstoff sorgen', pos: 'collocation (verb + noun)', level: 'C2', register: 'journalism/media', partner: 'sorgen', en: 'to give people something to talk about', hi: 'चर्चा का विषय बनना', synonyms: null, antonyms: null, ex: 'Die Rede der Präsidentin sorgte tagelang für Gesprächsstoff.', exEn: 'The president\'s speech gave people something to talk about for days.', exHi: 'President ke speech ne kai dinon tak charcha ka vishay banaya.', ex2: 'Der neue Roman sorgt in der Literaturszene für Gesprächsstoff.', ex2En: 'The new novel is a hot topic in the literary scene.', ex2Hi: 'Naya novel literary scene mein charcha ka vishay bana hua hai.' },
    { de: 'eine Debatte anstoßen', pos: 'collocation (verb + noun)', level: 'C2', register: 'political/journalism', partner: 'anstoßen', en: 'to trigger a debate', hi: 'बहस छेड़ना', synonyms: null, antonyms: null, ex: 'Der Artikel stieß eine landesweite Debatte über Datenschutz an.', exEn: 'The article triggered a nationwide debate about data protection.', exHi: 'Article ne data protection par ek nationwide debate chhedi.', ex2: 'Ihre Rede sollte eine kulturelle Debatte anstoßen.', ex2En: 'Her speech was meant to trigger a cultural debate.', ex2Hi: 'Uski speech ek cultural debate chhedne ke liye thi.' },
    { de: 'den Markt erobern', pos: 'collocation (verb + noun)', level: 'C2', register: 'business/economic', partner: 'erobern', en: 'to conquer the market', hi: 'बाज़ार पर कब्ज़ा करना', synonyms: null, antonyms: null, ex: 'Das Start-up eroberte innerhalb weniger Jahre den Markt.', exEn: 'The start-up conquered the market within a few years.', exHi: 'Start-up ne kuch saalon mein market conquer kar liya.', ex2: 'Neue Wettbewerber erobern zunehmend den asiatischen Markt.', ex2En: 'New competitors are increasingly conquering the Asian market.', ex2Hi: 'Naye competitors Asian market ko increasingly conquer kar rahe hain.' },
    { de: 'in die Krise geraten', pos: 'collocation (fixed phrase)', level: 'C2', register: 'business/economic', partner: 'geraten', en: 'to fall into crisis', hi: 'संकट में पड़ना', synonyms: null, antonyms: null, ex: 'Das Unternehmen geriet nach dem Skandal in eine schwere Krise.', exEn: 'The company fell into a severe crisis after the scandal.', exHi: 'Company scandal ke baad ek severe crisis mein pad gayi.', ex2: 'Ganze Branchen können durch neue Technologien in die Krise geraten.', ex2En: 'Entire industries can fall into crisis because of new technologies.', ex2Hi: 'Poori industries naye technologies ki wajah se crisis mein pad sakti hain.' },
    { de: 'schwarze Zahlen schreiben', pos: 'idiomatic collocation', level: 'C2', register: 'business/economic', partner: 'schreiben', en: 'to be profitable (lit. "write black numbers")', hi: 'मुनाफ़े में होना', synonyms: null, antonyms: 'rote Zahlen schreiben', ex: 'Nach der Umstrukturierung schreibt das Unternehmen wieder schwarze Zahlen.', exEn: 'After the restructuring, the company is profitable again.', exHi: 'Restructuring ke baad, company phir se profitable hai.', ex2: 'Nur wenige Start-ups schreiben bereits im ersten Jahr schwarze Zahlen.', ex2En: 'Only a few start-ups are already profitable in their first year.', ex2Hi: 'Bahut kam start-ups pehle hi saal mein profitable hote hain.', why: 'A pure idiom: "schwarze Zahlen" (black numbers) means profit, "rote Zahlen" (red numbers) means loss — not literally about color.' },
    { de: 'auf dem neuesten Stand sein', pos: 'idiomatic collocation', level: 'C2', register: 'general/professional', partner: 'sein', en: 'to be up to date', hi: 'नवीनतम जानकारी से अवगत होना', synonyms: null, antonyms: null, ex: 'Als Wissenschaftlerin muss sie stets auf dem neuesten Stand sein.', exEn: 'As a scientist, she must always be up to date.', exHi: 'Ek scientist ki tarah, use hamesha up to date rehna hota hai.', ex2: 'Die Software ist nicht mehr auf dem neuesten Stand.', ex2En: 'The software is no longer up to date.', ex2Hi: 'Software ab up to date nahi hai.' },
    { de: 'den Kern der Sache treffen', pos: 'idiomatic collocation', level: 'C2', register: 'academic/general', partner: 'treffen', en: 'to hit the heart of the matter', hi: 'मुद्दे की तह तक पहुँचना', synonyms: 'den Nagel auf den Kopf treffen', antonyms: null, ex: 'Mit dieser Bemerkung trifft er den Kern der Sache.', exEn: 'With this remark, he hits the heart of the matter.', exHi: 'Is remark se, woh matter ki asliyat tak pahunchta hai.', ex2: 'Die Analyse trifft den Kern der Sache präzise.', ex2En: 'The analysis precisely hits the heart of the matter.', ex2Hi: 'Analysis matter ki asliyat ko precisely pakadti hai.' },
    { de: 'auf den Punkt bringen', pos: 'idiomatic collocation', level: 'C2', register: 'general/academic', partner: 'bringen', en: 'to sum up concisely', hi: 'संक्षेप में कहना', synonyms: null, antonyms: null, ex: 'Sie brachte das komplexe Problem in einem Satz auf den Punkt.', exEn: 'She summed up the complex problem in one sentence.', exHi: 'Usne complex problem ko ek sentence mein sum up kiya.', ex2: 'Der Kommentator bringt die Lage treffend auf den Punkt.', ex2En: 'The commentator aptly sums up the situation.', ex2Hi: 'Commentator situation ko aptly sum up karta hai.' },
    { de: 'etwas in Frage stellen', pos: 'collocation (fixed phrase)', level: 'C2', register: 'academic/critical', partner: 'stellen', en: 'to call something into question', hi: 'सवाल उठाना', synonyms: null, antonyms: null, ex: 'Die neuen Daten stellen die bisherige Theorie in Frage.', exEn: 'The new data call the previous theory into question.', exHi: 'Naya data purani theory par sawaal uthaata hai.', ex2: 'Kritiker stellen die Wirksamkeit der Maßnahme in Frage.', ex2En: 'Critics call the effectiveness of the measure into question.', ex2Hi: 'Critics measure ki effectiveness par sawaal uthaate hain.' },
    { de: 'etwas kritisch hinterfragen', pos: 'collocation (adverb + verb)', level: 'C2', register: 'academic', partner: 'hinterfragen', en: 'to critically question something', hi: 'आलोचनात्मक ढंग से जांचना', synonyms: null, antonyms: null, ex: 'Wissenschaftler sollten ihre eigenen Annahmen kritisch hinterfragen.', exEn: 'Scientists should critically question their own assumptions.', exHi: 'Scientists ko apni assumptions ko critically question karna chahiye.', ex2: 'Der Essay hinterfragt kritisch etablierte Denkmuster.', ex2En: 'The essay critically questions established patterns of thought.', ex2Hi: 'Essay established patterns of thought ko critically question karta hai.' },
    { de: 'den Nerv der Zeit treffen', pos: 'idiomatic collocation', level: 'C2', register: 'literary/media', partner: 'treffen', en: 'to capture the spirit of the times', hi: 'समय की नब्ज़ पकड़ना', synonyms: 'am Puls der Zeit sein', antonyms: null, ex: 'Der Roman trifft den Nerv der Zeit wie kaum ein anderer.', exEn: 'The novel captures the spirit of the times like hardly any other.', exHi: 'Novel jaisa spirit of the times capture karta hai waisa shaayad hi koi karta hai.', ex2: 'Mit diesem Thema trifft der Film genau den Nerv der Zeit.', ex2En: 'With this topic, the film captures exactly the spirit of the times.', ex2Hi: 'Is topic ke saath, film exactly spirit of the times capture karti hai.' },
    { de: 'am Puls der Zeit sein', pos: 'idiomatic collocation', level: 'C2', register: 'general/media', partner: 'sein', en: 'to be in touch with current trends', hi: 'समय के साथ तालमेल में होना', synonyms: 'den Nerv der Zeit treffen', antonyms: null, ex: 'Die Zeitschrift versteht es, immer am Puls der Zeit zu sein.', exEn: 'The magazine knows how to always stay in touch with current trends.', exHi: 'Magazine ko pata hai ki hamesha current trends ke saath kaise rehna hai.', ex2: 'Als Journalistin muss sie am Puls der Zeit bleiben.', ex2En: 'As a journalist, she must stay in touch with current trends.', ex2Hi: 'Ek journalist ki tarah, use current trends ke saath rehna hota hai.' },
    { de: 'sich einen Namen machen', pos: 'idiomatic collocation', level: 'C2', register: 'general/professional', partner: 'machen', en: 'to make a name for oneself', hi: 'नाम कमाना', synonyms: null, antonyms: null, ex: 'Die Forscherin hat sich international einen Namen gemacht.', exEn: 'The researcher has made a name for herself internationally.', exHi: 'Researcher ne antarrashtriya star par apna naam banaya hai.', ex2: 'Er machte sich in der Branche schnell einen Namen.', ex2En: 'He quickly made a name for himself in the industry.', ex2Hi: 'Usne industry mein jaldi apna naam banaya.' },
    { de: 'mit gutem Beispiel vorangehen', pos: 'idiomatic collocation', level: 'C2', register: 'general/professional', partner: 'vorangehen', en: 'to lead by example', hi: 'मिसाल पेश करना', synonyms: null, antonyms: null, ex: 'Die Direktorin ging mit gutem Beispiel voran und arbeitete selbst am Wochenende mit.', exEn: 'The director led by example and worked herself on the weekend.', exHi: 'Director ne khud weekend par kaam karke misaal pesh ki.', ex2: 'Führungskräfte sollten stets mit gutem Beispiel vorangehen.', ex2En: 'Leaders should always lead by example.', ex2Hi: 'Leaders ko hamesha misaal pesh karni chahiye.' }
  ],
  grammar: [
    { title: 'Was sind Kollokationen? (What Are Collocations?)', body: [ 'Word → Natural Partner → Frequent Combination → Automatic Native Usage → Fluent German. A collocation is a habitual, expected pairing of two words — most often a verb and a noun — that native speakers reach for automatically, without thinking.' ], hinglish: 'Collocation woh jodi hai jo German mein natural lagti hai \u2014 grammar se nahi nikalti, sunne se aati hai. <span class="de">eine Entscheidung treffen</span> sahi hai par <i>eine Entscheidung machen</i> nahi, jabki grammar dono mein theek hai. Isliye noun akela yaad karne se kaam nahi chalta; uska verb saath yaad karna padta hai \u2014 aur uska Partizip II bhi.' },
    { title: 'Vom freien Wort zur Idiomatik (From Free Combination to Idiom)', body: [ 'A spectrum of increasing fixedness: free combination (ein Buch lesen — many verbs would work: kaufen, schreiben, mögen); strong collocation (eine Entscheidung treffen — "treffen" is strongly preferred, though not the only option); fixed collocation (Kritik üben — almost no substitute verb sounds natural); idiomatic expression (den Nerv der Zeit treffen — the meaning cannot be derived from the individual words at all).' ], hinglish: 'Jodiyan chaar level par hoti hain. <b>Free</b> \u2014 koi bhi verb chalega (<span class="de">ein Buch lesen, kaufen, schreiben</span>). <b>Strong</b> \u2014 ek verb kaafi behtar lagta hai (<span class="de">eine Entscheidung treffen</span>). <b>Fixed</b> \u2014 sirf ek hi verb chalta hai (<span class="de">Kritik \u00fcben</span>). Aur <b>idiom</b> \u2014 jahan matlab shabdon se nikalta hi nahi (<span class="de">den Nerv der Zeit treffen</span>). Jitna aage badho, utna kam choice bachta hai.' },
    { title: 'Warum Wörterbuchwissen nicht reicht (Why Dictionary Knowledge Isn\'t Enough)', body: [ 'Correct Collocation → Literal Translation → Native Preference. Knowing that "Entscheidung" means "decision" and "machen" means "make" does not tell you that German requires "eine Entscheidung treffen". Native fluency means knowing which verb a noun pairs with, not just what each word means in isolation.' ], hinglish: 'Dictionary se sirf matlab pata chalta hai, jodi nahi. <i>Entscheidung</i> matlab decision aur <i>machen</i> matlab make \u2014 par isse yeh pata nahi chalta ki German <b>treffen</b> maangta hai. Isliye vocabulary yaad karte waqt noun ke saath uska verb bhi likho, warna bolte waqt English se guess karna padega \u2014 aur wahi galat hota hai.' },
    { title: 'Register-Kollokationen (Register-Specific Collocations)', body: [ 'Academic: eine Forschungslücke schließen, den Stand der Forschung darstellen. Scientific: auf Evidenz basieren, eine Erkenntnis gewinnen. Legal: Stellung beziehen, rechtskräftig werden. Political/Journalistic: Schlagzeilen machen, für Gesprächsstoff sorgen, eine Debatte anstoßen. Business: den Markt erobern, in die Krise geraten, schwarze Zahlen schreiben. Literary/idiomatic: den Nerv der Zeit treffen, am Puls der Zeit sein.' ], hinglish: 'Har register ki apni jodiyan hain. Academic mein <span class="de">eine Forschungsl\u00fccke schlie\u00dfen</span>, legal mein <span class="de">Stellung beziehen</span> aur <span class="de">rechtskr\u00e4ftig werden</span>, news mein <span class="de">Schlagzeilen machen</span> aur <span class="de">eine Debatte ansto\u00dfen</span>, aur business mein <span class="de">schwarze Zahlen schreiben</span>. Dhyaan do ki <b>Schlagzeilen machen</b> mein <i>machen</i> sach mein sahi hai \u2014 to <i>machen</i> har jagah galat nahi hai, bas zyada-tar galat hota hai.' },
    {
      title: 'Die feste Verbindung \u2014 mit Partizip II und Kasus',
      body: [
        'The chapter explains what collocations are but never lists the ones it keeps using, and never gives their Partizip II \u2014 which is what the exercises need.',
        'Note that these verbs are irregular precisely where learners need them most: in the perfect.'
      ],
      table: {
        head: ['Fixed pair', 'Partizip II', 'Note'],
        rows: [
          ['eine Entscheidung <b>treffen</b>', '<span class="de">getroffen</span>', 'not <i>machen</i>'],
          ['Ma\u00dfnahmen <b>ergreifen</b>', '<span class="de">ergriffen</span>', 'not <i>nehmen</i>'],
          ['Kritik <b>\u00fcben</b> (an + Dativ)', '<span class="de">ge\u00fcbt</span>', 'adjective: <b>scharfe</b> Kritik'],
          ['Verantwortung <b>\u00fcbernehmen</b>', '<span class="de">\u00fcbernommen</span>', 'inseparable \u2014 no <i>ge-</i>'],
          ['Einfluss <b>aus\u00fcben</b> (auf + Akk.)', '<span class="de">ausge\u00fcbt</span>', 'separable \u2014 <i>ge</i> inside'],
          ['einen Beitrag <b>leisten</b> (zu + Dativ)', '<span class="de">geleistet</span>', 'not <i>beitragen</i>']
        ]
      },
      note: 'Some pairs also carry a fixed preposition and case: <b>Kritik \u00fcben an</b> + Dativ, <b>Einfluss aus\u00fcben auf</b> + Akkusativ, <b>einen Beitrag leisten zu</b> + Dativ. Learn noun, verb, preposition and case as one unit.',
      hinglish: 'Chapter batata hai ki collocation kya hoti hai, par jo jodiyan woh khud baar-baar use karta hai unki list kabhi nahi deta \u2014 aur na hi unka Partizip II, jo exercises mein chahiye hota hai. Aur yahi sabse zyada galat hota hai, kyunki in verbs ka Partizip II irregular hai: <b>treffen</b> se <b>getroffen</b>, <b>ergreifen</b> se <b>ergriffen</b>, <b>\u00fcbernehmen</b> se <b>\u00fcbernommen</b> (inseparable, isliye <i>ge-</i> nahi), aur <b>aus\u00fcben</b> se <b>ausge\u00fcbt</b> (separable, isliye <i>ge</i> andar). Ek baat aur \u2014 kai jodiyan apne saath preposition aur case bhi laati hain: <b>Kritik \u00fcben an</b> + Dativ, <b>Einfluss aus\u00fcben auf</b> + Akkusativ, <b>einen Beitrag leisten zu</b> + Dativ. Isliye noun, verb, preposition aur case \u2014 chaaron ko ek hi unit ki tarah yaad karo. Aur jab bhi <i>machen</i> ya <i>nehmen</i> likhne ka man kare, ruk kar socho: German ka apna verb kya hai?'
    },
    { title: 'Meister-Tabelle', body: [ 'Expression type mapped to its definition, register, and typical context.' ], table: { head: ['Expression Type', 'Definition', 'Typical Context'], rows: [ ['Free combination', 'Any verb/noun pairing works', 'Everyday, unrestricted'], ['Strong collocation', 'One verb strongly preferred', 'General, professional'], ['Fixed collocation', 'Essentially only one verb possible', 'Academic, legal, administrative'], ['Idiomatic expression', 'Meaning not derivable from individual words', 'Media, literary, spoken register'] ] }, hinglish: 'Chaar types ka table \u2014 par jodi chunne ke baad do cheezein check karo: Partizip II sahi hai, aur uske saath koi fix preposition aur case aata hai ya nahi.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these pick the wrong partner verb \u2014 almost always <i>machen</i> or <i>nehmen</i> where German has a fixed one. The last two are register and density: both use correct German in the wrong place.' ], mistakes: [
      { wrong: 'Die Kommission hat eine Entscheidung gemacht.', right: 'Die Kommission hat eine Entscheidung getroffen.', why: '<b>Entscheidung</b> pairs with <b>treffen</b>, and its Partizip II is <b>getroffen</b> \u2014 knowing the verb is only half the job.' },
      { wrong: 'Die Zeitung hat scharfe Kritik ge\u00fcbt und Ma\u00dfnahmen genommen.', right: 'Die Zeitung hat scharfe Kritik ge\u00fcbt und Ma\u00dfnahmen ergriffen.', why: 'The first collocation is right, the second is not: <b>Ma\u00dfnahmen</b> pairs with <b>ergreifen</b> \u2192 <b>ergriffen</b>, never with <i>nehmen</i>.' },
      { wrong: 'Er hat die Verantwortung genommen und Einfluss gemacht.', right: 'Er hat die Verantwortung \u00fcbernommen und Einfluss ausge\u00fcbt.', why: 'Two fixed pairs: <b>Verantwortung \u00fcbernehmen</b> \u2192 <b>\u00fcbernommen</b>, and <b>Einfluss aus\u00fcben</b> \u2192 <b>ausge\u00fcbt</b>. Neither takes <i>machen</i> or <i>nehmen</i>.' },
      { wrong: 'Die Studie hat starke Kritik ge\u00fcbt an der Methode.', right: 'Die Studie hat scharfe Kritik an der Methode ge\u00fcbt.', why: 'The adjective is fixed too \u2014 <b>scharfe</b> Kritik, not <i>starke</i> \u2014 and <b>Kritik \u00fcben an</b> takes the Dativ, with the participle closing the clause.' },
      { wrong: 'Das Gesetz trifft den Nagel auf den Kopf und wird rechtskr\u00e4ftig.', right: 'Das Gesetz ist pr\u00e4zise formuliert und wird rechtskr\u00e4ftig.', why: 'The idiom is correct German but belongs in a talk or article \u2014 in a legal sentence it clashes with <b>rechtskr\u00e4ftig</b>. Register, not grammar, is the error.' },
      { wrong: 'Die Firma hat schwarze Zahlen geschrieben und den Markt erobert und Schlagzeilen gemacht und f\u00fcr Gesprächsstoff gesorgt.', right: 'Die Firma hat schwarze Zahlen geschrieben und damit den Markt erobert.', why: 'Each collocation is correct on its own, but four in one sentence reads as a list of phrases rather than a statement. Use one or two.' }
    ], hinglish: 'Chaar galtiyan galat partner verb chunne ki hain \u2014 lagbhag hamesha <i>machen</i> ya <i>nehmen</i>, jahan German ka apna verb hai. Aur aakhri do mein German bilkul sahi hai, bas galat jagah par: ek register ki wajah se, ek isliye ki ek hi sentence mein chaar idioms thoons diye gaye.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to express an idea? Would a literal translation work? If not, is there a natural German collocation? If yes, use it — it will sound native.' ], note: 'Memory trick: imagine German vocabulary as dance partners. A word rarely dances alone. Every important word has partners it naturally prefers — Entscheidungen trifft man, Verantwortung übernimmt man, Maßnahmen ergreift man. If you choose the wrong partner, native speakers immediately notice. Learning vocabulary means learning who dances with whom. That is true C2 mastery of Kollokationen & Idiomatik.', hinglish: 'Kuch likhna hai? Pehle socho ki us noun ka apna verb kya hai \u2014 aur agar <i>machen</i> ya <i>nehmen</i> likhne ka man kare to ruk jao, kyunki wahan lagbhag hamesha koi aur verb hota hai. Aur likhne ke baad do cheezein check karo: Partizip II sahi bana hai, aur jodi ka preposition aur case sahi laga hai.' }
  ],
  reading: {
    title: 'Leitartikel einer nationalen Zeitung', titleEn: 'Reading A — Editorial from a national newspaper',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Regierung', role: 'plain', en: 'government', hi: 'सरकार', type: 'Noun · fem.' },
      { w: 'ergreift', role: 'r-tanzpartner-metapher', en: 'takes (the natural verb partner of "Maßnahmen", tree metaphor)', hi: '(dance partner, tanzpartner metaphor)', type: 'Verb (Präsens)' },
      { w: 'endlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'Maßnahmen,', role: 'r-tanzpartner-metapher', en: 'measures, (Satzende, the fixed noun partner of "ergreifen")', hi: '(Satzende, dance partner)', type: 'Noun · fem. pl. (Satzende)', why: '"Maßnahmen ergreifen" is a fixed collocation — the natural dance partner of "Maßnahmen" is "ergreifen" (or "treffen"), never "machen".' },
      { w: 'doch', role: 'plain', en: 'yet', hi: 'फिर भी', type: 'Konjunktion' },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'आलोचक', type: 'Noun · masc. pl.' },
      { w: 'stellen', role: 'plain', en: 'call (part of "in Frage stellen")', hi: '(construction ka hissa)', type: 'Verb (Präsens)' },
      { w: 'ihre', role: 'plain', en: 'their (fem. akk.)', hi: 'उनकी', type: 'Possessivartikel · Akk.' },
      { w: 'Wirksamkeit', role: 'plain', en: 'effectiveness', hi: 'प्रभावशीलता', type: 'Noun · fem. · Akk.' },
      { w: 'in', role: 'r-tanzpartner-metapher', en: 'into (part of the fixed phrase "in Frage stellen")', hi: '(fixed phrase)', type: 'Präposition · Akk.' },
      { w: 'Frage', role: 'r-tanzpartner-metapher', en: 'question (Satzende, fixed collocation "in Frage stellen")', hi: '(Satzende, fixed phrase)', type: 'Noun · fem. · Akk. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The government finally takes measures, yet critics call their effectiveness into question.',
    comprehension: [
      { q: 'Welches Verb ist der natürliche Partner von "Maßnahmen"?', options: ['ergreifen (oder treffen)', 'machen', 'nehmen'], answer: 0 },
      { q: 'Was für eine Kollokation ist "in Frage stellen"?', options: ['Eine feste Kollokation (fixed phrase)', 'Eine freie Kombination', 'Ein reines Idiom ohne erkennbare Bedeutung'], answer: 0 },
      { q: 'Warum klingt "Maßnahmen machen" für Muttersprachler falsch?', options: ['Weil "Maßnahmen" fest mit "ergreifen" oder "treffen" kollokiert, nicht mit "machen"', 'Weil es grammatisch unmöglich ist', 'Aus reinem Zufall ohne Muster'], answer: 0 }
    ]
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_027_L001', speaker: 'Bettina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, unsere Kampagne hat wirklich Schlagzeilen gemacht — ich bin überwältigt!', en: 'Timo, our campaign really made headlines — I\'m overwhelmed!' },
      { id: 'C2_027_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wir liegen absolut am Puls der Zeit, das haben die Reaktionen gezeigt.', en: 'And we\'re absolutely on the pulse of the times, the reactions have shown that.' },
      { id: 'C2_027_L003', speaker: 'Bettina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Diesen Erfolg sollten wir jetzt unbedingt ausbauen, bevor das Thema abkühlt.', en: 'We should definitely build on this success now, before the topic cools off.' },
      { id: 'C2_027_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, den Ball flach halten wäre jetzt der falsche Moment.', en: 'Exactly, playing it down would be the wrong move right now.' }
    ],
    transcript: 'Timo, unsere Kampagne hat wirklich Schlagzeilen gemacht — ich bin überwältigt! Und wir liegen absolut am Puls der Zeit, das haben die Reaktionen gezeigt. Diesen Erfolg sollten wir jetzt unbedingt ausbauen, bevor das Thema abkühlt. Genau, den Ball flach halten wäre jetzt der falsche Moment.',
    translation: 'Timo, our campaign really made headlines — I\'m overwhelmed! And we\'re absolutely on the pulse of the times, the reactions have shown that. We should definitely build on this success now, before the topic cools off. Exactly, playing it down would be the wrong move right now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'unsere' },
      { w: 'Kampagne' },
      { w: 'hat' },
      { w: 'wirklich' },
      { w: 'Schlagzeilen' },
      { w: 'gemacht' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'überwältigt' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'wir' },
      { w: 'liegen' },
      { w: 'absolut' },
      { w: 'am' },
      { w: 'Puls' },
      { w: 'der' },
      { w: 'Zeit' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'haben' },
      { w: 'die' },
      { w: 'Reaktionen' },
      { w: 'gezeigt' },
      { w: '.', plain: true },
      { w: 'Diesen' },
      { w: 'Erfolg' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'jetzt' },
      { w: 'unbedingt' },
      { w: 'ausbauen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'das' },
      { w: 'Thema' },
      { w: 'abkühlt' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'Ball' },
      { w: 'flach' },
      { w: 'halten' },
      { w: 'wäre' },
      { w: 'jetzt' },
      { w: 'der' },
      { w: 'falsche' },
      { w: 'Moment' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat die Kampagne erreicht?', qEn: 'What did the campaign achieve?', options: ['nichts', 'Schlagzeilen gemacht', 'wenig Aufmerksamkeit', 'Kritik'], optionsEn: ['nothing', 'made headlines', 'little attention', 'criticism'], answer: 1,
        explain: '"Unsere Kampagne hat wirklich Schlagzeilen gemacht."' },
      { q: 'Was wollen sie mit dem Erfolg machen?', qEn: 'What do they want to do with the success?', options: ['ihn verstecken', 'ihn ausbauen', 'ihn ignorieren', 'ihn vergessen'], optionsEn: ['hide him', 'expand it', 'ignore him', 'forget him'], answer: 1,
        explain: '"Diesen Erfolg sollten wir jetzt unbedingt ausbauen."' }
    ]
  },
  speaking: [
    { task: "Timo ist überwältigt von der Kampagne. Reagiere idiomatisch.", taskEn: "Timo is overwhelmed by the campaign. Respond idiomatically.", de: "Wir liegen absolut am Puls der Zeit, das haben die Reaktionen gezeigt.", en: "We're absolutely in tune with the times, the reactions have shown that." },
    { task: "Berichte im Protokoll, was das Gremium getan hat.", taskEn: "Report in the minutes what the committee did.", de: "Das Gremium hat eine Entscheidung getroffen und Kritik geübt.", en: "The committee made a decision and voiced criticism." },
    { task: "Stell im Kolloquium den Beitrag deiner Arbeit vor.", taskEn: "Present your work's contribution in the colloquium.", de: "Die Studie schließt eine Forschungslücke und basiert auf Evidenz.", en: "The study closes a research gap and is based on evidence." },
    { task: "Der Vorstand fragt, was jetzt zu tun ist.", taskEn: "The board asks what is to be done now.", de: "Wir müssen Maßnahmen ergreifen und Verantwortung übernehmen.", en: "We must take measures and assume responsibility." },
    { task: "Eine Kollegin schreibt „Zweifel geben“. Korrigiere die Kollokation.", taskEn: "A colleague writes 'give doubts'. Correct the collocation.", de: "Man äußert Zweifel; geben passt hier nicht.", en: "You 'express' doubts; 'give' doesn't fit here." }
  ],
  writing: {
    prompt: 'TASK 1 — Natural upgrade (150 words): Replace unnatural word combinations with authentic German collocations. Explain every change.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving lexical fluency and idiomatic accuracy. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 argumentative essay naturally integrating authentic collocations and idiomatic expressions across academic, journalistic, and professional registers.',
    starters: ['Die Kommission trifft eine Entscheidung...', 'Die Studie schließt eine Forschungslücke...', 'Der Artikel stößt eine Debatte an...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Kollokationen und idiomatische Ausdrücke...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which verb correctly collocates with "eine Entscheidung"?', options: ['treffen', 'machen', 'nehmen'], answer: 0, explain: '"eine Entscheidung treffen" is the fixed collocation — "machen" is a common English-calque error.' },
    gap: { sentence: ['Die Regierung ', ' dringend Maßnahmen gegen die Krise.'], gaps: [ { answer: 'ergreift', accepts: ['ergreift'] } ], explain: '"Maßnahmen ergreifen" is the fixed collocation — the noun\'s natural dance partner is "ergreifen" (or "treffen"), never "machen".' },
    match: { q: 'Match each noun to its fixed verb partner.', pairs: [ { noun: 'eine Entscheidung', art: 'treffen' }, { noun: 'Kritik', art: 'üben' }, { noun: 'Verantwortung', art: 'übernehmen' }, { noun: 'einen Beitrag', art: 'leisten' } ] },
    builder: { target: 'Build: "The commission makes a decision." (collocation)', bank: ['Die', 'Kommission', 'trifft', 'eine', 'Entscheidung', '.'], answer: ['Die', 'Kommission', 'trifft', 'eine', 'Entscheidung', '.'], roles: { 'trifft': 'r-tanzpartner-metapher', 'Entscheidung': 'r-tanzpartner-metapher' } },
    errorCorrection: { title: 'Error correction', wrong: 'Der Vorstand macht eine Entscheidung und macht Kritik an dem Vorschlag.', right: 'Der Vorstand trifft eine Entscheidung und übt Kritik an dem Vorschlag.', explain: 'Both nouns had the wrong verb partner: "Entscheidung" pairs with "treffen", and "Kritik" pairs with "üben" — not "machen" in either case.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for collocations in this chapter?', options: ['Words are dance partners — every important word has a verb it naturally prefers', 'Every noun can pair with any verb equally well', 'Collocations are the same as free combinations'], answer: 0, explain: 'Choosing the wrong "dance partner" verb is immediately noticeable to native speakers, even if the sentence is grammatically correct.' },
    { q: 'Which verb correctly collocates with "Kritik"?', options: ['üben', 'machen', 'nehmen'], answer: 0, explain: '"Kritik üben" (an etwas) is the fixed collocation; "Kritik machen" is a common literal-translation error.' },
    { q: 'What is a classic C2-level mistake with collocations?', options: ['Translating a noun-verb pairing literally from English', 'Using too many fixed collocations', 'Avoiding idiomatic expressions entirely'], answer: 0, explain: 'English and German pair nouns with different default verbs; word-for-word translation predictably fails.' },
    { q: 'What distinguishes an idiomatic expression from a strong collocation?', options: ['An idiom\'s meaning cannot be derived from its individual words at all (e.g. "schwarze Zahlen schreiben")', 'An idiom always uses more words than a collocation', 'There is no real difference between them'], answer: 0, explain: '"Schwarze Zahlen schreiben" means "to be profitable" — nothing in "black" or "numbers" or "write" reveals that literally.' },
    { q: 'Why is dictionary knowledge of individual words not enough for native-like fluency?', options: ['Because knowing what a noun and a verb mean separately does not reveal which verb the noun conventionally pairs with', 'Because dictionaries never include verbs', 'Because collocations do not exist in German'], answer: 0, explain: 'Native fluency depends on knowing fixed word partnerships, not just isolated word meanings.' }
  ],
  takeaways: [
    { c: 'r-tanzpartner-metapher', html: 'Words are dance partners — every important noun has a verb (or two) it naturally prefers, and choosing the wrong one is immediately noticeable.' },
    { c: 'r-tanzpartner-metapher', html: 'Collocations range from free combinations to strong collocations to fixed collocations to idiomatic expressions — increasing fixedness of meaning.' },
    { c: 'r-tanzpartner-metapher', html: 'Register shapes collocation choice: academic favors Forschungslücke schließen, business favors schwarze Zahlen schreiben, media favors Schlagzeilen machen.' },
    { c: 'r-tanzpartner-metapher', html: 'Native-like fluency depends more on knowing natural word combinations than on knowing individual words in isolation.' }
  ],
  revisionTips: [
    'Take five nouns you use often and write down their one or two natural verb partners, checking each against authentic text.',
    'Read one newspaper editorial and underline every fixed collocation and idiomatic expression you find.',
    'Rewrite one paragraph you wrote earlier, replacing any literally-translated phrase with an authentic German collocation.'
  ]
};
window.CHAPTER = CHAPTER;
