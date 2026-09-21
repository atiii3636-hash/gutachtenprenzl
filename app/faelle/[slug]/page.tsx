import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import FallKarte from "@/components/fall-karte";
import { faelle, faelleSortiert, fallBySlug } from "@/lib/faelle";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return faelle.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const fall = fallBySlug(params.slug);
  if (!fall) return {};
  return pageMetadata({
    title: fall.titel,
    description: fall.teaser,
    path: `/faelle/${fall.slug}`,
    image: fall.bilder?.[0]?.src ?? "/og-image.jpg",
  });
}

export default function FallSeite({ params }: { params: { slug: string } }) {
  const fall = fallBySlug(params.slug);
  if (!fall) notFound();

  const url = `${SITE_URL}/faelle/${fall.slug}`;

  const breadcrumb = breadcrumbLd([
    { name: "Fallarchiv", path: "/faelle" },
    { name: fall.titel, path: `/faelle/${fall.slug}` },
  ]);

  // Article statt Report: Es ist ein redaktioneller Text über einen Fall,
  // nicht das Gutachten selbst. Das Gutachten wird nicht veröffentlicht.
  const artikelLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fall.titel,
    description: fall.teaser,
    url,
    datePublished: fall.veroeffentlicht,
    dateModified: fall.veroeffentlicht,
    ...(fall.bilder?.length ? { image: fall.bilder.map((b) => `${SITE_URL}${b.src}`) } : {}),
    author: { "@type": "Organization", name: "Gutachten Prenzl", url: SITE_URL },
    publisher: {
      "@type": "LocalBusiness",
      name: "Gutachten Prenzl",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-512.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // Drei weitere Fälle, damit keine Seite als Sackgasse endet.
  const weitere = faelleSortiert.filter((f) => f.slug !== fall.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050507]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artikelLd) }} />
      <NavbarNeu />
      <div className="pt-16" />

      <article className="px-5 pt-14 pb-20 md:pt-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/faelle"
            className="inline-flex items-center gap-2 text-[13px] text-white/35 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Fallarchiv
          </Link>

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/35 mb-4">
            {fall.monat}
            {fall.bezirk && ` · ${fall.bezirk}`}
          </p>
          <h1 className="font-display font-black tracking-tight text-[clamp(27px,4.8vw,46px)] leading-[1.07] mb-5">
            {fall.titel}
          </h1>
          <p className="text-white/50 text-[17px] leading-relaxed mb-12">{fall.teaser}</p>

          <FallKarte fall={fall} />

          {fall.bezirkSlug && fall.bezirk && (
            <p className="text-white/45 text-[15px] leading-relaxed mt-10">
              Weitere Fälle und Informationen zur Schadenaufnahme in diesem Bezirk:{" "}
              <Link href={`/${fall.bezirkSlug}`} className="text-white underline underline-offset-4 hover:text-white/70">
                Kfz-Gutachter {fall.bezirk}
              </Link>
              .
            </p>
          )}

          <div className="mt-12 pt-10 border-t border-white/8 text-center">
            <h2 className="font-display font-bold text-[20px] mb-3">Ähnlicher Schaden an Ihrem Fahrzeug?</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
              Wir nehmen den Schaden in ganz Berlin vor Ort auf. Bei unverschuldetem Unfall
              trägt die Kosten des Gutachtens in aller Regel die gegnerische Versicherung.
            </p>
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" /> 0155 60003661
            </a>
          </div>

          {weitere.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-6">Weitere Fälle</p>
              <div className="space-y-3">
                {weitere.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/faelle/${f.slug}`}
                    className="block bg-white/[0.03] border border-white/8 rounded-xl px-5 py-4 hover:border-white/20 transition-colors"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/30 mb-1.5">{f.monat}</p>
                    <p className="font-display font-bold text-white text-[16px] leading-snug">{f.titel}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <FooterNeu />
    </div>
  );
}
