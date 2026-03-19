import Navbar from "@/components/dental/Navbar";
import HeroSection from "@/components/dental/HeroSection";
import AboutSection from "@/components/dental/AboutSection";
import ServicesSection from "@/components/dental/ServicesSection";
import FAQSection from "@/components/dental/FAQSection";
import GallerySection from "@/components/dental/GallerySection";
import ContactSection from "@/components/dental/ContactSection";
import Footer from "@/components/dental/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
