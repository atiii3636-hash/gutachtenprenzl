import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Camera, MapPin, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: "Parkschaden Gutachten Berlin – KFZ Gutachter 24h" },
  description: "Auch ohne bekannten Verursacher: Gutachten in 24h, Kasko übernimmt oft die Kosten. ☎ 0155 60003661",
  keywords: [
    "parkschaden gutachten berlin",
    "parkschaden gutachter berlin",
    "parkschaden berlin was tun",
    "parkschaden berlin versicherung",
    "delle am auto berlin gutachter",
    "hit and run berlin gutachten",
    "parkrempler berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/parkschaden-gutachten-berlin" },
  openGraph: {
    title: "Parkschaden Gutachten Berlin – KFZ Gutachter 24h",
    description: "Parkschaden in Berlin? Kostenloser KFZ Gutachter kommt zu Ihnen. TÜV-zertifiziert, 24h Gutachten.",
    url: "https://gutachtenprenzl.de/parkschaden-gutachten-berlin",
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
          name: "Was tun wenn man in Berlin einen Parkschaden am Auto entdeckt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fotos machen, Polizei informieren (wichtig für Versicherung), Zeugen ansprechen, Kaskoversicherung melden und sofort einen KFZ Sachverständigen beauftragen. Der Gutachter dokumentiert den Schaden rechtssicher. Falls kein Verursacher ermittelbar ist, übernimmt in der Regel Ihre Vollkaskoversicherung die Kosten — die Teilkasko schließt einfache Parkrempler durch unbekannte Fahrzeuge meist aus.",
          },
        },
        {
          "@type": "Question",
          name: "Zahlt die Versicherung bei einem Parkschaden ohne bekannten Verursacher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja — wenn kein Verursacher ermittelt werden kann, übernimmt in der Regel Ihre Vollkaskoversicherung. Die Teilkasko deckt nur einen festen Schadenkatalog (z. B. Diebstahl, Brand, Wildschaden, Glasbruch) und greift bei einem einfachen Parkrempler meist nicht. Wichtig: Schaden der Polizei melden und sofort ein Gutachten erstellen lassen.",
          },
        },
        {
          "@type": "Question",
          name: "Lohnt sich ein Gutachten bei einem kleinen Parkschaden in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja — denn ohne Gutachten zahlt die Versicherung oft deutlich weniger als der Schaden tatsächlich beträgt. Schon bei Dellen und Kratzern ab 750 € empfiehlt sich ein Sachverständigengutachten. Liegt ein Verursacher vor, zahlt dieser alle Gutachterkosten.",
          },
        },
        {
          "@type": "Question",
          name: "Wie schnell kommt ein KFZ Gutachter nach Berlin bei einem Parkschaden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In der Regel am selben oder nächsten Tag. Wir kommen zu Ihnen — zum Parkplatz, nach Hause oder in die Werkstatt in ganz Berlin. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung.",
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
        { "@type": "ListItem", position: 2, name: "Parkschaden Gutachten Berlin", item: "https://gutachtenprenzl.de/parkschaden-gutachten-berlin" },
      ],
    },
  ],
};

export default function ParkshadenBerlin() {
  return (
    <div className="min-h-screen bg-[#080D14]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a100a] to-[#080D14]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            TÜV-Zertifiziert · Gutachten in 24h
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            Parkschaden Gutachten<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>
          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Schaden am geparkten Auto entdeckt? Wir kommen zu Ihnen — <strong className="text-white">auch ohne bekannten Verursacher</strong>. TÜV-zertifiziertes Gutachten in 24 Stunden. Bei Fremdverschulden <strong className="text-[#22c55e]">kostenlos</strong>.
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

      {/* Sofortmaßnahmen */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-2">
            Parkschaden in Berlin entdeckt — was jetzt?
          </h2>
          <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
            Berlin ist eine Parkschadenhauptstadt: Enge Straßen, Parkplatzmangel, hastige Fahrer. Fast jeder Berliner kennt das — man kommt zurück zum Auto und findet eine neue Delle. So gehen Sie richtig vor:
          </p>
          <div className="space-y-3">
            {[
              { step: "1", title: "Sofort Fotos machen", text: "Dokumentieren Sie den Schaden aus verschiedenen Winkeln: Nahaufnahme, Übersicht, Straßensituation. Wenn vorhanden: andere Fahrzeuge in der Nähe, Kameras, Zeugen." },
              { step: "2", title: "Polizei benachrichtigen", text: "Bei Fahrerflucht (unbekannter Verursacher) unbedingt Anzeige erstatten. Das Protokoll ist wichtig für die Kaskoversicherung. Aktenzeichen notieren." },
              { step: "3", title: "Versicherung informieren", text: "Ihre Kaskoversicherung melden. Wenn der Verursacher bekannt ist: dessen Haftpflichtversicherung. Keinen Schuld eingestehen oder Vergleich akzeptieren." },
              { step: "4", title: "KFZ Gutachter beauftragen", text: "Ein Gutachten sichert den vollen Schadensersatz. Ohne Gutachten zahlen Versicherungen oft pauschal zu wenig. Wir kommen direkt zu Ihnen in Berlin." },
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

      {/* Drei Szenarien */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase text-center mb-10">
            Wer zahlt Ihren Parkschaden in Berlin?
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Verursacher bekannt und gesteht",
                badge: "Haftpflicht des Verursachers",
                badgeColor: "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20",
                text: "Perfekter Fall: Die Haftpflichtversicherung des Verursachers zahlt alles — Gutachten, Reparatur, Minderwert, Nutzungsausfall. Für Sie 0 €. Wir übernehmen die Kommunikation.",
              },
              {
                title: "Verursacher bekannt, bestreitet Schuld",
                badge: "Haftpflicht + ggf. Anwalt",
                badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                text: "Mit einem Gutachten haben Sie ein rechtssicheres Dokument. Versicherungen und Gerichte akzeptieren unser TÜV-zertifiziertes Gutachten. Ein Anwalt kann zusätzlich helfen — wir vernetzen Sie gern.",
              },
              {
                title: "Fahrerflucht — Verursacher unbekannt",
                badge: "Ihre Kaskoversicherung",
                badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                text: "Keine Panik: Bei Fahrerflucht übernimmt in der Regel Ihre Vollkaskoversicherung. Die Teilkasko deckt Parkrempler durch unbekannte Fahrzeuge meist nicht, sondern nur einen festen Schadenkatalog. Polizeibericht und Gutachten sind hier entscheidend.",
              },
            ].map(({ title, badge, badgeColor, text }) => (
              <div key={title} className="p-6 rounded-2xl border border-white/8 bg-white/4">
                <div className="flex items-start gap-3 mb-3">
                  <p className="font-bold text-white text-[15px] flex-1">{title}</p>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${badgeColor}`}>{badge}</span>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berliner Hotspots */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-[#080D14] uppercase mb-4">
            Parkschadenhäufungen in Berlin
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            In Berlin entstehen Parkschäden besonders häufig in Bezirken mit hohem Parkdruck. Als lokaler KFZ Sachverständiger mit Sitz in <strong className="text-[#080D14]">Prenzlauer Berg</strong> kennen wir die Hotspots und sind schnell vor Ort.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { bezirk: "Prenzlauer Berg", details: "Schönhauser Allee, Kastanienallee, Kollwitzplatz — extremer Parkdruck", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg" },
              { bezirk: "Pankow", details: "Breite Straße, Berliner Straße, Florastraße", href: "/kfz-sachverstaendiger-berlin-pankow" },
              { bezirk: "Mitte", details: "Hackescher Markt, Rosenthaler Platz, Torstraße", href: "/kfz-sachverstaendiger-berlin-mitte" },
              { bezirk: "Friedrichshain", details: "Frankfurter Allee, Warschauer Straße, Revaler Str.", href: "/kfz-sachverstaendiger-berlin-friedrichshain" },
              { bezirk: "Kreuzberg", details: "Bergmannkiez, Kottbusser Tor, Gneisenaustraße", href: "/kfz-sachverstaendiger-berlin-kreuzberg" },
              { bezirk: "Charlottenburg", details: "Kurfürstendamm, Savignyplatz, Kantstraße", href: "/kfz-sachverstaendiger-berlin-charlottenburg" },
            ].map(({ bezirk, details, href }) => (
              <Link key={bezirk} href={href} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#E11D2F]/30 hover:bg-[#E11D2F]/3 transition-all group">
                <MapPin size={15} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#080D14] text-[13px] group-hover:text-[#E11D2F] transition-colors">{bezirk}</p>
                  <p className="text-gray-400 text-[12px]">{details}</p>
                </div>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-[#E11D2F] transition-colors mt-0.5 ml-auto flex-shrink-0" />
              </Link>
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
              { icon: CheckCircle, title: "Kostenlos bei bekanntem Verursacher", text: "Die Haftpflichtversicherung des Verursachers trägt alle Gutachterkosten." },
              { icon: Clock, title: "Same-Day Termin in Berlin", text: "Wir kommen direkt zu Ihrem Auto — Parkplatz, Werkstatt oder Wohnadresse." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Rechtssichere Gutachten, von Gerichten und Versicherungen im Regelfall anerkannt." },
              { icon: Camera, title: "Vollständige Fotodokumentation", text: "Alle Schäden werden exakt dokumentiert — nichts wird für spätere Ansprüche vergessen." },
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
            Häufige Fragen zum Parkschaden in Berlin
          </h2>
          <div className="space-y-4">
            {[
              { q: "Was tun wenn man in Berlin einen Parkschaden am Auto entdeckt?", a: "Sofort Fotos machen, Polizei informieren (Anzeige wegen Fahrerflucht falls nötig), Versicherung melden und einen KFZ Gutachter beauftragen. Das Gutachten ist die Grundlage für Ihren Schadensersatz." },
              { q: "Zahlt die Versicherung bei einem Parkschaden ohne bekannten Verursacher?", a: "Ja — wenn vorhanden, übernimmt in der Regel Ihre Vollkaskoversicherung. Die Teilkasko deckt Parkrempler durch unbekannte Fahrzeuge meist nicht, sondern nur einen festen Schadenkatalog wie Diebstahl oder Wildschaden. Ein Polizeiprotokoll ist Voraussetzung." },
              { q: "Lohnt sich ein Gutachten bei einem kleinen Parkschaden in Berlin?", a: "Ab einem Schaden von ca. 750 € empfiehlt sich ein Gutachten. Bei Fremdverschulden trägt der Verursacher alle Kosten. Ohne Gutachten zahlen Versicherungen oft pauschale Schätzungen — zu Ihrem Nachteil." },
              { q: "Wie schnell kommt ein KFZ Gutachter nach Berlin bei einem Parkschaden?", a: "In der Regel am selben oder nächsten Tag. Wir kommen zu Ihnen — zum Parkplatz, nach Hause oder in die Werkstatt in ganz Berlin. Das fertige Gutachten innerhalb von 24 Stunden." },
              { q: "Kann ich den Parkschaden selbst reparieren lassen bevor ich ein Gutachten mache?", a: "Nein — unbedingt erst das Gutachten abwarten. Wenn das Fahrzeug bereits repariert ist, kann der Schaden nicht mehr vollständig begutachtet werden und Sie verlieren möglicherweise Ansprüche." },
            ].map(({ q, a }) => (
              <div key={q} className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <p className="font-bold text-[#080D14] text-[14px] mb-2">{q}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StandortKarte variant="dark" />


      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Parkschaden begutachten lassen
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Wir kommen zu Ihnen — heute noch. Anruf oder WhatsApp.
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
