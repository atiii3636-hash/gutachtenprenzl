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
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
