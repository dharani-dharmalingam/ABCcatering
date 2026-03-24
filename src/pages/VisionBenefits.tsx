import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const VisionBenefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/5699a3ae-753d-42a9-a5b3-5598f28bb716.png" 
            alt="Vision Benefits" 
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
            Vision Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Comprehensive vision care coverage and eyewear benefits
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
            <VideoPlaceholder title="Vision Benefits Video" />
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-primary mb-4">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto mb-4">
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
              href="http://www.vsp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-56"
            >
              <Button size="lg" className="gap-2 w-full h-12">
                VSP
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
              <strong>VSP Phone:</strong> <a href="tel:1-800-877-7195" className="text-primary hover:underline">1.800.877.7195</a>
            </p>
          </div>
        </Card>

        {/* Health Benefit Callout */}
        <Card className="bg-abc-primary text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">More Than Just a Vision Check</h3>
            <p className="text-white/95 leading-relaxed">
              Your annual Well Vision Exam is more than a vision check — it can help detect early signs of health issues like diabetes and high blood pressure.
            </p>
          </div>
        </Card>

        {/* Overview Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Vision Care Benefits Overview</h2>
          <p className="text-foreground leading-relaxed">
            Our vision care benefits include coverage for eye exams, lenses and frames, contact lenses, and discounts for laser surgery. 
            The vision plan is built around the network providers who offer you higher benefits at a lower cost. Consider using an in-network 
            provider for the most bang for your buck when you need services! For out-of-network providers, you will be reimbursed for services 
            according to the grid below.
          </p>
        </Card>

        {/* Vision Coverage Comparison */}
        <Card className="overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-abc-primary mb-6">Vision Coverage Comparison</h2>
            <div className="overflow-x-auto">
              <Table className="border border-primary/20">
                <TableHeader>
                  <TableRow className="bg-abc-blue hover:bg-abc-blue">
                    <TableHead className="font-semibold text-white border-r border-white/20 min-w-[200px]">Vision</TableHead>
                    <TableHead className="font-semibold text-white text-center border-r border-white/20" colSpan={2}>Core VSP</TableHead>
                    <TableHead className="font-semibold text-white text-center" colSpan={2}>Enhanced VSP*</TableHead>
                  </TableRow>
                  <TableRow className="bg-abc-blue hover:bg-abc-blue">
                    <TableHead className="font-semibold text-white border-r border-white/20"></TableHead>
                    <TableHead className="font-semibold text-white text-center border-r border-white/20">In-network</TableHead>
                    <TableHead className="font-semibold text-white text-center border-r border-white/20">Out-of-network (reimbursement)</TableHead>
                    <TableHead className="font-semibold text-white text-center border-r border-white/20">In-network</TableHead>
                    <TableHead className="font-semibold text-white text-center">Out-of-network (reimbursement)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Eye Exam */}
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20">Eye Exam (every 12 months)</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$10 copay</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $45</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$10 copay</TableCell>
                    <TableCell className="text-center">Up to $45</TableCell>
                  </TableRow>
                  
                  {/* Frames Header */}
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-semibold border-r border-primary/20" colSpan={5}>Frames</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Frequency</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Every 24 months</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Every 24 months</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Every 12 months</TableCell>
                    <TableCell className="text-center">Every 12 months</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">New frames</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$130 allowance, then 20% off balance</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $70</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$200 allowance, then 20% off balance</TableCell>
                    <TableCell className="text-center">Up to $70</TableCell>
                  </TableRow>

                  {/* Lenses Header */}
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-semibold border-r border-primary/20" colSpan={5}>Lenses (every 12 months)</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Single</TableCell>
                    <TableCell className="text-center border-r border-primary/20"></TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $30</TableCell>
                    <TableCell className="text-center border-r border-primary/20"></TableCell>
                    <TableCell className="text-center">Up to $30</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Bifocal</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$15 copay</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $50</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$15 copay</TableCell>
                    <TableCell className="text-center">Up to $50</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Trifocal</TableCell>
                    <TableCell className="text-center border-r border-primary/20"></TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $65</TableCell>
                    <TableCell className="text-center border-r border-primary/20"></TableCell>
                    <TableCell className="text-center">Up to $65</TableCell>
                  </TableRow>

                  {/* Contact Lenses Header */}
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-semibold border-r border-primary/20" colSpan={5}>Contact lenses (every 12 months)</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Elective</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$150 allowance</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $105</TableCell>
                    <TableCell className="text-center border-r border-primary/20">$200 allowance</TableCell>
                    <TableCell className="text-center">Up to $105</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/10">
                    <TableCell className="font-medium border-r border-primary/20 pl-8">Medically necessary</TableCell>
                    <TableCell className="text-center border-r border-primary/20">100% covered</TableCell>
                    <TableCell className="text-center border-r border-primary/20">Up to $210</TableCell>
                    <TableCell className="text-center border-r border-primary/20">100% covered</TableCell>
                    <TableCell className="text-center">Up to $210</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 px-6 pb-2 text-sm text-muted-foreground space-y-1">
              <p>Associates can elect dental and/or vision regardless of their medical enrollment status.</p>
              <p>*Includes Anti-reflective coating, Adult Polycarbonate, Light Care, Some Feature Frames +$50 (ex: Nike, Kendra Scott, Calvin Klein, etc.)</p>
            </div>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/vision-benefits" />
      </div>
      <Footer />
    </div>
  );
};

export default VisionBenefits;
