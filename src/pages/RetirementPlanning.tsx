import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink, CheckCircle2, Calculator, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const RetirementPlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/e7865e2d-c0fa-4670-9382-37fa5d8987f3.png" alt="Retirement Planning" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/70 to-gray-600/50" />
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-br from-gray-400/20 to-transparent transform rotate-12" />
            <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-tl from-slate-400/30 to-transparent transform -rotate-6" />
            <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent transform rotate-45" />
          </div>
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">Retirement Planning</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">401(k) plans, employer matching, and retirement savings options</p>
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
              <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Retirement Planning video coming soon.</p>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-blue mb-4">
              Quick Access
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-4">
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
              <a 
                href="https://www.principal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-64"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Principal
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold">Principal:</span>{" "}
              <a href="tel:800-547-7754" className="text-primary hover:underline">
                800.547.7754
              </a>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/retirement-planning" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RetirementPlanning;