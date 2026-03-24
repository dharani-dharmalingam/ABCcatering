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
const MedicalPlanSurest = () => {
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
          <img src="/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png" alt="Surest Health Plan" className="w-full h-full object-cover opacity-30" />
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
            Surest Health Plan
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Simple, transparent healthcare with Surest
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="mb-6 flex justify-between items-center gap-4 flex-wrap">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
          
          <Button variant="outline" size="sm" onClick={toggleAllSections} className="flex-shrink-0 gap-2" title={allExpanded ? "Collapse All" : "Expand All"}>
            {allExpanded ? <>
                <Minimize2 className="h-4 w-4" />
                <span className="hidden sm:inline">Collapse All</span>
              </> : <>
                <Maximize2 className="h-4 w-4" />
                <span className="hidden sm:inline">Expand All</span>
              </>}
          </Button>
        </div>

        {/* Video Section */}
        <Card className="p-6">
          <div className="aspect-video w-full print:hidden">
            <VideoPlaceholder title="Surest Health Plan Video" />
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
            <a href="https://www.surest.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
              <Button size="lg" className="gap-2 w-full h-12">
                Virtual Visits
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/medical-plan-surest" />
        <Collapsible open={openSections.premiums} onOpenChange={() => toggleSection('premiums')}>
          <Card className="overflow-hidden">
            <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Surest Plan Premiums</h2>
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
                            <TableCell className="text-center">$746.57</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + SPOUSE</TableCell>
                            <TableCell className="text-center">$1,566.86</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + CHILD(REN)</TableCell>
                            <TableCell className="text-center">$1,447.16</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-brand-blue-light/30">
                            <TableCell className="font-medium border-r border-brand-blue/20">PRODUCER + FAMILY</TableCell>
                            <TableCell className="text-center">$2,406.51</TableCell>
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
                <h2 className="text-2xl font-bold">Surest Plan Coverage Details</h2>
                {openSections.planDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6">
                <div className="overflow-x-auto">
                  <Table className="border border-brand-blue/20">
                    <TableHeader>
                      <TableRow className="bg-brand-black hover:bg-brand-black">
                        <TableHead className="font-semibold text-white border-r border-white/20"></TableHead>
                        <TableHead className="font-semibold text-white text-center border-r border-white/20">IN-NETWORK</TableHead>
                        <TableHead className="font-semibold text-white text-center">OUT-OF-NETWORK</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Annual Deductible Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={3} className="font-bold text-foreground">
                          ANNUAL DEDUCTIBLE
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INDIVIDUAL</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$0</TableCell>
                        <TableCell className="text-center">$0</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$0</TableCell>
                        <TableCell className="text-center">$0</TableCell>
                      </TableRow>

                      {/* Annual Out-of-Pocket Maximum Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={3} className="font-bold text-foreground">
                          ANNUAL OUT-OF-POCKET MAXIMUM
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INDIVIDUAL</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$4,000</TableCell>
                        <TableCell className="text-center">$8,000</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">FAMILY</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$8,000</TableCell>
                        <TableCell className="text-center">$16,000</TableCell>
                      </TableRow>

                      {/* Covered Services Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={3} className="font-bold text-foreground">
                          COVERED SERVICES — ASSOCIATE PAYS
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">PHYSICIAN OFFICE SERVICES</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$10 - $65 per visit</TableCell>
                        <TableCell className="text-center">$195 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">SPECIALIST OFFICE VISIT</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$10 - $65 per visit</TableCell>
                        <TableCell className="text-center">$195 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">
                          PREVENTIVE CARE (ROUTINE PHYSICAL, WELL-CHILD, PAP SMEAR, MAMMOGRAM, PROSTATE EXAM, AND PREVENTIVE DIAGNOSTIC)<sup>1</sup>
                        </TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">No charge</TableCell>
                        <TableCell className="text-center">$100 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">OUTPATIENT DIAGNOSTIC SERVICES: LAB AND X-RAY</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">Routine: No charge<br />Non-routine: $10 - $675 per visit</TableCell>
                        <TableCell className="text-center">Routine: No charge<br />Non-routine: Up to $2,025 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">ROUTINE EYE EXAMS</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">No charge</TableCell>
                        <TableCell className="text-center">$195 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">MATERNITY CARE</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$625 - $1,600 per admission</TableCell>
                        <TableCell className="text-center">$4,800 per admission</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">OUTPATIENT SURGERY</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$15 - $2,500 per procedure</TableCell>
                        <TableCell className="text-center">Up to $7,000 per procedure</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">INPATIENT HOSPITAL CARE</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$15 - $2,500 per admission</TableCell>
                        <TableCell className="text-center">Up to $7,000 per admission</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">EMERGENCY CARE (HOSPITAL EMERGENCY ROOM)</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$350 per visit</TableCell>
                        <TableCell className="text-center">$350 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">URGENT CARE CENTER USE</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$35 per visit</TableCell>
                        <TableCell className="text-center">$105 per visit</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">AMBULANCE SERVICE</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$225 per trip</TableCell>
                        <TableCell className="text-center">$225 per trip</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">
                          OUTPATIENT REHAB (PHYSICAL, OCCUPATIONAL AND SPEECH THERAPY; CHIROPRACTIC CARE; AND ACUPUNCTURE (60 VISITS PER YEAR COMBINED)
                        </TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$5 - 85 per visit</TableCell>
                        <TableCell className="text-center">Up to $215 per visit</TableCell>
                      </TableRow>

                      {/* Prescription Drugs Section */}
                      <TableRow className="bg-muted hover:bg-muted">
                        <TableCell colSpan={3} className="font-bold text-foreground">
                          PRESCRIPTION DRUGS AND MAIL ORDER
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">GENERIC</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$5 copay (30-day)<br />$15 copay (90-day)</TableCell>
                        <TableCell className="text-center">Not covered</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">PREFERRED</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$40 copay (30-day)<br />$100 copay (90-day)</TableCell>
                        <TableCell className="text-center">Not covered</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">NON-PREFERRED</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$60 copay (30-day)<br />$150 copay (90-day)</TableCell>
                        <TableCell className="text-center">Not covered</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-brand-blue-light/30">
                        <TableCell className="border-r border-brand-blue/20">SPECIALTY</TableCell>
                        <TableCell className="text-center border-r border-brand-blue/20">$170 - $230 copay (30-day)</TableCell>
                        <TableCell className="text-center">Not covered</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p><sup>1</sup> Preventive care services are covered at no charge when received in-network</p>
                </div>
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <BenefitsNavigation currentRoute="/benefits/medical-plan-surest" />
      </div>
      <Footer />
    </div>;
};
export default MedicalPlanSurest;