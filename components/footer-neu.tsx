import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const bezirke = [
  { name: "Pankow", href: "/kfz-sachverstaendiger-berlin-pankow" },
  { name: "Prenzlauer Berg", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg" },
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
  { name: "Lichtenberg", href: "/kfz-gutachter-lichtenberg" },
  { name: "Marzahn", href: "/kfz-sachverstaendiger-berlin-marzahn" },
  { name: "Köpenick", href: "/kfz-sachverstaendiger-berlin-koepenick" },
];

const leistungen = [
  { href: "/neu/schadengutachten", label: "Schadengutachten" },
  { href: "/neu/wertgutachten", label: "Wertgutachten" },
  { href: "/neu/wertminderung", label: "Wertminderung" },
  { href: "/neu/restwertermittlung", label: "Restwertermittlung" },
];

const nav = [
  { href: "/neu/leistungen", label: "Leistungen" },
  { href: "/neu/flotten-partner", label: "Flotten & Gewerbe" },
  { href: "/neu/partner-werden", label: "Partner werden" },
  { href: "/neu/ratgeber", label: "Ratgeber" },
  { href: "/neu/ueber-uns", label: "Über uns" },
  { href: "/neu/standorte", label: "Standorte" },
  { href: "/neu/kontakt", label: "Kontakt" },
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
