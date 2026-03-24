import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SupplementalHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/473b632d-b809-4cb0-aaf7-30953f25d531.png" alt="Supplemental Health" className="w-full h-full object-cover opacity-30" />
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">Supplemental Health</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">Additional health coverage and supplemental insurance plans</p>
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
              <VideoPlaceholder title="Supplemental Health Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">
              Quick Access
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap max-w-4xl mx-auto mb-4">
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
              <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
                <Button size="lg" className="gap-2 w-full h-12">
                  <Mail className="h-4 w-4" />
                  Contact Us
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
            </div>
          </Card>

          {/* Overview Section */}
          <Card className="p-8">
            <div className="space-y-6">
              <p className="text-foreground">
                Our medical plans offer excellent coverage for healthcare needs. However, {"everyone's"} needs differ, and {"that's"} where supplemental health options come into play. These benefits are designed to protect your {"family's"} finances in case of an unforeseen injury or illness. These benefits are offered to you through Mutual of Omaha.
              </p>
              <p className="text-foreground">
                These plans work alongside your health insurance, helping fill financial gaps when unexpected events happen.
              </p>
            </div>
          </Card>

          {/* Critical Illness Coverage Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Critical Illness Coverage</h2>
            
            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Critical Illness coverage through Mutual of Omaha is designed to assist in covering out-of-pocket expenses related to a covered diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>This benefit pays you a lump sum benefit regardless of any medical insurance in place; the funds are yours to use at your discretion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You may elect this coverage with no medical questions required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You may take this policy with you if you retire or leave ABC Catering (to age 70)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Family coverage is available, and children are covered at no additional cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>$50 Health Screening Benefit per person per year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Pre-existing conditions apply only for cancers that have been diagnosed or treated in the 12 months prior to the re-occurrence of that same cancer</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Covered illness include:</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Cancer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Heart Attack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Coronary Bypass Surgery (pays at 25%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Stroke</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Major Organ Transplant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>End Stage Renal Failure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Advanced Alzheimer's</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Advanced Parkinson's</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Childhood and Developmental conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>and MORE!</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Payment frequency</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span><strong>Different diagnoses:</strong> Pays per illness with at least 6 month separation period</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span><strong>Same diagnosis:</strong> Will pay the full amount twice with at east 6 months between diagnosis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Associate cost summary</h3>
                <p className="text-foreground mb-4">
                  Your cost for coverage depends on your age, coverage tier, and tobacco status. Cost information is available in the UKG, HR/Benefits system, or by using the rate table located in the Voluntary Critical Illness Brochure.
                </p>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2 bg-abc-blue text-white font-semibold">Critical Illness and Cancer Insurance</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">Benefit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Associate Only</TableCell>
                        <TableCell className="text-center">$10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Covered Spouse</TableCell>
                        <TableCell className="text-center">$10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Covered Dependent</TableCell>
                        <TableCell className="text-center">$5,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </Card>

          {/* Accident Coverage Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Accident Coverage</h2>
            
            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Accident insurance through Mutual of Omaha is designed to help ease the financial pain of a covered accident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Payments are made directly to you based on injuries and treatments; use the funds however you see fit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Insurance is available for Accidents that occur any time of day, regardless of whether You or Your insured {"Dependent(s)"} are working or not</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Family coverage is available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Medical questions are never required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Coverage pays per covered accident; no limitation on the number of accidents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You may take this policy with you if you retire or leave ABC Catering</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Coverage Details</h3>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-2/3 bg-abc-blue text-white font-semibold">
                          Accident Insurance<br />
                          <span className="text-sm font-normal">(Service payable when treatment is sought due to a covered accident)</span>
                        </TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">Coverage Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Urgent Care / X-Ray</TableCell>
                        <TableCell className="text-center">$125/$150</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Hospital Admission and Confinement*
                        </TableCell>
                        <TableCell className="text-center">$2,500 Admission / $700 per day (up to 365 days)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fracture / Dislocation (Based on a schedule)</TableCell>
                        <TableCell className="text-center">Up to $5,000 / $6,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Appliance (Crutches / Wheelchair / Walker)</TableCell>
                        <TableCell className="text-center">$200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Health Screening Benefit (Per Person, Per Year)</TableCell>
                        <TableCell className="text-center">$50</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/50">
                        <TableCell className="font-bold text-center" colSpan={2}>Bi-weekly Associate Payroll Contributions</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Associate Only</TableCell>
                        <TableCell className="text-center">$5.08</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Associate + Spouse</TableCell>
                        <TableCell className="text-center">$7.38</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Associate + Child(ren)</TableCell>
                        <TableCell className="text-center">$11.54</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Family</TableCell>
                        <TableCell className="text-center">$13.38</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Payable when confined for a covered accident. Minimum of 24 hours per person
                </p>
              </div>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/supplemental-health" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupplementalHealth;
