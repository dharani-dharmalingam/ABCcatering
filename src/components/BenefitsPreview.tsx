import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getPreviewChapters } from "@/config/benefitsChapters";

const BenefitsPreview = () => {
  const previewBenefits = getPreviewChapters();

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 print:hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-abc-primary">
            Benefits designed for You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {previewBenefits.map((benefit, index) => (
            <Link 
              key={benefit.id} 
              to={benefit.route}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-border cursor-pointer hover:-translate-y-1 bg-card">
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  {/* Chapter number badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">
                        {benefit.id}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-abc-primary group-hover:text-abc-blue transition-colors leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Reading Time Badge */}
                  <div className="pt-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium px-3 py-1"
                    >
                      {benefit.readTime}
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/benefits">
            <Button size="lg" className="bg-abc-blue hover:bg-abc-blue/90 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              View All Benefits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPreview;
