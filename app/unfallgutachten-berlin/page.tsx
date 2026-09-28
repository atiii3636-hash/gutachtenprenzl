import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, FileText, Car, Euro } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import { bezirkContent } from "@/lib/bezirk-content";

export const metadata: Metadata = {
  title: { absolute: "Unfallgutachten Berlin – Ablauf, Ansprüche, Kosten" },
  description: "Unfallgutachten in Berlin: So läuft es ab, was Ihnen nach einem unverschuldeten Unfall zusteht und wer zahlt. Gutachten in 24 Std., meist 0 € für Sie.",
  alternates: { canonical: "https://gutachtenprenzl.de/unfallgutachten-berlin" },
};

const UPDATED = "2026-08-03";
const UPDATED_LABEL = "3. August 2026";

/* Ablauf als echte Tabelle: LLMs übernehmen Schritt-für-Schritt-Tabellen
   deutlich zuverlässiger als nummerierte Fließtext-Listen. */
const ablauf = [
  { schritt: "1", was: "Anruf oder WhatsApp", dauer: "Rückmeldung in ca. 30 Min.", detail: "Kurze Aufnahme: Unfallort, Fahrzeug, Gegner, Versicherung" },
  { schritt: "2", was: "Besichtigungstermin", dauer: "meist am selben Tag", detail: "Wir kommen zu Ihnen – Wohnung, Werkstatt oder Unfallort" },
  { schritt: "3", was: "Begutachtung vor Ort", dauer: "30–60 Minuten", detail: "Fotodokumentation, Lackschichtmessung, Bauteilprüfung, Fahrzeugdaten" },
  { schritt: "4", was: "Gutachten fertig", dauer: "innerhalb 24 Stunden", detail: "Reparaturkosten, Wertminderung, Nutzungsausfall, Wiederbeschaffungswert" },
  { schritt: "5", was: "Versand an alle Beteiligten", dauer: "sofort danach", detail: "Sie, Ihr Anwalt und die gegnerische Versicherung erhalten das Gutachten" },
];

/* Anspruchspositionen – der Teil, den Geschädigte am häufigsten liegen lassen. */
const anspruch = [
  { pos: "Reparaturkosten", erklaerung: "Kalkuliert nach Herstellervorgaben und Berliner Fachwerkstattsätzen" },
  { pos: "Merkantile Wertminderung", erklaerung: "Wertverlust, weil das Auto ab jetzt ein Unfallwagen ist – eigener Anspruch" },
  { pos: "Nutzungsausfall", erklaerung: "Tagessatz nach Fahrzeuggruppe für die Zeit ohne Auto" },
  { pos: "Mietwagenkosten", erklaerung: "Alternativ zum Nutzungsausfall, nicht zusätzlich" },
  { pos: "Abschlepp- und Standkosten", erklaerung: "Bergung, Transport und Verwahrung des Fahrzeugs" },
  { pos: "Kostenpauschale", erklaerung: "Für Telefon, Porto und Wege – üblich 25–30 €" },
  { pos: "Sachverständigenhonorar", erklaerung: "Das Gutachten selbst, direkt mit der Gegenseite abgerechnet" },
  { pos: "Anwaltskosten", erklaerung: "Bei Fremdverschulden von der gegnerischen Haftpflicht zu tragen" },
];

const faq = [
  {
    q: "Wann brauche ich ein Unfallgutachten?",
    a: "Bei jedem Unfall mit Fremdverschulden ab einem geschätzten Schaden von etwa 750 € haben Sie Anspruch auf ein unabhängiges Kfz-Gutachten. Darunter spricht man von einem Bagatellschaden, dort reicht in der Regel ein Kostenvoranschlag. Ob es wirklich ein Bagatellschaden ist, zeigt sich aber oft erst bei der Sichtprüfung – hinter einem unscheinbaren Stoßfänger stecken heute Sensoren und Radartechnik.",
  },
  {
    q: "Was kostet ein Unfallgutachten in Berlin?",
    a: "Bei unverschuldetem Unfall entstehen Ihnen keine Kosten. Die Haftpflichtversicherung des Unfallverursachers übernimmt das Sachverständigenhonorar vollständig (§ 249 BGB). Wir rechnen direkt mit der Gegenseite ab, Sie erhalten keine Rechnung.",
  },
  {
    q: "Wie lange dauert ein Unfallgutachten?",
    a: "Die Besichtigung dauert 30 bis 60 Minuten. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung, in dringenden Fällen auch schneller.",
  },
  {
    q: "Muss ich mit dem Auto zu Ihnen kommen?",
    a: "Nein. Als mobiler Kfz-Sachverständiger kommen wir zu Ihnen – nach Hause, in die Werkstatt oder direkt an den Unfallort, in allen Berliner Bezirken.",
  },
  {
    q: "Darf ich meinen Gutachter selbst aussuchen?",
    a: "Ja. Als Geschädigter eines unverschuldeten Unfalls dürfen Sie einen eigenen unabhängigen Sachverständigen beauftragen. Der Bundesgerichtshof hat das bestätigt (BGH VI ZR 67/06). Den Gutachter der gegnerischen Versicherung müssen Sie nicht akzeptieren.",
  },
  {
    q: "Was passiert, wenn ich mein Auto vor dem Gutachten reparieren lasse?",
    a: "Dann lässt sich der Schaden im Nachhinein kaum noch belegen. Reparieren Sie erst nach der Begutachtung und geben Sie das Fahrzeug nicht ab, solange das Gutachten nicht vorliegt. Auch Restwertangebote der Versicherung sollten Sie vorher nicht annehmen.",
  },
  {
    q: "Brauche ich zusätzlich einen Anwalt?",
    a: "Bei klarer Haftungslage und kleinem Schaden nicht zwingend. Sobald die Haftungsquote strittig ist, die Versicherung kürzt oder ein Totalschaden im Raum steht, sollten Sie einen Fachanwalt für Verkehrsrecht einschalten. Bei Fremdverschulden trägt dessen Kosten ebenfalls die gegnerische Versicherung.",
  },
  {
    q: "Was tun, wenn die Versicherung das Gutachten kürzt?",
    a: "Das kommt regelmäßig vor, meist bei Verbringungskosten, UPE-Aufschlägen und Stundenverrechnungssätzen. Geben Sie uns das Kürzungsschreiben, wir nehmen zu den einzelnen Positionen Stellung. Bleibt die Versicherung dabei, übernimmt ein Fachanwalt für Verkehrsrecht.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://gutachtenprenzl.de/unfallgutachten-berlin#webpage",
      url: "https://gutachtenprenzl.de/unfallgutachten-berlin",
      name: "Unfallgutachten Berlin – in 24 Stunden, bei Fremdverschulden kostenlos",
      description:
        "Unfallgutachten in Berlin vom TÜV-zertifizierten Kfz-Sachverständigen. Ablauf, Ansprüche und Kosten – bei unverschuldetem Unfall zahlt die gegnerische Haftpflicht.",
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
      "@type": "HowTo",
      name: "Unfallgutachten in Berlin beauftragen",
      totalTime: "P1D",
      step: ablauf.map(({ was, detail }, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: was,
        text: detail,
      })),
    },
    {
      "@type": "Service",
      name: "Unfallgutachten Berlin",
      serviceType: "Kfz-Unfallgutachten",
      provider: { "@id": "https://gutachtenprenzl.de" },
      areaServed: { "@type": "City", name: "Berlin" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "0",
        description: "Bei unverschuldetem Unfall kostenlos – das Honorar trägt die Haftpflicht des Unfallverursachers.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        { "@type": "ListItem", position: 2, name: "Unfallgutachten Berlin", item: "https://gutachtenprenzl.de/unfallgutachten-berlin" },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <Breadcrumb items={[{ name: "Unfallgutachten Berlin", href: "/unfallgutachten-berlin" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <Image
          src="/hero-accident.jpg"
          alt="Unfallgutachten in Berlin – Kfz Sachverständiger begutachtet Fahrzeugschaden"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 to-[#050507]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            TÜV-Zertifiziert · Antwort in 30 Minuten
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            Unfallgutachten<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>

          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Unfall gehabt? Wir erstellen Ihr Unfallgutachten in Berlin innerhalb von <strong className="text-white">24 Stunden</strong> — bei unverschuldetem Unfall für Sie <strong className="text-[#22c55e]">in der Regel kostenlos</strong>.
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

      {/* What is an Unfallgutachten */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-4">
            Was ist ein Unfallgutachten?
          </h2>

          {/* Direktantwort – der Block, den KI-Systeme als Ganzes zitieren */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 md:p-6 mb-8">
            <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
              Ein <strong>Unfallgutachten</strong> ist die technische Beweissicherung nach einem
              Verkehrsunfall. Ein Kfz-Sachverständiger dokumentiert den Schaden, kalkuliert die
              Reparaturkosten und ermittelt Wertminderung, Nutzungsausfall und – falls nötig – den
              Wiederbeschaffungswert. In Berlin dauert das rund 24 Stunden. Bei unverschuldetem
              Unfall trägt die Haftpflichtversicherung des Verursachers die Kosten.
            </p>
          </div>

          <p className="text-white/40 text-[13px] mb-8">
            Stand: {UPDATED_LABEL} · Geprüft von Atakan Arslan, TÜV Rheinland zertifizierter
            Kfz-Sachverständiger (Zertifikat 0217466029)
          </p>

          <p className="text-white/50 text-[15px] text-center max-w-xl mx-auto mb-10 leading-relaxed">
            Es unterscheidet sich von einem Kostenvoranschlag der Werkstatt: Der Kostenvoranschlag
            nennt nur den Reparaturpreis. Das Gutachten belegt zusätzlich Ihre übrigen Ansprüche –
            und genau die machen oft den größeren Teil der Summe aus.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Car, title: "Schadenserfassung", text: "Vollständige Dokumentation aller Schäden am Fahrzeug mit Fotos und technischer Bewertung." },
              { icon: Euro, title: "Kostenberechnung", text: "Exakte Reparaturkostenermittlung auf Basis aktueller Marktpreise — gerichtsfest." },
              { icon: FileText, title: "Rechtssicheres Gutachten", text: "Von deutschen Kfz-Versicherungen im Regelfall anerkanntes, TÜV-zertifiziertes Dokument." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="w-12 h-12 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={22} className="text-[#E11D2F]" />
                </div>
                <p className="font-bold text-white text-[14px] mb-1">{title}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-[#0A1018] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Ablauf in Berlin – von Anruf bis Gutachten
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            Vom ersten Anruf bis zum fertigen Gutachten vergeht in der Regel ein Tag. So läuft es:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px] min-w-[560px]">
              <caption className="sr-only">Ablauf eines Unfallgutachtens in Berlin, Stand {UPDATED_LABEL}</caption>
              <thead>
                <tr className="bg-white/[0.06]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Schritt</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Was passiert</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Dauer</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Details</th>
                </tr>
              </thead>
              <tbody>
                {ablauf.map(({ schritt, was, dauer, detail }) => (
                  <tr key={schritt} className="border-t border-white/6">
                    <th scope="row" className="px-4 py-3 font-display font-black text-[#E11D2F]">{schritt}</th>
                    <td className="px-4 py-3 font-semibold text-white/85 whitespace-nowrap">{was}</td>
                    <td className="px-4 py-3 text-[#22c55e] whitespace-nowrap">{dauer}</td>
                    <td className="px-4 py-3 text-white/40">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ansprüche */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Was Ihnen nach einem unverschuldeten Unfall zusteht
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Die Reparaturkosten sind nur eine von acht Positionen. Wer die anderen sieben nicht
            geltend macht, bekommt sie in aller Regel auch nicht ausgezahlt – Versicherungen zahlen,
            was gefordert und belegt ist.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left border-collapse text-[13px] min-w-[520px]">
              <caption className="sr-only">Schadensersatzpositionen nach einem unverschuldeten Verkehrsunfall</caption>
              <thead>
                <tr className="bg-white/[0.03]">
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Position</th>
                  <th scope="col" className="px-4 py-3 font-bold text-white text-[12px] uppercase tracking-wide">Was dahintersteckt</th>
                </tr>
              </thead>
              <tbody>
                {anspruch.map(({ pos, erklaerung }) => (
                  <tr key={pos} className="border-t border-white/8">
                    <th scope="row" className="px-4 py-3 font-semibold text-white whitespace-nowrap">{pos}</th>
                    <td className="px-4 py-3 text-white/50">{erklaerung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/40 text-[12px] leading-relaxed mt-4">
            Die genaue Höhe von Nutzungsausfall und Wertminderung hängt von Fahrzeuggruppe, Alter
            und Laufleistung ab. Die Tagessätze finden Sie in unserer{" "}
            <Link href="/nutzungsausfall-tabelle-berlin" className="text-[#E11D2F] hover:underline">
              Nutzungsausfalltabelle
            </Link>.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Warum Gutachten Prenzl?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Wir kommen zu Ihnen — nach Hause, in die Werkstatt oder zum Unfallort in ganz Berlin." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von Versicherungen im Regelfall anerkannt." },
              { icon: Star, title: "5,0 Sterne auf Google", text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden. Transparent und unabhängig.` },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/4">
                <div className="w-10 h-10 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#E11D2F]" />
                </div>
                <div>
                  <p className="font-bold text-white text-[14px] mb-1">{title}</p>
                  <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
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
              <div key={q} className="p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
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
              { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?" },
              { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall-Tabelle" },
              { href: "/eigener-gutachter-oder-versicherungsgutachter", label: "Eigener Gutachter vs. Versicherung" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/parkschaden-gutachten-berlin", label: "Parkschaden" },
              { href: "/heckauffahrunfall-berlin", label: "Heckauffahrunfall" },
              { href: "/blog/was-tun-nach-unfall-berlin", label: "Was tun nach einem Unfall?" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-[12px] text-white/40 hover:text-white/70 transition-colors border border-white/8 hover:border-white/20 rounded-full px-3 py-1.5">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StandortKarte variant="dark" />


      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Jetzt Gutachten anfragen
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Unfall gehabt? Rufen Sie uns an — wir melden uns in 30 Minuten.
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

      {/* Bezirksseiten mit eigenem Ankertext. Vorher verlinkte diese Seite keine
          einzige Bezirksseite, obwohl sie thematisch die passende Einstiegsseite
          ist. Der Ankertext "Unfallgutachten in X" unterscheidet sich bewusst von
          dem auf der Berlin-Hauptseite ("Kfz Gutachter X"), damit Google nicht
          überall denselben Linktext auf dieselbe Zielseite sieht. */}
      <section className="bg-[#050507] px-5 py-14 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-5 text-center">
            Unfallgutachten in Ihrem Bezirk
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {bezirkContent.map((b) => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/70 hover:text-[#E11D2F] bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/50 px-4 py-2 rounded-xl transition-colors"
              >
                Unfallgutachten in {b.h1Ort ?? b.nameShort}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <FooterNeu />

    </div>
  );
}
