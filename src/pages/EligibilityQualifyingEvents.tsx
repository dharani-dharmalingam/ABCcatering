import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const EligibilityQualifyingEvents = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/2700ff12-1efe-4258-a896-bf440de36c8b.png" alt="Qualifying Life Events" className="w-full h-full object-cover opacity-30" />
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
            Eligibility & Qualifying Life Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Understanding enrollment eligibility and qualifying life events
          </p>
        </div>
      </section>
      
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Eligibility & Qualifying Life Events Video" />
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-primary mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-4">
            <a href="https://portal.abccatering.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                UKG
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                Alex
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

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Eligibility Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              To participate in ABC Catering's benefits plan, you must be:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>A full‑time or part-time associate who is regularly scheduled to work 20 hours or more per week</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-abc-primary mb-3">Eligible dependents</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Spouse or domestic partner</li>
              <li>Children up to 26 years old
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Includes biological, stepchildren, legally adopted</li>
                </ul>
              </li>
              <li>Children beyond the age of 26 that are physically/mentally disabled and dependent on you for support</li>
            </ul>
          </Card>

          {/* Enrollment Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Enrollment</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>Open enrollment is the one time during the year that you are able to make changes to your benefit options without having a qualifying life event</li>
              <li>Newly eligible associates, whether new hires or those transitioning from part-time to full-time, have the opportunity to select their benefits once they meet eligibility requirements</li>
            </ul>
          </Card>

          {/* Qualifying Life Events Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Qualifying life events (QLE)</h2>
            <p className="text-muted-foreground mb-4">
              Changes in your life may permit you to update your coverage at points throughout the year, outside of the open enrollment period.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Changes to coverage must be made within 30 days of when the life event occurs. Proof of the life event is required.</strong>
            </p>
            
            <h3 className="text-xl font-semibold text-abc-primary mb-3">Common Qualifying Events Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>A change in your legal marital status (marriage, divorce or legal separation)</li>
              <li>A change in dependents through birth or adoption or loss of eligibility</li>
              <li>A change in your spouse's employment status (resulting in a loss or gain of coverage)</li>
              <li>Entitlement to Medicare or Medicaid for you or your spouse</li>
              <li>Court-ordered change</li>
              <li>Changes in your address or location that may affect the coverage for which you are eligible</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-abc-primary mb-3">Some Lesser-Known Qualifying Events Are:</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Death in the family (leading to change in dependents or loss of coverage)</li>
              <li>Turning 26 and losing coverage through a parent's plan</li>
            </ul>
          </Card>
        </div>
        
        <BenefitsNavigation currentRoute="/benefits/eligibility-qualifying-events" />
      </main>
      <Footer />
    </div>;
};
export default EligibilityQualifyingEvents;
