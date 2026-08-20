const steps = [
  {
    num: "1",
    title: "Schaden melden",
    desc: "Online in 2 Minuten oder direkt per Notruf-Hotline — wie es Ihnen lieber ist.",
  },
  {
    num: "2",
    title: "Persönliche Rückmeldung in 30 Min.",
    desc: "Sie sprechen direkt mit Ihrem Sachverständigen — kein Callcenter, keine Warteschleife.",
  },
  {
    num: "3",
    title: "Termin vor Ort, binnen 24h",
    desc: "Wir kommen zu Ihnen, egal in welchem Berliner Bezirk.",
  },
  {
    num: "4",
    title: "Gutachten & Regulierung durch uns",
    desc: "Wir übermitteln direkt an die Versicherung — Sie müssen sich um nichts mehr kümmern.",
  },
];

export default function TrustStepsSection() {
  return (
    <section id="vertrauen" className="relative bg-[#080D14] py-16 md:py-20 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-10" data-reveal>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[38px] mb-3">
            Ab jetzt kümmern wir uns
          </h2>
          <p className="text-white/50 text-[16px] leading-relaxed">
            Sie müssen nichts wissen und nichts organisieren — wir führen Sie Schritt für
            Schritt durch den gesamten Prozess.
          </p>
        </div>

        <div>
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex items-stretch gap-4"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <span className="w-9 h-9 rounded-full bg-white text-[#080D14] font-display font-extrabold text-[15px] flex items-center justify-center">
                  {num}
                </span>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 my-1.5 bg-white/15" />
                )}
              </div>
              <div className={i < steps.length - 1 ? "pb-7" : ""}>
                <h3 className="font-display font-bold text-white text-[17px] mb-1">{title}</h3>
                <p className="text-white/50 text-[14.5px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-Hinweis zum Weiterscrollen */}
      <a
        href="#schaden"
        aria-label="Weiter scrollen"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/50 transition-colors animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
