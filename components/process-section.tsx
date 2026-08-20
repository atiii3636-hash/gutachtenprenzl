import { Phone, Car, FileCheck, CheckCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Unfall melden",
    desc: "Rufen Sie an oder schreiben Sie per WhatsApp. Kostenlose Ersteinschätzung — 24/7 erreichbar.",
  },
  {
    icon: Car,
    title: "Begutachtung vor Ort",
    desc: "Wir kommen zu Ihnen — nach Hause, zur Arbeit oder in die Werkstatt. Dauer: ca. 20–30 Minuten.",
  },
  {
    icon: FileCheck,
    title: "Gutachten in 24h",
    desc: "Sie erhalten das fertige Gutachten. Wir leiten es direkt an die zuständige Versicherung weiter.",
  },
  {
    icon: CheckCircle,
    title: "Versicherung zahlt",
    desc: "Bei unverschuldetem Unfall trägt die gegnerische Versicherung alle Kosten — 0 € für Sie.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-20 md:py-24 px-5 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-[#E11D2F] mb-3">
            So einfach geht&apos;s
          </span>
          <h2 className="font-display font-black text-[#080D14] tracking-tight text-3xl md:text-4xl mb-3">
            In 4 Schritten zu Ihrem Gutachten
          </h2>
          <p className="text-gray-500 text-[15px] max-w-lg mx-auto leading-relaxed">
            Vom ersten Anruf bis zur Auszahlung — wir übernehmen den kompletten Ablauf für Sie.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#E11D2F]/8 flex items-center justify-center">
                  <Icon size={20} className="text-[#E11D2F]" />
                </div>
                <span className="font-display font-black text-[28px] leading-none text-gray-200 select-none">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-[#080D14] text-[16px] mb-2">{title}</h3>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3" data-reveal>
          <a
            href="tel:+4915560003661"
            className="flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[15px] px-7 py-3.5 rounded-full shadow-lg shadow-[#E11D2F]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Jetzt anrufen
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-white border border-gray-200 hover:border-[#25D366] text-[#080D14] font-bold text-[15px] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            WhatsApp schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
