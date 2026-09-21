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
}

export const faelle: Fall[] = [
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
