/* SYNTHETIC B1 PRACTICE form P5: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P5 = buildPracticeForm({
  n: 5, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Mein erstes Jahr mit Bienen\n\n'
        + 'Letztes Jahr zu meinem 60. Geburtstag haben mir meine Kinder einen Kurs beim Imkerverein geschenkt. Ich war zuerst skeptisch, denn ich hatte immer etwas Angst vor Bienen. '
        + 'Aber schon nach dem zweiten Treffen war ich begeistert. Der Kurs ging über acht Samstage, und am Ende durfte ich ein eigenes Bienenvolk mit nach Hause nehmen.\n\n'
        + 'Die Bienen stehen jetzt hinten in unserem Garten. Meine Frau war am Anfang nicht glücklich darüber, inzwischen sitzt sie aber gern daneben und schaut zu. '
        + 'Gestochen wurde ich übrigens nur zweimal, beide Male, weil ich ohne Handschuhe gearbeitet habe.\n\n'
        + 'Im Juli habe ich zum ersten Mal Honig geerntet: elf Gläser! Verkaufen möchte ich ihn nicht, ich verschenke ihn lieber an Nachbarn und Freunde. '
        + 'Nächstes Jahr möchte ich ein zweites Volk aufstellen.\n\n'
        + 'Ihr Konrad',
      example: ['Konrad hat einen Imkerkurs als Geschenk bekommen.', 'richtig'],
      items: [
        ['Konrad hatte früher keine Angst vor Bienen.', 'falsch', 'ich hatte immer etwas Angst vor Bienen', 'Konrad hatte immer etwas Angst vor Bienen.'],
        ['Der Kurs fand an mehreren Samstagen statt.', 'richtig', 'Der Kurs ging über acht Samstage', 'Der Kurs ging über acht Samstage.'],
        ['Konrads Frau mag die Bienen inzwischen.', 'richtig', 'inzwischen sitzt sie aber gern daneben und schaut zu', 'Konrads Frau sitzt inzwischen gern bei den Bienen und schaut zu.'],
        ['Konrad wurde gestochen, obwohl er Handschuhe trug.', 'falsch', 'weil ich ohne Handschuhe gearbeitet habe', 'Konrad wurde gestochen, weil er ohne Handschuhe gearbeitet hat.'],
        ['Konrad verkauft seinen Honig auf dem Markt.', 'falsch', 'Verkaufen möchte ich ihn nicht', 'Konrad verkauft den Honig nicht, er verschenkt ihn.'],
        ['Konrad plant, mehr Bienen zu halten.', 'richtig', 'Nächstes Jahr möchte ich ein zweites Volk aufstellen.', 'Konrad möchte nächstes Jahr ein zweites Bienenvolk aufstellen.']
      ]
    },
    t2: [
      {
        text: 'Neues Jugendzentrum im alten Bahnhof\n\nDer alte Bahnhof in Kirchdorf steht seit Jahren leer. Ab Januar wird er zu einem Jugendzentrum. '
          + 'Die Jugendlichen haben die Räume selbst geplant: Es gibt einen Musikraum, eine Werkstatt und ein kleines Café, in dem sie auch selbst arbeiten können. '
          + 'Das Zentrum ist von Dienstag bis Samstag am Nachmittag und Abend geöffnet. Zwei Sozialarbeiter sind immer vor Ort. '
          + 'Einige Anwohner haben Angst vor Lärm, deshalb müssen die Musikproben um 21 Uhr enden.',
        example: ['Der alte Bahnhof …', ['wird ein Jugendzentrum.', 'wird abgerissen.', 'ist wieder ein Bahnhof.'], 'a'],
        items: [
          ['Die Räume des Zentrums …', ['hat ein Architekt allein geplant.', 'haben die Jugendlichen mitgeplant.', 'sind noch nicht fertig geplant.'], 'b', 'Die Jugendlichen haben die Räume selbst geplant', 'Die Jugendlichen haben die Räume selbst geplant.'],
          ['Im Café …', ['können Jugendliche mitarbeiten.', 'gibt es nur Getränke.', 'arbeiten die Sozialarbeiter.'], 'a', 'in dem sie auch selbst arbeiten können', 'Im Café können die Jugendlichen selbst arbeiten.'],
          ['Wegen der Nachbarn …', ['ist das Zentrum sonntags offen.', 'gibt es keinen Musikraum.', 'endet die Musik um 21 Uhr.'], 'c', 'deshalb müssen die Musikproben um 21 Uhr enden', 'Wegen der Angst vor Lärm enden die Musikproben um 21 Uhr.']
        ]
      },
      {
        text: 'Ein Sonntag ohne Autos\n\nAm vergangenen Sonntag war die Hauptstraße in Kirchdorf zum ersten Mal einen ganzen Tag lang für Autos gesperrt. '
          + 'Statt Verkehr gab es Tische mit Essen, Musik und Spiele für Kinder. Organisiert hatte den Tag ein Verein von Anwohnern. '
          + 'Nach Schätzungen der Polizei kamen rund 3 000 Besucher. Auch die Geschäfte waren zufrieden, obwohl sie an diesem Tag nicht öffnen durften: '
          + 'Viele Gäste haben sich die Schaufenster angesehen und wollen wiederkommen. Der Bürgermeister möchte den autofreien Sonntag jetzt zweimal im Jahr anbieten.',
        items: [
          ['Den autofreien Sonntag hat …', ['die Polizei organisiert.', 'ein Verein organisiert.', 'die Stadt organisiert.'], 'b', 'Organisiert hatte den Tag ein Verein von Anwohnern.', 'Ein Verein von Anwohnern hat den Tag organisiert.'],
          ['Die Geschäfte …', ['hatten den ganzen Tag geöffnet.', 'haben sich beschwert.', 'waren trotzdem zufrieden.'], 'c', 'Auch die Geschäfte waren zufrieden, obwohl sie an diesem Tag nicht öffnen durften', 'Die Geschäfte waren zufrieden, obwohl sie nicht öffnen durften.'],
          ['In Zukunft soll es den Tag …', ['nicht mehr geben.', 'jeden Sonntag geben.', 'zweimal pro Jahr geben.'], 'c', 'zweimal im Jahr anbieten', 'Der Bürgermeister möchte den Tag zweimal im Jahr anbieten.']
        ]
      }
    ],
    t3: {
      ads: [
        'Chor sucht Männerstimmen – wir singen Pop und Volkslieder, Probe donnerstags.',
        'Babyschwimmen für Eltern mit Kindern von 6 bis 18 Monaten, warmes Wasser, kleine Gruppen.',
        'Gebrauchte Lehrbücher für die Berufsschule günstig zu verkaufen – Kfz und Elektrotechnik.',
        'Fahrradkurs für Erwachsene: Sie haben nie Rad fahren gelernt? Bei uns klappt es in fünf Terminen.',
        'Englisch-Konversation für Reisende: Ein Abend pro Woche, Schwerpunkt Hotel, Flughafen, Restaurant.',
        'Vegetarisch kochen leicht gemacht: Kochkurs mit einfachen Rezepten für jeden Tag.',
        'Garage zu vermieten in der Lindenallee, ab sofort, 60 Euro im Monat.',
        'Senioren-Fitness: sanfte Gymnastik am Vormittag, Einstieg jederzeit möglich.',
        'Gitarre, Bass, Schlagzeug: Bandprobenraum stundenweise zu mieten, abends und am Wochenende.',
        'Wir suchen Aushilfen für unser Café am Wochenende – auch Studierende und Schüler ab 16.'
      ],
      example: ['Sie singen gern und suchen als Mann einen Chor.', 'a'],
      situations: [
        ['Sie fliegen bald in die USA und möchten vorher Englisch für den Urlaub üben.', 'e', 'Schwerpunkt Hotel, Flughafen, Restaurant', 'Der Englisch-Abend (e) ist für Reisende und übt Hotel, Flughafen und Restaurant.'],
        ['Sie essen seit Kurzem kein Fleisch mehr und brauchen neue Ideen fürs Kochen.', 'f', 'Vegetarisch kochen leicht gemacht', 'Der Kochkurs (f) zeigt einfache vegetarische Rezepte.'],
        ['Ihre Tochter ist ein Jahr alt, und Sie möchten mit ihr ins Wasser.', 'b', 'Babyschwimmen für Eltern mit Kindern von 6 bis 18 Monaten', 'Das Babyschwimmen (b) ist für Kinder von 6 bis 18 Monaten.'],
        ['Ihre Band sucht einen Raum, in dem sie laut proben kann.', 'i', 'Bandprobenraum stundenweise zu mieten', 'Den Bandprobenraum (i) kann man stundenweise mieten.'],
        ['Sie sind 17 und suchen einen Job für Samstag und Sonntag.', 'j', 'Schüler ab 16', 'Das Café (j) sucht Aushilfen am Wochenende, auch Schüler ab 16.'],
        ['Sie möchten Ihr Auto nachts nicht mehr auf der Straße parken.', 'g', 'Garage zu vermieten', 'Die Garage (g) ist ab sofort zu vermieten.'],
        ['Sie machen eine Ausbildung zur Bürokauffrau und suchen günstige Bücher dafür.', '0', 'Kfz und Elektrotechnik', 'Die Bücher (c) sind nur für Kfz und Elektrotechnik, nicht für Büroberufe: 0.', 'c']
      ]
    },
    t4: {
      topic: 'Auf der Internetseite einer Zeitung wird gefragt: Sollen Schülerinnen und Schüler eine Schuluniform tragen?',
      question: 'Ist die Person für eine Schuluniform?',
      comments: [
        ['Johanna, 44', 'Bei uns gibt es jeden Morgen Streit, was meine Tochter anziehen soll. Mit einer Uniform wäre das vorbei. Ich bin dafür.', 'ja'],
        ['Emre, 16', 'Kleidung zeigt, wer ich bin. Wenn alle gleich aussehen, ist das langweilig. Ich will das nicht.', 'nein', 'Ich will das nicht.', 'Emre möchte mit seiner Kleidung zeigen, wer er ist.'],
        ['Brigitte, 52', 'Ich unterrichte an einer Schule mit Schulkleidung. Seitdem gibt es weniger Mobbing wegen teurer Marken. Das ist ein großer Vorteil.', 'ja', 'Das ist ein großer Vorteil.', 'Brigitte sieht weniger Mobbing wegen teurer Marken als großen Vorteil.'],
        ['Tarek, 39', 'Die Uniformen kosten viel Geld, und Kinder wachsen schnell. Für Familien mit wenig Geld wird das teuer. Deshalb halte ich nichts davon.', 'nein', 'Deshalb halte ich nichts davon.', 'Tarek findet Uniformen für Familien mit wenig Geld zu teuer.'],
        ['Lina, 15', 'Ehrlich gesagt fände ich es praktisch. Ich müsste morgens nicht lange überlegen und hätte mehr Zeit zum Schlafen.', 'ja', 'Ehrlich gesagt fände ich es praktisch.', 'Lina fände eine Uniform praktisch, weil sie morgens Zeit spart.'],
        ['Walter, 68', 'Zu meiner Zeit gab es so etwas nicht, und wir haben trotzdem gut gelernt. Die Schule hat wichtigere Aufgaben.', 'nein', 'Die Schule hat wichtigere Aufgaben.', 'Walter meint, dass die Schule wichtigere Aufgaben hat.'],
        ['Chiara, 31', 'In meiner Heimat tragen alle Kinder eine Uniform, und sie sind stolz auf ihre Schule. Das würde ich mir hier auch wünschen.', 'ja', 'Das würde ich mir hier auch wünschen.', 'Chiara wünscht sich Schuluniformen wie in ihrer Heimat.'],
        ['Felix, 27', 'Statt Uniform reicht doch ein T-Shirt mit dem Logo der Schule für Ausflüge. Eine komplette Uniform finde ich übertrieben.', 'nein', 'Eine komplette Uniform finde ich übertrieben.', 'Felix findet eine komplette Uniform übertrieben.']
      ]
    },
    t5: {
      context: 'Sie sind neu in einer Hausarztpraxis und lesen die Hinweise für Patientinnen und Patienten.',
      text: 'Hinweise der Hausarztpraxis Dr. Sander\n\n'
        + '1. Termine: Termine vergeben wir telefonisch oder online. Ohne Termin kommen Sie bitte nur in die offene Sprechstunde am Montag von 8 bis 10 Uhr.\n\n'
        + '2. Rezepte: Wiederholungsrezepte können Sie per E-Mail bestellen. Sie liegen nach zwei Werktagen an der Anmeldung für Sie bereit.\n\n'
        + '3. Absagen: Wenn Sie einen Termin nicht wahrnehmen können, sagen Sie bitte mindestens 24 Stunden vorher ab.\n\n'
        + '4. Infekte: Mit Fieber oder Husten melden Sie sich bitte zuerst am Telefon. Sie bekommen dann einen Termin in der Infektsprechstunde.',
      items: [
        ['Ohne Termin kann man …', ['jeden Tag kommen.', 'am Montagmorgen kommen.', 'nur am Abend kommen.'], 'b', 'Ohne Termin kommen Sie bitte nur in die offene Sprechstunde am Montag von 8 bis 10 Uhr.', 'Regel 1: Ohne Termin kommt man nur montags von 8 bis 10 Uhr.'],
        ['Ein Wiederholungsrezept …', ['bekommt man nur beim Arzt persönlich.', 'wird nach Hause geschickt.', 'kann man nach zwei Werktagen abholen.'], 'c', 'Sie liegen nach zwei Werktagen an der Anmeldung für Sie bereit.', 'Regel 2: Das Rezept liegt nach zwei Werktagen an der Anmeldung.'],
        ['Einen Termin sollte man …', ['einen Tag vorher absagen.', 'eine Stunde vorher absagen.', 'nicht absagen.'], 'a', 'mindestens 24 Stunden vorher ab', 'Regel 3: Man sagt mindestens 24 Stunden vorher ab.'],
        ['Wer Fieber hat, …', ['kommt direkt in die Praxis.', 'ruft zuerst an.', 'geht ins Krankenhaus.'], 'b', 'Mit Fieber oder Husten melden Sie sich bitte zuerst am Telefon.', 'Regel 4: Mit Fieber meldet man sich zuerst am Telefon.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Freizeitpark: Liebe Gäste, die Achterbahn ist wegen einer technischen Prüfung bis 13 Uhr geschlossen. Alle anderen Fahrgeschäfte sind geöffnet.',
        rf: ['Die Achterbahn ist am Vormittag geschlossen.', 'richtig'], mc: ['Der Grund ist …', ['das Wetter.', 'eine technische Prüfung.', 'zu viele Besucher.'], 'b'] },
      texts: [
        { script: 'Nachricht vom Friseur: Hallo, Frau Petrović, hier ist der Salon Haarmonie. Ihre Friseurin ist morgen leider krank. Wir können Ihnen aber einen Termin am Samstag um zehn Uhr anbieten. Bitte sagen Sie uns kurz Bescheid.',
          rf: ['Frau Petrović kann morgen zum Friseur gehen.', 'falsch', 'Ihre Friseurin ist morgen leider krank', 'Die Friseurin ist morgen krank, der Termin fällt aus.'],
          mc: ['Der Salon bietet einen Termin …', ['am Samstag an.', 'am Montag an.', 'am Abend an.'], 'a', 'einen Termin am Samstag um zehn Uhr anbieten', 'Der Salon bietet Samstag um zehn Uhr an.'] },
        { script: 'Nachricht vom Vermieter: Guten Tag, hier spricht Herr Albrecht. Morgen zwischen acht und zwölf Uhr gibt es im ganzen Haus kein Wasser, weil eine Leitung repariert wird. Bitte füllen Sie sich vorher ein paar Flaschen ab.',
          rf: ['Morgen Vormittag gibt es kein Wasser.', 'richtig', 'Morgen zwischen acht und zwölf Uhr gibt es im ganzen Haus kein Wasser', 'Morgen von acht bis zwölf Uhr gibt es kein Wasser.'],
          mc: ['Die Mieter sollen …', ['zu Hause bleiben.', 'Wasser in Flaschen bereithalten.', 'den Hausmeister anrufen.'], 'b', 'Bitte füllen Sie sich vorher ein paar Flaschen ab.', 'Herr Albrecht bittet die Mieter, Wasser in Flaschen abzufüllen.'] },
        { script: 'Durchsage im Museum: Liebe Besucherinnen und Besucher, das Museum schließt in fünfzehn Minuten. Die Garderobe im Untergeschoss ist noch bis 18.30 Uhr geöffnet. Der Museumsladen hat bereits geschlossen.',
          rf: ['Das Museum schließt bald.', 'richtig', 'das Museum schließt in fünfzehn Minuten', 'Das Museum schließt in fünfzehn Minuten.'],
          mc: ['Der Museumsladen …', ['ist bis 18.30 Uhr offen.', 'ist im Untergeschoss.', 'ist schon zu.'], 'c', 'Der Museumsladen hat bereits geschlossen.', 'Der Museumsladen hat bereits geschlossen.'] },
        { script: 'Nachricht von einem Kollegen: Hi Svenja, hier ist Ralf. Der Drucker im zweiten Stock ist schon wieder kaputt. Kannst du für die Präsentation morgen die Unterlagen im Copyshop drucken lassen? Die Rechnung bezahlt die Firma.',
          rf: ['Der Drucker funktioniert wieder.', 'falsch', 'Der Drucker im zweiten Stock ist schon wieder kaputt.', 'Der Drucker ist wieder kaputt.'],
          mc: ['Svenja soll …', ['einen neuen Drucker kaufen.', 'die Präsentation verschieben.', 'im Copyshop drucken lassen.'], 'c', 'die Unterlagen im Copyshop drucken lassen', 'Ralf bittet Svenja, im Copyshop drucken zu lassen.'] },
        { script: 'Werbung im Radio: Großer Umbau im Möbelhaus Holzwurm! Bis Samstag bekommen Sie auf alle Sofas dreißig Prozent Rabatt. Lieferung und Aufbau sind in diesen Tagen kostenlos. Wir freuen uns auf Ihren Besuch.',
          rf: ['Im Möbelhaus sind alle Möbel billiger.', 'falsch', 'auf alle Sofas dreißig Prozent Rabatt', 'Den Rabatt gibt es nur auf Sofas.'],
          mc: ['Bis Samstag ist …', ['die Lieferung kostenlos.', 'das Möbelhaus geschlossen.', 'der Parkplatz gesperrt.'], 'a', 'Lieferung und Aufbau sind in diesen Tagen kostenlos.', 'Lieferung und Aufbau sind bis Samstag kostenlos.'] }
      ]
    },
    t2: {
      context: 'Sie kommen auf einem Campingplatz an und hören die Informationen an der Rezeption.',
      script: 'Willkommen auf dem Campingplatz Seewiese! Ihren Platz finden Sie auf dem Plan, den Sie gleich bekommen. '
        + 'Autos parken Sie bitte auf dem großen Parkplatz am Eingang, nicht neben dem Zelt. Frische Brötchen können Sie jeden Abend bis 20 Uhr für den nächsten Morgen bestellen. '
        + 'Von 22 Uhr bis 7 Uhr ist Nachtruhe. Bei Gewitter dürfen Sie nicht im See schwimmen.',
      items: [
        ['Den Plan des Campingplatzes …', ['findet man im Internet.', 'bekommt man an der Rezeption.', 'hängt am Eingang.'], 'b', 'Ihren Platz finden Sie auf dem Plan, den Sie gleich bekommen.', 'Den Plan bekommen die Gäste gleich an der Rezeption.'],
        ['Die Autos parkt man …', ['neben dem Zelt.', 'am See.', 'am Eingang.'], 'c', 'auf dem großen Parkplatz am Eingang', 'Autos parkt man auf dem Parkplatz am Eingang.'],
        ['Brötchen für das Frühstück …', ['bestellt man am Abend vorher.', 'kauft man im Dorf.', 'gibt es nicht.'], 'a', 'jeden Abend bis 20 Uhr für den nächsten Morgen bestellen', 'Brötchen bestellt man am Abend für den nächsten Morgen.'],
        ['Nachtruhe ist …', ['ab 20 Uhr.', 'ab 22 Uhr.', 'ab Mitternacht.'], 'b', 'Von 22 Uhr bis 7 Uhr ist Nachtruhe.', 'Die Nachtruhe beginnt um 22 Uhr.'],
        ['Bei Gewitter …', ['ist das Schwimmen verboten.', 'schließt die Rezeption.', 'muss man ins Auto gehen.'], 'a', 'Bei Gewitter dürfen Sie nicht im See schwimmen.', 'Bei Gewitter darf man nicht im See schwimmen.']
      ]
    },
    t3: {
      context: 'Sie sitzen in einem Wartezimmer und hören, wie sich zwei Geschwister unterhalten.',
      script: 'Jana: Max, gut, dass ich dich hier treffe! Hast du schon mit Mama über Omas Geburtstag gesprochen?\n'
        + 'Max: Ja, gestern. Oma wird achtzig, und sie möchte keine große Feier. Nur die Familie, zu Hause bei ihr.\n'
        + 'Jana: Schade, ich hätte gern ein Restaurant reserviert. Und was schenken wir ihr?\n'
        + 'Max: Mama meint, Oma wünscht sich ein Fotoalbum mit Bildern von uns allen. Ich kann die Fotos sammeln.\n'
        + 'Jana: Super, dann kümmere ich mich um den Kuchen. Oma liebt doch Apfelkuchen.\n'
        + 'Max: Genau. Kommst du am Samstag mit dem Zug?\n'
        + 'Jana: Nein, diesmal fahre ich mit dem Auto, dann kann ich auf dem Rückweg Tante Rosi mitnehmen.\n'
        + 'Max: Gute Idee. Ich bin schon am Freitag da und helfe Oma beim Aufräumen.',
      items: [
        ['Die Großmutter möchte ein großes Fest.', 'falsch', 'sie möchte keine große Feier', 'Die Oma möchte keine große Feier.'],
        ['Die Familie feiert in einem Restaurant.', 'falsch', 'zu Hause bei ihr', 'Die Familie feiert bei der Oma zu Hause.'],
        ['Max sammelt Fotos für ein Album.', 'richtig', 'Ich kann die Fotos sammeln.', 'Max bietet an, die Fotos für das Album zu sammeln.'],
        ['Jana bringt einen Kuchen mit.', 'richtig', 'dann kümmere ich mich um den Kuchen', 'Jana kümmert sich um den Kuchen.'],
        ['Jana fährt diesmal mit dem Zug.', 'falsch', 'diesmal fahre ich mit dem Auto', 'Jana fährt diesmal mit dem Auto.'],
        ['Jana nimmt auf dem Rückweg eine Tante mit.', 'richtig', 'dann kann ich auf dem Rückweg Tante Rosi mitnehmen', 'Jana nimmt auf dem Rückweg Tante Rosi mit.'],
        ['Max kommt schon vor dem Geburtstag zur Großmutter.', 'richtig', 'Ich bin schon am Freitag da', 'Max ist schon am Freitag da und hilft beim Aufräumen.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Weber', 'Frau Lindner'],
      script: 'Moderatorin: Guten Abend! Immer mehr Menschen bezahlen mit Karte oder Handy. Brauchen wir überhaupt noch Bargeld? '
        + 'Meine Gäste sind Herr Weber, er hat eine Bäckerei, und Frau Lindner von einer Beratungsstelle für Verbraucher.\n'
        + 'Herr Weber: In meiner Bäckerei zahlen morgens fast alle bar. Für ein Brötchen holt niemand gern die Karte heraus.\n'
        + 'Frau Lindner: Das stimmt, aber für viele junge Leute ist das Handy schon die Geldbörse. Sie haben kaum noch Münzen dabei.\n'
        + 'Moderatorin: Was ist denn mit der Sicherheit?\n'
        + 'Frau Lindner: Wer bar zahlt, hinterlässt keine Daten. Das ist für mich ein wichtiger Grund, Bargeld zu behalten.\n'
        + 'Herr Weber: Für mich ist das Bargeld aber auch Arbeit. Abends muss ich die Kasse zählen und das Geld zur Bank bringen.\n'
        + 'Moderatorin: Zu diesem Thema hat uns eine Zuschauerin geschrieben.\n'
        + 'Frau Lindner: Ältere Menschen kommen mit Bargeld oft besser zurecht. Niemand darf ausgeschlossen werden.\n'
        + 'Herr Weber: Die Gebühren für Kartenzahlungen sind für kleine Geschäfte wie meins leider ziemlich hoch.',
      example: ['Unser Thema ist die Frage, ob wir noch Bargeld brauchen.', 'a'],
      items: [
        ['Morgens bezahlen die meisten Kunden mit Münzen und Scheinen.', 'b', 'In meiner Bäckerei zahlen morgens fast alle bar.', 'Herr Weber sagt, dass morgens fast alle bar bezahlen.'],
        ['Viele junge Menschen zahlen mit dem Telefon.', 'c', 'für viele junge Leute ist das Handy schon die Geldbörse', 'Frau Lindner sagt, dass für junge Leute das Handy die Geldbörse ist.'],
        ['Wie sicher ist das Bezahlen?', 'a', 'Was ist denn mit der Sicherheit?', 'Die Moderatorin fragt nach der Sicherheit.'],
        ['Mit Bargeld gibt man keine Daten weiter.', 'c', 'Wer bar zahlt, hinterlässt keine Daten.', 'Frau Lindner nennt den Datenschutz als Grund für Bargeld.'],
        ['Bargeld macht am Abend zusätzliche Arbeit.', 'b', 'Abends muss ich die Kasse zählen', 'Herr Weber muss abends die Kasse zählen und zur Bank gehen.'],
        ['Eine Zuschauerin hat uns eine Nachricht geschickt.', 'a', 'Zu diesem Thema hat uns eine Zuschauerin geschrieben.', 'Die Moderatorin erwähnt die Nachricht einer Zuschauerin.'],
        ['Auch ältere Menschen müssen gut bezahlen können.', 'c', 'Niemand darf ausgeschlossen werden.', 'Frau Lindner sagt, dass ältere Menschen nicht ausgeschlossen werden dürfen.'],
        ['Kartenzahlungen kosten kleine Läden viel Geld.', 'b', 'Die Gebühren für Kartenzahlungen sind für kleine Geschäfte wie meins leider ziemlich hoch.', 'Herr Weber findet die Gebühren für Kartenzahlungen zu hoch.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie waren am Samstag auf der Hochzeit Ihrer Cousine. Ihr Freund Daniel kennt Ihre Cousine auch, konnte aber nicht kommen. Schreiben Sie Daniel eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wie war die Hochzeit?\n– Begründen Sie: Was war für Sie der schönste Moment?\n– Schlagen Sie vor, wann Sie zusammen die Fotos anschauen.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Radiosendung eine Diskussion zum Thema „Werbung für Kinder“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Stefan: Meine Kinder sehen im Fernsehen und im Internet ständig Werbung für Spielzeug und Süßigkeiten. Danach wollen sie alles haben. Werbung für Kinder sollte verboten werden. Was denken Sie?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie möchten Ihr Fahrrad im Keller Ihres Wohnhauses abstellen. Schreiben Sie Ihrem Vermieter, Herrn Szabo. Fragen Sie höflich, ob das erlaubt ist, und erklären Sie, warum Sie das möchten (circa 40 Wörter).',
      functions: ['request', 'justify'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ihre Firma möchte im Sommer einen Sporttag für alle Mitarbeiterinnen und Mitarbeiter machen. Sie planen den Tag zusammen.\n\n– Welcher Tag?\n– Welche Sportarten?\n– Wo?\n– Essen?\n– Preise für die Sieger?',
      partner: [
        'Partner: Hallo! Wir sollen doch den Sporttag für die Firma planen. Welche Sportarten könnten wir anbieten?',
        'Partner: Gute Idee. Und wo könnten wir das machen – hast du einen Vorschlag?',
        'Partner: In Ordnung. Sollen die Sieger einen Preis bekommen?'
      ]
    },
    t2: { topics: ['Im Internet oder im Geschäft einkaufen?', 'Frühstück – die wichtigste Mahlzeit des Tages?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin präsentiert das Thema „Frühstück – die wichtigste Mahlzeit des Tages?“: Sie frühstückt jeden Tag mit der Familie, weil sie sonst keine Energie hat. Ihr Mann trinkt dagegen nur einen Kaffee.',
      examinerQuestion: 'Prüferin: Was haben Sie zuletzt im Internet gekauft, und waren Sie zufrieden?'
    }
  }
});
