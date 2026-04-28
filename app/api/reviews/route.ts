import { NextResponse } from "next/server";

interface PlaceDetailsResponse {
  rating: number;
  userRatingCount: number;
  reviews: {
    rating: number;
    text: { text: string };
    relativePublishTimeDescription: string;
    authorAttribution: { displayName: string };
  }[];
}

export const revalidate = 86400;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not configured" },
      { status: 503 }
    );
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=de&key=${apiKey}`;

    const res = await fetch(url, {
      headers: { "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data: PlaceDetailsResponse = await res.json();

    return NextResponse.json({
      rating: data.rating,
      totalCount: data.userRatingCount,
      reviews: (data.reviews ?? []).slice(0, 6),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
