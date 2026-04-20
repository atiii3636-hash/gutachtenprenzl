import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KFZ Sachverständiger Berlin Pankow – Unfallgutachten in 24h",
  description: "TÜV-zertifizierter KFZ Sachverständiger in Berlin Pankow. Unfallgutachten in 24h, kostenlos bei Fremdverschulden. Jetzt anrufen: 0155 60003661",
  alternates: { canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-pankow" },
  keywords: [
    "kfz sachverständiger pankow",
    "kfz gutachter pankow berlin",
    "unfallgutachten pankow",
    "gutachter berlin pankow weißensee",
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080D14]">

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <Image
          src="/hero-accident.jpg"
          alt="KFZ Sachverständiger bei der Schadensbegutachtung in Berlin Pankow"
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
            <span className="text-[#E11D2F]">Berlin Pankow</span>
          </h1>

          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Pankow im Berliner Norden — einer der größten Bezirke mit Prenzlauer Berg, Weißensee und Karow. Unfall in Pankow? Wir kommen direkt zu Ihnen und erstellen Ihr Gutachten in <strong className="text-white">24 Stunden</strong> — bei unverschuldetem Unfall für Sie <strong className="text-[#22c55e]">100% kostenlos</strong>.
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
            Ihr KFZ Gutachter in Berlin Pankow
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Wir kommen direkt nach Berlin Pankow — nach Hause, in die Werkstatt oder zum Unfallort." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Anerkannt von allen Versicherungen." },
              { icon: Star, title: "5,0 Sterne auf Google", text: "Über 47 echte Bewertungen von Berliner Kunden. Transparent und unabhängig." },
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

      {/* SEO Keywords Block */}
      <section className="bg-[#080D14] px-5 py-10 border-t border-white/6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-4">
            KFZ Gutachter & Sachverständiger in Berlin Pankow
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed max-w-2xl mx-auto">
            Als <strong className="text-white">KFZ Sachverständiger Berlin Pankow</strong> und <strong className="text-white">KFZ Gutachter Berlin Pankow</strong> stehen wir Ihnen nach jedem Unfall sofort zur Seite.
            Unser Unfallgutachten für Pankow ist TÜV Rheinland zertifiziert und wird von allen Versicherungen anerkannt.
            Als unabhängiger Gutachter in Berlin Pankow arbeiten wir ausschließlich in Ihrem Interesse — nicht im Interesse der Versicherung.
          </p>
          <p className="text-white/20 text-[11px] mt-4">
            kfz sachverständiger pankow · kfz gutachter pankow berlin · unfallgutachten pankow · gutachter berlin pankow weißensee
          </p>
        </div>
      </section>

      {/* Bezirks-Content */}
      <section className="bg-white px-5 py-14 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-4">
            KFZ Gutachter in Berlin Pankow
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
            Pankow ist Berlins einwohnerreichster Bezirk — von Weißensee über Buch bis nach Französisch Buchholz. Unfälle auf der Schönhauser Allee, der Berliner Straße oder am Vinetaplatz gehören zu unseren häufigsten Einsätzen. Wir kennen die lokalen Verkehrsverhältnisse und sind nach einem Unfall in Pankow schnell vor Ort.
          </p>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Unser Standort in der Prenzlauer Allee 88 ist nur wenige Minuten von Pankow entfernt. Wir kommen direkt zu Ihnen — ob in Buch, Weißensee, Heinersdorf oder ins Zentrum von Pankow.
          </p>
        </div>
      </section>

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
  );
}