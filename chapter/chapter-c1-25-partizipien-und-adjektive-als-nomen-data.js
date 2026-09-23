/* KLARWEG CHAPTER DATA — C1 · Chapter 25
   "Partizipien & Adjektive als Nomen" — substantivized
   adjectives (der Alte, das Wesentliche), substantivized
   Partizip I (die Studierenden, active reference) and Partizip
   II (die Verletzten, passive reference), inclusive language.
   NOT basic adjective declension or participle formation.
   Dialogue: Frauke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-25-partizipien-und-adjektive-als-nomen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 25,
  title: 'Partizipien & Adjektive als Nomen',
  titleEn: 'Participles and adjectives as nouns',
  description: 'The noun disappears — but its meaning stays. Instead of "die Studenten", modern German often says "die Studierenden". The adjective or participle takes over the job of the noun.',
  xp: 690, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 26, title: 'Passiv & Passiversatzformen', titleEn: 'Passive and passive alternatives' , href: 'chapter-c1-26-passiv-und-passiversatzformen.html' },
  prevChapter: { number: 24, title: 'Nominalisierung im formellen Stil', titleEn: 'Nominalization in formal style', href: 'chapter-c1-24-nominalisierung-im-formellen-stil.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'The noun disappears — but its <em>meaning stays</em>.',
    intro: 'Preparing a university event, Frauke and Timo respond to a slightly injured participant — the injured person, the responsible person already caring for her — substantivized adjectives and participles standing in for the noun entirely.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See substantivized adjectives and Partizip I/II nouns used naturally for people and groups'],
    scene: 'Vorbereitung einer Universitätsveranstaltung',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studierende', role: 'r-subject', en: 'student (f)', hi: 'छात्रा', pron: 'SHTOO-dee-ren-duh', type: 'Noun · fem. (nominalisiertes Partizip)', why: 'die Studierende (this chapter, Partizip I as noun for gender-neutral "student").', ex: 'die Studierende' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'leicht', role: 'r-akkusativ', en: 'slightly', hi: 'थोड़ी', pron: 'LYKHT', type: 'Adjective' },
        { w: 'verletzt', role: 'r-akkusativ', en: 'injured', hi: 'घायल', pron: 'fer-LETST', type: 'Partizip II' },
        { w: '.', plain: true }
      ], en: 'The student is slightly injured.', hi: 'Chhatra thodi ghayal hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verletzte', role: 'r-subject', en: 'injured (f)', hi: 'घायल', pron: 'fer-LETS-tuh', type: 'Noun · fem. (nominalisiertes Partizip)', why: 'die Verletzte (this chapter, Partizip II as noun for "the injured person").', ex: 'die Verletzte' },
        { w: 'vom', role: 'r-preposition', en: 'from the', hi: 'से', pron: 'fom', type: 'Preposition + dative' },
        { w: 'Unfall', role: 'r-dativ', en: 'accident (dat.)', hi: 'दुर्घटना से', pron: 'UN-fal', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'Is she the injured person from the accident?', hi: 'Kya woh durghatna se ghayal huyi hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Verantwortliche', role: 'r-subject', en: 'responsible person', hi: 'ज़िम्मेदार व्यक्ति', pron: 'fer-ANT-vor-tli-khuh', type: 'Noun · masc. (nominalisiertes Adjektiv)', why: 'der Verantwortliche (this chapter, adjective as noun for "the responsible person").', ex: 'der Verantwortliche' },
        { w: 'kümmert', role: 'r-verb', en: 'takes care', hi: 'ध्यान रख रहा है', pron: 'KÜ-mert', type: 'Verb · sich kümmern' },
        { w: 'sich', role: 'r-akkusativ', en: 'himself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RITES', type: 'Adverb' },
        { w: 'um', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'um', type: 'Preposition' },
        { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उसके', pron: 'zee', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Yes. The responsible person is already taking care of her.', hi: 'Haan. Zimmedaar vyakti pehle se uska dhyaan rakh raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (pl.)', hi: 'कौनसे', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Teilnehmenden', role: 'r-akkusativ', en: 'participants', hi: 'प्रतिभागी', pron: 'TILE-nay-men-den', type: 'Noun · plural (nominalisiertes Partizip)', why: 'die Teilnehmenden (this chapter, gender-neutral plural for participants).', ex: 'die Teilnehmenden' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Which participants have seen that?', hi: 'Kaunse pratibhagiyon ne yeh dekha?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'wenige', role: 'r-subject', en: 'few', hi: 'कुछ', pron: 'VAY-ni-guh', type: 'Determiner' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Wesentliche', role: 'r-akkusativ', en: 'essential', hi: 'मुख्य बात', pron: 'VAY-zent-li-khuh', type: 'Noun · neut. (nominalisiertes Adjektiv)', why: 'das Wesentliche (this chapter, adjective as noun for "the essential thing").', ex: 'das Wesentliche' },
        { w: 'bemerkt', role: 'r-verb', en: 'noticed', hi: 'ध्यान दिया', pron: 'be-MAIRKT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Only few have noticed the essential thing.', hi: 'Kewal kuch logon ne mukhya baat dhyaan diya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करता हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Notarzt', role: 'r-akkusativ', en: 'emergency doctor', hi: 'आपातकालीन डॉक्टर', pron: 'NOHT-artst', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Good, then I will call the emergency doctor.', hi: 'Achha, toh main aapaatkaaliin doctor ko call karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'The noun disappears — but its meaning stays. Instead of "die Studenten", modern German says "die <span class="de r-partizip1-nomen">Studierenden</span>". The adjective or participle takes over the job of the noun.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is PARTIZIPIEN & ADJEKTIVE ALS NOMEN at C1 level — substantivized adjectives and participles used to refer to people, groups, and abstract concepts, NOT basic adjective declension or participle formation (already mastered). Covered: substantivized adjectives referring to people/groups (der Alte, die Junge, die Reichen, der Deutsche/die Deutsche with gender-marked forms, die Verantwortlichen, die Betroffenen); substantivized Partizip I for active reference (der Studierende, die Reisenden, die Teilnehmenden, die Mitarbeitenden, die Forschenden) — the modern inclusive academic/professional standard replacing "Student/in", "Teilnehmer/in" etc.; substantivized Partizip II for passive reference (der Verletzte, die Angeklagte, der Beschäftigte, die Befragten, die Betroffenen); abstract nominalization with neuter "das" (das Gute, das Böse, das Wesentliche, das Entscheidende, das Bekannte); the modern inclusive-language shift preferring "Studierende" over "Studenten" or "Studentinnen und Studenten". Do NOT expect or require basic adjective declension endings or participle formation mechanics — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: forgetting capitalization on substantivized forms; incorrect adjective-style declension endings on the substantivized word; missing articles; confusing active Partizip I reference (die Studierenden = those currently studying) with passive Partizip II reference (die Befragten = those who were asked); direct English translation errors (e.g. "the poor" translated incorrectly). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag missing capitalization on substantivized adjectives/participles; check declension endings match the article/case exactly as regular adjectives would; check Partizip I (active) vs Partizip II (passive) reference is used correctly for the intended meaning. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Register check:</b> one sentence on whether the learner used modern, inclusive substantivized forms appropriately for formal/academic register.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you use substantivized adjectives and participles naturally, like a native speaker. Ready for the next chapter.', mid: 'Good. Re-read the Transformation Model and Decision Flowchart once, then continue.', low: 'Worth another pass through the Grammar section — remember: the noun disappears, but its meaning stays in the adjective or participle.' },
  parserSentence: [ { w: 'die', role: 'r-partizip1-nomen' }, { w: 'Studierenden', role: 'r-partizip1-nomen' }, { w: 'haben', role: 'plain' }, { w: 'sich', role: 'plain' }, { w: 'angemeldet', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: the noun disappears in substantivized forms, but its meaning stays in the adjective or participle.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Frauke and Timo prepare a university event, naturally using substantivized adjectives and participles for people and groups.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key substantivized expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master substantivized adjectives, Partizip I (active) and Partizip II (passive) nouns, and abstract nominalization.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a university article and a newspaper report, identifying substantivized forms and inclusive language.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominalized adjectives and participles referring to groups in a university announcement and company meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Describe groups of people and report events using substantivized adjectives and participles naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace repeated nouns with substantivized forms, and write a 350-word formal article using inclusive academic style.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill adjective-to-noun, Partizip I-to-noun, and Partizip II-to-noun transformations, plus capitalization practice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 690 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Adjective/Partizip I/Partizip II-to-noun drills, capitalization practice, and a full formal article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Transformation Model, Usage Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wie viele Studierende haben sich angemeldet?', text: 'Use substantivized Partizip I for inclusive academic reference' },
    { de: 'Die Teilnehmenden kommen aus zehn verschiedenen Ländern.', text: 'Use substantivized Partizip I for active group reference' },
    { de: 'Die Beteiligten wissen Bescheid.', text: 'Use substantivized Partizip II for passive group reference' },
    { de: 'Wer für die Verletzten zuständig ist.', text: 'Use substantivized Partizip II to replace "die verletzten Personen"' },
    { de: 'Das Wichtigste ist, dass die Organisatorin erreichbar ist.', text: 'Use abstract substantivized adjective with neuter "das"' }
  ],
  vocab: [
    { de: 'der/die Studierende', art: 'der/die', gender: 'm/f', plural: 'Studierende', pos: 'noun (substantivized Partizip I)', level: 'C1', register: 'both', en: 'student (inclusive)', hi: 'छात्र/छात्रा', ex: 'Wie viele Studierende haben sich angemeldet?', exEn: 'How many students have registered?', exHi: 'Kitne chhaatron ne panjikaran karvaaya hai?', ex2: 'Die Studierenden dieser Universität kommen aus aller Welt.', ex2En: 'The students of this university come from all over the world.', ex2Hi: 'Iss university ke chhaatra poori duniya se aate hain.' },
    { de: 'der/die Teilnehmende', art: 'der/die', gender: 'm/f', plural: 'Teilnehmende', pos: 'noun (substantivized Partizip I)', level: 'C1', register: 'both', en: 'participant (inclusive)', hi: 'प्रतिभागी', ex: 'Die Teilnehmenden kommen aus zehn verschiedenen Ländern.', exEn: 'The participants come from ten different countries.', exHi: 'Prashikshaarthi das alag-alag deshon se aate hain.', ex2: 'Alle Teilnehmenden erhalten ein Zertifikat.', ex2En: 'All participants receive a certificate.', ex2Hi: 'Sabhi prashikshaarthiyon ko ek certificate milta hai.' },
    { de: 'der/die Verletzte', art: 'der/die', gender: 'm/f', plural: 'Verletzte', pos: 'noun (substantivized Partizip II)', level: 'C1', register: 'written', en: 'injured person', hi: 'घायल व्यक्ति', ex: 'Wer ist für die Verletzten zuständig?', exEn: 'Who is responsible for the injured?', exHi: 'Ghayal logon ke liye kaun zimmedaar hai?', ex2: 'Die Verletzten wurden sofort ins Krankenhaus gebracht.', ex2En: 'The injured were immediately taken to the hospital.', ex2Hi: 'Ghayalon ko turant hospital le jaaya gaya.' },
    { de: 'der/die Verantwortliche', art: 'der/die', gender: 'm/f', plural: 'Verantwortliche', pos: 'noun (substantivized adjective)', level: 'C1', register: 'written', en: 'responsible person', hi: 'ज़िम्मेदार व्यक्ति', ex: 'Sind alle Verantwortlichen informiert?', exEn: 'Are all the responsible people informed?', exHi: 'Kya sabhi zimmedaar log soochit hain?', ex2: 'Die Verantwortlichen müssen sofort handeln.', ex2En: 'Those responsible must act immediately.', ex2Hi: 'Zimmedaar logon ko turant kaarvaai karni chahiye.' },
    { de: 'das Wesentliche', pos: 'noun (abstract substantivized adjective)', level: 'C1', register: 'written', en: 'the essential thing, the essence', hi: 'मूल बात', ex: 'Das Wesentliche ist, dass die Organisatorin erreichbar ist.', exEn: 'The essential thing is that the organizer is reachable.', exHi: 'Mool baat yeh hai ki ayojak sampark mein rahe.', ex2: 'Er konzentrierte sich auf das Wesentliche.', ex2En: 'He focused on the essentials.', ex2Hi: 'Usne mool baaton par dhyaan diya.' }
  ],
  grammar: [
    { title: 'Warum Adjektive zu Nomen werden', body: [ 'Adjective → Quality → Reference → Nominalization → Person/Group/Concept. German frequently omits the noun and keeps only the adjective: der Alte, die Junge, das Gute, die Reichen.' ], hinglish: 'German mein aksar noun hata diya jaata hai aur sirf adjective bacha rehta hai \u2014 <span class="de">der alte Mann</span> se sirf <span class="de">der Alte</span>. Matlab wahi rehta hai, bas shabd kam ho jaate hain. Ek baat pakki kar lo: ab woh capital letter se likha jaayega, par ending adjective wali hi rahegi.' },
    { title: 'Adjektive als Nomen', body: [ 'der Deutsche / die Deutsche / das Neue / das Wesentliche / die Verantwortlichen / die Betroffenen — substantivized adjectives decline exactly like regular adjectives, taking their ending from the article type (weak/mixed/strong).' ], hinglish: 'Yeh sab noun ki tarah kaam karte hain par adjective ki tarah chalte hain. Dhyaan do ki gender se matlab badal jaata hai \u2014 <span class="de">der Deutsche</span> ek aadmi hai aur <span class="de">die Deutsche</span> ek aurat. Aur article badalne se ending bhi badal jaati hai, jo neeche wale block mein hai.' },
    { title: 'Partizip I als Nomen (Active Reference)', body: [ 'der Studierende / die Reisenden / die Teilnehmenden / die Mitarbeitenden / die Forschenden — modern formal German increasingly prefers these forms for active, ongoing reference (someone currently doing the action).' ], hinglish: 'Yeh Partizip I se bante hain (Infinitiv + <b>d</b>), aur batate hain ki koi kaam <b>kar raha hai</b> \u2014 <span class="de">der Studierende</span> matlab jo padh raha hai. Modern formal German mein yeh forms bahut badh gayi hain, khaas kar universities aur official documents mein.' },
    { title: 'Partizip II als Nomen (Passive Reference)', body: [ 'der Verletzte / die Angeklagte / der Beschäftigte / die Geladene / die Befragten / die Betroffenen — passive meaning, referring to someone something has happened to.' ], hinglish: 'Yeh Partizip II se bante hain aur passive matlab dete hain \u2014 matlab us insaan ki baat jiske <b>saath</b> kuch hua. <span class="de">der Verletzte</span> matlab jise chot lagi, <span class="de">die Befragten</span> matlab jinse poochha gaya. News aur official reports mein yeh forms bahut aati hain.' },
    { title: 'Abstrakte Nominalisierung', body: [ 'das Gute / das Böse / das Schöne / das Wesentliche / das Entscheidende / das Bekannte — neuter "das" + adjective creates abstract concept nouns, common in philosophical and formal writing.' ], hinglish: '<b>das</b> + adjective se abstract cheez banti hai \u2014 <span class="de">das Gute</span> matlab \u201cjo achha hai\u201d, <span class="de">das Entscheidende</span> matlab \u201cjo faisla karne wali baat hai\u201d. Yeh academic writing mein bahut kaam aata hai. Ek chhota rule saath mein: <b>etwas</b> ya <b>nichts</b> ke baad <b>-es</b> lagta hai \u2014 <span class="de">etwas Gutes</span>, <span class="de">nichts Neues</span>.' },
    { title: 'Inklusive Sprache (Inclusive Language)', body: [ 'Many institutions now prefer "Studierende" instead of "Studenten" or "Studentinnen und Studenten" — substantivized Partizip I forms are gender-neutral and increasingly standard in academic and official register.' ], hinglish: 'Aaj kal universities aur official texts <span class="de">Studenten</span> ki jagah <span class="de">Studierende</span> likhte hain, kyunki Partizip I wali form gender-neutral hai \u2014 usme aadmi aur aurat dono aa jaate hain. Isi tarah <span class="de">Mitarbeitende</span> aur <span class="de">Teilnehmende</span>. Goethe C1 ke texts mein yeh forms zaroor milengi.' },
    {
      title: 'Die Endung \u00e4ndert sich weiter',
      body: [
        'This is the point that decides whether the form is right: a substantivized adjective is capitalised like a noun, but it keeps declining like an adjective.',
        'So the ending changes with gender, case and \u2014 crucially \u2014 with the kind of article in front of it.'
      ],
      table: {
        head: ['Article', 'masc.', 'fem.', 'plural'],
        rows: [
          ['der/die (weak)', '<span class="de">der Deutsch<b>e</b></span>', '<span class="de">die Deutsch<b>e</b></span>', '<span class="de">die Deutsch<b>en</b></span>'],
          ['ein (mixed)', '<span class="de">ein Deutsch<b>er</b></span>', '<span class="de">eine Deutsch<b>e</b></span>', '\u2014'],
          ['no article (strong)', '<span class="de">Deutsch<b>er</b></span>', '<span class="de">Deutsch<b>e</b></span>', '<span class="de">Deutsch<b>e</b></span>'],
          ['after viele / einige', '\u2014', '\u2014', '<span class="de">viele Betroffen<b>e</b></span>'],
          ['Dativ', '<span class="de">dem Deutsch<b>en</b></span>', '<span class="de">der Deutsch<b>en</b></span>', '<span class="de">den Deutsch<b>en</b></span>']
        ]
      },
      note: 'Abstract forms with <b>das</b> follow the same pattern: <i>das Gute</i>, but <i>etwas Gut<b>es</b></i> and <i>nichts Neu<b>es</b></i> \u2014 after <b>etwas</b> and <b>nichts</b> the strong neuter ending <b>-es</b> applies.',
      hinglish: 'Yahi woh point hai jo tay karta hai ki form sahi hai ya nahi. Substantivized adjective <b>noun ki tarah capital</b> hota hai, par <b>adjective ki tarah decline</b> hota rehta hai. Matlab uski ending gender, case aur \u2014 sabse zyada \u2014 aage wale article ke hisaab se badalti hai. <span class="de">der Deutsche</span>, par <span class="de">ein Deutsch<b>er</b></span>, aur bina article ke <span class="de">Deutsch<b>er</b></span>. Dativ mein sab <b>-en</b> le lete hain: <span class="de">dem Deutschen</span>. Do cheezein alag se yaad rakho \u2014 <b>viele</b> ya <b>einige</b> ke baad plural mein <b>-e</b> aata hai (<span class="de">viele Betroffene</span>), aur <b>etwas</b> ya <b>nichts</b> ke baad <b>-es</b>: <span class="de">etwas Gutes</span>, <span class="de">nichts Neues</span>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to function.' ], table: { head: ['Structure', 'Function'], rows: [ ['Adjective', 'Description'], ['Substantivized Adjective', 'Person / Group / Concept'], ['Partizip I', 'Active Reference'], ['Substantivized Partizip I', 'Active Person/Group'], ['Partizip II', 'Passive Reference'], ['Substantivized Partizip II', 'Passive Person/Group'] ] }, hinglish: 'Structure aur function ka table \u2014 pehle tay karo ki insaan kaam kar raha hai (Partizip I) ya uske saath kuch hua (Partizip II), phir form chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'All six are about the same thing: these words are nouns in function but adjectives in form. Capitalise them, give them an article \u2014 and keep declining them.' ], mistakes: [
      { wrong: 'Die betroffenen wurden informiert.', right: 'Die Betroffenen wurden informiert.', why: 'Once the adjective takes over the noun\u2019s job it IS a noun \u2014 so it is capitalised.' },
      { wrong: 'Ein Verletzter wurde ins Krankenhaus gebracht, dem Verletzte geht es besser.', right: 'Ein Verletzter wurde ins Krankenhaus gebracht, dem Verletzten geht es besser.', why: 'The ending still changes with the case. After <i>dem</i> the weak ending is <b>-en</b>.' },
      { wrong: 'Wichtigste ist die Sicherheit.', right: 'Das Wichtigste ist die Sicherheit.', why: 'An abstract nominalization needs its article: <b>das</b> Wichtigste, <b>das</b> Entscheidende.' },
      { wrong: 'Viele Betroffene<b>n</b> haben sich gemeldet.', right: 'Viele Betroffene haben sich gemeldet.', why: 'After <i>viele</i> the strong plural ending is <b>-e</b>, not <b>-en</b> \u2014 <i>viele</i> is not a definite article.' },
      { wrong: 'Der Studierende Mann sitzt dort.', right: 'Der studierende Mann sitzt dort. / Der Studierende sitzt dort.', why: 'If a noun follows, the word is still an adjective \u2014 lower case. Only capitalise it when it REPLACES the noun.' },
      { wrong: 'Er ist Deutsche.', right: 'Er ist Deutscher. / Er ist ein Deutscher.', why: 'Without an article the strong ending applies: masculine <b>Deutscher</b>. <i>Deutsche</i> would be feminine.' }
    ], hinglish: 'Chhe ki chhe galtiyan ek hi baat se aati hain \u2014 yeh shabd kaam noun ka karte hain par form adjective wali rakhte hain. Isliye teen cheezein saath chahiye: capital letter, article, aur sahi ending.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to describe a person? Substantivized Adjective. Need active participants? Substantivized Partizip I. Need affected people? Substantivized Partizip II. Need an abstract concept? das + Adjective.' ], note: 'Memory trick: the noun disappears, but its meaning stays. The adjective or participle takes over the job of the noun, making the sentence shorter, more elegant, and more typical of authentic C1 German.', hinglish: 'Koi insaan? Substantivized adjective. Jo kaam kar raha hai? <b>Partizip I</b> (Studierende). Jiske saath kuch hua? <b>Partizip II</b> (Betroffene). Abstract baat? <b>das</b> + adjective. Aur likhne ke baad teen cheezein check karo \u2014 capital letter, article, aur article ke hisaab se ending.' }
  ],
  reading: {
    title: 'Uni-Magazin: Wie Forschende und Befragte zusammenarbeiten',
    titleEn: 'Reading A — University magazine: how researchers and respondents collaborate',
    tokens: [
      { w: 'Die', role: 'r-partizip1-nomen', en: 'the (plural nom., substantivized Partizip I opener)', hi: '', type: 'Article' },
      { w: 'Forschenden', role: 'r-partizip1-nomen', en: 'researchers (substantivized Partizip I — active reference)', hi: 'शोधकर्ता (substantivized Partizip I)', type: 'Noun · plural (Satzende)', why: '"Die Forschenden" is a substantivized Partizip I, used instead of "Forscher" for gender-neutral, active reference (this chapter).' },
      { w: 'dieser', role: 'plain', en: 'of this (fem. gen.)', hi: 'इस', type: 'Demonstrativpronomen · Gen.' },
      { w: 'Langzeitstudie', role: 'plain', en: 'long-term study (Satzende)', hi: 'दीर्घकालिक अध्ययन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'arbeiten', role: 'plain', en: 'work', hi: 'काम करते हैं', type: 'Verb (Präsens)' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'drei', role: 'plain', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'eng', role: 'plain', en: 'closely', hi: 'क़रीब से', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Präposition · Dat.' },
      { w: 'den', role: 'r-partizip2-nomen', en: 'the (plural dat., substantivized Partizip II opener)', hi: '', type: 'Article · Dat.' },
      { w: 'Befragten', role: 'r-partizip2-nomen', en: 'those surveyed (substantivized Partizip II — passive reference)', hi: 'सर्वेक्षण में शामिल लोग (substantivized Partizip II)', type: 'Noun · plural (Satzende)', why: '"Den Befragten" is a substantivized Partizip II, marking those who were surveyed — a passive reference (this chapter).' },
      { w: 'zusammen', role: 'plain', en: 'together (Satzende)', hi: 'मिलकर (Satzende)', type: 'Partikel · trennbar (Satzende)' },
      { w: '.', plain: true },
      { w: 'Regelmäßige', role: 'plain', en: 'regular', hi: 'नियमित', type: 'Adjective' },
      { w: 'Gespräche', role: 'plain', en: 'conversations (Satzende)', hi: 'बातचीत (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sollen', role: 'plain', en: 'are meant to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'sicherstellen', role: 'plain', en: 'ensure (Satzende)', hi: 'सुनिश्चित करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Teilnehmenden', role: 'r-partizip1-nomen', en: 'participants (substantivized Partizip I — active reference, Satzende)', hi: 'प्रतिभागी (substantivized Partizip I, Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'ernst', role: 'plain', en: 'seriously (Satzende)', hi: 'गंभीरता से (Satzende)', type: 'Adjective' },
      { w: 'genommen', role: 'plain', en: 'taken (Satzende)', hi: 'लिया जाता है (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'fühlen', role: 'plain', en: 'feel (Satzende)', hi: 'महसूस करते हैं (Satzende)', type: 'Verb · sich fühlen (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The researchers of this long-term study have been working closely with those surveyed for three years now. Regular conversations are meant to ensure that the participants feel taken seriously.',
    comprehension: [
      { q: 'Was für eine Form ist "die Forschenden"?', options: ['Substantiviertes Partizip I (aktiv)', 'Substantiviertes Partizip II (passiv)', 'Substantiviertes Adjektiv'], answer: 0 },
      { q: 'Was für eine Form ist "den Befragten"?', options: ['Substantiviertes Partizip II (passiv)', 'Substantiviertes Partizip I (aktiv)', 'Substantiviertes Adjektiv'], answer: 0 },
      { q: 'Warum bevorzugt der Uni-Text diese Formen?', options: ['Inklusive, moderne akademische Sprache', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsbericht', titleEn: 'Reading B — Newspaper report',
    tokens: [
      { w: 'Die', role: 'r-partizip2-nomen', en: 'the (plural nom., substantivized Partizip II opener)', hi: '(substantivized Partizip II opener)', type: 'Article' },
      { w: 'Verletzten', role: 'r-partizip2-nomen', en: 'the injured (substantivized Partizip II — passive reference)', hi: 'ghayal log (substantivized Partizip II)', type: 'Noun · plural (Satzende)' },
      { w: 'wurden', role: 'plain', en: 'were', hi: '', type: 'Verb · werden (Präteritum)' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'turant', type: 'Adverb' },
      { w: 'versorgt', role: 'plain', en: 'cared for (Satzende)', hi: 'dekhbhaal ki gayi (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-adjektiv-nomen', en: 'the (plural nom., substantivized adjective opener)', hi: '(substantivized adjective opener)', type: 'Article' },
      { w: 'Verantwortlichen', role: 'r-adjektiv-nomen', en: 'those responsible (substantivized adjective — reference to a group)', hi: 'zimmedaar log (substantivized adjective)', type: 'Noun · plural (Satzende)' },
      { w: 'äußerten', role: 'plain', en: 'expressed', hi: 'vyakt kiya', type: 'Verb (Präteritum)' },
      { w: 'sich', role: 'plain', en: 'themselves (reflexive)', hi: '(reflexive)', type: 'Reflexivpronomen · Akk.' },
      { w: 'noch', role: 'plain', en: 'not yet', hi: 'abhi tak nahi', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: '(part of "noch nicht", Satzende)', hi: '(Satzende)', type: 'Negation (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The injured were immediately cared for. Those responsible have not yet commented.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_025_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, schnell — die Verletzte dort drüben braucht Hilfe!', en: 'Timo, quick — the injured woman over there needs help!' },
      { id: 'C1_025_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich kümmere mich sofort um sie. Ist die Verantwortliche schon informiert?', en: 'I\'ll take care of her right away. Has the person in charge already been informed?' },
      { id: 'C1_025_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, die Zuständige ist bereits unterwegs und bringt den Erste-Hilfe-Kasten mit.', en: 'Yes, the responsible person is already on the way and bringing the first-aid kit.' },
      { id: 'C1_025_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, dann ist die Verletzte gleich in guten Händen.', en: 'Good, then the injured woman is soon in good hands.' }
    ],
    transcript: 'Timo, schnell — die Verletzte dort drüben braucht Hilfe! Ich kümmere mich sofort um sie. Ist die Verantwortliche schon informiert? Ja, die Zuständige ist bereits unterwegs und bringt den Erste-Hilfe-Kasten mit. Gut, dann ist die Verletzte gleich in guten Händen.',
    translation: 'Timo, quick — the injured woman over there needs help! I\'ll take care of her right away. Has the person in charge already been informed? Yes, the responsible person is already on the way and bringing the first-aid kit. Good, then the injured woman is soon in good hands.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'schnell' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'Verletzte' },
      { w: 'dort' },
      { w: 'drüben' },
      { w: 'braucht' },
      { w: 'Hilfe' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'kümmere' },
      { w: 'mich' },
      { w: 'sofort' },
      { w: 'um' },
      { w: 'sie' },
      { w: '.', plain: true },
      { w: 'Ist' },
      { w: 'die' },
      { w: 'Verantwortliche' },
      { w: 'schon' },
      { w: 'informiert' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Zuständige' },
      { w: 'ist' },
      { w: 'bereits' },
      { w: 'unterwegs' },
      { w: 'und' },
      { w: 'bringt' },
      { w: 'den' },
      { w: 'Erste', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Hilfe', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Kasten' },
      { w: 'mit' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'Verletzte' },
      { w: 'gleich' },
      { w: 'in' },
      { w: 'guten' },
      { w: 'Händen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer braucht Hilfe?', qEn: 'Who needs help?', options: ['die Verantwortliche', 'die Verletzte', 'Timo', 'ein Kollege'], optionsEn: ['the woman in charge', 'the injured woman', 'Timo', 'a colleague'], answer: 1,
        explain: '"Die Verletzte dort drüben braucht Hilfe!"' },
      { q: 'Was bringt die Verantwortliche?', qEn: 'What is the responsible person bringing?', options: ['Wasser', 'den Erste-Hilfe-Kasten', 'ein Telefon', 'nichts'], optionsEn: ['water', 'the first-aid kit', 'a telephone', 'nothing'], answer: 1,
        explain: '"Die Zuständige … bringt den Erste-Hilfe-Kasten mit."' }
    ]
  },
  speaking: [
    { task: "Timo ruft, dass die Verletzte Hilfe braucht. Reagiere.", taskEn: "Timo calls that the injured woman needs help. Respond.", de: "Ich kümmere mich sofort um sie. Ist die Verantwortliche schon informiert?", en: "I'll see to her right away. Has the person in charge been informed?" },
    { task: "Timo fragt, wer heute bei der Veranstaltung dabei ist.", taskEn: "Timo asks who's attending the event today.", de: "Die Studierenden und die Teilnehmenden aus der Praxis diskutieren gemeinsam.", en: "The students and the participants from practice will discuss it together." },
    { task: "Ein Journalist fragt, wen die geplante Kürzung im Institut trifft.", taskEn: "A journalist asks who the planned cut at the institute affects.", de: "Betroffen sind vor allem die Studierenden und die Angestellten in der Verwaltung.", en: "Those affected are above all the students and the staff in administration." },
    { task: "Deine Betreuerin fragt, wer im Kolloquium noch fehlt.", taskEn: "Your supervisor asks who is still missing from the colloquium.", de: "Die Vortragenden sind da, aber die Angemeldeten aus Wien fehlen noch.", en: "The speakers are here, but those registered from Vienna are still missing." },
    { task: "Du organisierst die Tagung. Sag, wer was bekommt.", taskEn: "You're organising the conference. Say who gets what.", de: "Die Angemeldeten bekommen die Unterlagen, die Vortragenden kommen früher.", en: "Those registered get the papers, the speakers come earlier." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Replace repeated nouns with substantivized adjectives or participles where appropriate.\n\nTASK 2 — Formal article (350 words): Use substantivized adjectives, substantivized participles, inclusive language, academic style, and nominal style.',
    starters: ['Die Studierenden dieser Universität kommen aus aller Welt.', 'Die Verantwortlichen müssen sofort handeln.'],
    placeholder: 'Über hundert Teilnehmende haben sich für die Konferenz angemeldet. Die Forschenden...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'What is the modern, inclusive substitute for "die Studenten"?', options: ['die Studierenden', 'die Student', 'das Studenten'], answer: 0, explain: '"Die Studierenden" (substantivized Partizip I) is the modern, gender-neutral academic term.' },
    gap: { sentence: ['Wer ist für die ', ' zuständig?'], gaps: [ { answer: 'Verletzten', accepts: ['Verletzten'] } ], explain: '"Die Verletzten" (substantivized Partizip II) replaces "die verletzten Personen".' },
    match: { q: 'Match each substantivized form to its type.', pairs: [ { noun: 'die Studierenden', art: 'Substantivized Partizip I (active)' }, { noun: 'die Verletzten', art: 'Substantivized Partizip II (passive)' }, { noun: 'die Verantwortlichen', art: 'Substantivized adjective' }, { noun: 'das Wesentliche', art: 'Abstract substantivized adjective' } ] },
    builder: { target: 'Build: "How many students have registered?" (substantivized Partizip I)', bank: ['Wie', 'viele', 'Studierende', 'haben', 'sich', 'angemeldet', '?'], answer: ['Wie', 'viele', 'Studierende', 'haben', 'sich', 'angemeldet', '?'], roles: { 'Studierende': 'r-partizip1-nomen' } },
    errorCorrection: { title: 'Error correction', wrong: 'die studierenden haben sich angemeldet.', right: 'Die Studierenden haben sich angemeldet.', explain: 'Substantivized participles must be capitalized, just like any other noun.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for substantivized adjectives/participles?', options: ['The noun disappears, but its meaning stays in the adjective/participle', 'They are grammatically optional and rarely used', 'They only apply to abstract concepts'], answer: 0, explain: 'The adjective or participle takes over the noun\'s job, creating shorter, more elegant sentences.' },
    { q: 'Which form gives active reference (someone currently doing the action)?', options: ['Substantivized Partizip I', 'Substantivized Partizip II', 'Substantivized adjective only'], answer: 0, explain: 'Partizip I (die Studierenden, die Forschenden) expresses active, ongoing reference.' },
    { q: 'Which form gives passive reference (something happened to someone)?', options: ['Substantivized Partizip II', 'Substantivized Partizip I', 'Abstract "das" + adjective'], answer: 0, explain: 'Partizip II (die Verletzten, die Befragten) expresses passive reference.' },
    { q: 'What rule must substantivized adjectives/participles always follow?', options: ['Capitalization, like any other noun', 'They are never capitalized', 'They never take an article'], answer: 0, explain: 'Once functioning as a noun, the word must be capitalized and takes an article.' },
    { q: 'Why do institutions increasingly prefer "Studierende" over "Studenten"?', options: ['It is gender-neutral and inclusive', 'It is grammatically simpler', 'It is more casual'], answer: 0, explain: 'Substantivized Partizip I forms avoid gendered noun pairs, making language more inclusive.' }
  ],
  takeaways: [
    { c: 'r-adjektiv-nomen', html: 'Substantivized adjectives (der Deutsche, die Verantwortlichen) refer to people and groups, declining exactly like regular adjectives.' },
    { c: 'r-partizip1-nomen', html: 'Substantivized Partizip I (die Studierenden, die Teilnehmenden) gives active, inclusive reference — the modern academic standard.' },
    { c: 'r-partizip2-nomen', html: 'Substantivized Partizip II (die Verletzten, die Befragten) gives passive reference to people something has happened to.' }
  ],
  revisionTips: [
    'Take five common nouns referring to people (Studenten, Teilnehmer, verletzte Personen) and convert each into its modern substantivized form.',
    'Find a German university or news website and list every substantivized Partizip I/II you can identify.',
    'Practise the abstract "das + adjective" pattern by writing three sentences using das Wesentliche, das Entscheidende, or das Bekannte.'
  ]
};
window.CHAPTER = CHAPTER;
