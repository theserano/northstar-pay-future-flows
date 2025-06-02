
import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import ProductOfferings from "./sections/ProductOfferings";
import TrustPromises from "./sections/TrustPromises";
import WaitlistSection from "./sections/WaitlistSection";
import FAQSection from "./sections/FAQSection";
import Footer from "./sections/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProductOfferings />
      <TrustPromises />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
