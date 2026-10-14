/* SYNTHETIC B1 PRACTICE form P4: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P4 = buildPracticeForm({
  n: 4, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Liebe Carla,\n\n'
        + 'wir sind gerade von unserem Urlaub auf einem Bauernhof zurück, und ich muss dir unbedingt davon erzählen! Eigentlich wollten wir ans Meer, '
        + 'aber die Ferienwohnungen dort waren viel zu teuer. Also sind wir eine Woche ins Hügelland gefahren, nur zwei Stunden von uns entfernt.\n\n'
        + 'Die Kinder waren jeden Morgen schon um sieben Uhr im Stall, weil sie beim Füttern der Kälber helfen durften. Mein Mann hat sogar gelernt, '
        + 'wie man Käse macht – der Bauer bietet dafür einmal pro Woche einen Kurs an. Ich selbst habe vor allem gelesen und lange Spaziergänge gemacht.\n\n'
        + 'Nur das Wetter war nicht so schön: Es hat fast jeden Tag ein bisschen geregnet. Aber das hat niemanden gestört. '
        + 'Für die Herbstferien haben wir schon wieder gebucht, diesmal zusammen mit meinen Eltern.\n\n'
        + 'Herzliche Grüße\nAna',
      example: ['Ana war mit ihrer Familie auf einem Bauernhof.', 'richtig'],
      items: [
        ['Die Familie hat zuerst einen Urlaub am Meer geplant.', 'richtig', 'Eigentlich wollten wir ans Meer', 'Ana schreibt, dass sie eigentlich ans Meer fahren wollten.'],
        ['Für die Fahrt zum Bauernhof brauchte die Familie einen ganzen Tag.', 'falsch', 'nur zwei Stunden von uns entfernt', 'Ana betont, dass der Hof nur zwei Autostunden entfernt liegt, für die Fahrt reichte also ein kleiner Teil des Tages.'],
        ['Die Kinder haben morgens bei den Tieren geholfen.', 'richtig', 'weil sie beim Füttern der Kälber helfen durften', 'Die Kinder durften morgens beim Füttern der Kälber helfen.'],
        ['Anas Mann hat auf dem Hof gelernt, Brot zu backen.', 'falsch', 'wie man Käse macht', 'Anas Mann hat gelernt, Käse zu machen, nicht Brot zu backen.'],
        ['In dieser Woche war das Wetter meistens schön.', 'falsch', 'Es hat fast jeden Tag ein bisschen geregnet.', 'Ana schreibt von Regen an fast jedem Tag, von schönem Wetter kann also keine Rede sein.'],
        ['In den Herbstferien fährt Ana mit ihren Eltern auf den Hof.', 'richtig', 'diesmal zusammen mit meinen Eltern', 'Für die Herbstferien hat Ana zusammen mit ihren Eltern gebucht.']
      ]
    },
    t2: [
      {
        text: '500 neue Bäume für die Innenstadt\n\nIn den nächsten drei Jahren will die Stadt Rosenfeld 500 Bäume in der Innenstadt pflanzen. '
          + 'Die Bäume sollen im Sommer Schatten geben und die Luft in den Straßen kühler machen. Die ersten 80 Bäume kommen schon im November auf den Bahnhofsplatz. '
          + 'Bürgerinnen und Bürger können außerdem eine Patenschaft für einen Baum übernehmen: Sie gießen ihn im Sommer regelmäßig und bekommen dafür ein kleines Schild mit ihrem Namen. '
          + 'Einige Geschäftsleute haben Sorge, dass dafür Parkplätze wegfallen.',
        label: 'aus einer Lokalzeitung (erfunden)',
        example: ['Die Stadt Rosenfeld möchte …', ['neue Bäume pflanzen.', 'alte Bäume fällen.', 'einen Park schließen.'], 'a'],
        items: [
          ['Die Bäume sollen vor allem …', ['den Verkehr langsamer machen.', 'die Stadt im Sommer kühler machen.', 'Vögel in die Stadt bringen.'], 'b', 'die Luft in den Straßen kühler machen', 'Die Bäume sollen Schatten geben und die Luft kühler machen.'],
          ['Wer eine Baumpatenschaft übernimmt, …', ['zahlt einen festen Betrag.', 'muss den Baum selbst pflanzen.', 'gießt den Baum im Sommer.'], 'c', 'Sie gießen ihn im Sommer regelmäßig', 'Paten gießen ihren Baum im Sommer regelmäßig.'],
          ['Manche Geschäftsleute …', ['befürchten weniger Parkplätze.', 'spenden Geld für die Bäume.', 'wollen selbst Paten werden.'], 'a', 'Einige Geschäftsleute haben Sorge, dass dafür Parkplätze wegfallen.', '„Sorge, dass Parkplätze wegfallen“ heißt, dass die Geschäftsleute weniger Parkplätze befürchten.']
        ]
      },
      {
        text: 'Lesepaten in der Kita\n\nIn der Kita „Sonnenblume“ kommen seit einem halben Jahr jeden Dienstag drei Seniorinnen und Senioren zum Vorlesen. '
          + 'Die Idee stammt von der Leiterin der Kita, die selbst gern mit ihrer Großmutter gelesen hat. Die Kinder hören in kleinen Gruppen zu und dürfen die Bücher selbst aussuchen. '
          + 'Besonders beliebt sind Geschichten über Tiere. Die Lesepaten bekommen kein Geld, aber jedes Jahr ein gemeinsames Fest. '
          + 'Weil die Nachfrage so groß ist, sucht die Kita noch weitere Freiwillige.',
        label: 'aus einer Lokalzeitung (erfunden)',
        items: [
          ['Die Idee für die Lesepaten hatte …', ['ein Großvater.', 'die Leiterin der Kita.', 'eine Bibliothekarin.'], 'b', 'Die Idee stammt von der Leiterin der Kita', 'Nicht ein Großvater oder eine Bibliothekarin, sondern die Kita-Leiterin hatte die Idee, weil sie selbst gern mit ihrer Oma gelesen hat.'],
          ['Die Bücher …', ['wählen die Kinder selbst aus.', 'bringen die Eltern mit.', 'sind nur über Tiere.'], 'a', 'dürfen die Bücher selbst aussuchen', 'Die Kinder bekommen keine Bücher vorgegeben, sie suchen sie selbst aus.'],
          ['Die Kita sucht …', ['eine neue Leiterin.', 'Spenden für Bücher.', 'noch mehr Lesepaten.'], 'c', 'sucht die Kita noch weitere Freiwillige', 'Wegen der großen Nachfrage sucht die Kita weitere Freiwillige.']
        ]
      }
    ],
    t3: {
      ads: [
        'Kletterhalle Nordwand: Schnupperkurs für Erwachsene ohne Erfahrung, Ausrüstung kann geliehen werden.',
        'Deutsch im Beruf: Abendkurs für Pflegekräfte – Gespräche mit Patienten und Dokumentation üben.',
        'Flohmarkt im Schulhof am 3. Mai: Standplätze für Privatleute noch frei, Anmeldung im Sekretariat.',
        'Spieleabend im Café Würfel: Brettspiele für Erwachsene, jeden Mittwoch, Spiele sind vorhanden.',
        'Fahrgemeinschaft gesucht: Wer fährt werktags morgens von Rosenfeld nach Altstetten? Benzinkosten teilen wir.',
        'WG-Zimmer frei: 14 m², möbliert, in einer ruhigen Dreier-WG, nur für Nichtraucher.',
        'Kinderturnen für Drei- bis Fünfjährige: Bewegung, Spiel und Spaß, samstagvormittags.',
        'Malkurs Aquarell: Landschaften malen, für Anfänger und Fortgeschrittene, Material bitte mitbringen.',
        'Handy kaputt? Schnelle Reparatur von Displays und Akkus, oft in einer Stunde fertig.',
        'Nachhilfe Französisch für Schülerinnen und Schüler der Oberstufe, auch online.'
      ],
      example: ['Sie möchten einmal ausprobieren, an einer Kletterwand zu klettern.', 'a'],
      situations: [
        ['Ihr Smartphone-Display ist kaputt und Sie brauchen das Telefon schnell wieder.', 'i', 'oft in einer Stunde fertig', 'Die Handyreparatur (i) repariert Displays, oft in einer Stunde.'],
        ['Sie arbeiten als Pflegerin und möchten Ihr Deutsch für die Arbeit verbessern.', 'b', 'Abendkurs für Pflegekräfte', 'Der Kurs „Deutsch im Beruf“ (b) ist für Pflegekräfte.'],
        ['Ihr Sohn ist vier Jahre alt und soll sich am Wochenende mehr bewegen.', 'g', 'Kinderturnen für Drei- bis Fünfjährige', 'Das Kinderturnen (g) ist für Drei- bis Fünfjährige und findet samstags statt.'],
        ['Sie möchten Ihre alten Bücher und Spielsachen verkaufen.', 'c', 'Standplätze für Privatleute noch frei', 'Beim Flohmarkt (c) können Privatleute einen Stand bekommen.'],
        ['Sie suchen eine Wohnung für sich und Ihre Familie mit zwei Kindern.', '0', 'WG-Zimmer frei', 'Es gibt nur ein WG-Zimmer (f), keine Wohnung für eine Familie: 0.', 'f'],
        ['Sie fahren jeden Morgen allein mit dem Auto zur Arbeit nach Altstetten und möchten Kosten sparen.', 'e', 'Benzinkosten teilen wir', 'Die Fahrgemeinschaft (e) fährt nach Altstetten und teilt die Benzinkosten.'],
        ['Sie suchen Leute, mit denen Sie abends Gesellschaftsspiele spielen können.', 'd', 'Brettspiele für Erwachsene, jeden Mittwoch', 'Beim Spieleabend (d) spielen Erwachsene jeden Mittwoch Brettspiele.']
      ]
    },
    t4: {
      topic: 'In einer Wochenzeitung wird gefragt: Sollen Museen keinen Eintritt mehr kosten?',
      question: 'Ist die Person für freien Eintritt in Museen?',
      comments: [
        ['Greta, 24', 'Als Studentin habe ich wenig Geld. Wenn Museen nichts kosten, gehe ich bestimmt öfter hin. Ich bin sehr dafür.', 'ja'],
        ['Bernd, 58', 'Kunst und Geschichte gehören allen. Gerade Familien mit Kindern sollten nicht wegen des Preises zu Hause bleiben. Ich finde freien Eintritt richtig.', 'ja', 'Ich finde freien Eintritt richtig.', 'Bernd möchte, dass auch Familien ohne viel Geld ins Museum gehen können.'],
        ['Yasemin, 41', 'Ich arbeite in einem kleinen Museum. Ohne die Eintrittsgelder könnten wir keine neuen Ausstellungen bezahlen. Deshalb bin ich dagegen.', 'nein', 'Deshalb bin ich dagegen.', 'Yasemin braucht die Eintrittsgelder für neue Ausstellungen.'],
        ['Ole, 33', 'Was nichts kostet, ist auch nichts wert – so denken leider viele. Ich zahle gern ein paar Euro, dann schätze ich den Besuch mehr.', 'nein', 'Ich zahle gern ein paar Euro', 'Ole zahlt lieber Eintritt, weil man dann den Besuch mehr schätzt.'],
        ['Helga, 70', 'Für Rentnerinnen wie mich gibt es schon Ermäßigungen. Aber wenn alle kostenlos hineinkommen, wird es sehr voll. Das gefällt mir nicht.', 'nein', 'Das gefällt mir nicht.', 'Helga befürchtet, dass es bei freiem Eintritt zu voll wird.'],
        ['Dariusz, 46', 'In meiner Heimat sind viele große Museen frei, und sie sind voller junger Leute. Das wünsche ich mir hier auch.', 'ja', 'Das wünsche ich mir hier auch.', 'Dariusz kennt freie Museen aus seiner Heimat und wünscht sich das auch hier.'],
        ['Sophie, 19', 'Die Stadt hat für so etwas kein Geld, die Schwimmbäder sind ja schon kaputt. Zuerst sollte man diese Probleme lösen.', 'nein', 'Zuerst sollte man diese Probleme lösen.', 'Sophie meint, dass die Stadt zuerst andere Probleme lösen soll.'],
        ['Malik, 37', 'Ein kostenloser Sonntag im Monat wäre schon ein guter Anfang. So lernen auch Menschen das Museum kennen, die sonst nie hingehen würden.', 'ja', 'wäre schon ein guter Anfang', 'Malik findet einen kostenlosen Sonntag im Monat einen guten Anfang.']
      ]
    },
    t5: {
      context: 'Sie möchten im Urlaub ein Fahrrad leihen und lesen die Bedingungen des Verleihs.',
      text: 'Mietbedingungen – Fahrradverleih am Seeufer\n\n'
        + '1. Ausweis: Bei der Ausleihe hinterlegen Sie einen Personalausweis oder Reisepass. Sie bekommen ihn bei der Rückgabe zurück.\n\n'
        + '2. Zeiten: Die Räder müssen bis 19 Uhr zurückgebracht werden. Wer später kommt, zahlt einen weiteren Tag.\n\n'
        + '3. Schäden: Kleine Reparaturen wie einen Platten übernehmen wir. Für größere Schäden, die Sie verursacht haben, zahlen Sie selbst.\n\n'
        + '4. Kinder: Kindersitze und Helme leihen wir kostenlos aus. Bitte reservieren Sie diese mindestens einen Tag vorher.',
      items: [
        ['Bei der Ausleihe muss man …', ['einen Ausweis abgeben.', 'eine Kaution in bar bezahlen.', 'ein Formular online ausfüllen.'], 'a', 'hinterlegen Sie einen Personalausweis oder Reisepass', '„Hinterlegen“ bedeutet, dass man den Ausweis beim Verleih lässt und ihn bei der Rückgabe zurückbekommt.'],
        ['Wer das Fahrrad erst um 20 Uhr zurückbringt, …', ['muss nichts extra bezahlen.', 'bezahlt für einen zusätzlichen Tag.', 'darf kein Rad mehr leihen.'], 'b', 'Wer später kommt, zahlt einen weiteren Tag.', 'Die Räder müssen bis 19 Uhr zurück sein, wer um 20 Uhr kommt, zahlt nach Regel 2 einen weiteren Tag.'],
        ['Einen platten Reifen …', ['muss man selbst reparieren.', 'bezahlt man selbst.', 'repariert der Verleih.'], 'c', 'Kleine Reparaturen wie einen Platten übernehmen wir.', 'Ein platter Reifen zählt zu den kleinen Reparaturen, und die macht nach Regel 3 der Verleih.'],
        ['Kindersitze …', ['kosten einen kleinen Betrag.', 'sollte man vorher reservieren.', 'gibt es nicht.'], 'b', 'Bitte reservieren Sie diese mindestens einen Tag vorher.', 'Kindersitze sind zwar kostenlos, müssen nach Regel 4 aber spätestens am Vortag bestellt werden.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage auf der Fähre: Liebe Fahrgäste, wir erreichen in wenigen Minuten den Hafen von Seeburg. Bitte gehen Sie noch nicht zu Ihren Autos.',
        rf: ['Die Fähre kommt bald an.', 'richtig'], mc: ['Die Fahrgäste sollen …', ['zu ihren Autos gehen.', 'noch warten.', 'ihre Tickets zeigen.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Kita: Guten Tag, Frau Neumann, hier ist Frau Heller aus der Kita. Der Elternabend findet nicht am Mittwoch, sondern schon am Dienstag um 19 Uhr statt. Bitte bringen Sie, wenn möglich, einen kleinen Kuchen mit.',
          rf: ['Der Elternabend ist am Mittwoch.', 'falsch', 'nicht am Mittwoch, sondern schon am Dienstag', 'Der Elternabend findet schon am Dienstag statt.'],
          mc: ['Frau Neumann soll …', ['einen Kuchen mitbringen.', 'Frau Heller anrufen.', 'ihr Kind früher abholen.'], 'a', 'Bitte bringen Sie, wenn möglich, einen kleinen Kuchen mit.', 'Frau Heller bittet Frau Neumann, für den Elternabend nach Möglichkeit einen kleinen Kuchen zu backen oder zu kaufen.'] },
        { script: 'Radiotipp: Am Sonntag gibt es in der Markthalle einen großen Flohmarkt für Kindersachen. Verkaufen dürfen nur Privatleute. Der Markt beginnt um zehn Uhr, und das Parkhaus nebenan ist an diesem Tag kostenlos.',
          rf: ['Auf dem Flohmarkt verkaufen auch Geschäfte.', 'falsch', 'Verkaufen dürfen nur Privatleute.', 'Der Radiotipp erlaubt das Verkaufen ausdrücklich nur Privatleuten, Händler und Läden sind ausgeschlossen.'],
          mc: ['Am Sonntag …', ['kostet das Parkhaus nichts.', 'ist die Markthalle geschlossen.', 'beginnt der Markt am Nachmittag.'], 'a', 'das Parkhaus nebenan ist an diesem Tag kostenlos', 'Am Tag des Flohmarkts muss man im Parkhaus neben der Markthalle nichts bezahlen.'] },
        { script: 'Ansage im Theater: Meine Damen und Herren, die Pause dauert heute zwanzig Minuten. Getränke bekommen Sie im Foyer im ersten Stock. Bitte denken Sie daran, Ihre Handys auch im zweiten Teil auszuschalten.',
          rf: ['Die Pause dauert zwanzig Minuten.', 'richtig', 'die Pause dauert heute zwanzig Minuten', 'Die Ansage nennt für die heutige Pause genau zwanzig Minuten, die Aussage stimmt.'],
          mc: ['Getränke gibt es …', ['im Saal.', 'vor dem Theater.', 'im ersten Stock.'], 'c', 'Getränke bekommen Sie im Foyer im ersten Stock.', 'Getränke verkauft das Theater im Foyer, und dieses liegt im ersten Stock, nicht im Saal.'] },
        { script: 'Nachricht vom Paketdienst: Hallo, Herr Adeyemi, wir konnten Ihr Paket heute leider nicht zustellen. Es liegt jetzt bei Ihrer Nachbarin, Frau Kowalski, im Erdgeschoss. Sie ist ab 16 Uhr zu Hause.',
          rf: ['Herr Adeyemi hat sein Paket heute bekommen.', 'falsch', 'wir konnten Ihr Paket heute leider nicht zustellen', 'Der Paketdienst konnte Herrn Adeyemi heute nicht antreffen, er hat das Paket also noch nicht.'],
          mc: ['Das Paket ist …', ['in der Post.', 'bei einer Nachbarin.', 'vor der Tür.'], 'b', 'Es liegt jetzt bei Ihrer Nachbarin', 'Das Paket wurde bei Frau Kowalski im Erdgeschoss abgegeben, das ist eine Nachbarin.'] },
        { script: 'Verkehrsmeldung: Wegen Bauarbeiten fährt die Straßenbahnlinie 3 ab Montag zwei Wochen lang nicht bis zum Zoo. Zwischen Rathaus und Zoo fahren Ersatzbusse. Die Fahrt dauert dadurch etwa zehn Minuten länger.',
          rf: ['Zwischen Rathaus und Zoo fahren Busse.', 'richtig', 'Zwischen Rathaus und Zoo fahren Ersatzbusse.', 'Ersatzbusse sind Busse, die statt der Straßenbahn zwischen Rathaus und Zoo fahren.'],
          mc: ['Die Bauarbeiten dauern …', ['zwei Tage.', 'zehn Tage.', 'zwei Wochen.'], 'c', 'ab Montag zwei Wochen lang', 'Die Linie 3 fährt zwei Wochen lang nicht bis zum Zoo.'] }
      ]
    },
    t2: {
      context: 'Sie möchten im Tierheim helfen und hören die Einführung für neue Freiwillige.',
      script: 'Einführung im Tierheim Rosenfeld: Schön, dass Sie da sind! Neue Freiwillige beginnen bei uns immer mit den Hunden, die Katzen kommen erst später. '
        + 'Bevor Sie allein mit einem Hund spazieren gehen, machen Sie drei Spaziergänge mit einer erfahrenen Person. '
        + 'Bitte geben Sie den Tieren kein eigenes Futter. Unser Büro ist am Wochenende nur bis 14 Uhr besetzt. '
        + 'Und noch etwas: Einmal im Monat gibt es einen Abend, an dem wir über Tierpflege informieren.',
      items: [
        ['Neue Freiwillige arbeiten zuerst mit …', ['Katzen.', 'Hunden.', 'Kaninchen.'], 'b', 'Neue Freiwillige beginnen bei uns immer mit den Hunden', 'Mit den Katzen arbeiten Freiwillige erst später, der Anfang ist immer bei den Hunden.'],
        ['Bevor man allein mit einem Hund geht, …', ['geht man dreimal mit einer erfahrenen Person.', 'macht man eine Prüfung.', 'muss man einen Kurs bezahlen.'], 'a', 'machen Sie drei Spaziergänge mit einer erfahrenen Person', 'Man macht zuerst drei Spaziergänge mit einer erfahrenen Person.'],
        ['Eigenes Futter …', ['soll man mitbringen.', 'gibt es im Büro.', 'darf man nicht geben.'], 'c', 'Bitte geben Sie den Tieren kein eigenes Futter.', 'Die Bitte, kein eigenes Futter zu geben, ist ein Verbot, also darf man es nicht.'],
        ['Am Wochenende ist das Büro …', ['bis 14 Uhr offen.', 'den ganzen Tag offen.', 'geschlossen.'], 'a', 'am Wochenende nur bis 14 Uhr besetzt', '„Nur bis 14 Uhr besetzt“ heißt, dass am Wochenende nach 14 Uhr niemand mehr im Büro ist.'],
        ['Einmal im Monat …', ['gibt es ein Fest.', 'gibt es einen Informationsabend.', 'kommt ein Tierarzt.'], 'b', 'Einmal im Monat gibt es einen Abend, an dem wir über Tierpflege informieren.', 'Der monatliche Abend über Tierpflege ist ein Informationsabend, kein Fest und kein Tierarztbesuch.']
      ]
    },
    t3: {
      context: 'Sie sind in der Mensa und hören, wie sich zwei Studierende unterhalten.',
      script: 'Moritz: Hey Aylin, du siehst müde aus. Alles in Ordnung?\n'
        + 'Aylin: Ja, ich lerne nur gerade sehr viel. Nächste Woche habe ich meine Statistikprüfung, und ich verstehe immer noch nicht alles.\n'
        + 'Moritz: Statistik hatte ich letztes Semester. Wenn du willst, können wir am Donnerstag zusammen lernen.\n'
        + 'Aylin: Das wäre toll! Aber am Donnerstag arbeite ich im Café, bis sechs. Geht es danach?\n'
        + 'Moritz: Klar, um sieben in der Bibliothek? Die ist bis zehn Uhr offen.\n'
        + 'Aylin: Perfekt. Arbeitest du eigentlich noch im Supermarkt?\n'
        + 'Moritz: Nein, seit Oktober gebe ich Nachhilfe in Mathe. Das ist besser bezahlt, und ich kann mir die Zeit selbst einteilen.\n'
        + 'Aylin: Klingt gut. Ich bringe am Donnerstag Kekse mit, versprochen.',
      items: [
        ['Aylin hat nächste Woche eine Prüfung.', 'richtig', 'Nächste Woche habe ich meine Statistikprüfung', 'Aylin lernt so viel, weil ihre Statistikprüfung schon in der nächsten Woche ist.'],
        ['Moritz hatte Statistik noch nicht.', 'falsch', 'Statistik hatte ich letztes Semester.', 'Moritz kennt das Fach bereits aus dem letzten Semester und bietet deshalb seine Hilfe an.'],
        ['Am Donnerstag arbeitet Aylin bis sechs Uhr.', 'richtig', 'am Donnerstag arbeite ich im Café, bis sechs', 'Aylin kann erst nach ihrer Arbeit im Café lernen, die am Donnerstag um sechs endet.'],
        ['Die beiden treffen sich in einem Café.', 'falsch', 'um sieben in der Bibliothek', 'Das Café ist Aylins Arbeitsplatz, getroffen wird sich aber um sieben in der Bibliothek.'],
        ['Die Bibliothek ist abends bis zehn Uhr geöffnet.', 'richtig', 'Die ist bis zehn Uhr offen.', 'Moritz schlägt die Bibliothek vor, weil sie abends bis zehn Uhr offen hat.'],
        ['Moritz arbeitet immer noch im Supermarkt.', 'falsch', 'seit Oktober gebe ich Nachhilfe in Mathe', 'Moritz gibt seit Oktober Nachhilfe und arbeitet nicht mehr im Supermarkt.'],
        ['Moritz verdient mit der Nachhilfe weniger als vorher.', 'falsch', 'Das ist besser bezahlt', 'Moritz hat zur Nachhilfe gewechselt, weil er dort mehr verdient, nicht weniger.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Roth', 'Herr Kaya'],
      script: 'Moderator: Herzlich willkommen! Jeden Tag landen in Supermärkten Lebensmittel im Müll. Sollen Supermärkte gezwungen werden, sie zu spenden? '
        + 'Darüber spreche ich mit Frau Roth, die eine Lebensmittelausgabe für Bedürftige leitet, und mit Herrn Kaya, der einen Supermarkt führt.\n'
        + 'Frau Roth: Wir holen jeden Morgen Brot, Obst und Joghurt ab. Ohne diese Spenden könnten wir viele Familien nicht versorgen.\n'
        + 'Herr Kaya: Wir spenden schon heute freiwillig. Ein Gesetz bringt nur mehr Papierkram, und dafür haben kleine Läden keine Zeit.\n'
        + 'Moderator: Was passiert denn mit Produkten, die das Datum überschritten haben?\n'
        + 'Herr Kaya: Viele Kunden wissen nicht, dass Joghurt oft noch Tage danach gut ist. Deshalb verkaufen wir solche Produkte billiger in einer extra Kiste.\n'
        + 'Frau Roth: Das Problem ist der Transport. Wir haben nur ehrenamtliche Fahrer und ein altes Auto.\n'
        + 'Moderator: Wir haben eine Frage aus dem Publikum, ich gebe sie gleich weiter.\n'
        + 'Frau Roth: Ich wünsche mir, dass Supermärkte uns wenigstens einen Kühlwagen bezahlen.\n'
        + 'Herr Kaya: Am Ende entscheidet der Kunde. Wer nur perfekte Äpfel kauft, ist auch verantwortlich.',
      example: ['Unser Thema: Sollen Supermärkte Lebensmittel spenden müssen?', 'a'],
      items: [
        ['Viele Familien brauchen die gespendeten Lebensmittel.', 'b', 'Ohne diese Spenden könnten wir viele Familien nicht versorgen.', 'Frau Roth erklärt, dass ihre Lebensmittelausgabe ohne Spenden viele Familien nicht versorgen könnte.'],
        ['Ein Gesetz macht kleinen Geschäften zu viel Arbeit.', 'c', 'Ein Gesetz bringt nur mehr Papierkram', '„Papierkram“ ist zusätzliche Büroarbeit, und dafür haben kleine Läden laut Herrn Kaya keine Zeit.'],
        ['Was macht man mit Waren nach dem Datum?', 'a', 'Was passiert denn mit Produkten, die das Datum überschritten haben?', 'Der Moderator möchte wissen, was mit Lebensmitteln nach dem Haltbarkeitsdatum geschieht.'],
        ['Ältere Produkte werden billiger verkauft.', 'c', 'Deshalb verkaufen wir solche Produkte billiger in einer extra Kiste.', 'Herr Kaya bietet Waren nach dem Datum günstiger in einer eigenen Kiste an.'],
        ['Es fehlt an Fahrzeugen und Fahrern.', 'b', 'Das Problem ist der Transport.', 'Frau Roth nennt den Transport als Problem: ehrenamtliche Fahrer und ein altes Auto.'],
        ['Jemand aus dem Publikum hat eine Frage.', 'a', 'Wir haben eine Frage aus dem Publikum', 'Der Moderator kündigt an, dass er gleich eine Frage aus dem Publikum weitergibt.'],
        ['Supermärkte sollten ein Kühlfahrzeug finanzieren.', 'b', 'dass Supermärkte uns wenigstens einen Kühlwagen bezahlen', 'Ein Kühlwagen ist ein Kühlfahrzeug, und Frau Roth möchte, dass die Supermärkte es bezahlen.'],
        ['Auch die Kunden tragen Verantwortung.', 'c', 'Wer nur perfekte Äpfel kauft, ist auch verantwortlich.', 'Wer nur perfekte Äpfel kauft, trägt nach Herrn Kaya Mitverantwortung, also auch der Kunde.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben am Wochenende mit Freunden eine Wanderung in den Bergen gemacht. Ihre Kollegin Lea wollte eigentlich mitkommen, war aber verhindert. Schreiben Sie Lea eine E-Mail (circa 80 Wörter).\n\n'
      + '– Erzählen Sie: Wie war die Wanderung?\n– Begründen Sie: Was war schwierig?\n– Machen Sie einen Vorschlag für die nächste Wanderung.', functions: ['narrate', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Fernsehen eine Sendung zum Thema „Kinder und Hausarbeit“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Corinna: Meine Kinder sind acht und zehn. Sie müssen jeden Tag den Tisch decken und ihr Zimmer aufräumen. Meine Nachbarin findet das zu streng. Wie sehen Sie das?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie ziehen nächste Woche um und brauchen am Freitag einen Tag Urlaub. Schreiben Sie Ihrer Chefin, Frau Lindqvist. Bitten Sie höflich um den freien Tag und erklären Sie den Grund (circa 40 Wörter).',
      functions: ['request', 'justify'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Die Kita Ihrer Kinder möchte einen Flohmarkt organisieren. Sie und Ihr Gesprächspartner planen den Flohmarkt.\n\n– Wann und wo?\n– Was verkaufen?\n– Werbung?\n– Kaffee und Kuchen?\n– Was mit dem Geld machen?',
      partner: [
        'Partner: Hallo! Wir sollen doch den Flohmarkt für die Kita planen. Wann passt es dir am besten?',
        'Partner: Gut. Und wie machen wir Werbung, damit viele Leute kommen?',
        'Partner: Prima. Was machen wir am Ende mit dem Geld?'
      ]
    },
    t2: { topics: ['Leben auf dem Land oder in der Stadt?', 'Ein Jahr im Ausland arbeiten?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner präsentiert das Thema „Ein Jahr im Ausland arbeiten?“: Er hat ein Jahr in einem Hotel in Spanien gearbeitet und dort viel gelernt, aber seine Familie hat ihm sehr gefehlt.',
      examinerQuestion: 'Prüferin: Möchten Sie später lieber auf dem Land oder in der Stadt wohnen? Warum?'
    }
  }
});
