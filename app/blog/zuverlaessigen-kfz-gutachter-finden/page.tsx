import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  title: { absolute: "Zuverlässigen Kfz-Gutachter finden: 7 Prüfpunkte für Berlin" },
  description:
    "Woran Sie einen seriösen Kfz-Gutachter in Berlin erkennen: Zertifizierung, Unabhängigkeit, Kosten, Tempo und Warnzeichen. Mit Checkliste für das erste Telefonat.",
  alternates: { canonical: "https://gutachtenprenzl.de/blog/zuverlaessigen-kfz-gutachter-finden" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Zuverlässigen Kfz-Gutachter finden: 7 Prüfpunkte für Berlin",
  description:
    "Woran Sie einen seriösen Kfz-Gutachter in Berlin erkennen: Zertifizierung, Unabhängigkeit, Kosten, Tempo und Warnzeichen.",
  url: "https://gutachtenprenzl.de/blog/zuverlaessigen-kfz-gutachter-finden",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "Gutachten Prenzl", url: "https://gutachtenprenzl.de" },
  publisher: {
    "@type": "LocalBusiness",
    name: "Gutachten Prenzl",
    url: "https://gutachtenprenzl.de",
    logo: { "@type": "ImageObject", url: "https://gutachtenprenzl.de/logos/logo-512.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://gutachtenprenzl.de/blog/zuverlaessigen-kfz-gutachter-finden",
  },
};

const pruefpunkte = [
  {
    titel: "Nachprüfbare Qualifikation",
    text: "Die Bezeichnung „Kfz-Sachverständiger“ ist nicht geschützt, jeder darf sie führen. Verlässlich sind zwei Wege: die öffentliche Bestellung und Vereidigung durch die IHK oder die Personenzertifizierung durch eine akkreditierte Stelle wie den TÜV Rheinland. Beides können Sie nachfragen und überprüfen. Bei uns ist es der TÜV Rheinland, Zertifikat-ID 0217466029.",
  },
  {
    titel: "Unabhängigkeit von Werkstatt und Versicherung",
    text: "Fragen Sie direkt, wer den Auftrag vermittelt hat und wer das Honorar am Ende zahlt. Ein Gutachter, der von einer Werkstatt oder einer Versicherung Aufträge bekommt, bewertet nicht unbedingt falsch, aber er hat einen Grund, es nicht zu tun. Mehr dazu im Vergleich zwischen eigenem Gutachter und Versicherungsgutachter.",
  },
  {
    titel: "Besichtigung am Fahrzeug",
    text: "Seriös ist nur ein Gutachten, für das der Sachverständige das Auto gesehen hat. Ein Gutachter, der „aus den Fotos“ einen Betrag nennt, kann Vorschäden, Achsschäden oder verdeckte Verformungen nicht erkennen. Gut ist ein Vor-Ort-Termin bei Ihnen zu Hause, bei der Arbeit oder in der Werkstatt.",
  },
  {
    titel: "Ein vollständiges Gutachten",
    text: "Im Gutachten sollten Reparaturkosten, Wertminderung, Wiederbeschaffungs- und Restwert, Reparaturdauer und der Nutzungsausfall-Tagessatz einzeln ausgewiesen sein. Fehlt eine Position, fehlt sie später auch in der Auszahlung. Ein Kostenvoranschlag kann das nicht leisten.",
  },
  {
    titel: "Klare Aussage zu den Kosten",
    text: "Bei einem unverschuldeten Unfall zahlt in der Regel die Haftpflichtversicherung der Gegenseite das Honorar, wenn der Schaden über der Bagatellgrenze liegt. Lassen Sie sich vorher sagen, ob das für Ihren Fall gilt und was passiert, wenn die Versicherung das Honorar kürzt. Wer darauf nur ausweichend antwortet, ist kein guter Start.",
  },
  {
    titel: "Realistische Zeitangaben",
    text: "Eine Besichtigung dauert meist 30 bis 60 Minuten, das fertige Gutachten liegt bei uns in der Regel innerhalb von 24 Stunden vor. Misstrauisch sollten Sie bei Terminen sein, die „irgendwann nächste Woche“ stattfinden, wenn Ihr Auto bis dahin unrepariert steht und Sie Nutzungsausfall verlieren.",
  },
  {
    titel: "Hilfe, wenn die Versicherung kürzt",
    text: "Viele Versicherungen kürzen einzelne Positionen. Ein guter Sachverständiger begründet sein Gutachten dann schriftlich gegenüber der Versicherung, ohne Aufpreis. Fragen Sie vorher, ob das im Preis enthalten ist.",
  },
];

const warnzeichen = [
  "Der Gutachter drängt, noch am Unfallort zu unterschreiben.",
  "Der Preis wird ohne Besichtigung genannt.",
  "Sie sollen Vorkasse zahlen, obwohl die Gegenseite haftet.",
  "Die Werkstatt „empfiehlt“ genau einen Gutachter und will das Auto gleich behalten.",
  "Es gibt keine Angabe, wer den Sachverständigen zertifiziert hat.",
  "Das Gutachten kommt erst nach mehreren Tagen oder nur auf Nachfrage.",
];

export default function ZuverlaessigenGutachterFinden() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="px-5 pt-16 pb-12">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-[13px] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Zurück zum Ratgeber
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-full">
              Gutachter wählen
            </span>
            <span className="flex items-center gap-1 text-white/30 text-[12px]">
              <Clock size={11} />
              4 Min. Lesezeit
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-5">
            Zuverlässigen Kfz-Gutachter <span className="text-[#E11D2F]">finden</span>
          </h1>

          <p className="text-white/55 text-[16px] leading-relaxed">
            Nach einem Unfall suchen die meisten in Ruhe nach einem guten Gutachter und finden zuerst
            Werbung. Hier sind die sieben Punkte, an denen Sie einen seriösen Kfz-Sachverständigen in
            Berlin erkennen, dazu die Warnzeichen und die Fragen fürs erste Telefonat.
          </p>

          <div className="mt-6 flex items-center gap-2 text-white/30 text-[13px]">
            <span>Von</span>
            <Link href="/ueber-uns" className="text-white/60 hover:text-white transition-colors font-semibold">
              Gutachten Prenzl
            </Link>
            <span>· Sachverständigenbüro Berlin</span>
          </div>
        </div>
      </section>

      <section className="bg-[#050507] px-5 py-14">
        <div className="max-w-2xl mx-auto space-y-8 text-white/55 text-[15px] leading-relaxed">
          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">Wer wählt den Gutachter aus?</h2>
            <p>
              Sie. Bei einem unverschuldeten Unfall dürfen Sie den Sachverständigen frei wählen, die
              gegnerische Versicherung kann Ihnen keinen vorschreiben. Warum das so ist, steht im Beitrag{" "}
              <Link href="/blog/recht-auf-eigenen-gutachter" className="text-[#E11D2F] hover:underline">
                Ihr Recht auf einen unabhängigen Gutachter
              </Link>
              . Wichtig ist deshalb, dass Sie wissen, worauf Sie bei der Auswahl achten.
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-5">Die 7 Prüfpunkte</h2>
            <div className="space-y-3">
              {pruefpunkte.map(({ titel, text }, i) => (
                <div key={titel} className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.03]">
                  <span className="font-display font-black text-[#E11D2F]/50 text-[22px] leading-none">{i + 1}</span>
                  <div>
                    <p className="font-bold text-white text-[15px] mb-1.5">{titel}</p>
                    <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Was ein unabhängiger Sachverständiger im Einzelnen prüft, steht auf der Seite{" "}
              <Link href="/kfz-sachverstaendiger-berlin" className="text-[#E11D2F] hover:underline">
                Kfz-Sachverständiger Berlin
              </Link>
              , die Kosten in der{" "}
              <Link href="/kosten-kfz-gutachten-berlin" className="text-[#E11D2F] hover:underline">
                Honorartabelle 2026
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">Warnzeichen</h2>
            <div className="p-5 rounded-xl border border-[#E11D2F]/25 bg-[#E11D2F]/10">
              <ul className="space-y-2 text-[#f87171]/90 text-[13.5px]">
                {warnzeichen.map((w) => (
                  <li key={w} className="flex gap-2.5">
                    <XCircle size={15} className="mt-0.5 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">Fragen fürs erste Telefonat</h2>
            <div className="p-5 rounded-xl border border-[#22c55e]/25 bg-[#22c55e]/10">
              <ul className="space-y-2 text-[#4ade80] text-[13.5px]">
                {[
                  "Wer hat Sie zertifiziert, und kann ich das nachprüfen?",
                  "Kommen Sie zum Fahrzeug, und wann ist der Termin?",
                  "Wann habe ich das Gutachten?",
                  "Zahlt bei meinem Unfall die Gegenseite, und was passiert, wenn sie kürzt?",
                  "Arbeiten Sie mit Werkstätten oder Versicherungen zusammen?",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <CheckCircle size={15} className="mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4">
              Ist der Schaden klein, brauchen Sie womöglich gar kein volles Gutachten. Wo die Grenze liegt,
              erklärt die Seite zur{" "}
              <Link href="/bagatellschaden-grenze" className="text-[#E11D2F] hover:underline">
                Bagatellschaden-Grenze
              </Link>{" "}
              und der Vergleich{" "}
              <Link href="/kostenvoranschlag-oder-gutachten" className="text-[#E11D2F] hover:underline">
                Kostenvoranschlag oder Gutachten
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-white text-xl uppercase mb-3">Gutachter in Ihrem Bezirk</h2>
            <p className="mb-4">
              Wir sitzen an der Prenzlauer Allee 88 und kommen in alle Berliner Bezirke. Die Anfahrt und die
              Besonderheiten vor Ort finden Sie auf den Bezirksseiten:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ["pankow", "Pankow"],
                ["prenzlauer-berg", "Prenzlauer Berg"],
                ["friedrichshain", "Friedrichshain"],
                ["kreuzberg", "Kreuzberg"],
                ["mitte", "Mitte"],
                ["weissensee", "Weißensee"],
                ["lichtenberg", "Lichtenberg"],
                ["hellersdorf", "Hellersdorf"],
                ["marzahn", "Marzahn"],
                ["spandau", "Spandau"],
                ["steglitz", "Steglitz"],
                ["schoeneberg", "Schöneberg"],
                ["treptow", "Treptow"],
                ["charlottenburg", "Charlottenburg"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/kfz-sachverstaendiger-berlin-${slug}`}
                  className="text-[13px] font-semibold text-white/70 hover:text-white bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 px-3.5 py-2 rounded-lg transition-all"
                >
                  Kfz-Gutachter {name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/8">
            <h3 className="font-semibold text-white text-[14px] mb-4">Weiterführende Artikel</h3>
            <div className="space-y-2">
              {[
                ["/blog/recht-auf-eigenen-gutachter", "Ihr Recht auf einen unabhängigen Gutachter"],
                ["/blog/was-tun-nach-unfall-berlin", "Was tun nach einem Unfall in Berlin?"],
                ["/eigener-gutachter-oder-versicherungsgutachter", "Eigener Gutachter oder Versicherungsgutachter?"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="flex items-center gap-2 text-[#E11D2F] text-[14px] hover:underline">
                  <ArrowLeft size={14} className="rotate-180" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">Prüfen Sie uns</h2>
          <p className="text-white/80 text-[15px] mb-8">
            Rufen Sie an und stellen Sie die Fragen von oben. Bei Fremdverschulden zahlt das Honorar in der
            Regel die gegnerische Versicherung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <Phone size={18} />
              0155 60003661
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              Schaden online melden
            </Link>
          </div>
        </div>
      </section>

      <FooterNeu />
    </div>
  );
}
