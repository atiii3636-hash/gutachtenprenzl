import type { Metadata } from "next";
import { Phone, MessageCircle, Info, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

/* Nutzungsausfall-Tabelle. Seitentyp ist bei Sachverständigenbüros nachweislich
   erfolgreich (hb-gutachten, besa-gutachter, gutachter-koop, unfallpaten ranken
   damit) — aber keiner davon mit Berlin-Bezug. Genau die Lücke.
   Aufbau maximal extraktionsfreundlich: Direktantwort, dann reine Tabellen. */

const UPDATED = "2026-08-03";
const UPDATED_LABEL = "3. August 2026";

export const metadata: Metadata = {
  title: { absolute: "Nutzungsausfall-Tabelle 2026 – Tagessätze Gruppe A bis L" },
  description:
    "Tagessätze von 23 € (Gruppe A) bis 175 € (Gruppe L), Abstufung ab 5/10 Jahren, mit Rechenbeispielen. ☎ 0155 60003661",
  keywords: [
    "nutzungsausfall tabelle 2026",
    "nutzungsausfallentschädigung höhe",
    "nutzungsausfall fahrzeuggruppen",
    "nutzungsausfall berechnen",
    "nutzungsausfall berlin",
    "sanden danner küppersbusch tabelle",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/nutzungsausfall-tabelle-berlin" },
  openGraph: {
    title: "Nutzungsausfall-Tabelle 2026 – Tagessätze Gruppe A bis L",
    description:
      "Was Ihnen pro Tag ohne Auto zusteht: Tagessätze nach Fahrzeuggruppe, Abstufungsregeln und Rechenbeispiele.",
    url: "https://gutachtenprenzl.de/nutzungsausfall-tabelle-berlin",
  },
};

/* Gruppen nach Sanden/Danner/Küppersbusch. Spannen, weil die Tabelle jährlich
   fortgeschrieben wird und je Modell differenziert — Orientierung, kein Freibrief. */
const gruppen = [
  { gruppe: "A", satz: "23 €", klasse: "Kleinstwagen", beispiele: "Fiat Panda, Renault Twingo, Smart fortwo" },
  { gruppe: "B", satz: "29 €", klasse: "Kleinwagen", beispiele: "VW Polo (ältere Generation), Ford Ka, Opel Karl" },
  { gruppe: "C", satz: "35 €", klasse: "Kleinwagen", beispiele: "VW Polo, Opel Corsa, Ford Fiesta" },
  { gruppe: "D", satz: "38 €", klasse: "untere Mittelklasse", beispiele: "VW Golf (Basis), Skoda Fabia, Seat Ibiza" },
  { gruppe: "E", satz: "43 €", klasse: "untere Mittelklasse", beispiele: "VW Golf, Opel Astra, Ford Focus" },
  { gruppe: "F", satz: "50 €", klasse: "Mittelklasse", beispiele: "VW Passat, Skoda Octavia, Mazda 6" },
  { gruppe: "G", satz: "59 €", klasse: "Mittelklasse", beispiele: "BMW 3er, Mercedes C-Klasse, Audi A4" },
  { gruppe: "H", satz: "65 €", klasse: "obere Mittelklasse", beispiele: "BMW 5er (Basis), Audi A6, VW Touareg" },
  { gruppe: "J", satz: "79 €", klasse: "obere Mittelklasse", beispiele: "BMW 5er, Mercedes E-Klasse, Audi A6 quattro" },
  { gruppe: "K", satz: "119 €", klasse: "Oberklasse", beispiele: "Mercedes S-Klasse, BMW 7er, Audi A8" },
  { gruppe: "L", satz: "175 €", klasse: "Luxusklasse", beispiele: "Porsche 911, Mercedes AMG GT, Bentley" },
];

const abstufung = [
  { alter: "bis 5 Jahre", regel: "voller Tagessatz der Gruppe", wirkung: "keine Abstufung" },
  { alter: "über 5 Jahre", regel: "eine Gruppe tiefer", wirkung: "z. B. Gruppe G → Gruppe F" },
  { alter: "über 10 Jahre", regel: "zwei Gruppen tiefer", wirkung: "z. B. Gruppe G → Gruppe E" },
];

const dauer = [
  { fall: "Reparatur", zeitraum: "Reparaturdauer laut Gutachten", plus: "+ 1–2 Tage Werkstattorganisation" },
  { fall: "Totalschaden", zeitraum: "Wiederbeschaffungsdauer", plus: "üblich 10–15 Tage" },
  { fall: "Fiktive Abrechnung", zeitraum: "kalkulierte Reparaturdauer", plus: "auch ohne tatsächliche Reparatur" },
  { fall: "Verzögerung durch Versicherung", zeitraum: "verlängert sich entsprechend", plus: "muss dokumentiert werden" },
];

const faq = [
  {
    q: "Was ist Nutzungsausfallentschädigung?",
    a: "Eine Geldentschädigung dafür, dass Sie Ihr Fahrzeug nach einem unverschuldeten Unfall nicht nutzen können. Sie steht Ihnen zu, wenn Sie keinen Mietwagen nehmen. Grundlage ist die Tabelle von Sanden/Danner/Küppersbusch, die Fahrzeuge in die Gruppen A bis L einteilt.",
  },
  {
    q: "Wie hoch ist der Nutzungsausfall pro Tag?",
    a: "Zwischen 23 € in Gruppe A und 175 € in Gruppe L. Ein VW Golf liegt typischerweise bei 43 €, ein BMW 3er bei 59 €, eine Mercedes S-Klasse bei 119 €. Maßgeblich sind Fahrzeugtyp, Motorisierung und Neupreis.",
  },
  {
    q: "Bekomme ich Nutzungsausfall auch für ein älteres Auto?",
    a: "Ja, aber abgestuft. Ab einem Fahrzeugalter von über 5 Jahren wird üblicherweise eine Gruppe tiefer eingestuft, ab über 10 Jahren zwei Gruppen. Ein zwölf Jahre alter BMW 3er fällt damit von Gruppe G auf Gruppe E, also von 59 € auf 43 € pro Tag.",
  },
  {
    q: "Für wie viele Tage bekomme ich Nutzungsausfall?",
    a: "Bei Reparatur für die im Gutachten ausgewiesene Reparaturdauer plus ein bis zwei Tage für die Werkstattorganisation. Bei Totalschaden für die Wiederbeschaffungsdauer, üblicherweise 10 bis 15 Tage. Verzögert die Versicherung die Regulierung, verlängert sich der Zeitraum.",
  },
  {
    q: "Nutzungsausfall oder Mietwagen – was ist besser?",
    a: "Beides zusammen geht nicht. Der Mietwagen lohnt, wenn Sie wirklich täglich ein Auto brauchen. Nutzungsausfall lohnt, wenn Sie die Zeit überbrücken können, denn Sie bekommen Geld statt eines Fahrzeugs. Bei hochwertigen Fahrzeugen liegt der Nutzungsausfall oft über dem, was ein vergleichbarer Mietwagen kosten würde.",
  },
  {
    q: "Bekomme ich Nutzungsausfall, wenn ich gar nicht repariere?",
    a: "Ja. Auch bei fiktiver Abrechnung steht Ihnen Nutzungsausfall für die im Gutachten kalkulierte Reparaturdauer zu. Voraussetzung ist, dass Sie das Fahrzeug in dieser Zeit tatsächlich nicht nutzen konnten und nutzen wollten.",
  },
  {
    q: "Wer zahlt den Nutzungsausfall?",
    a: "Bei unverschuldetem Unfall die Haftpflichtversicherung des Unfallverursachers. Voraussetzung ist, dass die Position im Gutachten ausgewiesen und gegenüber der Versicherung geltend gemacht wird. Steht sie nicht drin, wird sie in aller Regel auch nicht gezahlt.",
  },
  {
    q: "Gilt die Tabelle auch für Motorräder und Wohnmobile?",
    a: "Für Motorräder gibt es eigene Sätze, die deutlich niedriger liegen. Wohnmobile und Nutzfahrzeuge werden gesondert bewertet, dort wird häufig auf Vorhaltekosten oder entgangenen Gewinn abgestellt statt auf die Pkw-Tabelle.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://gutachtenprenzl.de/nutzungsausfall-tabelle-berlin#webpage",
      url: "https://gutachtenprenzl.de/nutzungsausfall-tabelle-berlin",
      name: "Nutzungsausfall-Tabelle 2026 – Tagessätze Gruppe A bis L",
      description:
        "Tagessätze der Nutzungsausfallentschädigung nach Fahrzeuggruppe, Abstufung nach Fahrzeugalter und Berechnung der Ausfalldauer.",
      inLanguage: "de-DE",
      datePublished: UPDATED,
      dateModified: UPDATED,
      isPartOf: { "@id": "https://gutachtenprenzl.de" },
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
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        { "@type": "ListItem", position: 2, name: "Nutzungsausfall-Tabelle", item: "https://gutachtenprenzl.de/nutzungsausfall-tabelle-berlin" },
      ],
    },
  ],
};

export default function NutzungsausfallTabelle() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero + Direktantwort */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1420] to-[#080D14]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <Calendar size={11} />Tabelle 2026
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Nutzungsausfall-Tabelle 2026
          </h1>

          <div className="rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] p-5 md:p-6 mb-8">
            <p className="text-white text-[16px] md:text-[17px] leading-relaxed">
              <strong>Die Nutzungsausfallentschädigung liegt 2026 zwischen 23 € und 175 € pro Tag</strong>,
              je nach Fahrzeuggruppe. Ein VW Golf liegt bei etwa 43 €, ein BMW 3er bei 59 €, eine
              Mercedes S-Klasse bei 119 €. Ab einem Fahrzeugalter von über 5 Jahren wird eine Gruppe
              tiefer eingestuft, ab über 10 Jahren zwei Gruppen. Bei unverschuldetem Unfall zahlt die
              Haftpflicht des Verursachers.
            </p>
          </div>

          <p className="text-white/45 text-[13px] mb-8">
            Stand: {UPDATED_LABEL} · Geprüft von Atakan Arslan, TÜV Rheinland zertifizierter
            Kfz-Sachverständiger, Berlin
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+4915560003661" className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all">
              <Phone size={18} />Anspruch prüfen: 0155 60003661
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all">
              <MessageCircle size={18} />WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Haupttabelle */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-4">
            Tagessätze nach Fahrzeuggruppe
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Grundlage ist die Tabelle von Sanden/Danner/Küppersbusch, die praktisch alle in
            Deutschland angebotenen Pkw in Gruppen von A bis L einteilt. Eingestuft wird nach
            Fahrzeugtyp, Motorisierung und Neupreis.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse text-[13px] min-w-[600px]">
              <caption className="sr-only">
                Nutzungsausfallentschädigung 2026 nach Fahrzeuggruppe A bis L, Tagessätze in Euro
              </caption>
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Gruppe</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">€ pro Tag</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Fahrzeugklasse</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Typische Modelle</th>
                </tr>
              </thead>
              <tbody>
                {gruppen.map(({ gruppe, satz, klasse, beispiele }) => (
                  <tr key={gruppe} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 font-display font-black text-[#E11D2F] text-[15px]">{gruppe}</th>
                    <td className="px-4 py-3 font-bold text-[#080D14] whitespace-nowrap">{satz}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{klasse}</td>
                    <td className="px-4 py-3 text-gray-500">{beispiele}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50">
            <Info size={15} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
            <p className="text-gray-500 text-[12px] leading-relaxed">
              Orientierungswerte. Die Tabelle wird jährlich fortgeschrieben und differenziert
              innerhalb einer Baureihe nach Motorisierung und Ausstattung. Die verbindliche
              Einstufung Ihres Fahrzeugs steht im Gutachten.
            </p>
          </div>
        </div>
      </section>

      {/* Abstufung */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Abstufung nach Fahrzeugalter
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            Ältere Fahrzeuge werden herabgestuft. Das ist der Punkt, an dem sich die meisten
            verrechnen:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px] min-w-[480px]">
              <caption className="sr-only">Abstufung des Nutzungsausfalls nach Fahrzeugalter</caption>
              <thead>
                <tr className="bg-white/[0.06]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Fahrzeugalter</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Regel</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Beispiel</th>
                </tr>
              </thead>
              <tbody>
                {abstufung.map(({ alter, regel, wirkung }) => (
                  <tr key={alter} className="border-t border-white/6">
                    <th scope="row" className="px-4 py-3 font-semibold text-white/85 whitespace-nowrap">{alter}</th>
                    <td className="px-4 py-3 text-[#22c55e]">{regel}</td>
                    <td className="px-4 py-3 text-white/40">{wirkung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 rounded-2xl border border-white/8 bg-white/4">
            <p className="font-bold text-white text-[14px] mb-2">Rechenbeispiel</p>
            <p className="text-white/50 text-[13px] leading-relaxed">
              BMW 3er, Baujahr 2013, also über 10 Jahre alt. Grundeinstufung Gruppe G mit 59 € pro
              Tag, wegen des Alters zwei Gruppen tiefer auf Gruppe E mit 43 €. Reparaturdauer laut
              Gutachten 9 Tage, plus 2 Tage Werkstattorganisation, ergibt 11 Tage.
              <strong className="text-white"> 11 × 43 € = 473 € Nutzungsausfall.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Dauer */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-4">
            Für wie viele Tage?
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Der Tagessatz ist nur die eine Hälfte. Die andere ist der Zeitraum – und der wird von
            Versicherungen gern knapp bemessen.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse text-[13px] min-w-[520px]">
              <caption className="sr-only">Dauer des Nutzungsausfalls je nach Schadensfall</caption>
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Fall</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Maßgeblicher Zeitraum</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#080D14] text-[12px] uppercase tracking-wide">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {dauer.map(({ fall, zeitraum, plus }) => (
                  <tr key={fall} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 font-semibold text-[#080D14] whitespace-nowrap">{fall}</th>
                    <td className="px-4 py-3 text-gray-600">{zeitraum}</td>
                    <td className="px-4 py-3 text-gray-500">{plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-[12px] leading-relaxed mt-4">
            Diese Seite gibt allgemeine Informationen und ersetzt keine Rechtsberatung. Bei Streit
            über Höhe oder Dauer empfehlen wir einen Fachanwalt für Verkehrsrecht – dessen Kosten
            trägt bei Fremdverschulden ebenfalls die gegnerische Versicherung.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Häufige Fragen zum Nutzungsausfall
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
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4 text-center">Weiterlesen</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
              { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/eigener-gutachter-oder-versicherungsgutachter", label: "Eigener Gutachter vs. Versicherung" },
              { href: "/blog/was-tun-nach-unfall-berlin", label: "Was tun nach einem Unfall?" },
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
            Steht Ihr Nutzungsausfall im Gutachten?
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Fehlt die Position, zahlt die Versicherung sie nicht. Wir prüfen Ihr Gutachten – bei
            Fremdverschulden kostenlos.
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

      <FooterNeu />
    </div>
  );
}
