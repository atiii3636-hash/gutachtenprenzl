import Script from "next/script";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBand from "@/components/trust-band";
import DamageFormSection from "@/components/damage-form-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import GoogleReviewsSection from "@/components/google-reviews-section";
import FaqSection from "@/components/faq-section";
import BerlinMapSection from "@/components/berlin-map-section";
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
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <TrustBand />
      <DamageFormSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <GoogleReviewsSection />
      <FaqSection />
      <BerlinMapSection />
      <Footer />
    </main>
  );
}
