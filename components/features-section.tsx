import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "TÜV-zertifiziert & unabhängig",
    desc: "Staatlich anerkannte Zertifizierung. Keine Abhängigkeit von Versicherungen oder Kfz-Werkstätten.",
  },
  {
    title: "Vollständige Schadenserfassung",
    desc: "Wir erfassen alle Schäden – auch versteckte und Folgeschäden – damit Sie keine Ansprüche verlieren.",
  },
  {
    title: "Direktübermittlung an die Versicherung",
    desc: "Das Gutachten geht direkt von uns an die Versicherung. Sie müssen sich um nichts kümmern.",
  },
  {
    title: "Lokal in Prenzlauer Berg",
    desc: "Kurze Wege, schnelle Reaktionszeiten. Wir kennen Berlin und sind schnell bei Ihnen.",
  },
  {
    title: "Kostenlos bei unverschuldetem Unfall",
    desc: "Bei Fremdverschulden übernimmt die Haftpflichtversicherung des Verursachers alle Kosten.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="vorteile" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-[#E11D2F]" />
              Warum Gutachten Prenzl
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              Ihr unabhängiger Sachverständiger
            </h2>
            <p className="text-white/45 text-[15px] leading-relaxed mb-10 max-w-md">
              Wir arbeiten ausschließlich für Sie. Kein Interessenkonflikt
              mit Versicherungen oder Werkstätten – nur objektive, vollständige Gutachten.
            </p>

            <div className="space-y-0">
              {features.map(({ title, desc }) => (
                <div key={title} className="flex gap-4 py-5 border-b border-white/6 first:border-t first:border-t-white/6">
                  <div className="w-5 h-5 rounded-md bg-[#E11D2F]/10 border border-[#E11D2F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#E11D2F] stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-[14px] mb-1">{title}</p>
                    <p className="text-white/45 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – big stat card */}
          <div className="relative">
            {/* Subtle background glow */}
            <div className="absolute -inset-8 bg-[#E11D2F]/4 rounded-3xl blur-3xl pointer-events-none" />

            <div className="relative bg-[#0C1420] border border-white/8 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#E11D2F] via-[#E11D2F]/40 to-transparent" />

              {/* Hero number */}
              <div className="mb-6">
                <div className="font-display font-bold text-[90px] leading-none tracking-tighter text-white">
                  24<span className="text-[#E11D2F]">h</span>
                </div>
                <p className="text-white/45 text-[14px] leading-relaxed mt-2">
                  Ihr Gutachten ist fertig.<br />
                  Schneller geht es nicht.
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "0 €", label: "Kosten für Sie" },
                  { val: "100%", label: "Anerkannte Gutachten" },
                  { val: "24/7", label: "Notfall-Hotline" },
                  { val: "TÜV", label: "Zertifiziert" },
                ].map(({ val, label }) => (
                  <div key={val} className="bg-[#0F172A] rounded-xl p-4 border border-white/5">
                    <p className="font-display font-bold text-white text-[22px] leading-none mb-1">{val}</p>
                    <p className="text-[11px] text-white/35 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* TÜV Certificate */}
              <div className="mt-4 flex items-center gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-3">
                <Image
                  src="/tuev-zertifikat.png"
                  alt="TÜV Rheinland Zertifikat – Geprüfte Qualifikation, gültig bis 18.12.2028"
                  width={600}
                  height={220}
                  className="h-10 w-auto object-contain"
                />
                <div className="w-px h-8 bg-white/10 flex-shrink-0" />
                <p className="text-[11px] text-white/40 leading-snug">
                  Geprüfte Qualifikation<br />
                  <span className="text-white/25">Gültig bis 18.12.2028</span>
                </p>
              </div>

              {/* Unsplash car image */}
              <div className="mt-4 rounded-xl overflow-hidden h-36 relative">
                <img
                  src="/feature-car.jpg"
                  alt="KFZ Begutachtung"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1420] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
