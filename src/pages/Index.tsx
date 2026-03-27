import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BoldStatement from "@/components/BoldStatement";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Velociwash — Premium Doorstep Car Wash & Detailing Services"
        description="Velociwash offers premium doorstep car wash, foam wash, interior detailing, and ceramic coating services. We come to you with our own electricity and premium products."
        keywords="car wash, doorstep car wash, foam wash, car detailing, ceramic coating, interior cleaning, car care, Velociwash, mobile car wash"
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <BoldStatement />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
