import type { Metadata } from "next";
import LeistungPageTemplate from "@/components/leistung-page-template";
import { getLeistung } from "@/lib/leistung-content";
import { pageMetadata } from "@/lib/seo";

const content = getLeistung("oldtimer-gutachten-berlin");

export const metadata: Metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/oldtimer-gutachten-berlin",
  keywords: content.keywords,
});

export default function Seite() {
  return <LeistungPageTemplate content={content} />;
}
