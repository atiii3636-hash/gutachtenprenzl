import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  // absolute: ohne das Suffix aus dem Layout, sonst 76 Zeichen und in der Suche abgeschnitten.
  title: { absolute: "Was tun nach einem Unfall in Berlin? Schritt für Schritt" },
  description:
    "Was nach einem Unfall in Berlin zu tun ist: Polizei, Fotos, eigener Gutachter. Ratgeber vom TÜV-zertifizierten Sachverständigenbüro Gutachten Prenzl Berlin.",
  alternates: { canonical: "https://gutachtenprenzl.de/blog/was-tun-nach-unfall-berlin" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Was tun nach einem Unfall in Berlin?",
  description:
    "Schritt für Schritt: Was Sie in den ersten Minuten nach einem Unfall in Berlin tun müssen, um Ihren Schadensersatz vollständig zu sichern.",
  url: "https://gutachtenprenzl.de/blog/was-tun-nach-unfall-berlin",
  datePublished: "2026-04-01",
  dateModified: "2026-06-01",
  author: {
    "@type": "Organization",
    name: "Gutachten Prenzl",
    url: "https://gutachtenprenzl.de",
  },
  publisher: {
    "@type": "LocalBusiness",
    name: "Gutachten Prenzl",
    url: "https://gutachtenprenzl.de",
    logo: {
      "@type": "ImageObject",
      url: "https://gutachtenprenzl.de/logos/logo-512.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://gutachtenprenzl.de/blog/was-tun-nach-unfall-berlin",
  },
};

const steps = [
  {
    nr: "1",
    title: "Absichern und Erste Hilfe leisten",
    text: "Schalten Sie sofort die Warnblinkanlage ein, legen Sie Warnweste an und stellen Sie das Warndreieck auf. Bei Verletzten sofort den Notruf wählen: 110 (Polizei) oder 112 (Rettungsdienst). Helfen Sie Verletzten, sofern Sie selbst in Sicherheit sind.",
    warning: false,
  },
  {
    nr: "2",
    title: "Fotos machen: so viele wie möglich",
    text: "Fotografieren Sie das gesamte Unfallgeschehen aus mehreren Blickwinkeln: beide Fahrzeuge, die Schäden, die Endposition der Fahrzeuge, Straßenmarkierungen, Ampeln, Bremsspuren und das Kennzeichen des Unfallgegners. Fotos sind Ihr wichtigstes Beweismittel.",
    warning: false,
  },
  {
    nr: "3",
    title: "Daten austauschen und Polizei rufen",
    text: "Tauschen Sie Name, Adresse, Versicherung und Kennzeichen mit dem Unfallgegner aus. Bei Fremdverschulden empfehlen wir, immer die Polizei zu rufen, ein Polizeiprotokoll stärkt Ihre Position gegenüber der Versicherung erheblich.",
    warning: false,
  },
  {
    nr: "4",
    title: "Keinen Verzicht unterschreiben",
    text: "Unterschreiben Sie am Unfallort keine Erklärungen, in denen Sie auf Ansprüche verzichten oder einen Vergleich akzeptieren. Auch wenn der Unfallgegner freundlich wirkt und Ihnen Geld anbietet, lehnen Sie ab. Innere Schäden am Fahrzeug sind oft erst später sichtbar.",
    warning: true,
  },
  {
    nr: "5",
    title: "Eigenen Gutachter rufen, nicht den der Versicherung",
    text: "Bei Fremdverschulden haben Sie das gesetzliche Recht auf einen eigenen, unabhängigen KFZ Sachverständigen. Die gegnerische Versicherung zahlt für das Gutachten. Rufen Sie nicht den Gutachter der Versicherung an, dieser arbeitet für die Gegenseite und hat kein Interesse daran, Ihren Schaden vollständig zu dokumentieren.",
    warning: true,
  },
  {
    nr: "6",
    title: "Gutachten erstellen lassen und abwarten",
    text: "Ihr unabhängiger Gutachter kommt zu Ihrem Fahrzeug, dokumentiert alle Schäden vollständig und übermittelt das Gutachten direkt an die Versicherung. Sie müssen sich um nichts kümmern, wir übernehmen auch die Kommunikation mit der Versicherung.",
    warning: false,
  },
];

export default function WasTunNachUnfall() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <section className="px-5 pt-16 pb-12">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-[13px] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Zurück zum Ratgeber
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-full">
              Nach dem Unfall
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              4 Min. Lesezeit
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Was tun nach einem<br />
            <span className="text-[#E11D2F]">Unfall in Berlin?</span>
          </h1>

          <p className="text-white/55 text-[16px] leading-relaxed">
            Ein Unfall passiert in Sekunden, aber was Sie in den ersten Minuten danach tun,
            entscheidet darüber, ob Sie Ihren Schaden vollständig ersetzt bekommen.
            Diese Schritte sollten Sie kennen.
          </p>

          <div className="mt-6 flex items-center gap-2 text-white/30 text-[13px]">
            <span>Von</span>
            <Link href="/ueber-uns" className="text-white/60 hover:text-white transition-colors font-semibold">
              Gutachten Prenzl
            </Link>
            <span>· TÜV-zertifiziertes Sachverständigenbüro Berlin</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#050507] px-5 py-14">
        <div className="max-w-2xl mx-auto">

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.nr}
                className={`flex gap-5 p-5 rounded-2xl border ${
                  step.warning
                    ? "border-[#f59e0b]/30 bg-[#f59e0b]/10"
                    : "border-white/8 bg-white/[0.03]"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-black text-[18px] ${
                  step.warning
                    ? "bg-[#f59e0b]/15 text-[#f59e0b]"
                    : "bg-[#E11D2F]/10 text-[#E11D2F]"
                }`}>
                  {step.warning ? <AlertTriangle size={18} /> : step.nr}
                </div>
                <div>
                  <h2 className="font-bold text-white text-[15px] mb-2">{step.title}</h2>
                  <p className="text-white/55 text-[14px] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertiefung */}
          <div className="mt-12 space-y-8 text-white/55 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Was in den Stunden danach passiert
              </h2>
              <p className="mb-4">
                Die meisten Leute denken, mit dem Datenaustausch am Unfallort sei das
                Gröbste erledigt. Tatsächlich fängt es da erst an. Oft meldet sich noch am
                selben Tag die Versicherung des Verursachers bei Ihnen. Das klingt nach
                Service, hat aber einen Grund: Je früher die Gegenseite den Fall in die
                Hand bekommt, desto günstiger wird er für sie.
              </p>
              <p className="mb-4">
                Typisch ist ein Anruf mit dem Angebot, einen Gutachter zu schicken. Der
                kommt dann schnell, ist freundlich und kostet Sie nichts. Was selten dazu
                gesagt wird: Dieser Gutachter wird von der Versicherung bezahlt und
                arbeitet in deren Auftrag. Wertminderung und Nutzungsausfall tauchen in
                solchen Gutachten regelmäßig gar nicht erst auf.
              </p>
              <p>
                Sie dürfen dieses Angebot ablehnen. Bei einem unverschuldeten Unfall haben
                Sie das Recht auf einen eigenen Sachverständigen, und die gegnerische
                Haftpflicht zahlt ihn genauso. Ein Satz am Telefon reicht: dass Sie bereits
                einen eigenen Gutachter beauftragt haben.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Fünf Sätze, die Sie besser nicht sagen
              </h2>
              <p className="mb-4">
                Am Unfallort sind die meisten aufgewühlt und wollen die Situation
                entschärfen. Verständlich, aber ein paar Formulierungen können Sie später
                teuer zu stehen kommen:
              </p>
              <ul className="space-y-3">
                {[
                  ['"Tut mir leid, das war mein Fehler."', "Ein Schuldeingeständnis am Unfallort ist zwar nicht bindend, wird von Versicherungen aber gerne zitiert. Schildern Sie, was passiert ist, ohne die Schuldfrage zu bewerten."],
                  ['"Ist ja nicht viel passiert."', "Ob das stimmt, sehen Sie erst, wenn die Verkleidung ab ist. Hinter einer Delle im Stoßfänger stecken oft Querträger, Sensoren oder Halterungen."],
                  ['"Wir regeln das ohne Versicherung."', "Klingt unkompliziert, geht aber oft schief. Wenn der Verursacher später nicht zahlt, stehen Sie ohne Beweise da."],
                  ['"Nein, Polizei brauchen wir nicht."', "Ein Polizeiprotokoll ist eines der stärksten Beweismittel, das Sie bekommen können. Es kostet nichts außer Wartezeit."],
                  ['"Schicken Sie ruhig Ihren Gutachter."', "Damit geben Sie die Dokumentation Ihres Schadens an die Gegenseite ab."],
                ].map(([satz, erklaerung]) => (
                  <li key={satz} className="flex gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E11D2F] mt-2.5" />
                    <span>
                      <strong className="text-white">{satz}</strong>
                      <br />
                      {erklaerung}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Was in Berlin anders läuft
              </h2>
              <p className="mb-4">
                Bei Blechschäden ohne Verletzte kommt die Berliner Polizei nicht mehr
                zuverlässig zum Unfallort. Sie werden dann an eine Polizeiwache verwiesen,
                wo Sie den Unfall selbst aufnehmen lassen. Das ist ärgerlich, ändert aber
                nichts daran, dass Sie die Aufnahme machen lassen sollten.
              </p>
              <p className="mb-4">
                Zweite Berliner Besonderheit: Abschleppen. Steht Ihr Fahrzeug nach dem
                Unfall im Halteverbot oder auf einer Busspur, wird es schnell abgeschleppt,
                bevor jemand den Schaden dokumentiert hat. Machen Sie deshalb Fotos, solange
                das Auto noch dort steht, wo es zum Stehen gekommen ist.
              </p>
              <p>
                Und die Wartezeit: Wenn Sie auf die Polizei warten, nutzen Sie sie. Notieren
                Sie Uhrzeit, Wetter, Straßenzustand und Namen möglicher Zeugen. Zeugen
                verschwinden schnell, und ohne Telefonnummer sind sie später nicht mehr
                auffindbar.
              </p>
            </div>
          </div>

          {/* Key takeaway */}
          <div className="mt-10 p-6 rounded-2xl bg-[#050507] border border-white/10">
            <h3 className="font-display font-black text-white uppercase text-lg mb-3">
              Das Wichtigste in Kürze
            </h3>
            <ul className="space-y-2">
              {[
                "Sofort absichern und Fotos machen",
                "Polizei rufen und Daten austauschen",
                "Nichts unterschreiben am Unfallort",
                "Eigenen, unabhängigen Gutachter rufen, nicht den der Versicherung",
                "Bei Fremdverschulden zahlen Sie für den Gutachter 0 €",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-white/70 text-[14px]">
                  <CheckCircle size={15} className="text-[#22c55e] mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links */}
          <div className="mt-8 pt-8 border-t border-white/8">
            <h3 className="font-semibold text-white text-[14px] mb-4">Weiterführende Artikel</h3>
            <div className="space-y-2">
              <Link href="/blog/recht-auf-eigenen-gutachter" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Ihr Recht auf einen unabhängigen Gutachter
              </Link>
              <Link href="/blog/parkschaden-was-tun" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Parkschaden: was jetzt?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">
            Gerade einen Unfall gehabt?
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Rufen Sie mich jetzt an, ich erkläre Ihnen in wenigen Minuten die nächsten Schritte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <Phone size={18} />
              0155 60003661
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              Schaden online melden
            </Link>
          </div>
        </div>
      </section>

      <FooterNeu />
    </div>
  );
}
