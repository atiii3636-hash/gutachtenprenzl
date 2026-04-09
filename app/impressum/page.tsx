import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Gutachten Prenzl – KFZ Sachverständiger Berlin.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#080D14] py-10 px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[13px] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Zurück zur Startseite
          </Link>
          <h1 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
            Impressum
          </h1>
          <p className="text-white/40 text-[14px] mt-2">Angaben gemäß § 5 TMG</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10 text-[15px] text-gray-700 leading-relaxed">

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Anbieter</h2>
          <div className="p-4 bg-gray-50 rounded-xl text-[14px] space-y-1">
            <p className="font-bold text-[#080D14]">Atakan Arslan</p>
            <p>KFZ Sachverständiger</p>
            <p>Prenzlauer Allee 88</p>
            <p>10405 Berlin</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Kontakt</h2>
          <div className="text-[14px] space-y-2">
            <p>Telefon: <a href="tel:+4915560003661" className="text-[#E11D2F] hover:underline">+49 155 60003661</a></p>
            <p>E-Mail: <a href="mailto:info@gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">info@gutachtenprenzl.de</a></p>
            <p>Website: <a href="https://gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">gutachtenprenzl.de</a></p>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Umsatzsteuer-ID</h2>
          <p className="text-[14px]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            <span className="font-bold text-[#080D14]">DE815908789</span>
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Berufsbezeichnung</h2>
          <div className="text-[14px] space-y-1">
            <p>Berufsbezeichnung: <strong>KFZ Sachverständiger</strong></p>
            <p>Zertifizierung: TÜV Rheinland (ID 0217466029, gültig bis 18.12.2028)</p>
            <p>Zuständige Aufsichtsbehörde: Industrie- und Handelskammer Berlin</p>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Inhaltlich Verantwortlicher</h2>
          <p className="text-[14px]">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
            <strong>Atakan Arslan</strong>, Prenzlauer Allee 88, 10405 Berlin
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Streitschlichtung</h2>
          <p className="text-[14px]">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">
              ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-[14px] mt-3">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">Haftungsausschluss</h2>
          <h3 className="font-bold text-[#080D14] text-[14px] mb-2">Haftung für Inhalte</h3>
          <p className="text-[14px]">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
          <h3 className="font-bold text-[#080D14] text-[14px] mt-4 mb-2">Haftung für Links</h3>
          <p className="text-[14px]">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <h3 className="font-bold text-[#080D14] text-[14px] mt-4 mb-2">Urheberrecht</h3>
          <p className="text-[14px]">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#E11D2F] hover:text-[#B91C1C] font-semibold text-[14px] transition-colors"
          >
            <ArrowLeft size={14} />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
