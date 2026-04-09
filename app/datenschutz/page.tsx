import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Gutachten Prenzl – KFZ Sachverständiger Berlin.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>
          <p className="text-white/40 text-[14px] mt-2">Stand: April 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-10 text-[15px] text-gray-700 leading-relaxed">

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <div className="mt-3 p-4 bg-gray-50 rounded-xl text-[14px] space-y-1">
            <p className="font-bold text-[#080D14]">Gutachten Prenzl</p>
            <p>Berlin Prenzlauer Berg</p>
            <p>10435 Berlin, Deutschland</p>
            <p>Telefon: <a href="tel:+4915560003661" className="text-[#E11D2F] hover:underline">+49 155 60003661</a></p>
            <p>E-Mail: <a href="mailto:info@gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">info@gutachtenprenzl.de</a></p>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <h3 className="font-bold text-[#080D14] mb-2">Kontaktformular / Schadensmeldung</h3>
          <p>
            Wenn Sie unser Online-Formular zur Schadensmeldung nutzen, erheben wir folgende Daten:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[14px]">
            <li>Vor- und Nachname</li>
            <li>Telefonnummer</li>
            <li>Beschreibung des Schadens (optional)</li>
            <li>Art des Unfalls (Haftpflicht oder Kasko)</li>
            <li>Hochgeladene Fotos des Fahrzeugschadens (optional)</li>
          </ul>
          <p className="mt-3">
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
          </p>

          <h3 className="font-bold text-[#080D14] mt-5 mb-2">E-Mail-Versand über Resend</h3>
          <p>
            Für den Versand von E-Mails aus dem Kontaktformular nutzen wir den Dienst <strong>Resend</strong> (Resend, Inc., San Francisco, USA). Resend verarbeitet die übermittelten Daten in unserem Auftrag. Mit Resend besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Die Datenschutzerklärung von Resend finden Sie unter: resend.com/privacy.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">3. Cookies</h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies sind erforderlich, um grundlegende Funktionen der Website zu gewährleisten, und können nicht deaktiviert werden. Es werden keine Tracking-, Analyse- oder Werbe-Cookies eingesetzt.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-[13px] border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Cookie</th>
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Zweck</th>
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Speicherdauer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-mono text-[12px]">cookie-consent</td>
                  <td className="px-4 py-3">Speichert Ihre Cookie-Einwilligung</td>
                  <td className="px-4 py-3">Dauerhaft (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">4. Hosting & Infrastruktur</h2>
          <p>
            Diese Website wird über <strong>Vercel</strong> (Vercel Inc., San Francisco, USA) gehostet. Beim Aufruf der Website werden technisch notwendige Daten (IP-Adresse, Browsertyp, Uhrzeit) in Server-Logs gespeichert. Diese Daten werden nicht mit anderen Daten zusammengeführt und nach kurzer Zeit automatisch gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">5. Speicherdauer</h2>
          <p>
            Ihre personenbezogenen Daten aus dem Kontaktformular werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Im Regelfall werden Anfragen nach Abschluss der Bearbeitung innerhalb von 3 Monaten gelöscht.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">6. Ihre Rechte</h2>
          <p>Sie haben gemäß DSGVO folgende Rechte:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[14px]">
            <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Auskunft über Ihre gespeicherten Daten</li>
            <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten</li>
            <li><strong>Löschungsrecht</strong> (Art. 17 DSGVO): Löschung Ihrer Daten</li>
            <li><strong>Einschränkungsrecht</strong> (Art. 18 DSGVO): Einschränkung der Verarbeitung</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Übertragung Ihrer Daten</li>
            <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Jederzeit mit Wirkung für die Zukunft</li>
          </ul>
          <p className="mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">info@gutachtenprenzl.de</a>
          </p>
          <p className="mt-3">
            Sie haben außerdem das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">7. Datensicherheit</h2>
          <p>
            Diese Website nutzt HTTPS-Verschlüsselung (TLS) für die Übertragung aller Daten. Ihre Angaben im Kontaktformular werden verschlüsselt übertragen und sind für Dritte nicht einsehbar.
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
