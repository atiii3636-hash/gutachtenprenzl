import type { Metadata } from "next";
import { Phone, MessageCircle, ShieldCheck, Award, MapPin, Clock, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import { FALLBACK_REVIEWS } from "@/components/google-reviews-section";

export const metadata: Metadata = {
  title: { absolute: "Über uns – TÜV-zertifizierter KFZ Sachverständiger" },
  description:
    "Ihr KFZ-Sachverständigenbüro in Prenzlauer Berg: TÜV-zertifiziert, persönliche Betreuung, Gutachten in 24h. ☎ 0155 60003661",
  alternates: { canonical: "https://gutachtenprenzl.de/ueber-uns" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://gutachtenprenzl.de/#business",
  name: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
  description:
    "TÜV Rheinland zertifiziertes KFZ Sachverständigenbüro in Berlin Prenzlauer Berg. Unfallgutachten in 24 Stunden, kostenlos bei Fremdverschulden. Tätig in allen Berliner Bezirken.",
  url: "https://gutachtenprenzl.de",
  telephone: "+4915560003661",
  email: "info@gutachtenprenzl.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prenzlauer Allee 88",
    addressLocality: "Berlin",
    postalCode: "10405",
    addressCountry: "DE",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "TÜV Rheinland Zertifikat KFZ Sachverständiger",
    credentialCategory: "certification",
    recognizedBy: {
      "@type": "Organization",
      name: "TÜV Rheinland",
      url: "https://www.tuv.com",
    },
    identifier: "0217466029",
    validUntil: "2028-12-18",
  },
  // Kein aggregateRating: selbst ausgezeichnete Bewertungen sind auf der eigenen
  // Domain laut Google-Richtlinien unzulässig. Siehe Kommentar in app/layout.tsx.
};

const credentials = [
  {
    icon: ShieldCheck,
    title: "TÜV Rheinland zertifiziert",
    text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von deutschen Kfz-Versicherungen im Regelfall anerkannt.",
  },
  {
    icon: Award,
    title: "5,0 Sterne auf Google",
    text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden — transparent, unabhängig, ungekauft.`,
  },
  {
    icon: MapPin,
    title: "Büro in Prenzlauer Berg",
    text: "Prenzlauer Allee 88, 10405 Berlin. Kurze Wege, schnelle Reaktionszeiten in ganz Berlin.",
  },
  {
    icon: Clock,
    title: "24/7 erreichbar",
    text: "Unfälle passieren zu jeder Zeit. Wir sind rund um die Uhr für Sie da — auch am Wochenende.",
  },
];

const leistungen = [
  "Unfallgutachten bei Haftpflichtschäden",
  "Totalschaden- und Wiederbeschaffungswertgutachten",
  "Parkschadengutachten (auch bei Fahrerflucht)",
  "Heckauffahrunfall-Dokumentation",
  "Schadensregulierung mit der Versicherung",
  "Gutachten für alle Berliner Bezirke",
  "Direkte Kommunikation mit der Versicherung",
  "Rechtssichere, gerichtsverwertbare Gutachten",
];

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-[#080D14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-5 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E11D2F]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2F]" />
            Sachverständigenbüro Berlin Prenzlauer Berg
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Gutachten Prenzl –<br />
            <span className="text-[#E11D2F]">Wer wir sind</span>
          </h1>

          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-8">
            TÜV Rheinland zertifiziertes Sachverständigenbüro mit Sitz in Berlin Prenzlauer Berg.
            Bei jedem Auftrag sprechen Sie direkt mit Ihrem Sachverständigen — kein Callcenter, kein anonymes Großbüro.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all"
            >
              <Phone size={18} />
              0155 60003661
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
        </div>
      </section>

      {/* Wer wir sind */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-[#E11D2F]" />
            Über uns
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-6 leading-tight">
            Unabhängig. Zertifiziert. Persönlich.
          </h2>

          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
            <p>
              Gutachten Prenzl ist ein <strong className="text-[#080D14]">TÜV Rheinland zertifiziertes
              Sachverständigenbüro</strong> mit Sitz in der Prenzlauer Allee 88 in Berlin-Prenzlauer Berg.
              Inhaber und verantwortlicher Sachverständiger ist <strong className="text-[#080D14]">Atakan Arslan</strong>
              {" "}(TÜV Rheinland Zertifikat 0217466029, gültig bis 18.12.2028). Wir erstellen Kfz-Gutachten, die von
              deutschen Versicherungen im Regelfall anerkannt und vor Gericht verwertbar sind. Beratung auf Deutsch,
              Türkisch und Englisch.
            </p>
            <p>
              Als kleines, unabhängiges Büro stehen wir persönlich bei jedem Auftrag zur Verfügung —
              kein anonymes Callcenter, keine weitergeleiteten Anfragen. Sie sprechen direkt mit dem
              zuständigen Sachverständigen und erhalten Ihr Gutachten innerhalb von <strong className="text-[#080D14]">24 Stunden</strong>.
            </p>
            <p>
              Wir sind mobil und kommen zu Ihnen — nach Hause, in die Werkstatt oder direkt an den
              Unfallort. Unser Einsatzgebiet umfasst alle Berliner Bezirke.
            </p>
            <p>
              Viele Berliner wissen nicht, dass sie nach einem unverschuldeten Unfall das gesetzliche
              Recht auf einen eigenen, unabhängigen Gutachter haben — und dass sie dafür keinen Cent
              zahlen müssen. Die Haftpflichtversicherung des Verursachers trägt alle Kosten.
              Genau das zu erklären und durchzusetzen ist unsere Aufgabe.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Qualifikationen & Stärken
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map(({ icon: Icon, title, text }) => (
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

          <div className="mt-4 bg-gradient-to-r from-[#E11D2F]/8 to-transparent border border-[#E11D2F]/20 rounded-2xl px-5 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#E11D2F]/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} className="text-[#E11D2F]" />
            </div>
            <div>
              <p className="text-white font-bold text-[13px]">TÜV Rheinland Zertifikat</p>
              <p className="text-white/40 text-[12px]">ID: 0217466029 · Gültig bis 18.12.2028 · Von deutschen Versicherungen im Regelfall anerkannt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-10">
            Was wir für Sie tun
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {leistungen.map((l) => (
              <div key={l} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle size={16} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <p className="text-[#080D14] text-[14px] font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="bg-[#080D14] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/60 text-[14px]">5,0 · {REVIEW_COUNT} Bewertungen auf Google</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FALLBACK_REVIEWS.slice(0, 4).map(({ name, text }) => (
              <div key={name} className="p-5 rounded-2xl border border-white/8 bg-white/4">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-[13px] leading-relaxed mb-3 italic">„{text}"</p>
                <p className="text-white font-semibold text-[13px]">{name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-[13px] transition-colors underline underline-offset-2"
            >
              Alle Bewertungen auf Google ansehen →
            </a>
          </div>
        </div>
      </section>

      {/* Ratgeber-Hinweis */}
      <section className="bg-[#0A1018] px-5 py-12 border-t border-white/6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display font-black text-xl text-white uppercase mb-3">
            Ratgeber & Tipps
          </h3>
          <p className="text-white/50 text-[14px] mb-6">
            In unserem Blog erklären wir, welche Rechte Sie als Unfallgeschädigter haben
            und wie Sie den maximalen Schadensersatz durchsetzen.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-all"
          >
            Zum Ratgeber →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Jetzt Kontakt aufnehmen
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Sie erreichen uns direkt — kein Umweg, kein Callcenter.
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
