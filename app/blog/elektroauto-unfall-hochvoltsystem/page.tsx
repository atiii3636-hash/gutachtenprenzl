import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Clock } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

const URL = "https://gutachtenprenzl.de/blog/elektroauto-unfall-hochvoltsystem";
const TITLE = "Elektroauto nach dem Unfall: Hochvoltsystem prüfen";
const DESCRIPTION = "Nach einem Unfall mit dem E-Auto lassen sich Schäden am Hochvoltsystem nicht immer ausschließen. Was das Gutachten vorsieht und warum die Reparatur mehr kostet.";

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
    "h": "Warum das Hochvoltsystem im Gutachten auftaucht",
    "p": [
      "Hochvoltkomponenten wie Batterie, Leitungen und Steuergeräte sind von außen nicht einsehbar. Nach einem Anstoß in ihrer Nähe lassen sich Beschädigungen deshalb nicht ausschließen, auch wenn nichts zu sehen ist. In einem solchen Fall nimmt das Gutachten eine Prüfung des Hochvoltsystems auf, um verdeckte Schäden auszuschließen. Liegen Messwerte außerhalb der Herstellervorgaben, melden wir uns zur Nachbesichtigung."
    ]
  },
  {
    "h": "Warum die Reparatur eines E-Autos mehr Posten hat",
    "p": [
      "Arbeiten am Hochvoltsystem darf nur eine Person mit passender Qualifikation ausführen. In der Kalkulation steht dafür eine eigene Vorbereitung: das Fahrzeug als Hochvoltfahrzeug identifizieren, Herstellervorgaben abrufen, den Arbeitsplatz einrichten, das System deaktivieren, gegen Wiedereinschalten sichern und die Spannungsfreiheit feststellen. Das kostet Zeit, die bei einem Verbrenner entfällt, und sie steht als Position in der Rechnung.",
      "Wer eine Werkstattrechnung mit solchen Posten sieht, sollte sie nicht vorschnell kürzen. Sie gehören zur fachgerechten Reparatur und sind im Gutachten begründet."
    ]
  },
  {
    "h": "Was Sie nach einem Anstoß selbst tun sollten",
    "p": [
      "Warnmeldungen im Display ernst nehmen und das Fahrzeug nicht weiter laden, bis es geprüft ist. Fotos vom Schaden und vom Display machen. Sich nicht auf eine Barzahlung einlassen, bevor der Schaden begutachtet ist, denn gerade bei E-Autos kommen verdeckte Positionen oft erst bei der Prüfung ans Licht.",
      "Und: Ein Gutachten gehört vor die Reparatur. Es dokumentiert, was geprüft werden musste, und sichert Ihnen die Kosten dafür bei einem Haftpflichtschaden."
    ]
  },
  {
    "h": "Ein Fall aus der Praxis",
    "p": [
      "Bei einem Tesla Model Y, hinten rechts angefahren, sah das Gutachten die Prüfung des Hochvoltsystems vor und kalkulierte die Vorbereitung des Hochvolt-Arbeitsplatzes mit. Dazu kamen die Achsbauteile, die die Achsvermessung als beschädigt auswies. Die Reparaturkosten lagen bei 23 Prozent des Wiederbeschaffungswerts, zusätzlich stand dem Halter ein merkantiler Minderwert von 486 Euro zu."
    ]
  }
];

const links = [
  {
    "href": "/faelle",
    "label": "Alle Fälle aus der Praxis"
  },
  {
    "href": "/blog/achsvermessung-nach-unfall",
    "label": "Achsvermessung nach dem Unfall"
  },
  {
    "href": "/blog/recht-auf-eigenen-gutachter",
    "label": "Ihr Recht auf einen unabhängigen Gutachter"
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
              Elektroauto
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              4 Min. Lesezeit
            </span>
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Elektroauto<br />
            <span className="text-[#E11D2F]">nach dem Unfall</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed">Bei einem Verbrenner reicht der Blick auf Stoßfänger und Kotflügel meist, um den Schaden einzuschätzen. Beim Elektroauto steckt hinter der Verkleidung Technik, die nur mit Messgerät und Fachwissen zu beurteilen ist.</p>
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
            <p className="text-white/70 text-[14px] leading-relaxed mb-3">Tesla Model Y, hinten rechts angefahren: Prüfung des Hochvoltsystems, beschädigte Achsbauteile, Reparaturdauer ca. 2 Arbeitstage.</p>
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
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">E-Auto angefahren?</h2>
          <p className="text-white/80 text-[15px] mb-8">Ich dokumentiere den Schaden am Fahrzeug, auch bei Elektroautos, und bin in Berlin meist am selben Tag bei Ihnen.</p>
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
