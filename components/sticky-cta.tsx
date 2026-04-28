"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex gap-0 shadow-2xl shadow-black/40">
        <a
          href="tel:+4915560003661"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#E11D2F] text-white font-display font-black uppercase tracking-wide text-[14px] py-4 transition-all active:bg-[#B91C1C]"
        >
          <Phone size={17} />
          Anrufen
        </a>
        <div className="w-px bg-white/20" />
        <a
          href="https://wa.me/4915560003661"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#128C7E] text-white font-display font-black uppercase tracking-wide text-[14px] py-4 transition-all active:bg-[#0d7166]"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
