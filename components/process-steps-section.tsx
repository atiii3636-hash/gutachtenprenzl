import { Phone, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "Schritt 1",
    title: "Schaden melden",
    desc: "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Online-Formular. Wir melden uns innerhalb von 30 Minuten.",
  },
  {
    icon: ClipboardCheck,
    step: "Schritt 2",
    title: "Begutachtung vor Ort",
    desc: "Wir kommen zu Ihnen — nach Hause, zur Arbeit oder zur Werkstatt. Die Begutachtung dauert ca. 30 Minuten.",
  },
  {
    icon: Banknote,
    step: "Schritt 3",
    title: "Gutachten & Auszahlung",
    desc: "Ihr Gutachten ist in 24h fertig und geht direkt an die Versicherung. Sie erhalten Ihr Geld — wir kümmern uns um alles.",
  },
];

export default function ProcessStepsSection() {
  return (
    <section id="ablauf" className="bg-[#080D14] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            So einfach geht&apos;s
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight mb-3">
            In 3 Schritten zu Ihrem Geld
          </h2>
          <p className="text-white/50 text-[16px] max-w-md mx-auto">
            Vom Anruf bis zur Auszahlung — Sie müssen sich um nichts kümmern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={title}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="relative bg-[#0C1420] border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-colors duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-[#E11D2F]/10 inline-flex items-center justify-center mb-5">
                <Icon size={24} className="text-[#E11D2F]" />
              </div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/35 mb-1.5">{step}</p>
              <h3 className="font-display font-bold text-white text-[20px] mb-2.5">{title}</h3>
              <p className="text-white/50 text-[14.5px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
