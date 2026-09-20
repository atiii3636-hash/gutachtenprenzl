// Echte Google-Bewertungen, wortgleich aus dem Unternehmensprofil übernommen.
// Einzige Quelle für Bewertungstexte auf der Website. Nie abtippen, nie umformulieren,
// nie kürzen: Der Text steht so im HTML, wie er bei Google steht.
//
// Warum von Hand gepflegt und nicht per API:
// Die Places API (New) liefert mit dem vorhandenen Key `rating` und `userRatingCount`
// live, aber `reviews` kommt leer zurück (geprüft 19.09.2026). Das Feld gehört zum
// SKU "Place Details Enterprise + Atmosphere" und ist im Google-Cloud-Projekt nicht
// freigeschaltet. Solange das so ist, ist diese Datei die Quelle.
//
// Stand der Auswahl: 19.09.2026, aus dem Maps-Profil gelesen.
// Die Monatsangaben sind aus Googles relativen Angaben ("vor 2 Monaten") abgeleitet
// und deshalb auf den Monat genau, nicht auf den Tag.

export interface Review {
  name: string;
  /** Ungefährer Monat der Veröffentlichung, abgeleitet aus Googles relativer Angabe. */
  monat: string;
  text: string;
  sterne: number;
}

const MONATE: Record<string, string> = {
  Januar: "01", Februar: "02", März: "03", April: "04",
  Mai: "05", Juni: "06", Juli: "07", August: "08",
  September: "09", Oktober: "10", November: "11", Dezember: "12",
};

// "Juli 2026" -> "2026-07". Bewusst nur monatsgenau: Google liefert relative
// Angaben ("vor 2 Monaten"), ein Tagesdatum wäre erfunden. YYYY-MM ist gültiges
// ISO 8601 und damit für schema.org/Date in Ordnung.
function isoMonat(monat: string): string {
  const [name, jahr] = monat.split(" ");
  const mm = MONATE[name];
  // Tippfehler sollen den Build brechen, statt still ein kaputtes Datum auszuliefern.
  if (!mm || !/^\d{4}$/.test(jahr ?? "")) {
    throw new Error(`lib/reviews.ts: unbekannte Monatsangabe "${monat}"`);
  }
  return `${jahr}-${mm}`;
}

/**
 * Die Bewertungen als schema.org/Review, für das @graph in app/layout.tsx.
 * Gleiche Quelle wie der sichtbare Text — die Auszeichnung darf nie mehr
 * behaupten, als auf der Seite steht.
 */
export function reviewsLd() {
  return REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: isoMonat(r.monat),
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.sterne,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
    // Erhoben hat die Bewertung Google, nicht diese Website.
    publisher: { "@type": "Organization", name: "Google" },
  }));
}

// Reihenfolge ist bewusst: Die ausführlichen Bewertungen stehen vorn, weil die
// Startseite die ersten sechs zeigt und /ueber-uns die drei danach. So steht auf
// jeder Seite anderer Text, statt dreimal derselbe.
export const REVIEWS: Review[] = [
  {
    name: "Valerie Menzel",
    monat: "Juli 2026",
    sterne: 5,
    text: "Sehr professioneller und zuverlässiger Gutachter, dem man sofort anmerkt, dass er sein Fach versteht. Ich habe kurzfristig einen Termin bekommen und wurde von Anfang an freundlich, ehrlich und kompetent beraten. Das Gutachten wurde schnell erstellt und alles verständlich erklärt, auch für jemanden, der sich mit Autos nicht so gut auskennt. Besonders positiv war die transparente Abwicklung und dass man sich wirklich Zeit für mich genommen hat. Kann ich ohne Zweifel weiterempfehlen, würde jederzeit wieder hingehen!",
  },
  {
    name: "Sevo",
    monat: "August 2026",
    sterne: 5,
    text: "Der Gutachter meines Vertrauens 😊\nIch bin mehr als zufrieden mit dem gesamten Ablauf. Alles hat von Anfang bis Ende reibungslos funktioniert und ich habe mich jederzeit gut aufgehoben gefühlt. Der Gutachter war sehr kompetent, freundlich und hat sich die Zeit genommen, alles verständlich zu erklären. Die Abwicklung verlief schnell und unkompliziert.\n\nIch würde jederzeit wieder ohne Bedenken zu ihm gehen und kann ihn mit bestem Gewissen weiterempfehlen. Vielen Dank für den hervorragenden Service 😊",
  },
  {
    name: "Tarik Aslan",
    monat: "April 2026",
    sterne: 5,
    text: "Super Erfahrung! Ich habe sehr kurzfristig einen Termin bekommen und wurde von Anfang an freundlich und ehrlich beraten. Man merkt sofort, dass hier jemand mit viel Erfahrung und Fachwissen arbeitet.\nDas Gutachten wurde schnell erstellt und alles wurde verständlich erklärt, auch für jemanden, der sich nicht so gut mit Autos auskennt. Besonders positiv fand ich, dass alles transparent ablief und man sich wirklich Zeit für mich genommen hat.\nKann ich ohne Zweifel weiterempfehlen, würde jederzeit wieder hingehen!",
  },
  {
    name: "Joël Maxim",
    monat: "Juli 2026",
    sterne: 5,
    text: "ging alles relativ fix. ein anruf und der gutachter war schon am unfallort. echt professionelle bilder geschossen und das gutachten ging auch schnell durch. geld ist da, ich bin glücklich, sie sind glücklich, alle sind glücklich.",
  },
  {
    name: "Nico Schulz",
    monat: "Juli 2026",
    sterne: 5,
    text: "Viele Dank nochmal für die sehr schnelle Termin Vereinbarung. Der Ablauf war absolut professionell.\nDas auftreten war sehr freundlich und sympathisch !\nSehr informatives und hilfreiches Gespräch,\nvielen Dank für die Aufklärung und Unterstützung beim Ablauf.\n\nImmer wieder gerne !!!\n\nLiebe Grüße",
  },
  {
    name: "Gheorghe Popescu",
    monat: "Mai 2026",
    sterne: 5,
    text: "Herr Atakan hat mich unterstützt und einen guten Gutachten geschrieben/ gemacht. Sehr professionell und sachlich formuliert. Ich empfehle Hr Atakan warmherzig.",
  },
  {
    name: "Berat Esrefoglu",
    monat: "Juli 2026",
    sterne: 5,
    text: "Top Service! Die Arbeit wurde sauber, sorgfältig und sehr professionell ausgeführt. Ich bin mit dem Ergebnis äußerst zufrieden. Freundlicher Kontakt, zuverlässig und kompetent. Gerne wieder, absolut empfehlenswert!",
  },
  {
    name: "Anton Phan",
    monat: "Juli 2026",
    sterne: 5,
    text: "Ich hatte nach meinem Unfall nur Kopfschmerzen. Mit Gutachten Prenzl wurde mir sehr schnell und kompetent geholfen.\nTop!!!",
  },
  {
    name: "Arda",
    monat: "März 2026",
    sterne: 5,
    text: "Sehr kompetentes und freundliches Team. Man merkt sofort, dass hier Profis am Werk sind. Alles wurde mir verständlich erklärt und die gesamte Abwicklung verlief absolut reibungslos. Gerne wieder!",
  },
  {
    name: "Franzi Bratschke",
    monat: "Juli 2026",
    sterne: 5,
    text: "Ich bin sehr zufrieden mit dem Gutachten das vom Sachverständigenbüro erstellt wurde. Klare Empfehlung",
  },
  {
    name: "esat",
    monat: "Juli 2026",
    sterne: 5,
    text: "Ein äußerst professioneller Sachverständiger.\nMan merkt sofort, dass er sich in seinem Fachgebiet bestens auskennt und sich wirklich Zeit nimmt. Er widmet seinen Kunden genau die Aufmerksamkeit, die sie verdienen. Vielen Dank ❤️",
  },
];
