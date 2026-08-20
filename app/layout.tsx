import type { Metadata, Viewport } from "next";
import { Karla, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ConversionTracking from "@/components/conversion-tracking";
import { REVIEW_COUNT } from "@/lib/contact";

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
      // Bewusst KEIN aggregateRating / review hier:
      // Google untersagt selbst ausgezeichnete Bewertungen auf der eigenen Domain
      // ("self-serving reviews"). Die Sterne werden nicht ausgespielt und riskieren
      // eine manuelle Maßnahme. Die echten Google-Bewertungen stehen sichtbar in
      // components/google-reviews-section.tsx – das ist erlaubt und ausreichend.
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
        {/* Scroll-in reveal for [data-reveal] elements — plain script, no React client component (avoids RSC lazy-chunk boundary).
            Scroll-Listener statt IntersectionObserver: deckt auch Anker-Sprünge ab, bei denen IO nicht feuert. */}
        <Script id="scroll-reveal" strategy="afterInteractive">
          {`
            (function () {
              var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
              if (!els.length) return;
              var ticking = false;
              function check() {
                ticking = false;
                var limit = window.innerHeight * 0.92;
                els = els.filter(function (el) {
                  if (el.getBoundingClientRect().top < limit) {
                    el.classList.add('is-visible');
                    return false;
                  }
                  return true;
                });
                if (!els.length) {
                  window.removeEventListener('scroll', onScroll);
                  window.removeEventListener('resize', onScroll);
                }
              }
              function onScroll() {
                if (!ticking) { ticking = true; requestAnimationFrame(check); }
              }
              window.addEventListener('scroll', onScroll, { passive: true });
              window.addEventListener('resize', onScroll, { passive: true });
              check();
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
