import { Search, Banknote, Zap, ShieldCheck, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Unfallgutachten Berlin",
    desc: "Detaillierte, TÜV-zertifizierte Schadensanalyse nach Verkehrsunfall. Rechtssicher und von allen Versicherungen anerkannt.",
    tag: "Kernleistung",
    href: "/unfallgutachten-berlin",
  },
  {
    icon: Banknote,
    title: "Kostenloser Service",
    desc: "Bei unverschuldetem Unfall zahlen Sie nichts. Die Haftpflichtversicherung des Unfallverursachers trägt alle Kosten.",
    tag: "0 € für Sie",
    href: null,
  },
  {
    icon: Zap,
    title: "Heckauffahrunfall",
    desc: "Jemand ist Ihnen aufgefahren? Sichern Sie Ihren vollen Anspruch – inklusive Minderwert, Nutzungsausfall und Mietwagenkosten.",
    tag: "Auffahrunfall",
    href: "/heckauffahrunfall-berlin",
  },
  {
    icon: ShieldCheck,
    title: "Schadensregulierung",
    desc: "Wir übernehmen die Kommunikation mit der Versicherung und setzen Ihre Ansprüche vollständig durch.",
    tag: "Rundum-Service",
    href: null,
  },
  {
    icon: MapPin,
    title: "Parkschaden Gutachten",
    desc: "Jemand hat Ihr Auto auf dem Parkplatz beschädigt? Wir dokumentieren den Schaden rechtssicher – auch bei Fahrerflucht.",
    tag: "Parkschaden",
    href: "/parkschaden-gutachten-berlin",
  },
  {
    icon: Clock,
    title: "Totalschaden Gutachten",
    desc: "Bei Totalschaden sichern wir den vollen Wiederbeschaffungswert. Oft liegt dieser deutlich über dem Versicherungsangebot.",
    tag: "Totalschaden",
    href: "/totalschaden-gutachten-berlin",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-[#E11D2F]" />
            Leistungen
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            KFZ Gutachten Leistungen in Berlin
          </h2>
          <p className="text-white/45 text-[15px] max-w-md leading-relaxed">
            Als unabhängiger KFZ Sachverständiger in Berlin stehen wir ausschließlich auf Ihrer Seite –
            nicht auf der der Versicherung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, tag, href }) => {
            const inner = (
              <>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E11D2F]/0 to-[#E11D2F]/4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#E11D2F]/8 border border-[#E11D2F]/15 flex items-center justify-center mb-5 group-hover:bg-[#E11D2F]/15 transition-colors">
                    <Icon size={20} className="text-[#E11D2F]" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-[16px] mb-2">{title}</h3>
                  <p className="text-white/45 text-[13px] leading-relaxed mb-4">{desc}</p>
                  <span className="inline-block text-[11px] font-semibold text-[#E11D2F] bg-[#E11D2F]/8 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                  {href && (
                    <span className="block text-[11px] text-[#E11D2F]/60 group-hover:text-[#E11D2F] mt-3 transition-colors">
                      Mehr erfahren →
                    </span>
                  )}
                </div>
              </>
            );
            return href ? (
              <Link
                key={title}
                href={href}
                className="group relative bg-[#0C1420] border border-white/6 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={title}
                className="group relative bg-[#0C1420] border border-white/6 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
