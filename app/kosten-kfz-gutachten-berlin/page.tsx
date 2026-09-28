import type { Metadata } from "next";
import { Phone, MessageCircle, CheckCircle, XCircle, Euro, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import VideoBlock from "@/components/video-block";
import Breadcrumb from "@/components/neu/breadcrumb";

/* Preis-/Kostenseite. Wichtigste AEO-Seite der Site: "Was kostet ein Kfz-Gutachten"
   ist die meistgestellte Frage zum Thema in ChatGPT & Co. Aufbau bewusst
   extraktionsfreundlich: Direktantwort zuerst, danach echte <table>-Elemente
   (LLMs zitieren Tabellen deutlich häufiger als Fließtext). */

const UPDATED = "2026-08-02";
const UPDATED_LABEL = "2. August 2026";

export const metadata: Metadata = {
  title: { absolute: "Was kostet ein Kfz-Gutachten in Berlin? Honorartabelle 2026" },
  description:
    "Bei unverschuldetem Unfall 0 € für Sie. Sonst 250–1.250 € je nach Schadenhöhe. ☎ 0155 60003661",
  keywords: [
    "was kostet ein kfz gutachten berlin",
    "kfz gutachter kosten berlin",
    "kfz gutachten preis",
    "bvsk honorartabelle 2026",
    "sachverständiger honorar berlin",
    "unfallgutachten kosten",
    "wer zahlt den kfz gutachter",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin" },
  openGraph: {
    title: "Was kostet ein Kfz-Gutachten in Berlin? Honorartabelle 2026",
    description:
      "Bei unverschuldetem Unfall zahlen Sie 0 €. Sonst ca. 250–1.250 € je nach Schadenhöhe. Komplette Honorar- und Nebenkostentabelle.",
    url: "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin",
    images: ["/og-image.jpg"],
  },
};

/* Orientierungswerte in Anlehnung an die BVSK-Honorarbefragung (Korridor HB V).
   Grundhonorar netto, ohne Nebenkosten und ohne Umsatzsteuer. */
const honorar = [
  { schaden: "bis 750 €", honorar: "Kostenvoranschlag statt Gutachten", hinweis: "Bagatellgrenze — Gutachterkosten werden meist nicht erstattet" },
  { schaden: "bis 1.000 €", honorar: "250 – 350 €", hinweis: "Kurzgutachten möglich" },
  { schaden: "bis 1.750 €", honorar: "330 – 420 €", hinweis: "" },
  { schaden: "bis 2.500 €", honorar: "390 – 490 €", hinweis: "" },
  { schaden: "bis 3.000 €", honorar: "430 – 550 €", hinweis: "" },
  { schaden: "bis 5.000 €", honorar: "560 – 700 €", hinweis: "" },
  { schaden: "bis 7.500 €", honorar: "700 – 870 €", hinweis: "" },
  { schaden: "bis 10.000 €", honorar: "830 – 1.020 €", hinweis: "häufig Totalschadenprüfung" },
  { schaden: "bis 15.000 €", honorar: "1.020 – 1.250 €", hinweis: "" },
  { schaden: "über 15.000 €", honorar: "nach Aufwand", hinweis: "individuelle Vereinbarung" },
];

const nebenkosten = [
  { pos: "Lichtbilder (1. Satz)", preis: "ca. 2,00 € je Foto" },
  { pos: "Lichtbilder (2. Satz)", preis: "ca. 0,50 € je Foto" },
  { pos: "Fahrtkosten", preis: "ca. 0,70 – 1,05 € je km" },
  { pos: "Schreibkosten Original", preis: "ca. 1,80 € je Seite" },
  { pos: "Schreibkosten Kopie", preis: "ca. 0,50 € je Seite" },
  { pos: "Porto, Telefon, EDV", preis: "Pauschale ca. 15 – 20 €" },
];

const werZahlt = [
  {
    fall: "Unverschuldeter Unfall (Haftpflichtschaden)",
    kosten: "0 €",
    gut: true,
    text: "Die Haftpflichtversicherung des Unfallverursachers trägt das komplette Sachverständigenhonorar. Das folgt aus § 249 BGB: Sie sind so zu stellen, wie Sie ohne den Unfall stünden. Wir rechnen direkt mit der gegnerischen Versicherung ab, Sie bekommen keine Rechnung.",
  },
  {
    fall: "Teilschuld",
    kosten: "anteilig",
    gut: true,
    text: "Bei einer Haftungsquote von zum Beispiel 50 : 50 erstattet die Gegenseite die Hälfte des Honorars. Den Rest tragen Sie oder Ihre Rechtsschutzversicherung. Das Gutachten lohnt sich trotzdem fast immer, weil es die Quote überhaupt erst belegbar macht.",
  },
  {
    fall: "Kaskoschaden",
    kosten: "meist Ihre Kasko",
    gut: true,
    text: "Bei Voll- oder Teilkasko beauftragt in der Regel die eigene Versicherung den Gutachter und übernimmt die Kosten. Ein eigener Sachverständiger ist möglich, muss dann aber vorab mit der Kasko abgestimmt werden.",
  },
  {
    fall: "Selbstverschuldet, kein Kaskoschutz",
    kosten: "Sie selbst",
    gut: false,
    text: "Hier zahlen Sie das Honorar nach Schadenhöhe selbst. Sinnvoll ist das vor allem beim Verkauf des Fahrzeugs, bei Streit mit der Werkstatt oder wenn Sie eine belastbare Reparaturkalkulation brauchen.",
  },
];

const faq = [
  {
    q: "Was kostet ein Kfz-Gutachten in Berlin?",
    a: "Nach einem unverschuldeten Unfall kostet Sie das Gutachten 0 €, weil die Haftpflichtversicherung des Verursachers zahlt. Zahlen Sie selbst, richtet sich das Honorar nach der Schadenhöhe: rund 250–350 € bei 1.000 € Schaden, rund 560–700 € bei 5.000 € Schaden, rund 1.020–1.250 € bei 15.000 € Schaden.",
  },
  {
    q: "Wer zahlt den Kfz-Gutachter nach einem Unfall?",
    a: "Bei Fremdverschulden die Haftpflichtversicherung des Unfallverursachers. Grundlage ist § 249 BGB. Der Sachverständige rechnet direkt mit der gegnerischen Versicherung ab, der Geschädigte erhält keine Rechnung.",
  },
  {
    q: "Darf ich meinen Gutachter selbst aussuchen?",
    a: "Ja. Der Geschädigte hat das Recht, einen eigenen unabhängigen Sachverständigen zu beauftragen. Der Bundesgerichtshof hat das mehrfach bestätigt (unter anderem BGH VI ZR 67/06). Sie müssen den Gutachter der gegnerischen Versicherung nicht akzeptieren.",
  },
  {
    q: "Warum wird das Honorar nach Schadenhöhe berechnet?",
    a: "Mit der Schadenhöhe steigen Haftungsrisiko und Prüfaufwand des Sachverständigen. Deshalb hat sich in der Branche die Abrechnung nach Schadenhöhe durchgesetzt, orientiert an der BVSK-Honorarbefragung. Der BGH hat diese Praxis als zulässig bestätigt.",
  },
  {
    q: "Was ist ein Bagatellschaden und lohnt sich dann ein Gutachten?",
    a: "Als Bagatellschaden gilt üblicherweise ein Schaden unter rund 750 €. Dabei erstatten Versicherungen die Gutachterkosten in der Regel nicht. Sinnvoller ist ein Kostenvoranschlag der Werkstatt. Ob es sich wirklich um einen Bagatellschaden handelt, lässt sich aber erst nach einer Sichtprüfung sagen — versteckte Schäden am Stoßfänger oder an Sensoren sprengen die Grenze schnell.",
  },
  {
    q: "Welche Nebenkosten kommen zum Grundhonorar dazu?",
    a: "Üblich sind Lichtbilder (ca. 2,00 € je Foto im ersten Satz), Fahrtkosten (ca. 0,70–1,05 € je km), Schreib- und Kopierkosten sowie eine Pauschale für Porto, Telefon und EDV von etwa 15–20 €. Innerhalb Berlins ist die Anfahrt bei uns im Honorar enthalten.",
  },
  {
    q: "Kürzt die Versicherung das Gutachterhonorar?",
    a: "Das kommt vor. Manche Versicherer kürzen Nebenkosten oder verweisen auf ein angeblich günstigeres Honorar. Der Geschädigte muss den Markt aber nicht auf günstigere Sachverständige durchsuchen (BGH VI ZR 225/13). Wir setzen gekürzte Positionen nach und geben den Vorgang bei Bedarf an einen Fachanwalt für Verkehrsrecht ab.",
  },
  {
    q: "Wie schnell bekomme ich das Gutachten?",
    a: "In der Regel innerhalb von 24 Stunden nach der Besichtigung. Die Besichtigung findet in Berlin vor Ort statt — zu Hause, in der Werkstatt oder am Unfallort.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin#article",
      url: "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin",
      headline: "Was kostet ein Kfz-Gutachten in Berlin? Honorartabelle 2026",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin" },
      name: "Was kostet ein Kfz-Gutachten in Berlin? Honorartabelle 2026",
      description:
        "Kosten eines Kfz-Gutachtens in Berlin: bei unverschuldetem Unfall 0 €, sonst ca. 250–1.250 € je nach Schadenhöhe. Mit Honorar- und Nebenkostentabelle.",
      inLanguage: "de-DE",
      datePublished: UPDATED,
      dateModified: UPDATED,
      isPartOf: { "@id": "https://gutachtenprenzl.de" },
      about: { "@type": "Thing", name: "Kfz-Sachverständigenhonorar" },
      author: {
        "@type": "Person",
        "@id": "https://gutachtenprenzl.de/#person",
        name: "Atakan Arslan",
        jobTitle: "TÜV Rheinland zertifizierter Kfz-Sachverständiger",
      },
      publisher: { "@id": "https://gutachtenprenzl.de" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "Table",
      about: "Honorartabelle Kfz-Sachverständiger Berlin nach Schadenhöhe",
    },
    {
      "@type": "Service",
      name: "Kfz-Gutachten Berlin",
      serviceType: "Kfz-Sachverständigengutachten",
      provider: { "@id": "https://gutachtenprenzl.de" },
      areaServed: { "@type": "City", name: "Berlin" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "0",
        description:
          "Kostenlos für den Geschädigten bei unverschuldetem Unfall — das Honorar trägt die Haftpflichtversicherung des Unfallverursachers.",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        { "@type": "ListItem", position: 2, name: "Kosten Kfz-Gutachten Berlin", item: "https://gutachtenprenzl.de/kosten-kfz-gutachten-berlin" },
      ],
    },
  ],
};

export default function KostenKfzGutachtenBerlin() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <Breadcrumb items={[{ name: "Kosten Kfz-Gutachten Berlin", href: "/kosten-kfz-gutachten-berlin" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero + Direktantwort */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0D] to-[#050507]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <Euro size={11} />Honorartabelle 2026
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Was kostet ein Kfz-Gutachten in Berlin?
          </h1>

          {/* 40–60-Wort-Direktantwort: der Block, den ChatGPT & AI Overviews zitieren */}
          <div className="rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] p-5 md:p-6 mb-8">
            <p className="text-white text-[16px] md:text-[17px] leading-relaxed">
              <strong>Nach einem unverschuldeten Unfall in Berlin kostet Sie das Kfz-Gutachten 0 €</strong> — das
              Honorar zahlt die Haftpflichtversicherung des Unfallverursachers. Zahlen Sie selbst, richtet sich das
              Honorar nach der Schadenhöhe: etwa <strong>250–350 €</strong> bei 1.000 € Schaden,
              <strong> 560–700 €</strong> bei 5.000 € und <strong>1.020–1.250 €</strong> bei 15.000 €.
            </p>
          </div>

          <p className="text-white/45 text-[13px] mb-8">
            Stand: {UPDATED_LABEL} · Geprüft von Atakan Arslan, TÜV Rheinland zertifizierter Kfz-Sachverständiger
            (Zertifikat 0217466029)
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+4915560003661" className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all">
              <Phone size={18} />Kosten klären: 0155 60003661
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all">
              <MessageCircle size={18} />WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Wer zahlt */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Wer zahlt den Kfz-Gutachter?
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Wer das Honorar trägt, hängt allein davon ab, wie der Unfall haftungsrechtlich eingeordnet wird. Vier Fälle
            decken praktisch alles ab:
          </p>
          <div className="space-y-3">
            {werZahlt.map(({ fall, kosten, gut, text }) => (
              <div key={fall} className="p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="flex items-center gap-3 mb-2">
                  {gut ? (
                    <CheckCircle size={16} className="text-[#22c55e] flex-shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-[#E11D2F] flex-shrink-0" />
                  )}
                  <p className="font-bold text-white text-[14px]">{fall}</p>
                  <span className="ml-auto font-display font-black text-[#E11D2F] text-[14px] whitespace-nowrap">{kosten}</span>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honorartabelle */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Honorartabelle nach Schadenhöhe
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            Das Grundhonorar eines Kfz-Sachverständigen richtet sich nach der ermittelten Schadenhöhe, nicht nach dem
            Zeitaufwand. Die folgenden Werte sind Orientierungswerte in Anlehnung an die BVSK-Honorarbefragung
            (Korridor HB&nbsp;V), netto und ohne Nebenkosten.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px]">
              <caption className="sr-only">
                Grundhonorar Kfz-Sachverständiger Berlin nach Schadenhöhe, Stand {UPDATED_LABEL}
              </caption>
              <thead>
                <tr className="bg-white/[0.06]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Schadenhöhe</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Grundhonorar netto</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {honorar.map(({ schaden, honorar: h, hinweis }) => (
                  <tr key={schaden} className="border-t border-white/6">
                    <th scope="row" className="px-4 py-3 font-semibold text-white/85 whitespace-nowrap">{schaden}</th>
                    <td className="px-4 py-3 text-[#22c55e] font-semibold whitespace-nowrap">{h}</td>
                    <td className="px-4 py-3 text-white/40">{hinweis || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.03]">
            <Info size={15} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
            <p className="text-white/45 text-[12px] leading-relaxed">
              Bei einem Haftpflichtschaden zahlen Sie keine dieser Positionen. Die Tabelle ist relevant, wenn Sie das
              Gutachten selbst beauftragen — etwa vor einem Fahrzeugverkauf oder bei Streit mit der Werkstatt.
            </p>
          </div>

          <h3 className="font-display font-black text-xl text-white uppercase mt-12 mb-4">
            Nebenkosten zum Grundhonorar
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px]">
              <caption className="sr-only">Übliche Nebenkosten eines Kfz-Gutachtens</caption>
              <thead>
                <tr className="bg-white/[0.06]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Position</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Übliche Höhe</th>
                </tr>
              </thead>
              <tbody>
                {nebenkosten.map(({ pos, preis }) => (
                  <tr key={pos} className="border-t border-white/6">
                    <th scope="row" className="px-4 py-3 font-semibold text-white/85">{pos}</th>
                    <td className="px-4 py-3 text-white/55 whitespace-nowrap">{preis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/35 text-[12px] mt-3">
            Die Anfahrt innerhalb Berlins ist bei Gutachten Prenzl im Honorar enthalten.
          </p>
        </div>
      </section>

      {/* Rechtsgrundlagen */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-4">
            Rechtsgrundlagen zum Gutachterhonorar
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Drei Entscheidungen bestimmen, wer zahlt und wer aussuchen darf:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: "§ 249 BGB — Naturalrestitution",
                text: "Der Schädiger muss den Zustand herstellen, der ohne das schädigende Ereignis bestünde. Dazu gehören auch die Kosten eines Sachverständigengutachtens, soweit es zur Rechtsverfolgung erforderlich ist.",
              },
              {
                titel: "BGH VI ZR 67/06 — freie Gutachterwahl",
                text: "Der Geschädigte darf einen eigenen, unabhängigen Sachverständigen beauftragen. Er ist nicht verpflichtet, den Gutachter der gegnerischen Versicherung zu akzeptieren.",
              },
              {
                titel: "BGH VI ZR 225/13 — keine Marktforschungspflicht",
                text: "Der Geschädigte muss vor der Beauftragung keine Marktforschung nach dem günstigsten Sachverständigen betreiben. Ein übliches Honorar ist erstattungsfähig.",
              },
            ].map(({ titel, text }) => (
              <div key={titel} className="p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
                <p className="font-bold text-white text-[14px] mb-2">{titel}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-[12px] leading-relaxed mt-6">
            Diese Seite gibt allgemeine Informationen und ersetzt keine Rechtsberatung. Bei Streit über die
            Haftungsquote empfehlen wir einen Fachanwalt für Verkehrsrecht — dessen Kosten trägt bei Fremdverschulden
            ebenfalls die gegnerische Versicherung.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Häufige Fragen zu den Kosten
          </h2>
          <div className="space-y-4">
            {faq.map(({ q, a }) => (
              <div key={q} className="p-5 rounded-2xl border border-white/8 bg-white/4">
                <p className="font-bold text-white text-[14px] mb-2">{q}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interne Links */}
      <section className="bg-[#0A1018] px-5 py-12 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4 text-center">
            Weiterlesen
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/eigener-gutachter-oder-versicherungsgutachter", label: "Eigener Gutachter vs. Versicherung" },
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/parkschaden-gutachten-berlin", label: "Parkschaden" },
              { href: "/blog/recht-auf-eigenen-gutachter", label: "Recht auf eigenen Gutachter" },
              { href: "/ueber-uns", label: "Über den Sachverständigen" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center gap-1 text-[12px] text-white/40 hover:text-white/70 transition-colors border border-white/8 hover:border-white/20 rounded-full px-3 py-1.5">
                <ArrowRight size={10} />{label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Unverschuldeter Unfall? Dann zahlen Sie nichts.
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Rufen Sie an, wir klären in zwei Minuten, wer in Ihrem Fall das Honorar trägt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+4915560003661" className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all">
              <Phone size={18} />0155 60003661
            </a>
            <Link href="/#schaden" className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-white/10">
              Schaden online melden
            </Link>
          </div>
        </div>
      </section>

      <VideoBlock slug="kosten-kfz-gutachten-berlin" />

      <FooterNeu />
    </div>
  );
}
