import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, AlertTriangle, ChevronRight, MapPin } from "lucide-react";
import type { BezirkContent } from "@/lib/bezirk-content";
import { bezirkContent } from "@/lib/bezirk-content";

interface Props {
  content: BezirkContent;
}

export default function BezirkPageTemplate({ content }: Props) {
  const { name, nameShort, intro, localText, subdistricts, hotspots, faqs, neighborSlugs, slug } = content;

  const neighbors = neighborSlugs
    .map((s) => bezirkContent.find((b) => b.slug === s))
    .filter((b): b is BezirkContent => b !== undefined);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://gutachtenprenzl.de" },
      { "@type": "ListItem", position: 2, name: "KFZ Sachverständiger Berlin", item: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin" },
      { "@type": "ListItem", position: 3, name: `KFZ Sachverständiger ${name}`, item: `https://gutachtenprenzl.de/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-[#080D14]">

        {/* Breadcrumb */}
        <nav className="bg-[#080D14]/80 px-5 pt-5 pb-0" aria-label="Breadcrumb">
          <div className="max-w-3xl mx-auto">
            <ol className="flex items-center flex-wrap gap-1 text-[12px] text-white/30" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-white/60 transition-colors" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li><ChevronRight size={10} className="mx-1" /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/kfz-sachverstaendiger-berlin" className="hover:text-white/60 transition-colors" itemProp="item"><span itemProp="name">KFZ Sachverständiger Berlin</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li><ChevronRight size={10} className="mx-1" /></li>
              <li className="text-white/55" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative px-5 pt-12 pb-14 overflow-hidden">
          <Image
            src="/hero-accident.jpg"
            alt={`KFZ Sachverständiger bei der Schadensbegutachtung in ${name}`}
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D14]/60 to-[#080D14]" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              TÜV-Zertifiziert · Antwort in 30 Minuten
            </div>

            <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
              KFZ Sachverständiger<br />
              <span className="text-[#E11D2F]">{name}</span>
            </h1>

            <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
              {intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all"
              >
                <Phone size={18} />
                Jetzt anrufen: 0155 60003661
              </a>
              <a
                href="https://wa.me/4915560003661"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { val: "24h", label: "Gutachten" },
                { val: "0 €", label: "Bei Fremdverschulden" },
                { val: "TÜV", label: "Zertifiziert" },
                { val: "5,0★", label: "Google Bewertung" },
              ].map(({ val, label }) => (
                <div key={val} className="text-center">
                  <p className="font-display font-black text-white text-[28px] leading-none">{val}</p>
                  <p className="text-white/35 text-[11px] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white px-5 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-10">
              Ihr KFZ Gutachter in {name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten. Sie zahlen 0 €." },
                { icon: Clock, title: "Gutachten in 24 Stunden", text: `Wir kommen direkt nach ${name} — nach Hause, in die Werkstatt oder zum Unfallort.` },
                { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Anerkannt von allen Versicherungen." },
                { icon: Star, title: "5,0 Sterne auf Google", text: "Über 40 echte Bewertungen von Berliner Kunden. Transparent und unabhängig." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                  <div className="w-10 h-10 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#E11D2F]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#080D14] text-[14px] mb-1">{title}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotspots — unique per Bezirk */}
        <section className="bg-[#080D14] px-5 py-14 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-2">
              Unfallschwerpunkte in {name}
            </h2>
            <p className="text-white/40 text-[14px] mb-8">Orte mit erhöhtem Unfallrisiko — wir kennen sie alle.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {hotspots.map((h) => (
                <div key={h.location} className="bg-white/4 border border-white/8 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} className="text-[#E11D2F] flex-shrink-0" />
                    <span className="font-bold text-white text-[13px] leading-snug">{h.location}</span>
                  </div>
                  <p className="text-white/45 text-[12px] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local content + Subdistricts */}
        <section className="bg-white px-5 py-14 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-6">
              KFZ Gutachter in {name}
            </h2>
            {localText.map((para, i) => (
              <p key={i} className="text-gray-600 text-[15px] leading-relaxed mb-4">{para}</p>
            ))}

            {/* Subdistricts */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <MapPin size={12} />
                Wir sind auch in diesen Ortsteilen vor Ort
              </p>
              <div className="flex flex-wrap gap-2">
                {subdistricts.map((sub) => (
                  <span key={sub} className="text-[13px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#080D14] px-5 py-14 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-8">
              Häufige Fragen — {nameShort}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <p className="font-bold text-white text-[15px] mb-2">{faq.q}</p>
                  <p className="text-white/55 text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighbor Bezirke — internal linking */}
        {neighbors.length > 0 && (
          <section className="bg-white px-5 py-10 border-t border-gray-100">
            <div className="max-w-3xl mx-auto">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                KFZ Sachverständiger in benachbarten Bezirken
              </p>
              <div className="flex flex-wrap gap-3">
                {neighbors.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#080D14] bg-gray-50 border border-gray-200 hover:border-[#E11D2F] hover:text-[#E11D2F] px-4 py-2 rounded-xl transition-colors"
                  >
                    <ChevronRight size={13} />
                    KFZ Gutachter {n.nameShort}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-[#E11D2F] px-5 py-14 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
              Jetzt kostenlos anfragen
            </h2>
            <p className="text-white/80 text-[15px] mb-8">
              Schaden melden, Foto hochladen — wir melden uns in 30 Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <Phone size={18} />
                0155 60003661
              </a>
              <Link
                href="/#schaden"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-white/10"
              >
                Schaden online melden
              </Link>
            </div>
          </div>
        </section>

        {/* Footer minimal */}
        <div className="bg-[#080D14] px-5 py-6 text-center">
          <p className="text-white/25 text-[12px]">
            © 2026 Gutachten Prenzl · Atakan Arslan ·{" "}
            <Link href="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
            {" · "}
            <Link href="/datenschutz" className="hover:text-white/50 transition-colors">Datenschutz</Link>
          </p>
        </div>

      </div>
    </>
  );
}
