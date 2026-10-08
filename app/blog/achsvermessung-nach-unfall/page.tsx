import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Clock } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

const URL = "https://gutachtenprenzl.de/blog/achsvermessung-nach-unfall";
const TITLE = "Achsvermessung nach dem Unfall: wann sie nötig ist";
const DESCRIPTION = "Nach einem Anstoß am Rad oder Radlauf kann die Achse verstellt oder beschädigt sein. Wann eine Achsvermessung ins Gutachten gehört und wer sie zahlt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  author: { "@type": "Organization", name: "Gutachten Prenzl", url: "https://gutachtenprenzl.de" },
  publisher: {
    "@type": "LocalBusiness",
    name: "Gutachten Prenzl",
    url: "https://gutachtenprenzl.de",
    logo: { "@type": "ImageObject", url: "https://gutachtenprenzl.de/logos/logo-512.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const sections: { h: string; p: string[] }[] = [
  {
    "h": "Warum die Achse nach einem Anstoß geprüft werden muss",
    "p": [
      "Die Achsgeometrie (Spur, Sturz und Nachlauf) legt fest, wie das Rad zur Fahrbahn steht. Ein Anstoß in Höhe des Rades kann Querlenker, Spurstange oder Achsschenkel verbiegen, ohne dass außen mehr zu sehen ist als ein Kratzer. Die Folgen kommen später: ungleichmäßiger Reifenverschleiß, ein Fahrzeug, das zur Seite zieht, im schlimmsten Fall ein Bauteil, das unter Last nachgibt.",
      "Deshalb schreibt ein Gutachten bei Schäden im Bereich von Rad und Radlauf eine Achsvermessung vor, bevor repariert wird. Liegen die Messwerte außerhalb der Herstellervorgaben, wird die Reparatur um die betroffenen Achsbauteile erweitert. Ohne Messung bleibt das Risiko beim Fahrzeughalter."
    ]
  },
  {
    "h": "Wann eine Achsvermessung ins Gutachten gehört",
    "p": [
      "Wir weisen sie aus, wenn der Anstoß Rad, Reifen, Felge oder Radlauf betrifft, wenn ein Reifen aus Sicherheitsgründen ersetzt werden muss oder wenn die Anstoßintensität es nahelegt. Wird ein Reifen getauscht, kommt der Reifen derselben Achse meist mit dazu, damit kein Profilunterschied entsteht.",
      "Manchmal ist die Messung schon im Gutachten gelaufen. Dann stehen die Ergebnisse dort und die Reparatur richtet sich danach. Ist sie nur als erforderlich vermerkt, muss die Werkstatt vor Reparaturbeginn messen und uns bei Abweichungen sofort informieren, damit wir nachbesichtigen können."
    ]
  },
  {
    "h": "Wer die Achsvermessung bezahlt",
    "p": [
      "Bei einem Haftpflichtschaden, an dem Sie nicht schuld sind, gehören unfallbedingt erforderliche Messungen zu den Reparaturkosten. Die Versicherung des Unfallgegners ersetzt sie, sofern sie im Gutachten als erforderlich begründet sind. Genau deshalb ist die Begründung wichtig: Ein Kostenvoranschlag aus der Werkstatt ohne Messwerte lässt sich leichter kürzen als ein Gutachten, das den Anlass benennt.",
      "Bei einem Kaskoschaden hängt es von Ihrem Vertrag ab. Sprechen Sie vorher mit uns oder Ihrer Versicherung, bevor Sie Posten weglassen."
    ]
  },
  {
    "h": "Was wir bei einem Tesla Model Y gefunden haben",
    "p": [
      "Ein Beispiel aus unserer Arbeit: Ein Model Y war hinten rechts angestoßen worden. Außen sah man Kratzer an Tür und Radlaufverbreiterung. Die Achsvermessung ergab eine beschädigte Achsgeometrie. Querlenker hinten unten, Achsschenkel mit Radlagergehäuse und Spurstangenstrebe auf der rechten Seite mussten erneuert werden, weil sich nicht gewährleisten ließ, dass sie unbeschädigt waren."
    ]
  }
];

const links = [
  {
    "href": "/faelle",
    "label": "Alle Fälle aus der Praxis"
  },
  {
    "href": "/blog/was-tun-nach-unfall-berlin",
    "label": "Was tun nach einem Unfall in Berlin?"
  },
  {
    "href": "/kostenvoranschlag-oder-gutachten",
    "label": "Kostenvoranschlag oder Gutachten?"
  },
  {
    "href": "/kfz-gutachten-berlin",
    "label": "Kfz Gutachten Berlin, unsere Leistung"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="px-5 pt-16 pb-12">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-[13px] transition-colors mb-8">
            <ArrowLeft size={14} />
            Zurück zum Ratgeber
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-full">
              Technik
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              4 Min. Lesezeit
            </span>
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Achsvermessung<br />
            <span className="text-[#E11D2F]">nach dem Unfall</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed">Ein Kratzer an der Tür, eine beschädigte Radlaufverbreiterung, ein Reifen mit Schleifspur. Von außen wirkt das harmlos. Ob an der Achse etwas verzogen ist, sieht man erst, wenn gemessen wird.</p>
          <div className="mt-6 flex items-center gap-2 text-white/30 text-[13px]">
            <span>Von</span>
            <span className="text-white/60 font-semibold">Gutachten Prenzl</span>
            <span>· TÜV-zertifiziertes Sachverständigenbüro Berlin · Oktober 2026</span>
          </div>
        </div>
      </section>

      <section className="bg-[#050507] px-5 py-14">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 space-y-8 text-white/55 text-[15px] leading-relaxed">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display font-black text-2xl text-white uppercase mb-4">{s.h}</h2>
                {s.p.map((t, i) => (
                  <p key={i} className="mb-4 last:mb-0">{t}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E11D2F] mb-2">Aus der Praxis</p>
            <p className="text-white/70 text-[14px] leading-relaxed mb-3">Tesla Model Y, hinten rechts angefahren: außen Kratzer, in der Messung eine beschädigte Achsgeometrie. Reparaturkosten 6.040,34 Euro netto, dazu 486 Euro merkantiler Minderwert.</p>
            <Link href="/faelle/achsschaden-tesla-model-y-mitte" className="text-[#E11D2F] text-[14px] font-semibold hover:underline">
              Den Fall mit Bauteilliste und Zahlen lesen
            </Link>
          </div>

          <div className="pt-6 border-t border-white/8">
            <h3 className="font-semibold text-white text-[14px] mb-4">Weiterführende Artikel</h3>
            <div className="space-y-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                  <ArrowLeft size={14} className="rotate-180" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">Anstoß am Rad?</h2>
          <p className="text-white/80 text-[15px] mb-8">Ich komme zu Ihrem Fahrzeug, messe nach und sage Ihnen vor der Reparatur, was wirklich beschädigt ist.</p>
          <a
            href="tel:+4915560003661"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            <Phone size={18} />
            0155 60003661
          </a>
        </div>
      </section>

      <FooterNeu />
    </div>
  );
}
