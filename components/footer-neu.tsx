import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const bezirke = [
  { name: "Pankow", href: "/kfz-sachverstaendiger-berlin-pankow" },
  { name: "Prenzlauer Berg", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg" },
  { name: "Weißensee", href: "/kfz-sachverstaendiger-berlin-weissensee" },
  { name: "Mitte", href: "/kfz-sachverstaendiger-berlin-mitte" },
  { name: "Kreuzberg", href: "/kfz-sachverstaendiger-berlin-kreuzberg" },
  { name: "Friedrichshain", href: "/kfz-sachverstaendiger-berlin-friedrichshain" },
  { name: "Neukölln", href: "/kfz-sachverstaendiger-berlin-neukoelln" },
  { name: "Schöneberg", href: "/kfz-sachverstaendiger-berlin-schoeneberg" },
  { name: "Tempelhof", href: "/kfz-sachverstaendiger-berlin-tempelhof" },
  { name: "Charlottenburg", href: "/kfz-sachverstaendiger-berlin-charlottenburg" },
  { name: "Steglitz", href: "/kfz-sachverstaendiger-berlin-steglitz" },
  { name: "Spandau", href: "/kfz-sachverstaendiger-berlin-spandau" },
  { name: "Reinickendorf", href: "/kfz-sachverstaendiger-berlin-reinickendorf" },
  { name: "Lichtenberg", href: "/kfz-sachverstaendiger-berlin-lichtenberg" },
  { name: "Marzahn", href: "/kfz-sachverstaendiger-berlin-marzahn" },
  { name: "Hellersdorf", href: "/kfz-sachverstaendiger-berlin-hellersdorf" },
  { name: "Treptow", href: "/kfz-sachverstaendiger-berlin-treptow" },
  { name: "Köpenick", href: "/kfz-sachverstaendiger-berlin-koepenick" },
  { name: "Zehlendorf", href: "/kfz-sachverstaendiger-berlin-zehlendorf" },
];

const themen = [
  { name: "Was kostet ein Gutachten?", href: "/kosten-kfz-gutachten-berlin" },
  { name: "Kostenvoranschlag oder Gutachten?", href: "/kostenvoranschlag-oder-gutachten" },
  { name: "Bagatellschaden-Grenze", href: "/bagatellschaden-grenze" },
  { name: "Versicherung kürzt", href: "/versicherung-kuerzt-gutachten" },
  { name: "Werkstattbindung", href: "/werkstattbindung-versicherung" },
  { name: "Eigener Gutachter?", href: "/eigener-gutachter-oder-versicherungsgutachter" },
  { name: "Fiktive Abrechnung", href: "/fiktive-abrechnung" },
  { name: "130-Prozent-Regel", href: "/130-prozent-regelung" },
  { name: "Wiederbeschaffungswert", href: "/wiederbeschaffungswert-berechnen" },
  { name: "Vorschaden & Altschaden", href: "/vorschaden-altschaden-gutachten" },
  { name: "Mietwagen nach Unfall", href: "/mietwagen-nach-unfall" },
  { name: "Nutzungsausfall-Tabelle", href: "/nutzungsausfall-tabelle-berlin" },
  { name: "Heckauffahrunfall", href: "/heckauffahrunfall-berlin" },
  { name: "Parkschaden", href: "/parkschaden-gutachten-berlin" },
  { name: "Totalschaden", href: "/totalschaden-gutachten-berlin" },
];

const leistungen = [
  { href: "/schadengutachten", label: "Schadengutachten" },
  { href: "/wertgutachten", label: "Wertgutachten" },
  { href: "/wertminderung", label: "Wertminderung" },
  { href: "/restwertermittlung", label: "Restwertermittlung" },
  { href: "/kurzgutachten-berlin", label: "Kurzgutachten" },
  { href: "/motorradgutachten-berlin", label: "Motorradgutachten" },
  { href: "/wohnmobil-gutachten-berlin", label: "Wohnmobil-Gutachten" },
  { href: "/lkw-gutachten-berlin", label: "Transporter & Lkw" },
  { href: "/oldtimer-gutachten-berlin", label: "Oldtimer-Wertgutachten" },
  { href: "/leasinggutachten-berlin", label: "Leasinggutachten" },
  { href: "/kaskogutachten-berlin", label: "Kaskogutachten" },
  { href: "/beweissicherungsgutachten-berlin", label: "Beweissicherung" },
];

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kfz-gutachten-berlin", label: "Kfz-Gutachten Berlin" },
  { href: "/kfz-sachverstaendiger-berlin", label: "Sachverständiger Berlin" },
  { href: "/flotten-partner", label: "Flotten & Gewerbe" },
  { href: "/partner-werden", label: "Partner werden" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/faelle", label: "Fallarchiv" },
  { href: "/faq", label: "Häufige Fragen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/standorte", label: "Standorte" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function FooterNeu() {
  return (
    <footer className="border-t border-white/6 bg-[#050507] pt-14 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <Image
                src="/logos/logo-full.png"
                alt="Gutachten Prenzl – KFZ Sachverständiger"
                width={473}
                height={118}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-[15px] text-white/40 leading-relaxed max-w-xs mb-5">
              Ihr unabhängiger TÜV-zertifizierter KFZ Sachverständiger in Berlin Prenzlauer Berg.
              Schnell, seriös und auf Ihrer Seite.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {leistungen.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] text-white/45 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] text-white/45 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-[15px] text-white/45 hover:text-white transition-colors">
                  <Phone size={13} className="text-[#E11D2F]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:info@gutachtenprenzl.de" className="flex items-center gap-2 text-[15px] text-white/45 hover:text-white transition-colors">
                  <Mail size={13} className="text-[#E11D2F]" />
                  info@gutachtenprenzl.de
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-[15px] text-white/45">
                  <MapPin size={13} className="text-[#E11D2F] mt-1 flex-shrink-0" />
                  <span>Prenzlauer Allee 88<br />
                  <span className="text-[13px] text-white/25">10405 Berlin, Deutschland</span></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-6 border-t border-white/6 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25 mb-5">
            KFZ Sachverständiger in allen Berliner Bezirken
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {bezirke.map((b) => (
              <li key={b.href}>
                <Link href={b.href} className="text-[13px] text-white/45 hover:text-white transition-colors">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-6 border-t border-white/6 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25 mb-5">
            Ihre Rechte nach dem Unfall
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {themen.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-[13px] text-white/45 hover:text-white transition-colors">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6">
          <p className="text-[14px] text-white/25">© 2026 Gutachten Prenzl. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="/impressum" className="text-[14px] text-white/25 hover:text-white/60 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-[14px] text-white/25 hover:text-white/60 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
