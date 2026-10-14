/* SYNTHETIC B1 PRACTICE form P7: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P7 = buildPracticeForm({
  n: 7, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Von der Bank in den Garten\n\n'
        + 'Zwölf Jahre lang habe ich in einer Bank gearbeitet. Der Job war sicher und gut bezahlt, aber ich saß den ganzen Tag vor dem Bildschirm. '
        + 'Abends hatte ich oft Kopfschmerzen. Am Wochenende war ich dagegen immer glücklich, wenn ich im Garten meiner Eltern arbeiten konnte.\n\n'
        + 'Vor zwei Jahren habe ich mich dann getraut und eine Umschulung zur Gärtnerin begonnen. Meine Freunde fanden das mutig, meine Mutter eher verrückt. '
        + 'Die Ausbildung war nicht leicht: Ich musste viele lateinische Pflanzennamen lernen, und im Winter auf der Baustelle war es oft eiskalt.\n\n'
        + 'Heute arbeite ich in einem kleinen Betrieb, der Gärten für Privatleute plant und pflegt. Ich verdiene weniger als früher, aber das ist mir egal. '
        + 'Meine Kopfschmerzen sind verschwunden. Und meine Mutter? Sie hat mich letzten Monat gebeten, ihren Garten neu zu gestalten.\n\n'
        + 'Lina',
      example: ['Lina hat früher in einer Bank gearbeitet.', 'richtig'],
      items: [
        ['Lina hatte bei ihrer alten Arbeit gesundheitliche Probleme.', 'richtig', 'Abends hatte ich oft Kopfschmerzen.', 'Lina hatte abends oft Kopfschmerzen.'],
        ['Linas Mutter fand die Umschulung von Anfang an gut.', 'falsch', 'meine Mutter eher verrückt', 'Linas Mutter fand die Idee am Anfang eher verrückt.'],
        ['In der Ausbildung musste Lina viele Fachbegriffe lernen.', 'richtig', 'Ich musste viele lateinische Pflanzennamen lernen', 'Lina musste viele lateinische Pflanzennamen lernen.'],
        ['Lina arbeitet heute für die Stadt in einem Park.', 'falsch', 'der Gärten für Privatleute plant und pflegt', 'Lina arbeitet in einem kleinen Betrieb für Gärten von Privatleuten.'],
        ['Lina verdient heute mehr Geld als in der Bank.', 'falsch', 'Ich verdiene weniger als früher', 'Lina verdient heute weniger als früher.'],
        ['Linas Mutter möchte Linas Hilfe für ihren Garten.', 'richtig', 'ihren Garten neu zu gestalten', 'Die Mutter hat Lina gebeten, ihren Garten neu zu gestalten.']
      ]
    },
    t2: [
      {
        text: 'Bürgerbus verbindet die Dörfer\n\nIn den Dörfern rund um Hohenberg fährt seit diesem Monat ein Bürgerbus. Am Steuer sitzen ehrenamtliche Fahrerinnen und Fahrer, '
          + 'die meisten sind schon in Rente. Der Kleinbus hat acht Plätze und fährt zweimal am Tag zum Ärztehaus und zum Supermarkt in Hohenberg. '
          + 'Eine Fahrt kostet zwei Euro, Kinder unter sechs Jahren fahren kostenlos. Wer mitfahren möchte, muss sich bis zum Vortag telefonisch anmelden. '
          + 'Der Verein sucht noch weitere Fahrer.',
        example: ['Der Bürgerbus fährt …', ['seit diesem Monat.', 'seit vielen Jahren.', 'nur am Wochenende.'], 'a'],
        items: [
          ['Die Fahrer …', ['bekommen ein gutes Gehalt.', 'arbeiten ohne Bezahlung.', 'sind Studierende.'], 'b', 'Am Steuer sitzen ehrenamtliche Fahrerinnen und Fahrer', 'Die Fahrerinnen und Fahrer arbeiten ehrenamtlich.'],
          ['Der Bus fährt …', ['stündlich in die Stadt.', 'nur zum Bahnhof.', 'zweimal täglich nach Hohenberg.'], 'c', 'fährt zweimal am Tag zum Ärztehaus und zum Supermarkt in Hohenberg', 'Der Bus fährt zweimal am Tag nach Hohenberg.'],
          ['Wer mitfahren will, …', ['muss sich am Tag vorher melden.', 'kauft die Karte im Internet.', 'muss Mitglied im Verein sein.'], 'a', 'muss sich bis zum Vortag telefonisch anmelden', 'Man meldet sich bis zum Vortag telefonisch an.']
        ]
      },
      {
        text: 'Kantine kocht mit Gemüse aus der Region\n\nDie Kantine der Firma Nordlicht Elektronik hat ihr Angebot umgestellt: Seit dem Sommer kommen Obst und Gemüse von drei Bauernhöfen aus der Umgebung. '
          + 'Fleisch gibt es nur noch zweimal pro Woche, an den anderen Tagen wird vegetarisch gekocht. Zuerst gab es Beschwerden, inzwischen essen aber mehr Mitarbeiter in der Kantine als vorher. '
          + 'Das Essen ist etwas teurer geworden; die Firma bezahlt deshalb einen Euro pro Mahlzeit dazu.',
        items: [
          ['Das Gemüse für die Kantine …', ['kommt aus dem Ausland.', 'baut die Firma selbst an.', 'kommt von Höfen in der Nähe.'], 'c', 'von drei Bauernhöfen aus der Umgebung', 'Obst und Gemüse kommen von drei Höfen aus der Umgebung.'],
          ['Heute essen in der Kantine …', ['mehr Mitarbeiter als früher.', 'nur noch Vegetarier.', 'weniger Mitarbeiter als früher.'], 'a', 'inzwischen essen aber mehr Mitarbeiter in der Kantine als vorher', 'Inzwischen essen mehr Mitarbeiter in der Kantine als vorher.'],
          ['Weil das Essen teurer ist, …', ['gibt es kleinere Portionen.', 'zahlt die Firma einen Teil.', 'bringen viele ihr Essen mit.'], 'b', 'die Firma bezahlt deshalb einen Euro pro Mahlzeit dazu', 'Die Firma zahlt einen Euro pro Mahlzeit dazu.']
        ]
      }
    ],
    t3: {
      ads: [
        'Salsa-Kurs für Singles: Partner nicht nötig, wir wechseln in jeder Stunde – mittwochs 19 Uhr.',
        'Ehrenamtliche Vorleser für das Seniorenheim gesucht, ein Nachmittag pro Woche.',
        'Kinderfahrrad-Flohmarkt im Hof der Grundschule – kaufen und verkaufen.',
        'Programmieren lernen für Jugendliche ab 12: erste eigene Spiele am Computer.',
        'Hochzeitsfotografin mit Erfahrung – Paketpreise, auch für kleine Feiern.',
        'Wohnungsauflösung: Möbel, Geschirr und Lampen gegen Abholung zu verschenken.',
        'Erste Hilfe für Hundebesitzer: Was tun, wenn das Tier verletzt ist? Ein Samstag.',
        'Steuerberatung für Rentnerinnen und Rentner – Hausbesuche möglich.',
        'Gitarrenreparatur und neue Saiten – schnell und günstig in unserer Werkstatt.',
        'Studentin bietet Hilfe beim Umzug von Pflanzen und Blumen – auch Pflege im Urlaub.'
      ],
      example: ['Sie möchten Salsa tanzen lernen, haben aber keinen Tanzpartner.', 'a'],
      situations: [
        ['Sie haben einen Hund und möchten lernen, was Sie bei einem Unfall tun können.', 'g', 'Erste Hilfe für Hundebesitzer', 'Der Kurs (g) zeigt Hundebesitzern, was man bei Verletzungen tut.'],
        ['Sie fahren drei Wochen weg und jemand soll Ihre Zimmerpflanzen gießen.', 'j', 'auch Pflege im Urlaub', 'Die Studentin (j) pflegt Pflanzen auch im Urlaub.'],
        ['Ihr Sohn ist 13 und möchte gern lernen, wie man Computerspiele macht.', 'd', 'erste eigene Spiele am Computer', 'Im Kurs (d) programmieren Jugendliche ab 12 eigene Spiele.'],
        ['Sie richten Ihre erste Wohnung ein und haben wenig Geld für Möbel.', 'f', 'gegen Abholung zu verschenken', 'Bei der Wohnungsauflösung (f) werden Möbel verschenkt.'],
        ['Ihr Großvater ist 78 und braucht Hilfe bei der Steuererklärung, kann aber schlecht laufen.', 'h', 'Hausbesuche möglich', 'Die Steuerberatung (h) ist für Rentner und macht Hausbesuche.'],
        ['Sie haben Zeit und möchten älteren Menschen eine Freude machen.', 'b', 'Ehrenamtliche Vorleser für das Seniorenheim gesucht', 'Das Seniorenheim (b) sucht ehrenamtliche Vorleser.'],
        ['Ihr Klavier muss gestimmt werden.', '0', 'Gitarrenreparatur und neue Saiten', 'Die Werkstatt (i) repariert nur Gitarren, kein Klavier: 0.', 'i']
      ]
    },
    t4: {
      topic: 'In einer Zeitung wird gefragt: Soll privates Feuerwerk an Silvester verboten werden?',
      question: 'Ist die Person für ein Verbot von privatem Feuerwerk?',
      comments: [
        ['Ralf, 47', 'Jedes Jahr bekommt unser Hund an Silvester Panik und versteckt sich stundenlang. Ich wäre froh über ein Verbot.', 'ja'],
        ['Selma, 26', 'Silvester ohne Raketen kann ich mir nicht vorstellen. Das gehört einfach dazu, schon seit meiner Kindheit. Ein Verbot lehne ich ab.', 'nein', 'Ein Verbot lehne ich ab.', 'Selma kann sich Silvester ohne Raketen nicht vorstellen.'],
        ['Dr. Brückner, 55', 'Als Ärztin in der Notaufnahme sehe ich jedes Jahr schwere Verletzungen an Händen und Augen. Privates Feuerwerk sollte es nicht mehr geben.', 'ja', 'Privates Feuerwerk sollte es nicht mehr geben.', 'Die Ärztin sieht jedes Jahr schwere Verletzungen und ist für ein Verbot.'],
        ['Kai, 19', 'Man könnte ja Zonen machen, in denen man böllern darf. Ein komplettes Verbot geht mir aber zu weit.', 'nein', 'Ein komplettes Verbot geht mir aber zu weit.', 'Kai möchte höchstens Zonen, aber kein komplettes Verbot.'],
        ['Hannelore, 74', 'Am Neujahrsmorgen liegt überall Müll auf der Straße, und die Luft ist schlecht. Ein großes Feuerwerk der Stadt reicht völlig.', 'ja', 'Ein großes Feuerwerk der Stadt reicht völlig.', 'Hannelore findet, dass ein Feuerwerk der Stadt reicht.'],
        ['Mehmet, 41', 'Für meine Kinder ist das der schönste Abend im Jahr. Wir passen gut auf und machen hinterher sauber. Warum sollte man uns das verbieten?', 'nein', 'Warum sollte man uns das verbieten?', 'Mehmet möchte mit seinen Kindern weiter Feuerwerk machen.'],
        ['Birte, 38', 'Ich arbeite bei der Feuerwehr. In der Silvesternacht haben wir dreimal so viele Einsätze wie sonst. Ich bin klar dafür.', 'ja', 'Ich bin klar dafür.', 'Birte erlebt in der Silvesternacht viele Einsätze und ist für ein Verbot.'],
        ['Anton, 63', 'Die Menschen sollen selbst entscheiden dürfen. Der Staat muss nicht alles regeln.', 'nein', 'Der Staat muss nicht alles regeln.', 'Anton meint, dass jeder selbst entscheiden soll.']
      ]
    },
    t5: {
      context: 'Sie übernachten mit Ihrer Sportgruppe in einer Jugendherberge und lesen die Hausordnung.',
      text: 'Hausordnung der Jugendherberge Hohenberg\n\n'
        + '1. Zimmer: Die Zimmer sind ab 15 Uhr bezugsfertig. Am Abreisetag verlassen Sie das Zimmer bitte bis 10 Uhr.\n\n'
        + '2. Bettwäsche: Bettwäsche ist im Preis enthalten. Handtücher bringen Sie bitte selbst mit oder leihen sie an der Rezeption.\n\n'
        + '3. Mahlzeiten: Frühstück gibt es von 7 bis 9 Uhr. Lunchpakete für Ausflüge bestellen Sie bitte bis 18 Uhr am Vortag.\n\n'
        + '4. Ruhe: Ab 22 Uhr ist Nachtruhe. Gruppenleiter sind dafür verantwortlich, dass ihre Gruppe die Regeln beachtet.',
      items: [
        ['Am Abreisetag muss man das Zimmer …', ['bis 10 Uhr verlassen.', 'bis 15 Uhr verlassen.', 'selbst putzen.'], 'a', 'Am Abreisetag verlassen Sie das Zimmer bitte bis 10 Uhr.', 'Regel 1: Am Abreisetag verlässt man das Zimmer bis 10 Uhr.'],
        ['Handtücher …', ['sind im Zimmer.', 'kann man an der Rezeption leihen.', 'sind verboten.'], 'b', 'leihen sie an der Rezeption', 'Regel 2: Handtücher bringt man mit oder leiht sie an der Rezeption.'],
        ['Ein Lunchpaket für Freitag bestellt man …', ['am Freitagmorgen.', 'beim Frühstück.', 'am Donnerstag bis 18 Uhr.'], 'c', 'bestellen Sie bitte bis 18 Uhr am Vortag', 'Regel 3: Lunchpakete bestellt man bis 18 Uhr am Vortag.'],
        ['Für die Ruhe in der Gruppe sorgt …', ['die Rezeption.', 'der Gruppenleiter.', 'ein Hausmeister.'], 'b', 'Gruppenleiter sind dafür verantwortlich', 'Regel 4: Gruppenleiter sind für ihre Gruppe verantwortlich.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Zoo: Liebe Besucher, um 15 Uhr füttern unsere Tierpfleger die Seelöwen. Kommen Sie zum großen Becken neben dem Spielplatz.',
        rf: ['Im Zoo werden heute die Seelöwen gefüttert.', 'richtig'], mc: ['Das Becken ist …', ['neben dem Spielplatz.', 'am Eingang.', 'neben dem Restaurant.'], 'a'] },
      texts: [
        { script: 'Nachricht von der Autovermietung: Guten Tag, Frau Berger, hier ist die Autovermietung Mobilo. Das Auto, das Sie für Freitag reserviert haben, ist leider kaputt. Wir haben für Sie ein größeres Auto zum gleichen Preis.',
          rf: ['Frau Berger muss für das größere Auto mehr bezahlen.', 'falsch', 'ein größeres Auto zum gleichen Preis', 'Das größere Auto kostet den gleichen Preis.'],
          mc: ['Das reservierte Auto …', ['ist schon abgeholt.', 'ist kaputt.', 'ist noch frei.'], 'b', 'ist leider kaputt', 'Das reservierte Auto ist kaputt.'] },
        { script: 'Wettermeldung: Heute Nacht sinken die Temperaturen unter null Grad. Auf Brücken und Nebenstraßen kann es glatt werden. Autofahrer sollten morgen früh etwas mehr Zeit einplanen.',
          rf: ['Morgen früh kann es auf den Straßen glatt sein.', 'richtig', 'Auf Brücken und Nebenstraßen kann es glatt werden.', 'Auf Brücken und Nebenstraßen kann es glatt werden.'],
          mc: ['Autofahrer sollen morgen …', ['den Zug nehmen.', 'zu Hause bleiben.', 'früher losfahren.'], 'c', 'sollten morgen früh etwas mehr Zeit einplanen', 'Autofahrer sollen mehr Zeit einplanen, also früher losfahren.'] },
        { script: 'Durchsage im Kaufhaus: Der kleine Leon, vier Jahre alt, sucht seine Eltern. Er trägt eine rote Jacke und wartet an der Information im Erdgeschoss.',
          rf: ['Leon wartet an der Kasse im ersten Stock.', 'falsch', 'wartet an der Information im Erdgeschoss', 'Leon wartet an der Information im Erdgeschoss.'],
          mc: ['Leon …', ['ist vier Jahre alt.', 'trägt eine blaue Jacke.', 'sucht seine Schwester.'], 'a', 'vier Jahre alt', 'Leon ist vier Jahre alt.'] },
        { script: 'Nachricht von einem Nachbarn: Hallo Frau Diallo, hier ist Herr Kraus von nebenan. Ich bin ab Montag eine Woche verreist. Könnten Sie meine Post aus dem Briefkasten nehmen? Den Schlüssel werfe ich Ihnen heute Abend in den Briefkasten.',
          rf: ['Herr Kraus fährt für eine Woche weg.', 'richtig', 'Ich bin ab Montag eine Woche verreist.', 'Herr Kraus ist ab Montag eine Woche verreist.'],
          mc: ['Frau Diallo soll …', ['die Blumen gießen.', 'die Post holen.', 'die Katze füttern.'], 'b', 'Könnten Sie meine Post aus dem Briefkasten nehmen?', 'Herr Kraus bittet Frau Diallo, seine Post zu holen.'] },
        { script: 'Information der Volkshochschule: Liebe Teilnehmende, der Italienischkurs am Dienstagabend fällt diese Woche aus, weil die Kursleiterin krank ist. Die Stunde wird in den Osterferien nachgeholt. Den genauen Termin schicken wir Ihnen per E-Mail.',
          rf: ['Der Italienischkurs findet diese Woche statt.', 'falsch', 'fällt diese Woche aus', 'Der Kurs fällt diese Woche aus.'],
          mc: ['Den neuen Termin …', ['bekommen die Teilnehmer per E-Mail.', 'erfährt man im Kurs.', 'gibt es noch nicht.'], 'a', 'Den genauen Termin schicken wir Ihnen per E-Mail.', 'Den genauen Termin bekommen die Teilnehmer per E-Mail.'] }
      ]
    },
    t2: {
      context: 'Sie besuchen einen Erste-Hilfe-Kurs und hören die Kursleiterin am Anfang.',
      script: 'Guten Morgen und willkommen zum Erste-Hilfe-Kurs! Der Kurs dauert heute bis 16 Uhr, mittags machen wir eine Stunde Pause. '
        + 'Am Vormittag lernen Sie, was man bei einem Unfall zuerst tun muss. Am Nachmittag üben wir an Puppen die Herz-Druck-Massage. '
        + 'Bitte ziehen Sie bequeme Kleidung an, wir arbeiten viel auf dem Boden. Ihre Bescheinigung bekommen Sie am Ende des Kurses.',
      items: [
        ['Der Kurs endet …', ['um 12 Uhr.', 'um 16 Uhr.', 'am nächsten Tag.'], 'b', 'Der Kurs dauert heute bis 16 Uhr', 'Der Kurs dauert bis 16 Uhr.'],
        ['Die Mittagspause dauert …', ['eine Stunde.', 'eine halbe Stunde.', 'zwei Stunden.'], 'a', 'mittags machen wir eine Stunde Pause', 'Mittags gibt es eine Stunde Pause.'],
        ['Am Nachmittag …', ['gibt es einen Test.', 'sieht man einen Film.', 'üben die Teilnehmer an Puppen.'], 'c', 'Am Nachmittag üben wir an Puppen die Herz-Druck-Massage.', 'Am Nachmittag üben alle an Puppen.'],
        ['Die Teilnehmer sollen …', ['bequeme Kleidung tragen.', 'ein Handtuch mitbringen.', 'Essen mitbringen.'], 'a', 'Bitte ziehen Sie bequeme Kleidung an', 'Die Teilnehmer sollen bequeme Kleidung anziehen.'],
        ['Die Bescheinigung …', ['schickt man per Post.', 'bekommt man nach dem Kurs.', 'muss man extra bezahlen.'], 'b', 'Ihre Bescheinigung bekommen Sie am Ende des Kurses.', 'Die Bescheinigung gibt es am Ende des Kurses.']
      ]
    },
    t3: {
      context: 'Sie sind in einem Café und hören, wie zwei Freunde über den Kauf eines Autos sprechen.',
      script: 'Tobias: Ich habe am Samstag endlich ein Auto gekauft!\n'
        + 'Miriam: Wirklich? Ein neues?\n'
        + 'Tobias: Nein, ein gebrauchtes, acht Jahre alt. Ein neues war mir zu teuer. Ich habe es von einem älteren Herrn gekauft, der nicht mehr Auto fahren darf.\n'
        + 'Miriam: Und hast du es vorher von einer Werkstatt prüfen lassen?\n'
        + 'Tobias: Ja, mein Schwager ist Mechaniker, er hat alles angeschaut. Nur die Reifen muss ich vor dem Winter wechseln.\n'
        + 'Miriam: Wofür brauchst du das Auto denn? Du bist doch immer mit dem Rad gefahren.\n'
        + 'Tobias: Zur Arbeit fahre ich weiter mit dem Rad. Aber meine Eltern wohnen auf dem Land, und mit dem Bus brauche ich drei Stunden zu ihnen.\n'
        + 'Miriam: Verstehe. Nimmst du mich mal mit, wenn du in die Richtung fährst?\n'
        + 'Tobias: Klar, gern!',
      items: [
        ['Tobias hat ein neues Auto gekauft.', 'falsch', 'Nein, ein gebrauchtes, acht Jahre alt.', 'Tobias hat ein gebrauchtes Auto gekauft.'],
        ['Der Verkäufer war ein älterer Mann.', 'richtig', 'von einem älteren Herrn gekauft', 'Tobias hat das Auto von einem älteren Herrn gekauft.'],
        ['Ein Mechaniker aus der Familie hat das Auto geprüft.', 'richtig', 'mein Schwager ist Mechaniker, er hat alles angeschaut', 'Sein Schwager, ein Mechaniker, hat alles angeschaut.'],
        ['Am Auto muss nichts repariert werden.', 'falsch', 'Nur die Reifen muss ich vor dem Winter wechseln.', 'Vor dem Winter muss Tobias die Reifen wechseln.'],
        ['Tobias fährt jetzt mit dem Auto zur Arbeit.', 'falsch', 'Zur Arbeit fahre ich weiter mit dem Rad.', 'Zur Arbeit fährt Tobias weiter mit dem Rad.'],
        ['Mit dem Bus dauert die Fahrt zu seinen Eltern lange.', 'richtig', 'mit dem Bus brauche ich drei Stunden zu ihnen', 'Mit dem Bus braucht Tobias drei Stunden zu seinen Eltern.'],
        ['Tobias will Miriam manchmal mitnehmen.', 'richtig', 'Klar, gern!', 'Tobias antwortet, dass er Miriam gern mitnimmt.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Braun', 'Frau Okonkwo'],
      script: 'Moderatorin: Guten Morgen! In unserer Sendung geht es heute um die Frage: Ab wann dürfen Kinder allein zur Schule gehen? '
        + 'Meine Gäste sind Herr Braun, Polizist und Verkehrserzieher, und Frau Okonkwo, Mutter von drei Kindern.\n'
        + 'Herr Braun: Ich empfehle, den Schulweg vorher mehrmals gemeinsam zu üben. Dann wissen die Kinder, wo die gefährlichen Stellen sind.\n'
        + 'Frau Okonkwo: Meine Älteste geht seit der ersten Klasse allein. Sie ist dadurch viel selbstständiger geworden.\n'
        + 'Moderatorin: Viele Eltern bringen ihre Kinder aber mit dem Auto. Warum eigentlich?\n'
        + 'Herr Braun: Gerade diese Autos vor der Schule sind ein großes Problem. Morgens ist dort so viel Verkehr, dass es gefährlich wird.\n'
        + 'Frau Okonkwo: Viele Eltern haben einfach Angst. Das verstehe ich, aber man muss den Kindern auch etwas zutrauen.\n'
        + 'Moderatorin: Dazu haben wir eine Frage von einem Hörer aus Hohenberg.\n'
        + 'Herr Braun: In manchen Städten gibt es Laufgruppen, in denen ein Erwachsener mehrere Kinder abholt. Das funktioniert sehr gut.\n'
        + 'Frau Okonkwo: Bei uns gehen die Kinder aus der Straße zusammen. In der Gruppe macht der Weg auch mehr Spaß.',
      example: ['Thema heute: Wann dürfen Kinder allein zur Schule gehen?', 'a'],
      items: [
        ['Eltern sollten den Weg zuerst mit dem Kind trainieren.', 'b', 'den Schulweg vorher mehrmals gemeinsam zu üben', 'Herr Braun empfiehlt, den Schulweg vorher gemeinsam zu üben.'],
        ['Mein Kind ist durch den Schulweg selbstständiger geworden.', 'c', 'Sie ist dadurch viel selbstständiger geworden.', 'Frau Okonkwo sagt, dass ihre Älteste dadurch selbstständiger geworden ist.'],
        ['Warum fahren viele Eltern ihre Kinder mit dem Auto?', 'a', 'Viele Eltern bringen ihre Kinder aber mit dem Auto. Warum eigentlich?', 'Die Moderatorin fragt, warum Eltern mit dem Auto fahren.'],
        ['Die Autos der Eltern machen die Straße vor der Schule gefährlich.', 'b', 'Gerade diese Autos vor der Schule sind ein großes Problem.', 'Herr Braun sieht die Elternautos vor der Schule als großes Problem.'],
        ['Man muss Kindern auch etwas zutrauen.', 'c', 'aber man muss den Kindern auch etwas zutrauen', 'Frau Okonkwo meint, dass man Kindern etwas zutrauen muss.'],
        ['Ein Hörer hat eine Frage gestellt.', 'a', 'Dazu haben wir eine Frage von einem Hörer aus Hohenberg.', 'Die Moderatorin erwähnt die Frage eines Hörers.'],
        ['Ein Erwachsener kann mehrere Kinder zur Schule begleiten.', 'b', 'in denen ein Erwachsener mehrere Kinder abholt', 'Herr Braun beschreibt Laufgruppen mit einem Erwachsenen.'],
        ['Zusammen zu gehen macht den Kindern mehr Spaß.', 'c', 'In der Gruppe macht der Weg auch mehr Spaß.', 'Frau Okonkwo sagt, dass der Weg in der Gruppe mehr Spaß macht.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben vor einem Monat einen Tanzkurs begonnen. Ihr Freund Sami möchte vielleicht auch mitmachen. Schreiben Sie Sami eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wie läuft der Kurs ab?\n– Begründen Sie: Warum macht Ihnen der Kurs Spaß?\n– Machen Sie einen Vorschlag, wie Sami den Kurs ausprobieren kann.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Fernsehen eine Diskussion zum Thema „Vier-Tage-Woche“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Ingo: In meiner Firma arbeiten wir seit einem Jahr nur noch vier Tage pro Woche, dafür länger am Tag. Ich bin entspannter und habe mehr Zeit für meine Familie. Was halten Sie davon?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Ihr Nachbar, Herr Kraus, hat Ihnen am Wochenende beim Umzug Ihrer Waschmaschine geholfen. Schreiben Sie Herrn Kraus. Bedanken Sie sich und laden Sie ihn zu einem Kaffee ein (circa 40 Wörter).',
      functions: ['thank', 'invite'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ein Freund von Ihnen zieht am Samstag in eine neue Wohnung. Sie möchten ihm zusammen beim Umzug helfen.\n\n– Wann treffen?\n– Transporter?\n– Wer hilft noch?\n– Essen für die Helfer?\n– Was ist sonst noch zu tun?',
      partner: [
        'Partner: Hallo! Wir wollen doch Daniel beim Umzug helfen. Um wie viel Uhr sollen wir uns treffen?',
        'Partner: Okay. Und wie bekommen wir die Möbel in die neue Wohnung – wer besorgt einen Transporter?',
        'Partner: Gut. Sollen wir für die Helfer etwas zu essen machen?'
      ]
    },
    t2: { topics: ['Taschengeld für Kinder – ab welchem Alter?', 'Ein eigenes Haus oder eine Mietwohnung?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin präsentiert das Thema „Ein eigenes Haus oder eine Mietwohnung?“: Sie wohnt zur Miete, weil sie flexibel bleiben will. Später möchte sie aber ein kleines Haus mit Garten kaufen.',
      examinerQuestion: 'Prüferin: Haben Sie als Kind Taschengeld bekommen? Was haben Sie damit gemacht?'
    }
  }
});
