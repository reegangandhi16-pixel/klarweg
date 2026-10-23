/* ============================================================
   KLARWEG LESEN PRACTICE — practice sets (PUBLISHED)
   Self-study reading practice. Not an exam: the answer key ships
   with the page on purpose, and nothing the learner chooses
   leaves the browser.

   Passages are Klarweg's own course texts, copied from the
   free Chapter 1 of each level (source.file). Any wording that
   differs from the chapter is listed in `edits` and must be
   fixed in the chapter too. Questions, explanations and
   evidence quotes are new. They were checked in-house by Claude
   (PR #231, #232); no independent German reviewer has reviewed
   them. Publication was authorised by the owner — see `review`.

   Every `evidence` string must appear verbatim in the passage;
   scripts/lesen-practice.test.mjs enforces that.
============================================================ */
const LESEN_PRACTICE = {
  review: {
    status: 'published',
    publishedOn: '2026-10-24',
    authorisedBy: 'owner',
    contentCheck: 'in-house (Claude), PR #231 and #232',
    independentReview: null
  },
  sets: [
    {
      id: 'a1-schule',
      level: 'A1',
      title: 'Willkommen in der Schule',
      titleEn: 'Welcome to school',
      source: { file: 'chapter/chapter-a1-1-data.js', href: 'chapter/chapter-a1-1-alphabet.html', chapter: 'A1 · Chapter 1' },
      edits: [],
      passage: [
        'Rohan ist in der Schule. Frau Weber sagt: Wie heißt du? Ich heiße Rohan, sagt er. R – O – H – A – N. Sehr gut, sagt Frau Weber. Willkommen! Die Schule ist schön.'
      ],
      questions: [
        { type: 'rf', q: 'Rohan ist im Café.', answer: 'falsch',
          evidence: 'Rohan ist in der Schule.',
          explain: 'Rohan is at school (in der Schule), not in a café.' },
        { type: 'mc', q: 'Wer fragt: „Wie heißt du?“', options: ['Rohan', 'Frau Weber', 'Ein Freund von Rohan'], answer: 1,
          evidence: 'Frau Weber sagt: Wie heißt du?',
          explain: 'Frau Weber asks the question; Rohan answers it with „Ich heiße Rohan“.' },
        { type: 'mc', q: 'Wie buchstabiert Rohan seinen Namen?', options: ['R – O – A – H – N', 'R – H – O – A – N', 'R – O – H – A – N'], answer: 2,
          evidence: 'R – O – H – A – N.',
          explain: 'He spells his name letter by letter: R – O – H – A – N.' },
        { type: 'rf', q: 'Die Schule ist schön.', answer: 'richtig',
          evidence: 'Die Schule ist schön.',
          explain: 'The last sentence says exactly this: the school is beautiful.' }
      ]
    },
    {
      id: 'a2-familie',
      level: 'A2',
      title: 'Rohans Familie',
      titleEn: 'Rohan’s family',
      source: { file: 'chapter/chapter-a2-1-genitiv-data.js', href: 'chapter/chapter-a2-1-genitiv.html', chapter: 'A2 · Chapter 1' },
      edits: [
        { from: 'Dafür hilft die ganze Familie gemeinsam.', to: 'Dabei hilft die ganze Familie gemeinsam.',
          why: '„Dafür“ reads as „in return“; the sentence means the family helps with the renovation, which is „dabei“.' }
      ],
      passage: [
        'Meine Familie wohnt in Indien. Meine Schwester Anita macht eine Ausbildung in Biologie. Anitas Note ist sehr gut. Mein Onkel Raj ist geschieden. Er renoviert jetzt Omas Haus, denn Oma hat die Grippe. Dabei hilft die ganze Familie gemeinsam. Am folgenden Tag kommt der Arzt. Rajs Auto steht vor Omas Haus. Spätestens im August ist alles fertig.'
      ],
      questions: [
        { type: 'mc', q: 'Was macht Anita?', options: ['Sie arbeitet als Ärztin.', 'Sie macht eine Ausbildung in Biologie.', 'Sie renoviert ein Haus.'], answer: 1,
          evidence: 'Meine Schwester Anita macht eine Ausbildung in Biologie.',
          explain: 'Anita is doing a training programme (Ausbildung) in biology. The doctor (Arzt) is someone else.' },
        { type: 'rf', q: 'Anitas Note ist schlecht.', answer: 'falsch',
          evidence: 'Anitas Note ist sehr gut.',
          explain: 'Her grade is very good (sehr gut), the opposite of schlecht.' },
        { type: 'mc', q: 'Warum renoviert Raj Omas Haus?', options: ['Weil Oma die Grippe hat.', 'Weil er geschieden ist.', 'Weil der Arzt kommt.'], answer: 0,
          evidence: 'denn Oma hat die Grippe',
          explain: '„denn“ introduces the reason: Grandma has the flu. The divorce and the doctor are mentioned, but not as the reason.' },
        { type: 'rf', q: 'Raj renoviert das Haus allein.', answer: 'falsch',
          evidence: 'Dabei hilft die ganze Familie gemeinsam.',
          explain: 'The whole family helps him, so he is not working alone.' },
        { type: 'mc', q: 'Wann ist alles fertig?', options: ['Am folgenden Tag.', 'Spätestens im August.', 'Nächstes Jahr.'], answer: 1,
          evidence: 'Spätestens im August ist alles fertig.',
          explain: '„Spätestens im August“ means by August at the latest. „Am folgenden Tag“ is when the doctor comes.' }
      ]
    },
    {
      id: 'b1-ferien',
      level: 'B1',
      title: 'Ferienpläne',
      titleEn: 'Holiday plans',
      source: { file: 'chapter/chapter-b1-1-infinitiv-mit-zu-data.js', href: 'chapter/chapter-b1-1-infinitiv-mit-zu.html', chapter: 'B1 · Chapter 1' },
      edits: [
        { from: 'denn manche Insekten am Strand lästig sind.', to: 'denn manche Insekten am Strand sind lästig.',
          why: '„denn“ is followed by main-clause word order, so the verb stays in position 2.' }
      ],
      passage: [
        'Lena hat vor, diesen Sommer an die Küste zu fahren. Sie plant, dort drei Wochen zu zelten und sich richtig zu erholen. Es ist ihr wichtig, jeden Tag im Freien zu sein und die frische Luft zu genießen. Sie hat auch Lust, im Meer zu schwimmen und die Aussicht auf den Himmel zu genießen.',
        'Natürlich vergisst sie nicht, Insektenschutz mitzubringen, denn manche Insekten am Strand sind lästig. Sie hofft, jeden Abend am Lagerfeuer reife Trauben zu essen, aber sie hat auch Angst, giftige Pilze zu finden. Ihre Freunde versprechen, sie oft im Chat zu grüßen und ihr einen Urlaubsgruß zu schicken. Am Ende beginnt sie, den Alltag zu vergessen und den Moment zu genießen.'
      ],
      questions: [
        { type: 'mc', q: 'Wie lange möchte Lena zelten?', options: ['Eine Woche.', 'Drei Wochen.', 'Den ganzen Sommer.'], answer: 1,
          evidence: 'dort drei Wochen zu zelten',
          explain: 'She plans to camp for three weeks. „Diesen Sommer“ is when she travels, not how long she camps.' },
        { type: 'rf', q: 'Lena möchte jeden Tag draußen sein.', answer: 'richtig',
          evidence: 'jeden Tag im Freien zu sein',
          explain: '„im Freien“ means outdoors, so „jeden Tag im Freien zu sein“ is being outside every day.' },
        { type: 'mc', q: 'Warum nimmt Lena Insektenschutz mit?', options: ['Weil sie im Meer schwimmen will.', 'Weil ihre Freunde sie darum bitten.', 'Weil manche Insekten am Strand lästig sind.'], answer: 2,
          evidence: 'denn manche Insekten am Strand sind lästig',
          explain: 'The reason follows „denn“: some insects on the beach are annoying.' },
        { type: 'rf', q: 'Lena freut sich darauf, Pilze zu finden.', answer: 'falsch',
          evidence: 'sie hat auch Angst, giftige Pilze zu finden',
          explain: 'She is afraid (hat Angst) of finding poisonous mushrooms; she is not looking forward to it.' },
        { type: 'mc', q: 'Was versprechen Lenas Freunde?', options: ['Sie besuchen Lena an der Küste.', 'Sie schreiben ihr oft im Chat.', 'Sie bringen Trauben mit.'], answer: 1,
          evidence: 'sie oft im Chat zu grüßen',
          explain: 'They promise to greet her often in the chat and send a holiday greeting. Nobody says they will visit.' }
      ]
    },
    {
      id: 'b2-karriere',
      level: 'B2',
      title: 'Migration und Karriere in Deutschland',
      titleEn: 'Migration and career in Germany',
      source: { file: 'chapter/chapter-b2-01-erweiterte-satzklammer-data.js', href: 'chapter/chapter-b2-01-erweiterte-satzklammer.html', chapter: 'B2 · Chapter 1' },
      edits: [],
      passage: [
        'Viele Menschen sind wegen besserer Chancengleichheit nach Deutschland ausgewandert. Wegen ihres Migrationshintergrunds mussten viele zunächst eine Arbeitserlaubnis beantragen, bevor sie eine passende Stelle finden konnten. Sämtliche Studien zeigen inzwischen, dass die Diskriminierung am Arbeitsmarkt spürbar zurückgegangen ist.',
        'Man muss jedoch bedenken, dass Auslandserfahrung heutzutage besonders begehrt ist und viele Unternehmen sie ausdrücklich voraussetzen. Ein Beispiel dafür ist die Softwarefirma Delta GmbH, die sich mittlerweile eine klare Position zur Chancengleichheit erarbeitet hat: Bei der Einstellung wird der Migrationshintergrund nicht mehr berücksichtigt, sondern ausschließlich die fachliche Qualifikation. Diese Entwicklung betrifft längst nicht nur große Konzerne, sondern zunehmend auch kleinere Betriebe, die ihre Auswahlkriterien bewusst neutral gestalten wollen.'
      ],
      questions: [
        { type: 'mc', q: 'Was mussten viele Zugewanderte zuerst tun?', options: ['Eine Arbeitserlaubnis beantragen.', 'Auslandserfahrung sammeln.', 'Eine eigene Firma gründen.'], answer: 0,
          evidence: 'mussten viele zunächst eine Arbeitserlaubnis beantragen',
          explain: '„zunächst“ = first of all: they had to apply for a work permit before finding a job.' },
        { type: 'rf', q: 'Laut den Studien hat die Diskriminierung am Arbeitsmarkt zugenommen.', answer: 'falsch',
          evidence: 'dass die Diskriminierung am Arbeitsmarkt spürbar zurückgegangen ist',
          explain: '„zurückgegangen“ means it has declined, noticeably (spürbar), which is the opposite of zugenommen.' },
        { type: 'mc', q: 'Was setzen viele Unternehmen heute ausdrücklich voraus?', options: ['Einen Migrationshintergrund.', 'Ein Studium in Deutschland.', 'Auslandserfahrung.'], answer: 2,
          evidence: 'Auslandserfahrung heutzutage besonders begehrt ist und viele Unternehmen sie ausdrücklich voraussetzen',
          explain: '„sie“ refers back to „Auslandserfahrung“: experience abroad is what companies require.' },
        { type: 'mc', q: 'Worauf achtet die Delta GmbH bei der Einstellung?', options: ['Vor allem auf den Migrationshintergrund.', 'Ausschließlich auf die fachliche Qualifikation.', 'Auf die Größe des früheren Arbeitgebers.'], answer: 1,
          evidence: 'sondern ausschließlich die fachliche Qualifikation',
          explain: '„nicht mehr …, sondern ausschließlich …“: the migration background no longer counts, only professional qualification does.' },
        { type: 'rf', q: 'Nur große Konzerne gestalten ihre Auswahlkriterien neutral.', answer: 'falsch',
          evidence: 'längst nicht nur große Konzerne, sondern zunehmend auch kleinere Betriebe',
          explain: '„längst nicht nur“ means by no means only: smaller businesses increasingly want neutral criteria too.' }
      ]
    },
    {
      id: 'c1-energiespeicher',
      level: 'C1',
      title: 'Neuer Energiespeicher aus Dresden',
      titleEn: 'A new energy store from Dresden',
      source: { file: 'chapter/chapter-c1-01-tempusgebrauch-stilistische-tempuswahl-data.js', href: 'chapter/chapter-c1-01-tempusgebrauch-stilistische-tempuswahl.html', chapter: 'C1 · Chapter 1' },
      edits: [],
      passage: [
        'Ein Team der Technischen Universität Dresden präsentiert heute die Ergebnisse einer außergewöhnlichen Studie zur Energiespeicherung. Bereits seit fünf Jahren hatten die Forscher an dem neuen Material gearbeitet, bevor der Durchbruch gelang. Laut der Studienleiterin habe man zunächst mit deutlich geringeren Wirkungsgraden gerechnet.',
        'Die Fachwelt reagiert überrascht: Mehrere Institute wollen die Ergebnisse in den kommenden Monaten unabhängig überprüfen. Bis dahin, so vermuten Branchenkenner, werden die Wissenschaftler ihre Methode bereits weiterentwickelt haben.'
      ],
      questions: [
        { type: 'mc', q: 'Wie lange hatten die Forscher an dem Material gearbeitet, bevor der Durchbruch gelang?', options: ['Ein Jahr.', 'Fünf Jahre.', 'Zehn Jahre.'], answer: 1,
          evidence: 'Bereits seit fünf Jahren hatten die Forscher an dem neuen Material gearbeitet',
          explain: 'Five years. The Plusquamperfekt („hatten … gearbeitet“) places the work before the breakthrough.' },
        { type: 'rf', q: 'Das Team hatte von Anfang an mit so guten Ergebnissen gerechnet.', answer: 'falsch',
          evidence: 'habe man zunächst mit deutlich geringeren Wirkungsgraden gerechnet',
          explain: 'At first they expected clearly lower efficiency. „habe … gerechnet“ is Konjunktiv I: the text reports what the study leader said.' },
        { type: 'mc', q: 'Wie reagiert die Fachwelt?', options: ['Ablehnend.', 'Gleichgültig.', 'Überrascht.'], answer: 2,
          evidence: 'Die Fachwelt reagiert überrascht',
          explain: 'The experts react with surprise. Wanting to check the results is not the same as rejecting them.' },
        { type: 'rf', q: 'Andere Institute haben die Ergebnisse bereits bestätigt.', answer: 'falsch',
          evidence: 'Mehrere Institute wollen die Ergebnisse in den kommenden Monaten unabhängig überprüfen.',
          explain: 'They want to verify the results in the coming months, so nothing has been confirmed yet.' },
        { type: 'mc', q: 'Was vermuten Branchenkenner?', options: ['Die Methode wird bis dahin schon weiterentwickelt sein.', 'Die Studie wird zurückgezogen.', 'Das Material kommt sofort auf den Markt.'], answer: 0,
          evidence: 'werden die Wissenschaftler ihre Methode bereits weiterentwickelt haben',
          explain: 'Futur II („werden … weiterentwickelt haben“) expresses an assumption that something will already be finished by a future point.' }
      ]
    },
    {
      id: 'c2-mauer',
      level: 'C2',
      title: 'Die Nacht, in der die Mauer fiel',
      titleEn: 'The night the Wall fell',
      source: { file: 'chapter/chapter-c2-01-zeitformen-der-verben-data.js', href: 'chapter/chapter-c2-01-zeitformen-der-verben.html', chapter: 'C2 · Chapter 1' },
      edits: [],
      passage: [
        'Es ist kurz nach neunzehn Uhr, als ein Politbüromitglied sich verspricht. Von diesem Moment an erzählt dieser Essay die Ereignisse im Präsens. Tausende strömen noch in derselben Nacht zu den Grenzübergängen. Was damals wie ein Missverständnis wirkte, gilt heute als einer der folgenreichsten Versprecher der Geschichte.'
      ],
      questions: [
        { type: 'mc', q: 'Was geschieht laut Text kurz nach neunzehn Uhr?', options: ['Ein Politbüromitglied gibt öffentlich ein Versprechen ab.', 'Einem Politbüromitglied unterläuft ein Versprecher.', 'Ein Politbüromitglied widerruft eine frühere Aussage.'], answer: 1,
          evidence: 'Es ist kurz nach neunzehn Uhr, als ein Politbüromitglied sich verspricht.',
          explain: 'The first sentence says it directly: „als ein Politbüromitglied sich verspricht“. Reflexive „sich versprechen“ means to misspeak (der Versprecher); „etwas versprechen“ without „sich“ would be to promise. Nothing is withdrawn.' },
        { type: 'rf', q: 'Der Essay erzählt die ganze Geschichte im Präteritum.', answer: 'falsch',
          evidence: 'Von diesem Moment an erzählt dieser Essay die Ereignisse im Präsens.',
          explain: 'From that moment on the essay tells the events in the present tense. Only the closing look back uses the past („wirkte“).' },
        { type: 'mc', q: 'Wohin strömen Tausende in derselben Nacht?', options: ['Zum Sitz des Politbüros.', 'Zu den Grenzübergängen.', 'Nach Hause.'], answer: 1,
          evidence: 'Tausende strömen noch in derselben Nacht zu den Grenzübergängen.',
          explain: 'Thousands stream to the border crossings that same night.' },
        { type: 'mc', q: 'Wie wird der Versprecher heute bewertet?', options: ['Als harmloses Missverständnis ohne Folgen.', 'Als bewusst geplante Aktion.', 'Als einer der folgenreichsten Versprecher der Geschichte.'], answer: 2,
          evidence: 'gilt heute als einer der folgenreichsten Versprecher der Geschichte',
          explain: 'The text contrasts then and now: it seemed like a misunderstanding back then (damals … wirkte), but today it is seen as one of history’s most consequential slips.' }
      ]
    }
  ]
};
