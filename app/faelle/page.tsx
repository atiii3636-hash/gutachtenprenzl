import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import { faelleSortiert } from "@/lib/faelle";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fallarchiv: echte Gutachten aus Berlin",
  description:
    "Anonymisierte Schadenfälle aus der täglichen Arbeit: Fahrzeug, Schadenbild und die Zahlen aus dem Gutachten. Von Gutachten Prenzl, TÜV-zertifiziert in Berlin.",
  path: "/faelle",
});

const breadcrumb = breadcrumbLd([{ name: "Fallarchiv", path: "/faelle" }]);

/** Das Archiv selbst als Liste, damit Google die Fälle als Sammlung versteht. */
const listeLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fallarchiv",
  url: `${SITE_URL}/faelle`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: faelleSortiert.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.titel,
      url: `${SITE_URL}/faelle/${f.slug}`,
    })),
  },
};

export default function FallArchiv() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listeLd) }} />
      <NavbarNeu />
      <div className="pt-16" />

      <section className="px-5 pt-16 pb-12 md:pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-5">Aus der Praxis</p>
          <h1 className="font-display font-black tracking-tight text-[clamp(30px,5.5vw,52px)] leading-[1.06] mb-6">
            Fallarchiv
          </h1>
          <p className="text-white/50 text-[17px] leading-relaxed">
            Echte Schadenfälle aus unserer Arbeit in Berlin, anonymisiert und mit den Zahlen,
            die am Ende im Gutachten standen. Keine Beispielrechnungen, keine Stockfotos.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="max-w-3xl mx-auto">
          {faelleSortiert.length === 0 ? (
            <p className="text-white/40 text-center text-[15px]">
              Die ersten Fälle stehen in Kürze hier.
            </p>
          ) : (
            <div className="space-y-5">
              {faelleSortiert.map((f) => (
                <Link
                  key={f.slug}
                  href={`/faelle/${f.slug}`}
                  className="group flex gap-5 bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
                >
                  {f.bilder && f.bilder.length > 0 && (
                    <div className="relative w-28 sm:w-44 shrink-0">
                      <Image
                        src={f.bilder[0].src}
                        alt={f.bilder[0].alt}
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="py-5 pr-5 min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-2">
                      {f.monat}
                      {f.bezirk && ` · ${f.bezirk}`}
                    </p>
                    <h2 className="font-display font-bold text-white text-[17px] sm:text-[19px] leading-snug mb-2">
                      {f.titel}
                    </h2>
                    <p className="text-white/45 text-[14px] leading-relaxed line-clamp-3">{f.teaser}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-white/40 group-hover:text-white/80 transition-colors mt-3">
                      Fall ansehen <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-14 text-center border-t border-white/8 pt-12">
            <p className="text-white/50 text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
              Ihr Fahrzeug wurde beschädigt? Wir nehmen den Schaden in Berlin vor Ort auf,
              das Gutachten liegt in der Regel innerhalb von 24 Stunden vor.
            </p>
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" /> 0155 60003661
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </div>
  );
}
