"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Was macht ein KFZ Sachverständiger genau?",
    a: "Ein KFZ Sachverständiger in Berlin bewertet den Schaden an Ihrem Fahrzeug unabhängig und objektiv. Er dokumentiert den Unfallschaden, berechnet die Reparaturkosten, den Wiederbeschaffungswert und den Minderwert. Als TÜV Rheinland zertifizierter Gutachter erstellen wir rechtssichere Gutachten, die von allen deutschen Versicherungen anerkannt werden.",
  },
  {
    q: "Was kostet ein KFZ-Gutachten in Berlin?",
    a: "Bei einem unverschuldeten Unfall zahlen Sie 0 €. Die Haftpflichtversicherung des Unfallverursachers trägt alle Kosten für den KFZ Sachverständiger – das ist gesetzlich geregelt. Nur bei selbstverschuldetem Unfall werden die Kosten über Ihre Kaskoversicherung abgerechnet.",
  },
  {
    q: "Wann ist ein Gutachten nach einem Unfall Pflicht?",
    a: "Ab einem Schadenwert von ca. 750 € empfiehlt sich ein unabhängiges Gutachten. Bei unverschuldetem Unfall haben Sie grundsätzlich immer das Recht auf einen eigenen KFZ Gutachter – unabhängig von der Versicherung des Unfallgegners. Verlassen Sie sich nicht auf den Gutachter der gegnerischen Versicherung.",
  },
  {
    q: "Wer trägt die Kosten für ein KFZ-Gutachten — ich oder die Versicherung?",
    a: "Bei Fremdverschulden trägt die Haftpflichtversicherung des Unfallverursachers alle Kosten – Gutachten, Anwaltskosten und Reparatur. Sie müssen nichts vorstrecken. Wir rechnen direkt mit der Versicherung ab und kümmern uns um die gesamte Kommunikation.",
  },
  {
    q: "Was ist der Unterschied zwischen Schadensgutachten und Wertgutachten?",
    a: "Ein Schadensgutachten dokumentiert den Unfallschaden und die Reparaturkosten – es wird nach einem Unfall benötigt. Ein Wertgutachten (auch Marktwertgutachten) stellt den aktuellen Fahrzeugwert fest – z. B. für Kauf, Verkauf, Erbschaft oder Versicherung. Als KFZ Sachverständiger in Berlin erstellen wir beide Gutachtentypen.",
  },
  {
    q: "Wie finde ich einen unabhängigen KFZ Gutachter in Berlin?",
    a: "Ein unabhängiger KFZ Gutachter arbeitet für Sie – nicht für die Versicherung. Achten Sie auf eine anerkannte Zertifizierung (z. B. TÜV Rheinland) und lokale Erfahrung in Berlin. Wir sind TÜV Rheinland zertifiziert (ID 0217466029) und in allen Berliner Bezirken aktiv – von Mitte bis Spandau, von Pankow bis Tempelhof.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin beim KFZ Sachverständiger in Berlin?",
    a: "In der Regel am selben oder nächsten Werktag. Als mobiler KFZ Gutachter kommen wir direkt zu Ihnen – nach Hause, in die Werkstatt oder zum Unfallort in ganz Berlin. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung.",
  },
  {
    q: "Brauche ich nach einem Unfall in Berlin einen eigenen Gutachter?",
    a: "Ja, unbedingt. Die Versicherung des Unfallgegners hat eigene Gutachter, die im Interesse der Versicherung arbeiten. Ihr eigener unabhängiger KFZ Sachverständiger arbeitet ausschließlich für Sie und sichert den vollen Schadensersatz. Das ist Ihr gutes Recht und kostet Sie bei Fremdverschulden nichts.",
  },
  {
    q: "Was ist ein amtlich anerkannter Sachverständiger und brauche ich das?",
    a: "Ein amtlich anerkannter Sachverständiger (z. B. durch TÜV oder DEKRA) hat eine staatlich geprüfte Qualifikation. Unsere TÜV Rheinland Zertifizierung (ID 0217466029, gültig bis 18.12.2028) stellt sicher, dass unsere Gutachten gerichtsverwertbar und von allen Versicherungen rechtsverbindlich anerkannt werden.",
  },
  {
    q: "Welche Unterlagen brauche ich für ein KFZ-Gutachten?",
    a: "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Fahrzeugbrief (Teil II), Führerschein, Unfallbericht oder Polizeiprotokoll (falls vorhanden) und die Daten des Unfallgegners. Haben Sie nicht alles zur Hand? Kein Problem – wir helfen Ihnen dabei und koordinieren alles mit Ihrer Versicherung.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5 bg-[#080D14]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-[#E11D2F]" />
            Häufige Fragen
            <span className="w-5 h-px bg-[#E11D2F]" />
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
            Ihre Fragen —<br />
            <span className="text-[#E11D2F]">unsere Antworten</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-[#E11D2F]/30 bg-white/4"
                  : "border-white/6 bg-white/2 hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-[15px] font-semibold leading-snug transition-colors ${open === i ? "text-white" : "text-white/75"}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  open === i ? "bg-[#E11D2F] text-white" : "bg-white/6 text-white/40"
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/55 text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
