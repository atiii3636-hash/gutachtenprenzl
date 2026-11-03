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
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
    window.dispatchEvent(new Event("consent-accepted"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#050507] border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className="flex-1">
          <p className="text-white font-bold text-[13px] md:text-[14px] mb-1">Datenschutz &amp; Cookies</p>
          {/* Handy: kurzer Text, damit der Banner die Anruf-Buttons nicht verdeckt */}
          <p className="md:hidden text-white/55 text-[12px] leading-snug">
            Mit Ihrer Einwilligung nutzen wir Google Ads und Tag Manager zur Werbemessung. Mehr in der{" "}
            <a href="/datenschutz" className="text-white/80 underline">Datenschutzerklärung</a>.
          </p>
          <p className="hidden md:block text-white/50 text-[12px] leading-relaxed">
            Wir verwenden technisch notwendige Cookies sowie — nur mit Ihrer Einwilligung — Google Ads und Google Tag Manager zur anonymisierten Reichweiten- und Werbemessung. Mit „Akzeptieren" stimmen Sie dem zu, bei „Ablehnen" werden keine Marketing-Cookies gesetzt. Ihre Wahl können Sie jederzeit widerrufen. Mehr in unserer{" "}
            <a href="/datenschutz" className="text-white/80 underline hover:text-white transition-colors">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="flex-1 md:flex-none px-4 py-2 md:py-2.5 rounded-xl border border-white/15 text-white/50 hover:text-white hover:border-white/30 text-[13px] font-semibold transition-all"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none px-5 py-2 md:py-2.5 rounded-xl bg-[#E11D2F] hover:bg-[#B91C1C] text-white text-[13px] font-bold transition-all shadow-lg shadow-[#E11D2F]/25"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
