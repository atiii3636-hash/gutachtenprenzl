import { Star, ExternalLink } from "lucide-react";

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

const FALLBACK_REVIEWS: ReviewData[] = [
  {
    name: "Arda A.",
    date: "vor einem Monat",
    text: "Sehr kompetentes und freundliches Team. Man merkt sofort, dass hier Profis am Werk sind. Alles wurde mir verständlich erklärt und die gesamte Abwicklung verlief absolut reibungslos. Gerne wieder!",
    stars: 5,
  },
  {
    name: "Esra A.",
    date: "vor einem Monat",
    text: "Top Service! Sehr freundlich und zuverlässig. Ich habe mich sehr gut beraten gefühlt. Das Gutachten wurde super schnell erstellt und ich wurde über alle Schritte ausführlich aufgeklärt. Klare Weiterempfehlung für Gutachten Prenzl 😊",
    stars: 5,
  },
  {
    name: "Nisa Ö.",
    date: "vor einem Monat",
    text: "Ich kann den Gutachter nur wärmstens empfehlen! Vom ersten Kontakt bis zur Übergabe des Gutachtens war alles freundlich und sehr professionell. Ich habe mich gut aufgehoben gefühlt.",
    stars: 5,
  },
  {
    name: "Beyza D.",
    date: "vor einem Monat",
    text: "Ich habe mich sehr wohlgefühlt und wurde bei all meinen Fragen umfassend unterstützt. Zudem ist der Gutachter äußerst kompetent und hilfsbereit.",
    stars: 5,
  },
  {
    name: "Efe A.",
    date: "vor einem Monat",
    text: "Sehr professionelles und detailliert erstelltes Gutachten — schnell und zuverlässig. Kann ich nur weiterempfehlen!",
    stars: 5,
  },
  {
    name: "Fatih A.",
    date: "vor einem Monat",
    text: "Super Gutachter, sehr sympathisch und professionell. Berät einen sehr gut, auch wenn man sich nicht mit der Materie auskennt.",
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
    return { reviews: FALLBACK_REVIEWS, rating: 5.0, totalCount: 41 };
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
    return { reviews: FALLBACK_REVIEWS, rating: 5.0, totalCount: 47 };
  }
}

export default async function GoogleReviewsSection() {
  const { reviews, rating, totalCount } = await fetchGoogleReviews();

  const ratingDisplay = rating.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} className="fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#080D14] uppercase tracking-tight leading-tight mb-3">
            Das sagen unsere <span className="text-[#E11D2F]">Kunden</span>
          </h2>
          <p className="text-gray-500 text-[16px] mb-2">
            Echte Bewertungen von Berliner Autofahrern
          </p>
          {/* Aggregate badge */}
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-5 py-2 mt-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="font-bold text-[#080D14] text-[15px]">{ratingDisplay}</span>
            <span className="text-gray-400 text-[13px]">·</span>
            <span className="text-gray-500 text-[13px]">{totalCount} Bewertungen auf Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#080D14] text-[14px] block">{r.name}</span>
                  <span className="text-gray-400 text-[12px]">{r.date}</span>
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
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#080D14] hover:bg-[#111820] text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-colors"
          >
            Alle {totalCount} Bewertungen auf Google ansehen
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
