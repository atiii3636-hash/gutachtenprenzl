import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, X, Info, AlertTriangle } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, faqLd, SITE_URL } from "@/lib/seo";

const PATH = "/fiktive-abrechnung";
const UPDATED = "2026-08-21";
const UPDATED_LABEL = "21. August 2026";

export const metadata: Metadata = pageMetadata({
  title: "Fiktive Abrechnung: Geld statt Reparatur nach dem Unfall",
  description:
    "Sie können sich den Schaden auszahlen lassen, statt zu reparieren. Was dabei erstattet wird, was nicht, und wo die Versicherung kürzen darf.",
  path: PATH,
  keywords: [
    "fiktive abrechnung unfall",
    "schaden auszahlen lassen statt reparieren",
    "fiktive abrechnung mehrwertsteuer",
    "fiktive abrechnung nutzungsausfall",
    "unfallschaden auszahlen lassen",
  ],
});

/* Was bei fiktiver Abrechnung gezahlt wird und was nicht. Tabellenform, weil
   genau das die Frage ist, die Betroffene stellen. */
const posten = [
  { pos: "Reparaturkosten netto", zahlt: true, hinweis: "Nach der Kalkulation im Gutachten, ohne Mehrwertsteuer" },
  { pos: "Mehrwertsteuer", zahlt: false, hinweis: "Nur wenn sie tatsächlich anfällt, also bei echter Reparatur oder Ersatzkauf" },
  { pos: "Merkantile Wertminderung", zahlt: true, hinweis: "Bleibt unabhängig davon bestehen, ob Sie reparieren lassen" },
  { pos: "Nutzungsausfall", zahlt: true, hinweis: "Für die tatsächliche Ausfallzeit, höchstens die kalkulierte Reparaturdauer" },
  { pos: "Gutachterkosten", zahlt: true, hinweis: "Trägt bei Fremdverschulden die gegnerische Haftpflichtversicherung" },
  { pos: "Auslagenpauschale", zahlt: true, hinweis: "Übliche Pauschale für Telefon, Porto und Wege" },
  { pos: "Abschleppkosten", zahlt: true, hinweis: "Soweit tatsächlich angefallen und belegt" },
];

const vorteile = [
  "Sie entscheiden selbst, ob und wann Sie reparieren lassen",
  "Sie können günstiger reparieren und die Differenz behalten",
  "Kein Werkstattaufenthalt, kein Terminstress",
  "Wertminderung und Nutzungsausfall bleiben Ihnen erhalten",
];

const nachteile = [
  "Die Mehrwertsteuer bekommen Sie zunächst nicht ausgezahlt",
  "Bei einem späteren Verkauf müssen Sie den Unfall trotzdem angeben",
  "Die Versicherung darf unter Umständen auf eine günstigere Werkstatt verweisen",
  "Bleibt der Schaden unrepariert, kann ein Folgeschaden schwerer durchsetzbar sein",
];

const faq = [
  {
    q: "Was bedeutet fiktive Abrechnung?",
    a: "Sie lassen sich den im Gutachten ermittelten Schaden auszahlen, ohne das Fahrzeug tatsächlich reparieren zu lassen. Grundlage ist die Kalkulation des Sachverständigen. Sie dürfen mit dem Geld dann machen, was Sie wollen: günstiger reparieren, in Eigenregie instand setzen oder gar nichts tun.",
  },
  {
    q: "Bekomme ich bei fiktiver Abrechnung die Mehrwertsteuer?",
    a: "Nein, zunächst nicht. Ausgezahlt wird der Nettobetrag. Die Mehrwertsteuer wird erst erstattet, wenn sie tatsächlich anfällt, also wenn Sie später doch reparieren lassen oder ein Ersatzfahrzeug kaufen. Reichen Sie die Rechnung nach, wird der Betrag in aller Regel nachgezahlt.",
  },
  {
    q: "Steht mir auch bei fiktiver Abrechnung Nutzungsausfall zu?",
    a: "Nur für die Zeit, in der Sie tatsächlich ohne Fahrzeug waren, höchstens für die im Gutachten kalkulierte Reparaturdauer. Fahren Sie unrepariert weiter, entfällt der Anspruch. Reparieren Sie selbst, weisen Sie die Standzeit mit einer Reparaturbestätigung nach. Die Höhe ergibt sich aus der Fahrzeuggruppe.",
  },
  {
    q: "Bekomme ich die Wertminderung trotzdem?",
    a: "Ja. Die merkantile Wertminderung ist ein eigenständiger Schadenposten und hängt nicht davon ab, ob Sie reparieren lassen. Ihr Fahrzeug gilt nach dem Unfall unabhängig davon als Unfallwagen und ist beim Verkauf weniger wert.",
  },
  {
    q: "Darf die Versicherung mich auf eine günstigere Werkstatt verweisen?",
    a: "Unter bestimmten Voraussetzungen ja. Der Verweis muss sich auf eine gleichwertige und für Sie ohne Weiteres zugängliche Werkstatt beziehen. Bei jüngeren Fahrzeugen mit lückenlosem Scheckheft ist ein solcher Verweis oft nicht zulässig. Wir prüfen die Kürzung und widersprechen begründet.",
  },
  {
    q: "Kann ich später doch noch reparieren lassen und nachfordern?",
    a: "Die Mehrwertsteuer können Sie nachfordern, sobald sie angefallen ist. Bei den übrigen Positionen ist eine Nachforderung schwieriger, aber nicht ausgeschlossen, etwa wenn sich bei der Reparatur ein verdeckter Schaden zeigt, der im Gutachten noch nicht erfasst war.",
  },
  {
    q: "Wann lohnt sich die fiktive Abrechnung nicht?",
    a: "Bei einem Totalschaden im Bereich der 130-Prozent-Regel ist sie ausgeschlossen, dort müssen Sie tatsächlich reparieren lassen. Auch bei sicherheitsrelevanten Schäden an Karosserie, Achse oder Fahrerassistenzsystemen raten wir ab: Ein unreparierter Schaden kann später deutlich teurer werden.",
  },
];

const jsonLd = [
  breadcrumbLd([
    { name: "Ratgeber", path: "/ratgeber" },
    { name: "Fiktive Abrechnung", path: PATH },
  ]),
  faqLd(faq),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${PATH}#article`,
    headline: "Fiktive Abrechnung: Geld statt Reparatur nach dem Unfall",
    description:
      "Was bei einer fiktiven Abrechnung nach einem unverschuldeten Unfall erstattet wird, was nicht, und wo die Versicherung kürzen darf.",
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

export default function FiktiveAbrechnung() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={jsonLd} />
      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Ratgeber", href: "/ratgeber" },
          { name: "Fiktive Abrechnung", href: PATH },
        ]}
      />

      <PageHero
        kicker="Ratgeber · Abrechnung"
        title="Geld statt Reparatur."
        titleAccent="Ihr gutes Recht."
        lead="Nach einem unverschuldeten Unfall müssen Sie nicht reparieren lassen. Sie können sich den Schaden auszahlen lassen und selbst entscheiden, was mit dem Auto passiert."
        image="/foto5.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* Direktantwort */}
      <section className="px-5 pb-4">
        <div className="max-w-3xl mx-auto" data-reveal>
          <div className="bg-gradient-to-r from-[#E11D2F]/12 to-transparent border border-[#E11D2F]/25 rounded-xl p-6 md:p-7">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#E11D2F] uppercase mb-3">
              Kurz beantwortet
            </p>
            <p className="text-white/80 text-[16px] leading-relaxed">
              Bei der fiktiven Abrechnung zahlt die gegnerische Versicherung den im Gutachten
              kalkulierten Schaden <strong className="text-white">netto</strong> aus, also ohne
              Mehrwertsteuer. Wertminderung, Nutzungsausfall und Gutachterkosten bekommen Sie
              zusätzlich. Die Mehrwertsteuer wird nachgezahlt, sobald sie tatsächlich anfällt.
            </p>
            <p className="text-white/35 text-[12.5px] mt-4">Stand: {UPDATED_LABEL}</p>
          </div>
        </div>
      </section>

      {/* ============ 01 · WAS GEZAHLT WIRD ============ */}
      <section className="px-5 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Die Posten</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Was Sie bekommen und was nicht.
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/8" data-reveal>
            <table className="w-full text-left min-w-[560px]">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.03]">
                  <th className="px-5 py-3.5 text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase">Position</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase w-[90px]">Erstattet</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {posten.map(({ pos, zahlt, hinweis }) => (
                  <tr key={pos} className="border-b border-white/6 last:border-0">
                    <td className="px-5 py-4 text-[14.5px] font-semibold text-white">{pos}</td>
                    <td className="px-5 py-4">
                      {zahlt ? (
                        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4ade80]">
                          <Check size={14} className="stroke-[3]" /> ja
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#f87171]">
                          <X size={14} className="stroke-[3]" /> nein
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-[13.5px] text-white/50 leading-relaxed">{hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ 02 · ABWÄGUNG ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Abwägung</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Lohnt sich das für Sie?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22c55e]/[0.06] border border-[#22c55e]/25 rounded-xl p-7" data-reveal>
              <h3 className="font-display font-bold text-[17px] mb-5 text-[#4ade80]">Spricht dafür</h3>
              <ul className="space-y-3">
                {vorteile.map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <Check size={14} className="text-[#22c55e] stroke-[3] mt-1 flex-shrink-0" />
                    <span className="text-[14px] text-white/70 leading-snug">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#E11D2F]/[0.06] border border-[#E11D2F]/25 rounded-xl p-7" data-reveal style={{ transitionDelay: "80ms" }}>
              <h3 className="font-display font-bold text-[17px] mb-5 text-[#f87171]">Spricht dagegen</h3>
              <ul className="space-y-3">
                {nachteile.map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <X size={14} className="text-[#f87171] stroke-[3] mt-1 flex-shrink-0" />
                    <span className="text-[14px] text-white/70 leading-snug">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-4 bg-gradient-to-r from-[#E11D2F]/10 to-transparent border border-[#E11D2F]/20 rounded-xl p-5" data-reveal>
            <AlertTriangle size={22} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-white mb-1">Bei sicherheitsrelevanten Schäden abraten wir</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Schäden an Karosseriestruktur, Achse oder Fahrerassistenzsystemen sollten repariert
                werden. Ein unreparierter Schaden dieser Art wird bei einem Folgeunfall schnell zum
                Problem, sowohl technisch als auch bei der Regulierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Häufige Fragen zur fiktiven Abrechnung.
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
              { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall", sub: "Tagessätze A bis L" },
              { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
              { href: "/130-prozent-regelung", label: "130-Prozent-Regel", sub: "Reparieren trotz Totalschaden" },
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
            Unsicher, ob sich das für Sie rechnet?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Wir rechnen beide Wege durch und sagen Ihnen ehrlich, welcher für Sie besser ist.
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
