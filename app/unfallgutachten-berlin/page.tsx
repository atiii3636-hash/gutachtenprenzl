import type { Metadata } from "next";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, FileText, Car, Euro } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unfallgutachten Berlin – In 24h kostenlos | Gutachten Prenzl",
  description: "Unfallgutachten in Berlin: TÜV-zertifizierter KFZ Sachverständiger erstellt Ihr Gutachten in 24h. Bei Fremdverschulden 100% kostenlos. 0155 60003661",
  alternates: { canonical: "https://gutachtenprenzl.de/unfallgutachten-berlin" },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080D14]">

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-car.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D14]/60 to-[#080D14]" />

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
            Unfall gehabt? Wir erstellen Ihr Unfallgutachten in Berlin innerhalb von <strong className="text-white">24 Stunden</strong> — bei unverschuldetem Unfall für Sie <strong className="text-[#22c55e]">100% kostenlos</strong>.
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

      {/* What is an Unfallgutachten */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-4">
            Was ist ein Unfallgutachten?
          </h2>
          <p className="text-gray-500 text-[15px] text-center max-w-xl mx-auto mb-10 leading-relaxed">
            Ein Unfallgutachten dokumentiert den Schaden an Ihrem Fahrzeug nach einem Verkehrsunfall — rechtssicher, versicherungsanerkannt und innerhalb von 24 Stunden.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Car, title: "Schadenserfassung", text: "Vollständige Dokumentation aller Schäden am Fahrzeug mit Fotos und technischer Bewertung." },
              { icon: Euro, title: "Kostenberechnung", text: "Exakte Reparaturkostenermittlung auf Basis aktueller Marktpreise — gerichtsfest." },
              { icon: FileText, title: "Rechtssicheres Gutachten", text: "Von allen deutschen Kfz-Versicherungen anerkanntes, TÜV-zertifiziertes Dokument." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-12 h-12 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={22} className="text-[#E11D2F]" />
                </div>
                <p className="font-bold text-[#080D14] text-[14px] mb-1">{title}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Warum Gutachten Prenzl?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Wir kommen zu Ihnen — nach Hause, in die Werkstatt oder zum Unfallort in ganz Berlin." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von allen Versicherungen anerkannt." },
              { icon: Star, title: "5,0 Sterne auf Google", text: "Über 47 echte Bewertungen von Berliner Kunden. Transparent und unabhängig." },
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
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Wann brauche ich ein Unfallgutachten?",
                a: "Bei jedem Unfall mit Fremdverschulden ab einem geschätzten Schaden von ca. 750 € haben Sie das Recht auf ein unabhängiges Kfz-Gutachten. Bei Haftpflichtschäden ist es sogar empfohlen, da es Ihren Anspruch absichert.",
              },
              {
                q: "Was kostet ein Unfallgutachten in Berlin?",
                a: "Bei unverschuldetem Unfall entstehen Ihnen keinerlei Kosten — die Haftpflichtversicherung des Unfallverursachers übernimmt alle Gutachterkosten vollständig. Sie zahlen 0 €.",
              },
              {
                q: "Wie lange dauert ein Unfallgutachten?",
                a: "Die Besichtigung Ihres Fahrzeugs dauert ca. 30–60 Minuten. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung.",
              },
              {
                q: "Muss ich mit dem Auto zu Ihnen kommen?",
                a: "Nein — wir kommen zu Ihnen. Als mobiler Kfz-Sachverständiger in Berlin fahren wir direkt zu Ihrem Standort, nach Hause oder in die Werkstatt.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <p className="font-bold text-[#080D14] text-[14px] mb-2">{q}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
  );
}
