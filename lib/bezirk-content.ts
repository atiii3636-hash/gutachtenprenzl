export interface BezirkContent {
  slug: string;
  name: string;
  nameShort: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  intro: string;
  localText: string[];
  subdistricts: string[];
  hotspots: { location: string; desc: string }[];
  distanceMin: number;
  faqs: { q: string; a: string }[];
  neighborSlugs: string[];
  /**
   * Optionale Vertiefung für Bezirke, in denen wir um die Top 3 kämpfen.
   * Der gemeinsame Template-Text ist auf allen Bezirksseiten identisch; ohne
   * zusätzlichen eigenen Inhalt bleiben pro Seite nur rund 280 einzigartige
   * Wörter übrig. Zu wenig, um gegen Wettbewerber auf Position 1 bis 3 zu bestehen.
   */
  deepDive?: { h: string; p: string[] }[];
}

export const bezirkContent: BezirkContent[] = [
  {
    slug: "kfz-sachverstaendiger-berlin-pankow",
    name: "Berlin Pankow",
    nameShort: "Pankow",
    title: "KFZ Gutachter Pankow – kostenlos, in 24h",
    metaDescription: "Unfall in Pankow? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Büro direkt an der Prenzlauer Allee 88. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger pankow", "kfz gutachter pankow berlin", "unfallgutachten pankow", "gutachter berlin pankow weißensee", "kfz gutachten karow"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-pankow",
    intro: "Pankow ist Berlins einwohnerreichster Bezirk — mit Prenzlauer Berg, Weißensee, Karow und Französisch Buchholz. Unfall auf der Berliner Allee, der Blankenburger Straße oder am S-Bahnhof Pankow? Wir sind in 15–20 Minuten bei Ihnen.",
    localText: [
      "Der Bezirk Pankow erstreckt sich vom Prenzlauer Berg im Süden bis nach Buch im Norden — ein Gebiet mit stark unterschiedlichem Verkehrsaufkommen. Während die Schönhauser Allee und Berliner Straße täglich von Zehntausenden Fahrzeugen genutzt werden, sind Karow und Französisch Buchholz eher durch Pendlerverkehr geprägt. Als KFZ Sachverständiger kennen wir die lokalen Besonderheiten: enge Hinterhofzufahrten in Prenzlauer Berg, unübersichtliche Kreuzungen in Weißensee und den dichten Pendelverkehr auf der B2.",
      "Unser Büro an der Prenzlauer Allee 88 liegt nur wenige Fahrminuten vom Bezirkszentrum Pankow entfernt. Wir kommen zu Ihnen — ob in Buch, Heinersdorf, Blankenburg, Niederschönhausen oder direkt ins Zentrum von Pankow. Rufen Sie uns an, wir sind in 15 bis 25 Minuten vor Ort.",
    ],
    subdistricts: ["Prenzlauer Berg", "Weißensee", "Karow", "Heinersdorf", "Blankenburg", "Niederschönhausen", "Buch", "Französisch Buchholz", "Rosenthal"],
    hotspots: [
      { location: "Berliner Allee / Weißenseer Weg", desc: "Vielbefahrene Kreuzung mit häufigen Vorfahrtsverletzungen" },
      { location: "Schönhauser Allee (Stadtbahntrasse)", desc: "Engstellen durch Straßenbahn führen zu Abbiegeunfällen" },
      { location: "B2 Richtung Buch / Karow", desc: "Auffahrunfälle durch starkes Pendleraufkommen" },
    ],
    distanceMin: 15,
    faqs: [
      { q: "Kommt der Gutachter auch nach Buch oder Karow?", a: "Ja, wir sind in ganz Pankow vor Ort — von Prenzlauer Berg bis nach Buch und Französisch Buchholz. Die Anfahrt beträgt maximal 25 Minuten." },
      { q: "Ich hatte einen Unfall auf der Berliner Allee. Was soll ich jetzt tun?", a: "Rufen Sie uns direkt an: 0155 60003661. Wir kommen zum Unfallort oder zu Ihrem Fahrzeug und erstellen das Gutachten innerhalb von 24 Stunden. Bei Fremdverschulden entstehen Ihnen keine Kosten." },
      { q: "Gilt das Gutachten auch für Unfälle in Weißensee?", a: "Ja. Unser Gutachten gilt für den gesamten Bezirk Pankow inklusive Weißensee, Heinersdorf und Niederschönhausen — und wird von deutschen Versicherungen im Regelfall anerkannt." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-prenzlauer-berg", "kfz-sachverstaendiger-berlin-weissensee", "kfz-sachverstaendiger-berlin-mitte", "kfz-sachverstaendiger-berlin-reinickendorf"],
    deepDive: [
      {
        h: "Ein Bezirk, der in zwei Hälften zerfällt",
        p: [
          "Pankow ist auf der Karte ein einziger Bezirk, im Verkehr sind es zwei. Südlich der Ringbahn liegt dichte Altbaustadt mit Parkraumbewirtschaftung, Straßenbahn und viel Radverkehr. Nördlich von Niederschönhausen wird es Vorstadt: Einfamilienhäuser, Tempo 30 in Wohnstraßen, und dazwischen die A114 als Zubringer Richtung Autobahnring.",
          "Diese Zweiteilung merkt man an den Schäden. In Prenzlauer Berg und Niederschönhausen nehmen wir überwiegend Parkschäden und Rangierschäden auf. In Karow, Buch und Französisch Buchholz sind es eher Auffahrunfälle im Pendelverkehr und Wildschäden auf den Zufahrtsstraßen Richtung Brandenburg.",
          "Die B2, also Berliner Straße und Berliner Allee, ist die Achse, auf der beide Welten aufeinandertreffen. Morgens staut es sich stadteinwärts bis Buch, nachmittags in die Gegenrichtung. Auffahrunfälle im Stop-and-go sind dort der mit Abstand häufigste Fall.",
        ],
      },
      {
        h: "Anfahrt und Bearbeitungszeiten im Bezirk",
        p: [
          "Von der Prenzlauer Allee 88 aus liegen die südlichen Ortsteile in 10 bis 15 Minuten. Pankow-Zentrum, Niederschönhausen und Heinersdorf erreichen wir in rund 15 bis 20 Minuten. Für Karow, Blankenburg und Französisch Buchholz rechnen wir 20 bis 25 Minuten, für Buch bis zu 30.",
          "Wir nehmen den Termin dort wahr, wo das Fahrzeug steht. Das kann die eigene Einfahrt sein, der Werkstatthof oder der Stellplatz, auf dem das Auto nach dem Abschleppen abgestellt wurde. Ein nicht fahrbereites Fahrzeug muss für die Begutachtung nicht bewegt werden.",
          "Das fertige Gutachten geht in der Regel innerhalb von 24 Stunden nach der Besichtigung raus, an Sie und auf Wunsch direkt an die regulierende Versicherung und Ihren Anwalt.",
        ],
      },
      {
        h: "Wenn der Unfallgegner aus Brandenburg kommt",
        p: [
          "In Nordpankow passiert das regelmäßig, weil über die B2 und die A114 viel Pendelverkehr aus dem Barnim kommt. An Ihren Ansprüchen ändert das nichts. Zuständig ist immer die Haftpflichtversicherung des Verursachers, unabhängig davon, wo dessen Fahrzeug zugelassen ist.",
          "Praktisch relevant wird es nur bei ausländischen Kennzeichen. Dann läuft die Regulierung über den Zentralruf der Autoversicherer und gegebenenfalls über einen Schadenregulierungsbeauftragten in Deutschland. Das dauert länger, ändert aber nichts daran, dass Sie Ihren eigenen Gutachter frei wählen dürfen.",
        ],
      },
    ],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-prenzlauer-berg",
    name: "Berlin Prenzlauer Berg",
    nameShort: "Prenzlauer Berg",
    title: "KFZ Gutachter Prenzlauer Berg – kostenlos, 24h",
    metaDescription: "Unfall in Prenzlauer Berg? Wir sitzen direkt im Kiez, Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger prenzlauer berg", "kfz gutachter prenzlauer berg", "unfallgutachten prenzlauer berg", "gutachter schönhauser allee", "kfz gutachten kollwitzplatz"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-prenzlauer-berg",
    intro: "Prenzlauer Berg ist unser Heimatbezirk — unser Büro steht direkt an der Prenzlauer Allee 88. Unfall am Kollwitzplatz, auf der Kastanienallee oder an der Schönhauser Allee? Wir sind in Minuten bei Ihnen.",
    localText: [
      "Als KFZ Sachverständiger mit Standort in der Prenzlauer Allee 88 sind wir der einzige Gutachter, der buchstäblich im Bezirk sitzt. Prenzlauer Berg ist mit seiner hohen Fahraddichte, engen Altbaustraßen und stark frequentierten Magistralen wie der Schönhauser Allee, Greifswalder Straße und Danziger Straße unfallträchtig — besonders an Kreuzungen mit Straßenbahn-Vorrang und zugeparkten Einmündungen.",
      "Wir kennen die lokalen Verhältnisse genau: die unübersichtliche Einmündung am Senefelderplatz, die staugefährdete Schönhauser Allee in Höhe des Mauerparks, den dichten Lieferverkehr rund um den Helmholtzplatz. Nach einem Unfall kommen wir sofort zu Ihnen — nach Hause, in die Werkstatt oder direkt zum Schadenort.",
    ],
    subdistricts: ["Kollwitzplatz", "Helmholtzplatz", "Kastanienallee", "Mauerpark", "Senefelderplatz", "Greifswalder Straße", "Danziger Straße", "Teutoburger Platz"],
    hotspots: [
      { location: "Schönhauser Allee / Eberswalder Str.", desc: "Straßenbahn-Kreuzung mit hohem Aufkommen an Abbiegeunfällen" },
      { location: "Greifswalder Straße (stadtauswärts)", desc: "Auffahrunfälle durch taktische Ampelschaltungen" },
      { location: "Prenzlauer Allee / Danziger Str.", desc: "Engstelle mit häufigen Seitenkollisionen" },
    ],
    distanceMin: 5,
    faqs: [
      { q: "Ist Gutachten Prenzl wirklich in Prenzlauer Berg ansässig?", a: "Ja. Unser Büro befindet sich in der Prenzlauer Allee 88, 10405 Berlin — mitten im Bezirk. Wir sind innerhalb weniger Minuten bei Ihnen." },
      { q: "Ich hatte einen Parkschaden am Helmholtzplatz. Was tue ich jetzt?", a: "Fotografieren Sie den Schaden, notieren Sie falls vorhanden das Kennzeichen des Verursachers und rufen Sie uns an: 0155 60003661. Wir kommen zum Fahrzeug und dokumentieren alles rechtssicher." },
      { q: "Kann ich das Gutachten auch für die gegnerische Versicherung nutzen?", a: "Ja. Unser TÜV Rheinland-zertifiziertes Gutachten wird von deutschen Versicherungen im Regelfall anerkannt und ist gerichtsverwertbar. Die Gegenseite kann es nicht pauschal ablehnen." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-pankow", "kfz-sachverstaendiger-berlin-mitte", "kfz-sachverstaendiger-berlin-friedrichshain"],
    deepDive: [
      {
        h: "Was ein Büro im Kiez praktisch ändert",
        p: [
          "Die meisten Kfz-Sachverständigen, die für Prenzlauer Berg werben, sitzen in Reinickendorf, Lichtenberg oder am Stadtrand. Das steht selten auf deren Website, macht aber im Schadenfall den Unterschied. Wir sind in der Prenzlauer Allee 88, zwischen Danziger Straße und Marienburger Straße. Zum Kollwitzplatz sind es fünf Minuten, zum Mauerpark sieben, zum Helmholtzplatz knapp zehn.",
          "Das heißt konkret: Wenn Sie vormittags anrufen, sehen wir Ihr Fahrzeug in der Regel noch am selben Tag. Sie müssen nicht in eine Werkstatt am anderen Ende der Stadt fahren, nur damit jemand den Schaden begutachten kann. Bei Fahrzeugen, die nach dem Unfall nicht mehr fahrbereit sind, ist das ohnehin der einzige gangbare Weg.",
          "Ein zweiter Punkt, den Ortsfremde unterschätzen: Prenzlauer Berg ist fast flächendeckend Parkraumbewirtschaftung. Ein Gutachter ohne Anwohnervignette kreist erst zwanzig Minuten um den Block oder stellt sich in zweiter Reihe. Wir kennen die Ecken, an denen man kurz stehen kann, ohne den Verkehr zu blockieren.",
        ],
      },
      {
        h: "Die Schadensbilder, die hier immer wieder auftauchen",
        p: [
          "Prenzlauer Berg produziert andere Schäden als eine Ausfallstraße am Stadtrand. Der häufigste Fall, den wir aufnehmen, ist der Parkrempler in einer engen Altbaustraße: seitliche Streifschäden an Kotflügel und Tür, oft ohne Zeugen, oft mit einem Verursacher, der weg ist. Ohne saubere Dokumentation und Plausibilitätsprüfung wird so ein Schaden von der Versicherung gern angezweifelt.",
          "Der zweite Klassiker sind Kollisionen mit Radfahrern, vor allem beim Öffnen der Fahrertür. Die Kastanienallee, die Danziger Straße und die Schönhauser Allee haben viel Radverkehr direkt neben dem Parkstreifen. Solche Fälle enden fast immer bei der Haftungsfrage, und da zählt, wie genau die Schadenshöhe und die Anstoßrichtung dokumentiert sind.",
          "Dazu kommen Abbiegeunfälle an den Straßenbahntrassen. Die M1 über die Schönhauser Allee, die M2 über die Prenzlauer Allee und die M10 über die Eberswalder Straße kreuzen den Autoverkehr an Stellen, an denen Sichtachsen durch parkende Fahrzeuge verdeckt sind. Wer dort links abbiegt, sieht die Bahn oft erst spät.",
        ],
      },
      {
        h: "Die ersten zwei Stunden nach dem Unfall",
        p: [
          "Fotografieren Sie, bevor irgendetwas bewegt wird. Gesamtansicht von allen vier Seiten, dann die Schadenstelle aus zwei Metern und aus dreißig Zentimetern. Wenn es die Verkehrslage zulässt, auch die Endstellung beider Fahrzeuge samt Umgebung, damit die Position später nachvollziehbar bleibt.",
          "Notieren Sie Kennzeichen, Versicherung und Versicherungsnummer der Gegenseite. Falls jemand stehen bleibt und etwas gesehen hat: Name und Telefonnummer. Ein Zeuge, den man später nicht mehr findet, hilft niemandem.",
          "Unterschreiben Sie nichts, was die gegnerische Versicherung Ihnen anbietet, bevor die Schadenshöhe feststeht. Der Anruf, in dem ein Schadensregulierer freundlich einen Sofortbetrag vorschlägt, kommt in der Regel innerhalb von 24 Stunden. Er liegt fast immer unter dem, was Ihnen tatsächlich zusteht, weil Wertminderung und Nutzungsausfall darin nicht auftauchen.",
        ],
      },
    ],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-mitte",
    name: "Berlin Mitte",
    nameShort: "Mitte",
    title: "KFZ Gutachter Berlin Mitte – kostenlos, 24h",
    metaDescription: "Unfall in Mitte? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort am Alexanderplatz & Hackeschem Markt. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger berlin mitte", "kfz gutachter mitte", "unfallgutachten alexanderplatz", "gutachter berlin mitte", "kfz gutachten friedrichstraße"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-mitte",
    intro: "Berlin Mitte ist das Zentrum der Hauptstadt — mit dem höchsten Verkehrsaufkommen, dichten Touristenmassen und komplexen Kreuzungssituationen. Unfall am Alexanderplatz, auf der Karl-Liebknecht-Straße oder am Hackeschen Markt? Wir sind in 20 Minuten bei Ihnen.",
    localText: [
      "Kaum ein Berliner Bezirk hat ein so hohes Unfallrisiko wie Mitte: Taxi- und Lieferwagen-Dichte, Touristenbusse auf der Unter den Linden, Fahrradstau am Hackeschen Markt und ständiger Stau auf der Friedrichstraße machen Kollisionen fast unvermeidlich. Als unabhängiger KFZ Sachverständiger dokumentieren wir Schäden im gesamten Bezirk — schnell, rechtssicher und ohne Wartezeiten.",
      "Von Moabit über das Regierungsviertel bis zum Alexanderplatz: Unser Büro an der Prenzlauer Allee 88 ist in 20 Minuten in jedem Teil von Mitte erreichbar. Wir kommen zu Ihrem Fahrzeug — ob Tiefgarage, Straßenrand oder Werkstatt.",
    ],
    subdistricts: ["Alexanderplatz", "Hackescher Markt", "Unter den Linden", "Friedrichstraße", "Moabit", "Regierungsviertel", "Museumsinsel", "Spandauer Vorstadt"],
    hotspots: [
      { location: "Karl-Liebknecht-Straße / Spandauer Straße", desc: "Hohe Taxi- und Busfrequenz, Spurwechselunfälle" },
      { location: "Friedrichstraße / Unter den Linden", desc: "Komplexe Kreuzung mit Lieferverkehr und Falschabbiegern" },
      { location: "Rosenthaler Platz", desc: "Straßenbahn, Fahrräder und Kfz auf engem Raum" },
    ],
    distanceMin: 20,
    faqs: [
      { q: "Fahren Sie auch nach Moabit?", a: "Ja, wir decken den gesamten Bezirk Mitte ab — von Moabit über das Regierungsviertel bis zum Alexanderplatz und zur Spandauer Vorstadt." },
      { q: "Ein Tourist hat mein Auto in Mitte beschädigt. Was nun?", a: "Fotografieren Sie den Schaden und notieren Sie Kennzeichen und ggf. Kontaktdaten. Rufen Sie uns an: 0155 60003661. Wir erstellen ein gerichtsverwertbares Gutachten — auch bei ausländischen Versicherungen anerkannt." },
      { q: "Ich parkte in einer Tiefgarage am Alexanderplatz und jemand hat mein Auto gerammt. Hilft ein Gutachten?", a: "Ja. Wir dokumentieren Parkschadensfälle vollständig — inklusive Kostenvoranschlag und Minderwert. Das Gutachten ist die Grundlage für Ihre Schadensforderung gegenüber dem Verursacher oder seiner Versicherung." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-prenzlauer-berg", "kfz-sachverstaendiger-berlin-friedrichshain", "kfz-sachverstaendiger-berlin-kreuzberg"],
    deepDive: [
      {
        h: "Warum Unfälle in Mitte anders reguliert werden",
        p: [
          "In keinem anderen Berliner Bezirk sind so viele Fahrzeuge unterwegs, die dem Fahrer nicht gehören. Mietwagen, Carsharing, Firmenflotten, Lieferfahrzeuge, dazu Touristen mit auswärtigen und ausländischen Kennzeichen. Für die Schadensregulierung heißt das: Halter, Fahrer und Versicherungsnehmer sind oft drei verschiedene Parteien.",
          "Das verlangsamt die Regulierung, und es ändert, worauf es im Gutachten ankommt. Bei einem Carsharing-Fahrzeug muss die Schadenshöhe besonders sauber belegt sein, weil der Anbieter intern nach eigenen Sätzen abrechnet. Bei Mietwagen kommt regelmäßig die Frage nach der Vorschädigung auf, weil die Fahrzeuge viele Hände durchlaufen haben.",
          "Wir dokumentieren deshalb in Mitte grundsätzlich auch das Umfeld der Schadenstelle und trennen im Gutachten klar zwischen dem aktuellen Schaden und erkennbaren Altschäden. Das nimmt der Gegenseite das häufigste Argument.",
        ],
      },
      {
        h: "Die Stellen, an denen es in Mitte regelmäßig kracht",
        p: [
          "Die Grunerstraße und der Alexanderplatz sind die offensichtlichen Kandidaten: viele Spuren, viele Spurwechsel, Straßenbahn, und Fahrer, die die Ausschilderung zum ersten Mal sehen. Fahrstreifenwechsel-Kollisionen sind hier der Standardfall, und die Haftungsfrage hängt fast immer an Details, die man nur mit Fotos vom Anstoßwinkel klärt.",
          "Weniger bekannt, aber in unserer Praxis mindestens genauso häufig: die Torstraße und die Invalidenstraße. Beide sind eng, beidseitig zugeparkt und haben durchgehend Lieferverkehr in zweiter Reihe. Wer daran vorbeizieht, streift die Gegenrichtung oder die geöffnete Ladetür.",
          "Rund um Hackescher Markt und Museumsinsel kommt der Fußgänger- und E-Scooter-Verkehr dazu. Anstöße bei Schrittgeschwindigkeit sehen harmlos aus und kosten trotzdem schnell vierstellig, sobald Sensorik in der Stoßstange verbaut ist.",
        ],
      },
      {
        h: "Wenn Ihr Fahrzeug in Mitte abgeschleppt wurde",
        p: [
          "Nach einem Unfall in der Innenstadt wird häufig zügig abgeschleppt, weil der Wagen den Verkehr blockiert. Wo Ihr Fahrzeug steht, erfahren Sie über die Polizei oder das Abschleppunternehmen, das den Auftrag hatte.",
          "Wichtig: Lassen Sie es dort stehen, bis es begutachtet ist. Wir kommen auf den Verwahrplatz. Wird vorher repariert oder verwertet, fehlt die Grundlage für die Schadenshöhe, und die Versicherung kürzt.",
          "Die Kosten für Abschleppen und Standgebühr gehören bei Fremdverschulden zum ersatzfähigen Schaden. Heben Sie die Belege auf, wir nehmen sie mit ins Gutachten.",
        ],
      },
    ],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-kreuzberg",
    name: "Berlin Kreuzberg",
    nameShort: "Kreuzberg",
    title: "KFZ Gutachter Kreuzberg – kostenlos, in 24h",
    metaDescription: "Unfall in Kreuzberg? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort am Kottbusser Tor & Bergmannkiez. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger kreuzberg", "kfz gutachter kreuzberg berlin", "unfallgutachten kreuzberg", "gutachter kottbusser tor", "kfz gutachten bergmannkiez"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-kreuzberg",
    intro: "Kreuzberg verbindet das quirlige Kottbusser Tor mit dem ruhigen Bergmannkiez — und hat dabei einige der unfallträchtigsten Kreuzungen Berlins. Unfall auf der Gneisenaustraße, am Mehringdamm oder an der Oranienstraße? Wir sind in 20 Minuten da.",
    localText: [
      "Kreuzberg ist für seinen dichten Radverkehr, die engen Altbaustraßen und stark befahrene Achsen wie den Mehringdamm, die Yorckstraße und die Gneisenaustraße bekannt. Besonders am Kottbusser Tor, einem der verkehrsreichsten Knotenpunkte Berlins, häufen sich Kollisionen zwischen Bussen, Fahrrädern und Pkw. Als KFZ Sachverständiger dokumentieren wir solche Schäden präzise — für die rechtssichere Schadensregulierung gegenüber der Versicherung.",
      "Ob Bergmannkiez, Graefekiez oder das Viertel rund um die Oranienstraße — wir kommen in ca. 20 Minuten zu Ihrem Fahrzeug. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung.",
    ],
    subdistricts: ["Bergmannkiez", "Graefekiez", "Kottbusser Tor", "Mehringdamm", "Oranienstraße", "Hallesches Ufer", "Ritterstraße", "Friedrichstraße (Süd)"],
    hotspots: [
      { location: "Kottbusser Tor (Knotenpunkt)", desc: "Bus, Straßenbahn, Fahrräder und Pkw auf engstem Raum" },
      { location: "Mehringdamm / Gneisenaustraße", desc: "Hauptachse mit hohem Verkehrsaufkommen und Radspur-Konflikten" },
      { location: "Yorckstraße (Brücken)", desc: "Enge Fahrspuren, häufige Seitenspiegelschäden" },
    ],
    distanceMin: 22,
    faqs: [
      { q: "Ein Fahrradfahrer hat meinen Spiegel abgefahren. Brauche ich dafür ein Gutachten?", a: "Ja, auch bei kleineren Schäden lohnt sich ein Gutachten. Nur so können Sie den Schaden vollständig dokumentieren und gegenüber der Haftpflicht des Verursachers geltend machen." },
      { q: "Ich hatte einen Unfall am Kottbusser Tor. Wie schnell kommen Sie?", a: "In der Regel sind wir innerhalb von 20–25 Minuten vor Ort. Rufen Sie uns an: 0155 60003661." },
      { q: "Deckt das Gutachten auch Schäden durch Straßenbahnschienen ab?", a: "Ja. Wenn Ihr Fahrzeug durch Gleise oder Straßenbelag beschädigt wurde, dokumentieren wir den Schaden und klären mit Ihnen, wer haftet — z.B. die BVG oder das Straßenbauamt." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-mitte", "kfz-sachverstaendiger-berlin-friedrichshain", "kfz-sachverstaendiger-berlin-neukoelln"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-friedrichshain",
    name: "Berlin Friedrichshain",
    nameShort: "Friedrichshain",
    title: "KFZ Gutachter Friedrichshain – kostenlos, 24h",
    metaDescription: "Unfall in Friedrichshain? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort an Frankfurter Allee & Warschauer Str. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger friedrichshain", "kfz gutachter friedrichshain", "unfallgutachten frankfurter allee", "gutachter warschauer straße", "kfz gutachten friedrichshain berlin"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-friedrichshain",
    intro: "Friedrichshain ist eines der am schnellsten wachsenden Berliner Quartiere — mit stark frequentierten Achsen wie der Frankfurter Allee, der Warschauer Straße und dem Boxhagener Platz. Nach einem Unfall sind wir in 15 Minuten vor Ort.",
    localText: [
      "Die Frankfurter Allee ist Friedrichshains Hauptschlagader — sechs Spuren, dichter Abbiegerverkehr, Radwege und Straßenbahn. Hier passieren die meisten Unfälle im Bezirk: Auffahrunfälle an Ampeln, Spurwechselkollisionen und Konflikte mit Radfahrern. Hinzu kommen die stark frequentierten Bereiche rund um die Warschauer Straße, das RAW-Gelände und die Simon-Dach-Straße.",
      "Unser Büro in der Prenzlauer Allee 88 liegt nur einen Katzensprung von Friedrichshain entfernt — wir sind in 10–15 Minuten bei Ihnen. Wir dokumentieren Ihren Schaden vollständig und leiten die Schadensregulierung mit der Versicherung in die Wege.",
    ],
    subdistricts: ["Boxhagener Platz", "Simon-Dach-Kiez", "RAW-Gelände", "Warschauer Straße", "Frankfurter Allee", "Eldenaer Straße", "Stralauer Kiez"],
    hotspots: [
      { location: "Frankfurter Allee / Jessner Straße", desc: "6-spurige Hauptachse mit häufigen Spurwechselunfällen" },
      { location: "Warschauer Straße / Revaler Str.", desc: "S-Bahn-Unterführung, hohes Fußgänger- und Radaufkommen" },
      { location: "Boxhagener Platz (Wochenmarkt)", desc: "Rangier- und Parkschadensfälle durch eingeschränkte Sicht" },
    ],
    distanceMin: 15,
    faqs: [
      { q: "Jemand hat meinen Wagen auf der Frankfurter Allee gerammt. Was tue ich?", a: "Sichern Sie die Unfallstelle, dokumentieren Sie mit Fotos und tauschen Sie Daten aus. Rufen Sie uns an: 0155 60003661. Wir kümmern uns um alles weitere — Gutachten, Versicherungskommunikation, Schadensregulierung." },
      { q: "Ich habe einen Radfahrer leicht touchiert. Braucht er ein Gutachten?", a: "Ja, auch der Geschädigte hat Anspruch auf ein unabhängiges Gutachten. Bei Fremdverschulden trägt Ihre Haftpflichtversicherung die Kosten des Gutachters." },
      { q: "Wie schnell erhalte ich das Gutachten?", a: "Innerhalb von 24 Stunden nach der Fahrzeugbesichtigung. Das Gutachten wird digital übermittelt und kann sofort für die Versicherung verwendet werden." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-prenzlauer-berg", "kfz-sachverstaendiger-berlin-mitte", "kfz-sachverstaendiger-berlin-kreuzberg"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-neukoelln",
    name: "Berlin Neukölln",
    nameShort: "Neukölln",
    title: "KFZ Gutachter Neukölln – kostenlos, in 24h",
    metaDescription: "Unfall in Neukölln? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort an Karl-Marx-Str. & Sonnenallee. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger neukölln", "kfz gutachter neukölln berlin", "unfallgutachten neukölln", "gutachter karl-marx-straße", "kfz gutachten sonnenallee"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-neukoelln",
    intro: "Neukölln — von der belebten Karl-Marx-Straße bis zum ruhigen Britz — ist einer der bevölkerungsreichsten Berliner Bezirke. Auf der Sonnenallee, dem Hermannplatz und dem Britzer Damm passieren täglich Unfälle. Wir sind in 25 Minuten vor Ort.",
    localText: [
      "Die Karl-Marx-Straße und die Sonnenallee sind Neukölln's verkehrsreichste Arterien — mit doppeltem Busverkehr, eingeschränkten Halteverbotszonen und häufigem Lieferverkehr. Besonders der Hermannplatz als zentraler Knotenpunkt und die Rixdorfer Kreuzungen erzeugen regelmäßig Auffahrunfälle und Seitenkollisionen. Im südlichen Neukölln, auf dem Britzer Damm und dem Rudower Chaussee, dominieren hingegen Hochgeschwindigkeitsunfälle durch schnellen Durchgangsverkehr.",
      "Von unserem Standort in Prenzlauer Berg erreichen wir Nord-Neukölln in 20 Minuten, Britz und Buckow in 30 Minuten. Wir kommen zu Ihnen, erstellen das Gutachten und übernehmen die komplette Kommunikation mit der Versicherung.",
    ],
    subdistricts: ["Rixdorf", "Reuterquartier", "Schillerkiez", "Hermannplatz", "Britz", "Buckow", "Rudow", "Gropiusstadt"],
    hotspots: [
      { location: "Hermannplatz (Knotenpunkt)", desc: "Zentraler Kreisverkehr mit Bussen, Fußgängern und Radfahrern" },
      { location: "Sonnenallee / Karl-Marx-Platz", desc: "Dichter Lieferverkehr und Doppelparken erzeugen Spurwechselunfälle" },
      { location: "Britzer Damm (stadtauswärts)", desc: "Überland-Charakter mit Auffahrunfällen bei hoher Geschwindigkeit" },
    ],
    distanceMin: 25,
    faqs: [
      { q: "Kommen Sie auch nach Britz oder Buckow?", a: "Ja. Wir fahren in den gesamten Bezirk Neukölln — von Rixdorf bis Rudow. Anfahrtszeit aus Prenzlauer Berg: ca. 25–35 Minuten." },
      { q: "Mein Auto steht am Hermannplatz und wurde beschädigt. Was soll ich tun?", a: "Lassen Sie das Fahrzeug stehen, fotografieren Sie den Schaden und rufen Sie uns an: 0155 60003661. Wir kommen direkt zum Fahrzeug und dokumentieren alles an Ort und Stelle." },
      { q: "Ich wurde auf der Sonnenallee von hinten gerammt. Bin ich kostenlos?", a: "Bei klarem Fremdverschulden — also wenn jemand von hinten auffährt — tragen Sie keine Kosten. Die Haftpflichtversicherung des Unfallverursachers zahlt unser Honorar vollständig." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-kreuzberg", "kfz-sachverstaendiger-berlin-schoeneberg", "kfz-sachverstaendiger-berlin-tempelhof"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-schoeneberg",
    name: "Berlin Schöneberg",
    nameShort: "Schöneberg",
    title: "KFZ Gutachter Schöneberg – kostenlos, 24h",
    metaDescription: "Unfall in Schöneberg? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort am Nollendorf- & Innsbrucker Platz. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger schöneberg", "kfz gutachter schöneberg berlin", "unfallgutachten schöneberg", "gutachter nollendorfplatz", "kfz gutachten innsbrucker platz"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-schoeneberg",
    intro: "Schöneberg liegt zwischen Charlottenburg und Kreuzberg — mit dem Nollendorfplatz, dem Innsbrucker Platz und der belebten Hauptstraße als zentralen Verkehrsachsen. Wir sind nach einem Unfall in ca. 25 Minuten bei Ihnen.",
    localText: [
      "Der Innsbrucker Platz ist einer der komplexesten Knotenpunkte im Berliner Westen: Autobahnanschluss A100, S-Bahn-Überquerung und dichter Stadtverkehr treffen aufeinander. Besonders die Ausfahrten und Auffahrten der A100 erzeugen hier regelmäßig Auffahrunfälle und Fahrstreifenwechsel-Kollisionen. Die Hauptstraße, Eisenacher Straße und der Bayerische Platz sind weitere Schwerpunkte im Bezirk.",
      "Wir kommen aus Prenzlauer Berg in ca. 25 Minuten nach Schöneberg — zu Ihrem Wohnort, in die Werkstatt oder direkt an den Unfallort. Das Gutachten erhalten Sie innerhalb von 24 Stunden und bildet die rechtssichere Grundlage für Ihre Schadensregulierung.",
    ],
    subdistricts: ["Nollendorfplatz", "Innsbrucker Platz", "Bayerischer Platz", "Hauptstraße", "Eisenacher Straße", "Akazienstraße", "Wittenbergplatz"],
    hotspots: [
      { location: "Innsbrucker Platz / A100-Anschluss", desc: "Autobahnauf- und abfahrt mit Auffahrunfällen durch Bremsmanöver" },
      { location: "Hauptstraße / Kleiststraße", desc: "Engstelle mit Bus-Haltestellen und Fahrradverkehr" },
      { location: "Nollendorfplatz (Ringstraßen)", desc: "Komplexe Verkehrsführung mit mehreren Einmündungen" },
    ],
    distanceMin: 25,
    faqs: [
      { q: "Ich hatte einen Unfall an der A100-Auffahrt Innsbrucker Platz. Bin ich dabei gut abgesichert?", a: "Ja. Autobahnnahe Unfälle sind besonders wichtig, vollständig zu dokumentieren — Fahrtrichtung, Spurbelegung und Schäden müssen rechtssicher festgehalten werden. Unser Gutachten leistet genau das." },
      { q: "Gibt es auch Gutachten für Leasingfahrzeuge in Schöneberg?", a: "Ja. Auch bei Leasingfahrzeugen ist ein unabhängiges Gutachten empfehlenswert — der Leasinggeber verlangt in der Regel eine genaue Schadensermittlung. Wir erstellen das Gutachten und stimmen uns bei Bedarf mit dem Leasinggeber ab." },
      { q: "Was kostet mich das Gutachten bei einem Unfall mit Fremdverschulden?", a: "Nichts. Bei Fremdverschulden zahlt die gegnerische Haftpflichtversicherung unser Honorar vollständig. Sie unterschreiben eine Abtretungserklärung — das war's." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-kreuzberg", "kfz-sachverstaendiger-berlin-tempelhof", "kfz-sachverstaendiger-berlin-charlottenburg"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-tempelhof",
    name: "Berlin Tempelhof",
    nameShort: "Tempelhof",
    title: "KFZ Gutachter Tempelhof – kostenlos, in 24h",
    metaDescription: "Unfall in Tempelhof? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort am Tempelhofer & Mariendorfer Damm. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger tempelhof", "kfz gutachter tempelhof berlin", "unfallgutachten tempelhof", "gutachter tempelhofer damm", "kfz gutachten mariendorf"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-tempelhof",
    intro: "Tempelhof erstreckt sich vom Tempelhofer Feld bis nach Mariendorf und Lichtenrade — mit dem Tempelhofer Damm und dem Mariendorfer Damm als Hauptverbindungsachsen. Wir sind nach einem Unfall in 25–30 Minuten bei Ihnen.",
    localText: [
      "Der Tempelhofer Damm ist die meistbefahrene Nord-Süd-Achse in Tempelhof — mit Bussen, Radfahrern und starkem Durchgangsverkehr Richtung Autobahn. Besonders an den Kreuzungen mit der Ringstraße, der Oberlandstraße und dem Columbiadamm kommt es regelmäßig zu Abbiegeunfällen und Vorfahrtsverletzungen. Im südlichen Tempelhof, auf dem Mariendorfer Damm und dem Lichtenrader Damm, dominiert Pendlerverkehr mit typischen Auffahrunfällen.",
      "Wir fahren in alle Teile von Tempelhof-Schöneberg — von Tempelhof über Mariendorf bis nach Lichtenrade. Anfahrtszeit aus Prenzlauer Berg: ca. 25–35 Minuten. Das Gutachten ist innerhalb von 24 Stunden fertig.",
    ],
    subdistricts: ["Tempelhof", "Mariendorf", "Marienfelde", "Lichtenrade", "Columbiadamm", "Ringstraße", "Oberlandstraße"],
    hotspots: [
      { location: "Tempelhofer Damm / Ringstraße", desc: "Kreuzung mit Ampelanlage und hohem Busaufkommen" },
      { location: "Mariendorfer Damm / Alt-Mariendorf", desc: "Pendlerachse mit Auffahrunfällen in Stoßzeiten" },
      { location: "Columbiadamm (Stadtring)", desc: "Schnelle Fahrbahn mit Fahrstreifenwechsel-Kollisionen" },
    ],
    distanceMin: 28,
    faqs: [
      { q: "Fahren Sie auch nach Lichtenrade?", a: "Ja, wir decken den gesamten Bezirk Tempelhof-Schöneberg ab — inklusive Lichtenrade, Marienfelde und Mariendorf. Anfahrtszeit ca. 30–35 Minuten." },
      { q: "Ich wurde auf dem Tempelhofer Damm aufgefahren. Muss ich etwas beachten?", a: "Wichtig: Stellen Sie das Fahrzeug sicher ab, fotografieren Sie die Schäden und tauschen Sie Versicherungsdaten aus. Rufen Sie uns dann an: 0155 60003661. Bei Fremdverschulden entstehen Ihnen keine Kosten." },
      { q: "Kann ich das Gutachten auch für eine Kaskoversicherung nutzen?", a: "Ja. Unser Gutachten wird von deutschen Versicherungen im Regelfall anerkannt — sowohl bei Haftpflicht- als auch bei Kaskoversicherungen." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-schoeneberg", "kfz-sachverstaendiger-berlin-neukoelln", "kfz-sachverstaendiger-berlin-steglitz"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-charlottenburg",
    name: "Berlin Charlottenburg",
    nameShort: "Charlottenburg",
    title: "KFZ Gutachter Charlottenburg – kostenlos, 24h",
    metaDescription: "Unfall in Charlottenburg? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort am Kurfürstendamm. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger charlottenburg", "kfz gutachter charlottenburg berlin", "unfallgutachten kurfürstendamm", "gutachter charlottenburg", "kfz gutachten ku'damm"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-charlottenburg",
    intro: "Charlottenburg ist Berlins shopping- und geschäftsreichster Westteil — mit dem Kurfürstendamm, dem Ernst-Reuter-Platz und der Kantstraße als unfallträchtigsten Strecken. Wir sind in 25 Minuten bei Ihnen.",
    localText: [
      "Der Kurfürstendamm ist nicht nur Einkaufsmeile, sondern auch eine der unfallträchtigsten Straßen im Berliner Westen — mit dichten Parkvorgängen, Taxi-Staus, Fahrradverkehr auf der Busspur und Lieferverkehr zu jeder Stunde. Am Ernst-Reuter-Platz, einem der größten Kreisverkehre Berlins, häufen sich Spurwechselunfälle durch unklare Vorfahrtsregeln. Auch die Kantstraße mit ihren engen Fahrspuren und der Hardenbergstraße sind bekannte Unfallhäufungsstellen.",
      "Von unserem Standort in Prenzlauer Berg sind wir in ca. 25 Minuten in Charlottenburg. Wir kommen zu Ihnen — ob direkt am Ku'damm, in einer Tiefgarage in Westend oder in der Werkstatt in Wilmersdorf.",
    ],
    subdistricts: ["Kurfürstendamm", "Kantstraße", "Ernst-Reuter-Platz", "Westend", "Halensee", "Schmargendorf", "Wilmersdorf"],
    hotspots: [
      { location: "Kurfürstendamm / Joachimsthaler Str.", desc: "Taxi- und Lieferverdichtung erzeugen Ausparkschäden und Auffahrunfälle" },
      { location: "Ernst-Reuter-Platz (Kreisverkehr)", desc: "Große Ringstraße mit unklarer Vorfahrt für Einmündende" },
      { location: "Kantstraße / Savignyplatz", desc: "Enge Fahrspur mit hohem Fahrrad- und Lieferfahrzeuganteil" },
    ],
    distanceMin: 25,
    faqs: [
      { q: "Jemand hat mein Auto beim Einparken am Ku'damm zerkratzt. Was hilft mir jetzt?", a: "Ein Gutachten dokumentiert den Schaden vollständig — Kratzer, Beulen, Lackschäden. Wenn Sie den Verursacher ermitteln, kann er über seine Haftpflicht für den Schaden aufkommen. Wir erstellen das Gutachten und unterstützen Sie bei der Regulierung." },
      { q: "Ich war in einen Unfall am Ernst-Reuter-Platz verwickelt. Vorfahrt unklar. Wer haftet?", a: "Bei unklarer Haftung ist ein unabhängiges Gutachten besonders wichtig. Wir dokumentieren den Schadenhergang, den Aufprallwinkel und die Schäden präzise — das bildet die Grundlage für die Schuldfrage." },
      { q: "Fahren Sie auch nach Wilmersdorf und Halensee?", a: "Ja, wir decken Charlottenburg-Wilmersdorf vollständig ab — vom Ku'damm über Halensee bis nach Schmargendorf und Westend." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-schoeneberg", "kfz-sachverstaendiger-berlin-spandau", "kfz-sachverstaendiger-berlin-steglitz"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-steglitz",
    name: "Berlin Steglitz",
    nameShort: "Steglitz",
    title: "KFZ Gutachter Steglitz – kostenlos, in 24h",
    metaDescription: "Unfall in Steglitz? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort an der Schloßstraße & in Lichterfelde. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger steglitz", "kfz gutachter steglitz berlin", "unfallgutachten steglitz", "gutachter schloßstraße", "kfz gutachten lichterfelde"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-steglitz",
    intro: "Steglitz-Zehlendorf liegt im Berliner Südwesten — mit der Schloßstraße als größter Einkaufsmeile außerhalb des Zentrums und ruhigen Wohnlagen wie Lichterfelde und Zehlendorf. Wir sind in 30 Minuten vor Ort.",
    localText: [
      "Die Schloßstraße in Steglitz ist die meistbesuchte Einkaufsstraße im Berliner Südwesten — mit Straßenbahn, Bussen, engen Parkhausausfahrten und Lieferverkehr. Hier passieren besonders viele Parkschadensfälle und Abbiegeunfälle. Im südlichen Teil des Bezirks, in Lichterfelde und Zehlendorf, dominieren dagegen Unfälle auf schnellen Verbindungsstraßen wie der Teltower Chaussee und dem Schildhornweg.",
      "Wir fahren aus Prenzlauer Berg in ca. 30–35 Minuten nach Steglitz-Zehlendorf. Ob direkt an der Schloßstraße, in Lichterfelde-West oder in Zehlendorf — wir kommen zu Ihrem Fahrzeug und erstellen das Gutachten innerhalb von 24 Stunden.",
    ],
    subdistricts: ["Steglitz", "Lichterfelde", "Zehlendorf", "Lankwitz", "Schloßstraße", "Teltower Chaussee", "Dahlem"],
    hotspots: [
      { location: "Schloßstraße / Schildhornstraße", desc: "Einkaufszone mit Parkhausausfahrten und Lieferzonen" },
      { location: "Teltower Chaussee (stadtauswärts)", desc: "Schnelle Ausfallstraße mit Auffahrunfällen bei hoher Geschwindigkeit" },
      { location: "Lankwitzer Straße / Görzallee", desc: "Engstellen durch Baustellen und geparkte Fahrzeuge" },
    ],
    distanceMin: 32,
    faqs: [
      { q: "Kommen Sie auch nach Zehlendorf oder Dahlem?", a: "Ja, wir bedienen den gesamten Bezirk Steglitz-Zehlendorf — von der Schloßstraße bis nach Dahlem und Zehlendorf. Anfahrtszeit ca. 35–40 Minuten." },
      { q: "Mein Fahrzeug steht in einem Parkhaus an der Schloßstraße und wurde beschädigt. Was tun?", a: "Lassen Sie das Fahrzeug möglichst dort stehen, damit wir den Schaden vor Ort dokumentieren können. Sprechen Sie das Parkhauspersonal an — Kameras können den Verursacher identifizieren. Rufen Sie uns an: 0155 60003661." },
      { q: "Ich bin in Lichterfelde in ein stehendes Auto gefahren. Brauche ich trotzdem einen Gutachter?", a: "Als Verursacher sollten Sie einen Gutachter beauftragen, der den Schaden am gegnerischen Fahrzeug korrekt bewertet — so verhindern Sie überhöhte Forderungen der Gegenseite." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-schoeneberg", "kfz-sachverstaendiger-berlin-tempelhof", "kfz-sachverstaendiger-berlin-charlottenburg"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-spandau",
    name: "Berlin Spandau",
    nameShort: "Spandau",
    title: "KFZ Gutachter Spandau – kostenlos, in 24h",
    metaDescription: "Unfall in Spandau? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort an der Heerstraße & in der Altstadt. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger spandau", "kfz gutachter spandau berlin", "unfallgutachten spandau", "gutachter heerstraße spandau", "kfz gutachten spandauer altstadt"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-spandau",
    intro: "Spandau ist Berlins westlichster Bezirk — mit der Heerstraße als wichtigster Einfahrtsroute, der historischen Altstadt und dem Brunsbütteler Damm als Gewerbeachse. Wir sind in 35 Minuten bei Ihnen.",
    localText: [
      "Die Heerstraße ist die meistbefahrene Ausfallstraße im Westen Berlins — mit Pendlerverkehr Richtung Potsdam und Brandenburg, Autobahnzufahrten und langen Geraden, auf denen Auffahrunfälle bei hoher Geschwindigkeit typisch sind. Im gewerblich geprägten Spandau (Brunsbütteler Damm, Nonnendammallee) kommen Lkw-Unfälle und Schadensfälle durch schwere Fahrzeuge hinzu.",
      "Wir fahren aus Prenzlauer Berg ca. 35 Minuten nach Spandau. Auch wenn die Distanz länger ist als in anderen Bezirken — unser Service ist gleich: persönliche Betreuung, Gutachten in 24 Stunden, kostenlos bei Fremdverschulden.",
    ],
    subdistricts: ["Spandauer Altstadt", "Heerstraße", "Brunsbütteler Damm", "Gatow", "Kladow", "Wilhelmstadt", "Staaken"],
    hotspots: [
      { location: "Heerstraße / Spandauer Damm (Kreuz)", desc: "Autobahnähnlicher Abschnitt mit Auffahrunfällen bei Spurwechsel" },
      { location: "Brunsbütteler Damm (Gewerbegebiet)", desc: "Lkw-Dominanz mit Abbiegeunfällen an Einfahrten" },
      { location: "Carl-Schurz-Straße / Altstadt Spandau", desc: "Enge Altstadtgassen mit Parkschadensfällen" },
    ],
    distanceMin: 35,
    faqs: [
      { q: "Ist Spandau zu weit für Sie?", a: "Nein. Wir kommen in jeden Berliner Bezirk — auch nach Spandau, Gatow oder Kladow. Anfahrtszeit ca. 35–40 Minuten. Kostenlos bei Fremdverschulden." },
      { q: "Ich wurde auf der Heerstraße von hinten gerammt. Was sind meine Rechte?", a: "Bei einem Heckauffahrunfall liegt die Schuld in den meisten Fällen beim Auffahrenden. Sie haben Anspruch auf: Reparaturkosten oder Wiederbeschaffungswert, Nutzungsausfall, Mietwagenkosten und Minderwert. Wir dokumentieren alles und setzen Ihre Ansprüche durch." },
      { q: "Ein Lkw hat mein Auto in Spandau beschädigt. Ändert das die Schadensregulierung?", a: "Nein, das Verfahren ist dasselbe. Bei Lkw-Unfällen ist ein Gutachten sogar noch wichtiger, da Lkw-Versicherungen oft aggressiver verhandeln. Unser TÜV-zertifiziertes Gutachten schützt Sie davor." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-charlottenburg", "kfz-sachverstaendiger-berlin-reinickendorf"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-reinickendorf",
    name: "Berlin Reinickendorf",
    nameShort: "Reinickendorf",
    title: "KFZ Gutachter Reinickendorf – kostenlos, 24h",
    metaDescription: "Unfall in Reinickendorf? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort in Tegel & Wittenau. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger reinickendorf", "kfz gutachter reinickendorf berlin", "unfallgutachten tegel", "gutachter wittenau", "kfz gutachten reinickendorf"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-reinickendorf",
    intro: "Reinickendorf liegt im Berliner Norden — mit Tegel, Wittenau und dem Kurt-Schumacher-Damm als Hauptverkehrsachsen. Nach einem Unfall sind wir in 25 Minuten bei Ihnen.",
    localText: [
      "Der Kurt-Schumacher-Damm und der Eichborndamm sind die Verkehrsadern von Reinickendorf — stark frequentiert von Pendlern, die aus dem nördlichen Umland nach Berlin fahren. Besonders rund um den ehemaligen Flughafen Tegel und auf dem Holzhauser Damm kommt es zu typischen Pendler-Auffahrunfällen. In Wittenau und Borsigwalde dominieren Gewerbeverkehr und Lkw-Unfälle auf den breiten Werkszufahrten.",
      "Von Prenzlauer Berg aus erreichen wir Reinickendorf in ca. 20–30 Minuten — je nach Bezirksteil. Wir kommen zu Ihnen nach Tegel, Wittenau, Heiligensee oder Hermsdorf.",
    ],
    subdistricts: ["Tegel", "Wittenau", "Reinickendorf", "Heiligensee", "Hermsdorf", "Frohnau", "Borsigwalde", "Waidmannslust"],
    hotspots: [
      { location: "Kurt-Schumacher-Damm / Scharnweberstr.", desc: "Haupteinfallsachse mit Stau-Auffahrunfällen zu Stoßzeiten" },
      { location: "Eichborndamm (Gewerbegebiet)", desc: "Lkw-Schwerlastverkehr mit Abbiegeunfällen" },
      { location: "Alt-Tegel (Ortskern)", desc: "Enge Straßen mit hohem Fußgänger- und Radaufkommen" },
    ],
    distanceMin: 25,
    faqs: [
      { q: "Kommen Sie auch nach Frohnau oder Hermsdorf?", a: "Ja. Wir fahren in den gesamten Bezirk Reinickendorf — bis nach Frohnau und Heiligensee. Anfahrtszeit ca. 30–40 Minuten." },
      { q: "Ich hatte einen Unfall auf dem Kurt-Schumacher-Damm. Die Ampelphase war unklar. Was tun?", a: "Dokumentieren Sie die Kreuzung mit Fotos (Ampelstellung, Schilder, Fahrzeugposition). Wir können bei der Unfallrekonstruktion helfen und ein Gutachten erstellen, das die Schäden und den Unfallhergang rechtssicher festhält." },
      { q: "Mein Auto steht noch am Unfallort in Tegel. Kommen Sie auch direkt dorthin?", a: "Ja. Wir kommen direkt zum Unfallort — das ist oft am sinnvollsten, um den Schadenhergang vor Ort zu dokumentieren. Rufen Sie uns an: 0155 60003661." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-pankow", "kfz-sachverstaendiger-berlin-spandau", "kfz-sachverstaendiger-berlin-marzahn"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-marzahn",
    name: "Berlin Marzahn",
    nameShort: "Marzahn",
    title: "KFZ Gutachter Marzahn – kostenlos, in 24h",
    metaDescription: "Unfall in Marzahn-Hellersdorf? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort in Biesdorf & Kaulsdorf. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger marzahn", "kfz gutachter marzahn berlin", "unfallgutachten marzahn hellersdorf", "gutachter biesdorf", "kfz gutachten kaulsdorf"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-marzahn",
    intro: "Marzahn-Hellersdorf liegt im Berliner Osten — mit der Allee der Kosmonauten als Hauptachse, dem größten Plattenbaugebiet Berlins und ruhigeren Wohnlagen in Biesdorf und Kaulsdorf. Wir sind in 25 Minuten vor Ort.",
    localText: [
      "Die Allee der Kosmonauten und die Märkische Allee sind breite Stadtstraßen mit hohem Tempo und häufigen Auffahrunfällen — besonders an Ampelkreuzungen und Bushaltestellenbereichen. Marzahn-Hellersdorf hat zudem eine besonders hohe Dichte an Tiefgaragen in den Plattenbausiedlungen, was zu vielen Parkschadensfällen bei schlechter Beleuchtung führt. In Biesdorf und Kaulsdorf prägen Einfamilienhaus-Quartiere das Bild — hier passieren vor allem Unfälle auf schmalen Nebenstraßen.",
      "Wir erreichen Marzahn aus Prenzlauer Berg in ca. 25 Minuten. Wir kommen zu Ihnen — ob in der Plattenbausiedlung, im Gewerbegebiet Biesdorf-Süd oder in den ruhigen Straßen von Kaulsdorf.",
    ],
    subdistricts: ["Marzahn", "Hellersdorf", "Biesdorf", "Kaulsdorf", "Mahlsdorf", "Allee der Kosmonauten", "Märkische Allee"],
    hotspots: [
      { location: "Allee der Kosmonauten / Landsberger Allee", desc: "Breite Schnellstraße mit Auffahrunfällen durch Ampelstaus" },
      { location: "Märkische Allee / Marzahner Promenade", desc: "Knotenpunkt mit hohem Busaufkommen" },
      { location: "Tiefgaragen der WBG-Siedlungen", desc: "Häufige Parkschadensfälle durch enge Einfahrten und schlechte Beleuchtung" },
    ],
    distanceMin: 25,
    faqs: [
      { q: "Kommen Sie auch nach Mahlsdorf oder Kaulsdorf?", a: "Ja, wir fahren in den gesamten Bezirk Marzahn-Hellersdorf — von Marzahn über Biesdorf bis nach Mahlsdorf und Kaulsdorf. Anfahrtszeit ca. 25–35 Minuten." },
      { q: "Ich wurde in einer Tiefgarage in Marzahn beschädigt und der Verursacher ist weggefahren. Was nun?", a: "Das ist ein Fahrerflucht-Fall. Erstatten Sie Anzeige bei der Polizei und rufen Sie uns an. Wir dokumentieren den Schaden vollständig. Falls Kameraaufnahmen vorhanden sind, können wir bei der Aufklärung helfen." },
      { q: "Ist ein Gutachten bei kleinen Blechschäden in Marzahn sinnvoll?", a: "Ja — auch bei vermeintlich kleinen Schäden können versteckte Deformationen vorliegen, die sich erst später zeigen. Ein Gutachten sichert Ihre Ansprüche vollständig ab." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-lichtenberg", "kfz-sachverstaendiger-berlin-reinickendorf", "kfz-sachverstaendiger-berlin-koepenick"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-koepenick",
    name: "Berlin Köpenick",
    nameShort: "Köpenick",
    title: "KFZ Gutachter Köpenick – kostenlos, in 24h",
    metaDescription: "Unfall in Treptow-Köpenick? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort in Grünau & Schmöckwitz. ☎ 0155 60003661",
    keywords: ["kfz sachverständiger köpenick", "kfz gutachter köpenick berlin", "unfallgutachten treptow köpenick", "gutachter grünau", "kfz gutachten köpenick"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-koepenick",
    intro: "Treptow-Köpenick ist Berlins flächengrößter Bezirk — vom Treptower Park über die Altstadt Köpenick bis hinaus nach Grünau und Schmöckwitz. Nach einem Unfall sind wir in 25–35 Minuten bei Ihnen.",
    localText: [
      "Die Schnellerstraße und die Salvador-Allende-Straße sind die meistbefahrenen Verbindungsachsen in Treptow-Köpenick — mit typischen Pendlerunfällen auf langen Geraden und starkem Lieferverkehr im Gewerbegebiet Adlershof. In der Altstadt Köpenick, mit ihren engen Gassen und dem hohen Touristenaufkommen in Sommern, passieren vor allem Parkschadensfälle und Abbiegeunfälle.",
      "Wir kommen aus Prenzlauer Berg in 25–35 Minuten nach Treptow-Köpenick — je nach Bezirksteil. Für Grünau und Schmöckwitz planen Sie bitte etwas mehr Zeit ein. Das Gutachten ist überall innerhalb von 24 Stunden fertig.",
    ],
    subdistricts: ["Treptow", "Köpenick Altstadt", "Grünau", "Schmöckwitz", "Adlershof", "Oberschöneweide", "Niederschöneweide"],
    hotspots: [
      { location: "Schnellerstraße / Adlergestell", desc: "Lange Hauptachse mit Auffahrunfällen und Spurwechselkollisionen" },
      { location: "Altstadt Köpenick (Historischer Kern)", desc: "Enge Gassen mit Parkschadensfällen durch Touristenverkehr" },
      { location: "Adlershof (Wissenschaftsstadt)", desc: "Gewerbegebiet mit Lkw-Abbiegeunfällen" },
    ],
    distanceMin: 28,
    faqs: [
      { q: "Kommen Sie auch nach Grünau oder Schmöckwitz?", a: "Ja. Wir fahren in den gesamten Bezirk Treptow-Köpenick — bis nach Grünau und Schmöckwitz. Bitte rechnen Sie ca. 40–45 Minuten Anfahrt ein." },
      { q: "Ich hatte einen Unfall am Adlergestell. Wie schnell kommen Sie?", a: "In der Regel in 25–30 Minuten. Rufen Sie uns an: 0155 60003661. Wir kommen direkt zum Unfallort oder zur Werkstatt." },
      { q: "Mein Fahrzeug stand in der Altstadt Köpenick und wurde von einem Touristen beschädigt, der einfach weitergefahren ist. Was kann ich tun?", a: "Das ist ein Fahrerflucht-Fall. Erstatten Sie Anzeige bei der Polizei und sichern Sie alle Beweise (Fotos, Zeugen, Kameras). Wir erstellen das Gutachten für Ihre Kaskoversicherung oder zur Vorlage bei den Ermittlungen." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-lichtenberg", "kfz-sachverstaendiger-berlin-marzahn", "kfz-sachverstaendiger-berlin-neukoelln"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-lichtenberg",
    name: "Berlin Lichtenberg",
    nameShort: "Lichtenberg",
    title: "KFZ Gutachter Lichtenberg – kostenlos, 24h",
    metaDescription: "Unfall in Lichtenberg? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. Vor Ort in Fennpfuhl & Karlshorst. ☎ 0155 60003661",
    keywords: ["kfz gutachter lichtenberg", "kfz sachverständiger lichtenberg berlin", "unfallgutachten lichtenberg", "gutachter fennpfuhl", "kfz gutachten karlshorst"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-lichtenberg",
    intro: "Lichtenberg liegt direkt östlich von Prenzlauer Berg — mit der Landsberger Allee als Hauptachse, dem Fennpfuhl als dichtem Wohngebiet und Karlshorst als ruhigem Villenviertel. Wir sind in 15–20 Minuten bei Ihnen.",
    localText: [
      "Die Landsberger Allee ist eine der am stärksten befahrenen Ausfallstraßen Berlins — mit sechs Spuren, Straßenbahn, dichtem Busverkehr und vielen Kreuzungen mit komplexen Ampelphasen. Zwischen Lichtenberg-Zentrum und Hohenschönhausen häufen sich Auffahrunfälle an Ampeln und Fahrstreifenwechsel-Kollisionen. In Karlshorst und Rummelsburg, mit ihrer gemischten Wohn- und Gewerbebebauung, sind Parkschadensfälle und Abbiegeunfälle typisch.",
      "Lichtenberg ist einer unserer nächsten Bezirke — von der Prenzlauer Allee 88 sind wir in 15–20 Minuten im Bezirkskern. Wir kommen zu Ihnen, dokumentieren den Schaden und leiten die Schadensregulierung ein.",
    ],
    subdistricts: ["Fennpfuhl", "Rummelsburg", "Karlshorst", "Lichtenberg Zentrum", "Friedrichsfelde", "Hohenschönhausen", "Neu-Hohenschönhausen"],
    hotspots: [
      { location: "Landsberger Allee / Rhinstraße", desc: "6-spurige Kreuzung mit Straßenbahn und dichtem Ampelverkehr" },
      { location: "Frankfurter Allee (Lichtenberger Teil)", desc: "Verlängerung der Stadtautobahn mit Auffahrunfällen" },
      { location: "Karlshorster Straße / Treskowallee", desc: "Ruhige Villenviertelstraße mit unübersichtlichen Einmündungen" },
    ],
    distanceMin: 18,
    faqs: [
      { q: "Kommen Sie auch nach Hohenschönhausen?", a: "Ja. Wir decken den gesamten Bezirk Lichtenberg ab — von Fennpfuhl über Karlshorst bis nach Neu-Hohenschönhausen. Anfahrtszeit ca. 20–30 Minuten." },
      { q: "Ich hatte auf der Landsberger Allee einen Auffahrunfall. Was sind meine Ansprüche?", a: "Bei einem Auffahrunfall von hinten steht Ihnen zu: volle Reparaturkosten oder Wiederbeschaffungswert, Nutzungsausfall für jeden Tag ohne Fahrzeug, Mietwagenkosten und der Minderwert des Fahrzeugs. Wir dokumentieren alles." },
      { q: "Ist Gutachten Prenzl wirklich in der Nähe von Lichtenberg?", a: "Ja. Unser Büro in der Prenzlauer Allee 88 liegt direkt an der Grenze zu Lichtenberg — wir sind einer der nächstgelegenen Gutachter für den gesamten Bezirk." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-pankow", "kfz-sachverstaendiger-berlin-marzahn", "kfz-sachverstaendiger-berlin-weissensee", "kfz-sachverstaendiger-berlin-friedrichshain"],
  },

  // --- Neu am 21.08.2026 nach der Search-Console-Auswertung ---
  // Diese vier Gebiete hatten zusammen 1.872 Impressionen ohne passende Zielseite.
  // Die Anfragen liefen bis dahin auf die Startseite oder auf einen Nachbarbezirk.
  {
    slug: "kfz-sachverstaendiger-berlin-weissensee",
    name: "Berlin Weißensee",
    nameShort: "Weißensee",
    title: "KFZ Gutachter Weißensee – kostenlos, in 24h",
    metaDescription: "Unfall in Weißensee? Nur 10 Minuten von unserem Büro. Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
    keywords: ["kfz gutachter weißensee", "kfz sachverständiger weißensee", "unfallgutachten weißensee", "gutachter berliner allee", "kfz gutachten antonplatz"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-weissensee",
    intro: "Weißensee ist einer unserer nächsten Ortsteile. Von der Prenzlauer Allee 88 sind wir in etwa 10 Minuten am Antonplatz. Unfall auf der Berliner Allee, in der Langhansstraße oder an der Buschallee? Rufen Sie an, wir kommen zu Ihnen.",
    localText: [
      "Die Berliner Allee ist die Achse, an der in Weißensee fast alles passiert. Vier Fahrspuren, die Straßenbahn M4 in Mittellage, Linksabbieger ohne eigene Ampelphase und beidseitig parkende Fahrzeuge, die die Sicht auf den Gegenverkehr nehmen. Die häufigsten Fälle, die wir hier aufnehmen, sind Abbiegeunfälle mit der Tram und Auffahrunfälle im Rückstau vor dem Antonplatz.",
      "Abseits der Hauptachse sieht es anders aus. In der Langhansstraße, der Gustav-Adolf-Straße und rund um den Weißen See dominieren Parkschäden: enge Straßenquerschnitte, hoher Parkdruck und viele Fahrzeuge, die beim Ein- und Ausparken angerempelt werden. Oft ohne Zeugen und ohne Nachricht am Scheibenwischer. Genau diese Fälle brauchen eine belastbare Dokumentation, sonst zweifelt die Versicherung das Schadensbild an.",
      "Im Norden geht Weißensee über die Falkenberger Straße und die Indira-Gandhi-Straße nach Hohenschönhausen und Marzahn über. Dort steigt das Tempo, und die Unfälle werden entsprechend schwerer. Wir sind für den gesamten Ortsteil zuständig und kommen dorthin, wo Ihr Fahrzeug steht.",
    ],
    subdistricts: ["Antonplatz", "Weißer See", "Komponistenviertel", "Buschallee", "Berliner Allee", "Langhansstraße", "Pistoriusplatz", "Stadtrandsiedlung Malchow"],
    hotspots: [
      { location: "Berliner Allee / Indira-Gandhi-Straße", desc: "Linksabbieger kreuzen die Tram M4, häufige Kollisionen mit der Straßenbahn" },
      { location: "Antonplatz", desc: "Rückstau vor der Kreuzung, dadurch viele Auffahrunfälle im Stop-and-go" },
      { location: "Buschallee / Falkenberger Straße", desc: "Tempoanstieg Richtung Hohenschönhausen, schwerere Seitenkollisionen" },
    ],
    distanceMin: 10,
    faqs: [
      { q: "Wie schnell sind Sie in Weißensee vor Ort?", a: "In der Regel innerhalb von 10 bis 15 Minuten. Unser Büro liegt in der Prenzlauer Allee 88, das ist über die Ostseestraße eine kurze Strecke. Bei Anruf am Vormittag sehen wir Ihr Fahrzeug meist noch am selben Tag." },
      { q: "Ich hatte einen Unfall mit der Straßenbahn auf der Berliner Allee. Was gilt da?", a: "Bei Unfällen mit der BVG greift zusätzlich die Betriebsgefahr des Schienenfahrzeugs. Das heißt, selbst bei einer Teilschuld bekommen Sie häufig mehr ersetzt, als Sie erwarten. Voraussetzung ist ein Gutachten, das Anstoßstelle und Schadensverlauf sauber nachvollziehbar macht." },
      { q: "Mein Auto wurde beim Parken beschädigt und der Verursacher ist weg. Lohnt sich ein Gutachten?", a: "Wenn der Schaden über der Bagatellgrenze von rund 750 Euro liegt, ja. Wir dokumentieren das Schadensbild so, dass es gegenüber Ihrer Kaskoversicherung Bestand hat, und prüfen, ob die Anstoßspuren zu einer Fahrerflucht passen. Das ist für die Anzeige relevant." },
      { q: "Gehört Weißensee nicht zu Pankow?", a: "Ja, seit der Bezirksreform 2001 ist Weißensee ein Ortsteil des Bezirks Pankow. Für Ihr Gutachten spielt das keine Rolle. Wir sind in beiden Gebieten vor Ort, und der Ortsteil ist von unserem Büro aus sogar schneller erreichbar als Pankow-Zentrum." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-pankow", "kfz-sachverstaendiger-berlin-prenzlauer-berg", "kfz-sachverstaendiger-berlin-lichtenberg"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-hellersdorf",
    name: "Berlin Hellersdorf",
    nameShort: "Hellersdorf",
    title: "KFZ Gutachter Hellersdorf – kostenlos, in 24h",
    metaDescription: "Unfall in Hellersdorf, Kaulsdorf oder Mahlsdorf? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
    keywords: ["kfz gutachter hellersdorf", "kfz sachverständiger hellersdorf", "unfallgutachten hellersdorf", "kfz gutachter mahlsdorf", "kfz gutachten kaulsdorf"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-hellersdorf",
    intro: "Hellersdorf, Kaulsdorf und Mahlsdorf sind drei sehr unterschiedliche Ortsteile im Osten Berlins: Plattenbau, Siedlungshäuser und die B1/B5 als Durchgangsachse nach Brandenburg. Wir kommen zu Ihnen, unabhängig davon, wo das Fahrzeug steht.",
    localText: [
      "Die B1/B5 zwischen Biesdorf und der Stadtgrenze bei Hoppegarten ist die Hauptunfallstrecke im Gebiet. Auf dem Hultschiner Damm und in Alt-Mahlsdorf wechseln sich Tempo 50 und Tempo 30 ab, es gibt viele Grundstückszufahrten direkt an der Fahrbahn und dazu den Pendelverkehr aus dem Landkreis Märkisch-Oderland. Auffahrunfälle und Abbiegekollisionen mit einbiegenden Fahrzeugen sind hier der Regelfall.",
      "In Hellersdorf selbst, rund um die Hellersdorfer Straße, die Riesaer Straße und die Stendaler Straße, sieht das Schadensbild anders aus. Die Wohngebiete haben große Stellplatzanlagen und breite Erschließungsstraßen, entsprechend viele Rangier- und Parkschäden. Rund um die Helle Mitte kommt der Einkaufsverkehr dazu, mit den typischen Kollisionen beim Ausparken aus Querparkständen.",
      "Kaulsdorf und Mahlsdorf-Süd sind Einfamilienhausgebiete mit schmalen Straßen, teilweise ohne durchgehenden Gehweg und mit unübersichtlichen Kreuzungen ohne Vorfahrtsregelung. Rechts vor links wird dort regelmäßig zum Streitfall, und ohne Gutachten steht am Ende Aussage gegen Aussage.",
    ],
    subdistricts: ["Hellersdorf", "Kaulsdorf", "Mahlsdorf", "Helle Mitte", "Kaulsdorf-Nord", "Mahlsdorf-Süd", "Hönow-West", "Biesdorf-Nord"],
    hotspots: [
      { location: "B1/B5 Hultschiner Damm", desc: "Durchgangsverkehr aus Brandenburg mit vielen Grundstückszufahrten" },
      { location: "Hellersdorfer Straße / Stendaler Straße", desc: "Breite Kreuzung mit Straßenbahn und langen Ampelphasen" },
      { location: "Alt-Mahlsdorf / Bahnübergang", desc: "Rückstau vor der Schranke, Auffahrunfälle im Stop-and-go" },
    ],
    distanceMin: 30,
    faqs: [
      { q: "Kommen Sie auch bis nach Mahlsdorf?", a: "Ja. Wir decken Hellersdorf, Kaulsdorf und Mahlsdorf komplett ab. Die Anfahrt von der Prenzlauer Allee dauert je nach Verkehrslage 25 bis 35 Minuten. Der Termin kostet Sie bei einem unverschuldeten Unfall nichts, auch die Anfahrt nicht." },
      { q: "Lohnt sich ein eigener Gutachter, wenn die Versicherung schon einen geschickt hat?", a: "Der Gutachter der gegnerischen Versicherung arbeitet im Auftrag der Versicherung, nicht in Ihrem. Bei Fremdverschulden haben Sie das Recht, einen eigenen unabhängigen Sachverständigen zu beauftragen, und die Gegenseite trägt die Kosten. Das ist kein Sonderfall, sondern die Regel." },
      { q: "Ich hatte einen Unfall auf der B1 kurz vor der Stadtgrenze. Sind Sie da noch zuständig?", a: "Ja. Wir arbeiten in ganz Berlin und im angrenzenden Umland. Ob der Unfallort noch auf Berliner oder schon auf Brandenburger Gebiet liegt, ändert an Ihren Ansprüchen nichts." },
      { q: "Wie lange dauert es, bis ich das Gutachten habe?", a: "In der Regel liegt es innerhalb von 24 Stunden nach der Besichtigung vor. Auf Wunsch schicken wir es direkt an Ihren Anwalt und an die regulierende Versicherung." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-marzahn", "kfz-sachverstaendiger-berlin-lichtenberg", "kfz-sachverstaendiger-berlin-koepenick"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-treptow",
    name: "Berlin Treptow",
    nameShort: "Treptow",
    title: "KFZ Gutachter Treptow – kostenlos, in 24h",
    metaDescription: "Unfall in Treptow, Baumschulenweg oder Adlershof? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
    keywords: ["kfz gutachter treptow", "kfz sachverständiger treptow", "unfallgutachten treptow berlin", "kfz gutachter adlershof", "kfz gutachten baumschulenweg"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-treptow",
    intro: "Treptow reicht von Alt-Treptow an der Spree bis nach Altglienicke und Bohnsdorf an der Stadtgrenze. Dazwischen liegen die A113, der Technologiepark Adlershof und die Engstelle an der Elsenbrücke. Wir kommen dorthin, wo Ihr Fahrzeug steht.",
    localText: [
      "Die Elsenstraße und die Zufahrt zur Elsenbrücke sind seit Jahren die kritischste Stelle im Ortsteil. Durch die Bauarbeiten an der Brücke ist die Verkehrsführung verengt und wechselt immer wieder. Wer sich auf die Spurmarkierung von letzter Woche verlässt, findet sie diese Woche unter Umständen anders vor. Fahrstreifenwechsel-Kollisionen und Auffahrunfälle im zähen Verkehr sind dort unser häufigster Fall.",
      "Die zweite Achse ist das Adlergestell mit der parallel verlaufenden A113. An den Anschlussstellen Späthstraße, Adlershof und Stubenrauchstraße treffen Beschleunigungsstreifen auf dichten Verkehr. Auffahrunfälle beim Einfädeln enden hier oft mit erheblichem Schaden, weil die Geschwindigkeitsdifferenz größer ist als im Stadtverkehr. Rund um den Technologiepark Adlershof kommt morgens und nachmittags ein konzentrierter Berufsverkehr dazu.",
      "In Baumschulenweg, Johannisthal, Altglienicke und Bohnsdorf dominieren dagegen die üblichen Wohngebietsschäden: Parkrempler, Rangierschäden in engen Straßen und Kollisionen an unübersichtlichen Einmündungen. Auch in Alt-Treptow und Plänterwald, wo der Parkdruck rund um den Treptower Park hoch ist, nehmen wir überwiegend Parkschäden auf.",
    ],
    subdistricts: ["Alt-Treptow", "Plänterwald", "Baumschulenweg", "Johannisthal", "Adlershof", "Niederschöneweide", "Oberschöneweide", "Altglienicke", "Bohnsdorf"],
    hotspots: [
      { location: "Elsenstraße / Elsenbrücke", desc: "Wechselnde Verkehrsführung durch die Baustelle, viele Spurwechselunfälle" },
      { location: "Adlergestell / A113 Späthstraße", desc: "Auffahrunfälle beim Einfädeln mit hoher Geschwindigkeitsdifferenz" },
      { location: "Sterndamm / Groß-Berliner Damm", desc: "Berufsverkehr zum Technologiepark, Rückstau in beide Richtungen" },
    ],
    distanceMin: 20,
    faqs: [
      { q: "Deckt diese Seite auch Köpenick ab?", a: "Für Köpenick, Grünau und Schmöckwitz haben wir eine eigene Seite. Treptow und Köpenick bilden zwar einen gemeinsamen Bezirk, liegen aber weit auseinander. Wir sind in beiden Teilen vor Ort, die Anfahrtszeiten unterscheiden sich allerdings deutlich." },
      { q: "Mein Unfall war auf der A113. Ist das ein Sonderfall?", a: "Rechtlich nicht. Auf der Autobahn ist die Beweislage aber meist schwieriger, weil die Fahrzeuge geräumt werden, bevor jemand die Endstellung dokumentiert. Umso wichtiger sind Fotos vom Schadensbild und ein Gutachten, das die Anstoßrichtung technisch nachvollziehbar macht." },
      { q: "Wie schnell sind Sie in Adlershof?", a: "Von unserem Büro in der Prenzlauer Allee 88 sind es je nach Verkehrslage 20 bis 30 Minuten. Bei einem nicht fahrbereiten Fahrzeug kommen wir zum Standort, Sie müssen nichts organisieren." },
      { q: "Was kostet mich das Gutachten?", a: "Bei einem unverschuldeten Unfall nichts. Die Kosten trägt die Haftpflichtversicherung des Verursachers, wir rechnen direkt mit ihr ab. Bei Teilschuld wird anteilig nach der Haftungsquote abgerechnet, das klären wir vorher am Telefon." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-koepenick", "kfz-sachverstaendiger-berlin-neukoelln", "kfz-sachverstaendiger-berlin-friedrichshain"],
  },
  {
    slug: "kfz-sachverstaendiger-berlin-zehlendorf",
    name: "Berlin Zehlendorf",
    nameShort: "Zehlendorf",
    title: "KFZ Gutachter Zehlendorf – kostenlos, in 24h",
    metaDescription: "Unfall in Zehlendorf, Dahlem oder Wannsee? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
    keywords: ["kfz gutachter zehlendorf", "kfz sachverständiger zehlendorf", "unfallgutachten zehlendorf", "kfz gutachter dahlem", "kfz gutachten wannsee"],
    canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-zehlendorf",
    intro: "Zehlendorf, Dahlem, Nikolassee und Wannsee liegen im Südwesten Berlins, durchzogen von der AVUS und umgeben von Wald und Seen. Wir fahren die Strecke, auch wenn sie länger ist. Bei Fremdverschulden zahlen Sie dafür nichts.",
    localText: [
      "Die A115, die alte AVUS, prägt den Verkehr im gesamten Südwesten. An den Anschlussstellen Hüttenweg, Spanische Allee und Kleinmachnow entstehen regelmäßig Auffahrunfälle, weil der fließende Verkehr auf plötzlich stehende Kolonnen trifft. Der Fahrbahnbelag und die alte Trassenführung mit ihren engen Radien tun ihr Übriges. Schäden aus AVUS-Unfällen fallen im Schnitt deutlich höher aus als im Stadtverkehr.",
      "Im Ortskern Zehlendorf sind Teltower Damm, Clayallee und Potsdamer Chaussee die Hauptachsen. Die Kreuzung Clayallee mit der Argentinischen Allee ist wegen ihrer Größe und der langen Ampelphasen ein wiederkehrender Unfallort, vor allem bei Linksabbiegern. Rund um den Bahnhof Zehlendorf kommt der Parksuchverkehr dazu.",
      "In Dahlem, Nikolassee und Wannsee sieht es ganz anders aus. Villenstraßen mit hohem Baumbestand, dichten Hecken an den Grundstücksgrenzen und Einmündungen, an denen man den Querverkehr erst sieht, wenn man halb drin steht. Dazu kommen im Herbst und Winter Sturm- und Astschäden, die über die Kaskoversicherung laufen und die wir ebenso begutachten wie Unfallschäden.",
    ],
    subdistricts: ["Zehlendorf", "Dahlem", "Nikolassee", "Wannsee", "Schlachtensee", "Düppel", "Kohlhasenbrück", "Zehlendorf-West"],
    hotspots: [
      { location: "A115 AVUS, Anschluss Hüttenweg", desc: "Auffahrunfälle am Stauende mit hoher Schadenshöhe" },
      { location: "Clayallee / Argentinische Allee", desc: "Große Kreuzung, häufige Kollisionen beim Linksabbiegen" },
      { location: "Königstraße Richtung Glienicker Brücke", desc: "Enge Waldstrecke mit Gegenverkehr und Wildwechsel" },
    ],
    distanceMin: 35,
    faqs: [
      { q: "Zehlendorf liegt weit von Ihrem Büro entfernt. Kommen Sie trotzdem?", a: "Ja. Die Anfahrt dauert je nach Tageszeit 30 bis 45 Minuten, das ändert nichts an der Zuständigkeit. Bei einem unverschuldeten Unfall trägt die gegnerische Versicherung auch die Anfahrtskosten, für Sie entsteht kein Aufpreis." },
      { q: "Ein Ast ist auf mein Auto gefallen. Ist das ein Fall für einen Gutachter?", a: "Wenn der Schaden über der Bagatellgrenze liegt, ja. Sturm- und Astschäden laufen über die Teilkasko, und die reguliert erfahrungsgemäß genauer, wenn eine unabhängige Schadensfeststellung vorliegt. Wichtig: Fotografieren Sie den Ast am Fahrzeug, bevor Sie ihn entfernen." },
      { q: "Mein Unfall war auf der AVUS. Was ist da anders?", a: "Die Schadenshöhe. Bei Autobahngeschwindigkeit sind Deformationen an Längsträgern und Fahrwerk häufig, die man von außen nicht sieht. Wir prüfen deshalb auf der Hebebühne oder mit Messsystem, bevor wir eine Reparaturkalkulation abgeben." },
      { q: "Kann ich das Fahrzeug vorher in die Werkstatt bringen?", a: "Bringen Sie es hin, aber lassen Sie es noch nicht reparieren. Sobald der Schaden beseitigt ist, fehlt die Grundlage für die Bewertung, und die Versicherung kürzt. Wir kommen in die Werkstatt und begutachten dort." },
    ],
    neighborSlugs: ["kfz-sachverstaendiger-berlin-steglitz", "kfz-sachverstaendiger-berlin-schoeneberg", "kfz-sachverstaendiger-berlin-spandau"],
  },
];

export function getBezirkBySlug(slug: string): BezirkContent | undefined {
  return bezirkContent.find((b) => b.slug === slug);
}
