import { faqs } from "@/lib/faqs";

// Themenkatalog für die zentrale FAQ-Seite unter /faq.
//
// Warum eine eigene Datei neben lib/faqs.ts: lib/faqs.ts hält die Auswahl für
// die Startseite (16 Fragen, bewusst kurz). Hier steht der vollständige Katalog,
// nach Themen gegliedert, mit Sprungmarken.
//
// Fragen, die es auf der Startseite schon gibt, werden über `vonStartseite()`
// referenziert statt abgetippt. Google erwartet, dass dieselbe Frage überall
// dieselbe Antwort hat — eine zweite Kopie würde irgendwann auseinanderlaufen.

export type FaqBlock = {
  /** Anker für die Sprungmarken-Navigation, z. B. "kosten". */
  id: string;
  titel: string;
  /** Kurzer Einleitungssatz über dem Block. */
  intro: string;
  fragen: { q: string; a: string }[];
};

const startseitenFaqs = new Map(faqs.map((f) => [f.q, f]));

/**
 * Holt eine Antwort aus lib/faqs.ts. Wirft beim Build, wenn die Frage dort
 * umbenannt wurde — dann fällt es sofort auf, statt still eine leere Karte
 * auszuliefern.
 */
function vonStartseite(q: string) {
  const treffer = startseitenFaqs.get(q);
  if (!treffer) {
    throw new Error(
      `FAQ-Katalog: "${q}" steht nicht mehr in lib/faqs.ts. Frage dort angleichen oder hier ausschreiben.`
    );
  }
  return treffer;
}

export const faqKatalog: FaqBlock[] = [
  {
    id: "kosten",
    titel: "Kosten und Bezahlung",
    intro:
      "Die häufigste Frage nach einem Unfall ist die nach dem Geld. Kurz vorweg: Trifft Sie keine Schuld, zahlen Sie für das Gutachten nichts.",
    fragen: [
      vonStartseite("Was kostet ein KFZ-Gutachten in Berlin?"),
      vonStartseite("Wer trägt die Kosten für ein KFZ-Gutachten, ich oder die Versicherung?"),
      {
        q: "Was kostet ein Gutachten, wenn ich den Unfall selbst verursacht habe?",
        a: "Dann tragen Sie das Honorar selbst, oder es läuft über Ihre Vollkaskoversicherung. Das Honorar richtet sich nach der Schadenhöhe: bei rund 1.000 € Schaden etwa 250–350 €, bei 5.000 € etwa 560–700 €, bei 15.000 € etwa 1.020–1.250 €. Die genauen Sätze und was jeweils enthalten ist, finden Sie auf unserer Kostenseite.",
      },
      {
        q: "Muss ich in Vorkasse gehen?",
        a: "Nein. Bei einem unverschuldeten Unfall rechnen wir direkt mit der gegnerischen Haftpflichtversicherung ab. Sie unterschreiben dafür eine Abtretungserklärung, mehr ist nicht nötig. Sie überweisen uns nichts und bekommen keine Rechnung.",
      },
      {
        q: "Zahlt die Versicherung auch, wenn ich eine Teilschuld habe?",
        a: "Ja, aber anteilig. Bei einer Haftungsquote von 70 zu 30 übernimmt die Gegenseite 70 Prozent der Gutachterkosten, den Rest tragen Sie oder Ihre Kaskoversicherung. Wie die Quote ausfällt, steht oft erst nach dem Gutachten fest — genau deshalb sollte der Schaden sauber dokumentiert sein.",
      },
      {
        q: "Gibt es versteckte Nebenkosten?",
        a: "Nein. Anfahrt, Lichtbilder, Schreibkosten und der Versand an Versicherung und Anwalt sind im Honorar enthalten. Sie bekommen vor der Beauftragung eine klare Ansage, womit zu rechnen ist.",
      },
      {
        q: "Was kostet eine Reparaturbestätigung?",
        a: "Eine Reparaturbestätigung ist deutlich günstiger als ein Vollgutachten, weil nur die fachgerechte Instandsetzung bestätigt wird. Sie brauchen sie vor allem bei fiktiver Abrechnung, wenn Sie später Nutzungsausfall geltend machen oder das Fahrzeug verkaufen wollen.",
      },
      {
        q: "Was kostet ein Gutachten bei einem Kaskoschaden?",
        a: "Bei Kaskoschäden gelten die Bedingungen Ihres Versicherungsvertrags. Manche Versicherer übernehmen die Gutachterkosten vollständig, andere nur bis zu einer bestimmten Höhe oder gar nicht. Klären Sie das vorab — wir sagen Ihnen, worauf Sie im Vertrag achten müssen.",
      },
    ],
  },

  {
    id: "ablauf",
    titel: "Ablauf, Termin und Dauer",
    intro:
      "Vom Anruf bis zum fertigen Gutachten vergehen bei uns in der Regel 24 Stunden. So läuft es ab.",
    fragen: [
      vonStartseite("Wie schnell bekomme ich einen Termin beim KFZ Sachverständiger in Berlin?"),
      vonStartseite("Erstellen Sie Unfallgutachten auch am Wochenende oder abends?"),
      vonStartseite("Welche Unterlagen brauche ich für ein KFZ-Gutachten?"),
      vonStartseite("Gibt es einen mobilen KFZ Gutachter in meiner Nähe in Berlin?"),
      {
        q: "Muss ich mein Auto in eine Werkstatt bringen?",
        a: "Nein. Wir kommen zu Ihnen — nach Hause, an den Arbeitsplatz, in die Werkstatt Ihrer Wahl oder direkt an den Unfallort. Für die Besichtigung brauchen wir nur Tageslicht oder eine ausreichend beleuchtete Fläche und Platz rund um das Fahrzeug.",
      },
      {
        q: "Wie lange dauert die Erstellung des Gutachtens?",
        a: "In der Regel liegt das fertige Gutachten innerhalb von 24 Stunden nach der Besichtigung vor. Bei sehr großen Schäden oder wenn Ersatzteilpreise erst angefragt werden müssen, kann es einen Tag länger dauern. Sie erfahren den Termin direkt bei der Besichtigung.",
      },
      {
        q: "Wie lange habe ich nach dem Unfall Zeit, ein Gutachten zu beauftragen?",
        a: "Eine feste Frist gibt es nicht, Schadenersatzansprüche verjähren erst nach drei Jahren. Praktisch gilt aber: je früher, desto besser. Mit jedem Tag wird es schwerer, den Zustand unmittelbar nach dem Unfall zu belegen, und die Versicherung fragt irgendwann, warum so lange gewartet wurde.",
      },
      {
        q: "Darf ich mein Auto reparieren lassen, bevor das Gutachten fertig ist?",
        a: "Nein, auf keinen Fall. Mit der Reparatur ist das Beweismittel weg. Lassen Sie den Schaden erst begutachten, danach können Sie reparieren lassen oder sich den Betrag auszahlen lassen. Auch für eine Notreparatur zur Verkehrssicherheit sollten Sie vorher kurz anrufen.",
      },
      {
        q: "Bekomme ich das Gutachten digital?",
        a: "Ja. Sie erhalten es als PDF per E-Mail, auf Wunsch zusätzlich gedruckt. Den Versand an die gegnerische Versicherung und an Ihren Anwalt übernehmen wir.",
      },
    ],
  },

  {
    id: "rechte",
    titel: "Ihre Rechte gegenüber der Versicherung",
    intro:
      "Hier entscheidet sich, ob Sie den vollen Schadenersatz bekommen oder nur einen Teil. Die meisten Geschädigten kennen diese Rechte nicht.",
    fragen: [
      vonStartseite("Brauche ich nach einem Unfall in Berlin einen eigenen Gutachter?"),
      vonStartseite("Wie finde ich einen unabhängigen KFZ Gutachter in Berlin?"),
      {
        q: "Muss ich den Gutachter nehmen, den die Versicherung schickt?",
        a: "Nein. Bei einem unverschuldeten Unfall dürfen Sie den Sachverständigen frei wählen. Die gegnerische Versicherung darf Ihnen keinen vorschreiben, und sie darf die Regulierung nicht davon abhängig machen. Ein von der Versicherung beauftragter Gutachter arbeitet im Auftrag der Gegenseite, nicht in Ihrem.",
      },
      {
        q: "Die Versicherung hat mein Gutachten gekürzt. Was kann ich tun?",
        a: "Kürzungen sind Alltag und in vielen Fällen nicht begründet. Typisch sind Streichungen bei Stundenverrechnungssätzen, Verbringungskosten, Ersatzteilaufschlägen oder der Wertminderung. Schicken Sie uns das Kürzungsschreiben — wir prüfen es und schreiben eine fachliche Stellungnahme zu jeder einzelnen Position. In vielen Fällen zahlt die Versicherung danach nach.",
      },
      {
        q: "Was ist ein Prüfbericht der Versicherung wert?",
        a: "Ein Prüfbericht ist kein Gutachten. Er entsteht meist ohne Besichtigung des Fahrzeugs am Schreibtisch eines von der Versicherung beauftragten Dienstleisters, der auf Basis Ihrer Fotos kürzt. Ein Sachverständiger hat das Fahrzeug gesehen — das ist der entscheidende Unterschied, wenn es darauf ankommt.",
      },
      {
        q: "Darf die Versicherung mich in eine Partnerwerkstatt schicken?",
        a: "Bei einem unverschuldeten Unfall nicht. Sie haben freie Werkstattwahl und dürfen nach den Sätzen einer markengebundenen Fachwerkstatt abrechnen. Eine Werkstattbindung kann nur dort greifen, wo Sie sie selbst vereinbart haben — also in einem Kaskotarif mit entsprechendem Rabatt.",
      },
      {
        q: "Was mache ich, wenn die Schuldfrage strittig ist?",
        a: "Dann ist ein Beweissicherungsgutachten der richtige Schritt. Es dokumentiert Schadenbild, Anstoßrichtung und Spurenlage so, dass sich der Hergang später rekonstruieren lässt. Je länger Sie warten, desto weniger ist davon übrig.",
      },
      {
        q: "Brauche ich zusätzlich einen Anwalt?",
        a: "Bei einem unverschuldeten Unfall ist ein Anwalt für Verkehrsrecht fast immer sinnvoll — seine Kosten trägt ebenfalls die gegnerische Versicherung. Gutachter und Anwalt haben unterschiedliche Aufgaben: wir beziffern den Schaden technisch, der Anwalt setzt ihn rechtlich durch. Wir nennen Ihnen auf Wunsch Kanzleien in Berlin.",
      },
      {
        q: "Mein Fahrzeug hat einen Vorschaden. Muss ich das sagen?",
        a: "Ja, unbedingt. Ein verschwiegener Vorschaden ist der häufigste Grund dafür, dass eine Versicherung die Zahlung komplett verweigert. Wird er offengelegt, grenzen wir alten und neuen Schaden sauber voneinander ab — dann bleibt Ihr Anspruch für den neuen Schaden bestehen.",
      },
      {
        q: "Der Unfallgegner ist geflüchtet. Lohnt sich ein Gutachten trotzdem?",
        a: "Ja. Erstatten Sie Anzeige und lassen Sie den Schaden dokumentieren. Bleibt der Verursacher unbekannt, kommt je nach Fall Ihre Teil- oder Vollkaskoversicherung in Betracht oder die Verkehrsopferhilfe. Ohne dokumentierten Schaden haben Sie in beiden Wegen schlechte Karten.",
      },
    ],
  },

  {
    id: "inhalt",
    titel: "Was im Gutachten steht",
    intro:
      "Ein Gutachten ist mehr als eine Reparaturkostenschätzung. Diese Positionen entscheiden über die Höhe Ihrer Entschädigung.",
    fragen: [
      vonStartseite("Was macht ein KFZ Sachverständiger genau?"),
      vonStartseite("Was ist der Unterschied zwischen Schadensgutachten und Wertgutachten?"),
      vonStartseite("Wie läuft die Bewertung bei einem Totalschaden ab?"),
      {
        q: "Was ist der Unterschied zwischen Kostenvoranschlag und Gutachten?",
        a: "Ein Kostenvoranschlag kommt aus der Werkstatt und nennt nur die voraussichtlichen Reparaturkosten. Ein Gutachten erfasst zusätzlich Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert sowie die Reparaturdauer. Genau diese Positionen machen oft den größeren Teil Ihres Anspruchs aus — im Kostenvoranschlag fehlen sie ersatzlos.",
      },
      {
        q: "Was ist die Wertminderung?",
        a: "Ein repariertes Unfallfahrzeug bringt beim Verkauf weniger als ein unfallfreies, selbst wenn die Reparatur einwandfrei war. Diesen Verlust nennt man merkantile Wertminderung, und er ist ersatzfähig. Daneben gibt es die technische Wertminderung, wenn nach der Reparatur ein Rest an Beeinträchtigung bleibt.",
      },
      {
        q: "Was ist der Wiederbeschaffungswert?",
        a: "Der Betrag, den Sie zahlen müssten, um bei einem seriösen Händler ein gleichwertiges Fahrzeug zu kaufen — gleiche Ausstattung, gleiche Laufleistung, gleicher Zustand. Er wird aus dem aktuellen regionalen Markt ermittelt, nicht aus einer Tabelle. Bei einem Totalschaden ist er die entscheidende Zahl.",
      },
      {
        q: "Wie wird der Restwert ermittelt?",
        a: "Aus dem Zustand nach dem Unfall und konkreten Angeboten des regionalen Marktes. Wichtig: Versicherungen schicken oft höhere Restwertangebote aus überregionalen Restwertbörsen nach. Sie müssen ein solches Angebot nicht ungeprüft annehmen — melden Sie sich, bevor Sie verkaufen.",
      },
      {
        q: "Was ist Nutzungsausfall?",
        a: "Eine Entschädigung für die Zeit, in der Sie Ihr Fahrzeug nicht nutzen können, wenn Sie keinen Mietwagen nehmen. Die Höhe richtet sich nach der Fahrzeuggruppe von A bis L und dem Fahrzeugalter. Die Dauer ergibt sich aus der im Gutachten ausgewiesenen Reparatur- oder Wiederbeschaffungsdauer.",
      },
      {
        q: "Was bedeutet die 130-Prozent-Regel?",
        a: "Liegen die Reparaturkosten über dem Wiederbeschaffungswert, dürfen Sie trotzdem reparieren lassen, solange sie 130 Prozent des Wiederbeschaffungswerts nicht überschreiten. Bedingung: Sie lassen fachgerecht und vollständig nach Gutachten reparieren und nutzen das Fahrzeug anschließend mindestens sechs Monate weiter.",
      },
      {
        q: "Was heißt fiktive Abrechnung?",
        a: "Sie lassen sich die im Gutachten ermittelten Reparaturkosten auszahlen, statt reparieren zu lassen. Ausgezahlt wird netto, also ohne Mehrwertsteuer. Das ist erlaubt und oft sinnvoll — es hat aber Folgen für Wertminderung, Nutzungsausfall und einen späteren Verkauf.",
      },
    ],
  },

  {
    id: "faelle",
    titel: "Bagatellschäden und Sonderfälle",
    intro:
      "Nicht jeder Schaden ist ein Standardfall. Für diese Situationen gelten eigene Regeln.",
    fragen: [
      vonStartseite("Wann ist ein Gutachten nach einem Unfall Pflicht?"),
      vonStartseite("Was kostet ein Parkschaden-Gutachten in Berlin?"),
      {
        q: "Ab welcher Schadenhöhe lohnt sich ein Gutachten?",
        a: "Als Faustregel gilt eine Grenze von etwa 750 bis 1.000 €. Darunter spricht man von einem Bagatellschaden, dort trägt die Versicherung die Gutachterkosten in der Regel nicht. Der Haken: Wie hoch der Schaden wirklich ist, sieht man ihm von außen selten an — hinter einer Delle im Stoßfänger steckt oft ein beschädigter Sensor. Im Zweifel schauen wir kurz drauf und sagen Ihnen ehrlich, ob sich ein Gutachten lohnt.",
      },
      {
        q: "Was ist ein Kurzgutachten?",
        a: "Die kompakte Variante für kleinere Schäden: Schadenbild, Reparaturweg und Kosten werden dokumentiert, aufwendige Zusatzermittlungen entfallen. Es kostet weniger als ein Vollgutachten und reicht bei überschaubaren Schäden meistens aus.",
      },
      {
        q: "Mein Auto ist ein Leasingfahrzeug. Was ist anders?",
        a: "Eigentümer ist der Leasinggeber, nicht Sie. Die Ansprüche gegen die gegnerische Versicherung stehen deshalb zum Teil ihm zu, und viele Leasingverträge schreiben eine fachgerechte Reparatur vor — fiktiv abrechnen geht dann meist nicht. Das Gutachten brauchen Sie trotzdem, gerade wegen der Wertminderung bei der Rückgabe.",
      },
      {
        q: "Was gilt bei Firmenwagen und Fuhrparks?",
        a: "Bei vorsteuerabzugsberechtigten Haltern wird netto abgerechnet. Zusätzlich kommen Ausfallkosten ins Spiel, die über den privaten Nutzungsausfall hinausgehen. Für Flotten übernehmen wir die Abwicklung gebündelt.",
      },
      {
        q: "Mein Elektroauto hat einen Schaden an der Hochvoltbatterie. Was ist zu beachten?",
        a: "Die Batterie ist das teuerste Bauteil im Fahrzeug, und nach einem Aufprall ist ihr Zustand von außen nicht beurteilbar. Ins Gutachten gehören eine Prüfung des Batteriezustands und der Hinweis auf die besonderen Sicherheitsvorgaben bei Abschleppen und Lagerung. Ohne diese Punkte ist der Schaden regelmäßig zu niedrig beziffert.",
      },
      {
        q: "Ein unbekannter Verursacher hat mein Auto beim Parken beschädigt.",
        a: "Erstatten Sie Anzeige, sichern Sie Fotos und notieren Sie mögliche Zeugen. Bleibt der Verursacher unbekannt, greift je nach Schadenbild Ihre Teil- oder Vollkasko. Eine saubere Dokumentation ist auch hier die Grundlage für die Regulierung.",
      },
    ],
  },

  {
    id: "ueber-uns",
    titel: "Über Gutachten Prenzl",
    intro: "Wer wir sind, wie wir arbeiten und wo Sie uns erreichen.",
    fragen: [
      vonStartseite("Was ist ein amtlich anerkannter Sachverständiger und brauche ich das?"),
      vonStartseite("Wo finde ich einen KFZ Gutachter in Prenzlauer Berg?"),
      vonStartseite("Sind Sie auch der KFZ Sachverständiger für Pankow und Weißensee?"),
      {
        q: "Arbeiten Sie unabhängig von Versicherungen?",
        a: "Ja. Wir haben keine Rahmenverträge mit Versicherern, keine Bindung an Werkstätten und keine Provisionsvereinbarungen. Unser Auftraggeber sind ausschließlich Sie. Das ist kein Versprechen, sondern die Voraussetzung dafür, dass ein Gutachten überhaupt etwas wert ist.",
      },
      {
        q: "Welche Qualifikation haben Sie?",
        a: "Atakan Arslan ist TÜV Rheinland zertifizierter Kfz-Sachverständiger, Zertifikat-ID 0217466029, gültig bis 18.12.2028. Die Zertifizierung können Sie beim TÜV Rheinland nachprüfen. Unsere Gutachten werden von Versicherungen in Deutschland im Regelfall anerkannt.",
      },
      {
        q: "In welchen Sprachen beraten Sie?",
        a: "Deutsch, Türkisch und Englisch. Gerade nach einem Unfall ist es wichtig, dass Sie alles wirklich verstehen — deshalb erklären wir in der Sprache, in der Sie sich sicher fühlen.",
      },
      {
        q: "Wo ist Ihr Büro?",
        a: "In der Prenzlauer Allee 88, 10405 Berlin. Ein echtes Ladengeschäft, kein Briefkasten und kein Callcenter. Sie können vorbeikommen, in den meisten Fällen kommen aber wir zu Ihnen.",
      },
      {
        q: "Sind Sie auch in Brandenburg tätig?",
        a: "Ja, nach Absprache. Für das Berliner Umland — Potsdam, Falkensee, Oranienburg, Bernau und Königs Wusterhausen — kommen wir ebenfalls raus. Rufen Sie kurz an, dann klären wir Anfahrt und Termin.",
      },
    ],
  },
];

/** Alle Fragen flach — für das FAQPage-Schema. */
export const alleFaqFragen = faqKatalog.flatMap((b) => b.fragen);
