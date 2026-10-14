/* SYNTHETIC B1 PRACTICE form P12: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P12 = buildPracticeForm({
  n: 12, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Lieber Paolo,\n\n'
        + 'ich habe eine Neuigkeit: Seit August gehe ich abends wieder zur Schule! Ich mache am Abendgymnasium mein Abitur nach. '
        + 'Mit 16 habe ich die Schule verlassen, weil ich unbedingt Geld verdienen wollte. Heute würde ich gern studieren, am liebsten Soziale Arbeit.\n\n'
        + 'Der Unterricht ist von Montag bis Donnerstag, jeweils von 18 bis 21.30 Uhr. Tagsüber arbeite ich weiter im Lager, aber nur noch 30 Stunden pro Woche. '
        + 'Das ist schon anstrengend, vor allem wenn ich am Wochenende noch für Tests lernen muss. Meine Mitschüler sind zwischen 19 und 45 Jahre alt – ich bin also nicht der Älteste.\n\n'
        + 'Am schwierigsten ist für mich Mathematik. Zum Glück gibt es samstags eine kostenlose Lerngruppe. In zweieinhalb Jahren bin ich hoffentlich fertig.\n\n'
        + 'Viele Grüße\nJonas',
      example: ['Jonas besucht abends eine Schule.', 'richtig'],
      items: [
        ['Jonas hat die Schule früher verlassen, weil er arbeiten wollte.', 'richtig', 'weil ich unbedingt Geld verdienen wollte', 'Jonas wollte mit 16 unbedingt Geld verdienen.'],
        ['Der Unterricht findet an fünf Abenden pro Woche statt.', 'falsch', 'Der Unterricht ist von Montag bis Donnerstag', 'Der Unterricht ist an vier Abenden, Montag bis Donnerstag.'],
        ['Jonas hat seine Arbeit im Lager aufgegeben.', 'falsch', 'Tagsüber arbeite ich weiter im Lager', 'Jonas arbeitet weiter im Lager, nur weniger Stunden.'],
        ['Jonas ist der älteste Schüler in seiner Klasse.', 'falsch', 'ich bin also nicht der Älteste', 'Jonas schreibt, dass er nicht der Älteste ist.'],
        ['In Mathematik hat Jonas die meisten Probleme.', 'richtig', 'Am schwierigsten ist für mich Mathematik.', 'Mathematik ist für Jonas am schwierigsten.'],
        ['Die Lerngruppe am Samstag kostet nichts.', 'richtig', 'samstags eine kostenlose Lerngruppe', 'Die Lerngruppe am Samstag ist kostenlos.']
      ]
    },
    t2: [
      {
        text: 'Handwerk zum Anfassen\n\nAm kommenden Samstag öffnen zwanzig Handwerksbetriebe in Rheinau ihre Werkstätten. Jugendliche und ihre Eltern können dort sehen, '
          + 'wie Tischler, Elektrikerinnen oder Bäcker arbeiten, und selbst etwas ausprobieren. Viele Betriebe finden nämlich keine Auszubildenden mehr. '
          + 'Ein kostenloser Bus fährt den ganzen Tag zwischen den Werkstätten. Wer an mindestens fünf Stationen einen Stempel sammelt, bekommt einen Gutschein für das Kino.',
        example: ['Am Samstag kann man …', ['Werkstätten besuchen.', 'Werkzeuge kaufen.', 'eine Prüfung machen.'], 'a'],
        items: [
          ['Die Betriebe machen mit, weil sie …', ['mehr Kunden wollen.', 'neue Werkzeuge zeigen möchten.', 'Auszubildende suchen.'], 'c', 'Viele Betriebe finden nämlich keine Auszubildenden mehr.', 'Viele Betriebe finden keine Auszubildenden mehr.'],
          ['Zwischen den Werkstätten …', ['fährt ein Gratis-Bus.', 'muss man zu Fuß gehen.', 'kann man Fahrräder leihen.'], 'a', 'Ein kostenloser Bus fährt den ganzen Tag zwischen den Werkstätten.', 'Ein kostenloser Bus fährt zwischen den Werkstätten.'],
          ['Einen Kinogutschein bekommt man, wenn man …', ['etwas kauft.', 'fünf Stempel sammelt.', 'sich für eine Ausbildung bewirbt.'], 'b', 'Wer an mindestens fünf Stationen einen Stempel sammelt', 'Für fünf Stempel gibt es einen Kinogutschein.']
        ]
      },
      {
        text: 'Ein Café, in dem alle mitarbeiten\n\nIm „Café Miteinander“ am Rheinauer Hafen arbeiten Menschen mit und ohne Behinderung zusammen. '
          + 'Von den zwölf Mitarbeitenden haben acht eine Behinderung; sie backen Kuchen, bedienen die Gäste und kümmern sich um die Kasse. '
          + 'Das Café gehört einem Sozialverein. Die Preise sind ganz normal, und die Gäste kommen vor allem wegen des guten Kuchens. '
          + 'Im Sommer soll eine Terrasse am Wasser dazukommen.',
        items: [
          ['Im Café arbeiten …', ['nur Menschen mit Behinderung.', 'Menschen mit und ohne Behinderung.', 'nur Ehrenamtliche.'], 'b', 'arbeiten Menschen mit und ohne Behinderung zusammen', 'Im Café arbeiten Menschen mit und ohne Behinderung zusammen.'],
          ['Die Gäste kommen vor allem, weil …', ['der Kuchen gut ist.', 'die Preise niedrig sind.', 'das Café am Wasser liegt.'], 'a', 'die Gäste kommen vor allem wegen des guten Kuchens', 'Die Gäste kommen vor allem wegen des Kuchens.'],
          ['Im Sommer …', ['schließt das Café.', 'gibt es neue Mitarbeiter.', 'soll es eine Terrasse geben.'], 'c', 'Im Sommer soll eine Terrasse am Wasser dazukommen.', 'Im Sommer soll eine Terrasse dazukommen.']
        ]
      }
    ],
    t3: {
      ads: [
        'Drachenbau für Familien: An einem Nachmittag bauen Eltern und Kinder zusammen einen Drachen.',
        'Rückenschule im Büro: Ein Trainer kommt in Ihre Firma und zeigt Übungen am Arbeitsplatz.',
        'Brautkleider und Anzüge leihen statt kaufen – große Auswahl, Termin nach Vereinbarung.',
        'Gebrauchtes Klavier zu verschenken – Abholung selbst organisieren.',
        'Italienisch kochen mit einer Köchin aus Neapel, Kurs an zwei Abenden.',
        'Hilfe bei der Wohnungssuche für Studierende – Beratung im Studentenwerk.',
        'Verkauf von frischen Eiern direkt vom Hof, jeden Freitag auf dem Parkplatz am Rathaus.',
        'Familienfotograf kommt zu Ihnen nach Hause – natürliche Bilder ohne Studio.',
        'Rollstuhlgerechte Ferienwohnung am See, barrierefrei, mit großem Bad.',
        'Fahrradfahren für Kinder ohne Stützräder – Kurs in den Osterferien.'
      ],
      example: ['Sie möchten mit Ihren Kindern einen Drachen bauen.', 'a'],
      situations: [
        ['Ihre Mutter sitzt im Rollstuhl, und Sie suchen eine passende Ferienunterkunft.', 'i', 'Rollstuhlgerechte Ferienwohnung', 'Die Ferienwohnung (i) ist rollstuhlgerecht und barrierefrei.'],
        ['Viele Kollegen in Ihrer Firma haben Rückenschmerzen vom Sitzen.', 'b', 'Ein Trainer kommt in Ihre Firma', 'Bei der Rückenschule (b) kommt ein Trainer in die Firma.'],
        ['Sie heiraten bald, möchten aber kein teures Kleid kaufen.', 'c', 'Brautkleider und Anzüge leihen statt kaufen', 'Beim Verleih (c) kann man Brautkleider leihen.'],
        ['Sie fangen im Oktober an zu studieren und haben noch kein Zimmer.', 'f', 'Hilfe bei der Wohnungssuche für Studierende', 'Das Studentenwerk (f) hilft Studierenden bei der Wohnungssuche.'],
        ['Ihr Sohn ist sechs und will endlich ohne Hilfe Rad fahren.', 'j', 'Fahrradfahren für Kinder ohne Stützräder', 'Der Kurs (j) bringt Kindern Radfahren ohne Stützräder bei.'],
        ['Sie möchten zu Hause schöne Bilder von Ihrer Familie haben.', 'h', 'Familienfotograf kommt zu Ihnen nach Hause', 'Der Familienfotograf (h) kommt nach Hause.'],
        ['Sie suchen günstige Gitarrenstunden für Ihre Tochter.', '0', 'Gebrauchtes Klavier zu verschenken', 'Es gibt nur ein Klavier zu verschenken (d), keinen Gitarrenunterricht: 0.', 'd']
      ]
    },
    t4: {
      topic: 'In einem Gastronomie-Magazin wird gefragt: Dürfen Restaurants Kinder ausschließen?',
      question: 'Ist die Person für Restaurants ohne Kinder?',
      comments: [
        ['Bianca, 42', 'Einmal im Monat gehen mein Mann und ich schick essen. Dann möchten wir einfach Ruhe. Ein paar Restaurants ohne Kinder fände ich gut.', 'ja'],
        ['Tom, 35', 'Wir haben zwei kleine Kinder. Wenn Restaurants uns nicht mehr wollen, fühlen wir uns ausgeschlossen. Das finde ich unfair.', 'nein', 'Das finde ich unfair.', 'Tom fühlt sich mit seinen Kindern ausgeschlossen und findet das unfair.'],
        ['Erika, 69', 'Kinder gehören zum Leben dazu. Ein bisschen Lärm stört mich nicht, im Gegenteil: Ich freue mich, wenn ich Familien sehe.', 'nein', 'Ein bisschen Lärm stört mich nicht', 'Erika stört der Lärm von Kindern nicht.'],
        ['Jannik, 30', 'Ich arbeite als Koch. Wenn Kinder zwischen den Tischen rennen, ist das für die Kellner gefährlich. Für manche Lokale ist ein Verbot sinnvoll.', 'ja', 'Für manche Lokale ist ein Verbot sinnvoll.', 'Jannik findet ein Verbot für manche Lokale sinnvoll.'],
        ['Sevda, 38', 'Das Problem sind nicht die Kinder, sondern Eltern, die nicht aufpassen. Man sollte die Eltern ansprechen, nicht die Kinder ausschließen.', 'nein', 'nicht die Kinder ausschließen', 'Sevda will die Eltern ansprechen statt Kinder auszuschließen.'],
        ['Konstantin, 52', 'Es gibt Hotels nur für Erwachsene, warum also nicht auch Restaurants? Jeder Wirt sollte das selbst entscheiden dürfen. Ich bin dafür.', 'ja', 'Ich bin dafür.', 'Konstantin möchte, dass jeder Wirt selbst entscheiden darf.'],
        ['Ilse, 74', 'Früher haben Kinder im Restaurant still gesessen. Heute erlauben die Eltern alles. Ich verstehe jeden Wirt, der keine Kinder mehr will.', 'ja', 'Ich verstehe jeden Wirt, der keine Kinder mehr will.', 'Ilse versteht Wirte, die keine Kinder wollen.'],
        ['Rami, 28', 'Mit Spielecke und Kindermenü kann ein Restaurant Familien und andere Gäste zufriedenstellen. Ein Verbot ist nicht nötig.', 'nein', 'Ein Verbot ist nicht nötig.', 'Rami findet Lösungen wie eine Spielecke besser als ein Verbot.']
      ]
    },
    t5: {
      context: 'Sie möchten mit Ihren Kindern in einen Kletterpark gehen und lesen die Regeln.',
      text: 'Sicherheitsregeln im Kletterpark Waldhöhe\n\n'
        + '1. Alter: Kinder unter 10 Jahren klettern nur zusammen mit einem Erwachsenen. Pro Erwachsenem sind höchstens zwei Kinder erlaubt.\n\n'
        + '2. Einweisung: Vor dem Klettern nehmen alle an einer Einweisung von 20 Minuten teil. Ohne Einweisung darf niemand in den Parcours.\n\n'
        + '3. Kleidung: Tragen Sie feste Schuhe und Sportkleidung. Lange Haare müssen zusammengebunden werden.\n\n'
        + '4. Wetter: Bei Gewitter wird der Park sofort geschlossen. Das Eintrittsgeld wird dann als Gutschein erstattet.',
      items: [
        ['Ein Erwachsener darf mit …', ['höchstens zwei Kindern klettern.', 'beliebig vielen Kindern klettern.', 'keinem Kind klettern.'], 'a', 'Pro Erwachsenem sind höchstens zwei Kinder erlaubt.', 'Regel 1: Ein Erwachsener darf höchstens zwei Kinder begleiten.'],
        ['Vor dem Klettern muss man …', ['einen Test machen.', 'an einer Einweisung teilnehmen.', 'ein Formular online ausfüllen.'], 'b', 'Vor dem Klettern nehmen alle an einer Einweisung von 20 Minuten teil.', 'Regel 2: Vor dem Klettern gibt es eine Einweisung für alle.'],
        ['Wer lange Haare hat, …', ['muss einen Helm kaufen.', 'darf nicht klettern.', 'muss sie zusammenbinden.'], 'c', 'Lange Haare müssen zusammengebunden werden.', 'Regel 3: Lange Haare müssen zusammengebunden werden.'],
        ['Wenn der Park wegen Gewitter schließt, …', ['bekommt man einen Gutschein.', 'bekommt man Bargeld zurück.', 'bekommt man nichts zurück.'], 'a', 'Das Eintrittsgeld wird dann als Gutschein erstattet.', 'Regel 4: Das Eintrittsgeld wird als Gutschein erstattet.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Stadion: Liebe Zuschauer, wegen eines Unwetters beginnt das Spiel heute eine halbe Stunde später, um 16 Uhr.',
        rf: ['Das Spiel beginnt später.', 'richtig'], mc: ['Das Spiel beginnt um …', ['15.30 Uhr.', '16 Uhr.', '16.30 Uhr.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Steuerberaterin: Guten Tag, Herr Aydın, hier ist Frau Sommer. Für Ihre Steuererklärung fehlt mir noch die Bescheinigung von Ihrer Krankenkasse. Können Sie sie mir bis Ende des Monats schicken? Am besten per Post.',
          rf: ['Frau Sommer hat alle Unterlagen.', 'falsch', 'fehlt mir noch die Bescheinigung', 'Ihr fehlt noch die Bescheinigung der Krankenkasse.'],
          mc: ['Herr Aydın soll die Bescheinigung …', ['persönlich bringen.', 'per Post schicken.', 'per E-Mail schicken.'], 'b', 'Am besten per Post.', 'Frau Sommer möchte die Bescheinigung am besten per Post.'] },
        { script: 'Radiomeldung: Die Blutspendezentrale bittet dringend um Spenden, weil im Sommer viele Spender im Urlaub sind. Am Mittwoch kann man von 14 bis 19 Uhr in der Stadthalle Blut spenden. Jeder Spender bekommt einen kleinen Imbiss.',
          rf: ['Im Sommer fehlen Blutspenden.', 'richtig', 'weil im Sommer viele Spender im Urlaub sind', 'Im Sommer sind viele Spender im Urlaub.'],
          mc: ['Blut spenden kann man …', ['in der Stadthalle.', 'im Krankenhaus.', 'in der Schule.'], 'a', 'in der Stadthalle Blut spenden', 'Man spendet in der Stadthalle.'] },
        { script: 'Durchsage in der Bibliothek: Liebe Besucherinnen und Besucher, der Lesesaal schließt heute wegen einer Veranstaltung schon um 17 Uhr. Die Ausleihe im Erdgeschoss ist bis 19 Uhr für Sie geöffnet.',
          rf: ['Der Lesesaal ist heute bis 19 Uhr offen.', 'falsch', 'der Lesesaal schließt heute wegen einer Veranstaltung schon um 17 Uhr', 'Der Lesesaal schließt heute schon um 17 Uhr.'],
          mc: ['Bis 19 Uhr kann man …', ['im Lesesaal lernen.', 'die Veranstaltung besuchen.', 'Bücher ausleihen.'], 'c', 'Die Ausleihe im Erdgeschoss ist bis 19 Uhr für Sie geöffnet.', 'Die Ausleihe ist bis 19 Uhr geöffnet.'] },
        { script: 'Nachricht von einem Freund: Hallo Sebastian, hier ist Mario. Das Fußballtraining am Dienstag ist auf Mittwoch verschoben, weil der Platz neu markiert wird. Wir treffen uns wie immer um halb sieben.',
          rf: ['Das Training findet am Mittwoch statt.', 'richtig', 'ist auf Mittwoch verschoben', 'Das Training ist auf Mittwoch verschoben.'],
          mc: ['Der Grund für die Änderung ist …', ['das Wetter.', 'eine Arbeit am Platz.', 'ein Spiel.'], 'b', 'weil der Platz neu markiert wird', 'Der Platz wird neu markiert.'] },
        { script: 'Ansage des Recyclinghofs: Sie haben den Recyclinghof Rheinau erreicht. Ab November sind wir samstags nur noch bis 13 Uhr geöffnet. Elektrogeräte nehmen wir kostenlos an, für Bauschutt zahlen Sie eine Gebühr.',
          rf: ['Der Recyclinghof ist samstags bald länger offen.', 'falsch', 'samstags nur noch bis 13 Uhr geöffnet', 'Samstags ist der Hof ab November kürzer geöffnet.'],
          mc: ['Kostenlos abgeben kann man …', ['Bauschutt.', 'Möbel.', 'Elektrogeräte.'], 'c', 'Elektrogeräte nehmen wir kostenlos an', 'Elektrogeräte kann man kostenlos abgeben.'] }
      ]
    },
    t2: {
      context: 'Sie besuchen den Tag der offenen Tür einer Berufsschule.',
      script: 'Guten Tag und herzlich willkommen an der Berufsschule Rheinau! Bei uns lernen etwa 1 800 Auszubildende in vierzehn Berufen. '
        + 'Heute können Sie in allen Werkstätten zuschauen, nur die Schweißerei ist aus Sicherheitsgründen geschlossen. '
        + 'In der Mensa im Erdgeschoss kochen unsere angehenden Köche ein Mittagessen für Sie, das kostet drei Euro. '
        + 'Um 14 Uhr gibt es in der Aula Informationen zu freien Ausbildungsplätzen.',
      items: [
        ['An der Schule lernen …', ['etwa 1 800 Auszubildende.', 'nur Köche.', 'vierzehn Klassen.'], 'a', 'Bei uns lernen etwa 1 800 Auszubildende in vierzehn Berufen.', 'An der Schule lernen etwa 1 800 Auszubildende.'],
        ['Geschlossen ist heute …', ['die Mensa.', 'die Schweißerei.', 'die Aula.'], 'b', 'nur die Schweißerei ist aus Sicherheitsgründen geschlossen', 'Die Schweißerei ist aus Sicherheitsgründen geschlossen.'],
        ['Das Mittagessen kochen …', ['Lehrer.', 'Eltern.', 'Auszubildende.'], 'c', 'kochen unsere angehenden Köche ein Mittagessen für Sie', 'Die angehenden Köche kochen das Mittagessen.'],
        ['Das Mittagessen …', ['ist kostenlos.', 'kostet drei Euro.', 'gibt es nur für Schüler.'], 'b', 'das kostet drei Euro', 'Das Mittagessen kostet drei Euro.'],
        ['Um 14 Uhr informiert die Schule über …', ['freie Ausbildungsplätze.', 'die Prüfungen.', 'neue Werkstätten.'], 'a', 'Informationen zu freien Ausbildungsplätzen', 'Um 14 Uhr gibt es Informationen zu freien Ausbildungsplätzen.']
      ]
    },
    t3: {
      context: 'Sie stehen im Hof Ihres Wohnhauses und hören, wie sich zwei Nachbarinnen unterhalten.',
      script: 'Frau Novak: Guten Morgen, Frau Lindemann! Haben Sie schon von dem Gemeinschaftsgarten gehört?\n'
        + 'Frau Lindemann: Ja, der Hausmeister hat mir davon erzählt. Hinter der Garage sollen Beete entstehen, oder?\n'
        + 'Frau Novak: Genau. Die Hausverwaltung bezahlt die Erde und das Holz. Wir müssen die Beete aber selbst bauen.\n'
        + 'Frau Lindemann: Das kann ich leider nicht, mein Rücken macht nicht mit. Aber ich kann gießen, wenn andere im Urlaub sind.\n'
        + 'Frau Novak: Das hilft auch! Am Samstag treffen wir uns um zehn Uhr zum Bauen. Mein Sohn bringt Werkzeug mit.\n'
        + 'Frau Lindemann: Und was wollen Sie anpflanzen?\n'
        + 'Frau Novak: Ich denke an Tomaten und Kräuter. Kartoffeln brauchen zu viel Platz.\n'
        + 'Frau Lindemann: Dann backe ich für Samstag einen Kuchen für die fleißigen Helfer.',
      items: [
        ['Der Hausmeister hat Frau Lindemann von dem Garten erzählt.', 'richtig', 'der Hausmeister hat mir davon erzählt', 'Der Hausmeister hat ihr vom Garten erzählt.'],
        ['Die Beete sollen vor dem Haus entstehen.', 'falsch', 'Hinter der Garage sollen Beete entstehen', 'Die Beete entstehen hinter der Garage.'],
        ['Die Hausverwaltung bezahlt das Material.', 'richtig', 'Die Hausverwaltung bezahlt die Erde und das Holz.', 'Die Hausverwaltung bezahlt Erde und Holz.'],
        ['Frau Lindemann hilft beim Bauen der Beete.', 'falsch', 'Das kann ich leider nicht, mein Rücken macht nicht mit.', 'Wegen ihres Rückens kann Frau Lindemann nicht beim Bauen helfen.'],
        ['Das Treffen zum Bauen ist am Samstagvormittag.', 'richtig', 'Am Samstag treffen wir uns um zehn Uhr zum Bauen.', 'Man trifft sich am Samstag um zehn Uhr.'],
        ['Frau Novak möchte Kartoffeln anpflanzen.', 'falsch', 'Kartoffeln brauchen zu viel Platz.', 'Frau Novak möchte Tomaten und Kräuter, keine Kartoffeln.'],
        ['Frau Lindemann bringt am Samstag etwas zu essen mit.', 'richtig', 'Dann backe ich für Samstag einen Kuchen', 'Frau Lindemann backt einen Kuchen für die Helfer.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Seidel', 'Frau Kurz'],
      script: 'Moderatorin: Guten Tag! Wer in der Innenstadt unterwegs ist, sucht oft lange eine Toilette. Brauchen wir mehr öffentliche Toiletten? '
        + 'Bei mir sind Herr Seidel vom Ordnungsamt und Frau Kurz vom Seniorenbeirat der Stadt.\n'
        + 'Frau Kurz: Für ältere Menschen ist das ein großes Thema. Viele gehen nicht mehr in die Stadt, weil sie Angst haben, keine Toilette zu finden.\n'
        + 'Herr Seidel: Das verstehe ich. Aber eine öffentliche Toilette kostet im Jahr bis zu 30 000 Euro, vor allem für die Reinigung.\n'
        + 'Moderatorin: Gibt es denn günstigere Lösungen?\n'
        + 'Herr Seidel: Ja, zum Beispiel so: Restaurants lassen auch Nicht-Gäste auf ihre Toilette, und die Stadt bezahlt ihnen dafür einen kleinen Betrag.\n'
        + 'Frau Kurz: Das ist eine gute Idee, aber die Restaurants sind morgens oft noch geschlossen.\n'
        + 'Moderatorin: Ein Hörer hat uns gerade dazu angerufen.\n'
        + 'Frau Kurz: Wichtig ist auch, dass die Toiletten barrierefrei sind, also für Menschen mit Rollator oder Rollstuhl.\n'
        + 'Herr Seidel: Im nächsten Jahr wollen wir zwei neue Toiletten am Bahnhof und am Markt bauen.',
      example: ['Unser Thema: Brauchen wir mehr öffentliche Toiletten?', 'a'],
      items: [
        ['Manche Senioren bleiben deshalb lieber zu Hause.', 'c', 'Viele gehen nicht mehr in die Stadt', 'Frau Kurz sagt, dass viele ältere Menschen nicht mehr in die Stadt gehen.'],
        ['Die Reinigung ist sehr teuer.', 'b', 'eine öffentliche Toilette kostet im Jahr bis zu 30 000 Euro, vor allem für die Reinigung', 'Herr Seidel nennt die hohen Kosten, vor allem für die Reinigung.'],
        ['Geht das auch billiger?', 'a', 'Gibt es denn günstigere Lösungen?', 'Die Moderatorin fragt nach günstigeren Lösungen.'],
        ['Gaststätten öffnen ihre Toiletten für alle.', 'b', 'Restaurants lassen auch Nicht-Gäste auf ihre Toilette', 'Herr Seidel erklärt, dass Restaurants ihre Toiletten auch für Nicht-Gäste öffnen.'],
        ['Am Vormittag hilft diese Lösung oft nicht.', 'c', 'die Restaurants sind morgens oft noch geschlossen', 'Frau Kurz sagt, dass die Restaurants morgens oft geschlossen sind.'],
        ['Ein Zuhörer hat angerufen.', 'a', 'Ein Hörer hat uns gerade dazu angerufen.', 'Die Moderatorin erwähnt den Anruf eines Hörers.'],
        ['Auch Menschen im Rollstuhl müssen die Toiletten benutzen können.', 'c', 'dass die Toiletten barrierefrei sind', 'Frau Kurz fordert barrierefreie Toiletten.'],
        ['Nächstes Jahr entstehen zwei neue Toiletten.', 'b', 'Im nächsten Jahr wollen wir zwei neue Toiletten am Bahnhof und am Markt bauen.', 'Herr Seidel kündigt zwei neue Toiletten an.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben bei einem Gewinnspiel ein Wochenende in einem Hotel in den Bergen gewonnen. Ihre Freundin Anna möchte wissen, wie es war. Schreiben Sie Anna eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Was haben Sie dort gemacht?\n– Begründen Sie: Würden Sie wieder in dieses Hotel fahren?\n– Schlagen Sie vor, zusammen einen Ausflug zu machen.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Zeitschrift einen Artikel zum Thema „Bewertungen im Internet“ gelesen. Im Online-Forum der Zeitschrift finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Holger: Bevor ich ein Restaurant oder ein Hotel buche, lese ich immer die Bewertungen im Internet. Meine Frau sagt, die sind oft gefälscht. Was meinen Sie?', postLabel: 'Online-Forum', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie besuchen einen Kurs zur Prüfungsvorbereitung. Am Donnerstag kommen Sie wegen eines Arzttermins eine Stunde später. Schreiben Sie Ihrem Kursleiter, Herrn Ramos. Informieren Sie ihn und bitten Sie um die Arbeitsblätter (circa 40 Wörter).',
      functions: ['inform', 'request'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ein Kollege wird nächsten Monat 50 Jahre alt. Sie möchten für ihn eine Überraschungsparty im Büro organisieren.\n\n– Wann?\n– Wer wird eingeladen?\n– Essen und Getränke?\n– Geschenk?\n– Wie bleibt es eine Überraschung?',
      partner: [
        'Partner: Hallo! Wir wollen doch die Überraschungsparty für Herrn Krüger planen. Wann ist ein guter Zeitpunkt?',
        'Partner: Okay. Was schenken wir ihm – hast du eine Idee?',
        'Partner: Gut. Und wie sorgen wir dafür, dass er nichts merkt?'
      ]
    },
    t2: { topics: ['Sollen Kinder schon mit einem Jahr in die Kita?', 'Im Urlaub für die Arbeit erreichbar sein?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner präsentiert das Thema „Im Urlaub für die Arbeit erreichbar sein?“: Er liest im Urlaub keine E-Mails, weil er sich sonst nicht erholt. Seine Chefin akzeptiert das.',
      examinerQuestion: 'Prüferin: Wie war das bei Ihnen oder in Ihrer Familie: Wann sind die Kinder in die Kita gekommen?'
    }
  }
});
