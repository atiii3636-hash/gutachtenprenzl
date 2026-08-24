import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, AlertTriangle, Calculator, Clock, Wrench, Info } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, faqLd, SITE_URL } from "@/lib/seo";

const PATH = "/130-prozent-regelung";
const UPDATED = "2026-08-21";
const UPDATED_LABEL = "21. August 2026";

export const metadata: Metadata = pageMetadata({
  title: "130-Prozent-Regel: wann sich die Reparatur trotzdem lohnt",
  description:
    "Reparatur teurer als das Auto wert ist? Bis 130 Prozent des Wiederbeschaffungswerts dürfen Sie trotzdem reparieren lassen. Bedingungen und Rechenbeispiel.",
  path: PATH,
  keywords: [
    "130 prozent regelung",
    "130 prozent regel unfall",
    "reparatur teurer als wiederbeschaffungswert",
    "integritätsinteresse fahrzeug",
    "wirtschaftlicher totalschaden reparieren",
  ],
});

/* Die drei Fälle als echte Tabelle: dieses Format wird von Google und von
   KI-Antwortsystemen deutlich häufiger zitiert als Fließtext. */
const faelle = [
  {
    fall: "unter 100 %",
    bedeutung: "Reparaturkosten liegen unter dem Wiederbeschaffungswert",
    folge: "Normale Reparaturabrechnung. Sie können reparieren lassen oder sich den Betrag auszahlen lassen.",
    ok: true,
  },
  {
    fall: "100 bis 130 %",
    bedeutung: "Reparatur ist teurer als das Fahrzeug wert ist, aber höchstens um 30 Prozent",
    folge: "Reparatur ist möglich, wenn Sie die Bedingungen erfüllen. Die Versicherung zahlt die vollen Reparaturkosten.",
    ok: true,
  },
  {
    fall: "über 130 %",
    bedeutung: "Reparatur übersteigt den Wiederbeschaffungswert um mehr als 30 Prozent",
    folge: "Nur noch Abrechnung auf Totalschadenbasis: Wiederbeschaffungswert minus Restwert.",
    ok: false,
  },
];

const bedingungen = [
  {
    icon: Wrench,
    titel: "Vollständig und fachgerecht reparieren",
    text: "Die Reparatur muss so ausgeführt werden, wie sie im Gutachten steht. Eine Teilreparatur oder eine billigere Notlösung genügt nicht, dann entfällt der Anspruch auf die vollen Kosten.",
  },
  {
    icon: Clock,
    titel: "Das Fahrzeug mindestens sechs Monate behalten",
    text: "Sie müssen zeigen, dass Ihnen an genau diesem Auto liegt. Wer kurz nach der Reparatur verkauft, verliert den Anspruch rückwirkend.",
  },
  {
    icon: Calculator,
    titel: "Ein Gutachten muss die Werte belegen",
    text: "Reparaturkosten und Wiederbeschaffungswert müssen nachvollziehbar ermittelt sein. Ohne Gutachten lässt sich die 130-Prozent-Grenze gar nicht bestimmen.",
  },
];

const beispiel = [
  { pos: "Wiederbeschaffungswert laut Gutachten", wert: "10.000 €" },
  { pos: "130-Prozent-Grenze", wert: "13.000 €" },
  { pos: "Kalkulierte Reparaturkosten", wert: "12.400 €" },
  { pos: "Ergebnis", wert: "Reparatur möglich", stark: true },
];

const faq = [
  {
    q: "Was besagt die 130-Prozent-Regel?",
    a: "Wenn die Reparatur Ihres Fahrzeugs teurer ist als sein Wiederbeschaffungswert, dürfen Sie es nach ständiger Rechtsprechung trotzdem reparieren lassen, solange die Kosten höchstens 130 Prozent dieses Werts betragen. Die gegnerische Haftpflichtversicherung muss dann die vollen Reparaturkosten tragen, nicht nur den geringeren Totalschadenbetrag.",
  },
  {
    q: "Warum gibt es diese Regel überhaupt?",
    a: "Dahinter steht das sogenannte Integritätsinteresse: Ein Fahrzeug, das Sie kennen und dessen Zustand Sie einschätzen können, ist für Sie mehr wert als ein fremdes Auto vom Markt. Die Rechtsprechung erkennt an, dass dieses Interesse einen Aufschlag von bis zu 30 Prozent rechtfertigt.",
  },
  {
    q: "Was zählt alles in die 130 Prozent hinein?",
    a: "Maßgeblich sind die im Gutachten kalkulierten Reparaturkosten. Nach der Rechtsprechung des Bundesgerichtshofs wird dabei auch eine merkantile Wertminderung berücksichtigt. Nicht eingerechnet werden Positionen wie Nutzungsausfall, Abschleppkosten oder das Gutachterhonorar, die separat erstattet werden.",
  },
  {
    q: "Muss ich wirklich reparieren lassen oder reicht die Auszahlung?",
    a: "Bei der 130-Prozent-Regel müssen Sie tatsächlich und vollständig reparieren lassen. Eine fiktive Abrechnung auf dieser Grundlage ist nicht möglich. Wollen Sie sich den Betrag auszahlen lassen, gilt die Obergrenze des Wiederbeschaffungsaufwands, also Wiederbeschaffungswert minus Restwert.",
  },
  {
    q: "Was passiert, wenn die Reparatur am Ende teurer wird als geplant?",
    a: "Entscheidend ist die Kalkulation im Gutachten. Stellt sich während der Reparatur heraus, dass die Kosten die 130-Prozent-Grenze überschreiten, wird es kritisch. Deshalb sollte vorher sauber kalkuliert werden, verdeckte Schäden eingeschlossen. Genau dafür ist die gründliche Besichtigung da.",
  },
  {
    q: "Was ist, wenn ich knapp über 130 Prozent liege?",
    a: "Dann fällt der Anspruch auf die vollen Reparaturkosten weg, und es wird auf Totalschadenbasis abgerechnet. Es gibt keinen gleitenden Übergang. Weil es an dieser Grenze um viel Geld geht, lohnt es sich, Wiederbeschaffungswert und Restwert genau prüfen zu lassen.",
  },
];

const jsonLd = [
  breadcrumbLd([
    { name: "Ratgeber", path: "/ratgeber" },
    { name: "130-Prozent-Regelung", path: PATH },
  ]),
  faqLd(faq),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${PATH}#article`,
    headline: "130-Prozent-Regel: wann sich die Reparatur trotzdem lohnt",
    description:
      "Erklärung der 130-Prozent-Regel nach einem unverschuldeten Unfall: Voraussetzungen, Berechnung und Abgrenzung zum Totalschaden.",
    inLanguage: "de-DE",
    datePublished: UPDATED,
    dateModified: UPDATED,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Atakan Arslan",
      jobTitle: "TÜV Rheinland zertifizierter Kfz-Sachverständiger",
    },
    publisher: { "@id": SITE_URL },
  },
];

export default function DreissigProzentRegel() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={jsonLd} />
      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Ratgeber", href: "/ratgeber" },
          { name: "130-Prozent-Regelung", href: PATH },
        ]}
      />

      <PageHero
        kicker="Ratgeber · Totalschaden"
        title="Reparatur teurer als das Auto?"
        titleAccent="Bis 130 Prozent geht sie trotzdem."
        lead="Wenn die Werkstattrechnung höher wäre als der Fahrzeugwert, muss das noch lange nicht das Ende sein. Die Rechtsprechung lässt einen Aufschlag von bis zu 30 Prozent zu."
        image="/foto10.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* Direktantwort: bewusst als erstes, damit Google und KI-Systeme sie sauber greifen */}
      <section className="px-5 pb-4">
        <div className="max-w-3xl mx-auto" data-reveal>
          <div className="bg-gradient-to-r from-[#E11D2F]/12 to-transparent border border-[#E11D2F]/25 rounded-xl p-6 md:p-7">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#E11D2F] uppercase mb-3">
              Kurz beantwortet
            </p>
            <p className="text-white/80 text-[16px] leading-relaxed">
              Übersteigen die Reparaturkosten den Wiederbeschaffungswert Ihres Fahrzeugs um
              höchstens <strong className="text-white">30 Prozent</strong>, dürfen Sie reparieren
              lassen und die gegnerische Versicherung trägt die vollen Kosten. Voraussetzung ist,
              dass Sie vollständig nach Gutachten reparieren lassen und das Fahrzeug danach
              mindestens sechs Monate weiterfahren.
            </p>
            <p className="text-white/35 text-[12.5px] mt-4">Stand: {UPDATED_LABEL}</p>
          </div>
        </div>
      </section>

      {/* ============ 01 · DIE DREI FÄLLE ============ */}
      <section className="px-5 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Die drei Fälle</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Wo genau liegt Ihr Fall?
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Entscheidend ist das Verhältnis der Reparaturkosten zum Wiederbeschaffungswert.
          </p>

          <div className="space-y-3">
            {faelle.map(({ fall, bedeutung, folge, ok }, i) => (
              <div
                key={fall}
                className={`bg-white/[0.03] border rounded-xl p-6 md:p-7 transition-colors ${
                  ok ? "border-[#22c55e]/25" : "border-[#E11D2F]/30"
                }`}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`font-display font-black text-[22px] ${
                      ok ? "text-[#4ade80]" : "text-[#E11D2F]"
                    }`}
                  >
                    {fall}
                  </span>
                  <span className="text-[13px] text-white/45">{bedeutung}</span>
                </div>
                <p className="text-white/60 text-[14.5px] leading-relaxed">{folge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · RECHENBEISPIEL ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Rechenbeispiel</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            So wird gerechnet.
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/8" data-reveal>
            <table className="w-full text-left">
              <tbody>
                {beispiel.map(({ pos, wert, stark }) => (
                  <tr key={pos} className={`border-b border-white/6 last:border-0 ${stark ? "bg-[#22c55e]/[0.07]" : ""}`}>
                    <td className={`px-5 py-4 text-[14.5px] ${stark ? "font-bold text-white" : "text-white/60"}`}>
                      {pos}
                    </td>
                    <td className={`px-5 py-4 text-[15px] text-right whitespace-nowrap ${stark ? "font-display font-black text-[#4ade80]" : "font-semibold text-white"}`}>
                      {wert}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3.5 bg-white/[0.03] border border-white/8 rounded-xl p-5" data-reveal>
            <Info size={18} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <p className="text-white/55 text-[13.5px] leading-relaxed">
              Läge die Kalkulation bei 13.400 Euro, wäre die Grenze überschritten. Dann bekämen Sie
              nur noch den Wiederbeschaffungswert abzüglich des Restwerts ausgezahlt. Wenige hundert
              Euro entscheiden hier über mehrere tausend.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 03 · BEDINGUNGEN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Bedingungen</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Drei Punkte müssen erfüllt sein.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Fehlt einer davon, entfällt der Anspruch auf die vollen Reparaturkosten.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {bedingungen.map(({ icon: Icon, titel, text }, i) => (
              <div
                key={titel}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-[#E11D2F]" />
                </div>
                <h3 className="font-display font-bold text-[16.5px] mb-2.5 leading-snug">{titel}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4 bg-gradient-to-r from-[#E11D2F]/10 to-transparent border border-[#E11D2F]/20 rounded-xl p-5 max-w-3xl mx-auto" data-reveal>
            <AlertTriangle size={22} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-white mb-1">Verkaufen Sie das Fahrzeug nicht zu früh</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Die Sechsmonatsfrist wird von Versicherungen tatsächlich geprüft. Wer vorher
                verkauft, muss den Differenzbetrag in aller Regel zurückzahlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04 · FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Häufige Fragen zur 130-Prozent-Regel.
          </h2>
          <FaqListe faqs={faq} />

          <p className="text-white/30 text-[12.5px] leading-relaxed mt-8 text-center" data-reveal>
            Diese Seite erklärt die gängige Praxis und ersetzt keine Rechtsberatung.
            Im Einzelfall entscheidet immer die konkrete Sachlage.
          </p>
        </div>
      </section>

      {/* Weiterführend */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Passend dazu
          </p>
          <div className="grid sm:grid-cols-3 gap-3" data-reveal>
            {[
              { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Wert nach Totalschaden" },
              { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
              { href: "/fiktive-abrechnung", label: "Fiktive Abrechnung", sub: "Auszahlung statt Reparatur" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 rounded-xl p-5 transition-all hover:-translate-y-0.5"
              >
                <p className="font-display font-bold text-[15.5px] mb-1 group-hover:text-[#E11D2F] transition-colors">{l.label}</p>
                <p className="text-white/40 text-[12.5px]">{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4">
            Liegt Ihr Fall an der Grenze?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Dann kommt es auf jeden Euro in der Kalkulation an. Wir rechnen es für Sie durch,
            bei unverschuldetem Unfall kostenlos.
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
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
