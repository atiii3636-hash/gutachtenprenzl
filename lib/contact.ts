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

// Google-Bewertungen: Fallback, solange die Places API 403 liefert (Key/Abrechnung
// prüfen). Sobald sie wieder antwortet, zieht google-reviews-section den Live-Wert.
// Hier bei neuen Bewertungen von Hand hochsetzen. Auch public/llms.txt mitziehen.
// Sichtbare Anzeige auf der Website. Stand 17.08.2026: 84 Google-Bewertungen.
// Wird nur noch im Fließtext genutzt, nicht mehr im Schema (self-serving reviews).
export const REVIEW_COUNT = 84;
export const REVIEW_RATING = 5.0;
