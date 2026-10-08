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
