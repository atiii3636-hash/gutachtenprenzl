"use client";

// Öffnet den Cookie-Hinweis erneut, damit Besucher ihre Einwilligung jederzeit
// ändern oder widerrufen können (Art. 7 Abs. 3 DSGVO: Widerruf so einfach wie Erteilung).
export default function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
