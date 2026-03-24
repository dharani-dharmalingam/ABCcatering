import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-gradient-hero overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.35] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/hero-background.png)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent" aria-hidden />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight" style={{ color: 'hsl(213 45% 20%)' }}>
                2026 Employee<br />Benefits Guide
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                Everything you need, all in one place.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Use this guide to explore your medical, dental, vision, income protection, savings accounts, and additional benefit programs for the 2026 plan year.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="default" 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium text-base md:text-lg px-6 md:px-8 py-2 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/ABC_2026_Benefit_Guide.pdf';
                    link.download = 'ABC_2026_Benefit_Guide.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Start Exploring
                </Button>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="flex-1">
            <Card className="bg-gradient-card border border-primary/20 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl">
              <div className="space-y-3 md:space-y-4 mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: 'hsl(213 45% 20%)' }}>2025 Open Enrollment</h3>
                <p className="text-sm md:text-base font-light text-foreground/70">Watch our comprehensive guide to help you navigate your benefits choices</p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden relative print:hidden">
                <VideoPlaceholder title="Open Enrollment Explainer" className="rounded-2xl" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
