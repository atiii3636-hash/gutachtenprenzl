import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, X, FileText, Euro, Clock, AlertTriangle, Camera, Scale } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/kurzgutachten-berlin";

export const metadata: Metadata = pageMetadata({
  title: "Kurzgutachten Berlin, für kleine Schäden",
  description:
    "Kurzgutachten für Bagatellschäden bis rund 750 Euro. Wir sagen Ihnen vorher ehrlich, ob es reicht, oder ob Ihnen ein volles Gutachten zusteht, das nichts kostet.",
  path: PATH,
  keywords: [
    "Kurzgutachten Berlin",
    "Kfz Kurzgutachten",
    "Kurzgutachten Kosten",
    "Bagatellschaden Gutachten Berlin",
    "kleines Schadengutachten Berlin",
  ],
});

const vergleich = [
  {
    num: "01",
    icon: FileText,
    title: "Kurzgutachten",
    text: "Eine kompakte Schadenfeststellung mit Fotodokumentation und Reparaturkalkulation. Kein Wiederbeschaffungswert, keine Wertminderung, kein Nutzungsausfall. Gedacht für kleine Schäden, bei denen der Aufwand eines vollen Gutachtens in keinem Verhältnis steht.",
    beispiel: "Sinnvoll unterhalb der Bagatellgrenze von rund 750 Euro.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Volles Schadengutachten",
    text: "Die komplette Beweissicherung: Reparaturkosten, Wiederbeschaffungs- und Restwert, Wertminderung, Nutzungsausfalldauer und Prüfung auf verdeckte Schäden. Das ist die Grundlage, auf der die Gegenseite tatsächlich zahlen muss.",
    beispiel: "Bei Fremdverschulden zahlt es die gegnerische Versicherung.",
  },
];

const wannSinnvoll = [
  { icon: Euro, title: "Kleiner Schaden, eigenes Verschulden", text: "Sie haben den Schaden selbst verursacht, wollen ihn aber nicht über die Kasko laufen lassen, weil die Rückstufung teurer wäre als die Reparatur. Dann brauchen Sie nur eine belastbare Zahl." },
  { icon: Camera, title: "Beweis vor Rückgabe", text: "Leasingrückgabe oder Ende der Mietwagenzeit. Sie wollen den Zustand dokumentiert haben, bevor jemand anderes Schäden behauptet, die nicht von Ihnen stammen." },
  { icon: Clock, title: "Schnelle Einschätzung vor dem Verkauf", text: "Sie wollen wissen, was eine Instandsetzung kostet, bevor Sie entscheiden, ob Sie reparieren oder mit Schaden verkaufen." },
  { icon: AlertTriangle, title: "Streit über eine kleine Delle", text: "Nachbarschaftsschaden, Parkrempler mit bekanntem Verursacher, Streit mit der Werkstatt. Eine neutrale Feststellung beendet die Diskussion meistens schneller als ein Anwalt." },
];

const wannNicht = [
  "Der Unfall war unverschuldet, dann steht Ihnen das volle Gutachten kostenlos zu",
  "Der Schaden liegt erkennbar über der Bagatellgrenze von rund 750 Euro",
  "Es sind Airbags, Sensorik oder tragende Teile betroffen",
  "Sie wollen Nutzungsausfall oder Wertminderung geltend machen",
  "Die Sache geht absehbar vor Gericht oder zum Anwalt",
];

const faqs = [
  {
    q: "Was ist der Unterschied zwischen Kurzgutachten und Kostenvoranschlag?",
    a: "Ein Kostenvoranschlag kommt von der Werkstatt, die die Reparatur anschließend selbst ausführen will. Ein Kurzgutachten kommt von einem unabhängigen Sachverständigen, der an der Reparatur nichts verdient. Vor Gericht und gegenüber Versicherungen hat das mehr Gewicht, weil kein Eigeninteresse dahintersteht.",
  },
  {
    q: "Was kostet ein Kurzgutachten in Berlin?",
    a: "Das hängt vom Fahrzeug und vom Umfang des Schadens ab. Rufen Sie kurz an und beschreiben Sie, worum es geht, dann bekommen Sie vorher eine feste Zahl. Falls sich im Gespräch herausstellt, dass Ihnen ein volles Gutachten zusteht, das die Gegenseite zahlt, sagen wir Ihnen das. Dann brauchen Sie das Kurzgutachten nicht.",
  },
  {
    q: "Wo liegt die Bagatellgrenze genau?",
    a: "Eine gesetzlich festgelegte Zahl gibt es nicht. Die Rechtsprechung bewegt sich meist im Bereich von 700 bis 1.000 Euro, häufig genannt werden 750 Euro. Unterhalb davon muss die gegnerische Versicherung die Kosten für ein volles Gutachten nicht zwingend übernehmen. Ob Ihr Schaden darunter liegt, sieht man einem Blechschaden von außen selten an.",
  },
  {
    q: "Reicht ein Kurzgutachten für die Versicherung?",
    a: "Für die eigene Kaskoversicherung bei kleinen Schäden in der Regel ja. Für die Haftpflichtversicherung der Gegenseite bei einem unverschuldeten Unfall nicht, denn dort geht es auch um Wertminderung, Nutzungsausfall und Restwert. Diese Posten stehen im Kurzgutachten nicht drin und werden dann auch nicht gezahlt.",
  },
  {
    q: "Wie lange dauert ein Kurzgutachten?",
    a: "Die Besichtigung dauert etwa 20 bis 30 Minuten. Die Ausfertigung bekommen Sie in der Regel am nächsten Werktag digital. Wir kommen dorthin, wo das Fahrzeug steht, in ganz Berlin.",
  },
  {
    q: "Kann ich aus dem Kurzgutachten später ein volles Gutachten machen?",
    a: "Wenn sich bei der Besichtigung zeigt, dass der Schaden größer ist als gedacht, sprechen wir Sie direkt darauf an, bevor wir etwas ausfertigen. Nachträglich aufzustocken ist unsauber, weil dann zwei Dokumente mit unterschiedlichen Zahlen im Umlauf sind. Wir klären das lieber vorher.",
  },
];

export default function KurzgutachtenBerlin() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Leistungen", path: "/leistungen" },
            { name: "Kurzgutachten Berlin", path: PATH },
          ]),
          serviceLd({
            name: "Kurzgutachten Berlin",
            description:
              "Kompakte Schadenfeststellung mit Fotodokumentation und Reparaturkalkulation für kleine Schäden unterhalb der Bagatellgrenze.",
            path: PATH,
            serviceType: "Kurzgutachten Kfz",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: "Kurzgutachten Berlin", href: PATH },
        ]}
      />

      <PageHero
        kicker="Kurzgutachten"
        title="Kleiner Schaden,"
        titleAccent="kleines Gutachten."
        lead="Nicht jeder Kratzer braucht dreißig Seiten. Für kleine Schäden reicht eine kompakte Feststellung. Wir sagen Ihnen vorher, ob das in Ihrem Fall die richtige Wahl ist."
        image="/foto7.jpg"
        ctaLabel="Kurz anrufen"
      />

      {/* ============ 01 · DER UNTERSCHIED ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Der Unterschied</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Zwei Wege, ein Schaden.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Der Unterschied liegt nicht in der Sorgfalt, sondern im Umfang. Und damit darin, was Sie am Ende ersetzt bekommen.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {vergleich.map(({ num, icon: Icon, title, text, beispiel }, i) => (
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
                <h3 className="font-display font-bold text-[19px] mb-3">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-5 flex-1">{text}</p>
                <p className="text-[12.5px] font-semibold text-white/45 bg-white/[0.05] border border-white/10 rounded-lg px-3.5 py-2.5">
                  {beispiel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · WANN SINNVOLL ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Passende Fälle</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Wann ein Kurzgutachten reicht.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            In diesen Situationen brauchen Sie eine belastbare Zahl, aber keine vollständige Beweissicherung.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {wannSinnvoll.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-[#E11D2F]" />
                </div>
                <h3 className="font-display font-bold text-[16.5px] mb-2">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · WANN NICHT ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Grenzen</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Wann Sie es nicht nehmen sollten.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Es gibt Fälle, in denen ein Kurzgutachten Sie Geld kostet, statt welches zu sparen.
          </p>

          <div className="space-y-2.5" data-reveal>
            {wannNicht.map((z) => (
              <div key={z} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-lg px-5 py-4">
                <X size={16} className="text-[#E11D2F] shrink-0 mt-0.5" />
                <p className="text-white/60 text-[14.5px] leading-relaxed">{z}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#E11D2F]/[0.07] border border-[#E11D2F]/25 rounded-xl p-6" data-reveal>
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-[#E11D2F] shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold text-[15.5px] mb-2">Der häufigste Denkfehler</p>
                <p className="text-[13.5px] text-white/50 leading-relaxed">
                  Viele fragen nach einem Kurzgutachten, weil sie Kosten sparen wollen. Bei einem
                  unverschuldeten Unfall gibt es dabei aber nichts zu sparen: Das volle Gutachten zahlt
                  die Haftpflichtversicherung des Verursachers. Wer stattdessen ein Kurzgutachten
                  beauftragt, zahlt selbst und verzichtet zusätzlich auf Wertminderung und
                  Nutzungsausfall. Deshalb fragen wir am Telefon immer zuerst, wer den Unfall
                  verursacht hat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04 · WAS DRIN STEHT ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Inhalt</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Was im Kurzgutachten steht.
          </h2>

          <div className="space-y-2.5" data-reveal>
            {[
              "Fahrzeugdaten, Laufleistung und Zustand zum Zeitpunkt der Besichtigung",
              "Fotodokumentation der Schadenstelle aus mehreren Perspektiven",
              "Beschreibung des Schadensbildes und der betroffenen Bauteile",
              "Kalkulation der Reparaturkosten auf Basis der Herstellervorgaben",
              "Einschätzung, ob eine Instandsetzung wirtschaftlich sinnvoll ist",
            ].map((z) => (
              <div key={z} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-lg px-5 py-4">
                <Check size={16} className="text-[#E11D2F] shrink-0 mt-0.5" />
                <p className="text-white/60 text-[14.5px] leading-relaxed">{z}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 05 · FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">05</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Häufige Fragen zum Kurzgutachten.
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
              { href: "/schadengutachten", label: "Schadengutachten", sub: "Der volle Umfang" },
              { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?", sub: "Und wer es zahlt" },
              { href: "/wertgutachten", label: "Wertgutachten", sub: "Marktwert feststellen" },
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
            Zwei Minuten am Telefon sparen Ihnen viel Geld.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Beschreiben Sie kurz, was passiert ist. Wir sagen Ihnen, ob ein Kurzgutachten reicht oder
            ob Ihnen das volle Gutachten zusteht, für das Sie nichts bezahlen.
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
