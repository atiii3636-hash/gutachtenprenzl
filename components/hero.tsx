import { Phone, MessageCircle, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#080D14]">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-car.jpg')`,
          }}
        />
        {/* Left-heavy overlay so text is readable, right side shows more image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D14] via-[#080D14]/80 to-[#080D14]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D14]/80 via-transparent to-[#080D14]/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full py-20">
        <div className="max-w-[680px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/70 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2F] animate-pulse" />
            TÜV-Zertifizierter KFZ-Sachverständiger · Berlin Prenzlauer Berg
          </div>

          {/* Big headline – competitor style: bold, uppercase */}
          <h1 className="font-display font-black text-[clamp(42px,7vw,80px)] leading-[0.95] tracking-tight text-white uppercase mb-6">
            Unfall<br />
            gehabt?<br />
            <span className="text-[#E11D2F]">Wir helfen.</span>
          </h1>

          <p className="text-[16px] text-white/60 leading-relaxed max-w-[480px] mb-10">
            <strong className="text-white/80 font-semibold">KFZ Sachverständiger Berlin</strong> —
            TÜV-zertifiziertes Unfallgutachten in 24 Stunden.
            Bei unverschuldetem Unfall für Sie{" "}
            <span className="text-[#22c55e] font-semibold">100% kostenlos</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[14px] px-7 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 hover:shadow-[#E11D2F]/50 transition-all hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Notfall-Anruf
            </a>
            <a
              href="#schaden"
              className="inline-flex items-center gap-2.5 bg-white text-[#080D14] font-display font-black uppercase tracking-wide text-[14px] px-7 py-4 rounded-xl shadow-lg shadow-black/20 hover:bg-gray-100 transition-all hover:-translate-y-0.5"
            >
              Schaden melden
              <ChevronRight size={16} />
            </a>
            <a
              href="https://wa.me/4915560003661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[14px] px-5 py-4 rounded-xl hover:bg-[#128C7E]/25 transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Trust stats – horizontal strip */}
          <div className="flex flex-wrap gap-6">
            {[
              { val: "24h", label: "Gutachten" },
              { val: "0 €", label: "Bei Fremdverschulden" },
              { val: "TÜV", label: "Zertifiziert" },
              { val: "24/7", label: "Erreichbar" },
            ].map(({ val, label }) => (
              <div key={val} className="flex flex-col">
                <span className="font-display font-black text-white text-[28px] leading-none">{val}</span>
                <span className="text-[11px] text-white/35 font-medium mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-white/25 uppercase tracking-widest">Scrollen</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
