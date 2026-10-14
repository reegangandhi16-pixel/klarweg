/* SYNTHETIC B1 PRACTICE form P6: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P6 = buildPracticeForm({
  n: 6, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Hallo Benni,\n\n'
        + 'stell dir vor: Ich bin jetzt bei der Freiwilligen Feuerwehr in Talheim! Angefangen hat alles im Frühling, als bei unseren Nachbarn ein kleines Feuer in der Küche war. '
        + 'Die Feuerwehr war in fünf Minuten da, und ich habe gesehen, wie wichtig diese Leute sind.\n\n'
        + 'Jetzt gehe ich jeden Donnerstagabend zur Übung. Zuerst musste ich einen Grundkurs machen, der vier Wochenenden gedauert hat. '
        + 'Das war anstrengend, aber ich habe viel gelernt, zum Beispiel wie man mit einem Atemschutzgerät arbeitet. '
        + 'Zu einem echten Einsatz darf ich erst nächstes Jahr mitfahren.\n\n'
        + 'Das Beste ist die Gemeinschaft: Wir sind Leute zwischen 18 und 60, Handwerker, Lehrerinnen und sogar ein Zahnarzt. '
        + 'Im August machen wir ein Sommerfest für das ganze Dorf. Hast du Lust, zu kommen?\n\n'
        + 'Liebe Grüße\nRafael',
      example: ['Rafael ist Mitglied bei der Feuerwehr.', 'richtig'],
      items: [
        ['Rafael hatte selbst einen Brand in seiner Küche.', 'falsch', 'bei unseren Nachbarn ein kleines Feuer in der Küche war', 'Rafael hat das kleine Küchenfeuer bei den Nachbarn erlebt, seine eigene Küche hat nicht gebrannt.'],
        ['Die Übungen finden einmal pro Woche statt.', 'richtig', 'Jetzt gehe ich jeden Donnerstagabend zur Übung.', 'Rafael geht jeden Donnerstagabend zur Übung.'],
        ['Der Grundkurs dauerte vier Wochen.', 'falsch', 'der vier Wochenenden gedauert hat', 'Der Grundkurs dauerte vier Wochenenden, nicht vier Wochen.'],
        ['Rafael ist schon bei echten Einsätzen dabei.', 'falsch', 'Zu einem echten Einsatz darf ich erst nächstes Jahr mitfahren.', 'Rafael darf erst nächstes Jahr zu echten Einsätzen mitfahren.'],
        ['In der Feuerwehr arbeiten Menschen mit verschiedenen Berufen.', 'richtig', 'Handwerker, Lehrerinnen und sogar ein Zahnarzt', 'Handwerker, Lehrerinnen und ein Zahnarzt sind unterschiedliche Berufe, also stimmt die Aussage.'],
        ['Rafael lädt Benni zu einem Fest ein.', 'richtig', 'Hast du Lust, zu kommen?', 'Rafael fragt Benni, ob er zum Sommerfest kommen möchte.']
      ]
    },
    t2: [
      {
        text: 'Ein Büro für das ganze Dorf\n\nIn der ehemaligen Bankfiliale von Talheim können Menschen seit Juni ihren Arbeitsplatz mieten. '
          + 'Das sogenannte Dorfbüro hat acht Schreibtische, schnelles Internet und eine kleine Küche. Viele Nutzer arbeiten sonst im Homeoffice, '
          + 'fühlen sich dort aber oft allein. Andere sparen sich so die lange Fahrt in die Stadt. Einen Schreibtisch kann man für einen Tag oder einen ganzen Monat buchen. '
          + 'Die Gemeinde hat den Umbau bezahlt, ein Verein kümmert sich um den Betrieb.',
        example: ['Das Dorfbüro ist …', ['in einer alten Bank.', 'im Rathaus.', 'in einer Schule.'], 'a'],
        items: [
          ['Im Dorfbüro gibt es …', ['acht Arbeitsplätze.', 'ein Café für alle.', 'Parkplätze für Gäste.'], 'a', 'Das sogenannte Dorfbüro hat acht Schreibtische', 'Acht Schreibtische sind acht Arbeitsplätze, ein Café oder Parkplätze für Gäste werden nicht genannt.'],
          ['Manche Nutzer kommen, weil sie …', ['keinen Computer haben.', 'zu Hause zu wenig Kontakt haben.', 'billig wohnen wollen.'], 'b', 'fühlen sich dort aber oft allein', 'Wer sich im Homeoffice allein fühlt, hat zu Hause zu wenig Kontakt zu anderen Menschen.'],
          ['Für den Betrieb des Büros sorgt …', ['die Gemeinde.', 'eine Firma aus der Stadt.', 'ein Verein.'], 'c', 'ein Verein kümmert sich um den Betrieb', 'Die Gemeinde hat nur den Umbau bezahlt, um den laufenden Betrieb kümmert sich ein Verein.']
        ]
      },
      {
        text: 'Bücher für alle an der Haltestelle\n\nAn der Bushaltestelle am Marktplatz steht seit dem Frühjahr ein offener Bücherschrank. '
          + 'Jeder kann dort Bücher hineinstellen oder mitnehmen, ohne etwas zu bezahlen. Gebaut hat den Schrank eine Schülergruppe im Technikunterricht. '
          + 'Ein Rentner aus der Nachbarschaft sieht jeden Morgen nach, ob alles in Ordnung ist, und sortiert alte oder kaputte Bücher aus. '
          + 'Besonders Kinderbücher und Krimis sind schnell weg. Zeitschriften dürfen nicht in den Schrank gestellt werden.',
        items: [
          ['Den Bücherschrank haben …', ['Schüler gebaut.', 'Mitarbeiter der Stadt gebaut.', 'Rentner gekauft.'], 'a', 'Gebaut hat den Schrank eine Schülergruppe im Technikunterricht.', 'Den Schrank haben Jugendliche als Projekt im Unterricht selbst hergestellt, keine Mitarbeiter der Stadt.'],
          ['Der Rentner …', ['verkauft alte Bücher.', 'kontrolliert den Schrank jeden Tag.', 'bringt jeden Tag Zeitschriften.'], 'b', 'sieht jeden Morgen nach, ob alles in Ordnung ist', 'Der Rentner prüft jeden Morgen den Schrank und sortiert alte Bücher aus, also kontrolliert er ihn täglich.'],
          ['Zeitschriften …', ['sind besonders beliebt.', 'kosten etwas.', 'sind im Schrank nicht erlaubt.'], 'c', 'Zeitschriften dürfen nicht in den Schrank gestellt werden.', 'Zeitschriften darf man nicht in den Schrank stellen.']
        ]
      }
    ],
    t3: {
      ads: [
        'Spanisch für Anfänger: Intensivkurs am Wochenende, ideal vor dem Urlaub.',
        'Hilfe beim Ausfüllen von Formularen und Anträgen – kostenlos im Bürgerzentrum, dienstags.',
        'Reiterhof sucht Helfer für die Pferde am Wochenende – Reiten gegen Mithilfe.',
        'Laptop, drei Jahre alt, sehr gut erhalten, mit Tasche – günstig abzugeben.',
        'Pilates am Abend: ruhiges Training für Rücken und Bauch, kleine Gruppe, keine Vorkenntnisse nötig.',
        'Nachhilfe Deutsch für Grundschulkinder – Lesen und Schreiben üben mit Spaß.',
        'Fotograf macht Bewerbungsfotos – schnell, freundlich, auch samstags.',
        'Mitfahrgelegenheit nach Hamburg jeden Freitag, Rückfahrt sonntags, noch zwei Plätze frei.',
        'Tauschbörse für Pflanzen: Bringen Sie Ableger und Samen mit und nehmen Sie neue mit nach Hause.',
        'Ferienhaus in den Bergen für Gruppen bis 12 Personen – Hunde willkommen.'
      ],
      example: ['Sie möchten vor Ihrer Reise nach Spanien schnell etwas Spanisch lernen.', 'a'],
      situations: [
        ['Sie haben Rückenschmerzen und suchen ein sanftes Training nach der Arbeit.', 'e', 'ruhiges Training für Rücken und Bauch', 'Pilates (e) ist abends und schont den Rücken, das passt zu Rückenschmerzen nach der Arbeit.'],
        ['Sie brauchen für Ihre Bewerbung ein gutes Foto.', 'g', 'Fotograf macht Bewerbungsfotos', 'Für ein Bewerbungsfoto ist der Fotograf in Anzeige g die richtige Adresse.'],
        ['Sie lieben Tiere und möchten am Wochenende mit Pferden arbeiten.', 'c', 'Reiterhof sucht Helfer für die Pferde am Wochenende', 'Der Reiterhof (c) braucht am Wochenende Hilfe bei den Pferden und lässt dafür reiten.'],
        ['Sie verstehen einen Brief vom Amt nicht und brauchen Hilfe beim Antrag.', 'b', 'Hilfe beim Ausfüllen von Formularen und Anträgen', 'Wer einen Brief vom Amt nicht versteht, bekommt im Bürgerzentrum (b) kostenlos Hilfe bei Anträgen.'],
        ['Ihre Fensterbank ist voll mit kleinen Pflanzen, und Sie möchten einige gegen andere tauschen.', 'i', 'Tauschbörse für Pflanzen', 'Ableger und Samen tauscht man bei der Pflanzen-Tauschbörse (i).'],
        ['Sie besuchen jedes Wochenende Ihre Freundin in Hamburg und möchten nicht allein fahren.', 'h', 'Mitfahrgelegenheit nach Hamburg jeden Freitag', 'Die Mitfahrgelegenheit (h) fährt freitags nach Hamburg und sonntags zurück, ideal für Wochenendbesuche.'],
        ['Sie suchen ein günstiges Tablet für Ihre Tochter.', '0', 'Laptop, drei Jahre alt', 'Angeboten wird nur ein Laptop (d), kein Tablet: 0.', 'd']
      ]
    },
    t4: {
      topic: 'In einem Stadtmagazin wird gefragt: Sollen Hunde in Restaurants und Cafés erlaubt sein?',
      question: 'Ist die Person dafür, dass Hunde ins Restaurant dürfen?',
      comments: [
        ['Nicole, 36', 'Mein Hund liegt ruhig unter dem Tisch und stört niemanden. Ich gehe nur in Cafés, in denen er willkommen ist. Natürlich bin ich dafür.', 'ja'],
        ['Hasan, 50', 'Ich habe eine Allergie gegen Hundehaare. Wenn ein Hund im Lokal ist, muss ich wieder gehen. Ich finde, Tiere haben dort nichts zu suchen.', 'nein', 'Tiere haben dort nichts zu suchen', 'Hasan hat eine Allergie und findet, dass Tiere nicht ins Lokal gehören.'],
        ['Annegret, 63', 'Seit mein Mann gestorben ist, ist mein Hund meine Begleitung. Ohne ihn würde ich gar nicht mehr ausgehen. Für mich ist das wichtig.', 'ja', 'Ohne ihn würde ich gar nicht mehr ausgehen.', 'Annegret würde ohne ihren Hund gar nicht mehr ausgehen.'],
        ['Jonas, 28', 'Ich arbeite als Kellner. Hunde bellen, betteln und laufen den Kollegen vor die Füße. Ehrlich gesagt bin ich dagegen.', 'nein', 'Ehrlich gesagt bin ich dagegen.', 'Jonas erlebt als Kellner, dass Hunde bei der Arbeit stören.'],
        ['Priya, 33', 'In der Küche haben Tiere natürlich nichts verloren. Aber im Gastraum sehe ich kein Problem, wenn der Hund an der Leine bleibt.', 'ja', 'im Gastraum sehe ich kein Problem', 'Priya hat nichts gegen Hunde im Gastraum, wenn sie an der Leine sind.'],
        ['Georg, 45', 'Wir gehen mit unseren kleinen Kindern essen, und sie haben Angst vor großen Hunden. Das sollte jedes Restaurant verbieten.', 'nein', 'Das sollte jedes Restaurant verbieten.', 'Georgs Kinder haben Angst vor großen Hunden, deshalb ist er für ein Verbot.'],
        ['Lea, 22', 'Jedes Restaurant sollte selbst entscheiden. Aber ein paar mehr hundefreundliche Cafés würden mich freuen.', 'ja', 'ein paar mehr hundefreundliche Cafés würden mich freuen', 'Lea möchte die Entscheidung den Restaurants überlassen, wünscht sich aber mehr hundefreundliche Cafés und ist deshalb dafür.'],
        ['Uwe, 57', 'Ein Restaurant ist ein Ort für gutes Essen und Hygiene. Hunde gehören nach Hause oder in den Park.', 'nein', 'Hunde gehören nach Hause oder in den Park.', 'Uwe meint, dass Hunde nicht ins Restaurant gehören.']
      ]
    },
    t5: {
      context: 'Sie möchten beim Stadtlauf mitlaufen und lesen die Teilnahmebedingungen.',
      text: 'Teilnahmebedingungen – 10. Talheimer Stadtlauf\n\n'
        + '1. Anmeldung: Die Anmeldung ist nur online bis zum 30. April möglich. Am Tag des Laufs gibt es keine Nachmeldung.\n\n'
        + '2. Startnummer: Die Startnummer holen Sie am Freitag vor dem Lauf in der Stadthalle ab. Bringen Sie dafür Ihre Anmeldebestätigung mit.\n\n'
        + '3. Kinder: Kinder unter 12 Jahren laufen nur die kurze Strecke über zwei Kilometer und brauchen die Unterschrift eines Elternteils.\n\n'
        + '4. Absage: Bei starkem Unwetter kann der Lauf abgesagt werden. Die Startgebühr wird dann nicht zurückgezahlt.',
      items: [
        ['Anmelden kann man sich …', ['auch noch am Tag des Laufs.', 'nur im Internet.', 'in der Stadthalle.'], 'b', 'Die Anmeldung ist nur online bis zum 30. April möglich.', 'Nach Regel 1 geht die Anmeldung nur online, eine Nachmeldung am Lauftag gibt es nicht.'],
        ['Für die Startnummer braucht man …', ['die Anmeldebestätigung.', 'einen Ausweis.', 'ein Foto.'], 'a', 'Bringen Sie dafür Ihre Anmeldebestätigung mit.', 'Die Startnummer bekommt man in der Stadthalle nur gegen die Anmeldebestätigung.'],
        ['Ein zehnjähriges Kind …', ['darf nicht mitlaufen.', 'läuft die lange Strecke mit einem Erwachsenen.', 'braucht die Erlaubnis der Eltern.'], 'c', 'brauchen die Unterschrift eines Elternteils', 'Ein zehnjähriges Kind ist unter 12 und braucht deshalb die Unterschrift von Mutter oder Vater.'],
        ['Wenn der Lauf wegen Unwetter ausfällt, …', ['bekommt man das Geld zurück.', 'bekommt man kein Geld zurück.', 'findet er am nächsten Tag statt.'], 'b', 'Die Startgebühr wird dann nicht zurückgezahlt.', 'Bei einer Absage wegen Unwetter behält der Veranstalter die Startgebühr, man bekommt nichts zurück.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Baumarkt: Liebe Kunden, heute erhalten Sie in unserer Gartenabteilung alle Blumenerde zwei zum Preis von einer.',
        rf: ['Im Baumarkt gibt es ein Angebot für Blumenerde.', 'richtig'], mc: ['Das Angebot gibt es in der …', ['Gartenabteilung.', 'Farbenabteilung.', 'Holzabteilung.'], 'a'] },
      texts: [
        { script: 'Nachricht vom Optiker: Guten Tag, Herr Lorenz, hier ist Optik Klarsicht. Ihre neue Brille ist fertig. Sie können sie ab morgen abholen. Bitte bringen Sie Ihre alte Brille mit, damit wir die Gläser vergleichen können.',
          rf: ['Herr Lorenz kann seine Brille schon heute abholen.', 'falsch', 'Sie können sie ab morgen abholen.', 'Die Brille kann erst ab morgen abgeholt werden.'],
          mc: ['Herr Lorenz soll …', ['seine alte Brille mitbringen.', 'vorher anrufen.', 'bar bezahlen.'], 'a', 'Bitte bringen Sie Ihre alte Brille mit', 'Herr Lorenz soll die alte Brille mitbringen.'] },
        { script: 'Radiomeldung: Das Open-Air-Konzert im Schlosspark findet wegen des angekündigten Regens nicht am Samstag statt, sondern eine Woche später. Die Karten bleiben gültig. Wer am neuen Termin keine Zeit hat, bekommt sein Geld zurück.',
          rf: ['Das Konzert findet eine Woche später statt.', 'richtig', 'sondern eine Woche später', 'Das Konzert wird um eine Woche verschoben.'],
          mc: ['Wer am neuen Termin nicht kann, …', ['bekommt eine neue Karte.', 'bekommt das Geld zurück.', 'kann am Sonntag kommen.'], 'b', 'bekommt sein Geld zurück', 'Wer den Ersatztermin eine Woche später nicht wahrnehmen kann, erhält den Kartenpreis erstattet.'] },
        { script: 'Durchsage im Schwimmbad: Liebe Badegäste, das Sportbecken ist ab sofort wegen einer Reinigung für eine Stunde gesperrt. Das Nichtschwimmerbecken und die Rutsche können Sie weiter benutzen.',
          rf: ['Das Sportbecken ist eine Stunde geschlossen.', 'richtig', 'für eine Stunde gesperrt', '„Gesperrt“ bedeutet geschlossen, und die Sperre des Sportbeckens dauert eine Stunde.'],
          mc: ['Die Badegäste können weiter …', ['im Sportbecken schwimmen.', 'die Rutsche benutzen.', 'in die Sauna gehen.'], 'b', 'Das Nichtschwimmerbecken und die Rutsche können Sie weiter benutzen.', 'Nur das Sportbecken ist zu, das Nichtschwimmerbecken und die Rutsche bleiben offen.'] },
        { script: 'Nachricht von der Sprachschule: Hallo, Frau Ito, hier ist das Sekretariat der Sprachschule Wortwerk. Ihr Kurs am Mittwoch findet ausnahmsweise in Raum 12 im dritten Stock statt, weil in Ihrem Raum der Boden repariert wird.',
          rf: ['Der Kurs von Frau Ito fällt am Mittwoch aus.', 'falsch', 'Ihr Kurs am Mittwoch findet ausnahmsweise in Raum 12', 'Der Kurs findet statt, nur in einem anderen Raum.'],
          mc: ['Der Grund für den Raumwechsel ist …', ['ein neuer Lehrer.', 'eine Reparatur.', 'ein größerer Kurs.'], 'b', 'weil in Ihrem Raum der Boden repariert wird', 'Der Kurs zieht in Raum 12 um, weil im alten Raum der Boden repariert wird.'] },
        { script: 'Telefonansage der Stadtverwaltung: Sie haben das Bürgeramt Talheim erreicht. Unsere Öffnungszeiten sind Montag bis Freitag von acht bis zwölf Uhr, donnerstags zusätzlich von 14 bis 18 Uhr. Termine können Sie auch online buchen.',
          rf: ['Das Bürgeramt ist am Donnerstagnachmittag geöffnet.', 'richtig', 'donnerstags zusätzlich von 14 bis 18 Uhr', 'Am Donnerstag hat das Bürgeramt zusätzlich nachmittags von 14 bis 18 Uhr geöffnet.'],
          mc: ['Einen Termin kann man …', ['nur persönlich bekommen.', 'nur am Montag bekommen.', 'auch im Internet bekommen.'], 'c', 'Termine können Sie auch online buchen.', '„Online buchen“ bedeutet, dass man den Termin auch über das Internet bekommen kann.'] }
      ]
    },
    t2: {
      context: 'Sie machen eine Tagesfahrt mit dem Bus und hören den Reiseleiter.',
      script: 'Guten Morgen und willkommen zu unserer Tagesfahrt an den Bodensee! Wir fahren jetzt etwa zwei Stunden, nach einer Stunde machen wir eine kurze Pause an einer Raststätte. '
        + 'In Uferstadt haben Sie zuerst Zeit für einen eigenen Spaziergang. Um 13 Uhr treffen wir uns am Hafen für die Schifffahrt. '
        + 'Die Tickets für das Schiff habe ich schon, Sie bekommen sie dort von mir. Zurück fahren wir um 18 Uhr.',
      items: [
        ['Die Fahrt an den See dauert …', ['eine Stunde.', 'etwa zwei Stunden.', 'den ganzen Vormittag.'], 'b', 'Wir fahren jetzt etwa zwei Stunden', 'Die Fahrt dauert etwa zwei Stunden.'],
        ['Unterwegs …', ['gibt es eine kurze Pause.', 'gibt es Frühstück im Bus.', 'holt der Bus weitere Gäste ab.'], 'a', 'nach einer Stunde machen wir eine kurze Pause an einer Raststätte', 'Nach einer Stunde Fahrt hält der Bus an einer Raststätte für eine kurze Pause.'],
        ['In Uferstadt …', ['besucht die Gruppe zuerst ein Museum.', 'essen alle zusammen.', 'können die Gäste zuerst allein spazieren gehen.'], 'c', 'haben Sie zuerst Zeit für einen eigenen Spaziergang', 'In Uferstadt haben die Gäste zuerst freie Zeit für einen Spaziergang, die Schifffahrt kommt später.'],
        ['Die Schiffstickets …', ['muss man am Hafen kaufen.', 'bekommt man vom Reiseleiter.', 'sind nicht im Preis enthalten.'], 'b', 'Sie bekommen sie dort von mir', 'Der Reiseleiter verteilt die Tickets am Hafen.'],
        ['Der Bus fährt zurück …', ['um 13 Uhr.', 'um 16 Uhr.', 'um 18 Uhr.'], 'c', 'Zurück fahren wir um 18 Uhr.', 'Die Rückfahrt beginnt um 18 Uhr, 13 Uhr ist der Treffpunkt für das Schiff.']
      ]
    },
    t3: {
      context: 'Sie sind im Treppenhaus und hören, wie sich zwei Nachbarn unterhalten.',
      script: 'Herr Schulz: Guten Abend, Frau Pohl! Haben Sie gestern Abend den Lärm aus dem dritten Stock gehört?\n'
        + 'Frau Pohl: Ja, die neuen Mieter haben gefeiert. Aber sie haben vorher einen Zettel an die Haustür gehängt, das fand ich nett.\n'
        + 'Herr Schulz: Den habe ich nicht gesehen. Ich konnte bis zwei Uhr nicht schlafen.\n'
        + 'Frau Pohl: Oh, das tut mir leid. Ich habe zum Glück Ohrstöpsel.\n'
        + 'Herr Schulz: Ich will ja keinen Streit. Vielleicht spreche ich morgen ganz freundlich mit ihnen.\n'
        + 'Frau Pohl: Gute Idee. Übrigens, die beiden haben gefragt, ob sie im Hof ein Hochbeet bauen dürfen.\n'
        + 'Herr Schulz: Ein Hochbeet? Warum nicht. Ich habe noch Holz im Keller, das kann ich ihnen geben.\n'
        + 'Frau Pohl: Na, sehen Sie – dann haben Sie gleich einen guten Grund, mit ihnen zu reden.',
      items: [
        ['Im dritten Stock gab es gestern eine Feier.', 'richtig', 'die neuen Mieter haben gefeiert', 'Die neuen Mieter im dritten Stock haben gefeiert.'],
        ['Die neuen Mieter haben die Nachbarn vorher informiert.', 'richtig', 'sie haben vorher einen Zettel an die Haustür gehängt', 'Mit dem Zettel an der Haustür haben die neuen Mieter das Fest vorher angekündigt.'],
        ['Herr Schulz hat den Zettel gelesen.', 'falsch', 'Den habe ich nicht gesehen.', 'Herr Schulz hat den Zettel nicht bemerkt und deshalb auch nicht gelesen.'],
        ['Frau Pohl konnte wegen des Lärms nicht schlafen.', 'falsch', 'Ich habe zum Glück Ohrstöpsel.', 'Frau Pohl hatte Ohrstöpsel; Herr Schulz konnte nicht schlafen.'],
        ['Herr Schulz möchte sich bei der Hausverwaltung beschweren.', 'falsch', 'Vielleicht spreche ich morgen ganz freundlich mit ihnen.', 'Herr Schulz will freundlich mit den Mietern sprechen, nicht sich beschweren.'],
        ['Die neuen Mieter möchten im Hof etwas bauen.', 'richtig', 'ob sie im Hof ein Hochbeet bauen dürfen', 'Die neuen Mieter möchten im Hof ein Hochbeet bauen.'],
        ['Herr Schulz kann den Mietern Holz geben.', 'richtig', 'Ich habe noch Holz im Keller, das kann ich ihnen geben.', 'Herr Schulz bietet Holz aus seinem Keller an.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Haas', 'Herr Mendes'],
      script: 'Moderator: Guten Tag und willkommen! Heute fragen wir: Sollen Kinder schon im Kindergarten eine Fremdsprache lernen? '
        + 'Bei mir sind Frau Haas, Erzieherin in einem Kindergarten, und Herr Mendes, Vater von Zwillingen und Sprachlehrer.\n'
        + 'Frau Haas: Bei uns singen die Kinder einmal pro Woche englische Lieder. Sie haben viel Spaß dabei und lernen ganz nebenbei.\n'
        + 'Herr Mendes: Spaß ist gut, aber eine Stunde pro Woche ist zu wenig. Kinder lernen eine Sprache nur, wenn sie sie jeden Tag hören.\n'
        + 'Moderator: Und was ist mit Kindern, die noch nicht gut Deutsch sprechen?\n'
        + 'Frau Haas: Für diese Kinder ist Deutsch am wichtigsten. Wir dürfen sie nicht überfordern.\n'
        + 'Herr Mendes: Meine Kinder wachsen mit Portugiesisch und Deutsch auf. Mehrere Sprachen sind für Kinder ganz normal.\n'
        + 'Moderator: Eine Hörerin möchte wissen, ob das nicht zu viel Druck ist.\n'
        + 'Frau Haas: Es darf auf keinen Fall Noten oder Tests geben. Dann wäre es kein Spiel mehr.\n'
        + 'Herr Mendes: Leider fehlen in vielen Kindergärten Erzieherinnen, die eine Fremdsprache wirklich gut sprechen.',
      example: ['Thema heute: Fremdsprachen im Kindergarten.', 'a'],
      items: [
        ['Die Kinder lernen beim Singen.', 'b', 'Sie haben viel Spaß dabei und lernen ganz nebenbei.', 'Frau Haas sagt, dass die Kinder beim Singen nebenbei lernen.'],
        ['Man muss eine Sprache täglich hören.', 'c', 'Kinder lernen eine Sprache nur, wenn sie sie jeden Tag hören.', 'Für Herrn Mendes reicht eine Stunde pro Woche nicht, Kinder müssen die Sprache jeden Tag hören.'],
        ['Was ist mit Kindern, die wenig Deutsch können?', 'a', 'Und was ist mit Kindern, die noch nicht gut Deutsch sprechen?', 'Der Moderator fragt nach Kindern mit wenig Deutsch.'],
        ['Zuerst sollen die Kinder gut Deutsch lernen.', 'b', 'Für diese Kinder ist Deutsch am wichtigsten.', 'Frau Haas will Kinder mit wenig Deutsch nicht überfordern, für sie hat Deutsch Vorrang.'],
        ['Zwei Sprachen von klein auf sind normal.', 'c', 'Mehrere Sprachen sind für Kinder ganz normal.', 'Herr Mendes erzählt, dass seine Kinder mit Portugiesisch und Deutsch aufwachsen, und hält das für normal.'],
        ['Eine Hörerin hat eine Frage.', 'a', 'Eine Hörerin möchte wissen', 'Der Moderator gibt die Frage einer Hörerin weiter.'],
        ['Tests darf es im Kindergarten nicht geben.', 'b', 'Es darf auf keinen Fall Noten oder Tests geben.', 'Frau Haas lehnt Noten und Tests ab, weil das Lernen sonst kein Spiel mehr wäre.'],
        ['Es gibt zu wenige Erzieher mit guten Sprachkenntnissen.', 'c', 'Leider fehlen in vielen Kindergärten Erzieherinnen, die eine Fremdsprache wirklich gut sprechen.', 'Herr Mendes bedauert, dass vielen Kindergärten Erzieherinnen fehlen, die eine Fremdsprache gut beherrschen.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben am Wochenende Ihren Geburtstag gefeiert. Ihre Freundin Petra war im Urlaub und konnte nicht kommen. Schreiben Sie Petra eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wie haben Sie gefeiert?\n– Begründen Sie: Welches Geschenk hat Sie besonders gefreut?\n– Schlagen Sie vor, wann Sie zusammen nachfeiern.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Zeitschrift einen Artikel zum Thema „Freizeit ohne Handy“ gelesen. Im Online-Forum der Zeitschrift finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Katrin: Wir machen jeden Sonntag einen handyfreien Tag in der Familie. Am Anfang war es schwer, jetzt reden wir viel mehr miteinander. Wäre das auch etwas für Sie?', postLabel: 'Online-Forum', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie besuchen einen Deutschkurs am Vormittag. Wegen Ihrer neuen Arbeit möchten Sie in den Abendkurs wechseln. Schreiben Sie Ihrer Kursleiterin, Frau Moreau. Bitten Sie höflich um den Wechsel und nennen Sie den Grund (circa 40 Wörter).',
      functions: ['request', 'justify'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Sie möchten mit Freunden aus verschiedenen Ländern einen Kochabend machen. Sie planen den Abend zusammen.\n\n– Wann?\n– Bei wem?\n– Welche Gerichte?\n– Einkaufen?\n– Getränke und Musik?',
      partner: [
        'Partner: Hallo! Wir wollen doch den internationalen Kochabend machen. Bei wem könnten wir kochen?',
        'Partner: Gut. Und welche Gerichte sollen wir kochen? Jeder etwas aus seinem Land?',
        'Partner: Klingt gut. Wer geht einkaufen – und wann?'
      ]
    },
    t2: { topics: ['Sollte jedes Kind ein Instrument lernen?', 'Mit dem Zug statt mit dem Flugzeug reisen?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner präsentiert das Thema „Mit dem Zug statt mit dem Flugzeug reisen?“: Er fährt im Urlaub nur noch mit dem Zug, weil er unterwegs lesen kann. Für weite Reisen ist ihm der Zug aber zu langsam.',
      examinerQuestion: 'Prüferin: Haben Sie als Kind ein Instrument gelernt? Erzählen Sie kurz.'
    }
  }
});
