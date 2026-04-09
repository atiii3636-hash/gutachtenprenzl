import type { Metadata, Viewport } from "next";
import { Karla, Saira } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "500", "600", "700", "800"],
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["500", "600", "700", "800", "900"],
});

const siteUrl = "https://gutachtenprenzl.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KFZ Sachverständiger Berlin | Unfallgutachten 24h – Gutachten Prenzl",
    template: "%s | Gutachten Prenzl – KFZ Sachverständiger Berlin",
  },
  description:
    "✓ TÜV-zertifizierter KFZ Sachverständiger in Berlin ✓ Unfallgutachten in 24h ✓ Kostenlos bei Fremdverschulden ✓ Alle Bezirke ✓ 24/7 Notfall-Hotline: 0155 60003661",
  keywords: [
    "KFZ Sachverständiger Berlin",
    "Unfallgutachten Berlin",
    "KFZ Gutachter Berlin",
    "Kfz Sachverständiger Prenzlauer Berg",
    "Unfallgutachten kostenlos Berlin",
    "TÜV zertifizierter Sachverständiger Berlin",
    "Gutachter nach Unfall Berlin",
    "Schadengutachten Berlin",
    "Kfz Gutachten Berlin",
    "Unfallschaden Gutachten Berlin",
    "Sachverständiger Haftpflichtschaden Berlin",
    "Gutachten Prenzl",
  ],
  authors: [{ name: "Gutachten Prenzl", url: siteUrl }],
  creator: "Gutachten Prenzl",
  publisher: "Gutachten Prenzl",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
    title: "KFZ Sachverständiger Berlin | Unfallgutachten 24h – Gutachten Prenzl",
    description:
      "TÜV-zertifizierter KFZ Sachverständiger in Berlin. Unfallgutachten in 24h, kostenlos bei Fremdverschulden. 24/7 erreichbar für alle Berliner Bezirke.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFZ Sachverständiger Berlin | Unfallgutachten 24h",
    description:
      "TÜV-zertifizierter KFZ Sachverständiger in Berlin. Kostenlos bei Fremdverschulden. 24/7 erreichbar.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "", // Google Search Console Verification Code hier einfügen
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": siteUrl,
      name: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
      alternateName: "GP KFZ Sachverständiger",
      description:
        "TÜV-zertifizierter KFZ Sachverständiger in Berlin. Unfallgutachten in 24 Stunden, kostenlos bei unverschuldetem Unfall. Alle Berliner Bezirke.",
      url: siteUrl,
      telephone: "+4915560003661",
      email: "info@gutachtenprenzl.de",
      image: `${siteUrl}/logos/logo-full.png`,
      logo: `${siteUrl}/logos/logo-icon.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        postalCode: "10435",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.5376,
        longitude: 13.4155,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday",
          "Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "Kostenlos bei Fremdverschulden",
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "State", name: "Brandenburg" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KFZ Gutachten Leistungen Berlin",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unfallgutachten Berlin" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haftpflichtschaden Gutachten" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kaskoschadens Gutachten" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wertgutachten Fahrzeug" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schadensregulierung Berlin" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was kostet ein KFZ Sachverständiger nach einem Unfall in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei einem unverschuldeten Unfall (Haftpflichtschaden) entstehen Ihnen keinerlei Kosten. Die Haftpflichtversicherung des Unfallverursachers trägt die vollen Kosten für den KFZ Sachverständigen. Sie zahlen 0 €.",
          },
        },
        {
          "@type": "Question",
          name: "Wie schnell bekomme ich ein Unfallgutachten in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir erstellen Ihr Unfallgutachten in Berlin innerhalb von 24 Stunden nach der Besichtigung. Wir kommen mobil zu Ihnen – nach Hause, in die Werkstatt oder direkt zum Unfallort.",
          },
        },
        {
          "@type": "Question",
          name: "In welchen Berliner Bezirken sind Sie als KFZ Sachverständiger tätig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir sind in allen Berliner Bezirken tätig: Prenzlauer Berg, Mitte, Charlottenburg, Friedrichshain, Kreuzberg, Neukölln, Schöneberg, Tempelhof, Steglitz, Spandau, Reinickendorf, Marzahn, Lichtenberg, Köpenick und Pankow.",
          },
        },
        {
          "@type": "Question",
          name: "Muss ich mit meinem Fahrzeug zu Ihnen kommen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nein – wir kommen zu Ihnen. Als mobiler KFZ Sachverständiger in Berlin kommen wir direkt zu Ihrem Unfallort, nach Hause oder in die Werkstatt. Kein Aufwand für Sie.",
          },
        },
        {
          "@type": "Question",
          name: "Sind Sie TÜV-zertifizierter KFZ Sachverständiger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wir sind TÜV Rheinland zertifizierter KFZ Sachverständiger (ID 0217466029, gültig bis 18.12.2028). Unsere Gutachten werden von allen deutschen Versicherungen anerkannt.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist der Unterschied zwischen Haftpflicht- und Kaskogutachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ein Haftpflichtgutachten wird erstellt, wenn Sie unverschuldet in einen Unfall verwickelt wurden – die Kosten trägt die gegnerische Versicherung. Ein Kaskogutachten wird bei selbstverschuldeten Unfällen oder Fahrzeugschäden (z.B. Wildunfall, Vandalismus) benötigt.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${karla.variable} ${saira.variable} font-sans antialiased noise`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
