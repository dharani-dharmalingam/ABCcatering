import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeAssistanceProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/a01fb081-31e5-47bf-9f31-2b858e0684be.png" 
            alt="Employee Assistance Program" 
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
            Employee Assistance Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Confidential counseling and support services for you and your family
          </p>
        </div>
      </section>
      
      <main className="container mx-auto px-6 py-16">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Video Section */}
          <Card className="p-6">
            <div className="aspect-video w-full print:hidden">
              <VideoPlaceholder title="Employee Assistance Program Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">
              Quick Access
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
              <a 
                href="https://portal.abccatering.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-56"
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
                className="w-full sm:w-56"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Alex
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a 
                href="https://www.healthadvocate.com/members"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-56"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Health Advocate
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:hr@abccatering.com" className="w-full sm:w-56">
                <Button size="lg" className="gap-2 w-full h-12">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="text-muted-foreground text-sm mt-4">
              <p>
                <strong>Health Advocate:</strong> <a href="tel:1-866-799-2728" className="text-primary hover:underline">1.866.799.2728</a>
              </p>
            </div>
          </Card>

          {/* Overview Section */}
          <Card className="p-6">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                ABC Catering offers all associates and their families access to a confidential Employee Assistance Program (EAP) tailored to your needs.
              </p>
              
              <p className="text-lg leading-relaxed">
                You can access Health Advocate services 24/7 with a licensed, professional counselor available for immediate assistance. {"What's"} more, Health Advocate offers telephone, face to-face, and web based assistance.
              </p>
              
              <p className="text-lg leading-relaxed">
                An EAP is more than just a help line for stress, depression, and substance abuse, it can help you navigate some of {"life's"} toughest challenges.
              </p>

              <div className="bg-abc-primary/10 border-l-4 border-abc-primary p-4 rounded">
                <p className="text-lg font-semibold text-abc-primary">
                  Six free visits (virtual or in person) with licensed professionals per incident.
                </p>
              </div>
            </div>
          </Card>

          {/* Services Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-6">Services include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-foreground">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>alcohol</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>buying a car or home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>cancer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>child and elder care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>diabetes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>dieting</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>eating disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>fitness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>grieving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>heart health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>military life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>pregnancy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>smoking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>student life</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>wills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>debt and bankruptcy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>divorce and child custody</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>post-traumatic stress disorder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>financial planning (estate, retirement, investing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>hurricane preparedness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>marriage and living together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abc-primary mr-2">•</span>
                  <span>and more</span>
                </li>
              </ul>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/employee-assistance-program" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeAssistanceProgram;