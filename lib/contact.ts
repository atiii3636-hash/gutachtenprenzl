// Zentrale Kontaktdaten – einmal hier ändern, überall aktiv.

export const PHONE_DISPLAY = "+49 155 60003661";
export const PHONE_HREF = "tel:+4915560003661";

// Vorausgefüllte WhatsApp-Nachricht: senkt die Hürde (Nutzer muss nichts tippen)
// und liefert direkt Kontext + startet die Datenaufnahme ("Mein Name:").
export const WHATSAPP_TEXT =
  "Hallo Gutachten Prenzl, ich hatte einen Unfall in Berlin und brauche ein Gutachten. Mein Name:";

export const WHATSAPP_URL = `https://wa.me/4915560003661?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

// Google-Bewertungen: Live-Wert kommt aus der Places API (google-reviews-section).
// Der API-Key ist auf den Referrer gutachtenprenzl.de beschränkt, deshalb schickt
// der Server-Fetch diesen Referer mit. Die Werte hier sind nur noch der Fallback,
// falls die API ausfällt. Stand 18.09.2026: 91 Google-Bewertungen, 5,0 Sterne.
// Auch public/llms.txt mitziehen.
export const REVIEW_COUNT = 91;
export const REVIEW_RATING = 5.0;
