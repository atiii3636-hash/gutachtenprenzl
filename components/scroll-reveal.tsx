"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Blendet Elemente mit [data-reveal] ein, sobald sie in den sichtbaren Bereich kommen.
 *
 * Wichtig: Next.js wechselt Seiten ohne Neuladen. Ein einmalig laufendes Skript
 * würde die Elemente der Folgeseiten nie erfassen, diese blieben dauerhaft
 * unsichtbar. Deshalb hängt der Effekt an `pathname` und wird bei jedem
 * Seitenwechsel neu aufgesetzt.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;

    // Kein IntersectionObserver verfügbar: lieber alles sofort zeigen als nichts.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        eintraege.forEach((eintrag) => {
          if (eintrag.isIntersecting) {
            eintrag.target.classList.add("is-visible");
            beobachter.unobserve(eintrag.target);
          }
        });
      },
      // Etwas früher auslösen, damit nichts erst am unteren Rand aufpoppt.
      { rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => beobachter.observe(el));
    return () => beobachter.disconnect();
  }, [pathname]);

  return null;
}
