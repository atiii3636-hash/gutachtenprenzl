import { Search, Banknote, Zap, ShieldCheck, MapPin, Clock } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Unfallgutachten",
    desc: "Detaillierte, TÜV-zertifizierte Schadensanalyse nach Verkehrsunfall. Rechtssicher und von allen Versicherungen anerkannt.",
    tag: "Kernleistung",
  },
  {
    icon: Banknote,
    title: "Kostenloser Service",
    desc: "Bei unverschuldetem Unfall zahlen Sie nichts. Die Haftpflichtversicherung des Unfallverursachers trägt alle Kosten.",
    tag: "0 € für Sie",
  },
  {
    icon: Zap,
    title: "24h Lieferung",
    desc: "Schnellste Bearbeitung in Berlin. Ihr vollständiges Gutachten innerhalb von 24 Stunden nach der Besichtigung.",
    tag: "Express",
  },
  {
    icon: ShieldCheck,
    title: "Schadensregulierung",
    desc: "Wir übernehmen die Kommunikation mit der Versicherung und setzen Ihre Ansprüche vollständig durch.",
    tag: "Rundum-Service",
  },
  {
    icon: MapPin,
    title: "Vor-Ort-Service",
    desc: "Wir kommen zu Ihnen – nach Hause, in die Werkstatt oder zum Unfallort – in ganz Berlin und Umgebung.",
    tag: "Mobil",
  },
  {
    icon: Clock,
    title: "24/7 Hotline",
    desc: "Unfälle passieren zu jeder Zeit. Unsere Notfall-Hotline ist rund um die Uhr für Sie erreichbar.",
    tag: "Immer erreichbar",
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
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="group relative bg-[#0C1420] border border-white/6 rounded-xl p-6 hover:border-[#E11D2F]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
