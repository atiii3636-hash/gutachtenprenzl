import { NextRequest, NextResponse } from "next/server";

// www.gutachtenprenzl.de auf die kanonische Domain umleiten (Befund 01).
// Läuft im Code selbst, nicht nur als Vercel-Alias — bleibt also auch dann
// korrekt, wenn ein künftiges Deploy vergisst, www separat neu zu verknüpfen.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === "www.gutachtenprenzl.de") {
    const url = request.nextUrl.clone();
    url.hostname = "gutachtenprenzl.de";
    return NextResponse.redirect(url, 301);
  }

  // /calendar/* stammt noch von der Fahrschul-Website, die früher auf dieser
  // Domain lief (z. B. /calendar/der-theorie-kalender/). Google führt die URL
  // seit dem 12.06.2026 als 404. 410 heißt "endgültig weg" statt "gerade nicht
  // da" — Google räumt sie damit schneller aus dem Bericht. Keine Weiterleitung
  // auf die Startseite: der Inhalt hat mit Gutachten nichts zu tun.
  if (request.nextUrl.pathname.startsWith("/calendar")) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
