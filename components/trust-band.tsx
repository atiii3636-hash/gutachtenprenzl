const insurers = ["Allianz", "DEVK", "R+V", "HUK-Coburg", "AXA", "Zurich", "Generali"];

export default function TrustBand() {
  return (
    <div className="bg-[#080D14] py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <p data-reveal className="text-center text-[12px] font-semibold uppercase tracking-[3px] text-white/35 mb-8">
          Unabhängig — Gutachten gehen u. a. an
        </p>
        <div data-reveal style={{ transitionDelay: "100ms" }} className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
          {insurers.map((name) => (
            <span
              key={name}
              className="font-display font-extrabold text-[16px] tracking-widest text-white/25 hover:text-white/50 transition-colors duration-300 uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
