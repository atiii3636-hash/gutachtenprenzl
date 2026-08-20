import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Check, Car, Users, Truck, Clock, UserCheck, FileCheck, MapPin } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/flotten-partner";

export const metadata: Metadata = pageMetadata({
  title: "Flotten & Gewerbe – Kfz-Gutachten für Fuhrparks in Berlin",
  description:
    "Kfz-Gutachten für Mietwagen-, Fahrdienst- und Firmenflotten in Berlin. Vor Ort im Fuhrpark, kurze Standzeiten, ein fester Ansprechpartner statt Hotline.",
  path: PATH,
  keywords: [
    "Kfz Gutachten Flotte Berlin",
    "Gutachter Mietwagenflotte Berlin",
    "Kfz Sachverständiger Taxi Berlin",
    "Fuhrpark Schadengutachten Berlin",
    "Gutachter Fahrdienst Berlin",
  ],
});

const kennzahlen = [
  { val: "24 h", label: "Termin in der Regel" },
  { val: "1:1", label: "Fester Ansprechpartner" },
  { val: "TÜV", label: "Zertifiziert & anerkannt" },
  { val: "Berlin", label: "Vor Ort im Fuhrpark" },
];

const segmente = [
  {
    num: "01",
    icon: Car,
    title: "Mietwagen-Flotten",
    lead: "Rückgabeschäden sauber dokumentiert, bevor daraus eine Auseinandersetzung mit dem Mieter wird.",
    checks: [
      "Beweissicherung bei der Fahrzeugrückgabe",
      "Klare Trennung von Alt- und Neuschäden",
      "Mehrere Fahrzeuge in einem Termin",
    ],
    typisch: ["VW Golf", "BMW 3er / X3", "Mercedes C-Klasse", "Audi A4 / Q5"],
  },
  {
    num: "02",
    icon: Users,
    title: "Fahrdienst & Taxi",
    lead: "Jeder Standtag kostet Umsatz. Wir nehmen den Schaden dort auf, wo das Fahrzeug ohnehin steht.",
    checks: [
      "Kurzfristige Vor-Ort-Termine",
      "Direkte Abstimmung mit Ihrer Werkstatt",
      "Sammeltermine bei mehreren Fahrzeugen",
    ],
    typisch: ["Toyota Prius", "Mercedes E-Klasse", "Tesla Model 3", "VW Touran"],
  },
  {
    num: "03",
    icon: Truck,
    title: "Firmenfuhrpark & Handwerk",
    lead: "Vom Transporter bis zum Firmen-PKW — ein Ansprechpartner für alle Fahrzeuge im Betrieb.",
    checks: [
      "Nutzfahrzeuge und Transporter inklusive",
      "Ein Ansprechpartner für den gesamten Fuhrpark",
      "Schnelle Abwicklung mit der Versicherung",
    ],
    typisch: ["Mercedes Sprinter", "VW Crafter", "Ford Transit", "Fiat Ducato"],
  },
];

const vorteile = [
  {
    icon: Clock,
    title: "Weniger Standzeit",
    text: "Wir kommen zu Ihnen statt umgekehrt. Das Fahrzeug bleibt im Betrieb, bis der Termin steht — und geht danach direkt in die Werkstatt.",
  },
  {
    icon: UserCheck,
    title: "Fester Ansprechpartner",
    text: "Eine Nummer, ein Sachverständiger. Keine Hotline, keine wechselnden Sachbearbeiter, kein Erklären von vorn bei jedem Fall.",
  },
  {
    icon: FileCheck,
    title: "Rechtssicher dokumentiert",
    text: "TÜV-zertifizierte Gutachten, die deutsche Versicherungen im Regelfall anerkennen — und die auch vor Gericht standhalten.",
  },
  {
    icon: MapPin,
    title: "Berlinweit unterwegs",
    text: "Ob Ihr Hof in Marzahn, Tempelhof oder Spandau liegt: Wir sind in allen Bezirken vor Ort, meist innerhalb von 24 Stunden.",
  },
];

const ablauf = [
  { num: "01", title: "Erstgespräch", text: "Wir lernen Ihren Fuhrpark kennen: Größe, Standorte, typische Schäden, Ihre Versicherung." },
  { num: "02", title: "Schaden melden", text: "Kurzer Anruf oder WhatsApp mit ein paar Fotos — wir stimmen direkt einen Termin ab." },
  { num: "03", title: "Aufnahme vor Ort", text: "Begutachtung dort, wo das Fahrzeug steht. Mehrere Fahrzeuge gern gebündelt an einem Tag." },
  { num: "04", title: "Gutachten & Regulierung", text: "Gutachten in der Regel binnen 24 Stunden. Wir begleiten die Abwicklung bis zur Auszahlung." },
];

const faqs = [
  {
    q: "Wer trägt die Kosten für das Gutachten bei einem Flottenschaden?",
    a: "Bei einem unverschuldeten Unfall trägt die Haftpflichtversicherung des Verursachers alle Kosten — auch bei gewerblich genutzten Fahrzeugen. Bei eigenverschuldeten Schäden läuft es über Ihre Kaskoversicherung, hier klären wir vorab, ob sich das Gutachten rechnet.",
  },
  {
    q: "Können mehrere Fahrzeuge an einem Termin begutachtet werden?",
    a: "Ja, und das ist bei Flotten der Regelfall. Wenn mehrere Fahrzeuge auf demselben Hof stehen, nehmen wir sie in einem Termin auf. Das spart Zeit auf beiden Seiten und hält die Standzeiten kurz.",
  },
  {
    q: "Wie schnell bekommen wir einen Termin?",
    a: "In der Regel innerhalb von 24 Stunden, oft noch am selben Werktag. Bei laufender Zusammenarbeit gehen Flottenkunden vor, weil dort jeder Standtag unmittelbar Geld kostet.",
  },
  {
    q: "Begutachten Sie auch Transporter und Nutzfahrzeuge?",
    a: "Ja. Sprinter, Crafter, Transit und vergleichbare Nutzfahrzeuge gehören zum Alltag. Auch bei Aufbauten und gewerblichen Umbauten erfassen wir den Schaden vollständig.",
  },
  {
    q: "Was ist ein Beweissicherungsgutachten bei der Fahrzeugrückgabe?",
    a: "Es hält den Zustand eines Fahrzeugs zu einem bestimmten Zeitpunkt fest — mit Fotos und Kalkulation. Bei Mietwagenflotten ist das die sauberste Grundlage, um Neuschäden von Vorschäden zu trennen, bevor es zum Streit kommt.",
  },
];

export default function FlottenPartnerNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Flotten & Gewerbe", path: PATH }]),
          serviceLd({
            name: "Kfz-Gutachten für Flotten und Gewerbe in Berlin",
            description:
              "Schadengutachten und Beweissicherung für Mietwagen-, Fahrdienst- und Firmenflotten in Berlin. Vor Ort im Fuhrpark, kurze Standzeiten.",
            path: PATH,
            serviceType: "Kfz-Flottengutachten",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Flotten & Gewerbe", href: "/flotten-partner" }]} />

      <PageHero
        kicker="Für Flottenbetreiber"
        title="Kurze Standzeiten."
        titleAccent="Saubere Gutachten."
        lead="Kfz-Gutachten für Mietwagen-, Fahrdienst- und Firmenflotten in Berlin. Wir kommen in Ihren Fuhrpark — mit einem festen Ansprechpartner statt einer Hotline."
        image="/foto5.jpg"
        ctaLabel="Erstgespräch vereinbaren"
      />

      {/* Kennzahlen */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-5 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {kennzahlen.map(({ val, label }, i) => (
              <div
                key={label}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="text-center md:border-l md:border-white/8 md:first:border-l-0 md:px-6"
              >
                <div className="font-display font-black text-white text-[clamp(26px,4vw,38px)] leading-none mb-1.5">
                  {val}
                </div>
                <div className="text-[13px] text-white/40 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 01 · ZIELGRUPPEN ============ */}
      <section className="px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Zielgruppen</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Wir kennen Ihre Fahrzeuge.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Drei Segmente, drei unterschiedliche Anforderungen — vom Rückgabeschaden bis zum Transporter mit Aufbau.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {segmente.map(({ num, icon: Icon, title, lead, checks, typisch }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors flex flex-col"
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  <span className="font-display font-black text-[#E11D2F]/30 text-[24px]">{num}</span>
                </div>

                <h3 className="font-display font-bold text-[18px] mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-5">{lead}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {checks.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <Check size={13} className="text-[#22c55e] stroke-[3] mt-1 flex-shrink-0" />
                      <span className="text-[13px] text-white/60 leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/8">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2.5">
                    Häufig in diesen Flotten
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {typisch.map((t) => (
                      <span
                        key={t}
                        className="text-[11.5px] font-medium text-white/45 bg-white/[0.05] border border-white/10 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · VORTEILE ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ihre Vorteile</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Was Flottenbetreiber bei uns bekommen.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {vorteile.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="flex gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-6"
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#E11D2F]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[16px] mb-2">{title}</h3>
                  <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · ABLAUF ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Zusammenarbeit</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            So läuft es ab.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ablauf.map((a, i) => (
              <div key={a.num} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-black text-[#E11D2F] text-[24px] leading-none">{a.num}</span>
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <h3 className="font-display font-bold text-[16px] mb-2.5">{a.title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · FAQ ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-12"
            data-reveal
          >
            Häufige Fragen aus dem Fuhrpark.
          </h2>
          <FaqListe faqs={faqs} />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Flotte anbinden — kurzes Erstgespräch.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Kostenfrei und unverbindlich. Wir schauen uns an, wie viele Fahrzeuge Sie haben und wo der Schuh drückt.
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
