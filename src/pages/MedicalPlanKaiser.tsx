import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Maximize2, Minimize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
const MedicalPlanKaiser = () => {
  const [allExpanded, setAllExpanded] = useState(true);
  const [openSections, setOpenSections] = useState({
    overview: true,
    premiums: false,
    planDetails: false
  });
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const toggleAllSections = () => {
    const newExpandedState = !allExpanded;
    setAllExpanded(newExpandedState);
    setOpenSections({
      overview: newExpandedState,
      premiums: newExpandedState,
      planDetails: newExpandedState
    });
  };
  return <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png" alt="Kaiser Permanente CDHP" className="w-full h-full object-cover opacity-30" />
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
        <div className="relative z-10 text-center space-y-3 md:space-y-4 px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Kaiser Permanente CDHP
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Consumer-Driven Health Plan with Kaiser Permanente
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-6 md:space-y-8">
        <div className="mb-4 md:mb-6">
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
            <VideoPlaceholder title="Kaiser Permanente CDHP Video" />
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
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                Alex
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://healthy.kaiserpermanente.org/southern-california/front-door" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                Virtual Visits
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/medical-plan-kaiser" />
        <Collapsible open={openSections.premiums} onOpenChange={() => toggleSection('premiums')}>
          <Card className="overflow-hidden">
            <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Kaiser Permanente Plan Premiums</h2>
                {openSections.premiums ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6 space-y-8">
                {/* Associate - Per Pay Period */}
                <div className="border border-brand-blue/20 rounded-lg overflow-hidden bg-gradient-card">
                  <div className="bg-brand-black text-white p-4">
                    <h3 className="text-xl font-semibold">Associate — Per Pay Period</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <Table className="border border-brand-blue/20">
                        <TableHeader>
                          <TableRow className="bg-brand-black hover:bg-brand-black">
                            <TableHead rowSpan={2} className="font-semibold text-white border-r border-white/20 align-middle">COVERAGE LEVEL</TableHead>
                            <TableHead colSpan={2} className="font-semibold text-white text-center border-r border-white/20">NONEXEMPT</TableHead>
                            <TableHead colSpan={2} className="font-semibold text-white text-center" style={{
                            backgroundColor: '#888888'
                          }}>EXEMPT</TableHead>
                          </TableRow>
                          <TableRow className="bg-brand-black hover:bg-brand-black">
                            <TableHead className="font-semibold text-white text-center border-r border-white/20">NONENGAGED</TableHead>
                            <TableHead className="font-semibold text-white text-center border-r border-white/20">ENGAGED</TableHead>
                            <TableHead className="font-semibold text-white text-center border-r border-white/20" style={{
                            backgroundColor: '#888888'
                          }}>NONENGAGED</TableHead>
                            <TableHead className="font-semibold text-white text-center" style={{
                            backgroundColor: '#888888'
                          }}>ENGAGED</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">ASSOCIATE ONLY</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$47.09</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$16.28</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20 bg-gray-50">$102.02</TableCell>
                            <TableCell className="text-center bg-gray-50">$35.27</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">ASSOCIATE + SPOUSE</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$143.19</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$79.61</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20 bg-gray-50">$310.24</TableCell>
                            <TableCell className="text-center bg-gray-50">$172.49</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">ASSOCIATE + CHILD(REN)</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$114.20</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$64.58</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20 bg-gray-50">$247.43</TableCell>
                            <TableCell className="text-center bg-gray-50">$139.93</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">ASSOCIATE + FAMILY</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$190.29</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20">$103.40</TableCell>
                            <TableCell className="text-center border-r border-brand-blue/20 bg-gray-50">$412.29</TableCell>
                            <TableCell className="text-center bg-gray-50">$224.04</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* Producer - Per Month */}
                <div className="border border-brand-blue/20 rounded-lg overflow-hidden bg-gradient-card">
                  <div className="bg-brand-black text-white p-4">
                    <h3 className="text-xl font-semibold">Producer — Per Month</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <Table className="border border-brand-blue/20">
                        <TableHeader>
                          <TableRow className="bg-brand-black hover:bg-brand-black">
                            <TableHead className="font-semibold text-white border-r border-white/20">COVERAGE LEVEL</TableHead>
                            <TableHead className="font-semibold text-white text-center">PRODUCER<br />MONTHLY</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER ONLY</TableCell>
                            <TableCell className="text-center">$560.04</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + SPOUSE</TableCell>
                            <TableCell className="text-center">$1,176.08</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + CHILD(REN)</TableCell>
                            <TableCell className="text-center">$1,086.48</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + FAMILY</TableCell>
                            <TableCell className="text-center">$1,752.92</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Plan Details Section */}
        <Collapsible open={openSections.planDetails} onOpenChange={() => toggleSection('planDetails')}>
          <Card className="overflow-hidden">
            <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Kaiser Permanente Plan Coverage Details</h2>
                {openSections.planDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6">
                <div className="overflow-x-auto">
                  <Table className="border border-brand-blue/20">
                    <TableHeader>
                      <TableRow className="bg-brand-black hover:bg-brand-black">
                        <TableHead className="font-semibold text-white border-r border-white/20" colSpan={2}>IN-NETWORK ONLY</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Annual Deductible Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={2} className="font-bold text-foreground">
                          ANNUAL DEDUCTIBLE (APPLIES TO OUT-OF-POCKET MAXIMUM)
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INDIVIDUAL</TableCell>
                        <TableCell className="text-center">$1,700</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY<br />(EACH MEMBER IN A FAMILY OF TWO OR MORE MEMBERS)</TableCell>
                        <TableCell className="text-center">$3,400</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY<br />(ENTIRE FAMILY OF TWO OR MORE MEMBERS)</TableCell>
                        <TableCell className="text-center">$3,400</TableCell>
                      </TableRow>

                      {/* Annual Out-of-Pocket Maximum Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={2} className="font-bold text-foreground">
                          ANNUAL OUT-OF-POCKET MAXIMUM (INCLUDES DEDUCTIBLE)
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INDIVIDUAL</TableCell>
                        <TableCell className="text-center">$3,400</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY<br />(EACH MEMBER IN A FAMILY OF TWO OR MORE MEMBERS)</TableCell>
                        <TableCell className="text-center">$3,400</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY<br />(ENTIRE FAMILY OF TWO OR MORE MEMBERS)</TableCell>
                        <TableCell className="text-center">$6,800</TableCell>
                      </TableRow>

                      {/* Covered Services Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={2} className="font-bold text-foreground">
                          COVERED SERVICES — ASSOCIATE PAYS<sup>1</sup>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">PHYSICIAN OFFICE SERVICES</TableCell>
                        <TableCell className="text-center">$20 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">SPECIALIST OFFICE VISIT</TableCell>
                        <TableCell className="text-center">$20 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">
                          PREVENTIVE CARE (ROUTINE PHYSICAL, WELL-CHILD, PAP SMEAR, MAMMOGRAM, PROSTATE EXAM AND PREVENTIVE DIAGNOSTIC)<sup>2</sup>
                        </TableCell>
                        <TableCell className="text-center">0%; deductible does not apply</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">OUTPATIENT DIAGNOSTIC SERVICES: LAB AND X-RAY</TableCell>
                        <TableCell className="text-center">$10 per encounter</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">ROUTINE EYE EXAMS</TableCell>
                        <TableCell className="text-center">$20 per visit; plan deductible does not apply</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">OUTPATIENT SURGERY</TableCell>
                        <TableCell className="text-center">$150 per procedure</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INPATIENT HOSPITAL CARE</TableCell>
                        <TableCell className="text-center">$250 per admission</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">EMERGENCY CARE (HOSPITAL EMERGENCY ROOM)</TableCell>
                        <TableCell className="text-center">$100 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">URGENT CARE CENTER</TableCell>
                        <TableCell className="text-center">$20 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">AMBULANCE SERVICE</TableCell>
                        <TableCell className="text-center">$100 per trip</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">
                          OUTPATIENT REHAB (PHYSICAL, OCCUPATIONAL AND SPEECH THERAPY; CHIROPRACTIC CARE; AND ACUPUNCTURE<br />(60 VISITS PER YEAR COMBINED)
                        </TableCell>
                        <TableCell className="text-center">$20 per visit</TableCell>
                      </TableRow>

                      {/* Prescription Drugs Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={2} className="font-bold text-foreground">
                          PRESCRIPTION DRUGS AND MAIL ORDER<sup>1</sup>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">PREVENTIVE MEDICATIONS<sup>3</sup></TableCell>
                        <TableCell className="text-center">0%</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">OTHER PRESCRIPTIONS</TableCell>
                        <TableCell className="text-center">20%</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">
                          MENTAL HEALTH AND CHEMICAL DEPENDENCY (INPATIENT AND OUTPATIENT AUTHORIZED SERVICES)
                        </TableCell>
                        <TableCell className="text-center">20%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p><sup>1</sup> After deductible is met, unless otherwise noted</p>
                  <p><sup>2</sup> Preventive care services are covered at 100%; no deductible applies</p>
                  <p><sup>3</sup> Preventive medications are those prescribed to prevent illness in accordance with ACA guidelines</p>
                </div>
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <BenefitsNavigation currentRoute="/benefits/medical-plan-kaiser" />
      </div>
      <Footer />
    </div>;
};
export default MedicalPlanKaiser;