"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/4915560003661"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Kontakt"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/40 items-center justify-center hover:scale-110 hover:shadow-[#25D366]/60 transition-all"
    >
      <MessageCircle size={26} fill="white" className="text-white" />
    </a>
  );
}
