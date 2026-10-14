/* SYNTHETIC B1 PRACTICE form P10: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P10 = buildPracticeForm({
  n: 10, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Hallo Kerstin,\n\n'
        + 'entschuldige, dass ich mich so lange nicht gemeldet habe! Seit Juni bin ich in Elternzeit, und mit einem kleinen Baby hat der Tag einfach zu wenige Stunden. '
        + 'Meine Frau arbeitet wieder, und ich bleibe acht Monate mit Emil zu Hause.\n\n'
        + 'Ehrlich gesagt hatte ich mir das ruhiger vorgestellt. Emil schläft nachts noch nicht durch, und tagsüber will er ständig getragen werden. '
        + 'Trotzdem genieße ich die Zeit sehr. Zweimal pro Woche gehe ich mit ihm in eine Krabbelgruppe. Dort bin ich meistens der einzige Vater, aber die anderen Eltern sind sehr nett.\n\n'
        + 'In meiner Firma war man zuerst überrascht, dass ein Mann so lange Elternzeit nimmt. Mein Chef hat es aber sofort akzeptiert. '
        + 'Im Februar fange ich wieder an, zuerst nur mit 30 Stunden pro Woche.\n\n'
        + 'Besuch uns doch mal, Emil freut sich bestimmt!\nHenrik',
      example: ['Henrik ist zurzeit in Elternzeit.', 'richtig'],
      items: [
        ['Henriks Frau ist auch zu Hause.', 'falsch', 'Meine Frau arbeitet wieder', 'Henriks Frau geht wieder arbeiten, während Henrik allein mit Emil zu Hause bleibt.'],
        ['Henrik findet die Zeit mit dem Baby anstrengender als erwartet.', 'richtig', 'Ehrlich gesagt hatte ich mir das ruhiger vorgestellt.', 'Henrik hatte sich die Zeit ruhiger vorgestellt.'],
        ['Emil schläft nachts schon ohne Pause.', 'falsch', 'Emil schläft nachts noch nicht durch', 'Henrik schreibt, dass das Baby in der Nacht immer wieder wach wird, also nicht ohne Pause schläft.'],
        ['In der Krabbelgruppe sind kaum andere Väter.', 'richtig', 'Dort bin ich meistens der einzige Vater', 'Henrik ist meistens der einzige Vater in der Gruppe.'],
        ['Henriks Chef war gegen die lange Elternzeit.', 'falsch', 'Mein Chef hat es aber sofort akzeptiert.', 'Nur die Firma war überrascht, Henriks Chef hat die lange Elternzeit dagegen sofort akzeptiert.'],
        ['Nach der Elternzeit arbeitet Henrik zuerst weniger Stunden.', 'richtig', 'zuerst nur mit 30 Stunden pro Woche', 'Henrik beginnt zuerst mit 30 Stunden pro Woche.']
      ]
    },
    t2: [
      {
        text: 'Jung und Alt unter einem Dach\n\nIn der Bahnhofstraße in Wiesental ist ein neues Wohnhaus fertig: Dort leben Studierende, Familien und ältere Menschen zusammen. '
          + 'Jede Partei hat eine eigene Wohnung, aber es gibt einen großen Gemeinschaftsraum und einen Garten für alle. Einmal im Monat kochen die Bewohner zusammen. '
          + 'Die Idee hatte eine Genossenschaft, die das Haus auch gebaut hat. Die Mieten sind günstiger als in der Umgebung, dafür sollen alle Bewohner sich gegenseitig helfen. '
          + 'Für die 24 Wohnungen gab es über 300 Bewerbungen.',
        example: ['Im neuen Haus wohnen …', ['Menschen verschiedenen Alters.', 'nur Studierende.', 'nur Familien.'], 'a'],
        items: [
          ['Gemeinsam benutzen die Bewohner …', ['die Küchen der Wohnungen.', 'einen Raum und den Garten.', 'die Autos.'], 'b', 'einen großen Gemeinschaftsraum und einen Garten für alle', 'Jede Partei hat eine eigene Wohnung und Küche, gemeinsam gibt es nur einen großen Raum und den Garten.'],
          ['Die Mieten sind …', ['niedriger als in der Nähe.', 'höher als in der Nähe.', 'für alle gleich.'], 'a', 'Die Mieten sind günstiger als in der Umgebung', '„Günstiger als in der Umgebung“ bedeutet niedrigere Mieten als in der Nähe.'],
          ['Für die Wohnungen …', ['gibt es noch keine Bewerber.', 'hat die Stadt die Mieter ausgewählt.', 'haben sich sehr viele Menschen beworben.'], 'c', 'Für die 24 Wohnungen gab es über 300 Bewerbungen.', 'Über 300 Bewerbungen für 24 Wohnungen zeigen, dass sich sehr viele Menschen beworben haben.']
        ]
      },
      {
        text: 'Lastenräder zum Ausleihen\n\nWer in Wiesental einen großen Einkauf oder eine Kiste Getränke transportieren muss, braucht dafür kein Auto mehr: '
          + 'Die Stadt verleiht seit April vier Lastenräder kostenlos. Man reserviert sie im Internet und holt sie dann im Rathaus oder in der Bücherei ab. '
          + 'Ein Rad kann man höchstens drei Tage behalten. Die Räder haben einen Elektromotor, deshalb sind auch Hügel kein Problem. '
          + 'Besonders junge Familien nutzen das Angebot, um ihre Kinder zu transportieren.',
        items: [
          ['Die Lastenräder …', ['kosten pro Tag fünf Euro.', 'kann man gratis leihen.', 'kann man nur kaufen.'], 'b', 'Die Stadt verleiht seit April vier Lastenräder kostenlos.', 'Die Stadt verlangt kein Geld für die Lastenräder, man leiht sie also gratis.'],
          ['Abholen kann man die Räder …', ['im Rathaus oder in der Bücherei.', 'am Bahnhof.', 'im Fahrradgeschäft.'], 'a', 'holt sie dann im Rathaus oder in der Bücherei ab', 'Nach der Reservierung im Internet holt man das Rad im Rathaus oder in der Bücherei, nicht am Bahnhof.'],
          ['Die Räder benutzen oft …', ['ältere Menschen.', 'Firmen.', 'Familien mit Kindern.'], 'c', 'Besonders junge Familien nutzen das Angebot', 'Vor allem junge Familien leihen die Räder, um damit ihre Kinder zu transportieren.']
        ]
      }
    ],
    t3: {
      ads: [
        'Töpferkurs am Abend: Tassen und Schalen selbst gestalten, Material inklusive.',
        'Wir suchen Zeitungsausträger für den frühen Morgen – ab 14 Jahren, Bezahlung pro Monat.',
        'Bergwandern für Familien: geführte Touren mit leichten Wegen, auch mit Kinderwagen möglich.',
        'Hochzeitskleid, Größe 38, nur einmal getragen, günstig abzugeben.',
        'Online-Kurs Buchhaltung für Selbstständige – lernen Sie in Ihrem Tempo.',
        'Hundeschule: Training für junge Hunde in kleinen Gruppen, samstags.',
        'Sprachtandem gesucht: Ich lerne Deutsch und biete Arabisch.',
        'Babysitter-Kurs für Jugendliche – mit Zertifikat nach drei Nachmittagen.',
        'Gartenhilfe gesucht: Wer mäht einmal pro Woche unseren Rasen?',
        'Möbeltischlerei repariert alte Stühle und Tische – kostenloser Kostenvoranschlag.'
      ],
      example: ['Sie möchten selbst Geschirr aus Ton machen.', 'a'],
      situations: [
        ['Ihre Tochter ist 15 und möchte vor der Schule etwas Geld verdienen.', 'b', 'ab 14 Jahren, Bezahlung pro Monat', 'Als Zeitungsausträgerin (b) kann man ab 14 morgens Geld verdienen.'],
        ['Sie haben einen jungen Hund, der nicht gut hört.', 'f', 'Training für junge Hunde in kleinen Gruppen', 'Ein junger Hund, der nicht gehorcht, braucht Training, und die Hundeschule (f) bietet das in kleinen Gruppen an.'],
        ['Sie möchten Arabisch lernen und dafür jemandem mit Deutsch helfen.', 'g', 'Ich lerne Deutsch und biete Arabisch.', 'Das Sprachtandem (g) bietet Arabisch und sucht Deutsch.'],
        ['Ein Stuhl von Ihrer Großmutter ist kaputt, und Sie möchten ihn behalten.', 'j', 'repariert alte Stühle und Tische', 'Den Stuhl der Großmutter will man reparieren lassen statt wegwerfen, das macht die Tischlerei (j).'],
        ['Sie haben sich selbstständig gemacht und müssen Ihre Rechnungen selbst organisieren.', 'e', 'Online-Kurs Buchhaltung für Selbstständige', 'Rechnungen organisieren ist Buchhaltung, und der Online-Kurs (e) richtet sich an Selbstständige.'],
        ['Ihr Sohn ist 16 und möchte gern als Babysitter arbeiten.', 'h', 'Babysitter-Kurs für Jugendliche', 'Der Babysitter-Kurs (h) ist für Jugendliche und gibt ein Zertifikat.'],
        ['Sie möchten mit Ihrer Familie eine mehrtägige Klettertour in den Alpen machen.', '0', 'geführte Touren mit leichten Wegen', 'Die Familientouren (c) haben nur leichte Wege, keine Klettertouren: 0.', 'c']
      ]
    },
    t4: {
      topic: 'Auf einem Familienportal wird gefragt: Sollen Großeltern regelmäßig auf die Enkelkinder aufpassen?',
      question: 'Findet die Person es gut, wenn Großeltern regelmäßig auf die Enkel aufpassen?',
      comments: [
        ['Carina, 34', 'Ohne meine Mutter könnte ich gar nicht arbeiten. Zweimal pro Woche holt sie die Kinder vom Kindergarten ab. Für uns alle ist das ein Gewinn.', 'ja'],
        ['Wilhelm, 67', 'Ich liebe meine Enkel, aber ich habe 45 Jahre gearbeitet. Jetzt möchte ich reisen und Zeit für mich haben. Feste Termine als Babysitter will ich nicht.', 'nein', 'Feste Termine als Babysitter will ich nicht.', 'Wilhelm möchte nach dem Arbeitsleben keine festen Babysitter-Termine.'],
        ['Leyla, 29', 'Meine Kinder lernen bei ihrer Oma Dinge, die ich ihnen nicht beibringen kann, zum Beispiel Stricken und alte Lieder. Das finde ich wunderbar.', 'ja', 'Das finde ich wunderbar.', 'Leyla findet es wunderbar, was die Kinder bei der Oma lernen.'],
        ['Petra, 63', 'Es gibt oft Streit, weil meine Tochter andere Regeln hat als ich, zum Beispiel bei Süßigkeiten. Deshalb passe ich nur noch im Notfall auf.', 'nein', 'Deshalb passe ich nur noch im Notfall auf.', 'Petra passt wegen des Streits nur noch im Notfall auf.'],
        ['Jens, 41', 'Großeltern bleiben durch die Enkel fit und jung. Mein Vater sagt, die Nachmittage mit den Kindern sind das Beste in seiner Woche.', 'ja', 'Großeltern bleiben durch die Enkel fit und jung.', 'Jens findet, dass Enkel ihre Großeltern fit halten, deshalb unterstützt er das regelmäßige Aufpassen.'],
        ['Agnieszka, 38', 'Meine Eltern wohnen 600 Kilometer entfernt. Ich finde, der Staat muss für genug Kita-Plätze sorgen, damit niemand von den Großeltern abhängig ist.', 'nein', 'damit niemand von den Großeltern abhängig ist', 'Agnieszka möchte genug Kita-Plätze, damit niemand von den Großeltern abhängt.'],
        ['Ruth, 70', 'Jeden Mittwoch sind die Enkel bei mir, und wir backen oder gehen in den Wald. Ich möchte das nicht mehr missen.', 'ja', 'Ich möchte das nicht mehr missen.', 'Ruth möchte die Mittwoche mit den Enkeln nicht mehr missen.'],
        ['Sascha, 36', 'Meine Schwiegereltern sind schon über achtzig. Für sie wäre das zu anstrengend. Man sollte von Großeltern nicht zu viel erwarten.', 'nein', 'Man sollte von Großeltern nicht zu viel erwarten.', 'Saschas Schwiegereltern sind über achtzig, für sie wäre das zu anstrengend, deshalb ist er dagegen.']
      ]
    },
    t5: {
      context: 'Ihre Waschmaschine ist kaputt, und Sie lesen die Regeln in einem Waschsalon.',
      text: 'Regeln im Waschsalon Sauberzeit\n\n'
        + '1. Bezahlung: Die Maschinen funktionieren nur mit der Kundenkarte. Die Karte bekommen Sie am Automaten am Eingang und laden sie dort mit Bargeld auf.\n\n'
        + '2. Waschmittel: Waschmittel ist im Preis enthalten. Bitte füllen Sie kein eigenes Waschmittel in die Maschinen.\n\n'
        + '3. Wäsche abholen: Holen Sie Ihre Wäsche bitte spätestens 15 Minuten nach Programmende ab. Danach dürfen andere Kunden die Wäsche in einen Korb legen.\n\n'
        + '4. Öffnungszeiten: Der Salon ist täglich von 6 bis 22 Uhr geöffnet. Die letzte Wäsche muss um 20.30 Uhr starten.',
      items: [
        ['Bezahlen kann man …', ['mit Münzen direkt an der Maschine.', 'nur mit einer Kundenkarte.', 'bei einem Mitarbeiter.'], 'b', 'Die Maschinen funktionieren nur mit der Kundenkarte.', 'Münzen werden an den Maschinen nicht angenommen, bezahlt wird nur mit der aufgeladenen Kundenkarte.'],
        ['Eigenes Waschmittel …', ['darf man nicht benutzen.', 'muss man mitbringen.', 'kostet extra.'], 'a', 'Bitte füllen Sie kein eigenes Waschmittel in die Maschinen.', 'Regel 2: Eigenes Waschmittel darf man nicht einfüllen.'],
        ['Wer seine Wäsche zu spät abholt, …', ['muss eine Strafe zahlen.', 'bekommt sie erst am nächsten Tag.', 'findet sie vielleicht in einem Korb.'], 'c', 'Danach dürfen andere Kunden die Wäsche in einen Korb legen.', 'Wer nicht spätestens 15 Minuten nach Programmende kommt, findet die Wäsche vielleicht in einem Korb.'],
        ['Die letzte Wäsche muss …', ['um 22 Uhr fertig sein.', 'vor 20.30 Uhr beginnen.', 'am Morgen starten.'], 'b', 'Die letzte Wäsche muss um 20.30 Uhr starten.', 'Um 20.30 Uhr muss die letzte Maschine laufen, damit sie bis zur Schließung um 22 Uhr fertig ist.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage in der Messehalle: Liebe Besucherinnen und Besucher, der Vortrag „Wohnen im Alter“ beginnt in fünf Minuten in Halle 3.',
        rf: ['Gleich beginnt ein Vortrag.', 'richtig'], mc: ['Der Vortrag ist in …', ['Halle 1.', 'Halle 2.', 'Halle 3.'], 'c'] },
      texts: [
        { script: 'Nachricht von der Bank: Guten Tag, Frau Hartmann, hier ist die Stadtbank Wiesental. Ihre neue Bankkarte ist da. Sie können sie ab Donnerstag in unserer Filiale abholen. Bitte bringen Sie Ihren Personalausweis mit.',
          rf: ['Frau Hartmann bekommt die Karte per Post.', 'falsch', 'Sie können sie ab Donnerstag in unserer Filiale abholen.', 'Frau Hartmann holt die Karte in der Filiale ab.'],
          mc: ['Frau Hartmann braucht …', ['ihren Ausweis.', 'ihre alte Karte.', 'einen Termin.'], 'a', 'Bitte bringen Sie Ihren Personalausweis mit.', 'Sie soll ihren Personalausweis mitbringen.'] },
        { script: 'Radiotipp: Morgen Abend liest die Krimiautorin Hanna Feld in der Buchhandlung am Markt aus ihrem neuen Roman. Die Lesung beginnt um 19.30 Uhr. Karten gibt es nur im Vorverkauf in der Buchhandlung.',
          rf: ['Die Lesung ist morgen Abend.', 'richtig', 'Morgen Abend liest die Krimiautorin', 'Die Autorin liest morgen Abend in der Buchhandlung.'],
          mc: ['Karten bekommt man …', ['an der Abendkasse.', 'im Internet.', 'vorher in der Buchhandlung.'], 'c', 'Karten gibt es nur im Vorverkauf in der Buchhandlung.', 'Eine Abendkasse oder Online-Karten gibt es nicht, man kauft die Karten vorher direkt in der Buchhandlung.'] },
        { script: 'Durchsage am Bahnhof: Reisende mit Fahrrad nach Bergstadt beachten bitte: In der Regionalbahn um 8.15 Uhr ist der Fahrradwagen heute im letzten Teil des Zuges. Fahrräder sind dort nur mit Fahrradkarte erlaubt.',
          rf: ['Der Fahrradwagen ist heute vorne im Zug.', 'falsch', 'im letzten Teil des Zuges', 'Der Fahrradwagen ist heute hinten im Zug.'],
          mc: ['Für das Fahrrad braucht man …', ['eine Reservierung.', 'eine Fahrradkarte.', 'nichts extra.'], 'b', 'Fahrräder sind dort nur mit Fahrradkarte erlaubt.', 'Ohne eigene Karte für das Rad darf man das Fahrrad nicht in den Fahrradwagen stellen.'] },
        { script: 'Nachricht von einer Kollegin: Hi Jan, hier ist Simone. Ich habe heute Morgen meinen Büroschlüssel zu Hause vergessen. Kannst du mir die Tür aufmachen? Ich bin gegen halb neun da und warte am Seiteneingang.',
          rf: ['Simone hat ihren Schlüssel verloren.', 'falsch', 'meinen Büroschlüssel zu Hause vergessen', 'Simone hat den Schlüssel zu Hause vergessen, nicht verloren.'],
          mc: ['Simone wartet …', ['am Haupteingang.', 'am Seiteneingang.', 'in der Kantine.'], 'b', 'warte am Seiteneingang', 'Simone hat keinen Schlüssel und wartet deshalb am Nebeneingang, bis Jan sie hineinlässt.'] },
        { script: 'Ansage im Möbelhaus: Liebe Eltern, unser Kinderparadies im Erdgeschoss ist heute bis 19 Uhr geöffnet. Kinder ab drei Jahren können dort bis zu einer Stunde kostenlos spielen, während Sie in Ruhe einkaufen.',
          rf: ['Im Kinderparadies können Kinder kostenlos spielen.', 'richtig', 'bis zu einer Stunde kostenlos spielen', 'Im Kinderparadies dürfen Kinder bis zu sechzig Minuten spielen, ohne dass die Eltern bezahlen.'],
          mc: ['Kinder dürfen ins Kinderparadies, wenn sie …', ['mindestens drei Jahre alt sind.', 'mit einem Erwachsenen kommen.', 'angemeldet sind.'], 'a', 'Kinder ab drei Jahren', 'Das Kinderparadies nimmt Kinder ab drei Jahren auf, jüngere dürfen nicht hinein.'] }
      ]
    },
    t2: {
      context: 'Sie besuchen einen Töpferkurs und hören die Kursleiterin am ersten Abend.',
      script: 'Herzlich willkommen zum Töpferkurs! Der Kurs hat sechs Abende, wir treffen uns immer dienstags von 18 bis 20 Uhr. '
        + 'Heute machen wir eine einfache Schale mit der Hand, die Töpferscheibe benutzen wir erst ab dem dritten Abend. '
        + 'Tragen Sie bitte alte Kleidung, denn Ton macht schmutzig. Ihre Stücke müssen zwei Wochen trocknen, bevor wir sie brennen. '
        + 'Am letzten Abend dürfen Sie alles mit nach Hause nehmen.',
      items: [
        ['Der Kurs findet statt …', ['an sechs Dienstagen.', 'jeden Tag eine Woche lang.', 'an zwei Wochenenden.'], 'a', 'Der Kurs hat sechs Abende, wir treffen uns immer dienstags', 'Der Töpferkurs trifft sich sechsmal, jedes Mal dienstags, also an sechs Dienstagen.'],
        ['Heute arbeiten die Teilnehmer …', ['an der Töpferscheibe.', 'mit den Händen.', 'mit Farben.'], 'b', 'Heute machen wir eine einfache Schale mit der Hand', 'Am ersten Abend formen die Teilnehmer die Schale nur mit den Händen, ohne Scheibe.'],
        ['Die Töpferscheibe benutzt man …', ['heute.', 'am letzten Abend.', 'ab dem dritten Abend.'], 'c', 'die Töpferscheibe benutzen wir erst ab dem dritten Abend', 'Die Töpferscheibe kommt erst ab dem dritten Treffen zum Einsatz, nicht heute.'],
        ['Bevor die Stücke gebrannt werden, …', ['müssen sie trocknen.', 'werden sie bemalt.', 'nimmt man sie mit nach Hause.'], 'a', 'Ihre Stücke müssen zwei Wochen trocknen, bevor wir sie brennen.', 'Bevor der Ton gebrannt wird, muss er zwei Wochen lang trocknen.'],
        ['Die fertigen Stücke …', ['bleiben im Kursraum.', 'werden verkauft.', 'nimmt man am letzten Abend mit.'], 'c', 'Am letzten Abend dürfen Sie alles mit nach Hause nehmen.', 'Am letzten Abend darf man alles mitnehmen.']
      ]
    },
    t3: {
      context: 'Sie sitzen in der Straßenbahn und hören, wie zwei Freunde über ihre Urlaubspläne sprechen.',
      script: 'Felix: Und, Hanna, habt ihr euren Skiurlaub schon gebucht?\n'
        + 'Hanna: Ja, wir fahren im Februar eine Woche nach Österreich. Diesmal in eine kleine Pension, nicht ins Hotel.\n'
        + 'Felix: Fahrt ihr wieder mit dem Auto?\n'
        + 'Hanna: Nein, mit dem Zug. Mit Schnee auf der Autobahn hatten wir letztes Jahr viel Stress.\n'
        + 'Felix: Können eure Kinder schon Ski fahren?\n'
        + 'Hanna: Die Große ja, der Kleine macht dieses Jahr seinen ersten Skikurs. Ich bin gespannt.\n'
        + 'Felix: Wir bleiben im Winter zu Hause. Dafür fahren wir im Sommer drei Wochen ans Meer.\n'
        + 'Hanna: Auch schön. Und wer kümmert sich in der Zeit um euren Hund?\n'
        + 'Felix: Den nehmen wir mit. Die Ferienwohnung ist extra für Familien mit Hund.',
      items: [
        ['Hanna fährt im Februar in den Skiurlaub.', 'richtig', 'wir fahren im Februar eine Woche nach Österreich', 'Hanna fährt im Februar für eine Woche zum Skifahren nach Österreich.'],
        ['Hannas Familie übernachtet in einem Hotel.', 'falsch', 'Diesmal in eine kleine Pension, nicht ins Hotel.', 'Die Familie wohnt in einer kleinen Pension.'],
        ['Hannas Familie fährt mit dem Zug.', 'richtig', 'Nein, mit dem Zug.', 'Die Familie fährt diesmal mit dem Zug.'],
        ['Beide Kinder von Hanna können schon Ski fahren.', 'falsch', 'der Kleine macht dieses Jahr seinen ersten Skikurs', 'Der kleine Sohn macht erst seinen ersten Skikurs.'],
        ['Felix fährt im Winter weg.', 'falsch', 'Wir bleiben im Winter zu Hause.', 'Felix verreist im Winter nicht, sein Urlaub ist erst im Sommer.'],
        ['Felix macht im Sommer drei Wochen Urlaub am Meer.', 'richtig', 'im Sommer drei Wochen ans Meer', 'Statt Skiurlaub plant Felix drei Wochen Sommerurlaub am Meer mit Hund.'],
        ['Der Hund von Felix bleibt bei Freunden.', 'falsch', 'Den nehmen wir mit.', 'Felix nimmt den Hund mit.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Becker', 'Herr Ulrich'],
      script: 'Moderator: Guten Abend! Immer mehr Schülerinnen und Schüler bekommen Nachhilfe. Brauchen Kinder heute mehr Unterstützung als früher? '
        + 'Bei mir sind Frau Becker, sie gibt seit fünfzehn Jahren Nachhilfe, und Herr Ulrich, Leiter einer Gesamtschule.\n'
        + 'Frau Becker: Viele Eltern kommen schon in der dritten Klasse zu mir, weil sie Angst vor der Empfehlung für die weiterführende Schule haben.\n'
        + 'Herr Ulrich: Diese Angst verstehe ich. Aber gute Schulen sollten so unterrichten, dass Nachhilfe meistens nicht nötig ist.\n'
        + 'Moderator: Wie teuer ist Nachhilfe denn?\n'
        + 'Frau Becker: Bei mir kostet eine Stunde 25 Euro. Viele Familien können sich das nicht leisten.\n'
        + 'Herr Ulrich: Deshalb bieten wir an unserer Schule kostenlose Lernzeiten am Nachmittag an, mit älteren Schülern als Helfern.\n'
        + 'Moderator: Gleich lese ich noch die Nachricht einer Hörerin vor.\n'
        + 'Frau Becker: Oft geht es gar nicht um Mathe oder Englisch. Die Kinder brauchen einfach jemanden, der Zeit für sie hat.\n'
        + 'Herr Ulrich: Und manchmal hilft schon ein ruhiger Platz zum Lernen, den viele zu Hause nicht haben.',
      example: ['Thema: Brauchen Kinder heute mehr Nachhilfe?', 'a'],
      items: [
        ['Schon in der Grundschule suchen Eltern Hilfe.', 'b', 'Viele Eltern kommen schon in der dritten Klasse zu mir', 'Die dritte Klasse gehört zur Grundschule, und schon dann kommen Eltern zu Frau Becker.'],
        ['Guter Unterricht macht Nachhilfe oft überflüssig.', 'c', 'so unterrichten, dass Nachhilfe meistens nicht nötig ist', 'Herr Ulrich meint, dass guter Unterricht Nachhilfe meistens unnötig macht.'],
        ['Was kostet eine Stunde Nachhilfe?', 'a', 'Wie teuer ist Nachhilfe denn?', 'Der Moderator fragt nach dem Preis.'],
        ['Nicht alle Eltern haben genug Geld für Nachhilfe.', 'b', 'Viele Familien können sich das nicht leisten.', 'Mit 25 Euro pro Stunde ist Nachhilfe für viele Familien zu teuer, sagt Frau Becker.'],
        ['An unserer Schule helfen ältere Schüler den jüngeren.', 'c', 'mit älteren Schülern als Helfern', 'Herr Ulrich beschreibt kostenlose Lernzeiten mit älteren Schülern.'],
        ['Ich lese gleich eine Nachricht vor.', 'a', 'Gleich lese ich noch die Nachricht einer Hörerin vor.', 'Der Moderator kündigt an, dass er die Nachricht einer Hörerin gleich vorliest.'],
        ['Viele Kinder brauchen vor allem Aufmerksamkeit.', 'b', 'Die Kinder brauchen einfach jemanden, der Zeit für sie hat.', 'Frau Becker meint, dass Kinder oft keinen Fachunterricht, sondern einfach Zuwendung brauchen.'],
        ['Manchen Kindern fehlt zu Hause ein ruhiger Ort.', 'c', 'ein ruhiger Platz zum Lernen, den viele zu Hause nicht haben', 'Herr Ulrich weist darauf hin, dass viele Kinder daheim keinen stillen Lernplatz haben.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben am Wochenende einen Kurs zum Brotbacken gemacht. Ihr Freund Kemal backt auch gern. Schreiben Sie Kemal eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Was haben Sie im Kurs gemacht?\n– Begründen Sie: Was war neu für Sie?\n– Machen Sie einen Vorschlag, zusammen zu backen.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Fernsehen eine Sendung zum Thema „Urlaub zu Hause oder weit weg?“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Marco: Wir fliegen jedes Jahr in ein anderes Land. Nur so lernt man wirklich etwas Neues kennen. Urlaub zu Hause ist doch langweilig. Wie sehen Sie das?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie haben ein Buch aus der Stadtbibliothek verloren. Schreiben Sie an die Bibliothek, Frau Neumeier. Entschuldigen Sie sich und fragen Sie, was Sie jetzt tun müssen (circa 40 Wörter).',
      functions: ['apologise', 'ask'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ihre Abteilung möchte vor den Sommerferien ein Grillfest machen. Sie planen das Fest zusammen.\n\n– Wann und wo?\n– Essen und Getränke?\n– Vegetarisches Angebot?\n– Wer grillt?\n– Was bei Regen?',
      partner: [
        'Partner: Hallo! Wir sollen doch das Grillfest für unsere Abteilung planen. Wo könnten wir grillen?',
        'Partner: Gute Idee. Und was machen wir für die Kollegen, die kein Fleisch essen?',
        'Partner: Einverstanden. Was machen wir, wenn es an dem Tag regnet?'
      ]
    },
    t2: { topics: ['Sparen oder das Leben genießen?', 'Computerspiele für Kinder – gut oder schlecht?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner: Mein Thema heute: Computerspiele für Kinder – gut oder schlecht? Mein Sohn ist neun Jahre alt und darf am Wochenende eine Stunde am Computer spielen. Unter der Woche gibt es keine Spiele, weil er sonst seine Hausaufgaben vergisst. Am liebsten spielt er ein Spiel, in dem man eine Stadt baut und auf das Geld achten muss. Ich finde, dabei lernt er sogar etwas, zum Beispiel Rechnen und Planen. In meinem Heimatland spielen Kinder viel draußen, Computer haben dort nicht alle Familien, aber Handyspiele sind sehr beliebt. Vorteile von Spielen sind: Kinder lernen den Umgang mit Technik, und manche Spiele trainieren das Denken. Nachteile sind: Kinder bewegen sich zu wenig, und einige Spiele sind zu brutal für ihr Alter. Außerdem kann man schnell süchtig werden. Meiner Meinung nach sind Computerspiele nicht schlecht, wenn Eltern die Spiele kennen und eine feste Zeit vereinbaren. Zum Schluss: Am wichtigsten ist, dass Kinder auch Freunde treffen und Sport machen. Vielen Dank.',
      examinerQuestion: 'Prüferin: Sparen Sie für etwas Bestimmtes? Wofür würden Sie gern Geld ausgeben?'
    }
  }
});
