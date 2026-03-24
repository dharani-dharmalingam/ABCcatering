import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const RetirementPlanningSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-background print:hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.4] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/retirement-planning-hero.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-background/50" aria-hidden />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-abc-primary">
              Retirement Planning
            </h2>
            <p className="text-lg text-muted-foreground">
              2026 Fidelity transition
            </p>
            <div className="pt-4">
              <Link to="/benefits/financial-wellbeing">
                <Button size="lg" className="gap-2">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Video placeholder - Right Side */}
          <Card className="p-4 md:p-6 overflow-hidden">
            <div className="aspect-video w-full overflow-hidden rounded-lg print:hidden">
              <VideoPlaceholder title="Welcome to Your Financial Future" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RetirementPlanningSection;