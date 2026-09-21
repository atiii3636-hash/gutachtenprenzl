import Image from "next/image";
import type { Praxisfall } from "@/lib/bezirk-content";

/**
 * Die Falldarstellung: Bilder oben, Eckdaten, Schadenbild, Zahlen, Fazit.
 *
 * Die Abschnittstitel sind h2 und nicht wie im Bezirks-Template nur gestylte
 * Absätze. Auf der Fallseite ist die Schadenbeschreibung der eigentliche
 * Inhalt, nicht ein Einschub in einer Bezirksseite — sie soll auch in der
 * Dokumentstruktur als Abschnitt auftauchen. Optisch ändert sich dadurch
 * nichts, die Klassen bleiben dieselben.
 *
 * Ein nahezu gleiches Markup steht noch einmal inline in
 * components/bezirk-page-template.tsx. Bewusst nicht angefasst: die
 * Bezirksseiten laufen und stehen im Index. Wenn sich das Layout hier das
 * nächste Mal ändert, den Block dort durch diese Komponente ersetzen.
 */
export default function FallKarte({ fall }: { fall: Praxisfall & { bauteile?: string[] } }) {
  const { bilder, monat, ort, fahrzeug, unfallart, schadenbild, ergebnis, fazit, bauteile } = fall;

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

        <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
          Schadenbild
        </h2>
        {schadenbild.map((para, i) => (
          <p key={i} className="text-white/55 text-[15px] leading-relaxed mb-4">{para}</p>
        ))}

        {bauteile && bauteile.length > 0 && (
          <div className="mt-7 pt-7 border-t border-white/8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
              Betroffene Bauteile und Maßnahmen
            </h2>
            <ul className="space-y-2">
              {bauteile.map((b) => (
                <li key={b} className="text-white/55 text-[14.5px] leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-white/25" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7 pt-7 border-t border-white/8">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
            Ergebnis im Gutachten
          </h2>
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
