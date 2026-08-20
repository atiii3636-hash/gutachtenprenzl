import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, TrendingDown, Wrench, Clock, Gauge, AlertTriangle, FileText } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/wertminderung";

export const metadata: Metadata = pageMetadata({
  title: "Wertminderung nach Unfall, Berlin",
  description:
    "Ein repariertes Unfallfahrzeug ist weniger wert. Diese Wertminderung steht Ihnen zu. Wir ermitteln sie nachvollziehbar und setzen sie gegenüber der Versicherung durch.",
  path: PATH,
  keywords: [
    "Wertminderung Unfall Berlin",
    "merkantile Wertminderung berechnen",
    "technische Wertminderung Kfz",
    "Minderwert Fahrzeug Gutachten",
    "Wertminderung Versicherung durchsetzen",
  ],
});

const arten = [
  {
    num: "01",
    icon: TrendingDown,
    title: "Merkantile Wertminderung",
    text: "Auch eine fachgerechte Reparatur macht das Fahrzeug nicht wieder unfallfrei. Beim Verkauf muss der Unfall angegeben werden, und Käufer zahlen dafür weniger. Genau diesen Verlust ersetzt die Versicherung.",
    beispiel: "Der häufigere und meist größere Posten.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "Technische Wertminderung",
    text: "Wenn sich der Schaden technisch nicht vollständig beheben lässt und ein messbarer Nachteil zurückbleibt, etwa an der Karosseriestruktur. Das kommt seltener vor, fällt dann aber ins Gewicht.",
    beispiel: "Relevant bei schweren Struktur- und Rahmenschäden.",
  },
];

const faktoren = [
  { icon: Clock, title: "Alter des Fahrzeugs", text: "Je jünger das Fahrzeug, desto stärker wirkt sich ein Unfall auf den Wiederverkauf aus. Bei sehr alten Fahrzeugen entfällt der Anspruch häufig." },
  { icon: Gauge, title: "Laufleistung", text: "Ein Fahrzeug mit geringer Laufleistung verliert durch einen Unfall spürbar mehr an Wert als eines mit hoher Kilometerzahl." },
  { icon: AlertTriangle, title: "Schwere des Schadens", text: "Entscheidend ist, welche Bauteile betroffen waren. Ein Schaden an tragenden Teilen wiegt deutlich schwerer als ein ausgetauschter Kotflügel." },
  { icon: FileText, title: "Vorschäden", text: "War das Fahrzeug bereits vorgeschädigt, verringert das den zusätzlichen Wertverlust. Auch das muss sauber abgegrenzt werden." },
];

const durchsetzen = [
  "Die Wertminderung wird im Gutachten als eigener Posten ausgewiesen",
  "Die Herleitung ist nachvollziehbar und für die Versicherung prüfbar",
  "Sie erhalten den Betrag zusätzlich zu den Reparaturkosten",
  "Der Anspruch besteht auch dann, wenn Sie gar nicht reparieren lassen",
  "Bei Kürzung durch die Versicherung begründen wir schriftlich nach",
];

const faqs = [
  {
    q: "Was ist eine Wertminderung überhaupt?",
    a: "Ein Fahrzeug, das einen Unfall hatte, lässt sich später schlechter verkaufen als ein unfallfreies, selbst wenn es einwandfrei repariert wurde. Diesen Wertverlust nennt man merkantile Wertminderung. Er ist ein eigener Schadenposten und wird zusätzlich zu den Reparaturkosten ersetzt.",
  },
  {
    q: "Bekomme ich die Wertminderung auch ohne Reparatur ausgezahlt?",
    a: "Ja. Bei fiktiver Abrechnung, also wenn Sie sich den Schaden auszahlen lassen ohne zu reparieren, bleibt der Anspruch auf Wertminderung grundsätzlich bestehen. Sie ist unabhängig davon, ob Sie das Geld in die Reparatur stecken.",
  },
  {
    q: "Ab welchem Fahrzeugalter gibt es keine Wertminderung mehr?",
    a: "Eine feste Grenze gibt es nicht. In der Praxis wird der Anspruch mit steigendem Alter und steigender Laufleistung kleiner, bei sehr alten Fahrzeugen entfällt er meist. Entscheidend ist immer der Einzelfall, deshalb prüfen wir jedes Fahrzeug konkret.",
  },
  {
    q: "Wie wird die Höhe berechnet?",
    a: "In der Praxis kommen anerkannte Berechnungsmethoden zum Einsatz, die Fahrzeugwert, Reparaturkosten, Alter und Laufleistung ins Verhältnis setzen. Wir weisen im Gutachten aus, wie wir zu dem Betrag kommen, damit die Versicherung ihn nachvollziehen kann.",
  },
  {
    q: "Die Versicherung hat die Wertminderung gestrichen. Was jetzt?",
    a: "Das passiert regelmäßig. Wir begründen die Position schriftlich nach und legen die Herleitung offen. Bleibt die Versicherung dabei, ist das ein typischer Fall für Ihren Anwalt, dessen Kosten bei Fremdverschulden ebenfalls die Gegenseite trägt.",
  },
  {
    q: "Kostet mich die Ermittlung der Wertminderung extra?",
    a: "Nein. Sie ist Bestandteil des Schadengutachtens. Bei einem unverschuldeten Unfall trägt die gegnerische Haftpflichtversicherung die Gutachterkosten vollständig.",
  },
];

export default function WertminderungNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Leistungen", path: "/leistungen" },
            { name: "Wertminderung", path: PATH },
          ]),
          serviceLd({
            name: "Wertminderung ermitteln, Berlin",
            description:
              "Ermittlung der merkantilen und technischen Wertminderung nach einem Unfall als eigener Schadenposten im Gutachten.",
            path: PATH,
            serviceType: "Ermittlung der Wertminderung",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: "Wertminderung", href: "/wertminderung" },
        ]}
      />

      <PageHero
        kicker="Wertminderung"
        title="Repariert ist nicht"
        titleAccent="wie neu."
        lead="Ihr Auto sieht nach der Reparatur wieder gut aus, ist aber weniger wert. Diesen Verlust müssen Sie nicht tragen. Er gehört ins Gutachten und wird ersetzt."
        image="/foto7.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · DIE ZWEI ARTEN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Zwei Arten</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Zwei Arten von Wertverlust.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Beide sind erstattungsfähig, treten aber in ganz unterschiedlichen Fällen auf.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {arten.map(({ num, icon: Icon, title, text, beispiel }, i) => (
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

      {/* ============ 02 · FAKTOREN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Einflussfaktoren</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Wovon die Höhe abhängt.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Eine pauschale Zahl gibt es nicht. Vier Faktoren bestimmen, wie hoch Ihr Anspruch ausfällt.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {faktoren.map(({ icon: Icon, title, text }, i) => (
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

      {/* ============ 03 · DURCHSETZEN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Durchsetzung</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            So bekommen Sie das Geld auch.
          </h2>

          <ul className="space-y-2.5">
            {durchsetzen.map((v, i) => (
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
            <AlertTriangle size={22} className="text-[#E11D2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-white mb-1">Häufig gestrichen, selten zu Recht</p>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Die Wertminderung ist der Posten, den Versicherungen am häufigsten kürzen. Wer sie nicht sauber
                herleitet, verliert sie. Deshalb steht sie bei uns nie als Pauschale im Gutachten.
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
            Häufige Fragen zur Wertminderung.
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
              { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Wert nach Totalschaden" },
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
            Lassen Sie Ihren Anspruch prüfen.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein kurzer Anruf genügt, damit wir einschätzen können, ob und in welcher Höhe Ihnen eine
            Wertminderung zusteht.
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
