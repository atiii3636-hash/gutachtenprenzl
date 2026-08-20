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
 * Solange die neuen Seiten unter /neu liegen, dürfen sie nicht in den Index –
 * sonst konkurrieren sie mit den Live-Seiten um dieselben Keywords.
 * Beim Umzug auf die echten Pfade: hier auf `false` setzen, sonst nichts.
 */
export const DRAFT_MODE = true;

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

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/og-image.jpg",
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
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
      siteName: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
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
};

/** Service-Schema, das den bestehenden LocalBusiness als Anbieter referenziert. */
export function serviceLd({ name, description, path, serviceType }: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    ...(serviceType ? { serviceType } : {}),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Berlin" },
      { "@type": "AdministrativeArea", name: "Brandenburg" },
    ],
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
