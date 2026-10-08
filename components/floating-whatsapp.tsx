"use client";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export default function FloatingWhatsApp() {
  // Gleiche Schwelle wie der Anruf-Button in der Navbar, damit beide zusammen einblenden
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Kontakt"
      aria-hidden={!scrolled}
      className={`flex fixed right-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] shadow-[0_3px_10px_rgba(0,0,0,0.4)] items-center justify-center hover:scale-110 transition-transform duration-300 ${
        scrolled ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <MessageCircle size={22} fill="white" className="text-white md:w-[26px] md:h-[26px]" />
    </a>
  );
}
