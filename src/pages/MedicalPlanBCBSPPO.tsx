import { ArrowLeft, ExternalLink, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
const MedicalPlanBCBSPPO = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png" alt="BCBS PPO" className="w-full h-full object-cover opacity-30" />
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
            Medical Plan - BCBS PPO
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Blue Cross Blue Shield PPO plan with network flexibility
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

        {/* Plan Overview */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Plan Overview</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Your medical benefits are provided by BlueCross BlueShield and include coverage for both in-network and out-of-network providers - however choosing a provider that is in network will provide you with significant savings.
            </p>
            <Alert className="border-yellow-500/50 bg-yellow-500/10">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-600">
                <strong>Important:</strong> This plan is not eligible for HSA (health savings account).
              </AlertDescription>
            </Alert>
          </div>
        </Card>

        {/* Video Embed */}
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="BCBS PPO Video" />
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
            <a href="https://www.teladochealth.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-56">
              <Button size="lg" className="gap-2 w-full h-12">
                Virtual Visits
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="http://www.myhealthtoolkitfl.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-56">
              <Button size="lg" className="gap-2 w-full h-12">
                BCBS
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            <strong>BCBS Phone:</strong> <a href="tel:1-800-830-1501" className="text-primary hover:underline">1.800.830.1501</a>
          </p>
        </Card>

        {/* Monthly Rates */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Premium Rates</h2>
          <p className="text-muted-foreground mb-6">
            Bi-weekly associate payroll contributions for PPO coverage
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Coverage Level</TableHead>
                  <TableHead className="text-center bg-abc-blue text-white font-semibold">PPO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Associate</TableCell>
                  <TableCell className="text-center">$159.98</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Associate + spouse</TableCell>
                  <TableCell className="text-center">$362.40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Associate + child(ren)</TableCell>
                  <TableCell className="text-center">$299.78</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Family</TableCell>
                  <TableCell className="text-center">$552.04</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Explaining Out of Pocket Costs */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Explaining Out of Pocket Costs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">Copays</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fixed amount you pay for a covered service</li>
                <li>See Copay amounts for different services in the rate summary table below</li>
                <li>These Copays are available prior to meeting your annual deductible amount</li>
                <li>Services not subject to copays like: inpatient hospitalization or outpatient surgery are subject to your annual deductible - meaning you are responsible for the full amount until you meet the annual deductible</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">Deductible</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The amount you must pay for covered services before your insurance starts paying its portion</li>
                <li>This plan's deductible is $2,000 for individual coverage, and $6,000 for family coverage when you visit in-network providers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">Out-of-Pocket Maximum</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The most you will pay during the plan year before your insurance begins to pay 100% of the in-network services</li>
                <li>This plan's in-network out-of-pocket maximum is $6,000 for individual coverage, and $12,000 for family coverage</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Plan Benefits Table */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Plan Benefits Summary</h2>
          <p className="text-muted-foreground mb-6">
            Comprehensive coverage details for PPO plan - Not HSA eligible
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Medical Services</TableHead>
                  <TableHead className="text-center bg-abc-blue text-white font-semibold">PPO Plan (you pay)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Annual deductible</TableCell>
                  <TableCell className="text-center">$2,000 per person<br />$6,000 family maximum</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Out-of-pocket maximum</TableCell>
                  <TableCell className="text-center">$6,000 per person<br />$12,000 family maximum</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coinsurance (your share)</TableCell>
                  <TableCell className="text-center">20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Preventive care</TableCell>
                  <TableCell className="text-center">100% Covered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Primary physician office visit</TableCell>
                  <TableCell className="text-center">$30 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Specialist office visit</TableCell>
                  <TableCell className="text-center">$55 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Independent labs</TableCell>
                  <TableCell className="text-center">100% Covered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Outpatient x-rays</TableCell>
                  <TableCell className="text-center">100% Covered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Imaging (MRI, CT, PET, etc.)</TableCell>
                  <TableCell className="text-center">$250 copay per scan</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Convenience Clinic Visit</TableCell>
                  <TableCell className="text-center">$30 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Teladoc Virtual Visit</TableCell>
                  <TableCell className="text-center">No cost</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Urgent Care Center</TableCell>
                  <TableCell className="text-center">$75 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emergency Room</TableCell>
                  <TableCell className="text-center">$500 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Inpatient Hospitalization</TableCell>
                  <TableCell className="text-center">20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Outpatient Surgery</TableCell>
                  <TableCell className="text-center">20%</TableCell>
                </TableRow>
                <TableRow className="bg-muted/50">
                  <TableCell className="font-bold" colSpan={2}>Out-of-network Coverage (plus balance billing)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Annual Deductible</TableCell>
                  <TableCell className="text-center">$4,500 | $13,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coinsurance (your share)</TableCell>
                  <TableCell className="text-center">50%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Out-of-pocket maximum</TableCell>
                  <TableCell className="text-center">$9,000 | $18,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Prescription Drugs Table */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Prescription Drug Coverage</h2>
          <p className="text-muted-foreground mb-6">
            Prescription costs are determined by the tier assigned to each specific prescription drug.
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Prescription Type</TableHead>
                  <TableHead className="text-center bg-abc-blue text-white font-semibold">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Preventive Medication</TableCell>
                  <TableCell className="text-center">Based on tier</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pharmacy Deductible</TableCell>
                  <TableCell className="text-center">Not applicable</TableCell>
                </TableRow>
                <TableRow className="bg-blue-50">
                  <TableCell className="font-bold" colSpan={2}>Retail (30-day supply)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier one</TableCell>
                  <TableCell className="text-center">$15 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier two</TableCell>
                  <TableCell className="text-center">$50 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier three</TableCell>
                  <TableCell className="text-center">$90 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Speciality</TableCell>
                  <TableCell className="text-center">$150 copay</TableCell>
                </TableRow>
                <TableRow className="bg-blue-50">
                  <TableCell className="font-bold" colSpan={2}>Mail order (90-day supply)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier one</TableCell>
                  <TableCell className="text-center">$30 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier two</TableCell>
                  <TableCell className="text-center">$100 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier three</TableCell>
                  <TableCell className="text-center">$180 copay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Speciality</TableCell>
                  <TableCell className="text-center">$300 copay</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Understanding In-network vs Out-of-network */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Understanding In-network vs. Out-of-network</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">In-network</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You end up paying less money out of your pocket when you receive medical services or supplies from an in-network provider</li>
                <li>These are healthcare providers who are contracted with BCBS</li>
                <li>These providers have generally agreed to accept the discounted amount as negotiated by BCBS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">Out-of-network</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>When you receive medical services or supplies from an out‑of‑network provider, you may be billed a non‑discounted amount for any amount BCBS does not cover</li>
                <li>These are healthcare providers who are not under contract with BCBS to offer healthcare at negotiated prices</li>
                <li>These providers will still accept BCBS, but the level of coverage for services is usually lower than services rendered in‑network</li>
                <li>Balanced billing is when an out-of-network provider charges you the difference between their full rate and what your insurance covers — something you can avoid by using in-network providers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-abc-primary mb-2">How do I know if a provider is in-network or out-of-network?</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ask specifically if they are contracted as a participating provider with your insurance carrier</li>
                <li>The best way to check is to call the customer service telephone number on the back of your insurance card or go to BCBS website to verify a provider's network status</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Help with Selecting Coverage */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Help with Selecting Your Medical Coverage</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <strong className="text-abc-primary">ALEX</strong>, our official ABC Catering benefits counselor, walks you through the process of selecting your coverage options that best meet your needs.
            </p>
            <p className="text-muted-foreground">
              You'll receive personalized, confidential benefits guidance and clear explanations for any questions you may have along the way.
            </p>
            <p className="text-muted-foreground">
              Before making your enrollment decisions, let ALEX help you determine which plans make the most sense for you.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 mt-4">
                Talk to Alex
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        {/* Pharmacy Information */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Pharmacy</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Find an in-network pharmacy or use the drug cost estimator tool by visiting <a href="http://www.optumrx.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.optumrx.com</a></li>
            <li>Discount sites like GoodRx and WellRx provide instant savings. (Please note: Prescriptions acquired under these plans do not go through your insurance)</li>
            <li>Ask your provider or pharmacist if a generic/mail order is available</li>
          </ul>
        </Card>

        {/* Virtual Visits */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Virtual Visits</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Available anywhere via Teladoc</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Regular/primary care visits are covered at 100%</li>
              <li>Specialists and mental health covered with $55 copay</li>
            </ul>
            <div>
              <p className="font-semibold text-abc-primary mb-2">Common issues addressed during virtual visits include:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Allergies</li>
                <li>Sore throat</li>
                <li>Sinus problems</li>
                <li>Stomachache</li>
                <li>Cold & Flu</li>
              </ul>
            </div>
            <a href="https://www.teladochealth.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 mt-4">
                Access Teladoc
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        {/* Getting the Most Out of BCBS */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-abc-primary mb-4">Getting the Most Out of Your BCBS Medical Insurance</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-abc-primary">MyHealthToolkit Mobile App</h3>
            <p className="text-muted-foreground">
              Use the My Health Toolkit app to easily access your healthcare information and tools to help estimate costs, manage claims, and find providers — anytime and anywhere
            </p>
            <a href="http://myhealthtoolkit.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 mt-2">
                Visit MyHealthToolkit
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/medical-plan-bcbs-ppo" />
      </div>
      <Footer />
    </div>;
};
export default MedicalPlanBCBSPPO;