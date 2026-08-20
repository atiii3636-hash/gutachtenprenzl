import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBand from "@/components/trust-band";
import TrustStepsSection from "@/components/trust-steps-section";
import GoogleReviewsSection from "@/components/google-reviews-section";
import PhotoGallerySection from "@/components/photo-gallery-section";
import ServicesSection from "@/components/services-section";
import FeaturesSection from "@/components/features-section";
import FaqSection from "@/components/faq-section";
import BerlinMapSection from "@/components/berlin-map-section";
import StandortKarte from "@/components/standort-karte";
import DamageFormSection from "@/components/damage-form-section";
import Footer from "@/components/footer";
import { faqs } from "@/lib/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D14]">
      {/* Plain <script>, kein next/script: next/script rendert JSON-LD nur in den
          React-Flight-Payload, nicht als echtes Tag ins HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <TrustStepsSection />
      <DamageFormSection />
      <TrustBand />
      <GoogleReviewsSection />
      <PhotoGallerySection />
      <ServicesSection />
      <FeaturesSection />
      <FaqSection />
      <BerlinMapSection />
      <StandortKarte variant="dark" />
      <Footer />
    </main>
  );
}
