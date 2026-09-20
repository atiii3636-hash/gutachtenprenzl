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
// Steht seit 20.09.2026 auch im JSON-LD (aggregateRating in app/layout.tsx), damit
// KI-Suchmaschinen die Zahl belegt vorfinden. Deshalb gilt hier strenger als vorher:
// nur echte Werte aus dem Google-Profil eintragen.
export const REVIEW_COUNT = 91;
export const REVIEW_RATING = 5.0;
