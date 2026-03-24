import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const OverviewPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/02943196-08c2-4098-8cb8-306523f4b52d.png" 
            alt="Overview of Plans" 
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
            Overview of Available Plans
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Protecting what matters most with comprehensive benefits
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>

        {/* Video Embed */}
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Overview of Available Plans Video" />
          </div>
        </Card>

        {/* Quick Access Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-primary mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
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
            <Link to="/important-contacts" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                Contacts Directory
              </Button>
            </Link>
            <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </div>
        </Card>

        {/* Plan Information Section */}
        <div className="space-y-8">
          {/* Medical Plans */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Medical Plans</h2>
            <p className="text-muted-foreground mb-6">
              Medical benefits provided by BlueCross BlueShield and include coverage for both in-network and out-of-network providers. All plans participate in the same network, and you may choose your provider.
            </p>
            <p className="text-muted-foreground mb-6 font-semibold">
              3 medical plans available: PPO Plan, Prime HDHP, Alternate HDHP
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4"></TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">PPO</TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Prime HDHP</TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Alternate HDHP</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Associate</TableCell>
                    <TableCell className="text-center">$159.98</TableCell>
                    <TableCell className="text-center">$71.24</TableCell>
                    <TableCell className="text-center">$41.03</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + spouse</TableCell>
                    <TableCell className="text-center">$362.40</TableCell>
                    <TableCell className="text-center">$183.65</TableCell>
                    <TableCell className="text-center">$126.02</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + child(ren)</TableCell>
                    <TableCell className="text-center">$299.78</TableCell>
                    <TableCell className="text-center">$150.36</TableCell>
                    <TableCell className="text-center">$102.94</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Family</TableCell>
                    <TableCell className="text-center">$552.04</TableCell>
                    <TableCell className="text-center">$288.80</TableCell>
                    <TableCell className="text-center">$199.99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Dental Plans */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Dental Plans</h2>
            <p className="text-muted-foreground mb-6">
              Dental benefits provided by MetLife
            </p>
            <p className="text-muted-foreground mb-6 font-semibold">
              2 dental plans available: Core Plan (formerly known as Preferred Plan) and Enhanced Plan (formerly known as Choice Plan)
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3"></TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Core Dental Plan</TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Enhanced Dental Plan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Associate</TableCell>
                    <TableCell className="text-center">$4.67</TableCell>
                    <TableCell className="text-center">$6.99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + spouse</TableCell>
                    <TableCell className="text-center">$13.80</TableCell>
                    <TableCell className="text-center">$19.87</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + child(ren)</TableCell>
                    <TableCell className="text-center">$12.11</TableCell>
                    <TableCell className="text-center">$17.81</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Family</TableCell>
                    <TableCell className="text-center">$20.96</TableCell>
                    <TableCell className="text-center">$30.68</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Vision Plans */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-4">Vision Plans</h2>
            <p className="text-muted-foreground mb-6">
              Vision benefits provided by VSP (Vision Service Plan)
            </p>
            <p className="text-muted-foreground mb-6 font-semibold">
              2 vision plans available: Core VSP and Enhanced VSP
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3"></TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Core VSP Plan</TableHead>
                    <TableHead className="text-center bg-abc-blue text-white font-semibold">Enhanced VSP Plan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Associate</TableCell>
                    <TableCell className="text-center">$3.90</TableCell>
                    <TableCell className="text-center">$8.98</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + spouse</TableCell>
                    <TableCell className="text-center">$7.81</TableCell>
                    <TableCell className="text-center">$17.96</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associate + child(ren)</TableCell>
                    <TableCell className="text-center">$8.36</TableCell>
                    <TableCell className="text-center">$19.22</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Family</TableCell>
                    <TableCell className="text-center">$13.32</TableCell>
                    <TableCell className="text-center">$30.65</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Premium Note */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong>A note about premiums:</strong> Premiums are bi-weekly associate payroll contributions
            </p>
          </Card>
        </div>

        <BenefitsNavigation currentRoute="/benefits/overview-plans" />
      </div>
      <Footer />
    </div>
  );
};

export default OverviewPlans;
