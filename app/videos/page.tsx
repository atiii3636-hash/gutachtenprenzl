import Link from "next/link";
import { Phone } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import VideoGitter from "@/components/video-gitter";
import { VIDEOS, isoDauer, KANAL } from "@/lib/videos";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { PHONE_HREF } from "@/lib/contact";

export const metadata = pageMetadata({
  title: "Videos: Schadenaufnahme und Gutachten erklärt",
  description:
    "Kurze Videos aus der täglichen Arbeit als Kfz-Sachverständiger in Berlin: verdeckte Schäden sichtbar machen, Totalschaden oder Reparatur, was die Versicherung zahlt.",
  path: "/videos",
});

const breadcrumb = breadcrumbLd([{ name: "Videos", path: "/videos" }]);

/** Die Sammlung als Liste, damit Google die Videos als Zusammenhang versteht. */
const listeLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Videos von Gutachten Prenzl",
  url: `${SITE_URL}/videos`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: VIDEOS.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.titel,
        description: v.beschreibung,
        thumbnailUrl: [
      `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    ],
        uploadDate: v.datum,
        duration: isoDauer(v.sekunden),
        contentUrl: `https://www.youtube.com/shorts/${v.id}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
        publisher: {
          "@type": "Organization",
          name: "Gutachten Prenzl",
          url: SITE_URL,
        },
      },
    })),
  },
};

export default function VideoSeite() {
  return (
    <main className="bg-[#050507] min-h-screen">
      <NavbarNeu />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listeLd) }}
      />

      <section className="px-5 pt-16 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2F] animate-pulse" />
            Aus der täglichen Arbeit
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            Schadenaufnahme<br />
            <span className="text-[#E11D2F]">im Video</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Was bei einer Begutachtung wirklich passiert: verdeckte Schäden unter
            Kontrastpulver, die Rechnung hinter Totalschaden oder Reparatur, und
            warum die Schätzung der Versicherung selten die ganze Summe ist.
          </p>
        </div>
      </section>

      <VideoGitter videos={VIDEOS} />

      <section className="px-5 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-4">
            Selbst einen Schaden?
          </h2>
          <p className="text-white/60 mb-7">
            Bei unverschuldetem Unfall zahlt die gegnerische Versicherung das
            Gutachten. Wir kommen zu Ihnen, in ganz Berlin, Gutachten in 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 hover:border-white/30 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all"
            >
              Alle Leistungen
            </Link>
          </div>
          <p className="text-white/35 text-xs mt-6">
            Alle Videos auch auf{" "}
            <a href={KANAL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">
              YouTube
            </a>
            .
          </p>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
