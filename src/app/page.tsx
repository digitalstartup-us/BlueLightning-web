import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Stats from "@/components/Stats";
import ProcessPreview from "@/components/ProcessPreview";
import Testimonials from "@/components/Testimonials";
import AboutSnippet from "@/components/AboutSnippet";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <PortfolioPreview />
      <Stats />
      <ProcessPreview />
      <Testimonials />
      <AboutSnippet />
      <ContactCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
