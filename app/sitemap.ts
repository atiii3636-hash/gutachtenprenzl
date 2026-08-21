import { MetadataRoute } from "next";

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
    "/kfz-gutachter-lichtenberg",
    "/kfz-sachverstaendiger-berlin",
    "/kfz-gutachter-berlin",
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
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...districtPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...neueSeiten.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
