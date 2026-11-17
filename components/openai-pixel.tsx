"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// OpenAI Ads Measurement Pixel
// Ads Manager → Conversions → Datenquelle "My first pixel"
// Umsetzung nach https://developers.openai.com/ads/measurement-pixel
const OPENAI_PIXEL_ID = "GNWvA76ef8UunEkaPnJkss";
const SDK_SRC = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

// Cookies, die das Pixel nach Einwilligung setzt (laut OpenAI-Doku)
const OPENAI_COOKIES = ["__oppref", "__obref"];

type Oaiq = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    oaiq?: Oaiq;
  }
}

export type ContactMethod = "phone" | "whatsapp" | "form";

// Eigene Ereignisnamen je Kanal (zusätzlich zum Standard-Ereignis lead_created),
// damit im Ads Manager sichtbar ist, über welchen Weg die Anfrage kam.
const CUSTOM_EVENT: Record<ContactMethod, string> = {
  phone: "anruf_klick",
  whatsapp: "whatsapp_klick",
  form: "formular_gesendet",
};

// Ereignisse nicht für personalisierte Werbung bei OpenAI verwenden lassen
// (nur Messung und Kampagnen-Auswertung).
const OPTIONS = { opt_out: true };

function hasConsent(): boolean {
  try {
    return localStorage.getItem("cookie-consent") === "accepted";
  } catch {
    return false;
  }
}

// Das Pixel wird – wie die Google-Tags – erst nach "Akzeptieren" im
// Cookie-Hinweis geladen. Vorher geht keine Verbindung zu OpenAI raus.
function load() {
  if (document.getElementById("oaiq-js")) return;
  if (!window.oaiq) {
    // Offizieller Stub aus dem Ads Manager: sammelt Aufrufe, bis das SDK geladen ist.
    const q: Oaiq = function () {
      // eslint-disable-next-line prefer-rest-params
      q.q!.push(arguments);
    };
    q.q = [];
    window.oaiq = q;
  }
  const s = document.createElement("script");
  s.id = "oaiq-js";
  s.async = true;
  s.src = SDK_SRC;
  document.head.appendChild(s);
  window.oaiq("init", { pixelId: OPENAI_PIXEL_ID });
  // Einwilligung liegt vor (sonst wären wir nicht hier). Setzt auch eine früher
  // gespeicherte Ablehnung zurück, falls jemand erst ablehnt und später zustimmt.
  window.oaiq("consent", true);
}

/** Widerruf: Messung stoppen und die Pixel-Cookies entfernen. */
export function revokeOpenAIConsent() {
  window.oaiq?.("consent", false);
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  OPENAI_COOKIES.forEach((name) =>
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    })
  );
}

/**
 * Meldet eine Kontaktaufnahme an OpenAI Ads – nur mit Einwilligung.
 * - lead_created: Standard-Ereignis für alle Kontaktwege (Basis für die Kampagnen-Optimierung)
 * - anruf_klick / whatsapp_klick / formular_gesendet: Aufschlüsselung nach Kanal
 * Es werden keine Formularinhalte, Namen oder Telefonnummern übergeben.
 */
export function trackOpenAIContact(method: ContactMethod) {
  if (typeof window === "undefined" || !hasConsent()) return;
  load();
  window.oaiq?.("measure", "lead_created", { type: "customer_action" }, OPTIONS);
  window.oaiq?.(
    "measure",
    "custom",
    { type: "custom" },
    { ...OPTIONS, custom_event_name: CUSTOM_EVENT[method] }
  );
}

export default function OpenAIPixel() {
  const pathname = usePathname();

  // Laden bei vorhandener Einwilligung bzw. sobald im Banner akzeptiert wird
  useEffect(() => {
    if (hasConsent()) load();
    const onConsent = () => {
      load();
      window.oaiq?.("measure", "page_viewed", { type: "contents" }, OPTIONS);
    };
    window.addEventListener("consent-accepted", onConsent);
    return () => window.removeEventListener("consent-accepted", onConsent);
  }, []);

  // Seitenaufruf bei jedem Seitenwechsel (Next.js lädt Folgeseiten ohne Reload)
  useEffect(() => {
    if (!hasConsent()) return;
    load();
    window.oaiq?.("measure", "page_viewed", { type: "contents" }, OPTIONS);
  }, [pathname]);

  return null;
}
