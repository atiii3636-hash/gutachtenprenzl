import type { Metadata } from "next";
import { Phone, MessageCircle, Check, X, ArrowRight, Scale } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import VideoBlock from "@/components/video-block";
import Breadcrumb from "@/components/neu/breadcrumb";

/* Vergleichsseite. Vergleichsinhalte sind das mit Abstand am häufigsten zitierte
   Format in KI-Antworten — deshalb bewusst als echte Vergleichstabelle mit
   neutraler, belegter Argumentation statt als Werbetext. */

const UPDATED = "2026-08-02";
const UPDATED_LABEL = "2. August 2026";

export const metadata: Metadata = {
  title: { absolute: "Eigener Gutachter oder Versicherungsgutachter? Vergleich" },
  description:
    "Sie dürfen Ihren Gutachter frei wählen – müssen den der Versicherung nicht akzeptieren. Kosten, Unabhängigkeit & Ansprüche im Vergleich. ☎ 0155 60003661",
  keywords: [
    "eigener gutachter oder versicherung",
    "versicherungsgutachter oder eigener sachverständiger",
    "muss ich den gutachter der versicherung akzeptieren",
    "gutachter frei wählen unfall",
    "unabhängiger kfz gutachter berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/eigener-gutachter-oder-versicherungsgutachter" },
  openGraph: {
    title: "Eigener Gutachter oder Versicherungsgutachter? Der Vergleich",
    description:
      "Sie müssen den Gutachter der gegnerischen Versicherung nicht akzeptieren. Was die beiden Wege unterscheidet — und was das für Ihre Auszahlung bedeutet.",
    url: "https://gutachtenprenzl.de/eigener-gutachter-oder-versicherungsgutachter",
    images: ["/og-image.jpg"],
  },
};

const vergleich = [
  {
    kriterium: "Wer beauftragt",
    eigen: "Sie als Geschädigter",
    versicherung: "Die gegnerische Haftpflichtversicherung",
  },
  {
    kriterium: "Wessen Interesse zählt",
    eigen: "Ihres — der Sachverständige haftet Ihnen gegenüber",
    versicherung: "Das des Auftraggebers, also des Versicherers",
  },
  {
    kriterium: "Kosten für Sie",
    eigen: "0 € bei Fremdverschulden (§ 249 BGB)",
    versicherung: "0 €",
  },
  {
    kriterium: "Wertminderung wird ausgewiesen",
    eigen: "ja, als eigener Anspruchsposten",
    versicherung: "häufig nicht oder deutlich niedriger",
  },
  {
    kriterium: "Nutzungsausfall / Wiederbeschaffungsdauer",
    eigen: "wird konkret ermittelt und begründet",
    versicherung: "oft knapp bemessen",
  },
  {
    kriterium: "Restwertermittlung",
    eigen: "regionaler Berliner Markt",
    versicherung: "häufig überregionale Restwertbörsen mit höheren Geboten",
  },
  {
    kriterium: "Verwertbarkeit vor Gericht",
    eigen: "als Privatgutachten voll verwertbar",
    versicherung: "wird vom Gericht als Parteivortrag der Gegenseite gewertet",
  },
  {
    kriterium: "Fiktive Abrechnung möglich",
    eigen: "ja, Reparaturkosten sind sauber kalkuliert",
    versicherung: "eingeschränkt, Kalkulation oft nicht herausgegeben",
  },
  {
    kriterium: "Zweitmeinung möglich",
    eigen: "Sie behalten das Original",
    versicherung: "Sie erhalten oft nur eine Zusammenfassung",
  },
];

const faq = [
  {
    q: "Muss ich den Gutachter der gegnerischen Versicherung akzeptieren?",
    a: "Nein. Als Geschädigter eines unverschuldeten Unfalls dürfen Sie einen eigenen, unabhängigen Kfz-Sachverständigen beauftragen. Der Bundesgerichtshof hat das bestätigt (BGH VI ZR 67/06). Die gegnerische Versicherung darf Ihnen einen Gutachter vorschlagen, aber nicht vorschreiben.",
  },
  {
    q: "Kostet mich der eigene Gutachter mehr als der der Versicherung?",
    a: "Nein. Bei Fremdverschulden trägt die Haftpflichtversicherung des Unfallverursachers das Honorar Ihres eigenen Sachverständigen. Für Sie kostet beides 0 €. Der Unterschied liegt nicht im Preis, sondern darin, in wessen Auftrag das Gutachten entsteht.",
  },
  {
    q: "Warum fällt das Gutachten der Versicherung oft niedriger aus?",
    a: "Weil der Sachverständige dort im Auftrag des Versicherers arbeitet, der die Summe später auszahlen muss. Typische Abweichungen betreffen die Wertminderung, den Restwert und die Dauer des Nutzungsausfalls — drei Positionen mit erheblichem Spielraum.",
  },
  {
    q: "Was passiert, wenn die Versicherung mein Gutachten anzweifelt?",
    a: "Der Versicherer kann eine Nachprüfung veranlassen. Ein Gutachten eines zertifizierten Sachverständigen mit vollständiger Fotodokumentation und nachvollziehbarer Kalkulation hält dem in der Regel stand. Bleibt Streit, übernimmt bei Fremdverschulden auch die Kosten Ihres Fachanwalts die Gegenseite.",
  },
  {
    q: "Kann ich noch einen eigenen Gutachter beauftragen, wenn der Versicherungsgutachter schon da war?",
    a: "Ja, solange das Fahrzeug noch unrepariert ist. Deshalb gilt: nicht reparieren und nichts unterschreiben, bevor der eigene Sachverständige das Fahrzeug gesehen hat. Ist das Auto bereits instandgesetzt, lässt sich der Vorzustand nur noch eingeschränkt rekonstruieren.",
  },
  {
    q: "Wann lohnt sich der eigene Gutachter nicht?",
    a: "Bei einem echten Bagatellschaden unter rund 750 € erstattet die Versicherung die Gutachterkosten meist nicht — dort reicht ein Kostenvoranschlag. Und bei einem reinen Kaskoschaden beauftragt in der Regel Ihre eigene Versicherung den Sachverständigen.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://gutachtenprenzl.de/eigener-gutachter-oder-versicherungsgutachter#article",
      headline: "Eigener Gutachter oder Versicherungsgutachter? Der Vergleich",
      description:
        "Vergleich zwischen einem selbst beauftragten Kfz-Sachverständigen und dem Gutachter der gegnerischen Haftpflichtversicherung nach einem unverschuldeten Unfall.",
      inLanguage: "de-DE",
      datePublished: UPDATED,
      dateModified: UPDATED,
      mainEntityOfPage: "https://gutachtenprenzl.de/eigener-gutachter-oder-versicherungsgutachter",
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
      "@type": "ItemList",
      name: "Vergleichskriterien: eigener Sachverständiger vs. Versicherungsgutachter",
      itemListElement: vergleich.map(({ kriterium }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: kriterium,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Eigener Gutachter oder Versicherungsgutachter",
          item: "https://gutachtenprenzl.de/eigener-gutachter-oder-versicherungsgutachter",
        },
      ],
    },
  ],
};

export default function GutachterVergleich() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <Breadcrumb items={[{ name: "Eigener Gutachter oder Versicherungsgutachter", href: "/eigener-gutachter-oder-versicherungsgutachter" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0D] to-[#050507]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <Scale size={11} />Vergleich
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Eigener Gutachter oder Versicherungs&shy;gutachter?
          </h1>

          <div className="rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] p-5 md:p-6 mb-8">
            <p className="text-white text-[16px] md:text-[17px] leading-relaxed">
              <strong>Nach einem unverschuldeten Unfall dürfen Sie Ihren Sachverständigen frei wählen</strong> und
              müssen den Gutachter der gegnerischen Versicherung nicht akzeptieren (BGH VI ZR 67/06). Beide Wege kosten
              Sie 0 €. Der Unterschied liegt darin, wer den Auftrag erteilt — und damit, wessen Interessen das
              Gutachten abbildet.
            </p>
          </div>

          <p className="text-white/45 text-[13px] mb-8">
            Stand: {UPDATED_LABEL} · Verfasst von Atakan Arslan, TÜV Rheinland zertifizierter Kfz-Sachverständiger,
            Berlin
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+4915560003661" className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all">
              <Phone size={18} />0155 60003661
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all">
              <MessageCircle size={18} />WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Der direkte Vergleich
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Neun Kriterien, an denen sich die beiden Wege in der Praxis unterscheiden:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px] min-w-[640px]">
              <caption className="sr-only">
                Vergleich eigener Kfz-Sachverständiger und Gutachter der gegnerischen Versicherung
              </caption>
              <thead>
                <tr className="bg-white/[0.03]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Kriterium</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#22c55e] text-[12px] uppercase tracking-wide">Eigener Sachverständiger</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white/50 text-[12px] uppercase tracking-wide">Gutachter der Versicherung</th>
                </tr>
              </thead>
              <tbody>
                {vergleich.map(({ kriterium, eigen, versicherung }) => (
                  <tr key={kriterium} className="border-t border-white/8">
                    <th scope="row" className="px-4 py-3 font-semibold text-white align-top">{kriterium}</th>
                    <td className="px-4 py-3 text-white/60 align-top">
                      <span className="inline-flex items-start gap-2">
                        <Check size={13} className="text-[#22c55e] mt-0.5 flex-shrink-0" />
                        {eigen}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/50 align-top">
                      <span className="inline-flex items-start gap-2">
                        <X size={13} className="text-white/35 mt-0.5 flex-shrink-0" />
                        {versicherung}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/40 text-[12px] leading-relaxed mt-4">
            Die Angaben beschreiben typische Praxisunterschiede, keine Regel ohne Ausnahme. Auch Versicherungsgutachter
            arbeiten fachlich sauber — sie arbeiten nur nicht in Ihrem Auftrag.
          </p>
        </div>
      </section>

      {/* Drei Positionen */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-4">
            Drei Positionen, bei denen es teuer wird
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            Die Reparaturkosten sind selten strittig — sie lassen sich kalkulieren. Auseinander gehen die Gutachten
            fast immer an drei anderen Stellen:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: "01",
                title: "Merkantile Wertminderung",
                text: "Ein repariertes Unfallfahrzeug bringt beim Verkauf weniger, auch wenn die Reparatur fachgerecht war. Diese Wertminderung ist ein eigener Schadensersatzanspruch. Fehlt sie im Gutachten, wird sie in aller Regel auch nicht ausgezahlt.",
              },
              {
                nr: "02",
                title: "Restwert bei Totalschaden",
                text: "Der Restwert wird vom Wiederbeschaffungswert abgezogen — je höher er angesetzt ist, desto weniger bekommen Sie. Maßgeblich ist der allgemeine regionale Markt, nicht ein Höchstgebot aus einer überregionalen Restwertbörse.",
              },
              {
                nr: "03",
                title: "Nutzungsausfall und Wiederbeschaffungsdauer",
                text: "Je nach Fahrzeugklasse liegt der Tagessatz üblicherweise zwischen 23 und 175 €. Ob das Gutachten 8 oder 15 Tage Ausfall begründet, entscheidet über einen mittleren dreistelligen Betrag.",
              },
            ].map(({ nr, title, text }) => (
              <div key={nr} className="flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/4">
                <p className="font-display font-black text-[28px] text-[#E11D2F]/30 leading-none flex-shrink-0">{nr}</p>
                <div>
                  <p className="font-bold text-white text-[15px] mb-2">{title}</p>
                  <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wann welcher Weg */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-8">
            Wann welcher Weg sinnvoll ist
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/[0.04]">
              <p className="font-bold text-white text-[15px] mb-3">Eigener Sachverständiger</p>
              <ul className="space-y-2">
                {[
                  "Unverschuldeter Unfall mit Haftpflichtschaden",
                  "Schaden über rund 750 €",
                  "Verdacht auf Totalschaden",
                  "Fahrzeug jünger als fünf Jahre (Wertminderung)",
                  "Die Haftungsfrage ist strittig",
                  "Sie wollen fiktiv abrechnen",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white/55 text-[13px] leading-relaxed">
                    <Check size={13} className="text-[#22c55e] mt-1 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]">
              <p className="font-bold text-white text-[15px] mb-3">Kostenvoranschlag oder Kaskoweg reicht</p>
              <ul className="space-y-2">
                {[
                  "Echter Bagatellschaden unter rund 750 €",
                  "Reiner Kaskoschaden ohne Gegner",
                  "Selbstverschuldeter Schaden ohne Kaskoschutz",
                  "Reine Lackkratzer ohne Bauteilbeteiligung",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white/50 text-[13px] leading-relaxed">
                    <ArrowRight size={13} className="text-white/40 mt-1 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Häufige Fragen
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

      <section className="bg-[#0A1018] px-5 py-12 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4 text-center">Weiterlesen</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?" },
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/blog/recht-auf-eigenen-gutachter", label: "Recht auf eigenen Gutachter" },
              { href: "/blog/was-tun-nach-unfall-berlin", label: "Was tun nach einem Unfall?" },
              { href: "/ueber-uns", label: "Über den Sachverständigen" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center gap-1 text-[12px] text-white/40 hover:text-white/70 transition-colors border border-white/8 hover:border-white/20 rounded-full px-3 py-1.5">
                <ArrowRight size={10} />{label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Unfall gehabt? Erst anrufen, dann unterschreiben.
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Wir sehen uns Ihr Fahrzeug in ganz Berlin vor Ort an — bei Fremdverschulden für Sie kostenlos.
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

      <VideoBlock slug="eigener-gutachter-oder-versicherungsgutachter" />

      <FooterNeu />
    </div>
  );
}
