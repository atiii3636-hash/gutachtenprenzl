// Inhalte der Ratgeber-Artikel.
//
// Aufbau wie lib/leistung-content.ts: ein Template, hier der Text. Jeder Artikel
// trägt ein eigenes Datum — bei Rechts- und Honorarthemen ist Aktualität ein
// direktes Vertrauens- und Ranking-Signal, und das Article-Schema braucht
// datePublished/dateModified.
//
// Beim Aktualisieren eines Artikels `stand` mit hochziehen, sonst behauptet die
// Seite eine Aktualität, die nicht stimmt.

export type RatgeberAbschnitt = {
  h2: string;
  absaetze: string[];
  /** Optionale Aufzählung unter den Absätzen. */
  liste?: string[];
  /** Optionaler Hinweiskasten am Ende des Abschnitts. */
  hinweis?: string;
};

export type RatgeberContent = {
  slug: string;
  kicker: string;
  title: string;
  titleAccent: string;
  lead: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** ISO-Datum für Article-Schema und sichtbare Anzeige. */
  stand: string;
  standLabel: string;
  /** Kurze Direktantwort, 40–70 Wörter. */
  direktantwort: string;
  abschnitte: RatgeberAbschnitt[];
  faqs: { q: string; a: string }[];
  verwandt: { href: string; label: string; sub: string }[];
};

export const ratgeberContent: RatgeberContent[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "versicherung-kuerzt-gutachten",
    kicker: "Kürzung durch die Versicherung",
    title: "Die Versicherung hat gekürzt.",
    titleAccent: "Das müssen Sie nicht hinnehmen.",
    lead: "Ein Brief, eine Tabelle, ein niedrigerer Betrag — und keine Begründung, die jemand versteht. Kürzungen sind Alltag, und ein großer Teil davon hält einer fachlichen Prüfung nicht stand.",
    image: "/foto2.jpg",
    metaTitle: "Versicherung kürzt das Gutachten – was Sie tun können",
    metaDescription:
      "Die Versicherung zahlt weniger als im Gutachten steht? Welche Kürzungen typisch sind, welche unbegründet, und wie Sie das Geld zurückholen.",
    keywords: [
      "versicherung kürzt gutachten",
      "versicherung zahlt nicht vollständig",
      "kürzung schadensregulierung",
      "prüfbericht versicherung",
      "stellungnahme sachverständiger",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Kürzt die Versicherung Positionen aus Ihrem Gutachten, ist das kein endgültiger Bescheid, sondern eine Verhandlungsposition. Typisch gekürzt werden Stundenverrechnungssätze, Verbringungskosten, Ersatzteilaufschläge, Wertminderung und Nutzungsausfall. Eine fachliche Stellungnahme des Sachverständigen zu jeder einzelnen Position führt in vielen Fällen zur Nachzahlung.",
    abschnitte: [
      {
        h2: "Was gerade passiert ist",
        absaetze: [
          "Sie haben ein Gutachten erstellen lassen, es an die gegnerische Versicherung geschickt, und statt des ermittelten Betrags kommt eine niedrigere Summe an. Meist liegt ein Schreiben bei, in dem von einer „Prüfung der Schadenhöhe“ die Rede ist, dazu eine Tabelle mit gestrichenen Positionen.",
          "Was dahintersteckt, ist selten eine inhaltliche Auseinandersetzung mit Ihrem Fall. Versicherer lassen eingehende Gutachten von Prüfdienstleistern gegenrechnen. Diese Dienstleister sehen das Fahrzeug nie — sie arbeiten mit Ihren Fotos und einer Software und kürzen nach standardisierten Mustern. Ihr Geschäftsmodell besteht darin, die Regulierungssumme zu senken.",
          "Das ist rechtlich zulässig, aber es ist keine Feststellung. Es ist eine Behauptung, der Sie widersprechen können. Und in der Praxis ist es das, was zwischen Ihnen und dem vollen Schadenersatz steht.",
        ],
      },
      {
        h2: "Die typischen Kürzungspositionen",
        absaetze: [
          "Kürzungen folgen erstaunlich festen Mustern. Wenn Sie Ihr Schreiben danebenlegen, werden Sie mindestens einen dieser Punkte wiederfinden:",
        ],
        liste: [
          "Stundenverrechnungssätze: Die Versicherung rechnet mit den Sätzen einer freien Werkstatt statt einer markengebundenen Fachwerkstatt. Bei einem neueren oder scheckheftgepflegten Fahrzeug ist das regelmäßig angreifbar.",
          "Verbringungskosten: Die Kosten dafür, das Fahrzeug zur Lackiererei und zurück zu bringen, werden schlicht gestrichen — obwohl die meisten Werkstätten keine eigene Lackiererei haben.",
          "Ersatzteilaufschläge: Der Aufschlag, den Werkstätten auf Ersatzteile erheben, wird als nicht erstattungsfähig bezeichnet. In der Region üblich ist er trotzdem.",
          "Wertminderung: Wird pauschal auf null gesetzt oder halbiert, oft mit dem Hinweis auf Fahrzeugalter oder Laufleistung, ohne den konkreten Fall zu prüfen.",
          "Nutzungsausfall: Die Dauer wird verkürzt oder die Fahrzeuggruppe herabgestuft. Jeder gestrichene Tag ist bares Geld.",
          "Reinigungs- und Probefahrtkosten, Kleinteile, Beilackierung: kleine Positionen, die in Summe schnell dreistellig werden.",
          "Restwert: Die Versicherung schickt ein höheres Angebot aus einer überregionalen Restwertbörse nach und rechnet damit statt mit dem im Gutachten ermittelten regionalen Restwert.",
        ],
        hinweis:
          "Verkaufen Sie Ihr Fahrzeug nicht an einen Aufkäufer aus einem nachgereichten Restwertangebot, ohne vorher Rücksprache zu halten. Sie sind daran in der Regel nicht gebunden — aber wenn Sie verkauft haben, ist die Diskussion beendet.",
      },
      {
        h2: "Warum ein Prüfbericht kein Gutachten ist",
        absaetze: [
          "Der entscheidende Unterschied liegt in der Anschauung. Ein Sachverständiger hat das Fahrzeug gesehen, angefasst, vermessen und fotografiert. Er kann beurteilen, ob ein Bauteil instand gesetzt oder ersetzt werden muss, ob eine Beilackierung nötig ist und welche Folgeschäden hinter der sichtbaren Beschädigung stecken.",
          "Ein Prüfbericht entsteht am Schreibtisch, auf Basis der Fotos, die im Gutachten ohnehin enthalten sind. Er kann nichts feststellen, was nicht schon dokumentiert ist — er kann nur anders bewerten. Das ist ein wichtiger Unterschied, wenn es später darauf ankommt.",
          "Hinzu kommt die Auftragslage: Der Prüfdienstleister wird von der Versicherung bezahlt und häufig danach vergütet, wie viel er einspart. Das macht ihn nicht unseriös, aber es macht ihn zur Gegenpartei, nicht zu einer neutralen Instanz.",
        ],
      },
      {
        h2: "Was Sie jetzt konkret tun sollten",
        absaetze: [
          "Handeln Sie zügig, aber nicht überstürzt. Die wichtigste Regel: Akzeptieren Sie nichts, indem Sie schweigen oder eine Teilzahlung kommentarlos annehmen.",
        ],
        liste: [
          "Sammeln Sie alles: das Kürzungsschreiben, die Abrechnung, den Prüfbericht, falls er beiliegt, und Ihr Gutachten.",
          "Schicken Sie uns diese Unterlagen. Wir gleichen Position für Position ab und sagen Ihnen, welche Kürzungen begründet sind und welche nicht — auch wenn eine berechtigt ist, sagen wir das.",
          "Wir schreiben eine fachliche Stellungnahme zu jeder strittigen Position, mit Begründung und Bezug auf den konkreten Schaden.",
          "Diese Stellungnahme geht an die Versicherung, in der Regel über Ihren Anwalt für Verkehrsrecht.",
          "Bei unverschuldetem Unfall trägt die gegnerische Versicherung auch die Kosten des Anwalts. Sie gehen damit kein zusätzliches Risiko ein.",
        ],
      },
      {
        h2: "Wie lange Sie Zeit haben",
        absaetze: [
          "Schadenersatzansprüche aus einem Verkehrsunfall verjähren regelmäßig in drei Jahren, gerechnet ab dem Schluss des Jahres, in dem der Unfall passiert ist. Sie stehen also nicht unter Wochenfrist, auch wenn manches Anschreiben diesen Eindruck erweckt.",
          "Trotzdem gilt: Je länger Sie warten, desto schwieriger wird die Beweisführung. Ist das Fahrzeug bereits repariert oder verkauft, lassen sich strittige Punkte kaum noch überprüfen. Melden Sie sich deshalb, solange der Zustand noch belegbar ist.",
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich eine Kürzung akzeptieren?",
        a: "Nein. Die Zahlung der Versicherung ist keine verbindliche Feststellung, sondern deren Einschätzung. Solange Ihre Ansprüche nicht verjährt sind und Sie keine Abfindungserklärung unterschrieben haben, können Sie nachfordern.",
      },
      {
        q: "Was kostet eine Stellungnahme zum Kürzungsschreiben?",
        a: "Bei einem unverschuldeten Unfall gehört die Stellungnahme zur Schadenabwicklung und wird in der Regel von der gegnerischen Versicherung getragen. Schicken Sie uns die Unterlagen, wir sagen Ihnen vorab, ob sich der Aufwand in Ihrem Fall lohnt.",
      },
      {
        q: "Soll ich eine Abfindungserklärung unterschreiben?",
        a: "Nicht ungeprüft. Mit einer Abfindungserklärung verzichten Sie in der Regel auf alle weiteren Ansprüche aus diesem Unfall — auch auf solche, die erst später sichtbar werden. Lassen Sie das vorher von einem Anwalt für Verkehrsrecht prüfen.",
      },
      {
        q: "Die Versicherung hat nur einen Teil überwiesen. Gilt das als Anerkennung?",
        a: "Eine Teilzahlung anzunehmen bedeutet nicht automatisch, dass Sie auf den Rest verzichten. Widersprechen Sie aber ausdrücklich und schriftlich, damit kein Missverständnis entsteht.",
      },
      {
        q: "Lohnt sich der Aufwand bei kleinen Beträgen?",
        a: "Das rechnen wir Ihnen ehrlich vor. Bei Kürzungen im niedrigen zweistelligen Bereich steht der Aufwand oft nicht dafür. Sobald Wertminderung oder Nutzungsausfall betroffen sind, geht es dagegen schnell um vierstellige Summen.",
      },
    ],
    verwandt: [
      { href: "/werkstattbindung-versicherung", label: "Werkstattbindung", sub: "Wer die Werkstatt wählt" },
      { href: "/vorschaden-altschaden-gutachten", label: "Vorschaden & Altschaden", sub: "Häufigster Kürzungsgrund" },
      { href: "/wertminderung", label: "Wertminderung", sub: "Oft gestrichen" },
      { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall", sub: "Tagessätze A bis L" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vorschaden-altschaden-gutachten",
    kicker: "Vorschaden & Altschaden",
    title: "Ein verschwiegener Vorschaden",
    titleAccent: "kostet Sie alles.",
    lead: "Kein anderer Punkt führt so zuverlässig zur Komplettverweigerung durch die Versicherung. Dabei ist ein Vorschaden kein Problem — verschweigen schon.",
    image: "/foto10.jpg",
    metaTitle: "Vorschaden und Altschaden im Kfz-Gutachten",
    metaDescription:
      "Warum ein verschwiegener Vorschaden zur Kürzung führt, wie alter und neuer Schaden abgegrenzt werden und was Sie vor der Begutachtung offenlegen.",
    keywords: [
      "vorschaden gutachten",
      "altschaden abgrenzung",
      "vorschaden verschwiegen versicherung",
      "unrepariert vorschaden",
      "vorschaden unfall regulierung",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Ein Vorschaden ist ein früherer Schaden am selben Fahrzeugbereich. Wird er offengelegt, grenzt der Sachverständige alten und neuen Schaden ab, und Ihr Anspruch für den neuen bleibt bestehen. Wird er verschwiegen und später entdeckt, verweigert die Versicherung regelmäßig die Zahlung für den gesamten Schaden — nicht nur für den strittigen Teil.",
    abschnitte: [
      {
        h2: "Vorschaden, Altschaden, Bagatellschaden",
        absaetze: [
          "Die Begriffe werden oft durcheinandergeworfen, meinen aber Unterschiedliches. Ein Vorschaden ist ein früherer Schaden, der fachgerecht repariert wurde. Ein Altschaden ist ein früherer Schaden, der nicht oder nicht vollständig repariert wurde und noch am Fahrzeug vorhanden ist. Beide können denselben Bereich betreffen wie der neue Unfall — und genau dann wird es heikel.",
          "Der Unterschied ist für die Regulierung entscheidend. Ein reparierter Vorschaden mindert allenfalls den Wiederbeschaffungswert. Ein unreparierter Altschaden dagegen wirft die Frage auf, welcher Teil der jetzt sichtbaren Beschädigung überhaupt aus diesem Unfall stammt.",
        ],
      },
      {
        h2: "Warum Verschweigen der teuerste Weg ist",
        absaetze: [
          "Versicherer gleichen Schadenmeldungen über zentrale Systeme ab. Ein früherer Schaden am selben Fahrzeug taucht dort auf, und zwar unabhängig davon, ob Sie ihn erwähnen. Kommt er später ans Licht, entsteht ein Problem, das weit über die strittige Position hinausgeht.",
          "Die Rechtsprechung ist an dieser Stelle streng: Wer einen Vorschaden verschweigt, riskiert, dass der gesamte Anspruch entfällt — nicht nur der Teil, der auf den Vorschaden entfällt. Der Gedanke dahinter ist, dass sich nicht mehr feststellen lässt, welcher Schaden wann entstanden ist, und dieses Risiko fällt demjenigen zur Last, der die Information zurückgehalten hat.",
          "Aus einem Fall, der mit sauberer Abgrenzung vollständig reguliert worden wäre, wird so ein Fall ohne jede Zahlung. Das ist der mit Abstand häufigste Grund, aus dem Geschädigte am Ende leer ausgehen.",
        ],
        hinweis:
          "Sagen Sie es einfach. Ein Vorschaden ist für uns Routine — wir grenzen ihn ab und schreiben das nachvollziehbar ins Gutachten. Erst das Verschweigen macht daraus ein Problem.",
      },
      {
        h2: "Wie die Abgrenzung technisch funktioniert",
        absaetze: [
          "Alter und neuer Schaden lassen sich in den meisten Fällen unterscheiden. Dafür gibt es mehrere Ansatzpunkte:",
        ],
        liste: [
          "Lackschichtdickenmessung: Nachlackierte Bereiche haben eine andere Schichtstärke als der Originallack. Das zeigt, wo schon einmal gearbeitet wurde.",
          "Korrosionsgrad und Verschmutzung: Ein frischer Bruch sieht anders aus als eine Kante, die seit Monaten offen liegt.",
          "Deformationsrichtung: Der neue Anstoß hat eine bestimmte Richtung. Verformungen, die nicht dazu passen, stammen aus einem anderen Ereignis.",
          "Reparaturspuren: Spachtel, Klebenähte, ausgetauschte Teile mit abweichender Teilenummer oder fehlende Werksmarkierungen belegen frühere Eingriffe.",
          "Vorliegende Unterlagen: Das alte Gutachten oder die Reparaturrechnung ist der beste Nachweis, dass der Vorschaden fachgerecht behoben wurde.",
        ],
      },
      {
        h2: "Was Sie vorbereiten sollten",
        absaetze: [
          "Je mehr Sie zum Vorschaden beibringen können, desto einfacher ist die Abgrenzung — und desto weniger Angriffsfläche bietet die Regulierung.",
        ],
        liste: [
          "Das Gutachten des früheren Schadens, falls vorhanden.",
          "Die Reparaturrechnung — sie belegt Umfang und Fachgerechtigkeit der Instandsetzung.",
          "Fotos vor und nach der früheren Reparatur.",
          "Bei einem gekauften Fahrzeug: was Ihnen der Verkäufer über Vorschäden gesagt hat, und der Kaufvertrag.",
          "Wenn Sie nichts davon haben, sagen Sie trotzdem Bescheid. Auch ohne Unterlagen ist die Abgrenzung meist möglich, sie wird nur aufwendiger.",
        ],
      },
      {
        h2: "Der Sonderfall: gekauftes Fahrzeug mit unbekannter Historie",
        absaetze: [
          "Viele Geschädigte wissen gar nicht, dass ihr Fahrzeug einen Vorschaden hat — gerade bei gebraucht gekauften Autos. Das ist kein Vorwurf und auch kein Verschweigen, aber es ändert nichts daran, dass der Vorschaden bei der Begutachtung auffällt.",
          "Deshalb ist es sinnvoll, das Thema von sich aus anzusprechen: Sagen Sie, dass Sie das Fahrzeug gebraucht gekauft haben und die Historie nicht vollständig kennen. Wir prüfen dann gezielt darauf und dokumentieren den Befund. Diese Offenheit ist im Streitfall mehr wert als jede nachträgliche Erklärung.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bekomme ich trotz Vorschaden Geld?",
        a: "Ja, wenn der Vorschaden offengelegt und abgegrenzt wird. Ihr Anspruch besteht für den neuen Schaden fort. Nur wenn sich alter und neuer Schaden nicht mehr trennen lassen, wird es schwierig — und genau dazu kommt es vor allem dann, wenn nichts gesagt wurde.",
      },
      {
        q: "Was, wenn ich den Vorschaden selbst nicht kannte?",
        a: "Das kommt bei gebraucht gekauften Fahrzeugen häufig vor und ist kein Verschweigen. Sprechen Sie es von sich aus an: Sagen Sie, dass Sie die Historie nicht vollständig kennen. Wir prüfen gezielt darauf und halten den Befund fest.",
      },
      {
        q: "Mindert ein reparierter Vorschaden den Wert meines Autos?",
        a: "Ja, ein fachgerecht reparierter Vorschaden senkt den Wiederbeschaffungswert, weil das Fahrzeug im Markt als Unfallwagen gilt. Auf den Anspruch für den neuen Schaden hat er dagegen keinen Einfluss, solange die Abgrenzung möglich ist.",
      },
      {
        q: "Die Versicherung behauptet einen Vorschaden, den es nicht gibt.",
        a: "Das kommt vor. Dann ist es an der Versicherung, den Vorschaden zu belegen. Wir prüfen die Behauptung technisch und schreiben eine Stellungnahme, wenn sie sich nicht halten lässt.",
      },
      {
        q: "Was ist mit einem unreparierten Altschaden?",
        a: "Der muss unbedingt offengelegt werden. Ein unreparierter Altschaden im selben Bereich ist der schwierigste Fall, weil sich die Anteile schwer trennen lassen. Mit Dokumentation des Zustands vor dem neuen Unfall — etwa Verkaufsanzeigen oder alte Fotos — ist trotzdem viel zu retten.",
      },
    ],
    verwandt: [
      { href: "/versicherung-kuerzt-gutachten", label: "Kürzung durch Versicherung", sub: "Was Sie dagegen tun" },
      { href: "/beweissicherungsgutachten-berlin", label: "Beweissicherung", sub: "Bei strittiger Schuldfrage" },
      { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
      { href: "/fiktive-abrechnung", label: "Fiktive Abrechnung", sub: "Heikel bei Vorschaden" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "werkstattbindung-versicherung",
    kicker: "Freie Werkstattwahl",
    title: "Die Versicherung schickt Sie",
    titleAccent: "in ihre Partnerwerkstatt.",
    lead: "Bei einem unverschuldeten Unfall dürfen Sie selbst entscheiden, wer Ihr Auto repariert. Der Anruf, der Ihnen etwas anderes nahelegt, ist kein Bescheid, sondern ein Angebot.",
    image: "/kfz-pruefung-team.jpg",
    metaTitle: "Werkstattbindung: Muss ich in die Partnerwerkstatt?",
    metaDescription:
      "Wann eine Werkstattbindung gilt und wann nicht, warum Sie bei unverschuldetem Unfall frei wählen dürfen und was das für die Garantie bedeutet.",
    keywords: [
      "werkstattbindung versicherung",
      "freie werkstattwahl unfall",
      "partnerwerkstatt versicherung",
      "stundenverrechnungssätze",
      "werkstatt selbst aussuchen",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Bei einem unverschuldeten Unfall haben Sie freie Werkstattwahl. Die gegnerische Versicherung darf Ihnen keine Werkstatt vorschreiben und die Regulierung nicht davon abhängig machen. Eine echte Werkstattbindung kann nur dort greifen, wo Sie sie selbst vereinbart haben — also in einem eigenen Kaskotarif, für den Sie im Gegenzug Beitragsrabatt bekommen.",
    abschnitte: [
      {
        h2: "Der Anruf, der bei fast jedem kommt",
        absaetze: [
          "Kurz nachdem der Schaden gemeldet ist, meldet sich die gegnerische Versicherung. Man wolle die Abwicklung für Sie vereinfachen, es gebe eine Partnerwerkstatt ganz in der Nähe, Hol- und Bringservice inklusive, und ein Gutachten brauche es eigentlich gar nicht. Das klingt nach Service und ist auch so gemeint — allerdings nicht in erster Linie für Sie.",
          "Der Hintergrund ist einfach: Die Versicherung hat mit diesen Betrieben Konditionen vereinbart, die unter den üblichen Sätzen liegen. Jeder Fall, der dort landet, ist für sie günstiger. Das ist legitim. Sie müssen aber wissen, dass Sie nicht verpflichtet sind, darauf einzugehen.",
        ],
      },
      {
        h2: "Wann eine Werkstattbindung tatsächlich gilt",
        absaetze: [
          "Eine Werkstattbindung ist eine vertragliche Vereinbarung. Sie kann nur zwischen Ihnen und Ihrem eigenen Versicherer bestehen, typischerweise in einem Kaskotarif, für den Sie einen Beitragsnachlass bekommen haben. In diesem Fall haben Sie sich bewusst dafür entschieden und müssen sich daran halten, wenn Sie den Kaskoschutz nutzen wollen.",
          "Bei einem Haftpflichtschaden — also wenn ein anderer Ihren Unfall verursacht hat — gibt es keine solche Vereinbarung zwischen Ihnen und dessen Versicherung. Sie sind dort nicht Vertragspartner, sondern Geschädigter. Eine Bindung kann deshalb gar nicht entstehen.",
        ],
        liste: [
          "Unverschuldeter Unfall, Regulierung über die gegnerische Haftpflicht: freie Werkstattwahl, ohne Einschränkung.",
          "Eigener Kaskoschaden mit vereinbarter Werkstattbindung im Tarif: Bindung gilt, sonst droht ein Abzug.",
          "Eigener Kaskoschaden ohne Werkstattbindung im Tarif: freie Wahl.",
          "Teilschuld: Für den Anteil, den die Gegenseite trägt, bleibt die freie Wahl bestehen.",
        ],
      },
      {
        h2: "Warum die Werkstattwahl bares Geld bedeutet",
        absaetze: [
          "Der Unterschied steckt in den Stundenverrechnungssätzen. Eine markengebundene Fachwerkstatt rechnet höhere Sätze ab als ein freier Betrieb. Bei einem größeren Schaden macht das schnell mehrere hundert Euro aus — und zwar unabhängig davon, ob Sie tatsächlich dort reparieren lassen oder sich den Betrag auszahlen lassen.",
          "Hinzu kommen Punkte, die sich erst später auswirken: Herstellergarantie und Mobilitätsgarantie setzen bei neueren Fahrzeugen häufig eine Reparatur nach Herstellervorgaben voraus. Und beim späteren Verkauf ist ein Fahrzeug, das nachweislich in einer Markenwerkstatt instand gesetzt wurde, leichter zu vermitteln.",
        ],
        hinweis:
          "Kürzt die Versicherung Ihr Gutachten auf die Sätze einer freien Werkstatt, ist das eine der häufigsten und am besten angreifbaren Kürzungen überhaupt.",
      },
      {
        h2: "So reagieren Sie auf den Anruf",
        absaetze: [
          "Sie müssen nicht streiten und nichts begründen. Es reicht, freundlich und klar zu bleiben:",
        ],
        liste: [
          "Sagen Sie, dass Sie einen eigenen Sachverständigen beauftragen und die Werkstatt selbst auswählen.",
          "Machen Sie am Telefon keine Angaben zum Unfallhergang, die über die Sachverhaltsmeldung hinausgehen.",
          "Stimmen Sie keiner Besichtigung durch einen von der Versicherung beauftragten Gutachter zu, ohne dass Ihr eigener Sachverständige den Schaden aufgenommen hat.",
          "Lassen Sie sich nicht auf eine Zusage festlegen, bevor Sie die Zahlen kennen.",
          "Bitten Sie darum, alles Weitere schriftlich zu klären. Das verlangsamt nichts und schafft Nachweise.",
        ],
      },
    ],
    faqs: [
      {
        q: "Darf die gegnerische Versicherung mir eine Werkstatt vorschreiben?",
        a: "Nein. Bei einem unverschuldeten Unfall haben Sie freie Werkstattwahl. Die Versicherung darf Ihnen eine Partnerwerkstatt anbieten, die Regulierung aber nicht davon abhängig machen.",
      },
      {
        q: "Was passiert, wenn ich meine Werkstattbindung im Kaskotarif ignoriere?",
        a: "Dann kürzt Ihr eigener Versicherer in der Regel einen vertraglich vereinbarten Betrag oder Prozentsatz. Schauen Sie in Ihre Bedingungen, bevor Sie sich für eine andere Werkstatt entscheiden.",
      },
      {
        q: "Muss ich überhaupt reparieren lassen?",
        a: "Nein. Sie können sich den im Gutachten ermittelten Betrag auch auszahlen lassen — das nennt sich fiktive Abrechnung und erfolgt netto, also ohne Mehrwertsteuer. Bei Leasingfahrzeugen ist das allerdings meist vertraglich ausgeschlossen.",
      },
      {
        q: "Die Versicherung rechnet mit den Sätzen einer freien Werkstatt. Ist das zulässig?",
        a: "Es kommt auf den Fall an. Bei neueren, scheckheftgepflegten Fahrzeugen ist der Verweis auf eine günstigere freie Werkstatt regelmäßig angreifbar. Wir prüfen das und schreiben bei Bedarf eine Stellungnahme.",
      },
      {
        q: "Empfehlen Sie mir eine Werkstatt?",
        a: "Wir nennen Ihnen auf Wunsch Betriebe in Berlin, mit denen unsere Kunden gute Erfahrungen gemacht haben. Wir haben aber keine Provisionsvereinbarungen — die Entscheidung bleibt vollständig bei Ihnen.",
      },
    ],
    verwandt: [
      { href: "/versicherung-kuerzt-gutachten", label: "Kürzung durch Versicherung", sub: "Was Sie dagegen tun" },
      { href: "/fiktive-abrechnung", label: "Fiktive Abrechnung", sub: "Geld statt Reparatur" },
      { href: "/eigener-gutachter-oder-versicherungsgutachter", label: "Eigener Gutachter", sub: "Warum das zählt" },
      { href: "/mietwagen-nach-unfall", label: "Mietwagen nach Unfall", sub: "Während der Reparatur" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mietwagen-nach-unfall",
    kicker: "Mietwagen & Nutzungsausfall",
    title: "Ohne Auto, aber",
    titleAccent: "nicht ohne Anspruch.",
    lead: "Nach einem unverschuldeten Unfall haben Sie die Wahl: Mietwagen auf Kosten der Gegenseite oder eine Pauschale für jeden Tag ohne Fahrzeug. Beides hat Regeln, die kaum jemand kennt.",
    image: "/feature-car.jpg",
    metaTitle: "Mietwagen nach Unfall – wer zahlt und wie lange?",
    metaDescription:
      "Mietwagen oder Nutzungsausfall nach unverschuldetem Unfall: wer zahlt, welche Fahrzeugklasse zusteht und wie lange der Anspruch läuft.",
    keywords: [
      "mietwagen nach unfall wer zahlt",
      "mietwagen unfall gegnerische versicherung",
      "nutzungsausfall oder mietwagen",
      "unfallersatzwagen",
      "mietwagen klasse unfall",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Nach einem unverschuldeten Unfall zahlt die gegnerische Haftpflichtversicherung entweder einen Mietwagen oder — wenn Sie keinen nehmen — eine Nutzungsausfallentschädigung je Tag. Beides gilt für die Dauer der Reparatur oder der Wiederbeschaffung, wie sie im Gutachten ausgewiesen ist. Der Mietwagen sollte eine Klasse unter Ihrem eigenen Fahrzeug liegen.",
    abschnitte: [
      {
        h2: "Zwei Wege, einer davon passt zu Ihnen",
        absaetze: [
          "Wenn Ihr Auto nach einem unverschuldeten Unfall in der Werkstatt steht, haben Sie zwei Möglichkeiten. Entweder Sie mieten ein Ersatzfahrzeug, dann übernimmt die gegnerische Versicherung die Mietkosten. Oder Sie kommen ohne aus — dann steht Ihnen für jeden Tag ohne Fahrzeug eine Pauschale zu, die Nutzungsausfallentschädigung.",
          "Was günstiger ist, hängt davon ab, wie viel Sie tatsächlich fahren. Wer täglich pendelt, fährt mit dem Mietwagen besser. Wer das Auto ohnehin nur am Wochenende nutzt, bekommt mit dem Nutzungsausfall Geld in die Hand, ohne Aufwand zu haben. Beides gleichzeitig geht nicht.",
        ],
      },
      {
        h2: "Der Mietwagen: worauf Sie achten müssen",
        absaetze: [
          "Ein Mietwagen auf Kosten der Gegenseite ist kein Freifahrtschein. Die Versicherung erstattet nur, was erforderlich und angemessen ist — und genau daran scheitern viele Abrechnungen.",
        ],
        liste: [
          "Fahrzeugklasse: Üblich ist, eine Klasse unter dem eigenen Fahrzeug zu mieten. Wer ein gleichwertiges oder größeres Fahrzeug nimmt, muss mit Abzügen rechnen.",
          "Unfallersatztarif: Manche Vermieter bieten spezielle Tarife für Unfallgeschädigte an, die deutlich über dem Normaltarif liegen. Diese Aufschläge werden regelmäßig gekürzt. Fragen Sie nach dem Normaltarif.",
          "Fahrleistung: Wer weniger als etwa 20 bis 25 Kilometer am Tag fährt, bekommt den Mietwagen oft nicht voll erstattet — dann ist Nutzungsausfall der sichere Weg.",
          "Dauer: Erstattet wird die im Gutachten ausgewiesene Reparatur- oder Wiederbeschaffungsdauer, nicht die tatsächliche Standzeit, wenn diese länger ausfällt, weil Sie spät beauftragt haben.",
          "Vollkasko für den Mietwagen: Die Kosten dafür sind in der Regel erstattungsfähig. Ohne sie tragen Sie ein erhebliches Risiko.",
        ],
        hinweis:
          "Melden Sie sich, bevor Sie mieten. Eine kurze Rücksprache zur passenden Klasse und Dauer verhindert die allermeisten Kürzungen bei der Mietwagenabrechnung.",
      },
      {
        h2: "Der Nutzungsausfall: Geld statt Auto",
        absaetze: [
          "Nehmen Sie keinen Mietwagen, steht Ihnen für jeden Tag ohne Fahrzeug eine Pauschale zu. Die Höhe richtet sich nach der Fahrzeuggruppe von A bis L, in die Ihr Fahrzeug nach Typ und Motorisierung eingeordnet wird, und nach dem Fahrzeugalter — ältere Fahrzeuge werden herabgestuft.",
          "Die Dauer ergibt sich aus dem Gutachten: bei reparablem Schaden die kalkulierte Reparaturdauer zuzüglich einiger Tage für Beschaffung und Organisation, bei einem Totalschaden die Wiederbeschaffungsdauer. Das ist der Grund, warum diese Angabe im Gutachten nicht nebensächlich ist — jeder fehlende Tag kostet Sie bares Geld.",
          "Voraussetzung ist, dass Sie das Fahrzeug tatsächlich nutzen wollten und konnten. Wer im Krankenhaus liegt oder verreist ist, hat für diesen Zeitraum keinen Anspruch.",
        ],
      },
      {
        h2: "Was in beiden Fällen gilt",
        absaetze: [
          "Unabhängig davon, welchen Weg Sie wählen, gibt es ein paar Punkte, die über die Erstattung entscheiden:",
        ],
        liste: [
          "Lassen Sie das Gutachten zügig erstellen. Die erstattete Dauer richtet sich nach dem Gutachten, nicht nach Ihrer tatsächlichen Wartezeit.",
          "Beauftragen Sie die Reparatur zeitnah nach dem Gutachten. Wer wochenlang wartet, bekommt diese Zeit nicht ersetzt.",
          "Heben Sie alle Belege auf: Mietvertrag, Rechnung, gegebenenfalls Nachweise über Ihre Fahrleistung.",
          "Bei Totalschaden läuft der Anspruch bis zur Wiederbeschaffung, nicht unbegrenzt — auch hier gilt die im Gutachten genannte Dauer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wer zahlt den Mietwagen nach einem unverschuldeten Unfall?",
        a: "Die Haftpflichtversicherung des Unfallverursachers. Erstattet wird allerdings nur, was erforderlich und angemessen ist — in der Regel eine Fahrzeugklasse unter Ihrem eigenen Fahrzeug und für die im Gutachten ausgewiesene Dauer.",
      },
      {
        q: "Kann ich Mietwagen und Nutzungsausfall kombinieren?",
        a: "Nein, beides gleichzeitig geht nicht. Sie können aber wechseln: etwa erst einige Tage ohne Fahrzeug auskommen und dann mieten. Für jeden Tag gilt dann jeweils das eine oder das andere.",
      },
      {
        q: "Wie hoch ist der Nutzungsausfall pro Tag?",
        a: "Das hängt von der Fahrzeuggruppe A bis L und vom Alter des Fahrzeugs ab. Die Tagessätze und die Einordnung finden Sie in unserer Nutzungsausfall-Tabelle.",
      },
      {
        q: "Was ist ein Unfallersatztarif und sollte ich ihn nehmen?",
        a: "Ein Sondertarif einiger Vermieter für Unfallgeschädigte, der deutlich über dem Normaltarif liegt. Versicherungen kürzen diese Aufschläge regelmäßig, und Sie bleiben auf der Differenz sitzen. Fragen Sie ausdrücklich nach dem Normaltarif.",
      },
      {
        q: "Ich fahre nur wenig. Bekomme ich trotzdem einen Mietwagen?",
        a: "Bei sehr geringer Fahrleistung — als Orientierung unter etwa 20 bis 25 Kilometer am Tag — wird ein Mietwagen häufig nicht voll erstattet. Dann ist die Nutzungsausfallentschädigung der sichere und meist auch der wirtschaftlichere Weg.",
      },
    ],
    verwandt: [
      { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall-Tabelle", sub: "Tagessätze A bis L" },
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/versicherung-kuerzt-gutachten", label: "Kürzung durch Versicherung", sub: "Was Sie dagegen tun" },
      { href: "/werkstattbindung-versicherung", label: "Werkstattbindung", sub: "Wer die Werkstatt wählt" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bagatellschaden-grenze",
    kicker: "Bagatellschaden",
    title: "Kleiner Schaden,",
    titleAccent: "großes Risiko.",
    lead: "Unter einer bestimmten Grenze zahlt die Versicherung das Gutachten nicht. Das Problem: Wie groß der Schaden wirklich ist, sieht man ihm von außen fast nie an.",
    image: "/unfall-warndreieck.png",
    metaTitle: "Bagatellschaden: Ab wann lohnt sich ein Gutachten?",
    metaDescription:
      "Wo die Bagatellschadengrenze liegt, warum kleine Schäden oft teurer sind als sie aussehen und wann ein Kurzgutachten die bessere Wahl ist.",
    keywords: [
      "bagatellschaden grenze",
      "bagatellschaden gutachten",
      "kleiner schaden gutachten lohnt",
      "bagatellschaden 750 euro",
      "kostenvoranschlag bagatellschaden",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Als Bagatellschaden gilt ein Schaden unterhalb von etwa 750 bis 1.000 €. In diesem Bereich muss die gegnerische Versicherung die Kosten eines Vollgutachtens in der Regel nicht übernehmen. Weil sich der tatsächliche Schadenumfang von außen kaum abschätzen lässt, ist eine kurze Einschätzung vor der Entscheidung sinnvoll — ein Kurzgutachten schließt die Lücke.",
    abschnitte: [
      {
        h2: "Wo die Grenze liegt",
        absaetze: [
          "Eine gesetzlich festgeschriebene Bagatellgrenze gibt es nicht. In der Rechtsprechung hat sich ein Bereich zwischen etwa 750 und 1.000 € etabliert, wobei die Gerichte das unterschiedlich handhaben. Liegt der Schaden darunter, gilt die Beauftragung eines Sachverständigen häufig als nicht erforderlich — und dann trägt die gegnerische Versicherung die Gutachterkosten nicht.",
          "Das führt zu einem unangenehmen Zirkelschluss: Ob der Schaden über der Grenze liegt, weiß man sicher erst, wenn er begutachtet ist. Genau deshalb sollte man diese Entscheidung nicht allein nach dem äußeren Eindruck treffen.",
        ],
      },
      {
        h2: "Warum kleine Schäden selten klein bleiben",
        absaetze: [
          "Moderne Fahrzeuge haben hinter jedem Stoßfänger Technik, die ein Blechschaden früherer Generationen nicht kannte. Was von außen nach einer Delle und etwas Lack aussieht, ist bei der Kalkulation regelmäßig ein vierstelliger Betrag.",
        ],
        liste: [
          "Parksensoren, Radar- und Kamerasysteme sitzen in Stoßfängern und Außenspiegeln und müssen nach dem Ausbau neu kalibriert werden.",
          "Stoßfänger werden bei modernen Fahrzeugen häufig komplett ersetzt statt instand gesetzt, weil die Kunststoffstruktur nach einer Verformung nicht mehr die vorgesehenen Eigenschaften hat.",
          "Beilackierung angrenzender Bauteile ist nötig, damit der Farbton passt — das betrifft schnell zwei bis drei zusätzliche Teile.",
          "Hinter der sichtbaren Beschädigung liegen oft Halter, Träger oder Verstärkungen, die sich verformt haben.",
          "Bei Elektro- und Hybridfahrzeugen kommen Prüfungen hinzu, die bei einem Verbrenner entfallen.",
        ],
      },
      {
        h2: "Der Kostenvoranschlag als Falle",
        absaetze: [
          "Der naheliegende Ausweg scheint der Kostenvoranschlag aus der Werkstatt zu sein: schnell, günstig, oft kostenlos. Für die reine Frage „Was kostet die Reparatur?“ ist er auch geeignet.",
          "Er hat aber eine Lücke, die bei einem unverschuldeten Unfall teuer wird: Er weist nur Reparaturkosten aus. Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert tauchen nicht auf. Wer auf dieser Grundlage abrechnet, verzichtet auf Ansprüche, ohne es zu merken. Gerade die Wertminderung kann bei einem neueren Fahrzeug den Schaden allein über die Bagatellgrenze heben.",
        ],
        hinweis:
          "Bei einem unverschuldeten Unfall ist der Kostenvoranschlag fast immer die schlechtere Wahl — er spart der Versicherung Geld, nicht Ihnen.",
      },
      {
        h2: "Der praktische Weg",
        absaetze: [
          "Wir machen es so, dass Sie kein Risiko eingehen: Rufen Sie an und schicken Sie ein paar Fotos. In den meisten Fällen können wir schon daran einschätzen, ob der Schaden im Bagatellbereich liegt oder deutlich darüber.",
          "Liegt er darüber, erstellen wir ein vollständiges Gutachten, und die gegnerische Versicherung trägt die Kosten. Liegt er knapp darunter oder im Graubereich, ist ein Kurzgutachten die passende Lösung — es dokumentiert Schadenbild, Reparaturweg und Kosten, kostet aber deutlich weniger als ein Vollgutachten.",
          "Diese Ersteinschätzung ist kostenlos, auch wenn daraus kein Auftrag wird.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ab welchem Betrag lohnt sich ein Gutachten?",
        a: "Als Orientierung gilt eine Grenze von etwa 750 bis 1.000 €. Darüber sollten Sie in jedem Fall ein Gutachten erstellen lassen, weil die Versicherung die Kosten trägt und Sie sonst Wertminderung und Nutzungsausfall verschenken.",
      },
      {
        q: "Wer zahlt das Gutachten bei einem Bagatellschaden?",
        a: "Liegt der Schaden unter der Bagatellgrenze, muss die gegnerische Versicherung die Kosten eines Vollgutachtens in der Regel nicht übernehmen. Ein Kurzgutachten ist dann die kostengünstigere Alternative.",
      },
      {
        q: "Reicht bei einem Parkrempler nicht ein Foto?",
        a: "Für eine erste Einschätzung ja — schicken Sie uns gern welche. Für die Abrechnung mit der Versicherung reicht ein Foto nicht, weil daraus weder Reparaturweg noch Folgeschäden hervorgehen.",
      },
      {
        q: "Was ist der Unterschied zwischen Kurzgutachten und Vollgutachten?",
        a: "Das Kurzgutachten dokumentiert Schadenbild, Reparaturweg und Kosten. Aufwendige Zusatzermittlungen wie Restwertanfragen entfallen. Bei überschaubaren Schäden reicht das aus und kostet spürbar weniger.",
      },
      {
        q: "Kann ich den Schaden einfach selbst reparieren lassen?",
        a: "Können Sie. Lassen Sie ihn vorher dokumentieren, wenn ein anderer den Unfall verursacht hat — sonst haben Sie später keinen Nachweis mehr für Ihren Anspruch, auch nicht für die Wertminderung.",
      },
    ],
    verwandt: [
      { href: "/kurzgutachten-berlin", label: "Kurzgutachten", sub: "Für kleine Schäden" },
      { href: "/parkschaden-gutachten-berlin", label: "Parkschaden", sub: "Typischer Kleinschaden" },
      { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
      { href: "/kostenvoranschlag-oder-gutachten", label: "Kostenvoranschlag?", sub: "KV oder Gutachten" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wiederbeschaffungswert-berechnen",
    kicker: "Wiederbeschaffungswert",
    title: "Die eine Zahl, die",
    titleAccent: "über alles entscheidet.",
    lead: "Beim Totalschaden hängt Ihre gesamte Auszahlung an einer einzigen Größe. Wird sie zu niedrig angesetzt, merken Sie das erst, wenn Sie versuchen, ein gleichwertiges Auto zu kaufen.",
    image: "/foto10.jpg",
    metaTitle: "Wiederbeschaffungswert berechnen – so wird er ermittelt",
    metaDescription:
      "Was der Wiederbeschaffungswert ist, wie er ermittelt wird, worin er sich vom Marktwert unterscheidet und warum er bei der Versicherung zu niedrig ist.",
    keywords: [
      "wiederbeschaffungswert berechnen",
      "wiederbeschaffungswert totalschaden",
      "wiederbeschaffungswert ermittlung",
      "restwert wiederbeschaffungswert",
      "wiederbeschaffungsaufwand",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Der Wiederbeschaffungswert ist der Betrag, den Sie aufwenden müssten, um bei einem seriösen Händler ein gleichwertiges Fahrzeug zu kaufen — gleiche Ausstattung, Laufleistung und Zustand. Er wird aus aktuellen Angeboten des regionalen Marktes ermittelt, nicht aus einer Tabelle. Bei einem Totalschaden ergibt sich Ihre Auszahlung aus Wiederbeschaffungswert minus Restwert.",
    abschnitte: [
      {
        h2: "Was der Wiederbeschaffungswert ist — und was nicht",
        absaetze: [
          "Der Wiederbeschaffungswert beantwortet eine sehr praktische Frage: Was müssten Sie heute zahlen, um ein Auto zu bekommen, das Ihrem vor dem Unfall entspricht? Gleiches Modell, gleiche Motorisierung, vergleichbare Ausstattung, ähnliche Laufleistung, ähnlicher Zustand — gekauft bei einem seriösen Händler, nicht auf einem Privatmarkt ohne Gewährleistung.",
          "Häufig wird er mit dem Marktwert oder dem Verkaufswert verwechselt. Der Unterschied ist bedeutsam: Was Sie beim Verkauf Ihres Autos erlöst hätten, liegt niedriger als das, was Sie beim Kauf eines gleichwertigen zahlen müssen. Ersetzt wird der Kaufpreis, nicht der Verkaufserlös — sonst könnten Sie sich kein gleichwertiges Fahrzeug beschaffen.",
        ],
      },
      {
        h2: "Wie er ermittelt wird",
        absaetze: [
          "Eine seriöse Ermittlung stützt sich auf konkrete Vergleichsangebote, nicht auf einen pauschalen Tabellenwert. Wir schauen dafür auf den Markt, der für Sie tatsächlich erreichbar ist:",
        ],
        liste: [
          "Aktuelle Händlerangebote für vergleichbare Fahrzeuge, regional und überregional erhoben.",
          "Ausstattungsbereinigung: Sonderausstattung, die Ihr Fahrzeug hatte, wird eingepreist — Anhängerkupplung, Automatik, Assistenzpakete, Lederausstattung.",
          "Zustandskorrektur: Scheckheftpflege, Reifenzustand, Vorschäden und Gebrauchsspuren fließen ein.",
          "Laufleistung: Abweichungen von der marktüblichen Laufleistung werden auf- oder abgeschlagen.",
          "Mehrwertsteuer: Je nachdem, ob ein gleichwertiges Fahrzeug regelbesteuert, differenzbesteuert oder überwiegend privat gehandelt wird, wird die Steuer unterschiedlich berücksichtigt.",
        ],
      },
      {
        h2: "Warum die Zahl der Versicherung oft niedriger ist",
        absaetze: [
          "Versicherungen greifen für ihre Kalkulation gern auf pauschale Bewertungssysteme zurück. Die liefern schnell eine Zahl, bilden aber weder Ihre konkrete Ausstattung noch die regionale Marktlage ab. In einem angespannten Gebrauchtwagenmarkt liegen diese Werte regelmäßig deutlich unter den realen Preisen.",
          "Hinzu kommt der zweite Hebel: der Restwert. Ihre Auszahlung ergibt sich aus Wiederbeschaffungswert minus Restwert. Wird der Wiederbeschaffungswert gedrückt und gleichzeitig ein hohes Restwertangebot aus einer überregionalen Börse nachgeschoben, sinkt Ihre Entschädigung von beiden Seiten.",
        ],
        hinweis:
          "Verkaufen Sie Ihr beschädigtes Fahrzeug nicht an einen Aufkäufer aus einem nachgereichten Restwertangebot, ohne vorher Rücksprache zu halten. Danach lässt sich die Zahl nicht mehr korrigieren.",
      },
      {
        h2: "Rechenbeispiel Totalschaden",
        absaetze: [
          "Ein Beispiel macht das Zusammenspiel deutlich. Angenommen, Ihr Fahrzeug hat einen Wiederbeschaffungswert von 12.000 €, der Restwert nach dem Unfall liegt bei 3.000 € und die Reparatur würde 14.000 € kosten.",
          "Die Reparaturkosten liegen über dem Wiederbeschaffungswert, es handelt sich also um einen wirtschaftlichen Totalschaden. Abgerechnet wird der Wiederbeschaffungsaufwand: 12.000 € minus 3.000 € Restwert ergibt 9.000 € Auszahlung. Dazu kommen Nutzungsausfall für die Wiederbeschaffungsdauer und die Nebenkosten.",
          "Setzt die Versicherung den Wiederbeschaffungswert stattdessen auf 10.500 € und legt ein Restwertangebot über 4.200 € vor, bleiben 6.300 €. Dieselbe Situation, 2.700 € weniger — allein durch zwei Zahlen. Genau deshalb lohnt es sich, beide prüfen zu lassen.",
        ],
      },
      {
        h2: "Die 130-Prozent-Regel als Alternative",
        absaetze: [
          "Hängen Sie an Ihrem Auto und möchten es behalten, gibt es einen zweiten Weg. Liegen die Reparaturkosten nicht mehr als 30 Prozent über dem Wiederbeschaffungswert, dürfen Sie fachgerecht und vollständig nach Gutachten reparieren lassen und bekommen die Reparaturkosten ersetzt.",
          "Bedingung ist, dass Sie das Fahrzeug anschließend mindestens sechs Monate weiternutzen und die Reparatur vollständig nach den Vorgaben des Gutachtens ausgeführt wird. Eine Teilreparatur genügt nicht. Auch hier ist der Wiederbeschaffungswert die Bezugsgröße — er entscheidet, ob Ihr Fall noch in den 130-Prozent-Rahmen fällt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Wiederbeschaffungswert und Marktwert?",
        a: "Der Wiederbeschaffungswert ist der Kaufpreis für ein gleichwertiges Fahrzeug beim Händler. Der Marktwert beschreibt eher den erzielbaren Verkaufserlös und liegt darunter. Ersetzt wird der Wiederbeschaffungswert, weil Sie sich davon tatsächlich ein Ersatzfahrzeug beschaffen können müssen.",
      },
      {
        q: "Wie wird die Mehrwertsteuer berücksichtigt?",
        a: "Das hängt davon ab, wie vergleichbare Fahrzeuge am Markt gehandelt werden — regelbesteuert, differenzbesteuert oder überwiegend privat. Bei fiktiver Abrechnung wird die Mehrwertsteuer nicht ausgezahlt, sie fällt erst an, wenn Sie tatsächlich kaufen oder reparieren lassen.",
      },
      {
        q: "Die Versicherung nennt einen niedrigeren Wert. Was kann ich tun?",
        a: "Lassen Sie beide Zahlen prüfen. Wir gleichen die Annahmen der Versicherung mit konkreten Marktangeboten ab und schreiben eine Stellungnahme, wenn der Wert nicht haltbar ist. Bei Totalschäden geht es dabei regelmäßig um vierstellige Differenzen.",
      },
      {
        q: "Muss ich das Restwertangebot der Versicherung annehmen?",
        a: "In der Regel nicht. Sie dürfen sich grundsätzlich auf den im Gutachten ermittelten regionalen Restwert verlassen. Halten Sie aber Rücksprache, bevor Sie verkaufen — der Zeitpunkt ist entscheidend.",
      },
      {
        q: "Zählt Sonderausstattung mit?",
        a: "Ja, und sie wird häufig übersehen. Anhängerkupplung, Automatikgetriebe, Assistenzsysteme, Standheizung oder eine hochwertige Audioanlage erhöhen den Wiederbeschaffungswert. Halten Sie Belege oder die Fahrzeugbestellung bereit.",
      },
    ],
    verwandt: [
      { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Die zweite Zahl" },
      { href: "/totalschaden-gutachten-berlin", label: "Totalschaden", sub: "Wenn Reparatur sich nicht lohnt" },
      { href: "/130-prozent-regelung", label: "130-Prozent-Regel", sub: "Reparieren statt abrechnen" },
      { href: "/versicherung-kuerzt-gutachten", label: "Kürzung durch Versicherung", sub: "Was Sie dagegen tun" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kostenvoranschlag-oder-gutachten",
    kicker: "Vergleich",
    title: "Kostenvoranschlag",
    titleAccent: "oder Gutachten?",
    lead: "Der Kostenvoranschlag ist schneller und oft kostenlos. Bei einem unverschuldeten Unfall ist er trotzdem fast immer die teurere Entscheidung — weil er nur einen Teil Ihres Anspruchs abbildet.",
    image: "/buero.jpg",
    metaTitle: "Kostenvoranschlag oder Gutachten – was ist besser?",
    metaDescription:
      "Der direkte Vergleich: Was ein Kostenvoranschlag leistet, was nur ein Gutachten erfasst und in welchen Fällen welches Dokument die richtige Wahl ist.",
    keywords: [
      "kostenvoranschlag oder gutachten",
      "unterschied kostenvoranschlag gutachten",
      "kostenvoranschlag unfall versicherung",
      "reicht kostenvoranschlag",
      "gutachten statt kostenvoranschlag",
    ],
    stand: "2026-09-18",
    standLabel: "18. September 2026",
    direktantwort:
      "Ein Kostenvoranschlag kommt aus der Werkstatt und nennt ausschließlich die voraussichtlichen Reparaturkosten. Ein Gutachten erfasst zusätzlich Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert sowie die Reparaturdauer. Bei einem unverschuldeten Unfall zahlt die gegnerische Versicherung das Gutachten — der Kostenvoranschlag kostet Sie dann faktisch Geld.",
    abschnitte: [
      {
        h2: "Was jedes der beiden Dokumente leistet",
        absaetze: [
          "Beide beantworten unterschiedliche Fragen. Der Kostenvoranschlag beantwortet: Was kostet es, dieses Auto wieder instand zu setzen? Das Gutachten beantwortet: Welcher Schaden ist insgesamt entstanden, und was steht mir dafür zu?",
          "Das ist kein akademischer Unterschied. Die Positionen, die im Kostenvoranschlag fehlen, machen bei einem durchschnittlichen Unfallschaden häufig den größeren Teil der Summe aus.",
        ],
        liste: [
          "Reparaturkosten: in beiden enthalten.",
          "Wertminderung: nur im Gutachten. Bei neueren Fahrzeugen schnell vierstellig.",
          "Nutzungsausfall oder Mietwagendauer: nur im Gutachten, weil nur dort die Reparaturdauer ausgewiesen wird.",
          "Wiederbeschaffungswert: nur im Gutachten. Ohne ihn lässt sich ein Totalschaden gar nicht erkennen.",
          "Restwert: nur im Gutachten.",
          "Beweiskraft bei Streit: Der Kostenvoranschlag ist eine Kalkulation der Werkstatt, das Gutachten die Feststellung eines unabhängigen Sachverständigen.",
          "Kostenübernahme: Bei Fremdverschulden trägt die gegnerische Versicherung das Gutachten. Der Kostenvoranschlag ist zwar oft kostenlos, ersetzt aber die fehlenden Positionen nicht.",
        ],
      },
      {
        h2: "Der teure Denkfehler",
        absaetze: [
          "Die Überlegung klingt zunächst vernünftig: Der Schaden ist überschaubar, die Werkstatt macht den Kostenvoranschlag kostenlos, warum also ein Gutachten beauftragen und die Sache verkomplizieren?",
          "Der Haken ist, dass Sie damit auf Ansprüche verzichten, von denen Sie nichts wissen. Ein Beispiel: Reparaturkosten 3.200 €, Wertminderung 900 €, acht Tage Nutzungsausfall zu 59 € macht 472 €. Mit Kostenvoranschlag bekommen Sie 3.200 €, mit Gutachten 4.572 €. Das Gutachten hätte die Versicherung bezahlt.",
          "Hinzu kommt: Ein Kostenvoranschlag weist keine Reparaturdauer aus. Ohne diese Angabe gibt es keine Grundlage für Nutzungsausfall oder Mietwagenerstattung — der Anspruch fällt nicht weg, aber er lässt sich nicht beziffern.",
        ],
      },
      {
        h2: "Wann der Kostenvoranschlag ausreicht",
        absaetze: [
          "Es gibt Situationen, in denen er die richtige Wahl ist — sie sind nur seltener, als viele denken.",
        ],
        liste: [
          "Sie haben den Unfall selbst verursacht und zahlen aus eigener Tasche. Dann interessiert Sie nur der Reparaturpreis.",
          "Der Schaden liegt eindeutig im Bagatellbereich unter etwa 750 € und Sie wollen ihn ohnehin reparieren lassen.",
          "Sie holen mehrere Angebote ein, um die Werkstatt auszuwählen — dafür ist der Kostenvoranschlag genau das richtige Werkzeug.",
        ],
        hinweis:
          "In allen anderen Fällen — insbesondere bei jedem unverschuldeten Unfall über der Bagatellgrenze — ist das Gutachten die wirtschaftlich bessere Entscheidung, und es kostet Sie nichts.",
      },
      {
        h2: "Was die Versicherung dazu sagt",
        absaetze: [
          "Rechnen Sie damit, dass die gegnerische Versicherung Ihnen den Kostenvoranschlag nahelegt, oft verbunden mit dem Angebot einer Partnerwerkstatt und dem Hinweis, das gehe schneller. Das stimmt sogar — es ist nur nicht in Ihrem Interesse.",
          "Sie sind darauf nicht angewiesen. Bei einem unverschuldeten Unfall haben Sie das Recht, einen eigenen Sachverständigen zu beauftragen, und die Kosten trägt die Gegenseite. Das ist kein Entgegenkommen, sondern Teil Ihres Schadenersatzanspruchs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Reicht der Versicherung ein Kostenvoranschlag?",
        a: "Zur Regulierung der reinen Reparaturkosten meist ja — und genau das ist das Problem. Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert bleiben unberücksichtigt, weil sie im Kostenvoranschlag gar nicht vorkommen.",
      },
      {
        q: "Ist der Kostenvoranschlag wirklich kostenlos?",
        a: "Viele Werkstätten erstellen ihn kostenlos oder rechnen ihn bei Auftragserteilung an. Das ändert nichts daran, dass Sie bei einem unverschuldeten Unfall mit einem Gutachten in Summe besser fahren — dessen Kosten trägt ohnehin die Gegenseite.",
      },
      {
        q: "Kann ich beides machen lassen?",
        a: "Möglich ist es, sinnvoll selten. Das Gutachten enthält die Kalkulation bereits. Ein zusätzlicher Kostenvoranschlag bringt keinen Mehrwert und kann bei abweichenden Zahlen sogar Angriffsfläche bieten.",
      },
      {
        q: "Was, wenn ich schon einen Kostenvoranschlag habe?",
        a: "Solange Sie noch nicht abgerechnet und nichts unterschrieben haben, lässt sich in der Regel noch ein Gutachten nachschieben. Melden Sie sich, bevor Sie eine Abfindungserklärung unterschreiben oder reparieren lassen.",
      },
      {
        q: "Gilt das auch bei einem Kaskoschaden?",
        a: "Dort ist die Lage anders, weil Ihre eigene Versicherung nach Vertragsbedingungen reguliert und Nutzungsausfall in der Regel nicht vorgesehen ist. Ob sich ein Gutachten lohnt, hängt dann vom Einzelfall ab — wir sagen Ihnen das vorab.",
      },
    ],
    verwandt: [
      { href: "/kfz-gutachten-berlin", label: "Alle Gutachtenarten", sub: "Übersicht" },
      { href: "/bagatellschaden-grenze", label: "Bagatellschaden", sub: "Ab wann lohnt es sich" },
      { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
      { href: "/werkstattbindung-versicherung", label: "Werkstattbindung", sub: "Wer die Werkstatt wählt" },
    ],
  },
];

export const ratgeberSlugs = ratgeberContent.map((r) => r.slug);

export function getRatgeber(slug: string): RatgeberContent {
  const treffer = ratgeberContent.find((r) => r.slug === slug);
  if (!treffer) throw new Error(`Ratgeber "${slug}" fehlt in lib/ratgeber-content.ts`);
  return treffer;
}
