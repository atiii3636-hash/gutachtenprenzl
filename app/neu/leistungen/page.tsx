import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, Camera, Ruler, FileSearch, Handshake } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/leistungen";

export const metadata: Metadata = pageMetadata({
  title: "Leistungen – Kfz-Gutachten für Berlin",
  description:
    "Unfallgutachten, Kaskogutachten, Totalschaden- und Parkschadenbewertung in Berlin. TÜV-zertifiziert, bei unverschuldetem Unfall kostenlos.",
  path: PATH,
  keywords: [
    "Unfallgutachten Berlin",
    "Kaskogutachten Berlin",
    "Totalschaden Gutachten Berlin",
    "Parkschaden Gutachten Berlin",
    "Kfz Gutachten Leistungen Berlin",
    "Wertminderung Berlin",
  ],
});

/* ---------- Inhalte ---------- */

/* Eigene Detailseiten je Leistung, von hier aus verlinkt. */
const detailseiten = [
  {
    num: "01",
    href: "/neu/schadengutachten",
    title: "Schadengutachten",
    text: "Nach einem Unfall: Reparaturkosten, Wertminderung und Nutzungsausfall vollständig erfasst. Bei fremdem Verschulden für Sie kostenfrei.",
  },
  {
    num: "02",
    href: "/neu/wertgutachten",
    title: "Wertgutachten",
    text: "Für Kauf, Verkauf, Erbschaft oder Versicherung. Der Marktwert Ihres Fahrzeugs, neutral festgestellt und belegt.",
  },
  {
    num: "03",
    href: "/neu/wertminderung",
    title: "Wertminderung",
    text: "Ein repariertes Unfallfahrzeug ist weniger wert. Diesen Verlust weisen wir aus und setzen ihn gegenüber der Versicherung durch.",
  },
  {
    num: "04",
    href: "/neu/restwertermittlung",
    title: "Restwertermittlung",
    text: "Beim Totalschaden entscheidet der Restwert über Ihre Auszahlung. Wir ermitteln ihn am regionalen Markt.",
  },
];

const saeulen = [
  {
    num: "01",
    title: "Unfallgutachten",
    kicker: "Häufigster Fall",
    lead: "Unverschuldet in einen Unfall geraten? Dann trägt die Haftpflichtversicherung des Verursachers alle Kosten — und Sie haben das Recht auf einen eigenen, unabhängigen Gutachter.",
    stats: [
      { val: "0 €", label: "Kosten für Sie" },
      { val: "24 h", label: "Gutachten fertig" },
      { val: "Berlin", label: "Vor Ort bei Ihnen" },
    ],
    checks: [
      "Lückenlose Foto- und Schadendokumentation",
      "Reparaturkosten, Wertminderung und Nutzungsausfall",
      "Direkte Abrechnung mit der gegnerischen Versicherung",
      "Rechtssicher und gerichtsverwertbar",
    ],
    href: "/neu/schadengutachten",
    faqs: [
      {
        q: "Wer trägt die Kosten für das Gutachten?",
        a: "Bei Fremdverschulden trägt die Haftpflichtversicherung des Unfallverursachers alle Kosten — Gutachten, Anwalt und Reparatur. Sie müssen nichts vorstrecken.",
      },
      {
        q: "Wie schnell bekomme ich mein Gutachten?",
        a: "In der Regel innerhalb von 24 Stunden nach der Besichtigung. Den Besichtigungstermin bekommen Sie meist noch am selben oder am nächsten Werktag.",
      },
    ],
  },
  {
    num: "02",
    title: "Kaskogutachten",
    kicker: "Eigene Versicherung",
    lead: "Auch bei selbstverschuldetem Schaden oder ohne Unfallgegner lohnt sich ein unabhängiger Blick. Der Gutachter Ihrer Versicherung rechnet im Zweifel für die Versicherung.",
    stats: [
      { val: "24 h", label: "Termin in der Regel" },
      { val: "TÜV", label: "Zertifiziert" },
      { val: "1:1", label: "Persönliche Betreuung" },
    ],
    checks: [
      "Unabhängig von der Einschätzung Ihrer Versicherung",
      "Jede Position einzeln geprüft und belegt",
      "Klare Kalkulation nach anerkannten Kriterien",
      "Unterstützung bei Rückfragen der Versicherung",
    ],
    href: null,
    faqs: [
      {
        q: "Lohnt sich ein eigener Gutachter bei einem Kaskoschaden?",
        a: "Häufig ja. Der Sachverständige der Versicherung arbeitet in deren Auftrag. Ein unabhängiges Gutachten schafft eine belastbare Grundlage, wenn die Einschätzung zu niedrig ausfällt.",
      },
    ],
  },
  {
    num: "03",
    title: "Totalschaden & Restwert",
    kicker: "Wirtschaftlicher Totalschaden",
    lead: "Wenn sich eine Reparatur nicht mehr rechnet, entscheidet der Wiederbeschaffungswert über Ihre Auszahlung. Wir ermitteln ihn anhand realer Marktpreise — nicht per Pauschale.",
    stats: [
      { val: "Markt", label: "Reale Preisbasis" },
      { val: "24 h", label: "Bewertung fertig" },
      { val: "0 €", label: "Bei Fremdverschulden" },
    ],
    checks: [
      "Wiederbeschaffungswert nach echten Marktpreisen",
      "Restwertermittlung transparent hergeleitet",
      "Prüfung, ob sich eine Reparatur noch lohnt",
      "Nachvollziehbare, belegte Kalkulation",
    ],
    href: "/neu/restwertermittlung",
    faqs: [
      {
        q: "Warum weicht das Angebot der Versicherung oft nach unten ab?",
        a: "Versicherer kalkulieren häufig vorsichtig. Ein unabhängiges Gutachten legt den tatsächlichen Marktwert offen — das kann mehrere hundert Euro Unterschied bedeuten.",
      },
    ],
  },
  {
    num: "04",
    title: "Parkschaden & Beweissicherung",
    kicker: "Auch bei Fahrerflucht",
    lead: "Auto beschädigt vorgefunden? Wir dokumentieren den Schaden so, dass er später belastbar ist — mit vollständiger Fotoserie und nachvollziehbarer Kalkulation.",
    stats: [
      { val: "Foto", label: "Lückenlose Doku" },
      { val: "24 h", label: "Termin in der Regel" },
      { val: "Gericht", label: "Verwertbar" },
    ],
    checks: [
      "Vollständige Fotoserie und Schadenkalkulation",
      "Auch ohne ermittelten Verursacher",
      "Vorab-Klärung, welche Versicherung zahlt",
      "Beweissicherung für spätere Auseinandersetzungen",
    ],
    href: "/parkschaden-gutachten-berlin",
    faqs: [
      {
        q: "Was gilt bei Fahrerflucht ohne bekannten Verursacher?",
        a: "Dann greift in der Regel Ihre Vollkasko, die Teilkasko meist nicht. Wir klären das vorab mit Ihnen, damit sich das Gutachten für Sie auch wirtschaftlich rechnet.",
      },
    ],
  },
];

const qualitaeten = [
  {
    icon: Camera,
    num: "01",
    title: "Vollständige Dokumentation",
    text: "Jede Delle, jeder Kratzer, jeder verdeckte Schaden wird fotografisch festgehalten — die Grundlage dafür, dass später nichts wegdiskutiert werden kann.",
  },
  {
    icon: Ruler,
    num: "02",
    title: "Nachvollziehbare Kalkulation",
    text: "Reparaturkosten, Wertminderung und Nutzungsausfall werden einzeln hergeleitet. Jeder Posten lässt sich prüfen — von Ihnen wie von der Versicherung.",
  },
  {
    icon: FileSearch,
    num: "03",
    title: "Unabhängige Prüfung",
    text: "Wir arbeiten ausschließlich in Ihrem Auftrag. Was der Gutachter der Gegenseite übersieht oder klein rechnet, weisen wir nach.",
  },
  {
    icon: Handshake,
    num: "04",
    title: "Begleitung bis zum Schluss",
    text: "Das Gutachten ist nicht das Ende. Wir bleiben ansprechbar, bis die Versicherung reguliert hat — auch bei Rückfragen und Nachforderungen.",
  },
];

const ablauf = [
  { num: "01", title: "Anruf oder WhatsApp", text: "Schaden in zwei Minuten schildern. Wir sagen sofort, welche Ansprüche Sie haben." },
  { num: "02", title: "Termin vor Ort", text: "Wir kommen zu Ihnen — nach Hause, in die Werkstatt oder an den Unfallort." },
  { num: "03", title: "Gutachten in 24 Stunden", text: "Vollständig, rechtssicher, von Versicherungen im Regelfall anerkannt." },
  { num: "04", title: "Regulierung", text: "Das Gutachten geht an die Versicherung. Wir begleiten Sie bis zur Auszahlung." },
];

const alleFaqs = saeulen.flatMap((s) => s.faqs);

export default function LeistungenNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Leistungen", path: PATH }]),
          serviceLd({
            name: "Kfz-Schadengutachten Berlin",
            description:
              "Unabhängige Kfz-Gutachten nach Unfall, Kaskoschaden, Totalschaden und Parkschaden in Berlin. TÜV Rheinland zertifiziert.",
            path: PATH,
            serviceType: "Kfz-Schadengutachten",
          }),
          faqLd(alleFaqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Leistungen", href: "/neu/leistungen" }]} />

      <PageHero
        kicker="Leistungen"
        title="Gutachten, die"
        titleAccent="standhalten."
        lead="Vier Kernleistungen, ein Ziel: dass Sie am Ende bekommen, was Ihnen zusteht. Unabhängig, schnell und bei unverschuldetem Unfall für Sie kostenfrei."
        image="/foto3.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* Sprungmarken */}
      <section className="px-5 pb-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3" data-reveal>
          {saeulen.map((s) => (
            <a
              key={s.num}
              href={`#leistung-${s.num}`}
              className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 hover:bg-white/[0.05] rounded-xl p-4 transition-all"
            >
              <span className="block font-display font-black text-[#E11D2F]/50 group-hover:text-[#E11D2F] text-[20px] mb-1 transition-colors">
                {s.num}
              </span>
              <span className="block text-white/70 group-hover:text-white text-[13px] font-semibold leading-snug transition-colors">
                {s.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Die vier Leistungen im Detail */}
      <section className="px-5 py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-14">
          {saeulen.map((s) => (
            <article
              key={s.num}
              id={`leistung-${s.num}`}
              className="scroll-mt-24 border-t border-white/8 pt-10 first:border-0 first:pt-0"
              data-reveal
            >
              <div className="grid lg:grid-cols-[auto,1fr] gap-x-10 gap-y-4">
                <div className="font-display font-black text-[#E11D2F]/25 text-[64px] lg:text-[88px] leading-none select-none">
                  {s.num}
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase mb-2">
                    {s.kicker}
                  </p>
                  <h2 className="font-display font-black text-[26px] md:text-[34px] tracking-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-white/55 text-[15px] leading-relaxed mb-7 max-w-2xl">{s.lead}</p>

                  {/* Kennzahlen */}
                  <div className="grid grid-cols-3 gap-px bg-white/8 rounded-xl overflow-hidden mb-7 max-w-md">
                    {s.stats.map((st) => (
                      <div key={st.label} className="bg-[#0A0A0D] px-3 py-4 text-center">
                        <div className="font-display font-black text-white text-[19px] leading-none mb-1">
                          {st.val}
                        </div>
                        <div className="text-[10.5px] text-white/40 leading-tight">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Leistungsumfang */}
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-7 max-w-2xl">
                    {s.checks.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <Check size={14} className="text-[#22c55e] stroke-[3] mt-1 flex-shrink-0" />
                        <span className="text-[14px] text-white/65 leading-snug">{c}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Häufige Frage zu dieser Leistung */}
                  <div className="space-y-2 mb-6 max-w-2xl">
                    {s.faqs.map((f) => (
                      <div key={f.q} className="bg-white/[0.03] border border-white/8 rounded-lg p-4">
                        <p className="text-[13.5px] font-semibold text-white mb-1.5">{f.q}</p>
                        <p className="text-[13px] text-white/50 leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>

                  {s.href && (
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E11D2F] hover:text-white transition-colors"
                    >
                      Details zu {s.title} →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Eigene Detailseiten je Leistung */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">05</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Im Detail</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Jede Leistung ausführlich erklärt.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Zu jedem Bereich gibt es eine eigene Seite mit Ablauf, Kosten und den häufigsten Fragen.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {detailseiten.map(({ href, num, title, text }, i) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 hover:bg-white/[0.05] rounded-xl p-6 transition-all hover:-translate-y-1"
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <span className="font-display font-black text-[#E11D2F]/40 group-hover:text-[#E11D2F] text-[22px] mb-3 transition-colors">
                  {num}
                </span>
                <h3 className="font-display font-bold text-[18px] mb-2">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-4 flex-1">{text}</p>
                <span className="text-[12.5px] font-bold text-white/35 group-hover:text-[#E11D2F] transition-colors">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Arbeitsweise */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">06</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
              Unsere Arbeitsweise
            </span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Gründlich statt oberflächlich.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Was ein Gutachten wirklich wert ist, entscheidet sich im Detail — in dem, was dokumentiert
            und sauber hergeleitet wurde.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {qualitaeten.map(({ icon: Icon, num, title, text }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#E11D2F]" />
                  </div>
                  <span className="font-display font-black text-[#E11D2F]/30 text-[22px]">{num}</span>
                </div>
                <h3 className="font-display font-bold text-[17px] mb-2">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(24px,4vw,36px)] leading-[1.1] mb-12"
            data-reveal
          >
            So läuft Ihr Termin ab.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ablauf.map((a, i) => (
              <div key={a.num} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-black text-[#E11D2F] text-[22px]">{a.num}</span>
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <h3 className="font-display font-bold text-[15px] mb-2">{a.title}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Unsicher, welches Gutachten Sie brauchen?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Sagen Sie uns kurz, was passiert ist — wir ordnen den Fall ein. Kostenlos und unverbindlich.
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
