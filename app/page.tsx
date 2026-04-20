import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBand from "@/components/trust-band";
import DamageFormSection from "@/components/damage-form-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import FeaturesSection from "@/components/features-section";
import GoogleReviewsSection from "@/components/google-reviews-section";
import FaqSection from "@/components/faq-section";
import BerlinMapSection from "@/components/berlin-map-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D14]">
      <Navbar />
      <Hero />
      <TrustBand />
      <DamageFormSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturesSection />
      <GoogleReviewsSection />
      <FaqSection />
      <BerlinMapSection />
      <Footer />
    </main>
  );
}
