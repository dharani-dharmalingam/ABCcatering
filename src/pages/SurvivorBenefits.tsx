import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SurvivorBenefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/eaed746c-13a7-43ba-8d90-162c8afd49ec.png" 
            alt="Survivor Benefits" 
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
            Survivor Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Life insurance and survivor benefit protections for your beneficiaries
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
              <VideoPlaceholder title="Survivor Benefits Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">
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
                href="http://www.mutualofomaha.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-64"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Mutual of Omaha
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                <strong>Mutual of Omaha:</strong>{" "}
                <a href="tel:800-775-8805" className="text-primary hover:underline">
                  1.800.775.8805
                </a>
              </p>
              <div className="flex justify-center">
                <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
                  <Button size="lg" className="gap-2 w-full h-12">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Overview Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">ABC Catering provides Basic Life and Accidental Death & Dismemberment Insurance (AD&D)</h2>
            
            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>If you are a full-time or part-time benefits eligible employee - you automatically receive Life and AD&D insurance even if you {"don't"} enroll in other benefits. Coverage is automatic, however {"you'll"} need to designate a beneficiary</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Coverage amount</h3>
                <ul className="space-y-3 text-foreground ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Amount of your annual salary (up to $1,000,000) through Mutual of Omaha</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>At age 65, your life insurance amount begins to reduce by a percentage of the original coverage amount:</span>
                  </li>
                </ul>
                
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-abc-blue text-white font-semibold">At age:</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">65</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">70</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">75</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">80</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">The policy reduces by:</TableCell>
                        <TableCell className="text-center">35%</TableCell>
                        <TableCell className="text-center">45%</TableCell>
                        <TableCell className="text-center">70%</TableCell>
                        <TableCell className="text-center">80%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">AD&D Coverage</h3>
                <p className="text-foreground mb-4">
                  AD&D, or Accidental Death & Dismemberment insurance, is equal to the basic life insurance policy you receive through ABC Catering and may pay a benefit in one of two ways:
                </p>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <strong>Death:</strong> If your death is caused due to an accident, the AD&D benefit pays in addition to your life insurance (your beneficiary would receive both the life insurance amount and the AD&D amount)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <strong>Dismemberment:</strong> If, as the result of an accident, you either lose a covered body part (such as a limb) or lose the function of a covered body part, you may receive a percentage of the total AD&D benefit depending on the specific functions that have been lost
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Other Voluntary benefits</h3>
                <p className="text-foreground mb-4">Please reference full benefits guide for more details</p>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Voluntary life insurance - provides additional coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Voluntary AD&D insurance - provides additional coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/survivor-benefits" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SurvivorBenefits;