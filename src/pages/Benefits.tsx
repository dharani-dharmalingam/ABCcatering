import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { benefitChapters } from "@/config/benefitsChapters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Benefits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8 print:hidden">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'hsl(213 45% 20%)' }}>
              Benefits designed for YOU
            </h1>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 print:grid-cols-2" id="benefits-grid">
            {benefitChapters.map((chapter) => {
              return (
                <Link 
                  key={chapter.id} 
                  to={chapter.route}
                >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-border cursor-pointer hover:-translate-y-1 bg-card">
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={chapter.image} 
                    alt={chapter.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  {/* Chapter number badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">
                        {chapter.id}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-abc-primary group-hover:text-abc-blue transition-colors leading-tight">
                      {chapter.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                  
                  {/* Reading Time Badge */}
                  <div className="pt-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium px-3 py-1"
                    >
                      {chapter.readTime}
                    </Badge>
                  </div>
                </div>
                </Card>
              </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Benefits;