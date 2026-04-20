"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080D14]/95 backdrop-blur-xl border-b border-white/6 shadow-xl shadow-black/20"
          : "bg-[#080D14]/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/logos/logo-full.png"
            alt="Gutachten Prenzl – KFZ Sachverständiger"
            width={473}
            height={118}
            className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {["#leistungen|Leistungen", "#ablauf|Ablauf", "#vorteile|Vorteile", "#kontakt|Kontakt"].map((item) => {
            const [href, label] = item.split("|");
            return (
              <li key={href}>
                <a
                  href={href}
                  className="text-[13px] font-medium text-white/60 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+4915560003661"
            className="flex items-center gap-2 text-[13px] font-medium text-white/70 hover:text-white px-3 py-2 rounded-lg border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            <Phone size={13} />
            +49 155 60003661
          </a>
          <a
            href="https://wa.me/4915560003661"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-semibold text-white bg-[#E11D2F] hover:bg-[#B91C1C] px-4 py-2 rounded-lg shadow-md shadow-[#E11D2F]/25 hover:shadow-[#E11D2F]/40 transition-all"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0E1520]/98 border-t border-white/6 px-5 py-4 flex flex-col gap-3">
          {["#leistungen|Leistungen", "#ablauf|Ablauf", "#vorteile|Vorteile", "#kontakt|Kontakt"].map((item) => {
            const [href, label] = item.split("|");
            return (
              <a
                key={href}
                href={href}
                className="text-[14px] font-medium text-white/70 hover:text-white py-2 border-b border-white/6"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            );
          })}
          <a
            href="tel:+4915560003661"
            className="flex items-center gap-2 text-[14px] font-semibold text-white bg-[#E11D2F] px-4 py-3 rounded-lg mt-2 justify-center"
          >
            <Phone size={15} />
            Jetzt anrufen
          </a>
        </div>
      )}
    </nav>
  );
}
