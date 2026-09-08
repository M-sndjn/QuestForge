import HeroSection from "./sections/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FAQSection from "./sections/PricingSection";
import "./App.css";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorks from "./sections/HowItWorks";
import PricingSection from "./sections/PricingSection";

function App() {
  return (
    <>
      <div className="h-screen">
          <NavBar />
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <PricingSection />
          <Footer />
      </div>

    </>
  );
}

export default App;