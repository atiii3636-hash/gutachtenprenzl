// Single Source of Truth für alle FAQs
// Wird verwendet von:
//   - components/faq-section.tsx (sichtbare FAQ auf der Homepage)
//   - app/layout.tsx (JSON-LD FAQPage-Schema für Google Rich Snippets)
//
// WICHTIG: Wenn du hier etwas änderst, wird es automatisch auf beiden Stellen
// aktualisiert. Google erwartet, dass sichtbare FAQ und Schema-FAQ exakt
// übereinstimmen, sonst wertet Google die Strukturdaten ab.

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Was macht ein KFZ Sachverständiger genau?",
    a: "Ein KFZ Sachverständiger in Berlin bewertet den Schaden an Ihrem Fahrzeug unabhängig und objektiv. Er dokumentiert den Unfallschaden, berechnet die Reparaturkosten, den Wiederbeschaffungswert und den Minderwert. Als TÜV Rheinland zertifizierter Gutachter erstellen wir rechtssichere Gutachten, die deutsche Versicherungen im Regelfall anerkennen.",
  },
  {
    q: "Was kostet ein KFZ-Gutachten in Berlin?",
    a: "Bei einem unverschuldeten Unfall zahlen Sie 0 €. Die Haftpflichtversicherung des Unfallverursachers trägt alle Kosten für den KFZ Sachverständigen, das ist gesetzlich geregelt. Nur bei selbstverschuldetem Unfall werden die Kosten über Ihre Kaskoversicherung abgerechnet.",
  },
  {
    q: "Wann ist ein Gutachten nach einem Unfall Pflicht?",
    a: "Ab einem Schadenwert von ca. 750 € empfiehlt sich ein unabhängiges Gutachten. Bei unverschuldetem Unfall haben Sie grundsätzlich immer das Recht auf einen eigenen KFZ Gutachter, unabhängig von der Versicherung des Unfallgegners. Verlassen Sie sich nicht auf den Gutachter der gegnerischen Versicherung.",
  },
  {
    q: "Wer trägt die Kosten für ein KFZ-Gutachten, ich oder die Versicherung?",
    a: "Bei Fremdverschulden trägt die Haftpflichtversicherung des Unfallverursachers alle Kosten: Gutachten, Anwaltskosten und Reparatur. Sie müssen nichts vorstrecken. Wir rechnen direkt mit der Versicherung ab und kümmern uns um die gesamte Kommunikation.",
  },
  {
    q: "Was ist der Unterschied zwischen Schadensgutachten und Wertgutachten?",
    a: "Ein Schadensgutachten dokumentiert den Unfallschaden und die Reparaturkosten, es wird nach einem Unfall benötigt. Ein Wertgutachten (auch Marktwertgutachten) stellt den aktuellen Fahrzeugwert fest, zum Beispiel für Kauf, Verkauf, Erbschaft oder Versicherung. Als KFZ Sachverständiger in Berlin erstellen wir beide Gutachtentypen.",
  },
  {
    q: "Wie finde ich einen unabhängigen KFZ Gutachter in Berlin?",
    a: "Ein unabhängiger KFZ Gutachter arbeitet für Sie, nicht für die Versicherung. Achten Sie auf eine anerkannte Zertifizierung (z. B. TÜV Rheinland) und lokale Erfahrung in Berlin. Wir sind TÜV Rheinland zertifiziert (ID 0217466029) und in allen Berliner Bezirken aktiv, von Mitte bis Spandau, von Pankow bis Tempelhof.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin beim KFZ Sachverständiger in Berlin?",
    a: "In der Regel am selben oder nächsten Werktag. Als mobiler KFZ Gutachter kommen wir direkt zu Ihnen: nach Hause, in die Werkstatt oder zum Unfallort in ganz Berlin. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung.",
  },
  {
    q: "Brauche ich nach einem Unfall in Berlin einen eigenen Gutachter?",
    a: "Ja, unbedingt. Die Versicherung des Unfallgegners hat eigene Gutachter, die im Interesse der Versicherung arbeiten. Ihr eigener unabhängiger KFZ Sachverständiger arbeitet ausschließlich für Sie und sichert den vollen Schadensersatz. Das ist Ihr gutes Recht und kostet Sie bei Fremdverschulden nichts.",
  },
  {
    q: "Was ist ein amtlich anerkannter Sachverständiger und brauche ich das?",
    a: "Eine „amtliche Anerkennung“ im engeren Sinn ist die öffentliche Bestellung und Vereidigung durch die IHK. Das ist eine andere Qualifikation als eine private Zertifizierung wie TÜV oder DEKRA. Unsere TÜV Rheinland Zertifizierung (ID 0217466029, gültig bis 18.12.2028) ist eine unabhängig geprüfte Qualifikation nach dem Standard von TÜV Rheinland. Deutsche Versicherungen akzeptieren Gutachten TÜV-zertifizierter Sachverständiger im Regelfall, eine gesetzliche Pflicht dazu besteht aber nicht.",
  },
  {
    q: "Welche Unterlagen brauche ich für ein KFZ-Gutachten?",
    a: "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Fahrzeugbrief (Teil II), Führerschein, Unfallbericht oder Polizeiprotokoll (falls vorhanden) und die Daten des Unfallgegners. Haben Sie nicht alles zur Hand? Kein Problem, wir helfen Ihnen dabei und koordinieren alles mit Ihrer Versicherung.",
  },
  // Ab hier: Fragen mit lokalem Bezug. Sie zahlen auf die Maps-Sichtbarkeit ein
  // (Kfz Gutachter Prenzlauer Berg / Pankow / in der Nähe) und stehen bewusst
  // erst weit unten auf der Seite, nicht im oberen Sichtbereich.
  {
    q: "Wo finde ich einen KFZ Gutachter in Prenzlauer Berg?",
    a: "Unser Sachverständigenbüro sitzt in der Prenzlauer Allee 88 in 10405 Berlin, direkt am S-Bahnhof Prenzlauer Allee. Von dort sind wir in wenigen Minuten in der Schönhauser Allee, an der Danziger Straße, am Prenzlauer Berg rund um den Helmholtzplatz oder in Weißensee. Wenn Sie nicht zu uns kommen können, kommen wir zu Ihnen. Einen Termin vereinbaren Sie telefonisch unter 0155 60003661 oder per WhatsApp.",
  },
  {
    q: "Sind Sie auch der KFZ Sachverständiger für Pankow und Weißensee?",
    a: "Ja. Der Bezirk Pankow ist unser Heimatbezirk, dazu gehören Prenzlauer Berg, Weißensee, Niederschönhausen, Karow, Blankenburg und Heinersdorf. Weil unser Büro mitten im Bezirk liegt, sind wir dort meist schneller vor Ort als Gutachter aus anderen Stadtteilen. Wir arbeiten aber in ganz Berlin und im angrenzenden Brandenburg.",
  },
  {
    q: "Gibt es einen mobilen KFZ Gutachter in meiner Nähe in Berlin?",
    a: "Wir sind mobil unterwegs und begutachten Ihr Fahrzeug dort, wo es steht: zu Hause, in der Werkstatt, auf dem Firmenhof oder direkt am Unfallort. Innerhalb des S-Bahn-Rings sind wir im Schnitt in 20 bis 30 Minuten bei Ihnen, in den Außenbezirken entsprechend länger. Ein Abschleppen zu uns ist nicht nötig.",
  },
  {
    q: "Erstellen Sie Unfallgutachten auch am Wochenende oder abends?",
    a: "Ja. Unser Sachverständigenbüro ist rund um die Uhr erreichbar, auch samstags, sonntags und an Feiertagen. Gerade nach einem Unfall zählt jede Stunde: Je früher der Schaden dokumentiert ist, desto besser lässt er sich gegenüber der gegnerischen Versicherung belegen. Rufen Sie einfach an, auch spätabends.",
  },
  {
    q: "Was kostet ein Parkschaden-Gutachten in Berlin?",
    a: "Hat ein anderer Ihr Fahrzeug beschädigt und ist die Person bekannt, übernimmt deren Haftpflichtversicherung die Gutachterkosten vollständig. Bei Fahrerflucht ohne ermittelten Verursacher übernimmt in der Regel Ihre Vollkaskoversicherung, die Teilkasko meist nicht. Hier klären wir vorab mit Ihnen, ob sich das Gutachten rechnet. Auch kleine Parkschäden dokumentieren wir mit vollständiger Fotoserie und Kalkulation.",
  },
  {
    q: "Wie läuft die Bewertung bei einem Totalschaden ab?",
    a: "Bei einem Totalschaden ermitteln wir drei Werte: den Wiederbeschaffungswert Ihres Fahrzeugs vor dem Unfall, den Restwert des beschädigten Fahrzeugs und die voraussichtlichen Reparaturkosten. Aus der Differenz ergibt sich, was Ihnen zusteht. Wichtig: Verkaufen Sie das Fahrzeug nicht, bevor das Gutachten vorliegt, sonst verlieren Sie Verhandlungsspielraum gegenüber der Versicherung.",
  },
];
