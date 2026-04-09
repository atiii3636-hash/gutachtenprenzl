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
          <p>Verantwortlicher im Sinne der DSGVO ist:</p>
          <div className="mt-3 p-4 bg-gray-50 rounded-xl text-[14px] space-y-1">
            <p className="font-bold text-[#080D14]">Atakan Arslan</p>
            <p>KFZ Sachverständiger</p>
            <p>Prenzlauer Allee 88</p>
            <p>10405 Berlin, Deutschland</p>
            <p>Telefon: <a href="tel:+4915560003661" className="text-[#E11D2F] hover:underline">+49 155 60003661</a></p>
            <p>E-Mail: <a href="mailto:info@gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">info@gutachtenprenzl.de</a></p>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">2. Kontaktformular / Schadensmeldung</h2>
          <p>Wenn Sie unser Online-Formular nutzen, erheben wir folgende Daten:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[14px]">
            <li>Vor- und Nachname</li>
            <li>Telefonnummer</li>
            <li>Art des Unfalls (Haftpflicht oder Kasko)</li>
            <li>Beschreibung des Schadens (optional)</li>
            <li>Fotos des Fahrzeugschadens (optional)</li>
          </ul>
          <p className="mt-3">
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nach Abschluss der Bearbeitung innerhalb von 3 Monaten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
          <p className="mt-3">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie — soweit Sie Ihre Einwilligung erteilt haben — Art. 6 Abs. 1 lit. a DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">3. Drittdienste</h2>

          <h3 className="font-bold text-[#080D14] mb-2">E-Mail-Versand (Resend)</h3>
          <p className="text-[14px]">
            Für den Versand von E-Mails nutzen wir <strong>Resend</strong> (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA). Die über das Kontaktformular übermittelten Daten (Name, Telefonnummer) werden zur E-Mail-Zustellung an Resend weitergeleitet. Die Übermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Mit Resend besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.{" "}
            <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">Datenschutzerklärung Resend</a>.
          </p>

          <h3 className="font-bold text-[#080D14] mt-5 mb-2">Hosting (Vercel)</h3>
          <p className="text-[14px]">
            Diese Website wird gehostet bei <strong>Vercel Inc.</strong> (340 Pine Street, Suite 900, San Francisco, CA 94104, USA). Beim Aufruf der Website werden technisch notwendige Verbindungsdaten (IP-Adresse, Browsertyp, Uhrzeit) in Server-Logs erfasst und nach kurzer Zeit automatisch gelöscht. Die Übermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Websitebetrieb).{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">Datenschutzerklärung Vercel</a>.
          </p>

          <h3 className="font-bold text-[#080D14] mt-5 mb-2">Google-Bewertungen (Elfsight)</h3>
          <p className="text-[14px]">
            Auf unserer Website binden wir Google-Kundenbewertungen über den Dienst <strong>Elfsight</strong> (Elfsight Apps Limited, Florinis 7, Greg Tower, 2nd Floor, 1065, Nicosia, Zypern) ein. Beim Laden des Widgets wird eine Verbindung zu den Servern von Elfsight hergestellt, dabei wird Ihre IP-Adresse übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Darstellung authentischer Kundenbewertungen).{" "}
            <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">Datenschutzerklärung Elfsight</a>.
          </p>

          <h3 className="font-bold text-[#080D14] mt-5 mb-2">WhatsApp</h3>
          <p className="text-[14px]">
            Auf unserer Website befindet sich ein Link zu WhatsApp (Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland). Wenn Sie auf diesen Link klicken, wird die WhatsApp-App geöffnet und eine Verbindung zu den Servern von Meta hergestellt. Meta kann dabei Daten über Ihr Gerät und Ihr Nutzungsverhalten erfassen. Wir haben keinen Einfluss auf die Datenverarbeitung durch Meta.{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">Datenschutzerklärung WhatsApp</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">4. Lokaler Speicher (localStorage)</h2>
          <p>
            Diese Website verwendet den lokalen Speicher Ihres Browsers (localStorage), um Ihre Kenntnisnahme des Cookie-Hinweises zu speichern. Dabei werden keine personenbezogenen Daten erhoben. Der Eintrag verbleibt in Ihrem Browser, bis Sie ihn manuell löschen (Browser-Einstellungen → Websitedaten löschen).
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-[13px] border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Eintrag</th>
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Zweck</th>
                  <th className="text-left px-4 py-3 font-bold text-[#080D14]">Speicherdauer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-mono text-[12px]">cookie-consent</td>
                  <td className="px-4 py-3">Speichert Kenntnisnahme des Cookie-Hinweises</td>
                  <td className="px-4 py-3">Bis zur manuellen Löschung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">5. Ihre Rechte</h2>
          <p>Sie haben gemäß DSGVO folgende Rechte gegenüber uns als Verantwortlichem:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[14px]">
            <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
            <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO)</li>
            <li><strong>Löschungsrecht</strong> (Art. 17 DSGVO)</li>
            <li><strong>Einschränkungsrecht</strong> (Art. 18 DSGVO)</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
            <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO) — jederzeit mit Wirkung für die Zukunft</li>
          </ul>
          <p className="mt-3">
            Anfragen richten Sie bitte an:{" "}
            <a href="mailto:info@gutachtenprenzl.de" className="text-[#E11D2F] hover:underline">info@gutachtenprenzl.de</a>
          </p>
          <p className="mt-3">
            Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:<br />
            <strong>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
            Friedrichstr. 219, 10969 Berlin —{" "}
            <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-[#E11D2F] hover:underline">datenschutz-berlin.de</a>
          </p>
        </section>

        <section>
          <h2 className="font-display font-black text-xl text-[#080D14] uppercase mb-3">6. Datensicherheit</h2>
          <p>
            Diese Website nutzt HTTPS-Verschlüsselung (TLS) für die sichere Übertragung aller Daten zwischen Ihrem Browser und unseren Servern.
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
