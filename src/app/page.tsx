import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
