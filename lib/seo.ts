import type { Metadata } from "next";

// Zentraler SEO-Baukasten für die neuen Seiten.
// Ziel: Jede Seite liefert Titel, Description, Canonical, OpenGraph und passendes
// JSON-LD, ohne dass das in jeder Datei neu zusammengebaut wird.

export const SITE_URL = "https://gutachtenprenzl.de";

/** @id des LocalBusiness aus app/layout.tsx – hier nur referenziert, nie neu definiert. */
export const BUSINESS_ID = SITE_URL;
/** @id der Person (Atakan Arslan) aus app/layout.tsx. */
export const PERSON_ID = `${SITE_URL}/#person`;

/**
 * Steuert, ob die mit pageMetadata() gebauten Seiten indexiert werden dürfen.
 * Stand 20.08.2026 liegen sie auf ihren echten Pfaden und sind freigegeben.
 * Auf `true` setzen, falls sie noch einmal als Entwurf laufen sollen.
 */
export const DRAFT_MODE = false;

type PageSeoInput = {
  /** Titel ohne Suffix – das Template in layout.tsx hängt "| Gutachten Prenzl" an. */
  title: string;
  description: string;
  /** Finaler Pfad nach dem Livegang, z. B. "/leistungen". Bestimmt das Canonical. */
  path: string;
  keywords?: string[];
  /** Abweichendes OG-Bild, sonst das globale. */
  image?: string;
};

/**
 * Das Template in layout.tsx hängt " | Gutachten Prenzl" an — 19 Zeichen.
 * Google schneidet Titel nach Pixelbreite ab, praktisch bei rund 60 Zeichen. Statt
 * die Titel selbst zu kürzen und dabei Keywords anzufassen, fällt hier nur die
 * Marke weg, sobald sie nicht mehr passt (`absolute` umgeht das Template). Der
 * inhaltliche Teil des Titels bleibt damit Zeichen für Zeichen unverändert.
 * Grenze am 19.09.2026 von 65 auf 60 gesenkt: bei 65 wurden /faq, /vorschaden-
 * altschaden-gutachten und /blog/parkschaden-was-tun in der Suche abgeschnitten.
 */
const TITEL_SUFFIX_LAENGE = " | Gutachten Prenzl".length;
const TITEL_MAXLAENGE = 60;

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/og-image.jpg",
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const titelFeld =
    title.length + TITEL_SUFFIX_LAENGE > TITEL_MAXLAENGE ? { absolute: title } : title;

  return {
    title: titelFeld,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    robots: DRAFT_MODE
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: "Gutachten Prenzl – Kfz Sachverständiger Berlin",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ---------- JSON-LD Bausteine ---------- */

type Crumb = { name: string; path: string };

/** Breadcrumb-Schema. Der erste Eintrag ist immer die Startseite. */
export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Startseite", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  /** z. B. "Kfz-Schadengutachten" – Googles serviceType-Feld. */
  serviceType?: string;
  /** Engeres Einsatzgebiet, z. B. ein Bezirk. Ohne Angabe: Berlin + Brandenburg. */
  areaServed?: { "@type": string; name: string }[];
};

/** Service-Schema, das den bestehenden LocalBusiness als Anbieter referenziert. */
export function serviceLd({ name, description, path, serviceType, areaServed }: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    ...(serviceType ? { serviceType } : {}),
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed ?? [
      { "@type": "City", name: "Berlin" },
      { "@type": "AdministrativeArea", name: "Brandenburg" },
    ],
  };
}

type VideoInput = {
  name: string;
  description: string;
  /** Vorschaubild, Pfad ab /public oder absolute URL. */
  thumbnail: string;
  /** Datum der Veröffentlichung im Format JJJJ-MM-TT. */
  uploadDate: string;
  /** Länge nach ISO 8601, z. B. "PT1M8S" für 1:08. */
  duration: string;
  /** Seite, auf der das Video eingebettet ist, z. B. "/schadengutachten". */
  path: string;
  /** Direkte Datei-URL (MP4). Mindestens contentUrl oder embedUrl angeben. */
  contentUrl?: string;
  /** Player-URL, bei YouTube https://www.youtube.com/embed/<id>. */
  embedUrl?: string;
  /** Volltext unter dem Video. KI-Crawler lesen kein Video, nur diesen Text. */
  transcript?: string;
};

/**
 * VideoObject-Schema für eingebettete Videos.
 *
 * Google nennt Video im Leitfaden zu generativen KI-Funktionen ausdrücklich als
 * eigenen Weg in die Ergebnisse. Voraussetzung ist, dass das Video auf der
 * eigenen Seite liegt: Ein Link auf TikTok oder Instagram zählt nicht, dort
 * bleibt der Klick auf der Plattform.
 *
 * `transcript` ist der Teil mit dem größeren Hebel. GPTBot, PerplexityBot und
 * ClaudeBot führen kein JavaScript aus und sehen kein Bewegtbild. Zitiert wird
 * deshalb der Transkripttext, nicht das Video.
 */
export function videoLd({
  name,
  description,
  thumbnail,
  uploadDate,
  duration,
  path,
  contentUrl,
  embedUrl,
  transcript,
}: VideoInput) {
  const abs = (u: string) => (u.startsWith("http") ? u : `${SITE_URL}${u}`);
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [abs(thumbnail)],
    uploadDate,
    duration,
    url: `${SITE_URL}${path}`,
    ...(contentUrl ? { contentUrl: abs(contentUrl) } : {}),
    ...(embedUrl ? { embedUrl } : {}),
    ...(transcript ? { transcript } : {}),
    publisher: { "@id": BUSINESS_ID },
  };
}

/** FAQPage-Schema. Muss inhaltlich mit der sichtbaren FAQ übereinstimmen. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Kontaktseite – Google zieht sie zur Verifikation der Adresse heran. */
export function contactPageLd(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt – Gutachten Prenzl",
    url: `${SITE_URL}${path}`,
    mainEntity: { "@id": BUSINESS_ID },
  };
}

/** Über-uns-Seite mit Bezug auf die Person. */
export function aboutPageLd(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Über Gutachten Prenzl",
    url: `${SITE_URL}${path}`,
    mainEntity: { "@id": PERSON_ID },
  };
}
