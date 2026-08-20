import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Parkschaden: was jetzt tun? Ratgeber Berlin",
  description:
    "Jemand hat Ihr geparktes Auto beschädigt? Was Sie jetzt tun sollten, auch bei Fahrerflucht. Ratgeber vom Sachverständigenbüro Gutachten Prenzl Berlin.",
  alternates: { canonical: "https://gutachtenprenzl.de/blog/parkschaden-was-tun" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Parkschaden: was jetzt?",
  description:
    "Was tun, wenn jemand Ihr geparktes Auto beschädigt hat? Schritte, Rechte und Tipps, auch bei Fahrerflucht. Von Gutachten Prenzl, Sachverständigenbüro Berlin.",
  url: "https://gutachtenprenzl.de/blog/parkschaden-was-tun",
  datePublished: "2026-05-01",
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
    "@id": "https://gutachtenprenzl.de/blog/parkschaden-was-tun",
  },
};

const steps = [
  {
    nr: "1",
    title: "Fotos machen: sofort und ausführlich",
    text: "Fotografieren Sie den Schaden aus mehreren Winkeln, immer mit dem Kennzeichen Ihres Fahrzeugs im Bild. Fotografieren Sie auch die Umgebung, Parkfläche und falls vorhanden Reifenspuren oder Splitter des anderen Fahrzeugs. Diese Beweise sind später unverzichtbar.",
  },
  {
    nr: "2",
    title: "Zeugen befragen und Notizen machen",
    text: "Fragen Sie umstehende Personen, ob jemand etwas gesehen hat. Notieren Sie Namen und Telefonnummern. Schauen Sie nach Überwachungskameras in der Nähe, Supermärkte, Tankstellen und Parkhäuser haben oft Kameras mit gutem Winkel.",
  },
  {
    nr: "3",
    title: "Polizei rufen: auch bei Fahrerflucht",
    text: "Rufen Sie die Polizei, selbst wenn der Verursacher nicht mehr da ist. Fahrerflucht ist eine Straftat. Die Polizei nimmt ein Protokoll auf, das Sie für Ihre Versicherung benötigen. Verlassen Sie den Unfallort nicht, bevor die Polizei da war.",
  },
  {
    nr: "4",
    title: "Gutachter beauftragen statt direkt zur Werkstatt",
    text: "Fahren Sie nicht direkt zur Werkstatt. Ein unabhängiger Gutachter dokumentiert den Schaden rechtssicher, berechnet alle Positionen inklusive Minderwert und stellt sicher, dass Sie Ihren vollen Anspruch geltend machen können. Der Gutachter kommt direkt zu Ihrem Fahrzeug.",
  },
  {
    nr: "5",
    title: "Versicherung informieren, aber vorsichtig",
    text: "Melden Sie den Schaden Ihrer Versicherung, aber machen Sie noch keine detaillierten Angaben zum Hergang, bis das Gutachten vorliegt. Lassen Sie sich nicht unter Zeitdruck setzen. Bei identifiziertem Verursacher übernimmt dessen Haftpflicht die Kosten.",
  },
];

export default function ParkschadenWasTun() {
  return (
    <div className="min-h-screen bg-[#080D14]">
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
              Parkschaden
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              3 Min. Lesezeit
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Parkschaden:<br />
            <span className="text-[#E11D2F]">Was jetzt?</span>
          </h1>

          <p className="text-white/55 text-[16px] leading-relaxed">
            Sie kommen zu Ihrem Auto zurück und entdecken eine Delle, einen Kratzer oder
            einen Lackschaden, und der Verursacher ist weg. Das ist ärgerlich, aber Sie
            haben mehr Möglichkeiten, als die meisten denken.
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
      <section className="bg-white px-5 py-14">
        <div className="max-w-2xl mx-auto">

          {/* Intro box */}
          <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50 mb-8 flex gap-3">
            <AlertTriangle size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <p className="text-orange-800 text-[14px] leading-relaxed">
              <strong>Wichtig:</strong> Verlassen Sie den Unfallort nicht, ohne Fotos gemacht und
              die Polizei informiert zu haben. Selbst bei kleinen Schäden kann ein fehlendes
              Protokoll Ihren Anspruch gefährden.
            </p>
          </div>

          <div className="space-y-5 mb-10">
            {steps.map((step) => (
              <div key={step.nr} className="flex gap-5 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-9 h-9 rounded-xl bg-[#E11D2F]/10 flex items-center justify-center flex-shrink-0 font-display font-black text-[#E11D2F] text-[16px]">
                  {step.nr}
                </div>
                <div>
                  <h2 className="font-bold text-[#080D14] text-[15px] mb-2">{step.title}</h2>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fahrerflucht section */}
          <div className="p-6 rounded-2xl bg-[#080D14] text-white mb-8">
            <h2 className="font-display font-black text-xl uppercase mb-4 text-[#E11D2F]">
              Was, wenn der Verursacher geflohen ist?
            </h2>
            <div className="space-y-3 text-white/70 text-[14px] leading-relaxed">
              <p>
                Fahrerflucht ist eine Straftat, und häufiger als man denkt. Wenn der Verursacher
                nicht identifiziert wird, übernimmt in der Regel Ihre eigene Kaskoversicherung
                den Schaden (sofern vorhanden). Ohne Vollkasko bleibt der Schaden an Ihnen hängen.
              </p>
              <p>
                Trotzdem lohnt sich ein Gutachten: Es dokumentiert den Schaden rechtssicher,
                damit Sie nicht bei einem späteren Schaden in Verdacht geraten, diesen selbst
                verursacht zu haben.
              </p>
            </div>
          </div>

          {/* Was bekomme ich */}
          <div className="mb-10">
            <h2 className="font-display font-black text-[#080D14] text-xl uppercase mb-4">
              Was steht Ihnen zu?
            </h2>
            <div className="space-y-2">
              {[
                ["Reparaturkosten", "Vollständige Instandsetzung des Schadens"],
                ["Merkantiler Minderwert", "Wertverlust, der nach der Reparatur verbleibt, oft unterschätzt"],
                ["Gutachterkosten", "Bei identifiziertem Verursacher vollständig erstattungsfähig"],
                ["Mietwagenkosten", "Sofern Sie während der Reparatur ein Ersatzfahrzeug benötigen"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <CheckCircle size={15} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#080D14] text-[14px]">{title}</p>
                    <p className="text-gray-500 text-[13px] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertiefung */}
          <div className="mb-10 space-y-8 text-gray-600 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-black text-2xl text-[#080D14] uppercase mb-4">
                Wenn der Verursacher weg ist
              </h2>
              <p className="mb-4">
                Der häufigste Fall in Berlin: Sie kommen zurück zum Auto, die Seite ist
                verkratzt, kein Zettel, niemand da. Rechtlich ist das Fahrerflucht, auch
                wenn es nur ein Kratzer ist. Für Sie heißt das erst einmal: Anzeige bei der
                Polizei erstatten. Ohne diese Anzeige wird Ihre Kaskoversicherung den
                Schaden in der Regel nicht übernehmen.
              </p>
              <p className="mb-4">
                Bevor Sie wegfahren, schauen Sie sich um. In Berlin hängen an vielen
                Hausfassaden, Tankstellen und Supermärkten Kameras, die den Parkplatz
                erfassen. Aufnahmen werden oft nur wenige Tage gespeichert, es lohnt sich
                also, noch am selben Tag zu fragen. Notieren Sie außerdem, welche Autos
                daneben standen. Deren Halter haben den Vorgang womöglich gesehen.
              </p>
              <p>
                Fahren Sie das Auto nicht sofort in die Waschanlage. Lackspuren des
                anderen Fahrzeugs sind ein Beweismittel, aus dem sich später Farbe und
                manchmal sogar das Modell ableiten lässt.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-[#080D14] uppercase mb-4">
                Kasko oder selbst zahlen?
              </h2>
              <p className="mb-4">
                Bei unbekanntem Verursacher greift die Teilkasko meist nicht, weil sie
                Vandalismus und Parkremplern in der Regel ausschließt. Zuständig ist dann
                die Vollkasko, und die kostet Sie zwei Dinge: die Selbstbeteiligung und
                eine Rückstufung im Schadenfreiheitsrabatt.
              </p>
              <p className="mb-4">
                Die Rechnung ist deshalb nicht immer eindeutig. Bei einem Schaden von 900
                Euro, 500 Euro Selbstbeteiligung und einer Rückstufung, die Sie über Jahre
                mehrere Hundert Euro kostet, kann es günstiger sein, selbst zu zahlen. Bei
                2.500 Euro sieht das anders aus.
              </p>
              <p>
                Genau dafür ist ein Gutachten nützlich, bevor Sie die Versicherung
                einschalten. Sie wissen dann, worüber Sie überhaupt reden. Rufen Sie uns
                vorher an, wir sagen Ihnen ehrlich, ob sich das in Ihrem Fall rechnet.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-[#080D14] uppercase mb-4">
                Wenn der Verursacher bekannt ist
              </h2>
              <p className="mb-4">
                Steckt ein Zettel hinter dem Scheibenwischer oder hat jemand gewartet, ist
                die Lage deutlich besser. Dann zahlt dessen Haftpflichtversicherung alles,
                inklusive Gutachten, Wertminderung und Nutzungsausfall für die Tage in der
                Werkstatt.
              </p>
              <p>
                Lassen Sie sich in diesem Fall nicht auf eine Barzahlung ein, auch wenn sie
                bequem klingt. Was ein Parkschaden wirklich kostet, sehen Sie erst, wenn
                die Verkleidung ab ist. Wir hatten Fälle, in denen hinter einer
                unscheinbaren Delle im Stoßfänger ein verzogener Querträger steckte. Wer
                vorher 300 Euro in bar genommen und quittiert hat, bleibt auf dem Rest
                sitzen.
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-[#080D14] text-[14px] mb-4">Weiterführende Artikel</h3>
            <div className="space-y-2">
              <Link href="/blog/was-tun-nach-unfall-berlin" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Was tun nach einem Unfall in Berlin?
              </Link>
              <Link href="/blog/recht-auf-eigenen-gutachter" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Ihr Recht auf einen unabhängigen Gutachter
              </Link>
              <Link href="/parkschaden-gutachten-berlin" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Parkschaden Gutachten Berlin, unsere Leistung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">
            Parkschaden entdeckt?
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Ich komme direkt zu Ihrem Fahrzeug und dokumentiere alles rechtssicher,
            auch am Abend und am Wochenende.
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

      <div className="bg-[#080D14] px-5 py-6 text-center">
        <p className="text-white/25 text-[12px]">
          © 2026 Gutachten Prenzl ·{" "}
          <Link href="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
          {" · "}
          <Link href="/datenschutz" className="hover:text-white/50 transition-colors">Datenschutz</Link>
        </p>
      </div>
    </div>
  );
}
