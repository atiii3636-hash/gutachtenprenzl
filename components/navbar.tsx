"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import Image from "next/image";

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#080D14]/90 backdrop-blur-md transition-shadow duration-300 border-b ${
        scrolled ? "border-white/8 shadow-lg shadow-black/30" : "border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logos/logo-full.png"
            alt="Gutachten Prenzl – KFZ Sachverständiger"
            width={473}
            height={118}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {["#leistungen|Leistungen", "#vertrauen|Ablauf", "#vorteile|Vorteile", "#kontakt|Kontakt"].map((item) => {
            const [href, label] = item.split("|");
            return (
              <li key={href}>
                <a
                  href={href}
                  className="text-[14px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="tel:+4915560003661"
            className="flex items-center gap-2 text-[14px] font-bold text-white bg-[#E11D2F] hover:bg-[#C11527] px-4 py-2.5 rounded-full shadow-sm shadow-[#E11D2F]/25 transition-all duration-200 hover:-translate-y-px"
          >
            <Phone size={14} />
            +49 155 60003661
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-bold text-white bg-[#25D366] hover:bg-[#1FAF54] px-4 py-2.5 rounded-full shadow-sm shadow-[#25D366]/25 transition-all duration-200 hover:-translate-y-px"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobil: roter Anruf-Button blendet beim Scrollen ein und bleibt oben klebend */}
        <div className="md:hidden flex items-center gap-1">
          <a
            href="tel:+4915560003661"
            className={`flex items-center gap-1.5 text-[14px] font-bold text-white bg-[#E11D2F] px-4 py-2.5 rounded-full shadow-sm shadow-[#E11D2F]/25 active:scale-[0.98] transition-all duration-300 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <Phone size={14} />
            Anrufen
          </a>

          {/* Mobile toggle */}
          <button
            className="text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
          <span className="relative block w-5 h-5">
            <Menu size={20} className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
            <X size={20} className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0C1420]/98 backdrop-blur-md border-t border-white/6 animate-menu-drop">
          <div className="px-5 py-4 flex flex-col gap-1">
            {["#leistungen|Leistungen", "#vertrauen|Ablauf", "#vorteile|Vorteile", "#kontakt|Kontakt"].map((item) => {
              const [href, label] = item.split("|");
              return (
                <a
                  key={href}
                  href={href}
                  className="text-[15px] font-medium text-white/65 hover:text-white py-3 border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              );
            })}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href="tel:+4915560003661"
                className="flex items-center justify-center gap-2 text-[14px] font-bold text-white bg-[#E11D2F] px-4 py-3 rounded-full active:scale-[0.98] transition-transform"
              >
                <Phone size={15} />
                Anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[14px] font-bold text-white bg-[#25D366] px-4 py-3 rounded-full active:scale-[0.98] transition-transform"
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
