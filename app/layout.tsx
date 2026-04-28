import type { Metadata, Viewport } from "next";
import { Karla, Saira } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import FloatingWhatsApp from "@/components/floating-whatsapp";

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
    default: "KFZ Sachverständiger Berlin | Unfallgutachten 24/7",
    template: "%s | Gutachten Prenzl",
  },
  description:
    "TÜV-zertifizierter KFZ Sachverständiger Berlin. Unfallgutachten in 24h, kostenlos bei Fremdverschulden. Alle Bezirke. 24/7 Hotline: 0155 60003661",
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
    title: "KFZ Sachverständiger Berlin | Unfallgutachten 24/7",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": siteUrl,
      name: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
      alternateName: ["GP KFZ Sachverständiger", "Gutachten Prenzl"],
      description:
        "TÜV-zertifizierter KFZ Sachverständiger in Berlin. Unfallgutachten in 24 Stunden, kostenlos bei unverschuldetem Unfall. Alle Berliner Bezirke.",
      url: siteUrl,
      telephone: "+4915560003661",
      email: "info@gutachtenprenzl.de",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+4915560003661",
        contactType: "Customer Service",
        availableLanguage: ["German"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      image: `${siteUrl}/logos/logo-full.png`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logos/logo-512.png`,
        width: 512,
        height: 512,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Prenzlauer Allee 88",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        postalCode: "10405",
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
      currenciesAccepted: "EUR",
      paymentAccepted: "Rechnung, Überweisung",
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "AdministrativeArea", name: "Brandenburg" },
      ],
      sameAs: [
        "https://www.google.com/maps/search/?api=1&query=Gutachten+Prenzl+KFZ+Sachverst%C3%A4ndiger+Berlin",
        "https://www.instagram.com/gutachtenprenzl/",
        "https://www.tiktok.com/@gutachtenprenzl",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KFZ Gutachten Leistungen Berlin",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unfallgutachten Berlin", url: `${siteUrl}/unfallgutachten-berlin` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heckauffahrunfall Gutachten Berlin", url: `${siteUrl}/heckauffahrunfall-berlin` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parkschaden Gutachten Berlin", url: `${siteUrl}/parkschaden-gutachten-berlin` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Totalschaden Gutachten Berlin", url: `${siteUrl}/totalschaden-gutachten-berlin` } },
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
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Michael R." },
          reviewBody: "Absolut top! Nach dem Auffahrunfall war ich total überfordert. Herr Arslan hat innerhalb von 24 Stunden ein vollständiges Gutachten erstellt. Die Versicherung des Verursachers hat alles bezahlt – für mich komplett kostenlos.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Sabine K." },
          reviewBody: "Sehr professionell und schnell. Der Parkschaden wurde präzise dokumentiert, die Gegenseite konnte nicht mehr bestreiten. Klare Empfehlung für jeden, der in Berlin einen unabhängigen Gutachter braucht.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Thomas W." },
          reviewBody: "Hatte einen Totalschaden und wusste nicht, was mir zusteht. Gutachten Prenzl hat den Wiederbeschaffungswert korrekt ermittelt – deutlich höher als das Angebot der Versicherung.",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Preconnect zu Google-Domains für schnelleres Laden */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N5CCZ6MN');`}</Script>
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${karla.variable} ${saira.variable} font-sans antialiased noise`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5CCZ6MN" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
        {/* Google tag (gtag.js) – Conversion-ID: 18025620294 | Label: frZvCLbrpJAcEMbGpJND */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18025620294"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18025620294');
          `}
        </Script>
      </body>
    </html>
  );
}
