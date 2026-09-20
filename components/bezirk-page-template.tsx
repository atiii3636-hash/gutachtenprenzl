import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Check, Clock, Shield, Star, AlertTriangle, ChevronRight, MapPin, Euro, Car, Gauge, FileText } from "lucide-react";
import StandortKarte from "@/components/standort-karte";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import FaqListe from "@/components/neu/faq-liste";
import type { BezirkContent } from "@/lib/bezirk-content";
import { bezirkContent } from "@/lib/bezirk-content";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import { serviceLd } from "@/lib/seo";

interface Props {
  content: BezirkContent;
}

/* Kapitelmarke wie auf der Startseite: Nummer in Rot, Label gesperrt. */
function Kapitel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
      <span className="font-display font-black text-[#E11D2F] text-[15px]">{num}</span>
      <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">{label}</span>
    </div>
  );
}

export default function BezirkPageTemplate({ content }: Props) {
  const { name, nameShort, intro, localText, subdistricts, hotspots, distanceMin, faqs, neighborSlugs, slug, deepDive, h1Ort, praxisfall } = content;

  // "Kfz Gutachter <Ort>" statt "KFZ Sachverständiger <Ort>": Beide Begriffe
  // meinen dasselbe, gesucht wird aber fast doppelt so oft nach "Gutachter".
  const ort = h1Ort ?? nameShort;
  const hauptkeyword = `Kfz Gutachter ${ort}`;

  // Der Praxisfall steht nur auf Seiten, für die ein echter Fall hinterlegt ist.
  // Damit die Kapitelnummern trotzdem lückenlos durchlaufen, werden die
  // Abschnitte danach um eins verschoben statt fest verdrahtet.
  // Argument ist die Nummer MIT Praxisfall. Fehlt der Fall, rutscht alles um
  // eins hoch. nr(4) wird nur innerhalb des Praxisfall-Blocks aufgerufen.
  const nr = (n: number) => String(praxisfall ? n : n - 1).padStart(2, "0");

  const neighbors = neighborSlugs
    .map((s) => bezirkContent.find((b) => b.slug === s))
    .filter((b): b is BezirkContent => b !== undefined);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://gutachtenprenzl.de" },
      { "@type": "ListItem", position: 2, name: "KFZ Sachverständiger Berlin", item: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin" },
      { "@type": "ListItem", position: 3, name: hauptkeyword, item: `https://gutachtenprenzl.de/${slug}` },
    ],
  };

  // Service-Schema je Bezirk: sagt Google, dass diese Seite genau dieses
  // Einsatzgebiet bedient, statt pauschal ganz Berlin wie die Leistungsseiten.
  // Die Ortsteile kommen mit rein, sie sind die eigentlichen Suchbegriffe.
  const serviceJsonLd = serviceLd({
    name: `Kfz-Gutachten ${name}`,
    description: `Unabhängiger Kfz-Sachverständiger für ${name}: Unfallgutachten, Wertgutachten und Schadensbewertung vor Ort.`,
    path: `/${slug}`,
    serviceType: "Kfz-Schadengutachten",
    areaServed: [
      { "@type": "AdministrativeArea", name },
      ...subdistricts.map((o) => ({ "@type": "AdministrativeArea", name: o })),
    ],
  });

  const zahler = [
    {
      num: "01",
      titel: "Unverschuldeter Unfall: die Gegenseite zahlt",
      text: "Hat jemand anderes den Unfall verursacht, trägt dessen Haftpflichtversicherung die Kosten für das Gutachten. Das ist kein Entgegenkommen, sondern Teil Ihres Schadenersatzanspruchs. Sie dürfen Ihren Gutachter dabei frei wählen, die gegnerische Versicherung darf Ihnen keinen vorschreiben. Wir rechnen direkt mit ihr ab, Sie müssen nichts vorstrecken.",
    },
    {
      num: "02",
      titel: "Teilschuld: anteilig",
      text: "Bei geteilter Schuld werden die Gutachterkosten in der gleichen Quote aufgeteilt wie der Schaden. Bei 50:50 zahlt die Gegenseite also die Hälfte. Auch dann lohnt sich ein eigenes Gutachten, weil es die Grundlage dafür ist, überhaupt über die Quote zu verhandeln.",
    },
    {
      num: "03",
      titel: "Selbstverschuldet oder Kasko",
      text: "Haben Sie den Schaden selbst verursacht, läuft es über Ihre Kaskoversicherung. Die schickt in der Regel einen eigenen Gutachter. Ein unabhängiges Gutachten kann sich trotzdem lohnen, wenn Sie mit der Einschätzung nicht einverstanden sind. Sprechen Sie uns vorher an, wir sagen Ihnen ehrlich, ob es sich in Ihrem Fall rechnet.",
    },
    {
      num: "04",
      titel: "Bagatellschaden: unter etwa 750 Euro",
      text: "Bei sehr kleinen Schäden muss die Versicherung die Gutachterkosten nicht zwingend übernehmen. Hier reicht oft ein Kostenvoranschlag. Wo genau die Grenze liegt, lässt sich am Telefon in zwei Minuten klären, bevor Ihnen Kosten entstehen.",
    },
  ];

  const schritte = [
    {
      t: "Sie rufen an",
      d: "Schildern Sie kurz, was passiert ist. Wir sagen Ihnen sofort, ob sich ein Gutachten lohnt und wer es bezahlt. Das Gespräch kostet nichts und verpflichtet zu nichts.",
    },
    {
      t: `Wir kommen zu Ihnen nach ${nameShort}`,
      d: `Aus unserem Büro an der Prenzlauer Allee sind wir in rund ${distanceMin} Minuten bei Ihnen, egal ob in ${subdistricts.slice(0, 3).join(", ")} oder einem anderen Ortsteil. Zu Hause, in der Werkstatt oder direkt am Unfallort.`,
    },
    {
      t: "Wir nehmen den Schaden auf",
      d: "Fotoserie, Vermessung, bei Bedarf demontieren wir Verkleidungen, um verdeckte Schäden zu finden. Genau die werden bei einer reinen Sichtprüfung gerne übersehen.",
    },
    {
      t: "Sie bekommen das Gutachten",
      d: "In der Regel am nächsten Werktag, digital und auf Wunsch gedruckt. Darin stehen Reparaturkosten, Wiederbeschaffungswert, Wertminderung und Nutzungsausfall.",
    },
    {
      t: "Wir sprechen mit der Versicherung",
      d: "Auf Wunsch übernehmen wir die Kommunikation mit der gegnerischen Versicherung, damit Sie sich darum nicht kümmern müssen.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="min-h-screen bg-[#050507] text-white">
        <NavbarNeu />

        {/* Breadcrumb – pt-24 schafft Platz unter der festen Navigationsleiste */}
        <nav className="px-5 pt-24 pb-2" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto">
            <ol className="flex items-center flex-wrap gap-1 text-[12px] text-white/30" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-white/70 transition-colors" itemProp="item"><span itemProp="name">Startseite</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li><ChevronRight size={10} className="mx-1 text-white/15" /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/kfz-sachverstaendiger-berlin" className="hover:text-white/70 transition-colors" itemProp="item"><span itemProp="name">KFZ Sachverständiger Berlin</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li><ChevronRight size={10} className="mx-1 text-white/15" /></li>
              <li className="text-white/55" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ============ HERO ============ */}
        <section className="relative px-5 pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 hero-fade-bottom opacity-[0.5]">
              <Image
                src="/hero-accident.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                quality={70}
                /* scale-110 kaschiert den transparenten Saum, den der Blur an den Kanten erzeugt */
                className="object-cover object-center blur-[4px] scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-[#050507]/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507]" />
          </div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#E11D2F]/8 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative w-full max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              <span className="text-[10px] tracking-[0.2em] sm:text-[11px] sm:tracking-[0.3em] font-bold text-white/55 uppercase">
                TÜV zertifiziert · Antwort in 30 Minuten
              </span>
            </div>

            <h1
              className="font-display font-black tracking-tight leading-[1.05] text-[clamp(34px,6.4vw,62px)] mb-6 animate-fade-up"
              style={{ animationDelay: "70ms" }}
            >
              {hauptkeyword}
              <span className="block text-[#E11D2F] font-extrabold text-[0.42em] leading-[1.3] mt-4">
                Unabhängiger Unfallgutachter vor Ort
              </span>
            </h1>

            <p
              className="text-white/55 text-[16px] md:text-[17px] leading-relaxed max-w-xl mx-auto mb-8 animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              {intro}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
              style={{ animationDelay: "210ms" }}
            >
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.32)] transition-all hover:-translate-y-0.5"
              >
                <Phone size={17} />
                Jetzt anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={17} className="text-[#25D366]" />
                Kostenlos beraten lassen
              </a>
            </div>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-5 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
              {[
                ["24 h", "bis zum Gutachten"],
                ["0 €", "bei Fremdverschulden"],
                ["TÜV", "zertifiziert"],
                ["5,0 ★", "Google Bewertung"],
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

        {/* ============ 01 · VORTEILE ============ */}
        <section className="px-5 py-20 md:py-24">
          <div className="max-w-5xl mx-auto">
            <Kapitel num="01" label="Ihre Vorteile" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-14" data-reveal>
              Ihr {hauptkeyword} im Überblick
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Check, title: "Bei Fremdverschulden zahlt die Gegenseite", text: "Bei einem unverschuldeten Haftpflichtschaden übernimmt die gegnerische Versicherung die erforderlichen Gutachterkosten in aller Regel. Ausnahmen klären wir vorab am Telefon." },
                { icon: Clock, title: "Gutachten in 24 Stunden", text: `Wir kommen direkt nach ${name}, nach Hause, in die Werkstatt oder zum Unfallort.` },
                { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Unabhängig geprüfte Qualifikation. Von Versicherungen im Regelfall anerkannt." },
                { icon: Star, title: "5,0 Sterne auf Google", text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden. Transparent und unabhängig.` },
              ].map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-colors"
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

        {/* ============ 02 · UNFALLSCHWERPUNKTE ============ */}
        <section className="px-5 py-20 md:py-24 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <Kapitel num="02" label="Vor Ort" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
              Unfallschwerpunkte in {name}
            </h2>
            <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
              Orte mit erhöhtem Unfallrisiko. Wir kennen sie alle.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {hotspots.map((h, i) => (
                <div
                  key={h.location}
                  className="bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-colors"
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center mb-4">
                    <AlertTriangle size={18} className="text-[#E11D2F]" />
                  </div>
                  <h3 className="font-display font-bold text-[15.5px] leading-snug mb-2">{h.location}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 03 · ÜBER DEN BEZIRK ============ */}
        <section className="px-5 py-20 md:py-24 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <Kapitel num="03" label="Der Bezirk" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
              {hauptkeyword}: der Bezirk aus Gutachtersicht
            </h2>

            <div data-reveal>
              {localText.map((para, i) => (
                <p key={i} className="text-white/55 text-[15.5px] leading-relaxed mb-4">{para}</p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/8" data-reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4 flex items-center gap-2">
                <MapPin size={12} className="text-[#E11D2F]" />
                Auch in diesen Ortsteilen vor Ort
              </p>
              <div className="flex flex-wrap gap-2">
                {subdistricts.map((sub) => (
                  <span
                    key={sub}
                    className="text-[13px] font-medium text-white/60 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Vertiefung: nur auf den Bezirken gepflegt, auf denen wir um die Top 3 spielen. */}
            {deepDive && deepDive.length > 0 && (
              <div className="mt-14 pt-10 border-t border-white/8 space-y-12">
                {deepDive.map((block) => (
                  <div key={block.h} data-reveal>
                    <h3 className="font-display font-black tracking-tight text-[clamp(19px,2.6vw,26px)] leading-[1.2] mb-4">
                      {block.h}
                    </h3>
                    {block.p.map((para, i) => (
                      <p key={i} className="text-white/55 text-[15.5px] leading-relaxed mb-4">{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ PRAXISFALL ============
            Erscheint nur, wenn in lib/bezirk-content.ts ein echter Fall
            hinterlegt ist. Ohne Fall bleibt der Abschnitt weg — der Ablauf
            weiter unten erklärt den Vorgang ohnehin. Lieber eine Seite ohne
            Beispiel als mit einem erfundenen. */}
        {praxisfall && (
          <section className="px-5 py-20 md:py-24 border-t border-white/6">
            <div className="max-w-3xl mx-auto">
              <Kapitel num={nr(4)} label="Aus der Praxis" />
              <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
                Ein Fall aus {nameShort}
              </h2>
              <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
                Ein echter, anonymisierter Schadenfall aus unserer Arbeit im Bezirk.
              </p>

              <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden" data-reveal>
                {praxisfall.bild && (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={praxisfall.bild.src}
                      alt={praxisfall.bild.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-7 pb-7 border-b border-white/8">
                    {[
                      ["Zeitraum", praxisfall.monat],
                      ["Ort", praxisfall.ort],
                      ["Fahrzeug", praxisfall.fahrzeug],
                      ["Unfallart", praxisfall.unfallart],
                    ].map(([label, wert]) => (
                      <div key={label}>
                        <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-1">{label}</dt>
                        <dd className="text-white/75 text-[14.5px]">{wert}</dd>
                      </div>
                    ))}
                  </dl>

                  {praxisfall.schadenbild.map((para, i) => (
                    <p key={i} className="text-white/55 text-[15px] leading-relaxed mb-4">{para}</p>
                  ))}

                  <div className="mt-7 pt-7 border-t border-white/8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
                      Ergebnis im Gutachten
                    </p>
                    <dl className="space-y-2.5">
                      {praxisfall.ergebnis.map(({ label, wert }) => (
                        <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2.5">
                          <dt className="text-white/55 text-[14px]">{label}</dt>
                          <dd className="font-display font-bold text-white text-[15px] whitespace-nowrap">{wert}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {praxisfall.fazit && (
                    <p className="text-white/50 text-[14px] leading-relaxed mt-6 italic">{praxisfall.fazit}</p>
                  )}

                  <p className="text-white/25 text-[12px] leading-relaxed mt-6">
                    Anonymisiert. Kennzeichen, Name und Hausnummer sind bewusst nicht angegeben.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============ 04 · ABLAUF ============ */}
        <section className="px-5 py-20 md:py-24 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <Kapitel num={nr(5)} label="Ablauf" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
              So läuft es ab in {nameShort}
            </h2>
            <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
              Von Ihrem Anruf bis zum fertigen Gutachten vergehen in der Regel keine 24 Stunden.
              Sie müssen dafür nichts vorbereiten und nichts vorstrecken.
            </p>

            <div className="relative">
              <span className="hidden sm:block absolute left-[27px] top-8 bottom-8 w-px bg-white/10" aria-hidden="true" />
              <ol className="space-y-4">
                {schritte.map((s, i) => (
                  <li key={s.t} className="relative flex gap-5 sm:gap-6" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0A0A0D] border border-[#E11D2F]/30 items-center justify-center flex-shrink-0 relative z-10">
                      <span className="font-display font-black text-[#E11D2F] text-[16px]">{i + 1}</span>
                    </div>
                    <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7 hover:border-white/20 transition-colors">
                      <h3 className="font-display font-bold text-[18px] mb-2.5 flex items-center gap-3">
                        <span className="sm:hidden font-display font-black text-[#E11D2F] text-[18px]">{i + 1}</span>
                        {s.t}
                      </h3>
                      <p className="text-white/55 text-[14.5px] leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ 05 · WER ZAHLT ============ */}
        <section className="px-5 py-20 md:py-24 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <Kapitel num={nr(6)} label="Kostenfrage" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-14" data-reveal>
              Wer zahlt Ihr Gutachten?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {zahler.map(({ num, titel, text }, i) => (
                <div
                  key={num}
                  className="bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7 hover:border-[#E11D2F]/30 transition-colors"
                  data-reveal
                  style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                >
                  <span className="block font-display font-black text-[#E11D2F]/40 text-[24px] mb-3">{num}</span>
                  <h3 className="font-display font-bold text-[17px] mb-3 leading-snug">{titel}</h3>
                  <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weiterführende Seiten zu Kosten und Ansprüchen */}
        <section className="px-5 py-14 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/35 mb-6 text-center" data-reveal>
              Mehr zu Kosten und Ansprüchen
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" data-reveal>
              {[
                { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?", icon: Euro },
                { href: "/totalschaden-gutachten-berlin", label: "Totalschaden Gutachten", icon: Car },
                { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall Tabelle", icon: Gauge },
                { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin", icon: FileText },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-3 bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 hover:bg-white/[0.05] rounded-xl px-4 py-4 transition-all hover:-translate-y-0.5"
                >
                  <Icon size={16} className="text-[#E11D2F] flex-shrink-0" />
                  <span className="text-[13.5px] font-semibold text-white/75 group-hover:text-white transition-colors leading-snug">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StandortKarte bezirk={nameShort} minuten={distanceMin} variant="dark" />

        {/* ============ 06 · FAQ ============ */}
        <section className="px-5 py-20 md:py-24 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <Kapitel num={nr(7)} label="FAQ" />
            <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
              Häufige Fragen aus {nameShort}
            </h2>
            <FaqListe faqs={faqs} />
          </div>
        </section>

        {/* Nachbarbezirke – interne Verlinkung */}
        {neighbors.length > 0 && (
          <section className="px-5 py-14 border-t border-white/6">
            <div className="max-w-4xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/35 mb-6 text-center" data-reveal>
                Kfz Gutachter in benachbarten Bezirken
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center" data-reveal>
                {neighbors.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white/70 hover:text-white bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 px-4 py-2.5 rounded-lg transition-all"
                  >
                    <MapPin size={12} className="text-white/25 group-hover:text-[#E11D2F] transition-colors" />
                    {n.nameShort}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ ABSCHLUSS ============ */}
        <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto text-center" data-reveal>
            <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4">
              Unfall in {nameShort}? Melden Sie sich.
            </h2>
            <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
              Ein Anruf kostet nichts und verpflichtet zu nichts. Wir sind in rund {distanceMin} Minuten bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5"
              >
                <Phone size={17} />
                Jetzt anrufen
              </a>
              <Link
                href="/#schaden"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
              >
                Schaden online melden
              </Link>
            </div>
          </div>
        </section>

        <FooterNeu />
      </div>
    </>
  );
}
