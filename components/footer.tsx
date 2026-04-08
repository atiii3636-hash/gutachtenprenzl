import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

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
                  <span>Berlin Prenzlauer Berg<br />
                  <span className="text-[13px] text-white/25">10435 Berlin, Deutschland</span></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6">
          <p className="text-[14px] text-white/25">© 2026 Gutachten Prenzl. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="text-[14px] text-white/25 hover:text-white/60 transition-colors">Impressum</a>
            <a href="#" className="text-[14px] text-white/25 hover:text-white/60 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
