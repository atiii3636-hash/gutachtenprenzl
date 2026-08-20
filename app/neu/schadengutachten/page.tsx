import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, Camera, Calculator, FileText, Send, Banknote, Scale, ShieldCheck } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/schadengutachten";

export const metadata: Metadata = pageMetadata({
  title: "Schadengutachten Berlin, kostenlos bei fremdem Verschulden",
  description:
    "Unabhängiges Schadengutachten nach einem Unfall in Berlin. Reparaturkosten, Wertminderung und Nutzungsausfall werden vollständig erfasst. In 24 Stunden fertig.",
  path: PATH,
  keywords: [
    "Schadengutachten Berlin",
    "Unfallgutachten Berlin",
    "Kfz Schadengutachten kostenlos",
    "Gutachten nach Unfall Berlin",
    "Schadensgutachten Sachverständiger Berlin",
  ],
});

const inhalte = [
  {
    num: "01",
    icon: Calculator,
    title: "Reparaturkosten",
    text: "Was die Instandsetzung tatsächlich kostet, kalkuliert auf Basis der Herstellervorgaben und der ortsüblichen Stundensätze. Nicht geschätzt, sondern Position für Position hergeleitet.",
  },
  {
    num: "02",
    icon: Banknote,
    title: "Merkantile Wertminderung",
    text: "Ein repariertes Unfallfahrzeug bringt beim Verkauf weniger als ein unfallfreies. Diesen Verlust müssen Sie nicht tragen, er gehört in das Gutachten und wird ersetzt.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Nutzungsausfall",
    text: "Für jeden Tag ohne Fahrzeug steht Ihnen Entschädigung zu, auch wenn Sie keinen Mietwagen nehmen. Wir legen die Fahrzeuggruppe und die Ausfalldauer nachvollziehbar fest.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Wiederbeschaffungs- und Restwert",
    text: "Bei größeren Schäden entscheidet das Verhältnis dieser Werte darüber, ob repariert oder abgerechnet wird. Wir ermitteln beide anhand des realen Marktes.",
  },
];

const ablauf = [
  { num: "01", icon: Phone, title: "Sie melden sich", zeit: "Sofort, rund um die Uhr", text: "Sie schildern kurz den Unfall. Wir sagen Ihnen direkt, ob ein Gutachten sinnvoll ist und wer es bezahlt." },
  { num: "02", icon: Camera, title: "Besichtigung vor Ort", zeit: "Etwa 30 bis 60 Minuten", text: "Wir kommen dorthin, wo Ihr Fahrzeug steht, und dokumentieren jeden sichtbaren und verdeckten Schaden." },
  { num: "03", icon: FileText, title: "Gutachten erstellen", zeit: "In der Regel in 24 Stunden", text: "Alle Positionen werden berechnet und belegt. Das Ergebnis ist rechtssicher und vor Gericht verwertbar." },
  { num: "04", icon: Send, title: "Regulierung", zeit: "Bis Ihr Geld da ist", text: "Das Gutachten geht an die Versicherung. Bei Rückfragen und Kürzungen bleiben wir für Sie dran." },
];

const wannSinnvoll = [
  "Ab etwa 750 Euro Schadenhöhe, darunter genügt oft ein Kurzgutachten",
  "Immer bei unverschuldetem Unfall, dort kostet es Sie nichts",
  "Bei Verdacht auf verdeckte Schäden an Achse, Rahmen oder Elektronik",
  "Wenn die gegnerische Versicherung eigene Zahlen vorlegt",
  "Vor jeder Reparatur, damit der Zustand vorher dokumentiert ist",
  "Auch bei älteren Fahrzeugen, dort geht es oft um den Totalschaden",
];

const faqs = [
  {
    q: "Was kostet ein Schadengutachten in Berlin?",
    a: "Bei einem unverschuldeten Unfall zahlen Sie nichts. Die Haftpflichtversicherung des Verursachers trägt die Gutachterkosten, das ist gesetzlich geregelt. Bei eigenem Verschulden läuft es über Ihre Kaskoversicherung, hier klären wir vorab, ob sich das Gutachten für Sie rechnet.",
  },
  {
    q: "Darf ich den Sachverständigen selbst aussuchen?",
    a: "Ja. Als Geschädigter haben Sie das Recht, einen eigenen unabhängigen Sachverständigen zu beauftragen. Sie müssen den Gutachter der gegnerischen Versicherung nicht akzeptieren, denn dieser arbeitet im Auftrag der Versicherung.",
  },
  {
    q: "Wie lange dauert es bis zum fertigen Gutachten?",
    a: "Den Besichtigungstermin bekommen Sie meist noch am selben oder am nächsten Werktag. Das fertige Gutachten liegt in der Regel innerhalb von 24 Stunden nach der Besichtigung vor.",
  },
  {
    q: "Reicht nicht auch ein Kostenvoranschlag der Werkstatt?",
    a: "Ein Kostenvoranschlag beziffert nur die Reparatur. Wertminderung, Nutzungsausfall und verdeckte Schäden tauchen darin nicht auf. Genau diese Posten machen häufig den größeren Teil Ihres Anspruchs aus.",
  },
  {
    q: "Muss mein Auto zur Besichtigung fahrbereit sein?",
    a: "Nein. Wir kommen dorthin, wo das Fahrzeug steht, auch wenn es nicht mehr bewegt werden kann. Ein Abschleppen zu uns ist nicht nötig.",
  },
  {
    q: "Was passiert, wenn die Versicherung das Gutachten kürzt?",
    a: "Das kommt vor. Wir begründen die gekürzten Positionen schriftlich nach und bleiben im Austausch mit der Versicherung. Bei hartnäckigen Fällen arbeiten wir mit Ihrem Anwalt zusammen.",
  },
];

export default function SchadengutachtenNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Leistungen", path: "/leistungen" },
            { name: "Schadengutachten", path: PATH },
          ]),
          serviceLd({
            name: "Schadengutachten Berlin",
            description:
              "Unabhängiges Kfz-Schadengutachten nach Unfall in Berlin mit Reparaturkosten, Wertminderung, Nutzungsausfall und Restwert.",
            path: PATH,
            serviceType: "Kfz-Schadengutachten",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Leistungen", href: "/neu/leistungen" },
          { name: "Schadengutachten", href: "/neu/schadengutachten" },
        ]}
      />

      <PageHero
        kicker="Schadengutachten"
        title="Jeder Posten belegt."
        titleAccent="Jeder Euro gesichert."
        lead="Nach einem unverschuldeten Unfall zahlt die gegnerische Versicherung. Damit sie das vollständig tut, braucht es ein Gutachten, das nichts ausklammert."
        image="/foto5.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* Kennzahlen */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-5 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {[
              ["0 €", "bei fremdem Verschulden"],
              ["24 h", "bis zum Gutachten"],
              ["TÜV", "zertifiziert"],
              ["Berlin", "vor Ort bei Ihnen"],
            ].map(([val, label], i) => (
              <div
                key={label}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="text-center md:border-l md:border-white/8 md:first:border-l-0 md:px-6"
              >
                <div className="font-display font-black text-white text-[clamp(26px,4vw,38px)] leading-none mb-1.5">{val}</div>
                <div className="text-[13px] text-white/40 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 01 · WAS DRIN STEHT ============ */}
      <section className="px-5 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Der Inhalt</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Was in einem Schadengutachten steht.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Vier Bereiche entscheiden darüber, wie viel Geld am Ende bei Ihnen ankommt. Fehlt einer davon,
            zahlen Sie drauf.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {inhalte.map(({ num, icon: Icon, title, text }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  <span className="font-display font-black text-[#E11D2F]/30 text-[24px]">{num}</span>
                </div>
                <h3 className="font-display font-bold text-[18px] mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · WANN SINNVOLL ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Wann es sich lohnt</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Wann Sie ein Gutachten brauchen.
          </h2>

          <ul className="space-y-2.5">
            {wannSinnvoll.map((v, i) => (
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

          <div className="mt-6 flex items-start gap-4 bg-gradient-to-r from-[#E11D2F]/10 to-transparent border border-[#E11D2F]/20 rounded-xl p-5" data-reveal>
            <ShieldCheck size={22} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-white mb-1">Unsicher, ob sich ein Gutachten lohnt?</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Rufen Sie an und schildern Sie den Fall. Wenn ein Gutachten für Sie nichts bringt, sagen wir
                Ihnen das auch. Die Einschätzung kostet nichts.
              </p>
            </div>
          </div>
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
            In vier Schritten zum Gutachten.
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
            Häufige Fragen zum Schadengutachten.
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
              { href: "/neu/wertgutachten", label: "Wertgutachten", sub: "Marktwert feststellen" },
              { href: "/neu/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
              { href: "/neu/restwertermittlung", label: "Restwertermittlung", sub: "Wert nach Totalschaden" },
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
            Unfall gehabt? Melden Sie sich.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein Anruf kostet nichts und verpflichtet zu nichts. Sie erfahren sofort, welche Ansprüche Sie haben.
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
