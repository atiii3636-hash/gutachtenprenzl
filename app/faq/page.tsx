import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { faqKatalog, alleFaqFragen } from "@/lib/faq-katalog";

const PATH = "/faq";

export const metadata: Metadata = pageMetadata({
  title: "Häufige Fragen zum Kfz-Gutachten in Berlin",
  description:
    "Wer zahlt das Kfz-Gutachten, wie lange dauert es, welche Rechte haben Sie gegenüber der Versicherung? Antworten vom TÜV-zertifizierten Sachverständigen.",
  path: PATH,
  keywords: [
    "kfz gutachten fragen",
    "wer zahlt kfz gutachter",
    "unfallgutachten faq",
    "kfz sachverständiger berlin fragen",
    "versicherung kürzt gutachten",
  ],
});

export default function FaqSeite() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Häufige Fragen", path: PATH }]),
          // Alle Blöcke in einem FAQPage-Objekt: Google erwartet ein Schema je
          // Seite, nicht eines je Abschnitt.
          faqLd(alleFaqFragen),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Häufige Fragen", href: PATH }]} />

      <PageHero
        kicker="Häufige Fragen"
        title="Alles, was Sie nach"
        titleAccent="einem Unfall wissen müssen."
        lead="Wer zahlt, wie lange dauert es, was steht Ihnen zu. Hier stehen die Antworten, die sonst niemand freiwillig gibt — sortiert nach Thema."
        image="/foto4.jpg"
        ctaLabel="Frage stellen"
      />

      {/* ============ SPRUNGMARKEN ============ */}
      <section className="px-5 pb-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Themen" className="flex flex-wrap justify-center gap-2" data-reveal>
            {faqKatalog.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="bg-white/[0.04] border border-white/10 hover:border-[#E11D2F]/50 hover:text-white text-white/60 text-[13px] font-semibold px-4 py-2 rounded-full transition-colors"
              >
                {b.titel}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ============ THEMENBLÖCKE ============ */}
      {faqKatalog.map((block, i) => (
        <section
          key={block.id}
          id={block.id}
          /* scroll-mt: die Navigationsleiste ist fest, ohne den Abstand
             verschwindet die Überschrift beim Sprung darunter */
          className="px-5 py-16 md:py-20 border-t border-white/6 scroll-mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
              <span className="font-display font-black text-[#E11D2F] text-[15px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                {block.fragen.length} Fragen
              </span>
            </div>
            <h2
              className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
              data-reveal
            >
              {block.titel}
            </h2>
            <p className="text-white/45 text-[15.5px] leading-relaxed text-center max-w-xl mx-auto mb-10" data-reveal>
              {block.intro}
            </p>
            <FaqListe faqs={block.fragen} />
          </div>
        </section>
      ))}

      {/* ============ WEITERFÜHREND ============ */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Ausführlich nachlesen
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" data-reveal>
            {[
              { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Was ein Gutachten kostet" },
              { href: "/versicherung-kuerzt-gutachten", label: "Kürzung durch Versicherung", sub: "Was Sie dagegen tun" },
              { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall", sub: "Tagessätze A bis L" },
              { href: "/ratgeber", label: "Alle Ratgeber", sub: "Wissen zum Schadenrecht" },
            ].map((l) => (
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
            Ihre Frage war nicht dabei?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Rufen Sie an. Die Ersteinschätzung kostet nichts, auch wenn daraus kein Auftrag wird.
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
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
