import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  title: { absolute: "Ratgeber: Kfz Gutachten & Unfallrecht Berlin" },
  description:
    "Ratgeber vom Sachverständigenbüro Gutachten Prenzl, TÜV-zertifiziert in Berlin. Was tun nach einem Unfall? Welche Rechte haben Sie? Alle Antworten hier.",
  alternates: { canonical: "https://gutachtenprenzl.de/blog" },
};

const articles = [
  {
    href: "/blog/achsvermessung-nach-unfall",
    title: "Achsvermessung nach dem Unfall: wann sie nötig ist",
    description:
      "Nach einem Anstoß am Rad kann die Achse beschädigt sein, ohne dass man es sieht. Wann die Messung ins Gutachten gehört und wer sie zahlt.",
    readTime: "4 Min.",
    category: "Technik",
  },
  {
    href: "/blog/elektroauto-unfall-hochvoltsystem",
    title: "Elektroauto nach dem Unfall: Hochvoltsystem prüfen",
    description:
      "Beim E-Auto lassen sich verdeckte Schäden am Hochvoltsystem nicht immer ausschließen. Was das Gutachten vorsieht und warum die Reparatur mehr Posten hat.",
    readTime: "4 Min.",
    category: "Elektroauto",
  },
  {
    href: "/blog/was-tun-nach-unfall-berlin",
    title: "Was tun nach einem Unfall in Berlin?",
    description:
      "Schritt für Schritt erklärt: Was Sie in den ersten Minuten nach einem Unfall tun müssen, um Ihren Schadensersatz vollständig zu sichern.",
    readTime: "4 Min.",
    category: "Nach dem Unfall",
  },
  {
    href: "/blog/recht-auf-eigenen-gutachter",
    title: "Ihr Recht auf einen unabhängigen Gutachter",
    description:
      "Die meisten Unfallgeschädigten wissen es nicht: Bei Fremdverschulden haben Sie das gesetzliche Recht auf einen eigenen Sachverständigen, kostenlos.",
    readTime: "3 Min.",
    category: "Ihre Rechte",
  },
  {
    href: "/blog/parkschaden-was-tun",
    title: "Parkschaden: was jetzt?",
    description:
      "Jemand hat Ihr geparktes Auto beschädigt? Was Sie jetzt tun sollten, um den Schaden vollständig ersetzt zu bekommen, auch bei Fahrerflucht.",
    readTime: "3 Min.",
    category: "Parkschaden",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />

      {/* Header */}
      <section className="px-5 pt-20 pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/30 text-[#E11D2F] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <BookOpen size={12} />
            Ratgeber von Gutachten Prenzl
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Ratgeber &<br />
            <span className="text-[#E11D2F]">Tipps nach dem Unfall</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-xl mx-auto">
            Als TÜV-zertifizierter Kfz Sachverständiger erkläre ich, welche Rechte Sie haben
            und wie Sie Ihren Schadensersatz vollständig durchsetzen.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-5 pb-20">
        <div className="max-w-3xl mx-auto space-y-4">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="block p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/6 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-full">
                  {a.category}
                </span>
                <span className="flex items-center gap-1 text-white/30 text-[12px]">
                  <Clock size={11} />
                  {a.readTime} Lesezeit
                </span>
              </div>
              <h2 className="font-display font-black text-xl text-white uppercase tracking-tight mb-2 group-hover:text-[#E11D2F] transition-colors">
                {a.title}
              </h2>
              <p className="text-white/50 text-[14px] leading-relaxed mb-4">
                {a.description}
              </p>
              <div className="flex items-center gap-1.5 text-[#E11D2F] text-[13px] font-semibold">
                Artikel lesen <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Einordnung, gibt der Übersichtsseite eigenen Inhalt statt nur Anrisstexte */}
      <section className="bg-[#050507] px-5 py-16 border-t border-white/6">
        <div className="max-w-3xl mx-auto text-white/55 text-[15px] leading-relaxed space-y-8">
          <div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-4">
              Warum dieser Ratgeber existiert
            </h2>
            <p className="mb-4">
              Bei fast jedem zweiten Auftrag höre ich denselben Satz: Das habe ich nicht
              gewusst. Dass die gegnerische Versicherung den Gutachter zahlt. Dass man den
              selbst aussuchen darf. Dass es Geld für die Tage ohne Auto gibt, auch ohne
              Mietwagen. Dass ein repariertes Auto weniger wert ist und man sich diesen
              Verlust erstatten lassen kann.
            </p>
            <p>
              Das sind keine Geheimnisse, sie stehen so im Gesetz. Nur erklärt sie einem
              niemand, wenn man gerade neben einem verbeulten Auto steht. Deshalb schreibe
              ich sie hier auf.
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-4">
              Die vier Posten, die am häufigsten fehlen
            </h2>
            <p className="mb-4">
              Wenn eine Abrechnung der Versicherung zu niedrig ausfällt, liegt es meistens
              nicht an den Reparaturkosten. Die stimmen oft. Es fehlt das Drumherum:
            </p>
            <ul className="space-y-3">
              {[
                ["Merkantile Wertminderung", "Ihr Auto ist fachgerecht repariert und trotzdem weniger wert, weil es jetzt als Unfallwagen gilt. Bei jüngeren Fahrzeugen sind das schnell vierstellige Beträge."],
                ["Nutzungsausfall", "Für jeden Tag ohne Fahrzeug steht Ihnen eine Entschädigung zu, auch wenn Sie keinen Mietwagen genommen und stattdessen die BVG benutzt haben."],
                ["Wiederbeschaffungsaufwand", "Beim Totalschaden zählt nicht, was die Reparatur kostet, sondern was Ihr Auto vorher wert war, abzüglich dessen, was das Wrack noch bringt."],
                ["Nebenkosten", "Abschleppen, An- und Abmeldung, Standgebühren, Auslagenpauschale. Kleine Beträge, die sich summieren."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E11D2F] mt-2.5" />
                  <span>
                    <strong className="text-white">{t}</strong>
                    <br />
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-4">
              Wenn Sie gerade wenig Zeit haben
            </h2>
            <p>
              Kurzfassung: Fotos machen, solange das Auto noch da steht, wo es zum Stehen
              kam. Nichts unterschreiben. Den Gutachter der Gegenseite ablehnen. Nicht
              reparieren lassen, bevor der Schaden dokumentiert ist. Und bei einem
              Totalschaden das Fahrzeug auf keinen Fall verkaufen, bevor der Restwert
              feststeht. Alles Weitere können Sie in Ruhe nachlesen, wenn der Schreck
              nachgelassen hat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">
            Unfall gehabt?
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Rufen Sie mich an, ich erkläre Ihnen in wenigen Minuten, was jetzt zu tun ist.
          </p>
          <a
            href="tel:+4915560003661"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            0155 60003661
          </a>
        </div>
      </section>

      <FooterNeu />
    </div>
  );
}
