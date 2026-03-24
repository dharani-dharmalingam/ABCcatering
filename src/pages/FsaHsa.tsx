import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FsaHsa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/d9b6f359-204f-455c-a39e-667ca4e13547.png" 
            alt="FSA and HSA" 
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
            FSA and HSA
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Flexible spending accounts and health savings account options
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
              <VideoPlaceholder title="FSA and HSA Video" />
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">
              Quick Access
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
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
                href="http://www.fidelity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-56"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Fidelity
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
            <div className="text-muted-foreground text-sm mt-4">
              <p>
                <strong>Fidelity:</strong> <a href="tel:1-800-835-5095" className="text-primary hover:underline">1.800.835.5095</a>
              </p>
            </div>
          </Card>

          {/* HSA Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Health Savings Account (HSA)</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">What is a Health Savings Account?</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>The HSA allows you to save for current and future medical expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Designed to be paired with a qualified High Deductible Health Plan (HDHP), like our Prime or Alternate HDHP, and can provide a smart way to save for current and future Healthcare needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">Your HSA is an account that you own and manage</div>
                      <div className="ml-6 flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">◦</span>
                        <span>You decide how much you contribute, when to use the money for medical services and when to reimburse yourself</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Benefits of HSA</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Your HSA funds roll over every year and can be used tax-free for qualified medical expenses—even in retirement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">Triple tax advantage</div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Contributions are tax-free</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Any interest earned on the account is tax-free</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Withdrawals for qualified health expenses are tax-free</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Who is eligible for an HSA?</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You are enrolled in the HDHP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You are not covered by your {"spouse's"} or {"parent's"} plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You are not eligible to be claimed as a dependent on someone {"else's"} tax return</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You are not enrolled in Medicare or TRICARE, or TRICARE for Life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You have not received VA benefits in the past 3 months</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">How to manage your HSA account</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Access and manage your HSA through your Fidelity NetBenefit account at NetBenefits.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">Making changes to my contributions</div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>During your enrollment period you will establish your contribution amount in the benefit portal</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>You can make changes to your contribution amount anytime throughout the year through the benefit portal</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">ABC Catering Employer Contribution</h3>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3"></TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">Associates</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">All Others</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Prime HDHP</TableCell>
                        <TableCell className="text-center">$600</TableCell>
                        <TableCell className="text-center">$1,200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Alternate HDHP</TableCell>
                        <TableCell className="text-center">$800</TableCell>
                        <TableCell className="text-center">$1,400</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">How much can I contribute?</h3>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Coverage Type</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">2026 Contribution Limit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Individual</TableCell>
                        <TableCell className="text-center">Up to $4,400</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Family</TableCell>
                        <TableCell className="text-center">Up to $8,750</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Catch-up Contribution (Ages 55+)</TableCell>
                        <TableCell className="text-center">Additional $1,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Eligible expenses</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>include {"doctors'"} visits, eye exams, prescription expenses, laser eye surgery, menstrual products, PPE, over-the-counter medications, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Visit IRS Publication 502 on <a href="http://www.irs.gov" target="_blank" rel="noopener noreferrer" className="text-abc-primary hover:underline font-semibold">www.irs.gov</a> for a complete list</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* FSA Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Flexible Spending Account (FSA)</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">What is a Flexible Spending Account?</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>A flexible spending account (FSA) is a tax-advantaged account that can reimburse you for qualified healthcare or dependent care expenses. You can fund qualified expenses with pre-tax dollars deducted from your paycheck</span>
                  </li>
                </ul>
              </div>

              {/* FSA Comparison Table */}
              <div className="overflow-x-auto my-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4 bg-abc-blue text-white font-semibold"></TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">🏥 Healthcare FSA</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">👓 Limited Purpose FSA</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">👶 Dependent Care FSA</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold bg-muted/30">Plan Eligibility</TableCell>
                      <TableCell className="text-center">PPO Medical Plan enrollees</TableCell>
                      <TableCell className="text-center">Prime HDHP & Alternate HDHP enrollees</TableCell>
                      <TableCell className="text-center">All associates</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold bg-muted/30">Annual Contribution Limit</TableCell>
                      <TableCell className="text-center">Up to $3,300</TableCell>
                      <TableCell className="text-center">Up to $3,300</TableCell>
                      <TableCell className="text-center">Up to $5,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold bg-muted/30">Description</TableCell>
                      <TableCell className="text-center">For eligible healthcare expenses</TableCell>
                      <TableCell className="text-center">For eligible dental and vision expenses only</TableCell>
                      <TableCell className="text-center">For eligible dependent care expenses</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Understanding different types of FSAs: Healthcare FSA, Limited Purpose FSA, Dependent Care FSA</h3>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">For HDHP Prime & HDHP Alternate medical plan enrollees:</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">Your Limited Purpose Health Care FSA may only be used for eligible dental and vision expenses. For additional information, lease see the Limited Purpose FSA eligible expenses list found at Fidelity</div>
                      <div className="ml-6 space-y-2 mt-3">
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>When electing a Flexible Spending Account (FSA), you will set an annual contribution amount</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Eligible claims must be incurred between January 1 and December 31</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>All claims must be submitted by March 15</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Up to $660 of unused funds from the prior year may roll over into the new plan year</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>Any unused amount above $660 will be forfeited</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Transit and Parking FSA</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-abc-primary mb-4">Transit FSA</h4>
                    <ul className="space-y-3 text-foreground ml-6">
                      <li className="flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">•</span>
                        <span>Whether you pay to ride the train, bus or ferry, you can save on commuting expenses with a Transit FSA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">•</span>
                        <span>A Transit FSA allows you to use pre-tax dollars to pay for transit expenses. These expenses are deducted from your paycheck before taxes which lowers your taxable income</span>
                      </li>
                    </ul>
                    
                    {/* Transit FSA Table */}
                    <div className="overflow-x-auto mt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3 bg-abc-blue text-white font-semibold">Eligible Expenses</TableHead>
                            <TableHead className="w-1/3 bg-abc-blue text-white font-semibold">Ineligible Expenses</TableHead>
                            <TableHead className="w-1/3 bg-abc-blue text-white font-semibold">Numbers and Dates</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="align-top">
                              <p className="text-foreground">Expenses incurred for a pass, token, fare card, voucher, or similar item for transportation on mass transit facilities</p>
                            </TableCell>
                            <TableCell className="align-top">
                              <ul className="space-y-2 text-foreground">
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Tunnel, bridge, or highway tolls (EZ Pass)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Fuel, mileage, or other costs incurred to operate a personal vehicle or taxi</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Non-work related transportation or parking expenses</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Expenses incurred in traveling from your office to business or client meetings</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Transit or parking expenses of your spouse and dependents</span>
                                </li>
                              </ul>
                            </TableCell>
                            <TableCell className="align-top">
                              <ul className="space-y-2 text-foreground">
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>Contribute up to $340 per month in pre-tax benefits for 2026, excess balances will be carried over into the following month</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>If your pass needs exceed $340 per month, you may purchase these on a post-tax basis through convenient paycheck deductions</span>
                                </li>
                              </ul>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-abc-primary mb-4">Parking FSA</h4>
                    <ul className="space-y-3 text-foreground ml-6">
                      <li className="flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">•</span>
                        <span>A Parking FSA allows you to pay for eligible work-related parking expenses at your place of employment with pre-tax dollars.Examples include ramp or park-and-ride</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-abc-primary mb-4">Enrolling in these benefits</h4>
                    <ul className="space-y-3 text-foreground ml-6">
                      <li className="flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">•</span>
                        <span>You may enroll in a Transit or Parking FSA at any time during the year without a qualifying event. Access your Fidelity NetBenefits account at NetBenefits.com</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-abc-primary mr-3 mt-1">•</span>
                        <span>For expense reimbursement, log into your Fidelity NetBenefits account at NetBenefits.com</span>
                      </li>
                    </ul>
                    
                    {/* HSA Funding Limits Table */}
                    <div className="overflow-x-auto mt-8">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center bg-abc-blue text-white font-bold text-lg" colSpan={2}>HSA FUNDING LIMITS</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium text-right">INDIVIDUAL</TableCell>
                            <TableCell className="text-center">$4,400</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-right">FAMILY</TableCell>
                            <TableCell className="text-center">$8,750</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-right">CATCH-UP CONTRIBUTION<br />(AGES 55+)</TableCell>
                            <TableCell className="text-center">$1,000</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/fsa-hsa" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FsaHsa;
