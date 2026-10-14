/* SYNTHETIC B1 PRACTICE form P11: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P11 = buildPracticeForm({
  n: 11, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Ein Jahr ohne eigenes Auto\n\n'
        + 'Letzten Herbst ist unser altes Auto kaputtgegangen. Die Reparatur hätte 2 000 Euro gekostet, und wir mussten entscheiden: ein neues Auto kaufen oder ganz ohne leben? '
        + 'Wir, das sind mein Mann, ich und unsere zwei Kinder, haben uns für einen Versuch ohne Auto entschieden.\n\n'
        + 'Zur Arbeit fahren wir jetzt beide mit dem Fahrrad, bei Regen mit der Straßenbahn. Die Kinder gehen zu Fuß zur Schule – das machen sie sowieso lieber. '
        + 'Für den großen Einkauf am Samstag haben wir einen Fahrradanhänger gekauft. Nur zu meinen Eltern aufs Land ist es schwierig, weil der Bus am Wochenende kaum fährt. '
        + 'Dann leihen wir uns ein Auto beim Carsharing.\n\n'
        + 'Nach einem Jahr haben wir ausgerechnet: Wir haben fast 3 000 Euro gespart. Ein neues Auto kaufen wir deshalb erst einmal nicht.\n\n'
        + 'Sanja',
      example: ['Das Auto von Sanjas Familie ist kaputtgegangen.', 'richtig'],
      items: [
        ['Die Familie hat das alte Auto reparieren lassen.', 'falsch', 'Die Reparatur hätte 2 000 Euro gekostet', 'Die Reparatur wäre zu teuer gewesen; die Familie lebt seitdem ohne Auto.'],
        ['Sanja und ihr Mann fahren meistens mit dem Rad zur Arbeit.', 'richtig', 'Zur Arbeit fahren wir jetzt beide mit dem Fahrrad', 'Sanja und ihr Mann radeln jetzt beide zur Arbeit, nur bei Regen nehmen sie die Straßenbahn.'],
        ['Die Kinder fahren mit dem Bus zur Schule.', 'falsch', 'Die Kinder gehen zu Fuß zur Schule', 'Die Kinder fahren nicht mit dem Bus, sondern laufen zur Schule, was sie lieber mögen.'],
        ['Für den Wocheneinkauf benutzt die Familie einen Anhänger.', 'richtig', 'haben wir einen Fahrradanhänger gekauft', 'Für den großen Einkauf hat die Familie einen Fahrradanhänger gekauft.'],
        ['Zu Sanjas Eltern kommt man am Wochenende gut mit dem Bus.', 'falsch', 'weil der Bus am Wochenende kaum fährt', 'Am Wochenende fährt der Bus kaum zu Sanjas Eltern.'],
        ['Die Familie möchte vorerst kein neues Auto kaufen.', 'richtig', 'Ein neues Auto kaufen wir deshalb erst einmal nicht.', 'Die Familie kauft erst einmal kein neues Auto.']
      ]
    },
    t2: [
      {
        text: 'Markt auch am Abend\n\nDer Wochenmarkt auf dem Lindenplatz in Bergfeld bekommt Verstärkung: Ab Mai gibt es jeden Donnerstag zusätzlich einen Abendmarkt von 16 bis 21 Uhr. '
          + 'Neben Obst, Gemüse und Käse bieten mehrere Stände warmes Essen an, und auf einer kleinen Bühne spielen Musikgruppen aus der Region. '
          + 'Die Idee kam von Berufstätigen, die morgens keine Zeit für den Markt haben. Die Händler zahlen für den Abendmarkt weniger Standgebühr. '
          + 'Bei schlechtem Wetter findet der Markt trotzdem statt.',
        example: ['Der Abendmarkt findet …', ['donnerstags statt.', 'samstags statt.', 'jeden Tag statt.'], 'a'],
        items: [
          ['Auf dem Abendmarkt …', ['gibt es nur Obst und Gemüse.', 'kann man auch warm essen.', 'darf man nicht essen.'], 'b', 'bieten mehrere Stände warmes Essen an', 'Neben Obst und Gemüse verkaufen einige Stände warme Gerichte, man kann dort also essen.'],
          ['Der Abendmarkt ist vor allem für Menschen, die …', ['am Morgen arbeiten.', 'Musik machen.', 'auf dem Land wohnen.'], 'a', 'Die Idee kam von Berufstätigen, die morgens keine Zeit für den Markt haben.', 'Wer morgens arbeitet, hat keine Zeit für den Wochenmarkt, für diese Berufstätigen ist der Abendmarkt gedacht.'],
          ['Wenn es regnet, …', ['fällt der Markt aus.', 'zieht der Markt in eine Halle.', 'gibt es den Markt trotzdem.'], 'c', 'Bei schlechtem Wetter findet der Markt trotzdem statt.', 'Auch bei Regen fällt der Abendmarkt nicht aus und zieht nicht in eine Halle.']
        ]
      },
      {
        text: 'Ruftaxi für die Nacht\n\nWer in Bergfeld nach Mitternacht nach Hause will, hat es bisher schwer: Die letzte Straßenbahn fährt um 0.30 Uhr. '
          + 'Seit Oktober testet die Stadt deshalb ein Ruftaxi. Man bestellt es mindestens 30 Minuten vorher per App oder Telefon und zahlt nur den normalen Bus-Preis. '
          + 'Das Taxi fährt nicht direkt nach Hause, sondern zu festen Haltestellen. Für Frauen, die allein unterwegs sind, gibt es eine Ausnahme: '
          + 'Sie dürfen sich bis vor die Haustür bringen lassen. Der Test läuft ein Jahr.',
        items: [
          ['Das Ruftaxi muss man …', ['eine halbe Stunde vorher bestellen.', 'am Vortag bestellen.', 'nicht bestellen.'], 'a', 'Man bestellt es mindestens 30 Minuten vorher per App oder Telefon', '30 Minuten sind eine halbe Stunde, so früh muss man das Ruftaxi mindestens bestellen.'],
          ['Eine Fahrt kostet …', ['so viel wie ein normales Taxi.', 'so viel wie eine Busfahrt.', 'nichts.'], 'b', 'zahlt nur den normalen Bus-Preis', 'Das Ruftaxi kostet nicht mehr als ein normales Busticket.'],
          ['Frauen, die allein fahren, …', ['fahren kostenlos.', 'müssen an der Haltestelle aussteigen.', 'können bis zur Haustür fahren.'], 'c', 'Sie dürfen sich bis vor die Haustür bringen lassen.', 'Allein reisende Frauen werden bis vor die Haustür gebracht.']
        ]
      }
    ],
    t3: {
      ads: [
        'Kinderchor sucht Sängerinnen und Sänger von 6 bis 10 Jahren – Probe montags nach der Schule.',
        'Physiotherapie mit Hausbesuch – für Patienten, die nicht mehr gut laufen können.',
        'Fotobuch-Workshop: Machen Sie aus Ihren Urlaubsbildern ein schönes Album.',
        'Verkaufe Kinderbett mit Matratze, Holz, sehr guter Zustand.',
        'Mathe-Nachhilfe für Erwachsene, die eine Prüfung im Beruf machen müssen.',
        'Schreibwerkstatt: Gemeinsam Geschichten und Gedichte schreiben, jeden ersten Samstag.',
        'Kostenlose Energieberatung: Wir zeigen Ihnen, wie Sie Strom und Heizkosten sparen.',
        'Wanderung mit Kräuterführung: Pflanzen am Wegrand erkennen und sammeln.',
        'Second-Hand-Laden für Sportkleidung und Fußballschuhe – Ankauf und Verkauf.',
        'Hotel sucht Zimmermädchen und Hausmeister in Vollzeit.'
      ],
      example: ['Ihr Sohn ist acht und singt den ganzen Tag.', 'a'],
      situations: [
        ['Ihre Stromrechnung ist sehr hoch, und Sie wissen nicht, warum.', 'g', 'wie Sie Strom und Heizkosten sparen', 'Die Energieberatung (g) zeigt, wie man Strom spart.'],
        ['Sie machen eine Weiterbildung und haben in Mathematik große Lücken.', 'e', 'Mathe-Nachhilfe für Erwachsene', 'Die Mathe-Nachhilfe (e) ist für Erwachsene mit einer beruflichen Prüfung.'],
        ['Sie schreiben gern und möchten Ihre Texte mit anderen besprechen.', 'f', 'Gemeinsam Geschichten und Gedichte schreiben', 'In der Schreibwerkstatt (f) arbeiten mehrere Leute zusammen an Texten, so kann man sie gemeinsam besprechen.'],
        ['Ihre Tochter braucht neue Fußballschuhe, die nicht so teuer sind.', 'i', 'Second-Hand-Laden für Sportkleidung und Fußballschuhe', 'Der Second-Hand-Laden (i) verkauft gebrauchte Fußballschuhe.'],
        ['Ihr Vater hatte eine Operation am Knie und kann nicht in eine Praxis gehen.', 'b', 'Physiotherapie mit Hausbesuch', 'Wer nach einer Knie-Operation nicht in eine Praxis kann, braucht Physiotherapie zu Hause wie in Anzeige b.'],
        ['Sie möchten mehr über essbare Pflanzen in der Natur lernen.', 'h', 'Pflanzen am Wegrand erkennen und sammeln', 'Bei der Kräuterwanderung (h) lernt man, essbare Pflanzen in der Natur zu erkennen.'],
        ['Sie suchen einen Teilzeitjob am Wochenende in einem Hotel.', '0', 'in Vollzeit', 'Das Hotel (j) sucht nur Personal in Vollzeit: 0.', 'j']
      ]
    },
    t4: {
      topic: 'In einem Bildungsmagazin wird gefragt: Sollen Grundschulen auf Noten verzichten?',
      question: 'Ist die Person für Grundschulen ohne Noten?',
      comments: [
        ['Miriam, 40', 'Meine Tochter hatte vor jeder Klassenarbeit Bauchschmerzen. Seit ihre Schule Berichte statt Noten schreibt, geht sie wieder gern hin. Ich bin dafür.', 'ja'],
        ['Detlef, 55', 'Im Leben wird man auch bewertet. Kinder müssen lernen, mit guten und schlechten Noten umzugehen. Deshalb halte ich Noten für wichtig.', 'nein', 'Deshalb halte ich Noten für wichtig.', 'Detlef meint, dass Kinder mit Bewertungen umgehen lernen müssen.'],
        ['Nadja, 32', 'Ein Bericht sagt mir viel mehr als eine Drei. Ich erfahre, was mein Sohn gut kann und wo er noch üben muss. Das finde ich viel hilfreicher.', 'ja', 'Das finde ich viel hilfreicher.', 'Nadja findet einen Bericht hilfreicher als eine Note.'],
        ['Volker, 47', 'Ohne Noten wissen Eltern nicht genau, wo ihr Kind steht. Die Berichte sind oft so freundlich formuliert, dass man Probleme gar nicht erkennt.', 'nein', 'dass man Probleme gar nicht erkennt', 'Volker meint, dass man in freundlichen Berichten Probleme nicht erkennt.'],
        ['Elena, 26', 'Als Lehrerin sehe ich: Kinder lernen besser, wenn sie keine Angst vor Fehlern haben. Ohne Noten trauen sie sich mehr.', 'ja', 'Ohne Noten trauen sie sich mehr.', 'Elena erlebt, dass Kinder ohne Noten mehr wagen.'],
        ['Günther, 68', 'Ich habe als Kind Noten bekommen, meine Kinder auch. Eine Zwei war für uns ein schöner Erfolg. So etwas sollte man Kindern nicht wegnehmen.', 'nein', 'So etwas sollte man Kindern nicht wegnehmen.', 'Günther findet, dass gute Noten Kinder freuen.'],
        ['Hamid, 44', 'Berichte finde ich als Ergänzung gut, aber spätestens für die Empfehlung zur weiterführenden Schule braucht man Noten. Abschaffen würde ich sie in der Grundschule nicht.', 'nein', 'Abschaffen würde ich sie in der Grundschule nicht.', 'Hamid hält Noten für die Empfehlung zur weiterführenden Schule für nötig, Berichte sind für ihn nur eine Ergänzung.'],
        ['Lotte, 15', 'In der Grundschule hatte ich keine Noten und habe trotzdem viel gelernt. Ich fand das super und würde es allen Kindern wünschen.', 'ja', 'würde es allen Kindern wünschen', 'Lotte wünscht allen Kindern eine Grundschule ohne Noten.']
      ]
    },
    t5: {
      context: 'Sie möchten mit Freunden im Stadtpark grillen und lesen die Regeln für die Grillplätze.',
      text: 'Nutzung der Grillplätze im Stadtpark Bergfeld\n\n'
        + '1. Reservierung: Die drei Grillplätze können Sie online reservieren. Ohne Reservierung dürfen Sie nur grillen, wenn der Platz frei ist.\n\n'
        + '2. Zeiten: Gegrillt werden darf von 10 bis 22 Uhr. Bei großer Trockenheit kann die Stadt das Grillen ganz verbieten.\n\n'
        + '3. Grill: Benutzen Sie nur die fest eingebauten Grills. Eigene Grills sind auf der Wiese nicht erlaubt.\n\n'
        + '4. Müll: Nehmen Sie Ihren Müll bitte wieder mit. Die heiße Asche gehört in die roten Metallbehälter neben den Grillplätzen.',
      items: [
        ['Ohne Reservierung …', ['darf man nie grillen.', 'darf man grillen, wenn der Platz frei ist.', 'muss man mehr bezahlen.'], 'b', 'Ohne Reservierung dürfen Sie nur grillen, wenn der Platz frei ist.', 'Ohne Reservierung ist Grillen nicht verboten, man darf aber nur einen freien Platz nutzen.'],
        ['Wenn es lange nicht geregnet hat, …', ['darf man nur bis 18 Uhr grillen.', 'muss man Wasser mitbringen.', 'kann das Grillen verboten sein.'], 'c', 'Bei großer Trockenheit kann die Stadt das Grillen ganz verbieten.', 'Lange Trockenheit kann nach Regel 2 zu einem kompletten Grillverbot durch die Stadt führen.'],
        ['Einen eigenen Grill …', ['darf man auf der Wiese nicht benutzen.', 'kann man ausleihen.', 'muss man anmelden.'], 'a', 'Eigene Grills sind auf der Wiese nicht erlaubt.', 'Nach Regel 3 sind auf der Wiese nur die eingebauten Grills zugelassen, kein mitgebrachter.'],
        ['Die heiße Asche …', ['nimmt man mit nach Hause.', 'kommt in spezielle Behälter.', 'darf man auf der Wiese lassen.'], 'b', 'Die heiße Asche gehört in die roten Metallbehälter', 'Die roten Metallbehälter neben den Grillplätzen sind speziell für heiße Asche da.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Einkaufszentrum: Liebe Kunden, unser Parkhaus schließt heute schon um 20 Uhr. Bitte holen Sie Ihr Auto rechtzeitig ab.',
        rf: ['Das Parkhaus schließt heute früher.', 'richtig'], mc: ['Das Parkhaus schließt um …', ['18 Uhr.', '20 Uhr.', '22 Uhr.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Physiotherapie: Hallo, Herr Schmitt, hier ist die Praxis Bewegung. Ihre Therapeutin ist nächste Woche im Urlaub. Ihre Termine am Dienstag und Donnerstag übernimmt ein Kollege. Die Uhrzeiten bleiben gleich.',
          rf: ['Herr Schmitts Termine fallen nächste Woche aus.', 'falsch', 'Ihre Termine am Dienstag und Donnerstag übernimmt ein Kollege', 'Die Termine finden mit einem Kollegen statt.'],
          mc: ['Die Uhrzeiten …', ['ändern sich.', 'bleiben gleich.', 'sind noch nicht klar.'], 'b', 'Die Uhrzeiten bleiben gleich.', 'Nur die Person wechselt, ein Kollege übernimmt, an den Uhrzeiten ändert sich nichts.'] },
        { script: 'Radiomeldung: Die Stadt Bergfeld sucht für den Sommer Rettungsschwimmer für die beiden Freibäder. Bewerben können sich alle ab 18 Jahren mit gültigem Rettungsschein. Die Bezahlung beträgt 16 Euro pro Stunde.',
          rf: ['Die Stadt sucht Personal für die Freibäder.', 'richtig', 'sucht für den Sommer Rettungsschwimmer für die beiden Freibäder', 'Rettungsschwimmer sind Personal für die Freibäder, und die Stadt sucht sie für den Sommer.'],
          mc: ['Bewerber brauchen …', ['einen Rettungsschein.', 'einen Führerschein.', 'Erfahrung als Trainer.'], 'a', 'mit gültigem Rettungsschein', 'Bewerber brauchen einen gültigen Rettungsschein.'] },
        { script: 'Durchsage im Fernbus: Liebe Fahrgäste, wir machen in zehn Minuten eine Pause von zwanzig Minuten an der Raststätte Hügelwald. Bitte seien Sie pünktlich zurück, der Bus wartet nicht.',
          rf: ['Der Bus macht gleich eine längere Pause.', 'richtig', 'eine Pause von zwanzig Minuten', 'Der Bus macht eine Pause von zwanzig Minuten.'],
          mc: ['Die Fahrgäste sollen …', ['im Bus bleiben.', 'pünktlich zurückkommen.', 'ihr Gepäck mitnehmen.'], 'b', 'Bitte seien Sie pünktlich zurück', 'Die Fahrgäste sollen pünktlich zurück sein.'] },
        { script: 'Nachricht vom Bruder: Hey Lisa, hier ist Malte. Ich bin für Mamas Geburtstag zuständig und habe einen Tisch im Restaurant reserviert, für Sonntag um 13 Uhr. Kannst du die Blumen besorgen? Ich kümmere mich um die Torte.',
          rf: ['Malte kauft die Blumen.', 'falsch', 'Kannst du die Blumen besorgen?', 'Malte bittet Lisa, die Blumen zu besorgen.'],
          mc: ['Die Familie feiert …', ['zu Hause.', 'bei Malte.', 'im Restaurant.'], 'c', 'habe einen Tisch im Restaurant reserviert', 'Malte hat für Sonntag einen Tisch in einem Restaurant bestellt, gefeiert wird also dort.'] },
        { script: 'Ansage der Kinderarztpraxis: Sie haben die Praxis Dr. Wolf erreicht. Impftermine vergeben wir nur noch online über unsere Internetseite. In dringenden Fällen bleiben Sie bitte in der Leitung.',
          rf: ['Impftermine bekommt man am Telefon.', 'falsch', 'Impftermine vergeben wir nur noch online', 'Telefonisch gibt es keine Impftermine mehr, sie werden nur über die Internetseite vergeben.'],
          mc: ['In dringenden Fällen …', ['soll man am Telefon warten.', 'soll man eine E-Mail schreiben.', 'soll man ins Krankenhaus fahren.'], 'a', 'In dringenden Fällen bleiben Sie bitte in der Leitung.', '„In der Leitung bleiben“ heißt, dass man am Telefon wartet, bis jemand antwortet.'] }
      ]
    },
    t2: {
      context: 'Sie nehmen an einer Führung durch das Rathaus teil.',
      script: 'Herzlich willkommen im Rathaus Bergfeld! Das Gebäude ist über vierhundert Jahre alt, wurde aber vor zehn Jahren komplett renoviert. '
        + 'Wir beginnen im Ratssaal im ersten Stock, wo der Stadtrat jeden zweiten Mittwoch tagt. Diese Sitzungen sind übrigens öffentlich. '
        + 'Danach steigen wir auf den Turm – von oben sieht man bei gutem Wetter bis zu den Bergen. Bitte nehmen Sie die Treppe, einen Aufzug gibt es im Turm nicht.',
      items: [
        ['Das Rathaus …', ['ist ganz neu.', 'wurde renoviert.', 'soll bald renoviert werden.'], 'b', 'wurde aber vor zehn Jahren komplett renoviert', 'Das Rathaus ist zwar alt, wurde aber vor zehn Jahren erneuert.'],
        ['Die Führung beginnt …', ['im Ratssaal.', 'auf dem Turm.', 'im Keller.'], 'a', 'Wir beginnen im Ratssaal im ersten Stock', 'Die Führung startet im Ratssaal, der Turm folgt danach.'],
        ['Der Stadtrat trifft sich …', ['jeden Mittwoch.', 'einmal im Monat.', 'alle zwei Wochen.'], 'c', 'jeden zweiten Mittwoch', 'Der Stadtrat tagt jeden zweiten Mittwoch.'],
        ['Die Sitzungen des Stadtrats …', ['kann jeder besuchen.', 'sind geheim.', 'kosten Eintritt.'], 'a', 'Diese Sitzungen sind übrigens öffentlich.', '„Öffentlich“ bedeutet, dass alle Bürger zu den Sitzungen kommen dürfen.'],
        ['Auf den Turm kommt man …', ['mit dem Aufzug.', 'nur bei gutem Wetter.', 'über die Treppe.'], 'c', 'Bitte nehmen Sie die Treppe', 'Auf den Turm geht man über die Treppe.']
      ]
    },
    t3: {
      context: 'Sie sind im Park und hören, wie sich zwei Freundinnen über einen Hund unterhalten.',
      script: 'Vera: Sag mal, Ines, ist das dein Hund?\n'
        + 'Ines: Nein, das ist Bruno, der Hund meiner Nachbarin. Sie liegt im Krankenhaus, und ich gehe zweimal am Tag mit ihm raus.\n'
        + 'Vera: Wie lieb von dir! Wolltest du nicht selbst einen Hund?\n'
        + 'Ines: Doch, aber mein Freund hat eine Allergie. Bei Bruno ist es zum Glück nicht so schlimm, er ist ja nicht in unserer Wohnung.\n'
        + 'Vera: Und wie lange musst du noch auf ihn aufpassen?\n'
        + 'Ines: Noch etwa eine Woche. Dann kommt meine Nachbarin nach Hause, aber sie darf erst mal nicht lange laufen.\n'
        + 'Vera: Dann brauchst du vielleicht Hilfe? Ich habe nachmittags oft Zeit.\n'
        + 'Ines: Das wäre super! Vielleicht könntest du am Wochenende gehen, da besuche ich meine Oma.',
      items: [
        ['Der Hund gehört Ines.', 'falsch', 'das ist Bruno, der Hund meiner Nachbarin', 'Bruno gehört nicht Ines, sondern ihrer Nachbarin, die im Krankenhaus liegt.'],
        ['Ines geht zweimal täglich mit dem Hund spazieren.', 'richtig', 'ich gehe zweimal am Tag mit ihm raus', 'Ines führt Bruno zweimal pro Tag aus, solange die Nachbarin im Krankenhaus ist.'],
        ['Ines hat keinen eigenen Hund, weil ihr Freund allergisch ist.', 'richtig', 'mein Freund hat eine Allergie', 'Ines wollte selbst einen Hund, verzichtet aber wegen der Allergie ihres Freundes darauf.'],
        ['Bruno wohnt zurzeit bei Ines in der Wohnung.', 'falsch', 'er ist ja nicht in unserer Wohnung', 'Bruno lebt nicht bei Ines, sie holt ihn nur zum Spazierengehen ab.'],
        ['Die Nachbarin kommt in ungefähr einer Woche zurück.', 'richtig', 'Noch etwa eine Woche.', 'Ines muss nur noch rund eine Woche aufpassen, dann kehrt die Nachbarin heim.'],
        ['Vera hat nachmittags meistens keine Zeit.', 'falsch', 'Ich habe nachmittags oft Zeit.', 'Vera bietet ihre Hilfe an, weil sie am Nachmittag häufig frei hat.'],
        ['Am Wochenende besucht Ines ihre Großmutter.', 'richtig', 'da besuche ich meine Oma', 'Am Wochenende besucht Ines ihre Oma.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Huber', 'Herr Demir'],
      script: 'Moderator: Guten Abend! In einigen Städten haben Supermärkte jetzt auch nachts geöffnet. Brauchen wir das? '
        + 'Meine Gäste sind Frau Huber, Kassiererin seit über zwanzig Jahren, und Herr Demir, Student und Kunde eines Nachtsupermarkts.\n'
        + 'Frau Huber: Für uns Angestellte ist Nachtarbeit sehr anstrengend. Viele Kolleginnen haben Kinder und schlafen dann zu wenig.\n'
        + 'Herr Demir: Ich arbeite abends in einem Restaurant und komme erst um Mitternacht nach Hause. Für mich ist der Nachtsupermarkt praktisch.\n'
        + 'Moderator: Und wie viele Kunden kommen nachts wirklich?\n'
        + 'Herr Demir: Mehr, als man denkt. Pflegekräfte, Taxifahrer, Leute nach der Spätschicht.\n'
        + 'Frau Huber: Trotzdem lohnt es sich oft nicht. Manche Märkte haben nachts nur Automatenkassen, ganz ohne Personal.\n'
        + 'Moderator: Dazu hat uns eine Hörerin eine Nachricht geschrieben.\n'
        + 'Frau Huber: Wenn schon Nachtarbeit, dann bitte mit deutlich mehr Lohn.\n'
        + 'Herr Demir: Ich wäre auch zufrieden, wenn die Läden nur bis ein Uhr offen wären.',
      example: ['Thema: Brauchen wir Supermärkte, die nachts offen sind?', 'a'],
      items: [
        ['Nachtarbeit ist für die Beschäftigten hart.', 'b', 'Für uns Angestellte ist Nachtarbeit sehr anstrengend.', 'Frau Huber findet Nachtschichten sehr belastend, gerade für Kolleginnen mit Kindern.'],
        ['Ich kann erst spät in der Nacht einkaufen.', 'c', 'komme erst um Mitternacht nach Hause', 'Herr Demir arbeitet abends im Restaurant und kommt erst gegen Mitternacht heim, dann haben normale Läden zu.'],
        ['Kommen nachts überhaupt Kunden?', 'a', 'Und wie viele Kunden kommen nachts wirklich?', 'Der Moderator fragt, ob nachts wirklich genug Kundschaft kommt.'],
        ['Nachts kaufen viele Menschen mit Schichtarbeit ein.', 'c', 'Pflegekräfte, Taxifahrer, Leute nach der Spätschicht', 'Herr Demir zählt Pflegekräfte, Taxifahrer und Leute nach der Spätschicht auf, also Menschen, die in Schichten arbeiten.'],
        ['In manchen Läden arbeitet nachts niemand.', 'b', 'Manche Märkte haben nachts nur Automatenkassen, ganz ohne Personal.', 'Frau Huber weist darauf hin, dass manche Läden nachts nur Kassenautomaten haben und dann niemand dort arbeitet.'],
        ['Eine Hörerin hat uns geschrieben.', 'a', 'Dazu hat uns eine Hörerin eine Nachricht geschrieben.', 'Der Moderator leitet zur schriftlichen Nachricht einer Hörerin über.'],
        ['Wer nachts arbeitet, sollte mehr verdienen.', 'b', 'dann bitte mit deutlich mehr Lohn', 'Frau Huber akzeptiert Nachtarbeit höchstens mit einem deutlich höheren Lohn.'],
        ['Öffnungszeiten bis ein Uhr würden mir reichen.', 'c', 'wenn die Läden nur bis ein Uhr offen wären', 'Herr Demir wäre mit Öffnung bis ein Uhr zufrieden.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie waren am Freitag im Konzert Ihrer Lieblingsband. Ihr Freund Lukas mag die Band auch, hatte aber keine Karte. Schreiben Sie Lukas eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wie war das Konzert?\n– Begründen Sie: Welches Lied hat Ihnen am besten gefallen?\n– Machen Sie einen Vorschlag für das nächste Konzert.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Radio eine Sendung zum Thema „Selbst kochen oder Essen bestellen?“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Jana: Nach der Arbeit bin ich zu müde zum Kochen. Ich bestelle fast jeden Abend Essen über eine App. Das ist bequem, aber ziemlich teuer. Wie machen Sie das?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Ihr Nachbar, Herr Weiß, hat ein Paket für Sie angenommen. Sie sind bis morgen Abend verreist. Schreiben Sie Herrn Weiß. Bedanken Sie sich und sagen Sie, wann Sie das Paket abholen (circa 40 Wörter).',
      functions: ['thank', 'inform'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Eine Freundin aus dem Ausland besucht Sie für ein Wochenende. Sie planen zusammen das Programm für den Besuch.\n\n– Abholen?\n– Was zeigen?\n– Wo essen?\n– Abendprogramm?\n– Was bei schlechtem Wetter?',
      partner: [
        'Partner: Hallo! Maria kommt doch am Freitag. Wer holt sie vom Bahnhof ab?',
        'Partner: Gut. Was sollen wir ihr am Samstag zeigen?',
        'Partner: Schön. Und was machen wir, wenn es regnet?'
      ]
    },
    t2: { topics: ['Ist Mode wichtig?', 'Hausarbeit – sollen Männer und Frauen sie gleich teilen?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin: Ich spreche heute über die Hausarbeit und die Frage, ob Männer und Frauen sie gleich teilen sollen. Bei uns zu Hause gibt es seit einem Jahr einen Plan am Kühlschrank. Mein Mann kocht und kauft ein, ich putze und mache die Wäsche, und die Kinder räumen den Tisch ab. Vorher hatten wir oft Streit, weil ich das Gefühl hatte, dass ich alles allein mache. In meinem Heimatland machen die Frauen meistens den ganzen Haushalt, auch wenn sie arbeiten gehen. Bei der jüngeren Generation ändert sich das zum Glück. Eine faire Aufteilung hat Vorteile: Niemand ist überlastet, und die Kinder lernen, dass Hausarbeit keine Frauensache ist. Schwierig wird es, wenn beide sehr unterschiedliche Arbeitszeiten haben. Dann kann man nicht alles genau halb und halb machen. Ich finde, es muss nicht genau gleich sein, aber beide sollten zufrieden sein. Mein Tipp zum Schluss: Sprechen Sie offen darüber, bevor es Streit gibt. Danke schön.',
      examinerQuestion: 'Prüferin: Wie wichtig ist Ihnen Kleidung im Alltag? Erzählen Sie kurz.',
      partnerTalkForTopic2: 'Partnerin: Ich spreche über die Frage, ob Mode wichtig ist. Für mich spielt Kleidung eine ziemlich große Rolle. Ich arbeite in einem Geschäft für Brillen und habe täglich mit Kunden zu tun, deshalb möchte ich gepflegt aussehen. Teure Marken kaufe ich aber nicht, ich achte eher auf Farben, die zu mir passen. In meinem Heimatland ist Kleidung sehr wichtig, besonders bei Festen und Hochzeiten. Dort zeigt man mit schöner Kleidung auch Respekt vor den Gastgebern. Mode hat Vorteile: Sie macht Spaß, und man kann zeigen, wer man ist. Gute Kleidung gibt mir auch Selbstvertrauen, zum Beispiel bei einem Vorstellungsgespräch. Nachteile gibt es aber auch: Viele Menschen kaufen ständig neue Sachen, die sie kaum tragen, und das kostet Geld und schadet der Umwelt. Jugendliche werden manchmal ausgelacht, wenn sie keine Markenkleidung haben. Meine Meinung: Mode ist wichtig, aber man sollte nicht jedem Trend folgen. Danke schön.',
      examinerQuestionForTopic2: 'Prüferin: Welche Arbeit im Haushalt machen Sie am liebsten, welche gar nicht gern?'
    }
  }
});
