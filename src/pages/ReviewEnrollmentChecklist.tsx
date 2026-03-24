import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ReviewEnrollmentChecklist = () => {
  const checklistItems = [
    "Double-check your dependent coverage",
    "Review and update beneficiary elections if needed",
    "Plan ahead for HSA or FSA contributions",
    "Make sure your personal details are accurate and current (home address, contact information, etc)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-abc-blue to-blue-600 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/7fd7ab4f-0568-45ff-982c-89eb98965874.png" 
            alt="Enrollment Checklist" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-abc-primary/90 to-abc-primary/70" />
        </div>
        
        {/* Geometric Design Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-white/10 to-transparent transform rotate-12" />
            <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-tl from-white/15 to-transparent transform -rotate-6" />
            <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent transform rotate-45" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Review Enrollment Checklist
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Get ready to enroll in your benefits
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
            <VideoPlaceholder title="Enrollment Checklist Video" />
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-blue mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a href="https://portal.abccatering.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                UKG
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/review-enrollment-checklist" />

        {/* Checklist Section */}
        <Card className="p-8 md:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-abc-primary">
                Let's make sure you are ready to enroll!
              </h2>
              <p className="text-lg text-muted-foreground">
                Review the checklist below before enrolling in your benefits
              </p>
            </div>

            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-abc-blue" />
                  </div>
                  <p className="text-base md:text-lg text-foreground pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReviewEnrollmentChecklist;