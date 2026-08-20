import { MapPin, Zap } from "lucide-react";
import Link from "next/link";

const einsatzgebiete = [
  { name: "Prenzlauer Berg", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg" },
  { name: "Mitte", href: "/kfz-sachverstaendiger-berlin-mitte" },
  { name: "Charlottenburg", href: "/kfz-sachverstaendiger-berlin-charlottenburg" },
  { name: "Friedrichshain", href: "/kfz-sachverstaendiger-berlin-friedrichshain" },
  { name: "Kreuzberg", href: "/kfz-sachverstaendiger-berlin-kreuzberg" },
  { name: "Neukölln", href: "/kfz-sachverstaendiger-berlin-neukoelln" },
  { name: "Schöneberg", href: "/kfz-sachverstaendiger-berlin-schoeneberg" },
  { name: "Tempelhof", href: "/kfz-sachverstaendiger-berlin-tempelhof" },
  { name: "Steglitz", href: "/kfz-sachverstaendiger-berlin-steglitz" },
  { name: "Spandau", href: "/kfz-sachverstaendiger-berlin-spandau" },
  { name: "Reinickendorf", href: "/kfz-sachverstaendiger-berlin-reinickendorf" },
  { name: "Marzahn", href: "/kfz-sachverstaendiger-berlin-marzahn" },
  { name: "Lichtenberg", href: "/kfz-gutachter-lichtenberg" },
  { name: "Köpenick", href: "/kfz-sachverstaendiger-berlin-koepenick" },
  { name: "Pankow", href: "/kfz-sachverstaendiger-berlin-pankow" },
];

export default function BerlinMapSection() {
  return (
    <section className="bg-[#080D14] py-16 md:py-24 px-5 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            Einsatzgebiet
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight mb-4">
            KFZ Sachverständiger in ganz Berlin
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mx-auto leading-relaxed">
            Als mobiler KFZ-Gutachter sind wir in allen Berliner Bezirken für Sie da —
            wir kommen direkt zu Ihnen, egal wo der Unfall war.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#0C1420] border border-white/8 rounded-full px-5 py-2.5 mt-5">
            <Zap size={14} className="text-[#E11D2F]" />
            <span className="text-[13px] font-semibold text-white/60">
              Anfahrt in <span className="text-white">~30 Minuten</span> — berlinweit
            </span>
          </div>
        </div>

        {/* District links */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12" data-reveal>
          {einsatzgebiete.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="group flex items-center gap-1.5 bg-[#0C1420] hover:bg-[#E11D2F]/10 border border-white/8 hover:border-[#E11D2F]/40 text-white/60 hover:text-white px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
            >
              <MapPin size={11} className="text-white/25 group-hover:text-[#E11D2F] transition-colors flex-shrink-0" />
              {name}
            </Link>
          ))}
        </div>

        {/* SEO text */}
        <p className="text-[14px] text-white/35 leading-relaxed max-w-3xl mx-auto text-center" data-reveal>
          Als <strong className="text-white/60">KFZ Sachverständiger Berlin</strong> und{" "}
          <strong className="text-white/60">KFZ Gutachter Berlin</strong> erstellen wir TÜV-zertifizierte
          Unfallgutachten in allen Berliner Bezirken — von{" "}
          <strong className="text-white/60">Prenzlauer Berg</strong> über{" "}
          <strong className="text-white/60">Mitte, Charlottenburg, Friedrichshain, Kreuzberg, Neukölln</strong> bis
          nach <strong className="text-white/60">Tempelhof, Steglitz, Spandau, Reinickendorf, Marzahn,
          Lichtenberg, Köpenick und Pankow</strong>.
        </p>
      </div>
    </section>
  );
}
