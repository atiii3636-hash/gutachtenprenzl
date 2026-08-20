import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Train, Car } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: { absolute: "Kontakt – Kfz-Sachverständigenbüro Prenzlauer Allee 88" },
  description:
    "So erreichen Sie Gutachten Prenzl: Prenzlauer Allee 88, 10405 Berlin. Rund um die Uhr unter 0155 60003661. Anfahrt, Öffnungszeiten und Karte.",
  alternates: { canonical: "https://gutachtenprenzl.de/kontakt" },
};

// ContactPage + LocalBusiness: Google zieht die Kontaktseite zur Verifikation der
// Adresse heran. Kein aggregateRating (self-serving reviews, siehe app/layout.tsx).
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt – Kfz Gutachten Prenzl",
  url: "https://gutachtenprenzl.de/kontakt",
  mainEntity: {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://gutachtenprenzl.de/#business",
    name: "Kfz Gutachten Prenzl - Sachverständigenbüro",
    telephone: "+4915560003661",
    email: "info@gutachtenprenzl.de",
    url: "https://gutachtenprenzl.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prenzlauer Allee 88",
      addressLocality: "Berlin",
      addressRegion: "Berlin",
      postalCode: "10405",
      addressCountry: "DE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 52.5449575, longitude: 13.4279317 },
    hasMap:
      "https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
};

const wege = [
  {
    icon: Train,
    title: "Mit S-Bahn und Tram",
    text: "S-Bahnhof Prenzlauer Allee (S8, S41, S42, S85) liegt rund 400 Meter entfernt. Die Tram M2 hält an der Prenzlauer Allee / Ostseestraße.",
  },
  {
    icon: Car,
    title: "Mit dem Auto",
    text: "Über die Prenzlauer Allee stadtauswärts, kurz hinter der Kreuzung Ostseestraße. Parkplätze finden Sie in den Seitenstraßen rund um die Grellstraße.",
  },
  {
    icon: Clock,
    title: "Wann wir erreichbar sind",
    text: "Rund um die Uhr, auch samstags, sonntags und an Feiertagen. Nach einem Unfall zählt jede Stunde, deshalb gibt es bei uns keine Sprechzeiten.",
  },
];

export default function Kontakt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="min-h-screen bg-[#080D14]">
        {/* Breadcrumb */}
        <nav aria-label="Brotkrumennavigation" className="px-5 pt-6 max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-[13px] text-white/35">
            <li>
              <Link href="/" className="hover:text-white/70 transition-colors">
                Startseite
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white/60">Kontakt</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-5 pt-10 pb-14">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
              So erreichen Sie
              <br />
              <span className="text-[#E11D2F]">Gutachten Prenzl</span>
            </h1>
            <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-8">
              Am schnellsten geht es telefonisch. Sie schildern kurz, was passiert ist,
              und wir sagen Ihnen sofort, ob und wie es weitergeht. Ein Anruf kostet Sie nichts
              und Sie sind zu nichts verpflichtet.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all"
              >
                <Phone size={18} />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Kontaktdaten */}
        <section className="bg-white px-5 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-8 leading-tight">
              Sachverständigenbüro Prenzlauer Berg
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-5 text-[15px]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#080D14]">Adresse</span>
                    <span className="text-gray-600">
                      Prenzlauer Allee 88
                      <br />
                      10405 Berlin
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#080D14]">Telefon</span>
                    <a href={PHONE_HREF} className="text-gray-600 hover:text-[#E11D2F] transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#080D14]">E-Mail</span>
                    <a
                      href="mailto:info@gutachtenprenzl.de"
                      className="text-gray-600 hover:text-[#E11D2F] transition-colors"
                    >
                      info@gutachtenprenzl.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#080D14]">Öffnungszeiten</span>
                    <span className="text-gray-600">Rund um die Uhr geöffnet</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
                <p>
                  Unser Büro liegt an der Prenzlauer Allee 88 in Berlin-Prenzlauer Berg,
                  wenige Minuten vom S-Bahnhof Prenzlauer Allee entfernt. Sie müssen aber
                  nicht zu uns kommen: In den allermeisten Fällen fahren wir zu Ihnen,
                  nach Hause, in die Werkstatt oder direkt an den Unfallort.
                </p>
                <p>
                  Verantwortlicher Sachverständiger ist Atakan Arslan, zertifiziert vom
                  TÜV Rheinland unter der Zertifikat-ID 0217466029.
                </p>
              </div>
            </div>

            {/* Karte */}
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="Standort Gutachten Prenzl, Prenzlauer Allee 88, 10405 Berlin"
                src="https://www.google.com/maps?q=Prenzlauer%20Allee%2088,%2010405%20Berlin&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>

        {/* Anfahrt */}
        <section className="bg-[#080D14] px-5 py-16 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[38px] leading-tight mb-8">
              Anfahrt und Erreichbarkeit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {wege.map((w) => (
                <div key={w.title} className="bg-[#0C1420] border border-white/8 rounded-2xl p-6">
                  <w.icon size={20} className="text-[#E11D2F] mb-3" />
                  <h3 className="font-semibold text-white text-[15px] mb-2">{w.title}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
