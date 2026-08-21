// Standortkarte für Leistungs- und Bezirksseiten.
// Lokaler Standortbeleg für Google und praktischer Hinweis für Kunden, die doch
// vorbeikommen wollen. lazy geladen, damit sie den LCP nicht belastet.
interface Props {
  /** Ziel für die Überschrift, z. B. "Pankow". Ohne Angabe: neutrale Variante. */
  bezirk?: string;
  /** Ungefähre Anfahrtszeit in Minuten. Nur zusammen mit bezirk sinnvoll. */
  minuten?: number;
  variant?: "dark" | "light";
}

export default function StandortKarte({ bezirk, minuten, variant = "dark" }: Props) {
  const dark = variant === "dark";

  return (
    <section
      className={`px-5 py-14 border-t ${
        dark ? "bg-[#050507] border-white/6" : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`font-display font-black text-2xl md:text-3xl uppercase mb-3 ${
            dark ? "text-white" : "text-[#080D14]"
          }`}
        >
          {bezirk ? `Von unserem Büro nach ${bezirk}` : "Unser Sachverständigenbüro in Berlin"}
        </h2>
        <p
          className={`text-[15px] leading-relaxed mb-6 ${
            dark ? "text-white/50" : "text-gray-600"
          }`}
        >
          Sie finden uns an der Prenzlauer Allee 88 in 10405 Berlin, wenige Minuten vom
          S-Bahnhof Prenzlauer Allee.{" "}
          {bezirk && minuten
            ? `Nach ${bezirk} sind wir in etwa ${minuten} Minuten unterwegs.`
            : "In den meisten Fällen kommen wir aber zu Ihnen, nicht umgekehrt."}
        </p>
        <div
          className={`rounded-2xl overflow-hidden border ${
            dark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <iframe
            title={
              bezirk
                ? `Anfahrt von Gutachten Prenzl nach ${bezirk}`
                : "Standort Gutachten Prenzl, Prenzlauer Allee 88, 10405 Berlin"
            }
            src="https://www.google.com/maps?q=Prenzlauer%20Allee%2088,%2010405%20Berlin&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
