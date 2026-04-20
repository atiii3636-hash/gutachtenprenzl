import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bezirke = [
  { name: "KFZ Gutachter Berlin Pankow", href: "/kfz-sachverstaendiger-berlin-pankow", sub: "Prenzlauer Berg, Weißensee, Karow" },
  { name: "KFZ Gutachter Prenzlauer Berg", href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", sub: "Schönhauser Allee, Prenzlauer Allee" },
  { name: "KFZ Gutachter Berlin Mitte", href: "/kfz-sachverstaendiger-berlin-mitte", sub: "Alexanderplatz, Hackescher Markt" },
  { name: "KFZ Gutachter Kreuzberg", href: "/kfz-sachverstaendiger-berlin-kreuzberg", sub: "Bergmannkiez, Kottbusser Tor" },
  { name: "KFZ Gutachter Friedrichshain", href: "/kfz-sachverstaendiger-berlin-friedrichshain", sub: "Frankfurter Allee, Warschauer Str." },
  { name: "KFZ Gutachter Neukölln", href: "/kfz-sachverstaendiger-berlin-neukoelln", sub: "Karl-Marx-Straße, Sonnenallee" },
  { name: "KFZ Gutachter Schöneberg", href: "/kfz-sachverstaendiger-berlin-schoeneberg", sub: "Nollendorfplatz, Innsbrucker Platz" },
  { name: "KFZ Gutachter Tempelhof", href: "/kfz-sachverstaendiger-berlin-tempelhof", sub: "Tempelhofer Damm, Mariendorf" },
  { name: "KFZ Gutachter Charlottenburg", href: "/kfz-sachverstaendiger-berlin-charlottenburg", sub: "Kurfürstendamm, Westend" },
  { name: "KFZ Gutachter Steglitz", href: "/kfz-sachverstaendiger-berlin-steglitz", sub: "Schloßstraße, Lichterfelde" },
  { name: "KFZ Gutachter Spandau", href: "/kfz-sachverstaendiger-berlin-spandau", sub: "Heerstraße, Spandauer Altstadt" },
  { name: "KFZ Gutachter Reinickendorf", href: "/kfz-sachverstaendiger-berlin-reinickendorf", sub: "Tegel, Wittenau" },
  { name: "KFZ Gutachter Lichtenberg", href: "/kfz-gutachter-lichtenberg", sub: "Fennpfuhl, Rummelsburg, Karlshorst" },
  { name: "KFZ Gutachter Marzahn", href: "/kfz-sachverstaendiger-berlin-marzahn", sub: "Marzahn-Hellersdorf, Biesdorf" },
  { name: "KFZ Gutachter Köpenick", href: "/kfz-sachverstaendiger-berlin-koepenick", sub: "Treptow, Grünau, Schmöckwitz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#080D14] pt-14 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
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
            <div className="flex gap-2">
              {["📷", "💬", "🎵"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/4 hover:bg-white/8 border border-white/8 hover:border-white/16 rounded-lg flex items-center justify-center text-[14px] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["#leistungen|Leistungen", "#ablauf|Ablauf", "#vorteile|Vorteile", "#kontakt|Kontakt"].map((item) => {
                const [href, label] = item.split("|");
                return (
                  <li key={href}>
                    <a href={href} className="text-[15px] text-white/45 hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/30 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4915560003661" className="flex items-center gap-2 text-[15px] text-white/45 hover:text-white transition-colors">
                  <Phone size={13} className="text-[#E11D2F]" />
                  +49 155 60003661
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

        {/* Bezirke – interne Links für SEO */}
        <div className="pt-10 pb-6 border-t border-white/6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25 mb-5">
            KFZ Sachverständiger in allen Berliner Bezirken
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-3">
            {bezirke.map((b) => (
              <li key={b.href}>
                <Link href={b.href} className="text-[13px] text-white/45 hover:text-white transition-colors leading-snug block">
                  {b.name}
                </Link>
                <span className="text-[11px] text-white/20 leading-tight block mt-0.5">{b.sub}</span>
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
