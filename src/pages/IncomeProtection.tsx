import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const IncomeProtection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/473b632d-b809-4cb0-aaf7-30953f25d531.png" alt="Income Protection" className="w-full h-full object-cover opacity-30" />
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">Income Protection</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">Disability insurance and income protection benefits</p>
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
              <VideoPlaceholder title="Income Protection Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">
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
              <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
                <Button size="lg" className="gap-2 w-full h-12">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
              </a>
            </div>
          </Card>

          {/* Overview Section */}
          <Card className="p-8">
            <div className="space-y-6">
              <p className="text-foreground">
                We offer both Short-Term and Long-Term Disability Insurance at no cost to you
              </p>
              <ul className="space-y-3 text-foreground ml-6">
                <li className="flex items-start">
                  <span className="text-abc-primary mr-3 mt-1">•</span>
                  <span>This helps replace your income if {"you're"} unable to work due to an injury or illness</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Short-Term Disability Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Short-Term Disability Insurance Core Plan</h2>
            
            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Short-Term Disability insurance is designed to provide you with income protection on a more immediate, short-term basis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>The Core Plan is provided by ABC Catering at no cost to you. Enrollment in this plan is automatic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>An additional Buy-Up Plan is available for purchase to provide you with extra financial protection</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3 bg-abc-blue text-white font-semibold">Insurance Coverage</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">Short-Term Disability Core Plan</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">Short-Term Disability Buy-Up Plan*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Your cost</TableCell>
                      <TableCell className="text-center">provided by ABC Catering at no cost to you</TableCell>
                      <TableCell className="text-center">Depends on your earnings</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">When benefits begin</TableCell>
                      <TableCell className="text-center">After 7 calendar days of inability to work</TableCell>
                      <TableCell className="text-center">After 7 calendar days of inability to work</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">How much it pays</TableCell>
                      <TableCell className="text-center">60% of your income to a maximum of $3,500 per week</TableCell>
                      <TableCell className="text-center">An additional 30% of your income to a maximum of $2,000 per week</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">How long payments last</TableCell>
                      <TableCell className="text-center">Up to 180 days</TableCell>
                      <TableCell className="text-center">Up to 180 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Benefit tax status</TableCell>
                      <TableCell className="text-center">Benefit payments are taxable income</TableCell>
                      <TableCell className="text-center">Benefit payments are tax-free income</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <p className="text-sm text-muted-foreground">
                * Pre-existing exclusion: You will not be covered for any disability that happens in the first six months of coverage if you received treatment for that condition in the three months before coverage began.
              </p>
            </div>
          </Card>

          {/* Long-Term Disability Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Long term disability insurance</h2>
            
            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Long-Term Disability insurance is designed to provide you with lasting income protection in the event {"you're"} unable to return to work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>This coverage is provided by ABC Catering at no cost to you</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2 bg-abc-blue text-white font-semibold">Insurance Coverage</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">Long-Term Disability Plan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Your cost</TableCell>
                      <TableCell className="text-center">Provided by ABC Catering at no cost to you</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">When benefits begin</TableCell>
                      <TableCell className="text-center">After 180 calendar days of inability to work</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">How much it pays</TableCell>
                      <TableCell className="text-center">60% of your income up to $20,000 per month</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">How long payments last</TableCell>
                      <TableCell className="text-center">Up to your Social Security Normal Retirement Age if you remain unable to work</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Benefit tax status</TableCell>
                      <TableCell className="text-center">Benefit payments are taxable income</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/income-protection" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IncomeProtection;