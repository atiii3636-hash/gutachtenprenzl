import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, AlertTriangle, ChevronRight, MapPin, Euro, Car, Gauge, FileText } from "lucide-react";
import StandortKarte from "@/components/standort-karte";
import type { BezirkContent } from "@/lib/bezirk-content";
import { bezirkContent } from "@/lib/bezirk-content";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";

interface Props {
  content: BezirkContent;
}

export default function BezirkPageTemplate({ content }: Props) {
  const { name, nameShort, intro, localText, subdistricts, hotspots, distanceMin, faqs, neighborSlugs, slug } = content;

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
                href={WHATSAPP_URL}
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
                { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von Versicherungen im Regelfall anerkannt." },
                { icon: Star, title: "5,0 Sterne auf Google", text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden. Transparent und unabhängig.` },
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

        {/* Ablauf — nutzt Bezirksdaten (Anfahrtszeit, Ortsteile), variiert also je Seite */}
        <section className="bg-[#080D14] px-5 py-14 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-3">
              So läuft es ab in {nameShort}
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8">
              Von Ihrem Anruf bis zum fertigen Gutachten vergehen in der Regel keine
              24 Stunden. Sie müssen dafür nichts vorbereiten und nichts vorstrecken.
            </p>
            <ol className="space-y-5">
              {[
                {
                  t: "Sie rufen an",
                  d: `Schildern Sie kurz, was passiert ist. Wir sagen Ihnen sofort, ob sich ein Gutachten lohnt und wer es bezahlt. Das Gespräch kostet nichts und verpflichtet zu nichts.`,
                },
                {
                  t: `Wir kommen zu Ihnen nach ${nameShort}`,
                  d: `Aus unserem Büro an der Prenzlauer Allee sind wir in rund ${distanceMin} Minuten bei Ihnen — egal ob in ${subdistricts.slice(0, 3).join(", ")} oder einem anderen Ortsteil. Zu Hause, in der Werkstatt oder direkt am Unfallort.`,
                },
                {
                  t: "Wir nehmen den Schaden auf",
                  d: "Fotoserie, Vermessung, bei Bedarf demontieren wir Verkleidungen, um verdeckte Schäden zu finden. Genau die werden bei einer reinen Sichtprüfung gerne übersehen.",
                },
                {
                  t: "Sie bekommen das Gutachten",
                  d: "In der Regel am nächsten Werktag, digital und auf Wunsch gedruckt. Darin stehen Reparaturkosten, Wiederbeschaffungswert, Wertminderung und Nutzungsausfall.",
                },
                {
                  t: "Wir sprechen mit der Versicherung",
                  d: "Auf Wunsch übernehmen wir die Kommunikation mit der gegnerischen Versicherung, damit Sie sich darum nicht kümmern müssen.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E11D2F] text-white font-display font-black text-[14px] flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white text-[15px] mb-1">{s.t}</p>
                    <p className="text-white/55 text-[14px] leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Wer zahlt — die meistgestellte Frage, bisher auf keiner Bezirksseite beantwortet */}
        <section className="bg-white px-5 py-14 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-6">
              Wer zahlt Ihr Gutachten?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#080D14] text-[16px] mb-2">
                  Unverschuldeter Unfall: Sie zahlen nichts
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Hat jemand anderes den Unfall verursacht, trägt dessen
                  Haftpflichtversicherung die Kosten für das Gutachten. Das ist kein
                  Entgegenkommen, sondern Teil Ihres Schadenersatzanspruchs. Sie dürfen
                  Ihren Gutachter dabei frei wählen, die gegnerische Versicherung darf
                  Ihnen keinen vorschreiben. Wir rechnen direkt mit ihr ab, Sie müssen
                  nichts vorstrecken.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#080D14] text-[16px] mb-2">
                  Teilschuld: anteilig
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Bei geteilter Schuld werden die Gutachterkosten in der gleichen Quote
                  aufgeteilt wie der Schaden. Bei 50:50 zahlt die Gegenseite also die
                  Hälfte. Auch dann lohnt sich ein eigenes Gutachten, weil es die
                  Grundlage dafür ist, überhaupt über die Quote zu verhandeln.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#080D14] text-[16px] mb-2">
                  Selbstverschuldet oder Kasko
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Haben Sie den Schaden selbst verursacht, läuft es über Ihre Kaskoversicherung.
                  Die schickt in der Regel einen eigenen Gutachter. Ein unabhängiges
                  Gutachten kann sich trotzdem lohnen, wenn Sie mit der Einschätzung nicht
                  einverstanden sind. Sprechen Sie uns vorher an, wir sagen Ihnen ehrlich,
                  ob es sich in Ihrem Fall rechnet.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#080D14] text-[16px] mb-2">
                  Bagatellschaden: unter etwa 750 Euro
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Bei sehr kleinen Schäden muss die Versicherung die Gutachterkosten nicht
                  zwingend übernehmen. Hier reicht oft ein Kostenvoranschlag. Wo genau die
                  Grenze liegt, lässt sich am Telefon in zwei Minuten klären, bevor Ihnen
                  Kosten entstehen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geldseiten — bisher verlinkte keine Bezirksseite hierhin */}
        <section className="bg-[#080D14] px-5 py-10 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Mehr zu Kosten und Ansprüchen
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?", icon: Euro },
                { href: "/totalschaden-gutachten-berlin", label: "Totalschaden Gutachten", icon: Car },
                { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall-Tabelle", icon: Gauge },
                { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin", icon: FileText },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white bg-white/5 border border-white/10 hover:border-[#E11D2F] hover:text-[#E11D2F] px-4 py-2 rounded-xl transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StandortKarte bezirk={nameShort} minuten={distanceMin} variant="dark" />

        {/* FAQ */}
        <section className="bg-white px-5 py-14 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-8">
              Häufige Fragen — {nameShort}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="font-bold text-[#080D14] text-[15px] mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{faq.a}</p>
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
