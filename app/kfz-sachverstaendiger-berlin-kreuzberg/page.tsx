import type { Metadata } from "next";
import { getBezirkBySlug } from "@/lib/bezirk-content";
import BezirkPageTemplate from "@/components/bezirk-page-template";

const content = getBezirkBySlug("kfz-sachverstaendiger-berlin-kreuzberg")!;

export const metadata: Metadata = {
  title: content.title,
  description: content.metaDescription,
  alternates: { canonical: content.canonical },
  keywords: content.keywords,
};

export default function LandingPage() {
  return <BezirkPageTemplate content={content} />;
}
