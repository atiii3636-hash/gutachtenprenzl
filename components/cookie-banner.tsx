"use client";
import { useState, useEffect } from "react";
import { revokeOpenAIConsent } from "@/components/openai-pixel";

// Werbe-Cookies von Google, die nach einem Widerruf entfernt werden.
const GOOGLE_COOKIE_PREFIXES = ["_gcl_", "_ga", "_gid", "_gat"];

function deleteGoogleCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!GOOGLE_COOKIE_PREFIXES.some((p) => name.startsWith(p))) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    });
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setVisible(true);
    } catch {
      setVisible(true);
    }
    // "Cookie-Einstellungen" im Footer / in der Datenschutzerklärung öffnet den Hinweis erneut
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {}
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
    let wasAccepted = false;
    try {
      wasAccepted = localStorage.getItem("cookie-consent") === "accepted";
      localStorage.setItem("cookie-consent", "declined");
    } catch {}
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
    setVisible(false);
    // Widerruf einer zuvor erteilten Einwilligung: Messung stoppen, Cookies löschen
    // und neu laden, damit keine bereits geladenen Werbe-Skripte weiterlaufen.
    if (wasAccepted) {
      revokeOpenAIConsent();
      deleteGoogleCookies();
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
    >
      <div className="max-w-4xl mx-auto bg-[#050507] border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className="flex-1">
          <p className="text-white font-bold text-[13px] md:text-[14px] mb-1">Datenschutz &amp; Cookies</p>
          {/* Handy: kurzer Text, damit der Banner die Anruf-Buttons nicht verdeckt */}
          <p className="md:hidden text-white/60 text-[12px] leading-snug">
            Nur mit Ihrer Einwilligung messen wir mit Google Ads, Google Tag Manager und OpenAI Ads (ChatGPT-Anzeigen), ob Anfragen über unsere Werbung kommen. Dabei werden Cookies gesetzt und Daten auch in die USA übermittelt. Widerruf jederzeit über „Cookie-Einstellungen“. Mehr in der{" "}
            <a href="/datenschutz" className="text-white/85 underline">Datenschutzerklärung</a>.
          </p>
          <p className="hidden md:block text-white/55 text-[12px] leading-relaxed">
            Wir verwenden technisch notwendige Speicherung sowie — nur mit Ihrer Einwilligung — <strong className="text-white/80">Google Ads</strong>, <strong className="text-white/80">Google Tag Manager</strong> und das <strong className="text-white/80">OpenAI-Ads-Pixel</strong> (Anzeigen in ChatGPT). Damit messen wir, ob ein Besuch über unsere Anzeigen kam und ob danach ein Anruf, ein WhatsApp-Klick oder eine Formularanfrage erfolgte. Dafür werden Cookies gesetzt und Daten an Google und OpenAI übermittelt, auch in die USA. Mit „Akzeptieren“ willigen Sie ein, bei „Ablehnen“ wird nichts davon geladen. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ unten auf jeder Seite widerrufen. Mehr in unserer{" "}
            <a href="/datenschutz" className="text-white/85 underline hover:text-white transition-colors">
              Datenschutzerklärung
            </a>{" "}
            und im{" "}
            <a href="/impressum" className="text-white/85 underline hover:text-white transition-colors">
              Impressum
            </a>
            .
          </p>
        </div>
        {/* Beide Schaltflächen gleich groß und gleich gut sichtbar (keine Lenkung zur Einwilligung) */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="flex-1 md:flex-none md:min-w-[130px] px-5 py-2 md:py-2.5 rounded-xl bg-white hover:bg-white/90 text-[#050507] text-[13px] font-bold transition-all"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none md:min-w-[130px] px-5 py-2 md:py-2.5 rounded-xl bg-[#E11D2F] hover:bg-[#B91C1C] text-white text-[13px] font-bold transition-all"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
