import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AnalyticsCarousel from "@/components/AnalyticsCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24">
        <HeroSection />
        <AnalyticsCarousel />
        <HowItWorksSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
