import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Car, Train, Navigation } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";

const PATH = "/standorte";

export const metadata: Metadata = pageMetadata({
  title: "Standorte & Einsatzgebiet – Kfz-Gutachter in ganz Berlin",
  description:
    "Sachverständigenbüro Prenzlauer Allee 88, Berlin. Als mobiler Kfz-Gutachter in allen Berliner Bezirken vor Ort — meist innerhalb von 24 Stunden.",
  path: PATH,
  keywords: [
    "Kfz Gutachter Berlin Standort",
    "Kfz Sachverständiger in der Nähe Berlin",
    "mobiler Kfz Gutachter Berlin",
    "Sachverständigenbüro Prenzlauer Allee",
  ],
});

/* Bezirke mit Ortsteilen — trägt die lokale Sichtbarkeit und verlinkt die Bezirksseiten. */
const bezirke = [
  { name: "Pankow", href: "/kfz-sachverstaendiger-berlin-pankow", orte: "Niederschönhausen, Karow, Buch", heimat: true },
  { name: "Prenzlauer Berg", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", orte: "Schönhauser Allee, Helmholtzplatz", heimat: true },
  { name: "Weißensee", href: "/kfz-sachverstaendiger-berlin-weissensee", orte: "Antonplatz, Berliner Allee, Weißer See", heimat: true },
  { name: "Mitte", href: "/kfz-sachverstaendiger-berlin-mitte", orte: "Alexanderplatz, Wedding, Moabit" },
  { name: "Friedrichshain", href: "/kfz-sachverstaendiger-berlin-friedrichshain", orte: "Frankfurter Allee, Warschauer Str." },
  { name: "Kreuzberg", href: "/kfz-sachverstaendiger-berlin-kreuzberg", orte: "Bergmannkiez, Kottbusser Tor" },
  { name: "Neukölln", href: "/kfz-sachverstaendiger-berlin-neukoelln", orte: "Karl-Marx-Straße, Sonnenallee" },
  { name: "Schöneberg", href: "/kfz-sachverstaendiger-berlin-schoeneberg", orte: "Nollendorfplatz, Friedenau" },
  { name: "Tempelhof", href: "/kfz-sachverstaendiger-berlin-tempelhof", orte: "Tempelhofer Damm, Mariendorf" },
  { name: "Charlottenburg", href: "/kfz-sachverstaendiger-berlin-charlottenburg", orte: "Kurfürstendamm, Westend" },
  { name: "Steglitz", href: "/kfz-sachverstaendiger-berlin-steglitz", orte: "Schloßstraße, Lichterfelde" },
  { name: "Spandau", href: "/kfz-sachverstaendiger-berlin-spandau", orte: "Altstadt Spandau, Heerstraße" },
  { name: "Reinickendorf", href: "/kfz-sachverstaendiger-berlin-reinickendorf", orte: "Tegel, Wittenau, Frohnau" },
  { name: "Lichtenberg", href: "/kfz-sachverstaendiger-berlin-lichtenberg", orte: "Fennpfuhl, Rummelsburg, Karlshorst" },
  { name: "Marzahn", href: "/kfz-sachverstaendiger-berlin-marzahn", orte: "Biesdorf, Ahrensfelde, Marzahner Promenade" },
  { name: "Hellersdorf", href: "/kfz-sachverstaendiger-berlin-hellersdorf", orte: "Kaulsdorf, Mahlsdorf, Helle Mitte" },
  { name: "Treptow", href: "/kfz-sachverstaendiger-berlin-treptow", orte: "Adlershof, Baumschulenweg, Johannisthal" },
  { name: "Köpenick", href: "/kfz-sachverstaendiger-berlin-koepenick", orte: "Altstadt Köpenick, Grünau, Schmöckwitz" },
  { name: "Zehlendorf", href: "/kfz-sachverstaendiger-berlin-zehlendorf", orte: "Dahlem, Wannsee, Nikolassee" },
];

const vorOrt = [
  {
    icon: Car,
    title: "Wir kommen zu Ihnen",
    text: "Ihr Fahrzeug muss nicht fahrbereit sein und nicht abgeschleppt werden. Wir begutachten es dort, wo es steht — zu Hause, in der Werkstatt oder direkt am Unfallort.",
  },
  {
    icon: Clock,
    title: "Meist innerhalb von 24 Stunden",
    text: "Nach einem Unfall zählt jede Stunde. Den Besichtigungstermin bekommen Sie in der Regel noch am selben oder am nächsten Werktag.",
  },
  {
    icon: Navigation,
    title: "Innerhalb des Rings besonders schnell",
    text: "Weil unser Büro mitten in Pankow liegt, sind wir im S-Bahn-Ring meist in 20 bis 30 Minuten bei Ihnen. In den Außenbezirken entsprechend etwas später.",
  },
];

const anfahrt = [
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
    text: "Rund um die Uhr, auch samstags, sonntags und an Feiertagen. Feste Sprechzeiten gibt es bei uns bewusst nicht.",
  },
];

/* Place-Schema mit Bezug auf den bestehenden LocalBusiness aus dem Layout. */
const placeLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `${SITE_URL}${PATH}#place`,
  name: "Gutachten Prenzl – Sachverständigenbüro Prenzlauer Berg",
  url: `${SITE_URL}${PATH}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prenzlauer Allee 88",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    postalCode: "10405",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.5449575, longitude: 13.4279317 },
  hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY",
  containedInPlace: { "@type": "City", name: "Berlin" },
};

export default function StandorteNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={[breadcrumbLd([{ name: "Standorte", path: PATH }]), placeLd]} />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Standorte", href: "/standorte" }]} />

      <PageHero
        kicker="Standorte & Einsatzgebiet"
        title="Ein Büro."
        titleAccent="Ganz Berlin."
        lead="Fester Sitz in Prenzlauer Berg, unterwegs in allen zwölf Bezirken. In den meisten Fällen kommen wir zu Ihnen — nicht umgekehrt."
        image="/buero.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · DAS BÜRO ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Der Standort</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Prenzlauer Allee 88.
          </h2>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="relative rounded-xl overflow-hidden min-h-[320px] group" data-reveal>
              <Image
                src="/buero.jpg"
                alt="Sachverständigenbüro Gutachten Prenzl, Prenzlauer Allee 88 in Berlin Prenzlauer Berg"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 bg-[#E11D2F] text-white text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 rounded mb-3">
                  HAUPTSITZ
                </span>
                <p className="font-display font-black text-[24px] leading-tight mb-1">Berlin · Prenzlauer Berg</p>
                <p className="text-white/60 text-[13.5px]">Prenzlauer Allee 88 · 10405 Berlin</p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-7 md:p-8" data-reveal style={{ transitionDelay: "100ms" }}>
              <h3 className="font-display font-bold text-[20px] mb-5">Ihr Anlaufpunkt im Bezirk Pankow</h3>
              <p className="text-white/55 text-[14.5px] leading-relaxed mb-7">
                Unser Büro liegt direkt an der Prenzlauer Allee, wenige Minuten vom S-Bahnhof entfernt. Von hier
                aus sind wir schnell in Weißensee, an der Schönhauser Allee, am Helmholtzplatz oder in Mitte —
                und über den Ring in jedem anderen Bezirk.
              </p>

              <ul className="space-y-4 mb-7">
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Adresse</p>
                    <p className="text-[13.5px] text-white/50">Prenzlauer Allee 88, 10405 Berlin</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={17} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Telefon</p>
                    <a href={PHONE_HREF} className="text-[13.5px] text-white/50 hover:text-[#E11D2F] transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={17} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Erreichbarkeit</p>
                    <p className="text-[13.5px] text-white/50">Rund um die Uhr, auch am Wochenende</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-[#E11D2F] hover:text-white transition-colors"
              >
                In Google Maps öffnen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 · MOBIL VOR ORT ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Mobil vor Ort</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Sie bleiben, wo Sie sind.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Der Besichtigungstermin findet dort statt, wo Ihr Fahrzeug steht. Sie müssen nichts organisieren.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {vorOrt.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-[#E11D2F]" />
                </div>
                <h3 className="font-display font-bold text-[16.5px] mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · BEZIRKE ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Einsatzgebiet</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            In jedem Berliner Bezirk.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Für jeden Bezirk finden Sie eine eigene Seite mit den Besonderheiten vor Ort — Unfallschwerpunkte,
            Anfahrt und typische Schadenfälle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bezirke.map((b, i) => (
              <Link
                key={b.href}
                href={b.href}
                className="group flex items-start gap-3.5 bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 hover:bg-white/[0.05] rounded-xl p-5 transition-all"
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <MapPin
                  size={16}
                  className="text-white/25 group-hover:text-[#E11D2F] mt-0.5 flex-shrink-0 transition-colors"
                />
                <div className="min-w-0">
                  <p className="text-[14.5px] font-semibold text-white/85 group-hover:text-white transition-colors flex items-center gap-2">
                    {b.name}
                    {b.heimat && (
                      <span className="text-[9px] font-black tracking-[0.15em] text-[#E11D2F] bg-[#E11D2F]/10 border border-[#E11D2F]/25 px-1.5 py-0.5 rounded">
                        HEIMAT
                      </span>
                    )}
                  </p>
                  <p className="text-[12.5px] text-white/35 leading-snug mt-0.5">{b.orte}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · ANFAHRT & KARTE ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Anfahrt</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-12"
            data-reveal
          >
            So finden Sie uns.
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {anfahrt.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon size={19} className="text-[#E11D2F] mb-4" />
                <h3 className="font-display font-bold text-[15.5px] mb-2">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10" data-reveal>
            <iframe
              title="Standort Gutachten Prenzl, Prenzlauer Allee 88, 10405 Berlin"
              src="https://www.google.com/maps?q=Prenzlauer%20Allee%2088,%2010405%20Berlin&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Sagen Sie uns, wo Ihr Auto steht.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein Anruf oder eine WhatsApp genügt — den Rest organisieren wir.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FAF54] text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
