import { MetadataRoute } from "next";
import lastmodMap from "@/lib/lastmod.json";

// lastmod kommt aus lib/lastmod.json: je Seite das Datum ihres letzten Commits,
// erzeugt von scripts/gen-lastmod.mjs. Frueher stand hier `new Date()` zur
// Build-Zeit — dann trugen alle URLs denselben Zeitstempel und meldeten bei
// jedem Deploy "gerade eben geaendert". Google stellte daraufhin alles neu in
// die Crawl-Warteschlange (23 Seiten hingen am 21.08.2026 in "Gefunden — zurzeit
// nicht indexiert"). Echte Daten je Seite loesen genau das.
// Nach inhaltlichen Aenderungen: node scripts/gen-lastmod.mjs
const lastmod: Record<string, string> = lastmodMap;

// Ohne bekanntes Datum lieber kein lastmod als ein erfundenes.
function mod(path: string) {
  const d = lastmod[path === "" ? "/" : path];
  return d ? { lastModified: d } : {};
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gutachtenprenzl.de";

  const districtPages = [
    "/kfz-sachverstaendiger-berlin-mitte",
    "/kfz-sachverstaendiger-berlin-charlottenburg",
    "/kfz-sachverstaendiger-berlin-friedrichshain",
    "/kfz-sachverstaendiger-berlin-kreuzberg",
    "/kfz-sachverstaendiger-berlin-neukoelln",
    "/kfz-sachverstaendiger-berlin-schoeneberg",
    "/kfz-sachverstaendiger-berlin-tempelhof",
    "/kfz-sachverstaendiger-berlin-steglitz",
    "/kfz-sachverstaendiger-berlin-spandau",
    "/kfz-sachverstaendiger-berlin-reinickendorf",
    "/kfz-sachverstaendiger-berlin-marzahn",
    "/kfz-sachverstaendiger-berlin-koepenick",
    "/kfz-sachverstaendiger-berlin-pankow",
    "/kfz-sachverstaendiger-berlin-prenzlauer-berg",
    // Lichtenberg lief bis 21.08.2026 auf /kfz-gutachter-lichtenberg (301 steht).
    "/kfz-sachverstaendiger-berlin-lichtenberg",
    // Neu 21.08.2026: Bezirke mit Nachfrage in der Search Console, aber ohne Zielseite.
    "/kfz-sachverstaendiger-berlin-hellersdorf",
    "/kfz-sachverstaendiger-berlin-treptow",
    "/kfz-sachverstaendiger-berlin-zehlendorf",
    "/kfz-sachverstaendiger-berlin-weissensee",
    "/kfz-sachverstaendiger-berlin",
    "/unfallgutachten-berlin",
    "/heckauffahrunfall-berlin",
    "/parkschaden-gutachten-berlin",
    "/totalschaden-gutachten-berlin",
    "/kosten-kfz-gutachten-berlin",
    "/eigener-gutachter-oder-versicherungsgutachter",
    "/nutzungsausfall-tabelle-berlin",
  ];

  const blogPages = [
    "/blog",
    "/blog/was-tun-nach-unfall-berlin",
    "/blog/recht-auf-eigenen-gutachter",
    "/blog/parkschaden-was-tun",
  ];

  // Seiten aus dem Redesign vom 20.08.2026. Bestehende URLs bleiben unverändert,
  // diese kommen zusätzlich dazu.
  const neueSeiten = [
    "/leistungen",
    "/schadengutachten",
    "/wertgutachten",
    "/wertminderung",
    "/restwertermittlung",
    "/standorte",
    "/flotten-partner",
    "/partner-werden",
    "/ratgeber",
    "/130-prozent-regelung",
    "/fiktive-abrechnung",
    "/kurzgutachten-berlin",
  ];

  // Ausbau 18.09.2026: Landingpage, zentrale FAQ, Fahrzeugklassen- und
  // Spezialgutachten-Seiten sowie die neuen Ratgeber-Artikel.
  const ausbau2026 = [
    "/kfz-gutachten-berlin",
    "/faq",
    "/motorradgutachten-berlin",
    "/wohnmobil-gutachten-berlin",
    "/lkw-gutachten-berlin",
    "/oldtimer-gutachten-berlin",
    "/leasinggutachten-berlin",
    "/kaskogutachten-berlin",
    "/beweissicherungsgutachten-berlin",
    "/versicherung-kuerzt-gutachten",
    "/vorschaden-altschaden-gutachten",
    "/werkstattbindung-versicherung",
    "/mietwagen-nach-unfall",
    "/bagatellschaden-grenze",
    "/wiederbeschaffungswert-berechnen",
    "/kostenvoranschlag-oder-gutachten",
  ];

  return [
    {
      url: baseUrl,
      ...mod("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      ...mod("/ueber-uns"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      ...mod("/kontakt"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...districtPages.map((path) => ({
      url: `${baseUrl}${path}`,
      ...mod(path),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      ...mod(path),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...neueSeiten.map((path) => ({
      url: `${baseUrl}${path}`,
      ...mod(path),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...ausbau2026.map((path) => ({
      url: `${baseUrl}${path}`,
      ...mod(path),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/impressum`,
      ...mod("/impressum"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      ...mod("/datenschutz"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
