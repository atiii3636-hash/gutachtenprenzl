"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#080D14] border border-white/10 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1">
          <p className="text-white font-bold text-[14px] mb-1">Wir verwenden Cookies</p>
          <p className="text-white/50 text-[12px] leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, um den Betrieb der Seite sicherzustellen. Es werden keine Tracking- oder Werbe-Cookies eingesetzt. Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-white/80 underline hover:text-white transition-colors">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2.5 rounded-xl border border-white/15 text-white/50 hover:text-white hover:border-white/30 text-[13px] font-semibold transition-all"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl bg-[#E11D2F] hover:bg-[#B91C1C] text-white text-[13px] font-bold transition-all shadow-lg shadow-[#E11D2F]/25"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
