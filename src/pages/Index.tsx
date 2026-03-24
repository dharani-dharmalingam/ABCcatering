import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RetirementPlanningSection from "@/components/RetirementPlanningSection";

import BenefitsPreview from "@/components/BenefitsPreview";
import AIHelpSection from "@/components/AIHelpSection";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsPreview />
      <RetirementPlanningSection />
      <AIHelpSection />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default Index;
