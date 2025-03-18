import { ServicesSection } from "./components/ServicesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
} 