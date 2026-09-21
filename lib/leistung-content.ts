// Inhalte der Fahrzeugklassen- und Spezialgutachten-Seiten.
//
// Warum datengetrieben: Die sieben Seiten teilen denselben Aufbau, unterscheiden
// sich aber komplett im Text. Ein Template plus diese Datei hält sie pflegbar,
// ohne dass sieben fast gleiche 300-Zeilen-Dateien entstehen — dasselbe Muster
// wie bei den Bezirksseiten in lib/bezirk-content.ts.
//
// Wichtig für SEO: Der gemeinsame Template-Anteil ist bewusst klein gehalten.
// Der überwiegende Teil jeder Seite kommt aus `intro`, `besonderheiten`,
// `worauf` und `faqs` — also aus echtem, seitenspezifischem Text.

export type LeistungContent = {
  slug: string;
  /** Kicker über der H1. */
  kicker: string;
  /** H1, erster Teil weiß. */
  title: string;
  /** H1, zweiter Teil rot. */
  titleAccent: string;
  lead: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Name im Breadcrumb und im Service-Schema. */
  name: string;
  serviceType: string;
  /** Direktantwort-Kasten oben. 40–70 Wörter, das ist der Block, den KI-Suchen zitieren. */
  direktantwort: string;
  /** Zwei bis drei Absätze Einleitung. */
  intro: string[];
  /** Was bei dieser Fahrzeugklasse technisch anders ist. */
  besonderheiten: { titel: string; text: string }[];
  /** Worauf Sie achten sollten — kurze Merkpunkte. */
  worauf: string[];
  faqs: { q: string; a: string }[];
  /** Interne Querverweise, drei bis vier Stück. */
  verwandt: { href: string; label: string; sub: string }[];
};

export const leistungContent: LeistungContent[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "motorradgutachten-berlin",
    kicker: "Motorradgutachten",
    title: "Ein Sturz ist kein",
    titleAccent: "Blechschaden.",
    lead: "Beim Motorrad entscheidet sich der Schaden an Stellen, die man von außen nicht sieht: Rahmen, Gabel, Schwinge. Wer nur die Verkleidung kalkuliert, verschenkt den halben Anspruch.",
    image: "/foto6.jpg",
    name: "Motorradgutachten Berlin",
    serviceType: "Motorradgutachten",
    metaTitle: "Motorradgutachten Berlin – Gutachter für Zweiräder",
    metaDescription:
      "Motorradgutachten in Berlin nach Sturz oder Unfall. Rahmen, Gabel und Schwinge werden geprüft, nicht nur die Verkleidung. Bei Fremdschuld 0 €.",
    keywords: [
      "motorradgutachten berlin",
      "motorrad gutachter berlin",
      "zweirad gutachten berlin",
      "motorrad unfall gutachten",
      "roller gutachten berlin",
    ],
    direktantwort:
      "Ein Motorradgutachten dokumentiert den Schaden nach einem Sturz oder Unfall und beziffert Reparaturkosten, Wertminderung und Wiederbeschaffungswert. Anders als beim Pkw müssen Rahmen, Gabel und Schwinge auf Verzug geprüft werden — diese Schäden sind von außen unsichtbar und machen oft den Unterschied zwischen Reparatur und Totalschaden aus.",
    intro: [
      "Ein Motorrad reagiert auf einen Aufprall völlig anders als ein Auto. Es gibt keine Knautschzone, die Energie geht direkt in Rahmen, Gabel und Anbauteile. Genau deshalb ist die Schadenaufnahme beim Zweirad anspruchsvoller: Eine zerkratzte Verkleidung kostet ein paar hundert Euro, ein verzogener Rahmen bedeutet wirtschaftlichen Totalschaden — und beides kann nach demselben Sturz vorliegen.",
      "Versicherungen kalkulieren Motorradschäden erfahrungsgemäß knapp. Typisch ist, dass nur die sichtbar beschädigten Teile angesetzt werden und Folgeschäden an tragenden Bauteilen unter den Tisch fallen. Wir nehmen das Motorrad vollständig auf, prüfen die Geometrie und dokumentieren auch das, was erst beim Zerlegen sichtbar würde.",
      "Wir begutachten alle Zweiräder: Motorräder, Roller, Leichtkrafträder, Quads und Trikes — in ganz Berlin, auf Wunsch direkt bei Ihnen oder in Ihrer Werkstatt.",
    ],
    besonderheiten: [
      {
        titel: "Rahmen und Geometrie",
        text: "Ein Rahmenverzug von wenigen Millimetern macht das Motorrad unfahrbar, ist aber mit bloßem Auge nicht erkennbar. Wir prüfen Rahmen, Lenkkopf und Hinterradschwinge auf Verzug — dieser Punkt entscheidet häufig darüber, ob repariert oder abgerechnet wird.",
      },
      {
        titel: "Gabel und Federung",
        text: "Standrohre verbiegen sich schon bei geringer Krafteinwirkung, ohne dass die Gabel äußerlich beschädigt aussieht. Auch Gabelbrücke und Lenkkopflager gehören nach einem Frontalaufprall grundsätzlich auf den Prüfstand.",
      },
      {
        titel: "Sicherheitsrelevante Teile",
        text: "Helmpflichtige Fahrzeuge haben Bauteile, die nach einem Sturz nicht weiterverwendet werden dürfen — dazu zählen je nach Schadenbild Bremsleitungen, Lenker und ABS-Sensorik. Das gehört ins Gutachten, sonst kürzt die Versicherung später mit dem Hinweis auf Verschleiß.",
      },
      {
        titel: "Anbauteile und Zubehör",
        text: "Koffer, Sturzbügel, Navigation, Auspuffanlagen und Sonderlackierungen erhöhen den Fahrzeugwert erheblich, tauchen in Standardkalkulationen aber selten auf. Bringen Sie Belege mit, wir nehmen sie mit auf.",
      },
      {
        titel: "Schutzkleidung",
        text: "Helm, Jacke, Hose, Handschuhe und Stiefel sind nach einem Sturz in der Regel nicht mehr verkehrssicher und werden als Sachschaden ersetzt. Dieser Posten wird fast immer vergessen — er geht schnell in den vierstelligen Bereich.",
      },
    ],
    worauf: [
      "Fahren Sie das Motorrad nach einem Sturz nicht weiter, bevor der Rahmen geprüft ist.",
      "Lassen Sie nichts reparieren und nichts entsorgen, bevor der Schaden dokumentiert ist — auch nicht die Schutzkleidung.",
      "Fotografieren Sie die Unfallstelle und die Endlage, solange nichts bewegt wurde.",
      "Sammeln Sie Belege für Zubehör und Sonderausstattung, sie erhöhen den Wiederbeschaffungswert.",
      "Bei saisonzugelassenen Fahrzeugen zählt für den Nutzungsausfall nur die Zeit innerhalb der Saison.",
    ],
    faqs: [
      {
        q: "Was kostet ein Motorradgutachten in Berlin?",
        a: "Bei einem unverschuldeten Unfall nichts — die gegnerische Haftpflichtversicherung übernimmt das Honorar, wir rechnen direkt mit ihr ab. Bei selbstverschuldetem Sturz richtet sich das Honorar nach der Schadenhöhe und läuft gegebenenfalls über Ihre Kaskoversicherung.",
      },
      {
        q: "Lohnt sich ein Gutachten auch bei einem umgefallenen Motorrad?",
        a: "Häufig ja. Ein Umfaller im Stand wirkt harmlos, kann aber Lenkkopflager, Gabel oder Anbauteile beschädigen. Wenn der Schaden erkennbar über einem Bagatellschaden liegt, sollten Sie ihn dokumentieren lassen, bevor Sie reparieren.",
      },
      {
        q: "Wird meine Schutzkleidung mit ersetzt?",
        a: "Bei einem unverschuldeten Unfall ja. Helm, Jacke, Hose, Handschuhe und Stiefel gehören zum ersatzfähigen Sachschaden, wenn sie durch den Sturz beschädigt oder sicherheitstechnisch unbrauchbar wurden. Heben Sie alles auf und werfen Sie nichts weg.",
      },
      {
        q: "Gibt es Nutzungsausfall auch fürs Motorrad?",
        a: "Ja, wenn das Motorrad Ihr einziges Fahrzeug ist oder nachweislich regelmäßig genutzt wird. Bei Saisonkennzeichen wird nur die Zeit innerhalb des Zulassungszeitraums berücksichtigt.",
      },
      {
        q: "Begutachten Sie auch Roller und Leichtkrafträder?",
        a: "Ja, alle Zweiräder vom 50er-Roller bis zur Reiseenduro, dazu Quads und Trikes. Auch bei kleineren Fahrzeugen lohnt sich die Aufnahme, sobald ein Rahmen- oder Gabelschaden im Raum steht.",
      },
    ],
    verwandt: [
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
      { href: "/totalschaden-gutachten-berlin", label: "Totalschaden", sub: "Wenn Reparatur sich nicht lohnt" },
      { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wohnmobil-gutachten-berlin",
    kicker: "Wohnmobil-Gutachten",
    title: "Zwei Fahrzeuge",
    titleAccent: "in einem.",
    lead: "Ein Wohnmobil ist Fahrzeug und Wohnung zugleich. Wer nur die Karosserie kalkuliert, übersieht Aufbau, Dichtigkeit und Einbauten — und damit den teureren Teil des Schadens.",
    image: "/foto8.jpg",
    name: "Wohnmobil- und Wohnwagengutachten Berlin",
    serviceType: "Wohnmobilgutachten",
    metaTitle: "Wohnmobil-Gutachten Berlin – Reisemobil & Wohnwagen",
    metaDescription:
      "Gutachten für Wohnmobile und Wohnwagen in Berlin. Aufbau, Dichtigkeit und Einbauten werden mitbewertet, nicht nur das Blech. Bei Fremdschuld 0 €.",
    keywords: [
      "wohnmobil gutachten berlin",
      "wohnwagen gutachten berlin",
      "reisemobil gutachter",
      "wohnmobil unfall gutachten",
      "caravan gutachten berlin",
    ],
    direktantwort:
      "Ein Wohnmobil-Gutachten bewertet Fahrzeugtechnik und Wohnaufbau getrennt. Neben Blech- und Lackschäden gehören Dichtigkeit des Aufbaus, Isolierung, Möbeleinbauten sowie Gas-, Wasser- und Elektroinstallation in die Bewertung. Genau diese Positionen fehlen in Standardkalkulationen — obwohl sie meist den größeren Teil des Schadens ausmachen.",
    intro: [
      "Beim Wohnmobil treffen zwei völlig verschiedene Schadenwelten aufeinander. Vorne ein Fahrzeug mit Motor, Fahrwerk und Assistenzsystemen, dahinter ein Wohnaufbau aus Sandwichplatten, Möbeln und Installationen. Eine Standardkalkulation aus dem Pkw-Bereich bildet den zweiten Teil schlicht nicht ab.",
      "Der teuerste Schaden am Reisemobil ist meist nicht der sichtbare. Ein Aufprall oder ein Hagelschlag kann die Verklebung der Sandwichplatten lösen, ohne dass außen mehr als eine Delle zu sehen ist. Dringt anschließend Feuchtigkeit ein, ist der Aufbau innerhalb weniger Monate hinüber. Deshalb gehört eine Feuchtigkeitsmessung nach jedem Aufbauschaden ins Gutachten.",
      "Wir begutachten Reisemobile, Kastenwagen-Ausbauten, Alkoven- und Integrierte sowie Wohnwagen — in ganz Berlin und im Umland, auch auf dem Stellplatz oder Campingplatz.",
    ],
    besonderheiten: [
      {
        titel: "Dichtigkeit des Aufbaus",
        text: "Nach jedem Aufbauschaden gehört eine Feuchtigkeitsmessung dazu. Undichte Stellen zeigen sich oft erst Monate später als Wasserschaden im Sandwich — dann ist der Zusammenhang mit dem Unfall kaum noch nachweisbar und die Versicherung zahlt nicht mehr.",
      },
      {
        titel: "Möbel und Innenausbau",
        text: "Schränke, Betten, Sitzgruppe und Küchenblock sind fahrzeugspezifisch gefertigt und oft nur komplett zu ersetzen. Einzelteile aus dem Baumarkt sind kein gleichwertiger Ersatz — das muss im Gutachten so stehen, sonst wird gekürzt.",
      },
      {
        titel: "Gas-, Wasser- und Elektroanlage",
        text: "Leitungen laufen durch Wände und Boden und werden bei einem Aufprall mitbeschädigt. Bei fest verbauten Gasanlagen kommt hinzu, dass sie nach einem Schaden erneut geprüft werden müssen, bevor das Fahrzeug wieder genutzt werden darf.",
      },
      {
        titel: "Aufbauhersteller statt Fahrzeughersteller",
        text: "Basisfahrzeug und Aufbau stammen von verschiedenen Herstellern. Reparaturen am Aufbau können nur Fachbetriebe ausführen, deren Stundensätze über denen einer Pkw-Werkstatt liegen. Das muss in der Kalkulation berücksichtigt sein.",
      },
      {
        titel: "Saison und Nutzungsausfall",
        text: "Fällt das Reisemobil in der Hauptsaison aus, ist der Nutzungsausfall ein realer Schaden — gerade wenn eine gebuchte Reise ins Wasser fällt. Die Tagessätze liegen deutlich über denen eines Pkw.",
      },
    ],
    worauf: [
      "Lassen Sie nach jedem Aufbauschaden die Feuchtigkeit messen, auch wenn außen kaum etwas zu sehen ist.",
      "Dokumentieren Sie den Innenraum vollständig, bevor Sie ausräumen oder aufräumen.",
      "Heben Sie Belege für nachgerüstete Technik auf: Solaranlage, Markise, Fahrradträger, Sat-Anlage.",
      "Bei beschädigter Gasanlage das Fahrzeug nicht weiter nutzen, bis es erneut geprüft wurde.",
      "Bei einem geplatzten Urlaub Buchungsunterlagen aufheben — sie stützen den Nutzungsausfall.",
    ],
    faqs: [
      {
        q: "Was kostet ein Wohnmobil-Gutachten?",
        a: "Bei unverschuldetem Unfall zahlen Sie nichts, die gegnerische Haftpflichtversicherung trägt das Honorar. Ansonsten richtet es sich nach der Schadenhöhe. Weil beim Reisemobil Fahrzeug und Aufbau getrennt zu bewerten sind, ist der Aufwand höher als bei einem Pkw gleicher Schadenhöhe.",
      },
      {
        q: "Wird der Innenausbau im Gutachten berücksichtigt?",
        a: "Ja, und das ist der entscheidende Unterschied zu einer reinen Pkw-Kalkulation. Möbel, Polster, Küchenblock, Nasszelle und fest verbaute Technik werden einzeln erfasst und bewertet.",
      },
      {
        q: "Mein Wohnwagen hat einen Hagelschaden. Lohnt ein Gutachten?",
        a: "In der Regel ja. Hagel trifft beim Wohnwagen die großflächigen Aufbauteile, und dort ist die Reparatur deutlich aufwendiger als am Blech eines Pkw. Zusätzlich muss geprüft werden, ob die Dichtigkeit gelitten hat.",
      },
      {
        q: "Bekomme ich Nutzungsausfall, wenn mein Urlaub ausfällt?",
        a: "Nutzungsausfall für das Fahrzeug ja. Ob darüber hinaus Kosten einer gebuchten Reise ersatzfähig sind, hängt vom Einzelfall ab — heben Sie alle Buchungsunterlagen auf und lassen Sie das von einem Anwalt für Verkehrsrecht prüfen.",
      },
      {
        q: "Kommen Sie auch auf den Stell- oder Campingplatz?",
        a: "Ja. Wir begutachten dort, wo das Fahrzeug steht — in Berlin und im näheren Brandenburger Umland. Gerade beim Reisemobil ist das oft die einzige praktikable Lösung.",
      },
    ],
    verwandt: [
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/wertgutachten", label: "Wertgutachten", sub: "Marktwert feststellen" },
      { href: "/lkw-gutachten-berlin", label: "Transporter & Lkw", sub: "Nutzfahrzeuge" },
      { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lkw-gutachten-berlin",
    kicker: "Transporter & Lkw",
    title: "Jeder Standtag",
    titleAccent: "kostet Sie Geld.",
    lead: "Bei Nutzfahrzeugen ist der Blechschaden das kleinere Problem. Der größere ist der Ausfall — und der wird nur ersetzt, wenn er sauber beziffert im Gutachten steht.",
    image: "/foto9.jpg",
    name: "Transporter- und Lkw-Gutachten Berlin",
    serviceType: "Nutzfahrzeuggutachten",
    metaTitle: "Lkw- & Transporter-Gutachten Berlin – Nutzfahrzeuge",
    metaDescription:
      "Gutachten für Transporter, Lkw und Anhänger in Berlin. Mit Ausfallschaden, Aufbauten und Ladung. Für Fuhrparks und Einzelfahrzeuge, bei Fremdschuld 0 €.",
    keywords: [
      "lkw gutachten berlin",
      "transporter gutachten berlin",
      "nutzfahrzeug gutachter berlin",
      "anhänger gutachten",
      "lkw sachverständiger berlin",
    ],
    direktantwort:
      "Ein Nutzfahrzeuggutachten erfasst neben dem Fahrzeugschaden auch Aufbauten, Ladungssicherung und den Ausfallschaden. Bei gewerblich genutzten Fahrzeugen tritt an die Stelle des pauschalen Nutzungsausfalls der konkret entgangene Gewinn oder die Vorhaltekosten — diese Position muss im Gutachten belegt sein, sonst wird sie nicht ersetzt.",
    intro: [
      "Steht ein Transporter, steht ein Teil Ihres Betriebs. Der Schaden am Fahrzeug ist dabei oft die kleinere Summe: Was wirklich weh tut, sind die Tage, an denen nicht ausgeliefert, nicht montiert und nicht gefahren wird. Genau dieser Ausfallschaden ist ersatzfähig — aber nur, wenn er im Gutachten sauber beziffert ist.",
      "Nutzfahrzeuge werden zudem anders bewertet als Pkw. Aufbauten, Kühltechnik, Ladebordwände, Regalsysteme und Beschriftungen gehören zum Fahrzeugwert und müssen einzeln erfasst werden. Bei Anhängern und Aufliegern kommt hinzu, dass sie gesondert zugelassen und gesondert zu bewerten sind.",
      "Wir begutachten Transporter, Lkw bis 40 Tonnen, Anhänger, Auflieger und Sonderaufbauten — für einzelne Fahrzeuge ebenso wie für Fuhrparks. Für Flottenkunden wickeln wir mehrere Schäden gebündelt ab.",
    ],
    besonderheiten: [
      {
        titel: "Ausfallschaden statt Nutzungsausfall",
        text: "Bei gewerblicher Nutzung greift nicht die pauschale Nutzungsausfalltabelle, sondern der konkrete Schaden: entgangener Gewinn, Vorhaltekosten eines Ersatzfahrzeugs oder die Kosten einer Anmietung. Das muss dokumentiert und gerechnet werden, sonst zahlt die Versicherung nur einen Bruchteil.",
      },
      {
        titel: "Aufbauten und Sonderausstattung",
        text: "Kofferaufbau, Kühlaggregat, Ladebordwand, Kran, Regalsystem oder Werkstatteinrichtung sind eigene Werte. Sie tauchen in Standardkalkulationen nicht auf und müssen einzeln erfasst werden — samt Belegen über Anschaffung und Nachrüstung.",
      },
      {
        titel: "Ladung und Folgeschäden",
        text: "Beschädigte oder verdorbene Ladung ist ein eigener Schadenposten. Bei Kühltransporten kann der Warenschaden den Fahrzeugschaden um ein Vielfaches übersteigen. Dokumentieren Sie Temperaturprotokolle und Lieferscheine.",
      },
      {
        titel: "Netto statt brutto",
        text: "Vorsteuerabzugsberechtigte Halter rechnen netto ab. Das klingt banal, führt aber regelmäßig zu Missverständnissen bei der Regulierung — im Gutachten wird es entsprechend ausgewiesen.",
      },
      {
        titel: "Prüf- und Zulassungsfristen",
        text: "Nutzfahrzeuge unterliegen kürzeren Prüfintervallen. Fällt ein Fahrzeug längere Zeit aus, laufen Fristen weiter. Das gehört in die Planung der Reparaturdauer und damit in die Ausfallberechnung.",
      },
    ],
    worauf: [
      "Halten Sie Auftragsbücher, Tourenpläne oder Lieferscheine bereit — sie belegen den Ausfallschaden.",
      "Fotografieren Sie Aufbauten und Ladung, bevor das Fahrzeug bewegt oder entladen wird.",
      "Bei Kühltransporten Temperaturprotokolle sichern.",
      "Halten Sie Belege für nachgerüstete Aufbauten und Einrichtungen bereit.",
      "Melden Sie den Schaden auch dann, wenn das Fahrzeug noch fahrbereit ist — Rahmenschäden zeigen sich oft erst später.",
    ],
    faqs: [
      {
        q: "Wird der Verdienstausfall meines Betriebs ersetzt?",
        a: "Bei einem unverschuldeten Unfall ja. Anstelle des pauschalen Nutzungsausfalls tritt bei gewerblich genutzten Fahrzeugen der konkrete Ausfallschaden: entgangener Gewinn, Vorhaltekosten oder Mietkosten für ein Ersatzfahrzeug. Er muss allerdings belegt werden — Auftragslage und Tourenpläne sind dafür die Grundlage.",
      },
      {
        q: "Begutachten Sie auch Anhänger und Auflieger?",
        a: "Ja. Anhänger und Auflieger sind eigenständig zugelassene Fahrzeuge und werden gesondert bewertet. Bei einem Gespann erfassen wir beide Einheiten und trennen die Schäden sauber voneinander.",
      },
      {
        q: "Wir haben mehrere Fahrzeuge im Fuhrpark. Geht das gebündelt?",
        a: "Ja. Für Flotten übernehmen wir die Abwicklung gesammelt, mit einheitlicher Dokumentation und einem festen Ansprechpartner. Mehr dazu auf unserer Seite für Flottenpartner.",
      },
      {
        q: "Zählt die Beschriftung des Fahrzeugs zum Schaden?",
        a: "Ja. Werbebeschriftung und Folierung müssen nach einer Lackierung neu aufgebracht werden und sind ersatzfähig. Halten Sie die Rechnung der ursprünglichen Beschriftung bereit.",
      },
      {
        q: "Was kostet ein Lkw-Gutachten?",
        a: "Bei Fremdverschulden übernimmt die gegnerische Versicherung das Honorar. Ansonsten richtet es sich nach der Schadenhöhe. Nutzfahrzeuge haben wegen der Aufbauten und der Ausfallberechnung in der Regel einen höheren Aufwand als Pkw.",
      },
    ],
    verwandt: [
      { href: "/flotten-partner", label: "Flottenpartner", sub: "Für Unternehmen" },
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/wohnmobil-gutachten-berlin", label: "Wohnmobil-Gutachten", sub: "Reisemobil & Wohnwagen" },
      { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oldtimer-gutachten-berlin",
    kicker: "Oldtimer-Wertgutachten",
    title: "Was Ihr Klassiker",
    titleAccent: "wirklich wert ist.",
    lead: "Bei Oldtimern gibt es keine Schwacke-Liste. Der Wert ergibt sich aus Zustand, Originalität und Marktlage — und muss belastbar dokumentiert sein, sonst zahlt im Schadenfall niemand.",
    image: "/foto3.jpg",
    name: "Oldtimer-Wertgutachten Berlin",
    serviceType: "Oldtimer-Wertgutachten",
    metaTitle: "Oldtimer-Wertgutachten Berlin – Wert & Zustandsnote",
    metaDescription:
      "Wertgutachten für Oldtimer und Youngtimer in Berlin: Zustandsnote 1 bis 5, Marktwert und Wiederbeschaffungswert. Für Versicherung, Verkauf, Schadenfall.",
    keywords: [
      "oldtimer gutachten berlin",
      "oldtimer wertgutachten berlin",
      "youngtimer gutachten",
      "oldtimer bewertung berlin",
      "klassiker wertgutachten",
    ],
    direktantwort:
      "Ein Oldtimer-Wertgutachten stellt den Marktwert eines historischen Fahrzeugs anhand einer Zustandsnote von 1 bis 5 fest. Bewertet werden Technik, Karosserie, Lack, Interieur und vor allem die Originalität. Das Gutachten ist Grundlage für die Versicherungssumme, für den Verkauf und für die Regulierung im Schadenfall.",
    intro: [
      "Bei einem normalen Gebrauchtwagen genügt ein Blick in die Bewertungslisten. Bei einem Klassiker funktioniert das nicht: Zwei Fahrzeuge desselben Typs und Baujahrs können sich im Wert um den Faktor fünf unterscheiden — je nach Zustand, Originalität, Historie und Nachfrage. Deshalb braucht ein Oldtimer ein individuell erstelltes Wertgutachten.",
      "Der häufigste Fehler ist, den Wert erst im Schadenfall klären zu wollen. Dann steht Ihre Einschätzung gegen die der Versicherung, und ohne vorheriges Gutachten zieht meist die niedrigere Zahl. Ein aktuelles Wertgutachten ist die Grundlage dafür, dass Ihre Versicherungssumme überhaupt stimmt.",
      "Wir bewerten Oldtimer ab 30 Jahren ebenso wie Youngtimer, die noch nicht H-fähig sind — mit Zustandsnote, Marktwert und Wiederbeschaffungswert, dokumentiert mit vollständiger Fotostrecke.",
    ],
    besonderheiten: [
      {
        titel: "Zustandsnote 1 bis 5",
        text: "Die Bewertung folgt der in der Klassikerszene etablierten Skala: Note 1 makellos, Note 2 guter Zustand mit leichten Gebrauchsspuren, Note 3 gebraucht und fahrbereit, Note 4 mit deutlichem Instandsetzungsbedarf, Note 5 restaurierungsbedürftig. Zwischen Note 2 und Note 3 liegen bei gesuchten Modellen fünfstellige Beträge.",
      },
      {
        titel: "Originalität und Matching Numbers",
        text: "Übereinstimmende Motor- und Fahrgestellnummern, originale Lackfarbe und zeitgenössische Ausstattung erhöhen den Wert deutlich. Spätere Umbauten können ihn senken, auch wenn sie handwerklich gut ausgeführt sind.",
      },
      {
        titel: "Historie und Dokumentation",
        text: "Scheckheft, Rechnungen, Vorbesitzerkette und Restaurierungsdokumentation sind bares Geld. Ein lückenlos belegtes Fahrzeug erzielt spürbar mehr als ein identisches ohne Papiere.",
      },
      {
        titel: "Marktwert und Wiederbeschaffungswert",
        text: "Der Marktwert ist der erzielbare Verkaufspreis. Der Wiederbeschaffungswert liegt höher — er beschreibt, was Sie zahlen müssten, um ein gleichwertiges Fahrzeug zu finden. Für die Versicherung ist die zweite Zahl die relevante.",
      },
      {
        titel: "H-Kennzeichen",
        text: "Für das H-Kennzeichen muss das Fahrzeug mindestens 30 Jahre alt, weitgehend originalgetreu und in gutem Zustand sein. Die dafür nötige Begutachtung nach § 23 StVZO ist eine hoheitliche Prüfung und nicht dasselbe wie ein Wertgutachten — wir sagen Ihnen, welche Unterlagen Sie dafür brauchen und wo Sie das durchführen lassen.",
      },
    ],
    worauf: [
      "Lassen Sie den Wert regelmäßig aktualisieren — der Klassikermarkt bewegt sich, alte Gutachten unterbewerten schnell.",
      "Sammeln Sie jede Rechnung, gerade nach einer Restaurierung.",
      "Vor dem Verkauf lohnt ein aktuelles Gutachten: es schafft Vertrauen und stützt den Preis.",
      "Prüfen Sie, ob Ihre Versicherungssumme noch zum heutigen Marktwert passt.",
      "Nach einem Schaden am Klassiker gilt: nichts reparieren lassen, bevor der Schaden dokumentiert ist.",
    ],
    faqs: [
      {
        q: "Ab wann gilt ein Fahrzeug als Oldtimer?",
        a: "Als Oldtimer gilt ein Fahrzeug, dessen Erstzulassung mindestens 30 Jahre zurückliegt. Fahrzeuge zwischen etwa 20 und 30 Jahren werden als Youngtimer bezeichnet — auch für sie ist ein Wertgutachten sinnvoll, weil gängige Bewertungslisten sie oft nicht mehr führen.",
      },
      {
        q: "Wofür brauche ich ein Oldtimer-Wertgutachten?",
        a: "Vor allem für die richtige Versicherungssumme, für den Verkauf und für die Regulierung nach einem Schaden. Ohne aktuelles Gutachten bestimmt im Schadenfall faktisch die Versicherung, was Ihr Fahrzeug wert war.",
      },
      {
        q: "Was ist der Unterschied zum Gutachten für das H-Kennzeichen?",
        a: "Das Wertgutachten stellt fest, was Ihr Fahrzeug wert ist. Die Begutachtung nach § 23 StVZO prüft, ob es die Voraussetzungen für das H-Kennzeichen erfüllt — das ist eine hoheitliche Prüfung durch eine anerkannte Prüforganisation. Beides ergänzt sich, ersetzt sich aber nicht.",
      },
      {
        q: "Wie lange ist ein Wertgutachten gültig?",
        a: "Eine feste Frist gibt es nicht, in der Praxis sollten Sie es alle zwei bis drei Jahre aktualisieren lassen. Der Klassikermarkt verändert sich, und ein veraltetes Gutachten führt im Schadenfall zu einer zu niedrigen Entschädigung.",
      },
      {
        q: "Bewerten Sie auch restaurierte oder umgebaute Fahrzeuge?",
        a: "Ja. Bei restaurierten Fahrzeugen fließt die Qualität und Nachvollziehbarkeit der Arbeiten in die Bewertung ein. Bei Umbauten kommt es darauf an, ob sie zeitgenössisch sind — moderne Eingriffe senken den Wert eines Klassikers in der Regel.",
      },
    ],
    verwandt: [
      { href: "/wertgutachten", label: "Wertgutachten", sub: "Marktwert feststellen" },
      { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Bei Totalschaden" },
      { href: "/kfz-gutachten-berlin", label: "Alle Gutachtenarten", sub: "Übersicht" },
      { href: "/kontakt", label: "Termin vereinbaren", sub: "Kurzfristig möglich" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "leasinggutachten-berlin",
    kicker: "Leasinggutachten",
    title: "Bei der Rückgabe",
    titleAccent: "wird abgerechnet.",
    lead: "Am Ende der Laufzeit prüft ein Gutachter im Auftrag des Leasinggebers. Wer vorher weiß, was wirklich Schaden ist und was normale Abnutzung, zahlt am Ende deutlich weniger nach.",
    image: "/foto5.jpg",
    name: "Leasinggutachten und Rückgabegutachten Berlin",
    serviceType: "Leasinggutachten",
    metaTitle: "Leasinggutachten Berlin – Rückgabe & Minderwert",
    metaDescription:
      "Unabhängiges Gutachten vor der Leasingrückgabe in Berlin. Trennt normale Abnutzung von echten Schäden und prüft Nachforderungen des Leasinggebers.",
    keywords: [
      "leasinggutachten berlin",
      "leasingrückgabe gutachten",
      "leasing rückgabe schäden",
      "minderwertgutachten leasing",
      "leasingfahrzeug unfall gutachten",
    ],
    direktantwort:
      "Ein Leasinggutachten dokumentiert den Fahrzeugzustand vor der Rückgabe und trennt vertragsgemäße Abnutzung von ersatzpflichtigen Schäden. Es dient als Gegenposition zum Rückgabeprotokoll des Leasinggebers. Nach einem Unfall kommt hinzu, dass der Leasinggeber Eigentümer ist — die Ansprüche gegen die gegnerische Versicherung müssen deshalb sauber zugeordnet werden.",
    intro: [
      "Die Leasingrückgabe ist der Moment, in dem viele Verträge unerwartet teuer werden. Der Gutachter, der das Fahrzeug bewertet, arbeitet im Auftrag des Leasinggebers. Was er als Schaden einstuft und was als normale Abnutzung durchgeht, entscheidet über Nachforderungen, die schnell vierstellig ausfallen.",
      "Sie sind dieser Einschätzung nicht ausgeliefert. Ein eigenes Gutachten vor der Rückgabe dokumentiert den Zustand unabhängig und gibt Ihnen etwas in die Hand, wenn später Positionen auftauchen, die Sie nicht nachvollziehen können. Erfahrungsgemäß lohnt sich das ab dem ersten strittigen Punkt.",
      "Der zweite Fall ist der Unfall während der Laufzeit. Hier ist die Lage rechtlich anders als beim eigenen Fahrzeug, weil der Leasinggeber Eigentümer bleibt. Wir dokumentieren den Schaden so, dass sowohl die Regulierung als auch die spätere Rückgabe sauber laufen.",
    ],
    besonderheiten: [
      {
        titel: "Abnutzung ist kein Schaden",
        text: "Leichte Gebrauchsspuren, Steinschläge an der Front, kleine Kratzer an den Einstiegen und normale Reifenabnutzung gehören zum vertragsgemäßen Gebrauch. Erst darüber hinaus beginnt die Ersatzpflicht — genau diese Grenze wird bei Rückgaben regelmäßig zu Ihren Ungunsten gezogen.",
      },
      {
        titel: "Minderwert nach Unfallschaden",
        text: "Wurde das Fahrzeug während der Laufzeit repariert, verlangt der Leasinggeber häufig zusätzlich einen merkantilen Minderwert. Dieser Anspruch muss beziffert und begründet sein — pauschale Abzüge sind angreifbar.",
      },
      {
        titel: "Eigentümerstellung nach Unfall",
        text: "Bei einem Unfall steht ein Teil der Ansprüche dem Leasinggeber als Eigentümer zu. Reparaturkosten und Minderwert fließen regelmäßig an ihn, Nutzungsausfall dagegen an Sie. Wird das nicht sauber getrennt, gibt es später Streit mit beiden Seiten.",
      },
      {
        titel: "Fiktive Abrechnung meist ausgeschlossen",
        text: "Die meisten Leasingverträge schreiben eine fachgerechte Reparatur in einer Vertragswerkstatt vor. Sich den Betrag auszahlen zu lassen und günstiger reparieren zu lassen, ist damit in der Regel vertragswidrig.",
      },
      {
        titel: "Zeitpunkt der Begutachtung",
        text: "Sinnvoll ist ein eigenes Gutachten zwei bis vier Wochen vor dem Rückgabetermin. Dann bleibt noch Zeit, Kleinigkeiten günstig selbst beheben zu lassen, statt sie zu Werkstattpreisen des Leasinggebers abgerechnet zu bekommen.",
      },
    ],
    worauf: [
      "Lassen Sie zwei bis vier Wochen vor der Rückgabe begutachten, nicht am Rückgabetag.",
      "Unterschreiben Sie kein Rückgabeprotokoll, das Sie nicht verstehen oder für falsch halten.",
      "Fotografieren Sie das Fahrzeug bei Übergabe vollständig, innen und außen.",
      "Heben Sie alle Wartungs- und Reparaturbelege auf, sie belegen den vertragsgemäßen Umgang.",
      "Nach einem Unfall den Leasinggeber informieren — das verlangen fast alle Verträge.",
    ],
    faqs: [
      {
        q: "Lohnt sich ein eigenes Gutachten vor der Leasingrückgabe?",
        a: "Sobald Sie damit rechnen, dass Nachforderungen kommen, ja. Die Kosten des Gutachtens liegen in der Regel deutlich unter dem, was an strittigen Positionen im Raum steht. Sie haben damit eine unabhängige Dokumentation des Zustands zum Zeitpunkt der Rückgabe.",
      },
      {
        q: "Was zählt als normale Abnutzung?",
        a: "Leichte Gebrauchsspuren im Innenraum, kleine Kratzer an Stoßfängern und Einstiegen, Steinschläge an der Front und Reifen mit ausreichender Restprofiltiefe. Was darüber hinausgeht — Dellen, durchgehende Lackschäden, Risse, Brandlöcher, fehlende Teile — ist ersatzpflichtig.",
      },
      {
        q: "Mein Leasingfahrzeug hatte einen Unfall. Wer bekommt das Geld?",
        a: "Eigentümer ist der Leasinggeber, deshalb stehen ihm Reparaturkosten und merkantiler Minderwert regelmäßig zu. Ihnen als Leasingnehmer steht dagegen der Nutzungsausfall zu. Wichtig ist, dass das Gutachten diese Positionen sauber trennt.",
      },
      {
        q: "Kann ich nach einem Unfall fiktiv abrechnen?",
        a: "Meist nicht. Die überwiegende Zahl der Leasingverträge verlangt eine fachgerechte Reparatur mit Nachweis. Prüfen Sie Ihren Vertrag, bevor Sie sich einen Betrag auszahlen lassen — sonst droht bei der Rückgabe eine zweite Rechnung.",
      },
      {
        q: "Der Leasinggeber fordert einen Minderwert. Ist das berechtigt?",
        a: "Nach einem reparierten Unfallschaden kann ein merkantiler Minderwert berechtigt sein, er muss aber fachlich begründet und der Höhe nach nachvollziehbar sein. Schicken Sie uns die Forderung — wir prüfen sie und schreiben bei Bedarf eine Stellungnahme.",
      },
    ],
    verwandt: [
      { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/fiktive-abrechnung", label: "Fiktive Abrechnung", sub: "Geld statt Reparatur" },
      { href: "/flotten-partner", label: "Flottenpartner", sub: "Für Unternehmen" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kaskogutachten-berlin",
    kicker: "Kaskogutachten",
    title: "Auch wenn Sie",
    titleAccent: "selbst schuld sind.",
    lead: "Bei einem Kaskoschaden zahlt Ihre eigene Versicherung — und prüft entsprechend genau. Ein unabhängiges Gutachten sorgt dafür, dass die Regulierung auf Ihren Zahlen basiert, nicht nur auf ihren.",
    image: "/foto7.jpg",
    name: "Kaskogutachten Berlin",
    serviceType: "Kaskogutachten",
    metaTitle: "Kaskogutachten Berlin – Teil- und Vollkaskoschaden",
    metaDescription:
      "Unabhängiges Gutachten bei Teil- und Vollkaskoschäden in Berlin: Hagel, Wildunfall, Diebstahl, Brand. Dokumentation für Ihre Versicherung.",
    keywords: [
      "kaskogutachten berlin",
      "kaskoschaden gutachten",
      "hagelschaden gutachten berlin",
      "wildunfall gutachten berlin",
      "teilkasko gutachten",
    ],
    direktantwort:
      "Ein Kaskogutachten dokumentiert Schäden, die Ihre eigene Versicherung reguliert — Hagel, Wildunfall, Sturm, Diebstahl, Brand oder ein selbstverschuldeter Unfall. Anders als beim Haftpflichtschaden gelten hier die Bedingungen Ihres Vertrags: ob und in welcher Höhe die Gutachterkosten übernommen werden, steht dort und sollte vorab geklärt werden.",
    intro: [
      "Beim Kaskoschaden ist die Ausgangslage eine andere als nach einem unverschuldeten Unfall. Ihr Vertragspartner ist Ihre eigene Versicherung, und die reguliert nach ihren Bedingungen. Viele Versicherer schicken zunächst einen eigenen Gutachter oder lassen den Schaden anhand von Fotos bewerten — beides führt regelmäßig zu niedrigeren Zahlen als eine Besichtigung vor Ort.",
      "Ein unabhängiges Gutachten verschafft Ihnen eine belastbare Gegenposition. Es dokumentiert den Schaden vollständig, beziffert die Reparaturkosten nach den Sätzen einer Fachwerkstatt und weist gegebenenfalls einen Restwert aus. Auf dieser Grundlage lässt sich über die Regulierung sachlich sprechen.",
      "Wir begutachten alle typischen Kaskofälle: Hagel- und Sturmschäden, Wildunfälle, Marderbisse mit Folgeschaden, Glasbruch, Brand- und Diebstahlschäden sowie selbstverschuldete Unfälle.",
    ],
    besonderheiten: [
      {
        titel: "Erst den Vertrag klären",
        text: "Ob Ihre Versicherung die Gutachterkosten trägt, hängt von Ihren Bedingungen ab. Manche Verträge übernehmen sie vollständig, andere nur bis zu einer Grenze oder erst ab einer bestimmten Schadenhöhe. Klären Sie das vor der Beauftragung — wir sagen Ihnen, worauf Sie im Vertrag achten müssen.",
      },
      {
        titel: "Hagelschaden",
        text: "Hagelschäden werden nach Anzahl und Größe der Diedel pro Bauteil bewertet. Ob gedrückt oder lackiert wird, macht bei der Kalkulation einen erheblichen Unterschied. Eine Bewertung nach Fotos wird der Sache fast nie gerecht.",
      },
      {
        titel: "Wildunfall",
        text: "Für die Teilkasko brauchen Sie in der Regel eine Wildunfallbescheinigung. Zusätzlich sollte der Schaden dokumentiert werden, bevor das Fahrzeug bewegt oder gereinigt wird — Haare und Spuren am Fahrzeug sind Teil des Nachweises.",
      },
      {
        titel: "Marderbiss und Folgeschäden",
        text: "Die Teilkasko deckt den Bissschaden selbst, Folgeschäden am Motor sind nicht in jedem Vertrag eingeschlossen. Eine saubere Ursachenzuordnung im Gutachten entscheidet darüber, was reguliert wird.",
      },
      {
        titel: "Selbstbeteiligung mitdenken",
        text: "Liegt der Schaden nur knapp über Ihrer Selbstbeteiligung, lohnt die Meldung unter Umständen nicht — die Rückstufung im Schadenfreiheitsrabatt kann über Jahre teurer sein. Wir rechnen Ihnen das vorher durch.",
      },
    ],
    worauf: [
      "Prüfen Sie vor der Beauftragung, ob Ihr Vertrag die Gutachterkosten übernimmt.",
      "Bei Wildunfall die Bescheinigung besorgen und das Fahrzeug vorher nicht reinigen.",
      "Bei Hagel den Schaden zeitnah dokumentieren, das Unwetterdatum ist Teil des Nachweises.",
      "Rechnen Sie Selbstbeteiligung und Rückstufung gegen, bevor Sie einen kleinen Schaden melden.",
      "Bei Diebstahl immer zuerst Anzeige erstatten, dann der Versicherung melden.",
    ],
    faqs: [
      {
        q: "Zahlt meine Kaskoversicherung das Gutachten?",
        a: "Das hängt von Ihren Vertragsbedingungen ab. Manche Versicherer übernehmen die Gutachterkosten vollständig, andere nur anteilig oder erst ab einer bestimmten Schadenhöhe. Klären Sie das vorab telefonisch mit Ihrem Versicherer — wir sagen Ihnen, welche Fragen Sie stellen sollten.",
      },
      {
        q: "Die Versicherung will einen eigenen Gutachter schicken. Muss ich das akzeptieren?",
        a: "Im Kaskofall hat Ihre Versicherung das Recht, den Schaden selbst zu prüfen. Sie dürfen aber zusätzlich ein eigenes Gutachten erstellen lassen. Weichen die Ergebnisse deutlich voneinander ab, sehen viele Verträge ein Sachverständigenverfahren vor.",
      },
      {
        q: "Lohnt sich ein Gutachten bei einem Hagelschaden?",
        a: "In der Regel ja, weil Hagelschäden großflächig sind und die Bewertung stark davon abhängt, ob gedrückt oder lackiert wird. Sammelbesichtigungen und Fotobewertungen fallen erfahrungsgemäß niedriger aus als eine Einzelbegutachtung.",
      },
      {
        q: "Soll ich einen kleinen Schaden überhaupt melden?",
        a: "Nicht unbedingt. Liegt der Schaden nur wenig über Ihrer Selbstbeteiligung, kann die Rückstufung im Schadenfreiheitsrabatt über die Jahre teurer werden als die Reparatur. Wir rechnen Ihnen beide Varianten durch, bevor Sie sich entscheiden.",
      },
      {
        q: "Bekomme ich bei einem Kaskoschaden Nutzungsausfall?",
        a: "In der Regel nicht. Nutzungsausfall ist ein Schadenersatzanspruch gegen einen Schädiger — bei einem Kaskoschaden gibt es keinen. Manche Verträge sehen einen Mietwagenbaustein vor, prüfen Sie Ihre Bedingungen.",
      },
    ],
    verwandt: [
      { href: "/schadengutachten", label: "Schadengutachten", sub: "Nach einem Unfall" },
      { href: "/totalschaden-gutachten-berlin", label: "Totalschaden", sub: "Wenn Reparatur sich nicht lohnt" },
      { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Wiederbeschaffungs- & Restwert" },
      { href: "/wiederbeschaffungswert-berechnen", label: "Wiederbeschaffungswert", sub: "Wenn Kasko zu wenig zahlt" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "beweissicherungsgutachten-berlin",
    kicker: "Beweissicherung",
    title: "Wenn Aussage gegen",
    titleAccent: "Aussage steht.",
    lead: "Bei strittiger Schuldfrage entscheidet später nicht, wer lauter erzählt, sondern was dokumentiert wurde. Spuren verschwinden innerhalb von Tagen.",
    image: "/unfall-stock.jpg",
    name: "Beweissicherungsgutachten Berlin",
    serviceType: "Beweissicherungsgutachten",
    metaTitle: "Beweissicherungsgutachten Berlin – strittige Schuldfrage",
    metaDescription:
      "Beweissicherungsgutachten in Berlin bei bestrittener Schuldfrage. Schadenbild, Anstoßrichtung und Spurenlage für die spätere Rekonstruktion.",
    keywords: [
      "beweissicherungsgutachten berlin",
      "beweissicherung unfall",
      "schuldfrage unfall gutachten",
      "unfallrekonstruktion berlin",
      "strittige schuldfrage",
    ],
    direktantwort:
      "Ein Beweissicherungsgutachten dokumentiert nach einem Unfall alle Spuren, die für die Klärung des Hergangs gebraucht werden: Schadenbild, Anstoßrichtung, Deformationen, Lackantragungen und Endlagen. Es ist dann sinnvoll, wenn die Schuldfrage strittig ist oder der Unfallgegner den Hergang anders schildert als Sie.",
    intro: [
      "Wenn zwei Beteiligte den Unfall unterschiedlich schildern, entscheidet später die Spurenlage. Das Problem: Spuren verschwinden schnell. Das Fahrzeug wird bewegt, gereinigt, repariert oder verkauft, und mit jedem dieser Schritte geht ein Stück Beweis verloren. Nach wenigen Tagen ist die Rekonstruktion deutlich schwieriger.",
      "Ein Beweissicherungsgutachten hält den Zustand fest, solange er noch vorhanden ist. Dokumentiert werden Schadenhöhe über der Fahrbahn, Anstoßwinkel, Deformationsrichtung, Fremdlackantragungen und Bruchbilder. Diese Merkmale lassen sich später gegen die Schilderung der Gegenseite halten — sie sind objektiv und nicht verhandelbar.",
      "Sinnvoll ist das immer dann, wenn die Gegenseite den Hergang bestreitet, wenn beim Spurwechsel oder beim Ausparken unklar ist, wer wen getroffen hat, oder wenn ein Versicherer den Verdacht eines gestellten Unfalls äußert.",
    ],
    besonderheiten: [
      {
        titel: "Schadenhöhe und Anstoßwinkel",
        text: "Die Höhe der Beschädigung über der Fahrbahn und der Winkel der Deformation lassen Rückschlüsse auf Fahrzeugtyp, Stellung und Bewegungsrichtung zu. Zwei Fahrzeuge, die sich seitlich berührt haben, hinterlassen ein anderes Bild als eines, das auf ein stehendes Fahrzeug aufgefahren ist.",
      },
      {
        titel: "Lackantragungen und Spurenübertrag",
        text: "Bei einer Berührung überträgt sich Material. Farbreste am eigenen Fahrzeug können der Gegenseite zugeordnet werden und belegen den Kontakt auch dann, wenn er bestritten wird.",
      },
      {
        titel: "Kompatibilitätsprüfung",
        text: "Passen die Schadenbilder beider Fahrzeuge zusammen? Diese Frage stellen Versicherer regelmäßig, wenn sie einen manipulierten Unfall vermuten. Eine saubere Dokumentation entkräftet den Verdacht — oder bestätigt ihn.",
      },
      {
        titel: "Plausibilität des geschilderten Hergangs",
        text: "Wir prüfen, ob die Schilderung der Gegenseite mit dem Schadenbild überhaupt vereinbar ist. In der Praxis scheitern viele Gegendarstellungen genau an diesem Punkt.",
      },
      {
        titel: "Abgrenzung zu Vor- und Altschäden",
        text: "Gerade bei älteren Fahrzeugen muss klar getrennt werden, welcher Schaden aus diesem Unfall stammt. Ohne diese Abgrenzung kürzt die Versicherung im Zweifel alles.",
      },
    ],
    worauf: [
      "Rufen Sie an, bevor Sie das Fahrzeug reparieren, reinigen oder verkaufen.",
      "Fotografieren Sie die Endlage beider Fahrzeuge, bevor die Unfallstelle geräumt wird.",
      "Notieren Sie Zeugen mit Namen und Telefonnummer — Kennzeichen allein reicht nicht.",
      "Schreiben Sie den Hergang noch am selben Tag auf, solange die Erinnerung frisch ist.",
      "Geben Sie gegenüber der gegnerischen Versicherung kein Schuldanerkenntnis ab.",
    ],
    faqs: [
      {
        q: "Wann brauche ich ein Beweissicherungsgutachten?",
        a: "Wenn die Schuldfrage strittig ist, wenn der Unfallgegner den Hergang anders schildert als Sie, wenn unklar ist, wer wen getroffen hat, oder wenn eine Versicherung den Verdacht eines gestellten Unfalls äußert. Auch bei Fahrerflucht ist die Dokumentation sinnvoll.",
      },
      {
        q: "Wie schnell muss das passieren?",
        a: "So schnell wie möglich. Mit jedem Tag gehen Spuren verloren — spätestens mit der Reparatur ist der Beweis weg. Wenn die Schuldfrage im Raum steht, rufen Sie am besten noch am Unfalltag an.",
      },
      {
        q: "Wer zahlt ein Beweissicherungsgutachten?",
        a: "Stellt sich heraus, dass Sie keine Schuld trifft, trägt die gegnerische Haftpflichtversicherung die Kosten wie bei jedem anderen Gutachten auch. Bei ungeklärter Lage gehen Sie zunächst in Vorleistung — sprechen Sie das vorher mit Ihrem Anwalt ab.",
      },
      {
        q: "Ersetzt das Gutachten ein Gerichtsgutachten?",
        a: "Nein. Vor Gericht wird in der Regel ein gerichtlich bestellter Sachverständiger tätig. Unsere Beweissicherung stellt aber sicher, dass dieser überhaupt noch etwas zu bewerten hat — ohne dokumentierte Spurenlage kann auch ein Gerichtsgutachter nichts mehr feststellen.",
      },
      {
        q: "Kann ich das auch machen, wenn die Polizei schon da war?",
        a: "Ja, und es ist sogar oft sinnvoll. Die polizeiliche Unfallaufnahme dient in erster Linie der Ordnungswidrigkeit oder Straftat, nicht der zivilrechtlichen Schadenklärung. Technische Details, die später über die Haftungsquote entscheiden, werden dort selten festgehalten.",
      },
    ],
    verwandt: [
      { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
      { href: "/heckauffahrunfall-berlin", label: "Heckauffahrunfall", sub: "Typischer Streitfall" },
      { href: "/vorschaden-altschaden-gutachten", label: "Vorschaden & Altschaden", sub: "Sauber abgrenzen" },
      { href: "/kostenvoranschlag-oder-gutachten", label: "Kostenvoranschlag?", sub: "Warum der als Beweis nicht reicht" },
    ],
  },
];

export const leistungSlugs = leistungContent.map((l) => l.slug);

export function getLeistung(slug: string): LeistungContent {
  const treffer = leistungContent.find((l) => l.slug === slug);
  if (!treffer) throw new Error(`Leistung "${slug}" fehlt in lib/leistung-content.ts`);
  return treffer;
}
