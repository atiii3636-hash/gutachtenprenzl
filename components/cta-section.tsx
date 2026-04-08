import { Phone, MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="kontakt" className="py-20 px-5 bg-[#090E18]">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#0C1420] border border-white/8 rounded-2xl p-10 md:p-14 overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#E11D2F]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-[#E11D2F]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#E11D2F] via-[#E11D2F]/30 to-transparent" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                Unfall gehabt?<br />
                Jetzt kostenlos<br />
                beraten lassen.
              </h2>
              <p className="text-white/45 text-[15px] leading-relaxed max-w-md">
                Wir sind 24 Stunden am Tag, 7 Tage die Woche für Sie erreichbar.
                Bei unverschuldetem Unfall entstehen Ihnen <strong className="text-white/70 font-semibold">keine Kosten</strong>.
              </p>

              <div className="flex items-center gap-4 mt-7">
                <div className="flex -space-x-2">
                  {["bg-[#E11D2F]", "bg-[#1E3A5F]", "bg-[#0F3D2E]"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#0C1420]`} />
                  ))}
                </div>
                <p className="text-[13px] text-white/40">
                  Hunderte zufriedene Kunden in Berlin
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="tel:+4915560003661"
                className="flex items-center gap-3 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-bold text-[16px] px-7 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 hover:shadow-[#E11D2F]/50 transition-all hover:-translate-y-0.5 w-full md:w-auto justify-center"
              >
                <Phone size={18} />
                +49 155 60003661
              </a>
              <a
                href="mailto:info@gutachtenprenzl.de"
                className="flex items-center gap-3 bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-white font-semibold text-[14px] px-7 py-3.5 rounded-xl transition-all w-full md:w-auto justify-center"
              >
                info@gutachtenprenzl.de
              </a>
              <a
                href="https://wa.me/4915566166533"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#128C7E]/8 hover:bg-[#128C7E]/15 border border-[#25D366]/20 text-[#25D366] font-semibold text-[14px] px-7 py-3.5 rounded-xl transition-all w-full md:w-auto justify-center"
              >
                <MessageCircle size={16} />
                Per WhatsApp schreiben
              </a>
              <p className="text-[11px] text-white/25 text-center">
                Berlin Prenzlauer Berg · 24/7 erreichbar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
