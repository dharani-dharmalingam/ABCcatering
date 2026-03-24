import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const MedicalPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png" 
            alt="Medical Plans" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/70 to-gray-600/50" />
        </div>
        
        {/* Geometric Design Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-gray-400/20 to-transparent transform rotate-12" />
            <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-tl from-slate-400/30 to-transparent transform -rotate-6" />
            <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent transform rotate-45" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Medical Plans
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Comprehensive medical insurance options and coverage details
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>

        {/* United Healthcare CDHP Video */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">United Healthcare CDHP</h3>
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="United Healthcare CDHP Video" />
          </div>
        </Card>

        {/* Kaiser Permanente CDHP Video */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Kaiser Permanente CDHP</h3>
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Kaiser Permanente CDHP Video" />
          </div>
        </Card>

        {/* Surest Video */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Surest</h3>
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Surest Video" />
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-blue mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="https://portal.abccatering.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64"
            >
              <Button size="lg" className="gap-2 w-full h-12">
                UKG
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64"
            >
              <Button size="lg" className="gap-2 w-full h-12">
                Alex
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/medical-plans" />
      </div>
      <Footer />
    </div>
  );
};

export default MedicalPlans;