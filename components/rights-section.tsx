import { Check, X } from "lucide-react";

const haveRight = [
  "Freie Wahl des Sachverständigen — nicht den Gutachter der Versicherung",
  "Freie Wahl der Werkstatt für die Reparatur",
  "Mietwagen oder Nutzungsausfallentschädigung",
  "Erstattung aller Gutachterkosten durch die gegnerische Versicherung",
];

const mustNot = [
  "Sich mit einem Kostenvoranschlag statt Gutachten abspeisen lassen",
  "Die Gutachterkosten selbst vorstrecken",
  "Die Schadensregulierung allein mit der Versicherung verhandeln",
  "Ein Schmerzensgeld-Angebot ungeprüft akzeptieren",
];

export default function RightsSection() {
  return (
    <section className="bg-[#0C1420] py-16 md:py-24 px-5 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            Ihre Rechte
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight mb-3">
            Ihre Rechte nach einem Unfall
          </h2>
          <p className="text-white/50 text-[16px] max-w-lg mx-auto">
            Als Unfallopfer stehen Ihnen mehr Rechte zu, als die Versicherung Ihnen glauben lässt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div data-reveal className="bg-[#080D14] border border-white/8 rounded-3xl p-8">
            <h3 className="font-display font-bold text-white text-[18px] mb-5">Sie haben Recht auf</h3>
            <ul className="space-y-4">
              {haveRight.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#22c55e] stroke-[3]" />
                  </span>
                  <span className="text-[14.5px] text-white/75 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ transitionDelay: "80ms" }} className="bg-[#080D14] border border-white/8 rounded-3xl p-8">
            <h3 className="font-display font-bold text-white text-[18px] mb-5">Sie müssen nicht</h3>
            <ul className="space-y-4">
              {mustNot.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E11D2F]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-[#E11D2F] stroke-[3]" />
                  </span>
                  <span className="text-[14.5px] text-white/75 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
