import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, FileText, Euro, Clock, Scale, Car, AlertTriangle } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

/* Landingpage für "kfz gutachten berlin".
   Bewusste Abgrenzung zu /kfz-sachverstaendiger-berlin: dort geht es um die
   Person und ihre Qualifikation, hier um das Dokument — welche Arten es gibt,
   was Position für Position drinsteht, was es kostet, wie lange es dauert.
   Beide Seiten verlinken sich gegenseitig, sonst wertet Google eine als
   Dublette der anderen. */

const PATH = "/kfz-gutachten-berlin";

export const metadata: Metadata = pageMetadata({
  title: "Kfz-Gutachten Berlin – Arten, Inhalt und Kosten",
  description:
    "Welches Kfz-Gutachten Sie brauchen, was Position für Position darin steht und was es kostet. Bei unverschuldetem Unfall zahlen Sie 0 €. TÜV-zertifiziert, in 24 Stunden.",
  path: PATH,
  keywords: [
    "kfz gutachten berlin",
    "kfz gutachten",
    "auto gutachten berlin",
    "unfallgutachten berlin",
    "schadensgutachten berlin",
    "gutachten nach unfall",
  ],
});

const arten = [
  {
    icon: AlertTriangle,
    name: "Schadengutachten",
    href: "/schadengutachten",
    wann: "Nach einem Unfall mit sichtbarem Schaden über etwa 1.000 €",
    inhalt: "Vollständige Schadenaufnahme mit Reparaturweg, Wertminderung, Nutzungsausfall und Restwert",
  },
  {
    icon: FileText,
    name: "Kurzgutachten",
    href: "/kurzgutachten-berlin",
    wann: "Kleinere Schäden, Parkrempler, überschaubarer Umfang",
    inhalt: "Schadenbild, Reparaturweg und Kosten — ohne aufwendige Zusatzermittlungen",
  },
  {
    icon: Car,
    name: "Wertgutachten",
    href: "/wertgutachten",
    wann: "Verkauf, Kauf, Erbschaft, Scheidung oder Versicherungswert",
    inhalt: "Marktwert des Fahrzeugs im aktuellen Zustand, unabhängig von einem Schadenfall",
  },
  {
    icon: Scale,
    name: "Beweissicherungsgutachten",
    href: "/beweissicherungsgutachten-berlin",
    wann: "Unklare oder bestrittene Schuldfrage",
    inhalt: "Dokumentation von Schadenbild, Anstoßrichtung und Spurenlage für die spätere Rekonstruktion",
  },
  {
    icon: Euro,
    name: "Restwertermittlung",
    href: "/restwertermittlung",
    wann: "Totalschaden oder wenn die Versicherung ein Restwertangebot schickt",
    inhalt: "Wiederbeschaffungs- und Restwert aus dem regionalen Markt statt aus einer Börse",
  },
  {
    icon: Clock,
    name: "Reparaturbestätigung",
    href: "/schadengutachten",
    wann: "Nach fiktiver Abrechnung, wenn Sie selbst reparieren lassen",
    inhalt: "Bestätigung der fachgerechten Instandsetzung — Voraussetzung für Nutzungsausfall",
  },
];

const positionen = [
  {
    nr: "01",
    titel: "Schadenumfang und Reparaturweg",
    text: "Jedes beschädigte Bauteil einzeln erfasst, mit der Entscheidung instand setzen oder ersetzen. Dazu die kalkulierten Arbeitswerte nach den Sätzen einer markengebundenen Fachwerkstatt — nicht nach dem billigsten Anbieter der Stadt.",
  },
  {
    nr: "02",
    titel: "Wertminderung",
    text: "Ein repariertes Unfallfahrzeug bringt beim Verkauf weniger als ein unfallfreies. Dieser merkantile Minderwert ist ersatzfähig und wird häufig vergessen. Bei neueren Fahrzeugen liegt er schnell im vierstelligen Bereich.",
  },
  {
    nr: "03",
    titel: "Wiederbeschaffungswert",
    text: "Was ein gleichwertiges Fahrzeug heute am Markt kostet — gleiche Ausstattung, gleiche Laufleistung, gleicher Zustand. Diese Zahl entscheidet bei einem Totalschaden über die gesamte Auszahlung.",
  },
  {
    nr: "04",
    titel: "Restwert",
    text: "Was Ihr Fahrzeug im beschädigten Zustand noch wert ist, ermittelt am regionalen Markt. Versicherungen schicken oft höhere Angebote aus überregionalen Restwertbörsen nach — annehmen müssen Sie die nicht.",
  },
  {
    nr: "05",
    titel: "Nutzungsausfall",
    text: "Die Entschädigung für die Tage ohne Auto, wenn Sie keinen Mietwagen nehmen. Der Tagessatz richtet sich nach der Fahrzeuggruppe A bis L, die Dauer nach der im Gutachten ausgewiesenen Reparaturzeit.",
  },
  {
    nr: "06",
    titel: "Reparatur- und Wiederbeschaffungsdauer",
    text: "Die Zeitangabe, aus der sich Nutzungsausfall oder Mietwagenanspruch rechnen. Wird sie zu knapp angesetzt, verlieren Sie für jeden fehlenden Tag Geld.",
  },
  {
    nr: "07",
    titel: "Lichtbilder und Fahrzeugdaten",
    text: "Vollständige Fotodokumentation, Kilometerstand, Vorschäden, Ausstattung und Zustand. Das ist der Teil, den ein Kostenvoranschlag nicht liefert und der bei Streit den Ausschlag gibt.",
  },
];

const faqs = [
  {
    q: "Welches Gutachten brauche ich nach einem Unfall?",
    a: "In den meisten Fällen ein Schadengutachten. Es erfasst nicht nur die Reparaturkosten, sondern auch Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert. Nur bei sehr kleinen Schäden reicht ein Kurzgutachten. Ist die Schuldfrage strittig, kommt zusätzlich ein Beweissicherungsgutachten in Betracht.",
  },
  {
    q: "Was kostet ein Kfz-Gutachten in Berlin?",
    a: "Bei einem unverschuldeten Unfall zahlen Sie nichts — die gegnerische Haftpflichtversicherung trägt das Honorar, und wir rechnen direkt mit ihr ab. Tragen Sie die Schuld selbst, richtet sich das Honorar nach der Schadenhöhe: etwa 250–350 € bei 1.000 €, 560–700 € bei 5.000 € und 1.020–1.250 € bei 15.000 € Schaden.",
  },
  {
    q: "Wie lange dauert ein Kfz-Gutachten?",
    a: "Die Besichtigung dauert je nach Schadenumfang 30 bis 60 Minuten. Das fertige Gutachten liegt in der Regel innerhalb von 24 Stunden vor und geht als PDF an Sie, an die Versicherung und auf Wunsch an Ihren Anwalt.",
  },
  {
    q: "Was ist der Unterschied zwischen Gutachten und Kostenvoranschlag?",
    a: "Ein Kostenvoranschlag kommt aus der Werkstatt und nennt nur die voraussichtlichen Reparaturkosten. Ein Gutachten erfasst zusätzlich Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert. Diese Positionen machen oft den größeren Teil Ihres Anspruchs aus — im Kostenvoranschlag fehlen sie ersatzlos.",
  },
  {
    q: "Erkennt die Versicherung Ihr Gutachten an?",
    a: "Ja. Unsere Gutachten sind TÜV Rheinland zertifiziert erstellt (Zertifikat-ID 0217466029) und werden von deutschen Versicherungen im Regelfall anerkannt. Kürzt eine Versicherung trotzdem einzelne Positionen, schreiben wir eine fachliche Stellungnahme dazu.",
  },
  {
    q: "Kann ich das Gutachten auch bei einem Kaskoschaden nutzen?",
    a: "Ja, allerdings gelten dann die Bedingungen Ihres Versicherungsvertrags. Manche Versicherer übernehmen die Gutachterkosten vollständig, andere nur anteilig. Klären Sie das vorab — wir sagen Ihnen, worauf Sie im Vertrag achten müssen.",
  },
];

export default function KfzGutachtenBerlin() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Kfz-Gutachten Berlin", path: PATH }]),
          serviceLd({
            name: "Kfz-Gutachten Berlin",
            description:
              "Unabhängige Kfz-Gutachten in Berlin: Schadengutachten, Kurzgutachten, Wertgutachten, Beweissicherung und Restwertermittlung.",
            path: PATH,
            serviceType: "Kfz-Gutachten",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Kfz-Gutachten Berlin", href: PATH }]} />

      <PageHero
        kicker="Kfz-Gutachten Berlin"
        title="Das Dokument, das über"
        titleAccent="Ihre Auszahlung entscheidet."
        lead="Welches Gutachten Sie brauchen, was darin steht und was es kostet. Bei unverschuldetem Unfall zahlen Sie nichts — das Honorar trägt die gegnerische Versicherung."
        image="/foto2.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ DIREKTANTWORT ============ */}
      <section className="px-5 py-14 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] p-6 md:p-7" data-reveal>
            <p className="text-white/80 text-[16px] leading-relaxed">
              <strong className="text-white">Ein Kfz-Gutachten</strong> ist die unabhängige, schriftliche
              Feststellung eines Fahrzeugschadens durch einen Sachverständigen. Es beziffert nicht nur die
              Reparaturkosten, sondern auch Wertminderung, Nutzungsausfall, Wiederbeschaffungs- und Restwert.
              Bei einem unverschuldeten Unfall in Berlin kostet es Sie <strong className="text-white">0 €</strong>,
              weil die Haftpflichtversicherung des Verursachers dafür aufkommt. Das fertige Gutachten liegt in
              der Regel <strong className="text-white">innerhalb von 24 Stunden</strong> vor.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 · WELCHES GUTACHTEN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Die Arten</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            Welches Gutachten brauchen Sie?
          </h2>
          <p className="text-white/45 text-[15.5px] leading-relaxed text-center max-w-xl mx-auto mb-12" data-reveal>
            Nicht jeder Fall verlangt dasselbe Dokument. Wenn Sie unsicher sind, rufen Sie an — wir sagen Ihnen
            in zwei Minuten, was zu Ihrem Fall passt.
          </p>

          <div className="grid md:grid-cols-2 gap-4" data-reveal>
            {arten.map(({ icon: Icon, name, href, wann, inhalt }) => (
              <Link
                key={name}
                href={href}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 rounded-xl p-6 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#E11D2F]" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-[17px] mb-2 group-hover:text-[#E11D2F] transition-colors">
                      {name}
                    </p>
                    <p className="text-white/70 text-[13.5px] leading-relaxed mb-2">
                      <span className="text-white/40">Wann:</span> {wann}
                    </p>
                    <p className="text-white/50 text-[13.5px] leading-relaxed">{inhalt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · WAS DRIN STEHT ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Der Inhalt</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            Was Position für Position drinsteht.
          </h2>
          <p className="text-white/45 text-[15.5px] leading-relaxed text-center max-w-xl mx-auto mb-12" data-reveal>
            Die meisten Geschädigten schauen nur auf die Reparaturkosten. Die Positionen darunter sind oft die
            größere Summe.
          </p>

          <div className="space-y-3">
            {positionen.map((p) => (
              <div
                key={p.nr}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 flex gap-5"
                data-reveal
              >
                <span className="font-display font-black text-[#E11D2F]/60 text-[20px] flex-shrink-0 leading-none pt-0.5">
                  {p.nr}
                </span>
                <div>
                  <p className="font-display font-bold text-[16.5px] mb-1.5">{p.titel}</p>
                  <p className="text-white/55 text-[14.5px] leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#E11D2F]/25 bg-[#E11D2F]/[0.06] p-6" data-reveal>
            <p className="text-white/75 text-[15px] leading-relaxed">
              <strong className="text-white">Der häufigste Fehler:</strong> sich auf einen Kostenvoranschlag der
              Werkstatt zu verlassen. Er enthält ausschließlich Position 01. Die Punkte 02 bis 06 fallen damit
              ersatzlos weg — und das sind genau die, die Ihnen zusätzlich zustehen.{" "}
              <Link href="/kosten-kfz-gutachten-berlin" className="text-[#E11D2F] hover:underline font-semibold">
                Mehr zu Kosten und Honorar
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ============ 03 · ABLAUF ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ablauf</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12"
            data-reveal
          >
            Vom Anruf zum fertigen Gutachten.
          </h2>

          <div className="space-y-3" data-reveal>
            {[
              "Sie rufen an oder schreiben per WhatsApp. Wir klären in wenigen Minuten, welches Gutachten Ihr Fall braucht.",
              "Wir kommen zu Ihnen — nach Hause, zur Arbeit, in die Werkstatt oder an den Unfallort. In ganz Berlin, auch abends und am Wochenende.",
              "Vollständige Schadenaufnahme mit Fotodokumentation, Messung und Erfassung aller relevanten Fahrzeugdaten.",
              "Das Gutachten wird erstellt und liegt in der Regel innerhalb von 24 Stunden vor.",
              "Wir versenden es an Sie, an die gegnerische Versicherung und auf Wunsch an Ihren Anwalt — und rechnen direkt mit der Versicherung ab.",
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-5">
                <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#E11D2F] text-white font-bold text-[13px] flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-white/70 text-[14.5px] leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · WARUM UNABHÄNGIG ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ihr Recht</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-10"
            data-reveal
          >
            Sie wählen den Gutachter. Nicht die Versicherung.
          </h2>

          <div className="space-y-3" data-reveal>
            {[
              "Bei einem unverschuldeten Unfall dürfen Sie den Sachverständigen frei wählen. Die gegnerische Versicherung darf Ihnen keinen vorschreiben.",
              "Ein von der Versicherung beauftragter Gutachter arbeitet im Auftrag der Gegenseite. Das ist kein Vorwurf, sondern schlicht die Auftragslage.",
              "Ein Prüfbericht der Versicherung ist kein Gutachten. Er entsteht meist ohne Besichtigung am Schreibtisch, auf Basis Ihrer Fotos.",
              "Wir haben keine Rahmenverträge mit Versicherern, keine Werkstattbindung und keine Provisionen. Unser Auftraggeber sind ausschließlich Sie.",
            ].map((t, i) => (
              <div key={i} className="flex gap-3.5 bg-white/[0.03] border border-white/8 rounded-xl p-5">
                <Check size={17} className="text-[#22c55e] stroke-[3] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-[14.5px] leading-relaxed">{t}</p>
              </div>
            ))}
          </div>

          <p className="text-white/45 text-[14.5px] leading-relaxed mt-7 text-center" data-reveal>
            Wer hinter dem Gutachten steht, welche Zertifizierung dahintersteckt und wie wir arbeiten, lesen Sie
            auf der Seite{" "}
            <Link href="/kfz-sachverstaendiger-berlin" className="text-[#E11D2F] hover:underline font-semibold">
              Kfz-Sachverständiger Berlin
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============ 05 · FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">05</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12"
            data-reveal
          >
            Häufige Fragen zum Kfz-Gutachten.
          </h2>
          <FaqListe faqs={faqs} />
          <p className="text-white/40 text-[14px] text-center mt-8" data-reveal>
            Alle Fragen und Antworten finden Sie auf unserer{" "}
            <Link href="/faq" className="text-[#E11D2F] hover:underline font-semibold">
              FAQ-Seite
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============ WEITERE LEISTUNGEN ============ */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Ebenfalls für Sie
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" data-reveal>
            {[
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten", sub: "Nach einem Unfall" },
              { href: "/motorradgutachten-berlin", label: "Motorradgutachten", sub: "Zweirad und Roller" },
              { href: "/oldtimer-gutachten-berlin", label: "Oldtimer-Wertgutachten", sub: "Marktwert und Zustand" },
              { href: "/kosten-kfz-gutachten-berlin", label: "Kosten & Honorar", sub: "Honorartabelle 2026" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 rounded-xl p-5 transition-all hover:-translate-y-0.5"
              >
                <p className="font-display font-bold text-[15.5px] mb-1 group-hover:text-[#E11D2F] transition-colors">
                  {l.label}
                </p>
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
            Ihr Gutachten in 24 Stunden.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Bei unverschuldetem Unfall kostenlos. Ein Anruf reicht, den Rest übernehmen wir.
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
              Kostenlose Ersteinschätzung
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
