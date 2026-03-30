import Navbar from "@/components/dental/Navbar";
import HeroSection from "@/components/dental/HeroSection";
import AboutSection from "@/components/dental/AboutSection";
import ServicesSection from "@/components/dental/ServicesSection";
import TestimonialsSection from "@/components/dental/TestimonialsSection";
import MediaSection from "@/components/dental/MediaSection";
import FAQSection from "@/components/dental/FAQSection";
import GallerySection from "@/components/dental/GallerySection";
import ContactSection from "@/components/dental/ContactSection";
import Footer from "@/components/dental/Footer";
import WhatsAppButton from "@/components/dental/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <MediaSection />
      <FAQSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
