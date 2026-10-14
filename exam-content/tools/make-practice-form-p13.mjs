/* SYNTHETIC B1 PRACTICE form P13: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P13 = buildPracticeForm({
  n: 13, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Warum ich Gebärdensprache lerne\n\n'
        + 'Im Frühling hat in unserer Abteilung eine neue Kollegin angefangen: Merve ist gehörlos. Am Anfang haben wir uns nur mit Zetteln und E-Mails verständigt. '
        + 'Das hat zwar funktioniert, aber in der Kaffeepause saß Merve meistens allein. Das fand ich schade.\n\n'
        + 'Deshalb habe ich mich bei der Volkshochschule für einen Kurs in Deutscher Gebärdensprache angemeldet. Der Kurs findet einmal pro Woche statt, und unsere Lehrerin ist selbst gehörlos. '
        + 'Im Unterricht wird kein Wort gesprochen – das war in der ersten Stunde sehr ungewohnt. Am schwierigsten finde ich, dass auch das Gesicht wichtig ist, nicht nur die Hände.\n\n'
        + 'Inzwischen kann ich mich schon über einfache Dinge mit Merve unterhalten. Sie korrigiert mich geduldig und lacht, wenn ich Fehler mache. '
        + 'Zwei weitere Kollegen haben sich jetzt auch angemeldet.\n\n'
        + 'Dennis',
      example: ['Dennis hat eine gehörlose Kollegin.', 'richtig'],
      items: [
        ['Am Anfang hat das Team mit Merve schriftlich kommuniziert.', 'richtig', 'haben wir uns nur mit Zetteln und E-Mails verständigt', 'Zettel und E-Mails sind schriftliche Wege, deshalb hat das Team anfangs schriftlich mit Merve kommuniziert.'],
        ['Merve hat die Pausen meistens mit den Kollegen verbracht.', 'falsch', 'in der Kaffeepause saß Merve meistens allein', 'Dennis fand es schade, dass Merve in der Pause allein saß, sie war also nicht mit den Kollegen zusammen.'],
        ['Die Kursleiterin kann nicht hören.', 'richtig', 'unsere Lehrerin ist selbst gehörlos', '„Gehörlos“ bedeutet, dass die Lehrerin nicht hören kann.'],
        ['Im Kurs wird viel gesprochen.', 'falsch', 'Im Unterricht wird kein Wort gesprochen', 'Im Gebärdensprachkurs spricht niemand, das fand Dennis in der ersten Stunde ungewohnt.'],
        ['Für Dennis ist besonders schwer, auch mit dem Gesicht zu „sprechen“.', 'richtig', 'dass auch das Gesicht wichtig ist, nicht nur die Hände', 'Dennis findet schwierig, dass auch das Gesicht wichtig ist.'],
        ['Dennis ist der einzige aus der Firma, der den Kurs macht.', 'falsch', 'Zwei weitere Kollegen haben sich jetzt auch angemeldet.', 'Nach Dennis haben sich noch zwei Kollegen angemeldet, er ist also nicht der einzige.']
      ]
    },
    t2: [
      {
        text: 'Frisches Wasser für alle\n\nIn der Fußgängerzone von Seeburg stehen seit Juni vier Trinkbrunnen. Dort kann jeder kostenlos Leitungswasser trinken oder seine Flasche auffüllen. '
          + 'Die Stadt möchte damit vor allem älteren Menschen an heißen Tagen helfen, die oft zu wenig trinken. Außerdem sollen weniger Plastikflaschen verkauft werden. '
          + 'Das Wasser wird jede Woche kontrolliert. Im Winter werden die Brunnen abgestellt, damit die Leitungen nicht einfrieren. '
          + 'Viele Geschäfte in der Innenstadt machen zusätzlich mit und füllen Flaschen gratis auf.',
        example: ['Die Trinkbrunnen gibt es …', ['seit Juni.', 'seit vielen Jahren.', 'nur im Winter.'], 'a'],
        items: [
          ['Die Stadt möchte vor allem …', ['Geld verdienen.', 'älteren Menschen bei Hitze helfen.', 'Touristen anlocken.'], 'b', 'vor allem älteren Menschen an heißen Tagen helfen', 'Die Brunnen sollen vor allem älteren Menschen an heißen Tagen helfen.'],
          ['Im Winter …', ['sind die Brunnen nicht in Betrieb.', 'gibt es warmes Wasser.', 'kostet das Wasser etwas.'], 'a', 'Im Winter werden die Brunnen abgestellt', 'Die Brunnen werden im Winter abgestellt, damit die Leitungen nicht einfrieren, sie sind dann außer Betrieb.'],
          ['Viele Geschäfte …', ['verkaufen Wasser billiger.', 'haben eigene Brunnen gebaut.', 'füllen kostenlos Flaschen auf.'], 'c', 'füllen Flaschen gratis auf', 'Viele Geschäfte füllen Flaschen gratis auf.']
        ]
      },
      {
        text: 'Schüler erklären das Smartphone\n\nJeden Mittwochnachmittag wird es im Seniorentreff Seeburg laut und fröhlich: Schülerinnen und Schüler der Realschule erklären älteren Menschen ihr Smartphone. '
          + 'Sie zeigen zum Beispiel, wie man Fotos an die Enkel schickt oder eine Fahrkarte mit dem Handy kauft. Jeder Senior hat einen festen jungen „Lehrer“. '
          + 'Die Schüler bekommen dafür kein Geld, aber eine Bescheinigung für ihre Bewerbungen. Am meisten gelernt haben nach eigenen Worten beide Seiten: '
          + 'Die Jugendlichen hören viele Geschichten von früher.',
        items: [
          ['Die Schüler zeigen den Senioren zum Beispiel, wie man …', ['ein Handy repariert.', 'Bilder verschickt.', 'ein Handy kauft.'], 'b', 'wie man Fotos an die Enkel schickt', 'Die Schüler zeigen, wie man Fotos an die Enkel schickt.'],
          ['Für ihre Hilfe bekommen die Schüler …', ['eine Bescheinigung.', 'ein kleines Gehalt.', 'ein neues Handy.'], 'a', 'aber eine Bescheinigung für ihre Bewerbungen', 'Die Schüler bekommen eine Bescheinigung für Bewerbungen.'],
          ['Die Jugendlichen …', ['finden die Treffen langweilig.', 'lernen nichts Neues.', 'erfahren viel über frühere Zeiten.'], 'c', 'Die Jugendlichen hören viele Geschichten von früher.', 'Die Senioren erzählen den Jugendlichen viel aus früheren Zeiten.']
        ]
      }
    ],
    t3: {
      ads: [
        'Gebärdensprache für Anfänger: Kurs für Familie und Freunde gehörloser Menschen.',
        'Ehrenamtliche Begleitung für Arztbesuche älterer Menschen gesucht.',
        'Grillkurs für Männer und Frauen: Fleisch, Fisch und Gemüse richtig grillen.',
        'Wir übersetzen Ihre Zeugnisse beglaubigt – Englisch, Arabisch, Türkisch.',
        'Lauftraining für Kinder mit Übergewicht – Spaß an Bewegung, kleine Gruppen.',
        'Haushaltsauflösung: Bücher, Schallplatten und Bilder günstig abzugeben.',
        'Workshop „Fahrrad im Winter“: Licht, Reifen und Bremsen selbst prüfen.',
        'Aquarium mit Zubehör zu verkaufen, 120 Liter, ohne Fische.',
        'Lerngruppe Führerschein-Theorie: zusammen für die Prüfung üben, kostenlos in der Bibliothek.',
        'Seniorentanz am Nachmittag – keine Vorkenntnisse, auch ohne Partner.'
      ],
      example: ['Ihr Bruder ist gehörlos, und Sie möchten mit ihm besser sprechen können.', 'a'],
      situations: [
        ['Sie möchten in Deutschland arbeiten und brauchen eine offizielle Übersetzung Ihrer Zeugnisse.', 'd', 'Wir übersetzen Ihre Zeugnisse beglaubigt', 'Für eine Arbeit in Deutschland braucht man oft eine beglaubigte, also offizielle Übersetzung, die Anzeige d anbietet.'],
        ['Sie lernen für die Theorieprüfung und möchten nicht allein üben.', 'i', 'zusammen für die Prüfung üben', 'In der Lerngruppe (i) übt man zusammen für die Theorieprüfung.'],
        ['Ihre Großmutter tanzt gern, hat aber keinen Tanzpartner mehr.', 'j', 'auch ohne Partner', 'Den Seniorentanz (j) kann man auch ohne Partner besuchen.'],
        ['Sie haben im Monat ein paar Stunden Zeit und möchten älteren Menschen helfen.', 'b', 'Ehrenamtliche Begleitung für Arztbesuche älterer Menschen gesucht', 'Die Begleitung zu Arztbesuchen (b) ist ehrenamtlich und hilft älteren Menschen, dafür reichen ein paar Stunden.'],
        ['Sie fahren auch im Winter mit dem Rad und wollen wissen, ob es sicher ist.', 'g', 'Licht, Reifen und Bremsen selbst prüfen', 'Im Workshop (g) lernt man, das Rad für den Winter zu prüfen.'],
        ['Sie sammeln alte Schallplatten.', 'f', 'Bücher, Schallplatten und Bilder günstig abzugeben', 'Als Sammler alter Musikplatten werden Sie bei der Haushaltsauflösung in Anzeige f fündig.'],
        ['Ihre Kinder wünschen sich ein kleines Aquarium mit höchstens 30 Litern für ihr Zimmer.', '0', '120 Liter', 'Das einzige Aquarium (h) fasst 120 Liter und ist damit viel größer als die gewünschten 30 Liter, deshalb passt keine Anzeige: 0.', 'h']
      ]
    },
    t4: {
      topic: 'In einer Reisezeitschrift wird gefragt: Sollen Telefongespräche in Zügen verboten werden?',
      question: 'Ist die Person für ein Telefonierverbot im Zug?',
      comments: [
        ['Sabine, 46', 'Ich fahre jeden Tag eine Stunde zur Arbeit und möchte lesen oder schlafen. Laute Telefonate nerven mich sehr. Ein Verbot wäre ein Segen.', 'ja'],
        ['Ole, 29', 'Im Zug arbeite ich, und dazu gehören Telefonate mit Kunden. Ich spreche leise, aber ein Verbot würde meine Arbeit unmöglich machen.', 'nein', 'ein Verbot würde meine Arbeit unmöglich machen', 'Ole muss im Zug mit Kunden telefonieren.'],
        ['Adelheid, 72', 'Früher hat man im Zug gelesen oder aus dem Fenster geschaut. Heute muss man sich die Probleme fremder Leute anhören. Ich bin für ein Verbot.', 'ja', 'Ich bin für ein Verbot.', 'Adelheid möchte sich die Telefonate fremder Leute nicht mehr anhören.'],
        ['Marek, 37', 'Es gibt doch schon Ruhebereiche. Wer Ruhe will, kann sich dorthin setzen. Ein generelles Verbot finde ich übertrieben.', 'nein', 'Ein generelles Verbot finde ich übertrieben.', 'Marek verweist auf die Ruhebereiche und findet ein Verbot übertrieben.'],
        ['Fenja, 21', 'Wenn ich meiner Mutter kurz sage, dass mein Zug Verspätung hat, stört das doch niemanden. Kurze Gespräche müssen erlaubt bleiben.', 'nein', 'Kurze Gespräche müssen erlaubt bleiben.', 'Fenja will kurze Anrufe im Zug weiter erlauben, deshalb ist sie gegen ein Verbot.'],
        ['Dr. Hüseyin, 58', 'Als Arzt muss ich im Notfall erreichbar sein. Deshalb kann ich ein Verbot nicht unterstützen.', 'nein', 'Deshalb kann ich ein Verbot nicht unterstützen.', 'Der Arzt muss im Notfall erreichbar sein.'],
        ['Corinna, 50', 'Einmal hat ein Mann neben mir eine halbe Stunde lang über seine Scheidung gesprochen. So etwas muss man verbieten.', 'ja', 'So etwas muss man verbieten.', 'Corinna hat lange private Telefonate erlebt und will ein Verbot.'],
        ['Benedikt, 33', 'In Flugzeugen darf man auch nicht telefonieren, und es funktioniert prima. Warum nicht im Zug? Ich wäre sofort dafür.', 'ja', 'Ich wäre sofort dafür.', 'Benedikt vergleicht mit dem Flugzeug und ist für ein Verbot.']
      ]
    },
    t5: {
      context: 'Sie haben im Bus Ihren Regenschirm vergessen und lesen die Hinweise des Fundbüros.',
      text: 'Hinweise des Fundbüros der Stadtwerke Seeburg\n\n'
        + '1. Abgabe: Fundsachen aus Bussen und Bahnen kommen zwei Werktage später ins Fundbüro. Fragen Sie deshalb nicht am selben Tag nach.\n\n'
        + '2. Suche: Sie können online eine Verlustmeldung ausfüllen. Wir melden uns, wenn wir Ihre Sache gefunden haben.\n\n'
        + '3. Abholung: Bringen Sie einen Ausweis mit. Für die Aufbewahrung zahlen Sie eine Gebühr von drei Euro; Ausweise und Schlüssel geben wir kostenlos zurück.\n\n'
        + '4. Aufbewahrung: Fundsachen bewahren wir sechs Monate auf. Danach werden sie versteigert oder gespendet.',
      items: [
        ['Fundsachen aus dem Bus sind im Fundbüro …', ['sofort.', 'nach zwei Werktagen.', 'nach einer Woche.'], 'b', 'Fundsachen aus Bussen und Bahnen kommen zwei Werktage später ins Fundbüro.', 'Am selben Tag ist der Schirm noch nicht im Fundbüro, nach Regel 1 dauert es zwei Werktage.'],
        ['Wer etwas verloren hat, kann …', ['eine Meldung im Internet machen.', 'den Busfahrer anrufen.', 'nur persönlich fragen.'], 'a', 'Sie können online eine Verlustmeldung ausfüllen.', 'Eine Verlustmeldung kann man nach Regel 2 im Internet ausfüllen, das Fundbüro meldet sich dann.'],
        ['Für einen verlorenen Schlüssel …', ['zahlt man drei Euro.', 'braucht man keinen Ausweis.', 'zahlt man nichts.'], 'c', 'Ausweise und Schlüssel geben wir kostenlos zurück', 'Regel 3: Schlüssel gibt das Fundbüro kostenlos zurück.'],
        ['Nach sechs Monaten …', ['werden die Sachen weggegeben.', 'werden die Sachen weggeworfen.', 'bekommt man die Sachen per Post.'], 'a', 'Danach werden sie versteigert oder gespendet.', 'Regel 4: Nach sechs Monaten werden die Sachen versteigert oder gespendet.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Hotel: Liebe Gäste, wegen Renovierungsarbeiten servieren wir das Frühstück heute im Wintergarten.',
        rf: ['Das Frühstück ist heute an einem anderen Ort.', 'richtig'], mc: ['Das Frühstück gibt es heute …', ['im Restaurant.', 'im Wintergarten.', 'auf dem Zimmer.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Fahrschule: Hallo, Frau Okoro, hier ist die Fahrschule Spurwechsel. Ihr Termin für die praktische Prüfung steht fest: Montag, der 12., um 7.30 Uhr. Kommen Sie bitte eine Viertelstunde früher.',
          rf: ['Frau Okoro hat ihre Prüfung schon gemacht.', 'falsch', 'Ihr Termin für die praktische Prüfung steht fest', 'Die Fahrschule teilt nur den Termin der Prüfung mit, die Prüfung liegt also noch vor Frau Okoro.'],
          mc: ['Frau Okoro soll …', ['15 Minuten früher kommen.', 'den Termin bestätigen.', 'ihren Ausweis schicken.'], 'a', 'Kommen Sie bitte eine Viertelstunde früher.', 'Eine Viertelstunde sind fünfzehn Minuten, so viel früher soll Frau Okoro zur Prüfung kommen.'] },
        { script: 'Radiotipp: Am Freitag hat im Stadttheater das neue Stück „Der Leuchtturm“ Premiere. Für Schülerinnen und Schüler gibt es Karten zum halben Preis. Nach der Vorstellung können die Zuschauer mit den Schauspielern sprechen.',
          rf: ['Schüler bekommen die Karten billiger.', 'richtig', 'Für Schülerinnen und Schüler gibt es Karten zum halben Preis.', 'Karten zum halben Preis sind billiger, und dieses Angebot gilt für Schülerinnen und Schüler.'],
          mc: ['Nach der Vorstellung …', ['gibt es ein Konzert.', 'kann man mit den Schauspielern reden.', 'gibt es ein Essen.'], 'b', 'können die Zuschauer mit den Schauspielern sprechen', 'Nach der Vorstellung kann man mit den Schauspielern sprechen.'] },
        { script: 'Durchsage am Bahnsteig: Achtung an Gleis 7: Der Regionalexpress nach Seeburg fährt heute in umgekehrter Wagenreihung. Die erste Klasse finden Sie am Anfang des Bahnsteigs, Wagen mit Fahrradplätzen am Ende.',
          rf: ['Die Wagen des Zuges stehen heute anders als sonst.', 'richtig', 'fährt heute in umgekehrter Wagenreihung', '„Umgekehrte Wagenreihung“ bedeutet, dass die Wagen in anderer Reihenfolge als sonst stehen.'],
          mc: ['Die Fahrradplätze sind …', ['in der Mitte des Zuges.', 'am Anfang des Bahnsteigs.', 'am Ende des Bahnsteigs.'], 'c', 'Wagen mit Fahrradplätzen am Ende', 'Die erste Klasse steht am Anfang, die Wagen für Fahrräder stehen am Ende des Bahnsteigs.'] },
        { script: 'Nachricht von einer Kollegin: Hi Tanja, hier ist Ruth. Wegen der Firmenfeier am Freitag: Es ist doch kein schickes Fest, sondern ein Grillabend im Garten. Zieh also lieber etwas Bequemes an und bring eine Jacke mit.',
          rf: ['Die Firmenfeier ist ein elegantes Fest.', 'falsch', 'Es ist doch kein schickes Fest, sondern ein Grillabend im Garten.', 'Ruth korrigiert sich: Die Firmenfeier ist ein Grillabend im Garten, man soll etwas Bequemes anziehen.'],
          mc: ['Tanja soll …', ['eine Jacke mitnehmen.', 'Essen mitbringen.', 'früher kommen.'], 'a', 'bring eine Jacke mit', 'Ruth rät Tanja, eine Jacke mitzubringen.'] },
        { script: 'Ansage des Internetanbieters: Willkommen beim Kundenservice von Netzwelle. Zurzeit gibt es im Raum Seeburg eine Störung. Wir arbeiten daran und erwarten, dass das Internet ab 18 Uhr wieder funktioniert.',
          rf: ['Das Internet funktioniert im Moment überall.', 'falsch', 'Zurzeit gibt es im Raum Seeburg eine Störung.', 'Die Störung betrifft den Raum Seeburg, dort funktioniert das Internet gerade nicht.'],
          mc: ['Das Internet soll wieder funktionieren …', ['morgen früh.', 'ab 18 Uhr.', 'in einer Stunde.'], 'b', 'ab 18 Uhr wieder funktioniert', 'Der Anbieter erwartet, dass die Störung um 18 Uhr behoben ist.'] }
      ]
    },
    t2: {
      context: 'Sie besichtigen eine Wohnung und hören die Informationen der Maklerin.',
      script: 'Guten Tag, schön, dass Sie da sind! Die Wohnung hat drei Zimmer, Küche und Bad, insgesamt 78 Quadratmeter. '
        + 'Die Küche ist neu, die Geräte bleiben in der Wohnung. Die Kaltmiete beträgt 890 Euro, dazu kommen etwa 220 Euro Nebenkosten. '
        + 'Haustiere sind nach Absprache mit dem Vermieter erlaubt. Frei ist die Wohnung ab dem 1. März. '
        + 'Wenn Sie Interesse haben, schicken Sie mir bitte bis Freitag Ihre Unterlagen per E-Mail.',
      items: [
        ['Die Wohnung hat …', ['zwei Zimmer.', 'drei Zimmer.', 'vier Zimmer.'], 'b', 'Die Wohnung hat drei Zimmer, Küche und Bad', 'Die Maklerin nennt drei Zimmer plus Küche und Bad, insgesamt 78 Quadratmeter.'],
        ['Die Küchengeräte …', ['bleiben in der Wohnung.', 'muss man kaufen.', 'sind alt.'], 'a', 'die Geräte bleiben in der Wohnung', 'Die neue Küche wird mit allen Geräten übergeben, man muss also keine kaufen.'],
        ['Haustiere …', ['sind verboten.', 'sind immer erlaubt.', 'muss der Vermieter erlauben.'], 'c', 'Haustiere sind nach Absprache mit dem Vermieter erlaubt.', '„Nach Absprache mit dem Vermieter“ heißt, dass er Haustiere im Einzelfall erlauben muss.'],
        ['Einziehen kann man …', ['ab März.', 'sofort.', 'ab Januar.'], 'a', 'Frei ist die Wohnung ab dem 1. März.', 'Ab dem ersten März ist die Wohnung frei, dann kann man einziehen.'],
        ['Wer die Wohnung möchte, soll …', ['sofort unterschreiben.', 'die Unterlagen per E-Mail schicken.', 'den Vermieter anrufen.'], 'b', 'schicken Sie mir bitte bis Freitag Ihre Unterlagen per E-Mail', 'Interessenten sollen der Maklerin bis Freitag ihre Bewerbungsunterlagen mailen, nicht sofort unterschreiben.']
      ]
    },
    t3: {
      context: 'Sie sind in der Kantine und hören, wie zwei Kollegen über den Weg zur Arbeit sprechen.',
      script: 'Stefan: Mensch, Ali, du bist ja ganz nass! Bist du mit dem Rad gekommen?\n'
        + 'Ali: Ja, seit zwei Wochen fahre ich jeden Tag mit dem Fahrrad, fünfzehn Kilometer. Heute hat es leider geregnet.\n'
        + 'Stefan: Fünfzehn Kilometer! Wie lange brauchst du denn?\n'
        + 'Ali: Etwa vierzig Minuten. Mit dem Auto im Stau war es auch nicht viel schneller.\n'
        + 'Stefan: Und wo duschst du hier?\n'
        + 'Ali: Im Keller gibt es eine Dusche für die Mitarbeiter. Das wissen viele gar nicht.\n'
        + 'Stefan: Wirklich? Ich überlege schon lange, ob ich auch mit dem Rad komme. Aber im Winter ist mir das zu kalt.\n'
        + 'Ali: Das sehe ich auch so. Im Winter nehme ich wahrscheinlich die S-Bahn.\n'
        + 'Stefan: Weißt du was, ich probiere es nächste Woche einmal aus. Fährst du mit mir die Strecke?\n'
        + 'Ali: Klar, wir treffen uns am Montag an der Brücke.',
      items: [
        ['Ali fährt seit zwei Wochen mit dem Rad zur Arbeit.', 'richtig', 'seit zwei Wochen fahre ich jeden Tag mit dem Fahrrad', 'Ali fährt seit zwei Wochen mit dem Rad.'],
        ['Mit dem Auto war Ali viel schneller.', 'falsch', 'Mit dem Auto im Stau war es auch nicht viel schneller.', 'Ali stand mit dem Auto oft im Stau und war damit kaum schneller als mit dem Rad.'],
        ['In der Firma kann man duschen.', 'richtig', 'Im Keller gibt es eine Dusche für die Mitarbeiter.', 'Für Mitarbeiter gibt es im Keller der Firma eine Dusche, die viele nicht kennen.'],
        ['Alle Mitarbeiter kennen die Dusche.', 'falsch', 'Das wissen viele gar nicht.', 'Viele wissen nicht, dass es die Dusche gibt.'],
        ['Ali möchte auch im Winter mit dem Rad fahren.', 'falsch', 'Im Winter nehme ich wahrscheinlich die S-Bahn.', 'Ali findet den Winter zum Radfahren zu kalt und will dann die S-Bahn nehmen.'],
        ['Stefan will nächste Woche mit dem Fahrrad kommen.', 'richtig', 'ich probiere es nächste Woche einmal aus', 'Stefan will es nächste Woche ausprobieren.'],
        ['Die beiden treffen sich am Montag an einer Brücke.', 'richtig', 'wir treffen uns am Montag an der Brücke', 'Ali und Stefan verabreden sich für Montag an der Brücke, um zusammen zu radeln.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Wagner', 'Herr Costa'],
      script: 'Moderator: Guten Abend! Sollen alle Schülerinnen und Schüler ein Pflichtpraktikum in einem Pflegeheim, einem Krankenhaus oder einer Kita machen? '
        + 'Darüber diskutiere ich mit Frau Wagner, Lehrerin an einem Gymnasium, und Herrn Costa, Leiter eines Pflegeheims.\n'
        + 'Herr Costa: Wir haben jedes Jahr Praktikanten. Viele merken erst bei uns, wie schön es ist, für andere Menschen da zu sein.\n'
        + 'Frau Wagner: Das glaube ich. Aber ein Pflichtpraktikum muss gut vorbereitet sein. Sonst stehen die Jugendlichen nur herum.\n'
        + 'Moderator: Wie lange sollte so ein Praktikum dauern?\n'
        + 'Frau Wagner: Zwei Wochen sind realistisch. Mehr Zeit haben wir im Schuljahr leider nicht.\n'
        + 'Herr Costa: Für uns ist das zu kurz. In zwei Wochen lernen die Bewohner die jungen Leute kaum kennen.\n'
        + 'Moderator: Eine Hörerin hat uns dazu eine interessante Frage geschickt.\n'
        + 'Herr Costa: Vielleicht entscheidet sich der eine oder andere später für einen Beruf in der Pflege. Das wäre für uns ein großer Gewinn.\n'
        + 'Frau Wagner: Wichtig ist, dass die Schüler zwischen mehreren Bereichen wählen können.',
      example: ['Unser Thema: ein Pflichtpraktikum im sozialen Bereich für alle Schüler.', 'a'],
      items: [
        ['Viele junge Leute entdecken bei uns, dass sie gern helfen.', 'c', 'wie schön es ist, für andere Menschen da zu sein', 'Herr Costa sagt, dass viele Praktikanten das Helfen schön finden.'],
        ['Ohne Vorbereitung bringt das Praktikum wenig.', 'b', 'Sonst stehen die Jugendlichen nur herum.', 'Frau Wagner fordert eine gute Vorbereitung.'],
        ['Wie viel Zeit sollte das Praktikum haben?', 'a', 'Wie lange sollte so ein Praktikum dauern?', 'Der Moderator möchte wissen, wie viele Wochen ein Pflichtpraktikum dauern sollte.'],
        ['In der Schule ist nur Zeit für zwei Wochen.', 'b', 'Zwei Wochen sind realistisch.', 'Frau Wagner sagt, dass das Schuljahr nicht mehr als zwei Wochen Praktikum zulässt.'],
        ['Zwei Wochen reichen nicht, um sich kennenzulernen.', 'c', 'In zwei Wochen lernen die Bewohner die jungen Leute kaum kennen.', 'Herr Costa findet zwei Wochen zu kurz, weil die Bewohner die Praktikanten in dieser Zeit kaum kennenlernen.'],
        ['Eine Hörerin hat eine Frage geschickt.', 'a', 'Eine Hörerin hat uns dazu eine interessante Frage geschickt.', 'Der Moderator teilt mit, dass eine Hörerin eine Frage eingesandt hat.'],
        ['Vielleicht finden so mehr Menschen einen Pflegeberuf.', 'c', 'Vielleicht entscheidet sich der eine oder andere später für einen Beruf in der Pflege.', 'Herr Costa hofft, dass manche später in die Pflege gehen.'],
        ['Die Schüler sollten sich den Bereich aussuchen dürfen.', 'b', 'dass die Schüler zwischen mehreren Bereichen wählen können', 'Frau Wagner möchte, dass Schüler zwischen Pflegeheim, Krankenhaus und Kita wählen dürfen.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben eine Woche Urlaub auf einer Insel gemacht. Ihre Kollegin Svenja plant auch einen Urlaub dort. Schreiben Sie Svenja eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wo haben Sie gewohnt, und was haben Sie gemacht?\n– Begründen Sie: Was hat Ihnen nicht gefallen?\n– Geben Sie Svenja einen Tipp für ihre Reise.', functions: ['describe', 'justify', 'advise'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Fernsehsendung eine Diskussion zum Thema „Leben ohne Fernseher“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Ulrike: Wir haben seit drei Jahren keinen Fernseher mehr. Filme schauen wir manchmal am Computer, sonst lesen wir oder spielen mit den Kindern. Könnten Sie sich das vorstellen?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Aus Ihrer Waschmaschine ist Wasser gelaufen, und an der Decke Ihrer Nachbarin unten ist jetzt ein Fleck. Schreiben Sie Ihrer Vermieterin, Frau Brenner. Informieren Sie sie und entschuldigen Sie sich (circa 40 Wörter).',
      functions: ['inform', 'apologise'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Sie trainieren in Ihrem Sportverein eine Kindermannschaft. Sie möchten mit den Kindern einen Ausflug an einen See machen.\n\n– Wann?\n– Wie hinkommen?\n– Was mitnehmen?\n– Wer begleitet die Kinder?\n– Was kostet es?',
      partner: [
        'Partner: Hallo! Wir wollen doch mit der Mannschaft an den See fahren. Welcher Tag passt dir?',
        'Partner: Gut. Wie kommen wir mit zwanzig Kindern dorthin?',
        'Partner: Okay. Brauchen wir noch Eltern, die mitkommen?'
      ]
    },
    t2: { topics: ['Wie wichtig ist das gemeinsame Familienessen?', 'Mit dem Handy lernen – eine gute Idee?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin: Ich spreche heute darüber, ob man mit dem Handy gut lernen kann. Ich lerne seit einem Jahr Spanisch, weil meine Schwiegereltern in Madrid wohnen. Jeden Morgen im Bus übe ich zehn Minuten Vokabeln mit einer App, und abends höre ich manchmal einen Podcast. Das funktioniert gut, weil ich diese kleinen Pausen sonst nicht nutzen würde. In meinem Heimatland lernen viele Schüler mit Videos im Internet, weil Nachhilfe sehr teuer ist. Ein Vorteil ist also, dass das Lernen mit dem Handy billig oder sogar kostenlos ist. Außerdem kann man überall lernen. Es gibt aber auch Nachteile: Das Handy lenkt schnell ab, eine Nachricht kommt und schon ist man woanders. Und für Grammatik brauche ich ein Buch und einen Lehrer, der mir Fehler erklärt. Meine Meinung: Das Handy ist ein gutes Werkzeug zum Üben, aber es ersetzt keinen Kurs. Zum Schluss empfehle ich, beim Lernen alle Benachrichtigungen auszuschalten. Danke.',
      examinerQuestion: 'Prüferin: Wie oft isst Ihre Familie zusammen? Was ist dabei für Sie wichtig?'
    }
  }
});
