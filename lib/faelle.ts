import type { Praxisfall } from "./bezirk-content";

/**
 * Das Fallarchiv unter /faelle.
 *
 * Gefüllt wird diese Datei vom Skill `wochenfall` (.claude/skills/wochenfall),
 * der wöchentlich die neuen Auftragsordner in iCloud durchgeht. Von Hand
 * ergänzen geht genauso, das Format ist dasselbe.
 *
 * Die inhaltlichen Regeln stehen in PRAXISFAELLE-VORLAGE.md und gelten hier
 * unverändert: nur echte Fälle, nur echte Zahlen, anonymisiert. Ein erfundener
 * Fall ist nach UWG irreführende Werbung — lieber eine Woche ohne Eintrag.
 */
export interface Fall extends Praxisfall {
  /** URL-Segment unter /faelle/. Sprechend, ohne Jahreszahl im Slug. */
  slug: string;
  /** H1 und Linktext. Beschreibt den Fall, nicht die Leistung. */
  titel: string;
  /** Ein bis zwei Sätze für Übersicht und Meta-Description. */
  teaser: string;
  /**
   * ISO-Datum der Veröffentlichung. Steuert die Reihenfolge im Archiv und
   * das datePublished im Schema. Nicht das Unfalldatum — das steht in `monat`.
   */
  veroeffentlicht: string;
  /**
   * Interne Auftragsnummer, z. B. "GA-2609-016". Erscheint nirgends auf der
   * Website. Sie ist die Gedächtnisstütze des Skills: Was hier steht, wurde
   * schon verarbeitet und wird nicht ein zweites Mal aufgegriffen.
   */
  quelle: string;
  /** Slug der passenden Bezirksseite, für die Verlinkung. Optional. */
  bezirkSlug?: string;
  /** Anzeigename des Bezirks, z. B. "Pankow". */
  bezirk?: string;
  /**
   * Die betroffenen Bauteile und die jeweilige Maßnahme, aus der Kalkulation
   * des Gutachtens: "Fahrertür — Ersatz", "Abstandssensor — Ausbau und
   * Kalibrierung".
   *
   * Steht hier als eigene Liste und nicht nur im Fließtext, weil genau diese
   * Begriffe gesucht werden. Wer "Querträger verzogen Kosten" oder
   * "Abstandssensor nach Unfall kalibrieren" eingibt, landet über solche
   * Zeilen — der Fließtext allein deckt das nicht ab, weil er erzählt statt
   * zu benennen. Für KI-Systeme ist eine Liste zudem leichter zitierbar.
   *
   * Nur Bauteile, die in der Kalkulation stehen. Nichts ergänzen, was
   * plausibel klingt.
   */
  bauteile?: string[];
}

export const faelle: Fall[] = [
  {
    slug: "achsschaden-mercedes-c-300-t-a10",
    titel: "Zwei Drittel der Kosten stecken nicht im Blech",
    teaser:
      "Mercedes C 300 T d, auf der A10 hinten links gerammt: 24.944,41 Euro Reparaturkosten, davon nur 7.331,91 Euro für Teile. Der Rest ist Arbeit und Lack.",
    veroeffentlicht: "2026-10-14",
    quelle: "GA-2603-004",
    monat: "März 2026",
    ort: "Autobahn A10",
    fahrzeug: "Mercedes-Benz C 300 T d, Erstzulassung 2023, rund 81.000 km",
    unfallart: "Spurwechsel-Kollision hinten links",
    bauteile: [
      "Seitenwand hinten links — Ersatz, geklebt",
      "Tür hinten links mit Scharnieren und Halter — Ersatz",
      "Stoßfängerverkleidung hinten mit PDC-Sensor — Ersatz",
      "Radträger hinten links — Ersatz",
      "Radlager mit Achsflansch hinten links — Ersatz",
      "Spurstange, Federlenker, Sturz-, Zug- und Schubstrebe hinten links — Ersatz",
      "Stoßdämpfer und Hinterfedern, beide Seiten — Ersatz",
      "Felge hinten links — Ersatz",
      "Reifen hinten, beide Seiten — Ersatz",
      "Seitenschweller links — Ersatz",
      "Achsvermessung vor und nach der Reparatur, Karosserievermessung",
    ],
    schadenbild: [
      "Auf den Fotos sieht man eine tiefe Kratzspur über die hintere linke Tür, den Seitenschweller und die Seitenwand. Nach einem Spurwechsel auf der Autobahn ist das ein typisches Bild, und viele würden es für Lackarbeit halten. Tatsächlich ist die Seitenwand im Bereich des Kniestücks strukturell verformt, die Spaltmaße zu Tür und Stoßfänger stimmen nicht mehr, und die Tür ist verzogen, samt Scharnieren und Halterungen.",
      "Weniger auffällig ist das Fahrwerk. Das Hinterrad steht sichtbar schief. Der Radträger besteht aus Grauguss, und bei dieser Anstoßenergie lassen sich Mikrorisse nicht ausschließen. Das Gutachten setzt ihn deshalb zusammen mit allen radgeometrierelevanten Teilen an: Radlager mit Achsflansch, Spurstange, Federlenker, Sturz-, Zug- und Schubstrebe. Feder und Stoßdämpfer werden aus Sicherheitsgründen auf beiden Seiten getauscht. Vor und nach der Reparatur ist eine Achsvermessung nötig, dazu eine Karosserievermessung und das Auslesen des Fehlerspeichers.",
      "Wie sich die Kosten verteilen, zeigt die Kalkulation. Ersatzteile machen 7.331,91 Euro aus, Arbeitslöhne 12.882,10 Euro und die Lackierung 4.471,90 Euro. Die Karosseriearbeit allein summiert sich auf rund 30 Stunden. Mit 77 Prozent vom Wiederbeschaffungswert bleibt es ein Reparaturschaden. Wegen Vorschäden an der rechten Seitenwand und am vorderen Stoßfänger wurden vom Marktwert 700 Euro abgezogen, der Wiederbeschaffungswert liegt bei 36.200 Euro. Dazu kommt ein merkantiler Minderwert von 2.444,00 Euro. Das Gutachten empfiehlt eine Notreparatur, um die Fahrbereitschaft wiederherzustellen.",
    ],
    ergebnis: [
      { label: "Reparaturkosten netto", wert: "24.944,41 €" },
      { label: "Reparaturkosten brutto", wert: "29.683,85 €" },
      { label: "Merkantiler Minderwert", wert: "2.444,00 €" },
      { label: "Schadenhöhe netto", wert: "27.388,41 €" },
      { label: "Schadenhöhe brutto", wert: "32.127,85 €" },
      { label: "Wiederbeschaffungswert", wert: "36.200,00 €" },
      { label: "Wiederherstellungsaufwand zum Fahrzeugwert", wert: "77 %" },
      { label: "Restwert inkl. MwSt.", wert: "26.130,00 €" },
      { label: "Reparaturdauer", wert: "ca. 9 Arbeitstage" },
      { label: "Nutzungsausfall pro Tag (Gruppe J)", wert: "79,00 €" },
    ],
    fazit:
      "Wer nur auf die Teilepreise schaut, unterschätzt diesen Schaden um mehr als die Hälfte. Arbeitszeit, Lack und Achsbauteile machen den Unterschied.",
    bilder: [
      { src: "/faelle/achsschaden-mercedes-c-300-t-a10-1.jpg", alt: "Tiefe Kratzer und Verformung an der Tür hinten links des Mercedes C 300 T d" },
      { src: "/faelle/achsschaden-mercedes-c-300-t-a10-2.jpg", alt: "Eingedrückte Seitenwand am Radlauf hinten links mit Reifen, Mercedes C-Klasse T-Modell" },
      { src: "/faelle/achsschaden-mercedes-c-300-t-a10-3.jpg", alt: "Kratzspuren an Tür und Seitenschweller links, Mercedes C 300 T d" },
    ],
  },
  {
    slug: "totalschaden-audi-a3-prenzlauer-berg",
    titel: "Ein zehn Jahre alter A3 und 135 Prozent Reparaturkosten",
    teaser:
      "Audi A3 Limousine, rechte Seite aufgerissen: 15.257,94 Euro Reparaturkosten gegen 11.302,52 Euro Wiederbeschaffungswert. Warum aus 135 Prozent ein Totalschaden wird.",
    veroeffentlicht: "2026-10-08",
    quelle: "GA-2609-004",
    bezirkSlug: "kfz-sachverstaendiger-berlin-prenzlauer-berg",
    bezirk: "Prenzlauer Berg",
    monat: "September 2026",
    ort: "Lychener Straße, Prenzlauer Berg",
    fahrzeug: "Audi A3 Limousine S line, Erstzulassung 2016, rund 203.000 km",
    unfallart: "Seitlicher Anstoß rechts",
    bauteile: [
      "Kotflügel vorn rechts — Ersatz",
      "Tür vorn rechts — Ersatz",
      "Tür hinten rechts — Ersatz",
      "Stoßfängerverkleidung vorn rechts — Ersatz",
      "Scheinwerfer vorn rechts — Ersatz",
      "Felge vorn rechts und hinten rechts — Ersatz",
      "Reifen vorn und hinten, achsweise — Ersatz",
      "Querlenker vorn rechts — Ersatz (vorsorglich kalkuliert)",
      "Achsvermessung und Karosserievermessung — erforderlich",
    ],
    schadenbild: [
      "Die rechte Seite ist über die ganze Länge beschädigt: Kotflügel, beide Türen und der Stoßfänger sind deformiert, dejustiert und zerkratzt und werden erneuert, die Seitenwand hinten rechts am Kniestück wird instand gesetzt. Das Türschloss vorn rechts ist funktionsunfähig, der Scheinwerfer zerkratzt und komplett zu ersetzen. Schon das summiert sich.",
      "Dazu kommt, was am Rad passiert ist. Beide rechten Felgen sind verschrammt und werden ersetzt, der Reifen vorn rechts sitzt unmittelbar im Schadenbereich und muss aus Sicherheitsgründen runter. Weil Reifen achsweise getauscht werden, kommen die linken dazu. Und dann der Querlenker vorn rechts: Ein struktureller Schaden lässt sich bei dieser Anstoßintensität nicht ausschließen. Er steht deshalb vorsorglich in der Kalkulation, die endgültige Bestätigung gibt es erst bei der Zerlegung. Achs- und Karosserievermessung kommen vor der Reparatur.",
      "Zusammen ergibt das Reparaturkosten von 15.257,94 Euro netto gegen einen Wiederbeschaffungswert von 11.302,52 Euro netto, also 135 Prozent. Bei einem Fahrzeug von 2016 mit gut 200.000 Kilometern trägt sich diese Rechnung nicht mehr. Das Gutachten stuft den Fall als Totalschaden ein und empfiehlt die Reparatur mit Rücksicht auf Kosten, Reparaturrisiko, Nebenkosten und Restwerterlös nicht.",
    ],
    ergebnis: [
      { label: "Reparaturkosten netto", wert: "15.257,94 €" },
      { label: "Reparaturkosten brutto", wert: "18.156,95 €" },
      { label: "Neu-für-alt-Abzug netto", wert: "−191,00 €" },
      { label: "Wiederbeschaffungswert brutto", wert: "13.450,00 €" },
      { label: "Wiederbeschaffungswert netto", wert: "11.302,52 €" },
      { label: "Restwert", wert: "5.011,00 €" },
      { label: "Wiederherstellungsaufwand zum Fahrzeugwert", wert: "135 %" },
      { label: "Reparaturdauer (wenn repariert)", wert: "ca. 4 Arbeitstage" },
    ],
    fazit:
      "Totalschaden. Für die Abrechnung zählen Wiederbeschaffungswert und Restwert, nicht die Reparaturkosten. Der Restwert von 5.011 Euro ist deshalb keine Kleinigkeit, sondern ein Posten, der den Auszahlungsbetrag mitbestimmt.",
    bilder: [
      { src: "/faelle/totalschaden-audi-a3-prenzlauer-berg-1.jpg", alt: "Verschrammte Speichen und Radnabenkappe der Felge vorn rechts am Audi A3" },
      { src: "/faelle/totalschaden-audi-a3-prenzlauer-berg-2.jpg", alt: "Abgeschürfte Felge vorn rechts mit Blick auf Bremsscheibe, Audi A3" },
      { src: "/faelle/totalschaden-audi-a3-prenzlauer-berg-3.jpg", alt: "Aufgeschürfte Reifenflanke und Felgenhorn am Audi A3, Nahaufnahme" },
      { src: "/faelle/totalschaden-audi-a3-prenzlauer-berg-4.jpg", alt: "Reifenflanke mit Schleifspuren neben der beschädigten Felge, Audi A3" },
    ],
  },
  {
    slug: "seitenwand-audi-s6-avant-kreuzberg",
    titel: "Eine Seitenwand, die alle vier Reifen kostet",
    teaser:
      "Audi S6 Avant, hinten rechts gerammt: 19.255,44 Euro netto Reparaturkosten, 1.157 Euro Wertminderung. Warum bei Allradantrieb auch die Reifen vorn mit auf die Rechnung kommen.",
    veroeffentlicht: "2026-10-08",
    quelle: "GA-2608-012",
    bezirkSlug: "kfz-sachverstaendiger-berlin-kreuzberg",
    bezirk: "Kreuzberg",
    monat: "August 2026",
    ort: "Zossener Straße, Kreuzberg",
    fahrzeug: "Audi S6 Avant 3.0 TDI quattro, Erstzulassung 2019, rund 116.000 km",
    unfallart: "Anstoß hinten rechts",
    bauteile: [
      "Seitenwand hinten rechts — Ersatz",
      "Stoßfängerverkleidung hinten rechts — Ersatz",
      "Tankklappe — Ersatz",
      "Heckleuchte hinten rechts — Ersatz",
      "PDC-Sensor hinten rechts — Ersatz",
      "Radhausschale hinten rechts — Ersatz",
      "Unterbodenverkleidung hinten rechts — Ersatz",
      "Rad-Reifen-Kombination hinten rechts — Ersatz",
      "Alle vier Reifen — Ersatz (Allradantrieb, Herstellervorgabe)",
      "Achsvermessung und Karosserievermessung — erforderlich",
    ],
    schadenbild: [
      "Die Seitenwand hinten rechts ist gerissen, verformt und verschoben, die Stoßfängerverkleidung großflächig zerschrammt, die Tankklappe verbogen. Das sieht man sofort, und es erklärt schon einen großen Teil der Rechnung. Dazu kommen Auspuffblende, Heckleuchte und Türgriff, die jeweils erneuert werden müssen.",
      "Nicht sichtbar sind die Folgeschäden in der Tiefe: Die Radhausschale ist innen gerissen, das Führungsteil des Stoßfängers verformt, die Unterbodenverkleidung beschädigt. Der PDC-Sensor hinten rechts sitzt direkt im Anstoßbereich, seine zuverlässige Funktion ist nicht mehr gewährleistet. Und die Rad-Reifen-Kombination hinten rechts ist stark beschädigt, die Felge abgeschürft. Beim quattro kommt eine Herstellervorgabe ins Spiel: Weicht die Profiltiefe an einer Achse um mehr als 3 mm von der anderen ab, sind wegen des Allradantriebs alle vier Reifen zu erneuern. Wegen der Anstoßintensität am Rad sind außerdem Achs- und Karosserievermessung erforderlich.",
      "Die Reparaturkosten liegen bei 64 Prozent des Wiederbeschaffungswerts, der Wagen ist also noch ein Reparaturschaden. Die Reparatur dauert voraussichtlich sieben Arbeitstage. Dazu kommt eine merkantile Wertminderung von 1.157 Euro, die auch eine fachgerechte Reparatur nicht beseitigt. Der Restwert wurde mit 15.590 Euro ermittelt, er zeigt, was das Fahrzeug unrepariert noch wert wäre.",
    ],
    ergebnis: [
      { label: "Reparaturkosten netto", wert: "19.255,44 €" },
      { label: "Neu-für-alt-Abzug netto", wert: "−170,80 €" },
      { label: "Merkantiler Minderwert", wert: "1.157,00 €" },
      { label: "Schadenhöhe netto", wert: "20.241,64 €" },
      { label: "Schadenhöhe brutto", wert: "23.867,72 €" },
      { label: "Wiederbeschaffungswert", wert: "37.850,00 €" },
      { label: "Restwert", wert: "15.590,00 €" },
      { label: "Wiederherstellungsaufwand zum Fahrzeugwert", wert: "64 %" },
      { label: "Reparaturdauer", wert: "ca. 7 Arbeitstage" },
      { label: "Nutzungsausfall pro Tag (Gruppe J)", wert: "79,00 €" },
    ],
    fazit:
      "Reparatur statt Totalschaden. Wer nur Seitenwand und Stoßfänger sieht, rechnet zu niedrig: Reifen, Sensorik und die Wertminderung machen den Unterschied.",
    bilder: [
      { src: "/faelle/seitenwand-audi-s6-avant-kreuzberg-1.jpg", alt: "Gerissene und verformte Seitenwand hinten rechts am Audi S6 Avant über dem Radlauf" },
      { src: "/faelle/seitenwand-audi-s6-avant-kreuzberg-2.jpg", alt: "Beschädigte Tankklappe mit Diesel- und AdBlue-Verschluss am Audi S6 Avant" },
      { src: "/faelle/seitenwand-audi-s6-avant-kreuzberg-3.jpg", alt: "Abgeschürfte Felge hinten rechts am Audi S6 Avant, Nahaufnahme" },
      { src: "/faelle/seitenwand-audi-s6-avant-kreuzberg-4.jpg", alt: "Hinterrad rechts mit Kratzspuren an Radlauf und Seitenwand, Audi S6 Avant" },
    ],
  },
  {
    slug: "achsschaden-tesla-model-y-mitte",
    titel: "Ein Kratzer an der Tür, ein Schaden an der Hinterachse",
    teaser:
      "Tesla Model Y, hinten rechts angefahren. Außen Kratzer und eine Radlaufverbreiterung, innen Querlenker, Achsschenkel und Spurstangenstrebe. Die Achsvermessung brachte es ans Licht.",
    veroeffentlicht: "2026-10-08",
    quelle: "GA-2609-026",
    bezirkSlug: "kfz-sachverstaendiger-berlin-mitte",
    bezirk: "Mitte",
    monat: "August 2026",
    ort: "Spandauer Straße, Mitte",
    fahrzeug: "Tesla Model Y, Erstzulassung 2023, rund 55.000 km",
    unfallart: "Anstoß hinten rechts",
    bauteile: [
      "Tür hinten rechts — Instandsetzung",
      "Seitenschwellerverkleidung rechts — Ersatz",
      "Radlaufverbreiterung hinten rechts — Ersatz",
      "Rad-Reifen-Kombination hinten rechts (Reifen und Felge) — Ersatz",
      "Reifen hinten links — Ersatz, achsweise",
      "Querlenker hinten unten rechts — Ersatz",
      "Achsschenkel mit Radlagergehäuse hinten rechts — Ersatz",
      "Spurstangenstrebe hinten rechts — Ersatz",
      "Achsvermessung — durchgeführt",
      "Hochvoltsystem — Prüfung auf verdeckte Schäden",
    ],
    schadenbild: [
      "Von außen sieht der Wagen nach einem Kratzer aus. Die Tür hinten rechts ist verschrammt und an mehreren Stellen verformt, die Seitenschwellerverkleidung beschädigt, die Radlaufverbreiterung beschädigt. Wer nur hinsieht, rechnet mit Lack und ein paar Kunststoffteilen. Im Gutachten steht deshalb zuerst die Tür zur Instandsetzung, daneben Ersatz für Schwellerverkleidung und Radlaufverbreiterung.",
      "Der eigentliche Befund kam aus der Achsvermessung. Wegen der Anstoßintensität in diesem Bereich wurde die Achse gemessen, und die Werte belegen eine beschädigte Achsgeometrie. Querlenker hinten unten, Achsschenkel mit Radlagergehäuse und Spurstangenstrebe auf der rechten Seite müssen deshalb erneuert werden. Es lässt sich nicht gewährleisten, dass diese Teile unbeschädigt sind, und an einer Achse nimmt man dieses Risiko nicht in Kauf. Reifen und Felge hinten rechts sind ebenfalls hin, der linke Reifen wird achsweise mitgetauscht.",
      "Beim Tesla kommt noch das Hochvoltsystem dazu. Ein Anstoß in dieser Gegend kann verdeckte Schäden daran nicht ausschließen, also sieht das Gutachten eine Prüfung vor und kalkuliert die Vorbereitung des Hochvolt-Arbeitsplatzes mit. Trotzdem bleibt der Fall mit 23 Prozent des Wiederbeschaffungswerts klar im Bereich der Reparatur. Zur Schadenhöhe gehört hier zusätzlich ein merkantiler Minderwert von 486 Euro, den die Reparatur nicht beseitigt.",
    ],
    ergebnis: [
      { label: "Reparaturkosten netto", wert: "6.040,34 €" },
      { label: "Reparaturkosten brutto", wert: "7.188,00 €" },
      { label: "Neu-für-alt-Abzug netto", wert: "−225,88 €" },
      { label: "Merkantiler Minderwert", wert: "486,00 €" },
      { label: "Schadenhöhe netto", wert: "6.300,46 €" },
      { label: "Schadenhöhe brutto", wert: "7.405,20 €" },
      { label: "Wiederbeschaffungswert", wert: "33.150,00 €" },
      { label: "Wiederherstellungsaufwand zum Fahrzeugwert", wert: "23 %" },
      { label: "Reparaturdauer", wert: "ca. 2 Arbeitstage" },
      { label: "Nutzungsausfall pro Tag (Gruppe G)", wert: "59,00 €" },
    ],
    fazit:
      "Ohne Achsvermessung wäre der Schaden bei Tür, Schwellerverkleidung und Radlauf stehen geblieben. Mit ihr kommen die Achsbauteile und die Wertminderung dazu, und der Schaden wird vollständig erfasst.",
    bilder: [
      { src: "/faelle/achsschaden-tesla-model-y-mitte-1.jpg", alt: "Beschädigte Seitenschwellerverkleidung und Radlaufverbreiterung hinten rechts am Tesla Model Y" },
      { src: "/faelle/achsschaden-tesla-model-y-mitte-2.jpg", alt: "Kratzspuren an Radlaufverbreiterung und Seitenwand hinten rechts, Tesla Model Y" },
      { src: "/faelle/achsschaden-tesla-model-y-mitte-3.jpg", alt: "Verformte Radlaufverbreiterung hinten rechts, Nahaufnahme" },
      { src: "/faelle/achsschaden-tesla-model-y-mitte-4.jpg", alt: "Schleifspuren im Lack oberhalb der Radlaufverbreiterung am Tesla Model Y" },
    ],
  },
  {
    slug: "totalschaden-vw-polo-karow",
    titel: "Eine Tür, die den Wagen zum Totalschaden macht",
    teaser:
      "Ein 24 Jahre alter VW Polo in Karow, angestoßen an der Fahrertür. 2.557 Euro Reparaturkosten gegen 1.700 Euro Fahrzeugwert — warum daraus ein wirtschaftlicher Totalschaden wird.",
    veroeffentlicht: "2026-06-30",
    quelle: "bezirksseite-pankow",
    bezirkSlug: "kfz-sachverstaendiger-berlin-pankow",
    bezirk: "Pankow",
    monat: "Juni 2026",
    ort: "Schwanebecker Chaussee, Karow",
    fahrzeug: "VW Polo, Erstzulassung 2002, rund 274.000 km",
    unfallart: "Anstoß an der Fahrertür",
    // Nur, was im Text des Falls belegt ist. Eine Lackposition wäre plausibel,
    // steht hier aber nicht, also kommt sie auch nicht rein.
    bauteile: [
      "Fahrertür — Ersatz statt Instandsetzung",
      "Zierleiste Fahrertür — Ersatz",
    ],
    schadenbild: [
      "Ein Fall aus dem Norden des Bezirks, dort wo die Schwanebecker Chaussee Richtung Brandenburg führt. Betroffen war die Fahrertür: stark verformt, mit einer tiefen Einkerbung. Ersatz statt Instandsetzung, weil eine Einkerbung dieser Tiefe sich nicht mehr fachgerecht ausbeulen lässt.",
      "Dazu die beschädigte Zierleiste. Unspektakulär, aber bei einem Fahrzeug dieses Alters ein Teil, das oft nicht mehr neu lieferbar ist und dann über Gebrauchtteile beschafft werden muss.",
      "Entscheidend war hier das Verhältnis: 2.557 Euro Reparaturkosten gegen 1.700 Euro Wiederbeschaffungswert, also ein Wiederherstellungsaufwand von 150 Prozent. Bei einem 24 Jahre alten Fahrzeug kippt eine einzelne Tür den ganzen Fall in den Totalschadenbereich.",
    ],
    ergebnis: [
      { label: "Reparaturkosten brutto", wert: "2.556,74 €" },
      { label: "Schadenhöhe brutto", wert: "2.437,74 €" },
      { label: "Wiederbeschaffungswert", wert: "1.700,00 €" },
      { label: "Restwert", wert: "40,00 €" },
      { label: "Wiederherstellungsaufwand zum Fahrzeugwert", wert: "150 %" },
      { label: "Reparaturdauer", wert: "2 Arbeitstage" },
    ],
    fazit:
      "Über der 130-Prozent-Grenze. Eine Reparatur auf Kosten der Gegenseite war damit nicht durchsetzbar, abgerechnet wurde über Wiederbeschaffungswert minus Restwert.",
    bilder: [
      { src: "/faelle/pankow-1.jpg", alt: "Grüner VW Polo auf einem Parkplatz in Karow, Kennzeichen abgedeckt" },
      { src: "/faelle/pankow-2.jpg", alt: "Verformung der Fahrertür mit Einkerbung unterhalb der Zierleiste" },
      { src: "/faelle/pankow-3.jpg", alt: "Fahrertür des VW Polo mit tiefer Einkerbung, Nahaufnahme" },
      { src: "/faelle/pankow-4.jpg", alt: "Schadensbereich an der Fahrertür über die Zierleiste hinweg" },
    ],
  },
];

/** Neueste zuerst. Reihenfolge im Archiv und in der Sitemap. */
export const faelleSortiert = [...faelle].sort((a, b) =>
  b.veroeffentlicht.localeCompare(a.veroeffentlicht),
);

export function fallBySlug(slug: string) {
  return faelle.find((f) => f.slug === slug);
}
