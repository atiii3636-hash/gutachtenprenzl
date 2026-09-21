import Image from "next/image";
import type { Praxisfall } from "@/lib/bezirk-content";

/**
 * Die Falldarstellung: Bilder oben, Eckdaten, Schadenbild, Zahlen, Fazit.
 *
 * Dasselbe Markup steht noch einmal inline in components/bezirk-page-template.tsx.
 * Bewusst nicht angefasst: die Bezirksseiten laufen und stehen im Index, ein
 * Umbau dort bringt heute nichts. Wenn sich das Layout hier das nächste Mal
 * ändert, den Block dort durch diese Komponente ersetzen.
 */
export default function FallKarte({ fall }: { fall: Praxisfall }) {
  const { bilder, monat, ort, fahrzeug, unfallart, schadenbild, ergebnis, fazit } = fall;

  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
      {/* Erstes Bild groß (die Totale), die Detailaufnahmen darunter als Reihe.
          So sieht man erst das Fahrzeug und dann den Schaden. */}
      {bilder && bilder.length > 0 && (
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <Image
              src={bilder[0].src}
              alt={bilder[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
          {bilder.length > 1 && (
            <div className="grid grid-cols-3 gap-px bg-white/8">
              {bilder.slice(1).map((b) => (
                <div key={b.src} className="relative aspect-[4/3] bg-[#080D14]">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 250px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="p-6 md:p-8">
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-7 pb-7 border-b border-white/8">
          {[
            ["Zeitraum", monat],
            ["Ort", ort],
            ["Fahrzeug", fahrzeug],
            ["Unfallart", unfallart],
          ].map(([label, wert]) => (
            <div key={label}>
              <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-1">{label}</dt>
              <dd className="text-white/75 text-[14.5px]">{wert}</dd>
            </div>
          ))}
        </dl>

        {schadenbild.map((para, i) => (
          <p key={i} className="text-white/55 text-[15px] leading-relaxed mb-4">{para}</p>
        ))}

        <div className="mt-7 pt-7 border-t border-white/8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
            Ergebnis im Gutachten
          </p>
          <dl className="space-y-2.5">
            {ergebnis.map(({ label, wert }) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2.5">
                <dt className="text-white/55 text-[14px]">{label}</dt>
                <dd className="font-display font-bold text-white text-[15px] whitespace-nowrap">{wert}</dd>
              </div>
            ))}
          </dl>
        </div>

        {fazit && <p className="text-white/50 text-[14px] leading-relaxed mt-6 italic">{fazit}</p>}

        <p className="text-white/25 text-[12px] leading-relaxed mt-6">
          Eigene Aufnahmen aus dem Gutachten. Anonymisiert: Kennzeichen sind abgedeckt,
          Name und Hausnummer bewusst nicht angegeben.
        </p>
      </div>
    </div>
  );
}
