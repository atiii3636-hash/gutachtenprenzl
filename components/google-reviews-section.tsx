import { Star, ExternalLink } from "lucide-react";
import { REVIEW_COUNT } from "@/lib/contact";

interface GoogleReview {
  name: string;
  rating: number;
  text: { text: string; languageCode: string };
  relativePublishTimeDescription: string;
  authorAttribution: { displayName: string; photoUri: string };
}

interface PlaceDetailsResponse {
  displayName: { text: string };
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

interface ReviewData {
  name: string;
  date: string;
  text: string;
  stars: number;
}

// Stand: 02.08.2026, von Hand aus dem Google-Profil übernommen (Places API antwortet
// mit PERMISSION_DENIED). Die Datumsangaben sind relativ und veralten – beim nächsten
// Abgleich mitziehen.
// Auswahl der angezeigten Bewertungen von Atakan vorgegeben, Texte wortgleich aus dem
// Profil. Einzige Quelle für echte Bewertungen. Wer sie anderswo anzeigt (z. B.
// /ueber-uns), importiert von hier – nie abtippen, nie umformulieren.
export const FALLBACK_REVIEWS: ReviewData[] = [
  {
    name: "Nico Schulz",
    date: "vor 3 Tagen",
    text: "Viele Dank nochmal für die sehr schnelle Termin Vereinbarung. Der Ablauf war absolut professionell.\nDas auftreten war sehr freundlich und sympathisch !\nSehr informatives und hilfreiches Gespräch,\nvielen Dank für die Aufklärung und Unterstützung beim Ablauf.\n\nImmer wieder gerne !!!\n\nLiebe Grüße",
    stars: 5,
  },
  {
    name: "Sevo",
    date: "vor 2 Wochen",
    text: "Der Gutachter meines Vertrauens 😊\nIch bin mehr als zufrieden mit dem gesamten Ablauf. Alles hat von Anfang bis Ende reibungslos funktioniert und ich habe mich jederzeit gut aufgehoben gefühlt. Der Gutachter war sehr kompetent, freundlich und hat sich die Zeit genommen, alles verständlich zu erklären. Die Abwicklung verlief schnell und unkompliziert.\n\nIch würde jederzeit wieder ohne Bedenken zu ihm gehen und kann ihn mit bestem Gewissen weiterempfehlen. Vielen Dank für den hervorragenden Service 😊",
    stars: 5,
  },
  {
    name: "Anton Phan",
    date: "vor 2 Wochen",
    text: "Ich hatte nach meinem Unfall nur Kopfschmerzen. Mit Gutachten Prenzl wurde mir sehr schnell und kompetent geholfen.\nTop!!!",
    stars: 5,
  },
  {
    name: "Franzi Bratschke",
    date: "vor 3 Wochen",
    text: "Ich bin sehr zufrieden mit dem Gutachten das vom Sachverständigenbüro erstellt wurde. Klare Empfehlung",
    stars: 5,
  },
  {
    name: "Valerie Menzel",
    date: "vor 3 Wochen",
    text: "Sehr professioneller und zuverlässiger Gutachter, dem man sofort anmerkt, dass er sein Fach versteht. Ich habe kurzfristig einen Termin bekommen und wurde von Anfang an freundlich, ehrlich und kompetent beraten. Das Gutachten wurde schnell erstellt und alles verständlich erklärt, auch für jemanden, der sich mit Autos nicht so gut auskennt. Besonders positiv war die transparente Abwicklung und dass man sich wirklich Zeit für mich genommen hat. Kann ich ohne Zweifel weiterempfehlen, würde jederzeit wieder hingehen!",
    stars: 5,
  },
  {
    name: "esat",
    date: "vor 3 Wochen",
    text: "Ein äußerst professioneller Sachverständiger.\nMan merkt sofort, dass er sich in seinem Fachgebiet bestens auskennt und sich wirklich Zeit nimmt. Er widmet seinen Kunden genau die Aufmerksamkeit, die sie verdienen. Vielen Dank ❤️",
    stars: 5,
  },
  {
    name: "Joël Maxim",
    date: "vor 3 Wochen",
    text: "ging alles relativ fix. ein anruf und der gutachter war schon am unfallort. echt professionelle bilder geschossen und das gutachten ging auch schnell durch. geld ist da, ich bin glücklich, sie sind glücklich, alle sind glücklich.",
    stars: 5,
  },
  {
    name: "Gheorghe Popescu",
    date: "vor 11 Wochen",
    text: "Herr Atakan hat mich unterstützt und einen guten Gutachten geschrieben/ gemacht. Sehr professionell und sachlich formuliert. Ich empfehle Hr Atakan warmherzig.",
    stars: 5,
  },
];

async function fetchGoogleReviews(): Promise<{
  reviews: ReviewData[];
  rating: number;
  totalCount: number;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: FALLBACK_REVIEWS, rating: 5.0, totalCount: REVIEW_COUNT };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=de&key=${apiKey}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data: PlaceDetailsResponse = await res.json();

    if (!data.rating) throw new Error("Unexpected API response");

    return {
      rating: data.rating,
      totalCount: data.userRatingCount,
      reviews: (data.reviews ?? []).slice(0, 6).map((r) => ({
        name: r.authorAttribution.displayName,
        date: r.relativePublishTimeDescription,
        text: r.text.text,
        stars: r.rating,
      })),
    };
  } catch (err) {
    console.error("[GoogleReviews] Fetch failed, using fallback:", err);
    return { reviews: FALLBACK_REVIEWS, rating: 5.0, totalCount: REVIEW_COUNT };
  }
}

export default async function GoogleReviewsSection() {
  const { reviews, rating, totalCount } = await fetchGoogleReviews();

  const ratingDisplay = rating.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <section className="bg-[#080D14] py-16 md:py-24 px-5 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            Bewertungen
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight mb-3">
            Das sagen unsere Kunden
          </h2>
          <p className="text-white/50 text-[16px] mb-2">
            Echte Bewertungen von Berliner Autofahrern
          </p>
          {/* Aggregate badge */}
          <div className="inline-flex items-center gap-3 bg-[#0C1420] border border-white/8 rounded-full px-5 py-2 mt-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="font-bold text-white text-[15px]">{ratingDisplay}</span>
            <span className="text-white/30 text-[13px]">·</span>
            <span className="text-white/50 text-[13px]">{totalCount} Bewertungen auf Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="bg-[#0C1420] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              {/* Text */}
              {/* whitespace-pre-line: Absätze der Kunden bleiben so, wie sie geschrieben wurden */}
              <p className="text-white/70 text-[14px] leading-relaxed mb-4 whitespace-pre-line">
                &ldquo;{r.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white text-[14px] block">{r.name}</span>
                  <span className="text-white/35 text-[12px]">{r.date}</span>
                </div>
                {/* Google G */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Google">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center" data-reveal>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/10 text-white font-semibold text-[14px] px-6 py-3.5 rounded-full transition-colors"
          >
            Alle {totalCount} Bewertungen auf Google ansehen
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
