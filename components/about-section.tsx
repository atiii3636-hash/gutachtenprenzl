import { ShieldCheck, Award, User, Phone } from "lucide-react";
import Link from "next/link";

const credentials = [
  {
    icon: ShieldCheck,
    title: "TÜV Rheinland zertifiziert",
    text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Anerkannt von allen Versicherungen in Deutschland.",
  },
  {
    icon: Award,
    title: "5,0 Sterne · 47 Google-Bewertungen",
    text: "Unabhängige Bewertungen von Berliner Kunden — keine gekauften Rezensionen.",
  },
  {
    icon: User,
    title: "Persönlicher Ansprechpartner",
    text: "Sie sprechen direkt mit dem zertifizierten Sachverständigen — kein Callcenter, kein anonymes Büro.",
  },
  {
    icon: Phone,
    title: "24/7 Notfall-Hotline",
    text: "Unfälle passieren zu jeder Zeit. Wir sind rund um die Uhr für Sie erreichbar — auch am Wochenende.",
  },
];

export default function AboutSection() {
  return (
    <section id="vorteile" className="py-20 px-5 bg-[#0A1018]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-[#E11D2F]" />
              Über Gutachten Prenzl
            </div>

            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-5 leading-tight">
              Ihr unabhängiger<br />
              <span className="text-[#E11D2F]">KFZ Sachverständiger</span><br />
              in Berlin
            </h2>

            <p className="text-white/55 text-[15px] leading-relaxed mb-5">
              Gutachten Prenzl ist ein TÜV Rheinland zertifizierter KFZ Sachverständiger
              mit Büro in der <strong className="text-white">Prenzlauer Allee 88, 10405 Berlin</strong>.
              Als unabhängiger Einzelgutachter stehen wir persönlich bei jedem Auftrag zur Verfügung —
              kein anonymes Büro, kein Callcenter.
            </p>

            <p className="text-white/55 text-[15px] leading-relaxed mb-8">
              Nach einem Unfall haben Sie das <strong className="text-white">gesetzliche Recht auf einen eigenen, unabhängigen Gutachter</strong> —
              und bei unverschuldetem Unfall zahlen Sie dafür <strong className="text-white">0 €</strong>.
              Die Haftpflichtversicherung des Verursachers trägt alle Kosten. Viele Fahrer wissen das nicht —
              und verlieren dadurch Tausende Euro Schadensersatz.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center gap-2 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-bold uppercase tracking-wide text-[13px] px-5 py-3 rounded-xl transition-all"
              >
                <Phone size={14} />
                Jetzt anrufen
              </a>
              <Link
                href="/unfallgutachten-berlin"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold text-[13px] px-5 py-3 rounded-xl transition-all"
              >
                Mehr über unsere Leistungen →
              </Link>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white/3 border border-white/8 rounded-2xl p-5">
                <div className="w-10 h-10 bg-[#E11D2F]/10 border border-[#E11D2F]/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#E11D2F]" />
                </div>
                <h3 className="font-semibold text-white text-[14px] mb-2 leading-snug">{title}</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">{text}</p>
              </div>
            ))}

            {/* TÜV cert badge */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#E11D2F]/8 to-transparent border border-[#E11D2F]/20 rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#E11D2F]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} className="text-[#E11D2F]" />
              </div>
              <div>
                <p className="text-white font-bold text-[13px]">TÜV Rheinland Zertifikat</p>
                <p className="text-white/40 text-[12px]">ID: 0217466029 · Gültig bis 18.12.2028 · Anerkannt von allen deutschen Versicherungen</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
