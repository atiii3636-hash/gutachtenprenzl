const stats = [
  { val: "0 €", label: "Bei Fremdverschulden" },
  { val: "24h", label: "Gutachten fertig" },
  { val: "TÜV", label: "Zertifiziert" },
  { val: "24/7", label: "Erreichbar" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="bg-[#080D14] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map(({ val, label }, i) => (
            <div
              key={val}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="text-center md:border-l md:border-white/8 md:first:border-l-0 md:px-6"
            >
              <div className="font-display font-black text-white text-[clamp(30px,4.5vw,44px)] leading-none mb-1.5">
                {val}
              </div>
              <div className="text-[13px] text-white/40 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
