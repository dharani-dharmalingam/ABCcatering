import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const AdditionalBenefits = () => {
  const [activeSection, setActiveSection] = useState("metlife-legal");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: "metlife-legal", label: "MetLife Legal Plans" },
    { id: "identity-theft", label: "Identity Theft" },
    { id: "pet-insurance", label: "Pet Insurance" },
    { id: "airvet", label: "Airvet" },
    { id: "aig-ambassador", label: "AIG Ambassador" },
    { id: "one-pass", label: "One Pass Select" },
    { id: "bright-horizons", label: "Bright Horizons" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/additional-benefits.webp" 
            alt="Additional Benefits" 
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
        <div className="relative z-10 text-center space-y-3 md:space-y-4 px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Additional Benefits
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Explore additional benefits and resources available to support your well-being
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

        {/* Video Section */}
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Additional Benefits Video" />
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

        {/* Section Navigation - Desktop: Chips, Mobile: Dropdown */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 -mx-6 px-6 border-b">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              {/* Mobile Dropdown */}
              <div className="md:hidden">
                <Select value={activeSection} onValueChange={scrollToSection}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a benefit" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section) => (
                      <SelectItem key={section.id} value={section.id}>
                        {section.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop Chips */}
              <div className="hidden md:flex gap-2 flex-wrap">
                {sections.map((section) => (
                  <Badge
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm transition-all hover:bg-primary/10"
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <BenefitsNavigation currentRoute="/benefits/additional-benefits" />
      </div>
      <Footer />
    </div>
  );
};

export default AdditionalBenefits;
