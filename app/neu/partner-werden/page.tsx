import type { Metadata } from "next";
import { Phone, MessageCircle, Check, Wrench, Scale, Building2, ShieldCheck } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, faqLd } from "@/lib/seo";

const PATH = "/partner-werden";

export const metadata: Metadata = pageMetadata({
  title: "Partner werden – für Werkstätten, Kanzleien & Autohäuser",
  description:
    "Kooperation mit einem unabhängigen Kfz-Sachverständigen in Berlin: schnelle Termine, rechtssichere Gutachten, ein fester Ansprechpartner statt Hotline.",
  path: PATH,
  keywords: [
    "Kfz Gutachter Partner Werkstatt Berlin",
    "Sachverständiger Kooperation Anwaltskanzlei",
    "Gutachter für Autohaus Berlin",
  ],
});

const zielgruppen = [
  {
    num: "01",
    icon: Wrench,
    title: "Werkstätten & Karosseriebau",
    lead: "Ihr Kunde braucht ein Gutachten, bevor die Reparatur freigegeben wird — und jeder Tag Wartezeit blockiert Ihre Hebebühne.",
    checks: [
      "Wir kommen in Ihre Werkstatt, meist binnen 24 Stunden",
      "Kalkulation direkt mit Ihnen abgestimmt",
      "Ihr Kunde bleibt Ihr Kunde — wir vermitteln nicht weiter",
    ],
  },
  {
    num: "02",
    icon: Scale,
    title: "Anwaltskanzleien",
    lead: "Für Ihre Mandanten erstellen wir Gutachten, die als Grundlage der Anspruchsdurchsetzung tragen.",
    checks: [
      "Rechtssicher und gerichtsverwertbar aufgebaut",
      "Jede Position nachvollziehbar hergeleitet",
      "Rückfragen direkt beim Sachverständigen, ohne Umweg",
    ],
  },
  {
    num: "03",
    icon: Building2,
    title: "Autohäuser & Fuhrparks",
    lead: "Ob Rückgabeschaden, Unfallfahrzeug im Bestand oder Firmenflotte — wir bewerten zuverlässig und zeitnah.",
    checks: [
      "Beweissicherung bei Rückgabe und Übernahme",
      "Mehrere Fahrzeuge in einem Termin",
      "Fester Ansprechpartner für alle Fälle",
    ],
  },
];

const vorteile = [
  "Direkter Draht zum Sachverständigen — keine Hotline, keine Warteschleife",
  "Termine in der Regel innerhalb von 24 Stunden, auch am Wochenende",
  "TÜV Rheinland zertifiziert, von Versicherungen im Regelfall anerkannt",
  "Transparente Kalkulation, die Ihre Kunden nachvollziehen können",
  "Beratung auf Deutsch, Türkisch und Englisch",
  "Keine Vertragsbindung, keine Mindestmenge, keine Gebühren",
];

const ablauf = [
  { num: "01", title: "Kennenlernen", text: "Ein kurzes Gespräch: Was für Fälle haben Sie, wie oft, und was ist Ihnen wichtig?" },
  { num: "02", title: "Kurzer Draht", text: "Sie bekommen die direkte Nummer. Ab dann genügt ein Anruf oder eine WhatsApp." },
  { num: "03", title: "Fall übergeben", text: "Sie melden den Fall, wir übernehmen Terminabsprache und Begutachtung." },
  { num: "04", title: "Gutachten & Rückmeldung", text: "Das Gutachten geht raus, Sie bekommen Bescheid. Bei Rückfragen sind wir erreichbar." },
];

const faqs = [
  {
    q: "Kostet die Zusammenarbeit als Partner etwas?",
    a: "Nein. Es gibt keine Vertragsbindung, keine Gebühren und keine Mindestmenge an Fällen. Die Gutachterkosten trägt wie üblich die eintrittspflichtige Versicherung beziehungsweise der Auftraggeber des Gutachtens.",
  },
  {
    q: "Bleibt der Kunde mein Kunde?",
    a: "Ja. Wir erstellen das Gutachten und geben es an den Auftraggeber — wir vermitteln Ihre Kunden nicht an andere Werkstätten weiter. Die Kundenbeziehung bleibt vollständig bei Ihnen.",
  },
  {
    q: "Wie schnell ist ein Termin möglich?",
    a: "In der Regel innerhalb von 24 Stunden, häufig noch am selben Werktag. Bei laufender Zusammenarbeit stimmen wir uns kurzfristig ab, wenn ein Fahrzeug dringend freigegeben werden muss.",
  },
  {
    q: "Erstellen Sie auch Gutachten für gerichtliche Auseinandersetzungen?",
    a: "Wir erstellen Gutachten, die vor Gericht verwertbar sind und regelmäßig als Grundlage in Verfahren dienen. Für eine gerichtliche Bestellung als Sachverständiger durch das Gericht selbst ist eine öffentliche Bestellung erforderlich — das ist eine andere Rolle als die des Privatgutachters.",
  },
];

export default function PartnerWerdenNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={[breadcrumbLd([{ name: "Partner werden", path: PATH }]), faqLd(faqs)]} />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Partner werden", href: "/neu/partner-werden" }]} />

      <PageHero
        kicker="Kooperationspartner"
        title="Ein Gutachter,"
        titleAccent="auf den Verlass ist."
        lead="Für Werkstätten, Anwaltskanzleien und Autohäuser in Berlin: schnelle Termine, saubere Gutachten und ein Ansprechpartner, der ans Telefon geht."
        image="/foto7.jpg"
        ctaLabel="Erstgespräch vereinbaren"
      />

      {/* ============ 01 · FÜR WEN ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Für wen</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Drei Partner, ein Anspruch.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {zielgruppen.map(({ num, icon: Icon, title, lead, checks }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors"
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
                <ul className="space-y-2">
                  {checks.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <Check size={13} className="text-[#22c55e] stroke-[3] mt-1 flex-shrink-0" />
                      <span className="text-[13px] text-white/60 leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · VORTEILE ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Was Sie bekommen</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-12"
            data-reveal
          >
            Ohne Kleingedrucktes.
          </h2>

          <ul className="space-y-2.5">
            {vorteile.map((v, i) => (
              <li
                key={v}
                className="flex items-start gap-3.5 bg-white/[0.03] border border-white/8 rounded-lg p-4"
                data-reveal
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="w-6 h-6 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 mt-px">
                  <Check size={13} className="text-[#22c55e] stroke-[3]" />
                </span>
                <span className="text-[14.5px] text-white/75 leading-snug">{v}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-6 flex items-start gap-4 bg-gradient-to-r from-[#E11D2F]/10 to-transparent border border-[#E11D2F]/20 rounded-xl p-5"
            data-reveal
          >
            <ShieldCheck size={22} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-white mb-1">TÜV Rheinland zertifiziert</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Eine unabhängig geprüfte Qualifikation — Grundlage dafür, dass unsere Gutachten von deutschen
                Versicherungen im Regelfall anerkannt werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · ABLAUF ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ablauf</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            In vier Schritten zur Zusammenarbeit.
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
            Fragen von Partnern.
          </h2>
          <FaqListe faqs={faqs} />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Kurzes Erstgespräch — unverbindlich.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Rufen Sie an oder schreiben Sie kurz per WhatsApp. Alles Weitere klären wir in fünf Minuten.
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
