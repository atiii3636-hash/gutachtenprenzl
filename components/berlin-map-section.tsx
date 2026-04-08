"use client";
import { MapPin, Zap } from "lucide-react";

const einsatzgebiete = [
  "Prenzlauer Berg",
  "Mitte",
  "Charlottenburg",
  "Friedrichshain",
  "Kreuzberg",
  "Neukölln",
  "Schöneberg",
  "Tempelhof",
  "Steglitz",
  "Spandau",
  "Reinickendorf",
  "Marzahn",
  "Lichtenberg",
  "Köpenick",
  "Pankow",
];

export default function BerlinMapSection() {
  return (
    <section className="bg-[#080D14] py-20 px-5 border-t border-white/6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <MapPin size={12} />
            Einsatzgebiet Berlin & Umland
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-4">
            Wir kommen in <span className="text-[#E11D2F]">alle Bezirke</span>
          </h2>
          <p className="text-white/45 text-[16px] max-w-xl mx-auto">
            Als mobiler KFZ-Sachverständiger sind wir in ganz Berlin für Sie da —
            wir kommen direkt zu Ihnen, egal in welchem Bezirk.
          </p>
        </div>

        {/* Status badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[13px] font-bold text-white/70 uppercase tracking-wider">Einsatzteam Status: Aktiv</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#E11D2F]" />
              <span className="text-[13px] font-bold text-white/70">Garantiert <span className="text-white">~30 Min.</span> Anfahrt</span>
            </div>
          </div>
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-14">
          {einsatzgebiete.map((ort) => (
            <a
              key={ort}
              href="#kontakt"
              className="group flex items-center gap-1.5 bg-white/4 hover:bg-[#E11D2F]/12 border border-white/8 hover:border-[#E11D2F]/40 text-white/60 hover:text-white px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
            >
              <MapPin size={11} className="text-white/25 group-hover:text-[#E11D2F] transition-colors flex-shrink-0" />
              {ort}
            </a>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-8 text-center">
          <p className="text-[17px] text-white/70 leading-relaxed italic max-w-2xl mx-auto mb-6">
            „Egal wo in Berlin — wir sind Ihr Partner. Wir kommen direkt zu Ihnen und kümmern uns um alles: vom Gutachten bis zur vollständigen Regulierung durch die Versicherung."
          </p>
          {/* SEO text */}
          <p className="text-[12px] text-white/25 leading-relaxed max-w-3xl mx-auto">
            KFZ-Sachverständiger Berlin · Unfallgutachten in{" "}
            <strong className="text-white/35">
              Prenzlauer Berg, Mitte, Charlottenburg, Friedrichshain, Kreuzberg, Neukölln, Schöneberg, Tempelhof, Steglitz, Spandau, Reinickendorf, Marzahn, Lichtenberg, Köpenick und Pankow
            </strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
