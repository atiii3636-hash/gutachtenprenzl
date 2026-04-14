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
    "/unfallgutachten-berlin",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#leistungen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#ablauf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#vorteile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...districtPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
