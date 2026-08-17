import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, AlertCircle, FileText, Euro, Car, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: "Heckauffahrunfall Berlin – Gutachten & Schadensersatz" },
  description: "Versicherung bewertet oft zu niedrig. Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
  keywords: [
    "heckauffahrunfall berlin",
    "auffahrunfall berlin gutachten",
    "heckschaden gutachter berlin",
    "auffahrunfall schadensersatz berlin",
    "heckauffahrunfall was tun berlin",
    "gutachter heckschaden berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/heckauffahrunfall-berlin" },
  openGraph: {
    title: "Heckauffahrunfall Berlin – Gutachten & Schadensersatz",
    description: "Kostenloser KFZ Gutachter nach Heckauffahrunfall in Berlin. TÜV-zertifiziert, 24h Gutachten.",
    url: "https://gutachtenprenzl.de/heckauffahrunfall-berlin",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was tun nach einem Heckauffahrunfall in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nach einem Heckauffahrunfall in Berlin: Polizei rufen (wenn nötig), Fotos machen, Personalien des Unfallverursachers notieren und sofort einen eigenen unabhängigen KFZ Sachverständigen beauftragen. Keinen Gutachter der gegnerischen Versicherung akzeptieren. Bei Fremdverschulden zahlen Sie 0 €.",
          },
        },
        {
          "@type": "Question",
          name: "Wer zahlt den Schaden beim Heckauffahrunfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei einem Heckauffahrunfall ist in der Regel der Auffahrende schuld. Dessen Haftpflichtversicherung trägt alle Kosten: Gutachten, Reparatur, Mietwagen, Nutzungsausfall und Schmerzensgeld.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist der Minderwert nach einem Heckauffahrunfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nach einem reparierten Heckauffahrunfall verliert Ihr Fahrzeug an Wert — auch wenn es perfekt repariert ist. Dieser merkantile Minderwert muss von der Versicherung zusätzlich zur Reparatur erstattet werden. Ein eigener Gutachter berechnet ihn korrekt — der Versicherungsgutachter lässt ihn oft weg.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Schäden entstehen beim Heckauffahrunfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Heckauffahrunfälle verursachen oft mehr als sichtbar: Stoßstanger, Kofferraum, Heckklappe, Rückleuchten, Träger-Rahmenteile (Longerons), Anhängerkupplungs-Aufnahme und bei höheren Geschwindigkeiten auch Fahrwerk und Getriebe. Versteckte Schäden erkennt nur ein unabhängiger Gutachter.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange dauert die Schadensregulierung nach einem Heckauffahrunfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mit eigenem Gutachten und korrekter Schadensanzeige regelt sich der Heckauffahrunfall in der Regel innerhalb von 4–8 Wochen. Wir übernehmen die gesamte Kommunikation mit der Versicherung.",
          },
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
      url: "https://gutachtenprenzl.de",
      telephone: "+4915560003661",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Prenzlauer Allee 88",
        addressLocality: "Berlin",
        postalCode: "10405",
        addressCountry: "DE",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        { "@type": "ListItem", position: 2, name: "Heckauffahrunfall Berlin", item: "https://gutachtenprenzl.de/heckauffahrunfall-berlin" },
      ],
    },
  ],
};

export default function HeckauffahrunfallBerlin() {
  return (
    <div className="min-h-screen bg-[#080D14]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] to-[#080D14]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2F] animate-pulse" />
            Heckauffahrunfall — Sofortmaßnahmen
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            Heckauffahrunfall<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>
          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Jemand ist Ihnen aufgefahren? Als TÜV-zertifizierter KFZ Sachverständiger in Berlin sichern wir Ihren <strong className="text-white">vollen Schadensersatz</strong> — inklusive Minderwert und Nutzungsausfall. Bei Fremdverschulden <strong className="text-[#22c55e]">kostenlos für Sie</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a href="tel:+4915560003661" className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all">
              <Phone size={18} />Jetzt anrufen: 0155 60003661
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all">
              <MessageCircle size={18} />WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[{ val: "24h", label: "Gutachten" }, { val: "0 €", label: "Bei Fremdverschulden" }, { val: "TÜV", label: "Zertifiziert" }, { val: "5,0★", label: "Google" }].map(({ val, label }) => (
              <div key={val} className="text-center">
                <p className="font-display font-black text-white text-[28px] leading-none">{val}</p>
                <p className="text-white/35 text-[11px] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wichtig: Was zu tun ist */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/8 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            <AlertCircle size={12} />Sofortmaßnahmen nach dem Auffahrunfall
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-6">
            Was tun nach einem Heckauffahrunfall in Berlin?
          </h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Fahrzeug sichern & Polizei verständigen", text: "Warnblinkanlage an, Warndreieck aufstellen. Polizei rufen wenn Personenschäden vorliegen oder Unfallhergang unklar ist — Polizeiprotokoll ist wertvoll bei der Regulierung." },
              { step: "2", title: "Fotos machen & Daten notieren", text: "Fahrzeug des Verursachers, Kennzeichen, Führerschein, Versicherungsschein, Personalien. Fotos von beiden Fahrzeugen aus mehreren Winkeln, Straßensituation und Bremsspuren." },
              { step: "3", title: "Eigenen KFZ Gutachter beauftragen — JETZT", text: "Beauftragen Sie sofort einen eigenen unabhängigen Gutachter. Keinen Gutachter der gegnerischen Versicherung annehmen — der arbeitet für die Versicherung, nicht für Sie." },
              { step: "4", title: "Nicht unterschreiben ohne Gutachten", text: "Unterschreiben Sie keine Vergleichsangebote, Regulierungsvereinbarungen oder Reparaturaufträge, bevor ein unabhängiges Gutachten vorliegt." },
            ].map(({ step, title, text }) => (
              <div key={step} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-8 h-8 bg-[#E11D2F] rounded-lg flex items-center justify-center flex-shrink-0 font-display font-black text-white text-[14px]">{step}</div>
                <div>
                  <p className="font-bold text-[#080D14] text-[14px] mb-1">{title}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versteckte Schäden */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-4">
            Diese Schäden übersieht der Versicherungsgutachter
          </h2>
          <p className="text-white/50 text-[15px] text-center mb-10 leading-relaxed">
            Heckauffahrunfälle sind heimtückisch: Die sichtbaren Schäden an Stoßstange und Heckklappe sind oft nur die Spitze des Eisbergs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Car, title: "Träger & Longerons", text: "Längsträger hinter der Stoßstange verformen sich bereits bei 15 km/h — für das Auge unsichtbar, aber teuer in der Reparatur." },
              { icon: FileText, title: "Merkantiler Minderwert", text: "Auch ein perfekt repariertes Unfallfahrzeug verliert Marktwert. Dieser Minderwert muss separat erstattet werden — der Versicherungsgutachter vergisst ihn gern." },
              { icon: Euro, title: "Nutzungsausfall", text: "Für jeden Tag ohne Ihr Fahrzeug steht Ihnen Nutzungsausfall zu — selbst wenn Sie sich keinen Mietwagen genommen haben. Pro Tag 23–59 €." },
              { icon: Shield, title: "Anhängerkupplung & Fahrwerk", text: "Bei Fahrzeugen mit AHK und bei stärkeren Auffahrungen auch Fahrwerk, Getriebe und Abgasanlage. Nur vollständige Erfassung sichert Ihren Anspruch." },
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

      {/* Warum eigener Gutachter */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-4">
            Eigener Gutachter vs. Versicherungsgutachter
          </h2>
          <p className="text-gray-500 text-[15px] text-center mb-10">
            Der Unterschied kann Tausende Euro bedeuten.
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <div className="grid grid-cols-3 bg-[#080D14] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white/50">
              <span>Was wird bewertet</span>
              <span className="text-center text-red-400">Versicherungsgutachter</span>
              <span className="text-center text-[#22c55e]">Gutachten Prenzl</span>
            </div>
            {[
              ["Sichtbare Schäden", "✓", "✓"],
              ["Versteckte Strukturschäden", "Oft ignoriert", "✓ vollständig"],
              ["Merkantiler Minderwert", "Oft vergessen", "✓ berechnet"],
              ["Nutzungsausfall", "Selten", "✓ immer"],
              ["Wertminderung bei älterem Fzg.", "Meist nicht", "✓"],
              ["Wer bezahlt das Gutachten?", "Versicherung", "Versicherung"],
            ].map(([item, v, g], i) => (
              <div key={item} className={`grid grid-cols-3 px-5 py-4 text-[13px] ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-t border-gray-100`}>
                <span className="text-gray-700 font-medium">{item}</span>
                <span className="text-center text-red-500">{v}</span>
                <span className="text-center text-[#16a34a] font-medium">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase text-center mb-10">Warum Gutachten Prenzl?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Haftpflicht trägt alle Kosten. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Wir kommen zu Ihnen — nach Hause, Werkstatt oder Unfallort in ganz Berlin." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "ID 0217466029, gültig bis 18.12.2028. Von Versicherungen im Regelfall anerkannt." },
              { icon: FileText, title: "Vollständige Schadenserfassung", text: "Reparaturkosten, Minderwert, Nutzungsausfall — nichts wird vergessen." },
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
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-10">
            Häufige Fragen nach dem Heckauffahrunfall
          </h2>
          <div className="space-y-4">
            {[
              { q: "Was tun nach einem Heckauffahrunfall in Berlin?", a: "Fahrzeug sichern, Fotos machen, Personalien notieren — und sofort einen eigenen KFZ Gutachter beauftragen. Keinen Gutachter der gegnerischen Versicherung annehmen. Bei Fremdverschulden zahlen Sie 0 €." },
              { q: "Wer zahlt den Schaden beim Heckauffahrunfall?", a: "In der Regel der Auffahrende. Dessen Haftpflichtversicherung trägt alle Kosten: Gutachten, Reparatur, Mietwagen, Nutzungsausfall und Schmerzensgeld — solange Sie keinen Verursacheranteil haben." },
              { q: "Was ist der Minderwert nach einem Heckauffahrunfall?", a: "Auch ein vollständig repariertes Fahrzeug verliert nach einem Unfall an Marktwert. Dieser merkantile Minderwert muss von der Versicherung erstattet werden. Ein unabhängiger Gutachter berechnet ihn korrekt — bei jüngeren Fahrzeugen können das 500–3.000 € sein." },
              { q: "Wie lange dauert die Schadensregulierung nach einem Heckauffahrunfall?", a: "Mit einem vollständigen Gutachten und korrekter Schadensmeldung: 4–8 Wochen. Wir übernehmen die gesamte Kommunikation mit der gegnerischen Versicherung." },
              { q: "Kann ich trotz Heckauffahrunfall ein Nutzungsausfallentschädigung bekommen?", a: "Ja — für jeden Tag, an dem Ihr Fahrzeug nicht fahrbereit ist, steht Ihnen Nutzungsausfall zu. Das gilt auch wenn Sie keinen Mietwagen nehmen. Die Höhe richtet sich nach Fahrzeugklasse (23–59 € pro Tag)." },
            ].map(({ q, a }) => (
              <div key={q} className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <p className="font-bold text-[#080D14] text-[14px] mb-2">{q}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to districts */}
      <section className="bg-[#080D14] px-5 py-12 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4 text-center">
            Heckauffahrunfall Gutachter in Ihrem Bezirk
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", label: "Prenzlauer Berg" },
              { href: "/kfz-sachverstaendiger-berlin-pankow", label: "Pankow" },
              { href: "/kfz-sachverstaendiger-berlin-mitte", label: "Mitte" },
              { href: "/kfz-sachverstaendiger-berlin-friedrichshain", label: "Friedrichshain" },
              { href: "/kfz-sachverstaendiger-berlin-kreuzberg", label: "Kreuzberg" },
              { href: "/kfz-sachverstaendiger-berlin-charlottenburg", label: "Charlottenburg" },
              { href: "/kfz-sachverstaendiger-berlin-neukoelln", label: "Neukölln" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center gap-1 text-[12px] text-white/40 hover:text-white/70 transition-colors border border-white/8 hover:border-white/20 rounded-full px-3 py-1.5">
                <ArrowRight size={10} />{label}
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
            Heckauffahrunfall in Berlin? Rufen Sie jetzt an — wir melden uns in 30 Minuten.
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

      <div className="bg-[#080D14] px-5 py-6 text-center">
        <p className="text-white/25 text-[12px]">
          © 2026 Gutachten Prenzl ·{" "}
          <Link href="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
          {" · "}
          <Link href="/datenschutz" className="hover:text-white/50 transition-colors">Datenschutz</Link>
        </p>
      </div>
    </div>
  );
}
