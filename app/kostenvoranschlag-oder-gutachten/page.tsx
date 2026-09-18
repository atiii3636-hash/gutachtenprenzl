import type { Metadata } from "next";
import RatgeberPageTemplate from "@/components/ratgeber-page-template";
import { getRatgeber } from "@/lib/ratgeber-content";
import { pageMetadata } from "@/lib/seo";

const content = getRatgeber("kostenvoranschlag-oder-gutachten");

export const metadata: Metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/kostenvoranschlag-oder-gutachten",
  keywords: content.keywords,
});

export default function Seite() {
  return <RatgeberPageTemplate content={content} />;
}
