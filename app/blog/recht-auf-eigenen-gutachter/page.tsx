import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  // absolute: ohne das Suffix aus dem Layout, sonst 82 Zeichen und in der Suche abgeschnitten.
  title: { absolute: "Ihr Recht auf einen unabhängigen KFZ Gutachter in Berlin" },
  description:
    "Bei unverschuldetem Unfall haben Sie das gesetzliche Recht auf einen eigenen Gutachter, kostenlos. Was das bedeutet und wie Sie es durchsetzen.",
  alternates: { canonical: "https://gutachtenprenzl.de/blog/recht-auf-eigenen-gutachter" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ihr Recht auf einen unabhängigen KFZ Gutachter",
  description:
    "Bei Fremdverschulden haben Sie das gesetzliche Recht auf einen eigenen Sachverständigen, kostenlos. Was das bedeutet und wie Sie es durchsetzen.",
  url: "https://gutachtenprenzl.de/blog/recht-auf-eigenen-gutachter",
  datePublished: "2026-04-10",
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
    "@id": "https://gutachtenprenzl.de/blog/recht-auf-eigenen-gutachter",
  },
};

export default function RechtAufGutachter() {
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
              Ihre Rechte
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              3 Min. Lesezeit
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Ihr Recht auf einen<br />
            <span className="text-[#E11D2F]">unabhängigen Gutachter</span>
          </h1>

          <p className="text-white/55 text-[16px] leading-relaxed">
            Die meisten Unfallgeschädigten ahnen es nicht: Nach einem unverschuldeten Unfall
            haben Sie ein gesetzlich verankertes Recht auf einen eigenen, unabhängigen
            KFZ Sachverständigen, und die gegnerische Versicherung muss dafür zahlen.
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
        <div className="max-w-2xl mx-auto space-y-8 text-white/55 text-[15px] leading-relaxed">

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">
              Was sagt das Gesetz?
            </h2>
            <p>
              Das Recht auf einen eigenen Gutachter ergibt sich aus dem deutschen Schadensersatzrecht
              (§ 249 BGB). Wer unverschuldet in einen Unfall verwickelt wird, hat Anspruch auf
              vollständige Wiederherstellung des Zustands vor dem Unfall, und dazu gehört auch
              das Recht, den Schaden von einem unabhängigen Fachmann bewerten zu lassen.
            </p>
            <p className="mt-3">
              Der Bundesgerichtshof hat dies mehrfach bestätigt: Ab einem Schaden von ca. 750 € ist
              ein Unfallgutachten grundsätzlich erstattungsfähig. Die gegnerische Haftpflichtversicherung
              muss die Kosten tragen, unabhängig davon, ob sie selbst einen Gutachter schicken möchte.
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">
              Warum kein Gutachter der Versicherung?
            </h2>
            <p>
              Versicherungen schicken gerne ihren eigenen Gutachter, oder bitten Sie, zu einem
              von ihnen beauftragten Büro zu fahren. Das klingt praktisch, hat aber einen Haken:
              Dieser Gutachter arbeitet für die Versicherung, nicht für Sie.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-[#E11D2F]/25 bg-[#E11D2F]/10">
                <p className="font-bold text-[#f87171] text-[13px] mb-2 flex items-center gap-1.5">
                  <XCircle size={14} /> Gutachter der Versicherung
                </p>
                <ul className="space-y-1.5 text-[#f87171]/85 text-[13px]">
                  <li>Arbeitet im Auftrag der Gegenseite</li>
                  <li>Tendiert zu niedrigeren Schadenswerten</li>
                  <li>Kann Vorschäden oder Minderwert übersehen</li>
                  <li>Nutzt günstigere Stundenverrechnungssätze</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-[#22c55e]/25 bg-[#22c55e]/10">
                <p className="font-bold text-[#4ade80] text-[13px] mb-2 flex items-center gap-1.5">
                  <CheckCircle size={14} /> Ihr unabhängiger Gutachter
                </p>
                <ul className="space-y-1.5 text-[#4ade80] text-[13px]">
                  <li>Arbeitet ausschließlich für Sie</li>
                  <li>Dokumentiert alle Schäden vollständig</li>
                  <li>Berücksichtigt Minderwert & Nutzungsausfall</li>
                  <li>Rechtssicher und gerichtsverwertbar</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">
              Was umfasst Ihr Schadensersatz?
            </h2>
            <p className="mb-4">
              Viele Unfallgeschädigte lassen Geld liegen, weil sie nicht wissen, was alles
              erstattungsfähig ist. Ein unabhängiger Gutachter erfasst alle Positionen:
            </p>
            <div className="space-y-2">
              {[
                ["Reparaturkosten", "Vollständige Instandsetzung auf Basis aktueller Marktpreise"],
                ["Wiederbeschaffungswert", "Bei Totalschaden: was Ihr Auto vor dem Unfall wert war"],
                ["Merkantiler Minderwert", "Wertverlust, der auch nach Reparatur bleibt"],
                ["Nutzungsausfall", "Entschädigung für jeden Tag, an dem Sie kein Auto haben"],
                ["Mietwagenkosten", "Kosten für ein Ersatzfahrzeug während der Reparatur"],
                ["Gutachterkosten", "Werden vollständig von der Versicherung übernommen"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.03]">
                  <CheckCircle size={15} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white text-[14px]">{title}</p>
                    <p className="text-white/50 text-[13px] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">
              Was sagen, wenn die Versicherung widerspricht?
            </h2>
            <p>
              Es kommt vor, dass die gegnerische Versicherung versucht, das Gutachten abzulehnen
              oder die Kosten zu kürzen. Das ist rechtlich in der Regel nicht zulässig, solange
              Sie einen qualifizierten, zertifizierten Gutachter gewählt haben. Ein TÜV Rheinland
              zertifiziertes Gutachten wird von deutschen Kfz-Versicherungen im Regelfall anerkannt
              und ist vor Gericht verwertbar.
            </p>
            <p className="mt-3">
              Falls die Versicherung trotzdem kürzt, übernehme ich die Kommunikation und setze
              Ihren Anspruch durch, ohne Aufpreis.
            </p>
          </div>

          {/* Vertiefung */}
          <div className="my-10 space-y-8 text-white/55 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Worauf sich das Recht stützt
              </h2>
              <p className="mb-4">
                Grundlage ist § 249 BGB. Dort steht vereinfacht, dass der Schädiger den
                Zustand herstellen muss, der ohne den Schaden bestehen würde. Dazu gehören
                auch die Kosten, die nötig sind, um den Schaden überhaupt zu beziffern.
                Genau das macht ein Gutachten.
              </p>
              <p>
                Daraus folgt zweierlei. Erstens dürfen Sie den Sachverständigen selbst
                aussuchen. Zweitens muss die gegnerische Versicherung diese Kosten tragen,
                solange der Schaden nicht offensichtlich im Bagatellbereich liegt. Sie
                braucht dem nicht zuzustimmen, und Sie müssen nicht um Erlaubnis fragen.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Was Versicherungen am Telefon versuchen
              </h2>
              <p className="mb-4">
                Wir hören immer wieder dieselben Sätze von Kunden, die vorher mit der
                Gegenseite telefoniert haben:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  ['"Wir schicken Ihnen einen Gutachter, das geht schneller."', "Schneller vielleicht. Vollständiger nicht. Sie dürfen ablehnen."],
                  ['"Ein Gutachten lohnt sich bei dem Schaden nicht."', "Das entscheidet nicht die Versicherung, sondern die Schadenhöhe. Unterhalb von etwa 750 Euro stimmt es oft, darüber selten."],
                  ['"Wir übernehmen die Gutachterkosten nur, wenn Sie unseren nehmen."', "Falsch. Bei unverschuldetem Unfall werden die Kosten Ihres eigenen Gutachters erstattet."],
                  ['"Lassen Sie uns das unkompliziert per Pauschale regeln."', "Eine Pauschale ohne Gutachten enthält fast nie Wertminderung und Nutzungsausfall."],
                ].map(([satz, antwort]) => (
                  <li key={satz} className="flex gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E11D2F] mt-2.5" />
                    <span>
                      <strong className="text-white">{satz}</strong>
                      <br />
                      {antwort}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Sie müssen dabei nicht diskutieren. Der Satz, dass Sie bereits einen eigenen
                Sachverständigen beauftragt haben, beendet das Gespräch in aller Regel.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-white uppercase mb-4">
                Wann das Recht nicht gilt
              </h2>
              <p className="mb-4">
                Damit es fair bleibt: Es gibt Fälle, in denen Sie das Gutachten nicht
                erstattet bekommen. Bei Bagatellschäden unterhalb von rund 750 Euro reicht
                nach ständiger Rechtsprechung ein Kostenvoranschlag. Bei selbst
                verursachten Schäden zahlt ohnehin Ihre eigene Kasko, die meist einen
                eigenen Gutachter stellt. Und bei Teilschuld wird auch das Honorar nur
                anteilig erstattet.
              </p>
              <p>
                Wo Ihr Fall liegt, lässt sich am Telefon in zwei Minuten einschätzen.
                Wir sagen Ihnen das ehrlich, auch wenn die Antwort lautet, dass sich ein
                Gutachten bei Ihnen nicht lohnt.
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-6 border-t border-white/8">
            <h3 className="font-semibold text-white text-[14px] mb-4">Weiterführende Artikel</h3>
            <div className="space-y-2">
              <Link href="/blog/was-tun-nach-unfall-berlin" className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                <ArrowLeft size={14} className="rotate-180" />
                Was tun nach einem Unfall in Berlin?
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
            Jetzt Ihr Recht durchsetzen
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Ich komme zu Ihnen, dokumentiere alles und kümmere mich um die Versicherung.
            Für Sie 100 % kostenlos bei Fremdverschulden.
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
