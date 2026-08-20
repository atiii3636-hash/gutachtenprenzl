"use client";
import { useEffect } from "react";

// Google Ads Conversion-ID (bereits im Konto vorhanden)
const GOOGLE_ADS_ID = "AW-18025620294";

// Conversion-Labels der dedizierten Google-Ads-Actions
// (Konto 158-363-2780 / Gutachten Prenzl, angelegt 16.06.2026, Kategorie Kontakt, primär).
const CALL_LABEL = "TmM0CKjAucAcEMbGpJND"; // Conversion-Action "Anruf Website"
const WHATSAPP_LABEL = "5dbSCKvAucAcEMbGpJND"; // Conversion-Action "WhatsApp Klick"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Globales Klick-Tracking: fängt per Event-Delegation JEDEN Klick auf einen
 * tel:- oder wa.me-Link auf der gesamten Seite ab (Hero, Navbar, Footer,
 * Sticky-Bar, alle Landingpages) und meldet ihn als Google-Ads-Conversion.
 * Dadurch sieht Google Ads endlich auch Anrufe & WhatsApp – nicht nur das Formular.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      let method: "phone" | "whatsapp" | null = null;
      if (href.startsWith("tel:")) method = "phone";
      else if (/wa\.me|api\.whatsapp\.com/.test(href)) method = "whatsapp";
      if (!method) return;

      // 1) Sauberes Event für GTM / GA4 – Kanal bleibt unterscheidbar
      window.dataLayer?.push({ event: "contact_click", contact_method: method });

      // 2) Direkte Google-Ads-Conversion – füttert Smart Bidding
      if (typeof window.gtag === "function") {
        const label = method === "phone" ? CALL_LABEL : WHATSAPP_LABEL;
        window.gtag("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/${label}`,
        });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
