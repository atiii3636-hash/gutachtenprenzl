import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, Train, Car, Zap } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import DamageFormSection from "@/components/damage-form-section";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, contactPageLd } from "@/lib/seo";

const PATH = "/kontakt";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt – Sachverständigenbüro Prenzlauer Allee 88",
  description:
    "So erreichen Sie Gutachten Prenzl: Prenzlauer Allee 88, 10405 Berlin. Rund um die Uhr telefonisch oder per WhatsApp. ☎ 0155 60003661",
  path: PATH,
  keywords: [
    "Kfz Gutachter Berlin Kontakt",
    "Sachverständigenbüro Berlin Telefon",
    "Gutachten Prenzl Kontakt",
  ],
});

const kanaele = [
  {
    icon: Phone,
    label: "Telefon",
    value: PHONE_DISPLAY,
    sub: "Rund um die Uhr, auch am Wochenende",
    href: PHONE_HREF,
    empfohlen: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Sofort schreiben",
    sub: "Antwort meist innerhalb weniger Minuten",
    href: WHATSAPP_URL,
    extern: true,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@gutachtenprenzl.de",
    sub: "Antwort innerhalb von 24 Stunden",
    href: "mailto:info@gutachtenprenzl.de",
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
    text: "Rund um die Uhr, auch samstags, sonntags und an Feiertagen. Nach einem Unfall zählt jede Stunde — feste Sprechzeiten gibt es bei uns deshalb nicht.",
  },
];

export default function KontaktNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={[breadcrumbLd([{ name: "Kontakt", path: PATH }]), contactPageLd(PATH)]} />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Kontakt", href: "/kontakt" }]} />

      <PageHero
        kicker="Kontakt"
        title="Direkt zu Ihrem"
        titleAccent="Sachverständigen."
        lead="Am schnellsten geht es telefonisch. Sie schildern kurz, was passiert ist — wir sagen Ihnen sofort, welche Ansprüche Sie haben und wie es weitergeht."
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · KONTAKTWEGE ============ */}
      <section className="px-5 pb-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {kanaele.map(({ icon: Icon, label, value, sub, href, empfohlen, extern }, i) => (
            <a
              key={label}
              href={href}
              target={extern ? "_blank" : undefined}
              rel={extern ? "noopener noreferrer" : undefined}
              className={`group relative bg-white/[0.03] border rounded-xl p-6 text-center transition-all hover:-translate-y-1 ${
                empfohlen
                  ? "border-[#E11D2F]/40 hover:border-[#E11D2F]/70"
                  : "border-white/8 hover:border-white/25"
              }`}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {empfohlen && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-[#E11D2F] text-white text-[9.5px] font-black tracking-[0.15em] px-2.5 py-1 rounded">
                  <Zap size={9} />
                  SCHNELLSTER WEG
                </span>
              )}
              <div className="w-12 h-12 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center mx-auto mb-4 mt-1 group-hover:bg-[#E11D2F]/20 transition-colors">
                <Icon size={20} className="text-[#E11D2F]" />
              </div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase mb-2">{label}</p>
              <p className="text-white font-bold text-[15.5px] mb-1.5 break-words">{value}</p>
              <p className="text-white/40 text-[12.5px] leading-snug">{sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ============ 02 · SCHADEN MELDEN ============ */}
      <DamageFormSection />

      {/* ============ 03 · BÜRO & KARTE ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Das Büro</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Sachverständigenbüro Prenzlauer Berg.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10" data-reveal>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <MapPin size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Adresse</p>
                  <p className="text-white/50 text-[14.5px]">
                    Prenzlauer Allee 88
                    <br />
                    10405 Berlin
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Telefon</p>
                  <a href={PHONE_HREF} className="text-white/50 hover:text-[#E11D2F] transition-colors text-[14.5px]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">E-Mail</p>
                  <a
                    href="mailto:info@gutachtenprenzl.de"
                    className="text-white/50 hover:text-[#E11D2F] transition-colors text-[14.5px] break-all"
                  >
                    info@gutachtenprenzl.de
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock size={18} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Öffnungszeiten</p>
                  <p className="text-white/50 text-[14.5px]">Rund um die Uhr erreichbar</p>
                </div>
              </li>
            </ul>

            <div className="text-white/55 text-[14.5px] leading-relaxed space-y-4">
              <p>
                Unser Büro liegt an der Prenzlauer Allee 88 in Berlin-Prenzlauer Berg, wenige Minuten vom
                S-Bahnhof Prenzlauer Allee entfernt. Sie müssen aber nicht zu uns kommen: In den allermeisten
                Fällen fahren wir zu Ihnen — nach Hause, in die Werkstatt oder direkt an den Unfallort.
              </p>
              <p>
                Verantwortlicher Sachverständiger ist{" "}
                <strong className="text-white font-semibold">Atakan Arslan</strong>, zertifiziert vom
                TÜV Rheinland. Beratung auf Deutsch, Türkisch und Englisch.
              </p>
            </div>
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

      {/* ============ 04 · ANFAHRT ============ */}
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
            So finden Sie zu uns.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Ein Anruf kostet nichts.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Und verpflichtet zu nichts. Sie erfahren sofort, ob und wie es für Sie weitergeht.
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
