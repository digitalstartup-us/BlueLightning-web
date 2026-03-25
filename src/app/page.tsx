import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
