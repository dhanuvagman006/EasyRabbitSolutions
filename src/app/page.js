import Navbar from "@/components/layout/Navbar";
import HeroVideo from "@/components/hero/HeroVideo";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVideo />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  );
}
