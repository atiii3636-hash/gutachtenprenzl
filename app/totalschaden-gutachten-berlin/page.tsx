import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Euro, Car, FileText, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  title: { absolute: "Totalschaden Gutachten Berlin – Wiederbeschaffungswert" },
  description: "Versicherung zahlt oft zu wenig. Wir ermitteln den vollen Wert, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
  keywords: [
    "totalschaden gutachten berlin",
    "totalschaden berlin kfz gutachter",
    "wirtschaftlicher totalschaden berlin",
    "wiederbeschaffungswert berlin",
    "totalschaden was tun berlin",
    "totalschaden schadensersatz berlin",
    "kfz gutachter totalschaden berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/totalschaden-gutachten-berlin" },
  openGraph: {
    title: "Totalschaden Gutachten Berlin – Wiederbeschaffungswert ermitteln",
    description: "Totalschaden in Berlin? Holen Sie sich den vollen Wiederbeschaffungswert. TÜV-zertifiziert, kostenlos bei Fremdverschulden.",
    url: "https://gutachtenprenzl.de/totalschaden-gutachten-berlin",
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
          name: "Was ist ein wirtschaftlicher Totalschaden beim KFZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ein wirtschaftlicher Totalschaden liegt vor, wenn die Reparaturkosten den Wiederbeschaffungswert des Fahrzeugs übersteigen — oder wenn das Fahrzeug technisch nicht mehr reparierbar ist. In diesem Fall zahlt die Versicherung den Wiederbeschaffungswert abzüglich des Restwerts.",
          },
        },
        {
          "@type": "Question",
          name: "Wie wird der Wiederbeschaffungswert beim Totalschaden berechnet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Der Wiederbeschaffungswert ist der Preis, den Sie auf dem freien Markt für ein gleichwertiges Fahrzeug zahlen müssten. Er wird vom Gutachter anhand von Fahrzeugalter, Kilometerstand, Ausstattung und aktuellen Marktpreisen ermittelt. Wichtig: Der Versicherungsgutachter berechnet diesen oft zu niedrig.",
          },
        },
        {
          "@type": "Question",
          name: "Kann ich mein Totalschadenfahrzeug behalten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja — Sie dürfen das Unfallfahrzeug behalten. Die Versicherung zieht dann den Restwert vom Wiederbeschaffungswert ab. Wichtig: Nehmen Sie kein Restwertangebot der Versicherung an, ohne dass ein eigener Gutachter den Restwert geprüft hat — die Versicherung verwendet oft überhöhte Restwertbörsen.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist der Unterschied zwischen Wiederbeschaffungswert und Zeitwert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Der Wiederbeschaffungswert ist der aktuelle Marktpreis für ein gleichwertiges Fahrzeug (Händlerkaufpreis). Der Zeitwert ist der rein technische Wert ohne Berücksichtigung der Marktpreise. Bei Haftpflichtschäden steht Ihnen der Wiederbeschaffungswert zu — der ist fast immer höher.",
          },
        },
        {
          "@type": "Question",
          name: "Gibt es bei Totalschaden auch Nutzungsausfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja — bis Sie ein Ersatzfahrzeug beschafft haben, steht Ihnen Nutzungsausfall zu (typisch: 10–15 Tage Beschaffungszeit werden anerkannt). Alternativ können Sie einen Mietwagen nehmen — die Kosten trägt bei Fremdverschulden die Haftpflicht des Unfallverursachers.",
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
        { "@type": "ListItem", position: 2, name: "Totalschaden Gutachten Berlin", item: "https://gutachtenprenzl.de/totalschaden-gutachten-berlin" },
      ],
    },
  ],
};

export default function TotalschadenBerlin() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120808] to-[#050507]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <AlertTriangle size={11} />Totalschaden — Nicht zu wenig akzeptieren
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            Totalschaden Gutachten<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>
          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Totalschaden bedeutet nicht, dass Sie wenig bekommen. Als TÜV-zertifizierter KFZ Sachverständiger ermitteln wir Ihren korrekten <strong className="text-white">Wiederbeschaffungswert</strong> — und stellen sicher, dass die Versicherung <strong className="text-[#22c55e]">voll zahlt</strong>.
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

      {/* Was ist Totalschaden */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Was ist ein wirtschaftlicher Totalschaden?
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Von einem <strong className="text-white">wirtschaftlichen Totalschaden</strong> spricht man, wenn die Reparaturkosten den Wiederbeschaffungswert des Fahrzeugs übersteigen. Das Fahrzeug ist technisch reparierbar, aber die Reparatur wäre wirtschaftlich nicht sinnvoll. Die Versicherung zahlt dann statt der Reparatur den Wiederbeschaffungswert.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Car, title: "Technischer Totalschaden", text: "Das Fahrzeug ist nach dem Unfall nicht mehr reparierbar — z. B. nach einem Feuer oder schwerem Aufprall." },
              { icon: Euro, title: "Wirtschaftlicher Totalschaden", text: "Reparaturkosten übersteigen den Wiederbeschaffungswert. Typisch: Reparatur kostet 8.000 €, Fahrzeug ist nur 6.000 € wert." },
              { icon: FileText, title: "Fiktiver Totalschaden", text: "Sie lassen das Fahrzeug nicht reparieren und nehmen den Geldbetrag. In bestimmten Fällen können Sie die Mehrwertsteuer einsparen." },
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

      {/* Fallstricke */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase text-center mb-4">
            3 Fehler die Berliner beim Totalschaden machen
          </h2>
          <p className="text-white/50 text-[14px] text-center mb-10 leading-relaxed">
            Versicherungen nutzen Unwissenheit aus. Diese Fehler kosten Berliner jährlich Tausende Euro.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: "01",
                title: "Restwertangebot der Versicherung annehmen",
                text: "Die gegnerische Versicherung schickt oft ein hohes Restwertangebot — manchmal von Restwertbörsen, die weit über dem lokalen Marktpreis liegen. Nehmen Sie dieses Angebot nicht an, ohne es von einem unabhängigen Gutachter prüfen zu lassen. Der korrekte Restwert senkt den Abzug vom Wiederbeschaffungswert.",
              },
              {
                nr: "02",
                title: "Wiederbeschaffungswert ohne Gutachten akzeptieren",
                text: "Der Versicherungsgutachter ermittelt den Wiederbeschaffungswert — aber zu Ihren Ungunsten. Ein unabhängiger Gutachter prüft den aktuellen Markt und berechnet korrekt. Die Differenz beträgt oft 1.000–5.000 €.",
              },
              {
                nr: "03",
                title: "Fahrzeug zu schnell abgeben",
                text: "Geben Sie das Fahrzeug nicht ab, bevor ein vollständiges Gutachten vorliegt. Ist das Fahrzeug weg, können Sie keine Nachforderungen mehr stellen. Behalten Sie das Fahrzeug bis zur vollständigen Schadensregulierung.",
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

      {/* Was Ihnen zusteht */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-4">
            Was Ihnen beim Totalschaden zusteht
          </h2>
          <p className="text-white/50 text-[15px] mb-8 leading-relaxed">
            Bei einem unverschuldeten Unfall mit Totalschaden haben Sie Anspruch auf weit mehr als nur den Fahrzeugwert:
          </p>
          <div className="space-y-3">
            {[
              { title: "Wiederbeschaffungswert", desc: "Der aktuelle Marktpreis für ein gleichwertiges Ersatzfahrzeug. Grundlage: Händlerpreise, nicht Privatverkauf." },
              { title: "Abzüglich Restwert Ihres Fahrzeugs", desc: "Den Restwert bestimmt ein Gutachter anhand des lokalen Berliner Markts — nicht die Restwertbörse der Versicherung." },
              { title: "Nutzungsausfall (10–15 Tage)", desc: "Für die Beschaffungszeit eines Ersatzfahrzeugs: 23–59 € pro Tag je nach Fahrzeugklasse." },
              { title: "Mietwagenkosten (alternativ)", desc: "Statt Nutzungsausfall können Sie auch einen Mietwagen nehmen. Kosten trägt die Versicherung." },
              { title: "Abschleppkosten & Standgebühren", desc: "Kosten für Abschleppdienst und eventuelle Fahrzeugverwahrung werden vollständig erstattet." },
              { title: "Anwaltskosten", desc: "Bei unverschuldetem Unfall trägt die gegnerische Versicherung Ihre Anwaltskosten. Nutzen Sie dieses Recht." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.03]">
                <CheckCircle size={16} className="text-[#22c55e] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-[13px]">{title}</p>
                  <p className="text-white/50 text-[12px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase text-center mb-10">Warum Gutachten Prenzl?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Haftpflicht trägt alle Gutachterkosten — 0 € für Sie." },
              { icon: Euro, title: "Korrekte Wiederbeschaffungswert-Ermittlung", text: "Wir berechnen anhand des aktuellen Berliner Markts — nicht zu Gunsten der Versicherung." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "ID 0217466029, gültig bis 18.12.2028. Gerichtsverwertbar, von Versicherungen im Regelfall anerkannt." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Schnelle Bearbeitung damit Sie schnell wieder mobil sind oder das Fahrzeug abgeben können." },
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
            Häufige Fragen zum Totalschaden in Berlin
          </h2>
          <div className="space-y-4">
            {[
              { q: "Was ist ein wirtschaftlicher Totalschaden beim KFZ?", a: "Wenn die Reparaturkosten den Wiederbeschaffungswert übersteigen (oder nahe dran sind). Die Versicherung zahlt dann Wiederbeschaffungswert abzüglich Restwert — statt der Reparatur." },
              { q: "Wie wird der Wiederbeschaffungswert beim Totalschaden berechnet?", a: "Anhand des aktuellen Marktpreises für ein gleichwertiges Fahrzeug: gleiche Marke, Modell, Kilometerstand, Ausstattung, Baujahr. Der eigene Gutachter berechnet anhand von Händlerpreisen — der Versicherungsgutachter nimmt oft Privatmarktpreise." },
              { q: "Kann ich mein Totalschadenfahrzeug behalten?", a: "Ja — Sie dürfen das Fahrzeug behalten und den Differenzbetrag (Wiederbeschaffungswert minus Restwert) kassieren. Wichtig: Lassen Sie den Restwert von einem eigenen Gutachter prüfen — die Versicherung verwendet oft Restwertbörsen mit überhöhten Angeboten." },
              { q: "Was ist der Unterschied zwischen Wiederbeschaffungswert und Zeitwert?", a: "Wiederbeschaffungswert = Händlerkaufpreis für gleichwertiges Fahrzeug. Zeitwert = technischer Wert ohne Marktpreisbezug. Bei Haftpflichtschäden steht Ihnen der Wiederbeschaffungswert zu — der liegt immer höher." },
              { q: "Gibt es bei Totalschaden auch Nutzungsausfall?", a: "Ja — für die Beschaffungszeit eines Ersatzfahrzeugs (typisch 10–15 Tage) steht Ihnen Nutzungsausfall zu. Alternativ Mietwagen, dessen Kosten die gegnerische Versicherung trägt." },
            ].map(({ q, a }) => (
              <div key={q} className="p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
                <p className="font-bold text-white text-[14px] mb-2">{q}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-[#050507] px-5 py-12 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4 text-center">
            Totalschaden Gutachter in Ihrem Bezirk
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", label: "Prenzlauer Berg" },
              { href: "/kfz-sachverstaendiger-berlin-pankow", label: "Pankow" },
              { href: "/kfz-sachverstaendiger-berlin-mitte", label: "Mitte" },
              { href: "/kfz-sachverstaendiger-berlin-friedrichshain", label: "Friedrichshain" },
              { href: "/kfz-sachverstaendiger-berlin-charlottenburg", label: "Charlottenburg" },
              { href: "/kfz-sachverstaendiger-berlin-neukoelln", label: "Neukölln" },
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
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
            Totalschaden? Jetzt Gutachten anfragen.
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Nicht zu wenig akzeptieren. Wir ermitteln Ihren vollen Anspruch — kostenlos bei Fremdverschulden.
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
