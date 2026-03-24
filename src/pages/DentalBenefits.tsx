import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const DentalBenefits = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/025ca561-47f3-48f3-af70-39b4da1a37c2.png" alt="Dental Benefits" className="w-full h-full object-cover opacity-30" />
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
            Dental Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Comprehensive dental coverage and preventive care benefits
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

        {/* Callout Alert */}
        <Alert className="border-abc-primary bg-abc-primary/10">
          <AlertDescription className="text-base">
            You can find in-network dentists easily using MetLife's online provider search or mobile app.
          </AlertDescription>
        </Alert>

        {/* Video Section */}
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Dental Benefits Video" />
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-primary mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto mb-4">
            <a href="https://portal.abccatering.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-56">
              <Button size="lg" className="gap-2 w-full h-12">
                UKG
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-56">
              <Button size="lg" className="gap-2 w-full h-12">
                Alex
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="http://www.metlife.com/dental" target="_blank" rel="noopener noreferrer" className="w-full sm:w-56">
              <Button size="lg" className="gap-2 w-full h-12">
                MetLife
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
          <div className="text-muted-foreground text-sm">
            <p>
              <strong>MetLife Phone:</strong> <a href="tel:1-800-275-4638" className="text-primary hover:underline">1.800.275.4638</a>
            </p>
          </div>
        </Card>

        {/* Dental Overview Section */}
        <Card className="p-8">
          <h2 className="text-4xl font-bold text-abc-primary mb-6">Dental</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Dental plans cover diagnostic and preventive care, plus basic and major services. Although you can choose any 
            dental provider, you will generally pay less when you visit an in-network dentist. If you choose an out-of-network 
            provider, you may be billed the difference between what MetLife pays, and what your out-of-network provider 
            charges for the services. To locate an in-network provider, please visit{" "}
            <a href="https://www.metlife.com/dental" target="_blank" rel="noopener noreferrer" className="text-abc-primary hover:underline font-semibold">
              www.metlife.com/dental
            </a>.
          </p>

          <h3 className="text-2xl font-bold text-abc-primary mb-4">With a MetLife Plus dentist, you'll enjoy:</h3>
          <div className="space-y-3 mb-8">
            <div>
              <span className="font-bold">Quality Assurance:</span> Dentists are monitored for proper licensing, cleanliness and safety.
            </div>
            <div>
              <span className="font-bold">No balance billing:</span> You won't be charged more than the contracted rate.
            </div>
            <div>
              <span className="font-bold">No pre-payment:</span> You'll pay only your portion of the bill - insurance pays your dentist directly.
            </div>
            <div>
              <span className="font-bold">Lower prices:</span> Through reduced fees.
            </div>
          </div>
        </Card>

        {/* Plan Comparison Table */}
        <Card className="p-8">
          <div className="overflow-x-auto">
            <Table className="border border-abc-primary/20">
              <TableHeader>
                <TableRow className="bg-abc-blue hover:bg-abc-blue">
                  <TableHead className="font-semibold text-white border-r border-white/20">Dental</TableHead>
                  <TableHead className="font-semibold text-white text-center border-r border-white/20" colSpan={2}>Core Plan</TableHead>
                  <TableHead className="font-semibold text-white text-center" colSpan={2}>Enhanced Plan</TableHead>
                </TableRow>
                <TableRow className="bg-abc-blue hover:bg-abc-blue">
                  <TableHead className="font-semibold text-white border-r border-white/20"></TableHead>
                  <TableHead className="font-semibold text-white text-center border-r border-white/20">In-network</TableHead>
                  <TableHead className="font-semibold text-white text-center border-r border-white/20">Out-of-network</TableHead>
                  <TableHead className="font-semibold text-white text-center border-r border-white/20">In-network</TableHead>
                  <TableHead className="font-semibold text-white text-center">Out-of-network</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-muted/30">
                  <TableCell className="font-medium border-r border-primary/20">Annual deductible (Individual/Family)</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$50/$150</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$100/$300</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$50/$150</TableCell>
                  <TableCell className="text-center">$50/$150</TableCell>
                </TableRow>
                <TableRow className="bg-background">
                  <TableCell className="font-medium border-r border-primary/20">Annual maximum (per person)</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$1,750</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$1,750</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$2,500</TableCell>
                  <TableCell className="text-center">$2,500</TableCell>
                </TableRow>
                <TableRow className="bg-muted/30">
                  <TableCell className="font-medium border-r border-primary/20">Diagnostic and preventive care</TableCell>
                  <TableCell className="text-center border-r border-primary/20">100%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">100%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">100%</TableCell>
                  <TableCell className="text-center">100%</TableCell>
                </TableRow>
                <TableRow className="bg-background">
                  <TableCell className="font-medium border-r border-primary/20">Basic services</TableCell>
                  <TableCell className="text-center border-r border-primary/20">100%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">
                    <div>20%</div>
                    <div className="text-sm text-muted-foreground">+ balance billing</div>
                  </TableCell>
                  <TableCell className="text-center border-r border-primary/20">20%</TableCell>
                  <TableCell className="text-center">
                    <div>20%</div>
                    <div className="text-sm text-muted-foreground">+ balance billing</div>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-muted/30">
                  <TableCell className="font-medium border-r border-primary/20">Major services</TableCell>
                  <TableCell className="text-center border-r border-primary/20">40%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">50%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">50%</TableCell>
                  <TableCell className="text-center">
                    <div>50%</div>
                    <div className="text-sm text-muted-foreground">+ balance billing</div>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-background">
                  <TableCell className="font-medium border-r border-primary/20">Orthodontia*</TableCell>
                  <TableCell className="text-center border-r border-primary/20">50%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">50%</TableCell>
                  <TableCell className="text-center border-r border-primary/20">50%</TableCell>
                  <TableCell className="text-center">50%</TableCell>
                </TableRow>
                <TableRow className="bg-muted/30">
                  <TableCell className="font-medium border-r border-primary/20">Lifetime maximum</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$1,500</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$1,500</TableCell>
                  <TableCell className="text-center border-r border-primary/20">$1,500</TableCell>
                  <TableCell className="text-center">$1,500</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            *Adult Orthodontia Coverage is available for the Enhanced Dental Plan. Orthodontia is covered for children up to age 19 on the Core Dental Plan.
          </p>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/dental-benefits" />
      </div>
      <Footer />
    </div>;
};
export default DentalBenefits;