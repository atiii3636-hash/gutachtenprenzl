import type { Metadata, Viewport } from "next";
import { Karla, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ConversionTracking from "@/components/conversion-tracking";
import ScrollReveal from "@/components/scroll-reveal";
import { REVIEW_COUNT, REVIEW_RATING } from "@/lib/contact";
import { reviewsLd } from "@/lib/reviews";

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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://gutachtenprenzl.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Unfallgutachten Berlin – 100% kostenlos, in 24h",
    template: "%s | Gutachten Prenzl",
  },
  description:
    "Unfall gehabt? Gutachten in 24h – 100% kostenlos bei Fremdverschulden. TÜV-zertifiziert, alle Berliner Bezirke. ☎ 0155 60003661",
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
    title: "Unfallgutachten Berlin – 100% kostenlos, in 24h",
    description:
      "Unfall gehabt? Gutachten in 24h – 100% kostenlos bei Fremdverschulden. TÜV-zertifiziert, alle Berliner Bezirke.",
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
    title: "Unfallgutachten Berlin – 100% kostenlos, in 24h",
    description:
      "Unfall gehabt? Gutachten in 24h – 100% kostenlos bei Fremdverschulden. TÜV-zertifiziert.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Atakan Arslan",
      alternateName: "Atakan Arslan – Gutachten Prenzl",
      jobTitle: "TÜV Rheinland zertifizierter KFZ Sachverständiger",
      description:
        "TÜV Rheinland zertifizierter KFZ Sachverständiger in Berlin. Spezialisiert auf Unfallgutachten, Schadensregulierung und Fahrzeugbewertung. Tätig in allen Berliner Bezirken.",
      url: `${siteUrl}/ueber-uns`,
      telephone: "+4915560003661",
      email: "info@gutachtenprenzl.de",
      worksFor: { "@id": siteUrl },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Prenzlauer Allee 88",
        addressLocality: "Berlin",
        postalCode: "10405",
        addressCountry: "DE",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "TÜV Rheinland Zertifikat KFZ Sachverständiger",
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: "TÜV Rheinland",
          url: "https://www.tuv.com",
        },
        identifier: "0217466029",
        validUntil: "2028-12-18",
      },
      knowsAbout: [
        "Unfallgutachten",
        "Kfz-Schadensregulierung",
        "Fahrzeugbewertung",
        "Haftpflichtschäden",
        "Totalschadenbewertung",
        "Parkschaden",
        "Versicherungsrecht Kfz",
      ],
      sameAs: [
        "https://www.instagram.com/gutachtenprenzl/",
        "https://www.tiktok.com/@gutachtenprenzl",
        "https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": siteUrl,
      // Muss exakt dem Google-Business-Profile-Namen entsprechen, damit Google
      // Website und Maps-Eintrag derselben Entität zuordnet.
      name: "Kfz Gutachten Prenzl - Sachverständigenbüro",
      alternateName: [
        "Gutachten Prenzl",
        "Gutachten Prenzl – KFZ Sachverständiger Berlin",
        "GP KFZ Sachverständiger",
      ],
      description:
        "TÜV-zertifizierter KFZ Sachverständiger in Berlin. Unfallgutachten in 24 Stunden, kostenlos bei unverschuldetem Unfall. Alle Berliner Bezirke.",
      url: siteUrl,
      telephone: "+4915560003661",
      email: "info@gutachtenprenzl.de",
      // Entity-Verknüpfung: KI-Systeme sollen "Gutachten Prenzl" und
      // "Atakan Arslan" als dieselbe Einheit erkennen.
      founder: { "@id": `${siteUrl}/#person` },
      employee: { "@id": `${siteUrl}/#person` },
      knowsLanguage: ["de", "tr", "en"],
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
      hasMap:
        "https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY",
      vatID: "DE815908789",
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
        "https://www.google.com/maps/place/?q=place_id:ChIJ6WBvNC7A_yQR59KBPvyK9UY",
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
      // Bewertungen aus dem Google-Unternehmensprofil, maschinenlesbar.
      //
      // Bis 20.09.2026 stand hier bewusst nichts, mit der Begründung "self-serving
      // reviews". Der Teil stimmt weiterhin für Google: Bewertungen, die ein Betrieb
      // über sich selbst auf der eigenen Domain auszeichnet, sind für Review-Rich-
      // Results nicht zulässig, Sterne werden in der Suche nicht ausgespielt.
      //
      // Trotzdem steht der Block jetzt hier, weil er für KI-Suchmaschinen zählt:
      // Perplexity, ChatGPT Search und AI Overviews lesen JSON-LD direkt und sind an
      // Googles Rich-Result-Regeln nicht gebunden. Dort ist der Unterschied
      // "5,0 aus 91 Bewertungen" gegen gar keine belegte Aussage.
      //
      // Bedingung, an der alles hängt: Die Zahlen müssen stimmen. Wahrheitsgemäße
      // Auszeichnung wird von Google ignoriert, erfundene wäre Spam. REVIEW_COUNT und
      // REVIEW_RATING in lib/contact.ts deshalb bei jeder Änderung mitziehen, und die
      // Bewertungstexte nur aus lib/reviews.ts, nie frei formuliert.
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: REVIEW_RATING,
        reviewCount: REVIEW_COUNT,
        bestRating: 5,
        worstRating: 1,
      },
      review: reviewsLd(),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Google Consent Mode v2 – MUSS als erstes Skript laufen, vor GTM & gtag.
            Standard: alle Marketing-/Analyse-Signale verweigert bis zur aktiven Einwilligung.
            Bereits erteilte Einwilligung (wiederkehrende Besucher) wird sofort angewandt. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
              try{if(localStorage.getItem('cookie-consent')==='accepted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
            `,
          }}
        />
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
      <body className={`${karla.variable} ${jakarta.variable} font-sans antialiased noise`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5CCZ6MN" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingWhatsApp />
        <ConversionTracking />
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
        {/* Einblenden der [data-reveal]-Elemente. Als Client-Komponente, weil sie
            bei jedem Seitenwechsel neu greifen muss: Next.js wechselt Seiten ohne
            Neuladen, ein einmalig laufendes Skript würde Folgeseiten unsichtbar lassen. */}
        <ScrollReveal />
      </body>
    </html>
  );
}
