import { Search, Banknote, Zap, ShieldCheck, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Unfallgutachten Berlin",
    desc: "Detaillierte, TÜV-zertifizierte Schadensanalyse nach Verkehrsunfall. Rechtssicher, von Versicherungen im Regelfall anerkannt.",
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
    <section id="leistungen" className="py-16 md:py-24 px-5 bg-[#080D14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            Leistungen
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight mb-3">
            KFZ Gutachten Leistungen in Berlin
          </h2>
          <p className="text-white/50 text-[16px] max-w-lg mx-auto leading-relaxed">
            Als unabhängiger KFZ Sachverständiger in Berlin stehen wir ausschließlich auf Ihrer Seite –
            nicht auf der der Versicherung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, tag, href }, i) => {
            const inner = (
              <>
                <div className="w-11 h-11 rounded-xl bg-[#E11D2F]/10 flex items-center justify-center mb-5 group-hover:bg-[#E11D2F]/20 transition-colors">
                  <Icon size={20} className="text-[#E11D2F]" />
                </div>
                <h3 className="font-display font-bold text-white text-[16px] mb-2">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-4">{desc}</p>
                <span className="inline-block text-[11px] font-semibold text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
                {href && (
                  <span className="block text-[12px] font-semibold text-white/35 group-hover:text-[#E11D2F] mt-3 transition-colors">
                    Mehr erfahren →
                  </span>
                )}
              </>
            );
            const cardClass =
              "group bg-[#0C1420] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 block";
            return href ? (
              <Link key={title} href={href} className={cardClass} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                {inner}
              </Link>
            ) : (
              <div key={title} className={cardClass} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
