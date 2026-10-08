"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

// "Partner werden" steht bewusst nur im Footer – sechs Punkte sind das Maximum,
// das neben Bewertung und Buttons in die Leiste passt.
const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/flotten-partner", label: "Flotten & Gewerbe" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/faelle", label: "Fälle" },
  { href: "/videos", label: "Videos" },
  { href: "/faq", label: "FAQ" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/standorte", label: "Standorte" },
  { href: "/kontakt", label: "Kontakt" },
];

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY";

export default function NavbarNeu() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#050507]/92 backdrop-blur-xl border-white/8 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-[#050507]/80 to-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 flex items-center justify-between h-[68px] gap-4">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logos/logo-full.png"
            alt="Gutachten Prenzl – Kfz Sachverständiger"
            width={473}
            height={118}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden xl:flex items-center gap-7 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
          {/* Google-Rating direkt in der Leiste */}
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pr-4 border-r border-white/10 group"
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </span>
            <span className="text-[12px] text-white/45 group-hover:text-white/80 transition-colors whitespace-nowrap">
              <strong className="text-white font-bold">5,0</strong> · {REVIEW_COUNT}
            </span>
          </a>

          <LanguageSwitcher />
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-[13.5px] font-bold text-white bg-[#E11D2F] hover:bg-[#C11527] px-4 py-2.5 rounded-lg shadow-[0_4px_20px_rgba(225,29,47,0.3)] transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
          >
            <Phone size={14} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp-Chat starten"
            className="flex items-center justify-center w-10 h-10 text-white bg-white/[0.06] hover:bg-[#25D366] border border-white/12 hover:border-[#25D366] rounded-lg transition-all duration-200"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        {/* Mobil */}
        <div className="xl:hidden flex items-center gap-1.5">
          <LanguageSwitcher />
          <a
            href={PHONE_HREF}
            className={`flex items-center gap-1.5 text-[13.5px] font-bold text-white bg-[#E11D2F] px-4 py-2.5 rounded-lg active:scale-[0.98] transition-all duration-300 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <Phone size={14} />
            Anrufen
          </a>
          <button
            className="text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <span className="relative block w-5 h-5">
              <Menu size={20} className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X size={20} className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#050507]/98 backdrop-blur-xl border-t border-white/8 animate-menu-drop">
          <div className="px-5 py-4 flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[15px] font-medium text-white/60 hover:text-white py-3.5 border-b border-white/6"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-[14px] font-bold text-white bg-[#E11D2F] px-4 py-3.5 rounded-lg active:scale-[0.98] transition-transform"
              >
                <Phone size={15} />
                Anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[14px] font-bold text-white bg-[#25D366] px-4 py-3.5 rounded-lg active:scale-[0.98] transition-transform"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
