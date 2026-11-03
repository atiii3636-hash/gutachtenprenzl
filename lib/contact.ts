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

// Google-Bewertungen: Anzahl und Schnitt werden von Hand gepflegt. Die Places API
// liefert beide Werte zwar live, das Projekt ruft sie aber nirgends mehr ab, weil sie
// die Bewertungstexte nicht mitliefert (siehe Kopf von lib/reviews.ts).
// Hier bei neuen Bewertungen von Hand hochsetzen. Auch public/llms.txt mitziehen.
// Sichtbare Anzeige auf der Website. Stand 18.09.2026: 91 Google-Bewertungen.
// Steht seit 03.11.2026 nicht mehr im JSON-LD (aggregateRating entfernt, SEO A8).
// Weiterhin nur echte Werte aus dem Google-Profil eintragen.
export const REVIEW_COUNT = 91;
export const REVIEW_RATING = 5.0;

// Zweites Büro (Google-Profil "KFZ Gutachten Schöneweide"). Anzeige auf /kontakt,
// /standorte und im Footer, das JSON-LD steht in app/layout.tsx.
export const SCHONEWEIDE_STRASSE = "Brückenstraße 6";
export const SCHONEWEIDE_ORT = "12439 Berlin";
export const SCHONEWEIDE_HINWEIS = "Büro Schöneweide (Nieder- und Oberschöneweide, Johannisthal, Adlershof)";
export const SCHONEWEIDE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Br%C3%BCckenstra%C3%9Fe%206%2C%2012439%20Berlin";
export const SCHONEWEIDE_PATH = "/kfz-sachverstaendiger-berlin-schoeneweide";
