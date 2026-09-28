import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, Scale, TrendingUp, ShieldAlert, MapPin, Calculator, FileText } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import VideoBlock from "@/components/video-block";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/restwertermittlung";

export const metadata: Metadata = pageMetadata({
  title: "Restwertermittlung Berlin, korrekter Wert bei Totalschaden",
  description:
    "Bei Totalschaden entscheidet der Restwert über Ihre Auszahlung. Wir ermitteln ihn am regionalen Markt und prüfen überhöhte Angebote der Versicherung.",
  path: PATH,
  keywords: [
    "Restwertermittlung Berlin",
    "Restwert Totalschaden ermitteln",
    "Restwertangebot Versicherung zu hoch",
    "Wiederbeschaffungswert Berlin",
    "Totalschaden Gutachten Berlin",
  ],
});

const dreiWerte = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Wiederbeschaffungswert",
    text: "Was ein gleichwertiges Fahrzeug am regionalen Markt kosten würde. Das ist die Obergrenze dessen, was Ihnen bei einem Totalschaden zusteht.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Restwert",
    text: "Was Ihr beschädigtes Fahrzeug in diesem Zustand noch wert ist. Je höher dieser Wert angesetzt wird, desto weniger zahlt die Versicherung aus.",
  },
  {
    num: "03",
    icon: Calculator,
    title: "Die Differenz",
    text: "Wiederbeschaffungswert minus Restwert ergibt Ihre Entschädigung. Deshalb entscheidet die Genauigkeit beider Zahlen unmittelbar über Ihr Geld.",
  },
];

const grundlage = [
  "Bewertung am regionalen Markt, nicht an einem überregionalen Aufkäufermarkt",
  "Nachvollziehbare Angebote, die Sie tatsächlich wahrnehmen könnten",
  "Zustand, Laufleistung und Ausstattung fließen konkret ein",
  "Restwertangebote werden mit Herkunft und Datum dokumentiert",
  "Die Herleitung ist im Gutachten offengelegt und prüfbar",
];

const ablauf = [
  { num: "01", icon: Phone, title: "Schaden melden", zeit: "Sofort, rund um die Uhr", text: "Sie melden sich, bevor Sie irgendetwas mit dem Fahrzeug unternehmen. Das ist der wichtigste Punkt." },
  { num: "02", icon: FileText, title: "Begutachtung", zeit: "Vor Ort bei Ihnen", text: "Wir erfassen den Schaden vollständig und stellen fest, ob überhaupt ein Totalschaden vorliegt." },
  { num: "03", icon: Calculator, title: "Werte ermitteln", zeit: "Regionaler Markt", text: "Wiederbeschaffungswert und Restwert werden anhand echter Marktdaten hergeleitet und belegt." },
  { num: "04", icon: Scale, title: "Regulierung", zeit: "Wir bleiben dran", text: "Legt die Versicherung ein eigenes, höheres Restwertangebot vor, prüfen wir es und widersprechen begründet." },
];

const faqs = [
  {
    q: "Warum ist der Restwert so wichtig?",
    a: "Bei einem Totalschaden bekommen Sie die Differenz zwischen Wiederbeschaffungswert und Restwert. Je höher der Restwert angesetzt wird, desto weniger Geld erhalten Sie. Schon wenige hundert Euro Unterschied schlagen hier voll durch.",
  },
  {
    q: "Die Versicherung hat mir ein höheres Restwertangebot geschickt. Muss ich das annehmen?",
    a: "Nicht ohne Weiteres. Solche Angebote stammen oft von überregionalen Aufkäufern, an die Sie Ihr Fahrzeug praktisch kaum verkaufen können. Maßgeblich ist grundsätzlich der Markt, der Ihnen tatsächlich zugänglich ist. Wir prüfen jedes Angebot und widersprechen, wenn es nicht trägt.",
  },
  {
    q: "Darf ich mein Auto verkaufen, bevor das Gutachten fertig ist?",
    a: "Besser nicht. Wenn Sie vorher verkaufen, verlieren Sie den Nachweis über den Zustand und damit Verhandlungsspielraum. Warten Sie das Gutachten ab, danach wissen Sie, was das Fahrzeug wirklich wert ist.",
  },
  {
    q: "Wann liegt überhaupt ein Totalschaden vor?",
    a: "Von einem wirtschaftlichen Totalschaden spricht man, wenn die Reparatur teurer wäre als die Wiederbeschaffung eines vergleichbaren Fahrzeugs. Ob das der Fall ist, zeigt erst der Vergleich der Werte im Gutachten.",
  },
  {
    q: "Kann ich mein Fahrzeug trotz Totalschaden behalten?",
    a: "Ja, das ist häufig möglich. Sie erhalten dann die Differenz aus Wiederbeschaffungswert und Restwert und behalten das Fahrzeug. Ob sich das lohnt, hängt vom Einzelfall ab. Wir sagen Ihnen, was in Ihrer Situation sinnvoll ist.",
  },
  {
    q: "Was kostet die Restwertermittlung?",
    a: "Sie ist Teil des Schadengutachtens. Bei einem unverschuldeten Unfall trägt die Haftpflichtversicherung des Verursachers die Kosten vollständig, Sie zahlen nichts.",
  },
];

export default function RestwertermittlungNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Leistungen", path: "/leistungen" },
            { name: "Restwertermittlung", path: PATH },
          ]),
          serviceLd({
            name: "Restwertermittlung Berlin",
            description:
              "Ermittlung von Restwert und Wiederbeschaffungswert bei Totalschaden anhand des regionalen Marktes.",
            path: PATH,
            serviceType: "Restwertermittlung",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: "Restwertermittlung", href: "/restwertermittlung" },
        ]}
      />

      <PageHero
        kicker="Restwertermittlung"
        title="Beim Totalschaden"
        titleAccent="zählt jeder Euro."
        lead="Ihre Auszahlung ergibt sich aus zwei Zahlen. Werden sie falsch angesetzt, verlieren Sie schnell einen vierstelligen Betrag. Wir ermitteln sie am echten Markt."
        image="/foto10.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · DIE DREI WERTE ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Die Rechnung</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Zwei Werte, ein Ergebnis.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            So einfach die Rechnung aussieht, so groß ist der Spielraum bei den beiden Zahlen.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {dreiWerte.map(({ num, icon: Icon, title, text }, i) => (
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
                <h3 className="font-display font-bold text-[17px] mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · DIE FALLE ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Vorsicht</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Das überhöhte Restwertangebot.
          </h2>

          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-7 md:p-8 mb-6" data-reveal>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center flex-shrink-0">
                <ShieldAlert size={19} className="text-[#E11D2F]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[18px] mb-2">Was oft passiert</h3>
                <p className="text-white/55 text-[14.5px] leading-relaxed">
                  Kurz nach dem Unfall meldet sich die Versicherung mit einem Restwertangebot, das deutlich über
                  dem liegt, was Sie vor Ort erzielen könnten. Es stammt meist von einem überregionalen Aufkäufer.
                  Nehmen Sie es als Grundlage, sinkt Ihre Auszahlung entsprechend.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-5 border-t border-white/8">
              <div className="w-11 h-11 rounded-lg bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={19} className="text-[#22c55e]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[18px] mb-2">Worauf es ankommt</h3>
                <p className="text-white/55 text-[14.5px] leading-relaxed">
                  Maßgeblich ist grundsätzlich der Markt, der Ihnen tatsächlich offensteht, also der regionale.
                  Genau daran orientiert sich unsere Ermittlung, und genau das legen wir im Gutachten offen.
                </p>
              </div>
            </div>
          </div>

          <ul className="space-y-2.5">
            {grundlage.map((v, i) => (
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
        </div>
      </section>

      {/* ============ 03 · ABLAUF ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ablauf</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-14" data-reveal>
            So gehen wir vor.
          </h2>

          <div className="relative">
            <span className="hidden sm:block absolute left-[27px] top-8 bottom-8 w-px bg-white/10" aria-hidden="true" />
            <ol className="space-y-4">
              {ablauf.map(({ num, icon: Icon, title, zeit, text }, i) => (
                <li key={num} className="relative flex gap-5 sm:gap-6" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0A0A0D] border border-[#E11D2F]/30 items-center justify-center flex-shrink-0 relative z-10">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7 hover:border-white/20 transition-colors">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 mb-3">
                      <span className="font-display font-black text-[#E11D2F] text-[20px] leading-none">{num}</span>
                      <h3 className="font-display font-bold text-[19px] leading-none">{title}</h3>
                      <span className="text-[10.5px] font-bold tracking-[0.18em] text-white/35 uppercase">{zeit}</span>
                    </div>
                    <p className="text-white/55 text-[14.5px] leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
            Häufige Fragen zum Restwert.
          </h2>
          <FaqListe faqs={faqs} />
        </div>
      </section>

      {/* ============ WEITERE LEISTUNGEN ============ */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Ebenfalls für Sie
          </p>
          <div className="grid sm:grid-cols-3 gap-3" data-reveal>
            {[
              { href: "/schadengutachten", label: "Schadengutachten", sub: "Nach einem Unfall" },
              { href: "/wertgutachten", label: "Wertgutachten", sub: "Marktwert feststellen" },
              { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
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

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4">
            Verkaufen Sie nichts, bevor wir draufgeschaut haben.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein Anruf, bevor Sie auf ein Restwertangebot eingehen. Das ist oft der Unterschied von mehreren
            hundert Euro.
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

      <VideoBlock slug="restwertermittlung" />

      <FooterNeu />
    </main>
  );
}
