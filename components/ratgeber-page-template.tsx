import Link from "next/link";
import { Phone, MessageCircle, Check, Info } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { SITE_URL, PERSON_ID, BUSINESS_ID, breadcrumbLd, faqLd } from "@/lib/seo";
import type { RatgeberContent } from "@/lib/ratgeber-content";

// Gemeinsames Gerüst der Ratgeber-Artikel. Der Text kommt vollständig aus
// lib/ratgeber-content.ts.
//
// Das Article-Schema mit datePublished/dateModified ist hier Pflicht, nicht Kür:
// bei Honorartabellen und Rechtsthemen ist das Jahr das entscheidende
// Vertrauenssignal, und das Datum steht deshalb auch sichtbar im Artikel.
export default function RatgeberPageTemplate({ content }: { content: RatgeberContent }) {
  const path = `/${content.slug}`;
  const url = `${SITE_URL}${path}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    url,
    headline: content.metaTitle,
    description: content.metaDescription,
    inLanguage: "de-DE",
    datePublished: content.stand,
    dateModified: content.stand,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Atakan Arslan",
      jobTitle: "TÜV Rheinland zertifizierter Kfz-Sachverständiger",
    },
    publisher: { "@id": BUSINESS_ID },
  };

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Ratgeber", path: "/ratgeber" },
            { name: content.kicker, path },
          ]),
          articleLd,
          faqLd(content.faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Ratgeber", href: "/ratgeber" },
          { name: content.kicker, href: path },
        ]}
      />

      <PageHero
        kicker={content.kicker}
        title={content.title}
        titleAccent={content.titleAccent}
        lead={content.lead}
        image={content.image}
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ DIREKTANTWORT + STAND ============ */}
      <section className="px-5 py-14 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] p-6 md:p-7" data-reveal>
            <p className="text-white/80 text-[16px] leading-relaxed">{content.direktantwort}</p>
          </div>
          {/* Sichtbares Datum: muss zum dateModified im Article-Schema passen. */}
          <p className="text-white/35 text-[12.5px] mt-4" data-reveal>
            Stand: {content.standLabel} · Geprüft von Atakan Arslan, TÜV Rheinland zertifizierter
            Kfz-Sachverständiger (Zertifikat 0217466029)
          </p>
        </div>
      </section>

      {/* ============ ABSCHNITTE ============ */}
      {content.abschnitte.map((abschnitt, i) => (
        <section key={abschnitt.h2} className="px-5 py-16 md:py-20 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
              <span className="font-display font-black text-[#E11D2F] text-[15px]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h2
              className="font-display font-black tracking-tight text-center text-[clamp(24px,4vw,38px)] leading-[1.12] mb-8"
              data-reveal
            >
              {abschnitt.h2}
            </h2>

            <div className="space-y-5" data-reveal>
              {abschnitt.absaetze.map((a, k) => (
                <p key={k} className="text-white/60 text-[16px] leading-relaxed">
                  {a}
                </p>
              ))}
            </div>

            {abschnitt.liste && (
              <div className="space-y-3 mt-7" data-reveal>
                {abschnitt.liste.map((l) => (
                  <div key={l} className="flex gap-3.5 bg-white/[0.03] border border-white/8 rounded-xl p-5">
                    <Check size={17} className="text-[#22c55e] stroke-[3] flex-shrink-0 mt-0.5" />
                    <p className="text-white/70 text-[14.5px] leading-relaxed">{l}</p>
                  </div>
                ))}
              </div>
            )}

            {abschnitt.hinweis && (
              <div
                className="mt-7 rounded-xl border border-[#E11D2F]/25 bg-[#E11D2F]/[0.06] p-6 flex gap-4"
                data-reveal
              >
                <Info size={18} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
                <p className="text-white/75 text-[15px] leading-relaxed">{abschnitt.hinweis}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ============ FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12"
            data-reveal
          >
            Häufige Fragen.
          </h2>
          <FaqListe faqs={content.faqs} />
          <p className="text-white/40 text-[14px] text-center mt-8" data-reveal>
            Alle Fragen rund um das Kfz-Gutachten finden Sie auf unserer{" "}
            <Link href="/faq" className="text-[#E11D2F] hover:underline font-semibold">
              FAQ-Seite
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============ VERWANDTE SEITEN ============ */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Weiterlesen
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" data-reveal>
            {content.verwandt.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 rounded-xl p-5 transition-all hover:-translate-y-0.5"
              >
                <p className="font-display font-bold text-[15.5px] mb-1 group-hover:text-[#E11D2F] transition-colors">
                  {l.label}
                </p>
                <p className="text-white/40 text-[12.5px]">{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4">
            Unsicher, was für Ihren Fall gilt?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein Anruf, zwei Minuten, ehrliche Antwort. Die Ersteinschätzung kostet nichts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FAF54] text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              Kostenlose Ersteinschätzung
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
