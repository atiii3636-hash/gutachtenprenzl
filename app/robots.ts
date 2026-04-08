import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gutachtenprenzl.de/sitemap.xml",
    host: "https://gutachtenprenzl.de",
  };
}
