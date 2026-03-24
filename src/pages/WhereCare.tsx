import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, Clock, Users, Video, ExternalLink, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const WhereCare = () => {
  const careOptions = [
    {
      title: "Emergency Room",
      description: "Serious or life-threatening issues. This is the most expensive place for care, so be sure to use it for true emergencies",
      icon: Phone
    },
    {
      title: "Primary Care Doctor", 
      description: "Regular check-ups and to manage ongoing health issues",
      icon: Users
    },
    {
      title: "Urgent Care",
      description: "Quick treatment for non-emergency situations",
      icon: Clock
    },
    {
      title: "Virtual Visit",
      description: "Easily accessible for common issues like allergies, colds, or minor infections",
      icon: Video
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/healthcare-care.png" 
            alt="Where to Go For Care" 
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
            Where to Go For Care
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Finding the right care option for your health needs
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
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video Section */}
          <Card className="p-6">
            <div className="aspect-video w-full print:hidden">
              <VideoPlaceholder title="Where to Go For Care Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-blue mb-4">
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
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/where-care" />
          <Card className="p-8 hidden lg:block">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 font-bold text-foreground">Virtual Visits</TableHead>
                    <TableHead className="w-1/4 font-bold text-foreground">Primary Care Center ($)</TableHead>
                    <TableHead className="w-1/4 font-bold text-foreground">Urgent Care Center ($$)</TableHead>
                    <TableHead className="w-1/4 font-bold text-foreground">Emergency Room ($$$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* When to Use Row */}
                  <TableRow>
                    <TableCell colSpan={4} className="bg-muted/30 font-semibold">WHEN TO USE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top">
                      <p className="text-sm">
                        You need care for minor illnesses and ailments but would prefer not to leave home. These services are available by phone and online (via webcam).
                      </p>
                    </TableCell>
                    <TableCell className="align-top">
                      <p className="text-sm">
                        You need routine care or treatment for a current health issue. Your primary doctor knows you and your health history, can access your medical records, provide routine care, and manage your medications.
                      </p>
                    </TableCell>
                    <TableCell className="align-top">
                      <p className="text-sm">
                        You need care quickly, but it is not a true emergency. Urgent care centers offer treatment for non-life-threatening injuries or illnesses.
                      </p>
                    </TableCell>
                    <TableCell className="align-top">
                      <p className="text-sm">
                        You need immediate treatment for a serious life-threatening condition. If a situation seems life threatening, call 911 or your local emergency number right away.
                      </p>
                    </TableCell>
                  </TableRow>

                  {/* Types of Care Row */}
                  <TableRow>
                    <TableCell colSpan={4} className="bg-muted/30 font-semibold">TYPES OF CARE*</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cold & flu symptoms</li>
                        <li>Bronchitis</li>
                        <li>Urinary tract infection</li>
                        <li>Sinus problems</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Routine checkups</li>
                        <li>Immunizations</li>
                        <li>Preventive services</li>
                        <li>Managing your general health</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Strains, sprains</li>
                        <li>Minor broken bones (e.g., finger)</li>
                        <li>Minor infections</li>
                        <li>Minor burns</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Heavy bleeding</li>
                        <li>Chest pain</li>
                        <li>Major burns</li>
                        <li>Severe head injury</li>
                      </ul>
                    </TableCell>
                  </TableRow>

                  {/* Costs and Time Considerations Row */}
                  <TableRow>
                    <TableCell colSpan={4} className="bg-muted/30 font-semibold">COSTS AND TIME CONSIDERATIONS**</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Usually a first-time consultation fee and a flat fee or copay for any visit thereafter</li>
                        <li>Typically immediate access to care</li>
                        <li>Prescriptions through telemedicine or virtual visits not allowed in all states</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Often requires a copay and/or coinsurance</li>
                        <li>Normally requires an appointment</li>
                        <li>Short wait time with scheduled appointment</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Copay and/or coinsurance usually higher than an office visit</li>
                        <li>Walk-in patients welcome, but urgency determines order seen and wait time</li>
                      </ul>
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Often requires a much higher copay and/or coinsurance</li>
                        <li>Open 24/7, but waiting periods may be longer because patients with life-threatening emergencies will be treated first</li>
                        <li>Ambulance charges, if applicable, will be separate and may not be in-network</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Disclaimers */}
            <div className="pt-6 mt-6 border-t space-y-2 text-sm text-muted-foreground">
              <p>*This is a sample list of services and may not be all inclusive</p>
              <p>**Costs and time information represent averages only and are not tied to a specific condition or treatment</p>
            </div>
          </Card>

          {/* Care Comparison - Mobile/Tablet Collapsible View */}
          <div className="lg:hidden space-y-4">
            {/* Virtual Visits */}
            <Card className="overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 className="text-xl font-bold text-foreground">Virtual Visits</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        WHEN TO USE
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        You need care for minor illnesses and ailments but would prefer not to leave home. These services are available by phone and online (via webcam).
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        TYPES OF CARE*
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Cold & flu symptoms</li>
                        <li>Bronchitis</li>
                        <li>Urinary tract infection</li>
                        <li>Sinus problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        COSTS AND TIME CONSIDERATIONS**
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Usually a first-time consultation fee and a flat fee or copay for any visit thereafter</li>
                        <li>Typically immediate access to care</li>
                        <li>Prescriptions through telemedicine or virtual visits not allowed in all states</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Primary Care Center */}
            <Card className="overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 className="text-xl font-bold text-foreground">Primary Care Center ($)</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        WHEN TO USE
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        You need routine care or treatment for a current health issue. Your primary doctor knows you and your health history, can access your medical records, provide routine care, and manage your medications.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        TYPES OF CARE*
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Routine checkups</li>
                        <li>Immunizations</li>
                        <li>Preventive services</li>
                        <li>Managing your general health</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        COSTS AND TIME CONSIDERATIONS**
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Often requires a copay and/or coinsurance</li>
                        <li>Normally requires an appointment</li>
                        <li>Short wait time with scheduled appointment</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Urgent Care Center */}
            <Card className="overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 className="text-xl font-bold text-foreground">Urgent Care Center ($$)</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        WHEN TO USE
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        You need care quickly, but it is not a true emergency. Urgent care centers offer treatment for non-life-threatening injuries or illnesses.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        TYPES OF CARE*
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Strains, sprains</li>
                        <li>Minor broken bones (e.g., finger)</li>
                        <li>Minor infections</li>
                        <li>Minor burns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        COSTS AND TIME CONSIDERATIONS**
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Copay and/or coinsurance usually higher than an office visit</li>
                        <li>Walk-in patients welcome, but urgency determines order seen and wait time</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Emergency Room */}
            <Card className="overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 className="text-xl font-bold text-foreground">Emergency Room ($$$)</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        WHEN TO USE
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        You need immediate treatment for a serious life-threatening condition. If a situation seems life threatening, call 911 or your local emergency number right away.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        TYPES OF CARE*
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Heavy bleeding</li>
                        <li>Chest pain</li>
                        <li>Major burns</li>
                        <li>Severe head injury</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 bg-muted/30 p-2 rounded">
                        COSTS AND TIME CONSIDERATIONS**
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Often requires a much higher copay and/or coinsurance</li>
                        <li>Open 24/7, but waiting periods may be longer because patients with life-threatening emergencies will be treated first</li>
                        <li>Ambulance charges, if applicable, will be separate and may not be in-network</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Disclaimers */}
            <Card className="p-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>*This is a sample list of services and may not be all inclusive</p>
                <p>**Costs and time information represent averages only and are not tied to a specific condition or treatment</p>
              </div>
            </Card>
          </div>

          <BenefitsNavigation currentRoute="/benefits/where-care" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhereCare;